parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dX9k":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,n=arguments[3];function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}parcelRequire=function(n,t,o,a){var i,c="function"==typeof parcelRequire&&parcelRequire,s="function"==typeof require&&require;function l(e,r){if(!t[e]){if(!n[e]){var o="function"==typeof parcelRequire&&parcelRequire;if(!r&&o)return o(e,!0);if(c)return c(e,!0);if(s&&"string"==typeof e)return s(e);var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}u.resolve=function(r){return n[e][1][r]||r},u.cache={};var i=t[e]=new l.Module(e);n[e][0].call(i.exports,u,i,i.exports,this)}return t[e].exports;function u(e){return l(u.resolve(e))}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=n,l.cache=t,l.parent=c,l.register=function(e,r){n[e]=[function(e,n){n.exports=r},{}]};for(var u=0;u<o.length;u++)try{l(o[u])}catch(p){i||(i=p)}if(o.length){var d=l(o[o.length-1]);"object"===("undefined"==typeof exports?"undefined":r(exports))&&"undefined"!=typeof module?module.exports=d:"function"==typeof e&&e.amd&&e(function(){return d})}if(parcelRequire=l,i)throw i;return l}({"main.js":[function(e,n,r){var t=document.querySelector("#html"),o=document.querySelector("#style"),a="\n/* 你好，我叫史德凯\n * 接下来我演示一下我的前端功底\n * 首先我要准备一个div\n **/\n\n#div1{\n    border: 1px solid red;\n    width: 200px;\n    height: 200px;\n}\n\n/* 接下来看我把div变成一个八卦图\n * 注意看好了\n * 首先，把div变成一个圆\n**/\n\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n}\n\n/* 八卦是阴阳形成的\n * 一黑一白\n**/\n\n#div1{\n    background: linear-gradient(90deg,\n    rgba(255,255,255,1) 0%,\n    rgba(255,255,255,1) 50%,\n    rgba(0,0,0,1) 50%,\n    rgba(0,0,0,1) 100%);\n}\n\n#div1::before {\n    width: 100px;\n    height: 100px;\n    right: 50%;\n    transform: translateX(50%);\n    border-radius: 50%;\n    background-color: white;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%,\n    rgba(0,0,0,1) 25%,\n    rgba(255,255,255,1) 25%);\n}\n\n#div1::after {\n    width: 100px;\n    height: 100px;\n    right: 50%;\n    bottom: 0;\n    transform: translateX(50%);\n    border-radius: 50%;\n    background-color: black;\n    background: radial-gradient(circle,\n    rgba(255,255,255,1) 0%,\n    rgba(255,255,255,1) 25%,\n    rgba(0,0,0,1) 25%,\n    rgba(0,0,0,1) 100%);\n}\n\n",i="",c=0;!function e(){setTimeout(function(){i+="\n"===a[c]?"<br>":" "===a[c]?"&nbsp;":a[c],t.innerHTML=i,o.innerHTML=a.substring(0,c),window.scrollTo(0,9999),t.scrollTo(0,9999),c<a.length-1&&(c+=1,e())},50)}()},{}],"C:/Users/sdk/AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(e,n,r){var t,o,a=arguments[3],i="__parcel__error__overlay__",c=n.bundle.Module;n.bundle.Module=function(e){c.call(this,e),this.hot={data:n.bundle.hotData,_acceptCallbacks:[],_disposeCallbacks:[],accept:function(e){this._acceptCallbacks.push(e||function(){})},dispose:function(e){this._disposeCallbacks.push(e)}},n.bundle.hotData=null};var s=n.bundle.parent;if(!(s&&s.isParcelRequire||"undefined"==typeof WebSocket)){var l=location.hostname,u="https:"===location.protocol?"wss":"ws",d=new WebSocket(u+"://"+l+":64560/");d.onmessage=function(e){t={},o=[];var n=JSON.parse(e.data);if("update"===n.type){var r=!1;n.assets.forEach(function(e){e.isNew||function e(n,r){var i=n.modules;if(!i)return;if(!i[r]&&n.parent)return e(n.parent,r);if(t[r])return;t[r]=!0;var c=n.cache[r];o.push([n,r]);if(c&&c.hot&&c.hot._acceptCallbacks.length)return!0;return function e(n,r){var t=n.modules;if(!t)return[];var o=[];var a,i,c;for(a in t)for(i in t[a][1])((c=t[a][1][i])===r||Array.isArray(c)&&c[c.length-1]===r)&&o.push(a);n.parent&&(o=o.concat(e(n.parent,r)));return o}(a.parcelRequire,r).some(function(n){return e(a.parcelRequire,n)})}(a.parcelRequire,e.id)&&(r=!0)}),(r=r||n.assets.every(function(e){return"css"===e.type&&e.generated.js}))?(console.clear(),n.assets.forEach(function(e){!function e(n,r){var t=n.modules;if(!t)return;if(t[r.id]||!n.parent){var o=new Function("require","module","exports",r.generated.js);r.isNew=!t[r.id],t[r.id]=[o,r.deps]}else n.parent&&e(n.parent,r)}(a.parcelRequire,e)}),o.forEach(function(e){!function(e,n){var r=e.cache[n];e.hotData={},r&&(r.hot.data=e.hotData);r&&r.hot&&r.hot._disposeCallbacks.length&&r.hot._disposeCallbacks.forEach(function(n){n(e.hotData)});if(delete e.cache[n],e(n),(r=e.cache[n])&&r.hot&&r.hot._acceptCallbacks.length)r.hot._acceptCallbacks.forEach(function(e){e()})}(e[0],e[1])})):location.reload&&location.reload()}if("reload"===n.type&&(d.close(),d.onclose=function(){location.reload()}),"error-resolved"===n.type&&(console.log("[parcel] ✨ Error resolved"),p()),"error"===n.type){console.error("[parcel] 🚨  "+n.error.message+"\n"+n.error.stack),p();var c=function(e){var n=document.createElement("div");n.id=i;var r=document.createElement("div"),t=document.createElement("pre");return r.innerText=e.error.message,t.innerText=e.error.stack,n.innerHTML='<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;"><span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span><span style="top: 2px; margin-left: 5px; position: relative;">🚨</span><div style="font-size: 18px; font-weight: bold; margin-top: 20px;">'+r.innerHTML+"</div><pre>"+t.innerHTML+"</pre></div>",n}(n);document.body.appendChild(c)}}}function p(){var e=document.getElementById(i);e&&e.remove()}},{}]},{},["C:/Users/sdk/AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"]);
},{}]},{},["dX9k"], null)
//# sourceMappingURL=main.1f19ae8e.60404724.js.map