import{aw as _,a as y,bK as C,c as v,bE as F,bf as g,b as h,v as w,f as L,k as n,aP as S,ay as m,o as R,j as $,z as b,i as a,q as u,t as c,n as I,l as k,fo as U,fp as G}from"./index.0994ffcf.js";import{D,G as B,S as H}from"./siteSetting.68e5b367.js";import{a as T}from"./useContentViewHeight.4631c2db.js";import{G as V}from"./GithubFilled.304c80a1.js";import"./useWindowSizeFn.c35b04b1.js";const W=y({name:"LayoutFooter",components:{Footer:C.Footer,GithubFilled:V},setup(){const{t:o}=v(),{getShowFooter:e}=F(),{currentRoute:p}=g(),{prefixCls:d}=h("layout-footer"),r=w(null),{setFooterHeight:i}=T();return{getShowLayoutFooter:L(()=>{var s,t;if(n(e)){const l=(s=n(r))==null?void 0:s.$el;i((l==null?void 0:l.offsetHeight)||0)}else i(0);return n(e)&&!((t=n(p).meta)!=null&&t.hiddenFooter)}),prefixCls:d,t:o,DOC_URL:D,GITHUB_URL:B,SITE_URL:H,openWindow:S,footerRef:r}}}),N=o=>(U("data-v-62583d60"),o=o(),G(),o),z=N(()=>a("div",null,"Copyright \xA92020 Vben Admin",-1));function A(o,e,p,d,r,i){const f=m("GithubFilled"),s=m("Footer");return o.getShowLayoutFooter?(R(),$(s,{key:0,class:u(o.prefixCls),ref:"footerRef"},{default:b(()=>[a("div",{class:u(`${o.prefixCls}__links`)},[a("a",{onClick:e[0]||(e[0]=t=>o.openWindow(o.SITE_URL))},c(o.t("layout.footer.onlinePreview")),1),I(f,{onClick:e[1]||(e[1]=t=>o.openWindow(o.GITHUB_URL)),class:u(`${o.prefixCls}__github`)},null,8,["class"]),a("a",{onClick:e[2]||(e[2]=t=>o.openWindow(o.DOC_URL))},c(o.t("layout.footer.onlineDocument")),1)],2),z]),_:1},8,["class"])):k("",!0)}var K=_(W,[["render",A],["__scopeId","data-v-62583d60"]]);export{K as default};