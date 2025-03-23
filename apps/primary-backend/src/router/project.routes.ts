import { createProject, getAllProjects, getAllPrompts } from "@controller/project.controller";
import { Router } from "express";

export const projectRouter: Router = Router();

projectRouter.post("/create-project", createProject);

projectRouter.get("/get-projects", getAllProjects);

projectRouter.get("/get-prompt", getAllPrompts);
