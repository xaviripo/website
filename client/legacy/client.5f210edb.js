function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,a=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(e){var r=function(e){var r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f={};function l(){}function p(){}function h(){}var v={};v[a]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(S([])));m&&m!==r&&n.call(m,a)&&(v=m);var y=h.prototype=l.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function b(e,r){var o;this._invoke=function(a,i){function c(){return new r((function(o,c){!function o(a,i,c,u){var f=s(e[a],e,i);if("throw"!==f.type){var l=f.arg,p=l.value;return p&&"object"===t(p)&&n.call(p,"__await")?r.resolve(p.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):r.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(f.arg)}(a,i,o,c)}))}return o=o?o.then(c,c):c()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=y.constructor=h,h.constructor=p,h[c]=p.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),y[c]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}));function i(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?l(e):r}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(){}function y(t,e){for(var r in e)t[r]=e[r];return t}function g(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(g)}function $(t){return"function"==typeof t}function x(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function E(t,e,r,n){return t[1]&&n?y(r.ctx.slice(),t[1](n(e))):r.ctx}function S(t,e){t.appendChild(e)}function _(t,e,r){t.insertBefore(e,r||null)}function L(t){t.parentNode.removeChild(t)}function R(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function j(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function P(){return k(" ")}function A(){return k("")}function O(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function N(t){return Array.from(t.childNodes)}function q(t,e,r,n){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0;i<a.attributes.length;){var c=a.attributes[i];r[c.name]?i++:a.removeAttribute(c.name)}return t.splice(o,1)[0]}}return n?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):j(e)}function C(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return k(e)}function I(t){return C(t," ")}function U(t,e){e=""+e,t.data!==e&&(t.data=e)}function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function T(t){o=t}function G(t,e){(function(){if(!o)throw new Error("Function called outside component initialization");return o})().$$.context.set(t,e)}var F=[],B=[],H=[],J=[],M=Promise.resolve(),V=!1;function K(t){H.push(t)}var X=!1,Y=new Set;function z(){if(!X){X=!0;do{for(var t=0;t<F.length;t+=1){var e=F[t];T(e),W(e.$$)}for(F.length=0;B.length;)B.pop()();for(var r=0;r<H.length;r+=1){var n=H[r];Y.has(n)||(Y.add(n),n())}H.length=0}while(F.length);for(;J.length;)J.pop()();V=!1,X=!1,Y.clear()}}function W(t){if(null!==t.fragment){t.update(),w(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}var Q,Z=new Set;function tt(){Q={r:0,c:[],p:Q}}function et(){Q.r||w(Q.c),Q=Q.p}function rt(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function nt(t,e,r,n){if(t&&t.o){if(Z.has(t))return;Z.add(t),Q.c.push((function(){Z.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}function ot(t,e){for(var r={},n={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(n[u]=1);for(var s in c)o[s]||(r[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in n)l in r||(r[l]=void 0);return r}function at(e){return"object"===t(e)&&null!==e?e:{}}function it(t){t&&t.c()}function ct(t,e){t&&t.l(e)}function ut(t,e,r){var n=t.$$,o=n.fragment,a=n.on_mount,i=n.on_destroy,c=n.after_update;o&&o.m(e,r),K((function(){var e=a.map(g).filter($);i?i.push.apply(i,h(e)):w(e),t.$$.on_mount=[]})),c.forEach(K)}function st(t,e){var r=t.$$;null!==r.fragment&&(w(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function ft(t,e){-1===t.$$.dirty[0]&&(F.push(t),V||(V=!0,M.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(t,e,r,n,a,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=o;T(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:a,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c},l=!1;if(f.ctx=r?r(t,s,(function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return f.ctx&&a(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),l&&ft(t,e)),r})):[],f.update(),l=!0,w(f.before_update),f.fragment=!!n&&n(f.ctx),e.target){if(e.hydrate){var p=N(e.target);f.fragment&&f.fragment.l(p),p.forEach(L)}else f.fragment&&f.fragment.c();e.intro&&rt(t.$$.fragment),ut(t,e.target,e.anchor),z()}T(u)}var pt=function(){function t(){v(this,t)}var e,r,n;return e=t,(r=[{key:"$destroy",value:function(){st(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(){}}])&&d(e.prototype,r),n&&d(e,n),t}(),ht=[];function vt(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=[];function o(r){if(x(t,r)&&(t=r,e)){for(var o=!ht.length,a=0;a<n.length;a+=1){var i=n[a];i[1](),ht.push(i,t)}if(o){for(var c=0;c<ht.length;c+=2)ht[c][0](ht[c+1]);ht.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return n.push(c),1===n.length&&(e=r(o)||m),a(t),function(){var t=n.indexOf(c);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var dt={},mt=function(){return{}};function yt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function gt(t){var e,r,o,a,i,c,u,s,f,l,p,h,v,d,y,g;return{c:function(){e=j("nav"),r=j("ul"),o=j("li"),a=j("a"),i=k("Xavier Ripoll"),u=P(),s=j("li"),f=j("a"),l=k("About"),h=P(),v=j("li"),d=j("a"),y=k("Blog"),this.h()},l:function(t){var n=N(e=q(t,"NAV",{class:!0})),c=N(r=q(n,"UL",{class:!0})),p=N(o=q(c,"LI",{class:!0})),m=N(a=q(p,"A",{"aria-current":!0,href:!0,class:!0}));i=C(m,"Xavier Ripoll"),m.forEach(L),p.forEach(L),u=I(c);var g=N(s=q(c,"LI",{class:!0})),b=N(f=q(g,"A",{"aria-current":!0,href:!0,class:!0}));l=C(b,"About"),b.forEach(L),g.forEach(L),h=I(c);var w=N(v=q(c,"LI",{class:!0})),$=N(d=q(w,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));y=C($,"Blog"),$.forEach(L),w.forEach(L),c.forEach(L),n.forEach(L),this.h()},h:function(){O(a,"aria-current",c=void 0===t[0]?"page":void 0),O(a,"href","."),O(a,"class","svelte-1qidmuy"),O(o,"class","svelte-1qidmuy"),O(f,"aria-current",p="about"===t[0]?"page":void 0),O(f,"href","about"),O(f,"class","svelte-1qidmuy"),O(s,"class","svelte-1qidmuy"),O(d,"rel","prefetch"),O(d,"aria-current",g="blog"===t[0]?"page":void 0),O(d,"href","blog"),O(d,"class","svelte-1qidmuy"),O(v,"class","svelte-1qidmuy"),O(r,"class","svelte-1qidmuy"),O(e,"class","svelte-1qidmuy")},m:function(t,n){_(t,e,n),S(e,r),S(r,o),S(o,a),S(a,i),S(r,u),S(r,s),S(s,f),S(f,l),S(r,h),S(r,v),S(v,d),S(d,y)},p:function(t,e){var r=n(e,1)[0];1&r&&c!==(c=void 0===t[0]?"page":void 0)&&O(a,"aria-current",c),1&r&&p!==(p="about"===t[0]?"page":void 0)&&O(f,"aria-current",p),1&r&&g!==(g="blog"===t[0]?"page":void 0)&&O(d,"aria-current",g)},i:m,o:m,d:function(t){t&&L(e)}}}function bt(t,e,r){var n=e.segment;return t.$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var wt=function(t){f(r,pt);var e=yt(r);function r(t){var n;return v(this,r),lt(l(n=e.call(this)),t,bt,gt,x,{segment:0}),n}return r}();function $t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function xt(e){var r,o,a,i=new wt({props:{segment:e[0]}}),c=e[2].default,u=function(t,e,r,n){if(t){var o=E(t,e,r,n);return t[0](o)}}(c,e,e[1],null);return{c:function(){it(i.$$.fragment),r=P(),o=j("main"),u&&u.c(),this.h()},l:function(t){ct(i.$$.fragment,t),r=I(t);var e=N(o=q(t,"MAIN",{class:!0}));u&&u.l(e),e.forEach(L),this.h()},h:function(){O(o,"class","svelte-1023pzn")},m:function(t,e){ut(i,t,e),_(t,r,e),_(t,o,e),u&&u.m(o,null),a=!0},p:function(e,r){var o=n(r,1)[0],a={};1&o&&(a.segment=e[0]),i.$set(a),u&&u.p&&2&o&&u.p(E(c,e,e[1],null),function(e,r,n,o){if(e[2]&&o){var a=e[2](o(n));if(void 0===r.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(r.dirty.length,a.length),u=0;u<c;u+=1)i[u]=r.dirty[u]|a[u];return i}return r.dirty|a}return r.dirty}(c,e[1],o,null))},i:function(t){a||(rt(i.$$.fragment,t),rt(u,t),a=!0)},o:function(t){nt(i.$$.fragment,t),nt(u,t),a=!1},d:function(t){st(i,t),t&&L(r),t&&L(o),u&&u.d(t)}}}function Et(t,e,r){var n=e.segment,o=e.$$slots,a=void 0===o?{}:o,i=e.$$scope;return t.$set=function(t){"segment"in t&&r(0,n=t.segment),"$$scope"in t&&r(1,i=t.$$scope)},[n,i,a]}var St=function(t){f(r,pt);var e=$t(r);function r(t){var n;return v(this,r),lt(l(n=e.call(this)),t,Et,xt,x,{segment:0}),n}return r}();function _t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Lt(t){var e,r,n=t[1].stack+"";return{c:function(){e=j("pre"),r=k(n)},l:function(t){var o=N(e=q(t,"PRE",{}));r=C(o,n),o.forEach(L)},m:function(t,n){_(t,e,n),S(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&U(r,n)},d:function(t){t&&L(e)}}}function Rt(t){var e,r,o,a,i,c,u,s,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Lt(t);return{c:function(){r=P(),o=j("h1"),a=k(t[0]),i=P(),c=j("p"),u=k(l),s=P(),p&&p.c(),f=A(),this.h()},l:function(e){D('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(L),r=I(e);var n=N(o=q(e,"H1",{class:!0}));a=C(n,t[0]),n.forEach(L),i=I(e);var h=N(c=q(e,"P",{class:!0}));u=C(h,l),h.forEach(L),s=I(e),p&&p.l(e),f=A(),this.h()},h:function(){O(o,"class","svelte-8od9u6"),O(c,"class","svelte-8od9u6")},m:function(t,e){_(t,r,e),_(t,o,e),S(o,a),_(t,i,e),_(t,c,e),S(c,u),_(t,s,e),p&&p.m(t,e),_(t,f,e)},p:function(t,r){var o=n(r,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&U(a,t[0]),2&o&&l!==(l=t[1].message+"")&&U(u,l),t[2]&&t[1].stack?p?p.p(t,o):((p=Lt(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&L(r),t&&L(o),t&&L(i),t&&L(c),t&&L(s),p&&p.d(t),t&&L(f)}}}function jt(t,e,r){var n=e.status,o=e.error;return t.$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,!1]}var kt=function(t){f(r,pt);var e=_t(r);function r(t){var n;return v(this,r),lt(l(n=e.call(this)),t,jt,Rt,x,{status:0,error:1}),n}return r}();function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function At(t){var e,r,n=[t[4].props],o=t[4].component;function a(t){for(var e={},r=0;r<n.length;r+=1)e=y(e,n[r]);return{props:e}}if(o)var i=new o(a());return{c:function(){i&&it(i.$$.fragment),e=A()},l:function(t){i&&ct(i.$$.fragment,t),e=A()},m:function(t,n){i&&ut(i,t,n),_(t,e,n),r=!0},p:function(t,r){var c=16&r?ot(n,[at(t[4].props)]):{};if(o!==(o=t[4].component)){if(i){tt();var u=i;nt(u.$$.fragment,1,0,(function(){st(u,1)})),et()}o?(it((i=new o(a())).$$.fragment),rt(i.$$.fragment,1),ut(i,e.parentNode,e)):i=null}else o&&i.$set(c)},i:function(t){r||(i&&rt(i.$$.fragment,t),r=!0)},o:function(t){i&&nt(i.$$.fragment,t),r=!1},d:function(t){t&&L(e),i&&st(i,t)}}}function Ot(t){var e,r=new kt({props:{error:t[0],status:t[1]}});return{c:function(){it(r.$$.fragment)},l:function(t){ct(r.$$.fragment,t)},m:function(t,n){ut(r,t,n),e=!0},p:function(t,e){var n={};1&e&&(n.error=t[0]),2&e&&(n.status=t[1]),r.$set(n)},i:function(t){e||(rt(r.$$.fragment,t),e=!0)},o:function(t){nt(r.$$.fragment,t),e=!1},d:function(t){st(r,t)}}}function Nt(t){var e,r,n,o,a=[Ot,At],i=[];function c(t,e){return t[0]?0:1}return e=c(t),r=i[e]=a[e](t),{c:function(){r.c(),n=A()},l:function(t){r.l(t),n=A()},m:function(t,r){i[e].m(t,r),_(t,n,r),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(tt(),nt(i[u],1,1,(function(){i[u]=null})),et(),(r=i[e])||(r=i[e]=a[e](t)).c(),rt(r,1),r.m(n.parentNode,n))},i:function(t){o||(rt(r),o=!0)},o:function(t){nt(r),o=!1},d:function(t){i[e].d(t),t&&L(n)}}}function qt(t){for(var e,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Nt]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)o=y(o,r[a]);var i=new St({props:o});return{c:function(){it(i.$$.fragment)},l:function(t){ct(i.$$.fragment,t)},m:function(t,r){ut(i,t,r),e=!0},p:function(t,e){var o=n(e,1)[0],a=12&o?ot(r,[4&o&&{segment:t[2][0]},8&o&&at(t[3].props)]):{};83&o&&(a.$$scope={dirty:o,ctx:t}),i.$set(a)},i:function(t){e||(rt(i.$$.fragment,t),e=!0)},o:function(t){nt(i.$$.fragment,t),e=!1},d:function(t){st(i,t)}}}function Ct(t,e,r){var n=e.stores,o=e.error,a=e.status,i=e.segments,c=e.level0,u=e.level1,s=void 0===u?null:u;return G(dt,n),t.$set=function(t){"stores"in t&&r(5,n=t.stores),"error"in t&&r(0,o=t.error),"status"in t&&r(1,a=t.status),"segments"in t&&r(2,i=t.segments),"level0"in t&&r(3,c=t.level0),"level1"in t&&r(4,s=t.level1)},[o,a,i,c,s,n]}var It,Ut=function(t){f(r,pt);var e=Pt(r);function r(t){var n;return v(this,r),lt(l(n=e.call(this)),t,Ct,qt,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4}),n}return r}(),Dt=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],Tt=[{js:function(){return import("./index.97f32878.js")},css:[]},{js:function(){return import("./about.9d29e17f.js")},css:[]},{js:function(){return import("./index.542bc1ca.js")},css:[]},{js:function(){return import("./[slug].4b058a00.js")},css:[]}],Gt=(It=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:function(t){return{slug:It(t[1])}}}]}]);function Ft(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=ce(new URL(t,document.baseURI));return r?(oe[e.replaceState?"replaceState":"pushState"]({id:te},"",t),se(r,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Bt,Ht,Jt,Mt,Vt,Kt="undefined"!=typeof __SAPPER__&&__SAPPER__,Xt=!1,Yt=[],zt="{}",Wt={page:vt({}),preloading:vt(null),session:vt(Kt&&Kt.session)};Wt.session.subscribe(function(){var t=c(a.mark((function t(e){var r,n,o,i,c,u;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Mt=e,Xt){t.next=3;break}return t.abrupt("return");case 3:return Vt=!0,r=ce(new URL(location.href)),n=Ht={},t.next=8,ve(r);case 8:if(o=t.sent,i=o.redirect,c=o.props,u=o.branch,n===Ht){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,le(i,u,c,r.page);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var Qt,Zt=null;var te,ee=1;var re,ne,oe="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},ae={};function ie(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=n(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===t(r[a])?r[a].push(c):r[a]=c})),r}function ce(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Kt.baseUrl))return null;var e=t.pathname.slice(Kt.baseUrl.length);if(""===e&&(e="/"),!Dt.some((function(t){return t.test(e)})))for(var r=0;r<Gt.length;r+=1){var n=Gt[r],o=n.pattern.exec(e);if(o){var a=ie(t.search),i=n.parts[n.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:n,match:o,page:u}}}}function ue(){return{x:pageXOffset,y:pageYOffset}}function se(t,e,r,n){return fe.apply(this,arguments)}function fe(){return(fe=c(a.mark((function t(e,r,n,o){var i,c,u,s,f,l,p,h,v;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r?te=r:(i=ue(),ae[te]=i,r=te=++ee,ae[te]=n?i:{x:0,y:0}),te=r,Bt&&Wt.preloading.set(!0),c=Zt&&Zt.href===e.href?Zt.promise:ve(e),Zt=null,u=Ht={},t.next=8,c;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,u===Ht){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,le(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=ae[r],o&&(v=document.getElementById(o.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top}),ae[te]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function le(t,e,r,n){return pe.apply(this,arguments)}function pe(){return(pe=c(a.mark((function t(e,r,n,o){var i,c;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Ft(e.location,{replaceState:!0}));case 2:if(Wt.page.set(o),Wt.preloading.set(!1),!Bt){t.next=8;break}Bt.$set(n),t.next=17;break;case 8:return n.stores={page:{subscribe:Wt.page.subscribe},preloading:{subscribe:Wt.preloading.subscribe},session:Wt.session},t.next=11,Jt;case 11:if(t.t0=t.sent,n.level0={props:t.t0},i=document.querySelector("#sapper-head-start"),c=document.querySelector("#sapper-head-end"),i&&c){for(;i.nextSibling!==c;)ge(i.nextSibling);ge(i),ge(c)}Bt=new Ut({target:Qt,props:n,hydrate:!0});case 17:Yt=r,zt=JSON.stringify(o.query),Xt=!0,Vt=!1;case 21:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function he(t,e,r,n){if(n!==zt)return!0;var o=Yt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function ve(t){return de.apply(this,arguments)}function de(){return(de=c(a.mark((function t(e){var r,n,o,i,u,s,f,l,p,h,v;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,o=n.path.split("/").filter(Boolean),i=null,u={error:null,status:200,segments:[o[0]]},s={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},Jt||(Jt=Kt.preloaded[0]||mt.call(s,{host:n.host,path:n.path,query:n.query,params:{}},Mt)),l=1,t.prev=7,p=JSON.stringify(n.query),h=r.pattern.exec(n.path),v=!1,t.next=13,Promise.all(r.parts.map(function(){var t=c(a.mark((function t(r,i){var c,f,d,m,y,g;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=o[i],he(i,c,h,p)&&(v=!0),u.segments[l]=o[i+1],r){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(f=l++,Vt||v||!Yt[i]||Yt[i].part!==r.i){t.next=8;break}return t.abrupt("return",Yt[i]);case 8:return v=!1,t.next=11,ye(Tt[r.i]);case 11:if(d=t.sent,m=d.default,y=d.preload,!Xt&&Kt.preloaded[i+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(s,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(e.match):{}},Mt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=Kt.preloaded[i+1];case 26:return t.abrupt("return",u["level".concat(f)]={component:m,props:g,segment:c,match:h,part:r.i});case 27:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),u.error=t.t0,u.status=500,f=[];case 21:return t.abrupt("return",{redirect:i,props:u,branch:f});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function me(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise((function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)}))}function ye(t){var e="string"==typeof t.css?[]:t.css.map(me);return e.unshift(t.js()),Promise.all(e).then((function(t){return t[0]}))}function ge(t){t.parentNode.removeChild(t)}function be(t){var e=ce(new URL(t,document.baseURI));if(e)return Zt&&t===Zt.href||function(t,e){Zt={href:t,promise:e}}(t,ve(e)),Zt.promise}function we(t){clearTimeout(re),re=setTimeout((function(){$e(t)}),20)}function $e(t){var e=Ee(t.target);e&&"prefetch"===e.rel&&be(e.href)}function xe(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=Ee(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&!(n?r.target.baseVal:r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=ce(a);if(i)se(i,null,r.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),oe.pushState({id:te},"",a.href)}}}else location.hash||e.preventDefault()}}}function Ee(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Se(t){if(ae[te]=ue(),t.state){var e=ce(new URL(location.href));e?se(e,t.state.id):location.href=location.href}else(function(t){te=t})(ee=ee+1),oe.replaceState({id:te},"",location.href)}ne={target:document.querySelector("#sapper")},"scrollRestoration"in oe&&(oe.scrollRestoration="manual"),function(t){Qt=t}(ne.target),addEventListener("click",xe),addEventListener("popstate",Se),addEventListener("touchstart",$e),addEventListener("mousemove",we),Promise.resolve().then((function(){var t=location,e=t.hash,r=t.href;oe.replaceState({id:ee},"",r);var n,o,a,i,c,u,s,f,l=new URL(location.href);if(Kt.error)return n=location,o=n.host,a=n.pathname,i=n.search,c=Kt.session,u=Kt.preloaded,s=Kt.status,f=Kt.error,Jt||(Jt=u&&u[0]),void le(null,[],{error:f,status:s,session:c,level0:{props:Jt},level1:{props:{status:s,error:f},component:kt},segments:u},{host:o,path:a,query:ie(i),params:{}});var p=ce(l);return p?se(p,ee,!0,e):void 0}));export{pt as S,f as _,u as a,p as b,v as c,l as d,P as e,j as f,L as g,I as h,lt as i,q as j,N as k,C as l,_ as m,S as n,m as o,O as p,D as q,U as r,x as s,k as t,n as u,R as v,c as w,a as x};
