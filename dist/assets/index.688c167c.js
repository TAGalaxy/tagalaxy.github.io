var k=(h,s,t)=>new Promise((e,n)=>{var f=r=>{try{i(t.next(r))}catch(a){n(a)}},d=r=>{try{i(t.throw(r))}catch(a){n(a)}},i=r=>r.done?e(r.value):Promise.resolve(r.value).then(f,d);i((t=t.apply(h,s)).next())});import{dF as x,a as D,v as C,c as T,fD as B,a8 as A,am as R,ai as V,ay as I,o as u,h as _,F as S,aB as j,x as F,y as M,n as m,k as o,z as p,B as y,t as b,j as N,l as $}from"./index.444718ea.js";import z from"./DetailModal.de8db155.js";import{B as H}from"./TableImg.ad1891f2.js";import{k as q}from"./componentMap.f197190c.js";import{u as G}from"./useTable.58b97e74.js";import{b as J}from"./index.aeb68d41.js";import{getColumns as K}from"./data.46cf1e19.js";import"./index.607b7e7d.js";import"./index.9875baa7.js";import"./get.066b7822.js";import"./useDescription.62074938.js";import"./index.a26b8d1c.js";import"./Checkbox.5348e20f.js";import"./index.ef810c05.js";import"./index.78169a94.js";import"./eagerComputed.1b925bf8.js";import"./BasicForm.a3ec8b2c.js";/* empty css              *//* empty css               */import"./FormItem.vue_vue_type_script_lang.276aad27.js";import"./index.469411a1.js";import"./index.6087afbc.js";import"./_baseIteratee.06432f6a.js";import"./DeleteOutlined.d08d062e.js";import"./index.8b6de8b6.js";import"./useRefs.d5715d6d.js";import"./Form.a567a65a.js";import"./Col.b3dea441.js";import"./useFlexGapSupport.0f4e02b8.js";import"./useSize.18a619e6.js";import"./index.95579f8d.js";import"./uniqBy.d5c89ac8.js";import"./index.4d69797f.js";import"./useForm.03f24358.js";import"./RadioButtonGroup.2d7e8065.js";import"./useFormItem.c4f2b3ce.js";import"./index.f6511e11.js";import"./index.ad5cd489.js";import"./index.51c956a1.js";import"./useWindowSizeFn.115518f2.js";import"./useContentViewHeight.ebe53333.js";import"./ArrowLeftOutlined.baf9cf25.js";import"./index.001e40f9.js";import"./transButton.fbee1833.js";import"./index.4575bac4.js";import"./index.4fcc5b07.js";import"./index.9deca062.js";import"./index.29cdf7d7.js";import"./uuid.2b29000c.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.4fb15b8a.js";import"./FullscreenOutlined.1ce89a14.js";import"./index.641531b0.js";import"./isNumber.2f44f10c.js";import"./fromPairs.2341303e.js";import"./scrollTo.7356b457.js";import"./index.f0ebb16a.js";import"./index.45ccc3f4.js";import"./index.cc93c6bb.js";import"./index.46c0cd49.js";import"./download.4f91264f.js";import"./base64Conver.08b9f4ec.js";import"./index.74ce321d.js";import"./index.09326035.js";const O=()=>x.get({url:"/error"}),P={class:"p-4"},Q=["src"],po=D({__name:"index",setup(h){const s=C(),t=C([]),{t:e}=T(),n=B(),[f,{setTableData:d}]=G({title:e("sys.errorLog.tableTitle"),columns:K(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[i,{openModal:r}]=J();A(()=>n.getErrorLogInfoList,l=>{R(()=>{d(V(l))})},{immediate:!0});function a(l){s.value=l,r(!0)}function E(){throw new Error("fire vue error!")}function L(){t.value.push(`${new Date().getTime()}.png`)}function v(){return k(this,null,function*(){yield O()})}return(l,U)=>{const g=I("a-button");return u(),_("div",P,[(u(!0),_(S,null,j(t.value,c=>F((u(),_("img",{key:c,src:c,alt:""},null,8,Q)),[[M,!1]])),128)),m(z,{info:s.value,onRegister:o(i)},null,8,["info","onRegister"]),m(o(H),{onRegister:o(f),class:"error-handle-table"},{toolbar:p(()=>[m(g,{onClick:E,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),m(g,{onClick:L,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),m(g,{onClick:v,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:p(({column:c,record:w})=>[c.key==="action"?(u(),N(o(q),{key:0,actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,w)}]},null,8,["actions"])):$("",!0)]),_:1},8,["onRegister"])])}}});export{po as default};