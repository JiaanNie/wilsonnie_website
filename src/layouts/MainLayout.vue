<template>
  <q-layout view="lHh Lpr lFf" class="light-gray-background">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar inset>
          <q-breadcrumbs active-color="white" style="font-size: 16px">
            <q-breadcrumbs-el label="Home" icon="home" to="/" />
          </q-breadcrumbs>
        </q-toolbar>
        <q-toggle
          v-model="isDarkMode"
          icon="alarm"
          @update:model-value="toggleDarkMode"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> About me </q-item-label>
        <q-card>
          <q-card-section>
            {{ aboutMe }}
          </q-card-section>
        </q-card>

        <q-item-label header> Objective </q-item-label>

        <q-card>
          <q-card-section>
            {{ objective }}
          </q-card-section>
        </q-card>

        <q-item-label header> Socials </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="light-gray-background">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'LinkedIn',
    caption: 'LinkedIn',
    icon: 'school',
    link: 'https://www.linkedin.com/in/wilsonnie/',
  },
  {
    title: 'Github',
    caption: 'My Github',
    icon: 'code',
    link: 'https://github.com/JiaanNie',
  },
];
const isDarkMode = ref(false);
const aboutMe = ref(
  'Software developer with 2 years experience working in small organizations. Exposed to a wide range of technologies.'
);
const objective = ref(
  'Vue-based web application to explore and experiment new skills such as containerization, configuring Nginx, deploying an application as a pod within a kubernetes cluster'
);

const leftDrawerOpen = ref(false);
const $q = useQuasar();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleDarkMode() {
  // $q.dark.set(true); // or false or "auto"

  // toggle
  $q.dark.toggle();
}
</script>

<style scoped lang="scss">
.light-gray-background {
  background-color: $light-gray-background;
  /* background-color: lightgray; */
}

.about-me {
  padding: 0;
}
</style>
