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

            // setTimeout(
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
    console.log(props.tableSections);
    return { simple };
  },
});
</script>
