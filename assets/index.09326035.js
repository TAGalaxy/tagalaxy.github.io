var m=(t,a,e)=>new Promise((o,u)=>{var l=n=>{try{r(e.next(n))}catch(c){u(c)}},s=n=>{try{r(e.throw(n))}catch(c){u(c)}},r=n=>n.done?o(n.value):Promise.resolve(n.value).then(l,s);r((e=e.apply(t,a)).next())});import{v as d,av as $,k as i,a as v,C as B,f as b,L as z,aw as C,c as I,ax as F,ay as p,o as y,j as S,z as f,B as h,t as A,az as g,b as k,aA as N,aB as T,aC as D,aD as j,aE as O,n as P,aF as w}from"./index.444718ea.js";import{u as E}from"./useFormItem.c4f2b3ce.js";function L(t){const a=d(t),e=d(!1);let o;function u(){o&&window.clearInterval(o)}function l(){e.value=!1,u(),o=null}function s(){i(e)||!!o||(e.value=!0,o=setInterval(()=>{i(a)===1?(l(),a.value=t):a.value-=1},1e3))}function r(){a.value=t,l()}function n(){r(),s()}return $(()=>{r()}),{start:s,reset:r,restart:n,clear:u,stop:l,currentCount:a,isStart:e}}const R={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},V=v({name:"CountButton",components:{Button:B},props:R,setup(t){const a=d(!1),{currentCount:e,isStart:o,start:u,reset:l}=L(t.count),{t:s}=I(),r=b(()=>i(o)?s("component.countdown.sendText",[i(e)]):s("component.countdown.normalText"));z(()=>{t.value===void 0&&l()});function n(){return m(this,null,function*(){const{beforeStartFunc:c}=t;if(c&&F(c)){a.value=!0;try{(yield c())&&u()}finally{a.value=!1}}else u()})}return{handleStart:n,currentCount:e,loading:a,getButtonText:r,isStart:o}}});function U(t,a,e,o,u,l){const s=p("Button");return y(),S(s,g(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:f(()=>[h(A(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}var _=C(V,[["render",U]]);const q={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},G=v({name:"CountDownInput",components:{CountButton:_},inheritAttrs:!1,props:q,setup(t){const{prefixCls:a}=k("countdown-input"),[e]=E(t);return{prefixCls:a,state:e}}});function H(t,a,e,o,u,l){const s=p("CountButton"),r=p("a-input");return y(),S(r,g(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),N({addonAfter:f(()=>[P(s,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[T(Object.keys(t.$slots).filter(n=>n!=="addonAfter"),n=>({name:n,fn:f(c=>[D(t.$slots,n,j(O(c||{})))])}))]),1040,["class","size","value"])}var J=C(G,[["render",H]]);const X=w(J);w(_);export{X as C};
