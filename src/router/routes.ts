import { RouteRecordRaw } from 'vue-router';
import GithubNotes from 'src/pages/notes/GithubNotes.vue';
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
