(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function fT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var yd={exports:{}},Ua={},_d={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function pT(){if(Pg)return Re;Pg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function I(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,H={};function z(O,G,de){this.props=O,this.context=G,this.refs=H,this.updater=de||M}z.prototype.isReactComponent={},z.prototype.setState=function(O,G){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,G,"setState")},z.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function J(){}J.prototype=z.prototype;function te(O,G,de){this.props=O,this.context=G,this.refs=H,this.updater=de||M}var ne=te.prototype=new J;ne.constructor=te,$(ne,z.prototype),ne.isPureReactComponent=!0;var le=Array.isArray,ke=Object.prototype.hasOwnProperty,ve={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(O,G,de){var Ie,Ae={},De=null,Me=null;if(G!=null)for(Ie in G.ref!==void 0&&(Me=G.ref),G.key!==void 0&&(De=""+G.key),G)ke.call(G,Ie)&&!C.hasOwnProperty(Ie)&&(Ae[Ie]=G[Ie]);var Ue=arguments.length-2;if(Ue===1)Ae.children=de;else if(1<Ue){for(var $e=Array(Ue),Et=0;Et<Ue;Et++)$e[Et]=arguments[Et+2];Ae.children=$e}if(O&&O.defaultProps)for(Ie in Ue=O.defaultProps,Ue)Ae[Ie]===void 0&&(Ae[Ie]=Ue[Ie]);return{$$typeof:r,type:O,key:De,ref:Me,props:Ae,_owner:ve.current}}function R(O,G){return{$$typeof:r,type:O.type,key:G,ref:O.ref,props:O.props,_owner:O._owner}}function N(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var G={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(de){return G[de]})}var V=/\/+/g;function P(O,G){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):G.toString(36)}function it(O,G,de,Ie,Ae){var De=typeof O;(De==="undefined"||De==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case r:case e:Me=!0}}if(Me)return Me=O,Ae=Ae(Me),O=Ie===""?"."+P(Me,0):Ie,le(Ae)?(de="",O!=null&&(de=O.replace(V,"$&/")+"/"),it(Ae,G,de,"",function(Et){return Et})):Ae!=null&&(N(Ae)&&(Ae=R(Ae,de+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(V,"$&/")+"/")+O)),G.push(Ae)),1;if(Me=0,Ie=Ie===""?".":Ie+":",le(O))for(var Ue=0;Ue<O.length;Ue++){De=O[Ue];var $e=Ie+P(De,Ue);Me+=it(De,G,de,$e,Ae)}else if($e=I(O),typeof $e=="function")for(O=$e.call(O),Ue=0;!(De=O.next()).done;)De=De.value,$e=Ie+P(De,Ue++),Me+=it(De,G,de,$e,Ae);else if(De==="object")throw G=String(O),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Me}function Vt(O,G,de){if(O==null)return O;var Ie=[],Ae=0;return it(O,Ie,"","",function(De){return G.call(de,De,Ae++)}),Ie}function Lt(O){if(O._status===-1){var G=O._result;G=G(),G.then(function(de){(O._status===0||O._status===-1)&&(O._status=1,O._result=de)},function(de){(O._status===0||O._status===-1)&&(O._status=2,O._result=de)}),O._status===-1&&(O._status=0,O._result=G)}if(O._status===1)return O._result.default;throw O._result}var Be={current:null},ee={transition:null},pe={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ee,ReactCurrentOwner:ve};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Vt,forEach:function(O,G,de){Vt(O,function(){G.apply(this,arguments)},de)},count:function(O){var G=0;return Vt(O,function(){G++}),G},toArray:function(O){return Vt(O,function(G){return G})||[]},only:function(O){if(!N(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=z,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=te,Re.StrictMode=i,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Re.act=oe,Re.cloneElement=function(O,G,de){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ie=$({},O.props),Ae=O.key,De=O.ref,Me=O._owner;if(G!=null){if(G.ref!==void 0&&(De=G.ref,Me=ve.current),G.key!==void 0&&(Ae=""+G.key),O.type&&O.type.defaultProps)var Ue=O.type.defaultProps;for($e in G)ke.call(G,$e)&&!C.hasOwnProperty($e)&&(Ie[$e]=G[$e]===void 0&&Ue!==void 0?Ue[$e]:G[$e])}var $e=arguments.length-2;if($e===1)Ie.children=de;else if(1<$e){Ue=Array($e);for(var Et=0;Et<$e;Et++)Ue[Et]=arguments[Et+2];Ie.children=Ue}return{$$typeof:r,type:O.type,key:Ae,ref:De,props:Ie,_owner:Me}},Re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Re.createElement=S,Re.createFactory=function(O){var G=S.bind(null,O);return G.type=O,G},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:f,render:O}},Re.isValidElement=N,Re.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Lt}},Re.memo=function(O,G){return{$$typeof:_,type:O,compare:G===void 0?null:G}},Re.startTransition=function(O){var G=ee.transition;ee.transition={};try{O()}finally{ee.transition=G}},Re.unstable_act=oe,Re.useCallback=function(O,G){return Be.current.useCallback(O,G)},Re.useContext=function(O){return Be.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return Be.current.useDeferredValue(O)},Re.useEffect=function(O,G){return Be.current.useEffect(O,G)},Re.useId=function(){return Be.current.useId()},Re.useImperativeHandle=function(O,G,de){return Be.current.useImperativeHandle(O,G,de)},Re.useInsertionEffect=function(O,G){return Be.current.useInsertionEffect(O,G)},Re.useLayoutEffect=function(O,G){return Be.current.useLayoutEffect(O,G)},Re.useMemo=function(O,G){return Be.current.useMemo(O,G)},Re.useReducer=function(O,G,de){return Be.current.useReducer(O,G,de)},Re.useRef=function(O){return Be.current.useRef(O)},Re.useState=function(O){return Be.current.useState(O)},Re.useSyncExternalStore=function(O,G,de){return Be.current.useSyncExternalStore(O,G,de)},Re.useTransition=function(){return Be.current.useTransition()},Re.version="18.3.1",Re}var kg;function cf(){return kg||(kg=1,_d.exports=pT()),_d.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function mT(){if(Cg)return Ua;Cg=1;var r=cf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var w,T={},I=null,M=null;_!==void 0&&(I=""+_),g.key!==void 0&&(I=""+g.key),g.ref!==void 0&&(M=g.ref);for(w in g)i.call(g,w)&&!l.hasOwnProperty(w)&&(T[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:f,key:I,ref:M,props:T,_owner:o.current}}return Ua.Fragment=t,Ua.jsx=h,Ua.jsxs=h,Ua}var Ng;function gT(){return Ng||(Ng=1,yd.exports=mT()),yd.exports}var U=gT();const yT=()=>{};var xg={};/**
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
 */const E_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},_T=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},T_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|_>>6,M=_&63;g||(M=64,h||(I=64)),i.push(t[w],t[T],t[I],t[M])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(E_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):_T(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||T==null)throw new vT;const I=l<<2|f>>4;if(i.push(I),_!==64){const M=f<<4&240|_>>2;if(i.push(M),T!==64){const $=_<<6&192|T;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class vT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wT=function(r){const e=E_(r);return T_.encodeByteArray(e,!0)},rc=function(r){return wT(r).replace(/\./g,"")},I_=function(r){try{return T_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ET(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TT=()=>ET().__FIREBASE_DEFAULTS__,IT=()=>{if(typeof process>"u"||typeof xg>"u")return;const r=xg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ST=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&I_(r[1]);return e&&JSON.parse(e)},Sc=()=>{try{return yT()||TT()||IT()||ST()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},S_=r=>{var e,t;return(t=(e=Sc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},A_=r=>{const e=S_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},R_=()=>{var r;return(r=Sc())===null||r===void 0?void 0:r.config},P_=r=>{var e;return(e=Sc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class AT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Vi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hf(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function k_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[rc(JSON.stringify(t)),rc(JSON.stringify(h)),""].join(".")}const qa={};function RT(){const r={prod:[],emulator:[]};for(const e of Object.keys(qa))qa[e]?r.emulator.push(e):r.prod.push(e);return r}function PT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Dg=!1;function df(r,e){if(typeof window>"u"||typeof document>"u"||!Vi(window.location.host)||qa[r]===e||qa[r]||Dg)return;qa[r]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=RT().prod.length>0;function h(){const I=document.getElementById(i);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function g(I,M){I.setAttribute("width","24"),I.setAttribute("id",M),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function _(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Dg=!0,h()},I}function w(I,M){I.setAttribute("id",M),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=PT(i),M=t("text"),$=document.getElementById(M)||document.createElement("span"),H=t("learnmore"),z=document.getElementById(H)||document.createElement("a"),J=t("preprendIcon"),te=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ne=I.element;f(ne),w(z,H);const le=_();g(te,J),ne.append(te,$,z,le),document.body.appendChild(ne)}l?($.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(te.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",M)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function CT(){var r;const e=(r=Sc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function DT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OT(){const r=$t();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function VT(){return!CT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LT(){try{return typeof indexedDB=="object"}catch{return!1}}function bT(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const MT="FirebaseError";class yr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=MT,Object.setPrototypeOf(this,yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dl.prototype.create)}}class dl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?UT(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new yr(o,f,i)}}function UT(r,e){return r.replace(FT,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const FT=/\{\$([^}]+)}/g;function jT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ys(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if(Og(l)&&Og(h)){if(!ys(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Og(r){return r!==null&&typeof r=="object"}/**
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
 */function fl(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ja(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ba(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function BT(r,e){const t=new zT(r,e);return t.subscribe.bind(t)}class zT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");$T(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=vd),o.error===void 0&&(o.error=vd),o.complete===void 0&&(o.complete=vd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $T(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function vd(){}/**
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
 */function ut(r){return r&&r._delegate?r._delegate:r}class Ri{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ds="[DEFAULT]";/**
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
 */class WT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new AT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qT(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:HT(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HT(r){return r===ds?void 0:r}function qT(r){return r.instantiationMode==="EAGER"}/**
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
 */class GT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new WT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const KT={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},QT=Ce.INFO,XT={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},YT=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=XT[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ff{constructor(e){this.name=e,this._logLevel=QT,this._logHandler=YT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const JT=(r,e)=>e.some(t=>r instanceof t);let Vg,Lg;function ZT(){return Vg||(Vg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e0(){return Lg||(Lg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const C_=new WeakMap,Ld=new WeakMap,N_=new WeakMap,wd=new WeakMap,pf=new WeakMap;function t0(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Ti(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&C_.set(t,r)}).catch(()=>{}),pf.set(e,r),e}function n0(r){if(Ld.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Ld.set(r,e)}let bd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ld.get(r);if(e==="objectStoreNames")return r.objectStoreNames||N_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ti(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function r0(r){bd=r(bd)}function i0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(Ed(this),e,...t);return N_.set(i,e.sort?e.sort():[e]),Ti(i)}:e0().includes(r)?function(...e){return r.apply(Ed(this),e),Ti(C_.get(this))}:function(...e){return Ti(r.apply(Ed(this),e))}}function s0(r){return typeof r=="function"?i0(r):(r instanceof IDBTransaction&&n0(r),JT(r,ZT())?new Proxy(r,bd):r)}function Ti(r){if(r instanceof IDBRequest)return t0(r);if(wd.has(r))return wd.get(r);const e=s0(r);return e!==r&&(wd.set(r,e),pf.set(e,r)),e}const Ed=r=>pf.get(r);function o0(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=Ti(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Ti(h.result),g.oldVersion,g.newVersion,Ti(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const a0=["get","getKey","getAll","getAllKeys","count"],l0=["put","add","delete","clear"],Td=new Map;function bg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Td.get(e))return Td.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=l0.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||a0.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return Td.set(e,l),l}r0(r=>({...r,get:(e,t,i)=>bg(e,t)||r.get(e,t,i),has:(e,t)=>!!bg(e,t)||r.has(e,t)}));/**
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
 */class u0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(c0(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function c0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Md="@firebase/app",Mg="0.13.2";/**
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
 */const jr=new ff("@firebase/app"),h0="@firebase/app-compat",d0="@firebase/analytics-compat",f0="@firebase/analytics",p0="@firebase/app-check-compat",m0="@firebase/app-check",g0="@firebase/auth",y0="@firebase/auth-compat",_0="@firebase/database",v0="@firebase/data-connect",w0="@firebase/database-compat",E0="@firebase/functions",T0="@firebase/functions-compat",I0="@firebase/installations",S0="@firebase/installations-compat",A0="@firebase/messaging",R0="@firebase/messaging-compat",P0="@firebase/performance",k0="@firebase/performance-compat",C0="@firebase/remote-config",N0="@firebase/remote-config-compat",x0="@firebase/storage",D0="@firebase/storage-compat",O0="@firebase/firestore",V0="@firebase/ai",L0="@firebase/firestore-compat",b0="firebase",M0="11.10.0";/**
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
 */const Ud="[DEFAULT]",U0={[Md]:"fire-core",[h0]:"fire-core-compat",[f0]:"fire-analytics",[d0]:"fire-analytics-compat",[m0]:"fire-app-check",[p0]:"fire-app-check-compat",[g0]:"fire-auth",[y0]:"fire-auth-compat",[_0]:"fire-rtdb",[v0]:"fire-data-connect",[w0]:"fire-rtdb-compat",[E0]:"fire-fn",[T0]:"fire-fn-compat",[I0]:"fire-iid",[S0]:"fire-iid-compat",[A0]:"fire-fcm",[R0]:"fire-fcm-compat",[P0]:"fire-perf",[k0]:"fire-perf-compat",[C0]:"fire-rc",[N0]:"fire-rc-compat",[x0]:"fire-gcs",[D0]:"fire-gcs-compat",[O0]:"fire-fst",[L0]:"fire-fst-compat",[V0]:"fire-vertex","fire-js":"fire-js",[b0]:"fire-js-all"};/**
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
 */const ic=new Map,F0=new Map,Fd=new Map;function Ug(r,e){try{r.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function _s(r){const e=r.name;if(Fd.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;Fd.set(e,r);for(const t of ic.values())Ug(t,r);for(const t of F0.values())Ug(t,r);return!0}function Ac(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function pn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const j0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ii=new dl("app","Firebase",j0);/**
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
 */class B0{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ii.create("app-deleted",{appName:this._name})}}/**
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
 */const As=M0;function x_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ud,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Ii.create("bad-app-name",{appName:String(o)});if(t||(t=R_()),!t)throw Ii.create("no-options");const l=ic.get(o);if(l){if(ys(t,l.options)&&ys(i,l.config))return l;throw Ii.create("duplicate-app",{appName:o})}const h=new GT(o);for(const g of Fd.values())h.addComponent(g);const f=new B0(t,i,h);return ic.set(o,f),f}function mf(r=Ud){const e=ic.get(r);if(!e&&r===Ud&&R_())return x_();if(!e)throw Ii.create("no-app",{appName:r});return e}function ar(r,e,t){var i;let o=(i=U0[r])!==null&&i!==void 0?i:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(f.join(" "));return}_s(new Ri(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const z0="firebase-heartbeat-database",$0=1,Za="firebase-heartbeat-store";let Id=null;function D_(){return Id||(Id=o0(z0,$0,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Za)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ii.create("idb-open",{originalErrorMessage:r.message})})),Id}async function W0(r){try{const t=(await D_()).transaction(Za),i=await t.objectStore(Za).get(O_(r));return await t.done,i}catch(e){if(e instanceof yr)jr.warn(e.message);else{const t=Ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(t.message)}}}async function Fg(r,e){try{const i=(await D_()).transaction(Za,"readwrite");await i.objectStore(Za).put(e,O_(r)),await i.done}catch(t){if(t instanceof yr)jr.warn(t.message);else{const i=Ii.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jr.warn(i.message)}}}function O_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const H0=1024,q0=30;class G0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Q0(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=jg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>q0){const h=X0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){jr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jg(),{heartbeatsToSend:i,unsentEntries:o}=K0(this._heartbeatsCache.heartbeats),l=rc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return jr.warn(t),""}}}function jg(){return new Date().toISOString().substring(0,10)}function K0(r,e=H0){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Bg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Bg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Q0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LT()?bT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await W0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Bg(r){return rc(JSON.stringify({version:2,heartbeats:r})).length}function X0(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function Y0(r){_s(new Ri("platform-logger",e=>new u0(e),"PRIVATE")),_s(new Ri("heartbeat",e=>new G0(e),"PRIVATE")),ar(Md,Mg,r),ar(Md,Mg,"esm2017"),ar("fire-js","")}Y0("");function gf(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(r);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(r,i[o])&&(t[i[o]]=r[i[o]]);return t}function V_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const J0=V_,L_=new dl("auth","Firebase",V_());/**
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
 */const sc=new ff("@firebase/auth");function Z0(r,...e){sc.logLevel<=Ce.WARN&&sc.warn(`Auth (${As}): ${r}`,...e)}function Gu(r,...e){sc.logLevel<=Ce.ERROR&&sc.error(`Auth (${As}): ${r}`,...e)}/**
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
 */function qn(r,...e){throw yf(r,...e)}function lr(r,...e){return yf(r,...e)}function b_(r,e,t){const i=Object.assign(Object.assign({},J0()),{[e]:t});return new dl("auth","Firebase",i).create(e,{appName:r.name})}function Ur(r){return b_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yf(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return L_.create(r,...e)}function ye(r,e,...t){if(!r)throw yf(e,...t)}function br(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Gu(e),new Error(e)}function Br(r,e){r||br(e)}/**
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
 */function jd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function eI(){return zg()==="http:"||zg()==="https:"}function zg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function tI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eI()||xT()||"connection"in navigator)?navigator.onLine:!0}function nI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class pl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Br(t>e,"Short delay should be less than long delay!"),this.isMobile=kT()||DT()}get(){return tI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _f(r,e){Br(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class M_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const iI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sI=new pl(3e4,6e4);function Li(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function bi(r,e,t,i,o={}){return U_(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=fl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return NT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Vi(r.emulatorConfig.host)&&(_.credentials="include"),M_.fetch()(await F_(r,r.config.apiHost,t,f),_)})}async function U_(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},rI),e);try{const o=new aI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Uu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Uu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Uu(r,"user-disabled",h);const w=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw b_(r,w,_);qn(r,w)}}catch(o){if(o instanceof yr)throw o;qn(r,"network-request-failed",{message:String(o)})}}async function ml(r,e,t,i,o={}){const l=await bi(r,e,t,i,o);return"mfaPendingCredential"in l&&qn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function F_(r,e,t,i){const o=`${e}${t}?${i}`,l=r,h=l.config.emulator?_f(r.config,o):`${r.config.apiScheme}://${o}`;return iI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function oI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(lr(this.auth,"network-request-failed")),sI.get())})}}function Uu(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=lr(r,e,i);return o.customData._tokenResponse=t,o}function $g(r){return r!==void 0&&r.enterprise!==void 0}class lI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return oI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function uI(r,e){return bi(r,"GET","/v2/recaptchaConfig",Li(r,e))}/**
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
 */async function cI(r,e){return bi(r,"POST","/v1/accounts:delete",e)}async function oc(r,e){return bi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ga(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hI(r,e=!1){const t=ut(r),i=await t.getIdToken(e),o=vf(i);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Ga(Sd(o.auth_time)),issuedAtTime:Ga(Sd(o.iat)),expirationTime:Ga(Sd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Sd(r){return Number(r)*1e3}function vf(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Gu("JWT malformed, contained fewer than 3 sections"),null;try{const o=I_(t);return o?JSON.parse(o):(Gu("Failed to decode base64 JWT payload"),null)}catch(o){return Gu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Wg(r){const e=vf(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function el(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof yr&&dI(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function dI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class fI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ga(this.lastLoginAt),this.creationTime=Ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ac(r){var e;const t=r.auth,i=await r.getIdToken(),o=await el(r,oc(t,{idToken:i}));ye(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?j_(l.providerUserInfo):[],f=mI(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),w=g?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Bd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,T)}async function pI(r){const e=ut(r);await ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mI(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function j_(r){return r.map(e=>{var{providerId:t}=e,i=gf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function gI(r,e){const t=await U_(r,{},async()=>{const i=fl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await F_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return r.emulatorConfig&&Vi(r.emulatorConfig.host)&&(g.credentials="include"),M_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yI(r,e){return bi(r,"POST","/v2/accounts:revokeToken",Li(r,e))}/**
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
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=Wg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await gI(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Co;return i&&(ye(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return br("not implemented")}}/**
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
 */function mi(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=gf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Bd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await el(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return hI(this,e)}reload(){return pI(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ac(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(Ur(this.auth));const e=await this.getIdToken();return await el(this,cI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,g,_,w;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,M=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,$=(h=t.photoURL)!==null&&h!==void 0?h:void 0,H=(f=t.tenantId)!==null&&f!==void 0?f:void 0,z=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,J=(_=t.createdAt)!==null&&_!==void 0?_:void 0,te=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ne,emailVerified:le,isAnonymous:ke,providerData:ve,stsTokenManager:C}=t;ye(ne&&C,e,"internal-error");const S=Co.fromJSON(this.name,C);ye(typeof ne=="string",e,"internal-error"),mi(T,e.name),mi(I,e.name),ye(typeof le=="boolean",e,"internal-error"),ye(typeof ke=="boolean",e,"internal-error"),mi(M,e.name),mi($,e.name),mi(H,e.name),mi(z,e.name),mi(J,e.name),mi(te,e.name);const R=new $n({uid:ne,auth:e,email:I,emailVerified:le,displayName:T,isAnonymous:ke,photoURL:$,phoneNumber:M,tenantId:H,stsTokenManager:S,createdAt:J,lastLoginAt:te});return ve&&Array.isArray(ve)&&(R.providerData=ve.map(N=>Object.assign({},N))),z&&(R._redirectEventId=z),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new Co;o.updateFromServerResponse(t);const l=new $n({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await ac(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?j_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Co;f.updateFromIdToken(i);const g=new $n({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Bd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
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
 */const Hg=new Map;function Mr(r){Br(r instanceof Function,"Expected a class definition");let e=Hg.get(r);return e?(Br(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Hg.set(r,e),e)}/**
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
 */class B_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}B_.type="NONE";const qg=B_;/**
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
 */function Ku(r,e,t){return`firebase:${r}:${e}:${t}`}class No{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Ku(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ku("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await oc(this.auth,{idToken:e}).catch(()=>{});return t?$n._fromGetAccountInfoResponse(this.auth,t,e):null}return $n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new No(Mr(qg),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Mr(qg);const h=Ku(i,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const w=await _._get(h);if(w){let T;if(typeof w=="string"){const I=await oc(e,{idToken:w}).catch(()=>{});if(!I)break;T=await $n._fromGetAccountInfoResponse(e,I,w)}else T=$n._fromJSON(e,w);_!==l&&(f=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new No(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new No(l,e,i))}}/**
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
 */function Gg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(G_(e))return"Blackberry";if(K_(e))return"Webos";if($_(e))return"Safari";if((e.includes("chrome/")||W_(e))&&!e.includes("edge/"))return"Chrome";if(q_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function z_(r=$t()){return/firefox\//i.test(r)}function $_(r=$t()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function W_(r=$t()){return/crios\//i.test(r)}function H_(r=$t()){return/iemobile/i.test(r)}function q_(r=$t()){return/android/i.test(r)}function G_(r=$t()){return/blackberry/i.test(r)}function K_(r=$t()){return/webos/i.test(r)}function wf(r=$t()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function _I(r=$t()){var e;return wf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vI(){return OT()&&document.documentMode===10}function Q_(r=$t()){return wf(r)||q_(r)||K_(r)||G_(r)||/windows phone/i.test(r)||H_(r)}/**
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
 */function X_(r,e=[]){let t;switch(r){case"Browser":t=Gg($t());break;case"Worker":t=`${Gg($t())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${As}/${i}`}/**
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
 */class wI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function EI(r,e={}){return bi(r,"GET","/v2/passwordPolicy",Li(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const TI=6;class II{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:TI,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(i=g.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class SI{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kg(this),this.idTokenSubscription=new Kg(this),this.beforeStateQueue=new wI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await oc(this,{idToken:e}),i=await $n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ac(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(Ur(this));const t=e?ut(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EI(this),t=new II(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new dl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await yI(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[Mr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Z0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Rs(r){return ut(r)}class Kg{constructor(e){this.auth=e,this.observer=null,this.addObserver=BT(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AI(r){Rc=r}function Y_(r){return Rc.loadJS(r)}function RI(){return Rc.recaptchaEnterpriseScript}function PI(){return Rc.gapiScript}function kI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class CI{constructor(){this.enterprise=new NI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class NI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const xI="recaptcha-enterprise",J_="NO_RECAPTCHA";class DI{constructor(e){this.type=xI,this.auth=Rs(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{uI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new lI(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;$g(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(J_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new CI().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&$g(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=RI();g.length!==0&&(g+=f),Y_(g).then(()=>{o(f,l,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function Qg(r,e,t,i=!1,o=!1){const l=new DI(r);let h;if(o)h=J_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function zd(r,e,t,i,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Qg(r,e,t,t==="getOobCode");return i(r,h)}else return i(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Qg(r,e,t,t==="getOobCode");return i(r,f)}else return Promise.reject(h)})}/**
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
 */function OI(r,e){const t=Ac(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ys(l,e??{}))return o;qn(o,"already-initialized")}return t.initialize({options:e})}function VI(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Mr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function LI(r,e,t){const i=Rs(r);ye(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Z_(e),{host:h,port:f}=bI(e),g=f===null?"":`:${f}`,_={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ye(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ye(ys(_,i.config.emulator)&&ys(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Vi(h)?(hf(`${l}//${h}${g}`),df("Auth",!0)):MI()}function Z_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function bI(r){const e=Z_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Xg(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Xg(h)}}}function Xg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function MI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Ef{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return br("not implemented")}_getIdTokenResponse(e){return br("not implemented")}_linkToIdToken(e,t){return br("not implemented")}_getReauthenticationResolver(e){return br("not implemented")}}async function UI(r,e){return bi(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function FI(r,e){return ml(r,"POST","/v1/accounts:signInWithPassword",Li(r,e))}/**
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
 */async function jI(r,e){return ml(r,"POST","/v1/accounts:signInWithEmailLink",Li(r,e))}async function BI(r,e){return ml(r,"POST","/v1/accounts:signInWithEmailLink",Li(r,e))}/**
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
 */class tl extends Ef{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new tl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new tl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zd(e,t,"signInWithPassword",FI);case"emailLink":return jI(e,{email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zd(e,i,"signUpPassword",UI);case"emailLink":return BI(e,{idToken:t,email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xo(r,e){return ml(r,"POST","/v1/accounts:signInWithIdp",Li(r,e))}/**
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
 */const zI="http://localhost";class vs extends Ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=gf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new vs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return xo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,xo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xo(e,t)}buildRequest(){const e={requestUri:zI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fl(t)}return e}}/**
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
 */function $I(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WI(r){const e=ja(Ba(r)).link,t=e?ja(Ba(e)).deep_link_id:null,i=ja(Ba(r)).deep_link_id;return(i?ja(Ba(i)).link:null)||i||t||e||r}class Tf{constructor(e){var t,i,o,l,h,f;const g=ja(Ba(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(i=g.oobCode)!==null&&i!==void 0?i:null,T=$I((o=g.mode)!==null&&o!==void 0?o:null);ye(_&&w&&T,"argument-error"),this.apiKey=_,this.operation=T,this.code=w,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=WI(e);try{return new Tf(t)}catch{return null}}}/**
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
 */class Uo{constructor(){this.providerId=Uo.PROVIDER_ID}static credential(e,t){return tl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Tf.parseLink(t);return ye(i,"argument-error"),tl._fromEmailAndCode(e,i.code,i.tenantId)}}Uo.PROVIDER_ID="password";Uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ev{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gl extends ev{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gi extends gl{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";gi.PROVIDER_ID="facebook.com";/**
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
 */class yi extends gl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return yi.credential(t,i)}catch{return null}}}yi.GOOGLE_SIGN_IN_METHOD="google.com";yi.PROVIDER_ID="google.com";/**
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
 */class _i extends gl{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.GITHUB_SIGN_IN_METHOD="github.com";_i.PROVIDER_ID="github.com";/**
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
 */class vi extends gl{constructor(){super("twitter.com")}static credential(e,t){return vs._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return vi.credential(t,i)}catch{return null}}}vi.TWITTER_SIGN_IN_METHOD="twitter.com";vi.PROVIDER_ID="twitter.com";/**
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
 */async function HI(r,e){return ml(r,"POST","/v1/accounts:signUp",Li(r,e))}/**
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
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await $n._fromIdTokenResponse(e,i,o),h=Yg(i);return new ws({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Yg(i);return new ws({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Yg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class lc extends yr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,lc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new lc(e,t,i,o)}}function tv(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?lc._fromErrorAndOperation(r,l,e,i):l})}async function qI(r,e,t=!1){const i=await el(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ws._forOperation(r,"link",i)}/**
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
 */async function GI(r,e,t=!1){const{auth:i}=r;if(pn(i.app))return Promise.reject(Ur(i));const o="reauthenticate";try{const l=await el(r,tv(i,o,e,r),t);ye(l.idToken,i,"internal-error");const h=vf(l.idToken);ye(h,i,"internal-error");const{sub:f}=h;return ye(r.uid===f,i,"user-mismatch"),ws._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&qn(i,"user-mismatch"),l}}/**
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
 */async function nv(r,e,t=!1){if(pn(r.app))return Promise.reject(Ur(r));const i="signIn",o=await tv(r,i,e),l=await ws._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}async function KI(r,e){return nv(Rs(r),e)}/**
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
 */async function rv(r){const e=Rs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QI(r,e,t){if(pn(r.app))return Promise.reject(Ur(r));const i=Rs(r),h=await zd(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&rv(r),g}),f=await ws._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function XI(r,e,t){return pn(r.app)?Promise.reject(Ur(r)):KI(ut(r),Uo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&rv(r),i})}/**
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
 */function YI(r,e){return ut(r).setPersistence(e)}function JI(r,e,t,i){return ut(r).onIdTokenChanged(e,t,i)}function ZI(r,e,t){return ut(r).beforeAuthStateChanged(e,t)}function eS(r,e,t,i){return ut(r).onAuthStateChanged(e,t,i)}const uc="__sak";/**
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
 */class iv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tS=1e3,nS=10;class sv extends iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);vI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,nS):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},tS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sv.type="LOCAL";const ov=sv;/**
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
 */class av extends iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}av.type="SESSION";const lv=av;/**
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
 */function rS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Pc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await rS(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
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
 */function If(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class iS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=If("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===_)switch(I.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ur(){return window}function sS(r){ur().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function uv(){return typeof ur().WorkerGlobalScope<"u"&&typeof ur().importScripts=="function"}async function oS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aS(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function lS(){return uv()?self:null}/**
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
 */const cv="firebaseLocalStorageDb",uS=1,cc="firebaseLocalStorage",hv="fbase_key";class yl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function kc(r,e){return r.transaction([cc],e?"readwrite":"readonly").objectStore(cc)}function cS(){const r=indexedDB.deleteDatabase(cv);return new yl(r).toPromise()}function $d(){const r=indexedDB.open(cv,uS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(cc,{keyPath:hv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(cc)?e(i):(i.close(),await cS(),e(await $d()))})})}async function Jg(r,e,t){const i=kc(r,!0).put({[hv]:e,value:t});return new yl(i).toPromise()}async function hS(r,e){const t=kc(r,!1).get(e),i=await new yl(t).toPromise();return i===void 0?null:i.value}function Zg(r,e){const t=kc(r,!0).delete(e);return new yl(t).toPromise()}const dS=800,fS=3;class dv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $d(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>fS)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(lS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await oS(),!this.activeServiceWorker)return;this.sender=new iS(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $d();return await Jg(e,uc,"1"),await Zg(e,uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Jg(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>hS(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=kc(o,!1).getAll();return new yl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dv.type="LOCAL";const pS=dv;new pl(3e4,6e4);/**
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
 */function mS(r,e){return e?Mr(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Sf extends Ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gS(r){return nv(r.auth,new Sf(r),r.bypassAuthState)}function yS(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),GI(t,new Sf(r),r.bypassAuthState)}async function _S(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),qI(t,new Sf(r),r.bypassAuthState)}/**
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
 */class fv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gS;case"linkViaPopup":case"linkViaRedirect":return _S;case"reauthViaPopup":case"reauthViaRedirect":return yS;default:qn(this.auth,"internal-error")}}resolve(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vS=new pl(2e3,1e4);class ko extends fv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ko.currentPopupAction&&ko.currentPopupAction.cancel(),ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Br(this.filter.length===1,"Popup operations only handle one event");const e=If();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vS.get())};e()}}ko.currentPopupAction=null;/**
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
 */const wS="pendingRedirect",Qu=new Map;class ES extends fv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Qu.get(this.auth._key());if(!e){try{const i=await TS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Qu.set(this.auth._key(),e)}return this.bypassAuthState||Qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TS(r,e){const t=AS(e),i=SS(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function IS(r,e){Qu.set(r._key(),e)}function SS(r){return Mr(r._redirectPersistence)}function AS(r){return Ku(wS,r.config.apiKey,r.name)}async function RS(r,e,t=!1){if(pn(r.app))return Promise.reject(Ur(r));const i=Rs(r),o=mS(i,e),h=await new ES(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const PS=600*1e3;class kS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!pv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(lr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PS&&this.cachedEventUids.clear(),this.cachedEventUids.has(ey(e))}saveEventToCache(e){this.cachedEventUids.add(ey(e)),this.lastProcessedEventTime=Date.now()}}function ey(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function pv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pv(r);default:return!1}}/**
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
 */async function NS(r,e={}){return bi(r,"GET","/v1/projects",e)}/**
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
 */const xS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DS=/^https?/;async function OS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await NS(r);for(const t of e)try{if(VS(t))return}catch{}qn(r,"unauthorized-domain")}function VS(r){const e=jd(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!DS.test(t))return!1;if(xS.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const LS=new pl(3e4,6e4);function ty(){const r=ur().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function bS(r){return new Promise((e,t)=>{var i,o,l;function h(){ty(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ty(),t(lr(r,"network-request-failed"))},timeout:LS.get()})}if(!((o=(i=ur().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=ur().gapi)===null||l===void 0)&&l.load)h();else{const f=kI("iframefcb");return ur()[f]=()=>{gapi.load?h():t(lr(r,"network-request-failed"))},Y_(`${PI()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Xu=null,e})}let Xu=null;function MS(r){return Xu=Xu||bS(r),Xu}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const US=new pl(5e3,15e3),FS="__/auth/iframe",jS="emulator/auth/iframe",BS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $S(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?_f(e,jS):`https://${r.config.authDomain}/${FS}`,i={apiKey:e.apiKey,appName:r.name,v:As},o=zS.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${fl(i).slice(1)}`}async function WS(r){const e=await MS(r),t=ur().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:$S(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BS,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=lr(r,"network-request-failed"),f=ur().setTimeout(()=>{l(h)},US.get());function g(){ur().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const HS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qS=500,GS=600,KS="_blank",QS="http://localhost";class ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XS(r,e,t,i=qS,o=GS){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g=Object.assign(Object.assign({},HS),{width:i.toString(),height:o.toString(),top:l,left:h}),_=$t().toLowerCase();t&&(f=W_(_)?KS:t),z_(_)&&(e=e||QS,g.scrollbars="yes");const w=Object.entries(g).reduce((I,[M,$])=>`${I}${M}=${$},`,"");if(_I(_)&&f!=="_self")return YS(e||"",f),new ny(null);const T=window.open(e||"",f,w);ye(T,r,"popup-blocked");try{T.focus()}catch{}return new ny(T)}function YS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const JS="__/auth/handler",ZS="emulator/auth/handler",eA=encodeURIComponent("fac");async function ry(r,e,t,i,o,l){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:As,eventId:o};if(e instanceof ev){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",jT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof gl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await r._getAppCheckToken(),_=g?`#${eA}=${encodeURIComponent(g)}`:"";return`${tA(r)}?${fl(f).slice(1)}${_}`}function tA({config:r}){return r.emulator?_f(r,ZS):`https://${r.authDomain}/${JS}`}/**
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
 */const Ad="webStorageSupport";class nA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lv,this._completeRedirectFn=RS,this._overrideRedirectResult=IS}async _openPopup(e,t,i,o){var l;Br((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await ry(e,t,i,jd(),o);return XS(e,h,If())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await ry(e,t,i,jd(),o);return sS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Br(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await WS(e),i=new kS(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ad,{type:Ad},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Ad];h!==void 0&&t(!!h),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=OS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Q_()||$_()||wf()}}const rA=nA;var iy="@firebase/auth",sy="1.10.8";/**
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
 */class iA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oA(r){_s(new Ri("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X_(r)},_=new SI(i,o,l,g);return VI(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),_s(new Ri("auth-internal",e=>{const t=Rs(e.getProvider("auth").getImmediate());return(i=>new iA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(iy,sy,sA(r)),ar(iy,sy,"esm2017")}/**
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
 */const aA=300,lA=P_("authIdTokenMaxAge")||aA;let oy=null;const uA=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>lA)return;const o=t==null?void 0:t.token;oy!==o&&(oy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function cA(r=mf()){const e=Ac(r,"auth");if(e.isInitialized())return e.getImmediate();const t=OI(r,{popupRedirectResolver:rA,persistence:[pS,ov,lv]}),i=P_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=uA(l.toString());ZI(t,h,()=>h(t.currentUser)),JI(t,f=>h(f))}}const o=S_("auth");return o&&LI(t,`http://${o}`),t}function hA(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}AI({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=lr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",hA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oA("Browser");/**
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
 */const mv="firebasestorage.googleapis.com",gv="storageBucket",dA=120*1e3,fA=600*1e3;/**
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
 */class rt extends yr{constructor(e,t,i=0){super(Rd(e),`Firebase Storage: ${t} (${Rd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Rd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function Rd(r){return"storage/"+r}function Af(){const r="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,r)}function pA(r){return new rt(nt.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function mA(r){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gA(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,r)}function yA(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _A(r){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function vA(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wA(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function EA(r){return new rt(nt.INVALID_URL,"Invalid URL '"+r+"'.")}function TA(r){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function IA(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+gv+"' property when initializing the app?")}function SA(){return new rt(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function AA(){return new rt(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function RA(r){return new rt(nt.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wd(r){return new rt(nt.INVALID_ARGUMENT,r)}function yv(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function PA(r){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ka(r,e){return new rt(nt.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Fa(r){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+r)}/**
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
 */class Qt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Qt.makeFromUrl(e,t)}catch{return new Qt(e,"")}if(i.path==="")return i;throw TA(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(le){le.path.charAt(le.path.length-1)==="/"&&(le.path_=le.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function _(le){le.path_=decodeURIComponent(le.path)}const w="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",M=new RegExp(`^https?://${T}/${w}/b/${o}/o${I}`,"i"),$={bucket:1,path:3},H=t===mv?"(?:storage.googleapis.com|storage.cloud.google.com)":t,z="([^?#]*)",J=new RegExp(`^https?://${H}/${o}/${z}`,"i"),ne=[{regex:f,indices:g,postModify:l},{regex:M,indices:$,postModify:_},{regex:J,indices:{bucket:1,path:2},postModify:_}];for(let le=0;le<ne.length;le++){const ke=ne[le],ve=ke.regex.exec(e);if(ve){const C=ve[ke.indices.bucket];let S=ve[ke.indices.path];S||(S=""),i=new Qt(C,S),ke.postModify(i);break}}if(i==null)throw EA(e);return i}}class kA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function CA(r,e,t){let i=1,o=null,l=null,h=!1,f=0;function g(){return f===2}let _=!1;function w(...z){_||(_=!0,e.apply(null,z))}function T(z){o=setTimeout(()=>{o=null,r(M,g())},z)}function I(){l&&clearTimeout(l)}function M(z,...J){if(_){I();return}if(z){I(),w.call(null,z,...J);return}if(g()||h){I(),w.call(null,z,...J);return}i<64&&(i*=2);let ne;f===1?(f=2,ne=0):ne=(i+Math.random())*1e3,T(ne)}let $=!1;function H(z){$||($=!0,I(),!_&&(o!==null?(z||(f=2),clearTimeout(o),T(0)):z||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,H(!0)},t),H}function NA(r){r(!1)}/**
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
 */function xA(r){return r!==void 0}function DA(r){return typeof r=="object"&&!Array.isArray(r)}function Rf(r){return typeof r=="string"||r instanceof String}function ay(r){return Pf()&&r instanceof Blob}function Pf(){return typeof Blob<"u"}function Hd(r,e,t,i){if(i<e)throw Wd(`Invalid value for '${r}'. Expected ${e} or greater.`);if(i>t)throw Wd(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
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
 */function Cc(r,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${r}`}function _v(r){const e=encodeURIComponent;let t="?";for(const i in r)if(r.hasOwnProperty(i)){const o=e(i)+"="+e(r[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var ps;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(ps||(ps={}));/**
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
 */function OA(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
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
 */class VA{constructor(e,t,i,o,l,h,f,g,_,w,T,I=!0,M=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=w,this.connectionFactory_=T,this.retry=I,this.isUsingEmulator=M,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(($,H)=>{this.resolve_=$,this.reject_=H,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Fu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const g=f.loaded,_=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===ps.NO_ERROR,g=l.getStatus();if(!f||OA(g,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===ps.ABORT;i(!1,new Fu(!1,null,w));return}const _=this.successCodes_.indexOf(g)!==-1;i(!0,new Fu(_,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());xA(g)?l(g):l()}catch(g){h(g)}else if(f!==null){const g=Af();g.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,g)):h(g)}else if(o.canceled){const g=this.appDelete_?yv():wA();h(g)}else{const g=vA();h(g)}};this.canceled_?t(!1,new Fu(!1,null,!0)):this.backoffId_=CA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&NA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function LA(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function bA(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function MA(r,e){e&&(r["X-Firebase-GMPID"]=e)}function UA(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function FA(r,e,t,i,o,l,h=!0,f=!1){const g=_v(r.urlParams),_=r.url+g,w=Object.assign({},r.headers);return MA(w,e),LA(w,t),bA(w,l),UA(w,i),new VA(_,r.method,w,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,f)}/**
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
 */function jA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function BA(...r){const e=jA();if(e!==void 0){const t=new e;for(let i=0;i<r.length;i++)t.append(r[i]);return t.getBlob()}else{if(Pf())return new Blob(r);throw new rt(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function zA(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
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
 */function $A(r){if(typeof atob>"u")throw RA("base-64");return atob(r)}/**
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
 */const or={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Pd{constructor(e,t){this.data=e,this.contentType=t||null}}function WA(r,e){switch(r){case or.RAW:return new Pd(vv(e));case or.BASE64:case or.BASE64URL:return new Pd(wv(r,e));case or.DATA_URL:return new Pd(qA(e),GA(e))}throw Af()}function vv(r){const e=[];for(let t=0;t<r.length;t++){let i=r.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=r.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function HA(r){let e;try{e=decodeURIComponent(r)}catch{throw Ka(or.DATA_URL,"Malformed data URL.")}return vv(e)}function wv(r,e){switch(r){case or.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Ka(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case or.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Ka(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=$A(e)}catch(o){throw o.message.includes("polyfill")?o:Ka(r,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class Ev{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ka(or.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=KA(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function qA(r){const e=new Ev(r);return e.base64?wv(or.BASE64,e.rest):HA(e.rest)}function GA(r){return new Ev(r).contentType}function KA(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
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
 */class wi{constructor(e,t){let i=0,o="";ay(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(ay(this.data_)){const i=this.data_,o=zA(i,e,t);return o===null?null:new wi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new wi(i,!0)}}static getBlob(...e){if(Pf()){const t=e.map(i=>i instanceof wi?i.data_:i);return new wi(BA.apply(null,t))}else{const t=e.map(h=>Rf(h)?WA(or.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new wi(o,!0)}}uploadData(){return this.data_}}/**
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
 */function kf(r){let e;try{e=JSON.parse(r)}catch{return null}return DA(e)?e:null}/**
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
 */function QA(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function XA(r,e){const t=e.split("/").filter(i=>i.length>0).join("/");return r.length===0?t:r+"/"+t}function Tv(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */function YA(r,e){return e}class Kt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||YA}}let ju=null;function JA(r){return!Rf(r)||r.length<2?r:Tv(r)}function Iv(){if(ju)return ju;const r=[];r.push(new Kt("bucket")),r.push(new Kt("generation")),r.push(new Kt("metageneration")),r.push(new Kt("name","fullPath",!0));function e(l,h){return JA(h)}const t=new Kt("name");t.xform=e,r.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Kt("size");return o.xform=i,r.push(o),r.push(new Kt("timeCreated")),r.push(new Kt("updated")),r.push(new Kt("md5Hash",null,!0)),r.push(new Kt("cacheControl",null,!0)),r.push(new Kt("contentDisposition",null,!0)),r.push(new Kt("contentEncoding",null,!0)),r.push(new Kt("contentLanguage",null,!0)),r.push(new Kt("contentType",null,!0)),r.push(new Kt("metadata","customMetadata",!0)),ju=r,ju}function ZA(r,e){function t(){const i=r.bucket,o=r.fullPath,l=new Qt(i,o);return e._makeStorageReference(l)}Object.defineProperty(r,"ref",{get:t})}function e1(r,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return ZA(i,r),i}function Sv(r,e,t){const i=kf(e);return i===null?null:e1(r,i,t)}function t1(r,e,t,i){const o=kf(e);if(o===null||!Rf(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(_=>{const w=r.bucket,T=r.fullPath,I="/b/"+h(w)+"/o/"+h(T),M=Cc(I,t,i),$=_v({alt:"media",token:_});return M+$})[0]}function n1(r,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=r[l.local])}return JSON.stringify(t)}/**
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
 */const ly="prefixes",uy="items";function r1(r,e,t){const i={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[ly])for(const o of t[ly]){const l=o.replace(/\/$/,""),h=r._makeStorageReference(new Qt(e,l));i.prefixes.push(h)}if(t[uy])for(const o of t[uy]){const l=r._makeStorageReference(new Qt(e,o.name));i.items.push(l)}return i}function i1(r,e,t){const i=kf(t);return i===null?null:r1(r,e,i)}class Cf{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Nf(r){if(!r)throw Af()}function s1(r,e){function t(i,o){const l=Sv(r,o,e);return Nf(l!==null),l}return t}function o1(r,e){function t(i,o){const l=i1(r,e,o);return Nf(l!==null),l}return t}function a1(r,e){function t(i,o){const l=Sv(r,o,e);return Nf(l!==null),t1(l,o,r.host,r._protocol)}return t}function xf(r){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=yA():o=gA():t.getStatus()===402?o=mA(r.bucket):t.getStatus()===403?o=_A(r.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function l1(r){const e=xf(r);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=pA(r.path)),l.serverResponse=o.serverResponse,l}return t}function u1(r,e,t,i,o){const l={};e.isRoot?l.prefix="":l.prefix=e.path+"/",t.length>0&&(l.delimiter=t),i&&(l.pageToken=i),o&&(l.maxResults=o);const h=e.bucketOnlyServerUrl(),f=Cc(h,r.host,r._protocol),g="GET",_=r.maxOperationRetryTime,w=new Cf(f,g,o1(r,e.bucket),_);return w.urlParams=l,w.errorHandler=xf(e),w}function c1(r,e,t){const i=e.fullServerUrl(),o=Cc(i,r.host,r._protocol),l="GET",h=r.maxOperationRetryTime,f=new Cf(o,l,a1(r,t),h);return f.errorHandler=l1(e),f}function h1(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function d1(r,e,t){const i=Object.assign({},t);return i.fullPath=r.path,i.size=e.size(),i.contentType||(i.contentType=h1(null,e)),i}function f1(r,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let ne="";for(let le=0;le<2;le++)ne=ne+Math.random().toString().slice(2);return ne}const g=f();h["Content-Type"]="multipart/related; boundary="+g;const _=d1(e,i,o),w=n1(_,t),T="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+w+`\r
--`+g+`\r
Content-Type: `+_.contentType+`\r
\r
`,I=`\r
--`+g+"--",M=wi.getBlob(T,i,I);if(M===null)throw SA();const $={name:_.fullPath},H=Cc(l,r.host,r._protocol),z="POST",J=r.maxUploadRetryTime,te=new Cf(H,z,s1(r,t),J);return te.urlParams=$,te.headers=h,te.body=M.uploadData(),te.errorHandler=xf(e),te}class p1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ps.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ps.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ps.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o,l){if(this.sent_)throw Fa("cannot .send() more than once");if(Vi(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const h in l)l.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,l[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Fa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Fa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Fa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Fa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class m1 extends p1{initXhr(){this.xhr_.responseType="text"}}function Df(){return new m1}/**
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
 */class Es{constructor(e,t){this._service=e,t instanceof Qt?this._location=t:this._location=Qt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Es(e,t)}get root(){const e=new Qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Tv(this._location.path)}get storage(){return this._service}get parent(){const e=QA(this._location.path);if(e===null)return null;const t=new Qt(this._location.bucket,e);return new Es(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw PA(e)}}function g1(r,e,t){r._throwIfRoot("uploadBytes");const i=f1(r.storage,r._location,Iv(),new wi(e,!0),t);return r.storage.makeRequestWithTokens(i,Df).then(o=>({metadata:o,ref:r}))}function y1(r){const e={prefixes:[],items:[]};return Av(r,e).then(()=>e)}async function Av(r,e,t){const o=await _1(r,{pageToken:t});e.prefixes.push(...o.prefixes),e.items.push(...o.items),o.nextPageToken!=null&&await Av(r,e,o.nextPageToken)}function _1(r,e){e!=null&&typeof e.maxResults=="number"&&Hd("options.maxResults",1,1e3,e.maxResults);const t=e||{},i=u1(r.storage,r._location,"/",t.pageToken,t.maxResults);return r.storage.makeRequestWithTokens(i,Df)}function v1(r){r._throwIfRoot("getDownloadURL");const e=c1(r.storage,r._location,Iv());return r.storage.makeRequestWithTokens(e,Df).then(t=>{if(t===null)throw AA();return t})}function w1(r,e){const t=XA(r._location.path,e),i=new Qt(r._location.bucket,t);return new Es(r.storage,i)}/**
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
 */function E1(r){return/^[A-Za-z]+:\/\//.test(r)}function T1(r,e){return new Es(r,e)}function Rv(r,e){if(r instanceof Of){const t=r;if(t._bucket==null)throw IA();const i=new Es(t,t._bucket);return e!=null?Rv(i,e):i}else return e!==void 0?w1(r,e):r}function I1(r,e){if(e&&E1(e)){if(r instanceof Of)return T1(r,e);throw Wd("To use ref(service, url), the first argument must be a Storage instance.")}else return Rv(r,e)}function cy(r,e){const t=e==null?void 0:e[gv];return t==null?null:Qt.makeFromBucketSpec(t,r)}function S1(r,e,t,i={}){r.host=`${e}:${t}`;const o=Vi(e);o&&(hf(`https://${r.host}/b`),df("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(r._overrideAuthToken=typeof l=="string"?l:k_(l,r.app.options.projectId))}class Of{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=mv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dA,this._maxUploadRetryTime=fA,this._requests=new Set,o!=null?this._bucket=Qt.makeFromBucketSpec(o,this._host):this._bucket=cy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,e):this._bucket=cy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Es(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new kA(yv());{const h=FA(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const hy="@firebase/storage",dy="0.13.14";/**
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
 */const Pv="storage";function A1(r,e,t){return r=ut(r),g1(r,e,t)}function R1(r){return r=ut(r),y1(r)}function P1(r){return r=ut(r),v1(r)}function fy(r,e){return r=ut(r),I1(r,e)}function k1(r=mf(),e){r=ut(r);const i=Ac(r,Pv).getImmediate({identifier:e}),o=A_("storage");return o&&C1(i,...o),i}function C1(r,e,t,i={}){S1(r,e,t,i)}function N1(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),i=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new Of(t,i,o,e,As)}function x1(){_s(new Ri(Pv,N1,"PUBLIC").setMultipleInstances(!0)),ar(hy,dy,""),ar(hy,dy,"esm2017")}x1();var D1="firebase",O1="11.10.0";/**
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
 */ar(D1,O1,"app");var py=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si,kv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,S){function R(){}R.prototype=S.prototype,C.D=S.prototype,C.prototype=new R,C.prototype.constructor=C,C.C=function(N,D,V){for(var P=Array(arguments.length-2),it=2;it<arguments.length;it++)P[it-2]=arguments[it];return S.prototype[D].apply(N,P)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,S,R){R||(R=0);var N=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)N[D]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(D=0;16>D;++D)N[D]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=C.g[0],R=C.g[1],D=C.g[2];var V=C.g[3],P=S+(V^R&(D^V))+N[0]+3614090360&4294967295;S=R+(P<<7&4294967295|P>>>25),P=V+(D^S&(R^D))+N[1]+3905402710&4294967295,V=S+(P<<12&4294967295|P>>>20),P=D+(R^V&(S^R))+N[2]+606105819&4294967295,D=V+(P<<17&4294967295|P>>>15),P=R+(S^D&(V^S))+N[3]+3250441966&4294967295,R=D+(P<<22&4294967295|P>>>10),P=S+(V^R&(D^V))+N[4]+4118548399&4294967295,S=R+(P<<7&4294967295|P>>>25),P=V+(D^S&(R^D))+N[5]+1200080426&4294967295,V=S+(P<<12&4294967295|P>>>20),P=D+(R^V&(S^R))+N[6]+2821735955&4294967295,D=V+(P<<17&4294967295|P>>>15),P=R+(S^D&(V^S))+N[7]+4249261313&4294967295,R=D+(P<<22&4294967295|P>>>10),P=S+(V^R&(D^V))+N[8]+1770035416&4294967295,S=R+(P<<7&4294967295|P>>>25),P=V+(D^S&(R^D))+N[9]+2336552879&4294967295,V=S+(P<<12&4294967295|P>>>20),P=D+(R^V&(S^R))+N[10]+4294925233&4294967295,D=V+(P<<17&4294967295|P>>>15),P=R+(S^D&(V^S))+N[11]+2304563134&4294967295,R=D+(P<<22&4294967295|P>>>10),P=S+(V^R&(D^V))+N[12]+1804603682&4294967295,S=R+(P<<7&4294967295|P>>>25),P=V+(D^S&(R^D))+N[13]+4254626195&4294967295,V=S+(P<<12&4294967295|P>>>20),P=D+(R^V&(S^R))+N[14]+2792965006&4294967295,D=V+(P<<17&4294967295|P>>>15),P=R+(S^D&(V^S))+N[15]+1236535329&4294967295,R=D+(P<<22&4294967295|P>>>10),P=S+(D^V&(R^D))+N[1]+4129170786&4294967295,S=R+(P<<5&4294967295|P>>>27),P=V+(R^D&(S^R))+N[6]+3225465664&4294967295,V=S+(P<<9&4294967295|P>>>23),P=D+(S^R&(V^S))+N[11]+643717713&4294967295,D=V+(P<<14&4294967295|P>>>18),P=R+(V^S&(D^V))+N[0]+3921069994&4294967295,R=D+(P<<20&4294967295|P>>>12),P=S+(D^V&(R^D))+N[5]+3593408605&4294967295,S=R+(P<<5&4294967295|P>>>27),P=V+(R^D&(S^R))+N[10]+38016083&4294967295,V=S+(P<<9&4294967295|P>>>23),P=D+(S^R&(V^S))+N[15]+3634488961&4294967295,D=V+(P<<14&4294967295|P>>>18),P=R+(V^S&(D^V))+N[4]+3889429448&4294967295,R=D+(P<<20&4294967295|P>>>12),P=S+(D^V&(R^D))+N[9]+568446438&4294967295,S=R+(P<<5&4294967295|P>>>27),P=V+(R^D&(S^R))+N[14]+3275163606&4294967295,V=S+(P<<9&4294967295|P>>>23),P=D+(S^R&(V^S))+N[3]+4107603335&4294967295,D=V+(P<<14&4294967295|P>>>18),P=R+(V^S&(D^V))+N[8]+1163531501&4294967295,R=D+(P<<20&4294967295|P>>>12),P=S+(D^V&(R^D))+N[13]+2850285829&4294967295,S=R+(P<<5&4294967295|P>>>27),P=V+(R^D&(S^R))+N[2]+4243563512&4294967295,V=S+(P<<9&4294967295|P>>>23),P=D+(S^R&(V^S))+N[7]+1735328473&4294967295,D=V+(P<<14&4294967295|P>>>18),P=R+(V^S&(D^V))+N[12]+2368359562&4294967295,R=D+(P<<20&4294967295|P>>>12),P=S+(R^D^V)+N[5]+4294588738&4294967295,S=R+(P<<4&4294967295|P>>>28),P=V+(S^R^D)+N[8]+2272392833&4294967295,V=S+(P<<11&4294967295|P>>>21),P=D+(V^S^R)+N[11]+1839030562&4294967295,D=V+(P<<16&4294967295|P>>>16),P=R+(D^V^S)+N[14]+4259657740&4294967295,R=D+(P<<23&4294967295|P>>>9),P=S+(R^D^V)+N[1]+2763975236&4294967295,S=R+(P<<4&4294967295|P>>>28),P=V+(S^R^D)+N[4]+1272893353&4294967295,V=S+(P<<11&4294967295|P>>>21),P=D+(V^S^R)+N[7]+4139469664&4294967295,D=V+(P<<16&4294967295|P>>>16),P=R+(D^V^S)+N[10]+3200236656&4294967295,R=D+(P<<23&4294967295|P>>>9),P=S+(R^D^V)+N[13]+681279174&4294967295,S=R+(P<<4&4294967295|P>>>28),P=V+(S^R^D)+N[0]+3936430074&4294967295,V=S+(P<<11&4294967295|P>>>21),P=D+(V^S^R)+N[3]+3572445317&4294967295,D=V+(P<<16&4294967295|P>>>16),P=R+(D^V^S)+N[6]+76029189&4294967295,R=D+(P<<23&4294967295|P>>>9),P=S+(R^D^V)+N[9]+3654602809&4294967295,S=R+(P<<4&4294967295|P>>>28),P=V+(S^R^D)+N[12]+3873151461&4294967295,V=S+(P<<11&4294967295|P>>>21),P=D+(V^S^R)+N[15]+530742520&4294967295,D=V+(P<<16&4294967295|P>>>16),P=R+(D^V^S)+N[2]+3299628645&4294967295,R=D+(P<<23&4294967295|P>>>9),P=S+(D^(R|~V))+N[0]+4096336452&4294967295,S=R+(P<<6&4294967295|P>>>26),P=V+(R^(S|~D))+N[7]+1126891415&4294967295,V=S+(P<<10&4294967295|P>>>22),P=D+(S^(V|~R))+N[14]+2878612391&4294967295,D=V+(P<<15&4294967295|P>>>17),P=R+(V^(D|~S))+N[5]+4237533241&4294967295,R=D+(P<<21&4294967295|P>>>11),P=S+(D^(R|~V))+N[12]+1700485571&4294967295,S=R+(P<<6&4294967295|P>>>26),P=V+(R^(S|~D))+N[3]+2399980690&4294967295,V=S+(P<<10&4294967295|P>>>22),P=D+(S^(V|~R))+N[10]+4293915773&4294967295,D=V+(P<<15&4294967295|P>>>17),P=R+(V^(D|~S))+N[1]+2240044497&4294967295,R=D+(P<<21&4294967295|P>>>11),P=S+(D^(R|~V))+N[8]+1873313359&4294967295,S=R+(P<<6&4294967295|P>>>26),P=V+(R^(S|~D))+N[15]+4264355552&4294967295,V=S+(P<<10&4294967295|P>>>22),P=D+(S^(V|~R))+N[6]+2734768916&4294967295,D=V+(P<<15&4294967295|P>>>17),P=R+(V^(D|~S))+N[13]+1309151649&4294967295,R=D+(P<<21&4294967295|P>>>11),P=S+(D^(R|~V))+N[4]+4149444226&4294967295,S=R+(P<<6&4294967295|P>>>26),P=V+(R^(S|~D))+N[11]+3174756917&4294967295,V=S+(P<<10&4294967295|P>>>22),P=D+(S^(V|~R))+N[2]+718787259&4294967295,D=V+(P<<15&4294967295|P>>>17),P=R+(V^(D|~S))+N[9]+3951481745&4294967295,C.g[0]=C.g[0]+S&4294967295,C.g[1]=C.g[1]+(D+(P<<21&4294967295|P>>>11))&4294967295,C.g[2]=C.g[2]+D&4294967295,C.g[3]=C.g[3]+V&4294967295}i.prototype.u=function(C,S){S===void 0&&(S=C.length);for(var R=S-this.blockSize,N=this.B,D=this.h,V=0;V<S;){if(D==0)for(;V<=R;)o(this,C,V),V+=this.blockSize;if(typeof C=="string"){for(;V<S;)if(N[D++]=C.charCodeAt(V++),D==this.blockSize){o(this,N),D=0;break}}else for(;V<S;)if(N[D++]=C[V++],D==this.blockSize){o(this,N),D=0;break}}this.h=D,this.o+=S},i.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var S=1;S<C.length-8;++S)C[S]=0;var R=8*this.o;for(S=C.length-8;S<C.length;++S)C[S]=R&255,R/=256;for(this.u(C),C=Array(16),S=R=0;4>S;++S)for(var N=0;32>N;N+=8)C[R++]=this.g[S]>>>N&255;return C};function l(C,S){var R=f;return Object.prototype.hasOwnProperty.call(R,C)?R[C]:R[C]=S(C)}function h(C,S){this.h=S;for(var R=[],N=!0,D=C.length-1;0<=D;D--){var V=C[D]|0;N&&V==S||(R[D]=V,N=!1)}this.g=R}var f={};function g(C){return-128<=C&&128>C?l(C,function(S){return new h([S|0],0>S?-1:0)}):new h([C|0],0>C?-1:0)}function _(C){if(isNaN(C)||!isFinite(C))return T;if(0>C)return z(_(-C));for(var S=[],R=1,N=0;C>=R;N++)S[N]=C/R|0,R*=4294967296;return new h(S,0)}function w(C,S){if(C.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(C.charAt(0)=="-")return z(w(C.substring(1),S));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(S,8)),N=T,D=0;D<C.length;D+=8){var V=Math.min(8,C.length-D),P=parseInt(C.substring(D,D+V),S);8>V?(V=_(Math.pow(S,V)),N=N.j(V).add(_(P))):(N=N.j(R),N=N.add(_(P)))}return N}var T=g(0),I=g(1),M=g(16777216);r=h.prototype,r.m=function(){if(H(this))return-z(this).m();for(var C=0,S=1,R=0;R<this.g.length;R++){var N=this.i(R);C+=(0<=N?N:4294967296+N)*S,S*=4294967296}return C},r.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if($(this))return"0";if(H(this))return"-"+z(this).toString(C);for(var S=_(Math.pow(C,6)),R=this,N="";;){var D=le(R,S).g;R=J(R,D.j(S));var V=((0<R.g.length?R.g[0]:R.h)>>>0).toString(C);if(R=D,$(R))return V+N;for(;6>V.length;)V="0"+V;N=V+N}},r.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function $(C){if(C.h!=0)return!1;for(var S=0;S<C.g.length;S++)if(C.g[S]!=0)return!1;return!0}function H(C){return C.h==-1}r.l=function(C){return C=J(this,C),H(C)?-1:$(C)?0:1};function z(C){for(var S=C.g.length,R=[],N=0;N<S;N++)R[N]=~C.g[N];return new h(R,~C.h).add(I)}r.abs=function(){return H(this)?z(this):this},r.add=function(C){for(var S=Math.max(this.g.length,C.g.length),R=[],N=0,D=0;D<=S;D++){var V=N+(this.i(D)&65535)+(C.i(D)&65535),P=(V>>>16)+(this.i(D)>>>16)+(C.i(D)>>>16);N=P>>>16,V&=65535,P&=65535,R[D]=P<<16|V}return new h(R,R[R.length-1]&-2147483648?-1:0)};function J(C,S){return C.add(z(S))}r.j=function(C){if($(this)||$(C))return T;if(H(this))return H(C)?z(this).j(z(C)):z(z(this).j(C));if(H(C))return z(this.j(z(C)));if(0>this.l(M)&&0>C.l(M))return _(this.m()*C.m());for(var S=this.g.length+C.g.length,R=[],N=0;N<2*S;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<C.g.length;D++){var V=this.i(N)>>>16,P=this.i(N)&65535,it=C.i(D)>>>16,Vt=C.i(D)&65535;R[2*N+2*D]+=P*Vt,te(R,2*N+2*D),R[2*N+2*D+1]+=V*Vt,te(R,2*N+2*D+1),R[2*N+2*D+1]+=P*it,te(R,2*N+2*D+1),R[2*N+2*D+2]+=V*it,te(R,2*N+2*D+2)}for(N=0;N<S;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=S;N<2*S;N++)R[N]=0;return new h(R,0)};function te(C,S){for(;(C[S]&65535)!=C[S];)C[S+1]+=C[S]>>>16,C[S]&=65535,S++}function ne(C,S){this.g=C,this.h=S}function le(C,S){if($(S))throw Error("division by zero");if($(C))return new ne(T,T);if(H(C))return S=le(z(C),S),new ne(z(S.g),z(S.h));if(H(S))return S=le(C,z(S)),new ne(z(S.g),S.h);if(30<C.g.length){if(H(C)||H(S))throw Error("slowDivide_ only works with positive integers.");for(var R=I,N=S;0>=N.l(C);)R=ke(R),N=ke(N);var D=ve(R,1),V=ve(N,1);for(N=ve(N,2),R=ve(R,2);!$(N);){var P=V.add(N);0>=P.l(C)&&(D=D.add(R),V=P),N=ve(N,1),R=ve(R,1)}return S=J(C,D.j(S)),new ne(D,S)}for(D=T;0<=C.l(S);){for(R=Math.max(1,Math.floor(C.m()/S.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),V=_(R),P=V.j(S);H(P)||0<P.l(C);)R-=N,V=_(R),P=V.j(S);$(V)&&(V=I),D=D.add(V),C=J(C,P)}return new ne(D,C)}r.A=function(C){return le(this,C).h},r.and=function(C){for(var S=Math.max(this.g.length,C.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)&C.i(N);return new h(R,this.h&C.h)},r.or=function(C){for(var S=Math.max(this.g.length,C.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)|C.i(N);return new h(R,this.h|C.h)},r.xor=function(C){for(var S=Math.max(this.g.length,C.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)^C.i(N);return new h(R,this.h^C.h)};function ke(C){for(var S=C.g.length+1,R=[],N=0;N<S;N++)R[N]=C.i(N)<<1|C.i(N-1)>>>31;return new h(R,C.h)}function ve(C,S){var R=S>>5;S%=32;for(var N=C.g.length-R,D=[],V=0;V<N;V++)D[V]=0<S?C.i(V+R)>>>S|C.i(V+R+1)<<32-S:C.i(V+R);return new h(D,C.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,kv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Si=h}).apply(typeof py<"u"?py:typeof self<"u"?self:typeof window<"u"?window:{});var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cv,za,Nv,Yu,qd,xv,Dv,Ov;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bu=="object"&&Bu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var y=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var L=u[E];if(!(L in y))break e;y=y[L]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,E=!1,L={next:function(){if(!E&&y<u.length){var B=y++;return{value:p(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function w(u,p,y){return u.call.apply(u.bind,arguments)}function T(u,p,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function I(u,p,y){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,I.apply(null,arguments)}function M(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function $(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,L,B){for(var Z=Array(arguments.length-2),je=2;je<arguments.length;je++)Z[je-2]=arguments[je];return p.prototype[L].apply(E,Z)}}function H(u){const p=u.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function z(u,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=u.length||0,B=E.length||0;u.length=L+B;for(let Z=0;Z<B;Z++)u[L+Z]=E[Z]}else u.push(E)}}class J{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function te(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function le(u){return le[" "](u),u}le[" "]=function(){};var ke=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function ve(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function C(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function S(u){const p={};for(const y in u)p[y]=u[y];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,p){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)u[y]=E[y];for(let B=0;B<R.length;B++)y=R[B],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function D(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function V(u){f.setTimeout(()=>{throw u},0)}function P(){var u=pe;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class it{constructor(){this.h=this.g=null}add(p,y){const E=Vt.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Vt=new J(()=>new Lt,u=>u.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,ee=!1,pe=new it,oe=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(O)}};var O=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(y){V(y)}var p=Vt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Ie=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function Ae(u,p){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(ke){e:{try{le(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}$(Ae,de);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,p,y,E,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=L,this.key=++Ue,this.da=this.fa=!1}function Et(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function _r(u){this.src=u,this.g={},this.h=0}_r.prototype.add=function(u,p,y,E,L){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var Z=Wr(u,p,E,L);return-1<Z?(p=u[Z],y||(p.fa=!1)):(p=new $e(p,this.src,B,!!E,L),p.fa=y,u.push(p)),p};function xs(u,p){var y=p.type;if(y in u.g){var E=u.g[y],L=Array.prototype.indexOf.call(E,p,void 0),B;(B=0<=L)&&Array.prototype.splice.call(E,L,1),B&&(Et(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Wr(u,p,y,E){for(var L=0;L<u.length;++L){var B=u[L];if(!B.da&&B.listener==p&&B.capture==!!y&&B.ha==E)return L}return-1}var Ui="closure_lm_"+(1e6*Math.random()|0),Ds={};function Wo(u,p,y,E,L){if(Array.isArray(p)){for(var B=0;B<p.length;B++)Wo(u,p[B],y,E,L);return null}return y=Go(y),u&&u[Me]?u.K(p,y,_(E)?!!E.capture:!1,L):Ho(u,p,y,!1,E,L)}function Ho(u,p,y,E,L,B){if(!p)throw Error("Invalid event type");var Z=_(L)?!!L.capture:!!L,je=Vs(u);if(je||(u[Ui]=je=new _r(u)),y=je.add(p,y,E,Z,B),y.proxy)return y;if(E=Il(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Ie||(L=Z),L===void 0&&(L=!1),u.addEventListener(p.toString(),E,L);else if(u.attachEvent)u.attachEvent(wr(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Il(){function u(y){return p.call(u.src,u.listener,y)}const p=qo;return u}function Os(u,p,y,E,L){if(Array.isArray(p))for(var B=0;B<p.length;B++)Os(u,p[B],y,E,L);else E=_(E)?!!E.capture:!!E,y=Go(y),u&&u[Me]?(u=u.i,p=String(p).toString(),p in u.g&&(B=u.g[p],y=Wr(B,y,E,L),-1<y&&(Et(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete u.g[p],u.h--)))):u&&(u=Vs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Wr(p,y,E,L)),(y=-1<u?p[u]:null)&&vr(y))}function vr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Me])xs(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(wr(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Vs(p))?(xs(y,u),y.h==0&&(y.src=null,p[Ui]=null)):Et(u)}}}function wr(u){return u in Ds?Ds[u]:Ds[u]="on"+u}function qo(u,p){if(u.da)u=!0;else{p=new Ae(p,this);var y=u.listener,E=u.ha||u.src;u.fa&&vr(u),u=y.call(E,p)}return u}function Vs(u){return u=u[Ui],u instanceof _r?u:null}var Ls="__closure_events_fn_"+(1e9*Math.random()>>>0);function Go(u){return typeof u=="function"?u:(u[Ls]||(u[Ls]=function(p){return u.handleEvent(p)}),u[Ls])}function mt(){G.call(this),this.i=new _r(this),this.M=this,this.F=null}$(mt,G),mt.prototype[Me]=!0,mt.prototype.removeEventListener=function(u,p,y,E){Os(this,u,p,y,E)};function gt(u,p){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new de(p,u);else if(p instanceof de)p.target=p.target||u;else{var L=p;p=new de(E,u),N(p,L)}if(L=!0,y)for(var B=y.length-1;0<=B;B--){var Z=p.g=y[B];L=Er(Z,E,!0,p)&&L}if(Z=p.g=u,L=Er(Z,E,!0,p)&&L,L=Er(Z,E,!1,p)&&L,y)for(B=0;B<y.length;B++)Z=p.g=y[B],L=Er(Z,E,!1,p)&&L}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],E=0;E<y.length;E++)Et(y[E]);delete u.g[p],u.h--}}this.F=null},mt.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},mt.prototype.L=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function Er(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,B=0;B<p.length;++B){var Z=p[B];if(Z&&!Z.da&&Z.capture==y){var je=Z.listener,yt=Z.ha||Z.src;Z.fa&&xs(u.i,Z),L=je.call(yt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Ko(u,p,y){if(typeof u=="function")y&&(u=I(u,y));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Hr(u){u.g=Ko(()=>{u.g=null,u.i&&(u.i=!1,Hr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Fi extends G{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Hr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(u){G.call(this),this.h=u,this.g={}}$(ji,G);var Qo=[];function Xo(u){ve(u.g,function(p,y){this.g.hasOwnProperty(y)&&vr(p)},u),u.g={}}ji.prototype.N=function(){ji.aa.N.call(this),Xo(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yo=f.JSON.stringify,Jo=f.JSON.parse,Zo=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Bi(){}Bi.prototype.h=null;function bs(u){return u.h||(u.h=u.i())}function Ms(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){de.call(this,"d")}$(Kn,de);function Us(){de.call(this,"c")}$(Us,de);var Qn={},ea=null;function zi(){return ea=ea||new mt}Qn.La="serverreachability";function ta(u){de.call(this,Qn.La,u)}$(ta,de);function Tr(u){const p=zi();gt(p,new ta(p))}Qn.STAT_EVENT="statevent";function na(u,p){de.call(this,Qn.STAT_EVENT,u),this.stat=p}$(na,de);function st(u){const p=zi();gt(p,new na(p,u))}Qn.Ma="timingevent";function Fs(u,p){de.call(this,Qn.Ma,u),this.size=p}$(Fs,de);function kn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function $i(){this.g=!0}$i.prototype.xa=function(){this.g=!1};function Wi(u,p,y,E,L,B){u.info(function(){if(u.g)if(B)for(var Z="",je=B.split("&"),yt=0;yt<je.length;yt++){var Oe=je[yt].split("=");if(1<Oe.length){var Tt=Oe[0];Oe=Oe[1];var ct=Tt.split("_");Z=2<=ct.length&&ct[1]=="type"?Z+(Tt+"="+Oe+"&"):Z+(Tt+"=redacted&")}}else Z=null;else Z=B;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+p+`
`+y+`
`+Z})}function js(u,p,y,E,L,B,Z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+p+`
`+y+`
`+B+" "+Z})}function Cn(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Hc(u,y)+(E?" "+E:"")})}function ra(u,p){u.info(function(){return"TIMEOUT: "+p})}$i.prototype.info=function(){};function Hc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var B=L[0];if(B!="noop"&&B!="stop"&&B!="close")for(var Z=1;Z<L.length;Z++)L[Z]=""}}}}return Yo(y)}catch{return p}}var Bs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nn;function Hi(){}$(Hi,Bi),Hi.prototype.g=function(){return new XMLHttpRequest},Hi.prototype.i=function(){return{}},Nn=new Hi;function xn(u,p,y,E){this.j=u,this.i=p,this.l=y,this.R=E||1,this.U=new ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Al}function Al(){this.i=null,this.g="",this.h=!1}var ia={},zs={};function $s(u,p,y){u.L=1,u.v=Xr(ln(p)),u.m=y,u.P=!0,sa(u,null)}function sa(u,p){u.F=Date.now(),We(u),u.A=ln(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Jr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new Al,u.g=$l(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Fi(I(u.Y,u,u.g),u.O)),p=u.U,y=u.g,E=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(Qo[0]=L.toString()),L=Qo);for(var B=0;B<L.length;B++){var Z=Wo(y,L[B],E||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Tr(),Wi(u.i,u.u,u.A,u.l,u.R,u.m)}xn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Jt(u)==3?p.j():this.Y(u)},xn.prototype.Y=function(u){try{if(u==this.g)e:{const ct=Jt(this.g);var p=this.g.Ba();const vn=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||ha(this.g)))){this.J||ct!=4||p==7||(p==8||0>=vn?Tr(3):Tr(2)),qi(this);var y=this.g.Z();this.X=y;t:if(Rl(this)){var E=ha(this.g);u="";var L=E.length,B=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),qr(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(B&&p==L-1)});E.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,js(this.i,this.u,this.A,this.l,this.R,ct,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,yt=this.g;if((je=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(je)){var Oe=je;break t}}Oe=null}if(y=Oe)Cn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oa(this,y);else{this.o=!1,this.s=3,st(12),yn(this),qr(this);break e}}if(this.P){y=!0;let cn;for(;!this.J&&this.C<Z.length;)if(cn=qc(this,Z),cn==zs){ct==4&&(this.s=4,st(14),y=!1),Cn(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==ia){this.s=4,st(15),Cn(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else Cn(this.i,this.l,cn,null),oa(this,cn);if(Rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||Z.length!=0||this.h.h||(this.s=1,st(16),y=!1),this.o=this.o&&y,!y)Cn(this.i,this.l,Z,"[Invalid Chunked Response]"),yn(this),qr(this);else if(0<Z.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),fa(Tt),Tt.M=!0,st(11))}}else Cn(this.i,this.l,Z,null),oa(this,Z);ct==4&&yn(this),this.o&&!this.J&&(ct==4?eo(this.j,this):(this.o=!1,We(this)))}else Qs(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),yn(this),qr(this)}}}catch{}finally{}};function Rl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function qc(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?zs:(y=Number(p.substring(y,E)),isNaN(y)?ia:(E+=1,E+y>p.length?zs:(p=p.slice(E,E+y),u.C=E+y,p)))}xn.prototype.cancel=function(){this.J=!0,yn(this)};function We(u){u.S=Date.now()+u.I,Pl(u,u.I)}function Pl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=kn(I(u.ba,u),p)}function qi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}xn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ra(this.i,this.A),this.L!=2&&(Tr(),st(17)),yn(this),this.s=2,qr(this)):Pl(this,this.S-u)};function qr(u){u.j.G==0||u.J||eo(u.j,u)}function yn(u){qi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Xo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function oa(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Wt(y.h,u))){if(!u.K&&Wt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Zs(y),bn(y);else break e;Js(y),st(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=kn(I(y.Za,y),6e3));if(1>=Cl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Pr(y,11)}else if((u.K||y.g==u)&&Zs(y),!te(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let Oe=L[p];if(y.T=Oe[0],Oe=Oe[1],y.G==2)if(Oe[0]=="c"){y.K=Oe[1],y.ia=Oe[2];const Tt=Oe[3];Tt!=null&&(y.la=Tt,y.j.info("VER="+y.la));const ct=Oe[4];ct!=null&&(y.Aa=ct,y.j.info("SVER="+y.Aa));const vn=Oe[5];vn!=null&&typeof vn=="number"&&0<vn&&(E=1.5*vn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const cn=u.g;if(cn){const Zi=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var B=E.h;B.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(aa(B,B.h),B.h=null))}if(E.D){const no=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;no&&(E.ya=no,ze(E.I,E.D,no))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var Z=u;if(E.qa=zl(E,E.J?E.ia:null,E.W),Z.K){Nl(E.h,Z);var je=Z,yt=E.L;yt&&(je.I=yt),je.B&&(qi(je),We(je)),E.g=Z}else Ji(E);0<y.i.length&&Zn(y)}else Oe[0]!="stop"&&Oe[0]!="close"||Pr(y,7);else y.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Pr(y,7):kt(y):Oe[0]!="noop"&&y.l&&y.l.ta(Oe),y.v=0)}}Tr(4)}catch{}}var kl=class{constructor(u,p){this.g=u,this.map=p}};function Gi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function an(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Cl(u){return u.h?1:u.g?u.g.size:0}function Wt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function aa(u,p){u.g?u.g.add(p):u.h=p}function Nl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Gi.prototype.cancel=function(){if(this.i=xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function xl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return H(u.i)}function Ws(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,E=0;E<y;E++)p.push(u[E]);return p}p=[],y=0;for(E in u)p[y++]=u[E];return p}function Hs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const E in u)p[y++]=E;return p}}}function Gr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Hs(u),E=Ws(u),L=E.length,B=0;B<L;B++)p.call(void 0,E[B],y&&y[B],u)}var Ki=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),L=null;if(0<=E){var B=u[y].substring(0,E);L=u[y].substring(E+1)}else B=u[y];p(B,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Ir(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ir){this.h=u.h,Qi(this,u.j),this.o=u.o,this.g=u.g,Kr(this,u.s),this.l=u.l;var p=u.i,y=new Xn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Qr(this,y),this.m=u.m}else u&&(p=String(u).match(Ki))?(this.h=!1,Qi(this,p[1]||"",!0),this.o=xe(p[2]||""),this.g=xe(p[3]||"",!0),Kr(this,p[4]),this.l=xe(p[5]||"",!0),Qr(this,p[6]||"",!0),this.m=xe(p[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}Ir.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Yr(p,qs,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Yr(p,qs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Yr(y,y.charAt(0)=="/"?Vl:Ol,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Yr(y,la)),u.join("")};function ln(u){return new Ir(u)}function Qi(u,p,y){u.j=y?xe(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Kr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Qr(u,p,y){p instanceof Xn?(u.i=p,Yn(u.i,u.h)):(y||(p=Yr(p,Ll)),u.i=new Xn(p,u.h))}function ze(u,p,y){u.i.set(p,y)}function Xr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Yr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Dl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Dl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var qs=/[#\/\?@]/g,Ol=/[#\?:]/g,Vl=/[#\?]/g,Ll=/[#\?@]/g,la=/#/g;function Xn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Pt(u){u.g||(u.g=new Map,u.h=0,u.i&&Gc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Xn.prototype,r.add=function(u,p){Pt(this),this.i=null,u=_n(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Dn(u,p){Pt(u),p=_n(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function On(u,p){return Pt(u),p=_n(u,p),u.g.has(p)}r.forEach=function(u,p){Pt(this),this.g.forEach(function(y,E){y.forEach(function(L){u.call(p,L,E,this)},this)},this)},r.na=function(){Pt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const L=u[E];for(let B=0;B<L.length;B++)y.push(p[E])}return y},r.V=function(u){Pt(this);let p=[];if(typeof u=="string")On(this,u)&&(p=p.concat(this.g.get(_n(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return Pt(this),this.i=null,u=_n(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Jr(u,p,y){Dn(u,p),0<y.length&&(u.i=null,u.g.set(_n(u,p),H(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const B=encodeURIComponent(String(E)),Z=this.V(E);for(E=0;E<Z.length;E++){var L=B;Z[E]!==""&&(L+="="+encodeURIComponent(String(Z[E]))),u.push(L)}}return this.i=u.join("&")};function _n(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Yn(u,p){p&&!u.j&&(Pt(u),u.i=null,u.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Dn(this,E),Jr(this,L,y))},u)),u.j=p}function Kc(u,p){const y=new $i;if(f.Image){const E=new Image;E.onload=M(Yt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=M(Yt,y,"TestLoadImage: error",!1,p,E),E.onabort=M(Yt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=M(Yt,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function bl(u,p){const y=new $i,E=new AbortController,L=setTimeout(()=>{E.abort(),Yt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(L),B.ok?Yt(y,"TestPingServer: ok",!0,p):Yt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),Yt(y,"TestPingServer: error",!1,p)})}function Yt(u,p,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Qc(){this.g=new Zo}function Ml(u,p,y){const E=y||"";try{Gr(u,function(L,B){let Z=L;_(L)&&(Z=Yo(L)),p.push(E+B+"="+encodeURIComponent(Z))})}catch(L){throw p.push(E+"type="+encodeURIComponent("_badmap")),L}}function Sr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(Sr,Bi),Sr.prototype.g=function(){return new Xi(this.l,this.j)},Sr.prototype.i=(function(u){return function(){return u}})({});function Xi(u,p){mt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Xi,mt),r=Xi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Ln(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ul(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ul(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Vn(this):Ln(this),this.readyState==3&&Ul(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Vn(this))},r.Qa=function(u){this.g&&(this.response=u,Vn(this))},r.ga=function(){this.g&&Vn(this)};function Vn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ln(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Ln(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ar(u){let p="";return ve(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Zr(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Ar(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,p,y))}function Xe(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Xe,mt);var Xc=/^https?$/i,ua=["POST","PUT"];r=Xe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?bs(this.o):bs(Nn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){Yi(this,B);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())y.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),L=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ua,p,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of y)this.g.setRequestHeader(B,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ks(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Yi(this,B)}};function Yi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Gs(u),un(u)}function Gs(u){u.A||(u.A=!0,gt(u,"complete"),gt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,gt(this,"complete"),gt(this,"abort"),un(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),un(this,!0)),Xe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ca(this):this.bb())},r.bb=function(){ca(this)};function ca(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Jt(u)!=4||u.Z()!=2)){if(u.u&&Jt(u)==4)Ko(u.Ea,0,u);else if(gt(u,"readystatechange"),Jt(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=Z===0){var L=String(u.D).match(Ki)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),E=!Xc.test(L?L.toLowerCase():"")}y=E}if(y)gt(u,"complete"),gt(u,"success");else{u.m=6;try{var B=2<Jt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Gs(u)}}finally{un(u)}}}}function un(u,p){if(u.g){Ks(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||gt(u,"ready");try{y.onreadystatechange=E}catch{}}}function Ks(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Jt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Jo(p)}};function ha(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Qs(u){const p={};u=(u.g&&2<=Jt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(te(u[E]))continue;var y=D(u[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=p[L]||[];p[L]=B,B.push(y)}C(p,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function da(u){this.Aa=0,this.i=[],this.j=new $i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jn("baseRetryDelayMs",5e3,u),this.cb=Jn("retryDelaySeedMs",1e4,u),this.Wa=Jn("forwardChannelMaxRetries",2,u),this.wa=Jn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Gi(u&&u.concurrentRequestLimit),this.Da=new Qc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=da.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,E){st(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=zl(this,null,this.W),Zn(this)};function kt(u){if(Xs(u),u.G==3){var p=u.U++,y=ln(u.I);if(ze(y,"SID",u.K),ze(y,"RID",p),ze(y,"TYPE","terminate"),Rr(u,y),p=new xn(u,u.j,p),p.L=2,p.v=Xr(ln(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=$l(p.j,null),p.g.ea(p.v)),p.F=Date.now(),We(p)}Bl(u)}function bn(u){u.g&&(fa(u),u.g.cancel(),u.g=null)}function Xs(u){bn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Zs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Zn(u){if(!an(u.h)&&!u.s){u.s=!0;var p=u.Ga;Be||oe(),ee||(Be(),ee=!0),pe.add(p,u),u.B=0}}function Yc(u,p){return Cl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=kn(I(u.Ga,u,p),jl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new xn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=S(B),N(B,this.S)):B=this.S),this.m!==null||this.O||(L.H=B,B=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ei(this,L,p),y=ln(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),Rr(this,y),B&&(this.O?p="headers="+encodeURIComponent(String(Ar(B)))+"&"+p:this.m&&Zr(y,this.m,B)),aa(this.h,L),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",p),ze(y,"SID","null"),L.T=!0,$s(L,y,null)):$s(L,y,p),this.G=2}}else this.G==3&&(u?Ys(this,u):this.i.length==0||an(this.h)||Ys(this))};function Ys(u,p){var y;p?y=p.l:y=u.U++;const E=ln(u.I);ze(E,"SID",u.K),ze(E,"RID",y),ze(E,"AID",u.T),Rr(u,E),u.m&&u.o&&Zr(E,u.m,u.o),y=new xn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ei(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),aa(u.h,y),$s(y,E,p)}function Rr(u,p){u.H&&ve(u.H,function(y,E){ze(p,E,y)}),u.l&&Gr({},function(y,E){ze(p,E,y)})}function ei(u,p,y){y=Math.min(u.i.length,y);var E=u.l?I(u.l.Na,u.l,u):null;e:{var L=u.i;let B=-1;for(;;){const Z=["count="+y];B==-1?0<y?(B=L[0].g,Z.push("ofs="+B)):B=0:Z.push("ofs="+B);let je=!0;for(let yt=0;yt<y;yt++){let Oe=L[yt].g;const Tt=L[yt].map;if(Oe-=B,0>Oe)B=Math.max(0,L[yt].g-100),je=!1;else try{Ml(Tt,Z,"req"+Oe+"_")}catch{E&&E(Tt)}}if(je){E=Z.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,E}function Ji(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Be||oe(),ee||(Be(),ee=!0),pe.add(p,u),u.v=0}}function Js(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=kn(I(u.Fa,u),jl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Fl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=kn(I(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),bn(this),Fl(this))};function fa(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Fl(u){u.g=new xn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=ln(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),Rr(u,p),u.m&&u.o&&Zr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Xr(ln(p)),y.m=null,y.P=!0,sa(y,u)}r.Za=function(){this.C!=null&&(this.C=null,bn(this),Js(this),st(19))};function Zs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function eo(u,p){var y=null;if(u.g==p){Zs(u),fa(u),u.g=null;var E=2}else if(Wt(u.h,p))y=p.D,Nl(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;E=zi(),gt(E,new Fs(E,y)),Zn(u)}else Ji(u);else if(L=p.s,L==3||L==0&&0<p.X||!(E==1&&Yc(u,p)||E==2&&Js(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:Pr(u,5);break;case 4:Pr(u,10);break;case 3:Pr(u,6);break;default:Pr(u,2)}}}function jl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Pr(u,p){if(u.j.info("Error code "+p),p==2){var y=I(u.fb,u),E=u.Xa;const L=!E;E=new Ir(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Qi(E,"https"),Xr(E),L?Kc(E.toString(),y):bl(E.toString(),y)}else st(2);u.G=0,u.l&&u.l.sa(p),Bl(u),Xs(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Bl(u){if(u.G=0,u.ka=[],u.l){const p=xl(u.h);(p.length!=0||u.i.length!=0)&&(z(u.ka,p),z(u.ka,u.i),u.h.i.length=0,H(u.i),u.i.length=0),u.l.ra()}}function zl(u,p,y){var E=y instanceof Ir?ln(y):new Ir(y);if(E.g!="")p&&(E.g=p+"."+E.g),Kr(E,E.s);else{var L=f.location;E=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var B=new Ir(null);E&&Qi(B,E),p&&(B.g=p),L&&Kr(B,L),y&&(B.l=y),E=B}return y=u.D,p=u.ya,y&&p&&ze(E,y,p),ze(E,"VER",u.la),Rr(u,E),E}function $l(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Xe(new Sr({eb:y})):new Xe(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}r=pa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function to(){}to.prototype.g=function(u,p){return new Ht(u,p)};function Ht(u,p){mt.call(this),this.g=new da(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!te(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!te(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new er(this)}$(Ht,mt),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){kt(this.g)},Ht.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Yo(u),u=y);p.i.push(new kl(p.Ya++,u)),p.G==3&&Zn(p)},Ht.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,Ht.aa.N.call(this)};function Wl(u){Kn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}$(Wl,Kn);function Hl(){Us.call(this),this.status=1}$(Hl,Us);function er(u){this.g=u}$(er,pa),er.prototype.ua=function(){gt(this.g,"a")},er.prototype.ta=function(u){gt(this.g,new Wl(u))},er.prototype.sa=function(u){gt(this.g,new Hl)},er.prototype.ra=function(){gt(this.g,"b")},to.prototype.createWebChannel=to.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Ov=function(){return new to},Dv=function(){return zi()},xv=Qn,qd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bs.NO_ERROR=0,Bs.TIMEOUT=8,Bs.HTTP_ERROR=6,Yu=Bs,Sl.COMPLETE="complete",Nv=Sl,Ms.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",mt.prototype.listen=mt.prototype.K,za=Ms,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,Cv=Xe}).apply(typeof Bu<"u"?Bu:typeof self<"u"?self:typeof window<"u"?window:{});const my="@firebase/firestore",gy="4.8.0";/**
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
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
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
 */let Fo="11.10.0";/**
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
 */const Ts=new ff("@firebase/firestore");function So(){return Ts.logLevel}function se(r,...e){if(Ts.logLevel<=Ce.DEBUG){const t=e.map(Vf);Ts.debug(`Firestore (${Fo}): ${r}`,...t)}}function zr(r,...e){if(Ts.logLevel<=Ce.ERROR){const t=e.map(Vf);Ts.error(`Firestore (${Fo}): ${r}`,...t)}}function Pi(r,...e){if(Ts.logLevel<=Ce.WARN){const t=e.map(Vf);Ts.warn(`Firestore (${Fo}): ${r}`,...t)}}function Vf(r){if(typeof r=="string")return r;try{/**
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
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function _e(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Vv(r,i,t)}function Vv(r,e,t){let i=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw zr(i),new Error(i)}function Fe(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||Vv(e,o,i)}function Te(r,e){return r}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends yr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Lv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Bt.UNAUTHENTICATED)))}shutdown(){}}class L1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class b1{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Fr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Fr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string",31837,{l:i}),new Lv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Bt(e)}}class M1{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class U1{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new M1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,pn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const i=l=>{l.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new yy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new yy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function j1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function bv(){return new TextEncoder}/**
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
 */class Lf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=j1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Se(r,e){return r<e?-1:r>e?1:0}function Gd(r,e){let t=0;for(;t<r.length&&t<e.length;){const i=r.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Se(i,o);{const l=bv(),h=B1(l.encode(_y(r,t)),l.encode(_y(e,t)));return h!==0?h:Se(i,o)}}t+=i>65535?2:1}return Se(r.length,e.length)}function _y(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function B1(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Se(r[t],e[t]);return Se(r.length,e.length)}function Oo(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
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
 */const vy="__name__";class sr{constructor(e,t,i){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&_e(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return sr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=sr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Se(e.length,t.length)}static compareSegments(e,t){const i=sr.isNumericId(e),o=sr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?sr.extractNumericId(e).compare(sr.extractNumericId(t)):Gd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Si.fromString(e.substring(4,e.length-2))}}class qe extends sr{construct(e,t,i){return new qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new re(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new qe(t)}static emptyPath(){return new qe([])}}const z1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends sr{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return z1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vy}static keyField(){return new Dt([vy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new re(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new re(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new re(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new re(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(qe.fromString(e))}static fromName(e){return new fe(qe.fromString(e).popFirst(5))}static empty(){return new fe(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new qe(e.slice()))}}/**
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
 */function Mv(r,e,t){if(!t)throw new re(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function $1(r,e,t,i){if(e===!0&&i===!0)throw new re(W.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function wy(r){if(!fe.isDocumentKey(r))throw new re(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ey(r){if(fe.isDocumentKey(r))throw new re(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Uv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Nc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function Hn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new re(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Nc(r);throw new re(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function pt(r,e){const t={typeString:r};return e&&(t.value=e),t}function _l(r,e){if(!Uv(r))throw new re(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new re(W.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ty=-62135596800,Iy=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Iy);return new Qe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ty)throw new re(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Iy}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_l(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ty;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:pt("string",Qe._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Qe(0,0))}static max(){return new Ee(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const nl=-1;function W1(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new Qe(t+1,0):new Qe(t,i));return new ki(o,fe.empty(),e)}function H1(r){return new ki(r.readTime,r.key,nl)}class ki{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ki(Ee.min(),fe.empty(),nl)}static max(){return new ki(Ee.max(),fe.empty(),nl)}}function q1(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(r.documentKey,e.documentKey),t!==0?t:Se(r.largestBatchId,e.largestBatchId))}/**
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
 */const G1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function jo(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==G1)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,i)=>{t(e)}))}static reject(e){return new q(((t,i)=>{i(e)}))}static waitFor(e){return new q(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=q.resolve(!1);for(const i of e)t=t.next((o=>o?q.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new q(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++f,f===l&&i(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new q(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function Q1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Bo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class xc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}xc.ue=-1;/**
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
 */const bf=-1;function Dc(r){return r==null}function hc(r){return r===0&&1/r==-1/0}function X1(r){return typeof r=="number"&&Number.isInteger(r)&&!hc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Fv="";function Y1(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Sy(e)),e=J1(r.get(t),e);return Sy(e)}function J1(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case Fv:t+="";break;default:t+=l}}return t}function Sy(r){return r+Fv+""}/**
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
 */function Ay(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ps(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function jv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zu(this.root,e,this.comparator,!0)}}class zu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??xt.RED,this.left=o??xt.EMPTY,this.right=l??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new xt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ry(this.data.getIterator())}getIteratorFrom(e){return new Ry(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class Ry{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new Wn([])}unionWith(e){let t=new wt(Dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Oo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Bv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Bv("Invalid base64 string: "+l):l}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const Z1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ci(r){if(Fe(!!r,39018),typeof r=="string"){let e=0;const t=Z1.exec(r);if(Fe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ni(r){return typeof r=="string"?Ot.fromBase64String(r):Ot.fromUint8Array(r)}/**
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
 */const zv="server_timestamp",$v="__type__",Wv="__previous_value__",Hv="__local_write_time__";function Mf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[$v])===null||t===void 0?void 0:t.stringValue)===zv}function Oc(r){const e=r.mapValue.fields[Wv];return Mf(e)?Oc(e):e}function rl(r){const e=Ci(r.mapValue.fields[Hv].timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class eR{constructor(e,t,i,o,l,h,f,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const dc="(default)";class il{constructor(e,t){this.projectId=e,this.database=t||dc}static empty(){return new il("","")}get isDefaultDatabase(){return this.database===dc}isEqual(e){return e instanceof il&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const qv="__type__",tR="__max__",$u={mapValue:{}},Gv="__vector__",fc="value";function xi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Mf(r)?4:rR(r)?9007199254740991:nR(r)?10:11:_e(28295,{value:r})}function gr(r,e){if(r===e)return!0;const t=xi(r);if(t!==xi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return rl(r).isEqual(rl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ci(o.timestampValue),f=Ci(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Ni(o.bytesValue).isEqual(Ni(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return at(o.geoPointValue.latitude)===at(l.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return at(o.integerValue)===at(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=at(o.doubleValue),f=at(l.doubleValue);return h===f?hc(h)===hc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Oo(r.arrayValue.values||[],e.arrayValue.values||[],gr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Ay(h)!==Ay(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!gr(h[g],f[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function sl(r,e){return(r.values||[]).find((t=>gr(t,e)))!==void 0}function Vo(r,e){if(r===e)return 0;const t=xi(r),i=xi(e);if(t!==i)return Se(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=at(l.integerValue||l.doubleValue),g=at(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return Py(r.timestampValue,e.timestampValue);case 4:return Py(rl(r),rl(e));case 5:return Gd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=Ni(l),g=Ni(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const w=Se(f[_],g[_]);if(w!==0)return w}return Se(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Se(at(l.latitude),at(h.latitude));return f!==0?f:Se(at(l.longitude),at(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return ky(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,_,w;const T=l.fields||{},I=h.fields||{},M=(f=T[fc])===null||f===void 0?void 0:f.arrayValue,$=(g=I[fc])===null||g===void 0?void 0:g.arrayValue,H=Se(((_=M==null?void 0:M.values)===null||_===void 0?void 0:_.length)||0,((w=$==null?void 0:$.values)===null||w===void 0?void 0:w.length)||0);return H!==0?H:ky(M,$)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===$u.mapValue&&h===$u.mapValue)return 0;if(l===$u.mapValue)return 1;if(h===$u.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const I=Gd(g[T],w[T]);if(I!==0)return I;const M=Vo(f[g[T]],_[w[T]]);if(M!==0)return M}return Se(g.length,w.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{le:t})}}function Py(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Se(r,e);const t=Ci(r),i=Ci(e),o=Se(t.seconds,i.seconds);return o!==0?o:Se(t.nanos,i.nanos)}function ky(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Vo(t[o],i[o]);if(l)return l}return Se(t.length,i.length)}function Lo(r){return Kd(r)}function Kd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Ci(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ni(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return fe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Kd(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Kd(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function Ju(r){switch(xi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oc(r);return e?16+Ju(e):16;case 5:return 2*r.stringValue.length;case 6:return Ni(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Ju(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return Ps(i.fields,((l,h)=>{o+=l.length+Ju(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function Cy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Qd(r){return!!r&&"integerValue"in r}function Uf(r){return!!r&&"arrayValue"in r}function Ny(r){return!!r&&"nullValue"in r}function xy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Zu(r){return!!r&&"mapValue"in r}function nR(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[qv])===null||t===void 0?void 0:t.stringValue)===Gv}function Qa(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Ps(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Qa(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qa(r.arrayValue.values[t]);return e}return Object.assign({},r)}function rR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===tR}/**
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
 */class Rn{constructor(e){this.value=e}static empty(){return new Rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Zu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qa(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Qa(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Zu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Zu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ps(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new Rn(Qa(this.value))}}function Kv(r){const e=[];return Ps(r.fields,((t,i)=>{const o=new Dt([t]);if(Zu(i)){const l=Kv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new Wn(e)}/**
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
 */class zt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new zt(e,0,Ee.min(),Ee.min(),Ee.min(),Rn.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Ee.min(),Ee.min(),Rn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Ee.min(),Ee.min(),Rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pc{constructor(e,t){this.position=e,this.inclusive=t}}function Dy(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=fe.comparator(fe.fromName(h.referenceValue),t.key):i=Vo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Oy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!gr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ol{constructor(e,t="asc"){this.field=e,this.dir=t}}function iR(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Qv{}class ft extends Qv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new oR(e,t,i):t==="array-contains"?new uR(e,i):t==="in"?new cR(e,i):t==="not-in"?new hR(e,i):t==="array-contains-any"?new dR(e,i):new ft(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new aR(e,i):new lR(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Vo(t,this.value)):t!==null&&xi(this.value)===xi(t)&&this.matchesComparison(Vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends Qv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Gn(e,t)}matches(e){return Xv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Xv(r){return r.op==="and"}function Yv(r){return sR(r)&&Xv(r)}function sR(r){for(const e of r.filters)if(e instanceof Gn)return!1;return!0}function Xd(r){if(r instanceof ft)return r.field.canonicalString()+r.op.toString()+Lo(r.value);if(Yv(r))return r.filters.map((e=>Xd(e))).join(",");{const e=r.filters.map((t=>Xd(t))).join(",");return`${r.op}(${e})`}}function Jv(r,e){return r instanceof ft?(function(i,o){return o instanceof ft&&i.op===o.op&&i.field.isEqual(o.field)&&gr(i.value,o.value)})(r,e):r instanceof Gn?(function(i,o){return o instanceof Gn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&Jv(h,o.filters[f])),!0):!1})(r,e):void _e(19439)}function Zv(r){return r instanceof ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${Lo(t.value)}`})(r):r instanceof Gn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Zv).join(" ,")+"}"})(r):"Filter"}class oR extends ft{constructor(e,t,i){super(e,t,i),this.key=fe.fromName(i.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class aR extends ft{constructor(e,t){super(e,"in",t),this.keys=ew("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lR extends ft{constructor(e,t){super(e,"not-in",t),this.keys=ew("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ew(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>fe.fromName(i.referenceValue)))}class uR extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Uf(t)&&sl(t.arrayValue,this.value)}}class cR extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&sl(this.value.arrayValue,t)}}class hR extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(sl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!sl(this.value.arrayValue,t)}}class dR extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Uf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>sl(this.value.arrayValue,i)))}}/**
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
 */class fR{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function Vy(r,e=null,t=[],i=[],o=null,l=null,h=null){return new fR(r,e,t,i,o,l,h)}function Ff(r){const e=Te(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Xd(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Dc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Lo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Lo(i))).join(",")),e.Pe=t}return e.Pe}function jf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!iR(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Jv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Oy(r.startAt,e.startAt)&&Oy(r.endAt,e.endAt)}function Yd(r){return fe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class zo{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function pR(r,e,t,i,o,l,h,f){return new zo(r,e,t,i,o,l,h,f)}function Vc(r){return new zo(r)}function Ly(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function tw(r){return r.collectionGroup!==null}function Xa(r){const e=Te(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new wt(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new ol(l,i))})),t.has(Dt.keyField().canonicalString())||e.Te.push(new ol(Dt.keyField(),i))}return e.Te}function cr(r){const e=Te(r);return e.Ie||(e.Ie=mR(e,Xa(r))),e.Ie}function mR(r,e){if(r.limitType==="F")return Vy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new ol(o.field,l)}));const t=r.endAt?new pc(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new pc(r.startAt.position,r.startAt.inclusive):null;return Vy(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function Jd(r,e){const t=r.filters.concat([e]);return new zo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Zd(r,e,t){return new zo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Lc(r,e){return jf(cr(r),cr(e))&&r.limitType===e.limitType}function nw(r){return`${Ff(cr(r))}|lt:${r.limitType}`}function Ao(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Zv(o))).join(", ")}]`),Dc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Lo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Lo(o))).join(",")),`Target(${i})`})(cr(r))}; limitType=${r.limitType})`}function bc(r,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):fe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,o){for(const l of Xa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const _=Dy(h,f,g);return h.inclusive?_<=0:_<0})(i.startAt,Xa(i),o)||i.endAt&&!(function(h,f,g){const _=Dy(h,f,g);return h.inclusive?_>=0:_>0})(i.endAt,Xa(i),o))})(r,e)}function gR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function rw(r){return(e,t)=>{let i=!1;for(const o of Xa(r)){const l=yR(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function yR(r,e,t){const i=r.field.isKeyField()?fe.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?Vo(g,_):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return _e(19790,{direction:r.dir})}}/**
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
 */class ks{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ps(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return jv(this.inner)}size(){return this.innerSize}}/**
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
 */const _R=new et(fe.comparator);function $r(){return _R}const iw=new et(fe.comparator);function $a(...r){let e=iw;for(const t of r)e=e.insert(t.key,t);return e}function sw(r){let e=iw;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function fs(){return Ya()}function ow(){return Ya()}function Ya(){return new ks((r=>r.toString()),((r,e)=>r.isEqual(e)))}const vR=new et(fe.comparator),wR=new wt(fe.comparator);function Ne(...r){let e=wR;for(const t of r)e=e.add(t);return e}const ER=new wt(Se);function TR(){return ER}/**
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
 */function Bf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hc(e)?"-0":e}}function aw(r){return{integerValue:""+r}}function IR(r,e){return X1(e)?aw(e):Bf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Mc{constructor(){this._=void 0}}function SR(r,e,t){return r instanceof al?(function(o,l){const h={fields:{[$v]:{stringValue:zv},[Hv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Mf(l)&&(l=Oc(l)),l&&(h.fields[Wv]=l),{mapValue:h}})(t,e):r instanceof ll?uw(r,e):r instanceof ul?cw(r,e):(function(o,l){const h=lw(o,l),f=by(h)+by(o.Ee);return Qd(h)&&Qd(o.Ee)?aw(f):Bf(o.serializer,f)})(r,e)}function AR(r,e,t){return r instanceof ll?uw(r,e):r instanceof ul?cw(r,e):t}function lw(r,e){return r instanceof mc?(function(i){return Qd(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class al extends Mc{}class ll extends Mc{constructor(e){super(),this.elements=e}}function uw(r,e){const t=hw(e);for(const i of r.elements)t.some((o=>gr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class ul extends Mc{constructor(e){super(),this.elements=e}}function cw(r,e){let t=hw(e);for(const i of r.elements)t=t.filter((o=>!gr(o,i)));return{arrayValue:{values:t}}}class mc extends Mc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function by(r){return at(r.integerValue||r.doubleValue)}function hw(r){return Uf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class RR{constructor(e,t){this.field=e,this.transform=t}}function PR(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof ll&&o instanceof ll||i instanceof ul&&o instanceof ul?Oo(i.elements,o.elements,gr):i instanceof mc&&o instanceof mc?gr(i.Ee,o.Ee):i instanceof al&&o instanceof al})(r.transform,e.transform)}class kR{constructor(e,t){this.version=e,this.transformResults=t}}class hr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hr}static exists(e){return new hr(void 0,e)}static updateTime(e){return new hr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ec(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Uc{}function dw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new pw(r.key,hr.none()):new vl(r.key,r.data,hr.none());{const t=r.data,i=Rn.empty();let o=new wt(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Cs(r.key,i,new Wn(o.toArray()),hr.none())}}function CR(r,e,t){r instanceof vl?(function(o,l,h){const f=o.value.clone(),g=Uy(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Cs?(function(o,l,h){if(!ec(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Uy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(fw(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ja(r,e,t,i){return r instanceof vl?(function(l,h,f,g){if(!ec(l.precondition,h))return f;const _=l.value.clone(),w=Fy(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,i):r instanceof Cs?(function(l,h,f,g){if(!ec(l.precondition,h))return f;const _=Fy(l.fieldTransforms,g,h),w=h.data;return w.setAll(fw(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,i):(function(l,h,f){return ec(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function NR(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=lw(i.transform,o||null);l!=null&&(t===null&&(t=Rn.empty()),t.set(i.field,l))}return t||null}function My(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Oo(i,o,((l,h)=>PR(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class vl extends Uc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Cs extends Uc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function fw(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function Uy(r,e,t){const i=new Map;Fe(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,AR(h,f,t[o]))}return i}function Fy(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,SR(l,h,e))}return i}class pw extends Uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xR extends Uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class DR{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&CR(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ja(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ja(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=ow();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=dw(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Oo(this.mutations,e.mutations,((t,i)=>My(t,i)))&&Oo(this.baseMutations,e.baseMutations,((t,i)=>My(t,i)))}}class zf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return vR})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new zf(e,t,i,o)}}/**
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
 */class OR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class VR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var dt,Ve;function LR(r){switch(r){case W.OK:return _e(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function mw(r){if(r===void 0)return zr("GRPC error has no .code"),W.UNKNOWN;switch(r){case dt.OK:return W.OK;case dt.CANCELLED:return W.CANCELLED;case dt.UNKNOWN:return W.UNKNOWN;case dt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case dt.INTERNAL:return W.INTERNAL;case dt.UNAVAILABLE:return W.UNAVAILABLE;case dt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case dt.NOT_FOUND:return W.NOT_FOUND;case dt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case dt.ABORTED:return W.ABORTED;case dt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case dt.DATA_LOSS:return W.DATA_LOSS;default:return _e(39323,{code:r})}}(Ve=dt||(dt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const bR=new Si([4294967295,4294967295],0);function jy(r){const e=bv().encode(r),t=new kv;return t.update(e),new Uint8Array(t.digest())}function By(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Si([t,i],0),new Si([o,l],0)]}class $f{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Wa(`Invalid padding: ${t}`);if(i<0)throw new Wa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Wa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Wa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Si.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Si.fromNumber(i)));return o.compare(bR)===1&&(o=new Si([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=jy(e),[i,o]=By(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new $f(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=jy(e),[i,o]=By(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Fc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,wl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Fc(Ee.min(),o,new et(Se),$r(),Ne())}}class wl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new wl(i,t,Ne(),Ne(),Ne())}}/**
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
 */class tc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class gw{constructor(e,t){this.targetId=e,this.De=t}}class yw{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class zy{constructor(){this.ve=0,this.Ce=$y(),this.Fe=Ot.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ne(),t=Ne(),i=Ne();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:_e(38017,{changeType:l})}})),new wl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=$y()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class MR{constructor(e){this.We=e,this.Ge=new Map,this.ze=$r(),this.je=Wu(),this.Je=Wu(),this.He=new et(Se)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(Yd(l))if(i===0){const h=new fe(l.path);this.Xe(t,h,zt.newNoDocument(h,Ee.min()))}else Fe(i===1,20013,{expectedCount:i});else{const h=this.ot(t);if(h!==i){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Ni(i).toUint8Array()}catch(g){if(g instanceof Bv)return Pi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new $f(h,o,l)}catch(g){return Pi(g instanceof Wa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&Yd(f.target)){const g=new fe(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,zt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let i=Ne();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Fc(e,t,this.He,this.ze,i);return this.ze=$r(),this.je=Wu(),this.Je=Wu(),this.He=new et(Se),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new zy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new wt(Se),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new wt(Se),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new zy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Wu(){return new et(fe.comparator)}function $y(){return new et(fe.comparator)}const UR={asc:"ASCENDING",desc:"DESCENDING"},FR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jR={and:"AND",or:"OR"};class BR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ef(r,e){return r.useProto3Json||Dc(e)?e:{value:e}}function gc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _w(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function zR(r,e){return gc(r,e.toTimestamp())}function dr(r){return Fe(!!r,49232),Ee.fromTimestamp((function(t){const i=Ci(t);return new Qe(i.seconds,i.nanos)})(r))}function Wf(r,e){return tf(r,e).canonicalString()}function tf(r,e){const t=(function(o){return new qe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function vw(r){const e=qe.fromString(r);return Fe(Sw(e),10190,{key:e.toString()}),e}function nf(r,e){return Wf(r.databaseId,e.path)}function kd(r,e){const t=vw(e);if(t.get(1)!==r.databaseId.projectId)throw new re(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new re(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new fe(Ew(t))}function ww(r,e){return Wf(r.databaseId,e)}function $R(r){const e=vw(r);return e.length===4?qe.emptyPath():Ew(e)}function rf(r){return new qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ew(r){return Fe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Wy(r,e,t){return{name:nf(r,e),fields:t.value.mapValue.fields}}function WR(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,w){return _.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),Ot.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Ot.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const w=_.code===void 0?W.UNKNOWN:mw(_.code);return new re(w,_.message||"")})(h);t=new yw(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=kd(r,i.document.name),l=dr(i.document.updateTime),h=i.document.createTime?dr(i.document.createTime):Ee.min(),f=new Rn({mapValue:{fields:i.document.fields}}),g=zt.newFoundDocument(o,l,h,f),_=i.targetIds||[],w=i.removedTargetIds||[];t=new tc(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=kd(r,i.document),l=i.readTime?dr(i.readTime):Ee.min(),h=zt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new tc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=kd(r,i.document),l=i.removedTargetIds||[];t=new tc([],l,o,null)}else{if(!("filter"in e))return _e(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new VR(o,l),f=i.targetId;t=new gw(f,h)}}return t}function HR(r,e){let t;if(e instanceof vl)t={update:Wy(r,e.key,e.value)};else if(e instanceof pw)t={delete:nf(r,e.key)};else if(e instanceof Cs)t={update:Wy(r,e.key,e.data),updateMask:eP(e.fieldMask)};else{if(!(e instanceof xR))return _e(16599,{Rt:e.type});t={verify:nf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof al)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ll)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof ul)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof mc)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw _e(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:zR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(r,e.precondition)),t}function qR(r,e){return r&&r.length>0?(Fe(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?dr(o.updateTime):dr(l);return h.isEqual(Ee.min())&&(h=dr(l)),new kR(h,o.transformResults||[])})(t,e)))):[]}function GR(r,e){return{documents:[ww(r,e.path)]}}function KR(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=ww(r,o);const l=(function(_){if(_.length!==0)return Iw(Gn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((w=>(function(I){return{field:Ro(I.field),direction:YR(I.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=ef(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function QR(r){let e=$R(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(T){const I=Tw(T);return I instanceof Gn&&Yv(I)?I.getFilters():[I]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((I=>(function($){return new ol(Po($.field),(function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let I;return I=typeof T=="object"?T.value:T,Dc(I)?null:I})(t.limit));let g=null;t.startAt&&(g=(function(T){const I=!!T.before,M=T.values||[];return new pc(M,I)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const I=!T.before,M=T.values||[];return new pc(M,I)})(t.endAt)),pR(e,o,h,l,f,"F",g,_)}function XR(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Tw(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Po(t.unaryFilter.field);return ft.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Po(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Po(t.unaryFilter.field);return ft.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Po(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return ft.create(Po(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Gn.create(t.compositeFilter.filters.map((i=>Tw(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function YR(r){return UR[r]}function JR(r){return FR[r]}function ZR(r){return jR[r]}function Ro(r){return{fieldPath:r.canonicalString()}}function Po(r){return Dt.fromServerFormat(r.fieldPath)}function Iw(r){return r instanceof ft?(function(t){if(t.op==="=="){if(xy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NAN"}};if(Ny(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NAN"}};if(Ny(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ro(t.field),op:JR(t.op),value:t.value}}})(r):r instanceof Gn?(function(t){const i=t.getFilters().map((o=>Iw(o)));return i.length===1?i[0]:{compositeFilter:{op:ZR(t.op),filters:i}}})(r):_e(54877,{filter:r})}function eP(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Sw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Ei{constructor(e,t,i,o,l=Ee.min(),h=Ee.min(),f=Ot.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class tP{constructor(e){this.gt=e}}function nP(r){const e=QR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Zd(e,e.limit,"L"):e}/**
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
 */class rP{constructor(){this.Dn=new iP}addToCollectionParentIndex(e,t){return this.Dn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(ki.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(ki.min())}updateCollectionGroup(e,t,i){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class iP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new wt(qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new wt(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Hy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Aw=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(Aw,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
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
 */class bo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new bo(0)}static ur(){return new bo(-1)}}/**
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
 */const qy="LruGarbageCollector",sP=1048576;function Gy([r,e],[t,i]){const o=Se(r,t);return o===0?Se(e,i):o}class oP{constructor(e){this.Tr=e,this.buffer=new wt(Gy),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Gy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class aP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){se(qy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Bo(t)?se(qy,"Ignoring IndexedDB error during garbage collection: ",t):await jo(t)}await this.Rr(3e5)}))}}class lP{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(xc.ue);const i=new oP(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Hy)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,h,f,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(_=Date.now(),So()<=Ce.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function uP(r,e){return new lP(r,e)}/**
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
 */class cP{constructor(){this.changes=new ks((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class hP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class dP{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Ja(i.mutation,o,Wn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ne()){const o=fs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=$a();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=fs();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ne())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=$r();const h=Ya(),f=(function(){return Ya()})();return t.forEach(((g,_)=>{const w=i.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Cs)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Ja(w.mutation,_,w.mutation.getFieldMask(),Qe.now())):h.set(_.key,Wn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var T;return f.set(_,new hP(w,(T=h.get(_))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=Ya();let o=new et(((h,f)=>h-f)),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=i.get(g)||Wn.empty();w=f.applyToLocalView(_,w),i.set(g,w);const T=(o.get(f.batchId)||Ne()).add(g);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,w=g.value,T=ow();w.forEach((I=>{if(!l.has(I)){const M=dw(t.get(I),i.get(I));M!==null&&T.set(I,M),l=l.add(I)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return q.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):q.resolve(fs());let f=nl,g=l;return h.next((_=>q.forEach(_,((w,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(w)?q.resolve():this.remoteDocumentCache.getEntry(e,w).next((I=>{g=g.insert(w,I)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,Ne()))).next((w=>({batchId:f,changes:sw(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((i=>{let o=$a();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=$a();return this.indexManager.getCollectionParents(e,l).next((f=>q.forEach(f,(g=>{const _=(function(T,I){return new zo(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((w=>{w.forEach(((T,I)=>{h=h.insert(T,I)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,zt.newInvalidDocument(w)))}));let f=$a();return h.forEach(((g,_)=>{const w=l.get(g);w!==void 0&&Ja(w.mutation,_,Wn.empty(),Qe.now()),bc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
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
 */class fP{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:dr(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:nP(o.bundledQuery),readTime:dr(o.readTime)}})(t)),q.resolve()}}/**
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
 */class pP{constructor(){this.overlays=new et(fe.comparator),this.kr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=fs();return q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),q.resolve()}getOverlaysForCollection(e,t,i){const o=fs(),l=t.length+1,h=new fe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new et(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let w=l.get(_.largestBatchId);w===null&&(w=fs(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const f=fs(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>f.set(_,w))),!(f.size()>=o)););return q.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new OR(t,i));let l=this.kr.get(t);l===void 0&&(l=Ne(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class mP{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
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
 */class Hf{constructor(){this.qr=new wt(Rt.Qr),this.$r=new wt(Rt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Rt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Rt(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new fe(new qe([])),i=new Rt(t,e),o=new Rt(t,e+1),l=[];return this.$r.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new fe(new qe([])),i=new Rt(t,e),o=new Rt(t,e+1);let l=Ne();return this.$r.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new Rt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Rt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return fe.comparator(e.key,t.key)||Se(e.Hr,t.Hr)}static Ur(e,t){return Se(e.Hr,t.Hr)||fe.comparator(e.key,t.key)}}/**
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
 */class gP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new wt(Rt.Qr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new DR(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new Rt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?bf:this.er-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new wt(Se);return t.forEach((o=>{const l=new Rt(o,0),h=new Rt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{i=i.add(f.Hr)}))})),q.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;fe.isDocumentKey(l)||(l=l.child(""));const h=new Rt(new fe(l),0);let f=new wt(Se);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Hr)),!0)}),h),q.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return q.forEach(t.mutations,(o=>{const l=new Rt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Rt(t,0),o=this.Yr.firstAfterOrEqual(i);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class yP{constructor(e){this.ni=e,this.docs=(function(){return new et(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return q.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=$r();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=$r();const h=t.path,f=new fe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||q1(H1(w),i)<=0||(o.has(w.key)||bc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){_e(9500)}ri(e,t){return q.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new _P(this)}getSize(e){return q.resolve(this.size)}}class _P extends cP{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class vP{constructor(e){this.persistence=e,this.ii=new ks((t=>Ff(t)),jf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.si=0,this.oi=new Hf,this.targetCount=0,this._i=bo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new bo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.hr(t),q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),q.waitFor(l).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return q.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),q.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return q.resolve(i)}containsKey(e,t){return q.resolve(this.oi.containsKey(t))}}/**
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
 */class Rw{constructor(e,t){this.ai={},this.overlays={},this.ui=new xc(0),this.ci=!1,this.ci=!0,this.li=new mP,this.referenceDelegate=e(this),this.hi=new vP(this),this.indexManager=new rP,this.remoteDocumentCache=(function(o){return new yP(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new tP(t),this.Ti=new fP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new pP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new gP(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){se("MemoryPersistence","Starting transaction:",e);const o=new wP(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return q.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class wP extends K1{constructor(e){super(),this.currentSequenceNumber=e}}class qf{constructor(e){this.persistence=e,this.Ai=new Hf,this.Ri=null}static Vi(e){return new qf(e)}get mi(){if(this.Ri)return this.Ri;throw _e(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),q.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.mi,(i=>{const o=fe.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return q.or([()=>q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class yc{constructor(e,t){this.persistence=e,this.gi=new ks((i=>Y1(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=uP(this,t)}static Vi(e,t){return new yc(e,t)}Ii(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return q.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?q.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Ee.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),q.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ju(e.data.value)),t}Sr(e,t,i){return q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Gf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Ne(),o=Ne();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Gf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class EP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class TP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return VT()?8:Q1($t())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new EP;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(So()<=Ce.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),q.resolve()):(So()<=Ce.DEBUG&&se("QueryEngine","Query:",Ao(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(So()<=Ce.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cr(t))):q.resolve())}ps(e,t){if(Ly(t))return q.resolve(null);let i=cr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Zd(t,null,"F"),i=cr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=Ne(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const _=this.bs(t,f);return this.Ds(t,_,h,g.readTime)?this.ps(e,Zd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,i,o){return Ly(t)||o.isEqual(Ee.min())?q.resolve(null):this.gs.getDocuments(e,i).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,i,o)?q.resolve(null):(So()<=Ce.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ao(t)),this.vs(e,h,t,W1(o,nl)).next((f=>f)))}))}bs(e,t){let i=new wt(rw(e));return t.forEach(((o,l)=>{bc(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return So()<=Ce.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Ao(t)),this.gs.getDocumentsMatchingQuery(e,t,ki.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const Kf="LocalStore",IP=3e8;class SP{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new et(Se),this.Ms=new ks((l=>Ff(l)),jf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dP(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function AP(r,e,t,i){return new SP(r,e,t,i)}async function Pw(r,e){const t=Te(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=Ne();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){f.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(i,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function RP(r,e){const t=Te(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,w){const T=_.batch,I=T.keys();let M=q.resolve();return I.forEach(($=>{M=M.next((()=>w.getEntry(g,$))).next((H=>{const z=_.docVersions.get($);Fe(z!==null,48541),H.version.compareTo(z)<0&&(T.applyToRemoteDocument(H,_),H.isValidDocument()&&(H.setReadTime(_.commitVersion),w.addEntry(H)))}))})),M.next((()=>f.mutationQueue.removeMutationBatch(g,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=Ne();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function kw(r){const e=Te(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function PP(r,e){const t=Te(r),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((w,T)=>{const I=o.get(T);if(!I)return;f.push(t.hi.removeMatchingKeys(l,w.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,T))));let M=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?M=M.withResumeToken(Ot.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(M=M.withResumeToken(w.resumeToken,i)),o=o.insert(T,M),(function(H,z,J){return H.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=IP?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0})(I,M,w)&&f.push(t.hi.updateTargetData(l,M))}));let g=$r(),_=Ne();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(kP(l,h,e.documentUpdates).next((w=>{g=w.Ls,_=w.ks}))),!i.isEqual(Ee.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(w)}return q.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function kP(r,e,t){let i=Ne(),o=Ne();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let h=$r();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):se(Kf,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function CP(r,e){const t=Te(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=bf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function NP(r,e){const t=Te(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,q.resolve(o)):t.hi.allocateTargetId(i).next((h=>(o=new Ei(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function sf(r,e,t){const i=Te(r),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Bo(h))throw h;se(Kf,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function Ky(r,e,t){const i=Te(r);let o=Ee.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const T=Te(g),I=T.Ms.get(w);return I!==void 0?q.resolve(T.Fs.get(I)):T.hi.getTargetData(_,w)})(i,h,cr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:Ne()))).next((f=>(xP(i,gR(e),f),{documents:f,qs:l})))))}function xP(r,e,t){let i=r.xs.get(e)||Ee.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.xs.set(e,i)}class Qy{constructor(){this.activeTargetIds=TR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DP{constructor(){this.Fo=new Qy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Qy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OP{xo(e){}shutdown(){}}/**
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
 */const Xy="ConnectivityMonitor";class Yy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){se(Xy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){se(Xy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Hu=null;function of(){return Hu===null?Hu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hu++,"0x"+Hu.toString(16)}/**
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
 */const Cd="RestConnection",VP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class LP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===dc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=of(),f=this.Go(e,t.toUriEncodedString());se(Cd,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(f),w=Vi(_);return this.jo(e,f,g,i,w).then((T=>(se(Cd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw Pi(Cd,`RPC '${e}' ${h} failed with error: `,T,"url: ",f,"request:",i),T}))}Jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=VP[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
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
 */class bP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const jt="WebChannelConnection";class MP extends LP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const h=of();return new Promise(((f,g)=>{const _=new Cv;_.setWithCredentials(!0),_.listenOnce(Nv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Yu.NO_ERROR:const T=_.getResponseJson();se(jt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),f(T);break;case Yu.TIMEOUT:se(jt,`RPC '${e}' ${h} timed out`),g(new re(W.DEADLINE_EXCEEDED,"Request time out"));break;case Yu.HTTP_ERROR:const I=_.getStatus();if(se(jt,`RPC '${e}' ${h} failed with status:`,I,"response text:",_.getResponseText()),I>0){let M=_.getResponseJson();Array.isArray(M)&&(M=M[0]);const $=M==null?void 0:M.error;if($&&$.status&&$.message){const H=(function(J){const te=J.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(te)>=0?te:W.UNKNOWN})($.status);g(new re(H,$.message))}else g(new re(W.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new re(W.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{se(jt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);se(jt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,i,15)}))}P_(e,t,i){const o=of(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Ov(),f=Dv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const w=l.join("");se(jt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const T=h.createWebChannel(w,g);this.T_(T);let I=!1,M=!1;const $=new bP({Ho:z=>{M?se(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,z):(I||(se(jt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),se(jt,`RPC '${e}' stream ${o} sending:`,z),T.send(z))},Yo:()=>T.close()}),H=(z,J,te)=>{z.listen(J,(ne=>{try{te(ne)}catch(le){setTimeout((()=>{throw le}),0)}}))};return H(T,za.EventType.OPEN,(()=>{M||(se(jt,`RPC '${e}' stream ${o} transport opened.`),$.s_())})),H(T,za.EventType.CLOSE,(()=>{M||(M=!0,se(jt,`RPC '${e}' stream ${o} transport closed`),$.__(),this.I_(T))})),H(T,za.EventType.ERROR,(z=>{M||(M=!0,Pi(jt,`RPC '${e}' stream ${o} transport errored. Name:`,z.name,"Message:",z.message),$.__(new re(W.UNAVAILABLE,"The operation could not be completed")))})),H(T,za.EventType.MESSAGE,(z=>{var J;if(!M){const te=z.data[0];Fe(!!te,16349);const ne=te,le=(ne==null?void 0:ne.error)||((J=ne[0])===null||J===void 0?void 0:J.error);if(le){se(jt,`RPC '${e}' stream ${o} received error:`,le);const ke=le.status;let ve=(function(R){const N=dt[R];if(N!==void 0)return mw(N)})(ke),C=le.message;ve===void 0&&(ve=W.INTERNAL,C="Unknown error status: "+ke+" with message "+le.message),M=!0,$.__(new re(ve,C)),T.close()}else se(jt,`RPC '${e}' stream ${o} received:`,te),$.a_(te)}})),H(f,xv.STAT_EVENT,(z=>{z.stat===qd.PROXY?se(jt,`RPC '${e}' stream ${o} detected buffering proxy`):z.stat===qd.NOPROXY&&se(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.o_()}),0),$}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Nd(){return typeof document<"u"?document:null}/**
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
 */function jc(r){return new BR(r,!0)}/**
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
 */class Cw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Jy="PersistentStream";class Nw{constructor(e,t,i,o,l,h,f,g){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Cw(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new re(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return se(Jy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(se(Jy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class UP extends Nw{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=WR(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?dr(h.readTime):Ee.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=rf(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=Yd(g)?{documents:GR(l,g)}:{query:KR(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=_w(l,h.resumeToken);const _=ef(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ee.min())>0){f.readTime=gc(l,h.snapshotVersion.toTimestamp());const _=ef(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const i=XR(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=rf(this.serializer),t.removeTarget=e,this.k_(t)}}class FP extends Nw{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=qR(e.writeResults,e.commitTime),i=dr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=rf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>HR(this.serializer,i)))};this.k_(t)}}/**
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
 */class jP{}class BP extends jP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new re(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,tf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new re(W.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,tf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new re(W.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class zP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(zr(t),this._a=!1):se("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Is="RemoteStore";class $P{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{i.enqueueAndForget((async()=>{Ns(this)&&(se(Is,"Restarting streams for network reachability change."),await(async function(g){const _=Te(g);_.Ia.add(4),await El(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Bc(_)})(this))}))})),this.Aa=new zP(i,o)}}async function Bc(r){if(Ns(r))for(const e of r.da)await e(!0)}async function El(r){for(const e of r.da)await e(!1)}function xw(r,e){const t=Te(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Jf(t)?Yf(t):$o(t).x_()&&Xf(t,e))}function Qf(r,e){const t=Te(r),i=$o(t);t.Ta.delete(e),i.x_()&&Dw(t,e),t.Ta.size===0&&(i.x_()?i.B_():Ns(t)&&t.Aa.set("Unknown"))}function Xf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$o(r).H_(e)}function Dw(r,e){r.Ra.$e(e),$o(r).Y_(e)}function Yf(r){r.Ra=new MR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),$o(r).start(),r.Aa.aa()}function Jf(r){return Ns(r)&&!$o(r).M_()&&r.Ta.size>0}function Ns(r){return Te(r).Ia.size===0}function Ow(r){r.Ra=void 0}async function WP(r){r.Aa.set("Online")}async function HP(r){r.Ta.forEach(((e,t)=>{Xf(r,e)}))}async function qP(r,e){Ow(r),Jf(r)?(r.Aa.la(e),Yf(r)):r.Aa.set("Unknown")}async function GP(r,e,t){if(r.Aa.set("Online"),e instanceof yw&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(r,e)}catch(i){se(Is,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await _c(r,i)}else if(e instanceof tc?r.Ra.Ye(e):e instanceof gw?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Ee.min()))try{const i=await kw(r.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(_);w&&l.Ta.set(_,w.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Ot.EMPTY_BYTE_STRING,w.snapshotVersion)),Dw(l,g);const T=new Ei(w.target,g,_,w.sequenceNumber);Xf(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){se(Is,"Failed to raise snapshot:",i),await _c(r,i)}}async function _c(r,e,t){if(!Bo(e))throw e;r.Ia.add(1),await El(r),r.Aa.set("Offline"),t||(t=()=>kw(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{se(Is,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Bc(r)}))}function Vw(r,e){return e().catch((t=>_c(r,t,e)))}async function zc(r){const e=Te(r),t=Di(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:bf;for(;KP(e);)try{const o=await CP(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,QP(e,o)}catch(o){await _c(e,o)}Lw(e)&&bw(e)}function KP(r){return Ns(r)&&r.Pa.length<10}function QP(r,e){r.Pa.push(e);const t=Di(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Lw(r){return Ns(r)&&!Di(r).M_()&&r.Pa.length>0}function bw(r){Di(r).start()}async function XP(r){Di(r).na()}async function YP(r){const e=Di(r);for(const t of r.Pa)e.X_(t.mutations)}async function JP(r,e,t){const i=r.Pa.shift(),o=zf.from(i,e,t);await Vw(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await zc(r)}async function ZP(r,e){e&&Di(r).Z_&&await(async function(i,o){if((function(h){return LR(h)&&h!==W.ABORTED})(o.code)){const l=i.Pa.shift();Di(i).N_(),await Vw(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await zc(i)}})(r,e),Lw(r)&&bw(r)}async function Zy(r,e){const t=Te(r);t.asyncQueue.verifyOperationInProgress(),se(Is,"RemoteStore received new credentials");const i=Ns(t);t.Ia.add(3),await El(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Bc(t)}async function ek(r,e){const t=Te(r);e?(t.Ia.delete(2),await Bc(t)):e||(t.Ia.add(2),await El(t),t.Aa.set("Unknown"))}function $o(r){return r.Va||(r.Va=(function(t,i,o){const l=Te(t);return l.ia(),new UP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:WP.bind(null,r),e_:HP.bind(null,r),n_:qP.bind(null,r),J_:GP.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Jf(r)?Yf(r):r.Aa.set("Unknown")):(await r.Va.stop(),Ow(r))}))),r.Va}function Di(r){return r.ma||(r.ma=(function(t,i,o){const l=Te(t);return l.ia(),new FP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:XP.bind(null,r),n_:ZP.bind(null,r),ea:YP.bind(null,r),ta:JP.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await zc(r)):(await r.ma.stop(),r.Pa.length>0&&(se(Is,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class Zf{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Zf(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ep(r,e){if(zr("AsyncQueue",`${e}: ${r}`),Bo(r))return new re(W.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Do{static emptySet(e){return new Do(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||fe.comparator(t.key,i.key):(t,i)=>fe.comparator(t.key,i.key),this.keyedMap=$a(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Do)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Do;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class e_{constructor(){this.fa=new et(fe.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):_e(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Mo{constructor(e,t,i,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Mo(e,t,Do.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class tk{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class nk{constructor(){this.queries=t_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=t_(),l.forEach(((h,f)=>{for(const g of f.wa)g.onError(i)}))})(this,new re(W.ABORTED,"Firestore shutting down"))}}function t_(){return new ks((r=>nw(r)),Lc)}async function tp(r,e){const t=Te(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new tk,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=ep(h,`Initialization of query '${Ao(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&rp(t)}async function np(r,e){const t=Te(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function rk(r,e){const t=Te(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(i=!0);h.ya=o}}i&&rp(t)}function ik(r,e,t){const i=Te(r),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function rp(r){r.Da.forEach((e=>{e.next()}))}var af,n_;(n_=af||(af={})).Fa="default",n_.Cache="cache";class ip{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Mo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==af.Cache}}/**
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
 */class Mw{constructor(e){this.key=e}}class Uw{constructor(e){this.key=e}}class sk{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ne(),this.mutatedKeys=Ne(),this.Xa=rw(e),this.eu=new Do(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new e_,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const I=o.get(w),M=bc(this.query,T)?T:null,$=!!I&&this.mutatedKeys.has(I.key),H=!!M&&(M.hasLocalMutations||this.mutatedKeys.has(M.key)&&M.hasCommittedMutations);let z=!1;I&&M?I.data.isEqual(M.data)?$!==H&&(i.track({type:3,doc:M}),z=!0):this.iu(I,M)||(i.track({type:2,doc:M}),z=!0,(g&&this.Xa(M,g)>0||_&&this.Xa(M,_)<0)&&(f=!0)):!I&&M?(i.track({type:0,doc:M}),z=!0):I&&!M&&(i.track({type:1,doc:I}),z=!0,(g||_)&&(f=!0)),z&&(M?(h=h.add(M),l=H?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{eu:h,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,T)=>(function(M,$){const H=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{At:z})}};return H(M)-H($)})(w.type,T.type)||this.Xa(w.doc,T.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new Mo(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new e_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ne(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new Uw(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new Mw(i))})),t}uu(e){this.Ha=e.qs,this.Za=Ne();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Mo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const sp="SyncEngine";class ok{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class ak{constructor(e){this.key=e,this.lu=!1}}class lk{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ks((f=>nw(f)),Lc),this.Tu=new Map,this.Iu=new Set,this.du=new et(fe.comparator),this.Eu=new Map,this.Au=new Hf,this.Ru={},this.Vu=new Map,this.mu=bo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function uk(r,e,t=!0){const i=Ww(r);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await Fw(i,e,t,!0),o}async function ck(r,e){const t=Ww(r);await Fw(t,e,!0,!1)}async function Fw(r,e,t,i){const o=await NP(r.localStore,cr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await hk(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&xw(r.remoteStore,o),f}async function hk(r,e,t,i,o){r.gu=(T,I,M)=>(async function(H,z,J,te){let ne=z.view.nu(J);ne.Ds&&(ne=await Ky(H.localStore,z.query,!1).then((({documents:C})=>z.view.nu(C,ne))));const le=te&&te.targetChanges.get(z.targetId),ke=te&&te.targetMismatches.get(z.targetId)!=null,ve=z.view.applyChanges(ne,H.isPrimaryClient,le,ke);return i_(H,z.targetId,ve._u),ve.snapshot})(r,T,I,M);const l=await Ky(r.localStore,e,!0),h=new sk(e,l.qs),f=h.nu(l.documents),g=wl.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);i_(r,t,_._u);const w=new ok(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function dk(r,e,t){const i=Te(r),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((h=>!Lc(h,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await sf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Qf(i.remoteStore,o.targetId),lf(i,o.targetId)})).catch(jo)):(lf(i,o.targetId),await sf(i.localStore,o.targetId,!0))}async function fk(r,e){const t=Te(r),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Qf(t.remoteStore,i.targetId))}async function pk(r,e,t){const i=Ek(r);try{const o=await(function(h,f){const g=Te(h),_=Qe.now(),w=f.reduce(((M,$)=>M.add($.key)),Ne());let T,I;return g.persistence.runTransaction("Locally write mutations","readwrite",(M=>{let $=$r(),H=Ne();return g.Os.getEntries(M,w).next((z=>{$=z,$.forEach(((J,te)=>{te.isValidDocument()||(H=H.add(J))}))})).next((()=>g.localDocuments.getOverlayedDocuments(M,$))).next((z=>{T=z;const J=[];for(const te of f){const ne=NR(te,T.get(te.key).overlayedDocument);ne!=null&&J.push(new Cs(te.key,ne,Kv(ne.value.mapValue),hr.exists(!0)))}return g.mutationQueue.addMutationBatch(M,_,J,f)})).next((z=>{I=z;const J=z.applyToLocalDocumentSet(T,H);return g.documentOverlayCache.saveOverlays(M,z.batchId,J)}))})).then((()=>({batchId:I.batchId,changes:sw(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new et(Se)),_=_.insert(f,g),h.Ru[h.currentUser.toKey()]=_})(i,o.batchId,t),await Tl(i,o.changes),await zc(i.remoteStore)}catch(o){const l=ep(o,"Failed to persist write");t.reject(l)}}async function jw(r,e){const t=Te(r);try{const i=await PP(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Fe(h.lu,14607):o.removedDocuments.size>0&&(Fe(h.lu,42227),h.lu=!1))})),await Tl(t,i,e)}catch(i){await jo(i)}}function r_(r,e,t){const i=Te(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Te(h);g.onlineState=f;let _=!1;g.queries.forEach(((w,T)=>{for(const I of T.wa)I.va(f)&&(_=!0)})),_&&rp(g)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function mk(r,e,t){const i=Te(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let h=new et(fe.comparator);h=h.insert(l,zt.newNoDocument(l,Ee.min()));const f=Ne().add(l),g=new Fc(Ee.min(),new Map,new et(Se),h,f);await jw(i,g),i.du=i.du.remove(l),i.Eu.delete(e),op(i)}else await sf(i.localStore,e,!1).then((()=>lf(i,e,t))).catch(jo)}async function gk(r,e){const t=Te(r),i=e.batch.batchId;try{const o=await RP(t.localStore,e);zw(t,i,null),Bw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Tl(t,o)}catch(o){await jo(o)}}async function yk(r,e,t){const i=Te(r);try{const o=await(function(h,f){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,f).next((T=>(Fe(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(i.localStore,e);zw(i,e,t),Bw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Tl(i,o)}catch(o){await jo(o)}}function Bw(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function zw(r,e,t){const i=Te(r);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function lf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Tu.get(e))r.Pu.delete(i),t&&r.hu.pu(i,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((i=>{r.Au.containsKey(i)||$w(r,i)}))}function $w(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Qf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),op(r))}function i_(r,e,t){for(const i of t)i instanceof Mw?(r.Au.addReference(i.key,e),_k(r,i)):i instanceof Uw?(se(sp,"Document no longer in limbo: "+i.key),r.Au.removeReference(i.key,e),r.Au.containsKey(i.key)||$w(r,i.key)):_e(19791,{yu:i})}function _k(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Iu.has(i)||(se(sp,"New document in limbo: "+t),r.Iu.add(i),op(r))}function op(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new fe(qe.fromString(e)),i=r.mu.next();r.Eu.set(i,new ak(t)),r.du=r.du.insert(t,i),xw(r.remoteStore,new Ei(cr(Vc(t.path)),i,"TargetPurposeLimboResolution",xc.ue))}}async function Tl(r,e,t){const i=Te(r),o=[],l=[],h=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,g)=>{h.push(i.gu(g,e,t).then((_=>{var w;if((_||t)&&i.isPrimaryClient){const T=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=Gf.Es(g.targetId,_);l.push(T)}})))})),await Promise.all(h),i.hu.J_(o),await(async function(g,_){const w=Te(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>q.forEach(_,(I=>q.forEach(I.Is,(M=>w.persistence.referenceDelegate.addReference(T,I.targetId,M))).next((()=>q.forEach(I.ds,(M=>w.persistence.referenceDelegate.removeReference(T,I.targetId,M)))))))))}catch(T){if(!Bo(T))throw T;se(Kf,"Failed to update sequence numbers: "+T)}for(const T of _){const I=T.targetId;if(!T.fromCache){const M=w.Fs.get(I),$=M.snapshotVersion,H=M.withLastLimboFreeSnapshotVersion($);w.Fs=w.Fs.insert(I,H)}}})(i.localStore,l))}async function vk(r,e){const t=Te(r);if(!t.currentUser.isEqual(e)){se(sp,"User change. New user:",e.toKey());const i=await Pw(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((g=>{g.reject(new re(W.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Tl(t,i.Bs)}}function wk(r,e){const t=Te(r),i=t.Eu.get(e);if(i&&i.lu)return Ne().add(i.key);{let o=Ne();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function Ww(r){const e=Te(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=jw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mk.bind(null,e),e.hu.J_=rk.bind(null,e.eventManager),e.hu.pu=ik.bind(null,e.eventManager),e}function Ek(r){const e=Te(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yk.bind(null,e),e}class vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return AP(this.persistence,new TP,e.initialUser,this.serializer)}Du(e){return new Rw(qf.Vi,this.serializer)}bu(e){return new DP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vc.provider={build:()=>new vc};class Tk extends vc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof yc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new aP(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new Rw((i=>yc.Vi(i,t)),this.serializer)}}class uf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>r_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=vk.bind(null,this.syncEngine),await ek(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new nk})()}createDatastore(e){const t=jc(e.databaseInfo.databaseId),i=(function(l){return new MP(l)})(e.databaseInfo);return(function(l,h,f,g){return new BP(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new $P(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>r_(this.syncEngine,t,0)),(function(){return Yy.C()?new Yy:new OP})())}createSyncEngine(e,t){return(function(o,l,h,f,g,_,w){const T=new lk(o,l,h,f,g,_);return w&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Te(o);se(Is,"RemoteStore shutting down."),l.Ia.add(5),await El(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}uf.provider={build:()=>new uf};/**
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
 *//**
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
 */class ap{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Oi="FirestoreClient";class Ik{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=Lf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{se(Oi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(se(Oi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=ep(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function xd(r,e){r.asyncQueue.verifyOperationInProgress(),se(Oi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await Pw(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{Pi("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{se("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Pi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function s_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Sk(r);se(Oi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>Zy(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>Zy(e.remoteStore,o))),r._onlineComponents=e}async function Sk(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se(Oi,"Using user provided OfflineComponentProvider");try{await xd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Pi("Error using user provided cache. Falling back to memory cache: "+t),await xd(r,new vc)}}else se(Oi,"Using default OfflineComponentProvider"),await xd(r,new Tk(void 0));return r._offlineComponents}async function Hw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se(Oi,"Using user provided OnlineComponentProvider"),await s_(r,r._uninitializedComponentsProvider._online)):(se(Oi,"Using default OnlineComponentProvider"),await s_(r,new uf))),r._onlineComponents}function Ak(r){return Hw(r).then((e=>e.syncEngine))}async function wc(r){const e=await Hw(r),t=e.eventManager;return t.onListen=uk.bind(null,e.syncEngine),t.onUnlisten=dk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ck.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fk.bind(null,e.syncEngine),t}function Rk(r,e,t={}){const i=new Fr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const w=new ap({next:I=>{w.Ou(),h.enqueueAndForget((()=>np(l,T)));const M=I.docs.has(f);!M&&I.fromCache?_.reject(new re(W.UNAVAILABLE,"Failed to get document because the client is offline.")):M&&I.fromCache&&g&&g.source==="server"?_.reject(new re(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(I)},error:I=>_.reject(I)}),T=new ip(Vc(f.path),w,{includeMetadataChanges:!0,ka:!0});return tp(l,T)})(await wc(r),r.asyncQueue,e,t,i))),i.promise}function Pk(r,e,t={}){const i=new Fr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const w=new ap({next:I=>{w.Ou(),h.enqueueAndForget((()=>np(l,T))),I.fromCache&&g.source==="server"?_.reject(new re(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(I)},error:I=>_.reject(I)}),T=new ip(f,w,{includeMetadataChanges:!0,ka:!0});return tp(l,T)})(await wc(r),r.asyncQueue,e,t,i))),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function qw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const o_=new Map;/**
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
 */const Gw="firestore.googleapis.com",a_=!0;class l_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new re(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gw,this.ssl=a_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:a_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Aw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sP)throw new re(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $c{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new l_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new l_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new V1;switch(i.type){case"firstParty":return new U1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new re(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=o_.get(t);i&&(se("ComponentProvider","Removing Datastore"),o_.delete(t),i.terminate())})(this),Promise.resolve()}}function kk(r,e,t,i={}){var o;r=Hn(r,$c);const l=Vi(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(hf(`https://${g}`),df("Firestore",!0)),h.host!==Gw&&h.host!==g&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:i});if(!ys(_,f)&&(r._setSettings(_),i.mockUserToken)){let w,T;if(typeof i.mockUserToken=="string")w=i.mockUserToken,T=Bt.MOCK_USER;else{w=k_(i.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new re(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Bt(I)}r._authCredentials=new L1(new Lv(w,T))}}/**
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
 */class Mi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Mi(this.firestore,e,this._query)}}class lt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(_l(t,lt._jsonSchema))return new lt(e,i||null,new fe(qe.fromString(t.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:pt("string",lt._jsonSchemaVersion),referencePath:pt("string")};class Ai extends Mi{constructor(e,t,i){super(e,t,Vc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new fe(e))}withConverter(e){return new Ai(this.firestore,e,this._path)}}function Ec(r,e,...t){if(r=ut(r),Mv("collection","path",e),r instanceof $c){const i=qe.fromString(e,...t);return Ey(i),new Ai(r,null,i)}{if(!(r instanceof lt||r instanceof Ai))throw new re(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(qe.fromString(e,...t));return Ey(i),new Ai(r.firestore,null,i)}}function fr(r,e,...t){if(r=ut(r),arguments.length===1&&(e=Lf.newId()),Mv("doc","path",e),r instanceof $c){const i=qe.fromString(e,...t);return wy(i),new lt(r,null,new fe(i))}{if(!(r instanceof lt||r instanceof Ai))throw new re(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(qe.fromString(e,...t));return wy(i),new lt(r.firestore,r instanceof Ai?r.converter:null,new fe(i))}}/**
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
 */const u_="AsyncQueue";class c_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Cw(this,"async_queue_retry"),this.oc=()=>{const i=Nd();i&&se(u_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=Nd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Nd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Fr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Bo(e))throw e;se(u_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,zr("INTERNAL UNHANDLED ERROR: ",h_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Zf.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&_e(47125,{hc:h_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function h_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function d_(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class Ss extends $c{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new c_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new c_(e),this._firestoreClient=void 0,await e}}}function Ck(r,e){const t=typeof r=="object"?r:mf(),i=typeof r=="string"?r:dc,o=Ac(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=A_("firestore");l&&kk(o,...l)}return o}function Wc(r){if(r._terminated)throw new re(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Nk(r),r._firestoreClient}function Nk(r){var e,t,i;const o=r._freezeSettings(),l=(function(f,g,_,w){return new eR(f,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,qw(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new Ik(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class Pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pn(Ot.fromBase64String(e))}catch(t){throw new re(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_l(e,Pn._jsonSchema))return Pn.fromBase64String(e.bytes)}}Pn._jsonSchemaVersion="firestore/bytes/1.0",Pn._jsonSchema={type:pt("string",Pn._jsonSchemaVersion),bytes:pt("string")};/**
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
 */class lp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class up{constructor(e){this._methodName=e}}/**
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
 */class pr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pr._jsonSchemaVersion}}static fromJSON(e){if(_l(e,pr._jsonSchema))return new pr(e.latitude,e.longitude)}}pr._jsonSchemaVersion="firestore/geoPoint/1.0",pr._jsonSchema={type:pt("string",pr._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class mr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:mr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_l(e,mr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new mr(e.vectorValues);throw new re(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mr._jsonSchemaVersion="firestore/vectorValue/1.0",mr._jsonSchema={type:pt("string",mr._jsonSchemaVersion),vectorValues:pt("object")};/**
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
 */const xk=/^__.*__$/;class Dk{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Cs(e,this.data,this.fieldMask,t,this.fieldTransforms):new vl(e,this.data,t,this.fieldTransforms)}}function Kw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ec:r})}}class cp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new cp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Tc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Kw(this.Ec)&&xk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Ok{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||jc(e)}Dc(e,t,i,o=!1){return new cp({Ec:e,methodName:t,bc:i,path:Dt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hp(r){const e=r._freezeSettings(),t=jc(r._databaseId);return new Ok(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Qw(r,e,t,i,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);Jw("Data must be an object, but it was:",h,i);const f=Xw(i,h);let g,_;if(l.merge)g=new Wn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const I=Lk(e,T,t);if(!h.contains(I))throw new re(W.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Mk(w,I)||w.push(I)}g=new Wn(w),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new Dk(new Rn(f),g,_)}class dp extends up{_toFieldTransform(e){return new RR(e.path,new al)}isEqual(e){return e instanceof dp}}function Vk(r,e,t,i=!1){return fp(t,r.Dc(i?4:3,e))}function fp(r,e){if(Yw(r=ut(r)))return Jw("Unsupported field value:",e,r),Xw(r,e);if(r instanceof up)return(function(i,o){if(!Kw(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=fp(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(i,o){if((i=ut(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return IR(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Qe.fromDate(i);return{timestampValue:gc(o.serializer,l)}}if(i instanceof Qe){const l=new Qe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:gc(o.serializer,l)}}if(i instanceof pr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Pn)return{bytesValue:_w(o.serializer,i._byteString)};if(i instanceof lt){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Wf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof mr)return(function(h,f){return{mapValue:{fields:{[qv]:{stringValue:Gv},[fc]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw f.wc("VectorValues must only contain numeric values.");return Bf(f.serializer,_)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Nc(i)}`)})(r,e)}function Xw(r,e){const t={};return jv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ps(r,((i,o)=>{const l=fp(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function Yw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Qe||r instanceof pr||r instanceof Pn||r instanceof lt||r instanceof up||r instanceof mr)}function Jw(r,e,t){if(!Yw(t)||!Uv(t)){const i=Nc(t);throw i==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+i)}}function Lk(r,e,t){if((e=ut(e))instanceof lp)return e._internalPath;if(typeof e=="string")return Zw(r,e);throw Tc("Field path arguments must be of type string or ",r,!1,void 0,t)}const bk=new RegExp("[~\\*/\\[\\]]");function Zw(r,e,t){if(e.search(bk)>=0)throw Tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new lp(...e.split("."))._internalPath}catch{throw Tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Tc(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new re(W.INVALID_ARGUMENT,f+r+g)}function Mk(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class eE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Uk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(pp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Uk extends eE{data(){return super.data()}}function pp(r,e){return typeof e=="string"?Zw(r,e):e instanceof lp?e._internalPath:e._delegate._internalPath}/**
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
 */function tE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new re(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mp{}class nE extends mp{}function rE(r,e,...t){let i=[];e instanceof mp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof yp)).length,f=l.filter((g=>g instanceof gp)).length;if(h>1||h>0&&f>0)throw new re(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class gp extends nE{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new gp(e,t,i)}_apply(e){const t=this._parse(e);return sE(e._query,t),new Mi(e.firestore,e.converter,Jd(e._query,t))}_parse(e){const t=hp(e.firestore);return(function(l,h,f,g,_,w,T){let I;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new re(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){p_(T,w);const $=[];for(const H of T)$.push(f_(g,l,H));I={arrayValue:{values:$}}}else I=f_(g,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||p_(T,w),I=Vk(f,h,T,w==="in"||w==="not-in");return ft.create(_,w,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class yp extends mp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new yp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Gn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)sE(h,g),h=Jd(h,g)})(e._query,t),new Mi(e.firestore,e.converter,Jd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _p extends nE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _p(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new re(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new re(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ol(l,h)})(e._query,this._field,this._direction);return new Mi(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new zo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function iE(r,e="asc"){const t=e,i=pp("orderBy",r);return _p._create(i,t)}function f_(r,e,t){if(typeof(t=ut(t))=="string"){if(t==="")throw new re(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tw(e)&&t.indexOf("/")!==-1)throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(qe.fromString(t));if(!fe.isDocumentKey(i))throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Cy(r,new fe(i))}if(t instanceof lt)return Cy(r,t._key);throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nc(t)}.`)}function p_(r,e){if(!Array.isArray(r)||r.length===0)throw new re(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sE(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Fk{convertValue(e,t="none"){switch(xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ps(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[fc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((h=>at(h.doubleValue)));return new mr(l)}convertGeoPoint(e){return new pr(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Oc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(rl(e));default:return null}}convertTimestamp(e){const t=Ci(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=qe.fromString(e);Fe(Sw(i),9688,{name:e});const o=new il(i.get(1),i.get(3)),l=new fe(i.popFirst(5));return o.isEqual(t)||zr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function oE(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class Ha{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ms extends eE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new nc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(pp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ms._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ms._jsonSchemaVersion="firestore/documentSnapshot/1.0",ms._jsonSchema={type:pt("string",ms._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class nc extends ms{data(e={}){return super.data(e)}}class gs{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ha(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new nc(this._firestore,this._userDataWriter,i.key,i,new Ha(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new nc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ha(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new nc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ha(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:jk(f.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=gs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
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
 */function Ic(r){r=Hn(r,lt);const e=Hn(r.firestore,Ss);return Rk(Wc(e),r._key).then((t=>uE(e,r,t)))}gs._jsonSchemaVersion="firestore/querySnapshot/1.0",gs._jsonSchema={type:pt("string",gs._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};class vp extends Fk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,t)}}function aE(r){r=Hn(r,Mi);const e=Hn(r.firestore,Ss),t=Wc(e),i=new vp(e);return tE(r._query),Pk(t,r._query).then((o=>new gs(e,i,r,o)))}function cl(r,e,t){r=Hn(r,lt);const i=Hn(r.firestore,Ss),o=oE(r.converter,e,t);return lE(i,[Qw(hp(i),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,hr.none())])}function Bk(r,e){const t=Hn(r.firestore,Ss),i=fr(r),o=oE(r.converter,e);return lE(t,[Qw(hp(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,hr.exists(!1))]).then((()=>i))}function zk(r,...e){var t,i,o;r=ut(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||d_(e[h])||(l=e[h++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(d_(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let g,_,w;if(r instanceof lt)_=Hn(r.firestore,Ss),w=Vc(r._key.path),g={next:T=>{e[h]&&e[h](uE(_,r,T))},error:e[h+1],complete:e[h+2]};else{const T=Hn(r,Mi);_=Hn(T.firestore,Ss),w=T._query;const I=new vp(_);g={next:M=>{e[h]&&e[h](new gs(_,I,T,M))},error:e[h+1],complete:e[h+2]},tE(r._query)}return(function(I,M,$,H){const z=new ap(H),J=new ip(M,z,$);return I.asyncQueue.enqueueAndForget((async()=>tp(await wc(I),J))),()=>{z.Ou(),I.asyncQueue.enqueueAndForget((async()=>np(await wc(I),J)))}})(Wc(_),w,f,g)}function lE(r,e){return(function(i,o){const l=new Fr;return i.asyncQueue.enqueueAndForget((async()=>pk(await Ak(i),o,l))),l.promise})(Wc(r),e)}function uE(r,e,t){const i=t.docs.get(e._key),o=new vp(r);return new ms(r,o,e._key,i,new Ha(t.hasPendingWrites,t.fromCache),e.converter)}function hl(){return new dp("serverTimestamp")}(function(e,t=!0){(function(o){Fo=o})(As),_s(new Ri("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Ss(new b1(i.getProvider("auth-internal")),new F1(h,i.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new re(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new il(_.options.projectId,w)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),ar(my,gy,e),ar(my,gy,"esm2017")})();const $k={apiKey:"AIzaSyCjLVUF_wyjlduSuCi_4DEyKXOt8JjEvsQ",authDomain:"coachpulse-87341.firebaseapp.com",projectId:"coachpulse-87341",storageBucket:"coachpulse-87341.firebasestorage.app",messagingSenderId:"440637829553",appId:"1:440637829553:web:96fdc2e49e5e58fed18d90"},wp=x_($k),m_=k1(wp),Xt=cA(wp);YI(Xt,ov);const mn=Ck(wp);var Pe=cf();const Wk=fT(Pe);var qu={},Dd={exports:{}},sn={},Od={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function Hk(){return g_||(g_=1,(function(r){function e(ee,pe){var oe=ee.length;ee.push(pe);e:for(;0<oe;){var O=oe-1>>>1,G=ee[O];if(0<o(G,pe))ee[O]=pe,ee[oe]=G,oe=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var pe=ee[0],oe=ee.pop();if(oe!==pe){ee[0]=oe;e:for(var O=0,G=ee.length,de=G>>>1;O<de;){var Ie=2*(O+1)-1,Ae=ee[Ie],De=Ie+1,Me=ee[De];if(0>o(Ae,oe))De<G&&0>o(Me,Ae)?(ee[O]=Me,ee[De]=oe,O=De):(ee[O]=Ae,ee[Ie]=oe,O=Ie);else if(De<G&&0>o(Me,oe))ee[O]=Me,ee[De]=oe,O=De;else break e}}return pe}function o(ee,pe){var oe=ee.sortIndex-pe.sortIndex;return oe!==0?oe:ee.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],w=1,T=null,I=3,M=!1,$=!1,H=!1,z=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(ee){for(var pe=t(_);pe!==null;){if(pe.callback===null)i(_);else if(pe.startTime<=ee)i(_),pe.sortIndex=pe.expirationTime,e(g,pe);else break;pe=t(_)}}function le(ee){if(H=!1,ne(ee),!$)if(t(g)!==null)$=!0,Lt(ke);else{var pe=t(_);pe!==null&&Be(le,pe.startTime-ee)}}function ke(ee,pe){$=!1,H&&(H=!1,J(S),S=-1),M=!0;var oe=I;try{for(ne(pe),T=t(g);T!==null&&(!(T.expirationTime>pe)||ee&&!D());){var O=T.callback;if(typeof O=="function"){T.callback=null,I=T.priorityLevel;var G=O(T.expirationTime<=pe);pe=r.unstable_now(),typeof G=="function"?T.callback=G:T===t(g)&&i(g),ne(pe)}else i(g);T=t(g)}if(T!==null)var de=!0;else{var Ie=t(_);Ie!==null&&Be(le,Ie.startTime-pe),de=!1}return de}finally{T=null,I=oe,M=!1}}var ve=!1,C=null,S=-1,R=5,N=-1;function D(){return!(r.unstable_now()-N<R)}function V(){if(C!==null){var ee=r.unstable_now();N=ee;var pe=!0;try{pe=C(!0,ee)}finally{pe?P():(ve=!1,C=null)}}else ve=!1}var P;if(typeof te=="function")P=function(){te(V)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Vt=it.port2;it.port1.onmessage=V,P=function(){Vt.postMessage(null)}}else P=function(){z(V,0)};function Lt(ee){C=ee,ve||(ve=!0,P())}function Be(ee,pe){S=z(function(){ee(r.unstable_now())},pe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){$||M||($=!0,Lt(ke))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(I){case 1:case 2:case 3:var pe=3;break;default:pe=I}var oe=I;I=pe;try{return ee()}finally{I=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,pe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var oe=I;I=ee;try{return pe()}finally{I=oe}},r.unstable_scheduleCallback=function(ee,pe,oe){var O=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,ee){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=oe+G,ee={id:w++,callback:pe,priorityLevel:ee,startTime:oe,expirationTime:G,sortIndex:-1},oe>O?(ee.sortIndex=oe,e(_,ee),t(g)===null&&ee===t(_)&&(H?(J(S),S=-1):H=!0,Be(le,oe-O))):(ee.sortIndex=G,e(g,ee),$||M||($=!0,Lt(ke))),ee},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(ee){var pe=I;return function(){var oe=I;I=pe;try{return ee.apply(this,arguments)}finally{I=oe}}}})(Vd)),Vd}var y_;function qk(){return y_||(y_=1,Od.exports=Hk()),Od.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function Gk(){if(__)return sn;__=1;var r=cf(),e=qk();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function I(n){return g.call(T,n)?!0:g.call(w,n)?!1:_.test(n)?T[n]=!0:(w[n]=!0,!1)}function M(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $(n,s,a,c){if(s===null||typeof s>"u"||M(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function H(n,s,a,c,d,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){z[n]=new H(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];z[s]=new H(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){z[n]=new H(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){z[n]=new H(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){z[n]=new H(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){z[n]=new H(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){z[n]=new H(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){z[n]=new H(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){z[n]=new H(n,5,!1,n.toLowerCase(),null,!1,!1)});var J=/[\-:]([a-z])/g;function te(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(J,te);z[s]=new H(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(J,te);z[s]=new H(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(J,te);z[s]=new H(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){z[n]=new H(n,1,!1,n.toLowerCase(),null,!1,!1)}),z.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){z[n]=new H(n,1,!1,n.toLowerCase(),null,!0,!0)});function ne(n,s,a,c){var d=z.hasOwnProperty(s)?z[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,d,c)&&(a=null),c||d===null?I(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var le=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ke=Symbol.for("react.element"),ve=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),ee=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,O;function G(n){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+n}var de=!1;function Ie(n,s){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var c=j}Reflect.construct(n,[],s)}else{try{s.call()}catch(j){c=j}n.call(s.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,A=m.length-1;1<=v&&0<=A&&d[v]!==m[A];)A--;for(;1<=v&&0<=A;v--,A--)if(d[v]!==m[A]){if(v!==1||A!==1)do if(v--,A--,0>A||d[v]!==m[A]){var k=`
`+d[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=A);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?G(n):""}function Ae(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function De(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case C:return"Fragment";case ve:return"Portal";case R:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case it:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case V:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Vt:return s=n.displayName||null,s!==null?s:De(n.type)||"Memo";case Lt:s=n._payload,n=n._init;try{return De(n(s))}catch{}}return null}function Me(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Et(n){var s=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function _r(n){n._valueTracker||(n._valueTracker=Et(n))}function xs(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Wr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ui(n,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ds(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Wo(n,s){s=s.checked,s!=null&&ne(n,"checked",s,!1)}function Ho(n,s){Wo(n,s);var a=Ue(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?Os(n,s.type,a):s.hasOwnProperty("defaultValue")&&Os(n,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Il(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Os(n,s,a){(s!=="number"||Wr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var vr=Array.isArray;function wr(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function qo(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vs(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(vr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Ue(a)}}function Ls(n,s){var a=Ue(s.value),c=Ue(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Go(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function mt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gt(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?mt(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Er,Ko=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Er.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Hr(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ji=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(n){ji.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Fi[s]=Fi[n]})});function Qo(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Fi.hasOwnProperty(n)&&Fi[n]?(""+s).trim():s+"px"}function Xo(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Qo(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Yo=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jo(n,s){if(s){if(Yo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Zo(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function bs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ms=null,gn=null,Kn=null;function Us(n){if(n=Ia(n)){if(typeof Ms!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Zl(s),Ms(n.stateNode,n.type,s))}}function Qn(n){gn?Kn?Kn.push(n):Kn=[n]:gn=n}function ea(){if(gn){var n=gn,s=Kn;if(Kn=gn=null,Us(n),s)for(n=0;n<s.length;n++)Us(s[n])}}function zi(n,s){return n(s)}function ta(){}var Tr=!1;function na(n,s,a){if(Tr)return n(s,a);Tr=!0;try{return zi(n,s,a)}finally{Tr=!1,(gn!==null||Kn!==null)&&(ta(),ea())}}function st(n,s){var a=n.stateNode;if(a===null)return null;var c=Zl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Fs=!1;if(f)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Fs=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Fs=!1}function $i(n,s,a,c,d,m,v,A,k){var j=Array.prototype.slice.call(arguments,3);try{s.apply(a,j)}catch(Q){this.onError(Q)}}var Wi=!1,js=null,Cn=!1,ra=null,Hc={onError:function(n){Wi=!0,js=n}};function Bs(n,s,a,c,d,m,v,A,k){Wi=!1,js=null,$i.apply(Hc,arguments)}function Sl(n,s,a,c,d,m,v,A,k){if(Bs.apply(this,arguments),Wi){if(Wi){var j=js;Wi=!1,js=null}else throw Error(t(198));Cn||(Cn=!0,ra=j)}}function Nn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Hi(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function xn(n){if(Nn(n)!==n)throw Error(t(188))}function Al(n){var s=n.alternate;if(!s){if(s=Nn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return xn(d),n;if(m===c)return xn(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,A=d.child;A;){if(A===a){v=!0,a=d,c=m;break}if(A===c){v=!0,c=d,a=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===a){v=!0,a=m,c=d;break}if(A===c){v=!0,c=m,a=d;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function ia(n){return n=Al(n),n!==null?zs(n):null}function zs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=zs(n);if(s!==null)return s;n=n.sibling}return null}var $s=e.unstable_scheduleCallback,sa=e.unstable_cancelCallback,Rl=e.unstable_shouldYield,qc=e.unstable_requestPaint,We=e.unstable_now,Pl=e.unstable_getCurrentPriorityLevel,qi=e.unstable_ImmediatePriority,qr=e.unstable_UserBlockingPriority,yn=e.unstable_NormalPriority,oa=e.unstable_LowPriority,kl=e.unstable_IdlePriority,Gi=null,an=null;function Cl(n){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Gi,n,void 0,(n.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:xl,aa=Math.log,Nl=Math.LN2;function xl(n){return n>>>=0,n===0?32:31-(aa(n)/Nl|0)|0}var Ws=64,Hs=4194304;function Gr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ki(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var A=v&~d;A!==0?c=Gr(A):(m&=v,m!==0&&(c=Gr(m)))}else v=a&~d,v!==0?c=Gr(v):m!==0&&(c=Gr(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-Wt(s),d=1<<a,c|=n[a],s&=~d;return c}function Gc(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ir(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-Wt(m),A=1<<v,k=d[v];k===-1?((A&a)===0||(A&c)!==0)&&(d[v]=Gc(A,s)):k<=s&&(n.expiredLanes|=A),m&=~A}}function ln(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Qi(){var n=Ws;return Ws<<=1,(Ws&4194240)===0&&(Ws=64),n}function Kr(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function Qr(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Wt(s),n[s]=a}function ze(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Wt(a),m=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Xr(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-Wt(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var xe=0;function Yr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dl,qs,Ol,Vl,Ll,la=!1,Xn=[],Pt=null,Dn=null,On=null,Jr=new Map,_n=new Map,Yn=[],Kc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bl(n,s){switch(n){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Jr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(s.pointerId)}}function Yt(n,s,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ia(s),s!==null&&qs(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function Qc(n,s,a,c,d){switch(s){case"focusin":return Pt=Yt(Pt,n,s,a,c,d),!0;case"dragenter":return Dn=Yt(Dn,n,s,a,c,d),!0;case"mouseover":return On=Yt(On,n,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Jr.set(m,Yt(Jr.get(m)||null,n,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,_n.set(m,Yt(_n.get(m)||null,n,s,a,c,d)),!0}return!1}function Ml(n){var s=es(n.target);if(s!==null){var a=Nn(s);if(a!==null){if(s=a.tag,s===13){if(s=Hi(a),s!==null){n.blockedOn=s,Ll(n.priority,function(){Ol(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Sr(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Gs(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Bi=c,a.target.dispatchEvent(c),Bi=null}else return s=Ia(a),s!==null&&qs(s),n.blockedOn=a,!1;s.shift()}return!0}function Xi(n,s,a){Sr(n)&&a.delete(s)}function Ul(){la=!1,Pt!==null&&Sr(Pt)&&(Pt=null),Dn!==null&&Sr(Dn)&&(Dn=null),On!==null&&Sr(On)&&(On=null),Jr.forEach(Xi),_n.forEach(Xi)}function Vn(n,s){n.blockedOn===s&&(n.blockedOn=null,la||(la=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ul)))}function Ln(n){function s(d){return Vn(d,n)}if(0<Xn.length){Vn(Xn[0],n);for(var a=1;a<Xn.length;a++){var c=Xn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Pt!==null&&Vn(Pt,n),Dn!==null&&Vn(Dn,n),On!==null&&Vn(On,n),Jr.forEach(s),_n.forEach(s),a=0;a<Yn.length;a++)c=Yn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)Ml(a),a.blockedOn===null&&Yn.shift()}var Ar=le.ReactCurrentBatchConfig,Zr=!0;function Xe(n,s,a,c){var d=xe,m=Ar.transition;Ar.transition=null;try{xe=1,ua(n,s,a,c)}finally{xe=d,Ar.transition=m}}function Xc(n,s,a,c){var d=xe,m=Ar.transition;Ar.transition=null;try{xe=4,ua(n,s,a,c)}finally{xe=d,Ar.transition=m}}function ua(n,s,a,c){if(Zr){var d=Gs(n,s,a,c);if(d===null)ah(n,s,c,Yi,a),bl(n,c);else if(Qc(d,n,s,a,c))c.stopPropagation();else if(bl(n,c),s&4&&-1<Kc.indexOf(n)){for(;d!==null;){var m=Ia(d);if(m!==null&&Dl(m),m=Gs(n,s,a,c),m===null&&ah(n,s,c,Yi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else ah(n,s,c,null,a)}}var Yi=null;function Gs(n,s,a,c){if(Yi=null,n=bs(c),n=es(n),n!==null)if(s=Nn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Hi(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Yi=n,null}function ca(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pl()){case qi:return 1;case qr:return 4;case yn:case oa:return 16;case kl:return 536870912;default:return 16}default:return 16}}var un=null,Ks=null,Jt=null;function ha(){if(Jt)return Jt;var n,s=Ks,a=s.length,c,d="value"in un?un.value:un.textContent,m=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[m-c];c++);return Jt=d.slice(n,1<c?1-c:void 0)}function Qs(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Jn(){return!0}function da(){return!1}function kt(n){function s(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Jn:da,this.isPropagationStopped=da,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),s}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=kt(bn),Zn=oe({},bn,{view:0,detail:0}),Yc=kt(Zn),Ys,Rr,ei,Ji=oe({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ei&&(ei&&n.type==="mousemove"?(Ys=n.screenX-ei.screenX,Rr=n.screenY-ei.screenY):Rr=Ys=0,ei=n),Ys)},movementY:function(n){return"movementY"in n?n.movementY:Rr}}),Js=kt(Ji),fa=oe({},Ji,{dataTransfer:0}),Fl=kt(fa),Zs=oe({},Zn,{relatedTarget:0}),eo=kt(Zs),jl=oe({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pr=kt(jl),Bl=oe({},bn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zl=kt(Bl),$l=oe({},bn,{data:0}),pa=kt($l),to={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ht={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hl(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=Wl[n])?!!s[n]:!1}function er(){return Hl}var u=oe({},Zn,{key:function(n){if(n.key){var s=to[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Qs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ht[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(n){return n.type==="keypress"?Qs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=kt(u),y=oe({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=kt(y),L=oe({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),B=kt(L),Z=oe({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=kt(Z),yt=oe({},Ji,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=kt(yt),Tt=[9,13,27,32],ct=f&&"CompositionEvent"in window,vn=null;f&&"documentMode"in document&&(vn=document.documentMode);var cn=f&&"TextEvent"in window&&!vn,Zi=f&&(!ct||vn&&8<vn&&11>=vn),no=" ",Ep=!1;function Tp(n,s){switch(n){case"keyup":return Tt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ro=!1;function cE(n,s){switch(n){case"compositionend":return Ip(s);case"keypress":return s.which!==32?null:(Ep=!0,no);case"textInput":return n=s.data,n===no&&Ep?null:n;default:return null}}function hE(n,s){if(ro)return n==="compositionend"||!ct&&Tp(n,s)?(n=ha(),Jt=Ks=un=null,ro=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Zi&&s.locale!=="ko"?null:s.data;default:return null}}var dE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!dE[n.type]:s==="textarea"}function Ap(n,s,a,c){Qn(c),s=Xl(s,"onChange"),0<s.length&&(a=new Xs("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var ma=null,ga=null;function fE(n){$p(n,0)}function ql(n){var s=lo(n);if(xs(s))return n}function pE(n,s){if(n==="change")return s}var Rp=!1;if(f){var Jc;if(f){var Zc="oninput"in document;if(!Zc){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),Zc=typeof Pp.oninput=="function"}Jc=Zc}else Jc=!1;Rp=Jc&&(!document.documentMode||9<document.documentMode)}function kp(){ma&&(ma.detachEvent("onpropertychange",Cp),ga=ma=null)}function Cp(n){if(n.propertyName==="value"&&ql(ga)){var s=[];Ap(s,ga,n,bs(n)),na(fE,s)}}function mE(n,s,a){n==="focusin"?(kp(),ma=s,ga=a,ma.attachEvent("onpropertychange",Cp)):n==="focusout"&&kp()}function gE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ql(ga)}function yE(n,s){if(n==="click")return ql(s)}function _E(n,s){if(n==="input"||n==="change")return ql(s)}function vE(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Mn=typeof Object.is=="function"?Object.is:vE;function ya(n,s){if(Mn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!Mn(n[d],s[d]))return!1}return!0}function Np(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xp(n,s){var a=Np(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Np(a)}}function Dp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Dp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Op(){for(var n=window,s=Wr();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Wr(n.document)}return s}function eh(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function wE(n){var s=Op(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&Dp(a.ownerDocument.documentElement,a)){if(c!==null&&eh(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=xp(a,m);var v=xp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var EE=f&&"documentMode"in document&&11>=document.documentMode,io=null,th=null,_a=null,nh=!1;function Vp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nh||io==null||io!==Wr(c)||(c=io,"selectionStart"in c&&eh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_a&&ya(_a,c)||(_a=c,c=Xl(th,"onSelect"),0<c.length&&(s=new Xs("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=io)))}function Gl(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var so={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionend:Gl("Transition","TransitionEnd")},rh={},Lp={};f&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function Kl(n){if(rh[n])return rh[n];if(!so[n])return n;var s=so[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in Lp)return rh[n]=s[a];return n}var bp=Kl("animationend"),Mp=Kl("animationiteration"),Up=Kl("animationstart"),Fp=Kl("transitionend"),jp=new Map,Bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(n,s){jp.set(n,s),l(s,[n])}for(var ih=0;ih<Bp.length;ih++){var sh=Bp[ih],TE=sh.toLowerCase(),IE=sh[0].toUpperCase()+sh.slice(1);ti(TE,"on"+IE)}ti(bp,"onAnimationEnd"),ti(Mp,"onAnimationIteration"),ti(Up,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(Fp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SE=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function zp(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,Sl(c,s,void 0,n),n.currentTarget=null}function $p(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var v=c.length-1;0<=v;v--){var A=c[v],k=A.instance,j=A.currentTarget;if(A=A.listener,k!==m&&d.isPropagationStopped())break e;zp(d,A,j),m=k}else for(v=0;v<c.length;v++){if(A=c[v],k=A.instance,j=A.currentTarget,A=A.listener,k!==m&&d.isPropagationStopped())break e;zp(d,A,j),m=k}}}if(Cn)throw n=ra,Cn=!1,ra=null,n}function Ge(n,s){var a=s[fh];a===void 0&&(a=s[fh]=new Set);var c=n+"__bubble";a.has(c)||(Wp(s,n,2,!1),a.add(c))}function oh(n,s,a){var c=0;s&&(c|=4),Wp(a,n,c,s)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function wa(n){if(!n[Ql]){n[Ql]=!0,i.forEach(function(a){a!=="selectionchange"&&(SE.has(a)||oh(a,!1,n),oh(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Ql]||(s[Ql]=!0,oh("selectionchange",!1,s))}}function Wp(n,s,a,c){switch(ca(s)){case 1:var d=Xe;break;case 4:d=Xc;break;default:d=ua}a=d.bind(null,s,a,n),d=void 0,!Fs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function ah(n,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;A!==null;){if(v=es(A),v===null)return;if(k=v.tag,k===5||k===6){c=m=v;continue e}A=A.parentNode}}c=c.return}na(function(){var j=m,Q=bs(a),X=[];e:{var K=jp.get(n);if(K!==void 0){var ie=Xs,ue=n;switch(n){case"keypress":if(Qs(a)===0)break e;case"keydown":case"keyup":ie=p;break;case"focusin":ue="focus",ie=eo;break;case"focusout":ue="blur",ie=eo;break;case"beforeblur":case"afterblur":ie=eo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Fl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=B;break;case bp:case Mp:case Up:ie=Pr;break;case Fp:ie=je;break;case"scroll":ie=Yc;break;case"wheel":ie=Oe;break;case"copy":case"cut":case"paste":ie=zl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=E}var ce=(s&4)!==0,ot=!ce&&n==="scroll",b=ce?K!==null?K+"Capture":null:K;ce=[];for(var x=j,F;x!==null;){F=x;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,b!==null&&(Y=st(x,b),Y!=null&&ce.push(Ea(x,Y,F)))),ot)break;x=x.return}0<ce.length&&(K=new ie(K,ue,null,a,Q),X.push({event:K,listeners:ce}))}}if((s&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",K&&a!==Bi&&(ue=a.relatedTarget||a.fromElement)&&(es(ue)||ue[kr]))break e;if((ie||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,ie?(ue=a.relatedTarget||a.toElement,ie=j,ue=ue?es(ue):null,ue!==null&&(ot=Nn(ue),ue!==ot||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=j),ie!==ue)){if(ce=Js,Y="onMouseLeave",b="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(ce=E,Y="onPointerLeave",b="onPointerEnter",x="pointer"),ot=ie==null?K:lo(ie),F=ue==null?K:lo(ue),K=new ce(Y,x+"leave",ie,a,Q),K.target=ot,K.relatedTarget=F,Y=null,es(Q)===j&&(ce=new ce(b,x+"enter",ue,a,Q),ce.target=F,ce.relatedTarget=ot,Y=ce),ot=Y,ie&&ue)t:{for(ce=ie,b=ue,x=0,F=ce;F;F=oo(F))x++;for(F=0,Y=b;Y;Y=oo(Y))F++;for(;0<x-F;)ce=oo(ce),x--;for(;0<F-x;)b=oo(b),F--;for(;x--;){if(ce===b||b!==null&&ce===b.alternate)break t;ce=oo(ce),b=oo(b)}ce=null}else ce=null;ie!==null&&Hp(X,K,ie,ce,!1),ue!==null&&ot!==null&&Hp(X,ot,ue,ce,!0)}}e:{if(K=j?lo(j):window,ie=K.nodeName&&K.nodeName.toLowerCase(),ie==="select"||ie==="input"&&K.type==="file")var he=pE;else if(Sp(K))if(Rp)he=_E;else{he=gE;var me=mE}else(ie=K.nodeName)&&ie.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(he=yE);if(he&&(he=he(n,j))){Ap(X,he,a,Q);break e}me&&me(n,K,j),n==="focusout"&&(me=K._wrapperState)&&me.controlled&&K.type==="number"&&Os(K,"number",K.value)}switch(me=j?lo(j):window,n){case"focusin":(Sp(me)||me.contentEditable==="true")&&(io=me,th=j,_a=null);break;case"focusout":_a=th=io=null;break;case"mousedown":nh=!0;break;case"contextmenu":case"mouseup":case"dragend":nh=!1,Vp(X,a,Q);break;case"selectionchange":if(EE)break;case"keydown":case"keyup":Vp(X,a,Q)}var ge;if(ct)e:{switch(n){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else ro?Tp(n,a)&&(we="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Zi&&a.locale!=="ko"&&(ro||we!=="onCompositionStart"?we==="onCompositionEnd"&&ro&&(ge=ha()):(un=Q,Ks="value"in un?un.value:un.textContent,ro=!0)),me=Xl(j,we),0<me.length&&(we=new pa(we,n,null,a,Q),X.push({event:we,listeners:me}),ge?we.data=ge:(ge=Ip(a),ge!==null&&(we.data=ge)))),(ge=cn?cE(n,a):hE(n,a))&&(j=Xl(j,"onBeforeInput"),0<j.length&&(Q=new pa("onBeforeInput","beforeinput",null,a,Q),X.push({event:Q,listeners:j}),Q.data=ge))}$p(X,s)})}function Ea(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Xl(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=st(n,a),m!=null&&c.unshift(Ea(n,m,d)),m=st(n,s),m!=null&&c.push(Ea(n,m,d))),n=n.return}return c}function oo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Hp(n,s,a,c,d){for(var m=s._reactName,v=[];a!==null&&a!==c;){var A=a,k=A.alternate,j=A.stateNode;if(k!==null&&k===c)break;A.tag===5&&j!==null&&(A=j,d?(k=st(a,m),k!=null&&v.unshift(Ea(a,k,A))):d||(k=st(a,m),k!=null&&v.push(Ea(a,k,A)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var AE=/\r\n?/g,RE=/\u0000|\uFFFD/g;function qp(n){return(typeof n=="string"?n:""+n).replace(AE,`
`).replace(RE,"")}function Yl(n,s,a){if(s=qp(s),qp(n)!==s&&a)throw Error(t(425))}function Jl(){}var lh=null,uh=null;function ch(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var hh=typeof setTimeout=="function"?setTimeout:void 0,PE=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,kE=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(n){return Gp.resolve(null).then(n).catch(CE)}:hh;function CE(n){setTimeout(function(){throw n})}function dh(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Ln(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Ln(s)}function ni(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Kp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var ao=Math.random().toString(36).slice(2),tr="__reactFiber$"+ao,Ta="__reactProps$"+ao,kr="__reactContainer$"+ao,fh="__reactEvents$"+ao,NE="__reactListeners$"+ao,xE="__reactHandles$"+ao;function es(n){var s=n[tr];if(s)return s;for(var a=n.parentNode;a;){if(s=a[kr]||a[tr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Kp(n);n!==null;){if(a=n[tr])return a;n=Kp(n)}return s}n=a,a=n.parentNode}return null}function Ia(n){return n=n[tr]||n[kr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function lo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Zl(n){return n[Ta]||null}var ph=[],uo=-1;function ri(n){return{current:n}}function Ke(n){0>uo||(n.current=ph[uo],ph[uo]=null,uo--)}function He(n,s){uo++,ph[uo]=n.current,n.current=s}var ii={},bt=ri(ii),Zt=ri(!1),ts=ii;function co(n,s){var a=n.type.contextTypes;if(!a)return ii;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function en(n){return n=n.childContextTypes,n!=null}function eu(){Ke(Zt),Ke(bt)}function Qp(n,s,a){if(bt.current!==ii)throw Error(t(168));He(bt,s),He(Zt,a)}function Xp(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(n)||"Unknown",d));return oe({},a,c)}function tu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ii,ts=bt.current,He(bt,n),He(Zt,Zt.current),!0}function Yp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Xp(n,s,ts),c.__reactInternalMemoizedMergedChildContext=n,Ke(Zt),Ke(bt),He(bt,n)):Ke(Zt),He(Zt,a)}var Cr=null,nu=!1,mh=!1;function Jp(n){Cr===null?Cr=[n]:Cr.push(n)}function DE(n){nu=!0,Jp(n)}function si(){if(!mh&&Cr!==null){mh=!0;var n=0,s=xe;try{var a=Cr;for(xe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Cr=null,nu=!1}catch(d){throw Cr!==null&&(Cr=Cr.slice(n+1)),$s(qi,si),d}finally{xe=s,mh=!1}}return null}var ho=[],fo=0,ru=null,iu=0,wn=[],En=0,ns=null,Nr=1,xr="";function rs(n,s){ho[fo++]=iu,ho[fo++]=ru,ru=n,iu=s}function Zp(n,s,a){wn[En++]=Nr,wn[En++]=xr,wn[En++]=ns,ns=n;var c=Nr;n=xr;var d=32-Wt(c)-1;c&=~(1<<d),a+=1;var m=32-Wt(s)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Nr=1<<32-Wt(s)+d|a<<d|c,xr=m+n}else Nr=1<<m|a<<d|c,xr=n}function gh(n){n.return!==null&&(rs(n,1),Zp(n,1,0))}function yh(n){for(;n===ru;)ru=ho[--fo],ho[fo]=null,iu=ho[--fo],ho[fo]=null;for(;n===ns;)ns=wn[--En],wn[En]=null,xr=wn[--En],wn[En]=null,Nr=wn[--En],wn[En]=null}var hn=null,dn=null,Ye=!1,Un=null;function em(n,s){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function tm(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,hn=n,dn=ni(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,hn=n,dn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ns!==null?{id:Nr,overflow:xr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,hn=n,dn=null,!0):!1;default:return!1}}function _h(n){return(n.mode&1)!==0&&(n.flags&128)===0}function vh(n){if(Ye){var s=dn;if(s){var a=s;if(!tm(n,s)){if(_h(n))throw Error(t(418));s=ni(a.nextSibling);var c=hn;s&&tm(n,s)?em(c,a):(n.flags=n.flags&-4097|2,Ye=!1,hn=n)}}else{if(_h(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,hn=n}}}function nm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hn=n}function su(n){if(n!==hn)return!1;if(!Ye)return nm(n),Ye=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!ch(n.type,n.memoizedProps)),s&&(s=dn)){if(_h(n))throw rm(),Error(t(418));for(;s;)em(n,s),s=ni(s.nextSibling)}if(nm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){dn=ni(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}dn=null}}else dn=hn?ni(n.stateNode.nextSibling):null;return!0}function rm(){for(var n=dn;n;)n=ni(n.nextSibling)}function po(){dn=hn=null,Ye=!1}function wh(n){Un===null?Un=[n]:Un.push(n)}var OE=le.ReactCurrentBatchConfig;function Sa(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var A=d.refs;v===null?delete A[m]:A[m]=v},s._stringRef=m,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ou(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function im(n){var s=n._init;return s(n._payload)}function sm(n){function s(b,x){if(n){var F=b.deletions;F===null?(b.deletions=[x],b.flags|=16):F.push(x)}}function a(b,x){if(!n)return null;for(;x!==null;)s(b,x),x=x.sibling;return null}function c(b,x){for(b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}function d(b,x){return b=fi(b,x),b.index=0,b.sibling=null,b}function m(b,x,F){return b.index=F,n?(F=b.alternate,F!==null?(F=F.index,F<x?(b.flags|=2,x):F):(b.flags|=2,x)):(b.flags|=1048576,x)}function v(b){return n&&b.alternate===null&&(b.flags|=2),b}function A(b,x,F,Y){return x===null||x.tag!==6?(x=hd(F,b.mode,Y),x.return=b,x):(x=d(x,F),x.return=b,x)}function k(b,x,F,Y){var he=F.type;return he===C?Q(b,x,F.props.children,Y,F.key):x!==null&&(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Lt&&im(he)===x.type)?(Y=d(x,F.props),Y.ref=Sa(b,x,F),Y.return=b,Y):(Y=Nu(F.type,F.key,F.props,null,b.mode,Y),Y.ref=Sa(b,x,F),Y.return=b,Y)}function j(b,x,F,Y){return x===null||x.tag!==4||x.stateNode.containerInfo!==F.containerInfo||x.stateNode.implementation!==F.implementation?(x=dd(F,b.mode,Y),x.return=b,x):(x=d(x,F.children||[]),x.return=b,x)}function Q(b,x,F,Y,he){return x===null||x.tag!==7?(x=hs(F,b.mode,Y,he),x.return=b,x):(x=d(x,F),x.return=b,x)}function X(b,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return x=hd(""+x,b.mode,F),x.return=b,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ke:return F=Nu(x.type,x.key,x.props,null,b.mode,F),F.ref=Sa(b,null,x),F.return=b,F;case ve:return x=dd(x,b.mode,F),x.return=b,x;case Lt:var Y=x._init;return X(b,Y(x._payload),F)}if(vr(x)||pe(x))return x=hs(x,b.mode,F,null),x.return=b,x;ou(b,x)}return null}function K(b,x,F,Y){var he=x!==null?x.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:A(b,x,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ke:return F.key===he?k(b,x,F,Y):null;case ve:return F.key===he?j(b,x,F,Y):null;case Lt:return he=F._init,K(b,x,he(F._payload),Y)}if(vr(F)||pe(F))return he!==null?null:Q(b,x,F,Y,null);ou(b,F)}return null}function ie(b,x,F,Y,he){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return b=b.get(F)||null,A(x,b,""+Y,he);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case ke:return b=b.get(Y.key===null?F:Y.key)||null,k(x,b,Y,he);case ve:return b=b.get(Y.key===null?F:Y.key)||null,j(x,b,Y,he);case Lt:var me=Y._init;return ie(b,x,F,me(Y._payload),he)}if(vr(Y)||pe(Y))return b=b.get(F)||null,Q(x,b,Y,he,null);ou(x,Y)}return null}function ue(b,x,F,Y){for(var he=null,me=null,ge=x,we=x=0,At=null;ge!==null&&we<F.length;we++){ge.index>we?(At=ge,ge=null):At=ge.sibling;var be=K(b,ge,F[we],Y);if(be===null){ge===null&&(ge=At);break}n&&ge&&be.alternate===null&&s(b,ge),x=m(be,x,we),me===null?he=be:me.sibling=be,me=be,ge=At}if(we===F.length)return a(b,ge),Ye&&rs(b,we),he;if(ge===null){for(;we<F.length;we++)ge=X(b,F[we],Y),ge!==null&&(x=m(ge,x,we),me===null?he=ge:me.sibling=ge,me=ge);return Ye&&rs(b,we),he}for(ge=c(b,ge);we<F.length;we++)At=ie(ge,b,we,F[we],Y),At!==null&&(n&&At.alternate!==null&&ge.delete(At.key===null?we:At.key),x=m(At,x,we),me===null?he=At:me.sibling=At,me=At);return n&&ge.forEach(function(pi){return s(b,pi)}),Ye&&rs(b,we),he}function ce(b,x,F,Y){var he=pe(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var me=he=null,ge=x,we=x=0,At=null,be=F.next();ge!==null&&!be.done;we++,be=F.next()){ge.index>we?(At=ge,ge=null):At=ge.sibling;var pi=K(b,ge,be.value,Y);if(pi===null){ge===null&&(ge=At);break}n&&ge&&pi.alternate===null&&s(b,ge),x=m(pi,x,we),me===null?he=pi:me.sibling=pi,me=pi,ge=At}if(be.done)return a(b,ge),Ye&&rs(b,we),he;if(ge===null){for(;!be.done;we++,be=F.next())be=X(b,be.value,Y),be!==null&&(x=m(be,x,we),me===null?he=be:me.sibling=be,me=be);return Ye&&rs(b,we),he}for(ge=c(b,ge);!be.done;we++,be=F.next())be=ie(ge,b,we,be.value,Y),be!==null&&(n&&be.alternate!==null&&ge.delete(be.key===null?we:be.key),x=m(be,x,we),me===null?he=be:me.sibling=be,me=be);return n&&ge.forEach(function(dT){return s(b,dT)}),Ye&&rs(b,we),he}function ot(b,x,F,Y){if(typeof F=="object"&&F!==null&&F.type===C&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case ke:e:{for(var he=F.key,me=x;me!==null;){if(me.key===he){if(he=F.type,he===C){if(me.tag===7){a(b,me.sibling),x=d(me,F.props.children),x.return=b,b=x;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Lt&&im(he)===me.type){a(b,me.sibling),x=d(me,F.props),x.ref=Sa(b,me,F),x.return=b,b=x;break e}a(b,me);break}else s(b,me);me=me.sibling}F.type===C?(x=hs(F.props.children,b.mode,Y,F.key),x.return=b,b=x):(Y=Nu(F.type,F.key,F.props,null,b.mode,Y),Y.ref=Sa(b,x,F),Y.return=b,b=Y)}return v(b);case ve:e:{for(me=F.key;x!==null;){if(x.key===me)if(x.tag===4&&x.stateNode.containerInfo===F.containerInfo&&x.stateNode.implementation===F.implementation){a(b,x.sibling),x=d(x,F.children||[]),x.return=b,b=x;break e}else{a(b,x);break}else s(b,x);x=x.sibling}x=dd(F,b.mode,Y),x.return=b,b=x}return v(b);case Lt:return me=F._init,ot(b,x,me(F._payload),Y)}if(vr(F))return ue(b,x,F,Y);if(pe(F))return ce(b,x,F,Y);ou(b,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,x!==null&&x.tag===6?(a(b,x.sibling),x=d(x,F),x.return=b,b=x):(a(b,x),x=hd(F,b.mode,Y),x.return=b,b=x),v(b)):a(b,x)}return ot}var mo=sm(!0),om=sm(!1),au=ri(null),lu=null,go=null,Eh=null;function Th(){Eh=go=lu=null}function Ih(n){var s=au.current;Ke(au),n._currentValue=s}function Sh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function yo(n,s){lu=n,Eh=go=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(tn=!0),n.firstContext=null)}function Tn(n){var s=n._currentValue;if(Eh!==n)if(n={context:n,memoizedValue:s,next:null},go===null){if(lu===null)throw Error(t(308));go=n,lu.dependencies={lanes:0,firstContext:n}}else go=go.next=n;return s}var is=null;function Ah(n){is===null?is=[n]:is.push(n)}function am(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Ah(s)):(a.next=d.next,d.next=a),s.interleaved=a,Dr(n,c)}function Dr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var oi=!1;function Rh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Or(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ai(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Dr(n,a)}return d=c.interleaved,d===null?(s.next=s,Ah(c)):(s.next=d.next,d.next=s),c.interleaved=s,Dr(n,a)}function uu(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Xr(n,a)}}function um(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function cu(n,s,a,c){var d=n.updateQueue;oi=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var k=A,j=k.next;k.next=null,v===null?m=j:v.next=j,v=k;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,A=Q.lastBaseUpdate,A!==v&&(A===null?Q.firstBaseUpdate=j:A.next=j,Q.lastBaseUpdate=k))}if(m!==null){var X=d.baseState;v=0,Q=j=k=null,A=m;do{var K=A.lane,ie=A.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:ie,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ue=n,ce=A;switch(K=s,ie=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){X=ue.call(ie,X,K);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,K=typeof ue=="function"?ue.call(ie,X,K):ue,K==null)break e;X=oe({},X,K);break e;case 2:oi=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[A]:K.push(A))}else ie={eventTime:ie,lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Q===null?(j=Q=ie,k=X):Q=Q.next=ie,v|=K;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;K=A,A=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(k=X),d.baseState=k,d.firstBaseUpdate=j,d.lastBaseUpdate=Q,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);as|=v,n.lanes=v,n.memoizedState=X}}function cm(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Aa={},nr=ri(Aa),Ra=ri(Aa),Pa=ri(Aa);function ss(n){if(n===Aa)throw Error(t(174));return n}function Ph(n,s){switch(He(Pa,s),He(Ra,n),He(nr,Aa),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:gt(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=gt(s,n)}Ke(nr),He(nr,s)}function _o(){Ke(nr),Ke(Ra),Ke(Pa)}function hm(n){ss(Pa.current);var s=ss(nr.current),a=gt(s,n.type);s!==a&&(He(Ra,n),He(nr,a))}function kh(n){Ra.current===n&&(Ke(nr),Ke(Ra))}var Je=ri(0);function hu(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ch=[];function Nh(){for(var n=0;n<Ch.length;n++)Ch[n]._workInProgressVersionPrimary=null;Ch.length=0}var du=le.ReactCurrentDispatcher,xh=le.ReactCurrentBatchConfig,os=0,Ze=null,_t=null,It=null,fu=!1,ka=!1,Ca=0,VE=0;function Mt(){throw Error(t(321))}function Dh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!Mn(n[a],s[a]))return!1;return!0}function Oh(n,s,a,c,d,m){if(os=m,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,du.current=n===null||n.memoizedState===null?UE:FE,n=a(c,d),ka){m=0;do{if(ka=!1,Ca=0,25<=m)throw Error(t(301));m+=1,It=_t=null,s.updateQueue=null,du.current=jE,n=a(c,d)}while(ka)}if(du.current=gu,s=_t!==null&&_t.next!==null,os=0,It=_t=Ze=null,fu=!1,s)throw Error(t(300));return n}function Vh(){var n=Ca!==0;return Ca=0,n}function rr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?Ze.memoizedState=It=n:It=It.next=n,It}function In(){if(_t===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=_t.next;var s=It===null?Ze.memoizedState:It.next;if(s!==null)It=s,_t=n;else{if(n===null)throw Error(t(310));_t=n,n={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},It===null?Ze.memoizedState=It=n:It=It.next=n}return It}function Na(n,s){return typeof s=="function"?s(n):s}function Lh(n){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=_t,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var A=v=null,k=null,j=m;do{var Q=j.lane;if((os&Q)===Q)k!==null&&(k=k.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var X={lane:Q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};k===null?(A=k=X,v=c):k=k.next=X,Ze.lanes|=Q,as|=Q}j=j.next}while(j!==null&&j!==m);k===null?v=c:k.next=A,Mn(c,s.memoizedState)||(tn=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Ze.lanes|=m,as|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function bh(n){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);Mn(m,s.memoizedState)||(tn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function dm(){}function fm(n,s){var a=Ze,c=In(),d=s(),m=!Mn(c.memoizedState,d);if(m&&(c.memoizedState=d,tn=!0),c=c.queue,Mh(gm.bind(null,a,c,n),[n]),c.getSnapshot!==s||m||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,xa(9,mm.bind(null,a,c,d,s),void 0,null),St===null)throw Error(t(349));(os&30)!==0||pm(a,s,d)}return d}function pm(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function mm(n,s,a,c){s.value=a,s.getSnapshot=c,ym(s)&&_m(n)}function gm(n,s,a){return a(function(){ym(s)&&_m(n)})}function ym(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!Mn(n,a)}catch{return!0}}function _m(n){var s=Dr(n,1);s!==null&&zn(s,n,1,-1)}function vm(n){var s=rr();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:n},s.queue=n,n=n.dispatch=ME.bind(null,Ze,n),[s.memoizedState,n]}function xa(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function wm(){return In().memoizedState}function pu(n,s,a,c){var d=rr();Ze.flags|=n,d.memoizedState=xa(1|s,a,void 0,c===void 0?null:c)}function mu(n,s,a,c){var d=In();c=c===void 0?null:c;var m=void 0;if(_t!==null){var v=_t.memoizedState;if(m=v.destroy,c!==null&&Dh(c,v.deps)){d.memoizedState=xa(s,a,m,c);return}}Ze.flags|=n,d.memoizedState=xa(1|s,a,m,c)}function Em(n,s){return pu(8390656,8,n,s)}function Mh(n,s){return mu(2048,8,n,s)}function Tm(n,s){return mu(4,2,n,s)}function Im(n,s){return mu(4,4,n,s)}function Sm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Am(n,s,a){return a=a!=null?a.concat([n]):null,mu(4,4,Sm.bind(null,s,n),a)}function Uh(){}function Rm(n,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Dh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function Pm(n,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Dh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function km(n,s,a){return(os&21)===0?(n.baseState&&(n.baseState=!1,tn=!0),n.memoizedState=a):(Mn(a,s)||(a=Qi(),Ze.lanes|=a,as|=a,n.baseState=!0),s)}function LE(n,s){var a=xe;xe=a!==0&&4>a?a:4,n(!0);var c=xh.transition;xh.transition={};try{n(!1),s()}finally{xe=a,xh.transition=c}}function Cm(){return In().memoizedState}function bE(n,s,a){var c=hi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Nm(n))xm(s,a);else if(a=am(n,s,a,c),a!==null){var d=Gt();zn(a,n,c,d),Dm(a,s,c)}}function ME(n,s,a){var c=hi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nm(n))xm(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,a);if(d.hasEagerState=!0,d.eagerState=A,Mn(A,v)){var k=s.interleaved;k===null?(d.next=d,Ah(s)):(d.next=k.next,k.next=d),s.interleaved=d;return}}catch{}finally{}a=am(n,s,d,c),a!==null&&(d=Gt(),zn(a,n,c,d),Dm(a,s,c))}}function Nm(n){var s=n.alternate;return n===Ze||s!==null&&s===Ze}function xm(n,s){ka=fu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function Dm(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Xr(n,a)}}var gu={readContext:Tn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},UE={readContext:Tn,useCallback:function(n,s){return rr().memoizedState=[n,s===void 0?null:s],n},useContext:Tn,useEffect:Em,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,pu(4194308,4,Sm.bind(null,s,n),a)},useLayoutEffect:function(n,s){return pu(4194308,4,n,s)},useInsertionEffect:function(n,s){return pu(4,2,n,s)},useMemo:function(n,s){var a=rr();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=rr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=bE.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var s=rr();return n={current:n},s.memoizedState=n},useState:vm,useDebugValue:Uh,useDeferredValue:function(n){return rr().memoizedState=n},useTransition:function(){var n=vm(!1),s=n[0];return n=LE.bind(null,n[1]),rr().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=Ze,d=rr();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),St===null)throw Error(t(349));(os&30)!==0||pm(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,Em(gm.bind(null,c,m,n),[n]),c.flags|=2048,xa(9,mm.bind(null,c,m,a,s),void 0,null),a},useId:function(){var n=rr(),s=St.identifierPrefix;if(Ye){var a=xr,c=Nr;a=(c&~(1<<32-Wt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ca++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=VE++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},FE={readContext:Tn,useCallback:Rm,useContext:Tn,useEffect:Mh,useImperativeHandle:Am,useInsertionEffect:Tm,useLayoutEffect:Im,useMemo:Pm,useReducer:Lh,useRef:wm,useState:function(){return Lh(Na)},useDebugValue:Uh,useDeferredValue:function(n){var s=In();return km(s,_t.memoizedState,n)},useTransition:function(){var n=Lh(Na)[0],s=In().memoizedState;return[n,s]},useMutableSource:dm,useSyncExternalStore:fm,useId:Cm,unstable_isNewReconciler:!1},jE={readContext:Tn,useCallback:Rm,useContext:Tn,useEffect:Mh,useImperativeHandle:Am,useInsertionEffect:Tm,useLayoutEffect:Im,useMemo:Pm,useReducer:bh,useRef:wm,useState:function(){return bh(Na)},useDebugValue:Uh,useDeferredValue:function(n){var s=In();return _t===null?s.memoizedState=n:km(s,_t.memoizedState,n)},useTransition:function(){var n=bh(Na)[0],s=In().memoizedState;return[n,s]},useMutableSource:dm,useSyncExternalStore:fm,useId:Cm,unstable_isNewReconciler:!1};function Fn(n,s){if(n&&n.defaultProps){s=oe({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function Fh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:oe({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var yu={isMounted:function(n){return(n=n._reactInternals)?Nn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Gt(),d=hi(n),m=Or(c,d);m.payload=s,a!=null&&(m.callback=a),s=ai(n,m,d),s!==null&&(zn(s,n,d,c),uu(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Gt(),d=hi(n),m=Or(c,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=ai(n,m,d),s!==null&&(zn(s,n,d,c),uu(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Gt(),c=hi(n),d=Or(a,c);d.tag=2,s!=null&&(d.callback=s),s=ai(n,d,c),s!==null&&(zn(s,n,c,a),uu(s,n,c))}};function Om(n,s,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):s.prototype&&s.prototype.isPureReactComponent?!ya(a,c)||!ya(d,m):!0}function Vm(n,s,a){var c=!1,d=ii,m=s.contextType;return typeof m=="object"&&m!==null?m=Tn(m):(d=en(s)?ts:bt.current,c=s.contextTypes,m=(c=c!=null)?co(n,d):ii),s=new s(a,m),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=yu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),s}function Lm(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&yu.enqueueReplaceState(s,s.state,null)}function jh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Rh(n);var m=s.contextType;typeof m=="object"&&m!==null?d.context=Tn(m):(m=en(s)?ts:bt.current,d.context=co(n,m)),d.state=n.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Fh(n,s,m,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&yu.enqueueReplaceState(d,d.state,null),cu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function vo(n,s){try{var a="",c=s;do a+=Ae(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:s,stack:d,digest:null}}function Bh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function zh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var BE=typeof WeakMap=="function"?WeakMap:Map;function bm(n,s,a){a=Or(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Su||(Su=!0,rd=c),zh(n,s)},a}function Mm(n,s,a){a=Or(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){zh(n,s)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){zh(n,s),typeof c!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Um(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new BE;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=tT.bind(null,n,s,a),s.then(n,n))}function Fm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function jm(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Or(-1,1),s.tag=2,ai(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var zE=le.ReactCurrentOwner,tn=!1;function qt(n,s,a,c){s.child=n===null?om(s,null,a,c):mo(s,n.child,a,c)}function Bm(n,s,a,c,d){a=a.render;var m=s.ref;return yo(s,d),c=Oh(n,s,a,c,m,d),a=Vh(),n!==null&&!tn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Vr(n,s,d)):(Ye&&a&&gh(s),s.flags|=1,qt(n,s,c,d),s.child)}function zm(n,s,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!cd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,$m(n,s,m,c,d)):(n=Nu(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(v,c)&&n.ref===s.ref)return Vr(n,s,d)}return s.flags|=1,n=fi(m,c),n.ref=s.ref,n.return=s,s.child=n}function $m(n,s,a,c,d){if(n!==null){var m=n.memoizedProps;if(ya(m,c)&&n.ref===s.ref)if(tn=!1,s.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(tn=!0);else return s.lanes=n.lanes,Vr(n,s,d)}return $h(n,s,a,c,d)}function Wm(n,s,a){var c=s.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Eo,fn),fn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,He(Eo,fn),fn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,He(Eo,fn),fn|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,He(Eo,fn),fn|=c;return qt(n,s,d,a),s.child}function Hm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function $h(n,s,a,c,d){var m=en(a)?ts:bt.current;return m=co(s,m),yo(s,d),a=Oh(n,s,a,c,m,d),c=Vh(),n!==null&&!tn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Vr(n,s,d)):(Ye&&c&&gh(s),s.flags|=1,qt(n,s,a,d),s.child)}function qm(n,s,a,c,d){if(en(a)){var m=!0;tu(s)}else m=!1;if(yo(s,d),s.stateNode===null)vu(n,s),Vm(s,a,c),jh(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,A=s.memoizedProps;v.props=A;var k=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=Tn(j):(j=en(a)?ts:bt.current,j=co(s,j));var Q=a.getDerivedStateFromProps,X=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||k!==j)&&Lm(s,v,c,j),oi=!1;var K=s.memoizedState;v.state=K,cu(s,c,v,d),k=s.memoizedState,A!==c||K!==k||Zt.current||oi?(typeof Q=="function"&&(Fh(s,a,Q,c),k=s.memoizedState),(A=oi||Om(s,a,A,c,K,k,j))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=k),v.props=c,v.state=k,v.context=j,c=A):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,lm(n,s),A=s.memoizedProps,j=s.type===s.elementType?A:Fn(s.type,A),v.props=j,X=s.pendingProps,K=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=Tn(k):(k=en(a)?ts:bt.current,k=co(s,k));var ie=a.getDerivedStateFromProps;(Q=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==X||K!==k)&&Lm(s,v,c,k),oi=!1,K=s.memoizedState,v.state=K,cu(s,c,v,d);var ue=s.memoizedState;A!==X||K!==ue||Zt.current||oi?(typeof ie=="function"&&(Fh(s,a,ie,c),ue=s.memoizedState),(j=oi||Om(s,a,j,c,K,ue,k)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,k)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=k,c=j):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),c=!1)}return Wh(n,s,a,c,m,d)}function Wh(n,s,a,c,d,m){Hm(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Yp(s,a,!1),Vr(n,s,m);c=s.stateNode,zE.current=s;var A=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=mo(s,n.child,null,m),s.child=mo(s,null,A,m)):qt(n,s,A,m),s.memoizedState=c.state,d&&Yp(s,a,!0),s.child}function Gm(n){var s=n.stateNode;s.pendingContext?Qp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Qp(n,s.context,!1),Ph(n,s.containerInfo)}function Km(n,s,a,c,d){return po(),wh(d),s.flags|=256,qt(n,s,a,c),s.child}var Hh={dehydrated:null,treeContext:null,retryLane:0};function qh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Qm(n,s,a){var c=s.pendingProps,d=Je.current,m=!1,v=(s.flags&128)!==0,A;if((A=v)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(m=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Je,d&1),n===null)return vh(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=s.mode,m=s.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=xu(v,c,0,null),n=hs(n,c,a,null),m.return=s,n.return=s,m.sibling=n,s.child=m,s.child.memoizedState=qh(a),s.memoizedState=Hh,n):Gh(s,v));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return $E(n,s,v,c,A,d,a);if(m){m=c.fallback,v=s.mode,d=n.child,A=d.sibling;var k={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=k,s.deletions=null):(c=fi(d,k),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?m=fi(A,m):(m=hs(m,v,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,v=n.child.memoizedState,v=v===null?qh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,s.memoizedState=Hh,c}return m=n.child,n=m.sibling,c=fi(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function Gh(n,s){return s=xu({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function _u(n,s,a,c){return c!==null&&wh(c),mo(s,n.child,null,a),n=Gh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function $E(n,s,a,c,d,m,v){if(a)return s.flags&256?(s.flags&=-257,c=Bh(Error(t(422))),_u(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(m=c.fallback,d=s.mode,c=xu({mode:"visible",children:c.children},d,0,null),m=hs(m,d,v,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&mo(s,n.child,null,v),s.child.memoizedState=qh(v),s.memoizedState=Hh,m);if((s.mode&1)===0)return _u(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,m=Error(t(419)),c=Bh(m,c,void 0),_u(n,s,v,c)}if(A=(v&n.childLanes)!==0,tn||A){if(c=St,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Dr(n,d),zn(c,n,d,-1))}return ud(),c=Bh(Error(t(421))),_u(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=nT.bind(null,n),d._reactRetry=s,null):(n=m.treeContext,dn=ni(d.nextSibling),hn=s,Ye=!0,Un=null,n!==null&&(wn[En++]=Nr,wn[En++]=xr,wn[En++]=ns,Nr=n.id,xr=n.overflow,ns=s),s=Gh(s,c.children),s.flags|=4096,s)}function Xm(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),Sh(n.return,s,a)}function Kh(n,s,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Ym(n,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(qt(n,s,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xm(n,a,s);else if(n.tag===19)Xm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Je,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&hu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Kh(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&hu(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Kh(s,!0,a,null,m);break;case"together":Kh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function vu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Vr(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),as|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=fi(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=fi(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function WE(n,s,a){switch(s.tag){case 3:Gm(s),po();break;case 5:hm(s);break;case 1:en(s.type)&&tu(s);break;case 4:Ph(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;He(au,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(He(Je,Je.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Qm(n,s,a):(He(Je,Je.current&1),n=Vr(n,s,a),n!==null?n.sibling:null);He(Je,Je.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return Ym(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Je,Je.current),c)break;return null;case 22:case 23:return s.lanes=0,Wm(n,s,a)}return Vr(n,s,a)}var Jm,Qh,Zm,eg;Jm=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Qh=function(){},Zm=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,ss(nr.current);var m=null;switch(a){case"input":d=Ui(n,d),c=Ui(n,c),m=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),m=[];break;case"textarea":d=qo(n,d),c=qo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Jl)}Jo(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var A=d[j];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?m||(m=[]):(m=m||[]).push(j,null));for(j in c){var k=c[j];if(A=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&k!==A&&(k!=null||A!=null))if(j==="style")if(A){for(v in A)!A.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&A[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(m||(m=[]),m.push(j,a)),a=k;else j==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,A=A?A.__html:void 0,k!=null&&A!==k&&(m=m||[]).push(j,k)):j==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(j,""+k):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(k!=null&&j==="onScroll"&&Ge("scroll",n),m||A===k||(m=[])):(m=m||[]).push(j,k))}a&&(m=m||[]).push("style",a);var j=m;(s.updateQueue=j)&&(s.flags|=4)}},eg=function(n,s,a,c){a!==c&&(s.flags|=4)};function Da(n,s){if(!Ye)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ut(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function HE(n,s,a){var c=s.pendingProps;switch(yh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(s),null;case 1:return en(s.type)&&eu(),Ut(s),null;case 3:return c=s.stateNode,_o(),Ke(Zt),Ke(bt),Nh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(su(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Un!==null&&(od(Un),Un=null))),Qh(n,s),Ut(s),null;case 5:kh(s);var d=ss(Pa.current);if(a=s.type,n!==null&&s.stateNode!=null)Zm(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ut(s),null}if(n=ss(nr.current),su(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[tr]=s,c[Ta]=m,n=(s.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(d=0;d<va.length;d++)Ge(va[d],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":Ds(c,m),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ge("invalid",c);break;case"textarea":Vs(c,m),Ge("invalid",c)}Jo(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var A=m[v];v==="children"?typeof A=="string"?c.textContent!==A&&(m.suppressHydrationWarning!==!0&&Yl(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(m.suppressHydrationWarning!==!0&&Yl(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Ge("scroll",c)}switch(a){case"input":_r(c),Il(c,m,!0);break;case"textarea":_r(c),Go(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Jl)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=mt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[tr]=s,n[Ta]=c,Jm(n,s,!1,!1),s.stateNode=n;e:{switch(v=Zo(a,c),a){case"dialog":Ge("cancel",n),Ge("close",n),d=c;break;case"iframe":case"object":case"embed":Ge("load",n),d=c;break;case"video":case"audio":for(d=0;d<va.length;d++)Ge(va[d],n);d=c;break;case"source":Ge("error",n),d=c;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),d=c;break;case"details":Ge("toggle",n),d=c;break;case"input":Ds(n,c),d=Ui(n,c),Ge("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),Ge("invalid",n);break;case"textarea":Vs(n,c),d=qo(n,c),Ge("invalid",n);break;default:d=c}Jo(a,d),A=d;for(m in A)if(A.hasOwnProperty(m)){var k=A[m];m==="style"?Xo(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ko(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Hr(n,k):typeof k=="number"&&Hr(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ge("scroll",n):k!=null&&ne(n,m,k,v))}switch(a){case"input":_r(n),Il(n,c,!1);break;case"textarea":_r(n),Go(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ue(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?wr(n,!!c.multiple,m,!1):c.defaultValue!=null&&wr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ut(s),null;case 6:if(n&&s.stateNode!=null)eg(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ss(Pa.current),ss(nr.current),su(s)){if(c=s.stateNode,a=s.memoizedProps,c[tr]=s,(m=c.nodeValue!==a)&&(n=hn,n!==null))switch(n.tag){case 3:Yl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Yl(c.nodeValue,a,(n.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[tr]=s,s.stateNode=c}return Ut(s),null;case 13:if(Ke(Je),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&dn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)rm(),po(),s.flags|=98560,m=!1;else if(m=su(s),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[tr]=s}else po(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ut(s),m=!1}else Un!==null&&(od(Un),Un=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(Je.current&1)!==0?vt===0&&(vt=3):ud())),s.updateQueue!==null&&(s.flags|=4),Ut(s),null);case 4:return _o(),Qh(n,s),n===null&&wa(s.stateNode.containerInfo),Ut(s),null;case 10:return Ih(s.type._context),Ut(s),null;case 17:return en(s.type)&&eu(),Ut(s),null;case 19:if(Ke(Je),m=s.memoizedState,m===null)return Ut(s),null;if(c=(s.flags&128)!==0,v=m.rendering,v===null)if(c)Da(m,!1);else{if(vt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(v=hu(n),v!==null){for(s.flags|=128,Da(m,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),s.child}n=n.sibling}m.tail!==null&&We()>To&&(s.flags|=128,c=!0,Da(m,!1),s.lanes=4194304)}else{if(!c)if(n=hu(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Da(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Ye)return Ut(s),null}else 2*We()-m.renderingStartTime>To&&a!==1073741824&&(s.flags|=128,c=!0,Da(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(a=m.last,a!==null?a.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=We(),s.sibling=null,a=Je.current,He(Je,c?a&1|2:a&1),s):(Ut(s),null);case 22:case 23:return ld(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(fn&1073741824)!==0&&(Ut(s),s.subtreeFlags&6&&(s.flags|=8192)):Ut(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function qE(n,s){switch(yh(s),s.tag){case 1:return en(s.type)&&eu(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return _o(),Ke(Zt),Ke(bt),Nh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return kh(s),null;case 13:if(Ke(Je),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));po()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Ke(Je),null;case 4:return _o(),null;case 10:return Ih(s.type._context),null;case 22:case 23:return ld(),null;case 24:return null;default:return null}}var wu=!1,Ft=!1,GE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function wo(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,s,c)}else a.current=null}function Xh(n,s,a){try{a()}catch(c){tt(n,s,c)}}var tg=!1;function KE(n,s){if(lh=Zr,n=Op(),eh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,A=-1,k=-1,j=0,Q=0,X=n,K=null;t:for(;;){for(var ie;X!==a||d!==0&&X.nodeType!==3||(A=v+d),X!==m||c!==0&&X.nodeType!==3||(k=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(ie=X.firstChild)!==null;)K=X,X=ie;for(;;){if(X===n)break t;if(K===a&&++j===d&&(A=v),K===m&&++Q===c&&(k=v),(ie=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=ie}a=A===-1||k===-1?null:{start:A,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(uh={focusedElem:n,selectionRange:a},Zr=!1,ae=s;ae!==null;)if(s=ae,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,ae=n;else for(;ae!==null;){s=ae;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,ot=ue.memoizedState,b=s.stateNode,x=b.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Fn(s.type,ce),ot);b.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){tt(s,s.return,Y)}if(n=s.sibling,n!==null){n.return=s.return,ae=n;break}ae=s.return}return ue=tg,tg=!1,ue}function Oa(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Xh(s,a,m)}d=d.next}while(d!==c)}}function Eu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Yh(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function ng(n){var s=n.alternate;s!==null&&(n.alternate=null,ng(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[tr],delete s[Ta],delete s[fh],delete s[NE],delete s[xE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rg(n){return n.tag===5||n.tag===3||n.tag===4}function ig(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Jh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Jl));else if(c!==4&&(n=n.child,n!==null))for(Jh(n,s,a),n=n.sibling;n!==null;)Jh(n,s,a),n=n.sibling}function Zh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Zh(n,s,a),n=n.sibling;n!==null;)Zh(n,s,a),n=n.sibling}var Ct=null,jn=!1;function li(n,s,a){for(a=a.child;a!==null;)sg(n,s,a),a=a.sibling}function sg(n,s,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Gi,a)}catch{}switch(a.tag){case 5:Ft||wo(a,s);case 6:var c=Ct,d=jn;Ct=null,li(n,s,a),Ct=c,jn=d,Ct!==null&&(jn?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(jn?(n=Ct,a=a.stateNode,n.nodeType===8?dh(n.parentNode,a):n.nodeType===1&&dh(n,a),Ln(n)):dh(Ct,a.stateNode));break;case 4:c=Ct,d=jn,Ct=a.stateNode.containerInfo,jn=!0,li(n,s,a),Ct=c,jn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&Xh(a,s,v),d=d.next}while(d!==c)}li(n,s,a);break;case 1:if(!Ft&&(wo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){tt(a,s,A)}li(n,s,a);break;case 21:li(n,s,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,li(n,s,a),Ft=c):li(n,s,a);break;default:li(n,s,a)}}function og(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new GE),s.forEach(function(c){var d=rT.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Bn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 5:Ct=A.stateNode,jn=!1;break e;case 3:Ct=A.stateNode.containerInfo,jn=!0;break e;case 4:Ct=A.stateNode.containerInfo,jn=!0;break e}A=A.return}if(Ct===null)throw Error(t(160));sg(m,v,d),Ct=null,jn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(j){tt(d,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ag(s,n),s=s.sibling}function ag(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Bn(s,n),ir(n),c&4){try{Oa(3,n,n.return),Eu(3,n)}catch(ce){tt(n,n.return,ce)}try{Oa(5,n,n.return)}catch(ce){tt(n,n.return,ce)}}break;case 1:Bn(s,n),ir(n),c&512&&a!==null&&wo(a,a.return);break;case 5:if(Bn(s,n),ir(n),c&512&&a!==null&&wo(a,a.return),n.flags&32){var d=n.stateNode;try{Hr(d,"")}catch(ce){tt(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,A=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{A==="input"&&m.type==="radio"&&m.name!=null&&Wo(d,m),Zo(A,v);var j=Zo(A,m);for(v=0;v<k.length;v+=2){var Q=k[v],X=k[v+1];Q==="style"?Xo(d,X):Q==="dangerouslySetInnerHTML"?Ko(d,X):Q==="children"?Hr(d,X):ne(d,Q,X,j)}switch(A){case"input":Ho(d,m);break;case"textarea":Ls(d,m);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ie=m.value;ie!=null?wr(d,!!m.multiple,ie,!1):K!==!!m.multiple&&(m.defaultValue!=null?wr(d,!!m.multiple,m.defaultValue,!0):wr(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ta]=m}catch(ce){tt(n,n.return,ce)}}break;case 6:if(Bn(s,n),ir(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ce){tt(n,n.return,ce)}}break;case 3:if(Bn(s,n),ir(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(s.containerInfo)}catch(ce){tt(n,n.return,ce)}break;case 4:Bn(s,n),ir(n);break;case 13:Bn(s,n),ir(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(nd=We())),c&4&&og(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Ft=(j=Ft)||Q,Bn(s,n),Ft=j):Bn(s,n),ir(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!Q&&(n.mode&1)!==0)for(ae=n,Q=n.child;Q!==null;){for(X=ae=Q;ae!==null;){switch(K=ae,ie=K.child,K.tag){case 0:case 11:case 14:case 15:Oa(4,K,K.return);break;case 1:wo(K,K.return);var ue=K.stateNode;if(typeof ue.componentWillUnmount=="function"){c=K,a=K.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){tt(c,a,ce)}}break;case 5:wo(K,K.return);break;case 22:if(K.memoizedState!==null){cg(X);continue}}ie!==null?(ie.return=K,ae=ie):cg(X)}Q=Q.sibling}e:for(Q=null,X=n;;){if(X.tag===5){if(Q===null){Q=X;try{d=X.stateNode,j?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(A=X.stateNode,k=X.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,A.style.display=Qo("display",v))}catch(ce){tt(n,n.return,ce)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=j?"":X.memoizedProps}catch(ce){tt(n,n.return,ce)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Bn(s,n),ir(n),c&4&&og(n);break;case 21:break;default:Bn(s,n),ir(n)}}function ir(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(rg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Hr(d,""),c.flags&=-33);var m=ig(n);Zh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,A=ig(n);Jh(n,A,v);break;default:throw Error(t(161))}}catch(k){tt(n,n.return,k)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function QE(n,s,a){ae=n,lg(n)}function lg(n,s,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||wu;if(!v){var A=d.alternate,k=A!==null&&A.memoizedState!==null||Ft;A=wu;var j=Ft;if(wu=v,(Ft=k)&&!j)for(ae=d;ae!==null;)v=ae,k=v.child,v.tag===22&&v.memoizedState!==null?hg(d):k!==null?(k.return=v,ae=k):hg(d);for(;m!==null;)ae=m,lg(m),m=m.sibling;ae=d,wu=A,Ft=j}ug(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ae=m):ug(n)}}function ug(n){for(;ae!==null;){var s=ae;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ft||Eu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Fn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&cm(s,m,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}cm(s,v,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var Q=j.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&Ln(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&Yh(s)}catch(K){tt(s,s.return,K)}}if(s===n){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function cg(n){for(;ae!==null;){var s=ae;if(s===n){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function hg(n){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Eu(4,s)}catch(k){tt(s,a,k)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(k){tt(s,d,k)}}var m=s.return;try{Yh(s)}catch(k){tt(s,m,k)}break;case 5:var v=s.return;try{Yh(s)}catch(k){tt(s,v,k)}}}catch(k){tt(s,s.return,k)}if(s===n){ae=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ae=A;break}ae=s.return}}var XE=Math.ceil,Tu=le.ReactCurrentDispatcher,ed=le.ReactCurrentOwner,Sn=le.ReactCurrentBatchConfig,Le=0,St=null,ht=null,Nt=0,fn=0,Eo=ri(0),vt=0,Va=null,as=0,Iu=0,td=0,La=null,nn=null,nd=0,To=1/0,Lr=null,Su=!1,rd=null,ui=null,Au=!1,ci=null,Ru=0,ba=0,id=null,Pu=-1,ku=0;function Gt(){return(Le&6)!==0?We():Pu!==-1?Pu:Pu=We()}function hi(n){return(n.mode&1)===0?1:(Le&2)!==0&&Nt!==0?Nt&-Nt:OE.transition!==null?(ku===0&&(ku=Qi()),ku):(n=xe,n!==0||(n=window.event,n=n===void 0?16:ca(n.type)),n)}function zn(n,s,a,c){if(50<ba)throw ba=0,id=null,Error(t(185));Qr(n,a,c),((Le&2)===0||n!==St)&&(n===St&&((Le&2)===0&&(Iu|=a),vt===4&&di(n,Nt)),rn(n,c),a===1&&Le===0&&(s.mode&1)===0&&(To=We()+500,nu&&si()))}function rn(n,s){var a=n.callbackNode;Ir(n,s);var c=Ki(n,n===St?Nt:0);if(c===0)a!==null&&sa(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&sa(a),s===1)n.tag===0?DE(fg.bind(null,n)):Jp(fg.bind(null,n)),kE(function(){(Le&6)===0&&si()}),a=null;else{switch(Yr(c)){case 1:a=qi;break;case 4:a=qr;break;case 16:a=yn;break;case 536870912:a=kl;break;default:a=yn}a=Eg(a,dg.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function dg(n,s){if(Pu=-1,ku=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Io()&&n.callbackNode!==a)return null;var c=Ki(n,n===St?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=Cu(n,c);else{s=c;var d=Le;Le|=2;var m=mg();(St!==n||Nt!==s)&&(Lr=null,To=We()+500,us(n,s));do try{ZE();break}catch(A){pg(n,A)}while(!0);Th(),Tu.current=m,Le=d,ht!==null?s=0:(St=null,Nt=0,s=vt)}if(s!==0){if(s===2&&(d=ln(n),d!==0&&(c=d,s=sd(n,d))),s===1)throw a=Va,us(n,0),di(n,c),rn(n,We()),a;if(s===6)di(n,c);else{if(d=n.current.alternate,(c&30)===0&&!YE(d)&&(s=Cu(n,c),s===2&&(m=ln(n),m!==0&&(c=m,s=sd(n,m))),s===1))throw a=Va,us(n,0),di(n,c),rn(n,We()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:cs(n,nn,Lr);break;case 3:if(di(n,c),(c&130023424)===c&&(s=nd+500-We(),10<s)){if(Ki(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Gt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=hh(cs.bind(null,n,nn,Lr),s);break}cs(n,nn,Lr);break;case 4:if(di(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-Wt(c);m=1<<v,v=s[v],v>d&&(d=v),c&=~m}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*XE(c/1960))-c,10<c){n.timeoutHandle=hh(cs.bind(null,n,nn,Lr),c);break}cs(n,nn,Lr);break;case 5:cs(n,nn,Lr);break;default:throw Error(t(329))}}}return rn(n,We()),n.callbackNode===a?dg.bind(null,n):null}function sd(n,s){var a=La;return n.current.memoizedState.isDehydrated&&(us(n,s).flags|=256),n=Cu(n,s),n!==2&&(s=nn,nn=a,s!==null&&od(s)),n}function od(n){nn===null?nn=n:nn.push.apply(nn,n)}function YE(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Mn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function di(n,s){for(s&=~td,s&=~Iu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-Wt(s),c=1<<a;n[a]=-1,s&=~c}}function fg(n){if((Le&6)!==0)throw Error(t(327));Io();var s=Ki(n,0);if((s&1)===0)return rn(n,We()),null;var a=Cu(n,s);if(n.tag!==0&&a===2){var c=ln(n);c!==0&&(s=c,a=sd(n,c))}if(a===1)throw a=Va,us(n,0),di(n,s),rn(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,cs(n,nn,Lr),rn(n,We()),null}function ad(n,s){var a=Le;Le|=1;try{return n(s)}finally{Le=a,Le===0&&(To=We()+500,nu&&si())}}function ls(n){ci!==null&&ci.tag===0&&(Le&6)===0&&Io();var s=Le;Le|=1;var a=Sn.transition,c=xe;try{if(Sn.transition=null,xe=1,n)return n()}finally{xe=c,Sn.transition=a,Le=s,(Le&6)===0&&si()}}function ld(){fn=Eo.current,Ke(Eo)}function us(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,PE(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(yh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&eu();break;case 3:_o(),Ke(Zt),Ke(bt),Nh();break;case 5:kh(c);break;case 4:_o();break;case 13:Ke(Je);break;case 19:Ke(Je);break;case 10:Ih(c.type._context);break;case 22:case 23:ld()}a=a.return}if(St=n,ht=n=fi(n.current,null),Nt=fn=s,vt=0,Va=null,td=Iu=as=0,nn=La=null,is!==null){for(s=0;s<is.length;s++)if(a=is[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}is=null}return n}function pg(n,s){do{var a=ht;try{if(Th(),du.current=gu,fu){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}fu=!1}if(os=0,It=_t=Ze=null,ka=!1,Ca=0,ed.current=null,a===null||a.return===null){vt=1,Va=s,ht=null;break}e:{var m=n,v=a.return,A=a,k=s;if(s=Nt,A.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var j=k,Q=A,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ie=Fm(v);if(ie!==null){ie.flags&=-257,jm(ie,v,A,m,s),ie.mode&1&&Um(m,j,s),s=ie,k=j;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(k),s.updateQueue=ce}else ue.add(k);break e}else{if((s&1)===0){Um(m,j,s),ud();break e}k=Error(t(426))}}else if(Ye&&A.mode&1){var ot=Fm(v);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),jm(ot,v,A,m,s),wh(vo(k,A));break e}}m=k=vo(k,A),vt!==4&&(vt=2),La===null?La=[m]:La.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var b=bm(m,k,s);um(m,b);break e;case 1:A=k;var x=m.type,F=m.stateNode;if((m.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ui===null||!ui.has(F)))){m.flags|=65536,s&=-s,m.lanes|=s;var Y=Mm(m,A,s);um(m,Y);break e}}m=m.return}while(m!==null)}yg(a)}catch(he){s=he,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function mg(){var n=Tu.current;return Tu.current=gu,n===null?gu:n}function ud(){(vt===0||vt===3||vt===2)&&(vt=4),St===null||(as&268435455)===0&&(Iu&268435455)===0||di(St,Nt)}function Cu(n,s){var a=Le;Le|=2;var c=mg();(St!==n||Nt!==s)&&(Lr=null,us(n,s));do try{JE();break}catch(d){pg(n,d)}while(!0);if(Th(),Le=a,Tu.current=c,ht!==null)throw Error(t(261));return St=null,Nt=0,vt}function JE(){for(;ht!==null;)gg(ht)}function ZE(){for(;ht!==null&&!Rl();)gg(ht)}function gg(n){var s=wg(n.alternate,n,fn);n.memoizedProps=n.pendingProps,s===null?yg(n):ht=s,ed.current=null}function yg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=HE(a,s,fn),a!==null){ht=a;return}}else{if(a=qE(a,s),a!==null){a.flags&=32767,ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vt=6,ht=null;return}}if(s=s.sibling,s!==null){ht=s;return}ht=s=n}while(s!==null);vt===0&&(vt=5)}function cs(n,s,a){var c=xe,d=Sn.transition;try{Sn.transition=null,xe=1,eT(n,s,a,c)}finally{Sn.transition=d,xe=c}return null}function eT(n,s,a,c){do Io();while(ci!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(ze(n,m),n===St&&(ht=St=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Au||(Au=!0,Eg(yn,function(){return Io(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Sn.transition,Sn.transition=null;var v=xe;xe=1;var A=Le;Le|=4,ed.current=null,KE(n,a),ag(a,n),wE(uh),Zr=!!lh,uh=lh=null,n.current=a,QE(a),qc(),Le=A,xe=v,Sn.transition=m}else n.current=a;if(Au&&(Au=!1,ci=n,Ru=d),m=n.pendingLanes,m===0&&(ui=null),Cl(a.stateNode),rn(n,We()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Su)throw Su=!1,n=rd,rd=null,n;return(Ru&1)!==0&&n.tag!==0&&Io(),m=n.pendingLanes,(m&1)!==0?n===id?ba++:(ba=0,id=n):ba=0,si(),null}function Io(){if(ci!==null){var n=Yr(Ru),s=Sn.transition,a=xe;try{if(Sn.transition=null,xe=16>n?16:n,ci===null)var c=!1;else{if(n=ci,ci=null,Ru=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ae=n.current;ae!==null;){var m=ae,v=m.child;if((ae.flags&16)!==0){var A=m.deletions;if(A!==null){for(var k=0;k<A.length;k++){var j=A[k];for(ae=j;ae!==null;){var Q=ae;switch(Q.tag){case 0:case 11:case 15:Oa(8,Q,m)}var X=Q.child;if(X!==null)X.return=Q,ae=X;else for(;ae!==null;){Q=ae;var K=Q.sibling,ie=Q.return;if(ng(Q),Q===j){ae=null;break}if(K!==null){K.return=ie,ae=K;break}ae=ie}}}var ue=m.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var ot=ce.sibling;ce.sibling=null,ce=ot}while(ce!==null)}}ae=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,ae=v;else e:for(;ae!==null;){if(m=ae,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Oa(9,m,m.return)}var b=m.sibling;if(b!==null){b.return=m.return,ae=b;break e}ae=m.return}}var x=n.current;for(ae=x;ae!==null;){v=ae;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,ae=F;else e:for(v=x;ae!==null;){if(A=ae,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Eu(9,A)}}catch(he){tt(A,A.return,he)}if(A===v){ae=null;break e}var Y=A.sibling;if(Y!==null){Y.return=A.return,ae=Y;break e}ae=A.return}}if(Le=d,si(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Gi,n)}catch{}c=!0}return c}finally{xe=a,Sn.transition=s}}return!1}function _g(n,s,a){s=vo(a,s),s=bm(n,s,1),n=ai(n,s,1),s=Gt(),n!==null&&(Qr(n,1,s),rn(n,s))}function tt(n,s,a){if(n.tag===3)_g(n,n,a);else for(;s!==null;){if(s.tag===3){_g(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ui===null||!ui.has(c))){n=vo(a,n),n=Mm(s,n,1),s=ai(s,n,1),n=Gt(),s!==null&&(Qr(s,1,n),rn(s,n));break}}s=s.return}}function tT(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Gt(),n.pingedLanes|=n.suspendedLanes&a,St===n&&(Nt&a)===a&&(vt===4||vt===3&&(Nt&130023424)===Nt&&500>We()-nd?us(n,0):td|=a),rn(n,s)}function vg(n,s){s===0&&((n.mode&1)===0?s=1:(s=Hs,Hs<<=1,(Hs&130023424)===0&&(Hs=4194304)));var a=Gt();n=Dr(n,s),n!==null&&(Qr(n,s,a),rn(n,a))}function nT(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),vg(n,a)}function rT(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),vg(n,a)}var wg;wg=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Zt.current)tn=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return tn=!1,WE(n,s,a);tn=(n.flags&131072)!==0}else tn=!1,Ye&&(s.flags&1048576)!==0&&Zp(s,iu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;vu(n,s),n=s.pendingProps;var d=co(s,bt.current);yo(s,a),d=Oh(null,s,c,n,d,a);var m=Vh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,en(c)?(m=!0,tu(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Rh(s),d.updater=yu,s.stateNode=d,d._reactInternals=s,jh(s,c,n,a),s=Wh(null,s,c,!0,m,a)):(s.tag=0,Ye&&m&&gh(s),qt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(vu(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=sT(c),n=Fn(c,n),d){case 0:s=$h(null,s,c,n,a);break e;case 1:s=qm(null,s,c,n,a);break e;case 11:s=Bm(null,s,c,n,a);break e;case 14:s=zm(null,s,c,Fn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),$h(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),qm(n,s,c,d,a);case 3:e:{if(Gm(s),n===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,d=m.element,lm(n,s),cu(s,c,null,a);var v=s.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=vo(Error(t(423)),s),s=Km(n,s,c,a,d);break e}else if(c!==d){d=vo(Error(t(424)),s),s=Km(n,s,c,a,d);break e}else for(dn=ni(s.stateNode.containerInfo.firstChild),hn=s,Ye=!0,Un=null,a=om(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(po(),c===d){s=Vr(n,s,a);break e}qt(n,s,c,a)}s=s.child}return s;case 5:return hm(s),n===null&&vh(s),c=s.type,d=s.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,ch(c,d)?v=null:m!==null&&ch(c,m)&&(s.flags|=32),Hm(n,s),qt(n,s,v,a),s.child;case 6:return n===null&&vh(s),null;case 13:return Qm(n,s,a);case 4:return Ph(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=mo(s,null,c,a):qt(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Bm(n,s,c,d,a);case 7:return qt(n,s,s.pendingProps,a),s.child;case 8:return qt(n,s,s.pendingProps.children,a),s.child;case 12:return qt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,m=s.memoizedProps,v=d.value,He(au,c._currentValue),c._currentValue=v,m!==null)if(Mn(m.value,v)){if(m.children===d.children&&!Zt.current){s=Vr(n,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var A=m.dependencies;if(A!==null){v=m.child;for(var k=A.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=Or(-1,a&-a),k.tag=2;var j=m.updateQueue;if(j!==null){j=j.shared;var Q=j.pending;Q===null?k.next=k:(k.next=Q.next,Q.next=k),j.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Sh(m.return,a,s),A.lanes|=a;break}k=k.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),Sh(v,a,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}qt(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,yo(s,a),d=Tn(d),c=c(d),s.flags|=1,qt(n,s,c,a),s.child;case 14:return c=s.type,d=Fn(c,s.pendingProps),d=Fn(c.type,d),zm(n,s,c,d,a);case 15:return $m(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),vu(n,s),s.tag=1,en(c)?(n=!0,tu(s)):n=!1,yo(s,a),Vm(s,c,d),jh(s,c,d,a),Wh(null,s,c,!0,n,a);case 19:return Ym(n,s,a);case 22:return Wm(n,s,a)}throw Error(t(156,s.tag))};function Eg(n,s){return $s(n,s)}function iT(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(n,s,a,c){return new iT(n,s,a,c)}function cd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function sT(n){if(typeof n=="function")return cd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===Vt)return 14}return 2}function fi(n,s){var a=n.alternate;return a===null?(a=An(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Nu(n,s,a,c,d,m){var v=2;if(c=n,typeof n=="function")cd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case C:return hs(a.children,d,m,s);case S:v=8,d|=8;break;case R:return n=An(12,a,s,d|2),n.elementType=R,n.lanes=m,n;case P:return n=An(13,a,s,d),n.elementType=P,n.lanes=m,n;case it:return n=An(19,a,s,d),n.elementType=it,n.lanes=m,n;case Be:return xu(a,d,m,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:v=10;break e;case D:v=9;break e;case V:v=11;break e;case Vt:v=14;break e;case Lt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=An(v,a,s,d),s.elementType=n,s.type=c,s.lanes=m,s}function hs(n,s,a,c){return n=An(7,n,c,s),n.lanes=a,n}function xu(n,s,a,c){return n=An(22,n,c,s),n.elementType=Be,n.lanes=a,n.stateNode={isHidden:!1},n}function hd(n,s,a){return n=An(6,n,null,s),n.lanes=a,n}function dd(n,s,a){return s=An(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function oT(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function fd(n,s,a,c,d,m,v,A,k){return n=new oT(n,s,a,A,k),s===1?(s=1,m===!0&&(s|=8)):s=0,m=An(3,null,null,s),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rh(m),n}function aT(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function Tg(n){if(!n)return ii;n=n._reactInternals;e:{if(Nn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(en(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(en(a))return Xp(n,a,s)}return s}function Ig(n,s,a,c,d,m,v,A,k){return n=fd(a,c,!0,n,d,m,v,A,k),n.context=Tg(null),a=n.current,c=Gt(),d=hi(a),m=Or(c,d),m.callback=s??null,ai(a,m,d),n.current.lanes=d,Qr(n,d,c),rn(n,c),n}function Du(n,s,a,c){var d=s.current,m=Gt(),v=hi(d);return a=Tg(a),s.context===null?s.context=a:s.pendingContext=a,s=Or(m,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=ai(d,s,v),n!==null&&(zn(n,d,v,m),uu(n,d,v)),v}function Ou(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Sg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function pd(n,s){Sg(n,s),(n=n.alternate)&&Sg(n,s)}function lT(){return null}var Ag=typeof reportError=="function"?reportError:function(n){console.error(n)};function md(n){this._internalRoot=n}Vu.prototype.render=md.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Du(n,s,null,null)},Vu.prototype.unmount=md.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ls(function(){Du(null,n,null,null)}),s[kr]=null}};function Vu(n){this._internalRoot=n}Vu.prototype.unstable_scheduleHydration=function(n){if(n){var s=Vl();n={blockedOn:null,target:n,priority:s};for(var a=0;a<Yn.length&&s!==0&&s<Yn[a].priority;a++);Yn.splice(a,0,n),a===0&&Ml(n)}};function gd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Lu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Rg(){}function uT(n,s,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var j=Ou(v);m.call(j)}}var v=Ig(s,c,n,0,null,!1,!1,"",Rg);return n._reactRootContainer=v,n[kr]=v.current,wa(n.nodeType===8?n.parentNode:n),ls(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var j=Ou(k);A.call(j)}}var k=fd(n,0,!1,null,null,!1,!1,"",Rg);return n._reactRootContainer=k,n[kr]=k.current,wa(n.nodeType===8?n.parentNode:n),ls(function(){Du(s,k,a,c)}),k}function bu(n,s,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var A=d;d=function(){var k=Ou(v);A.call(k)}}Du(s,v,n,d)}else v=uT(a,s,n,d,c);return Ou(v)}Dl=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=Gr(s.pendingLanes);a!==0&&(Xr(s,a|1),rn(s,We()),(Le&6)===0&&(To=We()+500,si()))}break;case 13:ls(function(){var c=Dr(n,1);if(c!==null){var d=Gt();zn(c,n,1,d)}}),pd(n,1)}},qs=function(n){if(n.tag===13){var s=Dr(n,134217728);if(s!==null){var a=Gt();zn(s,n,134217728,a)}pd(n,134217728)}},Ol=function(n){if(n.tag===13){var s=hi(n),a=Dr(n,s);if(a!==null){var c=Gt();zn(a,n,s,c)}pd(n,s)}},Vl=function(){return xe},Ll=function(n,s){var a=xe;try{return xe=n,s()}finally{xe=a}},Ms=function(n,s,a){switch(s){case"input":if(Ho(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=Zl(c);if(!d)throw Error(t(90));xs(c),Ho(c,d)}}}break;case"textarea":Ls(n,a);break;case"select":s=a.value,s!=null&&wr(n,!!a.multiple,s,!1)}},zi=ad,ta=ls;var cT={usingClientEntryPoint:!1,Events:[Ia,lo,Zl,Qn,ea,ad]},Ma={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hT={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ia(n),n===null?null:n.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||lT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Gi=Mu.inject(hT),an=Mu}catch{}}return sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cT,sn.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gd(s))throw Error(t(200));return aT(n,s,null,a)},sn.createRoot=function(n,s){if(!gd(n))throw Error(t(299));var a=!1,c="",d=Ag;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=fd(n,1,!1,null,null,a,!1,c,d),n[kr]=s.current,wa(n.nodeType===8?n.parentNode:n),new md(s)},sn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ia(s),n=n===null?null:n.stateNode,n},sn.flushSync=function(n){return ls(n)},sn.hydrate=function(n,s,a){if(!Lu(s))throw Error(t(200));return bu(null,n,s,!0,a)},sn.hydrateRoot=function(n,s,a){if(!gd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Ag;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Ig(s,null,n,1,a??null,d,!1,m,v),n[kr]=s.current,wa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Vu(s)},sn.render=function(n,s,a){if(!Lu(s))throw Error(t(200));return bu(null,n,s,!1,a)},sn.unmountComponentAtNode=function(n){if(!Lu(n))throw Error(t(40));return n._reactRootContainer?(ls(function(){bu(null,null,n,!1,function(){n._reactRootContainer=null,n[kr]=null})}),!0):!1},sn.unstable_batchedUpdates=ad,sn.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Lu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return bu(n,s,a,!1,c)},sn.version="18.3.1-next-f1338f8080-20240426",sn}var v_;function Kk(){if(v_)return Dd.exports;v_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Dd.exports=Gk(),Dd.exports}var w_;function Qk(){if(w_)return qu;w_=1;var r=Kk();return qu.createRoot=r.createRoot,qu.hydrateRoot=r.hydrateRoot,qu}var Xk=Qk();function Yk({onStart:r}){return U.jsxs("main",{className:"page",children:[U.jsxs("section",{className:"hero",children:[U.jsx("p",{className:"badge",children:"AI Workout Accountability"}),U.jsx("h1",{children:"Your AI coach that helps you actually work out."}),U.jsx("p",{className:"subtitle",children:"CoachPulse combines simple workouts, streak tracking, daily check-ins, and supportive AI coaching to help you stay consistent."}),U.jsx("button",{className:"primary",onClick:r,children:"Start Free Beta"})]}),U.jsxs("section",{className:"cards",children:[U.jsxs("div",{className:"card",children:[U.jsx("h2",{children:"Daily check-ins"}),U.jsx("p",{children:"Tell CoachPulse whether you completed, partly completed, or missed your workout."})]}),U.jsxs("div",{className:"card",children:[U.jsx("h2",{children:"Streak tracking"}),U.jsx("p",{children:"Build consistency with a simple streak and monthly progress view."})]}),U.jsxs("div",{className:"card",children:[U.jsx("h2",{children:"AI accountability"}),U.jsx("p",{children:"Get supportive coaching when you feel tired, busy, or unmotivated."})]})]})]})}function Jk(){const[r,e]=Pe.useState(null),[t,i]=Pe.useState([]),[o,l]=Pe.useState(""),[h,f]=Pe.useState(""),[g,_]=Pe.useState("");async function w(){const I=Xt.currentUser;if(!I)return;const M=fy(m_,`users/${I.uid}/progressPhotos`),$=await R1(M),H=await Promise.all($.items.map(z=>P1(z)));i(H)}Pe.useEffect(()=>{w()},[]);async function T(){const I=Xt.currentUser;if(!I||!r)return;const M=fy(m_,`users/${I.uid}/progressPhotos/${Date.now()}-${r.name}`);await A1(M,r),_("Photo uploaded!"),e(null),w()}return U.jsxs("section",{className:"panel",children:[U.jsx("h2",{children:"Progress Photos"}),U.jsx("input",{type:"file",accept:"image/*",onChange:I=>e(I.target.files[0])}),U.jsx("button",{onClick:T,children:"Upload Photo"}),g&&U.jsx("p",{children:g}),t.length>=2&&U.jsxs("div",{style:{marginTop:"20px"},children:[U.jsx("h3",{children:"Before & After Comparison"}),U.jsxs("select",{value:o,onChange:I=>l(I.target.value),children:[U.jsx("option",{value:"",children:"Choose before photo"}),t.map((I,M)=>U.jsxs("option",{value:I,children:["Photo ",M+1]},I))]}),U.jsxs("select",{value:h,onChange:I=>f(I.target.value),children:[U.jsx("option",{value:"",children:"Choose after photo"}),t.map((I,M)=>U.jsxs("option",{value:I,children:["Photo ",M+1]},I))]}),o&&h&&U.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginTop:"16px"},children:[U.jsxs("div",{children:[U.jsx("h4",{children:"Before"}),U.jsx("img",{src:o,alt:"Before progress",style:{width:"100%",borderRadius:"16px"}})]}),U.jsxs("div",{children:[U.jsx("h4",{children:"After"}),U.jsx("img",{src:h,alt:"After progress",style:{width:"100%",borderRadius:"16px"}})]})]})]}),U.jsx("h3",{style:{marginTop:"20px"},children:"Photo Timeline"}),U.jsx("div",{style:{display:"grid",gap:"12px",marginTop:"16px"},children:t.map(I=>U.jsx("img",{src:I,alt:"Progress",style:{width:"100%",borderRadius:"16px"}},I))})]})}function Zk({currentWeight:r,goalWeight:e,streak:t,completedWorkouts:i}){const[o,l]=Pe.useState(""),[h,f]=Pe.useState(!1);async function g(){f(!0);try{const w=await(await fetch("/api/progress-analysis",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentWeight:r,goalWeight:e,streak:t,completedWorkouts:i})})).json();l(w.analysis||w.error||"Could not analyze progress.")}catch{l("Could not connect to analysis service.")}f(!1)}return U.jsxs("section",{className:"panel",children:[U.jsx("h2",{children:"AI Progress Analysis"}),U.jsx("button",{onClick:g,children:h?"Analyzing...":"Analyze My Progress"}),o&&U.jsx("div",{style:{marginTop:"16px",whiteSpace:"pre-wrap"},children:o})]})}function eC(){const[r,e]=Pe.useState(""),[t,i]=Pe.useState(""),[o,l]=Pe.useState([]),[h,f]=Pe.useState(null),[g,_]=Pe.useState("");async function w(){const J=Xt.currentUser;if(!J)return;const te=fr(mn,"users",J.uid,"profile","weight"),ne=await Ic(te);ne.exists()&&(e(ne.data().currentWeight||""),i(ne.data().goalWeight||""));const le=Ec(mn,"users",J.uid,"weightHistory"),ke=rE(le,iE("date","desc")),C=(await aE(ke)).docs.map(S=>({id:S.id,...S.data()}));if(l(C),C.length>0){const S=Number(C[0].weight),R=Number(C[C.length-1].weight),N=S-R;f({starting:R,current:S,change:N})}}Pe.useEffect(()=>{w()},[]);async function T(){const J=Xt.currentUser;if(!J)return;const te=new Date,ne=te.toISOString().split("T")[0],le=`${ne}-${te.getTime()}`;await cl(fr(mn,"users",J.uid,"profile","weight"),{currentWeight:r,goalWeight:t,updatedAt:hl()}),await cl(fr(mn,"users",J.uid,"weightHistory",le),{weight:r,goalWeight:t,date:ne,createdAt:hl()}),_("Weight saved!"),w()}const I=[...o].reverse(),M=I.map(J=>Number(J.weight)),$=Math.max(...M,1),H=Math.min(...M,$);let z=null;if(I.length>=2&&t){const J=Number(I[0].weight),te=Number(I[I.length-1].weight),ne=Number(t),le=J-te,ke=te-ne;if(ke>0){const ve=Math.max(I.length-1,1),C=le>0?le/ve:.5,S=Math.ceil(ke/C),R=new Date;R.setDate(R.getDate()+S*7),z={lossPerWeek:C.toFixed(2),weeksToGoal:S,date:R.toLocaleDateString()}}}return U.jsxs("section",{className:"panel",children:[U.jsx("h2",{children:"Weight Tracking"}),U.jsx("input",{type:"number",placeholder:"Current weight (kg)",value:r,onChange:J=>e(J.target.value)}),U.jsx("input",{type:"number",placeholder:"Goal weight (kg)",value:t,onChange:J=>i(J.target.value)}),U.jsx("button",{onClick:T,children:"Save Weight"}),g&&U.jsx("p",{children:g}),h&&U.jsxs("div",{style:{marginTop:"16px"},children:[U.jsx("h3",{children:"Weight Progress"}),U.jsxs("p",{children:["Starting weight: ",h.starting,"kg"]}),U.jsxs("p",{children:["Current weight: ",h.current,"kg"]}),U.jsxs("p",{children:["Progress: ",h.change>0?"+":"",h.change,"kg"]})]}),I.length>1&&U.jsxs("div",{style:{marginTop:"20px"},children:[U.jsx("h3",{children:"Progress Chart"}),U.jsx("div",{style:{display:"flex",alignItems:"end",gap:"8px",height:"160px",padding:"12px",background:"#f7f4ff",borderRadius:"16px"},children:I.map(J=>{const te=Number(J.weight),ne=$===H?80:40+(te-H)/($-H)*100;return U.jsxs("div",{style:{flex:1,textAlign:"center"},children:[U.jsx("div",{title:`${J.date}: ${J.weight}kg`,style:{height:`${ne}px`,background:"#7c3aed",borderRadius:"999px 999px 0 0"}}),U.jsxs("small",{children:[J.weight,"kg"]})]},J.id)})})]}),z&&U.jsxs("div",{style:{marginTop:"20px"},children:[U.jsx("h3",{children:"Goal Date Prediction"}),U.jsxs("p",{children:["Current pace: ",z.lossPerWeek,"kg/week"]}),U.jsxs("p",{children:["Estimated time to goal: ",z.weeksToGoal," weeks"]}),U.jsxs("p",{children:["Estimated goal date: ",z.date]})]}),U.jsx("h3",{children:"Weight History"}),o.length===0?U.jsx("p",{children:"No weight entries yet."}):U.jsx("div",{children:o.map(J=>U.jsxs("div",{style:{marginBottom:"8px"},children:[J.date,": ",J.weight,"kg"]},J.id))})]})}function tC({goal:r,streak:e,completedWorkouts:t}){const[i,o]=Pe.useState(""),[l,h]=Pe.useState(!1);Pe.useEffect(()=>{async function _(){const w=Xt.currentUser;if(!w)return;const T=fr(mn,"users",w.uid,"plans","weeklyPlan"),I=await Ic(T);I.exists()&&o(I.data().plan||"")}_()},[]);async function f(_){const w=Xt.currentUser;w&&await cl(fr(mn,"users",w.uid,"plans","weeklyPlan"),{plan:_,goal:r,createdAt:hl()})}async function g(){h(!0);try{const w=await(await fetch("/api/workout-plan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({goal:r,streak:e,completedWorkouts:t})})).json(),T=w.plan||w.error||"Could not generate plan.";o(T),await f(T)}catch{o("Could not connect to workout planner.")}finally{h(!1)}}return U.jsxs("section",{className:"panel",children:[U.jsx("h2",{children:"Weekly Workout Plan"}),U.jsx("p",{children:"Generate a plan based on your goal and progress."}),U.jsx("button",{onClick:g,children:l?"Creating Plan...":"Generate My Weekly Plan"}),i&&U.jsx("div",{style:{whiteSpace:"pre-wrap",marginTop:"16px"},children:i})]})}function nC({streak:r,completedWorkouts:e,goal:t}){const[i,o]=Pe.useState("🎯 Goal Setter"),l=[];return r>=3&&l.push("🔥 3-Day Streak"),r>=7&&l.push("🚀 7-Day Streak"),e>=10&&l.push("💪 10 Workouts"),e>=25&&l.push("🏅 25 Workouts"),t&&t!=="Get Fit"&&l.push("🎯 Goal Setter"),Pe.useEffect(()=>{const h=setTimeout(()=>{o(null)},5e3);return()=>clearTimeout(h)},[]),U.jsxs(U.Fragment,{children:[i&&U.jsxs("div",{style:{position:"fixed",top:"24px",right:"24px",background:"white",padding:"18px 22px",borderRadius:"18px",boxShadow:"0 12px 30px rgba(0,0,0,0.18)",zIndex:9999},children:[U.jsx("strong",{children:"Achievement Unlocked!"}),U.jsx("p",{children:i})]}),U.jsxs("section",{className:"panel",children:[U.jsx("h2",{children:"Achievements"}),l.length===0?U.jsx("p",{children:"Complete workouts or set a goal to unlock badges."}):U.jsx("div",{children:l.map(h=>U.jsx("div",{style:{marginBottom:"8px"},children:h},h))})]})]})}function rC({onSubmit:r}){const[e,t]=Pe.useState("");async function i(o){t(o);try{console.log("🔥 Click:",o);const l=Xt.currentUser;if(!l){console.log("❌ NO USER LOGGED IN");return}const h=new Date().toISOString().split("T")[0],f=fr(mn,"users",l.uid,"workouts",h);await cl(f,{status:o,date:h,createdAt:hl()}),console.log("✅ SAVED REAL WORKOUT TO FIRESTORE"),r&&r(o)}catch(l){console.error("❌ Firestore error:",l)}}return U.jsxs("section",{className:"panel",children:[U.jsx("h2",{children:"Today's workout"}),U.jsxs("div",{className:"button-row",children:[U.jsx("button",{onClick:()=>i("completed"),children:"Completed"}),U.jsx("button",{onClick:()=>i("partial"),children:"Partly done"}),U.jsx("button",{onClick:()=>i("missed"),children:"Missed"})]})]})}function iC({streak:r,completedWorkouts:e,goal:t}){const[i,o]=Pe.useState([]),[l,h]=Pe.useState(""),[f,g]=Pe.useState(!1);Pe.useEffect(()=>{const T=Xt.currentUser;if(!T)return;const I=Ec(mn,"users",T.uid,"coachMessages"),M=rE(I,iE("createdAt","asc")),$=zk(M,H=>{const z=H.docs.map(J=>({id:J.id,...J.data()}));o(z)});return()=>$()},[]);async function _(T,I){const M=Xt.currentUser;M&&await Bk(Ec(mn,"users",M.uid,"coachMessages"),{role:T,text:I,createdAt:hl()})}async function w(){if(!l.trim())return;const T=l.trim();h(""),g(!0),await _("user",T);try{const M=await(await fetch("/api/coach",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:T,streak:r,workouts:e,goal:t})})).json();await _("coach",M.message||M.error||"I’m here with you. Let’s keep going.")}catch(I){await _("coach",I.message||"Sorry, I couldn’t connect to your coach right now.")}finally{g(!1)}}return U.jsxs("section",{className:"panel",children:[U.jsx("h2",{children:"AI Coach"}),U.jsxs("div",{className:"chat",children:[i.length===0&&U.jsx("div",{className:"bubble coach",children:"Hi, I’m your CoachPulse AI coach. Tell me how your workout went today."}),i.map(T=>U.jsx("div",{className:`bubble ${T.role}`,children:T.text},T.id)),f&&U.jsx("div",{className:"bubble coach",children:"Thinking..."})]}),U.jsxs("div",{className:"chat-input",children:[U.jsx("input",{value:l,placeholder:"Ask your coach...",onChange:T=>h(T.target.value),onKeyDown:T=>T.key==="Enter"&&w()}),U.jsx("button",{onClick:w,children:"Send"})]})]})}const sC=["Lose Weight","Build Muscle","Improve Fitness","Run a 5K","Stay Consistent"];function oC({currentGoal:r,onGoalUpdated:e}){const[t,i]=Pe.useState(r||"Get Fit");async function o(){const l=Xt.currentUser;l&&(await cl(fr(mn,"users",l.uid),{goal:t},{merge:!0}),e(t))}return U.jsxs("section",{className:"panel",children:[U.jsx("h2",{children:"Your Goal"}),U.jsx("select",{value:t,onChange:l=>i(l.target.value),children:sC.map(l=>U.jsx("option",{value:l,children:l},l))}),U.jsx("button",{onClick:o,children:"Save Goal"})]})}function aC({completedWorkouts:r}){const t=Math.min(r/4*100,100);return U.jsxs("section",{className:"panel",children:[U.jsx("h2",{children:"Weekly Progress"}),U.jsxs("p",{children:[r," / ",4," workouts completed"]}),U.jsx("div",{style:{width:"100%",height:"16px",background:"#eee",borderRadius:"999px",overflow:"hidden",marginTop:"12px"},children:U.jsx("div",{style:{width:`${t}%`,height:"100%",background:"#7c3aed",borderRadius:"999px"}})})]})}function lC({user:r,onLogout:e}){const[t,i]=Pe.useState(0),[o,l]=Pe.useState(0),[h,f]=Pe.useState(null),[g,_]=Pe.useState("Get Fit");function w(M){const $=new Set(M);let H=0,z=new Date;for(;;){const J=z.toISOString().split("T")[0];if($.has(J))H+=1,z.setDate(z.getDate()-1);else break}return H}async function T(){const M=Xt.currentUser;if(!M)return;const $=fr(mn,"users",M.uid),H=await Ic($);H.exists()&&H.data().goal&&_(H.data().goal);const z=new Date().toISOString().split("T")[0],J=fr(mn,"users",M.uid,"workouts",z),te=await Ic(J);f(te.exists()?te.data():null);const ne=Ec(mn,"users",M.uid,"workouts"),le=await aE(ne);let ke=0;const ve=[];le.forEach(C=>{const S=C.data();S.status==="completed"&&(ke+=1,ve.push(S.date))}),l(ke),i(w(ve))}function I(){T()}return Pe.useEffect(()=>{T()},[]),U.jsxs("main",{className:"page",children:[U.jsxs("header",{className:"topbar",children:[U.jsxs("div",{children:[U.jsx("p",{className:"badge",children:"Beta MVP"}),U.jsx("h1",{children:"Welcome back"}),U.jsx("p",{children:r==null?void 0:r.email})]}),U.jsx("button",{className:"ghost",onClick:e,children:"Log out"})]}),U.jsx(oC,{currentGoal:g,onGoalUpdated:_}),U.jsx(eC,{}),U.jsx(Jk,{}),U.jsx(Zk,{currentWeight:80,goalWeight:70,streak:t,completedWorkouts:o}),U.jsx(tC,{goal:g,streak:t,completedWorkouts:o}),h?U.jsxs("div",{className:"panel",children:[U.jsx("h3",{children:"Today's Status:"}),U.jsx("p",{children:h.status})]}):U.jsx("div",{className:"panel",children:U.jsx("h3",{children:"No workout logged today"})}),U.jsx(aC,{completedWorkouts:o}),U.jsx(nC,{streak:t,completedWorkouts:o,goal:g}),U.jsxs("section",{className:"stats",children:[U.jsxs("div",{className:"stat",children:[U.jsx("span",{children:"🔥"}),U.jsx("h2",{children:t}),U.jsx("p",{children:"Day streak"})]}),U.jsxs("div",{className:"stat",children:[U.jsx("span",{children:"💪"}),U.jsx("h2",{children:o}),U.jsx("p",{children:"Total completed"})]}),U.jsxs("div",{className:"stat",children:[U.jsx("span",{children:"🎯"}),U.jsx("h2",{children:g}),U.jsx("p",{children:"Current goal"})]})]}),U.jsxs("section",{className:"layout",children:[U.jsx(rC,{onSubmit:I}),U.jsx(iC,{streak:t,completedWorkouts:o,goal:g})]})]})}function uC({onLogin:r}){const[e,t]=Pe.useState(""),[i,o]=Pe.useState(""),[l,h]=Pe.useState(!0),[f,g]=Pe.useState("");async function _(){g("");try{let w;l?w=await XI(Xt,e,i):w=await QI(Xt,e,i),r(w.user.email)}catch(w){g(w.message)}}return U.jsx("main",{className:"page narrow",children:U.jsxs("section",{className:"panel",children:[U.jsx("h1",{children:l?"Login":"Create Account"}),U.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:w=>t(w.target.value)}),U.jsx("input",{type:"password",placeholder:"Password",value:i,onChange:w=>o(w.target.value)}),f&&U.jsx("p",{style:{color:"red"},children:f}),U.jsx("button",{className:"primary full",onClick:_,children:l?"Login":"Sign Up"}),U.jsx("p",{style:{cursor:"pointer",marginTop:10},onClick:()=>h(!l),children:l?"Don't have an account? Sign up":"Already have an account? Login"})]})})}function cC(){const[r,e]=Pe.useState("landing"),[t,i]=Pe.useState(null);return Pe.useEffect(()=>{const o=eS(Xt,l=>{l&&(i({email:l.email}),e("dashboard"))});return()=>o()},[]),r==="login"?U.jsx(uC,{onLogin:o=>{i({email:o}),e("dashboard")}}):r==="dashboard"?U.jsx(lC,{user:t,onLogout:()=>{i(null),e("landing")}}):U.jsx(Yk,{onStart:()=>e("login")})}Xk.createRoot(document.getElementById("root")).render(U.jsx(Wk.StrictMode,{children:U.jsx(cC,{})}));
