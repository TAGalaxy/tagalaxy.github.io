import{a as v,b8 as k,f as g,aw as b,ay as D,o as I,h as N,i as d,n as i,q as p,bn as m}from"./index.444718ea.js";import{c as O}from"./index.46f81d4f.js";import{u as $}from"./useFormDesignState.53120c98.js";import"./isNumber.2f44f10c.js";const B=v({name:"FormNodeOperate",components:{Icon:k},props:{schema:{type:Object,default:()=>({})},currentItem:{type:Object,default:()=>({})}},setup(e){const{formConfig:o,formDesignMethods:s}=$();return{activeClass:g(()=>e.schema.key===e.currentItem.key?"active":"unactivated"),handleDelete:()=>{const n=t=>{t.some((l,a)=>{var c;const{component:C,key:h}=l;if(["Grid","Tabs"].includes(C)&&((c=l.columns)==null||c.forEach(r=>n(r.children))),h===e.currentItem.key){let r=t.length===1?{component:""}:t.length-1>a?t[a+1]:t[a-1];return s.handleSetSelectItem(r),O(t,a),!0}})};n(o.value.schemas)},handleCopy:()=>{s.handleCopy()}}}}),F={class:"copy-delete-box"};function S(e,o,s,u,f,y){const n=D("Icon");return I(),N("div",F,[d("a",{class:p(["copy",e.activeClass]),onClick:o[0]||(o[0]=m((...t)=>e.handleCopy&&e.handleCopy(...t),["stop"]))},[i(n,{icon:"ant-design:copy-outlined"})],2),d("a",{class:p(["delete",e.activeClass]),onClick:o[1]||(o[1]=m((...t)=>e.handleDelete&&e.handleDelete(...t),["stop"]))},[i(n,{icon:"ant-design:delete-outlined"})],2)])}var V=b(B,[["render",S]]);export{V as default};
