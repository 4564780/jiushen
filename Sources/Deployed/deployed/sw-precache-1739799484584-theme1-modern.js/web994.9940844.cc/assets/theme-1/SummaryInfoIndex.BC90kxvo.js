import{u as N}from"../vendors/vendor-default.CjiYZF7Q.js";import{a as D,iU as g,t as y,bq as b,U as h,_ as x,lI as q,lJ as _,lK as E,I as P,ai as S,lL as T,az as w,m as B}from"./main.C8q1iJMV.js";import{s as C}from"../vendors/vendor-stable.LD58Pbb3.js";import{l as I,f as o,p as a,r as R}from"../vendors/vendor-@vue.DNlpgob2.js";import{E as A}from"./SignIndex.BheJ00Fr.js";const L={"info-item":"_info-item_1ff4c_17"},[U]=h("event-item-modes-sign-components-need-info"),H=I({name:U,setup(){var f;const{t:n}=D(),{signData:v,signList:c}=C(g()),m=o(()=>v.value.activeData),{signDay:d}=(f=m.value)!=null?f:{},r=o(()=>c.value[d-1]),s=o(()=>{var e;return((e=m.value)==null?void 0:e.havePay)||0}),i=o(()=>{var e;return((e=m.value)==null?void 0:e.haveBet)||0}),u=o(()=>{var e;return((e=r.value)==null?void 0:e.needBet)||0}),t=o(()=>{var e;return((e=r.value)==null?void 0:e.needPay)||0}),l=e=>x(e,{showGroup:!0}).toFixed({decimalPlaces:0,tailZero:!0,roundingMode:N.ROUND_DOWN}).toString();return()=>u.value||t.value?a("div",{class:L["info-item"]},[!!t.value&&a(y,{class:["item",s.value<t.value?"fail":"success"],tag:"div",html:n("lobby.event.sign.topupNeed",{x:l(s.value),y:b(t.value,0)})},null),!!u.value&&a(y,{class:["item",u.value&&t.value?"right":"",i.value<u.value?"fail":"success"],tag:"div",html:n("lobby.event.sign.betNeed",{x:l(i.value),y:b(u.value,0)}).toString()},null)]):""}}),J={signStatus:{type:Number,require:!0,default:q.Distributed},day:{type:Number,require:!0,default:0},extraPrize:{type:Number,require:!0,default:0},icon:{type:String,require:!0,default:""},rewardType:{type:Number,require:!0,default:_.Fixed},prize:{type:Number,require:!0,default:0},text:{type:String,require:!0,default:""},showLine:{type:Boolean,require:!1,default:!0},isRecoup:{type:Boolean,require:!1,default:!1},needBet:{type:Number,require:!1,default:0},needPay:{type:Number,require:!1,default:0}},z={"info-item":"_info-item_br9hf_17"},[F]=h("event-item-modes-sign-components-summary-info"),K=I({name:F,props:A,setup(n){const{t:v}=D(),c=R(!1),m=async()=>{if(!n.activeId)return;c.value=!0,await g().refreshEventItemDetail(n.activeId),c.value=!1;const{updateSignCacheData:r,updateSignData:s,updateTodayAddSignDay:i,signCacheData:u,eventItemData:t}=g();T(t),i(n.activeId);const{userInfos:l}=w(),{language:f}=B();u.findIndex(p=>p.id===n.activeId&&String(p.username)===String(l==null?void 0:l.username)&&p.lang===f)>-1&&r(t),s(t)},d=o(()=>g().signData.activeData);return()=>{var r,s,i;return a("div",{class:z["info-item"]},[a(y,{tag:"div",class:"item",html:v("lobby.event.sign.".concat(((r=d.value)==null?void 0:r.signType)===E.Grand?"grand":"continued"),{x:(s=d.value)==null?void 0:s.signDays})},null),a("div",{class:"right"},[a(y,{tag:"span",class:"item",html:v("lobby.event.sign.collected",{x:b(((i=d.value)==null?void 0:i.receiveReward)||0,2)}).toString()},null),a(P,{onClick:m,class:[c.value?[S.Animated]:"",S.Actions.Spin,S.Repeat.Infinite],src:"/lobby_asset/common/web/common/comm_icon_retry.svg"},null)])])}}});export{H as N,K as S,J as a};
//# sourceMappingURL=SummaryInfoIndex.BC90kxvo.js.map
