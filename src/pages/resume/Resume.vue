<template>
  <q-page class="row items-center justify-evenly">
    <div>Basic AWS Notes</div>
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
