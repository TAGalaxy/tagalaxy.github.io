var Q=Object.defineProperty,U=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var q=(e,t,a)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))L.call(t,a)&&q(e,a,t[a]);if(I)for(var a of I(t))O.call(t,a)&&q(e,a,t[a]);return e},M=(e,t)=>U(e,X(t));var R=(e,t)=>{var a={};for(var s in e)L.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&I)for(var s of I(e))t.indexOf(s)<0&&O.call(e,s)&&(a[s]=e[s]);return a};var _=(e,t,a)=>new Promise((s,C)=>{var g=r=>{try{p(a.next(r))}catch(d){C(d)}},y=r=>{try{p(a.throw(r))}catch(d){C(d)}},p=r=>r.done?s(r.value):Promise.resolve(r.value).then(g,y);p((a=a.apply(e,t)).next())});import{a as T}from"./formItemConfig.c043ebaf.js";import{a as Y,bm as Z,b8 as x,w as ee,f as P,k as $,fR as oe,aq as te,be as ae,aw as ne,ay as b,o as v,j as D,z as f,n as A,aD as z,aE as E,aA as W,aC as se,az as G,B as me,t as B,l as N,i as S,aI as re,h as le}from"./index.444718ea.js";import{h as H}from"./index.46f81d4f.js";import{D as ie}from"./index.469411a1.js";/* empty css               */import{a as ce}from"./useFormDesignState.53120c98.js";import{a as pe}from"./Form.a567a65a.js";import"./index.6087afbc.js";import{C as de}from"./index.95579f8d.js";import"./componentMap.f197190c.js";import"./index.a26b8d1c.js";import"./Checkbox.5348e20f.js";import"./index.ef810c05.js";import"./index.29cdf7d7.js";import"./index.9deca062.js";import"./index.4575bac4.js";import"./index.4fcc5b07.js";import"./index.45ccc3f4.js";import"./useFormItem.c4f2b3ce.js";import"./RadioButtonGroup.2d7e8065.js";import"./get.066b7822.js";import"./index.78169a94.js";import"./eagerComputed.1b925bf8.js";import"./DeleteOutlined.d08d062e.js";import"./transButton.fbee1833.js";import"./index.cc93c6bb.js";import"./useFlexGapSupport.0f4e02b8.js";import"./index.aeb68d41.js";import"./useWindowSizeFn.115518f2.js";import"./FullscreenOutlined.1ce89a14.js";import"./index.8b6de8b6.js";import"./useRefs.d5715d6d.js";import"./index.46c0cd49.js";import"./index.641531b0.js";import"./isNumber.2f44f10c.js";import"./uuid.2b29000c.js";import"./download.4f91264f.js";import"./base64Conver.08b9f4ec.js";import"./index.74ce321d.js";import"./index.09326035.js";import"./_baseIteratee.06432f6a.js";import"./Col.b3dea441.js";import"./useSize.18a619e6.js";const he=Y({name:"VFormItem",components:{Tooltip:Z,Icon:x,FormItem:pe,Divider:ie,Col:de},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},emits:["update:form-data","change"],setup(e,{emit:t}){const a=ee({componentMap:T}),{formModel:s,setFormModel:C}=ce(),g=P(()=>{const{colProps:o={}}=e.schema;return o}),y=P(()=>{var V,j;const{formConfig:o}=$(e);let{field:m,required:n,rules:h,labelCol:i,wrapperCol:c}=$(e.schema);const{colon:J}=e.formConfig,{itemProps:l}=$(e.schema);i=i||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:`width:${o.labelWidth}px`}:o.labelCol:{}),c=c||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:"width:auto;flex:1"}:o.wrapperCol:{});const K=o.layout==="horizontal"&&o.labelLayout==="flex"?{display:"flex"}:{},w=Object.assign({},{name:m,style:u({},K),colon:J,required:n,rules:h,labelCol:i,wrapperCol:c},l);return(V=l==null?void 0:l.labelCol)!=null&&V.span||(w.labelCol=i),(j=l==null?void 0:l.wrapperCol)!=null&&j.span||(w.wrapperCol=c),l!=null&&l.rules||(w.rules=h),w}),p=P(()=>T.get(e.schema.component)),r=o=>{var m,n;o.component==="Button"&&((m=o.componentProps)==null?void 0:m.handle)&&t((n=o.componentProps)==null?void 0:n.handle)},d=oe(()=>_(this,null,function*(){var n;let{options:o,treeData:m}=(n=e.schema.componentProps)!=null?n:{};return o&&(o=yield H(o)),m&&(m=yield H(m)),{options:o,treeData:m}})),F=P(()=>{var i;const o=e.schema&&["Switch","Checkbox","Radio"].includes(e.schema.component);let{field:m}=e.schema,c=(i=te(e.schema.componentProps,["options","treeData"]))!=null?i:{},{disabled:n}=c,h=R(c,["disabled"]);return n=e.formConfig.disabled||n,M(u({},h),{disabled:n,[o?"checked":"value"]:s.value[m]})}),k=function(o){const m=["Switch","Checkbox","Radio"].includes(e.schema.component),n=o?o.target:null,h=n?m?n.checked:n.value:o;C(e.schema.field,h),t("change",h)};return M(u({},ae(a)),{componentItem:p,formItemProps:y,handleClick:r,asyncProps:d,cmpProps:F,handleChange:k,colPropsComputed:g})}}),ue={key:2};function fe(e,t,a,s,C,g){const y=b("Icon"),p=b("Tooltip"),r=b("Divider"),d=b("FormItem"),F=b("Col");return v(),D(F,z(E(e.colPropsComputed)),{default:f(()=>[A(d,z(E(u({},e.formItemProps))),W({default:f(()=>{var k;return[e.schema.componentProps&&((k=e.schema.componentProps)==null?void 0:k.slotName)?se(e.$slots,e.schema.componentProps.slotName,z(G({key:0},e.schema)),void 0,!0):e.schema.component=="Divider"&&e.schema.label&&!e.formItemProps.hiddenLabel?(v(),D(r,{key:1},{default:f(()=>[me(B(e.schema.label),1)]),_:1})):N("",!0),S("div",null,[(v(),D(re(e.componentItem),G({class:"v-form-item-wrapper"},u(u({},e.cmpProps),e.asyncProps),{schema:e.schema,style:e.schema.width?{width:e.schema.width}:{},onChange:e.handleChange,onClick:t[0]||(t[0]=o=>e.handleClick(e.schema))}),null,16,["schema","style","onChange"]))]),["Button"].includes(e.schema.component)?(v(),le("span",ue,B(e.schema.label),1)):N("",!0)]}),_:2},[!e.formItemProps.hiddenLabel&&e.schema.component!=="Divider"?{name:"label",fn:f(()=>[A(p,null,W({default:f(()=>[S("span",null,B(e.schema.label),1),e.schema.helpMessage?(v(),D(y,{key:0,class:"ml-5",icon:"ant-design:question-circle-outlined"})):N("",!0)]),_:2},[e.schema.helpMessage?{name:"title",fn:f(()=>[S("span",null,B(e.schema.helpMessage),1)]),key:"0"}:void 0]),1024)]),key:"0"}:void 0]),1040)]),_:3},16)}var mo=ne(he,[["render",fe],["__scopeId","data-v-a8d8a2d6"]]);export{mo as default};