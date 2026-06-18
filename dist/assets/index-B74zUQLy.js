(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function _w(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var rd={exports:{}},Na={},id={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function vw(){if(Xm)return Re;Xm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function C(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,K={};function B(V,H,he){this.props=V,this.context=H,this.refs=K,this.updater=he||U}B.prototype.isReactComponent={},B.prototype.setState=function(V,H){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,H,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function Z(){}Z.prototype=B.prototype;function oe(V,H,he){this.props=V,this.context=H,this.refs=K,this.updater=he||U}var ue=oe.prototype=new Z;ue.constructor=oe,q(ue,B.prototype),ue.isPureReactComponent=!0;var ge=Array.isArray,Oe=Object.prototype.hasOwnProperty,Te={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function I(V,H,he){var Ie,Ae={},Ne=null,Me=null;if(H!=null)for(Ie in H.ref!==void 0&&(Me=H.ref),H.key!==void 0&&(Ne=""+H.key),H)Oe.call(H,Ie)&&!k.hasOwnProperty(Ie)&&(Ae[Ie]=H[Ie]);var be=arguments.length-2;if(be===1)Ae.children=he;else if(1<be){for(var $e=Array(be),_t=0;_t<be;_t++)$e[_t]=arguments[_t+2];Ae.children=$e}if(V&&V.defaultProps)for(Ie in be=V.defaultProps,be)Ae[Ie]===void 0&&(Ae[Ie]=be[Ie]);return{$$typeof:r,type:V,key:Ne,ref:Me,props:Ae,_owner:Te.current}}function A(V,H){return{$$typeof:r,type:V.type,key:H,ref:V.ref,props:V.props,_owner:V._owner}}function N(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function x(V){var H={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(he){return H[he]})}var O=/\/+/g;function R(V,H){return typeof V=="object"&&V!==null&&V.key!=null?x(""+V.key):H.toString(36)}function nt(V,H,he,Ie,Ae){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(Ne){case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case r:case e:Me=!0}}if(Me)return Me=V,Ae=Ae(Me),V=Ie===""?"."+R(Me,0):Ie,ge(Ae)?(he="",V!=null&&(he=V.replace(O,"$&/")+"/"),nt(Ae,H,he,"",function(_t){return _t})):Ae!=null&&(N(Ae)&&(Ae=A(Ae,he+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(O,"$&/")+"/")+V)),H.push(Ae)),1;if(Me=0,Ie=Ie===""?".":Ie+":",ge(V))for(var be=0;be<V.length;be++){Ne=V[be];var $e=Ie+R(Ne,be);Me+=nt(Ne,H,he,$e,Ae)}else if($e=C(V),typeof $e=="function")for(V=$e.call(V),be=0;!(Ne=V.next()).done;)Ne=Ne.value,$e=Ie+R(Ne,be++),Me+=nt(Ne,H,he,$e,Ae);else if(Ne==="object")throw H=String(V),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Me}function Dt(V,H,he){if(V==null)return V;var Ie=[],Ae=0;return nt(V,Ie,"","",function(Ne){return H.call(he,Ne,Ae++)}),Ie}function xt(V){if(V._status===-1){var H=V._result;H=H(),H.then(function(he){(V._status===0||V._status===-1)&&(V._status=1,V._result=he)},function(he){(V._status===0||V._status===-1)&&(V._status=2,V._result=he)}),V._status===-1&&(V._status=0,V._result=H)}if(V._status===1)return V._result.default;throw V._result}var ze={current:null},ee={transition:null},fe={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Te};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Dt,forEach:function(V,H,he){Dt(V,function(){H.apply(this,arguments)},he)},count:function(V){var H=0;return Dt(V,function(){H++}),H},toArray:function(V){return Dt(V,function(H){return H})||[]},only:function(V){if(!N(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Re.Component=B,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=oe,Re.StrictMode=s,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Re.act=ie,Re.cloneElement=function(V,H,he){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ie=q({},V.props),Ae=V.key,Ne=V.ref,Me=V._owner;if(H!=null){if(H.ref!==void 0&&(Ne=H.ref,Me=Te.current),H.key!==void 0&&(Ae=""+H.key),V.type&&V.type.defaultProps)var be=V.type.defaultProps;for($e in H)Oe.call(H,$e)&&!k.hasOwnProperty($e)&&(Ie[$e]=H[$e]===void 0&&be!==void 0?be[$e]:H[$e])}var $e=arguments.length-2;if($e===1)Ie.children=he;else if(1<$e){be=Array($e);for(var _t=0;_t<$e;_t++)be[_t]=arguments[_t+2];Ie.children=be}return{$$typeof:r,type:V.type,key:Ae,ref:Ne,props:Ie,_owner:Me}},Re.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Re.createElement=I,Re.createFactory=function(V){var H=I.bind(null,V);return H.type=V,H},Re.createRef=function(){return{current:null}},Re.forwardRef=function(V){return{$$typeof:m,render:V}},Re.isValidElement=N,Re.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:xt}},Re.memo=function(V,H){return{$$typeof:_,type:V,compare:H===void 0?null:H}},Re.startTransition=function(V){var H=ee.transition;ee.transition={};try{V()}finally{ee.transition=H}},Re.unstable_act=ie,Re.useCallback=function(V,H){return ze.current.useCallback(V,H)},Re.useContext=function(V){return ze.current.useContext(V)},Re.useDebugValue=function(){},Re.useDeferredValue=function(V){return ze.current.useDeferredValue(V)},Re.useEffect=function(V,H){return ze.current.useEffect(V,H)},Re.useId=function(){return ze.current.useId()},Re.useImperativeHandle=function(V,H,he){return ze.current.useImperativeHandle(V,H,he)},Re.useInsertionEffect=function(V,H){return ze.current.useInsertionEffect(V,H)},Re.useLayoutEffect=function(V,H){return ze.current.useLayoutEffect(V,H)},Re.useMemo=function(V,H){return ze.current.useMemo(V,H)},Re.useReducer=function(V,H,he){return ze.current.useReducer(V,H,he)},Re.useRef=function(V){return ze.current.useRef(V)},Re.useState=function(V){return ze.current.useState(V)},Re.useSyncExternalStore=function(V,H,he){return ze.current.useSyncExternalStore(V,H,he)},Re.useTransition=function(){return ze.current.useTransition()},Re.version="18.3.1",Re}var Jm;function Hd(){return Jm||(Jm=1,id.exports=vw()),id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function Ew(){if(Zm)return Na;Zm=1;var r=Hd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,T={},C=null,U=null;_!==void 0&&(C=""+_),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(U=g.ref);for(w in g)s.call(g,w)&&!l.hasOwnProperty(w)&&(T[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:m,key:C,ref:U,props:T,_owner:o.current}}return Na.Fragment=t,Na.jsx=h,Na.jsxs=h,Na}var eg;function ww(){return eg||(eg=1,rd.exports=Ew()),rd.exports}var z=ww();const Tw=()=>{};var tg={};/**
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
 */const by=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Iw=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},Fy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=l>>2,T=(l&3)<<4|m>>4;let C=(m&15)<<2|_>>6,U=_&63;g||(U=64,h||(C=64)),s.push(t[w],t[T],t[C],t[U])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(by(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Iw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||m==null||_==null||T==null)throw new Sw;const C=l<<2|m>>4;if(s.push(C),_!==64){const U=m<<4&240|_>>2;if(s.push(U),T!==64){const q=_<<6&192|T;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Sw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Aw=function(r){const e=by(r);return Fy.encodeByteArray(e,!0)},Hu=function(r){return Aw(r).replace(/\./g,"")},Uy=function(r){try{return Fy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cw=()=>Rw().__FIREBASE_DEFAULTS__,Pw=()=>{if(typeof process>"u"||typeof tg>"u")return;const r=tg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},kw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Uy(r[1]);return e&&JSON.parse(e)},dc=()=>{try{return Tw()||Cw()||Pw()||kw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},jy=r=>{var e,t;return(t=(e=dc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Nw=r=>{const e=jy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},zy=()=>{var r;return(r=dc())===null||r===void 0?void 0:r.config},By=r=>{var e;return(e=dc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class Dw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Po(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $y(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function xw(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Hu(JSON.stringify(t)),Hu(JSON.stringify(h)),""].join(".")}const ba={};function Vw(){const r={prod:[],emulator:[]};for(const e of Object.keys(ba))ba[e]?r.emulator.push(e):r.prod.push(e);return r}function Ow(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let ng=!1;function Wy(r,e){if(typeof window>"u"||typeof document>"u"||!Po(window.location.host)||ba[r]===e||ba[r]||ng)return;ba[r]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",l=Vw().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,U){C.setAttribute("width","24"),C.setAttribute("id",U),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{ng=!0,h()},C}function w(C,U){C.setAttribute("id",U),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function T(){const C=Ow(s),U=t("text"),q=document.getElementById(U)||document.createElement("span"),K=t("learnmore"),B=document.getElementById(K)||document.createElement("a"),Z=t("preprendIcon"),oe=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ue=C.element;m(ue),w(B,K);const ge=_();g(oe,Z),ue.append(oe,q,B,ge),document.body.appendChild(ue)}l?(q.innerText="Preview backend disconnected.",oe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(oe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function Mw(){var r;const e=(r=dc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Uw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jw(){const r=jt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function zw(){return!Mw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bw(){try{return typeof indexedDB=="object"}catch{return!1}}function $w(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ww="FirebaseError";class br extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Ww,Object.setPrototypeOf(this,br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nl.prototype.create)}}class nl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?Hw(l,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new br(o,m,s)}}function Hw(r,e){return r.replace(qw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const qw=/\{\$([^}]+)}/g;function Gw(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ls(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(rg(l)&&rg(h)){if(!ls(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function rg(r){return r!==null&&typeof r=="object"}/**
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
 */function rl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Da(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function xa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Kw(r,e){const t=new Qw(r,e);return t.subscribe.bind(t)}class Qw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Yw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=sd),o.error===void 0&&(o.error=sd),o.complete===void 0&&(o.complete=sd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yw(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function sd(){}/**
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
 */function zt(r){return r&&r._delegate?r._delegate:r}class us{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const is="[DEFAULT]";/**
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
 */class Xw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Dw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zw(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jw(r){return r===is?void 0:r}function Zw(r){return r.instantiationMode==="EAGER"}/**
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
 */class e0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const t0={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},n0=Ce.INFO,r0={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},i0=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=r0[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qd{constructor(e){this.name=e,this._logLevel=n0,this._logHandler=i0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const s0=(r,e)=>e.some(t=>r instanceof t);let ig,sg;function o0(){return ig||(ig=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a0(){return sg||(sg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hy=new WeakMap,vd=new WeakMap,qy=new WeakMap,od=new WeakMap,Gd=new WeakMap;function l0(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(mi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Hy.set(t,r)}).catch(()=>{}),Gd.set(e,r),e}function u0(r){if(vd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});vd.set(r,e)}let Ed={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return vd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||qy.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function c0(r){Ed=r(Ed)}function h0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(ad(this),e,...t);return qy.set(s,e.sort?e.sort():[e]),mi(s)}:a0().includes(r)?function(...e){return r.apply(ad(this),e),mi(Hy.get(this))}:function(...e){return mi(r.apply(ad(this),e))}}function d0(r){return typeof r=="function"?h0(r):(r instanceof IDBTransaction&&u0(r),s0(r,o0())?new Proxy(r,Ed):r)}function mi(r){if(r instanceof IDBRequest)return l0(r);if(od.has(r))return od.get(r);const e=d0(r);return e!==r&&(od.set(r,e),Gd.set(e,r)),e}const ad=r=>Gd.get(r);function f0(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),m=mi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(mi(h.result),g.oldVersion,g.newVersion,mi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const p0=["get","getKey","getAll","getAllKeys","count"],m0=["put","add","delete","clear"],ld=new Map;function og(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ld.get(e))return ld.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=m0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||p0.includes(t)))return;const l=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return ld.set(e,l),l}c0(r=>({...r,get:(e,t,s)=>og(e,t)||r.get(e,t,s),has:(e,t)=>!!og(e,t)||r.has(e,t)}));/**
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
 */class g0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(y0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function y0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wd="@firebase/app",ag="0.13.2";/**
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
 */const Vr=new qd("@firebase/app"),_0="@firebase/app-compat",v0="@firebase/analytics-compat",E0="@firebase/analytics",w0="@firebase/app-check-compat",T0="@firebase/app-check",I0="@firebase/auth",S0="@firebase/auth-compat",A0="@firebase/database",R0="@firebase/data-connect",C0="@firebase/database-compat",P0="@firebase/functions",k0="@firebase/functions-compat",N0="@firebase/installations",D0="@firebase/installations-compat",x0="@firebase/messaging",V0="@firebase/messaging-compat",O0="@firebase/performance",L0="@firebase/performance-compat",M0="@firebase/remote-config",b0="@firebase/remote-config-compat",F0="@firebase/storage",U0="@firebase/storage-compat",j0="@firebase/firestore",z0="@firebase/ai",B0="@firebase/firestore-compat",$0="firebase",W0="11.10.0";/**
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
 */const Td="[DEFAULT]",H0={[wd]:"fire-core",[_0]:"fire-core-compat",[E0]:"fire-analytics",[v0]:"fire-analytics-compat",[T0]:"fire-app-check",[w0]:"fire-app-check-compat",[I0]:"fire-auth",[S0]:"fire-auth-compat",[A0]:"fire-rtdb",[R0]:"fire-data-connect",[C0]:"fire-rtdb-compat",[P0]:"fire-fn",[k0]:"fire-fn-compat",[N0]:"fire-iid",[D0]:"fire-iid-compat",[x0]:"fire-fcm",[V0]:"fire-fcm-compat",[O0]:"fire-perf",[L0]:"fire-perf-compat",[M0]:"fire-rc",[b0]:"fire-rc-compat",[F0]:"fire-gcs",[U0]:"fire-gcs-compat",[j0]:"fire-fst",[B0]:"fire-fst-compat",[z0]:"fire-vertex","fire-js":"fire-js",[$0]:"fire-js-all"};/**
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
 */const qu=new Map,q0=new Map,Id=new Map;function lg(r,e){try{r.container.addComponent(e)}catch(t){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function To(r){const e=r.name;if(Id.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;Id.set(e,r);for(const t of qu.values())lg(t,r);for(const t of q0.values())lg(t,r);return!0}function Kd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function wn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const G0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new nl("app","Firebase",G0);/**
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
 */class K0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
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
 */const ko=W0;function Gy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Td,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(t||(t=zy()),!t)throw gi.create("no-options");const l=qu.get(o);if(l){if(ls(t,l.options)&&ls(s,l.config))return l;throw gi.create("duplicate-app",{appName:o})}const h=new e0(o);for(const g of Id.values())h.addComponent(g);const m=new K0(t,s,h);return qu.set(o,m),m}function Ky(r=Td){const e=qu.get(r);if(!e&&r===Td&&zy())return Gy();if(!e)throw gi.create("no-app",{appName:r});return e}function yi(r,e,t){var s;let o=(s=H0[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const m=[`Unable to register library "${o}" with version "${e}":`];l&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(m.join(" "));return}To(new us(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const Q0="firebase-heartbeat-database",Y0=1,$a="firebase-heartbeat-store";let ud=null;function Qy(){return ud||(ud=f0(Q0,Y0,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore($a)}catch(t){console.warn(t)}}}}).catch(r=>{throw gi.create("idb-open",{originalErrorMessage:r.message})})),ud}async function X0(r){try{const t=(await Qy()).transaction($a),s=await t.objectStore($a).get(Yy(r));return await t.done,s}catch(e){if(e instanceof br)Vr.warn(e.message);else{const t=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(t.message)}}}async function ug(r,e){try{const s=(await Qy()).transaction($a,"readwrite");await s.objectStore($a).put(e,Yy(r)),await s.done}catch(t){if(t instanceof br)Vr.warn(t.message);else{const s=gi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(s.message)}}}function Yy(r){return`${r.name}!${r.options.appId}`}/**
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
 */const J0=1024,Z0=30;class eT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=cg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>Z0){const h=rT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Vr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=cg(),{heartbeatsToSend:s,unsentEntries:o}=tT(this._heartbeatsCache.heartbeats),l=Hu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Vr.warn(t),""}}}function cg(){return new Date().toISOString().substring(0,10)}function tT(r,e=J0){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),hg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),hg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class nT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bw()?$w().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await X0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ug(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ug(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function hg(r){return Hu(JSON.stringify({version:2,heartbeats:r})).length}function rT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function iT(r){To(new us("platform-logger",e=>new g0(e),"PRIVATE")),To(new us("heartbeat",e=>new eT(e),"PRIVATE")),yi(wd,ag,r),yi(wd,ag,"esm2017"),yi("fire-js","")}iT("");function Qd(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function Xy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sT=Xy,Jy=new nl("auth","Firebase",Xy());/**
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
 */const Gu=new qd("@firebase/auth");function oT(r,...e){Gu.logLevel<=Ce.WARN&&Gu.warn(`Auth (${ko}): ${r}`,...e)}function Lu(r,...e){Gu.logLevel<=Ce.ERROR&&Gu.error(`Auth (${ko}): ${r}`,...e)}/**
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
 */function Bn(r,...e){throw Yd(r,...e)}function nr(r,...e){return Yd(r,...e)}function Zy(r,e,t){const s=Object.assign(Object.assign({},sT()),{[e]:t});return new nl("auth","Firebase",s).create(e,{appName:r.name})}function Dr(r){return Zy(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Jy.create(r,...e)}function ye(r,e,...t){if(!r)throw Yd(e,...t)}function kr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Lu(e),new Error(e)}function Or(r,e){r||kr(e)}/**
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
 */function Sd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function aT(){return dg()==="http:"||dg()==="https:"}function dg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function lT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aT()||Fw()||"connection"in navigator)?navigator.onLine:!0}function uT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class il{constructor(e,t){this.shortDelay=e,this.longDelay=t,Or(t>e,"Short delay should be less than long delay!"),this.isMobile=Lw()||Uw()}get(){return lT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xd(r,e){Or(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class e_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dT=new il(3e4,6e4);function Ci(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Pi(r,e,t,s,o={}){return t_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const m=rl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return bw()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Po(r.emulatorConfig.host)&&(_.credentials="include"),e_.fetch()(await n_(r,r.config.apiHost,t,m),_)})}async function t_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},cT),e);try{const o=new pT(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Pu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const m=l.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Pu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Pu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Zy(r,w,_);Bn(r,w)}}catch(o){if(o instanceof br)throw o;Bn(r,"network-request-failed",{message:String(o)})}}async function sl(r,e,t,s,o={}){const l=await Pi(r,e,t,s,o);return"mfaPendingCredential"in l&&Bn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function n_(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?Xd(r.config,o):`${r.config.apiScheme}://${o}`;return hT.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function fT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(nr(this.auth,"network-request-failed")),dT.get())})}}function Pu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=nr(r,e,s);return o.customData._tokenResponse=t,o}function fg(r){return r!==void 0&&r.enterprise!==void 0}class mT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return fT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gT(r,e){return Pi(r,"GET","/v2/recaptchaConfig",Ci(r,e))}/**
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
 */async function yT(r,e){return Pi(r,"POST","/v1/accounts:delete",e)}async function Ku(r,e){return Pi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _T(r,e=!1){const t=zt(r),s=await t.getIdToken(e),o=Jd(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Fa(cd(o.auth_time)),issuedAtTime:Fa(cd(o.iat)),expirationTime:Fa(cd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function cd(r){return Number(r)*1e3}function Jd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Lu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Uy(t);return o?JSON.parse(o):(Lu("Failed to decode base64 JWT payload"),null)}catch(o){return Lu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function pg(r){const e=Jd(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof br&&vT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function vT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class ET{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ad{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Wa(r,Ku(t,{idToken:s}));ye(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?r_(l.providerUserInfo):[],m=TT(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(m!=null&&m.length),w=g?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new Ad(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,T)}async function wT(r){const e=zt(r);await Qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function r_(r){return r.map(e=>{var{providerId:t}=e,s=Qd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function IT(r,e){const t=await t_(r,{},async()=>{const s=rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await n_(r,o,"/v1/token",`key=${l}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&Po(r.emulatorConfig.host)&&(g.credentials="include"),e_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ST(r,e){return Pi(r,"POST","/v2/accounts:revokeToken",Ci(r,e))}/**
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
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=pg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await IT(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new _o;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
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
 */function ui(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Qd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ET(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Ad(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Wa(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return _T(this,e)}reload(){return wT(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Qu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(Dr(this.auth));const e=await this.getIdToken();return await Wa(this,yT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,m,g,_,w;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,U=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,K=(m=t.tenantId)!==null&&m!==void 0?m:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,Z=(_=t.createdAt)!==null&&_!==void 0?_:void 0,oe=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ue,emailVerified:ge,isAnonymous:Oe,providerData:Te,stsTokenManager:k}=t;ye(ue&&k,e,"internal-error");const I=_o.fromJSON(this.name,k);ye(typeof ue=="string",e,"internal-error"),ui(T,e.name),ui(C,e.name),ye(typeof ge=="boolean",e,"internal-error"),ye(typeof Oe=="boolean",e,"internal-error"),ui(U,e.name),ui(q,e.name),ui(K,e.name),ui(B,e.name),ui(Z,e.name),ui(oe,e.name);const A=new Un({uid:ue,auth:e,email:C,emailVerified:ge,displayName:T,isAnonymous:Oe,photoURL:q,phoneNumber:U,tenantId:K,stsTokenManager:I,createdAt:Z,lastLoginAt:oe});return Te&&Array.isArray(Te)&&(A.providerData=Te.map(N=>Object.assign({},N))),B&&(A._redirectEventId=B),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new _o;o.updateFromServerResponse(t);const l=new Un({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Qu(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?r_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),m=new _o;m.updateFromIdToken(s);const g=new Un({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ad(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
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
 */const mg=new Map;function Nr(r){Or(r instanceof Function,"Expected a class definition");let e=mg.get(r);return e?(Or(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,mg.set(r,e),e)}/**
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
 */class i_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}i_.type="NONE";const gg=i_;/**
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
 */function Mu(r,e,t){return`firebase:${r}:${e}:${t}`}class vo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Mu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Mu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ku(this.auth,{idToken:e}).catch(()=>{});return t?Un._fromGetAccountInfoResponse(this.auth,t,e):null}return Un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new vo(Nr(gg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Nr(gg);const h=Mu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let T;if(typeof w=="string"){const C=await Ku(e,{idToken:w}).catch(()=>{});if(!C)break;T=await Un._fromGetAccountInfoResponse(e,C,w)}else T=Un._fromJSON(e,w);_!==l&&(m=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new vo(l,e,s):(l=g[0],m&&await l._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new vo(l,e,s))}}/**
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
 */function yg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(l_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(s_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(c_(e))return"Blackberry";if(h_(e))return"Webos";if(o_(e))return"Safari";if((e.includes("chrome/")||a_(e))&&!e.includes("edge/"))return"Chrome";if(u_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function s_(r=jt()){return/firefox\//i.test(r)}function o_(r=jt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function a_(r=jt()){return/crios\//i.test(r)}function l_(r=jt()){return/iemobile/i.test(r)}function u_(r=jt()){return/android/i.test(r)}function c_(r=jt()){return/blackberry/i.test(r)}function h_(r=jt()){return/webos/i.test(r)}function Zd(r=jt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function AT(r=jt()){var e;return Zd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function RT(){return jw()&&document.documentMode===10}function d_(r=jt()){return Zd(r)||u_(r)||h_(r)||c_(r)||/windows phone/i.test(r)||l_(r)}/**
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
 */function f_(r,e=[]){let t;switch(r){case"Browser":t=yg(jt());break;case"Worker":t=`${yg(jt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ko}/${s}`}/**
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
 */class CT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,m)=>{try{const g=e(l);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function PT(r,e={}){return Pi(r,"GET","/v2/passwordPolicy",Ci(r,e))}/**
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
 */const kT=6;class NT{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:kT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class DT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _g(this),this.idTokenSubscription=new _g(this),this.beforeStateQueue=new CT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await vo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ku(this,{idToken:e}),s=await Un._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(Dr(this));const t=e?zt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(Dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(Dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PT(this),t=new NT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new nl("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ST(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Nr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await vo.create(this,[Nr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&oT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ms(r){return zt(r)}class _g{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kw(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xT(r){fc=r}function p_(r){return fc.loadJS(r)}function VT(){return fc.recaptchaEnterpriseScript}function OT(){return fc.gapiScript}function LT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class MT{constructor(){this.enterprise=new bT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class bT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const FT="recaptcha-enterprise",m_="NO_RECAPTCHA";class UT{constructor(e){this.type=FT,this.auth=ms(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,m)=>{gT(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new mT(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(l,h,m){const g=window.grecaptcha;fg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(m_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new MT().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(m=>{if(!t&&fg(window.grecaptcha))o(m,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=VT();g.length!==0&&(g+=m),p_(g).then(()=>{o(m,l,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function vg(r,e,t,s=!1,o=!1){const l=new UT(r);let h;if(o)h=m_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Rd(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await vg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await vg(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
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
 */function jT(r,e){const t=Kd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ls(l,e??{}))return o;Bn(o,"already-initialized")}return t.initialize({options:e})}function zT(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Nr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function BT(r,e,t){const s=ms(r);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=g_(e),{host:h,port:m}=$T(e),g=m===null?"":`:${m}`,_={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(ls(_,s.config.emulator)&&ls(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Po(h)?($y(`${l}//${h}${g}`),Wy("Auth",!0)):WT()}function g_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function $T(r){const e=g_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Eg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Eg(h)}}}function Eg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function WT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class ef{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,t){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}async function HT(r,e){return Pi(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function qT(r,e){return sl(r,"POST","/v1/accounts:signInWithPassword",Ci(r,e))}/**
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
 */async function GT(r,e){return sl(r,"POST","/v1/accounts:signInWithEmailLink",Ci(r,e))}async function KT(r,e){return sl(r,"POST","/v1/accounts:signInWithEmailLink",Ci(r,e))}/**
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
 */class Ha extends ef{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ha(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ha(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rd(e,t,"signInWithPassword",qT);case"emailLink":return GT(e,{email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rd(e,s,"signUpPassword",HT);case"emailLink":return KT(e,{idToken:t,email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Eo(r,e){return sl(r,"POST","/v1/accounts:signInWithIdp",Ci(r,e))}/**
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
 */const QT="http://localhost";class cs extends ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Bn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Qd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new cs(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Eo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Eo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Eo(e,t)}buildRequest(){const e={requestUri:QT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rl(t)}return e}}/**
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
 */function YT(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XT(r){const e=Da(xa(r)).link,t=e?Da(xa(e)).deep_link_id:null,s=Da(xa(r)).deep_link_id;return(s?Da(xa(s)).link:null)||s||t||e||r}class tf{constructor(e){var t,s,o,l,h,m;const g=Da(xa(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,T=YT((o=g.mode)!==null&&o!==void 0?o:null);ye(_&&w&&T,"argument-error"),this.apiKey=_,this.operation=T,this.code=w,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=XT(e);try{return new tf(t)}catch{return null}}}/**
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
 */class No{constructor(){this.providerId=No.PROVIDER_ID}static credential(e,t){return Ha._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=tf.parseLink(t);return ye(s,"argument-error"),Ha._fromEmailAndCode(e,s.code,s.tenantId)}}No.PROVIDER_ID="password";No.EMAIL_PASSWORD_SIGN_IN_METHOD="password";No.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class y_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ol extends y_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ci extends ol{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
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
 */class hi extends ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cs._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
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
 */class di extends ol{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
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
 */class fi extends ol{constructor(){super("twitter.com")}static credential(e,t){return cs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fi.credential(t,s)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
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
 */async function JT(r,e){return sl(r,"POST","/v1/accounts:signUp",Ci(r,e))}/**
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
 */class hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Un._fromIdTokenResponse(e,s,o),h=wg(s);return new hs({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=wg(s);return new hs({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function wg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Yu extends br{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Yu.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Yu(e,t,s,o)}}function __(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Yu._fromErrorAndOperation(r,l,e,s):l})}async function ZT(r,e,t=!1){const s=await Wa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return hs._forOperation(r,"link",s)}/**
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
 */async function eI(r,e,t=!1){const{auth:s}=r;if(wn(s.app))return Promise.reject(Dr(s));const o="reauthenticate";try{const l=await Wa(r,__(s,o,e,r),t);ye(l.idToken,s,"internal-error");const h=Jd(l.idToken);ye(h,s,"internal-error");const{sub:m}=h;return ye(r.uid===m,s,"user-mismatch"),hs._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Bn(s,"user-mismatch"),l}}/**
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
 */async function v_(r,e,t=!1){if(wn(r.app))return Promise.reject(Dr(r));const s="signIn",o=await __(r,s,e),l=await hs._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function tI(r,e){return v_(ms(r),e)}/**
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
 */async function E_(r){const e=ms(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nI(r,e,t){if(wn(r.app))return Promise.reject(Dr(r));const s=ms(r),h=await Rd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JT).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&E_(r),g}),m=await hs._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function rI(r,e,t){return wn(r.app)?Promise.reject(Dr(r)):tI(zt(r),No.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&E_(r),s})}/**
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
 */function iI(r,e){return zt(r).setPersistence(e)}function sI(r,e,t,s){return zt(r).onIdTokenChanged(e,t,s)}function oI(r,e,t){return zt(r).beforeAuthStateChanged(e,t)}function aI(r,e,t,s){return zt(r).onAuthStateChanged(e,t,s)}const Xu="__sak";/**
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
 */class w_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xu,"1"),this.storage.removeItem(Xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lI=1e3,uI=10;class T_ extends w_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=d_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);RT()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,uI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},lI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}T_.type="LOCAL";const I_=T_;/**
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
 */class S_ extends w_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}S_.type="SESSION";const A_=S_;/**
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
 */function cI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new pc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,l)),g=await cI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pc.receivers=[];/**
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
 */function nf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class hI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((m,g)=>{const _=nf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const C=T;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(C.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function rr(){return window}function dI(r){rr().location.href=r}/**
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
 */function R_(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function fI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function mI(){return R_()?self:null}/**
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
 */const C_="firebaseLocalStorageDb",gI=1,Ju="firebaseLocalStorage",P_="fbase_key";class al{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mc(r,e){return r.transaction([Ju],e?"readwrite":"readonly").objectStore(Ju)}function yI(){const r=indexedDB.deleteDatabase(C_);return new al(r).toPromise()}function Cd(){const r=indexedDB.open(C_,gI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ju,{keyPath:P_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ju)?e(s):(s.close(),await yI(),e(await Cd()))})})}async function Tg(r,e,t){const s=mc(r,!0).put({[P_]:e,value:t});return new al(s).toPromise()}async function _I(r,e){const t=mc(r,!1).get(e),s=await new al(t).toPromise();return s===void 0?null:s.value}function Ig(r,e){const t=mc(r,!0).delete(e);return new al(t).toPromise()}const vI=800,EI=3;class k_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>EI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return R_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pc._getInstance(mI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fI(),!this.activeServiceWorker)return;this.sender=new hI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cd();return await Tg(e,Xu,"1"),await Ig(e,Xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Tg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>_I(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ig(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=mc(o,!1).getAll();return new al(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k_.type="LOCAL";const wI=k_;new il(3e4,6e4);/**
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
 */function TI(r,e){return e?Nr(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class rf extends ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function II(r){return v_(r.auth,new rf(r),r.bypassAuthState)}function SI(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),eI(t,new rf(r),r.bypassAuthState)}async function AI(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),ZT(t,new rf(r),r.bypassAuthState)}/**
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
 */class N_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return II;case"linkViaPopup":case"linkViaRedirect":return AI;case"reauthViaPopup":case"reauthViaRedirect":return SI;default:Bn(this.auth,"internal-error")}}resolve(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RI=new il(2e3,1e4);class yo extends N_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,yo.currentPopupAction&&yo.currentPopupAction.cancel(),yo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Or(this.filter.length===1,"Popup operations only handle one event");const e=nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RI.get())};e()}}yo.currentPopupAction=null;/**
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
 */const CI="pendingRedirect",bu=new Map;class PI extends N_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=bu.get(this.auth._key());if(!e){try{const s=await kI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}bu.set(this.auth._key(),e)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kI(r,e){const t=xI(e),s=DI(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function NI(r,e){bu.set(r._key(),e)}function DI(r){return Nr(r._redirectPersistence)}function xI(r){return Mu(CI,r.config.apiKey,r.name)}async function VI(r,e,t=!1){if(wn(r.app))return Promise.reject(Dr(r));const s=ms(r),o=TI(s,e),h=await new PI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const OI=600*1e3;class LI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!D_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(nr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sg(e))}saveEventToCache(e){this.cachedEventUids.add(Sg(e)),this.lastProcessedEventTime=Date.now()}}function Sg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function D_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return D_(r);default:return!1}}/**
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
 */async function bI(r,e={}){return Pi(r,"GET","/v1/projects",e)}/**
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
 */const FI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UI=/^https?/;async function jI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await bI(r);for(const t of e)try{if(zI(t))return}catch{}Bn(r,"unauthorized-domain")}function zI(r){const e=Sd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!UI.test(t))return!1;if(FI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const BI=new il(3e4,6e4);function Ag(){const r=rr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function $I(r){return new Promise((e,t)=>{var s,o,l;function h(){Ag(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ag(),t(nr(r,"network-request-failed"))},timeout:BI.get()})}if(!((o=(s=rr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=rr().gapi)===null||l===void 0)&&l.load)h();else{const m=LT("iframefcb");return rr()[m]=()=>{gapi.load?h():t(nr(r,"network-request-failed"))},p_(`${OT()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Fu=null,e})}let Fu=null;function WI(r){return Fu=Fu||$I(r),Fu}/**
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
 */const HI=new il(5e3,15e3),qI="__/auth/iframe",GI="emulator/auth/iframe",KI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YI(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Xd(e,GI):`https://${r.config.authDomain}/${qI}`,s={apiKey:e.apiKey,appName:r.name,v:ko},o=QI.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${rl(s).slice(1)}`}async function XI(r){const e=await WI(r),t=rr().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:YI(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KI,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=nr(r,"network-request-failed"),m=rr().setTimeout(()=>{l(h)},HI.get());function g(){rr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const JI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZI=500,eS=600,tS="_blank",nS="http://localhost";class Rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rS(r,e,t,s=ZI,o=eS){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},JI),{width:s.toString(),height:o.toString(),top:l,left:h}),_=jt().toLowerCase();t&&(m=a_(_)?tS:t),s_(_)&&(e=e||nS,g.scrollbars="yes");const w=Object.entries(g).reduce((C,[U,q])=>`${C}${U}=${q},`,"");if(AT(_)&&m!=="_self")return iS(e||"",m),new Rg(null);const T=window.open(e||"",m,w);ye(T,r,"popup-blocked");try{T.focus()}catch{}return new Rg(T)}function iS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const sS="__/auth/handler",oS="emulator/auth/handler",aS=encodeURIComponent("fac");async function Cg(r,e,t,s,o,l){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:ko,eventId:o};if(e instanceof y_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",Gw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof ol){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await r._getAppCheckToken(),_=g?`#${aS}=${encodeURIComponent(g)}`:"";return`${lS(r)}?${rl(m).slice(1)}${_}`}function lS({config:r}){return r.emulator?Xd(r,oS):`https://${r.authDomain}/${sS}`}/**
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
 */const hd="webStorageSupport";class uS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=A_,this._completeRedirectFn=VI,this._overrideRedirectResult=NI}async _openPopup(e,t,s,o){var l;Or((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Cg(e,t,s,Sd(),o);return rS(e,h,nf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Cg(e,t,s,Sd(),o);return dI(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Or(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await XI(e),s=new LI(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hd,{type:hd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[hd];h!==void 0&&t(!!h),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return d_()||o_()||Zd()}}const cS=uS;var Pg="@firebase/auth",kg="1.10.8";/**
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
 */class hS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fS(r){To(new us("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f_(r)},_=new DT(s,o,l,g);return zT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),To(new us("auth-internal",e=>{const t=ms(e.getProvider("auth").getImmediate());return(s=>new hS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(Pg,kg,dS(r)),yi(Pg,kg,"esm2017")}/**
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
 */const pS=300,mS=By("authIdTokenMaxAge")||pS;let Ng=null;const gS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>mS)return;const o=t==null?void 0:t.token;Ng!==o&&(Ng=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function yS(r=Ky()){const e=Kd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=jT(r,{popupRedirectResolver:cS,persistence:[wI,I_,A_]}),s=By("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=gS(l.toString());oI(t,h,()=>h(t.currentUser)),sI(t,m=>h(m))}}const o=jy("auth");return o&&BT(t,`http://${o}`),t}function _S(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}xT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=nr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",_S().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fS("Browser");var vS="firebase",ES="11.10.0";/**
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
 */yi(vS,ES,"app");var Dg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _i,x_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,I){function A(){}A.prototype=I.prototype,k.D=I.prototype,k.prototype=new A,k.prototype.constructor=k,k.C=function(N,x,O){for(var R=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)R[nt-2]=arguments[nt];return I.prototype[x].apply(N,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,I,A){A||(A=0);var N=Array(16);if(typeof I=="string")for(var x=0;16>x;++x)N[x]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(x=0;16>x;++x)N[x]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=k.g[0],A=k.g[1],x=k.g[2];var O=k.g[3],R=I+(O^A&(x^O))+N[0]+3614090360&4294967295;I=A+(R<<7&4294967295|R>>>25),R=O+(x^I&(A^x))+N[1]+3905402710&4294967295,O=I+(R<<12&4294967295|R>>>20),R=x+(A^O&(I^A))+N[2]+606105819&4294967295,x=O+(R<<17&4294967295|R>>>15),R=A+(I^x&(O^I))+N[3]+3250441966&4294967295,A=x+(R<<22&4294967295|R>>>10),R=I+(O^A&(x^O))+N[4]+4118548399&4294967295,I=A+(R<<7&4294967295|R>>>25),R=O+(x^I&(A^x))+N[5]+1200080426&4294967295,O=I+(R<<12&4294967295|R>>>20),R=x+(A^O&(I^A))+N[6]+2821735955&4294967295,x=O+(R<<17&4294967295|R>>>15),R=A+(I^x&(O^I))+N[7]+4249261313&4294967295,A=x+(R<<22&4294967295|R>>>10),R=I+(O^A&(x^O))+N[8]+1770035416&4294967295,I=A+(R<<7&4294967295|R>>>25),R=O+(x^I&(A^x))+N[9]+2336552879&4294967295,O=I+(R<<12&4294967295|R>>>20),R=x+(A^O&(I^A))+N[10]+4294925233&4294967295,x=O+(R<<17&4294967295|R>>>15),R=A+(I^x&(O^I))+N[11]+2304563134&4294967295,A=x+(R<<22&4294967295|R>>>10),R=I+(O^A&(x^O))+N[12]+1804603682&4294967295,I=A+(R<<7&4294967295|R>>>25),R=O+(x^I&(A^x))+N[13]+4254626195&4294967295,O=I+(R<<12&4294967295|R>>>20),R=x+(A^O&(I^A))+N[14]+2792965006&4294967295,x=O+(R<<17&4294967295|R>>>15),R=A+(I^x&(O^I))+N[15]+1236535329&4294967295,A=x+(R<<22&4294967295|R>>>10),R=I+(x^O&(A^x))+N[1]+4129170786&4294967295,I=A+(R<<5&4294967295|R>>>27),R=O+(A^x&(I^A))+N[6]+3225465664&4294967295,O=I+(R<<9&4294967295|R>>>23),R=x+(I^A&(O^I))+N[11]+643717713&4294967295,x=O+(R<<14&4294967295|R>>>18),R=A+(O^I&(x^O))+N[0]+3921069994&4294967295,A=x+(R<<20&4294967295|R>>>12),R=I+(x^O&(A^x))+N[5]+3593408605&4294967295,I=A+(R<<5&4294967295|R>>>27),R=O+(A^x&(I^A))+N[10]+38016083&4294967295,O=I+(R<<9&4294967295|R>>>23),R=x+(I^A&(O^I))+N[15]+3634488961&4294967295,x=O+(R<<14&4294967295|R>>>18),R=A+(O^I&(x^O))+N[4]+3889429448&4294967295,A=x+(R<<20&4294967295|R>>>12),R=I+(x^O&(A^x))+N[9]+568446438&4294967295,I=A+(R<<5&4294967295|R>>>27),R=O+(A^x&(I^A))+N[14]+3275163606&4294967295,O=I+(R<<9&4294967295|R>>>23),R=x+(I^A&(O^I))+N[3]+4107603335&4294967295,x=O+(R<<14&4294967295|R>>>18),R=A+(O^I&(x^O))+N[8]+1163531501&4294967295,A=x+(R<<20&4294967295|R>>>12),R=I+(x^O&(A^x))+N[13]+2850285829&4294967295,I=A+(R<<5&4294967295|R>>>27),R=O+(A^x&(I^A))+N[2]+4243563512&4294967295,O=I+(R<<9&4294967295|R>>>23),R=x+(I^A&(O^I))+N[7]+1735328473&4294967295,x=O+(R<<14&4294967295|R>>>18),R=A+(O^I&(x^O))+N[12]+2368359562&4294967295,A=x+(R<<20&4294967295|R>>>12),R=I+(A^x^O)+N[5]+4294588738&4294967295,I=A+(R<<4&4294967295|R>>>28),R=O+(I^A^x)+N[8]+2272392833&4294967295,O=I+(R<<11&4294967295|R>>>21),R=x+(O^I^A)+N[11]+1839030562&4294967295,x=O+(R<<16&4294967295|R>>>16),R=A+(x^O^I)+N[14]+4259657740&4294967295,A=x+(R<<23&4294967295|R>>>9),R=I+(A^x^O)+N[1]+2763975236&4294967295,I=A+(R<<4&4294967295|R>>>28),R=O+(I^A^x)+N[4]+1272893353&4294967295,O=I+(R<<11&4294967295|R>>>21),R=x+(O^I^A)+N[7]+4139469664&4294967295,x=O+(R<<16&4294967295|R>>>16),R=A+(x^O^I)+N[10]+3200236656&4294967295,A=x+(R<<23&4294967295|R>>>9),R=I+(A^x^O)+N[13]+681279174&4294967295,I=A+(R<<4&4294967295|R>>>28),R=O+(I^A^x)+N[0]+3936430074&4294967295,O=I+(R<<11&4294967295|R>>>21),R=x+(O^I^A)+N[3]+3572445317&4294967295,x=O+(R<<16&4294967295|R>>>16),R=A+(x^O^I)+N[6]+76029189&4294967295,A=x+(R<<23&4294967295|R>>>9),R=I+(A^x^O)+N[9]+3654602809&4294967295,I=A+(R<<4&4294967295|R>>>28),R=O+(I^A^x)+N[12]+3873151461&4294967295,O=I+(R<<11&4294967295|R>>>21),R=x+(O^I^A)+N[15]+530742520&4294967295,x=O+(R<<16&4294967295|R>>>16),R=A+(x^O^I)+N[2]+3299628645&4294967295,A=x+(R<<23&4294967295|R>>>9),R=I+(x^(A|~O))+N[0]+4096336452&4294967295,I=A+(R<<6&4294967295|R>>>26),R=O+(A^(I|~x))+N[7]+1126891415&4294967295,O=I+(R<<10&4294967295|R>>>22),R=x+(I^(O|~A))+N[14]+2878612391&4294967295,x=O+(R<<15&4294967295|R>>>17),R=A+(O^(x|~I))+N[5]+4237533241&4294967295,A=x+(R<<21&4294967295|R>>>11),R=I+(x^(A|~O))+N[12]+1700485571&4294967295,I=A+(R<<6&4294967295|R>>>26),R=O+(A^(I|~x))+N[3]+2399980690&4294967295,O=I+(R<<10&4294967295|R>>>22),R=x+(I^(O|~A))+N[10]+4293915773&4294967295,x=O+(R<<15&4294967295|R>>>17),R=A+(O^(x|~I))+N[1]+2240044497&4294967295,A=x+(R<<21&4294967295|R>>>11),R=I+(x^(A|~O))+N[8]+1873313359&4294967295,I=A+(R<<6&4294967295|R>>>26),R=O+(A^(I|~x))+N[15]+4264355552&4294967295,O=I+(R<<10&4294967295|R>>>22),R=x+(I^(O|~A))+N[6]+2734768916&4294967295,x=O+(R<<15&4294967295|R>>>17),R=A+(O^(x|~I))+N[13]+1309151649&4294967295,A=x+(R<<21&4294967295|R>>>11),R=I+(x^(A|~O))+N[4]+4149444226&4294967295,I=A+(R<<6&4294967295|R>>>26),R=O+(A^(I|~x))+N[11]+3174756917&4294967295,O=I+(R<<10&4294967295|R>>>22),R=x+(I^(O|~A))+N[2]+718787259&4294967295,x=O+(R<<15&4294967295|R>>>17),R=A+(O^(x|~I))+N[9]+3951481745&4294967295,k.g[0]=k.g[0]+I&4294967295,k.g[1]=k.g[1]+(x+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+x&4294967295,k.g[3]=k.g[3]+O&4294967295}s.prototype.u=function(k,I){I===void 0&&(I=k.length);for(var A=I-this.blockSize,N=this.B,x=this.h,O=0;O<I;){if(x==0)for(;O<=A;)o(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<I;)if(N[x++]=k.charCodeAt(O++),x==this.blockSize){o(this,N),x=0;break}}else for(;O<I;)if(N[x++]=k[O++],x==this.blockSize){o(this,N),x=0;break}}this.h=x,this.o+=I},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var I=1;I<k.length-8;++I)k[I]=0;var A=8*this.o;for(I=k.length-8;I<k.length;++I)k[I]=A&255,A/=256;for(this.u(k),k=Array(16),I=A=0;4>I;++I)for(var N=0;32>N;N+=8)k[A++]=this.g[I]>>>N&255;return k};function l(k,I){var A=m;return Object.prototype.hasOwnProperty.call(A,k)?A[k]:A[k]=I(k)}function h(k,I){this.h=I;for(var A=[],N=!0,x=k.length-1;0<=x;x--){var O=k[x]|0;N&&O==I||(A[x]=O,N=!1)}this.g=A}var m={};function g(k){return-128<=k&&128>k?l(k,function(I){return new h([I|0],0>I?-1:0)}):new h([k|0],0>k?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return B(_(-k));for(var I=[],A=1,N=0;k>=A;N++)I[N]=k/A|0,A*=4294967296;return new h(I,0)}function w(k,I){if(k.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k.charAt(0)=="-")return B(w(k.substring(1),I));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(I,8)),N=T,x=0;x<k.length;x+=8){var O=Math.min(8,k.length-x),R=parseInt(k.substring(x,x+O),I);8>O?(O=_(Math.pow(I,O)),N=N.j(O).add(_(R))):(N=N.j(A),N=N.add(_(R)))}return N}var T=g(0),C=g(1),U=g(16777216);r=h.prototype,r.m=function(){if(K(this))return-B(this).m();for(var k=0,I=1,A=0;A<this.g.length;A++){var N=this.i(A);k+=(0<=N?N:4294967296+N)*I,I*=4294967296}return k},r.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(q(this))return"0";if(K(this))return"-"+B(this).toString(k);for(var I=_(Math.pow(k,6)),A=this,N="";;){var x=ge(A,I).g;A=Z(A,x.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(k);if(A=x,q(A))return O+N;for(;6>O.length;)O="0"+O;N=O+N}},r.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function q(k){if(k.h!=0)return!1;for(var I=0;I<k.g.length;I++)if(k.g[I]!=0)return!1;return!0}function K(k){return k.h==-1}r.l=function(k){return k=Z(this,k),K(k)?-1:q(k)?0:1};function B(k){for(var I=k.g.length,A=[],N=0;N<I;N++)A[N]=~k.g[N];return new h(A,~k.h).add(C)}r.abs=function(){return K(this)?B(this):this},r.add=function(k){for(var I=Math.max(this.g.length,k.g.length),A=[],N=0,x=0;x<=I;x++){var O=N+(this.i(x)&65535)+(k.i(x)&65535),R=(O>>>16)+(this.i(x)>>>16)+(k.i(x)>>>16);N=R>>>16,O&=65535,R&=65535,A[x]=R<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function Z(k,I){return k.add(B(I))}r.j=function(k){if(q(this)||q(k))return T;if(K(this))return K(k)?B(this).j(B(k)):B(B(this).j(k));if(K(k))return B(this.j(B(k)));if(0>this.l(U)&&0>k.l(U))return _(this.m()*k.m());for(var I=this.g.length+k.g.length,A=[],N=0;N<2*I;N++)A[N]=0;for(N=0;N<this.g.length;N++)for(var x=0;x<k.g.length;x++){var O=this.i(N)>>>16,R=this.i(N)&65535,nt=k.i(x)>>>16,Dt=k.i(x)&65535;A[2*N+2*x]+=R*Dt,oe(A,2*N+2*x),A[2*N+2*x+1]+=O*Dt,oe(A,2*N+2*x+1),A[2*N+2*x+1]+=R*nt,oe(A,2*N+2*x+1),A[2*N+2*x+2]+=O*nt,oe(A,2*N+2*x+2)}for(N=0;N<I;N++)A[N]=A[2*N+1]<<16|A[2*N];for(N=I;N<2*I;N++)A[N]=0;return new h(A,0)};function oe(k,I){for(;(k[I]&65535)!=k[I];)k[I+1]+=k[I]>>>16,k[I]&=65535,I++}function ue(k,I){this.g=k,this.h=I}function ge(k,I){if(q(I))throw Error("division by zero");if(q(k))return new ue(T,T);if(K(k))return I=ge(B(k),I),new ue(B(I.g),B(I.h));if(K(I))return I=ge(k,B(I)),new ue(B(I.g),I.h);if(30<k.g.length){if(K(k)||K(I))throw Error("slowDivide_ only works with positive integers.");for(var A=C,N=I;0>=N.l(k);)A=Oe(A),N=Oe(N);var x=Te(A,1),O=Te(N,1);for(N=Te(N,2),A=Te(A,2);!q(N);){var R=O.add(N);0>=R.l(k)&&(x=x.add(A),O=R),N=Te(N,1),A=Te(A,1)}return I=Z(k,x.j(I)),new ue(x,I)}for(x=T;0<=k.l(I);){for(A=Math.max(1,Math.floor(k.m()/I.m())),N=Math.ceil(Math.log(A)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),O=_(A),R=O.j(I);K(R)||0<R.l(k);)A-=N,O=_(A),R=O.j(I);q(O)&&(O=C),x=x.add(O),k=Z(k,R)}return new ue(x,k)}r.A=function(k){return ge(this,k).h},r.and=function(k){for(var I=Math.max(this.g.length,k.g.length),A=[],N=0;N<I;N++)A[N]=this.i(N)&k.i(N);return new h(A,this.h&k.h)},r.or=function(k){for(var I=Math.max(this.g.length,k.g.length),A=[],N=0;N<I;N++)A[N]=this.i(N)|k.i(N);return new h(A,this.h|k.h)},r.xor=function(k){for(var I=Math.max(this.g.length,k.g.length),A=[],N=0;N<I;N++)A[N]=this.i(N)^k.i(N);return new h(A,this.h^k.h)};function Oe(k){for(var I=k.g.length+1,A=[],N=0;N<I;N++)A[N]=k.i(N)<<1|k.i(N-1)>>>31;return new h(A,k.h)}function Te(k,I){var A=I>>5;I%=32;for(var N=k.g.length-A,x=[],O=0;O<N;O++)x[O]=0<I?k.i(O+A)>>>I|k.i(O+A+1)<<32-I:k.i(O+A);return new h(x,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,x_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,_i=h}).apply(typeof Dg<"u"?Dg:typeof self<"u"?self:typeof window<"u"?window:{});var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var V_,Va,O_,Uu,Pd,L_,M_,b_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,y){return u==Array.prototype||u==Object.prototype||(u[f]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ku=="object"&&ku];for(var f=0;f<u.length;++f){var y=u[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,f){if(f)e:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var L=u[E];if(!(L in y))break e;y=y[L]}u=u[u.length-1],E=y[u],f=f(E),f!=E&&f!=null&&e(y,u,{configurable:!0,writable:!0,value:f})}}function l(u,f){u instanceof String&&(u+="");var y=0,E=!1,L={next:function(){if(!E&&y<u.length){var j=y++;return{value:f(j,u[j]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function _(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function w(u,f,y){return u.call.apply(u.bind,arguments)}function T(u,f,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),u.apply(f,L)}}return function(){return u.apply(f,arguments)}}function C(u,f,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,C.apply(null,arguments)}function U(u,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function q(u,f){function y(){}y.prototype=f.prototype,u.aa=f.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,L,j){for(var J=Array(arguments.length-2),je=2;je<arguments.length;je++)J[je-2]=arguments[je];return f.prototype[L].apply(E,J)}}function K(u){const f=u.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=u[E];return y}return[]}function B(u,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=u.length||0,j=E.length||0;u.length=L+j;for(let J=0;J<j;J++)u[L+J]=E[J]}else u.push(E)}}class Z{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function oe(u){return/^[\s\xa0]*$/.test(u)}function ue(){var u=m.navigator;return u&&(u=u.userAgent)?u:""}function ge(u){return ge[" "](u),u}ge[" "]=function(){};var Oe=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function Te(u,f,y){for(const E in u)f.call(y,u[E],E,u)}function k(u,f){for(const y in u)f.call(void 0,u[y],y,u)}function I(u){const f={};for(const y in u)f[y]=u[y];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)u[y]=E[y];for(let j=0;j<A.length;j++)y=A[j],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function x(u){var f=1;u=u.split(":");const y=[];for(;0<f&&u.length;)y.push(u.shift()),f--;return u.length&&y.push(u.join(":")),y}function O(u){m.setTimeout(()=>{throw u},0)}function R(){var u=fe;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class nt{constructor(){this.h=this.g=null}add(f,y){const E=Dt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Dt=new Z(()=>new xt,u=>u.reset());class xt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,ee=!1,fe=new nt,ie=()=>{const u=m.Promise.resolve(void 0);ze=()=>{u.then(V)}};var V=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(y){O(y)}var f=Dt;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}ee=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ie=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return u})();function Ae(u,f){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(Oe){e:{try{ge(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=u.fromElement:y=="mouseout"&&(f=u.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}q(Ae,he);var Ne={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),be=0;function $e(u,f,y,E,L){this.listener=u,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++be,this.da=this.fa=!1}function _t(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function hr(u){this.src=u,this.g={},this.h=0}hr.prototype.add=function(u,f,y,E,L){var j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);var J=Fr(u,f,E,L);return-1<J?(f=u[J],y||(f.fa=!1)):(f=new $e(f,this.src,j,!!E,L),f.fa=y,u.push(f)),f};function Es(u,f){var y=f.type;if(y in u.g){var E=u.g[y],L=Array.prototype.indexOf.call(E,f,void 0),j;(j=0<=L)&&Array.prototype.splice.call(E,L,1),j&&(_t(f),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Fr(u,f,y,E){for(var L=0;L<u.length;++L){var j=u[L];if(!j.da&&j.listener==f&&j.capture==!!y&&j.ha==E)return L}return-1}var Ni="closure_lm_"+(1e6*Math.random()|0),ws={};function Mo(u,f,y,E,L){if(Array.isArray(f)){for(var j=0;j<f.length;j++)Mo(u,f[j],y,E,L);return null}return y=Uo(y),u&&u[Me]?u.K(f,y,_(E)?!!E.capture:!1,L):bo(u,f,y,!1,E,L)}function bo(u,f,y,E,L,j){if(!f)throw Error("Invalid event type");var J=_(L)?!!L.capture:!!L,je=Is(u);if(je||(u[Ni]=je=new hr(u)),y=je.add(f,y,E,J,j),y.proxy)return y;if(E=fl(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Ie||(L=J),L===void 0&&(L=!1),u.addEventListener(f.toString(),E,L);else if(u.attachEvent)u.attachEvent(fr(f.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function fl(){function u(y){return f.call(u.src,u.listener,y)}const f=Fo;return u}function Ts(u,f,y,E,L){if(Array.isArray(f))for(var j=0;j<f.length;j++)Ts(u,f[j],y,E,L);else E=_(E)?!!E.capture:!!E,y=Uo(y),u&&u[Me]?(u=u.i,f=String(f).toString(),f in u.g&&(j=u.g[f],y=Fr(j,y,E,L),-1<y&&(_t(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete u.g[f],u.h--)))):u&&(u=Is(u))&&(f=u.g[f.toString()],u=-1,f&&(u=Fr(f,y,E,L)),(y=-1<u?f[u]:null)&&dr(y))}function dr(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[Me])Es(f.i,u);else{var y=u.type,E=u.proxy;f.removeEventListener?f.removeEventListener(y,E,u.capture):f.detachEvent?f.detachEvent(fr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=Is(f))?(Es(y,u),y.h==0&&(y.src=null,f[Ni]=null)):_t(u)}}}function fr(u){return u in ws?ws[u]:ws[u]="on"+u}function Fo(u,f){if(u.da)u=!0;else{f=new Ae(f,this);var y=u.listener,E=u.ha||u.src;u.fa&&dr(u),u=y.call(E,f)}return u}function Is(u){return u=u[Ni],u instanceof hr?u:null}var Ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uo(u){return typeof u=="function"?u:(u[Ss]||(u[Ss]=function(f){return u.handleEvent(f)}),u[Ss])}function dt(){H.call(this),this.i=new hr(this),this.M=this,this.F=null}q(dt,H),dt.prototype[Me]=!0,dt.prototype.removeEventListener=function(u,f,y,E){Ts(this,u,f,y,E)};function ft(u,f){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=f.type||f,typeof f=="string")f=new he(f,u);else if(f instanceof he)f.target=f.target||u;else{var L=f;f=new he(E,u),N(f,L)}if(L=!0,y)for(var j=y.length-1;0<=j;j--){var J=f.g=y[j];L=pr(J,E,!0,f)&&L}if(J=f.g=u,L=pr(J,E,!0,f)&&L,L=pr(J,E,!1,f)&&L,y)for(j=0;j<y.length;j++)J=f.g=y[j],L=pr(J,E,!1,f)&&L}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var y=u.g[f],E=0;E<y.length;E++)_t(y[E]);delete u.g[f],u.h--}}this.F=null},dt.prototype.K=function(u,f,y,E){return this.i.add(String(u),f,!1,y,E)},dt.prototype.L=function(u,f,y,E){return this.i.add(String(u),f,!0,y,E)};function pr(u,f,y,E){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,j=0;j<f.length;++j){var J=f[j];if(J&&!J.da&&J.capture==y){var je=J.listener,pt=J.ha||J.src;J.fa&&Es(u.i,J),L=je.call(pt,E)!==!1&&L}}return L&&!E.defaultPrevented}function jo(u,f,y){if(typeof u=="function")y&&(u=C(u,y));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(u,f||0)}function Ur(u){u.g=jo(()=>{u.g=null,u.i&&(u.i=!1,Ur(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class Di extends H{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ur(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(u){H.call(this),this.h=u,this.g={}}q(xi,H);var zo=[];function Bo(u){Te(u.g,function(f,y){this.g.hasOwnProperty(y)&&dr(f)},u),u.g={}}xi.prototype.N=function(){xi.aa.N.call(this),Bo(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $o=m.JSON.stringify,Wo=m.JSON.parse,Ho=class{stringify(u){return m.JSON.stringify(u,void 0)}parse(u){return m.JSON.parse(u,void 0)}};function Vi(){}Vi.prototype.h=null;function As(u){return u.h||(u.h=u.i())}function Rs(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wn(){he.call(this,"d")}q(Wn,he);function Cs(){he.call(this,"c")}q(Cs,he);var Hn={},qo=null;function Oi(){return qo=qo||new dt}Hn.La="serverreachability";function Go(u){he.call(this,Hn.La,u)}q(Go,he);function mr(u){const f=Oi();ft(f,new Go(f))}Hn.STAT_EVENT="statevent";function Ko(u,f){he.call(this,Hn.STAT_EVENT,u),this.stat=f}q(Ko,he);function rt(u){const f=Oi();ft(f,new Ko(f,u))}Hn.Ma="timingevent";function Ps(u,f){he.call(this,Hn.Ma,u),this.size=f}q(Ps,he);function Sn(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){u()},f)}function Li(){this.g=!0}Li.prototype.xa=function(){this.g=!1};function Mi(u,f,y,E,L,j){u.info(function(){if(u.g)if(j)for(var J="",je=j.split("&"),pt=0;pt<je.length;pt++){var De=je[pt].split("=");if(1<De.length){var vt=De[0];De=De[1];var at=vt.split("_");J=2<=at.length&&at[1]=="type"?J+(vt+"="+De+"&"):J+(vt+"=redacted&")}}else J=null;else J=j;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+J})}function ks(u,f,y,E,L,j,J){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+j+" "+J})}function An(u,f,y,E){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+Dc(u,y)+(E?" "+E:"")})}function Qo(u,f){u.info(function(){return"TIMEOUT: "+f})}Li.prototype.info=function(){};function Dc(u,f){if(!u.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return $o(y)}catch{return f}}var Ns={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rn;function bi(){}q(bi,Vi),bi.prototype.g=function(){return new XMLHttpRequest},bi.prototype.i=function(){return{}},Rn=new bi;function Cn(u,f,y,E){this.j=u,this.i=f,this.l=y,this.R=E||1,this.U=new xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ml}function ml(){this.i=null,this.g="",this.h=!1}var Yo={},Ds={};function xs(u,f,y){u.L=1,u.v=Wr(nn(f)),u.m=y,u.P=!0,Xo(u,null)}function Xo(u,f){u.F=Date.now(),We(u),u.A=nn(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),qr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new ml,u.g=Vl(u.j,y?f:null,!u.m),0<u.O&&(u.M=new Di(C(u.Y,u,u.g),u.O)),f=u.U,y=u.g,E=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(zo[0]=L.toString()),L=zo);for(var j=0;j<L.length;j++){var J=Mo(y,L[j],E||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),mr(),Mi(u.i,u.u,u.A,u.l,u.R,u.m)}Cn.prototype.ca=function(u){u=u.target;const f=this.M;f&&Gt(u)==3?f.j():this.Y(u)},Cn.prototype.Y=function(u){try{if(u==this.g)e:{const at=Gt(this.g);var f=this.g.Ba();const pn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||ra(this.g)))){this.J||at!=4||f==7||(f==8||0>=pn?mr(3):mr(2)),Fi(this);var y=this.g.Z();this.X=y;t:if(gl(this)){var E=ra(this.g);u="";var L=E.length,j=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dn(this),jr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,u+=this.h.i.decode(E[f],{stream:!(j&&f==L-1)});E.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,ks(this.i,this.u,this.A,this.l,this.R,at,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,pt=this.g;if((je=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oe(je)){var De=je;break t}}De=null}if(y=De)An(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jo(this,y);else{this.o=!1,this.s=3,rt(12),dn(this),jr(this);break e}}if(this.P){y=!0;let sn;for(;!this.J&&this.C<J.length;)if(sn=xc(this,J),sn==Ds){at==4&&(this.s=4,rt(14),y=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Yo){this.s=4,rt(15),An(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else An(this.i,this.l,sn,null),Jo(this,sn);if(gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||J.length!=0||this.h.h||(this.s=1,rt(16),y=!1),this.o=this.o&&y,!y)An(this.i,this.l,J,"[Invalid Chunked Response]"),dn(this),jr(this);else if(0<J.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),sa(vt),vt.M=!0,rt(11))}}else An(this.i,this.l,J,null),Jo(this,J);at==4&&dn(this),this.o&&!this.J&&(at==4?$s(this.j,this):(this.o=!1,We(this)))}else Fs(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),dn(this),jr(this)}}}catch{}finally{}};function gl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function xc(u,f){var y=u.C,E=f.indexOf(`
`,y);return E==-1?Ds:(y=Number(f.substring(y,E)),isNaN(y)?Yo:(E+=1,E+y>f.length?Ds:(f=f.slice(E,E+y),u.C=E+y,f)))}Cn.prototype.cancel=function(){this.J=!0,dn(this)};function We(u){u.S=Date.now()+u.I,yl(u,u.I)}function yl(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Sn(C(u.ba,u),f)}function Fi(u){u.B&&(m.clearTimeout(u.B),u.B=null)}Cn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Qo(this.i,this.A),this.L!=2&&(mr(),rt(17)),dn(this),this.s=2,jr(this)):yl(this,this.S-u)};function jr(u){u.j.G==0||u.J||$s(u.j,u)}function dn(u){Fi(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,Bo(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function Jo(u,f){try{var y=u.j;if(y.G!=0&&(y.g==u||Bt(y.h,u))){if(!u.K&&Bt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Bs(y),xn(y);else break e;zs(y),rt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Sn(C(y.Za,y),6e3));if(1>=vl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Er(y,11)}else if((u.K||y.g==u)&&Bs(y),!oe(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let De=L[f];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const vt=De[3];vt!=null&&(y.la=vt,y.j.info("VER="+y.la));const at=De[4];at!=null&&(y.Aa=at,y.j.info("SVER="+y.Aa));const pn=De[5];pn!=null&&typeof pn=="number"&&0<pn&&(E=1.5*pn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const sn=u.g;if(sn){const Hi=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var j=E.h;j.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Zo(j,j.h),j.h=null))}if(E.D){const Hs=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Hs&&(E.ya=Hs,Be(E.I,E.D,Hs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=u;if(E.qa=xl(E,E.J?E.ia:null,E.W),J.K){El(E.h,J);var je=J,pt=E.L;pt&&(je.I=pt),je.B&&(Fi(je),We(je)),E.g=J}else Wi(E);0<y.i.length&&Qn(y)}else De[0]!="stop"&&De[0]!="close"||Er(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Er(y,7):At(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}mr(4)}catch{}}var _l=class{constructor(u,f){this.g=u,this.map=f}};function Ui(u){this.l=u||10,m.PerformanceNavigationTiming?(u=m.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function vl(u){return u.h?1:u.g?u.g.size:0}function Bt(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function Zo(u,f){u.g?u.g.add(f):u.h=f}function El(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}Ui.prototype.cancel=function(){if(this.i=wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function wl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const y of u.g.values())f=f.concat(y.D);return f}return K(u.i)}function Vs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var f=[],y=u.length,E=0;E<y;E++)f.push(u[E]);return f}f=[],y=0;for(E in u)f[y++]=u[E];return f}function Os(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var f=[];u=u.length;for(var y=0;y<u;y++)f.push(y);return f}f=[],y=0;for(const E in u)f[y++]=E;return f}}}function zr(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var y=Os(u),E=Vs(u),L=E.length,j=0;j<L;j++)f.call(void 0,E[j],y&&y[j],u)}var ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vc(u,f){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),L=null;if(0<=E){var j=u[y].substring(0,E);L=u[y].substring(E+1)}else j=u[y];f(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function gr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof gr){this.h=u.h,zi(this,u.j),this.o=u.o,this.g=u.g,Br(this,u.s),this.l=u.l;var f=u.i,y=new qn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),$r(this,y),this.m=u.m}else u&&(f=String(u).match(ji))?(this.h=!1,zi(this,f[1]||"",!0),this.o=ke(f[2]||""),this.g=ke(f[3]||"",!0),Br(this,f[4]),this.l=ke(f[5]||"",!0),$r(this,f[6]||"",!0),this.m=ke(f[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}gr.prototype.toString=function(){var u=[],f=this.j;f&&u.push(Hr(f,Ls,!0),":");var y=this.g;return(y||f=="file")&&(u.push("//"),(f=this.o)&&u.push(Hr(f,Ls,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Hr(y,y.charAt(0)=="/"?Sl:Il,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Hr(y,ea)),u.join("")};function nn(u){return new gr(u)}function zi(u,f,y){u.j=y?ke(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function Br(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function $r(u,f,y){f instanceof qn?(u.i=f,Gn(u.i,u.h)):(y||(f=Hr(f,Al)),u.i=new qn(f,u.h))}function Be(u,f,y){u.i.set(f,y)}function Wr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ke(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Hr(u,f,y){return typeof u=="string"?(u=encodeURI(u).replace(f,Tl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Tl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ls=/[#\/\?@]/g,Il=/[#\?:]/g,Sl=/[#\?]/g,Al=/[#\?@]/g,ea=/#/g;function qn(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function St(u){u.g||(u.g=new Map,u.h=0,u.i&&Vc(u.i,function(f,y){u.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=qn.prototype,r.add=function(u,f){St(this),this.i=null,u=fn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(f),this.h+=1,this};function Pn(u,f){St(u),f=fn(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function kn(u,f){return St(u),f=fn(u,f),u.g.has(f)}r.forEach=function(u,f){St(this),this.g.forEach(function(y,E){y.forEach(function(L){u.call(f,L,E,this)},this)},this)},r.na=function(){St(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=u[E];for(let j=0;j<L.length;j++)y.push(f[E])}return y},r.V=function(u){St(this);let f=[];if(typeof u=="string")kn(this,u)&&(f=f.concat(this.g.get(fn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)f=f.concat(u[y])}return f},r.set=function(u,f){return St(this),this.i=null,u=fn(this,u),kn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},r.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function qr(u,f,y){Pn(u,f),0<y.length&&(u.i=null,u.g.set(fn(u,f),K(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const j=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var L=j;J[E]!==""&&(L+="="+encodeURIComponent(String(J[E]))),u.push(L)}}return this.i=u.join("&")};function fn(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function Gn(u,f){f&&!u.j&&(St(u),u.i=null,u.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Pn(this,E),qr(this,L,y))},u)),u.j=f}function Oc(u,f){const y=new Li;if(m.Image){const E=new Image;E.onload=U(qt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=U(qt,y,"TestLoadImage: error",!1,f,E),E.onabort=U(qt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=U(qt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else f(!1)}function Rl(u,f){const y=new Li,E=new AbortController,L=setTimeout(()=>{E.abort(),qt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:E.signal}).then(j=>{clearTimeout(L),j.ok?qt(y,"TestPingServer: ok",!0,f):qt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),qt(y,"TestPingServer: error",!1,f)})}function qt(u,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Lc(){this.g=new Ho}function Cl(u,f,y){const E=y||"";try{zr(u,function(L,j){let J=L;_(L)&&(J=$o(L)),f.push(E+j+"="+encodeURIComponent(J))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function yr(u){this.l=u.Ub||null,this.j=u.eb||!1}q(yr,Vi),yr.prototype.g=function(){return new Bi(this.l,this.j)},yr.prototype.i=(function(u){return function(){return u}})({});function Bi(u,f){dt.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(Bi,dt),r=Bi.prototype,r.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,Dn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?Nn(this):Dn(this),this.readyState==3&&Pl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Nn(this))},r.Qa=function(u){this.g&&(this.response=u,Nn(this))},r.ga=function(){this.g&&Nn(this)};function Nn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}r.setRequestHeader=function(u,f){this.u.append(u,f)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=f.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function _r(u){let f="";return Te(u,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Gr(u,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=_r(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Be(u,f,y))}function Ye(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(Ye,dt);var Mc=/^https?$/i,ta=["POST","PUT"];r=Ye.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rn.g(),this.v=this.o?As(this.o):As(Rn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(j){$i(this,j);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())y.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),L=m.FormData&&u instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ta,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,J]of y)this.g.setRequestHeader(j,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bs(this),this.u=!0,this.g.send(u),this.u=!1}catch(j){$i(this,j)}};function $i(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,Ms(u),rn(u)}function Ms(u){u.A||(u.A=!0,ft(u,"complete"),ft(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ft(this,"complete"),ft(this,"abort"),rn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rn(this,!0)),Ye.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?na(this):this.bb())},r.bb=function(){na(this)};function na(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)jo(u.Ea,0,u);else if(ft(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=J===0){var L=String(u.D).match(ji)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Mc.test(L?L.toLowerCase():"")}y=E}if(y)ft(u,"complete"),ft(u,"success");else{u.m=6;try{var j=2<Gt(u)?u.g.statusText:""}catch{j=""}u.l=j+" ["+u.Z()+"]",Ms(u)}}finally{rn(u)}}}}function rn(u,f){if(u.g){bs(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||ft(u,"ready");try{y.onreadystatechange=E}catch{}}}function bs(u){u.I&&(m.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),Wo(f)}};function ra(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Fs(u){const f={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(oe(u[E]))continue;var y=x(u[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=f[L]||[];f[L]=j,j.push(y)}k(f,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kn(u,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||f}function ia(u){this.Aa=0,this.i=[],this.j=new Li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kn("baseRetryDelayMs",5e3,u),this.cb=Kn("retryDelaySeedMs",1e4,u),this.Wa=Kn("forwardChannelMaxRetries",2,u),this.wa=Kn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ui(u&&u.concurrentRequestLimit),this.Da=new Lc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ia.prototype,r.la=8,r.G=1,r.connect=function(u,f,y,E){rt(0),this.W=u,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=xl(this,null,this.W),Qn(this)};function At(u){if(Us(u),u.G==3){var f=u.U++,y=nn(u.I);if(Be(y,"SID",u.K),Be(y,"RID",f),Be(y,"TYPE","terminate"),vr(u,y),f=new Cn(u,u.j,f),f.L=2,f.v=Wr(nn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=Vl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),We(f)}Dl(u)}function xn(u){u.g&&(sa(u),u.g.cancel(),u.g=null)}function Us(u){xn(u),u.u&&(m.clearTimeout(u.u),u.u=null),Bs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&m.clearTimeout(u.s),u.s=null)}function Qn(u){if(!tn(u.h)&&!u.s){u.s=!0;var f=u.Ga;ze||ie(),ee||(ze(),ee=!0),fe.add(f,u),u.B=0}}function bc(u,f){return vl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Sn(C(u.Ga,u,f),Nl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Cn(this,this.j,u);let j=this.o;if(this.S&&(j?(j=I(j),N(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Kr(this,L,f),y=nn(this.I),Be(y,"RID",u),Be(y,"CVER",22),this.D&&Be(y,"X-HTTP-Session-Id",this.D),vr(this,y),j&&(this.O?f="headers="+encodeURIComponent(String(_r(j)))+"&"+f:this.m&&Gr(y,this.m,j)),Zo(this.h,L),this.Ua&&Be(y,"TYPE","init"),this.P?(Be(y,"$req",f),Be(y,"SID","null"),L.T=!0,xs(L,y,null)):xs(L,y,f),this.G=2}}else this.G==3&&(u?js(this,u):this.i.length==0||tn(this.h)||js(this))};function js(u,f){var y;f?y=f.l:y=u.U++;const E=nn(u.I);Be(E,"SID",u.K),Be(E,"RID",y),Be(E,"AID",u.T),vr(u,E),u.m&&u.o&&Gr(E,u.m,u.o),y=new Cn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),f&&(u.i=f.D.concat(u.i)),f=Kr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Zo(u.h,y),xs(y,E,f)}function vr(u,f){u.H&&Te(u.H,function(y,E){Be(f,E,y)}),u.l&&zr({},function(y,E){Be(f,E,y)})}function Kr(u,f,y){y=Math.min(u.i.length,y);var E=u.l?C(u.l.Na,u.l,u):null;e:{var L=u.i;let j=-1;for(;;){const J=["count="+y];j==-1?0<y?(j=L[0].g,J.push("ofs="+j)):j=0:J.push("ofs="+j);let je=!0;for(let pt=0;pt<y;pt++){let De=L[pt].g;const vt=L[pt].map;if(De-=j,0>De)j=Math.max(0,L[pt].g-100),je=!1;else try{Cl(vt,J,"req"+De+"_")}catch{E&&E(vt)}}if(je){E=J.join("&");break e}}}return u=u.i.splice(0,y),f.D=u,E}function Wi(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;ze||ie(),ee||(ze(),ee=!0),fe.add(f,u),u.v=0}}function zs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Sn(C(u.Fa,u),Nl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,kl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Sn(C(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),xn(this),kl(this))};function sa(u){u.A!=null&&(m.clearTimeout(u.A),u.A=null)}function kl(u){u.g=new Cn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=nn(u.qa);Be(f,"RID","rpc"),Be(f,"SID",u.K),Be(f,"AID",u.T),Be(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(f,"TO",u.ja),Be(f,"TYPE","xmlhttp"),vr(u,f),u.m&&u.o&&Gr(f,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Wr(nn(f)),y.m=null,y.P=!0,Xo(y,u)}r.Za=function(){this.C!=null&&(this.C=null,xn(this),zs(this),rt(19))};function Bs(u){u.C!=null&&(m.clearTimeout(u.C),u.C=null)}function $s(u,f){var y=null;if(u.g==f){Bs(u),sa(u),u.g=null;var E=2}else if(Bt(u.h,f))y=f.D,El(u.h,f),E=1;else return;if(u.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=u.B;E=Oi(),ft(E,new Ps(E,y)),Qn(u)}else Wi(u);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&bc(u,f)||E==2&&zs(u)))switch(y&&0<y.length&&(f=u.h,f.i=f.i.concat(y)),L){case 1:Er(u,5);break;case 4:Er(u,10);break;case 3:Er(u,6);break;default:Er(u,2)}}}function Nl(u,f){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*f}function Er(u,f){if(u.j.info("Error code "+f),f==2){var y=C(u.fb,u),E=u.Xa;const L=!E;E=new gr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||zi(E,"https"),Wr(E),L?Oc(E.toString(),y):Rl(E.toString(),y)}else rt(2);u.G=0,u.l&&u.l.sa(f),Dl(u),Us(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Dl(u){if(u.G=0,u.ka=[],u.l){const f=wl(u.h);(f.length!=0||u.i.length!=0)&&(B(u.ka,f),B(u.ka,u.i),u.h.i.length=0,K(u.i),u.i.length=0),u.l.ra()}}function xl(u,f,y){var E=y instanceof gr?nn(y):new gr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Br(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var j=new gr(null);E&&zi(j,E),f&&(j.g=f),L&&Br(j,L),y&&(j.l=y),E=j}return y=u.D,f=u.ya,y&&f&&Be(E,y,f),Be(E,"VER",u.la),vr(u,E),E}function Vl(u,f,y){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new Ye(new yr({eb:y})):new Ye(u.pa),f.Ha(u.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function oa(){}r=oa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ws(){}Ws.prototype.g=function(u,f){return new $t(u,f)};function $t(u,f){dt.call(this),this.g=new ia(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!oe(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!oe(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new Yn(this)}q($t,dt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){At(this.g)},$t.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=$o(u),u=y);f.i.push(new _l(f.Ya++,u)),f.G==3&&Qn(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,$t.aa.N.call(this)};function Ol(u){Wn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const y in f){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}q(Ol,Wn);function Ll(){Cs.call(this),this.status=1}q(Ll,Cs);function Yn(u){this.g=u}q(Yn,oa),Yn.prototype.ua=function(){ft(this.g,"a")},Yn.prototype.ta=function(u){ft(this.g,new Ol(u))},Yn.prototype.sa=function(u){ft(this.g,new Ll)},Yn.prototype.ra=function(){ft(this.g,"b")},Ws.prototype.createWebChannel=Ws.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,b_=function(){return new Ws},M_=function(){return Oi()},L_=Hn,Pd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ns.NO_ERROR=0,Ns.TIMEOUT=8,Ns.HTTP_ERROR=6,Uu=Ns,pl.COMPLETE="complete",O_=pl,Rs.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Va=Rs,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,V_=Ye}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});const xg="@firebase/firestore",Vg="4.8.0";/**
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
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let Do="11.10.0";/**
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
 */const ds=new qd("@firebase/firestore");function fo(){return ds.logLevel}function re(r,...e){if(ds.logLevel<=Ce.DEBUG){const t=e.map(sf);ds.debug(`Firestore (${Do}): ${r}`,...t)}}function Lr(r,...e){if(ds.logLevel<=Ce.ERROR){const t=e.map(sf);ds.error(`Firestore (${Do}): ${r}`,...t)}}function Ei(r,...e){if(ds.logLevel<=Ce.WARN){const t=e.map(sf);ds.warn(`Firestore (${Do}): ${r}`,...t)}}function sf(r){if(typeof r=="string")return r;try{/**
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
 */function _e(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,F_(r,s,t)}function F_(r,e,t){let s=`FIRESTORE (${Do}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Lr(s),new Error(s)}function Ue(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||F_(e,o,s)}function we(r,e){return r}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends br{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class U_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class TS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class IS{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new xr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new xr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new xr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string",31837,{l:s}),new U_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class SS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new SS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Og{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const s=l=>{l.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Og(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Og(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function CS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function j_(){return new TextEncoder}/**
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
 */class of{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=CS(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Se(r,e){return r<e?-1:r>e?1:0}function kd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Se(s,o);{const l=j_(),h=PS(l.encode(Lg(r,t)),l.encode(Lg(e,t)));return h!==0?h:Se(s,o)}}t+=s>65535?2:1}return Se(r.length,e.length)}function Lg(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function PS(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Se(r[t],e[t]);return Se(r.length,e.length)}function Io(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const Mg="__name__";class tr{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return tr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=tr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Se(e.length,t.length)}static compareSegments(e,t){const s=tr.isNumericId(e),o=tr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?tr.extractNumericId(e).compare(tr.extractNumericId(t)):kd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _i.fromString(e.substring(4,e.length-2))}}class qe extends tr{construct(e,t,s){return new qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new te($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new qe(t)}static emptyPath(){return new qe([])}}const kS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends tr{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return kS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mg}static keyField(){return new kt([Mg])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new te($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new te($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new te($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(l(),o++)}if(l(),h)throw new te($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(qe.fromString(e))}static fromName(e){return new de(qe.fromString(e).popFirst(5))}static empty(){return new de(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new qe(e.slice()))}}/**
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
 */function z_(r,e,t){if(!t)throw new te($.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function NS(r,e,t,s){if(e===!0&&s===!0)throw new te($.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function bg(r){if(!de.isDocumentKey(r))throw new te($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Fg(r){if(de.isDocumentKey(r))throw new te($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function B_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function gc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function zn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new te($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=gc(r);throw new te($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function ht(r,e){const t={typeString:r};return e&&(t.value=e),t}function ll(r,e){if(!B_(r))throw new te($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new te($.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ug=-62135596800,jg=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*jg);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ug)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jg}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ll(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ug;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:ht("string",Qe._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
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
 */const qa=-1;function DS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new Qe(t+1,0):new Qe(t,s));return new wi(o,de.empty(),e)}function xS(r){return new wi(r.readTime,r.key,qa)}class wi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new wi(Ee.min(),de.empty(),qa)}static max(){return new wi(Ee.max(),de.empty(),qa)}}function VS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(r.documentKey,e.documentKey),t!==0?t:Se(r.largestBatchId,e.largestBatchId))}/**
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
 */const OS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function xo(r){if(r.code!==$.FAILED_PRECONDITION||r.message!==OS)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,s)=>{t(e)}))}static reject(e){return new W(((t,s)=>{s(e)}))}static waitFor(e){return new W(((t,s)=>{let o=0,l=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next((o=>o?W.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new W(((s,o)=>{const l=e.length,h=new Array(l);let m=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++m,m===l&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new W(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function MS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Vo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class yc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}yc.ue=-1;/**
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
 */const af=-1;function _c(r){return r==null}function Zu(r){return r===0&&1/r==-1/0}function bS(r){return typeof r=="number"&&Number.isInteger(r)&&!Zu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const $_="";function FS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=zg(e)),e=US(r.get(t),e);return zg(e)}function US(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case $_:t+="";break;default:t+=l}}return t}function zg(r){return r+$_+""}/**
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
 */function Bg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function gs(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function W_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nu(this.root,e,this.comparator,!0)}}class Nu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $g(this.data.getIterator())}getIteratorFrom(e){return new $g(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class $g{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new jn([])}unionWith(e){let t=new yt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new jn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Io(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class H_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new H_("Invalid base64 string: "+l):l}})(e);return new Nt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const jS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(r){if(Ue(!!r,39018),typeof r=="string"){let e=0;const t=jS.exec(r);if(Ue(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(r.seconds),nanos:st(r.nanos)}}function st(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ii(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
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
 */const q_="server_timestamp",G_="__type__",K_="__previous_value__",Q_="__local_write_time__";function lf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[G_])===null||t===void 0?void 0:t.stringValue)===q_}function vc(r){const e=r.mapValue.fields[K_];return lf(e)?vc(e):e}function Ga(r){const e=Ti(r.mapValue.fields[Q_].timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class zS{constructor(e,t,s,o,l,h,m,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const ec="(default)";class Ka{constructor(e,t){this.projectId=e,this.database=t||ec}static empty(){return new Ka("","")}get isDefaultDatabase(){return this.database===ec}isEqual(e){return e instanceof Ka&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Y_="__type__",BS="__max__",Du={mapValue:{}},X_="__vector__",tc="value";function Si(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?lf(r)?4:WS(r)?9007199254740991:$S(r)?10:11:_e(28295,{value:r})}function cr(r,e){if(r===e)return!0;const t=Si(r);if(t!==Si(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ga(r).isEqual(Ga(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ti(o.timestampValue),m=Ti(l.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Ii(o.bytesValue).isEqual(Ii(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),m=st(l.doubleValue);return h===m?Zu(h)===Zu(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return Io(r.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},m=l.mapValue.fields||{};if(Bg(h)!==Bg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!cr(h[g],m[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function Qa(r,e){return(r.values||[]).find((t=>cr(t,e)))!==void 0}function So(r,e){if(r===e)return 0;const t=Si(r),s=Si(e);if(t!==s)return Se(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const m=st(l.integerValue||l.doubleValue),g=st(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return Wg(r.timestampValue,e.timestampValue);case 4:return Wg(Ga(r),Ga(e));case 5:return kd(r.stringValue,e.stringValue);case 6:return(function(l,h){const m=Ii(l),g=Ii(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const m=l.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=Se(m[_],g[_]);if(w!==0)return w}return Se(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const m=Se(st(l.latitude),st(h.latitude));return m!==0?m:Se(st(l.longitude),st(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Hg(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var m,g,_,w;const T=l.fields||{},C=h.fields||{},U=(m=T[tc])===null||m===void 0?void 0:m.arrayValue,q=(g=C[tc])===null||g===void 0?void 0:g.arrayValue,K=Se(((_=U==null?void 0:U.values)===null||_===void 0?void 0:_.length)||0,((w=q==null?void 0:q.values)===null||w===void 0?void 0:w.length)||0);return K!==0?K:Hg(U,q)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Du.mapValue&&h===Du.mapValue)return 0;if(l===Du.mapValue)return 1;if(h===Du.mapValue)return-1;const m=l.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const C=kd(g[T],w[T]);if(C!==0)return C;const U=So(m[g[T]],_[w[T]]);if(U!==0)return U}return Se(g.length,w.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{le:t})}}function Wg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Se(r,e);const t=Ti(r),s=Ti(e),o=Se(t.seconds,s.seconds);return o!==0?o:Se(t.nanos,s.nanos)}function Hg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=So(t[o],s[o]);if(l)return l}return Se(t.length,s.length)}function Ao(r){return Nd(r)}function Nd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ti(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ii(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return de.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Nd(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Nd(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function ju(r){switch(Si(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vc(r);return e?16+ju(e):16;case 5:return 2*r.stringValue.length;case 6:return Ii(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+ju(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return gs(s.fields,((l,h)=>{o+=l.length+ju(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function qg(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Dd(r){return!!r&&"integerValue"in r}function uf(r){return!!r&&"arrayValue"in r}function Gg(r){return!!r&&"nullValue"in r}function Kg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function zu(r){return!!r&&"mapValue"in r}function $S(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Y_])===null||t===void 0?void 0:t.stringValue)===X_}function Ua(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return gs(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ua(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ua(r.arrayValue.values[t]);return e}return Object.assign({},r)}function WS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===BS}/**
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
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!zu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ua(h):o.push(m.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());zu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];zu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){gs(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new Tn(Ua(this.value))}}function J_(r){const e=[];return gs(r.fields,((t,s)=>{const o=new kt([t]);if(zu(s)){const l=J_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new jn(e)}/**
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
 */class Ut{constructor(e,t,s,o,l,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,Ee.min(),Ee.min(),Ee.min(),Tn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,Ee.min(),Ee.min(),Tn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,Ee.min(),Ee.min(),Tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nc{constructor(e,t){this.position=e,this.inclusive=t}}function Qg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=So(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Yg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!cr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ya{constructor(e,t="asc"){this.field=e,this.dir=t}}function HS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Z_{}class ct extends Z_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new GS(e,t,s):t==="array-contains"?new YS(e,s):t==="in"?new XS(e,s):t==="not-in"?new JS(e,s):t==="array-contains-any"?new ZS(e,s):new ct(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new KS(e,s):new QS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(So(t,this.value)):t!==null&&Si(this.value)===Si(t)&&this.matchesComparison(So(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $n extends Z_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new $n(e,t)}matches(e){return ev(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ev(r){return r.op==="and"}function tv(r){return qS(r)&&ev(r)}function qS(r){for(const e of r.filters)if(e instanceof $n)return!1;return!0}function xd(r){if(r instanceof ct)return r.field.canonicalString()+r.op.toString()+Ao(r.value);if(tv(r))return r.filters.map((e=>xd(e))).join(",");{const e=r.filters.map((t=>xd(t))).join(",");return`${r.op}(${e})`}}function nv(r,e){return r instanceof ct?(function(s,o){return o instanceof ct&&s.op===o.op&&s.field.isEqual(o.field)&&cr(s.value,o.value)})(r,e):r instanceof $n?(function(s,o){return o instanceof $n&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,m)=>l&&nv(h,o.filters[m])),!0):!1})(r,e):void _e(19439)}function rv(r){return r instanceof ct?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ao(t.value)}`})(r):r instanceof $n?(function(t){return t.op.toString()+" {"+t.getFilters().map(rv).join(" ,")+"}"})(r):"Filter"}class GS extends ct{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class KS extends ct{constructor(e,t){super(e,"in",t),this.keys=iv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class QS extends ct{constructor(e,t){super(e,"not-in",t),this.keys=iv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function iv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>de.fromName(s.referenceValue)))}class YS extends ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return uf(t)&&Qa(t.arrayValue,this.value)}}class XS extends ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qa(this.value.arrayValue,t)}}class JS extends ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qa(this.value.arrayValue,t)}}class ZS extends ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!uf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Qa(this.value.arrayValue,s)))}}/**
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
 */class eA{constructor(e,t=null,s=[],o=[],l=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=m,this.Pe=null}}function Xg(r,e=null,t=[],s=[],o=null,l=null,h=null){return new eA(r,e,t,s,o,l,h)}function cf(r){const e=we(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>xd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),_c(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Ao(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Ao(s))).join(",")),e.Pe=t}return e.Pe}function hf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!HS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!nv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Yg(r.startAt,e.startAt)&&Yg(r.endAt,e.endAt)}function Vd(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Oo{constructor(e,t=null,s=[],o=[],l=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function tA(r,e,t,s,o,l,h,m){return new Oo(r,e,t,s,o,l,h,m)}function Ec(r){return new Oo(r)}function Jg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function sv(r){return r.collectionGroup!==null}function ja(r){const e=we(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(kt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Ya(l,s))})),t.has(kt.keyField().canonicalString())||e.Te.push(new Ya(kt.keyField(),s))}return e.Te}function ir(r){const e=we(r);return e.Ie||(e.Ie=nA(e,ja(r))),e.Ie}function nA(r,e){if(r.limitType==="F")return Xg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Ya(o.field,l)}));const t=r.endAt?new nc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new nc(r.startAt.position,r.startAt.inclusive):null;return Xg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Od(r,e){const t=r.filters.concat([e]);return new Oo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Ld(r,e,t){return new Oo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function wc(r,e){return hf(ir(r),ir(e))&&r.limitType===e.limitType}function ov(r){return`${cf(ir(r))}|lt:${r.limitType}`}function po(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>rv(o))).join(", ")}]`),_c(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Ao(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Ao(o))).join(",")),`Target(${s})`})(ir(r))}; limitType=${r.limitType})`}function Tc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):de.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of ja(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=Qg(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,ja(s),o)||s.endAt&&!(function(h,m,g){const _=Qg(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,ja(s),o))})(r,e)}function rA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function av(r){return(e,t)=>{let s=!1;for(const o of ja(r)){const l=iA(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function iA(r,e,t){const s=r.field.isKeyField()?de.comparator(e.key,t.key):(function(l,h,m){const g=h.data.field(l),_=m.data.field(l);return g!==null&&_!==null?So(g,_):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:r.dir})}}/**
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
 */class ys{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return W_(this.inner)}size(){return this.innerSize}}/**
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
 */const sA=new et(de.comparator);function Mr(){return sA}const lv=new et(de.comparator);function Oa(...r){let e=lv;for(const t of r)e=e.insert(t.key,t);return e}function uv(r){let e=lv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ss(){return za()}function cv(){return za()}function za(){return new ys((r=>r.toString()),((r,e)=>r.isEqual(e)))}const oA=new et(de.comparator),aA=new yt(de.comparator);function Pe(...r){let e=aA;for(const t of r)e=e.add(t);return e}const lA=new yt(Se);function uA(){return lA}/**
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
 */function df(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zu(e)?"-0":e}}function hv(r){return{integerValue:""+r}}function cA(r,e){return bS(e)?hv(e):df(r,e)}/**
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
 */class Ic{constructor(){this._=void 0}}function hA(r,e,t){return r instanceof Xa?(function(o,l){const h={fields:{[G_]:{stringValue:q_},[Q_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&lf(l)&&(l=vc(l)),l&&(h.fields[K_]=l),{mapValue:h}})(t,e):r instanceof Ja?fv(r,e):r instanceof Za?pv(r,e):(function(o,l){const h=dv(o,l),m=Zg(h)+Zg(o.Ee);return Dd(h)&&Dd(o.Ee)?hv(m):df(o.serializer,m)})(r,e)}function dA(r,e,t){return r instanceof Ja?fv(r,e):r instanceof Za?pv(r,e):t}function dv(r,e){return r instanceof rc?(function(s){return Dd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Xa extends Ic{}class Ja extends Ic{constructor(e){super(),this.elements=e}}function fv(r,e){const t=mv(e);for(const s of r.elements)t.some((o=>cr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Za extends Ic{constructor(e){super(),this.elements=e}}function pv(r,e){let t=mv(e);for(const s of r.elements)t=t.filter((o=>!cr(o,s)));return{arrayValue:{values:t}}}class rc extends Ic{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Zg(r){return st(r.integerValue||r.doubleValue)}function mv(r){return uf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class fA{constructor(e,t){this.field=e,this.transform=t}}function pA(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Ja&&o instanceof Ja||s instanceof Za&&o instanceof Za?Io(s.elements,o.elements,cr):s instanceof rc&&o instanceof rc?cr(s.Ee,o.Ee):s instanceof Xa&&o instanceof Xa})(r.transform,e.transform)}class mA{constructor(e,t){this.version=e,this.transformResults=t}}class sr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new sr}static exists(e){return new sr(void 0,e)}static updateTime(e){return new sr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Sc{}function gv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new _v(r.key,sr.none()):new ul(r.key,r.data,sr.none());{const t=r.data,s=Tn.empty();let o=new yt(kt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new _s(r.key,s,new jn(o.toArray()),sr.none())}}function gA(r,e,t){r instanceof ul?(function(o,l,h){const m=o.value.clone(),g=ty(o.fieldTransforms,l,h.transformResults);m.setAll(g),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof _s?(function(o,l,h){if(!Bu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const m=ty(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(yv(o)),g.setAll(m),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ba(r,e,t,s){return r instanceof ul?(function(l,h,m,g){if(!Bu(l.precondition,h))return m;const _=l.value.clone(),w=ny(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof _s?(function(l,h,m,g){if(!Bu(l.precondition,h))return m;const _=ny(l.fieldTransforms,g,h),w=h.data;return w.setAll(yv(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,s):(function(l,h,m){return Bu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function yA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=dv(s.transform,o||null);l!=null&&(t===null&&(t=Tn.empty()),t.set(s.field,l))}return t||null}function ey(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Io(s,o,((l,h)=>pA(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ul extends Sc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class _s extends Sc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function yv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function ty(r,e,t){const s=new Map;Ue(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,m=e.data.field(l.field);s.set(l.field,dA(h,m,t[o]))}return s}function ny(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,hA(l,h,e))}return s}class _v extends Sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _A extends Sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&gA(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=cv();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let m=this.applyToLocalView(h,l.mutatedFields);m=t.has(o.key)?null:m;const g=gv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&Io(this.mutations,e.mutations,((t,s)=>ey(t,s)))&&Io(this.baseMutations,e.baseMutations,((t,s)=>ey(t,s)))}}class ff{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return oA})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new ff(e,t,s,o)}}/**
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
 */class EA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ut,xe;function TA(r){switch(r){case $.OK:return _e(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function vv(r){if(r===void 0)return Lr("GRPC error has no .code"),$.UNKNOWN;switch(r){case ut.OK:return $.OK;case ut.CANCELLED:return $.CANCELLED;case ut.UNKNOWN:return $.UNKNOWN;case ut.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ut.INTERNAL:return $.INTERNAL;case ut.UNAVAILABLE:return $.UNAVAILABLE;case ut.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ut.NOT_FOUND:return $.NOT_FOUND;case ut.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ut.ABORTED:return $.ABORTED;case ut.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ut.DATA_LOSS:return $.DATA_LOSS;default:return _e(39323,{code:r})}}(xe=ut||(ut={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const IA=new _i([4294967295,4294967295],0);function ry(r){const e=j_().encode(r),t=new x_;return t.update(e),new Uint8Array(t.digest())}function iy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new _i([t,s],0),new _i([o,l],0)]}class pf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new La(`Invalid padding: ${t}`);if(s<0)throw new La(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new La(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new La(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=_i.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(_i.fromNumber(s)));return o.compare(IA)===1&&(o=new _i([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ry(e),[s,o]=iy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new pf(l,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=ry(e),[s,o]=iy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class La extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ac{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,cl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ac(Ee.min(),o,new et(Se),Mr(),Pe())}}class cl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new cl(s,t,Pe(),Pe(),Pe())}}/**
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
 */class $u{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class Ev{constructor(e,t){this.targetId=e,this.De=t}}class wv{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class sy{constructor(){this.ve=0,this.Ce=oy(),this.Fe=Nt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),t=Pe(),s=Pe();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:l})}})),new cl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=oy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class SA{constructor(e){this.We=e,this.Ge=new Map,this.ze=Mr(),this.je=xu(),this.Je=xu(),this.He=new et(Se)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(Vd(l))if(s===0){const h=new de(l.path);this.Xe(t,h,Ut.newNoDocument(h,Ee.min()))}else Ue(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),g=m?this.ut(m,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,m;try{h=Ii(s).toUint8Array()}catch(g){if(g instanceof H_)return Ei("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new pf(h,o,l)}catch(g){return Ei(g instanceof La?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const m=this.st(h);if(m){if(l.current&&Vd(m.target)){const g=new de(m.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,Ut.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=Pe();this.Je.forEach(((l,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Ac(e,t,this.He,this.ze,s);return this.ze=Mr(),this.je=xu(),this.Je=xu(),this.He=new et(Se),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new sy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new yt(Se),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new yt(Se),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new sy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function xu(){return new et(de.comparator)}function oy(){return new et(de.comparator)}const AA={asc:"ASCENDING",desc:"DESCENDING"},RA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CA={and:"AND",or:"OR"};class PA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Md(r,e){return r.useProto3Json||_c(e)?e:{value:e}}function ic(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function kA(r,e){return ic(r,e.toTimestamp())}function or(r){return Ue(!!r,49232),Ee.fromTimestamp((function(t){const s=Ti(t);return new Qe(s.seconds,s.nanos)})(r))}function mf(r,e){return bd(r,e).canonicalString()}function bd(r,e){const t=(function(o){return new qe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Iv(r){const e=qe.fromString(r);return Ue(Pv(e),10190,{key:e.toString()}),e}function Fd(r,e){return mf(r.databaseId,e.path)}function dd(r,e){const t=Iv(e);if(t.get(1)!==r.databaseId.projectId)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new de(Av(t))}function Sv(r,e){return mf(r.databaseId,e)}function NA(r){const e=Iv(r);return e.length===4?qe.emptyPath():Av(e)}function Ud(r){return new qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Av(r){return Ue(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function ay(r,e,t){return{name:Fd(r,e),fields:t.value.mapValue.fields}}function DA(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,w){return _.useProto3Json?(Ue(w===void 0||typeof w=="string",58123),Nt.fromBase64String(w||"")):(Ue(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Nt.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const w=_.code===void 0?$.UNKNOWN:vv(_.code);return new te(w,_.message||"")})(h);t=new wv(s,o,l,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=dd(r,s.document.name),l=or(s.document.updateTime),h=s.document.createTime?or(s.document.createTime):Ee.min(),m=new Tn({mapValue:{fields:s.document.fields}}),g=Ut.newFoundDocument(o,l,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new $u(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=dd(r,s.document),l=s.readTime?or(s.readTime):Ee.min(),h=Ut.newNoDocument(o,l),m=s.removedTargetIds||[];t=new $u([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=dd(r,s.document),l=s.removedTargetIds||[];t=new $u([],l,o,null)}else{if(!("filter"in e))return _e(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new wA(o,l),m=s.targetId;t=new Ev(m,h)}}return t}function xA(r,e){let t;if(e instanceof ul)t={update:ay(r,e.key,e.value)};else if(e instanceof _v)t={delete:Fd(r,e.key)};else if(e instanceof _s)t={update:ay(r,e.key,e.data),updateMask:zA(e.fieldMask)};else{if(!(e instanceof _A))return _e(16599,{Rt:e.type});t={verify:Fd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const m=h.transform;if(m instanceof Xa)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ja)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Za)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof rc)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:kA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(r,e.precondition)),t}function VA(r,e){return r&&r.length>0?(Ue(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?or(o.updateTime):or(l);return h.isEqual(Ee.min())&&(h=or(l)),new mA(h,o.transformResults||[])})(t,e)))):[]}function OA(r,e){return{documents:[Sv(r,e.path)]}}function LA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Sv(r,o);const l=(function(_){if(_.length!==0)return Cv($n.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((w=>(function(C){return{field:mo(C.field),direction:FA(C.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Md(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function MA(r){let e=NA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(T){const C=Rv(T);return C instanceof $n&&tv(C)?C.getFilters():[C]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((C=>(function(q){return new Ya(go(q.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(C)))})(t.orderBy));let m=null;t.limit&&(m=(function(T){let C;return C=typeof T=="object"?T.value:T,_c(C)?null:C})(t.limit));let g=null;t.startAt&&(g=(function(T){const C=!!T.before,U=T.values||[];return new nc(U,C)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const C=!T.before,U=T.values||[];return new nc(U,C)})(t.endAt)),tA(e,o,h,l,m,"F",g,_)}function bA(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=go(t.unaryFilter.field);return ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=go(t.unaryFilter.field);return ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=go(t.unaryFilter.field);return ct.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=go(t.unaryFilter.field);return ct.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return ct.create(go(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return $n.create(t.compositeFilter.filters.map((s=>Rv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function FA(r){return AA[r]}function UA(r){return RA[r]}function jA(r){return CA[r]}function mo(r){return{fieldPath:r.canonicalString()}}function go(r){return kt.fromServerFormat(r.fieldPath)}function Cv(r){return r instanceof ct?(function(t){if(t.op==="=="){if(Kg(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NAN"}};if(Gg(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Kg(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NOT_NAN"}};if(Gg(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mo(t.field),op:UA(t.op),value:t.value}}})(r):r instanceof $n?(function(t){const s=t.getFilters().map((o=>Cv(o)));return s.length===1?s[0]:{compositeFilter:{op:jA(t.op),filters:s}}})(r):_e(54877,{filter:r})}function zA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Pv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class pi{constructor(e,t,s,o,l=Ee.min(),h=Ee.min(),m=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class BA{constructor(e){this.gt=e}}function $A(r){const e=MA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ld(e,e.limit,"L"):e}/**
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
 */class WA{constructor(){this.Dn=new HA}addToCollectionParentIndex(e,t){return this.Dn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(wi.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(wi.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class HA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(qe.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(qe.comparator)).toArray()}}/**
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
 */const ly={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kv=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(kv,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
 */class Ro{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ro(0)}static ur(){return new Ro(-1)}}/**
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
 */const uy="LruGarbageCollector",qA=1048576;function cy([r,e],[t,s]){const o=Se(r,t);return o===0?Se(e,s):o}class GA{constructor(e){this.Tr=e,this.buffer=new yt(cy),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();cy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class KA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){re(uy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Vo(t)?re(uy,"Ignoring IndexedDB error during garbage collection: ",t):await xo(t)}await this.Rr(3e5)}))}}class QA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(yc.ue);const s=new GA(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(ly)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ly):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,m=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(_=Date.now(),fo()<=Ce.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${l} targets in `+(g-m)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function YA(r,e){return new QA(r,e)}/**
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
 */class XA{constructor(){this.changes=new ys((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ZA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ba(s.mutation,o,jn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Pe()){const o=ss();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Oa();return l.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ss();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Pe())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let l=Mr();const h=za(),m=(function(){return za()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof _s)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Ba(w.mutation,_,w.mutation.getFieldMask(),Qe.now())):h.set(_.key,jn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var T;return m.set(_,new JA(w,(T=h.get(_))!==null&&T!==void 0?T:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=za();let o=new et(((h,m)=>h-m)),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||jn.empty();w=m.applyToLocalView(_,w),s.set(g,w);const T=(o.get(m.batchId)||Pe()).add(g);o=o.insert(m.batchId,T)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,T=cv();w.forEach((C=>{if(!l.has(C)){const U=gv(t.get(C),s.get(C));U!==null&&T.set(C,U),l=l.add(C)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return W.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):W.resolve(ss());let m=qa,g=l;return h.next((_=>W.forEach(_,((w,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),l.get(w)?W.resolve():this.remoteDocumentCache.getEntry(e,w).next((C=>{g=g.insert(w,C)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,Pe()))).next((w=>({batchId:m,changes:uv(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let o=Oa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Oa();return this.indexManager.getCollectionParents(e,l).next((m=>W.forEach(m,(g=>{const _=(function(T,C){return new Oo(C,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((T,C)=>{h=h.insert(T,C)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ut.newInvalidDocument(w)))}));let m=Oa();return h.forEach(((g,_)=>{const w=l.get(g);w!==void 0&&Ba(w.mutation,_,jn.empty(),Qe.now()),Tc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
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
 */class e1{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return W.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:or(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:$A(o.bundledQuery),readTime:or(o.readTime)}})(t)),W.resolve()}}/**
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
 */class t1{constructor(){this.overlays=new et(de.comparator),this.kr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ss();return W.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),W.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const o=ss(),l=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new et(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=l.get(_.largestBatchId);w===null&&(w=ss(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=ss(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=o)););return W.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new EA(t,s));let l=this.kr.get(t);l===void 0&&(l=Pe(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class n1{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class gf{constructor(){this.qr=new yt(It.Qr),this.$r=new yt(It.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new It(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new It(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new de(new qe([])),s=new It(t,e),o=new It(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new de(new qe([])),s=new It(t,e),o=new It(t,e+1);let l=Pe();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new It(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return de.comparator(e.key,t.key)||Se(e.Hr,t.Hr)}static Ur(e,t){return Se(e.Hr,t.Hr)||de.comparator(e.key,t.key)}}/**
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
 */class r1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new yt(It.Qr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new vA(l,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new It(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?af:this.er-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);l.push(m)})),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Se);return t.forEach((o=>{const l=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(m=>{s=s.add(m.Hr)}))})),W.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;de.isDocumentKey(l)||(l=l.child(""));const h=new It(new de(l),0);let m=new yt(Se);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Hr)),!0)}),h),W.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return W.forEach(t.mutations,(o=>{const l=new It(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new It(t,0),o=this.Yr.firstAfterOrEqual(s);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class i1{constructor(e){this.ni=e,this.docs=(function(){return new et(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Mr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))})),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Mr();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||VS(xS(w),s)<=0||(o.has(w.key)||Tc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ri(e,t){return W.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new s1(this)}getSize(e){return W.resolve(this.size)}}class s1 extends XA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),W.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class o1{constructor(e){this.persistence=e,this.ii=new ys((t=>cf(t)),hf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.si=0,this.oi=new gf,this.targetCount=0,this._i=Ro.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),W.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ro(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.hr(t),W.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),W.waitFor(l).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),W.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this.oi.containsKey(t))}}/**
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
 */class Nv{constructor(e,t){this.ai={},this.overlays={},this.ui=new yc(0),this.ci=!1,this.ci=!0,this.li=new n1,this.referenceDelegate=e(this),this.hi=new o1(this),this.indexManager=new WA,this.remoteDocumentCache=(function(o){return new i1(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new BA(t),this.Ti=new e1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new t1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new r1(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new a1(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return W.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class a1 extends LS{constructor(e){super(),this.currentSequenceNumber=e}}class yf{constructor(e){this.persistence=e,this.Ai=new gf,this.Ri=null}static Vi(e){return new yf(e)}get mi(){if(this.Ri)return this.Ri;throw _e(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.mi,(s=>{const o=de.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return W.or([()=>W.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class sc{constructor(e,t){this.persistence=e,this.gi=new ys((s=>FS(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=YA(this,t)}static Vi(e,t){return new sc(e,t)}Ii(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return W.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?W.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,l.removeEntry(h,Ee.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ju(e.data.value)),t}Sr(e,t,s){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class _f{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new _f(e,t.fromCache,s,o)}}/**
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
 */class l1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class u1{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return zw()?8:MS(jt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new l1;return this.ws(e,t,h).next((m=>{if(l.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(fo()<=Ce.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(fo()<=Ce.DEBUG&&re("QueryEngine","Query:",po(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(fo()<=Ce.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ir(t))):W.resolve())}ps(e,t){if(Jg(t))return W.resolve(null);let s=ir(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Ld(t,null,"F"),s=ir(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=Pe(...l);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,m);return this.Ds(t,_,h,g.readTime)?this.ps(e,Ld(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,s,o){return Jg(t)||o.isEqual(Ee.min())?W.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?W.resolve(null):(fo()<=Ce.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),po(t)),this.vs(e,h,t,DS(o,qa)).next((m=>m)))}))}bs(e,t){let s=new yt(av(e));return t.forEach(((o,l)=>{Tc(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return fo()<=Ce.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",po(t)),this.gs.getDocumentsMatchingQuery(e,t,wi.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const vf="LocalStore",c1=3e8;class h1{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new et(Se),this.Ms=new ys((l=>cf(l)),hf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function d1(r,e,t,s){return new h1(r,e,t,s)}async function Dv(r,e){const t=we(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],m=[];let g=Pe();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function f1(r,e){const t=we(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,w){const T=_.batch,C=T.keys();let U=W.resolve();return C.forEach((q=>{U=U.next((()=>w.getEntry(g,q))).next((K=>{const B=_.docVersions.get(q);Ue(B!==null,48541),K.version.compareTo(B)<0&&(T.applyToRemoteDocument(K,_),K.isValidDocument()&&(K.setReadTime(_.commitVersion),w.addEntry(K)))}))})),U.next((()=>m.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Pe();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function xv(r){const e=we(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function p1(r,e){const t=we(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((w,T)=>{const C=o.get(T);if(!C)return;m.push(t.hi.removeMatchingKeys(l,w.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,T))));let U=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?U=U.withResumeToken(Nt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(w.resumeToken,s)),o=o.insert(T,U),(function(K,B,Z){return K.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=c1?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(C,U,w)&&m.push(t.hi.updateTargetData(l,U))}));let g=Mr(),_=Pe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),m.push(m1(l,h,e.documentUpdates).next((w=>{g=w.Ls,_=w.ks}))),!s.isEqual(Ee.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));m.push(w)}return W.waitFor(m).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function m1(r,e,t){let s=Pe(),o=Pe();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=Mr();return t.forEach(((m,g)=>{const _=l.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):re(vf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function g1(r,e){const t=we(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=af),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function y1(r,e){const t=we(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,W.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new pi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function jd(r,e,t){const s=we(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Vo(h))throw h;re(vf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function hy(r,e,t){const s=we(r);let o=Ee.min(),l=Pe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const T=we(g),C=T.Ms.get(w);return C!==void 0?W.resolve(T.Fs.get(C)):T.hi.getTargetData(_,w)})(s,h,ir(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:Pe()))).next((m=>(_1(s,rA(e),m),{documents:m,qs:l})))))}function _1(r,e,t){let s=r.xs.get(e)||Ee.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.xs.set(e,s)}class dy{constructor(){this.activeTargetIds=uA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class v1{constructor(){this.Fo=new dy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new dy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class E1{xo(e){}shutdown(){}}/**
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
 */const fy="ConnectivityMonitor";class py{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){re(fy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){re(fy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vu=null;function zd(){return Vu===null?Vu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vu++,"0x"+Vu.toString(16)}/**
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
 */const fd="RestConnection",w1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class T1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===ec?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=zd(),m=this.Go(e,t.toUriEncodedString());re(fd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(m),w=Po(_);return this.jo(e,m,g,s,w).then((T=>(re(fd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw Ei(fd,`RPC '${e}' ${h} failed with error: `,T,"url: ",m,"request:",s),T}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Do})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=w1[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class I1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const bt="WebChannelConnection";class S1 extends T1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=zd();return new Promise(((m,g)=>{const _=new V_;_.setWithCredentials(!0),_.listenOnce(O_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Uu.NO_ERROR:const T=_.getResponseJson();re(bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),m(T);break;case Uu.TIMEOUT:re(bt,`RPC '${e}' ${h} timed out`),g(new te($.DEADLINE_EXCEEDED,"Request time out"));break;case Uu.HTTP_ERROR:const C=_.getStatus();if(re(bt,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let U=_.getResponseJson();Array.isArray(U)&&(U=U[0]);const q=U==null?void 0:U.error;if(q&&q.status&&q.message){const K=(function(Z){const oe=Z.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(oe)>=0?oe:$.UNKNOWN})(q.status);g(new te(K,q.message))}else g(new te($.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new te($.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{re(bt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);re(bt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}P_(e,t,s){const o=zd(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=b_(),m=M_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");re(bt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const T=h.createWebChannel(w,g);this.T_(T);let C=!1,U=!1;const q=new I1({Ho:B=>{U?re(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(C||(re(bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),C=!0),re(bt,`RPC '${e}' stream ${o} sending:`,B),T.send(B))},Yo:()=>T.close()}),K=(B,Z,oe)=>{B.listen(Z,(ue=>{try{oe(ue)}catch(ge){setTimeout((()=>{throw ge}),0)}}))};return K(T,Va.EventType.OPEN,(()=>{U||(re(bt,`RPC '${e}' stream ${o} transport opened.`),q.s_())})),K(T,Va.EventType.CLOSE,(()=>{U||(U=!0,re(bt,`RPC '${e}' stream ${o} transport closed`),q.__(),this.I_(T))})),K(T,Va.EventType.ERROR,(B=>{U||(U=!0,Ei(bt,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),q.__(new te($.UNAVAILABLE,"The operation could not be completed")))})),K(T,Va.EventType.MESSAGE,(B=>{var Z;if(!U){const oe=B.data[0];Ue(!!oe,16349);const ue=oe,ge=(ue==null?void 0:ue.error)||((Z=ue[0])===null||Z===void 0?void 0:Z.error);if(ge){re(bt,`RPC '${e}' stream ${o} received error:`,ge);const Oe=ge.status;let Te=(function(A){const N=ut[A];if(N!==void 0)return vv(N)})(Oe),k=ge.message;Te===void 0&&(Te=$.INTERNAL,k="Unknown error status: "+Oe+" with message "+ge.message),U=!0,q.__(new te(Te,k)),T.close()}else re(bt,`RPC '${e}' stream ${o} received:`,oe),q.a_(oe)}})),K(m,L_.STAT_EVENT,(B=>{B.stat===Pd.PROXY?re(bt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Pd.NOPROXY&&re(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{q.o_()}),0),q}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function pd(){return typeof document<"u"?document:null}/**
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
 */function Rc(r){return new PA(r,!0)}/**
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
 */class Vv{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const my="PersistentStream";class Ov{constructor(e,t,s,o,l,h,m,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Vv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new te($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return re(my,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(re(my,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class A1 extends Ov{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=DA(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?or(h.readTime):Ee.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Ud(this.serializer),t.addTarget=(function(l,h){let m;const g=h.target;if(m=Vd(g)?{documents:OA(l,g)}:{query:LA(l,g).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Tv(l,h.resumeToken);const _=Md(l,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ee.min())>0){m.readTime=ic(l,h.snapshotVersion.toTimestamp());const _=Md(l,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=bA(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Ud(this.serializer),t.removeTarget=e,this.k_(t)}}class R1 extends Ov{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=VA(e.writeResults,e.commitTime),s=or(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Ud(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>xA(this.serializer,s)))};this.k_(t)}}/**
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
 */class C1{}class P1 extends C1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,bd(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new te($.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,bd(t,s),o,h,m,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te($.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class k1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Lr(t),this._a=!1):re("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const fs="RemoteStore";class N1{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{vs(this)&&(re(fs,"Restarting streams for network reachability change."),await(async function(g){const _=we(g);_.Ia.add(4),await hl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Cc(_)})(this))}))})),this.Aa=new k1(s,o)}}async function Cc(r){if(vs(r))for(const e of r.da)await e(!0)}async function hl(r){for(const e of r.da)await e(!1)}function Lv(r,e){const t=we(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),If(t)?Tf(t):Lo(t).x_()&&wf(t,e))}function Ef(r,e){const t=we(r),s=Lo(t);t.Ta.delete(e),s.x_()&&Mv(t,e),t.Ta.size===0&&(s.x_()?s.B_():vs(t)&&t.Aa.set("Unknown"))}function wf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Lo(r).H_(e)}function Mv(r,e){r.Ra.$e(e),Lo(r).Y_(e)}function Tf(r){r.Ra=new SA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Lo(r).start(),r.Aa.aa()}function If(r){return vs(r)&&!Lo(r).M_()&&r.Ta.size>0}function vs(r){return we(r).Ia.size===0}function bv(r){r.Ra=void 0}async function D1(r){r.Aa.set("Online")}async function x1(r){r.Ta.forEach(((e,t)=>{wf(r,e)}))}async function V1(r,e){bv(r),If(r)?(r.Aa.la(e),Tf(r)):r.Aa.set("Unknown")}async function O1(r,e,t){if(r.Aa.set("Online"),e instanceof wv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const m of l.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(r,e)}catch(s){re(fs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await oc(r,s)}else if(e instanceof $u?r.Ra.Ye(e):e instanceof Ev?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Ee.min()))try{const s=await xv(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const m=l.Ra.Pt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(_);w&&l.Ta.set(_,w.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Nt.EMPTY_BYTE_STRING,w.snapshotVersion)),Mv(l,g);const T=new pi(w.target,g,_,w.sequenceNumber);wf(l,T)})),l.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(s){re(fs,"Failed to raise snapshot:",s),await oc(r,s)}}async function oc(r,e,t){if(!Vo(e))throw e;r.Ia.add(1),await hl(r),r.Aa.set("Offline"),t||(t=()=>xv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(fs,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Cc(r)}))}function Fv(r,e){return e().catch((t=>oc(r,t,e)))}async function Pc(r){const e=we(r),t=Ai(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:af;for(;L1(e);)try{const o=await g1(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,M1(e,o)}catch(o){await oc(e,o)}Uv(e)&&jv(e)}function L1(r){return vs(r)&&r.Pa.length<10}function M1(r,e){r.Pa.push(e);const t=Ai(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Uv(r){return vs(r)&&!Ai(r).M_()&&r.Pa.length>0}function jv(r){Ai(r).start()}async function b1(r){Ai(r).na()}async function F1(r){const e=Ai(r);for(const t of r.Pa)e.X_(t.mutations)}async function U1(r,e,t){const s=r.Pa.shift(),o=ff.from(s,e,t);await Fv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Pc(r)}async function j1(r,e){e&&Ai(r).Z_&&await(async function(s,o){if((function(h){return TA(h)&&h!==$.ABORTED})(o.code)){const l=s.Pa.shift();Ai(s).N_(),await Fv(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Pc(s)}})(r,e),Uv(r)&&jv(r)}async function gy(r,e){const t=we(r);t.asyncQueue.verifyOperationInProgress(),re(fs,"RemoteStore received new credentials");const s=vs(t);t.Ia.add(3),await hl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Cc(t)}async function z1(r,e){const t=we(r);e?(t.Ia.delete(2),await Cc(t)):e||(t.Ia.add(2),await hl(t),t.Aa.set("Unknown"))}function Lo(r){return r.Va||(r.Va=(function(t,s,o){const l=we(t);return l.ia(),new A1(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:D1.bind(null,r),e_:x1.bind(null,r),n_:V1.bind(null,r),J_:O1.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),If(r)?Tf(r):r.Aa.set("Unknown")):(await r.Va.stop(),bv(r))}))),r.Va}function Ai(r){return r.ma||(r.ma=(function(t,s,o){const l=we(t);return l.ia(),new R1(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:b1.bind(null,r),n_:j1.bind(null,r),ea:F1.bind(null,r),ta:U1.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Pc(r)):(await r.ma.stop(),r.Pa.length>0&&(re(fs,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class Sf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,m=new Sf(e,t,h,o,l);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Af(r,e){if(Lr("AsyncQueue",`${e}: ${r}`),Vo(r))return new te($.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class wo{static emptySet(e){return new wo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Oa(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new wo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class yy{constructor(){this.fa=new et(de.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):_e(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Co{constructor(e,t,s,o,l,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Co(e,t,wo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class B1{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class $1{constructor(){this.queries=_y(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=we(t),l=o.queries;o.queries=_y(),l.forEach(((h,m)=>{for(const g of m.wa)g.onError(s)}))})(this,new te($.ABORTED,"Firestore shutting down"))}}function _y(){return new ys((r=>ov(r)),wc)}async function Rf(r,e){const t=we(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new B1,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Af(h,`Initialization of query '${po(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Pf(t)}async function Cf(r,e){const t=we(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function W1(r,e){const t=we(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&Pf(t)}function H1(r,e,t){const s=we(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function Pf(r){r.Da.forEach((e=>{e.next()}))}var Bd,vy;(vy=Bd||(Bd={})).Fa="default",vy.Cache="cache";class kf{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Co(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Bd.Cache}}/**
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
 */class zv{constructor(e){this.key=e}}class Bv{constructor(e){this.key=e}}class q1{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=av(e),this.eu=new wo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new yy,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const C=o.get(w),U=Tc(this.query,T)?T:null,q=!!C&&this.mutatedKeys.has(C.key),K=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let B=!1;C&&U?C.data.isEqual(U.data)?q!==K&&(s.track({type:3,doc:U}),B=!0):this.iu(C,U)||(s.track({type:2,doc:U}),B=!0,(g&&this.Xa(U,g)>0||_&&this.Xa(U,_)<0)&&(m=!0)):!C&&U?(s.track({type:0,doc:U}),B=!0):C&&!U&&(s.track({type:1,doc:C}),B=!0,(g||_)&&(m=!0)),B&&(U?(h=h.add(U),l=K?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:m,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,T)=>(function(U,q){const K=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{At:B})}};return K(U)-K(q)})(w.type,T.type)||this.Xa(w.doc,T.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new Co(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new yy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new Bv(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new zv(s))})),t}uu(e){this.Ha=e.qs,this.Za=Pe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Co.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Nf="SyncEngine";class G1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class K1{constructor(e){this.key=e,this.lu=!1}}class Q1{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ys((m=>ov(m)),wc),this.Tu=new Map,this.Iu=new Set,this.du=new et(de.comparator),this.Eu=new Map,this.Au=new gf,this.Ru={},this.Vu=new Map,this.mu=Ro.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Y1(r,e,t=!0){const s=Kv(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await $v(s,e,t,!0),o}async function X1(r,e){const t=Kv(r);await $v(t,e,!0,!1)}async function $v(r,e,t,s){const o=await y1(r.localStore,ir(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let m;return s&&(m=await J1(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Lv(r.remoteStore,o),m}async function J1(r,e,t,s,o){r.gu=(T,C,U)=>(async function(K,B,Z,oe){let ue=B.view.nu(Z);ue.Ds&&(ue=await hy(K.localStore,B.query,!1).then((({documents:k})=>B.view.nu(k,ue))));const ge=oe&&oe.targetChanges.get(B.targetId),Oe=oe&&oe.targetMismatches.get(B.targetId)!=null,Te=B.view.applyChanges(ue,K.isPrimaryClient,ge,Oe);return wy(K,B.targetId,Te._u),Te.snapshot})(r,T,C,U);const l=await hy(r.localStore,e,!0),h=new q1(e,l.qs),m=h.nu(l.documents),g=cl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);wy(r,t,_._u);const w=new G1(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function Z1(r,e,t){const s=we(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!wc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await jd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Ef(s.remoteStore,o.targetId),$d(s,o.targetId)})).catch(xo)):($d(s,o.targetId),await jd(s.localStore,o.targetId,!0))}async function eR(r,e){const t=we(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ef(t.remoteStore,s.targetId))}async function tR(r,e,t){const s=lR(r);try{const o=await(function(h,m){const g=we(h),_=Qe.now(),w=m.reduce(((U,q)=>U.add(q.key)),Pe());let T,C;return g.persistence.runTransaction("Locally write mutations","readwrite",(U=>{let q=Mr(),K=Pe();return g.Os.getEntries(U,w).next((B=>{q=B,q.forEach(((Z,oe)=>{oe.isValidDocument()||(K=K.add(Z))}))})).next((()=>g.localDocuments.getOverlayedDocuments(U,q))).next((B=>{T=B;const Z=[];for(const oe of m){const ue=yA(oe,T.get(oe.key).overlayedDocument);ue!=null&&Z.push(new _s(oe.key,ue,J_(ue.value.mapValue),sr.exists(!0)))}return g.mutationQueue.addMutationBatch(U,_,Z,m)})).next((B=>{C=B;const Z=B.applyToLocalDocumentSet(T,K);return g.documentOverlayCache.saveOverlays(U,B.batchId,Z)}))})).then((()=>({batchId:C.batchId,changes:uv(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new et(Se)),_=_.insert(m,g),h.Ru[h.currentUser.toKey()]=_})(s,o.batchId,t),await dl(s,o.changes),await Pc(s.remoteStore)}catch(o){const l=Af(o,"Failed to persist write");t.reject(l)}}async function Wv(r,e){const t=we(r);try{const s=await p1(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Ue(h.lu,14607):o.removedDocuments.size>0&&(Ue(h.lu,42227),h.lu=!1))})),await dl(t,s,e)}catch(s){await xo(s)}}function Ey(r,e,t){const s=we(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=we(h);g.onlineState=m;let _=!1;g.queries.forEach(((w,T)=>{for(const C of T.wa)C.va(m)&&(_=!0)})),_&&Pf(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function nR(r,e,t){const s=we(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new et(de.comparator);h=h.insert(l,Ut.newNoDocument(l,Ee.min()));const m=Pe().add(l),g=new Ac(Ee.min(),new Map,new et(Se),h,m);await Wv(s,g),s.du=s.du.remove(l),s.Eu.delete(e),Df(s)}else await jd(s.localStore,e,!1).then((()=>$d(s,e,t))).catch(xo)}async function rR(r,e){const t=we(r),s=e.batch.batchId;try{const o=await f1(t.localStore,e);qv(t,s,null),Hv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await dl(t,o)}catch(o){await xo(o)}}async function iR(r,e,t){const s=we(r);try{const o=await(function(h,m){const g=we(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next((T=>(Ue(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);qv(s,e,t),Hv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await dl(s,o)}catch(o){await xo(o)}}function Hv(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function qv(r,e,t){const s=we(r);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function $d(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||Gv(r,s)}))}function Gv(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Ef(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Df(r))}function wy(r,e,t){for(const s of t)s instanceof zv?(r.Au.addReference(s.key,e),sR(r,s)):s instanceof Bv?(re(Nf,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||Gv(r,s.key)):_e(19791,{yu:s})}function sR(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(re(Nf,"New document in limbo: "+t),r.Iu.add(s),Df(r))}function Df(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new de(qe.fromString(e)),s=r.mu.next();r.Eu.set(s,new K1(t)),r.du=r.du.insert(t,s),Lv(r.remoteStore,new pi(ir(Ec(t.path)),s,"TargetPurposeLimboResolution",yc.ue))}}async function dl(r,e,t){const s=we(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,g)=>{h.push(s.gu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=_f.Es(g.targetId,_);l.push(T)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,_){const w=we(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>W.forEach(_,(C=>W.forEach(C.Is,(U=>w.persistence.referenceDelegate.addReference(T,C.targetId,U))).next((()=>W.forEach(C.ds,(U=>w.persistence.referenceDelegate.removeReference(T,C.targetId,U)))))))))}catch(T){if(!Vo(T))throw T;re(vf,"Failed to update sequence numbers: "+T)}for(const T of _){const C=T.targetId;if(!T.fromCache){const U=w.Fs.get(C),q=U.snapshotVersion,K=U.withLastLimboFreeSnapshotVersion(q);w.Fs=w.Fs.insert(C,K)}}})(s.localStore,l))}async function oR(r,e){const t=we(r);if(!t.currentUser.isEqual(e)){re(Nf,"User change. New user:",e.toKey());const s=await Dv(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((m=>{m.forEach((g=>{g.reject(new te($.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await dl(t,s.Bs)}}function aR(r,e){const t=we(r),s=t.Eu.get(e);if(s&&s.lu)return Pe().add(s.key);{let o=Pe();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function Kv(r){const e=we(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nR.bind(null,e),e.hu.J_=W1.bind(null,e.eventManager),e.hu.pu=H1.bind(null,e.eventManager),e}function lR(r){const e=we(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iR.bind(null,e),e}class ac{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return d1(this.persistence,new u1,e.initialUser,this.serializer)}Du(e){return new Nv(yf.Vi,this.serializer)}bu(e){return new v1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ac.provider={build:()=>new ac};class uR extends ac{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ue(this.persistence.referenceDelegate instanceof sc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new KA(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new Nv((s=>sc.Vi(s,t)),this.serializer)}}class Wd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ey(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=oR.bind(null,this.syncEngine),await z1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $1})()}createDatastore(e){const t=Rc(e.databaseInfo.databaseId),s=(function(l){return new S1(l)})(e.databaseInfo);return(function(l,h,m,g){return new P1(l,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,m){return new N1(s,o,l,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ey(this.syncEngine,t,0)),(function(){return py.C()?new py:new E1})())}createSyncEngine(e,t){return(function(o,l,h,m,g,_,w){const T=new Q1(o,l,h,m,g,_);return w&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=we(o);re(fs,"RemoteStore shutting down."),l.Ia.add(5),await hl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wd.provider={build:()=>new Wd};/**
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
 */class xf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ri="FirestoreClient";class cR{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{re(Ri,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(re(Ri,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Af(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function md(r,e){r.asyncQueue.verifyOperationInProgress(),re(Ri,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Dv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{Ei("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{re("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Ei("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function Ty(r,e){r.asyncQueue.verifyOperationInProgress();const t=await hR(r);re(Ri,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>gy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>gy(e.remoteStore,o))),r._onlineComponents=e}async function hR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(Ri,"Using user provided OfflineComponentProvider");try{await md(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ei("Error using user provided cache. Falling back to memory cache: "+t),await md(r,new ac)}}else re(Ri,"Using default OfflineComponentProvider"),await md(r,new uR(void 0));return r._offlineComponents}async function Qv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(Ri,"Using user provided OnlineComponentProvider"),await Ty(r,r._uninitializedComponentsProvider._online)):(re(Ri,"Using default OnlineComponentProvider"),await Ty(r,new Wd))),r._onlineComponents}function dR(r){return Qv(r).then((e=>e.syncEngine))}async function lc(r){const e=await Qv(r),t=e.eventManager;return t.onListen=Y1.bind(null,e.syncEngine),t.onUnlisten=Z1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=X1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=eR.bind(null,e.syncEngine),t}function fR(r,e,t={}){const s=new xr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,m,g,_){const w=new xf({next:C=>{w.Ou(),h.enqueueAndForget((()=>Cf(l,T)));const U=C.docs.has(m);!U&&C.fromCache?_.reject(new te($.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&C.fromCache&&g&&g.source==="server"?_.reject(new te($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(C)},error:C=>_.reject(C)}),T=new kf(Ec(m.path),w,{includeMetadataChanges:!0,ka:!0});return Rf(l,T)})(await lc(r),r.asyncQueue,e,t,s))),s.promise}function pR(r,e,t={}){const s=new xr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,m,g,_){const w=new xf({next:C=>{w.Ou(),h.enqueueAndForget((()=>Cf(l,T))),C.fromCache&&g.source==="server"?_.reject(new te($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(C)},error:C=>_.reject(C)}),T=new kf(m,w,{includeMetadataChanges:!0,ka:!0});return Rf(l,T)})(await lc(r),r.asyncQueue,e,t,s))),s.promise}/**
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
 */function Yv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Iy=new Map;/**
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
 */const Xv="firestore.googleapis.com",Sy=!0;class Ay{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new te($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Xv,this.ssl=Sy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Sy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qA)throw new te($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ay({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ay(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new wS;switch(s.type){case"firstParty":return new AS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new te($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Iy.get(t);s&&(re("ComponentProvider","Removing Datastore"),Iy.delete(t),s.terminate())})(this),Promise.resolve()}}function mR(r,e,t,s={}){var o;r=zn(r,kc);const l=Po(e),h=r._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&($y(`https://${g}`),Wy("Firestore",!0)),h.host!==Xv&&h.host!==g&&Ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!ls(_,m)&&(r._setSettings(_),s.mockUserToken)){let w,T;if(typeof s.mockUserToken=="string")w=s.mockUserToken,T=Ft.MOCK_USER;else{w=xw(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new te($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ft(C)}r._authCredentials=new TS(new U_(w,T))}}/**
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
 */class ki{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ki(this.firestore,e,this._query)}}class ot{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ll(t,ot._jsonSchema))return new ot(e,s||null,new de(qe.fromString(t.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:ht("string",ot._jsonSchemaVersion),referencePath:ht("string")};class vi extends ki{constructor(e,t,s){super(e,t,Ec(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new de(e))}withConverter(e){return new vi(this.firestore,e,this._path)}}function uc(r,e,...t){if(r=zt(r),z_("collection","path",e),r instanceof kc){const s=qe.fromString(e,...t);return Fg(s),new vi(r,null,s)}{if(!(r instanceof ot||r instanceof vi))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(qe.fromString(e,...t));return Fg(s),new vi(r.firestore,null,s)}}function ar(r,e,...t){if(r=zt(r),arguments.length===1&&(e=of.newId()),z_("doc","path",e),r instanceof kc){const s=qe.fromString(e,...t);return bg(s),new ot(r,null,new de(s))}{if(!(r instanceof ot||r instanceof vi))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(qe.fromString(e,...t));return bg(s),new ot(r.firestore,r instanceof vi?r.converter:null,new de(s))}}/**
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
 */const Ry="AsyncQueue";class Cy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Vv(this,"async_queue_retry"),this.oc=()=>{const s=pd();s&&re(Ry,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=pd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=pd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new xr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Vo(e))throw e;re(Ry,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Lr("INTERNAL UNHANDLED ERROR: ",Py(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Sf.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&_e(47125,{hc:Py(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Py(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function ky(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class ps extends kc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Cy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cy(e),this._firestoreClient=void 0,await e}}}function gR(r,e){const t=typeof r=="object"?r:Ky(),s=typeof r=="string"?r:ec,o=Kd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=Nw("firestore");l&&mR(o,...l)}return o}function Nc(r){if(r._terminated)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||yR(r),r._firestoreClient}function yR(r){var e,t,s;const o=r._freezeSettings(),l=(function(m,g,_,w){return new zS(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Yv(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new cR(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class In{constructor(e){this._byteString=e}static fromBase64String(e){try{return new In(Nt.fromBase64String(e))}catch(t){throw new te($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new In(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:In._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ll(e,In._jsonSchema))return In.fromBase64String(e.bytes)}}In._jsonSchemaVersion="firestore/bytes/1.0",In._jsonSchema={type:ht("string",In._jsonSchemaVersion),bytes:ht("string")};/**
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
 */class Vf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Of{constructor(e){this._methodName=e}}/**
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
 */class lr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:lr._jsonSchemaVersion}}static fromJSON(e){if(ll(e,lr._jsonSchema))return new lr(e.latitude,e.longitude)}}lr._jsonSchemaVersion="firestore/geoPoint/1.0",lr._jsonSchema={type:ht("string",lr._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
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
 */class ur{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ur._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ll(e,ur._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ur(e.vectorValues);throw new te($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ur._jsonSchemaVersion="firestore/vectorValue/1.0",ur._jsonSchema={type:ht("string",ur._jsonSchemaVersion),vectorValues:ht("object")};/**
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
 */const _R=/^__.*__$/;class vR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new _s(e,this.data,this.fieldMask,t,this.fieldTransforms):new ul(e,this.data,t,this.fieldTransforms)}}function Jv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ec:r})}}class Lf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Lf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return cc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Jv(this.Ec)&&_R.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ER{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Rc(e)}Dc(e,t,s,o=!1){return new Lf({Ec:e,methodName:t,bc:s,path:kt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mf(r){const e=r._freezeSettings(),t=Rc(r._databaseId);return new ER(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Zv(r,e,t,s,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);nE("Data must be an object, but it was:",h,s);const m=eE(s,h);let g,_;if(l.merge)g=new jn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const C=TR(e,T,t);if(!h.contains(C))throw new te($.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);SR(w,C)||w.push(C)}g=new jn(w),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new vR(new Tn(m),g,_)}class bf extends Of{_toFieldTransform(e){return new fA(e.path,new Xa)}isEqual(e){return e instanceof bf}}function wR(r,e,t,s=!1){return Ff(t,r.Dc(s?4:3,e))}function Ff(r,e){if(tE(r=zt(r)))return nE("Unsupported field value:",e,r),eE(r,e);if(r instanceof Of)return(function(s,o){if(!Jv(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const m of s){let g=Ff(m,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=zt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return cA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Qe.fromDate(s);return{timestampValue:ic(o.serializer,l)}}if(s instanceof Qe){const l=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ic(o.serializer,l)}}if(s instanceof lr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof In)return{bytesValue:Tv(o.serializer,s._byteString)};if(s instanceof ot){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:mf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ur)return(function(h,m){return{mapValue:{fields:{[Y_]:{stringValue:X_},[tc]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.wc("VectorValues must only contain numeric values.");return df(m.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${gc(s)}`)})(r,e)}function eE(r,e){const t={};return W_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(r,((s,o)=>{const l=Ff(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function tE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Qe||r instanceof lr||r instanceof In||r instanceof ot||r instanceof Of||r instanceof ur)}function nE(r,e,t){if(!tE(t)||!B_(t)){const s=gc(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function TR(r,e,t){if((e=zt(e))instanceof Vf)return e._internalPath;if(typeof e=="string")return rE(r,e);throw cc("Field path arguments must be of type string or ",r,!1,void 0,t)}const IR=new RegExp("[~\\*/\\[\\]]");function rE(r,e,t){if(e.search(IR)>=0)throw cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Vf(...e.split("."))._internalPath}catch{throw cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function cc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new te($.INVALID_ARGUMENT,m+r+g)}function SR(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class iE{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Uf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class AR extends iE{data(){return super.data()}}function Uf(r,e){return typeof e=="string"?rE(r,e):e instanceof Vf?e._internalPath:e._delegate._internalPath}/**
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
 */function sE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new te($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jf{}class oE extends jf{}function aE(r,e,...t){let s=[];e instanceof jf&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof Bf)).length,m=l.filter((g=>g instanceof zf)).length;if(h>1||h>0&&m>0)throw new te($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class zf extends oE{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new zf(e,t,s)}_apply(e){const t=this._parse(e);return uE(e._query,t),new ki(e.firestore,e.converter,Od(e._query,t))}_parse(e){const t=Mf(e.firestore);return(function(l,h,m,g,_,w,T){let C;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new te($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Dy(T,w);const q=[];for(const K of T)q.push(Ny(g,l,K));C={arrayValue:{values:q}}}else C=Ny(g,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Dy(T,w),C=wR(m,h,T,w==="in"||w==="not-in");return ct.create(_,w,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Bf extends jf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:$n.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const m=l.getFlattenedFilters();for(const g of m)uE(h,g),h=Od(h,g)})(e._query,t),new ki(e.firestore,e.converter,Od(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $f extends oE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new $f(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ya(l,h)})(e._query,this._field,this._direction);return new ki(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Oo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function lE(r,e="asc"){const t=e,s=Uf("orderBy",r);return $f._create(s,t)}function Ny(r,e,t){if(typeof(t=zt(t))=="string"){if(t==="")throw new te($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sv(e)&&t.indexOf("/")!==-1)throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(qe.fromString(t));if(!de.isDocumentKey(s))throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return qg(r,new de(s))}if(t instanceof ot)return qg(r,t._key);throw new te($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gc(t)}.`)}function Dy(r,e){if(!Array.isArray(r)||r.length===0)throw new te($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uE(r,e){const t=(function(o,l){for(const h of o)for(const m of h.getFlattenedFilters())if(l.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class RR{convertValue(e,t="none"){switch(Si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return gs(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[tc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>st(h.doubleValue)));return new ur(l)}convertGeoPoint(e){return new lr(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=vc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const t=Ti(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=qe.fromString(e);Ue(Pv(s),9688,{name:e});const o=new Ka(s.get(1),s.get(3)),l=new de(s.popFirst(5));return o.isEqual(t)||Lr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function cE(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class Ma{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class os extends iE{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Uf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=os._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}os._jsonSchemaVersion="firestore/documentSnapshot/1.0",os._jsonSchema={type:ht("string",os._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class Wu extends os{data(e={}){return super.data(e)}}class as{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ma(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Wu(this._firestore,this._userDataWriter,s.key,s,new Ma(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Wu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ma(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>l||m.type!==3)).map((m=>{const g=new Wu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ma(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:CR(m.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=as._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=of.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
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
 */function hc(r){r=zn(r,ot);const e=zn(r.firestore,ps);return fR(Nc(e),r._key).then((t=>fE(e,r,t)))}as._jsonSchemaVersion="firestore/querySnapshot/1.0",as._jsonSchema={type:ht("string",as._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};class Wf extends RR{constructor(e){super(),this.firestore=e}convertBytes(e){return new In(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function hE(r){r=zn(r,ki);const e=zn(r.firestore,ps),t=Nc(e),s=new Wf(e);return sE(r._query),pR(t,r._query).then((o=>new as(e,s,r,o)))}function el(r,e,t){r=zn(r,ot);const s=zn(r.firestore,ps),o=cE(r.converter,e,t);return dE(s,[Zv(Mf(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,sr.none())])}function PR(r,e){const t=zn(r.firestore,ps),s=ar(r),o=cE(r.converter,e);return dE(t,[Zv(Mf(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,sr.exists(!1))]).then((()=>s))}function kR(r,...e){var t,s,o;r=zt(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||ky(e[h])||(l=e[h++]);const m={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(ky(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let g,_,w;if(r instanceof ot)_=zn(r.firestore,ps),w=Ec(r._key.path),g={next:T=>{e[h]&&e[h](fE(_,r,T))},error:e[h+1],complete:e[h+2]};else{const T=zn(r,ki);_=zn(T.firestore,ps),w=T._query;const C=new Wf(_);g={next:U=>{e[h]&&e[h](new as(_,C,T,U))},error:e[h+1],complete:e[h+2]},sE(r._query)}return(function(C,U,q,K){const B=new xf(K),Z=new kf(U,B,q);return C.asyncQueue.enqueueAndForget((async()=>Rf(await lc(C),Z))),()=>{B.Ou(),C.asyncQueue.enqueueAndForget((async()=>Cf(await lc(C),Z)))}})(Nc(_),w,m,g)}function dE(r,e){return(function(s,o){const l=new xr;return s.asyncQueue.enqueueAndForget((async()=>tR(await dR(s),o,l))),l.promise})(Nc(r),e)}function fE(r,e,t){const s=t.docs.get(e._key),o=new Wf(r);return new os(r,o,e._key,s,new Ma(t.hasPendingWrites,t.fromCache),e.converter)}function tl(){return new bf("serverTimestamp")}(function(e,t=!0){(function(o){Do=o})(ko),To(new us("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),m=new ps(new IS(s.getProvider("auth-internal")),new RS(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new te($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ka(_.options.projectId,w)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),m._setSettings(l),m}),"PUBLIC").setMultipleInstances(!0)),yi(xg,Vg,e),yi(xg,Vg,"esm2017")})();const NR={apiKey:"AIzaSyCjLVUF_wyjlduSuCi_4DEyKXOt8JjEvsQ",authDomain:"coachpulse-87341.firebaseapp.com",projectId:"coachpulse-87341",storageBucket:"coachpulse-87341.firebasestorage.app",messagingSenderId:"440637829553",appId:"1:440637829553:web:96fdc2e49e5e58fed18d90"},pE=Gy(NR),cn=yS(pE);iI(cn,I_);const un=gR(pE);var Fe=Hd();const DR=_w(Fe);var Ou={},gd={exports:{}},Zt={},yd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function xR(){return xy||(xy=1,(function(r){function e(ee,fe){var ie=ee.length;ee.push(fe);e:for(;0<ie;){var V=ie-1>>>1,H=ee[V];if(0<o(H,fe))ee[V]=fe,ee[ie]=H,ie=V;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var fe=ee[0],ie=ee.pop();if(ie!==fe){ee[0]=ie;e:for(var V=0,H=ee.length,he=H>>>1;V<he;){var Ie=2*(V+1)-1,Ae=ee[Ie],Ne=Ie+1,Me=ee[Ne];if(0>o(Ae,ie))Ne<H&&0>o(Me,Ae)?(ee[V]=Me,ee[Ne]=ie,V=Ne):(ee[V]=Ae,ee[Ie]=ie,V=Ie);else if(Ne<H&&0>o(Me,ie))ee[V]=Me,ee[Ne]=ie,V=Ne;else break e}}return fe}function o(ee,fe){var ie=ee.sortIndex-fe.sortIndex;return ie!==0?ie:ee.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,T=null,C=3,U=!1,q=!1,K=!1,B=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ue(ee){for(var fe=t(_);fe!==null;){if(fe.callback===null)s(_);else if(fe.startTime<=ee)s(_),fe.sortIndex=fe.expirationTime,e(g,fe);else break;fe=t(_)}}function ge(ee){if(K=!1,ue(ee),!q)if(t(g)!==null)q=!0,xt(Oe);else{var fe=t(_);fe!==null&&ze(ge,fe.startTime-ee)}}function Oe(ee,fe){q=!1,K&&(K=!1,Z(I),I=-1),U=!0;var ie=C;try{for(ue(fe),T=t(g);T!==null&&(!(T.expirationTime>fe)||ee&&!x());){var V=T.callback;if(typeof V=="function"){T.callback=null,C=T.priorityLevel;var H=V(T.expirationTime<=fe);fe=r.unstable_now(),typeof H=="function"?T.callback=H:T===t(g)&&s(g),ue(fe)}else s(g);T=t(g)}if(T!==null)var he=!0;else{var Ie=t(_);Ie!==null&&ze(ge,Ie.startTime-fe),he=!1}return he}finally{T=null,C=ie,U=!1}}var Te=!1,k=null,I=-1,A=5,N=-1;function x(){return!(r.unstable_now()-N<A)}function O(){if(k!==null){var ee=r.unstable_now();N=ee;var fe=!0;try{fe=k(!0,ee)}finally{fe?R():(Te=!1,k=null)}}else Te=!1}var R;if(typeof oe=="function")R=function(){oe(O)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Dt=nt.port2;nt.port1.onmessage=O,R=function(){Dt.postMessage(null)}}else R=function(){B(O,0)};function xt(ee){k=ee,Te||(Te=!0,R())}function ze(ee,fe){I=B(function(){ee(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){q||U||(q=!0,xt(Oe))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(C){case 1:case 2:case 3:var fe=3;break;default:fe=C}var ie=C;C=fe;try{return ee()}finally{C=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,fe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ie=C;C=ee;try{return fe()}finally{C=ie}},r.unstable_scheduleCallback=function(ee,fe,ie){var V=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?V+ie:V):ie=V,ee){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ie+H,ee={id:w++,callback:fe,priorityLevel:ee,startTime:ie,expirationTime:H,sortIndex:-1},ie>V?(ee.sortIndex=ie,e(_,ee),t(g)===null&&ee===t(_)&&(K?(Z(I),I=-1):K=!0,ze(ge,ie-V))):(ee.sortIndex=H,e(g,ee),q||U||(q=!0,xt(Oe))),ee},r.unstable_shouldYield=x,r.unstable_wrapCallback=function(ee){var fe=C;return function(){var ie=C;C=fe;try{return ee.apply(this,arguments)}finally{C=ie}}}})(_d)),_d}var Vy;function VR(){return Vy||(Vy=1,yd.exports=xR()),yd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy;function OR(){if(Oy)return Zt;Oy=1;var r=Hd(),e=VR();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function C(n){return g.call(T,n)?!0:g.call(w,n)?!1:_.test(n)?T[n]=!0:(w[n]=!0,!1)}function U(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,i,a,c){if(i===null||typeof i>"u"||U(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function K(n,i,a,c,d,p,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new K(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];B[i]=new K(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new K(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new K(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new K(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new K(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new K(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new K(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new K(n,5,!1,n.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function oe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(Z,oe);B[i]=new K(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(Z,oe);B[i]=new K(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(Z,oe);B[i]=new K(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new K(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new K(n,1,!1,n.toLowerCase(),null,!0,!0)});function ue(n,i,a,c){var d=B.hasOwnProperty(i)?B[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(q(i,a,d,c)&&(a=null),c||d===null?C(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ge=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),Te=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),x=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),ee=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,V;function H(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var he=!1;function Ie(n,i){if(!n||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,S=p.length-1;1<=v&&0<=S&&d[v]!==p[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==p[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==p[S]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=S);break}}}finally{he=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Ae(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Te:return"Portal";case A:return"Profiler";case I:return"StrictMode";case R:return"Suspense";case nt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Dt:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case xt:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _t(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function hr(n){n._valueTracker||(n._valueTracker=_t(n))}function Es(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Fr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ni(n,i){var a=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ws(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Mo(n,i){i=i.checked,i!=null&&ue(n,"checked",i,!1)}function bo(n,i){Mo(n,i);var a=be(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ts(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ts(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function fl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ts(n,i,a){(i!=="number"||Fr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var dr=Array.isArray;function fr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Fo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Is(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(dr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:be(a)}}function Ss(n,i){var a=be(i.value),c=be(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Uo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function dt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?dt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var pr,jo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=pr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ur(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xi=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(n){xi.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Di[i]=Di[n]})});function zo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Di.hasOwnProperty(n)&&Di[n]?(""+i).trim():i+"px"}function Bo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=zo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var $o=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wo(n,i){if(i){if($o[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ho(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function As(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Rs=null,hn=null,Wn=null;function Cs(n){if(n=ma(n)){if(typeof Rs!="function")throw Error(t(280));var i=n.stateNode;i&&(i=$l(i),Rs(n.stateNode,n.type,i))}}function Hn(n){hn?Wn?Wn.push(n):Wn=[n]:hn=n}function qo(){if(hn){var n=hn,i=Wn;if(Wn=hn=null,Cs(n),i)for(n=0;n<i.length;n++)Cs(i[n])}}function Oi(n,i){return n(i)}function Go(){}var mr=!1;function Ko(n,i,a){if(mr)return n(i,a);mr=!0;try{return Oi(n,i,a)}finally{mr=!1,(hn!==null||Wn!==null)&&(Go(),qo())}}function rt(n,i){var a=n.stateNode;if(a===null)return null;var c=$l(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ps=!1;if(m)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Ps=!1}function Li(n,i,a,c,d,p,v,S,P){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(Q){this.onError(Q)}}var Mi=!1,ks=null,An=!1,Qo=null,Dc={onError:function(n){Mi=!0,ks=n}};function Ns(n,i,a,c,d,p,v,S,P){Mi=!1,ks=null,Li.apply(Dc,arguments)}function pl(n,i,a,c,d,p,v,S,P){if(Ns.apply(this,arguments),Mi){if(Mi){var F=ks;Mi=!1,ks=null}else throw Error(t(198));An||(An=!0,Qo=F)}}function Rn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function bi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Cn(n){if(Rn(n)!==n)throw Error(t(188))}function ml(n){var i=n.alternate;if(!i){if(i=Rn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Cn(d),n;if(p===c)return Cn(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=p;break}if(S===c){v=!0,c=d,a=p;break}S=S.sibling}if(!v){for(S=p.child;S;){if(S===a){v=!0,a=p,c=d;break}if(S===c){v=!0,c=p,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Yo(n){return n=ml(n),n!==null?Ds(n):null}function Ds(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ds(n);if(i!==null)return i;n=n.sibling}return null}var xs=e.unstable_scheduleCallback,Xo=e.unstable_cancelCallback,gl=e.unstable_shouldYield,xc=e.unstable_requestPaint,We=e.unstable_now,yl=e.unstable_getCurrentPriorityLevel,Fi=e.unstable_ImmediatePriority,jr=e.unstable_UserBlockingPriority,dn=e.unstable_NormalPriority,Jo=e.unstable_LowPriority,_l=e.unstable_IdlePriority,Ui=null,tn=null;function vl(n){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Ui,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:wl,Zo=Math.log,El=Math.LN2;function wl(n){return n>>>=0,n===0?32:31-(Zo(n)/El|0)|0}var Vs=64,Os=4194304;function zr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ji(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=zr(S):(p&=v,p!==0&&(c=zr(p)))}else v=a&~d,v!==0?c=zr(v):p!==0&&(c=zr(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Bt(i),d=1<<a,c|=n[a],i&=~d;return c}function Vc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Bt(p),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&c)!==0)&&(d[v]=Vc(S,i)):P<=i&&(n.expiredLanes|=S),p&=~S}}function nn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function zi(){var n=Vs;return Vs<<=1,(Vs&4194240)===0&&(Vs=64),n}function Br(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $r(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Bt(i),n[i]=a}function Be(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),p=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Wr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ke=0;function Hr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Tl,Ls,Il,Sl,Al,ea=!1,qn=[],St=null,Pn=null,kn=null,qr=new Map,fn=new Map,Gn=[],Oc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rl(n,i){switch(n){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":qr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(i.pointerId)}}function qt(n,i,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=ma(i),i!==null&&Ls(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Lc(n,i,a,c,d){switch(i){case"focusin":return St=qt(St,n,i,a,c,d),!0;case"dragenter":return Pn=qt(Pn,n,i,a,c,d),!0;case"mouseover":return kn=qt(kn,n,i,a,c,d),!0;case"pointerover":var p=d.pointerId;return qr.set(p,qt(qr.get(p)||null,n,i,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,fn.set(p,qt(fn.get(p)||null,n,i,a,c,d)),!0}return!1}function Cl(n){var i=qi(n.target);if(i!==null){var a=Rn(i);if(a!==null){if(i=a.tag,i===13){if(i=bi(a),i!==null){n.blockedOn=i,Al(n.priority,function(){Il(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ms(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Vi=c,a.target.dispatchEvent(c),Vi=null}else return i=ma(a),i!==null&&Ls(i),n.blockedOn=a,!1;i.shift()}return!0}function Bi(n,i,a){yr(n)&&a.delete(i)}function Pl(){ea=!1,St!==null&&yr(St)&&(St=null),Pn!==null&&yr(Pn)&&(Pn=null),kn!==null&&yr(kn)&&(kn=null),qr.forEach(Bi),fn.forEach(Bi)}function Nn(n,i){n.blockedOn===i&&(n.blockedOn=null,ea||(ea=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pl)))}function Dn(n){function i(d){return Nn(d,n)}if(0<qn.length){Nn(qn[0],n);for(var a=1;a<qn.length;a++){var c=qn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(St!==null&&Nn(St,n),Pn!==null&&Nn(Pn,n),kn!==null&&Nn(kn,n),qr.forEach(i),fn.forEach(i),a=0;a<Gn.length;a++)c=Gn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Gn.length&&(a=Gn[0],a.blockedOn===null);)Cl(a),a.blockedOn===null&&Gn.shift()}var _r=ge.ReactCurrentBatchConfig,Gr=!0;function Ye(n,i,a,c){var d=ke,p=_r.transition;_r.transition=null;try{ke=1,ta(n,i,a,c)}finally{ke=d,_r.transition=p}}function Mc(n,i,a,c){var d=ke,p=_r.transition;_r.transition=null;try{ke=4,ta(n,i,a,c)}finally{ke=d,_r.transition=p}}function ta(n,i,a,c){if(Gr){var d=Ms(n,i,a,c);if(d===null)Gc(n,i,c,$i,a),Rl(n,c);else if(Lc(d,n,i,a,c))c.stopPropagation();else if(Rl(n,c),i&4&&-1<Oc.indexOf(n)){for(;d!==null;){var p=ma(d);if(p!==null&&Tl(p),p=Ms(n,i,a,c),p===null&&Gc(n,i,c,$i,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Gc(n,i,c,null,a)}}var $i=null;function Ms(n,i,a,c){if($i=null,n=As(c),n=qi(n),n!==null)if(i=Rn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=bi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return $i=n,null}function na(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yl()){case Fi:return 1;case jr:return 4;case dn:case Jo:return 16;case _l:return 536870912;default:return 16}default:return 16}}var rn=null,bs=null,Gt=null;function ra(){if(Gt)return Gt;var n,i=bs,a=i.length,c,d="value"in rn?rn.value:rn.textContent,p=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[p-c];c++);return Gt=d.slice(n,1<c?1-c:void 0)}function Fs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Kn(){return!0}function ia(){return!1}function At(n){function i(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Kn:ia,this.isPropagationStopped=ia,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),i}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=At(xn),Qn=ie({},xn,{view:0,detail:0}),bc=At(Qn),js,vr,Kr,Wi=ie({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Kr&&(Kr&&n.type==="mousemove"?(js=n.screenX-Kr.screenX,vr=n.screenY-Kr.screenY):vr=js=0,Kr=n),js)},movementY:function(n){return"movementY"in n?n.movementY:vr}}),zs=At(Wi),sa=ie({},Wi,{dataTransfer:0}),kl=At(sa),Bs=ie({},Qn,{relatedTarget:0}),$s=At(Bs),Nl=ie({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Er=At(Nl),Dl=ie({},xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xl=At(Dl),Vl=ie({},xn,{data:0}),oa=At(Vl),Ws={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ol={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ll(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ol[n])?!!i[n]:!1}function Yn(){return Ll}var u=ie({},Qn,{key:function(n){if(n.key){var i=Ws[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Fs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yn,charCode:function(n){return n.type==="keypress"?Fs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=At(u),y=ie({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=At(y),L=ie({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yn}),j=At(L),J=ie({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=At(J),pt=ie({},Wi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=At(pt),vt=[9,13,27,32],at=m&&"CompositionEvent"in window,pn=null;m&&"documentMode"in document&&(pn=document.documentMode);var sn=m&&"TextEvent"in window&&!pn,Hi=m&&(!at||pn&&8<pn&&11>=pn),Hs=" ",Hf=!1;function qf(n,i){switch(n){case"keyup":return vt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qs=!1;function mE(n,i){switch(n){case"compositionend":return Gf(i);case"keypress":return i.which!==32?null:(Hf=!0,Hs);case"textInput":return n=i.data,n===Hs&&Hf?null:n;default:return null}}function gE(n,i){if(qs)return n==="compositionend"||!at&&qf(n,i)?(n=ra(),Gt=bs=rn=null,qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hi&&i.locale!=="ko"?null:i.data;default:return null}}var yE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!yE[n.type]:i==="textarea"}function Qf(n,i,a,c){Hn(c),i=jl(i,"onChange"),0<i.length&&(a=new Us("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var aa=null,la=null;function _E(n){fp(n,0)}function Ml(n){var i=Xs(n);if(Es(i))return n}function vE(n,i){if(n==="change")return i}var Yf=!1;if(m){var Fc;if(m){var Uc="oninput"in document;if(!Uc){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),Uc=typeof Xf.oninput=="function"}Fc=Uc}else Fc=!1;Yf=Fc&&(!document.documentMode||9<document.documentMode)}function Jf(){aa&&(aa.detachEvent("onpropertychange",Zf),la=aa=null)}function Zf(n){if(n.propertyName==="value"&&Ml(la)){var i=[];Qf(i,la,n,As(n)),Ko(_E,i)}}function EE(n,i,a){n==="focusin"?(Jf(),aa=i,la=a,aa.attachEvent("onpropertychange",Zf)):n==="focusout"&&Jf()}function wE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ml(la)}function TE(n,i){if(n==="click")return Ml(i)}function IE(n,i){if(n==="input"||n==="change")return Ml(i)}function SE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Vn=typeof Object.is=="function"?Object.is:SE;function ua(n,i){if(Vn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Vn(n[d],i[d]))return!1}return!0}function ep(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function tp(n,i){var a=ep(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ep(a)}}function np(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?np(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function rp(){for(var n=window,i=Fr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Fr(n.document)}return i}function jc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function AE(n){var i=rp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&np(a.ownerDocument.documentElement,a)){if(c!==null&&jc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=tp(a,p);var v=tp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var RE=m&&"documentMode"in document&&11>=document.documentMode,Gs=null,zc=null,ca=null,Bc=!1;function ip(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bc||Gs==null||Gs!==Fr(c)||(c=Gs,"selectionStart"in c&&jc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ca&&ua(ca,c)||(ca=c,c=jl(zc,"onSelect"),0<c.length&&(i=new Us("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Gs)))}function bl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ks={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},$c={},sp={};m&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Fl(n){if($c[n])return $c[n];if(!Ks[n])return n;var i=Ks[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in sp)return $c[n]=i[a];return n}var op=Fl("animationend"),ap=Fl("animationiteration"),lp=Fl("animationstart"),up=Fl("transitionend"),cp=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(n,i){cp.set(n,i),l(i,[n])}for(var Wc=0;Wc<hp.length;Wc++){var Hc=hp[Wc],CE=Hc.toLowerCase(),PE=Hc[0].toUpperCase()+Hc.slice(1);Qr(CE,"on"+PE)}Qr(op,"onAnimationEnd"),Qr(ap,"onAnimationIteration"),Qr(lp,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(up,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function dp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,pl(c,i,void 0,n),n.currentTarget=null}function fp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,F=S.currentTarget;if(S=S.listener,P!==p&&d.isPropagationStopped())break e;dp(d,S,F),p=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,F=S.currentTarget,S=S.listener,P!==p&&d.isPropagationStopped())break e;dp(d,S,F),p=P}}}if(An)throw n=Qo,An=!1,Qo=null,n}function Ge(n,i){var a=i[Zc];a===void 0&&(a=i[Zc]=new Set);var c=n+"__bubble";a.has(c)||(pp(i,n,2,!1),a.add(c))}function qc(n,i,a){var c=0;i&&(c|=4),pp(a,n,c,i)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function da(n){if(!n[Ul]){n[Ul]=!0,s.forEach(function(a){a!=="selectionchange"&&(kE.has(a)||qc(a,!1,n),qc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ul]||(i[Ul]=!0,qc("selectionchange",!1,i))}}function pp(n,i,a,c){switch(na(i)){case 1:var d=Ye;break;case 4:d=Mc;break;default:d=ta}a=d.bind(null,i,a,n),d=void 0,!Ps||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Gc(n,i,a,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=qi(S),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}S=S.parentNode}}c=c.return}Ko(function(){var F=p,Q=As(a),Y=[];e:{var G=cp.get(n);if(G!==void 0){var ne=Us,ae=n;switch(n){case"keypress":if(Fs(a)===0)break e;case"keydown":case"keyup":ne=f;break;case"focusin":ae="focus",ne=$s;break;case"focusout":ae="blur",ne=$s;break;case"beforeblur":case"afterblur":ne=$s;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=kl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=j;break;case op:case ap:case lp:ne=Er;break;case up:ne=je;break;case"scroll":ne=bc;break;case"wheel":ne=De;break;case"copy":case"cut":case"paste":ne=xl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=E}var le=(i&4)!==0,it=!le&&n==="scroll",M=le?G!==null?G+"Capture":null:G;le=[];for(var D=F,b;D!==null;){b=D;var X=b.stateNode;if(b.tag===5&&X!==null&&(b=X,M!==null&&(X=rt(D,M),X!=null&&le.push(fa(D,X,b)))),it)break;D=D.return}0<le.length&&(G=new ne(G,ae,null,a,Q),Y.push({event:G,listeners:le}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",G&&a!==Vi&&(ae=a.relatedTarget||a.fromElement)&&(qi(ae)||ae[wr]))break e;if((ne||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(ae=a.relatedTarget||a.toElement,ne=F,ae=ae?qi(ae):null,ae!==null&&(it=Rn(ae),ae!==it||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(ne=null,ae=F),ne!==ae)){if(le=zs,X="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(le=E,X="onPointerLeave",M="onPointerEnter",D="pointer"),it=ne==null?G:Xs(ne),b=ae==null?G:Xs(ae),G=new le(X,D+"leave",ne,a,Q),G.target=it,G.relatedTarget=b,X=null,qi(Q)===F&&(le=new le(M,D+"enter",ae,a,Q),le.target=b,le.relatedTarget=it,X=le),it=X,ne&&ae)t:{for(le=ne,M=ae,D=0,b=le;b;b=Qs(b))D++;for(b=0,X=M;X;X=Qs(X))b++;for(;0<D-b;)le=Qs(le),D--;for(;0<b-D;)M=Qs(M),b--;for(;D--;){if(le===M||M!==null&&le===M.alternate)break t;le=Qs(le),M=Qs(M)}le=null}else le=null;ne!==null&&mp(Y,G,ne,le,!1),ae!==null&&it!==null&&mp(Y,it,ae,le,!0)}}e:{if(G=F?Xs(F):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var ce=vE;else if(Kf(G))if(Yf)ce=IE;else{ce=wE;var pe=EE}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ce=TE);if(ce&&(ce=ce(n,F))){Qf(Y,ce,a,Q);break e}pe&&pe(n,G,F),n==="focusout"&&(pe=G._wrapperState)&&pe.controlled&&G.type==="number"&&Ts(G,"number",G.value)}switch(pe=F?Xs(F):window,n){case"focusin":(Kf(pe)||pe.contentEditable==="true")&&(Gs=pe,zc=F,ca=null);break;case"focusout":ca=zc=Gs=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,ip(Y,a,Q);break;case"selectionchange":if(RE)break;case"keydown":case"keyup":ip(Y,a,Q)}var me;if(at)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else qs?qf(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Hi&&a.locale!=="ko"&&(qs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&qs&&(me=ra()):(rn=Q,bs="value"in rn?rn.value:rn.textContent,qs=!0)),pe=jl(F,ve),0<pe.length&&(ve=new oa(ve,n,null,a,Q),Y.push({event:ve,listeners:pe}),me?ve.data=me:(me=Gf(a),me!==null&&(ve.data=me)))),(me=sn?mE(n,a):gE(n,a))&&(F=jl(F,"onBeforeInput"),0<F.length&&(Q=new oa("onBeforeInput","beforeinput",null,a,Q),Y.push({event:Q,listeners:F}),Q.data=me))}fp(Y,i)})}function fa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function jl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=rt(n,a),p!=null&&c.unshift(fa(n,p,d)),p=rt(n,i),p!=null&&c.push(fa(n,p,d))),n=n.return}return c}function Qs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mp(n,i,a,c,d){for(var p=i._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,F=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&F!==null&&(S=F,d?(P=rt(a,p),P!=null&&v.unshift(fa(a,P,S))):d||(P=rt(a,p),P!=null&&v.push(fa(a,P,S)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var NE=/\r\n?/g,DE=/\u0000|\uFFFD/g;function gp(n){return(typeof n=="string"?n:""+n).replace(NE,`
`).replace(DE,"")}function zl(n,i,a){if(i=gp(i),gp(n)!==i&&a)throw Error(t(425))}function Bl(){}var Kc=null,Qc=null;function Yc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,xE=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,VE=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(n){return yp.resolve(null).then(n).catch(OE)}:Xc;function OE(n){setTimeout(function(){throw n})}function Jc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Dn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Dn(i)}function Yr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function _p(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Ys,pa="__reactProps$"+Ys,wr="__reactContainer$"+Ys,Zc="__reactEvents$"+Ys,LE="__reactListeners$"+Ys,ME="__reactHandles$"+Ys;function qi(n){var i=n[Xn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[wr]||a[Xn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=_p(n);n!==null;){if(a=n[Xn])return a;n=_p(n)}return i}n=a,a=n.parentNode}return null}function ma(n){return n=n[Xn]||n[wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function $l(n){return n[pa]||null}var eh=[],Js=-1;function Xr(n){return{current:n}}function Ke(n){0>Js||(n.current=eh[Js],eh[Js]=null,Js--)}function He(n,i){Js++,eh[Js]=n.current,n.current=i}var Jr={},Vt=Xr(Jr),Kt=Xr(!1),Gi=Jr;function Zs(n,i){var a=n.type.contextTypes;if(!a)return Jr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function Wl(){Ke(Kt),Ke(Vt)}function vp(n,i,a){if(Vt.current!==Jr)throw Error(t(168));He(Vt,i),He(Kt,a)}function Ep(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Me(n)||"Unknown",d));return ie({},a,c)}function Hl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Jr,Gi=Vt.current,He(Vt,n),He(Kt,Kt.current),!0}function wp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ep(n,i,Gi),c.__reactInternalMemoizedMergedChildContext=n,Ke(Kt),Ke(Vt),He(Vt,n)):Ke(Kt),He(Kt,a)}var Tr=null,ql=!1,th=!1;function Tp(n){Tr===null?Tr=[n]:Tr.push(n)}function bE(n){ql=!0,Tp(n)}function Zr(){if(!th&&Tr!==null){th=!0;var n=0,i=ke;try{var a=Tr;for(ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Tr=null,ql=!1}catch(d){throw Tr!==null&&(Tr=Tr.slice(n+1)),xs(Fi,Zr),d}finally{ke=i,th=!1}}return null}var eo=[],to=0,Gl=null,Kl=0,mn=[],gn=0,Ki=null,Ir=1,Sr="";function Qi(n,i){eo[to++]=Kl,eo[to++]=Gl,Gl=n,Kl=i}function Ip(n,i,a){mn[gn++]=Ir,mn[gn++]=Sr,mn[gn++]=Ki,Ki=n;var c=Ir;n=Sr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var p=32-Bt(i)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Ir=1<<32-Bt(i)+d|a<<d|c,Sr=p+n}else Ir=1<<p|a<<d|c,Sr=n}function nh(n){n.return!==null&&(Qi(n,1),Ip(n,1,0))}function rh(n){for(;n===Gl;)Gl=eo[--to],eo[to]=null,Kl=eo[--to],eo[to]=null;for(;n===Ki;)Ki=mn[--gn],mn[gn]=null,Sr=mn[--gn],mn[gn]=null,Ir=mn[--gn],mn[gn]=null}var on=null,an=null,Xe=!1,On=null;function Sp(n,i){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Ap(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,on=n,an=Yr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,on=n,an=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ki!==null?{id:Ir,overflow:Sr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function ih(n){return(n.mode&1)!==0&&(n.flags&128)===0}function sh(n){if(Xe){var i=an;if(i){var a=i;if(!Ap(n,i)){if(ih(n))throw Error(t(418));i=Yr(a.nextSibling);var c=on;i&&Ap(n,i)?Sp(c,a):(n.flags=n.flags&-4097|2,Xe=!1,on=n)}}else{if(ih(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,on=n}}}function Rp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Ql(n){if(n!==on)return!1;if(!Xe)return Rp(n),Xe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Yc(n.type,n.memoizedProps)),i&&(i=an)){if(ih(n))throw Cp(),Error(t(418));for(;i;)Sp(n,i),i=Yr(i.nextSibling)}if(Rp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){an=Yr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}an=null}}else an=on?Yr(n.stateNode.nextSibling):null;return!0}function Cp(){for(var n=an;n;)n=Yr(n.nextSibling)}function no(){an=on=null,Xe=!1}function oh(n){On===null?On=[n]:On.push(n)}var FE=ge.ReactCurrentBatchConfig;function ga(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(v){var S=d.refs;v===null?delete S[p]:S[p]=v},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Yl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Pp(n){var i=n._init;return i(n._payload)}function kp(n){function i(M,D){if(n){var b=M.deletions;b===null?(M.deletions=[D],M.flags|=16):b.push(D)}}function a(M,D){if(!n)return null;for(;D!==null;)i(M,D),D=D.sibling;return null}function c(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function d(M,D){return M=ai(M,D),M.index=0,M.sibling=null,M}function p(M,D,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<D?(M.flags|=2,D):b):(M.flags|=2,D)):(M.flags|=1048576,D)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function S(M,D,b,X){return D===null||D.tag!==6?(D=Xh(b,M.mode,X),D.return=M,D):(D=d(D,b),D.return=M,D)}function P(M,D,b,X){var ce=b.type;return ce===k?Q(M,D,b.props.children,X,b.key):D!==null&&(D.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===xt&&Pp(ce)===D.type)?(X=d(D,b.props),X.ref=ga(M,D,b),X.return=M,X):(X=Eu(b.type,b.key,b.props,null,M.mode,X),X.ref=ga(M,D,b),X.return=M,X)}function F(M,D,b,X){return D===null||D.tag!==4||D.stateNode.containerInfo!==b.containerInfo||D.stateNode.implementation!==b.implementation?(D=Jh(b,M.mode,X),D.return=M,D):(D=d(D,b.children||[]),D.return=M,D)}function Q(M,D,b,X,ce){return D===null||D.tag!==7?(D=rs(b,M.mode,X,ce),D.return=M,D):(D=d(D,b),D.return=M,D)}function Y(M,D,b){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Xh(""+D,M.mode,b),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Oe:return b=Eu(D.type,D.key,D.props,null,M.mode,b),b.ref=ga(M,null,D),b.return=M,b;case Te:return D=Jh(D,M.mode,b),D.return=M,D;case xt:var X=D._init;return Y(M,X(D._payload),b)}if(dr(D)||fe(D))return D=rs(D,M.mode,b,null),D.return=M,D;Yl(M,D)}return null}function G(M,D,b,X){var ce=D!==null?D.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ce!==null?null:S(M,D,""+b,X);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Oe:return b.key===ce?P(M,D,b,X):null;case Te:return b.key===ce?F(M,D,b,X):null;case xt:return ce=b._init,G(M,D,ce(b._payload),X)}if(dr(b)||fe(b))return ce!==null?null:Q(M,D,b,X,null);Yl(M,b)}return null}function ne(M,D,b,X,ce){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(b)||null,S(D,M,""+X,ce);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Oe:return M=M.get(X.key===null?b:X.key)||null,P(D,M,X,ce);case Te:return M=M.get(X.key===null?b:X.key)||null,F(D,M,X,ce);case xt:var pe=X._init;return ne(M,D,b,pe(X._payload),ce)}if(dr(X)||fe(X))return M=M.get(b)||null,Q(D,M,X,ce,null);Yl(D,X)}return null}function ae(M,D,b,X){for(var ce=null,pe=null,me=D,ve=D=0,Tt=null;me!==null&&ve<b.length;ve++){me.index>ve?(Tt=me,me=null):Tt=me.sibling;var Le=G(M,me,b[ve],X);if(Le===null){me===null&&(me=Tt);break}n&&me&&Le.alternate===null&&i(M,me),D=p(Le,D,ve),pe===null?ce=Le:pe.sibling=Le,pe=Le,me=Tt}if(ve===b.length)return a(M,me),Xe&&Qi(M,ve),ce;if(me===null){for(;ve<b.length;ve++)me=Y(M,b[ve],X),me!==null&&(D=p(me,D,ve),pe===null?ce=me:pe.sibling=me,pe=me);return Xe&&Qi(M,ve),ce}for(me=c(M,me);ve<b.length;ve++)Tt=ne(me,M,ve,b[ve],X),Tt!==null&&(n&&Tt.alternate!==null&&me.delete(Tt.key===null?ve:Tt.key),D=p(Tt,D,ve),pe===null?ce=Tt:pe.sibling=Tt,pe=Tt);return n&&me.forEach(function(li){return i(M,li)}),Xe&&Qi(M,ve),ce}function le(M,D,b,X){var ce=fe(b);if(typeof ce!="function")throw Error(t(150));if(b=ce.call(b),b==null)throw Error(t(151));for(var pe=ce=null,me=D,ve=D=0,Tt=null,Le=b.next();me!==null&&!Le.done;ve++,Le=b.next()){me.index>ve?(Tt=me,me=null):Tt=me.sibling;var li=G(M,me,Le.value,X);if(li===null){me===null&&(me=Tt);break}n&&me&&li.alternate===null&&i(M,me),D=p(li,D,ve),pe===null?ce=li:pe.sibling=li,pe=li,me=Tt}if(Le.done)return a(M,me),Xe&&Qi(M,ve),ce;if(me===null){for(;!Le.done;ve++,Le=b.next())Le=Y(M,Le.value,X),Le!==null&&(D=p(Le,D,ve),pe===null?ce=Le:pe.sibling=Le,pe=Le);return Xe&&Qi(M,ve),ce}for(me=c(M,me);!Le.done;ve++,Le=b.next())Le=ne(me,M,ve,Le.value,X),Le!==null&&(n&&Le.alternate!==null&&me.delete(Le.key===null?ve:Le.key),D=p(Le,D,ve),pe===null?ce=Le:pe.sibling=Le,pe=Le);return n&&me.forEach(function(yw){return i(M,yw)}),Xe&&Qi(M,ve),ce}function it(M,D,b,X){if(typeof b=="object"&&b!==null&&b.type===k&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Oe:e:{for(var ce=b.key,pe=D;pe!==null;){if(pe.key===ce){if(ce=b.type,ce===k){if(pe.tag===7){a(M,pe.sibling),D=d(pe,b.props.children),D.return=M,M=D;break e}}else if(pe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===xt&&Pp(ce)===pe.type){a(M,pe.sibling),D=d(pe,b.props),D.ref=ga(M,pe,b),D.return=M,M=D;break e}a(M,pe);break}else i(M,pe);pe=pe.sibling}b.type===k?(D=rs(b.props.children,M.mode,X,b.key),D.return=M,M=D):(X=Eu(b.type,b.key,b.props,null,M.mode,X),X.ref=ga(M,D,b),X.return=M,M=X)}return v(M);case Te:e:{for(pe=b.key;D!==null;){if(D.key===pe)if(D.tag===4&&D.stateNode.containerInfo===b.containerInfo&&D.stateNode.implementation===b.implementation){a(M,D.sibling),D=d(D,b.children||[]),D.return=M,M=D;break e}else{a(M,D);break}else i(M,D);D=D.sibling}D=Jh(b,M.mode,X),D.return=M,M=D}return v(M);case xt:return pe=b._init,it(M,D,pe(b._payload),X)}if(dr(b))return ae(M,D,b,X);if(fe(b))return le(M,D,b,X);Yl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,D!==null&&D.tag===6?(a(M,D.sibling),D=d(D,b),D.return=M,M=D):(a(M,D),D=Xh(b,M.mode,X),D.return=M,M=D),v(M)):a(M,D)}return it}var ro=kp(!0),Np=kp(!1),Xl=Xr(null),Jl=null,io=null,ah=null;function lh(){ah=io=Jl=null}function uh(n){var i=Xl.current;Ke(Xl),n._currentValue=i}function ch(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function so(n,i){Jl=n,ah=io=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Yt=!0),n.firstContext=null)}function yn(n){var i=n._currentValue;if(ah!==n)if(n={context:n,memoizedValue:i,next:null},io===null){if(Jl===null)throw Error(t(308));io=n,Jl.dependencies={lanes:0,firstContext:n}}else io=io.next=n;return i}var Yi=null;function hh(n){Yi===null?Yi=[n]:Yi.push(n)}function Dp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,hh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ar(n,c)}function Ar(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ei=!1;function dh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Rr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ti(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ar(n,a)}return d=c.interleaved,d===null?(i.next=i,hh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ar(n,a)}function Zl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Wr(n,a)}}function Vp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function eu(n,i,a,c){var d=n.updateQueue;ei=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,F=P.next;P.next=null,v===null?p=F:v.next=F,v=P;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==v&&(S===null?Q.firstBaseUpdate=F:S.next=F,Q.lastBaseUpdate=P))}if(p!==null){var Y=d.baseState;v=0,Q=F=P=null,S=p;do{var G=S.lane,ne=S.eventTime;if((c&G)===G){Q!==null&&(Q=Q.next={eventTime:ne,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ae=n,le=S;switch(G=i,ne=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){Y=ae.call(ne,Y,G);break e}Y=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,G=typeof ae=="function"?ae.call(ne,Y,G):ae,G==null)break e;Y=ie({},Y,G);break e;case 2:ei=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[S]:G.push(S))}else ne={eventTime:ne,lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(F=Q=ne,P=Y):Q=Q.next=ne,v|=G;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;G=S,S=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=F,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Zi|=v,n.lanes=v,n.memoizedState=Y}}function Op(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ya={},Jn=Xr(ya),_a=Xr(ya),va=Xr(ya);function Xi(n){if(n===ya)throw Error(t(174));return n}function fh(n,i){switch(He(va,i),He(_a,n),He(Jn,ya),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ft(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ft(i,n)}Ke(Jn),He(Jn,i)}function oo(){Ke(Jn),Ke(_a),Ke(va)}function Lp(n){Xi(va.current);var i=Xi(Jn.current),a=ft(i,n.type);i!==a&&(He(_a,n),He(Jn,a))}function ph(n){_a.current===n&&(Ke(Jn),Ke(_a))}var Je=Xr(0);function tu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var mh=[];function gh(){for(var n=0;n<mh.length;n++)mh[n]._workInProgressVersionPrimary=null;mh.length=0}var nu=ge.ReactCurrentDispatcher,yh=ge.ReactCurrentBatchConfig,Ji=0,Ze=null,mt=null,Et=null,ru=!1,Ea=!1,wa=0,UE=0;function Ot(){throw Error(t(321))}function _h(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Vn(n[a],i[a]))return!1;return!0}function vh(n,i,a,c,d,p){if(Ji=p,Ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,nu.current=n===null||n.memoizedState===null?$E:WE,n=a(c,d),Ea){p=0;do{if(Ea=!1,wa=0,25<=p)throw Error(t(301));p+=1,Et=mt=null,i.updateQueue=null,nu.current=HE,n=a(c,d)}while(Ea)}if(nu.current=ou,i=mt!==null&&mt.next!==null,Ji=0,Et=mt=Ze=null,ru=!1,i)throw Error(t(300));return n}function Eh(){var n=wa!==0;return wa=0,n}function Zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=n:Et=Et.next=n,Et}function _n(){if(mt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var i=Et===null?Ze.memoizedState:Et.next;if(i!==null)Et=i,mt=n;else{if(n===null)throw Error(t(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Et===null?Ze.memoizedState=Et=n:Et=Et.next=n}return Et}function Ta(n,i){return typeof i=="function"?i(n):i}function wh(n){var i=_n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var S=v=null,P=null,F=p;do{var Q=F.lane;if((Ji&Q)===Q)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Y={lane:Q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(S=P=Y,v=c):P=P.next=Y,Ze.lanes|=Q,Zi|=Q}F=F.next}while(F!==null&&F!==p);P===null?v=c:P.next=S,Vn(c,i.memoizedState)||(Yt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Ze.lanes|=p,Zi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Th(n){var i=_n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);Vn(p,i.memoizedState)||(Yt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function Mp(){}function bp(n,i){var a=Ze,c=_n(),d=i(),p=!Vn(c.memoizedState,d);if(p&&(c.memoizedState=d,Yt=!0),c=c.queue,Ih(jp.bind(null,a,c,n),[n]),c.getSnapshot!==i||p||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Ia(9,Up.bind(null,a,c,d,i),void 0,null),wt===null)throw Error(t(349));(Ji&30)!==0||Fp(a,i,d)}return d}function Fp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Up(n,i,a,c){i.value=a,i.getSnapshot=c,zp(i)&&Bp(n)}function jp(n,i,a){return a(function(){zp(i)&&Bp(n)})}function zp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Vn(n,a)}catch{return!0}}function Bp(n){var i=Ar(n,1);i!==null&&Fn(i,n,1,-1)}function $p(n){var i=Zn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:n},i.queue=n,n=n.dispatch=BE.bind(null,Ze,n),[i.memoizedState,n]}function Ia(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Wp(){return _n().memoizedState}function iu(n,i,a,c){var d=Zn();Ze.flags|=n,d.memoizedState=Ia(1|i,a,void 0,c===void 0?null:c)}function su(n,i,a,c){var d=_n();c=c===void 0?null:c;var p=void 0;if(mt!==null){var v=mt.memoizedState;if(p=v.destroy,c!==null&&_h(c,v.deps)){d.memoizedState=Ia(i,a,p,c);return}}Ze.flags|=n,d.memoizedState=Ia(1|i,a,p,c)}function Hp(n,i){return iu(8390656,8,n,i)}function Ih(n,i){return su(2048,8,n,i)}function qp(n,i){return su(4,2,n,i)}function Gp(n,i){return su(4,4,n,i)}function Kp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Qp(n,i,a){return a=a!=null?a.concat([n]):null,su(4,4,Kp.bind(null,i,n),a)}function Sh(){}function Yp(n,i){var a=_n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&_h(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Xp(n,i){var a=_n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&_h(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Jp(n,i,a){return(Ji&21)===0?(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=a):(Vn(a,i)||(a=zi(),Ze.lanes|=a,Zi|=a,n.baseState=!0),i)}function jE(n,i){var a=ke;ke=a!==0&&4>a?a:4,n(!0);var c=yh.transition;yh.transition={};try{n(!1),i()}finally{ke=a,yh.transition=c}}function Zp(){return _n().memoizedState}function zE(n,i,a){var c=si(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},em(n))tm(i,a);else if(a=Dp(n,i,a,c),a!==null){var d=Ht();Fn(a,n,c,d),nm(a,i,c)}}function BE(n,i,a){var c=si(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(em(n))tm(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var v=i.lastRenderedState,S=p(v,a);if(d.hasEagerState=!0,d.eagerState=S,Vn(S,v)){var P=i.interleaved;P===null?(d.next=d,hh(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=Dp(n,i,d,c),a!==null&&(d=Ht(),Fn(a,n,c,d),nm(a,i,c))}}function em(n){var i=n.alternate;return n===Ze||i!==null&&i===Ze}function tm(n,i){Ea=ru=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function nm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Wr(n,a)}}var ou={readContext:yn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},$E={readContext:yn,useCallback:function(n,i){return Zn().memoizedState=[n,i===void 0?null:i],n},useContext:yn,useEffect:Hp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,iu(4194308,4,Kp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return iu(4194308,4,n,i)},useInsertionEffect:function(n,i){return iu(4,2,n,i)},useMemo:function(n,i){var a=Zn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Zn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=zE.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var i=Zn();return n={current:n},i.memoizedState=n},useState:$p,useDebugValue:Sh,useDeferredValue:function(n){return Zn().memoizedState=n},useTransition:function(){var n=$p(!1),i=n[0];return n=jE.bind(null,n[1]),Zn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ze,d=Zn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wt===null)throw Error(t(349));(Ji&30)!==0||Fp(c,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Hp(jp.bind(null,c,p,n),[n]),c.flags|=2048,Ia(9,Up.bind(null,c,p,a,i),void 0,null),a},useId:function(){var n=Zn(),i=wt.identifierPrefix;if(Xe){var a=Sr,c=Ir;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=UE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},WE={readContext:yn,useCallback:Yp,useContext:yn,useEffect:Ih,useImperativeHandle:Qp,useInsertionEffect:qp,useLayoutEffect:Gp,useMemo:Xp,useReducer:wh,useRef:Wp,useState:function(){return wh(Ta)},useDebugValue:Sh,useDeferredValue:function(n){var i=_n();return Jp(i,mt.memoizedState,n)},useTransition:function(){var n=wh(Ta)[0],i=_n().memoizedState;return[n,i]},useMutableSource:Mp,useSyncExternalStore:bp,useId:Zp,unstable_isNewReconciler:!1},HE={readContext:yn,useCallback:Yp,useContext:yn,useEffect:Ih,useImperativeHandle:Qp,useInsertionEffect:qp,useLayoutEffect:Gp,useMemo:Xp,useReducer:Th,useRef:Wp,useState:function(){return Th(Ta)},useDebugValue:Sh,useDeferredValue:function(n){var i=_n();return mt===null?i.memoizedState=n:Jp(i,mt.memoizedState,n)},useTransition:function(){var n=Th(Ta)[0],i=_n().memoizedState;return[n,i]},useMutableSource:Mp,useSyncExternalStore:bp,useId:Zp,unstable_isNewReconciler:!1};function Ln(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Ah(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ie({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var au={isMounted:function(n){return(n=n._reactInternals)?Rn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=si(n),p=Rr(c,d);p.payload=i,a!=null&&(p.callback=a),i=ti(n,p,d),i!==null&&(Fn(i,n,d,c),Zl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=si(n),p=Rr(c,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=ti(n,p,d),i!==null&&(Fn(i,n,d,c),Zl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ht(),c=si(n),d=Rr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ti(n,d,c),i!==null&&(Fn(i,n,c,a),Zl(i,n,c))}};function rm(n,i,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):i.prototype&&i.prototype.isPureReactComponent?!ua(a,c)||!ua(d,p):!0}function im(n,i,a){var c=!1,d=Jr,p=i.contextType;return typeof p=="object"&&p!==null?p=yn(p):(d=Qt(i)?Gi:Vt.current,c=i.contextTypes,p=(c=c!=null)?Zs(n,d):Jr),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=au,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function sm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&au.enqueueReplaceState(i,i.state,null)}function Rh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},dh(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=yn(p):(p=Qt(i)?Gi:Vt.current,d.context=Zs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Ah(n,i,p,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&au.enqueueReplaceState(d,d.state,null),eu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ao(n,i){try{var a="",c=i;do a+=Ae(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Ch(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Ph(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var qE=typeof WeakMap=="function"?WeakMap:Map;function om(n,i,a){a=Rr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){pu||(pu=!0,$h=c),Ph(n,i)},a}function am(n,i,a){a=Rr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Ph(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Ph(n,i),typeof c!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function lm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new qE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=ow.bind(null,n,i,a),i.then(n,n))}function um(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function cm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Rr(-1,1),i.tag=2,ti(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var GE=ge.ReactCurrentOwner,Yt=!1;function Wt(n,i,a,c){i.child=n===null?Np(i,null,a,c):ro(i,n.child,a,c)}function hm(n,i,a,c,d){a=a.render;var p=i.ref;return so(i,d),c=vh(n,i,a,c,p,d),a=Eh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Cr(n,i,d)):(Xe&&a&&nh(i),i.flags|=1,Wt(n,i,c,d),i.child)}function dm(n,i,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Yh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,fm(n,i,p,c,d)):(n=Eu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:ua,a(v,c)&&n.ref===i.ref)return Cr(n,i,d)}return i.flags|=1,n=ai(p,c),n.ref=i.ref,n.return=i,i.child=n}function fm(n,i,a,c,d){if(n!==null){var p=n.memoizedProps;if(ua(p,c)&&n.ref===i.ref)if(Yt=!1,i.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Yt=!0);else return i.lanes=n.lanes,Cr(n,i,d)}return kh(n,i,a,c,d)}function pm(n,i,a){var c=i.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(uo,ln),ln|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,He(uo,ln),ln|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,He(uo,ln),ln|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,He(uo,ln),ln|=c;return Wt(n,i,d,a),i.child}function mm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function kh(n,i,a,c,d){var p=Qt(a)?Gi:Vt.current;return p=Zs(i,p),so(i,d),a=vh(n,i,a,c,p,d),c=Eh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Cr(n,i,d)):(Xe&&c&&nh(i),i.flags|=1,Wt(n,i,a,d),i.child)}function gm(n,i,a,c,d){if(Qt(a)){var p=!0;Hl(i)}else p=!1;if(so(i,d),i.stateNode===null)uu(n,i),im(i,a,c),Rh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var P=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=yn(F):(F=Qt(a)?Gi:Vt.current,F=Zs(i,F));var Q=a.getDerivedStateFromProps,Y=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==F)&&sm(i,v,c,F),ei=!1;var G=i.memoizedState;v.state=G,eu(i,c,v,d),P=i.memoizedState,S!==c||G!==P||Kt.current||ei?(typeof Q=="function"&&(Ah(i,a,Q,c),P=i.memoizedState),(S=ei||rm(i,a,S,c,G,P,F))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=F,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,xp(n,i),S=i.memoizedProps,F=i.type===i.elementType?S:Ln(i.type,S),v.props=F,Y=i.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=yn(P):(P=Qt(a)?Gi:Vt.current,P=Zs(i,P));var ne=a.getDerivedStateFromProps;(Q=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Y||G!==P)&&sm(i,v,c,P),ei=!1,G=i.memoizedState,v.state=G,eu(i,c,v,d);var ae=i.memoizedState;S!==Y||G!==ae||Kt.current||ei?(typeof ne=="function"&&(Ah(i,a,ne,c),ae=i.memoizedState),(F=ei||rm(i,a,F,c,G,ae,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),v.props=c,v.state=ae,v.context=P,c=F):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Nh(n,i,a,c,p,d)}function Nh(n,i,a,c,d,p){mm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&wp(i,a,!1),Cr(n,i,p);c=i.stateNode,GE.current=i;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=ro(i,n.child,null,p),i.child=ro(i,null,S,p)):Wt(n,i,S,p),i.memoizedState=c.state,d&&wp(i,a,!0),i.child}function ym(n){var i=n.stateNode;i.pendingContext?vp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&vp(n,i.context,!1),fh(n,i.containerInfo)}function _m(n,i,a,c,d){return no(),oh(d),i.flags|=256,Wt(n,i,a,c),i.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function xh(n){return{baseLanes:n,cachePool:null,transitions:null}}function vm(n,i,a){var c=i.pendingProps,d=Je.current,p=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Je,d&1),n===null)return sh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=i.mode,p=i.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=wu(v,c,0,null),n=rs(n,c,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=xh(a),i.memoizedState=Dh,n):Vh(i,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return KE(n,i,v,c,S,d,a);if(p){p=c.fallback,v=i.mode,d=n.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=ai(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?p=ai(S,p):(p=rs(p,v,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,v=n.child.memoizedState,v=v===null?xh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,i.memoizedState=Dh,c}return p=n.child,n=p.sibling,c=ai(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Vh(n,i){return i=wu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function lu(n,i,a,c){return c!==null&&oh(c),ro(i,n.child,null,a),n=Vh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function KE(n,i,a,c,d,p,v){if(a)return i.flags&256?(i.flags&=-257,c=Ch(Error(t(422))),lu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=wu({mode:"visible",children:c.children},d,0,null),p=rs(p,d,v,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&ro(i,n.child,null,v),i.child.memoizedState=xh(v),i.memoizedState=Dh,p);if((i.mode&1)===0)return lu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,p=Error(t(419)),c=Ch(p,c,void 0),lu(n,i,v,c)}if(S=(v&n.childLanes)!==0,Yt||S){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ar(n,d),Fn(c,n,d,-1))}return Qh(),c=Ch(Error(t(421))),lu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=aw.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,an=Yr(d.nextSibling),on=i,Xe=!0,On=null,n!==null&&(mn[gn++]=Ir,mn[gn++]=Sr,mn[gn++]=Ki,Ir=n.id,Sr=n.overflow,Ki=i),i=Vh(i,c.children),i.flags|=4096,i)}function Em(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ch(n.return,i,a)}function Oh(n,i,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function wm(n,i,a){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(Wt(n,i,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Em(n,a,i);else if(n.tag===19)Em(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Je,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&tu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Oh(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&tu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Oh(i,!0,a,null,p);break;case"together":Oh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function uu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Cr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Zi|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ai(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ai(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function QE(n,i,a){switch(i.tag){case 3:ym(i),no();break;case 5:Lp(i);break;case 1:Qt(i.type)&&Hl(i);break;case 4:fh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;He(Xl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(He(Je,Je.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?vm(n,i,a):(He(Je,Je.current&1),n=Cr(n,i,a),n!==null?n.sibling:null);He(Je,Je.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return wm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Je,Je.current),c)break;return null;case 22:case 23:return i.lanes=0,pm(n,i,a)}return Cr(n,i,a)}var Tm,Lh,Im,Sm;Tm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Lh=function(){},Im=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Xi(Jn.current);var p=null;switch(a){case"input":d=Ni(n,d),c=Ni(n,c),p=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),p=[];break;case"textarea":d=Fo(n,d),c=Fo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Bl)}Wo(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var S=d[F];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var P=c[F];if(S=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&P!==S&&(P!=null||S!=null))if(F==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(F,a)),a=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(p=p||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&Ge("scroll",n),p||S===P||(p=[])):(p=p||[]).push(F,P))}a&&(p=p||[]).push("style",a);var F=p;(i.updateQueue=F)&&(i.flags|=4)}},Sm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Sa(n,i){if(!Xe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function YE(n,i,a){var c=i.pendingProps;switch(rh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Qt(i.type)&&Wl(),Lt(i),null;case 3:return c=i.stateNode,oo(),Ke(Kt),Ke(Vt),gh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ql(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,On!==null&&(qh(On),On=null))),Lh(n,i),Lt(i),null;case 5:ph(i);var d=Xi(va.current);if(a=i.type,n!==null&&i.stateNode!=null)Im(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=Xi(Jn.current),Ql(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[Xn]=i,c[pa]=p,n=(i.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(d=0;d<ha.length;d++)Ge(ha[d],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":ws(c,p),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ge("invalid",c);break;case"textarea":Is(c,p),Ge("invalid",c)}Wo(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var S=p[v];v==="children"?typeof S=="string"?c.textContent!==S&&(p.suppressHydrationWarning!==!0&&zl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(p.suppressHydrationWarning!==!0&&zl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Ge("scroll",c)}switch(a){case"input":hr(c),fl(c,p,!0);break;case"textarea":hr(c),Uo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Bl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=dt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Xn]=i,n[pa]=c,Tm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Ho(a,c),a){case"dialog":Ge("cancel",n),Ge("close",n),d=c;break;case"iframe":case"object":case"embed":Ge("load",n),d=c;break;case"video":case"audio":for(d=0;d<ha.length;d++)Ge(ha[d],n);d=c;break;case"source":Ge("error",n),d=c;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),d=c;break;case"details":Ge("toggle",n),d=c;break;case"input":ws(n,c),d=Ni(n,c),Ge("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Ge("invalid",n);break;case"textarea":Is(n,c),d=Fo(n,c),Ge("invalid",n);break;default:d=c}Wo(a,d),S=d;for(p in S)if(S.hasOwnProperty(p)){var P=S[p];p==="style"?Bo(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&jo(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Ur(n,P):typeof P=="number"&&Ur(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&Ge("scroll",n):P!=null&&ue(n,p,P,v))}switch(a){case"input":hr(n),fl(n,c,!1);break;case"textarea":hr(n),Uo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?fr(n,!!c.multiple,p,!1):c.defaultValue!=null&&fr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Bl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)Sm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Xi(va.current),Xi(Jn.current),Ql(i)){if(c=i.stateNode,a=i.memoizedProps,c[Xn]=i,(p=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:zl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zl(c.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Xn]=i,i.stateNode=c}return Lt(i),null;case 13:if(Ke(Je),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&an!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Cp(),no(),i.flags|=98560,p=!1;else if(p=Ql(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Xn]=i}else no(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Lt(i),p=!1}else On!==null&&(qh(On),On=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Je.current&1)!==0?gt===0&&(gt=3):Qh())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return oo(),Lh(n,i),n===null&&da(i.stateNode.containerInfo),Lt(i),null;case 10:return uh(i.type._context),Lt(i),null;case 17:return Qt(i.type)&&Wl(),Lt(i),null;case 19:if(Ke(Je),p=i.memoizedState,p===null)return Lt(i),null;if(c=(i.flags&128)!==0,v=p.rendering,v===null)if(c)Sa(p,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=tu(n),v!==null){for(i.flags|=128,Sa(p,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),i.child}n=n.sibling}p.tail!==null&&We()>co&&(i.flags|=128,c=!0,Sa(p,!1),i.lanes=4194304)}else{if(!c)if(n=tu(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Sa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Xe)return Lt(i),null}else 2*We()-p.renderingStartTime>co&&a!==1073741824&&(i.flags|=128,c=!0,Sa(p,!1),i.lanes=4194304);p.isBackwards?(v.sibling=i.child,i.child=v):(a=p.last,a!==null?a.sibling=v:i.child=v,p.last=v)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=We(),i.sibling=null,a=Je.current,He(Je,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return Kh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ln&1073741824)!==0&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function XE(n,i){switch(rh(i),i.tag){case 1:return Qt(i.type)&&Wl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return oo(),Ke(Kt),Ke(Vt),gh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ph(i),null;case 13:if(Ke(Je),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));no()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ke(Je),null;case 4:return oo(),null;case 10:return uh(i.type._context),null;case 22:case 23:return Kh(),null;case 24:return null;default:return null}}var cu=!1,Mt=!1,JE=typeof WeakSet=="function"?WeakSet:Set,se=null;function lo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,i,c)}else a.current=null}function Mh(n,i,a){try{a()}catch(c){tt(n,i,c)}}var Am=!1;function ZE(n,i){if(Kc=Gr,n=rp(),jc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,F=0,Q=0,Y=n,G=null;t:for(;;){for(var ne;Y!==a||d!==0&&Y.nodeType!==3||(S=v+d),Y!==p||c!==0&&Y.nodeType!==3||(P=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(ne=Y.firstChild)!==null;)G=Y,Y=ne;for(;;){if(Y===n)break t;if(G===a&&++F===d&&(S=v),G===p&&++Q===c&&(P=v),(ne=Y.nextSibling)!==null)break;Y=G,G=Y.parentNode}Y=ne}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qc={focusedElem:n,selectionRange:a},Gr=!1,se=i;se!==null;)if(i=se,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,se=n;else for(;se!==null;){i=se;try{var ae=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,it=ae.memoizedState,M=i.stateNode,D=M.getSnapshotBeforeUpdate(i.elementType===i.type?le:Ln(i.type,le),it);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){tt(i,i.return,X)}if(n=i.sibling,n!==null){n.return=i.return,se=n;break}se=i.return}return ae=Am,Am=!1,ae}function Aa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Mh(i,a,p)}d=d.next}while(d!==c)}}function hu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function bh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Rm(n){var i=n.alternate;i!==null&&(n.alternate=null,Rm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Xn],delete i[pa],delete i[Zc],delete i[LE],delete i[ME])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Cm(n){return n.tag===5||n.tag===3||n.tag===4}function Pm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Bl));else if(c!==4&&(n=n.child,n!==null))for(Fh(n,i,a),n=n.sibling;n!==null;)Fh(n,i,a),n=n.sibling}function Uh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Uh(n,i,a),n=n.sibling;n!==null;)Uh(n,i,a),n=n.sibling}var Rt=null,Mn=!1;function ni(n,i,a){for(a=a.child;a!==null;)km(n,i,a),a=a.sibling}function km(n,i,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Ui,a)}catch{}switch(a.tag){case 5:Mt||lo(a,i);case 6:var c=Rt,d=Mn;Rt=null,ni(n,i,a),Rt=c,Mn=d,Rt!==null&&(Mn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Mn?(n=Rt,a=a.stateNode,n.nodeType===8?Jc(n.parentNode,a):n.nodeType===1&&Jc(n,a),Dn(n)):Jc(Rt,a.stateNode));break;case 4:c=Rt,d=Mn,Rt=a.stateNode.containerInfo,Mn=!0,ni(n,i,a),Rt=c,Mn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Mh(a,i,v),d=d.next}while(d!==c)}ni(n,i,a);break;case 1:if(!Mt&&(lo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){tt(a,i,S)}ni(n,i,a);break;case 21:ni(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ni(n,i,a),Mt=c):ni(n,i,a);break;default:ni(n,i,a)}}function Nm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new JE),i.forEach(function(c){var d=lw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function bn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:Rt=S.stateNode,Mn=!1;break e;case 3:Rt=S.stateNode.containerInfo,Mn=!0;break e;case 4:Rt=S.stateNode.containerInfo,Mn=!0;break e}S=S.return}if(Rt===null)throw Error(t(160));km(p,v,d),Rt=null,Mn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(F){tt(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Dm(i,n),i=i.sibling}function Dm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(bn(i,n),er(n),c&4){try{Aa(3,n,n.return),hu(3,n)}catch(le){tt(n,n.return,le)}try{Aa(5,n,n.return)}catch(le){tt(n,n.return,le)}}break;case 1:bn(i,n),er(n),c&512&&a!==null&&lo(a,a.return);break;case 5:if(bn(i,n),er(n),c&512&&a!==null&&lo(a,a.return),n.flags&32){var d=n.stateNode;try{Ur(d,"")}catch(le){tt(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,S=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{S==="input"&&p.type==="radio"&&p.name!=null&&Mo(d,p),Ho(S,v);var F=Ho(S,p);for(v=0;v<P.length;v+=2){var Q=P[v],Y=P[v+1];Q==="style"?Bo(d,Y):Q==="dangerouslySetInnerHTML"?jo(d,Y):Q==="children"?Ur(d,Y):ue(d,Q,Y,F)}switch(S){case"input":bo(d,p);break;case"textarea":Ss(d,p);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ne=p.value;ne!=null?fr(d,!!p.multiple,ne,!1):G!==!!p.multiple&&(p.defaultValue!=null?fr(d,!!p.multiple,p.defaultValue,!0):fr(d,!!p.multiple,p.multiple?[]:"",!1))}d[pa]=p}catch(le){tt(n,n.return,le)}}break;case 6:if(bn(i,n),er(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(le){tt(n,n.return,le)}}break;case 3:if(bn(i,n),er(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(i.containerInfo)}catch(le){tt(n,n.return,le)}break;case 4:bn(i,n),er(n);break;case 13:bn(i,n),er(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Bh=We())),c&4&&Nm(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(F=Mt)||Q,bn(i,n),Mt=F):bn(i,n),er(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!Q&&(n.mode&1)!==0)for(se=n,Q=n.child;Q!==null;){for(Y=se=Q;se!==null;){switch(G=se,ne=G.child,G.tag){case 0:case 11:case 14:case 15:Aa(4,G,G.return);break;case 1:lo(G,G.return);var ae=G.stateNode;if(typeof ae.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(le){tt(c,a,le)}}break;case 5:lo(G,G.return);break;case 22:if(G.memoizedState!==null){Om(Y);continue}}ne!==null?(ne.return=G,se=ne):Om(Y)}Q=Q.sibling}e:for(Q=null,Y=n;;){if(Y.tag===5){if(Q===null){Q=Y;try{d=Y.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(S=Y.stateNode,P=Y.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=zo("display",v))}catch(le){tt(n,n.return,le)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=F?"":Y.memoizedProps}catch(le){tt(n,n.return,le)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:bn(i,n),er(n),c&4&&Nm(n);break;case 21:break;default:bn(i,n),er(n)}}function er(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Cm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ur(d,""),c.flags&=-33);var p=Pm(n);Uh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Pm(n);Fh(n,S,v);break;default:throw Error(t(161))}}catch(P){tt(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function ew(n,i,a){se=n,xm(n)}function xm(n,i,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||cu;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Mt;S=cu;var F=Mt;if(cu=v,(Mt=P)&&!F)for(se=d;se!==null;)v=se,P=v.child,v.tag===22&&v.memoizedState!==null?Lm(d):P!==null?(P.return=v,se=P):Lm(d);for(;p!==null;)se=p,xm(p),p=p.sibling;se=d,cu=S,Mt=F}Vm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):Vm(n)}}function Vm(n){for(;se!==null;){var i=se;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mt||hu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Ln(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Op(i,p,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Op(i,v,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var Q=F.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&Dn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&bh(i)}catch(G){tt(i,i.return,G)}}if(i===n){se=null;break}if(a=i.sibling,a!==null){a.return=i.return,se=a;break}se=i.return}}function Om(n){for(;se!==null;){var i=se;if(i===n){se=null;break}var a=i.sibling;if(a!==null){a.return=i.return,se=a;break}se=i.return}}function Lm(n){for(;se!==null;){var i=se;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{hu(4,i)}catch(P){tt(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){tt(i,d,P)}}var p=i.return;try{bh(i)}catch(P){tt(i,p,P)}break;case 5:var v=i.return;try{bh(i)}catch(P){tt(i,v,P)}}}catch(P){tt(i,i.return,P)}if(i===n){se=null;break}var S=i.sibling;if(S!==null){S.return=i.return,se=S;break}se=i.return}}var tw=Math.ceil,du=ge.ReactCurrentDispatcher,jh=ge.ReactCurrentOwner,vn=ge.ReactCurrentBatchConfig,Ve=0,wt=null,lt=null,Ct=0,ln=0,uo=Xr(0),gt=0,Ra=null,Zi=0,fu=0,zh=0,Ca=null,Xt=null,Bh=0,co=1/0,Pr=null,pu=!1,$h=null,ri=null,mu=!1,ii=null,gu=0,Pa=0,Wh=null,yu=-1,_u=0;function Ht(){return(Ve&6)!==0?We():yu!==-1?yu:yu=We()}function si(n){return(n.mode&1)===0?1:(Ve&2)!==0&&Ct!==0?Ct&-Ct:FE.transition!==null?(_u===0&&(_u=zi()),_u):(n=ke,n!==0||(n=window.event,n=n===void 0?16:na(n.type)),n)}function Fn(n,i,a,c){if(50<Pa)throw Pa=0,Wh=null,Error(t(185));$r(n,a,c),((Ve&2)===0||n!==wt)&&(n===wt&&((Ve&2)===0&&(fu|=a),gt===4&&oi(n,Ct)),Jt(n,c),a===1&&Ve===0&&(i.mode&1)===0&&(co=We()+500,ql&&Zr()))}function Jt(n,i){var a=n.callbackNode;gr(n,i);var c=ji(n,n===wt?Ct:0);if(c===0)a!==null&&Xo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Xo(a),i===1)n.tag===0?bE(bm.bind(null,n)):Tp(bm.bind(null,n)),VE(function(){(Ve&6)===0&&Zr()}),a=null;else{switch(Hr(c)){case 1:a=Fi;break;case 4:a=jr;break;case 16:a=dn;break;case 536870912:a=_l;break;default:a=dn}a=Hm(a,Mm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Mm(n,i){if(yu=-1,_u=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ho()&&n.callbackNode!==a)return null;var c=ji(n,n===wt?Ct:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=vu(n,c);else{i=c;var d=Ve;Ve|=2;var p=Um();(wt!==n||Ct!==i)&&(Pr=null,co=We()+500,ts(n,i));do try{iw();break}catch(S){Fm(n,S)}while(!0);lh(),du.current=p,Ve=d,lt!==null?i=0:(wt=null,Ct=0,i=gt)}if(i!==0){if(i===2&&(d=nn(n),d!==0&&(c=d,i=Hh(n,d))),i===1)throw a=Ra,ts(n,0),oi(n,c),Jt(n,We()),a;if(i===6)oi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!nw(d)&&(i=vu(n,c),i===2&&(p=nn(n),p!==0&&(c=p,i=Hh(n,p))),i===1))throw a=Ra,ts(n,0),oi(n,c),Jt(n,We()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ns(n,Xt,Pr);break;case 3:if(oi(n,c),(c&130023424)===c&&(i=Bh+500-We(),10<i)){if(ji(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Xc(ns.bind(null,n,Xt,Pr),i);break}ns(n,Xt,Pr);break;case 4:if(oi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Bt(c);p=1<<v,v=i[v],v>d&&(d=v),c&=~p}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*tw(c/1960))-c,10<c){n.timeoutHandle=Xc(ns.bind(null,n,Xt,Pr),c);break}ns(n,Xt,Pr);break;case 5:ns(n,Xt,Pr);break;default:throw Error(t(329))}}}return Jt(n,We()),n.callbackNode===a?Mm.bind(null,n):null}function Hh(n,i){var a=Ca;return n.current.memoizedState.isDehydrated&&(ts(n,i).flags|=256),n=vu(n,i),n!==2&&(i=Xt,Xt=a,i!==null&&qh(i)),n}function qh(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function nw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Vn(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function oi(n,i){for(i&=~zh,i&=~fu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Bt(i),c=1<<a;n[a]=-1,i&=~c}}function bm(n){if((Ve&6)!==0)throw Error(t(327));ho();var i=ji(n,0);if((i&1)===0)return Jt(n,We()),null;var a=vu(n,i);if(n.tag!==0&&a===2){var c=nn(n);c!==0&&(i=c,a=Hh(n,c))}if(a===1)throw a=Ra,ts(n,0),oi(n,i),Jt(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ns(n,Xt,Pr),Jt(n,We()),null}function Gh(n,i){var a=Ve;Ve|=1;try{return n(i)}finally{Ve=a,Ve===0&&(co=We()+500,ql&&Zr())}}function es(n){ii!==null&&ii.tag===0&&(Ve&6)===0&&ho();var i=Ve;Ve|=1;var a=vn.transition,c=ke;try{if(vn.transition=null,ke=1,n)return n()}finally{ke=c,vn.transition=a,Ve=i,(Ve&6)===0&&Zr()}}function Kh(){ln=uo.current,Ke(uo)}function ts(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,xE(a)),lt!==null)for(a=lt.return;a!==null;){var c=a;switch(rh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Wl();break;case 3:oo(),Ke(Kt),Ke(Vt),gh();break;case 5:ph(c);break;case 4:oo();break;case 13:Ke(Je);break;case 19:Ke(Je);break;case 10:uh(c.type._context);break;case 22:case 23:Kh()}a=a.return}if(wt=n,lt=n=ai(n.current,null),Ct=ln=i,gt=0,Ra=null,zh=fu=Zi=0,Xt=Ca=null,Yi!==null){for(i=0;i<Yi.length;i++)if(a=Yi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}Yi=null}return n}function Fm(n,i){do{var a=lt;try{if(lh(),nu.current=ou,ru){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ru=!1}if(Ji=0,Et=mt=Ze=null,Ea=!1,wa=0,jh.current=null,a===null||a.return===null){gt=1,Ra=i,lt=null;break}e:{var p=n,v=a.return,S=a,P=i;if(i=Ct,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,Q=S,Y=Q.tag;if((Q.mode&1)===0&&(Y===0||Y===11||Y===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ne=um(v);if(ne!==null){ne.flags&=-257,cm(ne,v,S,p,i),ne.mode&1&&lm(p,F,i),i=ne,P=F;var ae=i.updateQueue;if(ae===null){var le=new Set;le.add(P),i.updateQueue=le}else ae.add(P);break e}else{if((i&1)===0){lm(p,F,i),Qh();break e}P=Error(t(426))}}else if(Xe&&S.mode&1){var it=um(v);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),cm(it,v,S,p,i),oh(ao(P,S));break e}}p=P=ao(P,S),gt!==4&&(gt=2),Ca===null?Ca=[p]:Ca.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var M=om(p,P,i);Vp(p,M);break e;case 1:S=P;var D=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ri===null||!ri.has(b)))){p.flags|=65536,i&=-i,p.lanes|=i;var X=am(p,S,i);Vp(p,X);break e}}p=p.return}while(p!==null)}zm(a)}catch(ce){i=ce,lt===a&&a!==null&&(lt=a=a.return);continue}break}while(!0)}function Um(){var n=du.current;return du.current=ou,n===null?ou:n}function Qh(){(gt===0||gt===3||gt===2)&&(gt=4),wt===null||(Zi&268435455)===0&&(fu&268435455)===0||oi(wt,Ct)}function vu(n,i){var a=Ve;Ve|=2;var c=Um();(wt!==n||Ct!==i)&&(Pr=null,ts(n,i));do try{rw();break}catch(d){Fm(n,d)}while(!0);if(lh(),Ve=a,du.current=c,lt!==null)throw Error(t(261));return wt=null,Ct=0,gt}function rw(){for(;lt!==null;)jm(lt)}function iw(){for(;lt!==null&&!gl();)jm(lt)}function jm(n){var i=Wm(n.alternate,n,ln);n.memoizedProps=n.pendingProps,i===null?zm(n):lt=i,jh.current=null}function zm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=YE(a,i,ln),a!==null){lt=a;return}}else{if(a=XE(a,i),a!==null){a.flags&=32767,lt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,lt=null;return}}if(i=i.sibling,i!==null){lt=i;return}lt=i=n}while(i!==null);gt===0&&(gt=5)}function ns(n,i,a){var c=ke,d=vn.transition;try{vn.transition=null,ke=1,sw(n,i,a,c)}finally{vn.transition=d,ke=c}return null}function sw(n,i,a,c){do ho();while(ii!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Be(n,p),n===wt&&(lt=wt=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||mu||(mu=!0,Hm(dn,function(){return ho(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=vn.transition,vn.transition=null;var v=ke;ke=1;var S=Ve;Ve|=4,jh.current=null,ZE(n,a),Dm(a,n),AE(Qc),Gr=!!Kc,Qc=Kc=null,n.current=a,ew(a),xc(),Ve=S,ke=v,vn.transition=p}else n.current=a;if(mu&&(mu=!1,ii=n,gu=d),p=n.pendingLanes,p===0&&(ri=null),vl(a.stateNode),Jt(n,We()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(pu)throw pu=!1,n=$h,$h=null,n;return(gu&1)!==0&&n.tag!==0&&ho(),p=n.pendingLanes,(p&1)!==0?n===Wh?Pa++:(Pa=0,Wh=n):Pa=0,Zr(),null}function ho(){if(ii!==null){var n=Hr(gu),i=vn.transition,a=ke;try{if(vn.transition=null,ke=16>n?16:n,ii===null)var c=!1;else{if(n=ii,ii=null,gu=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,se=n.current;se!==null;){var p=se,v=p.child;if((se.flags&16)!==0){var S=p.deletions;if(S!==null){for(var P=0;P<S.length;P++){var F=S[P];for(se=F;se!==null;){var Q=se;switch(Q.tag){case 0:case 11:case 15:Aa(8,Q,p)}var Y=Q.child;if(Y!==null)Y.return=Q,se=Y;else for(;se!==null;){Q=se;var G=Q.sibling,ne=Q.return;if(Rm(Q),Q===F){se=null;break}if(G!==null){G.return=ne,se=G;break}se=ne}}}var ae=p.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var it=le.sibling;le.sibling=null,le=it}while(le!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,se=v;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Aa(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,se=M;break e}se=p.return}}var D=n.current;for(se=D;se!==null;){v=se;var b=v.child;if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,se=b;else e:for(v=D;se!==null;){if(S=se,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:hu(9,S)}}catch(ce){tt(S,S.return,ce)}if(S===v){se=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,se=X;break e}se=S.return}}if(Ve=d,Zr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Ui,n)}catch{}c=!0}return c}finally{ke=a,vn.transition=i}}return!1}function Bm(n,i,a){i=ao(a,i),i=om(n,i,1),n=ti(n,i,1),i=Ht(),n!==null&&($r(n,1,i),Jt(n,i))}function tt(n,i,a){if(n.tag===3)Bm(n,n,a);else for(;i!==null;){if(i.tag===3){Bm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ri===null||!ri.has(c))){n=ao(a,n),n=am(i,n,1),i=ti(i,n,1),n=Ht(),i!==null&&($r(i,1,n),Jt(i,n));break}}i=i.return}}function ow(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ht(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(Ct&a)===a&&(gt===4||gt===3&&(Ct&130023424)===Ct&&500>We()-Bh?ts(n,0):zh|=a),Jt(n,i)}function $m(n,i){i===0&&((n.mode&1)===0?i=1:(i=Os,Os<<=1,(Os&130023424)===0&&(Os=4194304)));var a=Ht();n=Ar(n,i),n!==null&&($r(n,i,a),Jt(n,a))}function aw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),$m(n,a)}function lw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),$m(n,a)}var Wm;Wm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Kt.current)Yt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Yt=!1,QE(n,i,a);Yt=(n.flags&131072)!==0}else Yt=!1,Xe&&(i.flags&1048576)!==0&&Ip(i,Kl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;uu(n,i),n=i.pendingProps;var d=Zs(i,Vt.current);so(i,a),d=vh(null,i,c,n,d,a);var p=Eh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Qt(c)?(p=!0,Hl(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,dh(i),d.updater=au,i.stateNode=d,d._reactInternals=i,Rh(i,c,n,a),i=Nh(null,i,c,!0,p,a)):(i.tag=0,Xe&&p&&nh(i),Wt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(uu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=cw(c),n=Ln(c,n),d){case 0:i=kh(null,i,c,n,a);break e;case 1:i=gm(null,i,c,n,a);break e;case 11:i=hm(null,i,c,n,a);break e;case 14:i=dm(null,i,c,Ln(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ln(c,d),kh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ln(c,d),gm(n,i,c,d,a);case 3:e:{if(ym(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,d=p.element,xp(n,i),eu(i,c,null,a);var v=i.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=ao(Error(t(423)),i),i=_m(n,i,c,a,d);break e}else if(c!==d){d=ao(Error(t(424)),i),i=_m(n,i,c,a,d);break e}else for(an=Yr(i.stateNode.containerInfo.firstChild),on=i,Xe=!0,On=null,a=Np(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(no(),c===d){i=Cr(n,i,a);break e}Wt(n,i,c,a)}i=i.child}return i;case 5:return Lp(i),n===null&&sh(i),c=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,Yc(c,d)?v=null:p!==null&&Yc(c,p)&&(i.flags|=32),mm(n,i),Wt(n,i,v,a),i.child;case 6:return n===null&&sh(i),null;case 13:return vm(n,i,a);case 4:return fh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ro(i,null,c,a):Wt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ln(c,d),hm(n,i,c,d,a);case 7:return Wt(n,i,i.pendingProps,a),i.child;case 8:return Wt(n,i,i.pendingProps.children,a),i.child;case 12:return Wt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,v=d.value,He(Xl,c._currentValue),c._currentValue=v,p!==null)if(Vn(p.value,v)){if(p.children===d.children&&!Kt.current){i=Cr(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var S=p.dependencies;if(S!==null){v=p.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=Rr(-1,a&-a),P.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var Q=F.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),F.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),ch(p.return,a,i),S.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===i.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),ch(v,a,i),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===i){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Wt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,so(i,a),d=yn(d),c=c(d),i.flags|=1,Wt(n,i,c,a),i.child;case 14:return c=i.type,d=Ln(c,i.pendingProps),d=Ln(c.type,d),dm(n,i,c,d,a);case 15:return fm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ln(c,d),uu(n,i),i.tag=1,Qt(c)?(n=!0,Hl(i)):n=!1,so(i,a),im(i,c,d),Rh(i,c,d,a),Nh(null,i,c,!0,n,a);case 19:return wm(n,i,a);case 22:return pm(n,i,a)}throw Error(t(156,i.tag))};function Hm(n,i){return xs(n,i)}function uw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(n,i,a,c){return new uw(n,i,a,c)}function Yh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function cw(n){if(typeof n=="function")return Yh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Dt)return 14}return 2}function ai(n,i){var a=n.alternate;return a===null?(a=En(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Eu(n,i,a,c,d,p){var v=2;if(c=n,typeof n=="function")Yh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return rs(a.children,d,p,i);case I:v=8,d|=8;break;case A:return n=En(12,a,i,d|2),n.elementType=A,n.lanes=p,n;case R:return n=En(13,a,i,d),n.elementType=R,n.lanes=p,n;case nt:return n=En(19,a,i,d),n.elementType=nt,n.lanes=p,n;case ze:return wu(a,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:v=10;break e;case x:v=9;break e;case O:v=11;break e;case Dt:v=14;break e;case xt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=En(v,a,i,d),i.elementType=n,i.type=c,i.lanes=p,i}function rs(n,i,a,c){return n=En(7,n,c,i),n.lanes=a,n}function wu(n,i,a,c){return n=En(22,n,c,i),n.elementType=ze,n.lanes=a,n.stateNode={isHidden:!1},n}function Xh(n,i,a){return n=En(6,n,null,i),n.lanes=a,n}function Jh(n,i,a){return i=En(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function hw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Br(0),this.expirationTimes=Br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Zh(n,i,a,c,d,p,v,S,P){return n=new hw(n,i,a,S,P),i===1?(i=1,p===!0&&(i|=8)):i=0,p=En(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},dh(p),n}function dw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function qm(n){if(!n)return Jr;n=n._reactInternals;e:{if(Rn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Qt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return Ep(n,a,i)}return i}function Gm(n,i,a,c,d,p,v,S,P){return n=Zh(a,c,!0,n,d,p,v,S,P),n.context=qm(null),a=n.current,c=Ht(),d=si(a),p=Rr(c,d),p.callback=i??null,ti(a,p,d),n.current.lanes=d,$r(n,d,c),Jt(n,c),n}function Tu(n,i,a,c){var d=i.current,p=Ht(),v=si(d);return a=qm(a),i.context===null?i.context=a:i.pendingContext=a,i=Rr(p,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ti(d,i,v),n!==null&&(Fn(n,d,v,p),Zl(n,d,v)),v}function Iu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Km(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ed(n,i){Km(n,i),(n=n.alternate)&&Km(n,i)}function fw(){return null}var Qm=typeof reportError=="function"?reportError:function(n){console.error(n)};function td(n){this._internalRoot=n}Su.prototype.render=td.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Tu(n,i,null,null)},Su.prototype.unmount=td.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;es(function(){Tu(null,n,null,null)}),i[wr]=null}};function Su(n){this._internalRoot=n}Su.prototype.unstable_scheduleHydration=function(n){if(n){var i=Sl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Gn.length&&i!==0&&i<Gn[a].priority;a++);Gn.splice(a,0,n),a===0&&Cl(n)}};function nd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Au(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function pw(n,i,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=Iu(v);p.call(F)}}var v=Gm(i,c,n,0,null,!1,!1,"",Ym);return n._reactRootContainer=v,n[wr]=v.current,da(n.nodeType===8?n.parentNode:n),es(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var F=Iu(P);S.call(F)}}var P=Zh(n,0,!1,null,null,!1,!1,"",Ym);return n._reactRootContainer=P,n[wr]=P.current,da(n.nodeType===8?n.parentNode:n),es(function(){Tu(i,P,a,c)}),P}function Ru(n,i,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var S=d;d=function(){var P=Iu(v);S.call(P)}}Tu(i,v,n,d)}else v=pw(a,i,n,d,c);return Iu(v)}Tl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=zr(i.pendingLanes);a!==0&&(Wr(i,a|1),Jt(i,We()),(Ve&6)===0&&(co=We()+500,Zr()))}break;case 13:es(function(){var c=Ar(n,1);if(c!==null){var d=Ht();Fn(c,n,1,d)}}),ed(n,1)}},Ls=function(n){if(n.tag===13){var i=Ar(n,134217728);if(i!==null){var a=Ht();Fn(i,n,134217728,a)}ed(n,134217728)}},Il=function(n){if(n.tag===13){var i=si(n),a=Ar(n,i);if(a!==null){var c=Ht();Fn(a,n,i,c)}ed(n,i)}},Sl=function(){return ke},Al=function(n,i){var a=ke;try{return ke=n,i()}finally{ke=a}},Rs=function(n,i,a){switch(i){case"input":if(bo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=$l(c);if(!d)throw Error(t(90));Es(c),bo(c,d)}}}break;case"textarea":Ss(n,a);break;case"select":i=a.value,i!=null&&fr(n,!!a.multiple,i,!1)}},Oi=Gh,Go=es;var mw={usingClientEntryPoint:!1,Events:[ma,Xs,$l,Hn,qo,Gh]},ka={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gw={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Yo(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{Ui=Cu.inject(gw),tn=Cu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mw,Zt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(i))throw Error(t(200));return dw(n,i,null,a)},Zt.createRoot=function(n,i){if(!nd(n))throw Error(t(299));var a=!1,c="",d=Qm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Zh(n,1,!1,null,null,a,!1,c,d),n[wr]=i.current,da(n.nodeType===8?n.parentNode:n),new td(i)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Yo(i),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return es(n)},Zt.hydrate=function(n,i,a){if(!Au(i))throw Error(t(200));return Ru(null,n,i,!0,a)},Zt.hydrateRoot=function(n,i,a){if(!nd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=Qm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Gm(i,null,n,1,a??null,d,!1,p,v),n[wr]=i.current,da(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Su(i)},Zt.render=function(n,i,a){if(!Au(i))throw Error(t(200));return Ru(null,n,i,!1,a)},Zt.unmountComponentAtNode=function(n){if(!Au(n))throw Error(t(40));return n._reactRootContainer?(es(function(){Ru(null,null,n,!1,function(){n._reactRootContainer=null,n[wr]=null})}),!0):!1},Zt.unstable_batchedUpdates=Gh,Zt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Au(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ru(n,i,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var Ly;function LR(){if(Ly)return gd.exports;Ly=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gd.exports=OR(),gd.exports}var My;function MR(){if(My)return Ou;My=1;var r=LR();return Ou.createRoot=r.createRoot,Ou.hydrateRoot=r.hydrateRoot,Ou}var bR=MR();function FR({onStart:r}){return z.jsxs("main",{className:"page",children:[z.jsxs("section",{className:"hero",children:[z.jsx("p",{className:"badge",children:"AI Workout Accountability"}),z.jsx("h1",{children:"Your AI coach that helps you actually work out."}),z.jsx("p",{className:"subtitle",children:"CoachPulse combines simple workouts, streak tracking, daily check-ins, and supportive AI coaching to help you stay consistent."}),z.jsx("button",{className:"primary",onClick:r,children:"Start Free Beta"})]}),z.jsxs("section",{className:"cards",children:[z.jsxs("div",{className:"card",children:[z.jsx("h2",{children:"Daily check-ins"}),z.jsx("p",{children:"Tell CoachPulse whether you completed, partly completed, or missed your workout."})]}),z.jsxs("div",{className:"card",children:[z.jsx("h2",{children:"Streak tracking"}),z.jsx("p",{children:"Build consistency with a simple streak and monthly progress view."})]}),z.jsxs("div",{className:"card",children:[z.jsx("h2",{children:"AI accountability"}),z.jsx("p",{children:"Get supportive coaching when you feel tired, busy, or unmotivated."})]})]})]})}function UR(){const[r,e]=Fe.useState(""),[t,s]=Fe.useState(""),[o,l]=Fe.useState([]),[h,m]=Fe.useState(null),[g,_]=Fe.useState("");async function w(){const Z=cn.currentUser;if(!Z)return;const oe=ar(un,"users",Z.uid,"profile","weight"),ue=await hc(oe);ue.exists()&&(e(ue.data().currentWeight||""),s(ue.data().goalWeight||""));const ge=uc(un,"users",Z.uid,"weightHistory"),Oe=aE(ge,lE("date","desc")),k=(await hE(Oe)).docs.map(I=>({id:I.id,...I.data()}));if(l(k),k.length>0){const I=Number(k[0].weight),A=Number(k[k.length-1].weight),N=I-A;m({starting:A,current:I,change:N})}}Fe.useEffect(()=>{w()},[]);async function T(){const Z=cn.currentUser;if(!Z)return;const oe=new Date,ue=oe.toISOString().split("T")[0],ge=`${ue}-${oe.getTime()}`;await el(ar(un,"users",Z.uid,"profile","weight"),{currentWeight:r,goalWeight:t,updatedAt:tl()}),await el(ar(un,"users",Z.uid,"weightHistory",ge),{weight:r,goalWeight:t,date:ue,createdAt:tl()}),_("Weight saved!"),w()}const C=[...o].reverse(),U=C.map(Z=>Number(Z.weight)),q=Math.max(...U,1),K=Math.min(...U,q);let B=null;if(C.length>=2&&t){const Z=Number(C[0].weight),oe=Number(C[C.length-1].weight),ue=Number(t),ge=Z-oe,Oe=oe-ue;if(ge>0&&Oe>0){const Te=Math.max(C.length-1,1),k=ge/Te,I=Math.ceil(Oe/k),A=new Date;A.setDate(A.getDate()+I*7),B={lossPerWeek:k.toFixed(2),weeksToGoal:I,date:A.toLocaleDateString()}}}return z.jsxs("section",{className:"panel",children:[z.jsx("h2",{children:"Weight Tracking"}),z.jsx("input",{type:"number",placeholder:"Current weight (kg)",value:r,onChange:Z=>e(Z.target.value)}),z.jsx("input",{type:"number",placeholder:"Goal weight (kg)",value:t,onChange:Z=>s(Z.target.value)}),z.jsx("button",{onClick:T,children:"Save Weight"}),g&&z.jsx("p",{children:g}),h&&z.jsxs("div",{style:{marginTop:"16px"},children:[z.jsx("h3",{children:"Weight Progress"}),z.jsxs("p",{children:["Starting weight: ",h.starting,"kg"]}),z.jsxs("p",{children:["Current weight: ",h.current,"kg"]}),z.jsxs("p",{children:["Progress: ",h.change>0?"+":"",h.change,"kg"]})]}),C.length>1&&z.jsxs("div",{style:{marginTop:"20px"},children:[z.jsx("h3",{children:"Progress Chart"}),z.jsx("div",{style:{display:"flex",alignItems:"end",gap:"8px",height:"160px",padding:"12px",background:"#f7f4ff",borderRadius:"16px"},children:C.map(Z=>{const oe=Number(Z.weight),ue=q===K?80:40+(oe-K)/(q-K)*100;return z.jsxs("div",{style:{flex:1,textAlign:"center"},children:[z.jsx("div",{title:`${Z.date}: ${Z.weight}kg`,style:{height:`${ue}px`,background:"#7c3aed",borderRadius:"999px 999px 0 0"}}),z.jsxs("small",{children:[Z.weight,"kg"]})]},Z.id)})})]}),B&&z.jsxs("div",{style:{marginTop:"20px"},children:[z.jsx("h3",{children:"Goal Date Prediction"}),z.jsxs("p",{children:["Current pace: ",B.lossPerWeek,"kg/week"]}),z.jsxs("p",{children:["Estimated time to goal: ",B.weeksToGoal," weeks"]}),z.jsxs("p",{children:["Estimated goal date: ",B.date]})]}),z.jsx("h3",{children:"Weight History"}),o.length===0?z.jsx("p",{children:"No weight entries yet."}):z.jsx("div",{children:o.map(Z=>z.jsxs("div",{style:{marginBottom:"8px"},children:[Z.date,": ",Z.weight,"kg"]},Z.id))})]})}function jR({goal:r,streak:e,completedWorkouts:t}){const[s,o]=Fe.useState(""),[l,h]=Fe.useState(!1);Fe.useEffect(()=>{async function _(){const w=cn.currentUser;if(!w)return;const T=ar(un,"users",w.uid,"plans","weeklyPlan"),C=await hc(T);C.exists()&&o(C.data().plan||"")}_()},[]);async function m(_){const w=cn.currentUser;w&&await el(ar(un,"users",w.uid,"plans","weeklyPlan"),{plan:_,goal:r,createdAt:tl()})}async function g(){h(!0);try{const w=await(await fetch("/api/workout-plan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({goal:r,streak:e,completedWorkouts:t})})).json(),T=w.plan||w.error||"Could not generate plan.";o(T),await m(T)}catch{o("Could not connect to workout planner.")}finally{h(!1)}}return z.jsxs("section",{className:"panel",children:[z.jsx("h2",{children:"Weekly Workout Plan"}),z.jsx("p",{children:"Generate a plan based on your goal and progress."}),z.jsx("button",{onClick:g,children:l?"Creating Plan...":"Generate My Weekly Plan"}),s&&z.jsx("div",{style:{whiteSpace:"pre-wrap",marginTop:"16px"},children:s})]})}function zR({streak:r,completedWorkouts:e,goal:t}){const[s,o]=Fe.useState("🎯 Goal Setter"),l=[];return r>=3&&l.push("🔥 3-Day Streak"),r>=7&&l.push("🚀 7-Day Streak"),e>=10&&l.push("💪 10 Workouts"),e>=25&&l.push("🏅 25 Workouts"),t&&t!=="Get Fit"&&l.push("🎯 Goal Setter"),Fe.useEffect(()=>{const h=setTimeout(()=>{o(null)},5e3);return()=>clearTimeout(h)},[]),z.jsxs(z.Fragment,{children:[s&&z.jsxs("div",{style:{position:"fixed",top:"24px",right:"24px",background:"white",padding:"18px 22px",borderRadius:"18px",boxShadow:"0 12px 30px rgba(0,0,0,0.18)",zIndex:9999},children:[z.jsx("strong",{children:"Achievement Unlocked!"}),z.jsx("p",{children:s})]}),z.jsxs("section",{className:"panel",children:[z.jsx("h2",{children:"Achievements"}),l.length===0?z.jsx("p",{children:"Complete workouts or set a goal to unlock badges."}):z.jsx("div",{children:l.map(h=>z.jsx("div",{style:{marginBottom:"8px"},children:h},h))})]})]})}function BR({onSubmit:r}){const[e,t]=Fe.useState("");async function s(o){t(o);try{console.log("🔥 Click:",o);const l=cn.currentUser;if(!l){console.log("❌ NO USER LOGGED IN");return}const h=new Date().toISOString().split("T")[0],m=ar(un,"users",l.uid,"workouts",h);await el(m,{status:o,date:h,createdAt:tl()}),console.log("✅ SAVED REAL WORKOUT TO FIRESTORE"),r&&r(o)}catch(l){console.error("❌ Firestore error:",l)}}return z.jsxs("section",{className:"panel",children:[z.jsx("h2",{children:"Today's workout"}),z.jsxs("div",{className:"button-row",children:[z.jsx("button",{onClick:()=>s("completed"),children:"Completed"}),z.jsx("button",{onClick:()=>s("partial"),children:"Partly done"}),z.jsx("button",{onClick:()=>s("missed"),children:"Missed"})]})]})}function $R({streak:r,completedWorkouts:e,goal:t}){const[s,o]=Fe.useState([]),[l,h]=Fe.useState(""),[m,g]=Fe.useState(!1);Fe.useEffect(()=>{const T=cn.currentUser;if(!T)return;const C=uc(un,"users",T.uid,"coachMessages"),U=aE(C,lE("createdAt","asc")),q=kR(U,K=>{const B=K.docs.map(Z=>({id:Z.id,...Z.data()}));o(B)});return()=>q()},[]);async function _(T,C){const U=cn.currentUser;U&&await PR(uc(un,"users",U.uid,"coachMessages"),{role:T,text:C,createdAt:tl()})}async function w(){if(!l.trim())return;const T=l.trim();h(""),g(!0),await _("user",T);try{const U=await(await fetch("/api/coach",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:T,streak:r,workouts:e,goal:t})})).json();await _("coach",U.message||U.error||"I’m here with you. Let’s keep going.")}catch(C){await _("coach",C.message||"Sorry, I couldn’t connect to your coach right now.")}finally{g(!1)}}return z.jsxs("section",{className:"panel",children:[z.jsx("h2",{children:"AI Coach"}),z.jsxs("div",{className:"chat",children:[s.length===0&&z.jsx("div",{className:"bubble coach",children:"Hi, I’m your CoachPulse AI coach. Tell me how your workout went today."}),s.map(T=>z.jsx("div",{className:`bubble ${T.role}`,children:T.text},T.id)),m&&z.jsx("div",{className:"bubble coach",children:"Thinking..."})]}),z.jsxs("div",{className:"chat-input",children:[z.jsx("input",{value:l,placeholder:"Ask your coach...",onChange:T=>h(T.target.value),onKeyDown:T=>T.key==="Enter"&&w()}),z.jsx("button",{onClick:w,children:"Send"})]})]})}const WR=["Lose Weight","Build Muscle","Improve Fitness","Run a 5K","Stay Consistent"];function HR({currentGoal:r,onGoalUpdated:e}){const[t,s]=Fe.useState(r||"Get Fit");async function o(){const l=cn.currentUser;l&&(await el(ar(un,"users",l.uid),{goal:t},{merge:!0}),e(t))}return z.jsxs("section",{className:"panel",children:[z.jsx("h2",{children:"Your Goal"}),z.jsx("select",{value:t,onChange:l=>s(l.target.value),children:WR.map(l=>z.jsx("option",{value:l,children:l},l))}),z.jsx("button",{onClick:o,children:"Save Goal"})]})}function qR({completedWorkouts:r}){const t=Math.min(r/4*100,100);return z.jsxs("section",{className:"panel",children:[z.jsx("h2",{children:"Weekly Progress"}),z.jsxs("p",{children:[r," / ",4," workouts completed"]}),z.jsx("div",{style:{width:"100%",height:"16px",background:"#eee",borderRadius:"999px",overflow:"hidden",marginTop:"12px"},children:z.jsx("div",{style:{width:`${t}%`,height:"100%",background:"#7c3aed",borderRadius:"999px"}})})]})}function GR({user:r,onLogout:e}){const[t,s]=Fe.useState(0),[o,l]=Fe.useState(0),[h,m]=Fe.useState(null),[g,_]=Fe.useState("Get Fit");function w(U){const q=new Set(U);let K=0,B=new Date;for(;;){const Z=B.toISOString().split("T")[0];if(q.has(Z))K+=1,B.setDate(B.getDate()-1);else break}return K}async function T(){const U=cn.currentUser;if(!U)return;const q=ar(un,"users",U.uid),K=await hc(q);K.exists()&&K.data().goal&&_(K.data().goal);const B=new Date().toISOString().split("T")[0],Z=ar(un,"users",U.uid,"workouts",B),oe=await hc(Z);m(oe.exists()?oe.data():null);const ue=uc(un,"users",U.uid,"workouts"),ge=await hE(ue);let Oe=0;const Te=[];ge.forEach(k=>{const I=k.data();I.status==="completed"&&(Oe+=1,Te.push(I.date))}),l(Oe),s(w(Te))}function C(){T()}return Fe.useEffect(()=>{T()},[]),z.jsxs("main",{className:"page",children:[z.jsxs("header",{className:"topbar",children:[z.jsxs("div",{children:[z.jsx("p",{className:"badge",children:"Beta MVP"}),z.jsx("h1",{children:"Welcome back"}),z.jsx("p",{children:r==null?void 0:r.email})]}),z.jsx("button",{className:"ghost",onClick:e,children:"Log out"})]}),z.jsx(HR,{currentGoal:g,onGoalUpdated:_}),z.jsx(UR,{}),z.jsx(jR,{goal:g,streak:t,completedWorkouts:o}),h?z.jsxs("div",{className:"panel",children:[z.jsx("h3",{children:"Today's Status:"}),z.jsx("p",{children:h.status})]}):z.jsx("div",{className:"panel",children:z.jsx("h3",{children:"No workout logged today"})}),z.jsx(qR,{completedWorkouts:o}),z.jsx(zR,{streak:t,completedWorkouts:o,goal:g}),z.jsxs("section",{className:"stats",children:[z.jsxs("div",{className:"stat",children:[z.jsx("span",{children:"🔥"}),z.jsx("h2",{children:t}),z.jsx("p",{children:"Day streak"})]}),z.jsxs("div",{className:"stat",children:[z.jsx("span",{children:"💪"}),z.jsx("h2",{children:o}),z.jsx("p",{children:"Total completed"})]}),z.jsxs("div",{className:"stat",children:[z.jsx("span",{children:"🎯"}),z.jsx("h2",{children:g}),z.jsx("p",{children:"Current goal"})]})]}),z.jsxs("section",{className:"layout",children:[z.jsx(BR,{onSubmit:C}),z.jsx($R,{streak:t,completedWorkouts:o,goal:g})]})]})}function KR({onLogin:r}){const[e,t]=Fe.useState(""),[s,o]=Fe.useState(""),[l,h]=Fe.useState(!0),[m,g]=Fe.useState("");async function _(){g("");try{let w;l?w=await rI(cn,e,s):w=await nI(cn,e,s),r(w.user.email)}catch(w){g(w.message)}}return z.jsx("main",{className:"page narrow",children:z.jsxs("section",{className:"panel",children:[z.jsx("h1",{children:l?"Login":"Create Account"}),z.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:w=>t(w.target.value)}),z.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:w=>o(w.target.value)}),m&&z.jsx("p",{style:{color:"red"},children:m}),z.jsx("button",{className:"primary full",onClick:_,children:l?"Login":"Sign Up"}),z.jsx("p",{style:{cursor:"pointer",marginTop:10},onClick:()=>h(!l),children:l?"Don't have an account? Sign up":"Already have an account? Login"})]})})}function QR(){const[r,e]=Fe.useState("landing"),[t,s]=Fe.useState(null);return Fe.useEffect(()=>{const o=aI(cn,l=>{l&&(s({email:l.email}),e("dashboard"))});return()=>o()},[]),r==="login"?z.jsx(KR,{onLogin:o=>{s({email:o}),e("dashboard")}}):r==="dashboard"?z.jsx(GR,{user:t,onLogout:()=>{s(null),e("landing")}}):z.jsx(FR,{onStart:()=>e("login")})}bR.createRoot(document.getElementById("root")).render(z.jsx(DR.StrictMode,{children:z.jsx(QR,{})}));
