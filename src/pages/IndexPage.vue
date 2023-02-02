<template>
  <q-page class="row justify-evenly">
    <div class="q-pa-md container-page">
      <div class="q-gutter-md">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="white"
          navigation
          padding
          arrows
          height="300px"
          class="bg-primary text-white shadow-1 rounded-borders justify-center"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <q-icon name="fa fa-user" size="56px" />
            <div class="q-mt-md text-center">
              {{ aboutMe }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <q-icon name="fa-solid fa-bullseye" size="56px" />
            <div class="q-mt-md text-center">
              {{ objective }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="contact" class="column no-wrap flex-center">
            <q-icon name="mail" size="56px" />
            <div class="q-mt-md text-center">Email: {{ contact }}</div>
          </q-carousel-slide>
        </q-carousel>
        <div class="row q-gutter-x-md q-gutter-y-md">
          <notes-section />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NotesSection from 'src/components/composition-components/Notes.vue';

export default defineComponent({
  components: {
    NotesSection,
  },
  setup() {
    const slide = ref('style');
    const aboutMe = ref(
      'Enthusiastic software developer with a background in building a startup! Experience with a wide arsenal of different front/back end technologies and a variety of frameworks.'
    );
    const objective = ref(
      'Vue-based web application to explore and experiment new skills such as containerization, configuring Nginx, deploying an application as a pod within a kubernetes cluster'
    );

    const contact = ref('wilson.nie13@gmail.com');
    return { slide, aboutMe, objective, contact };
  },
});
</script>

<style scoped>
.container-page {
  margin-left: 25%;
  margin-right: 25%;
}
</style>
