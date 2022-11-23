<template>
  <q-page class="col justify-evenly note-content">
    <div
      v-for="dockerCommand in dockerCommandslist"
      :key="dockerCommand.command"
    >
      <h5 class="header-space">{{ dockerCommand.name }}</h5>
      <q-separator />
      <code-block :codeString="dockerCommand.command" />
      <ol>
        <li v-for="detail in dockerCommand.details" :key="detail">
          {{ detail }}
        </li>
      </ol>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-tree
        :nodes="lazy"
        default-expand-all
        node-key="label"
        @lazy-load="onLazyLoad"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
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
    const nodes = [
      {
        label: 'Node 1',
        children: [
          { label: 'Node 1.1', lazy: true },
          { label: 'Node 1.2', lazy: true },
        ],
      },
      {
        label: 'Node 2',
        lazy: true,
      },
      {
        label: 'Lazy load empty',
        lazy: true,
      },
      {
        label: 'Node is not expandable',
        expandable: false,
        children: [{ label: 'Some node' }],
      },
    ];

    const lazy = ref(nodes);

    const onLazyLoad = ({ node, key, done, fail }) => {
      // call fail() if any error occurs

      setTimeout(() => {
        // simulate loading and setting an empty node
        if (key.indexOf('Lazy load empty') > -1) {
          done([]);
          return;
        }

        const label = node.label;
        done([
          { label: `${label}.1` },
          { label: `${label}.2`, lazy: true },
          {
            label: `${label}.3`,
            children: [
              { label: `${label}.3.1`, lazy: true },
              { label: `${label}.3.2`, lazy: true },
            ],
          },
        ]);
      }, 100);
    };
    return { dockerCommandslist, onLazyLoad, nodes, lazy };
  },
});
</script>

<style scoped lang="scss">
.note-content {
  margin: 5% 20%;
}
.header-space {
  margin-bottom: 1%;
}
</style>
