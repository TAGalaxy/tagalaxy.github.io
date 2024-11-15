import{B as T}from"./TableImg.ad1891f2.js";import{k as S}from"./componentMap.f197190c.js";import{u as w}from"./useTable.58b97e74.js";import{g as B}from"./system.9f3c6195.js";import{P as F}from"./index.f6511e11.js";import D from"./DeptTree.58c74dfa.js";import{b as y}from"./index.aeb68d41.js";import{A,c as k,s as I}from"./AccountModal.a5cd655d.js";import{aw as M,a as E,a$ as R,w as V,ay as t,o as C,j as _,z as r,n,B as $,l as P}from"./index.444718ea.js";import"./index.a26b8d1c.js";import"./Checkbox.5348e20f.js";import"./index.ef810c05.js";import"./index.78169a94.js";import"./eagerComputed.1b925bf8.js";import"./BasicForm.a3ec8b2c.js";/* empty css              *//* empty css               */import"./FormItem.vue_vue_type_script_lang.276aad27.js";import"./index.469411a1.js";import"./index.6087afbc.js";import"./_baseIteratee.06432f6a.js";import"./get.066b7822.js";import"./DeleteOutlined.d08d062e.js";import"./index.8b6de8b6.js";import"./useRefs.d5715d6d.js";import"./Form.a567a65a.js";import"./Col.b3dea441.js";import"./useFlexGapSupport.0f4e02b8.js";import"./useSize.18a619e6.js";import"./index.95579f8d.js";import"./uniqBy.d5c89ac8.js";import"./index.4d69797f.js";import"./useForm.03f24358.js";import"./RadioButtonGroup.2d7e8065.js";import"./useFormItem.c4f2b3ce.js";import"./index.4575bac4.js";import"./index.4fcc5b07.js";import"./index.9deca062.js";import"./index.29cdf7d7.js";import"./uuid.2b29000c.js";import"./useWindowSizeFn.115518f2.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.4fb15b8a.js";import"./FullscreenOutlined.1ce89a14.js";import"./index.641531b0.js";import"./isNumber.2f44f10c.js";import"./fromPairs.2341303e.js";import"./scrollTo.7356b457.js";import"./index.f0ebb16a.js";import"./index.45ccc3f4.js";import"./transButton.fbee1833.js";import"./index.cc93c6bb.js";import"./index.46c0cd49.js";import"./download.4f91264f.js";import"./base64Conver.08b9f4ec.js";import"./index.74ce321d.js";import"./index.09326035.js";import"./index.ad5cd489.js";import"./index.51c956a1.js";import"./useContentViewHeight.ebe53333.js";import"./ArrowLeftOutlined.baf9cf25.js";import"./index.001e40f9.js";import"./index.ce29e793.js";import"./useContextMenu.56bbcff1.js";const W=E({name:"AccountManagement",components:{BasicTable:T,PageWrapper:F,DeptTree:D,AccountModal:A,TableAction:S},setup(){const e=R(),[h,{openModal:i}]=y(),a=V({}),[g,{reload:l,updateTableDataRecord:p}]=w({title:"\u8D26\u53F7\u5217\u8868",api:B,rowKey:"id",columns:k,formConfig:{labelWidth:120,schemas:I,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(o){return o},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function m(){i(!0,{isUpdate:!1})}function c(o){i(!0,{record:o,isUpdate:!0})}function s(o){}function u({isUpdate:o,values:b}){if(o){const v=p(b.id,b)}else l()}function d(o=""){a.deptId=o,l()}function f(o){e("/system/account_detail/"+o.id)}return{registerTable:g,registerModal:h,handleCreate:m,handleEdit:c,handleDelete:s,handleSuccess:u,handleSelect:d,handleView:f,searchInfo:a}}});function N(e,h,i,a,g,l){const p=t("DeptTree"),m=t("a-button"),c=t("TableAction"),s=t("BasicTable"),u=t("AccountModal"),d=t("PageWrapper");return C(),_(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:r(()=>[n(p,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),n(s,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:e.searchInfo},{toolbar:r(()=>[n(m,{type:"primary",onClick:e.handleCreate},{default:r(()=>[$("\u65B0\u589E\u8D26\u53F7")]),_:1},8,["onClick"])]),bodyCell:r(({column:f,record:o})=>[f.key==="action"?(C(),_(c,{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:e.handleView.bind(null,o)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])):P("",!0)]),_:1},8,["onRegister","searchInfo"]),n(u,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Qo=M(W,[["render",N]]);export{Qo as default};