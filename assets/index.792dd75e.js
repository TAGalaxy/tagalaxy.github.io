import{B as h}from"./TableImg.ad1891f2.js";import{k as C}from"./componentMap.f197190c.js";import{u as g}from"./useTable.58b97e74.js";import{a as _}from"./system.9f3c6195.js";import{b as T}from"./index.aeb68d41.js";import{D as B,c as k,s as D}from"./DeptModal.1e78056b.js";import{aw as E,a as M,ay as e,o as d,h as y,n as a,z as m,B as S,j as w,l as R}from"./index.444718ea.js";import"./index.a26b8d1c.js";import"./Checkbox.5348e20f.js";import"./index.ef810c05.js";import"./index.78169a94.js";import"./eagerComputed.1b925bf8.js";import"./BasicForm.a3ec8b2c.js";/* empty css              *//* empty css               */import"./FormItem.vue_vue_type_script_lang.276aad27.js";import"./index.469411a1.js";import"./index.6087afbc.js";import"./_baseIteratee.06432f6a.js";import"./get.066b7822.js";import"./DeleteOutlined.d08d062e.js";import"./index.8b6de8b6.js";import"./useRefs.d5715d6d.js";import"./Form.a567a65a.js";import"./Col.b3dea441.js";import"./useFlexGapSupport.0f4e02b8.js";import"./useSize.18a619e6.js";import"./index.95579f8d.js";import"./uniqBy.d5c89ac8.js";import"./index.4d69797f.js";import"./useForm.03f24358.js";import"./RadioButtonGroup.2d7e8065.js";import"./useFormItem.c4f2b3ce.js";import"./index.f6511e11.js";import"./index.ad5cd489.js";import"./index.51c956a1.js";import"./useWindowSizeFn.115518f2.js";import"./useContentViewHeight.ebe53333.js";import"./ArrowLeftOutlined.baf9cf25.js";import"./index.001e40f9.js";import"./transButton.fbee1833.js";import"./index.4575bac4.js";import"./index.4fcc5b07.js";import"./index.9deca062.js";import"./index.29cdf7d7.js";import"./uuid.2b29000c.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.4fb15b8a.js";import"./FullscreenOutlined.1ce89a14.js";import"./index.641531b0.js";import"./isNumber.2f44f10c.js";import"./fromPairs.2341303e.js";import"./scrollTo.7356b457.js";import"./index.f0ebb16a.js";import"./index.45ccc3f4.js";import"./index.cc93c6bb.js";import"./index.46c0cd49.js";import"./download.4f91264f.js";import"./base64Conver.08b9f4ec.js";import"./index.74ce321d.js";import"./index.09326035.js";const v=M({name:"DeptManagement",components:{BasicTable:h,DeptModal:B,TableAction:C},setup(){const[o,{openModal:r}]=T(),[p,{reload:s}]=g({title:"\u90E8\u95E8\u5217\u8868",api:_,columns:k,formConfig:{labelWidth:120,schemas:D},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function i(t){}function n(){s()}return{registerTable:p,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:i,handleSuccess:n}}});function A(o,r,p,s,l,c){const i=e("a-button"),n=e("TableAction"),t=e("BasicTable"),f=e("DeptModal");return d(),y("div",null,[a(t,{onRegister:o.registerTable},{toolbar:m(()=>[a(i,{type:"primary",onClick:o.handleCreate},{default:m(()=>[S(" \u65B0\u589E\u90E8\u95E8 ")]),_:1},8,["onClick"])]),bodyCell:m(({column:b,record:u})=>[b.key==="action"?(d(),w(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])):R("",!0)]),_:1},8,["onRegister"]),a(f,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var jo=E(v,[["render",A]]);export{jo as default};