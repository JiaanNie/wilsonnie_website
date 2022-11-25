<template>
  <q-page class="row items-center justify-evenly">
    <clickable-card-vue
      name="Notes"
      icon="fas fa-graduation-cap"
      @click="test"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import ClickableCardVue from 'src/components/single_components/ClickableCard.vue';

export default defineComponent({
  components: {
    ClickableCardVue,
  },
  setup() {
    const router = useRouter();
    const test = () => {
      router.push({ path: '/notes' });
    };
    return { test };
  },
});
</script>
