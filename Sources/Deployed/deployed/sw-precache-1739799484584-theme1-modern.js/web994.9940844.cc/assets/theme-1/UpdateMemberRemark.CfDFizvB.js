import{a as I,u as M,ky as x,h4 as p,a6 as w,gY as n,gZ as m,ku as k,a3 as C,h7 as R,w as S}from"./main.C8q1iJMV.js";import"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import{M as T}from"./tabs.C8gMd3cQ.js";import{b as D,a as N}from"./member.0SA-nvjg.js";import{I as A}from"./InfoListIndex.sqsON9bW.js";import{M as U}from"./ModalIndex.BOL5WFtp.js";import{R as F}from"./RemarkIndex.DpHXqo9x.js";import{l as L,r as V,w as B,p as e,F as b}from"../vendors/vendor-@vue.DNlpgob2.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-stable.LD58Pbb3.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";const _=L({setup(){const{t:l}=I(),{dialogsStates:{updateClubMemberRemark:r}}=M(),d=x(),u=V(""),{error:y,isLoading:f,execute:v}=p(D),{data:t,placeholderType:g,execute:i}=p(N),h=async()=>{await v({remark:u.value,editType:1,userId:r.options.id}),y.value||(S({type:"success",message:l("lobby.club.actionSucessTips.base")}),r.show=!1,d.needReloadTabMap[T.Tab.Member]=!0)};return B(()=>r.show,s=>{s&&i(r.options.id)},{immediate:!0}),()=>e(U,{show:r.show,"onUpdate:show":s=>r.show=s,loading:f.value,onClose:()=>u.value="",title:l("lobby.club.remark"),buttons:[{text:l("lobby.club.cancel"),plain:!0},{text:l("lobby.club.confirm"),closeModalOnClick:!1,onClick:h}]},{default:()=>[e(w,{type:g.value,onRetry:i},{default:()=>{var s;return[e(A,{list:[{label:l("lobby.club.memberID"),value:()=>{var a,o;return e(b,null,[(a=t.value)==null?void 0:a.userId,e(n,{type:"copy",text:String((o=t.value)==null?void 0:o.userId),class:m("ml-10")},null)])}},{label:l("lobby.club.memberAccount"),value:()=>{var a,o;return e(b,null,[(a=t.value)==null?void 0:a.userAcc,e(n,{type:"copy",text:String((o=t.value)==null?void 0:o.userAcc),class:m("ml-10")},null)])}},{label:l("lobby.club.realName"),value:()=>{var a,o,c;return e(b,null,[(a=t.value)==null?void 0:a.realName,((o=t.value)==null?void 0:o.realName)&&e(n,{type:"copy",text:String((c=t.value)==null?void 0:c.realName),class:m("ml-10")},null)])}},{label:l("lobby.club.memberRole"),value:k().getContent((s=t.value)==null?void 0:s.memberRole)}]},null),e(C,{class:[R("form"),m("mt-20")],layout:"vertical"},{default:()=>[e(F,{modelValue:u.value,"onUpdate:modelValue":a=>u.value=a,placeholder:l("lobby.club.placeholder.reason")},null)]})]}})]})}});export{_ as default};
//# sourceMappingURL=UpdateMemberRemark.CfDFizvB.js.map
