import{a as b,is as C,u as R,_ as g,dM as d,I as t,Y as w,gF as h,ai as _,bG as x,gO as Q}from"./main.C8q1iJMV.js";import{R as v}from"../vendors/vendor-default.CjiYZF7Q.js";import{l as m,p as o,v as y,F as I}from"../vendors/vendor-@vue.DNlpgob2.js";import"../vendors/vendor-lodash.BYdGDldS.js";import"../vendors/vendor-bignumber.BRr1dcww.js";import"../vendors/vendor-swiper.ZXc-sUCV.js";import"../vendors/vendor-stable.LD58Pbb3.js";import"../vendors/vendor-@intlify.BmUtFfVu.js";import"../vendors/vendor-@sentry.EjpkRnd3.js";import"../vendors/vendor-dom-to-image.C12bjAh8.js";const T="_mainInfo_1qaoe_17",N="_money_1qaoe_20",k="_btnCopy_1qaoe_24",S="_qrcode_1qaoe_28",D="_mask_1qaoe_37",F="_icon_1qaoe_49",$="_period_1qaoe_58",O="_actions_1qaoe_61",P="_btn_1qaoe_24",V="_btnDownload_1qaoe_69",z="_qrCodeText_1qaoe_84",A="_timeout_1qaoe_97",B="_tips_1qaoe_100",G="_success_1qaoe_109",L="_successColor_1qaoe_118",n={mainInfo:T,money:N,btnCopy:k,qrcode:S,mask:D,icon:F,period:$,actions:O,btn:P,btnDownload:V,"copy-qrcode":"_copy-qrcode_1qaoe_72",qrCodeText:z,timeout:A,tips:B,success:G,successColor:L},M=m({setup(){const{t:s}=b(),e=C(),{open:a}=R(),p=()=>{e.closeDialog()},f=()=>{var c,r;a("rechargeDetail",{openType:"overlay",orderNo:(r=(c=e.info)==null?void 0:c.orderNo)!=null?r:""})},q="recharge-qrcode-"+Date.now();return()=>{var c;return e.info?o("div",{class:n.mainInfo},[o("div",{class:n.money},[o("span",null,[e.info.currencySign,g(e.info.money,{showGroup:!0,toFixedType:"currency"}).toFixed({decimalPlaces:2,tailZero:!0}).toString()]),o(d,{class:n.btnCopy,text:e.info.currencySign+g(e.info.money,{showGroup:!0,toFixedType:"currency"}).toFixed({decimalPlaces:2,tailZero:!0}).toString()},null)]),o("div",{class:n.qrcode,id:q},[o(v,{value:e.info.qrCode,margin:1,size:180,"render-as":"canvas"},null),e.status==="success"&&o("div",{class:n.mask},[o("div",{class:n.icon},[o(t,{src:"/lobby_asset/common/web/common/comm_icon_pay_1.png"},null)])])]),e.status==="wait"&&o("div",null,[o("div",{class:n.period},[s("lobby.modal.payQRCode.effectiveTime"),y(" "),e.countdownText,y("s")]),o("div",{class:n.actions},[!e.info.isPix&&o(w,{type:"primary",plain:!0,clearBackground:!0,class:[n.btn,n.btnDownload],onClick:()=>{const r=document.querySelector("#".concat(q," canvas"));r&&h(r,e.info.channlName)}},{default:()=>[o("p",null,[o(t,{src:"/lobby_asset/common/web/common/comm_icon_xz.svg"},null),s("lobby.modal.pay.details.downloadQRCode")])]}),o(d,{text:e.info.qrCode},{default:()=>[o(w,{class:n.btn,type:"primary"},{default:()=>[o("p",{class:n["copy-qrcode"]},[o(t,{src:"/lobby_asset/{layout}-{bg}-common/web/common/comm_icon_copy.svg"},null),o("span",null,[s("lobby.modal.payQRCode.copyQRCode")])])]})]})]),e.info.isPix&&o("p",{class:n.qrCodeText},[s("lobby.modal.payQRCode.qrCodeUrl"),(c=e.info.qrCode)==null?void 0:c.substring(e.info.qrCode.length-10),o(d,{class:n.btnCopy,text:e.info.qrCode},null)])]),e.status==="timeout"&&o("div",{class:n.timeout},[o("p",{class:n.tips},[s("lobby.modal.payQRCode.timeoutTips")]),o("p",null,[s("lobby.modal.payQRCode.timeoutTips2")]),o("p",null,[s("lobby.modal.payQRCode.chose"),o("span",{onClick:p},[s("lobby.modal.payQRCode.close")]),s("lobby.modal.payQRCode.or"),o("span",{onClick:f},[s("lobby.modal.payQRCode.checkOrder")])])]),e.status==="success"&&o("div",{class:n.success},[o("p",{class:n.tips},[s("lobby.modal.payQRCode.successTips")]),o("p",null,[o("span",{class:n.successColor},[s("lobby.modal.payQRCode.successTips2"),y(",")]),s("lobby.modal.payQRCode.successTips3")]),o("p",null,[s("lobby.modal.payQRCode.chose"),o("span",{onClick:p},[s("lobby.modal.payQRCode.close")]),s("lobby.modal.payQRCode.or"),o("span",{onClick:f},[s("lobby.modal.payQRCode.checkOrder")])])])]):null}}}),U="_logo_1s8os_17",Z="_channelIcon_1s8os_25",E="_channelName_1s8os_29",H="_normal_1s8os_33",Y="_pix_1s8os_38",i={logo:U,channelIcon:Z,channelName:E,normal:H,pix:Y},j=m({setup(){const s=C();return()=>{var e,a;return o("div",{class:i.logo},[(e=s.info)!=null&&e.isPix?o(t,{src:"/lobby_asset/common/common/deposit/czsyt_qb_pix.png",class:i.pix},null):o(I,null,[o("div",{class:i.channelIcon},[o(t,{src:"/lobby_asset/common/common/deposit/czsyt_qb_ty.png",class:i.normal},null)]),o("div",{class:i.channelName},[(a=s.info)==null?void 0:a.channlName])])])}}}),J="_orderInfo_qu37w_17",K="_label_qu37w_27",W="_btnCopy_qu37w_30",X="_betRetry_qu37w_31",oo="_info_qu37w_35",l={orderInfo:J,label:K,btnCopy:W,betRetry:X,info:oo,"color-wait":"_color-wait_qu37w_47","color-timeout":"_color-timeout_qu37w_50","color-success":"_color-success_qu37w_53"},eo=m({setup(){const{t:s}=b(),e=C();return()=>e.info?o("ul",{class:l.orderInfo},[o("li",null,[o("span",{class:l.label},[s("lobby.modal.payQRCode.orderStatus")]),o("div",{class:l.info},[o("span",{class:l["color-".concat(e.status)]},[s("lobby.modal.payQRCode.status.".concat(e.status))]),o("span",{class:l.betRetry,onClick:e.refreshStatus},[o(t,{class:[{[_.Animated]:e.refreshLoading},_.Actions.Spin,_.Repeat.Infinite],src:"/lobby_asset/common/web/common/comm_icon_retry.svg"},null)])])]),o("li",null,[o("span",{class:l.label},[s("lobby.modal.payQRCode.createdTime")]),o("span",null,[x(e.info.createTime)])]),o("li",null,[o("span",{class:l.label},[s("lobby.modal.payQRCode.orderNo")]),o("div",{class:l.info},[e.info.orderNo,o(d,{class:l.btnCopy,text:e.info.orderNo},null)])]),e.info.outTradeNo&&o("li",null,[o("span",{class:l.label},[s("lobby.modal.payQRCode.merchantOrderNo")]),o("div",{class:l.info},[e.info.outTradeNo,o(d,{class:l.btnCopy,text:e.info.outTradeNo},null)])])]):null}}),so="_content_1iwtk_20",no="_tips_1iwtk_25",lo="_warning_1iwtk_46",u={"recharge-qrcode":"_recharge-qrcode_1iwtk_17",content:so,tips:no,warning:lo},bo=m({setup(){const{close:s,dialogsStates:{rechargeQrCode:e}}=R(),{t:a}=b();return()=>o(Q,{class:u["recharge-qrcode"],modelValue:e.show,"onUpdate:modelValue":p=>e.show=p,onClose:()=>{s("rechargeQrCode")},title:a("lobby.modal.pay.title")},{default:()=>[o("div",{class:u.content},[o(j,null,null),o("ul",{class:u.tips},[o("li",null,[a("lobby.modal.payQRCode.tips1")]),o("li",null,[a("lobby.modal.payQRCode.tips2")]),o("li",{class:u.warning},[a("lobby.modal.payQRCode.tips3")])]),o(M,null,null),o(eo,null,null)])]})}});export{bo as default};
//# sourceMappingURL=RechargeQrCodeIndex.lEO3yrnS.js.map
