const __vite__fileDeps=["assets/theme-1/CategoryCountIndex.BA-oIxZf.js","assets/theme-1/main.C8q1iJMV.js","assets/vendors/vendor-default.CjiYZF7Q.js","assets/vendors/vendor-bignumber.BRr1dcww.js","assets/vendors/vendor-@vue.DNlpgob2.js","assets/vendors/vendor-default.D-eq1dc7.css","assets/vendors/vendor-lodash.BYdGDldS.js","assets/vendors/vendor-swiper.ZXc-sUCV.js","assets/vendors/vendor-swiper.BH51ma1P.css","assets/vendors/vendor-stable.LD58Pbb3.js","assets/vendors/vendor-@intlify.BmUtFfVu.js","assets/vendors/vendor-@sentry.EjpkRnd3.js","assets/vendors/vendor-dom-to-image.C12bjAh8.js","assets/theme-1/main.oUrzxJI4.css","assets/theme-1/CategoryCountIndex.BmSdI3uP.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as h,dP as T,dO as C,bt as k,dQ as w,la as x,aY as I,a8 as R,a9 as H,I as O,ah as z,q as L,by as N,w as E,aA as j}from"./main.C8q1iJMV.js";import{l as K,r as b,a5 as P,o as A,f as l,w as V,p as o,C as B,y as D,z as M,G as $}from"../vendors/vendor-@vue.DNlpgob2.js";import{u as q}from"./useHeader.DBPcJJMn.js";import"../vendors/vendor-default.CjiYZF7Q.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-stable.LD58Pbb3.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";const G="_text_8ie0o_50",e={"sport-tabs-home":"_sport-tabs-home_8ie0o_17","sport-game-sticky-content":"_sport-game-sticky-content_8ie0o_20","game-tabs":"_game-tabs_8ie0o_23","tab-title":"_tab-title_8ie0o_32","tab-title-wrap":"_tab-title-wrap_8ie0o_39","is-active":"_is-active_8ie0o_46","tab-img":"_tab-img_8ie0o_46",text:G};function Q(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!B(s)}const[U]=L("sport-tabs-home"),W=$({loader:()=>j(()=>import("./CategoryCountIndex.BA-oIxZf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))}),it=K({name:U,setup(){const{t:s}=h(),{rect:d}=q(),c=b(),p=b(),_=P(p),a=T(),m=C(),y=k({onlyParent:!1}),{toggleSportWatch:f}=w();A(()=>{f(!0)});const n=l({get:()=>a.isHomeTabOnSport?m.sportKey:x.Casino,set:a.setSportTabKey}),i=l(()=>a.checkIfHomeTabOnSport(n.value)),g=I(()=>i.value)(()=>D(o(W,{fromHome:!0},null),[[M,i.value]])),S=l(()=>i.value?d.height.value:"-".concat(_.height.value)),u=()=>{N(y.value,{y:c.value.$el.offsetTop-10})},v=r=>{r.disabled&&E.warn({message:s("lobby.game.gameMaintainText")})};return V(()=>m.marketKey,()=>{u()}),()=>{let r;return o(z,{ref:c,class:e["sport-tabs-home"],offsetTop:S.value,zIndex:9,fixedClassName:e["sport-game-sticky-content"]},{default:()=>[o(R,{ref:p,shrink:!0,key:a.homeSportList.map(t=>t.sportType).join(),active:n.value,"onUpdate:active":t=>n.value=t,titleNavClass:e["game-tabs"],onChange:u},Q(r=a.homeSportList.map(t=>o(H,{name:t.sportType,titleClass:e["tab-title"],disabled:!!t.disabled,title:()=>o("div",{onClick:()=>v(t),class:[e["tab-title-wrap"],n.value===t.sportType&&e["is-active"]]},[o(O,{src:t.icon,class:e["tab-img"],useSkeleton:!0,lazy:!1},null),o("div",{class:e.text},[t.sportName()])])},null)))?r:{default:()=>[r]}),!a.isSportLoginError&&g()]})}}});export{it as default};
//# sourceMappingURL=SportTabsHomeIndex.BymKn1HK.js.map
