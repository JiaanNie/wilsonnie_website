<template>
  <q-card v-ripple class="card cursor-pointer q-hoverable" bordered square>
    <q-card-section align="center">
      <q-icon :name="icon" size="xl" />
    </q-card-section>
    <q-separator />
    <q-card-section align="center"> {{ name }} </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClickableCard',
  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.card:hover {
  background-color: lightgray;
}
</style>
