<template>
  <q-card
    v-ripple
    bordered
    class="code-block shadow-24 cursor-pointer q-hoverable"
    @click="showNotif"
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
    const showNotif = () => {
      $q.notify({
        message: 'Jim pinged you.',
        color: 'purple',
      });
    };

    function copyCodeToClipBoard(codeString: string) {
      copyToClipboard(codeString)
        .then(() => {
          // success!
          $q.notify({
            message: 'Jim pinged you.',
            caption: '5 minutes ago',
            color: 'secondary',
          });
        })
        .catch(() => {
          // fail
        });
    }
    const test = () => {
      console.log('test');
    };
    return { copyCodeToClipBoard, test, showNotif };
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
