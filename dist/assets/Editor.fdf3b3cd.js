import{B as n}from"./BasicForm.a3ec8b2c.js";import"./componentMap.f197190c.js";import"./RadioButtonGroup.2d7e8065.js";import{aw as u,a as l,cE as c,ay as r,o as d,j as f,z as p,n as i,bU as C,E as _}from"./index.444718ea.js";import{M as h}from"./index.d9585abc.js";import{P as b}from"./index.f6511e11.js";/* empty css              *//* empty css               */import"./FormItem.vue_vue_type_script_lang.276aad27.js";import"./index.469411a1.js";import"./index.6087afbc.js";import"./_baseIteratee.06432f6a.js";import"./get.066b7822.js";import"./DeleteOutlined.d08d062e.js";import"./index.8b6de8b6.js";import"./useRefs.d5715d6d.js";import"./Form.a567a65a.js";import"./Col.b3dea441.js";import"./useFlexGapSupport.0f4e02b8.js";import"./useSize.18a619e6.js";import"./index.95579f8d.js";import"./uniqBy.d5c89ac8.js";import"./index.aeb68d41.js";import"./useWindowSizeFn.115518f2.js";import"./FullscreenOutlined.1ce89a14.js";import"./index.4d69797f.js";import"./index.a26b8d1c.js";import"./Checkbox.5348e20f.js";import"./index.ef810c05.js";import"./index.29cdf7d7.js";import"./index.9deca062.js";import"./index.4575bac4.js";import"./index.4fcc5b07.js";import"./index.45ccc3f4.js";import"./useFormItem.c4f2b3ce.js";import"./index.78169a94.js";import"./eagerComputed.1b925bf8.js";import"./transButton.fbee1833.js";import"./index.cc93c6bb.js";import"./index.46c0cd49.js";import"./index.641531b0.js";import"./isNumber.2f44f10c.js";import"./uuid.2b29000c.js";import"./download.4f91264f.js";import"./base64Conver.08b9f4ec.js";import"./index.74ce321d.js";import"./index.09326035.js";import"./index.ad5cd489.js";import"./index.51c956a1.js";import"./useContentViewHeight.ebe53333.js";import"./ArrowLeftOutlined.baf9cf25.js";import"./index.001e40f9.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"\u6807\u9898",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:o,field:t})=>C(h,{value:o[t],onChange:e=>{o[t]=e}})}],k=l({components:{BasicForm:n,CollapseContainer:c,PageWrapper:b},setup(){const{createMessage:o}=_();return{schemas:g,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))}}}});function w(o,t,e,B,F,M){const m=r("BasicForm"),a=r("CollapseContainer"),s=r("PageWrapper");return d(),f(s,{title:"MarkDown\u7EC4\u4EF6\u5D4C\u5165Form\u793A\u4F8B"},{default:p(()=>[i(a,{title:"MarkDown\u8868\u5355"},{default:p(()=>[i(m,{labelWidth:100,schemas:o.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:o.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var Mo=u(k,[["render",w]]);export{Mo as default};