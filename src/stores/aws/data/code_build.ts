import { defineStore } from 'pinia';
import { AWSService, Step } from 'src/stores/aws/components/compoents';
export const useAWSServiceStore = defineStore('AWSService', {
  state: () => ({
    services: [
      {
        name: 'CodeCommit',
        description:
          'Code Commit is a version control tool for your code and applications, similar to GitHub. When choosing to use Code Commit over GitHub, it simply comes down to personal preference in terms of the hosting service provider. AWS, instead of Microsoft, will host your code if you opt for Code Commit.',
        details: [
          'Just different services provider rather have microsoft host your code you can have aws host your code.',
        ],
      },
    ] as Array<AWSService>,
  }),
});
