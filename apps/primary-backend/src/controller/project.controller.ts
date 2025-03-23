import { NextFunction, Request, Response } from "express";
import { createError } from "@utils/createError";
import { StatusCodes } from "http-status-codes";
import { prismaClient } from "@repo/db/client";

export const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { prompt, type } = req.body;
    const userId = req.userId ?? "";
    // TODO: get meaningful description
    const description = prompt.split("\n")[0];
    const project = await prismaClient.project.create({
      data: {
        type,
        description,
        userId,
      },
    });

    if (!project) {
      next(
        createError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          "error while crating project"
        )
      );
    }

    res.status(StatusCodes.OK).send({
      success: true,
      projectId: project.id,
    });
  } catch (error) {
    next(
      createError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        (error as Error).message ?? "something went wrong"
      )
    );
  }
};

export const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.body;
    const projects = await prismaClient.project.findMany({
      where: { id: userId },
    });
    if (!projects) {
      next(createError(StatusCodes.BAD_GATEWAY, "internal server error"));
      return;
    }
    res.status(StatusCodes.OK).send({
      success: true,
      message: "project created successfully",
      project: projects,
    });
  } catch (error) {
    createError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      (error as Error).message ?? "something went wrong"
    );
  }
};

export const getAllPrompts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.userId;
    const projectId = req.params.projectId;

    const prompts = await prismaClient.prompt.findMany({
      where: {
        projectId,
      },
      include: {
        action: true,
      },
    });

    if (!prompts) {
      next(
        createError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          "error while creating prompts"
        )
      );
    }
    res.status(StatusCodes.OK).send({
      success: true,
      prompts,
    });
  } catch (error) {
    next(
      createError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        (error as Error).message ?? "something went wrong"
      )
    );
  }
};
