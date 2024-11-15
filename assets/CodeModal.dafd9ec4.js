var p=Object.defineProperty,u=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var r=(e,o,t)=>o in e?p(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,n=(e,o)=>{for(var t in o||(o={}))f.call(o,t)&&r(e,t,o[t]);if(s)for(var t of s(o))v.call(o,t)&&r(e,t,o[t]);return e},i=(e,o)=>u(e,c(o));import{r as b,a as C}from"./index.46f81d4f.js";import w from"./PreviewCode.13f512ef.js";import{a as D,dK as _,w as h,f as M,be as y,aw as A,ay as l,o as J,j as V,z as $,n as j}from"./index.444718ea.js";import"./isNumber.2f44f10c.js";import"./index.71f81828.js";import"./useWindowSizeFn.115518f2.js";const x=`<template>
  <div>
    <v-form-create
      :formConfig="formConfig"
      :formData="formData"
      v-model="fApi"
    />
    <a-button @click="submit">\u63D0\u4EA4</a-button>
  </div>
</template>
<script>

export default {
  name: 'Demo',
  data () {
    return {
      fApi:{},
      formData:{},
      formConfig: `;let g=`
    }
  },
  methods: {
    async submit() {
      const data = await this.fApi.submit()
      console.log(data)
     }
  }
}
<\/script>`;const k=D({name:"CodeModal",components:{PreviewCode:w,Modal:_},setup(){const e=h({visible:!1,jsonData:{}}),o=a=>{a.schemas&&C(a.schemas),e.visible=!0,e.jsonData=a},t=M(()=>x+JSON.stringify(b(e.jsonData),null,"	")+g);return i(n({},y(e)),{editorVueJson:t,showModal:o})}});function E(e,o,t,a,N,P){const d=l("PreviewCode"),m=l("Modal");return J(),V(m,{title:"\u4EE3\u7801",footer:null,visible:e.visible,onCancel:o[0]||(o[0]=B=>e.visible=!1),wrapClassName:"v-code-modal",style:{top:"20px"},width:"850px",destroyOnClose:!0},{default:$(()=>[j(d,{editorJson:e.editorVueJson,fileFormat:"vue"},null,8,["editorJson"])]),_:1},8,["visible"])}var q=A(k,[["render",E]]);export{q as default};
