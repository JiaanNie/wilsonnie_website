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
            title: 'Responsibility for professional services role',
            items: [
              'Develop a process for building and deploying the frontend and backend of client’s app to an EC2 instance, including setting up test and prod environments, for easy use by other team members when making updates or adding new features.',
              'implement the features, and test them to ensure they meet the requirements. Present the new features to the team for a final check before allowing the client to try them out in the test environment.',
              "If the client's feature requests can be integrated with our services, I will do so to accelerate the development process",
              'I consider the use of EC2 versus other AWS services based on cost efficiency for the client. For example, switching to using ECS and ECR and setting up an auto-deployment pipeline may provide scalability, but the increased cost may not be justified in the current situation',
            ],
          },
          {
            title: 'Features Development',
            items: [
              'Creating new REST APIs for various services, including fetching and geocoding places, managing reviews for entities (create, update, read, delete), and booking and editing appointments',
            ],
          },
          {
            title: 'Integration with 3rd party software',
            items: [
              'Implementing a billing flow using Stripe, which will automatically email receipts to users with detailed information about their charges after payment is made.',
              'Implementing a ticket system using HubSpot, where users can submit tickets about any issues they encounter with the SASS platform. One of our developers will then assist them in resolving the issue',
            ],
          },
          {
            title: 'Frontend Development',
            items: [
              'We have utilized MVC development principles to enable the frontend platform to communicate with the server',
              'Creating reusable component library',
            ],
          },
          {
            title: 'Services Maintainces',
            items: [
              'use service logs to debug faults and quickly push out patches to fix bugs',
              'Refactoring code base to reduce tech debt',
              'I am responsible for maintaining and updating a number of microservices, including the Billing, Places, Appointments, and Reviews services. Each of these microservices has CRUD (create, read, update, delete) endpoints',
            ],
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
            items: [
              'Creating a user manual for the whole web application which allows new and current team members to use the application.',
            ],
          },
          {
            title:
              'Creating VBA and Python scripts to increase office productivity',
            items: [
              'Writing and maintaining automation scripts using VBA and Python',
              'My automation scripts parse excel files. Removing unnecessary columns and  reduced labor required by 1 to 2 days per month!',
            ],
          },
          {
            title: 'Data Visualization for presentation uses',
            items: [
              'create a visualization using users data, such as a heatmap, to identify regions where the applications are being accessed from within Saskatchewan. This visualization will be used for presentation purposes.',
            ],
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
          'BASC - Software Systems Engineering, Coop, University of Regina, Saskatchewan',
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
        icon: 'fa-brands fa-github',
      },
      {
        name: 'Personal Site',
        link: 'https://www.wilsonnie.ca/',
        icon: 'computer',
      },
      {
        name: 'LinkedIn',
        link: 'www.linkedin.com/in/wilsonnie',
        icon: 'fab fa-linkedin-in',
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
