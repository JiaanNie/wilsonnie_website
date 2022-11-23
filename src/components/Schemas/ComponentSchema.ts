interface Command {
  name: string;
  command: string;
}

export interface DockerCommand extends Command {
  description?: string;
  details: string[];
}

export interface Step {
  step: number;
  description: string;
  command?: string;
  details?: string[];
  link?: string;
}