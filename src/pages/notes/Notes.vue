<template>
  <q-page class="row items-center justify-evenly">
    <div>notes page</div>
    <q-card
      v-ripple
      class="card cursor-pointer q-hoverable"
      bordered
      square
      @click="test"
    >
      <q-card-section align="center">
        <q-icon name="fa-solid fa-folder" size="xl" />
      </q-card-section>
      <q-separator />
      <q-card-section align="center"> Github Notes </q-card-section>
    </q-card>
    <q-icon name="fa-solid fa-folder" size="xl" />
    <i class="fa-solid fa-user"></i>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'GithubNotes',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const test = () => {
      router.push({ path: '/notes/github-notes' });
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
