import{_ as T}from"./Headline-6e65437c.js";import"./vue.esm-bundler-c553bea2.js";const A={title:"Components/Headline",parameters:{docs:{source:{code:null}}},component:T,tags:["autodocs"],argTypes:{default:{control:{type:"text"}},level:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"]},highlight:{control:{type:"boolean"}},text_style:{type:Boolean,default:!1,options:["","uppercase","serif"],control:{type:"select",labels:{"":"default",uppercase:"Uppercase",serif:"Serif"}}},underline:{control:{type:"boolean"}},url:{control:{type:"text"}},aria_describedby:{control:{type:"text"}},class:{control:{type:"text"}}}},t=C=>({components:{ResearchHeadline:T},setup(){return{args:C}},template:`
    <research-headline v-bind="args">
      <span class="headline__text" v-html="args.default"></span>
    </research-headline>
  `}),e=t.bind({});e.args={text_style:"",underline:!1,highlight:!1,level:"h2",default:"Start your story here",url:"",aria_describedby:"",class:""};const n=t.bind({});n.args={...e.args,text_style:"uppercase"};const r=t.bind({});r.args={...e.args,text_style:"serif"};const s=t.bind({});s.args={...e.args,text_style:"serif",underline:!0};const a=t.bind({});a.args={...e.args,text_style:"serif",highlight:!0,default:"<span>Start your story here</span>"};const o=t.bind({});o.args={...e.args,text_style:"uppercase",default:'Start your <span class="highlight">story</span> here'};var d,h,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchHeadline
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  // @todo Figure out how to not bind the \`default\` slot to the component.
  template: \`
    <research-headline v-bind="args">
      <span class="headline__text" v-html="args.default"></span>
    </research-headline>
  \`
})`,...(p=(h=e.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var l,i,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchHeadline
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  // @todo Figure out how to not bind the \`default\` slot to the component.
  template: \`
    <research-headline v-bind="args">
      <span class="headline__text" v-html="args.default"></span>
    </research-headline>
  \`
})`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchHeadline
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  // @todo Figure out how to not bind the \`default\` slot to the component.
  template: \`
    <research-headline v-bind="args">
      <span class="headline__text" v-html="args.default"></span>
    </research-headline>
  \`
})`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,y,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchHeadline
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  // @todo Figure out how to not bind the \`default\` slot to the component.
  template: \`
    <research-headline v-bind="args">
      <span class="headline__text" v-html="args.default"></span>
    </research-headline>
  \`
})`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var _,v,x;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchHeadline
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  // @todo Figure out how to not bind the \`default\` slot to the component.
  template: \`
    <research-headline v-bind="args">
      <span class="headline__text" v-html="args.default"></span>
    </research-headline>
  \`
})`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,H,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchHeadline
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  // @todo Figure out how to not bind the \`default\` slot to the component.
  template: \`
    <research-headline v-bind="args">
      <span class="headline__text" v-html="args.default"></span>
    </research-headline>
  \`
})`,...(w=(H=o.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};const F=["Default","Uppercase","Serif","Underline","Highlight","HighlightedSingleWord"];export{e as Default,a as Highlight,o as HighlightedSingleWord,r as Serif,s as Underline,n as Uppercase,F as __namedExportsOrder,A as default};
