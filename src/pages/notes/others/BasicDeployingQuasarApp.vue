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
      <content-block
        v-for="(command, index) in procedure"
        :key="index"
        :content-name="command.description"
        :content-description="command.description"
        :command-line="command.command"
        :content-details="command.details"
        :id="`${command.description.replace(/\s/g, '')}-${index.toString()}`"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { Step } from 'src/components/Schemas/ComponentSchema';
import ContentBlock from 'src/components/composition-components/ContentBlock.vue';
import { TableContent } from 'src/components/Schemas/ComponentSchema';
import TableOfContent from 'src/components/single_components/TableOfContent.vue';
import { highLightNode } from 'src/utils/helper';

export default defineComponent({
  name: 'BasicDeployment',
  components: {
    ContentBlock,
    TableOfContent,
  },
  setup() {
    const procedure = reactive<Step[]>([
      {
        step: 1,
        description: 'SSH into a ec2 instance',
        command: 'sudo apt-get update',
        details: [
          'assuming this is a brand new instance we need to update the instace by running',
        ],
      },
      {
        step: 2,
        description: 'cloning the repo from github into the instance',
        command: 'git clone <repo url>',
        details: [],
      },
      {
        step: 3,
        description: 'Getting the correct distributions',
        command:
          'curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -',
        details: [
          'this command allow the ec2 instance to know we want to install node16 if you want a different version you need to get the different nodesource link.',
        ],
      },
      {
        step: 4,
        description: 'install nodejs',
        command: 'sudo apt-get install -y nodejs',
        details: [],
      },
      {
        step: 5,
        description:
          'next install quasasr global within your system or ec2 instance',
        command: 'npm install -g @quasar/cli',
        details: [],
      },
      {
        step: 6,
        description: 'bundle the quasar project',
        command: 'quasar build',
        details: [
          'attempt to build quasar application. you should see a dist folder show up that where your production build located',
        ],
      },
      {
        step: 7,
        description: 'install docker via command',
        command: 'sudo apt-get install docker.io',
        details: [],
      },
      {
        step: 8,
        description: 'build the docker image for you application',
        command: 'sudo docker build -t <insert-image-name here> .',
        details: [],
      },
      {
        step: 9,
        description: 'create a nginx container',
        command: `sudo docker run --detach
    --name nginx-proxy
    --publish 80:80
    --publish 443:443
    --volume certs:/etc/nginx/certs
    --volume vhost:/etc/nginx/vhost.d
    --volume html:/usr/share/nginx/html
    --volume /var/run/docker.sock:/tmp/docker.sock:ro
    nginxproxy/nginx-proxy`,
        details: [],
      },
      {
        step: 10,
        description: 'start acme-companion container',
        command: `sudo docker run --detach
    --name nginx-proxy-acme
    --volumes-from nginx-proxy
    --volume /var/run/docker.sock:/var/run/docker.sock:ro
    --volume acme:/etc/acme.sh
    --env "wilson.nie13@gmail.com
    nginxproxy/acme-companion`,
        details: [],
      },
      {
        step: 11,
        description: 'starting your app container that you wanted proixed',
        command: `sudo docker run --detach
    --name <your-container-name>
    --env "VIRTUAL_HOST=wilsonnie.ca"
    --env "LETSENCRYPT_HOST=wilsonnie.ca"
    <image-id>`,
        details: [],
      },
      {
        step: 12,
        description: 'start the nginx proxy container',
        command: `sudo docker run --detach
    --name nginx-proxy
    --publish 80:80
    --publish 443:443
    --volume certs:/etc/nginx/certs
    --volume vhost:/etc/nginx/vhost.d
    --volume html:/usr/share/nginx/html
    --volume /var/run/docker.sock:/tmp/docker.sock:ro
    nginxproxy/nginx-proxy`,
        details: [],
      },
    ]);
    let tableSections: Array<TableContent> = procedure.map((item) => {
      const result: TableContent = {
        label: item.description,
        handler: highLightNode,
      };
      return result;
    });
    return { procedure, tableSections };
  },
});
</script>
