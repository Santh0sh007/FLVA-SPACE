var lx=Object.defineProperty;var cx=(n,e,t)=>e in n?lx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var gr=(n,e,t)=>cx(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gd(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ft={},Ga=[],cr=()=>{},t_=()=>!1,du=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),_d=n=>n.startsWith("onUpdate:"),Gn=Object.assign,vd=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ux=Object.prototype.hasOwnProperty,Et=(n,e)=>ux.call(n,e),nt=Array.isArray,Wo=n=>Cl(n)==="[object Map]",fx=n=>Cl(n)==="[object Set]",Pp=n=>Cl(n)==="[object Date]",at=n=>typeof n=="function",Mn=n=>typeof n=="string",vs=n=>typeof n=="symbol",zt=n=>n!==null&&typeof n=="object",n_=n=>(zt(n)||at(n))&&at(n.then)&&at(n.catch),hx=Object.prototype.toString,Cl=n=>hx.call(n),dx=n=>Cl(n).slice(8,-1),px=n=>Cl(n)==="[object Object]",xd=n=>Mn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Xo=gd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pu=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},mx=/-\w/g,xs=pu(n=>n.replace(mx,e=>e.slice(1).toUpperCase())),gx=/\B([A-Z])/g,ca=pu(n=>n.replace(gx,"-$1").toLowerCase()),i_=pu(n=>n.charAt(0).toUpperCase()+n.slice(1)),Iu=pu(n=>n?`on${i_(n)}`:""),ds=(n,e)=>!Object.is(n,e),Lu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},r_=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},_x=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Dp;const mu=()=>Dp||(Dp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sd(n){if(nt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Mn(i)?Mx(i):Sd(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Mn(n)||zt(n))return n}const vx=/;(?![^(]*\))/g,xx=/:([^]+)/,Sx=/\/\*[^]*?\*\//g;function Mx(n){const e={};return n.replace(Sx,"").split(vx).forEach(t=>{if(t){const i=t.split(xx);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Md(n){let e="";if(Mn(n))e=n;else if(nt(n))for(let t=0;t<n.length;t++){const i=Md(n[t]);i&&(e+=i+" ")}else if(zt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const yx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ex=gd(yx);function s_(n){return!!n||n===""}function bx(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=yd(n[i],e[i]);return t}function yd(n,e){if(n===e)return!0;let t=Pp(n),i=Pp(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=vs(n),i=vs(e),t||i)return n===e;if(t=nt(n),i=nt(e),t||i)return t&&i?bx(n,e):!1;if(t=zt(n),i=zt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!yd(n[a],e[a]))return!1}}return String(n)===String(e)}/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ri;class Tx{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=ri,!e&&ri&&(this.index=(ri.scopes||(ri.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ri;try{return ri=this,e()}finally{ri=t}}}on(){++this._on===1&&(this.prevScope=ri,ri=this)}off(){this._on>0&&--this._on===0&&(ri=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function wx(){return ri}let Nt;const Uu=new WeakSet;class a_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ri&&ri.active&&ri.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Uu.has(this)&&(Uu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||l_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ip(this),c_(this);const e=Nt,t=Vi;Nt=this,Vi=!0;try{return this.fn()}finally{u_(this),Nt=e,Vi=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Td(e);this.deps=this.depsTail=void 0,Ip(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Uu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hf(this)&&this.run()}get dirty(){return Hf(this)}}let o_=0,Yo,qo;function l_(n,e=!1){if(n.flags|=8,e){n.next=qo,qo=n;return}n.next=Yo,Yo=n}function Ed(){o_++}function bd(){if(--o_>0)return;if(qo){let e=qo;for(qo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Yo;){let e=Yo;for(Yo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function c_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function u_(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Td(i),Ax(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Hf(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(f_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function f_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===fl)||(n.globalVersion=fl,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Hf(n))))return;n.flags|=2;const e=n.dep,t=Nt,i=Vi;Nt=n,Vi=!0;try{c_(n);const r=n.fn(n._value);(e.version===0||ds(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Nt=t,Vi=i,u_(n),n.flags&=-3}}function Td(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Td(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ax(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Vi=!0;const h_=[];function Fr(){h_.push(Vi),Vi=!1}function Or(){const n=h_.pop();Vi=n===void 0?!0:n}function Ip(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Nt;Nt=void 0;try{e()}finally{Nt=t}}}let fl=0;class Rx{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Nt||!Vi||Nt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Nt)t=this.activeLink=new Rx(Nt,this),Nt.deps?(t.prevDep=Nt.depsTail,Nt.depsTail.nextDep=t,Nt.depsTail=t):Nt.deps=Nt.depsTail=t,d_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Nt.depsTail,t.nextDep=void 0,Nt.depsTail.nextDep=t,Nt.depsTail=t,Nt.deps===t&&(Nt.deps=i)}return t}trigger(e){this.version++,fl++,this.notify(e)}notify(e){Ed();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bd()}}}function d_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)d_(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Gf=new WeakMap,Zs=Symbol(""),Vf=Symbol(""),hl=Symbol("");function On(n,e,t){if(Vi&&Nt){let i=Gf.get(n);i||Gf.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new wd),r.map=i,r.key=t),r.track()}}function Cr(n,e,t,i,r,s){const a=Gf.get(n);if(!a){fl++;return}const o=l=>{l&&l.trigger()};if(Ed(),e==="clear")a.forEach(o);else{const l=nt(n),c=l&&xd(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===hl||!vs(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(hl)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Zs)),Wo(n)&&o(a.get(Vf)));break;case"delete":l||(o(a.get(Zs)),Wo(n)&&o(a.get(Vf)));break;case"set":Wo(n)&&o(a.get(Zs));break}}bd()}function ma(n){const e=yt(n);return e===n?e:(On(e,"iterate",hl),Wi(n)?e:e.map(Br))}function Ad(n){return On(n=yt(n),"iterate",hl),n}function ns(n,e){return Ss(n)?dl(Va(n)?Br(e):e):Br(e)}const Cx={__proto__:null,[Symbol.iterator](){return Nu(this,Symbol.iterator,n=>ns(this,n))},concat(...n){return ma(this).concat(...n.map(e=>nt(e)?ma(e):e))},entries(){return Nu(this,"entries",n=>(n[1]=ns(this,n[1]),n))},every(n,e){return _r(this,"every",n,e,void 0,arguments)},filter(n,e){return _r(this,"filter",n,e,t=>t.map(i=>ns(this,i)),arguments)},find(n,e){return _r(this,"find",n,e,t=>ns(this,t),arguments)},findIndex(n,e){return _r(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return _r(this,"findLast",n,e,t=>ns(this,t),arguments)},findLastIndex(n,e){return _r(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return _r(this,"forEach",n,e,void 0,arguments)},includes(...n){return Fu(this,"includes",n)},indexOf(...n){return Fu(this,"indexOf",n)},join(n){return ma(this).join(n)},lastIndexOf(...n){return Fu(this,"lastIndexOf",n)},map(n,e){return _r(this,"map",n,e,void 0,arguments)},pop(){return xo(this,"pop")},push(...n){return xo(this,"push",n)},reduce(n,...e){return Lp(this,"reduce",n,e)},reduceRight(n,...e){return Lp(this,"reduceRight",n,e)},shift(){return xo(this,"shift")},some(n,e){return _r(this,"some",n,e,void 0,arguments)},splice(...n){return xo(this,"splice",n)},toReversed(){return ma(this).toReversed()},toSorted(n){return ma(this).toSorted(n)},toSpliced(...n){return ma(this).toSpliced(...n)},unshift(...n){return xo(this,"unshift",n)},values(){return Nu(this,"values",n=>ns(this,n))}};function Nu(n,e,t){const i=Ad(n),r=i[e]();return i!==n&&!Wi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Px=Array.prototype;function _r(n,e,t,i,r,s){const a=Ad(n),o=a!==n&&!Wi(n),l=a[e];if(l!==Px[e]){const f=l.apply(n,s);return o?Br(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,ns(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Lp(n,e,t,i){const r=Ad(n);let s=t;return r!==n&&(Wi(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,ns(n,o),l,n)}),r[e](s,...i)}function Fu(n,e,t){const i=yt(n);On(i,"iterate",hl);const r=i[e](...t);return(r===-1||r===!1)&&Dd(t[0])?(t[0]=yt(t[0]),i[e](...t)):r}function xo(n,e,t=[]){Fr(),Ed();const i=yt(n)[e].apply(n,t);return bd(),Or(),i}const Dx=gd("__proto__,__v_isRef,__isVue"),p_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(vs));function Ix(n){vs(n)||(n=String(n));const e=yt(this);return On(e,"has",n),e.hasOwnProperty(n)}class m_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Gx:x_:s?v_:__).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=nt(e);if(!r){let l;if(a&&(l=Cx[t]))return l;if(t==="hasOwnProperty")return Ix}const o=Reflect.get(e,t,kn(e)?e:i);if((vs(t)?p_.has(t):Dx(t))||(r||On(e,"get",t),s))return o;if(kn(o)){const l=a&&xd(t)?o:o.value;return r&&zt(l)?Xf(l):l}return zt(o)?r?Xf(o):Cd(o):o}}class g_ extends m_{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=nt(e)&&xd(t);if(!this._isShallow){const c=Ss(s);if(!Wi(i)&&!Ss(i)&&(s=yt(s),i=yt(i)),!a&&kn(s)&&!kn(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:Et(e,t),l=Reflect.set(e,t,i,kn(e)?e:r);return e===yt(r)&&(o?ds(i,s)&&Cr(e,"set",t,i):Cr(e,"add",t,i)),l}deleteProperty(e,t){const i=Et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Cr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!vs(t)||!p_.has(t))&&On(e,"has",t),i}ownKeys(e){return On(e,"iterate",nt(e)?"length":Zs),Reflect.ownKeys(e)}}class Lx extends m_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ux=new g_,Nx=new Lx,Fx=new g_(!0);const Wf=n=>n,Ol=n=>Reflect.getPrototypeOf(n);function Ox(n,e,t){return function(...i){const r=this.__v_raw,s=yt(r),a=Wo(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Wf:e?dl:Br;return!e&&On(s,"iterate",l?Vf:Zs),Gn(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Bl(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Bx(n,e){const t={get(r){const s=this.__v_raw,a=yt(s),o=yt(r);n||(ds(r,o)&&On(a,"get",r),On(a,"get",o));const{has:l}=Ol(a),c=e?Wf:n?dl:Br;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&On(yt(r),"iterate",Zs),r.size},has(r){const s=this.__v_raw,a=yt(s),o=yt(r);return n||(ds(r,o)&&On(a,"has",r),On(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=yt(o),c=e?Wf:n?dl:Br;return!n&&On(l,"iterate",Zs),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Gn(t,n?{add:Bl("add"),set:Bl("set"),delete:Bl("delete"),clear:Bl("clear")}:{add(r){!e&&!Wi(r)&&!Ss(r)&&(r=yt(r));const s=yt(this);return Ol(s).has.call(s,r)||(s.add(r),Cr(s,"add",r,r)),this},set(r,s){!e&&!Wi(s)&&!Ss(s)&&(s=yt(s));const a=yt(this),{has:o,get:l}=Ol(a);let c=o.call(a,r);c||(r=yt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?ds(s,u)&&Cr(a,"set",r,s):Cr(a,"add",r,s),this},delete(r){const s=yt(this),{has:a,get:o}=Ol(s);let l=a.call(s,r);l||(r=yt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Cr(s,"delete",r,void 0),c},clear(){const r=yt(this),s=r.size!==0,a=r.clear();return s&&Cr(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ox(r,n,e)}),t}function Rd(n,e){const t=Bx(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Et(t,r)&&r in i?t:i,r,s)}const zx={get:Rd(!1,!1)},kx={get:Rd(!1,!0)},Hx={get:Rd(!0,!1)};const __=new WeakMap,v_=new WeakMap,x_=new WeakMap,Gx=new WeakMap;function Vx(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wx(n){return n.__v_skip||!Object.isExtensible(n)?0:Vx(dx(n))}function Cd(n){return Ss(n)?n:Pd(n,!1,Ux,zx,__)}function Xx(n){return Pd(n,!1,Fx,kx,v_)}function Xf(n){return Pd(n,!0,Nx,Hx,x_)}function Pd(n,e,t,i,r){if(!zt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Wx(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function Va(n){return Ss(n)?Va(n.__v_raw):!!(n&&n.__v_isReactive)}function Ss(n){return!!(n&&n.__v_isReadonly)}function Wi(n){return!!(n&&n.__v_isShallow)}function Dd(n){return n?!!n.__v_raw:!1}function yt(n){const e=n&&n.__v_raw;return e?yt(e):n}function Yx(n){return!Et(n,"__v_skip")&&Object.isExtensible(n)&&r_(n,"__v_skip",!0),n}const Br=n=>zt(n)?Cd(n):n,dl=n=>zt(n)?Xf(n):n;function kn(n){return n?n.__v_isRef===!0:!1}function qx(n){return $x(n,!1)}function $x(n,e){return kn(n)?n:new Kx(n,e)}class Kx{constructor(e,t){this.dep=new wd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:yt(e),this._value=t?e:Br(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Wi(e)||Ss(e);e=i?e:yt(e),ds(e,t)&&(this._rawValue=e,this._value=i?e:Br(e),this.dep.trigger())}}function jx(n){return kn(n)?n.value:n}const Zx={get:(n,e,t)=>e==="__v_raw"?n:jx(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return kn(r)&&!kn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function S_(n){return Va(n)?n:new Proxy(n,Zx)}class Jx{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fl-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Nt!==this)return l_(this,!0),!0}get value(){const e=this.dep.track();return f_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qx(n,e,t=!1){let i,r;return at(n)?i=n:(i=n.get,r=n.set),new Jx(i,r,t)}const zl={},Vc=new WeakMap;let zs;function eS(n,e=!1,t=zs){if(t){let i=Vc.get(t);i||Vc.set(t,i=[]),i.push(n)}}function tS(n,e,t=Ft){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=x=>r?x:Wi(x)||r===!1||r===0?rs(x,1):rs(x);let u,f,h,d,g=!1,_=!1;if(kn(n)?(f=()=>n.value,g=Wi(n)):Va(n)?(f=()=>c(n),g=!0):nt(n)?(_=!0,g=n.some(x=>Va(x)||Wi(x)),f=()=>n.map(x=>{if(kn(x))return x.value;if(Va(x))return c(x);if(at(x))return l?l(x,2):x()})):at(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Fr();try{h()}finally{Or()}}const x=zs;zs=u;try{return l?l(n,3,[d]):n(d)}finally{zs=x}}:f=cr,e&&r){const x=f,b=r===!0?1/0:r;f=()=>rs(x(),b)}const p=wx(),m=()=>{u.stop(),p&&p.active&&vd(p.effects,u)};if(s&&e){const x=e;e=(...b)=>{x(...b),m()}}let v=_?new Array(n.length).fill(zl):zl;const y=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const b=u.run();if(r||g||(_?b.some((A,T)=>ds(A,v[T])):ds(b,v))){h&&h();const A=zs;zs=u;try{const T=[b,v===zl?void 0:_&&v[0]===zl?[]:v,d];v=b,l?l(e,3,T):e(...T)}finally{zs=A}}}else u.run()};return o&&o(y),u=new a_(f),u.scheduler=a?()=>a(y,!1):y,d=x=>eS(x,!1,u),h=u.onStop=()=>{const x=Vc.get(u);if(x){if(l)l(x,4);else for(const b of x)b();Vc.delete(u)}},e?i?y(!0):v=u.run():a?a(y.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function rs(n,e=1/0,t){if(e<=0||!zt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,kn(n))rs(n.value,e,t);else if(nt(n))for(let i=0;i<n.length;i++)rs(n[i],e,t);else if(fx(n)||Wo(n))n.forEach(i=>{rs(i,e,t)});else if(px(n)){for(const i in n)rs(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&rs(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pl(n,e,t,i){try{return i?n(...i):n()}catch(r){gu(r,e,t)}}function hr(n,e,t,i){if(at(n)){const r=Pl(n,e,t,i);return r&&n_(r)&&r.catch(s=>{gu(s,e,t)}),r}if(nt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(hr(n[s],e,t,i));return r}}function gu(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ft;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Fr(),Pl(s,null,10,[n,l,c]),Or();return}}nS(n,t,r,i,a)}function nS(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const jn=[];let Zi=-1;const Wa=[];let is=null,Na=0;const M_=Promise.resolve();let Wc=null;function iS(n){const e=Wc||M_;return n?e.then(this?n.bind(this):n):e}function rS(n){let e=Zi+1,t=jn.length;for(;e<t;){const i=e+t>>>1,r=jn[i],s=pl(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Id(n){if(!(n.flags&1)){const e=pl(n),t=jn[jn.length-1];!t||!(n.flags&2)&&e>=pl(t)?jn.push(n):jn.splice(rS(e),0,n),n.flags|=1,y_()}}function y_(){Wc||(Wc=M_.then(b_))}function sS(n){nt(n)?Wa.push(...n):is&&n.id===-1?is.splice(Na+1,0,n):n.flags&1||(Wa.push(n),n.flags|=1),y_()}function Up(n,e,t=Zi+1){for(;t<jn.length;t++){const i=jn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;jn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function E_(n){if(Wa.length){const e=[...new Set(Wa)].sort((t,i)=>pl(t)-pl(i));if(Wa.length=0,is){is.push(...e);return}for(is=e,Na=0;Na<is.length;Na++){const t=is[Na];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}is=null,Na=0}}const pl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function b_(n){try{for(Zi=0;Zi<jn.length;Zi++){const e=jn[Zi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Pl(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Zi<jn.length;Zi++){const e=jn[Zi];e&&(e.flags&=-2)}Zi=-1,jn.length=0,E_(),Wc=null,(jn.length||Wa.length)&&b_()}}let rr=null,T_=null;function Xc(n){const e=rr;return rr=n,T_=n&&n.type.__scopeId||null,e}function aS(n,e=rr,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Xp(-1);const s=Xc(e);let a;try{a=n(...r)}finally{Xc(s),i._d&&Xp(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Cs(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Fr(),hr(l,t,8,[n.el,o,n,e]),Or())}}function oS(n,e){if(Jn){let t=Jn.provides;const i=Jn.parent&&Jn.parent.provides;i===t&&(t=Jn.provides=Object.create(i)),t[n]=e}}function bc(n,e,t=!1){const i=lM();if(i||Xa){let r=Xa?Xa._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&at(e)?e.call(i&&i.proxy):e}}const lS=Symbol.for("v-scx"),cS=()=>bc(lS);function Ou(n,e,t){return w_(n,e,t)}function w_(n,e,t=Ft){const{immediate:i,deep:r,flush:s,once:a}=t,o=Gn({},t),l=e&&i||!e&&s!=="post";let c;if(gl){if(s==="sync"){const d=cS();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=cr,d.resume=cr,d.pause=cr,d}}const u=Jn;o.call=(d,g,_)=>hr(d,u,g,_);let f=!1;s==="post"?o.scheduler=d=>{ii(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,g)=>{g?d():Id(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=tS(n,e,o);return gl&&(c?c.push(h):l&&h()),h}function uS(n,e,t){const i=this.proxy,r=Mn(n)?n.includes(".")?A_(i,n):()=>i[n]:n.bind(i,i);let s;at(e)?s=e:(s=e.handler,t=e);const a=Dl(this),o=w_(r,s.bind(i),t);return a(),o}function A_(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const fS=Symbol("_vte"),hS=n=>n.__isTeleport,dS=Symbol("_leaveCb");function Ld(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ld(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function R_(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Np(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Yc=new WeakMap;function $o(n,e,t,i,r=!1){if(nt(n)){n.forEach((_,p)=>$o(_,e&&(nt(e)?e[p]:e),t,i,r));return}if(Ko(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&$o(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?zd(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ft?o.refs={}:o.refs,f=o.setupState,h=yt(f),d=f===Ft?t_:_=>Np(u,_)?!1:Et(h,_),g=(_,p)=>!(p&&Np(u,p));if(c!=null&&c!==l){if(Fp(e),Mn(c))u[c]=null,d(c)&&(f[c]=null);else if(kn(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(at(l))Pl(l,o,12,[a,u]);else{const _=Mn(l),p=kn(l);if(_||p){const m=()=>{if(n.f){const v=_?d(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(r)nt(v)&&vd(v,s);else if(nt(v))v.includes(s)||v.push(s);else if(_)u[l]=[s],d(l)&&(f[l]=u[l]);else{const y=[s];g(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else _?(u[l]=a,d(l)&&(f[l]=a)):p&&(g(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const v=()=>{m(),Yc.delete(n)};v.id=-1,Yc.set(n,v),ii(v,t)}else Fp(n),m()}}}function Fp(n){const e=Yc.get(n);e&&(e.flags|=8,Yc.delete(n))}mu().requestIdleCallback;mu().cancelIdleCallback;const Ko=n=>!!n.type.__asyncLoader,C_=n=>n.type.__isKeepAlive;function pS(n,e){P_(n,"a",e)}function mS(n,e){P_(n,"da",e)}function P_(n,e,t=Jn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(_u(e,i,t),t){let r=t.parent;for(;r&&r.parent;)C_(r.parent.vnode)&&gS(i,e,t,r),r=r.parent}}function gS(n,e,t,i){const r=_u(e,n,i,!0);vu(()=>{vd(i[e],r)},t)}function _u(n,e,t=Jn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Fr();const o=Dl(t),l=hr(e,t,n,a);return o(),Or(),l});return i?r.unshift(s):r.push(s),s}}const Wr=n=>(e,t=Jn)=>{(!gl||n==="sp")&&_u(n,(...i)=>e(...i),t)},_S=Wr("bm"),Ud=Wr("m"),vS=Wr("bu"),xS=Wr("u"),SS=Wr("bum"),vu=Wr("um"),MS=Wr("sp"),yS=Wr("rtg"),ES=Wr("rtc");function bS(n,e=Jn){_u("ec",n,e)}const TS=Symbol.for("v-ndc"),Yf=n=>n?J_(n)?zd(n):Yf(n.parent):null,jo=Gn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Yf(n.parent),$root:n=>Yf(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>I_(n),$forceUpdate:n=>n.f||(n.f=()=>{Id(n.update)}),$nextTick:n=>n.n||(n.n=iS.bind(n.proxy)),$watch:n=>uS.bind(n)}),Bu=(n,e)=>n!==Ft&&!n.__isScriptSetup&&Et(n,e),wS={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Bu(i,e))return a[e]=1,i[e];if(r!==Ft&&Et(r,e))return a[e]=2,r[e];if(Et(s,e))return a[e]=3,s[e];if(t!==Ft&&Et(t,e))return a[e]=4,t[e];qf&&(a[e]=0)}}const c=jo[e];let u,f;if(c)return e==="$attrs"&&On(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Ft&&Et(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Et(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Bu(r,e)?(r[e]=t,!0):i!==Ft&&Et(i,e)?(i[e]=t,!0):Et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==Ft&&o[0]!=="$"&&Et(n,o)||Bu(e,o)||Et(s,o)||Et(i,o)||Et(jo,o)||Et(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Op(n){return nt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let qf=!0;function AS(n){const e=I_(n),t=n.proxy,i=n.ctx;qf=!1,e.beforeCreate&&Bp(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:v,destroyed:y,unmounted:x,render:b,renderTracked:A,renderTriggered:T,errorCaptured:S,serverPrefetch:E,expose:U,inheritAttrs:P,components:N,directives:H,filters:W}=e;if(c&&RS(c,i,null),a)for(const L in a){const X=a[L];at(X)&&(i[L]=X.bind(t))}if(r){const L=r.call(t,t);zt(L)&&(n.data=Cd(L))}if(qf=!0,s)for(const L in s){const X=s[L],K=at(X)?X.bind(t,t):at(X.get)?X.get.bind(t,t):cr,D=!at(X)&&at(X.set)?X.set.bind(t):cr,le=pM({get:K,set:D});Object.defineProperty(i,L,{enumerable:!0,configurable:!0,get:()=>le.value,set:ce=>le.value=ce})}if(o)for(const L in o)D_(o[L],i,t,L);if(l){const L=at(l)?l.call(t):l;Reflect.ownKeys(L).forEach(X=>{oS(X,L[X])})}u&&Bp(u,n,"c");function k(L,X){nt(X)?X.forEach(K=>L(K.bind(t))):X&&L(X.bind(t))}if(k(_S,f),k(Ud,h),k(vS,d),k(xS,g),k(pS,_),k(mS,p),k(bS,S),k(ES,A),k(yS,T),k(SS,v),k(vu,x),k(MS,E),nt(U))if(U.length){const L=n.exposed||(n.exposed={});U.forEach(X=>{Object.defineProperty(L,X,{get:()=>t[X],set:K=>t[X]=K,enumerable:!0})})}else n.exposed||(n.exposed={});b&&n.render===cr&&(n.render=b),P!=null&&(n.inheritAttrs=P),N&&(n.components=N),H&&(n.directives=H),E&&R_(n)}function RS(n,e,t=cr){nt(n)&&(n=$f(n));for(const i in n){const r=n[i];let s;zt(r)?"default"in r?s=bc(r.from||i,r.default,!0):s=bc(r.from||i):s=bc(r),kn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Bp(n,e,t){hr(nt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function D_(n,e,t,i){let r=i.includes(".")?A_(t,i):()=>t[i];if(Mn(n)){const s=e[n];at(s)&&Ou(r,s)}else if(at(n))Ou(r,n.bind(t));else if(zt(n))if(nt(n))n.forEach(s=>D_(s,e,t,i));else{const s=at(n.handler)?n.handler.bind(t):e[n.handler];at(s)&&Ou(r,s,n)}}function I_(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>qc(l,c,a,!0)),qc(l,e,a)),zt(e)&&s.set(e,l),l}function qc(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&qc(n,s,t,!0),r&&r.forEach(a=>qc(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=CS[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const CS={data:zp,props:kp,emits:kp,methods:Uo,computed:Uo,beforeCreate:Wn,created:Wn,beforeMount:Wn,mounted:Wn,beforeUpdate:Wn,updated:Wn,beforeDestroy:Wn,beforeUnmount:Wn,destroyed:Wn,unmounted:Wn,activated:Wn,deactivated:Wn,errorCaptured:Wn,serverPrefetch:Wn,components:Uo,directives:Uo,watch:DS,provide:zp,inject:PS};function zp(n,e){return e?n?function(){return Gn(at(n)?n.call(this,this):n,at(e)?e.call(this,this):e)}:e:n}function PS(n,e){return Uo($f(n),$f(e))}function $f(n){if(nt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Wn(n,e){return n?[...new Set([].concat(n,e))]:e}function Uo(n,e){return n?Gn(Object.create(null),n,e):e}function kp(n,e){return n?nt(n)&&nt(e)?[...new Set([...n,...e])]:Gn(Object.create(null),Op(n),Op(e??{})):e}function DS(n,e){if(!n)return e;if(!e)return n;const t=Gn(Object.create(null),n);for(const i in e)t[i]=Wn(n[i],e[i]);return t}function L_(){return{app:null,config:{isNativeTag:t_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let IS=0;function LS(n,e){return function(i,r=null){at(i)||(i=Gn({},i)),r!=null&&!zt(r)&&(r=null);const s=L_(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:IS++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:mM,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&at(u.install)?(a.add(u),u.install(c,...f)):at(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Lr(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,zd(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(hr(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Xa;Xa=c;try{return u()}finally{Xa=f}}};return c}}let Xa=null;const US=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${xs(e)}Modifiers`]||n[`${ca(e)}Modifiers`];function NS(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ft;let r=t;const s=e.startsWith("update:"),a=s&&US(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Mn(u)?u.trim():u)),a.number&&(r=t.map(_x)));let o,l=i[o=Iu(e)]||i[o=Iu(xs(e))];!l&&s&&(l=i[o=Iu(ca(e))]),l&&hr(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,hr(c,n,6,r)}}const FS=new WeakMap;function U_(n,e,t=!1){const i=t?FS:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!at(n)){const l=c=>{const u=U_(c,e,!0);u&&(o=!0,Gn(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(zt(n)&&i.set(n,null),null):(nt(s)?s.forEach(l=>a[l]=null):Gn(a,s),zt(n)&&i.set(n,a),a)}function xu(n,e){return!n||!du(e)?!1:(e=e.slice(2).replace(/Once$/,""),Et(n,e[0].toLowerCase()+e.slice(1))||Et(n,ca(e))||Et(n,e))}function Hp(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,p=Xc(n);let m,v;try{if(t.shapeFlag&4){const x=r||i,b=x;m=er(c.call(b,x,u,f,d,h,g)),v=o}else{const x=e;m=er(x.length>1?x(f,{attrs:o,slots:a,emit:l}):x(f,null)),v=e.props?o:OS(o)}}catch(x){Zo.length=0,gu(x,n,1),m=Lr(eo)}let y=m;if(v&&_!==!1){const x=Object.keys(v),{shapeFlag:b}=y;x.length&&b&7&&(s&&x.some(_d)&&(v=BS(v,s)),y=to(y,v,!1,!0))}return t.dirs&&(y=to(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&Ld(y,t.transition),m=y,Xc(p),m}const OS=n=>{let e;for(const t in n)(t==="class"||t==="style"||du(t))&&((e||(e={}))[t]=n[t]);return e},BS=(n,e)=>{const t={};for(const i in n)(!_d(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function zS(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Gp(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(N_(a,i,h)&&!xu(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Gp(i,a,c):!0:!!a;return!1}function Gp(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(N_(e,n,s)&&!xu(t,s))return!0}return!1}function N_(n,e,t){const i=n[t],r=e[t];return t==="style"&&zt(i)&&zt(r)?!yd(i,r):i!==r}function kS({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const F_={},O_=()=>Object.create(F_),B_=n=>Object.getPrototypeOf(n)===F_;function HS(n,e,t,i=!1){const r={},s=O_();n.propsDefaults=Object.create(null),z_(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Xx(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function GS(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=yt(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(xu(n.emitsOptions,h))continue;const d=e[h];if(l)if(Et(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=xs(h);r[g]=Kf(l,o,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{z_(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Et(e,f)&&((u=ca(f))===f||!Et(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Kf(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Et(e,f))&&(delete s[f],c=!0)}c&&Cr(n.attrs,"set","")}function z_(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Xo(l))continue;const c=e[l];let u;r&&Et(r,u=xs(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:xu(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=yt(t),c=o||Ft;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Kf(r,l,f,c[f],n,!Et(c,f))}}return a}function Kf(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Et(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&at(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Dl(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===ca(t))&&(i=!0))}return i}const VS=new WeakMap;function k_(n,e,t=!1){const i=t?VS:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!at(n)){const u=f=>{l=!0;const[h,d]=k_(f,e,!0);Gn(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return zt(n)&&i.set(n,Ga),Ga;if(nt(s))for(let u=0;u<s.length;u++){const f=xs(s[u]);Vp(f)&&(a[f]=Ft)}else if(s)for(const u in s){const f=xs(u);if(Vp(f)){const h=s[u],d=a[f]=nt(h)||at(h)?{type:h}:Gn({},h),g=d.type;let _=!1,p=!0;if(nt(g))for(let m=0;m<g.length;++m){const v=g[m],y=at(v)&&v.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(p=!1)}else _=at(g)&&g.name==="Boolean";d[0]=_,d[1]=p,(_||Et(d,"default"))&&o.push(f)}}const c=[a,o];return zt(n)&&i.set(n,c),c}function Vp(n){return n[0]!=="$"&&!Xo(n)}const Nd=n=>n==="_"||n==="_ctx"||n==="$stable",Fd=n=>nt(n)?n.map(er):[er(n)],WS=(n,e,t)=>{if(e._n)return e;const i=aS((...r)=>Fd(e(...r)),t);return i._c=!1,i},H_=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Nd(r))continue;const s=n[r];if(at(s))e[r]=WS(r,s,i);else if(s!=null){const a=Fd(s);e[r]=()=>a}}},G_=(n,e)=>{const t=Fd(e);n.slots.default=()=>t},V_=(n,e,t)=>{for(const i in e)(t||!Nd(i))&&(n[i]=e[i])},XS=(n,e,t)=>{const i=n.slots=O_();if(n.vnode.shapeFlag&32){const r=e._;r?(V_(i,e,t),t&&r_(i,"_",r,!0)):H_(e,i)}else e&&G_(n,e)},YS=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Ft;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:V_(r,e,t):(s=!e.$stable,H_(e,r)),a=e}else e&&(G_(n,e),a={default:1});if(s)for(const o in r)!Nd(o)&&a[o]==null&&delete r[o]},ii=ZS;function qS(n){return $S(n)}function $S(n,e){const t=mu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=cr,insertStaticContent:g}=n,_=(I,O,Y,re=null,Q=null,F=null,C=void 0,fe=null,ae=!!O.dynamicChildren)=>{if(I===O)return;I&&!So(I,O)&&(re=ue(I),ce(I,Q,F,!0),I=null),O.patchFlag===-2&&(ae=!1,O.dynamicChildren=null);const{type:ne,ref:oe,shapeFlag:R}=O;switch(ne){case Su:p(I,O,Y,re);break;case eo:m(I,O,Y,re);break;case Tc:I==null&&v(O,Y,re,C);break;case wr:N(I,O,Y,re,Q,F,C,fe,ae);break;default:R&1?b(I,O,Y,re,Q,F,C,fe,ae):R&6?H(I,O,Y,re,Q,F,C,fe,ae):(R&64||R&128)&&ne.process(I,O,Y,re,Q,F,C,fe,ae,Le)}oe!=null&&Q?$o(oe,I&&I.ref,F,O||I,!O):oe==null&&I&&I.ref!=null&&$o(I.ref,null,F,I,!0)},p=(I,O,Y,re)=>{if(I==null)i(O.el=o(O.children),Y,re);else{const Q=O.el=I.el;O.children!==I.children&&c(Q,O.children)}},m=(I,O,Y,re)=>{I==null?i(O.el=l(O.children||""),Y,re):O.el=I.el},v=(I,O,Y,re)=>{[I.el,I.anchor]=g(I.children,O,Y,re,I.el,I.anchor)},y=({el:I,anchor:O},Y,re)=>{let Q;for(;I&&I!==O;)Q=h(I),i(I,Y,re),I=Q;i(O,Y,re)},x=({el:I,anchor:O})=>{let Y;for(;I&&I!==O;)Y=h(I),r(I),I=Y;r(O)},b=(I,O,Y,re,Q,F,C,fe,ae)=>{if(O.type==="svg"?C="svg":O.type==="math"&&(C="mathml"),I==null)A(O,Y,re,Q,F,C,fe,ae);else{const ne=I.el&&I.el._isVueCE?I.el:null;try{ne&&ne._beginPatch(),E(I,O,Q,F,C,fe,ae)}finally{ne&&ne._endPatch()}}},A=(I,O,Y,re,Q,F,C,fe)=>{let ae,ne;const{props:oe,shapeFlag:R,transition:M,dirs:B}=I;if(ae=I.el=a(I.type,F,oe&&oe.is,oe),R&8?u(ae,I.children):R&16&&S(I.children,ae,null,re,Q,zu(I,F),C,fe),B&&Cs(I,null,re,"created"),T(ae,I,I.scopeId,C,re),oe){for(const ee in oe)ee!=="value"&&!Xo(ee)&&s(ae,ee,null,oe[ee],F,re);"value"in oe&&s(ae,"value",null,oe.value,F),(ne=oe.onVnodeBeforeMount)&&$i(ne,re,I)}B&&Cs(I,null,re,"beforeMount");const j=KS(Q,M);j&&M.beforeEnter(ae),i(ae,O,Y),((ne=oe&&oe.onVnodeMounted)||j||B)&&ii(()=>{ne&&$i(ne,re,I),j&&M.enter(ae),B&&Cs(I,null,re,"mounted")},Q)},T=(I,O,Y,re,Q)=>{if(Y&&d(I,Y),re)for(let F=0;F<re.length;F++)d(I,re[F]);if(Q){let F=Q.subTree;if(O===F||q_(F.type)&&(F.ssContent===O||F.ssFallback===O)){const C=Q.vnode;T(I,C,C.scopeId,C.slotScopeIds,Q.parent)}}},S=(I,O,Y,re,Q,F,C,fe,ae=0)=>{for(let ne=ae;ne<I.length;ne++){const oe=I[ne]=fe?Ar(I[ne]):er(I[ne]);_(null,oe,O,Y,re,Q,F,C,fe)}},E=(I,O,Y,re,Q,F,C)=>{const fe=O.el=I.el;let{patchFlag:ae,dynamicChildren:ne,dirs:oe}=O;ae|=I.patchFlag&16;const R=I.props||Ft,M=O.props||Ft;let B;if(Y&&Ps(Y,!1),(B=M.onVnodeBeforeUpdate)&&$i(B,Y,O,I),oe&&Cs(O,I,Y,"beforeUpdate"),Y&&Ps(Y,!0),(R.innerHTML&&M.innerHTML==null||R.textContent&&M.textContent==null)&&u(fe,""),ne?U(I.dynamicChildren,ne,fe,Y,re,zu(O,Q),F):C||X(I,O,fe,null,Y,re,zu(O,Q),F,!1),ae>0){if(ae&16)P(fe,R,M,Y,Q);else if(ae&2&&R.class!==M.class&&s(fe,"class",null,M.class,Q),ae&4&&s(fe,"style",R.style,M.style,Q),ae&8){const j=O.dynamicProps;for(let ee=0;ee<j.length;ee++){const q=j[ee],ve=R[q],he=M[q];(he!==ve||q==="value")&&s(fe,q,ve,he,Q,Y)}}ae&1&&I.children!==O.children&&u(fe,O.children)}else!C&&ne==null&&P(fe,R,M,Y,Q);((B=M.onVnodeUpdated)||oe)&&ii(()=>{B&&$i(B,Y,O,I),oe&&Cs(O,I,Y,"updated")},re)},U=(I,O,Y,re,Q,F,C)=>{for(let fe=0;fe<O.length;fe++){const ae=I[fe],ne=O[fe],oe=ae.el&&(ae.type===wr||!So(ae,ne)||ae.shapeFlag&198)?f(ae.el):Y;_(ae,ne,oe,null,re,Q,F,C,!0)}},P=(I,O,Y,re,Q)=>{if(O!==Y){if(O!==Ft)for(const F in O)!Xo(F)&&!(F in Y)&&s(I,F,O[F],null,Q,re);for(const F in Y){if(Xo(F))continue;const C=Y[F],fe=O[F];C!==fe&&F!=="value"&&s(I,F,fe,C,Q,re)}"value"in Y&&s(I,"value",O.value,Y.value,Q)}},N=(I,O,Y,re,Q,F,C,fe,ae)=>{const ne=O.el=I?I.el:o(""),oe=O.anchor=I?I.anchor:o("");let{patchFlag:R,dynamicChildren:M,slotScopeIds:B}=O;B&&(fe=fe?fe.concat(B):B),I==null?(i(ne,Y,re),i(oe,Y,re),S(O.children||[],Y,oe,Q,F,C,fe,ae)):R>0&&R&64&&M&&I.dynamicChildren&&I.dynamicChildren.length===M.length?(U(I.dynamicChildren,M,Y,Q,F,C,fe),(O.key!=null||Q&&O===Q.subTree)&&W_(I,O,!0)):X(I,O,Y,oe,Q,F,C,fe,ae)},H=(I,O,Y,re,Q,F,C,fe,ae)=>{O.slotScopeIds=fe,I==null?O.shapeFlag&512?Q.ctx.activate(O,Y,re,C,ae):W(O,Y,re,Q,F,C,ae):V(I,O,ae)},W=(I,O,Y,re,Q,F,C)=>{const fe=I.component=oM(I,re,Q);if(C_(I)&&(fe.ctx.renderer=Le),cM(fe,!1,C),fe.asyncDep){if(Q&&Q.registerDep(fe,k,C),!I.el){const ae=fe.subTree=Lr(eo);m(null,ae,O,Y),I.placeholder=ae.el}}else k(fe,I,O,Y,Q,F,C)},V=(I,O,Y)=>{const re=O.component=I.component;if(zS(I,O,Y))if(re.asyncDep&&!re.asyncResolved){L(re,O,Y);return}else re.next=O,re.update();else O.el=I.el,re.vnode=O},k=(I,O,Y,re,Q,F,C)=>{const fe=()=>{if(I.isMounted){let{next:R,bu:M,u:B,parent:j,vnode:ee}=I;{const Me=X_(I);if(Me){R&&(R.el=ee.el,L(I,R,C)),Me.asyncDep.then(()=>{ii(()=>{I.isUnmounted||ne()},Q)});return}}let q=R,ve;Ps(I,!1),R?(R.el=ee.el,L(I,R,C)):R=ee,M&&Lu(M),(ve=R.props&&R.props.onVnodeBeforeUpdate)&&$i(ve,j,R,ee),Ps(I,!0);const he=Hp(I),De=I.subTree;I.subTree=he,_(De,he,f(De.el),ue(De),I,Q,F),R.el=he.el,q===null&&kS(I,he.el),B&&ii(B,Q),(ve=R.props&&R.props.onVnodeUpdated)&&ii(()=>$i(ve,j,R,ee),Q)}else{let R;const{el:M,props:B}=O,{bm:j,m:ee,parent:q,root:ve,type:he}=I,De=Ko(O);Ps(I,!1),j&&Lu(j),!De&&(R=B&&B.onVnodeBeforeMount)&&$i(R,q,O),Ps(I,!0);{ve.ce&&ve.ce._hasShadowRoot()&&ve.ce._injectChildStyle(he);const Me=I.subTree=Hp(I);_(null,Me,Y,re,I,Q,F),O.el=Me.el}if(ee&&ii(ee,Q),!De&&(R=B&&B.onVnodeMounted)){const Me=O;ii(()=>$i(R,q,Me),Q)}(O.shapeFlag&256||q&&Ko(q.vnode)&&q.vnode.shapeFlag&256)&&I.a&&ii(I.a,Q),I.isMounted=!0,O=Y=re=null}};I.scope.on();const ae=I.effect=new a_(fe);I.scope.off();const ne=I.update=ae.run.bind(ae),oe=I.job=ae.runIfDirty.bind(ae);oe.i=I,oe.id=I.uid,ae.scheduler=()=>Id(oe),Ps(I,!0),ne()},L=(I,O,Y)=>{O.component=I;const re=I.vnode.props;I.vnode=O,I.next=null,GS(I,O.props,re,Y),YS(I,O.children,Y),Fr(),Up(I),Or()},X=(I,O,Y,re,Q,F,C,fe,ae=!1)=>{const ne=I&&I.children,oe=I?I.shapeFlag:0,R=O.children,{patchFlag:M,shapeFlag:B}=O;if(M>0){if(M&128){D(ne,R,Y,re,Q,F,C,fe,ae);return}else if(M&256){K(ne,R,Y,re,Q,F,C,fe,ae);return}}B&8?(oe&16&&ie(ne,Q,F),R!==ne&&u(Y,R)):oe&16?B&16?D(ne,R,Y,re,Q,F,C,fe,ae):ie(ne,Q,F,!0):(oe&8&&u(Y,""),B&16&&S(R,Y,re,Q,F,C,fe,ae))},K=(I,O,Y,re,Q,F,C,fe,ae)=>{I=I||Ga,O=O||Ga;const ne=I.length,oe=O.length,R=Math.min(ne,oe);let M;for(M=0;M<R;M++){const B=O[M]=ae?Ar(O[M]):er(O[M]);_(I[M],B,Y,null,Q,F,C,fe,ae)}ne>oe?ie(I,Q,F,!0,!1,R):S(O,Y,re,Q,F,C,fe,ae,R)},D=(I,O,Y,re,Q,F,C,fe,ae)=>{let ne=0;const oe=O.length;let R=I.length-1,M=oe-1;for(;ne<=R&&ne<=M;){const B=I[ne],j=O[ne]=ae?Ar(O[ne]):er(O[ne]);if(So(B,j))_(B,j,Y,null,Q,F,C,fe,ae);else break;ne++}for(;ne<=R&&ne<=M;){const B=I[R],j=O[M]=ae?Ar(O[M]):er(O[M]);if(So(B,j))_(B,j,Y,null,Q,F,C,fe,ae);else break;R--,M--}if(ne>R){if(ne<=M){const B=M+1,j=B<oe?O[B].el:re;for(;ne<=M;)_(null,O[ne]=ae?Ar(O[ne]):er(O[ne]),Y,j,Q,F,C,fe,ae),ne++}}else if(ne>M)for(;ne<=R;)ce(I[ne],Q,F,!0),ne++;else{const B=ne,j=ne,ee=new Map;for(ne=j;ne<=M;ne++){const Se=O[ne]=ae?Ar(O[ne]):er(O[ne]);Se.key!=null&&ee.set(Se.key,ne)}let q,ve=0;const he=M-j+1;let De=!1,Me=0;const pe=new Array(he);for(ne=0;ne<he;ne++)pe[ne]=0;for(ne=B;ne<=R;ne++){const Se=I[ne];if(ve>=he){ce(Se,Q,F,!0);continue}let Te;if(Se.key!=null)Te=ee.get(Se.key);else for(q=j;q<=M;q++)if(pe[q-j]===0&&So(Se,O[q])){Te=q;break}Te===void 0?ce(Se,Q,F,!0):(pe[Te-j]=ne+1,Te>=Me?Me=Te:De=!0,_(Se,O[Te],Y,null,Q,F,C,fe,ae),ve++)}const ge=De?jS(pe):Ga;for(q=ge.length-1,ne=he-1;ne>=0;ne--){const Se=j+ne,Te=O[Se],ye=O[Se+1],qe=Se+1<oe?ye.el||Y_(ye):re;pe[ne]===0?_(null,Te,Y,qe,Q,F,C,fe,ae):De&&(q<0||ne!==ge[q]?le(Te,Y,qe,2):q--)}}},le=(I,O,Y,re,Q=null)=>{const{el:F,type:C,transition:fe,children:ae,shapeFlag:ne}=I;if(ne&6){le(I.component.subTree,O,Y,re);return}if(ne&128){I.suspense.move(O,Y,re);return}if(ne&64){C.move(I,O,Y,Le);return}if(C===wr){i(F,O,Y);for(let R=0;R<ae.length;R++)le(ae[R],O,Y,re);i(I.anchor,O,Y);return}if(C===Tc){y(I,O,Y);return}if(re!==2&&ne&1&&fe)if(re===0)fe.beforeEnter(F),i(F,O,Y),ii(()=>fe.enter(F),Q);else{const{leave:R,delayLeave:M,afterLeave:B}=fe,j=()=>{I.ctx.isUnmounted?r(F):i(F,O,Y)},ee=()=>{F._isLeaving&&F[dS](!0),R(F,()=>{j(),B&&B()})};M?M(F,j,ee):ee()}else i(F,O,Y)},ce=(I,O,Y,re=!1,Q=!1)=>{const{type:F,props:C,ref:fe,children:ae,dynamicChildren:ne,shapeFlag:oe,patchFlag:R,dirs:M,cacheIndex:B}=I;if(R===-2&&(Q=!1),fe!=null&&(Fr(),$o(fe,null,Y,I,!0),Or()),B!=null&&(O.renderCache[B]=void 0),oe&256){O.ctx.deactivate(I);return}const j=oe&1&&M,ee=!Ko(I);let q;if(ee&&(q=C&&C.onVnodeBeforeUnmount)&&$i(q,O,I),oe&6)$e(I.component,Y,re);else{if(oe&128){I.suspense.unmount(Y,re);return}j&&Cs(I,null,O,"beforeUnmount"),oe&64?I.type.remove(I,O,Y,Le,re):ne&&!ne.hasOnce&&(F!==wr||R>0&&R&64)?ie(ne,O,Y,!1,!0):(F===wr&&R&384||!Q&&oe&16)&&ie(ae,O,Y),re&&Ne(I)}(ee&&(q=C&&C.onVnodeUnmounted)||j)&&ii(()=>{q&&$i(q,O,I),j&&Cs(I,null,O,"unmounted")},Y)},Ne=I=>{const{type:O,el:Y,anchor:re,transition:Q}=I;if(O===wr){Ye(Y,re);return}if(O===Tc){x(I);return}const F=()=>{r(Y),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(I.shapeFlag&1&&Q&&!Q.persisted){const{leave:C,delayLeave:fe}=Q,ae=()=>C(Y,F);fe?fe(I.el,F,ae):ae()}else F()},Ye=(I,O)=>{let Y;for(;I!==O;)Y=h(I),r(I),I=Y;r(O)},$e=(I,O,Y)=>{const{bum:re,scope:Q,job:F,subTree:C,um:fe,m:ae,a:ne}=I;Wp(ae),Wp(ne),re&&Lu(re),Q.stop(),F&&(F.flags|=8,ce(C,I,O,Y)),fe&&ii(fe,O),ii(()=>{I.isUnmounted=!0},O)},ie=(I,O,Y,re=!1,Q=!1,F=0)=>{for(let C=F;C<I.length;C++)ce(I[C],O,Y,re,Q)},ue=I=>{if(I.shapeFlag&6)return ue(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const O=h(I.anchor||I.el),Y=O&&O[fS];return Y?h(Y):O};let de=!1;const ze=(I,O,Y)=>{let re;I==null?O._vnode&&(ce(O._vnode,null,null,!0),re=O._vnode.component):_(O._vnode||null,I,O,null,null,null,Y),O._vnode=I,de||(de=!0,Up(re),E_(),de=!1)},Le={p:_,um:ce,m:le,r:Ne,mt:W,mc:S,pc:X,pbc:U,n:ue,o:n};return{render:ze,hydrate:void 0,createApp:LS(ze)}}function zu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ps({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function KS(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function W_(n,e,t=!1){const i=n.children,r=e.children;if(nt(i)&&nt(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ar(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&W_(a,o)),o.type===Su&&(o.patchFlag===-1&&(o=r[s]=Ar(o)),o.el=a.el),o.type===eo&&!o.el&&(o.el=a.el)}}function jS(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function X_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:X_(e)}function Wp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Y_(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Y_(e.subTree):null}const q_=n=>n.__isSuspense;function ZS(n,e){e&&e.pendingBranch?nt(n)?e.effects.push(...n):e.effects.push(n):sS(n)}const wr=Symbol.for("v-fgt"),Su=Symbol.for("v-txt"),eo=Symbol.for("v-cmt"),Tc=Symbol.for("v-stc"),Zo=[];let Mi=null;function $_(n=!1){Zo.push(Mi=n?null:[])}function JS(){Zo.pop(),Mi=Zo[Zo.length-1]||null}let ml=1;function Xp(n,e=!1){ml+=n,n<0&&Mi&&e&&(Mi.hasOnce=!0)}function QS(n){return n.dynamicChildren=ml>0?Mi||Ga:null,JS(),ml>0&&Mi&&Mi.push(n),n}function K_(n,e,t,i,r,s){return QS(Od(n,e,t,i,r,s,!0))}function j_(n){return n?n.__v_isVNode===!0:!1}function So(n,e){return n.type===e.type&&n.key===e.key}const Z_=({key:n})=>n??null,wc=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Mn(n)||kn(n)||at(n)?{i:rr,r:n,k:e,f:!!t}:n:null);function Od(n,e=null,t=null,i=0,r=null,s=n===wr?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Z_(e),ref:e&&wc(e),scopeId:T_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rr};return o?(Bd(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Mn(t)?8:16),ml>0&&!a&&Mi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Mi.push(l),l}const Lr=eM;function eM(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===TS)&&(n=eo),j_(n)){const o=to(n,e,!0);return t&&Bd(o,t),ml>0&&!s&&Mi&&(o.shapeFlag&6?Mi[Mi.indexOf(n)]=o:Mi.push(o)),o.patchFlag=-2,o}if(dM(n)&&(n=n.__vccOpts),e){e=tM(e);let{class:o,style:l}=e;o&&!Mn(o)&&(e.class=Md(o)),zt(l)&&(Dd(l)&&!nt(l)&&(l=Gn({},l)),e.style=Sd(l))}const a=Mn(n)?1:q_(n)?128:hS(n)?64:zt(n)?4:at(n)?2:0;return Od(n,e,t,i,r,a,s,!0)}function tM(n){return n?Dd(n)||B_(n)?Gn({},n):n:null}function to(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?rM(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Z_(c),ref:e&&e.ref?t&&s?nt(s)?s.concat(wc(e)):[s,wc(e)]:wc(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==wr?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&to(n.ssContent),ssFallback:n.ssFallback&&to(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ld(u,l.clone(u)),u}function nM(n=" ",e=0){return Lr(Su,null,n,e)}function iM(n,e){const t=Lr(Tc,null,n);return t.staticCount=e,t}function er(n){return n==null||typeof n=="boolean"?Lr(eo):nt(n)?Lr(wr,null,n.slice()):j_(n)?Ar(n):Lr(Su,null,String(n))}function Ar(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:to(n)}function Bd(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(nt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Bd(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!B_(e)?e._ctx=rr:r===3&&rr&&(rr.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else at(e)?(e={default:e,_ctx:rr},t=32):(e=String(e),i&64?(t=16,e=[nM(e)]):t=8);n.children=e,n.shapeFlag|=t}function rM(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Md([e.class,i.class]));else if(r==="style")e.style=Sd([e.style,i.style]);else if(du(r)){const s=e[r],a=i[r];a&&s!==a&&!(nt(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function $i(n,e,t,i=null){hr(n,e,7,[t,i])}const sM=L_();let aM=0;function oM(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||sM,s={uid:aM++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tx(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:k_(i,r),emitsOptions:U_(i,r),emit:null,emitted:null,propsDefaults:Ft,inheritAttrs:i.inheritAttrs,ctx:Ft,data:Ft,props:Ft,attrs:Ft,slots:Ft,refs:Ft,setupState:Ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=NS.bind(null,s),n.ce&&n.ce(s),s}let Jn=null;const lM=()=>Jn||rr;let $c,jf;{const n=mu(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};$c=e("__VUE_INSTANCE_SETTERS__",t=>Jn=t),jf=e("__VUE_SSR_SETTERS__",t=>gl=t)}const Dl=n=>{const e=Jn;return $c(n),n.scope.on(),()=>{n.scope.off(),$c(e)}},Yp=()=>{Jn&&Jn.scope.off(),$c(null)};function J_(n){return n.vnode.shapeFlag&4}let gl=!1;function cM(n,e=!1,t=!1){e&&jf(e);const{props:i,children:r}=n.vnode,s=J_(n);HS(n,i,s,e),XS(n,r,t||e);const a=s?uM(n,e):void 0;return e&&jf(!1),a}function uM(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,wS);const{setup:i}=t;if(i){Fr();const r=n.setupContext=i.length>1?hM(n):null,s=Dl(n),a=Pl(i,n,0,[n.props,r]),o=n_(a);if(Or(),s(),(o||n.sp)&&!Ko(n)&&R_(n),o){if(a.then(Yp,Yp),e)return a.then(l=>{qp(n,l)}).catch(l=>{gu(l,n,0)});n.asyncDep=a}else qp(n,a)}else Q_(n)}function qp(n,e,t){at(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:zt(e)&&(n.setupState=S_(e)),Q_(n)}function Q_(n,e,t){const i=n.type;n.render||(n.render=i.render||cr);{const r=Dl(n);Fr();try{AS(n)}finally{Or(),r()}}}const fM={get(n,e){return On(n,"get",""),n[e]}};function hM(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,fM),slots:n.slots,emit:n.emit,expose:e}}function zd(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(S_(Yx(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in jo)return jo[t](n)},has(e,t){return t in e||t in jo}})):n.proxy}function dM(n){return at(n)&&"__vccOpts"in n}const pM=(n,e)=>Qx(n,e,gl),mM="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zf;const $p=typeof window<"u"&&window.trustedTypes;if($p)try{Zf=$p.createPolicy("vue",{createHTML:n=>n})}catch{}const e0=Zf?n=>Zf.createHTML(n):n=>n,gM="http://www.w3.org/2000/svg",_M="http://www.w3.org/1998/Math/MathML",Er=typeof document<"u"?document:null,Kp=Er&&Er.createElement("template"),vM={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Er.createElementNS(gM,n):e==="mathml"?Er.createElementNS(_M,n):t?Er.createElement(n,{is:t}):Er.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Er.createTextNode(n),createComment:n=>Er.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Er.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Kp.innerHTML=e0(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Kp.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},xM=Symbol("_vtc");function SM(n,e,t){const i=n[xM];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const jp=Symbol("_vod"),MM=Symbol("_vsh"),yM=Symbol(""),EM=/(?:^|;)\s*display\s*:/;function bM(n,e,t){const i=n.style,r=Mn(t);let s=!1;if(t&&!r){if(e)if(Mn(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ac(i,o,"")}else for(const a in e)t[a]==null&&Ac(i,a,"");for(const a in t)a==="display"&&(s=!0),Ac(i,a,t[a])}else if(r){if(e!==t){const a=i[yM];a&&(t+=";"+a),i.cssText=t,s=EM.test(t)}}else e&&n.removeAttribute("style");jp in n&&(n[jp]=s?i.display:"",n[MM]&&(i.display="none"))}const Zp=/\s*!important$/;function Ac(n,e,t){if(nt(t))t.forEach(i=>Ac(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=TM(n,e);Zp.test(t)?n.setProperty(ca(i),t.replace(Zp,""),"important"):n[i]=t}}const Jp=["Webkit","Moz","ms"],ku={};function TM(n,e){const t=ku[e];if(t)return t;let i=xs(e);if(i!=="filter"&&i in n)return ku[e]=i;i=i_(i);for(let r=0;r<Jp.length;r++){const s=Jp[r]+i;if(s in n)return ku[e]=s}return e}const Qp="http://www.w3.org/1999/xlink";function em(n,e,t,i,r,s=Ex(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Qp,e.slice(6,e.length)):n.setAttributeNS(Qp,e,t):t==null||s&&!s_(t)?n.removeAttribute(e):n.setAttribute(e,s?"":vs(t)?String(t):t)}function tm(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?e0(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=s_(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function wM(n,e,t,i){n.addEventListener(e,t,i)}function AM(n,e,t,i){n.removeEventListener(e,t,i)}const nm=Symbol("_vei");function RM(n,e,t,i,r=null){const s=n[nm]||(n[nm]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=CM(e);if(i){const c=s[e]=IM(i,r);wM(n,o,c,l)}else a&&(AM(n,o,a,l),s[e]=void 0)}}const im=/(?:Once|Passive|Capture)$/;function CM(n){let e;if(im.test(n)){e={};let i;for(;i=n.match(im);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ca(n.slice(2)),e]}let Hu=0;const PM=Promise.resolve(),DM=()=>Hu||(PM.then(()=>Hu=0),Hu=Date.now());function IM(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;hr(LM(i,t.value),e,5,[i])};return t.value=n,t.attached=DM(),t}function LM(n,e){if(nt(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const rm=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,UM=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?SM(n,i,a):e==="style"?bM(n,t,i):du(e)?_d(e)||RM(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):NM(n,e,i,a))?(tm(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&em(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Mn(i))?tm(n,xs(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),em(n,e,i,a))};function NM(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&rm(e)&&at(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return rm(e)&&Mn(t)?!1:e in n}const FM=Gn({patchProp:UM},vM);let sm;function OM(){return sm||(sm=qS(FM))}const BM=((...n)=>{const e=OM().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=kM(i);if(!r)return;const s=e._component;!at(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,zM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function zM(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function kM(n){return Mn(n)?document.querySelector(n):n}function br(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function t0(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},no={duration:.5,overwrite:!1,delay:0},kd,An,kt,Ii=1e8,Dt=1/Ii,Jf=Math.PI*2,HM=Jf/4,GM=0,n0=Math.sqrt,VM=Math.cos,WM=Math.sin,yn=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},zr=function(e){return typeof e=="number"},Hd=function(e){return typeof e>"u"},dr=function(e){return typeof e=="object"},oi=function(e){return e!==!1},Gd=function(){return typeof window<"u"},kl=function(e){return qt(e)||yn(e)},i0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,XM=/random\([^)]+\)/g,YM=/,\s*/g,am=/(?:-?\.?\d|\.)+/gi,r0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,za=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,s0=/[+-]=-?[.\d]+/,qM=/[^,'"\[\]\s]+/gi,$M=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,Ji,Qf,Vd,Ti={},Kc={},a0,o0=function(e){return(Kc=io(e,Ti))&&fi},Wd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},_l=function(e,t){return!t&&console.warn(e)},l0=function(e,t){return e&&(Ti[e]=t)&&Kc&&(Kc[e]=t)||Ti},vl=function(){return 0},KM={suppressEvents:!0,isStart:!0,kill:!1},Rc={suppressEvents:!0,kill:!1},jM={suppressEvents:!0},Xd={},ps=[],eh={},c0,_i={},Vu={},om=30,Cc=[],Yd="",qd=function(e){var t=e[0],i,r;if(dr(t)||qt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Cc.length;r--&&!Cc[r].targetTest(t););i=Cc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new L0(e[r],i)))||e.splice(r,1);return e},Js=function(e){return e._gsap||qd(Li(e))[0]._gsap},u0=function(e,t,i){return(i=e[t])&&qt(i)?e[t]():Hd(i)&&e.getAttribute&&e.getAttribute(t)||i},li=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},Vt=function(e){return Math.round(e*1e7)/1e7||0},Ya=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},ZM=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},jc=function(){var e=ps.length,t=ps.slice(0),i,r;for(eh={},ps.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},$d=function(e){return!!(e._initted||e._startAt||e.add)},f0=function(e,t,i,r){ps.length&&!An&&jc(),e.render(t,i,!!(An&&t<0&&$d(e))),ps.length&&!An&&jc()},h0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(qM).length<2?t:yn(e)?e.trim():e},d0=function(e){return e},wi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},JM=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},io=function(e,t){for(var i in t)e[i]=t[i];return e},lm=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=dr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Zc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Jo=function(e){var t=e.parent||Wt,i=e.keyframes?JM(Hn(e.keyframes)):wi;if(oi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},QM=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},p0=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Mu=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ms=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},ey=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},th=function(e,t,i,r){return e._startAt&&(An?e._startAt.revert(Rc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},ty=function n(e){return!e||e._ts&&n(e.parent)},cm=function(e){return e._repeat?ro(e._tTime,e=e.duration()+e._rDelay)*e:0},ro=function(e,t){var i=Math.floor(e=Vt(e/t));return e&&i===e?i-1:i},Jc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yu=function(e){return e._end=Vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Dt)||0))},Eu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Vt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yu(e),i._dirty||Qs(i,e)),e},m0=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Jc(e.rawTime(),t),(!t._dur||Il(0,t.totalDuration(),i)-t._tTime>Dt)&&t.render(i,!0)),Qs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Dt}},nr=function(e,t,i,r){return t.parent&&Ms(t),t._start=Vt((zr(i)?i:i||e!==Wt?Ci(e,i,t):e._time)+t._delay),t._end=Vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),p0(e,t,"_first","_last",e._sort?"_start":0),nh(t)||(e._recent=t),r||m0(e,t),e._ts<0&&Eu(e,e._tTime),e},g0=function(e,t){return(Ti.ScrollTrigger||Wd("scrollTrigger",t))&&Ti.ScrollTrigger.create(t,e)},_0=function(e,t,i,r,s){if(jd(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&c0!==xi.frame)return ps.push(e),e._lazy=[s,r],1},ny=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},nh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},iy=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&ny(e)&&!(!e._initted&&nh(e))||(e._ts<0||e._dp._ts<0)&&!nh(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Il(0,e._tDur,t),u=ro(l,o),e._yoyo&&u&1&&(a=1-a),u!==ro(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||An||r||e._zTime===Dt||!t&&e._zTime){if(!e._initted&&_0(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Dt:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&th(e,t,i,!0),e._onUpdate&&!i&&yi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&yi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ms(e,1),!i&&!An&&(yi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ry=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},so=function(e,t,i,r){var s=e._repeat,a=Vt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Vt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Eu(e,e._tTime=e._tDur*o),e.parent&&yu(e),i||Qs(e.parent,e),e},um=function(e){return e instanceof Qn?Qs(e):so(e,e._dur)},sy={_start:0,endTime:vl,totalDuration:vl},Ci=function n(e,t,i){var r=e.labels,s=e._recent||sy,a=e.duration()>=Ii?s.endTime(!1):e._dur,o,l,c;return yn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Hn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Qo=function(e,t,i){var r=zr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=oi(l.vars.inherit)&&l.parent;a.immediateRender=oi(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new nn(t[0],a,t[s+1])},ws=function(e,t){return e||e===0?t(e):t},Il=function(e,t,i){return i<e?e:i>t?t:i},Bn=function(e,t){return!yn(e)||!(t=$M.exec(e))?"":t[1]},ay=function(e,t,i){return ws(i,function(r){return Il(e,t,r)})},ih=[].slice,v0=function(e,t){return e&&dr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&dr(e[0]))&&!e.nodeType&&e!==Ji},oy=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return yn(r)&&!t||v0(r,1)?(s=i).push.apply(s,Li(r)):i.push(r)})||i},Li=function(e,t,i){return kt&&!t&&kt.selector?kt.selector(e):yn(e)&&!i&&(Qf||!ao())?ih.call((t||Vd).querySelectorAll(e),0):Hn(e)?oy(e,i):v0(e)?ih.call(e,0):e?[e]:[]},rh=function(e){return e=Li(e)[0]||_l("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Li(t,i.querySelectorAll?i:i===e?_l("Invalid scope")||Vd.createElement("div"):e)}},x0=function(e){return e.sort(function(){return .5-Math.random()})},S0=function(e){if(qt(e))return e;var t=dr(e)?e:{each:e},i=ea(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return yn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,p=a[_],m,v,y,x,b,A,T,S,E;if(!p){if(E=t.grid==="auto"?0:(t.grid||[1,Ii])[1],!E){for(T=-Ii;T<(T=g[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(p=a[_]=[],m=l?Math.min(E,_)*u-.5:r%E,v=E===Ii?0:l?_*f/E-.5:r/E|0,T=0,S=Ii,A=0;A<_;A++)y=A%E-m,x=v-(A/E|0),p[A]=b=c?Math.abs(c==="y"?x:y):n0(y*y+x*x),b>T&&(T=b),b<S&&(S=b);r==="random"&&x0(p),p.max=T-S,p.min=S,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Bn(t.amount||t.each)||0,i=i&&_<0?P0(i):i}return _=(p[h]-p.min)/p.max||0,Vt(p.b+(i?i(_):_)*p.v)+p.u}},sh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Vt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(zr(i)?0:Bn(i))}},M0=function(e,t){var i=Hn(e),r,s;return!i&&dr(e)&&(r=i=e.radius||Ii,e.values?(e=Li(e.values),(s=!zr(e[0]))&&(r*=r)):e=sh(e.increment)),ws(t,i?qt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ii,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:a,s||u===a||zr(a)?u:u+Bn(a)}:sh(e))},y0=function(e,t,i,r){return ws(Hn(e)?!t:i===!0?!!(i=0):!r,function(){return Hn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},ly=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},cy=function(e,t){return function(i){return e(parseFloat(i))+(t||Bn(i))}},uy=function(e,t,i){return b0(e,t,0,1,i)},E0=function(e,t,i){return ws(i,function(r){return e[~~t(r)]})},fy=function n(e,t,i){var r=t-e;return Hn(e)?E0(e,n(0,e.length),t):ws(i,function(s){return(r+(s-e)%r)%r+e})},hy=function n(e,t,i){var r=t-e,s=r*2;return Hn(e)?E0(e,n(0,e.length-1),t):ws(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},xl=function(e){return e.replace(XM,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(YM);return y0(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},b0=function(e,t,i,r,s){var a=t-e,o=r-i;return ws(s,function(l){return i+((l-e)/a*o||0)})},dy=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=yn(e),o={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(Hn(e)&&!Hn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=t}else r||(e=io(Hn(e)?[]:{},e));if(!u){for(l in t)Kd.call(o,e,l,"get",t[l]);s=function(g){return Qd(g,o)||(a?e.p:e)}}}return ws(i,s)},fm=function(e,t,i){var r=e.labels,s=Ii,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},yi=function(e,t,i){var r=e.vars,s=r[t],a=kt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&ps.length&&jc(),o&&(kt=o),u=l?s.apply(c,l):s.call(c),kt=a,u},No=function(e){return Ms(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&yi(e,"onInterrupt"),e},ka,T0=[],w0=function(e){if(e)if(e=!e.name&&e.default||e,Gd()||e.headless){var t=e.name,i=qt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:vl,render:Qd,add:Kd,kill:Cy,modifier:Ry,rawVars:0},a={targetTest:0,get:0,getSetter:Jd,aliases:{},register:0};if(ao(),e!==r){if(_i[t])return;wi(r,wi(Zc(e,s),a)),io(r.prototype,io(s,Zc(e,a))),_i[r.prop=t]=r,e.targetTest&&(Cc.push(r),Xd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}l0(t,r),e.register&&e.register(fi,r,ci)}else T0.push(e)},Pt=255,Fo={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},Wu=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Pt+.5|0},A0=function(e,t,i){var r=e?zr(e)?[e>>16,e>>8&Pt,e&Pt]:0:Fo.black,s,a,o,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Fo[e])r=Fo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Pt,r&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(am),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Wu(l+1/3,s,a),r[1]=Wu(l,s,a),r[2]=Wu(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(r0),i&&r.length<4&&(r[3]=1),r}else r=e.match(am)||Fo.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Pt,a=r[1]/Pt,o=r[2]/Pt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},R0=function(e){var t=[],i=[],r=-1;return e.split(ms).forEach(function(s){var a=s.match(za)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},hm=function(e,t,i){var r="",s=(e+r).match(ms),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=A0(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=R0(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ms,"1").split(za),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(ms),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},ms=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Fo)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),py=/hsl[a]?\(/,C0=function(e){var t=e.join(" "),i;if(ms.lastIndex=0,ms.test(t))return i=py.test(t),e[1]=hm(e[1],i),e[0]=hm(e[0],i,R0(e[1])),!0},Sl,xi=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,f,h,d,g=function _(p){var m=n()-r,v=p===!0,y,x,b,A;if((m>e||m<0)&&(i+=m-t),r+=m,b=r-i,y=b-a,(y>0||v)&&(A=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,a+=y+(y>=s?4:s-y),x=1),v||(l=c(_)),x)for(d=0;d<o.length;d++)o[d](b,h,A,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){a0&&(!Qf&&Gd()&&(Ji=Qf=window,Vd=Ji.document||{},Ti.gsap=fi,(Ji.gsapVersions||(Ji.gsapVersions=[])).push(fi.version),o0(Kc||Ji.GreenSockGlobals||!Ji.gsap&&Ji||{}),T0.forEach(w0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},Sl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Sl=0,c=vl},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,m,v){var y=m?function(x,b,A,T){p(x,b,A,T),f.remove(y)}:p;return f.remove(p),o[v?"unshift":"push"](y),ao(),y},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f})(),ao=function(){return!Sl&&xi.wake()},pt={},my=/^[\d.\-M][\d.\-,\s]/,gy=/["']/g,_y=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(gy,"").trim():+c,r=l.substr(o+1).trim();return t},vy=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},xy=function(e){var t=(e+"").split("("),i=pt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[_y(t[1])]:vy(e).split(",").map(h0)):pt._CE&&my.test(e)?pt._CE("",e):i},P0=function(e){return function(t){return 1-e(1-t)}},D0=function n(e,t){for(var i=e._first,r;i;)i instanceof Qn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},ea=function(e,t){return e&&(qt(e)?e:pt[e]||xy(e))||t},ua=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return li(e,function(o){pt[o]=Ti[o]=s,pt[a=o.toLowerCase()]=i;for(var l in s)pt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[o+"."+l]=s[l]}),s},I0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xu=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/Jf*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*WM((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:I0(o);return s=Jf/s,l.config=function(c,u){return n(e,c,u)},l},Yu=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:I0(i);return r.config=function(s){return n(e,s)},r};li("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ua(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;ua("Elastic",Xu("in"),Xu("out"),Xu());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};ua("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ua("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ua("Circ",function(n){return-(n0(1-n*n)-1)});ua("Sine",function(n){return n===1?1:-VM(n*HM)+1});ua("Back",Yu("in"),Yu("out"),Yu());pt.SteppedEase=pt.steps=Ti.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-Dt;return function(o){return((r*Il(0,a,o)|0)+s)*i}}};no.ease=pt["quad.out"];li("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Yd+=n+","+n+"Params,"});var L0=function(e,t){this.id=GM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:u0,this.set=t?t.getSetter:Jd},Ml=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,so(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),Sl||xi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,so(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ao(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Eu(this,i),!s._dp||s.parent||m0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&nr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Dt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),f0(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+cm(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+cm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ro(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Dt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Jc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Dt?0:this._rts,this.totalTime(Il(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),yu(this),ey(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ao(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Dt&&(this._tTime-=Dt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Vt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&nr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(oi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=jM);var r=An;return An=i,$d(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),An=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,um(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,um(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ci(this,i),oi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,oi(r)),this._dur||(this._zTime=-Dt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Dt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Dt)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=qt(i)?i:d0,l=function(){var u=r.then;r.then=null,s&&s(),qt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){No(this)},n})();wi(Ml.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Dt,_prom:0,_ps:!1,_rts:1});var Qn=(function(n){t0(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=oi(i.sortChildren),Wt&&nr(i.parent||Wt,br(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&g0(br(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Qo(0,arguments,this),this},t.from=function(r,s,a){return Qo(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Qo(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Jo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new nn(r,s,Ci(this,a),1),this},t.call=function(r,s,a){return nr(this,nn.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new nn(r,a,Ci(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Jo(a).immediateRender=oi(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,Jo(o).immediateRender=oi(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Vt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,p,m,v,y,x,b,A,T;if(this!==Wt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,x=this._start,y=this._ts,m=!y,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(h=Vt(u%p),u===l?(_=this._repeat,h=c):(b=Vt(u/p),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=ro(this._tTime,p),!o&&this._tTime&&b!==_&&this._tTime-b*p-this._dur<=0&&(b=_),A&&_&1&&(h=c-h,T=1),_!==b&&!this._lock){var S=A&&b&1,E=S===(A&&_&1);if(_<b&&(S=!S),o=S?0:u%c?c:u,this._lock=1,this.render(o||(T?0:Vt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,b=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;D0(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=ry(this,Vt(o),Vt(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!b&&(yi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=-Dt);break}}d=g}else{d=this._last;for(var U=r<0?r:h;d;){if(g=d._prev,(d._act||U<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(U-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(U-d._start)*d._ts,s,a||An&&$d(d)),h!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=U?-Dt:Dt);break}}d=g}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-Dt)._zTime=h>=o?1:-1,this._ts))return this._start=x,yu(this),this.render(r,s,a);this._onUpdate&&!s&&yi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ms(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(yi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(zr(s)||(s=Ci(this,s,r)),!(r instanceof Ml)){if(Hn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(yn(r))return this.addLabel(r,s);if(qt(r))r=nn.delayedCall(0,r);else return this}return this!==r?nr(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ii);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof nn?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return yn(r)?this.removeLabel(r):qt(r)?this.killTweensOf(r):(r.parent===this&&Mu(this,r),r===this._recent&&(this._recent=this._last),Qs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vt(xi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ci(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=nn.delayedCall(0,s||vl,a);return o.data="isPause",this._hasPause=1,nr(this,o,Ci(this,r))},t.removePause=function(r){var s=this._first;for(r=Ci(this,r);s;)s._start===r&&s.data==="isPause"&&Ms(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)ss!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Li(r),l=this._first,c=zr(s),u;l;)l instanceof nn?ZM(l._targets,o)&&(c?(!ss||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Ci(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=nn.to(a,wi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Dt,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&so(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,wi({startAt:{time:Ci(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),fm(this,Ci(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),fm(this,Ci(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Dt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Vt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Qs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Qs(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=Ii,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,nr(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Vt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;so(a,a===Wt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Wt._ts&&(f0(Wt,Jc(r,Wt)),c0=xi.frame),xi.frame>=om){om+=bi.autoSleep||120;var s=Wt._first;if((!s||!s._ts)&&bi.autoSleep&&xi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xi.sleep()}}},e})(Ml);wi(Qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sy=function(e,t,i,r,s,a,o){var l=new ci(this._pt,e,t,0,1,z0,null,s),c=0,u=0,f,h,d,g,_,p,m,v;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=xl(r)),a&&(v=[i,r],a(v,e,t),i=v[0],r=v[1]),h=i.match(Gu)||[];f=Gu.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Ya(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Gu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(s0.test(r)||m)&&(l.e=0),this._pt=l,l},Kd=function(e,t,i,r,s,a,o,l,c,u){qt(r)&&(r=r(s||0,e,a));var f=e[t],h=i!=="get"?i:qt(f)?c?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=qt(f)?c?Ty:O0:Zd,g;if(yn(r)&&(~r.indexOf("random(")&&(r=xl(r)),r.charAt(1)==="="&&(g=Ya(h,r)+(Bn(h)||0),(g||g===0)&&(r=g))),!u||h!==r||ah)return!isNaN(h*r)&&r!==""?(g=new ci(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?Ay:B0,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Wd(t,r),Sy.call(this,e,t,h,r,d,l||bi.stringFilter,c))},My=function(e,t,i,r,s){if(qt(e)&&(e=el(e,s,t,i,r)),!dr(e)||e.style&&e.nodeType||Hn(e)||i0(e))return yn(e)?el(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=el(e[o],s,t,i,r);return a},U0=function(e,t,i,r,s,a){var o,l,c,u;if(_i[e]&&(o=new _i[e]).init(s,o.rawVars?t[e]:My(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new ci(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==ka))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ss,ah,jd=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,v=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!kd,x=e.timeline,b,A,T,S,E,U,P,N,H,W,V,k,L;if(x&&(!h||!s)&&(s="none"),e._ease=ea(s,no.ease),e._yEase=f?P0(ea(f===!0?s:f,no.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!x&&!!r.runBackwards,!x||h&&!r.stagger){if(N=p[0]?Js(p[0]).harness:0,k=N&&r[N.prop],b=Zc(r,Xd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?Rc:KM),_._lazy=0),a){if(Ms(e._startAt=nn.set(p,wi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&oi(l),startAt:null,delay:0,onUpdate:c&&function(){return yi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!o&&!d)&&e._startAt.revert(Rc),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),T=wi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&oi(l),immediateRender:o,stagger:0,parent:m},b),k&&(T[N.prop]=k),Ms(e._startAt=nn.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(Rc):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,Dt,Dt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&oi(l)||l&&!g,A=0;A<p.length;A++){if(E=p[A],P=E._gsap||qd(p)[A]._gsap,e._ptLookup[A]=W={},eh[P.id]&&ps.length&&jc(),V=v===p?A:v.indexOf(E),N&&(H=new N).init(E,k||b,e,V,v)!==!1&&(e._pt=S=new ci(e._pt,E,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(X){W[X]=S}),H.priority&&(U=1)),!N||k)for(T in b)_i[T]&&(H=U0(T,b,e,V,E,v))?H.priority&&(U=1):W[T]=S=Kd.call(e,E,T,"get",b[T],V,v,0,r.stringFilter);e._op&&e._op[A]&&e.kill(E,e._op[A]),y&&e._pt&&(ss=e,Wt.killTweensOf(E,W,e.globalTime(t)),L=!e.parent,ss=0),e._pt&&l&&(eh[P.id]=1)}U&&k0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!L,h&&t<=0&&x.render(Ii,!0,!0)},yy=function(e,t,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ah=1,e.vars[t]="+=0",jd(e,o),ah=0,l?_l(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,f.e&&(f.e=jt(i)+Bn(f.e)),f.b&&(f.b=u.s+Bn(f.b))},Ey=function(e,t){var i=e[0]?Js(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=io({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},by=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(Hn(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},el=function(e,t,i,r,s){return qt(e)?e.call(t,i,r,s):yn(e)&&~e.indexOf("random(")?xl(e):e},N0=Yd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",F0={};li(N0+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return F0[n]=1});var nn=(function(n){t0(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Jo(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,v=r.parent||Wt,y=(Hn(i)||i0(i)?zr(i[0]):"length"in r)?[i]:Li(i),x,b,A,T,S,E,U,P;if(o._targets=y.length?qd(y):_l("GSAP target "+i+" not found. https://gsap.com",!bi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||h||kl(c)||kl(u)){if(r=o.vars,x=o.timeline=new Qn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:y}),x.kill(),x.parent=x._dp=br(o),x._start=0,h||kl(c)||kl(u)){if(T=y.length,U=h&&S0(h),dr(h))for(S in h)~N0.indexOf(S)&&(P||(P={}),P[S]=h[S]);for(b=0;b<T;b++)A=Zc(r,F0),A.stagger=0,m&&(A.yoyoEase=m),P&&io(A,P),E=y[b],A.duration=+el(c,br(o),b,E,y),A.delay=(+el(u,br(o),b,E,y)||0)-o._delay,!h&&T===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),x.to(E,A,U?U(b,E,y):0),x._ease=pt.none;x.duration()?c=u=0:o.timeline=0}else if(g){Jo(wi(x.vars.defaults,{ease:"none"})),x._ease=ea(g.ease||r.ease||"none");var N=0,H,W,V;if(Hn(g))g.forEach(function(k){return x.to(y,k,">")}),x.duration();else{A={};for(S in g)S==="ease"||S==="easeEach"||by(S,g[S],A,g.easeEach);for(S in A)for(H=A[S].sort(function(k,L){return k.t-L.t}),N=0,b=0;b<H.length;b++)W=H[b],V={ease:W.e,duration:(W.t-(b?H[b-1].t:0))/100*c},V[S]=W.v,x.to(y,V,N),N+=V.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!kd&&(ss=br(o),Wt.killTweensOf(y),ss=0),nr(v,br(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!g&&o._start===Vt(v._time)&&oi(f)&&ty(br(o))&&v.data!=="nested")&&(o._tTime=-Dt,o.render(Math.max(0,-u)||0)),p&&g0(br(o),p),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Dt&&!u?l:r<Dt?0:r,h,d,g,_,p,m,v,y,x;if(!c)iy(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(h=Vt(f%_),f===l?(g=this._repeat,h=c):(p=Vt(f/_),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),m=this._yoyo&&g&1,m&&(x=this._yEase,h=c-h),p=ro(this._tTime,_),h===o&&!a&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(y&&this._yEase&&D0(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Vt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(_0(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(h/c),this._from&&(this.ratio=v=1-v),!o&&f&&!s&&!p&&(yi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;y&&y.render(r<0?r:y._dur*y._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&th(this,r,s,a),yi(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&yi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&th(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ms(this,1),!s&&!(u&&!o)&&(f||o||m)&&(yi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Sl||xi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||jd(this,c),u=this._ease(c/this._dur),yy(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Eu(this,0),this.parent||p0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?No(this):this.scrollTrigger&&this.scrollTrigger.kill(!!An),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ss&&ss.vars.overwrite!==!0)._first||No(this),this.parent&&a!==this.timeline.totalDuration()&&so(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Li(r):o,c=this._ptLookup,u=this._pt,f,h,d,g,_,p,m;if((!s||s==="all")&&QM(o,l))return s==="all"&&(this._pt=0),No(this);for(f=this._op=this._op||[],s!=="all"&&(yn(s)&&(_={},li(s,function(v){return _[v]=1}),s=_),s=Ey(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(f[m]=s,g=h,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Mu(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&No(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Qo(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Qo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Wt.killTweensOf(r,s,a)},e})(Ml);wi(nn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});li("staggerTo,staggerFrom,staggerFromTo",function(n){nn[n]=function(){var e=new Qn,t=ih.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Zd=function(e,t,i){return e[t]=i},O0=function(e,t,i){return e[t](i)},Ty=function(e,t,i,r){return e[t](r.fp,i)},wy=function(e,t,i){return e.setAttribute(t,i)},Jd=function(e,t){return qt(e[t])?O0:Hd(e[t])&&e.setAttribute?wy:Zd},B0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ay=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},z0=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Qd=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Ry=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},Cy=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Mu(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Py=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},k0=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},ci=(function(){function n(t,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||B0,this.d=l||this,this.set=c||Zd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Py,this.m=i,this.mt=s,this.tween=r},n})();li(Yd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Xd[n]=1});Ti.TweenMax=Ti.TweenLite=nn;Ti.TimelineLite=Ti.TimelineMax=Qn;Wt=new Qn({sortChildren:!1,defaults:no,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bi.stringFilter=C0;var ta=[],Pc={},Dy=[],dm=0,Iy=0,qu=function(e){return(Pc[e]||Dy).map(function(t){return t()})},oh=function(){var e=Date.now(),t=[];e-dm>2&&(qu("matchMediaInit"),ta.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=Ji.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),qu("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),dm=e,qu("matchMedia"))},H0=(function(){function n(t,i){this.selector=i&&rh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Iy++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){qt(i)&&(s=r,r=i,i=qt);var a=this,o=function(){var c=kt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=rh(s)),kt=a,f=r.apply(a,arguments),qt(f)&&a._r.push(f),kt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,i===qt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=kt;kt=null,i(this),kt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof nn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Qn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof nn)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=ta.length;a--;)ta[a].id===this.id&&ta.splice(a,1)},e.revert=function(i){this.kill(i||{})},n})(),Ly=(function(){function n(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){dr(i)||(i={matches:i});var a=new H0(0,s||this.scope),o=a.conditions={},l,c,u;kt&&!a.selector&&(a.selector=kt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=Ji.matchMedia(i[c]),l&&(ta.indexOf(a)<0&&ta.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(oh):l.addEventListener("change",oh)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Qc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return w0(r)})},timeline:function(e){return new Qn(e)},getTweensOf:function(e,t){return Wt.getTweensOf(e,t)},getProperty:function(e,t,i,r){yn(e)&&(e=Li(e)[0]);var s=Js(e||{}).get,a=i?d0:h0;return i==="native"&&(i=""),e&&(t?a((_i[t]&&_i[t].get||s)(e,t,i,r)):function(o,l,c){return a((_i[o]&&_i[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Li(e),e.length>1){var r=e.map(function(u){return fi.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=_i[t],o=Js(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;ka._pt=0,f.init(e,i?u+i:u,ka,0,[e]),f.render(1,f),ka._pt&&Qd(1,ka)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=fi.to(e,wi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ea(e.ease,no.ease)),lm(no,e||{})},config:function(e){return lm(bi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!_i[o]&&!Ti[o]&&_l(t+" effect requires "+o+" plugin.")}),Vu[t]=function(o,l,c){return i(Li(o),wi(l||{},s),c)},a&&(Qn.prototype[t]=function(o,l,c){return this.add(Vu[t](o,dr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){pt[e]=ea(t)},parseEase:function(e,t){return arguments.length?ea(e,t):pt},getById:function(e){return Wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Qn(e),r,s;for(i.smoothChildTiming=oi(e.smoothChildTiming),Wt.remove(i),i._dp=0,i._time=i._tTime=Wt._time,r=Wt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof nn&&r.vars.onComplete===r._targets[0]))&&nr(i,r,r._start-r._delay),r=s;return nr(Wt,i,0),i},context:function(e,t){return e?new H0(e,t):kt},matchMedia:function(e){return new Ly(e)},matchMediaRefresh:function(){return ta.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||oh()},addEventListener:function(e,t){var i=Pc[e]||(Pc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Pc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:fy,wrapYoyo:hy,distribute:S0,random:y0,snap:M0,normalize:uy,getUnit:Bn,clamp:ay,splitColor:A0,toArray:Li,selector:rh,mapRange:b0,pipe:ly,unitize:cy,interpolate:dy,shuffle:x0},install:o0,effects:Vu,ticker:xi,updateRoot:Qn.updateRoot,plugins:_i,globalTimeline:Wt,core:{PropTween:ci,globals:l0,Tween:nn,Timeline:Qn,Animation:Ml,getCache:Js,_removeLinkedListItem:Mu,reverting:function(){return An},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return kd=e}}};li("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Qc[n]=nn[n]});xi.add(Qn.updateRoot);ka=Qc.to({},{duration:0});var Uy=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Ny=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=Uy(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},$u=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(yn(s)&&(l={},li(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Ny(o,s)}}}},fi=Qc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)An?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},$u("roundProps",sh),$u("modifiers"),$u("snap",M0))||Qc;nn.version=Qn.version=fi.version="3.14.2";a0=1;Gd()&&ao();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pm,as,qa,ep,qs,mm,tp,Fy=function(){return typeof window<"u"},kr={},ks=180/Math.PI,$a=Math.PI/180,ga=Math.atan2,gm=1e8,np=/([A-Z])/g,Oy=/(left|right|width|margin|padding|x)/i,By=/[\s,\(]\S/,sr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ky=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Hy=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gy=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},G0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},V0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Vy=function(e,t,i){return e.style[t]=i},Wy=function(e,t,i){return e.style.setProperty(t,i)},Xy=function(e,t,i){return e._gsap[t]=i},Yy=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},qy=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},$y=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Xt="transform",ui=Xt+"Origin",Ky=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in kr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=sr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Rr(r,o)}):this.tfm[e]=a.x?a[e]:Rr(r,e),e===ui&&(this.tfm.zOrigin=a.zOrigin);else return sr.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Xt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ui,t,"")),e=Xt}(s||t)&&this.props.push(e,t,s[e])},W0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jy=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(np,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=tp(),(!s||!s.isStart)&&!i[Xt]&&(W0(i),r.zOrigin&&i[ui]&&(i[ui]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},X0=function(e,t){var i={target:e,props:[],revert:jy,save:Ky};return e._gsap||fi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Y0,ch=function(e,t){var i=as.createElementNS?as.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):as.createElement(e);return i&&i.style?i:as.createElement(e)},Ei=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(np,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,oo(t)||t,1)||""},_m="O,Moz,ms,Ms,Webkit".split(","),oo=function(e,t,i){var r=t||qs,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(_m[a]+e in s););return a<0?null:(a===3?"ms":a>=0?_m[a]:"")+e},uh=function(){Fy()&&window.document&&(pm=window,as=pm.document,qa=as.documentElement,qs=ch("div")||{style:{}},ch("div"),Xt=oo(Xt),ui=Xt+"Origin",qs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Y0=!!oo("perspective"),tp=fi.core.reverting,ep=1)},vm=function(e){var t=e.ownerSVGElement,i=ch("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),qa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),qa.removeChild(i),s},xm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},q0=function(e){var t,i;try{t=e.getBBox()}catch{t=vm(e),i=1}return t&&(t.width||t.height)||i||(t=vm(e)),t&&!t.width&&!t.x&&!t.y?{x:+xm(e,["x","cx","x1"])||0,y:+xm(e,["y","cy","y1"])||0,width:0,height:0}:t},$0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&q0(e))},ys=function(e,t){if(t){var i=e.style,r;t in kr&&t!==ui&&(t=Xt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(np,"-$1").toLowerCase())):i.removeAttribute(t)}},os=function(e,t,i,r,s,a){var o=new ci(e._pt,t,i,0,1,a?V0:G0);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},Sm={deg:1,rad:1,turn:1},Zy={grid:1,flex:1},Es=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=qs.style,l=Oy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,p,m;if(r===a||!s||Sm[r]||Sm[a])return s;if(a!=="px"&&!h&&(s=n(e,t,i,"px")),m=e.getCTM&&$0(e),(d||a==="%")&&(kr[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],jt(d?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(h?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===as||!_.appendChild)&&(_=as.body),p=_._gsap,p&&d&&p.width&&l&&p.time===xi.time&&!p.uncache)return jt(s/p.width*f);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,g=e[u],v?e.style[t]=v:ys(e,t)}else(d||a==="%")&&!Zy[Ei(_,"display")]&&(o.position=Ei(e,"position")),_===e&&(o.position="static"),_.appendChild(qs),g=qs[u],_.removeChild(qs),o.position="absolute";return l&&d&&(p=Js(_),p.time=xi.time,p.width=_[u]),jt(h?g*s/f:g&&s?f/g*s:0)},Rr=function(e,t,i,r){var s;return ep||uh(),t in sr&&t!=="transform"&&(t=sr[t],~t.indexOf(",")&&(t=t.split(",")[0])),kr[t]&&t!=="transform"?(s=El(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:tu(Ei(e,ui))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=eu[t]&&eu[t](e,t,i)||Ei(e,t)||u0(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Es(e,t,s,i)+i:s},Jy=function(e,t,i,r){if(!i||i==="none"){var s=oo(t,e,1),a=s&&Ei(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Ei(e,"borderTopColor"))}var o=new ci(this._pt,e.style,t,0,1,z0),l=0,c=0,u,f,h,d,g,_,p,m,v,y,x,b;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ei(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ei(e,t)||r,_?e.style[t]=_:ys(e,t)),u=[i,r],C0(u),i=u[0],r=u[1],h=i.match(za)||[],b=r.match(za)||[],b.length){for(;f=za.exec(r);)p=f[0],v=r.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),p.charAt(1)==="="&&(p=Ya(d,p)+x),m=parseFloat(p),y=p.substr((m+"").length),l=za.lastIndex-y.length,y||(y=y||bi.units[t]||x,l===r.length&&(r+=y,o.e+=y)),x!==y&&(d=Es(e,t,_,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?V0:G0;return s0.test(r)&&(o.e=0),this._pt=o,o},Mm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qy=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Mm[i]||i,t[1]=Mm[r]||r,t.join(" ")},eE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],kr[o]&&(l=1,o=o==="transformOrigin"?ui:Xt),ys(i,o);l&&(ys(i,Xt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",El(i,1),a.uncache=1,W0(r)))}},eu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new ci(e._pt,t,i,0,0,eE);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},yl=[1,0,0,1,0,0],K0={},j0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ym=function(e){var t=Ei(e,Xt);return j0(t)?yl:t.substr(7).match(r0).map(jt)},ip=function(e,t){var i=e._gsap||Js(e),r=e.style,s=ym(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?yl:s):(s===yl&&!e.offsetParent&&e!==qa&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,qa.appendChild(e)),s=ym(e),l?r.display=l:ys(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):qa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fh=function(e,t,i,r,s,a){var o=e._gsap,l=s||ip(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],v=l[5],y=t.split(" "),x=parseFloat(y[0])||0,b=parseFloat(y[1])||0,A,T,S,E;i?l!==yl&&(T=d*p-g*_)&&(S=x*(p/T)+b*(-_/T)+(_*v-p*m)/T,E=x*(-g/T)+b*(d/T)-(d*v-g*m)/T,x=S,b=E):(A=q0(e),x=A.x+(~y[0].indexOf("%")?x/100*A.width:x),b=A.y+(~(y[1]||y[0]).indexOf("%")?b/100*A.height:b)),r||r!==!1&&o.smooth?(m=x-c,v=b-u,o.xOffset=f+(m*d+v*_)-m,o.yOffset=h+(m*g+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[ui]="0px 0px",a&&(os(a,o,"xOrigin",c,x),os(a,o,"yOrigin",u,b),os(a,o,"xOffset",f,o.xOffset),os(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+b)},El=function(e,t){var i=e._gsap||new L0(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Ei(e,ui)||"0",u,f,h,d,g,_,p,m,v,y,x,b,A,T,S,E,U,P,N,H,W,V,k,L,X,K,D,le,ce,Ne,Ye,$e;return u=f=h=_=p=m=v=y=x=0,d=g=1,i.svg=!!(e.getCTM&&$0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),r.scale=r.rotate=r.translate="none"),T=ip(e,i.svg),i.svg&&(i.uncache?(X=e.getBBox(),c=i.xOrigin-X.x+"px "+(i.yOrigin-X.y)+"px",L=""):L=!t&&e.getAttribute("data-svg-origin"),fh(e,L||c,!!L||i.originIsAbsolute,i.smooth!==!1,T)),b=i.xOrigin||0,A=i.yOrigin||0,T!==yl&&(P=T[0],N=T[1],H=T[2],W=T[3],u=V=T[4],f=k=T[5],T.length===6?(d=Math.sqrt(P*P+N*N),g=Math.sqrt(W*W+H*H),_=P||N?ga(N,P)*ks:0,v=H||W?ga(H,W)*ks+_:0,v&&(g*=Math.abs(Math.cos(v*$a))),i.svg&&(u-=b-(b*P+A*H),f-=A-(b*N+A*W))):($e=T[6],Ne=T[7],D=T[8],le=T[9],ce=T[10],Ye=T[11],u=T[12],f=T[13],h=T[14],S=ga($e,ce),p=S*ks,S&&(E=Math.cos(-S),U=Math.sin(-S),L=V*E+D*U,X=k*E+le*U,K=$e*E+ce*U,D=V*-U+D*E,le=k*-U+le*E,ce=$e*-U+ce*E,Ye=Ne*-U+Ye*E,V=L,k=X,$e=K),S=ga(-H,ce),m=S*ks,S&&(E=Math.cos(-S),U=Math.sin(-S),L=P*E-D*U,X=N*E-le*U,K=H*E-ce*U,Ye=W*U+Ye*E,P=L,N=X,H=K),S=ga(N,P),_=S*ks,S&&(E=Math.cos(S),U=Math.sin(S),L=P*E+N*U,X=V*E+k*U,N=N*E-P*U,k=k*E-V*U,P=L,V=X),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=jt(Math.sqrt(P*P+N*N+H*H)),g=jt(Math.sqrt(k*k+$e*$e)),S=ga(V,k),v=Math.abs(S)>2e-4?S*ks:0,x=Ye?1/(Ye<0?-Ye:Ye):0),i.svg&&(L=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!j0(Ei(e,Xt)),L&&e.setAttribute("transform",L))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=jt(d),i.scaleY=jt(g),i.rotation=jt(_)+o,i.rotationX=jt(p)+o,i.rotationY=jt(m)+o,i.skewX=v+o,i.skewY=y+o,i.transformPerspective=x+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ui]=tu(c)),i.xOffset=i.yOffset=0,i.force3D=bi.force3D,i.renderTransform=i.svg?nE:Y0?Z0:tE,i.uncache=0,i},tu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ku=function(e,t,i){var r=Bn(t);return jt(parseFloat(t)+parseFloat(Es(e,"x",i+"px",r)))+r},tE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Z0(e,t)},Ds="0deg",Mo="0px",Is=") ",Z0=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,p=i.transformPerspective,m=i.force3D,v=i.target,y=i.zOrigin,x="",b=m==="auto"&&e&&e!==1||m===!0;if(y&&(f!==Ds||u!==Ds)){var A=parseFloat(u)*$a,T=Math.sin(A),S=Math.cos(A),E;A=parseFloat(f)*$a,E=Math.cos(A),a=Ku(v,a,T*E*-y),o=Ku(v,o,-Math.sin(A)*-y),l=Ku(v,l,S*E*-y+y)}p!==Mo&&(x+="perspective("+p+Is),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(b||a!==Mo||o!==Mo||l!==Mo)&&(x+=l!==Mo||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Is),c!==Ds&&(x+="rotate("+c+Is),u!==Ds&&(x+="rotateY("+u+Is),f!==Ds&&(x+="rotateX("+f+Is),(h!==Ds||d!==Ds)&&(x+="skew("+h+", "+d+Is),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Is),v.style[Xt]=x||"translate(0, 0)"},nE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,p=i.xOffset,m=i.yOffset,v=i.forceCSS,y=parseFloat(a),x=parseFloat(o),b,A,T,S,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=$a,c*=$a,b=Math.cos(l)*f,A=Math.sin(l)*f,T=Math.sin(l-c)*-h,S=Math.cos(l-c)*h,c&&(u*=$a,E=Math.tan(c-u),E=Math.sqrt(1+E*E),T*=E,S*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),b*=E,A*=E)),b=jt(b),A=jt(A),T=jt(T),S=jt(S)):(b=f,S=h,A=T=0),(y&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(y=Es(d,"x",a,"px"),x=Es(d,"y",o,"px")),(g||_||p||m)&&(y=jt(y+g-(g*b+_*T)+p),x=jt(x+_-(g*A+_*S)+m)),(r||s)&&(E=d.getBBox(),y=jt(y+r/100*E.width),x=jt(x+s/100*E.height)),E="matrix("+b+","+A+","+T+","+S+","+y+","+x+")",d.setAttribute("transform",E),v&&(d.style[Xt]=E)},iE=function(e,t,i,r,s){var a=360,o=yn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ks:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*gm)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*gm)%a-~~(c/a)*a)),e._pt=h=new ci(e._pt,t,i,r,c,zy),h.e=u,h.u="deg",e._props.push(i),h},Em=function(e,t){for(var i in t)e[i]=t[i];return e},rE=function(e,t,i){var r=Em({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,f,h,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Xt]=t,o=El(i,1),ys(i,Xt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Xt],a[Xt]=t,o=El(i,1),a[Xt]=c);for(l in kr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Bn(c),g=Bn(u),f=d!==g?Es(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new ci(e._pt,o,l,f,h-f,lh),e._pt.u=g||0,e._props.push(l));Em(o,r)};li("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});eu[e>1?"border"+n:n]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(g){return Rr(o,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var J0={name:"css",register:uh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,f,h,d,g,_,p,m,v,y,x,b,A,T,S,E;ep||uh(),this.styles=this.styles||X0(e),S=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(_i[_]&&U0(_,t,i,r,e,s)))){if(d=typeof u,g=eu[_],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=xl(u)),g)g(this,e,_,u,i)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ms.lastIndex=0,ms.test(c)||(p=Bn(c),m=Bn(u),m?p!==m&&(c=Es(e,_,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),S.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],yn(c)&&~c.indexOf("random(")&&(c=xl(c)),Bn(c+"")||c==="auto"||(c+=bi.units[_]||Bn(Rr(e,_))||""),(c+"").charAt(1)==="="&&(c=Rr(e,_))):c=Rr(e,_),h=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),_ in sr&&(_==="autoAlpha"&&(h===1&&Rr(e,"visibility")==="hidden"&&f&&(h=0),S.push("visibility",0,o.visibility),os(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=sr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in kr,y){if(this.styles.save(_),E=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Ei(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var U=e.style.perspective;e.style.perspective=u,u=Ei(e,"perspective"),U?e.style.perspective=U:ys(e,"perspective")}f=parseFloat(u)}if(x||(b=e._gsap,b.renderTransform&&!t.parseTransform||El(e,t.parseTransform),A=t.smoothOrigin!==!1&&b.smooth,x=this._pt=new ci(this._pt,o,Xt,0,1,b.renderTransform,b,0,-1),x.dep=1),_==="scale")this._pt=new ci(this._pt,b,"scaleY",b.scaleY,(v?Ya(b.scaleY,v+f):f)-b.scaleY||0,lh),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(ui,0,o[ui]),u=Qy(u),b.svg?fh(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==b.zOrigin&&os(this,b,"zOrigin",b.zOrigin,m),os(this,o,_,tu(c),tu(u)));continue}else if(_==="svgOrigin"){fh(e,u,1,A,0,this);continue}else if(_ in K0){iE(this,b,_,h,v?Ya(h,v+u):u);continue}else if(_==="smoothOrigin"){os(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){rE(this,u,e);continue}}else _ in o||(_=oo(_)||_);if(y||(f||f===0)&&(h||h===0)&&!By.test(u)&&_ in o)p=(c+"").substr((h+"").length),f||(f=0),m=Bn(u)||(_ in bi.units?bi.units[_]:p),p!==m&&(h=Es(e,_,c,m)),this._pt=new ci(this._pt,y?b:o,_,h,(v?Ya(h,v+f):f)-h,!y&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Gy:lh),this._pt.u=m||0,y&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=Hy):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=ky);else if(_ in o)Jy.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,r,s);else if(_!=="parseTransform"){Wd(_,u);continue}y||(_ in o?S.push(_,0,o[_]):typeof e[_]=="function"?S.push(_,2,e[_]()):S.push(_,1,c||e[_])),a.push(_)}}T&&k0(this)},render:function(e,t){if(t.tween._time||!tp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Rr,aliases:sr,getSetter:function(e,t,i){var r=sr[t];return r&&r.indexOf(",")<0&&(t=r),t in kr&&t!==ui&&(e._gsap.x||Rr(e,"x"))?i&&mm===i?t==="scale"?Yy:Xy:(mm=i||{})&&(t==="scale"?qy:$y):e.style&&!Hd(e.style[t])?Vy:~t.indexOf("-")?Wy:Jd(e,t)},core:{_removeProperty:ys,_getMatrix:ip}};fi.utils.checkPrefix=oo;fi.core.getStyleSaver=X0;(function(n,e,t,i){var r=li(n+","+e+","+t,function(s){kr[s]=1});li(e,function(s){bi.units[s]="deg",K0[s]=1}),sr[r[13]]=n+","+e,li(i,function(s){var a=s.split(":");sr[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");li("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){bi.units[n]="px"});fi.registerPlugin(J0);var $s=fi.registerPlugin(J0)||fi;$s.core.Tween;function sE(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function aE(n,e,t){return e&&sE(n.prototype,e),n}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bn,Dc,Si,ls,cs,Ka,Q0,Hs,tl,ev,Dr,zi,tv,nv=function(){return bn||typeof window<"u"&&(bn=window.gsap)&&bn.registerPlugin&&bn},iv=1,Ha=[],ct=[],ur=[],nl=Date.now,hh=function(e,t){return t},oE=function(){var e=tl.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ct),r.push.apply(r,ur),ct=i,ur=r,hh=function(a,o){return t[a](o)}},gs=function(e,t){return~ur.indexOf(e)&&ur[ur.indexOf(e)+1][t]},il=function(e){return!!~ev.indexOf(e)},Xn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Vn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Hl="scrollLeft",Gl="scrollTop",dh=function(){return Dr&&Dr.isPressed||ct.cache++},nu=function(e,t){var i=function r(s){if(s||s===0){iv&&(Si.history.scrollRestoration="manual");var a=Dr&&Dr.isPressed;s=r.v=Math.round(s)||(Dr&&Dr.iOS?1:0),e(s),r.cacheID=ct.cache,a&&hh("ss",s)}else(t||ct.cache!==r.cacheID||hh("ref"))&&(r.cacheID=ct.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ei={s:Hl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nu(function(n){return arguments.length?Si.scrollTo(n,un.sc()):Si.pageXOffset||ls[Hl]||cs[Hl]||Ka[Hl]||0})},un={s:Gl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ei,sc:nu(function(n){return arguments.length?Si.scrollTo(ei.sc(),n):Si.pageYOffset||ls[Gl]||cs[Gl]||Ka[Gl]||0})},si=function(e,t){return(t&&t._ctx&&t._ctx.selector||bn.utils.toArray)(e)[0]||(typeof e=="string"&&bn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},lE=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},bs=function(e,t){var i=t.s,r=t.sc;il(e)&&(e=ls.scrollingElement||cs);var s=ct.indexOf(e),a=r===un.sc?1:2;!~s&&(s=ct.push(e)-1),ct[s+a]||Xn(e,"scroll",dh);var o=ct[s+a],l=o||(ct[s+a]=nu(gs(e,i),!0)||(il(e)?r:nu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,o||(l.smooth=bn.getProperty(e,"scrollBehavior")==="smooth"),l},ph=function(e,t,i){var r=e,s=e,a=nl(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=nl();_||p-a>l?(s=r,r=g,o=a,a=p):i?r+=g:r=s+(g-s)/(p-o)*(a-o)},f=function(){s=r=i?0:r,o=a=0},h=function(g){var _=o,p=s,m=nl();return(g||g===0)&&g!==r&&u(g),a===o||m-o>c?0:(r+(i?p:-p))/((i?m:a)-_)*1e3};return{update:u,reset:f,getVelocity:h}},yo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},bm=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},rv=function(){tl=bn.core.globals().ScrollTrigger,tl&&tl.core&&oE()},sv=function(e){return bn=e||nv(),!Dc&&bn&&typeof document<"u"&&document.body&&(Si=window,ls=document,cs=ls.documentElement,Ka=ls.body,ev=[Si,ls,cs,Ka],bn.utils.clamp,tv=bn.core.context||function(){},Hs="onpointerenter"in Ka?"pointer":"mouse",Q0=Zt.isTouch=Si.matchMedia&&Si.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Si||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,zi=Zt.eventTypes=("ontouchstart"in cs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in cs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return iv=0},500),rv(),Dc=1),Dc};ei.op=un;ct.cache=0;var Zt=(function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Dc||sv(bn)||console.warn("Please gsap.registerPlugin(Observer)"),tl||rv();var r=i.tolerance,s=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,f=i.onStop,h=i.onStopDelay,d=i.ignore,g=i.wheelSpeed,_=i.event,p=i.onDragStart,m=i.onDragEnd,v=i.onDrag,y=i.onPress,x=i.onRelease,b=i.onRight,A=i.onLeft,T=i.onUp,S=i.onDown,E=i.onChangeX,U=i.onChangeY,P=i.onChange,N=i.onToggleX,H=i.onToggleY,W=i.onHover,V=i.onHoverEnd,k=i.onMove,L=i.ignoreCheck,X=i.isNormalizer,K=i.onGestureStart,D=i.onGestureEnd,le=i.onWheel,ce=i.onEnable,Ne=i.onDisable,Ye=i.onClick,$e=i.scrollSpeed,ie=i.capture,ue=i.allowClicks,de=i.lockAxis,ze=i.onLockAxis;this.target=o=si(o)||cs,this.vars=i,d&&(d=bn.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,$e=$e||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Si.getComputedStyle(Ka).lineHeight)||22);var Le,Ie,I,O,Y,re,Q,F=this,C=0,fe=0,ae=i.passive||!u&&i.passive!==!1,ne=bs(o,ei),oe=bs(o,un),R=ne(),M=oe(),B=~a.indexOf("touch")&&!~a.indexOf("pointer")&&zi[0]==="pointerdown",j=il(o),ee=o.ownerDocument||ls,q=[0,0,0],ve=[0,0,0],he=0,De=function(){return he=nl()},Me=function(ke,et){return(F.event=ke)&&d&&lE(ke.target,d)||et&&B&&ke.pointerType!=="touch"||L&&L(ke,et)},pe=function(){F._vx.reset(),F._vy.reset(),Ie.pause(),f&&f(F)},ge=function(){var ke=F.deltaX=bm(q),et=F.deltaY=bm(ve),Re=Math.abs(ke)>=r,Ke=Math.abs(et)>=r;P&&(Re||Ke)&&P(F,ke,et,q,ve),Re&&(b&&F.deltaX>0&&b(F),A&&F.deltaX<0&&A(F),E&&E(F),N&&F.deltaX<0!=C<0&&N(F),C=F.deltaX,q[0]=q[1]=q[2]=0),Ke&&(S&&F.deltaY>0&&S(F),T&&F.deltaY<0&&T(F),U&&U(F),H&&F.deltaY<0!=fe<0&&H(F),fe=F.deltaY,ve[0]=ve[1]=ve[2]=0),(O||I)&&(k&&k(F),I&&(p&&I===1&&p(F),v&&v(F),I=0),O=!1),re&&!(re=!1)&&ze&&ze(F),Y&&(le(F),Y=!1),Le=0},Se=function(ke,et,Re){q[Re]+=ke,ve[Re]+=et,F._vx.update(ke),F._vy.update(et),c?Le||(Le=requestAnimationFrame(ge)):ge()},Te=function(ke,et){de&&!Q&&(F.axis=Q=Math.abs(ke)>Math.abs(et)?"x":"y",re=!0),Q!=="y"&&(q[2]+=ke,F._vx.update(ke,!0)),Q!=="x"&&(ve[2]+=et,F._vy.update(et,!0)),c?Le||(Le=requestAnimationFrame(ge)):ge()},ye=function(ke){if(!Me(ke,1)){ke=yo(ke,u);var et=ke.clientX,Re=ke.clientY,Ke=et-F.x,We=Re-F.y,je=F.isDragging;F.x=et,F.y=Re,(je||(Ke||We)&&(Math.abs(F.startX-et)>=s||Math.abs(F.startY-Re)>=s))&&(I||(I=je?2:1),je||(F.isDragging=!0),Te(Ke,We))}},qe=F.onPress=function(Pe){Me(Pe,1)||Pe&&Pe.button||(F.axis=Q=null,Ie.pause(),F.isPressed=!0,Pe=yo(Pe),C=fe=0,F.startX=F.x=Pe.clientX,F.startY=F.y=Pe.clientY,F._vx.reset(),F._vy.reset(),Xn(X?o:ee,zi[1],ye,ae,!0),F.deltaX=F.deltaY=0,y&&y(F))},z=F.onRelease=function(Pe){if(!Me(Pe,1)){Vn(X?o:ee,zi[1],ye,!0);var ke=!isNaN(F.y-F.startY),et=F.isDragging,Re=et&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Ke=yo(Pe);!Re&&ke&&(F._vx.reset(),F._vy.reset(),u&&ue&&bn.delayedCall(.08,function(){if(nl()-he>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(ee.createEvent){var We=ee.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,Si,1,Ke.screenX,Ke.screenY,Ke.clientX,Ke.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(We)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,f&&et&&!X&&Ie.restart(!0),I&&ge(),m&&et&&m(F),x&&x(F,Re)}},xe=function(ke){return ke.touches&&ke.touches.length>1&&(F.isGesturing=!0)&&K(ke,F.isDragging)},_e=function(){return(F.isGesturing=!1)||D(F)},we=function(ke){if(!Me(ke)){var et=ne(),Re=oe();Se((et-R)*$e,(Re-M)*$e,1),R=et,M=Re,f&&Ie.restart(!0)}},me=function(ke){if(!Me(ke)){ke=yo(ke,u),le&&(Y=!0);var et=(ke.deltaMode===1?l:ke.deltaMode===2?Si.innerHeight:1)*g;Se(ke.deltaX*et,ke.deltaY*et,0),f&&!X&&Ie.restart(!0)}},se=function(ke){if(!Me(ke)){var et=ke.clientX,Re=ke.clientY,Ke=et-F.x,We=Re-F.y;F.x=et,F.y=Re,O=!0,f&&Ie.restart(!0),(Ke||We)&&Te(Ke,We)}},Ue=function(ke){F.event=ke,W(F)},Ve=function(ke){F.event=ke,V(F)},gt=function(ke){return Me(ke)||yo(ke,u)&&Ye(F)};Ie=F._dc=bn.delayedCall(h||.25,pe).pause(),F.deltaX=F.deltaY=0,F._vx=ph(0,50,!0),F._vy=ph(0,50,!0),F.scrollX=ne,F.scrollY=oe,F.isDragging=F.isGesturing=F.isPressed=!1,tv(this),F.enable=function(Pe){return F.isEnabled||(Xn(j?ee:o,"scroll",dh),a.indexOf("scroll")>=0&&Xn(j?ee:o,"scroll",we,ae,ie),a.indexOf("wheel")>=0&&Xn(o,"wheel",me,ae,ie),(a.indexOf("touch")>=0&&Q0||a.indexOf("pointer")>=0)&&(Xn(o,zi[0],qe,ae,ie),Xn(ee,zi[2],z),Xn(ee,zi[3],z),ue&&Xn(o,"click",De,!0,!0),Ye&&Xn(o,"click",gt),K&&Xn(ee,"gesturestart",xe),D&&Xn(ee,"gestureend",_e),W&&Xn(o,Hs+"enter",Ue),V&&Xn(o,Hs+"leave",Ve),k&&Xn(o,Hs+"move",se)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=O=I=!1,F._vx.reset(),F._vy.reset(),R=ne(),M=oe(),Pe&&Pe.type&&qe(Pe),ce&&ce(F)),F},F.disable=function(){F.isEnabled&&(Ha.filter(function(Pe){return Pe!==F&&il(Pe.target)}).length||Vn(j?ee:o,"scroll",dh),F.isPressed&&(F._vx.reset(),F._vy.reset(),Vn(X?o:ee,zi[1],ye,!0)),Vn(j?ee:o,"scroll",we,ie),Vn(o,"wheel",me,ie),Vn(o,zi[0],qe,ie),Vn(ee,zi[2],z),Vn(ee,zi[3],z),Vn(o,"click",De,!0),Vn(o,"click",gt),Vn(ee,"gesturestart",xe),Vn(ee,"gestureend",_e),Vn(o,Hs+"enter",Ue),Vn(o,Hs+"leave",Ve),Vn(o,Hs+"move",se),F.isEnabled=F.isPressed=F.isDragging=!1,Ne&&Ne(F))},F.kill=F.revert=function(){F.disable();var Pe=Ha.indexOf(F);Pe>=0&&Ha.splice(Pe,1),Dr===F&&(Dr=0)},Ha.push(F),X&&il(o)&&(Dr=F),F.enable(_)},aE(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n})();Zt.version="3.14.2";Zt.create=function(n){return new Zt(n)};Zt.register=sv;Zt.getAll=function(){return Ha.slice()};Zt.getById=function(n){return Ha.filter(function(e){return e.vars.id===n})[0]};nv()&&bn.registerPlugin(Zt);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Be,Fa,lt,Ut,vi,Mt,rp,iu,bl,rl,Oo,Vl,Nn,bu,mh,$n,Tm,wm,Oa,av,ju,ov,qn,gh,lv,cv,ts,_h,sp,ja,ap,sl,vh,Zu,Wl=1,Fn=Date.now,Ju=Fn(),Ui=0,Bo=0,Am=function(e,t,i){var r=gi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Rm=function(e,t){return t&&(!gi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},cE=function n(){return Bo&&requestAnimationFrame(n)},Cm=function(){return bu=1},Pm=function(){return bu=0},Qi=function(e){return e},zo=function(e){return Math.round(e*1e5)/1e5||0},uv=function(){return typeof window<"u"},fv=function(){return Be||uv()&&(Be=window.gsap)&&Be.registerPlugin&&Be},sa=function(e){return!!~rp.indexOf(e)},hv=function(e){return(e==="Height"?ap:lt["inner"+e])||vi["client"+e]||Mt["client"+e]},dv=function(e){return gs(e,"getBoundingClientRect")||(sa(e)?function(){return Fc.width=lt.innerWidth,Fc.height=ap,Fc}:function(){return Pr(e)})},uE=function(e,t,i){var r=i.d,s=i.d2,a=i.a;return(a=gs(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?hv(s):e["client"+s])||0}},fE=function(e,t){return!t||~ur.indexOf(e)?dv(e):function(){return Fc}},ar=function(e,t){var i=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(i="scroll"+r)&&(a=gs(e,i))?a()-dv(e)()[s]:sa(e)?(vi[i]||Mt[i])-hv(r):e[i]-e["offset"+r])},Xl=function(e,t){for(var i=0;i<Oa.length;i+=3)(!t||~t.indexOf(Oa[i+1]))&&e(Oa[i],Oa[i+1],Oa[i+2])},gi=function(e){return typeof e=="string"},zn=function(e){return typeof e=="function"},ko=function(e){return typeof e=="number"},Gs=function(e){return typeof e=="object"},Eo=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Qu=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},_a=Math.abs,pv="left",mv="top",op="right",lp="bottom",na="width",ia="height",al="Right",ol="Left",ll="Top",cl="Bottom",tn="padding",Pi="margin",lo="Width",cp="Height",cn="px",Di=function(e){return lt.getComputedStyle(e)},hE=function(e){var t=Di(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Dm=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Pr=function(e,t){var i=t&&Di(e)[mh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},ru=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},gv=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},dE=function(e){return function(t){return Be.utils.snap(gv(e),t)}},up=function(e){var t=Be.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<i.length;o++)if(i[o]>=r)return i[o];return i[o-1]}else for(o=i.length,r+=a;o--;)if(i[o]<=r)return i[o];return i[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},pE=function(e){return function(t,i){return up(gv(e))(t,i.direction)}},Yl=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},vn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},_n=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},ql=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Im={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},$l={toggleActions:"play",anticipatePin:0},su={top:0,left:0,center:.5,bottom:1,right:1},Ic=function(e,t){if(gi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in su?su[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Kl=function(e,t,i,r,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=Ut.createElement("div"),_=sa(i)||gs(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?Mt:i,v=e.indexOf("start")!==-1,y=v?c:u,x="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(x+=(r===un?op:lp)+":"+(a+parseFloat(h))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+r.op.d2],Lc(g,0,r,v),g},Lc=function(e,t,i,r){var s={display:"block"},a=i[r?"os2":"p2"],o=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+a+lo]=1,s["border"+o+lo]=0,s[i.p]=t+"px",Be.set(e,s)},st=[],xh={},Tl,Lm=function(){return Fn()-Ui>34&&(Tl||(Tl=requestAnimationFrame(Ur)))},va=function(){(!qn||!qn.isPressed||qn.startX>Mt.clientWidth)&&(ct.cache++,qn?Tl||(Tl=requestAnimationFrame(Ur)):Ur(),Ui||oa("scrollStart"),Ui=Fn())},ef=function(){cv=lt.innerWidth,lv=lt.innerHeight},Ho=function(e){ct.cache++,(e===!0||!Nn&&!ov&&!Ut.fullscreenElement&&!Ut.webkitFullscreenElement&&(!gh||cv!==lt.innerWidth||Math.abs(lt.innerHeight-lv)>lt.innerHeight*.25))&&iu.restart(!0)},aa={},mE=[],_v=function n(){return _n(ot,"scrollEnd",n)||Ks(!0)},oa=function(e){return aa[e]&&aa[e].map(function(t){return t()})||mE},mi=[],vv=function(e){for(var t=0;t<mi.length;t+=5)(!e||mi[t+4]&&mi[t+4].query===e)&&(mi[t].style.cssText=mi[t+1],mi[t].getBBox&&mi[t].setAttribute("transform",mi[t+2]||""),mi[t+3].uncache=1)},xv=function(){return ct.forEach(function(e){return zn(e)&&++e.cacheID&&(e.rec=e())})},fp=function(e,t){var i;for($n=0;$n<st.length;$n++)i=st[$n],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));sl=!0,t&&vv(t),t||oa("revert")},Sv=function(e,t){ct.cache++,(t||!Kn)&&ct.forEach(function(i){return zn(i)&&i.cacheID++&&(i.rec=0)}),gi(e)&&(lt.history.scrollRestoration=sp=e)},Kn,ra=0,Um,gE=function(){if(Um!==ra){var e=Um=ra;requestAnimationFrame(function(){return e===ra&&Ks(!0)})}},Mv=function(){Mt.appendChild(ja),ap=!qn&&ja.offsetHeight||lt.innerHeight,Mt.removeChild(ja)},Nm=function(e){return bl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ks=function(e,t){if(vi=Ut.documentElement,Mt=Ut.body,rp=[lt,Ut,vi,Mt],Ui&&!e&&!sl){vn(ot,"scrollEnd",_v);return}Mv(),Kn=ot.isRefreshing=!0,sl||xv();var i=oa("refreshInit");av&&ot.sort(),t||fp(),ct.forEach(function(r){zn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),st.slice(0).forEach(function(r){return r.refresh()}),sl=!1,st.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),vh=1,Nm(!0),st.forEach(function(r){var s=ar(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Nm(!1),vh=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ct.forEach(function(r){zn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Sv(sp,1),iu.pause(),ra++,Kn=2,Ur(2),st.forEach(function(r){return zn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Kn=ot.isRefreshing=!1,oa("refresh")},Sh=0,Uc=1,ul,Ur=function(e){if(e===2||!Kn&&!sl){ot.isUpdating=!0,ul&&ul.update(0);var t=st.length,i=Fn(),r=i-Ju>=50,s=t&&st[0].scroll();if(Uc=Sh>s?-1:1,Kn||(Sh=s),r&&(Ui&&!bu&&i-Ui>200&&(Ui=0,oa("scrollEnd")),Oo=Ju,Ju=i),Uc<0){for($n=t;$n-- >0;)st[$n]&&st[$n].update(0,r);Uc=1}else for($n=0;$n<t;$n++)st[$n]&&st[$n].update(0,r);ot.isUpdating=!1}Tl=0},Mh=[pv,mv,lp,op,Pi+cl,Pi+al,Pi+ll,Pi+ol,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Nc=Mh.concat([na,ia,"boxSizing","max"+lo,"max"+cp,"position",Pi,tn,tn+ll,tn+al,tn+cl,tn+ol]),_E=function(e,t,i){Za(i);var r=e._gsap;if(r.spacerIsNative)Za(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},tf=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Mh.length,a=t.style,o=e.style,l;s--;)l=Mh[s],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[lp]=o[op]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[na]=ru(e,ei)+cn,a[ia]=ru(e,un)+cn,a[tn]=o[Pi]=o[mv]=o[pv]="0",Za(r),o[na]=o["max"+lo]=i[na],o[ia]=o["max"+cp]=i[ia],o[tn]=i[tn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},vE=/([A-Z])/g,Za=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,a;for((e.t._gsap||Be.core.getCache(e.t)).uncache=1;r<i;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(vE,"-$1").toLowerCase())}},jl=function(e){for(var t=Nc.length,i=e.style,r=[],s=0;s<t;s++)r.push(Nc[s],i[Nc[s]]);return r.t=e,r},xE=function(e,t,i){for(var r=[],s=e.length,a=i?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Fc={left:0,top:0},Fm=function(e,t,i,r,s,a,o,l,c,u,f,h,d,g){zn(e)&&(e=e(l)),gi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Ic("0"+e.substr(3),i):0));var _=d?d.time():0,p,m,v;if(d&&d.seek(0),isNaN(e)||(e=+e),ko(e))d&&(e=Be.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&Lc(o,i,r,!0);else{zn(t)&&(t=t(l));var y=(e||"0").split(" "),x,b,A,T;v=si(t,l)||Mt,x=Pr(v)||{},(!x||!x.left&&!x.top)&&Di(v).display==="none"&&(T=v.style.display,v.style.display="block",x=Pr(v),T?v.style.display=T:v.style.removeProperty("display")),b=Ic(y[0],x[r.d]),A=Ic(y[1]||"0",i),e=x[r.p]-c[r.p]-u+b+s-A,o&&Lc(o,A,r,i-A<20||o._isStart&&A>20),i-=i-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var S=e+i,E=a._isStart;p="scroll"+r.d2,Lc(a,S,r,E&&S>20||!E&&(f?Math.max(Mt[p],vi[p]):a.parentNode[p])<=S+1),f&&(c=Pr(o),f&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+cn))}return d&&v&&(p=Pr(v),d.seek(h),m=Pr(v),d._caScrollDist=p[r.p]-m[r.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},SE=/(webkit|moz|length|cssText|inset)/i,Om=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===Mt){e._stOrig=s.cssText,o=Di(e);for(a in o)!+a&&!SE.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=i,s.left=r}else s.cssText=e._stOrig;Be.core.getCache(e).uncache=1,t.appendChild(e)}},yv=function(e,t,i){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,i&&i()),s=r,r=Math.round(a),r}},Zl=function(e,t,i){var r={};r[t.p]="+="+i,Be.set(e,r)},Bm=function(e,t){var i=bs(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,g={};c=c||i();var _=yv(i,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[r]=o,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ct.cache++,a.tween&&Ur()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Be.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vn(e,"wheel",i.wheelHandler),ot.isTouch&&vn(e,"touchmove",i.wheelHandler),s},ot=(function(){function n(t,i){Fa||n.register(Be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),_h(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Bo){this.update=this.refresh=this.kill=Qi;return}i=Dm(gi(i)||ko(i)||i.nodeType?{trigger:i}:i,$l);var s=i,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,v=s.onSnapComplete,y=s.once,x=s.snap,b=s.pinReparent,A=s.pinSpacer,T=s.containerAnimation,S=s.fastScrollEnd,E=s.preventOverlaps,U=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ei:un,P=!f&&f!==0,N=si(i.scroller||lt),H=Be.core.getCache(N),W=sa(N),V=("pinType"in i?i.pinType:gs(N,"pinType")||W&&"fixed")==="fixed",k=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],L=P&&i.toggleActions.split(" "),X="markers"in i?i.markers:$l.markers,K=W?0:parseFloat(Di(N)["border"+U.p2+lo])||0,D=this,le=i.onRefreshInit&&function(){return i.onRefreshInit(D)},ce=uE(N,W,U),Ne=fE(N,W),Ye=0,$e=0,ie=0,ue=bs(N,U),de,ze,Le,Ie,I,O,Y,re,Q,F,C,fe,ae,ne,oe,R,M,B,j,ee,q,ve,he,De,Me,pe,ge,Se,Te,ye,qe,z,xe,_e,we,me,se,Ue,Ve;if(D._startClamp=D._endClamp=!1,D._dir=U,p*=45,D.scroller=N,D.scroll=T?T.time.bind(T):ue,Ie=ue(),D.vars=i,r=r||i.animation,"refreshPriority"in i&&(av=1,i.refreshPriority===-9999&&(ul=D)),H.tweenScroll=H.tweenScroll||{top:Bm(N,un),left:Bm(N,ei)},D.tweenTo=de=H.tweenScroll[U.p],D.scrubDuration=function(Re){xe=ko(Re)&&Re,xe?z?z.duration(Re):z=Be.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:xe,paused:!0,onComplete:function(){return m&&m(D)}}):(z&&z.progress(1).kill(),z=0)},r&&(r.vars.lazy=!1,r._initted&&!D.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(f),ye=0,l||(l=r.vars.id)),x&&((!Gs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Mt.style&&Be.set(W?[Mt,vi]:N,{scrollBehavior:"auto"}),ct.forEach(function(Re){return zn(Re)&&Re.target===(W?Ut.scrollingElement||vi:N)&&(Re.smooth=!1)}),Le=zn(x.snapTo)?x.snapTo:x.snapTo==="labels"?dE(r):x.snapTo==="labelsDirectional"?pE(r):x.directional!==!1?function(Re,Ke){return up(x.snapTo)(Re,Fn()-$e<500?0:Ke.direction)}:Be.utils.snap(x.snapTo),_e=x.duration||{min:.1,max:2},_e=Gs(_e)?rl(_e.min,_e.max):rl(_e,_e),we=Be.delayedCall(x.delay||xe/2||.1,function(){var Re=ue(),Ke=Fn()-$e<500,We=de.tween;if((Ke||Math.abs(D.getVelocity())<10)&&!We&&!bu&&Ye!==Re){var je=(Re-O)/ne,$t=r&&!P?r.totalProgress():je,Je=Ke?0:($t-qe)/(Fn()-Oo)*1e3||0,Ot=Be.utils.clamp(-je,1-je,_a(Je/2)*Je/.185),an=je+(x.inertia===!1?0:Ot),Bt,bt,St=x,Pn=St.onStart,Lt=St.onInterrupt,Dn=St.onComplete;if(Bt=Le(an,D),ko(Bt)||(Bt=an),bt=Math.max(0,Math.round(O+Bt*ne)),Re<=Y&&Re>=O&&bt!==Re){if(We&&!We._initted&&We.data<=_a(bt-Re))return;x.inertia===!1&&(Ot=Bt-je),de(bt,{duration:_e(_a(Math.max(_a(an-$t),_a(Bt-$t))*.185/Je/.05||0)),ease:x.ease||"power3",data:_a(bt-Re),onInterrupt:function(){return we.restart(!0)&&Lt&&Lt(D)},onComplete:function(){D.update(),Ye=ue(),r&&!P&&(z?z.resetTo("totalProgress",Bt,r._tTime/r._tDur):r.progress(Bt)),ye=qe=r&&!P?r.totalProgress():D.progress,v&&v(D),Dn&&Dn(D)}},Re,Ot*ne,bt-Re-Ot*ne),Pn&&Pn(D,de.tween)}}else D.isActive&&Ye!==Re&&we.restart(!0)}).pause()),l&&(xh[l]=D),h=D.trigger=si(h||d!==!0&&d),Ve=h&&h._gsap&&h._gsap.stRevert,Ve&&(Ve=Ve(D)),d=d===!0?h:si(d),gi(o)&&(o={targets:h,className:o}),d&&(g===!1||g===Pi||(g=!g&&d.parentNode&&d.parentNode.style&&Di(d.parentNode).display==="flex"?!1:tn),D.pin=d,ze=Be.core.getCache(d),ze.spacer?oe=ze.pinState:(A&&(A=si(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),ze.spacerIsNative=!!A,A&&(ze.spacerState=jl(A))),ze.spacer=B=A||Ut.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),ze.pinState=oe=jl(d)),i.force3D!==!1&&Be.set(d,{force3D:!0}),D.spacer=B=ze.spacer,Te=Di(d),De=Te[g+U.os2],ee=Be.getProperty(d),q=Be.quickSetter(d,U.a,cn),tf(d,B,Te),M=jl(d)),X){fe=Gs(X)?Dm(X,Im):Im,F=Kl("scroller-start",l,N,U,fe,0),C=Kl("scroller-end",l,N,U,fe,0,F),j=F["offset"+U.op.d2];var gt=si(gs(N,"content")||N);re=this.markerStart=Kl("start",l,gt,U,fe,j,0,T),Q=this.markerEnd=Kl("end",l,gt,U,fe,j,0,T),T&&(Ue=Be.quickSetter([re,Q],U.a,cn)),!V&&!(ur.length&&gs(N,"fixedMarkers")===!0)&&(hE(W?Mt:N),Be.set([F,C],{force3D:!0}),pe=Be.quickSetter(F,U.a,cn),Se=Be.quickSetter(C,U.a,cn))}if(T){var Pe=T.vars.onUpdate,ke=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){D.update(0,0,1),Pe&&Pe.apply(T,ke||[])})}if(D.previous=function(){return st[st.indexOf(D)-1]},D.next=function(){return st[st.indexOf(D)+1]},D.revert=function(Re,Ke){if(!Ke)return D.kill(!0);var We=Re!==!1||!D.enabled,je=Nn;We!==D.isReverted&&(We&&(me=Math.max(ue(),D.scroll.rec||0),ie=D.progress,se=r&&r.progress()),re&&[re,Q,F,C].forEach(function($t){return $t.style.display=We?"none":"block"}),We&&(Nn=D,D.update(We)),d&&(!b||!D.isActive)&&(We?_E(d,B,oe):tf(d,B,Di(d),Me)),We||D.update(We),Nn=je,D.isReverted=We)},D.refresh=function(Re,Ke,We,je){if(!((Nn||!D.enabled)&&!Ke)){if(d&&Re&&Ui){vn(n,"scrollEnd",_v);return}!Kn&&le&&le(D),Nn=D,de.tween&&!We&&(de.tween.kill(),de.tween=0),z&&z.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Fe){return Fe.vars.immediateRender&&Fe.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var $t=ce(),Je=Ne(),Ot=T?T.duration():ar(N,U),an=ne<=.01||!ne,Bt=0,bt=je||0,St=Gs(We)?We.end:i.end,Pn=i.endTrigger||h,Lt=Gs(We)?We.start:i.start||(i.start===0||!h?0:d?"0 0":"0 100%"),Dn=D.pinnedContainer=i.pinnedContainer&&si(i.pinnedContainer,D),Ai=h&&Math.max(0,st.indexOf(D))||0,on=Ai,ln,pn,mr,ha,w,G,te,J,Z,Ee,Ae,be,Oe;for(X&&Gs(We)&&(be=Be.getProperty(F,U.p),Oe=Be.getProperty(C,U.p));on-- >0;)G=st[on],G.end||G.refresh(0,1)||(Nn=D),te=G.pin,te&&(te===h||te===d||te===Dn)&&!G.isReverted&&(Ee||(Ee=[]),Ee.unshift(G),G.revert(!0,!0)),G!==st[on]&&(Ai--,on--);for(zn(Lt)&&(Lt=Lt(D)),Lt=Am(Lt,"start",D),O=Fm(Lt,h,$t,U,ue(),re,F,D,Je,K,V,Ot,T,D._startClamp&&"_startClamp")||(d?-.001:0),zn(St)&&(St=St(D)),gi(St)&&!St.indexOf("+=")&&(~St.indexOf(" ")?St=(gi(Lt)?Lt.split(" ")[0]:"")+St:(Bt=Ic(St.substr(2),$t),St=gi(Lt)?Lt:(T?Be.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,O):O)+Bt,Pn=h)),St=Am(St,"end",D),Y=Math.max(O,Fm(St||(Pn?"100% 0":Ot),Pn,$t,U,ue()+Bt,Q,C,D,Je,K,V,Ot,T,D._endClamp&&"_endClamp"))||-.001,Bt=0,on=Ai;on--;)G=st[on]||{},te=G.pin,te&&G.start-G._pinPush<=O&&!T&&G.end>0&&(ln=G.end-(D._startClamp?Math.max(0,G.start):G.start),(te===h&&G.start-G._pinPush<O||te===Dn)&&isNaN(Lt)&&(Bt+=ln*(1-G.progress)),te===d&&(bt+=ln));if(O+=Bt,Y+=Bt,D._startClamp&&(D._startClamp+=Bt),D._endClamp&&!Kn&&(D._endClamp=Y||-.001,Y=Math.min(Y,ar(N,U))),ne=Y-O||(O-=.01)&&.001,an&&(ie=Be.utils.clamp(0,1,Be.utils.normalize(O,Y,me))),D._pinPush=bt,re&&Bt&&(ln={},ln[U.a]="+="+Bt,Dn&&(ln[U.p]="-="+ue()),Be.set([re,Q],ln)),d&&!(vh&&D.end>=ar(N,U)))ln=Di(d),ha=U===un,mr=ue(),ve=parseFloat(ee(U.a))+bt,!Ot&&Y>1&&(Ae=(W?Ut.scrollingElement||vi:N).style,Ae={style:Ae,value:Ae["overflow"+U.a.toUpperCase()]},W&&Di(Mt)["overflow"+U.a.toUpperCase()]!=="scroll"&&(Ae.style["overflow"+U.a.toUpperCase()]="scroll")),tf(d,B,ln),M=jl(d),pn=Pr(d,!0),J=V&&bs(N,ha?ei:un)(),g?(Me=[g+U.os2,ne+bt+cn],Me.t=B,on=g===tn?ru(d,U)+ne+bt:0,on&&(Me.push(U.d,on+cn),B.style.flexBasis!=="auto"&&(B.style.flexBasis=on+cn)),Za(Me),Dn&&st.forEach(function(Fe){Fe.pin===Dn&&Fe.vars.pinSpacing!==!1&&(Fe._subPinOffset=!0)}),V&&ue(me)):(on=ru(d,U),on&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=on+cn)),V&&(w={top:pn.top+(ha?mr-O:J)+cn,left:pn.left+(ha?J:mr-O)+cn,boxSizing:"border-box",position:"fixed"},w[na]=w["max"+lo]=Math.ceil(pn.width)+cn,w[ia]=w["max"+cp]=Math.ceil(pn.height)+cn,w[Pi]=w[Pi+ll]=w[Pi+al]=w[Pi+cl]=w[Pi+ol]="0",w[tn]=ln[tn],w[tn+ll]=ln[tn+ll],w[tn+al]=ln[tn+al],w[tn+cl]=ln[tn+cl],w[tn+ol]=ln[tn+ol],R=xE(oe,w,b),Kn&&ue(0)),r?(Z=r._initted,ju(1),r.render(r.duration(),!0,!0),he=ee(U.a)-ve+ne+bt,ge=Math.abs(ne-he)>1,V&&ge&&R.splice(R.length-2,2),r.render(0,!0,!0),Z||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),ju(0)):he=ne,Ae&&(Ae.value?Ae.style["overflow"+U.a.toUpperCase()]=Ae.value:Ae.style.removeProperty("overflow-"+U.a));else if(h&&ue()&&!T)for(pn=h.parentNode;pn&&pn!==Mt;)pn._pinOffset&&(O-=pn._pinOffset,Y-=pn._pinOffset),pn=pn.parentNode;Ee&&Ee.forEach(function(Fe){return Fe.revert(!1,!0)}),D.start=O,D.end=Y,Ie=I=Kn?me:ue(),!T&&!Kn&&(Ie<me&&ue(me),D.scroll.rec=0),D.revert(!1,!0),$e=Fn(),we&&(Ye=-1,we.restart(!0)),Nn=0,r&&P&&(r._initted||se)&&r.progress()!==se&&r.progress(se||0,!0).render(r.time(),!0,!0),(an||ie!==D.progress||T||_||r&&!r._initted)&&(r&&!P&&(r._initted||ie||r.vars.immediateRender!==!1)&&r.totalProgress(T&&O<-.001&&!ie?Be.utils.normalize(O,Y,0):ie,!0),D.progress=an||(Ie-O)/ne===ie?0:ie),d&&g&&(B._pinOffset=Math.round(D.progress*he)),z&&z.invalidate(),isNaN(be)||(be-=Be.getProperty(F,U.p),Oe-=Be.getProperty(C,U.p),Zl(F,U,be),Zl(re,U,be-(je||0)),Zl(C,U,Oe),Zl(Q,U,Oe-(je||0))),an&&!Kn&&D.update(),u&&!Kn&&!ae&&(ae=!0,u(D),ae=!1)}},D.getVelocity=function(){return(ue()-I)/(Fn()-Oo)*1e3||0},D.endAnimation=function(){Eo(D.callbackAnimation),r&&(z?z.progress(1):r.paused()?P||Eo(r,D.direction<0,1):Eo(r,r.reversed()))},D.labelToScroll=function(Re){return r&&r.labels&&(O||D.refresh()||O)+r.labels[Re]/r.duration()*ne||0},D.getTrailing=function(Re){var Ke=st.indexOf(D),We=D.direction>0?st.slice(0,Ke).reverse():st.slice(Ke+1);return(gi(Re)?We.filter(function(je){return je.vars.preventOverlaps===Re}):We).filter(function(je){return D.direction>0?je.end<=O:je.start>=Y})},D.update=function(Re,Ke,We){if(!(T&&!We&&!Re)){var je=Kn===!0?me:D.scroll(),$t=Re?0:(je-O)/ne,Je=$t<0?0:$t>1?1:$t||0,Ot=D.progress,an,Bt,bt,St,Pn,Lt,Dn,Ai;if(Ke&&(I=Ie,Ie=T?ue():je,x&&(qe=ye,ye=r&&!P?r.totalProgress():Je)),p&&d&&!Nn&&!Wl&&Ui&&(!Je&&O<je+(je-I)/(Fn()-Oo)*p?Je=1e-4:Je===1&&Y>je+(je-I)/(Fn()-Oo)*p&&(Je=.9999)),Je!==Ot&&D.enabled){if(an=D.isActive=!!Je&&Je<1,Bt=!!Ot&&Ot<1,Lt=an!==Bt,Pn=Lt||!!Je!=!!Ot,D.direction=Je>Ot?1:-1,D.progress=Je,Pn&&!Nn&&(bt=Je&&!Ot?0:Je===1?1:Ot===1?2:3,P&&(St=!Lt&&L[bt+1]!=="none"&&L[bt+1]||L[bt],Ai=r&&(St==="complete"||St==="reset"||St in r))),E&&(Lt||Ai)&&(Ai||f||!r)&&(zn(E)?E(D):D.getTrailing(E).forEach(function(mr){return mr.endAnimation()})),P||(z&&!Nn&&!Wl?(z._dp._time-z._start!==z._time&&z.render(z._dp._time-z._start),z.resetTo?z.resetTo("totalProgress",Je,r._tTime/r._tDur):(z.vars.totalProgress=Je,z.invalidate().restart())):r&&r.totalProgress(Je,!!(Nn&&($e||Re)))),d){if(Re&&g&&(B.style[g+U.os2]=De),!V)q(zo(ve+he*Je));else if(Pn){if(Dn=!Re&&Je>Ot&&Y+1>je&&je+1>=ar(N,U),b)if(!Re&&(an||Dn)){var on=Pr(d,!0),ln=je-O;Om(d,Mt,on.top+(U===un?ln:0)+cn,on.left+(U===un?0:ln)+cn)}else Om(d,B);Za(an||Dn?R:M),ge&&Je<1&&an||q(ve+(Je===1&&!Dn?he:0))}}x&&!de.tween&&!Nn&&!Wl&&we.restart(!0),o&&(Lt||y&&Je&&(Je<1||!Zu))&&bl(o.targets).forEach(function(mr){return mr.classList[an||y?"add":"remove"](o.className)}),a&&!P&&!Re&&a(D),Pn&&!Nn?(P&&(Ai&&(St==="complete"?r.pause().totalProgress(1):St==="reset"?r.restart(!0).pause():St==="restart"?r.restart(!0):r[St]()),a&&a(D)),(Lt||!Zu)&&(c&&Lt&&Qu(D,c),k[bt]&&Qu(D,k[bt]),y&&(Je===1?D.kill(!1,1):k[bt]=0),Lt||(bt=Je===1?1:3,k[bt]&&Qu(D,k[bt]))),S&&!an&&Math.abs(D.getVelocity())>(ko(S)?S:2500)&&(Eo(D.callbackAnimation),z?z.progress(1):Eo(r,St==="reverse"?1:!Je,1))):P&&a&&!Nn&&a(D)}if(Se){var pn=T?je/T.duration()*(T._caScrollDist||0):je;pe(pn+(F._isFlipped?1:0)),Se(pn)}Ue&&Ue(-je/T.duration()*(T._caScrollDist||0))}},D.enable=function(Re,Ke){D.enabled||(D.enabled=!0,vn(N,"resize",Ho),W||vn(N,"scroll",va),le&&vn(n,"refreshInit",le),Re!==!1&&(D.progress=ie=0,Ie=I=Ye=ue()),Ke!==!1&&D.refresh())},D.getTween=function(Re){return Re&&de?de.tween:z},D.setPositions=function(Re,Ke,We,je){if(T){var $t=T.scrollTrigger,Je=T.duration(),Ot=$t.end-$t.start;Re=$t.start+Ot*Re/Je,Ke=$t.start+Ot*Ke/Je}D.refresh(!1,!1,{start:Rm(Re,We&&!!D._startClamp),end:Rm(Ke,We&&!!D._endClamp)},je),D.update()},D.adjustPinSpacing=function(Re){if(Me&&Re){var Ke=Me.indexOf(U.d)+1;Me[Ke]=parseFloat(Me[Ke])+Re+cn,Me[1]=parseFloat(Me[1])+Re+cn,Za(Me)}},D.disable=function(Re,Ke){if(Re!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Ke||z&&z.pause(),me=0,ze&&(ze.uncache=1),le&&_n(n,"refreshInit",le),we&&(we.pause(),de.tween&&de.tween.kill()&&(de.tween=0)),!W)){for(var We=st.length;We--;)if(st[We].scroller===N&&st[We]!==D)return;_n(N,"resize",Ho),W||_n(N,"scroll",va)}},D.kill=function(Re,Ke){D.disable(Re,Ke),z&&!Ke&&z.kill(),l&&delete xh[l];var We=st.indexOf(D);We>=0&&st.splice(We,1),We===$n&&Uc>0&&$n--,We=0,st.forEach(function(je){return je.scroller===D.scroller&&(We=1)}),We||Kn||(D.scroll.rec=0),r&&(r.scrollTrigger=null,Re&&r.revert({kill:!1}),Ke||r.kill()),re&&[re,Q,F,C].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),ul===D&&(ul=0),d&&(ze&&(ze.uncache=1),We=0,st.forEach(function(je){return je.pin===d&&We++}),We||(ze.spacer=0)),i.onKill&&i.onKill(D)},st.push(D),D.enable(!1,!1),Ve&&Ve(D),r&&r.add&&!ne){var et=D.update;D.update=function(){D.update=et,ct.cache++,O||Y||D.refresh()},Be.delayedCall(.01,D.update),ne=.01,O=Y=0}else D.refresh();d&&gE()},n.register=function(i){return Fa||(Be=i||fv(),uv()&&window.document&&n.enable(),Fa=Bo),Fa},n.defaults=function(i){if(i)for(var r in i)$l[r]=i[r];return $l},n.disable=function(i,r){Bo=0,st.forEach(function(a){return a[r?"kill":"disable"](i)}),_n(lt,"wheel",va),_n(Ut,"scroll",va),clearInterval(Vl),_n(Ut,"touchcancel",Qi),_n(Mt,"touchstart",Qi),Yl(_n,Ut,"pointerdown,touchstart,mousedown",Cm),Yl(_n,Ut,"pointerup,touchend,mouseup",Pm),iu.kill(),Xl(_n);for(var s=0;s<ct.length;s+=3)ql(_n,ct[s],ct[s+1]),ql(_n,ct[s],ct[s+2])},n.enable=function(){if(lt=window,Ut=document,vi=Ut.documentElement,Mt=Ut.body,Be&&(bl=Be.utils.toArray,rl=Be.utils.clamp,_h=Be.core.context||Qi,ju=Be.core.suppressOverwrites||Qi,sp=lt.history.scrollRestoration||"auto",Sh=lt.pageYOffset||0,Be.core.globals("ScrollTrigger",n),Mt)){Bo=1,ja=document.createElement("div"),ja.style.height="100vh",ja.style.position="absolute",Mv(),cE(),Zt.register(Be),n.isTouch=Zt.isTouch,ts=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),gh=Zt.isTouch===1,vn(lt,"wheel",va),rp=[lt,Ut,vi,Mt],Be.matchMedia?(n.matchMedia=function(c){var u=Be.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Be.addEventListener("matchMediaInit",function(){xv(),fp()}),Be.addEventListener("matchMediaRevert",function(){return vv()}),Be.addEventListener("matchMedia",function(){Ks(0,1),oa("matchMedia")}),Be.matchMedia().add("(orientation: portrait)",function(){return ef(),ef})):console.warn("Requires GSAP 3.11.0 or later"),ef(),vn(Ut,"scroll",va);var i=Mt.hasAttribute("style"),r=Mt.style,s=r.borderTopStyle,a=Be.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=Pr(Mt),un.m=Math.round(o.top+un.sc())||0,ei.m=Math.round(o.left+ei.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Mt.setAttribute("style",""),Mt.removeAttribute("style")),Vl=setInterval(Lm,250),Be.delayedCall(.5,function(){return Wl=0}),vn(Ut,"touchcancel",Qi),vn(Mt,"touchstart",Qi),Yl(vn,Ut,"pointerdown,touchstart,mousedown",Cm),Yl(vn,Ut,"pointerup,touchend,mouseup",Pm),mh=Be.utils.checkPrefix("transform"),Nc.push(mh),Fa=Fn(),iu=Be.delayedCall(.2,Ks).pause(),Oa=[Ut,"visibilitychange",function(){var c=lt.innerWidth,u=lt.innerHeight;Ut.hidden?(Tm=c,wm=u):(Tm!==c||wm!==u)&&Ho()},Ut,"DOMContentLoaded",Ks,lt,"load",Ks,lt,"resize",Ho],Xl(vn),st.forEach(function(c){return c.enable(0,1)}),l=0;l<ct.length;l+=3)ql(_n,ct[l],ct[l+1]),ql(_n,ct[l],ct[l+2])}},n.config=function(i){"limitCallbacks"in i&&(Zu=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Vl)||(Vl=r)&&setInterval(Lm,r),"ignoreMobileResize"in i&&(gh=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Xl(_n)||Xl(vn,i.autoRefreshEvents||"none"),ov=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=si(i),a=ct.indexOf(s),o=sa(s);~a&&ct.splice(a,o?6:2),r&&(o?ur.unshift(lt,r,Mt,r,vi,r):ur.unshift(s,r))},n.clearMatchMedia=function(i){st.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var a=(gi(i)?si(i):i).getBoundingClientRect(),o=a[s?na:ia]*r||0;return s?a.right-o>0&&a.left+o<lt.innerWidth:a.bottom-o>0&&a.top+o<lt.innerHeight},n.positionInViewport=function(i,r,s){gi(i)&&(i=si(i));var a=i.getBoundingClientRect(),o=a[s?na:ia],l=r==null?o/2:r in su?su[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/lt.innerWidth:(a.top+l)/lt.innerHeight},n.killAll=function(i){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=aa.killAll||[];aa={},r.forEach(function(s){return s()})}},n})();ot.version="3.14.2";ot.saveStyles=function(n){return n?bl(n).forEach(function(e){if(e&&e.style){var t=mi.indexOf(e);t>=0&&mi.splice(t,5),mi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Be.core.getCache(e),_h())}}):mi};ot.revert=function(n,e){return fp(!n,e)};ot.create=function(n,e){return new ot(n,e)};ot.refresh=function(n){return n?Ho(!0):(Fa||ot.register())&&Ks(!0)};ot.update=function(n){return++ct.cache&&Ur(n===!0?2:0)};ot.clearScrollMemory=Sv;ot.maxScroll=function(n,e){return ar(n,e?ei:un)};ot.getScrollFunc=function(n,e){return bs(si(n),e?ei:un)};ot.getById=function(n){return xh[n]};ot.getAll=function(){return st.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!Ui};ot.snapDirectional=up;ot.addEventListener=function(n,e){var t=aa[n]||(aa[n]=[]);~t.indexOf(e)||t.push(e)};ot.removeEventListener=function(n,e){var t=aa[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ot.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Be.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&zn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return zn(s)&&(s=s(),vn(ot,"refresh",function(){return s=e.batchMax()})),bl(n).forEach(function(l){var c={};for(o in i)c[o]=i[o];c.trigger=l,t.push(ot.create(c))}),t};var zm=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},nf=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===vi&&n(Mt,t)},Jl={auto:1,scroll:1},ME=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Be.core.getCache(s),o=Fn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Jl[(l=Di(s)).overflowY]||Jl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==i&&!sa(s)&&(Jl[(l=Di(s)).overflowY]||Jl[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Ev=function(e,t,i,r){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&ME,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&vn(Ut,Zt.eventTypes[0],Hm,!1,!0)},onDisable:function(){return _n(Ut,Zt.eventTypes[0],Hm,!0)}})},yE=/(input|label|select|textarea)/i,km,Hm=function(e){var t=yE.test(e.target.tagName);(t||km)&&(e._gsapAllow=!0,km=t)},EE=function(e){Gs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=si(e.target)||vi,u=Be.core.globals().ScrollSmoother,f=u&&u.get(),h=ts&&(e.content&&si(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=bs(c,un),g=bs(c,ei),_=1,p=(Zt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,m=0,v=zn(r)?function(){return r(o)}:function(){return r||2.8},y,x,b=Ev(c,e.type,!0,s),A=function(){return x=!1},T=Qi,S=Qi,E=function(){l=ar(c,un),S=rl(ts?1:0,l),i&&(T=rl(0,ar(c,ei))),y=ra},U=function(){h._gsap.y=zo(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(x){requestAnimationFrame(A);var X=zo(o.deltaY/2),K=S(d.v-X);if(h&&K!==d.v+d.offset){d.offset=K-d.v;var D=zo((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",h._gsap.y=D+"px",d.cacheID=ct.cache,Ur()}return!0}d.offset&&U(),x=!0},N,H,W,V,k=function(){E(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return h&&Be.set(h,{y:"+=0"}),e.ignoreCheck=function(L){return ts&&L.type==="touchmove"&&P()||_>1.05&&L.type!=="touchstart"||o.isGesturing||L.touches&&L.touches.length>1},e.onPress=function(){x=!1;var L=_;_=zo((lt.visualViewport&&lt.visualViewport.scale||1)/p),N.pause(),L!==_&&nf(c,_>1.01?!0:i?!1:"x"),H=g(),W=d(),E(),y=ra},e.onRelease=e.onGestureStart=function(L,X){if(d.offset&&U(),!X)V.restart(!0);else{ct.cache++;var K=v(),D,le;i&&(D=g(),le=D+K*.05*-L.velocityX/.227,K*=zm(g,D,le,ar(c,ei)),N.vars.scrollX=T(le)),D=d(),le=D+K*.05*-L.velocityY/.227,K*=zm(d,D,le,ar(c,un)),N.vars.scrollY=S(le),N.invalidate().duration(K).play(.01),(ts&&N.vars.scrollY>=l||D>=l-1)&&Be.to({},{onUpdate:k,duration:K})}a&&a(L)},e.onWheel=function(){N._ts&&N.pause(),Fn()-m>1e3&&(y=0,m=Fn())},e.onChange=function(L,X,K,D,le){if(ra!==y&&E(),X&&i&&g(T(D[2]===X?H+(L.startX-L.x):g()+X-D[1])),K){d.offset&&U();var ce=le[2]===K,Ne=ce?W+L.startY-L.y:d()+K-le[1],Ye=S(Ne);ce&&Ne!==Ye&&(W+=Ye-Ne),d(Ye)}(K||X)&&Ur()},e.onEnable=function(){nf(c,i?!1:"x"),ot.addEventListener("refresh",k),vn(lt,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){nf(c,!0),_n(lt,"resize",k),ot.removeEventListener("refresh",k),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new Zt(e),o.iOS=ts,ts&&!d()&&d(1),ts&&Be.ticker.add(Qi),V=o._dc,N=Be.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:yv(d,d(),function(){return N.pause()})},onUpdate:Ur,onComplete:V.vars.onComplete}),o};ot.sort=function(n){if(zn(n))return st.sort(n);var e=lt.pageYOffset||0;return ot.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),st.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ot.observe=function(n){return new Zt(n)};ot.normalizeScroll=function(n){if(typeof n>"u")return qn;if(n===!0&&qn)return qn.enable();if(n===!1){qn&&qn.kill(),qn=n;return}var e=n instanceof Zt?n:EE(n);return qn&&qn.target===e.target&&qn.kill(),sa(e.target)&&(qn=e),e};ot.core={_getVelocityProp:ph,_inputObserver:Ev,_scrollers:ct,_proxies:ur,bridge:{ss:function(){Ui||oa("scrollStart"),Ui=Fn()},ref:function(){return Nn}}};fv()&&Be.registerPlugin(ot);function bv(n,e,t){return Math.max(n,Math.min(e,t))}class bE{advance(e){var o;if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(i=this.value,r=this.to,s=60*this.lerp,a=e,(function(l,c,u){return(1-u)*l+u*c})(i,r,1-Math.exp(-s*a))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const l=bv(0,this.currentTime/this.duration,1);t=l>=1;const c=t?1:this.easing(l);this.value=this.from+(this.to-this.from)*c}var i,r,s,a;(o=this.onUpdate)==null||o.call(this,this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i=.1,duration:r=1,easing:s=(l=>l),onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=r,this.easing=s,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=o}}class TE{constructor({wrapper:e,content:t,autoResize:i=!0,debounce:r=250}={}){gr(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});gr(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});gr(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,i&&(this.debouncedResize=(function(s,a){let o;return function(){let l=arguments,c=this;clearTimeout(o),o=setTimeout((function(){s.apply(c,l)}),a)}})(this.resize,r),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class Tv{constructor(){this.events={}}emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)}on(e,t){var i;return(i=this.events[e])!=null&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter((s=>t!==s))}}off(e,t){var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter((r=>t!==r))}destroy(){this.events={}}}const Gm=100/6;class wE{constructor(e,{wheelMultiplier:t=1,touchMultiplier:i=1}){gr(this,"onTouchStart",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});gr(this,"onTouchMove",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.touchMultiplier,s=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:r,y:s},this.emitter.emit("scroll",{deltaX:r,deltaY:s,event:e})});gr(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});gr(this,"onWheel",e=>{let{deltaX:t,deltaY:i,deltaMode:r}=e;t*=r===1?Gm:r===2?this.windowWidth:1,i*=r===1?Gm:r===2?this.windowHeight:1,t*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})});gr(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new Tv,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class AE{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:i=e,eventsTarget:r=i,smoothWheel:s=!0,syncTouch:a=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:l=35,duration:c,easing:u=(y=>Math.min(1,1.001-Math.pow(2,-10*y))),lerp:f=!c&&.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:g="vertical",touchMultiplier:_=1,wheelMultiplier:p=1,autoResize:m=!0,__experimental__naiveDimensions:v=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:y,deltaY:x,event:b})=>{if(b.ctrlKey)return;const A=b.type.includes("touch"),T=b.type.includes("wheel");if(this.options.syncTouch&&A&&b.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const S=y===0&&x===0,E=this.options.gestureOrientation==="vertical"&&x===0||this.options.gestureOrientation==="horizontal"&&y===0;if(S||E)return;let U=b.composedPath();if(U=U.slice(0,U.indexOf(this.rootElement)),U.find((W=>{var V,k,L,X,K;return((V=W.hasAttribute)===null||V===void 0?void 0:V.call(W,"data-lenis-prevent"))||A&&((k=W.hasAttribute)===null||k===void 0?void 0:k.call(W,"data-lenis-prevent-touch"))||T&&((L=W.hasAttribute)===null||L===void 0?void 0:L.call(W,"data-lenis-prevent-wheel"))||((X=W.classList)===null||X===void 0?void 0:X.contains("lenis"))&&!(!((K=W.classList)===null||K===void 0)&&K.contains("lenis-stopped"))})))return;if(this.isStopped||this.isLocked)return void b.preventDefault();if(this.isSmooth=this.options.syncTouch&&A||this.options.smoothWheel&&T,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();b.preventDefault();let P=x;this.options.gestureOrientation==="both"?P=Math.abs(x)>Math.abs(y)?x:y:this.options.gestureOrientation==="horizontal"&&(P=y);const N=A&&this.options.syncTouch,H=A&&b.type==="touchend"&&Math.abs(P)>5;H&&(P=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+P,Object.assign({programmatic:!1},N?{lerp:H?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const y=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-y),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:i,eventsTarget:r,smoothWheel:s,syncTouch:a,syncTouchLerp:o,touchInertiaMultiplier:l,duration:c,easing:u,lerp:f,infinite:h,gestureOrientation:g,orientation:d,touchMultiplier:_,wheelMultiplier:p,autoResize:m,__experimental__naiveDimensions:v},this.animate=new bE,this.emitter=new Tv,this.dimensions=new TE({wrapper:e,content:t,autoResize:m}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=a||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new wE(r,{touchMultiplier:_,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:i=!1,lock:r=!1,duration:s=this.options.duration,easing:a=this.options.easing,lerp:o=!s&&this.options.lerp,onComplete:l,force:c=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let f;if(typeof e=="string"?f=document.querySelector(e):e!=null&&e.nodeType&&(f=e),f){if(this.options.wrapper!==window){const d=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?d.left:d.top}const h=f.getBoundingClientRect();e=(this.isHorizontal?h.left:h.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=bv(0,e,this.limit),i)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:a,lerp:o,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(f,h)=>{this.isScrolling=!0,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),h||this.emit(),h&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame((()=>{delete this.__preventNextScrollEvent})))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ll="183",RE=0,Vm=1,CE=2,Oc=1,PE=2,Go=3,Hr=0,Jt=1,ai=2,ti=0,Ja=1,au=2,Wm=3,Xm=4,DE=5,Ws=100,IE=101,LE=102,UE=103,NE=104,FE=200,OE=201,BE=202,zE=203,yh=204,Eh=205,kE=206,HE=207,GE=208,VE=209,WE=210,XE=211,YE=212,qE=213,$E=214,bh=0,ou=1,Th=2,co=3,wh=4,Ah=5,Rh=6,Ch=7,wv=0,KE=1,jE=2,fr=0,Av=1,hp=2,Rv=3,Cv=4,Pv=5,Dv=6,Iv=7,Lv=300,la=301,uo=302,rf=303,sf=304,Tu=306,Ph=1e3,Ir=1001,Dh=1002,Tn=1003,ZE=1004,Ql=1005,sn=1006,af=1007,js=1008,rn=1009,Uv=1010,Nv=1011,wl=1012,dp=1013,Xi=1014,Hi=1015,Gr=1016,pp=1017,mp=1018,fo=1020,Fv=35902,Ov=35899,Bv=1021,zv=1022,Gi=1023,Vr=1026,us=1027,gp=1028,_p=1029,ho=1030,vp=1031,xp=1033,Bc=33776,zc=33777,kc=33778,Hc=33779,Ih=35840,Lh=35841,Uh=35842,Nh=35843,Fh=36196,Oh=37492,Bh=37496,zh=37488,kh=37489,Hh=37490,Gh=37491,Vh=37808,Wh=37809,Xh=37810,Yh=37811,qh=37812,$h=37813,Kh=37814,jh=37815,Zh=37816,Jh=37817,Qh=37818,ed=37819,td=37820,nd=37821,id=36492,rd=36494,sd=36495,ad=36283,od=36284,ld=36285,cd=36286,Ul=3200,kv=0,JE=1,ir="",Rt="srgb",Ts="srgb-linear",lu="linear",Tt="srgb",xa=7680,Ym=519,QE=512,eb=513,tb=514,Sp=515,nb=516,ib=517,Mp=518,rb=519,qm=35044,$m="300 es",or=2e3,Al=2001;function sb(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ab(){const n=Rl("canvas");return n.style.display="block",n}const Km={};function jm(...n){const e="THREE."+n.shift();console.log(e,...n)}function Hv(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ze(...n){n=Hv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function vt(...n){n=Hv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function cu(...n){const e=n.join(" ");e in Km||(Km[e]=!0,Ze(...n))}function ob(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const lb={[bh]:ou,[Th]:Rh,[wh]:Ch,[co]:Ah,[ou]:bh,[Rh]:Th,[Ch]:wh,[Ah]:co};class Xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],of=Math.PI/180,uu=180/Math.PI;function Nl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function cb(n,e){return(n%e+e)%e}function lf(n,e,t){return(1-t)*n+t*e}function bo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class go{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(f!==_||l!==h||c!==d||u!==g){let p=l*h+c*d+u*g+f*_;p<0&&(h=-h,d=-d,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const v=Math.acos(p),y=Math.sin(v);m=Math.sin(m*v)/y,o=Math.sin(o*v)/y,l=l*m+h*o,c=c*m+d*o,u=u*m+g*o,f=f*m+_*o}else{l=l*m+h*o,c=c*m+d*o,u=u*m+g*o,f=f*m+_*o;const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cf.copy(this).projectOnVector(e),this.sub(cf)}reflect(e){return this.sub(cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cf=new $,Zm=new go;class tt{constructor(e,t,i,r,s,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],p=r[3],m=r[6],v=r[1],y=r[4],x=r[7],b=r[2],A=r[5],T=r[8];return s[0]=a*_+o*v+l*b,s[3]=a*p+o*y+l*A,s[6]=a*m+o*x+l*T,s[1]=c*_+u*v+f*b,s[4]=c*p+u*y+f*A,s[7]=c*m+u*x+f*T,s[2]=h*_+d*v+g*b,s[5]=h*p+d*y+g*A,s[8]=h*m+d*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uf.makeScale(e,t)),this}rotate(e){return this.premultiply(uf.makeRotation(-e)),this}translate(e,t){return this.premultiply(uf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uf=new tt,Jm=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qm=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ub(){const n={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Tt&&(r.r=Nr(r.r),r.g=Nr(r.g),r.b=Nr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(r.r=Qa(r.r),r.g=Qa(r.g),r.b=Qa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?lu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return cu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return cu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ts]:{primaries:e,whitePoint:i,transfer:lu,toXYZ:Jm,fromXYZ:Qm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:Jm,fromXYZ:Qm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),n}const mt=ub();function Nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Sa;class fb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Sa===void 0&&(Sa=Rl("canvas")),Sa.width=e.width,Sa.height=e.height;const r=Sa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Sa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Nr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Nr(t[i]/255)*255):t[i]=Nr(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hb=0;class yp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=Nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ff(r[a].image)):s.push(ff(r[a]))}else s=ff(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ff(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let db=0;const hf=new $;class xn extends Xr{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,i=Ir,r=Ir,s=sn,a=js,o=Gi,l=rn,c=xn.DEFAULT_ANISOTROPY,u=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=Nl(),this.name="",this.source=new yp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hf).x}get height(){return this.source.getSize(hf).y}get depth(){return this.source.getSize(hf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ph:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case Dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ph:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case Dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Lv;xn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(d+1)/2,b=(m+1)/2,A=(u+h)/4,T=(f+_)/4,S=(g+p)/4;return y>x&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=T/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=S/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=S/s),this.set(i,r,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pb extends Xr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new xn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new yp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends pb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gv extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mb extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class It{constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,g,_,p){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,g,_,p)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ma.setFromMatrixColumn(e,0).length(),s=1/Ma.setFromMatrixColumn(e,1).length(),a=1/Ma.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gb,e,_b)}lookAt(e,t,i){const r=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),$r.crossVectors(i,di),$r.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),$r.crossVectors(i,di)),$r.normalize(),ec.crossVectors(di,$r),r[0]=$r.x,r[4]=ec.x,r[8]=di.x,r[1]=$r.y,r[5]=ec.y,r[9]=di.y,r[2]=$r.z,r[6]=ec.z,r[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],v=i[3],y=i[7],x=i[11],b=i[15],A=r[0],T=r[4],S=r[8],E=r[12],U=r[1],P=r[5],N=r[9],H=r[13],W=r[2],V=r[6],k=r[10],L=r[14],X=r[3],K=r[7],D=r[11],le=r[15];return s[0]=a*A+o*U+l*W+c*X,s[4]=a*T+o*P+l*V+c*K,s[8]=a*S+o*N+l*k+c*D,s[12]=a*E+o*H+l*L+c*le,s[1]=u*A+f*U+h*W+d*X,s[5]=u*T+f*P+h*V+d*K,s[9]=u*S+f*N+h*k+d*D,s[13]=u*E+f*H+h*L+d*le,s[2]=g*A+_*U+p*W+m*X,s[6]=g*T+_*P+p*V+m*K,s[10]=g*S+_*N+p*k+m*D,s[14]=g*E+_*H+p*L+m*le,s[3]=v*A+y*U+x*W+b*X,s[7]=v*T+y*P+x*V+b*K,s[11]=v*S+y*N+x*k+b*D,s[15]=v*E+y*H+x*L+b*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15],v=l*d-c*h,y=o*d-c*f,x=o*h-l*f,b=a*d-c*u,A=a*h-l*u,T=a*f-o*u;return t*(_*v-p*y+m*x)-i*(g*v-p*b+m*A)+r*(g*y-_*b+m*T)-s*(g*x-_*A+p*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=t*o-i*a,y=t*l-r*a,x=t*c-s*a,b=i*l-r*o,A=i*c-s*o,T=r*c-s*l,S=u*_-f*g,E=u*p-h*g,U=u*m-d*g,P=f*p-h*_,N=f*m-d*_,H=h*m-d*p,W=v*H-y*N+x*P+b*U-A*E+T*S;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/W;return e[0]=(o*H-l*N+c*P)*V,e[1]=(r*N-i*H-s*P)*V,e[2]=(_*T-p*A+m*b)*V,e[3]=(h*A-f*T-d*b)*V,e[4]=(l*U-a*H-c*E)*V,e[5]=(t*H-r*U+s*E)*V,e[6]=(p*x-g*T-m*y)*V,e[7]=(u*T-h*x+d*y)*V,e[8]=(a*N-o*U+c*S)*V,e[9]=(i*U-t*N-s*S)*V,e[10]=(g*A-_*x+m*v)*V,e[11]=(f*x-u*A-d*v)*V,e[12]=(o*E-a*P-l*S)*V,e[13]=(t*P-i*E+r*S)*V,e[14]=(_*y-g*b-p*v)*V,e[15]=(u*b-f*y+h*v)*V,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,_=a*u,p=a*f,m=o*f,v=l*c,y=l*u,x=l*f,b=i.x,A=i.y,T=i.z;return r[0]=(1-(_+m))*b,r[1]=(d+x)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(d-x)*A,r[5]=(1-(h+m))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(g+y)*T,r[9]=(p-v)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Ma.set(r[0],r[1],r[2]).length();const o=Ma.set(r[4],r[5],r[6]).length(),l=Ma.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Fi.copy(this);const c=1/a,u=1/o,f=1/l;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=u,Fi.elements[5]*=u,Fi.elements[6]*=u,Fi.elements[8]*=f,Fi.elements[9]*=f,Fi.elements[10]*=f,t.setFromRotationMatrix(Fi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=or,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===or)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Al)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=or,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===or)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Al)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ma=new $,Fi=new It,gb=new $(0,0,0),_b=new $(1,1,1),$r=new $,ec=new $,di=new $,eg=new It,tg=new go;class pr{constructor(e=0,t=0,i=0,r=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tg.setFromEuler(this),this.setFromQuaternion(tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pr.DEFAULT_ORDER="XYZ";class Vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vb=0;const ng=new $,ya=new go,vr=new It,tc=new $,To=new $,xb=new $,Sb=new go,ig=new $(1,0,0),rg=new $(0,1,0),sg=new $(0,0,1),ag={type:"added"},Mb={type:"removed"},Ea={type:"childadded",child:null},df={type:"childremoved",child:null};class fn extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=Nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new $,t=new pr,i=new go,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new tt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.multiply(ya),this}rotateOnWorldAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.premultiply(ya),this}rotateX(e){return this.rotateOnAxis(ig,e)}rotateY(e){return this.rotateOnAxis(rg,e)}rotateZ(e){return this.rotateOnAxis(sg,e)}translateOnAxis(e,t){return ng.copy(e).applyQuaternion(this.quaternion),this.position.add(ng.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ig,e)}translateY(e){return this.translateOnAxis(rg,e)}translateZ(e){return this.translateOnAxis(sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tc.copy(e):tc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(To,tc,this.up):vr.lookAt(tc,To,this.up),this.quaternion.setFromRotationMatrix(vr),r&&(vr.extractRotation(r.matrixWorld),ya.setFromRotationMatrix(vr),this.quaternion.premultiply(ya.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ag),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mb),df.child=e,this.dispatchEvent(df),df.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ag),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,xb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,Sb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new $(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fs extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yb={type:"move"};class pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kr={h:0,s:0,l:0},nc={h:0,s:0,l:0};function mf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=mt.workingColorSpace){if(e=cb(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=mf(a,s,e+1/3),this.g=mf(a,s,e),this.b=mf(a,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Rt){function i(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const i=Wv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return mt.workingToColorSpace(Un.copy(this),e),Math.round(ft(Un.r*255,0,255))*65536+Math.round(ft(Un.g*255,0,255))*256+Math.round(ft(Un.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,s=Un.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=Rt){mt.workingToColorSpace(Un.copy(this),e);const t=Un.r,i=Un.g,r=Un.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Kr),this.setHSL(Kr.h+e,Kr.s+t,Kr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kr),e.getHSL(nc);const i=lf(Kr.h,nc.h,t),r=lf(Kr.s,nc.s,t),s=lf(Kr.l,nc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new ht;ht.NAMES=Wv;class ud extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oi=new $,xr=new $,gf=new $,Sr=new $,ba=new $,Ta=new $,og=new $,_f=new $,vf=new $,xf=new $,Sf=new Ht,Mf=new Ht,yf=new Ht;class ki{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Oi.subVectors(e,t),r.cross(Oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Oi.subVectors(r,t),xr.subVectors(i,t),gf.subVectors(e,t);const a=Oi.dot(Oi),o=Oi.dot(xr),l=Oi.dot(gf),c=xr.dot(xr),u=xr.dot(gf),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sr.x),l.addScaledVector(a,Sr.y),l.addScaledVector(o,Sr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Sf.setScalar(0),Mf.setScalar(0),yf.setScalar(0),Sf.fromBufferAttribute(e,t),Mf.fromBufferAttribute(e,i),yf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Sf,s.x),a.addScaledVector(Mf,s.y),a.addScaledVector(yf,s.z),a}static isFrontFacing(e,t,i,r){return Oi.subVectors(i,t),xr.subVectors(e,t),Oi.cross(xr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),Oi.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ki.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ki.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ba.subVectors(r,i),Ta.subVectors(s,i),_f.subVectors(e,i);const l=ba.dot(_f),c=Ta.dot(_f);if(l<=0&&c<=0)return t.copy(i);vf.subVectors(e,r);const u=ba.dot(vf),f=Ta.dot(vf);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ba,a);xf.subVectors(e,s);const d=ba.dot(xf),g=Ta.dot(xf);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ta,o);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return og.subVectors(s,r),o=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(og,o);const m=1/(p+_+h);return a=_*m,o=h*m,t.copy(i).addScaledVector(ba,a).addScaledVector(Ta,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fa{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bi):Bi.fromBufferAttribute(s,a),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ic.copy(i.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),rc.subVectors(this.max,wo),wa.subVectors(e.a,wo),Aa.subVectors(e.b,wo),Ra.subVectors(e.c,wo),jr.subVectors(Aa,wa),Zr.subVectors(Ra,Aa),Ls.subVectors(wa,Ra);let t=[0,-jr.z,jr.y,0,-Zr.z,Zr.y,0,-Ls.z,Ls.y,jr.z,0,-jr.x,Zr.z,0,-Zr.x,Ls.z,0,-Ls.x,-jr.y,jr.x,0,-Zr.y,Zr.x,0,-Ls.y,Ls.x,0];return!Ef(t,wa,Aa,Ra,rc)||(t=[1,0,0,0,1,0,0,0,1],!Ef(t,wa,Aa,Ra,rc))?!1:(sc.crossVectors(jr,Zr),t=[sc.x,sc.y,sc.z],Ef(t,wa,Aa,Ra,rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mr=[new $,new $,new $,new $,new $,new $,new $,new $],Bi=new $,ic=new fa,wa=new $,Aa=new $,Ra=new $,jr=new $,Zr=new $,Ls=new $,wo=new $,rc=new $,sc=new $,Us=new $;function Ef(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Us.fromArray(n,s);const o=r.x*Math.abs(Us.x)+r.y*Math.abs(Us.y)+r.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),u=i.dot(Us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const en=new $,ac=new Xe;let Eb=0;class wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qm,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ac.fromBufferAttribute(this,t),ac.applyMatrix3(e),this.setXY(t,ac.x,ac.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bo(t,this.array)),t}setX(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bo(t,this.array)),t}setY(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bo(t,this.array)),t}setW(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),i=ni(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),i=ni(i,this.array),r=ni(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),i=ni(i,this.array),r=ni(r,this.array),s=ni(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qm&&(e.usage=this.usage),e}}class Xv extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yv extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const bb=new fa,Ao=new $,bf=new $;class _o{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const t=Ao.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(bf)),this.expandByPoint(Ao.copy(e.center).sub(bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Tb=0;const Ri=new It,Tf=new fn,Ca=new $,pi=new fa,Ro=new fa,gn=new $;class Rn extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=Nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sb(e)?Yv:Xv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,i){return Ri.makeTranslation(e,t,i),this.applyMatrix4(Ri),this}scale(e,t,i){return Ri.makeScale(e,t,i),this.applyMatrix4(Ri),this}lookAt(e){return Tf.lookAt(e),Tf.updateMatrix(),this.applyMatrix4(Tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ca).negate(),this.translate(Ca.x,Ca.y,Ca.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];pi.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ro.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(pi.min,Ro.min),pi.expandByPoint(gn),gn.addVectors(pi.max,Ro.max),pi.expandByPoint(gn)):(pi.expandByPoint(Ro.min),pi.expandByPoint(Ro.max))}pi.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)gn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gn.fromBufferAttribute(o,c),l&&(Ca.fromBufferAttribute(e,c),gn.add(Ca)),r=Math.max(r,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new $,l[S]=new $;const c=new $,u=new $,f=new $,h=new Xe,d=new Xe,g=new Xe,_=new $,p=new $;function m(S,E,U){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,U),h.fromBufferAttribute(s,S),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,U),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),o[S].add(_),o[E].add(_),o[U].add(_),l[S].add(p),l[E].add(p),l[U].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let S=0,E=v.length;S<E;++S){const U=v[S],P=U.start,N=U.count;for(let H=P,W=P+N;H<W;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new $,x=new $,b=new $,A=new $;function T(S){b.fromBufferAttribute(r,S),A.copy(b);const E=o[S];y.copy(E),y.sub(b.multiplyScalar(b.dot(E))).normalize(),x.crossVectors(A,E);const P=x.dot(l[S])<0?-1:1;a.setXYZW(S,y.x,y.y,y.z,P)}for(let S=0,E=v.length;S<E;++S){const U=v[S],P=U.start,N=U.count;for(let H=P,W=P+N;H<W;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new wn(h,u,f)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let wb=0;class As extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Nl(),this.name="",this.type="Material",this.blending=Ja,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Eh,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ja&&(i.blending=this.blending),this.side!==Hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yh&&(i.blendSrc=this.blendSrc),this.blendDst!==Eh&&(i.blendDst=this.blendDst),this.blendEquation!==Ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ym&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yr=new $,wf=new $,oc=new $,Jr=new $,Af=new $,lc=new $,Rf=new $;class qv{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){wf.copy(e).add(t).multiplyScalar(.5),oc.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(wf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(oc),o=Jr.dot(this.direction),l=-Jr.dot(oc),c=Jr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wf).addScaledVector(oc,h),d}intersectSphere(e,t){yr.subVectors(e.center,this.origin);const i=yr.dot(this.direction),r=yr.dot(yr)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,i,r,s){Af.subVectors(t,e),lc.subVectors(i,e),Rf.crossVectors(Af,lc);let a=this.direction.dot(Rf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jr.subVectors(this.origin,e);const l=o*this.direction.dot(lc.crossVectors(Jr,lc));if(l<0)return null;const c=o*this.direction.dot(Af.cross(Jr));if(c<0||l+c>a)return null;const u=-o*Jr.dot(Rf);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xs extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lg=new It,Ns=new qv,cc=new _o,cg=new $,uc=new $,fc=new $,hc=new $,Cf=new $,dc=new $,ug=new $,pc=new $;class Gt extends fn{constructor(e=new Rn,t=new Xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){dc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Cf.fromBufferAttribute(f,e),a?dc.addScaledVector(Cf,u):dc.addScaledVector(Cf.sub(t),u))}t.add(dc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(s),Ns.copy(e.ray).recast(e.near),!(cc.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(cc,cg)===null||Ns.origin.distanceToSquared(cg)>(e.far-e.near)**2))&&(lg.copy(s).invert(),Ns.copy(e.ray).applyMatrix4(lg),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],v=Math.max(p.start,d.start),y=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=v,b=y;x<b;x+=3){const A=o.getX(x),T=o.getX(x+1),S=o.getX(x+2);r=mc(this,m,e,i,c,u,f,A,T,S),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const v=o.getX(p),y=o.getX(p+1),x=o.getX(p+2);r=mc(this,a,e,i,c,u,f,v,y,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],v=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=v,b=y;x<b;x+=3){const A=x,T=x+1,S=x+2;r=mc(this,m,e,i,c,u,f,A,T,S),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const v=p,y=p+1,x=p+2;r=mc(this,a,e,i,c,u,f,v,y,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ab(n,e,t,i,r,s,a,o){let l;if(e.side===Jt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Hr,o),l===null)return null;pc.copy(o),pc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(pc);return c<t.near||c>t.far?null:{distance:c,point:pc.clone(),object:n}}function mc(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,uc),n.getVertexPosition(l,fc),n.getVertexPosition(c,hc);const u=Ab(n,e,t,i,uc,fc,hc,ug);if(u){const f=new $;ki.getBarycoord(ug,uc,fc,hc,f),r&&(u.uv=ki.getInterpolatedAttribute(r,o,l,c,f,new Xe)),s&&(u.uv1=ki.getInterpolatedAttribute(s,o,l,c,f,new Xe)),a&&(u.normal=ki.getInterpolatedAttribute(a,o,l,c,f,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new $,materialIndex:0};ki.getNormal(uc,fc,hc,h.normal),u.face=h,u.barycoord=f}return u}class $v extends xn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Tn,u=Tn,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fg extends wn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pa=new It,hg=new It,gc=[],dg=new fa,Rb=new It,Co=new Gt,Po=new _o;class Cb extends Gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fg(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Rb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pa),dg.copy(e.boundingBox).applyMatrix4(Pa),this.boundingBox.union(dg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _o),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pa),Po.copy(e.boundingSphere).applyMatrix4(Pa),this.boundingSphere.union(Po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Co.geometry=this.geometry,Co.material=this.material,Co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(i),e.ray.intersectsSphere(Po)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Pa),hg.multiplyMatrices(i,Pa),Co.matrixWorld=hg,Co.raycast(e,gc);for(let a=0,o=gc.length;a<o;a++){const l=gc[a];l.instanceId=s,l.object=this,t.push(l)}gc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new $v(new Float32Array(r*this.count),r,this.count,gp,Hi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pf=new $,Pb=new $,Db=new tt;class Vs{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Pf.subVectors(i,t).cross(Pb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Pf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Db.getNormalMatrix(e),r=this.coplanarPoint(Pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new _o,Ib=new Xe(.5,.5),_c=new $;class Ep{constructor(e=new Vs,t=new Vs,i=new Vs,r=new Vs,s=new Vs,a=new Vs){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=or,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],_=s[9],p=s[10],m=s[11],v=s[12],y=s[13],x=s[14],b=s[15];if(r[0].setComponents(c-a,d-u,m-g,b-v).normalize(),r[1].setComponents(c+a,d+u,m+g,b+v).normalize(),r[2].setComponents(c+o,d+f,m+_,b+y).normalize(),r[3].setComponents(c-o,d-f,m-_,b-y).normalize(),i)r[4].setComponents(l,h,p,x).normalize(),r[5].setComponents(c-l,d-h,m-p,b-x).normalize();else if(r[4].setComponents(c-l,d-h,m-p,b-x).normalize(),t===or)r[5].setComponents(c+l,d+h,m+p,b+x).normalize();else if(t===Al)r[5].setComponents(l,h,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);const t=Ib.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_c.x=r.normal.x>0?e.max.x:e.min.x,_c.y=r.normal.y>0?e.max.y:e.min.y,_c.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fd extends As{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pg=new It,hd=new qv,vc=new _o,xc=new $;class mg extends fn{constructor(e=new Rn,t=new fd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(r),vc.radius+=s,e.ray.intersectsSphere(vc)===!1)return;pg.copy(r).invert(),hd.copy(e.ray).applyMatrix4(pg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,_=d;g<_;g++){const p=c.getX(g);xc.fromBufferAttribute(f,p),gg(xc,p,l,r,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,_=d;g<_;g++)xc.fromBufferAttribute(f,g),gg(xc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function gg(n,e,t,i,r,s,a){const o=hd.distanceSqToPoint(n);if(o<t){const l=new $;hd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Kv extends xn{constructor(e=[],t=la,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class po extends xn{constructor(e,t,i=Xi,r,s,a,o=Tn,l=Tn,c,u=Vr,f=1){if(u!==Vr&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lb extends po{constructor(e,t=Xi,i=la,r,s,a=Tn,o=Tn,l,c=Vr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jv extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fl extends Rn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function g(_,p,m,v,y,x,b,A,T,S,E){const U=x/T,P=b/S,N=x/2,H=b/2,W=A/2,V=T+1,k=S+1;let L=0,X=0;const K=new $;for(let D=0;D<k;D++){const le=D*P-H;for(let ce=0;ce<V;ce++){const Ne=ce*U-N;K[_]=Ne*v,K[p]=le*y,K[m]=W,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[m]=A>0?1:-1,u.push(K.x,K.y,K.z),f.push(ce/T),f.push(1-D/S),L+=1}}for(let D=0;D<S;D++)for(let le=0;le<T;le++){const ce=h+le+V*D,Ne=h+le+V*(D+1),Ye=h+(le+1)+V*(D+1),$e=h+(le+1)+V*D;l.push(ce,Ne,$e),l.push(Ne,Ye,$e),X+=6}o.addGroup(d,X,E),d+=X,h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fu extends Rn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],d=[];let g=0;const _=[],p=i/2;let m=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function v(){const x=new $,b=new $;let A=0;const T=(t-e)/i;for(let S=0;S<=s;S++){const E=[],U=S/s,P=U*(t-e)+e;for(let N=0;N<=r;N++){const H=N/r,W=H*l+o,V=Math.sin(W),k=Math.cos(W);b.x=P*V,b.y=-U*i+p,b.z=P*k,f.push(b.x,b.y,b.z),x.set(V,T,k).normalize(),h.push(x.x,x.y,x.z),d.push(H,1-U),E.push(g++)}_.push(E)}for(let S=0;S<r;S++)for(let E=0;E<s;E++){const U=_[E][S],P=_[E+1][S],N=_[E+1][S+1],H=_[E][S+1];(e>0||E!==0)&&(u.push(U,P,H),A+=3),(t>0||E!==s-1)&&(u.push(P,N,H),A+=3)}c.addGroup(m,A,0),m+=A}function y(x){const b=g,A=new Xe,T=new $;let S=0;const E=x===!0?e:t,U=x===!0?1:-1;for(let N=1;N<=r;N++)f.push(0,p*U,0),h.push(0,U,0),d.push(.5,.5),g++;const P=g;for(let N=0;N<=r;N++){const W=N/r*l+o,V=Math.cos(W),k=Math.sin(W);T.x=E*k,T.y=p*U,T.z=E*V,f.push(T.x,T.y,T.z),h.push(0,U,0),A.x=V*.5+.5,A.y=k*.5*U+.5,d.push(A.x,A.y),g++}for(let N=0;N<r;N++){const H=b+N,W=P+N;x===!0?u.push(W,W+1,H):u.push(W+1,W,H),S+=3}c.addGroup(m,S,x===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bp extends Rn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(s.slice(),3)),this.setAttribute("uv",new Qt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new $,x=new $,b=new $;for(let A=0;A<t.length;A+=3)d(t[A+0],y),d(t[A+1],x),d(t[A+2],b),l(y,x,b,v)}function l(v,y,x,b){const A=b+1,T=[];for(let S=0;S<=A;S++){T[S]=[];const E=v.clone().lerp(x,S/A),U=y.clone().lerp(x,S/A),P=A-S;for(let N=0;N<=P;N++)N===0&&S===A?T[S][N]=E:T[S][N]=E.clone().lerp(U,N/P)}for(let S=0;S<A;S++)for(let E=0;E<2*(A-S)-1;E++){const U=Math.floor(E/2);E%2===0?(h(T[S][U+1]),h(T[S+1][U]),h(T[S][U])):(h(T[S][U+1]),h(T[S+1][U+1]),h(T[S+1][U]))}}function c(v){const y=new $;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(v),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function u(){const v=new $;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const x=p(v)/2/Math.PI+.5,b=m(v)/Math.PI+.5;a.push(x,1-b)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){const y=a[v+0],x=a[v+2],b=a[v+4],A=Math.max(y,x,b),T=Math.min(y,x,b);A>.9&&T<.1&&(y<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),b<.2&&(a[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function d(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const v=new $,y=new $,x=new $,b=new $,A=new Xe,T=new Xe,S=new Xe;for(let E=0,U=0;E<s.length;E+=9,U+=6){v.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),x.set(s[E+6],s[E+7],s[E+8]),A.set(a[U+0],a[U+1]),T.set(a[U+2],a[U+3]),S.set(a[U+4],a[U+5]),b.copy(v).add(y).add(x).divideScalar(3);const P=p(b);_(A,U+0,v,P),_(T,U+2,y,P),_(S,U+4,x,P)}}function _(v,y,x,b){b<0&&v.x===1&&(a[y]=v.x-1),x.x===0&&x.z===0&&(a[y]=b/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bp(e.vertices,e.indices,e.radius,e.detail)}}class Tp extends bp{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tp(e.radius,e.detail)}}class wu extends Rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const v=m*h-a;for(let y=0;y<c;y++){const x=y*f-s;g.push(x,-v,0),_.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const y=v+c*m,x=v+c*(m+1),b=v+1+c*(m+1),A=v+1+c*m;d.push(y,x,A),d.push(x,b,A)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tr extends Rn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new $,h=new $,d=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const v=[],y=m/i;let x=0;m===0&&a===0?x=.5/t:m===i&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const A=b/t;f.x=-e*Math.cos(r+A*s)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(r+A*s)*Math.sin(a+y*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),p.push(A+x,1-y),v.push(c++)}u.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){const y=u[m][v+1],x=u[m][v],b=u[m+1][v],A=u[m+1][v+1];(m!==0||a>0)&&d.push(y,x,A),(m!==i-1||l<Math.PI)&&d.push(x,b,A)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hu extends Rn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],f=[],h=new $,d=new $,g=new $;for(let _=0;_<=i;_++){const p=a+_/i*o;for(let m=0;m<=r;m++){const v=m/r*s;d.x=(e+t*Math.cos(p))*Math.cos(v),d.y=(e+t*Math.cos(p))*Math.sin(v),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(m/r),f.push(_/i)}}for(let _=1;_<=i;_++)for(let p=1;p<=r;p++){const m=(r+1)*_+p-1,v=(r+1)*(_-1)+p-1,y=(r+1)*(_-1)+p,x=(r+1)*_+p;l.push(m,v,x),l.push(v,y,x)}this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function mo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yn(n){const e={};for(let t=0;t<n.length;t++){const i=mo(n[t]);for(const r in i)e[r]=i[r]}return e}function Ub(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Nb={clone:mo,merge:Yn};var Fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ob=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fb,this.fragmentShader=Ob,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=Ub(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bb extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ba extends As{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kv,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zb extends Ba{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class kb extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ul,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hb extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Df={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(_g(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!_g(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function _g(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Gb{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Vb=new Gb;class wp{constructor(e){this.manager=e!==void 0?e:Vb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Da=new WeakMap;class Wb extends wp{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Df.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Da.get(a);f===void 0&&(f=[],Da.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=Rl("img");function l(){u(),t&&t(this);const f=Da.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Da.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Df.remove(`image:${e}`);const h=Da.get(this)||[];for(let d=0;d<h.length;d++){const g=h[d];g.onError&&g.onError(f)}Da.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Df.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Xb extends wp{constructor(e){super(e)}load(e,t,i,r){const s=new xn,a=new Wb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Au extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const If=new It,vg=new $,xg=new $;class Ap{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ep,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(vg),xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xg),t.updateMatrixWorld(),If.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Al||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(If)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sc=new $,Mc=new go,Ki=new $;class Jv extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=or,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sc,Mc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Sc,Mc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new $,Sg=new Xe,Mg=new Xe;class Zn extends Jv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(of*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uu*2*Math.atan(Math.tan(of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,Sg,Mg),t.subVectors(Mg,Sg)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(of*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Yb extends Ap{constructor(){super(new Zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=uu*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class qb extends Au{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Yb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class $b extends Ap{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0}}class yg extends Au{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $b}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ru extends Jv{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kb extends Ap{constructor(){super(new Ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jb extends Au{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Kb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Zb extends Au{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ia=-90,La=1;class Jb extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(Ia,La,e,t);r.layers=this.layers,this.add(r);const s=new Zn(Ia,La,e,t);s.layers=this.layers,this.add(s);const a=new Zn(Ia,La,e,t);a.layers=this.layers,this.add(a);const o=new Zn(Ia,La,e,t);o.layers=this.layers,this.add(o);const l=new Zn(Ia,La,e,t);l.layers=this.layers,this.add(l);const c=new Zn(Ia,La,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===or)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qb extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class dt{constructor(e){this.value=e}clone(){return new dt(this.value.clone===void 0?this.value:this.value.clone())}}function Eg(n,e,t,i){const r=eT(i);switch(t){case Bv:return n*e;case gp:return n*e/r.components*r.byteLength;case _p:return n*e/r.components*r.byteLength;case ho:return n*e*2/r.components*r.byteLength;case vp:return n*e*2/r.components*r.byteLength;case zv:return n*e*3/r.components*r.byteLength;case Gi:return n*e*4/r.components*r.byteLength;case xp:return n*e*4/r.components*r.byteLength;case Bc:case zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kc:case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Nh:return Math.max(n,16)*Math.max(e,8)/4;case Ih:case Uh:return Math.max(n,8)*Math.max(e,8)/2;case Fh:case Oh:case zh:case kh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bh:case Hh:case Gh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $h:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case td:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case id:case rd:case sd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ad:case od:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ld:case cd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eT(n){switch(n){case rn:case Uv:return{byteLength:1,components:1};case wl:case Nv:case Gr:return{byteLength:2,components:1};case pp:case mp:return{byteLength:2,components:4};case Xi:case dp:case Hi:return{byteLength:4,components:1};case Fv:case Ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qv(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function tT(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var nT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ET=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,TT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IT="gl_FragColor = linearToOutputTexel( gl_FragColor );",LT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,NT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,WT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$T=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,e1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,f1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,v1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,S1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,T1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,D1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,k1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,V1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,K1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_w=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ew=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ww=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:nT,alphahash_pars_fragment:iT,alphamap_fragment:rT,alphamap_pars_fragment:sT,alphatest_fragment:aT,alphatest_pars_fragment:oT,aomap_fragment:lT,aomap_pars_fragment:cT,batching_pars_vertex:uT,batching_vertex:fT,begin_vertex:hT,beginnormal_vertex:dT,bsdfs:pT,iridescence_fragment:mT,bumpmap_pars_fragment:gT,clipping_planes_fragment:_T,clipping_planes_pars_fragment:vT,clipping_planes_pars_vertex:xT,clipping_planes_vertex:ST,color_fragment:MT,color_pars_fragment:yT,color_pars_vertex:ET,color_vertex:bT,common:TT,cube_uv_reflection_fragment:wT,defaultnormal_vertex:AT,displacementmap_pars_vertex:RT,displacementmap_vertex:CT,emissivemap_fragment:PT,emissivemap_pars_fragment:DT,colorspace_fragment:IT,colorspace_pars_fragment:LT,envmap_fragment:UT,envmap_common_pars_fragment:NT,envmap_pars_fragment:FT,envmap_pars_vertex:OT,envmap_physical_pars_fragment:$T,envmap_vertex:BT,fog_vertex:zT,fog_pars_vertex:kT,fog_fragment:HT,fog_pars_fragment:GT,gradientmap_pars_fragment:VT,lightmap_pars_fragment:WT,lights_lambert_fragment:XT,lights_lambert_pars_fragment:YT,lights_pars_begin:qT,lights_toon_fragment:KT,lights_toon_pars_fragment:jT,lights_phong_fragment:ZT,lights_phong_pars_fragment:JT,lights_physical_fragment:QT,lights_physical_pars_fragment:e1,lights_fragment_begin:t1,lights_fragment_maps:n1,lights_fragment_end:i1,logdepthbuf_fragment:r1,logdepthbuf_pars_fragment:s1,logdepthbuf_pars_vertex:a1,logdepthbuf_vertex:o1,map_fragment:l1,map_pars_fragment:c1,map_particle_fragment:u1,map_particle_pars_fragment:f1,metalnessmap_fragment:h1,metalnessmap_pars_fragment:d1,morphinstance_vertex:p1,morphcolor_vertex:m1,morphnormal_vertex:g1,morphtarget_pars_vertex:_1,morphtarget_vertex:v1,normal_fragment_begin:x1,normal_fragment_maps:S1,normal_pars_fragment:M1,normal_pars_vertex:y1,normal_vertex:E1,normalmap_pars_fragment:b1,clearcoat_normal_fragment_begin:T1,clearcoat_normal_fragment_maps:w1,clearcoat_pars_fragment:A1,iridescence_pars_fragment:R1,opaque_fragment:C1,packing:P1,premultiplied_alpha_fragment:D1,project_vertex:I1,dithering_fragment:L1,dithering_pars_fragment:U1,roughnessmap_fragment:N1,roughnessmap_pars_fragment:F1,shadowmap_pars_fragment:O1,shadowmap_pars_vertex:B1,shadowmap_vertex:z1,shadowmask_pars_fragment:k1,skinbase_vertex:H1,skinning_pars_vertex:G1,skinning_vertex:V1,skinnormal_vertex:W1,specularmap_fragment:X1,specularmap_pars_fragment:Y1,tonemapping_fragment:q1,tonemapping_pars_fragment:$1,transmission_fragment:K1,transmission_pars_fragment:j1,uv_pars_fragment:Z1,uv_pars_vertex:J1,uv_vertex:Q1,worldpos_vertex:ew,background_vert:tw,background_frag:nw,backgroundCube_vert:iw,backgroundCube_frag:rw,cube_vert:sw,cube_frag:aw,depth_vert:ow,depth_frag:lw,distance_vert:cw,distance_frag:uw,equirect_vert:fw,equirect_frag:hw,linedashed_vert:dw,linedashed_frag:pw,meshbasic_vert:mw,meshbasic_frag:gw,meshlambert_vert:_w,meshlambert_frag:vw,meshmatcap_vert:xw,meshmatcap_frag:Sw,meshnormal_vert:Mw,meshnormal_frag:yw,meshphong_vert:Ew,meshphong_frag:bw,meshphysical_vert:Tw,meshphysical_frag:ww,meshtoon_vert:Aw,meshtoon_frag:Rw,points_vert:Cw,points_frag:Pw,shadow_vert:Dw,shadow_frag:Iw,sprite_vert:Lw,sprite_frag:Uw},Ce={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},tr={basic:{uniforms:Yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Yn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Yn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ht(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Yn([Ce.points,Ce.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Yn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Yn([Ce.common,Ce.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Yn([Ce.sprite,Ce.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Yn([Ce.common,Ce.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Yn([Ce.lights,Ce.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};tr.physical={uniforms:Yn([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const yc={r:0,b:0,g:0},Os=new pr,Nw=new It;function Fw(n,e,t,i,r,s){const a=new ht(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function d(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const x=v.backgroundBlurriness>0;y=e.get(y,x)}return y}function g(v){let y=!1;const x=d(v);x===null?p(a,o):x&&x.isColor&&(p(x,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,y){const x=d(y);x&&(x.isCubeTexture||x.mapping===Tu)?(c===void 0&&(c=new Gt(new Fl(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:mo(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Os.copy(y.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(Os)),c.material.toneMapped=mt.getTransfer(x.colorSpace)!==Tt,(u!==x||f!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Gt(new wu(2,2),new Cn({name:"BackgroundMaterial",uniforms:mo(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=mt.getTransfer(x.colorSpace)!==Tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(yc,Zv(n)),t.buffers.color.setClear(yc.r,yc.g,yc.b,y,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:_,dispose:m}}function Ow(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(P,N,H,W,V){let k=!1;const L=f(P,W,H,N);s!==L&&(s=L,c(s.object)),k=d(P,W,H,V),k&&g(P,W,H,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,x(P,N,H,W),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function f(P,N,H,W){const V=W.wireframe===!0;let k=i[N.id];k===void 0&&(k={},i[N.id]=k);const L=P.isInstancedMesh===!0?P.id:0;let X=k[L];X===void 0&&(X={},k[L]=X);let K=X[H.id];K===void 0&&(K={},X[H.id]=K);let D=K[V];return D===void 0&&(D=h(l()),K[V]=D),D}function h(P){const N=[],H=[],W=[];for(let V=0;V<t;V++)N[V]=0,H[V]=0,W[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:W,object:P,attributes:{},index:null}}function d(P,N,H,W){const V=s.attributes,k=N.attributes;let L=0;const X=H.getAttributes();for(const K in X)if(X[K].location>=0){const le=V[K];let ce=k[K];if(ce===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),le===void 0||le.attribute!==ce||ce&&le.data!==ce.data)return!0;L++}return s.attributesNum!==L||s.index!==W}function g(P,N,H,W){const V={},k=N.attributes;let L=0;const X=H.getAttributes();for(const K in X)if(X[K].location>=0){let le=k[K];le===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(le=P.instanceColor));const ce={};ce.attribute=le,le&&le.data&&(ce.data=le.data),V[K]=ce,L++}s.attributes=V,s.attributesNum=L,s.index=W}function _(){const P=s.newAttributes;for(let N=0,H=P.length;N<H;N++)P[N]=0}function p(P){m(P,0)}function m(P,N){const H=s.newAttributes,W=s.enabledAttributes,V=s.attributeDivisors;H[P]=1,W[P]===0&&(n.enableVertexAttribArray(P),W[P]=1),V[P]!==N&&(n.vertexAttribDivisor(P,N),V[P]=N)}function v(){const P=s.newAttributes,N=s.enabledAttributes;for(let H=0,W=N.length;H<W;H++)N[H]!==P[H]&&(n.disableVertexAttribArray(H),N[H]=0)}function y(P,N,H,W,V,k,L){L===!0?n.vertexAttribIPointer(P,N,H,V,k):n.vertexAttribPointer(P,N,H,W,V,k)}function x(P,N,H,W){_();const V=W.attributes,k=H.getAttributes(),L=N.defaultAttributeValues;for(const X in k){const K=k[X];if(K.location>=0){let D=V[X];if(D===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(D=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(D=P.instanceColor)),D!==void 0){const le=D.normalized,ce=D.itemSize,Ne=e.get(D);if(Ne===void 0)continue;const Ye=Ne.buffer,$e=Ne.type,ie=Ne.bytesPerElement,ue=$e===n.INT||$e===n.UNSIGNED_INT||D.gpuType===dp;if(D.isInterleavedBufferAttribute){const de=D.data,ze=de.stride,Le=D.offset;if(de.isInstancedInterleavedBuffer){for(let Ie=0;Ie<K.locationSize;Ie++)m(K.location+Ie,de.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ie=0;Ie<K.locationSize;Ie++)p(K.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Ie=0;Ie<K.locationSize;Ie++)y(K.location+Ie,ce/K.locationSize,$e,le,ze*ie,(Le+ce/K.locationSize*Ie)*ie,ue)}else{if(D.isInstancedBufferAttribute){for(let de=0;de<K.locationSize;de++)m(K.location+de,D.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let de=0;de<K.locationSize;de++)p(K.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let de=0;de<K.locationSize;de++)y(K.location+de,ce/K.locationSize,$e,le,ce*ie,ce/K.locationSize*de*ie,ue)}}else if(L!==void 0){const le=L[X];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(K.location,le);break;case 3:n.vertexAttrib3fv(K.location,le);break;case 4:n.vertexAttrib4fv(K.location,le);break;default:n.vertexAttrib1fv(K.location,le)}}}}v()}function b(){E();for(const P in i){const N=i[P];for(const H in N){const W=N[H];for(const V in W){const k=W[V];for(const L in k)u(k[L].object),delete k[L];delete W[V]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;const N=i[P.id];for(const H in N){const W=N[H];for(const V in W){const k=W[V];for(const L in k)u(k[L].object),delete k[L];delete W[V]}}delete i[P.id]}function T(P){for(const N in i){const H=i[N];for(const W in H){const V=H[W];if(V[P.id]===void 0)continue;const k=V[P.id];for(const L in k)u(k[L].object),delete k[L];delete V[P.id]}}}function S(P){for(const N in i){const H=i[N],W=P.isInstancedMesh===!0?P.id:0,V=H[W];if(V!==void 0){for(const k in V){const L=V[k];for(const X in L)u(L[X].object),delete L[X];delete V[k]}delete H[W],Object.keys(H).length===0&&delete i[N]}}}function E(){U(),a=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Bw(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Gi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const S=T===Gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==rn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hi&&!S)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,maxSamples:b,samples:A}}function kw(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Vs,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,y=v*4;let x=m.clippingState||null;l.value=x,x=u(g,h,y,d);for(let b=0;b!==y;++b)x[b]=t[b];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,x=d;y!==_;++y,x+=4)a.copy(f[y]).applyMatrix4(v,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const hs=4,bg=[.125,.215,.35,.446,.526,.582],Ys=20,Hw=256,Do=new Ru,Tg=new ht;let Lf=null,Uf=0,Nf=0,Ff=!1;const Gw=new $;class wg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Gw}=s;Lf=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lf,Uf,Nf),this._renderer.xr.enabled=Ff,e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===la||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lf=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Gr,format:Gi,colorSpace:Ts,depthBuffer:!1},r=Ag(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Vw(s)),this._blurMaterial=Xw(s,e,t),this._ggxMaterial=Ww(s,e,t)}return r}_compileMaterial(e){const t=new Gt(new Rn,e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,i,r,s){const l=new Zn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Tg),f.toneMapping=fr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new Fl,new Xs({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,m=!0):(p.color.copy(Tg),m=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const b=this._cubeSize;Ua(r,x*b,y>2?b:0,b,b),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===la||e.mapping===uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ua(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Do)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,_=this._sizeLods[i],p=3*_*(i>g-hs?i-g+hs:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Ua(s,p,m,3*_,2*_),r.setRenderTarget(s),r.render(o,Do),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ua(e,p,m,3*_,2*_),r.setRenderTarget(e),r.render(o,Do)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&vt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ys-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Ys;p>Ys&&Ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ys}`);const m=[];let v=0;for(let T=0;T<Ys;++T){const S=T/_,E=Math.exp(-S*S/2);m.push(E),T===0?v+=E:T<p&&(v+=2*E)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const x=this._sizeLods[r],b=3*x*(r>y-hs?r-y+hs:0),A=4*(this._cubeSize-x);Ua(t,b,A,3*x,2*x),l.setRenderTarget(t),l.render(f,Do)}}function Vw(n){const e=[],t=[],i=[];let r=n;const s=n-hs+1+bg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-hs?l=bg[a-n+hs-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*d),y=new Float32Array(p*g*d),x=new Float32Array(m*g*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,S=A>2?0:-1,E=[T,S,0,T+2/3,S,0,T+2/3,S+1,0,T,S,0,T+2/3,S+1,0,T,S+1,0];v.set(E,_*g*A),y.set(h,p*g*A);const U=[A,A,A,A,A,A];x.set(U,m*g*A)}const b=new Rn;b.setAttribute("position",new wn(v,_)),b.setAttribute("uv",new wn(y,p)),b.setAttribute("faceIndex",new wn(x,m)),i.push(new Gt(b,null)),r>hs&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Ag(n,e,t){const i=new Sn(n,e,t);return i.texture.mapping=Tu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ua(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ww(n,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Xw(n,e,t){const i=new Float32Array(Ys),r=new $(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Rg(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Cg(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ex extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fl(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:ti});s.uniforms.tEquirect.value=t;const a=new Gt(r,s),o=t.minFilter;return t.minFilter===js&&(t.minFilter=sn),new Jb(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Yw(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===rf||d===sf)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new ex(g.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===rf||d===sf,_=d===la||d===uo;if(g||_){let p=t.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new wg(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const v=h.image;return g&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new wg(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,d){return d===rf?h.mapping=la:d===sf&&(h.mapping=uo),h}function l(h){let d=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function qw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&cu("WebGLRenderer: "+i+" extension not supported."),r}}}function $w(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(g===void 0)return;if(d!==null){const v=d.array;_=d.version;for(let y=0,x=v.length;y<x;y+=3){const b=v[y+0],A=v[y+1],T=v[y+2];h.push(b,A,A,T,T,b)}}else{const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const b=y+0,A=y+1,T=y+2;h.push(b,A,A,T,T,b)}}const p=new(g.count>=65535?Yv:Xv)(h,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Kw(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*a,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,i,1)}function f(h,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/a,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let m=0;for(let v=0;v<g;v++)m+=d[v]*_[v];t.update(m,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function jw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:vt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Zw(n,e,t){const i=new WeakMap,r=new Ht;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let U=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",U)};var d=U;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let b=o.attributes.position.count*x,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*A*4*f),S=new Gv(T,b,A,f);S.type=Hi,S.needsUpdate=!0;const E=x*4;for(let P=0;P<f;P++){const N=m[P],H=v[P],W=y[P],V=b*A*4*P;for(let k=0;k<N.count;k++){const L=k*E;g===!0&&(r.fromBufferAttribute(N,k),T[V+L+0]=r.x,T[V+L+1]=r.y,T[V+L+2]=r.z,T[V+L+3]=0),_===!0&&(r.fromBufferAttribute(H,k),T[V+L+4]=r.x,T[V+L+5]=r.y,T[V+L+6]=r.z,T[V+L+7]=0),p===!0&&(r.fromBufferAttribute(W,k),T[V+L+8]=r.x,T[V+L+9]=r.y,T[V+L+10]=r.z,T[V+L+11]=W.itemSize===4?r.w:1)}}h={count:f,texture:S,size:new Xe(b,A)},i.set(o,h),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Jw(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Qw={[Av]:"LINEAR_TONE_MAPPING",[hp]:"REINHARD_TONE_MAPPING",[Rv]:"CINEON_TONE_MAPPING",[Cv]:"ACES_FILMIC_TONE_MAPPING",[Dv]:"AGX_TONE_MAPPING",[Iv]:"NEUTRAL_TONE_MAPPING",[Pv]:"CUSTOM_TONE_MAPPING"};function eA(n,e,t,i,r){const s=new Sn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Sn(e,t,{type:Gr,depthBuffer:!1,stencilBuffer:!1}),o=new Rn;o.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const l=new Bb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Gt(o,l),u=new Ru(-1,1,1,-1,0,1);let f=null,h=null,d=!1,g,_=null,p=[],m=!1;this.setSize=function(v,y){s.setSize(v,y),a.setSize(v,y);for(let x=0;x<p.length;x++){const b=p[x];b.setSize&&b.setSize(v,y)}},this.setEffects=function(v){p=v,m=p.length>0&&p[0].isRenderPass===!0;const y=s.width,x=s.height;for(let b=0;b<p.length;b++){const A=p[b];A.setSize&&A.setSize(y,x)}},this.begin=function(v,y){if(d||v.toneMapping===fr&&p.length===0)return!1;if(_=y,y!==null){const x=y.width,b=y.height;(s.width!==x||s.height!==b)&&this.setSize(x,b)}return m===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=fr,!0},this.hasRenderPass=function(){return m},this.end=function(v,y){v.toneMapping=g,d=!0;let x=s,b=a;for(let A=0;A<p.length;A++){const T=p[A];if(T.enabled!==!1&&(T.render(v,b,x,y),T.needsSwap!==!1)){const S=x;x=b,b=S}}if(f!==v.outputColorSpace||h!==v.toneMapping){f=v.outputColorSpace,h=v.toneMapping,l.defines={},mt.getTransfer(f)===Tt&&(l.defines.SRGB_TRANSFER="");const A=Qw[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(_),v.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const tx=new xn,dd=new po(1,1),nx=new Gv,ix=new mb,rx=new Kv,Pg=[],Dg=[],Ig=new Float32Array(16),Lg=new Float32Array(9),Ug=new Float32Array(4);function vo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Pg[r];if(s===void 0&&(s=new Float32Array(r),Pg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pu(n,e){let t=Dg[e];t===void 0&&(t=new Int32Array(e),Dg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function iA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function rA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function sA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Ug.set(i),n.uniformMatrix2fv(this.addr,!1,Ug),dn(t,i)}}function aA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Lg.set(i),n.uniformMatrix3fv(this.addr,!1,Lg),dn(t,i)}}function oA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Ig.set(i),n.uniformMatrix4fv(this.addr,!1,Ig),dn(t,i)}}function lA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function uA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function fA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function hA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function pA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function mA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function gA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(dd.compareFunction=t.isReversedDepthBuffer()?Mp:Sp,s=dd):s=tx,t.setTexture2D(e||s,r)}function _A(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ix,r)}function vA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rx,r)}function xA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nx,r)}function SA(n){switch(n){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return rA;case 35674:return sA;case 35675:return aA;case 35676:return oA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return fA;case 5125:return hA;case 36294:return dA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return xA}}function MA(n,e){n.uniform1fv(this.addr,e)}function yA(n,e){const t=vo(e,this.size,2);n.uniform2fv(this.addr,t)}function EA(n,e){const t=vo(e,this.size,3);n.uniform3fv(this.addr,t)}function bA(n,e){const t=vo(e,this.size,4);n.uniform4fv(this.addr,t)}function TA(n,e){const t=vo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wA(n,e){const t=vo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function AA(n,e){const t=vo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function RA(n,e){n.uniform1iv(this.addr,e)}function CA(n,e){n.uniform2iv(this.addr,e)}function PA(n,e){n.uniform3iv(this.addr,e)}function DA(n,e){n.uniform4iv(this.addr,e)}function IA(n,e){n.uniform1uiv(this.addr,e)}function LA(n,e){n.uniform2uiv(this.addr,e)}function UA(n,e){n.uniform3uiv(this.addr,e)}function NA(n,e){n.uniform4uiv(this.addr,e)}function FA(n,e,t){const i=this.cache,r=e.length,s=Pu(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=dd:a=tx;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function OA(n,e,t){const i=this.cache,r=e.length,s=Pu(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ix,s[a])}function BA(n,e,t){const i=this.cache,r=e.length,s=Pu(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||rx,s[a])}function zA(n,e,t){const i=this.cache,r=e.length,s=Pu(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nx,s[a])}function kA(n){switch(n){case 5126:return MA;case 35664:return yA;case 35665:return EA;case 35666:return bA;case 35674:return TA;case 35675:return wA;case 35676:return AA;case 5124:case 35670:return RA;case 35667:case 35671:return CA;case 35668:case 35672:return PA;case 35669:case 35673:return DA;case 5125:return IA;case 36294:return LA;case 36295:return UA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return BA;case 36289:case 36303:case 36311:case 36292:return zA}}class HA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SA(t.type)}}class GA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kA(t.type)}}class VA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Of=/(\w+)(\])?(\[|\.)?/g;function Ng(n,e){n.seq.push(e),n.map[e.id]=e}function WA(n,e,t){const i=n.name,r=i.length;for(Of.lastIndex=0;;){const s=Of.exec(i),a=Of.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ng(t,c===void 0?new HA(o,n,e):new GA(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new VA(o),Ng(t,f)),t=f}}}class Gc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);WA(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Fg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const XA=37297;let YA=0;function qA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Og=new tt;function $A(n){mt._getMatrix(Og,mt.workingColorSpace,n);const e=`mat3( ${Og.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case lu:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+qA(n.getShaderSource(e),o)}else return s}function KA(n,e){const t=$A(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jA={[Av]:"Linear",[hp]:"Reinhard",[Rv]:"Cineon",[Cv]:"ACESFilmic",[Dv]:"AgX",[Iv]:"Neutral",[Pv]:"Custom"};function ZA(n,e){const t=jA[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ec=new $;function JA(){mt.getLuminanceCoefficients(Ec);const n=Ec.x.toFixed(4),e=Ec.y.toFixed(4),t=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function eR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Vo(n){return n!==""}function zg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nR=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(n){return n.replace(nR,rR)}const iR=new Map;function rR(n,e){let t=it[e];if(t===void 0){const i=iR.get(e);if(i!==void 0)t=it[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pd(t)}const sR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(n){return n.replace(sR,aR)}function aR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const oR={[Oc]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function lR(n){return oR[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cR={[la]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE",[Tu]:"ENVMAP_TYPE_CUBE_UV"};function uR(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":cR[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const fR={[uo]:"ENVMAP_MODE_REFRACTION"};function hR(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fR[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dR={[wv]:"ENVMAP_BLENDING_MULTIPLY",[KE]:"ENVMAP_BLENDING_MIX",[jE]:"ENVMAP_BLENDING_ADD"};function pR(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":dR[n.combine]||"ENVMAP_BLENDING_NONE"}function mR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gR(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=lR(t),c=uR(t),u=hR(t),f=pR(t),h=mR(t),d=QA(t),g=eR(s),_=r.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vo).join(`
`),m.length>0&&(m+=`
`)):(p=[Gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),m=[Gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?it.tonemapping_pars_fragment:"",t.toneMapping!==fr?ZA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,KA("linearToOutputTexel",t.outputColorSpace),JA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),a=pd(a),a=zg(a,t),a=kg(a,t),o=pd(o),o=zg(o,t),o=kg(o,t),a=Hg(a),o=Hg(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===$m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+p+a,x=v+m+o,b=Fg(r,r.VERTEX_SHADER,y),A=Fg(r,r.FRAGMENT_SHADER,x);r.attachShader(_,b),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(P){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",H=r.getShaderInfoLog(b)||"",W=r.getShaderInfoLog(A)||"",V=N.trim(),k=H.trim(),L=W.trim();let X=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,b,A);else{const D=Bg(r,b,"vertex"),le=Bg(r,A,"fragment");vt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+D+`
`+le)}else V!==""?Ze("WebGLProgram: Program Info Log:",V):(k===""||L==="")&&(K=!1);K&&(P.diagnostics={runnable:X,programLog:V,vertexShader:{log:k,prefix:p},fragmentShader:{log:L,prefix:m}})}r.deleteShader(b),r.deleteShader(A),S=new Gc(r,_),E=tR(r,_)}let S;this.getUniforms=function(){return S===void 0&&T(this),S};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(_,XA)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let _R=0;class vR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xR(e),t.set(e,i)),i}}class xR{constructor(e){this.id=_R++,this.code=e,this.usedTimes=0}}function SR(n,e,t,i,r,s){const a=new Vv,o=new vR,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,E,U,P,N){const H=P.fog,W=N.geometry,V=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,L=e.get(S.envMap||V,k),X=L&&L.mapping===Tu?L.image.height:null,K=d[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&Ze("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const D=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=D!==void 0?D.length:0;let ce=0;W.morphAttributes.position!==void 0&&(ce=1),W.morphAttributes.normal!==void 0&&(ce=2),W.morphAttributes.color!==void 0&&(ce=3);let Ne,Ye,$e,ie;if(K){const Pe=tr[K];Ne=Pe.vertexShader,Ye=Pe.fragmentShader}else Ne=S.vertexShader,Ye=S.fragmentShader,o.update(S),$e=o.getVertexShaderID(S),ie=o.getFragmentShaderID(S);const ue=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),ze=N.isInstancedMesh===!0,Le=N.isBatchedMesh===!0,Ie=!!S.map,I=!!S.matcap,O=!!L,Y=!!S.aoMap,re=!!S.lightMap,Q=!!S.bumpMap,F=!!S.normalMap,C=!!S.displacementMap,fe=!!S.emissiveMap,ae=!!S.metalnessMap,ne=!!S.roughnessMap,oe=S.anisotropy>0,R=S.clearcoat>0,M=S.dispersion>0,B=S.iridescence>0,j=S.sheen>0,ee=S.transmission>0,q=oe&&!!S.anisotropyMap,ve=R&&!!S.clearcoatMap,he=R&&!!S.clearcoatNormalMap,De=R&&!!S.clearcoatRoughnessMap,Me=B&&!!S.iridescenceMap,pe=B&&!!S.iridescenceThicknessMap,ge=j&&!!S.sheenColorMap,Se=j&&!!S.sheenRoughnessMap,Te=!!S.specularMap,ye=!!S.specularColorMap,qe=!!S.specularIntensityMap,z=ee&&!!S.transmissionMap,xe=ee&&!!S.thicknessMap,_e=!!S.gradientMap,we=!!S.alphaMap,me=S.alphaTest>0,se=!!S.alphaHash,Ue=!!S.extensions;let Ve=fr;S.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const gt={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:Ne,fragmentShader:Ye,defines:S.defines,customVertexShaderID:$e,customFragmentShaderID:ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Le,batchingColor:Le&&N._colorsTexture!==null,instancing:ze,instancingColor:ze&&N.instanceColor!==null,instancingMorph:ze&&N.morphTexture!==null,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ts,alphaToCoverage:!!S.alphaToCoverage,map:Ie,matcap:I,envMap:O,envMapMode:O&&L.mapping,envMapCubeUVHeight:X,aoMap:Y,lightMap:re,bumpMap:Q,normalMap:F,displacementMap:C,emissiveMap:fe,normalMapObjectSpace:F&&S.normalMapType===JE,normalMapTangentSpace:F&&S.normalMapType===kv,metalnessMap:ae,roughnessMap:ne,anisotropy:oe,anisotropyMap:q,clearcoat:R,clearcoatMap:ve,clearcoatNormalMap:he,clearcoatRoughnessMap:De,dispersion:M,iridescence:B,iridescenceMap:Me,iridescenceThicknessMap:pe,sheen:j,sheenColorMap:ge,sheenRoughnessMap:Se,specularMap:Te,specularColorMap:ye,specularIntensityMap:qe,transmission:ee,transmissionMap:z,thicknessMap:xe,gradientMap:_e,opaque:S.transparent===!1&&S.blending===Ja&&S.alphaToCoverage===!1,alphaMap:we,alphaTest:me,alphaHash:se,combine:S.combine,mapUv:Ie&&g(S.map.channel),aoMapUv:Y&&g(S.aoMap.channel),lightMapUv:re&&g(S.lightMap.channel),bumpMapUv:Q&&g(S.bumpMap.channel),normalMapUv:F&&g(S.normalMap.channel),displacementMapUv:C&&g(S.displacementMap.channel),emissiveMapUv:fe&&g(S.emissiveMap.channel),metalnessMapUv:ae&&g(S.metalnessMap.channel),roughnessMapUv:ne&&g(S.roughnessMap.channel),anisotropyMapUv:q&&g(S.anisotropyMap.channel),clearcoatMapUv:ve&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(S.sheenRoughnessMap.channel),specularMapUv:Te&&g(S.specularMap.channel),specularColorMapUv:ye&&g(S.specularColorMap.channel),specularIntensityMapUv:qe&&g(S.specularIntensityMap.channel),transmissionMapUv:z&&g(S.transmissionMap.channel),thicknessMapUv:xe&&g(S.thicknessMap.channel),alphaMapUv:we&&g(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(F||oe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Ie||we),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||W.attributes.normal===void 0&&F===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ce,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===Tt,decodeVideoTextureEmissive:fe&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ai,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)E.push(U),E.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(m(E,S),v(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function m(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const E=d[S.type];let U;if(E){const P=tr[E];U=Nb.clone(P.uniforms)}else U=S.uniforms;return U}function x(S,E){let U=u.get(E);return U!==void 0?++U.usedTimes:(U=new gR(n,E,S,r),c.push(U),u.set(E,U)),U}function b(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function A(S){o.remove(S)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:y,acquireProgram:x,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:T}}function MR(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function yR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Vg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,_,p,m){let v=n[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:m},n[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=g,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=p,v.group=m),e++,v}function l(h,d,g,_,p,m){const v=o(h,d,g,_,p,m);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):t.push(v)}function c(h,d,g,_,p,m){const v=o(h,d,g,_,p,m);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function u(h,d){t.length>1&&t.sort(h||yR),i.length>1&&i.sort(d||Vg),r.length>1&&r.sort(d||Vg)}function f(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function ER(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Wg,n.set(i,[a])):r>=s.length?(a=new Wg,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function bR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new ht};break;case"SpotLight":t={position:new $,direction:new $,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function TR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let wR=0;function AR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RR(n){const e=new bR,t=TR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new It,a=new It;function o(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,v=0,y=0,x=0,b=0,A=0,T=0;c.sort(AR);for(let E=0,U=c.length;E<U;E++){const P=c[E],N=P.color,H=P.intensity,W=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ho?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=N.r*H,f+=N.g*H,h+=N.b*H;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],H);T++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const L=P.shadow,X=t.get(P);X.shadowIntensity=L.intensity,X.shadowBias=L.bias,X.shadowNormalBias=L.normalBias,X.shadowRadius=L.radius,X.shadowMapSize=L.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=P.shadow.matrix,v++}i.directional[d]=k,d++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(N).multiplyScalar(H),k.distance=W,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[_]=k;const L=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,L.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[_]=L.matrix,P.castShadow){const X=t.get(P);X.shadowIntensity=L.intensity,X.shadowBias=L.bias,X.shadowNormalBias=L.normalBias,X.shadowRadius=L.radius,X.shadowMapSize=L.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=V,x++}_++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(N).multiplyScalar(H),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=k,p++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const L=P.shadow,X=t.get(P);X.shadowIntensity=L.intensity,X.shadowBias=L.bias,X.shadowNormalBias=L.normalBias,X.shadowRadius=L.radius,X.shadowMapSize=L.mapSize,X.shadowCameraNear=L.camera.near,X.shadowCameraFar=L.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=P.shadow.matrix,y++}i.point[g]=k,g++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(H),k.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[m]=k,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const S=i.hash;(S.directionalLength!==d||S.pointLength!==g||S.spotLength!==_||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==v||S.numPointShadows!==y||S.numSpotShadows!==x||S.numSpotMaps!==b||S.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,S.directionalLength=d,S.pointLength=g,S.spotLength=_,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=v,S.numPointShadows=y,S.numSpotShadows=x,S.numSpotMaps=b,S.numLightProbes=T,i.version=wR++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const y=c[m];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),f++}else if(y.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function Xg(n){const e=new RR(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function CR(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Xg(n),e.set(r,[o])):s>=a.length?(o=new Xg(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const PR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IR=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],LR=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Yg=new It,Io=new $,Bf=new $;function UR(n,e,t){let i=new Ep;const r=new Xe,s=new Xe,a=new Ht,o=new kb,l=new Hb,c={},u=t.maxTextureSize,f={[Hr]:Jt,[Jt]:Hr,[ai]:ai},h=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:PR,fragmentShader:DR}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Rn;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let m=this.type;this.render=function(A,T,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===PE&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oc);const E=n.getRenderTarget(),U=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ti),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=m!==this.type;H&&T.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(V=>V.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,V=A.length;W<V;W++){const k=A[W],L=k.shadow;if(L===void 0){Ze("WebGLShadowMap:",k,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const X=L.getFrameExtents();r.multiply(X),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,L.mapSize.y=s.y));const K=n.state.buffers.depth.getReversed();if(L.camera._reversedDepth=K,L.map===null||H===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Go){if(k.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Sn(r.x,r.y,{format:ho,type:Gr,minFilter:sn,magFilter:sn,generateMipmaps:!1}),L.map.texture.name=k.name+".shadowMap",L.map.depthTexture=new po(r.x,r.y,Hi),L.map.depthTexture.name=k.name+".shadowMapDepth",L.map.depthTexture.format=Vr,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Tn,L.map.depthTexture.magFilter=Tn}else k.isPointLight?(L.map=new ex(r.x),L.map.depthTexture=new Lb(r.x,Xi)):(L.map=new Sn(r.x,r.y),L.map.depthTexture=new po(r.x,r.y,Xi)),L.map.depthTexture.name=k.name+".shadowMap",L.map.depthTexture.format=Vr,this.type===Oc?(L.map.depthTexture.compareFunction=K?Mp:Sp,L.map.depthTexture.minFilter=sn,L.map.depthTexture.magFilter=sn):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Tn,L.map.depthTexture.magFilter=Tn);L.camera.updateProjectionMatrix()}const D=L.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<D;le++){if(L.map.isWebGLCubeRenderTarget)n.setRenderTarget(L.map,le),n.clear();else{le===0&&(n.setRenderTarget(L.map),n.clear());const ce=L.getViewport(le);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),N.viewport(a)}if(k.isPointLight){const ce=L.camera,Ne=L.matrix,Ye=k.distance||ce.far;Ye!==ce.far&&(ce.far=Ye,ce.updateProjectionMatrix()),Io.setFromMatrixPosition(k.matrixWorld),ce.position.copy(Io),Bf.copy(ce.position),Bf.add(IR[le]),ce.up.copy(LR[le]),ce.lookAt(Bf),ce.updateMatrixWorld(),Ne.makeTranslation(-Io.x,-Io.y,-Io.z),Yg.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),L._frustum.setFromProjectionMatrix(Yg,ce.coordinateSystem,ce.reversedDepth)}else L.updateMatrices(k);i=L.getFrustum(),x(T,S,L.camera,k,this.type)}L.isPointLightShadow!==!0&&this.type===Go&&v(L,S),L.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(E,U,P)};function v(A,T){const S=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Sn(r.x,r.y,{format:ho,type:Gr})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,S,h,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,S,d,_,null)}function y(A,T,S,E){let U=null;const P=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)U=P;else if(U=S.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const N=U.uuid,H=T.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let V=W[H];V===void 0&&(V=U.clone(),W[H]=V,T.addEventListener("dispose",b)),U=V}if(U.visible=T.visible,U.wireframe=T.wireframe,E===Go?U.side=T.shadowSide!==null?T.shadowSide:T.side:U.side=T.shadowSide!==null?T.shadowSide:f[T.side],U.alphaMap=T.alphaMap,U.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,U.map=T.map,U.clipShadows=T.clipShadows,U.clippingPlanes=T.clippingPlanes,U.clipIntersection=T.clipIntersection,U.displacementMap=T.displacementMap,U.displacementScale=T.displacementScale,U.displacementBias=T.displacementBias,U.wireframeLinewidth=T.wireframeLinewidth,U.linewidth=T.linewidth,S.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const N=n.properties.get(U);N.light=S}return U}function x(A,T,S,E,U){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===Go)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const H=e.update(A),W=A.material;if(Array.isArray(W)){const V=H.groups;for(let k=0,L=V.length;k<L;k++){const X=V[k],K=W[X.materialIndex];if(K&&K.visible){const D=y(A,K,E,U);A.onBeforeShadow(n,A,T,S,H,D,X),n.renderBufferDirect(S,null,H,D,A,X),A.onAfterShadow(n,A,T,S,H,D,X)}}}else if(W.visible){const V=y(A,W,E,U);A.onBeforeShadow(n,A,T,S,H,V,null),n.renderBufferDirect(S,null,H,V,A,null),A.onAfterShadow(n,A,T,S,H,V,null)}}const N=A.children;for(let H=0,W=N.length;H<W;H++)x(N[H],T,S,E,U)}function b(A){A.target.removeEventListener("dispose",b);for(const S in c){const E=c[S],U=A.target.uuid;U in E&&(E[U].dispose(),delete E[U])}}}function NR(n,e){function t(){let z=!1;const xe=new Ht;let _e=null;const we=new Ht(0,0,0,0);return{setMask:function(me){_e!==me&&!z&&(n.colorMask(me,me,me,me),_e=me)},setLocked:function(me){z=me},setClear:function(me,se,Ue,Ve,gt){gt===!0&&(me*=Ve,se*=Ve,Ue*=Ve),xe.set(me,se,Ue,Ve),we.equals(xe)===!1&&(n.clearColor(me,se,Ue,Ve),we.copy(xe))},reset:function(){z=!1,_e=null,we.set(-1,0,0,0)}}}function i(){let z=!1,xe=!1,_e=null,we=null,me=null;return{setReversed:function(se){if(xe!==se){const Ue=e.get("EXT_clip_control");se?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),xe=se;const Ve=me;me=null,this.setClear(Ve)}},getReversed:function(){return xe},setTest:function(se){se?ue(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(se){_e!==se&&!z&&(n.depthMask(se),_e=se)},setFunc:function(se){if(xe&&(se=lb[se]),we!==se){switch(se){case bh:n.depthFunc(n.NEVER);break;case ou:n.depthFunc(n.ALWAYS);break;case Th:n.depthFunc(n.LESS);break;case co:n.depthFunc(n.LEQUAL);break;case wh:n.depthFunc(n.EQUAL);break;case Ah:n.depthFunc(n.GEQUAL);break;case Rh:n.depthFunc(n.GREATER);break;case Ch:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=se}},setLocked:function(se){z=se},setClear:function(se){me!==se&&(me=se,xe&&(se=1-se),n.clearDepth(se))},reset:function(){z=!1,_e=null,we=null,me=null,xe=!1}}}function r(){let z=!1,xe=null,_e=null,we=null,me=null,se=null,Ue=null,Ve=null,gt=null;return{setTest:function(Pe){z||(Pe?ue(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Pe){xe!==Pe&&!z&&(n.stencilMask(Pe),xe=Pe)},setFunc:function(Pe,ke,et){(_e!==Pe||we!==ke||me!==et)&&(n.stencilFunc(Pe,ke,et),_e=Pe,we=ke,me=et)},setOp:function(Pe,ke,et){(se!==Pe||Ue!==ke||Ve!==et)&&(n.stencilOp(Pe,ke,et),se=Pe,Ue=ke,Ve=et)},setLocked:function(Pe){z=Pe},setClear:function(Pe){gt!==Pe&&(n.clearStencil(Pe),gt=Pe)},reset:function(){z=!1,xe=null,_e=null,we=null,me=null,se=null,Ue=null,Ve=null,gt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,p=null,m=null,v=null,y=null,x=null,b=null,A=null,T=new ht(0,0,0),S=0,E=!1,U=null,P=null,N=null,H=null,W=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,L=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=L>=1):X.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=L>=2);let K=null,D={};const le=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),Ne=new Ht().fromArray(le),Ye=new Ht().fromArray(ce);function $e(z,xe,_e,we){const me=new Uint8Array(4),se=n.createTexture();n.bindTexture(z,se),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<_e;Ue++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(xe+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return se}const ie={};ie[n.TEXTURE_2D]=$e(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=$e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=$e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=$e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),a.setFunc(co),Q(!1),F(Vm),ue(n.CULL_FACE),Y(ti);function ue(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function de(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function ze(z,xe){return f[z]!==xe?(n.bindFramebuffer(z,xe),f[z]=xe,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=xe),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function Le(z,xe){let _e=d,we=!1;if(z){_e=h.get(xe),_e===void 0&&(_e=[],h.set(xe,_e));const me=z.textures;if(_e.length!==me.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let se=0,Ue=me.length;se<Ue;se++)_e[se]=n.COLOR_ATTACHMENT0+se;_e.length=me.length,we=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,we=!0);we&&n.drawBuffers(_e)}function Ie(z){return g!==z?(n.useProgram(z),g=z,!0):!1}const I={[Ws]:n.FUNC_ADD,[IE]:n.FUNC_SUBTRACT,[LE]:n.FUNC_REVERSE_SUBTRACT};I[UE]=n.MIN,I[NE]=n.MAX;const O={[FE]:n.ZERO,[OE]:n.ONE,[BE]:n.SRC_COLOR,[yh]:n.SRC_ALPHA,[WE]:n.SRC_ALPHA_SATURATE,[GE]:n.DST_COLOR,[kE]:n.DST_ALPHA,[zE]:n.ONE_MINUS_SRC_COLOR,[Eh]:n.ONE_MINUS_SRC_ALPHA,[VE]:n.ONE_MINUS_DST_COLOR,[HE]:n.ONE_MINUS_DST_ALPHA,[XE]:n.CONSTANT_COLOR,[YE]:n.ONE_MINUS_CONSTANT_COLOR,[qE]:n.CONSTANT_ALPHA,[$E]:n.ONE_MINUS_CONSTANT_ALPHA};function Y(z,xe,_e,we,me,se,Ue,Ve,gt,Pe){if(z===ti){_===!0&&(de(n.BLEND),_=!1);return}if(_===!1&&(ue(n.BLEND),_=!0),z!==DE){if(z!==p||Pe!==E){if((m!==Ws||x!==Ws)&&(n.blendEquation(n.FUNC_ADD),m=Ws,x=Ws),Pe)switch(z){case Ja:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case au:n.blendFunc(n.ONE,n.ONE);break;case Wm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:vt("WebGLState: Invalid blending: ",z);break}else switch(z){case Ja:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case au:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wm:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xm:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",z);break}v=null,y=null,b=null,A=null,T.set(0,0,0),S=0,p=z,E=Pe}return}me=me||xe,se=se||_e,Ue=Ue||we,(xe!==m||me!==x)&&(n.blendEquationSeparate(I[xe],I[me]),m=xe,x=me),(_e!==v||we!==y||se!==b||Ue!==A)&&(n.blendFuncSeparate(O[_e],O[we],O[se],O[Ue]),v=_e,y=we,b=se,A=Ue),(Ve.equals(T)===!1||gt!==S)&&(n.blendColor(Ve.r,Ve.g,Ve.b,gt),T.copy(Ve),S=gt),p=z,E=!1}function re(z,xe){z.side===ai?de(n.CULL_FACE):ue(n.CULL_FACE);let _e=z.side===Jt;xe&&(_e=!_e),Q(_e),z.blending===Ja&&z.transparent===!1?Y(ti):Y(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const we=z.stencilWrite;o.setTest(we),we&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(z){U!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),U=z)}function F(z){z!==RE?(ue(n.CULL_FACE),z!==P&&(z===Vm?n.cullFace(n.BACK):z===CE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),P=z}function C(z){z!==N&&(k&&n.lineWidth(z),N=z)}function fe(z,xe,_e){z?(ue(n.POLYGON_OFFSET_FILL),(H!==xe||W!==_e)&&(H=xe,W=_e,a.getReversed()&&(xe=-xe),n.polygonOffset(xe,_e))):de(n.POLYGON_OFFSET_FILL)}function ae(z){z?ue(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function ne(z){z===void 0&&(z=n.TEXTURE0+V-1),K!==z&&(n.activeTexture(z),K=z)}function oe(z,xe,_e){_e===void 0&&(K===null?_e=n.TEXTURE0+V-1:_e=K);let we=D[_e];we===void 0&&(we={type:void 0,texture:void 0},D[_e]=we),(we.type!==z||we.texture!==xe)&&(K!==_e&&(n.activeTexture(_e),K=_e),n.bindTexture(z,xe||ie[z]),we.type=z,we.texture=xe)}function R(){const z=D[K];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(z){vt("WebGLState:",z)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(z){vt("WebGLState:",z)}}function j(){try{n.texSubImage2D(...arguments)}catch(z){vt("WebGLState:",z)}}function ee(){try{n.texSubImage3D(...arguments)}catch(z){vt("WebGLState:",z)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(z){vt("WebGLState:",z)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(z){vt("WebGLState:",z)}}function he(){try{n.texStorage2D(...arguments)}catch(z){vt("WebGLState:",z)}}function De(){try{n.texStorage3D(...arguments)}catch(z){vt("WebGLState:",z)}}function Me(){try{n.texImage2D(...arguments)}catch(z){vt("WebGLState:",z)}}function pe(){try{n.texImage3D(...arguments)}catch(z){vt("WebGLState:",z)}}function ge(z){Ne.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ne.copy(z))}function Se(z){Ye.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Ye.copy(z))}function Te(z,xe){let _e=c.get(xe);_e===void 0&&(_e=new WeakMap,c.set(xe,_e));let we=_e.get(z);we===void 0&&(we=n.getUniformBlockIndex(xe,z.name),_e.set(z,we))}function ye(z,xe){const we=c.get(xe).get(z);l.get(xe)!==we&&(n.uniformBlockBinding(xe,we,z.__bindingPointIndex),l.set(xe,we))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,D={},f={},h=new WeakMap,d=[],g=null,_=!1,p=null,m=null,v=null,y=null,x=null,b=null,A=null,T=new ht(0,0,0),S=0,E=!1,U=null,P=null,N=null,H=null,W=null,Ne.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:de,bindFramebuffer:ze,drawBuffers:Le,useProgram:Ie,setBlending:Y,setMaterial:re,setFlipSided:Q,setCullFace:F,setLineWidth:C,setPolygonOffset:fe,setScissorTest:ae,activeTexture:ne,bindTexture:oe,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:B,texImage2D:Me,texImage3D:pe,updateUBOMapping:Te,uniformBlockBinding:ye,texStorage2D:he,texStorage3D:De,texSubImage2D:j,texSubImage3D:ee,compressedTexSubImage2D:q,compressedTexSubImage3D:ve,scissor:ge,viewport:Se,reset:qe}}function FR(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return d?new OffscreenCanvas(R,M):Rl("canvas")}function _(R,M,B){let j=1;const ee=oe(R);if((ee.width>B||ee.height>B)&&(j=B/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(j*ee.width),ve=Math.floor(j*ee.height);f===void 0&&(f=g(q,ve));const he=M?g(q,ve):f;return he.width=q,he.height=ve,he.getContext("2d").drawImage(R,0,0,q,ve),Ze("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+ve+")."),he}else return"data"in R&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,M,B,j,ee=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),M===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(q=n.RGB16UI),B===n.UNSIGNED_INT&&(q=n.RGB32UI),B===n.BYTE&&(q=n.RGB8I),B===n.SHORT&&(q=n.RGB16I),B===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),B===n.UNSIGNED_INT&&(q=n.RGBA32UI),B===n.BYTE&&(q=n.RGBA8I),B===n.SHORT&&(q=n.RGBA16I),B===n.INT&&(q=n.RGBA32I)),M===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),M===n.RGBA){const ve=ee?lu:mt.getTransfer(j);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=ve===Tt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(R,M){let B;return R?M===null||M===Xi||M===fo?B=n.DEPTH24_STENCIL8:M===Hi?B=n.DEPTH32F_STENCIL8:M===wl&&(B=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xi||M===fo?B=n.DEPTH_COMPONENT24:M===Hi?B=n.DEPTH_COMPONENT32F:M===wl&&(B=n.DEPTH_COMPONENT16),B}function b(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),S(M),M.isVideoTexture&&u.delete(M)}function T(R){const M=R.target;M.removeEventListener("dispose",T),U(M)}function S(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,j=h.get(B);if(j){const ee=j[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(R),Object.keys(j).length===0&&h.delete(B)}i.remove(R)}function E(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const B=R.source,j=h.get(B);delete j[M.__cacheKey],a.memory.textures--}function U(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let ee=0;ee<M.__webglFramebuffer[j].length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[j][ee]);else n.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)n.deleteFramebuffer(M.__webglFramebuffer[j]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let j=0,ee=B.length;j<ee;j++){const q=i.get(B[j]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(B[j])}i.remove(R)}let P=0;function N(){P=0}function H(){const R=P;return R>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function W(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function V(R,M){const B=i.get(R);if(R.isVideoTexture&&ae(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const j=R.image;if(j===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(B,R,M);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function k(R,M){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ie(B,R,M);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function L(R,M){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ie(B,R,M);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function X(R,M){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){ue(B,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const K={[Ph]:n.REPEAT,[Ir]:n.CLAMP_TO_EDGE,[Dh]:n.MIRRORED_REPEAT},D={[Tn]:n.NEAREST,[ZE]:n.NEAREST_MIPMAP_NEAREST,[Ql]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[af]:n.LINEAR_MIPMAP_NEAREST,[js]:n.LINEAR_MIPMAP_LINEAR},le={[QE]:n.NEVER,[rb]:n.ALWAYS,[eb]:n.LESS,[Sp]:n.LEQUAL,[tb]:n.EQUAL,[Mp]:n.GEQUAL,[nb]:n.GREATER,[ib]:n.NOTEQUAL};function ce(R,M){if(M.type===Hi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===af||M.magFilter===Ql||M.magFilter===js||M.minFilter===sn||M.minFilter===af||M.minFilter===Ql||M.minFilter===js)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,K[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,K[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,K[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,D[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,D[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Tn||M.minFilter!==Ql&&M.minFilter!==js||M.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ne(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const j=M.source;let ee=h.get(j);ee===void 0&&(ee={},h.set(j,ee));const q=W(M);if(q!==R.__cacheKey){ee[q]===void 0&&(ee[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ee[q].usedTimes++;const ve=ee[R.__cacheKey];ve!==void 0&&(ee[R.__cacheKey].usedTimes--,ve.usedTimes===0&&E(M)),R.__cacheKey=q,R.__webglTexture=ee[q].texture}return B}function Ye(R,M,B){return Math.floor(Math.floor(R/B)/M)}function $e(R,M,B,j){const q=R.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,B,j,M.data);else{q.sort((pe,ge)=>pe.start-ge.start);let ve=0;for(let pe=1;pe<q.length;pe++){const ge=q[ve],Se=q[pe],Te=ge.start+ge.count,ye=Ye(Se.start,M.width,4),qe=Ye(ge.start,M.width,4);Se.start<=Te+1&&ye===qe&&Ye(Se.start+Se.count-1,M.width,4)===ye?ge.count=Math.max(ge.count,Se.start+Se.count-ge.start):(++ve,q[ve]=Se)}q.length=ve+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),De=n.getParameter(n.UNPACK_SKIP_PIXELS),Me=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let pe=0,ge=q.length;pe<ge;pe++){const Se=q[pe],Te=Math.floor(Se.start/4),ye=Math.ceil(Se.count/4),qe=Te%M.width,z=Math.floor(Te/M.width),xe=ye,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,qe,z,xe,_e,B,j,M.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function ie(R,M,B){let j=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=n.TEXTURE_3D);const ee=Ne(R,M),q=M.source;t.bindTexture(j,R.__webglTexture,n.TEXTURE0+B);const ve=i.get(q);if(q.version!==ve.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);const he=mt.getPrimaries(mt.workingColorSpace),De=M.colorSpace===ir?null:mt.getPrimaries(M.colorSpace),Me=M.colorSpace===ir||he===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let pe=_(M.image,!1,r.maxTextureSize);pe=ne(M,pe);const ge=s.convert(M.format,M.colorSpace),Se=s.convert(M.type);let Te=y(M.internalFormat,ge,Se,M.colorSpace,M.isVideoTexture);ce(j,M);let ye;const qe=M.mipmaps,z=M.isVideoTexture!==!0,xe=ve.__version===void 0||ee===!0,_e=q.dataReady,we=b(M,pe);if(M.isDepthTexture)Te=x(M.format===us,M.type),xe&&(z?t.texStorage2D(n.TEXTURE_2D,1,Te,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Te,pe.width,pe.height,0,ge,Se,null));else if(M.isDataTexture)if(qe.length>0){z&&xe&&t.texStorage2D(n.TEXTURE_2D,we,Te,qe[0].width,qe[0].height);for(let me=0,se=qe.length;me<se;me++)ye=qe[me],z?_e&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ye.width,ye.height,ge,Se,ye.data):t.texImage2D(n.TEXTURE_2D,me,Te,ye.width,ye.height,0,ge,Se,ye.data);M.generateMipmaps=!1}else z?(xe&&t.texStorage2D(n.TEXTURE_2D,we,Te,pe.width,pe.height),_e&&$e(M,pe,ge,Se)):t.texImage2D(n.TEXTURE_2D,0,Te,pe.width,pe.height,0,ge,Se,pe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){z&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Te,qe[0].width,qe[0].height,pe.depth);for(let me=0,se=qe.length;me<se;me++)if(ye=qe[me],M.format!==Gi)if(ge!==null)if(z){if(_e)if(M.layerUpdates.size>0){const Ue=Eg(ye.width,ye.height,M.format,M.type);for(const Ve of M.layerUpdates){const gt=ye.data.subarray(Ve*Ue/ye.data.BYTES_PER_ELEMENT,(Ve+1)*Ue/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,Ve,ye.width,ye.height,1,ge,gt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ye.width,ye.height,pe.depth,ge,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Te,ye.width,ye.height,pe.depth,0,ye.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ye.width,ye.height,pe.depth,ge,Se,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Te,ye.width,ye.height,pe.depth,0,ge,Se,ye.data)}else{z&&xe&&t.texStorage2D(n.TEXTURE_2D,we,Te,qe[0].width,qe[0].height);for(let me=0,se=qe.length;me<se;me++)ye=qe[me],M.format!==Gi?ge!==null?z?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,ye.width,ye.height,ge,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Te,ye.width,ye.height,0,ye.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?_e&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ye.width,ye.height,ge,Se,ye.data):t.texImage2D(n.TEXTURE_2D,me,Te,ye.width,ye.height,0,ge,Se,ye.data)}else if(M.isDataArrayTexture)if(z){if(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Te,pe.width,pe.height,pe.depth),_e)if(M.layerUpdates.size>0){const me=Eg(pe.width,pe.height,M.format,M.type);for(const se of M.layerUpdates){const Ue=pe.data.subarray(se*me/pe.data.BYTES_PER_ELEMENT,(se+1)*me/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,pe.width,pe.height,1,ge,Se,Ue)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ge,Se,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,pe.width,pe.height,pe.depth,0,ge,Se,pe.data);else if(M.isData3DTexture)z?(xe&&t.texStorage3D(n.TEXTURE_3D,we,Te,pe.width,pe.height,pe.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ge,Se,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Te,pe.width,pe.height,pe.depth,0,ge,Se,pe.data);else if(M.isFramebufferTexture){if(xe)if(z)t.texStorage2D(n.TEXTURE_2D,we,Te,pe.width,pe.height);else{let me=pe.width,se=pe.height;for(let Ue=0;Ue<we;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Te,me,se,0,ge,Se,null),me>>=1,se>>=1}}else if(qe.length>0){if(z&&xe){const me=oe(qe[0]);t.texStorage2D(n.TEXTURE_2D,we,Te,me.width,me.height)}for(let me=0,se=qe.length;me<se;me++)ye=qe[me],z?_e&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ge,Se,ye):t.texImage2D(n.TEXTURE_2D,me,Te,ge,Se,ye);M.generateMipmaps=!1}else if(z){if(xe){const me=oe(pe);t.texStorage2D(n.TEXTURE_2D,we,Te,me.width,me.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Se,pe)}else t.texImage2D(n.TEXTURE_2D,0,Te,ge,Se,pe);p(M)&&m(j),ve.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ue(R,M,B){if(M.image.length!==6)return;const j=Ne(R,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);const q=i.get(ee);if(ee.version!==q.__version||j===!0){t.activeTexture(n.TEXTURE0+B);const ve=mt.getPrimaries(mt.workingColorSpace),he=M.colorSpace===ir?null:mt.getPrimaries(M.colorSpace),De=M.colorSpace===ir||ve===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Me=M.isCompressedTexture||M.image[0].isCompressedTexture,pe=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let se=0;se<6;se++)!Me&&!pe?ge[se]=_(M.image[se],!0,r.maxCubemapSize):ge[se]=pe?M.image[se].image:M.image[se],ge[se]=ne(M,ge[se]);const Se=ge[0],Te=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),qe=y(M.internalFormat,Te,ye,M.colorSpace),z=M.isVideoTexture!==!0,xe=q.__version===void 0||j===!0,_e=ee.dataReady;let we=b(M,Se);ce(n.TEXTURE_CUBE_MAP,M);let me;if(Me){z&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,qe,Se.width,Se.height);for(let se=0;se<6;se++){me=ge[se].mipmaps;for(let Ue=0;Ue<me.length;Ue++){const Ve=me[Ue];M.format!==Gi?Te!==null?z?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,0,0,Ve.width,Ve.height,Te,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,qe,Ve.width,Ve.height,0,Ve.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,0,0,Ve.width,Ve.height,Te,ye,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,qe,Ve.width,Ve.height,0,Te,ye,Ve.data)}}}else{if(me=M.mipmaps,z&&xe){me.length>0&&we++;const se=oe(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,qe,se.width,se.height)}for(let se=0;se<6;se++)if(pe){z?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge[se].width,ge[se].height,Te,ye,ge[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,ge[se].width,ge[se].height,0,Te,ye,ge[se].data);for(let Ue=0;Ue<me.length;Ue++){const gt=me[Ue].image[se].image;z?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,0,0,gt.width,gt.height,Te,ye,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,qe,gt.width,gt.height,0,Te,ye,gt.data)}}else{z?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Te,ye,ge[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,Te,ye,ge[se]);for(let Ue=0;Ue<me.length;Ue++){const Ve=me[Ue];z?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,0,0,Te,ye,Ve.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,qe,Te,ye,Ve.image[se])}}}p(M)&&m(n.TEXTURE_CUBE_MAP),q.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function de(R,M,B,j,ee,q){const ve=s.convert(B.format,B.colorSpace),he=s.convert(B.type),De=y(B.internalFormat,ve,he,B.colorSpace),Me=i.get(M),pe=i.get(B);if(pe.__renderTarget=M,!Me.__hasExternalTextures){const ge=Math.max(1,M.width>>q),Se=Math.max(1,M.height>>q);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,De,ge,Se,M.depth,0,ve,he,null):t.texImage2D(ee,q,De,ge,Se,0,ve,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),fe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ee,pe.__webglTexture,0,C(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ee,pe.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(R,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const j=M.depthTexture,ee=j&&j.isDepthTexture?j.type:null,q=x(M.stencilBuffer,ee),ve=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(M),q,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(M),q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,R)}else{const j=M.textures;for(let ee=0;ee<j.length;ee++){const q=j[ee],ve=s.convert(q.format,q.colorSpace),he=s.convert(q.type),De=y(q.internalFormat,ve,he,q.colorSpace);fe(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(M),De,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(M),De,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,De,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(R,M,B){const j=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(M.depthTexture);if(ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ce(n.TEXTURE_CUBE_MAP,M.depthTexture);const Me=s.convert(M.depthTexture.format),pe=s.convert(M.depthTexture.type);let ge;M.depthTexture.format===Vr?ge=n.DEPTH_COMPONENT24:M.depthTexture.format===us&&(ge=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ge,M.width,M.height,0,Me,pe,null)}}else V(M.depthTexture,0);const q=ee.__webglTexture,ve=C(M),he=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,De=M.depthTexture.format===us?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Vr)fe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,he,q,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,De,he,q,0);else if(M.depthTexture.format===us)fe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,he,q,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,De,he,q,0);else throw new Error("Unknown depthTexture format")}function Ie(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=j}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let j=0;j<6;j++)Le(M.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?Le(M.__webglFramebuffer[0],R,0):Le(M.__webglFramebuffer,R,0)}else if(B){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=n.createRenderbuffer(),ze(M.__webglDepthbuffer[j],R,!1);else{const ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ze(M.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(R,M,B){const j=i.get(R);M!==void 0&&de(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ie(R)}function O(R){const M=R.texture,B=i.get(R),j=i.get(M);R.addEventListener("dispose",T);const ee=R.textures,q=R.isWebGLCubeRenderTarget===!0,ve=ee.length>1;if(ve||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=M.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let De=0;De<M.mipmaps.length;De++)B.__webglFramebuffer[he][De]=n.createFramebuffer()}else B.__webglFramebuffer[he]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)B.__webglFramebuffer[he]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ve)for(let he=0,De=ee.length;he<De;he++){const Me=i.get(ee[he]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&fe(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<ee.length;he++){const De=ee[he];B.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const Me=s.convert(De.format,De.colorSpace),pe=s.convert(De.type),ge=y(De.internalFormat,Me,pe,De.colorSpace,R.isXRRenderTarget===!0),Se=C(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ge,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,B.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ce(n.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)de(B.__webglFramebuffer[he][De],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De);else de(B.__webglFramebuffer[he],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let he=0,De=ee.length;he<De;he++){const Me=ee[he],pe=i.get(Me);let ge=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,pe.__webglTexture),ce(ge,Me),de(B.__webglFramebuffer,R,Me,n.COLOR_ATTACHMENT0+he,ge,0),p(Me)&&m(ge)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,j.__webglTexture),ce(he,M),M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)de(B.__webglFramebuffer[De],R,M,n.COLOR_ATTACHMENT0,he,De);else de(B.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,he,0);p(M)&&m(he),t.unbindTexture()}R.depthBuffer&&Ie(R)}function Y(R){const M=R.textures;for(let B=0,j=M.length;B<j;B++){const ee=M[B];if(p(ee)){const q=v(R),ve=i.get(ee).__webglTexture;t.bindTexture(q,ve),m(q),t.unbindTexture()}}}const re=[],Q=[];function F(R){if(R.samples>0){if(fe(R)===!1){const M=R.textures,B=R.width,j=R.height;let ee=n.COLOR_BUFFER_BIT;const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(R),he=M.length>1;if(he)for(let Me=0;Me<M.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const De=R.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);const pe=i.get(M[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,B,j,0,0,B,j,ee,n.NEAREST),l===!0&&(re.length=0,Q.length=0,re.push(n.COLOR_ATTACHMENT0+Me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(re.push(q),Q.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Me=0;Me<M.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);const pe=i.get(M[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function C(R){return Math.min(r.maxSamples,R.samples)}function fe(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ae(R){const M=a.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function ne(R,M){const B=R.colorSpace,j=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Ts&&B!==ir&&(mt.getTransfer(B)===Tt?(j!==Gi||ee!==rn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",B)),M}function oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=L,this.setTextureCube=X,this.rebindTextures=I,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=de,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function OR(n,e){function t(i,r=ir){let s;const a=mt.getTransfer(r);if(i===rn)return n.UNSIGNED_BYTE;if(i===pp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ov)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uv)return n.BYTE;if(i===Nv)return n.SHORT;if(i===wl)return n.UNSIGNED_SHORT;if(i===dp)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===Hi)return n.FLOAT;if(i===Gr)return n.HALF_FLOAT;if(i===Bv)return n.ALPHA;if(i===zv)return n.RGB;if(i===Gi)return n.RGBA;if(i===Vr)return n.DEPTH_COMPONENT;if(i===us)return n.DEPTH_STENCIL;if(i===gp)return n.RED;if(i===_p)return n.RED_INTEGER;if(i===ho)return n.RG;if(i===vp)return n.RG_INTEGER;if(i===xp)return n.RGBA_INTEGER;if(i===Bc||i===zc||i===kc||i===Hc)if(a===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ih||i===Lh||i===Uh||i===Nh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ih)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fh||i===Oh||i===Bh||i===zh||i===kh||i===Hh||i===Gh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fh||i===Oh)return a===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===zh)return s.COMPRESSED_R11_EAC;if(i===kh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Hh)return s.COMPRESSED_RG11_EAC;if(i===Gh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vh||i===Wh||i===Xh||i===Yh||i===qh||i===$h||i===Kh||i===jh||i===Zh||i===Jh||i===Qh||i===ed||i===td||i===nd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$h)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qh)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ed)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===td)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nd)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===id||i===rd||i===sd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===id)return a===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ad||i===od||i===ld||i===cd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ad)return s.COMPRESSED_RED_RGTC1_EXT;if(i===od)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ld)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const BR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new jv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Cn({vertexShader:BR,fragmentShader:zR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new wu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HR extends Xr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",p=new kR,m={},v=t.getContextAttributes();let y=null,x=null;const b=[],A=[],T=new Xe;let S=null;const E=new Zn;E.viewport=new Ht;const U=new Zn;U.viewport=new Ht;const P=[E,U],N=new Qb;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ue=b[ie];return ue===void 0&&(ue=new pf,b[ie]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ie){let ue=b[ie];return ue===void 0&&(ue=new pf,b[ie]=ue),ue.getGripSpace()},this.getHand=function(ie){let ue=b[ie];return ue===void 0&&(ue=new pf,b[ie]=ue),ue.getHandSpace()};function V(ie){const ue=A.indexOf(ie.inputSource);if(ue===-1)return;const de=b[ue];de!==void 0&&(de.update(ie.inputSource,ie.frame,c||a),de.dispatchEvent({type:ie.type,data:ie.inputSource}))}function k(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",L);for(let ie=0;ie<b.length;ie++){const ue=A[ie];ue!==null&&(A[ie]=null,b[ie].disconnect(ue))}H=null,W=null,p.reset();for(const ie in m)delete m[ie];e.setRenderTarget(y),d=null,h=null,f=null,r=null,x=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",k),r.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ze=null,Le=null;v.depth&&(Le=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=v.stencil?us:Vr,ze=v.stencil?fo:Xi);const Ie={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Sn(h.textureWidth,h.textureHeight,{format:Gi,type:rn,depthTexture:new po(h.textureWidth,h.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Sn(d.framebufferWidth,d.framebufferHeight,{format:Gi,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function L(ie){for(let ue=0;ue<ie.removed.length;ue++){const de=ie.removed[ue],ze=A.indexOf(de);ze>=0&&(A[ze]=null,b[ze].disconnect(de))}for(let ue=0;ue<ie.added.length;ue++){const de=ie.added[ue];let ze=A.indexOf(de);if(ze===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=A.length){A.push(de),ze=Ie;break}else if(A[Ie]===null){A[Ie]=de,ze=Ie;break}if(ze===-1)break}const Le=b[ze];Le&&Le.connect(de)}}const X=new $,K=new $;function D(ie,ue,de){X.setFromMatrixPosition(ue.matrixWorld),K.setFromMatrixPosition(de.matrixWorld);const ze=X.distanceTo(K),Le=ue.projectionMatrix.elements,Ie=de.projectionMatrix.elements,I=Le[14]/(Le[10]-1),O=Le[14]/(Le[10]+1),Y=(Le[9]+1)/Le[5],re=(Le[9]-1)/Le[5],Q=(Le[8]-1)/Le[0],F=(Ie[8]+1)/Ie[0],C=I*Q,fe=I*F,ae=ze/(-Q+F),ne=ae*-Q;if(ue.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ne),ie.translateZ(ae),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Le[10]===-1)ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const oe=I+ae,R=O+ae,M=C-ne,B=fe+(ze-ne),j=Y*O/R*oe,ee=re*O/R*oe;ie.projectionMatrix.makePerspective(M,B,j,ee,oe,R),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function le(ie,ue){ue===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ue.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let ue=ie.near,de=ie.far;p.texture!==null&&(p.depthNear>0&&(ue=p.depthNear),p.depthFar>0&&(de=p.depthFar)),N.near=U.near=E.near=ue,N.far=U.far=E.far=de,(H!==N.near||W!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,W=N.far),N.layers.mask=ie.layers.mask|6,E.layers.mask=N.layers.mask&-5,U.layers.mask=N.layers.mask&-3;const ze=ie.parent,Le=N.cameras;le(N,ze);for(let Ie=0;Ie<Le.length;Ie++)le(Le[Ie],ze);Le.length===2?D(N,E,U):N.projectionMatrix.copy(E.projectionMatrix),ce(ie,N,ze)};function ce(ie,ue,de){de===null?ie.matrix.copy(ue.matrixWorld):(ie.matrix.copy(de.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ue.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=uu*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(ie){return m[ie]};let Ne=null;function Ye(ie,ue){if(u=ue.getViewerPose(c||a),g=ue,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ze=!1;de.length!==N.cameras.length&&(N.cameras.length=0,ze=!0);for(let O=0;O<de.length;O++){const Y=de[O];let re=null;if(d!==null)re=d.getViewport(Y);else{const F=f.getViewSubImage(h,Y);re=F.viewport,O===0&&(e.setRenderTargetTextures(x,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(x))}let Q=P[O];Q===void 0&&(Q=new Zn,Q.layers.enable(O),Q.viewport=new Ht,P[O]=Q),Q.matrix.fromArray(Y.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Y.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(re.x,re.y,re.width,re.height),O===0&&(N.matrix.copy(Q.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ze===!0&&N.cameras.push(Q)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const O=f.getDepthInformation(de[0]);O&&O.isValid&&O.texture&&p.init(O,r.renderState)}if(Le&&Le.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let O=0;O<de.length;O++){const Y=de[O].camera;if(Y){let re=m[Y];re||(re=new jv,m[Y]=re);const Q=f.getCameraImage(Y);re.sourceTexture=Q}}}}for(let de=0;de<b.length;de++){const ze=A[de],Le=b[de];ze!==null&&Le!==void 0&&Le.update(ze,ue,c||a)}Ne&&Ne(ie,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const $e=new Qv;$e.setAnimationLoop(Ye),this.setAnimationLoop=function(ie){Ne=ie},this.dispose=function(){}}}const Bs=new pr,GR=new It;function VR(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Zv(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,v,y,x){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),y=v.envMap,x=v.envMapRotation;y&&(p.envMap.value=y,Bs.copy(x),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),p.envMapRotation.value.setFromMatrix4(GR.makeRotationFromEuler(Bs)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WR(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=r[v.id];x===void 0&&(g(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",p));const b=y.program;i.updateUBOMapping(v,b);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function u(v){const y=f();v.__bindingPointIndex=y;const x=n.createBuffer(),b=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=r[v.id],x=v.uniforms,b=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,T=x.length;A<T;A++){const S=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,U=S.length;E<U;E++){const P=S[E];if(d(P,A,E,b)===!0){const N=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let V=0;V<H.length;V++){const k=H[V],L=_(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,N+W,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,W),W+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,y,x,b){const A=v.value,T=y+"_"+x;if(b[T]===void 0)return typeof A=="number"||typeof A=="boolean"?b[T]=A:b[T]=A.clone(),!0;{const S=b[T];if(typeof A=="number"||typeof A=="boolean"){if(S!==A)return b[T]=A,!0}else if(S.equals(A)===!1)return S.copy(A),!0}return!1}function g(v){const y=v.uniforms;let x=0;const b=16;for(let T=0,S=y.length;T<S;T++){const E=Array.isArray(y[T])?y[T]:[y[T]];for(let U=0,P=E.length;U<P;U++){const N=E[U],H=Array.isArray(N.value)?N.value:[N.value];for(let W=0,V=H.length;W<V;W++){const k=H[W],L=_(k),X=x%b,K=X%L.boundary,D=X+K;x+=K,D!==0&&b-D<L.storage&&(x+=b-D),N.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=L.storage}}}const A=x%b;return A>0&&(x+=b-A),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ze("WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){const y=v.target;y.removeEventListener("dispose",p);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}const XR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function YR(){return ji===null&&(ji=new $v(XR,16,16,ho,Gr),ji.name="DFG_LUT",ji.minFilter=sn,ji.magFilter=sn,ji.wrapS=Ir,ji.wrapT=Ir,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class qR{constructor(e={}){const{canvas:t=ab(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=rn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=d,p=new Set([xp,vp,_p]),m=new Set([rn,Xi,wl,fo,pp,mp]),v=new Uint32Array(4),y=new Int32Array(4);let x=null,b=null;const A=[],T=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let U=!1;this._outputColorSpace=Rt;let P=0,N=0,H=null,W=-1,V=null;const k=new Ht,L=new Ht;let X=null;const K=new ht(0);let D=0,le=t.width,ce=t.height,Ne=1,Ye=null,$e=null;const ie=new Ht(0,0,le,ce),ue=new Ht(0,0,le,ce);let de=!1;const ze=new Ep;let Le=!1,Ie=!1;const I=new It,O=new $,Y=new Ht,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function F(){return H===null?Ne:1}let C=i;function fe(w,G){return t.getContext(w,G)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",gt,!1),C===null){const G="webgl2";if(C=fe(G,w),C===null)throw fe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw vt("WebGLRenderer: "+w.message),w}let ae,ne,oe,R,M,B,j,ee,q,ve,he,De,Me,pe,ge,Se,Te,ye,qe,z,xe,_e,we;function me(){ae=new qw(C),ae.init(),xe=new OR(C,ae),ne=new zw(C,ae,e,xe),oe=new NR(C,ae),ne.reversedDepthBuffer&&h&&oe.buffers.depth.setReversed(!0),R=new jw(C),M=new MR,B=new FR(C,ae,oe,M,ne,xe,R),j=new Yw(E),ee=new tT(C),_e=new Ow(C,ee),q=new $w(C,ee,R,_e),ve=new Jw(C,q,ee,_e,R),ye=new Zw(C,ne,B),ge=new kw(M),he=new SR(E,j,ae,ne,_e,ge),De=new VR(E,M),Me=new ER,pe=new CR(ae),Te=new Fw(E,j,oe,ve,g,l),Se=new UR(E,ve,ne),we=new WR(C,R,ne,oe),qe=new Bw(C,ae,R),z=new Kw(C,ae,R),R.programs=he.programs,E.capabilities=ne,E.extensions=ae,E.properties=M,E.renderLists=Me,E.shadowMap=Se,E.state=oe,E.info=R}me(),_!==rn&&(S=new eA(_,t.width,t.height,r,s));const se=new HR(E,C);this.xr=se,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(w){w!==void 0&&(Ne=w,this.setSize(le,ce,!1))},this.getSize=function(w){return w.set(le,ce)},this.setSize=function(w,G,te=!0){if(se.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}le=w,ce=G,t.width=Math.floor(w*Ne),t.height=Math.floor(G*Ne),te===!0&&(t.style.width=w+"px",t.style.height=G+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(le*Ne,ce*Ne).floor()},this.setDrawingBufferSize=function(w,G,te){le=w,ce=G,Ne=te,t.width=Math.floor(w*te),t.height=Math.floor(G*te),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(_===rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,G,te,J){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,G,te,J),oe.viewport(k.copy(ie).multiplyScalar(Ne).round())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,G,te,J){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,G,te,J),oe.scissor(L.copy(ue).multiplyScalar(Ne).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(w){oe.setScissorTest(de=w)},this.setOpaqueSort=function(w){Ye=w},this.setTransparentSort=function(w){$e=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,te=!0){let J=0;if(w){let Z=!1;if(H!==null){const Ee=H.texture.format;Z=p.has(Ee)}if(Z){const Ee=H.texture.type,Ae=m.has(Ee),be=Te.getClearColor(),Oe=Te.getClearAlpha(),Fe=be.r,Qe=be.g,rt=be.b;Ae?(v[0]=Fe,v[1]=Qe,v[2]=rt,v[3]=Oe,C.clearBufferuiv(C.COLOR,0,v)):(y[0]=Fe,y[1]=Qe,y[2]=rt,y[3]=Oe,C.clearBufferiv(C.COLOR,0,y))}else J|=C.COLOR_BUFFER_BIT}G&&(J|=C.DEPTH_BUFFER_BIT),te&&(J|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&C.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),Te.dispose(),Me.dispose(),pe.dispose(),M.dispose(),j.dispose(),ve.dispose(),_e.dispose(),we.dispose(),he.dispose(),se.dispose(),se.removeEventListener("sessionstart",je),se.removeEventListener("sessionend",$t),Je.stop()};function Ue(w){w.preventDefault(),jm("WebGLRenderer: Context Lost."),U=!0}function Ve(){jm("WebGLRenderer: Context Restored."),U=!1;const w=R.autoReset,G=Se.enabled,te=Se.autoUpdate,J=Se.needsUpdate,Z=Se.type;me(),R.autoReset=w,Se.enabled=G,Se.autoUpdate=te,Se.needsUpdate=J,Se.type=Z}function gt(w){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pe(w){const G=w.target;G.removeEventListener("dispose",Pe),ke(G)}function ke(w){et(w),M.remove(w)}function et(w){const G=M.get(w).programs;G!==void 0&&(G.forEach(function(te){he.releaseProgram(te)}),w.isShaderMaterial&&he.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,te,J,Z,Ee){G===null&&(G=re);const Ae=Z.isMesh&&Z.matrixWorld.determinant()<0,be=Ai(w,G,te,J,Z);oe.setMaterial(J,Ae);let Oe=te.index,Fe=1;if(J.wireframe===!0){if(Oe=q.getWireframeAttribute(te),Oe===void 0)return;Fe=2}const Qe=te.drawRange,rt=te.attributes.position;let Ge=Qe.start*Fe,wt=(Qe.start+Qe.count)*Fe;Ee!==null&&(Ge=Math.max(Ge,Ee.start*Fe),wt=Math.min(wt,(Ee.start+Ee.count)*Fe)),Oe!==null?(Ge=Math.max(Ge,0),wt=Math.min(wt,Oe.count)):rt!=null&&(Ge=Math.max(Ge,0),wt=Math.min(wt,rt.count));const Kt=wt-Ge;if(Kt<0||Kt===1/0)return;_e.setup(Z,J,be,te,Oe);let Yt,At=qe;if(Oe!==null&&(Yt=ee.get(Oe),At=z,At.setIndex(Yt)),Z.isMesh)J.wireframe===!0?(oe.setLineWidth(J.wireframeLinewidth*F()),At.setMode(C.LINES)):At.setMode(C.TRIANGLES);else if(Z.isLine){let In=J.linewidth;In===void 0&&(In=1),oe.setLineWidth(In*F()),Z.isLineSegments?At.setMode(C.LINES):Z.isLineLoop?At.setMode(C.LINE_LOOP):At.setMode(C.LINE_STRIP)}else Z.isPoints?At.setMode(C.POINTS):Z.isSprite&&At.setMode(C.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)cu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))At.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const In=Z._multiDrawStarts,He=Z._multiDrawCounts,hi=Z._multiDrawCount,_t=Oe?ee.get(Oe).bytesPerElement:1,Ni=M.get(J).currentProgram.getUniforms();for(let qi=0;qi<hi;qi++)Ni.setValue(C,"_gl_DrawID",qi),At.render(In[qi]/_t,He[qi])}else if(Z.isInstancedMesh)At.renderInstances(Ge,Kt,Z.count);else if(te.isInstancedBufferGeometry){const In=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,He=Math.min(te.instanceCount,In);At.renderInstances(Ge,Kt,He)}else At.render(Ge,Kt)};function Re(w,G,te){w.transparent===!0&&w.side===ai&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,Pn(w,G,te),w.side=Hr,w.needsUpdate=!0,Pn(w,G,te),w.side=ai):Pn(w,G,te)}this.compile=function(w,G,te=null){te===null&&(te=w),b=pe.get(te),b.init(G),T.push(b),te.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),w!==te&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights();const J=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ee=Z.material;if(Ee)if(Array.isArray(Ee))for(let Ae=0;Ae<Ee.length;Ae++){const be=Ee[Ae];Re(be,te,Z),J.add(be)}else Re(Ee,te,Z),J.add(Ee)}),b=T.pop(),J},this.compileAsync=function(w,G,te=null){const J=this.compile(w,G,te);return new Promise(Z=>{function Ee(){if(J.forEach(function(Ae){M.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){Z(w);return}setTimeout(Ee,10)}ae.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ke=null;function We(w){Ke&&Ke(w)}function je(){Je.stop()}function $t(){Je.start()}const Je=new Qv;Je.setAnimationLoop(We),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(w){Ke=w,se.setAnimationLoop(w),w===null?Je.stop():Je.start()},se.addEventListener("sessionstart",je),se.addEventListener("sessionend",$t),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const te=se.enabled===!0&&se.isPresenting===!0,J=S!==null&&(H===null||te)&&S.begin(E,H);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(G),G=se.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,G,H),b=pe.get(w,T.length),b.init(G),T.push(b),I.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ze.setFromProjectionMatrix(I,or,G.reversedDepth),Ie=this.localClippingEnabled,Le=ge.init(this.clippingPlanes,Ie),x=Me.get(w,A.length),x.init(),A.push(x),se.enabled===!0&&se.isPresenting===!0){const Ae=E.xr.getDepthSensingMesh();Ae!==null&&Ot(Ae,G,-1/0,E.sortObjects)}Ot(w,G,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(Ye,$e),Q=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Q&&Te.addToRenderList(x,w),this.info.render.frame++,Le===!0&&ge.beginShadows();const Z=b.state.shadowsArray;if(Se.render(Z,w,G),Le===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&S.hasRenderPass())===!1){const Ae=x.opaque,be=x.transmissive;if(b.setupLights(),G.isArrayCamera){const Oe=G.cameras;if(be.length>0)for(let Fe=0,Qe=Oe.length;Fe<Qe;Fe++){const rt=Oe[Fe];Bt(Ae,be,w,rt)}Q&&Te.render(w);for(let Fe=0,Qe=Oe.length;Fe<Qe;Fe++){const rt=Oe[Fe];an(x,w,rt,rt.viewport)}}else be.length>0&&Bt(Ae,be,w,G),Q&&Te.render(w),an(x,w,G)}H!==null&&N===0&&(B.updateMultisampleRenderTarget(H),B.updateRenderTargetMipmap(H)),J&&S.end(E),w.isScene===!0&&w.onAfterRender(E,w,G),_e.resetDefaultState(),W=-1,V=null,T.pop(),T.length>0?(b=T[T.length-1],Le===!0&&ge.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?x=A[A.length-1]:x=null};function Ot(w,G,te,J){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ze.intersectsSprite(w)){J&&Y.setFromMatrixPosition(w.matrixWorld).applyMatrix4(I);const Ae=ve.update(w),be=w.material;be.visible&&x.push(w,Ae,be,te,Y.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ze.intersectsObject(w))){const Ae=ve.update(w),be=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Y.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Y.copy(Ae.boundingSphere.center)),Y.applyMatrix4(w.matrixWorld).applyMatrix4(I)),Array.isArray(be)){const Oe=Ae.groups;for(let Fe=0,Qe=Oe.length;Fe<Qe;Fe++){const rt=Oe[Fe],Ge=be[rt.materialIndex];Ge&&Ge.visible&&x.push(w,Ae,Ge,te,Y.z,rt)}}else be.visible&&x.push(w,Ae,be,te,Y.z,null)}}const Ee=w.children;for(let Ae=0,be=Ee.length;Ae<be;Ae++)Ot(Ee[Ae],G,te,J)}function an(w,G,te,J){const{opaque:Z,transmissive:Ee,transparent:Ae}=w;b.setupLightsView(te),Le===!0&&ge.setGlobalState(E.clippingPlanes,te),J&&oe.viewport(k.copy(J)),Z.length>0&&bt(Z,G,te),Ee.length>0&&bt(Ee,G,te),Ae.length>0&&bt(Ae,G,te),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Bt(w,G,te,J){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[J.id]===void 0){const Ge=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[J.id]=new Sn(1,1,{generateMipmaps:!0,type:Ge?Gr:rn,minFilter:js,samples:ne.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const Ee=b.state.transmissionRenderTarget[J.id],Ae=J.viewport||k;Ee.setSize(Ae.z*E.transmissionResolutionScale,Ae.w*E.transmissionResolutionScale);const be=E.getRenderTarget(),Oe=E.getActiveCubeFace(),Fe=E.getActiveMipmapLevel();E.setRenderTarget(Ee),E.getClearColor(K),D=E.getClearAlpha(),D<1&&E.setClearColor(16777215,.5),E.clear(),Q&&Te.render(te);const Qe=E.toneMapping;E.toneMapping=fr;const rt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),b.setupLightsView(J),Le===!0&&ge.setGlobalState(E.clippingPlanes,J),bt(w,te,J),B.updateMultisampleRenderTarget(Ee),B.updateRenderTargetMipmap(Ee),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let wt=0,Kt=G.length;wt<Kt;wt++){const Yt=G[wt],{object:At,geometry:In,material:He,group:hi}=Yt;if(He.side===ai&&At.layers.test(J.layers)){const _t=He.side;He.side=Jt,He.needsUpdate=!0,St(At,te,J,In,He,hi),He.side=_t,He.needsUpdate=!0,Ge=!0}}Ge===!0&&(B.updateMultisampleRenderTarget(Ee),B.updateRenderTargetMipmap(Ee))}E.setRenderTarget(be,Oe,Fe),E.setClearColor(K,D),rt!==void 0&&(J.viewport=rt),E.toneMapping=Qe}function bt(w,G,te){const J=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,Ee=w.length;Z<Ee;Z++){const Ae=w[Z],{object:be,geometry:Oe,group:Fe}=Ae;let Qe=Ae.material;Qe.allowOverride===!0&&J!==null&&(Qe=J),be.layers.test(te.layers)&&St(be,G,te,Oe,Qe,Fe)}}function St(w,G,te,J,Z,Ee){w.onBeforeRender(E,G,te,J,Z,Ee),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(E,G,te,J,w,Ee),Z.transparent===!0&&Z.side===ai&&Z.forceSinglePass===!1?(Z.side=Jt,Z.needsUpdate=!0,E.renderBufferDirect(te,G,J,Z,w,Ee),Z.side=Hr,Z.needsUpdate=!0,E.renderBufferDirect(te,G,J,Z,w,Ee),Z.side=ai):E.renderBufferDirect(te,G,J,Z,w,Ee),w.onAfterRender(E,G,te,J,Z,Ee)}function Pn(w,G,te){G.isScene!==!0&&(G=re);const J=M.get(w),Z=b.state.lights,Ee=b.state.shadowsArray,Ae=Z.state.version,be=he.getParameters(w,Z.state,Ee,G,te),Oe=he.getProgramCacheKey(be);let Fe=J.programs;J.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,J.fog=G.fog;const Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;J.envMap=j.get(w.envMap||J.environment,Qe),J.envMapRotation=J.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",Pe),Fe=new Map,J.programs=Fe);let rt=Fe.get(Oe);if(rt!==void 0){if(J.currentProgram===rt&&J.lightsStateVersion===Ae)return Dn(w,be),rt}else be.uniforms=he.getUniforms(w),w.onBeforeCompile(be,E),rt=he.acquireProgram(be,Oe),Fe.set(Oe,rt),J.uniforms=be.uniforms;const Ge=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=ge.uniform),Dn(w,be),J.needsLights=ln(w),J.lightsStateVersion=Ae,J.needsLights&&(Ge.ambientLightColor.value=Z.state.ambient,Ge.lightProbe.value=Z.state.probe,Ge.directionalLights.value=Z.state.directional,Ge.directionalLightShadows.value=Z.state.directionalShadow,Ge.spotLights.value=Z.state.spot,Ge.spotLightShadows.value=Z.state.spotShadow,Ge.rectAreaLights.value=Z.state.rectArea,Ge.ltc_1.value=Z.state.rectAreaLTC1,Ge.ltc_2.value=Z.state.rectAreaLTC2,Ge.pointLights.value=Z.state.point,Ge.pointLightShadows.value=Z.state.pointShadow,Ge.hemisphereLights.value=Z.state.hemi,Ge.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ge.spotLightMatrix.value=Z.state.spotLightMatrix,Ge.spotLightMap.value=Z.state.spotLightMap,Ge.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=rt,J.uniformsList=null,rt}function Lt(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Gc.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Dn(w,G){const te=M.get(w);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function Ai(w,G,te,J,Z){G.isScene!==!0&&(G=re),B.resetTextureUnits();const Ee=G.fog,Ae=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?G.environment:null,be=H===null?E.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ts,Oe=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Fe=j.get(J.envMap||Ae,Oe),Qe=J.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,rt=!!te.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ge=!!te.morphAttributes.position,wt=!!te.morphAttributes.normal,Kt=!!te.morphAttributes.color;let Yt=fr;J.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Yt=E.toneMapping);const At=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,In=At!==void 0?At.length:0,He=M.get(J),hi=b.state.lights;if(Le===!0&&(Ie===!0||w!==V)){const mn=w===V&&J.id===W;ge.setState(J,w,mn)}let _t=!1;J.version===He.__version?(He.needsLights&&He.lightsStateVersion!==hi.state.version||He.outputColorSpace!==be||Z.isBatchedMesh&&He.batching===!1||!Z.isBatchedMesh&&He.batching===!0||Z.isBatchedMesh&&He.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&He.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&He.instancing===!1||!Z.isInstancedMesh&&He.instancing===!0||Z.isSkinnedMesh&&He.skinning===!1||!Z.isSkinnedMesh&&He.skinning===!0||Z.isInstancedMesh&&He.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&He.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&He.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&He.instancingMorph===!1&&Z.morphTexture!==null||He.envMap!==Fe||J.fog===!0&&He.fog!==Ee||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ge.numPlanes||He.numIntersection!==ge.numIntersection)||He.vertexAlphas!==Qe||He.vertexTangents!==rt||He.morphTargets!==Ge||He.morphNormals!==wt||He.morphColors!==Kt||He.toneMapping!==Yt||He.morphTargetsCount!==In)&&(_t=!0):(_t=!0,He.__version=J.version);let Ni=He.currentProgram;_t===!0&&(Ni=Pn(J,G,Z));let qi=!1,Rs=!1,da=!1;const Ct=Ni.getUniforms(),En=He.uniforms;if(oe.useProgram(Ni.program)&&(qi=!0,Rs=!0,da=!0),J.id!==W&&(W=J.id,Rs=!0),qi||V!==w){oe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ct.setValue(C,"projectionMatrix",w.projectionMatrix),Ct.setValue(C,"viewMatrix",w.matrixWorldInverse);const qr=Ct.map.cameraPosition;qr!==void 0&&qr.setValue(C,O.setFromMatrixPosition(w.matrixWorld)),ne.logarithmicDepthBuffer&&Ct.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ct.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,Rs=!0,da=!0)}if(He.needsLights&&(hi.state.directionalShadowMap.length>0&&Ct.setValue(C,"directionalShadowMap",hi.state.directionalShadowMap,B),hi.state.spotShadowMap.length>0&&Ct.setValue(C,"spotShadowMap",hi.state.spotShadowMap,B),hi.state.pointShadowMap.length>0&&Ct.setValue(C,"pointShadowMap",hi.state.pointShadowMap,B)),Z.isSkinnedMesh){Ct.setOptional(C,Z,"bindMatrix"),Ct.setOptional(C,Z,"bindMatrixInverse");const mn=Z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ct.setValue(C,"boneTexture",mn.boneTexture,B))}Z.isBatchedMesh&&(Ct.setOptional(C,Z,"batchingTexture"),Ct.setValue(C,"batchingTexture",Z._matricesTexture,B),Ct.setOptional(C,Z,"batchingIdTexture"),Ct.setValue(C,"batchingIdTexture",Z._indirectTexture,B),Ct.setOptional(C,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ct.setValue(C,"batchingColorTexture",Z._colorsTexture,B));const Yr=te.morphAttributes;if((Yr.position!==void 0||Yr.normal!==void 0||Yr.color!==void 0)&&ye.update(Z,te,Ni),(Rs||He.receiveShadow!==Z.receiveShadow)&&(He.receiveShadow=Z.receiveShadow,Ct.setValue(C,"receiveShadow",Z.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&G.environment!==null&&(En.envMapIntensity.value=G.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=YR()),Rs&&(Ct.setValue(C,"toneMappingExposure",E.toneMappingExposure),He.needsLights&&on(En,da),Ee&&J.fog===!0&&De.refreshFogUniforms(En,Ee),De.refreshMaterialUniforms(En,J,Ne,ce,b.state.transmissionRenderTarget[w.id]),Gc.upload(C,Lt(He),En,B)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Gc.upload(C,Lt(He),En,B),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ct.setValue(C,"center",Z.center),Ct.setValue(C,"modelViewMatrix",Z.modelViewMatrix),Ct.setValue(C,"normalMatrix",Z.normalMatrix),Ct.setValue(C,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const mn=J.uniformsGroups;for(let qr=0,pa=mn.length;qr<pa;qr++){const Cp=mn[qr];we.update(Cp,Ni),we.bind(Cp,Ni)}}return Ni}function on(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function ln(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(w,G,te){const J=M.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),M.get(w.texture).__webglTexture=G,M.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:te,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const te=M.get(w);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0};const pn=C.createFramebuffer();this.setRenderTarget=function(w,G=0,te=0){H=w,P=G,N=te;let J=null,Z=!1,Ee=!1;if(w){const be=M.get(w);if(be.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(C.FRAMEBUFFER,be.__webglFramebuffer),k.copy(w.viewport),L.copy(w.scissor),X=w.scissorTest,oe.viewport(k),oe.scissor(L),oe.setScissorTest(X),W=-1;return}else if(be.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(be.__hasExternalTextures)B.rebindTextures(w,M.get(w.texture).__webglTexture,M.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Qe=w.depthTexture;if(be.__boundDepthTexture!==Qe){if(Qe!==null&&M.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ee=!0);const Fe=M.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[G])?J=Fe[G][te]:J=Fe[G],Z=!0):w.samples>0&&B.useMultisampledRTT(w)===!1?J=M.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?J=Fe[te]:J=Fe,k.copy(w.viewport),L.copy(w.scissor),X=w.scissorTest}else k.copy(ie).multiplyScalar(Ne).floor(),L.copy(ue).multiplyScalar(Ne).floor(),X=de;if(te!==0&&(J=pn),oe.bindFramebuffer(C.FRAMEBUFFER,J)&&oe.drawBuffers(w,J),oe.viewport(k),oe.scissor(L),oe.setScissorTest(X),Z){const be=M.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+G,be.__webglTexture,te)}else if(Ee){const be=G;for(let Oe=0;Oe<w.textures.length;Oe++){const Fe=M.get(w.textures[Oe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Oe,Fe.__webglTexture,te,be)}}else if(w!==null&&te!==0){const be=M.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,be.__webglTexture,te)}W=-1},this.readRenderTargetPixels=function(w,G,te,J,Z,Ee,Ae,be=0){if(!(w&&w.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){oe.bindFramebuffer(C.FRAMEBUFFER,Oe);try{const Fe=w.textures[be],Qe=Fe.format,rt=Fe.type;if(w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+be),!ne.textureFormatReadable(Qe)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(rt)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-J&&te>=0&&te<=w.height-Z&&C.readPixels(G,te,J,Z,xe.convert(Qe),xe.convert(rt),Ee)}finally{const Fe=H!==null?M.get(H).__webglFramebuffer:null;oe.bindFramebuffer(C.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,G,te,J,Z,Ee,Ae,be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe)if(G>=0&&G<=w.width-J&&te>=0&&te<=w.height-Z){oe.bindFramebuffer(C.FRAMEBUFFER,Oe);const Fe=w.textures[be],Qe=Fe.format,rt=Fe.type;if(w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+be),!ne.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ge),C.bufferData(C.PIXEL_PACK_BUFFER,Ee.byteLength,C.STREAM_READ),C.readPixels(G,te,J,Z,xe.convert(Qe),xe.convert(rt),0);const wt=H!==null?M.get(H).__webglFramebuffer:null;oe.bindFramebuffer(C.FRAMEBUFFER,wt);const Kt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await ob(C,Kt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ge),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ee),C.deleteBuffer(Ge),C.deleteSync(Kt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,te=0){const J=Math.pow(2,-te),Z=Math.floor(w.image.width*J),Ee=Math.floor(w.image.height*J),Ae=G!==null?G.x:0,be=G!==null?G.y:0;B.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,te,0,0,Ae,be,Z,Ee),oe.unbindTexture()};const mr=C.createFramebuffer(),ha=C.createFramebuffer();this.copyTextureToTexture=function(w,G,te=null,J=null,Z=0,Ee=0){let Ae,be,Oe,Fe,Qe,rt,Ge,wt,Kt;const Yt=w.isCompressedTexture?w.mipmaps[Ee]:w.image;if(te!==null)Ae=te.max.x-te.min.x,be=te.max.y-te.min.y,Oe=te.isBox3?te.max.z-te.min.z:1,Fe=te.min.x,Qe=te.min.y,rt=te.isBox3?te.min.z:0;else{const En=Math.pow(2,-Z);Ae=Math.floor(Yt.width*En),be=Math.floor(Yt.height*En),w.isDataArrayTexture?Oe=Yt.depth:w.isData3DTexture?Oe=Math.floor(Yt.depth*En):Oe=1,Fe=0,Qe=0,rt=0}J!==null?(Ge=J.x,wt=J.y,Kt=J.z):(Ge=0,wt=0,Kt=0);const At=xe.convert(G.format),In=xe.convert(G.type);let He;G.isData3DTexture?(B.setTexture3D(G,0),He=C.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(B.setTexture2DArray(G,0),He=C.TEXTURE_2D_ARRAY):(B.setTexture2D(G,0),He=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,G.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,G.unpackAlignment);const hi=C.getParameter(C.UNPACK_ROW_LENGTH),_t=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ni=C.getParameter(C.UNPACK_SKIP_PIXELS),qi=C.getParameter(C.UNPACK_SKIP_ROWS),Rs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Yt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Yt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Qe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,rt);const da=w.isDataArrayTexture||w.isData3DTexture,Ct=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const En=M.get(w),Yr=M.get(G),mn=M.get(En.__renderTarget),qr=M.get(Yr.__renderTarget);oe.bindFramebuffer(C.READ_FRAMEBUFFER,mn.__webglFramebuffer),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let pa=0;pa<Oe;pa++)da&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,M.get(w).__webglTexture,Z,rt+pa),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,M.get(G).__webglTexture,Ee,Kt+pa)),C.blitFramebuffer(Fe,Qe,Ae,be,Ge,wt,Ae,be,C.DEPTH_BUFFER_BIT,C.NEAREST);oe.bindFramebuffer(C.READ_FRAMEBUFFER,null),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||M.has(w)){const En=M.get(w),Yr=M.get(G);oe.bindFramebuffer(C.READ_FRAMEBUFFER,mr),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,ha);for(let mn=0;mn<Oe;mn++)da?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,En.__webglTexture,Z,rt+mn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,En.__webglTexture,Z),Ct?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Yr.__webglTexture,Ee,Kt+mn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Yr.__webglTexture,Ee),Z!==0?C.blitFramebuffer(Fe,Qe,Ae,be,Ge,wt,Ae,be,C.COLOR_BUFFER_BIT,C.NEAREST):Ct?C.copyTexSubImage3D(He,Ee,Ge,wt,Kt+mn,Fe,Qe,Ae,be):C.copyTexSubImage2D(He,Ee,Ge,wt,Fe,Qe,Ae,be);oe.bindFramebuffer(C.READ_FRAMEBUFFER,null),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ct?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(He,Ee,Ge,wt,Kt,Ae,be,Oe,At,In,Yt.data):G.isCompressedArrayTexture?C.compressedTexSubImage3D(He,Ee,Ge,wt,Kt,Ae,be,Oe,At,Yt.data):C.texSubImage3D(He,Ee,Ge,wt,Kt,Ae,be,Oe,At,In,Yt):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ee,Ge,wt,Ae,be,At,In,Yt.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ee,Ge,wt,Yt.width,Yt.height,At,Yt.data):C.texSubImage2D(C.TEXTURE_2D,Ee,Ge,wt,Ae,be,At,In,Yt);C.pixelStorei(C.UNPACK_ROW_LENGTH,hi),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,_t),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ni),C.pixelStorei(C.UNPACK_SKIP_ROWS,qi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Rs),Ee===0&&G.generateMipmaps&&C.generateMipmap(He),oe.unbindTexture()},this.initRenderTarget=function(w){M.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),oe.unbindTexture()},this.resetState=function(){P=0,N=0,H=null,oe.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}/**
 * postprocessing v6.38.3 build Thu Feb 19 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var zf=1/1e3,$R=1e3,KR=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*zf}get fixedDelta(){return this._fixedDelta*zf}set fixedDelta(n){this._fixedDelta=n*$R}get elapsed(){return this._elapsed*zf}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},jR=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Rn;return t.setAttribute("position",new wn(n,3)),t.setAttribute("uv",new wn(e,2)),t})(),Yi=class md{static get fullscreenGeometry(){return jR}constructor(e="Pass",t=new ud,i=new Ru){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Gt(md.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new ud),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Ul){}render(e,t,i,r,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Sn||t instanceof As||t instanceof xn||t instanceof md)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},ZR=class extends Yi{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,r){const s=n.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},JR=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,sx="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",ax=class extends Cn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new dt(null),depthBuffer:new dt(null),channelWeights:new dt(null),opacity:new dt(1)},blending:ti,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:JR,vertexShader:sx}),this.depthFunc=ou}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},QR=class extends Yi{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new ax,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new Sn(1,1,{minFilter:sn,magFilter:sn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,r){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==rn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===Rt&&(this.renderTarget.texture.colorSpace=Rt))}},qg=new ht,ox=class extends Yi{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),l=s!==null,c=a>=0;l?(n.getClearColor(qg),n.setClearColor(s,c?a:o)):c&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),l?n.setClearColor(qg,o):c&&n.setClearAlpha(o)}},eC=class extends Yi{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new ox(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,r){const s=n.getContext(),a=n.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,f=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,u,4294967295),a.stencil.setClear(f),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(n,null):(c.render(n,e),c.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,l)):(n.setRenderTarget(e),n.render(o,l),n.setRenderTarget(t),n.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},$g=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new QR,this.depthTexture=null,this.passes=[],this.timer=new KR,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(n){const e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new Xe),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===rn&&n.outputColorSpace===Rt&&(this.inputBuffer.texture.colorSpace=Rt,this.outputBuffer.texture.colorSpace=Rt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=this.depthTexture=new po;return this.inputBuffer.depthTexture=n,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(n.format=us,n.type=fo):n.type=Xi,n}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){const r=this.renderer,s=r===null?new Xe:r.getDrawingBufferSize(new Xe),a={minFilter:sn,magFilter:sn,stencilBuffer:e,depthBuffer:n,type:t},o=new Sn(s.width,s.height,a);return i>0&&(o.samples=i),t===rn&&r!==null&&r.outputColorSpace===Rt&&(o.texture.colorSpace=Rt),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new Xe),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.setRenderer(i),n.setSize(r.width,r.height),n.initialize(i,s,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(n of t)n.setDepthTexture(o)}else n.setDepthTexture(this.depthTexture)}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const s=(o,l)=>o||l.needsDepthTexture;e.reduce(s,!1)||(n.getDepthTexture()===this.depthTexture&&n.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,s=!1,a,o,l;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const c of this.passes)c.enabled&&(c.render(e,i,r,n,s),c.needsSwap&&(s&&(t.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,i,r,n,s),o.setFunc(a.EQUAL,1,4294967295)),l=i,i=r,r=l),c instanceof eC?s=!0:c instanceof ZR&&(s=!1))}setSize(n,e,t){const i=this.renderer,r=i.getSize(new Xe);(n===void 0||e===void 0)&&(n=r.width,e=r.height),(r.width!==n||r.height!==e)&&i.setSize(n,e,t);const s=i.getDrawingBufferSize(new Xe);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Yi.fullscreenGeometry.dispose()}},_s={NONE:0,DEPTH:1,CONVOLUTION:2},xt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},tC=class{constructor(){this.shaderParts=new Map([[xt.FRAGMENT_HEAD,null],[xt.FRAGMENT_MAIN_UV,null],[xt.FRAGMENT_MAIN_IMAGE,null],[xt.VERTEX_HEAD,null],[xt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=_s.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Ts}},kf=!1,Kg=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case ai:t=this.materialsFlatShadedDoubleSide;break;case Jt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case ai:t=this.materialsDoubleSide;break;case Jt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof Cn))return n.clone();const e=n.uniforms,t=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,t.set(r,s))}const i=n.clone();for(const r of t)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=Hr;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Jt,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=ai,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Jt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=ai,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,kf){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=r}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return kf}static set workaroundEnabled(n){kf=n}},es=-1,lr=class extends Xr{constructor(n,e=es,t=es,i=1){super(),this.resizable=n,this.baseSize=new Xe(1,1),this.preferredSize=new Xe(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new Xe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==es?t.width=e.width:e.height!==es?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==es?t.height=e.height:e.width!==es?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(es),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return es}},ut={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},nC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",rC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",aC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_C="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",MC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",TC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",IC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UC=new Map([[ut.ADD,nC],[ut.ALPHA,iC],[ut.AVERAGE,rC],[ut.COLOR,sC],[ut.COLOR_BURN,aC],[ut.COLOR_DODGE,oC],[ut.DARKEN,lC],[ut.DIFFERENCE,cC],[ut.DIVIDE,uC],[ut.DST,null],[ut.EXCLUSION,fC],[ut.HARD_LIGHT,hC],[ut.HARD_MIX,dC],[ut.HUE,pC],[ut.INVERT,mC],[ut.INVERT_RGB,gC],[ut.LIGHTEN,_C],[ut.LINEAR_BURN,vC],[ut.LINEAR_DODGE,xC],[ut.LINEAR_LIGHT,SC],[ut.LUMINOSITY,MC],[ut.MULTIPLY,yC],[ut.NEGATION,EC],[ut.NORMAL,bC],[ut.OVERLAY,TC],[ut.PIN_LIGHT,wC],[ut.REFLECT,AC],[ut.SATURATION,RC],[ut.SCREEN,CC],[ut.SOFT_LIGHT,PC],[ut.SRC,DC],[ut.SUBTRACT,IC],[ut.VIVID_LIGHT,LC]]),NC=class extends Xr{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new dt(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return UC.get(this.blendFunction)}},Du=class extends Xr{constructor(n,e,{attributes:t=_s.NONE,blendFunction:i=ut.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new NC(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Ts,this._outputColorSpace=ir}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=Ul){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof Sn||e instanceof As||e instanceof xn||e instanceof Yi)&&this[n].dispose()}}},Rp={MEDIUM:2,LARGE:3},FC=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,OC="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",BC=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],zC=class extends Cn{constructor(n=new Ht){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new dt(null),texelSize:new dt(new Ht),scale:new dt(1),kernel:new dt(0)},blending:ti,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:FC,vertexShader:OC}),this.setTexelSize(n.x,n.y),this.kernelSize=Rp.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return BC[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},kC=class extends Yi{constructor({kernelSize:n=Rp.MEDIUM,resolutionScale:e=.5,width:t=lr.AUTO_SIZE,height:i=lr.AUTO_SIZE,resolutionX:r=t,resolutionY:s=i}={}){super("KawaseBlurPass"),this.renderTargetA=new Sn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new lr(this,r,s,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new zC,this._blurMaterial.kernelSize=n,this.copyMaterial=new ax}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,r){const s=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence;let f=e;this.fullscreenMaterial=c;for(let h=0,d=u.length;h<d;++h){const g=(h&1)===0?o:l;c.kernel=u[h],c.inputBuffer=f.texture,n.setRenderTarget(g),n.render(s,a),f=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=f.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(s,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,r=t.height;this.renderTargetA.setSize(i,r),this.renderTargetB.setSize(i,r),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==rn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===Rt&&(this.renderTargetA.texture.colorSpace=Rt,this.renderTargetB.texture.colorSpace=Rt))}static get AUTO_SIZE(){return lr.AUTO_SIZE}},HC=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,GC=class extends Cn{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Ll.replace(/\D+/g,"")},uniforms:{inputBuffer:new dt(null),threshold:new dt(0),smoothing:new dt(1),range:new dt(null)},blending:ti,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:HC,vertexShader:sx}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},VC=class extends Yi{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:r=lr.AUTO_SIZE,height:s=lr.AUTO_SIZE,resolutionX:a=r,resolutionY:o=s}={}){super("LuminancePass"),this.fullscreenMaterial=new GC(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new Sn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new lr(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,r){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==rn&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},WC=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,XC="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",YC=class extends Cn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new dt(null),texelSize:new dt(new Xe)},blending:ti,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:WC,vertexShader:XC})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},qC=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,$C="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",KC=class extends Cn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new dt(null),supportBuffer:new dt(null),texelSize:new dt(new Xe),radius:new dt(.85)},blending:ti,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:qC,vertexShader:$C})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},jC=class extends Yi{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Sn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new YC,this.upsamplingMaterial=new KC,this.resolution=new Xe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const r=e.clone();r.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(r)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,r){const{scene:s,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this;let f=e;this.fullscreenMaterial=o;for(let h=0,d=c.length;h<d;++h){const g=c[h];o.setSize(f.width,f.height),o.inputBuffer=f.texture,n.setRenderTarget(g),n.render(s,a),f=g}this.fullscreenMaterial=l;for(let h=u.length-1;h>=0;--h){const d=u[h];l.setSize(f.width,f.height),l.inputBuffer=f.texture,l.supportBuffer=c[h].texture,n.setRenderTarget(d),n.render(s,a),f=d}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,r=t.height;for(let s=0,a=this.downsamplingMipmaps.length;s<a;++s)i=Math.round(i*.5),r=Math.round(r*.5),this.downsamplingMipmaps[s].setSize(i,r),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(i,r)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const r of i)r.texture.type=t;if(t!==rn)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===Rt)for(const r of i)r.texture.colorSpace=Rt}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},ZC=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,jg=class extends Du{constructor({blendFunction:n=ut.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:r=1,radius:s=.85,levels:a=8,kernelSize:o=Rp.LARGE,resolutionScale:l=.5,width:c=lr.AUTO_SIZE,height:u=lr.AUTO_SIZE,resolutionX:f=c,resolutionY:h=u}={}){super("BloomEffect",ZC,{blendFunction:n,uniforms:new Map([["map",new dt(null)],["intensity",new dt(r)]])}),this.renderTarget=new Sn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new kC({kernelSize:o}),this.luminancePass=new VC({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new jC,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const d=this.resolution=new lr(this,f,h,l);d.addEventListener("change",g=>this.setSize(d.baseWidth,d.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,r=this.luminancePass;r.enabled?(r.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,r.renderTarget):this.blurPass.render(n,r.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===Rt&&(this.renderTarget.texture.colorSpace=Rt))}},JC=`#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`,QC="uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}",eP=class extends Du{constructor({offset:n=new Xe(.001,5e-4),radialModulation:e=!1,modulationOffset:t=.15}={}){super("ChromaticAberrationEffect",JC,{vertexShader:QC,attributes:_s.CONVOLUTION,uniforms:new Map([["offset",new dt(n)],["modulationOffset",new dt(t)]])}),this.radialModulation=e}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}get radialModulation(){return this.defines.has("RADIAL_MODULATION")}set radialModulation(n){n?this.defines.set("RADIAL_MODULATION","1"):this.defines.delete("RADIAL_MODULATION"),this.setChanged()}get modulationOffset(){return this.uniforms.get("modulationOffset").value}set modulationOffset(n){this.uniforms.get("modulationOffset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}},Zg=class extends Yi{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.clearPass=new ox,this.overrideMaterialManager=t===null?null:new Kg(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new Kg(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,r){const s=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=s.background,u=n.shadowMap.autoUpdate,f=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(f),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,s,a):n.render(s,a),a.layers.mask=l,s.background=c,n.shadowMap.autoUpdate=u}},Lo={DEFAULT:0,ESKIL:1},tP=`void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*(1.0+time)));
#ifdef PREMULTIPLY
outputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);
#else
outputColor=vec4(noise,inputColor.a);
#endif
}`,Jg=class extends Du{constructor({blendFunction:n=ut.SCREEN,premultiply:e=!1}={}){super("NoiseEffect",tP,{blendFunction:n}),this.premultiply=e}get premultiply(){return this.defines.has("PREMULTIPLY")}set premultiply(n){this.premultiply!==n&&(n?this.defines.set("PREMULTIPLY","1"):this.defines.delete("PREMULTIPLY"),this.setChanged())}isPremultiplied(){return this.premultiply}setPremultiplied(n){this.premultiply=n}},nP=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,iP=class extends Du{constructor({blendFunction:n,eskil:e=!1,technique:t=e?Lo.ESKIL:Lo.DEFAULT,offset:i=.5,darkness:r=.5}={}){super("VignetteEffect",nP,{blendFunction:n,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new dt(i)],["darkness",new dt(r)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(n){this.technique!==n&&(this.defines.set("VIGNETTE_TECHNIQUE",n.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Lo.ESKIL}set eskil(n){this.technique=n?Lo.ESKIL:Lo.DEFAULT}getTechnique(){return this.technique}setTechnique(n){this.technique=n}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}get darkness(){return this.uniforms.get("darkness").value}set darkness(n){this.uniforms.get("darkness").value=n}getDarkness(){return this.darkness}setDarkness(n){this.darkness=n}},rP=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,sP="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",aP=class extends Cn{constructor(n,e,t,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Ll.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new dt(null),depthBuffer:new dt(null),resolution:new dt(new Xe),texelSize:new dt(new Xe),cameraNear:new dt(.3),cameraFar:new dt(1e3),aspect:new dt(1),time:new dt(0)},blending:ti,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=Ul){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=rP.replace(xt.FRAGMENT_HEAD,n.get(xt.FRAGMENT_HEAD)||"").replace(xt.FRAGMENT_MAIN_UV,n.get(xt.FRAGMENT_MAIN_UV)||"").replace(xt.FRAGMENT_MAIN_IMAGE,n.get(xt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=sP.replace(xt.VERTEX_HEAD,n.get(xt.VERTEX_HEAD)||"").replace(xt.VERTEX_MAIN_SUPPORT,n.get(xt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Zn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return xt}};function Qg(n,e,t){for(const i of e){const r="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(s,r))}}function oP(n,e,t){let i=e.getFragmentShader(),r=e.getVertexShader();const s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&_s.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get(xt.FRAGMENT_HEAD)||"",u=l.get(xt.FRAGMENT_MAIN_UV)||"",f=l.get(xt.FRAGMENT_MAIN_IMAGE)||"",h=l.get(xt.VERTEX_HEAD)||"",d=l.get(xt.VERTEX_MAIN_SUPPORT)||"";const g=new Set,_=new Set;if(a&&(u+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const v=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);d+=`	${n}MainSupport(`,d+=v?`vUv);
`:`);
`;for(const y of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const x of y[1].split(/\s*,\s*/))t.varyings.add(x),g.add(x),_.add(x);for(const y of r.matchAll(o))_.add(y[1])}for(const v of i.matchAll(o))_.add(v[1]);for(const v of e.defines.keys())_.add(v.replace(/\([\w\s,]*\)/g,""));for(const v of e.uniforms.keys())_.add(v);_.delete("while"),_.delete("for"),_.delete("if"),e.uniforms.forEach((v,y)=>t.uniforms.set(n+y.charAt(0).toUpperCase()+y.slice(1),v)),e.defines.forEach((v,y)=>t.defines.set(n+y.charAt(0).toUpperCase()+y.slice(1),v));const p=new Map([["fragment",i],["vertex",r]]);Qg(n,_,t.defines),Qg(n,_,p),i=p.get("fragment"),r=p.get("vertex");const m=e.blendMode;if(t.blendModes.set(m.blendFunction,m),s){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(f+=e.inputColorSpace===Rt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==ir?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const v=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;f+=`${n}MainImage(color0, UV, `,(t.attributes&_s.DEPTH)!==0&&v.test(i)&&(f+="depth, ",t.readDepth=!0),f+=`color1);
	`;const y=n+"BlendOpacity";t.uniforms.set(y,m.opacity),f+=`color0 = blend${m.blendFunction}(color0, color1, ${y});

	`,c+=`uniform float ${y};

`}if(c+=i+`
`,r!==null&&(h+=r+`
`),l.set(xt.FRAGMENT_HEAD,c),l.set(xt.FRAGMENT_MAIN_UV,u),l.set(xt.FRAGMENT_MAIN_IMAGE,f),l.set(xt.VERTEX_HEAD,h),l.set(xt.VERTEX_MAIN_SUPPORT,d),e.extensions!==null)for(const v of e.extensions)t.extensions.add(v)}}var e_=class extends Yi{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new aP(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new tC;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===ut.DST)n.attributes|=a.getAttributes()&_s.DEPTH;else{if((n.attributes&a.getAttributes()&_s.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);oP("e"+e++,a,n)}let t=n.shaderParts.get(xt.FRAGMENT_HEAD),i=n.shaderParts.get(xt.FRAGMENT_MAIN_IMAGE),r=n.shaderParts.get(xt.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of n.blendModes.values())t+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;(n.attributes&_s.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===Rt&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(xt.FRAGMENT_HEAD,t),n.shaderParts.set(xt.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(xt.FRAGMENT_MAIN_UV,r);for(const[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=Ul){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,r){for(const s of this.effects)s.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==rn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}};const lP=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},cP={ref:"canvasContainer",class:"scene-container"},uP={__name:"SpaceScene",setup(n){$s.registerPlugin(ot);let e,t,i,r,s,a,o;const l=()=>{a=$s.timeline({scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:1.5}}),a.to(t.position,{x:10,y:5,z:32,ease:"none",duration:20},0),a.to(t.position,{x:45,y:25,z:10,ease:"none",duration:30},20),a.to(t.position,{x:18,y:11,z:-18,ease:"sine.inOut",duration:40},50),a.to(t.rotation,{x:-.2,y:.5,ease:"sine.inOut",duration:40},50),a.to(t.position,{x:-5,y:12,z:18,ease:"sine.inOut",duration:30},90),a.to(t.position,{x:-28.5,y:15.2,z:-58.5,ease:"sine.in",duration:40},120),a.to(t.rotation,{x:-Math.PI/8,y:Math.PI/4,ease:"sine.inOut",duration:40},120)};Ud(()=>{u(),g(),_(),A(),S(),m(),y(),h(),P(),V(),l(),k()});const c=qx(null),u=()=>{e=new ud,t=new Zn(55,window.innerWidth/window.innerHeight,.1,2e3),t.position.set(0,10,30);const L=c.value;i=new qR({canvas:L,antialias:!0,alpha:!0,powerPreference:"high-performance"}),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.shadowMap.enabled=!0,i.toneMapping=hp,i.toneMappingExposure=1.2,s=new $g(i),s.addPass(new Zg(e,t));const X=new jg({intensity:2.5,luminanceThreshold:.1,luminanceSmoothing:.9,mipmapBlur:!0}),K=new Jg({premultiply:!0});K.blendMode.opacity.value=.03,s.addPass(new e_(t,X,K))};let f;const h=()=>{o=new Zb(16777215,.05),e.add(o),f=new jb(16777215,4.5),f.position.set(30,40,30),f.castShadow=!0;const L=new qb(28896,100,100,.4,1);L.position.set(-30,20,-60),e.add(L),f.shadow.mapSize.width=2048,f.shadow.mapSize.height=2048,e.add(f),s=new $g(i),s.addPass(new Zg(e,t));const X=new jg({intensity:3,luminanceThreshold:.1,luminanceSmoothing:.9,mipmapBlur:!0}),K=new iP({offset:.3,darkness:.6}),D=new eP({offset:new Xe(.001,.001)}),le=new Jg({premultiply:!0});le.blendMode.opacity.value=.02,s.addPass(new e_(t,X,D,K,le))};let d;const g=()=>{const L=new Rn,X=8e3,K=new Float32Array(X*3),D=new Float32Array(X*3);for(let ce=0;ce<X*3;ce++){K[ce]=(Math.random()-.5)*400;const Ne=Math.random()>.8;D[ce]=Ne?.7:.9,D[ce+1]=Ne?.8:.95,D[ce+2]=1}L.setAttribute("position",new wn(K,3)),L.setAttribute("color",new wn(D,3));const le=new fd({size:.12,vertexColors:!0,transparent:!0,opacity:.8,sizeAttenuation:!0});d=new mg(L,le),e.add(d)},_=()=>{const X=new fs;for(let K=0;K<50;K++){const D=new Tr(Math.random()*20+10,8,8),le=new Xs({color:K%2===0?736657:4456703,transparent:!0,opacity:.05,side:Jt}),ce=new Gt(D,le);ce.position.set((Math.random()-.5)*400,(Math.random()-.5)*200,(Math.random()-.5)*400),X.add(ce)}e.add(X)};let p;const m=()=>{p=new fs;const L=new Ba({color:8947848,metalness:1,roughness:.1}),X=new Gt(new fu(.5,.5,6,12),L);X.rotation.z=Math.PI/2,p.add(X);for(let K=0;K<2;K++){const D=new Gt(new hu(2,.1,8,32),L);D.position.x=(K-.5)*4,D.rotation.y=Math.PI/2,p.add(D)}p.position.set(10,5,-10),p.scale.set(.5,.5,.5),e.add(p)};let v;const y=()=>{const L=new Tp(.1,0),X=new Ba({color:16777215,metalness:1,roughness:0,transparent:!0,opacity:.8});v=new Cb(L,X,500);const K=new It;for(let D=0;D<500;D++)K.setPosition((Math.random()-.5)*100,(Math.random()-.5)*50,(Math.random()-.5)*100),v.setMatrixAt(D,K);e.add(v)};let x;const b=new Xb,A=()=>{const L=new Tr(15,256,256),X=new zb({color:8947848,roughness:.9,metalness:.1,bumpScale:.05,displacementScale:.2,displacementBias:-.1,clearcoat:.1,clearcoatRoughness:.8});b.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg",K=>{X.map=K,X.bumpMap=K,X.displacementMap=K,X.needsUpdate=!0}),x=new Gt(L,X),x.position.set(20,10,-30),x.castShadow=!0,x.receiveShadow=!0,e.add(x)};let T;const S=()=>{const L=new Tr(5,64,64),X=new Ba({emissive:2245887,emissiveIntensity:.2});b.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",Ne=>{X.map=Ne,X.needsUpdate=!0}),T=new Gt(L,X),T.position.set(0,-5,5),T.scale.set(4,4,4),e.add(T);const K=new Tr(5.1,64,64),D=new Xs({color:43775,transparent:!0,opacity:.2,side:Jt});T.add(new Gt(K,D));const le=new Tr(5.5,64,64),ce=new Xs({color:17663,transparent:!0,opacity:.08,side:Jt});T.add(new Gt(le,ce))};let E,U;const P=()=>{E=new fs;const L=new Ba({color:3355443,metalness:.8,roughness:.2});for(let le=0;le<3;le++){const ce=new Gt(new fu(1.2,1.3,.8,8),L);ce.position.x=(le-1)*3,ce.castShadow=!0,ce.receiveShadow=!0,E.add(ce)}const X=new Tr(.2,8,8),K=new Xs({color:62207}),D=new Gt(X,K);D.position.set(0,.5,0),E.add(D),U=new yg(62207,2,12),U.position.set(0,1,0),E.add(U),E.position.set(0,-5.5,12),e.add(E)};let N,H,W;const V=()=>{N=new fs;const L=new Tr(2.5,32,32),X=new Xs({color:0}),K=new Gt(L,X);N.add(K);const D=12e3,le=new Rn,ce=new Float32Array(D*3),Ne=new Float32Array(D*3);for(let de=0;de<D;de++){const ze=Math.random()*Math.PI*2,Le=5+Math.random()*4,Ie=de*3;ce[Ie]=Math.cos(ze)*Le,ce[Ie+1]=(Math.random()-.5)*.5,ce[Ie+2]=Math.sin(ze)*Le;const I=(Le-5)/4;Ne[Ie]=1,Ne[Ie+1]=.5+(1-I)*.5,Ne[Ie+2]=(1-I)*.4}le.setAttribute("position",new wn(ce,3)),le.setAttribute("color",new wn(Ne,3));const Ye=new fd({size:.05,vertexColors:!0,transparent:!0,opacity:.8,blending:au});H=new mg(le,Ye),N.add(H);const $e=new hu(6.2,.4,2,100),ie=new Ba({color:16763904,emissive:16750848,emissiveIntensity:10,transparent:!0,opacity:.4,side:ai});W=new Gt($e,ie),W.rotation.y=Math.PI/2,N.add(W);const ue=new yg(16753920,80,50);N.add(ue),N.position.set(-30,15,-60),e.add(N)},k=()=>{r=requestAnimationFrame(k);const L=performance.now()*.001;d&&(d.rotation.y+=1e-4),x&&(x.rotation.y+=2e-4),T&&(T.rotation.y+=5e-4),p&&(p.rotation.x+=.001,p.rotation.y+=.002),v&&(v.rotation.y+=5e-4),H&&(H.rotation.y+=.04,W.rotation.z-=.015);const X=e.children.find(K=>{var D,le;return((D=K.geometry)==null?void 0:D.type)==="PlaneGeometry"&&((le=K.material)==null?void 0:le.blending)===au});X&&X.lookAt(t.position),U&&(U.intensity=2+Math.sin(L*10)*.5+Math.random()*.2),s?s.render():i.render(e,t)};return vu(()=>{r&&cancelAnimationFrame(r),i&&(i.dispose(),i.forceContextLoss()),s&&s.dispose()}),(L,X)=>($_(),K_("div",cP,[Od("canvas",{ref_key:"canvasRef",ref:c,id:"experience-canvas"},null,512)],512))}},fP=lP(uP,[["__scopeId","data-v-4ccf8c46"]]),hP={id:"app-container"},dP={__name:"App",setup(n){$s.registerPlugin(ot);let e;return Ud(()=>{e=new AE({duration:1.2,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),smooth:!0});function t(r){e.raf(r),requestAnimationFrame(t)}requestAnimationFrame(t),e.on("scroll",ot.update),document.querySelectorAll(".glass-card").forEach((r,s)=>{$s.from(r,{scrollTrigger:{trigger:r,start:"top 85%",toggleActions:"play none none reverse"},y:100,opacity:0,duration:1,ease:"expo.out",delay:s*.2})}),$s.utils.toArray(".hero-section h1").forEach(r=>{$s.from(r,{scrollTrigger:{trigger:r,start:"top 80%"},y:50,opacity:0,duration:1.5,ease:"power4.out"})})}),vu(()=>{e&&e.destroy()}),(t,i)=>($_(),K_("div",hP,[i[0]||(i[0]=iM('<header class="ue-nav"><div class="ue-logo"> FLVA <span>SPACE</span></div></header><main class="page-wrapper"><section class="section hero-section"><h1>BEYOND ORBIT</h1><p>Experience the next generation of space exploration powered by real-time orbital simulation and high-fidelity physics.</p></section><section class="section"><div class="feature-grid"><div class="glass-card feature-card"><span class="card-tag">Rendering</span><h3>Lumen Orbit</h3><p>Fully dynamic global illumination that reacts instantly to solar flares and atmospheric changes.</p><a href="https://dev.epicgames.com/documentation/en-us/unreal-engine/lumen-global-illumination-and-reflections-in-unreal-engine" class="card-cta">Explore Technology</a></div><div class="glass-card feature-card"><span class="card-tag">Physics</span><h3>Nanite Debris</h3><p>Render millions of crystalline fragments in real-time with pixel-perfect detail and zero lag.</p><a href="https://dev.epicgames.com/documentation/en-us/unreal-engine/nanite-in-unreal-engine" class="card-cta">View Documentation</a></div><div class="glass-card feature-card"><span class="card-tag">Production</span><h3>Virtual Horizon</h3><p>Seamlessly blend physical sets with digital orbital environments for unparalleled immersion.</p><a href="https://dev.epicgames.com/community/learning/tutorials/r6Lx/unreal-engine-black-hole-material" class="card-cta">Case Studies</a></div></div></section><section class="section hero-section"><span class="card-tag">Mission Phase 02</span><h1>LUNAR EXPLORATION</h1><p>Descending towards the Shackleton Crater. Establishing permanent presence on the lunar south pole.</p></section><section class="section hero-section"><span class="card-tag">Mission Phase 03</span><h1>ORBITAL INFRASTRUCTURE</h1><p>Deploying modular life support and defense arrays to secure the frontier for future pioneers.</p></section><section class="section hero-section"><span class="card-tag">Critical Point</span><h1>EVENT HORIZON</h1><p>You are approaching the point of no return. Gravity becomes infinite. Time stands still.</p><a href="https://sinapsediaria.com/en/what-is-the-event-horizon-the-invisible-boundary-of-a-black-hole/" class="download-btn">ENTER SINGULARITY</a></section></main>',2)),Lr(fP)]))}};BM(dP).mount("#app");
