<template>
  <q-card
    v-ripple
    class="card cursor-pointer q-hoverable"
    bordered
    square
    :style="{ width: width, height: height }"
  >
    <q-card-section align="center">
      <q-icon :name="icon" :size="`${iconSize.toString()}px`" />
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
    height: {
      type: String,
      default: '192px',
      required: false,
    },
    width: {
      type: String,
      default: '192px',
      required: false,
    },
    iconSize: {
      type: Number,
      default: 96,
      required: false,
    },
  },
});
</script>

<style>
.card:hover {
  background-color: lightgray;
}
</style>
