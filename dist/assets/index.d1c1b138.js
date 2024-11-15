import{a as R,f as x,w as et,v as O,a8 as J,c1 as at,_ as r,n as v,S as k,G as j,J as Q,R as W,ak as nt,cm as q,cs as lt,T as b,c8 as rt,Q as ot,eD as ut,Y as st,d_ as ct,bQ as it,x as vt,y as ft}from"./index.0994ffcf.js";function H(f){var t=f.prefixCls,u=f.value,l=f.current,a=f.offset,g=a===void 0?0:a,e;return g&&(e={position:"absolute",top:"".concat(g,"00%"),left:0}),v("p",{style:e,class:k("".concat(t,"-only-unit"),{current:l})},[u])}function dt(f,t,u){for(var l=f,a=0;(l+10)%10!==t;)l+=u,a+=u;return a}var mt=R({compatConfig:{MODE:3},name:"SingleNumber",props:{prefixCls:String,value:String,count:Number},setup:function(t){var u=x(function(){return Number(t.value)}),l=x(function(){return Math.abs(t.count)}),a=et({prevValue:u.value,prevCount:l.value}),g=function(){a.prevValue=u.value,a.prevCount=l.value},e=O();return J(u,function(){clearTimeout(e.value),e.value=setTimeout(function(){g()},1e3)},{flush:"post"}),at(function(){clearTimeout(e.value)}),function(){var d,o={},s=u.value;if(a.prevValue===s||Number.isNaN(s)||Number.isNaN(a.prevValue))d=[H(r(r({},t),{},{current:!0}))],o={transition:"none"};else{d=[];for(var i=s+10,c=[],m=s;m<=i;m+=1)c.push(m);var S=c.findIndex(function(y){return y%10===a.prevValue});d=c.map(function(y,C){var _=y%10;return H(r(r({},t),{},{value:_,offset:C-S,current:C===S}))});var p=a.prevCount<l.value?1:-1;o={transform:"translateY(".concat(-dt(a.prevValue,s,p),"00%)")}}return v("span",{class:"".concat(t.prefixCls,"-only"),style:o,onTransitionend:function(){return g()}},[d])}}}),yt=["prefixCls","count","title","show","component","class","style"],bt={prefixCls:String,count:j.any,component:String,title:j.any,show:Boolean},gt=R({compatConfig:{MODE:3},name:"ScrollNumber",inheritAttrs:!1,props:bt,setup:function(t,u){var l=u.attrs,a=u.slots,g=Q("scroll-number",t),e=g.prefixCls;return function(){var d,o=r(r({},t),l);o.prefixCls;var s=o.count,i=o.title;o.show;var c=o.component,m=c===void 0?"sup":c,S=o.class,p=o.style,y=W(o,yt),C=r(r({},y),{},{style:p,"data-show":t.show,class:k(e.value,S),title:i}),_=s;if(s&&Number(s)%1===0){var A=String(s).split("");_=A.map(function(n,$){return v(mt,{prefixCls:e.value,count:Number(s),value:n,key:A.length-$},null)})}p&&p.borderColor&&(C.style=r(r({},p),{},{boxShadow:"0 0 0 1px ".concat(p.borderColor," inset")}));var T=nt((d=a.default)===null||d===void 0?void 0:d.call(a));return T&&T.length?q(T,{class:k("".concat(e.value,"-custom-component"))},!1):v(m,C,{default:function(){return[_]}})}}});function E(f){return lt.indexOf(f)!==-1}var Ct=["class","style"],xt=function(){return{prefix:String,color:{type:String},text:j.any,placement:{type:String,default:"end"}}},pt=R({compatConfig:{MODE:3},name:"ABadgeRibbon",inheritAttrs:!1,props:xt(),slots:["text"],setup:function(t,u){var l=u.attrs,a=u.slots,g=Q("ribbon",t),e=g.prefixCls,d=g.direction,o=x(function(){return E(t.color)}),s=x(function(){var i;return[e.value,"".concat(e.value,"-placement-").concat(t.placement),(i={},b(i,"".concat(e.value,"-rtl"),d.value==="rtl"),b(i,"".concat(e.value,"-color-").concat(t.color),o.value),i)]});return function(){var i,c,m=l.class,S=l.style,p=W(l,Ct),y={},C={};return t.color&&!o.value&&(y.background=t.color,C.color=t.color),v("div",r({class:"".concat(e.value,"-wrapper")},p),[(i=a.default)===null||i===void 0?void 0:i.call(a),v("div",{class:[s.value,m],style:r(r({},y),S)},[v("span",{class:"".concat(e.value,"-text")},[t.text||((c=a.text)===null||c===void 0?void 0:c.call(a))]),v("div",{class:"".concat(e.value,"-corner"),style:C},null)])])}}}),St=function(){return{count:j.any,showZero:{type:Boolean,default:void 0},overflowCount:{type:Number,default:99},dot:{type:Boolean,default:void 0},prefixCls:String,scrollNumberPrefixCls:String,status:{type:String},size:{type:String,default:"default"},color:String,text:j.any,offset:Array,numberStyle:{type:Object,default:void 0},title:String}},wt=R({compatConfig:{MODE:3},name:"ABadge",Ribbon:pt,inheritAttrs:!1,props:St(),slots:["text","count"],setup:function(t,u){var l=u.slots,a=u.attrs,g=Q("badge",t),e=g.prefixCls,d=g.direction,o=x(function(){return t.count>t.overflowCount?"".concat(t.overflowCount,"+"):t.count}),s=x(function(){return t.status!==null&&t.status!==void 0||t.color!==null&&t.color!==void 0}),i=x(function(){return o.value==="0"||o.value===0}),c=x(function(){return t.dot&&!i.value}),m=x(function(){return c.value?"":o.value}),S=x(function(){var n=m.value===null||m.value===void 0||m.value==="";return(n||i.value&&!t.showZero)&&!c.value}),p=O(t.count),y=O(m.value),C=O(c.value);J([function(){return t.count},m,c],function(){S.value||(p.value=t.count,y.value=m.value,C.value=c.value)},{immediate:!0});var _=x(function(){var n;return n={},b(n,"".concat(e.value,"-status-dot"),s.value),b(n,"".concat(e.value,"-status-").concat(t.status),!!t.status),b(n,"".concat(e.value,"-status-").concat(t.color),E(t.color)),n}),A=x(function(){return t.color&&!E(t.color)?{background:t.color}:{}}),T=x(function(){var n;return n={},b(n,"".concat(e.value,"-dot"),C.value),b(n,"".concat(e.value,"-count"),!C.value),b(n,"".concat(e.value,"-count-sm"),t.size==="small"),b(n,"".concat(e.value,"-multiple-words"),!C.value&&y.value&&y.value.toString().length>1),b(n,"".concat(e.value,"-status-").concat(t.status),!!t.status),b(n,"".concat(e.value,"-status-").concat(t.color),E(t.color)),n});return function(){var n,$,D,P=t.offset,M=t.title,z=t.color,Y=a.style,U=rt(l,t,"text"),h=e.value,N=p.value,w=ot((n=l.default)===null||n===void 0?void 0:n.call(l));w=w.length?w:null;var Z=!!(!S.value||l.count),V=function(){if(!P)return r({},Y);var I={marginTop:ut(P[1])?"".concat(P[1],"px"):P[1]};return d.value==="rtl"?I.left="".concat(parseInt(P[0],10),"px"):I.right="".concat(-parseInt(P[0],10),"px"),r(r({},I),Y)}(),F=M!=null?M:typeof N=="string"||typeof N=="number"?N:void 0,K=Z||!U?null:v("span",{class:"".concat(h,"-status-text")},[U]),X=st(N)==="object"||N===void 0&&l.count?q(N!=null?N:($=l.count)===null||$===void 0?void 0:$.call(l),{style:V},!1):null,G=k(h,(D={},b(D,"".concat(h,"-status"),s.value),b(D,"".concat(h,"-not-a-wrapper"),!w),b(D,"".concat(h,"-rtl"),d.value==="rtl"),D),a.class);if(!w&&s.value){var L=V.color;return v("span",r(r({},a),{},{class:G,style:V}),[v("span",{class:_.value,style:A.value},null),v("span",{style:{color:L},class:"".concat(h,"-status-text")},[U])])}var tt=ct(w?"".concat(h,"-zoom"):"",{appear:!1}),B=r(r({},V),t.numberStyle);return z&&!E(z)&&(B=B||{},B.background=z),v("span",r(r({},a),{},{class:G}),[w,v(it,tt,{default:function(){return[vt(v(gt,{prefixCls:t.scrollNumberPrefixCls,show:Z,class:T.value,count:y.value,title:F,style:B,key:"scrollNumber"},{default:function(){return[X]}}),[[ft,Z]])]}}),K])}}});export{wt as B,pt as R};