import{d as k,l as c,o as r,b as m,g as o,s as l,n as u,m as d,w as p,p as h,f as g,t as f}from"./vue.esm-bundler-c553bea2.js";import{c as x}from"./utlity-04b79d70.js";import{_ as N}from"./Headline-6e65437c.js";import{_ as w}from"./Button-2e6767e8.js";import{B as y}from"./_background-de89aa7c.js";import{_ as C}from"./Stub-c448eeac.js";const $={key:0,class:"banner__image"},V=["src"],z={class:"banner__container"},E={class:"banner__content"},B=k({__name:"Banner",props:{title:{type:String},image:{type:String},url:{type:String},text:{type:String},button_text:{type:String},overlay_color:{type:String,default:"gradient-dark"},overlay_to:{type:String,default:"gradient-bottom"},...y.props},setup(e){const n=e,S=c(()=>{let t=["banner"];return["overlay_color","overlay_to","size","vertical_alignment","horizontal_alignment"].forEach(a=>{n[a]===!0&&t.push(`banner--${x(a)}`)}),y.addBackgroundClass(t,n),n.url&&t.push("click-container"),t}),i=c(()=>{if(n.title){let t={level:"h2",classes:"headline"};return n.headline_settings&&Array.prototype.forEach.call(["level","class"],a=>{n.headline_settings[a]&&(t[a]=n.headline_settings[a])}),t}return{}});return(t,a)=>(r(),m("div",{class:h(S.value)},[e.image?(r(),m("div",$,[o("img",{src:e.image,alt:"",loading:"lazy"},null,8,V)])):l("",!0),o("div",z,[o("div",E,[u(t.$slots,"headline",{},()=>[e.title?(r(),d(N,{key:0,level:i.value.level,class:h(i.value.classes),href:e.url},{default:p(()=>[g(f(e.title),1)]),_:1},8,["level","class","href"])):l("",!0)]),u(t.$slots,"default"),e.url&&e.button_text?(r(),d(w,{key:0,href:e.url,class:"bttn--secondary bttn--caps",arrow:!0},{default:p(()=>[g(f(e.button_text),1)]),_:1},8,["href"])):l("",!0)])])],2))}});B.__docgenInfo={exportName:"default",displayName:"Banner",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"image",type:{name:"string"}},{name:"url",type:{name:"string"}},{name:"text",type:{name:"string"}},{name:"button_text",type:{name:"string"}},{name:"overlay_color",type:{name:"string"},defaultValue:{func:!1,value:"'gradient-dark'"}},{name:"overlay_to",type:{name:"string"},defaultValue:{func:!1,value:"'gradient-bottom'"}}],slots:[{name:"headline"},{name:"default"}],sourceFiles:["/home/runner/work/research/research/src/components/banner/Banner.vue"]};const I={title:"Not implemented/Banner",component:B,argTypes:{media:{control:"text"}},parameters:{docs:{source:{code:null}},options:{showPanel:!1}}},T=e=>({components:{ResearchStub:C},setup(){return{args:e}},template:`
    <research-stub
      path="banner--default.html"
      title="Banner"
    >
    </research-stub>
  `}),s=T.bind({});var _,b,v;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchStub
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <research-stub
      path="banner--default.html"
      title="Banner"
    >
    </research-stub>
  \`
})`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const O=["Banner"];export{s as Banner,O as __namedExportsOrder,I as default};
