var u=Object.defineProperty;var p=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var i=(r,o,t)=>o in r?u(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,m=(r,o)=>{for(var t in o||(o={}))d.call(o,t)&&i(r,t,o[t]);if(p)for(var t of p(o))h.call(o,t)&&i(r,t,o[t]);return r};import{_ as l}from"./FormItem.vue_vue_type_script_lang.276aad27.js";import{aw as _,a as $,f as s,k as a,ay as C,o as P,j as g,aA as j,aB as y,z as F,aC as I,aD as b,aE as k}from"./index.444718ea.js";/* empty css               */import"./index.469411a1.js";/* empty css              */import"./componentMap.f197190c.js";import"./index.a26b8d1c.js";import"./Checkbox.5348e20f.js";import"./index.ef810c05.js";import"./index.29cdf7d7.js";import"./index.9deca062.js";import"./index.4575bac4.js";import"./index.4fcc5b07.js";import"./index.45ccc3f4.js";import"./useFormItem.c4f2b3ce.js";import"./RadioButtonGroup.2d7e8065.js";import"./get.066b7822.js";import"./index.78169a94.js";import"./eagerComputed.1b925bf8.js";import"./index.6087afbc.js";import"./_baseIteratee.06432f6a.js";import"./DeleteOutlined.d08d062e.js";import"./index.8b6de8b6.js";import"./useRefs.d5715d6d.js";import"./Form.a567a65a.js";import"./Col.b3dea441.js";import"./useFlexGapSupport.0f4e02b8.js";import"./useSize.18a619e6.js";import"./transButton.fbee1833.js";import"./index.cc93c6bb.js";import"./index.aeb68d41.js";import"./useWindowSizeFn.115518f2.js";import"./FullscreenOutlined.1ce89a14.js";import"./index.46c0cd49.js";import"./index.641531b0.js";import"./isNumber.2f44f10c.js";import"./uuid.2b29000c.js";import"./download.4f91264f.js";import"./base64Conver.08b9f4ec.js";import"./index.74ce321d.js";import"./index.09326035.js";import"./index.95579f8d.js";const v=$({name:"VFormItem",components:{FormItem:l},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},setup(r){const o=s(()=>m({},a(r.schema))),t=s(()=>m({},a(r.formConfig)));return{schemaNew:o,getProps:t}}});function w(r,o,t,n,O,B){const c=C("FormItem");return P(),g(c,{schema:r.schemaNew,formProps:r.getProps},j({_:2},[y(Object.keys(r.$slots),e=>({name:e,fn:F(f=>[I(r.$slots,e,b(k(f||{})))])}))]),1032,["schema","formProps"])}var gr=_(v,[["render",w]]);export{gr as default};