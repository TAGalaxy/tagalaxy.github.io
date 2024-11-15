var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var $=(e,n,m)=>n in e?Z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:m}):e[n]=m,f=(e,n)=>{for(var m in n||(n={}))ne.call(n,m)&&$(e,m,n[m]);if(H)for(var m of H(n))se.call(n,m)&&$(e,m,n[m]);return e},E=(e,n)=>ee(e,te(n));import{c as Y,cB as Q,f as N,k as c,a as oe,be as re,x as ae,n as g,cF as le,ax as y,bs as F,cD as G,y as ie,az as J,ai as ce,B as ue,dG as de,dH as fe,dI as me}from"./index.0994ffcf.js";/* empty css               */import{D as he}from"./index.31f380d8.js";/* empty css              */import{c as z}from"./componentMap.854856fa.js";import"./index.b32d7fc7.js";import{C as U}from"./index.09d33596.js";import{F as pe}from"./Form.5eb5121e.js";const{t:W}=Y();function K(e){return e.includes("Input")||e.includes("Complete")?W("common.inputText"):e.includes("Picker")||e.includes("Select")||e.includes("Cascader")||e.includes("Checkbox")||e.includes("Radio")||e.includes("Switch")?W("common.chooseText"):""}const be=["DatePicker","MonthPicker","WeekPicker","TimePicker"];function ge(){return[...be,"RangePicker"]}function Pe(e,n,m){["DatePicker","MonthPicker","WeekPicker","TimePicker"].includes(n)?e.type=m?"string":"object":["RangePicker","Upload","CheckboxGroup","TimePicker"].includes(n)?e.type="array":["InputNumber"].includes(n)&&(e.type="number")}function Me(e,n){return e&&["Input","InputPassword","InputSearch","InputTextArea"].includes(e)&&n&&Q(n)?`${n}`:n}const je=ge(),Le=["Input","InputPassword","InputSearch","InputTextArea"],Ce=["Upload","ApiTransfer","ApiTree","ApiSelect","ApiTreeSelect","ApiRadioGroup","ApiCascader","AutoComplete","RadioButtonGroup"];function ye(e,n){return N(()=>{const m=c(e),{labelCol:S={},wrapperCol:R={}}=m.itemProps||{},{labelWidth:D,disabledLabelWidth:h}=m,{labelWidth:x,labelCol:M,wrapperCol:j,layout:O}=c(n);if(!x&&!D&&!M||h)return S.style={textAlign:"left"},{labelCol:S,wrapperCol:R};let C=D||x;const L=f(f({},M),S),v=f(f({},j),R);return C&&(C=Q(C)?`${C}px`:C),{labelCol:f({style:{width:C}},L),wrapperCol:f({style:{width:O==="vertical"?"100%":`calc(100% - ${C})`}},v)}})}function B(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!le(e)}var Fe=oe({name:"BasicFormItem",inheritAttrs:!1,props:{schema:{type:Object,default:()=>({})},formProps:{type:Object,default:()=>({})},allDefaultValues:{type:Object,default:()=>({})},formModel:{type:Object,default:()=>({})},setFormModel:{type:Function,default:null},tableAction:{type:Object},formActionType:{type:Object},isAdvanced:{type:Boolean}},setup(e,{slots:n}){const{t:m}=Y(),{schema:S,formProps:R}=re(e),D=ye(S,R),h=N(()=>{const{allDefaultValues:s,formModel:t,schema:a}=e,{mergeDynamicData:l}=e.formProps;return{field:a.field,model:t,values:f(f(f({},l),s),t),schema:a}}),x=N(()=>{var r;const{schema:s,tableAction:t,formModel:a,formActionType:l}=e;let{componentProps:o={}}=s;return y(o)&&(o=(r=o({schema:s,tableAction:t,formModel:a,formActionType:l}))!=null?r:{}),s.component==="Divider"&&(o=Object.assign({type:"horizontal"},{orientation:"left",plain:!0},o)),o}),M=N(()=>{const{disabled:s}=e.formProps,{dynamicDisabled:t}=e.schema,{disabled:a=!1}=c(x);let l=!!s||a;return F(t)&&(l=t),y(t)&&(l=t(c(h))),l});function j(){const{show:s,ifShow:t}=e.schema,{showAdvancedButton:a}=e.formProps,l=a&&F(e.isAdvanced)?e.isAdvanced:!0;let o=!0,r=!0;return F(s)&&(o=s),F(t)&&(r=t),y(s)&&(o=s(c(h))),y(t)&&(r=t(c(h))),o=o&&l,{isShow:o,isIfShow:r}}function O(){var T;const{rules:s=[],component:t,rulesMessageJoinLabel:a,label:l,dynamicRules:o,required:r}=e.schema;if(y(o))return o(c(h));let i=ce(s);const{rulesMessageJoinLabel:k}=e.formProps,I=Reflect.has(e.schema,"rulesMessageJoinLabel")?a:k,p=K(t)+`${I?l:""}`;function A(d,u){const P=d.message||p;return u===void 0||fe(u)||Array.isArray(u)&&u.length===0||typeof u=="string"&&u.trim()===""||typeof u=="object"&&Reflect.has(u,"checked")&&Reflect.has(u,"halfChecked")&&Array.isArray(u.checked)&&Array.isArray(u.halfChecked)&&u.checked.length===0&&u.halfChecked.length===0?Promise.reject(P):Promise.resolve()}const b=y(r)?r(c(h)):r;b&&(!i||i.length===0?i=[{required:b,validator:A}]:i.findIndex(u=>Reflect.has(u,"required"))===-1&&i.push({required:b,validator:A}));const q=i.findIndex(d=>Reflect.has(d,"required")&&!Reflect.has(d,"validator"));if(q!==-1){const d=i[q],{isShow:u}=j();if(u||(d.required=!1),t){Reflect.has(d,"type")||(d.type=t==="InputNumber"?"number":"string"),d.message=d.message||p,(t.includes("Input")||t.includes("Textarea"))&&(d.whitespace=!0);const P=(T=c(x))==null?void 0:T.valueFormat;Pe(d,t,P)}}const w=i.findIndex(d=>d.max);return w!==-1&&!i[w].validator&&(i[w].message=i[w].message||m("component.form.maxTip",[i[w].max])),i}function C(){var u;const{renderComponentContent:s,component:t,field:a,changeEvent:l="change",valueField:o}=e.schema,r=t&&["Switch","Checkbox"].includes(t),i=`on${me(l)}`,k={[i]:(...P)=>{const[V]=P;b[i]&&b[i](...P);const _=V?V.target:null,X=_?r?_.checked:_.value:V;e.setFormModel(a,X,e.schema)}},I=z.get(t),{autoSetPlaceHolder:p,size:A}=e.formProps,b=E(f({allowClear:!0,getPopupContainer:P=>P.parentNode,size:A},c(x)),{disabled:c(M)});!b.disabled&&p&&t!=="RangePicker"&&t&&(b.placeholder=((u=c(x))==null?void 0:u.placeholder)||K(t)),b.codeField=a,b.formValues=c(h);const w={[o||(r?"checked":"value")]:e.formModel[a]},T=f(f(f({},b),k),w);if(!s)return g(I,T,null);const d=y(s)?f({},s(c(h))):{default:()=>s};return g(I,T,B(d)?d:{default:()=>[d]})}function L(){const{label:s,helpMessage:t,helpComponentProps:a,subLabel:l}=e.schema,o=l?g("span",null,[s,ue(" "),g("span",{class:"text-secondary"},[l])]):s,r=y(t)?t(c(h)):t;return!r||Array.isArray(r)&&r.length===0?o:g("span",null,[o,g(de,J({placement:"top",class:"mx-1",text:r},a),null)])}function v(){const{itemProps:s,slot:t,render:a,field:l,suffix:o,component:r}=e.schema,{labelCol:i,wrapperCol:k}=c(D),{colon:I}=e.formProps;if(r==="Divider"){let p;return g(U,{span:24},{default:()=>[g(he,c(x),B(p=L())?p:{default:()=>[p]})]})}else{const p=()=>t?G(n,t,c(h)):a?a(c(h)):C(),A=!!o,b=y(o)?o(c(h)):o;return Ce.includes(r)&&e.schema&&(e.schema.itemProps=f({autoLink:!1},e.schema.itemProps)),g(pe.Item,J({name:l,colon:I,class:{"suffix-item":A}},s,{label:L(),rules:O(),labelCol:i,wrapperCol:k}),{default:()=>[g("div",{style:"display:flex"},[g("div",{style:"flex:1;"},[p()]),A&&g("span",{class:"suffix"},[b])])]})}}return()=>{let s;const{colProps:t={},colSlot:a,renderColContent:l,component:o}=e.schema;if(!z.has(o))return null;const{baseColProps:r={}}=e.formProps,i=f(f({},r),t),{isIfShow:k,isShow:I}=j(),p=c(h);return k&&ae(g(U,i,B(s=(()=>a?G(n,a,p):l?l(p):v())())?s:{default:()=>[s]}),[[ie,I]])}}});export{Fe as _,je as a,Le as d,Me as h};