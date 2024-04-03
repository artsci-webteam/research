<script setup lang="ts">
import { V3_BASE_URL } from '../utlity';
import ResearchButton from '../button';
import ResearchHeadline from '../headline';

const name = 'research-stub'
const props = defineProps({
  /**
   * Path to component.
   */
  path: {
    type: String,
    default: '',
  },
  /**
   * Title of component.
   */
  title: {
    type: String,
    default: '',
  },

});
const V3_COMPONENT_PATH = 'components/detail/';
</script>

<template>
  <research-headline
    level="h3"
  >{{title}}</research-headline>
  <p>This component has not been implemented in Research 4.</p>
  <research-button
    :url="V3_BASE_URL + V3_COMPONENT_PATH + path"
    color="primary"
    size="small"
    :borderless="false"
    :full="false"
    :transparent="false"
    :light_font="false"
  >
    <template #default >View {{title}} in Research 3</template>
    <template #icon ><i class='fas fa-arrow-right'></i></template>
  </research-button>
</template>
