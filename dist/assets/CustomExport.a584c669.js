import{B as d}from"./TableImg.2fbe7091.js";import"./componentMap.854856fa.js";import{E as f}from"./index.cf16722d.js";import{c as _,d as n,j as E}from"./data.81a60f3c.js";import{b as B}from"./index.b7f80407.js";import{P as C}from"./index.b05e888f.js";import{aw as F,a as x,ay as t,o as b,j as g,z as r,n as p,B as M}from"./index.0994ffcf.js";import"./index.1b041e8d.js";import"./Checkbox.e8d9cfcc.js";import"./index.955360e8.js";import"./index.e166860d.js";import"./eagerComputed.1f875881.js";import"./BasicForm.8b5cd5a8.js";/* empty css              *//* empty css               */import"./FormItem.vue_vue_type_script_lang.1addcaf5.js";import"./index.31f380d8.js";import"./index.b32d7fc7.js";import"./_baseIteratee.03859d79.js";import"./get.cad0ef5a.js";import"./DeleteOutlined.2279352f.js";import"./index.736d5ebb.js";import"./useRefs.e7dceed1.js";import"./Form.5eb5121e.js";import"./Col.eef5d868.js";import"./useFlexGapSupport.02b519a7.js";import"./useSize.c81b3ed4.js";import"./index.09d33596.js";import"./uniqBy.485a2f6d.js";import"./index.ec7b7cf8.js";import"./useForm.a4050b72.js";import"./RadioButtonGroup.00f6150b.js";import"./useFormItem.db811efb.js";import"./index.6575f003.js";import"./index.3b1bbfdc.js";import"./index.06cda3f0.js";import"./index.e13a836d.js";import"./uuid.2b29000c.js";import"./useWindowSizeFn.c35b04b1.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.9b723044.js";import"./FullscreenOutlined.173f28f0.js";import"./index.ded85ab8.js";import"./isNumber.0c8ac276.js";import"./fromPairs.2341303e.js";import"./scrollTo.1998fc96.js";import"./index.d1c1b138.js";import"./index.7fc8eebd.js";import"./transButton.5787cddc.js";import"./index.2b0b7b4b.js";import"./index.a5092513.js";import"./download.b3e2826c.js";import"./base64Conver.08b9f4ec.js";import"./index.a9111ac7.js";import"./index.c4b8367f.js";import"./index.ebf97d62.js";import"./index.48b1e399.js";import"./useContentViewHeight.4631c2db.js";import"./ArrowLeftOutlined.f89570a8.js";import"./index.0b08e300.js";const A=x({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:C},setup(){function o({filename:e,bookType:a}){E({data:n,filename:e,write2excelOpts:{bookType:a}})}const[m,{openModal:i}]=B();return{defaultHeader:o,columns:_,data:n,register:m,openModal:i}}});function S(o,m,i,e,a,T){const s=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return b(),g(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(s,{onClick:o.openModal},{default:r(()=>[M(" \u5BFC\u51FA ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var vo=F(A,[["render",S]]);export{vo as default};