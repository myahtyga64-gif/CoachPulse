(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function fw(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Jh={exports:{}},Pa={},Zh={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function pw(){if(Km)return Ae;Km=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Q={};function B(O,q,le){this.props=O,this.context=q,this.refs=Q,this.updater=le||j}B.prototype.isReactComponent={},B.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ge(){}ge.prototype=B.prototype;function fe(O,q,le){this.props=O,this.context=q,this.refs=Q,this.updater=le||j}var ye=fe.prototype=new ge;ye.constructor=fe,G(ye,B.prototype),ye.isPureReactComponent=!0;var we=Array.isArray,Ke=Object.prototype.hasOwnProperty,Re={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function I(O,q,le){var Te,Se={},Ne=null,Le=null;if(q!=null)for(Te in q.ref!==void 0&&(Le=q.ref),q.key!==void 0&&(Ne=""+q.key),q)Ke.call(q,Te)&&!D.hasOwnProperty(Te)&&(Se[Te]=q[Te]);var Me=arguments.length-2;if(Me===1)Se.children=le;else if(1<Me){for(var ze=Array(Me),yt=0;yt<Me;yt++)ze[yt]=arguments[yt+2];Se.children=ze}if(O&&O.defaultProps)for(Te in Me=O.defaultProps,Me)Se[Te]===void 0&&(Se[Te]=Me[Te]);return{$$typeof:i,type:O,key:Ne,ref:Le,props:Se,_owner:Re.current}}function R(O,q){return{$$typeof:i,type:O.type,key:q,ref:O.ref,props:O.props,_owner:O._owner}}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function V(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(le){return q[le]})}var x=/\/+/g;function A(O,q){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):q.toString(36)}function tt(O,q,le,Te,Se){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var Le=!1;if(O===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(O.$$typeof){case i:case e:Le=!0}}if(Le)return Le=O,Se=Se(Le),O=Te===""?"."+A(Le,0):Te,we(Se)?(le="",O!=null&&(le=O.replace(x,"$&/")+"/"),tt(Se,q,le,"",function(yt){return yt})):Se!=null&&(k(Se)&&(Se=R(Se,le+(!Se.key||Le&&Le.key===Se.key?"":(""+Se.key).replace(x,"$&/")+"/")+O)),q.push(Se)),1;if(Le=0,Te=Te===""?".":Te+":",we(O))for(var Me=0;Me<O.length;Me++){Ne=O[Me];var ze=Te+A(Ne,Me);Le+=tt(Ne,q,le,ze,Se)}else if(ze=C(O),typeof ze=="function")for(O=ze.call(O),Me=0;!(Ne=O.next()).done;)Ne=Ne.value,ze=Te+A(Ne,Me++),Le+=tt(Ne,q,le,ze,Se);else if(Ne==="object")throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Le}function Dt(O,q,le){if(O==null)return O;var Te=[],Se=0;return tt(O,Te,"","",function(Ne){return q.call(le,Ne,Se++)}),Te}function Vt(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(le){(O._status===0||O._status===-1)&&(O._status=1,O._result=le)},function(le){(O._status===0||O._status===-1)&&(O._status=2,O._result=le)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var Ue={current:null},J={transition:null},ce={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:J,ReactCurrentOwner:Re};function re(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Dt,forEach:function(O,q,le){Dt(O,function(){q.apply(this,arguments)},le)},count:function(O){var q=0;return Dt(O,function(){q++}),q},toArray:function(O){return Dt(O,function(q){return q})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ae.Component=B,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=fe,Ae.StrictMode=s,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Ae.act=re,Ae.cloneElement=function(O,q,le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Te=G({},O.props),Se=O.key,Ne=O.ref,Le=O._owner;if(q!=null){if(q.ref!==void 0&&(Ne=q.ref,Le=Re.current),q.key!==void 0&&(Se=""+q.key),O.type&&O.type.defaultProps)var Me=O.type.defaultProps;for(ze in q)Ke.call(q,ze)&&!D.hasOwnProperty(ze)&&(Te[ze]=q[ze]===void 0&&Me!==void 0?Me[ze]:q[ze])}var ze=arguments.length-2;if(ze===1)Te.children=le;else if(1<ze){Me=Array(ze);for(var yt=0;yt<ze;yt++)Me[yt]=arguments[yt+2];Te.children=Me}return{$$typeof:i,type:O.type,key:Se,ref:Ne,props:Te,_owner:Le}},Ae.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Ae.createElement=I,Ae.createFactory=function(O){var q=I.bind(null,O);return q.type=O,q},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(O){return{$$typeof:m,render:O}},Ae.isValidElement=k,Ae.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Vt}},Ae.memo=function(O,q){return{$$typeof:_,type:O,compare:q===void 0?null:q}},Ae.startTransition=function(O){var q=J.transition;J.transition={};try{O()}finally{J.transition=q}},Ae.unstable_act=re,Ae.useCallback=function(O,q){return Ue.current.useCallback(O,q)},Ae.useContext=function(O){return Ue.current.useContext(O)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(O){return Ue.current.useDeferredValue(O)},Ae.useEffect=function(O,q){return Ue.current.useEffect(O,q)},Ae.useId=function(){return Ue.current.useId()},Ae.useImperativeHandle=function(O,q,le){return Ue.current.useImperativeHandle(O,q,le)},Ae.useInsertionEffect=function(O,q){return Ue.current.useInsertionEffect(O,q)},Ae.useLayoutEffect=function(O,q){return Ue.current.useLayoutEffect(O,q)},Ae.useMemo=function(O,q){return Ue.current.useMemo(O,q)},Ae.useReducer=function(O,q,le){return Ue.current.useReducer(O,q,le)},Ae.useRef=function(O){return Ue.current.useRef(O)},Ae.useState=function(O){return Ue.current.useState(O)},Ae.useSyncExternalStore=function(O,q,le){return Ue.current.useSyncExternalStore(O,q,le)},Ae.useTransition=function(){return Ue.current.useTransition()},Ae.version="18.3.1",Ae}var Qm;function zd(){return Qm||(Qm=1,Zh.exports=pw()),Zh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function mw(){if(Ym)return Pa;Ym=1;var i=zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,S={},C=null,j=null;_!==void 0&&(C=""+_),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(S[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)S[w]===void 0&&(S[w]=g[w]);return{$$typeof:e,type:m,key:C,ref:j,props:S,_owner:o.current}}return Pa.Fragment=t,Pa.jsx=h,Pa.jsxs=h,Pa}var Xm;function gw(){return Xm||(Xm=1,Jh.exports=mw()),Jh.exports}var Z=gw();const yw=()=>{};var Jm={};/**
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
 */const xy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},_w=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Ly={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,_=g?i[o+2]:0,w=u>>2,S=(u&3)<<4|m>>4;let C=(m&15)<<2|_>>6,j=_&63;g||(j=64,h||(C=64)),s.push(t[w],t[S],t[C],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(xy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):_w(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const S=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||S==null)throw new vw;const C=u<<2|m>>4;if(s.push(C),_!==64){const j=m<<4&240|_>>2;if(s.push(j),S!==64){const G=_<<6&192|S;s.push(G)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class vw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ew=function(i){const e=xy(i);return Ly.encodeByteArray(e,!0)},Bu=function(i){return Ew(i).replace(/\./g,"")},My=function(i){try{return Ly.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ww(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tw=()=>ww().__FIREBASE_DEFAULTS__,Iw=()=>{if(typeof process>"u"||typeof Jm>"u")return;const i=Jm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Sw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&My(i[1]);return e&&JSON.parse(e)},ac=()=>{try{return yw()||Tw()||Iw()||Sw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},by=i=>{var e,t;return(t=(e=ac())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Aw=i=>{const e=by(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Fy=()=>{var i;return(i=ac())===null||i===void 0?void 0:i.config},Uy=i=>{var e;return(e=ac())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Rw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Ro(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function Cw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Bu(JSON.stringify(t)),Bu(JSON.stringify(h)),""].join(".")}const La={};function Pw(){const i={prod:[],emulator:[]};for(const e of Object.keys(La))La[e]?i.emulator.push(e):i.prod.push(e);return i}function kw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Zm=!1;function zy(i,e){if(typeof window>"u"||typeof document>"u"||!Ro(window.location.host)||La[i]===e||La[i]||Zm)return;La[i]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=Pw().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,j){C.setAttribute("width","24"),C.setAttribute("id",j),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Zm=!0,h()},C}function w(C,j){C.setAttribute("id",j),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function S(){const C=kw(s),j=t("text"),G=document.getElementById(j)||document.createElement("span"),Q=t("learnmore"),B=document.getElementById(Q)||document.createElement("a"),ge=t("preprendIcon"),fe=document.getElementById(ge)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ye=C.element;m(ye),w(B,Q);const we=_();g(fe,ge),ye.append(fe,G,B,we),document.body.appendChild(ye)}u?(G.innerText="Preview backend disconnected.",fe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(fe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,G.innerText="Preview backend running in this workspace."),G.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function Dw(){var i;const e=(i=ac())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ow(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function xw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lw(){const i=jt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Mw(){return!Dw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bw(){try{return typeof indexedDB=="object"}catch{return!1}}function Fw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const Uw="FirebaseError";class xr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Uw,Object.setPrototypeOf(this,xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Za.prototype.create)}}class Za{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?jw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new xr(o,m,s)}}function jw(i,e){return i.replace(zw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const zw=/\{\$([^}]+)}/g;function Bw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function os(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(eg(u)&&eg(h)){if(!os(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function eg(i){return i!==null&&typeof i=="object"}/**
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
 */function el(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ka(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Na(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function $w(i,e){const t=new qw(i,e);return t.subscribe.bind(t)}class qw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Hw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=ed),o.error===void 0&&(o.error=ed),o.complete===void 0&&(o.complete=ed);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function ed(){}/**
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
 */function zt(i){return i&&i._delegate?i._delegate:i}class as{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ns="[DEFAULT]";/**
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
 */class Ww{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Rw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kw(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gw(i){return i===ns?void 0:i}function Kw(i){return i.instantiationMode==="EAGER"}/**
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
 */class Qw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ww(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ce||(Ce={}));const Yw={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},Xw=Ce.INFO,Jw={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},Zw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Jw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bd{constructor(e){this.name=e,this._logLevel=Xw,this._logHandler=Zw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const eT=(i,e)=>e.some(t=>i instanceof t);let tg,ng;function tT(){return tg||(tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nT(){return ng||(ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const By=new WeakMap,pd=new WeakMap,$y=new WeakMap,td=new WeakMap,$d=new WeakMap;function rT(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(di(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&By.set(t,i)}).catch(()=>{}),$d.set(e,i),e}function iT(i){if(pd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});pd.set(i,e)}let md={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return pd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||$y.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return di(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function sT(i){md=i(md)}function oT(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(nd(this),e,...t);return $y.set(s,e.sort?e.sort():[e]),di(s)}:nT().includes(i)?function(...e){return i.apply(nd(this),e),di(By.get(this))}:function(...e){return di(i.apply(nd(this),e))}}function aT(i){return typeof i=="function"?oT(i):(i instanceof IDBTransaction&&iT(i),eT(i,tT())?new Proxy(i,md):i)}function di(i){if(i instanceof IDBRequest)return rT(i);if(td.has(i))return td.get(i);const e=aT(i);return e!==i&&(td.set(i,e),$d.set(e,i)),e}const nd=i=>$d.get(i);function lT(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=di(h);return s&&h.addEventListener("upgradeneeded",g=>{s(di(h.result),g.oldVersion,g.newVersion,di(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const uT=["get","getKey","getAll","getAllKeys","count"],cT=["put","add","delete","clear"],rd=new Map;function rg(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(rd.get(e))return rd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=cT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||uT.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return rd.set(e,u),u}sT(i=>({...i,get:(e,t,s)=>rg(e,t)||i.get(e,t,s),has:(e,t)=>!!rg(e,t)||i.has(e,t)}));/**
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
 */class hT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function dT(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gd="@firebase/app",ig="0.13.2";/**
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
 */const Nr=new Bd("@firebase/app"),fT="@firebase/app-compat",pT="@firebase/analytics-compat",mT="@firebase/analytics",gT="@firebase/app-check-compat",yT="@firebase/app-check",_T="@firebase/auth",vT="@firebase/auth-compat",ET="@firebase/database",wT="@firebase/data-connect",TT="@firebase/database-compat",IT="@firebase/functions",ST="@firebase/functions-compat",AT="@firebase/installations",RT="@firebase/installations-compat",CT="@firebase/messaging",PT="@firebase/messaging-compat",kT="@firebase/performance",NT="@firebase/performance-compat",DT="@firebase/remote-config",VT="@firebase/remote-config-compat",OT="@firebase/storage",xT="@firebase/storage-compat",LT="@firebase/firestore",MT="@firebase/ai",bT="@firebase/firestore-compat",FT="firebase",UT="11.10.0";/**
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
 */const yd="[DEFAULT]",jT={[gd]:"fire-core",[fT]:"fire-core-compat",[mT]:"fire-analytics",[pT]:"fire-analytics-compat",[yT]:"fire-app-check",[gT]:"fire-app-check-compat",[_T]:"fire-auth",[vT]:"fire-auth-compat",[ET]:"fire-rtdb",[wT]:"fire-data-connect",[TT]:"fire-rtdb-compat",[IT]:"fire-fn",[ST]:"fire-fn-compat",[AT]:"fire-iid",[RT]:"fire-iid-compat",[CT]:"fire-fcm",[PT]:"fire-fcm-compat",[kT]:"fire-perf",[NT]:"fire-perf-compat",[DT]:"fire-rc",[VT]:"fire-rc-compat",[OT]:"fire-gcs",[xT]:"fire-gcs-compat",[LT]:"fire-fst",[bT]:"fire-fst-compat",[MT]:"fire-vertex","fire-js":"fire-js",[FT]:"fire-js-all"};/**
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
 */const $u=new Map,zT=new Map,_d=new Map;function sg(i,e){try{i.container.addComponent(e)}catch(t){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Eo(i){const e=i.name;if(_d.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;_d.set(e,i);for(const t of $u.values())sg(t,i);for(const t of zT.values())sg(t,i);return!0}function qd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function vn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const BT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fi=new Za("app","Firebase",BT);/**
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
 */class $T{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fi.create("app-deleted",{appName:this._name})}}/**
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
 */const Co=UT;function qy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw fi.create("bad-app-name",{appName:String(o)});if(t||(t=Fy()),!t)throw fi.create("no-options");const u=$u.get(o);if(u){if(os(t,u.options)&&os(s,u.config))return u;throw fi.create("duplicate-app",{appName:o})}const h=new Qw(o);for(const g of _d.values())h.addComponent(g);const m=new $T(t,s,h);return $u.set(o,m),m}function Hy(i=yd){const e=$u.get(i);if(!e&&i===yd&&Fy())return qy();if(!e)throw fi.create("no-app",{appName:i});return e}function pi(i,e,t){var s;let o=(s=jT[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(m.join(" "));return}Eo(new as(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const qT="firebase-heartbeat-database",HT=1,za="firebase-heartbeat-store";let id=null;function Wy(){return id||(id=lT(qT,HT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(za)}catch(t){console.warn(t)}}}}).catch(i=>{throw fi.create("idb-open",{originalErrorMessage:i.message})})),id}async function WT(i){try{const t=(await Wy()).transaction(za),s=await t.objectStore(za).get(Gy(i));return await t.done,s}catch(e){if(e instanceof xr)Nr.warn(e.message);else{const t=fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nr.warn(t.message)}}}async function og(i,e){try{const s=(await Wy()).transaction(za,"readwrite");await s.objectStore(za).put(e,Gy(i)),await s.done}catch(t){if(t instanceof xr)Nr.warn(t.message);else{const s=fi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Nr.warn(s.message)}}}function Gy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const GT=1024,KT=30;class QT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new XT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=ag();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>KT){const h=JT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ag(),{heartbeatsToSend:s,unsentEntries:o}=YT(this._heartbeatsCache.heartbeats),u=Bu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Nr.warn(t),""}}}function ag(){return new Date().toISOString().substring(0,10)}function YT(i,e=GT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),lg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),lg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class XT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bw()?Fw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await WT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return og(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return og(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function lg(i){return Bu(JSON.stringify({version:2,heartbeats:i})).length}function JT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function ZT(i){Eo(new as("platform-logger",e=>new hT(e),"PRIVATE")),Eo(new as("heartbeat",e=>new QT(e),"PRIVATE")),pi(gd,ig,i),pi(gd,ig,"esm2017"),pi("fire-js","")}ZT("");function Hd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Ky(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const e0=Ky,Qy=new Za("auth","Firebase",Ky());/**
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
 */const qu=new Bd("@firebase/auth");function t0(i,...e){qu.logLevel<=Ce.WARN&&qu.warn(`Auth (${Co}): ${i}`,...e)}function Vu(i,...e){qu.logLevel<=Ce.ERROR&&qu.error(`Auth (${Co}): ${i}`,...e)}/**
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
 */function jn(i,...e){throw Wd(i,...e)}function er(i,...e){return Wd(i,...e)}function Yy(i,e,t){const s=Object.assign(Object.assign({},e0()),{[e]:t});return new Za("auth","Firebase",s).create(e,{appName:i.name})}function Pr(i){return Yy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Qy.create(i,...e)}function pe(i,e,...t){if(!i)throw Wd(e,...t)}function Rr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Vu(e),new Error(e)}function Dr(i,e){i||Rr(e)}/**
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
 */function vd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function n0(){return ug()==="http:"||ug()==="https:"}function ug(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function r0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(n0()||Ow()||"connection"in navigator)?navigator.onLine:!0}function i0(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class tl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dr(t>e,"Short delay should be less than long delay!"),this.isMobile=Nw()||xw()}get(){return r0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gd(i,e){Dr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Xy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const s0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const o0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],a0=new tl(3e4,6e4);function Ai(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ri(i,e,t,s,o={}){return Jy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=el(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:g},u);return Vw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Ro(i.emulatorConfig.host)&&(_.credentials="include"),Xy.fetch()(await Zy(i,i.config.apiHost,t,m),_)})}async function Jy(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},s0),e);try{const o=new u0(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Au(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Au(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Au(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw Au(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Yy(i,w,_);jn(i,w)}}catch(o){if(o instanceof xr)throw o;jn(i,"network-request-failed",{message:String(o)})}}async function nl(i,e,t,s,o={}){const u=await Ri(i,e,t,s,o);return"mfaPendingCredential"in u&&jn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Zy(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Gd(i.config,o):`${i.config.apiScheme}://${o}`;return o0.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function l0(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class u0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(er(this.auth,"network-request-failed")),a0.get())})}}function Au(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=er(i,e,s);return o.customData._tokenResponse=t,o}function cg(i){return i!==void 0&&i.enterprise!==void 0}class c0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return l0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function h0(i,e){return Ri(i,"GET","/v2/recaptchaConfig",Ai(i,e))}/**
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
 */async function d0(i,e){return Ri(i,"POST","/v1/accounts:delete",e)}async function Hu(i,e){return Ri(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ma(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function f0(i,e=!1){const t=zt(i),s=await t.getIdToken(e),o=Kd(s);pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ma(sd(o.auth_time)),issuedAtTime:Ma(sd(o.iat)),expirationTime:Ma(sd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function sd(i){return Number(i)*1e3}function Kd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Vu("JWT malformed, contained fewer than 3 sections"),null;try{const o=My(t);return o?JSON.parse(o):(Vu("Failed to decode base64 JWT payload"),null)}catch(o){return Vu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function hg(i){const e=Kd(i);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ba(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof xr&&p0(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function p0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class m0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ed{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Ba(i,Hu(t,{idToken:s}));pe(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?e_(u.providerUserInfo):[],m=y0(i.providerData,h),g=i.isAnonymous,_=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?_:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Ed(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,S)}async function g0(i){const e=zt(i);await Wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function y0(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function e_(i){return i.map(e=>{var{providerId:t}=e,s=Hd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function _0(i,e){const t=await Jy(i,{},async()=>{const s=el({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Zy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&Ro(i.emulatorConfig.host)&&(g.credentials="include"),Xy.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function v0(i,e){return Ri(i,"POST","/v2/accounts:revokeToken",Ai(i,e))}/**
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
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=hg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await _0(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new go;return s&&(pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return Rr("not implemented")}}/**
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
 */function oi(i,e){pe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Hd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new m0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Ed(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ba(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return f0(this,e)}reload(){return g0(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Wu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Pr(this.auth));const e=await this.getIdToken();return await Ba(this,d0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,_,w;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,G=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Q=(m=t.tenantId)!==null&&m!==void 0?m:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ge=(_=t.createdAt)!==null&&_!==void 0?_:void 0,fe=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ye,emailVerified:we,isAnonymous:Ke,providerData:Re,stsTokenManager:D}=t;pe(ye&&D,e,"internal-error");const I=go.fromJSON(this.name,D);pe(typeof ye=="string",e,"internal-error"),oi(S,e.name),oi(C,e.name),pe(typeof we=="boolean",e,"internal-error"),pe(typeof Ke=="boolean",e,"internal-error"),oi(j,e.name),oi(G,e.name),oi(Q,e.name),oi(B,e.name),oi(ge,e.name),oi(fe,e.name);const R=new bn({uid:ye,auth:e,email:C,emailVerified:we,displayName:S,isAnonymous:Ke,photoURL:G,phoneNumber:j,tenantId:Q,stsTokenManager:I,createdAt:ge,lastLoginAt:fe});return Re&&Array.isArray(Re)&&(R.providerData=Re.map(k=>Object.assign({},k))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new go;o.updateFromServerResponse(t);const u=new bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Wu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];pe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?e_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new go;m.updateFromIdToken(s);const g=new bn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Ed(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const dg=new Map;function Cr(i){Dr(i instanceof Function,"Expected a class definition");let e=dg.get(i);return e?(Dr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,dg.set(i,e),e)}/**
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
 */class t_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}t_.type="NONE";const fg=t_;/**
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
 */function Ou(i,e,t){return`firebase:${i}:${e}:${t}`}class yo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Ou(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ou("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Hu(this.auth,{idToken:e}).catch(()=>{});return t?bn._fromGetAccountInfoResponse(this.auth,t,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new yo(Cr(fg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Cr(fg);const h=Ou(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let S;if(typeof w=="string"){const C=await Hu(e,{idToken:w}).catch(()=>{});if(!C)break;S=await bn._fromGetAccountInfoResponse(e,C,w)}else S=bn._fromJSON(e,w);_!==u&&(m=S),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new yo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new yo(u,e,s))}}/**
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
 */function pg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(s_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(n_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(a_(e))return"Blackberry";if(l_(e))return"Webos";if(r_(e))return"Safari";if((e.includes("chrome/")||i_(e))&&!e.includes("edge/"))return"Chrome";if(o_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function n_(i=jt()){return/firefox\//i.test(i)}function r_(i=jt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function i_(i=jt()){return/crios\//i.test(i)}function s_(i=jt()){return/iemobile/i.test(i)}function o_(i=jt()){return/android/i.test(i)}function a_(i=jt()){return/blackberry/i.test(i)}function l_(i=jt()){return/webos/i.test(i)}function Qd(i=jt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function E0(i=jt()){var e;return Qd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function w0(){return Lw()&&document.documentMode===10}function u_(i=jt()){return Qd(i)||o_(i)||l_(i)||a_(i)||/windows phone/i.test(i)||s_(i)}/**
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
 */function c_(i,e=[]){let t;switch(i){case"Browser":t=pg(jt());break;case"Worker":t=`${pg(jt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Co}/${s}`}/**
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
 */class T0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function I0(i,e={}){return Ri(i,"GET","/v2/passwordPolicy",Ai(i,e))}/**
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
 */const S0=6;class A0{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:S0,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class R0{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mg(this),this.idTokenSubscription=new mg(this),this.beforeStateQueue=new T0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Hu(this,{idToken:e}),s=await bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=i0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vn(this.app))return Promise.reject(Pr(this));const t=e?zt(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vn(this.app)?Promise.reject(Pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await I0(this),t=new A0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Za("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await v0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=c_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&t0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function fs(i){return zt(i)}class mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=$w(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function C0(i){lc=i}function h_(i){return lc.loadJS(i)}function P0(){return lc.recaptchaEnterpriseScript}function k0(){return lc.gapiScript}function N0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class D0{constructor(){this.enterprise=new V0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class V0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const O0="recaptcha-enterprise",d_="NO_RECAPTCHA";class x0{constructor(e){this.type=O0,this.auth=fs(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{h0(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new c0(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;cg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(d_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new D0().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&cg(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=P0();g.length!==0&&(g+=m),h_(g).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function gg(i,e,t,s=!1,o=!1){const u=new x0(i);let h;if(o)h=d_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function wd(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await gg(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await gg(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
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
 */function L0(i,e){const t=qd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(os(u,e??{}))return o;jn(o,"already-initialized")}return t.initialize({options:e})}function M0(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Cr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function b0(i,e,t){const s=fs(i);pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=f_(e),{host:h,port:m}=F0(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pe(os(_,s.config.emulator)&&os(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Ro(h)?(jy(`${u}//${h}${g}`),zy("Auth",!0)):U0()}function f_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function F0(i){const e=f_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:yg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:yg(h)}}}function yg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function U0(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Yd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rr("not implemented")}_getIdTokenResponse(e){return Rr("not implemented")}_linkToIdToken(e,t){return Rr("not implemented")}_getReauthenticationResolver(e){return Rr("not implemented")}}async function j0(i,e){return Ri(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function z0(i,e){return nl(i,"POST","/v1/accounts:signInWithPassword",Ai(i,e))}/**
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
 */async function B0(i,e){return nl(i,"POST","/v1/accounts:signInWithEmailLink",Ai(i,e))}async function $0(i,e){return nl(i,"POST","/v1/accounts:signInWithEmailLink",Ai(i,e))}/**
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
 */class $a extends Yd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new $a(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new $a(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wd(e,t,"signInWithPassword",z0);case"emailLink":return B0(e,{email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wd(e,s,"signUpPassword",j0);case"emailLink":return $0(e,{idToken:t,email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function _o(i,e){return nl(i,"POST","/v1/accounts:signInWithIdp",Ai(i,e))}/**
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
 */const q0="http://localhost";class ls extends Yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Hd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ls(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return _o(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,_o(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_o(e,t)}buildRequest(){const e={requestUri:q0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=el(t)}return e}}/**
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
 */function H0(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function W0(i){const e=ka(Na(i)).link,t=e?ka(Na(e)).deep_link_id:null,s=ka(Na(i)).deep_link_id;return(s?ka(Na(s)).link:null)||s||t||e||i}class Xd{constructor(e){var t,s,o,u,h,m;const g=ka(Na(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,S=H0((o=g.mode)!==null&&o!==void 0?o:null);pe(_&&w&&S,"argument-error"),this.apiKey=_,this.operation=S,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=W0(e);try{return new Xd(t)}catch{return null}}}/**
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
 */class Po{constructor(){this.providerId=Po.PROVIDER_ID}static credential(e,t){return $a._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Xd.parseLink(t);return pe(s,"argument-error"),$a._fromEmailAndCode(e,s.code,s.tenantId)}}Po.PROVIDER_ID="password";Po.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Po.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class p_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rl extends p_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ai extends rl{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";ai.PROVIDER_ID="facebook.com";/**
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
 */class li extends rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ls._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return li.credential(t,s)}catch{return null}}}li.GOOGLE_SIGN_IN_METHOD="google.com";li.PROVIDER_ID="google.com";/**
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
 */class ui extends rl{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.GITHUB_SIGN_IN_METHOD="github.com";ui.PROVIDER_ID="github.com";/**
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
 */class ci extends rl{constructor(){super("twitter.com")}static credential(e,t){return ls._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ci.credential(t,s)}catch{return null}}}ci.TWITTER_SIGN_IN_METHOD="twitter.com";ci.PROVIDER_ID="twitter.com";/**
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
 */async function G0(i,e){return nl(i,"POST","/v1/accounts:signUp",Ai(i,e))}/**
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
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await bn._fromIdTokenResponse(e,s,o),h=_g(s);return new us({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=_g(s);return new us({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function _g(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Gu extends xr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Gu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Gu(e,t,s,o)}}function m_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Gu._fromErrorAndOperation(i,u,e,s):u})}async function K0(i,e,t=!1){const s=await Ba(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return us._forOperation(i,"link",s)}/**
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
 */async function Q0(i,e,t=!1){const{auth:s}=i;if(vn(s.app))return Promise.reject(Pr(s));const o="reauthenticate";try{const u=await Ba(i,m_(s,o,e,i),t);pe(u.idToken,s,"internal-error");const h=Kd(u.idToken);pe(h,s,"internal-error");const{sub:m}=h;return pe(i.uid===m,s,"user-mismatch"),us._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&jn(s,"user-mismatch"),u}}/**
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
 */async function g_(i,e,t=!1){if(vn(i.app))return Promise.reject(Pr(i));const s="signIn",o=await m_(i,s,e),u=await us._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function Y0(i,e){return g_(fs(i),e)}/**
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
 */async function y_(i){const e=fs(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function X0(i,e,t){if(vn(i.app))return Promise.reject(Pr(i));const s=fs(i),h=await wd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",G0).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&y_(i),g}),m=await us._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function J0(i,e,t){return vn(i.app)?Promise.reject(Pr(i)):Y0(zt(i),Po.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&y_(i),s})}/**
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
 */function Z0(i,e){return zt(i).setPersistence(e)}function eI(i,e,t,s){return zt(i).onIdTokenChanged(e,t,s)}function tI(i,e,t){return zt(i).beforeAuthStateChanged(e,t)}function nI(i,e,t,s){return zt(i).onAuthStateChanged(e,t,s)}const Ku="__sak";/**
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
 */class __{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ku,"1"),this.storage.removeItem(Ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rI=1e3,iI=10;class v_ extends __{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=u_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);w0()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,iI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}v_.type="LOCAL";const E_=v_;/**
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
 */class w_ extends __{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}w_.type="SESSION";const T_=w_;/**
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
 */function sI(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new uc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await sI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uc.receivers=[];/**
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
 */function Jd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class oI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=Jd("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const C=S;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function tr(){return window}function aI(i){tr().location.href=i}/**
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
 */function I_(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function lI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function cI(){return I_()?self:null}/**
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
 */const S_="firebaseLocalStorageDb",hI=1,Qu="firebaseLocalStorage",A_="fbase_key";class il{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function cc(i,e){return i.transaction([Qu],e?"readwrite":"readonly").objectStore(Qu)}function dI(){const i=indexedDB.deleteDatabase(S_);return new il(i).toPromise()}function Td(){const i=indexedDB.open(S_,hI);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Qu,{keyPath:A_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Qu)?e(s):(s.close(),await dI(),e(await Td()))})})}async function vg(i,e,t){const s=cc(i,!0).put({[A_]:e,value:t});return new il(s).toPromise()}async function fI(i,e){const t=cc(i,!1).get(e),s=await new il(t).toPromise();return s===void 0?null:s.value}function Eg(i,e){const t=cc(i,!0).delete(e);return new il(t).toPromise()}const pI=800,mI=3;class R_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Td(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>mI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uc._getInstance(cI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await lI(),!this.activeServiceWorker)return;this.sender=new oI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Td();return await vg(e,Ku,"1"),await Eg(e,Ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>vg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>fI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Eg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=cc(o,!1).getAll();return new il(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R_.type="LOCAL";const gI=R_;new tl(3e4,6e4);/**
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
 */function yI(i,e){return e?Cr(e):(pe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Zd extends Yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _o(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _o(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _o(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _I(i){return g_(i.auth,new Zd(i),i.bypassAuthState)}function vI(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),Q0(t,new Zd(i),i.bypassAuthState)}async function EI(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),K0(t,new Zd(i),i.bypassAuthState)}/**
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
 */class C_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _I;case"linkViaPopup":case"linkViaRedirect":return EI;case"reauthViaPopup":case"reauthViaRedirect":return vI;default:jn(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wI=new tl(2e3,1e4);class mo extends C_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,mo.currentPopupAction&&mo.currentPopupAction.cancel(),mo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wI.get())};e()}}mo.currentPopupAction=null;/**
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
 */const TI="pendingRedirect",xu=new Map;class II extends C_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=xu.get(this.auth._key());if(!e){try{const s=await SI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}xu.set(this.auth._key(),e)}return this.bypassAuthState||xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SI(i,e){const t=CI(e),s=RI(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function AI(i,e){xu.set(i._key(),e)}function RI(i){return Cr(i._redirectPersistence)}function CI(i){return Ou(TI,i.config.apiKey,i.name)}async function PI(i,e,t=!1){if(vn(i.app))return Promise.reject(Pr(i));const s=fs(i),o=yI(s,e),h=await new II(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const kI=600*1e3;class NI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!P_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(er(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kI&&this.cachedEventUids.clear(),this.cachedEventUids.has(wg(e))}saveEventToCache(e){this.cachedEventUids.add(wg(e)),this.lastProcessedEventTime=Date.now()}}function wg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function P_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P_(i);default:return!1}}/**
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
 */async function VI(i,e={}){return Ri(i,"GET","/v1/projects",e)}/**
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
 */const OI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xI=/^https?/;async function LI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await VI(i);for(const t of e)try{if(MI(t))return}catch{}jn(i,"unauthorized-domain")}function MI(i){const e=vd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!xI.test(t))return!1;if(OI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const bI=new tl(3e4,6e4);function Tg(){const i=tr().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function FI(i){return new Promise((e,t)=>{var s,o,u;function h(){Tg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tg(),t(er(i,"network-request-failed"))},timeout:bI.get()})}if(!((o=(s=tr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=tr().gapi)===null||u===void 0)&&u.load)h();else{const m=N0("iframefcb");return tr()[m]=()=>{gapi.load?h():t(er(i,"network-request-failed"))},h_(`${k0()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Lu=null,e})}let Lu=null;function UI(i){return Lu=Lu||FI(i),Lu}/**
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
 */const jI=new tl(5e3,15e3),zI="__/auth/iframe",BI="emulator/auth/iframe",$I={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HI(i){const e=i.config;pe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Gd(e,BI):`https://${i.config.authDomain}/${zI}`,s={apiKey:e.apiKey,appName:i.name,v:Co},o=qI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${el(s).slice(1)}`}async function WI(i){const e=await UI(i),t=tr().gapi;return pe(t,i,"internal-error"),e.open({where:document.body,url:HI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$I,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=er(i,"network-request-failed"),m=tr().setTimeout(()=>{u(h)},jI.get());function g(){tr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const GI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KI=500,QI=600,YI="_blank",XI="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JI(i,e,t,s=KI,o=QI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},GI),{width:s.toString(),height:o.toString(),top:u,left:h}),_=jt().toLowerCase();t&&(m=i_(_)?YI:t),n_(_)&&(e=e||XI,g.scrollbars="yes");const w=Object.entries(g).reduce((C,[j,G])=>`${C}${j}=${G},`,"");if(E0(_)&&m!=="_self")return ZI(e||"",m),new Ig(null);const S=window.open(e||"",m,w);pe(S,i,"popup-blocked");try{S.focus()}catch{}return new Ig(S)}function ZI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const eS="__/auth/handler",tS="emulator/auth/handler",nS=encodeURIComponent("fac");async function Sg(i,e,t,s,o,u){pe(i.config.authDomain,i,"auth-domain-config-required"),pe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Co,eventId:o};if(e instanceof p_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Bw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,S]of Object.entries({}))h[w]=S}if(e instanceof rl){const w=e.getScopes().filter(S=>S!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),_=g?`#${nS}=${encodeURIComponent(g)}`:"";return`${rS(i)}?${el(m).slice(1)}${_}`}function rS({config:i}){return i.emulator?Gd(i,tS):`https://${i.authDomain}/${eS}`}/**
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
 */const od="webStorageSupport";class iS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T_,this._completeRedirectFn=PI,this._overrideRedirectResult=AI}async _openPopup(e,t,s,o){var u;Dr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Sg(e,t,s,vd(),o);return JI(e,h,Jd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Sg(e,t,s,vd(),o);return aI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Dr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await WI(e),s=new NI(e);return t.register("authEvent",o=>(pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(od,{type:od},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[od];h!==void 0&&t(!!h),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=LI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return u_()||r_()||Qd()}}const sS=iS;var Ag="@firebase/auth",Rg="1.10.8";/**
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
 */class oS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lS(i){Eo(new as("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:c_(i)},_=new R0(s,o,u,g);return M0(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Eo(new as("auth-internal",e=>{const t=fs(e.getProvider("auth").getImmediate());return(s=>new oS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pi(Ag,Rg,aS(i)),pi(Ag,Rg,"esm2017")}/**
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
 */const uS=300,cS=Uy("authIdTokenMaxAge")||uS;let Cg=null;const hS=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>cS)return;const o=t==null?void 0:t.token;Cg!==o&&(Cg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function dS(i=Hy()){const e=qd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=L0(i,{popupRedirectResolver:sS,persistence:[gI,E_,T_]}),s=Uy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=hS(u.toString());tI(t,h,()=>h(t.currentUser)),eI(t,m=>h(m))}}const o=by("auth");return o&&b0(t,`http://${o}`),t}function fS(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}C0({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=er("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",fS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lS("Browser");var pS="firebase",mS="11.10.0";/**
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
 */pi(pS,mS,"app");var Pg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mi,k_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,I){function R(){}R.prototype=I.prototype,D.D=I.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(k,V,x){for(var A=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)A[tt-2]=arguments[tt];return I.prototype[V].apply(k,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,I,R){R||(R=0);var k=Array(16);if(typeof I=="string")for(var V=0;16>V;++V)k[V]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(V=0;16>V;++V)k[V]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=D.g[0],R=D.g[1],V=D.g[2];var x=D.g[3],A=I+(x^R&(V^x))+k[0]+3614090360&4294967295;I=R+(A<<7&4294967295|A>>>25),A=x+(V^I&(R^V))+k[1]+3905402710&4294967295,x=I+(A<<12&4294967295|A>>>20),A=V+(R^x&(I^R))+k[2]+606105819&4294967295,V=x+(A<<17&4294967295|A>>>15),A=R+(I^V&(x^I))+k[3]+3250441966&4294967295,R=V+(A<<22&4294967295|A>>>10),A=I+(x^R&(V^x))+k[4]+4118548399&4294967295,I=R+(A<<7&4294967295|A>>>25),A=x+(V^I&(R^V))+k[5]+1200080426&4294967295,x=I+(A<<12&4294967295|A>>>20),A=V+(R^x&(I^R))+k[6]+2821735955&4294967295,V=x+(A<<17&4294967295|A>>>15),A=R+(I^V&(x^I))+k[7]+4249261313&4294967295,R=V+(A<<22&4294967295|A>>>10),A=I+(x^R&(V^x))+k[8]+1770035416&4294967295,I=R+(A<<7&4294967295|A>>>25),A=x+(V^I&(R^V))+k[9]+2336552879&4294967295,x=I+(A<<12&4294967295|A>>>20),A=V+(R^x&(I^R))+k[10]+4294925233&4294967295,V=x+(A<<17&4294967295|A>>>15),A=R+(I^V&(x^I))+k[11]+2304563134&4294967295,R=V+(A<<22&4294967295|A>>>10),A=I+(x^R&(V^x))+k[12]+1804603682&4294967295,I=R+(A<<7&4294967295|A>>>25),A=x+(V^I&(R^V))+k[13]+4254626195&4294967295,x=I+(A<<12&4294967295|A>>>20),A=V+(R^x&(I^R))+k[14]+2792965006&4294967295,V=x+(A<<17&4294967295|A>>>15),A=R+(I^V&(x^I))+k[15]+1236535329&4294967295,R=V+(A<<22&4294967295|A>>>10),A=I+(V^x&(R^V))+k[1]+4129170786&4294967295,I=R+(A<<5&4294967295|A>>>27),A=x+(R^V&(I^R))+k[6]+3225465664&4294967295,x=I+(A<<9&4294967295|A>>>23),A=V+(I^R&(x^I))+k[11]+643717713&4294967295,V=x+(A<<14&4294967295|A>>>18),A=R+(x^I&(V^x))+k[0]+3921069994&4294967295,R=V+(A<<20&4294967295|A>>>12),A=I+(V^x&(R^V))+k[5]+3593408605&4294967295,I=R+(A<<5&4294967295|A>>>27),A=x+(R^V&(I^R))+k[10]+38016083&4294967295,x=I+(A<<9&4294967295|A>>>23),A=V+(I^R&(x^I))+k[15]+3634488961&4294967295,V=x+(A<<14&4294967295|A>>>18),A=R+(x^I&(V^x))+k[4]+3889429448&4294967295,R=V+(A<<20&4294967295|A>>>12),A=I+(V^x&(R^V))+k[9]+568446438&4294967295,I=R+(A<<5&4294967295|A>>>27),A=x+(R^V&(I^R))+k[14]+3275163606&4294967295,x=I+(A<<9&4294967295|A>>>23),A=V+(I^R&(x^I))+k[3]+4107603335&4294967295,V=x+(A<<14&4294967295|A>>>18),A=R+(x^I&(V^x))+k[8]+1163531501&4294967295,R=V+(A<<20&4294967295|A>>>12),A=I+(V^x&(R^V))+k[13]+2850285829&4294967295,I=R+(A<<5&4294967295|A>>>27),A=x+(R^V&(I^R))+k[2]+4243563512&4294967295,x=I+(A<<9&4294967295|A>>>23),A=V+(I^R&(x^I))+k[7]+1735328473&4294967295,V=x+(A<<14&4294967295|A>>>18),A=R+(x^I&(V^x))+k[12]+2368359562&4294967295,R=V+(A<<20&4294967295|A>>>12),A=I+(R^V^x)+k[5]+4294588738&4294967295,I=R+(A<<4&4294967295|A>>>28),A=x+(I^R^V)+k[8]+2272392833&4294967295,x=I+(A<<11&4294967295|A>>>21),A=V+(x^I^R)+k[11]+1839030562&4294967295,V=x+(A<<16&4294967295|A>>>16),A=R+(V^x^I)+k[14]+4259657740&4294967295,R=V+(A<<23&4294967295|A>>>9),A=I+(R^V^x)+k[1]+2763975236&4294967295,I=R+(A<<4&4294967295|A>>>28),A=x+(I^R^V)+k[4]+1272893353&4294967295,x=I+(A<<11&4294967295|A>>>21),A=V+(x^I^R)+k[7]+4139469664&4294967295,V=x+(A<<16&4294967295|A>>>16),A=R+(V^x^I)+k[10]+3200236656&4294967295,R=V+(A<<23&4294967295|A>>>9),A=I+(R^V^x)+k[13]+681279174&4294967295,I=R+(A<<4&4294967295|A>>>28),A=x+(I^R^V)+k[0]+3936430074&4294967295,x=I+(A<<11&4294967295|A>>>21),A=V+(x^I^R)+k[3]+3572445317&4294967295,V=x+(A<<16&4294967295|A>>>16),A=R+(V^x^I)+k[6]+76029189&4294967295,R=V+(A<<23&4294967295|A>>>9),A=I+(R^V^x)+k[9]+3654602809&4294967295,I=R+(A<<4&4294967295|A>>>28),A=x+(I^R^V)+k[12]+3873151461&4294967295,x=I+(A<<11&4294967295|A>>>21),A=V+(x^I^R)+k[15]+530742520&4294967295,V=x+(A<<16&4294967295|A>>>16),A=R+(V^x^I)+k[2]+3299628645&4294967295,R=V+(A<<23&4294967295|A>>>9),A=I+(V^(R|~x))+k[0]+4096336452&4294967295,I=R+(A<<6&4294967295|A>>>26),A=x+(R^(I|~V))+k[7]+1126891415&4294967295,x=I+(A<<10&4294967295|A>>>22),A=V+(I^(x|~R))+k[14]+2878612391&4294967295,V=x+(A<<15&4294967295|A>>>17),A=R+(x^(V|~I))+k[5]+4237533241&4294967295,R=V+(A<<21&4294967295|A>>>11),A=I+(V^(R|~x))+k[12]+1700485571&4294967295,I=R+(A<<6&4294967295|A>>>26),A=x+(R^(I|~V))+k[3]+2399980690&4294967295,x=I+(A<<10&4294967295|A>>>22),A=V+(I^(x|~R))+k[10]+4293915773&4294967295,V=x+(A<<15&4294967295|A>>>17),A=R+(x^(V|~I))+k[1]+2240044497&4294967295,R=V+(A<<21&4294967295|A>>>11),A=I+(V^(R|~x))+k[8]+1873313359&4294967295,I=R+(A<<6&4294967295|A>>>26),A=x+(R^(I|~V))+k[15]+4264355552&4294967295,x=I+(A<<10&4294967295|A>>>22),A=V+(I^(x|~R))+k[6]+2734768916&4294967295,V=x+(A<<15&4294967295|A>>>17),A=R+(x^(V|~I))+k[13]+1309151649&4294967295,R=V+(A<<21&4294967295|A>>>11),A=I+(V^(R|~x))+k[4]+4149444226&4294967295,I=R+(A<<6&4294967295|A>>>26),A=x+(R^(I|~V))+k[11]+3174756917&4294967295,x=I+(A<<10&4294967295|A>>>22),A=V+(I^(x|~R))+k[2]+718787259&4294967295,V=x+(A<<15&4294967295|A>>>17),A=R+(x^(V|~I))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+I&4294967295,D.g[1]=D.g[1]+(V+(A<<21&4294967295|A>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+x&4294967295}s.prototype.u=function(D,I){I===void 0&&(I=D.length);for(var R=I-this.blockSize,k=this.B,V=this.h,x=0;x<I;){if(V==0)for(;x<=R;)o(this,D,x),x+=this.blockSize;if(typeof D=="string"){for(;x<I;)if(k[V++]=D.charCodeAt(x++),V==this.blockSize){o(this,k),V=0;break}}else for(;x<I;)if(k[V++]=D[x++],V==this.blockSize){o(this,k),V=0;break}}this.h=V,this.o+=I},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var I=1;I<D.length-8;++I)D[I]=0;var R=8*this.o;for(I=D.length-8;I<D.length;++I)D[I]=R&255,R/=256;for(this.u(D),D=Array(16),I=R=0;4>I;++I)for(var k=0;32>k;k+=8)D[R++]=this.g[I]>>>k&255;return D};function u(D,I){var R=m;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=I(D)}function h(D,I){this.h=I;for(var R=[],k=!0,V=D.length-1;0<=V;V--){var x=D[V]|0;k&&x==I||(R[V]=x,k=!1)}this.g=R}var m={};function g(D){return-128<=D&&128>D?u(D,function(I){return new h([I|0],0>I?-1:0)}):new h([D|0],0>D?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return S;if(0>D)return B(_(-D));for(var I=[],R=1,k=0;D>=R;k++)I[k]=D/R|0,R*=4294967296;return new h(I,0)}function w(D,I){if(D.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D.charAt(0)=="-")return B(w(D.substring(1),I));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(I,8)),k=S,V=0;V<D.length;V+=8){var x=Math.min(8,D.length-V),A=parseInt(D.substring(V,V+x),I);8>x?(x=_(Math.pow(I,x)),k=k.j(x).add(_(A))):(k=k.j(R),k=k.add(_(A)))}return k}var S=g(0),C=g(1),j=g(16777216);i=h.prototype,i.m=function(){if(Q(this))return-B(this).m();for(var D=0,I=1,R=0;R<this.g.length;R++){var k=this.i(R);D+=(0<=k?k:4294967296+k)*I,I*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(G(this))return"0";if(Q(this))return"-"+B(this).toString(D);for(var I=_(Math.pow(D,6)),R=this,k="";;){var V=we(R,I).g;R=ge(R,V.j(I));var x=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=V,G(R))return x+k;for(;6>x.length;)x="0"+x;k=x+k}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function G(D){if(D.h!=0)return!1;for(var I=0;I<D.g.length;I++)if(D.g[I]!=0)return!1;return!0}function Q(D){return D.h==-1}i.l=function(D){return D=ge(this,D),Q(D)?-1:G(D)?0:1};function B(D){for(var I=D.g.length,R=[],k=0;k<I;k++)R[k]=~D.g[k];return new h(R,~D.h).add(C)}i.abs=function(){return Q(this)?B(this):this},i.add=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0,V=0;V<=I;V++){var x=k+(this.i(V)&65535)+(D.i(V)&65535),A=(x>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);k=A>>>16,x&=65535,A&=65535,R[V]=A<<16|x}return new h(R,R[R.length-1]&-2147483648?-1:0)};function ge(D,I){return D.add(B(I))}i.j=function(D){if(G(this)||G(D))return S;if(Q(this))return Q(D)?B(this).j(B(D)):B(B(this).j(D));if(Q(D))return B(this.j(B(D)));if(0>this.l(j)&&0>D.l(j))return _(this.m()*D.m());for(var I=this.g.length+D.g.length,R=[],k=0;k<2*I;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(var V=0;V<D.g.length;V++){var x=this.i(k)>>>16,A=this.i(k)&65535,tt=D.i(V)>>>16,Dt=D.i(V)&65535;R[2*k+2*V]+=A*Dt,fe(R,2*k+2*V),R[2*k+2*V+1]+=x*Dt,fe(R,2*k+2*V+1),R[2*k+2*V+1]+=A*tt,fe(R,2*k+2*V+1),R[2*k+2*V+2]+=x*tt,fe(R,2*k+2*V+2)}for(k=0;k<I;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=I;k<2*I;k++)R[k]=0;return new h(R,0)};function fe(D,I){for(;(D[I]&65535)!=D[I];)D[I+1]+=D[I]>>>16,D[I]&=65535,I++}function ye(D,I){this.g=D,this.h=I}function we(D,I){if(G(I))throw Error("division by zero");if(G(D))return new ye(S,S);if(Q(D))return I=we(B(D),I),new ye(B(I.g),B(I.h));if(Q(I))return I=we(D,B(I)),new ye(B(I.g),I.h);if(30<D.g.length){if(Q(D)||Q(I))throw Error("slowDivide_ only works with positive integers.");for(var R=C,k=I;0>=k.l(D);)R=Ke(R),k=Ke(k);var V=Re(R,1),x=Re(k,1);for(k=Re(k,2),R=Re(R,2);!G(k);){var A=x.add(k);0>=A.l(D)&&(V=V.add(R),x=A),k=Re(k,1),R=Re(R,1)}return I=ge(D,V.j(I)),new ye(V,I)}for(V=S;0<=D.l(I);){for(R=Math.max(1,Math.floor(D.m()/I.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),x=_(R),A=x.j(I);Q(A)||0<A.l(D);)R-=k,x=_(R),A=x.j(I);G(x)&&(x=C),V=V.add(x),D=ge(D,A)}return new ye(V,D)}i.A=function(D){return we(this,D).h},i.and=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)&D.i(k);return new h(R,this.h&D.h)},i.or=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)|D.i(k);return new h(R,this.h|D.h)},i.xor=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)^D.i(k);return new h(R,this.h^D.h)};function Ke(D){for(var I=D.g.length+1,R=[],k=0;k<I;k++)R[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(R,D.h)}function Re(D,I){var R=I>>5;I%=32;for(var k=D.g.length-R,V=[],x=0;x<k;x++)V[x]=0<I?D.i(x+R)>>>I|D.i(x+R+1)<<32-I:D.i(x+R);return new h(V,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,k_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,mi=h}).apply(typeof Pg<"u"?Pg:typeof self<"u"?self:typeof window<"u"?window:{});var Ru=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var N_,Da,D_,Mu,Id,V_,O_,x_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ru=="object"&&Ru];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,L={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function S(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function C(l,f,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:S,C.apply(null,arguments)}function j(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function G(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var X=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)X[Fe-2]=arguments[Fe];return f.prototype[L].apply(E,X)}}function Q(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function B(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let X=0;X<U;X++)l[L+X]=E[X]}else l.push(E)}}class ge{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function fe(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function we(l){return we[" "](l),l}we[" "]=function(){};var Ke=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Re(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function D(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let U=0;U<R.length;U++)y=R[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function V(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function x(l){m.setTimeout(()=>{throw l},0)}function A(){var l=ce;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class tt{constructor(){this.h=this.g=null}add(f,y){const E=Dt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Dt=new ge(()=>new Vt,l=>l.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,J=!1,ce=new tt,re=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(O)}};var O=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(y){x(y)}var f=Dt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Te=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l})();function Se(l,f){if(le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Ke){e:{try{we(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Se.aa.h.call(this)}}G(Se,le);var Ne={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function ze(l,f,y,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++Me,this.da=this.fa=!1}function yt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function lr(l){this.src=l,this.g={},this.h=0}lr.prototype.add=function(l,f,y,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var X=Lr(l,f,E,L);return-1<X?(f=l[X],y||(f.fa=!1)):(f=new ze(f,this.src,U,!!E,L),f.fa=y,l.push(f)),f};function _s(l,f){var y=f.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(yt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Lr(l,f,y,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return L}return-1}var Pi="closure_lm_"+(1e6*Math.random()|0),vs={};function xo(l,f,y,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)xo(l,f[U],y,E,L);return null}return y=bo(y),l&&l[Le]?l.K(f,y,_(E)?!!E.capture:!1,L):Lo(l,f,y,!1,E,L)}function Lo(l,f,y,E,L,U){if(!f)throw Error("Invalid event type");var X=_(L)?!!L.capture:!!L,Fe=ws(l);if(Fe||(l[Pi]=Fe=new lr(l)),y=Fe.add(f,y,E,X,U),y.proxy)return y;if(E=cl(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Te||(L=X),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(cr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function cl(){function l(y){return f.call(l.src,l.listener,y)}const f=Mo;return l}function Es(l,f,y,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)Es(l,f[U],y,E,L);else E=_(E)?!!E.capture:!!E,y=bo(y),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Lr(U,y,E,L),-1<y&&(yt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=ws(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Lr(f,y,E,L)),(y=-1<l?f[l]:null)&&ur(y))}function ur(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])_s(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(cr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=ws(f))?(_s(y,l),y.h==0&&(y.src=null,f[Pi]=null)):yt(l)}}}function cr(l){return l in vs?vs[l]:vs[l]="on"+l}function Mo(l,f){if(l.da)l=!0;else{f=new Se(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&ur(l),l=y.call(E,f)}return l}function ws(l){return l=l[Pi],l instanceof lr?l:null}var Ts="__closure_events_fn_"+(1e9*Math.random()>>>0);function bo(l){return typeof l=="function"?l:(l[Ts]||(l[Ts]=function(f){return l.handleEvent(f)}),l[Ts])}function ht(){q.call(this),this.i=new lr(this),this.M=this,this.F=null}G(ht,q),ht.prototype[Le]=!0,ht.prototype.removeEventListener=function(l,f,y,E){Es(this,l,f,y,E)};function dt(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new le(f,l);else if(f instanceof le)f.target=f.target||l;else{var L=f;f=new le(E,l),k(f,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var X=f.g=y[U];L=hr(X,E,!0,f)&&L}if(X=f.g=l,L=hr(X,E,!0,f)&&L,L=hr(X,E,!1,f)&&L,y)for(U=0;U<y.length;U++)X=f.g=y[U],L=hr(X,E,!1,f)&&L}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)yt(y[E]);delete l.g[f],l.h--}}this.F=null},ht.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},ht.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function hr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var X=f[U];if(X&&!X.da&&X.capture==y){var Fe=X.listener,ft=X.ha||X.src;X.fa&&_s(l.i,X),L=Fe.call(ft,E)!==!1&&L}}return L&&!E.defaultPrevented}function Fo(l,f,y){if(typeof l=="function")y&&(l=C(l,y));else if(l&&typeof l.handleEvent=="function")l=C(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Mr(l){l.g=Fo(()=>{l.g=null,l.i&&(l.i=!1,Mr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class ki extends q{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Mr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ni(l){q.call(this),this.h=l,this.g={}}G(Ni,q);var Uo=[];function jo(l){Re(l.g,function(f,y){this.g.hasOwnProperty(y)&&ur(f)},l),l.g={}}Ni.prototype.N=function(){Ni.aa.N.call(this),jo(this)},Ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zo=m.JSON.stringify,Bo=m.JSON.parse,$o=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Di(){}Di.prototype.h=null;function Is(l){return l.h||(l.h=l.i())}function Ss(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bn(){le.call(this,"d")}G(Bn,le);function As(){le.call(this,"c")}G(As,le);var $n={},qo=null;function Vi(){return qo=qo||new ht}$n.La="serverreachability";function Ho(l){le.call(this,$n.La,l)}G(Ho,le);function dr(l){const f=Vi();dt(f,new Ho(f))}$n.STAT_EVENT="statevent";function Wo(l,f){le.call(this,$n.STAT_EVENT,l),this.stat=f}G(Wo,le);function nt(l){const f=Vi();dt(f,new Wo(f,l))}$n.Ma="timingevent";function Rs(l,f){le.call(this,$n.Ma,l),this.size=f}G(Rs,le);function Tn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Oi(){this.g=!0}Oi.prototype.xa=function(){this.g=!1};function xi(l,f,y,E,L,U){l.info(function(){if(l.g)if(U)for(var X="",Fe=U.split("&"),ft=0;ft<Fe.length;ft++){var De=Fe[ft].split("=");if(1<De.length){var _t=De[0];De=De[1];var ot=_t.split("_");X=2<=ot.length&&ot[1]=="type"?X+(_t+"="+De+"&"):X+(_t+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+X})}function Cs(l,f,y,E,L,U,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+U+" "+X})}function In(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Rc(l,y)+(E?" "+E:"")})}function Go(l,f){l.info(function(){return"TIMEOUT: "+f})}Oi.prototype.info=function(){};function Rc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<L.length;X++)L[X]=""}}}}return zo(y)}catch{return f}}var Ps={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function Li(){}G(Li,Di),Li.prototype.g=function(){return new XMLHttpRequest},Li.prototype.i=function(){return{}},Sn=new Li;function An(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new Ni(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}var Ko={},ks={};function Ns(l,f,y){l.L=1,l.v=zr(nn(f)),l.m=y,l.P=!0,Qo(l,null)}function Qo(l,f){l.F=Date.now(),Be(l),l.A=nn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),$r(y.i,"t",E),l.C=0,y=l.j.J,l.h=new dl,l.g=Nl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new ki(C(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Uo[0]=L.toString()),L=Uo);for(var U=0;U<L.length;U++){var X=xo(y,L[U],E||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),dr(),xi(l.i,l.u,l.A,l.l,l.R,l.m)}An.prototype.ca=function(l){l=l.target;const f=this.M;f&&Gt(l)==3?f.j():this.Y(l)},An.prototype.Y=function(l){try{if(l==this.g)e:{const ot=Gt(this.g);var f=this.g.Ba();const dn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||ta(this.g)))){this.J||ot!=4||f==7||(f==8||0>=dn?dr(3):dr(2)),Mi(this);var y=this.g.Z();this.X=y;t:if(fl(this)){var E=ta(this.g);l="";var L=E.length,U=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),br(this);var X="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=y==200,Cs(this.i,this.u,this.A,this.l,this.R,ot,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ft=this.g;if((Fe=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fe(Fe)){var De=Fe;break t}}De=null}if(y=De)In(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yo(this,y);else{this.o=!1,this.s=3,nt(12),cn(this),br(this);break e}}if(this.P){y=!0;let sn;for(;!this.J&&this.C<X.length;)if(sn=Cc(this,X),sn==ks){ot==4&&(this.s=4,nt(14),y=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Ko){this.s=4,nt(15),In(this.i,this.l,X,"[Invalid Chunk]"),y=!1;break}else In(this.i,this.l,sn,null),Yo(this,sn);if(fl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||X.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)In(this.i,this.l,X,"[Invalid Chunked Response]"),cn(this),br(this);else if(0<X.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),ra(_t),_t.M=!0,nt(11))}}else In(this.i,this.l,X,null),Yo(this,X);ot==4&&cn(this),this.o&&!this.J&&(ot==4?zs(this.j,this):(this.o=!1,Be(this)))}else Ms(this.g),y==400&&0<X.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),cn(this),br(this)}}}catch{}finally{}};function fl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Cc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?ks:(y=Number(f.substring(y,E)),isNaN(y)?Ko:(E+=1,E+y>f.length?ks:(f=f.slice(E,E+y),l.C=E+y,f)))}An.prototype.cancel=function(){this.J=!0,cn(this)};function Be(l){l.S=Date.now()+l.I,pl(l,l.I)}function pl(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Tn(C(l.ba,l),f)}function Mi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}An.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Go(this.i,this.A),this.L!=2&&(dr(),nt(17)),cn(this),this.s=2,br(this)):pl(this,this.S-l)};function br(l){l.j.G==0||l.J||zs(l.j,l)}function cn(l){Mi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,jo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Yo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Bt(y.h,l))){if(!l.K&&Bt(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)js(y),Nn(y);else break e;Us(y),nt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Tn(C(y.Za,y),6e3));if(1>=gl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else yr(y,11)}else if((l.K||y.g==l)&&js(y),!fe(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let De=L[f];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const _t=De[3];_t!=null&&(y.la=_t,y.j.info("VER="+y.la));const ot=De[4];ot!=null&&(y.Aa=ot,y.j.info("SVER="+y.Aa));const dn=De[5];dn!=null&&typeof dn=="number"&&0<dn&&(E=1.5*dn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const sn=l.g;if(sn){const $i=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var U=E.h;U.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Xo(U,U.h),U.h=null))}if(E.D){const $s=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;$s&&(E.ya=$s,je(E.I,E.D,$s))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var X=l;if(E.qa=kl(E,E.J?E.ia:null,E.W),X.K){yl(E.h,X);var Fe=X,ft=E.L;ft&&(Fe.I=ft),Fe.B&&(Mi(Fe),Be(Fe)),E.g=X}else Bi(E);0<y.i.length&&Gn(y)}else De[0]!="stop"&&De[0]!="close"||yr(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?yr(y,7):St(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}dr(4)}catch{}}var ml=class{constructor(l,f){this.g=l,this.map=f}};function bi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function gl(l){return l.h?1:l.g?l.g.size:0}function Bt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Xo(l,f){l.g?l.g.add(f):l.h=f}function yl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}bi.prototype.cancel=function(){if(this.i=_l(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function _l(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return Q(l.i)}function Ds(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function Vs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Fr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Vs(l),E=Ds(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],y&&y[U],l)}var Fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),L=null;if(0<=E){var U=l[y].substring(0,E);L=l[y].substring(E+1)}else U=l[y];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function fr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof fr){this.h=l.h,Ui(this,l.j),this.o=l.o,this.g=l.g,Ur(this,l.s),this.l=l.l;var f=l.i,y=new qn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),jr(this,y),this.m=l.m}else l&&(f=String(l).match(Fi))?(this.h=!1,Ui(this,f[1]||"",!0),this.o=ke(f[2]||""),this.g=ke(f[3]||"",!0),Ur(this,f[4]),this.l=ke(f[5]||"",!0),jr(this,f[6]||"",!0),this.m=ke(f[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}fr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Br(f,Os,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Br(f,Os,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Br(y,y.charAt(0)=="/"?wl:El,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Br(y,Jo)),l.join("")};function nn(l){return new fr(l)}function Ui(l,f,y){l.j=y?ke(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Ur(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function jr(l,f,y){f instanceof qn?(l.i=f,Hn(l.i,l.h)):(y||(f=Br(f,Tl)),l.i=new qn(f,l.h))}function je(l,f,y){l.i.set(f,y)}function zr(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ke(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Br(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,vl),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function vl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Os=/[#\/\?@]/g,El=/[#\?:]/g,wl=/[#\?]/g,Tl=/[#\?@]/g,Jo=/#/g;function qn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function It(l){l.g||(l.g=new Map,l.h=0,l.i&&Pc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=qn.prototype,i.add=function(l,f){It(this),this.i=null,l=hn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Rn(l,f){It(l),f=hn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Cn(l,f){return It(l),f=hn(l,f),l.g.has(f)}i.forEach=function(l,f){It(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){It(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)y.push(f[E])}return y},i.V=function(l){It(this);let f=[];if(typeof l=="string")Cn(this,l)&&(f=f.concat(this.g.get(hn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return It(this),this.i=null,l=hn(this,l),Cn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function $r(l,f,y){Rn(l,f),0<y.length&&(l.i=null,l.g.set(hn(l,f),Q(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var L=U;X[E]!==""&&(L+="="+encodeURIComponent(String(X[E]))),l.push(L)}}return this.i=l.join("&")};function hn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Hn(l,f){f&&!l.j&&(It(l),l.i=null,l.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Rn(this,E),$r(this,L,y))},l)),l.j=f}function kc(l,f){const y=new Oi;if(m.Image){const E=new Image;E.onload=j(Wt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j(Wt,y,"TestLoadImage: error",!1,f,E),E.onabort=j(Wt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(Wt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function Il(l,f){const y=new Oi,E=new AbortController,L=setTimeout(()=>{E.abort(),Wt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?Wt(y,"TestPingServer: ok",!0,f):Wt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Wt(y,"TestPingServer: error",!1,f)})}function Wt(l,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Nc(){this.g=new $o}function Sl(l,f,y){const E=y||"";try{Fr(l,function(L,U){let X=L;_(L)&&(X=zo(L)),f.push(E+U+"="+encodeURIComponent(X))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function pr(l){this.l=l.Ub||null,this.j=l.eb||!1}G(pr,Di),pr.prototype.g=function(){return new ji(this.l,this.j)},pr.prototype.i=(function(l){return function(){return l}})({});function ji(l,f){ht.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(ji,ht),i=ji.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,kn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Al(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Al(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Pn(this):kn(this),this.readyState==3&&Al(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Pn(this))},i.Qa=function(l){this.g&&(this.response=l,Pn(this))},i.ga=function(){this.g&&Pn(this)};function Pn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,kn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function kn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function mr(l){let f="";return Re(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function qr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=mr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):je(l,f,y))}function Qe(l){ht.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(Qe,ht);var Dc=/^https?$/i,Zo=["POST","PUT"];i=Qe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?Is(this.o):Is(Sn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){zi(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Zo,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of y)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ls(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){zi(this,U)}};function zi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,xs(l),rn(l)}function xs(l){l.A||(l.A=!0,dt(l,"complete"),dt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,dt(this,"complete"),dt(this,"abort"),rn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rn(this,!0)),Qe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?ea(this):this.bb())},i.bb=function(){ea(this)};function ea(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Gt(l)!=4||l.Z()!=2)){if(l.u&&Gt(l)==4)Fo(l.Ea,0,l);else if(dt(l,"readystatechange"),Gt(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=X===0){var L=String(l.D).match(Fi)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Dc.test(L?L.toLowerCase():"")}y=E}if(y)dt(l,"complete"),dt(l,"success");else{l.m=6;try{var U=2<Gt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",xs(l)}}finally{rn(l)}}}}function rn(l,f){if(l.g){Ls(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||dt(l,"ready");try{y.onreadystatechange=E}catch{}}}function Ls(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Gt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Bo(f)}};function ta(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ms(l){const f={};l=(l.g&&2<=Gt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(fe(l[E]))continue;var y=V(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[L]||[];f[L]=U,U.push(y)}D(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function na(l){this.Aa=0,this.i=[],this.j=new Oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,l),this.cb=Wn("retryDelaySeedMs",1e4,l),this.Wa=Wn("forwardChannelMaxRetries",2,l),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new bi(l&&l.concurrentRequestLimit),this.Da=new Nc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=na.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){nt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=kl(this,null,this.W),Gn(this)};function St(l){if(bs(l),l.G==3){var f=l.U++,y=nn(l.I);if(je(y,"SID",l.K),je(y,"RID",f),je(y,"TYPE","terminate"),gr(l,y),f=new An(l,l.j,f),f.L=2,f.v=zr(nn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=Nl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Be(f)}Pl(l)}function Nn(l){l.g&&(ra(l),l.g.cancel(),l.g=null)}function bs(l){Nn(l),l.u&&(m.clearTimeout(l.u),l.u=null),js(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Gn(l){if(!tn(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||re(),J||(Ue(),J=!0),ce.add(f,l),l.B=0}}function Vc(l,f){return gl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Tn(C(l.Ga,l,f),Cl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new An(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),k(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Hr(this,L,f),y=nn(this.I),je(y,"RID",l),je(y,"CVER",22),this.D&&je(y,"X-HTTP-Session-Id",this.D),gr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(mr(U)))+"&"+f:this.m&&qr(y,this.m,U)),Xo(this.h,L),this.Ua&&je(y,"TYPE","init"),this.P?(je(y,"$req",f),je(y,"SID","null"),L.T=!0,Ns(L,y,null)):Ns(L,y,f),this.G=2}}else this.G==3&&(l?Fs(this,l):this.i.length==0||tn(this.h)||Fs(this))};function Fs(l,f){var y;f?y=f.l:y=l.U++;const E=nn(l.I);je(E,"SID",l.K),je(E,"RID",y),je(E,"AID",l.T),gr(l,E),l.m&&l.o&&qr(E,l.m,l.o),y=new An(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Hr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Xo(l.h,y),Ns(y,E,f)}function gr(l,f){l.H&&Re(l.H,function(y,E){je(f,E,y)}),l.l&&Fr({},function(y,E){je(f,E,y)})}function Hr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?C(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const X=["count="+y];U==-1?0<y?(U=L[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let Fe=!0;for(let ft=0;ft<y;ft++){let De=L[ft].g;const _t=L[ft].map;if(De-=U,0>De)U=Math.max(0,L[ft].g-100),Fe=!1;else try{Sl(_t,X,"req"+De+"_")}catch{E&&E(_t)}}if(Fe){E=X.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Bi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||re(),J||(Ue(),J=!0),ce.add(f,l),l.v=0}}function Us(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Tn(C(l.Fa,l),Cl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,Rl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Tn(C(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Nn(this),Rl(this))};function ra(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function Rl(l){l.g=new An(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=nn(l.qa);je(f,"RID","rpc"),je(f,"SID",l.K),je(f,"AID",l.T),je(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(f,"TO",l.ja),je(f,"TYPE","xmlhttp"),gr(l,f),l.m&&l.o&&qr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=zr(nn(f)),y.m=null,y.P=!0,Qo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Nn(this),Us(this),nt(19))};function js(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function zs(l,f){var y=null;if(l.g==f){js(l),ra(l),l.g=null;var E=2}else if(Bt(l.h,f))y=f.D,yl(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=Vi(),dt(E,new Rs(E,y)),Gn(l)}else Bi(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Vc(l,f)||E==2&&Us(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),L){case 1:yr(l,5);break;case 4:yr(l,10);break;case 3:yr(l,6);break;default:yr(l,2)}}}function Cl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function yr(l,f){if(l.j.info("Error code "+f),f==2){var y=C(l.fb,l),E=l.Xa;const L=!E;E=new fr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ui(E,"https"),zr(E),L?kc(E.toString(),y):Il(E.toString(),y)}else nt(2);l.G=0,l.l&&l.l.sa(f),Pl(l),bs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Pl(l){if(l.G=0,l.ka=[],l.l){const f=_l(l.h);(f.length!=0||l.i.length!=0)&&(B(l.ka,f),B(l.ka,l.i),l.h.i.length=0,Q(l.i),l.i.length=0),l.l.ra()}}function kl(l,f,y){var E=y instanceof fr?nn(y):new fr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Ur(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new fr(null);E&&Ui(U,E),f&&(U.g=f),L&&Ur(U,L),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&je(E,y,f),je(E,"VER",l.la),gr(l,E),E}function Nl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Qe(new pr({eb:y})):new Qe(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ia(){}i=ia.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Bs(){}Bs.prototype.g=function(l,f){return new $t(l,f)};function $t(l,f){ht.call(this),this.g=new na(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!fe(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!fe(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Kn(this)}G($t,ht),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){St(this.g)},$t.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=zo(l),l=y);f.i.push(new ml(f.Ya++,l)),f.G==3&&Gn(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,St(this.g),delete this.g,$t.aa.N.call(this)};function Dl(l){Bn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}G(Dl,Bn);function Vl(){As.call(this),this.status=1}G(Vl,As);function Kn(l){this.g=l}G(Kn,ia),Kn.prototype.ua=function(){dt(this.g,"a")},Kn.prototype.ta=function(l){dt(this.g,new Dl(l))},Kn.prototype.sa=function(l){dt(this.g,new Vl)},Kn.prototype.ra=function(){dt(this.g,"b")},Bs.prototype.createWebChannel=Bs.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,x_=function(){return new Bs},O_=function(){return Vi()},V_=$n,Id={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ps.NO_ERROR=0,Ps.TIMEOUT=8,Ps.HTTP_ERROR=6,Mu=Ps,hl.COMPLETE="complete",D_=hl,Ss.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Da=Ss,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,N_=Qe}).apply(typeof Ru<"u"?Ru:typeof self<"u"?self:typeof window<"u"?window:{});const kg="@firebase/firestore",Ng="4.8.0";/**
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
 */let ko="11.10.0";/**
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
 */const cs=new Bd("@firebase/firestore");function co(){return cs.logLevel}function ne(i,...e){if(cs.logLevel<=Ce.DEBUG){const t=e.map(ef);cs.debug(`Firestore (${ko}): ${i}`,...t)}}function Vr(i,...e){if(cs.logLevel<=Ce.ERROR){const t=e.map(ef);cs.error(`Firestore (${ko}): ${i}`,...t)}}function yi(i,...e){if(cs.logLevel<=Ce.WARN){const t=e.map(ef);cs.warn(`Firestore (${ko}): ${i}`,...t)}}function ef(i){if(typeof i=="string")return i;try{/**
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
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
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
 */function me(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,L_(i,s,t)}function L_(i,e,t){let s=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Vr(s),new Error(s)}function be(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||L_(e,o,s)}function Ee(i,e){return i}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends xr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class M_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class yS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class _S{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new kr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new kr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string",31837,{l:s}),new M_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class vS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ES{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new vS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Dg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){be(this.o===void 0,3512);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Dg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Dg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function TS(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function b_(){return new TextEncoder}/**
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
 */class tf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=TS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ie(i,e){return i<e?-1:i>e?1:0}function Sd(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ie(s,o);{const u=b_(),h=IS(u.encode(Vg(i,t)),u.encode(Vg(e,t)));return h!==0?h:Ie(s,o)}}t+=s>65535?2:1}return Ie(i.length,e.length)}function Vg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function IS(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ie(i[t],e[t]);return Ie(i.length,e.length)}function wo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const Og="__name__";class Zn{constructor(e,t,s){t===void 0?t=0:t>e.length&&me(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&me(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Zn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Zn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ie(e.length,t.length)}static compareSegments(e,t){const s=Zn.isNumericId(e),o=Zn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Zn.extractNumericId(e).compare(Zn.extractNumericId(t)):Sd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mi.fromString(e.substring(4,e.length-2))}}class qe extends Zn{construct(e,t,s){return new qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ee(z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new qe(t)}static emptyPath(){return new qe([])}}const SS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Zn{construct(e,t,s){return new Pt(e,t,s)}static isValidIdentifier(e){return SS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Og}static keyField(){return new Pt([Og])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ee(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ee(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ee(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(qe.fromString(e))}static fromName(e){return new ue(qe.fromString(e).popFirst(5))}static empty(){return new ue(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new qe(e.slice()))}}/**
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
 */function F_(i,e,t){if(!t)throw new ee(z.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function AS(i,e,t,s){if(e===!0&&s===!0)throw new ee(z.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function xg(i){if(!ue.isDocumentKey(i))throw new ee(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Lg(i){if(ue.isDocumentKey(i))throw new ee(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function U_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function hc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":me(12329,{type:typeof i})}function Un(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ee(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=hc(i);throw new ee(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function ct(i,e){const t={typeString:i};return e&&(t.value=e),t}function sl(i,e){if(!U_(i))throw new ee(z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ee(z.INVALID_ARGUMENT,t);return!0}/**
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
 */const Mg=-62135596800,bg=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*bg);return new Ge(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Mg)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bg}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(sl(e,Ge._jsonSchema))return new Ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Mg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ge._jsonSchemaVersion="firestore/timestamp/1.0",Ge._jsonSchema={type:ct("string",Ge._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
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
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Ge(0,0))}static max(){return new ve(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const qa=-1;function RS(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new Ge(t+1,0):new Ge(t,s));return new _i(o,ue.empty(),e)}function CS(i){return new _i(i.readTime,i.key,qa)}class _i{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new _i(ve.min(),ue.empty(),qa)}static max(){return new _i(ve.max(),ue.empty(),qa)}}function PS(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(i.documentKey,e.documentKey),t!==0?t:Ie(i.largestBatchId,e.largestBatchId))}/**
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
 */const kS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function No(i){if(i.code!==z.FAILED_PRECONDITION||i.message!==kS)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function DS(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Do(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class dc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}dc.ue=-1;/**
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
 */const nf=-1;function fc(i){return i==null}function Yu(i){return i===0&&1/i==-1/0}function VS(i){return typeof i=="number"&&Number.isInteger(i)&&!Yu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const j_="";function OS(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Fg(e)),e=xS(i.get(t),e);return Fg(e)}function xS(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case j_:t+="";break;default:t+=u}}return t}function Fg(i){return i+j_+""}/**
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
 */function Ug(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ps(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function z_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cu(this.root,e,this.comparator,!0)}}class Cu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=u??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jg(this.data.getIterator())}getIteratorFrom(e){return new jg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new gt(this.comparator);return t.data=e,t}}class jg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Fn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new Fn([])}unionWith(e){let t=new gt(Pt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class B_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new B_("Invalid base64 string: "+u):u}})(e);return new Nt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const LS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vi(i){if(be(!!i,39018),typeof i=="string"){let e=0;const t=LS.exec(i);if(be(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(i.seconds),nanos:it(i.nanos)}}function it(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ei(i){return typeof i=="string"?Nt.fromBase64String(i):Nt.fromUint8Array(i)}/**
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
 */const $_="server_timestamp",q_="__type__",H_="__previous_value__",W_="__local_write_time__";function rf(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[q_])===null||t===void 0?void 0:t.stringValue)===$_}function pc(i){const e=i.mapValue.fields[H_];return rf(e)?pc(e):e}function Ha(i){const e=vi(i.mapValue.fields[W_].timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class MS{constructor(e,t,s,o,u,h,m,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const Xu="(default)";class Wa{constructor(e,t){this.projectId=e,this.database=t||Xu}static empty(){return new Wa("","")}get isDefaultDatabase(){return this.database===Xu}isEqual(e){return e instanceof Wa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const G_="__type__",bS="__max__",Pu={mapValue:{}},K_="__vector__",Ju="value";function wi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?rf(i)?4:US(i)?9007199254740991:FS(i)?10:11:me(28295,{value:i})}function ar(i,e){if(i===e)return!0;const t=wi(i);if(t!==wi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ha(i).isEqual(Ha(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=vi(o.timestampValue),m=vi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ei(o.bytesValue).isEqual(Ei(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return it(o.geoPointValue.latitude)===it(u.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return it(o.integerValue)===it(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=it(o.doubleValue),m=it(u.doubleValue);return h===m?Yu(h)===Yu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return wo(i.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ug(h)!==Ug(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!ar(h[g],m[g])))return!1;return!0})(i,e);default:return me(52216,{left:i})}}function Ga(i,e){return(i.values||[]).find((t=>ar(t,e)))!==void 0}function To(i,e){if(i===e)return 0;const t=wi(i),s=wi(e);if(t!==s)return Ie(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ie(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=it(u.integerValue||u.doubleValue),g=it(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(i,e);case 3:return zg(i.timestampValue,e.timestampValue);case 4:return zg(Ha(i),Ha(e));case 5:return Sd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ei(u),g=Ei(h);return m.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=Ie(m[_],g[_]);if(w!==0)return w}return Ie(m.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ie(it(u.latitude),it(h.latitude));return m!==0?m:Ie(it(u.longitude),it(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Bg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,g,_,w;const S=u.fields||{},C=h.fields||{},j=(m=S[Ju])===null||m===void 0?void 0:m.arrayValue,G=(g=C[Ju])===null||g===void 0?void 0:g.arrayValue,Q=Ie(((_=j==null?void 0:j.values)===null||_===void 0?void 0:_.length)||0,((w=G==null?void 0:G.values)===null||w===void 0?void 0:w.length)||0);return Q!==0?Q:Bg(j,G)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Pu.mapValue&&h===Pu.mapValue)return 0;if(u===Pu.mapValue)return 1;if(h===Pu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let S=0;S<g.length&&S<w.length;++S){const C=Sd(g[S],w[S]);if(C!==0)return C;const j=To(m[g[S]],_[w[S]]);if(j!==0)return j}return Ie(g.length,w.length)})(i.mapValue,e.mapValue);default:throw me(23264,{le:t})}}function zg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ie(i,e);const t=vi(i),s=vi(e),o=Ie(t.seconds,s.seconds);return o!==0?o:Ie(t.nanos,s.nanos)}function Bg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=To(t[o],s[o]);if(u)return u}return Ie(t.length,s.length)}function Io(i){return Ad(i)}function Ad(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=vi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ei(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return ue.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Ad(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Ad(t.fields[h])}`;return o+"}"})(i.mapValue):me(61005,{value:i})}function bu(i){switch(wi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pc(i);return e?16+bu(e):16;case 5:return 2*i.stringValue.length;case 6:return Ei(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+bu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return ps(s.fields,((u,h)=>{o+=u.length+bu(h)})),o})(i.mapValue);default:throw me(13486,{value:i})}}function $g(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Rd(i){return!!i&&"integerValue"in i}function sf(i){return!!i&&"arrayValue"in i}function qg(i){return!!i&&"nullValue"in i}function Hg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Fu(i){return!!i&&"mapValue"in i}function FS(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[G_])===null||t===void 0?void 0:t.stringValue)===K_}function ba(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ps(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ba(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ba(i.arrayValue.values[t]);return e}return Object.assign({},i)}function US(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===bS}/**
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
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ba(t)}setAll(e){let t=Pt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=ba(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Fu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Fu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ps(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new En(ba(this.value))}}function Q_(i){const e=[];return ps(i.fields,((t,s)=>{const o=new Pt([t]);if(Fu(s)){const u=Q_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Fn(e)}/**
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
 */class Ut{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,ve.min(),ve.min(),ve.min(),En.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,ve.min(),ve.min(),En.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,ve.min(),ve.min(),En.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zu{constructor(e,t){this.position=e,this.inclusive=t}}function Wg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=To(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ar(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ka{constructor(e,t="asc"){this.field=e,this.dir=t}}function jS(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Y_{}class ut extends Y_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new BS(e,t,s):t==="array-contains"?new HS(e,s):t==="in"?new WS(e,s):t==="not-in"?new GS(e,s):t==="array-contains-any"?new KS(e,s):new ut(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new $S(e,s):new qS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(To(t,this.value)):t!==null&&wi(this.value)===wi(t)&&this.matchesComparison(To(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends Y_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new zn(e,t)}matches(e){return X_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function X_(i){return i.op==="and"}function J_(i){return zS(i)&&X_(i)}function zS(i){for(const e of i.filters)if(e instanceof zn)return!1;return!0}function Cd(i){if(i instanceof ut)return i.field.canonicalString()+i.op.toString()+Io(i.value);if(J_(i))return i.filters.map((e=>Cd(e))).join(",");{const e=i.filters.map((t=>Cd(t))).join(",");return`${i.op}(${e})`}}function Z_(i,e){return i instanceof ut?(function(s,o){return o instanceof ut&&s.op===o.op&&s.field.isEqual(o.field)&&ar(s.value,o.value)})(i,e):i instanceof zn?(function(s,o){return o instanceof zn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&Z_(h,o.filters[m])),!0):!1})(i,e):void me(19439)}function ev(i){return i instanceof ut?(function(t){return`${t.field.canonicalString()} ${t.op} ${Io(t.value)}`})(i):i instanceof zn?(function(t){return t.op.toString()+" {"+t.getFilters().map(ev).join(" ,")+"}"})(i):"Filter"}class BS extends ut{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class $S extends ut{constructor(e,t){super(e,"in",t),this.keys=tv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class qS extends ut{constructor(e,t){super(e,"not-in",t),this.keys=tv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function tv(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>ue.fromName(s.referenceValue)))}class HS extends ut{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sf(t)&&Ga(t.arrayValue,this.value)}}class WS extends ut{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ga(this.value.arrayValue,t)}}class GS extends ut{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ga(this.value.arrayValue,t)}}class KS extends ut{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ga(this.value.arrayValue,s)))}}/**
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
 */class QS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function Kg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new QS(i,e,t,s,o,u,h)}function of(i){const e=Ee(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Cd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),fc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Io(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Io(s))).join(",")),e.Pe=t}return e.Pe}function af(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!jS(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Z_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Gg(i.startAt,e.startAt)&&Gg(i.endAt,e.endAt)}function Pd(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Vo{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function YS(i,e,t,s,o,u,h,m){return new Vo(i,e,t,s,o,u,h,m)}function mc(i){return new Vo(i)}function Qg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function nv(i){return i.collectionGroup!==null}function Fa(i){const e=Ee(i);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new gt(Pt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Ka(u,s))})),t.has(Pt.keyField().canonicalString())||e.Te.push(new Ka(Pt.keyField(),s))}return e.Te}function nr(i){const e=Ee(i);return e.Ie||(e.Ie=XS(e,Fa(i))),e.Ie}function XS(i,e){if(i.limitType==="F")return Kg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ka(o.field,u)}));const t=i.endAt?new Zu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Zu(i.startAt.position,i.startAt.inclusive):null;return Kg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function kd(i,e){const t=i.filters.concat([e]);return new Vo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Nd(i,e,t){return new Vo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function gc(i,e){return af(nr(i),nr(e))&&i.limitType===e.limitType}function rv(i){return`${of(nr(i))}|lt:${i.limitType}`}function ho(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>ev(o))).join(", ")}]`),fc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Io(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Io(o))).join(",")),`Target(${s})`})(nr(i))}; limitType=${i.limitType})`}function yc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Fa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=Wg(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Fa(s),o)||s.endAt&&!(function(h,m,g){const _=Wg(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Fa(s),o))})(i,e)}function JS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function iv(i){return(e,t)=>{let s=!1;for(const o of Fa(i)){const u=ZS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function ZS(i,e,t){const s=i.field.isKeyField()?ue.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?To(g,_):me(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return me(19790,{direction:i.dir})}}/**
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
 */class ms{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return z_(this.inner)}size(){return this.innerSize}}/**
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
 */const eA=new Ze(ue.comparator);function Or(){return eA}const sv=new Ze(ue.comparator);function Va(...i){let e=sv;for(const t of i)e=e.insert(t.key,t);return e}function ov(i){let e=sv;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function rs(){return Ua()}function av(){return Ua()}function Ua(){return new ms((i=>i.toString()),((i,e)=>i.isEqual(e)))}const tA=new Ze(ue.comparator),nA=new gt(ue.comparator);function Pe(...i){let e=nA;for(const t of i)e=e.add(t);return e}const rA=new gt(Ie);function iA(){return rA}/**
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
 */function lf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yu(e)?"-0":e}}function lv(i){return{integerValue:""+i}}function sA(i,e){return VS(e)?lv(e):lf(i,e)}/**
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
 */class _c{constructor(){this._=void 0}}function oA(i,e,t){return i instanceof Qa?(function(o,u){const h={fields:{[q_]:{stringValue:$_},[W_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&rf(u)&&(u=pc(u)),u&&(h.fields[H_]=u),{mapValue:h}})(t,e):i instanceof Ya?cv(i,e):i instanceof Xa?hv(i,e):(function(o,u){const h=uv(o,u),m=Yg(h)+Yg(o.Ee);return Rd(h)&&Rd(o.Ee)?lv(m):lf(o.serializer,m)})(i,e)}function aA(i,e,t){return i instanceof Ya?cv(i,e):i instanceof Xa?hv(i,e):t}function uv(i,e){return i instanceof ec?(function(s){return Rd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Qa extends _c{}class Ya extends _c{constructor(e){super(),this.elements=e}}function cv(i,e){const t=dv(e);for(const s of i.elements)t.some((o=>ar(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Xa extends _c{constructor(e){super(),this.elements=e}}function hv(i,e){let t=dv(e);for(const s of i.elements)t=t.filter((o=>!ar(o,s)));return{arrayValue:{values:t}}}class ec extends _c{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Yg(i){return it(i.integerValue||i.doubleValue)}function dv(i){return sf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class lA{constructor(e,t){this.field=e,this.transform=t}}function uA(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Ya&&o instanceof Ya||s instanceof Xa&&o instanceof Xa?wo(s.elements,o.elements,ar):s instanceof ec&&o instanceof ec?ar(s.Ee,o.Ee):s instanceof Qa&&o instanceof Qa})(i.transform,e.transform)}class cA{constructor(e,t){this.version=e,this.transformResults=t}}class rr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rr}static exists(e){return new rr(void 0,e)}static updateTime(e){return new rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class vc{}function fv(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new mv(i.key,rr.none()):new ol(i.key,i.data,rr.none());{const t=i.data,s=En.empty();let o=new gt(Pt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new gs(i.key,s,new Fn(o.toArray()),rr.none())}}function hA(i,e,t){i instanceof ol?(function(o,u,h){const m=o.value.clone(),g=Jg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof gs?(function(o,u,h){if(!Uu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Jg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(pv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function ja(i,e,t,s){return i instanceof ol?(function(u,h,m,g){if(!Uu(u.precondition,h))return m;const _=u.value.clone(),w=Zg(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof gs?(function(u,h,m,g){if(!Uu(u.precondition,h))return m;const _=Zg(u.fieldTransforms,g,h),w=h.data;return w.setAll(pv(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(i,e,t,s):(function(u,h,m){return Uu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function dA(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=uv(s.transform,o||null);u!=null&&(t===null&&(t=En.empty()),t.set(s.field,u))}return t||null}function Xg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&wo(s,o,((u,h)=>uA(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class ol extends vc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class gs extends vc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function pv(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Jg(i,e,t){const s=new Map;be(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,aA(h,m,t[o]))}return s}function Zg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,oA(u,h,e))}return s}class mv extends vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fA extends vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&hA(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ja(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ja(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=av();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=fv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&wo(this.mutations,e.mutations,((t,s)=>Xg(t,s)))&&wo(this.baseMutations,e.baseMutations,((t,s)=>Xg(t,s)))}}class uf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return tA})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new uf(e,t,s,o)}}/**
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
 */class mA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var lt,Ve;function yA(i){switch(i){case z.OK:return me(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return me(15467,{code:i})}}function gv(i){if(i===void 0)return Vr("GRPC error has no .code"),z.UNKNOWN;switch(i){case lt.OK:return z.OK;case lt.CANCELLED:return z.CANCELLED;case lt.UNKNOWN:return z.UNKNOWN;case lt.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case lt.INTERNAL:return z.INTERNAL;case lt.UNAVAILABLE:return z.UNAVAILABLE;case lt.UNAUTHENTICATED:return z.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case lt.NOT_FOUND:return z.NOT_FOUND;case lt.ALREADY_EXISTS:return z.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return z.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case lt.ABORTED:return z.ABORTED;case lt.OUT_OF_RANGE:return z.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return z.UNIMPLEMENTED;case lt.DATA_LOSS:return z.DATA_LOSS;default:return me(39323,{code:i})}}(Ve=lt||(lt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const _A=new mi([4294967295,4294967295],0);function ey(i){const e=b_().encode(i),t=new k_;return t.update(e),new Uint8Array(t.digest())}function ty(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new mi([t,s],0),new mi([o,u],0)]}class cf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Oa(`Invalid padding: ${t}`);if(s<0)throw new Oa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Oa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Oa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=mi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(mi.fromNumber(s)));return o.compare(_A)===1&&(o=new mi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ey(e),[s,o]=ty(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new cf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=ey(e),[s,o]=ty(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ec{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,al.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ec(ve.min(),o,new Ze(Ie),Or(),Pe())}}class al{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new al(s,t,Pe(),Pe(),Pe())}}/**
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
 */class ju{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class yv{constructor(e,t){this.targetId=e,this.De=t}}class _v{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class ny{constructor(){this.ve=0,this.Ce=ry(),this.Fe=Nt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),t=Pe(),s=Pe();return this.Ce.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:me(38017,{changeType:u})}})),new al(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=ry()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class vA{constructor(e){this.We=e,this.Ge=new Map,this.ze=Or(),this.je=ku(),this.Je=ku(),this.He=new Ze(Ie)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:me(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(Pd(u))if(s===0){const h=new ue(u.path);this.Xe(t,h,Ut.newNoDocument(h,ve.min()))}else be(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),g=m?this.ut(m,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ei(s).toUint8Array()}catch(g){if(g instanceof B_)return yi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new cf(h,o,u)}catch(g){return yi(g instanceof Oa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((u,h)=>{const m=this.st(h);if(m){if(u.current&&Pd(m.target)){const g=new ue(m.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,Ut.newNoDocument(g,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}}));let s=Pe();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ze.forEach(((u,h)=>h.setReadTime(e)));const o=new Ec(e,t,this.He,this.ze,s);return this.ze=Or(),this.je=ku(),this.Je=ku(),this.He=new Ze(Ie),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new ny,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new gt(Ie),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new gt(Ie),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ny),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ku(){return new Ze(ue.comparator)}function ry(){return new Ze(ue.comparator)}const EA={asc:"ASCENDING",desc:"DESCENDING"},wA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TA={and:"AND",or:"OR"};class IA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Dd(i,e){return i.useProto3Json||fc(e)?e:{value:e}}function tc(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vv(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function SA(i,e){return tc(i,e.toTimestamp())}function ir(i){return be(!!i,49232),ve.fromTimestamp((function(t){const s=vi(t);return new Ge(s.seconds,s.nanos)})(i))}function hf(i,e){return Vd(i,e).canonicalString()}function Vd(i,e){const t=(function(o){return new qe(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function Ev(i){const e=qe.fromString(i);return be(Av(e),10190,{key:e.toString()}),e}function Od(i,e){return hf(i.databaseId,e.path)}function ad(i,e){const t=Ev(e);if(t.get(1)!==i.databaseId.projectId)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ue(Tv(t))}function wv(i,e){return hf(i.databaseId,e)}function AA(i){const e=Ev(i);return e.length===4?qe.emptyPath():Tv(e)}function xd(i){return new qe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Tv(i){return be(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function iy(i,e,t){return{name:Od(i,e),fields:t.value.mapValue.fields}}function RA(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:me(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,w){return _.useProto3Json?(be(w===void 0||typeof w=="string",58123),Nt.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Nt.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const w=_.code===void 0?z.UNKNOWN:gv(_.code);return new ee(w,_.message||"")})(h);t=new _v(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=ad(i,s.document.name),u=ir(s.document.updateTime),h=s.document.createTime?ir(s.document.createTime):ve.min(),m=new En({mapValue:{fields:s.document.fields}}),g=Ut.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new ju(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=ad(i,s.document),u=s.readTime?ir(s.readTime):ve.min(),h=Ut.newNoDocument(o,u),m=s.removedTargetIds||[];t=new ju([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=ad(i,s.document),u=s.removedTargetIds||[];t=new ju([],u,o,null)}else{if(!("filter"in e))return me(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new gA(o,u),m=s.targetId;t=new yv(m,h)}}return t}function CA(i,e){let t;if(e instanceof ol)t={update:iy(i,e.key,e.value)};else if(e instanceof mv)t={delete:Od(i,e.key)};else if(e instanceof gs)t={update:iy(i,e.key,e.data),updateMask:MA(e.fieldMask)};else{if(!(e instanceof fA))return me(16599,{Rt:e.type});t={verify:Od(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Qa)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ya)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Xa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ec)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw me(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:SA(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:me(27497)})(i,e.precondition)),t}function PA(i,e){return i&&i.length>0?(be(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?ir(o.updateTime):ir(u);return h.isEqual(ve.min())&&(h=ir(u)),new cA(h,o.transformResults||[])})(t,e)))):[]}function kA(i,e){return{documents:[wv(i,e.path)]}}function NA(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=wv(i,o);const u=(function(_){if(_.length!==0)return Sv(zn.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((w=>(function(C){return{field:fo(C.field),direction:OA(C.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Dd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function DA(i){let e=AA(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(S){const C=Iv(S);return C instanceof zn&&J_(C)?C.getFilters():[C]})(t.where));let h=[];t.orderBy&&(h=(function(S){return S.map((C=>(function(G){return new Ka(po(G.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(G.direction))})(C)))})(t.orderBy));let m=null;t.limit&&(m=(function(S){let C;return C=typeof S=="object"?S.value:S,fc(C)?null:C})(t.limit));let g=null;t.startAt&&(g=(function(S){const C=!!S.before,j=S.values||[];return new Zu(j,C)})(t.startAt));let _=null;return t.endAt&&(_=(function(S){const C=!S.before,j=S.values||[];return new Zu(j,C)})(t.endAt)),YS(e,o,h,u,m,"F",g,_)}function VA(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Iv(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=po(t.unaryFilter.field);return ut.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=po(t.unaryFilter.field);return ut.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=po(t.unaryFilter.field);return ut.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=po(t.unaryFilter.field);return ut.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}})(i):i.fieldFilter!==void 0?(function(t){return ut.create(po(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return zn.create(t.compositeFilter.filters.map((s=>Iv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return me(1026)}})(t.compositeFilter.op))})(i):me(30097,{filter:i})}function OA(i){return EA[i]}function xA(i){return wA[i]}function LA(i){return TA[i]}function fo(i){return{fieldPath:i.canonicalString()}}function po(i){return Pt.fromServerFormat(i.fieldPath)}function Sv(i){return i instanceof ut?(function(t){if(t.op==="=="){if(Hg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NAN"}};if(qg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Hg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NOT_NAN"}};if(qg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fo(t.field),op:xA(t.op),value:t.value}}})(i):i instanceof zn?(function(t){const s=t.getFilters().map((o=>Sv(o)));return s.length===1?s[0]:{compositeFilter:{op:LA(t.op),filters:s}}})(i):me(54877,{filter:i})}function MA(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Av(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class hi{constructor(e,t,s,o,u=ve.min(),h=ve.min(),m=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class bA{constructor(e){this.gt=e}}function FA(i){const e=DA({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Nd(e,e.limit,"L"):e}/**
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
 */class UA{constructor(){this.Dn=new jA}addToCollectionParentIndex(e,t){return this.Dn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(_i.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(_i.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class jA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new gt(qe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new gt(qe.comparator)).toArray()}}/**
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
 */const sy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rv=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(Rv,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
 */class So{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new So(0)}static ur(){return new So(-1)}}/**
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
 */const oy="LruGarbageCollector",zA=1048576;function ay([i,e],[t,s]){const o=Ie(i,t);return o===0?Ie(e,s):o}class BA{constructor(e){this.Tr=e,this.buffer=new gt(ay),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ay(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $A{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ne(oy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Do(t)?ne(oy,"Ignoring IndexedDB error during garbage collection: ",t):await No(t)}await this.Rr(3e5)}))}}class qA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(dc.ue);const s=new BA(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(sy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o)))).next((S=>(s=S,m=Date.now(),this.removeTargets(e,s,t)))).next((S=>(u=S,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(_=Date.now(),co()<=Ce.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${S} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S}))))}}function HA(i,e){return new qA(i,e)}/**
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
 */class WA{constructor(){this.changes=new ms((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class GA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class KA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&ja(s.mutation,o,Fn.empty(),Ge.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Pe()){const o=rs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Va();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=rs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Pe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Or();const h=Ua(),m=(function(){return Ua()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof gs)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),ja(w.mutation,_,w.mutation.getFieldMask(),Ge.now())):h.set(_.key,Fn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var S;return m.set(_,new GA(w,(S=h.get(_))!==null&&S!==void 0?S:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=Ua();let o=new Ze(((h,m)=>h-m)),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||Fn.empty();w=m.applyToLocalView(_,w),s.set(g,w);const S=(o.get(m.batchId)||Pe()).add(g);o=o.insert(m.batchId,S)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,S=av();w.forEach((C=>{if(!u.has(C)){const j=fv(t.get(C),s.get(C));j!==null&&S.set(C,j),u=u.add(C)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,S))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(rs());let m=qa,g=u;return h.next((_=>$.forEach(_,((w,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((C=>{g=g.insert(w,C)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,Pe()))).next((w=>({batchId:m,changes:ov(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next((s=>{let o=Va();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Va();return this.indexManager.getCollectionParents(e,u).next((m=>$.forEach(m,(g=>{const _=(function(S,C){return new Vo(C,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((S,C)=>{h=h.insert(S,C)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ut.newInvalidDocument(w)))}));let m=Va();return h.forEach(((g,_)=>{const w=u.get(g);w!==void 0&&ja(w.mutation,_,Fn.empty(),Ge.now()),yc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
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
 */class QA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return $.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:ir(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:FA(o.bundledQuery),readTime:ir(o.readTime)}})(t)),$.resolve()}}/**
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
 */class YA{constructor(){this.overlays=new Ze(ue.comparator),this.kr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=rs();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.wt(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.kr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=rs(),u=t.length+1,h=new ue(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Ze(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=rs(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=rs(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=o)););return $.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new mA(t,s));let u=this.kr.get(t);u===void 0&&(u=Pe(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
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
 */class XA{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class df{constructor(){this.qr=new gt(Tt.Qr),this.$r=new gt(Tt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Tt(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new ue(new qe([])),s=new Tt(t,e),o=new Tt(t,e+1),u=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ue(new qe([])),s=new Tt(t,e),o=new Tt(t,e+1);let u=Pe();return this.$r.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Tt(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ue.comparator(e.key,t.key)||Ie(e.Hr,t.Hr)}static Ur(e,t){return Ie(e.Hr,t.Hr)||ue.comparator(e.key,t.key)}}/**
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
 */class JA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new gt(Tt.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new pA(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new Tt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?nf:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new gt(Ie);return t.forEach((o=>{const u=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),$.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const h=new Tt(new ue(u),0);let m=new gt(Ie);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Hr)),!0)}),h),$.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){be(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return $.forEach(t.mutations,(o=>{const u=new Tt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new Tt(t,0),o=this.Yr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ZA{constructor(e){this.ni=e,this.docs=(function(){return new Ze(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Or();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ut.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Or();const h=t.path,m=new ue(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||PS(CS(w),s)<=0||(o.has(w.key)||yc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){me(9500)}ri(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new e1(this)}getSize(e){return $.resolve(this.size)}}class e1 extends WA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class t1{constructor(e){this.persistence=e,this.ii=new ms((t=>of(t)),af),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.si=0,this.oi=new df,this.targetCount=0,this._i=So.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),$.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new So(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.hr(t),$.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.oi.containsKey(t))}}/**
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
 */class Cv{constructor(e,t){this.ai={},this.overlays={},this.ui=new dc(0),this.ci=!1,this.ci=!0,this.li=new XA,this.referenceDelegate=e(this),this.hi=new t1(this),this.indexManager=new UA,this.remoteDocumentCache=(function(o){return new ZA(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new bA(t),this.Ti=new QA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new YA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new JA(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new n1(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return $.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class n1 extends NS{constructor(e){super(),this.currentSequenceNumber=e}}class ff{constructor(e){this.persistence=e,this.Ai=new df,this.Ri=null}static Vi(e){return new ff(e)}get mi(){if(this.Ri)return this.Ri;throw me(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.mi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,(s=>{const o=ue.fromPath(s);return this.fi(e,o).next((u=>{u||t.removeEntry(o,ve.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return $.or([()=>$.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class nc{constructor(e,t){this.persistence=e,this.gi=new ms((s=>OS(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=HA(this,t)}static Vi(e,t){return new nc(e,t)}Ii(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return $.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,ve.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=bu(e.data.value)),t}Sr(e,t,s){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class pf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new pf(e,t.fromCache,s,o)}}/**
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
 */class r1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class i1{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Mw()?8:DS(jt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ys(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new r1;return this.ws(e,t,h).next((m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>u.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(co()<=Ce.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",ho(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(co()<=Ce.DEBUG&&ne("QueryEngine","Query:",ho(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(co()<=Ce.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",ho(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(t))):$.resolve())}ps(e,t){if(Qg(t))return $.resolve(null);let s=nr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Nd(t,null,"F"),s=nr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Pe(...u);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,m);return this.Ds(t,_,h,g.readTime)?this.ps(e,Nd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,s,o){return Qg(t)||o.isEqual(ve.min())?$.resolve(null):this.gs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?$.resolve(null):(co()<=Ce.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ho(t)),this.vs(e,h,t,RS(o,qa)).next((m=>m)))}))}bs(e,t){let s=new gt(iv(e));return t.forEach(((o,u)=>{yc(e,u)&&(s=s.add(u))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return co()<=Ce.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",ho(t)),this.gs.getDocumentsMatchingQuery(e,t,_i.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const mf="LocalStore",s1=3e8;class o1{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new Ze(Ie),this.Ms=new ms((u=>of(u)),af),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function a1(i,e,t,s){return new o1(i,e,t,s)}async function Pv(i,e){const t=Ee(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=Pe();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function l1(i,e){const t=Ee(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,w){const S=_.batch,C=S.keys();let j=$.resolve();return C.forEach((G=>{j=j.next((()=>w.getEntry(g,G))).next((Q=>{const B=_.docVersions.get(G);be(B!==null,48541),Q.version.compareTo(B)<0&&(S.applyToRemoteDocument(Q,_),Q.isValidDocument()&&(Q.setReadTime(_.commitVersion),w.addEntry(Q)))}))})),j.next((()=>m.mutationQueue.removeMutationBatch(g,S)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Pe();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function kv(i){const e=Ee(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function u1(i,e){const t=Ee(i),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((w,S)=>{const C=o.get(S);if(!C)return;m.push(t.hi.removeMatchingKeys(u,w.removedDocuments,S).next((()=>t.hi.addMatchingKeys(u,w.addedDocuments,S))));let j=C.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?j=j.withResumeToken(Nt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(S,j),(function(Q,B,ge){return Q.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=s1?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0})(C,j,w)&&m.push(t.hi.updateTargetData(u,j))}));let g=Or(),_=Pe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(c1(u,h,e.documentUpdates).next((w=>{g=w.Ls,_=w.ks}))),!s.isEqual(ve.min())){const w=t.hi.getLastRemoteSnapshotVersion(u).next((S=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return $.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.Fs=o,u)))}function c1(i,e,t){let s=Pe(),o=Pe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Or();return t.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ne(mf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function h1(i,e){const t=Ee(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=nf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function d1(i,e){const t=Ee(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new hi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function Ld(i,e,t){const s=Ee(i),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Do(h))throw h;ne(mf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function ly(i,e,t){const s=Ee(i);let o=ve.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const S=Ee(g),C=S.Ms.get(w);return C!==void 0?$.resolve(S.Fs.get(C)):S.hi.getTargetData(_,w)})(s,h,nr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?u:Pe()))).next((m=>(f1(s,JS(e),m),{documents:m,qs:u})))))}function f1(i,e,t){let s=i.xs.get(e)||ve.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.xs.set(e,s)}class uy{constructor(){this.activeTargetIds=iA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class p1{constructor(){this.Fo=new uy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new uy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class m1{xo(e){}shutdown(){}}/**
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
 */const cy="ConnectivityMonitor";class hy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ne(cy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ne(cy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Nu=null;function Md(){return Nu===null?Nu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Nu++,"0x"+Nu.toString(16)}/**
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
 */const ld="RestConnection",g1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class y1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Xu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Md(),m=this.Go(e,t.toUriEncodedString());ne(ld,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,u);const{host:_}=new URL(m),w=Ro(_);return this.jo(e,m,g,s,w).then((S=>(ne(ld,`Received RPC '${e}' ${h}: `,S),S)),(S=>{throw yi(ld,`RPC '${e}' ${h} failed with error: `,S,"url: ",m,"request:",s),S}))}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ko})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Go(e,t){const s=g1[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class _1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const bt="WebChannelConnection";class v1 extends y1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=Md();return new Promise(((m,g)=>{const _=new N_;_.setWithCredentials(!0),_.listenOnce(D_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Mu.NO_ERROR:const S=_.getResponseJson();ne(bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),m(S);break;case Mu.TIMEOUT:ne(bt,`RPC '${e}' ${h} timed out`),g(new ee(z.DEADLINE_EXCEEDED,"Request time out"));break;case Mu.HTTP_ERROR:const C=_.getStatus();if(ne(bt,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let j=_.getResponseJson();Array.isArray(j)&&(j=j[0]);const G=j==null?void 0:j.error;if(G&&G.status&&G.message){const Q=(function(ge){const fe=ge.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(fe)>=0?fe:z.UNKNOWN})(G.status);g(new ee(Q,G.message))}else g(new ee(z.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ee(z.UNAVAILABLE,"Connection failed."));break;default:me(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ne(bt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ne(bt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}P_(e,t,s){const o=Md(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=x_(),m=O_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");ne(bt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const S=h.createWebChannel(w,g);this.T_(S);let C=!1,j=!1;const G=new _1({Ho:B=>{j?ne(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(C||(ne(bt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),C=!0),ne(bt,`RPC '${e}' stream ${o} sending:`,B),S.send(B))},Yo:()=>S.close()}),Q=(B,ge,fe)=>{B.listen(ge,(ye=>{try{fe(ye)}catch(we){setTimeout((()=>{throw we}),0)}}))};return Q(S,Da.EventType.OPEN,(()=>{j||(ne(bt,`RPC '${e}' stream ${o} transport opened.`),G.s_())})),Q(S,Da.EventType.CLOSE,(()=>{j||(j=!0,ne(bt,`RPC '${e}' stream ${o} transport closed`),G.__(),this.I_(S))})),Q(S,Da.EventType.ERROR,(B=>{j||(j=!0,yi(bt,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),G.__(new ee(z.UNAVAILABLE,"The operation could not be completed")))})),Q(S,Da.EventType.MESSAGE,(B=>{var ge;if(!j){const fe=B.data[0];be(!!fe,16349);const ye=fe,we=(ye==null?void 0:ye.error)||((ge=ye[0])===null||ge===void 0?void 0:ge.error);if(we){ne(bt,`RPC '${e}' stream ${o} received error:`,we);const Ke=we.status;let Re=(function(R){const k=lt[R];if(k!==void 0)return gv(k)})(Ke),D=we.message;Re===void 0&&(Re=z.INTERNAL,D="Unknown error status: "+Ke+" with message "+we.message),j=!0,G.__(new ee(Re,D)),S.close()}else ne(bt,`RPC '${e}' stream ${o} received:`,fe),G.a_(fe)}})),Q(m,V_.STAT_EVENT,(B=>{B.stat===Id.PROXY?ne(bt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Id.NOPROXY&&ne(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{G.o_()}),0),G}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function ud(){return typeof document<"u"?document:null}/**
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
 */function wc(i){return new IA(i,!0)}/**
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
 */class Nv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const dy="PersistentStream";class Dv{constructor(e,t,s,o,u,h,m,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Nv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(Vr(t.toString()),Vr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ee(z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ne(dy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ne(dy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class E1 extends Dv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=RA(this.serializer,e),s=(function(u){if(!("targetChange"in u))return ve.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?ir(h.readTime):ve.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=xd(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=Pd(g)?{documents:kA(u,g)}:{query:NA(u,g).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=vv(u,h.resumeToken);const _=Dd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(ve.min())>0){m.readTime=tc(u,h.snapshotVersion.toTimestamp());const _=Dd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=VA(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=xd(this.serializer),t.removeTarget=e,this.k_(t)}}class w1 extends Dv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=PA(e.writeResults,e.commitTime),s=ir(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=xd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>CA(this.serializer,s)))};this.k_(t)}}/**
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
 */class T1{}class I1 extends T1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Vd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ee(z.UNKNOWN,u.toString())}))}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,Vd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee(z.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class S1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Vr(t),this._a=!1):ne("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const hs="RemoteStore";class A1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{ys(this)&&(ne(hs,"Restarting streams for network reachability change."),await(async function(g){const _=Ee(g);_.Ia.add(4),await ll(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Tc(_)})(this))}))})),this.Aa=new S1(s,o)}}async function Tc(i){if(ys(i))for(const e of i.da)await e(!0)}async function ll(i){for(const e of i.da)await e(!1)}function Vv(i,e){const t=Ee(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),vf(t)?_f(t):Oo(t).x_()&&yf(t,e))}function gf(i,e){const t=Ee(i),s=Oo(t);t.Ta.delete(e),s.x_()&&Ov(t,e),t.Ta.size===0&&(s.x_()?s.B_():ys(t)&&t.Aa.set("Unknown"))}function yf(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Oo(i).H_(e)}function Ov(i,e){i.Ra.$e(e),Oo(i).Y_(e)}function _f(i){i.Ra=new vA({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),Oo(i).start(),i.Aa.aa()}function vf(i){return ys(i)&&!Oo(i).M_()&&i.Ta.size>0}function ys(i){return Ee(i).Ia.size===0}function xv(i){i.Ra=void 0}async function R1(i){i.Aa.set("Online")}async function C1(i){i.Ta.forEach(((e,t)=>{yf(i,e)}))}async function P1(i,e){xv(i),vf(i)?(i.Aa.la(e),_f(i)):i.Aa.set("Unknown")}async function k1(i,e,t){if(i.Aa.set("Online"),e instanceof _v&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(i,e)}catch(s){ne(hs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await rc(i,s)}else if(e instanceof ju?i.Ra.Ye(e):e instanceof yv?i.Ra.it(e):i.Ra.et(e),!t.isEqual(ve.min()))try{const s=await kv(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ta.get(_);w&&u.Ta.set(_,w.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const w=u.Ta.get(g);if(!w)return;u.Ta.set(g,w.withResumeToken(Nt.EMPTY_BYTE_STRING,w.snapshotVersion)),Ov(u,g);const S=new hi(w.target,g,_,w.sequenceNumber);yf(u,S)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ne(hs,"Failed to raise snapshot:",s),await rc(i,s)}}async function rc(i,e,t){if(!Do(e))throw e;i.Ia.add(1),await ll(i),i.Aa.set("Offline"),t||(t=()=>kv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ne(hs,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await Tc(i)}))}function Lv(i,e){return e().catch((t=>rc(i,t,e)))}async function Ic(i){const e=Ee(i),t=Ti(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:nf;for(;N1(e);)try{const o=await h1(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,D1(e,o)}catch(o){await rc(e,o)}Mv(e)&&bv(e)}function N1(i){return ys(i)&&i.Pa.length<10}function D1(i,e){i.Pa.push(e);const t=Ti(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function Mv(i){return ys(i)&&!Ti(i).M_()&&i.Pa.length>0}function bv(i){Ti(i).start()}async function V1(i){Ti(i).na()}async function O1(i){const e=Ti(i);for(const t of i.Pa)e.X_(t.mutations)}async function x1(i,e,t){const s=i.Pa.shift(),o=uf.from(s,e,t);await Lv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await Ic(i)}async function L1(i,e){e&&Ti(i).Z_&&await(async function(s,o){if((function(h){return yA(h)&&h!==z.ABORTED})(o.code)){const u=s.Pa.shift();Ti(s).N_(),await Lv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Ic(s)}})(i,e),Mv(i)&&bv(i)}async function fy(i,e){const t=Ee(i);t.asyncQueue.verifyOperationInProgress(),ne(hs,"RemoteStore received new credentials");const s=ys(t);t.Ia.add(3),await ll(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Tc(t)}async function M1(i,e){const t=Ee(i);e?(t.Ia.delete(2),await Tc(t)):e||(t.Ia.add(2),await ll(t),t.Aa.set("Unknown"))}function Oo(i){return i.Va||(i.Va=(function(t,s,o){const u=Ee(t);return u.ia(),new E1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:R1.bind(null,i),e_:C1.bind(null,i),n_:P1.bind(null,i),J_:k1.bind(null,i)}),i.da.push((async e=>{e?(i.Va.N_(),vf(i)?_f(i):i.Aa.set("Unknown")):(await i.Va.stop(),xv(i))}))),i.Va}function Ti(i){return i.ma||(i.ma=(function(t,s,o){const u=Ee(t);return u.ia(),new w1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:V1.bind(null,i),n_:L1.bind(null,i),ea:O1.bind(null,i),ta:x1.bind(null,i)}),i.da.push((async e=>{e?(i.ma.N_(),await Ic(i)):(await i.ma.stop(),i.Pa.length>0&&(ne(hs,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))}))),i.ma}/**
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
 */class Ef{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Ef(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wf(i,e){if(Vr("AsyncQueue",`${e}: ${i}`),Do(i))return new ee(z.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class vo{static emptySet(e){return new vo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=Va(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new vo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class py{constructor(){this.fa=new Ze(ue.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):me(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Ao{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Ao(e,t,vo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class b1{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class F1{constructor(){this.queries=my(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Ee(t),u=o.queries;o.queries=my(),u.forEach(((h,m)=>{for(const g of m.wa)g.onError(s)}))})(this,new ee(z.ABORTED,"Firestore shutting down"))}}function my(){return new ms((i=>rv(i)),gc)}async function Tf(i,e){const t=Ee(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new b1,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=wf(h,`Initialization of query '${ho(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&Sf(t)}async function If(i,e){const t=Ee(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function U1(i,e){const t=Ee(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&Sf(t)}function j1(i,e,t){const s=Ee(i),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function Sf(i){i.Da.forEach((e=>{e.next()}))}var bd,gy;(gy=bd||(bd={})).Fa="default",gy.Cache="cache";class Af{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Ao(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==bd.Cache}}/**
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
 */class Fv{constructor(e){this.key=e}}class Uv{constructor(e){this.key=e}}class z1{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=iv(e),this.eu=new vo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new py,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,S)=>{const C=o.get(w),j=yc(this.query,S)?S:null,G=!!C&&this.mutatedKeys.has(C.key),Q=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let B=!1;C&&j?C.data.isEqual(j.data)?G!==Q&&(s.track({type:3,doc:j}),B=!0):this.iu(C,j)||(s.track({type:2,doc:j}),B=!0,(g&&this.Xa(j,g)>0||_&&this.Xa(j,_)<0)&&(m=!0)):!C&&j?(s.track({type:0,doc:j}),B=!0):C&&!j&&(s.track({type:1,doc:C}),B=!0,(g||_)&&(m=!0)),B&&(j?(h=h.add(j),u=Q?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,S)=>(function(j,G){const Q=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{At:B})}};return Q(j)-Q(G)})(w.type,S.type)||this.Xa(w.doc,S.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new Ao(this.query,e.eu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new py,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new Uv(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new Fv(s))})),t}uu(e){this.Ha=e.qs,this.Za=Pe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ao.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Rf="SyncEngine";class B1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class $1{constructor(e){this.key=e,this.lu=!1}}class q1{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ms((m=>rv(m)),gc),this.Tu=new Map,this.Iu=new Set,this.du=new Ze(ue.comparator),this.Eu=new Map,this.Au=new df,this.Ru={},this.Vu=new Map,this.mu=So.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function H1(i,e,t=!0){const s=Hv(i);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await jv(s,e,t,!0),o}async function W1(i,e){const t=Hv(i);await jv(t,e,!0,!1)}async function jv(i,e,t,s){const o=await d1(i.localStore,nr(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await G1(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&Vv(i.remoteStore,o),m}async function G1(i,e,t,s,o){i.gu=(S,C,j)=>(async function(Q,B,ge,fe){let ye=B.view.nu(ge);ye.Ds&&(ye=await ly(Q.localStore,B.query,!1).then((({documents:D})=>B.view.nu(D,ye))));const we=fe&&fe.targetChanges.get(B.targetId),Ke=fe&&fe.targetMismatches.get(B.targetId)!=null,Re=B.view.applyChanges(ye,Q.isPrimaryClient,we,Ke);return _y(Q,B.targetId,Re._u),Re.snapshot})(i,S,C,j);const u=await ly(i.localStore,e,!0),h=new z1(e,u.qs),m=h.nu(u.documents),g=al.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,g);_y(i,t,_._u);const w=new B1(e,t,h);return i.Pu.set(e,w),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),_.snapshot}async function K1(i,e,t){const s=Ee(i),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter((h=>!gc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Ld(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&gf(s.remoteStore,o.targetId),Fd(s,o.targetId)})).catch(No)):(Fd(s,o.targetId),await Ld(s.localStore,o.targetId,!0))}async function Q1(i,e){const t=Ee(i),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),gf(t.remoteStore,s.targetId))}async function Y1(i,e,t){const s=rR(i);try{const o=await(function(h,m){const g=Ee(h),_=Ge.now(),w=m.reduce(((j,G)=>j.add(G.key)),Pe());let S,C;return g.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let G=Or(),Q=Pe();return g.Os.getEntries(j,w).next((B=>{G=B,G.forEach(((ge,fe)=>{fe.isValidDocument()||(Q=Q.add(ge))}))})).next((()=>g.localDocuments.getOverlayedDocuments(j,G))).next((B=>{S=B;const ge=[];for(const fe of m){const ye=dA(fe,S.get(fe.key).overlayedDocument);ye!=null&&ge.push(new gs(fe.key,ye,Q_(ye.value.mapValue),rr.exists(!0)))}return g.mutationQueue.addMutationBatch(j,_,ge,m)})).next((B=>{C=B;const ge=B.applyToLocalDocumentSet(S,Q);return g.documentOverlayCache.saveOverlays(j,B.batchId,ge)}))})).then((()=>({batchId:C.batchId,changes:ov(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new Ze(Ie)),_=_.insert(m,g),h.Ru[h.currentUser.toKey()]=_})(s,o.batchId,t),await ul(s,o.changes),await Ic(s.remoteStore)}catch(o){const u=wf(o,"Failed to persist write");t.reject(u)}}async function zv(i,e){const t=Ee(i);try{const s=await u1(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Eu.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?be(h.lu,14607):o.removedDocuments.size>0&&(be(h.lu,42227),h.lu=!1))})),await ul(t,s,e)}catch(s){await No(s)}}function yy(i,e,t){const s=Ee(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Ee(h);g.onlineState=m;let _=!1;g.queries.forEach(((w,S)=>{for(const C of S.wa)C.va(m)&&(_=!0)})),_&&Sf(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function X1(i,e,t){const s=Ee(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new Ze(ue.comparator);h=h.insert(u,Ut.newNoDocument(u,ve.min()));const m=Pe().add(u),g=new Ec(ve.min(),new Map,new Ze(Ie),h,m);await zv(s,g),s.du=s.du.remove(u),s.Eu.delete(e),Cf(s)}else await Ld(s.localStore,e,!1).then((()=>Fd(s,e,t))).catch(No)}async function J1(i,e){const t=Ee(i),s=e.batch.batchId;try{const o=await l1(t.localStore,e);$v(t,s,null),Bv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ul(t,o)}catch(o){await No(o)}}async function Z1(i,e,t){const s=Ee(i);try{const o=await(function(h,m){const g=Ee(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next((S=>(be(S!==null,37113),w=S.keys(),g.mutationQueue.removeMutationBatch(_,S)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);$v(s,e,t),Bv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ul(s,o)}catch(o){await No(o)}}function Bv(i,e){(i.Vu.get(e)||[]).forEach((t=>{t.resolve()})),i.Vu.delete(e)}function $v(i,e,t){const s=Ee(i);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Fd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach((s=>{i.Au.containsKey(s)||qv(i,s)}))}function qv(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(gf(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),Cf(i))}function _y(i,e,t){for(const s of t)s instanceof Fv?(i.Au.addReference(s.key,e),eR(i,s)):s instanceof Uv?(ne(Rf,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||qv(i,s.key)):me(19791,{yu:s})}function eR(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(ne(Rf,"New document in limbo: "+t),i.Iu.add(s),Cf(i))}function Cf(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new ue(qe.fromString(e)),s=i.mu.next();i.Eu.set(s,new $1(t)),i.du=i.du.insert(t,s),Vv(i.remoteStore,new hi(nr(mc(t.path)),s,"TargetPurposeLimboResolution",dc.ue))}}async function ul(i,e,t){const s=Ee(i),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,g)=>{h.push(s.gu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const S=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(_){o.push(_);const S=pf.Es(g.targetId,_);u.push(S)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,_){const w=Ee(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>$.forEach(_,(C=>$.forEach(C.Is,(j=>w.persistence.referenceDelegate.addReference(S,C.targetId,j))).next((()=>$.forEach(C.ds,(j=>w.persistence.referenceDelegate.removeReference(S,C.targetId,j)))))))))}catch(S){if(!Do(S))throw S;ne(mf,"Failed to update sequence numbers: "+S)}for(const S of _){const C=S.targetId;if(!S.fromCache){const j=w.Fs.get(C),G=j.snapshotVersion,Q=j.withLastLimboFreeSnapshotVersion(G);w.Fs=w.Fs.insert(C,Q)}}})(s.localStore,u))}async function tR(i,e){const t=Ee(i);if(!t.currentUser.isEqual(e)){ne(Rf,"User change. New user:",e.toKey());const s=await Pv(t.localStore,e);t.currentUser=e,(function(u,h){u.Vu.forEach((m=>{m.forEach((g=>{g.reject(new ee(z.CANCELLED,h))}))})),u.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ul(t,s.Bs)}}function nR(i,e){const t=Ee(i),s=t.Eu.get(e);if(s&&s.lu)return Pe().add(s.key);{let o=Pe();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function Hv(i){const e=Ee(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=zv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=X1.bind(null,e),e.hu.J_=U1.bind(null,e.eventManager),e.hu.pu=j1.bind(null,e.eventManager),e}function rR(i){const e=Ee(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=J1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Z1.bind(null,e),e}class ic{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return a1(this.persistence,new i1,e.initialUser,this.serializer)}Du(e){return new Cv(ff.Vi,this.serializer)}bu(e){return new p1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ic.provider={build:()=>new ic};class iR extends ic{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){be(this.persistence.referenceDelegate instanceof nc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new $A(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new Cv((s=>nc.Vi(s,t)),this.serializer)}}class Ud{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tR.bind(null,this.syncEngine),await M1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new F1})()}createDatastore(e){const t=wc(e.databaseInfo.databaseId),s=(function(u){return new v1(u)})(e.databaseInfo);return(function(u,h,m,g){return new I1(u,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new A1(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>yy(this.syncEngine,t,0)),(function(){return hy.C()?new hy:new m1})())}createSyncEngine(e,t){return(function(o,u,h,m,g,_,w){const S=new q1(o,u,h,m,g,_);return w&&(S.fu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Ee(o);ne(hs,"RemoteStore shutting down."),u.Ia.add(5),await ll(u),u.Ea.shutdown(),u.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ud.provider={build:()=>new Ud};/**
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
 */class Pf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Vr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ii="FirestoreClient";class sR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=tf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ne(Ii,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Ii,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=wf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function cd(i,e){i.asyncQueue.verifyOperationInProgress(),ne(Ii,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Pv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{yi("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then((()=>{ne("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{yi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),i._offlineComponents=e}async function vy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await oR(i);ne(Ii,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>fy(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>fy(e.remoteStore,o))),i._onlineComponents=e}async function oR(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne(Ii,"Using user provided OfflineComponentProvider");try{await cd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===z.FAILED_PRECONDITION||o.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;yi("Error using user provided cache. Falling back to memory cache: "+t),await cd(i,new ic)}}else ne(Ii,"Using default OfflineComponentProvider"),await cd(i,new iR(void 0));return i._offlineComponents}async function Wv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne(Ii,"Using user provided OnlineComponentProvider"),await vy(i,i._uninitializedComponentsProvider._online)):(ne(Ii,"Using default OnlineComponentProvider"),await vy(i,new Ud))),i._onlineComponents}function aR(i){return Wv(i).then((e=>e.syncEngine))}async function sc(i){const e=await Wv(i),t=e.eventManager;return t.onListen=H1.bind(null,e.syncEngine),t.onUnlisten=K1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=W1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Q1.bind(null,e.syncEngine),t}function lR(i,e,t={}){const s=new kr;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,_){const w=new Pf({next:C=>{w.Ou(),h.enqueueAndForget((()=>If(u,S)));const j=C.docs.has(m);!j&&C.fromCache?_.reject(new ee(z.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&C.fromCache&&g&&g.source==="server"?_.reject(new ee(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(C)},error:C=>_.reject(C)}),S=new Af(mc(m.path),w,{includeMetadataChanges:!0,ka:!0});return Tf(u,S)})(await sc(i),i.asyncQueue,e,t,s))),s.promise}function uR(i,e,t={}){const s=new kr;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,_){const w=new Pf({next:C=>{w.Ou(),h.enqueueAndForget((()=>If(u,S))),C.fromCache&&g.source==="server"?_.reject(new ee(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(C)},error:C=>_.reject(C)}),S=new Af(m,w,{includeMetadataChanges:!0,ka:!0});return Tf(u,S)})(await sc(i),i.asyncQueue,e,t,s))),s.promise}/**
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
 */function Gv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Ey=new Map;/**
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
 */const Kv="firestore.googleapis.com",wy=!0;class Ty{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Kv,this.ssl=wy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:wy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zA)throw new ee(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ty({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ty(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new gS;switch(s.type){case"firstParty":return new ES(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Ey.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Ey.delete(t),s.terminate())})(this),Promise.resolve()}}function cR(i,e,t,s={}){var o;i=Un(i,Sc);const u=Ro(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),g=`${e}:${t}`;u&&(jy(`https://${g}`),zy("Firestore",!0)),h.host!==Kv&&h.host!==g&&yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:u,emulatorOptions:s});if(!os(_,m)&&(i._setSettings(_),s.mockUserToken)){let w,S;if(typeof s.mockUserToken=="string")w=s.mockUserToken,S=Ft.MOCK_USER;else{w=Cw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ee(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Ft(C)}i._authCredentials=new yS(new M_(w,S))}}/**
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
 */class Ci{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class st{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(sl(t,st._jsonSchema))return new st(e,s||null,new ue(qe.fromString(t.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:ct("string",st._jsonSchemaVersion),referencePath:ct("string")};class gi extends Ci{constructor(e,t,s){super(e,t,mc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new ue(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function jd(i,e,...t){if(i=zt(i),F_("collection","path",e),i instanceof Sc){const s=qe.fromString(e,...t);return Lg(s),new gi(i,null,s)}{if(!(i instanceof st||i instanceof gi))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(qe.fromString(e,...t));return Lg(s),new gi(i.firestore,null,s)}}function kf(i,e,...t){if(i=zt(i),arguments.length===1&&(e=tf.newId()),F_("doc","path",e),i instanceof Sc){const s=qe.fromString(e,...t);return xg(s),new st(i,null,new ue(s))}{if(!(i instanceof st||i instanceof gi))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(qe.fromString(e,...t));return xg(s),new st(i.firestore,i instanceof gi?i.converter:null,new ue(s))}}/**
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
 */const Iy="AsyncQueue";class Sy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Nv(this,"async_queue_retry"),this.oc=()=>{const s=ud();s&&ne(Iy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=ud();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=ud();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new kr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Do(e))throw e;ne(Iy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Vr("INTERNAL UNHANDLED ERROR: ",Ay(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Ef.createAndSchedule(this,e,t,s,(u=>this.lc(u)));return this.ec.push(o),o}ac(){this.tc&&me(47125,{hc:Ay(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ay(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
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
 */function Ry(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class ds extends Sc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Sy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sy(e),this._firestoreClient=void 0,await e}}}function hR(i,e){const t=typeof i=="object"?i:Hy(),s=typeof i=="string"?i:Xu,o=qd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Aw("firestore");u&&cR(o,...u)}return o}function Ac(i){if(i._terminated)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||dR(i),i._firestoreClient}function dR(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,g,_,w){return new MS(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Gv(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new sR(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(i._componentsProvider))}/**
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
 */class wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wn(Nt.fromBase64String(e))}catch(t){throw new ee(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wn(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(sl(e,wn._jsonSchema))return wn.fromBase64String(e.bytes)}}wn._jsonSchemaVersion="firestore/bytes/1.0",wn._jsonSchema={type:ct("string",wn._jsonSchemaVersion),bytes:ct("string")};/**
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
 */class Nf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Df{constructor(e){this._methodName=e}}/**
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
 */class sr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sr._jsonSchemaVersion}}static fromJSON(e){if(sl(e,sr._jsonSchema))return new sr(e.latitude,e.longitude)}}sr._jsonSchemaVersion="firestore/geoPoint/1.0",sr._jsonSchema={type:ct("string",sr._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
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
 */class or{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:or._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(sl(e,or._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new or(e.vectorValues);throw new ee(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}or._jsonSchemaVersion="firestore/vectorValue/1.0",or._jsonSchema={type:ct("string",or._jsonSchemaVersion),vectorValues:ct("object")};/**
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
 */const fR=/^__.*__$/;class pR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new gs(e,this.data,this.fieldMask,t,this.fieldTransforms):new ol(e,this.data,t,this.fieldTransforms)}}function Qv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{Ec:i})}}class Vf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return oc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Qv(this.Ec)&&fR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class mR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||wc(e)}Dc(e,t,s,o=!1){return new Vf({Ec:e,methodName:t,bc:s,path:Pt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Of(i){const e=i._freezeSettings(),t=wc(i._databaseId);return new mR(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Yv(i,e,t,s,o,u={}){const h=i.Dc(u.merge||u.mergeFields?2:0,e,t,o);Zv("Data must be an object, but it was:",h,s);const m=Xv(s,h);let g,_;if(u.merge)g=new Fn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const S of u.mergeFields){const C=yR(e,S,t);if(!h.contains(C))throw new ee(z.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);vR(w,C)||w.push(C)}g=new Fn(w),_=h.fieldTransforms.filter((S=>g.covers(S.field)))}else g=null,_=h.fieldTransforms;return new pR(new En(m),g,_)}class xf extends Df{_toFieldTransform(e){return new lA(e.path,new Qa)}isEqual(e){return e instanceof xf}}function gR(i,e,t,s=!1){return Lf(t,i.Dc(s?4:3,e))}function Lf(i,e){if(Jv(i=zt(i)))return Zv("Unsupported field value:",e,i),Xv(i,e);if(i instanceof Df)return(function(s,o){if(!Qv(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=Lf(m,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=zt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return sA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ge.fromDate(s);return{timestampValue:tc(o.serializer,u)}}if(s instanceof Ge){const u=new Ge(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:tc(o.serializer,u)}}if(s instanceof sr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof wn)return{bytesValue:vv(o.serializer,s._byteString)};if(s instanceof st){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:hf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof or)return(function(h,m){return{mapValue:{fields:{[G_]:{stringValue:K_},[Ju]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.wc("VectorValues must only contain numeric values.");return lf(m.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${hc(s)}`)})(i,e)}function Xv(i,e){const t={};return z_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(i,((s,o)=>{const u=Lf(o,e.Vc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Jv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ge||i instanceof sr||i instanceof wn||i instanceof st||i instanceof Df||i instanceof or)}function Zv(i,e,t){if(!Jv(t)||!U_(t)){const s=hc(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function yR(i,e,t){if((e=zt(e))instanceof Nf)return e._internalPath;if(typeof e=="string")return eE(i,e);throw oc("Field path arguments must be of type string or ",i,!1,void 0,t)}const _R=new RegExp("[~\\*/\\[\\]]");function eE(i,e,t){if(e.search(_R)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Nf(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function oc(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ee(z.INVALID_ARGUMENT,m+i+g)}function vR(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class tE{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ER(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ER extends tE{data(){return super.data()}}function Mf(i,e){return typeof e=="string"?eE(i,e):e instanceof Nf?e._internalPath:e._delegate._internalPath}/**
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
 */function nE(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ee(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bf{}class rE extends bf{}function wR(i,e,...t){let s=[];e instanceof bf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((g=>g instanceof Uf)).length,m=u.filter((g=>g instanceof Ff)).length;if(h>1||h>0&&m>0)throw new ee(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class Ff extends rE{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ff(e,t,s)}_apply(e){const t=this._parse(e);return iE(e._query,t),new Ci(e.firestore,e.converter,kd(e._query,t))}_parse(e){const t=Of(e.firestore);return(function(u,h,m,g,_,w,S){let C;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ee(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Py(S,w);const G=[];for(const Q of S)G.push(Cy(g,u,Q));C={arrayValue:{values:G}}}else C=Cy(g,u,S)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Py(S,w),C=gR(m,h,S,w==="in"||w==="not-in");return ut.create(_,w,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Uf extends bf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Uf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:zn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)iE(h,g),h=kd(h,g)})(e._query,t),new Ci(e.firestore,e.converter,kd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jf extends rE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new jf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ka(u,h)})(e._query,this._field,this._direction);return new Ci(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new Vo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function TR(i,e="asc"){const t=e,s=Mf("orderBy",i);return jf._create(s,t)}function Cy(i,e,t){if(typeof(t=zt(t))=="string"){if(t==="")throw new ee(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nv(e)&&t.indexOf("/")!==-1)throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(qe.fromString(t));if(!ue.isDocumentKey(s))throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $g(i,new ue(s))}if(t instanceof st)return $g(i,t._key);throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hc(t)}.`)}function Py(i,e){if(!Array.isArray(i)||i.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iE(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class IR{convertValue(e,t="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ps(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Ju].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>it(h.doubleValue)));return new or(u)}convertGeoPoint(e){return new sr(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=pc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ha(e));default:return null}}convertTimestamp(e){const t=vi(e);return new Ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=qe.fromString(e);be(Av(s),9688,{name:e});const o=new Wa(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return o.isEqual(t)||Vr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function sE(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class xa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class is extends tE{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Mf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=is._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}is._jsonSchemaVersion="firestore/documentSnapshot/1.0",is._jsonSchema={type:ct("string",is._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class zu extends is{data(e={}){return super.data(e)}}class ss{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new xa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new zu(this._firestore,this._userDataWriter,s.key,s,new xa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new zu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new xa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new zu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new xa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:SR(m.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ss._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function SR(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:i})}}/**
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
 */function AR(i){i=Un(i,st);const e=Un(i.firestore,ds);return lR(Ac(e),i._key).then((t=>aE(e,i,t)))}ss._jsonSchemaVersion="firestore/querySnapshot/1.0",ss._jsonSchema={type:ct("string",ss._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class zf extends IR{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}function RR(i){i=Un(i,Ci);const e=Un(i.firestore,ds),t=Ac(e),s=new zf(e);return nE(i._query),uR(t,i._query).then((o=>new ss(e,s,i,o)))}function CR(i,e,t){i=Un(i,st);const s=Un(i.firestore,ds),o=sE(i.converter,e);return oE(s,[Yv(Of(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,rr.none())])}function PR(i,e){const t=Un(i.firestore,ds),s=kf(i),o=sE(i.converter,e);return oE(t,[Yv(Of(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,rr.exists(!1))]).then((()=>s))}function kR(i,...e){var t,s,o;i=zt(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Ry(e[h])||(u=e[h++]);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Ry(e[h])){const S=e[h];e[h]=(t=S.next)===null||t===void 0?void 0:t.bind(S),e[h+1]=(s=S.error)===null||s===void 0?void 0:s.bind(S),e[h+2]=(o=S.complete)===null||o===void 0?void 0:o.bind(S)}let g,_,w;if(i instanceof st)_=Un(i.firestore,ds),w=mc(i._key.path),g={next:S=>{e[h]&&e[h](aE(_,i,S))},error:e[h+1],complete:e[h+2]};else{const S=Un(i,Ci);_=Un(S.firestore,ds),w=S._query;const C=new zf(_);g={next:j=>{e[h]&&e[h](new ss(_,C,S,j))},error:e[h+1],complete:e[h+2]},nE(i._query)}return(function(C,j,G,Q){const B=new Pf(Q),ge=new Af(j,B,G);return C.asyncQueue.enqueueAndForget((async()=>Tf(await sc(C),ge))),()=>{B.Ou(),C.asyncQueue.enqueueAndForget((async()=>If(await sc(C),ge)))}})(Ac(_),w,m,g)}function oE(i,e){return(function(s,o){const u=new kr;return s.asyncQueue.enqueueAndForget((async()=>Y1(await aR(s),o,u))),u.promise})(Ac(i),e)}function aE(i,e,t){const s=t.docs.get(e._key),o=new zf(i);return new is(i,o,e._key,s,new xa(t.hasPendingWrites,t.fromCache),e.converter)}function lE(){return new xf("serverTimestamp")}(function(e,t=!0){(function(o){ko=o})(Co),Eo(new as("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new ds(new _S(s.getProvider("auth-internal")),new wS(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ee(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wa(_.options.projectId,w)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),pi(kg,Ng,e),pi(kg,Ng,"esm2017")})();const NR={apiKey:"AIzaSyCjLVUF_wyjlduSuCi_4DEyKXOt8JjEvsQ",authDomain:"coachpulse-87341.firebaseapp.com",projectId:"coachpulse-87341",storageBucket:"coachpulse-87341.firebasestorage.app",messagingSenderId:"440637829553",appId:"1:440637829553:web:96fdc2e49e5e58fed18d90"},uE=qy(NR),Si=dS(uE);Z0(Si,E_);const Ja=hR(uE);var kt=zd();const DR=fw(kt);var Du={},hd={exports:{}},Zt={},dd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky;function VR(){return ky||(ky=1,(function(i){function e(J,ce){var re=J.length;J.push(ce);e:for(;0<re;){var O=re-1>>>1,q=J[O];if(0<o(q,ce))J[O]=ce,J[re]=q,re=O;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var ce=J[0],re=J.pop();if(re!==ce){J[0]=re;e:for(var O=0,q=J.length,le=q>>>1;O<le;){var Te=2*(O+1)-1,Se=J[Te],Ne=Te+1,Le=J[Ne];if(0>o(Se,re))Ne<q&&0>o(Le,Se)?(J[O]=Le,J[Ne]=re,O=Ne):(J[O]=Se,J[Te]=re,O=Te);else if(Ne<q&&0>o(Le,re))J[O]=Le,J[Ne]=re,O=Ne;else break e}}return ce}function o(J,ce){var re=J.sortIndex-ce.sortIndex;return re!==0?re:J.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,S=null,C=3,j=!1,G=!1,Q=!1,B=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(J){for(var ce=t(_);ce!==null;){if(ce.callback===null)s(_);else if(ce.startTime<=J)s(_),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(_)}}function we(J){if(Q=!1,ye(J),!G)if(t(g)!==null)G=!0,Vt(Ke);else{var ce=t(_);ce!==null&&Ue(we,ce.startTime-J)}}function Ke(J,ce){G=!1,Q&&(Q=!1,ge(I),I=-1),j=!0;var re=C;try{for(ye(ce),S=t(g);S!==null&&(!(S.expirationTime>ce)||J&&!V());){var O=S.callback;if(typeof O=="function"){S.callback=null,C=S.priorityLevel;var q=O(S.expirationTime<=ce);ce=i.unstable_now(),typeof q=="function"?S.callback=q:S===t(g)&&s(g),ye(ce)}else s(g);S=t(g)}if(S!==null)var le=!0;else{var Te=t(_);Te!==null&&Ue(we,Te.startTime-ce),le=!1}return le}finally{S=null,C=re,j=!1}}var Re=!1,D=null,I=-1,R=5,k=-1;function V(){return!(i.unstable_now()-k<R)}function x(){if(D!==null){var J=i.unstable_now();k=J;var ce=!0;try{ce=D(!0,J)}finally{ce?A():(Re=!1,D=null)}}else Re=!1}var A;if(typeof fe=="function")A=function(){fe(x)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Dt=tt.port2;tt.port1.onmessage=x,A=function(){Dt.postMessage(null)}}else A=function(){B(x,0)};function Vt(J){D=J,Re||(Re=!0,A())}function Ue(J,ce){I=B(function(){J(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){G||j||(G=!0,Vt(Ke))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(J){switch(C){case 1:case 2:case 3:var ce=3;break;default:ce=C}var re=C;C=ce;try{return J()}finally{C=re}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,ce){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var re=C;C=J;try{return ce()}finally{C=re}},i.unstable_scheduleCallback=function(J,ce,re){var O=i.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,J){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=re+q,J={id:w++,callback:ce,priorityLevel:J,startTime:re,expirationTime:q,sortIndex:-1},re>O?(J.sortIndex=re,e(_,J),t(g)===null&&J===t(_)&&(Q?(ge(I),I=-1):Q=!0,Ue(we,re-O))):(J.sortIndex=q,e(g,J),G||j||(G=!0,Vt(Ke))),J},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(J){var ce=C;return function(){var re=C;C=ce;try{return J.apply(this,arguments)}finally{C=re}}}})(fd)),fd}var Ny;function OR(){return Ny||(Ny=1,dd.exports=VR()),dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function xR(){if(Dy)return Zt;Dy=1;var i=zd(),e=OR();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},S={};function C(n){return g.call(S,n)?!0:g.call(w,n)?!1:_.test(n)?S[n]=!0:(w[n]=!0,!1)}function j(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function G(n,r,a,c){if(r===null||typeof r>"u"||j(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Q(n,r,a,c,d,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new Q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];B[r]=new Q(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new Q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new Q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new Q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new Q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new Q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new Q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new Q(n,5,!1,n.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function fe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ge,fe);B[r]=new Q(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ge,fe);B[r]=new Q(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ge,fe);B[r]=new Q(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new Q(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new Q(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,a,c){var d=B.hasOwnProperty(r)?B[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(G(r,a,d,c)&&(a=null),c||d===null?C(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var we=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ke=Symbol.for("react.element"),Re=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),V=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),J=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,O;function q(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var le=!1;function Te(n,r){if(!n||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,T=p.length-1;1<=v&&0<=T&&d[v]!==p[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==p[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==p[T]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=T);break}}}finally{le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Se(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Te(n.type,!1),n;case 11:return n=Te(n.type.render,!1),n;case 1:return n=Te(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Re:return"Portal";case R:return"Profiler";case I:return"StrictMode";case A:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case x:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Dt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Vt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function yt(n){var r=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function lr(n){n._valueTracker||(n._valueTracker=yt(n))}function _s(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Lr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Pi(n,r){var a=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function vs(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function xo(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function Lo(n,r){xo(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Es(n,r.type,a):r.hasOwnProperty("defaultValue")&&Es(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function cl(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Es(n,r,a){(r!=="number"||Lr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ur=Array.isArray;function cr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Mo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ws(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(ur(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function Ts(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function bo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ht(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ht(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var hr,Fo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=hr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Mr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ni=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(n){Ni.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),ki[r]=ki[n]})});function Uo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||ki.hasOwnProperty(n)&&ki[n]?(""+r).trim():r+"px"}function jo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Uo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var zo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bo(n,r){if(r){if(zo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function $o(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function Is(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ss=null,un=null,Bn=null;function As(n){if(n=fa(n)){if(typeof Ss!="function")throw Error(t(280));var r=n.stateNode;r&&(r=jl(r),Ss(n.stateNode,n.type,r))}}function $n(n){un?Bn?Bn.push(n):Bn=[n]:un=n}function qo(){if(un){var n=un,r=Bn;if(Bn=un=null,As(n),r)for(n=0;n<r.length;n++)As(r[n])}}function Vi(n,r){return n(r)}function Ho(){}var dr=!1;function Wo(n,r,a){if(dr)return n(r,a);dr=!0;try{return Vi(n,r,a)}finally{dr=!1,(un!==null||Bn!==null)&&(Ho(),qo())}}function nt(n,r){var a=n.stateNode;if(a===null)return null;var c=jl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Rs=!1;if(m)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Rs=!1}function Oi(n,r,a,c,d,p,v,T,P){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(W){this.onError(W)}}var xi=!1,Cs=null,In=!1,Go=null,Rc={onError:function(n){xi=!0,Cs=n}};function Ps(n,r,a,c,d,p,v,T,P){xi=!1,Cs=null,Oi.apply(Rc,arguments)}function hl(n,r,a,c,d,p,v,T,P){if(Ps.apply(this,arguments),xi){if(xi){var F=Cs;xi=!1,Cs=null}else throw Error(t(198));In||(In=!0,Go=F)}}function Sn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Li(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function An(n){if(Sn(n)!==n)throw Error(t(188))}function dl(n){var r=n.alternate;if(!r){if(r=Sn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return An(d),n;if(p===c)return An(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=p;break}if(T===c){v=!0,c=d,a=p;break}T=T.sibling}if(!v){for(T=p.child;T;){if(T===a){v=!0,a=p,c=d;break}if(T===c){v=!0,c=p,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Ko(n){return n=dl(n),n!==null?ks(n):null}function ks(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ks(n);if(r!==null)return r;n=n.sibling}return null}var Ns=e.unstable_scheduleCallback,Qo=e.unstable_cancelCallback,fl=e.unstable_shouldYield,Cc=e.unstable_requestPaint,Be=e.unstable_now,pl=e.unstable_getCurrentPriorityLevel,Mi=e.unstable_ImmediatePriority,br=e.unstable_UserBlockingPriority,cn=e.unstable_NormalPriority,Yo=e.unstable_LowPriority,ml=e.unstable_IdlePriority,bi=null,tn=null;function gl(n){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(bi,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:_l,Xo=Math.log,yl=Math.LN2;function _l(n){return n>>>=0,n===0?32:31-(Xo(n)/yl|0)|0}var Ds=64,Vs=4194304;function Fr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Fi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=Fr(T):(p&=v,p!==0&&(c=Fr(p)))}else v=a&~d,v!==0?c=Fr(v):p!==0&&(c=Fr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Bt(r),d=1<<a,c|=n[a],r&=~d;return c}function Pc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Bt(p),T=1<<v,P=d[v];P===-1?((T&a)===0||(T&c)!==0)&&(d[v]=Pc(T,r)):P<=r&&(n.expiredLanes|=T),p&=~T}}function nn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ui(){var n=Ds;return Ds<<=1,(Ds&4194240)===0&&(Ds=64),n}function Ur(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function jr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Bt(r),n[r]=a}function je(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function zr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var ke=0;function Br(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var vl,Os,El,wl,Tl,Jo=!1,qn=[],It=null,Rn=null,Cn=null,$r=new Map,hn=new Map,Hn=[],kc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Il(n,r){switch(n){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":$r.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(r.pointerId)}}function Wt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=fa(r),r!==null&&Os(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Nc(n,r,a,c,d){switch(r){case"focusin":return It=Wt(It,n,r,a,c,d),!0;case"dragenter":return Rn=Wt(Rn,n,r,a,c,d),!0;case"mouseover":return Cn=Wt(Cn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return $r.set(p,Wt($r.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,hn.set(p,Wt(hn.get(p)||null,n,r,a,c,d)),!0}return!1}function Sl(n){var r=qi(n.target);if(r!==null){var a=Sn(r);if(a!==null){if(r=a.tag,r===13){if(r=Li(a),r!==null){n.blockedOn=r,Tl(n.priority,function(){El(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=xs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Di=c,a.target.dispatchEvent(c),Di=null}else return r=fa(a),r!==null&&Os(r),n.blockedOn=a,!1;r.shift()}return!0}function ji(n,r,a){pr(n)&&a.delete(r)}function Al(){Jo=!1,It!==null&&pr(It)&&(It=null),Rn!==null&&pr(Rn)&&(Rn=null),Cn!==null&&pr(Cn)&&(Cn=null),$r.forEach(ji),hn.forEach(ji)}function Pn(n,r){n.blockedOn===r&&(n.blockedOn=null,Jo||(Jo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Al)))}function kn(n){function r(d){return Pn(d,n)}if(0<qn.length){Pn(qn[0],n);for(var a=1;a<qn.length;a++){var c=qn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(It!==null&&Pn(It,n),Rn!==null&&Pn(Rn,n),Cn!==null&&Pn(Cn,n),$r.forEach(r),hn.forEach(r),a=0;a<Hn.length;a++)c=Hn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Hn.length&&(a=Hn[0],a.blockedOn===null);)Sl(a),a.blockedOn===null&&Hn.shift()}var mr=we.ReactCurrentBatchConfig,qr=!0;function Qe(n,r,a,c){var d=ke,p=mr.transition;mr.transition=null;try{ke=1,Zo(n,r,a,c)}finally{ke=d,mr.transition=p}}function Dc(n,r,a,c){var d=ke,p=mr.transition;mr.transition=null;try{ke=4,Zo(n,r,a,c)}finally{ke=d,mr.transition=p}}function Zo(n,r,a,c){if(qr){var d=xs(n,r,a,c);if(d===null)Bc(n,r,c,zi,a),Il(n,c);else if(Nc(d,n,r,a,c))c.stopPropagation();else if(Il(n,c),r&4&&-1<kc.indexOf(n)){for(;d!==null;){var p=fa(d);if(p!==null&&vl(p),p=xs(n,r,a,c),p===null&&Bc(n,r,c,zi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Bc(n,r,c,null,a)}}var zi=null;function xs(n,r,a,c){if(zi=null,n=Is(c),n=qi(n),n!==null)if(r=Sn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Li(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return zi=n,null}function ea(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pl()){case Mi:return 1;case br:return 4;case cn:case Yo:return 16;case ml:return 536870912;default:return 16}default:return 16}}var rn=null,Ls=null,Gt=null;function ta(){if(Gt)return Gt;var n,r=Ls,a=r.length,c,d="value"in rn?rn.value:rn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[p-c];c++);return Gt=d.slice(n,1<c?1-c:void 0)}function Ms(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function na(){return!1}function St(n){function r(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Wn:na,this.isPropagationStopped=na,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),r}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=St(Nn),Gn=re({},Nn,{view:0,detail:0}),Vc=St(Gn),Fs,gr,Hr,Bi=re({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Hr&&(Hr&&n.type==="mousemove"?(Fs=n.screenX-Hr.screenX,gr=n.screenY-Hr.screenY):gr=Fs=0,Hr=n),Fs)},movementY:function(n){return"movementY"in n?n.movementY:gr}}),Us=St(Bi),ra=re({},Bi,{dataTransfer:0}),Rl=St(ra),js=re({},Gn,{relatedTarget:0}),zs=St(js),Cl=re({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),yr=St(Cl),Pl=re({},Nn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),kl=St(Pl),Nl=re({},Nn,{data:0}),ia=St(Nl),Bs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Dl[n])?!!r[n]:!1}function Kn(){return Vl}var l=re({},Gn,{key:function(n){if(n.key){var r=Bs[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ms(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(n){return n.type==="keypress"?Ms(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ms(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=St(l),y=re({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=St(y),L=re({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn}),U=St(L),X=re({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=St(X),ft=re({},Bi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=St(ft),_t=[9,13,27,32],ot=m&&"CompositionEvent"in window,dn=null;m&&"documentMode"in document&&(dn=document.documentMode);var sn=m&&"TextEvent"in window&&!dn,$i=m&&(!ot||dn&&8<dn&&11>=dn),$s=" ",Bf=!1;function $f(n,r){switch(n){case"keyup":return _t.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qs=!1;function cE(n,r){switch(n){case"compositionend":return qf(r);case"keypress":return r.which!==32?null:(Bf=!0,$s);case"textInput":return n=r.data,n===$s&&Bf?null:n;default:return null}}function hE(n,r){if(qs)return n==="compositionend"||!ot&&$f(n,r)?(n=ta(),Gt=Ls=rn=null,qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return $i&&r.locale!=="ko"?null:r.data;default:return null}}var dE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!dE[n.type]:r==="textarea"}function Wf(n,r,a,c){$n(c),r=bl(r,"onChange"),0<r.length&&(a=new bs("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var sa=null,oa=null;function fE(n){cp(n,0)}function Ol(n){var r=Qs(n);if(_s(r))return n}function pE(n,r){if(n==="change")return r}var Gf=!1;if(m){var Oc;if(m){var xc="oninput"in document;if(!xc){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),xc=typeof Kf.oninput=="function"}Oc=xc}else Oc=!1;Gf=Oc&&(!document.documentMode||9<document.documentMode)}function Qf(){sa&&(sa.detachEvent("onpropertychange",Yf),oa=sa=null)}function Yf(n){if(n.propertyName==="value"&&Ol(oa)){var r=[];Wf(r,oa,n,Is(n)),Wo(fE,r)}}function mE(n,r,a){n==="focusin"?(Qf(),sa=r,oa=a,sa.attachEvent("onpropertychange",Yf)):n==="focusout"&&Qf()}function gE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ol(oa)}function yE(n,r){if(n==="click")return Ol(r)}function _E(n,r){if(n==="input"||n==="change")return Ol(r)}function vE(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Dn=typeof Object.is=="function"?Object.is:vE;function aa(n,r){if(Dn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Dn(n[d],r[d]))return!1}return!0}function Xf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jf(n,r){var a=Xf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xf(a)}}function Zf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Zf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function ep(){for(var n=window,r=Lr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Lr(n.document)}return r}function Lc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function EE(n){var r=ep(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Zf(a.ownerDocument.documentElement,a)){if(c!==null&&Lc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Jf(a,p);var v=Jf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var wE=m&&"documentMode"in document&&11>=document.documentMode,Hs=null,Mc=null,la=null,bc=!1;function tp(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||Hs==null||Hs!==Lr(c)||(c=Hs,"selectionStart"in c&&Lc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),la&&aa(la,c)||(la=c,c=bl(Mc,"onSelect"),0<c.length&&(r=new bs("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Hs)))}function xl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ws={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Fc={},np={};m&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function Ll(n){if(Fc[n])return Fc[n];if(!Ws[n])return n;var r=Ws[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in np)return Fc[n]=r[a];return n}var rp=Ll("animationend"),ip=Ll("animationiteration"),sp=Ll("animationstart"),op=Ll("transitionend"),ap=new Map,lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(n,r){ap.set(n,r),u(r,[n])}for(var Uc=0;Uc<lp.length;Uc++){var jc=lp[Uc],TE=jc.toLowerCase(),IE=jc[0].toUpperCase()+jc.slice(1);Wr(TE,"on"+IE)}Wr(rp,"onAnimationEnd"),Wr(ip,"onAnimationIteration"),Wr(sp,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr(op,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function up(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,hl(c,r,void 0,n),n.currentTarget=null}function cp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var v=c.length-1;0<=v;v--){var T=c[v],P=T.instance,F=T.currentTarget;if(T=T.listener,P!==p&&d.isPropagationStopped())break e;up(d,T,F),p=P}else for(v=0;v<c.length;v++){if(T=c[v],P=T.instance,F=T.currentTarget,T=T.listener,P!==p&&d.isPropagationStopped())break e;up(d,T,F),p=P}}}if(In)throw n=Go,In=!1,Go=null,n}function He(n,r){var a=r[Kc];a===void 0&&(a=r[Kc]=new Set);var c=n+"__bubble";a.has(c)||(hp(r,n,2,!1),a.add(c))}function zc(n,r,a){var c=0;r&&(c|=4),hp(a,n,c,r)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function ca(n){if(!n[Ml]){n[Ml]=!0,s.forEach(function(a){a!=="selectionchange"&&(SE.has(a)||zc(a,!1,n),zc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ml]||(r[Ml]=!0,zc("selectionchange",!1,r))}}function hp(n,r,a,c){switch(ea(r)){case 1:var d=Qe;break;case 4:d=Dc;break;default:d=Zo}a=d.bind(null,r,a,n),d=void 0,!Rs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Bc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;T!==null;){if(v=qi(T),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}T=T.parentNode}}c=c.return}Wo(function(){var F=p,W=Is(a),K=[];e:{var H=ap.get(n);if(H!==void 0){var te=bs,se=n;switch(n){case"keypress":if(Ms(a)===0)break e;case"keydown":case"keyup":te=f;break;case"focusin":se="focus",te=zs;break;case"focusout":se="blur",te=zs;break;case"beforeblur":case"afterblur":te=zs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=U;break;case rp:case ip:case sp:te=yr;break;case op:te=Fe;break;case"scroll":te=Vc;break;case"wheel":te=De;break;case"copy":case"cut":case"paste":te=kl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var oe=(r&4)!==0,rt=!oe&&n==="scroll",M=oe?H!==null?H+"Capture":null:H;oe=[];for(var N=F,b;N!==null;){b=N;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,M!==null&&(Y=nt(N,M),Y!=null&&oe.push(ha(N,Y,b)))),rt)break;N=N.return}0<oe.length&&(H=new te(H,se,null,a,W),K.push({event:H,listeners:oe}))}}if((r&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",H&&a!==Di&&(se=a.relatedTarget||a.fromElement)&&(qi(se)||se[_r]))break e;if((te||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,te?(se=a.relatedTarget||a.toElement,te=F,se=se?qi(se):null,se!==null&&(rt=Sn(se),se!==rt||se.tag!==5&&se.tag!==6)&&(se=null)):(te=null,se=F),te!==se)){if(oe=Us,Y="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(oe=E,Y="onPointerLeave",M="onPointerEnter",N="pointer"),rt=te==null?H:Qs(te),b=se==null?H:Qs(se),H=new oe(Y,N+"leave",te,a,W),H.target=rt,H.relatedTarget=b,Y=null,qi(W)===F&&(oe=new oe(M,N+"enter",se,a,W),oe.target=b,oe.relatedTarget=rt,Y=oe),rt=Y,te&&se)t:{for(oe=te,M=se,N=0,b=oe;b;b=Gs(b))N++;for(b=0,Y=M;Y;Y=Gs(Y))b++;for(;0<N-b;)oe=Gs(oe),N--;for(;0<b-N;)M=Gs(M),b--;for(;N--;){if(oe===M||M!==null&&oe===M.alternate)break t;oe=Gs(oe),M=Gs(M)}oe=null}else oe=null;te!==null&&dp(K,H,te,oe,!1),se!==null&&rt!==null&&dp(K,rt,se,oe,!0)}}e:{if(H=F?Qs(F):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var ae=pE;else if(Hf(H))if(Gf)ae=_E;else{ae=gE;var he=mE}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ae=yE);if(ae&&(ae=ae(n,F))){Wf(K,ae,a,W);break e}he&&he(n,H,F),n==="focusout"&&(he=H._wrapperState)&&he.controlled&&H.type==="number"&&Es(H,"number",H.value)}switch(he=F?Qs(F):window,n){case"focusin":(Hf(he)||he.contentEditable==="true")&&(Hs=he,Mc=F,la=null);break;case"focusout":la=Mc=Hs=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,tp(K,a,W);break;case"selectionchange":if(wE)break;case"keydown":case"keyup":tp(K,a,W)}var de;if(ot)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else qs?$f(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&($i&&a.locale!=="ko"&&(qs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&qs&&(de=ta()):(rn=W,Ls="value"in rn?rn.value:rn.textContent,qs=!0)),he=bl(F,_e),0<he.length&&(_e=new ia(_e,n,null,a,W),K.push({event:_e,listeners:he}),de?_e.data=de:(de=qf(a),de!==null&&(_e.data=de)))),(de=sn?cE(n,a):hE(n,a))&&(F=bl(F,"onBeforeInput"),0<F.length&&(W=new ia("onBeforeInput","beforeinput",null,a,W),K.push({event:W,listeners:F}),W.data=de))}cp(K,r)})}function ha(n,r,a){return{instance:n,listener:r,currentTarget:a}}function bl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=nt(n,a),p!=null&&c.unshift(ha(n,p,d)),p=nt(n,r),p!=null&&c.push(ha(n,p,d))),n=n.return}return c}function Gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dp(n,r,a,c,d){for(var p=r._reactName,v=[];a!==null&&a!==c;){var T=a,P=T.alternate,F=T.stateNode;if(P!==null&&P===c)break;T.tag===5&&F!==null&&(T=F,d?(P=nt(a,p),P!=null&&v.unshift(ha(a,P,T))):d||(P=nt(a,p),P!=null&&v.push(ha(a,P,T)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var AE=/\r\n?/g,RE=/\u0000|\uFFFD/g;function fp(n){return(typeof n=="string"?n:""+n).replace(AE,`
`).replace(RE,"")}function Fl(n,r,a){if(r=fp(r),fp(n)!==r&&a)throw Error(t(425))}function Ul(){}var $c=null,qc=null;function Hc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,CE=typeof clearTimeout=="function"?clearTimeout:void 0,pp=typeof Promise=="function"?Promise:void 0,PE=typeof queueMicrotask=="function"?queueMicrotask:typeof pp<"u"?function(n){return pp.resolve(null).then(n).catch(kE)}:Wc;function kE(n){setTimeout(function(){throw n})}function Gc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),kn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);kn(r)}function Gr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function mp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Ks,da="__reactProps$"+Ks,_r="__reactContainer$"+Ks,Kc="__reactEvents$"+Ks,NE="__reactListeners$"+Ks,DE="__reactHandles$"+Ks;function qi(n){var r=n[Qn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[_r]||a[Qn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=mp(n);n!==null;){if(a=n[Qn])return a;n=mp(n)}return r}n=a,a=n.parentNode}return null}function fa(n){return n=n[Qn]||n[_r],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function jl(n){return n[da]||null}var Qc=[],Ys=-1;function Kr(n){return{current:n}}function We(n){0>Ys||(n.current=Qc[Ys],Qc[Ys]=null,Ys--)}function $e(n,r){Ys++,Qc[Ys]=n.current,n.current=r}var Qr={},Ot=Kr(Qr),Kt=Kr(!1),Hi=Qr;function Xs(n,r){var a=n.type.contextTypes;if(!a)return Qr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function zl(){We(Kt),We(Ot)}function gp(n,r,a){if(Ot.current!==Qr)throw Error(t(168));$e(Ot,r),$e(Kt,a)}function yp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return re({},a,c)}function Bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Qr,Hi=Ot.current,$e(Ot,n),$e(Kt,Kt.current),!0}function _p(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=yp(n,r,Hi),c.__reactInternalMemoizedMergedChildContext=n,We(Kt),We(Ot),$e(Ot,n)):We(Kt),$e(Kt,a)}var vr=null,$l=!1,Yc=!1;function vp(n){vr===null?vr=[n]:vr.push(n)}function VE(n){$l=!0,vp(n)}function Yr(){if(!Yc&&vr!==null){Yc=!0;var n=0,r=ke;try{var a=vr;for(ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}vr=null,$l=!1}catch(d){throw vr!==null&&(vr=vr.slice(n+1)),Ns(Mi,Yr),d}finally{ke=r,Yc=!1}}return null}var Js=[],Zs=0,ql=null,Hl=0,fn=[],pn=0,Wi=null,Er=1,wr="";function Gi(n,r){Js[Zs++]=Hl,Js[Zs++]=ql,ql=n,Hl=r}function Ep(n,r,a){fn[pn++]=Er,fn[pn++]=wr,fn[pn++]=Wi,Wi=n;var c=Er;n=wr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var p=32-Bt(r)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Er=1<<32-Bt(r)+d|a<<d|c,wr=p+n}else Er=1<<p|a<<d|c,wr=n}function Xc(n){n.return!==null&&(Gi(n,1),Ep(n,1,0))}function Jc(n){for(;n===ql;)ql=Js[--Zs],Js[Zs]=null,Hl=Js[--Zs],Js[Zs]=null;for(;n===Wi;)Wi=fn[--pn],fn[pn]=null,wr=fn[--pn],fn[pn]=null,Er=fn[--pn],fn[pn]=null}var on=null,an=null,Ye=!1,Vn=null;function wp(n,r){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Tp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,on=n,an=Gr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,on=n,an=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Wi!==null?{id:Er,overflow:wr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function Zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function eh(n){if(Ye){var r=an;if(r){var a=r;if(!Tp(n,r)){if(Zc(n))throw Error(t(418));r=Gr(a.nextSibling);var c=on;r&&Tp(n,r)?wp(c,a):(n.flags=n.flags&-4097|2,Ye=!1,on=n)}}else{if(Zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,on=n}}}function Ip(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Wl(n){if(n!==on)return!1;if(!Ye)return Ip(n),Ye=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Hc(n.type,n.memoizedProps)),r&&(r=an)){if(Zc(n))throw Sp(),Error(t(418));for(;r;)wp(n,r),r=Gr(r.nextSibling)}if(Ip(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){an=Gr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}an=null}}else an=on?Gr(n.stateNode.nextSibling):null;return!0}function Sp(){for(var n=an;n;)n=Gr(n.nextSibling)}function eo(){an=on=null,Ye=!1}function th(n){Vn===null?Vn=[n]:Vn.push(n)}var OE=we.ReactCurrentBatchConfig;function pa(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var T=d.refs;v===null?delete T[p]:T[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Gl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Ap(n){var r=n._init;return r(n._payload)}function Rp(n){function r(M,N){if(n){var b=M.deletions;b===null?(M.deletions=[N],M.flags|=16):b.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)r(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=ii(M,N),M.index=0,M.sibling=null,M}function p(M,N,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<N?(M.flags|=2,N):b):(M.flags|=2,N)):(M.flags|=1048576,N)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,N,b,Y){return N===null||N.tag!==6?(N=Wh(b,M.mode,Y),N.return=M,N):(N=d(N,b),N.return=M,N)}function P(M,N,b,Y){var ae=b.type;return ae===D?W(M,N,b.props.children,Y,b.key):N!==null&&(N.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Vt&&Ap(ae)===N.type)?(Y=d(N,b.props),Y.ref=pa(M,N,b),Y.return=M,Y):(Y=yu(b.type,b.key,b.props,null,M.mode,Y),Y.ref=pa(M,N,b),Y.return=M,Y)}function F(M,N,b,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Gh(b,M.mode,Y),N.return=M,N):(N=d(N,b.children||[]),N.return=M,N)}function W(M,N,b,Y,ae){return N===null||N.tag!==7?(N=ts(b,M.mode,Y,ae),N.return=M,N):(N=d(N,b),N.return=M,N)}function K(M,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Wh(""+N,M.mode,b),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ke:return b=yu(N.type,N.key,N.props,null,M.mode,b),b.ref=pa(M,null,N),b.return=M,b;case Re:return N=Gh(N,M.mode,b),N.return=M,N;case Vt:var Y=N._init;return K(M,Y(N._payload),b)}if(ur(N)||ce(N))return N=ts(N,M.mode,b,null),N.return=M,N;Gl(M,N)}return null}function H(M,N,b,Y){var ae=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ae!==null?null:T(M,N,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ke:return b.key===ae?P(M,N,b,Y):null;case Re:return b.key===ae?F(M,N,b,Y):null;case Vt:return ae=b._init,H(M,N,ae(b._payload),Y)}if(ur(b)||ce(b))return ae!==null?null:W(M,N,b,Y,null);Gl(M,b)}return null}function te(M,N,b,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(b)||null,T(N,M,""+Y,ae);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Ke:return M=M.get(Y.key===null?b:Y.key)||null,P(N,M,Y,ae);case Re:return M=M.get(Y.key===null?b:Y.key)||null,F(N,M,Y,ae);case Vt:var he=Y._init;return te(M,N,b,he(Y._payload),ae)}if(ur(Y)||ce(Y))return M=M.get(b)||null,W(N,M,Y,ae,null);Gl(N,Y)}return null}function se(M,N,b,Y){for(var ae=null,he=null,de=N,_e=N=0,wt=null;de!==null&&_e<b.length;_e++){de.index>_e?(wt=de,de=null):wt=de.sibling;var xe=H(M,de,b[_e],Y);if(xe===null){de===null&&(de=wt);break}n&&de&&xe.alternate===null&&r(M,de),N=p(xe,N,_e),he===null?ae=xe:he.sibling=xe,he=xe,de=wt}if(_e===b.length)return a(M,de),Ye&&Gi(M,_e),ae;if(de===null){for(;_e<b.length;_e++)de=K(M,b[_e],Y),de!==null&&(N=p(de,N,_e),he===null?ae=de:he.sibling=de,he=de);return Ye&&Gi(M,_e),ae}for(de=c(M,de);_e<b.length;_e++)wt=te(de,M,_e,b[_e],Y),wt!==null&&(n&&wt.alternate!==null&&de.delete(wt.key===null?_e:wt.key),N=p(wt,N,_e),he===null?ae=wt:he.sibling=wt,he=wt);return n&&de.forEach(function(si){return r(M,si)}),Ye&&Gi(M,_e),ae}function oe(M,N,b,Y){var ae=ce(b);if(typeof ae!="function")throw Error(t(150));if(b=ae.call(b),b==null)throw Error(t(151));for(var he=ae=null,de=N,_e=N=0,wt=null,xe=b.next();de!==null&&!xe.done;_e++,xe=b.next()){de.index>_e?(wt=de,de=null):wt=de.sibling;var si=H(M,de,xe.value,Y);if(si===null){de===null&&(de=wt);break}n&&de&&si.alternate===null&&r(M,de),N=p(si,N,_e),he===null?ae=si:he.sibling=si,he=si,de=wt}if(xe.done)return a(M,de),Ye&&Gi(M,_e),ae;if(de===null){for(;!xe.done;_e++,xe=b.next())xe=K(M,xe.value,Y),xe!==null&&(N=p(xe,N,_e),he===null?ae=xe:he.sibling=xe,he=xe);return Ye&&Gi(M,_e),ae}for(de=c(M,de);!xe.done;_e++,xe=b.next())xe=te(de,M,_e,xe.value,Y),xe!==null&&(n&&xe.alternate!==null&&de.delete(xe.key===null?_e:xe.key),N=p(xe,N,_e),he===null?ae=xe:he.sibling=xe,he=xe);return n&&de.forEach(function(dw){return r(M,dw)}),Ye&&Gi(M,_e),ae}function rt(M,N,b,Y){if(typeof b=="object"&&b!==null&&b.type===D&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ke:e:{for(var ae=b.key,he=N;he!==null;){if(he.key===ae){if(ae=b.type,ae===D){if(he.tag===7){a(M,he.sibling),N=d(he,b.props.children),N.return=M,M=N;break e}}else if(he.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Vt&&Ap(ae)===he.type){a(M,he.sibling),N=d(he,b.props),N.ref=pa(M,he,b),N.return=M,M=N;break e}a(M,he);break}else r(M,he);he=he.sibling}b.type===D?(N=ts(b.props.children,M.mode,Y,b.key),N.return=M,M=N):(Y=yu(b.type,b.key,b.props,null,M.mode,Y),Y.ref=pa(M,N,b),Y.return=M,M=Y)}return v(M);case Re:e:{for(he=b.key;N!==null;){if(N.key===he)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(M,N.sibling),N=d(N,b.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else r(M,N);N=N.sibling}N=Gh(b,M.mode,Y),N.return=M,M=N}return v(M);case Vt:return he=b._init,rt(M,N,he(b._payload),Y)}if(ur(b))return se(M,N,b,Y);if(ce(b))return oe(M,N,b,Y);Gl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,b),N.return=M,M=N):(a(M,N),N=Wh(b,M.mode,Y),N.return=M,M=N),v(M)):a(M,N)}return rt}var to=Rp(!0),Cp=Rp(!1),Kl=Kr(null),Ql=null,no=null,nh=null;function rh(){nh=no=Ql=null}function ih(n){var r=Kl.current;We(Kl),n._currentValue=r}function sh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function ro(n,r){Ql=n,nh=no=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Yt=!0),n.firstContext=null)}function mn(n){var r=n._currentValue;if(nh!==n)if(n={context:n,memoizedValue:r,next:null},no===null){if(Ql===null)throw Error(t(308));no=n,Ql.dependencies={lanes:0,firstContext:n}}else no=no.next=n;return r}var Ki=null;function oh(n){Ki===null?Ki=[n]:Ki.push(n)}function Pp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,oh(r)):(a.next=d.next,d.next=a),r.interleaved=a,Tr(n,c)}function Tr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Xr=!1;function ah(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ir(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Jr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Tr(n,a)}return d=c.interleaved,d===null?(r.next=r,oh(c)):(r.next=d.next,d.next=r),c.interleaved=r,Tr(n,a)}function Yl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zr(n,a)}}function Np(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Xl(n,r,a,c){var d=n.updateQueue;Xr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var P=T,F=P.next;P.next=null,v===null?p=F:v.next=F,v=P;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==v&&(T===null?W.firstBaseUpdate=F:T.next=F,W.lastBaseUpdate=P))}if(p!==null){var K=d.baseState;v=0,W=F=P=null,T=p;do{var H=T.lane,te=T.eventTime;if((c&H)===H){W!==null&&(W=W.next={eventTime:te,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var se=n,oe=T;switch(H=r,te=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){K=se.call(te,K,H);break e}K=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,H=typeof se=="function"?se.call(te,K,H):se,H==null)break e;K=re({},K,H);break e;case 2:Xr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[T]:H.push(T))}else te={eventTime:te,lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(F=W=te,P=K):W=W.next=te,v|=H;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;H=T,T=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(W===null&&(P=K),d.baseState=P,d.firstBaseUpdate=F,d.lastBaseUpdate=W,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Xi|=v,n.lanes=v,n.memoizedState=K}}function Dp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ma={},Yn=Kr(ma),ga=Kr(ma),ya=Kr(ma);function Qi(n){if(n===ma)throw Error(t(174));return n}function lh(n,r){switch($e(ya,r),$e(ga,n),$e(Yn,ma),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:dt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=dt(r,n)}We(Yn),$e(Yn,r)}function io(){We(Yn),We(ga),We(ya)}function Vp(n){Qi(ya.current);var r=Qi(Yn.current),a=dt(r,n.type);r!==a&&($e(ga,n),$e(Yn,a))}function uh(n){ga.current===n&&(We(Yn),We(ga))}var Xe=Kr(0);function Jl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ch=[];function hh(){for(var n=0;n<ch.length;n++)ch[n]._workInProgressVersionPrimary=null;ch.length=0}var Zl=we.ReactCurrentDispatcher,dh=we.ReactCurrentBatchConfig,Yi=0,Je=null,pt=null,vt=null,eu=!1,_a=!1,va=0,xE=0;function xt(){throw Error(t(321))}function fh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Dn(n[a],r[a]))return!1;return!0}function ph(n,r,a,c,d,p){if(Yi=p,Je=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Zl.current=n===null||n.memoizedState===null?FE:UE,n=a(c,d),_a){p=0;do{if(_a=!1,va=0,25<=p)throw Error(t(301));p+=1,vt=pt=null,r.updateQueue=null,Zl.current=jE,n=a(c,d)}while(_a)}if(Zl.current=ru,r=pt!==null&&pt.next!==null,Yi=0,vt=pt=Je=null,eu=!1,r)throw Error(t(300));return n}function mh(){var n=va!==0;return va=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Je.memoizedState=vt=n:vt=vt.next=n,vt}function gn(){if(pt===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var r=vt===null?Je.memoizedState:vt.next;if(r!==null)vt=r,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},vt===null?Je.memoizedState=vt=n:vt=vt.next=n}return vt}function Ea(n,r){return typeof r=="function"?r(n):r}function gh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=v=null,P=null,F=p;do{var W=F.lane;if((Yi&W)===W)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var K={lane:W,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(T=P=K,v=c):P=P.next=K,Je.lanes|=W,Xi|=W}F=F.next}while(F!==null&&F!==p);P===null?v=c:P.next=T,Dn(c,r.memoizedState)||(Yt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Je.lanes|=p,Xi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function yh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);Dn(p,r.memoizedState)||(Yt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function Op(){}function xp(n,r){var a=Je,c=gn(),d=r(),p=!Dn(c.memoizedState,d);if(p&&(c.memoizedState=d,Yt=!0),c=c.queue,_h(bp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,wa(9,Mp.bind(null,a,c,d,r),void 0,null),Et===null)throw Error(t(349));(Yi&30)!==0||Lp(a,r,d)}return d}function Lp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Mp(n,r,a,c){r.value=a,r.getSnapshot=c,Fp(r)&&Up(n)}function bp(n,r,a){return a(function(){Fp(r)&&Up(n)})}function Fp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Dn(n,a)}catch{return!0}}function Up(n){var r=Tr(n,1);r!==null&&Mn(r,n,1,-1)}function jp(n){var r=Xn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},r.queue=n,n=n.dispatch=bE.bind(null,Je,n),[r.memoizedState,n]}function wa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function zp(){return gn().memoizedState}function tu(n,r,a,c){var d=Xn();Je.flags|=n,d.memoizedState=wa(1|r,a,void 0,c===void 0?null:c)}function nu(n,r,a,c){var d=gn();c=c===void 0?null:c;var p=void 0;if(pt!==null){var v=pt.memoizedState;if(p=v.destroy,c!==null&&fh(c,v.deps)){d.memoizedState=wa(r,a,p,c);return}}Je.flags|=n,d.memoizedState=wa(1|r,a,p,c)}function Bp(n,r){return tu(8390656,8,n,r)}function _h(n,r){return nu(2048,8,n,r)}function $p(n,r){return nu(4,2,n,r)}function qp(n,r){return nu(4,4,n,r)}function Hp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Wp(n,r,a){return a=a!=null?a.concat([n]):null,nu(4,4,Hp.bind(null,r,n),a)}function vh(){}function Gp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&fh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Kp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&fh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Qp(n,r,a){return(Yi&21)===0?(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=a):(Dn(a,r)||(a=Ui(),Je.lanes|=a,Xi|=a,n.baseState=!0),r)}function LE(n,r){var a=ke;ke=a!==0&&4>a?a:4,n(!0);var c=dh.transition;dh.transition={};try{n(!1),r()}finally{ke=a,dh.transition=c}}function Yp(){return gn().memoizedState}function ME(n,r,a){var c=ni(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Xp(n))Jp(r,a);else if(a=Pp(n,r,a,c),a!==null){var d=Ht();Mn(a,n,c,d),Zp(a,r,c)}}function bE(n,r,a){var c=ni(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xp(n))Jp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,T=p(v,a);if(d.hasEagerState=!0,d.eagerState=T,Dn(T,v)){var P=r.interleaved;P===null?(d.next=d,oh(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=Pp(n,r,d,c),a!==null&&(d=Ht(),Mn(a,n,c,d),Zp(a,r,c))}}function Xp(n){var r=n.alternate;return n===Je||r!==null&&r===Je}function Jp(n,r){_a=eu=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Zp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zr(n,a)}}var ru={readContext:mn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},FE={readContext:mn,useCallback:function(n,r){return Xn().memoizedState=[n,r===void 0?null:r],n},useContext:mn,useEffect:Bp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,tu(4194308,4,Hp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return tu(4194308,4,n,r)},useInsertionEffect:function(n,r){return tu(4,2,n,r)},useMemo:function(n,r){var a=Xn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Xn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=ME.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var r=Xn();return n={current:n},r.memoizedState=n},useState:jp,useDebugValue:vh,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=jp(!1),r=n[0];return n=LE.bind(null,n[1]),Xn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Je,d=Xn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Et===null)throw Error(t(349));(Yi&30)!==0||Lp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Bp(bp.bind(null,c,p,n),[n]),c.flags|=2048,wa(9,Mp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Xn(),r=Et.identifierPrefix;if(Ye){var a=wr,c=Er;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=va++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=xE++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},UE={readContext:mn,useCallback:Gp,useContext:mn,useEffect:_h,useImperativeHandle:Wp,useInsertionEffect:$p,useLayoutEffect:qp,useMemo:Kp,useReducer:gh,useRef:zp,useState:function(){return gh(Ea)},useDebugValue:vh,useDeferredValue:function(n){var r=gn();return Qp(r,pt.memoizedState,n)},useTransition:function(){var n=gh(Ea)[0],r=gn().memoizedState;return[n,r]},useMutableSource:Op,useSyncExternalStore:xp,useId:Yp,unstable_isNewReconciler:!1},jE={readContext:mn,useCallback:Gp,useContext:mn,useEffect:_h,useImperativeHandle:Wp,useInsertionEffect:$p,useLayoutEffect:qp,useMemo:Kp,useReducer:yh,useRef:zp,useState:function(){return yh(Ea)},useDebugValue:vh,useDeferredValue:function(n){var r=gn();return pt===null?r.memoizedState=n:Qp(r,pt.memoizedState,n)},useTransition:function(){var n=yh(Ea)[0],r=gn().memoizedState;return[n,r]},useMutableSource:Op,useSyncExternalStore:xp,useId:Yp,unstable_isNewReconciler:!1};function On(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Eh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:re({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var iu={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=ni(n),p=Ir(c,d);p.payload=r,a!=null&&(p.callback=a),r=Jr(n,p,d),r!==null&&(Mn(r,n,d,c),Yl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=ni(n),p=Ir(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Jr(n,p,d),r!==null&&(Mn(r,n,d,c),Yl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Ht(),c=ni(n),d=Ir(a,c);d.tag=2,r!=null&&(d.callback=r),r=Jr(n,d,c),r!==null&&(Mn(r,n,c,a),Yl(r,n,c))}};function em(n,r,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):r.prototype&&r.prototype.isPureReactComponent?!aa(a,c)||!aa(d,p):!0}function tm(n,r,a){var c=!1,d=Qr,p=r.contextType;return typeof p=="object"&&p!==null?p=mn(p):(d=Qt(r)?Hi:Ot.current,c=r.contextTypes,p=(c=c!=null)?Xs(n,d):Qr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=iu,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function nm(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&iu.enqueueReplaceState(r,r.state,null)}function wh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ah(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=mn(p):(p=Qt(r)?Hi:Ot.current,d.context=Xs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Eh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&iu.enqueueReplaceState(d,d.state,null),Xl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function so(n,r){try{var a="",c=r;do a+=Se(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function Th(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Ih(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var zE=typeof WeakMap=="function"?WeakMap:Map;function rm(n,r,a){a=Ir(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){hu||(hu=!0,Fh=c),Ih(n,r)},a}function im(n,r,a){a=Ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){Ih(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Ih(n,r),typeof c!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function sm(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new zE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=tw.bind(null,n,r,a),r.then(n,n))}function om(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function am(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Ir(-1,1),r.tag=2,Jr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var BE=we.ReactCurrentOwner,Yt=!1;function qt(n,r,a,c){r.child=n===null?Cp(r,null,a,c):to(r,n.child,a,c)}function lm(n,r,a,c,d){a=a.render;var p=r.ref;return ro(r,d),c=ph(n,r,a,c,p,d),a=mh(),n!==null&&!Yt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Ye&&a&&Xc(r),r.flags|=1,qt(n,r,c,d),r.child)}function um(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Hh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,cm(n,r,p,c,d)):(n=yu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(v,c)&&n.ref===r.ref)return Sr(n,r,d)}return r.flags|=1,n=ii(p,c),n.ref=r.ref,n.return=r,r.child=n}function cm(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(aa(p,c)&&n.ref===r.ref)if(Yt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Yt=!0);else return r.lanes=n.lanes,Sr(n,r,d)}return Sh(n,r,a,c,d)}function hm(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(ao,ln),ln|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$e(ao,ln),ln|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,$e(ao,ln),ln|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,$e(ao,ln),ln|=c;return qt(n,r,d,a),r.child}function dm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Sh(n,r,a,c,d){var p=Qt(a)?Hi:Ot.current;return p=Xs(r,p),ro(r,d),a=ph(n,r,a,c,p,d),c=mh(),n!==null&&!Yt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Ye&&c&&Xc(r),r.flags|=1,qt(n,r,a,d),r.child)}function fm(n,r,a,c,d){if(Qt(a)){var p=!0;Bl(r)}else p=!1;if(ro(r,d),r.stateNode===null)ou(n,r),tm(r,a,c),wh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,T=r.memoizedProps;v.props=T;var P=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=mn(F):(F=Qt(a)?Hi:Ot.current,F=Xs(r,F));var W=a.getDerivedStateFromProps,K=typeof W=="function"||typeof v.getSnapshotBeforeUpdate=="function";K||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||P!==F)&&nm(r,v,c,F),Xr=!1;var H=r.memoizedState;v.state=H,Xl(r,c,v,d),P=r.memoizedState,T!==c||H!==P||Kt.current||Xr?(typeof W=="function"&&(Eh(r,a,W,c),P=r.memoizedState),(T=Xr||em(r,a,T,c,H,P,F))?(K||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),v.props=c,v.state=P,v.context=F,c=T):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,kp(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:On(r.type,T),v.props=F,K=r.pendingProps,H=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=mn(P):(P=Qt(a)?Hi:Ot.current,P=Xs(r,P));var te=a.getDerivedStateFromProps;(W=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==K||H!==P)&&nm(r,v,c,P),Xr=!1,H=r.memoizedState,v.state=H,Xl(r,c,v,d);var se=r.memoizedState;T!==K||H!==se||Kt.current||Xr?(typeof te=="function"&&(Eh(r,a,te,c),se=r.memoizedState),(F=Xr||em(r,a,F,c,H,se,P)||!1)?(W||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,P)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=se),v.props=c,v.state=se,v.context=P,c=F):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),c=!1)}return Ah(n,r,a,c,p,d)}function Ah(n,r,a,c,d,p){dm(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&_p(r,a,!1),Sr(n,r,p);c=r.stateNode,BE.current=r;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=to(r,n.child,null,p),r.child=to(r,null,T,p)):qt(n,r,T,p),r.memoizedState=c.state,d&&_p(r,a,!0),r.child}function pm(n){var r=n.stateNode;r.pendingContext?gp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&gp(n,r.context,!1),lh(n,r.containerInfo)}function mm(n,r,a,c,d){return eo(),th(d),r.flags|=256,qt(n,r,a,c),r.child}var Rh={dehydrated:null,treeContext:null,retryLane:0};function Ch(n){return{baseLanes:n,cachePool:null,transitions:null}}function gm(n,r,a){var c=r.pendingProps,d=Xe.current,p=!1,v=(r.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Xe,d&1),n===null)return eh(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=r.mode,p=r.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=_u(v,c,0,null),n=ts(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=Ch(a),r.memoizedState=Rh,n):Ph(r,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return $E(n,r,v,c,T,d,a);if(p){p=c.fallback,v=r.mode,d=n.child,T=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=ii(d,P),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=ii(T,p):(p=ts(p,v,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,v=n.child.memoizedState,v=v===null?Ch(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,r.memoizedState=Rh,c}return p=n.child,n=p.sibling,c=ii(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Ph(n,r){return r=_u({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function su(n,r,a,c){return c!==null&&th(c),to(r,n.child,null,a),n=Ph(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function $E(n,r,a,c,d,p,v){if(a)return r.flags&256?(r.flags&=-257,c=Th(Error(t(422))),su(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=_u({mode:"visible",children:c.children},d,0,null),p=ts(p,d,v,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&to(r,n.child,null,v),r.child.memoizedState=Ch(v),r.memoizedState=Rh,p);if((r.mode&1)===0)return su(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=Th(p,c,void 0),su(n,r,v,c)}if(T=(v&n.childLanes)!==0,Yt||T){if(c=Et,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Tr(n,d),Mn(c,n,d,-1))}return qh(),c=Th(Error(t(421))),su(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=nw.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,an=Gr(d.nextSibling),on=r,Ye=!0,Vn=null,n!==null&&(fn[pn++]=Er,fn[pn++]=wr,fn[pn++]=Wi,Er=n.id,wr=n.overflow,Wi=r),r=Ph(r,c.children),r.flags|=4096,r)}function ym(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),sh(n.return,r,a)}function kh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function _m(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(qt(n,r,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ym(n,a,r);else if(n.tag===19)ym(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Xe,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Jl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),kh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Jl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}kh(r,!0,a,null,p);break;case"together":kh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ou(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Sr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Xi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ii(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ii(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function qE(n,r,a){switch(r.tag){case 3:pm(r),eo();break;case 5:Vp(r);break;case 1:Qt(r.type)&&Bl(r);break;case 4:lh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;$e(Kl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?($e(Xe,Xe.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?gm(n,r,a):($e(Xe,Xe.current&1),n=Sr(n,r,a),n!==null?n.sibling:null);$e(Xe,Xe.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return _m(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Xe,Xe.current),c)break;return null;case 22:case 23:return r.lanes=0,hm(n,r,a)}return Sr(n,r,a)}var vm,Nh,Em,wm;vm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Nh=function(){},Em=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Qi(Yn.current);var p=null;switch(a){case"input":d=Pi(n,d),c=Pi(n,c),p=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),p=[];break;case"textarea":d=Mo(n,d),c=Mo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ul)}Bo(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var P=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&P!==T&&(P!=null||T!=null))if(F==="style")if(T){for(v in T)!T.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&T[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(F,a)),a=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,T=T?T.__html:void 0,P!=null&&T!==P&&(p=p||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&He("scroll",n),p||T===P||(p=[])):(p=p||[]).push(F,P))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},wm=function(n,r,a,c){a!==c&&(r.flags|=4)};function Ta(n,r){if(!Ye)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function HE(n,r,a){var c=r.pendingProps;switch(Jc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(r),null;case 1:return Qt(r.type)&&zl(),Lt(r),null;case 3:return c=r.stateNode,io(),We(Kt),We(Ot),hh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Wl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vn!==null&&(zh(Vn),Vn=null))),Nh(n,r),Lt(r),null;case 5:uh(r);var d=Qi(ya.current);if(a=r.type,n!==null&&r.stateNode!=null)Em(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Lt(r),null}if(n=Qi(Yn.current),Wl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Qn]=r,c[da]=p,n=(r.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<ua.length;d++)He(ua[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":vs(c,p),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},He("invalid",c);break;case"textarea":ws(c,p),He("invalid",c)}Bo(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var T=p[v];v==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&Fl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Fl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&He("scroll",c)}switch(a){case"input":lr(c),cl(c,p,!0);break;case"textarea":lr(c),bo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ul)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ht(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Qn]=r,n[da]=c,vm(n,r,!1,!1),r.stateNode=n;e:{switch(v=$o(a,c),a){case"dialog":He("cancel",n),He("close",n),d=c;break;case"iframe":case"object":case"embed":He("load",n),d=c;break;case"video":case"audio":for(d=0;d<ua.length;d++)He(ua[d],n);d=c;break;case"source":He("error",n),d=c;break;case"img":case"image":case"link":He("error",n),He("load",n),d=c;break;case"details":He("toggle",n),d=c;break;case"input":vs(n,c),d=Pi(n,c),He("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),He("invalid",n);break;case"textarea":ws(n,c),d=Mo(n,c),He("invalid",n);break;default:d=c}Bo(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var P=T[p];p==="style"?jo(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Fo(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Mr(n,P):typeof P=="number"&&Mr(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&He("scroll",n):P!=null&&ye(n,p,P,v))}switch(a){case"input":lr(n),cl(n,c,!1);break;case"textarea":lr(n),bo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?cr(n,!!c.multiple,p,!1):c.defaultValue!=null&&cr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ul)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Lt(r),null;case 6:if(n&&r.stateNode!=null)wm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Qi(ya.current),Qi(Yn.current),Wl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Qn]=r,(p=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Fl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qn]=r,r.stateNode=c}return Lt(r),null;case 13:if(We(Xe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&an!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Sp(),eo(),r.flags|=98560,p=!1;else if(p=Wl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Qn]=r}else eo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Lt(r),p=!1}else Vn!==null&&(zh(Vn),Vn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Xe.current&1)!==0?mt===0&&(mt=3):qh())),r.updateQueue!==null&&(r.flags|=4),Lt(r),null);case 4:return io(),Nh(n,r),n===null&&ca(r.stateNode.containerInfo),Lt(r),null;case 10:return ih(r.type._context),Lt(r),null;case 17:return Qt(r.type)&&zl(),Lt(r),null;case 19:if(We(Xe),p=r.memoizedState,p===null)return Lt(r),null;if(c=(r.flags&128)!==0,v=p.rendering,v===null)if(c)Ta(p,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Jl(n),v!==null){for(r.flags|=128,Ta(p,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $e(Xe,Xe.current&1|2),r.child}n=n.sibling}p.tail!==null&&Be()>lo&&(r.flags|=128,c=!0,Ta(p,!1),r.lanes=4194304)}else{if(!c)if(n=Jl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Ta(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Ye)return Lt(r),null}else 2*Be()-p.renderingStartTime>lo&&a!==1073741824&&(r.flags|=128,c=!0,Ta(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(a=p.last,a!==null?a.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Be(),r.sibling=null,a=Xe.current,$e(Xe,c?a&1|2:a&1),r):(Lt(r),null);case 22:case 23:return $h(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(ln&1073741824)!==0&&(Lt(r),r.subtreeFlags&6&&(r.flags|=8192)):Lt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function WE(n,r){switch(Jc(r),r.tag){case 1:return Qt(r.type)&&zl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return io(),We(Kt),We(Ot),hh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return uh(r),null;case 13:if(We(Xe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));eo()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return We(Xe),null;case 4:return io(),null;case 10:return ih(r.type._context),null;case 22:case 23:return $h(),null;case 24:return null;default:return null}}var au=!1,Mt=!1,GE=typeof WeakSet=="function"?WeakSet:Set,ie=null;function oo(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(n,r,c)}else a.current=null}function Dh(n,r,a){try{a()}catch(c){et(n,r,c)}}var Tm=!1;function KE(n,r){if($c=qr,n=ep(),Lc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,T=-1,P=-1,F=0,W=0,K=n,H=null;t:for(;;){for(var te;K!==a||d!==0&&K.nodeType!==3||(T=v+d),K!==p||c!==0&&K.nodeType!==3||(P=v+c),K.nodeType===3&&(v+=K.nodeValue.length),(te=K.firstChild)!==null;)H=K,K=te;for(;;){if(K===n)break t;if(H===a&&++F===d&&(T=v),H===p&&++W===c&&(P=v),(te=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=te}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(qc={focusedElem:n,selectionRange:a},qr=!1,ie=r;ie!==null;)if(r=ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ie=n;else for(;ie!==null;){r=ie;try{var se=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,rt=se.memoizedState,M=r.stateNode,N=M.getSnapshotBeforeUpdate(r.elementType===r.type?oe:On(r.type,oe),rt);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){et(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,ie=n;break}ie=r.return}return se=Tm,Tm=!1,se}function Ia(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Dh(r,a,p)}d=d.next}while(d!==c)}}function lu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Vh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Im(n){var r=n.alternate;r!==null&&(n.alternate=null,Im(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Qn],delete r[da],delete r[Kc],delete r[NE],delete r[DE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Sm(n){return n.tag===5||n.tag===3||n.tag===4}function Am(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Oh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Ul));else if(c!==4&&(n=n.child,n!==null))for(Oh(n,r,a),n=n.sibling;n!==null;)Oh(n,r,a),n=n.sibling}function xh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(xh(n,r,a),n=n.sibling;n!==null;)xh(n,r,a),n=n.sibling}var At=null,xn=!1;function Zr(n,r,a){for(a=a.child;a!==null;)Rm(n,r,a),a=a.sibling}function Rm(n,r,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(bi,a)}catch{}switch(a.tag){case 5:Mt||oo(a,r);case 6:var c=At,d=xn;At=null,Zr(n,r,a),At=c,xn=d,At!==null&&(xn?(n=At,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(xn?(n=At,a=a.stateNode,n.nodeType===8?Gc(n.parentNode,a):n.nodeType===1&&Gc(n,a),kn(n)):Gc(At,a.stateNode));break;case 4:c=At,d=xn,At=a.stateNode.containerInfo,xn=!0,Zr(n,r,a),At=c,xn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Dh(a,r,v),d=d.next}while(d!==c)}Zr(n,r,a);break;case 1:if(!Mt&&(oo(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){et(a,r,T)}Zr(n,r,a);break;case 21:Zr(n,r,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,Zr(n,r,a),Mt=c):Zr(n,r,a);break;default:Zr(n,r,a)}}function Cm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new GE),r.forEach(function(c){var d=rw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ln(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 5:At=T.stateNode,xn=!1;break e;case 3:At=T.stateNode.containerInfo,xn=!0;break e;case 4:At=T.stateNode.containerInfo,xn=!0;break e}T=T.return}if(At===null)throw Error(t(160));Rm(p,v,d),At=null,xn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(F){et(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Pm(r,n),r=r.sibling}function Pm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(r,n),Jn(n),c&4){try{Ia(3,n,n.return),lu(3,n)}catch(oe){et(n,n.return,oe)}try{Ia(5,n,n.return)}catch(oe){et(n,n.return,oe)}}break;case 1:Ln(r,n),Jn(n),c&512&&a!==null&&oo(a,a.return);break;case 5:if(Ln(r,n),Jn(n),c&512&&a!==null&&oo(a,a.return),n.flags&32){var d=n.stateNode;try{Mr(d,"")}catch(oe){et(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,T=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&xo(d,p),$o(T,v);var F=$o(T,p);for(v=0;v<P.length;v+=2){var W=P[v],K=P[v+1];W==="style"?jo(d,K):W==="dangerouslySetInnerHTML"?Fo(d,K):W==="children"?Mr(d,K):ye(d,W,K,F)}switch(T){case"input":Lo(d,p);break;case"textarea":Ts(d,p);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?cr(d,!!p.multiple,te,!1):H!==!!p.multiple&&(p.defaultValue!=null?cr(d,!!p.multiple,p.defaultValue,!0):cr(d,!!p.multiple,p.multiple?[]:"",!1))}d[da]=p}catch(oe){et(n,n.return,oe)}}break;case 6:if(Ln(r,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(oe){et(n,n.return,oe)}}break;case 3:if(Ln(r,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{kn(r.containerInfo)}catch(oe){et(n,n.return,oe)}break;case 4:Ln(r,n),Jn(n);break;case 13:Ln(r,n),Jn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(bh=Be())),c&4&&Cm(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(F=Mt)||W,Ln(r,n),Mt=F):Ln(r,n),Jn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!W&&(n.mode&1)!==0)for(ie=n,W=n.child;W!==null;){for(K=ie=W;ie!==null;){switch(H=ie,te=H.child,H.tag){case 0:case 11:case 14:case 15:Ia(4,H,H.return);break;case 1:oo(H,H.return);var se=H.stateNode;if(typeof se.componentWillUnmount=="function"){c=H,a=H.return;try{r=c,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(oe){et(c,a,oe)}}break;case 5:oo(H,H.return);break;case 22:if(H.memoizedState!==null){Dm(K);continue}}te!==null?(te.return=H,ie=te):Dm(K)}W=W.sibling}e:for(W=null,K=n;;){if(K.tag===5){if(W===null){W=K;try{d=K.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=K.stateNode,P=K.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,T.style.display=Uo("display",v))}catch(oe){et(n,n.return,oe)}}}else if(K.tag===6){if(W===null)try{K.stateNode.nodeValue=F?"":K.memoizedProps}catch(oe){et(n,n.return,oe)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;W===K&&(W=null),K=K.return}W===K&&(W=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Ln(r,n),Jn(n),c&4&&Cm(n);break;case 21:break;default:Ln(r,n),Jn(n)}}function Jn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Sm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Mr(d,""),c.flags&=-33);var p=Am(n);xh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=Am(n);Oh(n,T,v);break;default:throw Error(t(161))}}catch(P){et(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function QE(n,r,a){ie=n,km(n)}function km(n,r,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||au;if(!v){var T=d.alternate,P=T!==null&&T.memoizedState!==null||Mt;T=au;var F=Mt;if(au=v,(Mt=P)&&!F)for(ie=d;ie!==null;)v=ie,P=v.child,v.tag===22&&v.memoizedState!==null?Vm(d):P!==null?(P.return=v,ie=P):Vm(d);for(;p!==null;)ie=p,km(p),p=p.sibling;ie=d,au=T,Mt=F}Nm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ie=p):Nm(n)}}function Nm(n){for(;ie!==null;){var r=ie;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Mt||lu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:On(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Dp(r,p,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Dp(r,v,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var W=F.memoizedState;if(W!==null){var K=W.dehydrated;K!==null&&kn(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||r.flags&512&&Vh(r)}catch(H){et(r,r.return,H)}}if(r===n){ie=null;break}if(a=r.sibling,a!==null){a.return=r.return,ie=a;break}ie=r.return}}function Dm(n){for(;ie!==null;){var r=ie;if(r===n){ie=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ie=a;break}ie=r.return}}function Vm(n){for(;ie!==null;){var r=ie;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{lu(4,r)}catch(P){et(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){et(r,d,P)}}var p=r.return;try{Vh(r)}catch(P){et(r,p,P)}break;case 5:var v=r.return;try{Vh(r)}catch(P){et(r,v,P)}}}catch(P){et(r,r.return,P)}if(r===n){ie=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ie=T;break}ie=r.return}}var YE=Math.ceil,uu=we.ReactCurrentDispatcher,Lh=we.ReactCurrentOwner,yn=we.ReactCurrentBatchConfig,Oe=0,Et=null,at=null,Rt=0,ln=0,ao=Kr(0),mt=0,Sa=null,Xi=0,cu=0,Mh=0,Aa=null,Xt=null,bh=0,lo=1/0,Ar=null,hu=!1,Fh=null,ei=null,du=!1,ti=null,fu=0,Ra=0,Uh=null,pu=-1,mu=0;function Ht(){return(Oe&6)!==0?Be():pu!==-1?pu:pu=Be()}function ni(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Rt!==0?Rt&-Rt:OE.transition!==null?(mu===0&&(mu=Ui()),mu):(n=ke,n!==0||(n=window.event,n=n===void 0?16:ea(n.type)),n)}function Mn(n,r,a,c){if(50<Ra)throw Ra=0,Uh=null,Error(t(185));jr(n,a,c),((Oe&2)===0||n!==Et)&&(n===Et&&((Oe&2)===0&&(cu|=a),mt===4&&ri(n,Rt)),Jt(n,c),a===1&&Oe===0&&(r.mode&1)===0&&(lo=Be()+500,$l&&Yr()))}function Jt(n,r){var a=n.callbackNode;fr(n,r);var c=Fi(n,n===Et?Rt:0);if(c===0)a!==null&&Qo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Qo(a),r===1)n.tag===0?VE(xm.bind(null,n)):vp(xm.bind(null,n)),PE(function(){(Oe&6)===0&&Yr()}),a=null;else{switch(Br(c)){case 1:a=Mi;break;case 4:a=br;break;case 16:a=cn;break;case 536870912:a=ml;break;default:a=cn}a=Bm(a,Om.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Om(n,r){if(pu=-1,mu=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(uo()&&n.callbackNode!==a)return null;var c=Fi(n,n===Et?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=gu(n,c);else{r=c;var d=Oe;Oe|=2;var p=Mm();(Et!==n||Rt!==r)&&(Ar=null,lo=Be()+500,Zi(n,r));do try{ZE();break}catch(T){Lm(n,T)}while(!0);rh(),uu.current=p,Oe=d,at!==null?r=0:(Et=null,Rt=0,r=mt)}if(r!==0){if(r===2&&(d=nn(n),d!==0&&(c=d,r=jh(n,d))),r===1)throw a=Sa,Zi(n,0),ri(n,c),Jt(n,Be()),a;if(r===6)ri(n,c);else{if(d=n.current.alternate,(c&30)===0&&!XE(d)&&(r=gu(n,c),r===2&&(p=nn(n),p!==0&&(c=p,r=jh(n,p))),r===1))throw a=Sa,Zi(n,0),ri(n,c),Jt(n,Be()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:es(n,Xt,Ar);break;case 3:if(ri(n,c),(c&130023424)===c&&(r=bh+500-Be(),10<r)){if(Fi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Wc(es.bind(null,n,Xt,Ar),r);break}es(n,Xt,Ar);break;case 4:if(ri(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-Bt(c);p=1<<v,v=r[v],v>d&&(d=v),c&=~p}if(c=d,c=Be()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*YE(c/1960))-c,10<c){n.timeoutHandle=Wc(es.bind(null,n,Xt,Ar),c);break}es(n,Xt,Ar);break;case 5:es(n,Xt,Ar);break;default:throw Error(t(329))}}}return Jt(n,Be()),n.callbackNode===a?Om.bind(null,n):null}function jh(n,r){var a=Aa;return n.current.memoizedState.isDehydrated&&(Zi(n,r).flags|=256),n=gu(n,r),n!==2&&(r=Xt,Xt=a,r!==null&&zh(r)),n}function zh(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function XE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Dn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ri(n,r){for(r&=~Mh,r&=~cu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Bt(r),c=1<<a;n[a]=-1,r&=~c}}function xm(n){if((Oe&6)!==0)throw Error(t(327));uo();var r=Fi(n,0);if((r&1)===0)return Jt(n,Be()),null;var a=gu(n,r);if(n.tag!==0&&a===2){var c=nn(n);c!==0&&(r=c,a=jh(n,c))}if(a===1)throw a=Sa,Zi(n,0),ri(n,r),Jt(n,Be()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,es(n,Xt,Ar),Jt(n,Be()),null}function Bh(n,r){var a=Oe;Oe|=1;try{return n(r)}finally{Oe=a,Oe===0&&(lo=Be()+500,$l&&Yr())}}function Ji(n){ti!==null&&ti.tag===0&&(Oe&6)===0&&uo();var r=Oe;Oe|=1;var a=yn.transition,c=ke;try{if(yn.transition=null,ke=1,n)return n()}finally{ke=c,yn.transition=a,Oe=r,(Oe&6)===0&&Yr()}}function $h(){ln=ao.current,We(ao)}function Zi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,CE(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(Jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&zl();break;case 3:io(),We(Kt),We(Ot),hh();break;case 5:uh(c);break;case 4:io();break;case 13:We(Xe);break;case 19:We(Xe);break;case 10:ih(c.type._context);break;case 22:case 23:$h()}a=a.return}if(Et=n,at=n=ii(n.current,null),Rt=ln=r,mt=0,Sa=null,Mh=cu=Xi=0,Xt=Aa=null,Ki!==null){for(r=0;r<Ki.length;r++)if(a=Ki[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}Ki=null}return n}function Lm(n,r){do{var a=at;try{if(rh(),Zl.current=ru,eu){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}eu=!1}if(Yi=0,vt=pt=Je=null,_a=!1,va=0,Lh.current=null,a===null||a.return===null){mt=1,Sa=r,at=null;break}e:{var p=n,v=a.return,T=a,P=r;if(r=Rt,T.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,W=T,K=W.tag;if((W.mode&1)===0&&(K===0||K===11||K===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var te=om(v);if(te!==null){te.flags&=-257,am(te,v,T,p,r),te.mode&1&&sm(p,F,r),r=te,P=F;var se=r.updateQueue;if(se===null){var oe=new Set;oe.add(P),r.updateQueue=oe}else se.add(P);break e}else{if((r&1)===0){sm(p,F,r),qh();break e}P=Error(t(426))}}else if(Ye&&T.mode&1){var rt=om(v);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),am(rt,v,T,p,r),th(so(P,T));break e}}p=P=so(P,T),mt!==4&&(mt=2),Aa===null?Aa=[p]:Aa.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=rm(p,P,r);Np(p,M);break e;case 1:T=P;var N=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ei===null||!ei.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var Y=im(p,T,r);Np(p,Y);break e}}p=p.return}while(p!==null)}Fm(a)}catch(ae){r=ae,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function Mm(){var n=uu.current;return uu.current=ru,n===null?ru:n}function qh(){(mt===0||mt===3||mt===2)&&(mt=4),Et===null||(Xi&268435455)===0&&(cu&268435455)===0||ri(Et,Rt)}function gu(n,r){var a=Oe;Oe|=2;var c=Mm();(Et!==n||Rt!==r)&&(Ar=null,Zi(n,r));do try{JE();break}catch(d){Lm(n,d)}while(!0);if(rh(),Oe=a,uu.current=c,at!==null)throw Error(t(261));return Et=null,Rt=0,mt}function JE(){for(;at!==null;)bm(at)}function ZE(){for(;at!==null&&!fl();)bm(at)}function bm(n){var r=zm(n.alternate,n,ln);n.memoizedProps=n.pendingProps,r===null?Fm(n):at=r,Lh.current=null}function Fm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=HE(a,r,ln),a!==null){at=a;return}}else{if(a=WE(a,r),a!==null){a.flags&=32767,at=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,at=null;return}}if(r=r.sibling,r!==null){at=r;return}at=r=n}while(r!==null);mt===0&&(mt=5)}function es(n,r,a){var c=ke,d=yn.transition;try{yn.transition=null,ke=1,ew(n,r,a,c)}finally{yn.transition=d,ke=c}return null}function ew(n,r,a,c){do uo();while(ti!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(je(n,p),n===Et&&(at=Et=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||du||(du=!0,Bm(cn,function(){return uo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=yn.transition,yn.transition=null;var v=ke;ke=1;var T=Oe;Oe|=4,Lh.current=null,KE(n,a),Pm(a,n),EE(qc),qr=!!$c,qc=$c=null,n.current=a,QE(a),Cc(),Oe=T,ke=v,yn.transition=p}else n.current=a;if(du&&(du=!1,ti=n,fu=d),p=n.pendingLanes,p===0&&(ei=null),gl(a.stateNode),Jt(n,Be()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(hu)throw hu=!1,n=Fh,Fh=null,n;return(fu&1)!==0&&n.tag!==0&&uo(),p=n.pendingLanes,(p&1)!==0?n===Uh?Ra++:(Ra=0,Uh=n):Ra=0,Yr(),null}function uo(){if(ti!==null){var n=Br(fu),r=yn.transition,a=ke;try{if(yn.transition=null,ke=16>n?16:n,ti===null)var c=!1;else{if(n=ti,ti=null,fu=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,ie=n.current;ie!==null;){var p=ie,v=p.child;if((ie.flags&16)!==0){var T=p.deletions;if(T!==null){for(var P=0;P<T.length;P++){var F=T[P];for(ie=F;ie!==null;){var W=ie;switch(W.tag){case 0:case 11:case 15:Ia(8,W,p)}var K=W.child;if(K!==null)K.return=W,ie=K;else for(;ie!==null;){W=ie;var H=W.sibling,te=W.return;if(Im(W),W===F){ie=null;break}if(H!==null){H.return=te,ie=H;break}ie=te}}}var se=p.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var rt=oe.sibling;oe.sibling=null,oe=rt}while(oe!==null)}}ie=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,ie=v;else e:for(;ie!==null;){if(p=ie,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ia(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ie=M;break e}ie=p.return}}var N=n.current;for(ie=N;ie!==null;){v=ie;var b=v.child;if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,ie=b;else e:for(v=N;ie!==null;){if(T=ie,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:lu(9,T)}}catch(ae){et(T,T.return,ae)}if(T===v){ie=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,ie=Y;break e}ie=T.return}}if(Oe=d,Yr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(bi,n)}catch{}c=!0}return c}finally{ke=a,yn.transition=r}}return!1}function Um(n,r,a){r=so(a,r),r=rm(n,r,1),n=Jr(n,r,1),r=Ht(),n!==null&&(jr(n,1,r),Jt(n,r))}function et(n,r,a){if(n.tag===3)Um(n,n,a);else for(;r!==null;){if(r.tag===3){Um(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ei===null||!ei.has(c))){n=so(a,n),n=im(r,n,1),r=Jr(r,n,1),n=Ht(),r!==null&&(jr(r,1,n),Jt(r,n));break}}r=r.return}}function tw(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Ht(),n.pingedLanes|=n.suspendedLanes&a,Et===n&&(Rt&a)===a&&(mt===4||mt===3&&(Rt&130023424)===Rt&&500>Be()-bh?Zi(n,0):Mh|=a),Jt(n,r)}function jm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Vs,Vs<<=1,(Vs&130023424)===0&&(Vs=4194304)));var a=Ht();n=Tr(n,r),n!==null&&(jr(n,r,a),Jt(n,a))}function nw(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),jm(n,a)}function rw(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),jm(n,a)}var zm;zm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Kt.current)Yt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Yt=!1,qE(n,r,a);Yt=(n.flags&131072)!==0}else Yt=!1,Ye&&(r.flags&1048576)!==0&&Ep(r,Hl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;ou(n,r),n=r.pendingProps;var d=Xs(r,Ot.current);ro(r,a),d=ph(null,r,c,n,d,a);var p=mh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Qt(c)?(p=!0,Bl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ah(r),d.updater=iu,r.stateNode=d,d._reactInternals=r,wh(r,c,n,a),r=Ah(null,r,c,!0,p,a)):(r.tag=0,Ye&&p&&Xc(r),qt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(ou(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=sw(c),n=On(c,n),d){case 0:r=Sh(null,r,c,n,a);break e;case 1:r=fm(null,r,c,n,a);break e;case 11:r=lm(null,r,c,n,a);break e;case 14:r=um(null,r,c,On(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),Sh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),fm(n,r,c,d,a);case 3:e:{if(pm(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,kp(n,r),Xl(r,c,null,a);var v=r.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=so(Error(t(423)),r),r=mm(n,r,c,a,d);break e}else if(c!==d){d=so(Error(t(424)),r),r=mm(n,r,c,a,d);break e}else for(an=Gr(r.stateNode.containerInfo.firstChild),on=r,Ye=!0,Vn=null,a=Cp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(eo(),c===d){r=Sr(n,r,a);break e}qt(n,r,c,a)}r=r.child}return r;case 5:return Vp(r),n===null&&eh(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,Hc(c,d)?v=null:p!==null&&Hc(c,p)&&(r.flags|=32),dm(n,r),qt(n,r,v,a),r.child;case 6:return n===null&&eh(r),null;case 13:return gm(n,r,a);case 4:return lh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=to(r,null,c,a):qt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),lm(n,r,c,d,a);case 7:return qt(n,r,r.pendingProps,a),r.child;case 8:return qt(n,r,r.pendingProps.children,a),r.child;case 12:return qt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,v=d.value,$e(Kl,c._currentValue),c._currentValue=v,p!==null)if(Dn(p.value,v)){if(p.children===d.children&&!Kt.current){r=Sr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){v=p.child;for(var P=T.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=Ir(-1,a&-a),P.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var W=F.pending;W===null?P.next=P:(P.next=W.next,W.next=P),F.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),sh(p.return,a,r),T.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),sh(v,a,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}qt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,ro(r,a),d=mn(d),c=c(d),r.flags|=1,qt(n,r,c,a),r.child;case 14:return c=r.type,d=On(c,r.pendingProps),d=On(c.type,d),um(n,r,c,d,a);case 15:return cm(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),ou(n,r),r.tag=1,Qt(c)?(n=!0,Bl(r)):n=!1,ro(r,a),tm(r,c,d),wh(r,c,d,a),Ah(null,r,c,!0,n,a);case 19:return _m(n,r,a);case 22:return hm(n,r,a)}throw Error(t(156,r.tag))};function Bm(n,r){return Ns(n,r)}function iw(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,r,a,c){return new iw(n,r,a,c)}function Hh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function sw(n){if(typeof n=="function")return Hh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===Dt)return 14}return 2}function ii(n,r){var a=n.alternate;return a===null?(a=_n(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yu(n,r,a,c,d,p){var v=2;if(c=n,typeof n=="function")Hh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case D:return ts(a.children,d,p,r);case I:v=8,d|=8;break;case R:return n=_n(12,a,r,d|2),n.elementType=R,n.lanes=p,n;case A:return n=_n(13,a,r,d),n.elementType=A,n.lanes=p,n;case tt:return n=_n(19,a,r,d),n.elementType=tt,n.lanes=p,n;case Ue:return _u(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:v=10;break e;case V:v=9;break e;case x:v=11;break e;case Dt:v=14;break e;case Vt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_n(v,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function ts(n,r,a,c){return n=_n(7,n,c,r),n.lanes=a,n}function _u(n,r,a,c){return n=_n(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Wh(n,r,a){return n=_n(6,n,null,r),n.lanes=a,n}function Gh(n,r,a){return r=_n(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function ow(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ur(0),this.expirationTimes=Ur(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ur(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Kh(n,r,a,c,d,p,v,T,P){return n=new ow(n,r,a,T,P),r===1?(r=1,p===!0&&(r|=8)):r=0,p=_n(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ah(p),n}function aw(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function $m(n){if(!n)return Qr;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Qt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return yp(n,a,r)}return r}function qm(n,r,a,c,d,p,v,T,P){return n=Kh(a,c,!0,n,d,p,v,T,P),n.context=$m(null),a=n.current,c=Ht(),d=ni(a),p=Ir(c,d),p.callback=r??null,Jr(a,p,d),n.current.lanes=d,jr(n,d,c),Jt(n,c),n}function vu(n,r,a,c){var d=r.current,p=Ht(),v=ni(d);return a=$m(a),r.context===null?r.context=a:r.pendingContext=a,r=Ir(p,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Jr(d,r,v),n!==null&&(Mn(n,d,v,p),Yl(n,d,v)),v}function Eu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Qh(n,r){Hm(n,r),(n=n.alternate)&&Hm(n,r)}function lw(){return null}var Wm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yh(n){this._internalRoot=n}wu.prototype.render=Yh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));vu(n,r,null,null)},wu.prototype.unmount=Yh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ji(function(){vu(null,n,null,null)}),r[_r]=null}};function wu(n){this._internalRoot=n}wu.prototype.unstable_scheduleHydration=function(n){if(n){var r=wl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Hn.length&&r!==0&&r<Hn[a].priority;a++);Hn.splice(a,0,n),a===0&&Sl(n)}};function Xh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function uw(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=Eu(v);p.call(F)}}var v=qm(r,c,n,0,null,!1,!1,"",Gm);return n._reactRootContainer=v,n[_r]=v.current,ca(n.nodeType===8?n.parentNode:n),Ji(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=Eu(P);T.call(F)}}var P=Kh(n,0,!1,null,null,!1,!1,"",Gm);return n._reactRootContainer=P,n[_r]=P.current,ca(n.nodeType===8?n.parentNode:n),Ji(function(){vu(r,P,a,c)}),P}function Iu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var T=d;d=function(){var P=Eu(v);T.call(P)}}vu(r,v,n,d)}else v=uw(a,r,n,d,c);return Eu(v)}vl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Fr(r.pendingLanes);a!==0&&(zr(r,a|1),Jt(r,Be()),(Oe&6)===0&&(lo=Be()+500,Yr()))}break;case 13:Ji(function(){var c=Tr(n,1);if(c!==null){var d=Ht();Mn(c,n,1,d)}}),Qh(n,1)}},Os=function(n){if(n.tag===13){var r=Tr(n,134217728);if(r!==null){var a=Ht();Mn(r,n,134217728,a)}Qh(n,134217728)}},El=function(n){if(n.tag===13){var r=ni(n),a=Tr(n,r);if(a!==null){var c=Ht();Mn(a,n,r,c)}Qh(n,r)}},wl=function(){return ke},Tl=function(n,r){var a=ke;try{return ke=n,r()}finally{ke=a}},Ss=function(n,r,a){switch(r){case"input":if(Lo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=jl(c);if(!d)throw Error(t(90));_s(c),Lo(c,d)}}}break;case"textarea":Ts(n,a);break;case"select":r=a.value,r!=null&&cr(n,!!a.multiple,r,!1)}},Vi=Bh,Ho=Ji;var cw={usingClientEntryPoint:!1,Events:[fa,Qs,jl,$n,qo,Bh]},Ca={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hw={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ko(n),n===null?null:n.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{bi=Su.inject(hw),tn=Su}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cw,Zt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(r))throw Error(t(200));return aw(n,r,null,a)},Zt.createRoot=function(n,r){if(!Xh(n))throw Error(t(299));var a=!1,c="",d=Wm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Kh(n,1,!1,null,null,a,!1,c,d),n[_r]=r.current,ca(n.nodeType===8?n.parentNode:n),new Yh(r)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ko(r),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return Ji(n)},Zt.hydrate=function(n,r,a){if(!Tu(r))throw Error(t(200));return Iu(null,n,r,!0,a)},Zt.hydrateRoot=function(n,r,a){if(!Xh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=Wm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=qm(r,null,n,1,a??null,d,!1,p,v),n[_r]=r.current,ca(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new wu(r)},Zt.render=function(n,r,a){if(!Tu(r))throw Error(t(200));return Iu(null,n,r,!1,a)},Zt.unmountComponentAtNode=function(n){if(!Tu(n))throw Error(t(40));return n._reactRootContainer?(Ji(function(){Iu(null,null,n,!1,function(){n._reactRootContainer=null,n[_r]=null})}),!0):!1},Zt.unstable_batchedUpdates=Bh,Zt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Tu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Iu(n,r,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var Vy;function LR(){if(Vy)return hd.exports;Vy=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),hd.exports=xR(),hd.exports}var Oy;function MR(){if(Oy)return Du;Oy=1;var i=LR();return Du.createRoot=i.createRoot,Du.hydrateRoot=i.hydrateRoot,Du}var bR=MR();function FR({onStart:i}){return Z.jsxs("main",{className:"page",children:[Z.jsxs("section",{className:"hero",children:[Z.jsx("p",{className:"badge",children:"AI Workout Accountability"}),Z.jsx("h1",{children:"Your AI coach that helps you actually work out."}),Z.jsx("p",{className:"subtitle",children:"CoachPulse combines simple workouts, streak tracking, daily check-ins, and supportive AI coaching to help you stay consistent."}),Z.jsx("button",{className:"primary",onClick:i,children:"Start Free Beta"})]}),Z.jsxs("section",{className:"cards",children:[Z.jsxs("div",{className:"card",children:[Z.jsx("h2",{children:"Daily check-ins"}),Z.jsx("p",{children:"Tell CoachPulse whether you completed, partly completed, or missed your workout."})]}),Z.jsxs("div",{className:"card",children:[Z.jsx("h2",{children:"Streak tracking"}),Z.jsx("p",{children:"Build consistency with a simple streak and monthly progress view."})]}),Z.jsxs("div",{className:"card",children:[Z.jsx("h2",{children:"AI accountability"}),Z.jsx("p",{children:"Get supportive coaching when you feel tired, busy, or unmotivated."})]})]})]})}function UR({onSubmit:i}){const[e,t]=kt.useState("");async function s(o){t(o);try{console.log("🔥 Click:",o);const u=Si.currentUser;if(!u){console.log("❌ NO USER LOGGED IN");return}const h=new Date().toISOString().split("T")[0],m=kf(Ja,"users",u.uid,"workouts",h);await CR(m,{status:o,date:h,createdAt:lE()}),console.log("✅ SAVED REAL WORKOUT TO FIRESTORE"),i&&i(o)}catch(u){console.error("❌ Firestore error:",u)}}return Z.jsxs("section",{className:"panel",children:[Z.jsx("h2",{children:"Today's workout"}),Z.jsxs("div",{className:"button-row",children:[Z.jsx("button",{onClick:()=>s("completed"),children:"Completed"}),Z.jsx("button",{onClick:()=>s("partial"),children:"Partly done"}),Z.jsx("button",{onClick:()=>s("missed"),children:"Missed"})]})]})}function jR({streak:i,completedWorkouts:e}){const[t,s]=kt.useState([]),[o,u]=kt.useState(""),[h,m]=kt.useState(!1);kt.useEffect(()=>{const w=Si.currentUser;if(!w)return;const S=jd(Ja,"users",w.uid,"coachMessages"),C=wR(S,TR("createdAt","asc")),j=kR(C,G=>{const Q=G.docs.map(B=>({id:B.id,...B.data()}));s(Q)});return()=>j()},[]);async function g(w,S){const C=Si.currentUser;C&&await PR(jd(Ja,"users",C.uid,"coachMessages"),{role:w,text:S,createdAt:lE()})}async function _(){if(!o.trim())return;const w=o.trim();u(""),m(!0),await g("user",w);try{const C=await(await fetch("/api/coach",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:w,streak:i,workouts:e})})).json();await g("coach",C.message||"I’m here with you. Let’s keep going.")}catch{await g("coach","Sorry, I couldn’t connect to your coach right now.")}finally{m(!1)}}return Z.jsxs("section",{className:"panel",children:[Z.jsx("h2",{children:"AI Coach"}),Z.jsxs("div",{className:"chat",children:[t.length===0&&Z.jsx("div",{className:"bubble coach",children:"Hi, I’m your CoachPulse AI coach. Tell me how your workout went today."}),t.map(w=>Z.jsx("div",{className:`bubble ${w.role}`,children:w.text},w.id)),h&&Z.jsx("div",{className:"bubble coach",children:"Thinking..."})]}),Z.jsxs("div",{className:"chat-input",children:[Z.jsx("input",{value:o,placeholder:"Ask your coach...",onChange:w=>u(w.target.value),onKeyDown:w=>w.key==="Enter"&&_()}),Z.jsx("button",{onClick:_,children:"Send"})]})]})}function zR({user:i,onLogout:e}){const[t,s]=kt.useState(0),[o,u]=kt.useState(0),[h,m]=kt.useState(null);async function g(){const w=Si.currentUser;if(!w)return;const S=new Date().toISOString().split("T")[0],C=kf(Ja,"users",w.uid,"workouts",S),j=await AR(C);j.exists()?m(j.data()):m(null);const G=jd(Ja,"users",w.uid,"workouts"),Q=await RR(G);let B=0;Q.forEach(ge=>{ge.data().status==="completed"&&(B+=1)}),u(B),s(B)}function _(w){g()}return kt.useEffect(()=>{g()},[]),Z.jsxs("main",{className:"page",children:[Z.jsxs("header",{className:"topbar",children:[Z.jsxs("div",{children:[Z.jsx("p",{className:"badge",children:"Beta MVP"}),Z.jsx("h1",{children:"Welcome back"}),Z.jsx("p",{children:i==null?void 0:i.email})]}),Z.jsx("button",{className:"ghost",onClick:e,children:"Log out"})]}),h?Z.jsxs("div",{className:"panel",children:[Z.jsx("h3",{children:"Today's Status:"}),Z.jsx("p",{children:h.status})]}):Z.jsx("div",{className:"panel",children:Z.jsx("h3",{children:"No workout logged today"})}),Z.jsxs("section",{className:"stats",children:[Z.jsxs("div",{className:"stat",children:[Z.jsx("span",{children:"🔥"}),Z.jsx("h2",{children:t}),Z.jsx("p",{children:"Completed workouts"})]}),Z.jsxs("div",{className:"stat",children:[Z.jsx("span",{children:"💪"}),Z.jsx("h2",{children:o}),Z.jsx("p",{children:"Total completed"})]}),Z.jsxs("div",{className:"stat",children:[Z.jsx("span",{children:"🎯"}),Z.jsx("h2",{children:"Get Fit"}),Z.jsx("p",{children:"Current goal"})]})]}),Z.jsxs("section",{className:"layout",children:[Z.jsx(UR,{onSubmit:_}),Z.jsx(jR,{streak:t,completedWorkouts:o})]})]})}function BR({onLogin:i}){const[e,t]=kt.useState(""),[s,o]=kt.useState(""),[u,h]=kt.useState(!0),[m,g]=kt.useState("");async function _(){g("");try{let w;u?w=await J0(Si,e,s):w=await X0(Si,e,s),i(w.user.email)}catch(w){g(w.message)}}return Z.jsx("main",{className:"page narrow",children:Z.jsxs("section",{className:"panel",children:[Z.jsx("h1",{children:u?"Login":"Create Account"}),Z.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:w=>t(w.target.value)}),Z.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:w=>o(w.target.value)}),m&&Z.jsx("p",{style:{color:"red"},children:m}),Z.jsx("button",{className:"primary full",onClick:_,children:u?"Login":"Sign Up"}),Z.jsx("p",{style:{cursor:"pointer",marginTop:10},onClick:()=>h(!u),children:u?"Don't have an account? Sign up":"Already have an account? Login"})]})})}function $R(){const[i,e]=kt.useState("landing"),[t,s]=kt.useState(null);return kt.useEffect(()=>{const o=nI(Si,u=>{u&&(s({email:u.email}),e("dashboard"))});return()=>o()},[]),i==="login"?Z.jsx(BR,{onLogin:o=>{s({email:o}),e("dashboard")}}):i==="dashboard"?Z.jsx(zR,{user:t,onLogout:()=>{s(null),e("landing")}}):Z.jsx(FR,{onStart:()=>e("login")})}bR.createRoot(document.getElementById("root")).render(Z.jsx(DR.StrictMode,{children:Z.jsx($R,{})}));
