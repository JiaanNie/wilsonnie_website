<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card">
      <div class="q-pa-md">
        <q-avatar
          color="pink"
          text-color="white"
          icon="work"
          style="top: 0; left: 22px; transform: translateY(-90%)"
        >
        </q-avatar>
      </div>

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        {{ lorem }}
      </q-card-section>
      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary"> Getting Started </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AWSbNotes',
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
