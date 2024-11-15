import{B as b}from"./TableImg.2fbe7091.js";import{k as C}from"./componentMap.854856fa.js";import{u as g}from"./useTable.288b3a1d.js";import{d as T}from"./system.63a53282.js";import{u as w}from"./index.c2f982b8.js";import{M as D,c as _,s as S}from"./MenuDrawer.89e4217d.js";import{aw as k,a as B,ay as t,o as h,h as F,n as p,z as s,B as y,j as M,l as A,am as E}from"./index.0994ffcf.js";import"./index.1b041e8d.js";import"./Checkbox.e8d9cfcc.js";import"./index.955360e8.js";import"./index.e166860d.js";import"./eagerComputed.1f875881.js";import"./BasicForm.8b5cd5a8.js";/* empty css              *//* empty css               */import"./FormItem.vue_vue_type_script_lang.1addcaf5.js";import"./index.31f380d8.js";import"./index.b32d7fc7.js";import"./_baseIteratee.03859d79.js";import"./get.cad0ef5a.js";import"./DeleteOutlined.2279352f.js";import"./index.736d5ebb.js";import"./useRefs.e7dceed1.js";import"./Form.5eb5121e.js";import"./Col.eef5d868.js";import"./useFlexGapSupport.02b519a7.js";import"./useSize.c81b3ed4.js";import"./index.09d33596.js";import"./uniqBy.485a2f6d.js";import"./index.b7f80407.js";import"./useWindowSizeFn.c35b04b1.js";import"./FullscreenOutlined.173f28f0.js";import"./index.ec7b7cf8.js";import"./useForm.a4050b72.js";import"./RadioButtonGroup.00f6150b.js";import"./useFormItem.db811efb.js";import"./index.b05e888f.js";import"./index.ebf97d62.js";import"./index.48b1e399.js";import"./useContentViewHeight.4631c2db.js";import"./ArrowLeftOutlined.f89570a8.js";import"./index.0b08e300.js";import"./transButton.5787cddc.js";import"./index.6575f003.js";import"./index.3b1bbfdc.js";import"./index.06cda3f0.js";import"./index.e13a836d.js";import"./uuid.2b29000c.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.9b723044.js";import"./index.ded85ab8.js";import"./isNumber.0c8ac276.js";import"./fromPairs.2341303e.js";import"./scrollTo.1998fc96.js";import"./index.d1c1b138.js";import"./index.7fc8eebd.js";import"./index.2b0b7b4b.js";import"./index.a5092513.js";import"./download.b3e2826c.js";import"./base64Conver.08b9f4ec.js";import"./index.a9111ac7.js";import"./index.c4b8367f.js";import"./index.63ca91ec.js";const R=B({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:D,TableAction:C},setup(){const[e,{openDrawer:r}]=w(),[c,{reload:l,expandAll:u}]=g({title:"\u83DC\u5355\u5217\u8868",api:T,columns:_,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function d(){r(!0,{isUpdate:!1})}function i(o){r(!0,{record:o,isUpdate:!0})}function n(o){}function a(){l()}function m(){E(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:i,handleDelete:n,handleSuccess:a,onFetchSuccess:m}}});function v(e,r,c,l,u,d){const i=t("a-button"),n=t("TableAction"),a=t("BasicTable"),m=t("MenuDrawer");return h(),F("div",null,[p(a,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:s(()=>[p(i,{type:"primary",onClick:e.handleCreate},{default:s(()=>[y(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),bodyCell:s(({column:o,record:f})=>[o.key==="action"?(h(),M(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),p(m,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var We=k(R,[["render",v]]);export{We as default};
