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
            <q-icon name="style" size="56px" />
            <div class="q-mt-md text-center">
              {{ aboutMe }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <q-icon name="live_tv" size="56px" />
            <div class="q-mt-md text-center">
              {{ objective }}
            </div>
          </q-carousel-slide>
        </q-carousel>
        <div class="row q-gutter-x-md q-gutter-y-md">
          <notes-section />
        </div>

        <div class="row q-gutter-x-md q-gutter-y-md justify-center">
          <img
            src="~assets/betrayed-bird.gif"
            alt="this slowpoke moves"
            width="500"
          />
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
      'Software developer with 2 years experience working in small organizations. Exposed to a wide range of technologies.'
    );
    const objective = ref(
      'Vue-based web application to explore and experiment new skills such as containerization, configuring Nginx, deploying an application as a pod within a kubernetes cluster'
    );
    return { slide, aboutMe, objective };
  },
});
</script>

<style scoped>
.container-page {
  margin-left: 25%;
  margin-right: 25%;
}
</style>
