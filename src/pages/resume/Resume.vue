<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-px-lg q-pb-md container">
      <h1>Jiaan (Wilson) Nie</h1>

      <h3>About Me</h3>
      <q-separator color="black" />
      <p class="card-space">
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
      <h3>Projects</h3>
      <q-separator color="black" />
      <div class="row q-gutter-x-xl">
        <div
          v-for="project in projects"
          :key="project.title"
          style="margin-top: 6%"
        >
          <product-card
            :details="project.descriptions"
            icon="lightbulb"
            :title="project.title"
            action-name="Getting Started"
            action-icon="preview"
          >
          </product-card>
        </div>
      </div>

      <h3>Educations</h3>
      <q-separator color="black" />
      <q-card
        bordered
        class="space edu-card"
        v-for="education in educations"
        :key="education.name"
      >
        <q-card-section>
          <div class="text-h6">{{ education.name }}</div>
          <div class="text-subtitle2">
            {{ `${education.dateStarted} - ${education.dateEnded}` }}
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          {{ education.descriptions }}
        </q-card-section>
      </q-card>

      <h3>Skills</h3>
      <q-separator color="black" />
      <div class="row q-gutter-x-xl">
        <q-card
          class="space skill-card"
          v-for="skill in skills"
          :key="skill.name"
        >
          <q-card-section>
            <div class="text-h6">{{ skill.name }}</div>
          </q-card-section>

          <q-separator />
          <q-list>
            <q-item
              clickable
              v-for="(item, index) in skill.details"
              :key="index"
            >
              <q-item-section>
                <q-item-label>{{ item }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <h3>Socials</h3>
      <q-separator color="black" />
      <div class="q-pa-md">
        <q-expansion-item v-for="(social, index) in socials" :key="index">
          <template v-slot:header="{}">
            <q-item-section avatar>
              <q-icon color="blue" :name="social.icon" />
            </q-item-section>

            <q-item-section>
              {{ social.name }}
            </q-item-section>
          </template>

          <q-card>
            <q-card-section>
              <a :href="social.link">{{ social.link }}</a>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useResumeStore } from 'src/stores/resume';
import ProductCard from 'src/components/single_components/ProductCard.vue';

export default defineComponent({
  name: 'MyResume',
  components: {
    ProductCard,
  },
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
    const expanded = ref(true);

    return {
      skills,
      experiences,
      contact,
      educations,
      location,
      socials,
      projects,
      aboutMe,
      expanded,
    };
  },
});
</script>

<style scoped>
.container {
  background-color: white;
  max-width: 50%;
}
.space {
  margin-top: 3%;
}
.edu-card {
  width: 100%;
  max-width: 450px;
}

.skill-card {
  width: 100%;
  max-width: 250px;
}
</style>
