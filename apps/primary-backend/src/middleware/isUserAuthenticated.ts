import { NextFunction, Request, Response } from "express";

export const isUserAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const header = req.headers.authorization;
  // parse clerk token here
  next();
  res.send("working");
};
