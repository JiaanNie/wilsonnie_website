<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      alternative-labels
      color="primary"
      animated
    >
      <q-step
        v-for="(test, index) in steps"
        :key="index"
        :name="test.name"
        :title="test.title"
        :icon="test.icon"
        :done="step > 1"
      >
        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
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
import { ref, defineComponent, reactive } from 'vue';
import { CoverLetterStep } from 'src/components/Schemas/ComponentSchema';

export default defineComponent({
  name: 'CoverLetterGenerator',
  setup() {
    const stepper = ref(null);
    const steps = reactive<Array<CoverLetterStep>>([
      {
        name: 'receiver',
        inputType: 'input',
        title: 'Enter cover letter name',
        icon: 'settings',
      },
      {
        name: 'position',
        inputType: 'input',
        title: 'Enter the position you apply for',
        icon: 'settings',
      },
      {
        name: 'company',
        inputType: 'input',
        title: 'Enter the company you apply for',
        icon: 'settings',
      },
      {
        name: 'introduction',
        inputType: 'editor',
        title: 'Editor your introduction',
        icon: 'settings',
      },
      {
        name: 'experience',
        inputType: 'editor',
        title: 'Editor your experience',
        icon: 'settings',
      },
      {
        name: 'behavior',
        inputType: 'editor',
        title: 'Edit your behavior while you on the job',
        icon: 'settings',
      },
      {
        name: 'conclusion',
        inputType: 'editor',
        title: 'Edit your conclusion',
        icon: 'settings',
      },
      {
        name: 'sender',
        inputType: 'input',
        title: 'Enter the sender name',
        icon: 'settings',
      },
    ]);

    return {
      step: ref(1),
      steps,
      stepper,
    };
  },
});
</script>
