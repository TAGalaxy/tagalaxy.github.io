import{aw as C,a as _,cE as v,v as y,fz as F,ay as a,o as B,j as g,z as n,n as s,i as h,B as w,k as i,E as b}from"./index.444718ea.js";import{P as k}from"./index.f6511e11.js";import"./index.ad5cd489.js";import"./index.51c956a1.js";import"./useSize.18a619e6.js";import"./eagerComputed.1b925bf8.js";import"./useWindowSizeFn.115518f2.js";import"./useContentViewHeight.ebe53333.js";import"./ArrowLeftOutlined.baf9cf25.js";import"./index.001e40f9.js";import"./transButton.fbee1833.js";const x=_({name:"Copy",components:{CollapseContainer:v,PageWrapper:k},setup(){const e=y(""),{createMessage:o}=b(),{clipboardRef:r,copiedRef:p}=F();function u(){const t=i(e);if(!t){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}r.value=t,i(p)&&o.warning("copy success\uFF01")}return{handleCopy:u,value:e}}}),P={class:"flex justify-center"};function $(e,o,r,p,u,t){const l=a("a-input"),c=a("a-button"),m=a("CollapseContainer"),d=a("PageWrapper");return B(),g(d,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:n(()=>[s(m,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:n(()=>[h("div",P,[s(l,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[0]||(o[0]=f=>e.value=f)},null,8,["value"]),s(c,{type:"primary",onClick:e.handleCopy},{default:n(()=>[w(" Copy ")]),_:1},8,["onClick"])])]),_:1})]),_:1})}var U=C(x,[["render",$]]);export{U as default};