import{aE as m,a as d,az as k,D as V,v as B,B as C,cs as w,dL as x,Y as N,q as U,gF as W,I as u,bG as A,s as j}from"./main.C8q1iJMV.js";import{d as O,s as p}from"../vendors/vendor-stable.LD58Pbb3.js";import{e as q}from"../vendors/vendor-default.CjiYZF7Q.js";import{r as F,l as $,p as e,F as H,v as b,C as R}from"../vendors/vendor-@vue.DNlpgob2.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";const z=()=>m.request({url:"/user/userDeviceList",method:"POST"}),G=t=>m.request({url:"/user/deluserDevice",method:"POST",data:t}),P=O("deviceInfo",()=>{const t=F([]);return{deviceInfoList:t,getDeviceInfoData:async()=>{const[f,i]=await q(z());!f&&i&&(t.value=i.data.data)}}}),E="_main_v90ah_17",M="_deviceWrapper_v90ah_22",Y="_userAndSiteInfo_v90ah_29",J="_siteLogo_v90ah_41",K="_userInfo_v90ah_44",Q="_currentDevice_v90ah_63",X="_historyDevice_v90ah_64",Z="_deviceTitle_v90ah_71",ee="_hasIcon_v90ah_84",ne="_deleteIcon_v90ah_90",oe="_deviceContentWrapper_v90ah_95",se="_picBg_v90ah_104",te="_infoList_v90ah_116",ce="_infoItem_v90ah_121",ie="_infoLabel_v90ah_130",ae="_infoValue_v90ah_137",le="_saveImgBtn_v90ah_142",re="_setIdleTime_v90ah_152",ve="_value_v90ah_169",de="_valueIcon_v90ah_175",fe="_btn_v90ah_181",ue="_fullScreenLoading_v90ah_191",n={main:E,deviceWrapper:M,userAndSiteInfo:Y,siteLogo:J,userInfo:K,currentDevice:Q,historyDevice:X,deviceTitle:Z,hasIcon:ee,deleteIcon:ne,deviceContentWrapper:oe,picBg:se,infoList:te,infoItem:ce,infoLabel:ie,infoValue:ae,saveImgBtn:le,setIdleTime:re,value:ve,valueIcon:de,btn:fe,fullScreenLoading:ue};function pe(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!R(t)}const[Ie]=U("pages-device-info"),ke=$({name:Ie,setup(){const{t}=d(),I=k(),f=V(),i=P(),{userInfos:l}=p(I),{siteInfos:_}=p(f),{deviceInfoList:y}=p(i),g=o=>{var r;const s=(r=_.value)==null?void 0:r.timeZone,c=s==null?void 0:s.split(" ")[1],a=Number(c.split(":")[0]),v=a>0?"+"+a:a;return"(UTC".concat(v,") ").concat(A(o))},h=()=>{const{t:o}=d(),c=document.querySelector(".deviceScroll");c.style.backgroundColor=window.getComputedStyle(document.body).backgroundColor;const a=o("lobby.center.deviceInfo.deviceImg");W(c,a)},L=o=>{j({title:t("lobby.common.tips.title"),message:t("lobby.center.deviceInfo.deleteTipContent"),cancelButtonText:t("lobby.promote.cancel"),confirmButtonText:t("lobby.center.deviceInfo.okBtnText"),showCancelButton:!0,onConfirm:()=>{G({id:String(o),idleTime:0}).then(s=>{s&&(i==null||i.getDeviceInfoData())})}})},D=o=>o.slice().sort((c,a)=>{var v,r;return c.UserToken===((v=l.value)==null?void 0:v.session_key)?-1:a.UserToken===((r=l.value)==null?void 0:r.session_key)?1:0}),T=o=>{var c,a,v,r;const{t:s}=d();return e("div",{class:[o.UserToken===((c=l.value)==null?void 0:c.session_key)?n.currentDevice:n.historyDevice]},[e("p",{class:[n.deviceTitle,o.UserToken!==((a=l.value)==null?void 0:a.session_key)?n.hasIcon:""]},[o.UserToken===((v=l.value)==null?void 0:v.session_key)?s("lobby.center.deviceInfo.currentDevice"):s("lobby.center.deviceInfo.historyDevice"),o.UserToken!==((r=l.value)==null?void 0:r.session_key)&&e(u,{class:n.deleteIcon,onClick:()=>L(o.Id),src:"/lobby_asset/common/web/common/comm_icon_del.svg"},null)]),e("div",{class:n.deviceContentWrapper},[e("div",{class:n.picBg},[e(u,{src:"/lobby_asset/common/web/common/input_icon_sj.svg",lazy:!1},null)]),e("div",{class:n.infoList},[e("div",{class:n.infoItem},[e("p",{class:n.infoLabel},[s("lobby.center.deviceInfo.application")]),e("p",{class:n.infoValue},[o.device])]),e("div",{class:n.infoItem},[e("p",{class:n.infoLabel},[s("lobby.center.deviceInfo.version")]),e("p",{class:n.infoValue},[o.AppVersion])]),e("div",{class:n.infoItem},[e("p",{class:n.infoLabel},[s("lobby.center.deviceInfo.deviceType")]),e("p",{class:n.infoValue},[decodeURIComponent(o.DeviceModel)])]),e("div",{class:n.infoItem},[e("p",{class:n.infoLabel},[s("lobby.center.deviceInfo.os")]),e("p",{class:n.infoValue},[o.AppSystem])]),e("div",{class:n.infoItem},[e("p",{class:n.infoLabel},[s("lobby.center.deviceInfo.ip")]),e("p",{class:n.infoValue},["".concat(o.Ip," ").concat(o.Area)])]),e("div",{class:n.infoItem},[e("p",{class:n.infoLabel},[s("lobby.center.deviceInfo.loginTime")]),e("p",{class:n.infoValue},[g(o.LoginTime)])])])])])},S=()=>{const{t:o}=d(),s=y.value||[];return s.length>0?D(s).map(c=>T(c)):e("div",{class:n.currentDevice},[e("p",{class:n.deviceTitle},[o("lobby.center.deviceInfo.currentDevice")]),e("div",{class:n.deviceContentWrapper},[e("div",{class:n.picBg},[e(u,{src:"/lobby_asset/common/web/common/input_icon_sj.svg"},null)]),e("div",{class:n.infoList},[e("div",{class:n.infoItem},[e("p",{class:n.infoLabel},[o("lobby.center.deviceInfo.application")]),e("p",{class:n.infoValue},null)]),e("div",{class:n.infoItem},[e("p",{class:n.infoLabel},[o("lobby.center.deviceInfo.version")]),e("p",{class:n.infoValue},null)]),e("div",{class:n.infoItem},[e("p",{class:n.infoLabel},[o("lobby.center.deviceInfo.deviceType")]),e("p",{class:n.infoValue},null)]),e("div",{class:n.infoItem},[e("p",{class:n.infoLabel},[o("lobby.center.deviceInfo.os")]),e("p",{class:n.infoValue},null)]),e("div",{class:n.infoItem},[e("p",{class:n.infoLabel},[o("lobby.center.deviceInfo.networkType")]),e("p",{class:n.infoValue},null)]),e("div",{class:n.infoItem},[e("p",{class:n.infoLabel},[o("lobby.center.deviceInfo.ip")]),e("p",{class:n.infoValue},null)]),e("div",{class:n.infoItem},[e("p",{class:n.infoLabel},[o("lobby.center.deviceInfo.loginTime")]),e("p",{class:n.infoValue},null)])])])])};return i==null||i.getDeviceInfoData(),()=>{let o;return e("div",{class:n.main},[e(B,null,{header:()=>e(C,null,{default:()=>e(H,null,[t("lobby.center.deviceInfo.title")])}),default:()=>e(w,{direction:"y",scrollbarTrigger:"hover",class:"deviceScroll"},{default:()=>{var s,c;return[e("div",{class:[n.deviceWrapper,"theme-box-shadow"]},[e("div",{class:n.userAndSiteInfo},[e(x,{class:n.siteLogo,canToLink:!1},null),e("div",{class:n.userInfo},[e("p",null,[e("span",null,[b("ID:")]),(s=l.value)==null?void 0:s.username]),e("p",null,[e("span",null,[t("lobby.center.deviceInfo.userAccount"),b(":")]),(c=l.value)==null?void 0:c.platfromid])])]),S()])]}})}),e("div",{class:n.saveImgBtn},[e(N,{class:n.btn,onClick:()=>h()},pe(o=t("lobby.center.deviceInfo.saveImg"))?o:{default:()=>[o]})])])}}});export{ke as default};
//# sourceMappingURL=DeviceInfoIndex.DryMugFw.js.map
