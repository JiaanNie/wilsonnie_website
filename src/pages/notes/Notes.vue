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
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import ClickableCardVue from 'src/components/single_components/ClickableCard.vue';

export default defineComponent({
  name: 'GithubNotes',
  components: {
    ClickableCardVue,
  },
  setup() {
    const router = useRouter();
    const test = (path = 'github') => {
      router.push({ path: `/notes/${path}-notes` });
    };
    return { test };
  },
});
</script>

<style>
.card:hover {
  background-color: lightgray;
}
</style>
