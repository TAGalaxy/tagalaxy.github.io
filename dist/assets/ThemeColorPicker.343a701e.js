import{aw as m,a as l,e1 as c,b as d,ay as u,o as r,h as o,F as C,aB as _,q as a,bo as f,n as k}from"./index.0994ffcf.js";import{b as h}from"./index.32b52c8f.js";import"./index.c2f982b8.js";import"./index.63ca91ec.js";import"./ArrowLeftOutlined.f89570a8.js";import"./index.31f380d8.js";import"./index.601269dc.js";import"./FullscreenOutlined.173f28f0.js";import"./index.110f2069.js";import"./useWindowSizeFn.c35b04b1.js";import"./useContentViewHeight.4631c2db.js";import"./uniqBy.485a2f6d.js";import"./_baseIteratee.03859d79.js";import"./get.cad0ef5a.js";import"./index.9d02c075.js";import"./useRefs.e7dceed1.js";import"./PlusOutlined.e4fdfb9f.js";import"./RedoOutlined.9b723044.js";import"./index.a6a60c1a.js";import"./lock.fff9fa47.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&h(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function $(e,i,n,s,b,g){const p=u("CheckOutlined");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(C,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:B=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(p)],14,y))),128))],2)}var K=m(v,[["render",$]]);export{K as default};