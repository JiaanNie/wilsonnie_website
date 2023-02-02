<template>
  <div class="q-pa-md q-gutter-sm sticky-table-of-content">
    <q-tree selectable :nodes="nodes" node-key="label" />
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
    const nodes = [
      {
        label: props.tableName,
        icon: 'fa-brands fa-docker',
        children: props.tableSections.map((item, index) => {
          const result = {
            label: item.label,
            children: [],
            handler: () => {
              item.handler(
                `${item.label.replace(/\s/g, '')}-${index.toString()}`
              );
            },
          };
          return result;
        }),
      },
    ];

    return { nodes };
  },
});
</script>

<style scoped>
.sticky-table-of-content {
  position: sticky;
  top: 0;
}
</style>
