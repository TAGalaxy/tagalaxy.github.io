import{aw as $,a as w,b8 as P,ay as a,o as l,j as u,z as e,q as r,i as o,n as i,h as d,aB as y,F as A,l as m,t as c,B as f,fo as k,fp as L}from"./index.444718ea.js";import{P as S}from"./index.8b6de8b6.js";/* empty css               */import{cardList as N}from"./data.04444808.js";import{P as V}from"./index.f6511e11.js";import{L as p}from"./index.876a4075.js";import{R as v}from"./index.4d69797f.js";import{C as h}from"./index.95579f8d.js";import"./useRefs.d5715d6d.js";import"./index.ad5cd489.js";import"./index.51c956a1.js";import"./useSize.18a619e6.js";import"./eagerComputed.1b925bf8.js";import"./useWindowSizeFn.115518f2.js";import"./useContentViewHeight.ebe53333.js";import"./ArrowLeftOutlined.baf9cf25.js";import"./index.001e40f9.js";import"./transButton.fbee1833.js";import"./Col.b3dea441.js";import"./useFlexGapSupport.0f4e02b8.js";const z=w({components:{Icon:P,Progress:S,PageWrapper:V,[p.name]:p,[p.Item.name]:p.Item,AListItemMeta:p.Item.Meta,[v.name]:v,[h.name]:h},setup(){return{prefixCls:"list-basic",list:N,pagination:{show:!0,pageSize:3}}}}),n=t=>(k("data-v-091ccf36"),t=t(),L(),t),W=n(()=>o("div",null,"\u6211\u7684\u5F85\u529E",-1)),b=n(()=>o("p",null,"8\u4E2A\u4EFB\u52A1",-1)),M=n(()=>o("div",null,"\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4",-1)),R=n(()=>o("p",null,"32\u5206\u949F",-1)),j=n(()=>o("div",null,"\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570",-1)),q=n(()=>o("p",null,"24\u4E2A\u4EFB\u52A1",-1)),D={key:0,class:"extra"},O={class:"description"},T={class:"info"},G=n(()=>o("span",null,"Owner",-1)),H=n(()=>o("span",null,"\u5F00\u59CB\u65F6\u95F4",-1)),J={class:"progress"};function K(t,Q,U,X,Y,Z){const _=a("a-col"),C=a("a-row"),g=a("Icon"),F=a("Progress"),B=a("a-list-item-meta"),I=a("a-list-item"),x=a("a-list"),E=a("PageWrapper");return l(),u(E,{class:r(t.prefixCls),title:"\u6807\u51C6\u5217\u8868"},{default:e(()=>[o("div",{class:r(`${t.prefixCls}__top`)},[i(C,{gutter:12},{default:e(()=>[i(_,{span:8,class:r(`${t.prefixCls}__top-col`)},{default:e(()=>[W,b]),_:1},8,["class"]),i(_,{span:8,class:r(`${t.prefixCls}__top-col`)},{default:e(()=>[M,R]),_:1},8,["class"]),i(_,{span:8,class:r(`${t.prefixCls}__top-col`)},{default:e(()=>[j,q]),_:1},8,["class"])]),_:1})],2),o("div",{class:r(`${t.prefixCls}__content`)},[i(x,{pagination:t.pagination},{default:e(()=>[(l(!0),d(A,null,y(t.list,s=>(l(),u(I,{key:s.id,class:"list"},{default:e(()=>[i(B,null,{avatar:e(()=>[s.icon?(l(),u(g,{key:0,class:"icon",icon:s.icon,color:s.color},null,8,["icon","color"])):m("",!0)]),title:e(()=>[o("span",null,c(s.title),1),s.extra?(l(),d("div",D,c(s.extra),1)):m("",!0)]),description:e(()=>[o("div",O,c(s.description),1),o("div",T,[o("div",null,[G,f(c(s.author),1)]),o("div",null,[H,f(c(s.datetime),1)])]),o("div",J,[i(F,{percent:s.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])}var Bo=$(z,[["render",K],["__scopeId","data-v-091ccf36"]]);export{Bo as default};