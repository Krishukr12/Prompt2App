// processor !!!!

export class ArtifactProcessor {
  public currentArtifact: string;
  
  private onFileContent: (filePath: string, fileContent: string) => void;
  private onShellCommand: (shellCommand: string) => void;

  constructor(
    currentArtifact: string,
    onFileContent: (filePath: string, fileContent: string) => void,
    onShellCommand: (shellCommand: string) => void
  ) {
    this.currentArtifact = currentArtifact;
    this.onFileContent = onFileContent;
    this.onShellCommand = onShellCommand;
  }

  append(artifact: string) {
    this.currentArtifact += artifact;
  }

  parse() {
    const lines = this.currentArtifact.split("\n");
    const latestActionStart = lines.findIndex((line) =>
      line.includes("<boltAction type=")
    );
    const latestActionEnd = lines.findIndex((line) =>
      line.includes("</boltAction>")
    );

    if (
      latestActionStart === -1 ||
      latestActionEnd === -1 ||
      latestActionEnd < latestActionStart
    ) {
      return;
    }

    const actionLine: string = lines[latestActionStart] ?? "";
    const latestActionContentArray = lines.slice(
      latestActionStart,
      latestActionEnd + 1
    );

    try {
      const typeMatch = actionLine.match(/type="([^"]+)"/);
      const actionType = typeMatch?.[1];

      if (actionType === "shell") {
        const shellCommand = latestActionContentArray
          .slice(1, -1)
          .join("\n")
          .trim();
        this.removeProcessedAction(latestActionStart, latestActionEnd);
        this.onShellCommand(shellCommand);
      } else if (actionType === "file") {
        const pathMatch = actionLine.match(/filePath="([^"]+)"/);
        const filePath = pathMatch?.[1] ?? "";
        const fileContent = latestActionContentArray
          .slice(1, -1)
          .join("\n")
          .trim();
        this.removeProcessedAction(latestActionStart, latestActionEnd);
        this.onFileContent(filePath, fileContent);
      }
    } catch {}
  }

  private removeProcessedAction(start: number, end: number) {
    const lines = this.currentArtifact.split("\n");
    lines.splice(start, end - start + 1);
    this.currentArtifact = lines.join("\n");
  }
}
