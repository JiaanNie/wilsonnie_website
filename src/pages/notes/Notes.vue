<template>
  <q-page class="row items-center justify-evenly">
    <div>notes page</div>
    <q-card class="my-card bg-white">
      <q-card-section align="center">
        <q-icon name="fa-solid fa-folder" size="xl" />
      </q-card-section>
      <q-separator />
      <q-card-section> Github Notes </q-card-section>
    </q-card>
    <q-icon name="fa-solid fa-folder" size="xl" />
    <i class="fa-solid fa-user"></i>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GithubNotes',
});
</script>
