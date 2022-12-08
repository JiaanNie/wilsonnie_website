export interface CoverLetterComponent {
  defaultValue: string | ((...args: string[]) => string);
  value: string | ((...args: string[]) => string);
  inputType: string;
  icon: string;
  description: string;
  name: string;
  title: string;
}

export type Receiver = CoverLetterComponent;
export type Position = CoverLetterComponent;
export type Company = CoverLetterComponent;
export type Introduction = CoverLetterComponent;
export type Experience = CoverLetterComponent;
export type Behavior = CoverLetterComponent;
export type Conclusion = CoverLetterComponent;
export type Sender = CoverLetterComponent;
