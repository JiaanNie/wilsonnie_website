<template>
  <q-page class="row items-center justify-evenly">
    <div>Welcome to my site</div>
    <ClickableCard name="test" icon="fa-solid fa-folder" />
    <ClickableCard
      name="test2"
      icon="fa-solid fa-folder"
      cardWidth="256"
      cardHeight="256"
      iconSize="156px"
    />
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
