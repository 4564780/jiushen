import{hC as i,a as l,az as p,gA as c,fI as u,q as m}from"./main.C8q1iJMV.js";import{l as f,p as d}from"../vendors/vendor-@vue.DNlpgob2.js";import"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-stable.LD58Pbb3.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";const[g]=m("pages-dialogs-force-change-password"),I=f({name:g,setup(){const{visible:a,openOptions:t,closeDialog:n}=i("forbiddenSelf"),{t:s}=l();return()=>d(u,{show:a.value,"onUpdate:show":e=>a.value=e,class:"forbiddenSelfDialog",type:"error",title:()=>s("lobby.notice.importantNotice"),message:()=>{var e,o;return(o=(e=t.value)==null?void 0:e.errorMessage)!=null?o:""},showCancelButton:!1,showCloseButton:!0,closeOnRouteChange:!1,showConfirmButton:!0,confirmButtonText:()=>s("lobby.modal.loginRegister.contactCustomer"),beforeClose:()=>(p().updateUserRestrictInfo(),!0),onConfirm:async()=>{var e,o,r;await n("forbiddenSelf"),await c().navigateToServicePage({openType:"insert"}),(e=t.value)!=null&&e.okCallback&&await((r=(o=t.value)==null?void 0:o.okCallback)==null?void 0:r.call(o))}},null)}});export{I as default};
//# sourceMappingURL=ForbiddenSelfIndex.Cr7DUJw3.js.map
