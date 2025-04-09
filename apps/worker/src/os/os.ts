import path from "path";

import { existsSync, mkdirSync, writeFile } from "fs";
import { writeFile as writeFileAsync } from "fs/promises";
import { spawnSync } from "child_process";

const BASE_WORKER_DIR = process.env.BASE_WORKER_DIR || "/tmp/prompt2app-worker";

if (!existsSync(BASE_WORKER_DIR)) {
  mkdirSync(BASE_WORKER_DIR, { recursive: true });
}

export async function onFileUpdate(filePath: string, fileContent: string) {
  console.log(`File updated : ${filePath}`);
  await writeFileAsync(path.join(BASE_WORKER_DIR, filePath), fileContent);
}

export function onShellCommand(shellCommand: string) {
  const commands = shellCommand.split("&&");

  for (const command of commands) {
    console.log(`Running command: ${command}`);
    const result = spawnSync(command.trim(), {
      shell: true,
      cwd: BASE_WORKER_DIR,
      encoding: "utf-8",
    });
    console.log(result.stdout);
    console.error(result.stderr);
  }
}
