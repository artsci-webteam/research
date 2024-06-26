<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { className } from '../utlity'
import ResearchHeadline from '../headline/Headline.vue'
import ResearchButton from '../button/Button.vue'
import Background from '../shared/background'
import '../../scss/components/_background.scss'
import '../../scss/components/_banner.scss'

const name = 'research-banner'

const props = defineProps({
  title: { type: String },
  image: { type: String },
  url: { type: String },
  text: { type: String },
  button_text: {
    type: String,
  },
  // @todo Determine how best to handle these fields going forward.
  overlay_color: {
    type: String,
    default: 'gradient-dark',
  },
  overlay_to: {
    type: String,
    default: 'gradient-bottom',
  },
  ...Background.props,
  // size?: string
  // classes?: string
  // vertical_alignment?: string
  // horizontal_alignment?: string
  // title_classes?: string
  // button_link?: string
  // button_text?: string
});

// Compose a string out of the classes passed to the component.
const classes = computed(() => {
  let classes = ['banner'];

  ['overlay_color', 'overlay_to', 'size', 'vertical_alignment', 'horizontal_alignment'].forEach((prop) => {
    if (props[prop] === true) {
      classes.push(`banner--${ className(prop) }`);
    }
  });

  Background.addBackgroundClass(classes, props);

  if (props.url) {
    classes.push('click-container')
  }

  return classes;
})

const getHeadlineSettings = computed(() => {
  if (props.title) {
    let headline_settings = {
      level: 'h2',
      classes: 'headline',
    }
    if (props.headline_settings) {
      Array.prototype.forEach.call(['level', 'class'], setting => {
        if (props.headline_settings[setting]) {
          headline_settings[setting] = props.headline_settings[setting]
        }
      })
    }

    return headline_settings
  }
  return {}
})
</script>

<template>
  <div :class="classes">
    <div class="banner__image" v-if="image">
      <img :src="image" alt="" loading="lazy">
    </div>
    <div class="banner__container">
      <div class="banner__content">
        <slot name="headline">
          <research-headline
            v-if="title"
            :level="getHeadlineSettings.level"
            :class="getHeadlineSettings.classes"
            :href="url"
          >{{ title }}</research-headline>
        </slot>
        <slot></slot>
        <research-button
          v-if="url && button_text"
          :href="url"
          class="bttn--secondary bttn--caps"
          :arrow="true"
        >{{ button_text }}</research-button>
      </div>
    </div>
  </div>
</template>
