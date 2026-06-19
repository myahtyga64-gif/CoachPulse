(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function pT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var vd={exports:{}},ja={},wd={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function mT(){if(Dg)return ke;Dg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=T&&L[T]||L["@@iterator"],typeof L=="function"?L:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,H={};function z(L,G,de){this.props=L,this.context=G,this.refs=H,this.updater=de||V}z.prototype.isReactComponent={},z.prototype.setState=function(L,G){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,G,"setState")},z.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function Y(){}Y.prototype=z.prototype;function te(L,G,de){this.props=L,this.context=G,this.refs=H,this.updater=de||V}var ne=te.prototype=new Y;ne.constructor=te,$(ne,z.prototype),ne.isPureReactComponent=!0;var le=Array.isArray,Ce=Object.prototype.hasOwnProperty,ve={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(L,G,de){var Se,Re={},De=null,Me=null;if(G!=null)for(Se in G.ref!==void 0&&(Me=G.ref),G.key!==void 0&&(De=""+G.key),G)Ce.call(G,Se)&&!P.hasOwnProperty(Se)&&(Re[Se]=G[Se]);var Ue=arguments.length-2;if(Ue===1)Re.children=de;else if(1<Ue){for(var $e=Array(Ue),Et=0;Et<Ue;Et++)$e[Et]=arguments[Et+2];Re.children=$e}if(L&&L.defaultProps)for(Se in Ue=L.defaultProps,Ue)Re[Se]===void 0&&(Re[Se]=Ue[Se]);return{$$typeof:r,type:L,key:De,ref:Me,props:Re,_owner:ve.current}}function R(L,G){return{$$typeof:r,type:L.type,key:G,ref:L.ref,props:L.props,_owner:L._owner}}function N(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function D(L){var G={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(de){return G[de]})}var b=/\/+/g;function k(L,G){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):G.toString(36)}function st(L,G,de,Se,Re){var De=typeof L;(De==="undefined"||De==="boolean")&&(L=null);var Me=!1;if(L===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(L.$$typeof){case r:case e:Me=!0}}if(Me)return Me=L,Re=Re(Me),L=Se===""?"."+k(Me,0):Se,le(Re)?(de="",L!=null&&(de=L.replace(b,"$&/")+"/"),st(Re,G,de,"",function(Et){return Et})):Re!=null&&(N(Re)&&(Re=R(Re,de+(!Re.key||Me&&Me.key===Re.key?"":(""+Re.key).replace(b,"$&/")+"/")+L)),G.push(Re)),1;if(Me=0,Se=Se===""?".":Se+":",le(L))for(var Ue=0;Ue<L.length;Ue++){De=L[Ue];var $e=Se+k(De,Ue);Me+=st(De,G,de,$e,Re)}else if($e=S(L),typeof $e=="function")for(L=$e.call(L),Ue=0;!(De=L.next()).done;)De=De.value,$e=Se+k(De,Ue++),Me+=st(De,G,de,$e,Re);else if(De==="object")throw G=String(L),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Me}function Lt(L,G,de){if(L==null)return L;var Se=[],Re=0;return st(L,Se,"","",function(De){return G.call(de,De,Re++)}),Se}function bt(L){if(L._status===-1){var G=L._result;G=G(),G.then(function(de){(L._status===0||L._status===-1)&&(L._status=1,L._result=de)},function(de){(L._status===0||L._status===-1)&&(L._status=2,L._result=de)}),L._status===-1&&(L._status=0,L._result=G)}if(L._status===1)return L._result.default;throw L._result}var Be={current:null},ee={transition:null},pe={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ee,ReactCurrentOwner:ve};function oe(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Lt,forEach:function(L,G,de){Lt(L,function(){G.apply(this,arguments)},de)},count:function(L){var G=0;return Lt(L,function(){G++}),G},toArray:function(L){return Lt(L,function(G){return G})||[]},only:function(L){if(!N(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ke.Component=z,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=te,ke.StrictMode=i,ke.Suspense=g,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,ke.act=oe,ke.cloneElement=function(L,G,de){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Se=$({},L.props),Re=L.key,De=L.ref,Me=L._owner;if(G!=null){if(G.ref!==void 0&&(De=G.ref,Me=ve.current),G.key!==void 0&&(Re=""+G.key),L.type&&L.type.defaultProps)var Ue=L.type.defaultProps;for($e in G)Ce.call(G,$e)&&!P.hasOwnProperty($e)&&(Se[$e]=G[$e]===void 0&&Ue!==void 0?Ue[$e]:G[$e])}var $e=arguments.length-2;if($e===1)Se.children=de;else if(1<$e){Ue=Array($e);for(var Et=0;Et<$e;Et++)Ue[Et]=arguments[Et+2];Se.children=Ue}return{$$typeof:r,type:L.type,key:Re,ref:De,props:Se,_owner:Me}},ke.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},ke.createElement=I,ke.createFactory=function(L){var G=I.bind(null,L);return G.type=L,G},ke.createRef=function(){return{current:null}},ke.forwardRef=function(L){return{$$typeof:f,render:L}},ke.isValidElement=N,ke.lazy=function(L){return{$$typeof:w,_payload:{_status:-1,_result:L},_init:bt}},ke.memo=function(L,G){return{$$typeof:_,type:L,compare:G===void 0?null:G}},ke.startTransition=function(L){var G=ee.transition;ee.transition={};try{L()}finally{ee.transition=G}},ke.unstable_act=oe,ke.useCallback=function(L,G){return Be.current.useCallback(L,G)},ke.useContext=function(L){return Be.current.useContext(L)},ke.useDebugValue=function(){},ke.useDeferredValue=function(L){return Be.current.useDeferredValue(L)},ke.useEffect=function(L,G){return Be.current.useEffect(L,G)},ke.useId=function(){return Be.current.useId()},ke.useImperativeHandle=function(L,G,de){return Be.current.useImperativeHandle(L,G,de)},ke.useInsertionEffect=function(L,G){return Be.current.useInsertionEffect(L,G)},ke.useLayoutEffect=function(L,G){return Be.current.useLayoutEffect(L,G)},ke.useMemo=function(L,G){return Be.current.useMemo(L,G)},ke.useReducer=function(L,G,de){return Be.current.useReducer(L,G,de)},ke.useRef=function(L){return Be.current.useRef(L)},ke.useState=function(L){return Be.current.useState(L)},ke.useSyncExternalStore=function(L,G,de){return Be.current.useSyncExternalStore(L,G,de)},ke.useTransition=function(){return Be.current.useTransition()},ke.version="18.3.1",ke}var Og;function pf(){return Og||(Og=1,wd.exports=mT()),wd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function gT(){if(Vg)return ja;Vg=1;var r=pf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var w,T={},S=null,V=null;_!==void 0&&(S=""+_),g.key!==void 0&&(S=""+g.key),g.ref!==void 0&&(V=g.ref);for(w in g)i.call(g,w)&&!l.hasOwnProperty(w)&&(T[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:f,key:S,ref:V,props:T,_owner:o.current}}return ja.Fragment=t,ja.jsx=h,ja.jsxs=h,ja}var Lg;function yT(){return Lg||(Lg=1,vd.exports=gT()),vd.exports}var O=yT();const _T=()=>{};var bg={};/**
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
 */const S_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},vT=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},A_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=l>>2,T=(l&3)<<4|f>>4;let S=(f&15)<<2|_>>6,V=_&63;g||(V=64,h||(S=64)),i.push(t[w],t[T],t[S],t[V])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(S_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):vT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||T==null)throw new wT;const S=l<<2|f>>4;if(i.push(S),_!==64){const V=f<<4&240|_>>2;if(i.push(V),T!==64){const $=_<<6&192|T;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class wT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ET=function(r){const e=S_(r);return A_.encodeByteArray(e,!0)},sc=function(r){return ET(r).replace(/\./g,"")},R_=function(r){try{return A_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IT=()=>TT().__FIREBASE_DEFAULTS__,ST=()=>{if(typeof process>"u"||typeof bg>"u")return;const r=bg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},AT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&R_(r[1]);return e&&JSON.parse(e)},Ac=()=>{try{return _T()||IT()||ST()||AT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},k_=r=>{var e,t;return(t=(e=Ac())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},C_=r=>{const e=k_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},P_=()=>{var r;return(r=Ac())===null||r===void 0?void 0:r.config},N_=r=>{var e;return(e=Ac())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class RT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Vi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mf(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function x_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[sc(JSON.stringify(t)),sc(JSON.stringify(h)),""].join(".")}const Ka={};function kT(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ka))Ka[e]?r.emulator.push(e):r.prod.push(e);return r}function CT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Mg=!1;function gf(r,e){if(typeof window>"u"||typeof document>"u"||!Vi(window.location.host)||Ka[r]===e||Ka[r]||Mg)return;Ka[r]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",l=kT().prod.length>0;function h(){const S=document.getElementById(i);S&&S.remove()}function f(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function g(S,V){S.setAttribute("width","24"),S.setAttribute("id",V),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function _(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Mg=!0,h()},S}function w(S,V){S.setAttribute("id",V),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=CT(i),V=t("text"),$=document.getElementById(V)||document.createElement("span"),H=t("learnmore"),z=document.getElementById(H)||document.createElement("a"),Y=t("preprendIcon"),te=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ne=S.element;f(ne),w(z,H);const le=_();g(te,Y),ne.append(te,$,z,le),document.body.appendChild(ne)}l?($.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function NT(){var r;const e=(r=Ac())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function DT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function OT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VT(){const r=Wt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function LT(){return!NT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bT(){try{return typeof indexedDB=="object"}catch{return!1}}function MT(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const UT="FirebaseError";class yr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=UT,Object.setPrototypeOf(this,yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fl.prototype.create)}}class fl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?FT(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new yr(o,f,i)}}function FT(r,e){return r.replace(jT,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const jT=/\{\$([^}]+)}/g;function BT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ys(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if(Ug(l)&&Ug(h)){if(!ys(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Ug(r){return r!==null&&typeof r=="object"}/**
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
 */function pl(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function za(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function $a(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function zT(r,e){const t=new $T(r,e);return t.subscribe.bind(t)}class $T{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");WT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Ed),o.error===void 0&&(o.error=Ed),o.complete===void 0&&(o.complete=Ed);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ed(){}/**
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
 */function nt(r){return r&&r._delegate?r._delegate:r}class Ri{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class HT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new RT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GT(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:qT(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qT(r){return r===ds?void 0:r}function GT(r){return r.instantiationMode==="EAGER"}/**
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
 */class KT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const QT={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},XT=Pe.INFO,YT={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},JT=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=YT[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yf{constructor(e){this.name=e,this._logLevel=XT,this._logHandler=JT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const ZT=(r,e)=>e.some(t=>r instanceof t);let Fg,jg;function e0(){return Fg||(Fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function t0(){return jg||(jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D_=new WeakMap,Fd=new WeakMap,O_=new WeakMap,Td=new WeakMap,_f=new WeakMap;function n0(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Ti(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&D_.set(t,r)}).catch(()=>{}),_f.set(e,r),e}function r0(r){if(Fd.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Fd.set(r,e)}let jd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Fd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||O_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ti(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function i0(r){jd=r(jd)}function s0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(Id(this),e,...t);return O_.set(i,e.sort?e.sort():[e]),Ti(i)}:t0().includes(r)?function(...e){return r.apply(Id(this),e),Ti(D_.get(this))}:function(...e){return Ti(r.apply(Id(this),e))}}function o0(r){return typeof r=="function"?s0(r):(r instanceof IDBTransaction&&r0(r),ZT(r,e0())?new Proxy(r,jd):r)}function Ti(r){if(r instanceof IDBRequest)return n0(r);if(Td.has(r))return Td.get(r);const e=o0(r);return e!==r&&(Td.set(r,e),_f.set(e,r)),e}const Id=r=>_f.get(r);function a0(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=Ti(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Ti(h.result),g.oldVersion,g.newVersion,Ti(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const l0=["get","getKey","getAll","getAllKeys","count"],u0=["put","add","delete","clear"],Sd=new Map;function Bg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Sd.get(e))return Sd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=u0.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||l0.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return Sd.set(e,l),l}i0(r=>({...r,get:(e,t,i)=>Bg(e,t)||r.get(e,t,i),has:(e,t)=>!!Bg(e,t)||r.has(e,t)}));/**
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
 */class c0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(h0(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function h0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bd="@firebase/app",zg="0.13.2";/**
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
 */const jr=new yf("@firebase/app"),d0="@firebase/app-compat",f0="@firebase/analytics-compat",p0="@firebase/analytics",m0="@firebase/app-check-compat",g0="@firebase/app-check",y0="@firebase/auth",_0="@firebase/auth-compat",v0="@firebase/database",w0="@firebase/data-connect",E0="@firebase/database-compat",T0="@firebase/functions",I0="@firebase/functions-compat",S0="@firebase/installations",A0="@firebase/installations-compat",R0="@firebase/messaging",k0="@firebase/messaging-compat",C0="@firebase/performance",P0="@firebase/performance-compat",N0="@firebase/remote-config",x0="@firebase/remote-config-compat",D0="@firebase/storage",O0="@firebase/storage-compat",V0="@firebase/firestore",L0="@firebase/ai",b0="@firebase/firestore-compat",M0="firebase",U0="11.10.0";/**
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
 */const zd="[DEFAULT]",F0={[Bd]:"fire-core",[d0]:"fire-core-compat",[p0]:"fire-analytics",[f0]:"fire-analytics-compat",[g0]:"fire-app-check",[m0]:"fire-app-check-compat",[y0]:"fire-auth",[_0]:"fire-auth-compat",[v0]:"fire-rtdb",[w0]:"fire-data-connect",[E0]:"fire-rtdb-compat",[T0]:"fire-fn",[I0]:"fire-fn-compat",[S0]:"fire-iid",[A0]:"fire-iid-compat",[R0]:"fire-fcm",[k0]:"fire-fcm-compat",[C0]:"fire-perf",[P0]:"fire-perf-compat",[N0]:"fire-rc",[x0]:"fire-rc-compat",[D0]:"fire-gcs",[O0]:"fire-gcs-compat",[V0]:"fire-fst",[b0]:"fire-fst-compat",[L0]:"fire-vertex","fire-js":"fire-js",[M0]:"fire-js-all"};/**
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
 */const oc=new Map,j0=new Map,$d=new Map;function $g(r,e){try{r.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function _s(r){const e=r.name;if($d.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;$d.set(e,r);for(const t of oc.values())$g(t,r);for(const t of j0.values())$g(t,r);return!0}function Rc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function mn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const B0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ii=new fl("app","Firebase",B0);/**
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
 */class z0{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ii.create("app-deleted",{appName:this._name})}}/**
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
 */const As=U0;function V_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:zd,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Ii.create("bad-app-name",{appName:String(o)});if(t||(t=P_()),!t)throw Ii.create("no-options");const l=oc.get(o);if(l){if(ys(t,l.options)&&ys(i,l.config))return l;throw Ii.create("duplicate-app",{appName:o})}const h=new KT(o);for(const g of $d.values())h.addComponent(g);const f=new z0(t,i,h);return oc.set(o,f),f}function vf(r=zd){const e=oc.get(r);if(!e&&r===zd&&P_())return V_();if(!e)throw Ii.create("no-app",{appName:r});return e}function lr(r,e,t){var i;let o=(i=F0[r])!==null&&i!==void 0?i:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(f.join(" "));return}_s(new Ri(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const $0="firebase-heartbeat-database",W0=1,tl="firebase-heartbeat-store";let Ad=null;function L_(){return Ad||(Ad=a0($0,W0,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(tl)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ii.create("idb-open",{originalErrorMessage:r.message})})),Ad}async function H0(r){try{const t=(await L_()).transaction(tl),i=await t.objectStore(tl).get(b_(r));return await t.done,i}catch(e){if(e instanceof yr)jr.warn(e.message);else{const t=Ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(t.message)}}}async function Wg(r,e){try{const i=(await L_()).transaction(tl,"readwrite");await i.objectStore(tl).put(e,b_(r)),await i.done}catch(t){if(t instanceof yr)jr.warn(t.message);else{const i=Ii.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jr.warn(i.message)}}}function b_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const q0=1024,G0=30;class K0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new X0(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Hg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>G0){const h=Y0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){jr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hg(),{heartbeatsToSend:i,unsentEntries:o}=Q0(this._heartbeatsCache.heartbeats),l=sc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return jr.warn(t),""}}}function Hg(){return new Date().toISOString().substring(0,10)}function Q0(r,e=q0){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),qg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),qg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class X0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bT()?MT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await H0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Wg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Wg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function qg(r){return sc(JSON.stringify({version:2,heartbeats:r})).length}function Y0(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function J0(r){_s(new Ri("platform-logger",e=>new c0(e),"PRIVATE")),_s(new Ri("heartbeat",e=>new K0(e),"PRIVATE")),lr(Bd,zg,r),lr(Bd,zg,"esm2017"),lr("fire-js","")}J0("");function wf(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(r);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(r,i[o])&&(t[i[o]]=r[i[o]]);return t}function M_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Z0=M_,U_=new fl("auth","Firebase",M_());/**
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
 */const ac=new yf("@firebase/auth");function eI(r,...e){ac.logLevel<=Pe.WARN&&ac.warn(`Auth (${As}): ${r}`,...e)}function Qu(r,...e){ac.logLevel<=Pe.ERROR&&ac.error(`Auth (${As}): ${r}`,...e)}/**
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
 */function Gn(r,...e){throw Ef(r,...e)}function ur(r,...e){return Ef(r,...e)}function F_(r,e,t){const i=Object.assign(Object.assign({},Z0()),{[e]:t});return new fl("auth","Firebase",i).create(e,{appName:r.name})}function Ur(r){return F_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ef(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return U_.create(r,...e)}function ye(r,e,...t){if(!r)throw Ef(e,...t)}function br(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Qu(e),new Error(e)}function Br(r,e){r||br(e)}/**
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
 */function Wd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function tI(){return Gg()==="http:"||Gg()==="https:"}function Gg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function nI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tI()||DT()||"connection"in navigator)?navigator.onLine:!0}function rI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ml{constructor(e,t){this.shortDelay=e,this.longDelay=t,Br(t>e,"Short delay should be less than long delay!"),this.isMobile=PT()||OT()}get(){return nI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tf(r,e){Br(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class j_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oI=new ml(3e4,6e4);function Li(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function bi(r,e,t,i,o={}){return B_(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=pl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return xT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Vi(r.emulatorConfig.host)&&(_.credentials="include"),j_.fetch()(await z_(r,r.config.apiHost,t,f),_)})}async function B_(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},iI),e);try{const o=new lI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw ju(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw ju(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw ju(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw ju(r,"user-disabled",h);const w=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw F_(r,w,_);Gn(r,w)}}catch(o){if(o instanceof yr)throw o;Gn(r,"network-request-failed",{message:String(o)})}}async function gl(r,e,t,i,o={}){const l=await bi(r,e,t,i,o);return"mfaPendingCredential"in l&&Gn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function z_(r,e,t,i){const o=`${e}${t}?${i}`,l=r,h=l.config.emulator?Tf(r.config,o):`${r.config.apiScheme}://${o}`;return sI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function aI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ur(this.auth,"network-request-failed")),oI.get())})}}function ju(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ur(r,e,i);return o.customData._tokenResponse=t,o}function Kg(r){return r!==void 0&&r.enterprise!==void 0}class uI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return aI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function cI(r,e){return bi(r,"GET","/v2/recaptchaConfig",Li(r,e))}/**
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
 */async function hI(r,e){return bi(r,"POST","/v1/accounts:delete",e)}async function lc(r,e){return bi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dI(r,e=!1){const t=nt(r),i=await t.getIdToken(e),o=If(i);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Qa(Rd(o.auth_time)),issuedAtTime:Qa(Rd(o.iat)),expirationTime:Qa(Rd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Rd(r){return Number(r)*1e3}function If(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Qu("JWT malformed, contained fewer than 3 sections"),null;try{const o=R_(t);return o?JSON.parse(o):(Qu("Failed to decode base64 JWT payload"),null)}catch(o){return Qu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Qg(r){const e=If(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nl(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof yr&&fI(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function fI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class pI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uc(r){var e;const t=r.auth,i=await r.getIdToken(),o=await nl(r,lc(t,{idToken:i}));ye(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?$_(l.providerUserInfo):[],f=gI(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),w=g?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Hd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,T)}async function mI(r){const e=nt(r);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gI(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function $_(r){return r.map(e=>{var{providerId:t}=e,i=wf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function yI(r,e){const t=await B_(r,{},async()=>{const i=pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await z_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return r.emulatorConfig&&Vi(r.emulatorConfig.host)&&(g.credentials="include"),j_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function _I(r,e){return bi(r,"POST","/v2/accounts:revokeToken",Li(r,e))}/**
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
 */class Po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=Qg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await yI(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Po;return i&&(ye(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Po,this.toJSON())}_performRefresh(){return br("not implemented")}}/**
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
 */function mi(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=wf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Hd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await nl(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dI(this,e)}reload(){return mI(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await uc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(Ur(this.auth));const e=await this.getIdToken();return await nl(this,hI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,g,_,w;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,V=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,$=(h=t.photoURL)!==null&&h!==void 0?h:void 0,H=(f=t.tenantId)!==null&&f!==void 0?f:void 0,z=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,Y=(_=t.createdAt)!==null&&_!==void 0?_:void 0,te=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ne,emailVerified:le,isAnonymous:Ce,providerData:ve,stsTokenManager:P}=t;ye(ne&&P,e,"internal-error");const I=Po.fromJSON(this.name,P);ye(typeof ne=="string",e,"internal-error"),mi(T,e.name),mi(S,e.name),ye(typeof le=="boolean",e,"internal-error"),ye(typeof Ce=="boolean",e,"internal-error"),mi(V,e.name),mi($,e.name),mi(H,e.name),mi(z,e.name),mi(Y,e.name),mi(te,e.name);const R=new $n({uid:ne,auth:e,email:S,emailVerified:le,displayName:T,isAnonymous:Ce,photoURL:$,phoneNumber:V,tenantId:H,stsTokenManager:I,createdAt:Y,lastLoginAt:te});return ve&&Array.isArray(ve)&&(R.providerData=ve.map(N=>Object.assign({},N))),z&&(R._redirectEventId=z),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new Po;o.updateFromServerResponse(t);const l=new $n({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await uc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?$_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Po;f.updateFromIdToken(i);const g=new $n({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Hd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
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
 */const Xg=new Map;function Mr(r){Br(r instanceof Function,"Expected a class definition");let e=Xg.get(r);return e?(Br(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Xg.set(r,e),e)}/**
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
 */class W_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}W_.type="NONE";const Yg=W_;/**
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
 */function Xu(r,e,t){return`firebase:${r}:${e}:${t}`}class No{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Xu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Xu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await lc(this.auth,{idToken:e}).catch(()=>{});return t?$n._fromGetAccountInfoResponse(this.auth,t,e):null}return $n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new No(Mr(Yg),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Mr(Yg);const h=Xu(i,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const w=await _._get(h);if(w){let T;if(typeof w=="string"){const S=await lc(e,{idToken:w}).catch(()=>{});if(!S)break;T=await $n._fromGetAccountInfoResponse(e,S,w)}else T=$n._fromJSON(e,w);_!==l&&(f=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new No(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new No(l,e,i))}}/**
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
 */function Jg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(X_(e))return"Blackberry";if(Y_(e))return"Webos";if(q_(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(Q_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function H_(r=Wt()){return/firefox\//i.test(r)}function q_(r=Wt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(r=Wt()){return/crios\//i.test(r)}function K_(r=Wt()){return/iemobile/i.test(r)}function Q_(r=Wt()){return/android/i.test(r)}function X_(r=Wt()){return/blackberry/i.test(r)}function Y_(r=Wt()){return/webos/i.test(r)}function Sf(r=Wt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function vI(r=Wt()){var e;return Sf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wI(){return VT()&&document.documentMode===10}function J_(r=Wt()){return Sf(r)||Q_(r)||Y_(r)||X_(r)||/windows phone/i.test(r)||K_(r)}/**
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
 */function Z_(r,e=[]){let t;switch(r){case"Browser":t=Jg(Wt());break;case"Worker":t=`${Jg(Wt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${As}/${i}`}/**
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
 */class EI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function TI(r,e={}){return bi(r,"GET","/v2/passwordPolicy",Li(r,e))}/**
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
 */const II=6;class SI{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:II,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(i=g.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class AI{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zg(this),this.idTokenSubscription=new Zg(this),this.beforeStateQueue=new EI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lc(this,{idToken:e}),i=await $n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(mn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(Ur(this));const t=e?nt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TI(this),t=new SI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await _I(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[Mr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&eI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Rs(r){return nt(r)}class Zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=zT(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RI(r){kc=r}function ev(r){return kc.loadJS(r)}function kI(){return kc.recaptchaEnterpriseScript}function CI(){return kc.gapiScript}function PI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class NI{constructor(){this.enterprise=new xI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class xI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const DI="recaptcha-enterprise",tv="NO_RECAPTCHA";class OI{constructor(e){this.type=DI,this.auth=Rs(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{cI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new uI(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;Kg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(tv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new NI().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&Kg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=kI();g.length!==0&&(g+=f),ev(g).then(()=>{o(f,l,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function ey(r,e,t,i=!1,o=!1){const l=new OI(r);let h;if(o)h=tv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function qd(r,e,t,i,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await ey(r,e,t,t==="getOobCode");return i(r,h)}else return i(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await ey(r,e,t,t==="getOobCode");return i(r,f)}else return Promise.reject(h)})}/**
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
 */function VI(r,e){const t=Rc(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ys(l,e??{}))return o;Gn(o,"already-initialized")}return t.initialize({options:e})}function LI(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Mr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function bI(r,e,t){const i=Rs(r);ye(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=nv(e),{host:h,port:f}=MI(e),g=f===null?"":`:${f}`,_={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ye(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ye(ys(_,i.config.emulator)&&ys(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Vi(h)?(mf(`${l}//${h}${g}`),gf("Auth",!0)):UI()}function nv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function MI(r){const e=nv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:ty(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:ty(h)}}}function ty(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function UI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Af{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return br("not implemented")}_getIdTokenResponse(e){return br("not implemented")}_linkToIdToken(e,t){return br("not implemented")}_getReauthenticationResolver(e){return br("not implemented")}}async function FI(r,e){return bi(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function jI(r,e){return gl(r,"POST","/v1/accounts:signInWithPassword",Li(r,e))}/**
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
 */async function BI(r,e){return gl(r,"POST","/v1/accounts:signInWithEmailLink",Li(r,e))}async function zI(r,e){return gl(r,"POST","/v1/accounts:signInWithEmailLink",Li(r,e))}/**
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
 */class rl extends Af{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new rl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new rl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qd(e,t,"signInWithPassword",jI);case"emailLink":return BI(e,{email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qd(e,i,"signUpPassword",FI);case"emailLink":return zI(e,{idToken:t,email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xo(r,e){return gl(r,"POST","/v1/accounts:signInWithIdp",Li(r,e))}/**
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
 */const $I="http://localhost";class vs extends Af{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Gn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=wf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new vs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return xo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,xo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xo(e,t)}buildRequest(){const e={requestUri:$I,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pl(t)}return e}}/**
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
 */function WI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HI(r){const e=za($a(r)).link,t=e?za($a(e)).deep_link_id:null,i=za($a(r)).deep_link_id;return(i?za($a(i)).link:null)||i||t||e||r}class Rf{constructor(e){var t,i,o,l,h,f;const g=za($a(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(i=g.oobCode)!==null&&i!==void 0?i:null,T=WI((o=g.mode)!==null&&o!==void 0?o:null);ye(_&&w&&T,"argument-error"),this.apiKey=_,this.operation=T,this.code=w,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=HI(e);try{return new Rf(t)}catch{return null}}}/**
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
 */class jo{constructor(){this.providerId=jo.PROVIDER_ID}static credential(e,t){return rl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Rf.parseLink(t);return ye(i,"argument-error"),rl._fromEmailAndCode(e,i.code,i.tenantId)}}jo.PROVIDER_ID="password";jo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class rv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yl extends rv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gi extends yl{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";gi.PROVIDER_ID="facebook.com";/**
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
 */class yi extends yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return yi.credential(t,i)}catch{return null}}}yi.GOOGLE_SIGN_IN_METHOD="google.com";yi.PROVIDER_ID="google.com";/**
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
 */class _i extends yl{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.GITHUB_SIGN_IN_METHOD="github.com";_i.PROVIDER_ID="github.com";/**
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
 */class vi extends yl{constructor(){super("twitter.com")}static credential(e,t){return vs._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return vi.credential(t,i)}catch{return null}}}vi.TWITTER_SIGN_IN_METHOD="twitter.com";vi.PROVIDER_ID="twitter.com";/**
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
 */async function qI(r,e){return gl(r,"POST","/v1/accounts:signUp",Li(r,e))}/**
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
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await $n._fromIdTokenResponse(e,i,o),h=ny(i);return new ws({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=ny(i);return new ws({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function ny(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class cc extends yr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new cc(e,t,i,o)}}function iv(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(r,l,e,i):l})}async function GI(r,e,t=!1){const i=await nl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ws._forOperation(r,"link",i)}/**
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
 */async function KI(r,e,t=!1){const{auth:i}=r;if(mn(i.app))return Promise.reject(Ur(i));const o="reauthenticate";try{const l=await nl(r,iv(i,o,e,r),t);ye(l.idToken,i,"internal-error");const h=If(l.idToken);ye(h,i,"internal-error");const{sub:f}=h;return ye(r.uid===f,i,"user-mismatch"),ws._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Gn(i,"user-mismatch"),l}}/**
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
 */async function sv(r,e,t=!1){if(mn(r.app))return Promise.reject(Ur(r));const i="signIn",o=await iv(r,i,e),l=await ws._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}async function QI(r,e){return sv(Rs(r),e)}/**
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
 */async function ov(r){const e=Rs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function XI(r,e,t){if(mn(r.app))return Promise.reject(Ur(r));const i=Rs(r),h=await qd(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&ov(r),g}),f=await ws._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function YI(r,e,t){return mn(r.app)?Promise.reject(Ur(r)):QI(nt(r),jo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&ov(r),i})}/**
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
 */function JI(r,e){return nt(r).setPersistence(e)}function ZI(r,e,t,i){return nt(r).onIdTokenChanged(e,t,i)}function eS(r,e,t){return nt(r).beforeAuthStateChanged(e,t)}function tS(r,e,t,i){return nt(r).onAuthStateChanged(e,t,i)}const hc="__sak";/**
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
 */class av{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const nS=1e3,rS=10;class lv extends av{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=J_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);wI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,rS):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},nS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}lv.type="LOCAL";const uv=lv;/**
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
 */class cv extends av{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cv.type="SESSION";const hv=cv;/**
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
 */function iS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Cc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await iS(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cc.receivers=[];/**
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
 */function kf(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class sS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=kf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const S=T;if(S.data.eventId===_)switch(S.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(S.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function cr(){return window}function oS(r){cr().location.href=r}/**
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
 */function dv(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function aS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lS(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function uS(){return dv()?self:null}/**
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
 */const fv="firebaseLocalStorageDb",cS=1,dc="firebaseLocalStorage",pv="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pc(r,e){return r.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function hS(){const r=indexedDB.deleteDatabase(fv);return new _l(r).toPromise()}function Gd(){const r=indexedDB.open(fv,cS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(dc,{keyPath:pv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(dc)?e(i):(i.close(),await hS(),e(await Gd()))})})}async function ry(r,e,t){const i=Pc(r,!0).put({[pv]:e,value:t});return new _l(i).toPromise()}async function dS(r,e){const t=Pc(r,!1).get(e),i=await new _l(t).toPromise();return i===void 0?null:i.value}function iy(r,e){const t=Pc(r,!0).delete(e);return new _l(t).toPromise()}const fS=800,pS=3;class mv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>pS)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cc._getInstance(uS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await aS(),!this.activeServiceWorker)return;this.sender=new sS(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gd();return await ry(e,hc,"1"),await iy(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ry(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>dS(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>iy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Pc(o,!1).getAll();return new _l(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mv.type="LOCAL";const mS=mv;new ml(3e4,6e4);/**
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
 */function gS(r,e){return e?Mr(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Cf extends Af{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yS(r){return sv(r.auth,new Cf(r),r.bypassAuthState)}function _S(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),KI(t,new Cf(r),r.bypassAuthState)}async function vS(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),GI(t,new Cf(r),r.bypassAuthState)}/**
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
 */class gv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yS;case"linkViaPopup":case"linkViaRedirect":return vS;case"reauthViaPopup":case"reauthViaRedirect":return _S;default:Gn(this.auth,"internal-error")}}resolve(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wS=new ml(2e3,1e4);class Co extends gv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Co.currentPopupAction&&Co.currentPopupAction.cancel(),Co.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Br(this.filter.length===1,"Popup operations only handle one event");const e=kf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Co.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wS.get())};e()}}Co.currentPopupAction=null;/**
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
 */const ES="pendingRedirect",Yu=new Map;class TS extends gv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Yu.get(this.auth._key());if(!e){try{const i=await IS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Yu.set(this.auth._key(),e)}return this.bypassAuthState||Yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IS(r,e){const t=RS(e),i=AS(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function SS(r,e){Yu.set(r._key(),e)}function AS(r){return Mr(r._redirectPersistence)}function RS(r){return Xu(ES,r.config.apiKey,r.name)}async function kS(r,e,t=!1){if(mn(r.app))return Promise.reject(Ur(r));const i=Rs(r),o=gS(i,e),h=await new TS(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const CS=600*1e3;class PS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!yv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ur(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CS&&this.cachedEventUids.clear(),this.cachedEventUids.has(sy(e))}saveEventToCache(e){this.cachedEventUids.add(sy(e)),this.lastProcessedEventTime=Date.now()}}function sy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function yv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yv(r);default:return!1}}/**
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
 */async function xS(r,e={}){return bi(r,"GET","/v1/projects",e)}/**
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
 */const DS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OS=/^https?/;async function VS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await xS(r);for(const t of e)try{if(LS(t))return}catch{}Gn(r,"unauthorized-domain")}function LS(r){const e=Wd(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!OS.test(t))return!1;if(DS.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const bS=new ml(3e4,6e4);function oy(){const r=cr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function MS(r){return new Promise((e,t)=>{var i,o,l;function h(){oy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oy(),t(ur(r,"network-request-failed"))},timeout:bS.get()})}if(!((o=(i=cr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=cr().gapi)===null||l===void 0)&&l.load)h();else{const f=PI("iframefcb");return cr()[f]=()=>{gapi.load?h():t(ur(r,"network-request-failed"))},ev(`${CI()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Ju=null,e})}let Ju=null;function US(r){return Ju=Ju||MS(r),Ju}/**
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
 */const FS=new ml(5e3,15e3),jS="__/auth/iframe",BS="emulator/auth/iframe",zS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$S=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WS(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Tf(e,BS):`https://${r.config.authDomain}/${jS}`,i={apiKey:e.apiKey,appName:r.name,v:As},o=$S.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${pl(i).slice(1)}`}async function HS(r){const e=await US(r),t=cr().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:WS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zS,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=ur(r,"network-request-failed"),f=cr().setTimeout(()=>{l(h)},FS.get());function g(){cr().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const qS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GS=500,KS=600,QS="_blank",XS="http://localhost";class ay{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YS(r,e,t,i=GS,o=KS){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g=Object.assign(Object.assign({},qS),{width:i.toString(),height:o.toString(),top:l,left:h}),_=Wt().toLowerCase();t&&(f=G_(_)?QS:t),H_(_)&&(e=e||XS,g.scrollbars="yes");const w=Object.entries(g).reduce((S,[V,$])=>`${S}${V}=${$},`,"");if(vI(_)&&f!=="_self")return JS(e||"",f),new ay(null);const T=window.open(e||"",f,w);ye(T,r,"popup-blocked");try{T.focus()}catch{}return new ay(T)}function JS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const ZS="__/auth/handler",eA="emulator/auth/handler",tA=encodeURIComponent("fac");async function ly(r,e,t,i,o,l){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:As,eventId:o};if(e instanceof rv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",BT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof yl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await r._getAppCheckToken(),_=g?`#${tA}=${encodeURIComponent(g)}`:"";return`${nA(r)}?${pl(f).slice(1)}${_}`}function nA({config:r}){return r.emulator?Tf(r,eA):`https://${r.authDomain}/${ZS}`}/**
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
 */const kd="webStorageSupport";class rA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hv,this._completeRedirectFn=kS,this._overrideRedirectResult=SS}async _openPopup(e,t,i,o){var l;Br((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await ly(e,t,i,Wd(),o);return YS(e,h,kf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await ly(e,t,i,Wd(),o);return oS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Br(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await HS(e),i=new PS(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(kd,{type:kd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[kd];h!==void 0&&t(!!h),Gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=VS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return J_()||q_()||Sf()}}const iA=rA;var uy="@firebase/auth",cy="1.10.8";/**
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
 */class sA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aA(r){_s(new Ri("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z_(r)},_=new AI(i,o,l,g);return LI(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),_s(new Ri("auth-internal",e=>{const t=Rs(e.getProvider("auth").getImmediate());return(i=>new sA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(uy,cy,oA(r)),lr(uy,cy,"esm2017")}/**
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
 */const lA=300,uA=N_("authIdTokenMaxAge")||lA;let hy=null;const cA=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>uA)return;const o=t==null?void 0:t.token;hy!==o&&(hy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function hA(r=vf()){const e=Rc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=VI(r,{popupRedirectResolver:iA,persistence:[mS,uv,hv]}),i=N_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=cA(l.toString());eS(t,h,()=>h(t.currentUser)),ZI(t,f=>h(f))}}const o=k_("auth");return o&&bI(t,`http://${o}`),t}function dA(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}RI({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=ur("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",dA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aA("Browser");/**
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
 */const _v="firebasestorage.googleapis.com",vv="storageBucket",fA=120*1e3,pA=600*1e3;/**
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
 */class it extends yr{constructor(e,t,i=0){super(Cd(e),`Firebase Storage: ${t} (${Cd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Cd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function Cd(r){return"storage/"+r}function Pf(){const r="An unknown error occurred, please check the error payload for server response.";return new it(rt.UNKNOWN,r)}function mA(r){return new it(rt.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function gA(r){return new it(rt.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function yA(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(rt.UNAUTHENTICATED,r)}function _A(){return new it(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vA(r){return new it(rt.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function wA(){return new it(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function EA(){return new it(rt.CANCELED,"User canceled the upload/download.")}function TA(r){return new it(rt.INVALID_URL,"Invalid URL '"+r+"'.")}function IA(r){return new it(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function SA(){return new it(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+vv+"' property when initializing the app?")}function AA(){return new it(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function RA(){return new it(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function kA(r){return new it(rt.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Kd(r){return new it(rt.INVALID_ARGUMENT,r)}function wv(){return new it(rt.APP_DELETED,"The Firebase app was deleted.")}function CA(r){return new it(rt.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xa(r,e){return new it(rt.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Ba(r){throw new it(rt.INTERNAL_ERROR,"Internal error: "+r)}/**
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
 */class Xt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Xt.makeFromUrl(e,t)}catch{return new Xt(e,"")}if(i.path==="")return i;throw IA(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(le){le.path.charAt(le.path.length-1)==="/"&&(le.path_=le.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function _(le){le.path_=decodeURIComponent(le.path)}const w="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",V=new RegExp(`^https?://${T}/${w}/b/${o}/o${S}`,"i"),$={bucket:1,path:3},H=t===_v?"(?:storage.googleapis.com|storage.cloud.google.com)":t,z="([^?#]*)",Y=new RegExp(`^https?://${H}/${o}/${z}`,"i"),ne=[{regex:f,indices:g,postModify:l},{regex:V,indices:$,postModify:_},{regex:Y,indices:{bucket:1,path:2},postModify:_}];for(let le=0;le<ne.length;le++){const Ce=ne[le],ve=Ce.regex.exec(e);if(ve){const P=ve[Ce.indices.bucket];let I=ve[Ce.indices.path];I||(I=""),i=new Xt(P,I),Ce.postModify(i);break}}if(i==null)throw TA(e);return i}}class PA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function NA(r,e,t){let i=1,o=null,l=null,h=!1,f=0;function g(){return f===2}let _=!1;function w(...z){_||(_=!0,e.apply(null,z))}function T(z){o=setTimeout(()=>{o=null,r(V,g())},z)}function S(){l&&clearTimeout(l)}function V(z,...Y){if(_){S();return}if(z){S(),w.call(null,z,...Y);return}if(g()||h){S(),w.call(null,z,...Y);return}i<64&&(i*=2);let ne;f===1?(f=2,ne=0):ne=(i+Math.random())*1e3,T(ne)}let $=!1;function H(z){$||($=!0,S(),!_&&(o!==null?(z||(f=2),clearTimeout(o),T(0)):z||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,H(!0)},t),H}function xA(r){r(!1)}/**
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
 */function DA(r){return r!==void 0}function OA(r){return typeof r=="object"&&!Array.isArray(r)}function Nf(r){return typeof r=="string"||r instanceof String}function dy(r){return xf()&&r instanceof Blob}function xf(){return typeof Blob<"u"}function Qd(r,e,t,i){if(i<e)throw Kd(`Invalid value for '${r}'. Expected ${e} or greater.`);if(i>t)throw Kd(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
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
 */function vl(r,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${r}`}function Ev(r){const e=encodeURIComponent;let t="?";for(const i in r)if(r.hasOwnProperty(i)){const o=e(i)+"="+e(r[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var ps;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(ps||(ps={}));/**
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
 */function VA(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
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
 */class LA{constructor(e,t,i,o,l,h,f,g,_,w,T,S=!0,V=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=w,this.connectionFactory_=T,this.retry=S,this.isUsingEmulator=V,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(($,H)=>{this.resolve_=$,this.reject_=H,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Bu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const g=f.loaded,_=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===ps.NO_ERROR,g=l.getStatus();if(!f||VA(g,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===ps.ABORT;i(!1,new Bu(!1,null,w));return}const _=this.successCodes_.indexOf(g)!==-1;i(!0,new Bu(_,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());DA(g)?l(g):l()}catch(g){h(g)}else if(f!==null){const g=Pf();g.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,g)):h(g)}else if(o.canceled){const g=this.appDelete_?wv():EA();h(g)}else{const g=wA();h(g)}};this.canceled_?t(!1,new Bu(!1,null,!0)):this.backoffId_=NA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Bu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function bA(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function MA(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UA(r,e){e&&(r["X-Firebase-GMPID"]=e)}function FA(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function jA(r,e,t,i,o,l,h=!0,f=!1){const g=Ev(r.urlParams),_=r.url+g,w=Object.assign({},r.headers);return UA(w,e),bA(w,t),MA(w,l),FA(w,i),new LA(_,r.method,w,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,f)}/**
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
 */function BA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function zA(...r){const e=BA();if(e!==void 0){const t=new e;for(let i=0;i<r.length;i++)t.append(r[i]);return t.getBlob()}else{if(xf())return new Blob(r);throw new it(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function $A(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
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
 */function WA(r){if(typeof atob>"u")throw kA("base-64");return atob(r)}/**
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
 */const ar={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Pd{constructor(e,t){this.data=e,this.contentType=t||null}}function HA(r,e){switch(r){case ar.RAW:return new Pd(Tv(e));case ar.BASE64:case ar.BASE64URL:return new Pd(Iv(r,e));case ar.DATA_URL:return new Pd(GA(e),KA(e))}throw Pf()}function Tv(r){const e=[];for(let t=0;t<r.length;t++){let i=r.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=r.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function qA(r){let e;try{e=decodeURIComponent(r)}catch{throw Xa(ar.DATA_URL,"Malformed data URL.")}return Tv(e)}function Iv(r,e){switch(r){case ar.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Xa(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case ar.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Xa(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=WA(e)}catch(o){throw o.message.includes("polyfill")?o:Xa(r,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class Sv{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Xa(ar.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=QA(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function GA(r){const e=new Sv(r);return e.base64?Iv(ar.BASE64,e.rest):qA(e.rest)}function KA(r){return new Sv(r).contentType}function QA(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
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
 */class wi{constructor(e,t){let i=0,o="";dy(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(dy(this.data_)){const i=this.data_,o=$A(i,e,t);return o===null?null:new wi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new wi(i,!0)}}static getBlob(...e){if(xf()){const t=e.map(i=>i instanceof wi?i.data_:i);return new wi(zA.apply(null,t))}else{const t=e.map(h=>Nf(h)?HA(ar.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new wi(o,!0)}}uploadData(){return this.data_}}/**
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
 */function Df(r){let e;try{e=JSON.parse(r)}catch{return null}return OA(e)?e:null}/**
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
 */function XA(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function YA(r,e){const t=e.split("/").filter(i=>i.length>0).join("/");return r.length===0?t:r+"/"+t}function Av(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */function JA(r,e){return e}class Qt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||JA}}let zu=null;function ZA(r){return!Nf(r)||r.length<2?r:Av(r)}function Rv(){if(zu)return zu;const r=[];r.push(new Qt("bucket")),r.push(new Qt("generation")),r.push(new Qt("metageneration")),r.push(new Qt("name","fullPath",!0));function e(l,h){return ZA(h)}const t=new Qt("name");t.xform=e,r.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Qt("size");return o.xform=i,r.push(o),r.push(new Qt("timeCreated")),r.push(new Qt("updated")),r.push(new Qt("md5Hash",null,!0)),r.push(new Qt("cacheControl",null,!0)),r.push(new Qt("contentDisposition",null,!0)),r.push(new Qt("contentEncoding",null,!0)),r.push(new Qt("contentLanguage",null,!0)),r.push(new Qt("contentType",null,!0)),r.push(new Qt("metadata","customMetadata",!0)),zu=r,zu}function e1(r,e){function t(){const i=r.bucket,o=r.fullPath,l=new Xt(i,o);return e._makeStorageReference(l)}Object.defineProperty(r,"ref",{get:t})}function t1(r,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return e1(i,r),i}function kv(r,e,t){const i=Df(e);return i===null?null:t1(r,i,t)}function n1(r,e,t,i){const o=Df(e);if(o===null||!Nf(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(_=>{const w=r.bucket,T=r.fullPath,S="/b/"+h(w)+"/o/"+h(T),V=vl(S,t,i),$=Ev({alt:"media",token:_});return V+$})[0]}function r1(r,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=r[l.local])}return JSON.stringify(t)}/**
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
 */const fy="prefixes",py="items";function i1(r,e,t){const i={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[fy])for(const o of t[fy]){const l=o.replace(/\/$/,""),h=r._makeStorageReference(new Xt(e,l));i.prefixes.push(h)}if(t[py])for(const o of t[py]){const l=r._makeStorageReference(new Xt(e,o.name));i.items.push(l)}return i}function s1(r,e,t){const i=Df(t);return i===null?null:i1(r,e,i)}class Nc{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Of(r){if(!r)throw Pf()}function o1(r,e){function t(i,o){const l=kv(r,o,e);return Of(l!==null),l}return t}function a1(r,e){function t(i,o){const l=s1(r,e,o);return Of(l!==null),l}return t}function l1(r,e){function t(i,o){const l=kv(r,o,e);return Of(l!==null),n1(l,o,r.host,r._protocol)}return t}function Vf(r){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=_A():o=yA():t.getStatus()===402?o=gA(r.bucket):t.getStatus()===403?o=vA(r.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function Cv(r){const e=Vf(r);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=mA(r.path)),l.serverResponse=o.serverResponse,l}return t}function u1(r,e,t,i,o){const l={};e.isRoot?l.prefix="":l.prefix=e.path+"/",t.length>0&&(l.delimiter=t),i&&(l.pageToken=i),o&&(l.maxResults=o);const h=e.bucketOnlyServerUrl(),f=vl(h,r.host,r._protocol),g="GET",_=r.maxOperationRetryTime,w=new Nc(f,g,a1(r,e.bucket),_);return w.urlParams=l,w.errorHandler=Vf(e),w}function c1(r,e,t){const i=e.fullServerUrl(),o=vl(i,r.host,r._protocol),l="GET",h=r.maxOperationRetryTime,f=new Nc(o,l,l1(r,t),h);return f.errorHandler=Cv(e),f}function h1(r,e){const t=e.fullServerUrl(),i=vl(t,r.host,r._protocol),o="DELETE",l=r.maxOperationRetryTime;function h(g,_){}const f=new Nc(i,o,h,l);return f.successCodes=[200,204],f.errorHandler=Cv(e),f}function d1(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function f1(r,e,t){const i=Object.assign({},t);return i.fullPath=r.path,i.size=e.size(),i.contentType||(i.contentType=d1(null,e)),i}function p1(r,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let ne="";for(let le=0;le<2;le++)ne=ne+Math.random().toString().slice(2);return ne}const g=f();h["Content-Type"]="multipart/related; boundary="+g;const _=f1(e,i,o),w=r1(_,t),T="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+w+`\r
--`+g+`\r
Content-Type: `+_.contentType+`\r
\r
`,S=`\r
--`+g+"--",V=wi.getBlob(T,i,S);if(V===null)throw AA();const $={name:_.fullPath},H=vl(l,r.host,r._protocol),z="POST",Y=r.maxUploadRetryTime,te=new Nc(H,z,o1(r,t),Y);return te.urlParams=$,te.headers=h,te.body=V.uploadData(),te.errorHandler=Vf(e),te}class m1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ps.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ps.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ps.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o,l){if(this.sent_)throw Ba("cannot .send() more than once");if(Vi(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const h in l)l.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,l[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ba("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ba("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ba("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ba("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class g1 extends m1{initXhr(){this.xhr_.responseType="text"}}function xc(){return new g1}/**
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
 */class Es{constructor(e,t){this._service=e,t instanceof Xt?this._location=t:this._location=Xt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Es(e,t)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Av(this._location.path)}get storage(){return this._service}get parent(){const e=XA(this._location.path);if(e===null)return null;const t=new Xt(this._location.bucket,e);return new Es(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw CA(e)}}function y1(r,e,t){r._throwIfRoot("uploadBytes");const i=p1(r.storage,r._location,Rv(),new wi(e,!0),t);return r.storage.makeRequestWithTokens(i,xc).then(o=>({metadata:o,ref:r}))}function _1(r){const e={prefixes:[],items:[]};return Pv(r,e).then(()=>e)}async function Pv(r,e,t){const o=await v1(r,{pageToken:t});e.prefixes.push(...o.prefixes),e.items.push(...o.items),o.nextPageToken!=null&&await Pv(r,e,o.nextPageToken)}function v1(r,e){e!=null&&typeof e.maxResults=="number"&&Qd("options.maxResults",1,1e3,e.maxResults);const t=e||{},i=u1(r.storage,r._location,"/",t.pageToken,t.maxResults);return r.storage.makeRequestWithTokens(i,xc)}function w1(r){r._throwIfRoot("getDownloadURL");const e=c1(r.storage,r._location,Rv());return r.storage.makeRequestWithTokens(e,xc).then(t=>{if(t===null)throw RA();return t})}function E1(r){r._throwIfRoot("deleteObject");const e=h1(r.storage,r._location);return r.storage.makeRequestWithTokens(e,xc)}function T1(r,e){const t=YA(r._location.path,e),i=new Xt(r._location.bucket,t);return new Es(r.storage,i)}/**
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
 */function I1(r){return/^[A-Za-z]+:\/\//.test(r)}function S1(r,e){return new Es(r,e)}function Nv(r,e){if(r instanceof Lf){const t=r;if(t._bucket==null)throw SA();const i=new Es(t,t._bucket);return e!=null?Nv(i,e):i}else return e!==void 0?T1(r,e):r}function A1(r,e){if(e&&I1(e)){if(r instanceof Lf)return S1(r,e);throw Kd("To use ref(service, url), the first argument must be a Storage instance.")}else return Nv(r,e)}function my(r,e){const t=e==null?void 0:e[vv];return t==null?null:Xt.makeFromBucketSpec(t,r)}function R1(r,e,t,i={}){r.host=`${e}:${t}`;const o=Vi(e);o&&(mf(`https://${r.host}/b`),gf("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(r._overrideAuthToken=typeof l=="string"?l:x_(l,r.app.options.projectId))}class Lf{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=_v,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=fA,this._maxUploadRetryTime=pA,this._requests=new Set,o!=null?this._bucket=Xt.makeFromBucketSpec(o,this._host):this._bucket=my(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=my(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Es(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new PA(wv());{const h=jA(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const gy="@firebase/storage",yy="0.13.14";/**
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
 */const xv="storage";function k1(r,e,t){return r=nt(r),y1(r,e,t)}function C1(r){return r=nt(r),_1(r)}function P1(r){return r=nt(r),w1(r)}function N1(r){return r=nt(r),E1(r)}function Nd(r,e){return r=nt(r),A1(r,e)}function x1(r=vf(),e){r=nt(r);const i=Rc(r,xv).getImmediate({identifier:e}),o=C_("storage");return o&&D1(i,...o),i}function D1(r,e,t,i={}){R1(r,e,t,i)}function O1(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),i=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new Lf(t,i,o,e,As)}function V1(){_s(new Ri(xv,O1,"PUBLIC").setMultipleInstances(!0)),lr(gy,yy,""),lr(gy,yy,"esm2017")}V1();var L1="firebase",b1="11.10.0";/**
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
 */lr(L1,b1,"app");var _y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si,Dv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function R(){}R.prototype=I.prototype,P.D=I.prototype,P.prototype=new R,P.prototype.constructor=P,P.C=function(N,D,b){for(var k=Array(arguments.length-2),st=2;st<arguments.length;st++)k[st-2]=arguments[st];return I.prototype[D].apply(N,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,I,R){R||(R=0);var N=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)N[D]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(D=0;16>D;++D)N[D]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=P.g[0],R=P.g[1],D=P.g[2];var b=P.g[3],k=I+(b^R&(D^b))+N[0]+3614090360&4294967295;I=R+(k<<7&4294967295|k>>>25),k=b+(D^I&(R^D))+N[1]+3905402710&4294967295,b=I+(k<<12&4294967295|k>>>20),k=D+(R^b&(I^R))+N[2]+606105819&4294967295,D=b+(k<<17&4294967295|k>>>15),k=R+(I^D&(b^I))+N[3]+3250441966&4294967295,R=D+(k<<22&4294967295|k>>>10),k=I+(b^R&(D^b))+N[4]+4118548399&4294967295,I=R+(k<<7&4294967295|k>>>25),k=b+(D^I&(R^D))+N[5]+1200080426&4294967295,b=I+(k<<12&4294967295|k>>>20),k=D+(R^b&(I^R))+N[6]+2821735955&4294967295,D=b+(k<<17&4294967295|k>>>15),k=R+(I^D&(b^I))+N[7]+4249261313&4294967295,R=D+(k<<22&4294967295|k>>>10),k=I+(b^R&(D^b))+N[8]+1770035416&4294967295,I=R+(k<<7&4294967295|k>>>25),k=b+(D^I&(R^D))+N[9]+2336552879&4294967295,b=I+(k<<12&4294967295|k>>>20),k=D+(R^b&(I^R))+N[10]+4294925233&4294967295,D=b+(k<<17&4294967295|k>>>15),k=R+(I^D&(b^I))+N[11]+2304563134&4294967295,R=D+(k<<22&4294967295|k>>>10),k=I+(b^R&(D^b))+N[12]+1804603682&4294967295,I=R+(k<<7&4294967295|k>>>25),k=b+(D^I&(R^D))+N[13]+4254626195&4294967295,b=I+(k<<12&4294967295|k>>>20),k=D+(R^b&(I^R))+N[14]+2792965006&4294967295,D=b+(k<<17&4294967295|k>>>15),k=R+(I^D&(b^I))+N[15]+1236535329&4294967295,R=D+(k<<22&4294967295|k>>>10),k=I+(D^b&(R^D))+N[1]+4129170786&4294967295,I=R+(k<<5&4294967295|k>>>27),k=b+(R^D&(I^R))+N[6]+3225465664&4294967295,b=I+(k<<9&4294967295|k>>>23),k=D+(I^R&(b^I))+N[11]+643717713&4294967295,D=b+(k<<14&4294967295|k>>>18),k=R+(b^I&(D^b))+N[0]+3921069994&4294967295,R=D+(k<<20&4294967295|k>>>12),k=I+(D^b&(R^D))+N[5]+3593408605&4294967295,I=R+(k<<5&4294967295|k>>>27),k=b+(R^D&(I^R))+N[10]+38016083&4294967295,b=I+(k<<9&4294967295|k>>>23),k=D+(I^R&(b^I))+N[15]+3634488961&4294967295,D=b+(k<<14&4294967295|k>>>18),k=R+(b^I&(D^b))+N[4]+3889429448&4294967295,R=D+(k<<20&4294967295|k>>>12),k=I+(D^b&(R^D))+N[9]+568446438&4294967295,I=R+(k<<5&4294967295|k>>>27),k=b+(R^D&(I^R))+N[14]+3275163606&4294967295,b=I+(k<<9&4294967295|k>>>23),k=D+(I^R&(b^I))+N[3]+4107603335&4294967295,D=b+(k<<14&4294967295|k>>>18),k=R+(b^I&(D^b))+N[8]+1163531501&4294967295,R=D+(k<<20&4294967295|k>>>12),k=I+(D^b&(R^D))+N[13]+2850285829&4294967295,I=R+(k<<5&4294967295|k>>>27),k=b+(R^D&(I^R))+N[2]+4243563512&4294967295,b=I+(k<<9&4294967295|k>>>23),k=D+(I^R&(b^I))+N[7]+1735328473&4294967295,D=b+(k<<14&4294967295|k>>>18),k=R+(b^I&(D^b))+N[12]+2368359562&4294967295,R=D+(k<<20&4294967295|k>>>12),k=I+(R^D^b)+N[5]+4294588738&4294967295,I=R+(k<<4&4294967295|k>>>28),k=b+(I^R^D)+N[8]+2272392833&4294967295,b=I+(k<<11&4294967295|k>>>21),k=D+(b^I^R)+N[11]+1839030562&4294967295,D=b+(k<<16&4294967295|k>>>16),k=R+(D^b^I)+N[14]+4259657740&4294967295,R=D+(k<<23&4294967295|k>>>9),k=I+(R^D^b)+N[1]+2763975236&4294967295,I=R+(k<<4&4294967295|k>>>28),k=b+(I^R^D)+N[4]+1272893353&4294967295,b=I+(k<<11&4294967295|k>>>21),k=D+(b^I^R)+N[7]+4139469664&4294967295,D=b+(k<<16&4294967295|k>>>16),k=R+(D^b^I)+N[10]+3200236656&4294967295,R=D+(k<<23&4294967295|k>>>9),k=I+(R^D^b)+N[13]+681279174&4294967295,I=R+(k<<4&4294967295|k>>>28),k=b+(I^R^D)+N[0]+3936430074&4294967295,b=I+(k<<11&4294967295|k>>>21),k=D+(b^I^R)+N[3]+3572445317&4294967295,D=b+(k<<16&4294967295|k>>>16),k=R+(D^b^I)+N[6]+76029189&4294967295,R=D+(k<<23&4294967295|k>>>9),k=I+(R^D^b)+N[9]+3654602809&4294967295,I=R+(k<<4&4294967295|k>>>28),k=b+(I^R^D)+N[12]+3873151461&4294967295,b=I+(k<<11&4294967295|k>>>21),k=D+(b^I^R)+N[15]+530742520&4294967295,D=b+(k<<16&4294967295|k>>>16),k=R+(D^b^I)+N[2]+3299628645&4294967295,R=D+(k<<23&4294967295|k>>>9),k=I+(D^(R|~b))+N[0]+4096336452&4294967295,I=R+(k<<6&4294967295|k>>>26),k=b+(R^(I|~D))+N[7]+1126891415&4294967295,b=I+(k<<10&4294967295|k>>>22),k=D+(I^(b|~R))+N[14]+2878612391&4294967295,D=b+(k<<15&4294967295|k>>>17),k=R+(b^(D|~I))+N[5]+4237533241&4294967295,R=D+(k<<21&4294967295|k>>>11),k=I+(D^(R|~b))+N[12]+1700485571&4294967295,I=R+(k<<6&4294967295|k>>>26),k=b+(R^(I|~D))+N[3]+2399980690&4294967295,b=I+(k<<10&4294967295|k>>>22),k=D+(I^(b|~R))+N[10]+4293915773&4294967295,D=b+(k<<15&4294967295|k>>>17),k=R+(b^(D|~I))+N[1]+2240044497&4294967295,R=D+(k<<21&4294967295|k>>>11),k=I+(D^(R|~b))+N[8]+1873313359&4294967295,I=R+(k<<6&4294967295|k>>>26),k=b+(R^(I|~D))+N[15]+4264355552&4294967295,b=I+(k<<10&4294967295|k>>>22),k=D+(I^(b|~R))+N[6]+2734768916&4294967295,D=b+(k<<15&4294967295|k>>>17),k=R+(b^(D|~I))+N[13]+1309151649&4294967295,R=D+(k<<21&4294967295|k>>>11),k=I+(D^(R|~b))+N[4]+4149444226&4294967295,I=R+(k<<6&4294967295|k>>>26),k=b+(R^(I|~D))+N[11]+3174756917&4294967295,b=I+(k<<10&4294967295|k>>>22),k=D+(I^(b|~R))+N[2]+718787259&4294967295,D=b+(k<<15&4294967295|k>>>17),k=R+(b^(D|~I))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(D+(k<<21&4294967295|k>>>11))&4294967295,P.g[2]=P.g[2]+D&4294967295,P.g[3]=P.g[3]+b&4294967295}i.prototype.u=function(P,I){I===void 0&&(I=P.length);for(var R=I-this.blockSize,N=this.B,D=this.h,b=0;b<I;){if(D==0)for(;b<=R;)o(this,P,b),b+=this.blockSize;if(typeof P=="string"){for(;b<I;)if(N[D++]=P.charCodeAt(b++),D==this.blockSize){o(this,N),D=0;break}}else for(;b<I;)if(N[D++]=P[b++],D==this.blockSize){o(this,N),D=0;break}}this.h=D,this.o+=I},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;var R=8*this.o;for(I=P.length-8;I<P.length;++I)P[I]=R&255,R/=256;for(this.u(P),P=Array(16),I=R=0;4>I;++I)for(var N=0;32>N;N+=8)P[R++]=this.g[I]>>>N&255;return P};function l(P,I){var R=f;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=I(P)}function h(P,I){this.h=I;for(var R=[],N=!0,D=P.length-1;0<=D;D--){var b=P[D]|0;N&&b==I||(R[D]=b,N=!1)}this.g=R}var f={};function g(P){return-128<=P&&128>P?l(P,function(I){return new h([I|0],0>I?-1:0)}):new h([P|0],0>P?-1:0)}function _(P){if(isNaN(P)||!isFinite(P))return T;if(0>P)return z(_(-P));for(var I=[],R=1,N=0;P>=R;N++)I[N]=P/R|0,R*=4294967296;return new h(I,0)}function w(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return z(w(P.substring(1),I));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(I,8)),N=T,D=0;D<P.length;D+=8){var b=Math.min(8,P.length-D),k=parseInt(P.substring(D,D+b),I);8>b?(b=_(Math.pow(I,b)),N=N.j(b).add(_(k))):(N=N.j(R),N=N.add(_(k)))}return N}var T=g(0),S=g(1),V=g(16777216);r=h.prototype,r.m=function(){if(H(this))return-z(this).m();for(var P=0,I=1,R=0;R<this.g.length;R++){var N=this.i(R);P+=(0<=N?N:4294967296+N)*I,I*=4294967296}return P},r.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if($(this))return"0";if(H(this))return"-"+z(this).toString(P);for(var I=_(Math.pow(P,6)),R=this,N="";;){var D=le(R,I).g;R=Y(R,D.j(I));var b=((0<R.g.length?R.g[0]:R.h)>>>0).toString(P);if(R=D,$(R))return b+N;for(;6>b.length;)b="0"+b;N=b+N}},r.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function $(P){if(P.h!=0)return!1;for(var I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function H(P){return P.h==-1}r.l=function(P){return P=Y(this,P),H(P)?-1:$(P)?0:1};function z(P){for(var I=P.g.length,R=[],N=0;N<I;N++)R[N]=~P.g[N];return new h(R,~P.h).add(S)}r.abs=function(){return H(this)?z(this):this},r.add=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0,D=0;D<=I;D++){var b=N+(this.i(D)&65535)+(P.i(D)&65535),k=(b>>>16)+(this.i(D)>>>16)+(P.i(D)>>>16);N=k>>>16,b&=65535,k&=65535,R[D]=k<<16|b}return new h(R,R[R.length-1]&-2147483648?-1:0)};function Y(P,I){return P.add(z(I))}r.j=function(P){if($(this)||$(P))return T;if(H(this))return H(P)?z(this).j(z(P)):z(z(this).j(P));if(H(P))return z(this.j(z(P)));if(0>this.l(V)&&0>P.l(V))return _(this.m()*P.m());for(var I=this.g.length+P.g.length,R=[],N=0;N<2*I;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<P.g.length;D++){var b=this.i(N)>>>16,k=this.i(N)&65535,st=P.i(D)>>>16,Lt=P.i(D)&65535;R[2*N+2*D]+=k*Lt,te(R,2*N+2*D),R[2*N+2*D+1]+=b*Lt,te(R,2*N+2*D+1),R[2*N+2*D+1]+=k*st,te(R,2*N+2*D+1),R[2*N+2*D+2]+=b*st,te(R,2*N+2*D+2)}for(N=0;N<I;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=I;N<2*I;N++)R[N]=0;return new h(R,0)};function te(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function ne(P,I){this.g=P,this.h=I}function le(P,I){if($(I))throw Error("division by zero");if($(P))return new ne(T,T);if(H(P))return I=le(z(P),I),new ne(z(I.g),z(I.h));if(H(I))return I=le(P,z(I)),new ne(z(I.g),I.h);if(30<P.g.length){if(H(P)||H(I))throw Error("slowDivide_ only works with positive integers.");for(var R=S,N=I;0>=N.l(P);)R=Ce(R),N=Ce(N);var D=ve(R,1),b=ve(N,1);for(N=ve(N,2),R=ve(R,2);!$(N);){var k=b.add(N);0>=k.l(P)&&(D=D.add(R),b=k),N=ve(N,1),R=ve(R,1)}return I=Y(P,D.j(I)),new ne(D,I)}for(D=T;0<=P.l(I);){for(R=Math.max(1,Math.floor(P.m()/I.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),b=_(R),k=b.j(I);H(k)||0<k.l(P);)R-=N,b=_(R),k=b.j(I);$(b)&&(b=S),D=D.add(b),P=Y(P,k)}return new ne(D,P)}r.A=function(P){return le(this,P).h},r.and=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)&P.i(N);return new h(R,this.h&P.h)},r.or=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)|P.i(N);return new h(R,this.h|P.h)},r.xor=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)^P.i(N);return new h(R,this.h^P.h)};function Ce(P){for(var I=P.g.length+1,R=[],N=0;N<I;N++)R[N]=P.i(N)<<1|P.i(N-1)>>>31;return new h(R,P.h)}function ve(P,I){var R=I>>5;I%=32;for(var N=P.g.length-R,D=[],b=0;b<N;b++)D[b]=0<I?P.i(b+R)>>>I|P.i(b+R+1)<<32-I:P.i(b+R);return new h(D,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Dv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Si=h}).apply(typeof _y<"u"?_y:typeof self<"u"?self:typeof window<"u"?window:{});var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ov,Wa,Vv,Zu,Xd,Lv,bv,Mv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof $u=="object"&&$u];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var y=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in y))break e;y=y[M]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,E=!1,M={next:function(){if(!E&&y<u.length){var B=y++;return{value:p(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function w(u,p,y){return u.call.apply(u.bind,arguments)}function T(u,p,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),u.apply(p,M)}}return function(){return u.apply(p,arguments)}}function S(u,p,y){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,S.apply(null,arguments)}function V(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function $(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,M,B){for(var Z=Array(arguments.length-2),je=2;je<arguments.length;je++)Z[je-2]=arguments[je];return p.prototype[M].apply(E,Z)}}function H(u){const p=u.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function z(u,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const M=u.length||0,B=E.length||0;u.length=M+B;for(let Z=0;Z<B;Z++)u[M+Z]=E[Z]}else u.push(E)}}class Y{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function te(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function le(u){return le[" "](u),u}le[" "]=function(){};var Ce=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function ve(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function P(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function I(u){const p={};for(const y in u)p[y]=u[y];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,p){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)u[y]=E[y];for(let B=0;B<R.length;B++)y=R[B],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function D(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function b(u){f.setTimeout(()=>{throw u},0)}function k(){var u=pe;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class st{constructor(){this.h=this.g=null}add(p,y){const E=Lt.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Lt=new Y(()=>new bt,u=>u.reset());class bt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,ee=!1,pe=new st,oe=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(L)}};var L=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(y){b(y)}var p=Lt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Se=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function Re(u,p){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Ce){e:{try{le(p.nodeName);var M=!0;break e}catch{}M=!1}M||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}$(Re,de);var De={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,p,y,E,M){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=M,this.key=++Ue,this.da=this.fa=!1}function Et(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function _r(u){this.src=u,this.g={},this.h=0}_r.prototype.add=function(u,p,y,E,M){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var Z=Wr(u,p,E,M);return-1<Z?(p=u[Z],y||(p.fa=!1)):(p=new $e(p,this.src,B,!!E,M),p.fa=y,u.push(p)),p};function xs(u,p){var y=p.type;if(y in u.g){var E=u.g[y],M=Array.prototype.indexOf.call(E,p,void 0),B;(B=0<=M)&&Array.prototype.splice.call(E,M,1),B&&(Et(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Wr(u,p,y,E){for(var M=0;M<u.length;++M){var B=u[M];if(!B.da&&B.listener==p&&B.capture==!!y&&B.ha==E)return M}return-1}var Ui="closure_lm_"+(1e6*Math.random()|0),Ds={};function qo(u,p,y,E,M){if(Array.isArray(p)){for(var B=0;B<p.length;B++)qo(u,p[B],y,E,M);return null}return y=Qo(y),u&&u[Me]?u.K(p,y,_(E)?!!E.capture:!1,M):Go(u,p,y,!1,E,M)}function Go(u,p,y,E,M,B){if(!p)throw Error("Invalid event type");var Z=_(M)?!!M.capture:!!M,je=Vs(u);if(je||(u[Ui]=je=new _r(u)),y=je.add(p,y,E,Z,B),y.proxy)return y;if(E=Al(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Se||(M=Z),M===void 0&&(M=!1),u.addEventListener(p.toString(),E,M);else if(u.attachEvent)u.attachEvent(wr(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Al(){function u(y){return p.call(u.src,u.listener,y)}const p=Ko;return u}function Os(u,p,y,E,M){if(Array.isArray(p))for(var B=0;B<p.length;B++)Os(u,p[B],y,E,M);else E=_(E)?!!E.capture:!!E,y=Qo(y),u&&u[Me]?(u=u.i,p=String(p).toString(),p in u.g&&(B=u.g[p],y=Wr(B,y,E,M),-1<y&&(Et(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete u.g[p],u.h--)))):u&&(u=Vs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Wr(p,y,E,M)),(y=-1<u?p[u]:null)&&vr(y))}function vr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Me])xs(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(wr(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Vs(p))?(xs(y,u),y.h==0&&(y.src=null,p[Ui]=null)):Et(u)}}}function wr(u){return u in Ds?Ds[u]:Ds[u]="on"+u}function Ko(u,p){if(u.da)u=!0;else{p=new Re(p,this);var y=u.listener,E=u.ha||u.src;u.fa&&vr(u),u=y.call(E,p)}return u}function Vs(u){return u=u[Ui],u instanceof _r?u:null}var Ls="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qo(u){return typeof u=="function"?u:(u[Ls]||(u[Ls]=function(p){return u.handleEvent(p)}),u[Ls])}function mt(){G.call(this),this.i=new _r(this),this.M=this,this.F=null}$(mt,G),mt.prototype[Me]=!0,mt.prototype.removeEventListener=function(u,p,y,E){Os(this,u,p,y,E)};function gt(u,p){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new de(p,u);else if(p instanceof de)p.target=p.target||u;else{var M=p;p=new de(E,u),N(p,M)}if(M=!0,y)for(var B=y.length-1;0<=B;B--){var Z=p.g=y[B];M=Er(Z,E,!0,p)&&M}if(Z=p.g=u,M=Er(Z,E,!0,p)&&M,M=Er(Z,E,!1,p)&&M,y)for(B=0;B<y.length;B++)Z=p.g=y[B],M=Er(Z,E,!1,p)&&M}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],E=0;E<y.length;E++)Et(y[E]);delete u.g[p],u.h--}}this.F=null},mt.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},mt.prototype.L=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function Er(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,B=0;B<p.length;++B){var Z=p[B];if(Z&&!Z.da&&Z.capture==y){var je=Z.listener,yt=Z.ha||Z.src;Z.fa&&xs(u.i,Z),M=je.call(yt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Xo(u,p,y){if(typeof u=="function")y&&(u=S(u,y));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Hr(u){u.g=Xo(()=>{u.g=null,u.i&&(u.i=!1,Hr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Fi extends G{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Hr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(u){G.call(this),this.h=u,this.g={}}$(ji,G);var Yo=[];function Jo(u){ve(u.g,function(p,y){this.g.hasOwnProperty(y)&&vr(p)},u),u.g={}}ji.prototype.N=function(){ji.aa.N.call(this),Jo(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zo=f.JSON.stringify,ea=f.JSON.parse,ta=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Bi(){}Bi.prototype.h=null;function bs(u){return u.h||(u.h=u.i())}function Ms(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qn(){de.call(this,"d")}$(Qn,de);function Us(){de.call(this,"c")}$(Us,de);var Xn={},na=null;function zi(){return na=na||new mt}Xn.La="serverreachability";function ra(u){de.call(this,Xn.La,u)}$(ra,de);function Tr(u){const p=zi();gt(p,new ra(p))}Xn.STAT_EVENT="statevent";function ia(u,p){de.call(this,Xn.STAT_EVENT,u),this.stat=p}$(ia,de);function ot(u){const p=zi();gt(p,new ia(p,u))}Xn.Ma="timingevent";function Fs(u,p){de.call(this,Xn.Ma,u),this.size=p}$(Fs,de);function Cn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function $i(){this.g=!0}$i.prototype.xa=function(){this.g=!1};function Wi(u,p,y,E,M,B){u.info(function(){if(u.g)if(B)for(var Z="",je=B.split("&"),yt=0;yt<je.length;yt++){var Oe=je[yt].split("=");if(1<Oe.length){var Tt=Oe[0];Oe=Oe[1];var ct=Tt.split("_");Z=2<=ct.length&&ct[1]=="type"?Z+(Tt+"="+Oe+"&"):Z+(Tt+"=redacted&")}}else Z=null;else Z=B;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+y+`
`+Z})}function js(u,p,y,E,M,B,Z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+y+`
`+B+" "+Z})}function Pn(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Gc(u,y)+(E?" "+E:"")})}function sa(u,p){u.info(function(){return"TIMEOUT: "+p})}$i.prototype.info=function(){};function Gc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var B=M[0];if(B!="noop"&&B!="stop"&&B!="close")for(var Z=1;Z<M.length;Z++)M[Z]=""}}}}return Zo(y)}catch{return p}}var Bs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nn;function Hi(){}$(Hi,Bi),Hi.prototype.g=function(){return new XMLHttpRequest},Hi.prototype.i=function(){return{}},Nn=new Hi;function xn(u,p,y,E){this.j=u,this.i=p,this.l=y,this.R=E||1,this.U=new ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kl}function kl(){this.i=null,this.g="",this.h=!1}var oa={},zs={};function $s(u,p,y){u.L=1,u.v=Xr(un(p)),u.m=y,u.P=!0,aa(u,null)}function aa(u,p){u.F=Date.now(),We(u),u.A=un(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Jr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new kl,u.g=Hl(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Fi(S(u.Y,u,u.g),u.O)),p=u.U,y=u.g,E=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(Yo[0]=M.toString()),M=Yo);for(var B=0;B<M.length;B++){var Z=qo(y,M[B],E||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Tr(),Wi(u.i,u.u,u.A,u.l,u.R,u.m)}xn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Zt(u)==3?p.j():this.Y(u)},xn.prototype.Y=function(u){try{if(u==this.g)e:{const ct=Zt(this.g);var p=this.g.Ba();const vn=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||fa(this.g)))){this.J||ct!=4||p==7||(p==8||0>=vn?Tr(3):Tr(2)),qi(this);var y=this.g.Z();this.X=y;t:if(Cl(this)){var E=fa(this.g);u="";var M=E.length,B=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),qr(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(B&&p==M-1)});E.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,js(this.i,this.u,this.A,this.l,this.R,ct,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,yt=this.g;if((je=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(je)){var Oe=je;break t}}Oe=null}if(y=Oe)Pn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,la(this,y);else{this.o=!1,this.s=3,ot(12),yn(this),qr(this);break e}}if(this.P){y=!0;let hn;for(;!this.J&&this.C<Z.length;)if(hn=Kc(this,Z),hn==zs){ct==4&&(this.s=4,ot(14),y=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==oa){this.s=4,ot(15),Pn(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else Pn(this.i,this.l,hn,null),la(this,hn);if(Cl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||Z.length!=0||this.h.h||(this.s=1,ot(16),y=!1),this.o=this.o&&y,!y)Pn(this.i,this.l,Z,"[Invalid Chunked Response]"),yn(this),qr(this);else if(0<Z.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),ma(Tt),Tt.M=!0,ot(11))}}else Pn(this.i,this.l,Z,null),la(this,Z);ct==4&&yn(this),this.o&&!this.J&&(ct==4?eo(this.j,this):(this.o=!1,We(this)))}else Qs(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),yn(this),qr(this)}}}catch{}finally{}};function Cl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Kc(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?zs:(y=Number(p.substring(y,E)),isNaN(y)?oa:(E+=1,E+y>p.length?zs:(p=p.slice(E,E+y),u.C=E+y,p)))}xn.prototype.cancel=function(){this.J=!0,yn(this)};function We(u){u.S=Date.now()+u.I,Pl(u,u.I)}function Pl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Cn(S(u.ba,u),p)}function qi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}xn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(sa(this.i,this.A),this.L!=2&&(Tr(),ot(17)),yn(this),this.s=2,qr(this)):Pl(this,this.S-u)};function qr(u){u.j.G==0||u.J||eo(u.j,u)}function yn(u){qi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Jo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function la(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Ht(y.h,u))){if(!u.K&&Ht(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Zs(y),bn(y);else break e;Js(y),ot(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=Cn(S(y.Za,y),6e3));if(1>=xl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else kr(y,11)}else if((u.K||y.g==u)&&Zs(y),!te(p))for(M=y.Da.g.parse(p),p=0;p<M.length;p++){let Oe=M[p];if(y.T=Oe[0],Oe=Oe[1],y.G==2)if(Oe[0]=="c"){y.K=Oe[1],y.ia=Oe[2];const Tt=Oe[3];Tt!=null&&(y.la=Tt,y.j.info("VER="+y.la));const ct=Oe[4];ct!=null&&(y.Aa=ct,y.j.info("SVER="+y.Aa));const vn=Oe[5];vn!=null&&typeof vn=="number"&&0<vn&&(E=1.5*vn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const hn=u.g;if(hn){const Zi=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var B=E.h;B.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(ua(B,B.h),B.h=null))}if(E.D){const no=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;no&&(E.ya=no,ze(E.I,E.D,no))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var Z=u;if(E.qa=Wl(E,E.J?E.ia:null,E.W),Z.K){Dl(E.h,Z);var je=Z,yt=E.L;yt&&(je.I=yt),je.B&&(qi(je),We(je)),E.g=Z}else Ji(E);0<y.i.length&&er(y)}else Oe[0]!="stop"&&Oe[0]!="close"||kr(y,7);else y.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?kr(y,7):Ct(y):Oe[0]!="noop"&&y.l&&y.l.ta(Oe),y.v=0)}}Tr(4)}catch{}}var Nl=class{constructor(u,p){this.g=u,this.map=p}};function Gi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ln(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function xl(u){return u.h?1:u.g?u.g.size:0}function Ht(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function ua(u,p){u.g?u.g.add(p):u.h=p}function Dl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Gi.prototype.cancel=function(){if(this.i=Ol(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ol(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return H(u.i)}function Ws(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,E=0;E<y;E++)p.push(u[E]);return p}p=[],y=0;for(E in u)p[y++]=u[E];return p}function Hs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const E in u)p[y++]=E;return p}}}function Gr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Hs(u),E=Ws(u),M=E.length,B=0;B<M;B++)p.call(void 0,E[B],y&&y[B],u)}var Ki=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),M=null;if(0<=E){var B=u[y].substring(0,E);M=u[y].substring(E+1)}else B=u[y];p(B,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Ir(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ir){this.h=u.h,Qi(this,u.j),this.o=u.o,this.g=u.g,Kr(this,u.s),this.l=u.l;var p=u.i,y=new Yn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Qr(this,y),this.m=u.m}else u&&(p=String(u).match(Ki))?(this.h=!1,Qi(this,p[1]||"",!0),this.o=xe(p[2]||""),this.g=xe(p[3]||"",!0),Kr(this,p[4]),this.l=xe(p[5]||"",!0),Qr(this,p[6]||"",!0),this.m=xe(p[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}Ir.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Yr(p,qs,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Yr(p,qs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Yr(y,y.charAt(0)=="/"?bl:Ll,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Yr(y,ca)),u.join("")};function un(u){return new Ir(u)}function Qi(u,p,y){u.j=y?xe(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Kr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Qr(u,p,y){p instanceof Yn?(u.i=p,Jn(u.i,u.h)):(y||(p=Yr(p,Ml)),u.i=new Yn(p,u.h))}function ze(u,p,y){u.i.set(p,y)}function Xr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Yr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Vl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Vl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var qs=/[#\/\?@]/g,Ll=/[#\?:]/g,bl=/[#\?]/g,Ml=/[#\?@]/g,ca=/#/g;function Yn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function kt(u){u.g||(u.g=new Map,u.h=0,u.i&&Qc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Yn.prototype,r.add=function(u,p){kt(this),this.i=null,u=_n(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Dn(u,p){kt(u),p=_n(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function On(u,p){return kt(u),p=_n(u,p),u.g.has(p)}r.forEach=function(u,p){kt(this),this.g.forEach(function(y,E){y.forEach(function(M){u.call(p,M,E,this)},this)},this)},r.na=function(){kt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const M=u[E];for(let B=0;B<M.length;B++)y.push(p[E])}return y},r.V=function(u){kt(this);let p=[];if(typeof u=="string")On(this,u)&&(p=p.concat(this.g.get(_n(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return kt(this),this.i=null,u=_n(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Jr(u,p,y){Dn(u,p),0<y.length&&(u.i=null,u.g.set(_n(u,p),H(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const B=encodeURIComponent(String(E)),Z=this.V(E);for(E=0;E<Z.length;E++){var M=B;Z[E]!==""&&(M+="="+encodeURIComponent(String(Z[E]))),u.push(M)}}return this.i=u.join("&")};function _n(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Jn(u,p){p&&!u.j&&(kt(u),u.i=null,u.g.forEach(function(y,E){var M=E.toLowerCase();E!=M&&(Dn(this,E),Jr(this,M,y))},u)),u.j=p}function Xc(u,p){const y=new $i;if(f.Image){const E=new Image;E.onload=V(Jt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=V(Jt,y,"TestLoadImage: error",!1,p,E),E.onabort=V(Jt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=V(Jt,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Ul(u,p){const y=new $i,E=new AbortController,M=setTimeout(()=>{E.abort(),Jt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(M),B.ok?Jt(y,"TestPingServer: ok",!0,p):Jt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Jt(y,"TestPingServer: error",!1,p)})}function Jt(u,p,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function Yc(){this.g=new ta}function Fl(u,p,y){const E=y||"";try{Gr(u,function(M,B){let Z=M;_(M)&&(Z=Zo(M)),p.push(E+B+"="+encodeURIComponent(Z))})}catch(M){throw p.push(E+"type="+encodeURIComponent("_badmap")),M}}function Sr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(Sr,Bi),Sr.prototype.g=function(){return new Xi(this.l,this.j)},Sr.prototype.i=(function(u){return function(){return u}})({});function Xi(u,p){mt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Xi,mt),r=Xi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Ln(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function jl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Vn(this):Ln(this),this.readyState==3&&jl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Vn(this))},r.Qa=function(u){this.g&&(this.response=u,Vn(this))},r.ga=function(){this.g&&Vn(this)};function Vn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ln(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Ln(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ar(u){let p="";return ve(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Zr(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Ar(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,p,y))}function Xe(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Xe,mt);var Jc=/^https?$/i,ha=["POST","PUT"];r=Xe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?bs(this.o):bs(Nn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){Yi(this,B);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())y.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),M=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ha,p,void 0))||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of y)this.g.setRequestHeader(B,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ks(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Yi(this,B)}};function Yi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Gs(u),cn(u)}function Gs(u){u.A||(u.A=!0,gt(u,"complete"),gt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,gt(this,"complete"),gt(this,"abort"),cn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cn(this,!0)),Xe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?da(this):this.bb())},r.bb=function(){da(this)};function da(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Zt(u)!=4||u.Z()!=2)){if(u.u&&Zt(u)==4)Xo(u.Ea,0,u);else if(gt(u,"readystatechange"),Zt(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=Z===0){var M=String(u.D).match(Ki)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),E=!Jc.test(M?M.toLowerCase():"")}y=E}if(y)gt(u,"complete"),gt(u,"success");else{u.m=6;try{var B=2<Zt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Gs(u)}}finally{cn(u)}}}}function cn(u,p){if(u.g){Ks(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||gt(u,"ready");try{y.onreadystatechange=E}catch{}}}function Ks(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Zt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),ea(p)}};function fa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Qs(u){const p={};u=(u.g&&2<=Zt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(te(u[E]))continue;var y=D(u[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=p[M]||[];p[M]=B,B.push(y)}P(p,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function pa(u){this.Aa=0,this.i=[],this.j=new $i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,u),this.cb=Zn("retryDelaySeedMs",1e4,u),this.Wa=Zn("forwardChannelMaxRetries",2,u),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Gi(u&&u.concurrentRequestLimit),this.Da=new Yc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=pa.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,E){ot(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Wl(this,null,this.W),er(this)};function Ct(u){if(Xs(u),u.G==3){var p=u.U++,y=un(u.I);if(ze(y,"SID",u.K),ze(y,"RID",p),ze(y,"TYPE","terminate"),Rr(u,y),p=new xn(u,u.j,p),p.L=2,p.v=Xr(un(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=Hl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),We(p)}$l(u)}function bn(u){u.g&&(ma(u),u.g.cancel(),u.g=null)}function Xs(u){bn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Zs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function er(u){if(!ln(u.h)&&!u.s){u.s=!0;var p=u.Ga;Be||oe(),ee||(Be(),ee=!0),pe.add(p,u),u.B=0}}function Zc(u,p){return xl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Cn(S(u.Ga,u,p),zl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new xn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=I(B),N(B,this.S)):B=this.S),this.m!==null||this.O||(M.H=B,B=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ei(this,M,p),y=un(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),Rr(this,y),B&&(this.O?p="headers="+encodeURIComponent(String(Ar(B)))+"&"+p:this.m&&Zr(y,this.m,B)),ua(this.h,M),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",p),ze(y,"SID","null"),M.T=!0,$s(M,y,null)):$s(M,y,p),this.G=2}}else this.G==3&&(u?Ys(this,u):this.i.length==0||ln(this.h)||Ys(this))};function Ys(u,p){var y;p?y=p.l:y=u.U++;const E=un(u.I);ze(E,"SID",u.K),ze(E,"RID",y),ze(E,"AID",u.T),Rr(u,E),u.m&&u.o&&Zr(E,u.m,u.o),y=new xn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ei(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ua(u.h,y),$s(y,E,p)}function Rr(u,p){u.H&&ve(u.H,function(y,E){ze(p,E,y)}),u.l&&Gr({},function(y,E){ze(p,E,y)})}function ei(u,p,y){y=Math.min(u.i.length,y);var E=u.l?S(u.l.Na,u.l,u):null;e:{var M=u.i;let B=-1;for(;;){const Z=["count="+y];B==-1?0<y?(B=M[0].g,Z.push("ofs="+B)):B=0:Z.push("ofs="+B);let je=!0;for(let yt=0;yt<y;yt++){let Oe=M[yt].g;const Tt=M[yt].map;if(Oe-=B,0>Oe)B=Math.max(0,M[yt].g-100),je=!1;else try{Fl(Tt,Z,"req"+Oe+"_")}catch{E&&E(Tt)}}if(je){E=Z.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,E}function Ji(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Be||oe(),ee||(Be(),ee=!0),pe.add(p,u),u.v=0}}function Js(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Cn(S(u.Fa,u),zl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Bl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Cn(S(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),bn(this),Bl(this))};function ma(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Bl(u){u.g=new xn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=un(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),Rr(u,p),u.m&&u.o&&Zr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Xr(un(p)),y.m=null,y.P=!0,aa(y,u)}r.Za=function(){this.C!=null&&(this.C=null,bn(this),Js(this),ot(19))};function Zs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function eo(u,p){var y=null;if(u.g==p){Zs(u),ma(u),u.g=null;var E=2}else if(Ht(u.h,p))y=p.D,Dl(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var M=u.B;E=zi(),gt(E,new Fs(E,y)),er(u)}else Ji(u);else if(M=p.s,M==3||M==0&&0<p.X||!(E==1&&Zc(u,p)||E==2&&Js(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),M){case 1:kr(u,5);break;case 4:kr(u,10);break;case 3:kr(u,6);break;default:kr(u,2)}}}function zl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function kr(u,p){if(u.j.info("Error code "+p),p==2){var y=S(u.fb,u),E=u.Xa;const M=!E;E=new Ir(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Qi(E,"https"),Xr(E),M?Xc(E.toString(),y):Ul(E.toString(),y)}else ot(2);u.G=0,u.l&&u.l.sa(p),$l(u),Xs(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function $l(u){if(u.G=0,u.ka=[],u.l){const p=Ol(u.h);(p.length!=0||u.i.length!=0)&&(z(u.ka,p),z(u.ka,u.i),u.h.i.length=0,H(u.i),u.i.length=0),u.l.ra()}}function Wl(u,p,y){var E=y instanceof Ir?un(y):new Ir(y);if(E.g!="")p&&(E.g=p+"."+E.g),Kr(E,E.s);else{var M=f.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var B=new Ir(null);E&&Qi(B,E),p&&(B.g=p),M&&Kr(B,M),y&&(B.l=y),E=B}return y=u.D,p=u.ya,y&&p&&ze(E,y,p),ze(E,"VER",u.la),Rr(u,E),E}function Hl(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Xe(new Sr({eb:y})):new Xe(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ga(){}r=ga.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function to(){}to.prototype.g=function(u,p){return new qt(u,p)};function qt(u,p){mt.call(this),this.g=new pa(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!te(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!te(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new tr(this)}$(qt,mt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Ct(this.g)},qt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Zo(u),u=y);p.i.push(new Nl(p.Ya++,u)),p.G==3&&er(p)},qt.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,qt.aa.N.call(this)};function ql(u){Qn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}$(ql,Qn);function Gl(){Us.call(this),this.status=1}$(Gl,Us);function tr(u){this.g=u}$(tr,ga),tr.prototype.ua=function(){gt(this.g,"a")},tr.prototype.ta=function(u){gt(this.g,new ql(u))},tr.prototype.sa=function(u){gt(this.g,new Gl)},tr.prototype.ra=function(){gt(this.g,"b")},to.prototype.createWebChannel=to.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,Mv=function(){return new to},bv=function(){return zi()},Lv=Xn,Xd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bs.NO_ERROR=0,Bs.TIMEOUT=8,Bs.HTTP_ERROR=6,Zu=Bs,Rl.COMPLETE="complete",Vv=Rl,Ms.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Wa=Ms,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,Ov=Xe}).apply(typeof $u<"u"?$u:typeof self<"u"?self:typeof window<"u"?window:{});const vy="@firebase/firestore",wy="4.8.0";/**
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
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
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
 */let Bo="11.10.0";/**
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
 */const Ts=new yf("@firebase/firestore");function So(){return Ts.logLevel}function se(r,...e){if(Ts.logLevel<=Pe.DEBUG){const t=e.map(bf);Ts.debug(`Firestore (${Bo}): ${r}`,...t)}}function zr(r,...e){if(Ts.logLevel<=Pe.ERROR){const t=e.map(bf);Ts.error(`Firestore (${Bo}): ${r}`,...t)}}function ki(r,...e){if(Ts.logLevel<=Pe.WARN){const t=e.map(bf);Ts.warn(`Firestore (${Bo}): ${r}`,...t)}}function bf(r){if(typeof r=="string")return r;try{/**
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
 */function _e(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Uv(r,i,t)}function Uv(r,e,t){let i=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw zr(i),new Error(i)}function Fe(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||Uv(e,o,i)}function Te(r,e){return r}/**
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
 */class Fv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class M1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class U1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class F1{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Fr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Fr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string",31837,{l:i}),new Fv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class j1{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class B1{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new j1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ey{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const i=l=>{l.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ey(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ey(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function $1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function jv(){return new TextEncoder}/**
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
 */class Mf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=$1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ae(r,e){return r<e?-1:r>e?1:0}function Yd(r,e){let t=0;for(;t<r.length&&t<e.length;){const i=r.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ae(i,o);{const l=jv(),h=W1(l.encode(Ty(r,t)),l.encode(Ty(e,t)));return h!==0?h:Ae(i,o)}}t+=i>65535?2:1}return Ae(r.length,e.length)}function Ty(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function W1(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Ae(r[t],e[t]);return Ae(r.length,e.length)}function Oo(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
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
 */const Iy="__name__";class or{constructor(e,t,i){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&_e(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=or.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const i=or.isNumericId(e),o=or.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?or.extractNumericId(e).compare(or.extractNumericId(t)):Yd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Si.fromString(e.substring(4,e.length-2))}}class qe extends or{construct(e,t,i){return new qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new re(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new qe(t)}static emptyPath(){return new qe([])}}const H1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends or{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return H1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Iy}static keyField(){return new Dt([Iy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new re(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new re(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new re(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new re(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
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
 */function Bv(r,e,t){if(!t)throw new re(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function q1(r,e,t,i){if(e===!0&&i===!0)throw new re(W.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Sy(r){if(!fe.isDocumentKey(r))throw new re(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ay(r){if(fe.isDocumentKey(r))throw new re(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function zv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Dc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function Hn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new re(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Dc(r);throw new re(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function pt(r,e){const t={typeString:r};return e&&(t.value=e),t}function wl(r,e){if(!zv(r))throw new re(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new re(W.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ry=-62135596800,ky=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*ky);return new Qe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ry)throw new re(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ky}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wl(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ry;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:pt("string",Qe._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
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
 */const il=-1;function G1(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new Qe(t+1,0):new Qe(t,i));return new Ci(o,fe.empty(),e)}function K1(r){return new Ci(r.readTime,r.key,il)}class Ci{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ci(Ee.min(),fe.empty(),il)}static max(){return new Ci(Ee.max(),fe.empty(),il)}}function Q1(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(r.documentKey,e.documentKey),t!==0?t:Ae(r.largestBatchId,e.largestBatchId))}/**
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
 */const X1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Y1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function zo(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==X1)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,i)=>{t(e)}))}static reject(e){return new q(((t,i)=>{i(e)}))}static waitFor(e){return new q(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=q.resolve(!1);for(const i of e)t=t.next((o=>o?q.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new q(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++f,f===l&&i(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new q(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function J1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function $o(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Oc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Oc.ue=-1;/**
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
 */const Uf=-1;function Vc(r){return r==null}function fc(r){return r===0&&1/r==-1/0}function Z1(r){return typeof r=="number"&&Number.isInteger(r)&&!fc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const $v="";function eR(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Cy(e)),e=tR(r.get(t),e);return Cy(e)}function tR(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case $v:t+="";break;default:t+=l}}return t}function Cy(r){return r+$v+""}/**
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
 */function Py(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ks(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Wv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wu(this.root,e,this.comparator,!0)}}class Wu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??xt.RED,this.left=o??xt.EMPTY,this.right=l??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new xt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ny(this.data.getIterator())}getIteratorFrom(e){return new Ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class Ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Hv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Hv("Invalid base64 string: "+l):l}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const nR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(r){if(Fe(!!r,39018),typeof r=="string"){let e=0;const t=nR.exec(r);if(Fe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ni(r){return typeof r=="string"?Ot.fromBase64String(r):Ot.fromUint8Array(r)}/**
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
 */const qv="server_timestamp",Gv="__type__",Kv="__previous_value__",Qv="__local_write_time__";function Ff(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Gv])===null||t===void 0?void 0:t.stringValue)===qv}function Lc(r){const e=r.mapValue.fields[Kv];return Ff(e)?Lc(e):e}function sl(r){const e=Pi(r.mapValue.fields[Qv].timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class rR{constructor(e,t,i,o,l,h,f,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const pc="(default)";class ol{constructor(e,t){this.projectId=e,this.database=t||pc}static empty(){return new ol("","")}get isDefaultDatabase(){return this.database===pc}isEqual(e){return e instanceof ol&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Xv="__type__",iR="__max__",Hu={mapValue:{}},Yv="__vector__",mc="value";function xi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ff(r)?4:oR(r)?9007199254740991:sR(r)?10:11:_e(28295,{value:r})}function gr(r,e){if(r===e)return!0;const t=xi(r);if(t!==xi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return sl(r).isEqual(sl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Pi(o.timestampValue),f=Pi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Ni(o.bytesValue).isEqual(Ni(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return lt(o.geoPointValue.latitude)===lt(l.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return lt(o.integerValue)===lt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=lt(o.doubleValue),f=lt(l.doubleValue);return h===f?fc(h)===fc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Oo(r.arrayValue.values||[],e.arrayValue.values||[],gr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Py(h)!==Py(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!gr(h[g],f[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function al(r,e){return(r.values||[]).find((t=>gr(t,e)))!==void 0}function Vo(r,e){if(r===e)return 0;const t=xi(r),i=xi(e);if(t!==i)return Ae(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=lt(l.integerValue||l.doubleValue),g=lt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return xy(r.timestampValue,e.timestampValue);case 4:return xy(sl(r),sl(e));case 5:return Yd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=Ni(l),g=Ni(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const w=Ae(f[_],g[_]);if(w!==0)return w}return Ae(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Ae(lt(l.latitude),lt(h.latitude));return f!==0?f:Ae(lt(l.longitude),lt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Dy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,_,w;const T=l.fields||{},S=h.fields||{},V=(f=T[mc])===null||f===void 0?void 0:f.arrayValue,$=(g=S[mc])===null||g===void 0?void 0:g.arrayValue,H=Ae(((_=V==null?void 0:V.values)===null||_===void 0?void 0:_.length)||0,((w=$==null?void 0:$.values)===null||w===void 0?void 0:w.length)||0);return H!==0?H:Dy(V,$)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Hu.mapValue&&h===Hu.mapValue)return 0;if(l===Hu.mapValue)return 1;if(h===Hu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const S=Yd(g[T],w[T]);if(S!==0)return S;const V=Vo(f[g[T]],_[w[T]]);if(V!==0)return V}return Ae(g.length,w.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{le:t})}}function xy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ae(r,e);const t=Pi(r),i=Pi(e),o=Ae(t.seconds,i.seconds);return o!==0?o:Ae(t.nanos,i.nanos)}function Dy(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Vo(t[o],i[o]);if(l)return l}return Ae(t.length,i.length)}function Lo(r){return Jd(r)}function Jd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Pi(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ni(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return fe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Jd(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Jd(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function ec(r){switch(xi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lc(r);return e?16+ec(e):16;case 5:return 2*r.stringValue.length;case 6:return Ni(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+ec(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return ks(i.fields,((l,h)=>{o+=l.length+ec(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function Oy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Zd(r){return!!r&&"integerValue"in r}function jf(r){return!!r&&"arrayValue"in r}function Vy(r){return!!r&&"nullValue"in r}function Ly(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function tc(r){return!!r&&"mapValue"in r}function sR(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Xv])===null||t===void 0?void 0:t.stringValue)===Yv}function Ya(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ks(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Ya(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ya(r.arrayValue.values[t]);return e}return Object.assign({},r)}function oR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===iR}/**
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
 */class Rn{constructor(e){this.value=e}static empty(){return new Rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!tc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ya(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Ya(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());tc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];tc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ks(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new Rn(Ya(this.value))}}function Jv(r){const e=[];return ks(r.fields,((t,i)=>{const o=new Dt([t]);if(tc(i)){const l=Jv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new Wn(e)}/**
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
 */class $t{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new $t(e,0,Ee.min(),Ee.min(),Ee.min(),Rn.empty(),0)}static newFoundDocument(e,t,i,o){return new $t(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new $t(e,2,t,Ee.min(),Ee.min(),Rn.empty(),0)}static newUnknownDocument(e,t){return new $t(e,3,t,Ee.min(),Ee.min(),Rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gc{constructor(e,t){this.position=e,this.inclusive=t}}function by(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=fe.comparator(fe.fromName(h.referenceValue),t.key):i=Vo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function My(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!gr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ll{constructor(e,t="asc"){this.field=e,this.dir=t}}function aR(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Zv{}class ft extends Zv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new uR(e,t,i):t==="array-contains"?new dR(e,i):t==="in"?new fR(e,i):t==="not-in"?new pR(e,i):t==="array-contains-any"?new mR(e,i):new ft(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new cR(e,i):new hR(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Vo(t,this.value)):t!==null&&xi(this.value)===xi(t)&&this.matchesComparison(Vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends Zv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Kn(e,t)}matches(e){return ew(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ew(r){return r.op==="and"}function tw(r){return lR(r)&&ew(r)}function lR(r){for(const e of r.filters)if(e instanceof Kn)return!1;return!0}function ef(r){if(r instanceof ft)return r.field.canonicalString()+r.op.toString()+Lo(r.value);if(tw(r))return r.filters.map((e=>ef(e))).join(",");{const e=r.filters.map((t=>ef(t))).join(",");return`${r.op}(${e})`}}function nw(r,e){return r instanceof ft?(function(i,o){return o instanceof ft&&i.op===o.op&&i.field.isEqual(o.field)&&gr(i.value,o.value)})(r,e):r instanceof Kn?(function(i,o){return o instanceof Kn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&nw(h,o.filters[f])),!0):!1})(r,e):void _e(19439)}function rw(r){return r instanceof ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${Lo(t.value)}`})(r):r instanceof Kn?(function(t){return t.op.toString()+" {"+t.getFilters().map(rw).join(" ,")+"}"})(r):"Filter"}class uR extends ft{constructor(e,t,i){super(e,t,i),this.key=fe.fromName(i.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class cR extends ft{constructor(e,t){super(e,"in",t),this.keys=iw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class hR extends ft{constructor(e,t){super(e,"not-in",t),this.keys=iw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function iw(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>fe.fromName(i.referenceValue)))}class dR extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jf(t)&&al(t.arrayValue,this.value)}}class fR extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&al(this.value.arrayValue,t)}}class pR extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!al(this.value.arrayValue,t)}}class mR extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>al(this.value.arrayValue,i)))}}/**
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
 */class gR{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function Uy(r,e=null,t=[],i=[],o=null,l=null,h=null){return new gR(r,e,t,i,o,l,h)}function Bf(r){const e=Te(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>ef(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Vc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Lo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Lo(i))).join(",")),e.Pe=t}return e.Pe}function zf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!aR(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!nw(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!My(r.startAt,e.startAt)&&My(r.endAt,e.endAt)}function tf(r){return fe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Wo{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function yR(r,e,t,i,o,l,h,f){return new Wo(r,e,t,i,o,l,h,f)}function bc(r){return new Wo(r)}function Fy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function sw(r){return r.collectionGroup!==null}function Ja(r){const e=Te(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new wt(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new ll(l,i))})),t.has(Dt.keyField().canonicalString())||e.Te.push(new ll(Dt.keyField(),i))}return e.Te}function hr(r){const e=Te(r);return e.Ie||(e.Ie=_R(e,Ja(r))),e.Ie}function _R(r,e){if(r.limitType==="F")return Uy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new ll(o.field,l)}));const t=r.endAt?new gc(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new gc(r.startAt.position,r.startAt.inclusive):null;return Uy(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function nf(r,e){const t=r.filters.concat([e]);return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function rf(r,e,t){return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Mc(r,e){return zf(hr(r),hr(e))&&r.limitType===e.limitType}function ow(r){return`${Bf(hr(r))}|lt:${r.limitType}`}function Ao(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>rw(o))).join(", ")}]`),Vc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Lo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Lo(o))).join(",")),`Target(${i})`})(hr(r))}; limitType=${r.limitType})`}function Uc(r,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):fe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,o){for(const l of Ja(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const _=by(h,f,g);return h.inclusive?_<=0:_<0})(i.startAt,Ja(i),o)||i.endAt&&!(function(h,f,g){const _=by(h,f,g);return h.inclusive?_>=0:_>0})(i.endAt,Ja(i),o))})(r,e)}function vR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function aw(r){return(e,t)=>{let i=!1;for(const o of Ja(r)){const l=wR(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function wR(r,e,t){const i=r.field.isKeyField()?fe.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?Vo(g,_):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return _e(19790,{direction:r.dir})}}/**
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
 */class Cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Wv(this.inner)}size(){return this.innerSize}}/**
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
 */const ER=new et(fe.comparator);function $r(){return ER}const lw=new et(fe.comparator);function Ha(...r){let e=lw;for(const t of r)e=e.insert(t.key,t);return e}function uw(r){let e=lw;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function fs(){return Za()}function cw(){return Za()}function Za(){return new Cs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const TR=new et(fe.comparator),IR=new wt(fe.comparator);function Ne(...r){let e=IR;for(const t of r)e=e.add(t);return e}const SR=new wt(Ae);function AR(){return SR}/**
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
 */function $f(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fc(e)?"-0":e}}function hw(r){return{integerValue:""+r}}function RR(r,e){return Z1(e)?hw(e):$f(r,e)}/**
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
 */class Fc{constructor(){this._=void 0}}function kR(r,e,t){return r instanceof ul?(function(o,l){const h={fields:{[Gv]:{stringValue:qv},[Qv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Ff(l)&&(l=Lc(l)),l&&(h.fields[Kv]=l),{mapValue:h}})(t,e):r instanceof cl?fw(r,e):r instanceof hl?pw(r,e):(function(o,l){const h=dw(o,l),f=jy(h)+jy(o.Ee);return Zd(h)&&Zd(o.Ee)?hw(f):$f(o.serializer,f)})(r,e)}function CR(r,e,t){return r instanceof cl?fw(r,e):r instanceof hl?pw(r,e):t}function dw(r,e){return r instanceof yc?(function(i){return Zd(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class ul extends Fc{}class cl extends Fc{constructor(e){super(),this.elements=e}}function fw(r,e){const t=mw(e);for(const i of r.elements)t.some((o=>gr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class hl extends Fc{constructor(e){super(),this.elements=e}}function pw(r,e){let t=mw(e);for(const i of r.elements)t=t.filter((o=>!gr(o,i)));return{arrayValue:{values:t}}}class yc extends Fc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function jy(r){return lt(r.integerValue||r.doubleValue)}function mw(r){return jf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class PR{constructor(e,t){this.field=e,this.transform=t}}function NR(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof cl&&o instanceof cl||i instanceof hl&&o instanceof hl?Oo(i.elements,o.elements,gr):i instanceof yc&&o instanceof yc?gr(i.Ee,o.Ee):i instanceof ul&&o instanceof ul})(r.transform,e.transform)}class xR{constructor(e,t){this.version=e,this.transformResults=t}}class dr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new dr}static exists(e){return new dr(void 0,e)}static updateTime(e){return new dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class jc{}function gw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new _w(r.key,dr.none()):new El(r.key,r.data,dr.none());{const t=r.data,i=Rn.empty();let o=new wt(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Ps(r.key,i,new Wn(o.toArray()),dr.none())}}function DR(r,e,t){r instanceof El?(function(o,l,h){const f=o.value.clone(),g=zy(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Ps?(function(o,l,h){if(!nc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=zy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(yw(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function el(r,e,t,i){return r instanceof El?(function(l,h,f,g){if(!nc(l.precondition,h))return f;const _=l.value.clone(),w=$y(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,i):r instanceof Ps?(function(l,h,f,g){if(!nc(l.precondition,h))return f;const _=$y(l.fieldTransforms,g,h),w=h.data;return w.setAll(yw(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,i):(function(l,h,f){return nc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function OR(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=dw(i.transform,o||null);l!=null&&(t===null&&(t=Rn.empty()),t.set(i.field,l))}return t||null}function By(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Oo(i,o,((l,h)=>NR(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class El extends jc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ps extends jc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function yw(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function zy(r,e,t){const i=new Map;Fe(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,CR(h,f,t[o]))}return i}function $y(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,kR(l,h,e))}return i}class _w extends jc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VR extends jc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LR{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&DR(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=el(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=el(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=cw();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=gw(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Oo(this.mutations,e.mutations,((t,i)=>By(t,i)))&&Oo(this.baseMutations,e.baseMutations,((t,i)=>By(t,i)))}}class Wf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return TR})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Wf(e,t,i,o)}}/**
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
 */class bR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class MR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var dt,Ve;function UR(r){switch(r){case W.OK:return _e(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function vw(r){if(r===void 0)return zr("GRPC error has no .code"),W.UNKNOWN;switch(r){case dt.OK:return W.OK;case dt.CANCELLED:return W.CANCELLED;case dt.UNKNOWN:return W.UNKNOWN;case dt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case dt.INTERNAL:return W.INTERNAL;case dt.UNAVAILABLE:return W.UNAVAILABLE;case dt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case dt.NOT_FOUND:return W.NOT_FOUND;case dt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case dt.ABORTED:return W.ABORTED;case dt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case dt.DATA_LOSS:return W.DATA_LOSS;default:return _e(39323,{code:r})}}(Ve=dt||(dt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const FR=new Si([4294967295,4294967295],0);function Wy(r){const e=jv().encode(r),t=new Dv;return t.update(e),new Uint8Array(t.digest())}function Hy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Si([t,i],0),new Si([o,l],0)]}class Hf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new qa(`Invalid padding: ${t}`);if(i<0)throw new qa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new qa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new qa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Si.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Si.fromNumber(i)));return o.compare(FR)===1&&(o=new Si([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Wy(e),[i,o]=Hy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Hf(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=Wy(e),[i,o]=Hy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Tl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Bc(Ee.min(),o,new et(Ae),$r(),Ne())}}class Tl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Tl(i,t,Ne(),Ne(),Ne())}}/**
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
 */class rc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class ww{constructor(e,t){this.targetId=e,this.De=t}}class Ew{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class qy{constructor(){this.ve=0,this.Ce=Gy(),this.Fe=Ot.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ne(),t=Ne(),i=Ne();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:_e(38017,{changeType:l})}})),new Tl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Gy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class jR{constructor(e){this.We=e,this.Ge=new Map,this.ze=$r(),this.je=qu(),this.Je=qu(),this.He=new et(Ae)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(tf(l))if(i===0){const h=new fe(l.path);this.Xe(t,h,$t.newNoDocument(h,Ee.min()))}else Fe(i===1,20013,{expectedCount:i});else{const h=this.ot(t);if(h!==i){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Ni(i).toUint8Array()}catch(g){if(g instanceof Hv)return ki("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Hf(h,o,l)}catch(g){return ki(g instanceof qa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&tf(f.target)){const g=new fe(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,$t.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let i=Ne();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Bc(e,t,this.He,this.ze,i);return this.ze=$r(),this.je=qu(),this.Je=qu(),this.He=new et(Ae),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new qy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new wt(Ae),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new wt(Ae),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new qy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function qu(){return new et(fe.comparator)}function Gy(){return new et(fe.comparator)}const BR={asc:"ASCENDING",desc:"DESCENDING"},zR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$R={and:"AND",or:"OR"};class WR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sf(r,e){return r.useProto3Json||Vc(e)?e:{value:e}}function _c(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function HR(r,e){return _c(r,e.toTimestamp())}function fr(r){return Fe(!!r,49232),Ee.fromTimestamp((function(t){const i=Pi(t);return new Qe(i.seconds,i.nanos)})(r))}function qf(r,e){return of(r,e).canonicalString()}function of(r,e){const t=(function(o){return new qe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Iw(r){const e=qe.fromString(r);return Fe(Cw(e),10190,{key:e.toString()}),e}function af(r,e){return qf(r.databaseId,e.path)}function xd(r,e){const t=Iw(e);if(t.get(1)!==r.databaseId.projectId)throw new re(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new re(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new fe(Aw(t))}function Sw(r,e){return qf(r.databaseId,e)}function qR(r){const e=Iw(r);return e.length===4?qe.emptyPath():Aw(e)}function lf(r){return new qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Aw(r){return Fe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Ky(r,e,t){return{name:af(r,e),fields:t.value.mapValue.fields}}function GR(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,w){return _.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),Ot.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Ot.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const w=_.code===void 0?W.UNKNOWN:vw(_.code);return new re(w,_.message||"")})(h);t=new Ew(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=xd(r,i.document.name),l=fr(i.document.updateTime),h=i.document.createTime?fr(i.document.createTime):Ee.min(),f=new Rn({mapValue:{fields:i.document.fields}}),g=$t.newFoundDocument(o,l,h,f),_=i.targetIds||[],w=i.removedTargetIds||[];t=new rc(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=xd(r,i.document),l=i.readTime?fr(i.readTime):Ee.min(),h=$t.newNoDocument(o,l),f=i.removedTargetIds||[];t=new rc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=xd(r,i.document),l=i.removedTargetIds||[];t=new rc([],l,o,null)}else{if(!("filter"in e))return _e(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new MR(o,l),f=i.targetId;t=new ww(f,h)}}return t}function KR(r,e){let t;if(e instanceof El)t={update:Ky(r,e.key,e.value)};else if(e instanceof _w)t={delete:af(r,e.key)};else if(e instanceof Ps)t={update:Ky(r,e.key,e.data),updateMask:rk(e.fieldMask)};else{if(!(e instanceof VR))return _e(16599,{Rt:e.type});t={verify:af(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof ul)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof cl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof hl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof yc)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw _e(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:HR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(r,e.precondition)),t}function QR(r,e){return r&&r.length>0?(Fe(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?fr(o.updateTime):fr(l);return h.isEqual(Ee.min())&&(h=fr(l)),new xR(h,o.transformResults||[])})(t,e)))):[]}function XR(r,e){return{documents:[Sw(r,e.path)]}}function YR(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Sw(r,o);const l=(function(_){if(_.length!==0)return kw(Kn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((w=>(function(S){return{field:Ro(S.field),direction:ek(S.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=sf(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function JR(r){let e=qR(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(T){const S=Rw(T);return S instanceof Kn&&tw(S)?S.getFilters():[S]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((S=>(function($){return new ll(ko($.field),(function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(S)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let S;return S=typeof T=="object"?T.value:T,Vc(S)?null:S})(t.limit));let g=null;t.startAt&&(g=(function(T){const S=!!T.before,V=T.values||[];return new gc(V,S)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const S=!T.before,V=T.values||[];return new gc(V,S)})(t.endAt)),yR(e,o,h,l,f,"F",g,_)}function ZR(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rw(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=ko(t.unaryFilter.field);return ft.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=ko(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ko(t.unaryFilter.field);return ft.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ko(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return ft.create(ko(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Kn.create(t.compositeFilter.filters.map((i=>Rw(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function ek(r){return BR[r]}function tk(r){return zR[r]}function nk(r){return $R[r]}function Ro(r){return{fieldPath:r.canonicalString()}}function ko(r){return Dt.fromServerFormat(r.fieldPath)}function kw(r){return r instanceof ft?(function(t){if(t.op==="=="){if(Ly(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NAN"}};if(Vy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ly(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NAN"}};if(Vy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ro(t.field),op:tk(t.op),value:t.value}}})(r):r instanceof Kn?(function(t){const i=t.getFilters().map((o=>kw(o)));return i.length===1?i[0]:{compositeFilter:{op:nk(t.op),filters:i}}})(r):_e(54877,{filter:r})}function rk(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Cw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ik{constructor(e){this.gt=e}}function sk(r){const e=JR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?rf(e,e.limit,"L"):e}/**
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
 */class ok{constructor(){this.Dn=new ak}addToCollectionParentIndex(e,t){return this.Dn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Ci.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Ci.min())}updateCollectionGroup(e,t,i){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class ak{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new wt(qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new wt(qe.comparator)).toArray()}}/**
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
 */const Qy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Pw=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(Pw,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
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
 */const Xy="LruGarbageCollector",lk=1048576;function Yy([r,e],[t,i]){const o=Ae(r,t);return o===0?Ae(e,i):o}class uk{constructor(e){this.Tr=e,this.buffer=new wt(Yy),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Yy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ck{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){se(Xy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$o(t)?se(Xy,"Ignoring IndexedDB error during garbage collection: ",t):await zo(t)}await this.Rr(3e5)}))}}class hk{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(Oc.ue);const i=new uk(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Qy)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,h,f,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(_=Date.now(),So()<=Pe.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function dk(r,e){return new hk(r,e)}/**
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
 */class fk{constructor(){this.changes=new Cs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class pk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class mk{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&el(i.mutation,o,Wn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ne()){const o=fs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Ha();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=fs();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ne())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=$r();const h=Za(),f=(function(){return Za()})();return t.forEach(((g,_)=>{const w=i.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Ps)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),el(w.mutation,_,w.mutation.getFieldMask(),Qe.now())):h.set(_.key,Wn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var T;return f.set(_,new pk(w,(T=h.get(_))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=Za();let o=new et(((h,f)=>h-f)),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=i.get(g)||Wn.empty();w=f.applyToLocalView(_,w),i.set(g,w);const T=(o.get(f.batchId)||Ne()).add(g);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,w=g.value,T=cw();w.forEach((S=>{if(!l.has(S)){const V=gw(t.get(S),i.get(S));V!==null&&T.set(S,V),l=l.add(S)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return q.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):q.resolve(fs());let f=il,g=l;return h.next((_=>q.forEach(_,((w,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(w)?q.resolve():this.remoteDocumentCache.getEntry(e,w).next((S=>{g=g.insert(w,S)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,Ne()))).next((w=>({batchId:f,changes:uw(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((i=>{let o=Ha();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Ha();return this.indexManager.getCollectionParents(e,l).next((f=>q.forEach(f,(g=>{const _=(function(T,S){return new Wo(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((w=>{w.forEach(((T,S)=>{h=h.insert(T,S)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,$t.newInvalidDocument(w)))}));let f=Ha();return h.forEach(((g,_)=>{const w=l.get(g);w!==void 0&&el(w.mutation,_,Wn.empty(),Qe.now()),Uc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
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
 */class gk{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:fr(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:sk(o.bundledQuery),readTime:fr(o.readTime)}})(t)),q.resolve()}}/**
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
 */class yk{constructor(){this.overlays=new et(fe.comparator),this.kr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=fs();return q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),q.resolve()}getOverlaysForCollection(e,t,i){const o=fs(),l=t.length+1,h=new fe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new et(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let w=l.get(_.largestBatchId);w===null&&(w=fs(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const f=fs(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>f.set(_,w))),!(f.size()>=o)););return q.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new bR(t,i));let l=this.kr.get(t);l===void 0&&(l=Ne(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
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
 */class _k{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
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
 */class Gf{constructor(){this.qr=new wt(Rt.Qr),this.$r=new wt(Rt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Rt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Rt(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new fe(new qe([])),i=new Rt(t,e),o=new Rt(t,e+1),l=[];return this.$r.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new fe(new qe([])),i=new Rt(t,e),o=new Rt(t,e+1);let l=Ne();return this.$r.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new Rt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Rt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return fe.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||fe.comparator(e.key,t.key)}}/**
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
 */class vk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new wt(Rt.Qr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new LR(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new Rt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Uf:this.er-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new wt(Ae);return t.forEach((o=>{const l=new Rt(o,0),h=new Rt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{i=i.add(f.Hr)}))})),q.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;fe.isDocumentKey(l)||(l=l.child(""));const h=new Rt(new fe(l),0);let f=new wt(Ae);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Hr)),!0)}),h),q.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return q.forEach(t.mutations,(o=>{const l=new Rt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Rt(t,0),o=this.Yr.firstAfterOrEqual(i);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class wk{constructor(e){this.ni=e,this.docs=(function(){return new et(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return q.resolve(i?i.document.mutableCopy():$t.newInvalidDocument(t))}getEntries(e,t){let i=$r();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():$t.newInvalidDocument(o))})),q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=$r();const h=t.path,f=new fe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||Q1(K1(w),i)<=0||(o.has(w.key)||Uc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){_e(9500)}ri(e,t){return q.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new Ek(this)}getSize(e){return q.resolve(this.size)}}class Ek extends fk{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class Tk{constructor(e){this.persistence=e,this.ii=new Cs((t=>Bf(t)),zf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.si=0,this.oi=new Gf,this.targetCount=0,this._i=bo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new bo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.hr(t),q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),q.waitFor(l).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return q.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),q.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return q.resolve(i)}containsKey(e,t){return q.resolve(this.oi.containsKey(t))}}/**
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
 */class Nw{constructor(e,t){this.ai={},this.overlays={},this.ui=new Oc(0),this.ci=!1,this.ci=!0,this.li=new _k,this.referenceDelegate=e(this),this.hi=new Tk(this),this.indexManager=new ok,this.remoteDocumentCache=(function(o){return new wk(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new ik(t),this.Ti=new gk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new yk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new vk(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){se("MemoryPersistence","Starting transaction:",e);const o=new Ik(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return q.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class Ik extends Y1{constructor(e){super(),this.currentSequenceNumber=e}}class Kf{constructor(e){this.persistence=e,this.Ai=new Gf,this.Ri=null}static Vi(e){return new Kf(e)}get mi(){if(this.Ri)return this.Ri;throw _e(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),q.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.mi,(i=>{const o=fe.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return q.or([()=>q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class vc{constructor(e,t){this.persistence=e,this.gi=new Cs((i=>eR(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=dk(this,t)}static Vi(e,t){return new vc(e,t)}Ii(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return q.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?q.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Ee.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),q.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ec(e.data.value)),t}Sr(e,t,i){return q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Qf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Ne(),o=Ne();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Qf(e,t.fromCache,i,o)}}/**
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
 */class Sk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ak{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return LT()?8:J1(Wt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new Sk;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(So()<=Pe.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),q.resolve()):(So()<=Pe.DEBUG&&se("QueryEngine","Query:",Ao(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(So()<=Pe.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hr(t))):q.resolve())}ps(e,t){if(Fy(t))return q.resolve(null);let i=hr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=rf(t,null,"F"),i=hr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=Ne(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const _=this.bs(t,f);return this.Ds(t,_,h,g.readTime)?this.ps(e,rf(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,i,o){return Fy(t)||o.isEqual(Ee.min())?q.resolve(null):this.gs.getDocuments(e,i).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,i,o)?q.resolve(null):(So()<=Pe.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ao(t)),this.vs(e,h,t,G1(o,il)).next((f=>f)))}))}bs(e,t){let i=new wt(aw(e));return t.forEach(((o,l)=>{Uc(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return So()<=Pe.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Ao(t)),this.gs.getDocumentsMatchingQuery(e,t,Ci.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const Xf="LocalStore",Rk=3e8;class kk{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new et(Ae),this.Ms=new Cs((l=>Bf(l)),zf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mk(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Ck(r,e,t,i){return new kk(r,e,t,i)}async function xw(r,e){const t=Te(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=Ne();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){f.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(i,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function Pk(r,e){const t=Te(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,w){const T=_.batch,S=T.keys();let V=q.resolve();return S.forEach(($=>{V=V.next((()=>w.getEntry(g,$))).next((H=>{const z=_.docVersions.get($);Fe(z!==null,48541),H.version.compareTo(z)<0&&(T.applyToRemoteDocument(H,_),H.isValidDocument()&&(H.setReadTime(_.commitVersion),w.addEntry(H)))}))})),V.next((()=>f.mutationQueue.removeMutationBatch(g,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=Ne();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function Dw(r){const e=Te(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Nk(r,e){const t=Te(r),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((w,T)=>{const S=o.get(T);if(!S)return;f.push(t.hi.removeMatchingKeys(l,w.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,T))));let V=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?V=V.withResumeToken(Ot.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(w.resumeToken,i)),o=o.insert(T,V),(function(H,z,Y){return H.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=Rk?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0})(S,V,w)&&f.push(t.hi.updateTargetData(l,V))}));let g=$r(),_=Ne();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(xk(l,h,e.documentUpdates).next((w=>{g=w.Ls,_=w.ks}))),!i.isEqual(Ee.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(w)}return q.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function xk(r,e,t){let i=Ne(),o=Ne();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let h=$r();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):se(Xf,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function Dk(r,e){const t=Te(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Uf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function Ok(r,e){const t=Te(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,q.resolve(o)):t.hi.allocateTargetId(i).next((h=>(o=new Ei(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function uf(r,e,t){const i=Te(r),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!$o(h))throw h;se(Xf,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function Jy(r,e,t){const i=Te(r);let o=Ee.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const T=Te(g),S=T.Ms.get(w);return S!==void 0?q.resolve(T.Fs.get(S)):T.hi.getTargetData(_,w)})(i,h,hr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:Ne()))).next((f=>(Vk(i,vR(e),f),{documents:f,qs:l})))))}function Vk(r,e,t){let i=r.xs.get(e)||Ee.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.xs.set(e,i)}class Zy{constructor(){this.activeTargetIds=AR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lk{constructor(){this.Fo=new Zy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Zy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bk{xo(e){}shutdown(){}}/**
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
 */const e_="ConnectivityMonitor";class t_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){se(e_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){se(e_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gu=null;function cf(){return Gu===null?Gu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Gu++,"0x"+Gu.toString(16)}/**
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
 */const Dd="RestConnection",Mk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Uk{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===pc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=cf(),f=this.Go(e,t.toUriEncodedString());se(Dd,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(f),w=Vi(_);return this.jo(e,f,g,i,w).then((T=>(se(Dd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw ki(Dd,`RPC '${e}' ${h} failed with error: `,T,"url: ",f,"request:",i),T}))}Jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=Mk[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
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
 */class Fk{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Bt="WebChannelConnection";class jk extends Uk{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const h=cf();return new Promise(((f,g)=>{const _=new Ov;_.setWithCredentials(!0),_.listenOnce(Vv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Zu.NO_ERROR:const T=_.getResponseJson();se(Bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),f(T);break;case Zu.TIMEOUT:se(Bt,`RPC '${e}' ${h} timed out`),g(new re(W.DEADLINE_EXCEEDED,"Request time out"));break;case Zu.HTTP_ERROR:const S=_.getStatus();if(se(Bt,`RPC '${e}' ${h} failed with status:`,S,"response text:",_.getResponseText()),S>0){let V=_.getResponseJson();Array.isArray(V)&&(V=V[0]);const $=V==null?void 0:V.error;if($&&$.status&&$.message){const H=(function(Y){const te=Y.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(te)>=0?te:W.UNKNOWN})($.status);g(new re(H,$.message))}else g(new re(W.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new re(W.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{se(Bt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);se(Bt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,i,15)}))}P_(e,t,i){const o=cf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Mv(),f=bv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const w=l.join("");se(Bt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const T=h.createWebChannel(w,g);this.T_(T);let S=!1,V=!1;const $=new Fk({Ho:z=>{V?se(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,z):(S||(se(Bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),S=!0),se(Bt,`RPC '${e}' stream ${o} sending:`,z),T.send(z))},Yo:()=>T.close()}),H=(z,Y,te)=>{z.listen(Y,(ne=>{try{te(ne)}catch(le){setTimeout((()=>{throw le}),0)}}))};return H(T,Wa.EventType.OPEN,(()=>{V||(se(Bt,`RPC '${e}' stream ${o} transport opened.`),$.s_())})),H(T,Wa.EventType.CLOSE,(()=>{V||(V=!0,se(Bt,`RPC '${e}' stream ${o} transport closed`),$.__(),this.I_(T))})),H(T,Wa.EventType.ERROR,(z=>{V||(V=!0,ki(Bt,`RPC '${e}' stream ${o} transport errored. Name:`,z.name,"Message:",z.message),$.__(new re(W.UNAVAILABLE,"The operation could not be completed")))})),H(T,Wa.EventType.MESSAGE,(z=>{var Y;if(!V){const te=z.data[0];Fe(!!te,16349);const ne=te,le=(ne==null?void 0:ne.error)||((Y=ne[0])===null||Y===void 0?void 0:Y.error);if(le){se(Bt,`RPC '${e}' stream ${o} received error:`,le);const Ce=le.status;let ve=(function(R){const N=dt[R];if(N!==void 0)return vw(N)})(Ce),P=le.message;ve===void 0&&(ve=W.INTERNAL,P="Unknown error status: "+Ce+" with message "+le.message),V=!0,$.__(new re(ve,P)),T.close()}else se(Bt,`RPC '${e}' stream ${o} received:`,te),$.a_(te)}})),H(f,Lv.STAT_EVENT,(z=>{z.stat===Xd.PROXY?se(Bt,`RPC '${e}' stream ${o} detected buffering proxy`):z.stat===Xd.NOPROXY&&se(Bt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.o_()}),0),$}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Od(){return typeof document<"u"?document:null}/**
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
 */function zc(r){return new WR(r,!0)}/**
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
 */class Ow{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const n_="PersistentStream";class Vw{constructor(e,t,i,o,l,h,f,g){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Ow(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new re(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return se(n_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(se(n_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Bk extends Vw{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=GR(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?fr(h.readTime):Ee.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=lf(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=tf(g)?{documents:XR(l,g)}:{query:YR(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Tw(l,h.resumeToken);const _=sf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ee.min())>0){f.readTime=_c(l,h.snapshotVersion.toTimestamp());const _=sf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const i=ZR(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=lf(this.serializer),t.removeTarget=e,this.k_(t)}}class zk extends Vw{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=QR(e.writeResults,e.commitTime),i=fr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=lf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>KR(this.serializer,i)))};this.k_(t)}}/**
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
 */class $k{}class Wk extends $k{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new re(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,of(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new re(W.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,of(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new re(W.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Hk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Is="RemoteStore";class qk{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{i.enqueueAndForget((async()=>{Ns(this)&&(se(Is,"Restarting streams for network reachability change."),await(async function(g){const _=Te(g);_.Ia.add(4),await Il(_),_.Aa.set("Unknown"),_.Ia.delete(4),await $c(_)})(this))}))})),this.Aa=new Hk(i,o)}}async function $c(r){if(Ns(r))for(const e of r.da)await e(!0)}async function Il(r){for(const e of r.da)await e(!1)}function Lw(r,e){const t=Te(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),ep(t)?Zf(t):Ho(t).x_()&&Jf(t,e))}function Yf(r,e){const t=Te(r),i=Ho(t);t.Ta.delete(e),i.x_()&&bw(t,e),t.Ta.size===0&&(i.x_()?i.B_():Ns(t)&&t.Aa.set("Unknown"))}function Jf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ho(r).H_(e)}function bw(r,e){r.Ra.$e(e),Ho(r).Y_(e)}function Zf(r){r.Ra=new jR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Ho(r).start(),r.Aa.aa()}function ep(r){return Ns(r)&&!Ho(r).M_()&&r.Ta.size>0}function Ns(r){return Te(r).Ia.size===0}function Mw(r){r.Ra=void 0}async function Gk(r){r.Aa.set("Online")}async function Kk(r){r.Ta.forEach(((e,t)=>{Jf(r,e)}))}async function Qk(r,e){Mw(r),ep(r)?(r.Aa.la(e),Zf(r)):r.Aa.set("Unknown")}async function Xk(r,e,t){if(r.Aa.set("Online"),e instanceof Ew&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(r,e)}catch(i){se(Is,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await wc(r,i)}else if(e instanceof rc?r.Ra.Ye(e):e instanceof ww?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Ee.min()))try{const i=await Dw(r.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(_);w&&l.Ta.set(_,w.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Ot.EMPTY_BYTE_STRING,w.snapshotVersion)),bw(l,g);const T=new Ei(w.target,g,_,w.sequenceNumber);Jf(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){se(Is,"Failed to raise snapshot:",i),await wc(r,i)}}async function wc(r,e,t){if(!$o(e))throw e;r.Ia.add(1),await Il(r),r.Aa.set("Offline"),t||(t=()=>Dw(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{se(Is,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await $c(r)}))}function Uw(r,e){return e().catch((t=>wc(r,t,e)))}async function Wc(r){const e=Te(r),t=Di(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Uf;for(;Yk(e);)try{const o=await Dk(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,Jk(e,o)}catch(o){await wc(e,o)}Fw(e)&&jw(e)}function Yk(r){return Ns(r)&&r.Pa.length<10}function Jk(r,e){r.Pa.push(e);const t=Di(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Fw(r){return Ns(r)&&!Di(r).M_()&&r.Pa.length>0}function jw(r){Di(r).start()}async function Zk(r){Di(r).na()}async function eC(r){const e=Di(r);for(const t of r.Pa)e.X_(t.mutations)}async function tC(r,e,t){const i=r.Pa.shift(),o=Wf.from(i,e,t);await Uw(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Wc(r)}async function nC(r,e){e&&Di(r).Z_&&await(async function(i,o){if((function(h){return UR(h)&&h!==W.ABORTED})(o.code)){const l=i.Pa.shift();Di(i).N_(),await Uw(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Wc(i)}})(r,e),Fw(r)&&jw(r)}async function r_(r,e){const t=Te(r);t.asyncQueue.verifyOperationInProgress(),se(Is,"RemoteStore received new credentials");const i=Ns(t);t.Ia.add(3),await Il(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await $c(t)}async function rC(r,e){const t=Te(r);e?(t.Ia.delete(2),await $c(t)):e||(t.Ia.add(2),await Il(t),t.Aa.set("Unknown"))}function Ho(r){return r.Va||(r.Va=(function(t,i,o){const l=Te(t);return l.ia(),new Bk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:Gk.bind(null,r),e_:Kk.bind(null,r),n_:Qk.bind(null,r),J_:Xk.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),ep(r)?Zf(r):r.Aa.set("Unknown")):(await r.Va.stop(),Mw(r))}))),r.Va}function Di(r){return r.ma||(r.ma=(function(t,i,o){const l=Te(t);return l.ia(),new zk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:Zk.bind(null,r),n_:nC.bind(null,r),ea:eC.bind(null,r),ta:tC.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Wc(r)):(await r.ma.stop(),r.Pa.length>0&&(se(Is,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class tp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new tp(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function np(r,e){if(zr("AsyncQueue",`${e}: ${r}`),$o(r))return new re(W.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Do{static emptySet(e){return new Do(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||fe.comparator(t.key,i.key):(t,i)=>fe.comparator(t.key,i.key),this.keyedMap=Ha(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Do)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class i_{constructor(){this.fa=new et(fe.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):_e(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Mo{constructor(e,t,i,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Mo(e,t,Do.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class iC{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class sC{constructor(){this.queries=s_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=s_(),l.forEach(((h,f)=>{for(const g of f.wa)g.onError(i)}))})(this,new re(W.ABORTED,"Firestore shutting down"))}}function s_(){return new Cs((r=>ow(r)),Mc)}async function rp(r,e){const t=Te(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new iC,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=np(h,`Initialization of query '${Ao(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&sp(t)}async function ip(r,e){const t=Te(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function oC(r,e){const t=Te(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(i=!0);h.ya=o}}i&&sp(t)}function aC(r,e,t){const i=Te(r),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function sp(r){r.Da.forEach((e=>{e.next()}))}var hf,o_;(o_=hf||(hf={})).Fa="default",o_.Cache="cache";class op{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Mo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==hf.Cache}}/**
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
 */class Bw{constructor(e){this.key=e}}class zw{constructor(e){this.key=e}}class lC{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ne(),this.mutatedKeys=Ne(),this.Xa=aw(e),this.eu=new Do(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new i_,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const S=o.get(w),V=Uc(this.query,T)?T:null,$=!!S&&this.mutatedKeys.has(S.key),H=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let z=!1;S&&V?S.data.isEqual(V.data)?$!==H&&(i.track({type:3,doc:V}),z=!0):this.iu(S,V)||(i.track({type:2,doc:V}),z=!0,(g&&this.Xa(V,g)>0||_&&this.Xa(V,_)<0)&&(f=!0)):!S&&V?(i.track({type:0,doc:V}),z=!0):S&&!V&&(i.track({type:1,doc:S}),z=!0,(g||_)&&(f=!0)),z&&(V?(h=h.add(V),l=H?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{eu:h,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,T)=>(function(V,$){const H=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{At:z})}};return H(V)-H($)})(w.type,T.type)||this.Xa(w.doc,T.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new Mo(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new i_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ne(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new zw(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new Bw(i))})),t}uu(e){this.Ha=e.qs,this.Za=Ne();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Mo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ap="SyncEngine";class uC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class cC{constructor(e){this.key=e,this.lu=!1}}class hC{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Cs((f=>ow(f)),Mc),this.Tu=new Map,this.Iu=new Set,this.du=new et(fe.comparator),this.Eu=new Map,this.Au=new Gf,this.Ru={},this.Vu=new Map,this.mu=bo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function dC(r,e,t=!0){const i=Kw(r);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await $w(i,e,t,!0),o}async function fC(r,e){const t=Kw(r);await $w(t,e,!0,!1)}async function $w(r,e,t,i){const o=await Ok(r.localStore,hr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await pC(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Lw(r.remoteStore,o),f}async function pC(r,e,t,i,o){r.gu=(T,S,V)=>(async function(H,z,Y,te){let ne=z.view.nu(Y);ne.Ds&&(ne=await Jy(H.localStore,z.query,!1).then((({documents:P})=>z.view.nu(P,ne))));const le=te&&te.targetChanges.get(z.targetId),Ce=te&&te.targetMismatches.get(z.targetId)!=null,ve=z.view.applyChanges(ne,H.isPrimaryClient,le,Ce);return l_(H,z.targetId,ve._u),ve.snapshot})(r,T,S,V);const l=await Jy(r.localStore,e,!0),h=new lC(e,l.qs),f=h.nu(l.documents),g=Tl.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);l_(r,t,_._u);const w=new uC(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function mC(r,e,t){const i=Te(r),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((h=>!Mc(h,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await uf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Yf(i.remoteStore,o.targetId),df(i,o.targetId)})).catch(zo)):(df(i,o.targetId),await uf(i.localStore,o.targetId,!0))}async function gC(r,e){const t=Te(r),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Yf(t.remoteStore,i.targetId))}async function yC(r,e,t){const i=SC(r);try{const o=await(function(h,f){const g=Te(h),_=Qe.now(),w=f.reduce(((V,$)=>V.add($.key)),Ne());let T,S;return g.persistence.runTransaction("Locally write mutations","readwrite",(V=>{let $=$r(),H=Ne();return g.Os.getEntries(V,w).next((z=>{$=z,$.forEach(((Y,te)=>{te.isValidDocument()||(H=H.add(Y))}))})).next((()=>g.localDocuments.getOverlayedDocuments(V,$))).next((z=>{T=z;const Y=[];for(const te of f){const ne=OR(te,T.get(te.key).overlayedDocument);ne!=null&&Y.push(new Ps(te.key,ne,Jv(ne.value.mapValue),dr.exists(!0)))}return g.mutationQueue.addMutationBatch(V,_,Y,f)})).next((z=>{S=z;const Y=z.applyToLocalDocumentSet(T,H);return g.documentOverlayCache.saveOverlays(V,z.batchId,Y)}))})).then((()=>({batchId:S.batchId,changes:uw(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new et(Ae)),_=_.insert(f,g),h.Ru[h.currentUser.toKey()]=_})(i,o.batchId,t),await Sl(i,o.changes),await Wc(i.remoteStore)}catch(o){const l=np(o,"Failed to persist write");t.reject(l)}}async function Ww(r,e){const t=Te(r);try{const i=await Nk(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Fe(h.lu,14607):o.removedDocuments.size>0&&(Fe(h.lu,42227),h.lu=!1))})),await Sl(t,i,e)}catch(i){await zo(i)}}function a_(r,e,t){const i=Te(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Te(h);g.onlineState=f;let _=!1;g.queries.forEach(((w,T)=>{for(const S of T.wa)S.va(f)&&(_=!0)})),_&&sp(g)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function _C(r,e,t){const i=Te(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let h=new et(fe.comparator);h=h.insert(l,$t.newNoDocument(l,Ee.min()));const f=Ne().add(l),g=new Bc(Ee.min(),new Map,new et(Ae),h,f);await Ww(i,g),i.du=i.du.remove(l),i.Eu.delete(e),lp(i)}else await uf(i.localStore,e,!1).then((()=>df(i,e,t))).catch(zo)}async function vC(r,e){const t=Te(r),i=e.batch.batchId;try{const o=await Pk(t.localStore,e);qw(t,i,null),Hw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Sl(t,o)}catch(o){await zo(o)}}async function wC(r,e,t){const i=Te(r);try{const o=await(function(h,f){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,f).next((T=>(Fe(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(i.localStore,e);qw(i,e,t),Hw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Sl(i,o)}catch(o){await zo(o)}}function Hw(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function qw(r,e,t){const i=Te(r);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function df(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Tu.get(e))r.Pu.delete(i),t&&r.hu.pu(i,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((i=>{r.Au.containsKey(i)||Gw(r,i)}))}function Gw(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Yf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),lp(r))}function l_(r,e,t){for(const i of t)i instanceof Bw?(r.Au.addReference(i.key,e),EC(r,i)):i instanceof zw?(se(ap,"Document no longer in limbo: "+i.key),r.Au.removeReference(i.key,e),r.Au.containsKey(i.key)||Gw(r,i.key)):_e(19791,{yu:i})}function EC(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Iu.has(i)||(se(ap,"New document in limbo: "+t),r.Iu.add(i),lp(r))}function lp(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new fe(qe.fromString(e)),i=r.mu.next();r.Eu.set(i,new cC(t)),r.du=r.du.insert(t,i),Lw(r.remoteStore,new Ei(hr(bc(t.path)),i,"TargetPurposeLimboResolution",Oc.ue))}}async function Sl(r,e,t){const i=Te(r),o=[],l=[],h=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,g)=>{h.push(i.gu(g,e,t).then((_=>{var w;if((_||t)&&i.isPrimaryClient){const T=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=Qf.Es(g.targetId,_);l.push(T)}})))})),await Promise.all(h),i.hu.J_(o),await(async function(g,_){const w=Te(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>q.forEach(_,(S=>q.forEach(S.Is,(V=>w.persistence.referenceDelegate.addReference(T,S.targetId,V))).next((()=>q.forEach(S.ds,(V=>w.persistence.referenceDelegate.removeReference(T,S.targetId,V)))))))))}catch(T){if(!$o(T))throw T;se(Xf,"Failed to update sequence numbers: "+T)}for(const T of _){const S=T.targetId;if(!T.fromCache){const V=w.Fs.get(S),$=V.snapshotVersion,H=V.withLastLimboFreeSnapshotVersion($);w.Fs=w.Fs.insert(S,H)}}})(i.localStore,l))}async function TC(r,e){const t=Te(r);if(!t.currentUser.isEqual(e)){se(ap,"User change. New user:",e.toKey());const i=await xw(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((g=>{g.reject(new re(W.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Sl(t,i.Bs)}}function IC(r,e){const t=Te(r),i=t.Eu.get(e);if(i&&i.lu)return Ne().add(i.key);{let o=Ne();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function Kw(r){const e=Te(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ww.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_C.bind(null,e),e.hu.J_=oC.bind(null,e.eventManager),e.hu.pu=aC.bind(null,e.eventManager),e}function SC(r){const e=Te(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wC.bind(null,e),e}class Ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Ck(this.persistence,new Ak,e.initialUser,this.serializer)}Du(e){return new Nw(Kf.Vi,this.serializer)}bu(e){return new Lk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ec.provider={build:()=>new Ec};class AC extends Ec{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof vc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new ck(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new Nw((i=>vc.Vi(i,t)),this.serializer)}}class ff{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>a_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=TC.bind(null,this.syncEngine),await rC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new sC})()}createDatastore(e){const t=zc(e.databaseInfo.databaseId),i=(function(l){return new jk(l)})(e.databaseInfo);return(function(l,h,f,g){return new Wk(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new qk(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>a_(this.syncEngine,t,0)),(function(){return t_.C()?new t_:new bk})())}createSyncEngine(e,t){return(function(o,l,h,f,g,_,w){const T=new hC(o,l,h,f,g,_);return w&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Te(o);se(Is,"RemoteStore shutting down."),l.Ia.add(5),await Il(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ff.provider={build:()=>new ff};/**
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
 */class up{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Oi="FirestoreClient";class RC{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=Mf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{se(Oi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(se(Oi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=np(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Vd(r,e){r.asyncQueue.verifyOperationInProgress(),se(Oi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await xw(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{ki("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{se("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{ki("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function u_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await kC(r);se(Oi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>r_(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>r_(e.remoteStore,o))),r._onlineComponents=e}async function kC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se(Oi,"Using user provided OfflineComponentProvider");try{await Vd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ki("Error using user provided cache. Falling back to memory cache: "+t),await Vd(r,new Ec)}}else se(Oi,"Using default OfflineComponentProvider"),await Vd(r,new AC(void 0));return r._offlineComponents}async function Qw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se(Oi,"Using user provided OnlineComponentProvider"),await u_(r,r._uninitializedComponentsProvider._online)):(se(Oi,"Using default OnlineComponentProvider"),await u_(r,new ff))),r._onlineComponents}function CC(r){return Qw(r).then((e=>e.syncEngine))}async function Tc(r){const e=await Qw(r),t=e.eventManager;return t.onListen=dC.bind(null,e.syncEngine),t.onUnlisten=mC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gC.bind(null,e.syncEngine),t}function PC(r,e,t={}){const i=new Fr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const w=new up({next:S=>{w.Ou(),h.enqueueAndForget((()=>ip(l,T)));const V=S.docs.has(f);!V&&S.fromCache?_.reject(new re(W.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&S.fromCache&&g&&g.source==="server"?_.reject(new re(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(S)},error:S=>_.reject(S)}),T=new op(bc(f.path),w,{includeMetadataChanges:!0,ka:!0});return rp(l,T)})(await Tc(r),r.asyncQueue,e,t,i))),i.promise}function NC(r,e,t={}){const i=new Fr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const w=new up({next:S=>{w.Ou(),h.enqueueAndForget((()=>ip(l,T))),S.fromCache&&g.source==="server"?_.reject(new re(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(S)},error:S=>_.reject(S)}),T=new op(f,w,{includeMetadataChanges:!0,ka:!0});return rp(l,T)})(await Tc(r),r.asyncQueue,e,t,i))),i.promise}/**
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
 */function Xw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const c_=new Map;/**
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
 */const Yw="firestore.googleapis.com",h_=!0;class d_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new re(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yw,this.ssl=h_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:h_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Pw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lk)throw new re(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new d_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new d_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new M1;switch(i.type){case"firstParty":return new B1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new re(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=c_.get(t);i&&(se("ComponentProvider","Removing Datastore"),c_.delete(t),i.terminate())})(this),Promise.resolve()}}function xC(r,e,t,i={}){var o;r=Hn(r,Hc);const l=Vi(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(mf(`https://${g}`),gf("Firestore",!0)),h.host!==Yw&&h.host!==g&&ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:i});if(!ys(_,f)&&(r._setSettings(_),i.mockUserToken)){let w,T;if(typeof i.mockUserToken=="string")w=i.mockUserToken,T=zt.MOCK_USER;else{w=x_(i.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new re(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new zt(S)}r._authCredentials=new U1(new Fv(w,T))}}/**
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
 */class Mi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Mi(this.firestore,e,this._query)}}class ut{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(wl(t,ut._jsonSchema))return new ut(e,i||null,new fe(qe.fromString(t.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:pt("string",ut._jsonSchemaVersion),referencePath:pt("string")};class Ai extends Mi{constructor(e,t,i){super(e,t,bc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new fe(e))}withConverter(e){return new Ai(this.firestore,e,this._path)}}function dl(r,e,...t){if(r=nt(r),Bv("collection","path",e),r instanceof Hc){const i=qe.fromString(e,...t);return Ay(i),new Ai(r,null,i)}{if(!(r instanceof ut||r instanceof Ai))throw new re(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(qe.fromString(e,...t));return Ay(i),new Ai(r.firestore,null,i)}}function qn(r,e,...t){if(r=nt(r),arguments.length===1&&(e=Mf.newId()),Bv("doc","path",e),r instanceof Hc){const i=qe.fromString(e,...t);return Sy(i),new ut(r,null,new fe(i))}{if(!(r instanceof ut||r instanceof Ai))throw new re(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(qe.fromString(e,...t));return Sy(i),new ut(r.firestore,r instanceof Ai?r.converter:null,new fe(i))}}/**
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
 */const f_="AsyncQueue";class p_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ow(this,"async_queue_retry"),this.oc=()=>{const i=Od();i&&se(f_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=Od();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Od();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Fr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!$o(e))throw e;se(f_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,zr("INTERNAL UNHANDLED ERROR: ",m_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=tp.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&_e(47125,{hc:m_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function m_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function g_(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class Ss extends Hc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new p_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new p_(e),this._firestoreClient=void 0,await e}}}function DC(r,e){const t=typeof r=="object"?r:vf(),i=typeof r=="string"?r:pc,o=Rc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=C_("firestore");l&&xC(o,...l)}return o}function qc(r){if(r._terminated)throw new re(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||OC(r),r._firestoreClient}function OC(r){var e,t,i;const o=r._freezeSettings(),l=(function(f,g,_,w){return new rR(f,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Xw(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new RC(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kn(Ot.fromBase64String(e))}catch(t){throw new re(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wl(e,kn._jsonSchema))return kn.fromBase64String(e.bytes)}}kn._jsonSchemaVersion="firestore/bytes/1.0",kn._jsonSchema={type:pt("string",kn._jsonSchemaVersion),bytes:pt("string")};/**
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
 */class cp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hp{constructor(e){this._methodName=e}}/**
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
 */class pr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pr._jsonSchemaVersion}}static fromJSON(e){if(wl(e,pr._jsonSchema))return new pr(e.latitude,e.longitude)}}pr._jsonSchemaVersion="firestore/geoPoint/1.0",pr._jsonSchema={type:pt("string",pr._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
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
 */class mr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:mr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wl(e,mr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new mr(e.vectorValues);throw new re(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mr._jsonSchemaVersion="firestore/vectorValue/1.0",mr._jsonSchema={type:pt("string",mr._jsonSchemaVersion),vectorValues:pt("object")};/**
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
 */const VC=/^__.*__$/;class LC{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,t,this.fieldTransforms):new El(e,this.data,t,this.fieldTransforms)}}function Jw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ec:r})}}class dp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new dp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ic(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Jw(this.Ec)&&VC.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class bC{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||zc(e)}Dc(e,t,i,o=!1){return new dp({Ec:e,methodName:t,bc:i,path:Dt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fp(r){const e=r._freezeSettings(),t=zc(r._databaseId);return new bC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Zw(r,e,t,i,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);nE("Data must be an object, but it was:",h,i);const f=eE(i,h);let g,_;if(l.merge)g=new Wn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const S=UC(e,T,t);if(!h.contains(S))throw new re(W.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);jC(w,S)||w.push(S)}g=new Wn(w),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new LC(new Rn(f),g,_)}class pp extends hp{_toFieldTransform(e){return new PR(e.path,new ul)}isEqual(e){return e instanceof pp}}function MC(r,e,t,i=!1){return mp(t,r.Dc(i?4:3,e))}function mp(r,e){if(tE(r=nt(r)))return nE("Unsupported field value:",e,r),eE(r,e);if(r instanceof hp)return(function(i,o){if(!Jw(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=mp(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(i,o){if((i=nt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return RR(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Qe.fromDate(i);return{timestampValue:_c(o.serializer,l)}}if(i instanceof Qe){const l=new Qe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:_c(o.serializer,l)}}if(i instanceof pr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof kn)return{bytesValue:Tw(o.serializer,i._byteString)};if(i instanceof ut){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:qf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof mr)return(function(h,f){return{mapValue:{fields:{[Xv]:{stringValue:Yv},[mc]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw f.wc("VectorValues must only contain numeric values.");return $f(f.serializer,_)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Dc(i)}`)})(r,e)}function eE(r,e){const t={};return Wv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(r,((i,o)=>{const l=mp(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function tE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Qe||r instanceof pr||r instanceof kn||r instanceof ut||r instanceof hp||r instanceof mr)}function nE(r,e,t){if(!tE(t)||!zv(t)){const i=Dc(t);throw i==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+i)}}function UC(r,e,t){if((e=nt(e))instanceof cp)return e._internalPath;if(typeof e=="string")return rE(r,e);throw Ic("Field path arguments must be of type string or ",r,!1,void 0,t)}const FC=new RegExp("[~\\*/\\[\\]]");function rE(r,e,t){if(e.search(FC)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new cp(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ic(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new re(W.INVALID_ARGUMENT,f+r+g)}function jC(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class iE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class BC extends iE{data(){return super.data()}}function gp(r,e){return typeof e=="string"?rE(r,e):e instanceof cp?e._internalPath:e._delegate._internalPath}/**
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
 */function sE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new re(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yp{}class oE extends yp{}function _p(r,e,...t){let i=[];e instanceof yp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof wp)).length,f=l.filter((g=>g instanceof vp)).length;if(h>1||h>0&&f>0)throw new re(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class vp extends oE{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new vp(e,t,i)}_apply(e){const t=this._parse(e);return aE(e._query,t),new Mi(e.firestore,e.converter,nf(e._query,t))}_parse(e){const t=fp(e.firestore);return(function(l,h,f,g,_,w,T){let S;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new re(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){__(T,w);const $=[];for(const H of T)$.push(y_(g,l,H));S={arrayValue:{values:$}}}else S=y_(g,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||__(T,w),S=MC(f,h,T,w==="in"||w==="not-in");return ft.create(_,w,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class wp extends yp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new wp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Kn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)aE(h,g),h=nf(h,g)})(e._query,t),new Mi(e.firestore,e.converter,nf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ep extends oE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ep(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new re(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new re(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ll(l,h)})(e._query,this._field,this._direction);return new Mi(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Wo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Tp(r,e="asc"){const t=e,i=gp("orderBy",r);return Ep._create(i,t)}function y_(r,e,t){if(typeof(t=nt(t))=="string"){if(t==="")throw new re(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sw(e)&&t.indexOf("/")!==-1)throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(qe.fromString(t));if(!fe.isDocumentKey(i))throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Oy(r,new fe(i))}if(t instanceof ut)return Oy(r,t._key);throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dc(t)}.`)}function __(r,e){if(!Array.isArray(r)||r.length===0)throw new re(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aE(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class zC{convertValue(e,t="none"){switch(xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ks(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[mc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((h=>lt(h.doubleValue)));return new mr(l)}convertGeoPoint(e){return new pr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Lc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const t=Pi(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=qe.fromString(e);Fe(Cw(i),9688,{name:e});const o=new ol(i.get(1),i.get(3)),l=new fe(i.popFirst(5));return o.isEqual(t)||zr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function lE(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class Ga{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ms extends iE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ic(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(gp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ms._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ms._jsonSchemaVersion="firestore/documentSnapshot/1.0",ms._jsonSchema={type:pt("string",ms._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class ic extends ms{data(e={}){return super.data(e)}}class gs{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ga(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new ic(this._firestore,this._userDataWriter,i.key,i,new Ga(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new ic(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new ic(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:$C(f.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=gs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Mf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $C(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
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
 */function Sc(r){r=Hn(r,ut);const e=Hn(r.firestore,Ss);return PC(qc(e),r._key).then((t=>cE(e,r,t)))}gs._jsonSchemaVersion="firestore/querySnapshot/1.0",gs._jsonSchema={type:pt("string",gs._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};class Ip extends zC{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,t)}}function Sp(r){r=Hn(r,Mi);const e=Hn(r.firestore,Ss),t=qc(e),i=new Ip(e);return sE(r._query),NC(t,r._query).then((o=>new gs(e,i,r,o)))}function Uo(r,e,t){r=Hn(r,ut);const i=Hn(r.firestore,Ss),o=lE(r.converter,e,t);return uE(i,[Zw(fp(i),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,dr.none())])}function WC(r,e){const t=Hn(r.firestore,Ss),i=qn(r),o=lE(r.converter,e);return uE(t,[Zw(fp(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,dr.exists(!1))]).then((()=>i))}function HC(r,...e){var t,i,o;r=nt(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||g_(e[h])||(l=e[h++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(g_(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let g,_,w;if(r instanceof ut)_=Hn(r.firestore,Ss),w=bc(r._key.path),g={next:T=>{e[h]&&e[h](cE(_,r,T))},error:e[h+1],complete:e[h+2]};else{const T=Hn(r,Mi);_=Hn(T.firestore,Ss),w=T._query;const S=new Ip(_);g={next:V=>{e[h]&&e[h](new gs(_,S,T,V))},error:e[h+1],complete:e[h+2]},sE(r._query)}return(function(S,V,$,H){const z=new up(H),Y=new op(V,z,$);return S.asyncQueue.enqueueAndForget((async()=>rp(await Tc(S),Y))),()=>{z.Ou(),S.asyncQueue.enqueueAndForget((async()=>ip(await Tc(S),Y)))}})(qc(_),w,f,g)}function uE(r,e){return(function(i,o){const l=new Fr;return i.asyncQueue.enqueueAndForget((async()=>yC(await CC(i),o,l))),l.promise})(qc(r),e)}function cE(r,e,t){const i=t.docs.get(e._key),o=new Ip(r);return new ms(r,o,e._key,i,new Ga(t.hasPendingWrites,t.fromCache),e.converter)}function Fo(){return new pp("serverTimestamp")}(function(e,t=!0){(function(o){Bo=o})(As),_s(new Ri("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Ss(new F1(i.getProvider("auth-internal")),new z1(h,i.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new re(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ol(_.options.projectId,w)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),lr(vy,wy,e),lr(vy,wy,"esm2017")})();const qC={apiKey:"AIzaSyCjLVUF_wyjlduSuCi_4DEyKXOt8JjEvsQ",authDomain:"coachpulse-87341.firebaseapp.com",projectId:"coachpulse-87341",storageBucket:"coachpulse-87341.firebasestorage.app",messagingSenderId:"440637829553",appId:"1:440637829553:web:96fdc2e49e5e58fed18d90"},Ap=V_(qC),Ld=x1(Ap),Vt=hA(Ap);JI(Vt,uv);const Yt=DC(Ap);var Ie=pf();const GC=pT(Ie);var Ku={},bd={exports:{}},on={},Md={exports:{}},Ud={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function KC(){return v_||(v_=1,(function(r){function e(ee,pe){var oe=ee.length;ee.push(pe);e:for(;0<oe;){var L=oe-1>>>1,G=ee[L];if(0<o(G,pe))ee[L]=pe,ee[oe]=G,oe=L;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var pe=ee[0],oe=ee.pop();if(oe!==pe){ee[0]=oe;e:for(var L=0,G=ee.length,de=G>>>1;L<de;){var Se=2*(L+1)-1,Re=ee[Se],De=Se+1,Me=ee[De];if(0>o(Re,oe))De<G&&0>o(Me,Re)?(ee[L]=Me,ee[De]=oe,L=De):(ee[L]=Re,ee[Se]=oe,L=Se);else if(De<G&&0>o(Me,oe))ee[L]=Me,ee[De]=oe,L=De;else break e}}return pe}function o(ee,pe){var oe=ee.sortIndex-pe.sortIndex;return oe!==0?oe:ee.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],w=1,T=null,S=3,V=!1,$=!1,H=!1,z=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(ee){for(var pe=t(_);pe!==null;){if(pe.callback===null)i(_);else if(pe.startTime<=ee)i(_),pe.sortIndex=pe.expirationTime,e(g,pe);else break;pe=t(_)}}function le(ee){if(H=!1,ne(ee),!$)if(t(g)!==null)$=!0,bt(Ce);else{var pe=t(_);pe!==null&&Be(le,pe.startTime-ee)}}function Ce(ee,pe){$=!1,H&&(H=!1,Y(I),I=-1),V=!0;var oe=S;try{for(ne(pe),T=t(g);T!==null&&(!(T.expirationTime>pe)||ee&&!D());){var L=T.callback;if(typeof L=="function"){T.callback=null,S=T.priorityLevel;var G=L(T.expirationTime<=pe);pe=r.unstable_now(),typeof G=="function"?T.callback=G:T===t(g)&&i(g),ne(pe)}else i(g);T=t(g)}if(T!==null)var de=!0;else{var Se=t(_);Se!==null&&Be(le,Se.startTime-pe),de=!1}return de}finally{T=null,S=oe,V=!1}}var ve=!1,P=null,I=-1,R=5,N=-1;function D(){return!(r.unstable_now()-N<R)}function b(){if(P!==null){var ee=r.unstable_now();N=ee;var pe=!0;try{pe=P(!0,ee)}finally{pe?k():(ve=!1,P=null)}}else ve=!1}var k;if(typeof te=="function")k=function(){te(b)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,Lt=st.port2;st.port1.onmessage=b,k=function(){Lt.postMessage(null)}}else k=function(){z(b,0)};function bt(ee){P=ee,ve||(ve=!0,k())}function Be(ee,pe){I=z(function(){ee(r.unstable_now())},pe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){$||V||($=!0,bt(Ce))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(S){case 1:case 2:case 3:var pe=3;break;default:pe=S}var oe=S;S=pe;try{return ee()}finally{S=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,pe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var oe=S;S=ee;try{return pe()}finally{S=oe}},r.unstable_scheduleCallback=function(ee,pe,oe){var L=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?L+oe:L):oe=L,ee){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=oe+G,ee={id:w++,callback:pe,priorityLevel:ee,startTime:oe,expirationTime:G,sortIndex:-1},oe>L?(ee.sortIndex=oe,e(_,ee),t(g)===null&&ee===t(_)&&(H?(Y(I),I=-1):H=!0,Be(le,oe-L))):(ee.sortIndex=G,e(g,ee),$||V||($=!0,bt(Ce))),ee},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(ee){var pe=S;return function(){var oe=S;S=pe;try{return ee.apply(this,arguments)}finally{S=oe}}}})(Ud)),Ud}var w_;function QC(){return w_||(w_=1,Md.exports=KC()),Md.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function XC(){if(E_)return on;E_=1;var r=pf(),e=QC();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function S(n){return g.call(T,n)?!0:g.call(w,n)?!1:_.test(n)?T[n]=!0:(w[n]=!0,!1)}function V(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $(n,s,a,c){if(s===null||typeof s>"u"||V(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function H(n,s,a,c,d,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){z[n]=new H(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];z[s]=new H(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){z[n]=new H(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){z[n]=new H(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){z[n]=new H(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){z[n]=new H(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){z[n]=new H(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){z[n]=new H(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){z[n]=new H(n,5,!1,n.toLowerCase(),null,!1,!1)});var Y=/[\-:]([a-z])/g;function te(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(Y,te);z[s]=new H(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(Y,te);z[s]=new H(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(Y,te);z[s]=new H(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){z[n]=new H(n,1,!1,n.toLowerCase(),null,!1,!1)}),z.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){z[n]=new H(n,1,!1,n.toLowerCase(),null,!0,!0)});function ne(n,s,a,c){var d=z.hasOwnProperty(s)?z[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,d,c)&&(a=null),c||d===null?S(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var le=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),ve=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),st=Symbol.for("react.suspense_list"),Lt=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),ee=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,L;function G(n){if(L===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);L=s&&s[1]||""}return`
`+L+n}var de=!1;function Se(n,s){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var c=j}Reflect.construct(n,[],s)}else{try{s.call()}catch(j){c=j}n.call(s.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,A=m.length-1;1<=v&&0<=A&&d[v]!==m[A];)A--;for(;1<=v&&0<=A;v--,A--)if(d[v]!==m[A]){if(v!==1||A!==1)do if(v--,A--,0>A||d[v]!==m[A]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=A);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?G(n):""}function Re(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function De(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case ve:return"Portal";case R:return"Profiler";case I:return"StrictMode";case k:return"Suspense";case st:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case b:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Lt:return s=n.displayName||null,s!==null?s:De(n.type)||"Memo";case bt:s=n._payload,n=n._init;try{return De(n(s))}catch{}}return null}function Me(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Et(n){var s=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function _r(n){n._valueTracker||(n._valueTracker=Et(n))}function xs(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Wr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ui(n,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ds(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function qo(n,s){s=s.checked,s!=null&&ne(n,"checked",s,!1)}function Go(n,s){qo(n,s);var a=Ue(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?Os(n,s.type,a):s.hasOwnProperty("defaultValue")&&Os(n,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Al(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Os(n,s,a){(s!=="number"||Wr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var vr=Array.isArray;function wr(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Ko(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vs(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(vr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Ue(a)}}function Ls(n,s){var a=Ue(s.value),c=Ue(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Qo(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function mt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gt(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?mt(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Er,Xo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Er.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Hr(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ji=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(n){ji.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Fi[s]=Fi[n]})});function Yo(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Fi.hasOwnProperty(n)&&Fi[n]?(""+s).trim():s+"px"}function Jo(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Yo(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Zo=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ea(n,s){if(s){if(Zo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ta(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function bs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ms=null,gn=null,Qn=null;function Us(n){if(n=Aa(n)){if(typeof Ms!="function")throw Error(t(280));var s=n.stateNode;s&&(s=tu(s),Ms(n.stateNode,n.type,s))}}function Xn(n){gn?Qn?Qn.push(n):Qn=[n]:gn=n}function na(){if(gn){var n=gn,s=Qn;if(Qn=gn=null,Us(n),s)for(n=0;n<s.length;n++)Us(s[n])}}function zi(n,s){return n(s)}function ra(){}var Tr=!1;function ia(n,s,a){if(Tr)return n(s,a);Tr=!0;try{return zi(n,s,a)}finally{Tr=!1,(gn!==null||Qn!==null)&&(ra(),na())}}function ot(n,s){var a=n.stateNode;if(a===null)return null;var c=tu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Fs=!1;if(f)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Fs=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Fs=!1}function $i(n,s,a,c,d,m,v,A,C){var j=Array.prototype.slice.call(arguments,3);try{s.apply(a,j)}catch(Q){this.onError(Q)}}var Wi=!1,js=null,Pn=!1,sa=null,Gc={onError:function(n){Wi=!0,js=n}};function Bs(n,s,a,c,d,m,v,A,C){Wi=!1,js=null,$i.apply(Gc,arguments)}function Rl(n,s,a,c,d,m,v,A,C){if(Bs.apply(this,arguments),Wi){if(Wi){var j=js;Wi=!1,js=null}else throw Error(t(198));Pn||(Pn=!0,sa=j)}}function Nn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Hi(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function xn(n){if(Nn(n)!==n)throw Error(t(188))}function kl(n){var s=n.alternate;if(!s){if(s=Nn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return xn(d),n;if(m===c)return xn(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,A=d.child;A;){if(A===a){v=!0,a=d,c=m;break}if(A===c){v=!0,c=d,a=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===a){v=!0,a=m,c=d;break}if(A===c){v=!0,c=m,a=d;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function oa(n){return n=kl(n),n!==null?zs(n):null}function zs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=zs(n);if(s!==null)return s;n=n.sibling}return null}var $s=e.unstable_scheduleCallback,aa=e.unstable_cancelCallback,Cl=e.unstable_shouldYield,Kc=e.unstable_requestPaint,We=e.unstable_now,Pl=e.unstable_getCurrentPriorityLevel,qi=e.unstable_ImmediatePriority,qr=e.unstable_UserBlockingPriority,yn=e.unstable_NormalPriority,la=e.unstable_LowPriority,Nl=e.unstable_IdlePriority,Gi=null,ln=null;function xl(n){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Gi,n,void 0,(n.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:Ol,ua=Math.log,Dl=Math.LN2;function Ol(n){return n>>>=0,n===0?32:31-(ua(n)/Dl|0)|0}var Ws=64,Hs=4194304;function Gr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ki(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var A=v&~d;A!==0?c=Gr(A):(m&=v,m!==0&&(c=Gr(m)))}else v=a&~d,v!==0?c=Gr(v):m!==0&&(c=Gr(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-Ht(s),d=1<<a,c|=n[a],s&=~d;return c}function Qc(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ir(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-Ht(m),A=1<<v,C=d[v];C===-1?((A&a)===0||(A&c)!==0)&&(d[v]=Qc(A,s)):C<=s&&(n.expiredLanes|=A),m&=~A}}function un(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Qi(){var n=Ws;return Ws<<=1,(Ws&4194240)===0&&(Ws=64),n}function Kr(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function Qr(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Ht(s),n[s]=a}function ze(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ht(a),m=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Xr(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-Ht(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var xe=0;function Yr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Vl,qs,Ll,bl,Ml,ca=!1,Yn=[],kt=null,Dn=null,On=null,Jr=new Map,_n=new Map,Jn=[],Xc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ul(n,s){switch(n){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Jr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(s.pointerId)}}function Jt(n,s,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Aa(s),s!==null&&qs(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function Yc(n,s,a,c,d){switch(s){case"focusin":return kt=Jt(kt,n,s,a,c,d),!0;case"dragenter":return Dn=Jt(Dn,n,s,a,c,d),!0;case"mouseover":return On=Jt(On,n,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Jr.set(m,Jt(Jr.get(m)||null,n,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,_n.set(m,Jt(_n.get(m)||null,n,s,a,c,d)),!0}return!1}function Fl(n){var s=es(n.target);if(s!==null){var a=Nn(s);if(a!==null){if(s=a.tag,s===13){if(s=Hi(a),s!==null){n.blockedOn=s,Ml(n.priority,function(){Ll(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Sr(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Gs(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Bi=c,a.target.dispatchEvent(c),Bi=null}else return s=Aa(a),s!==null&&qs(s),n.blockedOn=a,!1;s.shift()}return!0}function Xi(n,s,a){Sr(n)&&a.delete(s)}function jl(){ca=!1,kt!==null&&Sr(kt)&&(kt=null),Dn!==null&&Sr(Dn)&&(Dn=null),On!==null&&Sr(On)&&(On=null),Jr.forEach(Xi),_n.forEach(Xi)}function Vn(n,s){n.blockedOn===s&&(n.blockedOn=null,ca||(ca=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,jl)))}function Ln(n){function s(d){return Vn(d,n)}if(0<Yn.length){Vn(Yn[0],n);for(var a=1;a<Yn.length;a++){var c=Yn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(kt!==null&&Vn(kt,n),Dn!==null&&Vn(Dn,n),On!==null&&Vn(On,n),Jr.forEach(s),_n.forEach(s),a=0;a<Jn.length;a++)c=Jn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)Fl(a),a.blockedOn===null&&Jn.shift()}var Ar=le.ReactCurrentBatchConfig,Zr=!0;function Xe(n,s,a,c){var d=xe,m=Ar.transition;Ar.transition=null;try{xe=1,ha(n,s,a,c)}finally{xe=d,Ar.transition=m}}function Jc(n,s,a,c){var d=xe,m=Ar.transition;Ar.transition=null;try{xe=4,ha(n,s,a,c)}finally{xe=d,Ar.transition=m}}function ha(n,s,a,c){if(Zr){var d=Gs(n,s,a,c);if(d===null)uh(n,s,c,Yi,a),Ul(n,c);else if(Yc(d,n,s,a,c))c.stopPropagation();else if(Ul(n,c),s&4&&-1<Xc.indexOf(n)){for(;d!==null;){var m=Aa(d);if(m!==null&&Vl(m),m=Gs(n,s,a,c),m===null&&uh(n,s,c,Yi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else uh(n,s,c,null,a)}}var Yi=null;function Gs(n,s,a,c){if(Yi=null,n=bs(c),n=es(n),n!==null)if(s=Nn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Hi(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Yi=n,null}function da(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pl()){case qi:return 1;case qr:return 4;case yn:case la:return 16;case Nl:return 536870912;default:return 16}default:return 16}}var cn=null,Ks=null,Zt=null;function fa(){if(Zt)return Zt;var n,s=Ks,a=s.length,c,d="value"in cn?cn.value:cn.textContent,m=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[m-c];c++);return Zt=d.slice(n,1<c?1-c:void 0)}function Qs(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Zn(){return!0}function pa(){return!1}function Ct(n){function s(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Zn:pa,this.isPropagationStopped=pa,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),s}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=Ct(bn),er=oe({},bn,{view:0,detail:0}),Zc=Ct(er),Ys,Rr,ei,Ji=oe({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ei&&(ei&&n.type==="mousemove"?(Ys=n.screenX-ei.screenX,Rr=n.screenY-ei.screenY):Rr=Ys=0,ei=n),Ys)},movementY:function(n){return"movementY"in n?n.movementY:Rr}}),Js=Ct(Ji),ma=oe({},Ji,{dataTransfer:0}),Bl=Ct(ma),Zs=oe({},er,{relatedTarget:0}),eo=Ct(Zs),zl=oe({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),kr=Ct(zl),$l=oe({},bn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Wl=Ct($l),Hl=oe({},bn,{data:0}),ga=Ct(Hl),to={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ql={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gl(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=ql[n])?!!s[n]:!1}function tr(){return Gl}var u=oe({},er,{key:function(n){if(n.key){var s=to[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Qs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(n){return n.type==="keypress"?Qs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=Ct(u),y=oe({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Ct(y),M=oe({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),B=Ct(M),Z=oe({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=Ct(Z),yt=oe({},Ji,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Ct(yt),Tt=[9,13,27,32],ct=f&&"CompositionEvent"in window,vn=null;f&&"documentMode"in document&&(vn=document.documentMode);var hn=f&&"TextEvent"in window&&!vn,Zi=f&&(!ct||vn&&8<vn&&11>=vn),no=" ",Rp=!1;function kp(n,s){switch(n){case"keyup":return Tt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ro=!1;function hE(n,s){switch(n){case"compositionend":return Cp(s);case"keypress":return s.which!==32?null:(Rp=!0,no);case"textInput":return n=s.data,n===no&&Rp?null:n;default:return null}}function dE(n,s){if(ro)return n==="compositionend"||!ct&&kp(n,s)?(n=fa(),Zt=Ks=cn=null,ro=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Zi&&s.locale!=="ko"?null:s.data;default:return null}}var fE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!fE[n.type]:s==="textarea"}function Np(n,s,a,c){Xn(c),s=Jl(s,"onChange"),0<s.length&&(a=new Xs("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var ya=null,_a=null;function pE(n){Kp(n,0)}function Kl(n){var s=lo(n);if(xs(s))return n}function mE(n,s){if(n==="change")return s}var xp=!1;if(f){var eh;if(f){var th="oninput"in document;if(!th){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),th=typeof Dp.oninput=="function"}eh=th}else eh=!1;xp=eh&&(!document.documentMode||9<document.documentMode)}function Op(){ya&&(ya.detachEvent("onpropertychange",Vp),_a=ya=null)}function Vp(n){if(n.propertyName==="value"&&Kl(_a)){var s=[];Np(s,_a,n,bs(n)),ia(pE,s)}}function gE(n,s,a){n==="focusin"?(Op(),ya=s,_a=a,ya.attachEvent("onpropertychange",Vp)):n==="focusout"&&Op()}function yE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Kl(_a)}function _E(n,s){if(n==="click")return Kl(s)}function vE(n,s){if(n==="input"||n==="change")return Kl(s)}function wE(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Mn=typeof Object.is=="function"?Object.is:wE;function va(n,s){if(Mn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!Mn(n[d],s[d]))return!1}return!0}function Lp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bp(n,s){var a=Lp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lp(a)}}function Mp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Mp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Up(){for(var n=window,s=Wr();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Wr(n.document)}return s}function nh(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function EE(n){var s=Up(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&Mp(a.ownerDocument.documentElement,a)){if(c!==null&&nh(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=bp(a,m);var v=bp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var TE=f&&"documentMode"in document&&11>=document.documentMode,io=null,rh=null,wa=null,ih=!1;function Fp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ih||io==null||io!==Wr(c)||(c=io,"selectionStart"in c&&nh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),wa&&va(wa,c)||(wa=c,c=Jl(rh,"onSelect"),0<c.length&&(s=new Xs("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=io)))}function Ql(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var so={animationend:Ql("Animation","AnimationEnd"),animationiteration:Ql("Animation","AnimationIteration"),animationstart:Ql("Animation","AnimationStart"),transitionend:Ql("Transition","TransitionEnd")},sh={},jp={};f&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function Xl(n){if(sh[n])return sh[n];if(!so[n])return n;var s=so[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in jp)return sh[n]=s[a];return n}var Bp=Xl("animationend"),zp=Xl("animationiteration"),$p=Xl("animationstart"),Wp=Xl("transitionend"),Hp=new Map,qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(n,s){Hp.set(n,s),l(s,[n])}for(var oh=0;oh<qp.length;oh++){var ah=qp[oh],IE=ah.toLowerCase(),SE=ah[0].toUpperCase()+ah.slice(1);ti(IE,"on"+SE)}ti(Bp,"onAnimationEnd"),ti(zp,"onAnimationIteration"),ti($p,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(Wp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function Gp(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,Rl(c,s,void 0,n),n.currentTarget=null}function Kp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var v=c.length-1;0<=v;v--){var A=c[v],C=A.instance,j=A.currentTarget;if(A=A.listener,C!==m&&d.isPropagationStopped())break e;Gp(d,A,j),m=C}else for(v=0;v<c.length;v++){if(A=c[v],C=A.instance,j=A.currentTarget,A=A.listener,C!==m&&d.isPropagationStopped())break e;Gp(d,A,j),m=C}}}if(Pn)throw n=sa,Pn=!1,sa=null,n}function Ge(n,s){var a=s[mh];a===void 0&&(a=s[mh]=new Set);var c=n+"__bubble";a.has(c)||(Qp(s,n,2,!1),a.add(c))}function lh(n,s,a){var c=0;s&&(c|=4),Qp(a,n,c,s)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Ta(n){if(!n[Yl]){n[Yl]=!0,i.forEach(function(a){a!=="selectionchange"&&(AE.has(a)||lh(a,!1,n),lh(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Yl]||(s[Yl]=!0,lh("selectionchange",!1,s))}}function Qp(n,s,a,c){switch(da(s)){case 1:var d=Xe;break;case 4:d=Jc;break;default:d=ha}a=d.bind(null,s,a,n),d=void 0,!Fs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function uh(n,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;A!==null;){if(v=es(A),v===null)return;if(C=v.tag,C===5||C===6){c=m=v;continue e}A=A.parentNode}}c=c.return}ia(function(){var j=m,Q=bs(a),X=[];e:{var K=Hp.get(n);if(K!==void 0){var ie=Xs,ue=n;switch(n){case"keypress":if(Qs(a)===0)break e;case"keydown":case"keyup":ie=p;break;case"focusin":ue="focus",ie=eo;break;case"focusout":ue="blur",ie=eo;break;case"beforeblur":case"afterblur":ie=eo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Bl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=B;break;case Bp:case zp:case $p:ie=kr;break;case Wp:ie=je;break;case"scroll":ie=Zc;break;case"wheel":ie=Oe;break;case"copy":case"cut":case"paste":ie=Wl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=E}var ce=(s&4)!==0,at=!ce&&n==="scroll",U=ce?K!==null?K+"Capture":null:K;ce=[];for(var x=j,F;x!==null;){F=x;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,U!==null&&(J=ot(x,U),J!=null&&ce.push(Ia(x,J,F)))),at)break;x=x.return}0<ce.length&&(K=new ie(K,ue,null,a,Q),X.push({event:K,listeners:ce}))}}if((s&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",K&&a!==Bi&&(ue=a.relatedTarget||a.fromElement)&&(es(ue)||ue[Cr]))break e;if((ie||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,ie?(ue=a.relatedTarget||a.toElement,ie=j,ue=ue?es(ue):null,ue!==null&&(at=Nn(ue),ue!==at||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=j),ie!==ue)){if(ce=Js,J="onMouseLeave",U="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(ce=E,J="onPointerLeave",U="onPointerEnter",x="pointer"),at=ie==null?K:lo(ie),F=ue==null?K:lo(ue),K=new ce(J,x+"leave",ie,a,Q),K.target=at,K.relatedTarget=F,J=null,es(Q)===j&&(ce=new ce(U,x+"enter",ue,a,Q),ce.target=F,ce.relatedTarget=at,J=ce),at=J,ie&&ue)t:{for(ce=ie,U=ue,x=0,F=ce;F;F=oo(F))x++;for(F=0,J=U;J;J=oo(J))F++;for(;0<x-F;)ce=oo(ce),x--;for(;0<F-x;)U=oo(U),F--;for(;x--;){if(ce===U||U!==null&&ce===U.alternate)break t;ce=oo(ce),U=oo(U)}ce=null}else ce=null;ie!==null&&Xp(X,K,ie,ce,!1),ue!==null&&at!==null&&Xp(X,at,ue,ce,!0)}}e:{if(K=j?lo(j):window,ie=K.nodeName&&K.nodeName.toLowerCase(),ie==="select"||ie==="input"&&K.type==="file")var he=mE;else if(Pp(K))if(xp)he=vE;else{he=yE;var me=gE}else(ie=K.nodeName)&&ie.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(he=_E);if(he&&(he=he(n,j))){Np(X,he,a,Q);break e}me&&me(n,K,j),n==="focusout"&&(me=K._wrapperState)&&me.controlled&&K.type==="number"&&Os(K,"number",K.value)}switch(me=j?lo(j):window,n){case"focusin":(Pp(me)||me.contentEditable==="true")&&(io=me,rh=j,wa=null);break;case"focusout":wa=rh=io=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,Fp(X,a,Q);break;case"selectionchange":if(TE)break;case"keydown":case"keyup":Fp(X,a,Q)}var ge;if(ct)e:{switch(n){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else ro?kp(n,a)&&(we="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Zi&&a.locale!=="ko"&&(ro||we!=="onCompositionStart"?we==="onCompositionEnd"&&ro&&(ge=fa()):(cn=Q,Ks="value"in cn?cn.value:cn.textContent,ro=!0)),me=Jl(j,we),0<me.length&&(we=new ga(we,n,null,a,Q),X.push({event:we,listeners:me}),ge?we.data=ge:(ge=Cp(a),ge!==null&&(we.data=ge)))),(ge=hn?hE(n,a):dE(n,a))&&(j=Jl(j,"onBeforeInput"),0<j.length&&(Q=new ga("onBeforeInput","beforeinput",null,a,Q),X.push({event:Q,listeners:j}),Q.data=ge))}Kp(X,s)})}function Ia(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Jl(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=ot(n,a),m!=null&&c.unshift(Ia(n,m,d)),m=ot(n,s),m!=null&&c.push(Ia(n,m,d))),n=n.return}return c}function oo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xp(n,s,a,c,d){for(var m=s._reactName,v=[];a!==null&&a!==c;){var A=a,C=A.alternate,j=A.stateNode;if(C!==null&&C===c)break;A.tag===5&&j!==null&&(A=j,d?(C=ot(a,m),C!=null&&v.unshift(Ia(a,C,A))):d||(C=ot(a,m),C!=null&&v.push(Ia(a,C,A)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var RE=/\r\n?/g,kE=/\u0000|\uFFFD/g;function Yp(n){return(typeof n=="string"?n:""+n).replace(RE,`
`).replace(kE,"")}function Zl(n,s,a){if(s=Yp(s),Yp(n)!==s&&a)throw Error(t(425))}function eu(){}var ch=null,hh=null;function dh(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,CE=typeof clearTimeout=="function"?clearTimeout:void 0,Jp=typeof Promise=="function"?Promise:void 0,PE=typeof queueMicrotask=="function"?queueMicrotask:typeof Jp<"u"?function(n){return Jp.resolve(null).then(n).catch(NE)}:fh;function NE(n){setTimeout(function(){throw n})}function ph(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Ln(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Ln(s)}function ni(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Zp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var ao=Math.random().toString(36).slice(2),nr="__reactFiber$"+ao,Sa="__reactProps$"+ao,Cr="__reactContainer$"+ao,mh="__reactEvents$"+ao,xE="__reactListeners$"+ao,DE="__reactHandles$"+ao;function es(n){var s=n[nr];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Cr]||a[nr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Zp(n);n!==null;){if(a=n[nr])return a;n=Zp(n)}return s}n=a,a=n.parentNode}return null}function Aa(n){return n=n[nr]||n[Cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function lo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function tu(n){return n[Sa]||null}var gh=[],uo=-1;function ri(n){return{current:n}}function Ke(n){0>uo||(n.current=gh[uo],gh[uo]=null,uo--)}function He(n,s){uo++,gh[uo]=n.current,n.current=s}var ii={},Mt=ri(ii),en=ri(!1),ts=ii;function co(n,s){var a=n.type.contextTypes;if(!a)return ii;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function tn(n){return n=n.childContextTypes,n!=null}function nu(){Ke(en),Ke(Mt)}function em(n,s,a){if(Mt.current!==ii)throw Error(t(168));He(Mt,s),He(en,a)}function tm(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(n)||"Unknown",d));return oe({},a,c)}function ru(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ii,ts=Mt.current,He(Mt,n),He(en,en.current),!0}function nm(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=tm(n,s,ts),c.__reactInternalMemoizedMergedChildContext=n,Ke(en),Ke(Mt),He(Mt,n)):Ke(en),He(en,a)}var Pr=null,iu=!1,yh=!1;function rm(n){Pr===null?Pr=[n]:Pr.push(n)}function OE(n){iu=!0,rm(n)}function si(){if(!yh&&Pr!==null){yh=!0;var n=0,s=xe;try{var a=Pr;for(xe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Pr=null,iu=!1}catch(d){throw Pr!==null&&(Pr=Pr.slice(n+1)),$s(qi,si),d}finally{xe=s,yh=!1}}return null}var ho=[],fo=0,su=null,ou=0,wn=[],En=0,ns=null,Nr=1,xr="";function rs(n,s){ho[fo++]=ou,ho[fo++]=su,su=n,ou=s}function im(n,s,a){wn[En++]=Nr,wn[En++]=xr,wn[En++]=ns,ns=n;var c=Nr;n=xr;var d=32-Ht(c)-1;c&=~(1<<d),a+=1;var m=32-Ht(s)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Nr=1<<32-Ht(s)+d|a<<d|c,xr=m+n}else Nr=1<<m|a<<d|c,xr=n}function _h(n){n.return!==null&&(rs(n,1),im(n,1,0))}function vh(n){for(;n===su;)su=ho[--fo],ho[fo]=null,ou=ho[--fo],ho[fo]=null;for(;n===ns;)ns=wn[--En],wn[En]=null,xr=wn[--En],wn[En]=null,Nr=wn[--En],wn[En]=null}var dn=null,fn=null,Ye=!1,Un=null;function sm(n,s){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function om(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,dn=n,fn=ni(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,dn=n,fn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ns!==null?{id:Nr,overflow:xr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,dn=n,fn=null,!0):!1;default:return!1}}function wh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Eh(n){if(Ye){var s=fn;if(s){var a=s;if(!om(n,s)){if(wh(n))throw Error(t(418));s=ni(a.nextSibling);var c=dn;s&&om(n,s)?sm(c,a):(n.flags=n.flags&-4097|2,Ye=!1,dn=n)}}else{if(wh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,dn=n}}}function am(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;dn=n}function au(n){if(n!==dn)return!1;if(!Ye)return am(n),Ye=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!dh(n.type,n.memoizedProps)),s&&(s=fn)){if(wh(n))throw lm(),Error(t(418));for(;s;)sm(n,s),s=ni(s.nextSibling)}if(am(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){fn=ni(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}fn=null}}else fn=dn?ni(n.stateNode.nextSibling):null;return!0}function lm(){for(var n=fn;n;)n=ni(n.nextSibling)}function po(){fn=dn=null,Ye=!1}function Th(n){Un===null?Un=[n]:Un.push(n)}var VE=le.ReactCurrentBatchConfig;function Ra(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var A=d.refs;v===null?delete A[m]:A[m]=v},s._stringRef=m,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function lu(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function um(n){var s=n._init;return s(n._payload)}function cm(n){function s(U,x){if(n){var F=U.deletions;F===null?(U.deletions=[x],U.flags|=16):F.push(x)}}function a(U,x){if(!n)return null;for(;x!==null;)s(U,x),x=x.sibling;return null}function c(U,x){for(U=new Map;x!==null;)x.key!==null?U.set(x.key,x):U.set(x.index,x),x=x.sibling;return U}function d(U,x){return U=fi(U,x),U.index=0,U.sibling=null,U}function m(U,x,F){return U.index=F,n?(F=U.alternate,F!==null?(F=F.index,F<x?(U.flags|=2,x):F):(U.flags|=2,x)):(U.flags|=1048576,x)}function v(U){return n&&U.alternate===null&&(U.flags|=2),U}function A(U,x,F,J){return x===null||x.tag!==6?(x=fd(F,U.mode,J),x.return=U,x):(x=d(x,F),x.return=U,x)}function C(U,x,F,J){var he=F.type;return he===P?Q(U,x,F.props.children,J,F.key):x!==null&&(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===bt&&um(he)===x.type)?(J=d(x,F.props),J.ref=Ra(U,x,F),J.return=U,J):(J=Du(F.type,F.key,F.props,null,U.mode,J),J.ref=Ra(U,x,F),J.return=U,J)}function j(U,x,F,J){return x===null||x.tag!==4||x.stateNode.containerInfo!==F.containerInfo||x.stateNode.implementation!==F.implementation?(x=pd(F,U.mode,J),x.return=U,x):(x=d(x,F.children||[]),x.return=U,x)}function Q(U,x,F,J,he){return x===null||x.tag!==7?(x=hs(F,U.mode,J,he),x.return=U,x):(x=d(x,F),x.return=U,x)}function X(U,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return x=fd(""+x,U.mode,F),x.return=U,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ce:return F=Du(x.type,x.key,x.props,null,U.mode,F),F.ref=Ra(U,null,x),F.return=U,F;case ve:return x=pd(x,U.mode,F),x.return=U,x;case bt:var J=x._init;return X(U,J(x._payload),F)}if(vr(x)||pe(x))return x=hs(x,U.mode,F,null),x.return=U,x;lu(U,x)}return null}function K(U,x,F,J){var he=x!==null?x.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:A(U,x,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ce:return F.key===he?C(U,x,F,J):null;case ve:return F.key===he?j(U,x,F,J):null;case bt:return he=F._init,K(U,x,he(F._payload),J)}if(vr(F)||pe(F))return he!==null?null:Q(U,x,F,J,null);lu(U,F)}return null}function ie(U,x,F,J,he){if(typeof J=="string"&&J!==""||typeof J=="number")return U=U.get(F)||null,A(x,U,""+J,he);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Ce:return U=U.get(J.key===null?F:J.key)||null,C(x,U,J,he);case ve:return U=U.get(J.key===null?F:J.key)||null,j(x,U,J,he);case bt:var me=J._init;return ie(U,x,F,me(J._payload),he)}if(vr(J)||pe(J))return U=U.get(F)||null,Q(x,U,J,he,null);lu(x,J)}return null}function ue(U,x,F,J){for(var he=null,me=null,ge=x,we=x=0,At=null;ge!==null&&we<F.length;we++){ge.index>we?(At=ge,ge=null):At=ge.sibling;var be=K(U,ge,F[we],J);if(be===null){ge===null&&(ge=At);break}n&&ge&&be.alternate===null&&s(U,ge),x=m(be,x,we),me===null?he=be:me.sibling=be,me=be,ge=At}if(we===F.length)return a(U,ge),Ye&&rs(U,we),he;if(ge===null){for(;we<F.length;we++)ge=X(U,F[we],J),ge!==null&&(x=m(ge,x,we),me===null?he=ge:me.sibling=ge,me=ge);return Ye&&rs(U,we),he}for(ge=c(U,ge);we<F.length;we++)At=ie(ge,U,we,F[we],J),At!==null&&(n&&At.alternate!==null&&ge.delete(At.key===null?we:At.key),x=m(At,x,we),me===null?he=At:me.sibling=At,me=At);return n&&ge.forEach(function(pi){return s(U,pi)}),Ye&&rs(U,we),he}function ce(U,x,F,J){var he=pe(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var me=he=null,ge=x,we=x=0,At=null,be=F.next();ge!==null&&!be.done;we++,be=F.next()){ge.index>we?(At=ge,ge=null):At=ge.sibling;var pi=K(U,ge,be.value,J);if(pi===null){ge===null&&(ge=At);break}n&&ge&&pi.alternate===null&&s(U,ge),x=m(pi,x,we),me===null?he=pi:me.sibling=pi,me=pi,ge=At}if(be.done)return a(U,ge),Ye&&rs(U,we),he;if(ge===null){for(;!be.done;we++,be=F.next())be=X(U,be.value,J),be!==null&&(x=m(be,x,we),me===null?he=be:me.sibling=be,me=be);return Ye&&rs(U,we),he}for(ge=c(U,ge);!be.done;we++,be=F.next())be=ie(ge,U,we,be.value,J),be!==null&&(n&&be.alternate!==null&&ge.delete(be.key===null?we:be.key),x=m(be,x,we),me===null?he=be:me.sibling=be,me=be);return n&&ge.forEach(function(fT){return s(U,fT)}),Ye&&rs(U,we),he}function at(U,x,F,J){if(typeof F=="object"&&F!==null&&F.type===P&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ce:e:{for(var he=F.key,me=x;me!==null;){if(me.key===he){if(he=F.type,he===P){if(me.tag===7){a(U,me.sibling),x=d(me,F.props.children),x.return=U,U=x;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===bt&&um(he)===me.type){a(U,me.sibling),x=d(me,F.props),x.ref=Ra(U,me,F),x.return=U,U=x;break e}a(U,me);break}else s(U,me);me=me.sibling}F.type===P?(x=hs(F.props.children,U.mode,J,F.key),x.return=U,U=x):(J=Du(F.type,F.key,F.props,null,U.mode,J),J.ref=Ra(U,x,F),J.return=U,U=J)}return v(U);case ve:e:{for(me=F.key;x!==null;){if(x.key===me)if(x.tag===4&&x.stateNode.containerInfo===F.containerInfo&&x.stateNode.implementation===F.implementation){a(U,x.sibling),x=d(x,F.children||[]),x.return=U,U=x;break e}else{a(U,x);break}else s(U,x);x=x.sibling}x=pd(F,U.mode,J),x.return=U,U=x}return v(U);case bt:return me=F._init,at(U,x,me(F._payload),J)}if(vr(F))return ue(U,x,F,J);if(pe(F))return ce(U,x,F,J);lu(U,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,x!==null&&x.tag===6?(a(U,x.sibling),x=d(x,F),x.return=U,U=x):(a(U,x),x=fd(F,U.mode,J),x.return=U,U=x),v(U)):a(U,x)}return at}var mo=cm(!0),hm=cm(!1),uu=ri(null),cu=null,go=null,Ih=null;function Sh(){Ih=go=cu=null}function Ah(n){var s=uu.current;Ke(uu),n._currentValue=s}function Rh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function yo(n,s){cu=n,Ih=go=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(nn=!0),n.firstContext=null)}function Tn(n){var s=n._currentValue;if(Ih!==n)if(n={context:n,memoizedValue:s,next:null},go===null){if(cu===null)throw Error(t(308));go=n,cu.dependencies={lanes:0,firstContext:n}}else go=go.next=n;return s}var is=null;function kh(n){is===null?is=[n]:is.push(n)}function dm(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,kh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Dr(n,c)}function Dr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var oi=!1;function Ch(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Or(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ai(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Dr(n,a)}return d=c.interleaved,d===null?(s.next=s,kh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Dr(n,a)}function hu(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Xr(n,a)}}function pm(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function du(n,s,a,c){var d=n.updateQueue;oi=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var C=A,j=C.next;C.next=null,v===null?m=j:v.next=j,v=C;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,A=Q.lastBaseUpdate,A!==v&&(A===null?Q.firstBaseUpdate=j:A.next=j,Q.lastBaseUpdate=C))}if(m!==null){var X=d.baseState;v=0,Q=j=C=null,A=m;do{var K=A.lane,ie=A.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:ie,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ue=n,ce=A;switch(K=s,ie=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){X=ue.call(ie,X,K);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,K=typeof ue=="function"?ue.call(ie,X,K):ue,K==null)break e;X=oe({},X,K);break e;case 2:oi=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[A]:K.push(A))}else ie={eventTime:ie,lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Q===null?(j=Q=ie,C=X):Q=Q.next=ie,v|=K;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;K=A,A=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(C=X),d.baseState=C,d.firstBaseUpdate=j,d.lastBaseUpdate=Q,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);as|=v,n.lanes=v,n.memoizedState=X}}function mm(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ka={},rr=ri(ka),Ca=ri(ka),Pa=ri(ka);function ss(n){if(n===ka)throw Error(t(174));return n}function Ph(n,s){switch(He(Pa,s),He(Ca,n),He(rr,ka),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:gt(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=gt(s,n)}Ke(rr),He(rr,s)}function _o(){Ke(rr),Ke(Ca),Ke(Pa)}function gm(n){ss(Pa.current);var s=ss(rr.current),a=gt(s,n.type);s!==a&&(He(Ca,n),He(rr,a))}function Nh(n){Ca.current===n&&(Ke(rr),Ke(Ca))}var Je=ri(0);function fu(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var xh=[];function Dh(){for(var n=0;n<xh.length;n++)xh[n]._workInProgressVersionPrimary=null;xh.length=0}var pu=le.ReactCurrentDispatcher,Oh=le.ReactCurrentBatchConfig,os=0,Ze=null,_t=null,It=null,mu=!1,Na=!1,xa=0,LE=0;function Ut(){throw Error(t(321))}function Vh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!Mn(n[a],s[a]))return!1;return!0}function Lh(n,s,a,c,d,m){if(os=m,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,pu.current=n===null||n.memoizedState===null?FE:jE,n=a(c,d),Na){m=0;do{if(Na=!1,xa=0,25<=m)throw Error(t(301));m+=1,It=_t=null,s.updateQueue=null,pu.current=BE,n=a(c,d)}while(Na)}if(pu.current=_u,s=_t!==null&&_t.next!==null,os=0,It=_t=Ze=null,mu=!1,s)throw Error(t(300));return n}function bh(){var n=xa!==0;return xa=0,n}function ir(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?Ze.memoizedState=It=n:It=It.next=n,It}function In(){if(_t===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=_t.next;var s=It===null?Ze.memoizedState:It.next;if(s!==null)It=s,_t=n;else{if(n===null)throw Error(t(310));_t=n,n={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},It===null?Ze.memoizedState=It=n:It=It.next=n}return It}function Da(n,s){return typeof s=="function"?s(n):s}function Mh(n){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=_t,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var A=v=null,C=null,j=m;do{var Q=j.lane;if((os&Q)===Q)C!==null&&(C=C.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var X={lane:Q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};C===null?(A=C=X,v=c):C=C.next=X,Ze.lanes|=Q,as|=Q}j=j.next}while(j!==null&&j!==m);C===null?v=c:C.next=A,Mn(c,s.memoizedState)||(nn=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Ze.lanes|=m,as|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Uh(n){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);Mn(m,s.memoizedState)||(nn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function ym(){}function _m(n,s){var a=Ze,c=In(),d=s(),m=!Mn(c.memoizedState,d);if(m&&(c.memoizedState=d,nn=!0),c=c.queue,Fh(Em.bind(null,a,c,n),[n]),c.getSnapshot!==s||m||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,Oa(9,wm.bind(null,a,c,d,s),void 0,null),St===null)throw Error(t(349));(os&30)!==0||vm(a,s,d)}return d}function vm(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function wm(n,s,a,c){s.value=a,s.getSnapshot=c,Tm(s)&&Im(n)}function Em(n,s,a){return a(function(){Tm(s)&&Im(n)})}function Tm(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!Mn(n,a)}catch{return!0}}function Im(n){var s=Dr(n,1);s!==null&&zn(s,n,1,-1)}function Sm(n){var s=ir();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:n},s.queue=n,n=n.dispatch=UE.bind(null,Ze,n),[s.memoizedState,n]}function Oa(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function Am(){return In().memoizedState}function gu(n,s,a,c){var d=ir();Ze.flags|=n,d.memoizedState=Oa(1|s,a,void 0,c===void 0?null:c)}function yu(n,s,a,c){var d=In();c=c===void 0?null:c;var m=void 0;if(_t!==null){var v=_t.memoizedState;if(m=v.destroy,c!==null&&Vh(c,v.deps)){d.memoizedState=Oa(s,a,m,c);return}}Ze.flags|=n,d.memoizedState=Oa(1|s,a,m,c)}function Rm(n,s){return gu(8390656,8,n,s)}function Fh(n,s){return yu(2048,8,n,s)}function km(n,s){return yu(4,2,n,s)}function Cm(n,s){return yu(4,4,n,s)}function Pm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Nm(n,s,a){return a=a!=null?a.concat([n]):null,yu(4,4,Pm.bind(null,s,n),a)}function jh(){}function xm(n,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Vh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function Dm(n,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Vh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function Om(n,s,a){return(os&21)===0?(n.baseState&&(n.baseState=!1,nn=!0),n.memoizedState=a):(Mn(a,s)||(a=Qi(),Ze.lanes|=a,as|=a,n.baseState=!0),s)}function bE(n,s){var a=xe;xe=a!==0&&4>a?a:4,n(!0);var c=Oh.transition;Oh.transition={};try{n(!1),s()}finally{xe=a,Oh.transition=c}}function Vm(){return In().memoizedState}function ME(n,s,a){var c=hi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Lm(n))bm(s,a);else if(a=dm(n,s,a,c),a!==null){var d=Kt();zn(a,n,c,d),Mm(a,s,c)}}function UE(n,s,a){var c=hi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lm(n))bm(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,a);if(d.hasEagerState=!0,d.eagerState=A,Mn(A,v)){var C=s.interleaved;C===null?(d.next=d,kh(s)):(d.next=C.next,C.next=d),s.interleaved=d;return}}catch{}finally{}a=dm(n,s,d,c),a!==null&&(d=Kt(),zn(a,n,c,d),Mm(a,s,c))}}function Lm(n){var s=n.alternate;return n===Ze||s!==null&&s===Ze}function bm(n,s){Na=mu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function Mm(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Xr(n,a)}}var _u={readContext:Tn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},FE={readContext:Tn,useCallback:function(n,s){return ir().memoizedState=[n,s===void 0?null:s],n},useContext:Tn,useEffect:Rm,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,gu(4194308,4,Pm.bind(null,s,n),a)},useLayoutEffect:function(n,s){return gu(4194308,4,n,s)},useInsertionEffect:function(n,s){return gu(4,2,n,s)},useMemo:function(n,s){var a=ir();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=ir();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=ME.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var s=ir();return n={current:n},s.memoizedState=n},useState:Sm,useDebugValue:jh,useDeferredValue:function(n){return ir().memoizedState=n},useTransition:function(){var n=Sm(!1),s=n[0];return n=bE.bind(null,n[1]),ir().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=Ze,d=ir();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),St===null)throw Error(t(349));(os&30)!==0||vm(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,Rm(Em.bind(null,c,m,n),[n]),c.flags|=2048,Oa(9,wm.bind(null,c,m,a,s),void 0,null),a},useId:function(){var n=ir(),s=St.identifierPrefix;if(Ye){var a=xr,c=Nr;a=(c&~(1<<32-Ht(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=xa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=LE++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},jE={readContext:Tn,useCallback:xm,useContext:Tn,useEffect:Fh,useImperativeHandle:Nm,useInsertionEffect:km,useLayoutEffect:Cm,useMemo:Dm,useReducer:Mh,useRef:Am,useState:function(){return Mh(Da)},useDebugValue:jh,useDeferredValue:function(n){var s=In();return Om(s,_t.memoizedState,n)},useTransition:function(){var n=Mh(Da)[0],s=In().memoizedState;return[n,s]},useMutableSource:ym,useSyncExternalStore:_m,useId:Vm,unstable_isNewReconciler:!1},BE={readContext:Tn,useCallback:xm,useContext:Tn,useEffect:Fh,useImperativeHandle:Nm,useInsertionEffect:km,useLayoutEffect:Cm,useMemo:Dm,useReducer:Uh,useRef:Am,useState:function(){return Uh(Da)},useDebugValue:jh,useDeferredValue:function(n){var s=In();return _t===null?s.memoizedState=n:Om(s,_t.memoizedState,n)},useTransition:function(){var n=Uh(Da)[0],s=In().memoizedState;return[n,s]},useMutableSource:ym,useSyncExternalStore:_m,useId:Vm,unstable_isNewReconciler:!1};function Fn(n,s){if(n&&n.defaultProps){s=oe({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function Bh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:oe({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var vu={isMounted:function(n){return(n=n._reactInternals)?Nn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Kt(),d=hi(n),m=Or(c,d);m.payload=s,a!=null&&(m.callback=a),s=ai(n,m,d),s!==null&&(zn(s,n,d,c),hu(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Kt(),d=hi(n),m=Or(c,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=ai(n,m,d),s!==null&&(zn(s,n,d,c),hu(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Kt(),c=hi(n),d=Or(a,c);d.tag=2,s!=null&&(d.callback=s),s=ai(n,d,c),s!==null&&(zn(s,n,c,a),hu(s,n,c))}};function Um(n,s,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):s.prototype&&s.prototype.isPureReactComponent?!va(a,c)||!va(d,m):!0}function Fm(n,s,a){var c=!1,d=ii,m=s.contextType;return typeof m=="object"&&m!==null?m=Tn(m):(d=tn(s)?ts:Mt.current,c=s.contextTypes,m=(c=c!=null)?co(n,d):ii),s=new s(a,m),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=vu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),s}function jm(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&vu.enqueueReplaceState(s,s.state,null)}function zh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Ch(n);var m=s.contextType;typeof m=="object"&&m!==null?d.context=Tn(m):(m=tn(s)?ts:Mt.current,d.context=co(n,m)),d.state=n.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Bh(n,s,m,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&vu.enqueueReplaceState(d,d.state,null),du(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function vo(n,s){try{var a="",c=s;do a+=Re(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:s,stack:d,digest:null}}function $h(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Wh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var zE=typeof WeakMap=="function"?WeakMap:Map;function Bm(n,s,a){a=Or(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Ru||(Ru=!0,sd=c),Wh(n,s)},a}function zm(n,s,a){a=Or(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Wh(n,s)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Wh(n,s),typeof c!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function $m(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new zE;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=nT.bind(null,n,s,a),s.then(n,n))}function Wm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Hm(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Or(-1,1),s.tag=2,ai(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var $E=le.ReactCurrentOwner,nn=!1;function Gt(n,s,a,c){s.child=n===null?hm(s,null,a,c):mo(s,n.child,a,c)}function qm(n,s,a,c,d){a=a.render;var m=s.ref;return yo(s,d),c=Lh(n,s,a,c,m,d),a=bh(),n!==null&&!nn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Vr(n,s,d)):(Ye&&a&&_h(s),s.flags|=1,Gt(n,s,c,d),s.child)}function Gm(n,s,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!dd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,Km(n,s,m,c,d)):(n=Du(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:va,a(v,c)&&n.ref===s.ref)return Vr(n,s,d)}return s.flags|=1,n=fi(m,c),n.ref=s.ref,n.return=s,s.child=n}function Km(n,s,a,c,d){if(n!==null){var m=n.memoizedProps;if(va(m,c)&&n.ref===s.ref)if(nn=!1,s.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(nn=!0);else return s.lanes=n.lanes,Vr(n,s,d)}return Hh(n,s,a,c,d)}function Qm(n,s,a){var c=s.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Eo,pn),pn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,He(Eo,pn),pn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,He(Eo,pn),pn|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,He(Eo,pn),pn|=c;return Gt(n,s,d,a),s.child}function Xm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Hh(n,s,a,c,d){var m=tn(a)?ts:Mt.current;return m=co(s,m),yo(s,d),a=Lh(n,s,a,c,m,d),c=bh(),n!==null&&!nn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Vr(n,s,d)):(Ye&&c&&_h(s),s.flags|=1,Gt(n,s,a,d),s.child)}function Ym(n,s,a,c,d){if(tn(a)){var m=!0;ru(s)}else m=!1;if(yo(s,d),s.stateNode===null)Eu(n,s),Fm(s,a,c),zh(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,A=s.memoizedProps;v.props=A;var C=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=Tn(j):(j=tn(a)?ts:Mt.current,j=co(s,j));var Q=a.getDerivedStateFromProps,X=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||C!==j)&&jm(s,v,c,j),oi=!1;var K=s.memoizedState;v.state=K,du(s,c,v,d),C=s.memoizedState,A!==c||K!==C||en.current||oi?(typeof Q=="function"&&(Bh(s,a,Q,c),C=s.memoizedState),(A=oi||Um(s,a,A,c,K,C,j))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=C),v.props=c,v.state=C,v.context=j,c=A):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,fm(n,s),A=s.memoizedProps,j=s.type===s.elementType?A:Fn(s.type,A),v.props=j,X=s.pendingProps,K=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=Tn(C):(C=tn(a)?ts:Mt.current,C=co(s,C));var ie=a.getDerivedStateFromProps;(Q=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==X||K!==C)&&jm(s,v,c,C),oi=!1,K=s.memoizedState,v.state=K,du(s,c,v,d);var ue=s.memoizedState;A!==X||K!==ue||en.current||oi?(typeof ie=="function"&&(Bh(s,a,ie,c),ue=s.memoizedState),(j=oi||Um(s,a,j,c,K,ue,C)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,C)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=C,c=j):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),c=!1)}return qh(n,s,a,c,m,d)}function qh(n,s,a,c,d,m){Xm(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&nm(s,a,!1),Vr(n,s,m);c=s.stateNode,$E.current=s;var A=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=mo(s,n.child,null,m),s.child=mo(s,null,A,m)):Gt(n,s,A,m),s.memoizedState=c.state,d&&nm(s,a,!0),s.child}function Jm(n){var s=n.stateNode;s.pendingContext?em(n,s.pendingContext,s.pendingContext!==s.context):s.context&&em(n,s.context,!1),Ph(n,s.containerInfo)}function Zm(n,s,a,c,d){return po(),Th(d),s.flags|=256,Gt(n,s,a,c),s.child}var Gh={dehydrated:null,treeContext:null,retryLane:0};function Kh(n){return{baseLanes:n,cachePool:null,transitions:null}}function eg(n,s,a){var c=s.pendingProps,d=Je.current,m=!1,v=(s.flags&128)!==0,A;if((A=v)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(m=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Je,d&1),n===null)return Eh(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=s.mode,m=s.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Ou(v,c,0,null),n=hs(n,c,a,null),m.return=s,n.return=s,m.sibling=n,s.child=m,s.child.memoizedState=Kh(a),s.memoizedState=Gh,n):Qh(s,v));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return WE(n,s,v,c,A,d,a);if(m){m=c.fallback,v=s.mode,d=n.child,A=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=C,s.deletions=null):(c=fi(d,C),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?m=fi(A,m):(m=hs(m,v,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,v=n.child.memoizedState,v=v===null?Kh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,s.memoizedState=Gh,c}return m=n.child,n=m.sibling,c=fi(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function Qh(n,s){return s=Ou({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function wu(n,s,a,c){return c!==null&&Th(c),mo(s,n.child,null,a),n=Qh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function WE(n,s,a,c,d,m,v){if(a)return s.flags&256?(s.flags&=-257,c=$h(Error(t(422))),wu(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(m=c.fallback,d=s.mode,c=Ou({mode:"visible",children:c.children},d,0,null),m=hs(m,d,v,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&mo(s,n.child,null,v),s.child.memoizedState=Kh(v),s.memoizedState=Gh,m);if((s.mode&1)===0)return wu(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,m=Error(t(419)),c=$h(m,c,void 0),wu(n,s,v,c)}if(A=(v&n.childLanes)!==0,nn||A){if(c=St,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Dr(n,d),zn(c,n,d,-1))}return hd(),c=$h(Error(t(421))),wu(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=rT.bind(null,n),d._reactRetry=s,null):(n=m.treeContext,fn=ni(d.nextSibling),dn=s,Ye=!0,Un=null,n!==null&&(wn[En++]=Nr,wn[En++]=xr,wn[En++]=ns,Nr=n.id,xr=n.overflow,ns=s),s=Qh(s,c.children),s.flags|=4096,s)}function tg(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),Rh(n.return,s,a)}function Xh(n,s,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function ng(n,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Gt(n,s,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tg(n,a,s);else if(n.tag===19)tg(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Je,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&fu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Xh(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&fu(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Xh(s,!0,a,null,m);break;case"together":Xh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Eu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Vr(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),as|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=fi(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=fi(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function HE(n,s,a){switch(s.tag){case 3:Jm(s),po();break;case 5:gm(s);break;case 1:tn(s.type)&&ru(s);break;case 4:Ph(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;He(uu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(He(Je,Je.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?eg(n,s,a):(He(Je,Je.current&1),n=Vr(n,s,a),n!==null?n.sibling:null);He(Je,Je.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return ng(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Je,Je.current),c)break;return null;case 22:case 23:return s.lanes=0,Qm(n,s,a)}return Vr(n,s,a)}var rg,Yh,ig,sg;rg=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Yh=function(){},ig=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,ss(rr.current);var m=null;switch(a){case"input":d=Ui(n,d),c=Ui(n,c),m=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),m=[];break;case"textarea":d=Ko(n,d),c=Ko(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=eu)}ea(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var A=d[j];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?m||(m=[]):(m=m||[]).push(j,null));for(j in c){var C=c[j];if(A=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&C!==A&&(C!=null||A!=null))if(j==="style")if(A){for(v in A)!A.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&A[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(m||(m=[]),m.push(j,a)),a=C;else j==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,A=A?A.__html:void 0,C!=null&&A!==C&&(m=m||[]).push(j,C)):j==="children"?typeof C!="string"&&typeof C!="number"||(m=m||[]).push(j,""+C):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(C!=null&&j==="onScroll"&&Ge("scroll",n),m||A===C||(m=[])):(m=m||[]).push(j,C))}a&&(m=m||[]).push("style",a);var j=m;(s.updateQueue=j)&&(s.flags|=4)}},sg=function(n,s,a,c){a!==c&&(s.flags|=4)};function Va(n,s){if(!Ye)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ft(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function qE(n,s,a){var c=s.pendingProps;switch(vh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return tn(s.type)&&nu(),Ft(s),null;case 3:return c=s.stateNode,_o(),Ke(en),Ke(Mt),Dh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(au(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Un!==null&&(ld(Un),Un=null))),Yh(n,s),Ft(s),null;case 5:Nh(s);var d=ss(Pa.current);if(a=s.type,n!==null&&s.stateNode!=null)ig(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(n=ss(rr.current),au(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[nr]=s,c[Sa]=m,n=(s.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(d=0;d<Ea.length;d++)Ge(Ea[d],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":Ds(c,m),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ge("invalid",c);break;case"textarea":Vs(c,m),Ge("invalid",c)}ea(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var A=m[v];v==="children"?typeof A=="string"?c.textContent!==A&&(m.suppressHydrationWarning!==!0&&Zl(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(m.suppressHydrationWarning!==!0&&Zl(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Ge("scroll",c)}switch(a){case"input":_r(c),Al(c,m,!0);break;case"textarea":_r(c),Qo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=eu)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=mt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[nr]=s,n[Sa]=c,rg(n,s,!1,!1),s.stateNode=n;e:{switch(v=ta(a,c),a){case"dialog":Ge("cancel",n),Ge("close",n),d=c;break;case"iframe":case"object":case"embed":Ge("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ea.length;d++)Ge(Ea[d],n);d=c;break;case"source":Ge("error",n),d=c;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),d=c;break;case"details":Ge("toggle",n),d=c;break;case"input":Ds(n,c),d=Ui(n,c),Ge("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),Ge("invalid",n);break;case"textarea":Vs(n,c),d=Ko(n,c),Ge("invalid",n);break;default:d=c}ea(a,d),A=d;for(m in A)if(A.hasOwnProperty(m)){var C=A[m];m==="style"?Jo(n,C):m==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Xo(n,C)):m==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Hr(n,C):typeof C=="number"&&Hr(n,""+C):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?C!=null&&m==="onScroll"&&Ge("scroll",n):C!=null&&ne(n,m,C,v))}switch(a){case"input":_r(n),Al(n,c,!1);break;case"textarea":_r(n),Qo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ue(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?wr(n,!!c.multiple,m,!1):c.defaultValue!=null&&wr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=eu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(n&&s.stateNode!=null)sg(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ss(Pa.current),ss(rr.current),au(s)){if(c=s.stateNode,a=s.memoizedProps,c[nr]=s,(m=c.nodeValue!==a)&&(n=dn,n!==null))switch(n.tag){case 3:Zl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Zl(c.nodeValue,a,(n.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[nr]=s,s.stateNode=c}return Ft(s),null;case 13:if(Ke(Je),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&fn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)lm(),po(),s.flags|=98560,m=!1;else if(m=au(s),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[nr]=s}else po(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ft(s),m=!1}else Un!==null&&(ld(Un),Un=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(Je.current&1)!==0?vt===0&&(vt=3):hd())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return _o(),Yh(n,s),n===null&&Ta(s.stateNode.containerInfo),Ft(s),null;case 10:return Ah(s.type._context),Ft(s),null;case 17:return tn(s.type)&&nu(),Ft(s),null;case 19:if(Ke(Je),m=s.memoizedState,m===null)return Ft(s),null;if(c=(s.flags&128)!==0,v=m.rendering,v===null)if(c)Va(m,!1);else{if(vt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(v=fu(n),v!==null){for(s.flags|=128,Va(m,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),s.child}n=n.sibling}m.tail!==null&&We()>To&&(s.flags|=128,c=!0,Va(m,!1),s.lanes=4194304)}else{if(!c)if(n=fu(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Va(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Ye)return Ft(s),null}else 2*We()-m.renderingStartTime>To&&a!==1073741824&&(s.flags|=128,c=!0,Va(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(a=m.last,a!==null?a.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=We(),s.sibling=null,a=Je.current,He(Je,c?a&1|2:a&1),s):(Ft(s),null);case 22:case 23:return cd(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(pn&1073741824)!==0&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function GE(n,s){switch(vh(s),s.tag){case 1:return tn(s.type)&&nu(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return _o(),Ke(en),Ke(Mt),Dh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Nh(s),null;case 13:if(Ke(Je),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));po()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Ke(Je),null;case 4:return _o(),null;case 10:return Ah(s.type._context),null;case 22:case 23:return cd(),null;case 24:return null;default:return null}}var Tu=!1,jt=!1,KE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function wo(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,s,c)}else a.current=null}function Jh(n,s,a){try{a()}catch(c){tt(n,s,c)}}var og=!1;function QE(n,s){if(ch=Zr,n=Up(),nh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,A=-1,C=-1,j=0,Q=0,X=n,K=null;t:for(;;){for(var ie;X!==a||d!==0&&X.nodeType!==3||(A=v+d),X!==m||c!==0&&X.nodeType!==3||(C=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(ie=X.firstChild)!==null;)K=X,X=ie;for(;;){if(X===n)break t;if(K===a&&++j===d&&(A=v),K===m&&++Q===c&&(C=v),(ie=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=ie}a=A===-1||C===-1?null:{start:A,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(hh={focusedElem:n,selectionRange:a},Zr=!1,ae=s;ae!==null;)if(s=ae,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,ae=n;else for(;ae!==null;){s=ae;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,at=ue.memoizedState,U=s.stateNode,x=U.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Fn(s.type,ce),at);U.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){tt(s,s.return,J)}if(n=s.sibling,n!==null){n.return=s.return,ae=n;break}ae=s.return}return ue=og,og=!1,ue}function La(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Jh(s,a,m)}d=d.next}while(d!==c)}}function Iu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Zh(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function ag(n){var s=n.alternate;s!==null&&(n.alternate=null,ag(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[nr],delete s[Sa],delete s[mh],delete s[xE],delete s[DE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lg(n){return n.tag===5||n.tag===3||n.tag===4}function ug(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ed(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=eu));else if(c!==4&&(n=n.child,n!==null))for(ed(n,s,a),n=n.sibling;n!==null;)ed(n,s,a),n=n.sibling}function td(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(td(n,s,a),n=n.sibling;n!==null;)td(n,s,a),n=n.sibling}var Pt=null,jn=!1;function li(n,s,a){for(a=a.child;a!==null;)cg(n,s,a),a=a.sibling}function cg(n,s,a){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Gi,a)}catch{}switch(a.tag){case 5:jt||wo(a,s);case 6:var c=Pt,d=jn;Pt=null,li(n,s,a),Pt=c,jn=d,Pt!==null&&(jn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(jn?(n=Pt,a=a.stateNode,n.nodeType===8?ph(n.parentNode,a):n.nodeType===1&&ph(n,a),Ln(n)):ph(Pt,a.stateNode));break;case 4:c=Pt,d=jn,Pt=a.stateNode.containerInfo,jn=!0,li(n,s,a),Pt=c,jn=d;break;case 0:case 11:case 14:case 15:if(!jt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&Jh(a,s,v),d=d.next}while(d!==c)}li(n,s,a);break;case 1:if(!jt&&(wo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){tt(a,s,A)}li(n,s,a);break;case 21:li(n,s,a);break;case 22:a.mode&1?(jt=(c=jt)||a.memoizedState!==null,li(n,s,a),jt=c):li(n,s,a);break;default:li(n,s,a)}}function hg(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new KE),s.forEach(function(c){var d=iT.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Bn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 5:Pt=A.stateNode,jn=!1;break e;case 3:Pt=A.stateNode.containerInfo,jn=!0;break e;case 4:Pt=A.stateNode.containerInfo,jn=!0;break e}A=A.return}if(Pt===null)throw Error(t(160));cg(m,v,d),Pt=null,jn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(j){tt(d,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)dg(s,n),s=s.sibling}function dg(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Bn(s,n),sr(n),c&4){try{La(3,n,n.return),Iu(3,n)}catch(ce){tt(n,n.return,ce)}try{La(5,n,n.return)}catch(ce){tt(n,n.return,ce)}}break;case 1:Bn(s,n),sr(n),c&512&&a!==null&&wo(a,a.return);break;case 5:if(Bn(s,n),sr(n),c&512&&a!==null&&wo(a,a.return),n.flags&32){var d=n.stateNode;try{Hr(d,"")}catch(ce){tt(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,A=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{A==="input"&&m.type==="radio"&&m.name!=null&&qo(d,m),ta(A,v);var j=ta(A,m);for(v=0;v<C.length;v+=2){var Q=C[v],X=C[v+1];Q==="style"?Jo(d,X):Q==="dangerouslySetInnerHTML"?Xo(d,X):Q==="children"?Hr(d,X):ne(d,Q,X,j)}switch(A){case"input":Go(d,m);break;case"textarea":Ls(d,m);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ie=m.value;ie!=null?wr(d,!!m.multiple,ie,!1):K!==!!m.multiple&&(m.defaultValue!=null?wr(d,!!m.multiple,m.defaultValue,!0):wr(d,!!m.multiple,m.multiple?[]:"",!1))}d[Sa]=m}catch(ce){tt(n,n.return,ce)}}break;case 6:if(Bn(s,n),sr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ce){tt(n,n.return,ce)}}break;case 3:if(Bn(s,n),sr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(s.containerInfo)}catch(ce){tt(n,n.return,ce)}break;case 4:Bn(s,n),sr(n);break;case 13:Bn(s,n),sr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(id=We())),c&4&&hg(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(jt=(j=jt)||Q,Bn(s,n),jt=j):Bn(s,n),sr(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!Q&&(n.mode&1)!==0)for(ae=n,Q=n.child;Q!==null;){for(X=ae=Q;ae!==null;){switch(K=ae,ie=K.child,K.tag){case 0:case 11:case 14:case 15:La(4,K,K.return);break;case 1:wo(K,K.return);var ue=K.stateNode;if(typeof ue.componentWillUnmount=="function"){c=K,a=K.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){tt(c,a,ce)}}break;case 5:wo(K,K.return);break;case 22:if(K.memoizedState!==null){mg(X);continue}}ie!==null?(ie.return=K,ae=ie):mg(X)}Q=Q.sibling}e:for(Q=null,X=n;;){if(X.tag===5){if(Q===null){Q=X;try{d=X.stateNode,j?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(A=X.stateNode,C=X.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,A.style.display=Yo("display",v))}catch(ce){tt(n,n.return,ce)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=j?"":X.memoizedProps}catch(ce){tt(n,n.return,ce)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Bn(s,n),sr(n),c&4&&hg(n);break;case 21:break;default:Bn(s,n),sr(n)}}function sr(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(lg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Hr(d,""),c.flags&=-33);var m=ug(n);td(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,A=ug(n);ed(n,A,v);break;default:throw Error(t(161))}}catch(C){tt(n,n.return,C)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function XE(n,s,a){ae=n,fg(n)}function fg(n,s,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Tu;if(!v){var A=d.alternate,C=A!==null&&A.memoizedState!==null||jt;A=Tu;var j=jt;if(Tu=v,(jt=C)&&!j)for(ae=d;ae!==null;)v=ae,C=v.child,v.tag===22&&v.memoizedState!==null?gg(d):C!==null?(C.return=v,ae=C):gg(d);for(;m!==null;)ae=m,fg(m),m=m.sibling;ae=d,Tu=A,jt=j}pg(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ae=m):pg(n)}}function pg(n){for(;ae!==null;){var s=ae;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:jt||Iu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!jt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Fn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&mm(s,m,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}mm(s,v,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var C=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var Q=j.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&Ln(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||s.flags&512&&Zh(s)}catch(K){tt(s,s.return,K)}}if(s===n){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function mg(n){for(;ae!==null;){var s=ae;if(s===n){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function gg(n){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Iu(4,s)}catch(C){tt(s,a,C)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(C){tt(s,d,C)}}var m=s.return;try{Zh(s)}catch(C){tt(s,m,C)}break;case 5:var v=s.return;try{Zh(s)}catch(C){tt(s,v,C)}}}catch(C){tt(s,s.return,C)}if(s===n){ae=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ae=A;break}ae=s.return}}var YE=Math.ceil,Su=le.ReactCurrentDispatcher,nd=le.ReactCurrentOwner,Sn=le.ReactCurrentBatchConfig,Le=0,St=null,ht=null,Nt=0,pn=0,Eo=ri(0),vt=0,ba=null,as=0,Au=0,rd=0,Ma=null,rn=null,id=0,To=1/0,Lr=null,Ru=!1,sd=null,ui=null,ku=!1,ci=null,Cu=0,Ua=0,od=null,Pu=-1,Nu=0;function Kt(){return(Le&6)!==0?We():Pu!==-1?Pu:Pu=We()}function hi(n){return(n.mode&1)===0?1:(Le&2)!==0&&Nt!==0?Nt&-Nt:VE.transition!==null?(Nu===0&&(Nu=Qi()),Nu):(n=xe,n!==0||(n=window.event,n=n===void 0?16:da(n.type)),n)}function zn(n,s,a,c){if(50<Ua)throw Ua=0,od=null,Error(t(185));Qr(n,a,c),((Le&2)===0||n!==St)&&(n===St&&((Le&2)===0&&(Au|=a),vt===4&&di(n,Nt)),sn(n,c),a===1&&Le===0&&(s.mode&1)===0&&(To=We()+500,iu&&si()))}function sn(n,s){var a=n.callbackNode;Ir(n,s);var c=Ki(n,n===St?Nt:0);if(c===0)a!==null&&aa(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&aa(a),s===1)n.tag===0?OE(_g.bind(null,n)):rm(_g.bind(null,n)),PE(function(){(Le&6)===0&&si()}),a=null;else{switch(Yr(c)){case 1:a=qi;break;case 4:a=qr;break;case 16:a=yn;break;case 536870912:a=Nl;break;default:a=yn}a=Rg(a,yg.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function yg(n,s){if(Pu=-1,Nu=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Io()&&n.callbackNode!==a)return null;var c=Ki(n,n===St?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=xu(n,c);else{s=c;var d=Le;Le|=2;var m=wg();(St!==n||Nt!==s)&&(Lr=null,To=We()+500,us(n,s));do try{eT();break}catch(A){vg(n,A)}while(!0);Sh(),Su.current=m,Le=d,ht!==null?s=0:(St=null,Nt=0,s=vt)}if(s!==0){if(s===2&&(d=un(n),d!==0&&(c=d,s=ad(n,d))),s===1)throw a=ba,us(n,0),di(n,c),sn(n,We()),a;if(s===6)di(n,c);else{if(d=n.current.alternate,(c&30)===0&&!JE(d)&&(s=xu(n,c),s===2&&(m=un(n),m!==0&&(c=m,s=ad(n,m))),s===1))throw a=ba,us(n,0),di(n,c),sn(n,We()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:cs(n,rn,Lr);break;case 3:if(di(n,c),(c&130023424)===c&&(s=id+500-We(),10<s)){if(Ki(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Kt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=fh(cs.bind(null,n,rn,Lr),s);break}cs(n,rn,Lr);break;case 4:if(di(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-Ht(c);m=1<<v,v=s[v],v>d&&(d=v),c&=~m}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*YE(c/1960))-c,10<c){n.timeoutHandle=fh(cs.bind(null,n,rn,Lr),c);break}cs(n,rn,Lr);break;case 5:cs(n,rn,Lr);break;default:throw Error(t(329))}}}return sn(n,We()),n.callbackNode===a?yg.bind(null,n):null}function ad(n,s){var a=Ma;return n.current.memoizedState.isDehydrated&&(us(n,s).flags|=256),n=xu(n,s),n!==2&&(s=rn,rn=a,s!==null&&ld(s)),n}function ld(n){rn===null?rn=n:rn.push.apply(rn,n)}function JE(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Mn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function di(n,s){for(s&=~rd,s&=~Au,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-Ht(s),c=1<<a;n[a]=-1,s&=~c}}function _g(n){if((Le&6)!==0)throw Error(t(327));Io();var s=Ki(n,0);if((s&1)===0)return sn(n,We()),null;var a=xu(n,s);if(n.tag!==0&&a===2){var c=un(n);c!==0&&(s=c,a=ad(n,c))}if(a===1)throw a=ba,us(n,0),di(n,s),sn(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,cs(n,rn,Lr),sn(n,We()),null}function ud(n,s){var a=Le;Le|=1;try{return n(s)}finally{Le=a,Le===0&&(To=We()+500,iu&&si())}}function ls(n){ci!==null&&ci.tag===0&&(Le&6)===0&&Io();var s=Le;Le|=1;var a=Sn.transition,c=xe;try{if(Sn.transition=null,xe=1,n)return n()}finally{xe=c,Sn.transition=a,Le=s,(Le&6)===0&&si()}}function cd(){pn=Eo.current,Ke(Eo)}function us(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,CE(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(vh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&nu();break;case 3:_o(),Ke(en),Ke(Mt),Dh();break;case 5:Nh(c);break;case 4:_o();break;case 13:Ke(Je);break;case 19:Ke(Je);break;case 10:Ah(c.type._context);break;case 22:case 23:cd()}a=a.return}if(St=n,ht=n=fi(n.current,null),Nt=pn=s,vt=0,ba=null,rd=Au=as=0,rn=Ma=null,is!==null){for(s=0;s<is.length;s++)if(a=is[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}is=null}return n}function vg(n,s){do{var a=ht;try{if(Sh(),pu.current=_u,mu){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}mu=!1}if(os=0,It=_t=Ze=null,Na=!1,xa=0,nd.current=null,a===null||a.return===null){vt=1,ba=s,ht=null;break}e:{var m=n,v=a.return,A=a,C=s;if(s=Nt,A.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var j=C,Q=A,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ie=Wm(v);if(ie!==null){ie.flags&=-257,Hm(ie,v,A,m,s),ie.mode&1&&$m(m,j,s),s=ie,C=j;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(C),s.updateQueue=ce}else ue.add(C);break e}else{if((s&1)===0){$m(m,j,s),hd();break e}C=Error(t(426))}}else if(Ye&&A.mode&1){var at=Wm(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),Hm(at,v,A,m,s),Th(vo(C,A));break e}}m=C=vo(C,A),vt!==4&&(vt=2),Ma===null?Ma=[m]:Ma.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var U=Bm(m,C,s);pm(m,U);break e;case 1:A=C;var x=m.type,F=m.stateNode;if((m.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ui===null||!ui.has(F)))){m.flags|=65536,s&=-s,m.lanes|=s;var J=zm(m,A,s);pm(m,J);break e}}m=m.return}while(m!==null)}Tg(a)}catch(he){s=he,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function wg(){var n=Su.current;return Su.current=_u,n===null?_u:n}function hd(){(vt===0||vt===3||vt===2)&&(vt=4),St===null||(as&268435455)===0&&(Au&268435455)===0||di(St,Nt)}function xu(n,s){var a=Le;Le|=2;var c=wg();(St!==n||Nt!==s)&&(Lr=null,us(n,s));do try{ZE();break}catch(d){vg(n,d)}while(!0);if(Sh(),Le=a,Su.current=c,ht!==null)throw Error(t(261));return St=null,Nt=0,vt}function ZE(){for(;ht!==null;)Eg(ht)}function eT(){for(;ht!==null&&!Cl();)Eg(ht)}function Eg(n){var s=Ag(n.alternate,n,pn);n.memoizedProps=n.pendingProps,s===null?Tg(n):ht=s,nd.current=null}function Tg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=qE(a,s,pn),a!==null){ht=a;return}}else{if(a=GE(a,s),a!==null){a.flags&=32767,ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vt=6,ht=null;return}}if(s=s.sibling,s!==null){ht=s;return}ht=s=n}while(s!==null);vt===0&&(vt=5)}function cs(n,s,a){var c=xe,d=Sn.transition;try{Sn.transition=null,xe=1,tT(n,s,a,c)}finally{Sn.transition=d,xe=c}return null}function tT(n,s,a,c){do Io();while(ci!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(ze(n,m),n===St&&(ht=St=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ku||(ku=!0,Rg(yn,function(){return Io(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Sn.transition,Sn.transition=null;var v=xe;xe=1;var A=Le;Le|=4,nd.current=null,QE(n,a),dg(a,n),EE(hh),Zr=!!ch,hh=ch=null,n.current=a,XE(a),Kc(),Le=A,xe=v,Sn.transition=m}else n.current=a;if(ku&&(ku=!1,ci=n,Cu=d),m=n.pendingLanes,m===0&&(ui=null),xl(a.stateNode),sn(n,We()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Ru)throw Ru=!1,n=sd,sd=null,n;return(Cu&1)!==0&&n.tag!==0&&Io(),m=n.pendingLanes,(m&1)!==0?n===od?Ua++:(Ua=0,od=n):Ua=0,si(),null}function Io(){if(ci!==null){var n=Yr(Cu),s=Sn.transition,a=xe;try{if(Sn.transition=null,xe=16>n?16:n,ci===null)var c=!1;else{if(n=ci,ci=null,Cu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ae=n.current;ae!==null;){var m=ae,v=m.child;if((ae.flags&16)!==0){var A=m.deletions;if(A!==null){for(var C=0;C<A.length;C++){var j=A[C];for(ae=j;ae!==null;){var Q=ae;switch(Q.tag){case 0:case 11:case 15:La(8,Q,m)}var X=Q.child;if(X!==null)X.return=Q,ae=X;else for(;ae!==null;){Q=ae;var K=Q.sibling,ie=Q.return;if(ag(Q),Q===j){ae=null;break}if(K!==null){K.return=ie,ae=K;break}ae=ie}}}var ue=m.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var at=ce.sibling;ce.sibling=null,ce=at}while(ce!==null)}}ae=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,ae=v;else e:for(;ae!==null;){if(m=ae,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:La(9,m,m.return)}var U=m.sibling;if(U!==null){U.return=m.return,ae=U;break e}ae=m.return}}var x=n.current;for(ae=x;ae!==null;){v=ae;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,ae=F;else e:for(v=x;ae!==null;){if(A=ae,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Iu(9,A)}}catch(he){tt(A,A.return,he)}if(A===v){ae=null;break e}var J=A.sibling;if(J!==null){J.return=A.return,ae=J;break e}ae=A.return}}if(Le=d,si(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Gi,n)}catch{}c=!0}return c}finally{xe=a,Sn.transition=s}}return!1}function Ig(n,s,a){s=vo(a,s),s=Bm(n,s,1),n=ai(n,s,1),s=Kt(),n!==null&&(Qr(n,1,s),sn(n,s))}function tt(n,s,a){if(n.tag===3)Ig(n,n,a);else for(;s!==null;){if(s.tag===3){Ig(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ui===null||!ui.has(c))){n=vo(a,n),n=zm(s,n,1),s=ai(s,n,1),n=Kt(),s!==null&&(Qr(s,1,n),sn(s,n));break}}s=s.return}}function nT(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Kt(),n.pingedLanes|=n.suspendedLanes&a,St===n&&(Nt&a)===a&&(vt===4||vt===3&&(Nt&130023424)===Nt&&500>We()-id?us(n,0):rd|=a),sn(n,s)}function Sg(n,s){s===0&&((n.mode&1)===0?s=1:(s=Hs,Hs<<=1,(Hs&130023424)===0&&(Hs=4194304)));var a=Kt();n=Dr(n,s),n!==null&&(Qr(n,s,a),sn(n,a))}function rT(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),Sg(n,a)}function iT(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Sg(n,a)}var Ag;Ag=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||en.current)nn=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return nn=!1,HE(n,s,a);nn=(n.flags&131072)!==0}else nn=!1,Ye&&(s.flags&1048576)!==0&&im(s,ou,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Eu(n,s),n=s.pendingProps;var d=co(s,Mt.current);yo(s,a),d=Lh(null,s,c,n,d,a);var m=bh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,tn(c)?(m=!0,ru(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ch(s),d.updater=vu,s.stateNode=d,d._reactInternals=s,zh(s,c,n,a),s=qh(null,s,c,!0,m,a)):(s.tag=0,Ye&&m&&_h(s),Gt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Eu(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=oT(c),n=Fn(c,n),d){case 0:s=Hh(null,s,c,n,a);break e;case 1:s=Ym(null,s,c,n,a);break e;case 11:s=qm(null,s,c,n,a);break e;case 14:s=Gm(null,s,c,Fn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Hh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Ym(n,s,c,d,a);case 3:e:{if(Jm(s),n===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,d=m.element,fm(n,s),du(s,c,null,a);var v=s.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=vo(Error(t(423)),s),s=Zm(n,s,c,a,d);break e}else if(c!==d){d=vo(Error(t(424)),s),s=Zm(n,s,c,a,d);break e}else for(fn=ni(s.stateNode.containerInfo.firstChild),dn=s,Ye=!0,Un=null,a=hm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(po(),c===d){s=Vr(n,s,a);break e}Gt(n,s,c,a)}s=s.child}return s;case 5:return gm(s),n===null&&Eh(s),c=s.type,d=s.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,dh(c,d)?v=null:m!==null&&dh(c,m)&&(s.flags|=32),Xm(n,s),Gt(n,s,v,a),s.child;case 6:return n===null&&Eh(s),null;case 13:return eg(n,s,a);case 4:return Ph(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=mo(s,null,c,a):Gt(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),qm(n,s,c,d,a);case 7:return Gt(n,s,s.pendingProps,a),s.child;case 8:return Gt(n,s,s.pendingProps.children,a),s.child;case 12:return Gt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,m=s.memoizedProps,v=d.value,He(uu,c._currentValue),c._currentValue=v,m!==null)if(Mn(m.value,v)){if(m.children===d.children&&!en.current){s=Vr(n,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var A=m.dependencies;if(A!==null){v=m.child;for(var C=A.firstContext;C!==null;){if(C.context===c){if(m.tag===1){C=Or(-1,a&-a),C.tag=2;var j=m.updateQueue;if(j!==null){j=j.shared;var Q=j.pending;Q===null?C.next=C:(C.next=Q.next,Q.next=C),j.pending=C}}m.lanes|=a,C=m.alternate,C!==null&&(C.lanes|=a),Rh(m.return,a,s),A.lanes|=a;break}C=C.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),Rh(v,a,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Gt(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,yo(s,a),d=Tn(d),c=c(d),s.flags|=1,Gt(n,s,c,a),s.child;case 14:return c=s.type,d=Fn(c,s.pendingProps),d=Fn(c.type,d),Gm(n,s,c,d,a);case 15:return Km(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Eu(n,s),s.tag=1,tn(c)?(n=!0,ru(s)):n=!1,yo(s,a),Fm(s,c,d),zh(s,c,d,a),qh(null,s,c,!0,n,a);case 19:return ng(n,s,a);case 22:return Qm(n,s,a)}throw Error(t(156,s.tag))};function Rg(n,s){return $s(n,s)}function sT(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(n,s,a,c){return new sT(n,s,a,c)}function dd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function oT(n){if(typeof n=="function")return dd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===Lt)return 14}return 2}function fi(n,s){var a=n.alternate;return a===null?(a=An(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Du(n,s,a,c,d,m){var v=2;if(c=n,typeof n=="function")dd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case P:return hs(a.children,d,m,s);case I:v=8,d|=8;break;case R:return n=An(12,a,s,d|2),n.elementType=R,n.lanes=m,n;case k:return n=An(13,a,s,d),n.elementType=k,n.lanes=m,n;case st:return n=An(19,a,s,d),n.elementType=st,n.lanes=m,n;case Be:return Ou(a,d,m,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:v=10;break e;case D:v=9;break e;case b:v=11;break e;case Lt:v=14;break e;case bt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=An(v,a,s,d),s.elementType=n,s.type=c,s.lanes=m,s}function hs(n,s,a,c){return n=An(7,n,c,s),n.lanes=a,n}function Ou(n,s,a,c){return n=An(22,n,c,s),n.elementType=Be,n.lanes=a,n.stateNode={isHidden:!1},n}function fd(n,s,a){return n=An(6,n,null,s),n.lanes=a,n}function pd(n,s,a){return s=An(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function aT(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function md(n,s,a,c,d,m,v,A,C){return n=new aT(n,s,a,A,C),s===1?(s=1,m===!0&&(s|=8)):s=0,m=An(3,null,null,s),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ch(m),n}function lT(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function kg(n){if(!n)return ii;n=n._reactInternals;e:{if(Nn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(tn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(tn(a))return tm(n,a,s)}return s}function Cg(n,s,a,c,d,m,v,A,C){return n=md(a,c,!0,n,d,m,v,A,C),n.context=kg(null),a=n.current,c=Kt(),d=hi(a),m=Or(c,d),m.callback=s??null,ai(a,m,d),n.current.lanes=d,Qr(n,d,c),sn(n,c),n}function Vu(n,s,a,c){var d=s.current,m=Kt(),v=hi(d);return a=kg(a),s.context===null?s.context=a:s.pendingContext=a,s=Or(m,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=ai(d,s,v),n!==null&&(zn(n,d,v,m),hu(n,d,v)),v}function Lu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function gd(n,s){Pg(n,s),(n=n.alternate)&&Pg(n,s)}function uT(){return null}var Ng=typeof reportError=="function"?reportError:function(n){console.error(n)};function yd(n){this._internalRoot=n}bu.prototype.render=yd.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Vu(n,s,null,null)},bu.prototype.unmount=yd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ls(function(){Vu(null,n,null,null)}),s[Cr]=null}};function bu(n){this._internalRoot=n}bu.prototype.unstable_scheduleHydration=function(n){if(n){var s=bl();n={blockedOn:null,target:n,priority:s};for(var a=0;a<Jn.length&&s!==0&&s<Jn[a].priority;a++);Jn.splice(a,0,n),a===0&&Fl(n)}};function _d(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Mu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function xg(){}function cT(n,s,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var j=Lu(v);m.call(j)}}var v=Cg(s,c,n,0,null,!1,!1,"",xg);return n._reactRootContainer=v,n[Cr]=v.current,Ta(n.nodeType===8?n.parentNode:n),ls(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var j=Lu(C);A.call(j)}}var C=md(n,0,!1,null,null,!1,!1,"",xg);return n._reactRootContainer=C,n[Cr]=C.current,Ta(n.nodeType===8?n.parentNode:n),ls(function(){Vu(s,C,a,c)}),C}function Uu(n,s,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var A=d;d=function(){var C=Lu(v);A.call(C)}}Vu(s,v,n,d)}else v=cT(a,s,n,d,c);return Lu(v)}Vl=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=Gr(s.pendingLanes);a!==0&&(Xr(s,a|1),sn(s,We()),(Le&6)===0&&(To=We()+500,si()))}break;case 13:ls(function(){var c=Dr(n,1);if(c!==null){var d=Kt();zn(c,n,1,d)}}),gd(n,1)}},qs=function(n){if(n.tag===13){var s=Dr(n,134217728);if(s!==null){var a=Kt();zn(s,n,134217728,a)}gd(n,134217728)}},Ll=function(n){if(n.tag===13){var s=hi(n),a=Dr(n,s);if(a!==null){var c=Kt();zn(a,n,s,c)}gd(n,s)}},bl=function(){return xe},Ml=function(n,s){var a=xe;try{return xe=n,s()}finally{xe=a}},Ms=function(n,s,a){switch(s){case"input":if(Go(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=tu(c);if(!d)throw Error(t(90));xs(c),Go(c,d)}}}break;case"textarea":Ls(n,a);break;case"select":s=a.value,s!=null&&wr(n,!!a.multiple,s,!1)}},zi=ud,ra=ls;var hT={usingClientEntryPoint:!1,Events:[Aa,lo,tu,Xn,na,ud]},Fa={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dT={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=oa(n),n===null?null:n.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||uT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fu.isDisabled&&Fu.supportsFiber)try{Gi=Fu.inject(dT),ln=Fu}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hT,on.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_d(s))throw Error(t(200));return lT(n,s,null,a)},on.createRoot=function(n,s){if(!_d(n))throw Error(t(299));var a=!1,c="",d=Ng;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=md(n,1,!1,null,null,a,!1,c,d),n[Cr]=s.current,Ta(n.nodeType===8?n.parentNode:n),new yd(s)},on.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=oa(s),n=n===null?null:n.stateNode,n},on.flushSync=function(n){return ls(n)},on.hydrate=function(n,s,a){if(!Mu(s))throw Error(t(200));return Uu(null,n,s,!0,a)},on.hydrateRoot=function(n,s,a){if(!_d(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Ng;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Cg(s,null,n,1,a??null,d,!1,m,v),n[Cr]=s.current,Ta(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new bu(s)},on.render=function(n,s,a){if(!Mu(s))throw Error(t(200));return Uu(null,n,s,!1,a)},on.unmountComponentAtNode=function(n){if(!Mu(n))throw Error(t(40));return n._reactRootContainer?(ls(function(){Uu(null,null,n,!1,function(){n._reactRootContainer=null,n[Cr]=null})}),!0):!1},on.unstable_batchedUpdates=ud,on.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Mu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Uu(n,s,a,!1,c)},on.version="18.3.1-next-f1338f8080-20240426",on}var T_;function YC(){if(T_)return bd.exports;T_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),bd.exports=XC(),bd.exports}var I_;function JC(){if(I_)return Ku;I_=1;var r=YC();return Ku.createRoot=r.createRoot,Ku.hydrateRoot=r.hydrateRoot,Ku}var ZC=JC();function eP({onStart:r}){return O.jsxs("main",{className:"page",children:[O.jsxs("section",{className:"hero",children:[O.jsx("p",{className:"badge",children:"AI Workout Accountability"}),O.jsx("h1",{children:"Your AI coach that helps you actually work out."}),O.jsx("p",{className:"subtitle",children:"CoachPulse combines simple workouts, streak tracking, daily check-ins, and supportive AI coaching to help you stay consistent."}),O.jsx("button",{className:"primary",onClick:r,children:"Start Free Beta"})]}),O.jsxs("section",{className:"cards",children:[O.jsxs("div",{className:"card",children:[O.jsx("h2",{children:"Daily check-ins"}),O.jsx("p",{children:"Tell CoachPulse whether you completed, partly completed, or missed your workout."})]}),O.jsxs("div",{className:"card",children:[O.jsx("h2",{children:"Streak tracking"}),O.jsx("p",{children:"Build consistency with a simple streak and monthly progress view."})]}),O.jsxs("div",{className:"card",children:[O.jsx("h2",{children:"AI accountability"}),O.jsx("p",{children:"Get supportive coaching when you feel tired, busy, or unmotivated."})]})]})]})}function tP({goal:r,streak:e,completedWorkouts:t,currentWeight:i,goalWeight:o,checkIns:l}){const[h,f]=Ie.useState(""),[g,_]=Ie.useState(!1);async function w(){_(!0);try{const S=await(await fetch("/api/weekly-summary",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({goal:r,streak:e,completedWorkouts:t,currentWeight:i,goalWeight:o,checkIns:l})})).json();f(S.summary||S.error||"Could not generate summary.")}catch{f("Could not connect to weekly summary service.")}_(!1)}return O.jsxs("section",{className:"panel",children:[O.jsx("h2",{children:"Weekly AI Summary"}),O.jsx("p",{children:"Get a weekly coaching summary based on your progress."}),O.jsx("button",{onClick:w,children:g?"Creating Summary...":"Generate Weekly Summary"}),h&&O.jsx("div",{style:{whiteSpace:"pre-wrap",marginTop:"16px"},children:h})]})}function nP({streak:r,completedWorkouts:e,goal:t}){const[i,o]=Ie.useState(""),[l,h]=Ie.useState([]);async function f(){const w=Vt.currentUser;if(!w)return;const T=dl(Yt,"users",w.uid,"dailyCheckIns"),S=_p(T,Tp("date","desc")),$=(await Sp(S)).docs.map(H=>({id:H.id,...H.data()}));h($)}Ie.useEffect(()=>{f()},[]);async function g(w){const T=Vt.currentUser;if(!T)return;const S=new Date().toISOString().split("T")[0];await Uo(qn(Yt,"users",T.uid,"dailyCheckIns",S),{status:w,goal:t,date:S,createdAt:Fo()}),w==="completed"&&o(`Great job! You stayed on track with your ${t} goal.`),w==="rest"&&o("Rest days count too. Recovery helps you come back stronger."),w==="missed"&&o("No worries. One missed day does not ruin progress. Reset tomorrow."),f()}function _(w){return w==="completed"?"✅ Completed":w==="rest"?"😴 Rest Day":w==="missed"?"❌ Missed":w}return O.jsxs("section",{className:"panel",children:[O.jsx("h2",{children:"Daily Check-In"}),O.jsx("p",{children:"Did you complete your workout today?"}),O.jsx("button",{onClick:()=>g("completed"),children:"✅ Completed"}),O.jsx("button",{onClick:()=>g("rest"),children:"😴 Rest Day"}),O.jsx("button",{onClick:()=>g("missed"),children:"❌ Missed"}),i&&O.jsx("p",{children:i}),O.jsx("h3",{children:"Check-In History"}),l.length===0?O.jsx("p",{children:"No check-ins yet."}):O.jsx("div",{children:l.map(w=>O.jsxs("div",{style:{marginBottom:"8px"},children:[w.date,": ",_(w.status)]},w.id))})]})}function rP(){const[r,e]=Ie.useState(null),[t,i]=Ie.useState([]),[o,l]=Ie.useState(""),[h,f]=Ie.useState(""),[g,_]=Ie.useState("");async function w(){const V=Vt.currentUser;if(!V)return;const $=Nd(Ld,`users/${V.uid}/progressPhotos`),H=await C1($),z=await Promise.all(H.items.map(async Y=>({url:await P1(Y),path:Y.fullPath})));i(z)}Ie.useEffect(()=>{w()},[]);async function T(){const V=Vt.currentUser;if(!V||!r)return;const $=Nd(Ld,`users/${V.uid}/progressPhotos/${Date.now()}-${r.name}`);await k1($,r),_("Photo uploaded!"),e(null),w()}async function S(V){const $=Nd(Ld,V);await N1($),_("Photo deleted!"),l(""),f(""),w()}return O.jsxs("section",{className:"panel",children:[O.jsx("h2",{children:"Progress Photos"}),O.jsx("input",{type:"file",accept:"image/*",onChange:V=>e(V.target.files[0])}),O.jsx("button",{onClick:T,children:"Upload Photo"}),g&&O.jsx("p",{children:g}),t.length>=2&&O.jsxs("div",{style:{marginTop:"20px"},children:[O.jsx("h3",{children:"Before & After Comparison"}),O.jsxs("select",{value:o,onChange:V=>l(V.target.value),children:[O.jsx("option",{value:"",children:"Choose before photo"}),t.map((V,$)=>O.jsxs("option",{value:V.url,children:["Photo ",$+1]},V.url))]}),O.jsxs("select",{value:h,onChange:V=>f(V.target.value),children:[O.jsx("option",{value:"",children:"Choose after photo"}),t.map((V,$)=>O.jsxs("option",{value:V.url,children:["Photo ",$+1]},V.url))]}),o&&h&&O.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginTop:"16px"},children:[O.jsxs("div",{children:[O.jsx("h4",{children:"Before"}),O.jsx("img",{src:o,alt:"Before progress",style:{width:"100%",borderRadius:"16px"}})]}),O.jsxs("div",{children:[O.jsx("h4",{children:"After"}),O.jsx("img",{src:h,alt:"After progress",style:{width:"100%",borderRadius:"16px"}})]})]})]}),O.jsx("h3",{style:{marginTop:"20px"},children:"Photo Timeline"}),O.jsx("div",{style:{display:"grid",gap:"12px",marginTop:"16px"},children:t.map(V=>O.jsxs("div",{children:[O.jsx("img",{src:V.url,alt:"Progress",style:{width:"100%",borderRadius:"16px"}}),O.jsx("button",{onClick:()=>S(V.path),children:"Delete Photo"})]},V.url))})]})}function iP({currentWeight:r,goalWeight:e,streak:t,completedWorkouts:i}){const[o,l]=Ie.useState(""),[h,f]=Ie.useState(!1);async function g(){f(!0);try{const w=await(await fetch("/api/progress-analysis",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentWeight:r,goalWeight:e,streak:t,completedWorkouts:i})})).json();l(w.analysis||w.error||"Could not analyze progress.")}catch{l("Could not connect to analysis service.")}f(!1)}return O.jsxs("section",{className:"panel",children:[O.jsx("h2",{children:"AI Progress Analysis"}),O.jsx("button",{onClick:g,children:h?"Analyzing...":"Analyze My Progress"}),o&&O.jsx("div",{style:{marginTop:"16px",whiteSpace:"pre-wrap"},children:o})]})}function sP(){const[r,e]=Ie.useState(""),[t,i]=Ie.useState(""),[o,l]=Ie.useState([]),[h,f]=Ie.useState(null),[g,_]=Ie.useState("");async function w(){const Y=Vt.currentUser;if(!Y)return;const te=qn(Yt,"users",Y.uid,"profile","weight"),ne=await Sc(te);ne.exists()&&(e(ne.data().currentWeight||""),i(ne.data().goalWeight||""));const le=dl(Yt,"users",Y.uid,"weightHistory"),Ce=_p(le,Tp("date","desc")),P=(await Sp(Ce)).docs.map(I=>({id:I.id,...I.data()}));if(l(P),P.length>0){const I=Number(P[0].weight),R=Number(P[P.length-1].weight),N=I-R;f({starting:R,current:I,change:N})}}Ie.useEffect(()=>{w()},[]);async function T(){const Y=Vt.currentUser;if(!Y)return;const te=new Date,ne=te.toISOString().split("T")[0],le=`${ne}-${te.getTime()}`;await Uo(qn(Yt,"users",Y.uid,"profile","weight"),{currentWeight:r,goalWeight:t,updatedAt:Fo()}),await Uo(qn(Yt,"users",Y.uid,"weightHistory",le),{weight:r,goalWeight:t,date:ne,createdAt:Fo()}),_("Weight saved!"),w()}const S=[...o].reverse(),V=S.map(Y=>Number(Y.weight)),$=Math.max(...V,1),H=Math.min(...V,$);let z=null;if(S.length>=2&&t){const Y=Number(S[0].weight),te=Number(S[S.length-1].weight),ne=Number(t),le=Y-te,Ce=te-ne;if(Ce>0){const ve=Math.max(S.length-1,1),P=le>0?le/ve:.5,I=Math.ceil(Ce/P),R=new Date;R.setDate(R.getDate()+I*7),z={lossPerWeek:P.toFixed(2),weeksToGoal:I,date:R.toLocaleDateString()}}}return O.jsxs("section",{className:"panel",children:[O.jsx("h2",{children:"Weight Tracking"}),O.jsx("input",{type:"number",placeholder:"Current weight (kg)",value:r,onChange:Y=>e(Y.target.value)}),O.jsx("input",{type:"number",placeholder:"Goal weight (kg)",value:t,onChange:Y=>i(Y.target.value)}),O.jsx("button",{onClick:T,children:"Save Weight"}),g&&O.jsx("p",{children:g}),h&&O.jsxs("div",{style:{marginTop:"16px"},children:[O.jsx("h3",{children:"Weight Progress"}),O.jsxs("p",{children:["Starting weight: ",h.starting,"kg"]}),O.jsxs("p",{children:["Current weight: ",h.current,"kg"]}),O.jsxs("p",{children:["Progress: ",h.change>0?"+":"",h.change,"kg"]})]}),S.length>1&&O.jsxs("div",{style:{marginTop:"20px"},children:[O.jsx("h3",{children:"Progress Chart"}),O.jsx("div",{style:{display:"flex",alignItems:"end",gap:"8px",height:"160px",padding:"12px",background:"#f7f4ff",borderRadius:"16px"},children:S.map(Y=>{const te=Number(Y.weight),ne=$===H?80:40+(te-H)/($-H)*100;return O.jsxs("div",{style:{flex:1,textAlign:"center"},children:[O.jsx("div",{title:`${Y.date}: ${Y.weight}kg`,style:{height:`${ne}px`,background:"#7c3aed",borderRadius:"999px 999px 0 0"}}),O.jsxs("small",{children:[Y.weight,"kg"]})]},Y.id)})})]}),z&&O.jsxs("div",{style:{marginTop:"20px"},children:[O.jsx("h3",{children:"Goal Date Prediction"}),O.jsxs("p",{children:["Current pace: ",z.lossPerWeek,"kg/week"]}),O.jsxs("p",{children:["Estimated time to goal: ",z.weeksToGoal," weeks"]}),O.jsxs("p",{children:["Estimated goal date: ",z.date]})]}),O.jsx("h3",{children:"Weight History"}),o.length===0?O.jsx("p",{children:"No weight entries yet."}):O.jsx("div",{children:o.map(Y=>O.jsxs("div",{style:{marginBottom:"8px"},children:[Y.date,": ",Y.weight,"kg"]},Y.id))})]})}function oP({goal:r,streak:e,completedWorkouts:t}){const[i,o]=Ie.useState(""),[l,h]=Ie.useState(!1);Ie.useEffect(()=>{async function _(){const w=Vt.currentUser;if(!w)return;const T=qn(Yt,"users",w.uid,"plans","weeklyPlan"),S=await Sc(T);S.exists()&&o(S.data().plan||"")}_()},[]);async function f(_){const w=Vt.currentUser;w&&await Uo(qn(Yt,"users",w.uid,"plans","weeklyPlan"),{plan:_,goal:r,createdAt:Fo()})}async function g(){h(!0);try{const w=await(await fetch("/api/workout-plan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({goal:r,streak:e,completedWorkouts:t})})).json(),T=w.plan||w.error||"Could not generate plan.";o(T),await f(T)}catch{o("Could not connect to workout planner.")}finally{h(!1)}}return O.jsxs("section",{className:"panel",children:[O.jsx("h2",{children:"Weekly Workout Plan"}),O.jsx("p",{children:"Generate a plan based on your goal and progress."}),O.jsx("button",{onClick:g,children:l?"Creating Plan...":"Generate My Weekly Plan"}),i&&O.jsx("div",{style:{whiteSpace:"pre-wrap",marginTop:"16px"},children:i})]})}function aP({streak:r,completedWorkouts:e,goal:t}){const[i,o]=Ie.useState("🎯 Goal Setter"),l=[];return r>=3&&l.push("🔥 3-Day Streak"),r>=7&&l.push("🚀 7-Day Streak"),e>=10&&l.push("💪 10 Workouts"),e>=25&&l.push("🏅 25 Workouts"),t&&t!=="Get Fit"&&l.push("🎯 Goal Setter"),Ie.useEffect(()=>{const h=setTimeout(()=>{o(null)},5e3);return()=>clearTimeout(h)},[]),O.jsxs(O.Fragment,{children:[i&&O.jsxs("div",{style:{position:"fixed",top:"24px",right:"24px",background:"white",padding:"18px 22px",borderRadius:"18px",boxShadow:"0 12px 30px rgba(0,0,0,0.18)",zIndex:9999},children:[O.jsx("strong",{children:"Achievement Unlocked!"}),O.jsx("p",{children:i})]}),O.jsxs("section",{className:"panel",children:[O.jsx("h2",{children:"Achievements"}),l.length===0?O.jsx("p",{children:"Complete workouts or set a goal to unlock badges."}):O.jsx("div",{children:l.map(h=>O.jsx("div",{style:{marginBottom:"8px"},children:h},h))})]})]})}function lP({onSubmit:r}){const[e,t]=Ie.useState("");async function i(o){t(o);try{console.log("🔥 Click:",o);const l=Vt.currentUser;if(!l){console.log("❌ NO USER LOGGED IN");return}const h=new Date().toISOString().split("T")[0],f=qn(Yt,"users",l.uid,"workouts",h);await Uo(f,{status:o,date:h,createdAt:Fo()}),console.log("✅ SAVED REAL WORKOUT TO FIRESTORE"),r&&r(o)}catch(l){console.error("❌ Firestore error:",l)}}return O.jsxs("section",{className:"panel",children:[O.jsx("h2",{children:"Today's workout"}),O.jsxs("div",{className:"button-row",children:[O.jsx("button",{onClick:()=>i("completed"),children:"Completed"}),O.jsx("button",{onClick:()=>i("partial"),children:"Partly done"}),O.jsx("button",{onClick:()=>i("missed"),children:"Missed"})]})]})}function uP({streak:r,completedWorkouts:e,goal:t}){const[i,o]=Ie.useState([]),[l,h]=Ie.useState(""),[f,g]=Ie.useState(!1);Ie.useEffect(()=>{const T=Vt.currentUser;if(!T)return;const S=dl(Yt,"users",T.uid,"coachMessages"),V=_p(S,Tp("createdAt","asc")),$=HC(V,H=>{const z=H.docs.map(Y=>({id:Y.id,...Y.data()}));o(z)});return()=>$()},[]);async function _(T,S){const V=Vt.currentUser;V&&await WC(dl(Yt,"users",V.uid,"coachMessages"),{role:T,text:S,createdAt:Fo()})}async function w(){if(!l.trim())return;const T=l.trim();h(""),g(!0),await _("user",T);try{const V=await(await fetch("/api/coach",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:T,streak:r,workouts:e,goal:t})})).json();await _("coach",V.message||V.error||"I’m here with you. Let’s keep going.")}catch(S){await _("coach",S.message||"Sorry, I couldn’t connect to your coach right now.")}finally{g(!1)}}return O.jsxs("section",{className:"panel",children:[O.jsx("h2",{children:"AI Coach"}),O.jsxs("div",{className:"chat",children:[i.length===0&&O.jsx("div",{className:"bubble coach",children:"Hi, I’m your CoachPulse AI coach. Tell me how your workout went today."}),i.map(T=>O.jsx("div",{className:`bubble ${T.role}`,children:T.text},T.id)),f&&O.jsx("div",{className:"bubble coach",children:"Thinking..."})]}),O.jsxs("div",{className:"chat-input",children:[O.jsx("input",{value:l,placeholder:"Ask your coach...",onChange:T=>h(T.target.value),onKeyDown:T=>T.key==="Enter"&&w()}),O.jsx("button",{onClick:w,children:"Send"})]})]})}const cP=["Lose Weight","Build Muscle","Improve Fitness","Run a 5K","Stay Consistent"];function hP({currentGoal:r,onGoalUpdated:e}){const[t,i]=Ie.useState(r||"Get Fit");async function o(){const l=Vt.currentUser;l&&(await Uo(qn(Yt,"users",l.uid),{goal:t},{merge:!0}),e(t))}return O.jsxs("section",{className:"panel",children:[O.jsx("h2",{children:"Your Goal"}),O.jsx("select",{value:t,onChange:l=>i(l.target.value),children:cP.map(l=>O.jsx("option",{value:l,children:l},l))}),O.jsx("button",{onClick:o,children:"Save Goal"})]})}function dP({completedWorkouts:r}){const t=Math.min(r/4*100,100);return O.jsxs("section",{className:"panel",children:[O.jsx("h2",{children:"Weekly Progress"}),O.jsxs("p",{children:[r," / ",4," workouts completed"]}),O.jsx("div",{style:{width:"100%",height:"16px",background:"#eee",borderRadius:"999px",overflow:"hidden",marginTop:"12px"},children:O.jsx("div",{style:{width:`${t}%`,height:"100%",background:"#7c3aed",borderRadius:"999px"}})})]})}function fP({user:r,onLogout:e}){const[t,i]=Ie.useState(0),[o,l]=Ie.useState(0),[h,f]=Ie.useState(null),[g,_]=Ie.useState("Get Fit");function w(V){const $=new Set(V);let H=0,z=new Date;for(;;){const Y=z.toISOString().split("T")[0];if($.has(Y))H+=1,z.setDate(z.getDate()-1);else break}return H}async function T(){const V=Vt.currentUser;if(!V)return;const $=qn(Yt,"users",V.uid),H=await Sc($);H.exists()&&H.data().goal&&_(H.data().goal);const z=new Date().toISOString().split("T")[0],Y=qn(Yt,"users",V.uid,"workouts",z),te=await Sc(Y);f(te.exists()?te.data():null);const ne=dl(Yt,"users",V.uid,"workouts"),le=await Sp(ne);let Ce=0;const ve=[];le.forEach(P=>{const I=P.data();I.status==="completed"&&(Ce+=1,ve.push(I.date))}),l(Ce),i(w(ve))}function S(){T()}return Ie.useEffect(()=>{T()},[]),O.jsxs("main",{className:"page",children:[O.jsxs("header",{className:"topbar",children:[O.jsxs("div",{children:[O.jsx("p",{className:"badge",children:"Beta MVP"}),O.jsx("h1",{children:"Welcome back"}),O.jsx("p",{children:r==null?void 0:r.email})]}),O.jsx("button",{className:"ghost",onClick:e,children:"Log out"})]}),O.jsx(hP,{currentGoal:g,onGoalUpdated:_}),O.jsx(sP,{}),O.jsx(rP,{}),O.jsx(iP,{currentWeight:80,goalWeight:70,streak:t,completedWorkouts:o}),O.jsx(nP,{streak:t,completedWorkouts:o,goal:g}),O.jsx(oP,{goal:g,streak:t,completedWorkouts:o}),h?O.jsxs("div",{className:"panel",children:[O.jsx("h3",{children:"Today's Status:"}),O.jsx("p",{children:h.status})]}):O.jsx("div",{className:"panel",children:O.jsx("h3",{children:"No workout logged today"})}),O.jsx(dP,{completedWorkouts:o}),O.jsx(tP,{goal:g,streak:t,completedWorkouts:o,currentWeight:80,goalWeight:70,checkIns:[]}),O.jsx(aP,{streak:t,completedWorkouts:o,goal:g}),O.jsxs("section",{className:"stats",children:[O.jsxs("div",{className:"stat",children:[O.jsx("span",{children:"🔥"}),O.jsx("h2",{children:t}),O.jsx("p",{children:"Day streak"})]}),O.jsxs("div",{className:"stat",children:[O.jsx("span",{children:"💪"}),O.jsx("h2",{children:o}),O.jsx("p",{children:"Total completed"})]}),O.jsxs("div",{className:"stat",children:[O.jsx("span",{children:"🎯"}),O.jsx("h2",{children:g}),O.jsx("p",{children:"Current goal"})]})]}),O.jsxs("section",{className:"layout",children:[O.jsx(lP,{onSubmit:S}),O.jsx(uP,{streak:t,completedWorkouts:o,goal:g})]})]})}function pP({onLogin:r}){const[e,t]=Ie.useState(""),[i,o]=Ie.useState(""),[l,h]=Ie.useState(!0),[f,g]=Ie.useState("");async function _(){g("");try{let w;l?w=await YI(Vt,e,i):w=await XI(Vt,e,i),r(w.user.email)}catch(w){g(w.message)}}return O.jsx("main",{className:"page narrow",children:O.jsxs("section",{className:"panel",children:[O.jsx("h1",{children:l?"Login":"Create Account"}),O.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:w=>t(w.target.value)}),O.jsx("input",{type:"password",placeholder:"Password",value:i,onChange:w=>o(w.target.value)}),f&&O.jsx("p",{style:{color:"red"},children:f}),O.jsx("button",{className:"primary full",onClick:_,children:l?"Login":"Sign Up"}),O.jsx("p",{style:{cursor:"pointer",marginTop:10},onClick:()=>h(!l),children:l?"Don't have an account? Sign up":"Already have an account? Login"})]})})}function mP(){const[r,e]=Ie.useState("landing"),[t,i]=Ie.useState(null);return Ie.useEffect(()=>{const o=tS(Vt,l=>{l&&(i({email:l.email}),e("dashboard"))});return()=>o()},[]),r==="login"?O.jsx(pP,{onLogin:o=>{i({email:o}),e("dashboard")}}):r==="dashboard"?O.jsx(fP,{user:t,onLogout:()=>{i(null),e("landing")}}):O.jsx(eP,{onStart:()=>e("login")})}ZC.createRoot(document.getElementById("root")).render(O.jsx(GC.StrictMode,{children:O.jsx(mP,{})}));
