import{_ as b,G as v,a as ce,w as Oe,v as T,N as we,am as ee,a8 as X,c1 as be,f as K,c2 as xe,R as te,S as se,T as j,n as S,c3 as ge,c4 as Me,c5 as Te,at as Ce,c6 as Ve,U as Le,al as ke,K as Be,J as Ae,c7 as oe,a5 as Fe,c8 as re,c9 as je}from"./index.444718ea.js";var Se=function(){return{prefixCls:String,width:v.oneOfType([v.string,v.number]),height:v.oneOfType([v.string,v.number]),style:{type:Object,default:void 0},class:String,placement:{type:String},wrapperClassName:String,level:{type:[String,Array]},levelMove:{type:[Number,Function,Array]},duration:String,ease:String,showMask:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},afterVisibleChange:Function,keyboard:{type:Boolean,default:void 0},contentWrapperStyle:{type:Object,default:void 0},autofocus:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0}}},He=function(){return b(b({},Se()),{},{forceRender:{type:Boolean,default:void 0},getContainer:v.oneOfType([v.string,v.func,v.object,v.looseBool])})},Ie=function(){return b(b({},Se()),{},{getContainer:Function,getOpenCount:Function,scrollLocker:v.any,switchScrollingEffect:Function})};function $e(u){return Array.isArray(u)?u:[u]}var pe={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"},ze=Object.keys(pe).filter(function(u){if(typeof document=="undefined")return!1;var e=document.getElementsByTagName("html")[0];return u in(e?e.style:{})})[0],de=pe[ze];function fe(u,e,r,w){u.addEventListener?u.addEventListener(e,r,w):u.attachEvent&&u.attachEvent("on".concat(e),r)}function ve(u,e,r,w){u.removeEventListener?u.removeEventListener(e,r,w):u.attachEvent&&u.detachEvent("on".concat(e),r)}function _e(u,e){var r=typeof u=="function"?u(e):u;return Array.isArray(r)?r.length===2?r:[r[0],r[1]]:[r]}var he=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ie=!(typeof window!="undefined"&&window.document&&window.document.createElement),We=function u(e,r,w,m){if(!r||r===document||r instanceof Document)return!1;if(r===e.parentNode)return!0;var E=Math.max(Math.abs(w),Math.abs(m))===Math.abs(m),P=Math.max(Math.abs(w),Math.abs(m))===Math.abs(w),O=r.scrollHeight-r.clientHeight,i=r.scrollWidth-r.clientWidth,d=document.defaultView.getComputedStyle(r),V=d.overflowY==="auto"||d.overflowY==="scroll",N=d.overflowX==="auto"||d.overflowX==="scroll",x=O&&V,M=i&&N;return E&&(!x||x&&(r.scrollTop>=O&&m<0||r.scrollTop<=0&&m>0))||P&&(!M||M&&(r.scrollLeft>=i&&w<0||r.scrollLeft<=0&&w>0))?u(e,r.parentNode,w,m):!1},Re=["width","height","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","keyboard","getOpenCount","scrollLocker","contentWrapperStyle","style","class"],R={},Xe=ce({compatConfig:{MODE:3},inheritAttrs:!1,props:Ie(),emits:["close","handleClick","change"],setup:function(e,r){var w=r.emit,m=r.slots,E=Oe({startPos:{x:null,y:null}}),P,O=T(),i=T(),d=T(),V=T(),N=T(),x=[],M="drawer_id_".concat(Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)),z=!ie&&Te?{passive:!1}:!1;we(function(){ee(function(){var n=e.open,t=e.getContainer,a=e.showMask,s=e.autofocus,c=t==null?void 0:t();if(k(e),n&&(c&&c.parentNode===document.body&&(R[M]=n),q(),ee(function(){s&&L()}),a)){var h;(h=e.scrollLocker)===null||h===void 0||h.lock()}})}),X(function(){return e.level},function(){k(e)},{flush:"post"}),X(function(){return e.open},function(){var n=e.open,t=e.getContainer,a=e.scrollLocker,s=e.showMask,c=e.autofocus,h=t==null?void 0:t();h&&h.parentNode===document.body&&(R[M]=!!n),q(),n?(c&&L(),s&&(a==null||a.lock())):a==null||a.unLock()},{flush:"post"}),be(function(){var n,t=e.open;delete R[M],t&&(G(!1),document.body.style.touchAction=""),(n=e.scrollLocker)===null||n===void 0||n.unLock()}),X(function(){return e.placement},function(n){n&&(N.value=null)});var L=function(){var t,a;(t=i.value)===null||t===void 0||(a=t.focus)===null||a===void 0||a.call(t)},H=function(t){t.touches.length>1||(E.startPos={x:t.touches[0].clientX,y:t.touches[0].clientY})},F=function(t){if(!(t.changedTouches.length>1)){var a=t.currentTarget,s=t.changedTouches[0].clientX-E.startPos.x,c=t.changedTouches[0].clientY-E.startPos.y;(a===d.value||a===V.value||a===N.value&&We(a,t.target,s,c))&&t.cancelable&&t.preventDefault()}},W=function n(t){var a=t.target;ve(a,de,n),a.style.transition=""},Y=function(t){w("close",t)},U=function(t){t.keyCode===Me.ESC&&(t.stopPropagation(),Y(t))},ne=function(t){var a=e.open,s=e.afterVisibleChange;t.target===O.value&&t.propertyName.match(/transform$/)&&(i.value.style.transition="",!a&&C()&&(document.body.style.overflowX="",d.value&&(d.value.style.left="",d.value.style.width="")),s&&s(!!a))},Z=K(function(){var n=e.placement,t=n==="left"||n==="right",a="translate".concat(t?"X":"Y");return{isHorizontal:t,placementName:a}}),q=function(){var t=e.open,a=e.width,s=e.height,c=Z.value,h=c.isHorizontal,y=c.placementName,g=N.value?N.value.getBoundingClientRect()[h?"width":"height"]:0,D=(h?a:s)||g;ae(t,y,D)},G=function(t,a,s,c){var h=e.placement,y=e.levelMove,g=e.duration,D=e.ease,A=e.showMask;x.forEach(function(_){_.style.transition="transform ".concat(g," ").concat(D),fe(_,de,W);var I=t?s:0;if(y){var J=_e(y,{target:_,open:t});I=t?J[0]:J[1]||0}var Q=typeof I=="number"?"".concat(I,"px"):I,$=h==="left"||h==="top"?Q:"-".concat(Q);$=A&&h==="right"&&c?"calc(".concat($," + ").concat(c,"px)"):$,_.style.transform=I?"".concat(a,"(").concat($,")"):""})},ae=function(t,a,s){if(!ie){var c=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth?xe(!0):0;G(t,a,s,c),f(c)}w("change",t)},f=function(t){var a=e.getContainer,s=e.showMask,c=e.open,h=a==null?void 0:a();if(h&&h.parentNode===document.body&&s){var y=["touchstart"],g=[document.body,d.value,V.value,N.value];c&&document.body.style.overflow!=="hidden"?(t&&l(t),document.body.style.touchAction="none",g.forEach(function(D,A){!D||fe(D,y[A]||"touchmove",A?F:H,z)})):C()&&(document.body.style.touchAction="",t&&o(t),g.forEach(function(D,A){!D||ve(D,y[A]||"touchmove",A?F:H,z)}))}},l=function(t){var a=e.placement,s=e.duration,c=e.ease,h="width ".concat(s," ").concat(c),y="transform ".concat(s," ").concat(c);switch(i.value.style.transition="none",a){case"right":i.value.style.transform="translateX(-".concat(t,"px)");break;case"top":case"bottom":i.value.style.width="calc(100% - ".concat(t,"px)"),i.value.style.transform="translateZ(0)";break}clearTimeout(P),P=setTimeout(function(){i.value&&(i.value.style.transition="".concat(y,",").concat(h),i.value.style.width="",i.value.style.transform="")})},o=function(t){var a=e.placement,s=e.duration,c=e.ease;i.value.style.transition="none";var h,y="width ".concat(s," ").concat(c),g="transform ".concat(s," ").concat(c);switch(a){case"left":{i.value.style.width="100%",y="width 0s ".concat(c," ").concat(s);break}case"right":{i.value.style.transform="translateX(".concat(t,"px)"),i.value.style.width="100%",y="width 0s ".concat(c," ").concat(s),d.value&&(d.value.style.left="-".concat(t,"px"),d.value.style.width="calc(100% + ".concat(t,"px)"));break}case"top":case"bottom":{i.value.style.width="calc(100% + ".concat(t,"px)"),i.value.style.height="100%",i.value.style.transform="translateZ(0)",h="height 0s ".concat(c," ").concat(s);break}}clearTimeout(P),P=setTimeout(function(){i.value&&(i.value.style.transition="".concat(g,",").concat(h?"".concat(h,","):"").concat(y),i.value.style.transform="",i.value.style.width="",i.value.style.height="")})},C=function(){return!Object.keys(R).some(function(t){return R[t]})},k=function(t){var a=t.level,s=t.getContainer;if(!ie){var c=s==null?void 0:s(),h=c?c.parentNode:null;if(x=[],a==="all"){var y=h?Array.prototype.slice.call(h.children):[];y.forEach(function(g){g.nodeName!=="SCRIPT"&&g.nodeName!=="STYLE"&&g.nodeName!=="LINK"&&g!==c&&x.push(g)})}else a&&$e(a).forEach(function(g){document.querySelectorAll(g).forEach(function(D){x.push(D)})})}},p=function(t){w("handleClick",t)},B=T(!1);return X(i,function(){ee(function(){B.value=!0})}),function(){var n,t,a,s=e.width,c=e.height,h=e.open,y=e.prefixCls,g=e.placement;e.level,e.levelMove,e.ease,e.duration,e.getContainer,e.onChange,e.afterVisibleChange;var D=e.showMask,A=e.maskClosable,_=e.maskStyle,I=e.keyboard;e.getOpenCount,e.scrollLocker;var J=e.contentWrapperStyle,Q=e.style,$=e.class,Ne=te(e,Re),le=h&&B.value,De=se(y,(n={},j(n,"".concat(y,"-").concat(g),!0),j(n,"".concat(y,"-open"),le),j(n,$,!!$),j(n,"no-mask",!D),n)),Pe=Z.value.placementName,Ee=g==="left"||g==="top"?"-100%":"100%",ue=le?"":"".concat(Pe,"(").concat(Ee,")");return S("div",b(b({},ge(Ne,["switchScrollingEffect","autofocus"])),{},{tabindex:-1,class:De,style:Q,ref:i,onKeydown:le&&I?U:void 0,onTransitionend:ne}),[D&&S("div",{class:"".concat(y,"-mask"),onClick:A?Y:void 0,style:_,ref:d},null),S("div",{class:"".concat(y,"-content-wrapper"),style:b({transform:ue,msTransform:ue,width:he(s)?"".concat(s,"px"):s,height:he(c)?"".concat(c,"px"):c},J),ref:O},[S("div",{class:"".concat(y,"-content"),ref:N},[(t=m.default)===null||t===void 0?void 0:t.call(m)]),m.handler?S("div",{onClick:p,ref:V},[(a=m.handler)===null||a===void 0?void 0:a.call(m)]):null])])}}}),me=Xe,Ke=["afterVisibleChange","getContainer","wrapperClassName","forceRender"],Ye=["visible","afterClose"],Ue=ce({compatConfig:{MODE:3},inheritAttrs:!1,props:Ce(He(),{prefixCls:"drawer",placement:"left",getContainer:"body",level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",afterVisibleChange:function(){},showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",keyboard:!0,forceRender:!1,autofocus:!0}),emits:["handleClick","close"],slots:["handler"],setup:function(e,r){var w=r.emit,m=r.slots,E=T(null),P=function(d){w("handleClick",d)},O=function(d){w("close",d)};return function(){e.afterVisibleChange;var i=e.getContainer,d=e.wrapperClassName,V=e.forceRender,N=te(e,Ke),x=null;if(!i)return S("div",{class:d,ref:E},[S(me,b(b({},N),{},{open:e.open,getContainer:function(){return E.value},onClose:O,onHandleClick:P}),m)]);var M=!!m.handler||V;return(M||e.open||E.value)&&(x=S(Ve,{visible:e.open,forceRender:M,getContainer:i,wrapperClassName:d},{default:function(L){var H=L.visible,F=L.afterClose,W=te(L,Ye);return S(me,b(b(b({ref:E},N),W),{},{open:H!==void 0?H:e.open,afterVisibleChange:F!==void 0?F:e.afterVisibleChange,onClose:O,onHandleClick:P}),m)}})),x}}}),Ze=Ue,qe=["width","height","visible","placement","mask","wrapClassName","class"],Ge=ke("top","right","bottom","left");ke("default","large");var ye={distance:180},Je=function(){return{autofocus:{type:Boolean,default:void 0},closable:{type:Boolean,default:void 0},closeIcon:v.any,destroyOnClose:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},getContainer:v.any,maskClosable:{type:Boolean,default:void 0},mask:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},wrapStyle:{type:Object,default:void 0},style:{type:Object,default:void 0},class:v.any,wrapClassName:String,size:{type:String},drawerStyle:{type:Object,default:void 0},headerStyle:{type:Object,default:void 0},bodyStyle:{type:Object,default:void 0},contentWrapperStyle:{type:Object,default:void 0},title:v.any,visible:{type:Boolean,default:void 0},width:v.oneOfType([v.string,v.number]),height:v.oneOfType([v.string,v.number]),zIndex:Number,prefixCls:String,push:v.oneOfType([v.looseBool,{type:Object}]),placement:v.oneOf(Ge),keyboard:{type:Boolean,default:void 0},extra:v.any,footer:v.any,footerStyle:{type:Object,default:void 0},level:v.any,levelMove:{type:[Number,Array,Function]},handle:v.any,afterVisibleChange:Function,onAfterVisibleChange:Function,"onUpdate:visible":Function,onClose:Function}},Qe=ce({compatConfig:{MODE:3},name:"ADrawer",inheritAttrs:!1,props:Ce(Je(),{closable:!0,placement:"right",maskClosable:!0,mask:!0,level:null,keyboard:!0,push:ye}),slots:["closeIcon","title","extra","footer","handle"],setup:function(e,r){var w=r.emit,m=r.slots,E=r.attrs,P=T(!1),O=T(!1),i=T(null),d=Be("parentDrawerOpts",null),V=Ae("drawer",e),N=V.prefixCls;oe(!e.afterVisibleChange,"Drawer","`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead"),oe(e.wrapStyle===void 0,"Drawer","`wrapStyle` prop is deprecated, please use `style` instead"),oe(e.wrapClassName===void 0,"Drawer","`wrapClassName` prop is deprecated, please use `class` instead");var x=function(){P.value=!0},M=function(){P.value=!1,ee(function(){z()})};Fe("parentDrawerOpts",{setPush:x,setPull:M}),we(function(){var f=e.visible;f&&d&&d.setPush()}),be(function(){d&&d.setPull()}),X(function(){return e.visible},function(f){d&&(f?d.setPush():d.setPull())},{flush:"post"});var z=function(){var l,o;(l=i.value)===null||l===void 0||(o=l.domFocus)===null||o===void 0||o.call(l)},L=function(l){w("update:visible",!1),w("close",l)},H=function(l){var o;(o=e.afterVisibleChange)===null||o===void 0||o.call(e,l),w("afterVisibleChange",l)},F=K(function(){return e.destroyOnClose&&!e.visible}),W=function(){var l=F.value;!l||e.visible||(O.value=!0)},Y=K(function(){var f=e.push,l=e.placement,o;return typeof f=="boolean"?o=f?ye.distance:0:o=f.distance,o=parseFloat(String(o||0)),l==="left"||l==="right"?"translateX(".concat(l==="left"?o:-o,"px)"):l==="top"||l==="bottom"?"translateY(".concat(l==="top"?o:-o,"px)"):null}),U=K(function(){var f=e.visible,l=e.mask,o=e.placement,C=e.size,k=C===void 0?"default":C,p=e.width,B=e.height;if(!f&&!l)return{};var n={};if(o==="left"||o==="right"){var t=k==="large"?736:378;n.width=typeof p=="undefined"?t:p,n.width=typeof n.width=="string"?n.width:"".concat(n.width,"px")}else{var a=k==="large"?736:378;n.height=typeof B=="undefined"?a:B,n.height=typeof n.height=="string"?n.height:"".concat(n.height,"px")}return n}),ne=K(function(){var f=e.zIndex,l=e.wrapStyle,o=e.mask,C=e.style,k=o?{}:U.value;return b(b(b({zIndex:f,transform:P.value?Y.value:void 0},k),l),C)}),Z=function(l){var o=e.closable,C=e.headerStyle,k=re(m,e,"extra"),p=re(m,e,"title");return!p&&!o?null:S("div",{class:se("".concat(l,"-header"),j({},"".concat(l,"-header-close-only"),o&&!p&&!k)),style:C},[S("div",{class:"".concat(l,"-header-title")},[q(l),p&&S("div",{class:"".concat(l,"-title")},[p])]),k&&S("div",{class:"".concat(l,"-extra")},[k])])},q=function(l){var o,C=e.closable,k=m.closeIcon?(o=m.closeIcon)===null||o===void 0?void 0:o.call(m):e.closeIcon;return C&&S("button",{key:"closer",onClick:L,"aria-label":"Close",class:"".concat(l,"-close")},[k===void 0?S(je,null,null):k])},G=function(l){var o;if(O.value&&!e.visible)return null;O.value=!1;var C=e.bodyStyle,k=e.drawerStyle,p={},B=F.value;return B&&(p.opacity=0,p.transition="opacity .3s"),S("div",{class:"".concat(l,"-wrapper-body"),style:b(b({},p),k),onTransitionend:W},[Z(l),S("div",{key:"body",class:"".concat(l,"-body"),style:C},[(o=m.default)===null||o===void 0?void 0:o.call(m)]),ae(l)])},ae=function(l){var o=re(m,e,"footer");if(!o)return null;var C="".concat(l,"-footer");return S("div",{class:C,style:e.footerStyle},[o])};return function(){var f;e.width,e.height;var l=e.visible,o=e.placement,C=e.mask,k=e.wrapClassName,p=e.class,B=te(e,qe),n=C?U.value:{},t=C?"":"no-mask",a=b(b(b(b({},E),ge(B,["size","closeIcon","closable","destroyOnClose","drawerStyle","headerStyle","bodyStyle","title","push","wrapStyle","onAfterVisibleChange","onClose","onUpdate:visible"])),n),{},{onClose:L,afterVisibleChange:H,handler:!1,prefixCls:N.value,open:l,showMask:C,placement:o,class:se((f={},j(f,p,p),j(f,k,!!k),j(f,t,!!t),f)),style:ne.value,ref:i});return S(Ze,a,{handler:e.handle?function(){return e.handle}:m.handle,default:function(){return G(N.value)}})}}}),tt=Le(Qe);export{tt as D};
