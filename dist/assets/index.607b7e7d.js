var B=Object.defineProperty,F=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var P=(t,e,r)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))V.call(e,r)&&P(t,r,e[r]);if(j)for(var r of j(e))L.call(e,r)&&P(t,r,e[r]);return t},C=(t,e)=>F(t,R(e));import{a as q,v as G,b as H,cC as J,f as d,k as s,n as u,az as K,cD as Q,cE as T,cF as U,ax as b,be as X,aF as Y}from"./index.444718ea.js";import{D as S}from"./index.9875baa7.js";import{g as Z}from"./get.066b7822.js";function tt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!U(t)}const et={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:t=>["small","default","middle",void 0].includes(t),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}};var nt=q({name:"Description",props:et,emits:["register"],setup(t,{slots:e,emit:r}){const m=G(null),{prefixCls:_}=H("description"),w=J(),g=d(()=>o(o({},t),s(m))),f=d(()=>C(o({},s(g)),{title:void 0})),E=d(()=>!!s(g).title),I=d(()=>o({canExpand:!1},s(f).collapseOptions)),M=d(()=>o(o({},s(w)),s(f)));function N(n){m.value=o(o({},s(m)),n)}function W({label:n,labelMinWidth:i,labelStyle:a}){if(!a&&!i)return n;const l=C(o({},a),{minWidth:`${i}px `});return u("div",{style:l},[n])}function $(){const{schema:n,data:i}=s(f);return s(n).map(a=>{const{render:l,field:h,span:z,show:x,contentMinWidth:D}=a;if(x&&b(x)&&!x(i))return null;const O=()=>{var v;const c=(v=s(f))==null?void 0:v.data;if(!c)return null;const p=Z(c,h);return p&&!X(c).hasOwnProperty(h)?b(l)?l("",c):"":b(l)?l(p,c):p!=null?p:""},A=D;return u(S.Item,{label:W(a),key:h,span:z},{default:()=>{if(!D)return O();const c={minWidth:`${A}px`};return u("div",{style:c},[O()])}})}).filter(a=>!!a)}const y=()=>{let n;return u(S,K({class:`${_}`},s(M)),tt(n=$())?n:{default:()=>[n]})},k=()=>{const n=t.useCollapse?y():u("div",null,[y()]);if(!t.useCollapse)return n;const{canExpand:i,helpMessage:a}=s(I),{title:l}=s(g);return u(T,{title:l,canExpan:i,helpMessage:a},{default:()=>n,action:()=>Q(e,"action")})};return r("register",{setDescProps:N}),()=>s(E)?k():y()}});const ct=Y(nt);export{ct as D};
