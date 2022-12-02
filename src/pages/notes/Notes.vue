<template>
  <clickable-card-vue
    v-for="(topic, index) in topics"
    :key="index"
    :name="topic.name"
    :icon="topic.icon"
    @click="test(topic.path)"
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
      { name: 'Docker', icon: 'fa-brands fa-docker', path: 'docker' },
      { name: 'AWS', icon: 'fa-brands fa-aws', path: 'aws' },
      { name: 'Github', icon: 'fa-brands fa-github', path: 'github' },
      { name: 'Python', icon: 'fas fa-file', path: 'python' },
      {
        name: 'TypeScript/JavaScript',
        icon: 'fa-brands fa-js',
        path: 'javascript',
      },
      { name: 'Kubernetes', icon: 'fas fa-network-wired', path: 'kubernetes' },
      {
        name: 'Deployment to AWS',
        icon: 'fas fa-file',
        path: 'basic-deploying-quasar-app',
      },
      { name: 'React', icon: 'fas fa-file', path: 'react' },
      { name: 'Nginx', icon: 'fa-solid fa-server', path: 'nginx' },
    ]);
    const test = (path = 'github') => {
      router.push({ path: `/notes/${path}-notes` });
    };
    return { test, topics };
  },
});
</script>

<style>
.card:hover {
  background-color: lightgray;
}
</style>
