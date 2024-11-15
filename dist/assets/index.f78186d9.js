import{aw as _,a as w,ag as R,v as C,ay as a,o as y,j as k,z as r,n as u,B as n,aI as $,am as T}from"./index.0994ffcf.js";import{A as V}from"./index.a5092513.js";import{S as P}from"./index.2b0b7b4b.js";import{b as d}from"./index.b7f80407.js";import D from"./Modal1.ebddfc5e.js";import v from"./Modal2.4f34edd1.js";import b from"./Modal3.1fd17e6b.js";import B from"./Modal4.9ef1fd66.js";import{P as I}from"./index.b05e888f.js";import"./useFlexGapSupport.02b519a7.js";import"./useWindowSizeFn.c35b04b1.js";import"./FullscreenOutlined.173f28f0.js";import"./BasicForm.8b5cd5a8.js";/* empty css              *//* empty css               */import"./FormItem.vue_vue_type_script_lang.1addcaf5.js";import"./index.31f380d8.js";import"./componentMap.854856fa.js";import"./index.1b041e8d.js";import"./Checkbox.e8d9cfcc.js";import"./index.955360e8.js";import"./index.e13a836d.js";import"./index.06cda3f0.js";import"./index.6575f003.js";import"./index.3b1bbfdc.js";import"./index.7fc8eebd.js";import"./useFormItem.db811efb.js";import"./RadioButtonGroup.00f6150b.js";import"./get.cad0ef5a.js";import"./index.e166860d.js";import"./eagerComputed.1f875881.js";import"./index.b32d7fc7.js";import"./_baseIteratee.03859d79.js";import"./DeleteOutlined.2279352f.js";import"./index.736d5ebb.js";import"./useRefs.e7dceed1.js";import"./Form.5eb5121e.js";import"./Col.eef5d868.js";import"./useSize.c81b3ed4.js";import"./transButton.5787cddc.js";import"./index.ded85ab8.js";import"./isNumber.0c8ac276.js";import"./uuid.2b29000c.js";import"./download.b3e2826c.js";import"./base64Conver.08b9f4ec.js";import"./index.a9111ac7.js";import"./index.c4b8367f.js";import"./index.09d33596.js";import"./uniqBy.485a2f6d.js";import"./index.ec7b7cf8.js";import"./useForm.a4050b72.js";import"./index.ebf97d62.js";import"./index.48b1e399.js";import"./useContentViewHeight.4631c2db.js";import"./ArrowLeftOutlined.f89570a8.js";import"./index.0b08e300.js";const S=w({components:{Alert:V,Modal1:D,Modal2:v,Modal3:b,Modal4:B,PageWrapper:I,ASpace:P},setup(){const o=R(null),[e,{openModal:F}]=d(),[f,{openModal:g}]=d(),[M,{openModal:i}]=d(),[t,{openModal:s}]=d(),l=C(!1),m=C(null);function A(){s(!0,{data:"content",info:"Info"})}function c(){F(!0)}function E(p){switch(p){case 1:o.value=D;break;case 2:o.value=v;break;case 3:o.value=b;break;default:o.value=B;break}T(()=>{m.value={data:Math.random(),info:"Info222"},l.value=!0})}return{register1:e,openModal1:F,register2:f,openModal2:g,register3:M,openModal3:i,register4:t,openModal4:s,modalVisible:l,userData:m,openTargetModal:E,send:A,currentModal:o,openModalLoading:c}}});function W(o,e,F,f,g,M){const i=a("Alert"),t=a("a-button"),s=a("a-space"),l=a("Modal1"),m=a("Modal2"),A=a("Modal3"),c=a("Modal4"),E=a("PageWrapper");return y(),k(E,{title:"modal\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:r(()=>[u(i,{message:`\u4F7F\u7528 useModal \u8FDB\u884C\u5F39\u7A97\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7 draggable
    \u53C2\u6570\u8FDB\u884C\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F\uFF0C\u5E76\u6F14\u793A\u4E86\u5728Modal\u5185\u52A8\u6001\u52A0\u8F7D\u5185\u5BB9\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6`,"show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97,\u52A0\u8F7D\u52A8\u6001\u6570\u636E\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6(\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F) ")]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u540C\u65F6\u540C\u65F6\u663E\u793A\u9690\u85CF","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal2},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97 ")]),_:1},8,["onClick"]),u(i,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal3},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97 ")]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.send},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97\u5E76\u4F20\u9012\u6570\u636E ")]),_:1},8,["onClick"]),u(i,{message:"\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6\u7684\u65B9\u5F0F\u5728\u9875\u9762\u5185\u4F7F\u7528\u591A\u4E2A\u5F39\u7A97","show-icon":""}),u(s,null,{default:r(()=>[u(t,{type:"primary",class:"my-4",onClick:e[0]||(e[0]=p=>o.openTargetModal(1))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A971 ")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[1]||(e[1]=p=>o.openTargetModal(2))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A972 ")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[2]||(e[2]=p=>o.openTargetModal(3))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A973 ")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[3]||(e[3]=p=>o.openTargetModal(4))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A974 ")]),_:1})]),_:1}),(y(),k($(o.currentModal),{visible:o.modalVisible,"onUpdate:visible":e[4]||(e[4]=p=>o.modalVisible=p),userData:o.userData},null,40,["visible","userData"])),u(l,{onRegister:o.register1,minHeight:100},null,8,["onRegister"]),u(m,{onRegister:o.register2},null,8,["onRegister"]),u(A,{onRegister:o.register3},null,8,["onRegister"]),u(c,{onRegister:o.register4},null,8,["onRegister"])]),_:1})}var jo=_(S,[["render",W]]);export{jo as default};