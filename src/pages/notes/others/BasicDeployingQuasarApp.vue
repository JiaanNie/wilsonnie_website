<template>
  <q-page class="col items-center justify-evenly">
    <h5>test</h5>
    <code-block :codeString="procedure[0].command"></code-block>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import CodeBlock from 'src/components/CodeBlock.vue';

interface Step {
  step: number;
  description: string;
  command?: string;
  details?: string[];
  link?: string;
}

export default defineComponent({
  name: 'BasicDeployment',
  components: {
    CodeBlock,
  },
  setup() {
    const procedure = reactive<Step[]>([
      {
        step: 1,
        description: 'SSH into a ec2 instance',
        command: 'sudo apt-get update',
        details: [
          'assuming this is a brand new instance we need to update the instace by running',
        ],
      },
      {
        stepNumber: 2,
        description: 'SSH into the ec2 instance',
      },
    ]);
    return { procedure };
  },
});
</script>
