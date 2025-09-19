(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var D0={exports:{}},Cc={},L0={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=Symbol.for("react.element"),VS=Symbol.for("react.portal"),HS=Symbol.for("react.fragment"),GS=Symbol.for("react.strict_mode"),WS=Symbol.for("react.profiler"),jS=Symbol.for("react.provider"),XS=Symbol.for("react.context"),$S=Symbol.for("react.forward_ref"),YS=Symbol.for("react.suspense"),qS=Symbol.for("react.memo"),KS=Symbol.for("react.lazy"),Qm=Symbol.iterator;function ZS(n){return n===null||typeof n!="object"?null:(n=Qm&&n[Qm]||n["@@iterator"],typeof n=="function"?n:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I0=Object.assign,U0={};function qo(n,e,t){this.props=n,this.context=e,this.refs=U0,this.updater=t||N0}qo.prototype.isReactComponent={};qo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};qo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function F0(){}F0.prototype=qo.prototype;function vp(n,e,t){this.props=n,this.context=e,this.refs=U0,this.updater=t||N0}var xp=vp.prototype=new F0;xp.constructor=vp;I0(xp,qo.prototype);xp.isPureReactComponent=!0;var Jm=Array.isArray,O0=Object.prototype.hasOwnProperty,yp={current:null},k0={key:!0,ref:!0,__self:!0,__source:!0};function z0(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)O0.call(e,i)&&!k0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ml,type:n,key:s,ref:o,props:r,_owner:yp.current}}function QS(n,e){return{$$typeof:ml,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Sp(n){return typeof n=="object"&&n!==null&&n.$$typeof===ml}function JS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var eg=/\/+/g;function Jc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?JS(""+n.key):e.toString(36)}function Su(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ml:case VS:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Jc(o,0):i,Jm(r)?(t="",n!=null&&(t=n.replace(eg,"$&/")+"/"),Su(r,e,t,"",function(u){return u})):r!=null&&(Sp(r)&&(r=QS(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(eg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jm(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Jc(s,a);o+=Su(s,e,t,l,r)}else if(l=ZS(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Jc(s,a++),o+=Su(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Dl(n,e,t){if(n==null)return n;var i=[],r=0;return Su(n,i,"","",function(s){return e.call(t,s,r++)}),i}function e1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var dn={current:null},Mu={transition:null},t1={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:Mu,ReactCurrentOwner:yp};function B0(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Dl,forEach:function(n,e,t){Dl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Dl(n,function(){e++}),e},toArray:function(n){return Dl(n,function(e){return e})||[]},only:function(n){if(!Sp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};We.Component=qo;We.Fragment=HS;We.Profiler=WS;We.PureComponent=vp;We.StrictMode=GS;We.Suspense=YS;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t1;We.act=B0;We.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=I0({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yp.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)O0.call(e,l)&&!k0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ml,type:n.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(n){return n={$$typeof:XS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:jS,_context:n},n.Consumer=n};We.createElement=z0;We.createFactory=function(n){var e=z0.bind(null,n);return e.type=n,e};We.createRef=function(){return{current:null}};We.forwardRef=function(n){return{$$typeof:$S,render:n}};We.isValidElement=Sp;We.lazy=function(n){return{$$typeof:KS,_payload:{_status:-1,_result:n},_init:e1}};We.memo=function(n,e){return{$$typeof:qS,type:n,compare:e===void 0?null:e}};We.startTransition=function(n){var e=Mu.transition;Mu.transition={};try{n()}finally{Mu.transition=e}};We.unstable_act=B0;We.useCallback=function(n,e){return dn.current.useCallback(n,e)};We.useContext=function(n){return dn.current.useContext(n)};We.useDebugValue=function(){};We.useDeferredValue=function(n){return dn.current.useDeferredValue(n)};We.useEffect=function(n,e){return dn.current.useEffect(n,e)};We.useId=function(){return dn.current.useId()};We.useImperativeHandle=function(n,e,t){return dn.current.useImperativeHandle(n,e,t)};We.useInsertionEffect=function(n,e){return dn.current.useInsertionEffect(n,e)};We.useLayoutEffect=function(n,e){return dn.current.useLayoutEffect(n,e)};We.useMemo=function(n,e){return dn.current.useMemo(n,e)};We.useReducer=function(n,e,t){return dn.current.useReducer(n,e,t)};We.useRef=function(n){return dn.current.useRef(n)};We.useState=function(n){return dn.current.useState(n)};We.useSyncExternalStore=function(n,e,t){return dn.current.useSyncExternalStore(n,e,t)};We.useTransition=function(){return dn.current.useTransition()};We.version="18.3.1";L0.exports=We;var B=L0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1=B,i1=Symbol.for("react.element"),r1=Symbol.for("react.fragment"),s1=Object.prototype.hasOwnProperty,o1=n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a1={key:!0,ref:!0,__self:!0,__source:!0};function V0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)s1.call(e,i)&&!a1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:i1,type:n,key:s,ref:o,props:r,_owner:o1.current}}Cc.Fragment=r1;Cc.jsx=V0;Cc.jsxs=V0;D0.exports=Cc;var D=D0.exports,H0={exports:{}},jn={},G0={exports:{}},W0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,q){var Q=I.length;I.push(q);e:for(;0<Q;){var le=Q-1>>>1,_e=I[le];if(0<r(_e,q))I[le]=q,I[Q]=_e,Q=le;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var q=I[0],Q=I.pop();if(Q!==q){I[0]=Q;e:for(var le=0,_e=I.length,je=_e>>>1;le<je;){var Ue=2*(le+1)-1,Fe=I[Ue],Z=Ue+1,te=I[Z];if(0>r(Fe,Q))Z<_e&&0>r(te,Fe)?(I[le]=te,I[Z]=Q,le=Z):(I[le]=Fe,I[Ue]=Q,le=Ue);else if(Z<_e&&0>r(te,Q))I[le]=te,I[Z]=Q,le=Z;else break e}}return q}function r(I,q){var Q=I.sortIndex-q.sortIndex;return Q!==0?Q:I.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var q=t(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=I)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=t(u)}}function S(I){if(g=!1,x(I),!_)if(t(l)!==null)_=!0,H(w);else{var q=t(u);q!==null&&J(S,q.startTime-I)}}function w(I,q){_=!1,g&&(g=!1,d(b),b=-1),p=!0;var Q=h;try{for(x(q),f=t(l);f!==null&&(!(f.expirationTime>q)||I&&!P());){var le=f.callback;if(typeof le=="function"){f.callback=null,h=f.priorityLevel;var _e=le(f.expirationTime<=q);q=n.unstable_now(),typeof _e=="function"?f.callback=_e:f===t(l)&&i(l),x(q)}else i(l);f=t(l)}if(f!==null)var je=!0;else{var Ue=t(u);Ue!==null&&J(S,Ue.startTime-q),je=!1}return je}finally{f=null,h=Q,p=!1}}var T=!1,C=null,b=-1,M=5,E=-1;function P(){return!(n.unstable_now()-E<M)}function U(){if(C!==null){var I=n.unstable_now();E=I;var q=!0;try{q=C(!0,I)}finally{q?z():(T=!1,C=null)}}else T=!1}var z;if(typeof v=="function")z=function(){v(U)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,$=G.port2;G.port1.onmessage=U,z=function(){$.postMessage(null)}}else z=function(){m(U,0)};function H(I){C=I,T||(T=!0,z())}function J(I,q){b=m(function(){I(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,H(w))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var Q=h;h=q;try{return I()}finally{h=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=h;h=I;try{return q()}finally{h=Q}},n.unstable_scheduleCallback=function(I,q,Q){var le=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,I){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=Q+_e,I={id:c++,callback:q,priorityLevel:I,startTime:Q,expirationTime:_e,sortIndex:-1},Q>le?(I.sortIndex=Q,e(u,I),t(l)===null&&I===t(u)&&(g?(d(b),b=-1):g=!0,J(S,Q-le))):(I.sortIndex=_e,e(l,I),_||p||(_=!0,H(w))),I},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(I){var q=h;return function(){var Q=h;h=q;try{return I.apply(this,arguments)}finally{h=Q}}}})(W0);G0.exports=W0;var l1=G0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u1=B,Hn=l1;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j0=new Set,za={};function Fs(n,e){Do(n,e),Do(n+"Capture",e)}function Do(n,e){for(za[n]=e,n=0;n<e.length;n++)j0.add(e[n])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),md=Object.prototype.hasOwnProperty,c1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tg={},ng={};function f1(n){return md.call(ng,n)?!0:md.call(tg,n)?!1:c1.test(n)?ng[n]=!0:(tg[n]=!0,!1)}function d1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function h1(n,e,t,i){if(e===null||typeof e>"u"||d1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Kt[n]=new hn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Kt[e]=new hn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Kt[n]=new hn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Kt[n]=new hn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Kt[n]=new hn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Kt[n]=new hn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Kt[n]=new hn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Kt[n]=new hn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Kt[n]=new hn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Mp=/[\-:]([a-z])/g;function Ep(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Mp,Ep);Kt[e]=new hn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Mp,Ep);Kt[e]=new hn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Mp,Ep);Kt[e]=new hn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Kt[n]=new hn(n,1,!1,n.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Kt[n]=new hn(n,1,!1,n.toLowerCase(),null,!0,!0)});function wp(n,e,t,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(h1(e,t,r,i)&&(t=null),i||r===null?f1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var dr=u1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ll=Symbol.for("react.element"),ro=Symbol.for("react.portal"),so=Symbol.for("react.fragment"),Tp=Symbol.for("react.strict_mode"),gd=Symbol.for("react.profiler"),X0=Symbol.for("react.provider"),$0=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),Cp=Symbol.for("react.memo"),Mr=Symbol.for("react.lazy"),Y0=Symbol.for("react.offscreen"),ig=Symbol.iterator;function ra(n){return n===null||typeof n!="object"?null:(n=ig&&n[ig]||n["@@iterator"],typeof n=="function"?n:null)}var wt=Object.assign,ef;function ya(n){if(ef===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ef=e&&e[1]||""}return`
`+ef+n}var tf=!1;function nf(n,e){if(!n||tf)return"";tf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{tf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ya(n):""}function p1(n){switch(n.tag){case 5:return ya(n.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 2:case 15:return n=nf(n.type,!1),n;case 11:return n=nf(n.type.render,!1),n;case 1:return n=nf(n.type,!0),n;default:return""}}function xd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case so:return"Fragment";case ro:return"Portal";case gd:return"Profiler";case Tp:return"StrictMode";case _d:return"Suspense";case vd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case $0:return(n.displayName||"Context")+".Consumer";case X0:return(n._context.displayName||"Context")+".Provider";case Ap:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Cp:return e=n.displayName||null,e!==null?e:xd(n.type)||"Memo";case Mr:e=n._payload,n=n._init;try{return xd(n(e))}catch{}}return null}function m1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xd(e);case 8:return e===Tp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function q0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function g1(n){var e=q0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Nl(n){n._valueTracker||(n._valueTracker=g1(n))}function K0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=q0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Gu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yd(n,e){var t=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function rg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Wr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z0(n,e){e=e.checked,e!=null&&wp(n,"checked",e,!1)}function Sd(n,e){Z0(n,e);var t=Wr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Md(n,e.type,t):e.hasOwnProperty("defaultValue")&&Md(n,e.type,Wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function sg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Md(n,e,t){(e!=="number"||Gu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Sa=Array.isArray;function yo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Wr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Ed(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function og(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(Sa(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Wr(t)}}function Q0(n,e){var t=Wr(e.value),i=Wr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function ag(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function J0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?J0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Il,ev=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Il=Il||document.createElement("div"),Il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Il.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ba(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_1=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(n){_1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ca[e]=Ca[n]})});function tv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ca.hasOwnProperty(n)&&Ca[n]?(""+e).trim():e+"px"}function nv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=tv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var v1=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Td(n,e){if(e){if(v1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Ad(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cd=null;function Rp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Rd=null,So=null,Mo=null;function lg(n){if(n=vl(n)){if(typeof Rd!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=Lc(e),Rd(n.stateNode,n.type,e))}}function iv(n){So?Mo?Mo.push(n):Mo=[n]:So=n}function rv(){if(So){var n=So,e=Mo;if(Mo=So=null,lg(n),e)for(n=0;n<e.length;n++)lg(e[n])}}function sv(n,e){return n(e)}function ov(){}var rf=!1;function av(n,e,t){if(rf)return n(e,t);rf=!0;try{return sv(n,e,t)}finally{rf=!1,(So!==null||Mo!==null)&&(ov(),rv())}}function Va(n,e){var t=n.stateNode;if(t===null)return null;var i=Lc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var bd=!1;if(nr)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){bd=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{bd=!1}function x1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Ra=!1,Wu=null,ju=!1,Pd=null,y1={onError:function(n){Ra=!0,Wu=n}};function S1(n,e,t,i,r,s,o,a,l){Ra=!1,Wu=null,x1.apply(y1,arguments)}function M1(n,e,t,i,r,s,o,a,l){if(S1.apply(this,arguments),Ra){if(Ra){var u=Wu;Ra=!1,Wu=null}else throw Error(ne(198));ju||(ju=!0,Pd=u)}}function Os(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function lv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ug(n){if(Os(n)!==n)throw Error(ne(188))}function E1(n){var e=n.alternate;if(!e){if(e=Os(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return ug(r),n;if(s===i)return ug(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function uv(n){return n=E1(n),n!==null?cv(n):null}function cv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=cv(n);if(e!==null)return e;n=n.sibling}return null}var fv=Hn.unstable_scheduleCallback,cg=Hn.unstable_cancelCallback,w1=Hn.unstable_shouldYield,T1=Hn.unstable_requestPaint,Dt=Hn.unstable_now,A1=Hn.unstable_getCurrentPriorityLevel,bp=Hn.unstable_ImmediatePriority,dv=Hn.unstable_UserBlockingPriority,Xu=Hn.unstable_NormalPriority,C1=Hn.unstable_LowPriority,hv=Hn.unstable_IdlePriority,Rc=null,Ni=null;function R1(n){if(Ni&&typeof Ni.onCommitFiberRoot=="function")try{Ni.onCommitFiberRoot(Rc,n,void 0,(n.current.flags&128)===128)}catch{}}var xi=Math.clz32?Math.clz32:D1,b1=Math.log,P1=Math.LN2;function D1(n){return n>>>=0,n===0?32:31-(b1(n)/P1|0)|0}var Ul=64,Fl=4194304;function Ma(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function $u(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ma(a):(s&=o,s!==0&&(i=Ma(s)))}else o=t&~r,o!==0?i=Ma(o):s!==0&&(i=Ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-xi(e),r=1<<t,i|=n[t],e&=~r;return i}function L1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-xi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=L1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Dd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function pv(){var n=Ul;return Ul<<=1,!(Ul&4194240)&&(Ul=64),n}function sf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function gl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-xi(e),n[e]=t}function I1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-xi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Pp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-xi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var nt=0;function mv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var gv,Dp,_v,vv,xv,Ld=!1,Ol=[],Lr=null,Nr=null,Ir=null,Ha=new Map,Ga=new Map,wr=[],U1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fg(n,e){switch(n){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function oa(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=vl(e),e!==null&&Dp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function F1(n,e,t,i,r){switch(e){case"focusin":return Lr=oa(Lr,n,e,t,i,r),!0;case"dragenter":return Nr=oa(Nr,n,e,t,i,r),!0;case"mouseover":return Ir=oa(Ir,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ha.set(s,oa(Ha.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ga.set(s,oa(Ga.get(s)||null,n,e,t,i,r)),!0}return!1}function yv(n){var e=_s(n.target);if(e!==null){var t=Os(e);if(t!==null){if(e=t.tag,e===13){if(e=lv(t),e!==null){n.blockedOn=e,xv(n.priority,function(){_v(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Eu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Nd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Cd=i,t.target.dispatchEvent(i),Cd=null}else return e=vl(t),e!==null&&Dp(e),n.blockedOn=t,!1;e.shift()}return!0}function dg(n,e,t){Eu(n)&&t.delete(e)}function O1(){Ld=!1,Lr!==null&&Eu(Lr)&&(Lr=null),Nr!==null&&Eu(Nr)&&(Nr=null),Ir!==null&&Eu(Ir)&&(Ir=null),Ha.forEach(dg),Ga.forEach(dg)}function aa(n,e){n.blockedOn===e&&(n.blockedOn=null,Ld||(Ld=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,O1)))}function Wa(n){function e(r){return aa(r,n)}if(0<Ol.length){aa(Ol[0],n);for(var t=1;t<Ol.length;t++){var i=Ol[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Lr!==null&&aa(Lr,n),Nr!==null&&aa(Nr,n),Ir!==null&&aa(Ir,n),Ha.forEach(e),Ga.forEach(e),t=0;t<wr.length;t++)i=wr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<wr.length&&(t=wr[0],t.blockedOn===null);)yv(t),t.blockedOn===null&&wr.shift()}var Eo=dr.ReactCurrentBatchConfig,Yu=!0;function k1(n,e,t,i){var r=nt,s=Eo.transition;Eo.transition=null;try{nt=1,Lp(n,e,t,i)}finally{nt=r,Eo.transition=s}}function z1(n,e,t,i){var r=nt,s=Eo.transition;Eo.transition=null;try{nt=4,Lp(n,e,t,i)}finally{nt=r,Eo.transition=s}}function Lp(n,e,t,i){if(Yu){var r=Nd(n,e,t,i);if(r===null)mf(n,e,i,qu,t),fg(n,i);else if(F1(r,n,e,t,i))i.stopPropagation();else if(fg(n,i),e&4&&-1<U1.indexOf(n)){for(;r!==null;){var s=vl(r);if(s!==null&&gv(s),s=Nd(n,e,t,i),s===null&&mf(n,e,i,qu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else mf(n,e,i,null,t)}}var qu=null;function Nd(n,e,t,i){if(qu=null,n=Rp(i),n=_s(n),n!==null)if(e=Os(n),e===null)n=null;else if(t=e.tag,t===13){if(n=lv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return qu=n,null}function Sv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A1()){case bp:return 1;case dv:return 4;case Xu:case C1:return 16;case hv:return 536870912;default:return 16}default:return 16}}var Cr=null,Np=null,wu=null;function Mv(){if(wu)return wu;var n,e=Np,t=e.length,i,r="value"in Cr?Cr.value:Cr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return wu=r.slice(n,1<i?1-i:void 0)}function Tu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function kl(){return!0}function hg(){return!1}function Xn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kl:hg,this.isPropagationStopped=hg,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),e}var Ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ip=Xn(Ko),_l=wt({},Ko,{view:0,detail:0}),B1=Xn(_l),of,af,la,bc=wt({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Up,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==la&&(la&&n.type==="mousemove"?(of=n.screenX-la.screenX,af=n.screenY-la.screenY):af=of=0,la=n),of)},movementY:function(n){return"movementY"in n?n.movementY:af}}),pg=Xn(bc),V1=wt({},bc,{dataTransfer:0}),H1=Xn(V1),G1=wt({},_l,{relatedTarget:0}),lf=Xn(G1),W1=wt({},Ko,{animationName:0,elapsedTime:0,pseudoElement:0}),j1=Xn(W1),X1=wt({},Ko,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),$1=Xn(X1),Y1=wt({},Ko,{data:0}),mg=Xn(Y1),q1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Z1[n])?!!e[n]:!1}function Up(){return Q1}var J1=wt({},_l,{key:function(n){if(n.key){var e=q1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Tu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?K1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Up,charCode:function(n){return n.type==="keypress"?Tu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),eM=Xn(J1),tM=wt({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gg=Xn(tM),nM=wt({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Up}),iM=Xn(nM),rM=wt({},Ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),sM=Xn(rM),oM=wt({},bc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),aM=Xn(oM),lM=[9,13,27,32],Fp=nr&&"CompositionEvent"in window,ba=null;nr&&"documentMode"in document&&(ba=document.documentMode);var uM=nr&&"TextEvent"in window&&!ba,Ev=nr&&(!Fp||ba&&8<ba&&11>=ba),_g=" ",vg=!1;function wv(n,e){switch(n){case"keyup":return lM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var oo=!1;function cM(n,e){switch(n){case"compositionend":return Tv(e);case"keypress":return e.which!==32?null:(vg=!0,_g);case"textInput":return n=e.data,n===_g&&vg?null:n;default:return null}}function fM(n,e){if(oo)return n==="compositionend"||!Fp&&wv(n,e)?(n=Mv(),wu=Np=Cr=null,oo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ev&&e.locale!=="ko"?null:e.data;default:return null}}var dM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!dM[n.type]:e==="textarea"}function Av(n,e,t,i){iv(i),e=Ku(e,"onChange"),0<e.length&&(t=new Ip("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Pa=null,ja=null;function hM(n){Ov(n,0)}function Pc(n){var e=uo(n);if(K0(e))return n}function pM(n,e){if(n==="change")return e}var Cv=!1;if(nr){var uf;if(nr){var cf="oninput"in document;if(!cf){var yg=document.createElement("div");yg.setAttribute("oninput","return;"),cf=typeof yg.oninput=="function"}uf=cf}else uf=!1;Cv=uf&&(!document.documentMode||9<document.documentMode)}function Sg(){Pa&&(Pa.detachEvent("onpropertychange",Rv),ja=Pa=null)}function Rv(n){if(n.propertyName==="value"&&Pc(ja)){var e=[];Av(e,ja,n,Rp(n)),av(hM,e)}}function mM(n,e,t){n==="focusin"?(Sg(),Pa=e,ja=t,Pa.attachEvent("onpropertychange",Rv)):n==="focusout"&&Sg()}function gM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pc(ja)}function _M(n,e){if(n==="click")return Pc(e)}function vM(n,e){if(n==="input"||n==="change")return Pc(e)}function xM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Mi=typeof Object.is=="function"?Object.is:xM;function Xa(n,e){if(Mi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!md.call(e,r)||!Mi(n[r],e[r]))return!1}return!0}function Mg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Eg(n,e){var t=Mg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Mg(t)}}function bv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?bv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Pv(){for(var n=window,e=Gu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Gu(n.document)}return e}function Op(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function yM(n){var e=Pv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&bv(t.ownerDocument.documentElement,t)){if(i!==null&&Op(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Eg(t,s);var o=Eg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var SM=nr&&"documentMode"in document&&11>=document.documentMode,ao=null,Id=null,Da=null,Ud=!1;function wg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ud||ao==null||ao!==Gu(i)||(i=ao,"selectionStart"in i&&Op(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Da&&Xa(Da,i)||(Da=i,i=Ku(Id,"onSelect"),0<i.length&&(e=new Ip("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ao)))}function zl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var lo={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},ff={},Dv={};nr&&(Dv=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function Dc(n){if(ff[n])return ff[n];if(!lo[n])return n;var e=lo[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Dv)return ff[n]=e[t];return n}var Lv=Dc("animationend"),Nv=Dc("animationiteration"),Iv=Dc("animationstart"),Uv=Dc("transitionend"),Fv=new Map,Tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(n,e){Fv.set(n,e),Fs(e,[n])}for(var df=0;df<Tg.length;df++){var hf=Tg[df],MM=hf.toLowerCase(),EM=hf[0].toUpperCase()+hf.slice(1);Kr(MM,"on"+EM)}Kr(Lv,"onAnimationEnd");Kr(Nv,"onAnimationIteration");Kr(Iv,"onAnimationStart");Kr("dblclick","onDoubleClick");Kr("focusin","onFocus");Kr("focusout","onBlur");Kr(Uv,"onTransitionEnd");Do("onMouseEnter",["mouseout","mouseover"]);Do("onMouseLeave",["mouseout","mouseover"]);Do("onPointerEnter",["pointerout","pointerover"]);Do("onPointerLeave",["pointerout","pointerover"]);Fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function Ag(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,M1(i,e,void 0,n),n.currentTarget=null}function Ov(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ag(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ag(r,a,u),s=l}}}if(ju)throw n=Pd,ju=!1,Pd=null,n}function dt(n,e){var t=e[Bd];t===void 0&&(t=e[Bd]=new Set);var i=n+"__bubble";t.has(i)||(kv(e,n,2,!1),t.add(i))}function pf(n,e,t){var i=0;e&&(i|=4),kv(t,n,i,e)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function $a(n){if(!n[Bl]){n[Bl]=!0,j0.forEach(function(t){t!=="selectionchange"&&(wM.has(t)||pf(t,!1,n),pf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Bl]||(e[Bl]=!0,pf("selectionchange",!1,e))}}function kv(n,e,t,i){switch(Sv(e)){case 1:var r=k1;break;case 4:r=z1;break;default:r=Lp}t=r.bind(null,e,t,n),r=void 0,!bd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function mf(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=_s(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}av(function(){var u=s,c=Rp(t),f=[];e:{var h=Fv.get(n);if(h!==void 0){var p=Ip,_=n;switch(n){case"keypress":if(Tu(t)===0)break e;case"keydown":case"keyup":p=eM;break;case"focusin":_="focus",p=lf;break;case"focusout":_="blur",p=lf;break;case"beforeblur":case"afterblur":p=lf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=H1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=iM;break;case Lv:case Nv:case Iv:p=j1;break;case Uv:p=sM;break;case"scroll":p=B1;break;case"wheel":p=aM;break;case"copy":case"cut":case"paste":p=$1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gg}var g=(e&4)!==0,m=!g&&n==="scroll",d=g?h!==null?h+"Capture":null:h;g=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=Va(v,d),S!=null&&g.push(Ya(v,S,x)))),m)break;v=v.return}0<g.length&&(h=new p(h,_,null,t,c),f.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==Cd&&(_=t.relatedTarget||t.fromElement)&&(_s(_)||_[ir]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?_s(_):null,_!==null&&(m=Os(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=pg,S="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=gg,S="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:uo(p),x=_==null?h:uo(_),h=new g(S,v+"leave",p,t,c),h.target=m,h.relatedTarget=x,S=null,_s(c)===u&&(g=new g(d,v+"enter",_,t,c),g.target=x,g.relatedTarget=m,S=g),m=S,p&&_)t:{for(g=p,d=_,v=0,x=g;x;x=Vs(x))v++;for(x=0,S=d;S;S=Vs(S))x++;for(;0<v-x;)g=Vs(g),v--;for(;0<x-v;)d=Vs(d),x--;for(;v--;){if(g===d||d!==null&&g===d.alternate)break t;g=Vs(g),d=Vs(d)}g=null}else g=null;p!==null&&Cg(f,h,p,g,!1),_!==null&&m!==null&&Cg(f,m,_,g,!0)}}e:{if(h=u?uo(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=pM;else if(xg(h))if(Cv)w=vM;else{w=gM;var T=mM}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=_M);if(w&&(w=w(n,u))){Av(f,w,t,c);break e}T&&T(n,h,u),n==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Md(h,"number",h.value)}switch(T=u?uo(u):window,n){case"focusin":(xg(T)||T.contentEditable==="true")&&(ao=T,Id=u,Da=null);break;case"focusout":Da=Id=ao=null;break;case"mousedown":Ud=!0;break;case"contextmenu":case"mouseup":case"dragend":Ud=!1,wg(f,t,c);break;case"selectionchange":if(SM)break;case"keydown":case"keyup":wg(f,t,c)}var C;if(Fp)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else oo?wv(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(Ev&&t.locale!=="ko"&&(oo||b!=="onCompositionStart"?b==="onCompositionEnd"&&oo&&(C=Mv()):(Cr=c,Np="value"in Cr?Cr.value:Cr.textContent,oo=!0)),T=Ku(u,b),0<T.length&&(b=new mg(b,n,null,t,c),f.push({event:b,listeners:T}),C?b.data=C:(C=Tv(t),C!==null&&(b.data=C)))),(C=uM?cM(n,t):fM(n,t))&&(u=Ku(u,"onBeforeInput"),0<u.length&&(c=new mg("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=C))}Ov(f,e)})}function Ya(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ku(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Va(n,t),s!=null&&i.unshift(Ya(n,s,r)),s=Va(n,e),s!=null&&i.push(Ya(n,s,r))),n=n.return}return i}function Vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Cg(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Va(t,s),l!=null&&o.unshift(Ya(t,l,a))):r||(l=Va(t,s),l!=null&&o.push(Ya(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var TM=/\r\n?/g,AM=/\u0000|\uFFFD/g;function Rg(n){return(typeof n=="string"?n:""+n).replace(TM,`
`).replace(AM,"")}function Vl(n,e,t){if(e=Rg(e),Rg(n)!==e&&t)throw Error(ne(425))}function Zu(){}var Fd=null,Od=null;function kd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zd=typeof setTimeout=="function"?setTimeout:void 0,CM=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,RM=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(n){return bg.resolve(null).then(n).catch(bM)}:zd;function bM(n){setTimeout(function(){throw n})}function gf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Wa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Wa(e)}function Ur(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Pg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Zo=Math.random().toString(36).slice(2),Ri="__reactFiber$"+Zo,qa="__reactProps$"+Zo,ir="__reactContainer$"+Zo,Bd="__reactEvents$"+Zo,PM="__reactListeners$"+Zo,DM="__reactHandles$"+Zo;function _s(n){var e=n[Ri];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ir]||t[Ri]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Pg(n);n!==null;){if(t=n[Ri])return t;n=Pg(n)}return e}n=t,t=n.parentNode}return null}function vl(n){return n=n[Ri]||n[ir],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function uo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function Lc(n){return n[qa]||null}var Vd=[],co=-1;function Zr(n){return{current:n}}function ht(n){0>co||(n.current=Vd[co],Vd[co]=null,co--)}function ct(n,e){co++,Vd[co]=n.current,n.current=e}var jr={},sn=Zr(jr),yn=Zr(!1),bs=jr;function Lo(n,e){var t=n.type.contextTypes;if(!t)return jr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(n){return n=n.childContextTypes,n!=null}function Qu(){ht(yn),ht(sn)}function Dg(n,e,t){if(sn.current!==jr)throw Error(ne(168));ct(sn,e),ct(yn,t)}function zv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,m1(n)||"Unknown",r));return wt({},t,i)}function Ju(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||jr,bs=sn.current,ct(sn,n),ct(yn,yn.current),!0}function Lg(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=zv(n,e,bs),i.__reactInternalMemoizedMergedChildContext=n,ht(yn),ht(sn),ct(sn,n)):ht(yn),ct(yn,t)}var $i=null,Nc=!1,_f=!1;function Bv(n){$i===null?$i=[n]:$i.push(n)}function LM(n){Nc=!0,Bv(n)}function Qr(){if(!_f&&$i!==null){_f=!0;var n=0,e=nt;try{var t=$i;for(nt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}$i=null,Nc=!1}catch(r){throw $i!==null&&($i=$i.slice(n+1)),fv(bp,Qr),r}finally{nt=e,_f=!1}}return null}var fo=[],ho=0,ec=null,tc=0,Qn=[],Jn=0,Ps=null,Ki=1,Zi="";function cs(n,e){fo[ho++]=tc,fo[ho++]=ec,ec=n,tc=e}function Vv(n,e,t){Qn[Jn++]=Ki,Qn[Jn++]=Zi,Qn[Jn++]=Ps,Ps=n;var i=Ki;n=Zi;var r=32-xi(i)-1;i&=~(1<<r),t+=1;var s=32-xi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ki=1<<32-xi(e)+r|t<<r|i,Zi=s+n}else Ki=1<<s|t<<r|i,Zi=n}function kp(n){n.return!==null&&(cs(n,1),Vv(n,1,0))}function zp(n){for(;n===ec;)ec=fo[--ho],fo[ho]=null,tc=fo[--ho],fo[ho]=null;for(;n===Ps;)Ps=Qn[--Jn],Qn[Jn]=null,Zi=Qn[--Jn],Qn[Jn]=null,Ki=Qn[--Jn],Qn[Jn]=null}var zn=null,On=null,mt=!1,mi=null;function Hv(n,e){var t=ei(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ng(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,zn=n,On=Ur(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,zn=n,On=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ps!==null?{id:Ki,overflow:Zi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ei(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,zn=n,On=null,!0):!1;default:return!1}}function Hd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gd(n){if(mt){var e=On;if(e){var t=e;if(!Ng(n,e)){if(Hd(n))throw Error(ne(418));e=Ur(t.nextSibling);var i=zn;e&&Ng(n,e)?Hv(i,t):(n.flags=n.flags&-4097|2,mt=!1,zn=n)}}else{if(Hd(n))throw Error(ne(418));n.flags=n.flags&-4097|2,mt=!1,zn=n}}}function Ig(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Hl(n){if(n!==zn)return!1;if(!mt)return Ig(n),mt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!kd(n.type,n.memoizedProps)),e&&(e=On)){if(Hd(n))throw Gv(),Error(ne(418));for(;e;)Hv(n,e),e=Ur(e.nextSibling)}if(Ig(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){On=Ur(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}On=null}}else On=zn?Ur(n.stateNode.nextSibling):null;return!0}function Gv(){for(var n=On;n;)n=Ur(n.nextSibling)}function No(){On=zn=null,mt=!1}function Bp(n){mi===null?mi=[n]:mi.push(n)}var NM=dr.ReactCurrentBatchConfig;function ua(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Gl(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ug(n){var e=n._init;return e(n._payload)}function Wv(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=zr(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,S){return v===null||v.tag!==6?(v=wf(x,d.mode,S),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,S){var w=x.type;return w===so?c(d,v,x.props.children,S,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Mr&&Ug(w)===v.type)?(S=r(v,x.props),S.ref=ua(d,v,x),S.return=d,S):(S=Lu(x.type,x.key,x.props,null,d.mode,S),S.ref=ua(d,v,x),S.return=d,S)}function u(d,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Tf(x,d.mode,S),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function c(d,v,x,S,w){return v===null||v.tag!==7?(v=Es(x,d.mode,S,w),v.return=d,v):(v=r(v,x),v.return=d,v)}function f(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=wf(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ll:return x=Lu(v.type,v.key,v.props,null,d.mode,x),x.ref=ua(d,null,v),x.return=d,x;case ro:return v=Tf(v,d.mode,x),v.return=d,v;case Mr:var S=v._init;return f(d,S(v._payload),x)}if(Sa(v)||ra(v))return v=Es(v,d.mode,x,null),v.return=d,v;Gl(d,v)}return null}function h(d,v,x,S){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(d,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ll:return x.key===w?l(d,v,x,S):null;case ro:return x.key===w?u(d,v,x,S):null;case Mr:return w=x._init,h(d,v,w(x._payload),S)}if(Sa(x)||ra(x))return w!==null?null:c(d,v,x,S,null);Gl(d,x)}return null}function p(d,v,x,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,a(v,d,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ll:return d=d.get(S.key===null?x:S.key)||null,l(v,d,S,w);case ro:return d=d.get(S.key===null?x:S.key)||null,u(v,d,S,w);case Mr:var T=S._init;return p(d,v,x,T(S._payload),w)}if(Sa(S)||ra(S))return d=d.get(x)||null,c(v,d,S,w,null);Gl(v,S)}return null}function _(d,v,x,S){for(var w=null,T=null,C=v,b=v=0,M=null;C!==null&&b<x.length;b++){C.index>b?(M=C,C=null):M=C.sibling;var E=h(d,C,x[b],S);if(E===null){C===null&&(C=M);break}n&&C&&E.alternate===null&&e(d,C),v=s(E,v,b),T===null?w=E:T.sibling=E,T=E,C=M}if(b===x.length)return t(d,C),mt&&cs(d,b),w;if(C===null){for(;b<x.length;b++)C=f(d,x[b],S),C!==null&&(v=s(C,v,b),T===null?w=C:T.sibling=C,T=C);return mt&&cs(d,b),w}for(C=i(d,C);b<x.length;b++)M=p(C,d,b,x[b],S),M!==null&&(n&&M.alternate!==null&&C.delete(M.key===null?b:M.key),v=s(M,v,b),T===null?w=M:T.sibling=M,T=M);return n&&C.forEach(function(P){return e(d,P)}),mt&&cs(d,b),w}function g(d,v,x,S){var w=ra(x);if(typeof w!="function")throw Error(ne(150));if(x=w.call(x),x==null)throw Error(ne(151));for(var T=w=null,C=v,b=v=0,M=null,E=x.next();C!==null&&!E.done;b++,E=x.next()){C.index>b?(M=C,C=null):M=C.sibling;var P=h(d,C,E.value,S);if(P===null){C===null&&(C=M);break}n&&C&&P.alternate===null&&e(d,C),v=s(P,v,b),T===null?w=P:T.sibling=P,T=P,C=M}if(E.done)return t(d,C),mt&&cs(d,b),w;if(C===null){for(;!E.done;b++,E=x.next())E=f(d,E.value,S),E!==null&&(v=s(E,v,b),T===null?w=E:T.sibling=E,T=E);return mt&&cs(d,b),w}for(C=i(d,C);!E.done;b++,E=x.next())E=p(C,d,b,E.value,S),E!==null&&(n&&E.alternate!==null&&C.delete(E.key===null?b:E.key),v=s(E,v,b),T===null?w=E:T.sibling=E,T=E);return n&&C.forEach(function(U){return e(d,U)}),mt&&cs(d,b),w}function m(d,v,x,S){if(typeof x=="object"&&x!==null&&x.type===so&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ll:e:{for(var w=x.key,T=v;T!==null;){if(T.key===w){if(w=x.type,w===so){if(T.tag===7){t(d,T.sibling),v=r(T,x.props.children),v.return=d,d=v;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Mr&&Ug(w)===T.type){t(d,T.sibling),v=r(T,x.props),v.ref=ua(d,T,x),v.return=d,d=v;break e}t(d,T);break}else e(d,T);T=T.sibling}x.type===so?(v=Es(x.props.children,d.mode,S,x.key),v.return=d,d=v):(S=Lu(x.type,x.key,x.props,null,d.mode,S),S.ref=ua(d,v,x),S.return=d,d=S)}return o(d);case ro:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=Tf(x,d.mode,S),v.return=d,d=v}return o(d);case Mr:return T=x._init,m(d,v,T(x._payload),S)}if(Sa(x))return _(d,v,x,S);if(ra(x))return g(d,v,x,S);Gl(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=wf(x,d.mode,S),v.return=d,d=v),o(d)):t(d,v)}return m}var Io=Wv(!0),jv=Wv(!1),nc=Zr(null),ic=null,po=null,Vp=null;function Hp(){Vp=po=ic=null}function Gp(n){var e=nc.current;ht(nc),n._currentValue=e}function Wd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function wo(n,e){ic=n,Vp=po=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(vn=!0),n.firstContext=null)}function ai(n){var e=n._currentValue;if(Vp!==n)if(n={context:n,memoizedValue:e,next:null},po===null){if(ic===null)throw Error(ne(308));po=n,ic.dependencies={lanes:0,firstContext:n}}else po=po.next=n;return e}var vs=null;function Wp(n){vs===null?vs=[n]:vs.push(n)}function Xv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Wp(e)):(t.next=r.next,r.next=t),e.interleaved=t,rr(n,i)}function rr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Er=!1;function jp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $v(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Qi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,rr(n,t)}return r=i.interleaved,r===null?(e.next=e,Wp(i)):(e.next=r.next,r.next=e),i.interleaved=e,rr(n,t)}function Au(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Pp(n,t)}}function Fg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function rc(n,e,t,i){var r=n.updateQueue;Er=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(h=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=wt({},f,h);break e;case 2:Er=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ls|=o,n.lanes=o,n.memoizedState=f}}function Og(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var xl={},Ii=Zr(xl),Ka=Zr(xl),Za=Zr(xl);function xs(n){if(n===xl)throw Error(ne(174));return n}function Xp(n,e){switch(ct(Za,e),ct(Ka,n),ct(Ii,xl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=wd(e,n)}ht(Ii),ct(Ii,e)}function Uo(){ht(Ii),ht(Ka),ht(Za)}function Yv(n){xs(Za.current);var e=xs(Ii.current),t=wd(e,n.type);e!==t&&(ct(Ka,n),ct(Ii,t))}function $p(n){Ka.current===n&&(ht(Ii),ht(Ka))}var xt=Zr(0);function sc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vf=[];function Yp(){for(var n=0;n<vf.length;n++)vf[n]._workInProgressVersionPrimary=null;vf.length=0}var Cu=dr.ReactCurrentDispatcher,xf=dr.ReactCurrentBatchConfig,Ds=0,Mt=null,kt=null,Wt=null,oc=!1,La=!1,Qa=0,IM=0;function Zt(){throw Error(ne(321))}function qp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Mi(n[t],e[t]))return!1;return!0}function Kp(n,e,t,i,r,s){if(Ds=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cu.current=n===null||n.memoizedState===null?kM:zM,n=t(i,r),La){s=0;do{if(La=!1,Qa=0,25<=s)throw Error(ne(301));s+=1,Wt=kt=null,e.updateQueue=null,Cu.current=BM,n=t(i,r)}while(La)}if(Cu.current=ac,e=kt!==null&&kt.next!==null,Ds=0,Wt=kt=Mt=null,oc=!1,e)throw Error(ne(300));return n}function Zp(){var n=Qa!==0;return Qa=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Mt.memoizedState=Wt=n:Wt=Wt.next=n,Wt}function li(){if(kt===null){var n=Mt.alternate;n=n!==null?n.memoizedState:null}else n=kt.next;var e=Wt===null?Mt.memoizedState:Wt.next;if(e!==null)Wt=e,kt=n;else{if(n===null)throw Error(ne(310));kt=n,n={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Wt===null?Mt.memoizedState=Wt=n:Wt=Wt.next=n}return Wt}function Ja(n,e){return typeof e=="function"?e(n):e}function yf(n){var e=li(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=kt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ds&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Mt.lanes|=c,Ls|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Mi(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Mt.lanes|=s,Ls|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Sf(n){var e=li(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Mi(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function qv(){}function Kv(n,e){var t=Mt,i=li(),r=e(),s=!Mi(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,Qp(Jv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(t.flags|=2048,el(9,Qv.bind(null,t,i,r,e),void 0,null),jt===null)throw Error(ne(349));Ds&30||Zv(t,e,r)}return r}function Zv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Qv(n,e,t,i){e.value=t,e.getSnapshot=i,ex(e)&&tx(n)}function Jv(n,e,t){return t(function(){ex(e)&&tx(n)})}function ex(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Mi(n,t)}catch{return!0}}function tx(n){var e=rr(n,1);e!==null&&yi(e,n,1,-1)}function kg(n){var e=Ti();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:n},e.queue=n,n=n.dispatch=OM.bind(null,Mt,n),[e.memoizedState,n]}function el(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function nx(){return li().memoizedState}function Ru(n,e,t,i){var r=Ti();Mt.flags|=n,r.memoizedState=el(1|e,t,void 0,i===void 0?null:i)}function Ic(n,e,t,i){var r=li();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&qp(i,o.deps)){r.memoizedState=el(e,t,s,i);return}}Mt.flags|=n,r.memoizedState=el(1|e,t,s,i)}function zg(n,e){return Ru(8390656,8,n,e)}function Qp(n,e){return Ic(2048,8,n,e)}function ix(n,e){return Ic(4,2,n,e)}function rx(n,e){return Ic(4,4,n,e)}function sx(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ox(n,e,t){return t=t!=null?t.concat([n]):null,Ic(4,4,sx.bind(null,e,n),t)}function Jp(){}function ax(n,e){var t=li();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&qp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function lx(n,e){var t=li();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&qp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function ux(n,e,t){return Ds&21?(Mi(t,e)||(t=pv(),Mt.lanes|=t,Ls|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,vn=!0),n.memoizedState=t)}function UM(n,e){var t=nt;nt=t!==0&&4>t?t:4,n(!0);var i=xf.transition;xf.transition={};try{n(!1),e()}finally{nt=t,xf.transition=i}}function cx(){return li().memoizedState}function FM(n,e,t){var i=kr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},fx(n))dx(e,t);else if(t=Xv(n,e,t,i),t!==null){var r=cn();yi(t,n,i,r),hx(t,e,i)}}function OM(n,e,t){var i=kr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(fx(n))dx(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Mi(a,o)){var l=e.interleaved;l===null?(r.next=r,Wp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Xv(n,e,r,i),t!==null&&(r=cn(),yi(t,n,i,r),hx(t,e,i))}}function fx(n){var e=n.alternate;return n===Mt||e!==null&&e===Mt}function dx(n,e){La=oc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function hx(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Pp(n,t)}}var ac={readContext:ai,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},kM={readContext:ai,useCallback:function(n,e){return Ti().memoizedState=[n,e===void 0?null:e],n},useContext:ai,useEffect:zg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ru(4194308,4,sx.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ru(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ru(4,2,n,e)},useMemo:function(n,e){var t=Ti();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ti();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=FM.bind(null,Mt,n),[i.memoizedState,n]},useRef:function(n){var e=Ti();return n={current:n},e.memoizedState=n},useState:kg,useDebugValue:Jp,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=kg(!1),e=n[0];return n=UM.bind(null,n[1]),Ti().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Mt,r=Ti();if(mt){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),jt===null)throw Error(ne(349));Ds&30||Zv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,zg(Jv.bind(null,i,s,n),[n]),i.flags|=2048,el(9,Qv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ti(),e=jt.identifierPrefix;if(mt){var t=Zi,i=Ki;t=(i&~(1<<32-xi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Qa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=IM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},zM={readContext:ai,useCallback:ax,useContext:ai,useEffect:Qp,useImperativeHandle:ox,useInsertionEffect:ix,useLayoutEffect:rx,useMemo:lx,useReducer:yf,useRef:nx,useState:function(){return yf(Ja)},useDebugValue:Jp,useDeferredValue:function(n){var e=li();return ux(e,kt.memoizedState,n)},useTransition:function(){var n=yf(Ja)[0],e=li().memoizedState;return[n,e]},useMutableSource:qv,useSyncExternalStore:Kv,useId:cx,unstable_isNewReconciler:!1},BM={readContext:ai,useCallback:ax,useContext:ai,useEffect:Qp,useImperativeHandle:ox,useInsertionEffect:ix,useLayoutEffect:rx,useMemo:lx,useReducer:Sf,useRef:nx,useState:function(){return Sf(Ja)},useDebugValue:Jp,useDeferredValue:function(n){var e=li();return kt===null?e.memoizedState=n:ux(e,kt.memoizedState,n)},useTransition:function(){var n=Sf(Ja)[0],e=li().memoizedState;return[n,e]},useMutableSource:qv,useSyncExternalStore:Kv,useId:cx,unstable_isNewReconciler:!1};function hi(n,e){if(n&&n.defaultProps){e=wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function jd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Uc={isMounted:function(n){return(n=n._reactInternals)?Os(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=cn(),r=kr(n),s=Qi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Fr(n,s,r),e!==null&&(yi(e,n,r,i),Au(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=cn(),r=kr(n),s=Qi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Fr(n,s,r),e!==null&&(yi(e,n,r,i),Au(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=cn(),i=kr(n),r=Qi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Fr(n,r,i),e!==null&&(yi(e,n,i,t),Au(e,n,i))}};function Bg(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xa(t,i)||!Xa(r,s):!0}function px(n,e,t){var i=!1,r=jr,s=e.contextType;return typeof s=="object"&&s!==null?s=ai(s):(r=Sn(e)?bs:sn.current,i=e.contextTypes,s=(i=i!=null)?Lo(n,r):jr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Vg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Uc.enqueueReplaceState(e,e.state,null)}function Xd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},jp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ai(s):(s=Sn(e)?bs:sn.current,r.context=Lo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Uc.enqueueReplaceState(r,r.state,null),rc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Fo(n,e){try{var t="",i=e;do t+=p1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Mf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function $d(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var VM=typeof WeakMap=="function"?WeakMap:Map;function mx(n,e,t){t=Qi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){uc||(uc=!0,ih=i),$d(n,e)},t}function gx(n,e,t){t=Qi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){$d(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){$d(n,e),typeof i!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Hg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new VM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=tE.bind(null,n,e,t),e.then(n,n))}function Gg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Wg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Qi(-1,1),e.tag=2,Fr(t,e,1))),t.lanes|=1),n)}var HM=dr.ReactCurrentOwner,vn=!1;function ln(n,e,t,i){e.child=n===null?jv(e,null,t,i):Io(e,n.child,t,i)}function jg(n,e,t,i,r){t=t.render;var s=e.ref;return wo(e,r),i=Kp(n,e,t,i,s,r),t=Zp(),n!==null&&!vn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,sr(n,e,r)):(mt&&t&&kp(e),e.flags|=1,ln(n,e,i,r),e.child)}function Xg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!am(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,_x(n,e,s,i,r)):(n=Lu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Xa,t(o,i)&&n.ref===e.ref)return sr(n,e,r)}return e.flags|=1,n=zr(s,i),n.ref=e.ref,n.return=e,e.child=n}function _x(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Xa(s,i)&&n.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(vn=!0);else return e.lanes=n.lanes,sr(n,e,r)}return Yd(n,e,t,i,r)}function vx(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(go,In),In|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ct(go,In),In|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ct(go,In),In|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ct(go,In),In|=i;return ln(n,e,r,t),e.child}function xx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Yd(n,e,t,i,r){var s=Sn(t)?bs:sn.current;return s=Lo(e,s),wo(e,r),t=Kp(n,e,t,i,s,r),i=Zp(),n!==null&&!vn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,sr(n,e,r)):(mt&&i&&kp(e),e.flags|=1,ln(n,e,t,r),e.child)}function $g(n,e,t,i,r){if(Sn(t)){var s=!0;Ju(e)}else s=!1;if(wo(e,r),e.stateNode===null)bu(n,e),px(e,t,i),Xd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ai(u):(u=Sn(t)?bs:sn.current,u=Lo(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Vg(e,o,i,u),Er=!1;var h=e.memoizedState;o.state=h,rc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||yn.current||Er?(typeof c=="function"&&(jd(e,t,c,i),l=e.memoizedState),(a=Er||Bg(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,$v(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:hi(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ai(l):(l=Sn(t)?bs:sn.current,l=Lo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Vg(e,o,i,l),Er=!1,h=e.memoizedState,o.state=h,rc(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||yn.current||Er?(typeof p=="function"&&(jd(e,t,p,i),_=e.memoizedState),(u=Er||Bg(e,t,u,i,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return qd(n,e,t,i,s,r)}function qd(n,e,t,i,r,s){xx(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Lg(e,t,!1),sr(n,e,s);i=e.stateNode,HM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Io(e,n.child,null,s),e.child=Io(e,null,a,s)):ln(n,e,a,s),e.memoizedState=i.state,r&&Lg(e,t,!0),e.child}function yx(n){var e=n.stateNode;e.pendingContext?Dg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Dg(n,e.context,!1),Xp(n,e.containerInfo)}function Yg(n,e,t,i,r){return No(),Bp(r),e.flags|=256,ln(n,e,t,i),e.child}var Kd={dehydrated:null,treeContext:null,retryLane:0};function Zd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Sx(n,e,t){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ct(xt,r&1),n===null)return Gd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kc(o,i,0,null),n=Es(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Zd(t),e.memoizedState=Kd,n):em(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return GM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=zr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=zr(a,s):(s=Es(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Zd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Kd,i}return s=n.child,n=s.sibling,i=zr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function em(n,e){return e=kc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Wl(n,e,t,i){return i!==null&&Bp(i),Io(e,n.child,null,t),n=em(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function GM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Mf(Error(ne(422))),Wl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=kc({mode:"visible",children:i.children},r,0,null),s=Es(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Io(e,n.child,null,o),e.child.memoizedState=Zd(o),e.memoizedState=Kd,s);if(!(e.mode&1))return Wl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Mf(s,i,void 0),Wl(n,e,o,i)}if(a=(o&n.childLanes)!==0,vn||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,rr(n,r),yi(i,n,r,-1))}return om(),i=Mf(Error(ne(421))),Wl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=nE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,On=Ur(r.nextSibling),zn=e,mt=!0,mi=null,n!==null&&(Qn[Jn++]=Ki,Qn[Jn++]=Zi,Qn[Jn++]=Ps,Ki=n.id,Zi=n.overflow,Ps=e),e=em(e,i.children),e.flags|=4096,e)}function qg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Wd(n.return,e,t)}function Ef(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Mx(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(n,e,i.children,t),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qg(n,t,e);else if(n.tag===19)qg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ct(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&sc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Ef(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&sc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Ef(e,!0,t,null,s);break;case"together":Ef(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function sr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ls|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=zr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=zr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function WM(n,e,t){switch(e.tag){case 3:yx(e),No();break;case 5:Yv(e);break;case 1:Sn(e.type)&&Ju(e);break;case 4:Xp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(nc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(xt,xt.current&1),e.flags|=128,null):t&e.child.childLanes?Sx(n,e,t):(ct(xt,xt.current&1),n=sr(n,e,t),n!==null?n.sibling:null);ct(xt,xt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Mx(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,vx(n,e,t)}return sr(n,e,t)}var Ex,Qd,wx,Tx;Ex=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Qd=function(){};wx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,xs(Ii.current);var s=null;switch(t){case"input":r=yd(n,r),i=yd(n,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Ed(n,r),i=Ed(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Zu)}Td(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(za.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(za.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&dt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Tx=function(n,e,t,i){t!==i&&(e.flags|=4)};function ca(n,e){if(!mt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Qt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function jM(n,e,t){var i=e.pendingProps;switch(zp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Sn(e.type)&&Qu(),Qt(e),null;case 3:return i=e.stateNode,Uo(),ht(yn),ht(sn),Yp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Hl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mi!==null&&(oh(mi),mi=null))),Qd(n,e),Qt(e),null;case 5:$p(e);var r=xs(Za.current);if(t=e.type,n!==null&&e.stateNode!=null)wx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Qt(e),null}if(n=xs(Ii.current),Hl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ri]=e,i[qa]=s,n=(e.mode&1)!==0,t){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<Ea.length;r++)dt(Ea[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":rg(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":og(i,s),dt("invalid",i)}Td(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Vl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Vl(i.textContent,a,n),r=["children",""+a]):za.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(t){case"input":Nl(i),sg(i,s,!0);break;case"textarea":Nl(i),ag(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Zu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=J0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ri]=e,n[qa]=i,Ex(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ad(t,i),t){case"dialog":dt("cancel",n),dt("close",n),r=i;break;case"iframe":case"object":case"embed":dt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ea.length;r++)dt(Ea[r],n);r=i;break;case"source":dt("error",n),r=i;break;case"img":case"image":case"link":dt("error",n),dt("load",n),r=i;break;case"details":dt("toggle",n),r=i;break;case"input":rg(n,i),r=yd(n,i),dt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),dt("invalid",n);break;case"textarea":og(n,i),r=Ed(n,i),dt("invalid",n);break;default:r=i}Td(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?nv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ev(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ba(n,l):typeof l=="number"&&Ba(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(za.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",n):l!=null&&wp(n,s,l,o))}switch(t){case"input":Nl(n),sg(n,i,!1);break;case"textarea":Nl(n),ag(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Wr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?yo(n,!!i.multiple,s,!1):i.defaultValue!=null&&yo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Zu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(n&&e.stateNode!=null)Tx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=xs(Za.current),xs(Ii.current),Hl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ri]=e,(s=i.nodeValue!==t)&&(n=zn,n!==null))switch(n.tag){case 3:Vl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Vl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ri]=e,e.stateNode=i}return Qt(e),null;case 13:if(ht(xt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(mt&&On!==null&&e.mode&1&&!(e.flags&128))Gv(),No(),e.flags|=98560,s=!1;else if(s=Hl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Ri]=e}else No(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else mi!==null&&(oh(mi),mi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||xt.current&1?zt===0&&(zt=3):om())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return Uo(),Qd(n,e),n===null&&$a(e.stateNode.containerInfo),Qt(e),null;case 10:return Gp(e.type._context),Qt(e),null;case 17:return Sn(e.type)&&Qu(),Qt(e),null;case 19:if(ht(xt),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ca(s,!1);else{if(zt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=sc(n),o!==null){for(e.flags|=128,ca(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ct(xt,xt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Dt()>Oo&&(e.flags|=128,i=!0,ca(s,!1),e.lanes=4194304)}else{if(!i)if(n=sc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return Qt(e),null}else 2*Dt()-s.renderingStartTime>Oo&&t!==1073741824&&(e.flags|=128,i=!0,ca(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,t=xt.current,ct(xt,i?t&1|2:t&1),e):(Qt(e),null);case 22:case 23:return sm(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?In&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function XM(n,e){switch(zp(e),e.tag){case 1:return Sn(e.type)&&Qu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Uo(),ht(yn),ht(sn),Yp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return $p(e),null;case 13:if(ht(xt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));No()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ht(xt),null;case 4:return Uo(),null;case 10:return Gp(e.type._context),null;case 22:case 23:return sm(),null;case 24:return null;default:return null}}var jl=!1,tn=!1,$M=typeof WeakSet=="function"?WeakSet:Set,ve=null;function mo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){At(n,e,i)}else t.current=null}function Jd(n,e,t){try{t()}catch(i){At(n,e,i)}}var Kg=!1;function YM(n,e){if(Fd=Yu,n=Pv(),Op(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Od={focusedElem:n,selectionRange:t},Yu=!1,ve=e;ve!==null;)if(e=ve,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ve=n;else for(;ve!==null;){e=ve;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?g:hi(e.type,g),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){At(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}return _=Kg,Kg=!1,_}function Na(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Jd(e,t,s)}r=r.next}while(r!==i)}}function Fc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function eh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Ax(n){var e=n.alternate;e!==null&&(n.alternate=null,Ax(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ri],delete e[qa],delete e[Bd],delete e[PM],delete e[DM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Cx(n){return n.tag===5||n.tag===3||n.tag===4}function Zg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function th(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Zu));else if(i!==4&&(n=n.child,n!==null))for(th(n,e,t),n=n.sibling;n!==null;)th(n,e,t),n=n.sibling}function nh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(nh(n,e,t),n=n.sibling;n!==null;)nh(n,e,t),n=n.sibling}var $t=null,pi=!1;function mr(n,e,t){for(t=t.child;t!==null;)Rx(n,e,t),t=t.sibling}function Rx(n,e,t){if(Ni&&typeof Ni.onCommitFiberUnmount=="function")try{Ni.onCommitFiberUnmount(Rc,t)}catch{}switch(t.tag){case 5:tn||mo(t,e);case 6:var i=$t,r=pi;$t=null,mr(n,e,t),$t=i,pi=r,$t!==null&&(pi?(n=$t,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):$t.removeChild(t.stateNode));break;case 18:$t!==null&&(pi?(n=$t,t=t.stateNode,n.nodeType===8?gf(n.parentNode,t):n.nodeType===1&&gf(n,t),Wa(n)):gf($t,t.stateNode));break;case 4:i=$t,r=pi,$t=t.stateNode.containerInfo,pi=!0,mr(n,e,t),$t=i,pi=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jd(t,e,o),r=r.next}while(r!==i)}mr(n,e,t);break;case 1:if(!tn&&(mo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){At(t,e,a)}mr(n,e,t);break;case 21:mr(n,e,t);break;case 22:t.mode&1?(tn=(i=tn)||t.memoizedState!==null,mr(n,e,t),tn=i):mr(n,e,t);break;default:mr(n,e,t)}}function Qg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new $M),e.forEach(function(i){var r=iE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ui(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$t=a.stateNode,pi=!1;break e;case 3:$t=a.stateNode.containerInfo,pi=!0;break e;case 4:$t=a.stateNode.containerInfo,pi=!0;break e}a=a.return}if($t===null)throw Error(ne(160));Rx(s,o,r),$t=null,pi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){At(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bx(e,n),e=e.sibling}function bx(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ui(e,n),wi(n),i&4){try{Na(3,n,n.return),Fc(3,n)}catch(g){At(n,n.return,g)}try{Na(5,n,n.return)}catch(g){At(n,n.return,g)}}break;case 1:ui(e,n),wi(n),i&512&&t!==null&&mo(t,t.return);break;case 5:if(ui(e,n),wi(n),i&512&&t!==null&&mo(t,t.return),n.flags&32){var r=n.stateNode;try{Ba(r,"")}catch(g){At(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Z0(r,s),Ad(a,o);var u=Ad(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?nv(r,f):c==="dangerouslySetInnerHTML"?ev(r,f):c==="children"?Ba(r,f):wp(r,c,f,u)}switch(a){case"input":Sd(r,s);break;case"textarea":Q0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?yo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?yo(r,!!s.multiple,s.defaultValue,!0):yo(r,!!s.multiple,s.multiple?[]:"",!1))}r[qa]=s}catch(g){At(n,n.return,g)}}break;case 6:if(ui(e,n),wi(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){At(n,n.return,g)}}break;case 3:if(ui(e,n),wi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(g){At(n,n.return,g)}break;case 4:ui(e,n),wi(n);break;case 13:ui(e,n),wi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(im=Dt())),i&4&&Qg(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(tn=(u=tn)||c,ui(e,n),tn=u):ui(e,n),wi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(ve=n,c=n.child;c!==null;){for(f=ve=c;ve!==null;){switch(h=ve,p=h.child,h.tag){case 0:case 11:case 14:case 15:Na(4,h,h.return);break;case 1:mo(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){At(i,t,g)}}break;case 5:mo(h,h.return);break;case 22:if(h.memoizedState!==null){e_(f);continue}}p!==null?(p.return=h,ve=p):e_(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=tv("display",o))}catch(g){At(n,n.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){At(n,n.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ui(e,n),wi(n),i&4&&Qg(n);break;case 21:break;default:ui(e,n),wi(n)}}function wi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Cx(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ba(r,""),i.flags&=-33);var s=Zg(n);nh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Zg(n);th(n,a,o);break;default:throw Error(ne(161))}}catch(l){At(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function qM(n,e,t){ve=n,Px(n)}function Px(n,e,t){for(var i=(n.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||jl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=jl;var u=tn;if(jl=o,(tn=l)&&!u)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?t_(r):l!==null?(l.return=o,ve=l):t_(r);for(;s!==null;)ve=s,Px(s),s=s.sibling;ve=r,jl=a,tn=u}Jg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Jg(n)}}function Jg(n){for(;ve!==null;){var e=ve;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||Fc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:hi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Og(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Og(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Wa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}tn||e.flags&512&&eh(e)}catch(h){At(e,e.return,h)}}if(e===n){ve=null;break}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}}function e_(n){for(;ve!==null;){var e=ve;if(e===n){ve=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ve=t;break}ve=e.return}}function t_(n){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Fc(4,e)}catch(l){At(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{eh(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{eh(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===n){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var KM=Math.ceil,lc=dr.ReactCurrentDispatcher,tm=dr.ReactCurrentOwner,oi=dr.ReactCurrentBatchConfig,Ke=0,jt=null,Ut=null,Yt=0,In=0,go=Zr(0),zt=0,tl=null,Ls=0,Oc=0,nm=0,Ia=null,_n=null,im=0,Oo=1/0,ji=null,uc=!1,ih=null,Or=null,Xl=!1,Rr=null,cc=0,Ua=0,rh=null,Pu=-1,Du=0;function cn(){return Ke&6?Dt():Pu!==-1?Pu:Pu=Dt()}function kr(n){return n.mode&1?Ke&2&&Yt!==0?Yt&-Yt:NM.transition!==null?(Du===0&&(Du=pv()),Du):(n=nt,n!==0||(n=window.event,n=n===void 0?16:Sv(n.type)),n):1}function yi(n,e,t,i){if(50<Ua)throw Ua=0,rh=null,Error(ne(185));gl(n,t,i),(!(Ke&2)||n!==jt)&&(n===jt&&(!(Ke&2)&&(Oc|=t),zt===4&&Tr(n,Yt)),Mn(n,i),t===1&&Ke===0&&!(e.mode&1)&&(Oo=Dt()+500,Nc&&Qr()))}function Mn(n,e){var t=n.callbackNode;N1(n,e);var i=$u(n,n===jt?Yt:0);if(i===0)t!==null&&cg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&cg(t),e===1)n.tag===0?LM(n_.bind(null,n)):Bv(n_.bind(null,n)),RM(function(){!(Ke&6)&&Qr()}),t=null;else{switch(mv(i)){case 1:t=bp;break;case 4:t=dv;break;case 16:t=Xu;break;case 536870912:t=hv;break;default:t=Xu}t=kx(t,Dx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Dx(n,e){if(Pu=-1,Du=0,Ke&6)throw Error(ne(327));var t=n.callbackNode;if(To()&&n.callbackNode!==t)return null;var i=$u(n,n===jt?Yt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=fc(n,i);else{e=i;var r=Ke;Ke|=2;var s=Nx();(jt!==n||Yt!==e)&&(ji=null,Oo=Dt()+500,Ms(n,e));do try{JM();break}catch(a){Lx(n,a)}while(!0);Hp(),lc.current=s,Ke=r,Ut!==null?e=0:(jt=null,Yt=0,e=zt)}if(e!==0){if(e===2&&(r=Dd(n),r!==0&&(i=r,e=sh(n,r))),e===1)throw t=tl,Ms(n,0),Tr(n,i),Mn(n,Dt()),t;if(e===6)Tr(n,i);else{if(r=n.current.alternate,!(i&30)&&!ZM(r)&&(e=fc(n,i),e===2&&(s=Dd(n),s!==0&&(i=s,e=sh(n,s))),e===1))throw t=tl,Ms(n,0),Tr(n,i),Mn(n,Dt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:fs(n,_n,ji);break;case 3:if(Tr(n,i),(i&130023424)===i&&(e=im+500-Dt(),10<e)){if($u(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){cn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=zd(fs.bind(null,n,_n,ji),e);break}fs(n,_n,ji);break;case 4:if(Tr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-xi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*KM(i/1960))-i,10<i){n.timeoutHandle=zd(fs.bind(null,n,_n,ji),i);break}fs(n,_n,ji);break;case 5:fs(n,_n,ji);break;default:throw Error(ne(329))}}}return Mn(n,Dt()),n.callbackNode===t?Dx.bind(null,n):null}function sh(n,e){var t=Ia;return n.current.memoizedState.isDehydrated&&(Ms(n,e).flags|=256),n=fc(n,e),n!==2&&(e=_n,_n=t,e!==null&&oh(e)),n}function oh(n){_n===null?_n=n:_n.push.apply(_n,n)}function ZM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Mi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tr(n,e){for(e&=~nm,e&=~Oc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-xi(e),i=1<<t;n[t]=-1,e&=~i}}function n_(n){if(Ke&6)throw Error(ne(327));To();var e=$u(n,0);if(!(e&1))return Mn(n,Dt()),null;var t=fc(n,e);if(n.tag!==0&&t===2){var i=Dd(n);i!==0&&(e=i,t=sh(n,i))}if(t===1)throw t=tl,Ms(n,0),Tr(n,e),Mn(n,Dt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,fs(n,_n,ji),Mn(n,Dt()),null}function rm(n,e){var t=Ke;Ke|=1;try{return n(e)}finally{Ke=t,Ke===0&&(Oo=Dt()+500,Nc&&Qr())}}function Ns(n){Rr!==null&&Rr.tag===0&&!(Ke&6)&&To();var e=Ke;Ke|=1;var t=oi.transition,i=nt;try{if(oi.transition=null,nt=1,n)return n()}finally{nt=i,oi.transition=t,Ke=e,!(Ke&6)&&Qr()}}function sm(){In=go.current,ht(go)}function Ms(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,CM(t)),Ut!==null)for(t=Ut.return;t!==null;){var i=t;switch(zp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Qu();break;case 3:Uo(),ht(yn),ht(sn),Yp();break;case 5:$p(i);break;case 4:Uo();break;case 13:ht(xt);break;case 19:ht(xt);break;case 10:Gp(i.type._context);break;case 22:case 23:sm()}t=t.return}if(jt=n,Ut=n=zr(n.current,null),Yt=In=e,zt=0,tl=null,nm=Oc=Ls=0,_n=Ia=null,vs!==null){for(e=0;e<vs.length;e++)if(t=vs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}vs=null}return n}function Lx(n,e){do{var t=Ut;try{if(Hp(),Cu.current=ac,oc){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}oc=!1}if(Ds=0,Wt=kt=Mt=null,La=!1,Qa=0,tm.current=null,t===null||t.return===null){zt=1,tl=e,Ut=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Gg(o);if(p!==null){p.flags&=-257,Wg(p,o,a,s,e),p.mode&1&&Hg(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){Hg(s,u,e),om();break e}l=Error(ne(426))}}else if(mt&&a.mode&1){var m=Gg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Wg(m,o,a,s,e),Bp(Fo(l,a));break e}}s=l=Fo(l,a),zt!==4&&(zt=2),Ia===null?Ia=[s]:Ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=mx(s,l,e);Fg(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Or===null||!Or.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=gx(s,a,e);Fg(s,S);break e}}s=s.return}while(s!==null)}Ux(t)}catch(w){e=w,Ut===t&&t!==null&&(Ut=t=t.return);continue}break}while(!0)}function Nx(){var n=lc.current;return lc.current=ac,n===null?ac:n}function om(){(zt===0||zt===3||zt===2)&&(zt=4),jt===null||!(Ls&268435455)&&!(Oc&268435455)||Tr(jt,Yt)}function fc(n,e){var t=Ke;Ke|=2;var i=Nx();(jt!==n||Yt!==e)&&(ji=null,Ms(n,e));do try{QM();break}catch(r){Lx(n,r)}while(!0);if(Hp(),Ke=t,lc.current=i,Ut!==null)throw Error(ne(261));return jt=null,Yt=0,zt}function QM(){for(;Ut!==null;)Ix(Ut)}function JM(){for(;Ut!==null&&!w1();)Ix(Ut)}function Ix(n){var e=Ox(n.alternate,n,In);n.memoizedProps=n.pendingProps,e===null?Ux(n):Ut=e,tm.current=null}function Ux(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=XM(t,e),t!==null){t.flags&=32767,Ut=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{zt=6,Ut=null;return}}else if(t=jM(t,e,In),t!==null){Ut=t;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=n}while(e!==null);zt===0&&(zt=5)}function fs(n,e,t){var i=nt,r=oi.transition;try{oi.transition=null,nt=1,eE(n,e,t,i)}finally{oi.transition=r,nt=i}return null}function eE(n,e,t,i){do To();while(Rr!==null);if(Ke&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(I1(n,s),n===jt&&(Ut=jt=null,Yt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xl||(Xl=!0,kx(Xu,function(){return To(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=oi.transition,oi.transition=null;var o=nt;nt=1;var a=Ke;Ke|=4,tm.current=null,YM(n,t),bx(t,n),yM(Od),Yu=!!Fd,Od=Fd=null,n.current=t,qM(t),T1(),Ke=a,nt=o,oi.transition=s}else n.current=t;if(Xl&&(Xl=!1,Rr=n,cc=r),s=n.pendingLanes,s===0&&(Or=null),R1(t.stateNode),Mn(n,Dt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(uc)throw uc=!1,n=ih,ih=null,n;return cc&1&&n.tag!==0&&To(),s=n.pendingLanes,s&1?n===rh?Ua++:(Ua=0,rh=n):Ua=0,Qr(),null}function To(){if(Rr!==null){var n=mv(cc),e=oi.transition,t=nt;try{if(oi.transition=null,nt=16>n?16:n,Rr===null)var i=!1;else{if(n=Rr,Rr=null,cc=0,Ke&6)throw Error(ne(331));var r=Ke;for(Ke|=4,ve=n.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ve=u;ve!==null;){var c=ve;switch(c.tag){case 0:case 11:case 15:Na(8,c,s)}var f=c.child;if(f!==null)f.return=c,ve=f;else for(;ve!==null;){c=ve;var h=c.sibling,p=c.return;if(Ax(c),c===u){ve=null;break}if(h!==null){h.return=p,ve=h;break}ve=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ve=d;break e}ve=s.return}}var v=n.current;for(ve=v;ve!==null;){o=ve;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ve=x;else e:for(o=v;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fc(9,a)}}catch(w){At(a,a.return,w)}if(a===o){ve=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ve=S;break e}ve=a.return}}if(Ke=r,Qr(),Ni&&typeof Ni.onPostCommitFiberRoot=="function")try{Ni.onPostCommitFiberRoot(Rc,n)}catch{}i=!0}return i}finally{nt=t,oi.transition=e}}return!1}function i_(n,e,t){e=Fo(t,e),e=mx(n,e,1),n=Fr(n,e,1),e=cn(),n!==null&&(gl(n,1,e),Mn(n,e))}function At(n,e,t){if(n.tag===3)i_(n,n,t);else for(;e!==null;){if(e.tag===3){i_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Or===null||!Or.has(i))){n=Fo(t,n),n=gx(e,n,1),e=Fr(e,n,1),n=cn(),e!==null&&(gl(e,1,n),Mn(e,n));break}}e=e.return}}function tE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=cn(),n.pingedLanes|=n.suspendedLanes&t,jt===n&&(Yt&t)===t&&(zt===4||zt===3&&(Yt&130023424)===Yt&&500>Dt()-im?Ms(n,0):nm|=t),Mn(n,e)}function Fx(n,e){e===0&&(n.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var t=cn();n=rr(n,e),n!==null&&(gl(n,e,t),Mn(n,t))}function nE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Fx(n,t)}function iE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Fx(n,t)}var Ox;Ox=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||yn.current)vn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return vn=!1,WM(n,e,t);vn=!!(n.flags&131072)}else vn=!1,mt&&e.flags&1048576&&Vv(e,tc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;bu(n,e),n=e.pendingProps;var r=Lo(e,sn.current);wo(e,t),r=Kp(null,e,i,n,r,t);var s=Zp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,Ju(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jp(e),r.updater=Uc,e.stateNode=r,r._reactInternals=e,Xd(e,i,n,t),e=qd(null,e,i,!0,s,t)):(e.tag=0,mt&&s&&kp(e),ln(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(bu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sE(i),n=hi(i,n),r){case 0:e=Yd(null,e,i,n,t);break e;case 1:e=$g(null,e,i,n,t);break e;case 11:e=jg(null,e,i,n,t);break e;case 14:e=Xg(null,e,i,hi(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),Yd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),$g(n,e,i,r,t);case 3:e:{if(yx(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,$v(n,e),rc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fo(Error(ne(423)),e),e=Yg(n,e,i,t,r);break e}else if(i!==r){r=Fo(Error(ne(424)),e),e=Yg(n,e,i,t,r);break e}else for(On=Ur(e.stateNode.containerInfo.firstChild),zn=e,mt=!0,mi=null,t=jv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(No(),i===r){e=sr(n,e,t);break e}ln(n,e,i,t)}e=e.child}return e;case 5:return Yv(e),n===null&&Gd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,kd(i,r)?o=null:s!==null&&kd(i,s)&&(e.flags|=32),xx(n,e),ln(n,e,o,t),e.child;case 6:return n===null&&Gd(e),null;case 13:return Sx(n,e,t);case 4:return Xp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Io(e,null,i,t):ln(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),jg(n,e,i,r,t);case 7:return ln(n,e,e.pendingProps,t),e.child;case 8:return ln(n,e,e.pendingProps.children,t),e.child;case 12:return ln(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ct(nc,i._currentValue),i._currentValue=o,s!==null)if(Mi(s.value,o)){if(s.children===r.children&&!yn.current){e=sr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Qi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Wd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Wd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,wo(e,t),r=ai(r),i=i(r),e.flags|=1,ln(n,e,i,t),e.child;case 14:return i=e.type,r=hi(i,e.pendingProps),r=hi(i.type,r),Xg(n,e,i,r,t);case 15:return _x(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),bu(n,e),e.tag=1,Sn(i)?(n=!0,Ju(e)):n=!1,wo(e,t),px(e,i,r),Xd(e,i,r,t),qd(null,e,i,!0,n,t);case 19:return Mx(n,e,t);case 22:return vx(n,e,t)}throw Error(ne(156,e.tag))};function kx(n,e){return fv(n,e)}function rE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,e,t,i){return new rE(n,e,t,i)}function am(n){return n=n.prototype,!(!n||!n.isReactComponent)}function sE(n){if(typeof n=="function")return am(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ap)return 11;if(n===Cp)return 14}return 2}function zr(n,e){var t=n.alternate;return t===null?(t=ei(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Lu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")am(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case so:return Es(t.children,r,s,e);case Tp:o=8,r|=8;break;case gd:return n=ei(12,t,e,r|2),n.elementType=gd,n.lanes=s,n;case _d:return n=ei(13,t,e,r),n.elementType=_d,n.lanes=s,n;case vd:return n=ei(19,t,e,r),n.elementType=vd,n.lanes=s,n;case Y0:return kc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case X0:o=10;break e;case $0:o=9;break e;case Ap:o=11;break e;case Cp:o=14;break e;case Mr:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=ei(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Es(n,e,t,i){return n=ei(7,n,i,e),n.lanes=t,n}function kc(n,e,t,i){return n=ei(22,n,i,e),n.elementType=Y0,n.lanes=t,n.stateNode={isHidden:!1},n}function wf(n,e,t){return n=ei(6,n,null,e),n.lanes=t,n}function Tf(n,e,t){return e=ei(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function oE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sf(0),this.expirationTimes=sf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function lm(n,e,t,i,r,s,o,a,l){return n=new oE(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ei(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},jp(s),n}function aE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ro,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function zx(n){if(!n)return jr;n=n._reactInternals;e:{if(Os(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(Sn(t))return zv(n,t,e)}return e}function Bx(n,e,t,i,r,s,o,a,l){return n=lm(t,i,!0,n,r,s,o,a,l),n.context=zx(null),t=n.current,i=cn(),r=kr(t),s=Qi(i,r),s.callback=e??null,Fr(t,s,r),n.current.lanes=r,gl(n,r,i),Mn(n,i),n}function zc(n,e,t,i){var r=e.current,s=cn(),o=kr(r);return t=zx(t),e.context===null?e.context=t:e.pendingContext=t,e=Qi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Fr(r,e,o),n!==null&&(yi(n,r,o,s),Au(n,r,o)),o}function dc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function r_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function um(n,e){r_(n,e),(n=n.alternate)&&r_(n,e)}function lE(){return null}var Vx=typeof reportError=="function"?reportError:function(n){console.error(n)};function cm(n){this._internalRoot=n}Bc.prototype.render=cm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));zc(n,e,null,null)};Bc.prototype.unmount=cm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ns(function(){zc(null,n,null,null)}),e[ir]=null}};function Bc(n){this._internalRoot=n}Bc.prototype.unstable_scheduleHydration=function(n){if(n){var e=vv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<wr.length&&e!==0&&e<wr[t].priority;t++);wr.splice(t,0,n),t===0&&yv(n)}};function fm(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Vc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function s_(){}function uE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=dc(o);s.call(u)}}var o=Bx(e,i,n,0,null,!1,!1,"",s_);return n._reactRootContainer=o,n[ir]=o.current,$a(n.nodeType===8?n.parentNode:n),Ns(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=dc(l);a.call(u)}}var l=lm(n,0,!1,null,null,!1,!1,"",s_);return n._reactRootContainer=l,n[ir]=l.current,$a(n.nodeType===8?n.parentNode:n),Ns(function(){zc(e,l,t,i)}),l}function Hc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=dc(o);a.call(l)}}zc(e,o,n,r)}else o=uE(t,e,n,r,i);return dc(o)}gv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ma(e.pendingLanes);t!==0&&(Pp(e,t|1),Mn(e,Dt()),!(Ke&6)&&(Oo=Dt()+500,Qr()))}break;case 13:Ns(function(){var i=rr(n,1);if(i!==null){var r=cn();yi(i,n,1,r)}}),um(n,1)}};Dp=function(n){if(n.tag===13){var e=rr(n,134217728);if(e!==null){var t=cn();yi(e,n,134217728,t)}um(n,134217728)}};_v=function(n){if(n.tag===13){var e=kr(n),t=rr(n,e);if(t!==null){var i=cn();yi(t,n,e,i)}um(n,e)}};vv=function(){return nt};xv=function(n,e){var t=nt;try{return nt=n,e()}finally{nt=t}};Rd=function(n,e,t){switch(e){case"input":if(Sd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Lc(i);if(!r)throw Error(ne(90));K0(i),Sd(i,r)}}}break;case"textarea":Q0(n,t);break;case"select":e=t.value,e!=null&&yo(n,!!t.multiple,e,!1)}};sv=rm;ov=Ns;var cE={usingClientEntryPoint:!1,Events:[vl,uo,Lc,iv,rv,rm]},fa={findFiberByHostInstance:_s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fE={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=uv(n),n===null?null:n.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||lE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Rc=$l.inject(fE),Ni=$l}catch{}}jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cE;jn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fm(e))throw Error(ne(200));return aE(n,e,null,t)};jn.createRoot=function(n,e){if(!fm(n))throw Error(ne(299));var t=!1,i="",r=Vx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=lm(n,1,!1,null,null,t,!1,i,r),n[ir]=e.current,$a(n.nodeType===8?n.parentNode:n),new cm(e)};jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=uv(e),n=n===null?null:n.stateNode,n};jn.flushSync=function(n){return Ns(n)};jn.hydrate=function(n,e,t){if(!Vc(e))throw Error(ne(200));return Hc(null,n,e,!0,t)};jn.hydrateRoot=function(n,e,t){if(!fm(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Vx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Bx(e,null,n,1,t??null,r,!1,s,o),n[ir]=e.current,$a(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Bc(e)};jn.render=function(n,e,t){if(!Vc(e))throw Error(ne(200));return Hc(null,n,e,!1,t)};jn.unmountComponentAtNode=function(n){if(!Vc(n))throw Error(ne(40));return n._reactRootContainer?(Ns(function(){Hc(null,null,n,!1,function(){n._reactRootContainer=null,n[ir]=null})}),!0):!1};jn.unstable_batchedUpdates=rm;jn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Vc(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return Hc(n,e,t,!1,i)};jn.version="18.3.1-next-f1338f8080-20240426";function Hx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hx)}catch(n){console.error(n)}}Hx(),H0.exports=jn;var dE=H0.exports,Gx,o_=dE;Gx=o_.createRoot,o_.hydrateRoot;/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var a_="popstate";function hE(n={}){function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return ah("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:nl(r)}return mE(e,t,null,n)}function Et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Ui(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pE(){return Math.random().toString(36).substring(2,10)}function l_(n,e){return{usr:n.state,key:n.key,idx:e}}function ah(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Qo(e):e,state:t,key:e&&e.key||i||pE()}}function nl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Qo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function mE(n,e,t,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a="POP",l=null,u=c();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function c(){return(o.state||{idx:null}).idx}function f(){a="POP";let m=c(),d=m==null?null:m-u;u=m,l&&l({action:a,location:g.location,delta:d})}function h(m,d){a="PUSH";let v=ah(g.location,m,d);u=c()+1;let x=l_(v,u),S=g.createHref(v);try{o.pushState(x,"",S)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;r.location.assign(S)}s&&l&&l({action:a,location:g.location,delta:1})}function p(m,d){a="REPLACE";let v=ah(g.location,m,d);u=c();let x=l_(v,u),S=g.createHref(v);o.replaceState(x,"",S),s&&l&&l({action:a,location:g.location,delta:0})}function _(m){return gE(m)}let g={get action(){return a},get location(){return n(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(a_,f),l=m,()=>{r.removeEventListener(a_,f),l=null}},createHref(m){return e(r,m)},createURL:_,encodeLocation(m){let d=_(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:p,go(m){return o.go(m)}};return g}function gE(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Et(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:nl(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function Wx(n,e,t="/"){return _E(n,e,t,!1)}function _E(n,e,t,i){let r=typeof e=="string"?Qo(e):e,s=or(r.pathname||"/",t);if(s==null)return null;let o=jx(n);vE(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=bE(s);a=CE(o[l],u,i)}return a}function jx(n,e=[],t=[],i="",r=!1){let s=(o,a,l=r,u)=>{let c={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(i)&&l)return;Et(c.relativePath.startsWith(i),`Absolute route path "${c.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(i.length)}let f=Ji([i,c.relativePath]),h=t.concat(c);o.children&&o.children.length>0&&(Et(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),jx(o.children,e,h,f,l)),!(o.path==null&&!o.index)&&e.push({path:f,score:TE(f,o.index),routesMeta:h})};return n.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let u of Xx(o.path))s(o,a,!0,u)}),e}function Xx(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Xx(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>n.startsWith("/")&&l===""?"/":l)}function vE(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:AE(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var xE=/^:[\w-]+$/,yE=3,SE=2,ME=1,EE=10,wE=-2,u_=n=>n==="*";function TE(n,e){let t=n.split("/"),i=t.length;return t.some(u_)&&(i+=wE),e&&(i+=SE),t.filter(r=>!u_(r)).reduce((r,s)=>r+(xE.test(s)?yE:s===""?ME:EE),i)}function AE(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function CE(n,e,t=!1){let{routesMeta:i}=n,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",f=hc({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!f&&u&&t&&!i[i.length-1].route.index&&(f=hc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Ji([s,f.pathname]),pathnameBase:NE(Ji([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Ji([s,f.pathnameBase]))}return o}function hc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=RE(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,{paramName:c,isOptional:f},h)=>{if(c==="*"){let _=a[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const p=a[h];return f&&!p?u[c]=void 0:u[c]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:n}}function RE(n,e=!1,t=!0){Ui(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function bE(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ui(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function or(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function PE(n,e="/"){let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?Qo(n):n;return{pathname:t?t.startsWith("/")?t:DE(t,e):e,search:IE(i),hash:UE(r)}}function DE(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Af(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function LE(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function $x(n){let e=LE(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Yx(n,e,t,i=!1){let r;typeof n=="string"?r=Qo(n):(r={...n},Et(!r.pathname||!r.pathname.includes("?"),Af("?","pathname","search",r)),Et(!r.pathname||!r.pathname.includes("#"),Af("#","pathname","hash",r)),Et(!r.search||!r.search.includes("#"),Af("#","search","hash",r)));let s=n===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=t;else{let f=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=PE(r,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var Ji=n=>n.join("/").replace(/\/\/+/g,"/"),NE=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),IE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,UE=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function FE(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var qx=["POST","PUT","PATCH","DELETE"];new Set(qx);var OE=["GET",...qx];new Set(OE);var Jo=B.createContext(null);Jo.displayName="DataRouter";var Gc=B.createContext(null);Gc.displayName="DataRouterState";B.createContext(!1);var Kx=B.createContext({isTransitioning:!1});Kx.displayName="ViewTransition";var kE=B.createContext(new Map);kE.displayName="Fetchers";var zE=B.createContext(null);zE.displayName="Await";var Oi=B.createContext(null);Oi.displayName="Navigation";var yl=B.createContext(null);yl.displayName="Location";var hr=B.createContext({outlet:null,matches:[],isDataRoute:!1});hr.displayName="Route";var dm=B.createContext(null);dm.displayName="RouteError";function BE(n,{relative:e}={}){Et(Sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=B.useContext(Oi),{hash:r,pathname:s,search:o}=Ml(n,{relative:e}),a=s;return t!=="/"&&(a=s==="/"?t:Ji([t,s])),i.createHref({pathname:a,search:o,hash:r})}function Sl(){return B.useContext(yl)!=null}function ks(){return Et(Sl(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(yl).location}var Zx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qx(n){B.useContext(Oi).static||B.useLayoutEffect(n)}function VE(){let{isDataRoute:n}=B.useContext(hr);return n?ew():HE()}function HE(){Et(Sl(),"useNavigate() may be used only in the context of a <Router> component.");let n=B.useContext(Jo),{basename:e,navigator:t}=B.useContext(Oi),{matches:i}=B.useContext(hr),{pathname:r}=ks(),s=JSON.stringify($x(i)),o=B.useRef(!1);return Qx(()=>{o.current=!0}),B.useCallback((l,u={})=>{if(Ui(o.current,Zx),!o.current)return;if(typeof l=="number"){t.go(l);return}let c=Yx(l,JSON.parse(s),r,u.relative==="path");n==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ji([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,s,r,n])}B.createContext(null);function Ml(n,{relative:e}={}){let{matches:t}=B.useContext(hr),{pathname:i}=ks(),r=JSON.stringify($x(t));return B.useMemo(()=>Yx(n,JSON.parse(r),i,e==="path"),[n,r,i,e])}function GE(n,e){return Jx(n,e)}function Jx(n,e,t,i,r){var v;Et(Sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=B.useContext(Oi),{matches:o}=B.useContext(hr),a=o[o.length-1],l=a?a.params:{},u=a?a.pathname:"/",c=a?a.pathnameBase:"/",f=a&&a.route;{let x=f&&f.path||"";ey(u,!f||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let h=ks(),p;if(e){let x=typeof e=="string"?Qo(e):e;Et(c==="/"||((v=x.pathname)==null?void 0:v.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${x.pathname}" was given in the \`location\` prop.`),p=x}else p=h;let _=p.pathname||"/",g=_;if(c!=="/"){let x=c.replace(/^\//,"").split("/");g="/"+_.replace(/^\//,"").split("/").slice(x.length).join("/")}let m=Wx(n,{pathname:g});Ui(f||m!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),Ui(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let d=YE(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:Ji([c,s.encodeLocation?s.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:Ji([c,s.encodeLocation?s.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,t,i,r);return e&&d?B.createElement(yl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},d):d}function WE(){let n=JE(),e=FE(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},o=null;return console.error("Error handled by React Router default ErrorBoundary:",n),o=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:s},"ErrorBoundary")," or"," ",B.createElement("code",{style:s},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),t?B.createElement("pre",{style:r},t):null,o)}var jE=B.createElement(WE,null),XE=class extends B.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.unstable_onError?this.props.unstable_onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?B.createElement(hr.Provider,{value:this.props.routeContext},B.createElement(dm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $E({routeContext:n,match:e,children:t}){let i=B.useContext(Jo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),B.createElement(hr.Provider,{value:n},t)}function YE(n,e=[],t=null,i=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let s=n,o=t==null?void 0:t.errors;if(o!=null){let u=s.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id])!==void 0);Et(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,u+1))}let a=!1,l=-1;if(t)for(let u=0;u<s.length;u++){let c=s[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(l=u),c.route.id){let{loaderData:f,errors:h}=t,p=c.route.loader&&!f.hasOwnProperty(c.route.id)&&(!h||h[c.route.id]===void 0);if(c.route.lazy||p){a=!0,l>=0?s=s.slice(0,l+1):s=[s[0]];break}}}return s.reduceRight((u,c,f)=>{let h,p=!1,_=null,g=null;t&&(h=o&&c.route.id?o[c.route.id]:void 0,_=c.route.errorElement||jE,a&&(l<0&&f===0?(ey("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,g=null):l===f&&(p=!0,g=c.route.hydrateFallbackElement||null)));let m=e.concat(s.slice(0,f+1)),d=()=>{let v;return h?v=_:p?v=g:c.route.Component?v=B.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=u,B.createElement($E,{match:c,routeContext:{outlet:u,matches:m,isDataRoute:t!=null},children:v})};return t&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?B.createElement(XE,{location:t.location,revalidation:t.revalidation,component:_,error:h,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0},unstable_onError:i}):d()},null)}function hm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qE(n){let e=B.useContext(Jo);return Et(e,hm(n)),e}function KE(n){let e=B.useContext(Gc);return Et(e,hm(n)),e}function ZE(n){let e=B.useContext(hr);return Et(e,hm(n)),e}function pm(n){let e=ZE(n),t=e.matches[e.matches.length-1];return Et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function QE(){return pm("useRouteId")}function JE(){var i;let n=B.useContext(dm),e=KE("useRouteError"),t=pm("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function ew(){let{router:n}=qE("useNavigate"),e=pm("useNavigate"),t=B.useRef(!1);return Qx(()=>{t.current=!0}),B.useCallback(async(r,s={})=>{Ui(t.current,Zx),t.current&&(typeof r=="number"?n.navigate(r):await n.navigate(r,{fromRouteId:e,...s}))},[n,e])}var c_={};function ey(n,e,t){!e&&!c_[n]&&(c_[n]=!0,Ui(!1,t))}B.memo(tw);function tw({routes:n,future:e,state:t,unstable_onError:i}){return Jx(n,void 0,t,i,e)}function lh(n){Et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nw({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:r,static:s=!1}){Et(!Sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=n.replace(/^\/*/,"/"),a=B.useMemo(()=>({basename:o,navigator:r,static:s,future:{}}),[o,r,s]);typeof t=="string"&&(t=Qo(t));let{pathname:l="/",search:u="",hash:c="",state:f=null,key:h="default"}=t,p=B.useMemo(()=>{let _=or(l,o);return _==null?null:{location:{pathname:_,search:u,hash:c,state:f,key:h},navigationType:i}},[o,l,u,c,f,h,i]);return Ui(p!=null,`<Router basename="${o}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:B.createElement(Oi.Provider,{value:a},B.createElement(yl.Provider,{children:e,value:p}))}function iw({children:n,location:e}){return GE(uh(n),e)}function uh(n,e=[]){let t=[];return B.Children.forEach(n,(i,r)=>{if(!B.isValidElement(i))return;let s=[...e,r];if(i.type===B.Fragment){t.push.apply(t,uh(i.props.children,s));return}Et(i.type===lh,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Et(!i.props.index||!i.props.children,"An index route cannot have child routes.");let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=uh(i.props.children,s)),t.push(o)}),t}var Nu="get",Iu="application/x-www-form-urlencoded";function Wc(n){return n!=null&&typeof n.tagName=="string"}function rw(n){return Wc(n)&&n.tagName.toLowerCase()==="button"}function sw(n){return Wc(n)&&n.tagName.toLowerCase()==="form"}function ow(n){return Wc(n)&&n.tagName.toLowerCase()==="input"}function aw(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function lw(n,e){return n.button===0&&(!e||e==="_self")&&!aw(n)}var Yl=null;function uw(){if(Yl===null)try{new FormData(document.createElement("form"),0),Yl=!1}catch{Yl=!0}return Yl}var cw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cf(n){return n!=null&&!cw.has(n)?(Ui(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Iu}"`),null):n}function fw(n,e){let t,i,r,s,o;if(sw(n)){let a=n.getAttribute("action");i=a?or(a,e):null,t=n.getAttribute("method")||Nu,r=Cf(n.getAttribute("enctype"))||Iu,s=new FormData(n)}else if(rw(n)||ow(n)&&(n.type==="submit"||n.type==="image")){let a=n.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=n.getAttribute("formaction")||a.getAttribute("action");if(i=l?or(l,e):null,t=n.getAttribute("formmethod")||a.getAttribute("method")||Nu,r=Cf(n.getAttribute("formenctype"))||Cf(a.getAttribute("enctype"))||Iu,s=new FormData(a,n),!uw()){let{name:u,type:c,value:f}=n;if(c==="image"){let h=u?`${u}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else u&&s.append(u,f)}}else{if(Wc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Nu,i=null,r=Iu,o=n}return s&&r==="text/plain"&&(o=s,s=void 0),{action:i,method:t.toLowerCase(),encType:r,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mm(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function dw(n,e,t){let i=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i.pathname==="/"?i.pathname=`_root.${t}`:e&&or(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${t}`,i}async function hw(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pw(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function mw(n,e,t){let i=await Promise.all(n.map(async r=>{let s=e.routes[r.route.id];if(s){let o=await hw(s,t);return o.links?o.links():[]}return[]}));return xw(i.flat(1).filter(pw).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function f_(n,e,t,i,r,s){let o=(l,u)=>t[u]?l.route.id!==t[u].route.id:!0,a=(l,u)=>{var c;return t[u].pathname!==l.pathname||((c=t[u].route.path)==null?void 0:c.endsWith("*"))&&t[u].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,u)=>o(l,u)||a(l,u)):s==="data"?e.filter((l,u)=>{var f;let c=i.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(o(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=t[0])==null?void 0:f.params)||{},nextUrl:new URL(n,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function gw(n,e,{includeHydrateFallback:t}={}){return _w(n.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),t&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function _w(n){return[...new Set(n)]}function vw(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function xw(n,e){let t=new Set;return new Set(e),n.reduce((i,r)=>{let s=JSON.stringify(vw(r));return t.has(s)||(t.add(s),i.push({key:s,link:r})),i},[])}function ty(){let n=B.useContext(Jo);return mm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function yw(){let n=B.useContext(Gc);return mm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var gm=B.createContext(void 0);gm.displayName="FrameworkContext";function ny(){let n=B.useContext(gm);return mm(n,"You must render this element inside a <HydratedRouter> element"),n}function Sw(n,e){let t=B.useContext(gm),[i,r]=B.useState(!1),[s,o]=B.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:f}=e,h=B.useRef(null);B.useEffect(()=>{if(n==="render"&&o(!0),n==="viewport"){let g=d=>{d.forEach(v=>{o(v.isIntersecting)})},m=new IntersectionObserver(g,{threshold:.5});return h.current&&m.observe(h.current),()=>{m.disconnect()}}},[n]),B.useEffect(()=>{if(i){let g=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(g)}}},[i]);let p=()=>{r(!0)},_=()=>{r(!1),o(!1)};return t?n!=="intent"?[s,h,{}]:[s,h,{onFocus:da(a,p),onBlur:da(l,_),onMouseEnter:da(u,p),onMouseLeave:da(c,_),onTouchStart:da(f,p)}]:[!1,h,{}]}function da(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function Mw({page:n,...e}){let{router:t}=ty(),i=B.useMemo(()=>Wx(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?B.createElement(ww,{page:n,matches:i,...e}):null}function Ew(n){let{manifest:e,routeModules:t}=ny(),[i,r]=B.useState([]);return B.useEffect(()=>{let s=!1;return mw(n,e,t).then(o=>{s||r(o)}),()=>{s=!0}},[n,e,t]),i}function ww({page:n,matches:e,...t}){let i=ks(),{manifest:r,routeModules:s}=ny(),{basename:o}=ty(),{loaderData:a,matches:l}=yw(),u=B.useMemo(()=>f_(n,e,l,r,i,"data"),[n,e,l,r,i]),c=B.useMemo(()=>f_(n,e,l,r,i,"assets"),[n,e,l,r,i]),f=B.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let _=new Set,g=!1;if(e.forEach(d=>{var x;let v=r.routes[d.route.id];!v||!v.hasLoader||(!u.some(S=>S.route.id===d.route.id)&&d.route.id in a&&((x=s[d.route.id])!=null&&x.shouldRevalidate)||v.hasClientLoader?g=!0:_.add(d.route.id))}),_.size===0)return[];let m=dw(n,o,"data");return g&&_.size>0&&m.searchParams.set("_routes",e.filter(d=>_.has(d.route.id)).map(d=>d.route.id).join(",")),[m.pathname+m.search]},[o,a,i,r,u,e,n,s]),h=B.useMemo(()=>gw(c,r),[c,r]),p=Ew(c);return B.createElement(B.Fragment,null,f.map(_=>B.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...t})),h.map(_=>B.createElement("link",{key:_,rel:"modulepreload",href:_,...t})),p.map(({key:_,link:g})=>B.createElement("link",{key:_,nonce:t.nonce,...g})))}function Tw(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var iy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{iy&&(window.__reactRouterVersion="7.9.1")}catch{}function Aw({basename:n,children:e,window:t}){let i=B.useRef();i.current==null&&(i.current=hE({window:t,v5Compat:!0}));let r=i.current,[s,o]=B.useState({action:r.action,location:r.location}),a=B.useCallback(l=>{B.startTransition(()=>o(l))},[o]);return B.useLayoutEffect(()=>r.listen(a),[r,a]),B.createElement(nw,{basename:n,children:e,location:s.location,navigationType:s.action,navigator:r})}var ry=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_m=B.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:r,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,viewTransition:f,...h},p){let{basename:_}=B.useContext(Oi),g=typeof u=="string"&&ry.test(u),m,d=!1;if(typeof u=="string"&&g&&(m=u,iy))try{let M=new URL(window.location.href),E=u.startsWith("//")?new URL(M.protocol+u):new URL(u),P=or(E.pathname,_);E.origin===M.origin&&P!=null?u=P+E.search+E.hash:d=!0}catch{Ui(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=BE(u,{relative:r}),[x,S,w]=Sw(i,h),T=Pw(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:r,viewTransition:f});function C(M){e&&e(M),M.defaultPrevented||T(M)}let b=B.createElement("a",{...h,...w,href:m||v,onClick:d||s?e:C,ref:Tw(p,S),target:l,"data-discover":!g&&t==="render"?"true":void 0});return x&&!g?B.createElement(B.Fragment,null,b,B.createElement(Mw,{page:v})):b});_m.displayName="Link";var Cw=B.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:r=!1,style:s,to:o,viewTransition:a,children:l,...u},c){let f=Ml(o,{relative:u.relative}),h=ks(),p=B.useContext(Gc),{navigator:_,basename:g}=B.useContext(Oi),m=p!=null&&Uw(f)&&a===!0,d=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,v=h.pathname,x=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;t||(v=v.toLowerCase(),x=x?x.toLowerCase():null,d=d.toLowerCase()),x&&g&&(x=or(x,g)||x);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let w=v===d||!r&&v.startsWith(d)&&v.charAt(S)==="/",T=x!=null&&(x===d||!r&&x.startsWith(d)&&x.charAt(d.length)==="/"),C={isActive:w,isPending:T,isTransitioning:m},b=w?e:void 0,M;typeof i=="function"?M=i(C):M=[i,w?"active":null,T?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let E=typeof s=="function"?s(C):s;return B.createElement(_m,{...u,"aria-current":b,className:M,ref:c,style:E,to:o,viewTransition:a},typeof l=="function"?l(C):l)});Cw.displayName="NavLink";var Rw=B.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:r,state:s,method:o=Nu,action:a,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:f,...h},p)=>{let _=Nw(),g=Iw(a,{relative:u}),m=o.toLowerCase()==="get"?"get":"post",d=typeof a=="string"&&ry.test(a),v=x=>{if(l&&l(x),x.defaultPrevented)return;x.preventDefault();let S=x.nativeEvent.submitter,w=(S==null?void 0:S.getAttribute("formmethod"))||o;_(S||x.currentTarget,{fetcherKey:e,method:w,navigate:t,replace:r,state:s,relative:u,preventScrollReset:c,viewTransition:f})};return B.createElement("form",{ref:p,method:m,action:g,onSubmit:i?l:v,...h,"data-discover":!d&&n==="render"?"true":void 0})});Rw.displayName="Form";function bw(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sy(n){let e=B.useContext(Jo);return Et(e,bw(n)),e}function Pw(n,{target:e,replace:t,state:i,preventScrollReset:r,relative:s,viewTransition:o}={}){let a=VE(),l=ks(),u=Ml(n,{relative:s});return B.useCallback(c=>{if(lw(c,e)){c.preventDefault();let f=t!==void 0?t:nl(l)===nl(u);a(n,{replace:f,state:i,preventScrollReset:r,relative:s,viewTransition:o})}},[l,a,u,t,i,e,n,r,s,o])}var Dw=0,Lw=()=>`__${String(++Dw)}__`;function Nw(){let{router:n}=sy("useSubmit"),{basename:e}=B.useContext(Oi),t=QE();return B.useCallback(async(i,r={})=>{let{action:s,method:o,encType:a,formData:l,body:u}=fw(i,e);if(r.navigate===!1){let c=r.fetcherKey||Lw();await n.fetch(c,t,r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:u,formMethod:r.method||o,formEncType:r.encType||a,flushSync:r.flushSync})}else await n.navigate(r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:u,formMethod:r.method||o,formEncType:r.encType||a,replace:r.replace,state:r.state,fromRouteId:t,flushSync:r.flushSync,viewTransition:r.viewTransition})},[n,e,t])}function Iw(n,{relative:e}={}){let{basename:t}=B.useContext(Oi),i=B.useContext(hr);Et(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...Ml(n||".",{relative:e})},o=ks();if(n==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(c=>c==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let c=a.toString();s.search=c?`?${c}`:""}}return(!n||n===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(s.pathname=s.pathname==="/"?t:Ji([t,s.pathname])),nl(s)}function Uw(n,{relative:e}={}){let t=B.useContext(Kx);Et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=sy("useViewTransitionState"),r=Ml(n,{relative:e});if(!t.isTransitioning)return!1;let s=or(t.currentLocation.pathname,i)||t.currentLocation.pathname,o=or(t.nextLocation.pathname,i)||t.nextLocation.pathname;return hc(r.pathname,o)!=null||hc(r.pathname,s)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),pn=(n,e)=>{const t=B.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},c)=>B.createElement("svg",{ref:c,...Fw,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Ow(n)}`,a].join(" "),...u},[...e.map(([f,h])=>B.createElement(f,h)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=pn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=pn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=pn("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=pn("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=pn("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=pn("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=pn("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=pn("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=pn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=pn("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=pn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=pn("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=pn("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=pn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=pn("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Xi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function oy(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ko={duration:.5,overwrite:!1,delay:0},xm,qt,gt,ti=1e8,at=1/ti,hh=Math.PI*2,Xw=hh/4,$w=0,ay=Math.sqrt,Yw=Math.cos,qw=Math.sin,Xt=function(e){return typeof e=="string"},Rt=function(e){return typeof e=="function"},ar=function(e){return typeof e=="number"},ym=function(e){return typeof e>"u"},Fi=function(e){return typeof e=="object"},En=function(e){return e!==!1},Sm=function(){return typeof window<"u"},ql=function(e){return Rt(e)||Xt(e)},ly=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,ph=/(?:-?\.?\d|\.)+/gi,uy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_o=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,cy=/[+-]=-?[.\d]+/,fy=/[^,'"\[\]\s]+/gi,Kw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,Ai,mh,Mm,Gn={},pc={},dy,hy=function(e){return(pc=zo(e,Gn))&&bn},Em=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},il=function(e,t){return!t&&console.warn(e)},py=function(e,t){return e&&(Gn[e]=t)&&pc&&(pc[e]=t)||Gn},rl=function(){return 0},Zw={suppressEvents:!0,isStart:!0,kill:!1},Uu={suppressEvents:!0,kill:!1},Qw={suppressEvents:!0},wm={},Br=[],gh={},my,Un={},bf={},m_=30,Fu=[],Tm="",Am=function(e){var t=e[0],i,r;if(Fi(t)||Rt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Fu.length;r--&&!Fu[r].targetTest(t););i=Fu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new zy(e[r],i)))||e.splice(r,1);return e},ws=function(e){return e._gsap||Am(ni(e))[0]._gsap},gy=function(e,t,i){return(i=e[t])&&Rt(i)?e[t]():ym(i)&&e.getAttribute&&e.getAttribute(t)||i},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Pt=function(e){return Math.round(e*1e5)/1e5||0},It=function(e){return Math.round(e*1e7)/1e7||0},Ao=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Jw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},mc=function(){var e=Br.length,t=Br.slice(0),i,r;for(gh={},Br.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Cm=function(e){return!!(e._initted||e._startAt||e.add)},_y=function(e,t,i,r){Br.length&&!qt&&mc(),e.render(t,i,!!(qt&&t<0&&Cm(e))),Br.length&&!qt&&mc()},vy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(fy).length<2?t:Xt(e)?e.trim():e},xy=function(e){return e},Wn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},eT=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},zo=function(e,t){for(var i in t)e[i]=t[i];return e},g_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Fi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},gc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Fa=function(e){var t=e.parent||yt,i=e.keyframes?eT(rn(e.keyframes)):Wn;if(En(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},tT=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},yy=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},jc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Xr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ts=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},nT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_h=function(e,t,i,r){return e._startAt&&(qt?e._startAt.revert(Uu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},iT=function n(e){return!e||e._ts&&n(e.parent)},__=function(e){return e._repeat?Bo(e._tTime,e=e.duration()+e._rDelay)*e:0},Bo=function(e,t){var i=Math.floor(e=It(e/t));return e&&i===e?i-1:i},_c=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xc=function(e){return e._end=It(e._start+(e._tDur/Math.abs(e._ts||e._rts||at)||0))},$c=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=It(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xc(e),i._dirty||Ts(i,e)),e},Sy=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=_c(e.rawTime(),t),(!t._dur||El(0,t.totalDuration(),i)-t._tTime>at)&&t.render(i,!0)),Ts(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-at}},bi=function(e,t,i,r){return t.parent&&Xr(t),t._start=It((ar(i)?i:i||e!==yt?Kn(e,i,t):e._time)+t._delay),t._end=It(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),yy(e,t,"_first","_last",e._sort?"_start":0),vh(t)||(e._recent=t),r||Sy(e,t),e._ts<0&&$c(e,e._tTime),e},My=function(e,t){return(Gn.ScrollTrigger||Em("scrollTrigger",t))&&Gn.ScrollTrigger.create(t,e)},Ey=function(e,t,i,r,s){if(bm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&my!==Fn.frame)return Br.push(e),e._lazy=[s,r],1},rT=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},vh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},sT=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&rT(e)&&!(!e._initted&&vh(e))||(e._ts<0||e._dp._ts<0)&&!vh(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=El(0,e._tDur,t),c=Bo(l,a),e._yoyo&&c&1&&(o=1-o),c!==Bo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||qt||r||e._zTime===at||!t&&e._zTime){if(!e._initted&&Ey(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?at:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&_h(e,t,i,!0),e._onUpdate&&!i&&kn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Xr(e,1),!i&&!qt&&(kn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},oT=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Vo=function(e,t,i,r){var s=e._repeat,o=It(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:It(o*(s+1)+e._rDelay*s):o,a>0&&!r&&$c(e,e._tTime=e._tDur*a),e.parent&&Xc(e),i||Ts(e.parent,e),e},v_=function(e){return e instanceof un?Ts(e):Vo(e,e._dur)},aT={_start:0,endTime:rl,totalDuration:rl},Kn=function n(e,t,i){var r=e.labels,s=e._recent||aT,o=e.duration()>=ti?s.endTime(!1):e._dur,a,l,u;return Xt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(rn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Oa=function(e,t,i){var r=ar(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;o.immediateRender=En(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Nt(t[0],o,t[s+1])},Jr=function(e,t){return e||e===0?t(e):t},El=function(e,t,i){return i<e?e:i>t?t:i},nn=function(e,t){return!Xt(e)||!(t=Kw.exec(e))?"":t[1]},lT=function(e,t,i){return Jr(i,function(r){return El(e,t,r)})},xh=[].slice,wy=function(e,t){return e&&Fi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fi(e[0]))&&!e.nodeType&&e!==Ai},uT=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Xt(r)&&!t||wy(r,1)?(s=i).push.apply(s,ni(r)):i.push(r)})||i},ni=function(e,t,i){return gt&&!t&&gt.selector?gt.selector(e):Xt(e)&&!i&&(mh||!Ho())?xh.call((t||Mm).querySelectorAll(e),0):rn(e)?uT(e,i):wy(e)?xh.call(e,0):e?[e]:[]},yh=function(e){return e=ni(e)[0]||il("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ni(t,i.querySelectorAll?i:i===e?il("Invalid scope")||Mm.createElement("div"):e)}},Ty=function(e){return e.sort(function(){return .5-Math.random()})},Ay=function(e){if(Rt(e))return e;var t=Fi(e)?e:{each:e},i=As(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return Xt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,_){var g=(_||t).length,m=o[g],d,v,x,S,w,T,C,b,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,ti])[1],!M){for(C=-ti;C<(C=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],d=l?Math.min(M,g)*c-.5:r%M,v=M===ti?0:l?g*f/M-.5:r/M|0,C=0,b=ti,T=0;T<g;T++)x=T%M-d,S=v-(T/M|0),m[T]=w=u?Math.abs(u==="y"?S:x):ay(x*x+S*S),w>C&&(C=w),w<b&&(b=w);r==="random"&&Ty(m),m.max=C-b,m.min=b,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:u?u==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=nn(t.amount||t.each)||0,i=i&&g<0?Fy(i):i}return g=(m[h]-m.min)/m.max||0,It(m.b+(i?i(g):g)*m.v)+m.u}},Sh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=It(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ar(i)?0:nn(i))}},Cy=function(e,t){var i=rn(e),r,s;return!i&&Fi(e)&&(r=i=e.radius||ti,e.values?(e=ni(e.values),(s=!ar(e[0]))&&(r*=r)):e=Sh(e.increment)),Jr(t,i?Rt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ti,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||ar(o)?c:c+nn(o)}:Sh(e))},Ry=function(e,t,i,r){return Jr(rn(e)?!t:i===!0?!!(i=0):!r,function(){return rn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},cT=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},fT=function(e,t){return function(i){return e(parseFloat(i))+(t||nn(i))}},dT=function(e,t,i){return Py(e,t,0,1,i)},by=function(e,t,i){return Jr(i,function(r){return e[~~t(r)]})},hT=function n(e,t,i){var r=t-e;return rn(e)?by(e,n(0,e.length),t):Jr(i,function(s){return(r+(s-e)%r)%r+e})},pT=function n(e,t,i){var r=t-e,s=r*2;return rn(e)?by(e,n(0,e.length-1),t):Jr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},sl=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?fy:ph),i+=e.substr(t,r-t)+Ry(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Py=function(e,t,i,r,s){var o=t-e,a=r-i;return Jr(s,function(l){return i+((l-e)/o*a||0)})},mT=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Xt(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(rn(e)&&!rn(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return c[g](_-g)},i=t}else r||(e=zo(rn(e)?[]:{},e));if(!c){for(l in t)Rm.call(a,e,l,"get",t[l]);s=function(_){return Lm(_,a)||(o?e.p:e)}}}return Jr(i,s)},x_=function(e,t,i){var r=e.labels,s=ti,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},kn=function(e,t,i){var r=e.vars,s=r[t],o=gt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Br.length&&mc(),a&&(gt=a),c=l?s.apply(u,l):s.call(u),gt=o,c},wa=function(e){return Xr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qt),e.progress()<1&&kn(e,"onInterrupt"),e},vo,Dy=[],Ly=function(e){if(e)if(e=!e.name&&e.default||e,Sm()||e.headless){var t=e.name,i=Rt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:rl,render:Lm,add:Rm,kill:DT,modifier:PT,rawVars:0},o={targetTest:0,get:0,getSetter:Dm,aliases:{},register:0};if(Ho(),e!==r){if(Un[t])return;Wn(r,Wn(gc(e,s),o)),zo(r.prototype,zo(s,gc(e,o))),Un[r.prop=t]=r,e.targetTest&&(Fu.push(r),wm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}py(t,r),e.register&&e.register(bn,r,Tn)}else Dy.push(e)},ot=255,Ta={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Pf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ot+.5|0},Ny=function(e,t,i){var r=e?ar(e)?[e>>16,e>>8&ot,e&ot]:0:Ta.black,s,o,a,l,u,c,f,h,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ta[e])r=Ta[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ot,r&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(ph),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Pf(l+1/3,s,o),r[1]=Pf(l,s,o),r[2]=Pf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(uy),i&&r.length<4&&(r[3]=1),r}else r=e.match(ph)||Ta.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/ot,o=r[1]/ot,a=r[2]/ot,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},Iy=function(e){var t=[],i=[],r=-1;return e.split(Vr).forEach(function(s){var o=s.match(_o)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},y_=function(e,t,i){var r="",s=(e+r).match(Vr),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=Ny(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=Iy(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Vr,"1").split(_o),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Vr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Vr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ta)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),gT=/hsl[a]?\(/,Uy=function(e){var t=e.join(" "),i;if(Vr.lastIndex=0,Vr.test(t))return i=gT.test(t),e[1]=y_(e[1],i),e[0]=y_(e[0],i,Iy(e[1])),!0},ol,Fn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,_=function g(m){var d=n()-r,v=m===!0,x,S,w,T;if((d>e||d<0)&&(i+=d-t),r+=d,w=r-i,x=w-o,(x>0||v)&&(T=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,o+=x+(x>=s?4:s-x),S=1),v||(l=u(g)),S)for(p=0;p<a.length;p++)a[p](w,h,T,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){dy&&(!mh&&Sm()&&(Ai=mh=window,Mm=Ai.document||{},Gn.gsap=bn,(Ai.gsapVersions||(Ai.gsapVersions=[])).push(bn.version),hy(pc||Ai.GreenSockGlobals||!Ai.gsap&&Ai||{}),Dy.forEach(Ly)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},ol=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),ol=0,u=rl},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,d,v){var x=d?function(S,w,T,C){m(S,w,T,C),f.remove(x)}:m;return f.remove(m),a[v?"unshift":"push"](x),Ho(),x},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),Ho=function(){return!ol&&Fn.wake()},qe={},_T=/^[\d.\-M][\d.\-,\s]/,vT=/["']/g,xT=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(vT,"").trim():+u,r=l.substr(a+1).trim();return t},yT=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},ST=function(e){var t=(e+"").split("("),i=qe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[xT(t[1])]:yT(e).split(",").map(vy)):qe._CE&&_T.test(e)?qe._CE("",e):i},Fy=function(e){return function(t){return 1-e(1-t)}},Oy=function n(e,t){for(var i=e._first,r;i;)i instanceof un?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},As=function(e,t){return e&&(Rt(e)?e:qe[e]||ST(e))||t},zs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return wn(e,function(a){qe[a]=Gn[a]=s,qe[o=a.toLowerCase()]=i;for(var l in s)qe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[a+"."+l]=s[l]}),s},ky=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Df=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/hh*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*qw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:ky(a);return s=hh/s,l.config=function(u,c){return n(e,u,c)},l},Lf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:ky(i);return r.config=function(s){return n(e,s)},r};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;zs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;zs("Elastic",Df("in"),Df("out"),Df());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};zs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);zs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});zs("Circ",function(n){return-(ay(1-n*n)-1)});zs("Sine",function(n){return n===1?1:-Yw(n*Xw)+1});zs("Back",Lf("in"),Lf("out"),Lf());qe.SteppedEase=qe.steps=Gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-at;return function(a){return((r*El(0,o,a)|0)+s)*i}}};ko.ease=qe["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Tm+=n+","+n+"Params,"});var zy=function(e,t){this.id=$w++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:gy,this.set=t?t.getSetter:Dm},al=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vo(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),ol||Fn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Vo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ho(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($c(this,i),!s._dp||s.parent||Sy(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&bi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===at||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),_y(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+__(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+__(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Bo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-at?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?_c(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-at?0:this._rts,this.totalTime(El(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Xc(this),nT(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ho(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==at&&(this._tTime-=at)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&bi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(En(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_c(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Qw);var r=qt;return qt=i,Cm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),qt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,v_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,v_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Kn(this,i),En(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,En(r)),this._dur||(this._zTime=-at),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-at:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-at,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-at)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Rt(i)?i:xy,a=function(){var u=r.then;r.then=null,Rt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){wa(this)},n}();Wn(al.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-at,_prom:0,_ps:!1,_rts:1});var un=function(n){oy(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=En(i.sortChildren),yt&&bi(i.parent||yt,Xi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&My(Xi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Oa(0,arguments,this),this},t.from=function(r,s,o){return Oa(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Oa(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Fa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Nt(r,s,Kn(this,o),1),this},t.call=function(r,s,o){return bi(this,Nt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Nt(r,o,Kn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Fa(o).immediateRender=En(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Fa(a).immediateRender=En(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:It(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,_,g,m,d,v,x,S,w,T,C;if(this!==yt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,S=this._start,x=this._ts,d=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=It(c%m),c===l?(g=this._repeat,h=u):(w=It(c/m),g=~~w,g&&g===w&&(h=u,g--),h>u&&(h=u)),w=Bo(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),T&&g&1&&(h=u-h,C=1),g!==w&&!this._lock){var b=T&&w&1,M=b===(T&&g&1);if(g<w&&(b=!b),a=b?0:c%u?u:c,this._lock=1,this.render(a||(C?0:It(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&kn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=b?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Oy(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=oT(this,It(a),It(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&!s&&!w&&(kn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){v=0,_&&(c+=this._zTime=-at);break}}p=_}else{p=this._last;for(var E=r<0?r:h;p;){if(_=p._prev,(p._act||E<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||qt&&Cm(p)),h!==this._time||!this._ts&&!d){v=0,_&&(c+=this._zTime=E?-at:at);break}}p=_}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-at)._zTime=h>=a?1:-1,this._ts))return this._start=S,Xc(this),this.render(r,s,o);this._onUpdate&&!s&&kn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Xr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(kn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ar(s)||(s=Kn(this,s,r)),!(r instanceof al)){if(rn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Xt(r))return this.addLabel(r,s);if(Rt(r))r=Nt.delayedCall(0,r);else return this}return this!==r?bi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ti);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Nt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Xt(r)?this.removeLabel(r):Rt(r)?this.killTweensOf(r):(r.parent===this&&jc(this,r),r===this._recent&&(this._recent=this._last),Ts(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=It(Fn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Kn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Nt.delayedCall(0,s||rl,o);return a.data="isPause",this._hasPause=1,bi(this,a,Kn(this,r))},t.removePause=function(r){var s=this._first;for(r=Kn(this,r);s;)s._start===r&&s.data==="isPause"&&Xr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)br!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ni(r),l=this._first,u=ar(s),c;l;)l instanceof Nt?Jw(l._targets,a)&&(u?(!br||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Kn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,_=Nt.to(o,Wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||at,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&Vo(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Wn({startAt:{time:Kn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),x_(this,Kn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),x_(this,Kn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+at)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Ts(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ts(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ti,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,bi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Vo(o,o===yt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(yt._ts&&(_y(yt,_c(r,yt)),my=Fn.frame),Fn.frame>=m_){m_+=Bn.autoSleep||120;var s=yt._first;if((!s||!s._ts)&&Bn.autoSleep&&Fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Fn.sleep()}}},e}(al);Wn(un.prototype,{_lock:0,_hasPause:0,_forcing:0});var MT=function(e,t,i,r,s,o,a){var l=new Tn(this._pt,e,t,0,1,jy,null,s),u=0,c=0,f,h,p,_,g,m,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=sl(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match(Rf)||[];f=Rf.exec(r);)_=f[0],g=r.substring(u,f.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?Ao(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=Rf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(cy.test(r)||d)&&(l.e=0),this._pt=l,l},Rm=function(e,t,i,r,s,o,a,l,u,c){Rt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Rt(f)?u?e[t.indexOf("set")||!Rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Rt(f)?u?CT:Gy:Pm,_;if(Xt(r)&&(~r.indexOf("random(")&&(r=sl(r)),r.charAt(1)==="="&&(_=Ao(h,r)+(nn(h)||0),(_||_===0)&&(r=_))),!c||h!==r||Mh)return!isNaN(h*r)&&r!==""?(_=new Tn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?bT:Wy,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&Em(t,r),MT.call(this,e,t,h,r,p,l||Bn.stringFilter,u))},ET=function(e,t,i,r,s){if(Rt(e)&&(e=ka(e,s,t,i,r)),!Fi(e)||e.style&&e.nodeType||rn(e)||ly(e))return Xt(e)?ka(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=ka(e[a],s,t,i,r);return o},By=function(e,t,i,r,s,o){var a,l,u,c;if(Un[e]&&(a=new Un[e]).init(s,a.rawVars?t[e]:ET(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Tn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==vo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},br,Mh,bm=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:m,x=e._overwrite==="auto"&&!xm,S=e.timeline,w,T,C,b,M,E,P,U,z,G,$,H,J;if(S&&(!h||!s)&&(s="none"),e._ease=As(s,ko.ease),e._yEase=f?Fy(As(f===!0?s:f,ko.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!r.runBackwards,!S||h&&!r.stagger){if(U=m[0]?ws(m[0]).harness:0,H=U&&r[U.prop],w=gc(r,wm),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?Uu:Zw),g._lazy=0),o){if(Xr(e._startAt=Nt.set(m,Wn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!g&&En(l),startAt:null,delay:0,onUpdate:u&&function(){return kn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt||!a&&!p)&&e._startAt.revert(Uu),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),C=Wn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&En(l),immediateRender:a,stagger:0,parent:d},w),H&&(C[U.prop]=H),Xr(e._startAt=Nt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt?e._startAt.revert(Uu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,at,at);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&En(l)||l&&!_,T=0;T<m.length;T++){if(M=m[T],P=M._gsap||Am(m)[T]._gsap,e._ptLookup[T]=G={},gh[P.id]&&Br.length&&mc(),$=v===m?T:v.indexOf(M),U&&(z=new U).init(M,H||w,e,$,v)!==!1&&(e._pt=b=new Tn(e._pt,M,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(I){G[I]=b}),z.priority&&(E=1)),!U||H)for(C in w)Un[C]&&(z=By(C,w,e,$,M,v))?z.priority&&(E=1):G[C]=b=Rm.call(e,M,C,"get",w[C],$,v,0,r.stringFilter);e._op&&e._op[T]&&e.kill(M,e._op[T]),x&&e._pt&&(br=e,yt.killTweensOf(M,G,e.globalTime(t)),J=!e.parent,br=0),e._pt&&l&&(gh[P.id]=1)}E&&Xy(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!J,h&&t<=0&&S.render(ti,!0,!0)},wT=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Mh=1,e.vars[t]="+=0",bm(e,a),Mh=0,l?il(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Pt(i)+nn(f.e)),f.b&&(f.b=c.s+nn(f.b))},TT=function(e,t){var i=e[0]?ws(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=zo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},AT=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(rn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ka=function(e,t,i,r,s){return Rt(e)?e.call(t,i,r,s):Xt(e)&&~e.indexOf("random(")?sl(e):e},Vy=Tm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Hy={};wn(Vy+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Hy[n]=1});var Nt=function(n){oy(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Fa(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,v=r.parent||yt,x=(rn(i)||ly(i)?ar(i[0]):"length"in r)?[i]:ni(i),S,w,T,C,b,M,E,P;if(a._targets=x.length?Am(x):il("GSAP target "+i+" not found. https://gsap.com",!Bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||h||ql(u)||ql(c)){if(r=a.vars,S=a.timeline=new un({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:x}),S.kill(),S.parent=S._dp=Xi(a),S._start=0,h||ql(u)||ql(c)){if(C=x.length,E=h&&Ay(h),Fi(h))for(b in h)~Vy.indexOf(b)&&(P||(P={}),P[b]=h[b]);for(w=0;w<C;w++)T=gc(r,Hy),T.stagger=0,d&&(T.yoyoEase=d),P&&zo(T,P),M=x[w],T.duration=+ka(u,Xi(a),w,M,x),T.delay=(+ka(c,Xi(a),w,M,x)||0)-a._delay,!h&&C===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),S.to(M,T,E?E(w,M,x):0),S._ease=qe.none;S.duration()?u=c=0:a.timeline=0}else if(_){Fa(Wn(S.vars.defaults,{ease:"none"})),S._ease=As(_.ease||r.ease||"none");var U=0,z,G,$;if(rn(_))_.forEach(function(H){return S.to(x,H,">")}),S.duration();else{T={};for(b in _)b==="ease"||b==="easeEach"||AT(b,_[b],T,_.easeEach);for(b in T)for(z=T[b].sort(function(H,J){return H.t-J.t}),U=0,w=0;w<z.length;w++)G=z[w],$={ease:G.e,duration:(G.t-(w?z[w-1].t:0))/100*u},$[b]=G.v,S.to(x,$,U),U+=$.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return p===!0&&!xm&&(br=Xi(a),yt.killTweensOf(x),br=0),bi(v,Xi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!_&&a._start===It(v._time)&&En(f)&&iT(Xi(a))&&v.data!=="nested")&&(a._tTime=-at,a.render(Math.max(0,-c)||0)),m&&My(Xi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-at&&!c?l:r<at?0:r,h,p,_,g,m,d,v,x,S;if(!u)sT(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(h=It(f%g),f===l?(_=this._repeat,h=u):(m=It(f/g),_=~~m,_&&_===m?(h=u,_--):h>u&&(h=u)),d=this._yoyo&&_&1,d&&(S=this._yEase,h=u-h),m=Bo(this._tTime,g),h===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&(x&&this._yEase&&Oy(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(It(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Ey(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(h/u),this._from&&(this.ratio=v=1-v),!a&&f&&!s&&!m&&(kn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&_h(this,r,s,o),kn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&kn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&_h(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Xr(this,1),!s&&!(c&&!a)&&(f||a||d)&&(kn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ol||Fn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||bm(this,u),c=this._ease(u/this._dur),wT(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):($c(this,0),this.parent||yy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?wa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!qt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,br&&br.vars.overwrite!==!0)._first||wa(this),this.parent&&o!==this.timeline.totalDuration()&&Vo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ni(r):a,u=this._ptLookup,c=this._pt,f,h,p,_,g,m,d;if((!s||s==="all")&&tT(a,l))return s==="all"&&(this._pt=0),wa(this);for(f=this._op=this._op||[],s!=="all"&&(Xt(s)&&(g={},wn(s,function(v){return g[v]=1}),s=g),s=TT(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,_=h,p={}):(p=f[d]=f[d]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&jc(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&wa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Oa(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Oa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return yt.killTweensOf(r,s,o)},e}(al);Wn(Nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(n){Nt[n]=function(){var e=new un,t=xh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Pm=function(e,t,i){return e[t]=i},Gy=function(e,t,i){return e[t](i)},CT=function(e,t,i,r){return e[t](r.fp,i)},RT=function(e,t,i){return e.setAttribute(t,i)},Dm=function(e,t){return Rt(e[t])?Gy:ym(e[t])&&e.setAttribute?RT:Pm},Wy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},bT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jy=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Lm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},PT=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},DT=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?jc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},LT=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Xy=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Tn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Wy,this.d=l||this,this.set=u||Pm,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=LT,this.m=i,this.mt=s,this.tween=r},n}();wn(Tm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return wm[n]=1});Gn.TweenMax=Gn.TweenLite=Nt;Gn.TimelineLite=Gn.TimelineMax=un;yt=new un({sortChildren:!1,defaults:ko,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bn.stringFilter=Uy;var Cs=[],Ou={},NT=[],S_=0,IT=0,Nf=function(e){return(Ou[e]||NT).map(function(t){return t()})},Eh=function(){var e=Date.now(),t=[];e-S_>2&&(Nf("matchMediaInit"),Cs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Ai.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Nf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),S_=e,Nf("matchMedia"))},$y=function(){function n(t,i){this.selector=i&&yh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=IT++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Rt(i)&&(s=r,r=i,i=Rt);var o=this,a=function(){var u=gt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=yh(s)),gt=o,f=r.apply(o,arguments),Rt(f)&&o._r.push(f),gt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Rt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=gt;gt=null,i(this),gt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Nt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof un?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Nt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Cs.length;o--;)Cs[o].id===this.id&&Cs.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),UT=function(){function n(t){this.contexts=[],this.scope=t,gt&&gt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Fi(i)||(i={matches:i});var o=new $y(0,s||this.scope),a=o.conditions={},l,u,c;gt&&!o.selector&&(o.selector=gt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Ai.matchMedia(i[u]),l&&(Cs.indexOf(o)<0&&Cs.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Eh):l.addEventListener("change",Eh)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),vc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Ly(r)})},timeline:function(e){return new un(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Xt(e)&&(e=ni(e)[0]);var s=ws(e||{}).get,o=i?xy:vy;return i==="native"&&(i=""),e&&(t?o((Un[t]&&Un[t].get||s)(e,t,i,r)):function(a,l,u){return o((Un[a]&&Un[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ni(e),e.length>1){var r=e.map(function(c){return bn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Un[t],a=ws(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;vo._pt=0,f.init(e,i?c+i:c,vo,0,[e]),f.render(1,f),vo._pt&&Lm(1,vo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=bn.to(e,Wn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=As(e.ease,ko.ease)),g_(ko,e||{})},config:function(e){return g_(Bn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Un[a]&&!Gn[a]&&il(t+" effect requires "+a+" plugin.")}),bf[t]=function(a,l,u){return i(ni(a),Wn(l||{},s),u)},o&&(un.prototype[t]=function(a,l,u){return this.add(bf[t](a,Fi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){qe[e]=As(t)},parseEase:function(e,t){return arguments.length?As(e,t):qe},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new un(e),r,s;for(i.smoothChildTiming=En(e.smoothChildTiming),yt.remove(i),i._dp=0,i._time=i._tTime=yt._time,r=yt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Nt&&r.vars.onComplete===r._targets[0]))&&bi(i,r,r._start-r._delay),r=s;return bi(yt,i,0),i},context:function(e,t){return e?new $y(e,t):gt},matchMedia:function(e){return new UT(e)},matchMediaRefresh:function(){return Cs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Eh()},addEventListener:function(e,t){var i=Ou[e]||(Ou[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Ou[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:hT,wrapYoyo:pT,distribute:Ay,random:Ry,snap:Cy,normalize:dT,getUnit:nn,clamp:lT,splitColor:Ny,toArray:ni,selector:yh,mapRange:Py,pipe:cT,unitize:fT,interpolate:mT,shuffle:Ty},install:hy,effects:bf,ticker:Fn,updateRoot:un.updateRoot,plugins:Un,globalTimeline:yt,core:{PropTween:Tn,globals:py,Tween:Nt,Timeline:un,Animation:al,getCache:ws,_removeLinkedListItem:jc,reverting:function(){return qt},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return xm=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return vc[n]=Nt[n]});Fn.add(un.updateRoot);vo=vc.to({},{duration:0});var FT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},OT=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=FT(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},If=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Xt(s)&&(l={},wn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}OT(a,s)}}}},bn=vc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)qt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},If("roundProps",Sh),If("modifiers"),If("snap",Cy))||vc;Nt.version=un.version=bn.version="3.13.0";dy=1;Sm()&&Ho();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var M_,Pr,Co,Nm,ys,E_,Im,kT=function(){return typeof window<"u"},lr={},ds=180/Math.PI,Ro=Math.PI/180,Hs=Math.atan2,w_=1e8,Um=/([A-Z])/g,zT=/(left|right|width|margin|padding|x)/i,BT=/[\s,\(]\S/,Pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},HT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},GT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Yy=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},qy=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},WT=function(e,t,i){return e.style[t]=i},jT=function(e,t,i){return e.style.setProperty(t,i)},XT=function(e,t,i){return e._gsap[t]=i},$T=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},YT=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},qT=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},St="transform",An=St+"Origin",KT=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in lr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Pi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Yi(r,a)}):this.tfm[e]=o.x?o[e]:Yi(r,e),e===An&&(this.tfm.zOrigin=o.zOrigin);else return Pi.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(St)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(An,t,"")),e=St}(s||t)&&this.props.push(e,t,s[e])},Ky=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ZT=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Um,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Im(),(!s||!s.isStart)&&!i[St]&&(Ky(i),r.zOrigin&&i[An]&&(i[An]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Zy=function(e,t){var i={target:e,props:[],revert:ZT,save:KT};return e._gsap||bn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Qy,Th=function(e,t){var i=Pr.createElementNS?Pr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Pr.createElement(e);return i&&i.style?i:Pr.createElement(e)},ii=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Um,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Go(t)||t,1)||""},T_="O,Moz,ms,Ms,Webkit".split(","),Go=function(e,t,i){var r=t||ys,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(T_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?T_[o]:"")+e},Ah=function(){kT()&&window.document&&(M_=window,Pr=M_.document,Co=Pr.documentElement,ys=Th("div")||{style:{}},Th("div"),St=Go(St),An=St+"Origin",ys.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qy=!!Go("perspective"),Im=bn.core.reverting,Nm=1)},A_=function(e){var t=e.ownerSVGElement,i=Th("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Co.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Co.removeChild(i),s},C_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Jy=function(e){var t,i;try{t=e.getBBox()}catch{t=A_(e),i=1}return t&&(t.width||t.height)||i||(t=A_(e)),t&&!t.width&&!t.x&&!t.y?{x:+C_(e,["x","cx","x1"])||0,y:+C_(e,["y","cy","y1"])||0,width:0,height:0}:t},eS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jy(e))},Is=function(e,t){if(t){var i=e.style,r;t in lr&&t!==An&&(t=St),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Um,"-$1").toLowerCase())):i.removeAttribute(t)}},Dr=function(e,t,i,r,s,o){var a=new Tn(e._pt,t,i,0,1,o?qy:Yy);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},R_={deg:1,rad:1,turn:1},QT={grid:1,flex:1},$r=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ys.style,l=zT.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",_,g,m,d;if(r===o||!s||R_[r]||R_[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&eS(e),(p||o==="%")&&(lr[t]||~t.indexOf("adius")))return _=d?e.getBBox()[l?"width":"height"]:e[c],Pt(p?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Pr||!g.appendChild)&&(g=Pr.body),m=g._gsap,m&&p&&m.width&&l&&m.time===Fn.time&&!m.uncache)return Pt(s/m.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,_=e[c],v?e.style[t]=v:Is(e,t)}else(p||o==="%")&&!QT[ii(g,"display")]&&(a.position=ii(e,"position")),g===e&&(a.position="static"),g.appendChild(ys),_=ys[c],g.removeChild(ys),a.position="absolute";return l&&p&&(m=ws(g),m.time=Fn.time,m.width=g[c]),Pt(h?_*s/f:_&&s?f/_*s:0)},Yi=function(e,t,i,r){var s;return Nm||Ah(),t in Pi&&t!=="transform"&&(t=Pi[t],~t.indexOf(",")&&(t=t.split(",")[0])),lr[t]&&t!=="transform"?(s=ul(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:yc(ii(e,An))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=xc[t]&&xc[t](e,t,i)||ii(e,t)||gy(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?$r(e,t,s,i)+i:s},JT=function(e,t,i,r){if(!i||i==="none"){var s=Go(t,e,1),o=s&&ii(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=ii(e,"borderTopColor"))}var a=new Tn(this._pt,e.style,t,0,1,jy),l=0,u=0,c,f,h,p,_,g,m,d,v,x,S,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=ii(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=ii(e,t)||r,g?e.style[t]=g:Is(e,t)),c=[i,r],Uy(c),i=c[0],r=c[1],h=i.match(_o)||[],w=r.match(_o)||[],w.length){for(;f=_o.exec(r);)m=f[0],v=r.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=h[u++]||"")&&(p=parseFloat(g)||0,S=g.substr((p+"").length),m.charAt(1)==="="&&(m=Ao(p,m)+S),d=parseFloat(m),x=m.substr((d+"").length),l=_o.lastIndex-x.length,x||(x=x||Bn.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=$r(e,t,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:d-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?qy:Yy;return cy.test(r)&&(a.e=0),this._pt=a,a},b_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=b_[i]||i,t[1]=b_[r]||r,t.join(" ")},tA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],lr[a]&&(l=1,a=a==="transformOrigin"?An:St),Is(i,a);l&&(Is(i,St),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ul(i,1),o.uncache=1,Ky(r)))}},xc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Tn(e._pt,t,i,0,0,tA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},ll=[1,0,0,1,0,0],tS={},nS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},P_=function(e){var t=ii(e,St);return nS(t)?ll:t.substr(7).match(uy).map(Pt)},Fm=function(e,t){var i=e._gsap||ws(e),r=e.style,s=P_(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ll:s):(s===ll&&!e.offsetParent&&e!==Co&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Co.appendChild(e)),s=P_(e),l?r.display=l:Is(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Co.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ch=function(e,t,i,r,s,o){var a=e._gsap,l=s||Fm(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],d=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,w=parseFloat(x[1])||0,T,C,b,M;i?l!==ll&&(C=p*m-_*g)&&(b=S*(m/C)+w*(-g/C)+(g*v-m*d)/C,M=S*(-_/C)+w*(p/C)-(p*v-_*d)/C,S=b,w=M):(T=Jy(e),S=T.x+(~x[0].indexOf("%")?S/100*T.width:S),w=T.y+(~(x[1]||x[0]).indexOf("%")?w/100*T.height:w)),r||r!==!1&&a.smooth?(d=S-u,v=w-c,a.xOffset=f+(d*p+v*g)-d,a.yOffset=h+(d*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[An]="0px 0px",o&&(Dr(o,a,"xOrigin",u,S),Dr(o,a,"yOrigin",c,w),Dr(o,a,"xOffset",f,a.xOffset),Dr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},ul=function(e,t){var i=e._gsap||new zy(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=ii(e,An)||"0",c,f,h,p,_,g,m,d,v,x,S,w,T,C,b,M,E,P,U,z,G,$,H,J,I,q,Q,le,_e,je,Ue,Fe;return c=f=h=g=m=d=v=x=S=0,p=_=1,i.svg=!!(e.getCTM&&eS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[St]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[St]!=="none"?l[St]:"")),r.scale=r.rotate=r.translate="none"),C=Fm(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),u=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",J=""):J=!t&&e.getAttribute("data-svg-origin"),Ch(e,J||u,!!J||i.originIsAbsolute,i.smooth!==!1,C)),w=i.xOrigin||0,T=i.yOrigin||0,C!==ll&&(P=C[0],U=C[1],z=C[2],G=C[3],c=$=C[4],f=H=C[5],C.length===6?(p=Math.sqrt(P*P+U*U),_=Math.sqrt(G*G+z*z),g=P||U?Hs(U,P)*ds:0,v=z||G?Hs(z,G)*ds+g:0,v&&(_*=Math.abs(Math.cos(v*Ro))),i.svg&&(c-=w-(w*P+T*z),f-=T-(w*U+T*G))):(Fe=C[6],je=C[7],Q=C[8],le=C[9],_e=C[10],Ue=C[11],c=C[12],f=C[13],h=C[14],b=Hs(Fe,_e),m=b*ds,b&&(M=Math.cos(-b),E=Math.sin(-b),J=$*M+Q*E,I=H*M+le*E,q=Fe*M+_e*E,Q=$*-E+Q*M,le=H*-E+le*M,_e=Fe*-E+_e*M,Ue=je*-E+Ue*M,$=J,H=I,Fe=q),b=Hs(-z,_e),d=b*ds,b&&(M=Math.cos(-b),E=Math.sin(-b),J=P*M-Q*E,I=U*M-le*E,q=z*M-_e*E,Ue=G*E+Ue*M,P=J,U=I,z=q),b=Hs(U,P),g=b*ds,b&&(M=Math.cos(b),E=Math.sin(b),J=P*M+U*E,I=$*M+H*E,U=U*M-P*E,H=H*M-$*E,P=J,$=I),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=Pt(Math.sqrt(P*P+U*U+z*z)),_=Pt(Math.sqrt(H*H+Fe*Fe)),b=Hs($,H),v=Math.abs(b)>2e-4?b*ds:0,S=Ue?1/(Ue<0?-Ue:Ue):0),i.svg&&(J=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!nS(ii(e,St)),J&&e.setAttribute("transform",J))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Pt(p),i.scaleY=Pt(_),i.rotation=Pt(g)+a,i.rotationX=Pt(m)+a,i.rotationY=Pt(d)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[An]=yc(u)),i.xOffset=i.yOffset=0,i.force3D=Bn.force3D,i.renderTransform=i.svg?iA:Qy?iS:nA,i.uncache=0,i},yc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Uf=function(e,t,i){var r=nn(t);return Pt(parseFloat(t)+parseFloat($r(e,"x",i+"px",r)))+r},nA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,iS(e,t)},ns="0deg",ha="0px",is=") ",iS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,x=i.zOrigin,S="",w=d==="auto"&&e&&e!==1||d===!0;if(x&&(f!==ns||c!==ns)){var T=parseFloat(c)*Ro,C=Math.sin(T),b=Math.cos(T),M;T=parseFloat(f)*Ro,M=Math.cos(T),o=Uf(v,o,C*M*-x),a=Uf(v,a,-Math.sin(T)*-x),l=Uf(v,l,b*M*-x+x)}m!==ha&&(S+="perspective("+m+is),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(w||o!==ha||a!==ha||l!==ha)&&(S+=l!==ha||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+is),u!==ns&&(S+="rotate("+u+is),c!==ns&&(S+="rotateY("+c+is),f!==ns&&(S+="rotateX("+f+is),(h!==ns||p!==ns)&&(S+="skew("+h+", "+p+is),(_!==1||g!==1)&&(S+="scale("+_+", "+g+is),v.style[St]=S||"translate(0, 0)"},iA=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,x=parseFloat(o),S=parseFloat(a),w,T,C,b,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ro,u*=Ro,w=Math.cos(l)*f,T=Math.sin(l)*f,C=Math.sin(l-u)*-h,b=Math.cos(l-u)*h,u&&(c*=Ro,M=Math.tan(u-c),M=Math.sqrt(1+M*M),C*=M,b*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),w*=M,T*=M)),w=Pt(w),T=Pt(T),C=Pt(C),b=Pt(b)):(w=f,b=h,T=C=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=$r(p,"x",o,"px"),S=$r(p,"y",a,"px")),(_||g||m||d)&&(x=Pt(x+_-(_*w+g*C)+m),S=Pt(S+g-(_*T+g*b)+d)),(r||s)&&(M=p.getBBox(),x=Pt(x+r/100*M.width),S=Pt(S+s/100*M.height)),M="matrix("+w+","+T+","+C+","+b+","+x+","+S+")",p.setAttribute("transform",M),v&&(p.style[St]=M)},rA=function(e,t,i,r,s){var o=360,a=Xt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ds:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*w_)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*w_)%o-~~(u/o)*o)),e._pt=h=new Tn(e._pt,t,i,r,u,VT),h.e=c,h.u="deg",e._props.push(i),h},D_=function(e,t){for(var i in t)e[i]=t[i];return e},sA=function(e,t,i){var r=D_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[St]=t,a=ul(i,1),Is(i,St),i.setAttribute("transform",u)):(u=getComputedStyle(i)[St],o[St]=t,a=ul(i,1),o[St]=u);for(l in lr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=nn(u),_=nn(c),f=p!==_?$r(i,l,u,_):parseFloat(u),h=parseFloat(c),e._pt=new Tn(e._pt,a,l,f,h-f,wh),e._pt.u=_||0,e._props.push(l));D_(a,r)};wn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});xc[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(_){return Yi(a,_,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,p,f)}});var rS={name:"css",register:Ah,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,_,g,m,d,v,x,S,w,T,C,b;Nm||Ah(),this.styles=this.styles||Zy(e),b=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(Un[g]&&By(g,t,i,r,e,s)))){if(p=typeof c,_=xc[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=sl(c)),_)_(this,e,g,c,i)&&(C=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Vr.lastIndex=0,Vr.test(u)||(m=nn(u),d=nn(c)),d?m!==d&&(u=$r(e,g,u,d)+d):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),b.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],Xt(u)&&~u.indexOf("random(")&&(u=sl(u)),nn(u+"")||u==="auto"||(u+=Bn.units[g]||nn(Yi(e,g))||""),(u+"").charAt(1)==="="&&(u=Yi(e,g))):u=Yi(e,g),h=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),g in Pi&&(g==="autoAlpha"&&(h===1&&Yi(e,"visibility")==="hidden"&&f&&(h=0),b.push("visibility",0,a.visibility),Dr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Pi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in lr,x){if(this.styles.save(g),p==="string"&&c.substring(0,6)==="var(--"&&(c=ii(e,c.substring(4,c.indexOf(")"))),f=parseFloat(c)),S||(w=e._gsap,w.renderTransform&&!t.parseTransform||ul(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new Tn(this._pt,a,St,0,1,w.renderTransform,w,0,-1),S.dep=1),g==="scale")this._pt=new Tn(this._pt,w,"scaleY",w.scaleY,(v?Ao(w.scaleY,v+f):f)-w.scaleY||0,wh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){b.push(An,0,a[An]),c=eA(c),w.svg?Ch(e,c,0,T,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==w.zOrigin&&Dr(this,w,"zOrigin",w.zOrigin,d),Dr(this,a,g,yc(u),yc(c)));continue}else if(g==="svgOrigin"){Ch(e,c,1,T,0,this);continue}else if(g in tS){rA(this,w,g,h,v?Ao(h,v+c):c);continue}else if(g==="smoothOrigin"){Dr(this,w,"smooth",w.smooth,c);continue}else if(g==="force3D"){w[g]=c;continue}else if(g==="transform"){sA(this,c,e);continue}}else g in a||(g=Go(g)||g);if(x||(f||f===0)&&(h||h===0)&&!BT.test(c)&&g in a)m=(u+"").substr((h+"").length),f||(f=0),d=nn(c)||(g in Bn.units?Bn.units[g]:m),m!==d&&(h=$r(e,g,u,d)),this._pt=new Tn(this._pt,x?w:a,g,h,(v?Ao(h,v+f):f)-h,!x&&(d==="px"||g==="zIndex")&&t.autoRound!==!1?GT:wh),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=HT);else if(g in a)JT.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){Em(g,c);continue}x||(g in a?b.push(g,0,a[g]):typeof e[g]=="function"?b.push(g,2,e[g]()):b.push(g,1,u||e[g])),o.push(g)}}C&&Xy(this)},render:function(e,t){if(t.tween._time||!Im())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Yi,aliases:Pi,getSetter:function(e,t,i){var r=Pi[t];return r&&r.indexOf(",")<0&&(t=r),t in lr&&t!==An&&(e._gsap.x||Yi(e,"x"))?i&&E_===i?t==="scale"?$T:XT:(E_=i||{})&&(t==="scale"?YT:qT):e.style&&!ym(e.style[t])?WT:~t.indexOf("-")?jT:Dm(e,t)},core:{_removeProperty:Is,_getMatrix:Fm}};bn.utils.checkPrefix=Go;bn.core.getStyleSaver=Zy;(function(n,e,t,i){var r=wn(n+","+e+","+t,function(s){lr[s]=1});wn(e,function(s){Bn.units[s]="deg",tS[s]=1}),Pi[r[13]]=n+","+e,wn(i,function(s){var o=s.split(":");Pi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Bn.units[n]="px"});bn.registerPlugin(rS);var Ot=bn.registerPlugin(rS)||bn;Ot.core.Tween;const oA=()=>{const[n,e]=B.useState(!1),[t,i]=B.useState(!1),r=B.useRef(null),s=B.useRef([]),o=B.useRef(null),a=B.useRef(!1);B.useEffect(()=>{const f=()=>e(window.scrollY>50);return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const l=()=>{if(a.current||(a.current=!0,!s.current.length))return;s.current.forEach(p=>{p&&Ot.set(p,{opacity:0,y:6,scale:.98})});const f=Ot.timeline();return f.to(s.current,{opacity:1,y:0,scale:1,duration:.06,stagger:.045,ease:"power1.out"}),f.to({},{duration:.05}),o.current=Ot.timeline({repeat:-1,yoyo:!0}),o.current.to(s.current,{y:-3,duration:.25,stagger:{each:.06,from:"center"},ease:"power1.inOut"}),f.add(o.current,"+=0"),()=>{f.kill(),o.current&&o.current.kill()}};B.useEffect(()=>{if(!document.getElementById("preloader")){l();return}const h=()=>{l(),window.removeEventListener("preloaderDone",h)};window.addEventListener("preloaderDone",h);const p=new MutationObserver(g=>{for(const m of g)if(m.removedNodes&&m.removedNodes.length){for(const d of Array.from(m.removedNodes))if(d.id==="preloader"){l(),p.disconnect(),window.removeEventListener("preloaderDone",h);return}}document.getElementById("preloader")||(l(),p.disconnect(),window.removeEventListener("preloaderDone",h))});p.observe(document.body,{childList:!0,subtree:!0});const _=window.setTimeout(()=>{l(),p.disconnect(),window.removeEventListener("preloaderDone",h)},3500);return()=>{p.disconnect(),window.removeEventListener("preloaderDone",h),clearTimeout(_)}},[]);const u=f=>(s.current=[],D.jsx("div",{ref:r,className:`inline-flex font-extrabold text-2xl sm:text-3xl lg:text-4xl ${n?"text-slate-900":"text-white"}`,children:f.split("").map((h,p)=>h===" "?D.jsx("span",{className:"mx-1"},`sp-${p}`):D.jsx("span",{ref:_=>s.current[p]=_,className:"inline-block will-change-transform",style:{opacity:1},children:h},`${h}-${p}`))})),c=f=>{const h=document.getElementById(f);h&&(h.scrollIntoView({behavior:"smooth"}),i(!1))};return D.jsx("header",{className:`fixed top-0 w-full z-50 transition-all duration-300 ${n?"bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100":"bg-transparent"}`,children:D.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[D.jsxs("div",{className:"flex justify-between items-center py-4",children:[u("ADITYA NEGI"),D.jsx("nav",{className:"hidden md:flex space-x-8",children:["Home","About","Skills","Projects","Contact"].map(f=>D.jsx("button",{onClick:()=>c(f.toLowerCase()),className:`transition-colors duration-200 font-medium ${n?"text-gray-600 hover:text-red-600":"text-gray-300 hover:text-red-400"}`,children:f},f))}),D.jsx("button",{onClick:()=>i(!t),className:`md:hidden p-2 ${n?"text-slate-900":"text-white"}`,"aria-label":t?"Close menu":"Open menu",children:t?D.jsx(Ww,{size:24}):D.jsx(Hw,{size:24})})]}),t&&D.jsx("div",{className:"md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 py-4 shadow-lg border border-gray-100",children:["Home","About","Skills","Projects","Contact"].map(f=>D.jsx("button",{onClick:()=>c(f.toLowerCase()),className:"block w-full text-left px-4 py-2 text-gray-600 hover:text-red-600",children:f},f))})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Om="180",aA=0,L_=1,lA=2,sS=1,uA=2,Wi=3,Yr=0,Cn=1,qi=2,Hr=0,bo=1,Rh=2,N_=3,I_=4,cA=5,ms=100,fA=101,dA=102,hA=103,pA=104,mA=200,gA=201,_A=202,vA=203,bh=204,Ph=205,xA=206,yA=207,SA=208,MA=209,EA=210,wA=211,TA=212,AA=213,CA=214,Dh=0,Lh=1,Nh=2,Wo=3,Ih=4,Uh=5,Fh=6,Oh=7,oS=0,RA=1,bA=2,Gr=0,PA=1,DA=2,LA=3,NA=4,IA=5,UA=6,FA=7,aS=300,jo=301,Xo=302,kh=303,zh=304,Yc=306,Bh=1e3,vi=1001,Vh=1002,Vn=1003,OA=1004,Kl=1005,xn=1006,Ff=1007,Ss=1008,ur=1009,lS=1010,uS=1011,cl=1012,km=1013,Us=1014,Di=1015,ea=1016,zm=1017,Bm=1018,fl=1020,cS=35902,fS=35899,dS=1021,hS=1022,ri=1023,dl=1026,hl=1027,pS=1028,Vm=1029,mS=1030,Hm=1031,Gm=1033,ku=33776,zu=33777,Bu=33778,Vu=33779,Hh=35840,Gh=35841,Wh=35842,jh=35843,Xh=36196,$h=37492,Yh=37496,qh=37808,Kh=37809,Zh=37810,Qh=37811,Jh=37812,ep=37813,tp=37814,np=37815,ip=37816,rp=37817,sp=37818,op=37819,ap=37820,lp=37821,up=36492,cp=36494,fp=36495,dp=36283,hp=36284,pp=36285,mp=36286,kA=3200,zA=3201,BA=0,VA=1,Ar="",Zn="srgb",$o="srgb-linear",Sc="linear",rt="srgb",Gs=7680,U_=519,HA=512,GA=513,WA=514,gS=515,jA=516,XA=517,$A=518,YA=519,F_=35044,O_="300 es",Li=2e3,Mc=2001;class ta{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Of=Math.PI/180,gp=180/Math.PI;function wl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function qA(n,e){return(n%e+e)%e}function kf(n,e,t){return(1-t)*n+t*e}function pa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||u!==p||c!==_){let m=1-a;const d=l*h+u*p+c*_+f*g,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const w=Math.sqrt(x),T=Math.atan2(w,d*v);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const S=a*v;if(l=l*m+h*S,u=u*m+p*S,c=c*m+_*S,f=f*m+g*S,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*p-u*h,e[t+1]=l*_+c*h+u*f-a*p,e[t+2]=u*_+c*p+a*h-l*f,e[t+3]=c*_-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(k_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(k_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zf.copy(this).projectOnVector(e),this.sub(zf)}reflect(e){return this.sub(zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zf=new j,k_=new Tl;class He{constructor(e,t,i,r,s,o,a,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],g=r[0],m=r[3],d=r[6],v=r[1],x=r[4],S=r[7],w=r[2],T=r[5],C=r[8];return s[0]=o*g+a*v+l*w,s[3]=o*m+a*x+l*T,s[6]=o*d+a*S+l*C,s[1]=u*g+c*v+f*w,s[4]=u*m+c*x+f*T,s[7]=u*d+c*S+f*C,s[2]=h*g+p*v+_*w,s[5]=h*m+p*x+_*T,s[8]=h*d+p*S+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bf.makeScale(e,t)),this}rotate(e){return this.premultiply(Bf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bf=new He;function _S(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ec(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function KA(){const n=Ec("canvas");return n.style.display="block",n}const z_={};function pl(n){n in z_||(z_[n]=!0,console.warn(n))}function ZA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const B_=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QA(){const n={enabled:!0,workingColorSpace:$o,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=Po(r.r),r.g=Po(r.g),r.b=Po(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ar?Sc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$o]:{primaries:e,whitePoint:i,transfer:Sc,toXYZ:B_,fromXYZ:V_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:B_,fromXYZ:V_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),n}const Je=QA();function er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Po(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ws;class JA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ws===void 0&&(Ws=Ec("canvas")),Ws.width=e.width,Ws.height=e.height;const r=Ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ec("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=er(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(er(t[i]/255)*255):t[i]=er(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eC=0;class Wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eC++}),this.uuid=wl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vf(r[o].image)):s.push(Vf(r[o]))}else s=Vf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Vf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?JA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tC=0;const Hf=new j;class fn extends ta{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=vi,r=vi,s=xn,o=Ss,a=ri,l=ur,u=fn.DEFAULT_ANISOTROPY,c=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tC++}),this.uuid=wl(),this.name="",this.source=new Wm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hf).x}get height(){return this.source.getSize(Hf).y}get depth(){return this.source.getSize(Hf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==aS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=aS;fn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,w=(d+1)/2,T=(c+h)/4,C=(f+g)/4,b=(_+m)/4;return x>S&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=C/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=b/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=b/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-g)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nC extends ta{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new fn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Wm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends nC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vS extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iC extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(s,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zl.copy(i.boundingBox)),Zl.applyMatrix4(e.matrixWorld),this.union(Zl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Ql.subVectors(this.max,ma),js.subVectors(e.a,ma),Xs.subVectors(e.b,ma),$s.subVectors(e.c,ma),gr.subVectors(Xs,js),_r.subVectors($s,Xs),rs.subVectors(js,$s);let t=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-rs.z,rs.y,gr.z,0,-gr.x,_r.z,0,-_r.x,rs.z,0,-rs.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-rs.y,rs.x,0];return!Gf(t,js,Xs,$s,Ql)||(t=[1,0,0,0,1,0,0,0,1],!Gf(t,js,Xs,$s,Ql))?!1:(Jl.crossVectors(gr,_r),t=[Jl.x,Jl.y,Jl.z],Gf(t,js,Xs,$s,Ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zi=[new j,new j,new j,new j,new j,new j,new j,new j],ci=new j,Zl=new Al,js=new j,Xs=new j,$s=new j,gr=new j,_r=new j,rs=new j,ma=new j,Ql=new j,Jl=new j,ss=new j;function Gf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ss.fromArray(n,s);const a=r.x*Math.abs(ss.x)+r.y*Math.abs(ss.y)+r.z*Math.abs(ss.z),l=e.dot(ss),u=t.dot(ss),c=i.dot(ss);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const rC=new Al,ga=new j,Wf=new j;class qc{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Wf)),this.expandByPoint(ga.copy(e.center).sub(Wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bi=new j,jf=new j,eu=new j,vr=new j,Xf=new j,tu=new j,$f=new j;class xS{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jf.copy(e).add(t).multiplyScalar(.5),eu.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(jf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(eu),a=vr.dot(this.direction),l=-vr.dot(eu),u=vr.lengthSq(),c=Math.abs(1-o*o);let f,h,p,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const g=1/c;f*=g,h*=g,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(jf).addScaledVector(eu,h),p}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const i=Bi.dot(this.direction),r=Bi.dot(Bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,r,s){Xf.subVectors(t,e),tu.subVectors(i,e),$f.crossVectors(Xf,tu);let o=this.direction.dot($f),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vr.subVectors(this.origin,e);const l=a*this.direction.dot(tu.crossVectors(vr,tu));if(l<0)return null;const u=a*this.direction.dot(Xf.cross(vr));if(u<0||l+u>o)return null;const c=-a*vr.dot($f);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,_,g,m){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ys.setFromMatrixColumn(e,0).length(),s=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,_=a*c,g=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=h-g*u,t[9]=-a*l,t[2]=g-h*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,g=u*f;t[0]=h+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,g=u*f;t[0]=h-g*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,_=a*c,g=a*f;t[0]=l*c,t[4]=_*u-p,t[8]=h*u+g,t[1]=l*f,t[5]=g*u+h,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+g,t[5]=o*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sC,e,oC)}lookAt(e,t,i){const r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),xr.crossVectors(i,Ln),xr.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),xr.crossVectors(i,Ln)),xr.normalize(),nu.crossVectors(Ln,xr),r[0]=xr.x,r[4]=nu.x,r[8]=Ln.x,r[1]=xr.y,r[5]=nu.y,r[9]=Ln.y,r[2]=xr.z,r[6]=nu.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],g=i[6],m=i[10],d=i[14],v=i[3],x=i[7],S=i[11],w=i[15],T=r[0],C=r[4],b=r[8],M=r[12],E=r[1],P=r[5],U=r[9],z=r[13],G=r[2],$=r[6],H=r[10],J=r[14],I=r[3],q=r[7],Q=r[11],le=r[15];return s[0]=o*T+a*E+l*G+u*I,s[4]=o*C+a*P+l*$+u*q,s[8]=o*b+a*U+l*H+u*Q,s[12]=o*M+a*z+l*J+u*le,s[1]=c*T+f*E+h*G+p*I,s[5]=c*C+f*P+h*$+p*q,s[9]=c*b+f*U+h*H+p*Q,s[13]=c*M+f*z+h*J+p*le,s[2]=_*T+g*E+m*G+d*I,s[6]=_*C+g*P+m*$+d*q,s[10]=_*b+g*U+m*H+d*Q,s[14]=_*M+g*z+m*J+d*le,s[3]=v*T+x*E+S*G+w*I,s[7]=v*C+x*P+S*$+w*q,s[11]=v*b+x*U+S*H+w*Q,s[15]=v*M+x*z+S*J+w*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+g*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],d=e[15],v=f*m*u-g*h*u+g*l*p-a*m*p-f*l*d+a*h*d,x=_*h*u-c*m*u-_*l*p+o*m*p+c*l*d-o*h*d,S=c*g*u-_*f*u+_*a*p-o*g*p-c*a*d+o*f*d,w=_*f*l-c*g*l-_*a*h+o*g*h+c*a*m-o*f*m,T=t*v+i*x+r*S+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(g*h*s-f*m*s-g*r*p+i*m*p+f*r*d-i*h*d)*C,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*d+i*l*d)*C,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*C,e[4]=x*C,e[5]=(c*m*s-_*h*s+_*r*p-t*m*p-c*r*d+t*h*d)*C,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*d-t*l*d)*C,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*C,e[8]=S*C,e[9]=(_*f*s-c*g*s-_*i*p+t*g*p+c*i*d-t*f*d)*C,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*d+t*a*d)*C,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*C,e[12]=w*C,e[13]=(c*g*r-_*f*r+_*i*h-t*g*h-c*i*m+t*f*m)*C,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*C,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,_=s*f,g=o*c,m=o*f,d=a*f,v=l*u,x=l*c,S=l*f,w=i.x,T=i.y,C=i.z;return r[0]=(1-(g+d))*w,r[1]=(p+S)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(h+d))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(_+x)*C,r[9]=(m-v)*C,r[10]=(1-(h+g))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ys.set(r[0],r[1],r[2]).length();const o=Ys.set(r[4],r[5],r[6]).length(),a=Ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fi.copy(this);const u=1/s,c=1/o,f=1/a;return fi.elements[0]*=u,fi.elements[1]*=u,fi.elements[2]*=u,fi.elements[4]*=c,fi.elements[5]*=c,fi.elements[6]*=c,fi.elements[8]*=f,fi.elements[9]*=f,fi.elements[10]*=f,t.setFromRotationMatrix(fi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Li,l=!1){const u=this.elements,c=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let _,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===Li)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Mc)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Li,l=!1){const u=this.elements,c=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===Li)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Mc)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ys=new j,fi=new Ft,sC=new j(0,0,0),oC=new j(1,1,1),xr=new j,nu=new j,Ln=new j,H_=new Ft,G_=new Tl;class cr{constructor(e=0,t=0,i=0,r=cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return H_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(H_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return G_.setFromEuler(this),this.setFromQuaternion(G_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cr.DEFAULT_ORDER="XYZ";class yS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aC=0;const W_=new j,qs=new Tl,Vi=new Ft,iu=new j,_a=new j,lC=new j,uC=new Tl,j_=new j(1,0,0),X_=new j(0,1,0),$_=new j(0,0,1),Y_={type:"added"},cC={type:"removed"},Ks={type:"childadded",child:null},Yf={type:"childremoved",child:null};class Rn extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aC++}),this.uuid=wl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new j,t=new cr,i=new Tl,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new He}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(j_,e)}rotateY(e){return this.rotateOnAxis(X_,e)}rotateZ(e){return this.rotateOnAxis($_,e)}translateOnAxis(e,t){return W_.copy(e).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(j_,e)}translateY(e){return this.translateOnAxis(X_,e)}translateZ(e){return this.translateOnAxis($_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?iu.copy(e):iu.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(_a,iu,this.up):Vi.lookAt(iu,_a,this.up),this.quaternion.setFromRotationMatrix(Vi),r&&(Vi.extractRotation(r.matrixWorld),qs.setFromRotationMatrix(Vi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Y_),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cC),Yf.child=e,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Y_),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,lC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,uC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rn.DEFAULT_UP=new j(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new j,Hi=new j,qf=new j,Gi=new j,Zs=new j,Qs=new j,q_=new j,Kf=new j,Zf=new j,Qf=new j,Jf=new Ct,ed=new Ct,td=new Ct;class _i{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),di.subVectors(e,t),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){di.subVectors(r,t),Hi.subVectors(i,t),qf.subVectors(e,t);const o=di.dot(di),a=di.dot(Hi),l=di.dot(qf),u=Hi.dot(Hi),c=Hi.dot(qf),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Jf.setScalar(0),ed.setScalar(0),td.setScalar(0),Jf.fromBufferAttribute(e,t),ed.fromBufferAttribute(e,i),td.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Jf,s.x),o.addScaledVector(ed,s.y),o.addScaledVector(td,s.z),o}static isFrontFacing(e,t,i,r){return di.subVectors(i,t),Hi.subVectors(e,t),di.cross(Hi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),di.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return _i.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Zs.subVectors(r,i),Qs.subVectors(s,i),Kf.subVectors(e,i);const l=Zs.dot(Kf),u=Qs.dot(Kf);if(l<=0&&u<=0)return t.copy(i);Zf.subVectors(e,r);const c=Zs.dot(Zf),f=Qs.dot(Zf);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Zs,o);Qf.subVectors(e,s);const p=Zs.dot(Qf),_=Qs.dot(Qf);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Qs,a);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return q_.subVectors(s,r),a=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(q_,a);const d=1/(m+g+h);return o=g*d,a=h*d,t.copy(i).addScaledVector(Zs,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const SS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},ru={h:0,s:0,l:0};function nd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=qA(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=nd(o,s,e+1/3),this.g=nd(o,s,e),this.b=nd(o,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){const i=SS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Je.workingToColorSpace(en.copy(this),e),Math.round(Ye(en.r*255,0,255))*65536+Math.round(Ye(en.g*255,0,255))*256+Math.round(Ye(en.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(en.copy(this),t);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Zn){Je.workingToColorSpace(en.copy(this),e);const t=en.r,i=en.g,r=en.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(ru);const i=kf(yr.h,ru.h,t),r=kf(yr.s,ru.s,t),s=kf(yr.l,ru.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new et;et.NAMES=SS;let fC=0;class Cl extends ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fC++}),this.uuid=wl(),this.name="",this.type="Material",this.blending=bo,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Ph,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(i.blending=this.blending),this.side!==Yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bh&&(i.blendSrc=this.blendSrc),this.blendDst!==Ph&&(i.blendDst=this.blendDst),this.blendEquation!==ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MS extends Cl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=oS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new j,su=new ze;let dC=0;class Si{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=F_,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)su.fromBufferAttribute(this,t),su.applyMatrix3(e),this.setXY(t,su.x,su.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pa(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pa(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pa(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==F_&&(e.usage=this.usage),e}}class ES extends Si{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wS extends Si{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tr extends Si{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hC=0;const qn=new Ft,id=new Rn,Js=new j,Nn=new Al,va=new Al,Gt=new j;class pr extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hC++}),this.uuid=wl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_S(e)?wS:ES)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,i){return qn.makeTranslation(e,t,i),this.applyMatrix4(qn),this}scale(e,t,i){return qn.makeScale(e,t,i),this.applyMatrix4(qn),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];va.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Nn.min,va.min),Nn.expandByPoint(Gt),Gt.addVectors(Nn.max,va.max),Nn.expandByPoint(Gt)):(Nn.expandByPoint(va.min),Nn.expandByPoint(va.max))}Nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Gt.fromBufferAttribute(a,u),l&&(Js.fromBufferAttribute(e,u),Gt.add(Js)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new j,l[b]=new j;const u=new j,c=new j,f=new j,h=new ze,p=new ze,_=new ze,g=new j,m=new j;function d(b,M,E){u.fromBufferAttribute(i,b),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,E),c.sub(u),f.sub(u),p.sub(h),_.sub(h);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(P),a[b].add(g),a[M].add(g),a[E].add(g),l[b].add(m),l[M].add(m),l[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,M=v.length;b<M;++b){const E=v[b],P=E.start,U=E.count;for(let z=P,G=P+U;z<G;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new j,S=new j,w=new j,T=new j;function C(b){w.fromBufferAttribute(r,b),T.copy(w);const M=a[b];x.copy(M),x.sub(w.multiplyScalar(w.dot(M))).normalize(),S.crossVectors(T,M);const P=S.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,P)}for(let b=0,M=v.length;b<M;++b){const E=v[b],P=E.start,U=E.count;for(let z=P,G=P+U;z<G;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,u=new j,c=new j,f=new j;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new Si(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const K_=new Ft,os=new xS,ou=new qc,Z_=new j,au=new j,lu=new j,uu=new j,rd=new j,cu=new j,Q_=new j,fu=new j;class si extends Rn{constructor(e=new pr,t=new MS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){cu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(rd.fromBufferAttribute(f,e),o?cu.addScaledVector(rd,c):cu.addScaledVector(rd.sub(t),c))}t.add(cu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ou.copy(i.boundingSphere),ou.applyMatrix4(s),os.copy(e.ray).recast(e.near),!(ou.containsPoint(os.origin)===!1&&(os.intersectSphere(ou,Z_)===null||os.origin.distanceToSquared(Z_)>(e.far-e.near)**2))&&(K_.copy(s).invert(),os.copy(e.ray).applyMatrix4(K_),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,w=x;S<w;S+=3){const T=a.getX(S),C=a.getX(S+1),b=a.getX(S+2);r=du(this,d,e,i,u,c,f,T,C,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=du(this,o,e,i,u,c,f,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,w=x;S<w;S+=3){const T=S,C=S+1,b=S+2;r=du(this,d,e,i,u,c,f,T,C,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const v=m,x=m+1,S=m+2;r=du(this,o,e,i,u,c,f,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function pC(n,e,t,i,r,s,o,a){let l;if(e.side===Cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yr,a),l===null)return null;fu.copy(a),fu.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(fu);return u<t.near||u>t.far?null:{distance:u,point:fu.clone(),object:n}}function du(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,au),n.getVertexPosition(l,lu),n.getVertexPosition(u,uu);const c=pC(n,e,t,i,au,lu,uu,Q_);if(c){const f=new j;_i.getBarycoord(Q_,au,lu,uu,f),r&&(c.uv=_i.getInterpolatedAttribute(r,a,l,u,f,new ze)),s&&(c.uv1=_i.getInterpolatedAttribute(s,a,l,u,f,new ze)),o&&(c.normal=_i.getInterpolatedAttribute(o,a,l,u,f,new j),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new j,materialIndex:0};_i.getNormal(au,lu,uu,h.normal),c.face=h,c.barycoord=f}return c}class Rl extends pr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tr(u,3)),this.setAttribute("normal",new tr(c,3)),this.setAttribute("uv",new tr(f,2));function _(g,m,d,v,x,S,w,T,C,b,M){const E=S/C,P=w/b,U=S/2,z=w/2,G=T/2,$=C+1,H=b+1;let J=0,I=0;const q=new j;for(let Q=0;Q<H;Q++){const le=Q*P-z;for(let _e=0;_e<$;_e++){const je=_e*E-U;q[g]=je*v,q[m]=le*x,q[d]=G,u.push(q.x,q.y,q.z),q[g]=0,q[m]=0,q[d]=T>0?1:-1,c.push(q.x,q.y,q.z),f.push(_e/C),f.push(1-Q/b),J+=1}}for(let Q=0;Q<b;Q++)for(let le=0;le<C;le++){const _e=h+le+$*Q,je=h+le+$*(Q+1),Ue=h+(le+1)+$*(Q+1),Fe=h+(le+1)+$*Q;l.push(_e,je,Fe),l.push(je,Ue,Fe),I+=6}a.addGroup(p,I,M),p+=I,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=Yo(n[t]);for(const r in i)e[r]=i[r]}return e}function mC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function TS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const gC={clone:Yo,merge:an};var _C=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends Cl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_C,this.fragmentShader=vC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=mC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wc extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new j,J_=new ze,e0=new ze;class gi extends wc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Of*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gp*2*Math.atan(Math.tan(Of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,J_,e0),t.subVectors(e0,J_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Of*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const eo=-90,to=1;class xC extends Rn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gi(eo,to,e,t);r.layers=this.layers,this.add(r);const s=new gi(eo,to,e,t);s.layers=this.layers,this.add(s);const o=new gi(eo,to,e,t);o.layers=this.layers,this.add(o);const a=new gi(eo,to,e,t);a.layers=this.layers,this.add(a);const l=new gi(eo,to,e,t);l.layers=this.layers,this.add(l);const u=new gi(eo,to,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class AS extends fn{constructor(e=[],t=jo,i,r,s,o,a,l,u,c){super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yC extends qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new AS(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rl(5,5,5),s=new fr({name:"CubemapFromEquirect",uniforms:Yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Hr});s.uniforms.tEquirect.value=t;const o=new si(r,s),a=t.minFilter;return t.minFilter===Ss&&(t.minFilter=xn),new xC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class hu extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SC={type:"move"};class sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),d=this._getHandJoint(u,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new hu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class t0 extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class MC extends fn{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Vn,c=Vn,f,h){super(null,o,a,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const od=new j,EC=new j,wC=new He;class hs{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=od.subVectors(i,t).cross(EC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(od),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wC.getNormalMatrix(e),r=this.coplanarPoint(od).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new qc,TC=new ze(.5,.5),pu=new j;class CS{constructor(e=new hs,t=new hs,i=new hs,r=new hs,s=new hs,o=new hs){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],f=s[5],h=s[6],p=s[7],_=s[8],g=s[9],m=s[10],d=s[11],v=s[12],x=s[13],S=s[14],w=s[15];if(r[0].setComponents(u-o,p-c,d-_,w-v).normalize(),r[1].setComponents(u+o,p+c,d+_,w+v).normalize(),r[2].setComponents(u+a,p+f,d+g,w+x).normalize(),r[3].setComponents(u-a,p-f,d-g,w-x).normalize(),i)r[4].setComponents(l,h,m,S).normalize(),r[5].setComponents(u-l,p-h,d-m,w-S).normalize();else if(r[4].setComponents(u-l,p-h,d-m,w-S).normalize(),t===Li)r[5].setComponents(u+l,p+h,d+m,w+S).normalize();else if(t===Mc)r[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const t=TC.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(pu.x=r.normal.x>0?e.max.x:e.min.x,pu.y=r.normal.y>0?e.max.y:e.min.y,pu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class AC extends Cl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new j,Ac=new j,n0=new Ft,xa=new xS,mu=new qc,ad=new j,i0=new j;class CC extends Rn{constructor(e=new pr,t=new AC){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Tc.fromBufferAttribute(t,r-1),Ac.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Tc.distanceTo(Ac);e.setAttribute("lineDistance",new tr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mu.copy(i.boundingSphere),mu.applyMatrix4(r),mu.radius+=s,e.ray.intersectsSphere(mu)===!1)return;n0.copy(r).invert(),xa.copy(e.ray).applyMatrix4(n0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=u){const d=c.getX(g),v=c.getX(g+1),x=gu(this,e,xa,l,d,v,g);x&&t.push(x)}if(this.isLineLoop){const g=c.getX(_-1),m=c.getX(p),d=gu(this,e,xa,l,g,m,_-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=u){const d=gu(this,e,xa,l,g,g+1,g);d&&t.push(d)}if(this.isLineLoop){const g=gu(this,e,xa,l,_-1,p,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gu(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Tc.fromBufferAttribute(a,r),Ac.fromBufferAttribute(a,s),t.distanceSqToSegment(Tc,Ac,ad,i0)>i)return;ad.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(ad);if(!(u<e.near||u>e.far))return{distance:u,point:i0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const r0=new j,s0=new j;class RC extends CC{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)r0.fromBufferAttribute(t,r),s0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+r0.distanceTo(s0);e.setAttribute("lineDistance",new tr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class RS extends fn{constructor(e,t,i=Us,r,s,o,a=Vn,l=Vn,u,c=dl,f=1){if(c!==dl&&c!==hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bS extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rs extends pr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],_=[],g=[],m=[];for(let d=0;d<c;d++){const v=d*h-o;for(let x=0;x<u;x++){const S=x*f-s;_.push(S,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+u*d,S=v+u*(d+1),w=v+1+u*(d+1),T=v+1+u*d;p.push(x,S,T),p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new tr(_,3)),this.setAttribute("normal",new tr(g,3)),this.setAttribute("uv",new tr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class _u extends fr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bC extends Cl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PC extends Cl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class DC extends wc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class LC extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class NC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function o0(n,e,t,i){const r=IC(i);switch(t){case dS:return n*e;case pS:return n*e/r.components*r.byteLength;case Vm:return n*e/r.components*r.byteLength;case mS:return n*e*2/r.components*r.byteLength;case Hm:return n*e*2/r.components*r.byteLength;case hS:return n*e*3/r.components*r.byteLength;case ri:return n*e*4/r.components*r.byteLength;case Gm:return n*e*4/r.components*r.byteLength;case ku:case zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bu:case Vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gh:case jh:return Math.max(n,16)*Math.max(e,8)/4;case Hh:case Wh:return Math.max(n,8)*Math.max(e,8)/2;case Xh:case $h:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ep:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case np:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ip:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case op:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ap:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case up:case cp:case fp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dp:case hp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pp:case mp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function IC(n){switch(n){case ur:case lS:return{byteLength:1,components:1};case cl:case uS:case ea:return{byteLength:2,components:1};case zm:case Bm:return{byteLength:2,components:4};case Us:case km:case Di:return{byteLength:4,components:1};case cS:case fS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Om}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Om);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function PS(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function UC(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],g=f[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const g=f[p];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var FC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OC=`#ifdef USE_ALPHAHASH
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
#endif`,kC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HC=`#ifdef USE_AOMAP
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
#endif`,GC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WC=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$C=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qC=`#ifdef USE_IRIDESCENCE
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
#endif`,KC=`#ifdef USE_BUMPMAP
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
#endif`,ZC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sR=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,oR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aR=`vec3 transformedNormal = objectNormal;
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
#endif`,lR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dR="gl_FragColor = linearToOutputTexel( gl_FragColor );",hR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pR=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gR=`#ifdef USE_ENVMAP
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
#endif`,_R=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vR=`#ifdef USE_ENVMAP
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
#endif`,xR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ER=`#ifdef USE_GRADIENTMAP
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
}`,wR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CR=`uniform bool receiveShadow;
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
#endif`,RR=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,bR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,IR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UR=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,FR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,OR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jR=`#if defined( USE_POINTS_UV )
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
#endif`,XR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$R=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZR=`#ifdef USE_MORPHTARGETS
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
#endif`,QR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rb=`#ifdef USE_NORMALMAP
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
#endif`,sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_b=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yb=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mb=`#ifdef USE_SKINNING
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
#endif`,Eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wb=`#ifdef USE_SKINNING
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
#endif`,Tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ab=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bb=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pb=`#ifdef USE_TRANSMISSION
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
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fb=`uniform sampler2D t2D;
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
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`#include <common>
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
}`,Hb=`#if DEPTH_PACKING == 3200
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
}`,Gb=`#define DISTANCE
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
}`,Wb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`uniform float scale;
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
}`,Yb=`uniform vec3 diffuse;
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
}`,qb=`#include <common>
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
}`,Kb=`uniform vec3 diffuse;
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
}`,Zb=`#define LAMBERT
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
}`,Qb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Jb=`#define MATCAP
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
}`,e2=`#define MATCAP
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
}`,t2=`#define NORMAL
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
}`,n2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i2=`#define PHONG
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
}`,r2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,s2=`#define STANDARD
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
}`,o2=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,a2=`#define TOON
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
}`,l2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,u2=`uniform float size;
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
}`,c2=`uniform vec3 diffuse;
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
}`,f2=`#include <common>
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
}`,d2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,h2=`uniform float rotation;
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
}`,p2=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:FC,alphahash_pars_fragment:OC,alphamap_fragment:kC,alphamap_pars_fragment:zC,alphatest_fragment:BC,alphatest_pars_fragment:VC,aomap_fragment:HC,aomap_pars_fragment:GC,batching_pars_vertex:WC,batching_vertex:jC,begin_vertex:XC,beginnormal_vertex:$C,bsdfs:YC,iridescence_fragment:qC,bumpmap_pars_fragment:KC,clipping_planes_fragment:ZC,clipping_planes_pars_fragment:QC,clipping_planes_pars_vertex:JC,clipping_planes_vertex:eR,color_fragment:tR,color_pars_fragment:nR,color_pars_vertex:iR,color_vertex:rR,common:sR,cube_uv_reflection_fragment:oR,defaultnormal_vertex:aR,displacementmap_pars_vertex:lR,displacementmap_vertex:uR,emissivemap_fragment:cR,emissivemap_pars_fragment:fR,colorspace_fragment:dR,colorspace_pars_fragment:hR,envmap_fragment:pR,envmap_common_pars_fragment:mR,envmap_pars_fragment:gR,envmap_pars_vertex:_R,envmap_physical_pars_fragment:RR,envmap_vertex:vR,fog_vertex:xR,fog_pars_vertex:yR,fog_fragment:SR,fog_pars_fragment:MR,gradientmap_pars_fragment:ER,lightmap_pars_fragment:wR,lights_lambert_fragment:TR,lights_lambert_pars_fragment:AR,lights_pars_begin:CR,lights_toon_fragment:bR,lights_toon_pars_fragment:PR,lights_phong_fragment:DR,lights_phong_pars_fragment:LR,lights_physical_fragment:NR,lights_physical_pars_fragment:IR,lights_fragment_begin:UR,lights_fragment_maps:FR,lights_fragment_end:OR,logdepthbuf_fragment:kR,logdepthbuf_pars_fragment:zR,logdepthbuf_pars_vertex:BR,logdepthbuf_vertex:VR,map_fragment:HR,map_pars_fragment:GR,map_particle_fragment:WR,map_particle_pars_fragment:jR,metalnessmap_fragment:XR,metalnessmap_pars_fragment:$R,morphinstance_vertex:YR,morphcolor_vertex:qR,morphnormal_vertex:KR,morphtarget_pars_vertex:ZR,morphtarget_vertex:QR,normal_fragment_begin:JR,normal_fragment_maps:eb,normal_pars_fragment:tb,normal_pars_vertex:nb,normal_vertex:ib,normalmap_pars_fragment:rb,clearcoat_normal_fragment_begin:sb,clearcoat_normal_fragment_maps:ob,clearcoat_pars_fragment:ab,iridescence_pars_fragment:lb,opaque_fragment:ub,packing:cb,premultiplied_alpha_fragment:fb,project_vertex:db,dithering_fragment:hb,dithering_pars_fragment:pb,roughnessmap_fragment:mb,roughnessmap_pars_fragment:gb,shadowmap_pars_fragment:_b,shadowmap_pars_vertex:vb,shadowmap_vertex:xb,shadowmask_pars_fragment:yb,skinbase_vertex:Sb,skinning_pars_vertex:Mb,skinning_vertex:Eb,skinnormal_vertex:wb,specularmap_fragment:Tb,specularmap_pars_fragment:Ab,tonemapping_fragment:Cb,tonemapping_pars_fragment:Rb,transmission_fragment:bb,transmission_pars_fragment:Pb,uv_pars_fragment:Db,uv_pars_vertex:Lb,uv_vertex:Nb,worldpos_vertex:Ib,background_vert:Ub,background_frag:Fb,backgroundCube_vert:Ob,backgroundCube_frag:kb,cube_vert:zb,cube_frag:Bb,depth_vert:Vb,depth_frag:Hb,distanceRGBA_vert:Gb,distanceRGBA_frag:Wb,equirect_vert:jb,equirect_frag:Xb,linedashed_vert:$b,linedashed_frag:Yb,meshbasic_vert:qb,meshbasic_frag:Kb,meshlambert_vert:Zb,meshlambert_frag:Qb,meshmatcap_vert:Jb,meshmatcap_frag:e2,meshnormal_vert:t2,meshnormal_frag:n2,meshphong_vert:i2,meshphong_frag:r2,meshphysical_vert:s2,meshphysical_frag:o2,meshtoon_vert:a2,meshtoon_frag:l2,points_vert:u2,points_frag:c2,shadow_vert:f2,shadow_frag:d2,sprite_vert:h2,sprite_frag:p2},de={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Ci={basic:{uniforms:an([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:an([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new et(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:an([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:an([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:an([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new et(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:an([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:an([de.points,de.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:an([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:an([de.common,de.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:an([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:an([de.sprite,de.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:an([de.common,de.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:an([de.lights,de.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Ci.physical={uniforms:an([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const vu={r:0,b:0,g:0},ls=new cr,m2=new Ft;function g2(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S)),S}function g(x){let S=!1;const w=_(x);w===null?d(a,l):w&&w.isColor&&(d(w,1),S=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,S){const w=_(S);w&&(w.isCubeTexture||w.mapping===Yc)?(c===void 0&&(c=new si(new Rl(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:Yo(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ls.copy(S.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(m2.makeRotationFromEuler(ls)),c.material.toneMapped=Je.getTransfer(w.colorSpace)!==rt,(f!==w||h!==w.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new si(new Rs(2,2),new fr({name:"BackgroundMaterial",uniforms:Yo(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=Je.getTransfer(w.colorSpace)!==rt,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function d(x,S){x.getRGB(vu,TS(n)),i.buffers.color.setClear(vu.r,vu.g,vu.b,S,o)}function v(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),l=S,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(a,l)},render:g,addToRenderList:m,dispose:v}}function _2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,P,U,z,G){let $=!1;const H=f(z,U,P);s!==H&&(s=H,u(s.object)),$=p(E,z,U,G),$&&_(E,z,U,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(E,P,U,z),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function u(E){return n.bindVertexArray(E)}function c(E){return n.deleteVertexArray(E)}function f(E,P,U){const z=U.wireframe===!0;let G=i[E.id];G===void 0&&(G={},i[E.id]=G);let $=G[P.id];$===void 0&&($={},G[P.id]=$);let H=$[z];return H===void 0&&(H=h(l()),$[z]=H),H}function h(E){const P=[],U=[],z=[];for(let G=0;G<t;G++)P[G]=0,U[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:z,object:E,attributes:{},index:null}}function p(E,P,U,z){const G=s.attributes,$=P.attributes;let H=0;const J=U.getAttributes();for(const I in J)if(J[I].location>=0){const Q=G[I];let le=$[I];if(le===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(le=E.instanceColor)),Q===void 0||Q.attribute!==le||le&&Q.data!==le.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function _(E,P,U,z){const G={},$=P.attributes;let H=0;const J=U.getAttributes();for(const I in J)if(J[I].location>=0){let Q=$[I];Q===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor));const le={};le.attribute=Q,Q&&Q.data&&(le.data=Q.data),G[I]=le,H++}s.attributes=G,s.attributesNum=H,s.index=z}function g(){const E=s.newAttributes;for(let P=0,U=E.length;P<U;P++)E[P]=0}function m(E){d(E,0)}function d(E,P){const U=s.newAttributes,z=s.enabledAttributes,G=s.attributeDivisors;U[E]=1,z[E]===0&&(n.enableVertexAttribArray(E),z[E]=1),G[E]!==P&&(n.vertexAttribDivisor(E,P),G[E]=P)}function v(){const E=s.newAttributes,P=s.enabledAttributes;for(let U=0,z=P.length;U<z;U++)P[U]!==E[U]&&(n.disableVertexAttribArray(U),P[U]=0)}function x(E,P,U,z,G,$,H){H===!0?n.vertexAttribIPointer(E,P,U,G,$):n.vertexAttribPointer(E,P,U,z,G,$)}function S(E,P,U,z){g();const G=z.attributes,$=U.getAttributes(),H=P.defaultAttributeValues;for(const J in $){const I=$[J];if(I.location>=0){let q=G[J];if(q===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(q=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(q=E.instanceColor)),q!==void 0){const Q=q.normalized,le=q.itemSize,_e=e.get(q);if(_e===void 0)continue;const je=_e.buffer,Ue=_e.type,Fe=_e.bytesPerElement,Z=Ue===n.INT||Ue===n.UNSIGNED_INT||q.gpuType===km;if(q.isInterleavedBufferAttribute){const te=q.data,me=te.stride,Ne=q.offset;if(te.isInstancedInterleavedBuffer){for(let Ae=0;Ae<I.locationSize;Ae++)d(I.location+Ae,te.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ae=0;Ae<I.locationSize;Ae++)m(I.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Ae=0;Ae<I.locationSize;Ae++)x(I.location+Ae,le/I.locationSize,Ue,Q,me*Fe,(Ne+le/I.locationSize*Ae)*Fe,Z)}else{if(q.isInstancedBufferAttribute){for(let te=0;te<I.locationSize;te++)d(I.location+te,q.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let te=0;te<I.locationSize;te++)m(I.location+te);n.bindBuffer(n.ARRAY_BUFFER,je);for(let te=0;te<I.locationSize;te++)x(I.location+te,le/I.locationSize,Ue,Q,le*Fe,le/I.locationSize*te*Fe,Z)}}else if(H!==void 0){const Q=H[J];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(I.location,Q);break;case 3:n.vertexAttrib3fv(I.location,Q);break;case 4:n.vertexAttrib4fv(I.location,Q);break;default:n.vertexAttrib1fv(I.location,Q)}}}}v()}function w(){b();for(const E in i){const P=i[E];for(const U in P){const z=P[U];for(const G in z)c(z[G].object),delete z[G];delete P[U]}delete i[E]}}function T(E){if(i[E.id]===void 0)return;const P=i[E.id];for(const U in P){const z=P[U];for(const G in z)c(z[G].object),delete z[G];delete P[U]}delete i[E.id]}function C(E){for(const P in i){const U=i[P];if(U[E.id]===void 0)continue;const z=U[E.id];for(const G in z)c(z[G].object),delete z[G];delete U[E.id]}}function b(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function v2(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];t.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=c[g]*h[g];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function x2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==ri&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const b=C===ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ur&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Di&&!b)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:w,maxSamples:T}}function y2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new hs,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let S=d.clippingState||null;l.value=S,S=c(_,h,x,p);for(let w=0;w!==x;++w)S[w]=t[w];d.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const d=p+g*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,S=p;x!==g;++x,S+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function S2(n){let e=new WeakMap;function t(o,a){return a===kh?o.mapping=jo:a===zh&&(o.mapping=Xo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kh||a===zh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new yC(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const xo=4,a0=[.125,.215,.35,.446,.526,.582],gs=20,ld=new DC,l0=new et;let ud=null,cd=0,fd=0,dd=!1;const ps=(1+Math.sqrt(5))/2,no=1/ps,u0=[new j(-ps,no,0),new j(ps,no,0),new j(-no,0,ps),new j(no,0,ps),new j(0,ps,-no),new j(0,ps,no),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],M2=new j;class c0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=M2}=s;ud=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,cd,fd),this._renderer.xr.enabled=dd,e.scissorTest=!1,xu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jo||e.mapping===Xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:ea,format:ri,colorSpace:$o,depthBuffer:!1},r=f0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f0(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E2(s)),this._blurMaterial=w2(s,e,t)}return r}_compileMaterial(e){const t=new si(this._lodPlanes[0],e);this._renderer.compile(t,ld)}_sceneToCubeUV(e,t,i,r,s){const l=new gi(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(l0),f.toneMapping=Gr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const g=new MS({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),m=new si(new Rl,g);let d=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,d=!0):(g.color.copy(l0),d=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const w=this._cubeSize;xu(r,S*w,x>2?w:0,w,w),f.setRenderTarget(r),d&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===jo||e.mapping===Xo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=h0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new si(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ld)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=u0[(r-s-1)%u0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new si(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gs-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):gs;m>gs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const d=[];let v=0;for(let C=0;C<gs;++C){const b=C/g,M=Math.exp(-b*b/2);d.push(M),C===0?v+=M:C<m&&(v+=2*M)}for(let C=0;C<d.length;C++)d[C]=d[C]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const S=this._sizeLods[r],w=3*S*(r>x-xo?r-x+xo:0),T=4*(this._cubeSize-S);xu(t,w,T,3*S,2*S),l.setRenderTarget(t),l.render(f,ld)}}function E2(n){const e=[],t=[],i=[];let r=n;const s=n-xo+1+a0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-xo?l=a0[o-n+xo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,g=3,m=2,d=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),S=new Float32Array(d*_*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,b=T>2?0:-1,M=[C,b,0,C+2/3,b,0,C+2/3,b+1,0,C,b,0,C+2/3,b+1,0,C,b+1,0];v.set(M,g*_*T),x.set(h,m*_*T);const E=[T,T,T,T,T,T];S.set(E,d*_*T)}const w=new pr;w.setAttribute("position",new Si(v,g)),w.setAttribute("uv",new Si(x,m)),w.setAttribute("faceIndex",new Si(S,d)),e.push(w),r>xo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function f0(n,e,t){const i=new qr(n,e,t);return i.texture.mapping=Yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function w2(n,e,t){const i=new Float32Array(gs),r=new j(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jm(),fragmentShader:`

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
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function d0(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jm(),fragmentShader:`

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
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function h0(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function jm(){return`

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
	`}function T2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===kh||l===zh,c=l===jo||l===Xo;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new c0(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new c0(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function A2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&pl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function C2(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,S=v.length;x<S;x+=3){const w=v[x+0],T=v[x+1],C=v[x+2];h.push(w,T,T,C,C,w)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const w=x+0,T=x+1,C=x+2;h.push(w,T,T,C,C,w)}}else return;const m=new(_S(h)?wS:ES)(h,1);m.version=g;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function R2(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function u(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*o,_),t.update(p,i,_))}function c(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function f(h,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,g,0,_);let d=0;for(let v=0;v<_;v++)d+=p[v]*g[v];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function b2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function P2(n,e,t){const i=new WeakMap,r=new Ct;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let S=a.attributes.position.count*x,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*w*4*f),C=new vS(T,S,w,f);C.type=Di,C.needsUpdate=!0;const b=x*4;for(let E=0;E<f;E++){const P=m[E],U=d[E],z=v[E],G=S*w*4*E;for(let $=0;$<P.count;$++){const H=$*b;p===!0&&(r.fromBufferAttribute(P,$),T[G+H+0]=r.x,T[G+H+1]=r.y,T[G+H+2]=r.z,T[G+H+3]=0),_===!0&&(r.fromBufferAttribute(U,$),T[G+H+4]=r.x,T[G+H+5]=r.y,T[G+H+6]=r.z,T[G+H+7]=0),g===!0&&(r.fromBufferAttribute(z,$),T[G+H+8]=r.x,T[G+H+9]=r.y,T[G+H+10]=r.z,T[G+H+11]=z.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new ze(S,w)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<u.length;g++)p+=u[g];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function D2(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const DS=new fn,p0=new RS(1,1),LS=new vS,NS=new iC,IS=new AS,m0=[],g0=[],_0=new Float32Array(16),v0=new Float32Array(9),x0=new Float32Array(4);function na(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=m0[r];if(s===void 0&&(s=new Float32Array(r),m0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Kc(n,e){let t=g0[e];t===void 0&&(t=new Int32Array(e),g0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function L2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function N2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function I2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function U2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function F2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,i))return;x0.set(i),n.uniformMatrix2fv(this.addr,!1,x0),Vt(t,i)}}function O2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,i))return;v0.set(i),n.uniformMatrix3fv(this.addr,!1,v0),Vt(t,i)}}function k2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,i))return;_0.set(i),n.uniformMatrix4fv(this.addr,!1,_0),Vt(t,i)}}function z2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function B2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function V2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function H2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function G2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function W2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function j2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function X2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function $2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(p0.compareFunction=gS,s=p0):s=DS,t.setTexture2D(e||s,r)}function Y2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||NS,r)}function q2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||IS,r)}function K2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||LS,r)}function Z2(n){switch(n){case 5126:return L2;case 35664:return N2;case 35665:return I2;case 35666:return U2;case 35674:return F2;case 35675:return O2;case 35676:return k2;case 5124:case 35670:return z2;case 35667:case 35671:return B2;case 35668:case 35672:return V2;case 35669:case 35673:return H2;case 5125:return G2;case 36294:return W2;case 36295:return j2;case 36296:return X2;case 35678:case 36198:case 36298:case 36306:case 35682:return $2;case 35679:case 36299:case 36307:return Y2;case 35680:case 36300:case 36308:case 36293:return q2;case 36289:case 36303:case 36311:case 36292:return K2}}function Q2(n,e){n.uniform1fv(this.addr,e)}function J2(n,e){const t=na(e,this.size,2);n.uniform2fv(this.addr,t)}function eP(n,e){const t=na(e,this.size,3);n.uniform3fv(this.addr,t)}function tP(n,e){const t=na(e,this.size,4);n.uniform4fv(this.addr,t)}function nP(n,e){const t=na(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function iP(n,e){const t=na(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rP(n,e){const t=na(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sP(n,e){n.uniform1iv(this.addr,e)}function oP(n,e){n.uniform2iv(this.addr,e)}function aP(n,e){n.uniform3iv(this.addr,e)}function lP(n,e){n.uniform4iv(this.addr,e)}function uP(n,e){n.uniform1uiv(this.addr,e)}function cP(n,e){n.uniform2uiv(this.addr,e)}function fP(n,e){n.uniform3uiv(this.addr,e)}function dP(n,e){n.uniform4uiv(this.addr,e)}function hP(n,e,t){const i=this.cache,r=e.length,s=Kc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||DS,s[o])}function pP(n,e,t){const i=this.cache,r=e.length,s=Kc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||NS,s[o])}function mP(n,e,t){const i=this.cache,r=e.length,s=Kc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||IS,s[o])}function gP(n,e,t){const i=this.cache,r=e.length,s=Kc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||LS,s[o])}function _P(n){switch(n){case 5126:return Q2;case 35664:return J2;case 35665:return eP;case 35666:return tP;case 35674:return nP;case 35675:return iP;case 35676:return rP;case 5124:case 35670:return sP;case 35667:case 35671:return oP;case 35668:case 35672:return aP;case 35669:case 35673:return lP;case 5125:return uP;case 36294:return cP;case 36295:return fP;case 36296:return dP;case 35678:case 36198:case 36298:case 36306:case 35682:return hP;case 35679:case 36299:case 36307:return pP;case 35680:case 36300:case 36308:case 36293:return mP;case 36289:case 36303:case 36311:case 36292:return gP}}class vP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Z2(t.type)}}class xP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_P(t.type)}}class yP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function y0(n,e){n.seq.push(e),n.map[e.id]=e}function SP(n,e,t){const i=n.name,r=i.length;for(hd.lastIndex=0;;){const s=hd.exec(i),o=hd.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){y0(t,u===void 0?new vP(a,n,e):new xP(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new yP(a),y0(t,f)),t=f}}}class Hu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);SP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function S0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const MP=37297;let EP=0;function wP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const M0=new He;function TP(n){Je._getMatrix(M0,Je.workingColorSpace,n);const e=`mat3( ${M0.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Sc:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function E0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+wP(n.getShaderSource(e),a)}else return s}function AP(n,e){const t=TP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function CP(n,e){let t;switch(e){case PA:t="Linear";break;case DA:t="Reinhard";break;case LA:t="Cineon";break;case NA:t="ACESFilmic";break;case UA:t="AgX";break;case FA:t="Neutral";break;case IA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yu=new j;function RP(){Je.getLuminanceCoefficients(yu);const n=yu.x.toFixed(4),e=yu.y.toFixed(4),t=yu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function PP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Aa(n){return n!==""}function w0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LP=/^[ \t]*#include +<([\w\d./]+)>/gm;function _p(n){return n.replace(LP,IP)}const NP=new Map;function IP(n,e){let t=Ge[e];if(t===void 0){const i=NP.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _p(t)}const UP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A0(n){return n.replace(UP,FP)}function FP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function C0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function OP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sS?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function kP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jo:case Xo:e="ENVMAP_TYPE_CUBE";break;case Yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xo:e="ENVMAP_MODE_REFRACTION";break}return e}function BP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case oS:e="ENVMAP_BLENDING_MULTIPLY";break;case RA:e="ENVMAP_BLENDING_MIX";break;case bA:e="ENVMAP_BLENDING_ADD";break}return e}function VP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function HP(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=OP(t),u=kP(t),c=zP(t),f=BP(t),h=VP(t),p=bP(t),_=PP(s),g=r.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Aa).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Aa).join(`
`),d.length>0&&(d+=`
`)):(m=[C0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),d=[C0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gr?"#define TONE_MAPPING":"",t.toneMapping!==Gr?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Gr?CP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,AP("linearToOutputTexel",t.outputColorSpace),RP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),o=_p(o),o=w0(o,t),o=T0(o,t),a=_p(a),a=w0(a,t),a=T0(a,t),o=A0(o),a=A0(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===O_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===O_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+m+o,S=v+d+a,w=S0(r,r.VERTEX_SHADER,x),T=S0(r,r.FRAGMENT_SHADER,S);r.attachShader(g,w),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(P){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(g)||"",z=r.getShaderInfoLog(w)||"",G=r.getShaderInfoLog(T)||"",$=U.trim(),H=z.trim(),J=G.trim();let I=!0,q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,w,T);else{const Q=E0(r,w,"vertex"),le=E0(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+Q+`
`+le)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(H===""||J==="")&&(q=!1);q&&(P.diagnostics={runnable:I,programLog:$,vertexShader:{log:H,prefix:m},fragmentShader:{log:J,prefix:d}})}r.deleteShader(w),r.deleteShader(T),b=new Hu(r,g),M=DP(r,g)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(g,MP)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=EP++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=T,this}let GP=0;class WP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jP(e),t.set(e,i)),i}}class jP{constructor(e){this.id=GP++,this.code=e,this.usedTimes=0}}function XP(n,e,t,i,r,s,o){const a=new yS,l=new WP,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,E,P,U,z){const G=U.fog,$=z.geometry,H=M.isMeshStandardMaterial?U.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),I=J&&J.mapping===Yc?J.image.height:null,q=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Q=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,le=Q!==void 0?Q.length:0;let _e=0;$.morphAttributes.position!==void 0&&(_e=1),$.morphAttributes.normal!==void 0&&(_e=2),$.morphAttributes.color!==void 0&&(_e=3);let je,Ue,Fe,Z;if(q){const tt=Ci[q];je=tt.vertexShader,Ue=tt.fragmentShader}else je=M.vertexShader,Ue=M.fragmentShader,l.update(M),Fe=l.getVertexShaderID(M),Z=l.getFragmentShaderID(M);const te=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ne=z.isInstancedMesh===!0,Ae=z.isBatchedMesh===!0,Xe=!!M.map,Ht=!!M.matcap,N=!!J,lt=!!M.aoMap,Oe=!!M.lightMap,Pe=!!M.bumpMap,Ee=!!M.normalMap,Ze=!!M.displacementMap,Me=!!M.emissiveMap,Be=!!M.metalnessMap,bt=!!M.roughnessMap,pt=M.anisotropy>0,R=M.clearcoat>0,y=M.dispersion>0,L=M.iridescence>0,V=M.sheen>0,K=M.transmission>0,W=pt&&!!M.anisotropyMap,ce=R&&!!M.clearcoatMap,oe=R&&!!M.clearcoatNormalMap,ge=R&&!!M.clearcoatRoughnessMap,ye=L&&!!M.iridescenceMap,re=L&&!!M.iridescenceThicknessMap,fe=V&&!!M.sheenColorMap,Le=V&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,he=!!M.specularColorMap,Ve=!!M.specularIntensityMap,F=K&&!!M.transmissionMap,ae=K&&!!M.thicknessMap,ue=!!M.gradientMap,Se=!!M.alphaMap,ie=M.alphaTest>0,ee=!!M.alphaHash,Te=!!M.extensions;let ke=Gr;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ke=n.toneMapping);const ut={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:je,fragmentShader:Ue,defines:M.defines,customVertexShaderID:Fe,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&z._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&z.instanceColor!==null,instancingMorph:Ne&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:$o,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:Ht,envMap:N,envMapMode:N&&J.mapping,envMapCubeUVHeight:I,aoMap:lt,lightMap:Oe,bumpMap:Pe,normalMap:Ee,displacementMap:h&&Ze,emissiveMap:Me,normalMapObjectSpace:Ee&&M.normalMapType===VA,normalMapTangentSpace:Ee&&M.normalMapType===BA,metalnessMap:Be,roughnessMap:bt,anisotropy:pt,anisotropyMap:W,clearcoat:R,clearcoatMap:ce,clearcoatNormalMap:oe,clearcoatRoughnessMap:ge,dispersion:y,iridescence:L,iridescenceMap:ye,iridescenceThicknessMap:re,sheen:V,sheenColorMap:fe,sheenRoughnessMap:Le,specularMap:Ce,specularColorMap:he,specularIntensityMap:Ve,transmission:K,transmissionMap:F,thicknessMap:ae,gradientMap:ue,opaque:M.transparent===!1&&M.blending===bo&&M.alphaToCoverage===!1,alphaMap:Se,alphaTest:ie,alphaHash:ee,combine:M.combine,mapUv:Xe&&g(M.map.channel),aoMapUv:lt&&g(M.aoMap.channel),lightMapUv:Oe&&g(M.lightMap.channel),bumpMapUv:Pe&&g(M.bumpMap.channel),normalMapUv:Ee&&g(M.normalMap.channel),displacementMapUv:Ze&&g(M.displacementMap.channel),emissiveMapUv:Me&&g(M.emissiveMap.channel),metalnessMapUv:Be&&g(M.metalnessMap.channel),roughnessMapUv:bt&&g(M.roughnessMap.channel),anisotropyMapUv:W&&g(M.anisotropyMap.channel),clearcoatMapUv:ce&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(M.sheenRoughnessMap.channel),specularMapUv:Ce&&g(M.specularMap.channel),specularColorMapUv:he&&g(M.specularColorMap.channel),specularIntensityMapUv:Ve&&g(M.specularIntensityMap.channel),transmissionMapUv:F&&g(M.transmissionMap.channel),thicknessMapUv:ae&&g(M.thicknessMap.channel),alphaMapUv:Se&&g(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ee||pt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Xe||Se),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:_e,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===rt,decodeVideoTextureEmissive:Me&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qi,flipSided:M.side===Cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Te&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&M.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ut.vertexUv1s=u.has(1),ut.vertexUv2s=u.has(2),ut.vertexUv3s=u.has(3),u.clear(),ut}function d(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)E.push(P),E.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(v(E,M),x(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const E=_[M.type];let P;if(E){const U=Ci[E];P=gC.clone(U.uniforms)}else P=M.uniforms;return P}function w(M,E){let P;for(let U=0,z=c.length;U<z;U++){const G=c[U];if(G.cacheKey===E){P=G,++P.usedTimes;break}}return P===void 0&&(P=new HP(n,E,M,s),c.push(P)),P}function T(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:w,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:b}}function $P(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function YP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function R0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function b0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,g,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=g,d.group=m),e++,d}function a(f,h,p,_,g,m){const d=o(f,h,p,_,g,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,g,m){const d=o(f,h,p,_,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||YP),i.length>1&&i.sort(h||R0),r.length>1&&r.sort(h||R0)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function qP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new b0,n.set(i,[o])):r>=s.length?(o=new b0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function KP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new et};break;case"SpotLight":t={position:new j,direction:new j,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function ZP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let QP=0;function JP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function eD(n){const e=new KP,t=ZP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new j);const r=new j,s=new Ft,o=new Ft;function a(u){let c=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,_=0,g=0,m=0,d=0,v=0,x=0,S=0,w=0,T=0,C=0;u.sort(JP);for(let M=0,E=u.length;M<E;M++){const P=u[M],U=P.color,z=P.intensity,G=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=U.r*z,f+=U.g*z,h+=U.b*z;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],z);C++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,I=t.get(P);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=H,p++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(U).multiplyScalar(z),H.distance=G,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[g]=H;const J=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,J.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[g]=J.matrix,P.castShadow){const I=t.get(P);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,i.spotShadow[g]=I,i.spotShadowMap[g]=$,S++}g++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(U).multiplyScalar(z),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const J=P.shadow,I=t.get(P);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,I.shadowCameraNear=J.camera.near,I.shadowCameraFar=J.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=H,_++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(z),H.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[d]=H,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==_||b.spotLength!==g||b.rectAreaLength!==m||b.hemiLength!==d||b.numDirectionalShadows!==v||b.numPointShadows!==x||b.numSpotShadows!==S||b.numSpotMaps!==w||b.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,b.directionalLength=p,b.pointLength=_,b.spotLength=g,b.rectAreaLength=m,b.hemiLength=d,b.numDirectionalShadows=v,b.numPointShadows=x,b.numSpotShadows=S,b.numSpotMaps=w,b.numLightProbes=C,i.version=QP++)}function l(u,c){let f=0,h=0,p=0,_=0,g=0;const m=c.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const x=u[d];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function P0(n){const e=new eD(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function tD(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new P0(n),e.set(r,[a])):s>=o.length?(a=new P0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const nD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rD(n,e,t){let i=new CS;const r=new ze,s=new ze,o=new Ct,a=new bC({depthPacking:zA}),l=new PC,u={},c=t.maxTextureSize,f={[Yr]:Cn,[Cn]:Yr,[qi]:qi},h=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:nD,fragmentShader:iD}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new pr;_.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new si(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sS;let d=this.type;this.render=function(T,C,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=n.getRenderTarget(),E=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Hr),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=d!==Wi&&this.type===Wi,G=d===Wi&&this.type!==Wi;for(let $=0,H=T.length;$<H;$++){const J=T[$],I=J.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const q=I.getFrameExtents();if(r.multiply(q),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/q.x),r.x=s.x*q.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/q.y),r.y=s.y*q.y,I.mapSize.y=s.y)),I.map===null||z===!0||G===!0){const le=this.type!==Wi?{minFilter:Vn,magFilter:Vn}:{};I.map!==null&&I.map.dispose(),I.map=new qr(r.x,r.y,le),I.map.texture.name=J.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const Q=I.getViewportCount();for(let le=0;le<Q;le++){const _e=I.getViewport(le);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),U.viewport(o),I.updateMatrices(J,le),i=I.getFrustum(),S(C,b,I.camera,J,this.type)}I.isPointLightShadow!==!0&&this.type===Wi&&v(I,b),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,E,P)};function v(T,C){const b=e.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,b,h,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,b,p,g,null)}function x(T,C,b,M){let E=null;const P=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)E=P;else if(E=b.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=E.uuid,z=C.uuid;let G=u[U];G===void 0&&(G={},u[U]=G);let $=G[z];$===void 0&&($=E.clone(),G[z]=$,C.addEventListener("dispose",w)),E=$}if(E.visible=C.visible,E.wireframe=C.wireframe,M===Wi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:f[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=n.properties.get(E);U.light=b}return E}function S(T,C,b,M,E){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Wi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const z=e.update(T),G=T.material;if(Array.isArray(G)){const $=z.groups;for(let H=0,J=$.length;H<J;H++){const I=$[H],q=G[I.materialIndex];if(q&&q.visible){const Q=x(T,q,M,E);T.onBeforeShadow(n,T,C,b,z,Q,I),n.renderBufferDirect(b,null,z,Q,T,I),T.onAfterShadow(n,T,C,b,z,Q,I)}}}else if(G.visible){const $=x(T,G,M,E);T.onBeforeShadow(n,T,C,b,z,$,null),n.renderBufferDirect(b,null,z,$,T,null),T.onAfterShadow(n,T,C,b,z,$,null)}}const U=T.children;for(let z=0,G=U.length;z<G;z++)S(U[z],C,b,M,E)}function w(T){T.target.removeEventListener("dispose",w);for(const b in u){const M=u[b],E=T.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const sD={[Dh]:Lh,[Nh]:Fh,[Ih]:Oh,[Wo]:Uh,[Lh]:Dh,[Fh]:Nh,[Oh]:Ih,[Uh]:Wo};function oD(n,e){function t(){let F=!1;const ae=new Ct;let ue=null;const Se=new Ct(0,0,0,0);return{setMask:function(ie){ue!==ie&&!F&&(n.colorMask(ie,ie,ie,ie),ue=ie)},setLocked:function(ie){F=ie},setClear:function(ie,ee,Te,ke,ut){ut===!0&&(ie*=ke,ee*=ke,Te*=ke),ae.set(ie,ee,Te,ke),Se.equals(ae)===!1&&(n.clearColor(ie,ee,Te,ke),Se.copy(ae))},reset:function(){F=!1,ue=null,Se.set(-1,0,0,0)}}}function i(){let F=!1,ae=!1,ue=null,Se=null,ie=null;return{setReversed:function(ee){if(ae!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ae=ee;const ke=ie;ie=null,this.setClear(ke)}},getReversed:function(){return ae},setTest:function(ee){ee?te(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(ee){ue!==ee&&!F&&(n.depthMask(ee),ue=ee)},setFunc:function(ee){if(ae&&(ee=sD[ee]),Se!==ee){switch(ee){case Dh:n.depthFunc(n.NEVER);break;case Lh:n.depthFunc(n.ALWAYS);break;case Nh:n.depthFunc(n.LESS);break;case Wo:n.depthFunc(n.LEQUAL);break;case Ih:n.depthFunc(n.EQUAL);break;case Uh:n.depthFunc(n.GEQUAL);break;case Fh:n.depthFunc(n.GREATER);break;case Oh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ee}},setLocked:function(ee){F=ee},setClear:function(ee){ie!==ee&&(ae&&(ee=1-ee),n.clearDepth(ee),ie=ee)},reset:function(){F=!1,ue=null,Se=null,ie=null,ae=!1}}}function r(){let F=!1,ae=null,ue=null,Se=null,ie=null,ee=null,Te=null,ke=null,ut=null;return{setTest:function(tt){F||(tt?te(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(tt){ae!==tt&&!F&&(n.stencilMask(tt),ae=tt)},setFunc:function(tt,ki,Ei){(ue!==tt||Se!==ki||ie!==Ei)&&(n.stencilFunc(tt,ki,Ei),ue=tt,Se=ki,ie=Ei)},setOp:function(tt,ki,Ei){(ee!==tt||Te!==ki||ke!==Ei)&&(n.stencilOp(tt,ki,Ei),ee=tt,Te=ki,ke=Ei)},setLocked:function(tt){F=tt},setClear:function(tt){ut!==tt&&(n.clearStencil(tt),ut=tt)},reset:function(){F=!1,ae=null,ue=null,Se=null,ie=null,ee=null,Te=null,ke=null,ut=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],_=null,g=!1,m=null,d=null,v=null,x=null,S=null,w=null,T=null,C=new et(0,0,0),b=0,M=!1,E=null,P=null,U=null,z=null,G=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(I)[1]),H=J>=1):I.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),H=J>=2);let q=null,Q={};const le=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),je=new Ct().fromArray(le),Ue=new Ct().fromArray(_e);function Fe(F,ae,ue,Se){const ie=new Uint8Array(4),ee=n.createTexture();n.bindTexture(F,ee),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<ue;Te++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(ae+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return ee}const Z={};Z[n.TEXTURE_2D]=Fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(Wo),Pe(!1),Ee(L_),te(n.CULL_FACE),lt(Hr);function te(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function me(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function Ne(F,ae){return f[F]!==ae?(n.bindFramebuffer(F,ae),f[F]=ae,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ae),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ae(F,ae){let ue=p,Se=!1;if(F){ue=h.get(ae),ue===void 0&&(ue=[],h.set(ae,ue));const ie=F.textures;if(ue.length!==ie.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Te=ie.length;ee<Te;ee++)ue[ee]=n.COLOR_ATTACHMENT0+ee;ue.length=ie.length,Se=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,Se=!0);Se&&n.drawBuffers(ue)}function Xe(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const Ht={[ms]:n.FUNC_ADD,[fA]:n.FUNC_SUBTRACT,[dA]:n.FUNC_REVERSE_SUBTRACT};Ht[hA]=n.MIN,Ht[pA]=n.MAX;const N={[mA]:n.ZERO,[gA]:n.ONE,[_A]:n.SRC_COLOR,[bh]:n.SRC_ALPHA,[EA]:n.SRC_ALPHA_SATURATE,[SA]:n.DST_COLOR,[xA]:n.DST_ALPHA,[vA]:n.ONE_MINUS_SRC_COLOR,[Ph]:n.ONE_MINUS_SRC_ALPHA,[MA]:n.ONE_MINUS_DST_COLOR,[yA]:n.ONE_MINUS_DST_ALPHA,[wA]:n.CONSTANT_COLOR,[TA]:n.ONE_MINUS_CONSTANT_COLOR,[AA]:n.CONSTANT_ALPHA,[CA]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(F,ae,ue,Se,ie,ee,Te,ke,ut,tt){if(F===Hr){g===!0&&(me(n.BLEND),g=!1);return}if(g===!1&&(te(n.BLEND),g=!0),F!==cA){if(F!==m||tt!==M){if((d!==ms||S!==ms)&&(n.blendEquation(n.FUNC_ADD),d=ms,S=ms),tt)switch(F){case bo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rh:n.blendFunc(n.ONE,n.ONE);break;case N_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case I_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case N_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,x=null,w=null,T=null,C.set(0,0,0),b=0,m=F,M=tt}return}ie=ie||ae,ee=ee||ue,Te=Te||Se,(ae!==d||ie!==S)&&(n.blendEquationSeparate(Ht[ae],Ht[ie]),d=ae,S=ie),(ue!==v||Se!==x||ee!==w||Te!==T)&&(n.blendFuncSeparate(N[ue],N[Se],N[ee],N[Te]),v=ue,x=Se,w=ee,T=Te),(ke.equals(C)===!1||ut!==b)&&(n.blendColor(ke.r,ke.g,ke.b,ut),C.copy(ke),b=ut),m=F,M=!1}function Oe(F,ae){F.side===qi?me(n.CULL_FACE):te(n.CULL_FACE);let ue=F.side===Cn;ae&&(ue=!ue),Pe(ue),F.blending===bo&&F.transparent===!1?lt(Hr):lt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Se=F.stencilWrite;a.setTest(Se),Se&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Me(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(F){E!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),E=F)}function Ee(F){F!==aA?(te(n.CULL_FACE),F!==P&&(F===L_?n.cullFace(n.BACK):F===lA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),P=F}function Ze(F){F!==U&&(H&&n.lineWidth(F),U=F)}function Me(F,ae,ue){F?(te(n.POLYGON_OFFSET_FILL),(z!==ae||G!==ue)&&(n.polygonOffset(ae,ue),z=ae,G=ue)):me(n.POLYGON_OFFSET_FILL)}function Be(F){F?te(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function bt(F){F===void 0&&(F=n.TEXTURE0+$-1),q!==F&&(n.activeTexture(F),q=F)}function pt(F,ae,ue){ue===void 0&&(q===null?ue=n.TEXTURE0+$-1:ue=q);let Se=Q[ue];Se===void 0&&(Se={type:void 0,texture:void 0},Q[ue]=Se),(Se.type!==F||Se.texture!==ae)&&(q!==ue&&(n.activeTexture(ue),q=ue),n.bindTexture(F,ae||Z[F]),Se.type=F,Se.texture=ae)}function R(){const F=Q[q];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(F){je.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),je.copy(F))}function Le(F){Ue.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ue.copy(F))}function Ce(F,ae){let ue=u.get(ae);ue===void 0&&(ue=new WeakMap,u.set(ae,ue));let Se=ue.get(F);Se===void 0&&(Se=n.getUniformBlockIndex(ae,F.name),ue.set(F,Se))}function he(F,ae){const Se=u.get(ae).get(F);l.get(ae)!==Se&&(n.uniformBlockBinding(ae,Se,F.__bindingPointIndex),l.set(ae,Se))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},q=null,Q={},f={},h=new WeakMap,p=[],_=null,g=!1,m=null,d=null,v=null,x=null,S=null,w=null,T=null,C=new et(0,0,0),b=0,M=!1,E=null,P=null,U=null,z=null,G=null,je.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:me,bindFramebuffer:Ne,drawBuffers:Ae,useProgram:Xe,setBlending:lt,setMaterial:Oe,setFlipSided:Pe,setCullFace:Ee,setLineWidth:Ze,setPolygonOffset:Me,setScissorTest:Be,activeTexture:bt,bindTexture:pt,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:L,texImage2D:ye,texImage3D:re,updateUBOMapping:Ce,uniformBlockBinding:he,texStorage2D:oe,texStorage3D:ge,texSubImage2D:V,texSubImage3D:K,compressedTexSubImage2D:W,compressedTexSubImage3D:ce,scissor:fe,viewport:Le,reset:Ve}}function aD(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ze,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return p?new OffscreenCanvas(R,y):Ec("canvas")}function g(R,y,L){let V=1;const K=pt(R);if((K.width>L||K.height>L)&&(V=L/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const W=Math.floor(V*K.width),ce=Math.floor(V*K.height);f===void 0&&(f=_(W,ce));const oe=y?_(W,ce):f;return oe.width=W,oe.height=ce,oe.getContext("2d").drawImage(R,0,0,W,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+ce+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,y,L,V,K=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let W=y;if(y===n.RED&&(L===n.FLOAT&&(W=n.R32F),L===n.HALF_FLOAT&&(W=n.R16F),L===n.UNSIGNED_BYTE&&(W=n.R8)),y===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.R8UI),L===n.UNSIGNED_SHORT&&(W=n.R16UI),L===n.UNSIGNED_INT&&(W=n.R32UI),L===n.BYTE&&(W=n.R8I),L===n.SHORT&&(W=n.R16I),L===n.INT&&(W=n.R32I)),y===n.RG&&(L===n.FLOAT&&(W=n.RG32F),L===n.HALF_FLOAT&&(W=n.RG16F),L===n.UNSIGNED_BYTE&&(W=n.RG8)),y===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RG8UI),L===n.UNSIGNED_SHORT&&(W=n.RG16UI),L===n.UNSIGNED_INT&&(W=n.RG32UI),L===n.BYTE&&(W=n.RG8I),L===n.SHORT&&(W=n.RG16I),L===n.INT&&(W=n.RG32I)),y===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RGB8UI),L===n.UNSIGNED_SHORT&&(W=n.RGB16UI),L===n.UNSIGNED_INT&&(W=n.RGB32UI),L===n.BYTE&&(W=n.RGB8I),L===n.SHORT&&(W=n.RGB16I),L===n.INT&&(W=n.RGB32I)),y===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),L===n.UNSIGNED_INT&&(W=n.RGBA32UI),L===n.BYTE&&(W=n.RGBA8I),L===n.SHORT&&(W=n.RGBA16I),L===n.INT&&(W=n.RGBA32I)),y===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),y===n.RGBA){const ce=K?Sc:Je.getTransfer(V);L===n.FLOAT&&(W=n.RGBA32F),L===n.HALF_FLOAT&&(W=n.RGBA16F),L===n.UNSIGNED_BYTE&&(W=ce===rt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function S(R,y){let L;return R?y===null||y===Us||y===fl?L=n.DEPTH24_STENCIL8:y===Di?L=n.DEPTH32F_STENCIL8:y===cl&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Us||y===fl?L=n.DEPTH_COMPONENT24:y===Di?L=n.DEPTH_COMPONENT32F:y===cl&&(L=n.DEPTH_COMPONENT16),L}function w(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vn&&R.minFilter!==xn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function T(R){const y=R.target;y.removeEventListener("dispose",T),b(y),y.isVideoTexture&&c.delete(y)}function C(R){const y=R.target;y.removeEventListener("dispose",C),E(y)}function b(R){const y=i.get(R);if(y.__webglInit===void 0)return;const L=R.source,V=h.get(L);if(V){const K=V[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(R),Object.keys(V).length===0&&h.delete(L)}i.remove(R)}function M(R){const y=i.get(R);n.deleteTexture(y.__webglTexture);const L=R.source,V=h.get(L);delete V[y.__cacheKey],o.memory.textures--}function E(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let K=0;K<y.__webglFramebuffer[V].length;K++)n.deleteFramebuffer(y.__webglFramebuffer[V][K]);else n.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)n.deleteFramebuffer(y.__webglFramebuffer[V]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const L=R.textures;for(let V=0,K=L.length;V<K;V++){const W=i.get(L[V]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(L[V])}i.remove(R)}let P=0;function U(){P=0}function z(){const R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function G(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function $(R,y){const L=i.get(R);if(R.isVideoTexture&&Be(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&L.__version!==R.version){const V=R.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(L,R,y);return}}else R.isExternalTexture&&(L.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+y)}function H(R,y){const L=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){Z(L,R,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+y)}function J(R,y){const L=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){Z(L,R,y);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+y)}function I(R,y){const L=i.get(R);if(R.version>0&&L.__version!==R.version){te(L,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+y)}const q={[Bh]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[Vh]:n.MIRRORED_REPEAT},Q={[Vn]:n.NEAREST,[OA]:n.NEAREST_MIPMAP_NEAREST,[Kl]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Ff]:n.LINEAR_MIPMAP_NEAREST,[Ss]:n.LINEAR_MIPMAP_LINEAR},le={[HA]:n.NEVER,[YA]:n.ALWAYS,[GA]:n.LESS,[gS]:n.LEQUAL,[WA]:n.EQUAL,[$A]:n.GEQUAL,[jA]:n.GREATER,[XA]:n.NOTEQUAL};function _e(R,y){if(y.type===Di&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===xn||y.magFilter===Ff||y.magFilter===Kl||y.magFilter===Ss||y.minFilter===xn||y.minFilter===Ff||y.minFilter===Kl||y.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,q[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,q[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,q[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Q[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Q[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,le[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Vn||y.minFilter!==Kl&&y.minFilter!==Ss||y.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function je(R,y){let L=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",T));const V=y.source;let K=h.get(V);K===void 0&&(K={},h.set(V,K));const W=G(y);if(W!==R.__cacheKey){K[W]===void 0&&(K[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),K[W].usedTimes++;const ce=K[R.__cacheKey];ce!==void 0&&(K[R.__cacheKey].usedTimes--,ce.usedTimes===0&&M(y)),R.__cacheKey=W,R.__webglTexture=K[W].texture}return L}function Ue(R,y,L){return Math.floor(Math.floor(R/L)/y)}function Fe(R,y,L,V){const W=R.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,L,V,y.data);else{W.sort((re,fe)=>re.start-fe.start);let ce=0;for(let re=1;re<W.length;re++){const fe=W[ce],Le=W[re],Ce=fe.start+fe.count,he=Ue(Le.start,y.width,4),Ve=Ue(fe.start,y.width,4);Le.start<=Ce+1&&he===Ve&&Ue(Le.start+Le.count-1,y.width,4)===he?fe.count=Math.max(fe.count,Le.start+Le.count-fe.start):(++ce,W[ce]=Le)}W.length=ce+1;const oe=n.getParameter(n.UNPACK_ROW_LENGTH),ge=n.getParameter(n.UNPACK_SKIP_PIXELS),ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let re=0,fe=W.length;re<fe;re++){const Le=W[re],Ce=Math.floor(Le.start/4),he=Math.ceil(Le.count/4),Ve=Ce%y.width,F=Math.floor(Ce/y.width),ae=he,ue=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ve,F,ae,ue,L,V,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,oe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function Z(R,y,L){let V=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=n.TEXTURE_3D);const K=je(R,y),W=y.source;t.bindTexture(V,R.__webglTexture,n.TEXTURE0+L);const ce=i.get(W);if(W.version!==ce.__version||K===!0){t.activeTexture(n.TEXTURE0+L);const oe=Je.getPrimaries(Je.workingColorSpace),ge=y.colorSpace===Ar?null:Je.getPrimaries(y.colorSpace),ye=y.colorSpace===Ar||oe===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let re=g(y.image,!1,r.maxTextureSize);re=bt(y,re);const fe=s.convert(y.format,y.colorSpace),Le=s.convert(y.type);let Ce=x(y.internalFormat,fe,Le,y.colorSpace,y.isVideoTexture);_e(V,y);let he;const Ve=y.mipmaps,F=y.isVideoTexture!==!0,ae=ce.__version===void 0||K===!0,ue=W.dataReady,Se=w(y,re);if(y.isDepthTexture)Ce=S(y.format===hl,y.type),ae&&(F?t.texStorage2D(n.TEXTURE_2D,1,Ce,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ce,re.width,re.height,0,fe,Le,null));else if(y.isDataTexture)if(Ve.length>0){F&&ae&&t.texStorage2D(n.TEXTURE_2D,Se,Ce,Ve[0].width,Ve[0].height);for(let ie=0,ee=Ve.length;ie<ee;ie++)he=Ve[ie],F?ue&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,he.width,he.height,fe,Le,he.data):t.texImage2D(n.TEXTURE_2D,ie,Ce,he.width,he.height,0,fe,Le,he.data);y.generateMipmaps=!1}else F?(ae&&t.texStorage2D(n.TEXTURE_2D,Se,Ce,re.width,re.height),ue&&Fe(y,re,fe,Le)):t.texImage2D(n.TEXTURE_2D,0,Ce,re.width,re.height,0,fe,Le,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ce,Ve[0].width,Ve[0].height,re.depth);for(let ie=0,ee=Ve.length;ie<ee;ie++)if(he=Ve[ie],y.format!==ri)if(fe!==null)if(F){if(ue)if(y.layerUpdates.size>0){const Te=o0(he.width,he.height,y.format,y.type);for(const ke of y.layerUpdates){const ut=he.data.subarray(ke*Te/he.data.BYTES_PER_ELEMENT,(ke+1)*Te/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,ke,he.width,he.height,1,fe,ut)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,re.depth,fe,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Ce,he.width,he.height,re.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,re.depth,fe,Le,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Ce,he.width,he.height,re.depth,0,fe,Le,he.data)}else{F&&ae&&t.texStorage2D(n.TEXTURE_2D,Se,Ce,Ve[0].width,Ve[0].height);for(let ie=0,ee=Ve.length;ie<ee;ie++)he=Ve[ie],y.format!==ri?fe!==null?F?ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Ce,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ue&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,he.width,he.height,fe,Le,he.data):t.texImage2D(n.TEXTURE_2D,ie,Ce,he.width,he.height,0,fe,Le,he.data)}else if(y.isDataArrayTexture)if(F){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ce,re.width,re.height,re.depth),ue)if(y.layerUpdates.size>0){const ie=o0(re.width,re.height,y.format,y.type);for(const ee of y.layerUpdates){const Te=re.data.subarray(ee*ie/re.data.BYTES_PER_ELEMENT,(ee+1)*ie/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,fe,Le,Te)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,Le,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,re.width,re.height,re.depth,0,fe,Le,re.data);else if(y.isData3DTexture)F?(ae&&t.texStorage3D(n.TEXTURE_3D,Se,Ce,re.width,re.height,re.depth),ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,Le,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,re.width,re.height,re.depth,0,fe,Le,re.data);else if(y.isFramebufferTexture){if(ae)if(F)t.texStorage2D(n.TEXTURE_2D,Se,Ce,re.width,re.height);else{let ie=re.width,ee=re.height;for(let Te=0;Te<Se;Te++)t.texImage2D(n.TEXTURE_2D,Te,Ce,ie,ee,0,fe,Le,null),ie>>=1,ee>>=1}}else if(Ve.length>0){if(F&&ae){const ie=pt(Ve[0]);t.texStorage2D(n.TEXTURE_2D,Se,Ce,ie.width,ie.height)}for(let ie=0,ee=Ve.length;ie<ee;ie++)he=Ve[ie],F?ue&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,fe,Le,he):t.texImage2D(n.TEXTURE_2D,ie,Ce,fe,Le,he);y.generateMipmaps=!1}else if(F){if(ae){const ie=pt(re);t.texStorage2D(n.TEXTURE_2D,Se,Ce,ie.width,ie.height)}ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Le,re)}else t.texImage2D(n.TEXTURE_2D,0,Ce,fe,Le,re);m(y)&&d(V),ce.__version=W.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function te(R,y,L){if(y.image.length!==6)return;const V=je(R,y),K=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+L);const W=i.get(K);if(K.version!==W.__version||V===!0){t.activeTexture(n.TEXTURE0+L);const ce=Je.getPrimaries(Je.workingColorSpace),oe=y.colorSpace===Ar?null:Je.getPrimaries(y.colorSpace),ge=y.colorSpace===Ar||ce===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ye=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,fe=[];for(let ee=0;ee<6;ee++)!ye&&!re?fe[ee]=g(y.image[ee],!0,r.maxCubemapSize):fe[ee]=re?y.image[ee].image:y.image[ee],fe[ee]=bt(y,fe[ee]);const Le=fe[0],Ce=s.convert(y.format,y.colorSpace),he=s.convert(y.type),Ve=x(y.internalFormat,Ce,he,y.colorSpace),F=y.isVideoTexture!==!0,ae=W.__version===void 0||V===!0,ue=K.dataReady;let Se=w(y,Le);_e(n.TEXTURE_CUBE_MAP,y);let ie;if(ye){F&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ve,Le.width,Le.height);for(let ee=0;ee<6;ee++){ie=fe[ee].mipmaps;for(let Te=0;Te<ie.length;Te++){const ke=ie[Te];y.format!==ri?Ce!==null?F?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ke.width,ke.height,Ce,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Ve,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ke.width,ke.height,Ce,he,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Ve,ke.width,ke.height,0,Ce,he,ke.data)}}}else{if(ie=y.mipmaps,F&&ae){ie.length>0&&Se++;const ee=pt(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ve,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,fe[ee].width,fe[ee].height,Ce,he,fe[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,fe[ee].width,fe[ee].height,0,Ce,he,fe[ee].data);for(let Te=0;Te<ie.length;Te++){const ut=ie[Te].image[ee].image;F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,ut.width,ut.height,Ce,he,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Ve,ut.width,ut.height,0,Ce,he,ut.data)}}else{F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce,he,fe[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,Ce,he,fe[ee]);for(let Te=0;Te<ie.length;Te++){const ke=ie[Te];F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Ce,he,ke.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Ve,Ce,he,ke.image[ee])}}}m(y)&&d(n.TEXTURE_CUBE_MAP),W.__version=K.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function me(R,y,L,V,K,W){const ce=s.convert(L.format,L.colorSpace),oe=s.convert(L.type),ge=x(L.internalFormat,ce,oe,L.colorSpace),ye=i.get(y),re=i.get(L);if(re.__renderTarget=y,!ye.__hasExternalTextures){const fe=Math.max(1,y.width>>W),Le=Math.max(1,y.height>>W);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,W,ge,fe,Le,y.depth,0,ce,oe,null):t.texImage2D(K,W,ge,fe,Le,0,ce,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Me(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,K,re.__webglTexture,0,Ze(y)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,K,re.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(R,y,L){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){const V=y.depthTexture,K=V&&V.isDepthTexture?V.type:null,W=S(y.stencilBuffer,K),ce=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Ze(y);Me(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,W,y.width,y.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,W,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,W,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,R)}else{const V=y.textures;for(let K=0;K<V.length;K++){const W=V[K],ce=s.convert(W.format,W.colorSpace),oe=s.convert(W.type),ge=x(W.internalFormat,ce,oe,W.colorSpace),ye=Ze(y);L&&Me(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ge,y.width,y.height):Me(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,ge,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ge,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(y.depthTexture);V.__renderTarget=y,(!V.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const K=V.__webglTexture,W=Ze(y);if(y.depthTexture.format===dl)Me(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(y.depthTexture.format===hl)Me(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Xe(R){const y=i.get(R),L=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const V=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=V}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const V=R.texture.mipmaps;V&&V.length>0?Ae(y.__webglFramebuffer[0],R):Ae(y.__webglFramebuffer,R)}else if(L){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=n.createRenderbuffer(),Ne(y.__webglDepthbuffer[V],R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,W)}}else{const V=R.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ne(y.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(R,y,L){const V=i.get(R);y!==void 0&&me(V.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Xe(R)}function N(R){const y=R.texture,L=i.get(R),V=i.get(y);R.addEventListener("dispose",C);const K=R.textures,W=R.isWebGLCubeRenderTarget===!0,ce=K.length>1;if(ce||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=y.version,o.memory.textures++),W){L.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[oe]=[];for(let ge=0;ge<y.mipmaps.length;ge++)L.__webglFramebuffer[oe][ge]=n.createFramebuffer()}else L.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)L.__webglFramebuffer[oe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ce)for(let oe=0,ge=K.length;oe<ge;oe++){const ye=i.get(K[oe]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Me(R)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let oe=0;oe<K.length;oe++){const ge=K[oe];L.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[oe]);const ye=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),fe=x(ge.internalFormat,ye,re,ge.colorSpace,R.isXRRenderTarget===!0),Le=Ze(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,fe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,L.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(L.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),_e(n.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)me(L.__webglFramebuffer[oe][ge],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge);else me(L.__webglFramebuffer[oe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(y)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let oe=0,ge=K.length;oe<ge;oe++){const ye=K[oe],re=i.get(ye);let fe=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,re.__webglTexture),_e(fe,ye),me(L.__webglFramebuffer,R,ye,n.COLOR_ATTACHMENT0+oe,fe,0),m(ye)&&d(fe)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,V.__webglTexture),_e(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)me(L.__webglFramebuffer[ge],R,y,n.COLOR_ATTACHMENT0,oe,ge);else me(L.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,oe,0);m(y)&&d(oe),t.unbindTexture()}R.depthBuffer&&Xe(R)}function lt(R){const y=R.textures;for(let L=0,V=y.length;L<V;L++){const K=y[L];if(m(K)){const W=v(R),ce=i.get(K).__webglTexture;t.bindTexture(W,ce),d(W),t.unbindTexture()}}}const Oe=[],Pe=[];function Ee(R){if(R.samples>0){if(Me(R)===!1){const y=R.textures,L=R.width,V=R.height;let K=n.COLOR_BUFFER_BIT;const W=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(R),oe=y.length>1;if(oe)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ge=R.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]);const re=i.get(y[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,L,V,0,0,L,V,K,n.NEAREST),l===!0&&(Oe.length=0,Pe.length=0,Oe.push(n.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Oe.push(W),Pe.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]);const re=i.get(y[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ze(R){return Math.min(r.maxSamples,R.samples)}function Me(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Be(R){const y=o.render.frame;c.get(R)!==y&&(c.set(R,y),R.update())}function bt(R,y){const L=R.colorSpace,V=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||L!==$o&&L!==Ar&&(Je.getTransfer(L)===rt?(V!==ri||K!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),y}function pt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=I,this.rebindTextures=Ht,this.setupRenderTarget=N,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Me}function lD(n,e){function t(i,r=Ar){let s;const o=Je.getTransfer(r);if(i===ur)return n.UNSIGNED_BYTE;if(i===zm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lS)return n.BYTE;if(i===uS)return n.SHORT;if(i===cl)return n.UNSIGNED_SHORT;if(i===km)return n.INT;if(i===Us)return n.UNSIGNED_INT;if(i===Di)return n.FLOAT;if(i===ea)return n.HALF_FLOAT;if(i===dS)return n.ALPHA;if(i===hS)return n.RGB;if(i===ri)return n.RGBA;if(i===dl)return n.DEPTH_COMPONENT;if(i===hl)return n.DEPTH_STENCIL;if(i===pS)return n.RED;if(i===Vm)return n.RED_INTEGER;if(i===mS)return n.RG;if(i===Hm)return n.RG_INTEGER;if(i===Gm)return n.RGBA_INTEGER;if(i===ku||i===zu||i===Bu||i===Vu)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ku)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ku)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hh||i===Gh||i===Wh||i===jh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xh||i===$h||i===Yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xh||i===$h)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qh||i===Kh||i===Zh||i===Qh||i===Jh||i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===op||i===ap||i===lp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ep)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===np)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ip)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===op)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ap)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===up||i===cp||i===fp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===up)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dp||i===hp||i===pp||i===mp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const uD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cD=`
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

}`;class fD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new bS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new fr({vertexShader:uD,fragmentShader:cD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new si(new Rs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dD extends ta{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const g=typeof XRWebGLBinding<"u",m=new fD,d={},v=t.getContextAttributes();let x=null,S=null;const w=[],T=[],C=new ze;let b=null;const M=new gi;M.viewport=new Ct;const E=new gi;E.viewport=new Ct;const P=[M,E],U=new LC;let z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=w[Z];return te===void 0&&(te=new sd,w[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=w[Z];return te===void 0&&(te=new sd,w[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=w[Z];return te===void 0&&(te=new sd,w[Z]=te),te.getHandSpace()};function $(Z){const te=T.indexOf(Z.inputSource);if(te===-1)return;const me=w[te];me!==void 0&&(me.update(Z.inputSource,Z.frame,u||o),me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",J);for(let Z=0;Z<w.length;Z++){const te=T[Z];te!==null&&(T[Z]=null,w[Z].disconnect(te))}z=null,G=null,m.reset();for(const Z in d)delete d[Z];e.setRenderTarget(x),p=null,h=null,f=null,r=null,S=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",H),r.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ne=null,Ae=null;v.depth&&(Ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=v.stencil?hl:dl,Ne=v.stencil?fl:Us);const Xe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new qr(h.textureWidth,h.textureHeight,{format:ri,type:ur,depthTexture:new RS(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new qr(p.framebufferWidth,p.framebufferHeight,{format:ri,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Z){for(let te=0;te<Z.removed.length;te++){const me=Z.removed[te],Ne=T.indexOf(me);Ne>=0&&(T[Ne]=null,w[Ne].disconnect(me))}for(let te=0;te<Z.added.length;te++){const me=Z.added[te];let Ne=T.indexOf(me);if(Ne===-1){for(let Xe=0;Xe<w.length;Xe++)if(Xe>=T.length){T.push(me),Ne=Xe;break}else if(T[Xe]===null){T[Xe]=me,Ne=Xe;break}if(Ne===-1)break}const Ae=w[Ne];Ae&&Ae.connect(me)}}const I=new j,q=new j;function Q(Z,te,me){I.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(me.matrixWorld);const Ne=I.distanceTo(q),Ae=te.projectionMatrix.elements,Xe=me.projectionMatrix.elements,Ht=Ae[14]/(Ae[10]-1),N=Ae[14]/(Ae[10]+1),lt=(Ae[9]+1)/Ae[5],Oe=(Ae[9]-1)/Ae[5],Pe=(Ae[8]-1)/Ae[0],Ee=(Xe[8]+1)/Xe[0],Ze=Ht*Pe,Me=Ht*Ee,Be=Ne/(-Pe+Ee),bt=Be*-Pe;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(bt),Z.translateZ(Be),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const pt=Ht+Be,R=N+Be,y=Ze-bt,L=Me+(Ne-bt),V=lt*N/R*pt,K=Oe*N/R*pt;Z.projectionMatrix.makePerspective(y,L,V,K,pt,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let te=Z.near,me=Z.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(me=m.depthFar)),U.near=E.near=M.near=te,U.far=E.far=M.far=me,(z!==U.near||G!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,G=U.far),U.layers.mask=Z.layers.mask|6,M.layers.mask=U.layers.mask&3,E.layers.mask=U.layers.mask&5;const Ne=Z.parent,Ae=U.cameras;le(U,Ne);for(let Xe=0;Xe<Ae.length;Xe++)le(Ae[Xe],Ne);Ae.length===2?Q(U,M,E):U.projectionMatrix.copy(M.projectionMatrix),_e(Z,U,Ne)};function _e(Z,te,me){me===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=gp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Z){return d[Z]};let je=null;function Ue(Z,te){if(c=te.getViewerPose(u||o),_=te,c!==null){const me=c.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ne=!1;me.length!==U.cameras.length&&(U.cameras.length=0,Ne=!0);for(let N=0;N<me.length;N++){const lt=me[N];let Oe=null;if(p!==null)Oe=p.getViewport(lt);else{const Ee=f.getViewSubImage(h,lt);Oe=Ee.viewport,N===0&&(e.setRenderTargetTextures(S,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(S))}let Pe=P[N];Pe===void 0&&(Pe=new gi,Pe.layers.enable(N),Pe.viewport=new Ct,P[N]=Pe),Pe.matrix.fromArray(lt.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(lt.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),N===0&&(U.matrix.copy(Pe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ne===!0&&U.cameras.push(Pe)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){f=i.getBinding();const N=f.getDepthInformation(me[0]);N&&N.isValid&&N.texture&&m.init(N,r.renderState)}if(Ae&&Ae.includes("camera-access")&&g){e.state.unbindTexture(),f=i.getBinding();for(let N=0;N<me.length;N++){const lt=me[N].camera;if(lt){let Oe=d[lt];Oe||(Oe=new bS,d[lt]=Oe);const Pe=f.getCameraImage(lt);Oe.sourceTexture=Pe}}}}for(let me=0;me<w.length;me++){const Ne=T[me],Ae=w[me];Ne!==null&&Ae!==void 0&&Ae.update(Ne,te,u||o)}je&&je(Z,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const Fe=new PS;Fe.setAnimationLoop(Ue),this.setAnimationLoop=function(Z){je=Z},this.dispose=function(){}}}const us=new cr,hD=new Ft;function pD(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,TS(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Cn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Cn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,us.copy(S),us.x*=-1,us.y*=-1,us.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(hD.makeRotationFromEuler(us)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Cn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mD(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(v,w);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function c(v){const x=f();v.__bindingPointIndex=x;const S=n.createBuffer(),w=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],S=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,C=S.length;T<C;T++){const b=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,E=b.length;M<E;M++){const P=b[M];if(p(P,T,M,w)===!0){const U=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let $=0;$<z.length;$++){const H=z[$],J=g(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,U+G,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,S,w){const T=v.value,C=x+"_"+S;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:w[C]=T.clone(),!0;{const b=w[C];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return w[C]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function _(v){const x=v.uniforms;let S=0;const w=16;for(let C=0,b=x.length;C<b;C++){const M=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,P=M.length;E<P;E++){const U=M[E],z=Array.isArray(U.value)?U.value:[U.value];for(let G=0,$=z.length;G<$;G++){const H=z[G],J=g(H),I=S%w,q=I%J.boundary,Q=I+q;S+=q,Q!==0&&w-Q<J.storage&&(S+=w-Q),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=J.storage}}}const T=S%w;return T>0&&(S+=w-T),v.__size=S,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class gD{constructor(e={}){const{canvas:t=KA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let w=!1;this._outputColorSpace=Zn;let T=0,C=0,b=null,M=-1,E=null;const P=new Ct,U=new Ct;let z=null;const G=new et(0);let $=0,H=t.width,J=t.height,I=1,q=null,Q=null;const le=new Ct(0,0,H,J),_e=new Ct(0,0,H,J);let je=!1;const Ue=new CS;let Fe=!1,Z=!1;const te=new Ft,me=new j,Ne=new Ct,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Ht(){return b===null?I:1}let N=i;function lt(A,O){return t.getContext(A,O)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Om}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ie,!1),N===null){const O="webgl2";if(N=lt(O,A),N===null)throw lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Oe,Pe,Ee,Ze,Me,Be,bt,pt,R,y,L,V,K,W,ce,oe,ge,ye,re,fe,Le,Ce,he,Ve;function F(){Oe=new A2(N),Oe.init(),Ce=new lD(N,Oe),Pe=new x2(N,Oe,e,Ce),Ee=new oD(N,Oe),Pe.reversedDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),Ze=new b2(N),Me=new $P,Be=new aD(N,Oe,Ee,Me,Pe,Ce,Ze),bt=new S2(S),pt=new T2(S),R=new UC(N),he=new _2(N,R),y=new C2(N,R,Ze,he),L=new D2(N,y,R,Ze),re=new P2(N,Pe,Be),oe=new y2(Me),V=new XP(S,bt,pt,Oe,Pe,he,oe),K=new pD(S,Me),W=new qP,ce=new tD(Oe),ye=new g2(S,bt,pt,Ee,L,p,l),ge=new rD(S,L,Pe),Ve=new mD(N,Ze,Pe,Ee),fe=new v2(N,Oe,Ze),Le=new R2(N,Oe,Ze),Ze.programs=V.programs,S.capabilities=Pe,S.extensions=Oe,S.properties=Me,S.renderLists=W,S.shadowMap=ge,S.state=Ee,S.info=Ze}F();const ae=new dD(S,N);this.xr=ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(A){A!==void 0&&(I=A,this.setSize(H,J,!1))},this.getSize=function(A){return A.set(H,J)},this.setSize=function(A,O,X=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,J=O,t.width=Math.floor(A*I),t.height=Math.floor(O*I),X===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(H*I,J*I).floor()},this.setDrawingBufferSize=function(A,O,X){H=A,J=O,I=X,t.width=Math.floor(A*X),t.height=Math.floor(O*X),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,O,X,Y){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,O,X,Y),Ee.viewport(P.copy(le).multiplyScalar(I).round())},this.getScissor=function(A){return A.copy(_e)},this.setScissor=function(A,O,X,Y){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,O,X,Y),Ee.scissor(U.copy(_e).multiplyScalar(I).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(A){Ee.setScissorTest(je=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,X=!0){let Y=0;if(A){let k=!1;if(b!==null){const se=b.texture.format;k=se===Gm||se===Hm||se===Vm}if(k){const se=b.texture.type,pe=se===ur||se===Us||se===cl||se===fl||se===zm||se===Bm,we=ye.getClearColor(),xe=ye.getClearAlpha(),De=we.r,Ie=we.g,Re=we.b;pe?(_[0]=De,_[1]=Ie,_[2]=Re,_[3]=xe,N.clearBufferuiv(N.COLOR,0,_)):(g[0]=De,g[1]=Ie,g[2]=Re,g[3]=xe,N.clearBufferiv(N.COLOR,0,g))}else Y|=N.COLOR_BUFFER_BIT}O&&(Y|=N.DEPTH_BUFFER_BIT),X&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),ye.dispose(),W.dispose(),ce.dispose(),Me.dispose(),bt.dispose(),pt.dispose(),L.dispose(),he.dispose(),Ve.dispose(),V.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ei),ae.removeEventListener("sessionend",Xm),es.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Ze.autoReset,O=ge.enabled,X=ge.autoUpdate,Y=ge.needsUpdate,k=ge.type;F(),Ze.autoReset=A,ge.enabled=O,ge.autoUpdate=X,ge.needsUpdate=Y,ge.type=k}function ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ee(A){const O=A.target;O.removeEventListener("dispose",ee),Te(O)}function Te(A){ke(A),Me.remove(A)}function ke(A){const O=Me.get(A).programs;O!==void 0&&(O.forEach(function(X){V.releaseProgram(X)}),A.isShaderMaterial&&V.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,X,Y,k,se){O===null&&(O=Ae);const pe=k.isMesh&&k.matrixWorld.determinant()<0,we=US(A,O,X,Y,k);Ee.setMaterial(Y,pe);let xe=X.index,De=1;if(Y.wireframe===!0){if(xe=y.getWireframeAttribute(X),xe===void 0)return;De=2}const Ie=X.drawRange,Re=X.attributes.position;let $e=Ie.start*De,it=(Ie.start+Ie.count)*De;se!==null&&($e=Math.max($e,se.start*De),it=Math.min(it,(se.start+se.count)*De)),xe!==null?($e=Math.max($e,0),it=Math.min(it,xe.count)):Re!=null&&($e=Math.max($e,0),it=Math.min(it,Re.count));const Tt=it-$e;if(Tt<0||Tt===1/0)return;he.setup(k,Y,we,X,xe);let ft,st=fe;if(xe!==null&&(ft=R.get(xe),st=Le,st.setIndex(ft)),k.isMesh)Y.wireframe===!0?(Ee.setLineWidth(Y.wireframeLinewidth*Ht()),st.setMode(N.LINES)):st.setMode(N.TRIANGLES);else if(k.isLine){let be=Y.linewidth;be===void 0&&(be=1),Ee.setLineWidth(be*Ht()),k.isLineSegments?st.setMode(N.LINES):k.isLineLoop?st.setMode(N.LINE_LOOP):st.setMode(N.LINE_STRIP)}else k.isPoints?st.setMode(N.POINTS):k.isSprite&&st.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)pl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))st.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const be=k._multiDrawStarts,_t=k._multiDrawCounts,Qe=k._multiDrawCount,Pn=xe?R.get(xe).bytesPerElement:1,Bs=Me.get(Y).currentProgram.getUniforms();for(let Dn=0;Dn<Qe;Dn++)Bs.setValue(N,"_gl_DrawID",Dn),st.render(be[Dn]/Pn,_t[Dn])}else if(k.isInstancedMesh)st.renderInstances($e,Tt,k.count);else if(X.isInstancedBufferGeometry){const be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_t=Math.min(X.instanceCount,be);st.renderInstances($e,Tt,_t)}else st.render($e,Tt)};function ut(A,O,X){A.transparent===!0&&A.side===qi&&A.forceSinglePass===!1?(A.side=Cn,A.needsUpdate=!0,Pl(A,O,X),A.side=Yr,A.needsUpdate=!0,Pl(A,O,X),A.side=qi):Pl(A,O,X)}this.compile=function(A,O,X=null){X===null&&(X=A),d=ce.get(X),d.init(O),x.push(d),X.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),A!==X&&A.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const Y=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const se=k.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const we=se[pe];ut(we,X,k),Y.add(we)}else ut(se,X,k),Y.add(se)}),d=x.pop(),Y},this.compileAsync=function(A,O,X=null){const Y=this.compile(A,O,X);return new Promise(k=>{function se(){if(Y.forEach(function(pe){Me.get(pe).currentProgram.isReady()&&Y.delete(pe)}),Y.size===0){k(A);return}setTimeout(se,10)}Oe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let tt=null;function ki(A){tt&&tt(A)}function Ei(){es.stop()}function Xm(){es.start()}const es=new PS;es.setAnimationLoop(ki),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(A){tt=A,ae.setAnimationLoop(A),A===null?es.stop():es.start()},ae.addEventListener("sessionstart",Ei),ae.addEventListener("sessionend",Xm),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,O,b),d=ce.get(A,x.length),d.init(O),x.push(d),te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ue.setFromProjectionMatrix(te,Li,O.reversedDepth),Z=this.localClippingEnabled,Fe=oe.init(this.clippingPlanes,Z),m=W.get(A,v.length),m.init(),v.push(m),ae.enabled===!0&&ae.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&Zc(se,O,-1/0,S.sortObjects)}Zc(A,O,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(q,Q),Xe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Xe&&ye.addToRenderList(m,A),this.info.render.frame++,Fe===!0&&oe.beginShadows();const X=d.state.shadowsArray;ge.render(X,A,O),Fe===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,k=m.transmissive;if(d.setupLights(),O.isArrayCamera){const se=O.cameras;if(k.length>0)for(let pe=0,we=se.length;pe<we;pe++){const xe=se[pe];Ym(Y,k,A,xe)}Xe&&ye.render(A);for(let pe=0,we=se.length;pe<we;pe++){const xe=se[pe];$m(m,A,xe,xe.viewport)}}else k.length>0&&Ym(Y,k,A,O),Xe&&ye.render(A),$m(m,A,O);b!==null&&C===0&&(Be.updateMultisampleRenderTarget(b),Be.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(S,A,O),he.resetDefaultState(),M=-1,E=null,x.pop(),x.length>0?(d=x[x.length-1],Fe===!0&&oe.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Zc(A,O,X,Y){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ue.intersectsSprite(A)){Y&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(te);const pe=L.update(A),we=A.material;we.visible&&m.push(A,pe,we,X,Ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ue.intersectsObject(A))){const pe=L.update(A),we=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ne.copy(pe.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(te)),Array.isArray(we)){const xe=pe.groups;for(let De=0,Ie=xe.length;De<Ie;De++){const Re=xe[De],$e=we[Re.materialIndex];$e&&$e.visible&&m.push(A,pe,$e,X,Ne.z,Re)}}else we.visible&&m.push(A,pe,we,X,Ne.z,null)}}const se=A.children;for(let pe=0,we=se.length;pe<we;pe++)Zc(se[pe],O,X,Y)}function $m(A,O,X,Y){const k=A.opaque,se=A.transmissive,pe=A.transparent;d.setupLightsView(X),Fe===!0&&oe.setGlobalState(S.clippingPlanes,X),Y&&Ee.viewport(P.copy(Y)),k.length>0&&bl(k,O,X),se.length>0&&bl(se,O,X),pe.length>0&&bl(pe,O,X),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Ym(A,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new qr(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?ea:ur,minFilter:Ss,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const se=d.state.transmissionRenderTarget[Y.id],pe=Y.viewport||P;se.setSize(pe.z*S.transmissionResolutionScale,pe.w*S.transmissionResolutionScale);const we=S.getRenderTarget(),xe=S.getActiveCubeFace(),De=S.getActiveMipmapLevel();S.setRenderTarget(se),S.getClearColor(G),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),Xe&&ye.render(X);const Ie=S.toneMapping;S.toneMapping=Gr;const Re=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),Fe===!0&&oe.setGlobalState(S.clippingPlanes,Y),bl(A,X,Y),Be.updateMultisampleRenderTarget(se),Be.updateRenderTargetMipmap(se),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let it=0,Tt=O.length;it<Tt;it++){const ft=O[it],st=ft.object,be=ft.geometry,_t=ft.material,Qe=ft.group;if(_t.side===qi&&st.layers.test(Y.layers)){const Pn=_t.side;_t.side=Cn,_t.needsUpdate=!0,qm(st,X,Y,be,_t,Qe),_t.side=Pn,_t.needsUpdate=!0,$e=!0}}$e===!0&&(Be.updateMultisampleRenderTarget(se),Be.updateRenderTargetMipmap(se))}S.setRenderTarget(we,xe,De),S.setClearColor(G,$),Re!==void 0&&(Y.viewport=Re),S.toneMapping=Ie}function bl(A,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let k=0,se=A.length;k<se;k++){const pe=A[k],we=pe.object,xe=pe.geometry,De=pe.group;let Ie=pe.material;Ie.allowOverride===!0&&Y!==null&&(Ie=Y),we.layers.test(X.layers)&&qm(we,O,X,xe,Ie,De)}}function qm(A,O,X,Y,k,se){A.onBeforeRender(S,O,X,Y,k,se),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(S,O,X,Y,A,se),k.transparent===!0&&k.side===qi&&k.forceSinglePass===!1?(k.side=Cn,k.needsUpdate=!0,S.renderBufferDirect(X,O,Y,k,A,se),k.side=Yr,k.needsUpdate=!0,S.renderBufferDirect(X,O,Y,k,A,se),k.side=qi):S.renderBufferDirect(X,O,Y,k,A,se),A.onAfterRender(S,O,X,Y,k,se)}function Pl(A,O,X){O.isScene!==!0&&(O=Ae);const Y=Me.get(A),k=d.state.lights,se=d.state.shadowsArray,pe=k.state.version,we=V.getParameters(A,k.state,se,O,X),xe=V.getProgramCacheKey(we);let De=Y.programs;Y.environment=A.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(A.isMeshStandardMaterial?pt:bt).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",ee),De=new Map,Y.programs=De);let Ie=De.get(xe);if(Ie!==void 0){if(Y.currentProgram===Ie&&Y.lightsStateVersion===pe)return Zm(A,we),Ie}else we.uniforms=V.getUniforms(A),A.onBeforeCompile(we,S),Ie=V.acquireProgram(we,xe),De.set(xe,Ie),Y.uniforms=we.uniforms;const Re=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Re.clippingPlanes=oe.uniform),Zm(A,we),Y.needsLights=OS(A),Y.lightsStateVersion=pe,Y.needsLights&&(Re.ambientLightColor.value=k.state.ambient,Re.lightProbe.value=k.state.probe,Re.directionalLights.value=k.state.directional,Re.directionalLightShadows.value=k.state.directionalShadow,Re.spotLights.value=k.state.spot,Re.spotLightShadows.value=k.state.spotShadow,Re.rectAreaLights.value=k.state.rectArea,Re.ltc_1.value=k.state.rectAreaLTC1,Re.ltc_2.value=k.state.rectAreaLTC2,Re.pointLights.value=k.state.point,Re.pointLightShadows.value=k.state.pointShadow,Re.hemisphereLights.value=k.state.hemi,Re.directionalShadowMap.value=k.state.directionalShadowMap,Re.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Re.spotShadowMap.value=k.state.spotShadowMap,Re.spotLightMatrix.value=k.state.spotLightMatrix,Re.spotLightMap.value=k.state.spotLightMap,Re.pointShadowMap.value=k.state.pointShadowMap,Re.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Ie,Y.uniformsList=null,Ie}function Km(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=Hu.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Zm(A,O){const X=Me.get(A);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function US(A,O,X,Y,k){O.isScene!==!0&&(O=Ae),Be.resetTextureUnits();const se=O.fog,pe=Y.isMeshStandardMaterial?O.environment:null,we=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:$o,xe=(Y.isMeshStandardMaterial?pt:bt).get(Y.envMap||pe),De=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ie=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Re=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,it=!!X.morphAttributes.color;let Tt=Gr;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Tt=S.toneMapping);const ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=ft!==void 0?ft.length:0,be=Me.get(Y),_t=d.state.lights;if(Fe===!0&&(Z===!0||A!==E)){const on=A===E&&Y.id===M;oe.setState(Y,A,on)}let Qe=!1;Y.version===be.__version?(be.needsLights&&be.lightsStateVersion!==_t.state.version||be.outputColorSpace!==we||k.isBatchedMesh&&be.batching===!1||!k.isBatchedMesh&&be.batching===!0||k.isBatchedMesh&&be.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&be.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&be.instancing===!1||!k.isInstancedMesh&&be.instancing===!0||k.isSkinnedMesh&&be.skinning===!1||!k.isSkinnedMesh&&be.skinning===!0||k.isInstancedMesh&&be.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&be.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&be.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&be.instancingMorph===!1&&k.morphTexture!==null||be.envMap!==xe||Y.fog===!0&&be.fog!==se||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==oe.numPlanes||be.numIntersection!==oe.numIntersection)||be.vertexAlphas!==De||be.vertexTangents!==Ie||be.morphTargets!==Re||be.morphNormals!==$e||be.morphColors!==it||be.toneMapping!==Tt||be.morphTargetsCount!==st)&&(Qe=!0):(Qe=!0,be.__version=Y.version);let Pn=be.currentProgram;Qe===!0&&(Pn=Pl(Y,O,k));let Bs=!1,Dn=!1,ia=!1;const vt=Pn.getUniforms(),$n=be.uniforms;if(Ee.useProgram(Pn.program)&&(Bs=!0,Dn=!0,ia=!0),Y.id!==M&&(M=Y.id,Dn=!0),Bs||E!==A){Ee.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),vt.setValue(N,"projectionMatrix",A.projectionMatrix),vt.setValue(N,"viewMatrix",A.matrixWorldInverse);const mn=vt.map.cameraPosition;mn!==void 0&&mn.setValue(N,me.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&vt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Dn=!0,ia=!0)}if(k.isSkinnedMesh){vt.setOptional(N,k,"bindMatrix"),vt.setOptional(N,k,"bindMatrixInverse");const on=k.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),vt.setValue(N,"boneTexture",on.boneTexture,Be))}k.isBatchedMesh&&(vt.setOptional(N,k,"batchingTexture"),vt.setValue(N,"batchingTexture",k._matricesTexture,Be),vt.setOptional(N,k,"batchingIdTexture"),vt.setValue(N,"batchingIdTexture",k._indirectTexture,Be),vt.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&vt.setValue(N,"batchingColorTexture",k._colorsTexture,Be));const Yn=X.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&re.update(k,X,Pn),(Dn||be.receiveShadow!==k.receiveShadow)&&(be.receiveShadow=k.receiveShadow,vt.setValue(N,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&($n.envMap.value=xe,$n.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&($n.envMapIntensity.value=O.environmentIntensity),Dn&&(vt.setValue(N,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&FS($n,ia),se&&Y.fog===!0&&K.refreshFogUniforms($n,se),K.refreshMaterialUniforms($n,Y,I,J,d.state.transmissionRenderTarget[A.id]),Hu.upload(N,Km(be),$n,Be)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Hu.upload(N,Km(be),$n,Be),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(N,"center",k.center),vt.setValue(N,"modelViewMatrix",k.modelViewMatrix),vt.setValue(N,"normalMatrix",k.normalMatrix),vt.setValue(N,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const on=Y.uniformsGroups;for(let mn=0,Qc=on.length;mn<Qc;mn++){const ts=on[mn];Ve.update(ts,Pn),Ve.bind(ts,Pn)}}return Pn}function FS(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function OS(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,O,X){const Y=Me.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Me.get(A.texture).__webglTexture=O,Me.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){const X=Me.get(A);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const kS=N.createFramebuffer();this.setRenderTarget=function(A,O=0,X=0){b=A,T=O,C=X;let Y=!0,k=null,se=!1,pe=!1;if(A){const xe=Me.get(A);if(xe.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(xe.__webglFramebuffer===void 0)Be.setupRenderTarget(A);else if(xe.__hasExternalTextures)Be.rebindTextures(A,Me.get(A.texture).__webglTexture,Me.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Re=A.depthTexture;if(xe.__boundDepthTexture!==Re){if(Re!==null&&Me.has(Re)&&(A.width!==Re.image.width||A.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(A)}}const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(pe=!0);const Ie=Me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ie[O])?k=Ie[O][X]:k=Ie[O],se=!0):A.samples>0&&Be.useMultisampledRTT(A)===!1?k=Me.get(A).__webglMultisampledFramebuffer:Array.isArray(Ie)?k=Ie[X]:k=Ie,P.copy(A.viewport),U.copy(A.scissor),z=A.scissorTest}else P.copy(le).multiplyScalar(I).floor(),U.copy(_e).multiplyScalar(I).floor(),z=je;if(X!==0&&(k=kS),Ee.bindFramebuffer(N.FRAMEBUFFER,k)&&Y&&Ee.drawBuffers(A,k),Ee.viewport(P),Ee.scissor(U),Ee.setScissorTest(z),se){const xe=Me.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe.__webglTexture,X)}else if(pe){const xe=O;for(let De=0;De<A.textures.length;De++){const Ie=Me.get(A.textures[De]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+De,Ie.__webglTexture,X,xe)}}else if(A!==null&&X!==0){const xe=Me.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xe.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(A,O,X,Y,k,se,pe,we=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){Ee.bindFramebuffer(N.FRAMEBUFFER,xe);try{const De=A.textures[we],Ie=De.format,Re=De.type;if(!Pe.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-Y&&X>=0&&X<=A.height-k&&(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+we),N.readPixels(O,X,Y,k,Ce.convert(Ie),Ce.convert(Re),se))}finally{const De=b!==null?Me.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(A,O,X,Y,k,se,pe,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe)if(O>=0&&O<=A.width-Y&&X>=0&&X<=A.height-k){Ee.bindFramebuffer(N.FRAMEBUFFER,xe);const De=A.textures[we],Ie=De.format,Re=De.type;if(!Pe.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,$e),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+we),N.readPixels(O,X,Y,k,Ce.convert(Ie),Ce.convert(Re),0);const it=b!==null?Me.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,it);const Tt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ZA(N,Tt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,$e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.deleteBuffer($e),N.deleteSync(Tt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,X=0){const Y=Math.pow(2,-X),k=Math.floor(A.image.width*Y),se=Math.floor(A.image.height*Y),pe=O!==null?O.x:0,we=O!==null?O.y:0;Be.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,pe,we,k,se),Ee.unbindTexture()};const zS=N.createFramebuffer(),BS=N.createFramebuffer();this.copyTextureToTexture=function(A,O,X=null,Y=null,k=0,se=null){se===null&&(k!==0?(pl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=k,k=0):se=0);let pe,we,xe,De,Ie,Re,$e,it,Tt;const ft=A.isCompressedTexture?A.mipmaps[se]:A.image;if(X!==null)pe=X.max.x-X.min.x,we=X.max.y-X.min.y,xe=X.isBox3?X.max.z-X.min.z:1,De=X.min.x,Ie=X.min.y,Re=X.isBox3?X.min.z:0;else{const Yn=Math.pow(2,-k);pe=Math.floor(ft.width*Yn),we=Math.floor(ft.height*Yn),A.isDataArrayTexture?xe=ft.depth:A.isData3DTexture?xe=Math.floor(ft.depth*Yn):xe=1,De=0,Ie=0,Re=0}Y!==null?($e=Y.x,it=Y.y,Tt=Y.z):($e=0,it=0,Tt=0);const st=Ce.convert(O.format),be=Ce.convert(O.type);let _t;O.isData3DTexture?(Be.setTexture3D(O,0),_t=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Be.setTexture2DArray(O,0),_t=N.TEXTURE_2D_ARRAY):(Be.setTexture2D(O,0),_t=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const Qe=N.getParameter(N.UNPACK_ROW_LENGTH),Pn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Bs=N.getParameter(N.UNPACK_SKIP_PIXELS),Dn=N.getParameter(N.UNPACK_SKIP_ROWS),ia=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,De),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ie),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Re);const vt=A.isDataArrayTexture||A.isData3DTexture,$n=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){const Yn=Me.get(A),on=Me.get(O),mn=Me.get(Yn.__renderTarget),Qc=Me.get(on.__renderTarget);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,Qc.__webglFramebuffer);for(let ts=0;ts<xe;ts++)vt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(A).__webglTexture,k,Re+ts),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(O).__webglTexture,se,Tt+ts)),N.blitFramebuffer(De,Ie,pe,we,$e,it,pe,we,N.DEPTH_BUFFER_BIT,N.NEAREST);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||Me.has(A)){const Yn=Me.get(A),on=Me.get(O);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,zS),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,BS);for(let mn=0;mn<xe;mn++)vt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yn.__webglTexture,k,Re+mn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Yn.__webglTexture,k),$n?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,on.__webglTexture,se,Tt+mn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,on.__webglTexture,se),k!==0?N.blitFramebuffer(De,Ie,pe,we,$e,it,pe,we,N.COLOR_BUFFER_BIT,N.NEAREST):$n?N.copyTexSubImage3D(_t,se,$e,it,Tt+mn,De,Ie,pe,we):N.copyTexSubImage2D(_t,se,$e,it,De,Ie,pe,we);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else $n?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(_t,se,$e,it,Tt,pe,we,xe,st,be,ft.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(_t,se,$e,it,Tt,pe,we,xe,st,ft.data):N.texSubImage3D(_t,se,$e,it,Tt,pe,we,xe,st,be,ft):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,se,$e,it,pe,we,st,be,ft.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,se,$e,it,ft.width,ft.height,st,ft.data):N.texSubImage2D(N.TEXTURE_2D,se,$e,it,pe,we,st,be,ft);N.pixelStorei(N.UNPACK_ROW_LENGTH,Qe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Pn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Bs),N.pixelStorei(N.UNPACK_SKIP_ROWS,Dn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ia),se===0&&O.generateMipmaps&&N.generateMipmap(_t),Ee.unbindTexture()},this.initRenderTarget=function(A){Me.get(A).__webglFramebuffer===void 0&&Be.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Be.setTextureCube(A,0):A.isData3DTexture?Be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Be.setTexture2DArray(A,0):Be.setTexture2D(A,0),Ee.unbindTexture()},this.resetState=function(){T=0,C=0,b=null,Ee.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const _D=["#5227FF","#FF9FFC","#B19EEF"];function vD({mouseForce:n=20,cursorSize:e=100,isViscous:t=!1,viscous:i=30,iterationsViscous:r=32,iterationsPoisson:s=32,dt:o=.014,BFECC:a=!0,resolution:l=.5,isBounce:u=!1,colors:c=_D,style:f={},className:h="",autoDemo:p=!0,autoSpeed:_=.5,autoIntensity:g=2.2,takeoverDuration:m=.25,autoResumeDelay:d=1e3,autoRampDuration:v=.6}){const x=B.useRef(null),S=B.useRef(null),w=B.useRef(null),T=B.useRef(null),C=B.useRef(null),b=B.useRef(!0),M=B.useRef(null);return B.useEffect(()=>{if(!x.current)return;function E(R){let y;Array.isArray(R)&&R.length>0?y=R.length===1?[R[0],R[0]]:R:y=["#ffffff","#ffffff"];const L=y.length,V=new Uint8Array(L*4);for(let W=0;W<L;W++){const ce=new et(y[W]);V[W*4+0]=Math.round(ce.r*255),V[W*4+1]=Math.round(ce.g*255),V[W*4+2]=Math.round(ce.b*255),V[W*4+3]=255}const K=new MC(V,L,1,ri);return K.magFilter=xn,K.minFilter=xn,K.wrapS=vi,K.wrapT=vi,K.generateMipmaps=!1,K.needsUpdate=!0,K}const P=E(c),U=new Ct(0,0,0,0);class z{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(y){this.container=y,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new gD({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new et(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height);const L=this.renderer.domElement;L.style.width="100%",L.style.height="100%",L.style.display="block",this.clock=new NC,this.clock.start()}resize(){if(!this.container)return;const y=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(y.width)),this.height=Math.max(1,Math.floor(y.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.clock&&(this.delta=this.clock.getDelta(),this.time+=this.delta)}}const G=new z;class ${constructor(){this.mouseMoved=!1,this.coords=new ze,this.coords_old=new ze,this.diff=new ze,this.timer=null,this.container=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ze,this.takeoverTo=new ze,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this)}init(y){this.container=y,y.addEventListener("mousemove",this._onMouseMove),y.addEventListener("touchstart",this._onTouchStart,{passive:!0}),y.addEventListener("touchmove",this._onTouchMove,{passive:!0}),y.addEventListener("mouseenter",this._onMouseEnter),y.addEventListener("mouseleave",this._onMouseLeave),y.addEventListener("touchend",this._onTouchEnd)}dispose(){const y=this.container;y&&(y.removeEventListener("mousemove",this._onMouseMove),y.removeEventListener("touchstart",this._onTouchStart),y.removeEventListener("touchmove",this._onTouchMove),y.removeEventListener("mouseenter",this._onMouseEnter),y.removeEventListener("mouseleave",this._onMouseLeave),y.removeEventListener("touchend",this._onTouchEnd))}setCoords(y,L){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const V=this.container.getBoundingClientRect(),K=(y-V.left)/V.width,W=(L-V.top)/V.height;this.coords.set(K*2-1,-(W*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(y,L){this.coords.set(y,L),this.mouseMoved=!0}onDocumentMouseMove(y){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const L=this.container.getBoundingClientRect(),V=(y.clientX-L.left)/L.width,K=(y.clientY-L.top)/L.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(V*2-1,-(K*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(y.clientX,y.clientY),this.hasUserControl=!0}onDocumentTouchStart(y){if(y.touches.length===1){const L=y.touches[0];this.onInteract&&this.onInteract(),this.setCoords(L.pageX,L.pageY),this.hasUserControl=!0}}onDocumentTouchMove(y){if(y.touches.length===1){const L=y.touches[0];this.onInteract&&this.onInteract(),this.setCoords(L.pageX,L.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const y=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(y>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const L=y*y*(3-2*y);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,L)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const H=new $;class J{constructor(y,L,V){this.active=!1,this.current=new ze(0,0),this.target=new ze,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ze,this.mouse=y,this.manager=L,this.enabled=V.enabled,this.speed=V.speed,this.resumeDelay=V.resumeDelay||3e3,this.rampDurationMs=(V.rampDuration||0)*1e3,this.pickNewTarget()}pickNewTarget(){const y=Math.random;this.target.set((y()*2-1)*(1-this.margin),(y()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const y=performance.now();if(y-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=y,this.activationTime=y),!this.active)return;this.mouse.isAutoActive=!0;let V=(y-this.lastTime)/1e3;this.lastTime=y,V>.2&&(V=.016);const K=this._tmpDir.subVectors(this.target,this.current),W=K.length();if(W<.01){this.pickNewTarget();return}K.normalize();let ce=1;if(this.rampDurationMs>0){const ye=Math.min(1,(y-this.activationTime)/this.rampDurationMs);ce=ye*ye*(3-2*ye)}const oe=this.speed*V*ce,ge=Math.min(oe,W);this.current.addScaledVector(K,ge),this.mouse.setNormalized(this.current.x,this.current.y)}}const I=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,q=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,Q=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,le=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,_e=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,je=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Ue=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Fe=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,Z=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,te=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class me{constructor(y){var L;this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null,this.props=y||{},this.uniforms=(L=this.props.material)==null?void 0:L.uniforms}init(...y){this.scene=new t0,this.camera=new wc,this.uniforms&&(this.material=new _u(this.props.material),this.geometry=new Rs(2,2),this.plane=new si(this.geometry,this.material),this.scene.add(this.plane))}update(...y){!G.renderer||!this.scene||!this.camera||(G.renderer.setRenderTarget(this.props.output||null),G.renderer.render(this.scene,this.camera),G.renderer.setRenderTarget(null))}}class Ne extends me{constructor(y){super({material:{vertexShader:I,fragmentShader:le,uniforms:{boundarySpace:{value:y.cellScale},px:{value:y.cellScale},fboSize:{value:y.fboSize},velocity:{value:y.src.texture},dt:{value:y.dt},isBFECC:{value:!0}}},output:y.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const y=new pr,L=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);y.setAttribute("position",new Si(L,3));const V=new _u({vertexShader:q,fragmentShader:le,uniforms:this.uniforms});this.line=new RC(y,V),this.scene.add(this.line)}update(...y){const{dt:L,isBounce:V,BFECC:K}=y[0]||{};this.uniforms&&(typeof L=="number"&&(this.uniforms.dt.value=L),typeof V=="boolean"&&(this.line.visible=V),typeof K=="boolean"&&(this.uniforms.isBFECC.value=K),super.update())}}class Ae extends me{constructor(y){super({output:y.dst}),this.init(y)}init(y){super.init();const L=new Rs(1,1),V=new _u({vertexShader:Q,fragmentShader:Ue,blending:Rh,depthWrite:!1,uniforms:{px:{value:y.cellScale},force:{value:new ze(0,0)},center:{value:new ze(0,0)},scale:{value:new ze(y.cursor_size,y.cursor_size)}}});this.mouse=new si(L,V),this.scene.add(this.mouse)}update(...y){const L=y[0]||{},V=H.diff.x/2*(L.mouse_force||0),K=H.diff.y/2*(L.mouse_force||0),W=L.cellScale||{x:1,y:1},ce=L.cursor_size||0,oe=ce*W.x,ge=ce*W.y,ye=Math.min(Math.max(H.coords.x,-1+oe+W.x*2),1-oe-W.x*2),re=Math.min(Math.max(H.coords.y,-1+ge+W.y*2),1-ge-W.y*2),fe=this.mouse.material.uniforms;fe.force.value.set(V,K),fe.center.value.set(ye,re),fe.scale.value.set(ce,ce),super.update()}}class Xe extends me{constructor(y){super({material:{vertexShader:I,fragmentShader:te,uniforms:{boundarySpace:{value:y.boundarySpace},velocity:{value:y.src.texture},velocity_new:{value:y.dst_.texture},v:{value:y.viscous},px:{value:y.cellScale},dt:{value:y.dt}}},output:y.dst,output0:y.dst_,output1:y.dst}),this.init()}update(...y){const{viscous:L,iterations:V,dt:K}=y[0]||{};if(!this.uniforms)return;let W,ce;typeof L=="number"&&(this.uniforms.v.value=L);const oe=V??0;for(let ge=0;ge<oe;ge++)ge%2===0?(W=this.props.output0,ce=this.props.output1):(W=this.props.output1,ce=this.props.output0),this.uniforms.velocity_new.value=W.texture,this.props.output=ce,typeof K=="number"&&(this.uniforms.dt.value=K),super.update();return ce}}class Ht extends me{constructor(y){super({material:{vertexShader:I,fragmentShader:je,uniforms:{boundarySpace:{value:y.boundarySpace},velocity:{value:y.src.texture},px:{value:y.cellScale},dt:{value:y.dt}}},output:y.dst}),this.init()}update(...y){const{vel:L}=y[0]||{};this.uniforms&&L&&(this.uniforms.velocity.value=L.texture),super.update()}}class N extends me{constructor(y){super({material:{vertexShader:I,fragmentShader:Fe,uniforms:{boundarySpace:{value:y.boundarySpace},pressure:{value:y.dst_.texture},divergence:{value:y.src.texture},px:{value:y.cellScale}}},output:y.dst,output0:y.dst_,output1:y.dst}),this.init()}update(...y){const{iterations:L}=y[0]||{};let V,K;const W=L??0;for(let ce=0;ce<W;ce++)ce%2===0?(V=this.props.output0,K=this.props.output1):(V=this.props.output1,K=this.props.output0),this.uniforms&&(this.uniforms.pressure.value=V.texture),this.props.output=K,super.update();return K}}class lt extends me{constructor(y){super({material:{vertexShader:I,fragmentShader:Z,uniforms:{boundarySpace:{value:y.boundarySpace},pressure:{value:y.src_p.texture},velocity:{value:y.src_v.texture},px:{value:y.cellScale},dt:{value:y.dt}}},output:y.dst}),this.init()}update(...y){const{vel:L,pressure:V}=y[0]||{};this.uniforms&&L&&V&&(this.uniforms.velocity.value=L.texture,this.uniforms.pressure.value=V.texture),super.update()}}class Oe{constructor(y){this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ze,this.cellScale=new ze,this.boundarySpace=new ze,this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...y},this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?ea:Di}createAllFBO(){const L={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:xn,magFilter:xn,wrapS:vi,wrapT:vi};for(const V in this.fbos)this.fbos[V]=new qr(this.fboSize.x,this.fboSize.y,L)}createShaderPass(){this.advection=new Ne({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ae({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new Xe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Ht({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new N({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new lt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const y=Math.max(1,Math.round(this.options.resolution*G.width)),L=Math.max(1,Math.round(this.options.resolution*G.height));this.cellScale.set(1/y,1/L),this.fboSize.set(y,L)}resize(){this.calcSize();for(const y in this.fbos)this.fbos[y].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let y=this.fbos.vel_1;this.options.isViscous&&(y=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:y});const L=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:y,pressure:L})}}class Pe{constructor(){this.simulation=new Oe,this.scene=new t0,this.camera=new wc,this.output=new si(new Rs(2,2),new _u({vertexShader:I,fragmentShader:_e,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ze},palette:{value:P},bgColor:{value:U}}})),this.scene.add(this.output)}resize(){this.simulation.resize()}render(){G.renderer&&(G.renderer.setRenderTarget(null),G.renderer.render(this.scene,this.camera))}update(){this.simulation.update(),this.render()}}class Ee{constructor(y){this.lastUserInteraction=performance.now(),this.running=!1,this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),this.props=y,G.init(y.$wrapper),H.init(y.$wrapper),H.autoIntensity=y.autoIntensity,H.takeoverDuration=y.takeoverDuration,H.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new J(H,this,{enabled:y.autoDemo,speed:y.autoSpeed,resumeDelay:y.autoResumeDelay,rampDuration:y.autoRampDuration}),this.init(),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():b.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility)}init(){G.renderer&&(this.props.$wrapper.prepend(G.renderer.domElement),this.output=new Pe)}resize(){G.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),H.update(),G.update(),this.output.update()}loop(){this.running&&(this.render(),T.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,T.current&&(cancelAnimationFrame(T.current),T.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),this._onVisibility&&document.removeEventListener("visibilitychange",this._onVisibility),H.dispose(),G.renderer){const y=G.renderer.domElement;y&&y.parentNode&&y.parentNode.removeChild(y),G.renderer.dispose()}}catch{}}}const Ze=x.current;Ze.style.position=Ze.style.position||"relative",Ze.style.overflow=Ze.style.overflow||"hidden";const Me=new Ee({$wrapper:Ze,autoDemo:p,autoSpeed:_,autoIntensity:g,takeoverDuration:m,autoResumeDelay:d,autoRampDuration:v});S.current=Me,(()=>{var L;if(!S.current)return;const R=(L=S.current.output)==null?void 0:L.simulation;if(!R)return;const y=R.options.resolution;Object.assign(R.options,{mouse_force:n,cursor_size:e,isViscous:t,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:u}),l!==y&&R.resize()})(),Me.start();const bt=new IntersectionObserver(R=>{const y=R[0],L=y.isIntersecting&&y.intersectionRatio>0;b.current=L,S.current&&(L&&!document.hidden?S.current.start():S.current.pause())},{threshold:[0,.01,.1]});bt.observe(Ze),C.current=bt;const pt=new ResizeObserver(()=>{S.current&&(M.current&&cancelAnimationFrame(M.current),M.current=requestAnimationFrame(()=>{S.current&&S.current.resize()}))});return pt.observe(Ze),w.current=pt,()=>{if(T.current&&cancelAnimationFrame(T.current),w.current)try{w.current.disconnect()}catch{}if(C.current)try{C.current.disconnect()}catch{}S.current&&S.current.dispose(),S.current=null}},[a,e,o,u,t,s,r,n,l,i,c,p,_,g,m,d,v]),B.useEffect(()=>{var z;const E=S.current;if(!E)return;const P=(z=E.output)==null?void 0:z.simulation;if(!P)return;const U=P.options.resolution;Object.assign(P.options,{mouse_force:n,cursor_size:e,isViscous:t,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:u}),E.autoDriver&&(E.autoDriver.enabled=p,E.autoDriver.speed=_,E.autoDriver.resumeDelay=d,E.autoDriver.rampDurationMs=v*1e3,E.autoDriver.mouse&&(E.autoDriver.mouse.autoIntensity=g,E.autoDriver.mouse.takeoverDuration=m)),l!==U&&P.resize()},[n,e,t,i,r,s,o,a,l,u,p,_,g,m,d,v]),D.jsx("div",{ref:x,className:`w-full h-full relative overflow-hidden pointer-events-none touch-none ${h||""}`,style:f})}const xD=()=>{const n=B.useRef(null),e=B.useRef(null),t=B.useRef(null),i=B.useRef(null),r=B.useRef(null),s=B.useRef(null),[o,a]=B.useState(!1),l=B.useRef(null),u=B.useRef(null),c=B.useRef(null),f=B.useRef(null),h=B.useRef(null),p=B.useRef(null),[_,g]=B.useState(!1),m=B.useRef(null);B.useEffect(()=>{if(!o)return;const P=Ot.timeline({defaults:{ease:"power3.out"}}),U=[e.current,n.current,t.current,i.current,r.current,s.current];return P.fromTo(U,{opacity:0,y:30},{opacity:1,y:0,duration:1,stagger:.18}),Ot.to(r.current,{y:-10,duration:2,ease:"power1.inOut",yoyo:!0,repeat:-1,delay:2}),Ot.fromTo(s.current,{y:0},{y:-10,duration:1.5,ease:"power1.inOut",yoyo:!0,repeat:-1,delay:2.2}),()=>{try{P.kill()}catch{}}},[o]),B.useEffect(()=>{if(o)return;const U=Array.from("hi, i'm Aditya Negi."),z=3,G=z/Math.max(U.length,1);c.current&&(c.current.innerHTML="",U.forEach(I=>{const q=document.createElement("span");q.textContent=I===" "?" ":I,q.style.opacity="0",q.style.transform="translateY(6px)",q.style.display="inline-block",c.current.appendChild(q)}));const $=Ot.timeline({onComplete:()=>{Ot.to(f.current,{autoAlpha:0,duration:.12});const I=Ot.timeline({onComplete:()=>{a(!0)}});I.to(u.current,{rotate:360,scale:1.08,duration:.55,ease:"power4.inOut"}),I.to(l.current,{autoAlpha:0,y:-36,duration:.6,ease:"power3.inOut"},"-=0.3")}});$.to(c.current.children,{opacity:1,y:0,duration:.04,stagger:G,ease:"power1.out"}),Ot.to(f.current,{opacity:1,repeat:-1,yoyo:!0,duration:.48,ease:"linear"});const H=()=>{try{$&&$.progress()<1&&$.progress(1)}catch{}};window.addEventListener("load",H);const J=window.setTimeout(()=>{try{$&&$.progress()<1&&$.progress(1)}catch{}},(z+.6)*1e3);return()=>{window.removeEventListener("load",H),clearTimeout(J);try{$.kill()}catch{}}},[o]),B.useEffect(()=>{g(!1);let P=!1;function U(){P||(P=!0,g(!0),m.current&&window.clearTimeout(m.current),m.current=window.setTimeout(()=>g(!0),3e3),window.removeEventListener("pointermove",U),window.removeEventListener("touchstart",U))}return window.addEventListener("pointermove",U,{passive:!0}),window.addEventListener("touchstart",U,{passive:!0}),()=>{window.removeEventListener("pointermove",U),window.removeEventListener("touchstart",U),m.current&&window.clearTimeout(m.current)}},[]),B.useEffect(()=>()=>{m.current&&window.clearTimeout(m.current)},[]);const d=(P,U,z="pointermove")=>{g(!1),m.current&&window.clearTimeout(m.current),m.current=window.setTimeout(()=>g(!0),2500);const G=p.current;if(!G)return;const H=G.querySelector("canvas")??G,J=H.getBoundingClientRect(),I=P-J.left,q=U-J.top;try{const Q=new PointerEvent(z,{bubbles:!0,cancelable:!0,clientX:P,clientY:U,pageX:P+window.scrollX,pageY:U+window.scrollY,pointerType:"mouse",isPrimary:!0});H.dispatchEvent(Q)}catch{}try{const Q=new MouseEvent(z==="pointerdown"?"mousedown":z==="pointerup"?"mouseup":"mousemove",{bubbles:!0,cancelable:!0,clientX:P,clientY:U});H.dispatchEvent(Q)}catch{}try{const Q=new CustomEvent("liquid-pointer",{detail:{clientX:P,clientY:U,x:I,y:q,normalizedX:Math.max(0,Math.min(1,I/Math.max(J.width,1))),normalizedY:Math.max(0,Math.min(1,q/Math.max(J.height,1))),type:z},bubbles:!0,cancelable:!0});H.dispatchEvent(Q)}catch{}},v=P=>{d(P.clientX,P.clientY,"pointermove"),h.current&&Ot.to(h.current,{x:P.clientX,y:P.clientY,duration:.18,ease:"power2.out",overwrite:"auto"})},x=P=>d(P.clientX,P.clientY,"pointerdown"),S=P=>d(P.clientX,P.clientY,"pointerup"),w=P=>{const U=P.touches[0];U&&(d(U.clientX,U.clientY,"pointermove"),h.current&&Ot.to(h.current,{x:U.clientX,y:U.clientY,duration:.18,ease:"power2.out",overwrite:"auto"}))},T=P=>{h.current&&Ot.to(h.current,{x:P.clientX,y:P.clientY,duration:.8,ease:"power2.out",overwrite:"auto"})},C=()=>{const P=document.getElementById("about");P&&P.scrollIntoView({behavior:"smooth",block:"start"})},b="https://github.com/AdityaNegi3",M="https://www.linkedin.com/in/adityanegi03/",E="mailto:adi.negi730@gmail.com";return D.jsxs("section",{id:"home",className:"relative w-full min-h-screen bg-black text-white overflow-hidden font-inter","aria-label":"Hero",onMouseMove:T,children:[!o&&D.jsx("div",{ref:l,className:"fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md px-4",children:D.jsx("div",{className:"w-full max-w-xs sm:max-w-none sm:w-auto mx-auto",children:D.jsxs("div",{className:"flex flex-col items-center justify-center",children:[D.jsx("div",{ref:u,className:"mx-auto w-16 h-16 sm:w-28 sm:h-28 rounded-full flex items-center justify-center p-3",style:{background:"linear-gradient(135deg, #ff1a1a 0%, #e60000 50%, #990000 100%)",boxShadow:"0 30px 60px rgba(230,0,0,0.12)"},children:D.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("path",{d:"M12 2C8 8 3 9 3 13c0 3 3 6 9 9 6-3 9-6 9-9 0-4-5-5-9-11z",fill:"#0b0b0b"}),D.jsx("path",{d:"M12 4c2.5 3 5.8 4 7 8-1.2 4-4.5 5-7 7-2.5-2-5.8-3-7-7 1.2-4 4.5-5 7-8z",fill:"#fff",opacity:"0.06"})]})}),D.jsxs("div",{className:"text-center select-none w-full px-2",children:[D.jsxs("div",{className:"text-lg sm:text-2xl font-semibold tracking-tight text-white inline-block leading-tight",children:[D.jsx("div",{ref:c,className:"inline-block text-left font-mono text-sm sm:text-base","aria-hidden":!0}),D.jsx("span",{ref:f,className:"inline-block ml-1 align-middle",style:{opacity:1,width:6,height:22,background:"white",display:"inline-block"},"aria-hidden":!0})]}),D.jsx("div",{className:"mt-2 text-xs sm:text-sm text-gray-400",children:"a frontend developer who loves motion ✨"})]})]})})}),D.jsx("div",{ref:h,className:"absolute z-0 pointer-events-none opacity-60 will-change-transform",style:{background:"radial-gradient(600px circle at center, rgba(255,26,26,0.20), rgba(230,0,0,0.12) 45%, rgba(153,0,0,0.06) 80%)",filter:"blur(40px)",width:800,height:800,transform:"translate(-50%, -50%)",left:0,top:0}}),D.jsx("div",{ref:p,onPointerMove:v,onPointerDown:x,onPointerUp:S,onTouchMove:w,style:{width:"100%",height:"100%",position:"absolute",inset:0,zIndex:0,touchAction:"none",pointerEvents:"auto"},className:"absolute inset-0 z-0",children:D.jsx(vD,{colors:["#ff1a1a","#e60000","#990000"],mouseForce:28,cursorSize:120,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:_,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6,className:"absolute inset-0",style:{width:"100%",height:"100%",display:"block"}})}),D.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 z-0 pointer-events-none",style:{background:"linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.65) 100%)"}}),D.jsxs("svg",{className:"pointer-events-none absolute inset-0 w-full h-full z-0",preserveAspectRatio:"none","aria-hidden":!0,children:[D.jsx("defs",{children:D.jsxs("linearGradient",{id:"g",x1:"0",x2:"1",children:[D.jsx("stop",{offset:"0%",stopColor:"#2b0202",stopOpacity:"0.04"}),D.jsx("stop",{offset:"100%",stopColor:"#000",stopOpacity:"0.01"})]})}),D.jsx("rect",{width:"100%",height:"100%",fill:"url(#g)"})]}),D.jsx("div",{className:`absolute inset-0 z-10 flex items-center justify-center ${o?"pointer-events-auto":"pointer-events-none select-none"}`,children:D.jsxs("div",{className:"w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-20 sm:pt-20",children:[D.jsx("h2",{ref:e,className:"text-xs sm:text-sm tracking-widest text-red-400 uppercase mb-3 sm:mb-4 opacity-0"}),D.jsxs("h1",{ref:n,className:"font-extrabold leading-tight text-3xl sm:text-5xl lg:text-6xl mb-5 sm:mb-6 opacity-0",children:[D.jsx("span",{className:"block",children:"I build"}),D.jsx("span",{className:"block bg-gradient-to-r from-red-400 via-red-600 to-black bg-clip-text text-transparent",children:"bold, beautiful interfaces"})]}),D.jsx("p",{ref:t,className:"mx-auto max-w-2xl text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 opacity-0",children:"Crafting striking digital experiences — clean code, polished interactions, and high-converting visuals."}),D.jsxs("div",{ref:i,className:"flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 opacity-0 w-full",children:[D.jsx("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-black font-semibold shadow-2xl hover:scale-103 transition-transform duration-200",children:"View My Work"}),D.jsx("a",{href:E,className:"w-full sm:w-auto px-6 py-3 rounded-full border-2 border-red-600 text-red-300 font-semibold hover:bg-red-600 hover:text-black transition-colors duration-200 text-center",children:"Get In Touch"})]}),D.jsx("div",{ref:r,className:"flex justify-center gap-3 mb-6 opacity-0",children:[{Icon:ch,href:b,label:"GitHub"},{Icon:fh,href:M,label:"LinkedIn"},{Icon:dh,href:E,label:"Email"}].map(({Icon:P,href:U,label:z},G)=>D.jsx("a",{href:U,target:U.startsWith("mailto:")?void 0:"_blank",rel:U.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":z,className:"flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-700 bg-black/40 hover:bg-red-700/10 hover:border-red-600 transition-all",children:D.jsx(P,{size:16,className:"text-gray-200"})},G))})]})}),D.jsx("button",{ref:s,onClick:C,"aria-label":"Scroll to about",className:"absolute bottom-6 left-1/2 transform -translate-x-1/2 text-red-400 z-10 opacity-0",children:D.jsx("div",{className:"animate-bounce",children:D.jsx(zw,{size:32})})})]})},yD=()=>D.jsx("section",{id:"about",className:"py-20 bg-black text-white",children:D.jsxs("div",{className:"relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12",children:[D.jsxs("div",{className:"text-center mb-12",children:[D.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight",children:D.jsx("span",{className:"bg-gradient-to-r from-red-500 via-red-700 to-red-900 bg-clip-text text-transparent",children:"About Me"})}),D.jsx("div",{className:"mt-3 w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"})]}),D.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[D.jsx("h3",{className:"text-2xl sm:text-3xl font-bold mb-6",children:"“Design with intention. Build with impact.”"}),D.jsxs("p",{className:"text-base text-gray-300 mb-4 leading-relaxed",children:["I’m ",D.jsx("span",{className:"font-semibold text-white",children:"Aditya Negi"}),", a 19-year-old web developer, entrepreneur and automation builder. I create modern, performant websites and automation pipelines using"," ",D.jsx("span",{className:"text-red-400 font-semibold",children:"React"}),","," ",D.jsx("span",{className:"text-red-400 font-semibold",children:"Tailwind"}),","," ",D.jsx("span",{className:"text-red-400 font-semibold",children:"Vite"}),", HTML, CSS, JavaScript — and I have core experience in C, C++ and Python."]}),D.jsxs("p",{className:"text-base text-gray-300 mb-10 leading-relaxed",children:["I run a marketing agency and a clothing brand, and I help companies scale with smart automations using"," ",D.jsx("span",{className:"font-semibold text-white",children:"n8n"})," and AI tools. I focus on clean code, intentional design, and measurable results."]}),D.jsx("div",{className:"grid sm:grid-cols-3 gap-6 text-left",children:[{Icon:Bw,title:"Clean Code",desc:"Readable, testable, and maintainable."},{Icon:Gw,title:"Design",desc:"Focused on clarity, hierarchy & feel."},{Icon:jw,title:"Automation",desc:"Workflows that save time and reduce friction."}].map(({Icon:n,title:e,desc:t},i)=>D.jsxs("div",{className:"flex flex-col items-center sm:items-start gap-3 p-5 rounded-xl border border-gray-800 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]",children:[D.jsx("div",{className:"flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-red-700 to-red-500",children:D.jsx(n,{size:20,className:"text-black"})}),D.jsxs("div",{className:"text-sm text-center sm:text-left",children:[D.jsx("h4",{className:"font-semibold text-white",children:e}),D.jsx("p",{className:"text-gray-400 text-xs mt-1",children:t})]})]},i))}),D.jsxs("p",{className:"mt-8 text-sm text-gray-400",children:["Interested in a modern website, or automations that scale?"," ",D.jsx("a",{href:"https://osirismarketing.site",target:"_blank",rel:"noopener noreferrer",className:"text-red-400 font-semibold hover:underline",children:"Let’s build it."})]})]})]})}),SD=()=>{const n=[{title:"Frontend",skills:[{name:"React",level:95},{name:"TypeScript",level:90},{name:"Next.js",level:88},{name:"Tailwind CSS",level:92}]},{title:"Backend",skills:[{name:"Node.js",level:75},{name:"Python",level:82},{name:"PostgreSQL",level:80},{name:"MongoDB",level:75}]},{title:"Automation Tools",skills:[{name:"Git",level:90},{name:"Zapier",level:78},{name:"N8n",level:70},{name:"Make",level:85}]}];return D.jsx("section",{id:"skills",className:"py-20 bg-black text-white",children:D.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[D.jsxs("div",{className:"text-center mb-12",children:[D.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight",children:D.jsx("span",{className:"bg-gradient-to-r from-red-500 via-red-700 to-red-900 bg-clip-text text-transparent",children:"Skills & Expertise"})}),D.jsx("div",{className:"mt-3 w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"}),D.jsx("p",{className:"text-sm text-gray-400 mt-4 max-w-2xl mx-auto",children:"A focused toolkit for building performant products — design-first, automation-ready, production-grade."})]}),D.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:n.map((e,t)=>D.jsxs("div",{className:"relative overflow-hidden rounded-2xl p-6 border border-gray-800 bg-gradient-to-b from-black/40 to-black/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)]",children:[D.jsx("div",{className:"absolute -left-8 -top-8 w-40 h-40 bg-gradient-to-br from-red-900/10 to-transparent rounded-full pointer-events-none blur-3xl"}),D.jsx("h3",{className:"text-xl font-semibold text-white mb-6 text-center",children:e.title}),D.jsx("div",{className:"space-y-5",children:e.skills.map((i,r)=>D.jsxs("div",{children:[D.jsxs("div",{className:"flex justify-between items-center mb-2",children:[D.jsx("span",{className:"font-medium text-gray-100",children:i.name}),D.jsxs("span",{className:"text-red-400 font-semibold",children:[i.level,"%"]})]}),D.jsx("div",{className:"w-full bg-gray-900 rounded-full h-3 overflow-hidden",children:D.jsx("div",{className:"h-3 rounded-full bg-gradient-to-r from-red-600 to-red-800 transition-all duration-1200 ease-out",style:{width:`${i.level}%`},"aria-hidden":!0})})]},r))})]},t))}),D.jsx("div",{className:"mt-12 flex justify-center",children:D.jsxs("div",{className:"inline-flex items-center justify-center gap-8 bg-gradient-to-b from-black/40 to-black/20 border border-gray-800 rounded-2xl px-8 py-6 shadow-xl",children:[D.jsxs("div",{className:"text-center",children:[D.jsx("div",{className:"text-3xl font-bold text-white",children:"15+"}),D.jsx("div",{className:"text-sm text-gray-400",children:"Websites / Automations Completed"})]}),D.jsx("div",{className:"w-px h-12 bg-gray-800 mx-2"}),D.jsxs("div",{className:"text-center",children:[D.jsx("div",{className:"text-3xl font-bold text-white",children:"100%"}),D.jsx("div",{className:"text-sm text-gray-400",children:"Client Satisfaction"})]})]})})]})})},MD=()=>{const n={marketing:new URL("/marketing.png",import.meta.url).href,clothing:new URL("/clothing.png",import.meta.url).href,monaarc:new URL("/monaarc.png",import.meta.url).href,gurunanak:new URL("/gurunanak.png",import.meta.url).href},e=[{title:"Osiris Marketing",description:"A premium marketing & automation agency focused on luxury and high-end brands — strategy, brand campaigns, paid media, and marketing automations to scale customer acquisition and retention.",image:n.marketing,tags:["Marketing Strategy","Marketing Automation","SEO / SEM","Landing Page UX","Analytics"],liveUrl:"https://osirismarketing.site"},{title:"Osiris Clothing",description:"Luxury limited-run streetwear — product pages with premium photography, size/wash guides, and exclusive drop / waitlist features for members-only access.",image:n.clothing,tags:["E-commerce","Product Catalog","Inventory + Waitlist","Payments & Checkout","Responsive UI"],liveUrl:"https://osirisclothing.site"},{title:"Monaarc Clothing",description:"A performance-driven retail site for a clothing brand: product listings, collection pages, easy checkout flow, and store management for seasonal drops and promos.",image:n.monaarc,tags:["E-commerce","Catalog Management","Promotions / Discounts","Fast Checkout","Mobile-first Design"],liveUrl:"https://monaarcclothing.com"},{title:"Gurunanak Housing",description:"Property development & construction brochure site — showcases services (new builds, refurbishments, fit-outs), project galleries, and contact/quote capture for homeowners and small developers.",image:n.gurunanak,tags:["Brochure Site","Project Galleries","Lead Capture","Content Management","Local SEO"],liveUrl:"https://gurunanakhousing.co.uk"}],t=[...e,...e],i=B.useRef(null),r=B.useRef(null),s=B.useRef(null);return B.useEffect(()=>{if(!i.current||!r.current||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const a=r.current;s.current&&s.current.kill();const l=a.scrollWidth/2,u=80,c=l/u;s.current=Ot.to(a,{x:-l,ease:"none",duration:c,repeat:-1});const f=()=>{var _;if(!a)return;(_=s.current)==null||_.kill();const h=a.scrollWidth/2,p=h/u;s.current=Ot.to(a,{x:-h,ease:"none",duration:p,repeat:-1})};return window.addEventListener("resize",f),()=>{var h;window.removeEventListener("resize",f),(h=s.current)==null||h.kill()}},[]),D.jsx("section",{id:"projects",className:"py-20 bg-black text-white",children:D.jsxs("div",{className:"relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12",children:[D.jsxs("div",{className:"text-center mb-12",children:[D.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight",children:D.jsx("span",{className:"bg-gradient-to-r from-red-500 via-red-700 to-red-900 bg-clip-text text-transparent",children:"Featured Projects"})}),D.jsx("div",{className:"mt-3 w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"}),D.jsx("p",{className:"text-sm text-gray-400 mt-4 max-w-2xl mx-auto",children:"Selected work that blends design, performance, and automation."})]}),D.jsx("div",{ref:i,className:"overflow-hidden",children:D.jsx("div",{ref:r,className:"flex items-stretch gap-6 will-change-transform",style:{alignItems:"stretch"},children:t.map((o,a)=>D.jsxs("a",{href:o.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"group relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-b from-black/40 to-black/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1",style:{minWidth:320},children:[D.jsxs("div",{className:"relative",children:[D.jsx("img",{src:o.image,alt:o.title,className:"w-full h-44 object-cover transform transition-transform duration-400 group-hover:scale-105"}),D.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"})]}),D.jsxs("div",{className:"p-4",children:[D.jsx("h3",{className:"text-lg font-semibold text-white mb-1",children:o.title}),D.jsx("p",{className:"text-gray-300 mb-3 text-sm leading-relaxed",children:o.description}),D.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:o.tags.map((l,u)=>D.jsx("span",{className:"px-2 py-0.5 text-xs font-medium rounded-full border border-gray-800 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] text-red-300",children:l},u))}),D.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-400",children:[D.jsx("div",{children:"Role: Full-stack"}),D.jsx("div",{className:"text-red-400 font-semibold",children:"Featured"})]})]})]},`${o.title}-${a}`))})}),D.jsx("div",{className:"text-center mt-12",children:D.jsxs(_m,{to:"/projects",className:"inline-flex items-center gap-3 px-8 py-3 rounded-full border-2 border-red-500 text-red-400 font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm",children:["View All Projects",D.jsx(vm,{size:16})]})})]})})},ED=()=>{const n="adi.negi730@gmail.com",e="+91 70226 53033",t="Bangalore, India",[i,r]=B.useState({}),s=async(o,a)=>{try{await navigator.clipboard.writeText(a),r(l=>({...l,[o]:!0})),setTimeout(()=>r(l=>({...l,[o]:!1})),1400)}catch(l){console.error("copy failed",l)}};return D.jsx("section",{id:"contact",className:"py-20 bg-black text-white",children:D.jsxs("div",{className:"max-w-6xl mx-auto px-6 sm:px-8 lg:px-12",children:[D.jsx("div",{className:"text-center mb-10",children:D.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight",children:D.jsx("span",{className:"bg-gradient-to-r from-red-500 via-red-700 to-red-900 bg-clip-text text-transparent",children:"Get In Touch"})})}),D.jsxs("div",{className:"relative bg-gradient-to-b from-black/40 to-black/10 rounded-2xl p-6 lg:p-10 flex flex-col lg:flex-row items-stretch gap-6",children:[D.jsxs("aside",{className:"hidden lg:flex flex-col items-center gap-4 w-20 shrink-0",children:[D.jsx(io,{href:"https://instagram.com/adi.3_",icon:D.jsx(d_,{size:20}),label:"Instagram"}),D.jsx(io,{href:"https://github.com/AdityaNegi3",icon:D.jsx(ch,{size:20}),label:"GitHub"}),D.jsx(io,{href:"https://www.linkedin.com/in/adityanegi03/",icon:D.jsx(fh,{size:20}),label:"LinkedIn"})]}),D.jsxs("div",{className:"flex-1 grid grid-cols-1 md:grid-cols-2 gap-6",children:[D.jsx("div",{className:"col-span-1 md:col-span-2",children:D.jsx("div",{className:"rounded-xl border border-gray-800 p-4 bg-black/60",children:D.jsx("div",{className:"flex items-center justify-between",children:D.jsxs("div",{children:[D.jsx("div",{className:"text-xl font-semibold",children:"Reach me directly"}),D.jsx("div",{className:"text-sm text-gray-400 mt-1",children:"Pick whatever works — quick links and copy buttons for convenience."})]})})})}),D.jsx("div",{className:"hidden md:block",children:D.jsx(pd,{icon:D.jsx(dh,{size:18}),label:"Email",value:n,href:`mailto:${n}`,onCopy:()=>s("email",n),copied:!!i.email})}),D.jsx("div",{className:"block md:hidden",children:D.jsxs("a",{href:`mailto:${n}`,className:"flex items-center gap-3 rounded-lg border border-gray-800 p-3 bg-black/50",children:[D.jsx("div",{className:"w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-red-800",children:D.jsx(dh,{size:18})}),D.jsxs("div",{children:[D.jsx("div",{className:"text-sm text-gray-200 font-medium",children:"Email"}),D.jsx("div",{className:"text-sm text-gray-400",children:n})]})]})}),D.jsx("div",{className:"hidden md:block",children:D.jsx(pd,{icon:D.jsx(p_,{size:18}),label:"Phone",value:e,href:"tel:+917022653033",onCopy:()=>s("phone",e),copied:!!i.phone})}),D.jsx("div",{className:"block md:hidden",children:D.jsxs("a",{href:"tel:+917022653033",className:"flex items-center gap-3 rounded-lg border border-gray-800 p-3 bg-black/50",children:[D.jsx("div",{className:"w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-red-800",children:D.jsx(p_,{size:18})}),D.jsxs("div",{children:[D.jsx("div",{className:"text-sm text-gray-200 font-medium",children:"Phone"}),D.jsx("div",{className:"text-sm text-gray-400",children:e})]})]})}),D.jsx("div",{className:"hidden md:block",children:D.jsx(pd,{icon:D.jsx(h_,{size:18}),label:"Location",value:t,href:void 0,onCopy:()=>s("location",t),copied:!!i.location})}),D.jsx("div",{className:"block md:hidden",children:D.jsxs("div",{className:"flex items-center gap-3 rounded-lg border border-gray-800 p-3 bg-black/50",children:[D.jsx("div",{className:"w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-red-800",children:D.jsx(h_,{size:18})}),D.jsxs("div",{children:[D.jsx("div",{className:"text-sm text-gray-200 font-medium",children:"Location"}),D.jsx("div",{className:"text-sm text-gray-400",children:t})]})]})}),D.jsx("div",{className:"col-span-1 md:col-span-2 flex items-center justify-start md:justify-end gap-3",children:D.jsxs("div",{className:"flex items-center gap-3",children:[D.jsx(io,{href:"https://instagram.com/adi.3_",icon:D.jsx(d_,{size:18}),label:"Instagram"}),D.jsx(io,{href:"https://github.com/AdityaNegi3",icon:D.jsx(ch,{size:18}),label:"GitHub"}),D.jsx(io,{href:"https://www.linkedin.com/in/adityanegi03/",icon:D.jsx(fh,{size:18}),label:"LinkedIn"})]})})]}),D.jsx("div",{className:"hidden lg:flex items-center justify-center absolute right-6 top-6",children:D.jsx("div",{className:"px-3 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-800 font-semibold shadow-lg",children:"Let's talk"})})]})]})})},pd=({icon:n,label:e,value:t,href:i,onCopy:r,copied:s})=>D.jsxs("div",{className:"flex items-center justify-between gap-4 rounded-lg border border-gray-800 p-3 bg-black/50",children:[D.jsxs("div",{className:"flex items-center gap-3",children:[D.jsx("div",{className:"w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-red-800",children:n}),D.jsxs("div",{children:[D.jsx("div",{className:"text-sm text-gray-200 font-medium",children:e}),D.jsx("div",{className:"text-sm text-gray-400 truncate max-w-[220px]",children:t})]})]}),D.jsxs("div",{className:"flex items-center gap-2",children:[i?D.jsx("a",{href:i,className:"p-2 rounded-md border border-gray-700 hover:border-red-500 transition-all","aria-label":`Open ${e}`,children:D.jsx(vm,{size:16})}):D.jsx("div",{className:"w-9"}),D.jsx("button",{onClick:r,className:"p-2 rounded-md border border-gray-700 hover:border-red-500 transition-all","aria-label":`Copy ${e}`,children:D.jsx(Vw,{size:16})}),s&&D.jsxs("div",{className:"ml-2 text-xs text-green-400 inline-flex items-center gap-1",children:[D.jsx(kw,{size:12}),"Copied"]})]})]}),io=({href:n,icon:e,label:t})=>D.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer","aria-label":t,className:"w-12 h-12 flex items-center justify-center rounded-lg bg-black/60 border border-gray-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 transition-all",children:e}),wD=()=>D.jsx("footer",{className:"bg-black py-6 border-t border-red-600",children:D.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:D.jsx("div",{className:"flex justify-center items-center",children:D.jsxs("p",{className:"flex items-center space-x-2 text-white text-sm md:text-base",children:[D.jsx("span",{children:" Made By"}),D.jsx("span",{className:"text-red-500 font-semibold",children:"Aditya Negi"})]})})})}),TD=[{title:"Osiris Marketing",description:"A premium marketing & automation agency focused on luxury and high-end brands — brand campaigns, paid media, and marketing automations to scale acquisition & retention.",image:"/marketing.png",tags:["Marketing Strategy","Automation","SEO"],liveUrl:"https://osirismarketing.site"},{title:"Osiris Clothing",description:"Luxury limited-run streetwear — premium product pages, size/wash guides, and exclusive drop/waitlist features for members-only access.",image:"/clothing.png",tags:["E-commerce","Drops","Responsive"],liveUrl:"https://osirisclothing.site"},{title:"Monaarc Clothing",description:"Performance-driven retail site: fast checkout, collection pages, seasonal promotions and store management.",image:"/monaarc.png",tags:["Catalog","Checkout","Mobile-first"],liveUrl:"https://monaarcclothing.com"},{title:"Gurunanak Housing",description:"Property development & construction brochure site — project galleries, services, and contact/quote capture for homeowners and small developers.",image:"/gurunanak.png",tags:["Brochure","Galleries","Lead Capture"],liveUrl:"https://gurunanakhousing.co.uk"},{title:"Hope & Care Foundation",description:"Nonprofit website with donation flows, volunteer sign-up, event listings, and a resource hub to support community programs and fundraising.",image:"/care.png",fallback:"/images/hopeandcare.png",tags:["Nonprofit","Donations","Events"],liveUrl:"https://hopeandcarefoundation.netlify.app"}],AD=()=>{const[n,e]=B.useState(!1),t=B.useRef(null),i=B.useRef(null);return B.useEffect(()=>{if(!n)try{const s=Array.from("Please wait");t.current&&(t.current.innerHTML="",s.forEach(c=>{const f=document.createElement("span");f.textContent=c===" "?" ":c,f.style.opacity="0",f.style.display="inline-block",f.style.transform="translateY(6px)",t.current.appendChild(f)}));const a=1/Math.max(s.length,1);Ot.timeline({onComplete:()=>e(!0)}).to(t.current.children,{opacity:1,y:0,duration:.03,stagger:a,ease:"power1.out"}),i.current&&Ot.to(i.current,{opacity:0,repeat:-1,yoyo:!0,duration:.45,ease:"linear"});const u=window.setTimeout(()=>e(!0),3e3);return()=>clearTimeout(u)}catch{e(!0)}},[n]),B.useEffect(()=>{if(n)try{const r=Ot.timeline({defaults:{ease:"power3.out"}});return r.fromTo(".proj-item",{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.6,stagger:.08}),()=>r.kill()}catch{}},[n]),D.jsxs("div",{className:"min-h-screen bg-black text-white antialiased",children:[!n&&D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black",children:D.jsxs("div",{className:"max-w-lg w-full mx-6 text-center p-6",children:[D.jsx("div",{className:"mx-auto w-20 h-20 rounded-full p-3 bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-xl",children:D.jsx("svg",{width:"42",height:"42",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:D.jsx("path",{d:"M12 2C8 8 3 9 3 13c0 3 3 6 9 9 6-3 9-6 9-9 0-4-5-5-9-11z",fill:"#0b0b0b"})})}),D.jsxs("div",{className:"mt-6 text-lg font-extrabold tracking-tight",children:[D.jsxs("div",{className:"inline-flex items-center justify-center",children:[D.jsx("div",{ref:t,className:"font-mono text-base sm:text-lg"}),D.jsx("span",{ref:i,className:"ml-3 inline-block w-1 h-6 rounded-sm",style:{background:"#ef4444",opacity:1}})]}),D.jsx("p",{className:"mt-3 text-sm text-zinc-300",children:"Loading projects…"})]})]})}),D.jsxs("main",{className:`${n?"":"pointer-events-none"}`,children:[D.jsx("header",{className:"max-w-6xl mx-auto px-6 py-10",children:D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{children:[D.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold tracking-tight",children:"Projects"}),D.jsx("p",{className:"text-zinc-400 mt-2",children:"Selected case studies & builds — scroll to see everything."})]}),D.jsxs("div",{className:"hidden md:flex items-center gap-4",children:[D.jsx("a",{href:"/",className:"text-sm text-zinc-300",children:"Home"}),D.jsx("a",{href:"/contact",className:"text-sm text-red-500 font-semibold",children:"Contact"})]})]})}),D.jsx("section",{className:"max-w-6xl mx-auto px-6 pb-24",children:D.jsx("div",{className:"flex flex-col gap-8",children:TD.map((r,s)=>D.jsxs("article",{className:"proj-item bg-[#070707] border border-zinc-800 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row",children:[D.jsx("div",{className:"md:w-1/2 h-56 md:h-auto relative",children:D.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover block",onError:o=>o.currentTarget.src="/images/project-fallback.jpg"})}),D.jsxs("div",{className:"p-6 md:w-1/2 flex flex-col justify-between",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-xl font-semibold text-white",children:r.title}),D.jsx("p",{className:"text-zinc-400 mt-3",children:r.description}),D.jsx("div",{className:"mt-4 flex gap-2 flex-wrap",children:r.tags.map((o,a)=>D.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300",children:o},a))})]}),D.jsxs("div",{className:"mt-6 flex items-center justify-between",children:[D.jsxs("a",{href:r.liveUrl,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-full text-sm font-semibold",children:["View Project ",D.jsx(vm,{className:"w-3 h-3"})]}),D.jsx("div",{className:"text-xs text-zinc-500",children:r.liveUrl?new URL(r.liveUrl).hostname:""})]})]})]},s))})}),D.jsx("footer",{className:"border-t border-zinc-800",children:D.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-8 text-center text-sm text-zinc-400",children:["© ",new Date().getFullYear()," Aditya Negi — Projects only view."]})})]})]})};function CD(){return D.jsx(Aw,{children:D.jsxs(iw,{children:[D.jsx(lh,{path:"/",element:D.jsxs("div",{className:"min-h-screen",children:[D.jsx(oA,{}),D.jsx(xD,{}),D.jsx(yD,{}),D.jsx(SD,{}),D.jsx(MD,{}),D.jsx(ED,{}),D.jsx(wD,{})]})}),D.jsx(lh,{path:"/projects",element:D.jsx(AD,{})})]})})}Gx(document.getElementById("root")).render(D.jsx(B.StrictMode,{children:D.jsx(CD,{})}));
