import{a as C,cg as A,az as v,R as L,g0 as N,cs as P,I as S,q as $,g1 as x,e$ as M,w,p as j,Y as R,S as D,O as V,dM as I,bG as q,aG as B}from"./main.C8q1iJMV.js";import{i as E,u as G,j as U}from"./index.BQg7GMmP.js";import{s as T}from"../vendors/vendor-stable.LD58Pbb3.js";import{R as F,Q as z}from"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import{l as O,r as k,f as h,p as a,F as Q,w as H,C as J}from"../vendors/vendor-@vue.DNlpgob2.js";const K="_socialmedia_1r7wg_17",Y="_shareIcon_1r7wg_32",W="_shareText_1r7wg_57",d={socialmedia:K,"media-item":"_media-item_1r7wg_25",shareIcon:Y,"media-item-icon":"_media-item-icon_1r7wg_42",shareText:W},[X]=$("socialmedia"),Z=O({name:X,props:{currentLink:{type:String,default:location.origin}},setup(r){const{t:p}=C(),l=A(),{userInfos:c,hasLogined:b}=T(v()),i=k();E().then(o=>{i.value=o});const _=h(()=>{var t,s;const o=b.value?p("lobby.promote.promote.shareText",{account:((t=c==null?void 0:c.value)==null?void 0:t.platfromid)||""}):"";return((s=i.value)==null?void 0:s.title)||o}),g=o=>{let e="";x()?e=o.iosAddr:e=o.andriodAddr;const t=encodeURIComponent(r.currentLink),s=_.value?encodeURIComponent(_.value+"\n"):"";switch(o.name.toLowerCase()){case"facebook":x()?e+="?link=".concat(t):e+="?u=".concat(t);break;case"twitter":e+="?text=".concat(s,"&url=").concat(t);break;case"x":e+="?text=".concat(s,"&url=").concat(t);break;case"whatsapp":e+="?text=".concat(s+t);break;case"line":e+="?text=".concat(s+t);break;case"telegram":e+="?text=".concat(s,"&url=").concat(t);break;case"threads":e+="?text=".concat(s+t);break}M(e)},f=()=>{var e,t;const o={title:_.value,text:((e=i.value)==null?void 0:e.slogan)||"",url:r.currentLink};if(navigator.share)navigator.share(o);else if((t=window.jsBridge)!=null&&t.share)try{window.jsBridge.share(JSON.stringify(o))}catch(s){w.error({message:s})}else w.error({message:p("lobby.promote.promote.notSupportShare")})};L({navigatorShare:f});const y=h(()=>{var o;return N.isActivated?((o=l.socialMediaList)==null?void 0:o.filter(e=>e.name.toLowerCase()=="telegram"))||[]:l.socialMediaList||[]});return()=>a(Q,null,[a(P,{direction:"x",scrollable:!0,draggable:!0},{default:()=>{var o;return[a("div",{class:d.socialmedia},[a("div",{class:d["media-item"],onClick:f},[a("span",{class:d.shareIcon},[a(S,{width:"0.35rem",src:"/lobby_asset/common/web/promotion/icon_tg_share.svg"},null)]),a("span",{class:d.shareText},[p("lobby.promote.promote.downloadImageName")])]),(o=y.value)==null?void 0:o.map(e=>a("div",{class:d["media-item"],onClick:()=>g(e),key:e.id},[a("span",{class:d["media-item-icon"]},[a(S,{src:e.icon,draggable:!1},null)]),a("span",{class:d.shareText},[e.name])]))])]}})])}}),ee="_code_1u10w_32",oe="_link_1u10w_52",ae="_copy_1u10w_88",te="_members_1u10w_113",n={"share-module":"_share-module_1u10w_17","share-info":"_share-info_1u10w_20","qr-code":"_qr-code_1u10w_25",code:ee,"link-box":"_link-box_1u10w_52","link-title":"_link-title_1u10w_55",link:oe,"link-select":"_link-select_1u10w_63",copy:ae,"member-info":"_member-info_1u10w_96",members:te,"invite-code":"_invite-code_1u10w_116","link-option":"_link-option_1u10w_127"};function se(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!J(r)}const[re]=$("share-module"),pe=O({name:re,setup(){const{t:r}=C(),p=k(),l=G();j(()=>{v().hasLogined&&l.getAgentPromotion()});const{userInfos:c}=T(v()),b=h(()=>{var e;const{linkList:o}=(e=l.agentPromotion)!=null?e:{};return o!=null?o:[{url:window.location.origin,select:!0}]}),i=h(()=>{var e,t;return(t=(e=b.value)==null?void 0:e.find(s=>s.select))==null?void 0:t.url});H(()=>i.value,o=>{v().hasLogined?o!=window.location.origin&&l.getPromoteImage(o):l.getPromoteImage(o)},{immediate:!0});const _=o=>{var t;const{linkList:e}=(t=l.agentPromotion)!=null?t:{};e==null||e.forEach(s=>{s.select=!1,s.url==o.value&&(s.select=!0)}),U({domain:o.value})},g=k(!1),f=async()=>{var s,m,u;const o=l.promoteImageData.completeImg,e="".concat((s=c==null?void 0:c.value)==null?void 0:s.platfromid,"_").concat(q(new Date().getTime(),"md"),"_").concat(r("lobby.promote.promote.downloadImageName")),t=o?"data:image/png;base64,".concat(o):"";g.value=!0,await z(t,"".concat(e,".png")),g.value=!1,!((u=(m=B)==null?void 0:m.package)!=null&&u.isLite)&&w({type:"success",message:r("lobby.promote.promote.downloadSuccessTips")})};return L({navigatorShare:()=>{var o,e;(e=(o=p.value)==null?void 0:o.navigatorShare)==null||e.call(o)}}),()=>{var s;let o;const{inviteCode:e,directMember:t}=(s=l.agentPromotion)!=null?s:{};return a("div",{class:n["share-module"]},[a("div",{class:n["share-info"]},[a("div",{class:n["qr-code"]},[a("div",{class:n.code},[a(F,{value:i.value},null)]),a(R,{type:"primary",disabled:g.value,loading:g.value,onClick:f},se(o=r("lobby.promote.promote.clickSave"))?o:{default:()=>[o]})]),a("div",{class:[n["link-box"],"link-box"]},[a("div",{class:[n["link-title"],"link-title"]},[a("span",null,[r("lobby.promote.promote.myLink")])]),a("div",{class:[n.link,"link"]},[a(D,{size:"large",modelValue:i.value,"onUpdate:modelValue":m=>i.value=m,wrapperClass:[n["link-select"],"link-select"],onSelected:_,showArrow:!1,suffixIcon:()=>a("span",null,[r("lobby.promote.promote.myLinkChange")]),dropdownClassName:n["link-option"],fillMode:"neutral_1"},{default:()=>{var m;return[(m=b.value)==null?void 0:m.map(u=>a(V,{value:u.url,key:u.url,label:u.url},{default:()=>[u.url]}))]}}),a(I,{class:n.copy,text:i.value},null)]),a("div",{class:[n["member-info"],"member-info"]},[a("div",{class:"direct-subordinate"},[a("label",null,[r("lobby.promote.promote.directNum")]),a("span",{class:n.members},[v().hasLogined&&t!=null?t:" - ",r("lobby.promote.unitPeople")])]),e&&a("div",null,[a("label",null,[r("lobby.promote.promote.inviteCode")]),a("span",{class:n["invite-code"]},[e]),a(I,{class:[n.copy,"copy"],text:e},null)])])])]),a(Z,{ref:p,currentLink:i.value},null)])}}});export{pe as c};
//# sourceMappingURL=ShareModule.E_rBOSqh.js.map
