<template>
  <q-card
    v-ripple
    bordered
    class="code-block shadow-24 cursor-pointer q-hoverable"
    @click="copyCodeToClipBoard(codeString)"
  >
    <q-card-section>
      # {{ codeString }}
      <q-icon name="fas fa-copy" class="copy-icon"></q-icon>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { copyToClipboard } from 'quasar';

export default defineComponent({
  name: 'CodeBlock',
  props: {
    codeString: {
      type: String,
      require: true,
    },
  },
  setup() {
    function copyCodeToClipBoard(codeString: string) {
      copyToClipboard(codeString)
        .then(() => {
          // success!
          console.log(codeString);
        })
        .catch(() => {
          // fail
        });
    }
    const test = () => {
      console.log('test');
    };
    return { copyCodeToClipBoard, test };
  },
});
</script>

<style scoped>
.code-block {
  width: 80%;
  background-color: #80d8ff;
}

.code-block:hover {
  background-color: #0091ea;
}

.copy-icon {
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 10px;
}
</style>
