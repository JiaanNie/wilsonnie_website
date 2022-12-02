<template>
  <q-page class="row items-center justify-evenly">
    <clickable-card-vue
      name="Github Notes"
      icon="fa-brands fa-github"
      @click="test('github')"
    />
    <clickable-card-vue
      name="AWS Notes"
      icon="fa-brands fa-aws"
      @click="test('aws')"
    />
    <clickable-card-vue
      name="Docker Notes"
      icon="fa-brands fa-docker"
      @click="test('docker')"
    />
    <clickable-card-vue
      name="Others Notes"
      icon="fa-solid fa-folder"
      @click="test('basic-deploying-quasar-app')"
    />
    <clickable-card-vue
      name="CSS Grids"
      icon="fa-solid fa-grip"
      @click="test('css-grid')"
    />
    <clickable-card-vue
      v-for="(topic, index) in topics"
      :key="index"
      :name="topic.name"
      :icon="topic.icon"
      @click="test('css-grid')"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import ClickableCardVue from 'src/components/single_components/ClickableCard.vue';
import { Topic } from 'src/components/Schemas/ComponentSchema';
export default defineComponent({
  name: 'GithubNotes',
  components: {
    ClickableCardVue,
  },
  setup() {
    const router = useRouter();

    const topics = reactive<Array<Topic>>([
      { name: 'Docker', icon: 'fa-brands fa-docker' },
      { name: 'AWS', icon: 'fa-brands fa-aws' },
      { name: 'Github', icon: 'fa-brands fa-github' },
      { name: 'Python', icon: 'fas fa-file' },
      { name: 'TypeScript/JavaScript', icon: 'fa-brands fa-js' },
      { name: 'Kubernetes', icon: 'fas fa-network-wired' },
      { name: 'Deployment to AWS', icon: 'fas fa-file' },
      { name: 'React', icon: 'fas fa-file' },
      { name: 'Nginx', icon: 'fa-solid fa-server' },
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
