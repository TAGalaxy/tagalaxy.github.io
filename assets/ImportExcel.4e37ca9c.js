import{I as B}from"./index.cf16722d.js";import{B as S}from"./TableImg.2fbe7091.js";import"./componentMap.854856fa.js";import{P as h}from"./index.b05e888f.js";import{aw as E,a as D,v as F,ay as e,o as i,j as d,z as a,n as f,B as I,h as b,F as g,aB as v}from"./index.0994ffcf.js";import"./index.b7f80407.js";import"./useWindowSizeFn.c35b04b1.js";import"./FullscreenOutlined.173f28f0.js";import"./BasicForm.8b5cd5a8.js";/* empty css              *//* empty css               */import"./FormItem.vue_vue_type_script_lang.1addcaf5.js";import"./index.31f380d8.js";import"./index.b32d7fc7.js";import"./_baseIteratee.03859d79.js";import"./get.cad0ef5a.js";import"./DeleteOutlined.2279352f.js";import"./index.736d5ebb.js";import"./useRefs.e7dceed1.js";import"./Form.5eb5121e.js";import"./Col.eef5d868.js";import"./useFlexGapSupport.02b519a7.js";import"./useSize.c81b3ed4.js";import"./index.09d33596.js";import"./uniqBy.485a2f6d.js";import"./index.ec7b7cf8.js";import"./useForm.a4050b72.js";import"./RadioButtonGroup.00f6150b.js";import"./index.1b041e8d.js";import"./Checkbox.e8d9cfcc.js";import"./useFormItem.db811efb.js";import"./index.955360e8.js";import"./index.e166860d.js";import"./eagerComputed.1f875881.js";import"./index.6575f003.js";import"./index.3b1bbfdc.js";import"./index.06cda3f0.js";import"./index.e13a836d.js";import"./uuid.2b29000c.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.9b723044.js";import"./index.ded85ab8.js";import"./isNumber.0c8ac276.js";import"./fromPairs.2341303e.js";import"./scrollTo.1998fc96.js";import"./index.d1c1b138.js";import"./index.7fc8eebd.js";import"./transButton.5787cddc.js";import"./index.2b0b7b4b.js";import"./index.a5092513.js";import"./download.b3e2826c.js";import"./base64Conver.08b9f4ec.js";import"./index.a9111ac7.js";import"./index.c4b8367f.js";import"./index.ebf97d62.js";import"./index.48b1e399.js";import"./useContentViewHeight.4631c2db.js";import"./ArrowLeftOutlined.f89570a8.js";import"./index.0b08e300.js";const C=D({components:{BasicTable:S,ImpExcel:B,PageWrapper:h},setup(){const t=F([]);function s(c){t.value=[];for(const n of c){const{header:l,results:u,meta:{sheetName:p}}=n,o=[];for(const r of l)o.push({title:r,dataIndex:r});t.value.push({title:p,dataSource:u,columns:o})}}return{loadDataSuccess:s,tableListRef:t}}});function k(t,s,c,n,l,u){const p=e("a-button"),o=e("ImpExcel"),r=e("BasicTable"),_=e("PageWrapper");return i(),d(_,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:a(()=>[f(o,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:a(()=>[f(p,{class:"m-3"},{default:a(()=>[I(" \u5BFC\u5165Excel ")]),_:1})]),_:1},8,["onSuccess"]),(i(!0),b(g,null,v(t.tableListRef,(m,x)=>(i(),d(r,{key:x,title:m.title,columns:m.columns,dataSource:m.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var Nt=E(C,[["render",k]]);export{Nt as default};