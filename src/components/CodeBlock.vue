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
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'CodeBlock',
  props: {
    codeString: {
      type: String,
      require: true,
    },
  },
  setup() {
    const $q = useQuasar();

    function copyCodeToClipBoard(codeString: string) {
      copyToClipboard(codeString)
        .then(() => {
          // success!
          $q.notify({
            message: 'Copied to clipboard ',
            color: 'secondary',
          });
        })
        .catch(() => {
          // fail
        });
    }
    return { copyCodeToClipBoard };
  },
});
</script>

<style lang="scss" scoped>
.code-block {
  width: 80%;
  background-color: $code-block;
}

.code-block:hover {
  background-color: $code-block-onhover;
}

.copy-icon {
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 10px;
}
</style>
