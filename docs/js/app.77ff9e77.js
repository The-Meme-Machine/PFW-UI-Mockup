(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({Game:"Game"}[e]||e)+"."+{Game:"1b202646"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={Game:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({Game:"Game"}[e]||e)+"."+{Game:"6c5ae7ef"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/PFW-UI-Mockup/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"2a0e":function(e,t,n){"use strict";var r=n("d36e"),o=n.n(r);o.a},4491:function(e,t,n){e.exports=n.p+"img/red_logo.5484c77f.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("034f"),n("2877")),i={},c=Object(u["a"])(i,o,a,!1,null,null,null),s=c.exports,l=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"background"},[r("video",{attrs:{src:n("c3a3"),autoplay:"",muted:"",loop:""},domProps:{muted:!0}}),r("div",{staticClass:"grad"},[r("div",{staticClass:"home"},[e._m(0),r("h1",[e._v("Project Field Warning")]),r("h2",[e._v("Open-source RTT")]),r("ul",[r("li",[r("button",{on:{click:e.games}},[e._v("Enter Game")])]),e._m(1),e._m(2),e._m(3)])])])])},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{attrs:{src:n("4491"),alt:"PFW Logo",id:"logo"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("button",[e._v("Profile")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("button",[e._v("Armory")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("button",[e._v("Settings")])])}],d={name:"Home",components:{},methods:{games:function(){this.$router.push({path:"/game"})}},mounted:function(){window.removeEventListener("keydown")}},m=d,v=(n("2a0e"),Object(u["a"])(m,f,p,!1,null,"e6a7ff1a",null)),h=v.exports;r["a"].use(l["a"]);var g=[{path:"/",name:"Home UI",component:h},{path:"/game",name:"Game UI",component:function(){return n.e("Game").then(n.bind(null,"7d36"))}}],b=new l["a"]({routes:g}),_=b;r["a"].config.productionTip=!1,new r["a"]({router:_,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){},c3a3:function(e,t,n){e.exports=n.p+"media/WRD-Montage-24.0de6fdbe.mp4"},d36e:function(e,t,n){}});
//# sourceMappingURL=app.77ff9e77.js.map