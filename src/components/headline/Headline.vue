<script setup lang="ts">
import '../../scss/components/_headline.scss';
import { computed } from 'vue'
const name = 'research-headine'
const props = defineProps({
  level: {
    type: String,
    default: 'h2',
    validator: function (value) {
      return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(value) !== -1
    },
  },
  highlight: {
    type: Boolean,
    default: false,
  },
  text_style: {
    type: String,
    default: '',
  },
  underline: {
    type: Boolean,
    default: false,
  },
})

const getClasses = computed(() => ({
  headline: true,
  'headline--uppercase': props.text_style === 'uppercase',
  'headline--serif': props.text_style === 'serif',
  'headline--underline': props.underline,
  'headline--highlight': props.highlight,
}))
</script>

<template>
  <component
    :is="level"
    :class="getClasses"
  >
    <slot></slot>
  </component>
</template>
