(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[751],{7720:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/catalogue/[name]/[id]",function(){return i(5223)}])},3436:function(n,e,i){"use strict";var t=i(4051),r=i.n(t),o=i(7294),a=i(9669),d=i.n(a);function c(n,e,i,t,r,o,a){try{var d=n[o](a),c=d.value}catch(u){return void i(u)}d.done?e(c):Promise.resolve(c).then(t,r)}var u="".concat("https://backend.fustadesign.com/api/v1/");e.Z=function(n,e){var i=(0,o.useState)(!1),t=i[0],a=i[1];return{Get:function(){var i,t=(i=r().mark((function i(t){var o,c,s,l,f,h,v,g;return r().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return o={},t&&(o={Authorization:"Bearer ".concat(t)}),i.prev=2,i.next=6,d()({method:"get",url:"".concat(u).concat(n),headers:o});case 6:l=i.sent,(null===e||void 0===e||null===(c=e.completeInterceptor)||void 0===c?void 0:c.action)&&(a(!0),e.completeInterceptor.action(l)),(null===e||void 0===e||null===(s=e.completeInterceptor)||void 0===s?void 0:s.message)&&console.log(null===e||void 0===e||null===(f=e.completeInterceptor)||void 0===f?void 0:f.message),i.next=16;break;case 11:i.prev=11,i.t0=i.catch(2),(null===e||void 0===e||null===(h=e.errorInterceptor)||void 0===h?void 0:h.action)&&(a(!0),e.errorInterceptor.action()),(null===e||void 0===e||null===(v=e.errorInterceptor)||void 0===v?void 0:v.message)&&console.log(null===e||void 0===e||null===(g=e.errorInterceptor)||void 0===g?void 0:g.message);case 16:case"end":return i.stop()}}),i,null,[[2,11]])})),function(){var n=this,e=arguments;return new Promise((function(t,r){var o=i.apply(n,e);function a(n){c(o,t,r,a,d,"next",n)}function d(n){c(o,t,r,a,d,"throw",n)}a(void 0)}))});return function(n){return t.apply(this,arguments)}}(),isLoading:t}}},5223:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return Cn}});var t=i(5893),r=i(7294),o=i(1163),a=i(7379),d=i(7609);function c(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function u(){var n=c(["\n  height: fit-content;\n"]);return u=function(){return n},n}function s(){var n=c(["\n  padding-bottom: 2%;\n  padding-top: 2%;\n  padding-left: 1%;\n  padding-right: 1%;\n  background: ",";\n  height: 70vh;\n  @media screen and (min-width: 760px) {\n    display: grid;\n    grid-template-columns: 35% 65%;\n    height: 25vh;\n    padding-left: 5%;\n    padding-right: 15%;\n  }\n  @media screen and (min-width: 1020px) {\n    height: 35vh;\n    padding-left: 15%;\n  }\n"]);return s=function(){return n},n}function l(){var n=c(["\n  overflow: hidden;\n  height: 35vh;\n  width: 100%;\n  border-radius: 10px;\n  @media screen and (min-width: 760px) {\n    height: 96%;\n  }\n  @media screen and (min-width: 1020px) {\n    height: 100%;\n  }\n"]);return l=function(){return n},n}function f(){var n=c(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);return f=function(){return n},n}function h(){var n=c(['\n  display: grid;\n  grid-template-columns: 10% 90%;\n  grid-template-rows: 10% 10% 80%;\n  grid-template-areas:\n    "icon sub"\n    "icon title"\n    "desc desc";\n  @media screen and (min-width: 760px) {\n    grid-template-areas:\n      "icon sub"\n      "icon title"\n      ". desc";\n  }\n']);return h=function(){return n},n}function v(){var n=c(["\n  grid-area: ",";\n  margin: 0;\n  ","\n  color: grey;\n  font-size: 4vw;\n  @media screen and (min-width: 760px) {\n    font-size: 2vw;\n  }\n  @media screen and (min-width: 1020px) {\n    font-size: 0.8vw;\n  }\n"]);return v=function(){return n},n}function g(){var n=c(["\n  grid-area: ",";\n  margin: 0;\n  ","\n  color: grey;\n  @media screen and (min-width: 760px) {\n    font-size: 2.1vw;\n  }\n  @media screen and (min-width: 1020px) {\n    font-size: 1vw;\n  }\n"]);return g=function(){return n},n}function m(){var n=c(["\n  grid-area: ",";\n  ","\n  text-align:center;\n  @media screen and (min-width: 760px) {\n    text-align: start;\n    font-size: 2.1vw;\n  }\n  @media screen and (min-width: 1020px) {\n    font-size: 1vw;\n  }\n"]);return m=function(){return n},n}function p(){var n=c(["\n  grid-area: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return p=function(){return n},n}function w(){var n=c(["\n  height: 60%;\n  @media screen and (min-width: 760px) {\n    height: 60%;\n  }\n  @media screen and (min-width: 1020px) {\n    height: 100%;\n  }\n"]);return w=function(){return n},n}var x=a.ZP.div(u()),j=a.ZP.div(s(),(function(n){return n.color})),M=a.ZP.div(l()),b=a.ZP.img(f()),z=a.ZP.div(h()),L=a.ZP.p(v(),(function(n){return n.area}),(0,d.Is)()),N=a.ZP.h4(g(),(function(n){return n.area}),(0,d.g)()),P=a.ZP.p(m(),(function(n){return n.area}),(0,d.TW)()),D=a.ZP.div(p(),(function(n){return n.area})),y=a.ZP.img(w()),I=(i(7035),i(7849),i(3679),i(9073),function(n){var e=n.information;return(0,t.jsx)(x,{children:e.map((function(n,e){var r="white";return e%2===0&&(r="#F3F4F6"),(0,t.jsxs)(j,{color:r,children:[(0,t.jsx)(M,{children:(0,t.jsx)(b,{alt:"image",src:null===n||void 0===n?void 0:n.picture})}),(0,t.jsxs)(z,{children:[(0,t.jsx)(D,{area:"icon",children:(0,t.jsx)(y,{alt:"image",src:i(9963)})}),(0,t.jsx)(L,{area:"sub",children:null===n||void 0===n?void 0:n.subtitle}),(0,t.jsx)(N,{area:"title",children:null===n||void 0===n?void 0:n.title}),(0,t.jsx)(P,{area:"desc",children:null===n||void 0===n?void 0:n.description})]})]},n.id)}))})});function Z(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function O(){var n=Z(["\n  height: 100%;\n  width: 100%;\n"]);return O=function(){return n},n}function S(){var n=Z(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n"]);return S=function(){return n},n}var T=a.ZP.div(O()),E=a.ZP.img(S()),_=function(n){var e=function(){d<i.length-1?c(d+1):c(0)},i=n.images,o=n.time,a=(0,r.useState)(0),d=a[0],c=a[1];return(0,r.useEffect)((function(){return setTimeout((function(){e()}),o),function(){e()}}),[d]),(0,t.jsx)(T,{children:(0,t.jsx)(E,{alt:"img",src:i[d]})})};function C(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function A(){var n=C(["\n  min-height: 65vh;\n  height: fit-content;\n  display: grid;\n  @media screen and (min-width: 760px) {\n    grid-template-columns: 50% 50%;\n    height: 65vh;\n  }\n"]);return A=function(){return n},n}function k(){var n=C(['\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 10% 90%;\n  grid-template-rows: 5% 5% 40% 50%;\n  grid-template-areas:\n    "icon sub"\n    "icon title"\n    ". Desc"\n    ". bene";\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-top: 5%;\n  padding-bottom: 5%;\n  @media screen and (min-width: 760px) {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n  @media screen and (min-width: 1020px) {\n    padding-left: 10%;\n    padding-right: 10%;\n  }\n']);return k=function(){return n},n}function U(){var n=C(["\n  width: 100%;\n  height: 60vh;\n  overflow: hidden;\n  @media screen and (min-width: 760px) {\n    height: 100%;\n  }\n"]);return U=function(){return n},n}function Y(){var n=C(["\n  grid-area: ",";\n  margin: 0;\n  @media screen and (min-width: 760px) {\n    font-size: 2vw;\n  }\n  @media screen and (min-width: 1020px) {\n    font-size: 1vw;\n  }\n"]);return Y=function(){return n},n}function Q(){var n=C(["\n  grid-area: ",";\n  margin: 0;\n  @media screen and (min-width: 760px) {\n    font-size: 2.5vw;\n  }\n  @media screen and (min-width: 1020px) {\n    font-size: 1vw;\n  }\n"]);return Q=function(){return n},n}function H(){var n=C(["\n  grid-area: ",";\n  height: 100%;\n  width: 100%;\n"]);return H=function(){return n},n}function G(){var n=C(["\n  grid-area: ",";\n  font-size: 3.2vw;\n  @media screen and (min-width: 760px) {\n    font-size: 2vw;\n  }\n  @media screen and (min-width: 1020px) {\n    font-size: 1vw;\n  }\n"]);return G=function(){return n},n}function R(){var n=C(["\n  grid-area: ",";\n  @media screen and (min-width: 760px) {\n    font-size: 2.5vw;\n  }\n  @media screen and (min-width: 1020px) {\n    font-size: 1vw;\n  }\n"]);return R=function(){return n},n}function W(){var n=C(["\n  display: grid;\n  grid-template-columns: 50% 50%;\n  height: fit-content;\n  border-color: red;\n"]);return W=function(){return n},n}function B(){var n=C(["\n  width: 100%;\n  height: 100%;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #f0f0f0;\n  margin: 0;\n  padding: 3%;\n  font-size: 4.5vw;\n  @media screen and (min-width: 760px) {\n    font-size: 2vw;\n  }\n  @media screen and (min-width: 1020px) {\n    font-size: 1vw;\n  }\n"]);return B=function(){return n},n}function F(){var n=C(["\n  grid-area: ",";\n  grid-template-rows: 10% 90%;\n  height: 100%;\n  width: 100%;\n"]);return F=function(){return n},n}function J(){var n=C(["\n  grid-area: ",";\n\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return J=function(){return n},n}function X(){var n=C(["\n  width: 50%;\n  height: auto;\n"]);return X=function(){return n},n}var $=a.ZP.div(A()),q=a.ZP.div(k()),K=a.ZP.div(U()),V=a.ZP.p(Y(),(function(n){return n.area})),nn=a.ZP.h4(Q(),(function(n){return n.area})),en=a.ZP.div(H(),(function(n){return n.area})),tn=a.ZP.p(G(),(function(n){return n.area})),rn=a.ZP.p(R(),(function(n){return n.area})),on=a.ZP.div(W()),an=a.ZP.p(B()),dn=a.ZP.div(F(),(function(n){return n.area})),cn=a.ZP.div(J(),(function(n){return n.area})),un=a.ZP.img(X()),sn="%$##$%",ln=function(n){var e=n.information,o=n.carousel,a=(0,r.useState)([]),d=a[0],c=a[1];return(0,r.useEffect)((function(){null!==e&&((null===e||void 0===e?void 0:e.benefits.includes(sn))?c(null===e||void 0===e?void 0:e.benefits.split(sn)):""!==(null===e||void 0===e?void 0:e.benefits)&&c[null===e||void 0===e?void 0:e.benefits])}),[e]),(0,t.jsxs)($,{children:[(0,t.jsxs)(q,{children:[(0,t.jsx)(cn,{area:"icon",children:(0,t.jsx)(un,{atl:"icon",src:i(9963)})}),(0,t.jsx)(V,{area:"sub",children:null===e||void 0===e?void 0:e.subtitle}),(0,t.jsx)(nn,{area:"title",children:null===e||void 0===e?void 0:e.title}),(0,t.jsx)(en,{area:"Desc",children:(0,t.jsx)(tn,{children:null===e||void 0===e?void 0:e.description})}),(0,t.jsxs)(dn,{area:"bene",children:[(0,t.jsx)(rn,{children:"BENEFICIOS:"}),(0,t.jsx)(on,{children:0!==d.length&&d.map((function(n,e){return(0,t.jsxs)(an,{children:[(0,t.jsx)("span",{style:{color:"orange"},children:"\u2022 "})," ",n]},e)}))})]})]}),(0,t.jsx)(K,{children:0!==(null===o||void 0===o?void 0:o.length)&&(0,t.jsx)(_,{time:2e3,images:o})})]})};function fn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function hn(){var n=fn(["\n  min-height: 30vh;\n  height: fit-content;\n  padding-left: 1%;\n  padding-right: 1%;\n  background: #f5f5f5;\n  font-size: 4vw;\n  @media screen and (min-width: 760px) {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n  @media screen and (min-width: 1020px) {\n    padding-left: 15%;\n    padding-right: 15%;\n  }\n"]);return hn=function(){return n},n}function vn(){var n=fn(["\n  display: flex;\n  ","\n"]);return vn=function(){return n},n}function gn(){var n=fn(["\n  color: ",";\n  padding-left: 5px;\n  cursor: pointer;\n  font-size: 4vw;\n  @media screen and (min-width: 760px) {\n    font-size: 2.5vw;\n  }\n  @media screen and (min-width: 1020px) {\n    font-size: 1.2vw;\n  }\n"]);return gn=function(){return n},n}function mn(){var n=fn(["\n  margin-left: 10%;\n  margin-right: 10%;\n  ","\n  color: grey;\n  text-align: center;\n  font-size: 4vw;\n  @media screen and (min-width: 760px) {\n    font-size: 3vw;\n  }\n  @media screen and (min-width: 1020px) {\n    font-size: 1.2vw;\n  }\n"]);return mn=function(){return n},n}function pn(){var n=fn(["\n  margin-left: 2%;\n  margin-right: 2%;\n  ","\n  color: grey;\n  text-align: center;\n  font-size: 4vw;\n  padding-bottom: 5%;\n  @media screen and (min-width: 760px) {\n    margin-left: 0%;\n    margin-right: 0%;\n\n    font-size: 2.5vw;\n  }\n  @media screen and (min-width: 1020px) {\n    padding-bottom: 2%;\n    font-size: 1.2vw;\n  }\n"]);return pn=function(){return n},n}var wn=a.ZP.div(hn()),xn=a.ZP.div(vn(),(0,d.Is)()),jn=a.ZP.p(gn(),(function(n){return"true"===n.red&&"orange"})),Mn=a.ZP.h2(mn(),(0,d.g)()),bn=a.ZP.p(pn(),(0,d.g)()),zn=function(n){var e=n.information,i=n.PageTitle,r=(0,o.useRouter)().push;return(0,t.jsxs)(wn,{children:[(0,t.jsxs)(xn,{children:[(0,t.jsx)(jn,{onClick:function(){r("/")},children:"Home "}),(0,t.jsx)(jn,{children:">"}),(0,t.jsxs)(jn,{red:(!0).toString(),children:[" ",i]})]}),(0,t.jsx)(Mn,{children:null===e||void 0===e?void 0:e.title}),(0,t.jsx)(bn,{children:null===e||void 0===e?void 0:e.description})]})};function Ln(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Nn(){var n=Ln(["\n  position: relative;\n  @media screen and (min-width: 768px) {\n    height: 35vh;\n  }\n\n  @media screen and (min-width: 1024px) {\n    min-height: 40vh;\n  }\n"]);return Nn=function(){return n},n}function Pn(){var n=Ln(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);return Pn=function(){return n},n}function Dn(){var n=Ln(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 8vw;\n  ","\n  color: white;\n  text-shadow: 1px 1px 2px black;\n  font-weight: 400;\n  @media screen and (min-width: 768px) {\n    font-size: 7vw;\n  }\n\n  @media screen and (min-width: 1024px) {\n    font-size: 3vw;\n  }\n"]);return Dn=function(){return n},n}var yn=a.ZP.div(Nn()),In=a.ZP.img(Pn()),Zn=a.ZP.h2(Dn(),(0,d.g)()),On=function(n){var e=n.information;return(0,t.jsxs)(yn,{children:[(0,t.jsx)(In,{alt:"picture bg",src:null===e||void 0===e?void 0:e.picture}),(0,t.jsxs)(Zn,{children:[" ",null===e||void 0===e?void 0:e.title]})]})};function Sn(){var n,e,i=(n=["\n  min-height: 100vh;\n  height: fit-content;\n  background: white;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return Sn=function(){return i},i}var Tn=a.ZP.div(Sn()),En=i(4204),_n=i(3436),Cn=function(){var n=(0,r.useState)(null),e=n[0],i=n[1],a=(0,r.useState)([]),d=a[0],c=a[1],u=(0,o.useRouter)().query.id;console.log(u);var s=(0,_n.Z)("catalogues/public/catalogue/".concat(u),{completeInterceptor:{action:function(n){i(n.data.data)}},errorInterceptor:{message:"No se obtuvieron los datos de get"}}).Get;return(0,r.useEffect)((function(){""!==u&&s()}),[]),(0,r.useEffect)((function(){null!==e&&c(null===e||void 0===e?void 0:e.catalogue_carousel_description.map((function(n){return n.picture})))}),[e]),(0,t.jsx)(En.Z,{children:(0,t.jsxs)(Tn,{children:[null!==e&&(0,t.jsx)(On,{information:null===e||void 0===e?void 0:e.catalogue_headers[0]}),null!==e&&(0,t.jsx)(zn,{information:null===e||void 0===e?void 0:e.catalogue_big_description[0],PageTitle:null===e||void 0===e?void 0:e.catalogue_headers[0].title}),null!==e&&(0,t.jsx)(ln,{information:null===e||void 0===e?void 0:e.catalogue_big_card_carousel[0],carousel:d}),null!==e&&(0,t.jsx)(I,{information:null===e||void 0===e?void 0:e.catalogue_carousel_description})]})})}},9963:function(n){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOC41MjcxIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMzguNTI3MSA1MCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2JjNWIyODt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmljb24tZ29sZjwvdGl0bGU+PHBhdGggY2xhc3M9ImEiIGQ9Ik00NC4yNjM1LDE5LjI2MzhBMTkuMjYzNSwxOS4yNjM1LDAsMSwwLDE3LjMwNDQsMzYuOTEyN2MuMDI0OS4wNS4wMzI1LjEwNTcuMDYyLjE1NDdsLjEyLjJjMS43ODMxLDIuOTYxNSwyLjUyMTEsNC4xODczLDIuNTIxMSw3LjAzMDh2MS42NDA4YTIuMDc5NCwyLjA3OTQsMCwwLDAsLjg5MTIsMS42ODQ2bDIuNzU0NSwxLjk1MjhhMi4zNTMxLDIuMzUzMSwwLDAsMCwyLjY5NDksMGwyLjc1NC0xLjk1MjhhMi4wNzc2LDIuMDc3NiwwLDAsMCwuODkxOC0xLjY4NDZWNDQuMjk3OGMwLTIuODQxNC43MzY5LTQuMDY2NywyLjUxOS03LjAyNzZsLjEyMTEtLjIwMTJjLjAzLS4wNS4wMzc3LS4xMDU2LjA2My0uMTU2OUExOS4yODQzLDE5LjI4NDMsMCwwLDAsNDQuMjYzNSwxOS4yNjM4Wm0tMjAuOSwxOS40OTI5YTI2LjcxMTIsMjYuNzExMiwwLDAsMCwzLjI3MjguMDAzNywxMi41NzY0LDEyLjU3NjQsMCwwLDAtMS4xMiw1LjUzNzR2LjU4NzhMMjUsNDUuMjUwN2wtLjUxNTItLjM2NTF2LS41ODc4QTEyLjU4MjEsMTIuNTgyMSwwLDAsMCwyMy4zNjMxLDM4Ljc1NjdaTTI1LDM0LjQ4MkExNS4yMTgyLDE1LjIxODIsMCwxLDEsNDAuMjE4LDE5LjI2MzgsMTUuMjM1MywxNS4yMzUzLDAsMCwxLDI1LDM0LjQ4MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01LjczNjUpIi8+PC9zdmc+"},7849:function(n){n.exports="/_next/static/images/lanmark-bg-d015b8eb1ee84908bfa76c77d43cbb35.jpeg"},9073:function(n){n.exports="/_next/static/images/sport-52579b1c5d3b3d7c36db98b99024795a.jpeg"},3679:function(n){n.exports="/_next/static/images/tennis-48a74a8c6d3d44c79b6fff21fbadfd5e.jpeg"}},function(n){n.O(0,[716,400,204,774,888,179],(function(){return e=7720,n(n.s=e);var e}));var e=n.O();_N_E=e}]);