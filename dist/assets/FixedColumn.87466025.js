import{B as l}from"./TableImg.2fbe7091.js";import{k as d}from"./componentMap.854856fa.js";import{u as s}from"./useTable.288b3a1d.js";import{d as c}from"./table.53b0e671.js";import{aw as F,a as b,ay as m,o as n,h as f,n as h,z as B,j as A,l as C}from"./index.0994ffcf.js";import"./index.1b041e8d.js";import"./Checkbox.e8d9cfcc.js";import"./index.955360e8.js";import"./index.e166860d.js";import"./eagerComputed.1f875881.js";import"./BasicForm.8b5cd5a8.js";/* empty css              *//* empty css               */import"./FormItem.vue_vue_type_script_lang.1addcaf5.js";import"./index.31f380d8.js";import"./index.b32d7fc7.js";import"./_baseIteratee.03859d79.js";import"./get.cad0ef5a.js";import"./DeleteOutlined.2279352f.js";import"./index.736d5ebb.js";import"./useRefs.e7dceed1.js";import"./Form.5eb5121e.js";import"./Col.eef5d868.js";import"./useFlexGapSupport.02b519a7.js";import"./useSize.c81b3ed4.js";import"./index.09d33596.js";import"./uniqBy.485a2f6d.js";import"./index.b7f80407.js";import"./useWindowSizeFn.c35b04b1.js";import"./FullscreenOutlined.173f28f0.js";import"./index.ec7b7cf8.js";import"./useForm.a4050b72.js";import"./RadioButtonGroup.00f6150b.js";import"./useFormItem.db811efb.js";import"./index.b05e888f.js";import"./index.ebf97d62.js";import"./index.48b1e399.js";import"./useContentViewHeight.4631c2db.js";import"./ArrowLeftOutlined.f89570a8.js";import"./index.0b08e300.js";import"./transButton.5787cddc.js";import"./index.6575f003.js";import"./index.3b1bbfdc.js";import"./index.06cda3f0.js";import"./index.e13a836d.js";import"./uuid.2b29000c.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.9b723044.js";import"./index.ded85ab8.js";import"./isNumber.0c8ac276.js";import"./fromPairs.2341303e.js";import"./scrollTo.1998fc96.js";import"./index.d1c1b138.js";import"./index.7fc8eebd.js";import"./index.2b0b7b4b.js";import"./index.a5092513.js";import"./download.b3e2826c.js";import"./base64Conver.08b9f4ec.js";import"./index.a9111ac7.js";import"./index.c4b8367f.js";const T=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],_=b({components:{BasicTable:l,TableAction:d},setup(){const[t]=s({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:T,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function o(e){}function i(e){}return{registerTable:t,handleDelete:o,handleOpen:i}}}),w={class:"p-4"};function x(t,o,i,e,D,I){const p=m("TableAction"),a=m("BasicTable");return n(),f("div",w,[h(a,{onRegister:t.registerTable},{bodyCell:B(({column:u,record:r})=>[u.key==="action"?(n(),A(p,{key:0,actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,r)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,r)}}]},null,8,["actions","dropDownActions"])):C("",!0)]),_:1},8,["onRegister"])])}var Nt=F(_,[["render",x]]);export{Nt as default};