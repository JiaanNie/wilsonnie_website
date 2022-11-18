<template>
  <q-page class="row items-center justify-evenly">
    <div>Welcome to my site</div>
    <ClickableCard name="test dsfsddfa" icon="fa-solid fa-folder" />
  </q-page>
</template>

<script lang="ts">
import ClickableCard from 'src/components/ClickableCard.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    ClickableCard,
  },
});
</script>
