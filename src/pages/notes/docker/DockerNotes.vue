<template>
  <q-page class="row justify-evenly">
    <div class="col-2">
      <table-of-content
        table-name="Docker Basic"
        table-icon="test"
        :table-sections="tableSections"
      />
    </div>
    <div class="col">
      <h3 class="text-h4 content-header">Docker Basic</h3>
      <q-separator></q-separator>
      <content-block
        v-for="(command, index) in dockerCommandslist"
        :key="index"
        :content-name="command.name"
        :content-description="command.name"
        :command-line="command.command"
        :content-details="command.details"
        :id="`${command.name.replace(/\s/g, '')}-${index.toString()}`"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { DockerCommand } from 'src/components/Schemas/ComponentSchema';
import ContentBlock from 'src/components/composition-components/ContentBlock.vue';
import TableOfContent from 'src/components/single_components/TableOfContent.vue';
import { TableContent } from 'src/components/Schemas/ComponentSchema';
import { highLightNode } from 'src/utils/helper';

export default defineComponent({
  name: 'DockerNotes',
  components: {
    ContentBlock,
    TableOfContent,
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
        name: 'Docker build a DockerFile into a Docker Image',
        command: 'docker build -t <container-tag-name> .',
        details: [
          '-t is a flag that allow user to tag a container with the name they wanted to be',
          'the . at the end of the command will tell docker to look for a Dockerfile within the currecnt directory',
          'Optional Flag you can add in --progress=plain this allow you print out the output of the command for debugging',
          'Optional Flag you can add in --no-cache incase you want to do a fresh build',
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

    let tableSections: Array<TableContent> = dockerCommandslist.map((item) => {
      const result: TableContent = {
        label: item.name,
        handler: highLightNode,
      };
      return result;
    });
    return { dockerCommandslist, tableSections };
  },
});
</script>
