<template>
  <q-page class="col justify-evenly note-content">
    <div
      v-for="(dockerCommand, index) in dockerCommandslist"
      :key="dockerCommand.command"
    >
      {{ index }}
      <h5 class="header-space" :id="`header-${index.toString()}`">
        {{ dockerCommand.name }}
      </h5>
      <q-separator />
      <code-block :codeString="dockerCommand.command" />
      <ol>
        <li v-for="detail in dockerCommand.details" :key="detail">
          {{ detail }}
        </li>
      </ol>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-tree :nodes="simple" node-key="label" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import CodeBlock from 'src/components/CodeBlock.vue';
import { DockerCommand } from 'src/components/Schemas/ComponentSchema';
import { dom } from 'quasar';

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
    const simple = [
      {
        label: 'Docker Basic',
        icon: 'fa-brands fa-docker',
        children: [
          {
            label: 'Good food (with icon)',
            icon: 'restaurant_menu',
            children: [
              { label: 'Quality ingredients' },
              { label: 'Good recipe' },
            ],
            handler: function (node) {
              console.log(node);
              console.log('test');
              document
                .getElementById('header-0')
                .scrollIntoView({ behavior: 'smooth' });
            },
          },
          {
            label: 'Good service (disabled node with icon)',
            icon: 'room_service',
            disabled: true,
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' },
            ],
          },
          {
            label: 'Pleasant surroundings (with icon)',
            icon: 'photo',
            children: [
              {
                label: 'Happy atmosphere (with image)',
                img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png',
              },
              { label: 'Good table presentation' },
              { label: 'Pleasing decor' },
            ],
          },
        ],
      },
    ];
    const test = (node) => {
      // console.log('node being pressed');
      // console.log(node);
      // document.getElementById('header-0').scrollIntoView();
    };
    onMounted(() => {
      console.log('mounted');
      console.log(document.getElementById('header-0'));
    });
    // const { ready } = dom;
    // ready(() => {
    //   console.log(dom);
    //   console.log(document.getElementById('header-0'));
    // });
    return { dockerCommandslist, simple, test };
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
