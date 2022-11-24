<template>
  <q-page class="row items-center justify-evenly">
    <content-block-vue
      content-name="test"
      content-description="test"
      command-line="test"
      :content-details="['details 1', 'details 2']"
    ></content-block-vue>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentBlockVue from 'src/components/composition-components/ContentBlock.vue';

export default defineComponent({
  name: 'GithubNotes',
  components: {
    ContentBlockVue,
  },
});
</script>
