import{a as N,aZ as e,v as O,a_ as R,a$ as S,b0 as A,b as v,f,k as s,b1 as d,n as r,C as k,c as G}from"./index.444718ea.js";import{R as C}from"./index.400ca6c7.js";var P="/assets/no-data.f7e550cc.svg",D="/assets/net-error.61b7e6df.svg",B=N({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=O(new Map),{query:p}=R(),o=S(),c=A(),{t}=G(),{prefixCls:x}=v("app-exception-page"),E=f(()=>{const{status:l}=p,{status:i}=n;return Number(l)||i}),m=f(()=>s(a).get(s(E))),b=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?b:u,handler:()=>n.full?o(d.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?b:u,handler:()=>n.full?o(d.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:P}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:D}),()=>{const{title:l,subTitle:i,btnText:T,icon:_,handler:g,status:y}=s(m)||{};return r(C,{class:x,status:y,title:n.title||l,"sub-title":n.subTitle||i},{extra:()=>T&&r(k,{type:"primary",onClick:g},{default:()=>T}),icon:()=>_?r("img",{src:_},null):null})}}});export{B as default};
