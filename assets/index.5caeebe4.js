import{_ as h}from"./index.ce29e793.js";import{t as C}from"./data.ec134722.js";import{P as k}from"./index.f6511e11.js";import{aw as B,a as E,b3 as A,v as s,ay as u,o as v,j as K,z as a,n as e,B as D,ai as F,am as R,k as T,c_ as $,bc as L}from"./index.444718ea.js";import{C as b}from"./index.51116ab2.js";import"./index.3a8eb39f.js";/* empty css               */import{R as w}from"./index.4d69797f.js";import{C as P}from"./index.95579f8d.js";import"./fromPairs.2341303e.js";import"./index.78169a94.js";import"./eagerComputed.1b925bf8.js";import"./useContextMenu.56bbcff1.js";import"./index.469411a1.js";import"./get.066b7822.js";import"./index.ad5cd489.js";import"./index.51c956a1.js";import"./useSize.18a619e6.js";import"./useWindowSizeFn.115518f2.js";import"./useContentViewHeight.ebe53333.js";import"./ArrowLeftOutlined.baf9cf25.js";import"./index.001e40f9.js";import"./transButton.fbee1833.js";import"./index.d4974f99.js";import"./useRefs.d5715d6d.js";import"./PlusOutlined.18573977.js";import"./Col.b3dea441.js";import"./useFlexGapSupport.0f4e02b8.js";const x=E({components:{BasicTree:h,PageWrapper:k,Card:b,Row:w,Col:P,Spin:A},setup(){const t=s(null),m=s(null),_=s(null),d=s([]),l=s(!1);function y(n,p){}function o(){l.value=!0,setTimeout(()=>{d.value=F(C),l.value=!1,R(()=>{var n;(n=T(m))==null||n.expandAll(!0)})},2e3)}function r(){l.value=!0,setTimeout(()=>{d.value=F(C),l.value=!1},2e3)}const c=s([{title:"parent ",key:"0-0"}]);function f(n){return new Promise(p=>{if($(n.children)&&n.children.length>0){p();return}setTimeout(()=>{const i=T(t);if(i){const g=[{title:`Child Node ${n.eventKey}-0`,key:`${n.eventKey}-0`},{title:`Child Node ${n.eventKey}-1`,key:`${n.eventKey}-1`}];i.updateNodeByKey(n.eventKey,{children:g}),i.setExpandedKeys(L([n.eventKey,...i.getExpandedKeys()]))}p()},300)})}return{treeData:C,handleCheck:y,tree:c,onLoadData:f,asyncTreeRef:t,asyncExpandTreeRef:m,loadTreeRef:_,tree2:d,loadTreeData:o,treeLoading:l,loadTreeData2:r}}});function S(t,m,_,d,l,y){const o=u("BasicTree"),r=u("Col"),c=u("a-button"),f=u("Spin"),n=u("Card"),p=u("Row"),i=u("PageWrapper");return v(),K(i,{title:"Tree\u57FA\u7840\u793A\u4F8B"},{default:a(()=>[e(p,{gutter:[16,16]},{default:a(()=>[e(r,{span:8},{default:a(()=>[e(o,{title:"\u57FA\u7840\u793A\u4F8B\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B2C\u4E00\u5C42",treeData:t.treeData,defaultExpandLevel:"1"},{title:a(()=>[D(" 123123 ")]),_:1},8,["treeData"])]),_:1}),e(r,{span:8},{default:a(()=>[e(o,{title:"\u53EF\u52FE\u9009\uFF0C\u9ED8\u8BA4\u5168\u90E8\u5C55\u5F00",treeData:t.treeData,checkable:!0,defaultExpandAll:"",onCheck:t.handleCheck},null,8,["treeData","onCheck"])]),_:1}),e(r,{span:8},{default:a(()=>[e(o,{title:"\u6307\u5B9A\u9ED8\u8BA4\u5C55\u5F00/\u52FE\u9009\u793A\u4F8B",treeData:t.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])]),_:1}),e(r,{span:8},{default:a(()=>[e(o,{title:"\u61D2\u52A0\u8F7D\u5F02\u6B65\u6811",ref:"asyncTreeRef",treeData:t.tree,"load-data":t.onLoadData},null,8,["treeData","load-data"])]),_:1}),e(r,{span:8},{default:a(()=>[e(n,{title:"\u5F02\u6B65\u6570\u636E\uFF0C\u9ED8\u8BA4\u5C55\u5F00"},{extra:a(()=>[e(c,{onClick:t.loadTreeData,loading:t.treeLoading},{default:a(()=>[D("\u52A0\u8F7D\u6570\u636E")]),_:1},8,["onClick","loading"])]),default:a(()=>[e(f,{spinning:t.treeLoading},{default:a(()=>[e(o,{ref:"asyncExpandTreeRef",treeData:t.tree2},null,8,["treeData"])]),_:1},8,["spinning"])]),_:1})]),_:1}),e(r,{span:8},{default:a(()=>[e(n,{title:"BasicTree\u5185\u7F6E\u52A0\u8F7D"},{extra:a(()=>[e(c,{onClick:t.loadTreeData2,loading:t.treeLoading},{default:a(()=>[D("\u8BF7\u6C42\u6570\u636E")]),_:1},8,["onClick","loading"])]),default:a(()=>[e(o,{ref:"loadTreeRef",treeData:t.tree2,loading:t.treeLoading},null,8,["treeData","loading"])]),_:1})]),_:1})]),_:1})]),_:1})}var de=B(x,[["render",S]]);export{de as default};