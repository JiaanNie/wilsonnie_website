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
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <q-icon name="live_tv" size="56px" />
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <q-icon name="layers" size="56px" />
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="map" class="column no-wrap flex-center">
            <q-icon name="terrain" size="56px" />
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
        </q-carousel>
        <div class="row q-gutter-x-md q-gutter-y-md">
          <notes-section />
        </div>

        <div class="row q-gutter-x-md q-gutter-y-md justify-center">
          <h1>I need something to fill the void. so here is the H1 tag</h1>
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
    const lorem = ref(
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    );
    return { slide, lorem };
  },
});
</script>

<style scoped>
.container-page {
  margin-left: 25%;
  margin-right: 25%;
}
</style>
