<template>
  <q-page ref="video" class="row items-center justify-evenly">
    <div class="q-pa-md">
      <!-- <q-video
        id="video"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
      /> -->
      <iframe
        id="video"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        frameborder="0"
        allow="autoplay"
        allowfullscreen
      />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'RickAndRoll',
  setup() {
    const video = ref(null);
    onMounted(() => {
      console.log('test');
      const clickEvent = new KeyboardEvent('click');
      const element: HTMLElement = document.getElementById('video');
      setTimeout(() => {
        element.dispatchEvent(new KeyboardEvent('keydown', { key: 'k' }));
      }, 100);
      element.dispatchEvent(clickEvent);
    });
    return { video };
  },
});
</script>
