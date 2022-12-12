<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-px-lg q-pb-md container">
      <h1>Jiaan (Wilson) Nie</h1>

      <h3>About Me</h3>
      <q-separator color="black" />
      <p class="space">
        Hello, I am a {{ aboutMe.details }} located in {{ location.province }},
        {{ location.city }} my contact email is {{ contact.email }}
      </p>

      <h3>Experiences</h3>
      <q-separator color="black" />
      <q-timeline
        color="secondary"
        v-for="(experience, index) in experiences"
        :key="index"
      >
        <q-timeline-entry heading>
          {{ `${experience.company} - ${experience.title}` }}
        </q-timeline-entry>

        <q-timeline-entry
          v-for="(task, index) in experience.tasks"
          :key="index"
          :title="task.title"
          :subtitle="
            index == 0
              ? `${experience.dateStarted} - ${experience.dateEnded}`
              : ''
          "
          icon="settings"
          color="blue"
        >
          <div v-for="(item, index) in task.items" :key="index">
            <div>
              {{ item }}
            </div>
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useResumeStore } from 'src/stores/resume';

export default defineComponent({
  name: 'MyResume',
  setup() {
    const store = useResumeStore();
    const experiences = store.getExperiences;
    const skills = store.getSkills;
    const contact = store.getContact;
    const educations = store.getEducations;
    const location = store.getLocation;
    const socials = store.getSoicals;
    const projects = store.getProjects;
    const aboutMe = store.getAboutMe;

    return {
      skills,
      experiences,
      contact,
      educations,
      location,
      socials,
      projects,
      aboutMe,
    };
  },
});
</script>

<style scoped>
.container {
  background-color: white;
  max-width: 45%;
}
.space {
  margin-top: 3%;
}
</style>
