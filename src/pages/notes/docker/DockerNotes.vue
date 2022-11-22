<template>
  <q-page class="col justify-evenly note-content">
    <div
      v-for="dockerCommand in dockerCommandslist"
      :key="dockerCommand.command"
    >
      <h5>{{ dockerCommand.name }}</h5>
      <code-block :codeString="dockerCommand.command" />
      <ol>
        <li v-for="detail in dockerCommand.details" :key="detail">
          {{ detail }}
        </li>
      </ol>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import CodeBlock from 'src/components/CodeBlock.vue';
import { DockerCommand } from 'src/components/Schemas/ComponentSchema';
export default defineComponent({
  name: 'DockerNotes',
  components: {
    CodeBlock,
  },
  setup() {
    const dockerCommandslist = reactive<DockerCommand[]>([
      {
        name: 'Docker Run',
        command: 'docker run -d -p 80:3060 docker/getting-started',
        details: [
          '-d is a flag that allow the container running in the background',
          '-p 80:3060 is a arugments that allow user to map a host port 80 to a container port 3060',
          'docker/getting-started is a image that we are running',
        ],
      },
      {
        name: 'Docker list out containers',
        command: 'docker containers ls',
        details: [
          'list out all of the containers that is currecntly running within the host',
        ],
      },
      {
        name: 'Docker list out images',
        command: 'docker images ls',
        details: ['list out all of the image within your docker'],
      },
      {
        name: 'Docker build a DockerFile into a DockerImage',
        command: 'docker build -t <container-tag-name> .',
        details: [
          '-t is a flag that allow user to tag a container with the name they wanted to be',
          'the . at the end of the command will tell docker to look for a Dockerfile within the currecnt directory',
        ],
      },
      {
        name: 'Docker list process',
        command: 'docker ps',
        details: ['list out all the running containers within the host'],
      },
      {
        name: 'Stop Docker container',
        command: 'docker stop <container-id>',
        details: ['stop a container using their id'],
      },
      {
        name: 'Remove Docker stopped container',
        command: 'docker rm <container-id>',
        details: ['remove stopped container using their id'],
      },
      {
        name: 'SSH into the running container instance',
        command: 'docker exec <container-id>',
        details: [
          'To dive into the container via cli then you can run some basic linux commands',
        ],
      },
    ]);
    return { dockerCommandslist };
  },
});
</script>

<style scoped lang="scss">
.note-content {
  margin: 5% 20%;
}
</style>
