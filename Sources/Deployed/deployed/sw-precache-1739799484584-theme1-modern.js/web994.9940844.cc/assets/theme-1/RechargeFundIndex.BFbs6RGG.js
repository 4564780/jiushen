import{cf as I,a as T,co as V,cp as J,Z as x,bq as _,cs as U,bg as X,U as L,az as k,bG as Z,ck as se,cm as E,c2 as Y,bX as le,u as ne,o as oe,_ as ce,bL as q,ca as N,cX as re,cY as ue,al as ie,bM as de,aE as pe,aB as me,aa as K,t as ve,p as fe,aN as _e,aO as be,v as ge,q as ye,m as he}from"./main.C8q1iJMV.js";import"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import{u as C,g as z,a as Te}from"./index.D_aqA5ts.js";import{a as Q,r as Ae,f as xe}from"./index.nTWlx4yZ.js";import{D as P,E as ee}from"./NoDataViewMore.DgOJ3Ycu.js";import{l as M,r as R,w as j,p as e,f as A,v as w,F as H,C as Ce}from"../vendors/vendor-@vue.DNlpgob2.js";import{R as ae,E as te}from"./ReceiveCountdownIndex.C4K-6t0P.js";import{s as W}from"../vendors/vendor-stable.LD58Pbb3.js";import{P as De}from"./Progress.BhMcUY2s.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";var D=(s=>(s[s.ACCUMUL_HISTORY=1]="ACCUMUL_HISTORY",s[s.BET_HISTORY=2]="BET_HISTORY",s[s.RULES_DESC=3]="RULES_DESC",s))(D||{});const S={pageType:{type:Number,require:!1,default:I.Normal}},Re="_rechargeFundAccumul_1ys4g_17",Me={rechargeFundAccumul:Re},[ke]=L("pages-recharge-fund-accumul-history"),Ie=M({name:ke,props:S,setup(s){const{t:p}=T(),n=R({timeDay:V.TODAY}),i=R(0),c=J(Q,{immediate:!1,alias:{page:"current",pageSize:"size"},transformFn:m=>({data:m.list,total:m.total_count,current_query_total_recharge:m.current_query_total_recharge}),defaultPageSize:20,payload:n}),o=async(m=!1)=>{if(c.payload.value=n.value,k().hasLogined){const b=await c.loadData(m);i.value=Number(b==null?void 0:b.current_query_total_recharge)}},r=()=>{o(!0)};j(()=>n.value,()=>{r()});const v=()=>e("div",{class:"listHead listCommon"},[e("div",{class:"rechargeTime"},[p("lobby.cpf.time")]),e("div",{class:"rechargeAmount"},[p("lobby.cpf.rechargeAmount")]),e("div",{class:"addFundRate"},[p("lobby.cpf.addFundRate")]),e("div",{class:"addFundAmount"},[p("lobby.cpf.addFundAmount")])]),u=m=>e("div",{class:"listItem listCommon"},[e("div",{class:"rechargeTime"},[Z(m.recharge_time)]),e("div",{class:"rechargeAmount"},[_(m.recharge_amount)]),e("div",{class:"addFundRate"},[_(m.add_fund_rate)+"%"]),e("div",{class:"addFundAmount"},[_(m.add_fund_amount)])]);return()=>{var b,y,h;const{rechargeFundInfo:m}=C();return e("div",{class:Me.rechargeFundAccumul},[e("div",{class:"selectWrapper"},[e(P,{selectedValue:(b=n.value)==null?void 0:b.timeDay,onValueChange:t=>{n.value={timeDay:t}}},null),e("div",{class:"totalAmountWrapper"},[p("lobby.cpf.totalAmount"),m.listError?e(x,{onRetry:r},null):e("span",{class:"totalAmount"},[_(i.value)])])]),e("div",{class:"listWrapper"},[((h=(y=c.list)==null?void 0:y.value)==null?void 0:h.length)>0&&v(),e(U,{class:["listdMain",s.pageType===I.PayAfterModal?"payAfterModal":""]},{default:()=>{var t;return[e(X,{finished:c.finished.value,error:!!c.listError.value,loading:c.loading.value,onLoad:o,onRetry:r,emptyText:e(ee,{selectValue:(t=n.value)==null?void 0:t.timeDay,onMoreClick:a=>{n.value={timeDay:a}}},null)},{default:()=>{var a,l;return[(l=(a=c.list)==null?void 0:a.value)==null?void 0:l.map(d=>u(d))]}})]}})])])}}});var f=(s=>(s[s.Init=0]="Init",s[s.CanReceive=1]="CanReceive",s[s.Received=2]="Received",s[s.Expired=3]="Expired",s[s.Send=4]="Send",s[s.Cancel=5]="Cancel",s[s.NeedApply=6]="NeedApply",s[s.NeedRequest=7]="NeedRequest",s[s.Reject=8]="Reject",s[s.Receipting=9]="Receipting",s))(f||{});const Le="_resetText_1xlsk_115",G={"base-info":"_base-info_1xlsk_17",resetText:Le},[Oe]=L("pages-recharge-fund-base-info"),Ne=M({name:Oe,emits:["showTakeOutModal"],setup(s,{emit:p}){const{t:n}=T(),i=C(),{rechargeFundInfo:c}=W(i),o=R(!1),r=async()=>{o.value=!0,await i.updateData(),o.value=!1},v=()=>{i.updateTamp()},u=(a=0)=>{const{t:l}=T();return a?_(a,0):l("lobby.cpf.noCap")},m=(a=0,l=0)=>{const{t:d}=T(),g=a+"/"+l+d("lobby.cpf.rechargeCount");return l?g:d("lobby.interest.NotLimited")},b=A(()=>{const{currentPeriodReward:a}=c.value,{t:l}=T();let d=Y(l("lobby.cpf.withdraw"));switch(a==null?void 0:a.receive_log_client_status){case f.Received:d=l("lobby.cpf.hasWithdraw");break;case f.Send:d=l("lobby.cpf.hasSend");break;case f.Cancel:d=l("lobby.cpf.hasCancel");break;case f.Expired:d=l("lobby.modal.task.expired");break;case f.Reject:d=l("lobby.records.rejected");break;case f.Receipting:d=l("lobby.records.arriveAccount");break}return d}),y=A(()=>{const{currentPeriodReward:a}=c.value;if(!(a!=null&&a.fund_period_end_time))return 0;const l=(a==null?void 0:a.fund_period_end_time)-Math.round(new Date().getTime()/1e3);return l>15*24*60*60?0:l}),h=A(()=>{const{hasLogined:a}=k(),{currentPeriodReward:l,rewardError:d}=c.value,g=[f.Received,f.Cancel,f.Send,f.Expired,f.Reject,f.Receipting],O=(l==null?void 0:l.receive_log_client_status)||f.Init;return g.includes(O)||!a||!(l!=null&&l.fund_amount)||!!d}),t=()=>{if(k().isDemoMode)return le({message:n("lobby.error.demoAccountTips")});ne().close("afterRechargeActivity"),oe()};return()=>{const{rechargeSetting:a,currentPeriodReward:l,settingError:d,rewardError:g}=c.value;return e("div",{class:G["base-info"]},[e("div",{class:"card"},[e("div",{class:"label"},[n("lobby.cpf.totalRechargeAmount")]),e("div",{class:"value"},[g?e(x,{loading:o.value,onRetry:r},null):_(Number((l==null?void 0:l.total_recharge_amount)||0))]),e("div",{class:"opreate-btn"},[e(se,{content:"".concat(n("lobby.cpf.give")).concat(_((a==null?void 0:a.add_fund_rate)||0),"%")},null),e(E,{type:"warning",text:Y(n("lobby.cpf.recharge")),onClick:t},null)]),e("div",{class:"reward-info"},[e("div",{class:"item"},[n("lobby.cpf.maxLimitFundAmount"),d?e(x,{loading:o.value,onRetry:r},null):e("span",{class:"num"},[u(a==null?void 0:a.max_limit_fund_amount)])]),e("div",{class:"item"},[n("lobby.cpf.maxLimitAddTimes"),g||d?e(x,{loading:o.value,onRetry:r},null):e("span",{class:"num"},[m(l==null?void 0:l.add_fund_times,a==null?void 0:a.max_limit_add_times)])])])]),e("div",{class:"divider"},null),e("div",{class:"card"},[e("div",{class:"label"},[n("lobby.cpf.cpfName")]),e("div",{class:"value cpf-value"},[g?e(x,{loading:o.value,onRetry:r},null):_(Number((l==null?void 0:l.fund_amount)||0))]),e("div",{class:"opreate-btn"},[e(E,{type:"success",onClick:()=>p("showTakeOutModal"),disabled:h.value,text:b.value},null)]),g?e(x,{loading:o.value,onRetry:r},null):y.value>0&&e(ae,{onComplete:v,className:G.resetText,textFormatType:te.Reset,duration:y.value},null)])])}}}),Se="_rechargeFundAccumul_13qzn_17",Fe={rechargeFundAccumul:Se},[Be]=L("pages-recharge-fund-bet-history"),$e=M({name:Be,props:S,setup(s){const{t:p}=T(),n=R({timeDay:V.TODAY}),i=J(Q,{immediate:!1,alias:{page:"current",pageSize:"size"},transformFn:u=>({data:u.list,total:u.total_count}),defaultPageSize:20}),c=(u=!1)=>{i.payload.value=n.value,k().hasLogined&&i.loadData(u)},o=()=>{c(!0)};j(n,()=>{o()});const r=()=>e("div",{class:"listHead listCommon"},[e("div",{class:"rechargeTime"},[p("lobby.cpf.time")]),e("div",{class:"rechargeAmount"},[p("lobby.cpf.rechargeAmount")]),e("div",{class:"addBetCodeRate"},[p("lobby.cpf.addBetCodeRate")]),e("div",{class:"addBetCodeAmount"},[p("lobby.cpf.addBetCodeAmount")])]),v=u=>e("div",{class:"listItem listCommon"},[e("div",{class:"rechargeTime"},[Z(u.recharge_time)]),e("div",{class:"rechargeAmount"},[_(u.recharge_amount)]),e("div",{class:"addFundRate"},[ce(u.add_bet_code_rate,{toFixedType:"rate"}).toFixed({decimalPlaces:2,tailZero:!0}).toString()]),e("div",{class:"addFundAmount"},[_(u.add_bet_code_amount)])]);return()=>{var b,y,h,t;const{currentPeriodReward:u,listError:m}=C().rechargeFundInfo;return e("div",{class:Fe.rechargeFundAccumul},[e("div",{class:"selectWrapper"},[e(P,{selectedValue:(b=n.value)==null?void 0:b.timeDay,onValueChange:a=>{n.value={timeDay:a}}},null),e("div",{class:"totalAmountWrapper"},[p("lobby.cpf.needRecharge"),m?e(x,{onRetry:o},null):e("span",{class:"totalAmount"},[_((y=u==null?void 0:u.remaining_bet_code)!=null?y:0)])])]),e("div",{class:"listWrapper"},[((t=(h=i.list)==null?void 0:h.value)==null?void 0:t.length)>0&&r(),e(U,{class:["listdMain",s.pageType===I.PayAfterModal?"payAfterModal":""]},{default:()=>{var a;return[e(X,{finished:i.finished.value,error:!!i.listError.value,loading:i.loading.value,onLoad:c,onRetry:o,emptyText:e(ee,{selectValue:(a=n.value)==null?void 0:a.timeDay,onMoreClick:l=>{n.value={timeDay:l}}},null)},{default:()=>{var l,d;return[(d=(l=i.list)==null?void 0:l.value)==null?void 0:d.map(g=>v(g))]}})]}})])])}}}),Ee="_modalDetail_19rin_17",He="_resetText_19rin_72",F={modalDetail:Ee,resetText:He},[Ue]=L("pages-recharge-fund-modal-detail"),je=M({name:Ue,props:{instance:{type:Object,default:null}},emits:["showBet"],setup(s,{emit:p}){const{t:n}=T(),i=R(!1),c=C(),{rechargeFundInfo:o}=W(c),r=A(()=>{const{currentPeriodReward:t}=o.value;return(t==null?void 0:t.receive_log_client_status)!==f.CanReceive&&(t==null?void 0:t.receive_log_client_status)!==f.NeedApply}),v=A(()=>{const{currentPeriodReward:t}=o.value;if(!(t!=null&&t.fund_period_end_time))return 0;const a=(t==null?void 0:t.fund_period_end_time)-Math.round(new Date().getTime()/1e3);return a>15*24*60*60?0:a}),u=A(()=>{const{currentPeriodReward:t}=o.value;let a=0;const l=t&&(t==null?void 0:t.bet_code)>=(t==null?void 0:t.receive_need_bet_code);return(t==null?void 0:t.remaining_bet_code)===0||l?a=100:a=Math.floor(((t==null?void 0:t.bet_code)||0)/((t==null?void 0:t.receive_need_bet_code)||1)*100),a}),m=()=>{p("showBet"),K.closeDialog(s.instance)},b=async()=>{const{rechargeSetting:t,currentPeriodReward:a}=o.value,l={receiveDeviceType:t==null?void 0:t.receive_device_type,taskCondition:t==null?void 0:t.task_condition,receiveStatus:a==null?void 0:a.logStatus,receiveCategory:a==null?void 0:a.receive_log_category,amount:a==null?void 0:a.fund_amount},{useFastLogin:d,isDemoMode:g}=k();if(!(await q.check({eventData:l,checkOptions:{[N.task]:!0,[N.receiveType]:!0,[N.forbidReceive]:!0,[N.largeAmount]:!0}})||!d||g||i.value)){i.value=!0;try{(await Ae((a==null?void 0:a.receive_log_id)||0,"noMessage")).code===re.SUCCESS&&(ue(),ie.Receive())}catch(O){await q.checkRes({config:{err:O,backupErrMsg:n("lobby.reward.base.receivedError")},checkOptions:{[de.userRestrict]:!0}})}finally{i.value=!1,await pe.setCacheExpired(xe),c.getCurrentPeriodReward(),me().freshDiscountRedDot()}}},y=()=>e(H,null,[e("span",null,[n("lobby.cpf.finishRecharge")]),e("span",{class:"fund-detail",onClick:m},[n("lobby.cpf.details")])]),h=()=>{var a;const t=(a=o.value)==null?void 0:a.currentPeriodReward;return e(H,null,[e("span",null,[n("lobby.cpf.needRecharge")]),e("span",{class:"need-bet"},[_((t==null?void 0:t.remaining_bet_code)||0)]),e("span",null,[n("lobby.cpf.enableWithdraw")]),e("span",{class:"fund-detail",onClick:m},[n("lobby.cpf.details")])])};return()=>{var l,d;const t=(l=o.value)==null?void 0:l.rechargeSetting,a=(d=o.value)==null?void 0:d.currentPeriodReward;return e("div",{class:F.modalDetail},[e("div",{class:"current-fund"},[n("lobby.cpf.currentCPF"),e("span",{class:"amount"},[_((a==null?void 0:a.fund_amount)||0)])]),e("div",{class:"fund-text"},[e("p",null,[w("1."),n("lobby.cpf.firtRechargeCPF",{num:z(t==null?void 0:t.add_fund_rate)+"%"})]),e("p",null,[w("2."),Te(t==null?void 0:t.max_limit_add_times,t==null?void 0:t.max_limit_fund_amount)])]),e("div",{class:"detail-wrapper"},[e("div",null,[r.value?h():y()]),v.value?e(ae,{onComplete:()=>c.updateTamp(),className:F.resetText,textFormatType:te.Reset,duration:v.value},null):null]),e("div",{class:"progress-wrapper"},[e(De,{class:F.progress,percent:u.value,text:"".concat(_((a==null?void 0:a.bet_code)||0),"/").concat(z(a==null?void 0:a.receive_need_bet_code))},null)]),e(E,{disabled:r.value||i.value,class:"enable-withdraw",type:"success",onClick:b},{default:()=>[(a==null?void 0:a.receive_log_client_status)===f.Received?n("lobby.cpf.hasWithdraw"):n("lobby.cpf.withdraw")]})])}}}),We="_ruleContent_rb6j0_17",Ye="_ruleContentWrap_rb6j0_26",qe="_payAfterModal_rb6j0_51",B={ruleContent:We,ruleContentWrap:Ye,payAfterModal:qe},[ze]=L("pages-recharge-fund-rules-desc"),we=M({name:ze,props:S,setup(s){const p=C(),{rechargeFundInfo:n}=W(p),i=A(()=>{var r;const{rechargeSetting:c}=n.value,o=c==null?void 0:c.translate_info;try{return o!=null&&o.is_system_translate?JSON.parse(String(o==null?void 0:o.rule_text)):(r=c==null?void 0:c.translate_info)==null?void 0:r.rule_text}catch(v){console.log("parse rule text err")}return!1});return()=>{var o,r,v;if(!i.value)return e(H,null,null);const c=(v=(r=(o=n.value)==null?void 0:o.rechargeSetting)==null?void 0:r.translate_info)==null?void 0:v.is_system_translate;return e(U,{class:[B.ruleContent,s.pageType===I.PayAfterModal?B.payAfterModal:""]},{default:()=>[e("div",{class:B.ruleContentWrap},[c?i.value.map((u,m)=>e("div",{key:m+u.title},[e("span",{class:"ruleTitle"},["".concat(m+1,"、").concat(u.title," ")]),u.text])):e(ve,{tag:"div",html:i.value},null)])]})}}}),Ge="_modal_77vu6_53",$={"recharge-fund":"_recharge-fund_77vu6_17",modal:Ge};function Ve(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!Ce(s)}const[Je]=ye("pages-rechargeFund"),ia=M({props:S,name:Je,setup(s){const{t:p}=T(),n=R(D.ACCUMUL_HISTORY),i=[{value:D.ACCUMUL_HISTORY,label:()=>p("lobby.cpf.accumulHistory"),component:e(Ie,s,null)},{value:D.BET_HISTORY,label:()=>p("lobby.cpf.betHistory"),component:e($e,s,null)},{value:D.RULES_DESC,label:()=>p("lobby.cpf.rulesDesc"),component:e(we,s,null)}];fe(()=>{C().initRecharge()});const c=()=>{const r=K.showDialog({title:p("lobby.cpf.withdraw"),className:"recharge-out",message:()=>e(je,{instance:r==null?void 0:r.instance,onShowBet:()=>n.value=D.BET_HISTORY},null),showConfirmButton:!1,showCloseButton:!0})},o=A(()=>he().language);return j(()=>o.value,()=>{C().updateData()}),()=>e(ge,null,{default:()=>{let r;return e("div",{class:[$["recharge-fund"],s.pageType===I.PayAfterModal?$.modal:""]},[e(Ne,{onShowTakeOutModal:c},null),e(_e,{shrink:!0,animated:!0,navDraggable:!0,class:"recharge-fund-tabs",active:n.value,"onUpdate:active":v=>n.value=v},Ve(r=i.map(v=>{var u;return e(be,{titleClass:$.tabTitle,key:v.value,name:v.value,title:(u=v.label)==null?void 0:u.call(v)},{default:()=>[v.component]})}))?r:{default:()=>[r]})])}})}});export{ia as default};
//# sourceMappingURL=RechargeFundIndex.BFbs6RGG.js.map
