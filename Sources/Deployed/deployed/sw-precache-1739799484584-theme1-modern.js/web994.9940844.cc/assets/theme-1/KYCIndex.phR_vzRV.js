import{l as w,a as S,m as O,u as W,p as H,q as L,B as j,S as V,O as D,I as s,t as N,v as U,r as $,w as d,E as M,b as G,x as P,y as q}from"./main.C8q1iJMV.js";import{a as A,b as F}from"./kyc.nmkNmTDQ.js";import{u as J,o as Q}from"../vendors/vendor-stable.LD58Pbb3.js";import{e as X}from"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import{R as Z,a as ee}from"./RadioGroup.Cw60yR2H.js";import{g as b}from"../vendors/vendor-lodash.BYdGDldS.js";import{l as oe,r as m,f as ce,p as e,B as ne,C as ae,b as se,d as re}from"../vendors/vendor-@vue.DNlpgob2.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";const te="_itemTitle_cg5ph_26",le="_kycContainer_cg5ph_32",ie="_body_cg5ph_35",me="_itemWrap_cg5ph_42",ue="_selectWrap_cg5ph_48",pe="_docTypeGroup_cg5ph_64",de="_countryIcon_cg5ph_85",_e="_uploadWarp_cg5ph_90",ye="_uploadBody_cg5ph_93",be="_entry_cg5ph_93",ge="_card_cg5ph_112",fe="_bgBorder_cg5ph_117",he="_bgCard_cg5ph_132",ve="_bgIcon_cg5ph_142",Ce="_desc_cg5ph_152",Ie="_shootHint_cg5ph_157",ke="_shootErrExample_cg5ph_163",we="_icon_cg5ph_194",Ke="_rightIcon_cg5ph_204",Ye="_errorIcon_cg5ph_207",o={itemTitle:te,kycContainer:le,body:ie,itemWrap:me,selectWrap:ue,docTypeGroup:pe,countryIcon:de,uploadWarp:_e,uploadBody:ye,entry:be,card:ge,bgBorder:fe,bgCard:he,bgIcon:ve,desc:Ce,shootHint:Ie,shootErrExample:ke,icon:we,rightIcon:Ke,errorIcon:Ye};function ze(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ae(t)}const[Ee]=L("pages-security-kyc"),Ne=oe({name:Ee,setup(){const t=m("PH"),_=m(w.IDCard),l=m(""),K=m(null),{t:a}=S(),Y=J(),{language:g}=O(),{closeAll:z}=W(),f={map:{zh:"zh-CN",ja:"jp"},supportList:["en","zh-CN","zh-HK","jp","th","es","pt","fr","id","de","kr","vi"]},h=[{icon:"/lobby_asset/common/common/_sprite/flag_4x3_Philippines.png",label:a("lobby.center.KYC.countryObject.ph"),key:"PH"},{icon:"/lobby_asset/common/common/_sprite/flag_4x3_Brazil.png",label:a("lobby.center.KYC.countryObject.br"),key:"BR"}],v=f.map[g]||g,E=f.supportList.includes(v)?v:"en",T=[{key:w.IDCard,label:a("lobby.center.KYC.docTypeObject.idCard")}],y=m(!1),u=m(""),C=ce(()=>h.find(n=>n.key===t.value));H(()=>{u.value=b(Y,"query.redirect",""),setTimeout(()=>{z()})}),Q((n,c,r)=>{if(y.value)return r(!1);l.value?(r(!1),window.confirm(a("lobby.center.KYC.leave"))&&(l.value="")):r()});const I=(n=!0)=>{y.value=!1;let c={name:M.HOME};try{u.value&&(c=JSON.parse(window.atob(decodeURIComponent(u.value))))}catch(r){console.error("redirectString parse error ".concat(u.value))}G().replace(c).then(()=>{n&&P()})},x=async n=>{try{const[c,r]=await X(F({countryCode:t.value,transactionId:n}));if(c)throw new Error("Server Error ".concat(c));const i=b(r,"data.data.ekycResult");if(!i)throw new Error("Result Is Invalid");if(i!==q.Success)throw new Error(i.toString());I()}catch(c){d("".concat(a("lobby.center.KYC.error"),"(").concat(c,")"))}},p=()=>window.removeEventListener("message",k),k=async n=>{if(!l.value){p();return}const c=n.data,{state:r,code:i}=n.data;if(!(!r||!i)){console.log("KYC message response:",c),p();try{i===1e3&&x(r),l.value=""}catch(R){d("Unknown Error In Response ".concat(R))}}},B=async()=>{if(!l.value)try{const{data:{data:n}}=await A({metaInfo:"MOB_H5",countryCode:t.value,certType:_.value,sceneCode:"register",h5ModeConfig:{completeCallbackUrl:"".concat(location.origin,"/pages/kyc/index.html"),interruptCallbackUrl:"".concat(location.origin,"/pages/kyc/index.html"),locale:E,isIframe:"Y"}}),c=b(n,"clientCfg","");if(!c)throw new Error("Server Error Config Is Invalid!");console.log("KYC data clientCfg",n);const r="https://hk-production-cdn.zoloz.net/page/realid-fe/index.html";l.value=r+"?clientcfg=".concat(encodeURIComponent(c)),console.log("KYC zolozurl",l.value),window.addEventListener("message",k),se(p),re(p)}catch(n){const{errorCode:c}=$(n);if(c==41034050){d({type:"success",message:a("lobby.center.KYC.alreadyDone")}),I(!1);return}d.error(n.message,"flush")}};return()=>e(U,null,{header:()=>e(j,{useBack:!y.value},{default:a("lobby.center.KYC.tab")}),default:()=>{let n;return e("div",{class:o.kycContainer},[l.value&&e(ne,{to:"body"},{default:()=>[e("iframe",{ref:K,src:l.value,allow:"microphone;camera;midi;encrypted-media;gyroscope;accelerometer;",class:"kyc-iframe"},null)]}),e("div",{class:o.body},[e("div",{class:o.itemWrap},[e("span",{class:o.itemTitle},[a("lobby.center.KYC.nationality")]),e(V,{showSearch:!0,size:"large",offset:[0,0],wrapperClass:o.selectWrap,modelValue:t.value,"onUpdate:modelValue":c=>t.value=c},{default:()=>[h.map(c=>e(D,{class:o.selectOption,value:c.key,key:c.key,label:c.label},{default:()=>[e(s,{class:o.countryIcon,src:c.icon},null),c.label]}))],prefix:()=>!t.value||!C.value?null:e(s,{class:o.countryIcon,src:C.value.icon},null)})]),e("div",{class:o.itemWrap},[e("span",{class:o.itemTitle},[a("lobby.center.KYC.docType")]),e(Z,{class:o.docTypeGroup,modelValue:_.value,"onUpdate:modelValue":c=>_.value=c,name:"docType"},ze(n=T.map(c=>e(ee,{class:o.groupItem,key:c.key,value:c.key},{default:()=>[c.label],icon:()=>e(s,{class:"kyc_group_icon_checked",src:"/lobby_asset/common/web/common/comm_icon_gou.svg"},null)})))?n:{default:()=>[n]})]),e("div",{class:o.uploadWarp},[e("div",{class:o.itemTitle},[a("lobby.center.KYC.uploadTitle")]),e("div",{class:o.uploadBody},[e("div",{class:o.entry,onClick:B},[e("div",{class:o.card},[e(s,{class:o.bgBorder,src:"/lobby_asset/common/web/common/comm_img_kycrz_sck.svg"},null),e(s,{class:o.bgCard,src:"/lobby_asset/common/common/common/comm_img_kycrz_sfz.png"},null),e(s,{class:o.bgIcon,src:"/lobby_asset/common/common/common/icon_kycrz_sczj.png"},null)]),e("span",{class:o.desc},[a("lobby.center.KYC.uploadButtonText")])]),e("div",{class:o.shootHint},[e(N,{html:a("lobby.center.KYC.hintContent")},null)]),e("div",{class:o.shootErrExample},[e("div",null,[e(s,{class:o.card,src:"/lobby_asset/common/common/common/comm_img_kycrz_sfz01.png"},null),e(s,{class:[o.icon,o.rightIcon],src:"/lobby_asset/common/web/common/comm_icon_pay_1.png"},null),e("span",null,[a("lobby.center.KYC.example.right")])]),e("div",null,[e(s,{class:o.card,src:"/lobby_asset/common/common/common/comm_img_kycrz_sfz02.png"},null),e(s,{class:[o.icon,o.errorIcon],src:"/lobby_asset/common/web/common/comm_icon_pay_2.png"},null),e("span",null,[a("lobby.center.KYC.example.rotate")])]),e("div",null,[e(s,{class:o.card,src:"/lobby_asset/common/common/common/comm_img_kycrz_sfz03.png"},null),e(s,{class:[o.icon,o.errorIcon],src:"/lobby_asset/common/web/common/comm_icon_pay_2.png"},null),e("span",null,[a("lobby.center.KYC.example.vague")])]),e("div",null,[e(s,{class:o.card,src:"/lobby_asset/common/common/common/comm_img_kycrz_sfz04.png"},null),e(s,{class:[o.icon,o.errorIcon],src:"/lobby_asset/common/web/common/comm_icon_pay_2.png"},null),e("span",null,[a("lobby.center.KYC.example.exposure")])])])])])])])}})}});export{Ne as default};
//# sourceMappingURL=KYCIndex.phR_vzRV.js.map
