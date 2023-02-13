<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="currentStepName"
      ref="stepper"
      alternative-labels
      color="primary"
      animated
      class="my-stepper shadow-19"
    >
      <q-step
        v-for="(step, index) in steps"
        :key="index"
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
          @click="previousPanel(steps[index - 1], index)"
          label="Back"
          class="q-ml-sm"
        />
        <q-btn
          @click="nextPanel(step, index)"
          color="primary"
          :label="currentStep === steps.length ? 'Finish' : 'Continue'"
        />
        <q-btn
          class="on-right"
          @click="gettingApiKey"
          v-if="step.inputType !== 'input'"
          :disable="disable"
          color="primary"
          label="Rephase"
        />
      </q-step>
    </q-stepper>
    <q-card v-if="startProcessing" class="my-card shadow-19">
      <q-card-section>
        <q-input v-model="apiKey" label="Api Key" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat @click="cancelRephaseProcess">Cancle</q-btn>
        <q-btn flat color="primary" @click="getRephaseFromOpenAI"
          >Rephase</q-btn
        >
      </q-card-actions>
    </q-card>
    <q-card v-if="gettingResponse" class="my-card shadow-19">
      <q-card-section>
        {{ aiResponse }}
      </q-card-section>
      <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
      <q-card-actions align="right">
        <q-btn
          color="primary"
          :disable="disable"
          @click="replaceText(aiResponse, currentStep)"
          >use it</q-btn
        >
      </q-card-actions>
    </q-card>
    <q-card class="my-card shadow-19">
      <div v-for="(step, index) in steps" :key="index">
        <q-card-section v-if="step.displayResult">
          {{ step.defaultValue }}
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, Ref } from 'vue';
import { CoverLetterStep } from 'src/components/Schemas/ComponentSchema';
import { QStepper } from 'quasar';
import { Configuration, OpenAIApi } from 'openai';

export default defineComponent({
  name: 'CoverLetterGenerator',
  setup() {
    const stepper: Ref<QStepper> = ref<QStepper>(null);
    const position = ref('');
    const company = ref('');
    const phoneNumber = ref('');
    const emailAddress = ref('');
    const currentStepName = ref('receiver');
    const currentStep = ref(1);

    const aiResponse = ref('');
    const visible = ref(true);
    const startProcessing = ref(false);
    const gettingResponse = ref(false);
    const disable = ref(false);

    const steps = reactive<Array<CoverLetterStep>>([
      {
        name: 'receiver',
        inputType: 'input',
        title: 'Enter receiver name',
        icon: 'settings',
        description:
          'To the person who going to read the cover letter, default to human resources',
        defaultValue: 'Dear Human Resources',
        displayResult: true,
      },
      {
        name: 'position',
        inputType: 'input',
        title: 'Enter the position you apply for',
        icon: 'groups',
        description: 'Enter the position you apply for',
        defaultValue: '',
      },
      {
        name: 'company',
        inputType: 'input',
        title: 'Enter the company you apply for',
        icon: 'home',
        description: 'Enter the company you apply for',
        defaultValue: '',
      },
      {
        name: 'introduction',
        inputType: 'editor',
        title: 'Edit your introduction',
        icon: 'sentiment_very_satisfied',
        description: 'This is a default introduction feel free to edit',
        defaultValue: `It is with great interest that I submit my resume for the ${position.value} position in ${company.value}. \
        I am seeking an opportunity to utilize my related skills that I have obtained through working, university courses and independent research. \
        This opportunity will allow me to gain more work experience, knowledge and improve myself as a future software developer.`,
        displayResult: false,
      },
      {
        name: 'experience',
        inputType: 'editor',
        title: 'Edit your experience',
        icon: 'elderly',
        description: 'Work experiences related to the job you apply for',
        defaultValue:
          'Highlighting my qualifications for this position, \
          I have a Bachelor Degree of Applied Science in Software System Engineering at the University of Regina, \
          I have worked with a startup as recently as soon as I graduated and have been exposed to a wide range of technologies. \
          I have integrated with many 3rd party software such as Stripe, Hubspot and Mapbox. \
          I also have been developing REST endpoints for the startup company',
        displayResult: false,
      },
      {
        name: 'behavior',
        inputType: 'editor',
        title: 'Edit your behavior while you on the job',
        icon: 'help_center',
        description:
          'talk about how will you behavior when you are at your job',
        defaultValue:
          'On the job, you will find me to be reliable, collaborative, and self-motivated. \
          As an employee, I actively learn and try to understand system behaviors as I am highly motivated to develop a career in the field of software development',
        displayResult: false,
      },
      {
        name: 'phoneNumber',
        inputType: 'input',
        title: 'Enter your phone number',
        icon: 'cell_wifi',
        description: 'provide a phone number so the company can contact you:',
        defaultValue: '',
      },
      {
        name: 'emailAddress',
        inputType: 'input',
        title: 'Enter your email address',
        icon: 'mail',
        description: 'provide a email address so the company can contact you:',
        defaultValue: 'wilson.nie13@gmail.com',
      },
      {
        name: 'conclusion',
        inputType: 'editor',
        title: 'Edit your conclusion',
        icon: 'sos',
        description: 'wrap up the cover letter',
        defaultValue: `Given the combination of my technical background and commitment to a career in software development, \
        I am confident that I am prepared to succeed in this position. Thank you for your consideration of my application. \
        I look forward to an interview to discuss my potential with ${company.value}. \
        I can be reached at ${phoneNumber.value} or ${emailAddress.value}.`,
        displayResult: false,
      },
      {
        name: 'sender',
        inputType: 'input',
        title: 'Enter the sender name',
        icon: 'family_restroom',
        description: 'Your full name',
        defaultValue: 'Jiaan (Wilson) Nie',
        displayResult: false,
      },
    ]);

    const currentInputType = ref(steps[0].inputType);

    function cancelRephaseProcess() {
      disable.value = false;
      startProcessing.value = false;
      gettingResponse.value = false;
      visible.value = true;
    }

    function nextPanel(step: CoverLetterStep, index: number) {
      currentInputType.value = steps[index + 1].inputType;
      visible.value = true;
      startProcessing.value = false;
      aiResponse.value = '';
      if (step.name === 'position') {
        position.value = step.defaultValue;
      }
      if (step.name === 'company') {
        company.value = step.defaultValue;
        steps[
          index + 1
        ].defaultValue = `It is with great interest that I submit my resume for the ${position.value} position in ${company.value}.\
         I am seeking an opportunity to utilize my related skills that I have obtained through working, university courses and independent research. \
         This opportunity will allow me to gain more work experience, knowledge and improve myself as a future software developer.`;
      }
      if (step.name === 'emailAddress') {
        emailAddress.value = step.defaultValue;
        steps[
          index + 1
        ].defaultValue = `Given the combination of my technical background and commitment to a career in software development, \
        I am confident that I am prepared to succeed in this position. Thank you for your consideration of my application. \
        I look forward to an interview to discuss my potential with ${company.value}. \
        I can be reached at ${phoneNumber.value} or ${emailAddress.value}.`;
      }

      if (steps[index + 1].displayResult === false) {
        steps[index + 1].displayResult = true;
      }

      if (step.name === 'phoneNumber') {
        phoneNumber.value = step.defaultValue;
      }
      stepper.value.next();
      currentStep.value += 1;
    }
    function previousPanel(step: CoverLetterStep, index: number) {
      currentInputType.value = step.inputType;
      stepper.value.previous();
      if (steps[index].displayResult === true) {
        steps[index].displayResult = false;
      }
      currentStep.value -= 1;
    }

    function replaceText(aiResponse: string, stepNumber: number) {
      steps[stepNumber - 1].defaultValue = aiResponse;
    }

    const apiKey = ref('');

    async function gettingApiKey() {
      disable.value = true;
      startProcessing.value = true;
    }
    async function getRephaseFromOpenAI() {
      gettingResponse.value = true;
      console.log(steps[currentStep.value - 1].defaultValue);
      const configuration = new Configuration({
        apiKey: apiKey.value,
      });
      const openai = new OpenAIApi(configuration);
      const prompt = ref(
        `reword the following: ${steps[currentStep.value - 1].defaultValue}`
      );
      const completion = await openai.createCompletion({
        max_tokens: 4000,
        model: 'text-davinci-003',
        prompt: prompt.value,
      });
      aiResponse.value = completion.data.choices[0].text;
      visible.value = false;
      disable.value = false;
    }

    return {
      currentStep,
      currentStepName,
      steps,
      stepper,
      nextPanel,
      previousPanel,
      position,
      company,
      emailAddress,
      phoneNumber,
      gettingApiKey,
      aiResponse,
      visible,
      currentInputType,
      startProcessing,
      disable,
      replaceText,
      apiKey,
      cancelRephaseProcess,
      gettingResponse,
      getRephaseFromOpenAI,
    };
  },
});
</script>
<style scoped>
.spacing {
  margin: 3% 0;
}
.my-card {
  margin: 2% 25%;
}

.my-stepper {
  margin: 2% 25%;
}
</style>
