import{B as g,T as _}from"./TableImg.ad1891f2.js";import"./componentMap.f197190c.js";import{u as E}from"./useTable.58b97e74.js";import{aw as T,a as y,ay as r,o as t,h as l,n as k,z as a,F as A,B as m,t as p,j as i,l as B}from"./index.444718ea.js";import{T as C}from"./index.9deca062.js";import{A as f}from"./index.51c956a1.js";import{d as I}from"./table.aec57955.js";import"./index.a26b8d1c.js";import"./Checkbox.5348e20f.js";import"./index.ef810c05.js";import"./index.78169a94.js";import"./eagerComputed.1b925bf8.js";import"./BasicForm.a3ec8b2c.js";/* empty css              *//* empty css               */import"./FormItem.vue_vue_type_script_lang.276aad27.js";import"./index.469411a1.js";import"./index.6087afbc.js";import"./_baseIteratee.06432f6a.js";import"./get.066b7822.js";import"./DeleteOutlined.d08d062e.js";import"./index.8b6de8b6.js";import"./useRefs.d5715d6d.js";import"./Form.a567a65a.js";import"./Col.b3dea441.js";import"./useFlexGapSupport.0f4e02b8.js";import"./useSize.18a619e6.js";import"./index.95579f8d.js";import"./uniqBy.d5c89ac8.js";import"./index.aeb68d41.js";import"./useWindowSizeFn.115518f2.js";import"./FullscreenOutlined.1ce89a14.js";import"./index.4d69797f.js";import"./useForm.03f24358.js";import"./RadioButtonGroup.2d7e8065.js";import"./useFormItem.c4f2b3ce.js";import"./index.f6511e11.js";import"./index.ad5cd489.js";import"./useContentViewHeight.ebe53333.js";import"./ArrowLeftOutlined.baf9cf25.js";import"./index.001e40f9.js";import"./transButton.fbee1833.js";import"./index.4575bac4.js";import"./index.4fcc5b07.js";import"./index.29cdf7d7.js";import"./uuid.2b29000c.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.4fb15b8a.js";import"./index.641531b0.js";import"./isNumber.2f44f10c.js";import"./fromPairs.2341303e.js";import"./scrollTo.7356b457.js";import"./index.f0ebb16a.js";import"./index.45ccc3f4.js";import"./index.cc93c6bb.js";import"./index.46c0cd49.js";import"./download.4f91264f.js";import"./base64Conver.08b9f4ec.js";import"./index.74ce321d.js";import"./index.09326035.js";const b=[{title:"ID",dataIndex:"id"},{title:"\u5934\u50CF",dataIndex:"avatar",width:100},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u56FE\u7247\u5217\u88681",dataIndex:"imgArr",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140},{title:"\u7167\u7247\u5217\u88682",dataIndex:"imgs",width:160},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],x=y({components:{BasicTable:g,TableImg:_,Tag:C,Avatar:f},setup(){const[u]=E({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:I,columns:b,bordered:!0,showTableSetting:!0});return{registerTable:u}}}),h={class:"p-4"};function D(u,v,w,L,z,$){const s=r("Tag"),c=r("Avatar"),n=r("TableImg"),F=r("BasicTable");return t(),l("div",h,[k(F,{onRegister:u.registerTable},{bodyCell:a(({column:e,record:o,text:d})=>[e.key==="id"?(t(),l(A,{key:0},[m(" ID: "+p(o.id),1)],64)):e.key==="no"?(t(),i(s,{key:1,color:"green"},{default:a(()=>[m(p(o.no),1)]),_:2},1024)):e.key==="avatar"?(t(),i(c,{key:2,size:60,src:o.avatar},null,8,["src"])):e.key==="imgArr"?(t(),i(n,{key:3,size:60,simpleShow:!0,imgList:d},null,8,["imgList"])):e.key==="imgs"?(t(),i(n,{key:4,size:60,imgList:d},null,8,["imgList"])):e.key==="category"?(t(),i(s,{key:5,color:"green"},{default:a(()=>[m(p(o.no),1)]),_:2},1024)):B("",!0)]),_:1},8,["onRegister"])])}var jt=T(x,[["render",D]]);export{jt as default};
