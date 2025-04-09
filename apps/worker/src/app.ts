import "dotenv/config";

import cors from "cors";
import express from "express";

import { promptRouter } from "@router/prompt.routes";
import { globalErrorHandler } from "@utils/globalErrorHandler";

const PORT = process.env.PORT ?? 8000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/prompt", promptRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Worker server started successfully!`);
  console.log(`🌐 Worker server is running on http://localhost:${PORT}`);
});
