<script setup lang="ts">
import '../../scss/components/cta.scss'
import '../../scss/components/_background.scss'
import ResearchHeadline from '../headline/Headline.vue'
import { computed, useSlots } from "vue";
import ResearchButton from "../button/Button.vue";
import Background from "../shared/background";
import Borderless from "../shared/borderless";
import { className } from "../utlity";

const name = 'research-cta'
const props = defineProps({
  /**
   * Title style for the headline.
   */
  headline_style: {
    type: String,
    default: '',
  },
  url: {
    type: String,
  },
  details: {
    type: String,
  },
  orientation: {
    type: String,
    default: '',
  },
  button_align_right: {
    type: Boolean,
    default: false,
  },
  button_label: {
    type: String,
  },
  button_icon: {
    type: String,
    default: '',
  },
  ...Background.props,
});



const classes = computed(() => {
  let classes = ['cta'];
  Background.addBackgroundClass(classes, props);

  ['button_align_right'].forEach((prop) => {
    if (props[prop] === true) {
      classes.push(`cta--${ className(prop) }`);
    }
  });

  if (props.orientation) {
    classes.push(`cta--${ className(props.orientation)}`);
  }

  return classes;
});

const buttonClasses = computed(() => {
  let classes = [''];

  return classes
})

</script>

<template>
  <div :class="classes">
    <div class="cta__container">
      <div class="cta__title" v-if="$slots.title">
        <research-headline :text_style="headline_style">
          <!-- @slot The title of the card. HTML is allowed. -->
          <slot name="title">Title</slot>
        </research-headline>
      </div>
      <div class="cta__content" v-if="details" >
        <slot name="details">{{ details }}</slot>
      </div>
    </div>
    <footer class="cta__link" v-if="button_label" >
      <research-button :class="buttonClasses"  :url="url" size="medium">
        <slot name="button_label">{{ button_label }}</slot>
        <slot name="button_icon"></slot>
      </research-button>
    </footer>
  </div>
</template>
