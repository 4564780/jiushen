import{s as w}from"../vendors/vendor-stable.LD58Pbb3.js";import{u as _,ix as c,it as v,iy as g,a as C,I as y,af as f,Y as b,aa as B,q as I}from"./main.C8q1iJMV.js";import{D as T}from"./DeviceIconIndex.DA6Z-3Mk.js";import{l as D,f as F,o as N,p as n}from"../vendors/vendor-@vue.DNlpgob2.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";import"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";const S="_titleFromChannel_92vgc_17",U="_title_92vgc_17",R="_downloadContent_92vgc_28",x="_downloadItem_92vgc_38",A="_appIcon_92vgc_45",O="_appName_92vgc_48",V="_wrapperChannel_92vgc_61",k="_channelTip1_92vgc_66",z="_channelTip2_92vgc_69",L="_wrapperUrlslistByChannel_92vgc_77",a={titleFromChannel:S,title:U,downloadContent:R,downloadItem:x,appIcon:A,appName:O,wrapperChannel:V,channelTip1:k,channelTip2:z,wrapperUrlslistByChannel:L},[M]=I("download-app-dialog"),W=D({name:M,setup(){const{dialogsStates:{downloadAppDialog:s}}=_(),{downloadRewardsAmount:t,isDownloadRewardsOn:r,isShowRewardsConditionLiteral:d}=w(c()),{setOpenOnce:m}=c(),p=v(),{appList:l}=g(),{t:e}=C(),h=async()=>l.value[p.clickCount%l.value.length],u=async()=>{const o=await h();p.download(o)},i=F(()=>{var o;return l.value.length&&(o=l.value[0].version)!=null?o:""});return N(()=>{m()}),()=>n(B,{show:s.show,"onUpdate:show":o=>s.show=o,showFooterButton:!1},{title:()=>n("div",{class:a.titleFromChannel},[n(y,{src:"/lobby_asset/common/common/home/comm_icon_zyts.png"},null),n("span",{class:a.title},[e("lobby.rightBar.titleFromChannel")])]),default:()=>n("div",{class:a.downloadContent},[n("div",{class:a.wrapperChannel},[n("span",{class:a.channelTip1},[e("lobby.rightBar.channelTip1")]),!!t.value&&r.value&&n("span",{class:a.channelTip2},[e("lobby.rightBar.channelTip2"),n("b",null,[t.value]),e("lobby.rightBar.channelTip3"),d.value&&e("lobby.rightBar.channelTip5")])]),n("div",{class:a.wrapperUrlslistByChannel},[n(f,null,{default:()=>[n(b,{type:"primary",size:"large",class:a.downloadItem,onClick:()=>{u()}},{default:()=>[n(T,null,null),n("span",{class:a.appName},[e("lobby.rightBar.startInstall"),i.value?"(V".concat(i.value,")"):""])]})],content:()=>{if(r.value&&t.value)return n("span",null,[t.value])}})])])})}});export{W as default};
//# sourceMappingURL=AppDialogIndex.Do6G0wq_.js.map
