<template>
  <q-card
    v-ripple
    bordered
    class="code-block cursor-pointer q-hoverable shadow-10 text-weight-bold"
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
  color: white;
  background-color: $primary;
  margin-top: 2%;
  margin-bottom: 2%;
}

.code-block:hover {
  background-color: $on-card-hover;
  border-style: soild;
  box-shadow: 2px 2px 2px 2px darkblue;
}

.copy-icon {
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 10px;
}
</style>
