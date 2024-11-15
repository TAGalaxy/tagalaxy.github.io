import{B as E}from"./TableImg.ad1891f2.js";import"./componentMap.f197190c.js";import{getBasicColumns as p,getBasicShortColumns as R}from"./tableData.f817ef35.js";import{aw as T,a as w,v as D,ay as f,o as _,h as S,i as g,n as e,z as u,B as i,E as h,k as y}from"./index.444718ea.js";import{d as L}from"./table.aec57955.js";import"./index.a26b8d1c.js";import"./Checkbox.5348e20f.js";import"./index.ef810c05.js";import"./index.78169a94.js";import"./eagerComputed.1b925bf8.js";import"./BasicForm.a3ec8b2c.js";/* empty css              *//* empty css               */import"./FormItem.vue_vue_type_script_lang.276aad27.js";import"./index.469411a1.js";import"./index.6087afbc.js";import"./_baseIteratee.06432f6a.js";import"./get.066b7822.js";import"./DeleteOutlined.d08d062e.js";import"./index.8b6de8b6.js";import"./useRefs.d5715d6d.js";import"./Form.a567a65a.js";import"./Col.b3dea441.js";import"./useFlexGapSupport.0f4e02b8.js";import"./useSize.18a619e6.js";import"./index.95579f8d.js";import"./uniqBy.d5c89ac8.js";import"./index.aeb68d41.js";import"./useWindowSizeFn.115518f2.js";import"./FullscreenOutlined.1ce89a14.js";import"./index.4d69797f.js";import"./useForm.03f24358.js";import"./RadioButtonGroup.2d7e8065.js";import"./useFormItem.c4f2b3ce.js";import"./index.f6511e11.js";import"./index.ad5cd489.js";import"./index.51c956a1.js";import"./useContentViewHeight.ebe53333.js";import"./ArrowLeftOutlined.baf9cf25.js";import"./index.001e40f9.js";import"./transButton.fbee1833.js";import"./index.4575bac4.js";import"./index.4fcc5b07.js";import"./index.9deca062.js";import"./index.29cdf7d7.js";import"./uuid.2b29000c.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.4fb15b8a.js";import"./index.641531b0.js";import"./isNumber.2f44f10c.js";import"./fromPairs.2341303e.js";import"./scrollTo.7356b457.js";import"./index.f0ebb16a.js";import"./index.45ccc3f4.js";import"./index.cc93c6bb.js";import"./index.46c0cd49.js";import"./download.4f91264f.js";import"./base64Conver.08b9f4ec.js";import"./index.74ce321d.js";import"./index.09326035.js";import"./select.9e856af5.js";const K=w({components:{BasicTable:E},setup(){const o=D(null),{createMessage:a}=h();function n(){const m=y(o);if(!m)throw new Error("tableAction is null");return m}function s(){n().setLoading(!0),setTimeout(()=>{n().setLoading(!1)},1e3)}function r(){n().setColumns(R())}function c(){n().setColumns(p()),n().reload({page:1})}function t(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function l(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function C(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function d(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function F(){n().setPagination({current:2}),n().reload()}function B(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function k(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function b(){n().setSelectedRowKeys(["0","1","2"])}function A(){n().clearSelectedRowKeys()}return{tableRef:o,api:L,columns:p(),changeLoading:s,changeColumns:r,reloadTable:c,getColumn:t,getTableData:l,getTableRawData:C,getPagination:d,setPaginationInfo:F,getSelectRowList:B,getSelectRowKeyList:k,setSelectedRowKeyList:b,clearSelect:A}}}),v={class:"p-4"},P={class:"mb-4"},$={class:"mb-4"};function M(o,a,n,s,r,c){const t=f("a-button"),l=f("BasicTable");return _(),S("div",v,[g("div",P,[e(t,{class:"mr-2",onClick:o.reloadTable},{default:u(()=>[i(" \u8FD8\u539F ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.changeLoading},{default:u(()=>[i(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.changeColumns},{default:u(()=>[i(" \u66F4\u6539Columns ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getColumn},{default:u(()=>[i(" \u83B7\u53D6Columns ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getTableData},{default:u(()=>[i(" \u83B7\u53D6\u8868\u683C\u6570\u636E ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getTableRawData},{default:u(()=>[i(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.setPaginationInfo},{default:u(()=>[i(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 ")]),_:1},8,["onClick"])]),g("div",$,[e(t,{class:"mr-2",onClick:o.getSelectRowList},{default:u(()=>[i(" \u83B7\u53D6\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:u(()=>[i(" \u83B7\u53D6\u9009\u4E2D\u884CKey ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:u(()=>[i(" \u8BBE\u7F6E\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.clearSelect},{default:u(()=>[i(" \u6E05\u7A7A\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:o.getPagination},{default:u(()=>[i(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ")]),_:1},8,["onClick"])]),e(l,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var Jo=T(K,[["render",M]]);export{Jo as default};
