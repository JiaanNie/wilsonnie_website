import { RouteRecordRaw } from 'vue-router';
import GithubNotes from 'src/pages/notes/github/GithubNotes.vue';
import AWSNotes from 'src/pages/notes/aws/AWSNotes.vue';
import DockerNotes from 'src/pages/notes/docker/DockerNotes.vue';
import GridNotes from 'src/pages/notes/css-notes/GridNotes.vue';
import RickAndRoll from 'src/pages/notes/others/RickAndRoll.vue';
import BasicDeployingQuasarApp from 'src/pages/notes/others/BasicDeployingQuasarApp.vue';
import CoverLetterGenerator from 'src/pages/cover-letter/CoverLetterGenerator.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/notes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'github-notes', name: 'GithubNotes', component: GithubNotes },
      { path: 'aws-notes', name: 'AWSNotes', component: AWSNotes },
      { path: 'docker-notes', name: 'DockerNotes', component: DockerNotes },
      { path: 'css-grid-notes', name: 'GridNotes', component: GridNotes },
      { path: 'secret-notes', name: 'Secret', component: RickAndRoll },
      {
        path: 'basic-deploying-quasar-app-notes',
        name: 'BasicDeployingQuasarApp',
        component: BasicDeployingQuasarApp,
      },
    ],
  },
  {
    path: '/cover-letter-generator',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'CoverLetterGenerator', component: CoverLetterGenerator }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
