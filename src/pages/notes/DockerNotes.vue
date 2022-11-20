<template>
  <q-page class="col fixed-center justify-evenly">
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
interface DockerCommand {
  name: string;
  command: string;
  description?: string;
  details: string[];
}

export default defineComponent({
  name: 'DockerNotes',
  components: {
    CodeBlock,
  },
  setup() {
    // const listDockerCommands = ref<string[]>([
    //   'docker run -d -p 80:3060 docker/getting-started',
    //   'docker containers ls',
    //   'docker build -t <container-tag-name> .',
    //   'docker ps',
    //   'docker stop <container-id>',
    //   'docker rm <container-id>',
    //   'docker exec <container-id>'
    // ])
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
        name: 'Docker Run',
        command: 'docker run -d -p 80:3060 docker/getting-started',
        details: [
          '-d is a flag that allow the container running in the background',
          '-p 80:3060 is a arugments that allow user to map a host port 80 to a container port 3060',
          'docker/getting-started is a image that we are running',
        ],
      },
      {
        name: 'Docker Run',
        command: 'docker run -d -p 80:3060 docker/getting-started',
        details: [
          '-d is a flag that allow the container running in the background',
          '-p 80:3060 is a arugments that allow user to map a host port 80 to a container port 3060',
          'docker/getting-started is a image that we are running',
        ],
      },
    ]);
    return { dockerCommandslist };
  },
});
</script>
