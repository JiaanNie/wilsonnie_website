<template>
  <div class="q-pa-md q-gutter-sm">
    <q-tree :nodes="simple" node-key="label" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TableContent } from 'src/components/schemas/ComponentSchema';

// import { highLightNode } from 'src/utils/helper';

export default defineComponent({
  name: 'TableOfContent',
  props: {
    tableName: {
      type: String,
      required: true,
    },
    tableIcon: {
      type: String,
      required: true,
    },
    tableSections: {
      type: Array as PropType<Array<TableContent>>,
      required: true,
    },
    iconName: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const simple = [
      {
        label: props.tableName,
        icon: 'fa-brands fa-docker',
        children: props.tableSections,
      },
    ];
    console.log(props.tableSections);
    return { simple };
  },
});
</script>
