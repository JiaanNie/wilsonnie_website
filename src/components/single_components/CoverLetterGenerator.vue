<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" ref="stepper" contracted color="primary" animated>
      <q-step
        :name="1"
        title="Select campaign settings"
        icon="settings"
        :done="step > 1"
      >
        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        An ad group contains one or more ads which target a shared set of
        keywords.
      </q-step>

      <q-step :name="3" title="Create an ad" icon="add_comment">
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            ref="stepperNav"
            @click="stepper.next()"
            color="primary"
            :label="step === 3 ? 'Finish' : 'Continue'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'CoverLetterGenerator',
  props: {
    postMaster: {
      type: String,
      required: false,
      default: 'Human Resources'
    },
    companyName: {
      type: String,
      required: true ,
    },
    position: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true
    },
    behavior: {
      type: String,
      required: false,
      default: 'On the job, you will find me to be reliable, collaborative, and self-motivated. As an employee, I actively learn and try to understand system behaviors as I am highly motivated to develop a career in the field of software development.'
    },
    postMaster: {
      type: String,
      required: false,
      default: 'Human Resources'
    },
    postMaster: {
      type: String,
      required: false,
      default: 'Human Resources'
    },
  },
  setup() {
    const stepper = ref(null);
    const introductioin = ref('');
    const concludsion = ref('');

    return {
      step: ref(1),
      stepper,
    };
  },
});
</script>
