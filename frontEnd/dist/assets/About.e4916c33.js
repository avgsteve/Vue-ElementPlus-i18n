import{d as e,p as t,b as r,r as o,o as n,e as p,f as l,t as u,w as a}from"./vendor.3184f704.js";import{_ as s}from"./index.15d23428.js";var i=e({name:"About",data(){return{popupTextVue:this.$t("about.vueFrameWork"),popupTextElementPlus:this.$t("about.elementPlus"),popupTextTypeScript:this.$t("about.typeScript"),popupTextVuei18n:this.$t("about.vuei18n")}},watch:{"$store.state.locale"(e,t){console.log({value:e,oldValue:t}),this.popupTextVue=this.$t("about.vueFrameWork"),this.popupTextElementPlus=this.$t("about.elementPlus"),this.popupTextElementPlus=this.$t("about.typeScript"),this.popupTextElementPlus=this.$t("about.vuei18n")}},setup(){}});const c=a();t("data-v-6d8e1538");const h=l("img",{class:"element-plus-logo",alt:"Vue logo",src:s},null,-1),m={class:"project-about-list"},g=l("a",{href:"https://vuejs.org/",target:"_blan",rel:"noreferrer noopener"}," Vue ",-1),v=l("a",{href:"https://element-plus.org/",target:"_blan",rel:"noreferrer noopener"},"Element Plus ",-1),b=l("a",{href:"https://www.youtube.com/watch?v=CQAQkHuulTU",target:"_blan",rel:"noreferrer noopener"},"TypeScript ",-1),d=l("a",{href:"https://kazupon.github.io/vue-i18n/",target:"_blan",rel:"noreferrer noopener"},"vue i18n ",-1);r();const f=c(((e,t,r,a,s,i)=>{const f=o("el-popover");return n(),p("div",null,[h,l("h1",null,u(e.$t("about.thisProjectUses"))+" :",1),l("ul",m,[l("li",null,[l(f,{placement:"top-start",title:"Vue",width:200,trigger:"hover",content:e.popupTextVue},{reference:c((()=>[g])),_:1},8,["content"])]),l("li",null,[l(f,{placement:"top-start",width:200,trigger:"hover",content:e.popupTextElementPlus},{reference:c((()=>[v])),_:1},8,["content"])]),l("li",null,[l(f,{placement:"top-start",width:200,trigger:"hover",content:e.popupTextTypeScript},{reference:c((()=>[b])),_:1},8,["content"])]),l("li",null,[l(f,{placement:"top-start",width:200,trigger:"hover",content:e.popupTextVuei18n},{reference:c((()=>[d])),_:1},8,["content"])])])])}));i.render=f,i.__scopeId="data-v-6d8e1538";export default i;
