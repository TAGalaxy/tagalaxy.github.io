import{P as h}from"./index.f6511e11.js";import{aw as A,a as I,cE as E,v as a,s as y,ay as s,o as n,j as B,z as u,n as r,i,h as c,l,t as F}from"./index.444718ea.js";import{C as D,a as k}from"./index.aea3943d.js";import{u as w}from"./upload.19158cfd.js";import{h as P}from"./header.d801b988.js";import"./index.ad5cd489.js";import"./index.51c956a1.js";import"./useSize.18a619e6.js";import"./eagerComputed.1b925bf8.js";import"./useWindowSizeFn.115518f2.js";import"./useContentViewHeight.ebe53333.js";import"./ArrowLeftOutlined.baf9cf25.js";import"./index.001e40f9.js";import"./transButton.fbee1833.js";import"./index.cc93c6bb.js";import"./useFlexGapSupport.0f4e02b8.js";import"./index.6087afbc.js";import"./_baseIteratee.06432f6a.js";import"./get.066b7822.js";import"./DeleteOutlined.d08d062e.js";import"./index.8b6de8b6.js";import"./useRefs.d5715d6d.js";import"./Form.a567a65a.js";import"./Col.b3dea441.js";import"./index.aeb68d41.js";import"./FullscreenOutlined.1ce89a14.js";import"./base64Conver.08b9f4ec.js";const $=I({components:{PageWrapper:h,CropperImage:D,CollapseContainer:E,CropperAvatar:k},setup(){var t;const e=a(""),m=a(""),d=a(""),C=a(""),v=y(),g=a(((t=v.getUserInfo)==null?void 0:t.avatar)||"");function _({imgBase64:p,imgInfo:f}){e.value=f,m.value=p}function o({imgBase64:p,imgInfo:f}){d.value=f,C.value=p}return{img:P,info:e,circleInfo:d,cropperImg:m,circleImg:C,handleCropend:_,handleCircleCropend:o,avatar:g,uploadApi:w}}}),N={class:"container p-4"},S={class:"cropper-container mr-10"},V=["src"],W={key:0},U={class:"container p-4"},j={class:"cropper-container mr-10"},z=["src"],b={key:0};function q(e,m,d,C,v,g){const _=s("CropperAvatar"),o=s("CollapseContainer"),t=s("CropperImage"),p=s("PageWrapper");return n(),B(p,{title:"\u56FE\u7247\u88C1\u526A\u793A\u4F8B",content:"\u9700\u8981\u5F00\u542F\u6D4B\u8BD5\u63A5\u53E3\u670D\u52A1\u624D\u80FD\u8FDB\u884C\u4E0A\u4F20\u6D4B\u8BD5\uFF01"},{default:u(()=>[r(o,{title:"\u5934\u50CF\u88C1\u526A"},{default:u(()=>[r(_,{uploadApi:e.uploadApi,value:e.avatar},null,8,["uploadApi","value"])]),_:1}),r(o,{title:"\u77E9\u5F62\u88C1\u526A",class:"my-4"},{default:u(()=>[i("div",N,[i("div",S,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCropend,style:{width:"40vw"}},null,8,["src","onCropend"])]),e.cropperImg?(n(),c("img",{key:0,src:e.cropperImg,class:"croppered",alt:""},null,8,V)):l("",!0)]),e.cropperImg?(n(),c("p",W,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.info),1)):l("",!0)]),_:1}),r(o,{title:"\u5706\u5F62\u88C1\u526A"},{default:u(()=>[i("div",U,[i("div",j,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCircleCropend,style:{width:"40vw"},circled:""},null,8,["src","onCropend"])]),e.circleImg?(n(),c("img",{key:0,src:e.circleImg,class:"croppered"},null,8,z)):l("",!0)]),e.circleImg?(n(),c("p",b,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.circleInfo),1)):l("",!0)]),_:1})]),_:1})}var de=A($,[["render",q],["__scopeId","data-v-9d983438"]]);export{de as default};
