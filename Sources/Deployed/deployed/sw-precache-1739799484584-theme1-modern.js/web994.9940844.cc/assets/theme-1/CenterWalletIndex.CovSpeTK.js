import{l as G,f as k,r as v,p as e,v as K,C as J,t as X,y as O,z as D,F as Q}from"../vendors/vendor-@vue.DNlpgob2.js";import{a as z,az as Y,cx as ee,bN as ae,R as te,ak as le,I as P,ai as B,cm as ne,q as R,_ as W,fA as se,w as V,cX as oe,fB as re,ad as ce,ae as ue,cR as ie,p as de,B as pe,a6 as q,bx as me,cs as fe,v as _e,dJ as ve,fC as ye,d9 as ge,dg as be,fD as he}from"./main.C8q1iJMV.js";import{e as F}from"../vendors/vendor-default.CjiYZF7Q.js";import{s as we,u as Ie}from"../vendors/vendor-stable.LD58Pbb3.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import{d as M,O as Ce}from"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";var L=(l=>(l[l.ALL=0]="ALL",l))(L||{}),H=(l=>(l[l.SUCCESS=0]="SUCCESS",l))(H||{});const Se="_tips_1zv4e_25",Le="_userInfoCard_1zv4e_32",ke="_prompt_1zv4e_58",C={"actions-panel":"_actions-panel_1zv4e_17",tips:Se,userInfoCard:Le,"currency-count":"_currency-count_1zv4e_37","count-to":"_count-to_1zv4e_47","refresh-icon":"_refresh-icon_1zv4e_53",prompt:ke,"one-key-recycle":"_one-key-recycle_1zv4e_63"};function Be(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!J(l)}const[xe]=R("pages-center-wallet-search"),Ae=G({name:xe,props:{rencentBalancePlatformId:{type:Array,required:!0}},emits:["afterUpdateGold"],setup(l,{emit:b}){const{t:i}=z(),{userInfos:u}=we(Y()),{setGameScoring:d,setGamePlaying:h}=ee(),{updatePrize:p}=ae(),n=k(()=>{const{game_gold:c=0}=u.value||{};return c}),s=v(!1),m=v(!1),f=async c=>{var o,r;const[x,a]=await F(se(c||l.rencentBalancePlatformId));if(p(),h(!1),d(!1),b("afterUpdateGold"),!x&&(a!=null&&a.game_gold))V({type:"success",message:()=>i("lobby.finance.center.wallet.refreshGoldSuccessText")},"flush");else{const t=x;((o=t==null?void 0:t.data)==null?void 0:o.code)!==oe.OTHER_CLIENT_GAME_LOGIN&&((r=t.data)!=null&&r.msg)&&V({type:"warn",message:t.data.msg},"flush")}},S=async c=>{s.value||m.value||(s.value=!0,f(c).finally(()=>{s.value=!1}))},y=async c=>{s.value||m.value||(m.value=!0,f(c).finally(()=>{m.value=!1}))};te({reFreshPrize:S,oneKeyPull:y});const g=M(S),w=M(y),E=c=>W(c,{showGroup:!0,toFixedType:"currency"}).toFixed({tailZero:!0}).toString();return()=>{let c;return e("div",{class:[C["actions-panel"]]},[e("div",{class:C.userInfoCard},[e("div",null,[e("section",{class:C["currency-count"]},[e("p",null,[K(" "),i("lobby.modal.smartPay.balance")]),e(le,{class:C["count-to"],value:+n.value,formatter:E},null),e(P,{class:[C["refresh-icon"],{[B.Animated]:s.value},B.Actions.Spin,B.Repeat.Infinite],src:"/lobby_asset/{layout}-{bg}-common/web/common/comm_icon_sx.svg",onClick:()=>{g()},useSkeleton:!0},null)])]),e(ne,{onClick:()=>{w()},class:C["one-key-recycle"],type:"primary"},Be(c=i("lobby.finance.center.wallet.recycle"))?c:{default:()=>[c]})]),e("div",{class:C.tips},[i("lobby.finance.center.wallet.findBackTips")])])}}}),Pe="_wrapper_ok3u3_17",Ge="_item_ok3u3_29",ze="_spin_ok3u3_42",Re="_up_ok3u3_74",Ee="_down_ok3u3_81",Te="_hasMoney_ok3u3_86",Ue="_itemWrap_ok3u3_89",Ne="_error_ok3u3_99",Fe="_fail_ok3u3_113",Me="_pending_ok3u3_116",_={wrapper:Pe,item:Ge,spin:ze,up:Re,down:Ee,hasMoney:Te,itemWrap:Ue,error:Ne,fail:Fe,pending:Me},[Oe]=R("pages-center-wallet-card-list"),De=G({name:Oe,props:{cardList:{type:Array,required:!0,default:()=>[]},platformBalances:{required:!0,type:Object,default:()=>({})}},emits:{updateBalanceById:l=>!0},setup(l,{emit:b}){const{t:i}=z(),{cardList:u,platformBalances:d}=X(l),h=M(n=>{b("updateBalanceById",n.platformId)}),p=n=>{var g,w;const s=((g=d==null?void 0:d.value)==null?void 0:g[n.platformId])||{},m=["wait","loading"].includes(s.status),f=["error"].includes(s.status),S=["loaded"].includes(s.status),y=((w=s==null?void 0:s.value)==null?void 0:w.balance)||0;return e("li",{class:[_.item],key:n.platformId},[!!(n!=null&&n.maintainStatus)&&e("div",{class:_.spin},[e("div",null,[e(P,{src:"/lobby_asset/{layout}-{bg}-common/common/common/img_dt_whz.png",width:"0.8rem",height:"0.8rem"},null)])]),e("div",{class:_.itemWrap},[!!(n!=null&&n.logoImage)&&e(P,{width:"0.4rem",height:"0.4rem",src:n.logoImage},null),e("div",{class:_.up},[n.platformName])]),S?e("div",{class:_.down},[e("span",{class:["notranslate",y>0?_.hasMoney:""]},[W(y,{toFixedType:"currency"}).toFixed({tailZero:!0}).toString()])]):e("div",{class:_.error},[e("span",{class:[_.fail,m?_.pending:""]},[i(m?"lobby.finance.center.wallet.pending":"lobby.finance.center.wallet.updateError")]),O(e(P,{class:[_["refresh-icon"],{[B.Animated]:m},B.Actions.Spin,B.Repeat.Infinite],src:"/lobby_asset/{layout}-{bg}-common/web/common/comm_icon_sx.svg",onClick:()=>{h(n)},useSkeleton:!0},null),[[D,f]])])])};return()=>e("ul",{class:_.wrapper},[u.value.map(p)])}}),N={"wallet-search":"_wallet-search_27ppj_17","icon-clear":"_icon-clear_27ppj_21","icon-search":"_icon-search_27ppj_24"},[$e]=R("pages-center-wallet-search"),je=G({name:$e,props:{value:{type:String,default:""}},emits:["update:value"],setup(l,{emit:b}){const{t:i}=z(),u=k({get(){return l.value},set(d){b("update:value",d)}});return()=>e("div",{class:N["wallet-search"]},[e(re,{value:u.value,"onUpdate:value":d=>u.value=d,showSearch:!0,placeholder:i("lobby.finance.center.wallet.searchPlatform")},{suffix:()=>e(Q,null,[O(e(ce,{onClick:()=>{u.value=""},class:N["icon-clear"],name:ue},null),[[D,!!u.value]]),e(P,{class:N["icon-search"],src:"/lobby_asset/common/web/common/comm_icon_ss.svg"},null)])})])}}),A={"wallet-placeholder":"_wallet-placeholder_1dlwk_17","wallet-container":"_wallet-container_1dlwk_21","center-wallet-tabs":"_center-wallet-tabs_1dlwk_29","list-placeholder":"_list-placeholder_1dlwk_43","center-wallet-list":"_center-wallet-list_1dlwk_47"},[Ve]=R("pages-center-wallet"),aa=G({name:Ve,setup(){const{t:l}=z(),b=Ie(),i=ie(),u=v({}),d=v(null),h=v(""),p=v(Number(b.query.gameCategoryId||L.ALL)),n=v(!1),s=v(!1),m=v(null),f=v([]),S=async()=>{n.value=!0;const[a,o]=await F(he());n.value=!1,o&&(f.value=o),m.value=a,f.value.forEach(r=>{u.value[r]={status:"wait",value:void 0}}),p.value=f.value.includes(p.value)?p.value:L.ALL},y=async a=>{if(s.value)return;const o=Ce(a||f.value,5);for(let r=0;r<o.length;r++){r===0&&(s.value=!0);const t=o[r];t.forEach(I=>{u.value[I].status="loading"}),r>0&&await ve(300),F(ye({platformIdList:t})).then(([I,T])=>{const Z=I?[]:T||[];r===o.length-1&&(s.value=!1),t.forEach($=>{const U=Z.find(j=>j.platformId===$&&j.code===H.SUCCESS);u.value[$]=U?{status:"loaded",value:U}:{status:"error",value:U}})})}},g=k(()=>f.value.reduce((a,o)=>{const r=i.gameCategoriesInfoList.reduce((t,I)=>[...t,...I.list],[]).filter(t=>o===t.platformId);if(r.length){const t=r[0],I=r.map(T=>T.gameCategoryId);a.push({platformName:t==null?void 0:t.platformName,platformId:t==null?void 0:t.platformId,logoImage:t==null?void 0:t.platformLogo,balance:0,maintainStatus:t==null?void 0:t.maintainStatus,gameCategoryIds:I})}return a},[])),w=k(()=>p.value===L.ALL?g.value.filter(a=>a.platformName.toUpperCase().includes(h.value.toUpperCase())):g.value.filter(a=>a.gameCategoryIds.includes(p.value))),E=k(()=>[{value:L.ALL,label:"".concat(l("lobby.gameMenu.all")),icon:"/lobby_asset/common/web/common/icon_dtfl_zh_0.svg"},...i.gameCategoriesInfoList.filter(a=>![ge.ClubRoom].includes(a.gameCategoryId)).reduce((a,o)=>(g.value.find(t=>t.gameCategoryIds.includes(o.gameCategoryId))&&a.push({value:o.gameCategoryId,label:l("lobby.gameMenu.menu".concat(o.gameCategoryId)),icon:be[o.gameCategoryId].normal}),a),[])]),c=k(()=>{var a;return n.value?"nested-loading":m.value?"retry":(a=w.value)!=null&&a.length?null:"empty"}),x=async()=>{var a;await S(),await((a=d.value)==null?void 0:a.oneKeyPull())};return de(()=>{x()}),()=>e(_e,null,{header:()=>e(pe,null,{default:()=>e("span",null,[l("lobby.finance.center.wallet.title"),K(" ")])}),default:()=>e(q,{class:[A["wallet-placeholder"]],type:null,empty:{text:l("lobby.modal.noData")}},{default:()=>[e("div",{class:A["wallet-container"]},[e(Ae,{ref:d,rencentBalancePlatformId:f.value,onAfterUpdateGold:()=>{y()}},null),e(me,{class:A["center-wallet-tabs"],tabsList:E.value,active:p.value,"onUpdate:active":a=>p.value=a,tabVShowMode:!1},{top:()=>O(e(je,{value:h.value,"onUpdate:value":a=>h.value=a},null),[[D,p.value===L.ALL]]),default:()=>e(q,{empty:{text:l("lobby.modal.noData")},type:c.value,onRetry:()=>{x()},class:[A["list-placeholder"]]},{default:()=>[e(fe,{class:[A["center-wallet-list"]]},{default:()=>[e(De,{cardList:w.value,platformBalances:u.value,onUpdateBalanceById:a=>{y([a])}},null)]})]})})])]})})}});export{aa as default};
//# sourceMappingURL=CenterWalletIndex.CovSpeTK.js.map
