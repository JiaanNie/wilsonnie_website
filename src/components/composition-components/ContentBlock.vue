<template>
  <div>
    <h5 class="content-header">{{ contentName }}</h5>
    <q-separator color="black" />
    <code-block v-if="commandLine" :code-string="commandLine"></code-block>
    <ol v-if="contentDetails">
        <li v-for="detail in contentDetails" :key="detail">
          {{ detail }}
        </li>
    </ol>

  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CodeBlock from '../single_components/CodeBlock.vue';
export default defineComponent({
  name: 'ContentBlock',
  components: {
    CodeBlock,
  },
  props: {
    contentName: {
      type: String,
      required: true,
    },
    contentDescription: {
      type: String,
      required: true,
    },
    commandLine: {
      type: String,
      required: false,
    },
    contentDetails: {
      type: Array as PropType<Array<string>>,
      required: false,
    },
    externalLink: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped>
.content-header {
  background-color: white;
  margin-bottom: 0;
}
</style>
