import{a as u,k2 as f}from"./main.C8q1iJMV.js";import{d as g}from"../vendors/vendor-stable.LD58Pbb3.js";import{e as p}from"../vendors/vendor-default.CjiYZF7Q.js";import{h as c}from"../vendors/vendor-@vue.DNlpgob2.js";const v=g("betRules",()=>{const e=c({validBetConfig:null,validBetGamesList:[],gameList:[],platformList:[],requestStatus:{error:null,loading:!1}}),{t:l}=u(),d=async()=>{var s;e.requestStatus.loading=!0;const[i,a]=await p(f());e.requestStatus.loading=!1,e.requestStatus.error=i,!i&&(e.validBetConfig=a,e.validBetGamesList=(s=a==null?void 0:a.n)!=null?s:[],n())},n=()=>{var s,m;const i=[...new Set((s=e.validBetGamesList)==null?void 0:s.map(t=>t.gameCategoryId))].map(t=>{var r;return{...(r=e.validBetGamesList)==null?void 0:r.find(o=>o.gameCategoryId===t),isChecked:!0}});e.gameList=[{gameCategoryName:l("lobby.modal.betRules.allGameTypes"),isChecked:!0,gameCategoryId:"-1"},...i];const a=[...new Set((m=e.validBetGamesList)==null?void 0:m.map(t=>t.platformId))].map(t=>{var r;return{...(r=e.validBetGamesList)==null?void 0:r.find(o=>o.platformId===t),isChecked:!0}});e.platformList=[{platformName:l("lobby.modal.betRules.allPlatforms"),isChecked:!0,platformId:"-1"},...a]};return{state:e,getValidBetSetting:d}});export{v as u};
//# sourceMappingURL=index.B8UsFylu.js.map
