<script setup lang="ts">
import '../../scss/components/alert.scss';
import {computed} from 'vue';
import {className} from '../utlity';

const name = 'research-alert'
const props = defineProps({
  /**
   * Type of alert.
   */
  type: {
    type: String,
    default: 'info',
    validator: (value: string) => {
      return ['info', 'success', 'warning', 'danger'].indexOf(value) !== -1;
    },
  },

  /**
   * Content alignment.
   */
  centered: {
    type: Boolean,
  },

  /**
   * Icon visible.
   */
  iconVisible: {
    type: Boolean,
  },

  /**
   * Alert is removable.
   */
  dismissible: {
    type: Boolean,
  },

  /**
   * Vertically center alert.
   */
  verticallyCentered: {
    type: Boolean,
  }
});

const icon = computed(() => {
  switch (props.type) {
    case 'success':
      return 'check';
      break;
    case 'warning':
      return 'exclamation-triangle';
      break;
    case 'danger':
      return 'exclamation';
      break;
    default:
      return 'info';
      break;
  }
});

const classes = computed(() => {
  let classes = ['alert'];

  if (props.type) {
    classes.push(`alert--${ className(props.type)}`);
  }

  if (props.verticallyCentered) {
    classes.push('alert--vertically-centered');
  }

  if (props.iconVisible) {
    classes.push('alert--icon');
  }

  ['centered', 'dismissible'].forEach((prop) => {
    if (props[prop] === true) {
      classes.push(`alert--${ className(prop) }`);
    }
  });

  return classes;
});

</script>

<template>
  <div :class="classes">
    <div v-if="props.iconVisible" class="alert__icon">
      <span class="fa-stack fa-1x"><span role="presentation" class="fas fa-circle fa-stack-2x"></span><span role="presentation" :class="'fas fa-stack-1x fa-inverse fa-' + icon"></span></span>
    </div>
    <slot class="alert__content" name="default">Body</slot>
    <button v-if="props.dismissible" data-dismiss="alert">
      <i class="fas fa-times"></i>
    </button>
  </div>
</template>
