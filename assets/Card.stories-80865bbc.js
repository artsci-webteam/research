import{d as ke,l as p,o as r,b as i,n as m,s as u,p as _,v as xe,y as Te,g as G,e as ze,w as A,m as I,f as g,t as W}from"./vue.esm-bundler-c553bea2.js";import{c as j}from"./utlity-04b79d70.js";import{_ as Be}from"./Headline-6e65437c.js";import{B as R,_ as Le}from"./Button-2e6767e8.js";import{B as N}from"./_background-de89aa7c.js";import{M as $}from"./media-1d760b2d.js";import{_ as Se,a as Ve}from"./GridItem-9d2cf158.js";import Ae from"./preview-642dc0ae.js";import"./DocumentationTemplate-4d2eb35c.js";import"./jsx-runtime-f8f6162e.js";import"./index-42c4eb61.js";import"./iframe-eddfea5a.js";import"../sb-preview/runtime.js";import"./index-f4dda215.js";import"./index-d8983a70.js";import"./index-356e4a49.js";import"./index-7d42929a.js";const Re="/docs/v4.0.1/assets/122-6f029ca9.jpg",Ne={key:0,class:"fas fa-arrow-right"},Ce=ke({__name:"PseudoButton",props:{color:{type:String,default:"primary",validator:function(a){return["primary","secondary","tertiary","link"].indexOf(a)!==-1}},size:{type:String,default:"medium",validator:function(a){return["small","medium","large"].indexOf(a)!==-1}},arrow:{type:Boolean,default:!0},outline:{type:Boolean,default:!1},font:{type:String,default:""}},setup(a){const e=a,s=p(()=>({bttn:!0,"bttn--primary":e.color==="primary","bttn--secondary":e.color==="secondary","bttn--tertiary":e.color==="tertiary","bttn--link":e.color==="link","bttn--outline":e.outline,"bttn--font-serif":e.font==="serif","bttn--font-sans-serif":e.font==="sans-serif","bttn--small":e.size==="small","bttn--medium":e.size==="medium","bttn--large":e.size==="large"}));return(l,v)=>(r(),i("div",{class:_(s.value)},[m(l.$slots,"default"),a.arrow?(r(),i("i",Ne)):u("",!0)],2))}});Ce.__docgenInfo={exportName:"default",displayName:"PseudoButton",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","link"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"arrow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"font",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/research/research/src/components/button/PseudoButton.vue"]};const $e=2;class Ge{constructor(e,s){let l,v,c,d;for(d=0;d<s.length&&(c=e.querySelector(s[d]),!c);d++);c&&(e.style.cursor="pointer",e.onmousedown=h=>{this.ignoreClick(h)||(v=+new Date)},e.onmouseup=h=>{this.ignoreClick(h)||(l=+new Date,l-v<200&&c.click())})}ignoreClick(e){return e.button===$e||["A","BUTTON"].indexOf(e.target.nodeName)!==-1}}function Ie(a,e=[".click-target"]){const s=document.querySelectorAll(a);Array.prototype.forEach.call(s,l=>{new Ge(l,e)})}const We={class:"media__inner"},je=["href"],De={class:"card__body"},Me={key:0},Pe=["href"],qe={key:1,class:"card__details"},Oe={key:0,class:"card__subtitle"},Ue={key:1,class:"card__meta"},Ee={key:2},S=ke({__name:"Card",props:{headline_style:{type:String,default:""},url:{type:String},link_text:{type:String},link_indicator:{type:Boolean,default:!0},button_align_bottom:{type:Boolean,default:!1},centered:{type:Boolean},...R.props,...N.props,orientation:{type:String,default:"",validator:a=>["","left","right"].indexOf(a)!==-1},...$.props,media_padded:{type:Boolean,default:!1}},setup(a){const e=a,s=xe(),l=p(()=>{let t=["card"];return["centered","media_padded","button_align_bottom"].forEach(V=>{e[V]===!0&&t.push(`card--${j(V)}`)}),e.orientation&&t.push(`card--layout-${j(e.orientation)}`),N.addBackgroundClass(t,e),R.addBorderlessClass(t,e),e.url&&t.push("click-container"),t}),v=p(()=>{let t=["media"];return $.addMediaClasses(t,e),t}),c=p(()=>{let t=["bttn--transparent","bttn--light-font"];return e.link_indicator&&e.url&&!e.link_text&&(t.push("bttn--circle"),t.push("bttn--no-text")),d.value==="button"&&t.push("click-target"),t}),d=p(()=>e.url?s.title?"title":!e.link_text&&s.media?"image":"button":null),h=p(()=>d.value==="title"?e.url:!1),we=p(()=>!!(s.subtitle||s.meta));return Te(()=>{e.url&&Ie(".click-container:not([data-research-no-link])")}),(t,V)=>(r(),i("div",{class:_(l.value)},[t.$slots.media?(r(),i("div",{key:0,class:_(v.value)},[G("div",We,[d.value==="image"?(r(),i("a",{key:0,href:a.url,class:"click-target"},[m(t.$slots,"media")],8,je)):m(t.$slots,"media",{key:1})])],2)):u("",!0),G("div",De,[t.$slots.title?(r(),i("header",Me,[ze(Be,{text_style:a.headline_style},{default:A(()=>[h.value?(r(),i("a",{key:0,href:h.value,class:"click-target"},[m(t.$slots,"title",{},()=>[g("Title")])],8,Pe)):m(t.$slots,"title",{key:1},()=>[g("Title")])]),_:3},8,["text_style"])])):u("",!0),we.value===!0?(r(),i("div",qe,[t.$slots.subtitle?(r(),i("div",Oe,[m(t.$slots,"subtitle",{},()=>[g("Subtitle")])])):u("",!0),t.$slots.meta?(r(),i("div",Ue,[m(t.$slots,"meta",{},()=>[g("Meta")])])):u("",!0)])):u("",!0),m(t.$slots,"default",{},()=>[g("Body")]),a.url&&(a.link_indicator||a.link_text)?(r(),i("footer",Ee,[d.value==="button"?(r(),I(Le,{key:0,class:_(c.value),url:a.url,size:"medium"},{default:A(()=>[g(W(a.link_text),1)]),_:1},8,["class","url"])):(r(),I(Ce,{key:1,class:_(c.value)},{default:A(()=>[g(W(a.link_text),1)]),_:1},8,["class"]))])):u("",!0)])],2))}});S.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"headline_style",description:"Title style for the headline.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"url",description:"A URL to the resource that the card represents.",type:{name:"string"}},{name:"link_text",description:"Text to display in a button.",type:{name:"string"}},{name:"link_indicator",description:"Display a circle button when there is no button text.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"button_align_bottom",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"centered",description:"Alignment of text content.",type:{name:"boolean"}},{name:"orientation",description:"How to lay out the content of the card. Default is stacked.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"media_padded",description:`Add padding around the entirety of the contents of the card.
**Note** this has no effect when paired with the borderless option.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"media",description:"Media displayed at the top of the card."},{name:"title"},{name:"subtitle",description:"The subtitle of the card.."},{name:"meta",description:"The meta of the card.."},{name:"default",description:"The body content of the card."}],sourceFiles:["/home/runner/work/research/research/src/components/card/Card.vue"]};const Fe="/docs/v4.0.1/assets/person-one-e1749cef.svg",ct={parameters:{docs:{source:{code:null}}},title:"Components/Card",component:S,tags:["autodocs"],argTypes:{headline_style:{name:"Title style",options:["serif",""],control:{type:"select",labels:{serif:"Zilla Slab (default)","":"Roboto"}},table:{category:"Display options"}},url:{name:"URL",table:{category:"Content"}},link_text:{name:"Link text",table:{category:"Content"}},link_indicator:{name:"Display button when there is no link text",if:{arg:"link_text",truthy:!1},table:{category:"Display options"}},button_align_bottom:{name:"Align button to bottom",table:{category:"Display options"}},...N.argTypes,...R.argTypes,centered:{name:"Centered",table:{category:"Display options"}},...$.argTypes,orientation:{name:"Orientation",options:["","left","right"],control:{type:"select",labels:{"":"stacked"}},table:{category:"Display options"}},media_padded:{name:"Padded",table:{category:"Media"}},media:{name:"Media",control:"text",table:{category:"Media"}},title:{name:"Title",control:"text",table:{category:"Content"}},subtitle:{name:"Subtitle",control:{type:"text"},table:{category:"Content"}},meta:{name:"Meta",control:{type:"text"},table:{category:"Content"}},default:{name:"Content",control:{type:"text"},table:{category:"Content"}},section_background:{name:"Section background",options:["","bg--black","bg--black--pattern--brain","bg--black--pattern--community","bg--black--pattern--particle","bg--gold","bg--gold--pattern--brain","bg--gold--pattern--community","bg--gold--pattern--particle","bg--gray","bg--gray--pattern--brain","bg--gray--pattern--community","bg--gray--pattern--particle","bg--white","bg--white--pattern--brain","bg--white--pattern--community","bg--white--pattern--particle"],control:{type:"select",labels:{"":"- None -","bg--black":"Black","bg--black--pattern--brain":"Black - Brain pattern","bg--black--pattern--community":"Black - Community pattern","bg--black--pattern--particle":"Black - Particle pattern","bg--gold":"Gold","bg--gold--pattern--brain":"Gold - Brain pattern","bg--gold--pattern--community":"Gold - Community pattern","bg--gold--pattern--particle":"Gold - Particle pattern","bg--gray":"Gray","bg--gray--pattern--brain":"Gray - Brain pattern","bg--gray--pattern--community":"Gray - Community pattern","bg--gray--pattern--particle":"Gray - Particle pattern","bg--white":"White","bg--white--pattern--brain":"White - Brain pattern","bg--white--pattern--community":"White - Community pattern","bg--white--pattern--particle":"White - Particle pattern"}},table:{category:"Container"}},grid_type:{name:"Grid",options:["onecol","onecol__narrow","twocol--50-50","threecol--33-34-33","fourcol--25"],control:{type:"select",labels:{onecol:"One column",onecol__narrow:"One column (narrow)","twocol--50-50":"Two columns","threecol--33-34-33":"Three columns","fourcol--25":"Four columns"}},table:{category:"Container"}},record_count:{name:"# of records",table:{category:"Container"}}}},o=a=>({components:{ResearchCard:S},setup(){return{args:a}},template:`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  `}),n=o.bind({});n.args={media:'<img src="'+Re+'" alt="Alt">',title:"Arts and Culture",subtitle:"",meta:"",default:"For decades, Washu has been a gathering place for artists, creating a cultural hub that’s more accessible than any major city. ",url:"https://artsci.wustl.edu",link_text:"Explore the arts",link_indicator:!0,button_align_bottom:!1,headline_style:"serif",borderless:!1,background:"",centered:!1,orientation:"",media_border:!1,media_size:"large",media_shape:"widescreen",media_padded:!1,section_background:""};const f=o.bind({});f.args={...n.args,link_text:""};const y=o.bind({});y.args={...n.args,title:""};const k=o.bind({});k.args={...n.args,title:"",link_text:""};const C=o.bind({});C.args={...n.args,centered:!0,media_padded:!0,media_size:"small",media_shape:"circle",media_border:!0,title:"24hour-phone",media:'<img icon="24hour-phone" variant="two-color" src="https://icons.brand.uiowa.edu/brand-icons/megaphone-bullhorn-two-color.png" alt="24hour-phone" loading="lazy" class="two-color">',url:"https://uiowa.edu",default:""};const w=o.bind({});w.args={...n.args,centered:!0,media_size:"small",media_padded:!0,title:"very cool card",media:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M430.3 503.8L382.3 447.8C378.4 443.4 376.3 437.7 376.3 431.7V376.3L351.1 344.7V407.8C351.1 425.4 337.7 439.8 319.1 439.8C302.3 439.8 287.1 425.4 287.1 407.8V344.7L263.7 376.3V431.7C263.7 437.7 261.6 443.4 257.7 447.8L209.7 503.8C201.1 513.8 186.1 514.8 176.3 505.9C166.5 497 165.6 481.6 174.3 471.6L216.3 422.5V367.8C216.3 362.3 218.1 357 221.5 352.7L287.1 266.3V266L154.6 387.8C97.58 447.6 .0003 405.2 0 320.6C0 272.7 34.02 232.3 79.35 226.4L232.3 202.5L191.5 161.6C183.7 153.8 182.1 141.5 187.6 131.8L211.5 90.06L173.3 39.18C165.3 28.54 167.2 13.26 177.5 5.046C187.9-3.17 202.7-1.207 210.7 9.429L258.7 73.34C264.6 81.21 265.3 91.99 260.4 100.6L237.8 140L287.1 190.3V152.1C287.1 137.2 298.2 124.7 311.1 121.1V63.93C311.1 59.51 315.6 55.93 319.1 55.93C324.4 55.93 327.1 59.51 327.1 63.93V121.1C341.8 124.7 351.1 137.2 351.1 152.1V190.3L402.2 140L379.6 100.6C374.7 91.99 375.4 81.21 381.3 73.34L429.3 9.429C437.3-1.207 452.1-3.169 462.5 5.047C472.8 13.26 474.7 28.55 466.7 39.18L428.5 90.06L452.4 131.8C457.9 141.5 456.3 153.8 448.5 161.6L407.7 202.5L560.6 226.4C605.1 232.3 640 272.7 640 320.6C640 405.2 542.4 447.6 485.4 387.8L351.1 266V266.3L418.5 352.7C421.9 357 423.7 362.3 423.7 367.8V422.5L465.7 471.6C474.4 481.6 473.5 497 463.7 505.9C453.9 514.8 438.9 513.8 430.3 503.8L430.3 503.8z"/></svg>',url:"https://wustl.edu"};const x=o.bind({});x.args={...n.args,borderless:!0};const b=o.bind({});b.args={...n.args,media:'<img src="'+Fe+'" alt="not-found">',orientation:"right",media_size:"small",media_shape:"circle",media_border:!0,title:"User not found",subtitle:"Washington University in St Louis",default:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",borderless:!0};b.parameters={viewport:{viewports:Ae.parameters.viewport.viewports,defaultViewport:"tablet"}};const T=o.bind({});T.args={...n.args,media:'<iframe src="https://www.youtube.com/embed/iYv2KBtE7e4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};const z=o.bind({});z.args={...n.args,url:""};const B=o.bind({});B.args={...n.args,button_align_bottom:!0};const He=a=>({components:{ResearchGrid:Se,ResearchGridItem:Ve,ResearchCard:S},setup(){return{args:a}},template:`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <research-grid :type="args.grid_type">
        <research-grid-item v-for="item in args.record_count" :key="item">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </research-grid-item>
      </research-grid>
    </div>
  `}),L=He.bind({});L.args={...n.args,grid_type:"threecol--33-34-33",record_count:3};var D,M,P;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(P=(M=n.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var q,O,U;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(U=(O=f.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var E,F,H;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(H=(F=y.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var Y,K,Z;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(Z=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var J,Q,X;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,te,ae;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(ae=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,se;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,oe,de;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(de=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var le,me,ce;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(ce=(me=T.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ge,pe,ue;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(ue=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var he,be,ve;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(ve=(be=B.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var _e,fe,ye;L.parameters={...L.parameters,docs:{...(_e=L.parameters)==null?void 0:_e.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchGrid,
    ResearchGridItem,
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <research-grid :type="args.grid_type">
        <research-grid-item v-for="item in args.record_count" :key="item">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </research-grid-item>
      </research-grid>
    </div>
  \`
})`,...(ye=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};const gt=["Default","LinkedWithNoButtonText","LinkedWithNoTitle","LinkedImage","ImageUsingResearchIcon","ImageUsingFontAwesomeIcon","WithNoBorder","PersonProfile","WithVideoMedia","WithNoLink","ButtonAlignedToBottom","Grid"];export{B as ButtonAlignedToBottom,n as Default,L as Grid,w as ImageUsingFontAwesomeIcon,C as ImageUsingResearchIcon,k as LinkedImage,f as LinkedWithNoButtonText,y as LinkedWithNoTitle,b as PersonProfile,x as WithNoBorder,z as WithNoLink,T as WithVideoMedia,gt as __namedExportsOrder,ct as default};
