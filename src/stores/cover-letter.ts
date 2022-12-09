import { defineStore } from 'pinia';
import {
  Sender,
  Receiver,
  Position,
  Company,
  Introduction,
  Behavior,
  Conclusion,
  Experience,
} from './schemas/StateSchema';

export const useCoverLetterStore = defineStore('coverLetter', {
  state: () => ({
    reciver: {
      name: 'reciver',
      value: 'Human Resource',
      title: 'Enter receiver name',
      defaultValue: 'Human Resource',
      inputType: 'input',
      icon: 'setting',
      description:
        'To the person who going to read the cover letter, default to human resources',
    } as Receiver,

    position: {
      name: 'position',
      value: '',
      defaultValue: '',
      inputType: 'input',
      icon: 'setting',
      description: 'Enter the position you apply for',
      title: 'Enter the position you apply for',
    } as Position,

    company: {
      name: 'company',
      value: '',
      defaultValue: '',
      inputType: 'input',
      icon: 'setting',
      description: 'Enter the company you apply for',
      title: 'Enter the company you apply for',
    } as Company,

    introduction: {
      name: 'introduction',
      value: '',
      defaultValue: '',
      inputType: 'editor',
      icon: 'setting',
      description: 'This is a default introduction feel free to edit',
      title: 'Edit your introduction',
    } as Introduction,

    experience: {
      name: 'experience',
      title: 'Edit your experience',
      value:
        'Highlighting my qualifications for this position, I have a Bachelor Degree of Applied Science in Software System Engineering at the University of Regina, I have worked with a startup as recently as soon as I graduated and have been exposed to a wide range of technologies. I have integrated with many 3rd party software such as Stripe, Hubspot and Mapbox. I also have been developing REST endpoints for the startup company',
      defaultValue:
        'Highlighting my qualifications for this position, I have a Bachelor Degree of Applied Science in Software System Engineering at the University of Regina, I have worked with a startup as recently as soon as I graduated and have been exposed to a wide range of technologies. I have integrated with many 3rd party software such as Stripe, Hubspot and Mapbox. I also have been developing REST endpoints for the startup company',
      inputType: 'editor',
      icon: 'setting',
      description: 'Work experiences related to the job you apply for',
    } as Experience,
    behavior: {
      name: 'behavior',
      title: 'Edit your behavior while you on the job',
      value:
        'On the job, you will find me to be reliable, collaborative, and self-motivated. As an employee, I actively learn and try to understand system behaviors as I am highly motivated to develop a career in the field of software development',
      defaultValue:
        'On the job, you will find me to be reliable, collaborative, and self-motivated. As an employee, I actively learn and try to understand system behaviors as I am highly motivated to develop a career in the field of software development',
      inputType: 'editor',
      icon: 'setting',
      description: 'talk about how will you behavior when you are at your job',
    } as Behavior,
    conclusion: {
      name: 'conclusion',
      title: 'Edit your conclusion',
      value:
        'Given the combination of my technical background and commitment to a career in software development, I am confident that I am prepared to succeed in this position. Thank you for your consideration of my application. I look forward to an interview to discuss my potential with ${company.value}. I can be reached at 1-604-355-1472 or wilson.nie13@gmail.com.',
      defaultValue:
        'Given the combination of my technical background and commitment to a career in software development, I am confident that I am prepared to succeed in this position. Thank you for your consideration of my application. I look forward to an interview to discuss my potential with ${company.value}. I can be reached at 1-604-355-1472 or wilson.nie13@gmail.com.',
      inputType: 'editor',
      icon: 'setting',
      description: 'wrap up the cover letter',
    } as Conclusion,
    sender: {
      name: 'sender',
      title: 'Enter the sender name',
      value: 'Jiaan (Wilson) Nie',
      defaultValue: 'Jiaan (Wilson) Nie',
      inputType: 'input',
      icon: 'setting',
      description: 'Your full name',
    } as Sender,
  }),

  getters: {
    getReciver(state): Receiver {
      return state.reciver;
    },

    getCompany(state): Company {
      return state.company;
    },
    getPosition(state): Position {
      return state.position;
    },
    getIntroduction(state): Introduction {
      return state.introduction;
    },
    getExpreience(state): Experience {
      return state.experience;
    },

    getBehavior(state): Behavior {
      return state.behavior;
    },

    getConclusion(state): Conclusion {
      return state.conclusion;
    },

    getSender(state): Sender {
      return state.sender;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
    resetToDefault(state) {
      return (state.sender.value = state.sender.defaultValue);
    },
  },
});
