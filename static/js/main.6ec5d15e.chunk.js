(this.webpackJsonpannycrypto=this.webpackJsonpannycrypto||[]).push([[0],{214:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(41),o=c.n(n),a=c(224),r=c(115),l=(c(127),c(3)),s=c(223),d=c(228),u=c(222),j=c(220),b=c(225),m=c(221),p=c(119),h=c(118),O=c(36),v=c(23),x=c(10),f=c(116),S=c(229),y=c(117),g=c(6);function w(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(null),r=Object(l.a)(o,2),w=(r[0],r[1]),k=Object(i.useState)(!1),C=Object(l.a)(k,2),N=C[0],B=C[1],F=Object(i.useState)([]),I=Object(l.a)(F,2),P=I[0],U=I[1],A=Object(i.useState)(),D=Object(l.a)(A,2),L=D[0],R=D[1],T=Object(i.useState)(!1),H=Object(l.a)(T,2),M=H[0],E=H[1];Object(i.useEffect)((function(){fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD").then((function(e){return e.json()})).then((function(e){B(!0),U(e.Data)}),(function(e){B(!0),w(e)}))}),[]),!N&&(s.a,d.a);var z=Object(i.useCallback)((function(){return n((function(e){return!e}))}),[]),V=Object(i.useCallback)((function(){return E((function(e){return!e}))}),[]),J={colors:{surface:"#FFFFFF",onsurface:"#212B36"},colorScheme:c?"dark":"light",logo:{width:193,topBarSource:"Logo_anny.svg",url:"/",accessibilityLabel:"Trade Smarter"}},W=Object(g.jsx)(u.a,{});return Object(g.jsx)(a.a,{theme:J,i18n:{Polaris:{}},children:Object(g.jsx)(s.a,{topBar:W,children:Object(g.jsxs)(j.a,{title:"Toplist by Market Cap",fullWidth:!0,children:[Object(g.jsxs)(b.a,{children:[Object(g.jsx)(b.a.Section,{children:Object(g.jsx)(m.a,{items:P,renderItem:function(e){var t=e.CoinInfo,c=e.DISPLAY;return Object(g.jsxs)(p.a,{id:t.Id,url:"",media:Object(g.jsx)(h.a,{size:"medium",name:"".concat(t.Name),source:"https://www.cryptocompare.com/".concat(t.ImageUrl)}),accessibilityLabel:"View details for ".concat(t.FullName),onClick:function(){V(),R(t)},children:[Object(g.jsxs)(O.a,{variation:"strong",children:["".concat(t.FullName)," (","".concat(t.Name),")"]}),Object(g.jsx)("br",{}),Object(g.jsxs)(O.a,{variation:"subdued",children:["Price: ","".concat(c.USD.PRICE)]}),Object(g.jsx)("br",{}),Object(g.jsxs)(O.a,{variation:"subdued",children:["24H Volume: ","".concat(c.USD.VOLUME24HOUR)]})]})}})}),Object(g.jsx)(b.a.Section,{children:Object(g.jsxs)(v.a,{alignment:"trailing",distribution:"equalSpacing",children:[Object(g.jsx)(O.a,{variation:"subdued",children:"Made with \ud83e\udde1 \xa9 2021"}),Object(g.jsx)(x.a,{size:"slim",onClick:z,children:c?"light theme":"dark theme"})]})})]}),Object(g.jsx)(f.a,{open:M,onClose:V,title:"Coin Info",primaryAction:{content:"Close",onAction:V},children:Object(g.jsx)(f.a.Section,{children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(b.a.Header,{title:"".concat(null===L||void 0===L?void 0:L.FullName," (").concat(null===L||void 0===L?void 0:L.Name,")"),children:Object(g.jsx)(h.a,{size:"medium",name:"".concat(null===L||void 0===L?void 0:L.Name),source:"https://www.cryptocompare.com/".concat(null===L||void 0===L?void 0:L.ImageUrl)})}),Object(g.jsx)(b.a.Section,{children:Object(g.jsx)(S.a,{items:[{term:"Algorithm",description:"".concat(null===L||void 0===L?void 0:L.Algorithm)},{term:"ProofType",description:"".concat(null===L||void 0===L?void 0:L.ProofType)},{term:"Rating",description:"".concat(null===L||void 0===L?void 0:L.Rating.Weiss.Rating)},{term:"NetHashesPerSec",description:"".concat(null===L||void 0===L?void 0:L.NetHashesPerSecond)},{term:"BlockNumber",description:"".concat(null===L||void 0===L?void 0:L.BlockNumber)},{term:"BlockTime",description:"".concat(null===L||void 0===L?void 0:L.BlockTime)},{term:"BlockReward",description:"".concat(null===L||void 0===L?void 0:L.BlockReward)},{term:"AssetLaunchDate",description:"".concat(null===L||void 0===L?void 0:L.AssetLaunchDate)},{term:"MaxSupply",description:"".concat(null===L||void 0===L?void 0:L.MaxSupply)},{term:"Overview",description:Object(g.jsx)(y.a,{url:"https://www.cryptocompare.com".concat(null===L||void 0===L?void 0:L.Url),external:!0,children:"CryptoCompare"})}],spacing:"tight"})})]})})})]})})})}o.a.render(Object(g.jsx)(a.a,{i18n:r,children:Object(g.jsx)(w,{})}),document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.6ec5d15e.chunk.js.map