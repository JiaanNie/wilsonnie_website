<template>
  <clickable-card-vue
    v-for="(topic, index) in topics"
    :key="index"
    :name="topic.name"
    :icon="topic.icon"
    @click="navigateTo(topic.path)"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import ClickableCardVue from 'src/components/single_components/ClickableCard.vue';
import { Topic } from 'src/components/Schemas/ComponentSchema';
export default defineComponent({
  name: 'NotesSection',
  components: {
    ClickableCardVue,
  },
  setup() {
    const router = useRouter();

    const topics = reactive<Array<Topic>>([
      {
        name: 'Resume',
        icon: 'work',
        path: '/resume',
      },
      {
        name: 'Cover Letter Generator',
        icon: 'article',
        path: '/cover-letter-generator',
      },
      {
        name: 'Docker',
        icon: 'fa-brands fa-docker',
        path: '/notes/docker-notes',
      },
      {
        name: 'Deployment to AWS',
        icon: 'fas fa-file',
        path: '/notes/basic-deploying-quasar-app-notes',
      },
      { name: 'AWS', icon: 'fa-brands fa-aws', path: '/notes/aws-notes' },
      {
        name: 'Github',
        icon: 'fa-brands fa-github',
        path: '/notes/github-notes',
      },
      { name: 'Python', icon: 'fas fa-file', path: '/notes/python-notes' },
      {
        name: 'TypeScript/JavaScript',
        icon: 'fa-brands fa-js',
        path: '/notes/javascript-notes',
      },
      {
        name: 'Kubernetes',
        icon: 'fas fa-network-wired',
        path: '/notes/kubernetes-notes',
      },
      { name: 'React', icon: 'fas fa-file', path: '/notes/react-notes' },
      { name: 'Nginx', icon: 'fa-solid fa-server', path: '/notes/nginx-notes' },
      { name: 'Fun', icon: 'fas fa-user-secret', path: '/notes/secret-notes' },
    ]);
    const navigateTo = (path = '/notes/github-notes') => {
      router.push({ path: path });
    };
    return { navigateTo, topics };
  },
});
</script>

<style>
.card:hover {
  background-color: lightgray;
}
</style>
