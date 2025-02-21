import{m as H,a as D,I as M,_ as h,hi as L,dM as q,U as V,fm as T,hj as $,cp as B,hA as F,fw as n,bW as S,E as x,hB as G,Z as Y,bg as P,v as U,q as z,b as K}from"./main.C8q1iJMV.js";import{b as J,r as E}from"./utils.9fBIObLK.js";import{u as Z}from"../vendors/vendor-stable.LD58Pbb3.js";import{c as Q}from"./DateSelectIndex.Czbvh5sB.js";import{N as X}from"./NoDataMessage.CslrbYK2.js";import{e as ee}from"./hooks.D0ntGdPD.js";import{l as N,p as e,v as g,r as v,w as A,n as te}from"../vendors/vendor-@vue.DNlpgob2.js";import"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";import"./index.CnQRgKzx.js";import"./index.DpvTgJML.js";const ae={item:{type:Object,required:!0},navigateToDetail:{type:Function,required:!0}},oe="_cell_jw8uf_17",se="_content_jw8uf_28",ne="_name_jw8uf_36",re="_logoBox_jw8uf_36",ce="_logo_jw8uf_36",le="_desc_jw8uf_46",ie="_money_jw8uf_54",me="_status_jw8uf_59",ue="_time_jw8uf_63",de="_remark_jw8uf_72",_e="_no_jw8uf_76",ye="_copy_jw8uf_79",pe="_pending_jw8uf_88",fe="_success_jw8uf_91",Te="_failed_jw8uf_94",ge="_label_jw8uf_105",we="_rate_jw8uf_115",ve="_currencyRate_jw8uf_120",be="_ammount_jw8uf_123",Re="_arrows_jw8uf_126",a={cell:oe,content:se,name:ne,logoBox:re,logo:ce,desc:le,money:ie,status:me,time:ue,remark:de,no:_e,copy:ye,pending:pe,success:fe,failed:Te,label:ge,"front-remark":"_front-remark_jw8uf_109",rate:we,currencyRate:ve,ammount:be,arrows:Re},[he]=V("withdraw-recordItem"),Ce=N({name:he,props:ae,setup(t){const b=J(t.item.typeId),p=H(),{t:d}=D(),R=()=>{var s,c,_,m;if(!((s=t.item)!=null&&s.currencyRate))return null;const i=h((c=t.item.currencyAmount)!=null?c:0,{code:(_=t.item)==null?void 0:_.currencyCode,toFixedType:"currency",showGroup:!0}).toString();return e("p",{class:a.rate},[p.isCN&&e("span",null,[d("lobby.modal.pay.exchangeRate"),g(" ")]),e("span",{class:a.currencyRate},[ee(t.item)]),e("span",{class:a.ammount},["".concat(i).concat((m=t.item)==null?void 0:m.currencyCode)])])},f=i=>{var c;return(c={[T.SUCCESS]:a.success,[T.ENFORCE]:a.success,[T.CANCEL]:a.failed,[T.FAILED]:a.failed,[T.REJECT]:a.failed}[i])!=null?c:a.pending};return()=>{var i,s,c,_,m,w;return e("div",{class:[a.cell],onClick:t.navigateToDetail},[e("div",{class:a.content},[e("div",{class:a.name},[e("div",{class:a.logoBox},[e(M,{class:a.logo,src:t.item.logo},null),e("p",{class:a.desc},["".concat(b," "),g(" "),e("span",null,[g("("),"".concat(t.item.cardNo),g(")")])])]),e("p",{class:a.money},[g("-"),h(((i=t.item)==null?void 0:i.money)||"0",{toFixedType:"score"}).toString()])]),e("div",{class:a.status},[e("div",null,[e("p",{class:a.time},[e("span",null,[L(t.item.createTime)]),e("span",{class:a.no},[(s=t.item)==null?void 0:s.orderNo]),e(q,{class:a.copy,text:(c=t.item)==null?void 0:c.orderNo},null)]),R()]),e("p",{class:[a.status,t.item&&f((_=t.item)==null?void 0:_.status)]},[t.item.statusText])]),!!((m=t.item)!=null&&m.remark)&&e("div",{class:[a.row,a.remark]},[e("span",{class:a.label},[d("lobby.finance.withdraw.details.remark")]),e("span",{class:a["front-remark"]},[(w=t.item)==null?void 0:w.remark])])]),e(M,{class:a.arrows,src:"/lobby_asset/common/web/common/comm_icon_fh.svg"},null)])}}}),Me="_main_1as6q_17",Se="_selectAndTotal_1as6q_22",xe="_total_1as6q_29",Ee="_amount_1as6q_42",Ae="_recordMain_1as6q_47",De="_withdrawRecordpopoverContent_1as6q_52",y={main:Me,selectAndTotal:Se,total:xe,amount:Ee,recordMain:Ae,withdrawRecordpopoverContent:De},[Ne]=z("pages-withdraw-record"),ze=N({name:Ne,setup(){const{t}=D(),{push:b}=K(),p=$(),d=v(),R=Z(),f=v(),i=v(0),s=B(F,{immediate:!1,transformFn:o=>{var r,l;return{data:(l=(r=o.records)==null?void 0:r.map(u=>({...u,isShowMark:!0})))!=null?l:[],total:o.totalCount,totalCount:o.total}},defaultPageSize:20});s.payload.value={time:n.TODAY};const c=v(0),_=E.value[0].value,m=async(o=!0)=>{var l;const r=await s.loadData(o);c.value=(l=r==null?void 0:r.totalCount)!=null?l:0};A(()=>p.tabsActive,()=>{p.tabsActive===S.WITHDRAW_RECORD&&m()}),A(()=>R,o=>{p.tabsActive===S.WITHDRAW_RECORD&&o.name===x.WITHDRAW&&te(()=>{f.value.scroller.value.scrollTop=i.value,i.value=0})},{deep:!0});const w=o=>{var r,l,u;i.value=(u=(l=(r=f.value)==null?void 0:r.scroller.value)==null?void 0:l.scrollTop)!=null?u:0,b({name:x.WITHDRAWAL_RECORD_DETAILS,query:{orderNo:o}})},j=()=>{m(!1)},C=()=>{m(!0)},I=o=>{d.value.onTypeChange(o)},O=o=>{o.timeEnum===n.CUSTOM?s.payload.value={startTime:o.startTime,endTime:o.endTime}:s.payload.value={time:o.timeEnum},m()},k=()=>{d.value.initDate()},W={[n.TODAY]:{text:t("lobby.center.components.dateRadio.today"),more:t("lobby.game.galaxyGold.seeMore"),moreValue:n.THIS_MONTH},[n.YESTERDAY]:{text:t("lobby.center.components.dateRadio.yesterday"),more:t("lobby.game.galaxyGold.seeMore"),moreValue:n.THIS_MONTH},[n.THIS_WEEK]:{text:t("lobby.center.components.dateRadio.thisWeek"),more:t("lobby.game.galaxyGold.seeMore"),moreValue:n.THIS_MONTH},[n.LAST_WEEK]:{text:t("lobby.center.components.dateRadio.lastWeek"),more:t("lobby.game.galaxyGold.seeMore"),moreValue:n.THIS_MONTH},[n.THIS_MONTH]:{text:t("lobby.center.components.dateRadio.thisMonth"),more:t("lobby.center.components.dateRadio.seeLastMonth"),moreValue:n.LAST_MONTH},[n.LAST_MONTH]:{text:t("lobby.center.components.dateRadio.lastMonth")}};return()=>e(U,{class:y.main},{header:()=>e("div",{class:y.selectAndTotal},[e(Q,{ref:d,selectSize:"mini",onTypeChange:O,options:E.value,defaultOption:_,onCancel:k,limitSearchDays:90,limitDays:90},null),e("div",{class:y.total},[e("span",null,[t("lobby.finance.withdraw.table.total")]),e("span",{class:y.amount},[h(c.value,{toFixedType:"score",sign:G()?!1:"auto"}).toString()]),e(Y,{class:y.retry,loading:s.loading.value,onRetry:C},null)])]),default:()=>{var o;return e(P,{ref:f,finished:s.finished.value,error:!!s.listError.value,loading:s.loading.value,class:y.recordMain,onLoad:j,onRetry:C,emptyText:e(X,{selectValues:(o=d.value)==null?void 0:o.selectTyppe.value,typeMap:W,onMoreClick:I},null)},{default:()=>{var r,l;return[(l=(r=s.list)==null?void 0:r.value)==null?void 0:l.map(u=>e(Ce,{key:u.orderNo,item:u,navigateToDetail:()=>w(u.orderNo)},null))]}})}})}});export{ze as default};
//# sourceMappingURL=WithdrawRecordIndex.BwMJJ4Ea.js.map
