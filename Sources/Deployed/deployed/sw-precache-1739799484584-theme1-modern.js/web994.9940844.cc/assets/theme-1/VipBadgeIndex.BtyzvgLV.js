import{aC as r,az as v,cN as u,I as m,E as g,q as _,b as d}from"./main.C8q1iJMV.js";import{s as b}from"../vendors/vendor-stable.LD58Pbb3.js";import{l as f,p as a,f as B}from"../vendors/vendor-@vue.DNlpgob2.js";const I="_vipBadge_4n2en_17",N="_bgIcon_4n2en_20",V="_level_4n2en_29",n={vipBadge:I,bgIcon:N,level:V},[C]=_("vipBadge"),y=f({name:C,setup(){const l=r(),{vipDetails:o}=b(l),{userInfos:s}=v();if((s==null?void 0:s.vip_status)!==u.OPEN)return a("span",null,null);const i=B(()=>{var e;return(e=o.value)==null?void 0:e.icon_color_value}),p=d();return()=>{var e,t;return a("div",{class:n.vipBadge,style:{backgroundColor:"#".concat(i.value)},onClick:c=>{p.push({name:g.VIP}),c.stopPropagation()}},[a(m,{src:"/lobby_asset/common/common/profile/img_vip.png",class:[n.img,"vip-img"]},null),a("span",{class:[n.level,"level"],"data-text":(e=o.value)==null?void 0:e.vip},[(t=o.value)==null?void 0:t.vip])])}}});export{y as V};
//# sourceMappingURL=VipBadgeIndex.BtyzvgLV.js.map
