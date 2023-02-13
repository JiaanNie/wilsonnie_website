export interface AWSService {
  name: string;
  description: string;
  details: Array<string>;
  example: Array<Step>
}

export interface Step {
  description: string
  extraDetail?: Array<string>
  resourceLinks?: Array<string>
}
