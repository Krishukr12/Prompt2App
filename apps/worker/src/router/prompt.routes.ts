import { Router } from "express";
import { postPrompt } from "@controller/prompt.controller";

export const promptRouter: Router = Router();

promptRouter.post("/", postPrompt);
