import{a as fe}from"./props.DdPRoj_x.js";import{d as he,s as O,u as te}from"../vendors/vendor-stable.LD58Pbb3.js";import{u as Q}from"./index.BB5bZn2v.js";import{f as x,r as w,w as ue,l as E,p as t,y as U,z as Z,v as de,o as me,C as ye}from"../vendors/vendor-@vue.DNlpgob2.js";import{aE as ne,br as oe,bs as ae,a as D,az as K,bV as J,bL as j,bM as se,aB as ce,bN as be,ca as L,D as xe,ly as z,bG as X,I,cH as h,q as $,m as Ie,t as A,bq as G,Y as ve,bg as we,aa as F,lD as ie,a6 as _e,c2 as Re,df as Be,o as Ce,E as re,b as Te}from"./main.C8q1iJMV.js";import{a as Me}from"./activeReceiveOne.CY32GsDi.js";import{e as ee,d as H,i as ke,a2 as Ae}from"../vendors/vendor-default.CjiYZF7Q.js";import{P as Ee}from"./index.Dc16CbDK.js";import{P as De}from"./PublicIntroductionIndex.bUl03y0X.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";import"./Progress.BhMcUY2s.js";const P=he("eventCollection",()=>{const e=Q(),{eventItemData:o,isItemLoading:a,itemErr:_}=O(e),{getEventItemDetail:v,refreshEventItemDetail:m,resetEventItemData:i}=e,n=x(()=>o.value),s=x(()=>{var c;return(c=n.value)==null?void 0:c.activeData});return{isItemLoading:a,itemErr:_,eventCollectionData:n,activeData:s,getEventItemDetail:v,refreshEventItemDetail:m,resetEventItemData:i}});var V=(e=>(e[e.GAME=1]="GAME",e[e.RECHARGE=2]="RECHARGE",e[e.PROMOTE=3]="PROMOTE",e))(V||{}),q=(e=>(e[e.UnStart=0]="UnStart",e[e.Forward=1]="Forward",e[e.Normal=2]="Normal",e[e.End=3]="End",e))(q||{}),b=(e=>(e[e.undone=0]="undone",e[e.canReceive=1]="canReceive",e[e.received=2]="received",e[e.expired=3]="expired",e[e.distributed=4]="distributed",e[e.cancel=5]="cancel",e[e.pendingApproval=6]="pendingApproval",e[e.pendingApplication=7]="pendingApplication",e[e.reject=8]="reject",e))(b||{});const $e=async e=>{const o=await ne.request({url:"/active/wordSettleDetails",method:"POST",data:{...e},headers:{deviceModel:oe(),devicetype:ae()}},{cache:{useCache:!1},oss:{enable:!1}});return o==null?void 0:o.data.data},Le=async e=>{const o=await ne.request({url:"/active/group_word",method:"POST",data:{activeId:e},headers:{deviceModel:oe(),devicetype:ae()}},{error:{action:"silent"},cache:{useCache:!1},oss:{enable:!1}});return o==null?void 0:o.data.data},We=async(e,o)=>{const a=await ne.request({url:"/active/extract_word",method:"POST",data:{activeId:e,isAll:o},headers:{deviceModel:oe(),devicetype:ae()}},{error:{action:"silent"},cache:{useCache:!1},oss:{enable:!1}});return a==null?void 0:a.data.data},pe=()=>{const{t:e}=D(),o=w(!1),a=w(!1),_=w(!1),v=w(0),m=P(),{eventCollectionData:i,activeData:n}=O(m),s=w(0);return ue(n,(r,g)=>{(r==null?void 0:r.wordTimes)!==(g==null?void 0:g.wordTimes)&&(s.value=(r==null?void 0:r.wordTimes)||0)},{immediate:!0}),{isCompileLoading:o,isExtractLoading:a,isReceiveLoading:_,currentGroupTimes:v,collectWordsTimes:s,handleCompile:async r=>{var l,y,B;if(o.value)return;if(!K().hasLogined){J().openLoginRegister();return}o.value=!0;const[g,f]=await ee(Le((l=i.value)==null?void 0:l.id));if(o.value=!1,g){await j.checkRes({config:{err:g,backupErrMsg:e("lobby.event.collectWords.syntheticFailed")},checkOptions:{[se.userRestrict]:!0}});return}v.value=(y=f==null?void 0:f.currentGroupTimes)!=null?y:0,Q().refreshEventItemDetail((B=i.value)==null?void 0:B.id),ce().freshDiscountRedDot(),be().updatePrize(),r==null||r()},handleExtract:async(r,g)=>{var B,N,S,C;if(a.value)return;if(!K().hasLogined){J().openLoginRegister();return}if(await j.check({checkOptions:{[L.forbidReceive]:!0,[L.task]:!0,[L.receiveType]:!1},eventData:i.value}))return;a.value=!0;const[f,l]=await ee(We((B=i.value)==null?void 0:B.id,r));if(a.value=!1,f){await j.checkRes({config:{err:f,backupErrMsg:e("lobby.event.collectWords.syntheticFailed")},checkOptions:{[se.userRestrict]:!0}});return}let y=[];if(r)s.value=0,y=(N=l==null?void 0:l.filter(Y=>Y.extractTimes))!=null?N:[];else{const Y=s.value!=0?s.value-1:0;s.value=Y,y=(S=l==null?void 0:l.filter(ge=>ge.extractTimes===1))!=null?S:[]}Q().refreshEventItemDetail((C=i.value)==null?void 0:C.id),ce().freshDiscountRedDot(),g==null||g(y)},handleReceive:async(r,g)=>{var f,l;if(!_.value){if(!K().hasLogined){J().openLoginRegister();return}await j.check({eventData:{...i.value,receiveStatus:r.logStatus,receiveCategory:r==null?void 0:r.logCategory,amount:r==null?void 0:r.reward},checkOptions:{[L.forbidReceive]:!0,[L.task]:!0,[L.largeAmount]:!0,[L.pendingCheck]:!0}})||r.logStatus!==b.canReceive||_.value||(_.value=!0,Me({params:{receiveId:((f=r.logId)!=null?f:"").toString(),activeId:(l=i.value)==null?void 0:l.id},onSuccess:g.onSuccess,judgeResBefore:()=>{var y;(y=g.judgeResBefore)==null||y.call(g),_.value=!1}}))}}}};H.extend(ke);H.extend(Ae);const Oe=()=>{const e=P(),{eventCollectionData:o}=O(e),{siteInfos:a}=xe(),_=x(()=>{var p,r,g;const{startTime:m,endTime:i}=o.value||{},n=H().utcOffset((p=a==null?void 0:a.timeZone)!=null?p:"").startOf("day"),s=H.unix(m).utcOffset((r=a==null?void 0:a.timeZone)!=null?r:""),c=H.unix(i).utcOffset((g=a==null?void 0:a.timeZone)!=null?g:""),u=(f,l)=>X(f.endOf(l).unix());return{[z.Daily]:()=>c.isBefore(n)?u(c,"day"):n.isBefore(s)?u(s,"day"):u(n,"day"),[z.Weekly]:()=>{if(c.isBefore(n))return u(c,"day");if(n.isBefore(s))return c.isSame(s,"isoWeek")?u(c,"day"):u(s.endOf("isoWeek"),"day");if(c.isSame(s,"isoWeek"))return u(c,"day");{const f=n.endOf("isoWeek");return c.isBefore(f)?u(c,"day"):u(f,"day")}},[z.Monthly]:()=>{if(c.isBefore(n))return u(c,"day");if(n.isBefore(s))return c.isSame(s,"month")?u(c,"day"):u(s.endOf("month"),"day");if(c.isSame(s,"month"))return u(c,"day");{const f=n.endOf("month");return c.isBefore(f)?u(c,"day"):u(f,"day")}}}});return{time:x(()=>{var i,n;const{cycleType:m}=o.value||{};return m&&((n=(i=_.value)[m])==null?void 0:n.call(i))})}},Pe="_modalExtract_rglhf_17",ze="_animationBox_rglhf_22",Ne="_closeIcon_rglhf_28",Se="_synthesizedCotent_rglhf_35",He="_synthesizedImgs_rglhf_61",Ge="_animationSynthesized_rglhf_70",je="_extractAll_rglhf_76",Fe="_extractItem_rglhf_82",Ve="_extractAnimation_rglhf_86",qe="_times_rglhf_96",Ue="_congrats_rglhf_107",W={modalExtract:Pe,animationBox:ze,closeIcon:Ne,synthesizedCotent:Se,synthesizedImgs:He,animationSynthesized:Ge,extractAll:je,extractItem:Fe,extractAnimation:Ve,times:qe,congrats:Ue},[Ze]=$("event-item-modes-collection-animation-box"),Ye=E({name:Ze,props:{currentGroupTimes:{type:Number,default:0}},setup(e){const{t:o}=D(),a=P(),{activeData:_}=O(a),v=w(!1);return()=>{var i,n;const m=o("lobby.event.collectWords.synthesized");return t("div",{class:[W.modalExtract,"modalExtract"]},[t("div",{class:W.animationBox},[U(t(I,{class:W.animationSynthesized,canvasMode:{numPlays:1,onEnd:()=>{v.value=!0}},src:"/lobby_asset/common/web/animated/apng_hecheng-cg1_alpha.png",width:h(540),height:h(468)},null),[[Z,!v.value]]),U(t(I,{class:W.animationSynthesized,canvasMode:!0,src:"/lobby_asset/common/web/animated/apng_hecheng-cg2_alpha.png",width:h(540),height:h(468)},null),[[Z,v.value]]),t("div",{class:W.synthesizedCotent},[t("span",{"data-text":"".concat(m," x ").concat(e.currentGroupTimes)},[m,de(" x "),e.currentGroupTimes]),t("div",{class:W.synthesizedImgs},[(n=(i=_.value)==null?void 0:i.images)==null?void 0:n.map(s=>t(I,{class:{[W.animationImg]:!0},src:s.url,key:s.url},null))])])])])}}}),Ke="_modalExtract_19mwe_17",Je="_extractAll_19mwe_22",Qe="_extractItem_19mwe_28",Xe="_extractAnimation_19mwe_32",et="_times_19mwe_42",tt="_extractSpecial_19mwe_53",nt="_congrats_19mwe_56",k={modalExtract:Ke,extractAll:Je,extractItem:Qe,extractAnimation:Xe,times:et,extractSpecial:tt,congrats:nt},[ot]=$("event-item-modes-collection-extract-imgs"),at=E({name:ot,props:{imgs:{type:Array,default:()=>[]}},setup(e){const{t:o}=D(),a=w(!1);return()=>{var _;return t("div",{class:[k.modalExtract,"modalExtract"]},[t("div",{class:k.extractAll},[(_=e.imgs)==null?void 0:_.map((v,m)=>{var i;return t("div",{class:{[k.extractItem]:!0,[k.extractSpecial]:((i=e.imgs)==null?void 0:i.length)===3&&m===0},key:v.id},[U(t(I,{canvasMode:{numPlays:1,onEnd:()=>{a.value=!0}},class:k.extractAnimation,src:"/lobby_asset/common/web/animated/apng_chouzi-1_alpha.png",width:h(590),height:h(590)},null),[[Z,!a.value]]),U(t(I,{canvasMode:!0,class:k.extractAnimation,src:"/lobby_asset/common/web/animated/apng_chouzi-2_alpha.png",width:h(590),height:h(590)},null),[[Z,a.value]]),t(I,{useSkeleton:!0,src:v.url},null),t("span",{class:k.times},[v.extractTimes])])})]),t("div",{class:k.congrats},[o("lobby.event.collectWords.congrats")])])}}}),st="_modalCollect_uhikf_17",ct="_luckBagBox_uhikf_26",it="_image_uhikf_32",rt="_show_uhikf_48",lt="_hide_uhikf_51",ut="_infoBox_uhikf_54",dt="_congrats_uhikf_63",T={modalCollect:st,luckBagBox:ct,image:it,show:rt,hide:lt,infoBox:ut,congrats:dt},[mt]=$("event-item-modes-collection-collect-animate"),vt=E({name:mt,props:{recordItem:{type:Object,default:null}},setup(e){const{t:o}=D(),a=w(!1),_={cn:{fudai1:"/lobby_asset/common/web/event/apng_fudai1_zh.png",fudai2:"/lobby_asset/common/web/event/apng_fudai2_zh.png"},en:{fudai1:"/lobby_asset/common/web/event/apng_fudai1_en.png",fudai2:"/lobby_asset/common/web/event/apng_fudai2_en.png"}},v=x(()=>{const{language:m}=Ie(),i=["zh","zh_hk"].includes(m)?"cn":"en";return _[i]});return()=>{var m,i,n,s,c;return t("div",{class:T.modalCollect},[t("div",{class:T.luckBagBox},[t(I,{class:{[T.image]:!0,[T.hide]:a.value},src:(m=v.value)==null?void 0:m.fudai1,canvasMode:{numPlays:1,onEnd:()=>{a.value=!0}},width:h(256),height:h(324)},null),t(I,{class:{[T.image]:!0,[T.show]:a.value},canvasMode:{numPlays:0},src:(i=v.value)==null?void 0:i.fudai2,width:h(256*.9),height:h(324*.9)},null)]),t("div",{class:T.infoBox},[t("div",{class:T.congrats},[o("lobby.event.collectWords.congrats")]),t(A,{class:T.resultText,tag:"div",html:"".concat(o("lobby.event.collectWords.result",{x:G(((n=e.recordItem)==null?void 0:n.eachAmount)||0),y:(s=e.recordItem)==null?void 0:s.userGroupCount,z:G((c=e.recordItem)==null?void 0:c.reward)}))},null)])])}}}),_t="_recordsMain_o5kup_17",pt="_recordItem_o5kup_30",gt="_recordTime_o5kup_40",ft="_recordInfo_o5kup_56",ht="_infoDetail_o5kup_61",yt="_infoBtn_o5kup_74",bt="_emptyBg_o5kup_80",xt="_animateDialog_o5kup_84",M={recordsMain:_t,recordItem:pt,recordTime:gt,recordInfo:ft,infoDetail:ht,infoBtn:yt,emptyBg:bt,animateDialog:xt};function It(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ye(e)}const[wt]=$("event-item-modes-collection-my-record"),Rt=E({name:wt,setup(){const{query:e}=te(),{t:o}=D(),a=w([]),_=w(!1),v=w(!1),m=pe(),i=c=>({[b.undone]:o("lobby.event.collectWords.recordButtons.undone"),[b.canReceive]:o("lobby.event.collectWords.recordButtons.canReceive"),[b.received]:o("lobby.event.collectWords.recordButtons.received"),[b.expired]:o("lobby.event.collectWords.recordButtons.expired"),[b.distributed]:o("lobby.event.collectWords.recordButtons.distributed"),[b.cancel]:o("lobby.event.collectWords.recordButtons.cancel"),[b.pendingApproval]:o("lobby.event.collectWords.recordButtons.canReceive"),[b.pendingApplication]:o("lobby.event.collectWords.recordButtons.pendingApplication"),[b.reject]:o("lobby.event.collectWords.recordButtons.reject")})[c],n=c=>{m.handleReceive(c,{onSuccess(){F.showDialog({className:M.animateDialog,overlayClass:M.animatePopup,message:()=>t(vt,{recordItem:c},null),showConfirmButton:!1,showCloseButton:!0,width:h(706)})},async judgeResBefore(){var p;await s(),((p=a.value)==null?void 0:p.filter(r=>r.logStatus===b.canReceive)).length===0&&P().refreshEventItemDetail(Number(e.eventId))}})},s=async()=>{_.value=!0;const[c,u]=await ee($e({activeId:Number(e.eventId)}));v.value=!!c,!c&&(a.value=(u==null?void 0:u.list)||[],_.value=!1)};return me(()=>{s()}),()=>{var c;return t(we,{class:{[M.recordsMain]:!0,[M.emptyBg]:((c=a.value)==null?void 0:c.length)===0},loading:_.value,error:v.value},{default:()=>{var u;return[(u=a.value)==null?void 0:u.map(p=>{let r;return t("div",{class:M.recordItem,key:p.logId},[t("div",{class:M.recordTime},[t("div",null,[X(p.startTime,"ymd"),de(" -")," ",X(p.endTime,"ymd")]),t(A,{tag:"p",html:o("lobby.event.collectWords.bonusPerSet",{x:G(p.eachAmount)})},null)]),t("div",{class:M.recordInfo},[t("div",{class:M.infoDetail},[t(A,{tag:"p",html:o("lobby.event.collectWords.totalDivision",{x:p.showAmount,y:p.groupCount})},null),t(A,{tag:"p",html:o("lobby.event.collectWords.myDivision",{x:G(p.reward),y:p.userGroupCount})},null)]),t(ve,{class:M.infoBtn,disabled:p.logStatus!==b.canReceive&&p.logStatus!==b.pendingApproval,type:"success",loading:m.isReceiveLoading.value,onClick:()=>n(p)},It(r=i(p.logStatus))?r:{default:()=>[r]})])])})]}})}}}),Bt="_gameMain_a3pxu_17",Ct="_totalAmount_a3pxu_23",Tt="_totalInfo_a3pxu_31",Mt="_partitionRecord_a3pxu_41",kt="_reveal_a3pxu_51",At="_collected_a3pxu_66",Et="_collectedStrong_a3pxu_73",Dt="_words_a3pxu_87",$t="_syntheticBg_a3pxu_93",Lt="_image_a3pxu_98",Wt="_animationImg_a3pxu_105",Ot="_compileLoading_a3pxu_115",Pt="_animationImgH51_a3pxu_1",zt="_animationImgH52_a3pxu_1",Nt="_animationImgH53_a3pxu_1",St="_animationImgH54_a3pxu_1",Ht="_times_a3pxu_147",Gt="_operator_a3pxu_162",jt="_syntheticRound_a3pxu_172",Ft="_syntheticRoundBtn_a3pxu_179",Vt="_btn_a3pxu_197",qt="_disabled_a3pxu_262",Ut="_tips_a3pxu_273",Zt="_extract_a3pxu_282",Yt="_text_a3pxu_292",Kt="_ruleTimes_a3pxu_309",Jt="_extractAllWord_a3pxu_312",Qt="_partitionRecordModel_a3pxu_334",Xt="_animateDialog_a3pxu_344",en="_compileModal_a3pxu_359",d={gameMain:Bt,totalAmount:Ct,totalInfo:Tt,partitionRecord:Mt,reveal:kt,collected:At,collectedStrong:Et,words:Dt,syntheticBg:$t,image:Lt,animationImg:Wt,compileLoading:Ot,animationImgH51:Pt,animationImgH52:zt,animationImgH53:Nt,animationImgH54:St,times:Ht,operator:Gt,syntheticRound:jt,syntheticRoundBtn:Ft,btn:Vt,disabled:qt,tips:Ut,extract:Zt,text:Yt,ruleTimes:Kt,extractAllWord:Jt,partitionRecordModel:Qt,animateDialog:Xt,compileModal:en},[tn]=$("event-item-modes-collection-game"),nn=E({name:tn,setup(){const{t:e}=D(),o=te(),a=w(!0),_=Oe(),v=P(),{eventCollectionData:m,activeData:i}=O(v),n=pe(),s=x(()=>{var l,y;return!((y=(l=i.value)==null?void 0:l.images)!=null&&y.find(B=>!B.times))}),c=x(()=>!!n.collectWordsTimes.value),u=x(()=>{var l,y;return((l=m.value)==null?void 0:l.status)!==ie.PROCESSING&&((y=m.value)==null?void 0:y.status)!==ie.DRAFT}),p=x(()=>{let l="/lobby_asset/{layout}-{bg}-common/common/event/btn_jzhd_round2.png";return s.value&&(l=Be.isHK?"/lobby_asset/9-0-common/common/event/btn_jzhd_round.png":"/lobby_asset/{layout}-{bg}-{skin}/common/event/btn_jzhd_round.png"),l}),r=()=>{F.showDialog({className:d.partitionRecordModel,showCloseButton:!0,showConfirmButton:!1,width:h(690),title:()=>e("lobby.event.collectWords.partitionRecord"),message:()=>t(Rt,null,null)})},g=async()=>{s.value&&n.handleCompile(()=>{F.showDialog({className:[d.animateDialog,d.compileModal],overlayClass:d.animatePopup,message:()=>t(Ye,{currentGroupTimes:n.currentGroupTimes.value},null),showConfirmButton:!1,showCloseButton:!0,width:h(706)})})},f=l=>{c.value&&n.handleExtract(l,y=>{F.showDialog({className:d.animateDialog,overlayClass:d.animatePopup,message:()=>t(at,{imgs:y},null),showConfirmButton:!1,showCloseButton:!0,width:h(706)})})};return me(()=>{ue(m,l=>{l!=null&&l.hasReceiveLogs&&(l==null?void 0:l.id)===Number(o.params.eventId||o.query.eventId)&&a.value&&(r(),a.value=!1)},{immediate:!0})}),()=>{var l,y,B,N,S;return t("div",{class:d.gameMain},[t("div",{class:d.totalAmount},[t("div",{class:d.totalInfo},[e("lobby.event.collectWords.totalAmount")," ",t("span",null,[G((l=i.value)==null?void 0:l.show_carve_money)])]),t("span",{class:d.partitionRecord,onClick:r},[e("lobby.event.collectWords.partitionRecord")])]),t("div",{class:d.reveal},[t("div",null,[u.value?e("lobby.event.collectWords.activityHasEnded"):"".concat((y=_.time.value)!=null?y:""," ").concat(e("lobby.event.collectWords.reveal"))])]),t(A,{class:d.collectedStrong,tag:"div",html:e("lobby.event.collectWords.collectedStrong",{x:(B=i.value)==null?void 0:B.groupTimes}).toString()},null),t("div",{class:[d.words,s.value?"":d.disabled]},[n.isCompileLoading.value&&t(I,{class:d.syntheticBg,src:"/lobby_asset/common/web/event/apng_hecheng-tx2.png",width:h(538),height:h(226)},null),t("div",{class:d.operator},[t("div",{class:d.syntheticRound},[t(I,{src:p.value,class:d.image,width:h(364),height:h(180),tag:"div"},null),n.isCompileLoading.value&&[t("div",{class:d.btn},[t(A,{class:d.syntheticRoundBtn,html:e("lobby.event.collectWords.beingSynthesized")},null)]),t("div",{class:d.btn},[t(I,{src:"/lobby_asset/common/web/event/apng_hecheng-tx1.png",width:h(180),height:h(180)},null)])],!n.isCompileLoading.value&&t("div",{class:d.btn},[t(A,{tag:"a",html:e("lobby.event.collectWords.button"),onClick:g},null)])])]),t("div",null,[(S=(N=i.value)==null?void 0:N.images)==null?void 0:S.map(C=>t("div",{key:C.id,class:d.image},[t("div",{class:d.times},[C.times]),t(I,{src:C.url,style:{opacity:C.times?1:.5}},null),t(I,{style:{opacity:C.times?1:.25},class:{[d.animationImg]:!0,[d.compileLoading]:n.isCompileLoading},src:C.url},null)]))])]),t("div",{class:d.tips},[t(A,{html:e("lobby.event.collectWords.tips")},null)]),t("a",{class:[d.extract,!c.value||n.isExtractLoading.value?d.disabled:""],onClick:()=>f(0)},[t(_e,{type:n.isExtractLoading.value?"nested-loading":null},{default:()=>[t("div",{class:d.text},[Re(e("lobby.event.collectWords.extract"))]),t("div",{class:d.times},[e("lobby.event.collectWords.extractValidTimes",{x:" ".concat(n.collectWordsTimes.value," ")})])]})]),t("a",{class:{[d.extractAllWord]:!0,[d.disabled]:!(c.value&&!n.isExtractLoading.value)},onClick:()=>f(1)},[e("lobby.event.collectWords.extractAllWord")])])}}}),le={},[on]=$("event-item-modes-collection-my-button"),an=E({name:on,props:{rule:{type:Object,default:null}},setup(e){const{t:o}=D(),a=Te(),_=x(()=>e.rule.status===q.UnStart?o("lobby.event.collectWords.ruleButtons.unstarted"):v.value?o("lobby.event.collectWords.ruleButtons.forward"):o("lobby.event.collectWords.ruleButtons.complete")),v=x(()=>e.rule.status===q.Forward||e.rule.status===q.Normal),m=()=>{if(!v.value)return;const i=e.rule.receive_type;i===V.RECHARGE&&Ce(),i===V.GAME&&a.push({name:re.GAME}),i===V.PROMOTE&&a.push({name:re.PROMOTE})};return()=>t(ve,{class:{[le.btn]:!0,[le.forward]:v.value},disabled:!v.value,onClick:m,size:"small"},{default:()=>[_.value]})}}),sn="_listMain_1f79f_17",cn="_list_1f79f_17",rn="_item_1f79f_29",ln="_time_1f79f_43",un="_info_1f79f_74",dn="_caption_1f79f_80",mn="_times_1f79f_90",vn="_operator_1f79f_96",_n="_progress_1f79f_101",pn="_syntheticRound_1f79f_107",gn="_btn_1f79f_116",fn="_processing_1f79f_127",hn="_forward_1f79f_130",yn="_myProgress_1f79f_134",R={listMain:sn,list:cn,item:rn,time:ln,"week-or-month":"_week-or-month_1f79f_68",info:un,caption:dn,times:mn,operator:vn,progress:_n,syntheticRound:pn,btn:gn,processing:fn,forward:hn,myProgress:yn},[bn]=$("event-item-modes-collection-game"),xn=E({name:bn,setup(){const{t:e}=D(),o=P(),{eventCollectionData:a,activeData:_}=O(o),v=x(()=>{var n,s;return(s=(n=_.value)==null?void 0:n.rule_list)!=null?s:[]}),m=x(()=>({[z.Monthly]:e("lobby.event.listedRewards.perMonth"),[z.Daily]:e("lobby.event.listedRewards.perDay"),[z.Weekly]:e("lobby.event.listedRewards.perWeek")})),i=n=>{var g,f;const s=(g=(n==null?void 0:n.real_amount)&&parseInt(n.real_amount.toString()))!=null?g:0,c=(f=n.amount)!=null?f:0,u=s/c*100,p=3,r=u>=p?u:p;return{percent:s>0?r:0,text:"".concat(s,"/").concat(c)}};return()=>{var n;return t("div",{class:R.listMain},[t("div",{class:R.list},[(n=v.value)==null?void 0:n.map(s=>{var c,u,p;return t("div",{class:R.item,key:s.id},[_.value.isDaySend!==0&&t("div",{class:{[R.time]:!0,[R["week-or-month"]]:String((c=a.value)==null?void 0:c.cycleType)!=="1"}},[(p=m.value)==null?void 0:p[String((u=a.value)==null?void 0:u.cycleType)]]),t("div",{class:R.info},[t("div",{class:R.caption},[s.text]),t(an,{rule:s},null)]),t("div",{class:[R.operator]},[t(Ee,{class:R.myProgress,percent:i(s).percent,text:i(s).text},null),t("div",{class:[R.times,R.ruleTimes]},[e("lobby.event.collectWords.ruleTimes",{x:s.real_limit,y:s.day_limit})])])])})])])}}}),In="_collectionMain_10ipc_17",wn={collectionMain:In},[Rn]=$("event-item-modes-collection"),Hn=E({name:Rn,props:{...fe,eventId:Number},setup(e){const{query:o}=te(),a=P(),{eventCollectionData:_,isItemLoading:v,itemErr:m}=O(a),i=x(()=>v.value?"nested-loading":m.value?"retry":null),n=()=>{a.refreshEventItemDetail(Number(o.eventId))};return()=>t(_e,{type:i.value,onRetry:n},{default:()=>[t("div",{class:wn.collectionMain},[t(nn,null,null),t(xn,null,null)]),t(De,{eventData:_.value},null)]})}});export{Hn as default};
//# sourceMappingURL=CollectionIndex.C3TrjhGu.js.map
