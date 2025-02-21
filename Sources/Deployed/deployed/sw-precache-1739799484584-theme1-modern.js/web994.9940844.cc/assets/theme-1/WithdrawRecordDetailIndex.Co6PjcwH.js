import{a as N,az as F,ci as P,_ as C,I as B,dM as f,e$ as g,U as O,fm as y,bG as E,fn as $,B as q,a6 as G,Y as A,v as H,q as V,E as D,fo as Y}from"./main.C8q1iJMV.js";import{u as M}from"../vendors/vendor-stable.LD58Pbb3.js";import{h as z,e as K}from"../vendors/vendor-default.CjiYZF7Q.js";import{s as r,g as I,a as Q,b as J,e as X}from"./hooks.D0ntGdPD.js";import{l as R,f as w,p as a,v as L,r as j,w as Z,C as aa}from"../vendors/vendor-@vue.DNlpgob2.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";const U={data:{type:Object}},[ta]=O("status-display"),ea=R({name:ta,props:U,setup(t){var l,s;const{t:e}=N(),{userInfos:c}=F(),i=(l=c==null?void 0:c.currency)!=null?l:"CNY",b=P(i)||{gameRate:1},v=b.gameRate!==1,p=C(((s=t.data)==null?void 0:s.money)||"0",{toFixedType:"score",sign:v?!1:"auto"}).toString(),x=w(()=>{var d,u;const o=z((u=(d=t.data)==null?void 0:d.money)!=null?u:"");return o.times(b.gameRate),C(o.toString(),{sign:"auto",toFixedType:"currency",showGroup:!0}).toString()}),T=w(()=>{var o,d,u;return((o=t.data)==null?void 0:o.bankCode)===W.WALLET&&(((d=t.data)==null?void 0:d.status)===y.SUCCESS||((u=t.data)==null?void 0:u.status)===y.ENFORCE)});return()=>{var o,d,u,S,k;return t.data?a("div",{class:r.statusDisplay},[a("div",{class:[r.statusIcon,I((o=t.data)==null?void 0:o.status)[1]]},[a(B,{src:"/lobby_asset/common/web/common/".concat(Q(t.data.status),".png")},null)]),a("div",{class:[r.statusText,I((d=t.data)==null?void 0:d.status)[0]]},[t.data.statusText]),a("div",{class:r.amount},[a("span",null,[p]),J(t.data.status)&&a(f,{class:r.copy,text:String(p)},null)]),b.gameRate!==1&&a("div",{class:r.remark},[L("≈"),x.value]),a("div",{class:r.remark},[!!((u=t.data)!=null&&u.currencyRate)&&a("span",null,[e("lobby.finance.withdraw.rate"),X(t.data),L("，"),e("lobby.finance.withdraw.title"),a("span",{class:r.currencyAmount},[C((S=t.data)==null?void 0:S.currencyAmount,{code:(k=t.data)==null?void 0:k.currencyCode,sign:"auto",toFixedType:"currency"}).toString()])])]),T.value&&a("div",{class:r.noWalletTips},[e("lobby.finance.withdraw.details.noWalletTips1"),a("span",{class:r.btn,onClick:()=>{var h,_;g((_=(h=t.data)==null?void 0:h.homeUrl)!=null?_:"")}},[e("lobby.finance.withdraw.details.noWalletTips2")]),a("span",null,[e("lobby.modal.payQRCode.or")]),a("span",{class:r.btn,onClick:()=>{var h,_;g((_=(h=t.data)==null?void 0:h.tradeUrl)!=null?_:"")}},[e("lobby.finance.withdraw.details.noWalletTips3")])])]):null}}}),la="_methodArea_nocmj_17",na="_method_nocmj_17",sa="_logo_nocmj_84",oa="_flex_nocmj_89",ca="_copy_nocmj_98",n={methodArea:la,"label-txt":"_label-txt_nocmj_38",break:"_break_nocmj_42",method:na,logo:sa,flex:oa,"flex-start":"_flex-start_nocmj_94",copy:ca},[ra]=O("withdraw-details"),ia=R({name:ra,props:U,setup(t){const{t:e}=N(),c=w(()=>{var i;return((i=t.data)==null?void 0:i.typeId)===$.CRYPTO});return()=>t.data?a("div",null,[a("ul",{class:n.methodArea},[c.value&&a("li",null,[a("span",null,[e("lobby.finance.withdraw.details.address")]),a("span",{class:n.flex},[t.data.account,a(f,{class:n.copy,text:t.data.account},null)])]),c.value&&a("li",null,[a("span",null,[e("lobby.finance.withdraw.details.net")]),a("span",{class:n.flex},[t.data.cryptoProtocol,a(f,{class:n.copy,text:t.data.cryptoProtocol},null)])]),!c.value&&a("li",null,[a("span",null,[e("lobby.finance.withdraw.details.transaction")]),a("span",null,[e("lobby.finance.withdraw.title")])]),a("li",null,[a("span",null,[e("lobby.finance.withdraw.details.method")]),a("span",{class:n.method},[a(B,{class:n.logo,src:t.data.logo},null),a("span",null,[t.data.withdrawTypeName]),a(f,{class:n.copy,text:t.data.withdrawTypeName},null)])]),a("li",null,[a("span",{class:n["label-txt"]},[e("lobby.finance.withdraw.details.createTime")]),a("span",null,[E(t.data.createTime)])]),t.data.applyTime!==0&&a("li",null,[a("span",{class:n["label-txt"]},[e("lobby.modal.pay.details.payedTime")]),a("span",null,[E(t.data.applyTime)])]),a("li",null,[a("span",{class:n["label-txt"]},[e("lobby.finance.withdraw.details.orderNo")]),a("span",{class:n.flex},[t.data.orderNo,a(f,{class:n.copy,text:t.data.orderNo},null)])]),t.data.remark&&a("li",{class:n["flex-start"]},[a("span",{class:n["label-txt"]},[e("lobby.modal.pay.details.frontRemark")]),a("span",{class:[n.flex,n["flex-start"]]},[a("span",{class:n.break},[t.data.remark]),a(f,{class:n.copy,text:t.data.remark},null)])])])]):null}}),da="_placeholder_1gnck_17",ua="_orderDetails_1gnck_21",ma="_main_1gnck_29",ya="_NoWalletBtn_1gnck_37",ba="_text_1gnck_45",fa="_btn_1gnck_52",m={placeholder:da,orderDetails:ua,main:ma,NoWalletBtn:ya,text:ba,btn:fa};function wa(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!aa(t)}const W={WALLET:"wallet"},[ha]=V("pages-withdraw-record-detail"),ka=R({name:ha,setup(){const{t}=N(),e=j(null),c=M(),i=j(null),b=async l=>{i.value="loading";const[s,o]=await K(Y(l));if(i.value=null,s){i.value="retry";return}e.value=o};Z(()=>c.query.orderNo,l=>{c.name!==D.WITHDRAW_DETAILS&&c.name!==D.WITHDRAWAL_RECORD_DETAILS||l&&b(l)},{immediate:!0});const v=()=>{b(c.query.orderNo)},p=w(()=>{var l;return((l=e.value)==null?void 0:l.bankCode)===W.WALLET}),x=w(()=>{var s;return e.value?[y.PENDING,y.LOCK,y.AUDIT_SUCCESS,y.FAILED_2].includes((s=e.value)==null?void 0:s.status):!1}),T=w(()=>{var l,s,o;return((l=e.value)==null?void 0:l.bankCode)===W.WALLET&&(((s=e.value)==null?void 0:s.status)===y.SUCCESS||((o=e.value)==null?void 0:o.status)===y.ENFORCE)});return()=>a(H,null,{header:()=>{let l;return a(q,null,wa(l=t("lobby.finance.withdraw.details.title"))?l:{default:()=>[l]})},default:()=>a(G,{class:m.placeholder,type:i.value,onRetry:v},{default:()=>[a("div",{class:m.orderDetails},[a("div",{class:m.main},[a(ea,{data:e.value},null),a(ia,{data:e.value},null)]),p.value&&x.value&&a("div",{class:m.NoWalletBtn},[a("div",{class:[m.text]},[t("lobby.finance.withdraw.details.noWalletRemark")]),a(A,{type:"warning",onClick:()=>{var l;return g((l=e.value)==null?void 0:l.walletUrl)},class:m.btn},{default:()=>[a("p",null,[t("lobby.finance.withdraw.details.goToWallet")])]})]),T.value&&a("div",{class:m.NoWalletBtn},[a(A,{onClick:()=>{var l,s;g((s=(l=e.value)==null?void 0:l.homeUrl)!=null?s:"")},type:"primary",class:[m.btn]},{default:()=>[a("p",null,[t("lobby.finance.withdraw.details.goToWallet")])]})])])]})})}});export{W as BankCodes,ka as default};
//# sourceMappingURL=WithdrawRecordDetailIndex.Co6PjcwH.js.map
