import { createError } from "@utils/createError";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

const JWT_PUBLIC_KEY = "";

export const isUserAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    next(createError(StatusCodes.UNAUTHORIZED, "Unauthorized"));
    return;
  }

  const decoded = jwt.verify(token, JWT_PUBLIC_KEY, {
    algorithms: ["RS256"],
  });

  if (!decoded) {
    next(createError(StatusCodes.UNAUTHORIZED, "Unauthorized"));
    return;
  }

  const userId = (decoded as any).sub;

  if (!userId) {
    next(createError(StatusCodes.UNAUTHORIZED, "Unauthorized"));
    return;
  }

  req.userId = userId;
  next();
};
