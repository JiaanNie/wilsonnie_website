<template>
  <div>notes page</div>
  <div class="q-pa-md">
    <div class="bg-cyan text-white">
      <q-toolbar>
        <q-btn flat round dense icon="assignment_ind" />

        <q-toolbar-title>Quasar</q-toolbar-title>

        <q-btn flat round dense icon="sim_card" class="q-mr-xs" />
        <q-btn flat round dense icon="gamepad" />
      </q-toolbar>
      <q-toolbar inset>
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el label="Home" icon="home" />
          <q-breadcrumbs-el label="Components" icon="widgets" />
          <q-breadcrumbs-el label="Toolbar" />
        </q-breadcrumbs>
      </q-toolbar>
    </div>
  </div>
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
      @click="test()"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import ClickableCardVue from 'src/components/ClickableCard.vue';

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
