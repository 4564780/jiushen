import{hC as n,iV as m,cf as l,fI as u,q as d}from"./main.C8q1iJMV.js";import{P as v,E as g}from"./PersistCheckboxIndex.oRsUV5rG.js";import x from"./CutOnceIndex.ChWd9rPY.js";import{l as f,p as i}from"../vendors/vendor-@vue.DNlpgob2.js";import"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-stable.LD58Pbb3.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";import"./ReceiveCountdownIndex.C4K-6t0P.js";import"./index.Dc16CbDK.js";import"./Progress.BhMcUY2s.js";import"./activeReceiveOne.CY32GsDi.js";import"./PublicIntroductionIndex.bUl03y0X.js";import"./props.DdPRoj_x.js";import"./ShareModule.E_rBOSqh.js";import"./index.BQg7GMmP.js";import"./index.SS2HDjZq.js";import"./Table.CBQduS50.js";const I="_dialogBox_1gt6j_17",C="_persistBox_1gt6j_33",r={dialogBox:I,persistBox:C},[O]=d("pages-dialogs-cut-once"),F=f({name:O,setup(){const{onDialogOpen:c,openOptions:o,visible:s}=n("cutOnce"),t=m();return c(async()=>{var e,a;if((e=o.value)!=null&&e.activeId){t.setActiveId(o.value.activeId);const p=await t.getEventItemDetail(Number((a=o.value)==null?void 0:a.activeId));p&&t.updateCutOnceCacheData(p)}}),()=>i(u,{closeControl:{shouldOccupySpace:!0},class:r.dialogBox,show:s.value,"onUpdate:show":e=>s.value=e,title:""},{default:()=>{var e,a;return[i(x,{activeId:Number(t==null?void 0:t.activeId),pageType:(e=o.value)==null?void 0:e.pageType},null),((a=o.value)==null?void 0:a.pageType)===l.HomeModal&&i("div",{class:r.persistBox},[i(v,{name:g.cutOnce},null)])]}})}});export{F as default};
//# sourceMappingURL=EventCutOnceIndex.B3Wyfr9q.js.map
