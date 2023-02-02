<template>
  <q-page ref="video" class="row items-center justify-evenly">
    <div class="q-pa-md">
      <iframe
        id="video"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        frameborder="0"
        allow="autoplay"
        allowfullscreen
      />
    </div>
    <div class="row q-gutter-x-md q-gutter-y-md justify-center">
      <img
        src="~assets/betrayed-bird.gif"
        alt="this slowpoke moves"
        width="500"
      />
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
