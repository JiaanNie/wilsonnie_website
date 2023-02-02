export interface Task {
  title: string;
  items?: Array<string>;
}

export interface Experience {
  company: string;
  title: string;
  location: string;
  dateStarted: string;
  dateEnded?: string;
  tasks: Array<Task>;
}

export interface Project {
  title: string;
  descriptions: string;
  links: Array<string>;
}

export interface Education {
  name: string;
  dateStarted: string;
  dateEnded: string;
  descriptions: string;
  otherDetails?: Array<string>;
}

export interface Soical {
  name: string;
  link: string;
  icon: string;
}

export interface AboutMe {
  details: string;
}

export interface Skill {
  name: string;
  details: Array<string>;
}

export interface Location {
  city: string;
  province: string;
}

export interface Contact {
  email: string;
}
