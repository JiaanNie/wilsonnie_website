import { defineStore } from 'pinia';
import { date } from 'quasar';
import {
  Experience,
  Task,
  Project,
  Soical,
  AboutMe,
  Skill,
  Location,
  Contact,
  Education,
} from 'src/components/Schemas/resume/components';

export const useResumeStore = defineStore('resume', {
  state: () => ({
    experiences: [
      {
        company: 'eHelply Inc',
        title: 'Software Developer',
        location: 'Regina Saskatchewan',
        dateStarted: 'June 2021',
        dateEnded: 'September 2022',
        tasks: [
          {
            title: 'Maintaining and Managing Microservices',
            items: [
              'Refactoring code base to reduce tech debt',
              'Creating SDKs for microservices',
            ],
          },
          {
            title: 'Features Development',
            items: ['Creating new Rest APIs for different services'],
          },
          {
            title: 'Integration with 3rd party software',
            items: [
              'Creating a billing flow using Stripe',
              'A ticket system with Hubspot',
            ],
          },
          {
            title: 'Frontend Development',
            items: [
              'Integrating with the backend',
              'Creating reusable component library',
            ],
          },
          {
            title:
              'Maintaining AWS infrastructure to ensure minimal downtime for services',
          },
        ],
      },
      {
        company: 'Online Therapy Unit',
        location: 'Regina  Saskatchewan',
        title: 'Software Developer',
        dateStarted: 'May 2019',
        dateEnded: 'August 2020',
        tasks: [
          {},
          {},
          {}
        ]

      },
    ] as Array<Experience>,
  }),

  getters: {
    getReciver(state): Receiver {
      return state.reciver;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
  },
});
