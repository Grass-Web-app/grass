(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{4049:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return r(7890)}])},5673:function(n,e,r){"use strict";r.d(e,{TL:function(){return i},CG:function(){return o}});r(4051),r(7294);var t=r(1043);var i=function(){return(0,t.I0)()},o=t.v9},4204:function(n,e,r){"use strict";r.d(e,{Z:function(){return l}});var t=r(5893),i=(r(7294),r(9008)),o=r(7609),a=r(5673),d=r(5920),c=function(){var n=(0,a.CG)(d.t7);return(0,t.jsx)("style",{children:"body {  background-color: ".concat("true"===n.toString()?o.HW:o.Qs," ; }")})},s=r(1742);function f(){var n,e,r=(n=["\n  background-image: url(",");\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return f=function(){return r},r}var u=r(7379).ZP.div(f(),(function(n){return n.bg})),l=function(n){var e=n.children;return(0,t.jsxs)(u,{bg:s.prefix+r(1519),children:[(0,t.jsx)(o.ZL,{}),(0,t.jsx)(c,{}),(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"Fustadesing"}),(0,t.jsx)("link",{rel:"icon",href:s.prefix+"/pasto.png"}),(0,t.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,t.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"},0),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@1,700&family=Raleway:wght@100;400&family=Source+Sans+Pro:wght@200;400&display=swap",rel:"stylesheet"})]}),e]})}},7890:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return w}});var t=r(5893),i=r(4204),o=r(7379);function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function d(){var n=a(["\nwidth: 90%;\nmax-width: 1000px;\nmargin:20px auto;\ndisplay: grid;\ngrid-gap: 20px;\ngrid-template-columns: repeat(3, 1fr);\ngrid-template-rows: repeat(4, auto);\n"]);return d=function(){return n},n}function c(){var n=a(["\nbackground: blue;\ncolor: #fff;\ngrid-area: header; //\xe1rea\n\n& > h1 {\n    margin-left: 2%;\n}\n\n"]);return c=function(){return n},n}function s(){var n=a(["\npadding-left: 2%;\ngrid-area: contenido; //\xe1rea\n"]);return s=function(){return n},n}function f(){var n=a(["\nbackground: orange;\nmin-height: 100px;\ngrid-area: sidebar; //\xe1rea\n\n/*flexbox para acomodar elementos*/\n\ndisplay: flex;\nalign-items: center;\njustify-content: center; //\xe1rea\n"]);return f=function(){return n},n}function u(){var n=a(["\n\nbackground: orchid;\nheight: 100px;\ngrid-area: ","; //\xe1rea\n\n/*flexbox para acomodar elementos*/\n\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]);return u=function(){return n},n}function l(){var n=a(["\npadding: 20px;\nbackground: maroon;\ncolor: #fff;\ngrid-area: footer; //\xe1rea\n"]);return l=function(){return n},n}var g=o.ZP.div(d()),h=o.ZP.header(c()),m=o.ZP.main(s()),p=o.ZP.aside(f()),x=o.ZP.div(u(),(function(n){return"widget-1"===n.className?"widget-1":"widget-2"})),b=o.ZP.footer(l()),w=function(){return(0,t.jsx)(i.Z,{children:(0,t.jsxs)(g,{className:"contenedor",children:[(0,t.jsx)(h,{className:"header",children:(0,t.jsx)("h1",{children:"Header"})}),(0,t.jsxs)(m,{className:"contenido",children:[(0,t.jsx)("h2",{children:"Test"}),(0,t.jsx)("p",{children:"Lorem asdasd"})]}),(0,t.jsx)(p,{className:"sidebar",children:"Sidebar"}),(0,t.jsx)(x,{className:"widget-1",children:"Widget-1"}),(0,t.jsx)(x,{className:"widget-2",children:"Widget-2"}),(0,t.jsx)(b,{className:"footer",children:"Footer"})]})})}},7609:function(n,e,r){"use strict";r.d(e,{Qs:function(){return o},HW:function(){return a},g:function(){return d},Is:function(){return c},TW:function(){return s},ZL:function(){return f}});var t=r(7379);function i(){var n,e,r=(n=['\n\n\n\n//Estilos por defecto que trae React\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\',\n    \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \'Courier New\',\n    monospace;\n}\n\n\n\n\n/*Grid Area First Mobile*/\n\n/*min 640px*/\n.contenedor {\ngrid-template-areas: "header header header"\n                    "contenido contenido contenido"\n                    "sidebar sidebar sidebar"\n                    "widget-1 widget-1 widget-1"\n                    "widget-2 widget-2 widget-2"\n                    "footer footer footer"\n;\n}\n\n\n/*min 768px*/\n@media screen and (min-width: 768px){\n.contenedor{\ngrid-template-areas:    "header header header"\n                        "contenido contenido contenido"\n                        "sidebar sidebar sidebar"\n                        "widget-1 widget-1 widget-2"\n                        "footer footer footer"\n;\n}    \n}\n\n/*min 1024px*/\n@media screen and (min-width: 1024px){\n.contenedor{\ngrid-template-areas:    "header header header"\n                        "contenido contenido sidebar"\n                        "widget-1 widget-2 sidebar"\n                        "footer footer footer"\n;\n}\n\n}\n\n/*min 1280px*/\n@media screen and (min-width: 1280px){\n.contenedor{\ngrid-template-areas:    "header header header"\n                        "contenido contenido sidebar"\n                        "widget-1 widget-1 sidebar"\n                        "widget-2 widget-2 sidebar"\n                        "footer footer footer"\n;\n}\n\n}\n\n/*min 1536px*/\n\n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return i=function(){return r},r}var o="#ffffff",a="#18191a",d=function(){return"font-family: 'Raleway', sans-serif;"},c=function(){return'font-family: "PT Serif", serif;'},s=function(){return'font-family: "Source Sans Pro", sans-serif;'},f=(0,t.vJ)(i())},1519:function(n){n.exports="/_next/static/images/playground-bg-ff9f3c5db25a4babe8042b42f5747480.jpeg"}},function(n){n.O(0,[716,774,888,179],(function(){return e=4049,n(n.s=e);var e}));var e=n.O();_N_E=e}]);