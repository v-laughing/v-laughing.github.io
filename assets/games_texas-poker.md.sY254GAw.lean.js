import{_ as sl,p as In,h as wn,v as il,x as ol,c as lt,o as ht,j as $,a0 as xo,a1 as No,a as Ds,t as Dt,e as Ue,F as or,B as Ts,n as vs,G as al,a4 as ul}from"./chunks/framework.DQcV7ckZ.js";const cl=()=>{};var ko={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ll=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=r[e++];t[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=r[e++],a=r[e++],l=r[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[n++]=String.fromCharCode(55296+(h>>10)),t[n++]=String.fromCharCode(56320+(h&1023))}else{const o=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const o=r[s],a=s+1<r.length,l=a?r[s+1]:0,h=s+2<r.length,d=h?r[s+2]:0,m=o>>2,T=(o&3)<<4|l>>4;let A=(l&15)<<2|d>>6,S=d&63;h||(S=64,a||(A=64)),n.push(e[m],e[T],e[A],e[S])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(za(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):ll(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const o=e[r.charAt(s++)],l=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const T=s<r.length?e[r.charAt(s)]:64;if(++s,o==null||l==null||d==null||T==null)throw new hl;const A=o<<2|l>>4;if(n.push(A),d!==64){const S=l<<4&240|d>>2;if(n.push(S),T!==64){const N=d<<6&192|T;n.push(N)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class hl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dl=function(r){const t=za(r);return Ga.encodeByteArray(t,!0)},Tr=function(r){return dl(r).replace(/\./g,"")},fl=function(r){try{return Ga.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ml(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pl=()=>ml().__FIREBASE_DEFAULTS__,gl=()=>{if(typeof process>"u"||typeof ko>"u")return;const r=ko.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},_l=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&fl(r[1]);return t&&JSON.parse(t)},ti=()=>{try{return cl()||pl()||gl()||_l()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},yl=r=>{var t,e;return(e=(t=ti())==null?void 0:t.emulatorHosts)==null?void 0:e[r]},El=r=>{const t=yl(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Ha=()=>{var r;return(r=ti())==null?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function ei(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vl(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Il(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Tr(JSON.stringify(e)),Tr(JSON.stringify(a)),""].join(".")}const Cn={};function wl(){const r={prod:[],emulator:[]};for(const t of Object.keys(Cn))Cn[t]?r.emulator.push(t):r.prod.push(t);return r}function Al(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let Mo=!1;function Rl(r,t){if(typeof window>"u"||typeof document>"u"||!ei(window.location.host)||Cn[r]===t||Cn[r]||Mo)return;Cn[r]=t;function e(A){return`__firebase__banner__${A}`}const n="__firebase__banner",o=wl().prod.length>0;function a(){const A=document.getElementById(n);A&&A.remove()}function l(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,S){A.setAttribute("width","24"),A.setAttribute("id",S),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function d(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Mo=!0,a()},A}function m(A,S){A.setAttribute("id",S),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function T(){const A=Al(n),S=e("text"),N=document.getElementById(S)||document.createElement("span"),k=e("learnmore"),D=document.getElementById(k)||document.createElement("a"),q=e("preprendIcon"),H=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const Q=A.element;l(Q),m(D,k);const ut=d();h(H,q),Q.append(H,N,D,ut),document.body.appendChild(Q)}o?(N.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sl(){var t;const r=(t=ti())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Cl(){return!Sl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pl(){try{return typeof indexedDB=="object"}catch{return!1}}function Vl(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl="FirebaseError";class Ze extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Dl,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?xl(o,n):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Ze(s,l,n)}}function xl(r,t){return r.replace(Nl,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const Nl=/\{\$([^}]+)}/g;function vr(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const o=r[s],a=t[s];if(Oo(o)&&Oo(a)){if(!vr(o,a))return!1}else if(o!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function Oo(r){return r!==null&&typeof r=="object"}/**
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
 */function Wt(r){return r&&r._delegate?r._delegate:r}class Nn{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Re="[DEFAULT]";/**
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
 */class kl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new Tl;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),n=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ol(t))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(t=Re){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Re){return this.instances.has(t)}getOptions(t=Re){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&a.resolve(s)}return s}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(n)??new Set;s.add(t),this.onInitCallbacks.set(n,s);const o=this.instances.get(n);return o&&t(o,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Ml(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Re){return this.component?this.component.multipleInstances?t:Re:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ml(r){return r===Re?void 0:r}function Ol(r){return r.instantiationMode==="EAGER"}/**
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
 */class Ll{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new kl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(K||(K={}));const Fl={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Ul=K.INFO,Bl={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},jl=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Bl[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ka{constructor(t){this.name=t,this._logLevel=Ul,this._logHandler=jl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Fl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const ql=(r,t)=>t.some(e=>r instanceof e);let Lo,Fo;function $l(){return Lo||(Lo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zl(){return Fo||(Fo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qa=new WeakMap,xs=new WeakMap,Xa=new WeakMap,Is=new WeakMap,ni=new WeakMap;function Gl(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",o),r.removeEventListener("error",a)},o=()=>{e(oe(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",o),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Qa.set(e,r)}).catch(()=>{}),ni.set(t,r),t}function Hl(r){if(xs.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",a),r.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",o),r.addEventListener("error",a),r.addEventListener("abort",a)});xs.set(r,t)}let Ns={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return xs.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Xa.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return oe(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Wl(r){Ns=r(Ns)}function Kl(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(ws(this),t,...e);return Xa.set(n,t.sort?t.sort():[t]),oe(n)}:zl().includes(r)?function(...t){return r.apply(ws(this),t),oe(Qa.get(this))}:function(...t){return oe(r.apply(ws(this),t))}}function Ql(r){return typeof r=="function"?Kl(r):(r instanceof IDBTransaction&&Hl(r),ql(r,$l())?new Proxy(r,Ns):r)}function oe(r){if(r instanceof IDBRequest)return Gl(r);if(Is.has(r))return Is.get(r);const t=Ql(r);return t!==r&&(Is.set(r,t),ni.set(t,r)),t}const ws=r=>ni.get(r);function Xl(r,t,{blocked:e,upgrade:n,blocking:s,terminated:o}={}){const a=indexedDB.open(r,t),l=oe(a);return n&&a.addEventListener("upgradeneeded",h=>{n(oe(a.result),h.oldVersion,h.newVersion,oe(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Yl=["get","getKey","getAll","getAllKeys","count"],Jl=["put","add","delete","clear"],As=new Map;function Uo(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(As.get(t))return As.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=Jl.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Yl.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),s&&h.done]))[0]};return As.set(t,o),o}Wl(r=>({...r,get:(t,e,n)=>Uo(t,e)||r.get(t,e,n),has:(t,e)=>!!Uo(t,e)||r.has(t,e)}));/**
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
 */class Zl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(th(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function th(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ks="@firebase/app",Bo="0.14.6";/**
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
 */const Kt=new Ka("@firebase/app"),eh="@firebase/app-compat",nh="@firebase/analytics-compat",rh="@firebase/analytics",sh="@firebase/app-check-compat",ih="@firebase/app-check",oh="@firebase/auth",ah="@firebase/auth-compat",uh="@firebase/database",ch="@firebase/data-connect",lh="@firebase/database-compat",hh="@firebase/functions",dh="@firebase/functions-compat",fh="@firebase/installations",mh="@firebase/installations-compat",ph="@firebase/messaging",gh="@firebase/messaging-compat",_h="@firebase/performance",yh="@firebase/performance-compat",Eh="@firebase/remote-config",Th="@firebase/remote-config-compat",vh="@firebase/storage",Ih="@firebase/storage-compat",wh="@firebase/firestore",Ah="@firebase/ai",Rh="@firebase/firestore-compat",bh="firebase",Sh="12.6.0";/**
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
 */const Ms="[DEFAULT]",Ch={[ks]:"fire-core",[eh]:"fire-core-compat",[rh]:"fire-analytics",[nh]:"fire-analytics-compat",[ih]:"fire-app-check",[sh]:"fire-app-check-compat",[oh]:"fire-auth",[ah]:"fire-auth-compat",[uh]:"fire-rtdb",[ch]:"fire-data-connect",[lh]:"fire-rtdb-compat",[hh]:"fire-fn",[dh]:"fire-fn-compat",[fh]:"fire-iid",[mh]:"fire-iid-compat",[ph]:"fire-fcm",[gh]:"fire-fcm-compat",[_h]:"fire-perf",[yh]:"fire-perf-compat",[Eh]:"fire-rc",[Th]:"fire-rc-compat",[vh]:"fire-gcs",[Ih]:"fire-gcs-compat",[wh]:"fire-fst",[Rh]:"fire-fst-compat",[Ah]:"fire-vertex","fire-js":"fire-js",[bh]:"fire-js-all"};/**
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
 */const Ir=new Map,Ph=new Map,Os=new Map;function jo(r,t){try{r.container.addComponent(t)}catch(e){Kt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function wr(r){const t=r.name;if(Os.has(t))return Kt.debug(`There were multiple attempts to register component ${t}.`),!1;Os.set(t,r);for(const e of Ir.values())jo(e,r);for(const e of Ph.values())jo(e,r);return!0}function Vh(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Dh(r){return r==null?!1:r.settings!==void 0}/**
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
 */const xh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ae=new Wa("app","Firebase",xh);/**
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
 */class Nh{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}/**
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
 */const kh=Sh;function Ya(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:Ms,automaticDataCollectionEnabled:!0,...t},s=n.name;if(typeof s!="string"||!s)throw ae.create("bad-app-name",{appName:String(s)});if(e||(e=Ha()),!e)throw ae.create("no-options");const o=Ir.get(s);if(o){if(vr(e,o.options)&&vr(n,o.config))return o;throw ae.create("duplicate-app",{appName:s})}const a=new Ll(s);for(const h of Os.values())a.addComponent(h);const l=new Nh(e,n,a);return Ir.set(s,l),l}function Mh(r=Ms){const t=Ir.get(r);if(!t&&r===Ms&&Ha())return Ya();if(!t)throw ae.create("no-app",{appName:r});return t}function ze(r,t,e){let n=Ch[r]??r;e&&(n+=`-${e}`);const s=n.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${n}" with version "${t}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Kt.warn(a.join(" "));return}wr(new Nn(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
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
 */const Oh="firebase-heartbeat-database",Lh=1,kn="firebase-heartbeat-store";let Rs=null;function Ja(){return Rs||(Rs=Xl(Oh,Lh,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(kn)}catch(e){console.warn(e)}}}}).catch(r=>{throw ae.create("idb-open",{originalErrorMessage:r.message})})),Rs}async function Fh(r){try{const e=(await Ja()).transaction(kn),n=await e.objectStore(kn).get(Za(r));return await e.done,n}catch(t){if(t instanceof Ze)Kt.warn(t.message);else{const e=ae.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Kt.warn(e.message)}}}async function qo(r,t){try{const n=(await Ja()).transaction(kn,"readwrite");await n.objectStore(kn).put(t,Za(r)),await n.done}catch(e){if(e instanceof Ze)Kt.warn(e.message);else{const n=ae.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(n.message)}}}function Za(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Uh=1024,Bh=30;class jh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new $h(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$o();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Bh){const a=zh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Kt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$o(),{heartbeatsToSend:n,unsentEntries:s}=qh(this._heartbeatsCache.heartbeats),o=Tr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Kt.warn(e),""}}}function $o(){return new Date().toISOString().substring(0,10)}function qh(r,t=Uh){const e=[];let n=r.slice();for(const s of r){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),zo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),zo(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class $h{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pl()?Vl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Fh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return qo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return qo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function zo(r){return Tr(JSON.stringify({version:2,heartbeats:r})).length}function zh(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
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
 */function Gh(r){wr(new Nn("platform-logger",t=>new Zl(t),"PRIVATE")),wr(new Nn("heartbeat",t=>new jh(t),"PRIVATE")),ze(ks,Bo,r),ze(ks,Bo,"esm2020"),ze("fire-js","")}Gh("");var Hh="firebase",Wh="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(Hh,Wh,"app");var Go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ue,tu;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,g){function y(){}y.prototype=g.prototype,v.F=g.prototype,v.prototype=new y,v.prototype.constructor=v,v.D=function(I,_,E){for(var p=Array(arguments.length-2),V=2;V<arguments.length;V++)p[V-2]=arguments[V];return g.prototype[_].apply(I,p)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,e),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,y){y||(y=0);const I=Array(16);if(typeof g=="string")for(var _=0;_<16;++_)I[_]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(_=0;_<16;++_)I[_]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=v.g[0],y=v.g[1],_=v.g[2];let E=v.g[3],p;p=g+(E^y&(_^E))+I[0]+3614090360&4294967295,g=y+(p<<7&4294967295|p>>>25),p=E+(_^g&(y^_))+I[1]+3905402710&4294967295,E=g+(p<<12&4294967295|p>>>20),p=_+(y^E&(g^y))+I[2]+606105819&4294967295,_=E+(p<<17&4294967295|p>>>15),p=y+(g^_&(E^g))+I[3]+3250441966&4294967295,y=_+(p<<22&4294967295|p>>>10),p=g+(E^y&(_^E))+I[4]+4118548399&4294967295,g=y+(p<<7&4294967295|p>>>25),p=E+(_^g&(y^_))+I[5]+1200080426&4294967295,E=g+(p<<12&4294967295|p>>>20),p=_+(y^E&(g^y))+I[6]+2821735955&4294967295,_=E+(p<<17&4294967295|p>>>15),p=y+(g^_&(E^g))+I[7]+4249261313&4294967295,y=_+(p<<22&4294967295|p>>>10),p=g+(E^y&(_^E))+I[8]+1770035416&4294967295,g=y+(p<<7&4294967295|p>>>25),p=E+(_^g&(y^_))+I[9]+2336552879&4294967295,E=g+(p<<12&4294967295|p>>>20),p=_+(y^E&(g^y))+I[10]+4294925233&4294967295,_=E+(p<<17&4294967295|p>>>15),p=y+(g^_&(E^g))+I[11]+2304563134&4294967295,y=_+(p<<22&4294967295|p>>>10),p=g+(E^y&(_^E))+I[12]+1804603682&4294967295,g=y+(p<<7&4294967295|p>>>25),p=E+(_^g&(y^_))+I[13]+4254626195&4294967295,E=g+(p<<12&4294967295|p>>>20),p=_+(y^E&(g^y))+I[14]+2792965006&4294967295,_=E+(p<<17&4294967295|p>>>15),p=y+(g^_&(E^g))+I[15]+1236535329&4294967295,y=_+(p<<22&4294967295|p>>>10),p=g+(_^E&(y^_))+I[1]+4129170786&4294967295,g=y+(p<<5&4294967295|p>>>27),p=E+(y^_&(g^y))+I[6]+3225465664&4294967295,E=g+(p<<9&4294967295|p>>>23),p=_+(g^y&(E^g))+I[11]+643717713&4294967295,_=E+(p<<14&4294967295|p>>>18),p=y+(E^g&(_^E))+I[0]+3921069994&4294967295,y=_+(p<<20&4294967295|p>>>12),p=g+(_^E&(y^_))+I[5]+3593408605&4294967295,g=y+(p<<5&4294967295|p>>>27),p=E+(y^_&(g^y))+I[10]+38016083&4294967295,E=g+(p<<9&4294967295|p>>>23),p=_+(g^y&(E^g))+I[15]+3634488961&4294967295,_=E+(p<<14&4294967295|p>>>18),p=y+(E^g&(_^E))+I[4]+3889429448&4294967295,y=_+(p<<20&4294967295|p>>>12),p=g+(_^E&(y^_))+I[9]+568446438&4294967295,g=y+(p<<5&4294967295|p>>>27),p=E+(y^_&(g^y))+I[14]+3275163606&4294967295,E=g+(p<<9&4294967295|p>>>23),p=_+(g^y&(E^g))+I[3]+4107603335&4294967295,_=E+(p<<14&4294967295|p>>>18),p=y+(E^g&(_^E))+I[8]+1163531501&4294967295,y=_+(p<<20&4294967295|p>>>12),p=g+(_^E&(y^_))+I[13]+2850285829&4294967295,g=y+(p<<5&4294967295|p>>>27),p=E+(y^_&(g^y))+I[2]+4243563512&4294967295,E=g+(p<<9&4294967295|p>>>23),p=_+(g^y&(E^g))+I[7]+1735328473&4294967295,_=E+(p<<14&4294967295|p>>>18),p=y+(E^g&(_^E))+I[12]+2368359562&4294967295,y=_+(p<<20&4294967295|p>>>12),p=g+(y^_^E)+I[5]+4294588738&4294967295,g=y+(p<<4&4294967295|p>>>28),p=E+(g^y^_)+I[8]+2272392833&4294967295,E=g+(p<<11&4294967295|p>>>21),p=_+(E^g^y)+I[11]+1839030562&4294967295,_=E+(p<<16&4294967295|p>>>16),p=y+(_^E^g)+I[14]+4259657740&4294967295,y=_+(p<<23&4294967295|p>>>9),p=g+(y^_^E)+I[1]+2763975236&4294967295,g=y+(p<<4&4294967295|p>>>28),p=E+(g^y^_)+I[4]+1272893353&4294967295,E=g+(p<<11&4294967295|p>>>21),p=_+(E^g^y)+I[7]+4139469664&4294967295,_=E+(p<<16&4294967295|p>>>16),p=y+(_^E^g)+I[10]+3200236656&4294967295,y=_+(p<<23&4294967295|p>>>9),p=g+(y^_^E)+I[13]+681279174&4294967295,g=y+(p<<4&4294967295|p>>>28),p=E+(g^y^_)+I[0]+3936430074&4294967295,E=g+(p<<11&4294967295|p>>>21),p=_+(E^g^y)+I[3]+3572445317&4294967295,_=E+(p<<16&4294967295|p>>>16),p=y+(_^E^g)+I[6]+76029189&4294967295,y=_+(p<<23&4294967295|p>>>9),p=g+(y^_^E)+I[9]+3654602809&4294967295,g=y+(p<<4&4294967295|p>>>28),p=E+(g^y^_)+I[12]+3873151461&4294967295,E=g+(p<<11&4294967295|p>>>21),p=_+(E^g^y)+I[15]+530742520&4294967295,_=E+(p<<16&4294967295|p>>>16),p=y+(_^E^g)+I[2]+3299628645&4294967295,y=_+(p<<23&4294967295|p>>>9),p=g+(_^(y|~E))+I[0]+4096336452&4294967295,g=y+(p<<6&4294967295|p>>>26),p=E+(y^(g|~_))+I[7]+1126891415&4294967295,E=g+(p<<10&4294967295|p>>>22),p=_+(g^(E|~y))+I[14]+2878612391&4294967295,_=E+(p<<15&4294967295|p>>>17),p=y+(E^(_|~g))+I[5]+4237533241&4294967295,y=_+(p<<21&4294967295|p>>>11),p=g+(_^(y|~E))+I[12]+1700485571&4294967295,g=y+(p<<6&4294967295|p>>>26),p=E+(y^(g|~_))+I[3]+2399980690&4294967295,E=g+(p<<10&4294967295|p>>>22),p=_+(g^(E|~y))+I[10]+4293915773&4294967295,_=E+(p<<15&4294967295|p>>>17),p=y+(E^(_|~g))+I[1]+2240044497&4294967295,y=_+(p<<21&4294967295|p>>>11),p=g+(_^(y|~E))+I[8]+1873313359&4294967295,g=y+(p<<6&4294967295|p>>>26),p=E+(y^(g|~_))+I[15]+4264355552&4294967295,E=g+(p<<10&4294967295|p>>>22),p=_+(g^(E|~y))+I[6]+2734768916&4294967295,_=E+(p<<15&4294967295|p>>>17),p=y+(E^(_|~g))+I[13]+1309151649&4294967295,y=_+(p<<21&4294967295|p>>>11),p=g+(_^(y|~E))+I[4]+4149444226&4294967295,g=y+(p<<6&4294967295|p>>>26),p=E+(y^(g|~_))+I[11]+3174756917&4294967295,E=g+(p<<10&4294967295|p>>>22),p=_+(g^(E|~y))+I[2]+718787259&4294967295,_=E+(p<<15&4294967295|p>>>17),p=y+(E^(_|~g))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(_+(p<<21&4294967295|p>>>11))&4294967295,v.g[2]=v.g[2]+_&4294967295,v.g[3]=v.g[3]+E&4294967295}n.prototype.v=function(v,g){g===void 0&&(g=v.length);const y=g-this.blockSize,I=this.C;let _=this.h,E=0;for(;E<g;){if(_==0)for(;E<=y;)s(this,v,E),E+=this.blockSize;if(typeof v=="string"){for(;E<g;)if(I[_++]=v.charCodeAt(E++),_==this.blockSize){s(this,I),_=0;break}}else for(;E<g;)if(I[_++]=v[E++],_==this.blockSize){s(this,I),_=0;break}}this.h=_,this.o+=g},n.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;g=this.o*8;for(var y=v.length-8;y<v.length;++y)v[y]=g&255,g/=256;for(this.v(v),v=Array(16),g=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)v[g++]=this.g[y]>>>I&255;return v};function o(v,g){var y=l;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=g(v)}function a(v,g){this.h=g;const y=[];let I=!0;for(let _=v.length-1;_>=0;_--){const E=v[_]|0;I&&E==g||(y[_]=E,I=!1)}this.g=y}var l={};function h(v){return-128<=v&&v<128?o(v,function(g){return new a([g|0],g<0?-1:0)}):new a([v|0],v<0?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return T;if(v<0)return D(d(-v));const g=[];let y=1;for(let I=0;v>=y;I++)g[I]=v/y|0,y*=4294967296;return new a(g,0)}function m(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return D(m(v.substring(1),g));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(g,8));let I=T;for(let E=0;E<v.length;E+=8){var _=Math.min(8,v.length-E);const p=parseInt(v.substring(E,E+_),g);_<8?(_=d(Math.pow(g,_)),I=I.j(_).add(d(p))):(I=I.j(y),I=I.add(d(p)))}return I}var T=h(0),A=h(1),S=h(16777216);r=a.prototype,r.m=function(){if(k(this))return-D(this).m();let v=0,g=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);v+=(I>=0?I:4294967296+I)*g,g*=4294967296}return v},r.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(k(this))return"-"+D(this).toString(v);const g=d(Math.pow(v,6));var y=this;let I="";for(;;){const _=ut(y,g).g;y=q(y,_.j(g));let E=((y.g.length>0?y.g[0]:y.h)>>>0).toString(v);if(y=_,N(y))return E+I;for(;E.length<6;)E="0"+E;I=E+I}},r.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(let g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function k(v){return v.h==-1}r.l=function(v){return v=q(this,v),k(v)?-1:N(v)?0:1};function D(v){const g=v.g.length,y=[];for(let I=0;I<g;I++)y[I]=~v.g[I];return new a(y,~v.h).add(A)}r.abs=function(){return k(this)?D(this):this},r.add=function(v){const g=Math.max(this.g.length,v.g.length),y=[];let I=0;for(let _=0;_<=g;_++){let E=I+(this.i(_)&65535)+(v.i(_)&65535),p=(E>>>16)+(this.i(_)>>>16)+(v.i(_)>>>16);I=p>>>16,E&=65535,p&=65535,y[_]=p<<16|E}return new a(y,y[y.length-1]&-2147483648?-1:0)};function q(v,g){return v.add(D(g))}r.j=function(v){if(N(this)||N(v))return T;if(k(this))return k(v)?D(this).j(D(v)):D(D(this).j(v));if(k(v))return D(this.j(D(v)));if(this.l(S)<0&&v.l(S)<0)return d(this.m()*v.m());const g=this.g.length+v.g.length,y=[];for(var I=0;I<2*g;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let _=0;_<v.g.length;_++){const E=this.i(I)>>>16,p=this.i(I)&65535,V=v.i(_)>>>16,F=v.i(_)&65535;y[2*I+2*_]+=p*F,H(y,2*I+2*_),y[2*I+2*_+1]+=E*F,H(y,2*I+2*_+1),y[2*I+2*_+1]+=p*V,H(y,2*I+2*_+1),y[2*I+2*_+2]+=E*V,H(y,2*I+2*_+2)}for(v=0;v<g;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=g;v<2*g;v++)y[v]=0;return new a(y,0)};function H(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function Q(v,g){this.g=v,this.h=g}function ut(v,g){if(N(g))throw Error("division by zero");if(N(v))return new Q(T,T);if(k(v))return g=ut(D(v),g),new Q(D(g.g),D(g.h));if(k(g))return g=ut(v,D(g)),new Q(D(g.g),g.h);if(v.g.length>30){if(k(v)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var y=A,I=g;I.l(v)<=0;)y=Et(y),I=Et(I);var _=it(y,1),E=it(I,1);for(I=it(I,2),y=it(y,2);!N(I);){var p=E.add(I);p.l(v)<=0&&(_=_.add(y),E=p),I=it(I,1),y=it(y,1)}return g=q(v,_.j(g)),new Q(_,g)}for(_=T;v.l(g)>=0;){for(y=Math.max(1,Math.floor(v.m()/g.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),E=d(y),p=E.j(g);k(p)||p.l(v)>0;)y-=I,E=d(y),p=E.j(g);N(E)&&(E=A),_=_.add(E),v=q(v,p)}return new Q(_,v)}r.B=function(v){return ut(this,v).h},r.and=function(v){const g=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<g;I++)y[I]=this.i(I)&v.i(I);return new a(y,this.h&v.h)},r.or=function(v){const g=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<g;I++)y[I]=this.i(I)|v.i(I);return new a(y,this.h|v.h)},r.xor=function(v){const g=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<g;I++)y[I]=this.i(I)^v.i(I);return new a(y,this.h^v.h)};function Et(v){const g=v.g.length+1,y=[];for(let I=0;I<g;I++)y[I]=v.i(I)<<1|v.i(I-1)>>>31;return new a(y,v.h)}function it(v,g){const y=g>>5;g%=32;const I=v.g.length-y,_=[];for(let E=0;E<I;E++)_[E]=g>0?v.i(E+y)>>>g|v.i(E+y+1)<<32-g:v.i(E+y);return new a(_,v.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,tu=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ue=a}).apply(typeof Go<"u"?Go:typeof self<"u"?self:typeof window<"u"?window:{});var ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eu,An,nu,fr,Ls,ru,su,iu;(function(){var r,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ar=="object"&&ar];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var n=e(this);function s(i,u){if(u)t:{var c=n;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in c))break t;c=c[w]}i=i[i.length-1],f=c[i],u=u(f),u!=f&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(u){var c=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&c.push([f,u[f]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function h(i,u,c){return i.call.apply(i.bind,arguments)}function d(i,u,c){return d=h,d.apply(null,arguments)}function m(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function T(i,u){function c(){}c.prototype=u.prototype,i.Z=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Ob=function(f,w,R){for(var P=Array(arguments.length-2),j=2;j<arguments.length;j++)P[j-2]=arguments[j];return u.prototype[w].apply(f,P)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function S(i){const u=i.length;if(u>0){const c=Array(u);for(let f=0;f<u;f++)c[f]=i[f];return c}return[]}function N(i,u){for(let f=1;f<arguments.length;f++){const w=arguments[f];var c=typeof w;if(c=c!="object"?c:w?Array.isArray(w)?"array":c:"null",c=="array"||c=="object"&&typeof w.length=="number"){c=i.length||0;const R=w.length||0;i.length=c+R;for(let P=0;P<R;P++)i[c+P]=w[P]}else i.push(w)}}class k{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function D(i){a.setTimeout(()=>{throw i},0)}function q(){var i=v;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class H{constructor(){this.h=this.g=null}add(u,c){const f=Q.get();f.set(u,c),this.h?this.h.next=f:this.g=f,this.h=f}}var Q=new k(()=>new ut,i=>i.reset());class ut{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Et,it=!1,v=new H,g=()=>{const i=Promise.resolve(void 0);Et=()=>{i.then(y)}};function y(){for(var i;i=q();){try{i.h.call(i.g)}catch(c){D(c)}var u=Q;u.j(i),u.h<100&&(u.h++,i.next=u.g,u.g=i)}it=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var E=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};a.addEventListener("test",c,u),a.removeEventListener("test",c,u)}catch{}return i}();function p(i){return/^[\s\xa0]*$/.test(i)}function V(i,u){_.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,u)}T(V,_),V.prototype.init=function(i,u){const c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget,u||(c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&V.Z.h.call(this)},V.prototype.h=function(){V.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var F="closure_listenable_"+(Math.random()*1e6|0),Z=0;function X(i,u,c,f,w){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!f,this.ha=w,this.key=++Z,this.da=this.fa=!1}function ot(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function mt(i,u,c){for(const f in i)u.call(c,i[f],f,i)}function ke(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function ye(i){const u={};for(const c in i)u[c]=i[c];return u}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yt(i,u){let c,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(c in f)i[c]=f[c];for(let R=0;R<ct.length;R++)c=ct[R],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function Jt(i){this.src=i,this.g={},this.h=0}Jt.prototype.add=function(i,u,c,f,w){const R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);const P=Ee(i,u,f,w);return P>-1?(u=i[P],c||(u.fa=!1)):(u=new X(u,this.src,R,!!f,w),u.fa=c,i.push(u)),u};function Me(i,u){const c=u.type;if(c in i.g){var f=i.g[c],w=Array.prototype.indexOf.call(f,u,void 0),R;(R=w>=0)&&Array.prototype.splice.call(f,w,1),R&&(ot(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Ee(i,u,c,f){for(let w=0;w<i.length;++w){const R=i[w];if(!R.da&&R.listener==u&&R.capture==!!c&&R.ha==f)return w}return-1}var sn="closure_lm_"+(Math.random()*1e6|0),Zr={};function Ni(i,u,c,f,w){if(Array.isArray(u)){for(let R=0;R<u.length;R++)Ni(i,u[R],c,f,w);return null}return c=Oi(c),i&&i[F]?i.J(u,c,l(f)?!!f.capture:!1,w):Pc(i,u,c,!1,f,w)}function Pc(i,u,c,f,w,R){if(!u)throw Error("Invalid event type");const P=l(w)?!!w.capture:!!w;let j=es(i);if(j||(i[sn]=j=new Jt(i)),c=j.add(u,c,f,P,R),c.proxy)return c;if(f=Vc(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)E||(w=P),w===void 0&&(w=!1),i.addEventListener(u.toString(),f,w);else if(i.attachEvent)i.attachEvent(Mi(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Vc(){function i(c){return u.call(i.src,i.listener,c)}const u=Dc;return i}function ki(i,u,c,f,w){if(Array.isArray(u))for(var R=0;R<u.length;R++)ki(i,u[R],c,f,w);else f=l(f)?!!f.capture:!!f,c=Oi(c),i&&i[F]?(i=i.i,R=String(u).toString(),R in i.g&&(u=i.g[R],c=Ee(u,c,f,w),c>-1&&(ot(u[c]),Array.prototype.splice.call(u,c,1),u.length==0&&(delete i.g[R],i.h--)))):i&&(i=es(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Ee(u,c,f,w)),(c=i>-1?u[i]:null)&&ts(c))}function ts(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[F])Me(u.i,i);else{var c=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(c,f,i.capture):u.detachEvent?u.detachEvent(Mi(c),f):u.addListener&&u.removeListener&&u.removeListener(f),(c=es(u))?(Me(c,i),c.h==0&&(c.src=null,u[sn]=null)):ot(i)}}}function Mi(i){return i in Zr?Zr[i]:Zr[i]="on"+i}function Dc(i,u){if(i.da)i=!0;else{u=new V(u,this);const c=i.listener,f=i.ha||i.src;i.fa&&ts(i),i=c.call(f,u)}return i}function es(i){return i=i[sn],i instanceof Jt?i:null}var ns="__closure_events_fn_"+(Math.random()*1e9>>>0);function Oi(i){return typeof i=="function"?i:(i[ns]||(i[ns]=function(u){return i.handleEvent(u)}),i[ns])}function Rt(){I.call(this),this.i=new Jt(this),this.M=this,this.G=null}T(Rt,I),Rt.prototype[F]=!0,Rt.prototype.removeEventListener=function(i,u,c,f){ki(this,i,u,c,f)};function Pt(i,u){var c,f=i.G;if(f)for(c=[];f;f=f.G)c.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new _(u,i);else if(u instanceof _)u.target=u.target||i;else{var w=u;u=new _(f,i),Yt(u,w)}w=!0;let R,P;if(c)for(P=c.length-1;P>=0;P--)R=u.g=c[P],w=Kn(R,f,!0,u)&&w;if(R=u.g=i,w=Kn(R,f,!0,u)&&w,w=Kn(R,f,!1,u)&&w,c)for(P=0;P<c.length;P++)R=u.g=c[P],w=Kn(R,f,!1,u)&&w}Rt.prototype.N=function(){if(Rt.Z.N.call(this),this.i){var i=this.i;for(const u in i.g){const c=i.g[u];for(let f=0;f<c.length;f++)ot(c[f]);delete i.g[u],i.h--}}this.G=null},Rt.prototype.J=function(i,u,c,f){return this.i.add(String(i),u,!1,c,f)},Rt.prototype.K=function(i,u,c,f){return this.i.add(String(i),u,!0,c,f)};function Kn(i,u,c,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();let w=!0;for(let R=0;R<u.length;++R){const P=u[R];if(P&&!P.da&&P.capture==c){const j=P.listener,pt=P.ha||P.src;P.fa&&Me(i.i,P),w=j.call(pt,f)!==!1&&w}}return w&&!f.defaultPrevented}function xc(i,u){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(i,u||0)}function Li(i){i.g=xc(()=>{i.g=null,i.i&&(i.i=!1,Li(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Nc extends I{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Li(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(i){I.call(this),this.h=i,this.g={}}T(on,I);var Fi=[];function Ui(i){mt(i.g,function(u,c){this.g.hasOwnProperty(c)&&ts(u)},i),i.g={}}on.prototype.N=function(){on.Z.N.call(this),Ui(this)},on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rs=a.JSON.stringify,kc=a.JSON.parse,Mc=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Bi(){}function ji(){}var an={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ss(){_.call(this,"d")}T(ss,_);function is(){_.call(this,"c")}T(is,_);var Te={},qi=null;function Qn(){return qi=qi||new Rt}Te.Ia="serverreachability";function $i(i){_.call(this,Te.Ia,i)}T($i,_);function un(i){const u=Qn();Pt(u,new $i(u))}Te.STAT_EVENT="statevent";function zi(i,u){_.call(this,Te.STAT_EVENT,i),this.stat=u}T(zi,_);function Vt(i){const u=Qn();Pt(u,new zi(u,i))}Te.Ja="timingevent";function Gi(i,u){_.call(this,Te.Ja,i),this.size=u}T(Gi,_);function cn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},u)}function ln(){this.g=!0}ln.prototype.ua=function(){this.g=!1};function Oc(i,u,c,f,w,R){i.info(function(){if(i.g)if(R){var P="",j=R.split("&");for(let J=0;J<j.length;J++){var pt=j[J].split("=");if(pt.length>1){const Tt=pt[0];pt=pt[1];const Ft=Tt.split("_");P=Ft.length>=2&&Ft[1]=="type"?P+(Tt+"="+pt+"&"):P+(Tt+"=redacted&")}}}else P=null;else P=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+u+`
`+c+`
`+P})}function Lc(i,u,c,f,w,R,P){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+u+`
`+c+`
`+R+" "+P})}function Oe(i,u,c,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Uc(i,c)+(f?" "+f:"")})}function Fc(i,u){i.info(function(){return"TIMEOUT: "+u})}ln.prototype.info=function(){};function Uc(i,u){if(!i.g)return u;if(!u)return null;try{const R=JSON.parse(u);if(R){for(i=0;i<R.length;i++)if(Array.isArray(R[i])){var c=R[i];if(!(c.length<2)){var f=c[1];if(Array.isArray(f)&&!(f.length<1)){var w=f[0];if(w!="noop"&&w!="stop"&&w!="close")for(let P=1;P<f.length;P++)f[P]=""}}}}return rs(R)}catch{return u}}var Xn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Hi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wi;function os(){}T(os,Bi),os.prototype.g=function(){return new XMLHttpRequest},Wi=new os;function hn(i){return encodeURIComponent(String(i))}function Bc(i){var u=1;i=i.split(":");const c=[];for(;u>0&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function Zt(i,u,c,f){this.j=i,this.i=u,this.l=c,this.S=f||1,this.V=new on(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ki}function Ki(){this.i=null,this.g="",this.h=!1}var Qi={},as={};function us(i,u,c){i.M=1,i.A=Jn(Lt(u)),i.u=c,i.R=!0,Xi(i,null)}function Xi(i,u){i.F=Date.now(),Yn(i),i.B=Lt(i.A);var c=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),co(c.i,"t",f),i.C=0,c=i.j.L,i.h=new Ki,i.g=Co(i.j,c?u:null,!i.u),i.P>0&&(i.O=new Nc(d(i.Y,i,i.g),i.P)),u=i.V,c=i.g,f=i.ba;var w="readystatechange";Array.isArray(w)||(w&&(Fi[0]=w.toString()),w=Fi);for(let R=0;R<w.length;R++){const P=Ni(c,w[R],f||u.handleEvent,!1,u.h||u);if(!P)break;u.g[P.key]=P}u=i.J?ye(i.J):{},i.u?(i.v||(i.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,u)):(i.v="GET",i.g.ea(i.B,i.v,null,u)),un(),Oc(i.i,i.v,i.B,i.l,i.S,i.u)}Zt.prototype.ba=function(i){i=i.target;const u=this.O;u&&ne(i)==3?u.j():this.Y(i)},Zt.prototype.Y=function(i){try{if(i==this.g)t:{const j=ne(this.g),pt=this.g.ya(),J=this.g.ca();if(!(j<3)&&(j!=3||this.g&&(this.h.h||this.g.la()||_o(this.g)))){this.K||j!=4||pt==7||(pt==8||J<=0?un(3):un(2)),cs(this);var u=this.g.ca();this.X=u;var c=jc(this);if(this.o=u==200,Lc(this.i,this.v,this.B,this.l,this.S,j,u),this.o){if(this.U&&!this.L){e:{if(this.g){var f,w=this.g;if((f=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(f)){var R=f;break e}}R=null}if(i=R)Oe(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ls(this,i);else{this.o=!1,this.m=3,Vt(12),ve(this),dn(this);break t}}if(this.R){i=!0;let Tt;for(;!this.K&&this.C<c.length;)if(Tt=qc(this,c),Tt==as){j==4&&(this.m=4,Vt(14),i=!1),Oe(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==Qi){this.m=4,Vt(15),Oe(this.i,this.l,c,"[Invalid Chunk]"),i=!1;break}else Oe(this.i,this.l,Tt,null),ls(this,Tt);if(Yi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),j!=4||c.length!=0||this.h.h||(this.m=1,Vt(16),i=!1),this.o=this.o&&i,!i)Oe(this.i,this.l,c,"[Invalid Chunked Response]"),ve(this),dn(this);else if(c.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),ys(P),P.P=!0,Vt(11))}}else Oe(this.i,this.l,c,null),ls(this,c);j==4&&ve(this),this.o&&!this.K&&(j==4?Ao(this.j,this):(this.o=!1,Yn(this)))}else nl(this.g),u==400&&c.indexOf("Unknown SID")>0?(this.m=3,Vt(12)):(this.m=0,Vt(13)),ve(this),dn(this)}}}catch{}finally{}};function jc(i){if(!Yi(i))return i.g.la();const u=_o(i.g);if(u==="")return"";let c="";const f=u.length,w=ne(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return ve(i),dn(i),"";i.h.i=new a.TextDecoder}for(let R=0;R<f;R++)i.h.h=!0,c+=i.h.i.decode(u[R],{stream:!(w&&R==f-1)});return u.length=0,i.h.g+=c,i.C=0,i.h.g}function Yi(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function qc(i,u){var c=i.C,f=u.indexOf(`
`,c);return f==-1?as:(c=Number(u.substring(c,f)),isNaN(c)?Qi:(f+=1,f+c>u.length?as:(u=u.slice(f,f+c),i.C=f+c,u)))}Zt.prototype.cancel=function(){this.K=!0,ve(this)};function Yn(i){i.T=Date.now()+i.H,Ji(i,i.H)}function Ji(i,u){if(i.D!=null)throw Error("WatchDog timer not null");i.D=cn(d(i.aa,i),u)}function cs(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Zt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Fc(this.i,this.B),this.M!=2&&(un(),Vt(17)),ve(this),this.m=2,dn(this)):Ji(this,this.T-i)};function dn(i){i.j.I==0||i.K||Ao(i.j,i)}function ve(i){cs(i);var u=i.O;u&&typeof u.dispose=="function"&&u.dispose(),i.O=null,Ui(i.V),i.g&&(u=i.g,i.g=null,u.abort(),u.dispose())}function ls(i,u){try{var c=i.j;if(c.I!=0&&(c.g==i||hs(c.h,i))){if(!i.L&&hs(c.h,i)&&c.I==3){try{var f=c.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<i.F)rr(c),er(c);else break t;_s(c),Vt(18)}}else c.xa=w[1],0<c.xa-c.K&&w[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=cn(d(c.Va,c),6e3));eo(c.h)<=1&&c.ta&&(c.ta=void 0)}else we(c,11)}else if((i.L||c.g==i)&&rr(c),!p(u))for(w=c.Ba.g.parse(u),u=0;u<w.length;u++){let J=w[u];const Tt=J[0];if(!(Tt<=c.K))if(c.K=Tt,J=J[1],c.I==2)if(J[0]=="c"){c.M=J[1],c.ba=J[2];const Ft=J[3];Ft!=null&&(c.ka=Ft,c.j.info("VER="+c.ka));const Ae=J[4];Ae!=null&&(c.za=Ae,c.j.info("SVER="+c.za));const re=J[5];re!=null&&typeof re=="number"&&re>0&&(f=1.5*re,c.O=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const se=i.g;if(se){const ir=se.g?se.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ir){var R=f.h;R.g||ir.indexOf("spdy")==-1&&ir.indexOf("quic")==-1&&ir.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ds(R,R.h),R.h=null))}if(f.G){const Es=se.g?se.g.getResponseHeader("X-HTTP-Session-Id"):null;Es&&(f.wa=Es,tt(f.J,f.G,Es))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-i.F,c.j.info("Handshake RTT: "+c.T+"ms")),f=c;var P=i;if(f.na=So(f,f.L?f.ba:null,f.W),P.L){no(f.h,P);var j=P,pt=f.O;pt&&(j.H=pt),j.D&&(cs(j),Yn(j)),f.g=P}else Io(f);c.i.length>0&&nr(c)}else J[0]!="stop"&&J[0]!="close"||we(c,7);else c.I==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?we(c,7):gs(c):J[0]!="noop"&&c.l&&c.l.qa(J),c.A=0)}}un(4)}catch{}}var $c=class{constructor(i,u){this.g=i,this.map=u}};function Zi(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function to(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function eo(i){return i.h?1:i.g?i.g.size:0}function hs(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ds(i,u){i.g?i.g.add(u):i.h=u}function no(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Zi.prototype.cancel=function(){if(this.i=ro(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ro(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.G);return u}return S(i.i)}var so=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zc(i,u){if(i){i=i.split("&");for(let c=0;c<i.length;c++){const f=i[c].indexOf("=");let w,R=null;f>=0?(w=i[c].substring(0,f),R=i[c].substring(f+1)):w=i[c],u(w,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function te(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;i instanceof te?(this.l=i.l,fn(this,i.j),this.o=i.o,this.g=i.g,mn(this,i.u),this.h=i.h,fs(this,lo(i.i)),this.m=i.m):i&&(u=String(i).match(so))?(this.l=!1,fn(this,u[1]||"",!0),this.o=pn(u[2]||""),this.g=pn(u[3]||"",!0),mn(this,u[4]),this.h=pn(u[5]||"",!0),fs(this,u[6]||"",!0),this.m=pn(u[7]||"")):(this.l=!1,this.i=new _n(null,this.l))}te.prototype.toString=function(){const i=[];var u=this.j;u&&i.push(gn(u,io,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(gn(u,io,!0),"@"),i.push(hn(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&i.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(gn(c,c.charAt(0)=="/"?Wc:Hc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",gn(c,Qc)),i.join("")},te.prototype.resolve=function(i){const u=Lt(this);let c=!!i.j;c?fn(u,i.j):c=!!i.o,c?u.o=i.o:c=!!i.g,c?u.g=i.g:c=i.u!=null;var f=i.h;if(c)mn(u,i.u);else if(c=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var w=u.h.lastIndexOf("/");w!=-1&&(f=u.h.slice(0,w+1)+f)}if(w=f,w==".."||w==".")f="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){f=w.lastIndexOf("/",0)==0,w=w.split("/");const R=[];for(let P=0;P<w.length;){const j=w[P++];j=="."?f&&P==w.length&&R.push(""):j==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&P==w.length&&R.push("")):(R.push(j),f=!0)}f=R.join("/")}else f=w}return c?u.h=f:c=i.i.toString()!=="",c?fs(u,lo(i.i)):c=!!i.m,c&&(u.m=i.m),u};function Lt(i){return new te(i)}function fn(i,u,c){i.j=c?pn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function mn(i,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);i.u=u}else i.u=null}function fs(i,u,c){u instanceof _n?(i.i=u,Xc(i.i,i.l)):(c||(u=gn(u,Kc)),i.i=new _n(u,i.l))}function tt(i,u,c){i.i.set(u,c)}function Jn(i){return tt(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function pn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function gn(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,Gc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Gc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var io=/[#\/\?@]/g,Hc=/[#\?:]/g,Wc=/[#\?]/g,Kc=/[#\?@]/g,Qc=/#/g;function _n(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Ie(i){i.g||(i.g=new Map,i.h=0,i.i&&zc(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}r=_n.prototype,r.add=function(i,u){Ie(this),this.i=null,i=Le(this,i);let c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function oo(i,u){Ie(i),u=Le(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function ao(i,u){return Ie(i),u=Le(i,u),i.g.has(u)}r.forEach=function(i,u){Ie(this),this.g.forEach(function(c,f){c.forEach(function(w){i.call(u,w,f,this)},this)},this)};function uo(i,u){Ie(i);let c=[];if(typeof u=="string")ao(i,u)&&(c=c.concat(i.g.get(Le(i,u))));else for(i=Array.from(i.g.values()),u=0;u<i.length;u++)c=c.concat(i[u]);return c}r.set=function(i,u){return Ie(this),this.i=null,i=Le(this,i),ao(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},r.get=function(i,u){return i?(i=uo(this,i),i.length>0?String(i[0]):u):u};function co(i,u,c){oo(i,u),c.length>0&&(i.i=null,i.g.set(Le(i,u),S(c)),i.h+=c.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var c=u[f];const w=hn(c);c=uo(this,c);for(let R=0;R<c.length;R++){let P=w;c[R]!==""&&(P+="="+hn(c[R])),i.push(P)}}return this.i=i.join("&")};function lo(i){const u=new _n;return u.i=i.i,i.g&&(u.g=new Map(i.g),u.h=i.h),u}function Le(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Xc(i,u){u&&!i.j&&(Ie(i),i.i=null,i.g.forEach(function(c,f){const w=f.toLowerCase();f!=w&&(oo(this,f),co(this,w,c))},i)),i.j=u}function Yc(i,u){const c=new ln;if(a.Image){const f=new Image;f.onload=m(ee,c,"TestLoadImage: loaded",!0,u,f),f.onerror=m(ee,c,"TestLoadImage: error",!1,u,f),f.onabort=m(ee,c,"TestLoadImage: abort",!1,u,f),f.ontimeout=m(ee,c,"TestLoadImage: timeout",!1,u,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function Jc(i,u){const c=new ln,f=new AbortController,w=setTimeout(()=>{f.abort(),ee(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?ee(c,"TestPingServer: ok",!0,u):ee(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),ee(c,"TestPingServer: error",!1,u)})}function ee(i,u,c,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(c)}catch{}}function Zc(){this.g=new Mc}function ms(i){this.i=i.Sb||null,this.h=i.ab||!1}T(ms,Bi),ms.prototype.g=function(){return new Zn(this.i,this.h)};function Zn(i,u){Rt.call(this),this.H=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(Zn,Rt),r=Zn.prototype,r.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=u,this.readyState=1,En(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(u.body=i),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yn(this)),this.readyState=0},r.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ho(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function ho(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}r.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?yn(this):En(this),this.readyState==3&&ho(this)}},r.Oa=function(i){this.g&&(this.response=this.responseText=i,yn(this))},r.Na=function(i){this.g&&(this.response=i,yn(this))},r.ga=function(){this.g&&yn(this)};function yn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,En(i)}r.setRequestHeader=function(i,u){this.A.append(i,u)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function En(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Zn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function fo(i){let u="";return mt(i,function(c,f){u+=f,u+=":",u+=c,u+=`\r
`}),u}function ps(i,u,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=fo(c),typeof i=="string"?c!=null&&hn(c):tt(i,u,c))}function st(i){Rt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(st,Rt);var tl=/^https?$/i,el=["POST","PUT"];r=st.prototype,r.Fa=function(i){this.H=i},r.ea=function(i,u,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wi.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){mo(this,R);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)c.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())c.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),w=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(el,u,void 0)>=0)||f||w||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,P]of c)this.g.setRequestHeader(R,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(R){mo(this,R)}};function mo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.o=5,po(i),tr(i)}function po(i){i.A||(i.A=!0,Pt(i,"complete"),Pt(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Pt(this,"complete"),Pt(this,"abort"),tr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tr(this,!0)),st.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?go(this):this.Xa())},r.Xa=function(){go(this)};function go(i){if(i.h&&typeof o<"u"){if(i.v&&ne(i)==4)setTimeout(i.Ca.bind(i),0);else if(Pt(i,"readystatechange"),ne(i)==4){i.h=!1;try{const R=i.ca();t:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var f;if(f=R===0){let P=String(i.D).match(so)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),f=!tl.test(P?P.toLowerCase():"")}c=f}if(c)Pt(i,"complete"),Pt(i,"success");else{i.o=6;try{var w=ne(i)>2?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.ca()+"]",po(i)}}finally{tr(i)}}}}function tr(i,u){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const c=i.g;i.g=null,u||Pt(i,"ready");try{c.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function ne(i){return i.g?i.g.readyState:0}r.ca=function(){try{return ne(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),kc(u)}};function _o(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function nl(i){const u={};i=(i.g&&ne(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(p(i[f]))continue;var c=Bc(i[f]);const w=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=u[w]||[];u[w]=R,R.push(c)}ke(u,function(f){return f.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tn(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function yo(i){this.za=0,this.i=[],this.j=new ln,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Tn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Tn("baseRetryDelayMs",5e3,i),this.Za=Tn("retryDelaySeedMs",1e4,i),this.Ta=Tn("forwardChannelMaxRetries",2,i),this.va=Tn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Zi(i&&i.concurrentRequestLimit),this.Ba=new Zc,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=yo.prototype,r.ka=8,r.I=1,r.connect=function(i,u,c,f){Vt(0),this.W=i,this.H=u||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.J=So(this,null,this.W),nr(this)};function gs(i){if(Eo(i),i.I==3){var u=i.V++,c=Lt(i.J);if(tt(c,"SID",i.M),tt(c,"RID",u),tt(c,"TYPE","terminate"),vn(i,c),u=new Zt(i,i.j,u),u.M=2,u.A=Jn(Lt(c)),c=!1,a.navigator&&a.navigator.sendBeacon)try{c=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!c&&a.Image&&(new Image().src=u.A,c=!0),c||(u.g=Co(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Yn(u)}bo(i)}function er(i){i.g&&(ys(i),i.g.cancel(),i.g=null)}function Eo(i){er(i),i.v&&(a.clearTimeout(i.v),i.v=null),rr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function nr(i){if(!to(i.h)&&!i.m){i.m=!0;var u=i.Ea;Et||g(),it||(Et(),it=!0),v.add(u,i),i.D=0}}function rl(i,u){return eo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=u.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=cn(d(i.Ea,i,u),Ro(i,i.D)),i.D++,!0)}r.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const w=new Zt(this,this.j,i);let R=this.o;if(this.U&&(R?(R=ye(R),Yt(R,this.U)):R=this.U),this.u!==null||this.R||(w.J=R,R=null),this.S)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=vo(this,w,u),c=Lt(this.J),tt(c,"RID",i),tt(c,"CVER",22),this.G&&tt(c,"X-HTTP-Session-Id",this.G),vn(this,c),R&&(this.R?u="headers="+hn(fo(R))+"&"+u:this.u&&ps(c,this.u,R)),ds(this.h,w),this.Ra&&tt(c,"TYPE","init"),this.S?(tt(c,"$req",u),tt(c,"SID","null"),w.U=!0,us(w,c,null)):us(w,c,u),this.I=2}}else this.I==3&&(i?To(this,i):this.i.length==0||to(this.h)||To(this))};function To(i,u){var c;u?c=u.l:c=i.V++;const f=Lt(i.J);tt(f,"SID",i.M),tt(f,"RID",c),tt(f,"AID",i.K),vn(i,f),i.u&&i.o&&ps(f,i.u,i.o),c=new Zt(i,i.j,c,i.D+1),i.u===null&&(c.J=i.o),u&&(i.i=u.G.concat(i.i)),u=vo(i,c,1e3),c.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),ds(i.h,c),us(c,f,u)}function vn(i,u){i.H&&mt(i.H,function(c,f){tt(u,f,c)}),i.l&&mt({},function(c,f){tt(u,f,c)})}function vo(i,u,c){c=Math.min(i.i.length,c);const f=i.l?d(i.l.Ka,i.l,i):null;t:{var w=i.i;let j=-1;for(;;){const pt=["count="+c];j==-1?c>0?(j=w[0].g,pt.push("ofs="+j)):j=0:pt.push("ofs="+j);let J=!0;for(let Tt=0;Tt<c;Tt++){var R=w[Tt].g;const Ft=w[Tt].map;if(R-=j,R<0)j=Math.max(0,w[Tt].g-100),J=!1;else try{R="req"+R+"_"||"";try{var P=Ft instanceof Map?Ft:Object.entries(Ft);for(const[Ae,re]of P){let se=re;l(re)&&(se=rs(re)),pt.push(R+Ae+"="+encodeURIComponent(se))}}catch(Ae){throw pt.push(R+"type="+encodeURIComponent("_badmap")),Ae}}catch{f&&f(Ft)}}if(J){P=pt.join("&");break t}}P=void 0}return i=i.i.splice(0,c),u.G=i,P}function Io(i){if(!i.g&&!i.v){i.Y=1;var u=i.Da;Et||g(),it||(Et(),it=!0),v.add(u,i),i.A=0}}function _s(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=cn(d(i.Da,i),Ro(i,i.A)),i.A++,!0)}r.Da=function(){if(this.v=null,wo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=cn(d(this.Wa,this),i)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Vt(10),er(this),wo(this))};function ys(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function wo(i){i.g=new Zt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var u=Lt(i.na);tt(u,"RID","rpc"),tt(u,"SID",i.M),tt(u,"AID",i.K),tt(u,"CI",i.F?"0":"1"),!i.F&&i.ia&&tt(u,"TO",i.ia),tt(u,"TYPE","xmlhttp"),vn(i,u),i.u&&i.o&&ps(u,i.u,i.o),i.O&&(i.g.H=i.O);var c=i.g;i=i.ba,c.M=1,c.A=Jn(Lt(u)),c.u=null,c.R=!0,Xi(c,i)}r.Va=function(){this.C!=null&&(this.C=null,er(this),_s(this),Vt(19))};function rr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Ao(i,u){var c=null;if(i.g==u){rr(i),ys(i),i.g=null;var f=2}else if(hs(i.h,u))c=u.G,no(i.h,u),f=1;else return;if(i.I!=0){if(u.o)if(f==1){c=u.u?u.u.length:0,u=Date.now()-u.F;var w=i.D;f=Qn(),Pt(f,new Gi(f,c)),nr(i)}else Io(i);else if(w=u.m,w==3||w==0&&u.X>0||!(f==1&&rl(i,u)||f==2&&_s(i)))switch(c&&c.length>0&&(u=i.h,u.i=u.i.concat(c)),w){case 1:we(i,5);break;case 4:we(i,10);break;case 3:we(i,6);break;default:we(i,2)}}}function Ro(i,u){let c=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(c*=2),c*u}function we(i,u){if(i.j.info("Error code "+u),u==2){var c=d(i.bb,i),f=i.Ua;const w=!f;f=new te(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||fn(f,"https"),Jn(f),w?Yc(f.toString(),c):Jc(f.toString(),c)}else Vt(2);i.I=0,i.l&&i.l.pa(u),bo(i),Eo(i)}r.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function bo(i){if(i.I=0,i.ja=[],i.l){const u=ro(i.h);(u.length!=0||i.i.length!=0)&&(N(i.ja,u),N(i.ja,i.i),i.h.i.length=0,S(i.i),i.i.length=0),i.l.oa()}}function So(i,u,c){var f=c instanceof te?Lt(c):new te(c);if(f.g!="")u&&(f.g=u+"."+f.g),mn(f,f.u);else{var w=a.location;f=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;const R=new te(null);f&&fn(R,f),u&&(R.g=u),w&&mn(R,w),c&&(R.h=c),f=R}return c=i.G,u=i.wa,c&&u&&tt(f,c,u),tt(f,"VER",i.ka),vn(i,f),f}function Co(i,u,c){if(u&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Aa&&!i.ma?new st(new ms({ab:c})):new st(i.ma),u.Fa(i.L),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Po(){}r=Po.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function sr(){}sr.prototype.g=function(i,u){return new kt(i,u)};function kt(i,u){Rt.call(this),this.g=new yo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(i?i["X-WebChannel-Client-Profile"]=u.sa:i={"X-WebChannel-Client-Profile":u.sa}),this.g.U=i,(i=u&&u.Qb)&&!p(i)&&(this.g.u=i),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!p(u)&&(this.g.G=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Fe(this)}T(kt,Rt),kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){gs(this.g)},kt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.v&&(c={},c.__data__=rs(i),i=c);u.i.push(new $c(u.Ya++,i)),u.I==3&&nr(u)},kt.prototype.N=function(){this.g.l=null,delete this.j,gs(this.g),delete this.g,kt.Z.N.call(this)};function Vo(i){ss.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}T(Vo,ss);function Do(){is.call(this),this.status=1}T(Do,is);function Fe(i){this.g=i}T(Fe,Po),Fe.prototype.ra=function(){Pt(this.g,"a")},Fe.prototype.qa=function(i){Pt(this.g,new Vo(i))},Fe.prototype.pa=function(i){Pt(this.g,new Do)},Fe.prototype.oa=function(){Pt(this.g,"b")},sr.prototype.createWebChannel=sr.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,iu=function(){return new sr},su=function(){return Qn()},ru=Te,Ls={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Xn.NO_ERROR=0,Xn.TIMEOUT=8,Xn.HTTP_ERROR=6,fr=Xn,Hi.COMPLETE="complete",nu=Hi,ji.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",Rt.prototype.listen=Rt.prototype.J,An=ji,st.prototype.listenOnce=st.prototype.K,st.prototype.getLastError=st.prototype.Ha,st.prototype.getLastErrorCode=st.prototype.ya,st.prototype.getStatus=st.prototype.ca,st.prototype.getResponseJson=st.prototype.La,st.prototype.getResponseText=st.prototype.la,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Fa,eu=st}).apply(typeof ar<"u"?ar:typeof self<"u"?self:typeof window<"u"?window:{});const Ho="@firebase/firestore",Wo="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Ka("@firebase/firestore");function Be(){return Ve.logLevel}function x(r,...t){if(Ve.logLevel<=K.DEBUG){const e=t.map(ri);Ve.debug(`Firestore (${tn}): ${r}`,...e)}}function Qt(r,...t){if(Ve.logLevel<=K.ERROR){const e=t.map(ri);Ve.error(`Firestore (${tn}): ${r}`,...e)}}function We(r,...t){if(Ve.logLevel<=K.WARN){const e=t.map(ri);Ve.warn(`Firestore (${tn}): ${r}`,...e)}}function ri(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,ou(r,n,e)}function ou(r,t,e){let n=`FIRESTORE (${tn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Qt(n),new Error(n)}function Y(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||ou(t,s,n)}function B(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Ze{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(St.UNAUTHENTICATED))}shutdown(){}}class Qh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Xh{constructor(t){this.t=t,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0,42304);let n=this.i;const s=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Se;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Se,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Se)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Y(typeof n.accessToken=="string",31837,{l:n}),new au(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string",2055,{h:t}),new St(t)}}class Yh{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=St.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Jh{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Yh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ko{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Y(this.o===void 0,3512);const n=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ko(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ko(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=td(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%62))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function Fs(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),o=t.charAt(n);if(s!==o)return bs(s)===bs(o)?z(s,o):bs(s)?1:-1}return z(r.length,t.length)}const ed=55296,nd=57343;function bs(r){const t=r.charCodeAt(0);return t>=ed&&t<=nd}function Ke(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="__name__";class Ut{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&L(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ut.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ut?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=Ut.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return z(t.length,e.length)}static compareSegments(t,e){const n=Ut.isNumericId(t),s=Ut.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Ut.extractNumericId(t).compare(Ut.extractNumericId(e)):Fs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ue.fromString(t.substring(4,t.length-2))}}class et extends Ut{construct(t,e,n){return new et(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new M(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new et(e)}static emptyPath(){return new et([])}}const rd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends Ut{construct(t,e,n){return new wt(t,e,n)}static isValidIdentifier(t){return rd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qo}static keyField(){return new wt([Qo])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new M(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(n+=l,s++):(o(),s++)}if(o(),a)throw new M(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new wt(e)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(et.fromString(t))}static fromName(t){return new O(et.fromString(t).popFirst(5))}static empty(){return new O(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new et(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(r,t,e){if(!e)throw new M(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function sd(r,t,e,n){if(t===!0&&n===!0)throw new M(C.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Xo(r){if(!O.isDocumentKey(r))throw new M(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Yo(r){if(O.isDocumentKey(r))throw new M(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function cu(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function ii(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L(12329,{type:typeof r})}function Ce(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new M(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ii(r);throw new M(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */function ft(r,t){const e={typeString:r};return t&&(e.value=t),e}function $n(r,t){if(!cu(r))throw new M(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new M(C.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=-62135596800,Zo=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Zo);return new nt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Jo)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zo}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if($n(t,nt._jsonSchema))return new nt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Jo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:ft("string",nt._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new nt(0,0))}static max(){return new U(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Mn=-1;function id(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=U.fromTimestamp(n===1e9?new nt(e+1,0):new nt(e,n));return new le(s,O.empty(),t)}function od(r){return new le(r.readTime,r.key,Mn)}class le{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new le(U.min(),O.empty(),Mn)}static max(){return new le(U.max(),O.empty(),Mn)}}function ad(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==ud)throw r;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,n)=>{e(t)})}static reject(t){return new b((e,n)=>{n(t)})}static waitFor(t){return new b((e,n)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},h=>n(h))}),a=!0,o===s&&e()})}static or(t){let e=b.resolve(!1);for(const n of t)e=e.next(s=>s?b.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new b((n,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++l,l===o&&n(a)},m=>s(m))}})}static doWhile(t,e){return new b((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function ld(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function nn(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Mr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Mr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=-1;function Or(r){return r==null}function Ar(r){return r===0&&1/r==-1/0}function hd(r){return typeof r=="number"&&Number.isInteger(r)&&!Ar(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="";function dd(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=ta(t)),t=fd(r.get(e),t);return ta(t)}function fd(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const o=r.charAt(s);switch(o){case"\0":e+="";break;case lu:e+="";break;default:e+=o}}return e}function ta(r){return r+lu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ge(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function hu(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||It.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,It.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,It.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ur(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ur(this.root,t,this.comparator,!1)}getReverseIterator(){return new ur(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ur(this.root,t,this.comparator,!0)}}class ur{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class It{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??It.RED,this.left=s??It.EMPTY,this.right=o??It.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new It(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return It.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,n,s,o){return this}insert(t,e,n){return new It(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new na(this.data.getIterator())}getIteratorFrom(t){return new na(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof yt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new yt(this.comparator);return e.data=t,e}}class na{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.fields=t,t.sort(wt.comparator)}static empty(){return new Mt([])}unionWith(t){let e=new yt(wt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Mt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ke(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class du extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new du("Invalid base64 string: "+o):o}}(t);return new At(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new At(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}At.EMPTY_BYTE_STRING=new At("");const md=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function he(r){if(Y(!!r,39018),typeof r=="string"){let t=0;const e=md.exec(r);if(Y(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function de(r){return typeof r=="string"?At.fromBase64String(r):At.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="server_timestamp",mu="__type__",pu="__previous_value__",gu="__local_write_time__";function ai(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[mu])==null?void 0:n.stringValue)===fu}function Lr(r){const t=r.mapValue.fields[pu];return ai(t)?Lr(t):t}function On(r){const t=he(r.mapValue.fields[gu].timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t,e,n,s,o,a,l,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const Rr="(default)";class Ln{constructor(t,e){this.projectId=t,this.database=e||Rr}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database===Rr}isEqual(t){return t instanceof Ln&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="__type__",gd="__max__",cr={mapValue:{}},yu="__vector__",br="value";function fe(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ai(r)?4:yd(r)?9007199254740991:_d(r)?10:11:L(28295,{value:r})}function Gt(r,t){if(r===t)return!0;const e=fe(r);if(e!==fe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return On(r).isEqual(On(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=he(s.timestampValue),l=he(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return de(s.bytesValue).isEqual(de(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return at(s.geoPointValue.latitude)===at(o.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return at(s.integerValue)===at(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=at(s.doubleValue),l=at(o.doubleValue);return a===l?Ar(a)===Ar(l):isNaN(a)&&isNaN(l)}return!1}(r,t);case 9:return Ke(r.arrayValue.values||[],t.arrayValue.values||[],Gt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(ea(a)!==ea(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Gt(a[h],l[h])))return!1;return!0}(r,t);default:return L(52216,{left:r})}}function Fn(r,t){return(r.values||[]).find(e=>Gt(e,t))!==void 0}function Qe(r,t){if(r===t)return 0;const e=fe(r),n=fe(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(o,a){const l=at(o.integerValue||o.doubleValue),h=at(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(r,t);case 3:return ra(r.timestampValue,t.timestampValue);case 4:return ra(On(r),On(t));case 5:return Fs(r.stringValue,t.stringValue);case 6:return function(o,a){const l=de(o),h=de(a);return l.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const m=z(l[d],h[d]);if(m!==0)return m}return z(l.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const l=z(at(o.latitude),at(a.latitude));return l!==0?l:z(at(o.longitude),at(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return sa(r.arrayValue,t.arrayValue);case 10:return function(o,a){var A,S,N,k;const l=o.fields||{},h=a.fields||{},d=(A=l[br])==null?void 0:A.arrayValue,m=(S=h[br])==null?void 0:S.arrayValue,T=z(((N=d==null?void 0:d.values)==null?void 0:N.length)||0,((k=m==null?void 0:m.values)==null?void 0:k.length)||0);return T!==0?T:sa(d,m)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===cr.mapValue&&a===cr.mapValue)return 0;if(o===cr.mapValue)return 1;if(a===cr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const A=Fs(h[T],m[T]);if(A!==0)return A;const S=Qe(l[h[T]],d[m[T]]);if(S!==0)return S}return z(h.length,m.length)}(r.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function ra(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=he(r),n=he(t),s=z(e.seconds,n.seconds);return s!==0?s:z(e.nanos,n.nanos)}function sa(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=Qe(e[s],n[s]);if(o)return o}return z(e.length,n.length)}function Xe(r){return Us(r)}function Us(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=he(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return de(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return O.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=Us(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of n)o?o=!1:s+=",",s+=`${a}:${Us(e.fields[a])}`;return s+"}"}(r.mapValue):L(61005,{value:r})}function mr(r){switch(fe(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Lr(r);return t?16+mr(t):16;case 5:return 2*r.stringValue.length;case 6:return de(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,o)=>s+mr(o),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return ge(n.fields,(o,a)=>{s+=o.length+mr(a)}),s}(r.mapValue);default:throw L(13486,{value:r})}}function Bs(r){return!!r&&"integerValue"in r}function ui(r){return!!r&&"arrayValue"in r}function ia(r){return!!r&&"nullValue"in r}function oa(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function pr(r){return!!r&&"mapValue"in r}function _d(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[_u])==null?void 0:n.stringValue)===yu}function Pn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return ge(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Pn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Pn(r.arrayValue.values[e]);return t}return{...r}}function yd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===gd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.value=t}static empty(){return new Nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!pr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pn(e)}setAll(t){let e=wt.emptyPath(),n={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,n,s),n={},s=[],e=l.popLast()}a?n[l.lastSegment()]=Pn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());pr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Gt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];pr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){ge(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new Nt(Pn(this.value))}}function Eu(r){const t=[];return ge(r.fields,(e,n)=>{const s=new wt([e]);if(pr(n)){const o=Eu(n.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Mt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e,n,s,o,a,l){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Ct(t,0,U.min(),U.min(),U.min(),Nt.empty(),0)}static newFoundDocument(t,e,n,s){return new Ct(t,1,e,U.min(),n,s,0)}static newNoDocument(t,e){return new Ct(t,2,e,U.min(),U.min(),Nt.empty(),0)}static newUnknownDocument(t,e){return new Ct(t,3,e,U.min(),U.min(),Nt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sr{constructor(t,e){this.position=t,this.inclusive=e}}function aa(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],a=r.position[s];if(o.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),e.key):n=Qe(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ua(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Gt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class Cr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ed(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Tu{}class gt extends Tu{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new vd(t,e,n):e==="array-contains"?new Ad(t,n):e==="in"?new Rd(t,n):e==="not-in"?new bd(t,n):e==="array-contains-any"?new Sd(t,n):new gt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Id(t,n):new wd(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Qe(e,this.value)):e!==null&&fe(this.value)===fe(e)&&this.matchesComparison(Qe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends Tu{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ht(t,e)}matches(t){return vu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function vu(r){return r.op==="and"}function Iu(r){return Td(r)&&vu(r)}function Td(r){for(const t of r.filters)if(t instanceof Ht)return!1;return!0}function js(r){if(r instanceof gt)return r.field.canonicalString()+r.op.toString()+Xe(r.value);if(Iu(r))return r.filters.map(t=>js(t)).join(",");{const t=r.filters.map(e=>js(e)).join(",");return`${r.op}(${t})`}}function wu(r,t){return r instanceof gt?function(n,s){return s instanceof gt&&n.op===s.op&&n.field.isEqual(s.field)&&Gt(n.value,s.value)}(r,t):r instanceof Ht?function(n,s){return s instanceof Ht&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,a,l)=>o&&wu(a,s.filters[l]),!0):!1}(r,t):void L(19439)}function Au(r){return r instanceof gt?function(e){return`${e.field.canonicalString()} ${e.op} ${Xe(e.value)}`}(r):r instanceof Ht?function(e){return e.op.toString()+" {"+e.getFilters().map(Au).join(" ,")+"}"}(r):"Filter"}class vd extends gt{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Id extends gt{constructor(t,e){super(t,"in",e),this.keys=Ru("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class wd extends gt{constructor(t,e){super(t,"not-in",e),this.keys=Ru("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ru(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>O.fromName(n.referenceValue))}class Ad extends gt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ui(e)&&Fn(e.arrayValue,this.value)}}class Rd extends gt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Fn(this.value.arrayValue,e)}}class bd extends gt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Fn(this.value.arrayValue,e)}}class Sd extends gt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ui(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Fn(this.value.arrayValue,n))}}/**
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
 */class Cd{constructor(t,e=null,n=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function ca(r,t=null,e=[],n=[],s=null,o=null,a=null){return new Cd(r,t,e,n,s,o,a)}function ci(r){const t=B(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>js(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Or(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Xe(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Xe(n)).join(",")),t.Te=e}return t.Te}function li(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Ed(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!wu(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ua(r.startAt,t.startAt)&&ua(r.endAt,t.endAt)}function qs(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e=null,n=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Pd(r,t,e,n,s,o,a,l){return new Fr(r,t,e,n,s,o,a,l)}function hi(r){return new Fr(r)}function la(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Vd(r){return r.collectionGroup!==null}function Vn(r){const t=B(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new yt(wt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Cr(o,n))}),e.has(wt.keyField().canonicalString())||t.Ie.push(new Cr(wt.keyField(),n))}return t.Ie}function Bt(r){const t=B(r);return t.Ee||(t.Ee=Dd(t,Vn(r))),t.Ee}function Dd(r,t){if(r.limitType==="F")return ca(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Cr(s.field,o)});const e=r.endAt?new Sr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Sr(r.startAt.position,r.startAt.inclusive):null;return ca(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function $s(r,t,e){return new Fr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Ur(r,t){return li(Bt(r),Bt(t))&&r.limitType===t.limitType}function bu(r){return`${ci(Bt(r))}|lt:${r.limitType}`}function je(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Au(s)).join(", ")}]`),Or(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Xe(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Xe(s)).join(",")),`Target(${n})`}(Bt(r))}; limitType=${r.limitType})`}function Br(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):O.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of Vn(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,l,h){const d=aa(a,l,h);return a.inclusive?d<=0:d<0}(n.startAt,Vn(n),s)||n.endAt&&!function(a,l,h){const d=aa(a,l,h);return a.inclusive?d>=0:d>0}(n.endAt,Vn(n),s))}(r,t)}function xd(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Su(r){return(t,e)=>{let n=!1;for(const s of Vn(r)){const o=Nd(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Nd(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?Qe(h,d):L(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ge(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return hu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=new rt(O.comparator);function Xt(){return kd}const Cu=new rt(O.comparator);function Rn(...r){let t=Cu;for(const e of r)t=t.insert(e.key,e);return t}function Pu(r){let t=Cu;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function be(){return Dn()}function Vu(){return Dn()}function Dn(){return new xe(r=>r.toString(),(r,t)=>r.isEqual(t))}const Md=new rt(O.comparator),Od=new yt(O.comparator);function G(...r){let t=Od;for(const e of r)t=t.add(e);return t}const Ld=new yt(z);function Fd(){return Ld}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ar(t)?"-0":t}}function Du(r){return{integerValue:""+r}}function Ud(r,t){return hd(t)?Du(t):di(r,t)}/**
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
 */class jr{constructor(){this._=void 0}}function Bd(r,t,e){return r instanceof Un?function(s,o){const a={fields:{[mu]:{stringValue:fu},[gu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ai(o)&&(o=Lr(o)),o&&(a.fields[pu]=o),{mapValue:a}}(e,t):r instanceof Bn?Nu(r,t):r instanceof jn?ku(r,t):function(s,o){const a=xu(s,o),l=ha(a)+ha(s.Ae);return Bs(a)&&Bs(s.Ae)?Du(l):di(s.serializer,l)}(r,t)}function jd(r,t,e){return r instanceof Bn?Nu(r,t):r instanceof jn?ku(r,t):e}function xu(r,t){return r instanceof Pr?function(n){return Bs(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Un extends jr{}class Bn extends jr{constructor(t){super(),this.elements=t}}function Nu(r,t){const e=Mu(t);for(const n of r.elements)e.some(s=>Gt(s,n))||e.push(n);return{arrayValue:{values:e}}}class jn extends jr{constructor(t){super(),this.elements=t}}function ku(r,t){let e=Mu(t);for(const n of r.elements)e=e.filter(s=>!Gt(s,n));return{arrayValue:{values:e}}}class Pr extends jr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function ha(r){return at(r.integerValue||r.doubleValue)}function Mu(r){return ui(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,e){this.field=t,this.transform=e}}function $d(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Bn&&s instanceof Bn||n instanceof jn&&s instanceof jn?Ke(n.elements,s.elements,Gt):n instanceof Pr&&s instanceof Pr?Gt(n.Ae,s.Ae):n instanceof Un&&s instanceof Un}(r.transform,t.transform)}class zd{constructor(t,e){this.version=t,this.transformResults=e}}class jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new jt}static exists(t){return new jt(void 0,t)}static updateTime(t){return new jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function gr(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class qr{}function Ou(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Fu(r.key,jt.none()):new zn(r.key,r.data,jt.none());{const e=r.data,n=Nt.empty();let s=new yt(wt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),s=s.add(o)}return new _e(r.key,n,new Mt(s.toArray()),jt.none())}}function Gd(r,t,e){r instanceof zn?function(s,o,a){const l=s.value.clone(),h=fa(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):r instanceof _e?function(s,o,a){if(!gr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=fa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Lu(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(r,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function xn(r,t,e,n){return r instanceof zn?function(o,a,l,h){if(!gr(o.precondition,a))return l;const d=o.value.clone(),m=ma(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof _e?function(o,a,l,h){if(!gr(o.precondition,a))return l;const d=ma(o.fieldTransforms,h,a),m=a.data;return m.setAll(Lu(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(r,t,e,n):function(o,a,l){return gr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(r,t,e)}function Hd(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),o=xu(n.transform,s||null);o!=null&&(e===null&&(e=Nt.empty()),e.set(n.field,o))}return e||null}function da(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ke(n,s,(o,a)=>$d(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class zn extends qr{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _e extends qr{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Lu(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function fa(r,t,e){const n=new Map;Y(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let s=0;s<e.length;s++){const o=r[s],a=o.transform,l=t.data.field(o.field);n.set(o.field,jd(a,l,e[s]))}return n}function ma(r,t,e){const n=new Map;for(const s of r){const o=s.transform,a=e.data.field(s.field);n.set(s.field,Bd(o,a,t))}return n}class Fu extends qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wd extends qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Gd(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=xn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=xn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Vu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=Ou(a,l);h!==null&&n.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),G())}isEqual(t){return this.batchId===t.batchId&&Ke(this.mutations,t.mutations,(e,n)=>da(e,n))&&Ke(this.baseMutations,t.baseMutations,(e,n)=>da(e,n))}}class fi{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Y(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=function(){return Md}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,n[a].version);return new fi(t,e,n,s)}}/**
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
 */class Qd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Xd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,W;function Yd(r){switch(r){case C.OK:return L(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return L(15467,{code:r})}}function Uu(r){if(r===void 0)return Qt("GRPC error has no .code"),C.UNKNOWN;switch(r){case dt.OK:return C.OK;case dt.CANCELLED:return C.CANCELLED;case dt.UNKNOWN:return C.UNKNOWN;case dt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case dt.INTERNAL:return C.INTERNAL;case dt.UNAVAILABLE:return C.UNAVAILABLE;case dt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case dt.NOT_FOUND:return C.NOT_FOUND;case dt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case dt.ABORTED:return C.ABORTED;case dt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case dt.DATA_LOSS:return C.DATA_LOSS;default:return L(39323,{code:r})}}(W=dt||(dt={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Jd(){return new TextEncoder}/**
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
 */const Zd=new ue([4294967295,4294967295],0);function pa(r){const t=Jd().encode(r),e=new tu;return e.update(t),new Uint8Array(e.digest())}function ga(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ue([e,n],0),new ue([s,o],0)]}class mi{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new bn(`Invalid padding: ${e}`);if(n<0)throw new bn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new bn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new bn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ue.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(ue.fromNumber(n)));return s.compare(Zd)===1&&(s=new ue([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=pa(t),[n,s]=ga(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);if(!this.we(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new mi(o,s,e);return n.forEach(l=>a.insert(l)),a}insert(t){if(this.ge===0)return;const e=pa(t),[n,s]=ga(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class bn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Gn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new $r(U.min(),s,new rt(z),Xt(),G())}}class Gn{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Gn(n,e,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class Bu{constructor(t,e){this.targetId=t,this.Ce=e}}class ju{constructor(t,e,n=At.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class _a{constructor(){this.ve=0,this.Fe=ya(),this.Me=At.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=G(),e=G(),n=G();return this.Fe.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:L(38017,{changeType:o})}}),new Gn(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=ya()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Y(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class tf{constructor(t){this.Ge=t,this.ze=new Map,this.je=Xt(),this.Je=lr(),this.He=lr(),this.Ye=new rt(z)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:L(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(qs(o))if(n===0){const a=new O(o.path);this.et(e,a,Ct.newNoDocument(a,U.min()))}else Y(n===1,20013,{expectedCount:n});else{const a=this._t(e);if(a!==n){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=de(n).toUint8Array()}catch(h){if(h instanceof du)return We("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new mi(a,s,o)}catch(h){return We(h instanceof bn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((o,a)=>{const l=this.ot(a);if(l){if(o.current&&qs(l.target)){const h=new O(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Ct.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}});let n=G();this.He.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.je.forEach((o,a)=>a.setReadTime(t));const s=new $r(t,e,this.Ye,this.je,n);return this.je=Xt(),this.Je=lr(),this.He=lr(),this.Ye=new rt(z),s}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new _a,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new yt(z),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new yt(z),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new _a),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function lr(){return new rt(O.comparator)}function ya(){return new rt(O.comparator)}const ef={asc:"ASCENDING",desc:"DESCENDING"},nf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rf={and:"AND",or:"OR"};class sf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function zs(r,t){return r.useProto3Json||Or(t)?t:{value:t}}function Vr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function qu(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function of(r,t){return Vr(r,t.toTimestamp())}function qt(r){return Y(!!r,49232),U.fromTimestamp(function(e){const n=he(e);return new nt(n.seconds,n.nanos)}(r))}function pi(r,t){return Gs(r,t).canonicalString()}function Gs(r,t){const e=function(s){return new et(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function $u(r){const t=et.fromString(r);return Y(Ku(t),10190,{key:t.toString()}),t}function Hs(r,t){return pi(r.databaseId,t.path)}function Ss(r,t){const e=$u(t);if(e.get(1)!==r.databaseId.projectId)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O(Gu(e))}function zu(r,t){return pi(r.databaseId,t)}function af(r){const t=$u(r);return t.length===4?et.emptyPath():Gu(t)}function Ws(r){return new et(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Gu(r){return Y(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Ea(r,t,e){return{name:Hs(r,t),fields:e.value.mapValue.fields}}function uf(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(Y(m===void 0||typeof m=="string",58123),At.fromBase64String(m||"")):(Y(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),At.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const m=d.code===void 0?C.UNKNOWN:Uu(d.code);return new M(m,d.message||"")}(a);e=new ju(n,s,o,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Ss(r,n.document.name),o=qt(n.document.updateTime),a=n.document.createTime?qt(n.document.createTime):U.min(),l=new Nt({mapValue:{fields:n.document.fields}}),h=Ct.newFoundDocument(s,o,a,l),d=n.targetIds||[],m=n.removedTargetIds||[];e=new _r(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Ss(r,n.document),o=n.readTime?qt(n.readTime):U.min(),a=Ct.newNoDocument(s,o),l=n.removedTargetIds||[];e=new _r([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Ss(r,n.document),o=n.removedTargetIds||[];e=new _r([],o,s,null)}else{if(!("filter"in t))return L(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,a=new Xd(s,o),l=n.targetId;e=new Bu(l,a)}}return e}function cf(r,t){let e;if(t instanceof zn)e={update:Ea(r,t.key,t.value)};else if(t instanceof Fu)e={delete:Hs(r,t.key)};else if(t instanceof _e)e={update:Ea(r,t.key,t.data),updateMask:yf(t.fieldMask)};else{if(!(t instanceof Wd))return L(16599,{Vt:t.type});e={verify:Hs(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const l=a.transform;if(l instanceof Un)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Bn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof jn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw L(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:of(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)}(r,t.precondition)),e}function lf(r,t){return r&&r.length>0?(Y(t!==void 0,14353),r.map(e=>function(s,o){let a=s.updateTime?qt(s.updateTime):qt(o);return a.isEqual(U.min())&&(a=qt(o)),new zd(a,s.transformResults||[])}(e,t))):[]}function hf(r,t){return{documents:[zu(r,t.path)]}}function df(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=zu(r,s);const o=function(d){if(d.length!==0)return Wu(Ht.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(A){return{field:qe(A.field),direction:pf(A.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=zs(r,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function ff(r){let t=af(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){Y(n===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const A=Hu(T);return A instanceof Ht&&Iu(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(A=>function(N){return new Cr($e(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(A))}(e.orderBy));let l=null;e.limit&&(l=function(T){let A;return A=typeof T=="object"?T.value:T,Or(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(T){const A=!!T.before,S=T.values||[];return new Sr(S,A)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const A=!T.before,S=T.values||[];return new Sr(S,A)}(e.endAt)),Pd(t,s,a,o,l,"F",h,d)}function mf(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Hu(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=$e(e.unaryFilter.field);return gt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=$e(e.unaryFilter.field);return gt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=$e(e.unaryFilter.field);return gt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=$e(e.unaryFilter.field);return gt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}}(r):r.fieldFilter!==void 0?function(e){return gt.create($e(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Ht.create(e.compositeFilter.filters.map(n=>Hu(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}}(e.compositeFilter.op))}(r):L(30097,{filter:r})}function pf(r){return ef[r]}function gf(r){return nf[r]}function _f(r){return rf[r]}function qe(r){return{fieldPath:r.canonicalString()}}function $e(r){return wt.fromServerFormat(r.fieldPath)}function Wu(r){return r instanceof gt?function(e){if(e.op==="=="){if(oa(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NAN"}};if(ia(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(oa(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NOT_NAN"}};if(ia(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qe(e.field),op:gf(e.op),value:e.value}}}(r):r instanceof Ht?function(e){const n=e.getFilters().map(s=>Wu(s));return n.length===1?n[0]:{compositeFilter:{op:_f(e.op),filters:n}}}(r):L(54877,{filter:r})}function yf(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ku(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e,n,s,o=U.min(),a=U.min(),l=At.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new ie(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t){this.yt=t}}function Tf(r){const t=ff({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?$s(t,t.limit,"L"):t}/**
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
 */class vf{constructor(){this.Cn=new If}addToCollectionParentIndex(t,e){return this.Cn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(le.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(le.min())}updateCollectionGroup(t,e,n){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class If{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new yt(et.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new yt(et.comparator)).toArray()}}/**
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
 */const Ta={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qu=41943040;class xt{static withCacheSize(t){return new xt(t,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(Qu,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Ye(0)}static cr(){return new Ye(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="LruGarbageCollector",wf=1048576;function Ia([r,t],[e,n]){const s=z(r,e);return s===0?z(t,n):s}class Af{constructor(t){this.Ir=t,this.buffer=new yt(Ia),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Ia(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Rf{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){x(va,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){nn(e)?x(va,"Ignoring IndexedDB error during garbage collection: ",e):await en(e)}await this.Vr(3e5)})}}class bf{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return b.resolve(Mr.ce);const n=new Af(e);return this.mr.forEachTarget(t,s=>n.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>n.Ar(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Ta)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ta):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,s,o,a,l,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,a=Date.now(),this.nthSequenceNumber(t,s))).next(T=>(n=T,l=Date.now(),this.removeTargets(t,n,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(T=>(d=Date.now(),Be()<=K.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${T} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:T})))}}function Sf(r,t){return new bf(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.changes=new xe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ct.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?b.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&xn(n.mutation,s,Mt.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,G()).next(()=>n))}getLocalViewOfDocuments(t,e,n=G()){const s=be();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let a=Rn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=be();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,G()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,n,s){let o=Xt();const a=Dn(),l=function(){return Dn()}();return e.forEach((h,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof _e)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),xn(m.mutation,d,m.mutation.getFieldMask(),nt.now())):a.set(d.key,Mt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>l.set(d,new Pf(m,a.get(d)??null))),l))}recalculateAndSaveOverlays(t,e){const n=Dn();let s=new rt((a,l)=>a-l),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=n.get(h)||Mt.empty();m=l.applyToLocalView(d,m),n.set(h,m);const T=(s.get(l.batchId)||G()).add(h);s=s.insert(l.batchId,T)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,m=h.value,T=Vu();m.forEach(A=>{if(!o.has(A)){const S=Ou(e.get(A),n.get(A));S!==null&&T.set(A,S),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return b.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):b.resolve(be());let l=Mn,h=o;return a.next(d=>b.forEach(d,(m,T)=>(l<T.largestBatchId&&(l=T.largestBatchId),o.get(m)?b.resolve():this.remoteDocumentCache.getEntry(t,m).next(A=>{h=h.insert(m,A)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,G())).next(m=>({batchId:l,changes:Pu(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(n=>{let s=Rn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let a=Rn();return this.indexManager.getCollectionParents(t,o).next(l=>b.forEach(l,h=>{const d=function(T,A){return new Fr(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(m=>{m.forEach((T,A)=>{a=a.insert(T,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Ct.newInvalidDocument(m)))});let l=Rn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&xn(m.mutation,d,Mt.empty(),nt.now()),Br(e,d)&&(l=l.insert(h,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return b.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:qt(s.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(s){return{name:s.name,query:Tf(s.bundledQuery),readTime:qt(s.readTime)}}(e)),b.resolve()}}/**
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
 */class xf{constructor(){this.overlays=new rt(O.comparator),this.qr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const n=be();return b.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.St(t,e,o)}),b.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(n)),b.resolve()}getOverlaysForCollection(t,e,n){const s=be(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return b.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new rt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=o.get(d.largestBatchId);m===null&&(m=be(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=be(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return b.resolve(l)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Qd(e,n));let o=this.qr.get(e);o===void 0&&(o=G(),this.qr.set(e,o)),this.qr.set(e,o.add(n.key))}}/**
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
 */class Nf{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.Qr=new yt(vt.$r),this.Ur=new yt(vt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new vt(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Gr(new vt(t,e))}zr(t,e){t.forEach(n=>this.removeReference(n,e))}jr(t){const e=new O(new et([])),n=new vt(e,t),s=new vt(e,t+1),o=[];return this.Ur.forEachInRange([n,s],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new O(new et([])),n=new vt(e,t),s=new vt(e,t+1);let o=G();return this.Ur.forEachInRange([n,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new vt(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class vt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return O.comparator(t.key,e.key)||z(t.Yr,e.Yr)}static Kr(t,e){return z(t.Yr,e.Yr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new yt(vt.$r)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Kd(o,e,n,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new vt(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ei(n),o=s<0?0:s;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?oi:this.tr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new vt(e,0),s=new vt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([n,s],a=>{const l=this.Xr(a.Yr);o.push(l)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new yt(z);return e.forEach(s=>{const o=new vt(s,0),a=new vt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],l=>{n=n.add(l.Yr)})}),b.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;O.isDocumentKey(o)||(o=o.child(""));const a=new vt(new O(o),0);let l=new yt(z);return this.Zr.forEachWhile(h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.Yr)),!0)},a),b.resolve(this.ti(l))}ti(t){const e=[];return t.forEach(n=>{const s=this.Xr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Y(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return b.forEach(e.mutations,s=>{const o=new vt(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new vt(e,0),s=this.Zr.firstAfterOrEqual(n);return b.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(t){this.ri=t,this.docs=function(){return new rt(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return b.resolve(n?n.document.mutableCopy():Ct.newInvalidDocument(e))}getEntries(t,e){let n=Xt();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():Ct.newInvalidDocument(s))}),b.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=Xt();const a=e.path,l=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ad(od(m),n)<=0||(s.has(m.key)||Br(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,n,s){L(9500)}ii(t,e){return b.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Of(this)}getSize(t){return b.resolve(this.size)}}class Of extends Cf{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(n)}),b.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t){this.persistence=t,this.si=new xe(e=>ci(e),li),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.oi=0,this._i=new gi,this.targetCount=0,this.ai=Ye.ur()}forEachTarget(t,e){return this.si.forEach((n,s)=>e(s)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),b.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Ye(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Pr(e),b.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),b.waitFor(o).next(()=>s)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return b.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),b.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return b.resolve(n)}containsKey(t,e){return b.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,e){this.ui={},this.overlays={},this.ci=new Mr(0),this.li=!1,this.li=!0,this.hi=new Nf,this.referenceDelegate=t(this),this.Pi=new Lf(this),this.indexManager=new vf,this.remoteDocumentCache=function(s){return new Mf(s)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new Ef(e),this.Ii=new Df(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new xf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new kf(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){x("MemoryPersistence","Starting transaction:",t);const s=new Ff(this.ci.next());return this.referenceDelegate.Ei(),n(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ai(t,e){return b.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class Ff extends cd{constructor(t){super(),this.currentSequenceNumber=t}}class _i{constructor(t){this.persistence=t,this.Ri=new gi,this.Vi=null}static mi(t){return new _i(t)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),b.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),b.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.fi.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,n=>{const s=O.fromPath(n);return this.gi(t,s).next(o=>{o||e.removeEntry(s,U.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return b.or([()=>b.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Dr{constructor(t,e){this.persistence=t,this.pi=new xe(n=>dd(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Sf(this,e)}static mi(t,e){return new Dr(t,e)}Ei(){}di(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}pr(t,e){return b.forEach(this.pi,(n,s)=>this.br(t,n,s).next(o=>o?b.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(l=>{l||(n++,o.removeEntry(a,U.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=mr(t.data.value)),e}br(t,e,n){return b.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return b.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=s}static As(t,e){let n=G(),s=G();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new yi(t,e.fromCache,n,s)}}/**
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
 */class Uf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Bf{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Cl()?8:ld(bl())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.ys(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(t,e,s,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Uf;return this.Ss(t,e,a).next(l=>{if(o.result=l,this.Vs)return this.bs(t,e,a,l.size)})}).next(()=>o.result)}bs(t,e,n,s){return n.documentReadCount<this.fs?(Be()<=K.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",je(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(Be()<=K.DEBUG&&x("QueryEngine","Query:",je(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(Be()<=K.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",je(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Bt(e))):b.resolve())}ys(t,e){if(la(e))return b.resolve(null);let n=Bt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=$s(e,null,"F"),n=Bt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=G(...o);return this.ps.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,n).next(h=>{const d=this.Ds(e,l);return this.Cs(e,d,a,h.readTime)?this.ys(t,$s(e,null,"F")):this.vs(t,d,e,h)}))})))}ws(t,e,n,s){return la(e)||s.isEqual(U.min())?b.resolve(null):this.ps.getDocuments(t,n).next(o=>{const a=this.Ds(e,o);return this.Cs(e,a,n,s)?b.resolve(null):(Be()<=K.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),je(e)),this.vs(t,a,e,id(s,Mn)).next(l=>l))})}Ds(t,e){let n=new yt(Su(t));return e.forEach((s,o)=>{Br(t,o)&&(n=n.add(o))}),n}Cs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,n){return Be()<=K.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",je(e)),this.ps.getDocumentsMatchingQuery(t,e,le.min(),n)}vs(t,e,n,s){return this.ps.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="LocalStore",jf=3e8;class qf{constructor(t,e,n,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new rt(z),this.xs=new xe(o=>ci(o),li),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Vf(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function $f(r,t,e,n){return new qf(r,t,e,n)}async function Yu(r,t){const e=B(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],l=[];let h=G();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:l}))})})}function zf(r,t){const e=B(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return function(l,h,d,m){const T=d.batch,A=T.keys();let S=b.resolve();return A.forEach(N=>{S=S.next(()=>m.getEntry(h,N)).next(k=>{const D=d.docVersions.get(N);Y(D!==null,48541),k.version.compareTo(D)<0&&(T.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(h,T))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let h=G();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Ju(r){const t=B(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function Gf(r,t){const e=B(r),n=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const l=[];t.targetChanges.forEach((m,T)=>{const A=s.get(T);if(!A)return;l.push(e.Pi.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.Pi.addMatchingKeys(o,m.addedDocuments,T)));let S=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?S=S.withResumeToken(At.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),s=s.insert(T,S),function(k,D,q){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=jf?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(A,S,m)&&l.push(e.Pi.updateTargetData(o,S))});let h=Xt(),d=G();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),l.push(Hf(o,a,t.documentUpdates).next(m=>{h=m.ks,d=m.qs})),!n.isEqual(U.min())){const m=e.Pi.getLastRemoteSnapshotVersion(o).next(T=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(m)}return b.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Ms=s,o))}function Hf(r,t,e){let n=G(),s=G();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let a=Xt();return e.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(U.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):x(Ei,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{ks:a,qs:s}})}function Wf(r,t){const e=B(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=oi),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Kf(r,t){const e=B(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Pi.getTargetData(n,t).next(o=>o?(s=o,b.resolve(s)):e.Pi.allocateTargetId(n).next(a=>(s=new ie(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n})}async function Ks(r,t,e){const n=B(r),s=n.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!nn(a))throw a;x(Ei,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ms=n.Ms.remove(t),n.xs.delete(s.target)}function wa(r,t,e){const n=B(r);let s=U.min(),o=G();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const T=B(h),A=T.xs.get(m);return A!==void 0?b.resolve(T.Ms.get(A)):T.Pi.getTargetData(d,m)}(n,a,Bt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>n.Fs.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?o:G())).next(l=>(Qf(n,xd(t),l),{documents:l,Qs:o})))}function Qf(r,t,e){let n=r.Os.get(t)||U.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Os.set(t,n)}class Aa{constructor(){this.activeTargetIds=Fd()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xf{constructor(){this.Mo=new Aa,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Aa,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Yf{Oo(t){}shutdown(){}}/**
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
 */const Ra="ConnectivityMonitor";class ba{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){x(Ra,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){x(Ra,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hr=null;function Qs(){return hr===null?hr=function(){return 268435456+Math.round(2147483648*Math.random())}():hr++,"0x"+hr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="RestConnection",Jf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Zf{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===Rr?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(t,e,n,s,o){const a=Qs(),l=this.zo(t,e.toUriEncodedString());x(Cs,`Sending RPC '${t}' ${a}:`,l,n);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:d}=new URL(l),m=ei(d);return this.Jo(t,l,h,n,m).then(T=>(x(Cs,`Received RPC '${t}' ${a}: `,T),T),T=>{throw We(Cs,`RPC '${t}' ${a} failed with error: `,T,"url: ",l,"request:",n),T})}Ho(t,e,n,s,o,a){return this.Go(t,e,n,s,o)}jo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),n&&n.headers.forEach((s,o)=>t[o]=s)}zo(t,e){const n=Jf[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class em extends Zf{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,s,o){const a=Qs();return new Promise((l,h)=>{const d=new eu;d.setWithCredentials(!0),d.listenOnce(nu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case fr.NO_ERROR:const T=d.getResponseJson();x(bt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(T)),l(T);break;case fr.TIMEOUT:x(bt,`RPC '${t}' ${a} timed out`),h(new M(C.DEADLINE_EXCEEDED,"Request time out"));break;case fr.HTTP_ERROR:const A=d.getStatus();if(x(bt,`RPC '${t}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S==null?void 0:S.error;if(N&&N.status&&N.message){const k=function(q){const H=q.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(H)>=0?H:C.UNKNOWN}(N.status);h(new M(k,N.message))}else h(new M(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new M(C.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{x(bt,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);x(bt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,n,15)})}T_(t,e,n){const s=Qs(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=iu(),l=su(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");x(bt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const T=a.createWebChannel(m,h);this.I_(T);let A=!1,S=!1;const N=new tm({Yo:D=>{S?x(bt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(A||(x(bt,`Opening RPC '${t}' stream ${s} transport.`),T.open(),A=!0),x(bt,`RPC '${t}' stream ${s} sending:`,D),T.send(D))},Zo:()=>T.close()}),k=(D,q,H)=>{D.listen(q,Q=>{try{H(Q)}catch(ut){setTimeout(()=>{throw ut},0)}})};return k(T,An.EventType.OPEN,()=>{S||(x(bt,`RPC '${t}' stream ${s} transport opened.`),N.o_())}),k(T,An.EventType.CLOSE,()=>{S||(S=!0,x(bt,`RPC '${t}' stream ${s} transport closed`),N.a_(),this.E_(T))}),k(T,An.EventType.ERROR,D=>{S||(S=!0,We(bt,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),N.a_(new M(C.UNAVAILABLE,"The operation could not be completed")))}),k(T,An.EventType.MESSAGE,D=>{var q;if(!S){const H=D.data[0];Y(!!H,16349);const Q=H,ut=(Q==null?void 0:Q.error)||((q=Q[0])==null?void 0:q.error);if(ut){x(bt,`RPC '${t}' stream ${s} received error:`,ut);const Et=ut.status;let it=function(y){const I=dt[y];if(I!==void 0)return Uu(I)}(Et),v=ut.message;it===void 0&&(it=C.INTERNAL,v="Unknown error status: "+Et+" with message "+ut.message),S=!0,N.a_(new M(it,v)),T.close()}else x(bt,`RPC '${t}' stream ${s} received:`,H),N.u_(H)}}),k(l,ru.STAT_EVENT,D=>{D.stat===Ls.PROXY?x(bt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Ls.NOPROXY&&x(bt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function Ps(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(r){return new sf(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,e,n=1e3,s=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="PersistentStream";class tc{constructor(t,e,n,s,o,a,l,h){this.Mi=t,this.S_=n,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Zu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Qt(e.toString()),Qt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===e&&this.G_(n,s)},n=>{t(()=>{const s=new M(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return x(Sa,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(x(Sa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nm extends tc{constructor(t,e,n,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=uf(this.serializer,t),n=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?qt(a.readTime):U.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=Ws(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=qs(h)?{documents:hf(o,h)}:{query:df(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=qu(o,a.resumeToken);const d=zs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=Vr(o,a.snapshotVersion.toTimestamp());const d=zs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const n=mf(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=Ws(this.serializer),e.removeTarget=t,this.q_(e)}}class rm extends tc{constructor(t,e,n,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Y(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Y(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=lf(t.writeResults,t.commitTime),n=qt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=Ws(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>cf(this.serializer,n))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{}class im extends sm{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(t,Gs(e,n),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(C.UNKNOWN,o.toString())})}Ho(t,e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(t,Gs(e,n),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(C.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class om{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Qt(e),this.aa=!1):x("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="RemoteStore";class am{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{n.enqueueAndForget(async()=>{Ne(this)&&(x(De,"Restarting streams for network reachability change."),await async function(h){const d=B(h);d.Ea.add(4),await Hn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Gr(d)}(this))})}),this.Ra=new om(n,s)}}async function Gr(r){if(Ne(r))for(const t of r.da)await t(!0)}async function Hn(r){for(const t of r.da)await t(!1)}function ec(r,t){const e=B(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),wi(e)?Ii(e):rn(e).O_()&&vi(e,t))}function Ti(r,t){const e=B(r),n=rn(e);e.Ia.delete(t),n.O_()&&nc(e,t),e.Ia.size===0&&(n.O_()?n.L_():Ne(e)&&e.Ra.set("Unknown"))}function vi(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}rn(r).Y_(t)}function nc(r,t){r.Va.Ue(t),rn(r).Z_(t)}function Ii(r){r.Va=new tf({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),rn(r).start(),r.Ra.ua()}function wi(r){return Ne(r)&&!rn(r).x_()&&r.Ia.size>0}function Ne(r){return B(r).Ea.size===0}function rc(r){r.Va=void 0}async function um(r){r.Ra.set("Online")}async function cm(r){r.Ia.forEach((t,e)=>{vi(r,t)})}async function lm(r,t){rc(r),wi(r)?(r.Ra.ha(t),Ii(r)):r.Ra.set("Unknown")}async function hm(r,t,e){if(r.Ra.set("Online"),t instanceof ju&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))}(r,t)}catch(n){x(De,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await xr(r,n)}else if(t instanceof _r?r.Va.Ze(t):t instanceof Bu?r.Va.st(t):r.Va.tt(t),!e.isEqual(U.min()))try{const n=await Ju(r.localStore);e.compareTo(n)>=0&&await function(o,a){const l=o.Va.Tt(a);return l.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(d);m&&o.Ia.set(d,m.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,d)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(At.EMPTY_BYTE_STRING,m.snapshotVersion)),nc(o,h);const T=new ie(m.target,h,d,m.sequenceNumber);vi(o,T)}),o.remoteSyncer.applyRemoteEvent(l)}(r,e)}catch(n){x(De,"Failed to raise snapshot:",n),await xr(r,n)}}async function xr(r,t,e){if(!nn(t))throw t;r.Ea.add(1),await Hn(r),r.Ra.set("Offline"),e||(e=()=>Ju(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{x(De,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await Gr(r)})}function sc(r,t){return t().catch(e=>xr(r,e,t))}async function Hr(r){const t=B(r),e=me(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:oi;for(;dm(t);)try{const s=await Wf(t.localStore,n);if(s===null){t.Ta.length===0&&e.L_();break}n=s.batchId,fm(t,s)}catch(s){await xr(t,s)}ic(t)&&oc(t)}function dm(r){return Ne(r)&&r.Ta.length<10}function fm(r,t){r.Ta.push(t);const e=me(r);e.O_()&&e.X_&&e.ea(t.mutations)}function ic(r){return Ne(r)&&!me(r).x_()&&r.Ta.length>0}function oc(r){me(r).start()}async function mm(r){me(r).ra()}async function pm(r){const t=me(r);for(const e of r.Ta)t.ea(e.mutations)}async function gm(r,t,e){const n=r.Ta.shift(),s=fi.from(n,t,e);await sc(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Hr(r)}async function _m(r,t){t&&me(r).X_&&await async function(n,s){if(function(a){return Yd(a)&&a!==C.ABORTED}(s.code)){const o=n.Ta.shift();me(n).B_(),await sc(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Hr(n)}}(r,t),ic(r)&&oc(r)}async function Ca(r,t){const e=B(r);e.asyncQueue.verifyOperationInProgress(),x(De,"RemoteStore received new credentials");const n=Ne(e);e.Ea.add(3),await Hn(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Gr(e)}async function ym(r,t){const e=B(r);t?(e.Ea.delete(2),await Gr(e)):t||(e.Ea.add(2),await Hn(e),e.Ra.set("Unknown"))}function rn(r){return r.ma||(r.ma=function(e,n,s){const o=B(e);return o.sa(),new nm(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Xo:um.bind(null,r),t_:cm.bind(null,r),r_:lm.bind(null,r),H_:hm.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),wi(r)?Ii(r):r.Ra.set("Unknown")):(await r.ma.stop(),rc(r))})),r.ma}function me(r){return r.fa||(r.fa=function(e,n,s){const o=B(e);return o.sa(),new rm(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:mm.bind(null,r),r_:_m.bind(null,r),ta:pm.bind(null,r),na:gm.bind(null,r)}),r.da.push(async t=>{t?(r.fa.B_(),await Hr(r)):(await r.fa.stop(),r.Ta.length>0&&(x(De,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new Se,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const a=Date.now()+n,l=new Ai(t,e,a,s,o);return l.start(n),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ri(r,t){if(Qt("AsyncQueue",`${t}: ${r}`),nn(r))return new M(C.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{static emptySet(t){return new Ge(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=Rn(),this.sortedSet=new rt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ge)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ge;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.ga=new rt(O.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):L(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class Je{constructor(t,e,n,s,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Je(t,e,Ge.emptySet(e),a,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ur(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class Tm{constructor(){this.queries=Va(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=B(e),o=s.queries;s.queries=Va(),o.forEach((a,l)=>{for(const h of l.Sa)h.onError(n)})})(this,new M(C.ABORTED,"Firestore shutting down"))}}function Va(){return new xe(r=>bu(r),Ur)}async function vm(r,t){const e=B(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.ba()&&t.Da()&&(n=2):(o=new Em,n=t.Da()?0:1);try{switch(n){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Ri(a,`Initialization of query '${je(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&bi(e)}async function Im(r,t){const e=B(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.Da()?0:1:!o.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function wm(r,t){const e=B(r);let n=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Fa(s)&&(n=!0);a.wa=s}}n&&bi(e)}function Am(r,t,e){const n=B(r),s=n.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);n.queries.delete(t)}function bi(r){r.Ca.forEach(t=>{t.next()})}var Xs,Da;(Da=Xs||(Xs={})).Ma="default",Da.Cache="cache";class Rm{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Je(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Je.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Xs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this.key=t}}class uc{constructor(t){this.key=t}}class bm{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=G(),this.mutatedKeys=G(),this.eu=Su(t),this.tu=new Ge(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new Pa,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,T)=>{const A=s.get(m),S=Br(this.query,T)?T:null,N=!!A&&this.mutatedKeys.has(A.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;A&&S?A.data.isEqual(S.data)?N!==k&&(n.track({type:3,doc:S}),D=!0):this.su(A,S)||(n.track({type:2,doc:S}),D=!0,(h&&this.eu(S,h)>0||d&&this.eu(S,d)<0)&&(l=!0)):!A&&S?(n.track({type:0,doc:S}),D=!0):A&&!S&&(n.track({type:1,doc:A}),D=!0,(h||d)&&(l=!0)),D&&(S?(a=a.add(S),o=k?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{tu:a,iu:n,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((m,T)=>function(S,N){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Rt:D})}};return k(S)-k(N)}(m.type,T.type)||this.eu(m.doc,T.doc)),this.ou(n),s=s??!1;const l=e&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new Je(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Pa,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=G(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const e=[];return t.forEach(n=>{this.Xa.has(n)||e.push(new uc(n))}),this.Xa.forEach(n=>{t.has(n)||e.push(new ac(n))}),e}cu(t){this.Ya=t.Qs,this.Xa=G();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Je.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Si="SyncEngine";class Sm{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Cm{constructor(t){this.key=t,this.hu=!1}}class Pm{constructor(t,e,n,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new xe(l=>bu(l),Ur),this.Iu=new Map,this.Eu=new Set,this.du=new rt(O.comparator),this.Au=new Map,this.Ru=new gi,this.Vu={},this.mu=new Map,this.fu=Ye.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Vm(r,t,e=!0){const n=mc(r);let s;const o=n.Tu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await cc(n,t,e,!0),s}async function Dm(r,t){const e=mc(r);await cc(e,t,!0,!1)}async function cc(r,t,e,n){const s=await Kf(r.localStore,Bt(t)),o=s.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let l;return n&&(l=await xm(r,t,o,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&ec(r.remoteStore,s),l}async function xm(r,t,e,n,s){r.pu=(T,A,S)=>async function(k,D,q,H){let Q=D.view.ru(q);Q.Cs&&(Q=await wa(k.localStore,D.query,!1).then(({documents:v})=>D.view.ru(v,Q)));const ut=H&&H.targetChanges.get(D.targetId),Et=H&&H.targetMismatches.get(D.targetId)!=null,it=D.view.applyChanges(Q,k.isPrimaryClient,ut,Et);return Na(k,D.targetId,it.au),it.snapshot}(r,T,A,S);const o=await wa(r.localStore,t,!0),a=new bm(t,o.Qs),l=a.ru(o.documents),h=Gn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(l,r.isPrimaryClient,h);Na(r,e,d.au);const m=new Sm(t,e,a);return r.Tu.set(t,m),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),d.snapshot}async function Nm(r,t,e){const n=B(r),s=n.Tu.get(t),o=n.Iu.get(s.targetId);if(o.length>1)return n.Iu.set(s.targetId,o.filter(a=>!Ur(a,t))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ks(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Ti(n.remoteStore,s.targetId),Ys(n,s.targetId)}).catch(en)):(Ys(n,s.targetId),await Ks(n.localStore,s.targetId,!0))}async function km(r,t){const e=B(r),n=e.Tu.get(t),s=e.Iu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ti(e.remoteStore,n.targetId))}async function Mm(r,t,e){const n=qm(r);try{const s=await function(a,l){const h=B(a),d=nt.now(),m=l.reduce((S,N)=>S.add(N.key),G());let T,A;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=Xt(),k=G();return h.Ns.getEntries(S,m).next(D=>{N=D,N.forEach((q,H)=>{H.isValidDocument()||(k=k.add(q))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,N)).next(D=>{T=D;const q=[];for(const H of l){const Q=Hd(H,T.get(H.key).overlayedDocument);Q!=null&&q.push(new _e(H.key,Q,Eu(Q.value.mapValue),jt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,q,l)}).next(D=>{A=D;const q=D.applyToLocalDocumentSet(T,k);return h.documentOverlayCache.saveOverlays(S,D.batchId,q)})}).then(()=>({batchId:A.batchId,changes:Pu(T)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,l,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new rt(z)),d=d.insert(l,h),a.Vu[a.currentUser.toKey()]=d}(n,s.batchId,e),await Wn(n,s.changes),await Hr(n.remoteStore)}catch(s){const o=Ri(s,"Failed to persist write");e.reject(o)}}async function lc(r,t){const e=B(r);try{const n=await Gf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Au.get(o);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Y(a.hu,14607):s.removedDocuments.size>0&&(Y(a.hu,42227),a.hu=!1))}),await Wn(e,n,t)}catch(n){await en(n)}}function xa(r,t,e){const n=B(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Tu.forEach((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=B(a);h.onlineState=l;let d=!1;h.queries.forEach((m,T)=>{for(const A of T.Sa)A.va(l)&&(d=!0)}),d&&bi(h)}(n.eventManager,t),s.length&&n.Pu.H_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Om(r,t,e){const n=B(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Au.get(t),o=s&&s.key;if(o){let a=new rt(O.comparator);a=a.insert(o,Ct.newNoDocument(o,U.min()));const l=G().add(o),h=new $r(U.min(),new Map,new rt(z),a,l);await lc(n,h),n.du=n.du.remove(o),n.Au.delete(t),Ci(n)}else await Ks(n.localStore,t,!1).then(()=>Ys(n,t,e)).catch(en)}async function Lm(r,t){const e=B(r),n=t.batch.batchId;try{const s=await zf(e.localStore,t);dc(e,n,null),hc(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Wn(e,s)}catch(s){await en(s)}}async function Fm(r,t,e){const n=B(r);try{const s=await function(a,l){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,l).next(T=>(Y(T!==null,37113),m=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(n.localStore,t);dc(n,t,e),hc(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Wn(n,s)}catch(s){await en(s)}}function hc(r,t){(r.mu.get(t)||[]).forEach(e=>{e.resolve()}),r.mu.delete(t)}function dc(r,t,e){const n=B(r);let s=n.Vu[n.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),n.Vu[n.currentUser.toKey()]=s}}function Ys(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(n=>{r.Ru.containsKey(n)||fc(r,n)})}function fc(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(Ti(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),Ci(r))}function Na(r,t,e){for(const n of e)n instanceof ac?(r.Ru.addReference(n.key,t),Um(r,n)):n instanceof uc?(x(Si,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||fc(r,n.key)):L(19791,{wu:n})}function Um(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(x(Si,"New document in limbo: "+e),r.Eu.add(n),Ci(r))}function Ci(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new O(et.fromString(t)),n=r.fu.next();r.Au.set(n,new Cm(e)),r.du=r.du.insert(e,n),ec(r.remoteStore,new ie(Bt(hi(e.path)),n,"TargetPurposeLimboResolution",Mr.ce))}}async function Wn(r,t,e){const n=B(r),s=[],o=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((l,h)=>{a.push(n.pu(h,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const T=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){s.push(d);const T=yi.As(h.targetId,d);o.push(T)}}))}),await Promise.all(a),n.Pu.H_(s),await async function(h,d){const m=B(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>b.forEach(d,A=>b.forEach(A.Es,S=>m.persistence.referenceDelegate.addReference(T,A.targetId,S)).next(()=>b.forEach(A.ds,S=>m.persistence.referenceDelegate.removeReference(T,A.targetId,S)))))}catch(T){if(!nn(T))throw T;x(Ei,"Failed to update sequence numbers: "+T)}for(const T of d){const A=T.targetId;if(!T.fromCache){const S=m.Ms.get(A),N=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(N);m.Ms=m.Ms.insert(A,k)}}}(n.localStore,o))}async function Bm(r,t){const e=B(r);if(!e.currentUser.isEqual(t)){x(Si,"User change. New user:",t.toKey());const n=await Yu(e.localStore,t);e.currentUser=t,function(o,a){o.mu.forEach(l=>{l.forEach(h=>{h.reject(new M(C.CANCELLED,a))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Wn(e,n.Ls)}}function jm(r,t){const e=B(r),n=e.Au.get(t);if(n&&n.hu)return G().add(n.key);{let s=G();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const l=e.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function mc(r){const t=B(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=lc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Om.bind(null,t),t.Pu.H_=wm.bind(null,t.eventManager),t.Pu.yu=Am.bind(null,t.eventManager),t}function qm(r){const t=B(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Lm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Fm.bind(null,t),t}class Nr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=zr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return $f(this.persistence,new Bf,t.initialUser,this.serializer)}Cu(t){return new Xu(_i.mi,this.serializer)}Du(t){return new Xf}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nr.provider={build:()=>new Nr};class $m extends Nr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Y(this.persistence.referenceDelegate instanceof Dr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Rf(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new Xu(n=>Dr.mi(n,e),this.serializer)}}class Js{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>xa(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bm.bind(null,this.syncEngine),await ym(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Tm}()}createDatastore(t){const e=zr(t.databaseInfo.databaseId),n=function(o){return new em(o)}(t.databaseInfo);return function(o,a,l,h){return new im(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,a,l){return new am(n,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>xa(this.syncEngine,e,0),function(){return ba.v()?new ba:new Yf}())}createSyncEngine(t,e){return function(s,o,a,l,h,d,m){const T=new Pm(s,o,a,l,h,d);return m&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=B(s);x(De,"RemoteStore shutting down."),o.Ea.add(5),await Hn(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Js.provider={build:()=>new Js};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Qt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="FirestoreClient";class Gm{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=si.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{x(pe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(x(pe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Se;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ri(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Vs(r,t){r.asyncQueue.verifyOperationInProgress(),x(pe,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Yu(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function ka(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Hm(r);x(pe,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Ca(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Ca(t.remoteStore,s)),r._onlineComponents=t}async function Hm(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){x(pe,"Using user provided OfflineComponentProvider");try{await Vs(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;We("Error using user provided cache. Falling back to memory cache: "+e),await Vs(r,new Nr)}}else x(pe,"Using default OfflineComponentProvider"),await Vs(r,new $m(void 0));return r._offlineComponents}async function pc(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(x(pe,"Using user provided OnlineComponentProvider"),await ka(r,r._uninitializedComponentsProvider._online)):(x(pe,"Using default OnlineComponentProvider"),await ka(r,new Js))),r._onlineComponents}function Wm(r){return pc(r).then(t=>t.syncEngine)}async function Ma(r){const t=await pc(r),e=t.eventManager;return e.onListen=Vm.bind(null,t.syncEngine),e.onUnlisten=Nm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Dm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=km.bind(null,t.syncEngine),e}/**
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
 */function gc(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="firestore.googleapis.com",La=!0;class Fa{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new M(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_c,this.ssl=La}else this.host=t.host,this.ssl=t.ssl??La;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Qu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<wf)throw new M(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}sd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gc(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Wr{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Kh;switch(n.type){case"firstParty":return new Jh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Oa.get(e);n&&(x("ComponentProvider","Removing Datastore"),Oa.delete(e),n.terminate())}(this),Promise.resolve()}}function Km(r,t,e,n={}){var d;r=Ce(r,Wr);const s=ei(t),o=r._getSettings(),a={...o,emulatorOptions:r._getEmulatorOptions()},l=`${t}:${e}`;s&&(vl(`https://${l}`),Rl("Firestore",!0)),o.host!==_c&&o.host!==l&&We("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:s,emulatorOptions:n};if(!vr(h,a)&&(r._setSettings(h),n.mockUserToken)){let m,T;if(typeof n.mockUserToken=="string")m=n.mockUserToken,T=St.MOCK_USER;else{m=Il(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const A=n.mockUserToken.sub||n.mockUserToken.user_id;if(!A)throw new M(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new St(A)}r._authCredentials=new Qh(new au(m,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Kr(this.firestore,t,this._query)}}class _t{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ce(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _t(this.firestore,t,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if($n(e,_t._jsonSchema))return new _t(t,n||null,new O(et.fromString(e.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:ft("string",_t._jsonSchemaVersion),referencePath:ft("string")};class ce extends Kr{constructor(t,e,n){super(t,e,hi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new O(t))}withConverter(t){return new ce(this.firestore,t,this._path)}}function Qm(r,t,...e){if(r=Wt(r),uu("collection","path",t),r instanceof Wr){const n=et.fromString(t,...e);return Yo(n),new ce(r,null,n)}{if(!(r instanceof _t||r instanceof ce))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(et.fromString(t,...e));return Yo(n),new ce(r.firestore,null,n)}}function yr(r,t,...e){if(r=Wt(r),arguments.length===1&&(t=si.newId()),uu("doc","path",t),r instanceof Wr){const n=et.fromString(t,...e);return Xo(n),new _t(r,null,new O(n))}{if(!(r instanceof _t||r instanceof ce))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(et.fromString(t,...e));return Xo(n),new _t(r.firestore,r instanceof ce?r.converter:null,new O(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="AsyncQueue";class Ba{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Zu(this,"async_queue_retry"),this._c=()=>{const n=Ps();n&&x(Ua,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=Ps();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Ps();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Se;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!nn(t))throw t;x(Ua,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,Qt("INTERNAL UNHANDLED ERROR: ",ja(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Ai.createAndSchedule(this,t,e,n,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&L(47125,{Pc:ja(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function ja(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of n)if(o in s&&typeof s[o]=="function")return!0;return!1}(r,["next","error","complete"])}class qn extends Wr{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Ba,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ba(t),this._firestoreClient=void 0,await t}}}function Xm(r,t){const e=typeof r=="object"?r:Mh(),n=typeof r=="string"?r:Rr,s=Vh(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=El("firestore");o&&Km(s,...o)}return s}function yc(r){if(r._terminated)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ym(r),r._firestoreClient}function Ym(r){var n,s,o;const t=r._freezeSettings(),e=function(l,h,d,m){return new pd(l,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,gc(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new Gm(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ot(At.fromBase64String(t))}catch(e){throw new M(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ot(At.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if($n(t,Ot._jsonSchema))return Ot.fromBase64String(t.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:ft("string",Ot._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$t._jsonSchemaVersion}}static fromJSON(t){if($n(t,$t._jsonSchema))return new $t(t.latitude,t.longitude)}}$t._jsonSchemaVersion="firestore/geoPoint/1.0",$t._jsonSchema={type:ft("string",$t._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class zt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:zt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if($n(t,zt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new zt(t.vectorValues);throw new M(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}zt._jsonSchemaVersion="firestore/vectorValue/1.0",zt._jsonSchema={type:ft("string",zt._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=/^__.*__$/;class Zm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new _e(t,this.data,this.fieldMask,e,this.fieldTransforms):new zn(t,this.data,e,this.fieldTransforms)}}class Ec{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new _e(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Tc(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ac:r})}}class Pi{constructor(t,e,n,s,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Pi({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return kr(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Tc(this.Ac)&&Jm.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class tp{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||zr(t)}Cc(t,e,n,s=!1){return new Pi({Ac:t,methodName:e,Dc:n,path:wt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vc(r){const t=r._freezeSettings(),e=zr(r._databaseId);return new tp(r._databaseId,!!t.ignoreUndefinedProperties,e)}function ep(r,t,e,n,s,o={}){const a=r.Cc(o.merge||o.mergeFields?2:0,t,e,s);Di("Data must be an object, but it was:",a,n);const l=Ic(n,a);let h,d;if(o.merge)h=new Mt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const T of o.mergeFields){const A=Zs(t,T,e);if(!a.contains(A))throw new M(C.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Ac(m,A)||m.push(A)}h=new Mt(m),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new Zm(new Nt(l),h,d)}class Yr extends Xr{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Yr}}class Vi extends Xr{_toFieldTransform(t){return new qd(t.path,new Un)}isEqual(t){return t instanceof Vi}}function np(r,t,e,n){const s=r.Cc(1,t,e);Di("Data must be an object, but it was:",s,n);const o=[],a=Nt.empty();ge(n,(h,d)=>{const m=xi(t,h,e);d=Wt(d);const T=s.yc(m);if(d instanceof Yr)o.push(m);else{const A=Jr(d,T);A!=null&&(o.push(m),a.set(m,A))}});const l=new Mt(o);return new Ec(a,l,s.fieldTransforms)}function rp(r,t,e,n,s,o){const a=r.Cc(1,t,e),l=[Zs(t,n,e)],h=[s];if(o.length%2!=0)throw new M(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)l.push(Zs(t,o[A])),h.push(o[A+1]);const d=[],m=Nt.empty();for(let A=l.length-1;A>=0;--A)if(!Ac(d,l[A])){const S=l[A];let N=h[A];N=Wt(N);const k=a.yc(S);if(N instanceof Yr)d.push(S);else{const D=Jr(N,k);D!=null&&(d.push(S),m.set(S,D))}}const T=new Mt(d);return new Ec(m,T,a.fieldTransforms)}function Jr(r,t){if(wc(r=Wt(r)))return Di("Unsupported field value:",t,r),Ic(r,t);if(r instanceof Xr)return function(n,s){if(!Tc(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(n,s){const o=[];let a=0;for(const l of n){let h=Jr(l,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(r,t)}return function(n,s){if((n=Wt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ud(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=nt.fromDate(n);return{timestampValue:Vr(s.serializer,o)}}if(n instanceof nt){const o=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Vr(s.serializer,o)}}if(n instanceof $t)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ot)return{bytesValue:qu(s.serializer,n._byteString)};if(n instanceof _t){const o=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:pi(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof zt)return function(a,l){return{mapValue:{fields:{[_u]:{stringValue:yu},[br]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return di(l.serializer,d)})}}}}}}(n,s);throw s.Sc(`Unsupported field value: ${ii(n)}`)}(r,t)}function Ic(r,t){const e={};return hu(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ge(r,(n,s)=>{const o=Jr(s,t.mc(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function wc(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof $t||r instanceof Ot||r instanceof _t||r instanceof Xr||r instanceof zt)}function Di(r,t,e){if(!wc(e)||!cu(e)){const n=ii(e);throw n==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+n)}}function Zs(r,t,e){if((t=Wt(t))instanceof Qr)return t._internalPath;if(typeof t=="string")return xi(r,t);throw kr("Field path arguments must be of type string or ",r,!1,void 0,e)}const sp=new RegExp("[~\\*/\\[\\]]");function xi(r,t,e){if(t.search(sp)>=0)throw kr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Qr(...t.split("."))._internalPath}catch{throw kr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function kr(r,t,e,n,s){const o=n&&!n.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${s}`),h+=")"),new M(C.INVALID_ARGUMENT,l+r+h)}function Ac(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ip(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(bc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ip extends Rc{data(){return super.data()}}function bc(r,t){return typeof t=="string"?xi(r,t):t instanceof Qr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new M(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ap{convertValue(t,e="none"){switch(fe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(de(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ge(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertVectorValue(t){var n,s,o;const e=(o=(s=(n=t.fields)==null?void 0:n[br].arrayValue)==null?void 0:s.values)==null?void 0:o.map(a=>at(a.doubleValue));return new zt(e)}convertGeoPoint(t){return new $t(at(t.latitude),at(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Lr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(On(t));default:return null}}convertTimestamp(t){const e=he(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=et.fromString(t);Y(Ku(n),9688,{name:t});const s=new Ln(n.get(1),n.get(3)),o=new O(n.popFirst(5));return s.isEqual(e)||Qt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(r,t,e){let n;return n=r?r.toFirestore(t):t,n}class Sn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Pe extends Rc{constructor(t,e,n,s,o,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Er(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(bc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Pe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Pe._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pe._jsonSchema={type:ft("string",Pe._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Er extends Pe{data(t={}){return super.data(t)}}class He{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Sn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Er(this._firestore,this._userDataWriter,n.key,n,new Sn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new Er(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Sn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new Er(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Sn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:cp(l.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=He._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=si.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function cp(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:r})}}He._jsonSchemaVersion="firestore/querySnapshot/1.0",He._jsonSchema={type:ft("string",He._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class Sc extends ap{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ot(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _t(this.firestore,null,e)}}function $a(r,t,e,...n){r=Ce(r,_t);const s=Ce(r.firestore,qn),o=vc(s);let a;return a=typeof(t=Wt(t))=="string"||t instanceof Qr?rp(o,"updateDoc",r._key,t,e,n):np(o,"updateDoc",r._key,t),Cc(s,[a.toMutation(r._key,jt.exists(!0))])}function lp(r,t){const e=Ce(r.firestore,qn),n=yr(r),s=up(r.converter,t);return Cc(e,[ep(vc(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,jt.exists(!1))]).then(()=>n)}function hp(r,...t){var h,d,m;r=Wt(r);let e={includeMetadataChanges:!1,source:"default"},n=0;typeof t[n]!="object"||qa(t[n])||(e=t[n++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(qa(t[n])){const T=t[n];t[n]=(h=T.next)==null?void 0:h.bind(T),t[n+1]=(d=T.error)==null?void 0:d.bind(T),t[n+2]=(m=T.complete)==null?void 0:m.bind(T)}let o,a,l;if(r instanceof _t)a=Ce(r.firestore,qn),l=hi(r._key.path),o={next:T=>{t[n]&&t[n](dp(a,r,T))},error:t[n+1],complete:t[n+2]};else{const T=Ce(r,Kr);a=Ce(T.firestore,qn),l=T._query;const A=new Sc(a);o={next:S=>{t[n]&&t[n](new He(a,A,T,S))},error:t[n+1],complete:t[n+2]},op(r._query)}return function(A,S,N,k){const D=new zm(k),q=new Rm(S,D,N);return A.asyncQueue.enqueueAndForget(async()=>vm(await Ma(A),q)),()=>{D.Nu(),A.asyncQueue.enqueueAndForget(async()=>Im(await Ma(A),q))}}(yc(a),l,s,o)}function Cc(r,t){return function(n,s){const o=new Se;return n.asyncQueue.enqueueAndForget(async()=>Mm(await Wm(n),s,o)),o.promise}(yc(r),t)}function dp(r,t,e){const n=e.docs.get(t._key),s=new Sc(r);return new Pe(r,s,t._key,n,new Sn(e.hasPendingWrites,e.fromCache),t.converter)}function fp(){return new Vi("serverTimestamp")}(function(t,e=!0){(function(s){tn=s})(kh),wr(new Nn("firestore",(n,{instanceIdentifier:s,options:o})=>{const a=n.getProvider("app").getImmediate(),l=new qn(new Xh(n.getProvider("auth-internal")),new Zh(a,n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(d.options.projectId,m)}(a,s),a);return o={useFetchStreams:e,...o},l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ze(Ho,Wo,t),ze(Ho,Wo,"esm2020")})();const mp={apiKey:"AIzaSyBcKHbKyBAG1ejnsfmBmQMSxmiAwyzLhNA",authDomain:"githubpage-103c7.firebaseapp.com",projectId:"githubpage-103c7",storageBucket:"githubpage-103c7.firebasestorage.app",messagingSenderId:"658963152260",appId:"1:658963152260:web:27a01739fa833c16d971d1",measurementId:"G-VBG981DDDN"},pp=Ya(mp),dr=Xm(pp),gp={class:"font-sans max-w-[800px] mx-auto text-center select-none text-gray-900 dark:text-gray-100 my-5"},_p={key:0,class:"p-10 bg-[#f5f5f5] dark:bg-gray-800 rounded-xl shadow-lg max-w-[90%] mx-auto transition-colors duration-300"},yp={class:"my-5"},Ep={class:"flex flex-col gap-5 items-center"},Tp={class:"flex gap-2.5 justify-center flex-wrap"},vp={key:1,class:"flex flex-col gap-2.5"},Ip={class:"mb-2.5 p-2.5 bg-[#e0e0e0] dark:bg-gray-800 rounded-md flex justify-between items-center text-sm transition-colors duration-300"},wp={class:"flex justify-between items-center w-full"},Ap={class:"flex items-center gap-2"},Rp={class:"table-felt relative bg-[#35654d] rounded-[30px] p-5 min-h-[60vh] md:min-h-[500px] text-white shadow-inner border-4 border-[#5d4037] dark:border-[#3e2b24] overflow-hidden"},bp={class:"absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/20 p-2.5 rounded-xl min-w-[280px] flex flex-col justify-center items-center z-[5]"},Sp={class:"text-xl mb-2.5 font-bold text-[#ffd700] drop-shadow-md"},Cp={class:"flex gap-1.5 justify-center min-h-[50px]"},Pp={class:"text-base md:text-lg"},Vp={class:"text-base md:text-lg"},Dp={key:0,class:"text-white/80 italic text-sm"},xp={key:0,class:"mt-2.5 bg-[#ffd700] text-black px-2.5 py-1.5 rounded-lg font-bold text-sm shadow-lg animate-bounce"},Np={class:"players-container w-full h-full absolute top-0 left-0 pointer-events-none"},kp={class:"w-full text-center overflow-hidden mb-1"},Mp={class:"font-bold flex justify-center gap-0.5 items-center truncate"},Op={key:0,class:"bg-white text-black rounded-full w-3 h-3 text-[8px] leading-3 inline-block"},Lp={class:"text-green-400 font-bold"},Fp={key:0,class:"text-[#ffd700] text-[0.8em] mt-0.5"},Up={class:"flex justify-center gap-0.5 min-h-[42px]"},Bp={class:"p-2.5 bg-[#eee] dark:bg-gray-800 rounded-lg flex justify-center items-center gap-1.5 min-h-[60px] flex-wrap transition-colors duration-300"},jp={key:0,class:"w-full flex justify-center"},qp={key:1,class:"text-gray-600 dark:text-gray-400 italic"},$p={key:1,class:"flex gap-1.5 w-full justify-center flex-wrap"},zp={class:"flex-1 min-w-[70px] max-w-[120px]"},Gp={key:2,class:"text-gray-600 dark:text-gray-400 italic text-base"},Hp={__name:"TexasPoker",setup(r){const t=["♠","♥","♣","♦"],e=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],n={WAITING:"WAITING",PRE_FLOP:"PRE_FLOP",FLOP:"FLOP",TURN:"TURN",RIVER:"RIVER",SHOWDOWN:"SHOWDOWN"};class s{constructor(){this.cards=[],this.reset()}reset(){this.cards=[];for(let E of t)for(let p of e)this.cards.push({suit:E,rank:p,val:e.indexOf(p)+2});this.shuffle()}shuffle(){for(let E=this.cards.length-1;E>0;E--){const p=Math.floor(Math.random()*(E+1));[this.cards[E],this.cards[p]]=[this.cards[p],this.cards[E]]}}deal(){return this.cards.pop()}}const o=_=>({..._}),a=In(sessionStorage.getItem("poker_player_name")||""),l=In(sessionStorage.getItem("poker_game_id")||""),h=In(!1),d=In(sessionStorage.getItem("poker_player_id")||Math.random().toString(36).substr(2,9));sessionStorage.setItem("poker_player_id",d.value);const m=In({phase:n.WAITING,communityCards:[],pot:0,currentBet:0,dealerIdx:0,currentTurnIdx:0,winnerMessage:"",players:[],lastUpdated:null});let T=null;const A=wn(()=>m.value.players.find(_=>_.id===d.value));wn(()=>m.value.players.filter(_=>!_.folded));const S=wn(()=>m.value.players[m.value.currentTurnIdx]),N=wn(()=>S.value&&S.value.id===d.value&&!m.value.winnerMessage),k=wn(()=>m.value.players.length>0&&m.value.players[0].id===d.value);il(()=>{l.value&&a.value&&q(l.value,!1,!0)});const D=async()=>{if(!a.value)return alert("Enter name first");sessionStorage.setItem("poker_player_name",a.value);try{const _=await lp(Qm(dr,"poker_games"),{phase:n.WAITING,communityCards:[],pot:0,currentBet:0,dealerIdx:0,currentTurnIdx:0,winnerMessage:"",players:[{id:d.value,name:a.value,chips:1e3,cards:[],bet:0,folded:!1,actedInRound:!1,isHost:!0}],createdAt:fp()});l.value=_.id,q(_.id,!0)}catch(_){console.error("Error creating game",_),alert("Error creating game: "+_.message)}},q=async(_,E=!1,p=!1)=>{const V=_||l.value;if(!V||!a.value&&!E){p||alert("Enter Game ID and Name");return}sessionStorage.setItem("poker_player_name",a.value),sessionStorage.setItem("poker_game_id",V),l.value=V,T&&T(),T=hp(yr(dr,"poker_games",V),F=>{if(F.exists()){const Z=F.data();m.value=Z,h.value=!0,!Z.players.find(ot=>ot.id===d.value)&&Z.phase===n.WAITING&&H(V)}else p||alert("Game not found"),Q()},F=>{console.error("Snapshot error:",F),p||alert("Error joining game")})},H=async _=>{const E={id:d.value,name:a.value,chips:1e3,cards:[],bet:0,folded:!1,actedInRound:!1},p=yr(dr,"poker_games",_),V=[...m.value.players];V.find(F=>F.id===d.value)||(V.push(E),await $a(p,{players:V}))},Q=()=>{h.value=!1,l.value="",T&&T(),sessionStorage.removeItem("poker_game_id")},ut=async()=>{try{await navigator.clipboard.writeText(l.value),alert("Game ID copied to clipboard!")}catch(_){console.error("Failed to copy: ",_)}},Et=async _=>{l.value&&await $a(yr(dr,"poker_games",l.value),_)},it=async()=>{if(!k.value)return;if(m.value.players.length<2)return alert("Need at least 2 players");const _=new s,E=[...m.value.players];E.forEach(X=>{X.chips>0?(X.cards=[o(_.deal()),o(_.deal())],X.bet=0,X.folded=!1,X.actedInRound=!1):(X.folded=!0,X.cards=[])});let p=0;E.forEach(X=>{if(!X.folded&&X.chips>0){const mt=Math.min(X.chips,10);X.chips-=mt,p+=mt}});const V=(m.value.dealerIdx+1)%E.length,F=V,Z={phase:n.PRE_FLOP,communityCards:[],pot:p,currentBet:20,dealerIdx:V,currentTurnIdx:F,players:E,winnerMessage:"",deckCards:_.cards};Z.currentTurnIdx=v(E,V),await Et(Z)},v=(_,E)=>{let p=E,V=0;do p=(p+1)%_.length,V++;while((_[p].folded||_[p].chips===0)&&V<_.length);return p},g=async(_,E=0)=>{if(!N.value)return;const p=[...m.value.players],V=p.findIndex(ct=>ct.id===d.value);if(V===-1)return;const F=p[V];let Z=m.value.currentBet;if(m.value.pot,_==="fold")F.folded=!0;else if(_==="call"){const ct=Z-F.bet,Yt=Math.min(F.chips,ct);F.chips-=Yt,F.bet+=Yt}else if(_==="raise"){const ct=Z*2||20,Jt=Math.max(E,ct),Me=Jt-F.bet;if(F.chips>=Me)F.chips-=Me,F.bet=Jt,Z=Jt,p.forEach((Ee,sn)=>{sn!==V&&(Ee.actedInRound=!1)});else{const Ee=F.chips;F.chips=0,F.bet+=Ee}}F.actedInRound=!0,p.reduce((ct,Yt)=>ct+Yt.bet,m.value.pot-m.value.pot);let X=v(p,m.value.currentTurnIdx);const ot=p.filter(ct=>!ct.folded&&ct.chips>0),mt=ot.every(ct=>ct.bet===Z||ct.chips===0),ke=ot.every(ct=>ct.actedInRound),ye={players:p,currentBet:Z,currentTurnIdx:X};ot.length<=1||mt&&ke?await y(ye):await Et(ye)},y=async _=>{const E=_.players;let p=m.value.pot;E.forEach(mt=>{p+=mt.bet,mt.bet=0,mt.actedInRound=!1});let V=m.value.phase,F=[...m.value.communityCards],Z=[...m.value.deckCards||[]];const X=()=>Z.shift();if(V===n.PRE_FLOP)V=n.FLOP,F.push(X(),X(),X());else if(V===n.FLOP)V=n.TURN,F.push(X());else if(V===n.TURN)V=n.RIVER,F.push(X());else if(V===n.RIVER){V=n.SHOWDOWN;const mt=I(E,F,p);await Et({players:mt.players,pot:0,phase:n.SHOWDOWN,winnerMessage:mt.message,deckCards:Z});return}const ot=v(E,m.value.dealerIdx);await Et({players:E,pot:p,currentBet:0,phase:V,communityCards:F,currentTurnIdx:ot,deckCards:Z})},I=(_,E,p)=>{const V=_.filter(Z=>!Z.folded);let F="";if(V.length===1)V[0].chips+=p,F=`${V[0].name} wins $${p} (others folded)!`;else{const Z=ot=>{let ke=[...ot,...E].reduce((ye,ct)=>ye+ct.val,0);return ot[0].val===ot[1].val&&(ke+=50),ke};V.sort((ot,mt)=>Z(mt.cards)-Z(ot.cards));const X=V[0];X.chips+=p,F=`${X.name} wins $${p} with high score!`}return{players:_,message:F}};return ol(()=>{T&&T()}),(_,E)=>{var p;return ht(),lt("div",gp,[h.value?(ht(),lt("div",vp,[$("div",Ip,[$("div",wp,[$("div",Ap,[$("span",null,[E[8]||(E[8]=Ds("Game ID: ",-1)),$("strong",null,Dt(l.value),1)]),$("button",{onClick:ut,class:"p-1 rounded border border-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 dark:border-gray-500 transition-colors",title:"Copy Game ID"}," 📋 ")]),$("button",{onClick:Q,class:"px-2 py-1 bg-gray-600 hover:bg-gray-700 text-white text-xs rounded"},"Exit")])]),$("div",Rp,[$("div",bp,[$("div",Sp,"Pot: $"+Dt(m.value.pot),1),$("div",Cp,[(ht(!0),lt(or,null,Ts(m.value.communityCards,(V,F)=>(ht(),lt("div",{key:F,class:vs(["w-[40px] h-[56px] md:w-[45px] md:h-[64px] bg-white rounded flex flex-col items-center justify-center font-bold border border-gray-300 shadow-sm",["♥","♦"].includes(V.suit)?"text-red-600":"text-black"])},[$("div",Pp,Dt(V.rank),1),$("div",Vp,Dt(V.suit),1)],2))),128)),m.value.communityCards.length===0?(ht(),lt("div",Dp,Dt(m.value.phase==="WAITING"?"Waiting...":"Dealing..."),1)):Ue("",!0)]),m.value.winnerMessage?(ht(),lt("div",xp,Dt(m.value.winnerMessage),1)):Ue("",!0)]),$("div",Np,[(ht(!0),lt(or,null,Ts(m.value.players,V=>{var F,Z;return ht(),lt("div",{key:V.id,class:vs(["player-seat pointer-events-auto bg-black/60 p-1.5 rounded-lg w-[90px] md:w-[120px] transition-all duration-300 border-2 border-transparent flex flex-col items-center absolute text-xs md:text-sm",{"!border-[#ffd700] !bg-black/80 shadow-[0_0_10px_#ffd700] z-10":m.value.phase!=="WAITING"&&((F=S.value)==null?void 0:F.id)===V.id,"border-white/30":V.id===d.value,"opacity-50 grayscale":V.folded}])},[$("div",kp,[$("div",Mp,[Ds(Dt(V.name)+" ",1),V.id===((Z=m.value.players[m.value.dealerIdx])==null?void 0:Z.id)?(ht(),lt("span",Op,"D")):Ue("",!0)]),$("div",Lp,"$"+Dt(V.chips),1),V.bet>0?(ht(),lt("div",Fp,"Bet: $"+Dt(V.bet),1)):Ue("",!0)]),$("div",Up,[V.id===d.value||m.value.phase==="SHOWDOWN"?(ht(!0),lt(or,{key:0},Ts(V.cards,(X,ot)=>(ht(),lt("div",{key:ot,class:vs(["w-[28px] h-[40px] md:w-[34px] md:h-[48px] bg-white rounded flex items-center justify-center text-[0.7em] md:text-[0.8em] font-bold border border-gray-300",["♥","♦"].includes(X.suit)?"text-red-600":"text-black"])},Dt(X.rank)+Dt(X.suit),3))),128)):!V.folded&&V.cards&&V.cards.length?(ht(),lt(or,{key:1},[E[9]||(E[9]=$("div",{class:"card-back w-[28px] h-[40px] md:w-[34px] md:h-[48px] rounded border border-white/50 shadow-sm"},null,-1)),E[10]||(E[10]=$("div",{class:"card-back w-[28px] h-[40px] md:w-[34px] md:h-[48px] rounded border border-white/50 shadow-sm"},null,-1))],64)):Ue("",!0)])],2)}),128))])]),$("div",Bp,[m.value.phase==="WAITING"||m.value.winnerMessage?(ht(),lt("div",jp,[k.value?(ht(),lt("button",{key:0,onClick:it,class:"poker-btn bg-green-700 hover:bg-green-800 text-lg px-5 py-3 max-w-[200px]"},Dt(m.value.winnerMessage?"Deal Next Hand":"Start Game"),1)):(ht(),lt("span",qp,"Waiting for Host to start..."))])):N.value?(ht(),lt("div",$p,[$("button",{onClick:E[3]||(E[3]=V=>g("fold")),class:"poker-btn bg-red-700 hover:bg-red-800"},"Fold"),$("button",{onClick:E[4]||(E[4]=V=>g("call")),class:"poker-btn bg-orange-600 hover:bg-orange-700"},Dt(m.value.currentBet>A.value.bet?"Call $"+(m.value.currentBet-A.value.bet):"Check"),1),$("div",zp,[$("button",{onClick:E[5]||(E[5]=V=>g("raise",m.value.currentBet*2||40)),class:"poker-btn bg-blue-700 hover:bg-blue-800 w-full"}," Raise $"+Dt(Math.max(m.value.currentBet*2,40)),1)])])):m.value.phase!=="WAITING"?(ht(),lt("div",Gp,Dt((p=S.value)==null?void 0:p.name)+" is thinking... ",1)):Ue("",!0)])])):(ht(),lt("div",_p,[E[7]||(E[7]=$("h2",{class:"text-2xl font-bold mb-6"},"Texas Hold'em Online",-1)),$("div",yp,[E[6]||(E[6]=$("label",{class:"block mb-2 font-medium"},"Your Name:",-1)),xo($("input",{"onUpdate:modelValue":E[0]||(E[0]=V=>a.value=V),placeholder:"Enter Name",class:"p-2.5 text-lg rounded border border-gray-300 w-4/5 max-w-[300px] dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"},null,512),[[No,a.value]])]),$("div",Ep,[$("button",{onClick:D,class:"poker-btn bg-purple-600 hover:bg-purple-700 w-full max-w-[200px]"},"Create New Game"),$("div",Tp,[xo($("input",{"onUpdate:modelValue":E[1]||(E[1]=V=>l.value=V),placeholder:"Enter Game ID",class:"w-[140px] p-2.5 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"},null,512),[[No,l.value]]),$("button",{onClick:E[2]||(E[2]=V=>q(null)),class:"poker-btn bg-teal-600 hover:bg-teal-700"},"Join Game")])])]))])}}},Wp=sl(Hp,[["__scopeId","data-v-3c93ff23"]]),Yp=JSON.parse('{"title":"在线德州扑克 (多人联机版)","description":"","frontmatter":{"layout":"doc","aside":false},"headers":[],"relativePath":"games/texas-poker.md","filePath":"games/texas-poker.md"}'),Kp={name:"games/texas-poker.md"},Jp=Object.assign(Kp,{setup(r){return(t,e)=>(ht(),lt("div",null,[e[0]||(e[0]=$("h1",{id:"在线德州扑克-多人联机版",tabindex:"-1"},[Ds("在线德州扑克 (多人联机版) "),$("a",{class:"header-anchor",href:"#在线德州扑克-多人联机版","aria-label":'Permalink to "在线德州扑克 (多人联机版)"'},"​")],-1)),al(Wp),e[1]||(e[1]=ul("",2))]))}});export{Yp as __pageData,Jp as default};
