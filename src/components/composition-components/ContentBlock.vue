<template>
  <div class="note-content inset-shadow">
    <h4 class="text-h4 content-header">{{ contentName }}</h4>
    <q-separator color="primary" />
    <code-block v-if="commandLine" :code-string="commandLine" />
    <ol v-if="contentDetails">
      <li
        v-for="detail in contentDetails"
        :key="detail"
        class="text-weight-medium"
      >
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

<style scoped lang="scss">
.content-header {
  margin-top: 0;
  margin-bottom: 1%;
}

.note-content {
  border-radius: 10px;
  margin: 5% 20% 0;
  padding: 1%;
  background-color: white;
}
</style>
