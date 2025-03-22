import "dotenv/config";

import express from "express";
import cors from "cors";

import { projectRouter } from "@router/project.routes";
import { globalErrorHandler } from "@utils/globalErrorHandler";
import { isUserAuthenticated } from "@middleware/isUserAuthenticated";

const app = express();

const PORT = process.env.PORT ?? 8000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/project", isUserAuthenticated, projectRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server started successfully!`);
  console.log(`🌐 Server is running on http://localhost:${PORT}`);
});
