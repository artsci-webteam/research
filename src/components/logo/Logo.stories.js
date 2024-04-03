import ResearchLogo from './Logo.vue'

export default {
  title: 'Components/Branding/Logo',
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  component: ResearchLogo,
  tags: ['autodocs'],
}

const Template = (args) => ({
  components: { ResearchLogo },
  setup() {
    return { args }
  },
  template: `
    <research-logo></research-logo>
  `,
})

export const Default = Template.bind({})
