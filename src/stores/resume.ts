import { defineStore } from 'pinia';
import {
  Experience,
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
            items: ['Debugging fault using service logs'],
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
          {
            title: 'Troubleshooting and Documenting existing web application',
            items: ['Creating a user manual for whole application'],
          },
          {
            title:
              'Creating VBA and Python scripts to increase office productivity',
          },
          {
            title: 'Data Visualization for presentation uses',
          },
        ],
      },
    ] as Array<Experience>,
    projects: [
      {
        title: 'Personal Website',
        descriptions:
          'Vue-based web application to explore and experiment new skills such as containerization,\
         configuring Nginx, deploying an application as a pod within a kubernetes cluster',
        links: ['https://www.wilsonnie.ca'],
      },
      {
        title: 'Photos Organizer',
        descriptions:
          'A web and mobile app that uses AI to classify landmarks and group the photo together',
      },
      {
        title: 'eIDEAS',
        descriptions:
          'Web application for collaborative idea creation, sharing and tracking for\
        e-Health Saskatchewan.',
      },
    ] as Array<Project>,
    education: [
      {
        name: 'University of Regina',
        dateStarted: 'Sept 2014',
        dateEnded: 'August 2021',
        descriptions:
          'Bachelor of Applied Science- Software Systems Engineering with Internship,\
         University of Regina, Saskatchewan',
        otherDetails: [
          'Capstone: Photo Organizer using machine learning  to classify landmarks',
        ],
      },
    ] as Array<Education>,
    skills: [
      {
        name: 'AWS Services',
        details: ['EC2', 'ECR', 'ECS', 'Dynamodb'],
      },
      {
        name: 'Programming Languages',
        details: [
          'Python',
          'Typescript',
          'HTML',
          'CSS',
          'Javascript',
          'Python',
          'SQLAlchemy',
          'NoSQL',
        ],
      },
      {
        name: 'Frameworks',
        details: ['VueJS', 'Quasar', 'FastAPI', 'ReactJS'],
      },
      {
        name: 'Others',
        details: ['Git', 'Github', 'Linux'],
      },
    ] as Array<Skill>,
    aboutMe: {
      details:
        'Enthusiastic software developer with a background in building a startup! \
        Experience with a wide arsenal of different front/back end technologies and a variety of frameworks.',
    } as AboutMe,
    socials: [
      {
        name: 'GitHub',
        link: 'https://github.com/JiaanNie',
      },
      {
        name: 'Personal Site',
        link: 'https://www.wilsonnie.ca/',
      },
      {
        name: 'LinkedIn',
        link: 'www.linkedin.com/in/wilsonnie',
      },
    ] as Array<Soical>,
    contact: {
      email: 'wilson.nie13@gmail.com',
    } as Contact,
    location: {
      city: 'Richmond',
      province: 'BC',
    } as Location,
  }),

  getters: {
    getExperiences(state): Array<Experience> {
      return state.experiences;
    },
    getEducations(state): Array<Education> {
      return state.education;
    },
    getSoicals(state): Array<Soical> {
      return state.socials;
    },
    getSkills(state): Array<Skill> {
      return state.skills;
    },
    getProjects(state): Array<Project> {
      return state.projects;
    },
    getAboutMe(state): AboutMe {
      return state.aboutMe;
    },
    getLocation(state): Location {
      return state.location;
    },
    getContact(state): Contact {
      return state.contact;
    },
  },

  actions: {
    // Example
    // increment() {
    //   this.counter++;
    // },
  },
});
