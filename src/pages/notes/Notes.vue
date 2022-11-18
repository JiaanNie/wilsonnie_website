<template>
  <q-page class="row items-center justify-evenly">
    <div>notes page</div>
    <clickable-card-vue
      name="Github Notes"
      icon="fa-solid fa-folder"
      @click="test"
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
    const test = () => {
      router.push({ path: '/notes/github-notes' });
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
