import{C as e,Dn as t,En as n,J as r,Q as i,V as a,_n as o,b as s,dt as c,in as l,it as u,kn as d,ln as f,q as p,r as m,rn as ee,tt as te,u as ne}from"./three.core-C2a4Y__C.js";import{a as re,s as ie}from"./ids-Dvm0b01i.js";import{n as h}from"./contracts-BXtCHWYh.js";import{n as ae}from"./registry-ChDgwFTW.js";import{_ as oe,a as se,c as ce,f as le,g as ue,h as de,m as fe,n as pe,o as me,p as he,s as ge,t as _e,u as ve,v as ye,y as g}from"./attributes-C2UKxNuT.js";import{r as be,t as xe}from"./plate-CAPHcbUo.js";var Se=Object.freeze({course:7.13,split:2.71,deep:31.7,jitter:3.3,doodle:12.9,island:11.1,islandTone:3.7,mark:5.31});function Ce(e){let t=Object.values(e).filter(e=>typeof e==`number`);return Object.entries(e).filter(([e,n])=>t.indexOf(+e)===-1).map(([e,t])=>t)}function we(e,t=`|`){return e.map(e=>Ue(e)).join(t)}function Te(e,t){return typeof t==`bigint`?t.toString():t}var Ee=class{constructor(e){this._getter=e,this._value=void 0}get value(){let e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}};function De(e){return new Ee(e)}function Oe(e){return e==null}function ke(e){let t=+!!e.startsWith(`^`),n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}function Ae(e,t){let n=e/t,r=Math.round(n),i=4*2**-52*Math.max(Math.abs(n),1);return Math.abs(n-r)<i?0:n-r}function _(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function je(e){let t=Object.getOwnPropertyDescriptor(e,`shape`);return t?.get?t.get.raw:t?.value}function v(e){return je(e._zod.def)??e._zod.def.shape}function Me(e,t,n){Object.defineProperty(e,t,{get(){let e=n();return _(this,t,e),e},enumerable:!0,configurable:!0})}function Ne(e,t,n){t in e?_(e,t,n):e[t]=n}function y(e,t,n,r){let i=v(t);for(let a of n){let n=Object.getOwnPropertyDescriptor(i,a);n.enumerable&&(n.get?Me(e,a,()=>{let e=t._zod.def.shape[a];return r?r(e,a):e}):Ne(e,a,r?r(n.value,a):n.value))}}function Pe(e,t){for(let n of Reflect.ownKeys(t)){let r=Object.getOwnPropertyDescriptor(t,n);r.enumerable&&(r.get?Me(e,n,()=>t[n]):Ne(e,n,r.value))}}function b(...e){let t={};for(let n of e){let e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function Fe(e){return JSON.stringify(e)}function Ie(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}var Le=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function Re(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var ze=De(()=>{if(N.jitless||typeof navigator<`u`&&navigator?.userAgent?.includes(`Cloudflare`))return!1;try{return Function(``),!0}catch{return!1}});function x(e){if(Re(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return Re(n)!==!1&&Object.prototype.hasOwnProperty.call(n,`isPrototypeOf`)!==!1}function Be(e){return x(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}var Ve=new Set([`string`,`number`,`symbol`]);function He(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function S(e,t,n){let r=new e._zod.constr(t??e._zod.def);return(!t||n?.parent)&&(r._zod.parent=e),r}function C(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}function Ue(e){return typeof e==`bigint`?e.toString()+`n`:typeof e==`string`?`"${e}"`:`${e}`}function We(e){return Object.keys(e).filter(t=>e[t]._zod.optin!==void 0&&e[t]._zod.optout===`optional`)}var Ge={safeint:[-(2**53-1),2**53-1],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},Ke={int64:[BigInt(`-9223372036854775808`),BigInt(`9223372036854775807`)],uint64:[BigInt(0),BigInt(`18446744073709551615`)]};function qe(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.pick() cannot be used on object schemas containing refinements`);let i={};return y(i,e,Je(e,t)),S(e,b(n,{shape:i,checks:[]}))}function Je(e,t){let n=v(e),r=[];for(let e of Reflect.ownKeys(t)){if(!Object.getOwnPropertyDescriptor(n,e)?.enumerable)throw Error(`Unrecognized key: "${String(e)}"`);t[e]&&r.push(e)}return r}function Ye(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.omit() cannot be used on object schemas containing refinements`);let i=new Set(Je(e,t)),a={};return y(a,e,Reflect.ownKeys(v(e)).filter(e=>!i.has(e))),S(e,b(n,{shape:a,checks:[]}))}function Xe(e,t){if(!x(t))throw Error(`Invalid input to extend: expected a plain object`);let n=e._zod.def.checks;if(n&&n.length>0){let n=v(e);for(let e of Reflect.ownKeys(t))if(Object.getOwnPropertyDescriptor(n,e)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return S(e,b(e._zod.def,{shape:Ze(e,t)}))}function Ze(e,t){let n={};return y(n,e,Reflect.ownKeys(v(e))),Pe(n,t),n}function Qe(e,t){if(!x(t))throw Error(`Invalid input to safeExtend: expected a plain object`);return S(e,b(e._zod.def,{shape:Ze(e,t)}))}function $e(e,t){if(!t?._zod?.def)throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(e._zod.def.checks?.length)throw Error(`.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`);let n={};return y(n,e,Reflect.ownKeys(v(e))),y(n,t,Reflect.ownKeys(v(t))),S(e,b(e._zod.def,{shape:n,get catchall(){return t._zod.def.catchall},checks:t._zod.def.checks??[]}))}function et(e,t,n,r=`partial`){let i=t._zod.def.checks;if(i&&i.length>0)throw Error(`.${r}() cannot be used on object schemas containing refinements`);let a=n?new Set(Je(t,n)):void 0,o={};return y(o,t,Reflect.ownKeys(v(t)),e&&((t,n)=>a&&!a.has(n)?t:new e({type:`optional`,innerType:t}))),S(t,b(t._zod.def,{shape:o,checks:[]}))}function tt(e,t,n){let r=n?new Set(Je(t,n)):void 0,i={};return y(i,t,Reflect.ownKeys(v(t)),(t,n)=>r&&!r.has(n)?t:new e({type:`nonoptional`,innerType:t})),S(t,b(t._zod.def,{shape:i}))}function w(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function nt(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function rt(e,t){return t.map(t=>{var n;return(n=t).path??(n.path=[]),t.path.unshift(e),t})}function T(e){return typeof e==`string`?e:e?.message}function it(e){let t=[];for(let n of e??[]){let e=n._zod.def;if(!/_(length|size)$|_equals$/.test(e.check))break;let r=e.maximum??e.length??e.size;r>=0&&t.push([r,n])}return t}function at(e,t,n){var r;for(let i=t;i<e.length;i++)(r=e[i]).schema??(r.schema=n)}function E(e,t,n){var r;let i=e.inst?._zod?.traits;i?.has(`$ZodType`)&&(i.has(`$ZodCheck`)?(r=e).schema??(r.schema=e.inst):e.schema=e.inst);let a=e.schema===e.inst?void 0:e.schema?._zod.def?.error,o=e.message?e.message:T(e.inst?._zod.def?.error?.(e))??T(a?.(e))??T(t?.error?.(e))??T(n.customError?.(e))??T(n.localeError?.(e))??`Invalid input`,s={};for(let t of Object.keys(e))t!==`inst`&&t!==`schema`&&t!==`continue`&&t!==`input`&&t!==`__proto__`&&(s[t]=e[t]);return s.path??=[],s.message=o,t?.reportInput&&(s.input=e.input),s}var ot=/[\uD800-\uDBFF]/;function st(e){let t=e.length;if(!ot.test(e))return t;let n=t;for(let r=0;r<t-1;r++)(e.charCodeAt(r)&64512)==55296&&(e.charCodeAt(r+1)&64512)==56320&&(n--,r++);return n}function ct(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function lt(e){let t=typeof e;switch(t){case`number`:return Number.isNaN(e)?`nan`:`number`;case`object`:{if(e===null)return`null`;if(Array.isArray(e))return`array`;let t=e;if(t&&Object.getPrototypeOf(t)!==Object.prototype&&`constructor`in t&&t.constructor)return t.constructor.name}}return t}function D(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}function ut(e,t){for(let n in t){let r=Object.getOwnPropertyDescriptor(t,n);r.get?Object.defineProperty(e,n,{...r,enumerable:!1}):pt(e,n,r.value)}}function O(e,t,n,r=!0){return Object.defineProperty(e,t,{configurable:!0,writable:!0,enumerable:r,value:n}),n}function dt(e,t,n){return O(e,t,n,!1)}function ft(e,t){for(let n in e){let r=e[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!0,get(){return O(this,n,r(this))},set(e){O(this,n,e)}})}return t}function pt(e,t,n){Object.defineProperty(e,t,{configurable:!0,get(){return this==null?n:O(this,t,n.bind(this))},set(e){O(this,t,e)}})}function mt(e,t){let n=Object.getPrototypeOf(e);return t in n?void 0:n}var ht,k=!1,gt={configurable:!0,get(){k=!0}};function A(e,t,n){let r=Object.getPrototypeOf(e._zod);t in r&&ht!==e._zod?ht=void 0:(ht=e._zod,Object.defineProperty(r,t,{configurable:!0,get(){Object.defineProperty(this,t,gt);let e=k;k=!1;try{let r=n(this);return k?delete this[t]:Object.defineProperty(this,t,{configurable:!0,writable:!0,value:r}),k||=e,r}catch(n){throw delete this[t],k||=e,n}},set(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}}))}function _t(e,t,n,r){let i=mt(e,t);i&&Object.defineProperty(i,t,{configurable:!0,get(){let e={configurable:!0,writable:!0,enumerable:r,value:void 0};return Object.defineProperty(this,t,e),e.value=n(this),Object.defineProperty(this,t,e),e.value},set(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,enumerable:r,value:e})}})}var vt=`~constantCatch`;function yt(e){let t=()=>e;return t[vt]=!0,t}var bt,xt={value:void 0,enumerable:!1},St=`captureStackTrace`in Error?Error:null;function Ct(e){let t=St;if(t){let n=t.stackTraceLimit;if(typeof n==`number`){try{t.stackTraceLimit=0}catch{return St=null,new e}try{return new e}finally{t.stackTraceLimit=n}}}return new e}function j(e,t,n,r){let i={};function a(e){this.def=e,this.constr=d,this.traits=new Set}a.prototype=i;let o=n,s=o&&new WeakSet;function c(n,r){if(!n._zod){xt.value=new a(r);try{Object.defineProperty(n,"_zod",xt)}finally{xt.value=void 0}}else if(n._zod.traits.has(e))return;if(n._zod.traits.add(e),t(n,r),s){let e=Object.getPrototypeOf(n),t=n._zod.constr.prototype,r=e;for(;r&&r!==t;)r=Object.getPrototypeOf(r);let i=r??e;s.has(i)||(s.add(i),ut(i,o))}let i=d.prototype;for(let e in i)Object.prototype.hasOwnProperty.call(i,e)&&(e in n||(n[e]=i[e].bind(n)))}let l=r?.Parent??Object;class u extends l{}Object.defineProperty(u,"name",{value:e});function d(e){let t=r?.Parent?Ct(u):this;c(t,e);let n=t._zod.deferred;if(n){for(let e of n)e();t._zod.deferred=void 0}let i=globalThis.__zod_globalConfig?.postProcessor;return i&&i(t),t}return Object.defineProperty(d,"init",{value:c}),Object.defineProperty(d,Symbol.hasInstance,{value:t=>r?.Parent&&t instanceof r.Parent?!0:t?._zod?.traits?.has(e)}),Object.defineProperty(d,"name",{value:e}),d}var M=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},wt=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`ZodEncodeError`}};(bt=globalThis).__zod_globalConfig??(bt.__zod_globalConfig={});var N=globalThis.__zod_globalConfig;function P(e){return e&&Object.assign(N,e),N}function Tt(){let e=this._zod;return e.message??=JSON.stringify(e.def,Te,2),e.message}function Et(e){this._zod.message=e}var Dt={get:Tt,set:Et,enumerable:!0,configurable:!0},Ot={value:void 0,enumerable:!1},kt=new WeakSet([Object.prototype,Error.prototype]),At=j(`$ZodError`,(e,t)=>{e.name=`$ZodError`,Ot.value=t,Object.defineProperty(e,"issues",Ot),Ot.value=void 0,Object.defineProperty(e,"message",Dt);let n=Object.getPrototypeOf(e);kt.has(n)||(kt.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){let e=()=>this.message;return Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0})}}))});function jt(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)||(t===`__proto__`?Object.defineProperty(e,t,{value:n(),writable:!0,enumerable:!0,configurable:!0}):e[t]=n()),e[t]}function Mt(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?jt(n,i.path[0],()=>[]).push(t(i)):r.push(t(i));return{formErrors:r,fieldErrors:n}}function Nt(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i],o=i===e.length-1;if(n===`_errors`){o&&r._errors.push(t(a)),i++;continue}Object.prototype.hasOwnProperty.call(r,n)||Object.defineProperty(r,n,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});let s=r[n];o&&s._errors.push(t(a)),r=s,i++}}}};return r(e),n}function Pt(e){let t=[],n=e.map(e=>typeof e==`object`?e.key:e);for(let e of n)typeof e==`number`?t.push(`[${e}]`):typeof e==`symbol`?t.push(`[${JSON.stringify(String(e))}]`):/[^\w$]/.test(e)?t.push(`[${JSON.stringify(e)}]`):(t.length&&t.push(`.`),t.push(e));return t.join(``)}function Ft(e){let t=[],n=[...e.issues].sort((e,t)=>(e.path??[]).length-(t.path??[]).length);for(let e of n)t.push(`✖ ${e.message}`),e.path?.length&&t.push(`  → at ${Pt(e.path)}`);return t.join(`
`)}function It(e,t){return{callee:t?.callee??e,Err:t?.Err}}var Lt=e=>{let t=(n,r,i,a)=>{let o=i?{...i,async:!1}:{async:!1},s=n._zod.run({value:r,issues:[]},o);if(s instanceof Promise)throw new M;if(s.issues.length){let n=new((a?.Err)??e)(s.issues.map(e=>E(e,o,P())));throw Le(n,a?.callee??t),n}return s.value};return t},Rt=e=>{let t=async(n,r,i,a)=>{let o=i?{...i,async:!0}:{async:!0},s=n._zod.run({value:r,issues:[]},o);if(s instanceof Promise&&(s=await s),s.issues.length){let n=new((a?.Err)??e)(s.issues.map(e=>E(e,o,P())));throw Le(n,a?.callee??t),n}return s.value};return t},zt=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new M;return a.issues.length?Bt(e,a.issues,i):{success:!0,data:a.value}};function Bt(e,t,n){let r;return{success:!1,get error(){return r||(r=new e(t.map(e=>E(e,n,P()))),t=void 0,n=void 0),r},set error(e){r=e,t=void 0,n=void 0}}}var Vt=e=>async(t,n,r)=>{let i=r?{...r,async:!0}:{async:!0},a=t._zod.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?Bt(e,a.issues,i):{success:!0,data:a.value}},Ht=Symbol.for(`zod.compile.invalid`),Ut=Symbol.for(`zod.compile.fallback`),Wt=((e,t,n)=>{let r=e._zod.bag.validator;if(r!==void 0){if(r(t)!==Ht)return!0;if(r.definite===!0&&n===void 0)return!1}return Gt(e,t,n)});function Gt(e,t,n){let r=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},i=e._zod.bag.fallbackRun,a;if(i?(r[Ut]=!0,a=i({value:t,issues:[]},r)):a=e._zod.run({value:t,issues:[]},r),a instanceof Promise)throw new M;return a.issues.length===0}var Kt=async(e,t,n)=>{let r=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0},i=e._zod.run({value:t,issues:[]},r);return i instanceof Promise&&(i=await i),i.issues.length===0},qt=e=>{let t=Lt(e),n=(e,r,i,a)=>{let o=i?{...i,direction:`backward`}:{direction:`backward`};return t(e,r,o,It(n,a))};return n},Jt=e=>{let t=Lt(e),n=(e,r,i,a)=>t(e,r,i,It(n,a));return n},Yt=e=>{let t=Rt(e),n=async(e,r,i,a)=>{let o=i?{...i,direction:`backward`}:{direction:`backward`};return await t(e,r,o,It(n,a))};return n},Xt=e=>{let t=Rt(e),n=async(e,r,i,a)=>await t(e,r,i,It(n,a));return n},Zt=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return zt(e)(t,n,i)},Qt=e=>(t,n,r)=>zt(e)(t,n,r),$t=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Vt(e)(t,n,i)},en=e=>async(t,n,r)=>Vt(e)(t,n,r),tn=/^[cC][0-9a-z]{6,}$/,nn=/^[0-9a-z]+$/,rn=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,an=/^[0-9a-vA-V]{20}$/,on=/^[A-Za-z0-9]{27}$/,sn=/^[a-zA-Z0-9_-]{21}$/;function cn(e){return RegExp(`^[a-zA-Z0-9_-]{${e}}$`)}var ln=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,un=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,dn=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,fn=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,pn=`^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;function mn(){return new RegExp(pn,`u`)}var hn=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,gn=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,_n=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,vn=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,yn=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,bn=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,xn=/^https?$/,Sn=/^\+[1-9]\d{6,14}$/,Cn=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;function wn(e){return RegExp(`^${e}$`)}var Tn=wn(Cn);function En(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:e.seconds?`${t}:[0-5]\\d(?:\\.\\d+)?`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Dn(e){return RegExp(`^${En(e)}$`)}function On(e){let t=[`Z`];e.offset&&t.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let n=`${En({precision:e.precision,seconds:!0})}(?:${t.join(`|`)})`,r=e.local?`${n}|${En({precision:e.precision})}`:n;return RegExp(`^${Cn}T(?:${r})$`)}var kn=/^[\s\S]{0,}$/,An=/^-?\d+(?:\.\d+)?$/,jn=/^[^A-Z]*$/,Mn=/^[^a-z]*$/,F=j(`$ZodCheck`,(e,t)=>{var n;e._zod??={},e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),Nn=e=>{let t=e.value;return!Oe(t)&&t.length!==void 0},Pn={number:`number`,bigint:`bigint`,object:`date`},Fn=j(`$ZodCheckLessThan`,(e,t)=>{F.init(e,t);let n=Pn[typeof t.value];e._zod.check=r=>{(t.inclusive?r.value<=t.value:r.value<t.value)||r.issues.push({origin:Pn[typeof r.value]??n,code:`too_big`,maximum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),In=j(`$ZodCheckGreaterThan`,(e,t)=>{F.init(e,t);let n=Pn[typeof t.value];e._zod.check=r=>{(t.inclusive?r.value>=t.value:r.value>t.value)||r.issues.push({origin:Pn[typeof r.value]??n,code:`too_small`,minimum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),Ln=j(`$ZodCheckMultipleOf`,(e,t)=>{F.init(e,t),e._zod.check=n=>{if(typeof n.value!=typeof t.value)throw Error(`Cannot mix number and bigint in multiple_of check.`);(typeof n.value==`bigint`?t.value!==BigInt(0)&&n.value%t.value===BigInt(0):Ae(n.value,t.value)===0)||n.issues.push({origin:typeof n.value,code:`not_multiple_of`,divisor:t.value,input:n.value,inst:e,continue:!t.abort})}}),Rn=j(`$ZodCheckNumberFormat`,(e,t)=>{F.init(e,t),t.format=t.format||`float64`;let n=t.format?.includes(`int`),r=n?`int`:`number`,[i,a]=Ge[t.format];e._zod.check=o=>{let s=o.value;if(n){if(!Number.isInteger(s)){o.issues.push({expected:r,format:t.format,code:`invalid_type`,continue:!1,input:s,inst:e});return}if(!Number.isSafeInteger(s)){s>0?o.issues.push({input:s,code:`too_big`,maximum:2**53-1,note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort}):o.issues.push({input:s,code:`too_small`,minimum:-(2**53-1),note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort});return}}s<i&&o.issues.push({origin:`number`,input:s,code:`too_small`,minimum:i,inclusive:!0,inst:e,continue:!t.abort}),s>a&&o.issues.push({origin:`number`,input:s,code:`too_big`,maximum:a,inclusive:!0,inst:e,continue:!t.abort})}}),zn=j(`$ZodCheckMaxLength`,(e,t)=>{var n;F.init(e,t),(n=e._zod.def).when??(n.when=Nn),e._zod.check=n=>{let r=n.value,i=r.length;if((typeof r==`string`&&i>t.maximum?st(r):i)<=t.maximum)return;let a=ct(r);n.issues.push({origin:a,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),Bn=j(`$ZodCheckMinLength`,(e,t)=>{var n;F.init(e,t),(n=e._zod.def).when??(n.when=Nn),e._zod.check=n=>{let r=n.value,i=r.length;if((typeof r==`string`&&i>=t.minimum&&i<t.minimum*2?st(r):i)>=t.minimum)return;let a=ct(r);n.issues.push({origin:a,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),Vn=j(`$ZodCheckLengthEquals`,(e,t)=>{var n;F.init(e,t),(n=e._zod.def).when??(n.when=Nn),e._zod.check=n=>{let r=n.value,i=r.length,a=typeof r==`string`&&i>=t.length&&i<=t.length*2?st(r):i;if(a===t.length)return;let o=ct(r),s=a>t.length;n.issues.push({origin:o,...s?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),Hn=j(`$ZodCheckStringFormat`,(e,t)=>{var n,r;F.init(e,t),t.pattern?(n=e._zod).check??(n.check=n=>{t.pattern.lastIndex=0,t.pattern.test(n.value)||n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(r=e._zod).check??(r.check=()=>{})}),Un=j(`$ZodCheckRegex`,(e,t)=>{Hn.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,t.pattern.test(n.value)||n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),Wn=j(`$ZodCheckLowerCase`,(e,t)=>{t.pattern??=jn,Hn.init(e,t)}),Gn=j(`$ZodCheckUpperCase`,(e,t)=>{t.pattern??=Mn,Hn.init(e,t)}),Kn=j(`$ZodCheckIncludes`,(e,t)=>{F.init(e,t);let n=He(t.includes);t.pattern=new RegExp(typeof t.position==`number`?`^.{${t.position},}${n}`:n),e._zod.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),qn=j(`$ZodCheckStartsWith`,(e,t)=>{F.init(e,t);let n=RegExp(`^${He(t.prefix)}.*`);t.pattern??=n,e._zod.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),Jn=j(`$ZodCheckEndsWith`,(e,t)=>{F.init(e,t);let n=RegExp(`.*${He(t.suffix)}$`);t.pattern??=n,e._zod.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),Yn=j(`$ZodCheckOverwrite`,(e,t)=>{F.init(e,t),e._zod.check=e=>{e.value=t.tx(e.value)}}),Xn=class{constructor(e=[],t={}){this.content=[],this.indent=0,this.args=e,this.closed=t}indented(e){this.indent+=1;try{e(this)}finally{--this.indent}}write(e){if(typeof e==`function`){e(this,{execution:`sync`}),e(this,{execution:`async`});return}let t=e.split(`
`).filter(e=>e),n=Math.min(...t.map(e=>e.length-e.trimStart().length)),r=t.map(e=>e.slice(n)).map(e=>` `.repeat(this.indent*2)+e);for(let e of r)this.content.push(e)}compile(){let e=Function,t=this?.content??[``];return new e(...Object.keys(this.closed),`return function (${this.args.join(`, `)}) {\n${t.join(`
`)}\n};`)(...Object.values(this.closed))}},Zn={major:4,minor:6,patch:7},I=j(`$ZodType`,(e,t)=>{var n;e??={},e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=Zn;let r=e._zod.def.checks,i=e._zod.traits.has(`$ZodCheck`)?[e,...r??[]]:r?.length?[...r]:[];for(let t of i)for(let n of t._zod.onattach)n(e);if(i.length===0)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let t=(t,n,r)=>{if(t.memo)return t;let i=w(t),a;for(let o of n){if(o._zod.def.when){if(nt(t)||!o._zod.def.when(t))continue}else if(i)continue;let n=t.issues.length,s=o._zod.check(t);if(s instanceof Promise&&r?.async===!1)throw new M;if(a||s instanceof Promise)a=(a??Promise.resolve()).then(async()=>{await s,t.issues.length!==n&&(at(t.issues,n,e),i||=w(t,n))});else{if(t.issues.length===n)continue;at(t.issues,n,e),i||=w(t,n)}}return a?a.then(()=>t):t},n=(n,r,a)=>{if(w(n))return n.aborted=!0,n;let o=t(r,i,a);if(o instanceof Promise){if(a.async===!1)throw new M;return o.then(t=>e._zod.parse(t,a))}return e._zod.parse(o,a)};e._zod.run=(r,a)=>{if(a.skipChecks)return e._zod.parse(r,a);if(a.direction===`backward`){let t=e._zod.parse({value:r.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,r,a)):n(t,r,a)}let o=e._zod.parse(r,a);if(o instanceof Promise){if(a.async===!1)throw new M;return o.then(e=>t(e,i,a))}return t(o,i,a)}}},{get"~standard"(){return dt(this,`~standard`,er(this))},set"~standard"(e){O(this,`~standard`,e)}}),Qn=(e,t)=>e.issues.length?{issues:e.issues.map(e=>E(e,t,P()))}:{value:e.value};async function $n(e,t){let n={async:!0};return Qn(await e._zod.run({value:t,issues:[]},n),n)}function er(e){return{validate:t=>{let n={async:!1};try{let r=e._zod.run({value:t,issues:[]},n);if(!(r instanceof Promise))return Qn(r,n)}catch{}return $n(e,t)},vendor:`zod`,version:1}}var tr=j(`$ZodString`,(e,t)=>{I.init(e,t),e._zod.pattern=t.pattern??kn,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),L=j(`$ZodStringFormat`,(e,t)=>{Hn.init(e,t),tr.init(e,t)}),nr=j(`$ZodGUID`,(e,t)=>{t.pattern??=un,L.init(e,t)}),rr=j(`$ZodUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=dn(e)}else t.pattern??=dn();L.init(e,t)}),ir=j(`$ZodEmail`,(e,t)=>{t.pattern??=fn,L.init(e,t)});function ar(e){try{return typeof URL<`u`&&typeof URL.canParse==`function`?URL.canParse(e):(new URL(e),!0)}catch{return!1}}function or(e,t){return!(`normalize`in t)&&!(`hostname`in t)&&!(`protocol`in t)?ar(e)||2:sr(e,t)}function sr(e,t){if(!t.normalize&&t.protocol?.source===xn.source&&!/^https?:\/\//i.test(e))return 1;try{if(typeof URL<`u`){let t=URL;if(typeof t.parse==`function`)return t.parse(e)??2}return new URL(e)}catch{return 2}}var cr=/[\t\n\r]/g;function lr(e){return e.replace(cr,``)}function ur(e,t){return t.lastIndex=0,t.test(e.hostname)}function dr(e,t){return t.lastIndex=0,t.test(e.protocol.endsWith(`:`)?e.protocol.slice(0,-1):e.protocol)}var fr=j(`$ZodURL`,(e,t)=>{L.init(e,t),e._zod.check=n=>{try{let r=n.value.trim(),i=or(r,t);if(i===1){n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid URL format`,input:n.value,inst:e,continue:!t.abort});return}if(i===2){n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort});return}if(i===!0){n.value=lr(r);return}t.hostname&&!ur(i,t.hostname)&&n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort}),t.protocol&&!dr(i,t.protocol)&&n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort}),n.value=t.normalize?i.href:lr(r);return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),pr=j(`$ZodEmoji`,(e,t)=>{t.pattern??=mn(),L.init(e,t)}),mr=j(`$ZodNanoID`,(e,t)=>{if(t.length!==void 0&&(!Number.isInteger(t.length)||t.length<1))throw Error(`Invalid nanoid length: ${t.length}`);t.pattern??=t.length===void 0?sn:cn(t.length),L.init(e,t)}),hr=j(`$ZodCUID`,(e,t)=>{t.pattern??=tn,L.init(e,t)}),gr=j(`$ZodCUID2`,(e,t)=>{t.pattern??=nn,L.init(e,t)}),_r=j(`$ZodULID`,(e,t)=>{t.pattern??=rn,L.init(e,t)}),vr=j(`$ZodXID`,(e,t)=>{t.pattern??=an,L.init(e,t)}),yr=j(`$ZodKSUID`,(e,t)=>{t.pattern??=on,L.init(e,t)}),br=j(`$ZodISODateTime`,(e,t)=>{t.pattern??=On(t),L.init(e,t)}),xr=j(`$ZodISODate`,(e,t)=>{t.pattern??=Tn,L.init(e,t)}),Sr=j(`$ZodISOTime`,(e,t)=>{t.pattern??=Dn(t),L.init(e,t)}),Cr=j(`$ZodISODuration`,(e,t)=>{t.pattern??=ln,L.init(e,t)}),wr=j(`$ZodIPv4`,(e,t)=>{t.pattern??=hn,L.init(e,t)}),Tr=/^[0-9a-fA-F:.]+$/;function Er(e){return Tr.test(e)?ar(`http://[${e}]`):!1}var Dr=j(`$ZodIPv6`,(e,t)=>{t.pattern??=gn,L.init(e,t),e._zod.check=n=>{Er(n.value)||n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}),Or=j(`$ZodCIDRv4`,(e,t)=>{t.pattern??=_n,L.init(e,t)});function kr(e){let t=e.split(`/`);if(t.length!==2)return!1;let[n,r]=t;if(!r)return!1;let i=Number(r);return`${i}`!==r||i<0||i>128?!1:Er(n)}var Ar=j(`$ZodCIDRv6`,(e,t)=>{t.pattern??=vn,L.init(e,t),e._zod.check=n=>{kr(n.value)||n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}});function jr(e){if(e===``)return!0;if(/\s/.test(e)||e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}var Mr=/^[0-9a-zA-Z+/]*={0,2}$/,Nr=j(`$ZodBase64`,(e,t)=>{t.pattern??=Mr,L.init(e,t),e._zod.check=n=>{jr(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}}),Pr=/^[A-Za-z0-9_-]*$/;function Fr(e){if(!Pr.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return jr(t.padEnd(Math.ceil(t.length/4)*4,`=`))}var Ir=j(`$ZodBase64URL`,(e,t)=>{t.pattern??=Pr,L.init(e,t),e._zod.check=n=>{Fr(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),Lr=j(`$ZodE164`,(e,t)=>{t.pattern??=Sn,L.init(e,t)});function Rr(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}var zr=j(`$ZodJWT`,(e,t)=>{L.init(e,t),e._zod.check=n=>{Rr(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),Br=j(`$ZodNumber`,(e,t)=>{I.init(e,t),e._zod.pattern=An,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=Number(n.value)}catch{}let i=n.value;if(typeof i==`number`&&!Number.isNaN(i)&&Number.isFinite(i))return n;let a=typeof i==`number`?Number.isNaN(i)?`NaN`:Number.isFinite(i)?void 0:String(i):void 0;return n.issues.push({expected:`number`,code:`invalid_type`,input:i,inst:e,...a?{received:a}:{}}),n}}),Vr=j(`$ZodNumberFormat`,(e,t)=>{Rn.init(e,t),Br.init(e,t)}),Hr=j(`$ZodUnknown`,(e,t)=>{I.init(e,t),e._zod.parse=e=>e}),Ur=j(`$ZodNever`,(e,t)=>{I.init(e,t),e._zod.parse=(t,n)=>(t.issues.push({expected:`never`,code:`invalid_type`,input:t.value,inst:e}),t)});function Wr(e,t){let n=it(e._zod.def.checks);if(!n.length)return;let r=Math.min(...n.map(e=>e[0])),i=e._zod.parse;e._zod.parse=(n,a)=>{let o=t(n.value);if(o>r&&!a?.skipChecks&&a?.direction!==`backward`){for(let[t,r]of it(e._zod.def.checks))if(o>t&&r._zod.def.when(n)){let t=n.issues.length;return r._zod.check(n),n.issues[t].continue=!1,at(n.issues,t,e),n}}return i(n,a)}}var Gr=e=>Array.isArray(e)?e.length:-1;function Kr(e,t,n){e.issues.length&&t.issues.push(...rt(n,e.issues)),t.value[n]=e.value}var qr=j(`$ZodArray`,(e,t)=>{I.init(e,t);let n=N.memoizer;n?.attach(e),e._zod.parse=(r,i)=>{let a=r.value;if(!Array.isArray(a))return r.issues.push({expected:`array`,code:`invalid_type`,input:a,inst:e}),r;r.value=n?n.alloc(e,r,Array(a.length),i):Array(a.length);let o=[],s=i?.abortEarly;for(let e=0;e<a.length;e++){let n=a[e],c=t.element._zod.run({value:n,issues:[]},i);if(c instanceof Promise)o.push(c.then(t=>Kr(t,r,e)));else if(Kr(c,r,e),s&&c.issues.length!==0&&w(c))break}return o.length?Promise.all(o).then(()=>r):r},Wr(e,Gr)});function Jr(e,t,n,r,i,a){let o=n in r,s=a===`optional`;if(o||!s||i!==`optional`){if(e.issues.length){if(i!==void 0&&s&&!o)return;t.issues.push(...rt(n,e.issues))}!o&&i===void 0?e.issues.length||t.issues.push({code:`invalid_type`,expected:`nonoptional`,input:void 0,path:[n]}):e.value===void 0?(o||i===`defaulted`&&!s)&&(t.value[n]=void 0):t.value[n]=e.value}}var Yr=[];function Xr(e){let t=Object.keys(e.shape),n=Object.getOwnPropertySymbols(e.shape),r=n.length?n:Yr,i=r.length?[...t,...r]:t;for(let t of i)if(!e.shape?.[t]?._zod?.traits?.has(`$ZodType`))throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);let a=We(e.shape);return{...e,allKeys:i,symbolKeys:r,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(a)}}function Zr(e,t,n,r,i,a,o){let s=[],c=i.keySet,l=i.catchall._zod,u=l.def.type,d=l.optin,f=l.optout,p=0;for(let i in t){if(o&&n.issues.length!==p){if(w(n,p))break;p=n.issues.length}if(c.has(i))continue;if(i===`__proto__`){u===`never`&&s.push(i);continue}if(u===`never`){s.push(i);continue}let a=l.run({value:t[i],issues:[]},r);a instanceof Promise?e.push(a.then(e=>Jr(e,n,i,t,d,f))):Jr(a,n,i,t,d,f)}return s.length&&n.issues.push({code:`unrecognized_keys`,keys:s,input:t,inst:a,continue:!0}),e.length?Promise.all(e).then(()=>n):n}var Qr=j(`$ZodObject`,(e,t)=>{I.init(e,t);let n=Object.getOwnPropertyDescriptor(t,`shape`),r=n?.get?n.get.raw:t.shape??{};if(r){let e=()=>{let n={...r};return Object.defineProperty(t,"shape",{value:n}),e.raw=n,n};e.raw=r,Object.defineProperty(t,"shape",{get:e})}let i=De(()=>Xr(t));A(e,`propValues`,e=>{let t=e.def.shape,n={};for(let e in t){let r=t[e]._zod;if(r.values){Object.prototype.hasOwnProperty.call(n,e)||_(n,e,new Set);for(let t of r.values)n[e].add(t);r.optin!==void 0&&n[e].add(void 0)}}return n});let a=Re,o=t.catchall,s,c=N.memoizer;c?.attach(e),e._zod.parse=(t,n)=>{s??=i.value;let r=t.value;if(!a(r))return t.issues.push({expected:`object`,code:`invalid_type`,input:r,inst:e}),t;t.value=c?c.alloc(e,t,{},n):{};let l=[],u=s.shape,d=n?.abortEarly,f=t.issues.length;for(let e of s.allKeys){if(d&&t.issues.length!==f){if(w(t,f))break;f=t.issues.length}if(e===`__proto__`)continue;let i=u[e],a=i._zod.optin,o=i._zod.optout,s=i._zod.run({value:r[e],issues:[]},n);s instanceof Promise?l.push(s.then(n=>Jr(n,t,e,r,a,o))):Jr(s,t,e,r,a,o)}return o?Zr(l,r,t,n,i.value,e,d===!0):l.length?Promise.all(l).then(()=>t):t}}),$r=j(`$ZodObjectJIT`,(e,t)=>{Qr.init(e,t);let n=e._zod.parse,r=De(()=>Xr(t)),i=N.memoizer,a=t=>{let n=r.value,a=n.symbolKeys,o=new Xn([`payload`,`ctx`],{shape:t,inst:e,memo:i,syms:a}),s=e=>`shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,c=(e,t)=>`
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;o.write(`const input = payload.value;`);let l=Object.create(null),u=0;for(let e of n.allKeys)l[e]=`key_${u++}`;o.write(i?`const newResult = memo.alloc(inst, payload, {}, ctx);`:`const newResult = {};`);for(let e of n.allKeys){if(e===`__proto__`)continue;let n=l[e],r=typeof e==`symbol`?`syms[${a.indexOf(e)}]`:Fe(e),i=`${r} in input`,u=t[e],d=u?._zod?.optin,f=d!==void 0,p=u?._zod?.optout===`optional`;if(o.write(`const ${n} = ${s(r)};`),f&&p){let e=d===`optional`?`${n}_present`:`${n}.value !== undefined || ${n}_present`;o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n,r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `)}else f?(o.write(`
        if (${n}.issues.length) {${c(n,r)}
        }
      `),d===`defaulted`?o.write(`newResult[${r}] = ${n}.value;`):o.write(`
        if (${n}.value !== undefined || ${i}) {
          newResult[${r}] = ${n}.value;
        }
      `)):o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n,r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `)}return o.write(`payload.value = newResult;`),o.write(`return payload;`),o.compile()},o,s=Re,c=!N.jitless,l=c&&ze.value,u=t.catchall,d;e._zod.parse=(i,f)=>{d??=r.value;let p=i.value;return s(p)?c&&l&&f?.async===!1&&f.jitless!==!0?(o||=a(t.shape),i=o(i,f),u?Zr([],p,i,f,d,e,f?.abortEarly===!0):i):n(i,f):(i.issues.push({expected:`object`,code:`invalid_type`,input:p,inst:e}),i)}});function ei(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!w(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>E(e,r,P())))}),t)}var ti=j(`$ZodUnion`,(e,t)=>{I.init(e,t),A(e,`optin`,e=>e.def.options.some(e=>e._zod.optin===`defaulted`)?`defaulted`:e.def.options.some(e=>e._zod.optin!==void 0)?`optional`:void 0),A(e,`optout`,e=>e.def.options.some(e=>e._zod.optout===`optional`)?`optional`:void 0),A(e,`values`,e=>{if(e.def.options.every(e=>e._zod.values))return new Set(e.def.options.flatMap(e=>Array.from(e._zod.values)))}),A(e,`pattern`,e=>{if(e.def.options.every(e=>e._zod.pattern)){let t=e.def.options.map(e=>e._zod.pattern);return RegExp(`^(${t.map(e=>ke(e.source)).join(`|`)})$`)}});let n=t.options.length===1?t.options[0]._zod.run:null;e._zod.parse=(r,i)=>{if(n)return n(r,i);let a=!1,o=[];for(let e of t.options){let t=e._zod.run({value:r.value,issues:[]},i);if(t instanceof Promise)o.push(t),a=!0;else{if(t.issues.length===0)return t;o.push(t)}}return a?Promise.all(o).then(t=>ei(t,r,e,i)):ei(o,r,e,i)}}),ni=j(`$ZodIntersection`,(e,t)=>{I.init(e,t),e._zod.parse=(e,n)=>{let r=e.value,i=t.left._zod.run({value:r,issues:[]},n),a=t.right._zod.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>ii(e,t,n)):ii(e,i,a)}});function ri(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(x(e)&&x(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};Object.prototype.hasOwnProperty.call(i,`__proto__`)&&delete i.__proto__;for(let n of r){if(n===`__proto__`)continue;let r=ri(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=ri(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function ii(e,t,n){let r=new Map,i,a=new Map,o=(e,t)=>{let n;if(e.code===`unrecognized_keys`&&!e.path?.length)i??=e,n=e.keys;else if(e.code===`invalid_key`&&e.origin===`record`&&e.path?.length===1){let t=String(e.path[0]);a.has(t)||a.set(t,e),n=[t]}else return!1;for(let e of n)r.has(e)||r.set(e,{}),r.get(e)[t]=!0;return!0};for(let n of t.issues)o(n,`l`)||e.issues.push(n);for(let t of n.issues)o(t,`r`)||e.issues.push(t);let s=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(s.length){let t=i?s.filter(e=>i.keys.includes(e)):[];t.length&&e.issues.push({...i,keys:t});for(let n of s)!t.includes(n)&&a.has(n)&&e.issues.push(a.get(n))}let c=ri(t.value,n.value);if(!c.valid){if(w(e))return e;throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`)}return e.value=c.data,e}var ai=j(`$ZodTuple`,(e,t)=>{I.init(e,t);let n=t.items,r=N.memoizer;r?.attach(e),e._zod.parse=(i,a)=>{let o=i.value;if(!Array.isArray(o))return i.issues.push({input:o,inst:e,expected:`tuple`,code:`invalid_type`}),i;i.value=r?r.alloc(e,i,[],a):[];let s=[],c=oi(n,`optin`),l=oi(n,`optout`);if(!t.rest){if(o.length<c)return i.issues.push({code:`too_small`,minimum:c,inclusive:!0,input:o,inst:e,origin:`array`}),i;o.length>n.length&&i.issues.push({code:`too_big`,maximum:n.length,inclusive:!0,input:o,inst:e,origin:`array`})}let u=Array(n.length),d=t.rest?a?.abortEarly:void 0,f=!1;for(let e=0;e<n.length;e++){let t=n[e]._zod.run({value:o[e],issues:[]},a);t instanceof Promise?s.push(t.then(t=>{u[e]=t})):(u[e]=t,d&&!f&&t.issues.length&&(f=w(t)))}if(t.rest&&!f){let e=n.length-1,r=o.slice(n.length),c=i.issues.length;for(let n of r){if(d&&i.issues.length!==c){if(w(i,c))break;c=i.issues.length}e++;let r=t.rest._zod.run({value:n,issues:[]},a);r instanceof Promise?s.push(r.then(t=>si(t,i,e))):si(r,i,e)}}return s.length?Promise.all(s).then(()=>ci(u,i,n,o,l)):ci(u,i,n,o,l)}});function oi(e,t){for(let n=e.length-1;n>=0;n--)if(!(t===`optin`?e[n]._zod.optin!==void 0:e[n]._zod.optout===`optional`))return n+1;return 0}function si(e,t,n){e.issues.length&&t.issues.push(...rt(n,e.issues)),t.value[n]=e.value}function ci(e,t,n,r,i){for(let a=0;a<n.length;a++){let o=e[a],s=a<r.length;if(!s&&a>=i&&n[a]._zod.optin===`optional`){t.value.length=a;break}if(o.issues.length){if(!s&&a>=i){t.value.length=a;break}t.issues.push(...rt(a,o.issues))}t.value[a]=o.value}for(let e=t.value.length-1;e>=r.length&&n[e]._zod.optout===`optional`&&t.value[e]===void 0;e--)t.value.length=e;return t}var li=j(`$ZodEnum`,(e,t)=>{I.init(e,t);let n=Ce(t.entries),r=new Set(n);e._zod.values=r,A(e,`pattern`,e=>{let t=Ce(e.def.entries).filter(e=>Ve.has(typeof e));return RegExp(t.length?`^(${t.map(e=>He(e.toString())).join(`|`)})$`:`^[^\\s\\S]$`)}),e._zod.parse=(t,i)=>{let a=t.value;return r.has(a)||t.issues.push({code:`invalid_value`,values:n,input:a,inst:e}),t}}),ui=j(`$ZodTransform`,(e,t)=>{I.init(e,t),e._zod.optin=`optional`,N.memoizer?.guard(e),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new wt(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n));if(i instanceof Promise)throw new M;return n.value=i,n}});function di(e,t){return e.value=t.issues.length?void 0:t.value,e}var fi=j(`$ZodOptional`,(e,t)=>{I.init(e,t),A(e,`optin`,e=>e.def.innerType._zod.optin===`defaulted`?`defaulted`:`optional`),e._zod.optout=`optional`,A(e,`values`,e=>{let t=e.def.innerType._zod.values;return t?new Set([...t,void 0]):void 0}),A(e,`pattern`,e=>{let t=e.def.innerType._zod.pattern;return t?RegExp(`^(${ke(t.source)})?$`):void 0}),e._zod.parse=(e,n)=>{if(e.value===void 0){if(t.innerType._zod.optin!==`defaulted`)return e;let r=t.innerType._zod.run({value:e.value,issues:[]},n);return r instanceof Promise?r.then(t=>di(e,t)):di(e,r)}return t.innerType._zod.run(e,n)}}),pi=j(`$ZodExactOptional`,(e,t)=>{fi.init(e,t),A(e,`values`,e=>e.def.innerType._zod.values),A(e,`pattern`,e=>e.def.innerType._zod.pattern),e._zod.parse=(e,n)=>t.innerType._zod.run(e,n)}),mi=j(`$ZodNullable`,(e,t)=>{I.init(e,t),A(e,`optin`,e=>e.def.innerType._zod.optin),A(e,`optout`,e=>e.def.innerType._zod.optout),A(e,`pattern`,e=>{let t=e.def.innerType._zod.pattern;return t?RegExp(`^(${ke(t.source)}|null)$`):void 0}),A(e,`values`,e=>e.def.innerType._zod.values?new Set([...e.def.innerType._zod.values,null]):void 0),e._zod.parse=(e,n)=>e.value===null?e:t.innerType._zod.run(e,n)}),hi=j(`$ZodDefault`,(e,t)=>{I.init(e,t),e._zod.optin=`defaulted`,A(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(e=>gi(e,t)):gi(r,t)}});function gi(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var _i=j(`$ZodPrefault`,(e,t)=>{I.init(e,t),e._zod.optin=`defaulted`,A(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._zod.run(e,n))}),vi=j(`$ZodNonOptional`,(e,t)=>{I.init(e,t),A(e,`values`,e=>{let t=e.def.innerType._zod.values;return t?new Set([...t].filter(e=>e!==void 0)):void 0}),e._zod.parse=(n,r)=>{let i=t.innerType._zod.run(n,r);return i instanceof Promise?i.then(t=>yi(t,e)):yi(i,e)}});function yi(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}function bi(e,t,n,r){return t.issues.length?(e.value=n.catchValue({...t,value:e.value,error:{issues:t.issues.map(e=>E(e,r,P()))},input:e.value}),e):(e.value=t.value,t.memo&&(e.memo=!0),e)}var xi=j(`$ZodCatch`,(e,t)=>{I.init(e,t),A(e,`optin`,e=>e.def.innerType._zod.optin===`defaulted`?`defaulted`:`optional`),A(e,`optout`,e=>e.def.innerType._zod.optout),A(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run({value:e.value,issues:[]},n);return r instanceof Promise?r.then(r=>bi(e,r,t,n)):bi(e,r,t,n)}}),Si=j(`$ZodPipe`,(e,t)=>{I.init(e,t),A(e,`values`,e=>e.def.in._zod.values),A(e,`optin`,e=>e.def.in._zod.optin),A(e,`optout`,e=>e.def.out._zod.optout),A(e,`propValues`,e=>e.def.in._zod.propValues),e._zod.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._zod.run(e,n);return r instanceof Promise?r.then(e=>Ci(e,t.in,n)):Ci(r,t.in,n)}let r=t.in._zod.run(e,n);return r instanceof Promise?r.then(e=>Ci(e,t.out,n)):Ci(r,t.out,n)}});function Ci(e,t,n){return e.issues.some(e=>e.code!==`unrecognized_keys`)?(e.aborted=!0,e):t._zod.run({value:e.value,issues:e.issues},n)}var wi=j(`$ZodReadonly`,(e,t)=>{I.init(e,t),A(e,`propValues`,e=>e.def.innerType._zod.propValues),A(e,`values`,e=>e.def.innerType._zod.values),A(e,`optin`,e=>e.def.innerType?._zod?.optin),A(e,`optout`,e=>e.def.innerType?._zod?.optout),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(Ti):Ti(r)}});function Ti(e){return e.memo||(e.value=Object.freeze(e.value)),e}var Ei=j(`$ZodCustom`,(e,t)=>{F.init(e,t),I.init(e,t),e._zod.parse=(e,t)=>e,e._zod.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>Di(t,n,r,e));Di(i,n,r,e)}});function Di(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(e.params=r._zod.def.params),t.issues.push(D(e))}}var Oi=class extends Error{constructor(){super(`Cannot parse a reference cycle that closes through a transform`),this.name=`ZodCyclicError`}},ki=`~memo`,Ai=[];function ji(e){return typeof e==`object`&&!!e}function Mi(e){return e.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}var Ni=new WeakMap,R=0,Pi=1,z=2;function Fi(e,t,n){let r=Ni.get(e);if(r!==void 0)return r?z:R;if(t.has(e))return z;t.add(e);let i=R,a=e=>{if(i!==z&&e?._zod){let r=Fi(e,t,n);r>i&&(i=r)}},o=(e,r)=>{let i=R;for(let a of Reflect.ownKeys(e)){let o=Object.getOwnPropertyDescriptor(e,a);if(r&&!o.enumerable)continue;let s=o.get?Pi:o.value?._zod?Fi(o.value,t,n):R;s>i&&(i=s)}return i},s=e=>{e>i&&(i=e)},c=e._zod.def;switch(c.type){case`object`:{let e=je(c);s(e?o(e,!0):Pi),a(c.catchall);break}case`array`:a(c.element);break;case`tuple`:for(let e of c.items)a(e);a(c.rest);break;case`record`:case`map`:a(c.keyType),a(c.valueType);break;case`set`:a(c.valueType);break;case`union`:for(let e of c.options)a(e);break;case`intersection`:a(c.left),a(c.right);break;case`optional`:case`nullable`:case`default`:case`prefault`:case`catch`:case`readonly`:case`nonoptional`:case`promise`:case`success`:a(c.innerType);break;case`pipe`:a(c.in),a(c.out);break;case`function`:a(c.input),a(c.output);break;case`lazy`:{let r=c._cachedInner??(n?e._zod.innerType:void 0);s(r?Fi(r,t,!1):Pi);break}case`template_literal`:case`string`:case`number`:case`int`:case`boolean`:case`bigint`:case`symbol`:case`undefined`:case`null`:case`void`:case`never`:case`any`:case`unknown`:case`date`:case`nan`:case`enum`:case`literal`:case`file`:case`transform`:case`custom`:break;default:for(let e in c){let t=Object.getOwnPropertyDescriptor(c,e);if(!t||t.get)continue;let n=t.value;if(n&&typeof n==`object`){if(n._zod)a(n);else if(Array.isArray(n))for(let e of n)a(e)}}}return t.delete(e),Ii(e,i)}function Ii(e,t){return t!==Pi&&Ni.set(e,t===z),t}function Li(e,t){let n=e.buckets.get(t);return n||(n=new WeakMap,e.buckets.set(t,n)),n}var Ri,zi=[],Bi={alloc(e,t,n){let r=Ri;if(!r)return n;Ri=void 0;let i={value:n,issues:null};return r.set(t.value,i),zi.push(i),n},guard(e){var t;(t=e._zod).deferred??(t.deferred=[]),e._zod.deferred.push(()=>{let t=e._zod.parse,n=(e,n)=>{if(n.direction!==`backward`&&Hi(n,e.value))throw new Oi;return t(e,n)};e._zod.parse=n,e._zod.run===t&&(e._zod.run=n)})},attach(e){var t;let n,r=!1,i,a;(t=e._zod).deferred??(t.deferred=[]),e._zod.deferred.push(()=>{let t=e._zod.parse,o=(s,c)=>{if(n===void 0){let i=Fi(e,new Set,!1);if(i===R)return e._zod.parse=t,e._zod.run===o&&(e._zod.run=t),t(s,c);i===z||r?n=!0:r=!0}let l=s.value;if(!ji(l))return t(s,c);let u=c[ki];u||(u={buckets:new WeakMap,backEdges:void 0},c[ki]=u);let d;i===c?d=a:(d=Li(u,e),i=c,a=d);let f=d.get(l);if(f)return s.value=f.value,f.issues?f.issues.length&&s.issues.push(...Mi(f.issues)):(s.memo=!0,u.backEdges??(u.backEdges=new WeakSet),u.backEdges.add(f.value)),s;Ri=d;let p=zi.length,m=t(s,c);Ri=void 0;let ee=zi.length>p?zi.pop():void 0;return m instanceof Promise?m.then(e=>(ee&&(ee.issues=e.issues.length?Mi(e.issues):Ai),e)):(ee&&(ee.issues=m.issues.length?Mi(m.issues):Ai),m)};e._zod.parse=o,e._zod.run===t&&(e._zod.run=o)})}};function Vi(){return Bi}function Hi(e,t){let n=e[ki]?.backEdges;return n!==void 0&&ji(t)&&n.has(t)}var Ui=()=>{let e={string:{unit:`characters`,verb:`to have`},file:{unit:`bytes`,verb:`to have`},array:{unit:`items`,verb:`to have`},set:{unit:`items`,verb:`to have`},map:{unit:`entries`,verb:`to have`}};function t(t){return e[t]??null}let n={regex:`input`,email:`email address`,url:`URL`,emoji:`emoji`,uuid:`UUID`,uuidv4:`UUIDv4`,uuidv6:`UUIDv6`,nanoid:`nanoid`,guid:`GUID`,cuid:`cuid`,cuid2:`cuid2`,ulid:`ULID`,xid:`XID`,ksuid:`KSUID`,datetime:`ISO datetime`,date:`ISO date`,time:`ISO time`,duration:`ISO duration`,ipv4:`IPv4 address`,ipv6:`IPv6 address`,mac:`MAC address`,cidrv4:`IPv4 range`,cidrv6:`IPv6 range`,base64:`base64-encoded string`,base64url:`base64url-encoded string`,json_string:`JSON string`,e164:`E.164 number`,currency_code:`currency code`,credit_card:`credit card number`,iban:`IBAN`,jwt:`JWT`,template_literal:`input`},r={nan:`NaN`};function i(e,t){return e===`number`&&typeof t==`number`&&!Number.isFinite(t)?String(t):r[e]??e}return e=>{switch(e.code){case`invalid_type`:return`Invalid input: expected ${i(e.expected)}, received ${i(lt(e.input),e.input)}`;case`invalid_value`:return e.values.length===1?`Invalid input: expected ${Ue(e.values[0])}`:`Invalid option: expected one of ${we(e.values,`|`)}`;case`too_big`:{let n=e.exact?`exactly `:e.inclusive?`<=`:`<`,r=t(e.origin);return r?`Too big: expected ${e.origin??`value`} to have ${n}${e.maximum.toString()} ${r.unit??`elements`}`:`Too big: expected ${e.origin??`value`} to be ${n}${e.maximum.toString()}`}case`too_small`:{let n=e.exact?`exactly `:e.inclusive?`>=`:`>`,r=t(e.origin);return r?`Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}`:`Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`}case`invalid_format`:{let t=e;return t.format===`starts_with`?`Invalid string: must start with "${t.prefix}"`:t.format===`ends_with`?`Invalid string: must end with "${t.suffix}"`:t.format===`includes`?`Invalid string: must include "${t.includes}"`:t.format===`regex`?`Invalid string: must match pattern ${t.pattern}`:`Invalid ${n[t.format]??e.format}`}case`not_multiple_of`:return`Invalid number: must be a multiple of ${e.divisor}`;case`unrecognized_keys`:return`Unrecognized key${e.keys.length>1?`s`:``}: ${we(e.keys,`, `)}`;case`invalid_key`:return`Invalid key in ${e.origin}`;case`invalid_union`:return e.options&&Array.isArray(e.options)&&e.options.length>0?`Invalid discriminator value. Expected ${e.options.map(e=>`'${e}'`).join(` | `)}`:e.inclusive===!1?`Invalid input: more than one option matched`:`Invalid input`;case`invalid_element`:return`Invalid value in ${e.origin}`;default:return`Invalid input`}}};function Wi(){return{localeError:Ui()}}var Gi,Ki=class{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function qi(){return new Ki}(Gi=globalThis).__zod_globalRegistry??(Gi.__zod_globalRegistry=qi());var B=globalThis.__zod_globalRegistry;function Ji(e){return e.checks&&=[...e.checks],e}function Yi(e,t){return new e(Ji({type:`string`,...C(t)}))}function Xi(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...C(t)})}function Zi(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...C(t)})}function Qi(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...C(t)})}function $i(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...C(t)})}function ea(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...C(t)})}function ta(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...C(t)})}function na(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...C(t)})}function ra(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...C(t)})}function ia(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...C(t)})}function aa(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...C(t)})}function oa(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...C(t)})}function sa(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...C(t)})}function ca(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...C(t)})}function la(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...C(t)})}function ua(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...C(t)})}function da(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...C(t)})}function fa(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...C(t)})}function pa(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...C(t)})}function ma(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...C(t)})}function ha(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...C(t)})}function ga(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...C(t)})}function _a(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...C(t)})}function va(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...C(t)})}function ya(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...C(t)})}function ba(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...C(t)})}function xa(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...C(t)})}function Sa(e,t){return new e(Ji({type:`number`,checks:[],...C(t)}))}function Ca(e,t){return new e(Ji({type:`number`,coerce:!0,checks:[],...C(t)}))}function wa(e,t){return new e({type:`number`,check:`number_format`,abort:!1,format:`safeint`,...C(t)})}function Ta(e){return new e({type:`unknown`})}function Ea(e,t){return new e({type:`never`,...C(t)})}function Da(e,t){return new Fn({check:`less_than`,...C(t),value:e,inclusive:!1})}function Oa(e,t){return new Fn({check:`less_than`,...C(t),value:e,inclusive:!0})}function ka(e,t){return new In({check:`greater_than`,...C(t),value:e,inclusive:!1})}function Aa(e,t){return new In({check:`greater_than`,...C(t),value:e,inclusive:!0})}function ja(e,t){return new Ln({check:`multiple_of`,...C(t),value:e})}function Ma(e,t){return new zn({check:`max_length`,...C(t),maximum:e})}function Na(e,t){return new Bn({check:`min_length`,...C(t),minimum:e})}function Pa(e,t){return new Vn({check:`length_equals`,...C(t),length:e})}function Fa(e,t){return new Un({check:`string_format`,format:`regex`,...C(t),pattern:e})}function Ia(e){return new Wn({check:`string_format`,format:`lowercase`,...C(e)})}function La(e){return new Gn({check:`string_format`,format:`uppercase`,...C(e)})}function Ra(e,t){return new Kn({check:`string_format`,format:`includes`,...C(t),includes:e})}function za(e,t){return new qn({check:`string_format`,format:`starts_with`,...C(t),prefix:e})}function Ba(e,t){return new Jn({check:`string_format`,format:`ends_with`,...C(t),suffix:e})}function V(e){return new Yn({check:`overwrite`,tx:e})}function Va(e){return V(t=>t.normalize(e))}function Ha(){return V(e=>e.trim())}function Ua(){return V(e=>e.toLowerCase())}function Wa(){return V(e=>e.toUpperCase())}function Ga(){return V(e=>Ie(e))}function Ka(e,t,n){return new e({type:`array`,element:t,...C(n)})}function qa(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...C(n)})}function Ja(e,t){let n=Ya(t=>(t.addIssue=e=>{if(typeof e==`string`)t.issues.push(D(e,t.value,n._zod.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,`input`in r||(r.input=t.value),r.inst??=n,r.continue??=!n._zod.def.abort,t.issues.push(D(r))}},e(t.value,t)),t);return n}function Ya(e,t){let n=new F({check:`custom`,...C(t)});return n._zod.check=e,n}function H(e,...t){for(let n of t)for(let t of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,t)&&_(e,t,n[t]);return e}function Xa(e){let t=e?.target??`draft-2020-12`;return t===`draft-4`&&(t=`draft-04`),t===`draft-7`&&(t=`draft-07`),{processors:e.processors??{},metadataRegistry:e?.metadata??B,target:t,unrepresentable:e?.unrepresentable??`throw`,override:e?.override??(()=>{}),io:e?.io??`output`,counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:e?.cycles??`ref`,reused:e?.reused??`inline`,intersections:[],deferred:[],external:e?.external??void 0}}function U(e,t,n,r,i){let a=typeof t.unrepresentable==`function`?t.unrepresentable({zodSchema:e,path:r.path,message:i}):t.unrepresentable;if(a===`any`)return!1;if(a===void 0||a===`throw`)throw Error(i);return Object.assign(n,a),!0}function W(e,t,n={path:[],schemaPath:[]}){var r;let i=e._zod.def,a=t.seen.get(e);if(a)return a.count++,n.schemaPath.includes(e)&&(a.cycle=n.path),a.schema;let o={schema:{},count:1,cycle:void 0,path:n.path};t.seen.set(e,o),t.sharedDefsExtractedFor=void 0,t.sharedEmitDoneFor=void 0;let s=e._zod.toJSONSchema?.();if(s)o.schema=s;else{let r={...n,schemaPath:[...n.schemaPath,e],path:n.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,o.schema,r);else{let n=o.schema,a=t.processors[i.type];if(!a)throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);a(e,t,n,r)}let a=e._zod.parent;a&&(o.ref||=a,W(a,t,r),t.seen.get(a).isParent=!0)}let c=t.metadataRegistry.get(e);return c&&H(o.schema,c),t.io===`input`&&G(e)&&(delete o.schema.examples,delete o.schema.default),t.io===`input`&&`_prefault`in o.schema&&((r=o.schema).default??(r.default=o.schema._prefault)),delete o.schema._prefault,t.seen.get(e).schema}function Za(e){return e.replace(/~/g,`~0`).replace(/\//g,`~1`)}function Qa(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);if(e.external&&e.sharedDefsExtractedFor===e.external)return;let r=new Map;for(let t of e.seen.entries()){let n=e.metadataRegistry.get(t[0])?.id;if(n){let e=r.get(n);if(e&&e!==t[0])throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);r.set(n,t[0])}}let i=t=>{let r=e.target===`draft-2020-12`?`$defs`:`definitions`;if(e.external){let n=e.external.registry.get(t[0])?.id,i=e.external.uri??(e=>e);if(n)return{ref:i(n)};let a=t[1].defId??t[1].schema.id??`schema${e.counter++}`;return t[1].defId=a,{defId:a,ref:`${i(`__shared`)}#/${r}/${Za(a)}`}}let i=`#/${r}/`;if(t[1]===n&&!t[1].schema.id)return{ref:`#`};let a=t[1].schema.id??`__schema${e.counter++}`;return{defId:a,ref:i+Za(a)}},a=e=>{if(e[1].schema.$ref)return;let t=e[1],{ref:n,defId:r}=i(e);t.def={...t.schema},r&&(t.defId=r);let a=t.schema;for(let e in a)delete a[e];a.$ref=n};if(e.cycles===`throw`)for(let t of e.seen.entries()){let e=t[1];if(e.cycle)throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let n of e.seen.entries()){let r=n[1];if(t===n[0])a(n);else{if(e.external){let r=e.external.registry.get(n[0])?.id;if(t!==n[0]&&r){a(n);continue}}(e.metadataRegistry.get(n[0])?.id||r.cycle||r.count>1&&e.reused===`ref`)&&a(n)}}e.external&&(e.sharedDefsExtractedFor=e.external)}function $a(e){let t=e.anyOf;if(!Array.isArray(t)||t.length===0||e.type!==void 0)return;let n=[];for(let e of t){if(!e||typeof e!=`object`)return;$a(e);let t=Object.keys(e);if(t.length!==1||t[0]!==`type`)return;let r=e.type;for(let e of Array.isArray(r)?r:[r]){if(typeof e!=`string`)return;n.includes(e)||n.push(e)}}delete e.anyOf,e.type=n.length===1?n[0]:n}var eo=new Set([`type`,`properties`,`required`,`additionalProperties`]),to=[`oneOf`,`anyOf`];function no(e){let t=e.additionalProperties;return t===void 0||t===!1||typeof t!=`object`||!t?null:Object.keys(t).length?t:null}function ro(e){let t=[];for(let n of e){if(typeof n!=`object`||n.type!==`object`)return null;for(let e in n)if(!eo.has(e))return null;t.push(n)}let n={},r=new Set;for(let e of t){for(let r in e.properties){if(Object.prototype.hasOwnProperty.call(n,r))continue;let e=[];for(let n of t){let t=n.properties?.[r]??no(n);t!=null&&(e.some(e=>JSON.stringify(e)===JSON.stringify(t))||e.push(t))}_(n,r,e.length===1?e[0]:ro(e)??{allOf:e})}for(let t of e.required??[])r.add(t)}let i={type:`object`,properties:n};if(r.size&&(i.required=[...r]),t.every(e=>e.additionalProperties===!1))i.additionalProperties=!1;else{let e=[];for(let n of t){let t=no(n);t&&!e.some(e=>JSON.stringify(e)===JSON.stringify(t))&&e.push(t)}e.length===1?i.additionalProperties=e[0]:e.length>1&&(i.additionalProperties={allOf:e})}return i}function io(e){let t=e.allOf;if(!Array.isArray(t)||t.length<2)return;for(let t of eo)if(t in e)return;let n=t.filter(e=>to.some(t=>Array.isArray(e[t]))),r=null;if(!n.length)r=ro(t);else{let e=n[0],i=to.find(t=>Array.isArray(e[t]));if(Object.keys(e).length!==1)return;let a=t.filter(t=>t!==e),o=e[i].map(e=>ro([...a,e]));if(o.some(e=>!e))return;r={[i]:o}}r&&(delete e.allOf,H(e,r))}function ao(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=t=>{let n=e.seen.get(t);if(n.ref===null)return;let i=n.def??n.schema,a={...i},o=n.ref;if(n.ref=null,o){r(o);let n=e.seen.get(o),s=n.schema;if(s.$ref&&(e.target===`draft-07`||e.target===`draft-04`||e.target===`openapi-3.0`)?(i.allOf=i.allOf??[],i.allOf.push(s)):H(i,s),H(i,a),t._zod.parent===o)for(let e in i)e!==`$ref`&&e!==`allOf`&&(e in a||delete i[e]);if(s.$ref&&n.def)for(let e in i)e!==`$ref`&&e!==`allOf`&&e in n.def&&JSON.stringify(i[e])===JSON.stringify(n.def[e])&&delete i[e]}let s=t._zod.parent;if(s&&s!==o){r(s);let t=e.seen.get(s);if(t?.schema.$ref&&(i.$ref=t.schema.$ref,t.def))for(let e in i)e!==`$ref`&&e!==`allOf`&&e in t.def&&JSON.stringify(i[e])===JSON.stringify(t.def[e])&&delete i[e]}e.override({zodSchema:t,jsonSchema:i,path:n.path??[]})};if(!e.external||e.sharedEmitDoneFor!==e.external){for(let t of[...e.seen.entries()].reverse())r(t[0]);if(e.target!==`openapi-3.0`)for(let t of e.seen.entries())$a(t[1].def??t[1].schema);for(let t of e.deferred)t();if(e.intersections.length){let t=new Map;for(let n of e.seen.values())for(let e of[n.schema,n.def]){let n=e?.allOf;if(!Array.isArray(n))continue;let r=t.get(n);r?r.push(e):t.set(n,[e])}for(let n of e.intersections)for(let e of t.get(n)??[])io(e)}}let i={};if(e.target===`draft-2020-12`?i.$schema=`https://json-schema.org/draft/2020-12/schema`:e.target===`draft-07`?i.$schema=`http://json-schema.org/draft-07/schema#`:e.target===`draft-04`?i.$schema=`http://json-schema.org/draft-04/schema#`:e.target,e.external?.uri){let n=e.external.registry.get(t)?.id;if(!n)throw Error("Schema is missing an `id` property");i.$id=e.external.uri(n)}H(i,n.defId?n.schema:n.def??n.schema);let a=e.metadataRegistry.get(t)?.id;a!==void 0&&i.id===a&&delete i.id;let o=e.external?.defs??{};if(!e.external||e.sharedEmitDoneFor!==e.external)for(let t of e.seen.entries()){let e=t[1];e.def&&e.defId&&(e.def.id===e.defId&&delete e.def.id,_(o,e.defId,e.def))}e.external&&(e.sharedEmitDoneFor=e.external),e.external||Object.keys(o).length>0&&(e.target===`draft-2020-12`?i.$defs=o:i.definitions=o);try{let n=JSON.parse(JSON.stringify(i));return Object.defineProperty(n,"~standard",{value:{...t[`~standard`],jsonSchema:{input:so(t,`input`,e.processors),output:so(t,`output`,e.processors)}},enumerable:!1,writable:!1}),n}catch{throw Error(`Error converting schema to JSON.`)}}function G(e,t){let n=t??{seen:new Set};if(n.seen.has(e))return!1;n.seen.add(e);let r=e._zod.def;if(r.type===`transform`)return!0;if(r.type===`array`)return G(r.element,n);if(r.type===`set`)return G(r.valueType,n);if(r.type===`lazy`)return G(r.getter(),n);if(r.type===`promise`||r.type===`optional`||r.type===`nonoptional`||r.type===`nullable`||r.type===`readonly`||r.type==="default"||r.type===`prefault`||r.type===`catch`)return G(r.innerType,n);if(r.type===`intersection`)return G(r.left,n)||G(r.right,n);if(r.type===`record`||r.type===`map`)return G(r.keyType,n)||G(r.valueType,n);if(r.type===`pipe`)return e._zod.traits.has(`$ZodCodec`)?!0:G(r.in,n)||G(r.out,n);if(r.type===`object`){for(let e in r.shape)if(G(r.shape[e],n))return!0;return!1}if(r.type===`union`){for(let e of r.options)if(G(e,n))return!0;return!1}if(r.type===`tuple`){for(let e of r.items)if(G(e,n))return!0;return!!(r.rest&&G(r.rest,n))}return!1}var oo=(e,t={})=>n=>{let r=Xa({...n,processors:t});return W(e,r),Qa(r,e),ao(r,e)},so=(e,t,n={})=>r=>{let{libraryOptions:i,target:a}=r??{},o=Xa({...i??{},target:a,io:t,processors:n});return W(e,o),Qa(o,e),ao(o,e)},K=(e,t,n)=>{(e[t]===void 0||n>e[t])&&(e[t]=n)},q=(e,t,n)=>{(e[t]===void 0||n<e[t])&&(e[t]=n)},co=(e,t)=>{K(e,`minimum`,t),q(e,`maximum`,t)},lo=(e,t)=>{e.multipleOf??=[],e.multipleOf.includes(t)||e.multipleOf.push(t)},uo=(e,t)=>{e.patterns??=new Set,e.patterns.add(t)},fo=(e,t)=>{e.mime=e.mime?e.mime.filter(e=>t.includes(e)):[...t]},po=(e,t)=>{e.format=t,t.includes(`int`)&&(e.isInt=!0)},mo=(e,t)=>K(e,`minimum`,t.minimum),ho=(e,t)=>q(e,`maximum`,t.maximum),go=e=>(t,n)=>{po(t,n.format);let[r,i]=e[n.format];K(t,`minimum`,r),q(t,`maximum`,i)},_o={greater_than:(e,t)=>K(e,t.inclusive?`minimum`:`exclusiveMinimum`,t.value),less_than:(e,t)=>q(e,t.inclusive?`maximum`:`exclusiveMaximum`,t.value),multiple_of:(e,t)=>lo(e,t.value),number_format:go(Ge),bigint_format:go(Ke),min_length:mo,max_length:ho,length_equals:(e,t)=>co(e,t.length),min_size:mo,max_size:ho,size_equals:(e,t)=>co(e,t.size),string_format:(e,t)=>{po(e,t.format),t.pattern&&uo(e,t.pattern),(t.format===`base64`||t.format===`base64url`)&&(e.contentEncoding=t.format),(t.local||t.precision===-1)&&(e.laxFormat=!0)},mime_type:(e,t)=>fo(e,t.mime)};function J(e){let t={},n=e._zod.def,r=e._zod.traits.has(`$ZodCheck`)?[e,...n.checks??[]]:n.checks??[];for(let e of r)_o[e._zod.def.check]?.(t,e._zod.def);let i=e._zod.bag;i.minimum!==void 0&&K(t,`minimum`,i.minimum),i.exclusiveMinimum!==void 0&&K(t,`exclusiveMinimum`,i.exclusiveMinimum),i.maximum!==void 0&&q(t,`maximum`,i.maximum),i.exclusiveMaximum!==void 0&&q(t,`exclusiveMaximum`,i.exclusiveMaximum),i.multipleOf!==void 0&&lo(t,i.multipleOf),i.format!==void 0&&(t.format??=i.format,i.format.includes(`int`)&&(t.isInt=!0)),i.mime&&fo(t,i.mime);for(let e of i.patterns??[])uo(t,e);return t}var vo={guid:`uuid`,url:`uri`,datetime:`date-time`,json_string:`json-string`,regex:``},yo=new Map([[Mr,yn],[Pr,bn]]),bo=e=>yo.get(e)??e,xo=(e,t,n,r)=>{let i=n;i.type=`string`;let{minimum:a,maximum:o,format:s,patterns:c,contentEncoding:l,laxFormat:u}=J(e);if(typeof a==`number`&&(i.minLength=a),typeof o==`number`&&(i.maxLength=o),s&&(i.format=vo[s]??s,i.format===``&&delete i.format,(s===`time`||u)&&delete i.format),l&&(i.contentEncoding=l),c&&c.size>0){let e=[...c].map(bo);e.length===1?i.pattern=e[0].source:e.length>1&&(i.allOf=[...e.map(e=>({...t.target===`draft-07`||t.target===`draft-04`||t.target===`openapi-3.0`?{type:`string`}:{},pattern:e.source}))])}},So=(e,t,n,r)=>{let i=n,{minimum:a,maximum:o,multipleOf:s,exclusiveMaximum:c,exclusiveMinimum:l,isInt:u}=J(e);i.type=u?`integer`:`number`;let d=typeof l==`number`&&l>=(a??-1/0),f=typeof c==`number`&&c<=(o??1/0),p=t.target===`draft-04`||t.target===`openapi-3.0`;if(d?p?(i.minimum=l,i.exclusiveMinimum=!0):i.exclusiveMinimum=l:typeof a==`number`&&(i.minimum=a),f?p?(i.maximum=c,i.exclusiveMaximum=!0):i.exclusiveMaximum=c:typeof o==`number`&&(i.maximum=o),s){let n=new Set;for(let a of s)Number.isFinite(a)&&a!==0?n.add(Math.abs(a)):U(e,t,i,r,`A multipleOf divisor of ${a} cannot be represented in JSON Schema`);let[a,...o]=n;a!==void 0&&(i.multipleOf=a),o.length&&(i.allOf=[...i.allOf??[],...o.map(e=>({multipleOf:e}))])}},Co=(e,t,n,r)=>{n.not={}},wo=(e,t,n,r)=>{let i=e._zod.def,a=Ce(i.entries);a.length===0?n.not={}:(a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),n.enum=a)},To=(e,t,n,r)=>{U(e,t,n,r,`Custom types cannot be represented in JSON Schema`)},Eo=(e,t,n,r)=>{U(e,t,n,r,`Transforms cannot be represented in JSON Schema`)},Do=(e,t,n,r)=>{let i=n,a=e._zod.def,{minimum:o,maximum:s}=J(e);typeof o==`number`&&(i.minItems=o),typeof s==`number`&&(i.maxItems=s),i.type=`array`,i.items=W(a.element,t,{...r,path:[...r.path,`items`]})};function Oo(e){let t=e._zod.def;return t.type===`pipe`&&t.in._zod.traits.has(`$ZodTransform`)?Oo(t.out):t.type===`catch`?Oo(t.innerType):e._zod.optin}var ko=(e,t,n,r)=>{let i=n,a=e._zod.def,o=a.shape;if(Object.getOwnPropertySymbols(o).length&&U(e,t,i,r,`Symbol keys cannot be represented in JSON Schema`))return;i.type=`object`,i.properties={};for(let e in o)_(i.properties,e,W(o[e],t,{...r,path:[...r.path,`properties`,e]}));let s=[];for(let e of Object.keys(o)){let n=a.shape[e];(t.io===`input`?Oo(n)===void 0:n._zod.optout===void 0)&&s.push(e)}s.length>0&&(i.required=s),a.catchall?._zod.def.type===`never`?i.additionalProperties=!1:a.catchall?a.catchall&&(i.additionalProperties=W(a.catchall,t,{...r,path:[...r.path,`additionalProperties`]})):t.io===`output`&&(i.additionalProperties=!1)},Ao=(e,t,n,r)=>{let i=e._zod.def,a=i.inclusive===!1,o=i.options.map((e,n)=>W(e,t,{...r,path:[...r.path,a?`oneOf`:`anyOf`,n]}));a?n.oneOf=o:n.anyOf=o},jo=(e,t,n,r)=>{let i=e._zod.def,a=W(i.left,t,{...r,path:[...r.path,`allOf`,0]}),o=W(i.right,t,{...r,path:[...r.path,`allOf`,1]}),s=e=>`allOf`in e&&Object.keys(e).length===1,c=[...s(a)?a.allOf:[a],...s(o)?o.allOf:[o]];n.allOf=c,t.intersections.push(c)},Mo=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`array`;let o=t.target===`draft-2020-12`?`prefixItems`:`items`,s=t.target===`draft-2020-12`||t.target===`openapi-3.0`?`items`:`additionalItems`,c=a.items.map((e,n)=>W(e,t,{...r,path:[...r.path,o,n]})),l=a.rest?W(a.rest,t,{...r,path:[...r.path,s,...t.target===`openapi-3.0`?[a.items.length]:[]]}):null,u=a.items.length;for(;u>0;){let e=a.items[u-1];if(!(t.io===`input`?Oo(e)!==void 0:e._zod.optout===`optional`))break;u--}let d=a.items.length,f=!a.rest;t.target===`draft-2020-12`?(i.prefixItems=c,f?i.items=!1:l&&(i.items=l),u>0&&(i.minItems=u),f&&(i.maxItems=d)):t.target===`openapi-3.0`?(i.items={anyOf:c},l&&i.items.anyOf.push(l),u>0&&(i.minItems=u),f&&(i.maxItems=d)):(i.items=c,f?i.additionalItems=!1:l&&(i.additionalItems=l),u>0&&(i.minItems=u),f&&(i.maxItems=d));let{minimum:p,maximum:m}=J(e);typeof p==`number`&&(i.minItems=p),typeof m==`number`&&(i.maxItems=m)},No=(e,t,n,r)=>{let i=e._zod.def,a=W(i.innerType,t,r),o=t.seen.get(e);t.target===`openapi-3.0`?(o.ref=i.innerType,n.nullable=!0):n.anyOf=[a,{type:`null`}]},Po=(e,t,n,r)=>{let i=e._zod.def;W(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},Fo=Symbol();function Io(e,t,n,r,i){let a=!1,o=JSON.stringify(e,(e,t)=>typeof t==`bigint`?(a=!0,null):t);return a?(U(t,n,r,i,`BigInt defaults cannot be represented in JSON Schema`),Fo):JSON.parse(o)}var Lo=(e,t,n,r)=>{let i=e._zod.def;W(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o=Io(i.defaultValue,e,t,n,r);o!==Fo&&(n.default=o)},Ro=(e,t,n,r)=>{let i=e._zod.def;W(i.innerType,t,r);let a=t.seen.get(e);if(a.ref=i.innerType,t.io!==`input`)return;let o=Io(i.defaultValue,e,t,n,r);o!==Fo&&(n._prefault=o)},zo=(e,t,n,r)=>{let i=e._zod.def;W(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o;try{o=i.catchValue(void 0)}catch{U(e,t,n,r,`Dynamic catch values are not supported in JSON Schema`);return}n.default=o},Bo=(e,t,n,r)=>{let i=e._zod.def,a=i.in._zod.traits.has(`$ZodTransform`),o=t.io===`input`?a?i.out:i.in:i.out;W(o,t,r);let s=t.seen.get(e);s.ref=o},Vo=(e,t,n,r)=>{let i=e._zod.def;W(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.readOnly=!0},Ho=(e,t,n,r)=>{let i=e._zod.def;W(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},Uo=new WeakSet([Object.prototype,Error.prototype]);function Wo(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!1,get(){let e=n(this);return Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0})}})}var Y=j(`ZodError`,(e,t)=>{At.init(e,t),e.name=`ZodError`;let n=Object.getPrototypeOf(e);Uo.has(n)||(Uo.add(n),Wo(n,`format`,e=>t=>Nt(e,t)),Wo(n,`flatten`,e=>t=>Mt(e,t)),Wo(n,`addIssue`,e=>t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,Te,2)}),Wo(n,`addIssues`,e=>t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,Te,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},void 0,{Parent:Error}),Go=Lt(Y),Ko=Rt(Y),qo=zt(Y),Jo=Vt(Y),Yo=qt(Y),Xo=Jt(Y),Zo=Yt(Y),Qo=Xt(Y),$o=Zt(Y),es=Qt(Y),ts=$t(Y),ns=en(Y);function rs(){N.localeError||P(Wi())}function is(){N.memoizer||P({memoizer:Vi()})}var X=j(`ZodType`,(e,t)=>(rs(),I.init(e,t),e.def=t,e.type=t.type,e),{check(...e){let t=this.def;return this.clone(b(t,{checks:[...t.checks??[],...e.map(e=>typeof e==`function`?{_zod:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,t){return S(this,e,t)},brand(){return this},register(e,t){return e.add(this,t),this},refine(e,t){return this.check(bc(e,t))},superRefine(e,t){return this.check(xc(e,t))},overwrite(e){return this.check(V(e))},optional(){return nc(this)},exactOptional(){return ic(this)},nullable(){return oc(this)},nullish(){return nc(oc(this))},nonoptional(e){return fc(this,e)},array(){return Bs(this)},or(e){return Ks([this,e])},and(e){return Js(this,e)},transform(e){return gc(this,ec(e))},default(e){return cc(this,e)},prefault(e){return uc(this,e)},catch(e){return mc(this,e)},pipe(e){return gc(this,e)},readonly(){return vc(this)},describe(e){let t=this.clone();return B.add(t,{description:e}),t},meta(...e){if(e.length===0)return B.get(this);let t=this.clone();return B.add(t,e[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e,...t){return t.length===0?e(this):e(this,...t)},get"~standard"(){return dt(this,`~standard`,{...er(this),jsonSchema:{input:so(this,`input`),output:so(this,`output`)}})},set"~standard"(e){O(this,`~standard`,e)},parse:function e(t,n){return Go(this,t,n,{callee:e})},parseAsync:async function e(t,n){return await Ko(this,t,n,{callee:e})},safeParse(e,t){return qo(this,e,t)},async safeParseAsync(e,t){return Jo(this,e,t)},get spa(){return this?.safeParseAsync},set spa(e){O(this,`spa`,e)},validate(e,t){return Wt(this,e,t)},validateAsync(e,t){return Kt(this,e,t)},encode:function e(t,n){return Yo(this,t,n,{callee:e})},decode:function e(t,n){return Xo(this,t,n,{callee:e})},encodeAsync:async function e(t,n){return await Zo(this,t,n,{callee:e})},decodeAsync:async function e(t,n){return await Qo(this,t,n,{callee:e})},safeEncode(e,t){return $o(this,e,t)},safeDecode(e,t){return es(this,e,t)},async safeEncodeAsync(e,t){return ts(this,e,t)},async safeDecodeAsync(e,t){return ns(this,e,t)},toJSONSchema(e){return oo(this,{})(e)},get description(){return B.get(this)?.description},get _def(){return this._zod.def}}),as=j(`_ZodString`,(e,t)=>{tr.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>xo(e,t,n,r)},ft({format:e=>J(e).format??null,minLength:e=>J(e).minimum??null,maxLength:e=>J(e).maximum??null},{regex(...e){return this.check(Fa(...e))},includes(...e){return this.check(Ra(...e))},startsWith(...e){return this.check(za(...e))},endsWith(...e){return this.check(Ba(...e))},min(...e){return this.check(Na(...e))},max(...e){return this.check(Ma(...e))},length(...e){return this.check(Pa(...e))},nonempty(...e){return this.check(Na(1,...e))},lowercase(e){return this.check(Ia(e))},uppercase(e){return this.check(La(e))},trim(){return this.check(Ha())},normalize(...e){return this.check(Va(...e))},toLowerCase(){return this.check(Ua())},toUpperCase(){return this.check(Wa())},slugify(){return this.check(Ga())}})),os=j(`ZodString`,(e,t)=>{tr.init(e,t),as.init(e,t)},{email(e){return this.check(Xi(fs,e))},url(e){return this.check(na(hs,e))},jwt(e){return this.check(_a(As,e))},emoji(e){return this.check(ra(gs,e))},guid(e){return this.check(Zi(ps,e))},uuid(e){return this.check(Qi(ms,e))},uuidv4(e){return this.check($i(ms,e))},uuidv6(e){return this.check(ea(ms,e))},uuidv7(e){return this.check(ta(ms,e))},nanoid(e){return this.check(ia(_s,e))},cuid(e){return this.check(aa(vs,e))},cuid2(e){return this.check(oa(ys,e))},ulid(e){return this.check(sa(bs,e))},base64(e){return this.check(ma(Ds,e))},base64url(e){return this.check(ha(Os,e))},xid(e){return this.check(ca(xs,e))},ksuid(e){return this.check(la(Ss,e))},ipv4(e){return this.check(ua(Cs,e))},ipv6(e){return this.check(da(ws,e))},cidrv4(e){return this.check(fa(Ts,e))},cidrv6(e){return this.check(pa(Es,e))},e164(e){return this.check(ga(ks,e))},datetime(e){return this.check(va(cs,e))},date(e){return this.check(ya(ls,e))},time(e){return this.check(ba(us,e))},duration(e){return this.check(xa(ds,e))}});function ss(e){return Yi(os,e)}var Z=j(`ZodStringFormat`,(e,t)=>{L.init(e,t),as.init(e,t)}),cs=j(`ZodISODateTime`,(e,t)=>{br.init(e,t),Z.init(e,t)}),ls=j(`ZodISODate`,(e,t)=>{xr.init(e,t),Z.init(e,t)}),us=j(`ZodISOTime`,(e,t)=>{Sr.init(e,t),Z.init(e,t)}),ds=j(`ZodISODuration`,(e,t)=>{Cr.init(e,t),Z.init(e,t)}),fs=j(`ZodEmail`,(e,t)=>{ir.init(e,t),Z.init(e,t)}),ps=j(`ZodGUID`,(e,t)=>{nr.init(e,t),Z.init(e,t)}),ms=j(`ZodUUID`,(e,t)=>{rr.init(e,t),Z.init(e,t)}),hs=j(`ZodURL`,(e,t)=>{fr.init(e,t),Z.init(e,t)}),gs=j(`ZodEmoji`,(e,t)=>{pr.init(e,t),Z.init(e,t)}),_s=j(`ZodNanoID`,(e,t)=>{mr.init(e,t),Z.init(e,t)}),vs=j(`ZodCUID`,(e,t)=>{hr.init(e,t),Z.init(e,t)}),ys=j(`ZodCUID2`,(e,t)=>{gr.init(e,t),Z.init(e,t)}),bs=j(`ZodULID`,(e,t)=>{_r.init(e,t),Z.init(e,t)}),xs=j(`ZodXID`,(e,t)=>{vr.init(e,t),Z.init(e,t)}),Ss=j(`ZodKSUID`,(e,t)=>{yr.init(e,t),Z.init(e,t)}),Cs=j(`ZodIPv4`,(e,t)=>{wr.init(e,t),Z.init(e,t)}),ws=j(`ZodIPv6`,(e,t)=>{Dr.init(e,t),Z.init(e,t)}),Ts=j(`ZodCIDRv4`,(e,t)=>{Or.init(e,t),Z.init(e,t)}),Es=j(`ZodCIDRv6`,(e,t)=>{Ar.init(e,t),Z.init(e,t)}),Ds=j(`ZodBase64`,(e,t)=>{Nr.init(e,t),Z.init(e,t)}),Os=j(`ZodBase64URL`,(e,t)=>{Ir.init(e,t),Z.init(e,t)}),ks=j(`ZodE164`,(e,t)=>{Lr.init(e,t),Z.init(e,t)}),As=j(`ZodJWT`,(e,t)=>{zr.init(e,t),Z.init(e,t)}),js=j(`ZodNumber`,(e,t)=>{Br.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>So(e,t,n,r),e.isFinite=!0},ft({minValue:e=>{let{minimum:t,exclusiveMinimum:n}=J(e);return Math.max(t??-1/0,n??-1/0)},maxValue:e=>{let{maximum:t,exclusiveMaximum:n}=J(e);return Math.min(t??1/0,n??1/0)},isInt:e=>{let{isInt:t,multipleOf:n}=J(e);return!!t||!!n?.some(Number.isSafeInteger)},format:e=>J(e).format??null},{gt(e,t){return this.check(ka(e,t))},gte(e,t){return this.check(Aa(e,t))},min(e,t){return this.check(Aa(e,t))},lt(e,t){return this.check(Da(e,t))},lte(e,t){return this.check(Oa(e,t))},max(e,t){return this.check(Oa(e,t))},int(e){return this.check(Ps(e))},safe(e){return this.check(Ps(e))},positive(e){return this.check(ka(0,e))},nonnegative(e){return this.check(Aa(0,e))},negative(e){return this.check(Da(0,e))},nonpositive(e){return this.check(Oa(0,e))},multipleOf(e,t){return this.check(ja(e,t))},step(e,t){return this.check(ja(e,t))},finite(){return this}}));function Ms(e){return Sa(js,e)}var Ns=j(`ZodNumberFormat`,(e,t)=>{Vr.init(e,t),js.init(e,t)});function Ps(e){return wa(Ns,e)}var Fs=j(`ZodUnknown`,(e,t)=>{Hr.init(e,t),X.init(e,t),e._zod.processJSONSchema=(e,t,n)=>void 0});function Is(){return Ta(Fs)}var Ls=j(`ZodNever`,(e,t)=>{Ur.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Co(e,t,n,r)});function Rs(e){return Ea(Ls,e)}var zs=j(`ZodArray`,(e,t)=>{is(),qr.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Do(e,t,n,r),e.element=t.element},{min(e,t){return this.check(Na(e,t))},nonempty(e){return this.check(Na(1,e))},max(e,t){return this.check(Ma(e,t))},length(e,t){return this.check(Pa(e,t))},unwrap(){return this.element}});function Bs(e,t){return Ka(zs,e,t)}var Vs=j(`ZodObject`,(e,t)=>{is(),$r.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ko(e,t,n,r),_t(e,`shape`,e=>e._zod.def.shape,!1)},{keyof(){return Qs(Object.keys(this._zod.def.shape))},catchall(e){return this.clone(b(this._zod.def,{catchall:e}))},passthrough(){return this.clone(b(this._zod.def,{catchall:Is()}))},loose(){return this.clone(b(this._zod.def,{catchall:Is()}))},strict(){return this.clone(b(this._zod.def,{catchall:Rs()}))},strip(){return this.clone(b(this._zod.def,{catchall:void 0}))},extend(e){return Xe(this,e)},safeExtend(e){return Qe(this,e)},merge(e){return $e(this,e)},pick(e){return qe(this,e)},omit(e){return Ye(this,e)},partial(...e){return et(tc,this,e[0])},exactPartial(...e){return et(rc,this,e[0],`exactPartial`)},required(...e){return tt(dc,this,e[0])}});function Hs(e,t){return new Vs({type:`object`,shape:e??{},...C(t)})}function Us(e,t){return new Vs({type:`object`,shape:e,catchall:Rs(),...C(t)})}function Ws(e,t){return new Vs({type:`object`,shape:e,catchall:Is(),...C(t)})}var Gs=j(`ZodUnion`,(e,t)=>{ti.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Ao(e,t,n,r),e.options=t.options});function Ks(e,t){return new Gs({type:`union`,options:e,...C(t)})}var qs=j(`ZodIntersection`,(e,t)=>{ni.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>jo(e,t,n,r)});function Js(e,t){return new qs({type:`intersection`,left:e,right:t})}var Ys=j(`ZodTuple`,(e,t)=>{is(),ai.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Mo(e,t,n,r)},{rest(e){return this.clone({...this._zod.def,rest:e})},partial(){let e=this._zod.def;if(e.checks?.length)throw Error(`.partial() cannot be used on tuple schemas containing refinements`);return this.clone({...e,items:e.items.map(e=>new tc({type:`optional`,innerType:e}))})}});function Xs(e,t,n){let r=t instanceof I;return new Ys({type:`tuple`,items:e,rest:r?t:null,...C(r?n:t)})}var Zs=j(`ZodEnum`,(e,t)=>{li.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>wo(e,t,n,r),e.enum=t.entries,e.options=[...e._zod.values];let n=new Set(Object.keys(t.entries));e.extract=(e,r)=>{let i={};for(let r of e)if(n.has(r))i[r]=t.entries[r];else throw Error(`Key ${r} not found in enum`);return new Zs({...t,checks:[],...C(r),entries:i})},e.exclude=(e,r)=>{let i={...t.entries};for(let t of e)if(n.has(t))delete i[t];else throw Error(`Key ${t} not found in enum`);return new Zs({...t,checks:[],...C(r),entries:i})}});function Qs(e,t){return new Zs({type:`enum`,entries:Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e,...C(t)})}var $s=j(`ZodTransform`,(e,t)=>{is(),ui.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Eo(e,t,n,r),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new wt(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(D(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,`input`in t||(t.input=n.value),t.inst??=e,n.issues.push(D(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n)):(n.value=i,n)}});function ec(e){return new $s({type:`transform`,transform:e})}var tc=j(`ZodOptional`,(e,t)=>{fi.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Ho(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function nc(e){return new tc({type:`optional`,innerType:e})}var rc=j(`ZodExactOptional`,(e,t)=>{pi.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Ho(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function ic(e){return new rc({type:`optional`,innerType:e})}var ac=j(`ZodNullable`,(e,t)=>{mi.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>No(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function oc(e){return new ac({type:`nullable`,innerType:e})}var sc=j(`ZodDefault`,(e,t)=>{hi.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Lo(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function cc(e,t){return new sc({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():Be(t)}})}var lc=j(`ZodPrefault`,(e,t)=>{_i.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Ro(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function uc(e,t){return new lc({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():Be(t)}})}var dc=j(`ZodNonOptional`,(e,t)=>{vi.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Po(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function fc(e,t){return new dc({type:`nonoptional`,innerType:e,...C(t)})}var pc=j(`ZodCatch`,(e,t)=>{xi.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>zo(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function mc(e,t){return new pc({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:yt(t)})}var hc=j(`ZodPipe`,(e,t)=>{Si.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Bo(e,t,n,r),e.in=t.in,e.out=t.out});function gc(e,t){return new hc({type:`pipe`,in:e,out:t})}var _c=j(`ZodReadonly`,(e,t)=>{wi.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Vo(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function vc(e){return new _c({type:`readonly`,innerType:e})}var yc=j(`ZodCustom`,(e,t)=>{Ei.init(e,t),X.init(e,t),e._zod.processJSONSchema=(t,n,r)=>To(e,t,n,r)});function bc(e,t={}){return qa(yc,e,t)}function xc(e,t){return Ja(e,t)}var Sc=e=>{let t=e.blocks;return{role:t.jointPot,tone:t.jointPotTone,mix:t.jointPotMix,top:t.jointPotTop,shade:t.jointPotShade}},Cc=e=>e.blocks.jointPot>=0,wc=e=>e.blocks.otherRoles!==1,Tc=e=>Cc(e)||wc(e);function Ec(e,t,n){let r=Sc(e),i=`paint tuning for "${n}", blocks: joint pot`,{min:a,max:o}=e.tones;if(!Number.isInteger(r.role)||r.role<-1||r.role>=t)throw Error(`${i} role ${r.role} is not a row of its palette (0 to ${t-1}, or -1 for none)`);if(r.tone<a||r.tone>o)throw Error(`${i} tone ${r.tone} is outside ${a}..${o}`);let s=[r.mix,r.top,r.shade];if(s.some(e=>!(e>=0&&e<=1)))throw Error(`${i} shares must be 0 to 1, got ${s.join(`, `)}`);let c=e.blocks.otherRoles;if(!(c>=0&&c<=1))throw Error(`paint tuning for "${n}", blocks: otherRoles must be 0 to 1, got ${c}`)}var Dc=e=>e.cobbles.rimAround!==0;function Oc(e,t){let n=e.cobbles.rimAround;if(!(n>=0&&n<=1))throw Error(`paint tuning for "${t}", cobbles: rimAround must be 0 to 1, got ${n}`)}var kc=e=>e.shadow.skipRole>=0;function Ac(e,t,n){let r=e.shadow.skipRole;if(!(r===-1||Number.isInteger(r)&&r>=0&&r<t))throw Error(`paint tuning for "${n}", shadow: skipRole must be -1 or a palette row below ${t}, got ${r}`)}var jc=Object.freeze([`light`,`form`,`blocks`,`slabs`,`cobbles`,`scallop`,`canopy`,`grass`,`marks`,`trail`,`wet`,`shadow`,`water`]),Mc=Ms().refine(Number.isFinite,`must be a finite number`);function Nc(e){if(typeof e==`number`)return Mc;if(Array.isArray(e)&&e.length===3)return Xs([Mc,Mc,Mc]);throw Error(`config value ${String(e)} cannot be tuned`)}function Pc(e){return Us(Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Nc(t).optional()])))}var Fc=Us({...Object.fromEntries(jc.map(e=>[e,Pc(g[e]).optional()])),trailRole:Qs(ie).optional()});function Ic(e,t){let n=Fc.safeParse(e);if(!n.success)throw Error(`paint tuning for "${t}" is invalid:\n${Ft(n.error)}`);return e}function Lc(e,t){if(!e)return g;Ic(e,t);let n=jc.filter(t=>e[t]!==void 0);if(n.length===0)return g;let r=n.reduce((t,n)=>({...t,[n]:{...g[n],...e[n]}}),{...g});return ae(r)}var Rc=ae({id:`gate`,palette:le,camera:xe}),Q=ss().regex(/^#[0-9a-fA-F]{6}$/,`must be a #rrggbb colour`),zc=Us({"-3":Q,"-2":Q,"-1":Q,0:Q,1:Q,2:Q,3:Q}),Bc=Us(Object.fromEntries(ie.map(e=>[e,zc.optional()]))),Vc=Ws({pitch:Ms().refine(Number.isFinite),yaw:Ms().refine(Number.isFinite)});function Hc(e,t=`garden`){let n=Bc.safeParse(e);if(!n.success)throw Error(`palette for "${t}" is invalid:\n${Ft(n.error)}`);return ae(n.data)}function Uc(e){if(!re.includes(e.id))throw Error(`Unknown garden "${String(e.id)}" in paint profile`);let t=Vc.safeParse(e.camera);if(!t.success)throw Error(`paint profile "${e.id}" has an invalid camera:\n${Ft(t.error)}`);let n=ye(Hc(e.palette,e.id),he),r=Lc(e.tuning,e.id);ve(r,n.length,e.id),Ec(r,n.length,e.id),Oc(r,e.id),Ac(r,n.length,e.id);let i=oe(e.tuning?.trailRole??`moss`);if(i>=n.length)throw Error(`paint profile "${e.id}": trail role "${e.tuning?.trailRole}" is not in its palette`);return Object.freeze({id:e.id,config:r,table:n,roleCount:n.length,basis:ae(be(e.camera)),trailRole:i,hex:fe(n,e.id)})}var Wc=Uc(Rc);function Gc(e){return!e||e===Rc?Wc:Uc(e)}var Kc=e=>{let t=String(e);return/[.e]/.test(t)?t:`${t}.0`},qc=e=>`vec4(${e.map(Kc).join(`, `)})`,Jc={blocks:`BLOCK`,cobbles:`COBBLE`};function Yc(e){let t=[`blocks`,`cobbles`].filter(t=>ce(e,t)).flatMap(t=>{let n=ge(e,t),r=Jc[t],i=t===`blocks`?e.accentSalt.block:e.accentSalt.cobble;return[`#define ${r}_ACCENT 1`,`#define ${r}_ACCENT_POTS ${qc([n.roleA,n.toneA,n.roleB,n.toneB])}`,`#define ${r}_ACCENT_SHARES ${qc(n.shares)}`,`#define ${r}_ACCENT_SALT ${Kc(i)}`]});return t.length===0?``:[`#define ACCENT 1`,...t].join(`
`)}var Xc=e=>ce(e,`blocks`)||ce(e,`cobbles`),Zc=[{at:`  float inside(float d) {`,text:`
  varying vec4 vAccent;
  float gAccentLit = 1.0;
  float gAccentRole = -1.0;
  float gAccentShift = 0.0;
  float gAccentBody = 0.0;
  /** pots: (role A, tone A, role B, tone B); shares: (lit A, lit B, shaded A, shaded B), or the surface's own. */
  void accentPick(vec2 id, float salt, vec4 pots, vec4 shares, float base) {
    vec4 s = vAccent.w < 0.0 ? vec4(vAccent.xyz, vAccent.w + ${Kc(2)}) : shares;
    float shareA = mix(s.z, s.x, gAccentLit);
    float shareB = mix(s.w, s.y, gAccentLit);
    float h = hash12(vec2(id.x + salt, id.y));
    if (h < shareA && pots.x >= 0.0) {
      gAccentRole = pots.x;
      gAccentShift = pots.y - base;
    } else if (h < shareA + shareB && pots.z >= 0.0) {
      gAccentRole = pots.z;
      gAccentShift = pots.w - base;
    }
  }
  float accentKnee(float tone) {
    float room = FORM_FLOOR_KNEE - TONE_MIN;
    return tone < FORM_FLOOR_KNEE ? FORM_FLOOR_KNEE - room * (1.0 - exp((tone - FORM_FLOOR_KNEE) / room)) : tone;
  }
`,before:!0},{at:`    return vec4(tone, max(1.0 - inside(d), knot) * mortar, pale, 0.0);`,before:!0,text:`    #if PATTERN == 1 && defined(BLOCK_ACCENT)
      accentPick(id, BLOCK_ACCENT_SALT, BLOCK_ACCENT_POTS, BLOCK_ACCENT_SHARES, vTone);
      gAccentBody = 1.0 - max(1.0 - inside(d), knot) * mortar;
    #endif`},{at:`    return vec4(shade, 0.0, 0.0, 0.0);`,before:!0,text:`    #ifdef COBBLE_ACCENT
      accentPick(owner, COBBLE_ACCENT_SALT, COBBLE_ACCENT_POTS, COBBLE_ACCENT_SHARES, vTone + tone);
      gAccentBody = body;
    #endif`},{at:`    vec4 drawn = drawPattern(`,text:`    gAccentLit = lit;`,before:!0},{at:`    float knee = FORM_FLOOR_KNEE;`,text:`    float accentTone = tone;`,before:!0},{at:`    vec3 color = toneColor(role, tone);`,text:`    if (gAccentRole >= 0.0 && abs(role - ROLE_STONE) < 0.5) {
      color = mix(color, toneColor(gAccentRole, accentKnee(accentTone + gAccentShift)), gAccentBody);
    }`}],Qc=[{at:`  void main() {`,text:`  #if PATTERN == 1 || PATTERN == 2\n    attribute vec4 ${me};\n  #endif\n  varying vec4 vAccent;`,before:!0},{at:`    gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);`,text:`    #if PATTERN == 1 || PATTERN == 2\n      vAccent = ${me};\n    #else\n      vAccent = vec4(0.0, 0.0, 0.0, 1.0);\n    #endif`,before:!0}];function $c(e,t,n){return t.reduce((e,{at:t,text:r,before:i})=>{let a=e.indexOf(t);if(a<0||e.indexOf(t,a+1)>=0)throw Error(`accent: the ${n} shader must hold "${t.trim()}" exactly once`);return i?`${e.slice(0,a)}${r}\n${e.slice(a)}`:`${e.slice(0,a+t.length)}\n${r}${e.slice(a+t.length)}`},e)}var el=e=>$c(e,Zc,`fragment`),tl=e=>$c(e,Qc,`vertex`),nl=e=>{let t=String(e);return/[.e]/.test(t)?t:`${t}.0`},rl=e=>Dc(e)?`#define COBBLE_RIM_AROUND ${nl(e.cobbles.rimAround)}`:``,il=`    float lowerLeft = smoothstep(0.2, 0.7, out2.y);`,al=`    lowerLeft = mix(COBBLE_RIM_AROUND, 1.0, lowerLeft);`;function ol(e){let t=e.indexOf(il);if(t<0||e.indexOf(il,t+1)>=0)throw Error(`cobble rim: the fragment shader must hold "${il.trim()}" exactly once`);let n=t+51;return`${e.slice(0,n)}\n${al}${e.slice(n)}`}var sl=e=>{let t=String(e);return/[.e]/.test(t)?t:`${t}.0`};function cl(e){let t=Sc(e);return[...Cc(e)?[`#define BLOCK_JOINT_POT vec4(${[t.role,t.tone,t.mix,t.top].map(sl).join(`, `)})`,`#define BLOCK_JOINT_POT_SHADE ${sl(t.shade)}`]:[],...wc(e)?[`#define BLOCK_OTHER_ROLES ${sl(e.blocks.otherRoles)}`]:[]].join(`
`)}var ll=`    vec3 color = toneColor(role, tone);`,ul=`    #if PATTERN == 1 || PATTERN == 3
      if (abs(role - ROLE_STONE) < 0.5) {
        float jointPotShare = BLOCK_JOINT_POT.z * mix(1.0, BLOCK_JOINT_POT_SHADE, shaded) * mix(1.0, BLOCK_JOINT_POT.w, topFace);
        vec3 jointPotColor = toneColor(BLOCK_JOINT_POT.x, BLOCK_JOINT_POT.y + form + shadowTone);
        color = mix(color, jointPotColor, clamp(drawn.y, 0.0, 1.0) * jointPotShare);
      }
    #endif`,dl=`    float tone = face + hand * uHand + drawn.x;`,fl=`    #if PATTERN == 1 || PATTERN == 3
      drawn.xyz *= abs(role - ROLE_STONE) < 0.5 ? 1.0 : BLOCK_OTHER_ROLES;
    #endif`;function pl(e,t,n,r){let i=e.indexOf(t);if(i<0||e.indexOf(t,i+1)>=0)throw Error(`joint pot: the fragment shader must hold "${t.trim()}" exactly once`);let a=r?i:i+t.length;return r?`${e.slice(0,a)}${n}\n${e.slice(a)}`:`${e.slice(0,a)}\n${n}${e.slice(a)}`}function ml(e,t){let n=Cc(t)?pl(e,ll,ul,!1):e;return wc(t)?pl(n,dl,fl,!0):n}var hl=e=>kc(e)?`#define SHADOW_SKIP_ROLE ${e.shadow.skipRole}.0`:``,gl=`      shadow = shadowAmount(vWorld, n);`,_l=`      if (abs(role - SHADOW_SKIP_ROLE) < 0.5) shadow = 0.0;`;function vl(e){let t=e.indexOf(gl);if(t<0||e.indexOf(gl,t+1)>=0)throw Error(`shadow skip: the fragment shader must hold "${gl.trim()}" exactly once`);let n=t+39;return`${e.slice(0,n)}\n${_l}${e.slice(n)}`}var yl=new Set([`otherRoles`,`rimAround`,`skipRole`]),$=e=>{if(!Number.isFinite(e))throw Error(`Cannot write ${e} as a GLSL float`);let t=String(e),n=/[.e]/.test(t)?t:`${t}.0`;return e<0?`(${n})`:n};function bl(e,t){return Object.entries(t).filter(e=>typeof e[1]==`number`&&!e[0].startsWith(`accent`)&&!e[0].startsWith(`jointPot`)&&!yl.has(e[0])).map(([t,n])=>`#define ${e}_${t.replace(/[A-Z]/g,e=>`_${e}`).toUpperCase()} ${$(n)}`).join(`
`)}var xl=e=>[[`TONE`,e.tones],[`FORM`,e.form],[`RAGGED`,e.ragged],[`WASH`,e.wash],[`STROKES`,e.strokes],[`SCUFF`,e.scuff],[`GRAIN`,e.grain],[`MARK`,e.marks],[`BLOCK`,e.blocks],[`SLAB`,e.slabs],[`COBBLE`,e.cobbles],[`PLANK`,e.planks],[`SCALLOP`,e.scallop],[`CANOPY`,e.canopy],[`GRASS`,e.grass],[`CLOTH`,e.cloth],[`WATER`,e.water],[`WOBBLE`,e.wobble],[`SWAY`,e.sway],[`SHADOW`,e.shadow],[`TRAIL`,e.trail],[`WET`,e.wet],[`PAPER`,e.paper]],Sl=e=>`config`in e;function Cl(e){let t=e&&Sl(e)?e:Gc(e),n=t.config;return[`#define ROLE_COUNT ${$(t.roleCount)}`,`#define ROLE_WHITE ${$(ie.indexOf(`white`))}`,`#define ROLE_MOSS ${$(t.trailRole)}`,`#define ROLE_STONE ${$(ie.indexOf(`stone`))}`,`#define CLOTH_LIGHT normalize(vec3(${n.cloth.light.map($).join(`, `)}))`,`#define CLOTH_TICK_DIRECTION normalize(vec3(${n.cloth.tickDirection.map($).join(`, `)}))`,...Object.entries(Se).map(([e,t])=>`#define SALT_${e.toUpperCase()} ${$(t)}`),...xl(n).map(([e,t])=>bl(e,t)),...[Yc(n),cl(n),rl(n),hl(n)].filter(e=>e!==``)].join(`
`)}var wl=Cl(),Tl=`
  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  vec2 hash22(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xx + p3.yz) * p3.zy);
  }
  float hash13(vec3 p3) {
    p3 = fract(p3 * 0.1031);
    p3 += dot(p3, p3.zyx + 31.32);
    return fract((p3.x + p3.y) * p3.z);
  }
  float noise2(vec2 p) {
    vec2 i = floor(p);
    vec2 u = fract(p);
    u = u * u * (3.0 - 2.0 * u);
    float a = mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x);
    float b = mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x);
    return mix(a, b, u.y);
  }
  float noise3(vec3 p) {
    vec3 i = floor(p);
    vec3 u = fract(p);
    u = u * u * (3.0 - 2.0 * u);
    float a = mix(hash13(i), hash13(i + vec3(1.0, 0.0, 0.0)), u.x);
    float b = mix(hash13(i + vec3(0.0, 1.0, 0.0)), hash13(i + vec3(1.0, 1.0, 0.0)), u.x);
    float c = mix(hash13(i + vec3(0.0, 0.0, 1.0)), hash13(i + vec3(1.0, 0.0, 1.0)), u.x);
    float d = mix(hash13(i + vec3(0.0, 1.0, 1.0)), hash13(i + vec3(1.0, 1.0, 1.0)), u.x);
    return mix(mix(a, b, u.y), mix(c, d, u.y), u.z);
  }
  /** A smooth vector field in -1..1, the same for every vertex at the same point, so meshes stay closed. */
  vec3 noiseField(vec3 p) {
    return vec3(noise3(p), noise3(p + vec3(17.1, 3.3, 9.7)), noise3(p + vec3(5.9, 23.1, 1.3))) * 2.0 - 1.0;
  }
  mat2 turn2(float a) {
    float c = cos(a);
    float s = sin(a);
    return mat2(c, s, -s, c);
  }
`,El=`
  float gAA = 0.01;
  float inside(float d) {
    return 1.0 - smoothstep(-gAA, gAA, d);
  }
`,Dl=`
  uniform sampler2D uPalette;
  vec3 toneColor(float role, float tone) {
    float span = TONE_MAX - TONE_MIN;
    float column = clamp(tone, TONE_MIN, TONE_MAX) - TONE_MIN;
    return texture2D(uPalette, vec2((column + 0.5) / (span + 1.0), (role + 0.5) / ROLE_COUNT)).rgb;
  }
`,Ol=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,kl=`
  uniform sampler2D uSource;
  uniform float uGrain;
  varying vec2 vUv;
  void main() {
    vec3 color = texture2D(uSource, vUv).rgb;
    vec2 pixel = floor(gl_FragCoord.xy);
    if (hash12(pixel * 0.731 + 0.5) < PAPER_DENSITY * uGrain) {
      float dir = hash12(pixel.yx * 1.37 + 7.0) < 0.5 ? -1.0 : 1.0;
      color = clamp(color * (1.0 + dir * PAPER_STRENGTH), 0.0, 1.0);
    }
    gl_FragColor = vec4(color, 1.0);
  }
`,Al=e=>[e,Tl,kl].join(`
`),jl=Al(wl);function Ml(e=jl){let t=new l({name:`gouache:paper`,vertexShader:Ol,fragmentShader:e,uniforms:{uSource:{value:null},uGrain:{value:1}},depthTest:!1,depthWrite:!1}),n=new u(2,2),i=new ee,a=new r(n,t);a.frustumCulled=!1,i.add(a);let o=new te(-1,1,1,-1,0,1);return{material:t,present(e,n){t.uniforms.uSource.value=n,e.setRenderTarget(null),e.render(i,o)},dispose(){t.dispose(),n.dispose()}}}var Nl=new p().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);function Pl(e,t,n=g.shadow){let{margin:r}=n,i=Math.max(e.radius,.001),a=new te(-i,i,i,-i,.01,2*(i+r));return a.position.copy(t).normalize().multiplyScalar(i+r).add(e.center),a.up.set(0,1,0),Math.abs(t.clone().normalize().y)>.999&&a.up.set(0,0,1),a.lookAt(e.center),a.updateMatrixWorld(!0),a.updateProjectionMatrix(),a}function Fl(e,t){let n=new Map;e.traverse(e=>{let t=e.material;for(let e of Array.isArray(t)?t:t?[t]:[])n.has(e)||n.set(e,e.side)});for(let e of n.keys())e.side=2;try{t()}finally{for(let[e,t]of n)e.side=t}}function Il(t){let n=new d(t,t,{depthBuffer:!0,depthTexture:new e(t,t)});return n.texture.minFilter=i,n.texture.magFilter=i,n.texture.generateMipmaps=!1,n}function Ll(e,t=g.shadow){let n=null;return{bake(r,i){i.updateMatrixWorld(!0);let a=new m().setFromObject(i);if(e.uShadowOn.value=0,e.uShadowMap.value=null,a.isEmpty())return;let o=Pl(a.getBoundingSphere(new f),e.uShadowLight.value,t);n??=Il(t.size);let s=r.getRenderTarget();r.setRenderTarget(n),Fl(i,()=>r.render(i,o)),r.setRenderTarget(s),e.uShadowMatrix.value.copy(Nl).multiply(o.projectionMatrix).multiply(o.matrixWorldInverse),e.uShadowBias.value=t.bias/(o.far-o.near),e.uShadowSpread.value=t.soft/2/(o.right-o.left),e.uShadowTexelWorld.value=(o.right-o.left)/t.size,e.uShadowDepthScale.value=1/(o.far-o.near),e.uShadowMap.value=n.depthTexture,e.uShadowOn.value=1},dispose(){n?.depthTexture?.dispose(),n?.dispose(),n=null}}}var Rl=`
  float roundBox(vec2 q, vec2 halfSize, float radius) {
    vec2 d = abs(q) - halfSize + radius;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - radius;
  }
  float segment(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0));
  }
  float triangle(vec2 p, float r) {
    const float k = 1.7320508;
    p.x = abs(p.x) - r;
    p.y = p.y + r / k;
    if (p.x + k * p.y > 0.0) p = vec2(p.x - k * p.y, -k * p.x - p.y) / 2.0;
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
  }
  /** Picks the plane a surface faces most: floors use xz, walls use (along the wall, up). */
  vec2 planar(vec3 p, vec3 n) {
    vec3 a = abs(n);
    if (a.y >= a.x && a.y >= a.z) return p.xz;
    return a.x >= a.z ? vec2(p.z, p.y) : vec2(p.x, p.y);
  }
`,zl=`
  float blockTone(float index, float course) {
    float tone = (hash12(vec2(index + SALT_JITTER, course)) - 0.5) * 2.0 * BLOCK_JITTER;
    return hash12(vec2(index + SALT_DEEP, course)) < 1.0 / BLOCK_DEEP_EVERY ? tone + BLOCK_DEEP_TONE : tone;
  }
  float doodles(vec2 q, vec2 hs, vec2 id, float scale) {
    if (hash12(vec2(id.x + SALT_DOODLE, id.y)) >= 1.0 / BLOCK_DOODLE_EVERY) return 0.0;
    float count = 2.0 + floor(hash12(id + 4.4) * 3.0);
    float m = 0.0;
    for (int i = 0; i < 4; i++) {
      if (float(i) >= count) break;
      vec2 h = hash22(vec2(id.x * 7.0 + float(i), id.y + 0.5));
      vec2 c = (h - 0.5) * hs * 1.3;
      float a = hash12(h + 1.3) * 6.2832;
      vec2 dir = vec2(cos(a), sin(a)) * BLOCK_DOODLE_LENGTH * 0.5 * scale;
      m = max(m, inside(segment(q, c - dir, c + dir) - BLOCK_DOODLE_WIDTH * 0.5 * scale));
    }
    return m;
  }
  float chip(vec2 q, vec2 hs, vec2 id, float scale) {
    if (hash12(id + 6.1) >= 1.0 / BLOCK_CHIP_EVERY) return 0.0;
    vec2 c = (hash22(id + 2.9) - 0.5) * hs * 1.4;
    return inside(length(q - c) - BLOCK_CHIP_RADIUS * scale);
  }
  float jointAt(float k, float row) {
    return k + (hash12(vec2(k + SALT_SPLIT, row)) - 0.5) * 2.0 * BLOCK_SPLIT;
  }
  /**
   * Rounded blocks of irregular length (each course starts at a random offset and its joints sit at
   * jittered positions), per-block jitter, deep blocks, bevels, doodles, chips; a wandering joint mask
   * with a pale knot where joints meet. Mirrored in ../patterns.ts.
   */
  vec4 patternBlocks(vec2 uv, float scale, float lengthK, float courseK, float top) {
    float height = courseK * scale;
    float span = lengthK * scale;
    float row = floor(uv.y / height);
    float x = uv.x / span + hash12(vec2(row, SALT_COURSE));
    float k = floor(x);
    float index = x < jointAt(k, row) ? k - 1.0 : (x >= jointAt(k + 1.0, row) ? k + 1.0 : k);
    float lo = jointAt(index, row);
    float hi = jointAt(index + 1.0, row);
    vec2 id = vec2(index, row);
    vec2 size = vec2((hi - lo) * span, height);
    vec2 q = vec2((x - lo) * span, uv.y - row * height) - size * 0.5;
    float joint = mix(BLOCK_JOINT_MIN, BLOCK_JOINT_MAX, noise2(uv * 1.3 + 4.0)) * scale * mix(0.75, 1.3, hash12(vec2(row, 8.3))) * mix(1.0, BLOCK_JOINT_TOP_WIDTH, top);
    vec2 hs = size * 0.5 - joint * 0.5;
    float d = roundBox(q, hs, BLOCK_CORNER * scale) + (noise2(uv * 6.0) - 0.5) * 2.0 * BLOCK_JOINT_WAVE * scale
      + (noise2(uv * 40.0) - 0.5) * 2.0 * BLOCK_JOINT_BREAK * scale;
    float mortar = mix(BLOCK_COURSE_MORTAR, 1.0, hash12(vec2(row, 5.7)));
    vec2 corner = vec2(size.x * 0.5 * sign(q.x), size.y * 0.5 * sign(q.y));
    float knot = inside(length(q - corner) - BLOCK_KNOT * scale);
    float tone = blockTone(id.x, id.y);
    float upperLeft = min(hs.y - q.y, q.x + hs.x);
    float lowerRight = min(q.y + hs.y, hs.x - q.x);
    tone += BLOCK_BEVEL_LIGHT * (1.0 - smoothstep(0.0, BLOCK_BEVEL, upperLeft));
    tone += BLOCK_BEVEL_DEEP * (1.0 - smoothstep(0.0, BLOCK_BEVEL, lowerRight));
    tone += doodles(q, hs, id, scale) * BLOCK_DOODLE_TONE + chip(q, hs, id, scale) * BLOCK_CHIP_TONE;
    float pale = inside(abs(d + 0.03) - 0.012) * (1.0 - step(0.0, q.y));
    return vec4(tone, max(1.0 - inside(d), knot) * mortar, pale, 0.0);
  }
`,Bl=`
  /** How much the cobbles' frame squashes the picture horizontal: wide cells become square. */
  const float cobbleSquash = COBBLE_CELL_ACROSS / COBBLE_CELL_ALONG;
  /**
   * Ground to the cobbles' frame: picture units (x along the picture horizontal, y across, shortened as
   * the camera sees it), then x squashed by cobbleSquash so the wide cells become square. Cells are
   * found in the squashed frame, so their borders run mostly level and upright as on the plate rather
   * than in diagonal shards; distances are taken back to picture units, so gaps are even.
   */
  vec2 cobbleFrame(vec2 p) {
    vec2 t = turn2(0.785398) * p;
    return vec2(t.x * cobbleSquash, t.y * COBBLE_FORESHORTEN);
  }
  vec2 cobbleCentre(vec2 c, float cell) {
    return (c + 0.5 + (hash22(c + 1.3) - 0.5) * COBBLE_JITTER) * cell;
  }
  /** The cell of a jittered square grid nearest to s (squashed frame). */
  vec2 cobbleOwner(vec2 s, float cell) {
    vec2 ig = floor(s / cell);
    vec2 owner = ig;
    float best = 1e9;
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 c = ig + vec2(float(i), float(j));
        vec2 d = s - cobbleCentre(c, cell);
        if (dot(d, d) < best) { best = dot(d, d); owner = c; }
      }
    }
    return owner;
  }
  /**
   * Packed stones: signed distance in picture units (negative inside) from s to its owner's stone: the
   * owner's cell shrunk by half the gap, the corner between its two nearest borders rounded to radius
   * COBBLE_ROUND (exact on straight edges, so gaps stay the configured width). A border with normal n in
   * the squashed frame has normal (n.x * squash, n.y) in picture units.
   */
  float packedDistance(vec2 s, vec2 owner, float cell, float scale) {
    if (hash22(owner + vec2(SALT_ISLAND, 0.0)).x >= COBBLE_SHARE) return 1e3;
    vec2 o = cobbleCentre(owner, cell);
    float a = 1e3;
    float b = 1e3;
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        if (i == 0 && j == 0) continue;
        vec2 n = cobbleCentre(owner + vec2(float(i), float(j)), cell) - o;
        float border = dot(o + 0.5 * n - s, n) / length(vec2(n.x * cobbleSquash, n.y));
        b = border < a ? a : min(b, border);
        a = min(a, border);
      }
    }
    float r = COBBLE_ROUND * scale * mix(1.0 - COBBLE_ROUND_SPREAD, 1.0 + COBBLE_ROUND_SPREAD, hash12(owner + 2.2));
    vec2 inner = vec2(a, b) - COBBLE_GAP * 0.5 * scale;
    float d = min(-r, -inner.x) + length(max(r - inner, 0.0));
    return d + (noise2(s * 1.6 + owner * 5.0) - 0.5) * 2.0 * COBBLE_EDGE_NOISE * scale;
  }
  /** Pale ground packed with rounded stones of varied tone, thin pale gaps; a large mask leaves a little bare. */
  /** Darker speckles over the paving ground. */
  float speckles(vec2 p, float scale) {
    vec2 cell = floor(p / (COBBLE_SPECK_CELL * scale));
    if (hash12(cell + 7.7) >= COBBLE_SPECK_SHARE) return 0.0;
    vec2 at = (cell + 0.2 + 0.6 * hash22(cell + 3.9)) * COBBLE_SPECK_CELL * scale;
    float r = COBBLE_SPECK_RADIUS * scale * (0.6 + 0.8 * hash12(cell + 1.4));
    return inside(length((p - at) * vec2(1.0, 1.4)) - r) * COBBLE_SPECK_TONE;
  }
  /** Small pale pebbles on the paving ground, each with a slightly deeper underside. */
  float pebbles(vec2 p, float scale) {
    vec2 cell = floor(p / (COBBLE_PEBBLE_CELL * scale));
    if (hash12(cell + 9.3) >= COBBLE_PEBBLE_SHARE) return 0.0;
    vec2 at = (cell + 0.25 + 0.5 * hash22(cell + 4.6)) * COBBLE_PEBBLE_CELL * scale;
    float r = COBBLE_PEBBLE_RADIUS * scale * (0.6 + 0.8 * hash12(cell + 2.1));
    vec2 q = (p - at) * vec2(1.0, 1.3);
    return inside(length(q) - r) * COBBLE_PEBBLE_TONE + inside(length(q - vec2(0.0, 0.4 * r)) - r) * (1.0 - inside(length(q) - r)) * -0.6;
  }
  vec4 patternCobbles(vec2 p, float scale) {
    float specks = speckles(p, scale) + pebbles(p, scale);
    if (noise2(p / (COBBLE_MASK_PERIOD * scale) + 3.3) < COBBLE_BARE * 0.85 + 0.15) return vec4(specks, 0.0, 0.0, 0.0);
    float cell = COBBLE_CELL_ACROSS * scale;
    vec2 s = cobbleFrame(p);
    vec2 owner = cobbleOwner(s, cell);
    float best = packedDistance(s, owner, cell, scale);
    float h = hash22(owner + vec2(0.0, SALT_ISLANDTONE)).x;
    float tone = h < COBBLE_DEEP_SHARE ? COBBLE_DEEP_TONE : (h < COBBLE_DEEP_SHARE + COBBLE_FAINT_SHARE ? COBBLE_FAINT_TONE : COBBLE_TONE);
    vec2 fromCentre = s - cobbleCentre(owner, cell);
    // back to the ground plane, where +y is toward the viewer (lower left on screen)
    vec2 out2 = normalize(turn2(-0.785398) * vec2(fromCentre.x / cobbleSquash, fromCentre.y / COBBLE_FORESHORTEN) + 1e-4);
    float rim = inside(abs(best + COBBLE_CRESCENT * 0.5) - COBBLE_CRESCENT * 0.5);
    float lowerLeft = smoothstep(0.2, 0.7, out2.y);
    float upperRight = smoothstep(0.2, 0.7, -out2.y);
    float w = mix(COBBLE_SOFT_EDGE * scale, gAA, smoothstep(-0.3, 0.4, out2.y));
    float body = 1.0 - smoothstep(-w, w, best);
    float mottle = (noise2(p * 4.5 + owner * 3.0) - 0.5) * 2.0 * COBBLE_MOTTLE;
    float shade = body * (tone + mottle) + rim * lowerLeft * (COBBLE_CRESCENT_TONE - tone) + body * upperRight * COBBLE_UPPER_EDGE_TONE + specks * (1.0 - body);
    return vec4(shade, 0.0, 0.0, 0.0);
  }
`,Vl=`
  /** Boards stacked along u with dark gap lines, grain streaks along v. */
  vec4 patternPlanks(vec2 uv, float scale) {
    float width = PLANK_WIDTH * scale;
    float board = floor(uv.x / width);
    float lx = uv.x - board * width;
    float gap = inside(min(lx, width - lx) - PLANK_GAP * 0.5 * scale);
    float tone = (hash12(vec2(board, 2.7)) - 0.5) * 2.0 * PLANK_JITTER;
    tone += (noise2(vec2(uv.x / (0.03 * scale), uv.y / (0.9 * scale))) - 0.5) * 2.0 * PLANK_STREAK;
    return vec4(mix(tone, PLANK_GAP_TONE, gap), 0.0, 0.0, 0.0);
  }
  /** One scallop cell: an upright U stroke, or (one in seven) a light leaf dab. Returns vec2(stroke, leaf). */
  vec2 scallopMark(vec2 plate, vec2 id, vec2 centre, float scale) {
    vec2 h = hash22(id + 4.7);
    if (h.x >= SCALLOP_SHARE) return vec2(0.0);
    float size = mix(SCALLOP_MIN_SIZE, SCALLOP_MAX_SIZE, hash12(id + 9.9)) * scale;
    vec2 q = turn2((h.y - 0.5) * 2.0 * SCALLOP_TILT) * (plate - centre);
    float kind = hash12(id + 5.5);
    if (kind < SCALLOP_LEAF_SHARE) {
      vec2 l = q / (vec2(SCALLOP_LEAF_LENGTH, SCALLOP_LEAF_WIDTH) * size);
      float leaf = (length(vec2(l.x, l.y * (1.0 + 0.6 * abs(l.x)))) - 1.0) * SCALLOP_LEAF_WIDTH * size;
      return vec2(0.0, inside(leaf));
    }
    vec2 r = vec2(SCALLOP_WIDTH * 0.5, SCALLOP_HEIGHT) * size;
    vec2 qq = q - vec2(0.0, SCALLOP_HEIGHT * 0.5 * size);
    if (kind < SCALLOP_LEAF_SHARE + SCALLOP_PATCH_SHARE) {
      float bowl = max((length(qq / r) - 1.0) * min(r.x, r.y), qq.y);
      return vec2(0.0, -inside(bowl));
    }
    float ring = abs(length(qq / r) - 1.0) * min(r.x, r.y);
    float ends = min(length(qq - vec2(r.x, 0.0)), length(qq + vec2(r.x, 0.0)));
    return vec2(inside((qq.y > 0.0 ? ends : ring) - SCALLOP_STROKE * 0.5 * scale), 0.0);
  }
  /** Sparse upright U strokes and light leaf dabs, scattered in picture space with no findable rows. */
  vec4 patternScallop(vec2 plate, float scale, float lit) {
    vec2 cell = vec2(SCALLOP_CELL_X, SCALLOP_CELL_Y) * scale;
    float row0 = floor(plate.y / cell.y);
    vec2 m = vec2(0.0);
    float glow = 0.0;
    for (int j = -1; j <= 1; j++) {
      float row = row0 + float(j);
      float shift = noise2(vec2(row * 0.61, 2.3)) * 2.0;
      float col0 = floor(plate.x / cell.x - shift);
      for (int i = -1; i <= 1; i++) {
        vec2 id = vec2(col0 + float(i), row);
        vec2 centre = vec2((id.x + shift + 0.5) * cell.x, (row + 0.5) * cell.y) + (hash22(id + 1.9) - 0.5) * SCALLOP_JITTER * cell;
        vec2 mark = scallopMark(plate, id, centre, scale);
        glow = max(glow, -mark.y);
        m = max(m, mark);
      }
    }
    float stroke = m.x * mix(SCALLOP_SHADE_TONE, SCALLOP_TONE, lit);
    float light = glow * SCALLOP_PATCH_TONE * lit * (1.0 - m.x);
    return vec4(stroke * (1.0 - m.y) + m.y * SCALLOP_LEAF_TONE + light, 0.0, 0.0, 0.0);
  }
  /** Fine dry sponge (lighter and deeper small dabs) and sparse triangles, upright in picture space. */
  vec4 patternCanopy(vec2 plate, float scale) {
    float a = noise2(plate / (CANOPY_SPONGE_A * scale)) * 0.6 + noise2(plate / (CANOPY_SPONGE_B * scale) + 1.7) * 0.4;
    float b = noise2(plate / (CANOPY_SPONGE_A * scale) + 9.2) * 0.6 + noise2(plate / (CANOPY_SPONGE_B * scale) + 5.1) * 0.4;
    float sponge = smoothstep(CANOPY_LIGHT_FROM, CANOPY_LIGHT_FROM + 0.03, a) * CANOPY_LIGHT + (1.0 - smoothstep(CANOPY_DEEP_BELOW - 0.03, CANOPY_DEEP_BELOW, b)) * CANOPY_DEEP;
    float cell = CANOPY_CELL * scale;
    vec2 ic = floor(plate / cell);
    float tri = 0.0;
    if (hash12(ic + 3.1) < CANOPY_TRIANGLE_SHARE) {
      vec2 at = (ic + 0.3 + 0.4 * hash22(ic + 9.4)) * cell;
      vec2 q = turn2(hash12(ic + 1.7) * 6.2832) * (plate - at);
      tri = inside(triangle(q, CANOPY_TRIANGLE * 0.5 * scale));
    }
    return vec4(sponge * (1.0 - tri) + tri * CANOPY_TRIANGLE_TONE, 0.0, 0.0, 0.0);
  }
`,Hl=`
  float tuft(vec2 plate, vec2 c, float cell, float scale) {
    if (hash12(c + 6.6) >= GRASS_SHARE) return 0.0;
    vec2 base = (c + vec2(0.2, 0.1) + hash22(c) * vec2(0.6, 0.4)) * cell;
    float count = 3.0 + floor(hash12(c + 2.4) * 3.0);
    float m = 0.0;
    for (int k = 0; k < 5; k++) {
      if (float(k) >= count) break;
      float side = float(k) - (count - 1.0) * 0.5;
      float a = side * 0.28 + (hash12(c + float(k)) - 0.5) * 0.3;
      float len = mix(GRASS_BLADE_MIN, GRASS_BLADE_MAX, hash12(c + float(k) * 3.1 + 0.7)) * scale;
      vec2 foot = base + vec2(side * 0.05 * scale, 0.0);
      vec2 tip = foot + vec2(sin(a), cos(a)) * len;
      vec2 pa = plate - foot;
      float t = clamp(dot(pa, tip - foot) / dot(tip - foot, tip - foot), 0.0, 1.0);
      m = max(m, inside(segment(plate, foot, tip) - GRASS_BLADE_WIDTH * 0.5 * scale * (1.0 - 0.7 * t)));
    }
    return m;
  }
  /** Lawn: sparse upright tufts and a few light dots, in picture space. */
  vec4 patternGrass(vec2 plate, float scale) {
    float cell = GRASS_CELL * scale;
    vec2 ic = floor(plate / cell);
    float m = 0.0;
    for (int j = -1; j <= 0; j++) {
      for (int i = -1; i <= 1; i++) m = max(m, tuft(plate, ic + vec2(float(i), float(j)), cell, scale));
    }
    vec2 dc = floor(plate / (0.45 * scale));
    float spot = 0.0;
    if (hash12(dc + 8.2) < GRASS_DOT_SHARE) spot = inside(length(plate - (dc + 0.5) * 0.45 * scale) - GRASS_DOT_RADIUS * scale);
    return vec4(m * GRASS_TONE + spot * GRASS_DOT_TONE, 0.0, 0.0, 0.0);
  }
  /** Cloth: 0 plain, 1 stripe, 2 dots, 3 hem. Drawn in the garment's own space so it moves with it. */
  vec4 patternCloth(vec3 rest, float kind, float hem) {
    if (kind < 0.5) return vec4(0.0);
    if (kind < 1.5) return vec4(1.0 - inside(abs(fract(rest.y / (2.0 * CLOTH_STRIPE)) - 0.25) * 2.0 * CLOTH_STRIPE - CLOTH_STRIPE * 0.5), 0.0, 0.0, 0.0);
    if (kind < 2.5) {
      vec2 q = vec2(rest.x + rest.z, rest.y) / CLOTH_DOT;
      return vec4(1.5 * inside(length(fract(q) - 0.5) * CLOTH_DOT - CLOTH_DOT_RADIUS), 0.0, 0.0, 0.0);
    }
    // aHem (1 + height above the garment's hem) puts the band at the hem; without it, fall back to part-local y.
    float above = hem > 0.5 ? hem - 1.0 : fract(rest.y / CLOTH_HEM_PERIOD) * CLOTH_HEM_PERIOD;
    return vec4(-inside(above - CLOTH_HEM), 0.0, 0.0, 0.0);
  }
  /** Water: soft lighter streaks and loose white wavy lines drifting slowly, in picture space. */
  vec4 patternWater(vec2 plate, float scale, float time) {
    float streak = smoothstep(0.55, 0.78, noise2(vec2(plate.x / (1.6 * scale), plate.y / (0.2 * scale)))) * WATER_STREAK_TONE;
    float rowSize = WATER_ROW * scale;
    float y = plate.y / rowSize;
    float row = floor(y);
    float drift = time * WATER_SPEED * (hash12(vec2(row, 1.9)) < 0.5 ? -1.0 : 1.0);
    float x = (plate.x + drift) / (WATER_SEGMENT * scale) + hash12(vec2(row, 0.4));
    float fx = fract(x);
    float wave = sin(fx * 6.2832) * WATER_WAVE * scale;
    float dy = abs((fract(y) - 0.5) * rowSize - wave);
    float ends = smoothstep(0.1, 0.2, fx) * (1.0 - smoothstep(0.8, 0.9, fx));
    float line = hash12(vec2(floor(x), row)) < WATER_SHARE ? inside(dy - WATER_LINE * scale * 0.5) * ends : 0.0;
    vec2 sc = floor(plate / (WATER_SPARKLE_CELL * scale));
    float sparkle = step(hash12(sc + 6.2), WATER_SPARKLE_SHARE) * inside(length(plate - (sc + 0.2 + 0.6 * hash22(sc + 1.8)) * WATER_SPARKLE_CELL * scale) - WATER_SPARKLE_RADIUS * scale);
    return vec4(streak, 0.0, 0.0, max(line, sparkle));
  }
`,Ul=Object.freeze([`flat`,`blocks`,`cobbles`,`slabs`,`planks`,`canopy`,`scallop`,`grass`,`cloth`,`water`]),Wl=`
  vec4 drawPattern(vec3 p, vec3 n, vec2 plate, vec3 rest, float cloth, float scale, float time, float lit) {
    #if PATTERN == 1
      return patternBlocks(planar(p, n), scale, BLOCK_LENGTH, BLOCK_COURSE, smoothstep(0.6, 0.9, n.y));
    #elif PATTERN == 2
      return patternCobbles(p.xz, scale);
    #elif PATTERN == 3
      return patternBlocks(planar(p, n), scale, SLAB_LENGTH, SLAB_COURSE, smoothstep(0.6, 0.9, n.y));
    #elif PATTERN == 4
      return patternPlanks(planar(p, n), scale);
    #elif PATTERN == 5
      return patternCanopy(plate, scale);
    #elif PATTERN == 6
      return patternScallop(plate, scale, lit);
    #elif PATTERN == 7
      return patternGrass(plate, scale);
    #elif PATTERN == 8
      return patternCloth(rest, cloth, vHem);
    #elif PATTERN == 9
      return patternWater(plate, scale, time);
    #else
      return vec4(0.0);
    #endif
  }
`,Gl=`
  uniform vec3 uLight;
  uniform float uSoft;
  uniform float uRagged;

  /** Value by plane. Returns vec2(tone offset, litness: 0 shaded side, 1 lit or top). */
  vec2 planeForm(vec3 n, float nl, float ragged) {
    float top = smoothstep(FORM_TOP_FROM, FORM_TOP_TO, n.y);
    #if PATTERN == 8
      top *= CLOTH_TOP_SHARE;
    #endif
    float w = mix(FORM_TURN_HARD, FORM_TURN_SOFT, uSoft) * (1.0 - RAGGED_NARROW * uRagged);
    float turn = smoothstep(-w, w, nl + ragged);
    #if PATTERN == 5
      float side = mix(CANOPY_SHADE, 0.0, turn);
    #else
      float side = mix(FORM_SHADE, 0.0, turn);
    #endif
    float form = mix(side, FORM_TOP, top) + uSoft * FORM_GRADIENT * max(nl, FORM_GRADIENT_FLOOR);
    return vec2(form, max(turn, top));
  }

  /** Leafy teeth in picture space: overlapping cones on a jittered grid RAGGED_TOOTH apart, in about -1..1, with crisp tips. */
  float raggedTeeth(vec2 plate) {
    vec2 g = plate / RAGGED_TOOTH;
    vec2 ig = floor(g);
    float bump = 0.0;
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 c = ig + vec2(float(i), float(j));
        vec2 off = g - c - 0.5 - (hash22(c + 6.3) - 0.5) * 0.8;
        float d = length(off * vec2(1.0, 0.8)) / (RAGGED_BUMP * (0.75 + 0.5 * hash12(c + 1.1)));
        bump = max(bump, 1.0 - d);
      }
    }
    return clamp(bump, 0.0, 1.0) * 2.0 - 1.0 + (noise2(plate * 3.1) - 0.5) * 0.3;
  }

  float wash(vec2 plate) {
    float n = noise2(plate / WASH_PERIOD) * 0.6 + noise2(plate / WASH_PERIOD * 1.9 + 7.1) * 0.4;
    return (n * 2.0 - 1.0) * WASH_AMPLITUDE * 1.4;
  }

  /** Soft directional brush strokes: two stretched noises at fixed angles, blended by a slow drift. */
  float strokes(vec2 plate) {
    vec2 a = turn2(STROKES_ANGLE_A) * plate;
    vec2 b = turn2(STROKES_ANGLE_B) * plate;
    float sa = noise2(vec2(a.x / STROKES_LENGTH, a.y / STROKES_WIDTH));
    float sb = noise2(vec2(b.x / STROKES_LENGTH, b.y / STROKES_WIDTH) + 4.4);
    float w = smoothstep(0.3, 0.7, noise2(plate / STROKES_DRIFT + 1.9));
    return (mix(sa, sb, w) * 2.0 - 1.0) * STROKES_AMPLITUDE * 1.5;
  }

  /** An occasional big pale scuff (for large stone grounds). */
  float scuff(vec2 plate) {
    return smoothstep(SCUFF_FROM, SCUFF_TO, noise2(plate / SCUFF_PERIOD + 12.7)) * SCUFF_TONE;
  }

  /** Fine dry-brush grain: two fine octaves, barely stretched along one fixed diagonal. */
  float grain(vec2 plate) {
    vec2 q = turn2(GRAIN_ANGLE) * plate;
    float n = noise2(vec2(q.x / GRAIN_ALONG, q.y / GRAIN_ACROSS)) * 0.55 + noise2(plate / (GRAIN_ACROSS * 0.55) + 3.7) * 0.45;
    float tooth = noise2(plate / GRAIN_TOOTH + 2.9) * 2.0 - 1.0;
    return (n * 2.0 - 1.0) * GRAIN_AMPLITUDE * 1.7 + tooth * GRAIN_TOOTH_AMPLITUDE;
  }

  /** Sparse chips (pale, elongated) and dots (deeper), 2 to 5 percent of the area. Mirrored in ../patterns.ts. */
  float marks(vec2 plate, float strength) {
    vec2 cell = floor(plate / MARK_CELL);
    vec2 h = hash22(cell + vec2(SALT_MARK, 0.0));
    if (h.x >= MARK_SHARE * strength) return 0.0;
    vec2 at = (cell + 0.25 + 0.5 * hash22(cell + 9.1)) * MARK_CELL;
    vec2 q = turn2(hash12(cell + 2.2) * 6.2832) * (plate - at);
    if (h.y < MARK_CHIP_SHARE) {
      float d = (length(q / vec2(MARK_CHIP_LENGTH, MARK_CHIP_WIDTH)) - 1.0) * MARK_CHIP_WIDTH;
      return inside(d) * MARK_CHIP_TONE;
    }
    float r = MARK_DOT_RADIUS * (0.55 + 0.9 * hash12(cell + 4.1));
    return inside(length(q * vec2(1.0, 1.0 + 0.6 * hash12(cell + 6.6))) - r) * MARK_DOT_TONE;
  }
`,Kl=`
  varying float vRole;
  varying float vTone;
  varying float vCloth;
  varying float vHem;
  varying float vFlat;
  varying vec2 vPlate;
  varying vec3 vWorld;
  varying vec3 vAnchor;
  varying vec3 vRest;
  varying vec3 vNormalW;
`,ql=`
  uniform float uTime;
  uniform float uMotion;
  uniform float uScale;
  uniform float uWobble;
  uniform float uDabs;
  uniform float uSway;
  uniform vec3 uPlateRight;
  uniform vec3 uPlateUp;
  uniform vec3 uViewDir;
  uniform float uHand;
`,Jl=`
  void main() {
    vec3 pos = position;
    vec3 nrm = normal;
    HOOK_BODY
    #ifdef USE_INSTANCING
      mat4 world = modelMatrix * instanceMatrix;
    #else
      mat4 world = modelMatrix;
    #endif
    vec3 placed = (world * vec4(pos, 1.0)).xyz;
    vec3 worldPos = placed + noiseField(placed * WOBBLE_FREQUENCY) * vec3(1.0, WOBBLE_VERTICAL, 1.0) * WOBBLE_AMPLITUDE * uWobble;
    #ifdef DECAL
      worldPos -= uViewDir * WOBBLE_DECAL_LIFT;
    #endif
    #ifdef USE_SWAY
      float phase = uTime * SWAY_SPEED + dot(placed.xz, vec2(1.0, 0.7)) * 6.2832 / SWAY_WAVELENGTH;
      worldPos.xz += vec2(sin(phase), cos(phase * 0.8)) * SWAY_AMPLITUDE * uSway * uMotion;
    #endif
    vRole = ${h.role};
    vTone = ${h.tone};
    #ifdef USE_CLOTH
      vCloth = ${h.pattern};
      vHem = ${_e};
    #else
      vCloth = 0.0;
      vHem = 0.0;
    #endif
    vec3 nw = mat3(world) * nrm;
    float nlen = length(nw);
    vFlat = nlen < FORM_FLAT_NORMAL ? 1.0 : 0.0;
    vNormalW = nlen < FORM_FLAT_NORMAL ? vec3(0.0, 1.0, 0.0) : nw / nlen;
    vWorld = worldPos;
    vAnchor = placed;
    vPlate = vec2(dot(placed, uPlateRight), dot(placed, uPlateUp));
    vRest = position;
    gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
  }
`;function Yl(e,t,n=wl){return[n,`attribute float ${h.role};`,`attribute float ${h.tone};`,`#ifdef USE_CLOTH\n attribute float ${h.pattern};\n attribute float ${_e};\n#endif`,Kl,ql,Tl,e,Jl.replace(`HOOK_BODY`,t)].join(`
`)}var Xl=`
  uniform float uRain;
  #ifdef RECEIVE_SHADOW
    uniform sampler2D uShadowMap;
    uniform mat4 uShadowMatrix;
    uniform float uShadowOn;
    uniform float uShadowBias;
    uniform float uShadowSpread;
    uniform float uShadowTexel;
    uniform float uShadowTexelWorld;
    uniform float uShadowDepthScale;
    uniform vec3 uShadowLight;
    /** One shadow comparison, bilinearly filtered between the four nearest texels, so edges never stair-step. */
    float shadowTap(vec2 uv, float depth) {
      vec2 t = uv / uShadowTexel - 0.5;
      vec2 f = fract(t);
      vec2 base = (floor(t) + 0.5) * uShadowTexel;
      float a = depth > texture2D(uShadowMap, base).r ? 1.0 : 0.0;
      float b = depth > texture2D(uShadowMap, base + vec2(uShadowTexel, 0.0)).r ? 1.0 : 0.0;
      float c = depth > texture2D(uShadowMap, base + vec2(0.0, uShadowTexel)).r ? 1.0 : 0.0;
      float d = depth > texture2D(uShadowMap, base + vec2(uShadowTexel)).r ? 1.0 : 0.0;
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    /** 0 lit to 1 in shadow: a 3 x 3 grid of filtered taps, so the edge is a short soft ramp. */
    float shadowAmount(vec3 p, vec3 n) {
      if (uShadowOn < 0.5) return 0.0;
      vec3 jitter = (vec3(noise2(vPlate * 18.0), noise2(vPlate * 18.0 + 3.1), noise2(vPlate * 18.0 + 6.7)) - 0.5) * 2.0 * SHADOW_EDGE_BREAK;
      jitter -= n * dot(jitter, n);
      vec4 c = uShadowMatrix * vec4(p + n * SHADOW_NORMAL_OFFSET + uShadowLight * SHADOW_LIGHT_OFFSET + jitter, 1.0);
      vec3 s = c.xyz / c.w;
      if (s.x < 0.0 || s.y < 0.0 || s.x > 1.0 || s.y > 1.0 || s.z > 1.0) return 0.0;
      float facing = dot(n, uShadowLight);
      float cosT = max(facing, 0.04);
      float tanT = sqrt(1.0 - cosT * cosT) / cosT;
      float slope = min(SHADOW_SLOPE_MAX, (uShadowTexelWorld * 1.5 + SHADOW_SOFT * 0.5) * tanT * SHADOW_SLOPE);
      float depth = s.z - uShadowBias - slope * uShadowDepthScale;
      float sum = 0.0;
      for (int j = -1; j <= 1; j++) {
        for (int i = -1; i <= 1; i++) {
          vec2 at = s.xy + vec2(float(i), float(j)) * uShadowSpread;
          sum += shadowTap(at, depth);
        }
      }
      return smoothstep(0.0, 1.0, sum / 9.0) * smoothstep(SHADOW_EDGE_FROM, SHADOW_EDGE_TO, facing);
    }
  #endif
  #ifdef RECEIVE_TRAIL
    uniform sampler2D uTrail;
    uniform vec4 uTrailBounds;
    uniform float uTrailOn;
    /** Coverage, bilinearly filtered here whatever the texture's own filter, so texels never show as steps. */
    float trailAt(vec3 p) {
      if (uTrailOn < 0.5) return 0.0;
      vec2 uv = (p.xz - uTrailBounds.xy) / (uTrailBounds.zw - uTrailBounds.xy);
      if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 0.0;
      vec2 size = vec2(textureSize(uTrail, 0));
      vec2 t = uv * size - 0.5;
      vec2 f = fract(t);
      vec2 base = (floor(t) + 0.5) / size;
      vec2 step1 = 1.0 / size;
      float a = texture2D(uTrail, base).r;
      float b = texture2D(uTrail, base + vec2(step1.x, 0.0)).r;
      float c = texture2D(uTrail, base + vec2(0.0, step1.y)).r;
      float d = texture2D(uTrail, base + step1).r;
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    /** Thin pale lime paint over the finished surface: soft edge, deeper rim, a lighter inner line, loose dots outside. */
    vec3 paintTrail(vec3 color, float form, float shadowTone) {
      float c = trailAt(vWorld);
      float alpha = smoothstep(TRAIL_THRESHOLD - TRAIL_SOFT, TRAIL_THRESHOLD + TRAIL_SOFT, c);
      float body = mix(TRAIL_EDGE_TONE, TRAIL_CORE_TONE, smoothstep(TRAIL_THRESHOLD, TRAIL_CORE, c));
      body = mix(body, TRAIL_LINE_TONE, smoothstep(TRAIL_CORE, TRAIL_CORE + 0.06, c));
      float lift = form - FORM_TOP + shadowTone;
      vec2 dc = floor(vPlate / TRAIL_DOT_CELL);
      vec2 at = (dc + 0.25 + 0.5 * hash22(dc + 2.6)) * TRAIL_DOT_CELL;
      float dots = inside(length(vPlate - at) - TRAIL_DOT_RADIUS);
      float near = step(TRAIL_DOT_FROM, c) * (1.0 - step(TRAIL_THRESHOLD, c)) * step(hash12(dc + 4.9), TRAIL_DOT_SHARE);
      vec3 dotColor = hash12(dc + 7.3) < TRAIL_DOT_WHITE ? vec3(1.0) : toneColor(ROLE_MOSS, TRAIL_CORE_TONE + lift);
      vec3 painted = mix(color, toneColor(ROLE_MOSS, body + lift), alpha);
      return mix(painted, dotColor, dots * near);
    }
  #endif
`,Zl=`
  void main() {
    gAA = max(length(fwidth(vAnchor)) * 0.6, 1e-4);
    vec3 n = normalize(vNormalW);
    #if PATTERN == 8
      float nl = dot(n, CLOTH_LIGHT) + (noise2(vPlate * 22.0) - 0.5) * FORM_EDGE_BREAK;
    #else
      float nl = dot(n, uLight) + (noise2(vPlate * 22.0) - 0.5) * FORM_EDGE_BREAK;
    #endif
    float ragged = uRagged > 0.0 ? raggedTeeth(vPlate) * RAGGED_AMPLITUDE * uRagged : 0.0;
    vec2 plane = planeForm(n, nl, ragged);
    float cap = RAGGED_CAP * smoothstep(RAGGED_CAP_AT - RAGGED_CAP_SOFT, RAGGED_CAP_AT + RAGGED_CAP_SOFT, nl + ragged * 0.5) * step(0.001, uRagged);
    #if PATTERN == 8
      float tick = smoothstep(CLOTH_TICK_AT - CLOTH_TICK_SOFT, CLOTH_TICK_AT + CLOTH_TICK_SOFT, dot(n, CLOTH_TICK_DIRECTION)) * CLOTH_TICK;
      float under = smoothstep(CLOTH_UNDER_FROM, CLOTH_UNDER_TO, n.y) * CLOTH_UNDER;
      cap += tick + under;
    #endif
    float form = (plane.x + cap) * (1.0 - vFlat);
    float lit = mix(plane.y, 1.0, vFlat);
    float role = floor(vRole + 0.5);
    vec3 p = vAnchor + noiseField(vAnchor * WOBBLE_WARP_FREQUENCY) * WOBBLE_WARP * uWobble;
    vec4 drawn = drawPattern(p, n, vPlate, vRest, vCloth, uScale, uTime, lit);
    float face = vTone + form;
    float shadow = 0.0;
    #ifdef RECEIVE_SHADOW
      shadow = shadowAmount(vWorld, n);
    #endif
    drawn.x *= mix(1.0, SHADOW_PATTERN_KEEP, shadow);
    vec2 sc = floor(vPlate / SHADOW_SPECK_CELL);
    float speck = step(hash12(sc + 2.8), SHADOW_SPECK_SHARE) * inside(length(vPlate - (sc + 0.25 + 0.5 * hash22(sc + 5.2)) * SHADOW_SPECK_CELL) - SHADOW_SPECK_RADIUS);
    #if PATTERN == 9
      float grainK = WATER_GRAIN;
    #else
      float grainK = 1.0;
    #endif
    float ground = abs(role - ROLE_STONE) < 0.5 ? smoothstep(0.6, 0.9, n.y) : 0.0;
    float hand = wash(vPlate) + strokes(vPlate) + grain(vPlate) * grainK + scuff(vPlate) * ground;
    float tone = face + hand * uHand + drawn.x;
    float shaded = 1.0 - smoothstep(BLOCK_SHADED_BELOW - 0.3, BLOCK_SHADED_BELOW + 0.3, form);
    float topFace = smoothstep(0.6, 0.9, n.y);
    float litJoint = mix(max(BLOCK_JOINT_TONE, face + BLOCK_JOINT_LIFT), face + BLOCK_JOINT_TOP, topFace);
    float jointTone = mix(litJoint, face + BLOCK_JOINT_SHADE, shaded);
    tone = mix(tone, jointTone, drawn.y) + drawn.z * shaded * BLOCK_JOINT_PALE_LINE;
    #if PATTERN != 8 && PATTERN != 9
      tone += marks(vPlate, uDabs) * uHand;
    #endif
    float top = smoothstep(FORM_TOP_FROM, FORM_TOP_TO, n.y) * (1.0 - vFlat);
    float shadowTone = shadow * (mix(SHADOW_ON_SHADE, SHADOW_DROP - top * FORM_TOP + (1.0 - top) * SHADOW_ON_WALL, lit) + speck * SHADOW_SPECK_TONE * uHand);
    tone += shadowTone;
    if (abs(role - ROLE_STONE) < 0.5 && uRain > WET_THRESHOLD) tone += WET_TONE;
    if (abs(role - ROLE_STONE) < 0.5) tone += FORM_STONE_BIAS;
    float knee = FORM_FLOOR_KNEE;
    float room = knee - TONE_MIN;
    if (tone < knee) tone = knee - room * (1.0 - exp((tone - knee) / room));
    vec3 color = toneColor(role, tone);
    #ifdef RECEIVE_TRAIL
      color = paintTrail(color, form, shadowTone);
    #endif
    gl_FragColor = vec4(mix(color, vec3(1.0), drawn.w), 1.0);
  }
`;function Ql(e=wl){return[e,Kl,ql,Tl,El,Dl,Gl,Xl,Rl,zl,Bl,Vl,Hl,Wl,Zl].join(`
`)}var $l=(e,t,n)=>{if(e===void 0)return t;if(!Number.isFinite(e))throw Error(`Surface option ${n} must be a number, got ${e}`);return Math.min(1,Math.max(0,e))};function eu(e={},t){let n=e.scale??1;if(!Number.isFinite(n)||n<=0)throw Error(`Surface option scale must be above 0, got ${n}`);return{scale:n,wobble:$l(e.wobble,1,`wobble`),dabs:$l(e.dabs,1,`dabs`),sway:$l(e.sway,0,`sway`),soft:$l(e.soft,+(t===`cloth`),`soft`),ragged:$l(e.ragged,0,`ragged`),receiveTrail:!!e.receiveTrail,receiveShadow:e.receiveShadow??!0,doubleSided:!!e.doubleSided,decal:!!e.decal,vertex:e.vertex??null}}function tu(e){let t=Ul.indexOf(e);if(t<0)throw Error(`Unknown surface pattern "${String(e)}"`);return t}function nu(e,t){let n=[t.receiveTrail,t.receiveShadow,t.doubleSided,t.decal].map(e=>+!!e).join(``);return`${tu(e)}|${t.scale}|${t.wobble}|${t.dabs}|${t.sway}|${t.soft}|${t.ragged}|${n}|${t.vertex?.id??``}`}function ru(e,t){let n={PATTERN:tu(e)};return t.receiveShadow&&(n.RECEIVE_SHADOW=1),t.receiveTrail&&(n.RECEIVE_TRAIL=1),t.sway>0&&(n.USE_SWAY=1),e===`cloth`&&(n.USE_CLOTH=1),t.decal&&(n.DECAL=1),n}var iu=Object.freeze({constants:wl,fragment:Ql(wl),decal:g.decal,accent:!1});function au(e,t){let n=Xc(t),r=Ql(e),i=Tc(t)?ml(r,t):r,a=Dc(t)?ol(i):i,o=kc(t)?vl(a):a;return Object.freeze({constants:e,fragment:n?el(o):o,decal:t.decal,accent:n})}function ou(e,t){let n=Yl(t?.declarations??``,t?.body??``,e.constants);return e.accent?tl(n):n}function su(e,t,n,r=iu){let i=t.vertex;return new l({name:`gouache:${e}`,vertexShader:ou(r,i),fragmentShader:r.fragment,defines:ru(e,t),uniforms:{...n,uScale:{value:t.scale},uWobble:{value:t.wobble},uDabs:{value:t.dabs},uSway:{value:t.sway},uSoft:{value:t.soft},uRagged:{value:t.ragged},...i?.uniforms??{}},side:t.doubleSided?2:0,polygonOffset:t.decal,polygonOffsetFactor:t.decal?r.decal.factor:0,polygonOffsetUnits:t.decal?r.decal.units:0})}function cu(e){let{width:t,height:n}=de(e),r=new s(ue(e),t,n,c,o);return r.magFilter=a,r.minFilter=a,r.wrapS=ne,r.wrapT=ne,r.generateMipmaps=!1,r.needsUpdate=!0,r}function lu(e=Gc()){let[r,i,a]=e.config.light.form,[o,s,c]=e.config.light.direction,{right:l,up:u,forward:d}=e.basis;return{uPalette:{value:cu(e.table)},uPlateRight:{value:new n(l.x,l.y,l.z)},uPlateUp:{value:new n(u.x,u.y,u.z)},uViewDir:{value:new n(d.x,d.y,d.z)},uLight:{value:new n(r,i,a).normalize()},uShadowLight:{value:new n(o,s,c).normalize()},uTime:{value:0},uHand:{value:1},uMotion:{value:1},uRain:{value:0},uShadowMap:{value:null},uShadowMatrix:{value:new p},uShadowOn:{value:0},uShadowBias:{value:0},uShadowSpread:{value:0},uShadowTexelWorld:{value:0},uShadowDepthScale:{value:0},uShadowTexel:{value:1/e.config.shadow.size},uTrail:{value:null},uTrailBounds:{value:new t(0,0,1,1)},uTrailOn:{value:0}}}function uu(e,t){e.uTime.value=Number.isFinite(t.time)?t.time:0,e.uRain.value=Math.min(1,Math.max(0,Number.isFinite(t.rain)?t.rain:0)),e.uMotion.value=+!t.reducedMotion}function du(e,t,n){if(t&&!(n.maxX>n.minX&&n.maxZ>n.minZ))throw Error(`Trail bounds must have max greater than min`);e.uTrail.value=t,e.uTrailBounds.value.set(n.minX,n.minZ,n.maxX,n.maxZ),e.uTrailOn.value=+!!t}function fu(e){e.uPalette.value.dispose()}var pu=(e,t)=>{let n=Gc(t),r=Cl(n),i=au(r,n.config),a=lu(n),o=new Map,s=Ll(a,n.config.shadow),c=Ml(Al(r));return{surface(e,t){let n=eu(t,e),r=nu(e,n),s=o.get(r);if(s)return s;let c=su(e,n,a,i);return o.set(r,c),c},tag:se,merge:pe,hex:n.hex,bakeShadows:(e,t)=>s.bake(e,t),setTrailTexture:(e,t)=>du(a,e,t),update:e=>uu(a,e),present:(e,t)=>c.present(e,t),dispose(){for(let e of o.values())e.dispose();o.clear(),s.dispose(),c.dispose(),fu(a)}}};export{Hs as a,Qs as i,Hc as n,ss as o,js as r,Ca as s,pu as t};