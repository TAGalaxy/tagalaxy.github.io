import{k as s,ag as x,v,fA as _,fB as b,M as $,fC as B,aN as R,d3 as C,aw as M,a as I,cE as P,ay as w,o as z,j as E,z as d,n as g,B as W}from"./index.444718ea.js";import{P as N}from"./index.f6511e11.js";import"./index.ad5cd489.js";import"./index.51c956a1.js";import"./useSize.18a619e6.js";import"./eagerComputed.1b925bf8.js";import"./useWindowSizeFn.115518f2.js";import"./useContentViewHeight.ebe53333.js";import"./ArrowLeftOutlined.baf9cf25.js";import"./index.001e40f9.js";import"./transButton.fbee1833.js";const S=Symbol("watermark-dom"),y=new WeakMap;function A(n=v(document.body)){const a=s(n);if(a&&y.has(a))return y.get(a);const l=B(function(){const t=s(n);if(!t)return;const{clientHeight:e,clientWidth:r}=t;u({height:e,width:r})}),c=S.toString(),i=x(),f=()=>{const t=s(i);i.value=void 0;const e=s(n);!e||(t&&e.removeChild(t),_(e,l))};function m(t){const e=document.createElement("canvas"),r=300,h=240;Object.assign(e,{width:r,height:h});const o=e.getContext("2d");return o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,r/20,h)),e.toDataURL("image/png")}function u(t={}){const e=s(i);!e||(C(t.width)&&(e.style.width=`${t.width}px`),C(t.height)&&(e.style.height=`${t.height}px`),C(t.str)&&(e.style.background=`url(${m(t.str)}) left top repeat`))}const k=t=>{if(s(i))return u({str:t}),c;const e=document.createElement("div");i.value=e,e.id=c,e.style.pointerEvents="none",e.style.top="0px",e.style.left="0px",e.style.position="absolute",e.style.zIndex="100000";const r=s(n);if(!r)return c;const{clientHeight:h,clientWidth:o}=r;return u({str:t,width:o,height:h}),r.appendChild(e),y.set(r,{setWatermark:p,clear:f}),c};function p(t){k(t),b(document.documentElement,l),R()&&$(()=>{f()})}return{setWatermark:p,clear:f}}const L=I({components:{CollapseContainer:P,PageWrapper:N},setup(){const n=v(null),{setWatermark:a,clear:l}=A();return{setWatermark:a,clear:l,areaRef:n}}});function T(n,a,l,c,i,f){const m=w("a-button"),u=w("CollapseContainer"),k=w("PageWrapper");return z(),E(k,{title:"\u6C34\u5370\u793A\u4F8B"},{default:d(()=>[g(u,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:d(()=>[g(m,{type:"primary",class:"mr-2",onClick:a[0]||(a[0]=p=>n.setWatermark("WaterMark Info"))},{default:d(()=>[W(" Create ")]),_:1}),g(m,{color:"error",class:"mr-2",onClick:n.clear},{default:d(()=>[W(" Clear ")]),_:1},8,["onClick"]),g(m,{color:"warning",class:"mr-2",onClick:a[1]||(a[1]=p=>n.setWatermark("WaterMark Info New"))},{default:d(()=>[W(" Reset ")]),_:1})]),_:1})]),_:1})}var Q=M(L,[["render",T]]);export{Q as default};