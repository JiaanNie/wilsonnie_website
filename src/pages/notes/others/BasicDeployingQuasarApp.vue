<template>
  <q-page class="col items-center justify-evenly info">
    <div v-for="step in procedure" :key="step.step">
      <h5>{{ step.description }}</h5>
      <pre>
        <code-block :codeString="step.command"></code-block>
      </pre>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import CodeBlock from 'src/components/CodeBlock.vue';
import { Step } from 'src/components/Schemas/ComponentSchema';

export default defineComponent({
  name: 'BasicDeployment',
  components: {
    CodeBlock,
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
      },
      {
        step: 5,
        description:
          'next install quasasr global within your system or ec2 instance',
        command: 'npm install -g @quasar/cli',
      },
      {
        step: 6,
        description:
          'attempt to build quasar application. you should see a dist folder show up that where your production build located',
        command: 'quasar build',
      },
      {
        step: 7,
        description: 'install docker via command',
        command: 'sudo apt-get install docker.io',
      },
      {
        step: 8,
        description: 'build the docker image for you application',
        command: 'sudo docker build -t <insert-image-name here> .',
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
      },
      {
        step: 10,
        description: 'cloning the repo from github into the instance',
        command: `sudo docker run --detach
    --name nginx-proxy-acme
    --volumes-from nginx-proxy
    --volume /var/run/docker.sock:/var/run/docker.sock:ro
    --volume acme:/etc/acme.sh
    --env "wilson.nie13@gmail.com
    nginxproxy/acme-companion`,
      },
      {
        step: 11,
        description: 'cloning the repo from github into the instance',
        command: `sudo docker run --detach
    --name pathfinder-frontend-test
    --env "VIRTUAL_HOST=wilsonnie.ca"
    --env "LETSENCRYPT_HOST=wilsonnie.ca"
    <image-id>`,
      },
      {
        step: 12,
        description: 'cloning the repo from github into the instance',
        command: `sudo docker run --detach
    --name nginx-proxy
    --publish 80:80
    --publish 443:443
    --volume certs:/etc/nginx/certs
    --volume vhost:/etc/nginx/vhost.d
    --volume html:/usr/share/nginx/html
    --volume /var/run/docker.sock:/tmp/docker.sock:ro
    nginxproxy/nginx-proxy`,
      },
    ]);
    return { procedure };
  },
});
</script>

<style scoped>
.info {
  margin: 5% 20%;
}
</style>
