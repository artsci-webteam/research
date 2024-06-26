import ResearchCallout from './Callout.vue'
import Background from '../shared/background'
// import Inline from '../shared/inline'
import preview from '../../../.storybook/preview';

export default {
  title: 'Components/Callout',
  component: ResearchCallout,
  tags: ['autodocs'],
  argTypes: {
    // ...Inline.argTypes,
    ...Background.argTypes,
    default: {
      name: 'Content',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    viewport: {
      viewports: preview.parameters.viewport.viewports,
      defaultViewport: 'tablet',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ResearchCallout },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <research-callout
      :background="args.background"
    >
    <template v-if="args.default"><div v-html="args.default" ></div></template>
    </research-callout>
  `,
});

export const Callout = Template.bind({});
Callout.args = {
  default: '<h4 class="headline block__headline headline headline--serif headline--underline block__headline headline--center"> <span class="headline__heading"> Title </span> </h4> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ante non efficitur laoreet. Suspendisse laoreet cursus dui, eget vehicula massa.</p>',
  // inline_size: 'small',
  background: 'gray',
  // inline_alignment: 'right',
};
