var h=Object.defineProperty;var d=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var v=(r,t,o)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,C=(r,t)=>{for(var o in t||(t={}))M.call(t,o)&&v(r,o,t[o]);if(d)for(var o of d(t))b.call(t,o)&&v(r,o,t[o]);return r};var _=(r,t,o)=>new Promise((m,a)=>{var u=i=>{try{e(o.next(i))}catch(p){a(p)}},c=i=>{try{e(o.throw(i))}catch(p){a(p)}},e=i=>i.done?m(i.value):Promise.resolve(i.value).then(u,c);e((o=o.apply(r,t)).next())});import{B as k}from"./BasicForm.8b5cd5a8.js";import"./componentMap.854856fa.js";import{u as w}from"./useForm.a4050b72.js";import"./RadioButtonGroup.00f6150b.js";import x from"./JsonModal.fd19de4a.js";import{a as B,v as F,w as y,f as D,o as E,j,z,n as g,k as l,az as O,dK as R}from"./index.0994ffcf.js";/* empty css              *//* empty css               */import"./FormItem.vue_vue_type_script_lang.1addcaf5.js";import"./index.31f380d8.js";import"./index.b32d7fc7.js";import"./_baseIteratee.03859d79.js";import"./get.cad0ef5a.js";import"./DeleteOutlined.2279352f.js";import"./index.736d5ebb.js";import"./useRefs.e7dceed1.js";import"./Form.5eb5121e.js";import"./Col.eef5d868.js";import"./useFlexGapSupport.02b519a7.js";import"./useSize.c81b3ed4.js";import"./index.09d33596.js";import"./uniqBy.485a2f6d.js";import"./index.b7f80407.js";import"./useWindowSizeFn.c35b04b1.js";import"./FullscreenOutlined.173f28f0.js";import"./index.ec7b7cf8.js";import"./index.1b041e8d.js";import"./Checkbox.e8d9cfcc.js";import"./index.955360e8.js";import"./index.e13a836d.js";import"./index.06cda3f0.js";import"./index.6575f003.js";import"./index.3b1bbfdc.js";import"./index.7fc8eebd.js";import"./useFormItem.db811efb.js";import"./index.e166860d.js";import"./eagerComputed.1f875881.js";import"./transButton.5787cddc.js";import"./index.2b0b7b4b.js";import"./index.a5092513.js";import"./index.ded85ab8.js";import"./isNumber.0c8ac276.js";import"./uuid.2b29000c.js";import"./download.b3e2826c.js";import"./base64Conver.08b9f4ec.js";import"./index.a9111ac7.js";import"./index.c4b8367f.js";import"./PreviewCode.25b4bdba.js";import"./index.df6ce948.js";import"./index.f1ed85df.js";const Oo=B({__name:"useForm",setup(r,{expose:t}){const o=F(null),m=y({formModel:{},formConfig:{},visible:!1}),a=D(()=>C({},m.formConfig)),u=n=>{m.formConfig=n,m.visible=!0},[c,{validate:e}]=w(),i=()=>{m.visible=!1},p=()=>_(this,null,function*(){var s,f;let n=yield e();(f=(s=o.value)==null?void 0:s.showModal)==null||f.call(s,n)});return t({showModal:u}),(n,s)=>(E(),j(l(R),{title:"\u9884\u89C8(\u4E0D\u652F\u6301\u5E03\u5C40)",visible:m.visible,onOk:p,onCancel:i,okText:"\u83B7\u53D6\u6570\u636E",cancelText:"\u5173\u95ED",style:{top:"20px"},destroyOnClose:!0,width:900},{default:z(()=>[g(l(k),O(l(a),{onRegister:l(c)}),null,16,["onRegister"]),g(x,{ref_key:"jsonModal",ref:o},null,512)]),_:1},8,["visible"]))}});export{Oo as default};