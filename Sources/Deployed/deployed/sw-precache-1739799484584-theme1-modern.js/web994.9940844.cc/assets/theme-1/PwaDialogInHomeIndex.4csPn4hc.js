import{a as b,iu as P,aK as y,iD as B,ix as h,hC as C,iw as w,I as S,cm as T,e$ as k,aa as z,q as A,t as x,eW as W}from"./main.C8q1iJMV.js";import{u as O,I as V}from"./InstallPWAStatusButtonIndex.DptMwcRj.js";import{I as H}from"./InstallAppButtonsIndex.DIIef9VG.js";import{l as L,f as q,p as o,F as l}from"../vendors/vendor-@vue.DNlpgob2.js";import"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-stable.LD58Pbb3.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";const F="_download_1n32z_17",M="_info_1n32z_23",N="_title_1n32z_34",t={download:F,info:M,title:N,"sub-info":"_sub-info_1n32z_45","sub-info-inner":"_sub-info-inner_1n32z_51","download-item":"_download-item_1n32z_58"},[K]=A("download-main-dialog-pwa"),no=L({name:K,setup(){const{t:s}=b(),{downloadInfo:n}=P(),{isIos:u}=y(),{setDisplayMode:c}=B(),{channelInfo:e}=h(),{visible:r,openOptions:f,onDialogOpen:v,onDialogClose:g}=C("downloadPWADialogInHome"),{downloadStatus:_,downloadPercentage:I,tryToDownload:d,isPWASupported:i,initPwaInstallView:D}=O(),p=q(()=>u?e==null?void 0:e.iosBackupLink:e==null?void 0:e.androidBackupLink),m=()=>o(l,null,[(n.value.innerTitle||n.value.title)&&o(l,null,[n.value.innerTitle?o(x,{html:W(n.value.innerTitle),format:a=>a},null):n.value.title])]);return v(()=>{var a;c(void 0),D(),w.pwaViewOpen(),!u&&(a=f.value)!=null&&a.autoPlay&&setTimeout(()=>{d(!0)})}),g(()=>{w.pwaViewClose()}),()=>o(z,{show:r.value,"onUpdate:show":a=>r.value=a,class:t.download},{default:()=>[o("div",{class:t.info},[n.value.logo?o(S,{src:n.value.logo},null):null,o("div",{class:t.title},[i.value?s("lobby.rightBar.P2A"):m()])]),o(l,null,[i.value?o("div",{class:t["sub-info-inner"]},[m()]):o("div",{class:t["sub-info"]},[s("lobby.rightBar.notSupportP2aTip")])]),o(l,null,[i.value?o(V,{downloadStatus:_.value,tryToDownload:d,downloadPercentage:I.value,showPointer:!1},null):o(l,null,[p.value?o(T,{type:"primary",size:"large",class:t["download-item"],onClick:()=>{k(p.value)}},{default:()=>[o("span",null,[s("lobby.rightBar.P2A")])]}):o(H,{type:"Default"},null)])])]})}});export{no as default};
//# sourceMappingURL=PwaDialogInHomeIndex.4csPn4hc.js.map
