<template>
  <q-page class="row items-center justify-evenly">
    <product-card></product-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from 'src/components/single_components/ProductCard.vue';

export default defineComponent({
  name: 'AWSbNotes',
  components: {
    ProductCard,
  },
  setup() {
    return {
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px

.q-pa-md
  width: 0
  height: 0
</style>
