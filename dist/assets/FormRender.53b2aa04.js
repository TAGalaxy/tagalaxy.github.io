import C from"./index.9ae0418a.js";import{a as g,aw as y,ay as t,o as r,j as n,z as p,h as s,F as a,aB as i,aA as R,aC as $}from"./index.0994ffcf.js";/* empty css               */import{R as v}from"./index.ec7b7cf8.js";import{C as k}from"./index.09d33596.js";import"./formItemConfig.841c582f.js";import"./componentMap.854856fa.js";import"./index.1b041e8d.js";import"./Checkbox.e8d9cfcc.js";import"./index.955360e8.js";import"./index.e13a836d.js";import"./index.06cda3f0.js";import"./index.6575f003.js";import"./index.3b1bbfdc.js";import"./index.7fc8eebd.js";import"./index.31f380d8.js";import"./useFormItem.db811efb.js";import"./RadioButtonGroup.00f6150b.js";import"./get.cad0ef5a.js";import"./index.e166860d.js";import"./eagerComputed.1f875881.js";import"./index.b32d7fc7.js";import"./_baseIteratee.03859d79.js";import"./DeleteOutlined.2279352f.js";import"./index.736d5ebb.js";import"./useRefs.e7dceed1.js";import"./Form.5eb5121e.js";import"./Col.eef5d868.js";import"./useFlexGapSupport.02b519a7.js";import"./useSize.c81b3ed4.js";import"./transButton.5787cddc.js";import"./index.2b0b7b4b.js";import"./index.b7f80407.js";import"./useWindowSizeFn.c35b04b1.js";import"./FullscreenOutlined.173f28f0.js";import"./index.a5092513.js";import"./index.ded85ab8.js";import"./isNumber.0c8ac276.js";import"./uuid.2b29000c.js";import"./download.b3e2826c.js";import"./base64Conver.08b9f4ec.js";import"./index.a9111ac7.js";import"./index.c4b8367f.js";import"./index.f1ed85df.js";import"./useFormDesignState.ea45dabd.js";const D=g({name:"FormRender",components:{VFormItem:C,Row:v,Col:k},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,default:()=>({})},formConfig:{type:Object,default:()=>[]},setFormModel:{type:Function,default:null}},emits:["change","submit","reset"],setup(o){}});function M(o,e,b,w,j,B){const l=t("FormRender",!0),f=t("Col"),d=t("Row"),u=t("VFormItem");return["Grid"].includes(o.schema.component)?(r(),n(d,{key:0,class:"grid-row"},{default:p(()=>[(r(!0),s(a,null,i(o.schema.columns,(m,c)=>(r(),n(f,{class:"grid-col",key:c,span:m.span},{default:p(()=>[(r(!0),s(a,null,i(m.children,(F,h)=>(r(),n(l,{key:h,schema:F,formData:o.formData,formConfig:o.formConfig,setFormModel:o.setFormModel},null,8,["schema","formData","formConfig","setFormModel"]))),128))]),_:2},1032,["span"]))),128))]),_:1})):(r(),n(u,{key:1,formConfig:o.formConfig,schema:o.schema,formData:o.formData,setFormModel:o.setFormModel,onChange:e[0]||(e[0]=m=>o.$emit("change",{schema:o.schema,value:m})),onSubmit:e[1]||(e[1]=m=>o.$emit("submit",o.schema)),onReset:e[2]||(e[2]=m=>o.$emit("reset"))},R({_:2},[o.schema.componentProps&&o.schema.componentProps.slotName?{name:o.schema.componentProps.slotName,fn:p(()=>[$(o.$slots,o.schema.componentProps.slotName)]),key:"0"}:void 0]),1032,["formConfig","schema","formData","setFormModel"]))}var vo=y(D,[["render",M]]);export{vo as default};
