import{_ as z,B}from"./Button-2e6767e8.js";import"./vue.esm-bundler-c553bea2.js";import"./utlity-04b79d70.js";const S={title:"Components/Button",parameters:{docs:{source:{code:null}}},component:z,tags:["autodocs"],argTypes:{url:{control:{type:"text"}},color:{control:{type:"select"},options:["primary","secondary","tertiary"]},size:{control:{type:"select"},options:["small","medium","large"]},...B.argTypes,full:{name:"full width",control:{type:"boolean"}},transparent:{name:"transparent",control:{type:"boolean"}},light_font:{control:{type:"boolean"}},icon:{control:{type:"text"}}}},s=T=>({components:{ResearchButton:z},setup(){return{args:T}},template:`
    <research-button
      :url="args.url"
      :color="args.color"
      :size="args.size"
      :borderless="args.borderless"
      :full="args.full"
      :transparent="args.transparent"
      :light_font="args.light_font"
      :icon="args.icon"
    >
      <template #default v-if="args.label">{{ args.label }}</template>
      <template #icon v-if="args.icon"><span v-html="args.icon" ></span></template>
    </research-button>
  `}),e=s.bind({});e.args={url:"https://example.com",label:"Read more",color:"primary",size:"medium",borderless:!1,full:!1,transparent:!1,light_font:!1,icon:'<i class="fas fa-arrow-right"></i>'};const n=s.bind({});n.args={...e.args,color:"secondary"};const t=s.bind({});t.args={...e.args,color:"tertiary"};const r=s.bind({});r.args={...e.args,label:""};const a=s.bind({});a.args={...e.args,light_font:!0};var o,l,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchButton
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <research-button
      :url="args.url"
      :color="args.color"
      :size="args.size"
      :borderless="args.borderless"
      :full="args.full"
      :transparent="args.transparent"
      :light_font="args.light_font"
      :icon="args.icon"
    >
      <template #default v-if="args.label">{{ args.label }}</template>
      <template #icon v-if="args.icon"><span v-html="args.icon" ></span></template>
    </research-button>
  \`
})`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,i,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchButton
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <research-button
      :url="args.url"
      :color="args.color"
      :size="args.size"
      :borderless="args.borderless"
      :full="args.full"
      :transparent="args.transparent"
      :light_font="args.light_font"
      :icon="args.icon"
    >
      <template #default v-if="args.label">{{ args.label }}</template>
      <template #icon v-if="args.icon"><span v-html="args.icon" ></span></template>
    </research-button>
  \`
})`,...(g=(i=n.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var m,u,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchButton
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <research-button
      :url="args.url"
      :color="args.color"
      :size="args.size"
      :borderless="args.borderless"
      :full="args.full"
      :transparent="args.transparent"
      :light_font="args.light_font"
      :icon="args.icon"
    >
      <template #default v-if="args.label">{{ args.label }}</template>
      <template #icon v-if="args.icon"><span v-html="args.icon" ></span></template>
    </research-button>
  \`
})`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,b,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchButton
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <research-button
      :url="args.url"
      :color="args.color"
      :size="args.size"
      :borderless="args.borderless"
      :full="args.full"
      :transparent="args.transparent"
      :light_font="args.light_font"
      :icon="args.icon"
    >
      <template #default v-if="args.label">{{ args.label }}</template>
      <template #icon v-if="args.icon"><span v-html="args.icon" ></span></template>
    </research-button>
  \`
})`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,v,_;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchButton
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <research-button
      :url="args.url"
      :color="args.color"
      :size="args.size"
      :borderless="args.borderless"
      :full="args.full"
      :transparent="args.transparent"
      :light_font="args.light_font"
      :icon="args.icon"
    >
      <template #default v-if="args.label">{{ args.label }}</template>
      <template #icon v-if="args.icon"><span v-html="args.icon" ></span></template>
    </research-button>
  \`
})`,...(_=(v=a.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const C=["Primary","Secondary","Tertiary","NoText","LightFont"];export{a as LightFont,r as NoText,e as Primary,n as Secondary,t as Tertiary,C as __namedExportsOrder,S as default};
