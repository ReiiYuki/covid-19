(this["webpackJsonpquarantine-counter"]=this["webpackJsonpquarantine-counter"]||[]).push([[0],{28:function(e,t,n){e.exports=n(46)},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),i=n.n(o),c=n(4),l=n(12),s=n(15),u=n(3),d=n(22),f=n.n(d),m=n(23),v=function(e){var t=e.title,n=e.icon,a=e.color,o=e.subtitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{icon:n,size:"10x",className:"has-text-".concat(a)}),r.a.createElement("h1",{className:"title"},t),o&&r.a.createElement("h2",{className:"subtitle"},o))},b=function(e){var t=e.setStartDate,n=Object(a.useCallback)((function(e){localStorage.setItem("startDate",e.getTime().toString()),t(e)}),[t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{title:"\u0e04\u0e38\u0e13\u0e40\u0e23\u0e34\u0e48\u0e21\u0e01\u0e31\u0e01\u0e15\u0e31\u0e27\u0e27\u0e31\u0e19\u0e44\u0e2b\u0e19 ?",icon:u.c,color:"primary"}),r.a.createElement(f.a,{onDayClick:n}))},h=n(14),g=n.n(h),p=function(e){var t=e.startDate,n=e.setStartDate,o=Object(a.useState)(!1),i=Object(c.a)(o,2),l=i[0],s=i[1],d=Object(a.useState)(0),f=Object(c.a)(d,2),m=f[0],b=f[1],h=Object(a.useCallback)((function(){n(void 0)}),[n]);Object(a.useEffect)((function(){var e=g()(t).add(14,"day"),n=g()();n.isAfter(e)?(s(!0),localStorage.clear()):b(e.diff(n,"day"))}),[t]);var p=0===m,w=m>14;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{title:l?"\u0e22\u0e34\u0e19\u0e14\u0e35\u0e14\u0e49\u0e27\u0e22 \u0e04\u0e23\u0e1a\u0e23\u0e30\u0e22\u0e30\u0e01\u0e31\u0e01\u0e15\u0e31\u0e27\u0e41\u0e25\u0e49\u0e27":p?"\u0e27\u0e31\u0e19\u0e2a\u0e38\u0e14\u0e17\u0e49\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27!":w?"\u0e19\u0e35\u0e48\u0e21\u0e31\u0e19\u0e2d\u0e19\u0e32\u0e04\u0e15 !":"\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e2d\u0e35\u0e01 ".concat(m," \u0e27\u0e31\u0e19\u0e08\u0e30\u0e04\u0e23\u0e1a\u0e23\u0e30\u0e22\u0e30\u0e01\u0e31\u0e01\u0e15\u0e31\u0e27"),icon:l?u.a:u.b,color:l||w?"success":"danger",subtitle:l?void 0:p?"\u0e2d\u0e14\u0e17\u0e19\u0e19\u0e19":w?void 0:"\u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19\u0e44\u0e1b\u0e01\u0e48\u0e2d\u0e19\u0e19\u0e49\u0e32\u0e32\u0e32"}),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"button is-primary",onClick:h},"\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e01\u0e31\u0e01\u0e15\u0e31\u0e27")))};function w(){var e=Object(l.a)(["\n  body {\n    font-family: 'Kanit', san-serif;\n    .title {\n      margin: 16px;\n    }\n    .button {\n      font-family: 'Kanit', san-serif;\n    }\n    .credit {\n      font-size: 12px;\n      position: fixed;\n      bottom: 8px;\n    }\n  }\n"]);return w=function(){return e},e}function E(){var e=Object(l.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n"]);return E=function(){return e},e}var k=s.b.div(E()),y=Object(s.a)(w());var S=function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("startDate");if(e){var t=parseInt(e);o(new Date(t))}}),[]),r.a.createElement(k,null,r.a.createElement(y,null),n?r.a.createElement(p,{startDate:n,setStartDate:o}):r.a.createElement(b,{setStartDate:o}),r.a.createElement("div",{className:"credit"},r.a.createElement("a",{className:"github-button",href:"https://github.com/reiiyuki/covid-19","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-size":"large","data-show-count":"true","aria-label":"Star reiiyuki/covid-19 on GitHub"},"Star"),r.a.createElement("p",null,"Powered by Voraton Lertrattanapaisal"),r.a.createElement("p",null,"Idea by Panjarat Sirilapporn")))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(44),n(45);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-19",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid-19","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.0a4f68dd.chunk.js.map