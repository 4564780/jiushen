import{a as p,I as m,U as S,iU as l,lI as r,bq as b,lJ as f,lM as D,cm as T,lN as v,ck as h,lO as E,lP as C}from"./main.C8q1iJMV.js";import{a as P}from"./SummaryInfoIndex.BC90kxvo.js";import{l as z,p as n,f as N,C as q}from"../vendors/vendor-@vue.DNlpgob2.js";const B={"sign-tips":"_sign-tips_10zcg_17"},[U]=S("event-item-modes-sign-components-sign-item"),j=z({name:U,setup(){const{t:e}=p();return()=>n("div",{class:[B["sign-tips"],"tool-tips"]},[n("span",null,[e("lobby.event.sign.extraPrize")]),n(m,{src:"/lobby_asset/common/web/event/qd_img_qdlabel.svg"},null)])}}),k="_item_zocom_17",O="_caption_zocom_135",s={item:k,"sign-item0":"_sign-item0_zocom_39","reward-pattern":"_reward-pattern_zocom_54","reward-description":"_reward-description_zocom_113",caption:O,"sign-btn":"_sign-btn_zocom_145","sign-item1":"_sign-item1_zocom_156","sign-item2":"_sign-item2_zocom_157","sign-item6":"_sign-item6_zocom_158"};function R(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!q(e)}const[$]=S("event-item-modes-sign-components-sign-item"),L=z({name:$,props:P,setup(e){const{t:c}=p(),g=N(()=>l().signData),w=async()=>{E(g.value)&&await C(e)},x=()=>{var o;const{isRecoup:t,signStatus:i}=e,a=t&&i===r.UnSignIn?c("lobby.event.sign.reSigning"):(o=D(i!=null?i:r.Distributed))==null?void 0:o();return n(T,{class:s["sign-btn"],type:"success",loading:l().isSigning,disabled:i!==r.UnSignIn,onClick:()=>w()},R(a)?a:{default:()=>[a]})},I=()=>{const{signDisplayType:t}=l();return[v.Style1,v.Style2].includes(t)?n(j,null,null):n(h,{class:"sign-badge",zIndex:1,content:c("lobby.event.sign.extraPrize")},null)};return()=>{var o,d,u,_,y;const t=e.signStatus===r.SignIn,i=t||((o=e.day)!=null?o:0)>((d=g.value.activeData)==null?void 0:d.signDay),{signDisplayType:a}=l();return n("div",{class:[s.item,s["sign-item".concat(a)]]},[e.extraPrize?I():null,n("div",{class:s["reward-pattern"]},[t?n("div",{class:"received-box"},[n(m,{class:"bg-receive",src:"/lobby_asset/common/web/common/comm_img_ylq.svg"},null),n("div",{class:"has-receive"},[c("lobby.event.sign.hasReceive")])]):n(m,{class:"picture",src:(u=e.icon)!=null?u:""},null)]),n("div",{class:s["reward-description"]},[n("div",{class:["text-wrap","yellow"]},[t?b((_=e.prize)!=null?_:0,2):e.rewardType===f.Fixed&&b((y=e.prize)!=null?y:0,2)||e.text]),e.showLine&&n("div",{class:"divider"},null)]),n("div",{class:[s.caption]},[i?c("lobby.event.sign.dayCount",{x:e.day,X:e.day}):x()])])}}});export{L as S};
//# sourceMappingURL=SignItemIndex.2kNu5yRE.js.map
