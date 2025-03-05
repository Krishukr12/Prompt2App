import { createProject, getAllProjects } from "@controller/project.controller";
import { Router } from "express";

export const projectRouter: Router = Router();

projectRouter.post("/create-project", createProject);

projectRouter.get("/get-projects", getAllProjects);
