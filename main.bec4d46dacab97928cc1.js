(()=>{"use strict";var n={575:(n,e,t)=>{t.d(e,{A:()=>m});var o=t(354),r=t.n(o),a=t(314),C=t.n(a),i=t(417),s=t.n(i),c=new URL(t(96),t.b),A=new URL(t(21),t.b),d=new URL(t(667),t.b),l=new URL(t(690),t.b),p=C()(r()),u=s()(c),h=s()(A),g=s()(d),E=s()(l);p.push([n.id,`aside {\n  background-color: var(--aside-bg-color);\n  color: var(--aside-text-color);\n  padding: 20px 40px;\n  min-width: 200px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.aside-account {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.aside-account h2 {\n  font-weight: bold;\n}\n\n.aside-account-icon {\n  background-image: url(${u});\n  background-size: contain;\n  width: var(--account-icon-wh-size);\n  height: var(--account-icon-wh-size);\n}\n\n.todays-task-icon {\n  background-image: url(${h});\n  background-size: contain;\n  width: var(--option-icon-wh-size);\n  height: var(--option-icon-wh-size);\n}\n\n.week-tasks-icon {\n  background-image: url(${g});\n  background-size: contain;\n  width: var(--option-icon-wh-size);\n  height: var(--option-icon-wh-size);\n}\n\n.all-tasks-icon {\n  background-image: url(${E});\n  background-size: contain;\n  width: var(--option-icon-wh-size);\n  height: var(--option-icon-wh-size);\n}\n\nli {\n  list-style-type: none;\n  margin-bottom: 10px;\n}\n\nbutton {\n  border: none;\n  outline: none;\n  padding: 0;\n  pointer-events: auto;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.btnActive {\n  color: #9d5900;\n}\n`,"",{version:3,sources:["webpack://./src/aside.css"],names:[],mappings:"AAAA;EACE,uCAAuC;EACvC,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yDAA0+B;EAC1+B,wBAAwB;EACxB,kCAAkC;EAClC,mCAAmC;AACrC;;AAEA;EACE,yDAAwyB;EACxyB,wBAAwB;EACxB,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,yDAAuZ;EACvZ,wBAAwB;EACxB,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,yDAA2d;EAC3d,wBAAwB;EACxB,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,oBAAoB;EACpB,aAAa;EACb,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB",sourcesContent:['aside {\r\n  background-color: var(--aside-bg-color);\r\n  color: var(--aside-text-color);\r\n  padding: 20px 40px;\r\n  min-width: 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n.aside-account {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.aside-account h2 {\r\n  font-weight: bold;\r\n}\r\n\r\n.aside-account-icon {\r\n  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12A10%2C10%200%200%2C0%2012%2C2M7.07%2C18.28C7.5%2C17.38%2010.12%2C16.5%2012%2C16.5C13.88%2C16.5%2016.5%2C17.38%2016.93%2C18.28C15.57%2C19.36%2013.86%2C20%2012%2C20C10.14%2C20%208.43%2C19.36%207.07%2C18.28M18.36%2C16.83C16.93%2C15.09%2013.46%2C14.5%2012%2C14.5C10.54%2C14.5%207.07%2C15.09%205.64%2C16.83C4.62%2C15.5%204%2C13.82%204%2C12C4%2C7.59%207.59%2C4%2012%2C4C16.41%2C4%2020%2C7.59%2020%2C12C20%2C13.82%2019.38%2C15.5%2018.36%2C16.83M12%2C6C10.06%2C6%208.5%2C7.56%208.5%2C9.5C8.5%2C11.44%2010.06%2C13%2012%2C13C13.94%2C13%2015.5%2C11.44%2015.5%2C9.5C15.5%2C7.56%2013.94%2C6%2012%2C6M12%2C11A1.5%2C1.5%200%200%2C1%2010.5%2C9.5A1.5%2C1.5%200%200%2C1%2012%2C8A1.5%2C1.5%200%200%2C1%2013.5%2C9.5A1.5%2C1.5%200%200%2C1%2012%2C11Z%22%2F%3E%3C%2Fsvg%3E");\r\n  background-size: contain;\r\n  width: var(--account-icon-wh-size);\r\n  height: var(--account-icon-wh-size);\r\n}\r\n\r\n.todays-task-icon {\r\n  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Ebullseye%3C%2Ftitle%3E%3Cpath%20d%3D%22M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12A10%2C10%200%200%2C0%2012%2C2M12%2C4A8%2C8%200%200%2C1%2020%2C12A8%2C8%200%200%2C1%2012%2C20A8%2C8%200%200%2C1%204%2C12A8%2C8%200%200%2C1%2012%2C4M12%2C6A6%2C6%200%200%2C0%206%2C12A6%2C6%200%200%2C0%2012%2C18A6%2C6%200%200%2C0%2018%2C12A6%2C6%200%200%2C0%2012%2C6M12%2C8A4%2C4%200%200%2C1%2016%2C12A4%2C4%200%200%2C1%2012%2C16A4%2C4%200%200%2C1%208%2C12A4%2C4%200%200%2C1%2012%2C8M12%2C10A2%2C2%200%200%2C0%2010%2C12A2%2C2%200%200%2C0%2012%2C14A2%2C2%200%200%2C0%2014%2C12A2%2C2%200%200%2C0%2012%2C10Z%22%2F%3E%3C%2Fsvg%3E");\r\n  background-size: contain;\r\n  width: var(--option-icon-wh-size);\r\n  height: var(--option-icon-wh-size);\r\n}\r\n\r\n.week-tasks-icon {\r\n  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Ecalendar-week%3C%2Ftitle%3E%3Cpath%20d%3D%22M6%201H8V3H16V1H18V3H19C20.11%203%2021%203.9%2021%205V19C21%2020.11%2020.11%2021%2019%2021H5C3.89%2021%203%2020.1%203%2019V5C3%203.89%203.89%203%205%203H6V1M5%208V19H19V8H5M7%2010H17V12H7V10Z%22%2F%3E%3C%2Fsvg%3E");\r\n  background-size: contain;\r\n  width: var(--option-icon-wh-size);\r\n  height: var(--option-icon-wh-size);\r\n}\r\n\r\n.all-tasks-icon {\r\n  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Elist-box-outline%3C%2Ftitle%3E%3Cpath%20d%3D%22M11%2015H17V17H11V15M9%207H7V9H9V7M11%2013H17V11H11V13M11%209H17V7H11V9M9%2011H7V13H9V11M21%205V19C21%2020.1%2020.1%2021%2019%2021H5C3.9%2021%203%2020.1%203%2019V5C3%203.9%203.9%203%205%203H19C20.1%203%2021%203.9%2021%205M19%205H5V19H19V5M9%2015H7V17H9V15Z%22%2F%3E%3C%2Fsvg%3E");\r\n  background-size: contain;\r\n  width: var(--option-icon-wh-size);\r\n  height: var(--option-icon-wh-size);\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  outline: none;\r\n  padding: 0;\r\n  pointer-events: auto;\r\n  display: flex;\r\n  gap: 5px;\r\n  align-items: center;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.btnActive {\r\n  color: #9d5900;\r\n}\r\n'],sourceRoot:""}]);const m=p},6:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(354),r=t.n(o),a=t(314),C=t.n(a)()(r());C.push([n.id,".container {\n  display: flex;\n  min-width: 100%;\n  height: 100lvh;\n}\n","",{version:3,sources:["webpack://./src/container.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,eAAe;EACf,cAAc;AAChB",sourcesContent:[".container {\r\n  display: flex;\r\n  min-width: 100%;\r\n  height: 100lvh;\r\n}\r\n"],sourceRoot:""}]);const i=C},536:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(354),r=t.n(o),a=t(314),C=t.n(a)()(r());C.push([n.id,".content {\n  background-color: var(--main-bg-color);\n  color: var(--main-text-color);\n  padding: 10px;\n  flex: 1;\n}\n","",{version:3,sources:["webpack://./src/content.css"],names:[],mappings:"AAAA;EACE,sCAAsC;EACtC,6BAA6B;EAC7B,aAAa;EACb,OAAO;AACT",sourcesContent:[".content {\r\n  background-color: var(--main-bg-color);\r\n  color: var(--main-text-color);\r\n  padding: 10px;\r\n  flex: 1;\r\n}\r\n"],sourceRoot:""}]);const i=C},336:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(354),r=t.n(o),a=t(314),C=t.n(a)()(r());C.push([n.id,"header {\n  background-color: var(--header-bg-color);\n  color: var(--header-text-color);\n  padding: 10px;\n  text-align: center;\n  height: 5lvh;\n}\n","",{version:3,sources:["webpack://./src/header.css"],names:[],mappings:"AAAA;EACE,wCAAwC;EACxC,+BAA+B;EAC/B,aAAa;EACb,kBAAkB;EAClB,YAAY;AACd",sourcesContent:["header {\r\n  background-color: var(--header-bg-color);\r\n  color: var(--header-text-color);\r\n  padding: 10px;\r\n  text-align: center;\r\n  height: 5lvh;\r\n}\r\n"],sourceRoot:""}]);const i=C},208:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(354),r=t.n(o),a=t(314),C=t.n(a)()(r());C.push([n.id,"*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  --header-bg-color: #493628;\n  --header-text-color: #e4e0e1;\n  --aside-bg-color: #d6c0b3;\n  --aside-text-color: #493628;\n  --main-bg-color: #e4e0e1;\n  --main-text-color: #493628;\n  --button-bg-color: #d6c0b3;\n  --button-text-color: #493628;\n  --account-icon-wh-size: 35px;\n  --option-icon-wh-size: 15px;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  overflow: hidden;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\nbutton {\n  background-color: var(--button-bg-color);\n  color: var(--button-text-color);\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;EAEE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,0BAA0B;EAC1B,4BAA4B;EAC5B,yBAAyB;EACzB,2BAA2B;EAC3B,wBAAwB;EACxB,0BAA0B;EAC1B,0BAA0B;EAC1B,4BAA4B;EAC5B,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,+BAA+B;AACjC",sourcesContent:["*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  --header-bg-color: #493628;\r\n  --header-text-color: #e4e0e1;\r\n  --aside-bg-color: #d6c0b3;\r\n  --aside-text-color: #493628;\r\n  --main-bg-color: #e4e0e1;\r\n  --main-text-color: #493628;\r\n  --button-bg-color: #d6c0b3;\r\n  --button-text-color: #493628;\r\n  --account-icon-wh-size: 35px;\r\n  --option-icon-wh-size: 15px;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  overflow: hidden;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--button-bg-color);\r\n  color: var(--button-text-color);\r\n}\r\n"],sourceRoot:""}]);const i=C},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var C={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(C[s]=!0)}for(var c=0;c<n.length;c++){var A=[].concat(n[c]);o&&C[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),r&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=r):A[4]="".concat(r)),e.push(A))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},C=[],i=0;i<n.length;i++){var s=n[i],c=o.base?s[0]+o.base:s[0],A=a[c]||0,d="".concat(c," ").concat(A);a[c]=A+1;var l=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(p);else{var u=r(p,o);o.byIndex=i,e.splice(i,0,{identifier:d,updater:u,references:1})}C.push(d)}return C}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var C=0;C<a.length;C++){var i=t(a[C]);e[i].references--}for(var s=o(n,r),c=0;c<a.length;c++){var A=t(a[c]);0===e[A].references&&(e[A].updater(),e.splice(A,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},96:n=>{n.exports="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12A10%2C10%200%200%2C0%2012%2C2M7.07%2C18.28C7.5%2C17.38%2010.12%2C16.5%2012%2C16.5C13.88%2C16.5%2016.5%2C17.38%2016.93%2C18.28C15.57%2C19.36%2013.86%2C20%2012%2C20C10.14%2C20%208.43%2C19.36%207.07%2C18.28M18.36%2C16.83C16.93%2C15.09%2013.46%2C14.5%2012%2C14.5C10.54%2C14.5%207.07%2C15.09%205.64%2C16.83C4.62%2C15.5%204%2C13.82%204%2C12C4%2C7.59%207.59%2C4%2012%2C4C16.41%2C4%2020%2C7.59%2020%2C12C20%2C13.82%2019.38%2C15.5%2018.36%2C16.83M12%2C6C10.06%2C6%208.5%2C7.56%208.5%2C9.5C8.5%2C11.44%2010.06%2C13%2012%2C13C13.94%2C13%2015.5%2C11.44%2015.5%2C9.5C15.5%2C7.56%2013.94%2C6%2012%2C6M12%2C11A1.5%2C1.5%200%200%2C1%2010.5%2C9.5A1.5%2C1.5%200%200%2C1%2012%2C8A1.5%2C1.5%200%200%2C1%2013.5%2C9.5A1.5%2C1.5%200%200%2C1%2012%2C11Z%22%2F%3E%3C%2Fsvg%3E"},21:n=>{n.exports="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Ebullseye%3C%2Ftitle%3E%3Cpath%20d%3D%22M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12A10%2C10%200%200%2C0%2012%2C2M12%2C4A8%2C8%200%200%2C1%2020%2C12A8%2C8%200%200%2C1%2012%2C20A8%2C8%200%200%2C1%204%2C12A8%2C8%200%200%2C1%2012%2C4M12%2C6A6%2C6%200%200%2C0%206%2C12A6%2C6%200%200%2C0%2012%2C18A6%2C6%200%200%2C0%2018%2C12A6%2C6%200%200%2C0%2012%2C6M12%2C8A4%2C4%200%200%2C1%2016%2C12A4%2C4%200%200%2C1%2012%2C16A4%2C4%200%200%2C1%208%2C12A4%2C4%200%200%2C1%2012%2C8M12%2C10A2%2C2%200%200%2C0%2010%2C12A2%2C2%200%200%2C0%2012%2C14A2%2C2%200%200%2C0%2014%2C12A2%2C2%200%200%2C0%2012%2C10Z%22%2F%3E%3C%2Fsvg%3E"},667:n=>{n.exports="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Ecalendar-week%3C%2Ftitle%3E%3Cpath%20d%3D%22M6%201H8V3H16V1H18V3H19C20.11%203%2021%203.9%2021%205V19C21%2020.11%2020.11%2021%2019%2021H5C3.89%2021%203%2020.1%203%2019V5C3%203.89%203.89%203%205%203H6V1M5%208V19H19V8H5M7%2010H17V12H7V10Z%22%2F%3E%3C%2Fsvg%3E"},690:n=>{n.exports="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Elist-box-outline%3C%2Ftitle%3E%3Cpath%20d%3D%22M11%2015H17V17H11V15M9%207H7V9H9V7M11%2013H17V11H11V13M11%209H17V7H11V9M9%2011H7V13H9V11M21%205V19C21%2020.1%2020.1%2021%2019%2021H5C3.9%2021%203%2020.1%203%2019V5C3%203.9%203.9%203%205%203H19C20.1%203%2021%203.9%2021%205M19%205H5V19H19V5M9%2015H7V17H9V15Z%22%2F%3E%3C%2Fsvg%3E"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),C=t.n(a),i=t(659),s=t.n(i),c=t(56),A=t.n(c),d=t(540),l=t.n(d),p=t(113),u=t.n(p),h=t(208),g={};g.styleTagTransform=u(),g.setAttributes=A(),g.insert=s().bind(null,"head"),g.domAPI=C(),g.insertStyleElement=l(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals;var E=t(336),m={};m.styleTagTransform=u(),m.setAttributes=A(),m.insert=s().bind(null,"head"),m.domAPI=C(),m.insertStyleElement=l(),r()(E.A,m),E.A&&E.A.locals&&E.A.locals;var v=t(6),b={};b.styleTagTransform=u(),b.setAttributes=A(),b.insert=s().bind(null,"head"),b.domAPI=C(),b.insertStyleElement=l(),r()(v.A,b),v.A&&v.A.locals&&v.A.locals;var w=t(575),x={};x.styleTagTransform=u(),x.setAttributes=A(),x.insert=s().bind(null,"head"),x.domAPI=C(),x.insertStyleElement=l(),r()(w.A,x),w.A&&w.A.locals&&w.A.locals;var B=t(536),f={};f.styleTagTransform=u(),f.setAttributes=A(),f.insert=s().bind(null,"head"),f.domAPI=C(),f.insertStyleElement=l(),r()(B.A,f),B.A&&B.A.locals&&B.A.locals,document.addEventListener("DOMContentLoaded",(()=>{!function(){const n=document.createElement("header"),e=document.createElement("h1");e.textContent="ToDo List App",n.appendChild(e),document.body.appendChild(n)}(),function(){const n=document.createElement("div");n.classList.add("container"),document.body.appendChild(n);const e=function(){const n=document.createElement("aside"),e=document.createElement("div");e.classList.add("aside-account"),n.appendChild(e);const t=document.createElement("svg");t.classList.add("aside-account-icon"),e.appendChild(t);const o=document.createElement("h2");o.textContent="Seamor",e.appendChild(o);const r=document.createElement("div");r.classList.add("aside-option"),n.appendChild(r);const a=document.createElement("ul");a.classList.add("aside-option-ul"),r.appendChild(a);const C=document.createElement("li");C.classList.add("todays-task"),r.appendChild(C);const i=document.createElement("button");i.classList.add("btntodays-task"),i.classList.add("btnActive"),C.appendChild(i);const s=document.createElement("svg");s.classList.add("todays-task-icon"),i.appendChild(s);const c=document.createElement("p");c.textContent="Today's tasks",i.appendChild(c);const A=document.createElement("li");A.classList.add("week-tasks"),r.appendChild(A);const d=document.createElement("button");d.classList.add("btnweek-tasks"),A.appendChild(d);const l=document.createElement("svg");l.classList.add("week-tasks-icon"),d.appendChild(l);const p=document.createElement("p");p.textContent="Week's Tasks",d.appendChild(p);const u=document.createElement("li");u.classList.add("all-tasks"),r.appendChild(u);const h=document.createElement("button");h.classList.add("btnall-tasks"),u.appendChild(h);const g=document.createElement("svg");g.classList.add("all-tasks-icon"),h.appendChild(g);const E=document.createElement("p");return E.textContent="All My Tasks",h.appendChild(E),n}(),t=function(){const n=document.createElement("div");return n.classList.add("content"),n}();n.appendChild(e),n.appendChild(t)}()}))})();
//# sourceMappingURL=main.bec4d46dacab97928cc1.js.map