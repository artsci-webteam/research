<script setup lang="ts">
import '../../scss/components/button.scss';
import { computed } from 'vue';
const name = 'research-button'
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
    validator: function (value) {
      return ['primary', 'secondary', 'tertiary', 'link'].indexOf(value) !== -1;
    },
  },
  size: {
    type: String,
    default: 'medium',
    validator: function (value) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1;
    },
  },
  arrow: {
    type: Boolean,
    default: true,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  font: {
    type: String,
    default: '',
  },
})

const classes = computed(() => ({
  'bttn': true,
  'bttn--primary': props.color === 'primary',
  'bttn--secondary': props.color === 'secondary',
  'bttn--tertiary': props.color === 'tertiary',
  'bttn--link': props.color === 'link',
  'bttn--outline': props.outline,
  'bttn--font-serif': props.font === 'serif',
  'bttn--font-sans-serif': props.font === 'sans-serif',
  'bttn--small' :props.size === 'small',
  'bttn--medium' :props.size === 'medium',
  'bttn--large' :props.size === 'large',
}))

</script>

<template>
  <div :class="classes">
    <slot></slot>
    <i v-if="arrow" class="fas fa-arrow-right"></i>
  </div>
</template>
