import{a as w,u as q,az as S,bN as A,lb as y,I as r,ai as d,n as h,af as k,U as N,bW as E,E as R,b as T}from"./main.C8q1iJMV.js";import{s as B}from"../vendors/vendor-stable.LD58Pbb3.js";import{l as P,t as W,p as e,C as j}from"../vendors/vendor-@vue.DNlpgob2.js";import"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";const F="_encrypt_q1xcc_26",H="_top_q1xcc_31",L="_middle_q1xcc_32",M="_icon_q1xcc_39",U="_balance_q1xcc_64",z="_hidden_q1xcc_91",I="_bold_q1xcc_95",O="_footer_q1xcc_114",c={"popover-content":"_popover-content_q1xcc_17",encrypt:F,top:H,middle:L,icon:M,balance:U,"refresh-icon":"_refresh-icon_q1xcc_72","eye-icon":"_eye-icon_q1xcc_77","eye-close":"_eye-close_q1xcc_82","audio-icon":"_audio-icon_q1xcc_86",hidden:z,bold:I,"find-balance":"_find-balance_q1xcc_100",footer:O,"withdraw-btn":"_withdraw-btn_q1xcc_129","pay-btn":"_pay-btn_q1xcc_134"};function V(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!j(n)}const[Y]=N("popover-content"),ne=P({name:Y,props:{showAtAside:Boolean,formatCurrency:Function,updateCurrency:Function},setup(n){const f=T(),{showAtAside:v}=W(n),{t:o}=w(),{open:C}=q(),{userInfos:a}=S(),t=A(),{isFetchingPrize:x,asideCollapsed:g,hiddenBalance:l}=B(t),b=()=>{h(E.BETTING_TASK)},p=()=>{f.push({name:R.CENTER_WALLET})};return()=>{var _,u,m;let i;return e("div",{class:c["popover-content"]},[e("section",{class:c.top},[e("div",null,[e("p",null,[o("lobby.balance.current"),l.value?e("span",{class:c.encrypt},[y]):e("span",{class:c.balance},[(_=n.formatCurrency)==null?void 0:_.call(n,a==null?void 0:a.game_gold)]),e(r,{class:[c["refresh-icon"],{[d.Animated]:x.value},d.Actions.Spin,d.Repeat.Infinite],src:"/lobby_asset/{layout}-{bg}-common/web/common/comm_icon_sx.svg",onClick:()=>{var s;(s=n.updateCurrency)==null||s.call(n),t.setHiddenBalance(!1)},useSkeleton:!0},null)]),e(r,{class:[c["eye-icon"],l.value?c["eye-close"]:""],src:"/lobby_asset/common/web/common/comm_icon_".concat(l.value?"hide":"show",".svg"),onClick:s=>{t.setHiddenBalance(!l.value),s.stopPropagation()},useSkeleton:!0},null)]),e("div",null,[o("lobby.balance.text1"),e("span",{class:[c.icon,c["find-balance"]],onClick:p},[o("lobby.balance.find")])])]),e("section",{class:c.middle},[e("div",null,[e("p",null,[o("lobby.balance.award"),l.value?e("span",{class:c.encrypt},[y]):e("span",{class:c.balance},[(u=n.formatCurrency)==null?void 0:u.call(n,a==null?void 0:a.bonus)]),e(r,{class:c["audio-icon"],src:"/lobby_asset/common/web/common/comm_icon_jl.svg",useSkeleton:!0,onClick:b},null)])]),e("div",null,[o("lobby.balance.text2"),e("span",{class:c.bold},[(m=n.formatCurrency)==null?void 0:m.call(n,a==null?void 0:a.bonusRequireBet)]),o("lobby.balance.text3"),e("span",{class:c.icon,onClick:b},[o("lobby.balance.checkRule")])])]),e("section",{class:c.footer},[e("div",{class:c["withdraw-btn"],onClick:()=>h()},[o("lobby.header.withdraw")]),e(k,{mode:"yellow",content:t.payMaxCharge?o("lobby.modal.pay.give2",{num:t.payMaxCharge}):0,class:c["pay-btn"],onClick:()=>{C("recharge"),v.value&&g.value&&t.setAsideCollapsed(!1)}},V(i=o("lobby.header.recharge"))?i:{default:()=>[i]})])])}}});export{ne as default};
//# sourceMappingURL=PopoverContentIndex.gVWft666.js.map
