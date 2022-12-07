<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="currentStep"
      ref="stepper"
      alternative-labels
      color="primary"
      animated
    >
      <q-step
        v-for="(step, index) in steps"
        :key="index"
        :name="index + 1"
        :title="step.title"
        :icon="step.icon"
        :done="currentStep > index + 1"
        @transition="test"
      >
        {{ step.description }}
        <q-input
          v-if="step.inputType === 'input'"
          outlined
          v-model="step.defaultValue"
          :label="step.name"
          dense
        />
        <q-editor
          v-else
          v-model="step.defaultValue"
          :definitions="{
            bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
          }"
        />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="stepper.next()"
            color="primary"
            :label="currentStep === steps.length + 1 ? 'Finish' : 'Continue'"
          />
          <q-btn
            v-if="currentStep > 1"
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
import { ref, defineComponent, reactive, watch } from 'vue';
import { CoverLetterStep } from 'src/components/Schemas/ComponentSchema';

export default defineComponent({
  name: 'CoverLetterGenerator',
  setup() {
    const stepper = ref(null);
    const position = ref('');
    const company = ref('');
    const steps = reactive<Array<CoverLetterStep>>([
      {
        name: 'receiver',
        inputType: 'input',
        title: 'Enter receiver name',
        icon: 'settings',
        description:
          'To the person who going to read the cover letter, default to human resources',
        defaultValue: 'Human Resources',
      },
      {
        name: 'position',
        inputType: 'input',
        title: 'Enter the position you apply for',
        icon: 'settings',
        description: 'Enter the position you apply for',
      },
      {
        name: 'company',
        inputType: 'input',
        title: 'Enter the company you apply for',
        icon: 'settings',
        description: 'Enter the company you apply for',
      },
      {
        name: 'introduction',
        inputType: 'editor',
        title: 'Editor your introduction',
        icon: 'settings',
        description: 'This is a default introduction feel free to edit',
        defaultValue: `It is with great interest that I submit my resume for the ${position.value} position in ${company.value}. I am seeking an opportunity to utilize my related skills that I have obtained through working, university courses and independent research. This opportunity will allow me to gain more work experience, knowledge and improve myself as a future software developer.`,
      },
      {
        name: 'experience',
        inputType: 'editor',
        title: 'Editor your experience',
        icon: 'settings',
        description: 'Work experiences related to the job you apply for',
        defaultValue:
          'Highlighting my qualifications for this position, I have a Bachelor Degree of Applied Science in Software System Engineering at the University of Regina, I have worked with a startup as recently as soon as I graduated and have been exposed to a wide range of technologies. I have integrated with many 3rd party software such as Stripe, Hubspot and Mapbox. I also have been developing REST endpoints for the startup company',
      },
      {
        name: 'behavior',
        inputType: 'editor',
        title: 'Edit your behavior while you on the job',
        icon: 'settings',
        description:
          'talk about how will you behavior when you are at your job',
        defaultValue:
          'On the job, you will find me to be reliable, collaborative, and self-motivated. As an employee, I actively learn and try to understand system behaviors as I am highly motivated to develop a career in the field of software development',
      },
      {
        name: 'conclusion',
        inputType: 'editor',
        title: 'Edit your conclusion',
        icon: 'settings',
        description: 'wrap up the cover letter',
        defaultValue: `Given the combination of my technical background and commitment to a career in software development, I am confident that I am prepared to succeed in this position. Thank you for your consideration of my application. I look forward to an interview to discuss my potential with ${company.value}. I can be reached at 1-604-355-1472 or wilson.nie13@gmail.com.`,
      },
      {
        name: 'sender',
        inputType: 'input',
        title: 'Enter the sender name',
        icon: 'settings',
        description: 'Your full name',
        defaultValue: 'Jiaan (Wilson) Nie',
      },
    ]);
    const currentStep = ref(1);
    watch(currentStep, (newX) => {
      console.log(`x is ${newX}`);
    });
    const test = () => {
      console.log('called');
    };

    return {
      currentStep,
      steps,
      stepper,
      ph: ref(''),
      test,
    };
  },
});
</script>
