import{D as f}from"./index.3d3f3970.js";import{B as _}from"./TableImg.2fbe7091.js";import"./componentMap.854856fa.js";import{u as l}from"./useTable.288b3a1d.js";import{P as T}from"./index.b05e888f.js";import{aw as h,a as g,ay as r,o as D,j as b,z as B,n as e}from"./index.0994ffcf.js";import{D as c}from"./index.31f380d8.js";import{refundSchema as S,refundData as v,personSchema as y,personData as C,refundTableData as F,refundTableSchema as R,refundTimeTableSchema as w,refundTimeTableData as E}from"./data.361e334f.js";import"./index.a1c58adb.js";import"./get.cad0ef5a.js";import"./index.1b041e8d.js";import"./Checkbox.e8d9cfcc.js";import"./index.955360e8.js";import"./index.e166860d.js";import"./eagerComputed.1f875881.js";import"./BasicForm.8b5cd5a8.js";/* empty css              *//* empty css               */import"./FormItem.vue_vue_type_script_lang.1addcaf5.js";import"./index.b32d7fc7.js";import"./_baseIteratee.03859d79.js";import"./DeleteOutlined.2279352f.js";import"./index.736d5ebb.js";import"./useRefs.e7dceed1.js";import"./Form.5eb5121e.js";import"./Col.eef5d868.js";import"./useFlexGapSupport.02b519a7.js";import"./useSize.c81b3ed4.js";import"./index.09d33596.js";import"./uniqBy.485a2f6d.js";import"./index.b7f80407.js";import"./useWindowSizeFn.c35b04b1.js";import"./FullscreenOutlined.173f28f0.js";import"./index.ec7b7cf8.js";import"./useForm.a4050b72.js";import"./RadioButtonGroup.00f6150b.js";import"./useFormItem.db811efb.js";import"./index.6575f003.js";import"./index.3b1bbfdc.js";import"./index.06cda3f0.js";import"./index.e13a836d.js";import"./uuid.2b29000c.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.9b723044.js";import"./index.ded85ab8.js";import"./isNumber.0c8ac276.js";import"./fromPairs.2341303e.js";import"./scrollTo.1998fc96.js";import"./index.d1c1b138.js";import"./index.7fc8eebd.js";import"./transButton.5787cddc.js";import"./index.2b0b7b4b.js";import"./index.a5092513.js";import"./download.b3e2826c.js";import"./base64Conver.08b9f4ec.js";import"./index.a9111ac7.js";import"./index.c4b8367f.js";import"./index.ebf97d62.js";import"./index.48b1e399.js";import"./useContentViewHeight.4631c2db.js";import"./ArrowLeftOutlined.f89570a8.js";import"./index.0b08e300.js";const P=g({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[t]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:F,columns:R,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:n}),[p]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:w,pagination:!1,dataSource:E,showIndexColumn:!1,scroll:{y:300}});function n(s){let i=0,a=0;return s.forEach(o=>{i+=o.t5,a+=o.t6}),[{t1:"\u603B\u8BA1",t5:i,t6:a}]}return{registerRefundTable:t,registerTimeTable:p,refundSchema:S,refundData:v,personSchema:y,personData:C}}});function $(t,p,n,s,i,a){const o=r("Description"),m=r("a-divider"),u=r("BasicTable"),d=r("PageWrapper");return D(),b(d,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[e(o,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:t.refundData,schema:t.refundSchema},null,8,["data","schema"]),e(m),e(o,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:t.personData,schema:t.personSchema},null,8,["data","schema"]),e(m),e(u,{onRegister:t.registerRefundTable},null,8,["onRegister"]),e(m),e(u,{onRegister:t.registerTimeTable},null,8,["onRegister"])]),_:1})}var Vt=h(P,[["render",$],["__scopeId","data-v-33e8998f"]]);export{Vt as default};
