import{aw as k,a as w,cE as x,b8 as D,s as S,f as F,ay as r,o as t,h as l,n as o,z as s,q as n,i as p,F as c,aB as u,B as b,t as m,j as _,aI as P,fo as V,fp as L}from"./index.444718ea.js";import{T as N}from"./index.9deca062.js";import{T as h}from"./index.3a8eb39f.js";/* empty css               */import j from"./Article.38fd14ad.js";import z from"./Application.41d92e1c.js";import A from"./Project.79e9ac8c.js";import{h as R}from"./header.d801b988.js";import{tags as U,teams as q,details as G,achieveList as H}from"./data.3087e932.js";import{R as T}from"./index.4d69797f.js";import{C as $}from"./index.95579f8d.js";import"./useRefs.d5715d6d.js";import"./PlusOutlined.18573977.js";import"./index.876a4075.js";import"./Col.b3dea441.js";import"./useFlexGapSupport.0f4e02b8.js";import"./eagerComputed.1b925bf8.js";import"./index.51116ab2.js";import"./index.d4974f99.js";const J=w({components:{CollapseContainer:x,Icon:D,Tag:N,Tabs:h,TabPane:h.TabPane,Article:j,Application:z,Project:A,[T.name]:T,[$.name]:$},setup(){const e=S(),f=F(()=>e.getUserInfo.avatar||R);return{prefixCls:"account-center",avatar:f,tags:U,teams:q,details:G,achieveList:H}}}),g=e=>(V("data-v-5384e32e"),e=e(),L(),e),K=["src"],M=g(()=>p("span",null,"Vben",-1)),O=g(()=>p("div",null,"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",-1));function Q(e,f,W,X,Y,Z){const i=r("a-col"),d=r("Icon"),C=r("a-row"),y=r("Tag"),v=r("CollapseContainer"),B=r("TabPane"),I=r("Tabs");return t(),l("div",{class:n(e.prefixCls)},[o(C,{class:n(`${e.prefixCls}-top`)},{default:s(()=>[o(i,{span:9,class:n(`${e.prefixCls}-col`)},{default:s(()=>[o(C,null,{default:s(()=>[o(i,{span:8},{default:s(()=>[p("div",{class:n(`${e.prefixCls}-top__avatar`)},[p("img",{width:"70",src:e.avatar},null,8,K),M,O],2)]),_:1}),o(i,{span:16},{default:s(()=>[p("div",{class:n(`${e.prefixCls}-top__detail`)},[(t(!0),l(c,null,u(e.details,a=>(t(),l("p",{key:a.title},[o(d,{icon:a.icon},null,8,["icon"]),b(" "+m(a.title),1)]))),128))],2)]),_:1})]),_:1})]),_:1},8,["class"]),o(i,{span:7,class:n(`${e.prefixCls}-col`)},{default:s(()=>[o(v,{title:"\u6807\u7B7E",canExpan:!1},{default:s(()=>[(t(!0),l(c,null,u(e.tags,a=>(t(),_(y,{key:a,class:"mb-2"},{default:s(()=>[b(m(a),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"]),o(i,{span:8,class:n(`${e.prefixCls}-col`)},{default:s(()=>[o(v,{class:n(`${e.prefixCls}-top__team`),title:"\u56E2\u961F",canExpan:!1},{default:s(()=>[(t(!0),l(c,null,u(e.teams,(a,E)=>(t(),l("div",{key:E,class:n(`${e.prefixCls}-top__team-item`)},[o(d,{icon:a.icon,color:a.color},null,8,["icon","color"]),p("span",null,m(a.title),1)],2))),128))]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]),p("div",{class:n(`${e.prefixCls}-bottom`)},[o(I,null,{default:s(()=>[(t(!0),l(c,null,u(e.achieveList,a=>(t(),_(B,{key:a.key,tab:a.name},{default:s(()=>[(t(),_(P(a.component)))]),_:2},1032,["tab"]))),128))]),_:1})],2)],2)}var he=k(J,[["render",Q],["__scopeId","data-v-5384e32e"]]);export{he as default};
