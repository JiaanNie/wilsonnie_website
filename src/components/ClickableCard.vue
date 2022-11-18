<template>
  <q-card
    v-ripple
    class="card cursor-pointer q-hoverable"
    bordered
    square
    :style="{
      width: cardWidth.endsWith('px') ? cardWidth : `${cardWidth}px`,
      height: cardHeight.endsWith('px') ? cardHeight : `${cardHeight}px`,
    }"
  >
    <q-card-section align="center">
      <q-icon
        :name="icon"
        :size="iconSize.endsWith('px') ? iconSize : `${iconSize}px`"
      />
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
    cardHeight: {
      type: String,
      default: '192',
    },
    cardWidth: {
      type: String,
      default: '192',
    },
    iconSize: {
      type: String,
      default: '96',
    },
  },
});
</script>

<style>
.card:hover {
  background-color: lightgray;
}
</style>
