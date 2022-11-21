<template>
  <q-page ref="video" class="row items-center justify-evenly">
    <div class="q-pa-md">
      <q-video auto src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" />
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
      console.log(video.value);
    });
    return { video };
  },
});
</script>
