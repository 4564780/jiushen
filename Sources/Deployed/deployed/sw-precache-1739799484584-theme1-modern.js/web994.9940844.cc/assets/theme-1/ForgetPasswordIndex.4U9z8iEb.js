import{h as fe,S as Z,n as me,o as pe,p as ye}from"./Setting.CRobMkOU.js";import{S as ve}from"./Steps.B3IX-idj.js";import{hL as l,fK as G,bY as g,gu as U,hM as W,a as X,az as J,u as ee,bU as te,bV as ae,hE as ge,gq as he,dM as be,gm as Ee,Y as oe,q as H,r as Y,hN as j,cX as F,g5 as x,c as Pe,w as we,hO as se,hP as _e,hD as Se,D as Ae,hQ as Ce,hR as Le,hS as $,hT as Ve,fY as Te,hU as Re,hC as ne,hV as Oe,hW as Ne,go as ke,gp as Ie,cA as B,A as Ue,C as Fe,aa as De}from"./main.C8q1iJMV.js";import{D as le,I as Ge}from"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import{d as Me}from"../vendors/vendor-stable.LD58Pbb3.js";import{h as qe,f as E,n as z,t as Be,l as Q,r as N,o as xe,p as s,F as He,C as Qe,w as re}from"../vendors/vendor-@vue.DNlpgob2.js";import{g as A,z as We,U as $e,V as Ye,Y as je}from"../vendors/vendor-lodash.BYdGDldS.js";import{u as ze}from"./useDevtools.BdNUia1z.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";var D=(e=>(e[e.Verify=0]="Verify",e[e.Editor=1]="Editor",e))(D||{});const M=Me("forgetPassword",()=>{const e=qe({key:Date.now(),account:"",type:void 0,step:D.Verify,loading:!1,userBinds:void 0,useQuestionVerify:!1}),h=E(()=>e.type===l.Phone?G().format(e.account):e.account);return{reset:()=>{e.key=Date.now(),e.step=D.Verify,e.loading=!1,e.userBinds=void 0,e.useQuestionVerify=!1},state:e,account:h,setType:o=>{e.type=o},setSetp:o=>{e.step=o},setLoading:()=>{e.loading=!0},delLoading:()=>{z(()=>e.loading=!1)}}});function ie(e,h,a){const t=G(),n=M(),{account:r}=Be(n),w=E(()=>e.value===l.Account),o=E(()=>e.value===l.Phone&&h.value===g.PHONE),i=E(()=>e.value===l.Email&&h.value===g.EMAIL),c=E(()=>{if(!r.value||!e.value)return;const d={};switch(e.value){case l.Account:d.username=r.value;break;case l.Email:d.email=r.value;break;case l.Phone:d.phone=r.value;break}return d}),m={[g.PHONE]:U.PHONE,[g.EMAIL]:U.EMAIL,[g.GA]:U.GA,[g.QUESTION]:U.QUESTIONS,[g.WITHDRAWPASS]:U.WITHDRAW_PASS},p=E(()=>{var I;let d,f,u,y=A(a,"phone"),O=A(a,"email");switch(e.value){case l.Account:d=r.value,f=void 0,u=void 0;break;case l.Phone:d=void 0,f=r.value,u=void 0;break;case l.Email:d=void 0,f=void 0,u=r.value;break}return o.value&&(y=r.value),i.value&&(O=r.value),{username:d,phone:f,email:u,password:A(a,"loginPass"),verifyFilds:{type:(I=A(m,h.value))!=null?I:U.NONE,phone:t.format(y)||void 0,phone_code:A(a,"phoneCode"),email:O,email_code:A(a,"emailCode"),google_code:A(a,"gaCode"),pass_question_id:A(a,"questionId"),pass_question_answer:A(a,"questionAnswer"),withdraw_pass:A(a,"withdrawPass")?"".concat(A(a,"withdrawPass")):void 0}}}),L=E(()=>{const d=A(a,"loginPass");if(!(!r.value||!e.value||!d))switch(e.value){case l.Phone:return{loginType:W.PhonePass,phone:r.value,userpass:d};case l.Email:return{loginType:W.EmailPass,email:r.value,userpass:d};default:return{loginType:W.Account,username:r.value,userpass:d}}});return{isAccount:w,equalPhone:o,equalEmail:i,accountPayload:c,verifyPayload:p,loginPayload:L}}const Xe="_verify_19ki1_17",Ke="_form_19ki1_17",Ze="_button_19ki1_20",Je="_editor_19ki1_25",et="_label_19ki1_25",tt="_laeblTitle_19ki1_31",at="_labelUsername_19ki1_34",ot="_labelCopy_19ki1_38",st="_needVerify_19ki1_45",nt="_spaceLine_19ki1_49",C={verify:Xe,form:Ke,button:Ze,editor:Je,label:et,laeblTitle:tt,labelUsername:at,labelCopy:ot,needVerify:st,spaceLine:nt};function lt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Qe(e)}const[rt]=H("forget-password-editor"),it=Q({name:rt,setup(){const{t:e}=X(),h=J(),a=le(),t=ee(),n=M(),{forgetPasswordConfig:r}=te(),{openLoginRegister:w}=ae(),o=E(()=>n.state.type),i=N(),c=N([]),m=ie(o,i,a.values);ge("CONFIG_CHANGE_SUCCESS",()=>a.validate()),xe(()=>{let f=r(!0,n.state.userBinds).editorList;n.state.useQuestionVerify&&(f=f.filter(u=>u!==g.QUESTION)),c.value=f,c.value.length&&(i.value=c.value.at(0))});const p=E(()=>he(i.value)&&c.value.length),L=async()=>{try{await Pe().login(m.loginPayload.value),we({type:"success",message:e("lobby.modal.forgotPassword.resetSuccess")}),se().reportForgetPasswordLoginSuccess()}catch(f){h.setLoginValidatePassed(_e.Skip),await Se(2e3),await w({login:!0,openType:"insert"})}},d=async()=>{if(!(await a.validate()).valid||!m.loginPayload.value)return;n.setLoading();const{password:u,verifyFilds:y,...O}=m.verifyPayload.value,I=We(y,$e);try{await me({data:{...O,password:u,secondVerify:I}}),await L(),t.close("forgetPassword"),n.delLoading()}catch(V){n.delLoading();const{code:b,msg:v}=Y(V);if(j.hasAbort(V))return;switch(b){case F.CONFIG_CHANGE_ERR_1:x("CONFIG_CHANGE_ERR").emit(),n.reset();break;case F.PAGE_OVERDUE:n.reset();break;case F.REGISTER_USERNAME_PASSWORD_SAME_ERR:a.setFieldError("loginPass",v);break;case F.CONFIG_CHANGE_PASSWORD_FORMAT_ERR:x("CONFIG_CHANGE_ERR").emit();break}}};return()=>{var u,y;let f;return s("div",{class:C.editor},[s("label",{class:C.label},[s("span",{class:C.laeblTitle},[e("lobby.modal.forgotPassword.currentAccount")]),s("span",{class:C.labelUsername},[n.account]),s(be,{class:C.labelCopy,text:n.account},null)]),s(fe,{active:g.LOGINPASS,attrs:{[g.LOGINPASS]:{label:{[Ee.Edit]:e("lobby.modal.forgotPassword.pleaseSetNewPassword")},confirmLabel:e("lobby.modal.forgotPassword.pleaseCheckNewPassword"),autoShowPasswordConfirm:!0}}},null),p.value&&s(He,null,[s("div",{class:C.spaceLine},null),s(Z,{active:i.value,"onUpdate:active":O=>i.value=O,sources:c.value,attrs:{[g.QUESTION]:{attrs:{question:{defaultValue:(y=(u=n.state.userBinds)==null?void 0:u.b)==null?void 0:y.question}}}}},null)]),s("div",{class:[C.button,{[C.needVerify]:p.value}]},[s(oe,{type:"primary",block:!0,onClick:d,loading:n.state.loading},lt(f=e("lobby.common.tips.confirm"))?f:{default:()=>[f]})])])}}}),[ut]=H("forget-password-account"),ct=Q({name:ut,props:{disabled:Boolean,name:{type:String,default:"account"}},emits:["update:modelValue","validate"],setup(e,{emit:h}){const a=M(),t=E(()=>a.state.type),n=E(()=>a.state.account),r=Ae(),w=N(!0),{emialSelectOptions:o}=Ce(n,!0),i=Ge(e.name),c=()=>i().then(u=>h("validate",u.valid)),{placeholder:m,toTest:p,preIcon:L,rules:d}=Le(E(()=>({type:a.state.type,account:n.value,enableAccount:!0,enableEmail:!0,enablePhone:!0,enables:[$.Phone,$.Email,$.Account]})));re([r.systemInfos,n],()=>{w.value=!0,a.setType(l.Account),n.value&&(p().phone?a.setType(l.Phone):p().email?a.setType(l.Email):p().account?(n.value.length>16&&(w.value=!1),a.setType(l.Account)):w.value=!1,z(c))});const f=E(()=>t.value===l.Phone);return()=>{var u;return s(Re,{name:e.name,modelValue:a.state.account,"onUpdate:modelValue":y=>a.state.account=y,placeholder:m(),disabled:(u=e.disabled)!=null?u:!1,rules:d(w),login:!0,enableEmail:!0,onlyPhoneEnable:!1,onlyAccountEnable:!1,showDropdown:!!o.value.length&&t.value===l.Email,selectOptions:o.value,prefixAreaCode:f.value,prefix:()=>f.value?s(Ve,{lockAreaCode:e.disabled?G().state.code:void 0,onChange:n.value?c:void 0},null):s(Te,{icon:L()},null),switchType:{show:p().phone&&p().account&&!e.disabled,type:t.value,onType:y=>{y===l.Phone&&a.setType(l.Phone),y===l.Account&&a.setType(l.Account),z(c)}}},null)}}}),[dt]=H("forget-password-verify"),ft=Q({name:dt,setup(){const{t:e}=X(),h=N(),a=le(),t=M(),n=G(),r=ze(),{closeDialog:w}=ne("forgetPassword"),{setFieldError:o}=Oe(),i=E({get:()=>t.state.type,set:b=>t.setType(b)}),c=N(),m=N([]),p=ie(i,c,a.values),L=N(!1),d=N(!1),{forgetPasswordConfig:f}=te();re(()=>t.account,()=>o("account"));const u=b=>{b&&Ue.lock(),ee().close("forgetPassword")},y=Ne.Route,O=async()=>{if(t.state.account===r.keyword&&r.openDevtools(),!(!(await a.validate()).valid||!i.value||t.state.loading)&&p.accountPayload.value){t.setLoading(),o("account");try{const v=await pe({data:p.accountPayload.value});if(t.delLoading(),!v.data.data)return o("account",()=>s(B,{onCustomer:u,mode:y,message:()=>e("lobby.common.supports.simple")},null));t.state.userBinds=v.data.data;const{verifyList:P,canForget:_}=f(p.isAccount.value,t.state.userBinds);if(!_)return o("account",()=>s(B,{onCustomer:u,mode:y,message:()=>e("lobby.common.supports.forgotPwdAndUnavailableVerify")},null));L.value=!0,m.value=P;let S=0;i.value===l.Phone&&(S=m.value.findIndex(T=>T===g.PHONE)),i.value===l.Email&&(S=m.value.findIndex(T=>T===g.EMAIL)),S=S>=0?S:0,c.value=m.value[S]}catch(v){t.delLoading();const{code:P,msg:_,errorCode:S}=Y(v),{ACCOUNT_ERROR:T,ACCOUNT_FREEZE:k,ACCOUNT_ERROR_EXTREME:R,ACCOUNT_WARING:q,SUCCESSCODE:ue,SYSTEM_NOT_ABNORMAL:ce,GEETEST_ILLEGAL_REQUEST:de}=F;if(j.hasAbort(v))return;if(P===T)return o("account",()=>s(B,{onCustomer:u,mode:y,message:()=>e("lobby.common.supports.accountError")},null));if([k,R,q].includes(P)&&_)return o("account",_);if(P===ue&&S===ce)return o("account",e("lobby.modal.forgotPassword.systembusy"));if(P===de)w("forgetPassword"),x("GEETEST_ILLEGAL_REQUEST").emit({code:P,msg:_});else return o("account",()=>s(B,{onCustomer:u,mode:y,message:()=>e("lobby.common.supports.simple")},null))}}},I=async()=>{if(!(await a.validate()).valid)return;t.setLoading();const{verifyFilds:v,...P}=p.verifyPayload.value;try{await ye({data:{...P,firstVerify:je(v)}}),t.delLoading(),t.state.useQuestionVerify=c.value===g.QUESTION,t.setSetp(D.Editor),d.value=!0}catch(_){t.delLoading();const{code:S,msg:T}=Y(_);if(j.hasAbort(_))return;if(S===F.CONFIG_CHANGE_ERR_1){x("CONFIG_CHANGE_ERR").emit(),t.reset();return}if(h.value){const k=h.value.querySelectorAll(".lobby-form-item"),R=k.item(k.length-1);if(!R)return;const q=R.getAttribute("data-item-name");return q?o(q,T):void 0}}},V=E(()=>{const b=p.equalPhone.value,v=p.equalEmail.value,P={type:i.value===l.Email?"email":"account",value:t.account},_={type:i.value===l.Phone?"phone":"account",value:t.account};return{phone:{equalPhone:b,showLabel:!b,showPhone:!b,createVerify:b?void 0:P},email:{equalEmail:v,showLabel:!v,showEmail:!v,createVerify:v?void 0:_}}});return()=>{var b,v,P,_,S,T,k;return s("div",{class:C.verify,ref:h},[s(ct,{modelValue:t.state.account,"onUpdate:modelValue":R=>t.state.account=R,type:i.value,"onUpdate:type":R=>i.value=R,disabled:L.value},null),i.value&&L.value&&Ye(c.value)&&s("div",{class:C.form},[s("div",{class:C.spaceLine},null),s(Z,{active:c.value,"onUpdate:active":R=>c.value=R,sources:m.value,attrs:{[g.PHONE]:{target:V.value.phone.equalPhone?t.account:void 0,showLabel:V.value.phone.showLabel,showPhone:V.value.phone.showPhone,createVerify:V.value.phone.createVerify,desc:(b=t.state.userBinds)==null?void 0:b.a.mobile_phone,attrs:{phone:{placeholder:ke((v=t.state.userBinds)==null?void 0:v.a.mobile_phone),lockAreaCode:n.parser((P=t.state.userBinds)==null?void 0:P.a.mobile_phone).code}}},[g.EMAIL]:{target:V.value.email.equalEmail?t.account:void 0,showLabel:V.value.email.showLabel,showEmail:V.value.email.showEmail,createVerify:V.value.email.createVerify,desc:(_=t.state.userBinds)==null?void 0:_.a.email,attrs:{email:{placeholder:Ie((S=t.state.userBinds)==null?void 0:S.a.email)}}},[g.QUESTION]:{attrs:{question:{defaultValue:(k=(T=t.state.userBinds)==null?void 0:T.b)==null?void 0:k.question}}}}},null)]),s("div",{class:C.button},[s(oe,{block:!0,type:"primary",loading:t.state.loading,disabled:!t.state.account,onClick:L.value?I:O},{default:()=>[t.state.loading&&!L.value?e("lobby.common.tips.validating"):e("lobby.common.tips.next")]})])])}}}),mt="_forgetPasswordDialog_1999v_17",pt="_forgetPassword_1999v_17",K={forgetPasswordDialog:mt,forgetPassword:pt},[yt]=H("pages-dialogs-login-register"),Tt=Q({name:yt,setup(){const{t:e}=X(),{visible:h,onDialogOpen:a,closeDialog:t}=ne("forgetPassword"),n=J(),r=G(),w=Fe(),o=M(),{openLoginRegister:i,usePageing:c}=ae();return a(()=>{if(n.hasLogined){t("forgetPassword");return}o.delLoading(),o.setSetp(D.Verify),o.setType(),o.state.account="",se().reportOpenForgetPassword(),r.initApis()}),()=>s(De,{show:h.value,"onUpdate:show":m=>h.value=m,class:K.forgetPasswordDialog,closeControl:{shouldOccupySpace:!0},closeOnRouteChange:!1,beforeClose:async()=>{const m=w.state.openOptions;return c.value||await i({...m,login:!0,openType:"insert"}),!0}},{default:()=>[s("div",{class:K.forgetPassword},[s(ve,{title:e("lobby.modal.forgotPassword.title"),step:o.state.step,steps:[e("lobby.modal.forgotPassword.step1"),e("lobby.modal.forgotPassword.step2")]},null),o.state.step===D.Verify?s(ft,{key:o.state.key},null):s(it,{key:o.state.key},null)])]})}});export{Tt as default};
//# sourceMappingURL=ForgetPasswordIndex.4U9z8iEb.js.map
