import{u as m,eZ as u,I as l,cs as p,e_ as _,W as d,q as y}from"./main.C8q1iJMV.js";import{b as v}from"../vendors/vendor-stable.LD58Pbb3.js";import{l as b,f,p as e,C as k}from"../vendors/vendor-@vue.DNlpgob2.js";import"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";const h="_scroll_46yuk_26",S="_header_46yuk_30",C="_title_46yuk_47",o={"service-online-list":"_service-online-list_46yuk_17",scroll:h,header:S,"btn-close":"_btn-close_46yuk_36",title:C,"online-item":"_online-item_46yuk_56","online-icon":"_online-icon_46yuk_63"};function O(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!k(s)}const[g]=y("service-online-list"),P=b({name:g,setup(){const{dialogsStates:{serviceOnlineList:s},close:i}=m(),{t:c}=v(),{serviceInfo:r}=u(),a=f(()=>{var t;return(t=r.customer.onlineCustomers)!=null?t:[]});return()=>{let t;return e(d,{class:o["service-online-list"],show:s.show,"onUpdate:show":n=>s.show=n,position:"bottom",closeOnClickOverlay:!0},{default:()=>[e("header",{class:o.header},[e("span",{class:o["btn-close"],onClick:()=>i("serviceOnlineList")},[e(l,{src:"/lobby_asset/common/web/common/comm_icon_fh.svg"},null)]),e("p",{class:[o.title]},[c("lobby.service.onlineService")])]),e(p,{class:o.scroll},O(t=a.value.map(n=>e("div",{class:o["online-item"],key:n.customerCode,onClick:()=>_(n)},[e(l,{src:"/lobby_asset/common/common/support/img_kf_kf01.png",class:o["online-icon"]},null),e("span",null,[n.customerName])])))?t:{default:()=>[t]})]})}}});export{P as default};
//# sourceMappingURL=ServiceOnlineListIndex.ConWHvxn.js.map
