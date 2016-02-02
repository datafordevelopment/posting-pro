/**
 * @license
 * lodash 4.1.0 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash core -o ./dist/lodash.core.js`
 */
;(function(){function n(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function t(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===an?i===i:r(i,c)))var c=i,f=o}return f}function r(n,t,r){var e;return r(n,function(n,r,u){return t(n,r,u)?(e=n,false):void 0}),e}function e(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function u(n,t){return w(t,function(t){return n[t]})}function o(n){return n&&n.Object===Object?n:null}function i(n){return hn[n];
}function c(n){var t=false;if(null!=n&&typeof n.toString!="function")try{t=!!(n+"")}catch(r){}return t}function f(n,t){return n=typeof n=="number"||sn.test(n)?+n:-1,n>-1&&0==n%1&&(null==t?9007199254740991:t)>n}function a(n){if(Y(n)&&!Mn(n)){if(n instanceof l)return n;if(xn.call(n,"__wrapped__")){var t=new l(n.__wrapped__,n.__chain__);return t.__actions__=k(n.__actions__),t}}return new l(n)}function l(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t}function p(n,t,r,e){return n===an||V(n,On[r])&&!xn.call(e,r)?t:n;
}function s(n,t,r){if(typeof n!="function")throw new TypeError("Expected a function");return setTimeout(function(){n.apply(an,r)},t)}function h(n,t){var r=true;return In(n,function(n,e,u){return r=!!t(n,e,u)}),r}function v(n,t){var r=[];return In(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function y(t,r,e,u){u||(u=[]);for(var o=-1,i=t.length;++o<i;){var c=t[o];Y(c)&&L(c)&&(e||Mn(c)||K(c))?r?y(c,r,e,u):n(u,c):e||(u[u.length]=c)}return u}function _(n,t){return n&&$n(n,t,en)}function g(n,t){return v(t,function(t){
return Q(n[t])})}function b(n,t,r,e,u){return n===t?true:null==n||null==t||!X(n)&&!Y(t)?n!==n&&t!==t:j(n,t,b,r,e,u)}function j(n,t,r,e,u,o){var i=Mn(n),f=Mn(t),a="[object Array]",l="[object Array]";i||(a=An.call(n),"[object Arguments]"==a&&(a="[object Object]")),f||(l=An.call(t),"[object Arguments]"==l&&(l="[object Object]"));var p="[object Object]"==a&&!c(n),f="[object Object]"==l&&!c(t);return!(l=a==l)||i||p?2&u||(a=p&&xn.call(n,"__wrapped__"),f=f&&xn.call(t,"__wrapped__"),!a&&!f)?l?(o||(o=[]),(a=G(o,function(t){
return t[0]===n}))&&a[1]?a[1]==t:(o.push([n,t]),t=(i?D:$)(n,t,r,e,u,o),o.pop(),t)):false:r(a?n.value():n,f?t.value():t,e,u,o):I(n,t,a)}function m(n){var t=typeof n;return"function"==t?n:null==n?cn:("object"==t?O:E)(n)}function d(n){n=null==n?n:Object(n);var t,r=[];for(t in n)r.push(t);return r}function w(n,t){var r=-1,e=L(n)?Array(n.length):[];return In(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function O(n){var t=en(n);return function(r){var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];
if(!(u in r&&b(n[u],r[u],an,3)))return false}return true}}function x(n,t){return n=Object(n),M(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function E(n){return function(t){return null==t?an:t[n]}}function A(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function k(n){return A(n,0,n.length)}function N(n,t){var r;return In(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function S(t,r){return M(r,function(t,r){return r.func.apply(r.thisArg,n([t],r.args));
},t)}function T(n,t,r,e){r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],c=e?e(r[i],n[i],i,r,n):n[i],f=r,a=f[i];(!V(a,c)||V(a,On[i])&&!xn.call(f,i)||c===an&&!(i in f))&&(f[i]=c)}return r}function F(n){return U(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:an,o=typeof o=="function"?(u--,o):an;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function B(n){return function(){var t=arguments,r=Dn(n.prototype),t=n.apply(r,t);return X(t)?t:r}}function R(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==dn&&this instanceof e?u:n;++c<f;)a[c]=r[c];
for(;i--;)a[c++]=arguments[++o];return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");var u=B(n);return e}function D(n,t,r,e,u,o){var i=-1,c=1&u,f=n.length,a=t.length;if(f!=a&&!(2&u&&a>f))return false;for(a=true;++i<f;){var l=n[i],p=t[i];if(void 0!==an){a=false;break}if(c){if(!N(t,function(n){return l===n||r(l,n,e,u,o)})){a=false;break}}else if(l!==p&&!r(l,p,e,u,o)){a=false;break}}return a}function I(n,t,r){switch(r){case"[object Boolean]":case"[object Date]":return+n==+t;case"[object Error]":
return n.name==t.name&&n.message==t.message;case"[object Number]":return n!=+n?t!=+t:n==+t;case"[object RegExp]":case"[object String]":return n==t+""}return false}function $(n,t,r,e,u,o){var i=2&u,c=en(n),f=c.length,a=en(t).length;if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:xn.call(t,p)))return false}for(a=true;++l<f;){var p=c[l],s=n[p],h=t[p];if(void 0!==an||s!==h&&!r(s,h,e,u,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),
a}function q(n){var t=n?n.length:an;if(W(t)&&(Mn(n)||nn(n)||K(n))){n=String;for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);t=e}else t=null;return t}function z(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||On)}function C(n){return n?n[0]:an}function G(n,t){return r(n,m(t),In)}function J(n,t){return In(n,typeof t=="function"?t:cn)}function M(n,t,r){return e(n,m(t),r,3>arguments.length,In)}function P(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=Pn(n),
function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=an),r}}function U(n){var t;if(typeof n!="function")throw new TypeError("Expected a function");return t=Rn(t===an?n.length-1:Pn(t),0),function(){for(var r=arguments,e=-1,u=Rn(r.length-t,0),o=Array(u);++e<u;)o[e]=r[t+e];for(u=Array(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function V(n,t){return n===t||n!==n&&t!==t}function H(n,t){return n>t}function K(n){return Y(n)&&L(n)&&xn.call(n,"callee")&&(!Tn.call(n,"callee")||"[object Arguments]"==An.call(n));
}function L(n){return null!=n&&!(typeof n=="function"&&Q(n))&&W(qn(n))}function Q(n){return n=X(n)?An.call(n):"","[object Function]"==n||"[object GeneratorFunction]"==n}function W(n){return typeof n=="number"&&n>-1&&0==n%1&&9007199254740991>=n}function X(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function Y(n){return!!n&&typeof n=="object"}function Z(n){return typeof n=="number"||Y(n)&&"[object Number]"==An.call(n)}function nn(n){return typeof n=="string"||!Mn(n)&&Y(n)&&"[object String]"==An.call(n);
}function tn(n,t){return t>n}function rn(n){return typeof n=="string"?n:null==n?"":n+""}function en(n){var t=z(n);if(!t&&!L(n))return Bn(Object(n));var r,e=q(n),u=!!e,e=e||[],o=e.length;for(r in n)!xn.call(n,r)||u&&("length"==r||f(r,o))||t&&"constructor"==r||e.push(r);return e}function un(n){for(var t=-1,r=z(n),e=d(n),u=e.length,o=q(n),i=!!o,o=o||[],c=o.length;++t<u;){var a=e[t];i&&("length"==a||f(a,c))||"constructor"==a&&(r||!xn.call(n,a))||o.push(a)}return o}function on(n){return n?u(n,en(n)):[];
}function cn(n){return n}function fn(t,r,e){var u=en(r),o=g(r,u);null!=e||X(r)&&(o.length||!u.length)||(e=r,r=t,t=this,o=g(r,en(r)));var i=X(e)&&"chain"in e?e.chain:true,c=Q(t);return In(o,function(e){var u=r[e];t[e]=u,c&&(t.prototype[e]=function(){var r=this.__chain__;if(i||r){var e=t(this.__wrapped__);return(e.__actions__=k(this.__actions__)).push({func:u,args:arguments,thisArg:t}),e.__chain__=r,e}return u.apply(t,n([this.value()],arguments))})}),t}var an,ln=/[&<>"'`]/g,pn=RegExp(ln.source),sn=/^(?:0|[1-9]\d*)$/,hn={
"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},vn={"function":true,object:true},yn=vn[typeof exports]&&exports&&!exports.nodeType?exports:null,_n=vn[typeof module]&&module&&!module.nodeType?module:null,gn=o(vn[typeof self]&&self),bn=o(vn[typeof window]&&window),jn=_n&&_n.exports===yn?yn:null,mn=o(vn[typeof this]&&this),dn=o(yn&&_n&&typeof global=="object"&&global)||bn!==(mn&&mn.window)&&bn||gn||mn||Function("return this")(),wn=Array.prototype,On=Object.prototype,xn=On.hasOwnProperty,En=0,An=On.toString,kn=dn._,Nn=dn.f,Sn=Nn?Nn.g:an,Tn=On.propertyIsEnumerable,Fn=dn.isFinite,Bn=Object.keys,Rn=Math.max,Dn=function(){
function n(){}return function(t){if(X(t)){n.prototype=t;var r=new n;n.prototype=an}return r||{}}}(),In=function(n,t){return function(r,e){if(null==r)return r;if(!L(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}(_),$n=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}();Sn&&!Tn.call({valueOf:1},"valueOf")&&(d=function(n){n=Sn(n);for(var t,r=[];!(t=n.next()).done;)r.push(t.value);
return r});var qn=E("length"),zn=U(function(t,r){return Mn(t)||(t=null==t?[]:[Object(t)]),y(r),n(k(t),on)}),Cn=U(function(n,t,r){return R(n,t,r)}),Gn=U(function(n,t){return s(n,1,t)}),Jn=U(function(n,t,r){return s(n,Un(t)||0,r)}),Mn=Array.isArray,Pn=Number,Un=Number,Vn=F(function(n,t){T(t,en(t),n)}),Hn=F(function(n,t){T(t,un(t),n)}),Kn=F(function(n,t,r,e){T(t,un(t),n,e)}),Ln=U(function(n){return n.push(an,p),Kn.apply(an,n)}),Qn=U(function(n,t){return null==n?{}:x(n,y(t))}),Wn=m;l.prototype=Dn(a.prototype),
l.prototype.constructor=l,a.assignIn=Hn,a.before=P,a.bind=Cn,a.chain=function(n){return n=a(n),n.__chain__=true,n},a.compact=function(n){return v(n,Boolean)},a.concat=zn,a.create=function(n,t){var r=Dn(n);return t?Vn(r,t):r},a.defaults=Ln,a.defer=Gn,a.delay=Jn,a.filter=function(n,t){return v(n,m(t))},a.flatten=function(n){return n&&n.length?y(n):[]},a.flattenDeep=function(n){return n&&n.length?y(n,true):[]},a.iteratee=Wn,a.keys=en,a.map=function(n,t){return w(n,m(t))},a.matches=function(n){return O(Vn({},n));
},a.mixin=fn,a.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");return function(){return!n.apply(this,arguments)}},a.once=function(n){return P(2,n)},a.pick=Qn,a.slice=function(n,t,r){var e=n?n.length:0;return r=r===an?e:+r,e?A(n,null==t?0:+t,r):[]},a.sortBy=function(n,t){var r=0;return t=m(t),w(w(n,function(n,e,u){return{c:n,b:r++,a:t(n,e,u)}}).sort(function(n,t){var r;n:{r=n.a;var e=t.a;if(r!==e){var u=null===r,o=r===an,i=r===r,c=null===e,f=e===an,a=e===e;if(r>e&&!c||!i||u&&!f&&a||o&&a){
r=1;break n}if(e>r&&!u||!a||c&&!o&&i||f&&i){r=-1;break n}}r=0}return r||n.b-t.b}),E("c"))},a.tap=function(n,t){return t(n),n},a.thru=function(n,t){return t(n)},a.toArray=function(n){return L(n)?n.length?k(n):[]:on(n)},a.values=on,a.extend=Hn,fn(a,a),a.clone=function(n){return X(n)?Mn(n)?k(n):T(n,en(n)):n},a.escape=function(n){return(n=rn(n))&&pn.test(n)?n.replace(ln,i):n},a.every=function(n,t,r){return t=r?an:t,h(n,m(t))},a.find=G,a.forEach=J,a.has=function(n,t){return null!=n&&xn.call(n,t)},a.head=C,
a.identity=cn,a.indexOf=function(n,t,r){var e=n?n.length:0;r=typeof r=="number"?0>r?Rn(e+r,0):r:0,r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1},a.isArguments=K,a.isArray=Mn,a.isBoolean=function(n){return true===n||false===n||Y(n)&&"[object Boolean]"==An.call(n)},a.isDate=function(n){return Y(n)&&"[object Date]"==An.call(n)},a.isEmpty=function(n){if(L(n)&&(Mn(n)||nn(n)||Q(n.splice)||K(n)))return!n.length;for(var t in n)if(xn.call(n,t))return false;return true},a.isEqual=function(n,t){
return b(n,t)},a.isFinite=function(n){return typeof n=="number"&&Fn(n)},a.isFunction=Q,a.isNaN=function(n){return Z(n)&&n!=+n},a.isNull=function(n){return null===n},a.isNumber=Z,a.isObject=X,a.isRegExp=function(n){return X(n)&&"[object RegExp]"==An.call(n)},a.isString=nn,a.isUndefined=function(n){return n===an},a.last=function(n){var t=n?n.length:0;return t?n[t-1]:an},a.max=function(n){return n&&n.length?t(n,cn,H):an},a.min=function(n){return n&&n.length?t(n,cn,tn):an},a.noConflict=function(){return dn._===this&&(dn._=kn),
this},a.noop=function(){},a.reduce=M,a.result=function(n,t,r){return t=null==n?an:n[t],t===an&&(t=r),Q(t)?t.call(n):t},a.size=function(n){return null==n?0:(n=L(n)?n:en(n),n.length)},a.some=function(n,t,r){return t=r?an:t,N(n,m(t))},a.uniqueId=function(n){var t=++En;return rn(n)+t},a.each=J,a.first=C,fn(a,function(){var n={};return _(a,function(t,r){xn.call(a.prototype,r)||(n[r]=t)}),n}(),{chain:false}),a.VERSION="4.1.0",In("pop join replace reverse split push shift sort splice unshift".split(" "),function(n){
var t=(/^(?:replace|split)$/.test(n)?String.prototype:wn)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);a.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=function(){return S(this.__wrapped__,this.__actions__)},(bn||gn||{})._=a,typeof define=="function"&&typeof define.amd=="object"&&define.amd? define(function(){
return a}):yn&&_n?(jn&&((_n.exports=a)._=a),yn._=a):dn._=a}).call(this);
