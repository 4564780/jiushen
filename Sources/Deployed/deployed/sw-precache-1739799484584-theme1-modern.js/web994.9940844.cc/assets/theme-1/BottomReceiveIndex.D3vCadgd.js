import{a as C}from"./props.DdPRoj_x.js";import{a as D,eI as I,cm as T,cf as _,U as P,b as j,bL as M,ca as f,bQ as k,lA as N,bX as E,w as O,lB as q}from"./main.C8q1iJMV.js";import{u as x}from"../vendors/vendor-stable.LD58Pbb3.js";import{a as V}from"./activeReceiveOne.CY32GsDi.js";import{l as G,t as L,r as Q,f as U,p as d,C as X}from"../vendors/vendor-@vue.DNlpgob2.js";const Y={isShowBack:{type:Boolean,require:!1,default:!0},showReceiveAll:{type:Boolean,require:!1,default:!1},eventItemData:{type:Object,default:()=>{}},collectAllDisabled:Boolean,...C},R={"activity-bottom":"_activity-bottom_hfrat_17","pay-after-modal":"_pay-after-modal_hfrat_37"};function z(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!X(e)}const[F]=P("event-item-components-bottom-receive"),$=G({name:F,props:Y,emits:["refresh"],setup(e,{slots:l,emit:w}){const{t:o}=D(),{eventItemData:s}=L(e),A=j(),B=x(),i=Q(!1),r=U(()=>{var t;return((t=s.value)==null?void 0:t.giveType)===I.ManualDistribution}),S=async()=>{var y,m,b,h;const t={receiveDeviceType:(y=s.value)==null?void 0:y.receiveDeviceType,taskCondition:(m=s.value)==null?void 0:m.taskCondition};if(await M.check({checkOptions:{[f.forbidReceive]:!0,[f.receiveType]:!0,[f.task]:!0},eventData:t}))return;const v=(b=s.value)==null?void 0:b.activeData,n=(h=v==null?void 0:v.receiveList)!=null?h:[],c=[],p=[];if(n!=null&&n.length&&n.forEach(a=>{if(a.receiveStatus===k.CanReceive||r.value&&a.receiveStatus===k.PendingApply)if(a.receiveDuration){const g=N(a);g&&p.push(g)}else c.push(a==null?void 0:a.receiveId)}),(c==null?void 0:c.length)===0){if(p.length>0){E({message:p[0]});return}E({message:o("lobby.event.listedRewards.noRewards")});return}i.value=!0,V({params:{activeId:Number(B.query.eventId)||Number(s.value.id),receiveId:c.join(",")},showSuccessModal:!1,onSuccess:()=>{O.success({message:r.value?o("lobby.event.invest.applySuccess"):o("lobby.event.invest.receiveSuccess")})},judgeResBefore:()=>{i.value=!1,w("refresh")},animateType:q.TYPE_3})};return()=>{var u;let t;return d("div",{class:[R["activity-bottom"],e.pageType===_.PayAfterModal?R["pay-after-modal"]:"","activity-bottom"]},[e.isShowBack&&d(T,{type:"primary",plain:!0,"clear-background":!0,onClick:()=>A.back()},z(t=o("lobby.common.tips.return"))?t:{default:()=>[t]}),(u=l.default)==null?void 0:u.call(l),e.showReceiveAll&&d(T,{type:"success",disabled:e.collectAllDisabled,onClick:S,loading:i.value},{default:()=>[r.value?o("lobby.modal.task.applyAll"):o("lobby.modal.task.collectAll")]})])}}});export{$ as B};
//# sourceMappingURL=BottomReceiveIndex.D3vCadgd.js.map
