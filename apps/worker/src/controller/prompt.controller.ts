import "dotenv/config";

import Anthropic from "@anthropic-ai/sdk";

import { NextFunction, Request, Response } from "express";
import { prismaClient } from "@repo/db/client";
import { createError } from "@utils/createError";
import { StatusCodes } from "http-status-codes";
import { systemPrompt } from "@system/systemPrompt";
import { ArtifactProcessor } from "@utils/parser";
import { onFileUpdate, onShellCommand } from "@os/os";

export const postPrompt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { prompt, projectId } = req.body;
  const aiClient = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  try {
    const project = await prismaClient.prompt.findFirst({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      next(createError(StatusCodes.BAD_GATEWAY, "project not found"));
    }

    await prismaClient.prompt.create({
      data: {
        content: prompt,
        projectId,
        type: "USER",
      },
    });

    const allPrompts = await prismaClient.prompt.findMany({
      where: {
        projectId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    let artifactProcessor = new ArtifactProcessor(
      "",
      onFileUpdate,
      onShellCommand
    );

    let artifact = "";
    let response = aiClient.messages
      .stream({
        messages: allPrompts.map((p) => ({
          role: p.type === "USER" ? "user" : "assistant",
          content: p.content,
        })),
        system: systemPrompt("REACT_NATIVE"),
        max_tokens: 8000,
        model: "claude-3-7-sonnet-20250219",
      })
      .on("text", (text) => {
        artifactProcessor.append(text);
        artifactProcessor.parse();
        artifact += text;
      })
      .on("finalMessage", async (message) => {
        console.log("done! form LLM Side");
        await prismaClient.prompt.create({
          data: {
            content: artifact,
            projectId,
            type: "SYSTEM",
          },
        });
      });
  } catch (error) {
    next(
      createError(StatusCodes.INTERNAL_SERVER_ERROR, "internal server error")
    );
  }
};
