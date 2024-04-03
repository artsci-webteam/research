import ResearchBar from './BrandBar.vue'
import BrandBarDocs from './BrandBarDocs.mdx';

export default {
  title: 'Components/Branding/Brand Bar',
  component: ResearchBar,
  tags: ['autodocs'],
  argTypes: {
    narrow: {
      control: { type: 'boolean' },
    },
    default: {
      control: { type: 'text' },
    },
    second_row_content: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      source: {
        code: null,
      },
      page: BrandBarDocs,
    },
  },
};

const Template = (args) => ({
  components: { ResearchBar },
  setup() {
    return { args }
  },
  template: `
    <researchbase-research-bar :narrow="args.narrow">
      {{ args.default }}
    </researchbase-research-bar>
  `,
})

export const Default = Template.bind({})
Default.args = {
  narrow: false,
  default: '',
  second_row_content: '',
}

const SiteTitleTemplate = (args) => ({
  components: { ResearchBar },
  setup() {
    return { args }
  },
  template: `
    <researchbase-research-bar :narrow="args.narrow">
      <h1 class="site-name">{{ args.default }}</h1>
    </researchbase-research-bar>
`
})

export const WithSiteTitle = SiteTitleTemplate.bind({})
WithSiteTitle.args = {
  ...Default.args,
  default: 'Brand',
}

export const Narrow = SiteTitleTemplate.bind({})
Narrow.args = {
  ...WithSiteTitle.args,
  narrow: true,
}

const ParentSiteTitleTemplate = (args) => ({
  components: { ResearchBar },
  setup() {
    return { args }
  },
  template: `
    <researchbase-research-bar :narrow="args.narrow">
      <div class="parent-site-name">{{ args.default }}</div>
      <template #second_row_content>
        <h1 class="site-name">{{ args.second_row_content }}</h1>
      </template>
    </researchbase-research-bar>
`
})

export const WithParentSiteTitle = ParentSiteTitleTemplate.bind({})
WithParentSiteTitle.args = {
  ...Default.args,
  default: 'Brand',
  second_row_content: 'Icon Browser',
}
