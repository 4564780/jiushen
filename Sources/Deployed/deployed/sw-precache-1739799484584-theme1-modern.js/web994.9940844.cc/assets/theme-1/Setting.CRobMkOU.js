import{gm as f,q as P,gr as fe,a as I,g3 as ge,fR as Ae,fQ as he,gs as we,fP as j,aE as V,cX as K,gt as J,gu as qe,gv as Ee,a0 as pe,fY as ve,gw as Ie,a4 as z,gx as $,I as G,gy as re,b8 as Ce,dM as Oe,bY as d,fM as _e,gz as Le,gA as Ne,aa as Re,t as Ue,cD as N,cE as R,fO as Be,gB as $e,gC as We,S as xe,gg as ke,gD as ue,E as ze,b as Ge,U as Qe,ab as ce}from"./main.C8q1iJMV.js";import{d as He,u as Me}from"../vendors/vendor-stable.LD58Pbb3.js";import{f as w,l as p,p as t,q as _,h as W,D as Q,F as O,r as v,o as De,v as Fe,b9 as je}from"../vendors/vendor-@vue.DNlpgob2.js";import{m as Z,e as Ye,B as Ke}from"../vendors/vendor-lodash.BYdGDldS.js";import{_ as Pe,e as Se,p as Xe,I as Y}from"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";const B=e=>Z({type:{type:String,required:!0,default:f.Bind},label:{type:Object,default:void 0},desc:{type:String,default:void 0}},e),Je=B({target:{type:String,default:void 0},showLabel:{type:Boolean,default:!0},showEmail:{type:Boolean,default:!0},showCode:{type:Boolean,default:void 0},createVerify:{type:Object,default:void 0},attrs:Object}),Ze=B({attrs:Object}),et=B({confirmLabel:{type:String},autoShowPasswordConfirm:{type:Boolean,default:!1},attrs:Object}),X={modelValue:{type:Number},type:{type:String,required:!0},visible:{type:String,default:"auto"},filterActive:{type:String,default:"auto"},verifys:{type:Array},onClick:{type:Function},onTrigger:{type:Function},labelTitle:{type:String},labelHtml:{type:String}},tt=B({target:{type:String,default:void 0},showLabel:{type:Boolean,default:!0},showPhone:{type:Boolean,default:!0},showCode:{type:Boolean,default:void 0},createVerify:{type:Object,default:void 0},attrs:Object}),nt=B({attrs:Object}),at=B({attrs:Object}),st=B({toggleVisible:{type:Boolean},confirmLabel:{type:String},attrs:Object}),ee=e=>Z({active:Number,sources:Array,other:{type:Object,default:{visible:X.visible.default,filterActive:X.filterActive.default}},attrs:{default:void 0,type:Object}},e);function x(e,n,l){return{label:w(()=>Z({},l,n)[e])}}function k(e){const{Bind:n,Verify:l,Edit:s}=f;return{isBind:e===n,isEdit:e===s,isVerify:e===l}}const lt=B({name:{type:String,required:!0},label:{type:String}}),ot="_container_1ylhz_17",it="_label_1ylhz_25",rt="_desc_1ylhz_28",ut="_slot_1ylhz_42",M={container:ot,label:it,desc:rt,slot:ut},[ct]=P("pages-security-components-label"),A=p({name:ct,props:lt,setup(e,{slots:n}){const l={["data-security-".concat(e.type,"-label")]:e.name};return()=>t("div",_({class:M.container},l),[e.label&&t("span",{class:M.label},[e.label]),e.desc&&t("span",{class:M.desc},[e.desc]),n.right&&t("span",{class:M.slot},[n.right()])])}}),[dt]=P("security-email"),D="email",te=p({name:dt,props:Je,setup(e){fe();const{t:n}=I(),l=k(e.type),{enableUsingEmail:s}=ge(),a=W({email:"",emailCode:""}),{label:i}=x(e.type,e.label,{bind:n("lobby.center.security.email.bind.title"),edit:n("lobby.center.security.email.update.title"),verify:n("lobby.modal.forgotPassword.verifyEmail")}),u=w(()=>l.isVerify?j.Verify:j.Bind);Q(()=>{e.target&&(a.email=e.target)});const c=w(()=>{var o;return(o=e.showCode)!=null?o:s.value});return()=>{var o,r;return t(O,null,[e.showLabel&&t(A,{type:e.type,name:D,label:i.value,desc:e.desc},null),e.showEmail&&t(Ae,_({required:!0,name:D,modelValue:a.email,"onUpdate:modelValue":y=>a.email=y},(o=e.attrs)==null?void 0:o.email),null),c.value&&t(he,_({required:!0,mode:"email",name:"emailCode",target:a.email,modelValue:a.emailCode,"onUpdate:modelValue":y=>a.emailCode=y,createMode:u.value,createVerify:e.createVerify,setEmailError:Pe(D),setEmailSuccess:we(D)},(r=e.attrs)==null?void 0:r.code),null)])}}}),Ve=e=>V.request({...e,url:"/user/security/verifymodify",method:"post"},{oss:{enable:!1}}),hn=e=>V.request({...e,method:"POST",url:"/user/notlogin/getAccountVerifyList"},{oss:{enable:!1},token:{type:"staticOnly"},error:{action:"noMessage"}}),wn=e=>V.request({...e,method:"POST",url:"/user/notLogin/resetPassVerify"},{oss:{enable:!1},token:{type:"staticOnly"},error:{action:"noMessage",actionExcludes:[K.CONFIG_CHANGE_ERR_1]}}),pn=e=>V.request({...e,method:"POST",url:"/user/notlogin/resetpasswd"},{oss:{enable:!1},token:{type:"staticOnly"},error:{action:"normal",actionExcludes:[K.REGISTER_USERNAME_PASSWORD_SAME_ERR]}}),vn=e=>V.request({...e,method:"POST",url:"/user/security/switchgoogleauth"},{oss:{enable:!1}}),_n=e=>V.request({...e,method:"POST",url:"/user/security/bindgoogleauth"},{oss:{enable:!1}}),Pn=e=>V.request({...e,method:"POST",url:"/user/security/verifyGoogleAuthCode"},{oss:{enable:!1}}),Sn=e=>V.request({...e,method:"POST",url:"/user/security/verifyLoginPass"},{oss:{enable:!1},error:{action:"normal",actionExcludes:[K.SECURITY_PASSWORD_EQUAL]}}),Vn=e=>V.request({...e,method:"POST",url:"/user/changepass"},{oss:{enable:!1}}),Tn=e=>V.request({...e,method:"POST",url:"/user/security/verifyWithdrawPass"},{oss:{enable:!1},error:{action:"normal",actionExcludes:[K.SECURITY_PASSWORD_EQUAL]}}),An=e=>V.request({...e,method:"POST",url:"/user/security/modifywithdrawpass"},{oss:{enable:!1}}),qn=e=>V.request({...e,method:"POST",url:"/user/passquint"},{oss:{enable:!1}}),En=e=>V.request({...e,method:"POST",url:"/user/editquint"},{oss:{enable:!1}}),In=e=>V.request({method:"POST",url:"/user/security/actionVerify",data:{info_type:J.THIRD_BIND,firstVerify:{type:qe.LOGIN_PWD,login_pass:e.loginPass}}},{oss:{enable:!1}}),[mt]=P("form-item-ga-code"),de=p({name:mt,props:Ee,emits:["update:modelValue"],setup(e,{emit:n}){const{t:l}=I(),s=w({get:()=>e.modelValue,set:o=>n("update:modelValue",i(o))}),a=w(()=>{var o;return(o=e.max)!=null?o:6}),i=o=>o.replace(/[^\d]/g,"").slice(0,a.value),u=w(()=>{var o;return(o=e.placeholder)!=null?o:l("lobby.common.components.auth.ga.inputTips")}),c=(o="")=>!e.required&&!o?!0:e.required&&!$(o)?u.value:!0;return()=>{var o;return t(z,{name:e.name,required:e.showRequired,rules:(o=e.rules)!=null?o:c},{default:()=>[t(pe,{value:s.value,"onUpdate:value":r=>s.value=r,clearable:e.clearable,"data-input-name":e.name,placeholder:u.value,onFocus:e.onFocus,onBlur:e.onBlur},{prefix:()=>t(ve,{icon:"/lobby_asset/common/common/profile/icon_wd_ggyz_b.png"},null),suffix:()=>t(Ie,{onPaste:r=>{r&&(s.value=r)}},null)})]})}}}),yt="_ga_1gzm1_17",bt="_edit_1gzm1_20",ft="_steps_1gzm1_30",gt="_step_1gzm1_30",ht="_title_1gzm1_39",wt="_subTitle_1gzm1_44",pt="_subTitleItem_1gzm1_49",vt="_text_1gzm1_52",_t="_name_1gzm1_55",Pt="_icon_1gzm1_59",St="_link_1gzm1_64",Vt="_qrImage_1gzm1_67",Tt="_tips_1gzm1_81",At="_key_1gzm1_93",qt="_copy_1gzm1_96",Et="_input_1gzm1_103",b={ga:yt,edit:bt,steps:ft,step:gt,title:ht,subTitle:wt,subTitleItem:pt,text:vt,name:_t,icon:Pt,link:St,qrImage:Vt,tips:Tt,key:At,copy:qt,input:Et},[It]=P("security-ga"),ne=p({name:It,props:Ze,setup(e){const n=v(!1),l=v(!1),{t:s}=I(),a=v(),i=W({gaCode:""}),{isBind:u,isEdit:c,isVerify:o}=k(e.type),{label:r}=x(e.type,e.label,{bind:s("lobby.center.security.ga.bind.title"),edit:s("lobby.center.security.ga.close"),verify:s("lobby.common.components.auth.ga.title")});return De(async()=>{var m;if(l.value||!u)return;l.value=!0;const[g,S]=await Se(Ve({data:{type:J.GA}}));if(l.value=!1,g||!S){a.value=void 0;return}a.value=(m=S.data.data)==null?void 0:m.info}),()=>{var g,S;return o?t("div",{class:b.ga},[t(A,{type:e.type,name:"ga",label:r.value},null),t(de,{name:"gaCode",required:!0,modelValue:i.gaCode,"onUpdate:modelValue":m=>i.gaCode=m},null)]):c?t("div",{class:b.ga},[t(A,{type:e.type,name:"ga",label:r.value},null),t("div",{class:b.edit},[t(G,{src:"/lobby_asset/common/common/profile/icon_wd_ggyz_b.png"},null),s("lobby.center.security.status"),Fe(":  "),s("lobby.center.security.open")])]):t("div",{class:b.ga},[t(A,{type:e.type,name:"ga",label:r.value,desc:e.desc},null),t("ul",{class:b.steps},[t("li",{class:b.step},[t("h3",{class:b.title},[s("lobby.center.security.ga.steps.1.title")]),t("div",{class:b.subTitle},[t("p",null,[t("span",{class:[b.subTitleItem,b.text]},[s("lobby.center.security.ga.steps.1.search")]),t("span",{class:[b.subTitleItem,b.icon]},[t(G,{class:b.icon,src:"/lobby_asset/common/common/profile/icon_wd_ggyz_b.png"},null)]),t("span",{class:[b.subTitleItem,b.name]},[s("lobby.center.security.ga.tab")]),t("span",{class:[b.subTitleItem,b.text]},[s("lobby.center.security.ga.steps.1.tablink")]),t("span",{class:[b.subTitleItem,b.link]},[t("a",{class:b.link,target:"_blank",href:re.url},[re.url])]),t("span",{class:[b.subTitleItem,b.text]},[s("lobby.center.security.ga.steps.1.download")])])])]),t("li",{class:b.step},[t("h3",{class:b.title},[s("lobby.center.security.ga.steps.2.title")]),t("div",null,[t("div",{class:b.qrImage},[(g=a.value)!=null&&g.image?t("img",{alt:"",src:"data:image/png;base64,".concat(a.value.image)},null):t(Ce,null,null)]),t("div",{class:b.tips},[n.value&&((S=a.value)!=null&&S.key)?t(O,null,[t("span",{class:b.key},[a.value.key]),t(Oe,{class:b.copy,text:a.value.key},null)]):t("span",{class:b.text,onClick:()=>n.value=!n.value},[s("lobby.center.security.ga.steps.2.content")])])])]),t("li",{class:b.step},[t("h3",{class:b.title},[s("lobby.center.security.ga.steps.3.title")]),t("div",{class:b.input},[t(de,_({name:"gaCode",required:!0,modelValue:i.gaCode,"onUpdate:modelValue":m=>i.gaCode=m},e.attrs),null)])])])])}}}),[Ct]=P("security-loginpass"),ae=p({name:Ct,props:et,setup(e){const{t:n}=I(),l=v(!1),s=v(!1),a=W({loginPass:"",confirmLoginPass:""}),{isVerify:i}=k(e.type),u=Xe(location.search),c=Y("confirmLoginPass"),{label:o}=x(e.type,e.label,{bind:n("lobby.center.security.loginPwd.newPwd.label"),edit:n("lobby.center.security.loginPwd.title"),verify:u.active==="".concat(d.LOGINPASS)?n("lobby.center.security.validOldPwd"):n("lobby.center.security.valid")}),r=w(()=>{var g;return(g=e.confirmLabel)!=null?g:n("lobby.modal.forgotPassword.pleaseCheckNewPassword")}),y=w(()=>i?!1:e.autoShowPasswordConfirm?!l.value:!0);return()=>{var g,S;return t(O,null,[t(A,{type:e.type,name:"loginpass",label:o.value,desc:e.desc},null),t(_e,_({strengthSize:"large",required:!0,name:"loginPass",useConfig:!i,modelValue:a.loginPass,"onUpdate:modelValue":m=>a.loginPass=m,visiblePassword:l.value,"onUpdate:visiblePassword":m=>l.value=m,onChange:m=>{m&&a.confirmLoginPass&&c()}},(g=e.attrs)==null?void 0:g.loginPass),null),y.value&&t(O,null,[t(A,{type:e.type,name:"loginpass",label:r.value},null),t(Le,_({required:!0,name:"confirmLoginPass",password:a.loginPass,modelValue:a.confirmLoginPass,"onUpdate:modelValue":m=>a.confirmLoginPass=m,visiblePassword:s.value,"onUpdate:visiblePassword":m=>s.value=m},(S=e.attrs)==null?void 0:S.confirmLoginPass),null)])])}}}),Ot="_otherVerify_1u4dc_17",Lt="_slots_1u4dc_23",Nt="_dialog_1u4dc_31",Rt="_content_1u4dc_45",Ut="_list_1u4dc_53",Bt="_onlyOne_1u4dc_61",$t="_item_1u4dc_64",Wt="_image_1u4dc_75",xt="_text_1u4dc_80",kt="_tips_1u4dc_88",E={otherVerify:Ot,slots:Lt,switch:"_switch_1u4dc_26",dialog:Nt,content:Rt,list:Ut,onlyOne:Bt,item:$t,image:Wt,text:xt,tips:kt},[zt]=P("security-components-other"),Gt=p({name:zt,props:X,setup(e,{emit:n,slots:l}){const{t:s}=I(),a=v(!1),{navigateToServicePage:i}=Ne(),u=w({get:()=>e.modelValue,set:m=>n("update:modelValue",m)}),c=()=>{if(e.onTrigger)return e.onTrigger();a.value=!a.value},o=m=>{const L=()=>u.value=m;e.onClick?e.onClick(m):L(),c()},r=()=>({label:{[f.Verify]:()=>s("lobby.common.components.auth.othersVerify"),[f.Bind]:()=>s("lobby.center.security.bindOther"),[f.Edit]:()=>""},title:{[f.Verify]:()=>s("lobby.common.components.auth.othersVerify"),[f.Bind]:()=>s("lobby.center.security.bindOther"),[f.Edit]:()=>""},config:[{type:d.LOGINPASS,icon:"/lobby_asset/common/common/profile/icon_wd_dlmm_b.png",title:{[f.Verify]:()=>s("lobby.center.security.loginLable"),[f.Bind]:()=>s("lobby.center.security.loginLable"),[f.Edit]:()=>""}},{type:d.PHONE,icon:"/lobby_asset/common/common/profile/icon_wd_dxyz.png",title:{[f.Verify]:()=>s("lobby.common.components.auth.phone.title"),[f.Bind]:()=>s("lobby.center.security.phone.tab"),[f.Edit]:()=>""}},{type:d.EMAIL,icon:"/lobby_asset/common/common/profile/icon_wd_yxyz.png",title:{[f.Verify]:()=>s("lobby.common.components.auth.email.title"),[f.Bind]:()=>s("lobby.center.security.email.tab"),[f.Edit]:()=>""}},{type:d.GA,icon:"/lobby_asset/common/common/profile/icon_wd_ggyz_b.png",title:{[f.Verify]:()=>s("lobby.common.components.auth.ga.title"),[f.Bind]:()=>s("lobby.center.security.ga.tab"),[f.Edit]:()=>""}},{type:d.QUESTION,icon:"/lobby_asset/common/common/profile/icon_wd_mbyz_b.png",title:{[f.Verify]:()=>s("lobby.common.components.auth.question.title"),[f.Bind]:()=>s("lobby.center.security.question.tab"),[f.Edit]:()=>""}},{type:d.WITHDRAWPASS,icon:"/lobby_asset/common/common/profile/icon_wd_txmm_b.png",title:{[f.Verify]:()=>N([[R.enable,s("lobby.club.components.auth.withdrawal.label")]],s("lobby.common.components.auth.withdrawal.label")),[f.Bind]:()=>N([[R.enable,s("lobby.club.security.withdrawalPwd.tab")]],s("lobby.center.security.withdrawalPwd.tab")),[f.Edit]:()=>""}}]}),y=w(()=>{const m=r(),L=m.label[e.type],C=m.title[e.type];let T=m.config.filter(q=>{var H;return(H=e.verifys)==null?void 0:H.includes(q.type)}),h=e.filterActive;h==="auto"&&(h=T.length>1),h&&(T=T.filter(q=>q.type!==u.value));const U=T.map(q=>({...q,title:q.title[e.type]}));return{label:L,title:C,config:U}}),g=w(()=>y.value.config.length===1),S=m=>{if(m.target.tagName.toLocaleLowerCase()==="span")return m.preventDefault(),i({openType:"overlay"}),!1};return()=>{var m,L,C;if(!(!y.value.config.length&&e.visible==="auto"))return t("div",{class:E.otherVerify},[t("div",{class:E.slots},[(m=l==null?void 0:l.default)==null?void 0:m.call(l)]),t("div",{class:E.switch,onClick:c},[(L=e.labelHtml)!=null?L:y.value.label()]),t(Re,{show:a.value,"onUpdate:show":T=>a.value=T,title:(C=e.labelTitle)!=null?C:y.value.title(),class:E.dialog,closeOnClickOverlay:!1,closeControl:{shouldOccupySpace:!0}},{default:()=>[t("div",{class:E.content},[t("ul",{class:[E.list,{[E.onlyOne]:g.value}]},[y.value.config.map(T=>t("li",{class:E.item,onClick:()=>o(T.type)},[t(G,{useSkeleton:!0,class:E.image,src:T.icon},null),t("span",{class:E.text},[T.title()])]))]),t("div",{style:{flex:1}},null),t(Ue,{class:E.tips,onClick:S,html:s("lobby.common.supports.authUnavailable")},null)])]})])}}}),[Qt]=P("security-phone"),F="phone",se=p({name:Qt,props:tt,setup(e){fe();const{t:n}=I(),l=k(e.type),{enableUsingSms:s}=ge(),a=W({phone:"",phoneCode:""}),{label:i}=x(e.type,e.label,{bind:n("lobby.center.security.phone.bind.title"),edit:n("lobby.center.security.phone.update.title"),verify:n("lobby.common.components.auth.phone.title")}),u=w(()=>l.isVerify?j.Verify:j.Bind);Q(()=>{e.target&&(a.phone=e.target)});const c=w(()=>{var o;return(o=e.showCode)!=null?o:s.value});return()=>{var o,r;return t(O,null,[e.showLabel&&t(A,{type:e.type,name:F,label:i.value,desc:e.desc},null),e.showPhone&&t(Be,_({required:!0,name:F,modelValue:a.phone,"onUpdate:modelValue":y=>a.phone=y},(o=e.attrs)==null?void 0:o.phone),null),c.value&&t(he,_({required:!0,mode:"phone",name:"phoneCode",target:a.phone,modelValue:a.phoneCode,"onUpdate:modelValue":y=>a.phoneCode=y,createMode:u.value,createVerify:e.createVerify,setPhoneError:Pe(F),setPhoneSuccess:we(F)},(r=e.attrs)==null?void 0:r.code),null)])}}}),[Ht]=P("form-item-question"),me=p({name:Ht,props:$e,emits:["update:modelValue"],setup(e,{emit:n}){const{t:l}=I(),s=w({get:()=>e.modelValue,set:u=>n("update:modelValue",u)}),a=w(()=>e.placeholder?e.placeholder:l("lobby.common.components.auth.question.inputTips")),i=(u="")=>!e.required&&!u?!0:e.required&&!$(u)?a.value:!0;return()=>{var u;return t(z,{name:e.name,rules:(u=e.rules)!=null?u:i,required:e.showRequired},{default:()=>[t(pe,{maxlength:20,clearable:e.clearable,value:s.value,"onUpdate:value":c=>s.value=c,"data-input-name":e.name,placeholder:a.value,onFocus:e.onFocus,onBlur:e.onBlur},{prefix:()=>t(ve,{icon:"/lobby_asset/common/web/common/input_icon_yz.svg"},null)})]})}}}),Mt=He("question",()=>{const e=v(-1),n=v([]),l=v(!1);return{question:e,questions:n,initQuestions:async()=>{var i;if(l.value)return;l.value=!0;const[,a]=await Se(Ve({data:{type:J.QUESTIONS}}));l.value=!1,(i=a==null?void 0:a.data.data)!=null&&i.info&&(n.value=a.data.data.info.question,e.value=a.data.data.info.current)}}}),Dt="_activeIcon_7zilm_17",Ft={activeIcon:Dt},[jt]=P("form-item-question-answer"),Yt=p({name:jt,props:We,emits:["update:modelValue"],setup(e,{emit:n}){const{t:l}=I(),s=Mt(),a=w({get:()=>e.modelValue,set:o=>n("update:modelValue",o)});je(s.initQuestions),Q(()=>{var o;if(s.questions.length){const r=(o=e.defaultValue)!=null?o:s.question,y=s.questions.map(g=>g.id);Ye(y,r)?a.value=r:a.value=s.questions[0].id}});const i=w(()=>s.questions.map(o=>({label:o.question,value:o.id}))),u=w(()=>e.placeholder?e.placeholder:l("lobby.common.components.auth.question.name")),c=(o="")=>!e.required&&!o?!0:e.required&&!$(o)?u.value:!0;return()=>{var o;return t(z,{name:e.name,rules:(o=e.rules)!=null?o:c,required:e.showRequired},{default:()=>[t(xe,{key:a.value+i.value.length,size:"large",allowClear:!1,modelValue:a.value,"onUpdate:modelValue":r=>a.value=r,options:i.value,placeholder:u.value,onFocus:e.onFocus,onBlur:e.onBlur,offset:[0,0]},{prefix:()=>t(G,{useSkeleton:!0,class:Ft.activeIcon,src:"/lobby_asset/common/web/common/input_icon_mb.svg"},null)})]})}}}),[Kt]=P("security-question"),le=p({name:Kt,props:nt,setup(e){const{t:n}=I(),l=W({questionId:0,questionAnswer:"",confirmQuestionAnswer:""}),{isVerify:s}=k(e.type),a=Y("confirmQuestionAnswer"),{label:i}=x(e.type,e.label,{bind:n("lobby.center.security.question.bind.title"),edit:n("lobby.center.security.question.update.title"),verify:n("lobby.common.components.auth.question.title")});return()=>{var u,c,o,r,y;return t(O,null,[t(A,{type:e.type,name:"question",label:i.value,desc:e.desc},null),t(Yt,_({required:!0,name:"questionId",modelValue:l.questionId,"onUpdate:modelValue":g=>l.questionId=g},(u=e.attrs)==null?void 0:u.question,{defaultValue:e.type===f.Verify?(o=(c=e.attrs)==null?void 0:c.question)==null?void 0:o.defaultValue:-1}),null),t(me,_({required:!0,name:"questionAnswer",modelValue:l.questionAnswer,"onUpdate:modelValue":g=>l.questionAnswer=g,rules:g=>$(g)?(l.questionAnswer&&l.confirmQuestionAnswer&&a(),!0):n("lobby.common.components.auth.question.inputTips")},(r=e.attrs)==null?void 0:r.answer),null),!s&&t(me,_({required:!0,name:"confirmQuestionAnswer",modelValue:l.confirmQuestionAnswer,"onUpdate:modelValue":g=>l.confirmQuestionAnswer=g,rules:g=>$(g)?l.questionAnswer!==l.confirmQuestionAnswer?n("lobby.center.security.question.notMatch"):!0:n("lobby.center.security.question.answerConfirmPlaceholder")},(y=e.attrs)==null?void 0:y.confirmAnswer),null)])}}}),Xt="_subTitle_13lxx_17",Jt={subTitle:Xt},[Zt]=P("security-thirdparty"),oe=p({name:Zt,props:at,setup(e){const{t:n}=I(),{push:l}=Ge(),s=W({loginPass:""}),a=ke(),{isBind:i,isEdit:u,isVerify:c}=k(e.type),{label:o}=x(e.type,e.label,{bind:n("lobby.center.security.thirdWay.tab"),edit:"",verify:""}),r=()=>{l({name:ze.SECURITY})};return()=>{var y;if(i)return t(O,null,[t(A,{type:e.type,name:"third-party",label:o.value,desc:n("lobby.center.security.notBind")},null),t("div",{class:Jt.subTitle},[n("lobby.center.security.thirdWay.tips")]),t(A,{type:e.type,name:"third-party",label:n("lobby.center.security.valid")},null),t(_e,_({required:!0,name:"loginPass",modelValue:s.loginPass,"onUpdate:modelValue":g=>s.loginPass=g},(y=e.attrs)==null?void 0:y.password),null)]);if(u)return t(ue,{mode:"preview",align:"left",subName:!0,subTitle:a.value.thirdEmail,binded:a.value.thirdType,onBindSuccess:r},null);if(c)return t(ue,{mode:"bind",align:"left",subName:!0,onBindSuccess:r},null)}}}),en="_eye_78ni1_17",tn="_show_78ni1_21",ye={eye:en,show:tn},[nn]=Qe("eye"),be=p({name:nn,props:{modelValue:Boolean},emits:["update:modelValue"],setup(e,{emit:n}){return()=>t(G,{useSkeleton:!0,class:{[ye.eye]:!0,[ye.show]:e.modelValue},onClick:()=>n("update:modelValue",!e.modelValue),src:"/lobby_asset/common/web/common/comm_icon_".concat(e.modelValue?"show":"hide",".svg")},null)}}),an="_topTitle_gpnuv_17",sn={topTitle:an},[ln]=P("security-withdrawpass"),ie=p({name:ln,props:st,setup(e){const{t:n}=I(),l=v(),s=v(),a=W({withdrawPass:"",confirmWithdrawPass:""}),i=v(!1),u=v(!1),c=Y("withdrawPass"),o=Y("confirmWithdrawPass"),r=6,y=async()=>{await c(),await o()},{isVerify:g,isBind:S}=k(e.type),{label:m}=x(e.type,e.label,{bind:N([[R.enable,n("lobby.club.security.withdrawalPwd.bind.title")]],n("lobby.center.security.withdrawalPwd.bind.title")),edit:N([[R.enable,n("lobby.club.security.withdrawalPwd.update.title")]],n("lobby.center.security.withdrawalPwd.update.title")),verify:N([[R.enable,n("lobby.club.components.auth.withdrawal.label")]],n("lobby.common.components.auth.withdrawal.label"))}),L=w(()=>{var C;return(C=e.confirmLabel)!=null?C:N([[R.enable,n("lobby.club.security.withdrawalPwd.confirmNewPwd")]],n("lobby.center.security.withdrawalPwd.confirmNewPwd"))});return()=>{var C,T;return t(O,null,[S&&t("h3",{class:sn.topTitle},[N([[R.enable,n("lobby.club.security.withdrawalPwd.bind.topTips")]],n("lobby.center.security.withdrawalPwd.bind.topTips"))]),t(A,{type:e.type,name:"withdrawpass",label:m.value,desc:e.desc},{right:()=>t(be,{modelValue:i.value,"onUpdate:modelValue":h=>i.value=h},null)}),t(z,_({name:"withdrawPass",validateTrigger:"onBlur",rules:h=>{if(!$(h))return N([[R.enable,n("lobby.club.security.withdrawalPwd.withdrawalPwdNonEmpty")]],n("lobby.center.security.withdrawalPwd.withdrawalPwdNonEmpty"));const U="0123456789876543210",q=h.length===r,H=/(\w)\1{5}/.test(h),Te=U.indexOf(h)>=0;return q&&(H||Te)?n("lobby.center.security.withdrawalPwd.sameOrContinuousTip"):/^\d{6}$/.test(h)?!0:n("lobby.common.formRules.paypass",{length:r})}},(C=e.attrs)==null?void 0:C.withdrawPass),{default:()=>[t(ce,{length:r,ref:l,mask:!i.value,modelValue:a.withdrawPass,"onUpdate:modelValue":h=>a.withdrawPass=h,onComplete:()=>{var h,U,q;(h=l.value)==null||h.blur(),a.confirmWithdrawPass.length===r?o():(q=(U=s.value)==null?void 0:U.focus)==null||q.call(U)}},null)]}),!g&&t(O,null,[t(A,{type:e.type,name:"withdrawpass",label:L.value},{right:()=>t(be,{modelValue:u.value,"onUpdate:modelValue":h=>u.value=h},null)}),t(z,_({name:"confirmWithdrawPass",validateTrigger:"onBlur",rules:h=>$(h)?Ke(a.withdrawPass,a.confirmWithdrawPass)?!0:n("lobby.modal.register.notMatch"):N([[R.enable,n("lobby.club.security.withdrawalPwd.withdrawalPwdNonEmpty")]],n("lobby.center.security.withdrawalPwd.withdrawalPwdNonEmpty"))},(T=e.attrs)==null?void 0:T.confirmWithdrawPass),{default:()=>[t(ce,{length:r,ref:s,mask:!u.value,modelValue:a.confirmWithdrawPass,"onUpdate:modelValue":h=>a.confirmWithdrawPass=h,onComplete:()=>{var h;y(),(h=s.value)==null||h.blur()}},null)]})])])}}}),[on]=P("security-components-verify"),Cn=p({name:on,props:ee(),emits:["update:active"],setup(e,{emit:n}){const l=Me(),s=w(()=>Number(l.query.active)),a=w({get:()=>{var c;return(c=e.active)!=null?c:s.value},set:c=>n("update:active",c)}),i=c=>{var o;return{...(o=e.attrs)==null?void 0:o[c],type:f.Verify}},u=()=>{const{PHONE:c,EMAIL:o,GA:r,LOGINPASS:y,WITHDRAWPASS:g,QUESTION:S,THIRDPARTY:m}=d;switch(a.value){case d.PHONE:return t(se,i(c),null);case d.EMAIL:return t(te,i(o),null);case d.GA:return t(ne,i(r),null);case d.LOGINPASS:return t(ae,i(y),null);case d.WITHDRAWPASS:return t(ie,i(g),null);case d.QUESTION:return t(le,i(S),null);case d.THIRDPARTY:return t(oe,i(m),null);case d.USER:case d.WITHDRAWACCOUNT:default:return}};return()=>t(O,null,[u(),e.other.visible&&t(Gt,_({type:f.Verify,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,verifys:e.sources},e.other),null)])}}),[rn]=P("security-components-editor"),On=p({name:rn,props:ee(),setup(e){const n=v(e.active);Q(()=>{n.value=e.active});const l=a=>{var i;return{...(i=e.attrs)==null?void 0:i[a],type:f.Edit}},s=()=>{const{PHONE:a,EMAIL:i,GA:u,LOGINPASS:c,WITHDRAWPASS:o,QUESTION:r,THIRDPARTY:y}=d;switch(n.value){case d.PHONE:return t(se,l(a),null);case d.EMAIL:return t(te,l(i),null);case d.GA:return t(ne,l(u),null);case d.LOGINPASS:return t(ae,l(c),null);case d.WITHDRAWPASS:return t(ie,l(o),null);case d.QUESTION:return t(le,l(r),null);case d.THIRDPARTY:return t(oe,l(y),null);case d.USER:case d.WITHDRAWACCOUNT:default:return}};return()=>s()}}),[un]=P("security-components-setting"),Ln=p({name:un,props:ee(),setup(e){const n=v(e.active);Q(()=>{n.value=e.active});const l=a=>{var i;return{...(i=e.attrs)==null?void 0:i[a],type:f.Bind}},s=()=>{const{PHONE:a,EMAIL:i,GA:u,LOGINPASS:c,WITHDRAWPASS:o,QUESTION:r,THIRDPARTY:y}=d;switch(n.value){case d.PHONE:return t(se,l(a),null);case d.EMAIL:return t(te,l(i),null);case d.GA:return t(ne,l(u),null);case d.LOGINPASS:return t(ae,l(c),null);case d.WITHDRAWPASS:return t(ie,l(o),null);case d.QUESTION:return t(le,l(r),null);case d.THIRDPARTY:return t(oe,l(y),null);case d.USER:case d.WITHDRAWACCOUNT:default:return}};return()=>s()}});export{Cn as S,Tn as a,An as b,En as c,qn as d,Sn as e,Vn as f,In as g,On as h,Ln as i,Gt as j,Pn as k,vn as l,_n as m,pn as n,hn as o,wn as p,se as q};
//# sourceMappingURL=Setting.CRobMkOU.js.map
