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
        overview:
          'ehelply Inc is a startup developing applications for clients based on their requirements and has a suite of APIs that contains common features for Appointments, Reviews and Places... My role involved both professional services and SASS developments.',
        title: 'Software Developer',
        location: 'Regina Saskatchewan',
        dateStarted: 'June 2021',
        dateEnded: 'September 2022',
        tasks: [
          {
            title: 'Setup New Deployment Procedure',
            items: [
              'Implemented the features, and tested them to ensure they meet the requirements. Present the new features to the team for a final check before allowing the client to try them out in the test environment.',
            ],
          },
          {
            title: 'Testing and QA',
            items: [
              'Creating new REST APIs for various services, including fetching and geocoding places, managing reviews for entities (create, update, read, delete), and booking and editing appointments',
            ],
          },
          {
            title: 'Request Intake and Prioritization:',
            items: [
              "Assessed if  the client's feature requests can be performed by our services,  accelerating their development process.",
            ],
          },
          {
            title: 'Maintaining and Updating Microservice',
            items: [
              'Managed microservices such as Billing, Places, Appointments, and Reviews services. Migrate them work with new version of Python.',
            ],
          },
          {
            title: 'Creating New REST APIs for Various Services',
            items: [
              'Fetching geocode for locations, managing reviews for entities (create, update, read, delete), and booking and editing appointments.',
            ],
          },
          {
            title: 'Integration with Stripe',
            items: [
              'Implementing a billing flow using Stripe, which will automatically email receipts to users with detailed information about their charges after payment is made.',
            ],
          },
          {
            title: 'Integration with Hubspot',
            items: [
              'Implementing a ticket system using HubSpot, where users can submit tickets about any issues they encounter with the SASS platform. One of our developers will then assist them in resolving the issue.',
            ],
          },
          {
            title: 'Integration of Frontend with Backend',
            items: [
              'Utilized MVC development principles to enable the frontend platform to communicate with the server.',
            ],
          },
          {
            title: 'Debugging',
            items: [
              'Use service logs to debug faults and quickly push out patches to fix bugs. Refactoring code base to reduce tech debt.',
            ],
          },
          {
            title: 'Achievements',
            icon: 'star',
            items: [
              'Developed SDK from the ground up  to speed up feature development.',
              'Significantly reduced manual work by 10% for our clients by using our APIs.',
              'Built and deployed a full stack web application for clients.',
            ],
          },
        ],
      },
      {
        company: 'Online Therapy Unit',
        overview:
          'The Online Therapy Unit of UofR is a program that offers free, effective, and convenient online therapy for various mental health concerns. It provides online educational  material, and provides  free therapy by licensed professionals. My role involved assisting the development team with bug fixes and documentation.',
        location: 'Regina  Saskatchewan',
        title: 'Software Developer',
        dateStarted: 'May 2019',
        dateEnded: 'August 2020',
        tasks: [
          {
            title: 'Documentation',
            items: [
              'Creating a user manual for the whole web application which allows new and current team members to use the application.',
            ],
          },
          {
            title: 'Creating Automation Scripts',
            items: [
              'Writing and maintaining automation scripts using VBA and Python',
              'My automation scripts parse excel files. Removing unnecessary columns and  reduced labor required by 1 to 2 days per month!',
            ],
          },
          {
            title: 'Data Visualization',
            items: [
              ' Using users data, such as a heatmap, to identify regions where the applications are being accessed from within Saskatchewan. This visualization will be used for presentation purposes.',
            ],
          },
          {
            title: 'Achievements',
            icon: 'star',
            items: [
              'My automation scripts parse excel files. Removing unnecessary columns and  reduced labor required by 1 to 2 days per month.',
            ],
          },
        ],
      },
    ] as Array<Experience>,
    projects: [
      {
        title: 'Setting up CICD Pipeline',
        descriptions:
          'Setting up a CICD pipeline using AWS CodeBuild, CodeDeploy and CodePipline.',
      },
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
        details: [
          'CodeCommit',
          'CodeBuild',
          'CodeDeploy',
          'CodePipline',
          'S3',
          'Secret Manager',
          'EC2',
          'ECR',
          'ECS',
          'Dynamodb',
        ],
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
