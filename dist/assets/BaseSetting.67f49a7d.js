var d=(o,s,r)=>new Promise((c,n)=>{var l=t=>{try{e(r.next(t))}catch(m){n(m)}},a=t=>{try{e(r.throw(t))}catch(m){n(m)}},e=t=>t.done?c(t.value):Promise.resolve(t.value).then(l,a);e((r=r.apply(o,s)).next())});import{a as v,aw as g,cE as h,C as B,s as F,N as A,f as w,ay as p,o as I,j as S,z as u,n as i,i as _,B as b,E as y,fo as E,fp as R}from"./index.444718ea.js";/* empty css               */import{B as k}from"./BasicForm.a3ec8b2c.js";import"./componentMap.f197190c.js";import{u as N}from"./useForm.03f24358.js";import"./RadioButtonGroup.2d7e8065.js";import{a as U}from"./index.aea3943d.js";import{h as V}from"./header.d801b988.js";import{a as $}from"./account.4f24c1c9.js";import{b as x}from"./data.08d7c751.js";import{u as M}from"./upload.19158cfd.js";import{R as T}from"./index.4d69797f.js";import{C as j}from"./index.95579f8d.js";/* empty css              */import"./FormItem.vue_vue_type_script_lang.276aad27.js";import"./index.469411a1.js";import"./index.6087afbc.js";import"./_baseIteratee.06432f6a.js";import"./get.066b7822.js";import"./DeleteOutlined.d08d062e.js";import"./index.8b6de8b6.js";import"./useRefs.d5715d6d.js";import"./Form.a567a65a.js";import"./Col.b3dea441.js";import"./useFlexGapSupport.0f4e02b8.js";import"./useSize.18a619e6.js";import"./uniqBy.d5c89ac8.js";import"./index.aeb68d41.js";import"./useWindowSizeFn.115518f2.js";import"./FullscreenOutlined.1ce89a14.js";import"./index.a26b8d1c.js";import"./Checkbox.5348e20f.js";import"./index.ef810c05.js";import"./index.29cdf7d7.js";import"./index.9deca062.js";import"./index.4575bac4.js";import"./index.4fcc5b07.js";import"./index.45ccc3f4.js";import"./useFormItem.c4f2b3ce.js";import"./index.78169a94.js";import"./eagerComputed.1b925bf8.js";import"./transButton.fbee1833.js";import"./index.cc93c6bb.js";import"./index.46c0cd49.js";import"./index.641531b0.js";import"./isNumber.2f44f10c.js";import"./uuid.2b29000c.js";import"./download.4f91264f.js";import"./base64Conver.08b9f4ec.js";import"./index.74ce321d.js";import"./index.09326035.js";import"./index.51c956a1.js";import"./index.001e40f9.js";const z=v({components:{BasicForm:k,CollapseContainer:h,Button:B,ARow:T,ACol:j,CropperAvatar:U},setup(){const{createMessage:o}=y(),s=F(),[r,{setFieldsValue:c}]=N({labelWidth:120,schemas:x,showActionButtonGroup:!1});A(()=>d(this,null,function*(){const a=yield $();c(a)}));const n=w(()=>{const{avatar:a}=s.getUserInfo;return a||V});function l({src:a,data:e}){const t=s.getUserInfo;t.avatar=a,s.setUserInfo(t)}return{avatar:n,register:r,uploadApi:M,updateAvatar:l,handleSubmit:()=>{o.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),G=o=>(E("data-v-8891ad62"),o=o(),R(),o),P={class:"change-avatar"},W=G(()=>_("div",{class:"mb-2"},"\u5934\u50CF",-1));function q(o,s,r,c,n,l){const a=p("BasicForm"),e=p("a-col"),t=p("CropperAvatar"),m=p("a-row"),f=p("Button"),C=p("CollapseContainer");return I(),S(C,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:u(()=>[i(m,{gutter:24},{default:u(()=>[i(e,{span:14},{default:u(()=>[i(a,{onRegister:o.register},null,8,["onRegister"])]),_:1}),i(e,{span:10},{default:u(()=>[_("div",P,[W,i(t,{uploadApi:o.uploadApi,value:o.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),i(f,{type:"primary",onClick:o.handleSubmit},{default:u(()=>[b(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ")]),_:1},8,["onClick"])]),_:1})}var Ho=g(z,[["render",q],["__scopeId","data-v-8891ad62"]]);export{Ho as default};