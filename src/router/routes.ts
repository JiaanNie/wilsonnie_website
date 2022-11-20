import { RouteRecordRaw } from 'vue-router';
import GithubNotes from 'src/pages/notes/github/GithubNotes.vue';
import AWSNotes from 'src/pages/notes/aws/AWSNotes.vue';
import DockerNotes from 'src/pages/notes/docker/DockerNotes.vue';
import GridNotes from 'src/pages/notes/CSS/GridNotes.vue';

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
      {
        path: '',
        name: 'Notes',
        component: () => import('pages/notes/Notes.vue'),
      },
      { path: 'github-notes', name: 'GithubNotes', component: GithubNotes },
      { path: 'aws-notes', name: 'AWSNotes', component: AWSNotes },
      { path: 'docker-notes', name: 'DockerNotes', component: DockerNotes },
      { path: 'css-grid-notes', name: 'GridNotes', component: GridNotes },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
