(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lr(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const j={},lt=[],de=()=>{},Ai=()=>!1,tn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ur=e=>e.startsWith("onUpdate:"),Q=Object.assign,fr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ti=Object.prototype.hasOwnProperty,P=(e,t)=>Ti.call(e,t),O=Array.isArray,ut=e=>nn(e)==="[object Map]",Us=e=>nn(e)==="[object Set]",x=e=>typeof e=="function",X=e=>typeof e=="string",mt=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",Ks=e=>(K(e)||x(e))&&x(e.then)&&x(e.catch),Ws=Object.prototype.toString,nn=e=>Ws.call(e),Oi=e=>nn(e).slice(8,-1),qs=e=>nn(e)==="[object Object]",dr=e=>X(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,St=lr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xi=/-(\w)/g,ht=rn(e=>e.replace(xi,(t,n)=>n?n.toUpperCase():"")),Mi=/\B([A-Z])/g,_t=rn(e=>e.replace(Mi,"-$1").toLowerCase()),Gs=rn(e=>e.charAt(0).toUpperCase()+e.slice(1)),En=rn(e=>e?`on${Gs(e)}`:""),Qe=(e,t)=>!Object.is(e,t),In=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Jt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Di=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Jr;const Js=()=>Jr||(Jr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hr(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=X(r)?$i(r):hr(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(X(e)||K(e))return e}const Pi=/;(?![^(]*\))/g,Ri=/:([^]+)/,Ni=/\/\*[^]*?\*\//g;function $i(e){const t={};return e.replace(Ni,"").split(Pi).forEach(n=>{if(n){const r=n.split(Ri);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function pr(e){let t="";if(X(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const r=pr(e[n]);r&&(t+=r+" ")}else if(K(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ki="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Li=lr(ki);function Ys(e){return!!e||e===""}const Bi=e=>X(e)?e:e==null?"":O(e)||K(e)&&(e.toString===Ws||!x(e.toString))?JSON.stringify(e,Xs,2):String(e),Xs=(e,t)=>t&&t.__v_isRef?Xs(e,t.value):ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],o)=>(n[Sn(r,o)+" =>"]=s,n),{})}:Us(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Sn(n))}:mt(t)?Sn(t):K(t)&&!O(t)&&!qs(t)?String(t):t,Sn=(e,t="")=>{var n;return mt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pe;class Fi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=pe,!t&&pe&&(this.index=(pe.scopes||(pe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=pe;try{return pe=this,t()}finally{pe=n}}}on(){pe=this}off(){pe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Hi(e,t=pe){t&&t.active&&t.effects.push(e)}function zi(){return pe}let Ye;class gr{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Hi(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,st();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(ji(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ot()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ke,n=Ye;try{return ke=!0,Ye=this,this._runnings++,Yr(this),this.fn()}finally{Xr(this),this._runnings--,Ye=n,ke=t}}stop(){var t;this.active&&(Yr(this),Xr(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function ji(e){return e.value}function Yr(e){e._trackId++,e._depsLength=0}function Xr(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Qs(e.deps[t],e);e.deps.length=e._depsLength}}function Qs(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let ke=!0,Un=0;const Zs=[];function st(){Zs.push(ke),ke=!1}function ot(){const e=Zs.pop();ke=e===void 0?!0:e}function mr(){Un++}function _r(){for(Un--;!Un&&Kn.length;)Kn.shift()()}function eo(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Qs(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Kn=[];function to(e,t,n){mr();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Kn.push(r.scheduler)))}_r()}const no=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Wn=new WeakMap,Xe=Symbol(""),qn=Symbol("");function ae(e,t,n){if(ke&&Ye){let r=Wn.get(e);r||Wn.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=no(()=>r.delete(n))),eo(Ye,s)}}function Oe(e,t,n,r,s,o){const i=Wn.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&O(e)){const l=Number(r);i.forEach((f,d)=>{(d==="length"||!mt(d)&&d>=l)&&a.push(f)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":O(e)?dr(n)&&a.push(i.get("length")):(a.push(i.get(Xe)),ut(e)&&a.push(i.get(qn)));break;case"delete":O(e)||(a.push(i.get(Xe)),ut(e)&&a.push(i.get(qn)));break;case"set":ut(e)&&a.push(i.get(Xe));break}mr();for(const l of a)l&&to(l,4);_r()}const Vi=lr("__proto__,__v_isRef,__isVue"),ro=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(mt)),Qr=Ui();function Ui(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=k(this);for(let o=0,i=this.length;o<i;o++)ae(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(k)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){st(),mr();const r=k(this)[t].apply(this,n);return _r(),ot(),r}}),e}function Ki(e){const t=k(this);return ae(t,"has",e),t.hasOwnProperty(e)}class so{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?sa:co:o?ao:io).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=O(t);if(!s){if(i&&P(Qr,n))return Reflect.get(Qr,n,r);if(n==="hasOwnProperty")return Ki}const a=Reflect.get(t,n,r);return(mt(n)?ro.has(n):Vi(n))||(s||ae(t,"get",n),o)?a:ue(a)?i&&dr(n)?a:a.value:K(a)?s?lo(a):yr(a):a}}class oo extends so{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];if(!this._isShallow){const l=xt(o);if(!Gn(r)&&!xt(r)&&(o=k(o),r=k(r)),!O(t)&&ue(o)&&!ue(r))return l?!1:(o.value=r,!0)}const i=O(t)&&dr(n)?Number(n)<t.length:P(t,n),a=Reflect.set(t,n,r,s);return t===k(s)&&(i?Qe(r,o)&&Oe(t,"set",n,r):Oe(t,"add",n,r)),a}deleteProperty(t,n){const r=P(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Oe(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!mt(n)||!ro.has(n))&&ae(t,"has",n),r}ownKeys(t){return ae(t,"iterate",O(t)?"length":Xe),Reflect.ownKeys(t)}}class Wi extends so{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const qi=new oo,Gi=new Wi,Ji=new oo(!0),br=e=>e,sn=e=>Reflect.getPrototypeOf(e);function Ht(e,t,n=!1,r=!1){e=e.__v_raw;const s=k(e),o=k(t);n||(Qe(t,o)&&ae(s,"get",t),ae(s,"get",o));const{has:i}=sn(s),a=r?br:n?Ir:Er;if(i.call(s,t))return a(e.get(t));if(i.call(s,o))return a(e.get(o));e!==s&&e.get(t)}function zt(e,t=!1){const n=this.__v_raw,r=k(n),s=k(e);return t||(Qe(e,s)&&ae(r,"has",e),ae(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function jt(e,t=!1){return e=e.__v_raw,!t&&ae(k(e),"iterate",Xe),Reflect.get(e,"size",e)}function Zr(e){e=k(e);const t=k(this);return sn(t).has.call(t,e)||(t.add(e),Oe(t,"add",e,e)),this}function es(e,t){t=k(t);const n=k(this),{has:r,get:s}=sn(n);let o=r.call(n,e);o||(e=k(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?Qe(t,i)&&Oe(n,"set",e,t):Oe(n,"add",e,t),this}function ts(e){const t=k(this),{has:n,get:r}=sn(t);let s=n.call(t,e);s||(e=k(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&Oe(t,"delete",e,void 0),o}function ns(){const e=k(this),t=e.size!==0,n=e.clear();return t&&Oe(e,"clear",void 0,void 0),n}function Vt(e,t){return function(r,s){const o=this,i=o.__v_raw,a=k(i),l=t?br:e?Ir:Er;return!e&&ae(a,"iterate",Xe),i.forEach((f,d)=>r.call(s,l(f),l(d),o))}}function Ut(e,t,n){return function(...r){const s=this.__v_raw,o=k(s),i=ut(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,f=s[e](...r),d=n?br:t?Ir:Er;return!t&&ae(o,"iterate",l?qn:Xe),{next(){const{value:y,done:I}=f.next();return I?{value:y,done:I}:{value:a?[d(y[0]),d(y[1])]:d(y),done:I}},[Symbol.iterator](){return this}}}}function Pe(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Yi(){const e={get(o){return Ht(this,o)},get size(){return jt(this)},has:zt,add:Zr,set:es,delete:ts,clear:ns,forEach:Vt(!1,!1)},t={get(o){return Ht(this,o,!1,!0)},get size(){return jt(this)},has:zt,add:Zr,set:es,delete:ts,clear:ns,forEach:Vt(!1,!0)},n={get(o){return Ht(this,o,!0)},get size(){return jt(this,!0)},has(o){return zt.call(this,o,!0)},add:Pe("add"),set:Pe("set"),delete:Pe("delete"),clear:Pe("clear"),forEach:Vt(!0,!1)},r={get(o){return Ht(this,o,!0,!0)},get size(){return jt(this,!0)},has(o){return zt.call(this,o,!0)},add:Pe("add"),set:Pe("set"),delete:Pe("delete"),clear:Pe("clear"),forEach:Vt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Ut(o,!1,!1),n[o]=Ut(o,!0,!1),t[o]=Ut(o,!1,!0),r[o]=Ut(o,!0,!0)}),[e,n,t,r]}const[Xi,Qi,Zi,ea]=Yi();function wr(e,t){const n=t?e?ea:Zi:e?Qi:Xi;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(P(n,s)&&s in r?n:r,s,o)}const ta={get:wr(!1,!1)},na={get:wr(!1,!0)},ra={get:wr(!0,!1)},io=new WeakMap,ao=new WeakMap,co=new WeakMap,sa=new WeakMap;function oa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ia(e){return e.__v_skip||!Object.isExtensible(e)?0:oa(Oi(e))}function yr(e){return xt(e)?e:vr(e,!1,qi,ta,io)}function aa(e){return vr(e,!1,Ji,na,ao)}function lo(e){return vr(e,!0,Gi,ra,co)}function vr(e,t,n,r,s){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=ia(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function ft(e){return xt(e)?ft(e.__v_raw):!!(e&&e.__v_isReactive)}function xt(e){return!!(e&&e.__v_isReadonly)}function Gn(e){return!!(e&&e.__v_isShallow)}function uo(e){return ft(e)||xt(e)}function k(e){const t=e&&e.__v_raw;return t?k(t):e}function fo(e){return Object.isExtensible(e)&&Jt(e,"__v_skip",!0),e}const Er=e=>K(e)?yr(e):e,Ir=e=>K(e)?lo(e):e;class ho{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new gr(()=>t(this._value),()=>Cn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=k(this);return(!t._cacheable||t.effect.dirty)&&Qe(t._value,t._value=t.effect.run())&&Cn(t,4),la(t),t.effect._dirtyLevel>=2&&Cn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function ca(e,t,n=!1){let r,s;const o=x(e);return o?(r=e,s=de):(r=e.get,s=e.set),new ho(r,s,o||!s,n)}function la(e){var t;ke&&Ye&&(e=k(e),eo(Ye,(t=e.dep)!=null?t:e.dep=no(()=>e.dep=void 0,e instanceof ho?e:void 0)))}function Cn(e,t=4,n){e=k(e);const r=e.dep;r&&to(r,t)}function ue(e){return!!(e&&e.__v_isRef===!0)}function ua(e){return ue(e)?e.value:e}const fa={get:(e,t,n)=>ua(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function po(e){return ft(e)?e:new Proxy(e,fa)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Le(e,t,n,r){try{return r?e(...r):e()}catch(s){on(s,t,n)}}function me(e,t,n,r){if(x(e)){const o=Le(e,t,n,r);return o&&Ks(o)&&o.catch(i=>{on(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(me(e[o],t,n,r));return s}function on(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const f=o.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,a)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){Le(l,null,10,[e,i,a]);return}}da(e,n,s,r)}function da(e,t,n,r=!0){console.error(e)}let Mt=!1,Jn=!1;const ee=[];let Ie=0;const dt=[];let Re=null,Ge=0;const go=Promise.resolve();let Sr=null;function ha(e){const t=Sr||go;return e?t.then(this?e.bind(this):e):t}function pa(e){let t=Ie+1,n=ee.length;for(;t<n;){const r=t+n>>>1,s=ee[r],o=Dt(s);o<e||o===e&&s.pre?t=r+1:n=r}return t}function Cr(e){(!ee.length||!ee.includes(e,Mt&&e.allowRecurse?Ie+1:Ie))&&(e.id==null?ee.push(e):ee.splice(pa(e.id),0,e),mo())}function mo(){!Mt&&!Jn&&(Jn=!0,Sr=go.then(bo))}function ga(e){const t=ee.indexOf(e);t>Ie&&ee.splice(t,1)}function ma(e){O(e)?dt.push(...e):(!Re||!Re.includes(e,e.allowRecurse?Ge+1:Ge))&&dt.push(e),mo()}function rs(e,t,n=Mt?Ie+1:0){for(;n<ee.length;n++){const r=ee[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ee.splice(n,1),n--,r()}}}function _o(e){if(dt.length){const t=[...new Set(dt)].sort((n,r)=>Dt(n)-Dt(r));if(dt.length=0,Re){Re.push(...t);return}for(Re=t,Ge=0;Ge<Re.length;Ge++)Re[Ge]();Re=null,Ge=0}}const Dt=e=>e.id==null?1/0:e.id,_a=(e,t)=>{const n=Dt(e)-Dt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function bo(e){Jn=!1,Mt=!0,ee.sort(_a);try{for(Ie=0;Ie<ee.length;Ie++){const t=ee[Ie];t&&t.active!==!1&&Le(t,null,14)}}finally{Ie=0,ee.length=0,_o(),Mt=!1,Sr=null,(ee.length||dt.length)&&bo()}}function ba(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||j;let s=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in r){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:y,trim:I}=r[d]||j;I&&(s=n.map(A=>X(A)?A.trim():A)),y&&(s=n.map(Di))}let a,l=r[a=En(t)]||r[a=En(ht(t))];!l&&o&&(l=r[a=En(_t(t))]),l&&me(l,e,6,s);const f=r[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,me(f,e,6,s)}}function wo(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!x(e)){const l=f=>{const d=wo(f,t,!0);d&&(a=!0,Q(i,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(K(e)&&r.set(e,null),null):(O(o)?o.forEach(l=>i[l]=null):Q(i,o),K(e)&&r.set(e,i),i)}function an(e,t){return!e||!tn(t)?!1:(t=t.slice(2).replace(/Once$/,""),P(e,t[0].toLowerCase()+t.slice(1))||P(e,_t(t))||P(e,t))}let ie=null,cn=null;function Yt(e){const t=ie;return ie=e,cn=e&&e.type.__scopeId||null,t}function yo(e){cn=e}function vo(){cn=null}function Z(e,t=ie,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&hs(-1);const o=Yt(t);let i;try{i=e(...s)}finally{Yt(o),r._d&&hs(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function An(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[i],slots:a,attrs:l,emit:f,render:d,renderCache:y,data:I,setupState:A,ctx:V,inheritAttrs:$}=e;let G,q;const _e=Yt(e);try{if(n.shapeFlag&4){const J=s||r,fe=J;G=Ee(d.call(fe,J,y,o,A,I,V)),q=l}else{const J=t;G=Ee(J.length>1?J(o,{attrs:l,slots:a,emit:f}):J(o,null)),q=t.props?l:wa(l)}}catch(J){Ot.length=0,on(J,e,1),G=W(pt)}let B=G;if(q&&$!==!1){const J=Object.keys(q),{shapeFlag:fe}=B;J.length&&fe&7&&(i&&J.some(ur)&&(q=ya(q,i)),B=gt(B,q))}return n.dirs&&(B=gt(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),G=B,Yt(_e),G}const wa=e=>{let t;for(const n in e)(n==="class"||n==="style"||tn(n))&&((t||(t={}))[n]=e[n]);return t},ya=(e,t)=>{const n={};for(const r in e)(!ur(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function va(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:l}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ss(r,i,f):!!i;if(l&8){const d=t.dynamicProps;for(let y=0;y<d.length;y++){const I=d[y];if(i[I]!==r[I]&&!an(f,I))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?ss(r,i,f):!0:!!i;return!1}function ss(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!an(n,o))return!0}return!1}function Ea({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ia=Symbol.for("v-ndc"),Sa=e=>e.__isSuspense;function Ca(e,t){t&&t.pendingBranch?O(e)?t.effects.push(...e):t.effects.push(e):ma(e)}const Aa=Symbol.for("v-scx"),Ta=()=>Wt(Aa),Kt={};function Tn(e,t,n){return Eo(e,t,n)}function Eo(e,t,{immediate:n,deep:r,flush:s,once:o,onTrack:i,onTrigger:a}=j){if(t&&o){const N=t;t=(...Ce)=>{N(...Ce),fe()}}const l=se,f=N=>r===!0?N:ct(N,r===!1?1:void 0);let d,y=!1,I=!1;if(ue(e)?(d=()=>e.value,y=Gn(e)):ft(e)?(d=()=>f(e),y=!0):O(e)?(I=!0,y=e.some(N=>ft(N)||Gn(N)),d=()=>e.map(N=>{if(ue(N))return N.value;if(ft(N))return f(N);if(x(N))return Le(N,l,2)})):x(e)?t?d=()=>Le(e,l,2):d=()=>(A&&A(),me(e,l,3,[V])):d=de,t&&r){const N=d;d=()=>ct(N())}let A,V=N=>{A=B.onStop=()=>{Le(N,l,4),A=B.onStop=void 0}},$;if(dn)if(V=de,t?n&&me(t,l,3,[d(),I?[]:void 0,V]):d(),s==="sync"){const N=Ta();$=N.__watcherHandles||(N.__watcherHandles=[])}else return de;let G=I?new Array(e.length).fill(Kt):Kt;const q=()=>{if(!(!B.active||!B.dirty))if(t){const N=B.run();(r||y||(I?N.some((Ce,be)=>Qe(Ce,G[be])):Qe(N,G)))&&(A&&A(),me(t,l,3,[N,G===Kt?void 0:I&&G[0]===Kt?[]:G,V]),G=N)}else B.run()};q.allowRecurse=!!t;let _e;s==="sync"?_e=q:s==="post"?_e=()=>oe(q,l&&l.suspense):(q.pre=!0,l&&(q.id=l.uid),_e=()=>Cr(q));const B=new gr(d,de,_e),J=zi(),fe=()=>{B.stop(),J&&fr(J.effects,B)};return t?n?q():G=B.run():s==="post"?oe(B.run.bind(B),l&&l.suspense):B.run(),$&&$.push(fe),fe}function Oa(e,t,n){const r=this.proxy,s=X(e)?e.includes(".")?Io(r,e):()=>r[e]:e.bind(r,r);let o;x(t)?o=t:(o=t.handler,n=t);const i=$t(this),a=Eo(s,o.bind(r),n);return i(),a}function Io(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ct(e,t,n=0,r){if(!K(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),ue(e))ct(e.value,t,n,r);else if(O(e))for(let s=0;s<e.length;s++)ct(e[s],t,n,r);else if(Us(e)||ut(e))e.forEach(s=>{ct(s,t,n,r)});else if(qs(e))for(const s in e)ct(e[s],t,n,r);return e}function Ke(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let l=a.dir[r];l&&(st(),me(l,n,8,[e.el,a,e,t]),ot())}}/*! #__NO_SIDE_EFFECTS__ */function Ar(e,t){return x(e)?Q({name:e.name},t,{setup:e}):e}const Ct=e=>!!e.type.__asyncLoader,So=e=>e.type.__isKeepAlive;function xa(e,t){Co(e,"a",t)}function Ma(e,t){Co(e,"da",t)}function Co(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ln(t,r,n),n){let s=n.parent;for(;s&&s.parent;)So(s.parent.vnode)&&Da(r,t,n,s),s=s.parent}}function Da(e,t,n,r){const s=ln(t,e,r,!0);Ao(()=>{fr(r[t],s)},n)}function ln(e,t,n=se,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;st();const a=$t(n),l=me(t,n,e,i);return a(),ot(),l});return r?s.unshift(o):s.push(o),o}}const Me=e=>(t,n=se)=>(!dn||e==="sp")&&ln(e,(...r)=>t(...r),n),Pa=Me("bm"),Ra=Me("m"),Na=Me("bu"),$a=Me("u"),ka=Me("bum"),Ao=Me("um"),La=Me("sp"),Ba=Me("rtg"),Fa=Me("rtc");function Ha(e,t=se){ln("ec",e,t)}function On(e,t,n={},r,s){if(ie.isCE||ie.parent&&Ct(ie.parent)&&ie.parent.isCE)return t!=="default"&&(n.name=t),W("slot",n,r&&r());let o=e[t];o&&o._c&&(o._d=!1),Se();const i=o&&To(o(n)),a=ac(le,{key:n.key||i&&i.key||`_${t}`},i||(r?r():[]),i&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function To(e){return e.some(t=>Bo(t)?!(t.type===pt||t.type===le&&!To(t.children)):!0)?e:null}const Yn=e=>e?Ho(e)?Mr(e)||e.proxy:Yn(e.parent):null,At=Q(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yn(e.parent),$root:e=>Yn(e.root),$emit:e=>e.emit,$options:e=>Tr(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Cr(e.update)}),$nextTick:e=>e.n||(e.n=ha.bind(e.proxy)),$watch:e=>Oa.bind(e)}),xn=(e,t)=>e!==j&&!e.__isScriptSetup&&P(e,t),za={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:l}=e;let f;if(t[0]!=="$"){const A=i[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(xn(r,t))return i[t]=1,r[t];if(s!==j&&P(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&P(f,t))return i[t]=3,o[t];if(n!==j&&P(n,t))return i[t]=4,n[t];Xn&&(i[t]=0)}}const d=At[t];let y,I;if(d)return t==="$attrs"&&ae(e,"get",t),d(e);if((y=a.__cssModules)&&(y=y[t]))return y;if(n!==j&&P(n,t))return i[t]=4,n[t];if(I=l.config.globalProperties,P(I,t))return I[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return xn(s,t)?(s[t]=n,!0):r!==j&&P(r,t)?(r[t]=n,!0):P(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let a;return!!n[i]||e!==j&&P(e,i)||xn(t,i)||(a=o[0])&&P(a,i)||P(r,i)||P(At,i)||P(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:P(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function os(e){return O(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Xn=!0;function ja(e){const t=Tr(e),n=e.proxy,r=e.ctx;Xn=!1,t.beforeCreate&&is(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:l,inject:f,created:d,beforeMount:y,mounted:I,beforeUpdate:A,updated:V,activated:$,deactivated:G,beforeDestroy:q,beforeUnmount:_e,destroyed:B,unmounted:J,render:fe,renderTracked:N,renderTriggered:Ce,errorCaptured:be,serverPrefetch:_n,expose:je,inheritAttrs:wt,components:kt,directives:Lt,filters:bn}=t;if(f&&Va(f,r,null),i)for(const U in i){const F=i[U];x(F)&&(r[U]=F.bind(n))}if(s){const U=s.call(n,n);K(U)&&(e.data=yr(U))}if(Xn=!0,o)for(const U in o){const F=o[U],Ve=x(F)?F.bind(n,n):x(F.get)?F.get.bind(n,n):de,Bt=!x(F)&&x(F.set)?F.set.bind(n):de,Ue=wc({get:Ve,set:Bt});Object.defineProperty(r,U,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:we=>Ue.value=we})}if(a)for(const U in a)Oo(a[U],r,n,U);if(l){const U=x(l)?l.call(n):l;Reflect.ownKeys(U).forEach(F=>{Ja(F,U[F])})}d&&is(d,e,"c");function ne(U,F){O(F)?F.forEach(Ve=>U(Ve.bind(n))):F&&U(F.bind(n))}if(ne(Pa,y),ne(Ra,I),ne(Na,A),ne($a,V),ne(xa,$),ne(Ma,G),ne(Ha,be),ne(Fa,N),ne(Ba,Ce),ne(ka,_e),ne(Ao,J),ne(La,_n),O(je))if(je.length){const U=e.exposed||(e.exposed={});je.forEach(F=>{Object.defineProperty(U,F,{get:()=>n[F],set:Ve=>n[F]=Ve})})}else e.exposed||(e.exposed={});fe&&e.render===de&&(e.render=fe),wt!=null&&(e.inheritAttrs=wt),kt&&(e.components=kt),Lt&&(e.directives=Lt)}function Va(e,t,n=de){O(e)&&(e=Qn(e));for(const r in e){const s=e[r];let o;K(s)?"default"in s?o=Wt(s.from||r,s.default,!0):o=Wt(s.from||r):o=Wt(s),ue(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function is(e,t,n){me(O(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oo(e,t,n,r){const s=r.includes(".")?Io(n,r):()=>n[r];if(X(e)){const o=t[e];x(o)&&Tn(s,o)}else if(x(e))Tn(s,e.bind(n));else if(K(e))if(O(e))e.forEach(o=>Oo(o,t,n,r));else{const o=x(e.handler)?e.handler.bind(n):t[e.handler];x(o)&&Tn(s,o,e)}}function Tr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(f=>Xt(l,f,i,!0)),Xt(l,t,i)),K(t)&&o.set(t,l),l}function Xt(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&Xt(e,o,n,!0),s&&s.forEach(i=>Xt(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=Ua[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Ua={data:as,props:cs,emits:cs,methods:It,computed:It,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:It,directives:It,watch:Wa,provide:as,inject:Ka};function as(e,t){return t?e?function(){return Q(x(e)?e.call(this,this):e,x(t)?t.call(this,this):t)}:t:e}function Ka(e,t){return It(Qn(e),Qn(t))}function Qn(e){if(O(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function re(e,t){return e?[...new Set([].concat(e,t))]:t}function It(e,t){return e?Q(Object.create(null),e,t):t}function cs(e,t){return e?O(e)&&O(t)?[...new Set([...e,...t])]:Q(Object.create(null),os(e),os(t??{})):t}function Wa(e,t){if(!e)return t;if(!t)return e;const n=Q(Object.create(null),e);for(const r in t)n[r]=re(e[r],t[r]);return n}function xo(){return{app:null,config:{isNativeTag:Ai,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qa=0;function Ga(e,t){return function(r,s=null){x(r)||(r=Q({},r)),s!=null&&!K(s)&&(s=null);const o=xo(),i=new WeakSet;let a=!1;const l=o.app={_uid:qa++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:yc,get config(){return o.config},set config(f){},use(f,...d){return i.has(f)||(f&&x(f.install)?(i.add(f),f.install(l,...d)):x(f)&&(i.add(f),f(l,...d))),l},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),l},component(f,d){return d?(o.components[f]=d,l):o.components[f]},directive(f,d){return d?(o.directives[f]=d,l):o.directives[f]},mount(f,d,y){if(!a){const I=W(r,s);return I.appContext=o,y===!0?y="svg":y===!1&&(y=void 0),d&&t?t(I,f):e(I,f,y),a=!0,l._container=f,f.__vue_app__=l,Mr(I.component)||I.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,d){return o.provides[f]=d,l},runWithContext(f){const d=Tt;Tt=l;try{return f()}finally{Tt=d}}};return l}}let Tt=null;function Ja(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function Wt(e,t,n=!1){const r=se||ie;if(r||Tt){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Tt._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&x(t)?t.call(r&&r.proxy):t}}function Ya(e,t,n,r=!1){const s={},o={};Jt(o,fn,1),e.propsDefaults=Object.create(null),Mo(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:aa(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Xa(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=k(s),[l]=e.propsOptions;let f=!1;if((r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let y=0;y<d.length;y++){let I=d[y];if(an(e.emitsOptions,I))continue;const A=t[I];if(l)if(P(o,I))A!==o[I]&&(o[I]=A,f=!0);else{const V=ht(I);s[V]=Zn(l,a,V,A,e,!1)}else A!==o[I]&&(o[I]=A,f=!0)}}}else{Mo(e,t,s,o)&&(f=!0);let d;for(const y in a)(!t||!P(t,y)&&((d=_t(y))===y||!P(t,d)))&&(l?n&&(n[y]!==void 0||n[d]!==void 0)&&(s[y]=Zn(l,a,y,void 0,e,!0)):delete s[y]);if(o!==a)for(const y in o)(!t||!P(t,y))&&(delete o[y],f=!0)}f&&Oe(e,"set","$attrs")}function Mo(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(St(l))continue;const f=t[l];let d;s&&P(s,d=ht(l))?!o||!o.includes(d)?n[d]=f:(a||(a={}))[d]=f:an(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,i=!0)}if(o){const l=k(n),f=a||j;for(let d=0;d<o.length;d++){const y=o[d];n[y]=Zn(s,l,y,f[y],e,!P(f,y))}}return i}function Zn(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=P(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&x(l)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=$t(s);r=f[n]=l.call(null,t),d()}}else r=l}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===_t(n))&&(r=!0))}return r}function Do(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let l=!1;if(!x(e)){const d=y=>{l=!0;const[I,A]=Do(y,t,!0);Q(i,I),A&&a.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!l)return K(e)&&r.set(e,lt),lt;if(O(o))for(let d=0;d<o.length;d++){const y=ht(o[d]);ls(y)&&(i[y]=j)}else if(o)for(const d in o){const y=ht(d);if(ls(y)){const I=o[d],A=i[y]=O(I)||x(I)?{type:I}:Q({},I);if(A){const V=ds(Boolean,A.type),$=ds(String,A.type);A[0]=V>-1,A[1]=$<0||V<$,(V>-1||P(A,"default"))&&a.push(y)}}}const f=[i,a];return K(e)&&r.set(e,f),f}function ls(e){return e[0]!=="$"&&!St(e)}function us(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function fs(e,t){return us(e)===us(t)}function ds(e,t){return O(t)?t.findIndex(n=>fs(n,e)):x(t)&&fs(t,e)?0:-1}const Po=e=>e[0]==="_"||e==="$stable",Or=e=>O(e)?e.map(Ee):[Ee(e)],Qa=(e,t,n)=>{if(t._n)return t;const r=Z((...s)=>Or(t(...s)),n);return r._c=!1,r},Ro=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Po(s))continue;const o=e[s];if(x(o))t[s]=Qa(s,o,r);else if(o!=null){const i=Or(o);t[s]=()=>i}}},No=(e,t)=>{const n=Or(t);e.slots.default=()=>n},Za=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=k(t),Jt(t,"_",n)):Ro(t,e.slots={})}else e.slots={},t&&No(e,t);Jt(e.slots,fn,1)},ec=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=j;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(Q(s,t),!n&&a===1&&delete s._):(o=!t.$stable,Ro(t,s)),i=t}else t&&(No(e,t),i={default:1});if(o)for(const a in s)!Po(a)&&i[a]==null&&delete s[a]};function er(e,t,n,r,s=!1){if(O(e)){e.forEach((I,A)=>er(I,t&&(O(t)?t[A]:t),n,r,s));return}if(Ct(r)&&!s)return;const o=r.shapeFlag&4?Mr(r.component)||r.component.proxy:r.el,i=s?null:o,{i:a,r:l}=e,f=t&&t.r,d=a.refs===j?a.refs={}:a.refs,y=a.setupState;if(f!=null&&f!==l&&(X(f)?(d[f]=null,P(y,f)&&(y[f]=null)):ue(f)&&(f.value=null)),x(l))Le(l,a,12,[i,d]);else{const I=X(l),A=ue(l);if(I||A){const V=()=>{if(e.f){const $=I?P(y,l)?y[l]:d[l]:l.value;s?O($)&&fr($,o):O($)?$.includes(o)||$.push(o):I?(d[l]=[o],P(y,l)&&(y[l]=d[l])):(l.value=[o],e.k&&(d[e.k]=l.value))}else I?(d[l]=i,P(y,l)&&(y[l]=i)):A&&(l.value=i,e.k&&(d[e.k]=i))};i?(V.id=-1,oe(V,n)):V()}}}const oe=Ca;function tc(e){return nc(e)}function nc(e,t){const n=Js();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:l,setText:f,setElementText:d,parentNode:y,nextSibling:I,setScopeId:A=de,insertStaticContent:V}=e,$=(c,u,h,p=null,g=null,b=null,v=void 0,_=null,w=!!u.dynamicChildren)=>{if(c===u)return;c&&!vt(c,u)&&(p=Ft(c),we(c,g,b,!0),c=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:m,ref:E,shapeFlag:C}=u;switch(m){case un:G(c,u,h,p);break;case pt:q(c,u,h,p);break;case Dn:c==null&&_e(u,h,p,v);break;case le:kt(c,u,h,p,g,b,v,_,w);break;default:C&1?fe(c,u,h,p,g,b,v,_,w):C&6?Lt(c,u,h,p,g,b,v,_,w):(C&64||C&128)&&m.process(c,u,h,p,g,b,v,_,w,it)}E!=null&&g&&er(E,c&&c.ref,b,u||c,!u)},G=(c,u,h,p)=>{if(c==null)r(u.el=a(u.children),h,p);else{const g=u.el=c.el;u.children!==c.children&&f(g,u.children)}},q=(c,u,h,p)=>{c==null?r(u.el=l(u.children||""),h,p):u.el=c.el},_e=(c,u,h,p)=>{[c.el,c.anchor]=V(c.children,u,h,p,c.el,c.anchor)},B=({el:c,anchor:u},h,p)=>{let g;for(;c&&c!==u;)g=I(c),r(c,h,p),c=g;r(u,h,p)},J=({el:c,anchor:u})=>{let h;for(;c&&c!==u;)h=I(c),s(c),c=h;s(u)},fe=(c,u,h,p,g,b,v,_,w)=>{u.type==="svg"?v="svg":u.type==="math"&&(v="mathml"),c==null?N(u,h,p,g,b,v,_,w):_n(c,u,g,b,v,_,w)},N=(c,u,h,p,g,b,v,_)=>{let w,m;const{props:E,shapeFlag:C,transition:S,dirs:T}=c;if(w=c.el=i(c.type,b,E&&E.is,E),C&8?d(w,c.children):C&16&&be(c.children,w,null,p,g,Mn(c,b),v,_),T&&Ke(c,null,p,"created"),Ce(w,c,c.scopeId,v,p),E){for(const L in E)L!=="value"&&!St(L)&&o(w,L,null,E[L],b,c.children,p,g,Ae);"value"in E&&o(w,"value",null,E.value,b),(m=E.onVnodeBeforeMount)&&ve(m,p,c)}T&&Ke(c,null,p,"beforeMount");const M=rc(g,S);M&&S.beforeEnter(w),r(w,u,h),((m=E&&E.onVnodeMounted)||M||T)&&oe(()=>{m&&ve(m,p,c),M&&S.enter(w),T&&Ke(c,null,p,"mounted")},g)},Ce=(c,u,h,p,g)=>{if(h&&A(c,h),p)for(let b=0;b<p.length;b++)A(c,p[b]);if(g){let b=g.subTree;if(u===b){const v=g.vnode;Ce(c,v,v.scopeId,v.slotScopeIds,g.parent)}}},be=(c,u,h,p,g,b,v,_,w=0)=>{for(let m=w;m<c.length;m++){const E=c[m]=_?Ne(c[m]):Ee(c[m]);$(null,E,u,h,p,g,b,v,_)}},_n=(c,u,h,p,g,b,v)=>{const _=u.el=c.el;let{patchFlag:w,dynamicChildren:m,dirs:E}=u;w|=c.patchFlag&16;const C=c.props||j,S=u.props||j;let T;if(h&&We(h,!1),(T=S.onVnodeBeforeUpdate)&&ve(T,h,u,c),E&&Ke(u,c,h,"beforeUpdate"),h&&We(h,!0),m?je(c.dynamicChildren,m,_,h,p,Mn(u,g),b):v||F(c,u,_,null,h,p,Mn(u,g),b,!1),w>0){if(w&16)wt(_,u,C,S,h,p,g);else if(w&2&&C.class!==S.class&&o(_,"class",null,S.class,g),w&4&&o(_,"style",C.style,S.style,g),w&8){const M=u.dynamicProps;for(let L=0;L<M.length;L++){const z=M[L],Y=C[z],he=S[z];(he!==Y||z==="value")&&o(_,z,Y,he,g,c.children,h,p,Ae)}}w&1&&c.children!==u.children&&d(_,u.children)}else!v&&m==null&&wt(_,u,C,S,h,p,g);((T=S.onVnodeUpdated)||E)&&oe(()=>{T&&ve(T,h,u,c),E&&Ke(u,c,h,"updated")},p)},je=(c,u,h,p,g,b,v)=>{for(let _=0;_<u.length;_++){const w=c[_],m=u[_],E=w.el&&(w.type===le||!vt(w,m)||w.shapeFlag&70)?y(w.el):h;$(w,m,E,null,p,g,b,v,!0)}},wt=(c,u,h,p,g,b,v)=>{if(h!==p){if(h!==j)for(const _ in h)!St(_)&&!(_ in p)&&o(c,_,h[_],null,v,u.children,g,b,Ae);for(const _ in p){if(St(_))continue;const w=p[_],m=h[_];w!==m&&_!=="value"&&o(c,_,m,w,v,u.children,g,b,Ae)}"value"in p&&o(c,"value",h.value,p.value,v)}},kt=(c,u,h,p,g,b,v,_,w)=>{const m=u.el=c?c.el:a(""),E=u.anchor=c?c.anchor:a("");let{patchFlag:C,dynamicChildren:S,slotScopeIds:T}=u;T&&(_=_?_.concat(T):T),c==null?(r(m,h,p),r(E,h,p),be(u.children||[],h,E,g,b,v,_,w)):C>0&&C&64&&S&&c.dynamicChildren?(je(c.dynamicChildren,S,h,g,b,v,_),(u.key!=null||g&&u===g.subTree)&&$o(c,u,!0)):F(c,u,h,E,g,b,v,_,w)},Lt=(c,u,h,p,g,b,v,_,w)=>{u.slotScopeIds=_,c==null?u.shapeFlag&512?g.ctx.activate(u,h,p,v,w):bn(u,h,p,g,b,v,w):Vr(c,u,w)},bn=(c,u,h,p,g,b,v)=>{const _=c.component=hc(c,p,g);if(So(c)&&(_.ctx.renderer=it),pc(_),_.asyncDep){if(g&&g.registerDep(_,ne),!c.el){const w=_.subTree=W(pt);q(null,w,u,h)}}else ne(_,c,u,h,g,b,v)},Vr=(c,u,h)=>{const p=u.component=c.component;if(va(c,u,h))if(p.asyncDep&&!p.asyncResolved){U(p,u,h);return}else p.next=u,ga(p.update),p.effect.dirty=!0,p.update();else u.el=c.el,p.vnode=u},ne=(c,u,h,p,g,b,v)=>{const _=()=>{if(c.isMounted){let{next:E,bu:C,u:S,parent:T,vnode:M}=c;{const at=ko(c);if(at){E&&(E.el=M.el,U(c,E,v)),at.asyncDep.then(()=>{c.isUnmounted||_()});return}}let L=E,z;We(c,!1),E?(E.el=M.el,U(c,E,v)):E=M,C&&In(C),(z=E.props&&E.props.onVnodeBeforeUpdate)&&ve(z,T,E,M),We(c,!0);const Y=An(c),he=c.subTree;c.subTree=Y,$(he,Y,y(he.el),Ft(he),c,g,b),E.el=Y.el,L===null&&Ea(c,Y.el),S&&oe(S,g),(z=E.props&&E.props.onVnodeUpdated)&&oe(()=>ve(z,T,E,M),g)}else{let E;const{el:C,props:S}=u,{bm:T,m:M,parent:L}=c,z=Ct(u);if(We(c,!1),T&&In(T),!z&&(E=S&&S.onVnodeBeforeMount)&&ve(E,L,u),We(c,!0),C&&vn){const Y=()=>{c.subTree=An(c),vn(C,c.subTree,c,g,null)};z?u.type.__asyncLoader().then(()=>!c.isUnmounted&&Y()):Y()}else{const Y=c.subTree=An(c);$(null,Y,h,p,c,g,b),u.el=Y.el}if(M&&oe(M,g),!z&&(E=S&&S.onVnodeMounted)){const Y=u;oe(()=>ve(E,L,Y),g)}(u.shapeFlag&256||L&&Ct(L.vnode)&&L.vnode.shapeFlag&256)&&c.a&&oe(c.a,g),c.isMounted=!0,u=h=p=null}},w=c.effect=new gr(_,de,()=>Cr(m),c.scope),m=c.update=()=>{w.dirty&&w.run()};m.id=c.uid,We(c,!0),m()},U=(c,u,h)=>{u.component=c;const p=c.vnode.props;c.vnode=u,c.next=null,Xa(c,u.props,p,h),ec(c,u.children,h),st(),rs(c),ot()},F=(c,u,h,p,g,b,v,_,w=!1)=>{const m=c&&c.children,E=c?c.shapeFlag:0,C=u.children,{patchFlag:S,shapeFlag:T}=u;if(S>0){if(S&128){Bt(m,C,h,p,g,b,v,_,w);return}else if(S&256){Ve(m,C,h,p,g,b,v,_,w);return}}T&8?(E&16&&Ae(m,g,b),C!==m&&d(h,C)):E&16?T&16?Bt(m,C,h,p,g,b,v,_,w):Ae(m,g,b,!0):(E&8&&d(h,""),T&16&&be(C,h,p,g,b,v,_,w))},Ve=(c,u,h,p,g,b,v,_,w)=>{c=c||lt,u=u||lt;const m=c.length,E=u.length,C=Math.min(m,E);let S;for(S=0;S<C;S++){const T=u[S]=w?Ne(u[S]):Ee(u[S]);$(c[S],T,h,null,g,b,v,_,w)}m>E?Ae(c,g,b,!0,!1,C):be(u,h,p,g,b,v,_,w,C)},Bt=(c,u,h,p,g,b,v,_,w)=>{let m=0;const E=u.length;let C=c.length-1,S=E-1;for(;m<=C&&m<=S;){const T=c[m],M=u[m]=w?Ne(u[m]):Ee(u[m]);if(vt(T,M))$(T,M,h,null,g,b,v,_,w);else break;m++}for(;m<=C&&m<=S;){const T=c[C],M=u[S]=w?Ne(u[S]):Ee(u[S]);if(vt(T,M))$(T,M,h,null,g,b,v,_,w);else break;C--,S--}if(m>C){if(m<=S){const T=S+1,M=T<E?u[T].el:p;for(;m<=S;)$(null,u[m]=w?Ne(u[m]):Ee(u[m]),h,M,g,b,v,_,w),m++}}else if(m>S)for(;m<=C;)we(c[m],g,b,!0),m++;else{const T=m,M=m,L=new Map;for(m=M;m<=S;m++){const ce=u[m]=w?Ne(u[m]):Ee(u[m]);ce.key!=null&&L.set(ce.key,m)}let z,Y=0;const he=S-M+1;let at=!1,Wr=0;const yt=new Array(he);for(m=0;m<he;m++)yt[m]=0;for(m=T;m<=C;m++){const ce=c[m];if(Y>=he){we(ce,g,b,!0);continue}let ye;if(ce.key!=null)ye=L.get(ce.key);else for(z=M;z<=S;z++)if(yt[z-M]===0&&vt(ce,u[z])){ye=z;break}ye===void 0?we(ce,g,b,!0):(yt[ye-M]=m+1,ye>=Wr?Wr=ye:at=!0,$(ce,u[ye],h,null,g,b,v,_,w),Y++)}const qr=at?sc(yt):lt;for(z=qr.length-1,m=he-1;m>=0;m--){const ce=M+m,ye=u[ce],Gr=ce+1<E?u[ce+1].el:p;yt[m]===0?$(null,ye,h,Gr,g,b,v,_,w):at&&(z<0||m!==qr[z]?Ue(ye,h,Gr,2):z--)}}},Ue=(c,u,h,p,g=null)=>{const{el:b,type:v,transition:_,children:w,shapeFlag:m}=c;if(m&6){Ue(c.component.subTree,u,h,p);return}if(m&128){c.suspense.move(u,h,p);return}if(m&64){v.move(c,u,h,it);return}if(v===le){r(b,u,h);for(let C=0;C<w.length;C++)Ue(w[C],u,h,p);r(c.anchor,u,h);return}if(v===Dn){B(c,u,h);return}if(p!==2&&m&1&&_)if(p===0)_.beforeEnter(b),r(b,u,h),oe(()=>_.enter(b),g);else{const{leave:C,delayLeave:S,afterLeave:T}=_,M=()=>r(b,u,h),L=()=>{C(b,()=>{M(),T&&T()})};S?S(b,M,L):L()}else r(b,u,h)},we=(c,u,h,p=!1,g=!1)=>{const{type:b,props:v,ref:_,children:w,dynamicChildren:m,shapeFlag:E,patchFlag:C,dirs:S}=c;if(_!=null&&er(_,null,h,c,!0),E&256){u.ctx.deactivate(c);return}const T=E&1&&S,M=!Ct(c);let L;if(M&&(L=v&&v.onVnodeBeforeUnmount)&&ve(L,u,c),E&6)Ci(c.component,h,p);else{if(E&128){c.suspense.unmount(h,p);return}T&&Ke(c,null,u,"beforeUnmount"),E&64?c.type.remove(c,u,h,g,it,p):m&&(b!==le||C>0&&C&64)?Ae(m,u,h,!1,!0):(b===le&&C&384||!g&&E&16)&&Ae(w,u,h),p&&Ur(c)}(M&&(L=v&&v.onVnodeUnmounted)||T)&&oe(()=>{L&&ve(L,u,c),T&&Ke(c,null,u,"unmounted")},h)},Ur=c=>{const{type:u,el:h,anchor:p,transition:g}=c;if(u===le){Si(h,p);return}if(u===Dn){J(c);return}const b=()=>{s(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:v,delayLeave:_}=g,w=()=>v(h,b);_?_(c.el,b,w):w()}else b()},Si=(c,u)=>{let h;for(;c!==u;)h=I(c),s(c),c=h;s(u)},Ci=(c,u,h)=>{const{bum:p,scope:g,update:b,subTree:v,um:_}=c;p&&In(p),g.stop(),b&&(b.active=!1,we(v,c,u,h)),_&&oe(_,u),oe(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ae=(c,u,h,p=!1,g=!1,b=0)=>{for(let v=b;v<c.length;v++)we(c[v],u,h,p,g)},Ft=c=>c.shapeFlag&6?Ft(c.component.subTree):c.shapeFlag&128?c.suspense.next():I(c.anchor||c.el);let wn=!1;const Kr=(c,u,h)=>{c==null?u._vnode&&we(u._vnode,null,null,!0):$(u._vnode||null,c,u,null,null,null,h),wn||(wn=!0,rs(),_o(),wn=!1),u._vnode=c},it={p:$,um:we,m:Ue,r:Ur,mt:bn,mc:be,pc:F,pbc:je,n:Ft,o:e};let yn,vn;return t&&([yn,vn]=t(it)),{render:Kr,hydrate:yn,createApp:Ga(Kr,yn)}}function Mn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function We({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function rc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $o(e,t,n=!1){const r=e.children,s=t.children;if(O(r)&&O(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=Ne(s[o]),a.el=i.el),n||$o(i,a)),a.type===un&&(a.el=i.el)}}function sc(e){const t=e.slice(),n=[0];let r,s,o,i,a;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<f?o=a+1:i=a;f<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function ko(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ko(t)}const oc=e=>e.__isTeleport,le=Symbol.for("v-fgt"),un=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),Dn=Symbol.for("v-stc"),Ot=[];let ge=null;function Se(e=!1){Ot.push(ge=e?null:[])}function ic(){Ot.pop(),ge=Ot[Ot.length-1]||null}let Pt=1;function hs(e){Pt+=e}function Lo(e){return e.dynamicChildren=Pt>0?ge||lt:null,ic(),Pt>0&&ge&&ge.push(e),e}function De(e,t,n,r,s,o){return Lo(D(e,t,n,r,s,o,!0))}function ac(e,t,n,r,s){return Lo(W(e,t,n,r,s,!0))}function Bo(e){return e?e.__v_isVNode===!0:!1}function vt(e,t){return e.type===t.type&&e.key===t.key}const fn="__vInternal",Fo=({key:e})=>e??null,qt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?X(e)||ue(e)||x(e)?{i:ie,r:e,k:t,f:!!n}:e:null);function D(e,t=null,n=null,r=0,s=null,o=e===le?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fo(t),ref:t&&qt(t),scopeId:cn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ie};return a?(xr(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=X(n)?8:16),Pt>0&&!i&&ge&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&ge.push(l),l}const W=cc;function cc(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===Ia)&&(e=pt),Bo(e)){const a=gt(e,t,!0);return n&&xr(a,n),Pt>0&&!o&&ge&&(a.shapeFlag&6?ge[ge.indexOf(e)]=a:ge.push(a)),a.patchFlag|=-2,a}if(bc(e)&&(e=e.__vccOpts),t){t=lc(t);let{class:a,style:l}=t;a&&!X(a)&&(t.class=pr(a)),K(l)&&(uo(l)&&!O(l)&&(l=Q({},l)),t.style=hr(l))}const i=X(e)?1:Sa(e)?128:oc(e)?64:K(e)?4:x(e)?2:0;return D(e,t,n,r,s,i,o,!0)}function lc(e){return e?uo(e)||fn in e?Q({},e):e:null}function gt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,a=t?uc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Fo(a),ref:t&&t.ref?n&&s?O(s)?s.concat(qt(t)):[s,qt(t)]:qt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==le?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gt(e.ssContent),ssFallback:e.ssFallback&&gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function R(e=" ",t=0){return W(un,null,e,t)}function Ee(e){return e==null||typeof e=="boolean"?W(pt):O(e)?W(le,null,e.slice()):typeof e=="object"?Ne(e):W(un,null,String(e))}function Ne(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:gt(e)}function xr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(O(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),xr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(fn in t)?t._ctx=ie:s===3&&ie&&(ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else x(t)?(t={default:t,_ctx:ie},n=32):(t=String(t),r&64?(n=16,t=[R(t)]):n=8);e.children=t,e.shapeFlag|=n}function uc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=pr([t.class,r.class]));else if(s==="style")t.style=hr([t.style,r.style]);else if(tn(s)){const o=t[s],i=r[s];i&&o!==i&&!(O(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function ve(e,t,n,r=null){me(e,t,7,[n,r])}const fc=xo();let dc=0;function hc(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||fc,o={uid:dc++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Do(r,s),emitsOptions:wo(r,s),emit:null,emitted:null,propsDefaults:j,inheritAttrs:r.inheritAttrs,ctx:j,data:j,props:j,attrs:j,slots:j,refs:j,setupState:j,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ba.bind(null,o),e.ce&&e.ce(o),o}let se=null,Qt,tr;{const e=Js(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};Qt=t("__VUE_INSTANCE_SETTERS__",n=>se=n),tr=t("__VUE_SSR_SETTERS__",n=>dn=n)}const $t=e=>{const t=se;return Qt(e),e.scope.on(),()=>{e.scope.off(),Qt(t)}},ps=()=>{se&&se.scope.off(),Qt(null)};function Ho(e){return e.vnode.shapeFlag&4}let dn=!1;function pc(e,t=!1){t&&tr(t);const{props:n,children:r}=e.vnode,s=Ho(e);Ya(e,n,s,t),Za(e,r);const o=s?gc(e,t):void 0;return t&&tr(!1),o}function gc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=fo(new Proxy(e.ctx,za));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?_c(e):null,o=$t(e);st();const i=Le(r,e,0,[e.props,s]);if(ot(),o(),Ks(i)){if(i.then(ps,ps),t)return i.then(a=>{gs(e,a,t)}).catch(a=>{on(a,e,0)});e.asyncDep=i}else gs(e,i,t)}else zo(e,t)}function gs(e,t,n){x(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=po(t)),zo(e,n)}let ms;function zo(e,t,n){const r=e.type;if(!e.render){if(!t&&ms&&!r.render){const s=r.template||Tr(e).template;if(s){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,f=Q(Q({isCustomElement:o,delimiters:a},i),l);r.render=ms(s,f)}}e.render=r.render||de}{const s=$t(e);st();try{ja(e)}finally{ot(),s()}}}function mc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ae(e,"get","$attrs"),t[n]}}))}function _c(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return mc(e)},slots:e.slots,emit:e.emit,expose:t}}function Mr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(po(fo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in At)return At[n](e)},has(t,n){return n in t||n in At}}))}function bc(e){return x(e)&&"__vccOpts"in e}const wc=(e,t)=>ca(e,t,dn),yc="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const vc="http://www.w3.org/2000/svg",Ec="http://www.w3.org/1998/Math/MathML",$e=typeof document<"u"?document:null,_s=$e&&$e.createElement("template"),Ic={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?$e.createElementNS(vc,e):t==="mathml"?$e.createElementNS(Ec,e):$e.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>$e.createTextNode(e),createComment:e=>$e.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$e.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{_s.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=_s.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Sc=Symbol("_vtc");function Cc(e,t,n){const r=e[Sc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const bs=Symbol("_vod"),Ac=Symbol("_vsh"),Tc=Symbol(""),Oc=/(^|;)\s*display\s*:/;function xc(e,t,n){const r=e.style,s=X(n);let o=!1;if(n&&!s){if(t)if(X(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Gt(r,a,"")}else for(const i in t)n[i]==null&&Gt(r,i,"");for(const i in n)i==="display"&&(o=!0),Gt(r,i,n[i])}else if(s){if(t!==n){const i=r[Tc];i&&(n+=";"+i),r.cssText=n,o=Oc.test(n)}}else t&&e.removeAttribute("style");bs in e&&(e[bs]=o?r.display:"",e[Ac]&&(r.display="none"))}const ws=/\s*!important$/;function Gt(e,t,n){if(O(n))n.forEach(r=>Gt(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Mc(e,t);ws.test(n)?e.setProperty(_t(r),n.replace(ws,""),"important"):e[r]=n}}const ys=["Webkit","Moz","ms"],Pn={};function Mc(e,t){const n=Pn[t];if(n)return n;let r=ht(t);if(r!=="filter"&&r in e)return Pn[t]=r;r=Gs(r);for(let s=0;s<ys.length;s++){const o=ys[s]+r;if(o in e)return Pn[t]=o}return t}const vs="http://www.w3.org/1999/xlink";function Dc(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(vs,t.slice(6,t.length)):e.setAttributeNS(vs,t,n);else{const o=Li(t);n==null||o&&!Ys(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Pc(e,t,n,r,s,o,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const f=a==="OPTION"?e.getAttribute("value")||"":e.value,d=n??"";(f!==d||!("_value"in e))&&(e.value=d),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Ys(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Rc(e,t,n,r){e.addEventListener(t,n,r)}function Nc(e,t,n,r){e.removeEventListener(t,n,r)}const Es=Symbol("_vei");function $c(e,t,n,r,s=null){const o=e[Es]||(e[Es]={}),i=o[t];if(r&&i)i.value=r;else{const[a,l]=kc(t);if(r){const f=o[t]=Fc(r,s);Rc(e,a,f,l)}else i&&(Nc(e,a,i,l),o[t]=void 0)}}const Is=/(?:Once|Passive|Capture)$/;function kc(e){let t;if(Is.test(e)){t={};let r;for(;r=e.match(Is);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_t(e.slice(2)),t]}let Rn=0;const Lc=Promise.resolve(),Bc=()=>Rn||(Lc.then(()=>Rn=0),Rn=Date.now());function Fc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;me(Hc(r,n.value),t,5,[r])};return n.value=e,n.attached=Bc(),n}function Hc(e,t){if(O(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Ss=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,zc=(e,t,n,r,s,o,i,a,l)=>{const f=s==="svg";t==="class"?Cc(e,r,f):t==="style"?xc(e,n,r):tn(t)?ur(t)||$c(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jc(e,t,r,f))?Pc(e,t,r,o,i,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Dc(e,t,r,f))};function jc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ss(t)&&x(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ss(t)&&X(n)?!1:t in e}const Vc=Q({patchProp:zc},Ic);let Cs;function Uc(){return Cs||(Cs=tc(Vc))}const Kc=(...e)=>{const t=Uc().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=qc(r);if(!s)return;const o=t._component;!x(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,Wc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function Wc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function qc(e){return X(e)?document.querySelector(e):e}const Gc="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e",Jc=e=>(yo("data-v-a9bae2ec"),e=e(),vo(),e),Yc={class:"greetings"},Xc={class:"green"},Qc=Jc(()=>D("h3",null,[R(" You’ve successfully created a project with "),D("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite"),R(" + "),D("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),R(". ")],-1)),Zc=Ar({__name:"HelloWorld",props:{msg:{}},setup(e){return(t,n)=>(Se(),De("div",Yc,[D("h1",Xc,Bi(t.msg),1),Qc]))}}),ze=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},el=ze(Zc,[["__scopeId","data-v-a9bae2ec"]]),tl={},nl={class:"item"},rl={class:"details"};function sl(e,t){return Se(),De("div",nl,[D("i",null,[On(e.$slots,"icon",{},void 0,!0)]),D("div",rl,[D("h3",null,[On(e.$slots,"heading",{},void 0,!0)]),On(e.$slots,"default",{},void 0,!0)])])}const Et=ze(tl,[["render",sl],["__scopeId","data-v-fd0742eb"]]),ol={},il={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},al=D("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),cl=[al];function ll(e,t){return Se(),De("svg",il,cl)}const ul=ze(ol,[["render",ll]]),fl={},dl={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},hl=D("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),pl=[hl];function gl(e,t){return Se(),De("svg",dl,pl)}const ml=ze(fl,[["render",gl]]),_l={},bl={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},wl=D("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),yl=[wl];function vl(e,t){return Se(),De("svg",bl,yl)}const El=ze(_l,[["render",vl]]),Il={},Sl={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Cl=D("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),Al=[Cl];function Tl(e,t){return Se(),De("svg",Sl,Al)}const Ol=ze(Il,[["render",Tl]]),xl={},Ml={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Dl=D("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),Pl=[Dl];function Rl(e,t){return Se(),De("svg",Ml,Pl)}const Nl=ze(xl,[["render",Rl]]),$l=D("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),kl=D("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),Ll=D("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),Bl=D("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),Fl=D("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),Hl=D("a",{href:"https://on.cypress.io/component",target:"_blank",rel:"noopener"},"Cypress Component Testing",-1),zl=D("br",null,null,-1),jl=D("code",null,"README.md",-1),Vl=D("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),Ul=D("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),Kl=D("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),Wl=D("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),ql=D("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),Gl=D("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),Jl=D("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),Yl=D("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),Xl=D("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),Ql=D("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),Zl=Ar({__name:"TheWelcome",setup(e){return(t,n)=>(Se(),De(le,null,[W(Et,null,{icon:Z(()=>[W(ul)]),heading:Z(()=>[R("Documentation")]),default:Z(()=>[R(" Vue’s "),$l,R(" provides you with all information you need to get started. ")]),_:1}),W(Et,null,{icon:Z(()=>[W(ml)]),heading:Z(()=>[R("Tooling")]),default:Z(()=>[R(" This project is served and bundled with "),kl,R(". The recommended IDE setup is "),Ll,R(" + "),Bl,R(". If you need to test your components and web pages, check out "),Fl,R(" and "),Hl,R(". "),zl,R(" More instructions are available in "),jl,R(". ")]),_:1}),W(Et,null,{icon:Z(()=>[W(El)]),heading:Z(()=>[R("Ecosystem")]),default:Z(()=>[R(" Get official tools and libraries for your project: "),Vl,R(", "),Ul,R(", "),Kl,R(", and "),Wl,R(". If you need more resources, we suggest paying "),ql,R(" a visit. ")]),_:1}),W(Et,null,{icon:Z(()=>[W(Ol)]),heading:Z(()=>[R("Community")]),default:Z(()=>[R(" Got stuck? Ask your question on "),Gl,R(", our official Discord server, or "),Jl,R(". You should also subscribe to "),Yl,R(" and follow the official "),Xl,R(" twitter account for latest news in the Vue world. ")]),_:1}),W(Et,null,{icon:Z(()=>[W(Nl)]),heading:Z(()=>[R("Support Vue")]),default:Z(()=>[R(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),Ql,R(". ")]),_:1})],64))}});var As={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},eu=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],l=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},Vo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,l=s+2<e.length,f=l?e[s+2]:0,d=o>>2,y=(o&3)<<4|a>>4;let I=(a&15)<<2|f>>6,A=f&63;l||(A=64,i||(I=64)),r.push(n[d],n[y],n[I],n[A])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):eu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const y=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||f==null||y==null)throw new tu;const I=o<<2|a>>4;if(r.push(I),f!==64){const A=a<<4&240|f>>2;if(r.push(A),y!==64){const V=f<<6&192|y;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class tu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nu=function(e){const t=jo(e);return Vo.encodeByteArray(t,!0)},Uo=function(e){return nu(e).replace(/\./g,"")},ru=function(e){try{return Vo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=()=>su().__FIREBASE_DEFAULTS__,iu=()=>{if(typeof process>"u"||typeof As>"u")return;const e=As.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},au=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ru(e[1]);return t&&JSON.parse(t)},cu=()=>{try{return ou()||iu()||au()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ko=()=>{var e;return(e=cu())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Wo(){try{return typeof indexedDB=="object"}catch{return!1}}function qo(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function uu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="FirebaseError";class bt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=fu,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?du(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new bt(s,a,r)}}function du(e,t){return e.replace(hu,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const hu=/\{\$([^}]+)}/g;function nr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(Ts(o)&&Ts(i)){if(!nr(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ts(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e){return e&&e._delegate?e._delegate:e}class He{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new lu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(mu(t))try{this.getOrInitializeService({instanceIdentifier:qe})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=qe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qe){return this.instances.has(t)}getOptions(t=qe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gu(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qe){return this.component?this.component.multipleInstances?t:qe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gu(e){return e===qe?void 0:e}function mu(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new pu(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(H||(H={}));const bu={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},wu=H.INFO,yu={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},vu=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=yu[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Eu{constructor(t){this.name=t,this._logLevel=wu,this._logHandler=vu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?bu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const Iu=(e,t)=>t.some(n=>e instanceof n);let Os,xs;function Su(){return Os||(Os=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cu(){return xs||(xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Go=new WeakMap,rr=new WeakMap,Jo=new WeakMap,Nn=new WeakMap,Pr=new WeakMap;function Au(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(xe(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Go.set(n,e)}).catch(()=>{}),Pr.set(t,e),t}function Tu(e){if(rr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});rr.set(e,t)}let sr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return rr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Jo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ou(e){sr=e(sr)}function xu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call($n(this),t,...n);return Jo.set(r,t.sort?t.sort():[t]),xe(r)}:Cu().includes(e)?function(...t){return e.apply($n(this),t),xe(Go.get(this))}:function(...t){return xe(e.apply($n(this),t))}}function Mu(e){return typeof e=="function"?xu(e):(e instanceof IDBTransaction&&Tu(e),Iu(e,Su())?new Proxy(e,sr):e)}function xe(e){if(e instanceof IDBRequest)return Au(e);if(Nn.has(e))return Nn.get(e);const t=Mu(e);return t!==e&&(Nn.set(e,t),Pr.set(t,e)),t}const $n=e=>Pr.get(e);function pn(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=xe(i);return r&&i.addEventListener("upgradeneeded",l=>{r(xe(i.result),l.oldVersion,l.newVersion,xe(i.transaction),l)}),n&&i.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),a}function kn(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),xe(n).then(()=>{})}const Du=["get","getKey","getAll","getAllKeys","count"],Pu=["put","add","delete","clear"],Ln=new Map;function Ms(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ln.get(t))return Ln.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Pu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Du.includes(n)))return;const o=async function(i,...a){const l=this.transaction(i,s?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&l.done]))[0]};return Ln.set(t,o),o}Ou(e=>({...e,get:(t,n,r)=>Ms(t,n)||e.get(t,n,r),has:(t,n)=>!!Ms(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const or="@firebase/app",Ds="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new Eu("@firebase/app"),$u="@firebase/app-compat",ku="@firebase/analytics-compat",Lu="@firebase/analytics",Bu="@firebase/app-check-compat",Fu="@firebase/app-check",Hu="@firebase/auth",zu="@firebase/auth-compat",ju="@firebase/database",Vu="@firebase/database-compat",Uu="@firebase/functions",Ku="@firebase/functions-compat",Wu="@firebase/installations",qu="@firebase/installations-compat",Gu="@firebase/messaging",Ju="@firebase/messaging-compat",Yu="@firebase/performance",Xu="@firebase/performance-compat",Qu="@firebase/remote-config",Zu="@firebase/remote-config-compat",ef="@firebase/storage",tf="@firebase/storage-compat",nf="@firebase/firestore",rf="@firebase/firestore-compat",sf="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="[DEFAULT]",of={[or]:"fire-core",[$u]:"fire-core-compat",[Lu]:"fire-analytics",[ku]:"fire-analytics-compat",[Fu]:"fire-app-check",[Bu]:"fire-app-check-compat",[Hu]:"fire-auth",[zu]:"fire-auth-compat",[ju]:"fire-rtdb",[Vu]:"fire-rtdb-compat",[Uu]:"fire-fn",[Ku]:"fire-fn-compat",[Wu]:"fire-iid",[qu]:"fire-iid-compat",[Gu]:"fire-fcm",[Ju]:"fire-fcm-compat",[Yu]:"fire-perf",[Xu]:"fire-perf-compat",[Qu]:"fire-rc",[Zu]:"fire-rc-compat",[ef]:"fire-gcs",[tf]:"fire-gcs-compat",[nf]:"fire-fst",[rf]:"fire-fst-compat","fire-js":"fire-js",[sf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Map,af=new Map,ar=new Map;function Ps(e,t){try{e.container.addComponent(t)}catch(n){Ze.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function et(e){const t=e.name;if(ar.has(t))return Ze.debug(`There were multiple attempts to register component ${t}.`),!1;ar.set(t,e);for(const n of Zt.values())Ps(n,e);for(const n of af.values())Ps(n,e);return!0}function Rr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Be=new hn("app","Firebase",cf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Be.create("app-deleted",{appName:this._name})}}function Yo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ir,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Be.create("bad-app-name",{appName:String(s)});if(n||(n=Ko()),!n)throw Be.create("no-options");const o=Zt.get(s);if(o){if(nr(n,o.options)&&nr(r,o.config))return o;throw Be.create("duplicate-app",{appName:s})}const i=new _u(s);for(const l of ar.values())i.addComponent(l);const a=new lf(n,r,i);return Zt.set(s,a),a}function uf(e=ir){const t=Zt.get(e);if(!t&&e===ir&&Ko())return Yo();if(!t)throw Be.create("no-app",{appName:e});return t}function Fe(e,t,n){var r;let s=(r=of[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${t}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ze.warn(a.join(" "));return}et(new He(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="firebase-heartbeat-database",df=1,Rt="firebase-heartbeat-store";let Bn=null;function Xo(){return Bn||(Bn=pn(ff,df,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Rt)}catch(n){console.warn(n)}}}}).catch(e=>{throw Be.create("idb-open",{originalErrorMessage:e.message})})),Bn}async function hf(e){try{const n=(await Xo()).transaction(Rt),r=await n.objectStore(Rt).get(Qo(e));return await n.done,r}catch(t){if(t instanceof bt)Ze.warn(t.message);else{const n=Be.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ze.warn(n.message)}}}async function Rs(e,t){try{const r=(await Xo()).transaction(Rt,"readwrite");await r.objectStore(Rt).put(t,Qo(e)),await r.done}catch(n){if(n instanceof bt)Ze.warn(n.message);else{const r=Be.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ze.warn(r.message)}}}function Qo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=1024,gf=30*24*60*60*1e3;class mf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ns();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=gf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ns(),{heartbeatsToSend:r,unsentEntries:s}=_f(this._heartbeatsCache.heartbeats),o=Uo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ns(){return new Date().toISOString().substring(0,10)}function _f(e,t=pf){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),$s(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$s(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wo()?qo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hf(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function $s(e){return Uo(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(e){et(new He("platform-logger",t=>new Ru(t),"PRIVATE")),et(new He("heartbeat",t=>new mf(t),"PRIVATE")),Fe(or,Ds,e),Fe(or,Ds,"esm2017"),Fe("fire-js","")}wf("");var yf="firebase",vf="10.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe(yf,vf,"app");const Zo="@firebase/installations",Nr="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=1e4,ti=`w:${Nr}`,ni="FIS_v2",Ef="https://firebaseinstallations.googleapis.com/v1",If=60*60*1e3,Sf="installations",Cf="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},tt=new hn(Sf,Cf,Af);function ri(e){return e instanceof bt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si({projectId:e}){return`${Ef}/projects/${e}/installations`}function oi(e){return{token:e.token,requestStatus:2,expiresIn:Of(e.expiresIn),creationTime:Date.now()}}async function ii(e,t){const r=(await t.json()).error;return tt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ai({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Tf(e,{refreshToken:t}){const n=ai(e);return n.append("Authorization",xf(t)),n}async function ci(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Of(e){return Number(e.replace("s","000"))}function xf(e){return`${ni} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=si(e),s=ai(e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={fid:n,authVersion:ni,appId:e.appId,sdkVersion:ti},a={method:"POST",headers:s,body:JSON.stringify(i)},l=await ci(()=>fetch(r,a));if(l.ok){const f=await l.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:oi(f.authToken)}}else throw await ii("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=/^[cdef][\w-]{21}$/,cr="";function Rf(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Nf(e);return Pf.test(n)?n:cr}catch{return cr}}function Nf(e){return Df(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Map;function fi(e,t){const n=gn(e);di(n,t),$f(n,t)}function di(e,t){const n=ui.get(e);if(n)for(const r of n)r(t)}function $f(e,t){const n=kf();n&&n.postMessage({key:e,fid:t}),Lf()}let Je=null;function kf(){return!Je&&"BroadcastChannel"in self&&(Je=new BroadcastChannel("[Firebase] FID Change"),Je.onmessage=e=>{di(e.data.key,e.data.fid)}),Je}function Lf(){ui.size===0&&Je&&(Je.close(),Je=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="firebase-installations-database",Ff=1,nt="firebase-installations-store";let Fn=null;function $r(){return Fn||(Fn=pn(Bf,Ff,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(nt)}}})),Fn}async function en(e,t){const n=gn(e),s=(await $r()).transaction(nt,"readwrite"),o=s.objectStore(nt),i=await o.get(n);return await o.put(t,n),await s.done,(!i||i.fid!==t.fid)&&fi(e,t.fid),t}async function hi(e){const t=gn(e),r=(await $r()).transaction(nt,"readwrite");await r.objectStore(nt).delete(t),await r.done}async function mn(e,t){const n=gn(e),s=(await $r()).transaction(nt,"readwrite"),o=s.objectStore(nt),i=await o.get(n),a=t(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&fi(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(e){let t;const n=await mn(e.appConfig,r=>{const s=Hf(r),o=zf(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===cr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Hf(e){const t=e||{fid:Rf(),registrationStatus:0};return pi(t)}function zf(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(tt.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=jf(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Vf(e)}:{installationEntry:t}}async function jf(e,t){try{const n=await Mf(e,t);return en(e.appConfig,n)}catch(n){throw ri(n)&&n.customData.serverCode===409?await hi(e.appConfig):await en(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Vf(e){let t=await ks(e.appConfig);for(;t.registrationStatus===1;)await li(100),t=await ks(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await kr(e);return r||n}return t}function ks(e){return mn(e,t=>{if(!t)throw tt.create("installation-not-found");return pi(t)})}function pi(e){return Uf(e)?{fid:e.fid,registrationStatus:0}:e}function Uf(e){return e.registrationStatus===1&&e.registrationTime+ei<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kf({appConfig:e,heartbeatServiceProvider:t},n){const r=Wf(e,n),s=Tf(e,n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={installation:{sdkVersion:ti,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},l=await ci(()=>fetch(r,a));if(l.ok){const f=await l.json();return oi(f)}else throw await ii("Generate Auth Token",l)}function Wf(e,{fid:t}){return`${si(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(e,t=!1){let n;const r=await mn(e.appConfig,o=>{if(!gi(o))throw tt.create("not-registered");const i=o.authToken;if(!t&&Jf(i))return o;if(i.requestStatus===1)return n=qf(e,t),o;{if(!navigator.onLine)throw tt.create("app-offline");const a=Xf(o);return n=Gf(e,a),a}});return n?await n:r.authToken}async function qf(e,t){let n=await Ls(e.appConfig);for(;n.authToken.requestStatus===1;)await li(100),n=await Ls(e.appConfig);const r=n.authToken;return r.requestStatus===0?Lr(e,t):r}function Ls(e){return mn(e,t=>{if(!gi(t))throw tt.create("not-registered");const n=t.authToken;return Qf(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Gf(e,t){try{const n=await Kf(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await en(e.appConfig,r),n}catch(n){if(ri(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hi(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await en(e.appConfig,r)}throw n}}function gi(e){return e!==void 0&&e.registrationStatus===2}function Jf(e){return e.requestStatus===2&&!Yf(e)}function Yf(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+If}function Xf(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Qf(e){return e.requestStatus===1&&e.requestTime+ei<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zf(e){const t=e,{installationEntry:n,registrationPromise:r}=await kr(t);return r?r.catch(console.error):Lr(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ed(e,t=!1){const n=e;return await td(n),(await Lr(n,t)).token}async function td(e){const{registrationPromise:t}=await kr(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(e){if(!e||!e.options)throw Hn("App Configuration");if(!e.name)throw Hn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Hn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Hn(e){return tt.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="installations",rd="installations-internal",sd=e=>{const t=e.getProvider("app").getImmediate(),n=nd(t),r=Rr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},od=e=>{const t=e.getProvider("app").getImmediate(),n=Rr(t,mi).getImmediate();return{getId:()=>Zf(n),getToken:s=>ed(n,s)}};function id(){et(new He(mi,sd,"PUBLIC")),et(new He(rd,od,"PRIVATE"))}id();Fe(Zo,Nr);Fe(Zo,Nr,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="/firebase-messaging-sw.js",cd="/firebase-cloud-messaging-push-scope",_i="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ld="https://fcmregistrations.googleapis.com/v1",bi="google.c.a.c_id",ud="google.c.a.c_l",fd="google.c.a.ts",dd="google.c.a.e";var Bs;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Bs||(Bs={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Nt;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Nt||(Nt={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function hd(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="fcm_token_details_db",pd=5,Fs="fcm_token_object_Store";async function gd(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(zn))return null;let t=null;return(await pn(zn,pd,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(Fs))return;const l=i.objectStore(Fs),f=await l.index("fcmSenderId").get(e);if(await l.clear(),!!f){if(s===2){const d=f;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(a=d.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:Te(d.vapidKey)}}}else if(s===3){const d=f;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Te(d.auth),p256dh:Te(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Te(d.vapidKey)}}}else if(s===4){const d=f;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Te(d.auth),p256dh:Te(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Te(d.vapidKey)}}}}}})).close(),await kn(zn),await kn("fcm_vapid_details_db"),await kn("undefined"),md(t)?t:null}function md(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="firebase-messaging-database",bd=1,rt="firebase-messaging-store";let jn=null;function Br(){return jn||(jn=pn(_d,bd,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(rt)}}})),jn}async function wi(e){const t=Hr(e),r=await(await Br()).transaction(rt).objectStore(rt).get(t);if(r)return r;{const s=await gd(e.appConfig.senderId);if(s)return await Fr(e,s),s}}async function Fr(e,t){const n=Hr(e),s=(await Br()).transaction(rt,"readwrite");return await s.objectStore(rt).put(t,n),await s.done,t}async function wd(e){const t=Hr(e),r=(await Br()).transaction(rt,"readwrite");await r.objectStore(rt).delete(t),await r.done}function Hr({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},te=new hn("messaging","Messaging",yd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(e,t){const n=await jr(e),r=vi(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(zr(e.appConfig),s)).json()}catch(i){throw te.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw te.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw te.create("token-subscribe-no-token");return o.token}async function Ed(e,t){const n=await jr(e),r=vi(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${zr(e.appConfig)}/${t.token}`,s)).json()}catch(i){throw te.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw te.create("token-update-failed",{errorInfo:i})}if(!o.token)throw te.create("token-update-no-token");return o.token}async function yi(e,t){const r={method:"DELETE",headers:await jr(e)};try{const o=await(await fetch(`${zr(e.appConfig)}/${t}`,r)).json();if(o.error){const i=o.error.message;throw te.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw te.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function zr({projectId:e}){return`${ld}/projects/${e}/registrations`}async function jr({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function vi({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==_i&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=7*24*60*60*1e3;async function Sd(e){const t=await Td(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Te(t.getKey("auth")),p256dh:Te(t.getKey("p256dh"))},r=await wi(e.firebaseDependencies);if(r){if(Od(r.subscriptionOptions,n))return Date.now()>=r.createTime+Id?Ad(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await yi(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Hs(e.firebaseDependencies,n)}else return Hs(e.firebaseDependencies,n)}async function Cd(e){const t=await wi(e.firebaseDependencies);t&&(await yi(e.firebaseDependencies,t.token),await wd(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Ad(e,t){try{const n=await Ed(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Fr(e.firebaseDependencies,r),n}catch(n){throw await Cd(e),n}}async function Hs(e,t){const r={token:await vd(e,t),createTime:Date.now(),subscriptionOptions:t};return await Fr(e,r),r.token}async function Td(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:hd(t)})}function Od(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&s&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return xd(t,e),Md(t,e),Dd(t,e),t}function xd(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const o=t.notification.icon;o&&(e.notification.icon=o)}function Md(e,t){t.data&&(e.data=t.data)}function Dd(e,t){var n,r,s,o,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=t.notification)===null||o===void 0?void 0:o.click_action;a&&(e.fcmOptions.link=a);const l=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(e){return typeof e=="object"&&!!e&&bi in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ei("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Ei("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Ei(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(e){if(!e||!e.options)throw Vn("App Configuration Object");if(!e.name)throw Vn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Vn(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Vn(e){return te.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=Rd(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $d(e){try{e.swRegistration=await navigator.serviceWorker.register(ad,{scope:cd}),e.swRegistration.update().catch(()=>{})}catch(t){throw te.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kd(e,t){if(!t&&!e.swRegistration&&await $d(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw te.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ld(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=_i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(e,t){if(!navigator)throw te.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw te.create("permission-blocked");return await Ld(e,t==null?void 0:t.vapidKey),await kd(e,t==null?void 0:t.serviceWorkerRegistration),Sd(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(e,t,n){const r=Fd(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[bi],message_name:n[ud],message_time:n[fd],message_device_time:Math.floor(Date.now()/1e3)})}function Fd(e){switch(e){case Nt.NOTIFICATION_CLICKED:return"notification_open";case Nt.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hd(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Nt.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(zs(n)):e.onMessageHandler.next(zs(n)));const r=n.data;Pd(r)&&r[dd]==="1"&&await Bd(e,n.messageType,r)}const js="@firebase/messaging",Vs="0.12.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=e=>{const t=new Nd(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Hd(t,n)),t},jd=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Ii(t,r)}};function Vd(){et(new He("messaging",zd,"PUBLIC")),et(new He("messaging-internal",jd,"PRIVATE")),Fe(js,Vs),Fe(js,Vs,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ud(){try{await qo()}catch{return!1}return typeof window<"u"&&Wo()&&uu()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(e,t){if(!navigator)throw te.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(e=uf()){return Ud().then(t=>{if(!t)throw te.create("unsupported-browser")},t=>{throw te.create("indexed-db-unsupported")}),Rr(Dr(e),"messaging").getImmediate()}async function qd(e,t){return e=Dr(e),Ii(e,t)}function Gd(e,t){return e=Dr(e),Kd(e,t)}Vd();const Jd=e=>(yo("data-v-650f757b"),e=e(),vo(),e),Yd=Jd(()=>D("img",{alt:"Vue logo",class:"logo",src:Gc,width:"125",height:"125"},null,-1)),Xd={class:"wrapper"},Qd=Ar({__name:"App",setup(e){const t={apiKey:"AIzaSyBCwKyqnxpHAdezdI-bQVQkP6PrSUrFNoA",authDomain:"pushvue-ca59f.firebaseapp.com",projectId:"pushvue-ca59f",storageBucket:"pushvue-ca59f.appspot.com",messagingSenderId:"945047635984",appId:"1:945047635984:web:2478af7c035d9327522295",measurementId:"G-WSDRNKP2S5"},n=Yo(t),r=Wd(n);return Notification.requestPermission().then(s=>{s==="granted"?(qd(r,{vapidKey:t.apiKey}).then(o=>{o?console.log("Firebase Token",o):console.log("No registration token available. Request permission to generate one.")}).catch(o=>{console.log("An error occurred while retrieving token. ",o)}),Gd(r,o=>{console.log("Message received. ",o)})):console.log("Unable to get permission to notify.")}),(s,o)=>(Se(),De(le,null,[D("header",null,[Yd,D("div",Xd,[W(el,{msg:"You did it!"})])]),D("main",null,[W(Zl)])],64))}}),Zd=ze(Qd,[["__scopeId","data-v-650f757b"]]);Kc(Zd).mount("#app");
