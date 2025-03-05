import { NextFunction, Request, Response } from "express";

import { prismaClient } from "@repo/db/client";
import { createError } from "@utils/createError";
import { StatusCodes } from "http-status-codes";

export const createProject = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.send("working fine");
};

export const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.body;
  try {
    const response = await prismaClient.project.findMany({
      where: { id: userId },
    });
    if (!response) {
      next(createError(StatusCodes.BAD_GATEWAY, "internal server error"));
      return;
    }
    res.status(StatusCodes.OK).send({
      success: true,
      message: "project created successfully",
      project: response,
    });
  } catch (error) {
    createError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      (error as Error).message ?? "something went wrong",
    );
  }
};
