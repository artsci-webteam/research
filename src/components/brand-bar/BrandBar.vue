<script lang="ts">
import { computed } from "vue"
import '../../scss/components/brand-bar.scss'
import ResearchLogo from '../logo/Logo.vue'

/**
 * The Washu Brand Bar is the visual starting point for all
 * branded websites and applications.
 */
export default {
  name: 'researchbase-research-bar',
  components: { ResearchLogo },
  props: {
    /**
     * Determines whether to use the narrow version of the bar.
     */
    narrow: {
      type: Boolean,
      default: false,
    },

  },
  setup(props, context) {
    /**
     * Get computed classes based on properties of the component.
     */
    const getClasses = computed(() => {
      let classes = ['research-bar']
      if (props.narrow || context.slots.second_row_content) {
        classes.push('research-bar--narrow')
      }

      return classes;
    })

    const showBottomBar = computed(() => {
      return context.slots.parent_title && context.slots.parent_title().length || context.slots.bottom_content && context.slots.bottom_content().length
    })

    return {
      getClasses,
      showBottomBar,
    }
  }
}
</script>

<template>
  <header :class="getClasses" data-research-header>
    <div class="research-bar__container">
      <research-logo></research-logo>
      <!-- @slot Default slot shows content next to the logo. -->
      <slot></slot>
    </div>
    <div class="research-bar__below" v-if="$slots.second_row_content">
      <div class="research-bar__container">
        <slot name="second_row_content"></slot>
      </div>
    </div>
  </header>
</template>
