<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="currentStepName"
      ref="stepper"
      alternative-labels
      color="primary"
      animated
    >
      <q-step
        v-for="(step, index) in steps"
        :key="`${stepsComponentKey}-${index}`"
        :name="step.name"
        :title="step.title"
        :icon="step.icon"
        :done="currentStep > index + 1"
      >
        {{ step.description }}
        <q-input
          v-if="step.inputType === 'input'"
          class="spacing"
          outlined
          v-model="step.defaultValue"
          :label="step.name"
          dense
        />
        <q-editor
          class="spacing"
          v-else
          v-model="step.defaultValue"
          :definitions="{
            bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
          }"
        />

        <q-space />
        <q-btn
          v-if="currentStep > 1"
          flat
          color="primary"
          @click="previousPanel(steps[index - 1])"
          label="Back"
          class="q-ml-sm"
        />
        <q-btn
          @click="nextPanel(step)"
          color="primary"
          :label="currentStep === steps.length ? 'Finish' : 'Continue'"
        />
      </q-step>
    </q-stepper>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, watch, Ref } from 'vue';
import { CoverLetterStep } from 'src/components/Schemas/ComponentSchema';
import { QStepper } from 'quasar';


export default defineComponent({
  name: 'CoverLetterGenerator',
  setup() {
    const stepper: Ref<QStepper> = ref<QStepper>(null);
    const position = ref('');
    const company = ref('');
    const coverLetter = ref('Dear ');
    const currentStepName = ref('receiver');
    const currentStep = ref(1);
    const stepsComponentKey  = ref('test')
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
        defaultValue: '',
      },
      {
        name: 'company',
        inputType: 'input',
        title: 'Enter the company you apply for',
        icon: 'settings',
        description: 'Enter the company you apply for',
        defaultValue: '',
      },
      {
        name: 'introduction',
        inputType: 'editor',
        title: 'Edit your introduction',
        icon: 'settings',
        description: 'This is a default introduction feel free to edit',
        defaultValue: `It is with great interest that I submit my resume for the ${position.value} position in ${company.value}. I am seeking an opportunity to utilize my related skills that I have obtained through working, university courses and independent research. This opportunity will allow me to gain more work experience, knowledge and improve myself as a future software developer.`,
      },
      {
        name: 'experience',
        inputType: 'editor',
        title: 'Edit your experience',
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

    watch(steps, (newSteps) => {
      console.log(newSteps);
    });

    function forceRendering() {
      stepsComponentKey
    }

    function nextPanel(step: CoverLetterStep) {
      if (step.name === 'sender') {
        console.log('finsihed');
        console.log(steps);
      }
      if (step.name === 'position') {
        position.value = step.defaultValue;
        console.log(position.value);
      }
      if (step.name === 'company') {
        company.value = step.defaultValue;
      }

      stepper.value.next();
      currentStep.value += 1;
    }
    function previousPanel(step: CoverLetterStep) {
      stepper.value.previous();
      currentStep.value -= 1;
    }

    return {
      currentStep,
      currentStepName,
      stepsComponentKey,
      steps,
      stepper,
      nextPanel,
      previousPanel,
      coverLetter,
      position,
      company,
    };
  },
});
</script>
<style scoped>
.spacing {
  margin: 3% 0;
}
</style>
