import{_ as t,a as n,b as r,c as e,i as s,s as o,d as a,S as c,f as i,t as f,e as u,j as l,k as h,l as v,g as p,h as g,p as m,m as d,n as y,r as b,q as E,u as R,o as j,v as w}from"./client.88057df3.js";function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,o=n(t);if(e){var a=n(this).constructor;s=Reflect.construct(o,arguments,a)}else s=o.apply(this,arguments);return r(this,s)}}function L(t,n,r){var e=t.slice();return e[1]=n[r],e}function q(t){var n,r,e,s,o,a,c,E,R,j=t[1].title+"",w=t[1].date.substring(0,10)+"";return{c:function(){n=i("li"),r=i("a"),e=f(j),o=i("br"),a=u(),c=i("small"),E=f(w),R=u(),this.h()},l:function(t){n=l(t,"LI",{class:!0});var s=h(n);r=l(s,"A",{rel:!0,href:!0});var i=h(r);e=v(i,j),i.forEach(p),o=l(s,"BR",{}),a=g(s),c=l(s,"SMALL",{class:!0});var f=h(c);E=v(f,w),f.forEach(p),R=g(s),s.forEach(p),this.h()},h:function(){m(r,"rel","prefetch"),m(r,"href",s="blog/"+t[1].slug),m(c,"class","svelte-pz830i"),m(n,"class","svelte-pz830i")},m:function(t,s){d(t,n,s),y(n,r),y(r,e),y(n,o),y(n,a),y(n,c),y(c,E),y(n,R)},p:function(t,n){1&n&&j!==(j=t[1].title+"")&&b(e,j),1&n&&s!==(s="blog/"+t[1].slug)&&m(r,"href",s),1&n&&w!==(w=t[1].date.substring(0,10)+"")&&b(E,w)},d:function(t){t&&p(n)}}}function x(t){for(var n,r,e,s,o,a,c,m,b=t[0],B=[],x=0;x<b.length;x+=1)B[x]=q(L(t,b,x));return{c:function(){n=u(),r=i("h1"),e=f("Blog"),s=u(),o=i("p"),a=f("I really enjoy writing. These are some of my written thoughts."),c=u(),m=i("ul");for(var t=0;t<B.length;t+=1)B[t].c();this.h()},l:function(t){E('[data-svelte="svelte-4qk3pl"]',document.head).forEach(p),n=g(t),r=l(t,"H1",{});var i=h(r);e=v(i,"Blog"),i.forEach(p),s=g(t),o=l(t,"P",{});var f=h(o);a=v(f,"I really enjoy writing. These are some of my written thoughts."),f.forEach(p),c=g(t),m=l(t,"UL",{});for(var u=h(m),d=0;d<B.length;d+=1)B[d].l(u);u.forEach(p),this.h()},h:function(){document.title="Xavier Ripoll — Blog"},m:function(t,i){d(t,n,i),d(t,r,i),y(r,e),d(t,s,i),d(t,o,i),y(o,a),d(t,c,i),d(t,m,i);for(var f=0;f<B.length;f+=1)B[f].m(m,null)},p:function(t,n){var r=R(n,1)[0];if(1&r){var e;for(b=t[0],e=0;e<b.length;e+=1){var s=L(t,b,e);B[e]?B[e].p(s,r):(B[e]=q(s),B[e].c(),B[e].m(m,null))}for(;e<B.length;e+=1)B[e].d(1);B.length=b.length}},i:j,o:j,d:function(t){t&&p(n),t&&p(r),t&&p(s),t&&p(o),t&&p(c),t&&p(m),w(B,t)}}}function I(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function S(t,n,r){var e=n.posts;return t.$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var k=function(n){t(i,c);var r=B(i);function i(t){var n;return e(this,i),n=r.call(this),s(a(n),t,S,x,o,{posts:0}),n}return i}();export default k;export{I as preload};
