import{aw as f,a as g,cE as C,v as _,bJ as p,ay as n,o as F,j as k,z as o,n as t,B as l,t as w,i as y}from"./index.444718ea.js";import{P as S}from"./index.f6511e11.js";import"./index.ad5cd489.js";import"./index.51c956a1.js";import"./useSize.18a619e6.js";import"./eagerComputed.1b925bf8.js";import"./useWindowSizeFn.115518f2.js";import"./useContentViewHeight.ebe53333.js";import"./ArrowLeftOutlined.baf9cf25.js";import"./index.001e40f9.js";import"./transButton.fbee1833.js";const b=g({components:{CollapseContainer:C,PageWrapper:S},setup(){const e=_(null),{enter:s,toggle:a,exit:i,isFullscreen:c}=p(),{toggle:m}=p(e);return{enter:s,toggleDom:m,toggle:a,isFullscreen:c,exit:i,domRef:e}}}),h={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"};function D(e,s,a,i,c,m){const r=n("a-button"),u=n("CollapseContainer"),d=n("PageWrapper");return F(),k(d,{title:"\u5168\u5C4F\u793A\u4F8B"},{default:o(()=>[t(u,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:o(()=>[t(r,{type:"primary",disabled:e.isFullscreen,onClick:e.enter,class:"mr-2"},{default:o(()=>[l(" Enter Window Full Screen ")]),_:1},8,["disabled","onClick"]),t(r,{color:"success",onClick:e.toggle,class:"mr-2"},{default:o(()=>[l(" Toggle Window Full Screen ")]),_:1},8,["onClick"]),t(r,{color:"error",onClick:e.exit,class:"mr-2"},{default:o(()=>[l(" Exit Window Full Screen ")]),_:1},8,["onClick"]),l(" Current State: "+w(e.isFullscreen),1)]),_:1}),t(u,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:o(()=>[t(r,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[l(" Enter Dom Full Screen ")]),_:1},8,["onClick"])]),_:1}),y("div",h,[t(r,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[l(" Exit Dom Full Screen ")]),_:1},8,["onClick"])],512)]),_:1})}var T=f(b,[["render",D]]);export{T as default};
