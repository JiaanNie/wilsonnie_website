<template>
  <q-card class="my-card">
    <div>
      <q-avatar
        color="pink"
        text-color="white"
        :icon="icon"
        style="top: 0; left: 22px; transform: translateY(-60%)"
      >
      </q-avatar>
    </div>

    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle2">{{ subTitle }}</div>
    </q-card-section>

    <q-separator inset />

    <q-card-section style="height: 50%">
      {{ details }}
    </q-card-section>
    <q-separator />

    <q-card-actions>
      <q-btn flat round :icon="actionIcon" />
      <q-btn flat color="primary"> {{ actionName }} </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCard',
  props: {
    icon: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: false,
    },
    details: {
      type: String,
      required: true,
    },
    actionIcon: {
      type: String,
      required: true,
    },
    actionName: {
      type: String,
      required: true,
    },
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
  height: 100%


.q-pa-md
  width: 0
  height: 0
</style>
