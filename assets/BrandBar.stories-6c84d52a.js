import{l as d,o as i,b as m,g as h,e as D,n as u,s as W,p as V,x as P}from"./vue.esm-bundler-c553bea2.js";import{_ as x}from"./Logo-7cfe9651.js";import E from"./BrandBarDocs-0fe3dd34.js";import"./jsx-runtime-f8f6162e.js";import"./index-42c4eb61.js";import"./iframe-eddfea5a.js";import"../sb-preview/runtime.js";import"./index-f4dda215.js";import"./index-d8983a70.js";import"./index-356e4a49.js";import"./package-2f88eaea.js";import"./index-7d42929a.js";const $={name:"researchbase-research-bar",components:{ResearchLogo:x},props:{narrow:{type:Boolean,default:!1}},setup(e,r){const t=d(()=>{let o=["research-bar"];return(e.narrow||r.slots.second_row_content)&&o.push("research-bar--narrow"),o}),n=d(()=>r.slots.parent_title&&r.slots.parent_title().length||r.slots.bottom_content&&r.slots.bottom_content().length);return{getClasses:t,showBottomBar:n}}},I=(e,r)=>{const t=e.__vccOpts||e;for(const[n,o]of r)t[n]=o;return t},O={class:"research-bar__container"},z={key:0,class:"research-bar__below"},F={class:"research-bar__container"};function L(e,r,t,n,o,j){const k=P("research-logo");return i(),m("header",{class:V(n.getClasses),"data-research-header":""},[h("div",O,[D(k),u(e.$slots,"default")]),e.$slots.second_row_content?(i(),m("div",z,[h("div",F,[u(e.$slots,"second_row_content")])])):W("",!0)],2)}const p=I($,[["render",L]]);$.__docgenInfo={displayName:"researchbase-research-bar",description:`The Washu Brand Bar is the visual starting point for all
branded websites and applications.`,tags:{},exportName:"default",props:[{name:"narrow",description:"Determines whether to use the narrow version of the bar.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",description:"Default slot shows content next to the logo."},{name:"second_row_content"}],sourceFiles:["/home/runner/work/research/research/src/components/brand-bar/BrandBar.vue"]};const ae={title:"Components/Branding/Brand Bar",component:p,tags:["autodocs"],argTypes:{narrow:{control:{type:"boolean"}},default:{control:{type:"text"}},second_row_content:{control:{type:"text"}}},parameters:{docs:{source:{code:null},page:E}}},M=e=>({components:{ResearchBar:p},setup(){return{args:e}},template:`
    <researchbase-research-bar :narrow="args.narrow">
      {{ args.default }}
    </researchbase-research-bar>
  `}),a=M.bind({});a.args={narrow:!1,default:"",second_row_content:""};const R=e=>({components:{ResearchBar:p},setup(){return{args:e}},template:`
    <researchbase-research-bar :narrow="args.narrow">
      <h1 class="site-name">{{ args.default }}</h1>
    </researchbase-research-bar>
`}),s=R.bind({});s.args={...a.args,default:"Brand"};const c=R.bind({});c.args={...s.args,narrow:!0};const X=e=>({components:{ResearchBar:p},setup(){return{args:e}},template:`
    <researchbase-research-bar :narrow="args.narrow">
      <div class="parent-site-name">{{ args.default }}</div>
      <template #second_row_content>
        <h1 class="site-name">{{ args.second_row_content }}</h1>
      </template>
    </researchbase-research-bar>
`}),l=X.bind({});l.args={...a.args,default:"Brand",second_row_content:"Icon Browser"};var _,b,g;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    ResearchBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <researchbase-research-bar :narrow="args.narrow">
      {{ args.default }}
    </researchbase-research-bar>
  \`
})`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var w,f,B;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    ResearchBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <researchbase-research-bar :narrow="args.narrow">
      <h1 class="site-name">{{ args.default }}</h1>
    </researchbase-research-bar>
\`
})`,...(B=(f=s.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var v,S,T;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    ResearchBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <researchbase-research-bar :narrow="args.narrow">
      <h1 class="site-name">{{ args.default }}</h1>
    </researchbase-research-bar>
\`
})`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var y,C,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    ResearchBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <researchbase-research-bar :narrow="args.narrow">
      <div class="parent-site-name">{{ args.default }}</div>
      <template #second_row_content>
        <h1 class="site-name">{{ args.second_row_content }}</h1>
      </template>
    </researchbase-research-bar>
\`
})`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const se=["Default","WithSiteTitle","Narrow","WithParentSiteTitle"];export{a as Default,c as Narrow,l as WithParentSiteTitle,s as WithSiteTitle,se as __namedExportsOrder,ae as default};
