<template>
  <div> content block </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ContentBlock',
  props: {
    contentName: {
      type: String,
      required: true
    },
    contentDescription: {
      type: String,
      required: true
    },

    commandLine: {
      type: String,
      required: false
    },
    contentDetails: {
      type: Array as PropType<Array<number>>,
      required: false
    },
    externalLink: {
      type: String,
      required: false
    }
  }
});
</script>
