(this.webpackJsonpopenquiz=this.webpackJsonpopenquiz||[]).push([[4],{452:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(22),u=n(0),i=n.n(u),s=n(441),o=n.n(s),r=n(55),c=n(43),p=n.n(c),h=n(24);function l(){var e=Object(u.useState)(!1),t=Object(a.a)(e,2),n=(t[0],t[1],Object(h.b)());return i.a.createElement(o.a,{uiConfig:{signInFlow:"popup",signInOptions:[p.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(e){return e.additionalUserInfo.isNewUser&&n({type:"NEW_USER_LOGIN",payload:e.user.providerData[0]}),!0}}},firebaseAuth:r.a.auth()})}}}]);
//# sourceMappingURL=4.3b5e9b5f.chunk.js.map