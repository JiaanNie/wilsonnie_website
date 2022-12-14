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

export interface TableContent {
  label: string;
  icon?: string;
  handler: (elementId: string) => void;
}

export interface Topic {
  name: string;
  icon: string;
  path: string;
}

export interface CoverLetterStep {
  name: string;
  inputType: string;
  title: string;
  icon: string;
  description?: string;
  defaultValue: string;
  displayResult?: string | boolean;
}
