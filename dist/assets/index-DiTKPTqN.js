(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function mw(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Zh={exports:{}},ka={},ed={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function gw(){if(Km)return Re;Km=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,K={};function B(O,q,le){this.props=O,this.context=q,this.refs=K,this.updater=le||U}B.prototype.isReactComponent={},B.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function he(){}he.prototype=B.prototype;function ce(O,q,le){this.props=O,this.context=q,this.refs=K,this.updater=le||U}var me=ce.prototype=new he;me.constructor=ce,G(me,B.prototype),me.isPureReactComponent=!0;var we=Array.isArray,je=Object.prototype.hasOwnProperty,Te={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(O,q,le){var Ie,Ae={},Ne=null,Le=null;if(q!=null)for(Ie in q.ref!==void 0&&(Le=q.ref),q.key!==void 0&&(Ne=""+q.key),q)je.call(q,Ie)&&!D.hasOwnProperty(Ie)&&(Ae[Ie]=q[Ie]);var Me=arguments.length-2;if(Me===1)Ae.children=le;else if(1<Me){for(var Be=Array(Me),_t=0;_t<Me;_t++)Be[_t]=arguments[_t+2];Ae.children=Be}if(O&&O.defaultProps)for(Ie in Me=O.defaultProps,Me)Ae[Ie]===void 0&&(Ae[Ie]=Me[Ie]);return{$$typeof:i,type:O,key:Ne,ref:Le,props:Ae,_owner:Te.current}}function R(O,q){return{$$typeof:i,type:O.type,key:q,ref:O.ref,props:O.props,_owner:O._owner}}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function V(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(le){return q[le]})}var x=/\/+/g;function A(O,q){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):q.toString(36)}function tt(O,q,le,Ie,Ae){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var Le=!1;if(O===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(O.$$typeof){case i:case e:Le=!0}}if(Le)return Le=O,Ae=Ae(Le),O=Ie===""?"."+A(Le,0):Ie,we(Ae)?(le="",O!=null&&(le=O.replace(x,"$&/")+"/"),tt(Ae,q,le,"",function(_t){return _t})):Ae!=null&&(k(Ae)&&(Ae=R(Ae,le+(!Ae.key||Le&&Le.key===Ae.key?"":(""+Ae.key).replace(x,"$&/")+"/")+O)),q.push(Ae)),1;if(Le=0,Ie=Ie===""?".":Ie+":",we(O))for(var Me=0;Me<O.length;Me++){Ne=O[Me];var Be=Ie+A(Ne,Me);Le+=tt(Ne,q,le,Be,Ae)}else if(Be=C(O),typeof Be=="function")for(O=Be.call(O),Me=0;!(Ne=O.next()).done;)Ne=Ne.value,Be=Ie+A(Ne,Me++),Le+=tt(Ne,q,le,Be,Ae);else if(Ne==="object")throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Le}function Dt(O,q,le){if(O==null)return O;var Ie=[],Ae=0;return tt(O,Ie,"","",function(Ne){return q.call(le,Ne,Ae++)}),Ie}function Vt(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(le){(O._status===0||O._status===-1)&&(O._status=1,O._result=le)},function(le){(O._status===0||O._status===-1)&&(O._status=2,O._result=le)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var Ue={current:null},J={transition:null},de={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:J,ReactCurrentOwner:Te};function re(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Dt,forEach:function(O,q,le){Dt(O,function(){q.apply(this,arguments)},le)},count:function(O){var q=0;return Dt(O,function(){q++}),q},toArray:function(O){return Dt(O,function(q){return q})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=B,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=ce,Re.StrictMode=s,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Re.act=re,Re.cloneElement=function(O,q,le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ie=G({},O.props),Ae=O.key,Ne=O.ref,Le=O._owner;if(q!=null){if(q.ref!==void 0&&(Ne=q.ref,Le=Te.current),q.key!==void 0&&(Ae=""+q.key),O.type&&O.type.defaultProps)var Me=O.type.defaultProps;for(Be in q)je.call(q,Be)&&!D.hasOwnProperty(Be)&&(Ie[Be]=q[Be]===void 0&&Me!==void 0?Me[Be]:q[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=le;else if(1<Be){Me=Array(Be);for(var _t=0;_t<Be;_t++)Me[_t]=arguments[_t+2];Ie.children=Me}return{$$typeof:i,type:O.type,key:Ae,ref:Ne,props:Ie,_owner:Le}},Re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Re.createElement=S,Re.createFactory=function(O){var q=S.bind(null,O);return q.type=O,q},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:m,render:O}},Re.isValidElement=k,Re.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Vt}},Re.memo=function(O,q){return{$$typeof:_,type:O,compare:q===void 0?null:q}},Re.startTransition=function(O){var q=J.transition;J.transition={};try{O()}finally{J.transition=q}},Re.unstable_act=re,Re.useCallback=function(O,q){return Ue.current.useCallback(O,q)},Re.useContext=function(O){return Ue.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return Ue.current.useDeferredValue(O)},Re.useEffect=function(O,q){return Ue.current.useEffect(O,q)},Re.useId=function(){return Ue.current.useId()},Re.useImperativeHandle=function(O,q,le){return Ue.current.useImperativeHandle(O,q,le)},Re.useInsertionEffect=function(O,q){return Ue.current.useInsertionEffect(O,q)},Re.useLayoutEffect=function(O,q){return Ue.current.useLayoutEffect(O,q)},Re.useMemo=function(O,q){return Ue.current.useMemo(O,q)},Re.useReducer=function(O,q,le){return Ue.current.useReducer(O,q,le)},Re.useRef=function(O){return Ue.current.useRef(O)},Re.useState=function(O){return Ue.current.useState(O)},Re.useSyncExternalStore=function(O,q,le){return Ue.current.useSyncExternalStore(O,q,le)},Re.useTransition=function(){return Ue.current.useTransition()},Re.version="18.3.1",Re}var Qm;function Bd(){return Qm||(Qm=1,ed.exports=gw()),ed.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function yw(){if(Ym)return ka;Ym=1;var i=Bd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,T={},C=null,U=null;_!==void 0&&(C=""+_),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(U=g.ref);for(w in g)s.call(g,w)&&!l.hasOwnProperty(w)&&(T[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:m,key:C,ref:U,props:T,_owner:o.current}}return ka.Fragment=t,ka.jsx=h,ka.jsxs=h,ka}var Xm;function _w(){return Xm||(Xm=1,Zh.exports=yw()),Zh.exports}var Z=_w();const vw=()=>{};var Jm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Ew=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=i[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},My={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const l=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,_=g?i[o+2]:0,w=l>>2,T=(l&3)<<4|m>>4;let C=(m&15)<<2|_>>6,U=_&63;g||(U=64,h||(C=64)),s.push(t[w],t[T],t[C],t[U])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ly(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Ew(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const l=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const T=o<i.length?t[i.charAt(o)]:64;if(++o,l==null||m==null||_==null||T==null)throw new ww;const C=l<<2|m>>4;if(s.push(C),_!==64){const U=m<<4&240|_>>2;if(s.push(U),T!==64){const G=_<<6&192|T;s.push(G)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class ww extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tw=function(i){const e=Ly(i);return My.encodeByteArray(e,!0)},$u=function(i){return Tw(i).replace(/\./g,"")},by=function(i){try{return My.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Iw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sw=()=>Iw().__FIREBASE_DEFAULTS__,Aw=()=>{if(typeof process>"u"||typeof Jm>"u")return;const i=Jm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Rw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&by(i[1]);return e&&JSON.parse(e)},lc=()=>{try{return vw()||Sw()||Aw()||Rw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Fy=i=>{var e,t;return(t=(e=lc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Cw=i=>{const e=Fy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Uy=()=>{var i;return(i=lc())===null||i===void 0?void 0:i.config},jy=i=>{var e;return(e=lc())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Co(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function kw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[$u(JSON.stringify(t)),$u(JSON.stringify(h)),""].join(".")}const Ma={};function Nw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ma))Ma[e]?i.emulator.push(e):i.prod.push(e);return i}function Dw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Zm=!1;function By(i,e){if(typeof window>"u"||typeof document>"u"||!Co(window.location.host)||Ma[i]===e||Ma[i]||Zm)return;Ma[i]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",l=Nw().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,U){C.setAttribute("width","24"),C.setAttribute("id",U),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Zm=!0,h()},C}function w(C,U){C.setAttribute("id",U),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function T(){const C=Dw(s),U=t("text"),G=document.getElementById(U)||document.createElement("span"),K=t("learnmore"),B=document.getElementById(K)||document.createElement("a"),he=t("preprendIcon"),ce=document.getElementById(he)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const me=C.element;m(me),w(B,K);const we=_();g(ce,he),me.append(ce,G,B,we),document.body.appendChild(me)}l?(G.innerText="Preview backend disconnected.",ce.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ce.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,G.innerText="Preview backend running in this workspace."),G.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function Ow(){var i;const e=(i=lc())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Mw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bw(){const i=jt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Fw(){return!Ow()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uw(){try{return typeof indexedDB=="object"}catch{return!1}}function jw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="FirebaseError";class Lr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=zw,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?Bw(l,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Lr(o,m,s)}}function Bw(i,e){return i.replace($w,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const $w=/\{\$([^}]+)}/g;function qw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function as(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=i[o],h=e[o];if(eg(l)&&eg(h)){if(!as(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function eg(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Na(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Da(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function Hw(i,e){const t=new Ww(i,e);return t.subscribe.bind(t)}class Ww{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Gw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=td),o.error===void 0&&(o.error=td),o.complete===void 0&&(o.complete=td);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function td(){}/**
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
 */function zt(i){return i&&i._delegate?i._delegate:i}class ls{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Kw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Pw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yw(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Qw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qw(i){return i===ns?void 0:i}function Yw(i){return i.instantiationMode==="EAGER"}/**
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
 */class Xw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Kw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ce||(Ce={}));const Jw={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},Zw=Ce.INFO,eT={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},tT=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=eT[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $d{constructor(e){this.name=e,this._logLevel=Zw,this._logHandler=tT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const nT=(i,e)=>e.some(t=>i instanceof t);let tg,ng;function rT(){return tg||(tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iT(){return ng||(ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $y=new WeakMap,md=new WeakMap,qy=new WeakMap,nd=new WeakMap,qd=new WeakMap;function sT(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",l),i.removeEventListener("error",h)},l=()=>{t(fi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",l),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&$y.set(t,i)}).catch(()=>{}),qd.set(e,i),e}function oT(i){if(md.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",h),i.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",l),i.addEventListener("error",h),i.addEventListener("abort",h)});md.set(i,e)}let gd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return md.get(i);if(e==="objectStoreNames")return i.objectStoreNames||qy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function aT(i){gd=i(gd)}function lT(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(rd(this),e,...t);return qy.set(s,e.sort?e.sort():[e]),fi(s)}:iT().includes(i)?function(...e){return i.apply(rd(this),e),fi($y.get(this))}:function(...e){return fi(i.apply(rd(this),e))}}function uT(i){return typeof i=="function"?lT(i):(i instanceof IDBTransaction&&oT(i),nT(i,rT())?new Proxy(i,gd):i)}function fi(i){if(i instanceof IDBRequest)return sT(i);if(nd.has(i))return nd.get(i);const e=uT(i);return e!==i&&(nd.set(i,e),qd.set(e,i)),e}const rd=i=>qd.get(i);function cT(i,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(i,e),m=fi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(fi(h.result),g.oldVersion,g.newVersion,fi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const hT=["get","getKey","getAll","getAllKeys","count"],dT=["put","add","delete","clear"],id=new Map;function rg(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(id.get(e))return id.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=dT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||hT.includes(t)))return;const l=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return id.set(e,l),l}aT(i=>({...i,get:(e,t,s)=>rg(e,t)||i.get(e,t,s),has:(e,t)=>!!rg(e,t)||i.has(e,t)}));/**
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
 */class fT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function pT(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yd="@firebase/app",ig="0.13.2";/**
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
 */const Nr=new $d("@firebase/app"),mT="@firebase/app-compat",gT="@firebase/analytics-compat",yT="@firebase/analytics",_T="@firebase/app-check-compat",vT="@firebase/app-check",ET="@firebase/auth",wT="@firebase/auth-compat",TT="@firebase/database",IT="@firebase/data-connect",ST="@firebase/database-compat",AT="@firebase/functions",RT="@firebase/functions-compat",CT="@firebase/installations",PT="@firebase/installations-compat",kT="@firebase/messaging",NT="@firebase/messaging-compat",DT="@firebase/performance",VT="@firebase/performance-compat",OT="@firebase/remote-config",xT="@firebase/remote-config-compat",LT="@firebase/storage",MT="@firebase/storage-compat",bT="@firebase/firestore",FT="@firebase/ai",UT="@firebase/firestore-compat",jT="firebase",zT="11.10.0";/**
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
 */const _d="[DEFAULT]",BT={[yd]:"fire-core",[mT]:"fire-core-compat",[yT]:"fire-analytics",[gT]:"fire-analytics-compat",[vT]:"fire-app-check",[_T]:"fire-app-check-compat",[ET]:"fire-auth",[wT]:"fire-auth-compat",[TT]:"fire-rtdb",[IT]:"fire-data-connect",[ST]:"fire-rtdb-compat",[AT]:"fire-fn",[RT]:"fire-fn-compat",[CT]:"fire-iid",[PT]:"fire-iid-compat",[kT]:"fire-fcm",[NT]:"fire-fcm-compat",[DT]:"fire-perf",[VT]:"fire-perf-compat",[OT]:"fire-rc",[xT]:"fire-rc-compat",[LT]:"fire-gcs",[MT]:"fire-gcs-compat",[bT]:"fire-fst",[UT]:"fire-fst-compat",[FT]:"fire-vertex","fire-js":"fire-js",[jT]:"fire-js-all"};/**
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
 */const qu=new Map,$T=new Map,vd=new Map;function sg(i,e){try{i.container.addComponent(e)}catch(t){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function wo(i){const e=i.name;if(vd.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;vd.set(e,i);for(const t of qu.values())sg(t,i);for(const t of $T.values())sg(t,i);return!0}function Hd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function vn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const qT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new el("app","Firebase",qT);/**
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
 */class HT{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
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
 */const Po=zT;function Hy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_d,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw pi.create("bad-app-name",{appName:String(o)});if(t||(t=Uy()),!t)throw pi.create("no-options");const l=qu.get(o);if(l){if(as(t,l.options)&&as(s,l.config))return l;throw pi.create("duplicate-app",{appName:o})}const h=new Xw(o);for(const g of vd.values())h.addComponent(g);const m=new HT(t,s,h);return qu.set(o,m),m}function Wy(i=_d){const e=qu.get(i);if(!e&&i===_d&&Uy())return Hy();if(!e)throw pi.create("no-app",{appName:i});return e}function mi(i,e,t){var s;let o=(s=BT[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const m=[`Unable to register library "${o}" with version "${e}":`];l&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(m.join(" "));return}wo(new ls(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const WT="firebase-heartbeat-database",GT=1,Ba="firebase-heartbeat-store";let sd=null;function Gy(){return sd||(sd=cT(WT,GT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ba)}catch(t){console.warn(t)}}}}).catch(i=>{throw pi.create("idb-open",{originalErrorMessage:i.message})})),sd}async function KT(i){try{const t=(await Gy()).transaction(Ba),s=await t.objectStore(Ba).get(Ky(i));return await t.done,s}catch(e){if(e instanceof Lr)Nr.warn(e.message);else{const t=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nr.warn(t.message)}}}async function og(i,e){try{const s=(await Gy()).transaction(Ba,"readwrite");await s.objectStore(Ba).put(e,Ky(i)),await s.done}catch(t){if(t instanceof Lr)Nr.warn(t.message);else{const s=pi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Nr.warn(s.message)}}}function Ky(i){return`${i.name}!${i.options.appId}`}/**
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
 */const QT=1024,YT=30;class XT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ZT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=ag();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>YT){const h=e0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ag(),{heartbeatsToSend:s,unsentEntries:o}=JT(this._heartbeatsCache.heartbeats),l=$u(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Nr.warn(t),""}}}function ag(){return new Date().toISOString().substring(0,10)}function JT(i,e=QT){const t=[];let s=i.slice();for(const o of i){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),lg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),lg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class ZT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uw()?jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await KT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return og(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return og(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function lg(i){return $u(JSON.stringify({version:2,heartbeats:i})).length}function e0(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function t0(i){wo(new ls("platform-logger",e=>new fT(e),"PRIVATE")),wo(new ls("heartbeat",e=>new XT(e),"PRIVATE")),mi(yd,ig,i),mi(yd,ig,"esm2017"),mi("fire-js","")}t0("");function Wd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Qy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n0=Qy,Yy=new el("auth","Firebase",Qy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new $d("@firebase/auth");function r0(i,...e){Hu.logLevel<=Ce.WARN&&Hu.warn(`Auth (${Po}): ${i}`,...e)}function Ou(i,...e){Hu.logLevel<=Ce.ERROR&&Hu.error(`Auth (${Po}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(i,...e){throw Gd(i,...e)}function er(i,...e){return Gd(i,...e)}function Xy(i,e,t){const s=Object.assign(Object.assign({},n0()),{[e]:t});return new el("auth","Firebase",s).create(e,{appName:i.name})}function Pr(i){return Xy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Yy.create(i,...e)}function ge(i,e,...t){if(!i)throw Gd(e,...t)}function Rr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Ou(e),new Error(e)}function Dr(i,e){i||Rr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function i0(){return ug()==="http:"||ug()==="https:"}function ug(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(i0()||Lw()||"connection"in navigator)?navigator.onLine:!0}function o0(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dr(t>e,"Short delay should be less than long delay!"),this.isMobile=Vw()||Mw()}get(){return s0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(i,e){Dr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],u0=new nl(3e4,6e4);function Ai(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ri(i,e,t,s,o={}){return Zy(i,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const m=tl(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:g},l);return xw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Co(i.emulatorConfig.host)&&(_.credentials="include"),Jy.fetch()(await e_(i,i.config.apiHost,t,m),_)})}async function Zy(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},a0),e);try{const o=new h0(i),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Ru(i,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const m=l.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Ru(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw Ru(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Xy(i,w,_);jn(i,w)}}catch(o){if(o instanceof Lr)throw o;jn(i,"network-request-failed",{message:String(o)})}}async function rl(i,e,t,s,o={}){const l=await Ri(i,e,t,s,o);return"mfaPendingCredential"in l&&jn(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function e_(i,e,t,s){const o=`${e}${t}?${s}`,l=i,h=l.config.emulator?Kd(i.config,o):`${i.config.apiScheme}://${o}`;return l0.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function c0(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class h0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(er(this.auth,"network-request-failed")),u0.get())})}}function Ru(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=er(i,e,s);return o.customData._tokenResponse=t,o}function cg(i){return i!==void 0&&i.enterprise!==void 0}class d0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return c0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function f0(i,e){return Ri(i,"GET","/v2/recaptchaConfig",Ai(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(i,e){return Ri(i,"POST","/v1/accounts:delete",e)}async function Wu(i,e){return Ri(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function m0(i,e=!1){const t=zt(i),s=await t.getIdToken(e),o=Qd(s);ge(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:ba(od(o.auth_time)),issuedAtTime:ba(od(o.iat)),expirationTime:ba(od(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function od(i){return Number(i)*1e3}function Qd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Ou("JWT malformed, contained fewer than 3 sections"),null;try{const o=by(t);return o?JSON.parse(o):(Ou("Failed to decode base64 JWT payload"),null)}catch(o){return Ou("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function hg(i){const e=Qd(i);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Lr&&g0(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function g0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await $a(i,Wu(t,{idToken:s}));ge(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];i._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?t_(l.providerUserInfo):[],m=v0(i.providerData,h),g=i.isAnonymous,_=!(i.email&&l.passwordHash)&&!(m!=null&&m.length),w=g?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new wd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(i,T)}async function _0(i){const e=zt(i);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function v0(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function t_(i){return i.map(e=>{var{providerId:t}=e,s=Wd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(i,e){const t=await Zy(i,{},async()=>{const s=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=i.config,h=await e_(i,o,"/v1/token",`key=${l}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&Co(i.emulatorConfig.host)&&(g.credentials="include"),Jy.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function w0(i,e){return Ri(i,"POST","/v2/accounts:revokeToken",Ai(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=hg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await E0(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new yo;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ge(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ge(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yo,this.toJSON())}_performRefresh(){return Rr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(i,e){ge(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new y0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new wd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await $a(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return m0(this,e)}reload(){return _0(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Gu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Pr(this.auth));const e=await this.getIdToken();return await $a(this,p0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,m,g,_,w;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,U=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,G=(h=t.photoURL)!==null&&h!==void 0?h:void 0,K=(m=t.tenantId)!==null&&m!==void 0?m:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,he=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ce=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:me,emailVerified:we,isAnonymous:je,providerData:Te,stsTokenManager:D}=t;ge(me&&D,e,"internal-error");const S=yo.fromJSON(this.name,D);ge(typeof me=="string",e,"internal-error"),ai(T,e.name),ai(C,e.name),ge(typeof we=="boolean",e,"internal-error"),ge(typeof je=="boolean",e,"internal-error"),ai(U,e.name),ai(G,e.name),ai(K,e.name),ai(B,e.name),ai(he,e.name),ai(ce,e.name);const R=new bn({uid:me,auth:e,email:C,emailVerified:we,displayName:T,isAnonymous:je,photoURL:G,phoneNumber:U,tenantId:K,stsTokenManager:S,createdAt:he,lastLoginAt:ce});return Te&&Array.isArray(Te)&&(R.providerData=Te.map(k=>Object.assign({},k))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new yo;o.updateFromServerResponse(t);const l=new bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Gu(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ge(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?t_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),m=new yo;m.updateFromIdToken(s);const g=new bn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new wd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class n_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}n_.type="NONE";const fg=n_;/**
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
 */function xu(i,e,t){return`firebase:${i}:${e}:${t}`}class _o{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=xu(this.userKey,o.apiKey,l),this.fullPersistenceKey=xu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wu(this.auth,{idToken:e}).catch(()=>{});return t?bn._fromGetAccountInfoResponse(this.auth,t,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new _o(Cr(fg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Cr(fg);const h=xu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let T;if(typeof w=="string"){const C=await Wu(e,{idToken:w}).catch(()=>{});if(!C)break;T=await bn._fromGetAccountInfoResponse(e,C,w)}else T=bn._fromJSON(e,w);_!==l&&(m=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new _o(l,e,s):(l=g[0],m&&await l._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new _o(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l_(e))return"Blackberry";if(u_(e))return"Webos";if(i_(e))return"Safari";if((e.includes("chrome/")||s_(e))&&!e.includes("edge/"))return"Chrome";if(a_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function r_(i=jt()){return/firefox\//i.test(i)}function i_(i=jt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function s_(i=jt()){return/crios\//i.test(i)}function o_(i=jt()){return/iemobile/i.test(i)}function a_(i=jt()){return/android/i.test(i)}function l_(i=jt()){return/blackberry/i.test(i)}function u_(i=jt()){return/webos/i.test(i)}function Yd(i=jt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function T0(i=jt()){var e;return Yd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function I0(){return bw()&&document.documentMode===10}function c_(i=jt()){return Yd(i)||a_(i)||u_(i)||l_(i)||/windows phone/i.test(i)||o_(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(i,e=[]){let t;switch(i){case"Browser":t=pg(jt());break;case"Worker":t=`${pg(jt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Po}/${s}`}/**
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
 */class S0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,m)=>{try{const g=e(l);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function A0(i,e={}){return Ri(i,"GET","/v2/passwordPolicy",Ai(i,e))}/**
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
 */const R0=6;class C0{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:R0,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mg(this),this.idTokenSubscription=new mg(this),this.beforeStateQueue=new S0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await _o.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wu(this,{idToken:e}),s=await bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=o0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vn(this.app))return Promise.reject(Pr(this));const t=e?zt(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vn(this.app)?Promise.reject(Pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await A0(this),t=new C0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new el("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await w0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await _o.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(m,this,"internal-error"),m.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=h_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&r0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ps(i){return zt(i)}class mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hw(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function k0(i){uc=i}function d_(i){return uc.loadJS(i)}function N0(){return uc.recaptchaEnterpriseScript}function D0(){return uc.gapiScript}function V0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class O0{constructor(){this.enterprise=new x0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class x0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const L0="recaptcha-enterprise",f_="NO_RECAPTCHA";class M0{constructor(e){this.type=L0,this.auth=ps(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,m)=>{f0(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new d0(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(l,h,m){const g=window.grecaptcha;cg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(f_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new O0().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(m=>{if(!t&&cg(window.grecaptcha))o(m,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=N0();g.length!==0&&(g+=m),d_(g).then(()=>{o(m,l,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function gg(i,e,t,s=!1,o=!1){const l=new M0(i);let h;if(o)h=f_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Td(i,e,t,s,o){var l;if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await gg(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await gg(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(i,e){const t=Hd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(as(l,e??{}))return o;jn(o,"already-initialized")}return t.initialize({options:e})}function F0(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Cr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function U0(i,e,t){const s=ps(i);ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=p_(e),{host:h,port:m}=j0(e),g=m===null?"":`:${m}`,_={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ge(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ge(as(_,s.config.emulator)&&as(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Co(h)?(zy(`${l}//${h}${g}`),By("Auth",!0)):z0()}function p_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function j0(i){const e=p_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:yg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:yg(h)}}}function yg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function z0(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rr("not implemented")}_getIdTokenResponse(e){return Rr("not implemented")}_linkToIdToken(e,t){return Rr("not implemented")}_getReauthenticationResolver(e){return Rr("not implemented")}}async function B0(i,e){return Ri(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(i,e){return rl(i,"POST","/v1/accounts:signInWithPassword",Ai(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(i,e){return rl(i,"POST","/v1/accounts:signInWithEmailLink",Ai(i,e))}async function H0(i,e){return rl(i,"POST","/v1/accounts:signInWithEmailLink",Ai(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Xd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new qa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new qa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Td(e,t,"signInWithPassword",$0);case"emailLink":return q0(e,{email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Td(e,s,"signUpPassword",B0);case"emailLink":return H0(e,{idToken:t,email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(i,e){return rl(i,"POST","/v1/accounts:signInWithIdp",Ai(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="http://localhost";class us extends Xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Wd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new us(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return vo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,vo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vo(e,t)}buildRequest(){const e={requestUri:W0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function K0(i){const e=Na(Da(i)).link,t=e?Na(Da(e)).deep_link_id:null,s=Na(Da(i)).deep_link_id;return(s?Na(Da(s)).link:null)||s||t||e||i}class Jd{constructor(e){var t,s,o,l,h,m;const g=Na(Da(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,T=G0((o=g.mode)!==null&&o!==void 0?o:null);ge(_&&w&&T,"argument-error"),this.apiKey=_,this.operation=T,this.code=w,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=K0(e);try{return new Jd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.providerId=ko.PROVIDER_ID}static credential(e,t){return qa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Jd.parseLink(t);return ge(s,"argument-error"),qa._fromEmailAndCode(e,s.code,s.tenantId)}}ko.PROVIDER_ID="password";ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class il extends m_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends il{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.FACEBOOK_SIGN_IN_METHOD="facebook.com";li.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return us._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ui.credential(t,s)}catch{return null}}}ui.GOOGLE_SIGN_IN_METHOD="google.com";ui.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends il{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.GITHUB_SIGN_IN_METHOD="github.com";ci.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends il{constructor(){super("twitter.com")}static credential(e,t){return us._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.TWITTER_SIGN_IN_METHOD="twitter.com";hi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q0(i,e){return rl(i,"POST","/v1/accounts:signUp",Ai(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await bn._fromIdTokenResponse(e,s,o),h=_g(s);return new cs({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=_g(s);return new cs({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function _g(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends Lr{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ku(e,t,s,o)}}function g_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ku._fromErrorAndOperation(i,l,e,s):l})}async function Y0(i,e,t=!1){const s=await $a(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return cs._forOperation(i,"link",s)}/**
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
 */async function X0(i,e,t=!1){const{auth:s}=i;if(vn(s.app))return Promise.reject(Pr(s));const o="reauthenticate";try{const l=await $a(i,g_(s,o,e,i),t);ge(l.idToken,s,"internal-error");const h=Qd(l.idToken);ge(h,s,"internal-error");const{sub:m}=h;return ge(i.uid===m,s,"user-mismatch"),cs._forOperation(i,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&jn(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(i,e,t=!1){if(vn(i.app))return Promise.reject(Pr(i));const s="signIn",o=await g_(i,s,e),l=await cs._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(l.user),l}async function J0(i,e){return y_(ps(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(i){const e=ps(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Z0(i,e,t){if(vn(i.app))return Promise.reject(Pr(i));const s=ps(i),h=await Td(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Q0).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&__(i),g}),m=await cs._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function eI(i,e,t){return vn(i.app)?Promise.reject(Pr(i)):J0(zt(i),ko.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&__(i),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(i,e){return zt(i).setPersistence(e)}function nI(i,e,t,s){return zt(i).onIdTokenChanged(e,t,s)}function rI(i,e,t){return zt(i).beforeAuthStateChanged(e,t)}function iI(i,e,t,s){return zt(i).onAuthStateChanged(e,t,s)}const Qu="__sak";/**
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
 */class v_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qu,"1"),this.storage.removeItem(Qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=1e3,oI=10;class E_ extends v_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=c_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);I0()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,oI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},sI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}E_.type="LOCAL";const w_=E_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_ extends v_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}T_.type="SESSION";const I_=T_;/**
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
 */function aI(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new cc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,l)),g=await aI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class lI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((m,g)=>{const _=Zd("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const C=T;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(C.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return window}function uI(i){tr().location.href=i}/**
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
 */function S_(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function cI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function dI(){return S_()?self:null}/**
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
 */const A_="firebaseLocalStorageDb",fI=1,Yu="firebaseLocalStorage",R_="fbase_key";class sl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function hc(i,e){return i.transaction([Yu],e?"readwrite":"readonly").objectStore(Yu)}function pI(){const i=indexedDB.deleteDatabase(A_);return new sl(i).toPromise()}function Id(){const i=indexedDB.open(A_,fI);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Yu,{keyPath:R_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Yu)?e(s):(s.close(),await pI(),e(await Id()))})})}async function vg(i,e,t){const s=hc(i,!0).put({[R_]:e,value:t});return new sl(s).toPromise()}async function mI(i,e){const t=hc(i,!1).get(e),s=await new sl(t).toPromise();return s===void 0?null:s.value}function Eg(i,e){const t=hc(i,!0).delete(e);return new sl(t).toPromise()}const gI=800,yI=3;class C_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Id(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>yI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return S_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cc._getInstance(dI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await cI(),!this.activeServiceWorker)return;this.sender=new lI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Id();return await vg(e,Qu,"1"),await Eg(e,Qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>vg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>mI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Eg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=hc(o,!1).getAll();return new sl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}C_.type="LOCAL";const _I=C_;new nl(3e4,6e4);/**
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
 */function vI(i,e){return e?Cr(e):(ge(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class ef extends Xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function EI(i){return y_(i.auth,new ef(i),i.bypassAuthState)}function wI(i){const{auth:e,user:t}=i;return ge(t,e,"internal-error"),X0(t,new ef(i),i.bypassAuthState)}async function TI(i){const{auth:e,user:t}=i;return ge(t,e,"internal-error"),Y0(t,new ef(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EI;case"linkViaPopup":case"linkViaRedirect":return TI;case"reauthViaPopup":case"reauthViaRedirect":return wI;default:jn(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=new nl(2e3,1e4);class go extends P_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,go.currentPopupAction&&go.currentPopupAction.cancel(),go.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=Zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,go.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,II.get())};e()}}go.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="pendingRedirect",Lu=new Map;class AI extends P_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Lu.get(this.auth._key());if(!e){try{const s=await RI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Lu.set(this.auth._key(),e)}return this.bypassAuthState||Lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RI(i,e){const t=kI(e),s=PI(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function CI(i,e){Lu.set(i._key(),e)}function PI(i){return Cr(i._redirectPersistence)}function kI(i){return xu(SI,i.config.apiKey,i.name)}async function NI(i,e,t=!1){if(vn(i.app))return Promise.reject(Pr(i));const s=ps(i),o=vI(s,e),h=await new AI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=600*1e3;class VI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!k_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(er(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DI&&this.cachedEventUids.clear(),this.cachedEventUids.has(wg(e))}saveEventToCache(e){this.cachedEventUids.add(wg(e)),this.lastProcessedEventTime=Date.now()}}function wg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function k_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return k_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(i,e={}){return Ri(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MI=/^https?/;async function bI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await xI(i);for(const t of e)try{if(FI(t))return}catch{}jn(i,"unauthorized-domain")}function FI(i){const e=Ed(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!MI.test(t))return!1;if(LI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const UI=new nl(3e4,6e4);function Tg(){const i=tr().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function jI(i){return new Promise((e,t)=>{var s,o,l;function h(){Tg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tg(),t(er(i,"network-request-failed"))},timeout:UI.get()})}if(!((o=(s=tr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=tr().gapi)===null||l===void 0)&&l.load)h();else{const m=V0("iframefcb");return tr()[m]=()=>{gapi.load?h():t(er(i,"network-request-failed"))},d_(`${D0()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Mu=null,e})}let Mu=null;function zI(i){return Mu=Mu||jI(i),Mu}/**
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
 */const BI=new nl(5e3,15e3),$I="__/auth/iframe",qI="emulator/auth/iframe",HI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GI(i){const e=i.config;ge(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Kd(e,qI):`https://${i.config.authDomain}/${$I}`,s={apiKey:e.apiKey,appName:i.name,v:Po},o=WI.get(i.config.apiHost);o&&(s.eid=o);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${tl(s).slice(1)}`}async function KI(i){const e=await zI(i),t=tr().gapi;return ge(t,i,"internal-error"),e.open({where:document.body,url:GI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HI,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=er(i,"network-request-failed"),m=tr().setTimeout(()=>{l(h)},BI.get());function g(){tr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const QI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YI=500,XI=600,JI="_blank",ZI="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eS(i,e,t,s=YI,o=XI){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},QI),{width:s.toString(),height:o.toString(),top:l,left:h}),_=jt().toLowerCase();t&&(m=s_(_)?JI:t),r_(_)&&(e=e||ZI,g.scrollbars="yes");const w=Object.entries(g).reduce((C,[U,G])=>`${C}${U}=${G},`,"");if(T0(_)&&m!=="_self")return tS(e||"",m),new Ig(null);const T=window.open(e||"",m,w);ge(T,i,"popup-blocked");try{T.focus()}catch{}return new Ig(T)}function tS(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const nS="__/auth/handler",rS="emulator/auth/handler",iS=encodeURIComponent("fac");async function Sg(i,e,t,s,o,l){ge(i.config.authDomain,i,"auth-domain-config-required"),ge(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Po,eventId:o};if(e instanceof m_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",qw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof il){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),_=g?`#${iS}=${encodeURIComponent(g)}`:"";return`${sS(i)}?${tl(m).slice(1)}${_}`}function sS({config:i}){return i.emulator?Kd(i,rS):`https://${i.authDomain}/${nS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="webStorageSupport";class oS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=I_,this._completeRedirectFn=NI,this._overrideRedirectResult=CI}async _openPopup(e,t,s,o){var l;Dr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Sg(e,t,s,Ed(),o);return eS(e,h,Zd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Sg(e,t,s,Ed(),o);return uI(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Dr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await KI(e),s=new VI(e);return t.register("authEvent",o=>(ge(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ad,{type:ad},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[ad];h!==void 0&&t(!!h),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return c_()||i_()||Yd()}}const aS=oS;var Ag="@firebase/auth",Rg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cS(i){wo(new ls("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h_(i)},_=new P0(s,o,l,g);return F0(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),wo(new ls("auth-internal",e=>{const t=ps(e.getProvider("auth").getImmediate());return(s=>new lS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),mi(Ag,Rg,uS(i)),mi(Ag,Rg,"esm2017")}/**
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
 */const hS=300,dS=jy("authIdTokenMaxAge")||hS;let Cg=null;const fS=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>dS)return;const o=t==null?void 0:t.token;Cg!==o&&(Cg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function pS(i=Wy()){const e=Hd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=b0(i,{popupRedirectResolver:aS,persistence:[_I,w_,I_]}),s=jy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=fS(l.toString());rI(t,h,()=>h(t.currentUser)),nI(t,m=>h(m))}}const o=Fy("auth");return o&&U0(t,`http://${o}`),t}function mS(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}k0({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const l=er("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",mS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cS("Browser");var gS="firebase",yS="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mi(gS,yS,"app");var Pg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gi,N_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function R(){}R.prototype=S.prototype,D.D=S.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(k,V,x){for(var A=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)A[tt-2]=arguments[tt];return S.prototype[V].apply(k,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,S,R){R||(R=0);var k=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)k[V]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(V=0;16>V;++V)k[V]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=D.g[0],R=D.g[1],V=D.g[2];var x=D.g[3],A=S+(x^R&(V^x))+k[0]+3614090360&4294967295;S=R+(A<<7&4294967295|A>>>25),A=x+(V^S&(R^V))+k[1]+3905402710&4294967295,x=S+(A<<12&4294967295|A>>>20),A=V+(R^x&(S^R))+k[2]+606105819&4294967295,V=x+(A<<17&4294967295|A>>>15),A=R+(S^V&(x^S))+k[3]+3250441966&4294967295,R=V+(A<<22&4294967295|A>>>10),A=S+(x^R&(V^x))+k[4]+4118548399&4294967295,S=R+(A<<7&4294967295|A>>>25),A=x+(V^S&(R^V))+k[5]+1200080426&4294967295,x=S+(A<<12&4294967295|A>>>20),A=V+(R^x&(S^R))+k[6]+2821735955&4294967295,V=x+(A<<17&4294967295|A>>>15),A=R+(S^V&(x^S))+k[7]+4249261313&4294967295,R=V+(A<<22&4294967295|A>>>10),A=S+(x^R&(V^x))+k[8]+1770035416&4294967295,S=R+(A<<7&4294967295|A>>>25),A=x+(V^S&(R^V))+k[9]+2336552879&4294967295,x=S+(A<<12&4294967295|A>>>20),A=V+(R^x&(S^R))+k[10]+4294925233&4294967295,V=x+(A<<17&4294967295|A>>>15),A=R+(S^V&(x^S))+k[11]+2304563134&4294967295,R=V+(A<<22&4294967295|A>>>10),A=S+(x^R&(V^x))+k[12]+1804603682&4294967295,S=R+(A<<7&4294967295|A>>>25),A=x+(V^S&(R^V))+k[13]+4254626195&4294967295,x=S+(A<<12&4294967295|A>>>20),A=V+(R^x&(S^R))+k[14]+2792965006&4294967295,V=x+(A<<17&4294967295|A>>>15),A=R+(S^V&(x^S))+k[15]+1236535329&4294967295,R=V+(A<<22&4294967295|A>>>10),A=S+(V^x&(R^V))+k[1]+4129170786&4294967295,S=R+(A<<5&4294967295|A>>>27),A=x+(R^V&(S^R))+k[6]+3225465664&4294967295,x=S+(A<<9&4294967295|A>>>23),A=V+(S^R&(x^S))+k[11]+643717713&4294967295,V=x+(A<<14&4294967295|A>>>18),A=R+(x^S&(V^x))+k[0]+3921069994&4294967295,R=V+(A<<20&4294967295|A>>>12),A=S+(V^x&(R^V))+k[5]+3593408605&4294967295,S=R+(A<<5&4294967295|A>>>27),A=x+(R^V&(S^R))+k[10]+38016083&4294967295,x=S+(A<<9&4294967295|A>>>23),A=V+(S^R&(x^S))+k[15]+3634488961&4294967295,V=x+(A<<14&4294967295|A>>>18),A=R+(x^S&(V^x))+k[4]+3889429448&4294967295,R=V+(A<<20&4294967295|A>>>12),A=S+(V^x&(R^V))+k[9]+568446438&4294967295,S=R+(A<<5&4294967295|A>>>27),A=x+(R^V&(S^R))+k[14]+3275163606&4294967295,x=S+(A<<9&4294967295|A>>>23),A=V+(S^R&(x^S))+k[3]+4107603335&4294967295,V=x+(A<<14&4294967295|A>>>18),A=R+(x^S&(V^x))+k[8]+1163531501&4294967295,R=V+(A<<20&4294967295|A>>>12),A=S+(V^x&(R^V))+k[13]+2850285829&4294967295,S=R+(A<<5&4294967295|A>>>27),A=x+(R^V&(S^R))+k[2]+4243563512&4294967295,x=S+(A<<9&4294967295|A>>>23),A=V+(S^R&(x^S))+k[7]+1735328473&4294967295,V=x+(A<<14&4294967295|A>>>18),A=R+(x^S&(V^x))+k[12]+2368359562&4294967295,R=V+(A<<20&4294967295|A>>>12),A=S+(R^V^x)+k[5]+4294588738&4294967295,S=R+(A<<4&4294967295|A>>>28),A=x+(S^R^V)+k[8]+2272392833&4294967295,x=S+(A<<11&4294967295|A>>>21),A=V+(x^S^R)+k[11]+1839030562&4294967295,V=x+(A<<16&4294967295|A>>>16),A=R+(V^x^S)+k[14]+4259657740&4294967295,R=V+(A<<23&4294967295|A>>>9),A=S+(R^V^x)+k[1]+2763975236&4294967295,S=R+(A<<4&4294967295|A>>>28),A=x+(S^R^V)+k[4]+1272893353&4294967295,x=S+(A<<11&4294967295|A>>>21),A=V+(x^S^R)+k[7]+4139469664&4294967295,V=x+(A<<16&4294967295|A>>>16),A=R+(V^x^S)+k[10]+3200236656&4294967295,R=V+(A<<23&4294967295|A>>>9),A=S+(R^V^x)+k[13]+681279174&4294967295,S=R+(A<<4&4294967295|A>>>28),A=x+(S^R^V)+k[0]+3936430074&4294967295,x=S+(A<<11&4294967295|A>>>21),A=V+(x^S^R)+k[3]+3572445317&4294967295,V=x+(A<<16&4294967295|A>>>16),A=R+(V^x^S)+k[6]+76029189&4294967295,R=V+(A<<23&4294967295|A>>>9),A=S+(R^V^x)+k[9]+3654602809&4294967295,S=R+(A<<4&4294967295|A>>>28),A=x+(S^R^V)+k[12]+3873151461&4294967295,x=S+(A<<11&4294967295|A>>>21),A=V+(x^S^R)+k[15]+530742520&4294967295,V=x+(A<<16&4294967295|A>>>16),A=R+(V^x^S)+k[2]+3299628645&4294967295,R=V+(A<<23&4294967295|A>>>9),A=S+(V^(R|~x))+k[0]+4096336452&4294967295,S=R+(A<<6&4294967295|A>>>26),A=x+(R^(S|~V))+k[7]+1126891415&4294967295,x=S+(A<<10&4294967295|A>>>22),A=V+(S^(x|~R))+k[14]+2878612391&4294967295,V=x+(A<<15&4294967295|A>>>17),A=R+(x^(V|~S))+k[5]+4237533241&4294967295,R=V+(A<<21&4294967295|A>>>11),A=S+(V^(R|~x))+k[12]+1700485571&4294967295,S=R+(A<<6&4294967295|A>>>26),A=x+(R^(S|~V))+k[3]+2399980690&4294967295,x=S+(A<<10&4294967295|A>>>22),A=V+(S^(x|~R))+k[10]+4293915773&4294967295,V=x+(A<<15&4294967295|A>>>17),A=R+(x^(V|~S))+k[1]+2240044497&4294967295,R=V+(A<<21&4294967295|A>>>11),A=S+(V^(R|~x))+k[8]+1873313359&4294967295,S=R+(A<<6&4294967295|A>>>26),A=x+(R^(S|~V))+k[15]+4264355552&4294967295,x=S+(A<<10&4294967295|A>>>22),A=V+(S^(x|~R))+k[6]+2734768916&4294967295,V=x+(A<<15&4294967295|A>>>17),A=R+(x^(V|~S))+k[13]+1309151649&4294967295,R=V+(A<<21&4294967295|A>>>11),A=S+(V^(R|~x))+k[4]+4149444226&4294967295,S=R+(A<<6&4294967295|A>>>26),A=x+(R^(S|~V))+k[11]+3174756917&4294967295,x=S+(A<<10&4294967295|A>>>22),A=V+(S^(x|~R))+k[2]+718787259&4294967295,V=x+(A<<15&4294967295|A>>>17),A=R+(x^(V|~S))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(V+(A<<21&4294967295|A>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+x&4294967295}s.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var R=S-this.blockSize,k=this.B,V=this.h,x=0;x<S;){if(V==0)for(;x<=R;)o(this,D,x),x+=this.blockSize;if(typeof D=="string"){for(;x<S;)if(k[V++]=D.charCodeAt(x++),V==this.blockSize){o(this,k),V=0;break}}else for(;x<S;)if(k[V++]=D[x++],V==this.blockSize){o(this,k),V=0;break}}this.h=V,this.o+=S},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var R=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=R&255,R/=256;for(this.u(D),D=Array(16),S=R=0;4>S;++S)for(var k=0;32>k;k+=8)D[R++]=this.g[S]>>>k&255;return D};function l(D,S){var R=m;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=S(D)}function h(D,S){this.h=S;for(var R=[],k=!0,V=D.length-1;0<=V;V--){var x=D[V]|0;k&&x==S||(R[V]=x,k=!1)}this.g=R}var m={};function g(D){return-128<=D&&128>D?l(D,function(S){return new h([S|0],0>S?-1:0)}):new h([D|0],0>D?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return B(_(-D));for(var S=[],R=1,k=0;D>=R;k++)S[k]=D/R|0,R*=4294967296;return new h(S,0)}function w(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return B(w(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(S,8)),k=T,V=0;V<D.length;V+=8){var x=Math.min(8,D.length-V),A=parseInt(D.substring(V,V+x),S);8>x?(x=_(Math.pow(S,x)),k=k.j(x).add(_(A))):(k=k.j(R),k=k.add(_(A)))}return k}var T=g(0),C=g(1),U=g(16777216);i=h.prototype,i.m=function(){if(K(this))return-B(this).m();for(var D=0,S=1,R=0;R<this.g.length;R++){var k=this.i(R);D+=(0<=k?k:4294967296+k)*S,S*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(G(this))return"0";if(K(this))return"-"+B(this).toString(D);for(var S=_(Math.pow(D,6)),R=this,k="";;){var V=we(R,S).g;R=he(R,V.j(S));var x=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=V,G(R))return x+k;for(;6>x.length;)x="0"+x;k=x+k}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function G(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function K(D){return D.h==-1}i.l=function(D){return D=he(this,D),K(D)?-1:G(D)?0:1};function B(D){for(var S=D.g.length,R=[],k=0;k<S;k++)R[k]=~D.g[k];return new h(R,~D.h).add(C)}i.abs=function(){return K(this)?B(this):this},i.add=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],k=0,V=0;V<=S;V++){var x=k+(this.i(V)&65535)+(D.i(V)&65535),A=(x>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);k=A>>>16,x&=65535,A&=65535,R[V]=A<<16|x}return new h(R,R[R.length-1]&-2147483648?-1:0)};function he(D,S){return D.add(B(S))}i.j=function(D){if(G(this)||G(D))return T;if(K(this))return K(D)?B(this).j(B(D)):B(B(this).j(D));if(K(D))return B(this.j(B(D)));if(0>this.l(U)&&0>D.l(U))return _(this.m()*D.m());for(var S=this.g.length+D.g.length,R=[],k=0;k<2*S;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(var V=0;V<D.g.length;V++){var x=this.i(k)>>>16,A=this.i(k)&65535,tt=D.i(V)>>>16,Dt=D.i(V)&65535;R[2*k+2*V]+=A*Dt,ce(R,2*k+2*V),R[2*k+2*V+1]+=x*Dt,ce(R,2*k+2*V+1),R[2*k+2*V+1]+=A*tt,ce(R,2*k+2*V+1),R[2*k+2*V+2]+=x*tt,ce(R,2*k+2*V+2)}for(k=0;k<S;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=S;k<2*S;k++)R[k]=0;return new h(R,0)};function ce(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function me(D,S){this.g=D,this.h=S}function we(D,S){if(G(S))throw Error("division by zero");if(G(D))return new me(T,T);if(K(D))return S=we(B(D),S),new me(B(S.g),B(S.h));if(K(S))return S=we(D,B(S)),new me(B(S.g),S.h);if(30<D.g.length){if(K(D)||K(S))throw Error("slowDivide_ only works with positive integers.");for(var R=C,k=S;0>=k.l(D);)R=je(R),k=je(k);var V=Te(R,1),x=Te(k,1);for(k=Te(k,2),R=Te(R,2);!G(k);){var A=x.add(k);0>=A.l(D)&&(V=V.add(R),x=A),k=Te(k,1),R=Te(R,1)}return S=he(D,V.j(S)),new me(V,S)}for(V=T;0<=D.l(S);){for(R=Math.max(1,Math.floor(D.m()/S.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),x=_(R),A=x.j(S);K(A)||0<A.l(D);)R-=k,x=_(R),A=x.j(S);G(x)&&(x=C),V=V.add(x),D=he(D,A)}return new me(V,D)}i.A=function(D){return we(this,D).h},i.and=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],k=0;k<S;k++)R[k]=this.i(k)&D.i(k);return new h(R,this.h&D.h)},i.or=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],k=0;k<S;k++)R[k]=this.i(k)|D.i(k);return new h(R,this.h|D.h)},i.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),R=[],k=0;k<S;k++)R[k]=this.i(k)^D.i(k);return new h(R,this.h^D.h)};function je(D){for(var S=D.g.length+1,R=[],k=0;k<S;k++)R[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(R,D.h)}function Te(D,S){var R=S>>5;S%=32;for(var k=D.g.length-R,V=[],x=0;x<k;x++)V[x]=0<S?D.i(x+R)>>>S|D.i(x+R+1)<<32-S:D.i(x+R);return new h(V,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,N_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,gi=h}).apply(typeof Pg<"u"?Pg:typeof self<"u"?self:typeof window<"u"?window:{});var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D_,Va,V_,bu,Sd,O_,x_,L_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,y){return u==Array.prototype||u==Object.prototype||(u[f]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cu=="object"&&Cu];for(var f=0;f<u.length;++f){var y=u[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,f){if(f)e:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var L=u[E];if(!(L in y))break e;y=y[L]}u=u[u.length-1],E=y[u],f=f(E),f!=E&&f!=null&&e(y,u,{configurable:!0,writable:!0,value:f})}}function l(u,f){u instanceof String&&(u+="");var y=0,E=!1,L={next:function(){if(!E&&y<u.length){var j=y++;return{value:f(j,u[j]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function _(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function w(u,f,y){return u.call.apply(u.bind,arguments)}function T(u,f,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),u.apply(f,L)}}return function(){return u.apply(f,arguments)}}function C(u,f,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,C.apply(null,arguments)}function U(u,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function G(u,f){function y(){}y.prototype=f.prototype,u.aa=f.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,L,j){for(var X=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)X[Fe-2]=arguments[Fe];return f.prototype[L].apply(E,X)}}function K(u){const f=u.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=u[E];return y}return[]}function B(u,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=u.length||0,j=E.length||0;u.length=L+j;for(let X=0;X<j;X++)u[L+X]=E[X]}else u.push(E)}}class he{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ce(u){return/^[\s\xa0]*$/.test(u)}function me(){var u=m.navigator;return u&&(u=u.userAgent)?u:""}function we(u){return we[" "](u),u}we[" "]=function(){};var je=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function Te(u,f,y){for(const E in u)f.call(y,u[E],E,u)}function D(u,f){for(const y in u)f.call(void 0,u[y],y,u)}function S(u){const f={};for(const y in u)f[y]=u[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)u[y]=E[y];for(let j=0;j<R.length;j++)y=R[j],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function V(u){var f=1;u=u.split(":");const y=[];for(;0<f&&u.length;)y.push(u.shift()),f--;return u.length&&y.push(u.join(":")),y}function x(u){m.setTimeout(()=>{throw u},0)}function A(){var u=de;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class tt{constructor(){this.h=this.g=null}add(f,y){const E=Dt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Dt=new he(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,J=!1,de=new tt,re=()=>{const u=m.Promise.resolve(void 0);Ue=()=>{u.then(O)}};var O=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(y){x(y)}var f=Dt;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}J=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Ie=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return u})();function Ae(u,f){if(le.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(je){e:{try{we(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=u.fromElement:y=="mouseout"&&(f=u.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}G(Ae,le);var Ne={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(u,f,y,E,L){this.listener=u,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++Me,this.da=this.fa=!1}function _t(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function lr(u){this.src=u,this.g={},this.h=0}lr.prototype.add=function(u,f,y,E,L){var j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);var X=Mr(u,f,E,L);return-1<X?(f=u[X],y||(f.fa=!1)):(f=new Be(f,this.src,j,!!E,L),f.fa=y,u.push(f)),f};function vs(u,f){var y=f.type;if(y in u.g){var E=u.g[y],L=Array.prototype.indexOf.call(E,f,void 0),j;(j=0<=L)&&Array.prototype.splice.call(E,L,1),j&&(_t(f),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Mr(u,f,y,E){for(var L=0;L<u.length;++L){var j=u[L];if(!j.da&&j.listener==f&&j.capture==!!y&&j.ha==E)return L}return-1}var Pi="closure_lm_"+(1e6*Math.random()|0),Es={};function Lo(u,f,y,E,L){if(Array.isArray(f)){for(var j=0;j<f.length;j++)Lo(u,f[j],y,E,L);return null}return y=Fo(y),u&&u[Le]?u.K(f,y,_(E)?!!E.capture:!1,L):Mo(u,f,y,!1,E,L)}function Mo(u,f,y,E,L,j){if(!f)throw Error("Invalid event type");var X=_(L)?!!L.capture:!!L,Fe=Ts(u);if(Fe||(u[Pi]=Fe=new lr(u)),y=Fe.add(f,y,E,X,j),y.proxy)return y;if(E=hl(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Ie||(L=X),L===void 0&&(L=!1),u.addEventListener(f.toString(),E,L);else if(u.attachEvent)u.attachEvent(cr(f.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function hl(){function u(y){return f.call(u.src,u.listener,y)}const f=bo;return u}function ws(u,f,y,E,L){if(Array.isArray(f))for(var j=0;j<f.length;j++)ws(u,f[j],y,E,L);else E=_(E)?!!E.capture:!!E,y=Fo(y),u&&u[Le]?(u=u.i,f=String(f).toString(),f in u.g&&(j=u.g[f],y=Mr(j,y,E,L),-1<y&&(_t(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete u.g[f],u.h--)))):u&&(u=Ts(u))&&(f=u.g[f.toString()],u=-1,f&&(u=Mr(f,y,E,L)),(y=-1<u?f[u]:null)&&ur(y))}function ur(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[Le])vs(f.i,u);else{var y=u.type,E=u.proxy;f.removeEventListener?f.removeEventListener(y,E,u.capture):f.detachEvent?f.detachEvent(cr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=Ts(f))?(vs(y,u),y.h==0&&(y.src=null,f[Pi]=null)):_t(u)}}}function cr(u){return u in Es?Es[u]:Es[u]="on"+u}function bo(u,f){if(u.da)u=!0;else{f=new Ae(f,this);var y=u.listener,E=u.ha||u.src;u.fa&&ur(u),u=y.call(E,f)}return u}function Ts(u){return u=u[Pi],u instanceof lr?u:null}var Is="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fo(u){return typeof u=="function"?u:(u[Is]||(u[Is]=function(f){return u.handleEvent(f)}),u[Is])}function ht(){q.call(this),this.i=new lr(this),this.M=this,this.F=null}G(ht,q),ht.prototype[Le]=!0,ht.prototype.removeEventListener=function(u,f,y,E){ws(this,u,f,y,E)};function dt(u,f){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=f.type||f,typeof f=="string")f=new le(f,u);else if(f instanceof le)f.target=f.target||u;else{var L=f;f=new le(E,u),k(f,L)}if(L=!0,y)for(var j=y.length-1;0<=j;j--){var X=f.g=y[j];L=hr(X,E,!0,f)&&L}if(X=f.g=u,L=hr(X,E,!0,f)&&L,L=hr(X,E,!1,f)&&L,y)for(j=0;j<y.length;j++)X=f.g=y[j],L=hr(X,E,!1,f)&&L}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var y=u.g[f],E=0;E<y.length;E++)_t(y[E]);delete u.g[f],u.h--}}this.F=null},ht.prototype.K=function(u,f,y,E){return this.i.add(String(u),f,!1,y,E)},ht.prototype.L=function(u,f,y,E){return this.i.add(String(u),f,!0,y,E)};function hr(u,f,y,E){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,j=0;j<f.length;++j){var X=f[j];if(X&&!X.da&&X.capture==y){var Fe=X.listener,ft=X.ha||X.src;X.fa&&vs(u.i,X),L=Fe.call(ft,E)!==!1&&L}}return L&&!E.defaultPrevented}function Uo(u,f,y){if(typeof u=="function")y&&(u=C(u,y));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(u,f||0)}function br(u){u.g=Uo(()=>{u.g=null,u.i&&(u.i=!1,br(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class ki extends q{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:br(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ni(u){q.call(this),this.h=u,this.g={}}G(Ni,q);var jo=[];function zo(u){Te(u.g,function(f,y){this.g.hasOwnProperty(y)&&ur(f)},u),u.g={}}Ni.prototype.N=function(){Ni.aa.N.call(this),zo(this)},Ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bo=m.JSON.stringify,$o=m.JSON.parse,qo=class{stringify(u){return m.JSON.stringify(u,void 0)}parse(u){return m.JSON.parse(u,void 0)}};function Di(){}Di.prototype.h=null;function Ss(u){return u.h||(u.h=u.i())}function As(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bn(){le.call(this,"d")}G(Bn,le);function Rs(){le.call(this,"c")}G(Rs,le);var $n={},Ho=null;function Vi(){return Ho=Ho||new ht}$n.La="serverreachability";function Wo(u){le.call(this,$n.La,u)}G(Wo,le);function dr(u){const f=Vi();dt(f,new Wo(f))}$n.STAT_EVENT="statevent";function Go(u,f){le.call(this,$n.STAT_EVENT,u),this.stat=f}G(Go,le);function nt(u){const f=Vi();dt(f,new Go(f,u))}$n.Ma="timingevent";function Cs(u,f){le.call(this,$n.Ma,u),this.size=f}G(Cs,le);function Tn(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){u()},f)}function Oi(){this.g=!0}Oi.prototype.xa=function(){this.g=!1};function xi(u,f,y,E,L,j){u.info(function(){if(u.g)if(j)for(var X="",Fe=j.split("&"),ft=0;ft<Fe.length;ft++){var De=Fe[ft].split("=");if(1<De.length){var vt=De[0];De=De[1];var ot=vt.split("_");X=2<=ot.length&&ot[1]=="type"?X+(vt+"="+De+"&"):X+(vt+"=redacted&")}}else X=null;else X=j;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+X})}function Ps(u,f,y,E,L,j,X){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+j+" "+X})}function In(u,f,y,E){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+Cc(u,y)+(E?" "+E:"")})}function Ko(u,f){u.info(function(){return"TIMEOUT: "+f})}Oi.prototype.info=function(){};function Cc(u,f){if(!u.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var X=1;X<L.length;X++)L[X]=""}}}}return Bo(y)}catch{return f}}var ks={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function Li(){}G(Li,Di),Li.prototype.g=function(){return new XMLHttpRequest},Li.prototype.i=function(){return{}},Sn=new Li;function An(u,f,y,E){this.j=u,this.i=f,this.l=y,this.R=E||1,this.U=new Ni(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fl}function fl(){this.i=null,this.g="",this.h=!1}var Qo={},Ns={};function Ds(u,f,y){u.L=1,u.v=Br(nn(f)),u.m=y,u.P=!0,Yo(u,null)}function Yo(u,f){u.F=Date.now(),$e(u),u.A=nn(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),qr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new fl,u.g=Dl(u.j,y?f:null,!u.m),0<u.O&&(u.M=new ki(C(u.Y,u,u.g),u.O)),f=u.U,y=u.g,E=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(jo[0]=L.toString()),L=jo);for(var j=0;j<L.length;j++){var X=Lo(y,L[j],E||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),dr(),xi(u.i,u.u,u.A,u.l,u.R,u.m)}An.prototype.ca=function(u){u=u.target;const f=this.M;f&&Gt(u)==3?f.j():this.Y(u)},An.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Gt(this.g);var f=this.g.Ba();const dn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||na(this.g)))){this.J||ot!=4||f==7||(f==8||0>=dn?dr(3):dr(2)),Mi(this);var y=this.g.Z();this.X=y;t:if(pl(this)){var E=na(this.g);u="";var L=E.length,j=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),Fr(this);var X="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,u+=this.h.i.decode(E[f],{stream:!(j&&f==L-1)});E.length=0,this.h.g+=u,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=y==200,Ps(this.i,this.u,this.A,this.l,this.R,ot,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ft=this.g;if((Fe=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ce(Fe)){var De=Fe;break t}}De=null}if(y=De)In(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xo(this,y);else{this.o=!1,this.s=3,nt(12),cn(this),Fr(this);break e}}if(this.P){y=!0;let sn;for(;!this.J&&this.C<X.length;)if(sn=Pc(this,X),sn==Ns){ot==4&&(this.s=4,nt(14),y=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Qo){this.s=4,nt(15),In(this.i,this.l,X,"[Invalid Chunk]"),y=!1;break}else In(this.i,this.l,sn,null),Xo(this,sn);if(pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||X.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)In(this.i,this.l,X,"[Invalid Chunked Response]"),cn(this),Fr(this);else if(0<X.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),ia(vt),vt.M=!0,nt(11))}}else In(this.i,this.l,X,null),Xo(this,X);ot==4&&cn(this),this.o&&!this.J&&(ot==4?Bs(this.j,this):(this.o=!1,$e(this)))}else bs(this.g),y==400&&0<X.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),cn(this),Fr(this)}}}catch{}finally{}};function pl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Pc(u,f){var y=u.C,E=f.indexOf(`
`,y);return E==-1?Ns:(y=Number(f.substring(y,E)),isNaN(y)?Qo:(E+=1,E+y>f.length?Ns:(f=f.slice(E,E+y),u.C=E+y,f)))}An.prototype.cancel=function(){this.J=!0,cn(this)};function $e(u){u.S=Date.now()+u.I,ml(u,u.I)}function ml(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Tn(C(u.ba,u),f)}function Mi(u){u.B&&(m.clearTimeout(u.B),u.B=null)}An.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ko(this.i,this.A),this.L!=2&&(dr(),nt(17)),cn(this),this.s=2,Fr(this)):ml(this,this.S-u)};function Fr(u){u.j.G==0||u.J||Bs(u.j,u)}function cn(u){Mi(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,zo(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function Xo(u,f){try{var y=u.j;if(y.G!=0&&(y.g==u||Bt(y.h,u))){if(!u.K&&Bt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)zs(y),Nn(y);else break e;js(y),nt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Tn(C(y.Za,y),6e3));if(1>=yl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else yr(y,11)}else if((u.K||y.g==u)&&zs(y),!ce(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let De=L[f];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const vt=De[3];vt!=null&&(y.la=vt,y.j.info("VER="+y.la));const ot=De[4];ot!=null&&(y.Aa=ot,y.j.info("SVER="+y.Aa));const dn=De[5];dn!=null&&typeof dn=="number"&&0<dn&&(E=1.5*dn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const sn=u.g;if(sn){const $i=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var j=E.h;j.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Jo(j,j.h),j.h=null))}if(E.D){const qs=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(E.ya=qs,ze(E.I,E.D,qs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var X=u;if(E.qa=Nl(E,E.J?E.ia:null,E.W),X.K){_l(E.h,X);var Fe=X,ft=E.L;ft&&(Fe.I=ft),Fe.B&&(Mi(Fe),$e(Fe)),E.g=X}else Bi(E);0<y.i.length&&Gn(y)}else De[0]!="stop"&&De[0]!="close"||yr(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?yr(y,7):At(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}dr(4)}catch{}}var gl=class{constructor(u,f){this.g=u,this.map=f}};function bi(u){this.l=u||10,m.PerformanceNavigationTiming?(u=m.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function yl(u){return u.h?1:u.g?u.g.size:0}function Bt(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function Jo(u,f){u.g?u.g.add(f):u.h=f}function _l(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}bi.prototype.cancel=function(){if(this.i=vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function vl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const y of u.g.values())f=f.concat(y.D);return f}return K(u.i)}function Vs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var f=[],y=u.length,E=0;E<y;E++)f.push(u[E]);return f}f=[],y=0;for(E in u)f[y++]=u[E];return f}function Os(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var f=[];u=u.length;for(var y=0;y<u;y++)f.push(y);return f}f=[],y=0;for(const E in u)f[y++]=E;return f}}}function Ur(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var y=Os(u),E=Vs(u),L=E.length,j=0;j<L;j++)f.call(void 0,E[j],y&&y[j],u)}var Fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kc(u,f){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),L=null;if(0<=E){var j=u[y].substring(0,E);L=u[y].substring(E+1)}else j=u[y];f(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function fr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof fr){this.h=u.h,Ui(this,u.j),this.o=u.o,this.g=u.g,jr(this,u.s),this.l=u.l;var f=u.i,y=new qn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),zr(this,y),this.m=u.m}else u&&(f=String(u).match(Fi))?(this.h=!1,Ui(this,f[1]||"",!0),this.o=ke(f[2]||""),this.g=ke(f[3]||"",!0),jr(this,f[4]),this.l=ke(f[5]||"",!0),zr(this,f[6]||"",!0),this.m=ke(f[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}fr.prototype.toString=function(){var u=[],f=this.j;f&&u.push($r(f,xs,!0),":");var y=this.g;return(y||f=="file")&&(u.push("//"),(f=this.o)&&u.push($r(f,xs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push($r(y,y.charAt(0)=="/"?Tl:wl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",$r(y,Zo)),u.join("")};function nn(u){return new fr(u)}function Ui(u,f,y){u.j=y?ke(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function jr(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function zr(u,f,y){f instanceof qn?(u.i=f,Hn(u.i,u.h)):(y||(f=$r(f,Il)),u.i=new qn(f,u.h))}function ze(u,f,y){u.i.set(f,y)}function Br(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ke(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function $r(u,f,y){return typeof u=="string"?(u=encodeURI(u).replace(f,El),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function El(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var xs=/[#\/\?@]/g,wl=/[#\?:]/g,Tl=/[#\?]/g,Il=/[#\?@]/g,Zo=/#/g;function qn(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function St(u){u.g||(u.g=new Map,u.h=0,u.i&&kc(u.i,function(f,y){u.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=qn.prototype,i.add=function(u,f){St(this),this.i=null,u=hn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(f),this.h+=1,this};function Rn(u,f){St(u),f=hn(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function Cn(u,f){return St(u),f=hn(u,f),u.g.has(f)}i.forEach=function(u,f){St(this),this.g.forEach(function(y,E){y.forEach(function(L){u.call(f,L,E,this)},this)},this)},i.na=function(){St(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=u[E];for(let j=0;j<L.length;j++)y.push(f[E])}return y},i.V=function(u){St(this);let f=[];if(typeof u=="string")Cn(this,u)&&(f=f.concat(this.g.get(hn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)f=f.concat(u[y])}return f},i.set=function(u,f){return St(this),this.i=null,u=hn(this,u),Cn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},i.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function qr(u,f,y){Rn(u,f),0<y.length&&(u.i=null,u.g.set(hn(u,f),K(y)),u.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const j=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var L=j;X[E]!==""&&(L+="="+encodeURIComponent(String(X[E]))),u.push(L)}}return this.i=u.join("&")};function hn(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function Hn(u,f){f&&!u.j&&(St(u),u.i=null,u.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Rn(this,E),qr(this,L,y))},u)),u.j=f}function Nc(u,f){const y=new Oi;if(m.Image){const E=new Image;E.onload=U(Wt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=U(Wt,y,"TestLoadImage: error",!1,f,E),E.onabort=U(Wt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=U(Wt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else f(!1)}function Sl(u,f){const y=new Oi,E=new AbortController,L=setTimeout(()=>{E.abort(),Wt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:E.signal}).then(j=>{clearTimeout(L),j.ok?Wt(y,"TestPingServer: ok",!0,f):Wt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Wt(y,"TestPingServer: error",!1,f)})}function Wt(u,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Dc(){this.g=new qo}function Al(u,f,y){const E=y||"";try{Ur(u,function(L,j){let X=L;_(L)&&(X=Bo(L)),f.push(E+j+"="+encodeURIComponent(X))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function pr(u){this.l=u.Ub||null,this.j=u.eb||!1}G(pr,Di),pr.prototype.g=function(){return new ji(this.l,this.j)},pr.prototype.i=(function(u){return function(){return u}})({});function ji(u,f){ht.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(ji,ht),i=ji.prototype,i.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,kn(this)},i.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},i.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}i.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?Pn(this):kn(this),this.readyState==3&&Rl(this)}},i.Ra=function(u){this.g&&(this.response=this.responseText=u,Pn(this))},i.Qa=function(u){this.g&&(this.response=u,Pn(this))},i.ga=function(){this.g&&Pn(this)};function Pn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,kn(u)}i.setRequestHeader=function(u,f){this.u.append(u,f)},i.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=f.next();return u.join(`\r
`)};function kn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function mr(u){let f="";return Te(u,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Hr(u,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=mr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,f,y))}function Qe(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(Qe,ht);var Vc=/^https?$/i,ea=["POST","PUT"];i=Qe.prototype,i.Ha=function(u){this.J=u},i.ea=function(u,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?Ss(this.o):Ss(Sn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(j){zi(this,j);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())y.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),L=m.FormData&&u instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ea,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of y)this.g.setRequestHeader(j,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ms(this),this.u=!0,this.g.send(u),this.u=!1}catch(j){zi(this,j)}};function zi(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,Ls(u),rn(u)}function Ls(u){u.A||(u.A=!0,dt(u,"complete"),dt(u,"error"))}i.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,dt(this,"complete"),dt(this,"abort"),rn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rn(this,!0)),Qe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?ta(this):this.bb())},i.bb=function(){ta(this)};function ta(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)Uo(u.Ea,0,u);else if(dt(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const X=u.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=X===0){var L=String(u.D).match(Fi)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Vc.test(L?L.toLowerCase():"")}y=E}if(y)dt(u,"complete"),dt(u,"success");else{u.m=6;try{var j=2<Gt(u)?u.g.statusText:""}catch{j=""}u.l=j+" ["+u.Z()+"]",Ls(u)}}finally{rn(u)}}}}function rn(u,f){if(u.g){Ms(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||dt(u,"ready");try{y.onreadystatechange=E}catch{}}}function Ms(u){u.I&&(m.clearTimeout(u.I),u.I=null)}i.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}i.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),$o(f)}};function na(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function bs(u){const f={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(ce(u[E]))continue;var y=V(u[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=f[L]||[];f[L]=j,j.push(y)}D(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(u,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||f}function ra(u){this.Aa=0,this.i=[],this.j=new Oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,u),this.cb=Wn("retryDelaySeedMs",1e4,u),this.Wa=Wn("forwardChannelMaxRetries",2,u),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new bi(u&&u.concurrentRequestLimit),this.Da=new Dc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=ra.prototype,i.la=8,i.G=1,i.connect=function(u,f,y,E){nt(0),this.W=u,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Nl(this,null,this.W),Gn(this)};function At(u){if(Fs(u),u.G==3){var f=u.U++,y=nn(u.I);if(ze(y,"SID",u.K),ze(y,"RID",f),ze(y,"TYPE","terminate"),gr(u,y),f=new An(u,u.j,f),f.L=2,f.v=Br(nn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=Dl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}kl(u)}function Nn(u){u.g&&(ia(u),u.g.cancel(),u.g=null)}function Fs(u){Nn(u),u.u&&(m.clearTimeout(u.u),u.u=null),zs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&m.clearTimeout(u.s),u.s=null)}function Gn(u){if(!tn(u.h)&&!u.s){u.s=!0;var f=u.Ga;Ue||re(),J||(Ue(),J=!0),de.add(f,u),u.B=0}}function Oc(u,f){return yl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Tn(C(u.Ga,u,f),Pl(u,u.B)),u.B++,!0)}i.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new An(this,this.j,u);let j=this.o;if(this.S&&(j?(j=S(j),k(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Wr(this,L,f),y=nn(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),gr(this,y),j&&(this.O?f="headers="+encodeURIComponent(String(mr(j)))+"&"+f:this.m&&Hr(y,this.m,j)),Jo(this.h,L),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",f),ze(y,"SID","null"),L.T=!0,Ds(L,y,null)):Ds(L,y,f),this.G=2}}else this.G==3&&(u?Us(this,u):this.i.length==0||tn(this.h)||Us(this))};function Us(u,f){var y;f?y=f.l:y=u.U++;const E=nn(u.I);ze(E,"SID",u.K),ze(E,"RID",y),ze(E,"AID",u.T),gr(u,E),u.m&&u.o&&Hr(E,u.m,u.o),y=new An(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),f&&(u.i=f.D.concat(u.i)),f=Wr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Jo(u.h,y),Ds(y,E,f)}function gr(u,f){u.H&&Te(u.H,function(y,E){ze(f,E,y)}),u.l&&Ur({},function(y,E){ze(f,E,y)})}function Wr(u,f,y){y=Math.min(u.i.length,y);var E=u.l?C(u.l.Na,u.l,u):null;e:{var L=u.i;let j=-1;for(;;){const X=["count="+y];j==-1?0<y?(j=L[0].g,X.push("ofs="+j)):j=0:X.push("ofs="+j);let Fe=!0;for(let ft=0;ft<y;ft++){let De=L[ft].g;const vt=L[ft].map;if(De-=j,0>De)j=Math.max(0,L[ft].g-100),Fe=!1;else try{Al(vt,X,"req"+De+"_")}catch{E&&E(vt)}}if(Fe){E=X.join("&");break e}}}return u=u.i.splice(0,y),f.D=u,E}function Bi(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;Ue||re(),J||(Ue(),J=!0),de.add(f,u),u.v=0}}function js(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Tn(C(u.Fa,u),Pl(u,u.v)),u.v++,!0)}i.Fa=function(){if(this.u=null,Cl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Tn(C(this.ab,this),u)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Nn(this),Cl(this))};function ia(u){u.A!=null&&(m.clearTimeout(u.A),u.A=null)}function Cl(u){u.g=new An(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=nn(u.qa);ze(f,"RID","rpc"),ze(f,"SID",u.K),ze(f,"AID",u.T),ze(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(f,"TO",u.ja),ze(f,"TYPE","xmlhttp"),gr(u,f),u.m&&u.o&&Hr(f,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Br(nn(f)),y.m=null,y.P=!0,Yo(y,u)}i.Za=function(){this.C!=null&&(this.C=null,Nn(this),js(this),nt(19))};function zs(u){u.C!=null&&(m.clearTimeout(u.C),u.C=null)}function Bs(u,f){var y=null;if(u.g==f){zs(u),ia(u),u.g=null;var E=2}else if(Bt(u.h,f))y=f.D,_l(u.h,f),E=1;else return;if(u.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=u.B;E=Vi(),dt(E,new Cs(E,y)),Gn(u)}else Bi(u);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Oc(u,f)||E==2&&js(u)))switch(y&&0<y.length&&(f=u.h,f.i=f.i.concat(y)),L){case 1:yr(u,5);break;case 4:yr(u,10);break;case 3:yr(u,6);break;default:yr(u,2)}}}function Pl(u,f){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*f}function yr(u,f){if(u.j.info("Error code "+f),f==2){var y=C(u.fb,u),E=u.Xa;const L=!E;E=new fr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ui(E,"https"),Br(E),L?Nc(E.toString(),y):Sl(E.toString(),y)}else nt(2);u.G=0,u.l&&u.l.sa(f),kl(u),Fs(u)}i.fb=function(u){u?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function kl(u){if(u.G=0,u.ka=[],u.l){const f=vl(u.h);(f.length!=0||u.i.length!=0)&&(B(u.ka,f),B(u.ka,u.i),u.h.i.length=0,K(u.i),u.i.length=0),u.l.ra()}}function Nl(u,f,y){var E=y instanceof fr?nn(y):new fr(y);if(E.g!="")f&&(E.g=f+"."+E.g),jr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var j=new fr(null);E&&Ui(j,E),f&&(j.g=f),L&&jr(j,L),y&&(j.l=y),E=j}return y=u.D,f=u.ya,y&&f&&ze(E,y,f),ze(E,"VER",u.la),gr(u,E),E}function Dl(u,f,y){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new Qe(new pr({eb:y})):new Qe(u.pa),f.Ha(u.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function sa(){}i=sa.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function $s(){}$s.prototype.g=function(u,f){return new $t(u,f)};function $t(u,f){ht.call(this),this.g=new ra(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!ce(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ce(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new Kn(this)}G($t,ht),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){At(this.g)},$t.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Bo(u),u=y);f.i.push(new gl(f.Ya++,u)),f.G==3&&Gn(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,$t.aa.N.call(this)};function Vl(u){Bn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const y in f){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}G(Vl,Bn);function Ol(){Rs.call(this),this.status=1}G(Ol,Rs);function Kn(u){this.g=u}G(Kn,sa),Kn.prototype.ua=function(){dt(this.g,"a")},Kn.prototype.ta=function(u){dt(this.g,new Vl(u))},Kn.prototype.sa=function(u){dt(this.g,new Ol)},Kn.prototype.ra=function(){dt(this.g,"b")},$s.prototype.createWebChannel=$s.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,L_=function(){return new $s},x_=function(){return Vi()},O_=$n,Sd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ks.NO_ERROR=0,ks.TIMEOUT=8,ks.HTTP_ERROR=6,bu=ks,dl.COMPLETE="complete",V_=dl,As.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Va=As,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,D_=Qe}).apply(typeof Cu<"u"?Cu:typeof self<"u"?self:typeof window<"u"?window:{});const kg="@firebase/firestore",Ng="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let No="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new $d("@firebase/firestore");function ho(){return hs.logLevel}function ne(i,...e){if(hs.logLevel<=Ce.DEBUG){const t=e.map(tf);hs.debug(`Firestore (${No}): ${i}`,...t)}}function Vr(i,...e){if(hs.logLevel<=Ce.ERROR){const t=e.map(tf);hs.error(`Firestore (${No}): ${i}`,...t)}}function _i(i,...e){if(hs.logLevel<=Ce.WARN){const t=e.map(tf);hs.warn(`Firestore (${No}): ${i}`,...t)}}function tf(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ye(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,M_(i,s,t)}function M_(i,e,t){let s=`FIRESTORE (${No}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Vr(s),new Error(s)}function be(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||M_(e,o,s)}function Ee(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Lr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class b_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class vS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ES{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new kr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new kr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string",31837,{l:s}),new b_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class wS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class TS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new wS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Dg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){be(this.o===void 0,3512);const s=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Dg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Dg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function F_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=SS(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Se(i,e){return i<e?-1:i>e?1:0}function Ad(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Se(s,o);{const l=F_(),h=AS(l.encode(Vg(i,t)),l.encode(Vg(e,t)));return h!==0?h:Se(s,o)}}t+=s>65535?2:1}return Se(i.length,e.length)}function Vg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function AS(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Se(i[t],e[t]);return Se(i.length,e.length)}function To(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="__name__";class Zn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ye(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Zn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=Zn.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Se(e.length,t.length)}static compareSegments(e,t){const s=Zn.isNumericId(e),o=Zn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Zn.extractNumericId(e).compare(Zn.extractNumericId(t)):Ad(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gi.fromString(e.substring(4,e.length-2))}}class He extends Zn{construct(e,t,s){return new He(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ee(z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const RS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Zn{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return RS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Og}static keyField(){return new kt([Og])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ee(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ee(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(l(),o++)}if(l(),h)throw new ee(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(He.fromString(e))}static fromName(e){return new ue(He.fromString(e).popFirst(5))}static empty(){return new ue(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new He(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(i,e,t){if(!t)throw new ee(z.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function CS(i,e,t,s){if(e===!0&&s===!0)throw new ee(z.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function xg(i){if(!ue.isDocumentKey(i))throw new ee(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Lg(i){if(ue.isDocumentKey(i))throw new ee(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function j_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function dc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ye(12329,{type:typeof i})}function Un(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ee(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=dc(i);throw new ee(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function ct(i,e){const t={typeString:i};return e&&(t.value=e),t}function ol(i,e){if(!j_(i))throw new ee(z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ee(z.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=-62135596800,bg=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*bg);return new Ke(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Mg)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bg}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ol(e,Ke._jsonSchema))return new Ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Mg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ke._jsonSchemaVersion="firestore/timestamp/1.0",Ke._jsonSchema={type:ct("string",Ke._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Ke(0,0))}static max(){return new ve(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ha=-1;function PS(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new Ke(t+1,0):new Ke(t,s));return new vi(o,ue.empty(),e)}function kS(i){return new vi(i.readTime,i.key,Ha)}class vi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new vi(ve.min(),ue.empty(),Ha)}static max(){return new vi(ve.max(),ue.empty(),Ha)}}function NS(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(i.documentKey,e.documentKey),t!==0?t:Se(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(i){if(i.code!==z.FAILED_PRECONDITION||i.message!==DS)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,l=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const l=e.length,h=new Array(l);let m=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++m,m===l&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function OS(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Vo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class fc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}fc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=-1;function pc(i){return i==null}function Xu(i){return i===0&&1/i==-1/0}function xS(i){return typeof i=="number"&&Number.isInteger(i)&&!Xu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="";function LS(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Fg(e)),e=MS(i.get(t),e);return Fg(e)}function MS(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const l=i.charAt(o);switch(l){case"\0":t+="";break;case z_:t+="";break;default:t+=l}}return t}function Fg(i){return i+z_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ms(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function B_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pu(this.root,e,this.comparator,!0)}}class Pu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jg(this.data.getIterator())}getIteratorFrom(e){return new jg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class jg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new Fn([])}unionWith(e){let t=new yt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class $_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new $_("Invalid base64 string: "+l):l}})(e);return new Nt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const bS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(i){if(be(!!i,39018),typeof i=="string"){let e=0;const t=bS.exec(i);if(be(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(i.seconds),nanos:it(i.nanos)}}function it(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function wi(i){return typeof i=="string"?Nt.fromBase64String(i):Nt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="server_timestamp",H_="__type__",W_="__previous_value__",G_="__local_write_time__";function sf(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[H_])===null||t===void 0?void 0:t.stringValue)===q_}function mc(i){const e=i.mapValue.fields[W_];return sf(e)?mc(e):e}function Wa(i){const e=Ei(i.mapValue.fields[G_].timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,t,s,o,l,h,m,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const Ju="(default)";class Ga{constructor(e,t){this.projectId=e,this.database=t||Ju}static empty(){return new Ga("","")}get isDefaultDatabase(){return this.database===Ju}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="__type__",US="__max__",ku={mapValue:{}},Q_="__vector__",Zu="value";function Ti(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?sf(i)?4:zS(i)?9007199254740991:jS(i)?10:11:ye(28295,{value:i})}function ar(i,e){if(i===e)return!0;const t=Ti(i);if(t!==Ti(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Wa(i).isEqual(Wa(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ei(o.timestampValue),m=Ei(l.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,l){return wi(o.bytesValue).isEqual(wi(l.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,l){return it(o.geoPointValue.latitude)===it(l.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(l.geoPointValue.longitude)})(i,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return it(o.integerValue)===it(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=it(o.doubleValue),m=it(l.doubleValue);return h===m?Xu(h)===Xu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return To(i.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},m=l.mapValue.fields||{};if(Ug(h)!==Ug(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!ar(h[g],m[g])))return!1;return!0})(i,e);default:return ye(52216,{left:i})}}function Ka(i,e){return(i.values||[]).find((t=>ar(t,e)))!==void 0}function Io(i,e){if(i===e)return 0;const t=Ti(i),s=Ti(e);if(t!==s)return Se(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(i.booleanValue,e.booleanValue);case 2:return(function(l,h){const m=it(l.integerValue||l.doubleValue),g=it(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(i,e);case 3:return zg(i.timestampValue,e.timestampValue);case 4:return zg(Wa(i),Wa(e));case 5:return Ad(i.stringValue,e.stringValue);case 6:return(function(l,h){const m=wi(l),g=wi(h);return m.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(l,h){const m=l.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=Se(m[_],g[_]);if(w!==0)return w}return Se(m.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(l,h){const m=Se(it(l.latitude),it(h.latitude));return m!==0?m:Se(it(l.longitude),it(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Bg(i.arrayValue,e.arrayValue);case 10:return(function(l,h){var m,g,_,w;const T=l.fields||{},C=h.fields||{},U=(m=T[Zu])===null||m===void 0?void 0:m.arrayValue,G=(g=C[Zu])===null||g===void 0?void 0:g.arrayValue,K=Se(((_=U==null?void 0:U.values)===null||_===void 0?void 0:_.length)||0,((w=G==null?void 0:G.values)===null||w===void 0?void 0:w.length)||0);return K!==0?K:Bg(U,G)})(i.mapValue,e.mapValue);case 11:return(function(l,h){if(l===ku.mapValue&&h===ku.mapValue)return 0;if(l===ku.mapValue)return 1;if(h===ku.mapValue)return-1;const m=l.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const C=Ad(g[T],w[T]);if(C!==0)return C;const U=Io(m[g[T]],_[w[T]]);if(U!==0)return U}return Se(g.length,w.length)})(i.mapValue,e.mapValue);default:throw ye(23264,{le:t})}}function zg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Se(i,e);const t=Ei(i),s=Ei(e),o=Se(t.seconds,s.seconds);return o!==0?o:Se(t.nanos,s.nanos)}function Bg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Io(t[o],s[o]);if(l)return l}return Se(t.length,s.length)}function So(i){return Rd(i)}function Rd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Ei(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return wi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return ue.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Rd(l);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Rd(t.fields[h])}`;return o+"}"})(i.mapValue):ye(61005,{value:i})}function Fu(i){switch(Ti(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mc(i);return e?16+Fu(e):16;case 5:return 2*i.stringValue.length;case 6:return wi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Fu(l)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return ms(s.fields,((l,h)=>{o+=l.length+Fu(h)})),o})(i.mapValue);default:throw ye(13486,{value:i})}}function $g(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Cd(i){return!!i&&"integerValue"in i}function of(i){return!!i&&"arrayValue"in i}function qg(i){return!!i&&"nullValue"in i}function Hg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Uu(i){return!!i&&"mapValue"in i}function jS(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[K_])===null||t===void 0?void 0:t.stringValue)===Q_}function Fa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ms(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Fa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function zS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===US}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Uu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fa(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Fa(h):o.push(m.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Uu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Uu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ms(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new En(Fa(this.value))}}function Y_(i){const e=[];return ms(i.fields,((t,s)=>{const o=new kt([t]);if(Uu(s)){const l=Y_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new Fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,s,o,l,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,ve.min(),ve.min(),ve.min(),En.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,ve.min(),ve.min(),En.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,ve.min(),ve.min(),En.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ec{constructor(e,t){this.position=e,this.inclusive=t}}function Wg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const l=e[o],h=i.position[o];if(l.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=Io(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ar(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Qa{constructor(e,t="asc"){this.field=e,this.dir=t}}function BS(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class X_{}class ut extends X_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new qS(e,t,s):t==="array-contains"?new GS(e,s):t==="in"?new KS(e,s):t==="not-in"?new QS(e,s):t==="array-contains-any"?new YS(e,s):new ut(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new HS(e,s):new WS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Io(t,this.value)):t!==null&&Ti(this.value)===Ti(t)&&this.matchesComparison(Io(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends X_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new zn(e,t)}matches(e){return J_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function J_(i){return i.op==="and"}function Z_(i){return $S(i)&&J_(i)}function $S(i){for(const e of i.filters)if(e instanceof zn)return!1;return!0}function Pd(i){if(i instanceof ut)return i.field.canonicalString()+i.op.toString()+So(i.value);if(Z_(i))return i.filters.map((e=>Pd(e))).join(",");{const e=i.filters.map((t=>Pd(t))).join(",");return`${i.op}(${e})`}}function ev(i,e){return i instanceof ut?(function(s,o){return o instanceof ut&&s.op===o.op&&s.field.isEqual(o.field)&&ar(s.value,o.value)})(i,e):i instanceof zn?(function(s,o){return o instanceof zn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,m)=>l&&ev(h,o.filters[m])),!0):!1})(i,e):void ye(19439)}function tv(i){return i instanceof ut?(function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`})(i):i instanceof zn?(function(t){return t.op.toString()+" {"+t.getFilters().map(tv).join(" ,")+"}"})(i):"Filter"}class qS extends ut{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class HS extends ut{constructor(e,t){super(e,"in",t),this.keys=nv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class WS extends ut{constructor(e,t){super(e,"not-in",t),this.keys=nv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function nv(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>ue.fromName(s.referenceValue)))}class GS extends ut{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return of(t)&&Ka(t.arrayValue,this.value)}}class KS extends ut{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ka(this.value.arrayValue,t)}}class QS extends ut{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ka(this.value.arrayValue,t)}}class YS extends ut{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!of(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ka(this.value.arrayValue,s)))}}/**
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
 */class XS{constructor(e,t=null,s=[],o=[],l=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=m,this.Pe=null}}function Kg(i,e=null,t=[],s=[],o=null,l=null,h=null){return new XS(i,e,t,s,o,l,h)}function af(i){const e=Ee(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Pd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),pc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>So(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>So(s))).join(",")),e.Pe=t}return e.Pe}function lf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!BS(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!ev(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Gg(i.startAt,e.startAt)&&Gg(i.endAt,e.endAt)}function kd(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t=null,s=[],o=[],l=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function JS(i,e,t,s,o,l,h,m){return new Oo(i,e,t,s,o,l,h,m)}function gc(i){return new Oo(i)}function Qg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function rv(i){return i.collectionGroup!==null}function Ua(i){const e=Ee(i);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(kt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Qa(l,s))})),t.has(kt.keyField().canonicalString())||e.Te.push(new Qa(kt.keyField(),s))}return e.Te}function nr(i){const e=Ee(i);return e.Ie||(e.Ie=ZS(e,Ua(i))),e.Ie}function ZS(i,e){if(i.limitType==="F")return Kg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Qa(o.field,l)}));const t=i.endAt?new ec(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new ec(i.startAt.position,i.startAt.inclusive):null;return Kg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Nd(i,e){const t=i.filters.concat([e]);return new Oo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Dd(i,e,t){return new Oo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function yc(i,e){return lf(nr(i),nr(e))&&i.limitType===e.limitType}function iv(i){return`${af(nr(i))}|lt:${i.limitType}`}function fo(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>tv(o))).join(", ")}]`),pc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>So(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>So(o))).join(",")),`Target(${s})`})(nr(i))}; limitType=${i.limitType})`}function _c(i,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ue.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(i,e)&&(function(s,o){for(const l of Ua(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=Wg(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Ua(s),o)||s.endAt&&!(function(h,m,g){const _=Wg(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Ua(s),o))})(i,e)}function eA(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function sv(i){return(e,t)=>{let s=!1;for(const o of Ua(i)){const l=tA(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function tA(i,e,t){const s=i.field.isKeyField()?ue.comparator(e.key,t.key):(function(l,h,m){const g=h.data.field(l),_=m.data.field(l);return g!==null&&_!==null?Io(g,_):ye(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return B_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=new Ze(ue.comparator);function Or(){return nA}const ov=new Ze(ue.comparator);function Oa(...i){let e=ov;for(const t of i)e=e.insert(t.key,t);return e}function av(i){let e=ov;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function rs(){return ja()}function lv(){return ja()}function ja(){return new gs((i=>i.toString()),((i,e)=>i.isEqual(e)))}const rA=new Ze(ue.comparator),iA=new yt(ue.comparator);function Pe(...i){let e=iA;for(const t of i)e=e.add(t);return e}const sA=new yt(Se);function oA(){return sA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xu(e)?"-0":e}}function uv(i){return{integerValue:""+i}}function aA(i,e){return xS(e)?uv(e):uf(i,e)}/**
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
 */class vc{constructor(){this._=void 0}}function lA(i,e,t){return i instanceof Ya?(function(o,l){const h={fields:{[H_]:{stringValue:q_},[G_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&sf(l)&&(l=mc(l)),l&&(h.fields[W_]=l),{mapValue:h}})(t,e):i instanceof Xa?hv(i,e):i instanceof Ja?dv(i,e):(function(o,l){const h=cv(o,l),m=Yg(h)+Yg(o.Ee);return Cd(h)&&Cd(o.Ee)?uv(m):uf(o.serializer,m)})(i,e)}function uA(i,e,t){return i instanceof Xa?hv(i,e):i instanceof Ja?dv(i,e):t}function cv(i,e){return i instanceof tc?(function(s){return Cd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Ya extends vc{}class Xa extends vc{constructor(e){super(),this.elements=e}}function hv(i,e){const t=fv(e);for(const s of i.elements)t.some((o=>ar(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ja extends vc{constructor(e){super(),this.elements=e}}function dv(i,e){let t=fv(e);for(const s of i.elements)t=t.filter((o=>!ar(o,s)));return{arrayValue:{values:t}}}class tc extends vc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Yg(i){return it(i.integerValue||i.doubleValue)}function fv(i){return of(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,t){this.field=e,this.transform=t}}function hA(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Xa&&o instanceof Xa||s instanceof Ja&&o instanceof Ja?To(s.elements,o.elements,ar):s instanceof tc&&o instanceof tc?ar(s.Ee,o.Ee):s instanceof Ya&&o instanceof Ya})(i.transform,e.transform)}class dA{constructor(e,t){this.version=e,this.transformResults=t}}class rr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rr}static exists(e){return new rr(void 0,e)}static updateTime(e){return new rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Ec{}function pv(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new gv(i.key,rr.none()):new al(i.key,i.data,rr.none());{const t=i.data,s=En.empty();let o=new yt(kt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new ys(i.key,s,new Fn(o.toArray()),rr.none())}}function fA(i,e,t){i instanceof al?(function(o,l,h){const m=o.value.clone(),g=Jg(o.fieldTransforms,l,h.transformResults);m.setAll(g),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof ys?(function(o,l,h){if(!ju(o.precondition,l))return void l.convertToUnknownDocument(h.version);const m=Jg(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(mv(o)),g.setAll(m),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function za(i,e,t,s){return i instanceof al?(function(l,h,m,g){if(!ju(l.precondition,h))return m;const _=l.value.clone(),w=Zg(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof ys?(function(l,h,m,g){if(!ju(l.precondition,h))return m;const _=Zg(l.fieldTransforms,g,h),w=h.data;return w.setAll(mv(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(i,e,t,s):(function(l,h,m){return ju(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function pA(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),l=cv(s.transform,o||null);l!=null&&(t===null&&(t=En.empty()),t.set(s.field,l))}return t||null}function Xg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&To(s,o,((l,h)=>hA(l,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class al extends Ec{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ys extends Ec{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function mv(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Jg(i,e,t){const s=new Map;be(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let o=0;o<t.length;o++){const l=i[o],h=l.transform,m=e.data.field(l.field);s.set(l.field,uA(h,m,t[o]))}return s}function Zg(i,e,t){const s=new Map;for(const o of i){const l=o.transform,h=t.data.field(o.field);s.set(o.field,lA(l,h,e))}return s}class gv extends Ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mA extends Ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&fA(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=za(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=za(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=lv();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let m=this.applyToLocalView(h,l.mutatedFields);m=t.has(o.key)?null:m;const g=pv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,((t,s)=>Xg(t,s)))&&To(this.baseMutations,e.baseMutations,((t,s)=>Xg(t,s)))}}class cf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return rA})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new cf(e,t,s,o)}}/**
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
 */class yA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _A{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,Ve;function vA(i){switch(i){case z.OK:return ye(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return ye(15467,{code:i})}}function yv(i){if(i===void 0)return Vr("GRPC error has no .code"),z.UNKNOWN;switch(i){case lt.OK:return z.OK;case lt.CANCELLED:return z.CANCELLED;case lt.UNKNOWN:return z.UNKNOWN;case lt.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case lt.INTERNAL:return z.INTERNAL;case lt.UNAVAILABLE:return z.UNAVAILABLE;case lt.UNAUTHENTICATED:return z.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case lt.NOT_FOUND:return z.NOT_FOUND;case lt.ALREADY_EXISTS:return z.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return z.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case lt.ABORTED:return z.ABORTED;case lt.OUT_OF_RANGE:return z.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return z.UNIMPLEMENTED;case lt.DATA_LOSS:return z.DATA_LOSS;default:return ye(39323,{code:i})}}(Ve=lt||(lt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const EA=new gi([4294967295,4294967295],0);function ey(i){const e=F_().encode(i),t=new N_;return t.update(e),new Uint8Array(t.digest())}function ty(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new gi([t,s],0),new gi([o,l],0)]}class hf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new xa(`Invalid padding: ${t}`);if(s<0)throw new xa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new xa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new xa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=gi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(gi.fromNumber(s)));return o.compare(EA)===1&&(o=new gi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ey(e),[s,o]=ty(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new hf(l,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=ey(e),[s,o]=ty(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ll.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new wc(ve.min(),o,new Ze(Se),Or(),Pe())}}class ll{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ll(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class _v{constructor(e,t){this.targetId=e,this.De=t}}class vv{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class ny{constructor(){this.ve=0,this.Ce=ry(),this.Fe=Nt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),t=Pe(),s=Pe();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye(38017,{changeType:l})}})),new ll(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=ry()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class wA{constructor(e){this.We=e,this.Ge=new Map,this.ze=Or(),this.je=Nu(),this.Je=Nu(),this.He=new Ze(Se)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(kd(l))if(s===0){const h=new ue(l.path);this.Xe(t,h,Ut.newNoDocument(h,ve.min()))}else be(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),g=m?this.ut(m,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,m;try{h=wi(s).toUint8Array()}catch(g){if(g instanceof $_)return _i("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new hf(h,o,l)}catch(g){return _i(g instanceof xa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const m=this.st(h);if(m){if(l.current&&kd(m.target)){const g=new ue(m.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,Ut.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=Pe();this.Je.forEach(((l,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new wc(e,t,this.He,this.ze,s);return this.ze=Or(),this.je=Nu(),this.Je=Nu(),this.He=new Ze(Se),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new ny,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new yt(Se),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new yt(Se),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ny),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Nu(){return new Ze(ue.comparator)}function ry(){return new Ze(ue.comparator)}const TA={asc:"ASCENDING",desc:"DESCENDING"},IA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SA={and:"AND",or:"OR"};class AA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vd(i,e){return i.useProto3Json||pc(e)?e:{value:e}}function nc(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ev(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function RA(i,e){return nc(i,e.toTimestamp())}function ir(i){return be(!!i,49232),ve.fromTimestamp((function(t){const s=Ei(t);return new Ke(s.seconds,s.nanos)})(i))}function df(i,e){return Od(i,e).canonicalString()}function Od(i,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function wv(i){const e=He.fromString(i);return be(Rv(e),10190,{key:e.toString()}),e}function xd(i,e){return df(i.databaseId,e.path)}function ld(i,e){const t=wv(e);if(t.get(1)!==i.databaseId.projectId)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ue(Iv(t))}function Tv(i,e){return df(i.databaseId,e)}function CA(i){const e=wv(i);return e.length===4?He.emptyPath():Iv(e)}function Ld(i){return new He(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Iv(i){return be(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function iy(i,e,t){return{name:xd(i,e),fields:t.value.mapValue.fields}}function PA(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ye(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,w){return _.useProto3Json?(be(w===void 0||typeof w=="string",58123),Nt.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Nt.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const w=_.code===void 0?z.UNKNOWN:yv(_.code);return new ee(w,_.message||"")})(h);t=new vv(s,o,l,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=ld(i,s.document.name),l=ir(s.document.updateTime),h=s.document.createTime?ir(s.document.createTime):ve.min(),m=new En({mapValue:{fields:s.document.fields}}),g=Ut.newFoundDocument(o,l,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new zu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=ld(i,s.document),l=s.readTime?ir(s.readTime):ve.min(),h=Ut.newNoDocument(o,l),m=s.removedTargetIds||[];t=new zu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=ld(i,s.document),l=s.removedTargetIds||[];t=new zu([],l,o,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new _A(o,l),m=s.targetId;t=new _v(m,h)}}return t}function kA(i,e){let t;if(e instanceof al)t={update:iy(i,e.key,e.value)};else if(e instanceof gv)t={delete:xd(i,e.key)};else if(e instanceof ys)t={update:iy(i,e.key,e.data),updateMask:FA(e.fieldMask)};else{if(!(e instanceof mA))return ye(16599,{Rt:e.type});t={verify:xd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const m=h.transform;if(m instanceof Ya)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Xa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ja)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof tc)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw ye(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:RA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ye(27497)})(i,e.precondition)),t}function NA(i,e){return i&&i.length>0?(be(e!==void 0,14353),i.map((t=>(function(o,l){let h=o.updateTime?ir(o.updateTime):ir(l);return h.isEqual(ve.min())&&(h=ir(l)),new dA(h,o.transformResults||[])})(t,e)))):[]}function DA(i,e){return{documents:[Tv(i,e.path)]}}function VA(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Tv(i,o);const l=(function(_){if(_.length!==0)return Av(zn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((w=>(function(C){return{field:po(C.field),direction:LA(C.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Vd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function OA(i){let e=CA(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(T){const C=Sv(T);return C instanceof zn&&Z_(C)?C.getFilters():[C]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((C=>(function(G){return new Qa(mo(G.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(G.direction))})(C)))})(t.orderBy));let m=null;t.limit&&(m=(function(T){let C;return C=typeof T=="object"?T.value:T,pc(C)?null:C})(t.limit));let g=null;t.startAt&&(g=(function(T){const C=!!T.before,U=T.values||[];return new ec(U,C)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const C=!T.before,U=T.values||[];return new ec(U,C)})(t.endAt)),JS(e,o,h,l,m,"F",g,_)}function xA(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sv(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=mo(t.unaryFilter.field);return ut.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=mo(t.unaryFilter.field);return ut.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=mo(t.unaryFilter.field);return ut.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=mo(t.unaryFilter.field);return ut.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(i):i.fieldFilter!==void 0?(function(t){return ut.create(mo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return zn.create(t.compositeFilter.filters.map((s=>Sv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(i):ye(30097,{filter:i})}function LA(i){return TA[i]}function MA(i){return IA[i]}function bA(i){return SA[i]}function po(i){return{fieldPath:i.canonicalString()}}function mo(i){return kt.fromServerFormat(i.fieldPath)}function Av(i){return i instanceof ut?(function(t){if(t.op==="=="){if(Hg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NAN"}};if(qg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Hg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NAN"}};if(qg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:po(t.field),op:MA(t.op),value:t.value}}})(i):i instanceof zn?(function(t){const s=t.getFilters().map((o=>Av(o)));return s.length===1?s[0]:{compositeFilter:{op:bA(t.op),filters:s}}})(i):ye(54877,{filter:i})}function FA(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Rv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,s,o,l=ve.min(),h=ve.min(),m=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.gt=e}}function jA(i){const e=OA({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Dd(e,e.limit,"L"):e}/**
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
 */class zA{constructor(){this.Dn=new BA}addToCollectionParentIndex(e,t){return this.Dn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(vi.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(vi.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class BA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(He.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(He.comparator)).toArray()}}/**
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
 */const sy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Cv=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(Cv,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ao(0)}static ur(){return new Ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="LruGarbageCollector",$A=1048576;function ay([i,e],[t,s]){const o=Se(i,t);return o===0?Se(e,s):o}class qA{constructor(e){this.Tr=e,this.buffer=new yt(ay),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ay(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class HA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ne(oy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Vo(t)?ne(oy,"Ignoring IndexedDB error during garbage collection: ",t):await Do(t)}await this.Rr(3e5)}))}}class WA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(fc.ue);const s=new qA(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(sy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,m=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(_=Date.now(),ho()<=Ce.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${l} targets in `+(g-m)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function GA(i,e){return new WA(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.changes=new gs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class QA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&za(s.mutation,o,Fn.empty(),Ke.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Pe()){const o=rs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Oa();return l.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=rs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Pe())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let l=Or();const h=ja(),m=(function(){return ja()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof ys)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),za(w.mutation,_,w.mutation.getFieldMask(),Ke.now())):h.set(_.key,Fn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var T;return m.set(_,new QA(w,(T=h.get(_))!==null&&T!==void 0?T:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=ja();let o=new Ze(((h,m)=>h-m)),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||Fn.empty();w=m.applyToLocalView(_,w),s.set(g,w);const T=(o.get(m.batchId)||Pe()).add(g);o=o.insert(m.batchId,T)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,T=lv();w.forEach((C=>{if(!l.has(C)){const U=pv(t.get(C),s.get(C));U!==null&&T.set(C,U),l=l.add(C)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):$.resolve(rs());let m=Ha,g=l;return h.next((_=>$.forEach(_,((w,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),l.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((C=>{g=g.insert(w,C)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,Pe()))).next((w=>({batchId:m,changes:av(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next((s=>{let o=Oa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Oa();return this.indexManager.getCollectionParents(e,l).next((m=>$.forEach(m,(g=>{const _=(function(T,C){return new Oo(C,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((T,C)=>{h=h.insert(T,C)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ut.newInvalidDocument(w)))}));let m=Oa();return h.forEach(((g,_)=>{const w=l.get(g);w!==void 0&&za(w.mutation,_,Fn.empty(),Ke.now()),_c(t,_)&&(m=m.insert(g,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return $.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:ir(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:jA(o.bundledQuery),readTime:ir(o.readTime)}})(t)),$.resolve()}}/**
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
 */class JA{constructor(){this.overlays=new Ze(ue.comparator),this.kr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=rs();return $.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=rs(),l=t.length+1,h=new ue(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new Ze(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=l.get(_.largestBatchId);w===null&&(w=rs(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=rs(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=o)););return $.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new yA(t,s));let l=this.kr.get(t);l===void 0&&(l=Pe(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class ZA{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.qr=new yt(It.Qr),this.$r=new yt(It.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new It(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new It(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new ue(new He([])),s=new It(t,e),o=new It(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ue(new He([])),s=new It(t,e),o=new It(t,e+1);let l=Pe();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new It(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ue.comparator(e.key,t.key)||Se(e.Hr,t.Hr)}static Ur(e,t){return Se(e.Hr,t.Hr)||ue.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new yt(It.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new gA(l,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new It(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return $.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?rf:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);l.push(m)})),$.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Se);return t.forEach((o=>{const l=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(m=>{s=s.add(m.Hr)}))})),$.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ue.isDocumentKey(l)||(l=l.child(""));const h=new It(new ue(l),0);let m=new yt(Se);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Hr)),!0)}),h),$.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){be(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return $.forEach(t.mutations,(o=>{const l=new It(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new It(t,0),o=this.Yr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.ni=e,this.docs=(function(){return new Ze(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Or();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Or();const h=t.path,m=new ue(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||NS(kS(w),s)<=0||(o.has(w.key)||_c(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return $.resolve(l)}getAllFromCollectionGroup(e,t,s,o){ye(9500)}ri(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new n1(this)}getSize(e){return $.resolve(this.size)}}class n1 extends KA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.persistence=e,this.ii=new gs((t=>af(t)),lf),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.si=0,this.oi=new ff,this.targetCount=0,this._i=Ao.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),$.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ao(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.hr(t),$.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(l).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t){this.ai={},this.overlays={},this.ui=new fc(0),this.ci=!1,this.ci=!0,this.li=new ZA,this.referenceDelegate=e(this),this.hi=new r1(this),this.indexManager=new zA,this.remoteDocumentCache=(function(o){return new t1(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new UA(t),this.Ti=new XA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new JA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new e1(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new i1(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return $.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class i1 extends VS{constructor(e){super(),this.currentSequenceNumber=e}}class pf{constructor(e){this.persistence=e,this.Ai=new ff,this.Ri=null}static Vi(e){return new pf(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,(s=>{const o=ue.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,ve.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return $.or([()=>$.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class rc{constructor(e,t){this.persistence=e,this.gi=new gs((s=>LS(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=GA(this,t)}static Vi(e,t){return new rc(e,t)}Ii(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return $.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,l.removeEntry(h,ve.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fu(e.data.value)),t}Sr(e,t,s){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new mf(e,t.fromCache,s,o)}}/**
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
 */class s1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class o1{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Fw()?8:OS(jt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new s1;return this.ws(e,t,h).next((m=>{if(l.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(ho()<=Ce.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",fo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(ho()<=Ce.DEBUG&&ne("QueryEngine","Query:",fo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(ho()<=Ce.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",fo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(t))):$.resolve())}ps(e,t){if(Qg(t))return $.resolve(null);let s=nr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Dd(t,null,"F"),s=nr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=Pe(...l);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,m);return this.Ds(t,_,h,g.readTime)?this.ps(e,Dd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,s,o){return Qg(t)||o.isEqual(ve.min())?$.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?$.resolve(null):(ho()<=Ce.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),fo(t)),this.vs(e,h,t,PS(o,Ha)).next((m=>m)))}))}bs(e,t){let s=new yt(sv(e));return t.forEach(((o,l)=>{_c(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return ho()<=Ce.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",fo(t)),this.gs.getDocumentsMatchingQuery(e,t,vi.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="LocalStore",a1=3e8;class l1{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new Ze(Se),this.Ms=new gs((l=>af(l)),lf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function u1(i,e,t,s){return new l1(i,e,t,s)}async function kv(i,e){const t=Ee(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],m=[];let g=Pe();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function c1(i,e){const t=Ee(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,w){const T=_.batch,C=T.keys();let U=$.resolve();return C.forEach((G=>{U=U.next((()=>w.getEntry(g,G))).next((K=>{const B=_.docVersions.get(G);be(B!==null,48541),K.version.compareTo(B)<0&&(T.applyToRemoteDocument(K,_),K.isValidDocument()&&(K.setReadTime(_.commitVersion),w.addEntry(K)))}))})),U.next((()=>m.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Pe();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Nv(i){const e=Ee(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function h1(i,e){const t=Ee(i),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((w,T)=>{const C=o.get(T);if(!C)return;m.push(t.hi.removeMatchingKeys(l,w.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,T))));let U=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?U=U.withResumeToken(Nt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):w.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(w.resumeToken,s)),o=o.insert(T,U),(function(K,B,he){return K.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=a1?!0:he.addedDocuments.size+he.modifiedDocuments.size+he.removedDocuments.size>0})(C,U,w)&&m.push(t.hi.updateTargetData(l,U))}));let g=Or(),_=Pe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),m.push(d1(l,h,e.documentUpdates).next((w=>{g=w.Ls,_=w.ks}))),!s.isEqual(ve.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));m.push(w)}return $.waitFor(m).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function d1(i,e,t){let s=Pe(),o=Pe();return t.forEach((l=>s=s.add(l))),e.getEntries(i,s).next((l=>{let h=Or();return t.forEach(((m,g)=>{const _=l.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ne(gf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function f1(i,e){const t=Ee(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=rf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function p1(i,e){const t=Ee(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,$.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new di(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function Md(i,e,t){const s=Ee(i),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Vo(h))throw h;ne(gf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function ly(i,e,t){const s=Ee(i);let o=ve.min(),l=Pe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const T=Ee(g),C=T.Ms.get(w);return C!==void 0?$.resolve(T.Fs.get(C)):T.hi.getTargetData(_,w)})(s,h,nr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?l:Pe()))).next((m=>(m1(s,eA(e),m),{documents:m,qs:l})))))}function m1(i,e,t){let s=i.xs.get(e)||ve.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),i.xs.set(e,s)}class uy{constructor(){this.activeTargetIds=oA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class g1{constructor(){this.Fo=new uy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new uy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class y1{xo(e){}shutdown(){}}/**
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
 */let Du=null;function bd(){return Du===null?Du=(function(){return 268435456+Math.round(2147483648*Math.random())})():Du++,"0x"+Du.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="RestConnection",_1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class v1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Ju?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=bd(),m=this.Go(e,t.toUriEncodedString());ne(ud,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(m),w=Co(_);return this.jo(e,m,g,s,w).then((T=>(ne(ud,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw _i(ud,`RPC '${e}' ${h} failed with error: `,T,"url: ",m,"request:",s),T}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+No})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=_1[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class w1 extends v1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=bd();return new Promise(((m,g)=>{const _=new D_;_.setWithCredentials(!0),_.listenOnce(V_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case bu.NO_ERROR:const T=_.getResponseJson();ne(bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),m(T);break;case bu.TIMEOUT:ne(bt,`RPC '${e}' ${h} timed out`),g(new ee(z.DEADLINE_EXCEEDED,"Request time out"));break;case bu.HTTP_ERROR:const C=_.getStatus();if(ne(bt,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let U=_.getResponseJson();Array.isArray(U)&&(U=U[0]);const G=U==null?void 0:U.error;if(G&&G.status&&G.message){const K=(function(he){const ce=he.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(ce)>=0?ce:z.UNKNOWN})(G.status);g(new ee(K,G.message))}else g(new ee(z.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ee(z.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ne(bt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ne(bt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}P_(e,t,s){const o=bd(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=L_(),m=x_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");ne(bt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const T=h.createWebChannel(w,g);this.T_(T);let C=!1,U=!1;const G=new E1({Ho:B=>{U?ne(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(C||(ne(bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),C=!0),ne(bt,`RPC '${e}' stream ${o} sending:`,B),T.send(B))},Yo:()=>T.close()}),K=(B,he,ce)=>{B.listen(he,(me=>{try{ce(me)}catch(we){setTimeout((()=>{throw we}),0)}}))};return K(T,Va.EventType.OPEN,(()=>{U||(ne(bt,`RPC '${e}' stream ${o} transport opened.`),G.s_())})),K(T,Va.EventType.CLOSE,(()=>{U||(U=!0,ne(bt,`RPC '${e}' stream ${o} transport closed`),G.__(),this.I_(T))})),K(T,Va.EventType.ERROR,(B=>{U||(U=!0,_i(bt,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),G.__(new ee(z.UNAVAILABLE,"The operation could not be completed")))})),K(T,Va.EventType.MESSAGE,(B=>{var he;if(!U){const ce=B.data[0];be(!!ce,16349);const me=ce,we=(me==null?void 0:me.error)||((he=me[0])===null||he===void 0?void 0:he.error);if(we){ne(bt,`RPC '${e}' stream ${o} received error:`,we);const je=we.status;let Te=(function(R){const k=lt[R];if(k!==void 0)return yv(k)})(je),D=we.message;Te===void 0&&(Te=z.INTERNAL,D="Unknown error status: "+je+" with message "+we.message),U=!0,G.__(new ee(Te,D)),T.close()}else ne(bt,`RPC '${e}' stream ${o} received:`,ce),G.a_(ce)}})),K(m,O_.STAT_EVENT,(B=>{B.stat===Sd.PROXY?ne(bt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Sd.NOPROXY&&ne(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{G.o_()}),0),G}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function cd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(i){return new AA(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="PersistentStream";class Vv{constructor(e,t,s,o,l,h,m,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Dv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(Vr(t.toString()),Vr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ee(z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ne(dy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ne(dy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class T1 extends Vv{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=PA(this.serializer,e),s=(function(l){if(!("targetChange"in l))return ve.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?ir(h.readTime):ve.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Ld(this.serializer),t.addTarget=(function(l,h){let m;const g=h.target;if(m=kd(g)?{documents:DA(l,g)}:{query:VA(l,g).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Ev(l,h.resumeToken);const _=Vd(l,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(ve.min())>0){m.readTime=nc(l,h.snapshotVersion.toTimestamp());const _=Vd(l,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=xA(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Ld(this.serializer),t.removeTarget=e,this.k_(t)}}class I1 extends Vv{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=NA(e.writeResults,e.commitTime),s=ir(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Ld(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>kA(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{}class A1 extends S1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,Od(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ee(z.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,Od(t,s),o,h,m,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee(z.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class R1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const ds="RemoteStore";class C1{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{_s(this)&&(ne(ds,"Restarting streams for network reachability change."),await(async function(g){const _=Ee(g);_.Ia.add(4),await ul(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Ic(_)})(this))}))})),this.Aa=new R1(s,o)}}async function Ic(i){if(_s(i))for(const e of i.da)await e(!0)}async function ul(i){for(const e of i.da)await e(!1)}function Ov(i,e){const t=Ee(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ef(t)?vf(t):xo(t).x_()&&_f(t,e))}function yf(i,e){const t=Ee(i),s=xo(t);t.Ta.delete(e),s.x_()&&xv(t,e),t.Ta.size===0&&(s.x_()?s.B_():_s(t)&&t.Aa.set("Unknown"))}function _f(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xo(i).H_(e)}function xv(i,e){i.Ra.$e(e),xo(i).Y_(e)}function vf(i){i.Ra=new wA({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),xo(i).start(),i.Aa.aa()}function Ef(i){return _s(i)&&!xo(i).M_()&&i.Ta.size>0}function _s(i){return Ee(i).Ia.size===0}function Lv(i){i.Ra=void 0}async function P1(i){i.Aa.set("Online")}async function k1(i){i.Ta.forEach(((e,t)=>{_f(i,e)}))}async function N1(i,e){Lv(i),Ef(i)?(i.Aa.la(e),vf(i)):i.Aa.set("Unknown")}async function D1(i,e,t){if(i.Aa.set("Online"),e instanceof vv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const m of l.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(i,e)}catch(s){ne(ds,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ic(i,s)}else if(e instanceof zu?i.Ra.Ye(e):e instanceof _v?i.Ra.it(e):i.Ra.et(e),!t.isEqual(ve.min()))try{const s=await Nv(i.localStore);t.compareTo(s)>=0&&await(function(l,h){const m=l.Ra.Pt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(_);w&&l.Ta.set(_,w.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Nt.EMPTY_BYTE_STRING,w.snapshotVersion)),xv(l,g);const T=new di(w.target,g,_,w.sequenceNumber);_f(l,T)})),l.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ne(ds,"Failed to raise snapshot:",s),await ic(i,s)}}async function ic(i,e,t){if(!Vo(e))throw e;i.Ia.add(1),await ul(i),i.Aa.set("Offline"),t||(t=()=>Nv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ne(ds,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await Ic(i)}))}function Mv(i,e){return e().catch((t=>ic(i,t,e)))}async function Sc(i){const e=Ee(i),t=Ii(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:rf;for(;V1(e);)try{const o=await f1(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,O1(e,o)}catch(o){await ic(e,o)}bv(e)&&Fv(e)}function V1(i){return _s(i)&&i.Pa.length<10}function O1(i,e){i.Pa.push(e);const t=Ii(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function bv(i){return _s(i)&&!Ii(i).M_()&&i.Pa.length>0}function Fv(i){Ii(i).start()}async function x1(i){Ii(i).na()}async function L1(i){const e=Ii(i);for(const t of i.Pa)e.X_(t.mutations)}async function M1(i,e,t){const s=i.Pa.shift(),o=cf.from(s,e,t);await Mv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await Sc(i)}async function b1(i,e){e&&Ii(i).Z_&&await(async function(s,o){if((function(h){return vA(h)&&h!==z.ABORTED})(o.code)){const l=s.Pa.shift();Ii(s).N_(),await Mv(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Sc(s)}})(i,e),bv(i)&&Fv(i)}async function fy(i,e){const t=Ee(i);t.asyncQueue.verifyOperationInProgress(),ne(ds,"RemoteStore received new credentials");const s=_s(t);t.Ia.add(3),await ul(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ic(t)}async function F1(i,e){const t=Ee(i);e?(t.Ia.delete(2),await Ic(t)):e||(t.Ia.add(2),await ul(t),t.Aa.set("Unknown"))}function xo(i){return i.Va||(i.Va=(function(t,s,o){const l=Ee(t);return l.ia(),new T1(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(i.datastore,i.asyncQueue,{Zo:P1.bind(null,i),e_:k1.bind(null,i),n_:N1.bind(null,i),J_:D1.bind(null,i)}),i.da.push((async e=>{e?(i.Va.N_(),Ef(i)?vf(i):i.Aa.set("Unknown")):(await i.Va.stop(),Lv(i))}))),i.Va}function Ii(i){return i.ma||(i.ma=(function(t,s,o){const l=Ee(t);return l.ia(),new I1(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:x1.bind(null,i),n_:b1.bind(null,i),ea:L1.bind(null,i),ta:M1.bind(null,i)}),i.da.push((async e=>{e?(i.ma.N_(),await Sc(i)):(await i.ma.stop(),i.Pa.length>0&&(ne(ds,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))}))),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,m=new wf(e,t,h,o,l);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tf(i,e){if(Vr("AsyncQueue",`${e}: ${i}`),Vo(i))return new ee(z.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{static emptySet(e){return new Eo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=Oa(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Eo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Eo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.fa=new Ze(ue.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ye(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Ro{constructor(e,t,s,o,l,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Ro(e,t,Eo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class j1{constructor(){this.queries=my(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Ee(t),l=o.queries;o.queries=my(),l.forEach(((h,m)=>{for(const g of m.wa)g.onError(s)}))})(this,new ee(z.ABORTED,"Firestore shutting down"))}}function my(){return new gs((i=>iv(i)),yc)}async function If(i,e){const t=Ee(i);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new U1,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Tf(h,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Af(t)}async function Sf(i,e){const t=Ee(i),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function z1(i,e){const t=Ee(i);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&Af(t)}function B1(i,e,t){const s=Ee(i),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function Af(i){i.Da.forEach((e=>{e.next()}))}var Fd,gy;(gy=Fd||(Fd={})).Fa="default",gy.Cache="cache";class Rf{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Ro(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Fd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.key=e}}class jv{constructor(e){this.key=e}}class $1{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=sv(e),this.eu=new Eo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new py,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const C=o.get(w),U=_c(this.query,T)?T:null,G=!!C&&this.mutatedKeys.has(C.key),K=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let B=!1;C&&U?C.data.isEqual(U.data)?G!==K&&(s.track({type:3,doc:U}),B=!0):this.iu(C,U)||(s.track({type:2,doc:U}),B=!0,(g&&this.Xa(U,g)>0||_&&this.Xa(U,_)<0)&&(m=!0)):!C&&U?(s.track({type:0,doc:U}),B=!0):C&&!U&&(s.track({type:1,doc:C}),B=!0,(g||_)&&(m=!0)),B&&(U?(h=h.add(U),l=K?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:m,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,T)=>(function(U,G){const K=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:B})}};return K(U)-K(G)})(w.type,T.type)||this.Xa(w.doc,T.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new Ro(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new py,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new jv(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new Uv(s))})),t}uu(e){this.Ha=e.qs,this.Za=Pe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ro.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Cf="SyncEngine";class q1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class H1{constructor(e){this.key=e,this.lu=!1}}class W1{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new gs((m=>iv(m)),yc),this.Tu=new Map,this.Iu=new Set,this.du=new Ze(ue.comparator),this.Eu=new Map,this.Au=new ff,this.Ru={},this.Vu=new Map,this.mu=Ao.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function G1(i,e,t=!0){const s=Wv(i);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await zv(s,e,t,!0),o}async function K1(i,e){const t=Wv(i);await zv(t,e,!0,!1)}async function zv(i,e,t,s){const o=await p1(i.localStore,nr(e)),l=o.targetId,h=i.sharedClientState.addLocalQueryTarget(l,t);let m;return s&&(m=await Q1(i,e,l,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&Ov(i.remoteStore,o),m}async function Q1(i,e,t,s,o){i.gu=(T,C,U)=>(async function(K,B,he,ce){let me=B.view.nu(he);me.Ds&&(me=await ly(K.localStore,B.query,!1).then((({documents:D})=>B.view.nu(D,me))));const we=ce&&ce.targetChanges.get(B.targetId),je=ce&&ce.targetMismatches.get(B.targetId)!=null,Te=B.view.applyChanges(me,K.isPrimaryClient,we,je);return _y(K,B.targetId,Te._u),Te.snapshot})(i,T,C,U);const l=await ly(i.localStore,e,!0),h=new $1(e,l.qs),m=h.nu(l.documents),g=ll.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,g);_y(i,t,_._u);const w=new q1(e,t,h);return i.Pu.set(e,w),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),_.snapshot}async function Y1(i,e,t){const s=Ee(i),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!yc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Md(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&yf(s.remoteStore,o.targetId),Ud(s,o.targetId)})).catch(Do)):(Ud(s,o.targetId),await Md(s.localStore,o.targetId,!0))}async function X1(i,e){const t=Ee(i),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),yf(t.remoteStore,s.targetId))}async function J1(i,e,t){const s=sR(i);try{const o=await(function(h,m){const g=Ee(h),_=Ke.now(),w=m.reduce(((U,G)=>U.add(G.key)),Pe());let T,C;return g.persistence.runTransaction("Locally write mutations","readwrite",(U=>{let G=Or(),K=Pe();return g.Os.getEntries(U,w).next((B=>{G=B,G.forEach(((he,ce)=>{ce.isValidDocument()||(K=K.add(he))}))})).next((()=>g.localDocuments.getOverlayedDocuments(U,G))).next((B=>{T=B;const he=[];for(const ce of m){const me=pA(ce,T.get(ce.key).overlayedDocument);me!=null&&he.push(new ys(ce.key,me,Y_(me.value.mapValue),rr.exists(!0)))}return g.mutationQueue.addMutationBatch(U,_,he,m)})).next((B=>{C=B;const he=B.applyToLocalDocumentSet(T,K);return g.documentOverlayCache.saveOverlays(U,B.batchId,he)}))})).then((()=>({batchId:C.batchId,changes:av(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new Ze(Se)),_=_.insert(m,g),h.Ru[h.currentUser.toKey()]=_})(s,o.batchId,t),await cl(s,o.changes),await Sc(s.remoteStore)}catch(o){const l=Tf(o,"Failed to persist write");t.reject(l)}}async function Bv(i,e){const t=Ee(i);try{const s=await h1(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?be(h.lu,14607):o.removedDocuments.size>0&&(be(h.lu,42227),h.lu=!1))})),await cl(t,s,e)}catch(s){await Do(s)}}function yy(i,e,t){const s=Ee(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Ee(h);g.onlineState=m;let _=!1;g.queries.forEach(((w,T)=>{for(const C of T.wa)C.va(m)&&(_=!0)})),_&&Af(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Z1(i,e,t){const s=Ee(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new Ze(ue.comparator);h=h.insert(l,Ut.newNoDocument(l,ve.min()));const m=Pe().add(l),g=new wc(ve.min(),new Map,new Ze(Se),h,m);await Bv(s,g),s.du=s.du.remove(l),s.Eu.delete(e),Pf(s)}else await Md(s.localStore,e,!1).then((()=>Ud(s,e,t))).catch(Do)}async function eR(i,e){const t=Ee(i),s=e.batch.batchId;try{const o=await c1(t.localStore,e);qv(t,s,null),$v(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await cl(t,o)}catch(o){await Do(o)}}async function tR(i,e,t){const s=Ee(i);try{const o=await(function(h,m){const g=Ee(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next((T=>(be(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);qv(s,e,t),$v(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await cl(s,o)}catch(o){await Do(o)}}function $v(i,e){(i.Vu.get(e)||[]).forEach((t=>{t.resolve()})),i.Vu.delete(e)}function qv(i,e,t){const s=Ee(i);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Ud(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach((s=>{i.Au.containsKey(s)||Hv(i,s)}))}function Hv(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(yf(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),Pf(i))}function _y(i,e,t){for(const s of t)s instanceof Uv?(i.Au.addReference(s.key,e),nR(i,s)):s instanceof jv?(ne(Cf,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||Hv(i,s.key)):ye(19791,{yu:s})}function nR(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(ne(Cf,"New document in limbo: "+t),i.Iu.add(s),Pf(i))}function Pf(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new ue(He.fromString(e)),s=i.mu.next();i.Eu.set(s,new H1(t)),i.du=i.du.insert(t,s),Ov(i.remoteStore,new di(nr(gc(t.path)),s,"TargetPurposeLimboResolution",fc.ue))}}async function cl(i,e,t){const s=Ee(i),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,g)=>{h.push(s.gu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=mf.Es(g.targetId,_);l.push(T)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,_){const w=Ee(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>$.forEach(_,(C=>$.forEach(C.Is,(U=>w.persistence.referenceDelegate.addReference(T,C.targetId,U))).next((()=>$.forEach(C.ds,(U=>w.persistence.referenceDelegate.removeReference(T,C.targetId,U)))))))))}catch(T){if(!Vo(T))throw T;ne(gf,"Failed to update sequence numbers: "+T)}for(const T of _){const C=T.targetId;if(!T.fromCache){const U=w.Fs.get(C),G=U.snapshotVersion,K=U.withLastLimboFreeSnapshotVersion(G);w.Fs=w.Fs.insert(C,K)}}})(s.localStore,l))}async function rR(i,e){const t=Ee(i);if(!t.currentUser.isEqual(e)){ne(Cf,"User change. New user:",e.toKey());const s=await kv(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((m=>{m.forEach((g=>{g.reject(new ee(z.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await cl(t,s.Bs)}}function iR(i,e){const t=Ee(i),s=t.Eu.get(e);if(s&&s.lu)return Pe().add(s.key);{let o=Pe();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function Wv(i){const e=Ee(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Z1.bind(null,e),e.hu.J_=z1.bind(null,e.eventManager),e.hu.pu=B1.bind(null,e.eventManager),e}function sR(i){const e=Ee(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tR.bind(null,e),e}class sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return u1(this.persistence,new o1,e.initialUser,this.serializer)}Du(e){return new Pv(pf.Vi,this.serializer)}bu(e){return new g1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sc.provider={build:()=>new sc};class oR extends sc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){be(this.persistence.referenceDelegate instanceof rc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new HA(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new Pv((s=>rc.Vi(s,t)),this.serializer)}}class jd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rR.bind(null,this.syncEngine),await F1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new j1})()}createDatastore(e){const t=Tc(e.databaseInfo.databaseId),s=(function(l){return new w1(l)})(e.databaseInfo);return(function(l,h,m,g){return new A1(l,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,m){return new C1(s,o,l,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>yy(this.syncEngine,t,0)),(function(){return hy.C()?new hy:new y1})())}createSyncEngine(e,t){return(function(o,l,h,m,g,_,w){const T=new W1(o,l,h,m,g,_);return w&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ee(o);ne(ds,"RemoteStore shutting down."),l.Ia.add(5),await ul(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}jd.provider={build:()=>new jd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Vr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="FirestoreClient";class aR{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=nf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ne(Si,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Si,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Tf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function hd(i,e){i.asyncQueue.verifyOperationInProgress(),ne(Si,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await kv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{_i("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then((()=>{ne("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{_i("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),i._offlineComponents=e}async function vy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await lR(i);ne(Si,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>fy(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>fy(e.remoteStore,o))),i._onlineComponents=e}async function lR(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne(Si,"Using user provided OfflineComponentProvider");try{await hd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===z.FAILED_PRECONDITION||o.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;_i("Error using user provided cache. Falling back to memory cache: "+t),await hd(i,new sc)}}else ne(Si,"Using default OfflineComponentProvider"),await hd(i,new oR(void 0));return i._offlineComponents}async function Gv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne(Si,"Using user provided OnlineComponentProvider"),await vy(i,i._uninitializedComponentsProvider._online)):(ne(Si,"Using default OnlineComponentProvider"),await vy(i,new jd))),i._onlineComponents}function uR(i){return Gv(i).then((e=>e.syncEngine))}async function oc(i){const e=await Gv(i),t=e.eventManager;return t.onListen=G1.bind(null,e.syncEngine),t.onUnlisten=Y1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=K1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=X1.bind(null,e.syncEngine),t}function cR(i,e,t={}){const s=new kr;return i.asyncQueue.enqueueAndForget((async()=>(function(l,h,m,g,_){const w=new kf({next:C=>{w.Ou(),h.enqueueAndForget((()=>Sf(l,T)));const U=C.docs.has(m);!U&&C.fromCache?_.reject(new ee(z.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&C.fromCache&&g&&g.source==="server"?_.reject(new ee(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(C)},error:C=>_.reject(C)}),T=new Rf(gc(m.path),w,{includeMetadataChanges:!0,ka:!0});return If(l,T)})(await oc(i),i.asyncQueue,e,t,s))),s.promise}function hR(i,e,t={}){const s=new kr;return i.asyncQueue.enqueueAndForget((async()=>(function(l,h,m,g,_){const w=new kf({next:C=>{w.Ou(),h.enqueueAndForget((()=>Sf(l,T))),C.fromCache&&g.source==="server"?_.reject(new ee(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(C)},error:C=>_.reject(C)}),T=new Rf(m,w,{includeMetadataChanges:!0,ka:!0});return If(l,T)})(await oc(i),i.asyncQueue,e,t,s))),s.promise}/**
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
 */function Kv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Qv="firestore.googleapis.com",wy=!0;class Ty{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qv,this.ssl=wy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:wy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Cv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$A)throw new ee(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ty({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ty(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new _S;switch(s.type){case"firstParty":return new TS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Ey.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Ey.delete(t),s.terminate())})(this),Promise.resolve()}}function dR(i,e,t,s={}){var o;i=Un(i,Ac);const l=Co(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),g=`${e}:${t}`;l&&(zy(`https://${g}`),By("Firestore",!0)),h.host!==Qv&&h.host!==g&&_i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!as(_,m)&&(i._setSettings(_),s.mockUserToken)){let w,T;if(typeof s.mockUserToken=="string")w=s.mockUserToken,T=Ft.MOCK_USER;else{w=kw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ee(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ft(C)}i._authCredentials=new vS(new b_(w,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class st{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ol(t,st._jsonSchema))return new st(e,s||null,new ue(He.fromString(t.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:ct("string",st._jsonSchemaVersion),referencePath:ct("string")};class yi extends Ci{constructor(e,t,s){super(e,t,gc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new ue(e))}withConverter(e){return new yi(this.firestore,e,this._path)}}function zd(i,e,...t){if(i=zt(i),U_("collection","path",e),i instanceof Ac){const s=He.fromString(e,...t);return Lg(s),new yi(i,null,s)}{if(!(i instanceof st||i instanceof yi))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(He.fromString(e,...t));return Lg(s),new yi(i.firestore,null,s)}}function Za(i,e,...t){if(i=zt(i),arguments.length===1&&(e=nf.newId()),U_("doc","path",e),i instanceof Ac){const s=He.fromString(e,...t);return xg(s),new st(i,null,new ue(s))}{if(!(i instanceof st||i instanceof yi))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(He.fromString(e,...t));return xg(s),new st(i.firestore,i instanceof yi?i.converter:null,new ue(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="AsyncQueue";class Sy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Dv(this,"async_queue_retry"),this.oc=()=>{const s=cd();s&&ne(Iy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=cd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=cd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new kr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Vo(e))throw e;ne(Iy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Vr("INTERNAL UNHANDLED ERROR: ",Ay(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=wf.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&ye(47125,{hc:Ay(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ay(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
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
 */function Ry(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(i,["next","error","complete"])}class fs extends Ac{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Sy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sy(e),this._firestoreClient=void 0,await e}}}function fR(i,e){const t=typeof i=="object"?i:Wy(),s=typeof i=="string"?i:Ju,o=Hd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=Cw("firestore");l&&dR(o,...l)}return o}function Rc(i){if(i._terminated)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||pR(i),i._firestoreClient}function pR(i){var e,t,s;const o=i._freezeSettings(),l=(function(m,g,_,w){return new FS(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Kv(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new aR(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wn(Nt.fromBase64String(e))}catch(t){throw new ee(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wn(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ol(e,wn._jsonSchema))return wn.fromBase64String(e.bytes)}}wn._jsonSchemaVersion="firestore/bytes/1.0",wn._jsonSchema={type:ct("string",wn._jsonSchemaVersion),bytes:ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sr._jsonSchemaVersion}}static fromJSON(e){if(ol(e,sr._jsonSchema))return new sr(e.latitude,e.longitude)}}sr._jsonSchemaVersion="firestore/geoPoint/1.0",sr._jsonSchema={type:ct("string",sr._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
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
 */class or{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:or._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ol(e,or._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new or(e.vectorValues);throw new ee(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}or._jsonSchemaVersion="firestore/vectorValue/1.0",or._jsonSchema={type:ct("string",or._jsonSchemaVersion),vectorValues:ct("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=/^__.*__$/;class gR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ys(e,this.data,this.fieldMask,t,this.fieldTransforms):new al(e,this.data,t,this.fieldTransforms)}}function Yv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:i})}}class Vf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ac(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Yv(this.Ec)&&mR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class yR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Tc(e)}Dc(e,t,s,o=!1){return new Vf({Ec:e,methodName:t,bc:s,path:kt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Of(i){const e=i._freezeSettings(),t=Tc(i._databaseId);return new yR(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Xv(i,e,t,s,o,l={}){const h=i.Dc(l.merge||l.mergeFields?2:0,e,t,o);eE("Data must be an object, but it was:",h,s);const m=Jv(s,h);let g,_;if(l.merge)g=new Fn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const C=vR(e,T,t);if(!h.contains(C))throw new ee(z.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);wR(w,C)||w.push(C)}g=new Fn(w),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new gR(new En(m),g,_)}class xf extends Df{_toFieldTransform(e){return new cA(e.path,new Ya)}isEqual(e){return e instanceof xf}}function _R(i,e,t,s=!1){return Lf(t,i.Dc(s?4:3,e))}function Lf(i,e){if(Zv(i=zt(i)))return eE("Unsupported field value:",e,i),Jv(i,e);if(i instanceof Df)return(function(s,o){if(!Yv(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const m of s){let g=Lf(m,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(i,e)}return(function(s,o){if((s=zt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return aA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ke.fromDate(s);return{timestampValue:nc(o.serializer,l)}}if(s instanceof Ke){const l=new Ke(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:nc(o.serializer,l)}}if(s instanceof sr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof wn)return{bytesValue:Ev(o.serializer,s._byteString)};if(s instanceof st){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:df(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof or)return(function(h,m){return{mapValue:{fields:{[K_]:{stringValue:Q_},[Zu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.wc("VectorValues must only contain numeric values.");return uf(m.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${dc(s)}`)})(i,e)}function Jv(i,e){const t={};return B_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(i,((s,o)=>{const l=Lf(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function Zv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ke||i instanceof sr||i instanceof wn||i instanceof st||i instanceof Df||i instanceof or)}function eE(i,e,t){if(!Zv(t)||!j_(t)){const s=dc(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function vR(i,e,t){if((e=zt(e))instanceof Nf)return e._internalPath;if(typeof e=="string")return tE(i,e);throw ac("Field path arguments must be of type string or ",i,!1,void 0,t)}const ER=new RegExp("[~\\*/\\[\\]]");function tE(i,e,t){if(e.search(ER)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Nf(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function ac(i,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ee(z.INVALID_ARGUMENT,m+i+g)}function wR(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class TR extends nE{data(){return super.data()}}function Mf(i,e){return typeof e=="string"?tE(i,e):e instanceof Nf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ee(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bf{}class iE extends bf{}function IR(i,e,...t){let s=[];e instanceof bf&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof Uf)).length,m=l.filter((g=>g instanceof Ff)).length;if(h>1||h>0&&m>0)throw new ee(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class Ff extends iE{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ff(e,t,s)}_apply(e){const t=this._parse(e);return sE(e._query,t),new Ci(e.firestore,e.converter,Nd(e._query,t))}_parse(e){const t=Of(e.firestore);return(function(l,h,m,g,_,w,T){let C;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ee(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Py(T,w);const G=[];for(const K of T)G.push(Cy(g,l,K));C={arrayValue:{values:G}}}else C=Cy(g,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Py(T,w),C=_R(m,h,T,w==="in"||w==="not-in");return ut.create(_,w,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Uf extends bf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Uf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:zn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const m=l.getFlattenedFilters();for(const g of m)sE(h,g),h=Nd(h,g)})(e._query,t),new Ci(e.firestore,e.converter,Nd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jf extends iE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new jf(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qa(l,h)})(e._query,this._field,this._direction);return new Ci(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Oo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function SR(i,e="asc"){const t=e,s=Mf("orderBy",i);return jf._create(s,t)}function Cy(i,e,t){if(typeof(t=zt(t))=="string"){if(t==="")throw new ee(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rv(e)&&t.indexOf("/")!==-1)throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(He.fromString(t));if(!ue.isDocumentKey(s))throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $g(i,new ue(s))}if(t instanceof st)return $g(i,t._key);throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dc(t)}.`)}function Py(i,e){if(!Array.isArray(i)||i.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sE(i,e){const t=(function(o,l){for(const h of o)for(const m of h.getFlattenedFilters())if(l.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class AR{convertValue(e,t="none"){switch(Ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ms(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Zu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>it(h.doubleValue)));return new or(l)}convertGeoPoint(e){return new sr(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=mc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Wa(e));default:return null}}convertTimestamp(e){const t=Ei(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=He.fromString(e);be(Rv(s),9688,{name:e});const o=new Ga(s.get(1),s.get(3)),l=new ue(s.popFirst(5));return o.isEqual(t)||Vr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}class La{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class is extends nE{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Mf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=is._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}is._jsonSchemaVersion="firestore/documentSnapshot/1.0",is._jsonSchema={type:ct("string",is._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class Bu extends is{data(e={}){return super.data(e)}}class ss{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new La(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Bu(this._firestore,this._userDataWriter,s.key,s,new La(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new La(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>l||m.type!==3)).map((m=>{const g=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new La(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:RR(m.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ss._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=nf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function RR(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(i){i=Un(i,st);const e=Un(i.firestore,fs);return cR(Rc(e),i._key).then((t=>uE(e,i,t)))}ss._jsonSchemaVersion="firestore/querySnapshot/1.0",ss._jsonSchema={type:ct("string",ss._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class zf extends AR{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}function CR(i){i=Un(i,Ci);const e=Un(i.firestore,fs),t=Rc(e),s=new zf(e);return rE(i._query),hR(t,i._query).then((o=>new ss(e,s,i,o)))}function aE(i,e,t){i=Un(i,st);const s=Un(i.firestore,fs),o=oE(i.converter,e,t);return lE(s,[Xv(Of(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,rr.none())])}function PR(i,e){const t=Un(i.firestore,fs),s=Za(i),o=oE(i.converter,e);return lE(t,[Xv(Of(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,rr.exists(!1))]).then((()=>s))}function kR(i,...e){var t,s,o;i=zt(i);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Ry(e[h])||(l=e[h++]);const m={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Ry(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let g,_,w;if(i instanceof st)_=Un(i.firestore,fs),w=gc(i._key.path),g={next:T=>{e[h]&&e[h](uE(_,i,T))},error:e[h+1],complete:e[h+2]};else{const T=Un(i,Ci);_=Un(T.firestore,fs),w=T._query;const C=new zf(_);g={next:U=>{e[h]&&e[h](new ss(_,C,T,U))},error:e[h+1],complete:e[h+2]},rE(i._query)}return(function(C,U,G,K){const B=new kf(K),he=new Rf(U,B,G);return C.asyncQueue.enqueueAndForget((async()=>If(await oc(C),he))),()=>{B.Ou(),C.asyncQueue.enqueueAndForget((async()=>Sf(await oc(C),he)))}})(Rc(_),w,m,g)}function lE(i,e){return(function(s,o){const l=new kr;return s.asyncQueue.enqueueAndForget((async()=>J1(await uR(s),o,l))),l.promise})(Rc(i),e)}function uE(i,e,t){const s=t.docs.get(e._key),o=new zf(i);return new is(i,o,e._key,s,new La(t.hasPendingWrites,t.fromCache),e.converter)}function cE(){return new xf("serverTimestamp")}(function(e,t=!0){(function(o){No=o})(Po),wo(new ls("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),m=new fs(new ES(s.getProvider("auth-internal")),new IS(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ee(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(_.options.projectId,w)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),m._setSettings(l),m}),"PUBLIC").setMultipleInstances(!0)),mi(kg,Ng,e),mi(kg,Ng,"esm2017")})();const NR={apiKey:"AIzaSyCjLVUF_wyjlduSuCi_4DEyKXOt8JjEvsQ",authDomain:"coachpulse-87341.firebaseapp.com",projectId:"coachpulse-87341",storageBucket:"coachpulse-87341.firebasestorage.app",messagingSenderId:"440637829553",appId:"1:440637829553:web:96fdc2e49e5e58fed18d90"},hE=Hy(NR),xr=pS(hE);tI(xr,w_);const os=fR(hE);var gt=Bd();const DR=mw(gt);var Vu={},dd={exports:{}},Zt={},fd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny;function VR(){return Ny||(Ny=1,(function(i){function e(J,de){var re=J.length;J.push(de);e:for(;0<re;){var O=re-1>>>1,q=J[O];if(0<o(q,de))J[O]=de,J[re]=q,re=O;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var de=J[0],re=J.pop();if(re!==de){J[0]=re;e:for(var O=0,q=J.length,le=q>>>1;O<le;){var Ie=2*(O+1)-1,Ae=J[Ie],Ne=Ie+1,Le=J[Ne];if(0>o(Ae,re))Ne<q&&0>o(Le,Ae)?(J[O]=Le,J[Ne]=re,O=Ne):(J[O]=Ae,J[Ie]=re,O=Ie);else if(Ne<q&&0>o(Le,re))J[O]=Le,J[Ne]=re,O=Ne;else break e}}return de}function o(J,de){var re=J.sortIndex-de.sortIndex;return re!==0?re:J.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,T=null,C=3,U=!1,G=!1,K=!1,B=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(J){for(var de=t(_);de!==null;){if(de.callback===null)s(_);else if(de.startTime<=J)s(_),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(_)}}function we(J){if(K=!1,me(J),!G)if(t(g)!==null)G=!0,Vt(je);else{var de=t(_);de!==null&&Ue(we,de.startTime-J)}}function je(J,de){G=!1,K&&(K=!1,he(S),S=-1),U=!0;var re=C;try{for(me(de),T=t(g);T!==null&&(!(T.expirationTime>de)||J&&!V());){var O=T.callback;if(typeof O=="function"){T.callback=null,C=T.priorityLevel;var q=O(T.expirationTime<=de);de=i.unstable_now(),typeof q=="function"?T.callback=q:T===t(g)&&s(g),me(de)}else s(g);T=t(g)}if(T!==null)var le=!0;else{var Ie=t(_);Ie!==null&&Ue(we,Ie.startTime-de),le=!1}return le}finally{T=null,C=re,U=!1}}var Te=!1,D=null,S=-1,R=5,k=-1;function V(){return!(i.unstable_now()-k<R)}function x(){if(D!==null){var J=i.unstable_now();k=J;var de=!0;try{de=D(!0,J)}finally{de?A():(Te=!1,D=null)}}else Te=!1}var A;if(typeof ce=="function")A=function(){ce(x)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Dt=tt.port2;tt.port1.onmessage=x,A=function(){Dt.postMessage(null)}}else A=function(){B(x,0)};function Vt(J){D=J,Te||(Te=!0,A())}function Ue(J,de){S=B(function(){J(i.unstable_now())},de)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){G||U||(G=!0,Vt(je))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(J){switch(C){case 1:case 2:case 3:var de=3;break;default:de=C}var re=C;C=de;try{return J()}finally{C=re}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,de){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var re=C;C=J;try{return de()}finally{C=re}},i.unstable_scheduleCallback=function(J,de,re){var O=i.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,J){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=re+q,J={id:w++,callback:de,priorityLevel:J,startTime:re,expirationTime:q,sortIndex:-1},re>O?(J.sortIndex=re,e(_,J),t(g)===null&&J===t(_)&&(K?(he(S),S=-1):K=!0,Ue(we,re-O))):(J.sortIndex=q,e(g,J),G||U||(G=!0,Vt(je))),J},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(J){var de=C;return function(){var re=C;C=de;try{return J.apply(this,arguments)}finally{C=re}}}})(pd)),pd}var Dy;function OR(){return Dy||(Dy=1,fd.exports=VR()),fd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy;function xR(){if(Vy)return Zt;Vy=1;var i=Bd(),e=OR();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function C(n){return g.call(T,n)?!0:g.call(w,n)?!1:_.test(n)?T[n]=!0:(w[n]=!0,!1)}function U(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function G(n,r,a,c){if(r===null||typeof r>"u"||U(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function K(n,r,a,c,d,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new K(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];B[r]=new K(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new K(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new K(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new K(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new K(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new K(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new K(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new K(n,5,!1,n.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function ce(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(he,ce);B[r]=new K(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(he,ce);B[r]=new K(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(he,ce);B[r]=new K(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new K(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new K(n,1,!1,n.toLowerCase(),null,!0,!0)});function me(n,r,a,c){var d=B.hasOwnProperty(r)?B[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(G(r,a,d,c)&&(a=null),c||d===null?C(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var we=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),Te=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),V=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),J=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,O;function q(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var le=!1;function Ie(n,r){if(!n||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,I=p.length-1;1<=v&&0<=I&&d[v]!==p[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==p[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==p[I]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=I);break}}}finally{le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Ae(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Te:return"Portal";case R:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case x:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Dt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Vt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function _t(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function lr(n){n._valueTracker||(n._valueTracker=_t(n))}function vs(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Mr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Pi(n,r){var a=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Es(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Lo(n,r){r=r.checked,r!=null&&me(n,"checked",r,!1)}function Mo(n,r){Lo(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ws(n,r.type,a):r.hasOwnProperty("defaultValue")&&ws(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function hl(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ws(n,r,a){(r!=="number"||Mr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ur=Array.isArray;function cr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function bo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ts(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(ur(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function Is(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Fo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ht(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ht(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var hr,Uo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=hr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function br(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ni=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(n){Ni.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),ki[r]=ki[n]})});function jo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||ki.hasOwnProperty(n)&&ki[n]?(""+r).trim():r+"px"}function zo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=jo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Bo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $o(n,r){if(r){if(Bo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function qo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function Ss(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var As=null,un=null,Bn=null;function Rs(n){if(n=pa(n)){if(typeof As!="function")throw Error(t(280));var r=n.stateNode;r&&(r=zl(r),As(n.stateNode,n.type,r))}}function $n(n){un?Bn?Bn.push(n):Bn=[n]:un=n}function Ho(){if(un){var n=un,r=Bn;if(Bn=un=null,Rs(n),r)for(n=0;n<r.length;n++)Rs(r[n])}}function Vi(n,r){return n(r)}function Wo(){}var dr=!1;function Go(n,r,a){if(dr)return n(r,a);dr=!0;try{return Vi(n,r,a)}finally{dr=!1,(un!==null||Bn!==null)&&(Wo(),Ho())}}function nt(n,r){var a=n.stateNode;if(a===null)return null;var c=zl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Cs=!1;if(m)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Cs=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Cs=!1}function Oi(n,r,a,c,d,p,v,I,P){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(W){this.onError(W)}}var xi=!1,Ps=null,In=!1,Ko=null,Cc={onError:function(n){xi=!0,Ps=n}};function ks(n,r,a,c,d,p,v,I,P){xi=!1,Ps=null,Oi.apply(Cc,arguments)}function dl(n,r,a,c,d,p,v,I,P){if(ks.apply(this,arguments),xi){if(xi){var F=Ps;xi=!1,Ps=null}else throw Error(t(198));In||(In=!0,Ko=F)}}function Sn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Li(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function An(n){if(Sn(n)!==n)throw Error(t(188))}function fl(n){var r=n.alternate;if(!r){if(r=Sn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return An(d),n;if(p===c)return An(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=p;break}if(I===c){v=!0,c=d,a=p;break}I=I.sibling}if(!v){for(I=p.child;I;){if(I===a){v=!0,a=p,c=d;break}if(I===c){v=!0,c=p,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Qo(n){return n=fl(n),n!==null?Ns(n):null}function Ns(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ns(n);if(r!==null)return r;n=n.sibling}return null}var Ds=e.unstable_scheduleCallback,Yo=e.unstable_cancelCallback,pl=e.unstable_shouldYield,Pc=e.unstable_requestPaint,$e=e.unstable_now,ml=e.unstable_getCurrentPriorityLevel,Mi=e.unstable_ImmediatePriority,Fr=e.unstable_UserBlockingPriority,cn=e.unstable_NormalPriority,Xo=e.unstable_LowPriority,gl=e.unstable_IdlePriority,bi=null,tn=null;function yl(n){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(bi,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:vl,Jo=Math.log,_l=Math.LN2;function vl(n){return n>>>=0,n===0?32:31-(Jo(n)/_l|0)|0}var Vs=64,Os=4194304;function Ur(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Fi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Ur(I):(p&=v,p!==0&&(c=Ur(p)))}else v=a&~d,v!==0?c=Ur(v):p!==0&&(c=Ur(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Bt(r),d=1<<a,c|=n[a],r&=~d;return c}function kc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Bt(p),I=1<<v,P=d[v];P===-1?((I&a)===0||(I&c)!==0)&&(d[v]=kc(I,r)):P<=r&&(n.expiredLanes|=I),p&=~I}}function nn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ui(){var n=Vs;return Vs<<=1,(Vs&4194240)===0&&(Vs=64),n}function jr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function zr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Bt(r),n[r]=a}function ze(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Br(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var ke=0;function $r(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var El,xs,wl,Tl,Il,Zo=!1,qn=[],St=null,Rn=null,Cn=null,qr=new Map,hn=new Map,Hn=[],Nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sl(n,r){switch(n){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":qr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(r.pointerId)}}function Wt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=pa(r),r!==null&&xs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Dc(n,r,a,c,d){switch(r){case"focusin":return St=Wt(St,n,r,a,c,d),!0;case"dragenter":return Rn=Wt(Rn,n,r,a,c,d),!0;case"mouseover":return Cn=Wt(Cn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return qr.set(p,Wt(qr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,hn.set(p,Wt(hn.get(p)||null,n,r,a,c,d)),!0}return!1}function Al(n){var r=qi(n.target);if(r!==null){var a=Sn(r);if(a!==null){if(r=a.tag,r===13){if(r=Li(a),r!==null){n.blockedOn=r,Il(n.priority,function(){wl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ls(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Di=c,a.target.dispatchEvent(c),Di=null}else return r=pa(a),r!==null&&xs(r),n.blockedOn=a,!1;r.shift()}return!0}function ji(n,r,a){pr(n)&&a.delete(r)}function Rl(){Zo=!1,St!==null&&pr(St)&&(St=null),Rn!==null&&pr(Rn)&&(Rn=null),Cn!==null&&pr(Cn)&&(Cn=null),qr.forEach(ji),hn.forEach(ji)}function Pn(n,r){n.blockedOn===r&&(n.blockedOn=null,Zo||(Zo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rl)))}function kn(n){function r(d){return Pn(d,n)}if(0<qn.length){Pn(qn[0],n);for(var a=1;a<qn.length;a++){var c=qn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(St!==null&&Pn(St,n),Rn!==null&&Pn(Rn,n),Cn!==null&&Pn(Cn,n),qr.forEach(r),hn.forEach(r),a=0;a<Hn.length;a++)c=Hn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Hn.length&&(a=Hn[0],a.blockedOn===null);)Al(a),a.blockedOn===null&&Hn.shift()}var mr=we.ReactCurrentBatchConfig,Hr=!0;function Qe(n,r,a,c){var d=ke,p=mr.transition;mr.transition=null;try{ke=1,ea(n,r,a,c)}finally{ke=d,mr.transition=p}}function Vc(n,r,a,c){var d=ke,p=mr.transition;mr.transition=null;try{ke=4,ea(n,r,a,c)}finally{ke=d,mr.transition=p}}function ea(n,r,a,c){if(Hr){var d=Ls(n,r,a,c);if(d===null)$c(n,r,c,zi,a),Sl(n,c);else if(Dc(d,n,r,a,c))c.stopPropagation();else if(Sl(n,c),r&4&&-1<Nc.indexOf(n)){for(;d!==null;){var p=pa(d);if(p!==null&&El(p),p=Ls(n,r,a,c),p===null&&$c(n,r,c,zi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else $c(n,r,c,null,a)}}var zi=null;function Ls(n,r,a,c){if(zi=null,n=Ss(c),n=qi(n),n!==null)if(r=Sn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Li(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return zi=n,null}function ta(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ml()){case Mi:return 1;case Fr:return 4;case cn:case Xo:return 16;case gl:return 536870912;default:return 16}default:return 16}}var rn=null,Ms=null,Gt=null;function na(){if(Gt)return Gt;var n,r=Ms,a=r.length,c,d="value"in rn?rn.value:rn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[p-c];c++);return Gt=d.slice(n,1<c?1-c:void 0)}function bs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function ra(){return!1}function At(n){function r(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Wn:ra,this.isPropagationStopped=ra,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),r}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fs=At(Nn),Gn=re({},Nn,{view:0,detail:0}),Oc=At(Gn),Us,gr,Wr,Bi=re({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wr&&(Wr&&n.type==="mousemove"?(Us=n.screenX-Wr.screenX,gr=n.screenY-Wr.screenY):gr=Us=0,Wr=n),Us)},movementY:function(n){return"movementY"in n?n.movementY:gr}}),js=At(Bi),ia=re({},Bi,{dataTransfer:0}),Cl=At(ia),zs=re({},Gn,{relatedTarget:0}),Bs=At(zs),Pl=re({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),yr=At(Pl),kl=re({},Nn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Nl=At(kl),Dl=re({},Nn,{data:0}),sa=At(Dl),$s={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ol(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Vl[n])?!!r[n]:!1}function Kn(){return Ol}var u=re({},Gn,{key:function(n){if(n.key){var r=$s[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=bs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(n){return n.type==="keypress"?bs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=At(u),y=re({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=At(y),L=re({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn}),j=At(L),X=re({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=At(X),ft=re({},Bi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=At(ft),vt=[9,13,27,32],ot=m&&"CompositionEvent"in window,dn=null;m&&"documentMode"in document&&(dn=document.documentMode);var sn=m&&"TextEvent"in window&&!dn,$i=m&&(!ot||dn&&8<dn&&11>=dn),qs=" ",Bf=!1;function $f(n,r){switch(n){case"keyup":return vt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hs=!1;function dE(n,r){switch(n){case"compositionend":return qf(r);case"keypress":return r.which!==32?null:(Bf=!0,qs);case"textInput":return n=r.data,n===qs&&Bf?null:n;default:return null}}function fE(n,r){if(Hs)return n==="compositionend"||!ot&&$f(n,r)?(n=na(),Gt=Ms=rn=null,Hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return $i&&r.locale!=="ko"?null:r.data;default:return null}}var pE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!pE[n.type]:r==="textarea"}function Wf(n,r,a,c){$n(c),r=Fl(r,"onChange"),0<r.length&&(a=new Fs("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var oa=null,aa=null;function mE(n){cp(n,0)}function xl(n){var r=Ys(n);if(vs(r))return n}function gE(n,r){if(n==="change")return r}var Gf=!1;if(m){var xc;if(m){var Lc="oninput"in document;if(!Lc){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),Lc=typeof Kf.oninput=="function"}xc=Lc}else xc=!1;Gf=xc&&(!document.documentMode||9<document.documentMode)}function Qf(){oa&&(oa.detachEvent("onpropertychange",Yf),aa=oa=null)}function Yf(n){if(n.propertyName==="value"&&xl(aa)){var r=[];Wf(r,aa,n,Ss(n)),Go(mE,r)}}function yE(n,r,a){n==="focusin"?(Qf(),oa=r,aa=a,oa.attachEvent("onpropertychange",Yf)):n==="focusout"&&Qf()}function _E(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xl(aa)}function vE(n,r){if(n==="click")return xl(r)}function EE(n,r){if(n==="input"||n==="change")return xl(r)}function wE(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Dn=typeof Object.is=="function"?Object.is:wE;function la(n,r){if(Dn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Dn(n[d],r[d]))return!1}return!0}function Xf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jf(n,r){var a=Xf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xf(a)}}function Zf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Zf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function ep(){for(var n=window,r=Mr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Mr(n.document)}return r}function Mc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function TE(n){var r=ep(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Zf(a.ownerDocument.documentElement,a)){if(c!==null&&Mc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Jf(a,p);var v=Jf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var IE=m&&"documentMode"in document&&11>=document.documentMode,Ws=null,bc=null,ua=null,Fc=!1;function tp(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fc||Ws==null||Ws!==Mr(c)||(c=Ws,"selectionStart"in c&&Mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ua&&la(ua,c)||(ua=c,c=Fl(bc,"onSelect"),0<c.length&&(r=new Fs("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ws)))}function Ll(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Gs={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},Uc={},np={};m&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function Ml(n){if(Uc[n])return Uc[n];if(!Gs[n])return n;var r=Gs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in np)return Uc[n]=r[a];return n}var rp=Ml("animationend"),ip=Ml("animationiteration"),sp=Ml("animationstart"),op=Ml("transitionend"),ap=new Map,lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,r){ap.set(n,r),l(r,[n])}for(var jc=0;jc<lp.length;jc++){var zc=lp[jc],SE=zc.toLowerCase(),AE=zc[0].toUpperCase()+zc.slice(1);Gr(SE,"on"+AE)}Gr(rp,"onAnimationEnd"),Gr(ip,"onAnimationIteration"),Gr(sp,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(op,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function up(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,dl(c,r,void 0,n),n.currentTarget=null}function cp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var v=c.length-1;0<=v;v--){var I=c[v],P=I.instance,F=I.currentTarget;if(I=I.listener,P!==p&&d.isPropagationStopped())break e;up(d,I,F),p=P}else for(v=0;v<c.length;v++){if(I=c[v],P=I.instance,F=I.currentTarget,I=I.listener,P!==p&&d.isPropagationStopped())break e;up(d,I,F),p=P}}}if(In)throw n=Ko,In=!1,Ko=null,n}function We(n,r){var a=r[Qc];a===void 0&&(a=r[Qc]=new Set);var c=n+"__bubble";a.has(c)||(hp(r,n,2,!1),a.add(c))}function Bc(n,r,a){var c=0;r&&(c|=4),hp(a,n,c,r)}var bl="_reactListening"+Math.random().toString(36).slice(2);function ha(n){if(!n[bl]){n[bl]=!0,s.forEach(function(a){a!=="selectionchange"&&(RE.has(a)||Bc(a,!1,n),Bc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[bl]||(r[bl]=!0,Bc("selectionchange",!1,r))}}function hp(n,r,a,c){switch(ta(r)){case 1:var d=Qe;break;case 4:d=Vc;break;default:d=ea}a=d.bind(null,r,a,n),d=void 0,!Cs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function $c(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;I!==null;){if(v=qi(I),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}I=I.parentNode}}c=c.return}Go(function(){var F=p,W=Ss(a),Q=[];e:{var H=ap.get(n);if(H!==void 0){var te=Fs,se=n;switch(n){case"keypress":if(bs(a)===0)break e;case"keydown":case"keyup":te=f;break;case"focusin":se="focus",te=Bs;break;case"focusout":se="blur",te=Bs;break;case"beforeblur":case"afterblur":te=Bs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Cl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=j;break;case rp:case ip:case sp:te=yr;break;case op:te=Fe;break;case"scroll":te=Oc;break;case"wheel":te=De;break;case"copy":case"cut":case"paste":te=Nl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var oe=(r&4)!==0,rt=!oe&&n==="scroll",M=oe?H!==null?H+"Capture":null:H;oe=[];for(var N=F,b;N!==null;){b=N;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,M!==null&&(Y=nt(N,M),Y!=null&&oe.push(da(N,Y,b)))),rt)break;N=N.return}0<oe.length&&(H=new te(H,se,null,a,W),Q.push({event:H,listeners:oe}))}}if((r&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",H&&a!==Di&&(se=a.relatedTarget||a.fromElement)&&(qi(se)||se[_r]))break e;if((te||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,te?(se=a.relatedTarget||a.toElement,te=F,se=se?qi(se):null,se!==null&&(rt=Sn(se),se!==rt||se.tag!==5&&se.tag!==6)&&(se=null)):(te=null,se=F),te!==se)){if(oe=js,Y="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(oe=E,Y="onPointerLeave",M="onPointerEnter",N="pointer"),rt=te==null?H:Ys(te),b=se==null?H:Ys(se),H=new oe(Y,N+"leave",te,a,W),H.target=rt,H.relatedTarget=b,Y=null,qi(W)===F&&(oe=new oe(M,N+"enter",se,a,W),oe.target=b,oe.relatedTarget=rt,Y=oe),rt=Y,te&&se)t:{for(oe=te,M=se,N=0,b=oe;b;b=Ks(b))N++;for(b=0,Y=M;Y;Y=Ks(Y))b++;for(;0<N-b;)oe=Ks(oe),N--;for(;0<b-N;)M=Ks(M),b--;for(;N--;){if(oe===M||M!==null&&oe===M.alternate)break t;oe=Ks(oe),M=Ks(M)}oe=null}else oe=null;te!==null&&dp(Q,H,te,oe,!1),se!==null&&rt!==null&&dp(Q,rt,se,oe,!0)}}e:{if(H=F?Ys(F):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var ae=gE;else if(Hf(H))if(Gf)ae=EE;else{ae=_E;var fe=yE}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ae=vE);if(ae&&(ae=ae(n,F))){Wf(Q,ae,a,W);break e}fe&&fe(n,H,F),n==="focusout"&&(fe=H._wrapperState)&&fe.controlled&&H.type==="number"&&ws(H,"number",H.value)}switch(fe=F?Ys(F):window,n){case"focusin":(Hf(fe)||fe.contentEditable==="true")&&(Ws=fe,bc=F,ua=null);break;case"focusout":ua=bc=Ws=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,tp(Q,a,W);break;case"selectionchange":if(IE)break;case"keydown":case"keyup":tp(Q,a,W)}var pe;if(ot)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Hs?$f(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&($i&&a.locale!=="ko"&&(Hs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Hs&&(pe=na()):(rn=W,Ms="value"in rn?rn.value:rn.textContent,Hs=!0)),fe=Fl(F,_e),0<fe.length&&(_e=new sa(_e,n,null,a,W),Q.push({event:_e,listeners:fe}),pe?_e.data=pe:(pe=qf(a),pe!==null&&(_e.data=pe)))),(pe=sn?dE(n,a):fE(n,a))&&(F=Fl(F,"onBeforeInput"),0<F.length&&(W=new sa("onBeforeInput","beforeinput",null,a,W),Q.push({event:W,listeners:F}),W.data=pe))}cp(Q,r)})}function da(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Fl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=nt(n,a),p!=null&&c.unshift(da(n,p,d)),p=nt(n,r),p!=null&&c.push(da(n,p,d))),n=n.return}return c}function Ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dp(n,r,a,c,d){for(var p=r._reactName,v=[];a!==null&&a!==c;){var I=a,P=I.alternate,F=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&F!==null&&(I=F,d?(P=nt(a,p),P!=null&&v.unshift(da(a,P,I))):d||(P=nt(a,p),P!=null&&v.push(da(a,P,I)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var CE=/\r\n?/g,PE=/\u0000|\uFFFD/g;function fp(n){return(typeof n=="string"?n:""+n).replace(CE,`
`).replace(PE,"")}function Ul(n,r,a){if(r=fp(r),fp(n)!==r&&a)throw Error(t(425))}function jl(){}var qc=null,Hc=null;function Wc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,kE=typeof clearTimeout=="function"?clearTimeout:void 0,pp=typeof Promise=="function"?Promise:void 0,NE=typeof queueMicrotask=="function"?queueMicrotask:typeof pp<"u"?function(n){return pp.resolve(null).then(n).catch(DE)}:Gc;function DE(n){setTimeout(function(){throw n})}function Kc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),kn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);kn(r)}function Kr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function mp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Qs,fa="__reactProps$"+Qs,_r="__reactContainer$"+Qs,Qc="__reactEvents$"+Qs,VE="__reactListeners$"+Qs,OE="__reactHandles$"+Qs;function qi(n){var r=n[Qn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[_r]||a[Qn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=mp(n);n!==null;){if(a=n[Qn])return a;n=mp(n)}return r}n=a,a=n.parentNode}return null}function pa(n){return n=n[Qn]||n[_r],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function zl(n){return n[fa]||null}var Yc=[],Xs=-1;function Qr(n){return{current:n}}function Ge(n){0>Xs||(n.current=Yc[Xs],Yc[Xs]=null,Xs--)}function qe(n,r){Xs++,Yc[Xs]=n.current,n.current=r}var Yr={},Ot=Qr(Yr),Kt=Qr(!1),Hi=Yr;function Js(n,r){var a=n.type.contextTypes;if(!a)return Yr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function Bl(){Ge(Kt),Ge(Ot)}function gp(n,r,a){if(Ot.current!==Yr)throw Error(t(168));qe(Ot,r),qe(Kt,a)}function yp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return re({},a,c)}function $l(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yr,Hi=Ot.current,qe(Ot,n),qe(Kt,Kt.current),!0}function _p(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=yp(n,r,Hi),c.__reactInternalMemoizedMergedChildContext=n,Ge(Kt),Ge(Ot),qe(Ot,n)):Ge(Kt),qe(Kt,a)}var vr=null,ql=!1,Xc=!1;function vp(n){vr===null?vr=[n]:vr.push(n)}function xE(n){ql=!0,vp(n)}function Xr(){if(!Xc&&vr!==null){Xc=!0;var n=0,r=ke;try{var a=vr;for(ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}vr=null,ql=!1}catch(d){throw vr!==null&&(vr=vr.slice(n+1)),Ds(Mi,Xr),d}finally{ke=r,Xc=!1}}return null}var Zs=[],eo=0,Hl=null,Wl=0,fn=[],pn=0,Wi=null,Er=1,wr="";function Gi(n,r){Zs[eo++]=Wl,Zs[eo++]=Hl,Hl=n,Wl=r}function Ep(n,r,a){fn[pn++]=Er,fn[pn++]=wr,fn[pn++]=Wi,Wi=n;var c=Er;n=wr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var p=32-Bt(r)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Er=1<<32-Bt(r)+d|a<<d|c,wr=p+n}else Er=1<<p|a<<d|c,wr=n}function Jc(n){n.return!==null&&(Gi(n,1),Ep(n,1,0))}function Zc(n){for(;n===Hl;)Hl=Zs[--eo],Zs[eo]=null,Wl=Zs[--eo],Zs[eo]=null;for(;n===Wi;)Wi=fn[--pn],fn[pn]=null,wr=fn[--pn],fn[pn]=null,Er=fn[--pn],fn[pn]=null}var on=null,an=null,Ye=!1,Vn=null;function wp(n,r){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Tp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,on=n,an=Kr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,on=n,an=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Wi!==null?{id:Er,overflow:wr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function eh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function th(n){if(Ye){var r=an;if(r){var a=r;if(!Tp(n,r)){if(eh(n))throw Error(t(418));r=Kr(a.nextSibling);var c=on;r&&Tp(n,r)?wp(c,a):(n.flags=n.flags&-4097|2,Ye=!1,on=n)}}else{if(eh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,on=n}}}function Ip(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Gl(n){if(n!==on)return!1;if(!Ye)return Ip(n),Ye=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Wc(n.type,n.memoizedProps)),r&&(r=an)){if(eh(n))throw Sp(),Error(t(418));for(;r;)wp(n,r),r=Kr(r.nextSibling)}if(Ip(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){an=Kr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}an=null}}else an=on?Kr(n.stateNode.nextSibling):null;return!0}function Sp(){for(var n=an;n;)n=Kr(n.nextSibling)}function to(){an=on=null,Ye=!1}function nh(n){Vn===null?Vn=[n]:Vn.push(n)}var LE=we.ReactCurrentBatchConfig;function ma(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var I=d.refs;v===null?delete I[p]:I[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Kl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Ap(n){var r=n._init;return r(n._payload)}function Rp(n){function r(M,N){if(n){var b=M.deletions;b===null?(M.deletions=[N],M.flags|=16):b.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)r(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=si(M,N),M.index=0,M.sibling=null,M}function p(M,N,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<N?(M.flags|=2,N):b):(M.flags|=2,N)):(M.flags|=1048576,N)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,N,b,Y){return N===null||N.tag!==6?(N=Gh(b,M.mode,Y),N.return=M,N):(N=d(N,b),N.return=M,N)}function P(M,N,b,Y){var ae=b.type;return ae===D?W(M,N,b.props.children,Y,b.key):N!==null&&(N.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Vt&&Ap(ae)===N.type)?(Y=d(N,b.props),Y.ref=ma(M,N,b),Y.return=M,Y):(Y=_u(b.type,b.key,b.props,null,M.mode,Y),Y.ref=ma(M,N,b),Y.return=M,Y)}function F(M,N,b,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Kh(b,M.mode,Y),N.return=M,N):(N=d(N,b.children||[]),N.return=M,N)}function W(M,N,b,Y,ae){return N===null||N.tag!==7?(N=ts(b,M.mode,Y,ae),N.return=M,N):(N=d(N,b),N.return=M,N)}function Q(M,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Gh(""+N,M.mode,b),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case je:return b=_u(N.type,N.key,N.props,null,M.mode,b),b.ref=ma(M,null,N),b.return=M,b;case Te:return N=Kh(N,M.mode,b),N.return=M,N;case Vt:var Y=N._init;return Q(M,Y(N._payload),b)}if(ur(N)||de(N))return N=ts(N,M.mode,b,null),N.return=M,N;Kl(M,N)}return null}function H(M,N,b,Y){var ae=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ae!==null?null:I(M,N,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case je:return b.key===ae?P(M,N,b,Y):null;case Te:return b.key===ae?F(M,N,b,Y):null;case Vt:return ae=b._init,H(M,N,ae(b._payload),Y)}if(ur(b)||de(b))return ae!==null?null:W(M,N,b,Y,null);Kl(M,b)}return null}function te(M,N,b,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(b)||null,I(N,M,""+Y,ae);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case je:return M=M.get(Y.key===null?b:Y.key)||null,P(N,M,Y,ae);case Te:return M=M.get(Y.key===null?b:Y.key)||null,F(N,M,Y,ae);case Vt:var fe=Y._init;return te(M,N,b,fe(Y._payload),ae)}if(ur(Y)||de(Y))return M=M.get(b)||null,W(N,M,Y,ae,null);Kl(N,Y)}return null}function se(M,N,b,Y){for(var ae=null,fe=null,pe=N,_e=N=0,Tt=null;pe!==null&&_e<b.length;_e++){pe.index>_e?(Tt=pe,pe=null):Tt=pe.sibling;var xe=H(M,pe,b[_e],Y);if(xe===null){pe===null&&(pe=Tt);break}n&&pe&&xe.alternate===null&&r(M,pe),N=p(xe,N,_e),fe===null?ae=xe:fe.sibling=xe,fe=xe,pe=Tt}if(_e===b.length)return a(M,pe),Ye&&Gi(M,_e),ae;if(pe===null){for(;_e<b.length;_e++)pe=Q(M,b[_e],Y),pe!==null&&(N=p(pe,N,_e),fe===null?ae=pe:fe.sibling=pe,fe=pe);return Ye&&Gi(M,_e),ae}for(pe=c(M,pe);_e<b.length;_e++)Tt=te(pe,M,_e,b[_e],Y),Tt!==null&&(n&&Tt.alternate!==null&&pe.delete(Tt.key===null?_e:Tt.key),N=p(Tt,N,_e),fe===null?ae=Tt:fe.sibling=Tt,fe=Tt);return n&&pe.forEach(function(oi){return r(M,oi)}),Ye&&Gi(M,_e),ae}function oe(M,N,b,Y){var ae=de(b);if(typeof ae!="function")throw Error(t(150));if(b=ae.call(b),b==null)throw Error(t(151));for(var fe=ae=null,pe=N,_e=N=0,Tt=null,xe=b.next();pe!==null&&!xe.done;_e++,xe=b.next()){pe.index>_e?(Tt=pe,pe=null):Tt=pe.sibling;var oi=H(M,pe,xe.value,Y);if(oi===null){pe===null&&(pe=Tt);break}n&&pe&&oi.alternate===null&&r(M,pe),N=p(oi,N,_e),fe===null?ae=oi:fe.sibling=oi,fe=oi,pe=Tt}if(xe.done)return a(M,pe),Ye&&Gi(M,_e),ae;if(pe===null){for(;!xe.done;_e++,xe=b.next())xe=Q(M,xe.value,Y),xe!==null&&(N=p(xe,N,_e),fe===null?ae=xe:fe.sibling=xe,fe=xe);return Ye&&Gi(M,_e),ae}for(pe=c(M,pe);!xe.done;_e++,xe=b.next())xe=te(pe,M,_e,xe.value,Y),xe!==null&&(n&&xe.alternate!==null&&pe.delete(xe.key===null?_e:xe.key),N=p(xe,N,_e),fe===null?ae=xe:fe.sibling=xe,fe=xe);return n&&pe.forEach(function(pw){return r(M,pw)}),Ye&&Gi(M,_e),ae}function rt(M,N,b,Y){if(typeof b=="object"&&b!==null&&b.type===D&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case je:e:{for(var ae=b.key,fe=N;fe!==null;){if(fe.key===ae){if(ae=b.type,ae===D){if(fe.tag===7){a(M,fe.sibling),N=d(fe,b.props.children),N.return=M,M=N;break e}}else if(fe.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Vt&&Ap(ae)===fe.type){a(M,fe.sibling),N=d(fe,b.props),N.ref=ma(M,fe,b),N.return=M,M=N;break e}a(M,fe);break}else r(M,fe);fe=fe.sibling}b.type===D?(N=ts(b.props.children,M.mode,Y,b.key),N.return=M,M=N):(Y=_u(b.type,b.key,b.props,null,M.mode,Y),Y.ref=ma(M,N,b),Y.return=M,M=Y)}return v(M);case Te:e:{for(fe=b.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(M,N.sibling),N=d(N,b.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else r(M,N);N=N.sibling}N=Kh(b,M.mode,Y),N.return=M,M=N}return v(M);case Vt:return fe=b._init,rt(M,N,fe(b._payload),Y)}if(ur(b))return se(M,N,b,Y);if(de(b))return oe(M,N,b,Y);Kl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,b),N.return=M,M=N):(a(M,N),N=Gh(b,M.mode,Y),N.return=M,M=N),v(M)):a(M,N)}return rt}var no=Rp(!0),Cp=Rp(!1),Ql=Qr(null),Yl=null,ro=null,rh=null;function ih(){rh=ro=Yl=null}function sh(n){var r=Ql.current;Ge(Ql),n._currentValue=r}function oh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function io(n,r){Yl=n,rh=ro=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Yt=!0),n.firstContext=null)}function mn(n){var r=n._currentValue;if(rh!==n)if(n={context:n,memoizedValue:r,next:null},ro===null){if(Yl===null)throw Error(t(308));ro=n,Yl.dependencies={lanes:0,firstContext:n}}else ro=ro.next=n;return r}var Ki=null;function ah(n){Ki===null?Ki=[n]:Ki.push(n)}function Pp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,ah(r)):(a.next=d.next,d.next=a),r.interleaved=a,Tr(n,c)}function Tr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Jr=!1;function lh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ir(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Zr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Tr(n,a)}return d=c.interleaved,d===null?(r.next=r,ah(c)):(r.next=d.next,d.next=r),c.interleaved=r,Tr(n,a)}function Xl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Br(n,a)}}function Np(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Jl(n,r,a,c){var d=n.updateQueue;Jr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,F=P.next;P.next=null,v===null?p=F:v.next=F,v=P;var W=n.alternate;W!==null&&(W=W.updateQueue,I=W.lastBaseUpdate,I!==v&&(I===null?W.firstBaseUpdate=F:I.next=F,W.lastBaseUpdate=P))}if(p!==null){var Q=d.baseState;v=0,W=F=P=null,I=p;do{var H=I.lane,te=I.eventTime;if((c&H)===H){W!==null&&(W=W.next={eventTime:te,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var se=n,oe=I;switch(H=r,te=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Q=se.call(te,Q,H);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,H=typeof se=="function"?se.call(te,Q,H):se,H==null)break e;Q=re({},Q,H);break e;case 2:Jr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[I]:H.push(I))}else te={eventTime:te,lane:H,tag:I.tag,payload:I.payload,callback:I.callback,next:null},W===null?(F=W=te,P=Q):W=W.next=te,v|=H;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;H=I,I=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(W===null&&(P=Q),d.baseState=P,d.firstBaseUpdate=F,d.lastBaseUpdate=W,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Xi|=v,n.lanes=v,n.memoizedState=Q}}function Dp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ga={},Yn=Qr(ga),ya=Qr(ga),_a=Qr(ga);function Qi(n){if(n===ga)throw Error(t(174));return n}function uh(n,r){switch(qe(_a,r),qe(ya,n),qe(Yn,ga),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:dt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=dt(r,n)}Ge(Yn),qe(Yn,r)}function so(){Ge(Yn),Ge(ya),Ge(_a)}function Vp(n){Qi(_a.current);var r=Qi(Yn.current),a=dt(r,n.type);r!==a&&(qe(ya,n),qe(Yn,a))}function ch(n){ya.current===n&&(Ge(Yn),Ge(ya))}var Xe=Qr(0);function Zl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var hh=[];function dh(){for(var n=0;n<hh.length;n++)hh[n]._workInProgressVersionPrimary=null;hh.length=0}var eu=we.ReactCurrentDispatcher,fh=we.ReactCurrentBatchConfig,Yi=0,Je=null,pt=null,Et=null,tu=!1,va=!1,Ea=0,ME=0;function xt(){throw Error(t(321))}function ph(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Dn(n[a],r[a]))return!1;return!0}function mh(n,r,a,c,d,p){if(Yi=p,Je=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,eu.current=n===null||n.memoizedState===null?jE:zE,n=a(c,d),va){p=0;do{if(va=!1,Ea=0,25<=p)throw Error(t(301));p+=1,Et=pt=null,r.updateQueue=null,eu.current=BE,n=a(c,d)}while(va)}if(eu.current=iu,r=pt!==null&&pt.next!==null,Yi=0,Et=pt=Je=null,tu=!1,r)throw Error(t(300));return n}function gh(){var n=Ea!==0;return Ea=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Je.memoizedState=Et=n:Et=Et.next=n,Et}function gn(){if(pt===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var r=Et===null?Je.memoizedState:Et.next;if(r!==null)Et=r,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Et===null?Je.memoizedState=Et=n:Et=Et.next=n}return Et}function wa(n,r){return typeof r=="function"?r(n):r}function yh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=v=null,P=null,F=p;do{var W=F.lane;if((Yi&W)===W)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:W,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(I=P=Q,v=c):P=P.next=Q,Je.lanes|=W,Xi|=W}F=F.next}while(F!==null&&F!==p);P===null?v=c:P.next=I,Dn(c,r.memoizedState)||(Yt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Je.lanes|=p,Xi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function _h(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);Dn(p,r.memoizedState)||(Yt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function Op(){}function xp(n,r){var a=Je,c=gn(),d=r(),p=!Dn(c.memoizedState,d);if(p&&(c.memoizedState=d,Yt=!0),c=c.queue,vh(bp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Ta(9,Mp.bind(null,a,c,d,r),void 0,null),wt===null)throw Error(t(349));(Yi&30)!==0||Lp(a,r,d)}return d}function Lp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Mp(n,r,a,c){r.value=a,r.getSnapshot=c,Fp(r)&&Up(n)}function bp(n,r,a){return a(function(){Fp(r)&&Up(n)})}function Fp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Dn(n,a)}catch{return!0}}function Up(n){var r=Tr(n,1);r!==null&&Mn(r,n,1,-1)}function jp(n){var r=Xn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},r.queue=n,n=n.dispatch=UE.bind(null,Je,n),[r.memoizedState,n]}function Ta(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function zp(){return gn().memoizedState}function nu(n,r,a,c){var d=Xn();Je.flags|=n,d.memoizedState=Ta(1|r,a,void 0,c===void 0?null:c)}function ru(n,r,a,c){var d=gn();c=c===void 0?null:c;var p=void 0;if(pt!==null){var v=pt.memoizedState;if(p=v.destroy,c!==null&&ph(c,v.deps)){d.memoizedState=Ta(r,a,p,c);return}}Je.flags|=n,d.memoizedState=Ta(1|r,a,p,c)}function Bp(n,r){return nu(8390656,8,n,r)}function vh(n,r){return ru(2048,8,n,r)}function $p(n,r){return ru(4,2,n,r)}function qp(n,r){return ru(4,4,n,r)}function Hp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Wp(n,r,a){return a=a!=null?a.concat([n]):null,ru(4,4,Hp.bind(null,r,n),a)}function Eh(){}function Gp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&ph(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Kp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&ph(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Qp(n,r,a){return(Yi&21)===0?(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=a):(Dn(a,r)||(a=Ui(),Je.lanes|=a,Xi|=a,n.baseState=!0),r)}function bE(n,r){var a=ke;ke=a!==0&&4>a?a:4,n(!0);var c=fh.transition;fh.transition={};try{n(!1),r()}finally{ke=a,fh.transition=c}}function Yp(){return gn().memoizedState}function FE(n,r,a){var c=ri(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Xp(n))Jp(r,a);else if(a=Pp(n,r,a,c),a!==null){var d=Ht();Mn(a,n,c,d),Zp(a,r,c)}}function UE(n,r,a){var c=ri(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xp(n))Jp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,I=p(v,a);if(d.hasEagerState=!0,d.eagerState=I,Dn(I,v)){var P=r.interleaved;P===null?(d.next=d,ah(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=Pp(n,r,d,c),a!==null&&(d=Ht(),Mn(a,n,c,d),Zp(a,r,c))}}function Xp(n){var r=n.alternate;return n===Je||r!==null&&r===Je}function Jp(n,r){va=tu=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Zp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Br(n,a)}}var iu={readContext:mn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},jE={readContext:mn,useCallback:function(n,r){return Xn().memoizedState=[n,r===void 0?null:r],n},useContext:mn,useEffect:Bp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,nu(4194308,4,Hp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return nu(4194308,4,n,r)},useInsertionEffect:function(n,r){return nu(4,2,n,r)},useMemo:function(n,r){var a=Xn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Xn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=FE.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var r=Xn();return n={current:n},r.memoizedState=n},useState:jp,useDebugValue:Eh,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=jp(!1),r=n[0];return n=bE.bind(null,n[1]),Xn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Je,d=Xn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),wt===null)throw Error(t(349));(Yi&30)!==0||Lp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Bp(bp.bind(null,c,p,n),[n]),c.flags|=2048,Ta(9,Mp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Xn(),r=wt.identifierPrefix;if(Ye){var a=wr,c=Er;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Ea++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=ME++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},zE={readContext:mn,useCallback:Gp,useContext:mn,useEffect:vh,useImperativeHandle:Wp,useInsertionEffect:$p,useLayoutEffect:qp,useMemo:Kp,useReducer:yh,useRef:zp,useState:function(){return yh(wa)},useDebugValue:Eh,useDeferredValue:function(n){var r=gn();return Qp(r,pt.memoizedState,n)},useTransition:function(){var n=yh(wa)[0],r=gn().memoizedState;return[n,r]},useMutableSource:Op,useSyncExternalStore:xp,useId:Yp,unstable_isNewReconciler:!1},BE={readContext:mn,useCallback:Gp,useContext:mn,useEffect:vh,useImperativeHandle:Wp,useInsertionEffect:$p,useLayoutEffect:qp,useMemo:Kp,useReducer:_h,useRef:zp,useState:function(){return _h(wa)},useDebugValue:Eh,useDeferredValue:function(n){var r=gn();return pt===null?r.memoizedState=n:Qp(r,pt.memoizedState,n)},useTransition:function(){var n=_h(wa)[0],r=gn().memoizedState;return[n,r]},useMutableSource:Op,useSyncExternalStore:xp,useId:Yp,unstable_isNewReconciler:!1};function On(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function wh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:re({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var su={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=ri(n),p=Ir(c,d);p.payload=r,a!=null&&(p.callback=a),r=Zr(n,p,d),r!==null&&(Mn(r,n,d,c),Xl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=ri(n),p=Ir(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Zr(n,p,d),r!==null&&(Mn(r,n,d,c),Xl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Ht(),c=ri(n),d=Ir(a,c);d.tag=2,r!=null&&(d.callback=r),r=Zr(n,d,c),r!==null&&(Mn(r,n,c,a),Xl(r,n,c))}};function em(n,r,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):r.prototype&&r.prototype.isPureReactComponent?!la(a,c)||!la(d,p):!0}function tm(n,r,a){var c=!1,d=Yr,p=r.contextType;return typeof p=="object"&&p!==null?p=mn(p):(d=Qt(r)?Hi:Ot.current,c=r.contextTypes,p=(c=c!=null)?Js(n,d):Yr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=su,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function nm(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&su.enqueueReplaceState(r,r.state,null)}function Th(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},lh(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=mn(p):(p=Qt(r)?Hi:Ot.current,d.context=Js(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(wh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&su.enqueueReplaceState(d,d.state,null),Jl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function oo(n,r){try{var a="",c=r;do a+=Ae(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function Ih(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Sh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var $E=typeof WeakMap=="function"?WeakMap:Map;function rm(n,r,a){a=Ir(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){du||(du=!0,Uh=c),Sh(n,r)},a}function im(n,r,a){a=Ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){Sh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Sh(n,r),typeof c!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function sm(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new $E;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=rw.bind(null,n,r,a),r.then(n,n))}function om(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function am(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Ir(-1,1),r.tag=2,Zr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var qE=we.ReactCurrentOwner,Yt=!1;function qt(n,r,a,c){r.child=n===null?Cp(r,null,a,c):no(r,n.child,a,c)}function lm(n,r,a,c,d){a=a.render;var p=r.ref;return io(r,d),c=mh(n,r,a,c,p,d),a=gh(),n!==null&&!Yt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Ye&&a&&Jc(r),r.flags|=1,qt(n,r,c,d),r.child)}function um(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Wh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,cm(n,r,p,c,d)):(n=_u(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(v,c)&&n.ref===r.ref)return Sr(n,r,d)}return r.flags|=1,n=si(p,c),n.ref=r.ref,n.return=r,r.child=n}function cm(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(la(p,c)&&n.ref===r.ref)if(Yt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Yt=!0);else return r.lanes=n.lanes,Sr(n,r,d)}return Ah(n,r,a,c,d)}function hm(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(lo,ln),ln|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qe(lo,ln),ln|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,qe(lo,ln),ln|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,qe(lo,ln),ln|=c;return qt(n,r,d,a),r.child}function dm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Ah(n,r,a,c,d){var p=Qt(a)?Hi:Ot.current;return p=Js(r,p),io(r,d),a=mh(n,r,a,c,p,d),c=gh(),n!==null&&!Yt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Ye&&c&&Jc(r),r.flags|=1,qt(n,r,a,d),r.child)}function fm(n,r,a,c,d){if(Qt(a)){var p=!0;$l(r)}else p=!1;if(io(r,d),r.stateNode===null)au(n,r),tm(r,a,c),Th(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,I=r.memoizedProps;v.props=I;var P=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=mn(F):(F=Qt(a)?Hi:Ot.current,F=Js(r,F));var W=a.getDerivedStateFromProps,Q=typeof W=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||P!==F)&&nm(r,v,c,F),Jr=!1;var H=r.memoizedState;v.state=H,Jl(r,c,v,d),P=r.memoizedState,I!==c||H!==P||Kt.current||Jr?(typeof W=="function"&&(wh(r,a,W,c),P=r.memoizedState),(I=Jr||em(r,a,I,c,H,P,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),v.props=c,v.state=P,v.context=F,c=I):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,kp(n,r),I=r.memoizedProps,F=r.type===r.elementType?I:On(r.type,I),v.props=F,Q=r.pendingProps,H=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=mn(P):(P=Qt(a)?Hi:Ot.current,P=Js(r,P));var te=a.getDerivedStateFromProps;(W=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Q||H!==P)&&nm(r,v,c,P),Jr=!1,H=r.memoizedState,v.state=H,Jl(r,c,v,d);var se=r.memoizedState;I!==Q||H!==se||Kt.current||Jr?(typeof te=="function"&&(wh(r,a,te,c),se=r.memoizedState),(F=Jr||em(r,a,F,c,H,se,P)||!1)?(W||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,P)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=se),v.props=c,v.state=se,v.context=P,c=F):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),c=!1)}return Rh(n,r,a,c,p,d)}function Rh(n,r,a,c,d,p){dm(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&_p(r,a,!1),Sr(n,r,p);c=r.stateNode,qE.current=r;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=no(r,n.child,null,p),r.child=no(r,null,I,p)):qt(n,r,I,p),r.memoizedState=c.state,d&&_p(r,a,!0),r.child}function pm(n){var r=n.stateNode;r.pendingContext?gp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&gp(n,r.context,!1),uh(n,r.containerInfo)}function mm(n,r,a,c,d){return to(),nh(d),r.flags|=256,qt(n,r,a,c),r.child}var Ch={dehydrated:null,treeContext:null,retryLane:0};function Ph(n){return{baseLanes:n,cachePool:null,transitions:null}}function gm(n,r,a){var c=r.pendingProps,d=Xe.current,p=!1,v=(r.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Xe,d&1),n===null)return th(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=r.mode,p=r.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=vu(v,c,0,null),n=ts(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=Ph(a),r.memoizedState=Ch,n):kh(r,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return HE(n,r,v,c,I,d,a);if(p){p=c.fallback,v=r.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=si(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=si(I,p):(p=ts(p,v,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,v=n.child.memoizedState,v=v===null?Ph(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,r.memoizedState=Ch,c}return p=n.child,n=p.sibling,c=si(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function kh(n,r){return r=vu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ou(n,r,a,c){return c!==null&&nh(c),no(r,n.child,null,a),n=kh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function HE(n,r,a,c,d,p,v){if(a)return r.flags&256?(r.flags&=-257,c=Ih(Error(t(422))),ou(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=vu({mode:"visible",children:c.children},d,0,null),p=ts(p,d,v,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&no(r,n.child,null,v),r.child.memoizedState=Ph(v),r.memoizedState=Ch,p);if((r.mode&1)===0)return ou(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=Ih(p,c,void 0),ou(n,r,v,c)}if(I=(v&n.childLanes)!==0,Yt||I){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Tr(n,d),Mn(c,n,d,-1))}return Hh(),c=Ih(Error(t(421))),ou(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=iw.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,an=Kr(d.nextSibling),on=r,Ye=!0,Vn=null,n!==null&&(fn[pn++]=Er,fn[pn++]=wr,fn[pn++]=Wi,Er=n.id,wr=n.overflow,Wi=r),r=kh(r,c.children),r.flags|=4096,r)}function ym(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),oh(n.return,r,a)}function Nh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function _m(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(qt(n,r,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ym(n,a,r);else if(n.tag===19)ym(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Xe,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Zl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Nh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Zl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Nh(r,!0,a,null,p);break;case"together":Nh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function au(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Sr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Xi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=si(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=si(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function WE(n,r,a){switch(r.tag){case 3:pm(r),to();break;case 5:Vp(r);break;case 1:Qt(r.type)&&$l(r);break;case 4:uh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;qe(Ql,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qe(Xe,Xe.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?gm(n,r,a):(qe(Xe,Xe.current&1),n=Sr(n,r,a),n!==null?n.sibling:null);qe(Xe,Xe.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return _m(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Xe,Xe.current),c)break;return null;case 22:case 23:return r.lanes=0,hm(n,r,a)}return Sr(n,r,a)}var vm,Dh,Em,wm;vm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Dh=function(){},Em=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Qi(Yn.current);var p=null;switch(a){case"input":d=Pi(n,d),c=Pi(n,c),p=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),p=[];break;case"textarea":d=bo(n,d),c=bo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=jl)}$o(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var P=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&P!==I&&(P!=null||I!=null))if(F==="style")if(I){for(v in I)!I.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&I[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(F,a)),a=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(p=p||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&We("scroll",n),p||I===P||(p=[])):(p=p||[]).push(F,P))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},wm=function(n,r,a,c){a!==c&&(r.flags|=4)};function Ia(n,r){if(!Ye)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function GE(n,r,a){var c=r.pendingProps;switch(Zc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(r),null;case 1:return Qt(r.type)&&Bl(),Lt(r),null;case 3:return c=r.stateNode,so(),Ge(Kt),Ge(Ot),dh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Gl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vn!==null&&(Bh(Vn),Vn=null))),Dh(n,r),Lt(r),null;case 5:ch(r);var d=Qi(_a.current);if(a=r.type,n!==null&&r.stateNode!=null)Em(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Lt(r),null}if(n=Qi(Yn.current),Gl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Qn]=r,c[fa]=p,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<ca.length;d++)We(ca[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":Es(c,p),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},We("invalid",c);break;case"textarea":Ts(c,p),We("invalid",c)}$o(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var I=p[v];v==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Ul(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Ul(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":lr(c),hl(c,p,!0);break;case"textarea":lr(c),Fo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=jl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ht(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Qn]=r,n[fa]=c,vm(n,r,!1,!1),r.stateNode=n;e:{switch(v=qo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<ca.length;d++)We(ca[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":Es(n,c),d=Pi(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),We("invalid",n);break;case"textarea":Ts(n,c),d=bo(n,c),We("invalid",n);break;default:d=c}$o(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var P=I[p];p==="style"?zo(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Uo(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&br(n,P):typeof P=="number"&&br(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&We("scroll",n):P!=null&&me(n,p,P,v))}switch(a){case"input":lr(n),hl(n,c,!1);break;case"textarea":lr(n),Fo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?cr(n,!!c.multiple,p,!1):c.defaultValue!=null&&cr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Lt(r),null;case 6:if(n&&r.stateNode!=null)wm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Qi(_a.current),Qi(Yn.current),Gl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Qn]=r,(p=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Ul(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ul(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qn]=r,r.stateNode=c}return Lt(r),null;case 13:if(Ge(Xe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&an!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Sp(),to(),r.flags|=98560,p=!1;else if(p=Gl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Qn]=r}else to(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Lt(r),p=!1}else Vn!==null&&(Bh(Vn),Vn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Xe.current&1)!==0?mt===0&&(mt=3):Hh())),r.updateQueue!==null&&(r.flags|=4),Lt(r),null);case 4:return so(),Dh(n,r),n===null&&ha(r.stateNode.containerInfo),Lt(r),null;case 10:return sh(r.type._context),Lt(r),null;case 17:return Qt(r.type)&&Bl(),Lt(r),null;case 19:if(Ge(Xe),p=r.memoizedState,p===null)return Lt(r),null;if(c=(r.flags&128)!==0,v=p.rendering,v===null)if(c)Ia(p,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Zl(n),v!==null){for(r.flags|=128,Ia(p,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Xe,Xe.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>uo&&(r.flags|=128,c=!0,Ia(p,!1),r.lanes=4194304)}else{if(!c)if(n=Zl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Ia(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Ye)return Lt(r),null}else 2*$e()-p.renderingStartTime>uo&&a!==1073741824&&(r.flags|=128,c=!0,Ia(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(a=p.last,a!==null?a.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=Xe.current,qe(Xe,c?a&1|2:a&1),r):(Lt(r),null);case 22:case 23:return qh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(ln&1073741824)!==0&&(Lt(r),r.subtreeFlags&6&&(r.flags|=8192)):Lt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function KE(n,r){switch(Zc(r),r.tag){case 1:return Qt(r.type)&&Bl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return so(),Ge(Kt),Ge(Ot),dh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ch(r),null;case 13:if(Ge(Xe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));to()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ge(Xe),null;case 4:return so(),null;case 10:return sh(r.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var lu=!1,Mt=!1,QE=typeof WeakSet=="function"?WeakSet:Set,ie=null;function ao(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(n,r,c)}else a.current=null}function Vh(n,r,a){try{a()}catch(c){et(n,r,c)}}var Tm=!1;function YE(n,r){if(qc=Hr,n=ep(),Mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,I=-1,P=-1,F=0,W=0,Q=n,H=null;t:for(;;){for(var te;Q!==a||d!==0&&Q.nodeType!==3||(I=v+d),Q!==p||c!==0&&Q.nodeType!==3||(P=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(te=Q.firstChild)!==null;)H=Q,Q=te;for(;;){if(Q===n)break t;if(H===a&&++F===d&&(I=v),H===p&&++W===c&&(P=v),(te=Q.nextSibling)!==null)break;Q=H,H=Q.parentNode}Q=te}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:n,selectionRange:a},Hr=!1,ie=r;ie!==null;)if(r=ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ie=n;else for(;ie!==null;){r=ie;try{var se=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,rt=se.memoizedState,M=r.stateNode,N=M.getSnapshotBeforeUpdate(r.elementType===r.type?oe:On(r.type,oe),rt);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){et(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,ie=n;break}ie=r.return}return se=Tm,Tm=!1,se}function Sa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Vh(r,a,p)}d=d.next}while(d!==c)}}function uu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Oh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Im(n){var r=n.alternate;r!==null&&(n.alternate=null,Im(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Qn],delete r[fa],delete r[Qc],delete r[VE],delete r[OE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Sm(n){return n.tag===5||n.tag===3||n.tag===4}function Am(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=jl));else if(c!==4&&(n=n.child,n!==null))for(xh(n,r,a),n=n.sibling;n!==null;)xh(n,r,a),n=n.sibling}function Lh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Lh(n,r,a),n=n.sibling;n!==null;)Lh(n,r,a),n=n.sibling}var Rt=null,xn=!1;function ei(n,r,a){for(a=a.child;a!==null;)Rm(n,r,a),a=a.sibling}function Rm(n,r,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(bi,a)}catch{}switch(a.tag){case 5:Mt||ao(a,r);case 6:var c=Rt,d=xn;Rt=null,ei(n,r,a),Rt=c,xn=d,Rt!==null&&(xn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(xn?(n=Rt,a=a.stateNode,n.nodeType===8?Kc(n.parentNode,a):n.nodeType===1&&Kc(n,a),kn(n)):Kc(Rt,a.stateNode));break;case 4:c=Rt,d=xn,Rt=a.stateNode.containerInfo,xn=!0,ei(n,r,a),Rt=c,xn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Vh(a,r,v),d=d.next}while(d!==c)}ei(n,r,a);break;case 1:if(!Mt&&(ao(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){et(a,r,I)}ei(n,r,a);break;case 21:ei(n,r,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ei(n,r,a),Mt=c):ei(n,r,a);break;default:ei(n,r,a)}}function Cm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new QE),r.forEach(function(c){var d=sw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ln(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=r,I=v;e:for(;I!==null;){switch(I.tag){case 5:Rt=I.stateNode,xn=!1;break e;case 3:Rt=I.stateNode.containerInfo,xn=!0;break e;case 4:Rt=I.stateNode.containerInfo,xn=!0;break e}I=I.return}if(Rt===null)throw Error(t(160));Rm(p,v,d),Rt=null,xn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(F){et(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Pm(r,n),r=r.sibling}function Pm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(r,n),Jn(n),c&4){try{Sa(3,n,n.return),uu(3,n)}catch(oe){et(n,n.return,oe)}try{Sa(5,n,n.return)}catch(oe){et(n,n.return,oe)}}break;case 1:Ln(r,n),Jn(n),c&512&&a!==null&&ao(a,a.return);break;case 5:if(Ln(r,n),Jn(n),c&512&&a!==null&&ao(a,a.return),n.flags&32){var d=n.stateNode;try{br(d,"")}catch(oe){et(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Lo(d,p),qo(I,v);var F=qo(I,p);for(v=0;v<P.length;v+=2){var W=P[v],Q=P[v+1];W==="style"?zo(d,Q):W==="dangerouslySetInnerHTML"?Uo(d,Q):W==="children"?br(d,Q):me(d,W,Q,F)}switch(I){case"input":Mo(d,p);break;case"textarea":Is(d,p);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?cr(d,!!p.multiple,te,!1):H!==!!p.multiple&&(p.defaultValue!=null?cr(d,!!p.multiple,p.defaultValue,!0):cr(d,!!p.multiple,p.multiple?[]:"",!1))}d[fa]=p}catch(oe){et(n,n.return,oe)}}break;case 6:if(Ln(r,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(oe){et(n,n.return,oe)}}break;case 3:if(Ln(r,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{kn(r.containerInfo)}catch(oe){et(n,n.return,oe)}break;case 4:Ln(r,n),Jn(n);break;case 13:Ln(r,n),Jn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Fh=$e())),c&4&&Cm(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(F=Mt)||W,Ln(r,n),Mt=F):Ln(r,n),Jn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!W&&(n.mode&1)!==0)for(ie=n,W=n.child;W!==null;){for(Q=ie=W;ie!==null;){switch(H=ie,te=H.child,H.tag){case 0:case 11:case 14:case 15:Sa(4,H,H.return);break;case 1:ao(H,H.return);var se=H.stateNode;if(typeof se.componentWillUnmount=="function"){c=H,a=H.return;try{r=c,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(oe){et(c,a,oe)}}break;case 5:ao(H,H.return);break;case 22:if(H.memoizedState!==null){Dm(Q);continue}}te!==null?(te.return=H,ie=te):Dm(Q)}W=W.sibling}e:for(W=null,Q=n;;){if(Q.tag===5){if(W===null){W=Q;try{d=Q.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Q.stateNode,P=Q.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=jo("display",v))}catch(oe){et(n,n.return,oe)}}}else if(Q.tag===6){if(W===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(oe){et(n,n.return,oe)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;W===Q&&(W=null),Q=Q.return}W===Q&&(W=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Ln(r,n),Jn(n),c&4&&Cm(n);break;case 21:break;default:Ln(r,n),Jn(n)}}function Jn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Sm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(br(d,""),c.flags&=-33);var p=Am(n);Lh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=Am(n);xh(n,I,v);break;default:throw Error(t(161))}}catch(P){et(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function XE(n,r,a){ie=n,km(n)}function km(n,r,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||lu;if(!v){var I=d.alternate,P=I!==null&&I.memoizedState!==null||Mt;I=lu;var F=Mt;if(lu=v,(Mt=P)&&!F)for(ie=d;ie!==null;)v=ie,P=v.child,v.tag===22&&v.memoizedState!==null?Vm(d):P!==null?(P.return=v,ie=P):Vm(d);for(;p!==null;)ie=p,km(p),p=p.sibling;ie=d,lu=I,Mt=F}Nm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ie=p):Nm(n)}}function Nm(n){for(;ie!==null;){var r=ie;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Mt||uu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:On(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Dp(r,p,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Dp(r,v,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var W=F.memoizedState;if(W!==null){var Q=W.dehydrated;Q!==null&&kn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||r.flags&512&&Oh(r)}catch(H){et(r,r.return,H)}}if(r===n){ie=null;break}if(a=r.sibling,a!==null){a.return=r.return,ie=a;break}ie=r.return}}function Dm(n){for(;ie!==null;){var r=ie;if(r===n){ie=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ie=a;break}ie=r.return}}function Vm(n){for(;ie!==null;){var r=ie;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{uu(4,r)}catch(P){et(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){et(r,d,P)}}var p=r.return;try{Oh(r)}catch(P){et(r,p,P)}break;case 5:var v=r.return;try{Oh(r)}catch(P){et(r,v,P)}}}catch(P){et(r,r.return,P)}if(r===n){ie=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ie=I;break}ie=r.return}}var JE=Math.ceil,cu=we.ReactCurrentDispatcher,Mh=we.ReactCurrentOwner,yn=we.ReactCurrentBatchConfig,Oe=0,wt=null,at=null,Ct=0,ln=0,lo=Qr(0),mt=0,Aa=null,Xi=0,hu=0,bh=0,Ra=null,Xt=null,Fh=0,uo=1/0,Ar=null,du=!1,Uh=null,ti=null,fu=!1,ni=null,pu=0,Ca=0,jh=null,mu=-1,gu=0;function Ht(){return(Oe&6)!==0?$e():mu!==-1?mu:mu=$e()}function ri(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Ct!==0?Ct&-Ct:LE.transition!==null?(gu===0&&(gu=Ui()),gu):(n=ke,n!==0||(n=window.event,n=n===void 0?16:ta(n.type)),n)}function Mn(n,r,a,c){if(50<Ca)throw Ca=0,jh=null,Error(t(185));zr(n,a,c),((Oe&2)===0||n!==wt)&&(n===wt&&((Oe&2)===0&&(hu|=a),mt===4&&ii(n,Ct)),Jt(n,c),a===1&&Oe===0&&(r.mode&1)===0&&(uo=$e()+500,ql&&Xr()))}function Jt(n,r){var a=n.callbackNode;fr(n,r);var c=Fi(n,n===wt?Ct:0);if(c===0)a!==null&&Yo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Yo(a),r===1)n.tag===0?xE(xm.bind(null,n)):vp(xm.bind(null,n)),NE(function(){(Oe&6)===0&&Xr()}),a=null;else{switch($r(c)){case 1:a=Mi;break;case 4:a=Fr;break;case 16:a=cn;break;case 536870912:a=gl;break;default:a=cn}a=Bm(a,Om.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Om(n,r){if(mu=-1,gu=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(co()&&n.callbackNode!==a)return null;var c=Fi(n,n===wt?Ct:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=yu(n,c);else{r=c;var d=Oe;Oe|=2;var p=Mm();(wt!==n||Ct!==r)&&(Ar=null,uo=$e()+500,Zi(n,r));do try{tw();break}catch(I){Lm(n,I)}while(!0);ih(),cu.current=p,Oe=d,at!==null?r=0:(wt=null,Ct=0,r=mt)}if(r!==0){if(r===2&&(d=nn(n),d!==0&&(c=d,r=zh(n,d))),r===1)throw a=Aa,Zi(n,0),ii(n,c),Jt(n,$e()),a;if(r===6)ii(n,c);else{if(d=n.current.alternate,(c&30)===0&&!ZE(d)&&(r=yu(n,c),r===2&&(p=nn(n),p!==0&&(c=p,r=zh(n,p))),r===1))throw a=Aa,Zi(n,0),ii(n,c),Jt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:es(n,Xt,Ar);break;case 3:if(ii(n,c),(c&130023424)===c&&(r=Fh+500-$e(),10<r)){if(Fi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Gc(es.bind(null,n,Xt,Ar),r);break}es(n,Xt,Ar);break;case 4:if(ii(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-Bt(c);p=1<<v,v=r[v],v>d&&(d=v),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*JE(c/1960))-c,10<c){n.timeoutHandle=Gc(es.bind(null,n,Xt,Ar),c);break}es(n,Xt,Ar);break;case 5:es(n,Xt,Ar);break;default:throw Error(t(329))}}}return Jt(n,$e()),n.callbackNode===a?Om.bind(null,n):null}function zh(n,r){var a=Ra;return n.current.memoizedState.isDehydrated&&(Zi(n,r).flags|=256),n=yu(n,r),n!==2&&(r=Xt,Xt=a,r!==null&&Bh(r)),n}function Bh(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function ZE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Dn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ii(n,r){for(r&=~bh,r&=~hu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Bt(r),c=1<<a;n[a]=-1,r&=~c}}function xm(n){if((Oe&6)!==0)throw Error(t(327));co();var r=Fi(n,0);if((r&1)===0)return Jt(n,$e()),null;var a=yu(n,r);if(n.tag!==0&&a===2){var c=nn(n);c!==0&&(r=c,a=zh(n,c))}if(a===1)throw a=Aa,Zi(n,0),ii(n,r),Jt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,es(n,Xt,Ar),Jt(n,$e()),null}function $h(n,r){var a=Oe;Oe|=1;try{return n(r)}finally{Oe=a,Oe===0&&(uo=$e()+500,ql&&Xr())}}function Ji(n){ni!==null&&ni.tag===0&&(Oe&6)===0&&co();var r=Oe;Oe|=1;var a=yn.transition,c=ke;try{if(yn.transition=null,ke=1,n)return n()}finally{ke=c,yn.transition=a,Oe=r,(Oe&6)===0&&Xr()}}function qh(){ln=lo.current,Ge(lo)}function Zi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,kE(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(Zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Bl();break;case 3:so(),Ge(Kt),Ge(Ot),dh();break;case 5:ch(c);break;case 4:so();break;case 13:Ge(Xe);break;case 19:Ge(Xe);break;case 10:sh(c.type._context);break;case 22:case 23:qh()}a=a.return}if(wt=n,at=n=si(n.current,null),Ct=ln=r,mt=0,Aa=null,bh=hu=Xi=0,Xt=Ra=null,Ki!==null){for(r=0;r<Ki.length;r++)if(a=Ki[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}Ki=null}return n}function Lm(n,r){do{var a=at;try{if(ih(),eu.current=iu,tu){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}tu=!1}if(Yi=0,Et=pt=Je=null,va=!1,Ea=0,Mh.current=null,a===null||a.return===null){mt=1,Aa=r,at=null;break}e:{var p=n,v=a.return,I=a,P=r;if(r=Ct,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,W=I,Q=W.tag;if((W.mode&1)===0&&(Q===0||Q===11||Q===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var te=om(v);if(te!==null){te.flags&=-257,am(te,v,I,p,r),te.mode&1&&sm(p,F,r),r=te,P=F;var se=r.updateQueue;if(se===null){var oe=new Set;oe.add(P),r.updateQueue=oe}else se.add(P);break e}else{if((r&1)===0){sm(p,F,r),Hh();break e}P=Error(t(426))}}else if(Ye&&I.mode&1){var rt=om(v);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),am(rt,v,I,p,r),nh(oo(P,I));break e}}p=P=oo(P,I),mt!==4&&(mt=2),Ra===null?Ra=[p]:Ra.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=rm(p,P,r);Np(p,M);break e;case 1:I=P;var N=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ti===null||!ti.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var Y=im(p,I,r);Np(p,Y);break e}}p=p.return}while(p!==null)}Fm(a)}catch(ae){r=ae,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function Mm(){var n=cu.current;return cu.current=iu,n===null?iu:n}function Hh(){(mt===0||mt===3||mt===2)&&(mt=4),wt===null||(Xi&268435455)===0&&(hu&268435455)===0||ii(wt,Ct)}function yu(n,r){var a=Oe;Oe|=2;var c=Mm();(wt!==n||Ct!==r)&&(Ar=null,Zi(n,r));do try{ew();break}catch(d){Lm(n,d)}while(!0);if(ih(),Oe=a,cu.current=c,at!==null)throw Error(t(261));return wt=null,Ct=0,mt}function ew(){for(;at!==null;)bm(at)}function tw(){for(;at!==null&&!pl();)bm(at)}function bm(n){var r=zm(n.alternate,n,ln);n.memoizedProps=n.pendingProps,r===null?Fm(n):at=r,Mh.current=null}function Fm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=GE(a,r,ln),a!==null){at=a;return}}else{if(a=KE(a,r),a!==null){a.flags&=32767,at=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,at=null;return}}if(r=r.sibling,r!==null){at=r;return}at=r=n}while(r!==null);mt===0&&(mt=5)}function es(n,r,a){var c=ke,d=yn.transition;try{yn.transition=null,ke=1,nw(n,r,a,c)}finally{yn.transition=d,ke=c}return null}function nw(n,r,a,c){do co();while(ni!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ze(n,p),n===wt&&(at=wt=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||fu||(fu=!0,Bm(cn,function(){return co(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=yn.transition,yn.transition=null;var v=ke;ke=1;var I=Oe;Oe|=4,Mh.current=null,YE(n,a),Pm(a,n),TE(Hc),Hr=!!qc,Hc=qc=null,n.current=a,XE(a),Pc(),Oe=I,ke=v,yn.transition=p}else n.current=a;if(fu&&(fu=!1,ni=n,pu=d),p=n.pendingLanes,p===0&&(ti=null),yl(a.stateNode),Jt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(du)throw du=!1,n=Uh,Uh=null,n;return(pu&1)!==0&&n.tag!==0&&co(),p=n.pendingLanes,(p&1)!==0?n===jh?Ca++:(Ca=0,jh=n):Ca=0,Xr(),null}function co(){if(ni!==null){var n=$r(pu),r=yn.transition,a=ke;try{if(yn.transition=null,ke=16>n?16:n,ni===null)var c=!1;else{if(n=ni,ni=null,pu=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,ie=n.current;ie!==null;){var p=ie,v=p.child;if((ie.flags&16)!==0){var I=p.deletions;if(I!==null){for(var P=0;P<I.length;P++){var F=I[P];for(ie=F;ie!==null;){var W=ie;switch(W.tag){case 0:case 11:case 15:Sa(8,W,p)}var Q=W.child;if(Q!==null)Q.return=W,ie=Q;else for(;ie!==null;){W=ie;var H=W.sibling,te=W.return;if(Im(W),W===F){ie=null;break}if(H!==null){H.return=te,ie=H;break}ie=te}}}var se=p.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var rt=oe.sibling;oe.sibling=null,oe=rt}while(oe!==null)}}ie=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,ie=v;else e:for(;ie!==null;){if(p=ie,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Sa(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ie=M;break e}ie=p.return}}var N=n.current;for(ie=N;ie!==null;){v=ie;var b=v.child;if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,ie=b;else e:for(v=N;ie!==null;){if(I=ie,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:uu(9,I)}}catch(ae){et(I,I.return,ae)}if(I===v){ie=null;break e}var Y=I.sibling;if(Y!==null){Y.return=I.return,ie=Y;break e}ie=I.return}}if(Oe=d,Xr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(bi,n)}catch{}c=!0}return c}finally{ke=a,yn.transition=r}}return!1}function Um(n,r,a){r=oo(a,r),r=rm(n,r,1),n=Zr(n,r,1),r=Ht(),n!==null&&(zr(n,1,r),Jt(n,r))}function et(n,r,a){if(n.tag===3)Um(n,n,a);else for(;r!==null;){if(r.tag===3){Um(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ti===null||!ti.has(c))){n=oo(a,n),n=im(r,n,1),r=Zr(r,n,1),n=Ht(),r!==null&&(zr(r,1,n),Jt(r,n));break}}r=r.return}}function rw(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Ht(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(Ct&a)===a&&(mt===4||mt===3&&(Ct&130023424)===Ct&&500>$e()-Fh?Zi(n,0):bh|=a),Jt(n,r)}function jm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Os,Os<<=1,(Os&130023424)===0&&(Os=4194304)));var a=Ht();n=Tr(n,r),n!==null&&(zr(n,r,a),Jt(n,a))}function iw(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),jm(n,a)}function sw(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),jm(n,a)}var zm;zm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Kt.current)Yt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Yt=!1,WE(n,r,a);Yt=(n.flags&131072)!==0}else Yt=!1,Ye&&(r.flags&1048576)!==0&&Ep(r,Wl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;au(n,r),n=r.pendingProps;var d=Js(r,Ot.current);io(r,a),d=mh(null,r,c,n,d,a);var p=gh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Qt(c)?(p=!0,$l(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,lh(r),d.updater=su,r.stateNode=d,d._reactInternals=r,Th(r,c,n,a),r=Rh(null,r,c,!0,p,a)):(r.tag=0,Ye&&p&&Jc(r),qt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(au(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=aw(c),n=On(c,n),d){case 0:r=Ah(null,r,c,n,a);break e;case 1:r=fm(null,r,c,n,a);break e;case 11:r=lm(null,r,c,n,a);break e;case 14:r=um(null,r,c,On(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),Ah(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),fm(n,r,c,d,a);case 3:e:{if(pm(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,kp(n,r),Jl(r,c,null,a);var v=r.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=oo(Error(t(423)),r),r=mm(n,r,c,a,d);break e}else if(c!==d){d=oo(Error(t(424)),r),r=mm(n,r,c,a,d);break e}else for(an=Kr(r.stateNode.containerInfo.firstChild),on=r,Ye=!0,Vn=null,a=Cp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(to(),c===d){r=Sr(n,r,a);break e}qt(n,r,c,a)}r=r.child}return r;case 5:return Vp(r),n===null&&th(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,Wc(c,d)?v=null:p!==null&&Wc(c,p)&&(r.flags|=32),dm(n,r),qt(n,r,v,a),r.child;case 6:return n===null&&th(r),null;case 13:return gm(n,r,a);case 4:return uh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=no(r,null,c,a):qt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),lm(n,r,c,d,a);case 7:return qt(n,r,r.pendingProps,a),r.child;case 8:return qt(n,r,r.pendingProps.children,a),r.child;case 12:return qt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,v=d.value,qe(Ql,c._currentValue),c._currentValue=v,p!==null)if(Dn(p.value,v)){if(p.children===d.children&&!Kt.current){r=Sr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){v=p.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=Ir(-1,a&-a),P.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var W=F.pending;W===null?P.next=P:(P.next=W.next,W.next=P),F.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),oh(p.return,a,r),I.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),oh(v,a,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}qt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,io(r,a),d=mn(d),c=c(d),r.flags|=1,qt(n,r,c,a),r.child;case 14:return c=r.type,d=On(c,r.pendingProps),d=On(c.type,d),um(n,r,c,d,a);case 15:return cm(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),au(n,r),r.tag=1,Qt(c)?(n=!0,$l(r)):n=!1,io(r,a),tm(r,c,d),Th(r,c,d,a),Rh(null,r,c,!0,n,a);case 19:return _m(n,r,a);case 22:return hm(n,r,a)}throw Error(t(156,r.tag))};function Bm(n,r){return Ds(n,r)}function ow(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,r,a,c){return new ow(n,r,a,c)}function Wh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function aw(n){if(typeof n=="function")return Wh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===Dt)return 14}return 2}function si(n,r){var a=n.alternate;return a===null?(a=_n(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function _u(n,r,a,c,d,p){var v=2;if(c=n,typeof n=="function")Wh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case D:return ts(a.children,d,p,r);case S:v=8,d|=8;break;case R:return n=_n(12,a,r,d|2),n.elementType=R,n.lanes=p,n;case A:return n=_n(13,a,r,d),n.elementType=A,n.lanes=p,n;case tt:return n=_n(19,a,r,d),n.elementType=tt,n.lanes=p,n;case Ue:return vu(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:v=10;break e;case V:v=9;break e;case x:v=11;break e;case Dt:v=14;break e;case Vt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_n(v,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function ts(n,r,a,c){return n=_n(7,n,c,r),n.lanes=a,n}function vu(n,r,a,c){return n=_n(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Gh(n,r,a){return n=_n(6,n,null,r),n.lanes=a,n}function Kh(n,r,a){return r=_n(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function lw(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jr(0),this.expirationTimes=jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Qh(n,r,a,c,d,p,v,I,P){return n=new lw(n,r,a,I,P),r===1?(r=1,p===!0&&(r|=8)):r=0,p=_n(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(p),n}function uw(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function $m(n){if(!n)return Yr;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Qt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return yp(n,a,r)}return r}function qm(n,r,a,c,d,p,v,I,P){return n=Qh(a,c,!0,n,d,p,v,I,P),n.context=$m(null),a=n.current,c=Ht(),d=ri(a),p=Ir(c,d),p.callback=r??null,Zr(a,p,d),n.current.lanes=d,zr(n,d,c),Jt(n,c),n}function Eu(n,r,a,c){var d=r.current,p=Ht(),v=ri(d);return a=$m(a),r.context===null?r.context=a:r.pendingContext=a,r=Ir(p,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Zr(d,r,v),n!==null&&(Mn(n,d,v,p),Xl(n,d,v)),v}function wu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Yh(n,r){Hm(n,r),(n=n.alternate)&&Hm(n,r)}function cw(){return null}var Wm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Xh(n){this._internalRoot=n}Tu.prototype.render=Xh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Eu(n,r,null,null)},Tu.prototype.unmount=Xh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ji(function(){Eu(null,n,null,null)}),r[_r]=null}};function Tu(n){this._internalRoot=n}Tu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Tl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Hn.length&&r!==0&&r<Hn[a].priority;a++);Hn.splice(a,0,n),a===0&&Al(n)}};function Jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Iu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function hw(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=wu(v);p.call(F)}}var v=qm(r,c,n,0,null,!1,!1,"",Gm);return n._reactRootContainer=v,n[_r]=v.current,ha(n.nodeType===8?n.parentNode:n),Ji(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=wu(P);I.call(F)}}var P=Qh(n,0,!1,null,null,!1,!1,"",Gm);return n._reactRootContainer=P,n[_r]=P.current,ha(n.nodeType===8?n.parentNode:n),Ji(function(){Eu(r,P,a,c)}),P}function Su(n,r,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var I=d;d=function(){var P=wu(v);I.call(P)}}Eu(r,v,n,d)}else v=hw(a,r,n,d,c);return wu(v)}El=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ur(r.pendingLanes);a!==0&&(Br(r,a|1),Jt(r,$e()),(Oe&6)===0&&(uo=$e()+500,Xr()))}break;case 13:Ji(function(){var c=Tr(n,1);if(c!==null){var d=Ht();Mn(c,n,1,d)}}),Yh(n,1)}},xs=function(n){if(n.tag===13){var r=Tr(n,134217728);if(r!==null){var a=Ht();Mn(r,n,134217728,a)}Yh(n,134217728)}},wl=function(n){if(n.tag===13){var r=ri(n),a=Tr(n,r);if(a!==null){var c=Ht();Mn(a,n,r,c)}Yh(n,r)}},Tl=function(){return ke},Il=function(n,r){var a=ke;try{return ke=n,r()}finally{ke=a}},As=function(n,r,a){switch(r){case"input":if(Mo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=zl(c);if(!d)throw Error(t(90));vs(c),Mo(c,d)}}}break;case"textarea":Is(n,a);break;case"select":r=a.value,r!=null&&cr(n,!!a.multiple,r,!1)}},Vi=$h,Wo=Ji;var dw={usingClientEntryPoint:!1,Events:[pa,Ys,zl,$n,Ho,$h]},Pa={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fw={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Qo(n),n===null?null:n.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||cw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{bi=Au.inject(fw),tn=Au}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dw,Zt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(r))throw Error(t(200));return uw(n,r,null,a)},Zt.createRoot=function(n,r){if(!Jh(n))throw Error(t(299));var a=!1,c="",d=Wm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Qh(n,1,!1,null,null,a,!1,c,d),n[_r]=r.current,ha(n.nodeType===8?n.parentNode:n),new Xh(r)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Qo(r),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return Ji(n)},Zt.hydrate=function(n,r,a){if(!Iu(r))throw Error(t(200));return Su(null,n,r,!0,a)},Zt.hydrateRoot=function(n,r,a){if(!Jh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=Wm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=qm(r,null,n,1,a??null,d,!1,p,v),n[_r]=r.current,ha(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Tu(r)},Zt.render=function(n,r,a){if(!Iu(r))throw Error(t(200));return Su(null,n,r,!1,a)},Zt.unmountComponentAtNode=function(n){if(!Iu(n))throw Error(t(40));return n._reactRootContainer?(Ji(function(){Su(null,null,n,!1,function(){n._reactRootContainer=null,n[_r]=null})}),!0):!1},Zt.unstable_batchedUpdates=$h,Zt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Iu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Su(n,r,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var Oy;function LR(){if(Oy)return dd.exports;Oy=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),dd.exports=xR(),dd.exports}var xy;function MR(){if(xy)return Vu;xy=1;var i=LR();return Vu.createRoot=i.createRoot,Vu.hydrateRoot=i.hydrateRoot,Vu}var bR=MR();function FR({onStart:i}){return Z.jsxs("main",{className:"page",children:[Z.jsxs("section",{className:"hero",children:[Z.jsx("p",{className:"badge",children:"AI Workout Accountability"}),Z.jsx("h1",{children:"Your AI coach that helps you actually work out."}),Z.jsx("p",{className:"subtitle",children:"CoachPulse combines simple workouts, streak tracking, daily check-ins, and supportive AI coaching to help you stay consistent."}),Z.jsx("button",{className:"primary",onClick:i,children:"Start Free Beta"})]}),Z.jsxs("section",{className:"cards",children:[Z.jsxs("div",{className:"card",children:[Z.jsx("h2",{children:"Daily check-ins"}),Z.jsx("p",{children:"Tell CoachPulse whether you completed, partly completed, or missed your workout."})]}),Z.jsxs("div",{className:"card",children:[Z.jsx("h2",{children:"Streak tracking"}),Z.jsx("p",{children:"Build consistency with a simple streak and monthly progress view."})]}),Z.jsxs("div",{className:"card",children:[Z.jsx("h2",{children:"AI accountability"}),Z.jsx("p",{children:"Get supportive coaching when you feel tired, busy, or unmotivated."})]})]})]})}function UR({onSubmit:i}){const[e,t]=gt.useState("");async function s(o){t(o);try{console.log("🔥 Click:",o);const l=xr.currentUser;if(!l){console.log("❌ NO USER LOGGED IN");return}const h=new Date().toISOString().split("T")[0],m=Za(os,"users",l.uid,"workouts",h);await aE(m,{status:o,date:h,createdAt:cE()}),console.log("✅ SAVED REAL WORKOUT TO FIRESTORE"),i&&i(o)}catch(l){console.error("❌ Firestore error:",l)}}return Z.jsxs("section",{className:"panel",children:[Z.jsx("h2",{children:"Today's workout"}),Z.jsxs("div",{className:"button-row",children:[Z.jsx("button",{onClick:()=>s("completed"),children:"Completed"}),Z.jsx("button",{onClick:()=>s("partial"),children:"Partly done"}),Z.jsx("button",{onClick:()=>s("missed"),children:"Missed"})]})]})}function jR({streak:i,completedWorkouts:e,goal:t}){const[s,o]=gt.useState([]),[l,h]=gt.useState(""),[m,g]=gt.useState(!1);gt.useEffect(()=>{const T=xr.currentUser;if(!T)return;const C=zd(os,"users",T.uid,"coachMessages"),U=IR(C,SR("createdAt","asc")),G=kR(U,K=>{const B=K.docs.map(he=>({id:he.id,...he.data()}));o(B)});return()=>G()},[]);async function _(T,C){const U=xr.currentUser;U&&await PR(zd(os,"users",U.uid,"coachMessages"),{role:T,text:C,createdAt:cE()})}async function w(){if(!l.trim())return;const T=l.trim();h(""),g(!0),await _("user",T);try{const U=await(await fetch("/api/coach",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:T,streak:i,workouts:e,goal:t})})).json();await _("coach",U.message||U.error||"I’m here with you. Let’s keep going.")}catch(C){await _("coach",C.message||"Sorry, I couldn’t connect to your coach right now.")}finally{g(!1)}}return Z.jsxs("section",{className:"panel",children:[Z.jsx("h2",{children:"AI Coach"}),Z.jsxs("div",{className:"chat",children:[s.length===0&&Z.jsx("div",{className:"bubble coach",children:"Hi, I’m your CoachPulse AI coach. Tell me how your workout went today."}),s.map(T=>Z.jsx("div",{className:`bubble ${T.role}`,children:T.text},T.id)),m&&Z.jsx("div",{className:"bubble coach",children:"Thinking..."})]}),Z.jsxs("div",{className:"chat-input",children:[Z.jsx("input",{value:l,placeholder:"Ask your coach...",onChange:T=>h(T.target.value),onKeyDown:T=>T.key==="Enter"&&w()}),Z.jsx("button",{onClick:w,children:"Send"})]})]})}const zR=["Lose Weight","Build Muscle","Improve Fitness","Run a 5K","Stay Consistent"];function BR({currentGoal:i,onGoalUpdated:e}){const[t,s]=gt.useState(i||"Get Fit");async function o(){const l=xr.currentUser;l&&(await aE(Za(os,"users",l.uid),{goal:t},{merge:!0}),e(t))}return Z.jsxs("section",{className:"panel",children:[Z.jsx("h2",{children:"Your Goal"}),Z.jsx("select",{value:t,onChange:l=>s(l.target.value),children:zR.map(l=>Z.jsx("option",{value:l,children:l},l))}),Z.jsx("button",{onClick:o,children:"Save Goal"})]})}function $R({user:i,onLogout:e}){const[t,s]=gt.useState(0),[o,l]=gt.useState(0),[h,m]=gt.useState(null),[g,_]=gt.useState("Get Fit");function w(U){const G=new Set(U);let K=0,B=new Date;for(;;){const he=B.toISOString().split("T")[0];if(G.has(he))K+=1,B.setDate(B.getDate()-1);else break}return K}async function T(){const U=xr.currentUser;if(!U)return;const G=Za(os,"users",U.uid),K=await ky(G);K.exists()&&K.data().goal&&_(K.data().goal);const B=new Date().toISOString().split("T")[0],he=Za(os,"users",U.uid,"workouts",B),ce=await ky(he);m(ce.exists()?ce.data():null);const me=zd(os,"users",U.uid,"workouts"),we=await CR(me);let je=0;const Te=[];we.forEach(D=>{const S=D.data();S.status==="completed"&&(je+=1,Te.push(S.date))}),l(je),s(w(Te))}function C(){T()}return gt.useEffect(()=>{T()},[]),Z.jsxs("main",{className:"page",children:[Z.jsxs("header",{className:"topbar",children:[Z.jsxs("div",{children:[Z.jsx("p",{className:"badge",children:"Beta MVP"}),Z.jsx("h1",{children:"Welcome back"}),Z.jsx("p",{children:i==null?void 0:i.email})]}),Z.jsx("button",{className:"ghost",onClick:e,children:"Log out"})]}),Z.jsx(BR,{currentGoal:g,onGoalUpdated:_}),h?Z.jsxs("div",{className:"panel",children:[Z.jsx("h3",{children:"Today's Status:"}),Z.jsx("p",{children:h.status})]}):Z.jsx("div",{className:"panel",children:Z.jsx("h3",{children:"No workout logged today"})}),Z.jsxs("section",{className:"stats",children:[Z.jsxs("div",{className:"stat",children:[Z.jsx("span",{children:"🔥"}),Z.jsx("h2",{children:t}),Z.jsx("p",{children:"Day streak"})]}),Z.jsxs("div",{className:"stat",children:[Z.jsx("span",{children:"💪"}),Z.jsx("h2",{children:o}),Z.jsx("p",{children:"Total completed"})]}),Z.jsxs("div",{className:"stat",children:[Z.jsx("span",{children:"🎯"}),Z.jsx("h2",{children:g}),Z.jsx("p",{children:"Current goal"})]})]}),Z.jsxs("section",{className:"layout",children:[Z.jsx(UR,{onSubmit:C}),Z.jsx(jR,{streak:t,completedWorkouts:o,goal:g})]})]})}function qR({onLogin:i}){const[e,t]=gt.useState(""),[s,o]=gt.useState(""),[l,h]=gt.useState(!0),[m,g]=gt.useState("");async function _(){g("");try{let w;l?w=await eI(xr,e,s):w=await Z0(xr,e,s),i(w.user.email)}catch(w){g(w.message)}}return Z.jsx("main",{className:"page narrow",children:Z.jsxs("section",{className:"panel",children:[Z.jsx("h1",{children:l?"Login":"Create Account"}),Z.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:w=>t(w.target.value)}),Z.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:w=>o(w.target.value)}),m&&Z.jsx("p",{style:{color:"red"},children:m}),Z.jsx("button",{className:"primary full",onClick:_,children:l?"Login":"Sign Up"}),Z.jsx("p",{style:{cursor:"pointer",marginTop:10},onClick:()=>h(!l),children:l?"Don't have an account? Sign up":"Already have an account? Login"})]})})}function HR(){const[i,e]=gt.useState("landing"),[t,s]=gt.useState(null);return gt.useEffect(()=>{const o=iI(xr,l=>{l&&(s({email:l.email}),e("dashboard"))});return()=>o()},[]),i==="login"?Z.jsx(qR,{onLogin:o=>{s({email:o}),e("dashboard")}}):i==="dashboard"?Z.jsx($R,{user:t,onLogout:()=>{s(null),e("landing")}}):Z.jsx(FR,{onStart:()=>e("login")})}bR.createRoot(document.getElementById("root")).render(Z.jsx(DR.StrictMode,{children:Z.jsx(HR,{})}));
