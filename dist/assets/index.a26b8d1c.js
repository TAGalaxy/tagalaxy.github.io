import{a as R,H as S,v as _,K as w,J as B,R as G,_ as l,c3 as I,S as U,T as u,n as p,G as V}from"./index.444718ea.js";import{V as N}from"./Checkbox.5348e20f.js";var T=["prefixCls","id"],A=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:V.any,name:String,id:String,autofocus:{type:Boolean,default:void 0},onChange:Function,onFocus:Function,onBlur:Function,onClick:Function,"onUpdate:checked":Function,"onUpdate:value":Function}},H=R({compatConfig:{MODE:3},name:"ARadio",props:A(),setup:function(o,c){var i=c.emit,g=c.expose,f=c.slots,v=S(),s=_(),d=w("radioGroupContext",void 0),C=B("radio",o),r=C.prefixCls,m=C.direction,x=function(){s.value.focus()},b=function(){s.value.blur()};g({focus:x,blur:b});var k=function(a){var t=a.target.checked;i("update:checked",t),i("update:value",t),i("change",a),v.onFieldChange()},F=function(a){i("change",a),d&&d.onRadioChange&&d.onRadioChange(a)};return function(){var e,a=d;o.prefixCls;var t=o.id,y=t===void 0?v.id.value:t,P=G(o,T),n=l({prefixCls:r.value,id:y},I(P,["onUpdate:checked","onUpdate:value"]));a?(n.name=a.props.name,n.onChange=F,n.checked=o.value===a.stateValue.value,n.disabled=o.disabled||a.props.disabled):n.onChange=k;var j=U((e={},u(e,"".concat(r.value,"-wrapper"),!0),u(e,"".concat(r.value,"-wrapper-checked"),n.checked),u(e,"".concat(r.value,"-wrapper-disabled"),n.disabled),u(e,"".concat(r.value,"-wrapper-rtl"),m.value==="rtl"),e));return p("label",{class:j},[p(N,l(l({},n),{},{type:"radio",ref:s}),null),f.default&&p("span",null,[f.default()])])}}});export{H as R,A as r};