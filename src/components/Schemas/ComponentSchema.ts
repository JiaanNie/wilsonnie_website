export interface Step {
  step: number;
  description: string;
  command?: string;
  details?: string[];
  link?: string;
}


export interface DockerCommand {
  name: string;
  command: string;
  description?: string;
  details: string[];
}
