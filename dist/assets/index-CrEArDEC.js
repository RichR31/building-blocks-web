(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Sp={exports:{}},rl={},Mp={exports:{}},Ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),pg=Symbol.for("react.portal"),mg=Symbol.for("react.fragment"),gg=Symbol.for("react.strict_mode"),_g=Symbol.for("react.profiler"),vg=Symbol.for("react.provider"),wg=Symbol.for("react.context"),xg=Symbol.for("react.forward_ref"),yg=Symbol.for("react.suspense"),Sg=Symbol.for("react.memo"),Mg=Symbol.for("react.lazy"),Wd=Symbol.iterator;function Eg(t){return t===null||typeof t!="object"?null:(t=Wd&&t[Wd]||t["@@iterator"],typeof t=="function"?t:null)}var Ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tp=Object.assign,Ap={};function vi(t,e,n){this.props=t,this.context=e,this.refs=Ap,this.updater=n||Ep}vi.prototype.isReactComponent={};vi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rp(){}Rp.prototype=vi.prototype;function Fu(t,e,n){this.props=t,this.context=e,this.refs=Ap,this.updater=n||Ep}var Ou=Fu.prototype=new Rp;Ou.constructor=Fu;Tp(Ou,vi.prototype);Ou.isPureReactComponent=!0;var Xd=Array.isArray,Cp=Object.prototype.hasOwnProperty,ku={current:null},Pp={key:!0,ref:!0,__self:!0,__source:!0};function bp(t,e,n){var r,o={},i=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(i=""+e.key),e)Cp.call(e,r)&&!Pp.hasOwnProperty(r)&&(o[r]=e[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:_s,type:t,key:i,ref:s,props:o,_owner:ku.current}}function Tg(t,e){return{$$typeof:_s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zu(t){return typeof t=="object"&&t!==null&&t.$$typeof===_s}function Ag(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jd=/\/+/g;function Cl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ag(""+t.key):e.toString(36)}function pa(t,e,n,r,o){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case _s:case pg:s=!0}}if(s)return s=t,o=o(s),t=r===""?"."+Cl(s,0):r,Xd(o)?(n="",t!=null&&(n=t.replace(jd,"$&/")+"/"),pa(o,e,n,"",function(c){return c})):o!=null&&(zu(o)&&(o=Tg(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(jd,"$&/")+"/")+t)),e.push(o)),1;if(s=0,r=r===""?".":r+":",Xd(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+Cl(i,a);s+=pa(i,e,n,l,o)}else if(l=Eg(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+Cl(i,a++),s+=pa(i,e,n,l,o);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Cs(t,e,n){if(t==null)return t;var r=[],o=0;return pa(t,r,"","",function(i){return e.call(n,i,o++)}),r}function Rg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},ma={transition:null},Cg={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:ma,ReactCurrentOwner:ku};function Lp(){throw Error("act(...) is not supported in production builds of React.")}Ue.Children={map:Cs,forEach:function(t,e,n){Cs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cs(t,function(){e++}),e},toArray:function(t){return Cs(t,function(e){return e})||[]},only:function(t){if(!zu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ue.Component=vi;Ue.Fragment=mg;Ue.Profiler=_g;Ue.PureComponent=Fu;Ue.StrictMode=gg;Ue.Suspense=yg;Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cg;Ue.act=Lp;Ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Tp({},t.props),o=t.key,i=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,s=ku.current),e.key!==void 0&&(o=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cp.call(e,l)&&!Pp.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:_s,type:t.type,key:o,ref:i,props:r,_owner:s}};Ue.createContext=function(t){return t={$$typeof:wg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vg,_context:t},t.Consumer=t};Ue.createElement=bp;Ue.createFactory=function(t){var e=bp.bind(null,t);return e.type=t,e};Ue.createRef=function(){return{current:null}};Ue.forwardRef=function(t){return{$$typeof:xg,render:t}};Ue.isValidElement=zu;Ue.lazy=function(t){return{$$typeof:Mg,_payload:{_status:-1,_result:t},_init:Rg}};Ue.memo=function(t,e){return{$$typeof:Sg,type:t,compare:e===void 0?null:e}};Ue.startTransition=function(t){var e=ma.transition;ma.transition={};try{t()}finally{ma.transition=e}};Ue.unstable_act=Lp;Ue.useCallback=function(t,e){return Gt.current.useCallback(t,e)};Ue.useContext=function(t){return Gt.current.useContext(t)};Ue.useDebugValue=function(){};Ue.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};Ue.useEffect=function(t,e){return Gt.current.useEffect(t,e)};Ue.useId=function(){return Gt.current.useId()};Ue.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};Ue.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};Ue.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};Ue.useMemo=function(t,e){return Gt.current.useMemo(t,e)};Ue.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};Ue.useRef=function(t){return Gt.current.useRef(t)};Ue.useState=function(t){return Gt.current.useState(t)};Ue.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};Ue.useTransition=function(){return Gt.current.useTransition()};Ue.version="18.3.1";Mp.exports=Ue;var Et=Mp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg=Et,bg=Symbol.for("react.element"),Lg=Symbol.for("react.fragment"),Dg=Object.prototype.hasOwnProperty,Ug=Pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ng={key:!0,ref:!0,__self:!0,__source:!0};function Dp(t,e,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Dg.call(e,r)&&!Ng.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:bg,type:t,key:i,ref:s,props:o,_owner:Ug.current}}rl.Fragment=Lg;rl.jsx=Dp;rl.jsxs=Dp;Sp.exports=rl;var Tt=Sp.exports,Up={exports:{}},ln={},Np={exports:{}},Ip={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,V){var G=P.length;P.push(V);e:for(;0<G;){var oe=G-1>>>1,ge=P[oe];if(0<o(ge,V))P[oe]=V,P[G]=ge,G=oe;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var V=P[0],G=P.pop();if(G!==V){P[0]=G;e:for(var oe=0,ge=P.length,Ge=ge>>>1;oe<Ge;){var H=2*(oe+1)-1,te=P[H],ue=H+1,ne=P[ue];if(0>o(te,G))ue<ge&&0>o(ne,te)?(P[oe]=ne,P[ue]=G,oe=ue):(P[oe]=te,P[H]=G,oe=H);else if(ue<ge&&0>o(ne,G))P[oe]=ne,P[ue]=G,oe=ue;else break e}}return V}function o(P,V){var G=P.sortIndex-V.sortIndex;return G!==0?G:P.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,h=null,f=3,m=!1,v=!1,w=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=P)r(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function S(P){if(w=!1,g(P),!v)if(n(l)!==null)v=!0,ee(C);else{var V=n(c);V!==null&&J(S,V.startTime-P)}}function C(P,V){v=!1,w&&(w=!1,u(b),b=-1),m=!0;var G=f;try{for(g(V),h=n(l);h!==null&&(!(h.expirationTime>V)||P&&!I());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var ge=oe(h.expirationTime<=V);V=t.unstable_now(),typeof ge=="function"?h.callback=ge:h===n(l)&&r(l),g(V)}else r(l);h=n(l)}if(h!==null)var Ge=!0;else{var H=n(c);H!==null&&J(S,H.startTime-V),Ge=!1}return Ge}finally{h=null,f=G,m=!1}}var A=!1,T=null,b=-1,E=5,x=-1;function I(){return!(t.unstable_now()-x<E)}function W(){if(T!==null){var P=t.unstable_now();x=P;var V=!0;try{V=T(!0,P)}finally{V?D():(A=!1,T=null)}}else A=!1}var D;if(typeof _=="function")D=function(){_(W)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,j=Y.port2;Y.port1.onmessage=W,D=function(){j.postMessage(null)}}else D=function(){p(W,0)};function ee(P){T=P,A||(A=!0,D())}function J(P,V){b=p(function(){P(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,ee(C))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var G=f;f=V;try{return P()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,V){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var G=f;f=P;try{return V()}finally{f=G}},t.unstable_scheduleCallback=function(P,V,G){var oe=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?oe+G:oe):G=oe,P){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=G+ge,P={id:d++,callback:V,priorityLevel:P,startTime:G,expirationTime:ge,sortIndex:-1},G>oe?(P.sortIndex=G,e(c,P),n(l)===null&&P===n(c)&&(w?(u(b),b=-1):w=!0,J(S,G-oe))):(P.sortIndex=ge,e(l,P),v||m||(v=!0,ee(C))),P},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(P){var V=f;return function(){var G=f;f=V;try{return P.apply(this,arguments)}finally{f=G}}}})(Ip);Np.exports=Ip;var Ig=Np.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg=Et,an=Ig;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,Ji={};function vo(t,e){ai(t,e),ai(t+"Capture",e)}function ai(t,e){for(Ji[t]=e,t=0;t<e.length;t++)Fp.add(e[t])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=Object.prototype.hasOwnProperty,Og=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yd={},qd={};function kg(t){return Ic.call(qd,t)?!0:Ic.call(Yd,t)?!1:Og.test(t)?qd[t]=!0:(Yd[t]=!0,!1)}function zg(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bg(t,e,n,r){if(e===null||typeof e>"u"||zg(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,r,o,i,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=s}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ct[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ct[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ct[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bu=/[\-:]([a-z])/g;function Hu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bu,Hu);Ct[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bu,Hu);Ct[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bu,Hu);Ct[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ct[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vu(t,e,n,r){var o=Ct.hasOwnProperty(e)?Ct[e]:null;(o!==null?o.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bg(e,n,o,r)&&(n=null),r||o===null?kg(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):o.mustUseProperty?t[o.propertyName]=n===null?o.type===3?!1:"":n:(e=o.attributeName,r=o.attributeNamespace,n===null?t.removeAttribute(e):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ps=Symbol.for("react.element"),zo=Symbol.for("react.portal"),Bo=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),Op=Symbol.for("react.provider"),kp=Symbol.for("react.context"),Wu=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),kc=Symbol.for("react.suspense_list"),Xu=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),zp=Symbol.for("react.offscreen"),$d=Symbol.iterator;function Ai(t){return t===null||typeof t!="object"?null:(t=$d&&t[$d]||t["@@iterator"],typeof t=="function"?t:null)}var st=Object.assign,Pl;function zi(t){if(Pl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pl=e&&e[1]||""}return`
`+Pl+t}var bl=!1;function Ll(t,e){if(!t||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zi(t):""}function Hg(t){switch(t.tag){case 5:return zi(t.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 2:case 15:return t=Ll(t.type,!1),t;case 11:return t=Ll(t.type.render,!1),t;case 1:return t=Ll(t.type,!0),t;default:return""}}function zc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bo:return"Fragment";case zo:return"Portal";case Fc:return"Profiler";case Gu:return"StrictMode";case Oc:return"Suspense";case kc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kp:return(t.displayName||"Context")+".Consumer";case Op:return(t._context.displayName||"Context")+".Provider";case Wu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xu:return e=t.displayName||null,e!==null?e:zc(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return zc(t(e))}catch{}}return null}function Vg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zc(e);case 8:return e===Gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gg(t){var e=Bp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bs(t){t._valueTracker||(t._valueTracker=Gg(t))}function Hp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ra(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bc(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vp(t,e){e=e.checked,e!=null&&Vu(t,"checked",e,!1)}function Hc(t,e){Vp(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vc(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vc(t,e,n){(e!=="number"||Ra(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bi=Array.isArray;function Qo(t,e,n,r){if(t=t.options,e){e={};for(var o=0;o<n.length;o++)e["$"+n[o]]=!0;for(n=0;n<t.length;n++)o=e.hasOwnProperty("$"+t[n].value),t[n].selected!==o&&(t[n].selected=o),o&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,o=0;o<t.length;o++){if(t[o].value===n){t[o].selected=!0,r&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function Gc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Z(92));if(Bi(n)){if(1<n.length)throw Error(Z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function Gp(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ls,Xp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,o){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,o)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ls=Ls||document.createElement("div"),Ls.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ls.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function es(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wg=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(t){Wg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wi[e]=Wi[t]})});function jp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wi.hasOwnProperty(t)&&Wi[t]?(""+e).trim():e+"px"}function Yp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=jp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,o):t[n]=o}}var Xg=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xc(t,e){if(e){if(Xg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function jc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yc=null;function ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qc=null,Jo=null,ei=null;function ef(t){if(t=xs(t)){if(typeof qc!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=ll(e),qc(t.stateNode,t.type,e))}}function qp(t){Jo?ei?ei.push(t):ei=[t]:Jo=t}function $p(){if(Jo){var t=Jo,e=ei;if(ei=Jo=null,ef(t),e)for(t=0;t<e.length;t++)ef(e[t])}}function Kp(t,e){return t(e)}function Zp(){}var Dl=!1;function Qp(t,e,n){if(Dl)return t(e,n);Dl=!0;try{return Kp(t,e,n)}finally{Dl=!1,(Jo!==null||ei!==null)&&(Zp(),$p())}}function ts(t,e){var n=t.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var $c=!1;if(rr)try{var Ri={};Object.defineProperty(Ri,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Ri,Ri),window.removeEventListener("test",Ri,Ri)}catch{$c=!1}function jg(t,e,n,r,o,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Xi=!1,Ca=null,Pa=!1,Kc=null,Yg={onError:function(t){Xi=!0,Ca=t}};function qg(t,e,n,r,o,i,s,a,l){Xi=!1,Ca=null,jg.apply(Yg,arguments)}function $g(t,e,n,r,o,i,s,a,l){if(qg.apply(this,arguments),Xi){if(Xi){var c=Ca;Xi=!1,Ca=null}else throw Error(Z(198));Pa||(Pa=!0,Kc=c)}}function wo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tf(t){if(wo(t)!==t)throw Error(Z(188))}function Kg(t){var e=t.alternate;if(!e){if(e=wo(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,r=e;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return tf(o),t;if(i===r)return tf(o),e;i=i.sibling}throw Error(Z(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(Z(189))}}if(n.alternate!==r)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function em(t){return t=Kg(t),t!==null?tm(t):null}function tm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tm(t);if(e!==null)return e;t=t.sibling}return null}var nm=an.unstable_scheduleCallback,nf=an.unstable_cancelCallback,Zg=an.unstable_shouldYield,Qg=an.unstable_requestPaint,dt=an.unstable_now,Jg=an.unstable_getCurrentPriorityLevel,Yu=an.unstable_ImmediatePriority,rm=an.unstable_UserBlockingPriority,ba=an.unstable_NormalPriority,e_=an.unstable_LowPriority,om=an.unstable_IdlePriority,ol=null,Bn=null;function t_(t){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:o_,n_=Math.log,r_=Math.LN2;function o_(t){return t>>>=0,t===0?32:31-(n_(t)/r_|0)|0}var Ds=64,Us=4194304;function Hi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function La(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,o=t.suspendedLanes,i=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Hi(a):(i&=s,i!==0&&(r=Hi(i)))}else s=n&~o,s!==0?r=Hi(s):i!==0&&(r=Hi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&o)&&(o=r&-r,i=e&-e,o>=i||o===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),o=1<<n,r|=t[n],e&=~o;return r}function i_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,o=t.expirationTimes,i=t.pendingLanes;0<i;){var s=31-Cn(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=i_(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Zc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function im(){var t=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),t}function Ul(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function a_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var o=31-Cn(n),i=1<<o;e[o]=0,r[o]=-1,t[o]=-1,n&=~i}}function qu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),o=1<<r;o&e|t[r]&e&&(t[r]|=e),n&=~o}}var je=0;function sm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var am,$u,lm,cm,um,Qc=!1,Ns=[],Tr=null,Ar=null,Rr=null,ns=new Map,rs=new Map,wr=[],l_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rf(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":ns.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":rs.delete(e.pointerId)}}function Ci(t,e,n,r,o,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},e!==null&&(e=xs(e),e!==null&&$u(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function c_(t,e,n,r,o){switch(e){case"focusin":return Tr=Ci(Tr,t,e,n,r,o),!0;case"dragenter":return Ar=Ci(Ar,t,e,n,r,o),!0;case"mouseover":return Rr=Ci(Rr,t,e,n,r,o),!0;case"pointerover":var i=o.pointerId;return ns.set(i,Ci(ns.get(i)||null,t,e,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,rs.set(i,Ci(rs.get(i)||null,t,e,n,r,o)),!0}return!1}function dm(t){var e=ro(t.target);if(e!==null){var n=wo(e);if(n!==null){if(e=n.tag,e===13){if(e=Jp(n),e!==null){t.blockedOn=e,um(t.priority,function(){lm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ga(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yc=r,n.target.dispatchEvent(r),Yc=null}else return e=xs(n),e!==null&&$u(e),t.blockedOn=n,!1;e.shift()}return!0}function of(t,e,n){ga(t)&&n.delete(e)}function u_(){Qc=!1,Tr!==null&&ga(Tr)&&(Tr=null),Ar!==null&&ga(Ar)&&(Ar=null),Rr!==null&&ga(Rr)&&(Rr=null),ns.forEach(of),rs.forEach(of)}function Pi(t,e){t.blockedOn===e&&(t.blockedOn=null,Qc||(Qc=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,u_)))}function os(t){function e(o){return Pi(o,t)}if(0<Ns.length){Pi(Ns[0],t);for(var n=1;n<Ns.length;n++){var r=Ns[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tr!==null&&Pi(Tr,t),Ar!==null&&Pi(Ar,t),Rr!==null&&Pi(Rr,t),ns.forEach(e),rs.forEach(e),n=0;n<wr.length;n++)r=wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)dm(n),n.blockedOn===null&&wr.shift()}var ti=lr.ReactCurrentBatchConfig,Da=!0;function d_(t,e,n,r){var o=je,i=ti.transition;ti.transition=null;try{je=1,Ku(t,e,n,r)}finally{je=o,ti.transition=i}}function f_(t,e,n,r){var o=je,i=ti.transition;ti.transition=null;try{je=4,Ku(t,e,n,r)}finally{je=o,ti.transition=i}}function Ku(t,e,n,r){if(Da){var o=Jc(t,e,n,r);if(o===null)Gl(t,e,r,Ua,n),rf(t,r);else if(c_(o,t,e,n,r))r.stopPropagation();else if(rf(t,r),e&4&&-1<l_.indexOf(t)){for(;o!==null;){var i=xs(o);if(i!==null&&am(i),i=Jc(t,e,n,r),i===null&&Gl(t,e,r,Ua,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Gl(t,e,r,null,n)}}var Ua=null;function Jc(t,e,n,r){if(Ua=null,t=ju(r),t=ro(t),t!==null)if(e=wo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ua=t,null}function fm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jg()){case Yu:return 1;case rm:return 4;case ba:case e_:return 16;case om:return 536870912;default:return 16}default:return 16}}var Sr=null,Zu=null,_a=null;function hm(){if(_a)return _a;var t,e=Zu,n=e.length,r,o="value"in Sr?Sr.value:Sr.textContent,i=o.length;for(t=0;t<n&&e[t]===o[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===o[i-r];r++);return _a=o.slice(t,1<r?1-r:void 0)}function va(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Is(){return!0}function sf(){return!1}function cn(t){function e(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Is:sf,this.isPropagationStopped=sf,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Is)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Is)},persist:function(){},isPersistent:Is}),e}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=cn(wi),ws=st({},wi,{view:0,detail:0}),h_=cn(ws),Nl,Il,bi,il=st({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bi&&(bi&&t.type==="mousemove"?(Nl=t.screenX-bi.screenX,Il=t.screenY-bi.screenY):Il=Nl=0,bi=t),Nl)},movementY:function(t){return"movementY"in t?t.movementY:Il}}),af=cn(il),p_=st({},il,{dataTransfer:0}),m_=cn(p_),g_=st({},ws,{relatedTarget:0}),Fl=cn(g_),__=st({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),v_=cn(__),w_=st({},wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x_=cn(w_),y_=st({},wi,{data:0}),lf=cn(y_),S_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=E_[t])?!!e[t]:!1}function Ju(){return T_}var A_=st({},ws,{key:function(t){if(t.key){var e=S_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(t){return t.type==="keypress"?va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),R_=cn(A_),C_=st({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cf=cn(C_),P_=st({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),b_=cn(P_),L_=st({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),D_=cn(L_),U_=st({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N_=cn(U_),I_=[9,13,27,32],ed=rr&&"CompositionEvent"in window,ji=null;rr&&"documentMode"in document&&(ji=document.documentMode);var F_=rr&&"TextEvent"in window&&!ji,pm=rr&&(!ed||ji&&8<ji&&11>=ji),uf=" ",df=!1;function mm(t,e){switch(t){case"keyup":return I_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ho=!1;function O_(t,e){switch(t){case"compositionend":return gm(e);case"keypress":return e.which!==32?null:(df=!0,uf);case"textInput":return t=e.data,t===uf&&df?null:t;default:return null}}function k_(t,e){if(Ho)return t==="compositionend"||!ed&&mm(t,e)?(t=hm(),_a=Zu=Sr=null,Ho=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pm&&e.locale!=="ko"?null:e.data;default:return null}}var z_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!z_[t.type]:e==="textarea"}function _m(t,e,n,r){qp(r),e=Na(e,"onChange"),0<e.length&&(n=new Qu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yi=null,is=null;function B_(t){Cm(t,0)}function sl(t){var e=Wo(t);if(Hp(e))return t}function H_(t,e){if(t==="change")return e}var vm=!1;if(rr){var Ol;if(rr){var kl="oninput"in document;if(!kl){var hf=document.createElement("div");hf.setAttribute("oninput","return;"),kl=typeof hf.oninput=="function"}Ol=kl}else Ol=!1;vm=Ol&&(!document.documentMode||9<document.documentMode)}function pf(){Yi&&(Yi.detachEvent("onpropertychange",wm),is=Yi=null)}function wm(t){if(t.propertyName==="value"&&sl(is)){var e=[];_m(e,is,t,ju(t)),Qp(B_,e)}}function V_(t,e,n){t==="focusin"?(pf(),Yi=e,is=n,Yi.attachEvent("onpropertychange",wm)):t==="focusout"&&pf()}function G_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sl(is)}function W_(t,e){if(t==="click")return sl(e)}function X_(t,e){if(t==="input"||t==="change")return sl(e)}function j_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bn=typeof Object.is=="function"?Object.is:j_;function ss(t,e){if(bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ic.call(e,o)||!bn(t[o],e[o]))return!1}return!0}function mf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gf(t,e){var n=mf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mf(n)}}function xm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ym(){for(var t=window,e=Ra();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ra(t.document)}return e}function td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Y_(t){var e=ym(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xm(n.ownerDocument.documentElement,n)){if(r!==null&&td(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!t.extend&&i>r&&(o=r,r=i,i=o),o=gf(n,i);var s=gf(n,r);o&&s&&(t.rangeCount!==1||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var q_=rr&&"documentMode"in document&&11>=document.documentMode,Vo=null,eu=null,qi=null,tu=!1;function _f(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tu||Vo==null||Vo!==Ra(r)||(r=Vo,"selectionStart"in r&&td(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qi&&ss(qi,r)||(qi=r,r=Na(eu,"onSelect"),0<r.length&&(e=new Qu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vo)))}function Fs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Go={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionend:Fs("Transition","TransitionEnd")},zl={},Sm={};rr&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete Go.animationend.animation,delete Go.animationiteration.animation,delete Go.animationstart.animation),"TransitionEvent"in window||delete Go.transitionend.transition);function al(t){if(zl[t])return zl[t];if(!Go[t])return t;var e=Go[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sm)return zl[t]=e[n];return t}var Mm=al("animationend"),Em=al("animationiteration"),Tm=al("animationstart"),Am=al("transitionend"),Rm=new Map,vf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(t,e){Rm.set(t,e),vo(e,[t])}for(var Bl=0;Bl<vf.length;Bl++){var Hl=vf[Bl],$_=Hl.toLowerCase(),K_=Hl[0].toUpperCase()+Hl.slice(1);Br($_,"on"+K_)}Br(Mm,"onAnimationEnd");Br(Em,"onAnimationIteration");Br(Tm,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(Am,"onTransitionEnd");ai("onMouseEnter",["mouseout","mouseover"]);ai("onMouseLeave",["mouseout","mouseover"]);ai("onPointerEnter",["pointerout","pointerover"]);ai("onPointerLeave",["pointerout","pointerover"]);vo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vo("onBeforeInput",["compositionend","keypress","textInput","paste"]);vo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));function wf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$g(r,e,void 0,t),t.currentTarget=null}function Cm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],o=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;wf(o,a,c),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;wf(o,a,c),i=l}}}if(Pa)throw t=Kc,Pa=!1,Kc=null,t}function Je(t,e){var n=e[su];n===void 0&&(n=e[su]=new Set);var r=t+"__bubble";n.has(r)||(Pm(e,t,2,!1),n.add(r))}function Vl(t,e,n){var r=0;e&&(r|=4),Pm(n,t,r,e)}var Os="_reactListening"+Math.random().toString(36).slice(2);function as(t){if(!t[Os]){t[Os]=!0,Fp.forEach(function(n){n!=="selectionchange"&&(Z_.has(n)||Vl(n,!1,t),Vl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Os]||(e[Os]=!0,Vl("selectionchange",!1,e))}}function Pm(t,e,n,r){switch(fm(e)){case 1:var o=d_;break;case 4:o=f_;break;default:o=Ku}n=o.bind(null,e,n,t),o=void 0,!$c||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?t.addEventListener(e,n,{capture:!0,passive:o}):t.addEventListener(e,n,!0):o!==void 0?t.addEventListener(e,n,{passive:o}):t.addEventListener(e,n,!1)}function Gl(t,e,n,r,o){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=ro(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}Qp(function(){var c=i,d=ju(n),h=[];e:{var f=Rm.get(t);if(f!==void 0){var m=Qu,v=t;switch(t){case"keypress":if(va(n)===0)break e;case"keydown":case"keyup":m=R_;break;case"focusin":v="focus",m=Fl;break;case"focusout":v="blur",m=Fl;break;case"beforeblur":case"afterblur":m=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=m_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=b_;break;case Mm:case Em:case Tm:m=v_;break;case Am:m=D_;break;case"scroll":m=h_;break;case"wheel":m=N_;break;case"copy":case"cut":case"paste":m=x_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=cf}var w=(e&4)!==0,p=!w&&t==="scroll",u=w?f!==null?f+"Capture":null:f;w=[];for(var _=c,g;_!==null;){g=_;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,u!==null&&(S=ts(_,u),S!=null&&w.push(ls(_,S,g)))),p)break;_=_.return}0<w.length&&(f=new m(f,v,null,n,d),h.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Yc&&(v=n.relatedTarget||n.fromElement)&&(ro(v)||v[or]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?ro(v):null,v!==null&&(p=wo(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(w=af,S="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(w=cf,S="onPointerLeave",u="onPointerEnter",_="pointer"),p=m==null?f:Wo(m),g=v==null?f:Wo(v),f=new w(S,_+"leave",m,n,d),f.target=p,f.relatedTarget=g,S=null,ro(d)===c&&(w=new w(u,_+"enter",v,n,d),w.target=g,w.relatedTarget=p,S=w),p=S,m&&v)t:{for(w=m,u=v,_=0,g=w;g;g=yo(g))_++;for(g=0,S=u;S;S=yo(S))g++;for(;0<_-g;)w=yo(w),_--;for(;0<g-_;)u=yo(u),g--;for(;_--;){if(w===u||u!==null&&w===u.alternate)break t;w=yo(w),u=yo(u)}w=null}else w=null;m!==null&&xf(h,f,m,w,!1),v!==null&&p!==null&&xf(h,p,v,w,!0)}}e:{if(f=c?Wo(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=H_;else if(ff(f))if(vm)C=X_;else{C=G_;var A=V_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=W_);if(C&&(C=C(t,c))){_m(h,C,n,d);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Vc(f,"number",f.value)}switch(A=c?Wo(c):window,t){case"focusin":(ff(A)||A.contentEditable==="true")&&(Vo=A,eu=c,qi=null);break;case"focusout":qi=eu=Vo=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,_f(h,n,d);break;case"selectionchange":if(q_)break;case"keydown":case"keyup":_f(h,n,d)}var T;if(ed)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ho?mm(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(pm&&n.locale!=="ko"&&(Ho||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ho&&(T=hm()):(Sr=d,Zu="value"in Sr?Sr.value:Sr.textContent,Ho=!0)),A=Na(c,b),0<A.length&&(b=new lf(b,t,null,n,d),h.push({event:b,listeners:A}),T?b.data=T:(T=gm(n),T!==null&&(b.data=T)))),(T=F_?O_(t,n):k_(t,n))&&(c=Na(c,"onBeforeInput"),0<c.length&&(d=new lf("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}Cm(h,e)})}function ls(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Na(t,e){for(var n=e+"Capture",r=[];t!==null;){var o=t,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ts(t,n),i!=null&&r.unshift(ls(t,i,o)),i=ts(t,e),i!=null&&r.push(ls(t,i,o))),t=t.return}return r}function yo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xf(t,e,n,r,o){for(var i=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,o?(l=ts(n,i),l!=null&&s.unshift(ls(n,l,a))):o||(l=ts(n,i),l!=null&&s.push(ls(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Q_=/\r\n?/g,J_=/\u0000|\uFFFD/g;function yf(t){return(typeof t=="string"?t:""+t).replace(Q_,`
`).replace(J_,"")}function ks(t,e,n){if(e=yf(e),yf(t)!==e&&n)throw Error(Z(425))}function Ia(){}var nu=null,ru=null;function ou(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,ev=typeof clearTimeout=="function"?clearTimeout:void 0,Sf=typeof Promise=="function"?Promise:void 0,tv=typeof queueMicrotask=="function"?queueMicrotask:typeof Sf<"u"?function(t){return Sf.resolve(null).then(t).catch(nv)}:iu;function nv(t){setTimeout(function(){throw t})}function Wl(t,e){var n=e,r=0;do{var o=n.nextSibling;if(t.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){t.removeChild(o),os(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);os(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xi=Math.random().toString(36).slice(2),Fn="__reactFiber$"+xi,cs="__reactProps$"+xi,or="__reactContainer$"+xi,su="__reactEvents$"+xi,rv="__reactListeners$"+xi,ov="__reactHandles$"+xi;function ro(t){var e=t[Fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[or]||n[Fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mf(t);t!==null;){if(n=t[Fn])return n;t=Mf(t)}return e}t=n,n=t.parentNode}return null}function xs(t){return t=t[Fn]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function ll(t){return t[cs]||null}var au=[],Xo=-1;function Hr(t){return{current:t}}function tt(t){0>Xo||(t.current=au[Xo],au[Xo]=null,Xo--)}function Ke(t,e){Xo++,au[Xo]=t.current,t.current=e}var Fr={},Ot=Hr(Fr),$t=Hr(!1),fo=Fr;function li(t,e){var n=t.type.contextTypes;if(!n)return Fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=o),o}function Kt(t){return t=t.childContextTypes,t!=null}function Fa(){tt($t),tt(Ot)}function Ef(t,e,n){if(Ot.current!==Fr)throw Error(Z(168));Ke(Ot,e),Ke($t,n)}function bm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(Z(108,Vg(t)||"Unknown",o));return st({},n,r)}function Oa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fr,fo=Ot.current,Ke(Ot,t),Ke($t,$t.current),!0}function Tf(t,e,n){var r=t.stateNode;if(!r)throw Error(Z(169));n?(t=bm(t,e,fo),r.__reactInternalMemoizedMergedChildContext=t,tt($t),tt(Ot),Ke(Ot,t)):tt($t),Ke($t,n)}var Zn=null,cl=!1,Xl=!1;function Lm(t){Zn===null?Zn=[t]:Zn.push(t)}function iv(t){cl=!0,Lm(t)}function Vr(){if(!Xl&&Zn!==null){Xl=!0;var t=0,e=je;try{var n=Zn;for(je=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Zn=null,cl=!1}catch(o){throw Zn!==null&&(Zn=Zn.slice(t+1)),nm(Yu,Vr),o}finally{je=e,Xl=!1}}return null}var jo=[],Yo=0,ka=null,za=0,fn=[],hn=0,ho=null,Jn=1,er="";function Zr(t,e){jo[Yo++]=za,jo[Yo++]=ka,ka=t,za=e}function Dm(t,e,n){fn[hn++]=Jn,fn[hn++]=er,fn[hn++]=ho,ho=t;var r=Jn;t=er;var o=32-Cn(r)-1;r&=~(1<<o),n+=1;var i=32-Cn(e)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Jn=1<<32-Cn(e)+o|n<<o|r,er=i+t}else Jn=1<<i|n<<o|r,er=t}function nd(t){t.return!==null&&(Zr(t,1),Dm(t,1,0))}function rd(t){for(;t===ka;)ka=jo[--Yo],jo[Yo]=null,za=jo[--Yo],jo[Yo]=null;for(;t===ho;)ho=fn[--hn],fn[hn]=null,er=fn[--hn],fn[hn]=null,Jn=fn[--hn],fn[hn]=null}var on=null,rn=null,rt=!1,An=null;function Um(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Af(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,rn=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ho!==null?{id:Jn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,rn=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cu(t){if(rt){var e=rn;if(e){var n=e;if(!Af(t,e)){if(lu(t))throw Error(Z(418));e=Cr(n.nextSibling);var r=on;e&&Af(t,e)?Um(r,n):(t.flags=t.flags&-4097|2,rt=!1,on=t)}}else{if(lu(t))throw Error(Z(418));t.flags=t.flags&-4097|2,rt=!1,on=t}}}function Rf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function zs(t){if(t!==on)return!1;if(!rt)return Rf(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ou(t.type,t.memoizedProps)),e&&(e=rn)){if(lu(t))throw Nm(),Error(Z(418));for(;e;)Um(t,e),e=Cr(e.nextSibling)}if(Rf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rn=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rn=null}}else rn=on?Cr(t.stateNode.nextSibling):null;return!0}function Nm(){for(var t=rn;t;)t=Cr(t.nextSibling)}function ci(){rn=on=null,rt=!1}function od(t){An===null?An=[t]:An.push(t)}var sv=lr.ReactCurrentBatchConfig;function Li(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var r=n.stateNode}if(!r)throw Error(Z(147,t));var o=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,t))}return t}function Bs(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cf(t){var e=t._init;return e(t._payload)}function Im(t){function e(u,_){if(t){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function r(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function o(u,_){return u=Dr(u,_),u.index=0,u.sibling=null,u}function i(u,_,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=2,_):g):(u.flags|=2,_)):(u.flags|=1048576,_)}function s(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,g,S){return _===null||_.tag!==6?(_=Ql(g,u.mode,S),_.return=u,_):(_=o(_,g),_.return=u,_)}function l(u,_,g,S){var C=g.type;return C===Bo?d(u,_,g.props.children,S,g.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&Cf(C)===_.type)?(S=o(_,g.props),S.ref=Li(u,_,g),S.return=u,S):(S=Ta(g.type,g.key,g.props,null,u.mode,S),S.ref=Li(u,_,g),S.return=u,S)}function c(u,_,g,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Jl(g,u.mode,S),_.return=u,_):(_=o(_,g.children||[]),_.return=u,_)}function d(u,_,g,S,C){return _===null||_.tag!==7?(_=co(g,u.mode,S,C),_.return=u,_):(_=o(_,g),_.return=u,_)}function h(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ql(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ps:return g=Ta(_.type,_.key,_.props,null,u.mode,g),g.ref=Li(u,null,_),g.return=u,g;case zo:return _=Jl(_,u.mode,g),_.return=u,_;case _r:var S=_._init;return h(u,S(_._payload),g)}if(Bi(_)||Ai(_))return _=co(_,u.mode,g,null),_.return=u,_;Bs(u,_)}return null}function f(u,_,g,S){var C=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(u,_,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ps:return g.key===C?l(u,_,g,S):null;case zo:return g.key===C?c(u,_,g,S):null;case _r:return C=g._init,f(u,_,C(g._payload),S)}if(Bi(g)||Ai(g))return C!==null?null:d(u,_,g,S,null);Bs(u,g)}return null}function m(u,_,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(g)||null,a(_,u,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ps:return u=u.get(S.key===null?g:S.key)||null,l(_,u,S,C);case zo:return u=u.get(S.key===null?g:S.key)||null,c(_,u,S,C);case _r:var A=S._init;return m(u,_,g,A(S._payload),C)}if(Bi(S)||Ai(S))return u=u.get(g)||null,d(_,u,S,C,null);Bs(_,S)}return null}function v(u,_,g,S){for(var C=null,A=null,T=_,b=_=0,E=null;T!==null&&b<g.length;b++){T.index>b?(E=T,T=null):E=T.sibling;var x=f(u,T,g[b],S);if(x===null){T===null&&(T=E);break}t&&T&&x.alternate===null&&e(u,T),_=i(x,_,b),A===null?C=x:A.sibling=x,A=x,T=E}if(b===g.length)return n(u,T),rt&&Zr(u,b),C;if(T===null){for(;b<g.length;b++)T=h(u,g[b],S),T!==null&&(_=i(T,_,b),A===null?C=T:A.sibling=T,A=T);return rt&&Zr(u,b),C}for(T=r(u,T);b<g.length;b++)E=m(T,u,b,g[b],S),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?b:E.key),_=i(E,_,b),A===null?C=E:A.sibling=E,A=E);return t&&T.forEach(function(I){return e(u,I)}),rt&&Zr(u,b),C}function w(u,_,g,S){var C=Ai(g);if(typeof C!="function")throw Error(Z(150));if(g=C.call(g),g==null)throw Error(Z(151));for(var A=C=null,T=_,b=_=0,E=null,x=g.next();T!==null&&!x.done;b++,x=g.next()){T.index>b?(E=T,T=null):E=T.sibling;var I=f(u,T,x.value,S);if(I===null){T===null&&(T=E);break}t&&T&&I.alternate===null&&e(u,T),_=i(I,_,b),A===null?C=I:A.sibling=I,A=I,T=E}if(x.done)return n(u,T),rt&&Zr(u,b),C;if(T===null){for(;!x.done;b++,x=g.next())x=h(u,x.value,S),x!==null&&(_=i(x,_,b),A===null?C=x:A.sibling=x,A=x);return rt&&Zr(u,b),C}for(T=r(u,T);!x.done;b++,x=g.next())x=m(T,u,b,x.value,S),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?b:x.key),_=i(x,_,b),A===null?C=x:A.sibling=x,A=x);return t&&T.forEach(function(W){return e(u,W)}),rt&&Zr(u,b),C}function p(u,_,g,S){if(typeof g=="object"&&g!==null&&g.type===Bo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ps:e:{for(var C=g.key,A=_;A!==null;){if(A.key===C){if(C=g.type,C===Bo){if(A.tag===7){n(u,A.sibling),_=o(A,g.props.children),_.return=u,u=_;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&Cf(C)===A.type){n(u,A.sibling),_=o(A,g.props),_.ref=Li(u,A,g),_.return=u,u=_;break e}n(u,A);break}else e(u,A);A=A.sibling}g.type===Bo?(_=co(g.props.children,u.mode,S,g.key),_.return=u,u=_):(S=Ta(g.type,g.key,g.props,null,u.mode,S),S.ref=Li(u,_,g),S.return=u,u=S)}return s(u);case zo:e:{for(A=g.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),_=o(_,g.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Jl(g,u.mode,S),_.return=u,u=_}return s(u);case _r:return A=g._init,p(u,_,A(g._payload),S)}if(Bi(g))return v(u,_,g,S);if(Ai(g))return w(u,_,g,S);Bs(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),_=o(_,g),_.return=u,u=_):(n(u,_),_=Ql(g,u.mode,S),_.return=u,u=_),s(u)):n(u,_)}return p}var ui=Im(!0),Fm=Im(!1),Ba=Hr(null),Ha=null,qo=null,id=null;function sd(){id=qo=Ha=null}function ad(t){var e=Ba.current;tt(Ba),t._currentValue=e}function uu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ni(t,e){Ha=t,id=qo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function vn(t){var e=t._currentValue;if(id!==t)if(t={context:t,memoizedValue:e,next:null},qo===null){if(Ha===null)throw Error(Z(308));qo=t,Ha.dependencies={lanes:0,firstContext:t}}else qo=qo.next=t;return e}var oo=null;function ld(t){oo===null?oo=[t]:oo.push(t)}function Om(t,e,n,r){var o=e.interleaved;return o===null?(n.next=n,ld(e)):(n.next=o.next,o.next=n),e.interleaved=n,ir(t,r)}function ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function cd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function km(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Be&2){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,ir(t,n)}return o=r.interleaved,o===null?(e.next=e,ld(r)):(e.next=o.next,o.next=e),r.interleaved=e,ir(t,n)}function wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qu(t,n)}}function Pf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=e:i=i.next=e}else o=i=e;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Va(t,e,n,r){var o=t.updateQueue;vr=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(i!==null){var h=o.baseState;s=0,d=c=l=null,a=i;do{var f=a.lane,m=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(f=e,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(m,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(m,h,f):v,f==null)break e;h=st({},h,f);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,s|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(d===null&&(l=h),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=d,e=o.shared.interleaved,e!==null){o=e;do s|=o.lane,o=o.next;while(o!==e)}else i===null&&(o.shared.lanes=0);mo|=s,t.lanes=s,t.memoizedState=h}}function bf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(Z(191,o));o.call(r)}}}var ys={},Hn=Hr(ys),us=Hr(ys),ds=Hr(ys);function io(t){if(t===ys)throw Error(Z(174));return t}function ud(t,e){switch(Ke(ds,e),Ke(us,t),Ke(Hn,ys),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wc(e,t)}tt(Hn),Ke(Hn,e)}function di(){tt(Hn),tt(us),tt(ds)}function zm(t){io(ds.current);var e=io(Hn.current),n=Wc(e,t.type);e!==n&&(Ke(us,t),Ke(Hn,n))}function dd(t){us.current===t&&(tt(Hn),tt(us))}var ot=Hr(0);function Ga(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jl=[];function fd(){for(var t=0;t<jl.length;t++)jl[t]._workInProgressVersionPrimary=null;jl.length=0}var xa=lr.ReactCurrentDispatcher,Yl=lr.ReactCurrentBatchConfig,po=0,it=null,gt=null,yt=null,Wa=!1,$i=!1,fs=0,av=0;function Dt(){throw Error(Z(321))}function hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bn(t[n],e[n]))return!1;return!0}function pd(t,e,n,r,o,i){if(po=i,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xa.current=t===null||t.memoizedState===null?dv:fv,t=n(r,o),$i){i=0;do{if($i=!1,fs=0,25<=i)throw Error(Z(301));i+=1,yt=gt=null,e.updateQueue=null,xa.current=hv,t=n(r,o)}while($i)}if(xa.current=Xa,e=gt!==null&&gt.next!==null,po=0,yt=gt=it=null,Wa=!1,e)throw Error(Z(300));return t}function md(){var t=fs!==0;return fs=0,t}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?it.memoizedState=yt=t:yt=yt.next=t,yt}function wn(){if(gt===null){var t=it.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=yt===null?it.memoizedState:yt.next;if(e!==null)yt=e,gt=t;else{if(t===null)throw Error(Z(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},yt===null?it.memoizedState=yt=t:yt=yt.next=t}return yt}function hs(t,e){return typeof e=="function"?e(t):e}function ql(t){var e=wn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var r=gt,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,c=i;do{var d=c.lane;if((po&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,it.lanes|=d,mo|=d}c=c.next}while(c!==null&&c!==i);l===null?s=r:l.next=a,bn(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){o=t;do i=o.lane,it.lanes|=i,mo|=i,o=o.next;while(o!==t)}else o===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $l(t){var e=wn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var r=n.dispatch,o=n.pending,i=e.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=t(i,s.action),s=s.next;while(s!==o);bn(i,e.memoizedState)||(qt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Bm(){}function Hm(t,e){var n=it,r=wn(),o=e(),i=!bn(r.memoizedState,o);if(i&&(r.memoizedState=o,qt=!0),r=r.queue,gd(Wm.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,ps(9,Gm.bind(null,n,r,o,e),void 0,null),St===null)throw Error(Z(349));po&30||Vm(n,e,o)}return o}function Vm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gm(t,e,n,r){e.value=n,e.getSnapshot=r,Xm(e)&&jm(t)}function Wm(t,e,n){return n(function(){Xm(e)&&jm(t)})}function Xm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bn(t,n)}catch{return!0}}function jm(t){var e=ir(t,1);e!==null&&Pn(e,t,1,-1)}function Lf(t){var e=Un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:t},e.queue=t,t=t.dispatch=uv.bind(null,it,t),[e.memoizedState,t]}function ps(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ym(){return wn().memoizedState}function ya(t,e,n,r){var o=Un();it.flags|=t,o.memoizedState=ps(1|e,n,void 0,r===void 0?null:r)}function ul(t,e,n,r){var o=wn();r=r===void 0?null:r;var i=void 0;if(gt!==null){var s=gt.memoizedState;if(i=s.destroy,r!==null&&hd(r,s.deps)){o.memoizedState=ps(e,n,i,r);return}}it.flags|=t,o.memoizedState=ps(1|e,n,i,r)}function Df(t,e){return ya(8390656,8,t,e)}function gd(t,e){return ul(2048,8,t,e)}function qm(t,e){return ul(4,2,t,e)}function $m(t,e){return ul(4,4,t,e)}function Km(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zm(t,e,n){return n=n!=null?n.concat([t]):null,ul(4,4,Km.bind(null,e,t),n)}function _d(){}function Qm(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jm(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function e0(t,e,n){return po&21?(bn(n,e)||(n=im(),it.lanes|=n,mo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function lv(t,e){var n=je;je=n!==0&&4>n?n:4,t(!0);var r=Yl.transition;Yl.transition={};try{t(!1),e()}finally{je=n,Yl.transition=r}}function t0(){return wn().memoizedState}function cv(t,e,n){var r=Lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},n0(t))r0(e,n);else if(n=Om(t,e,n,r),n!==null){var o=Ht();Pn(n,t,r,o),o0(n,e,r)}}function uv(t,e,n){var r=Lr(t),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(n0(t))r0(e,o);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,bn(a,s)){var l=e.interleaved;l===null?(o.next=o,ld(e)):(o.next=l.next,l.next=o),e.interleaved=o;return}}catch{}finally{}n=Om(t,e,o,r),n!==null&&(o=Ht(),Pn(n,t,r,o),o0(n,e,r))}}function n0(t){var e=t.alternate;return t===it||e!==null&&e===it}function r0(t,e){$i=Wa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qu(t,n)}}var Xa={readContext:vn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},dv={readContext:vn,useCallback:function(t,e){return Un().memoizedState=[t,e===void 0?null:e],t},useContext:vn,useEffect:Df,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ya(4194308,4,Km.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ya(4194308,4,t,e)},useInsertionEffect:function(t,e){return ya(4,2,t,e)},useMemo:function(t,e){var n=Un();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Un();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cv.bind(null,it,t),[r.memoizedState,t]},useRef:function(t){var e=Un();return t={current:t},e.memoizedState=t},useState:Lf,useDebugValue:_d,useDeferredValue:function(t){return Un().memoizedState=t},useTransition:function(){var t=Lf(!1),e=t[0];return t=lv.bind(null,t[1]),Un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=it,o=Un();if(rt){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),St===null)throw Error(Z(349));po&30||Vm(r,e,n)}o.memoizedState=n;var i={value:n,getSnapshot:e};return o.queue=i,Df(Wm.bind(null,r,i,t),[t]),r.flags|=2048,ps(9,Gm.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Un(),e=St.identifierPrefix;if(rt){var n=er,r=Jn;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=av++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fv={readContext:vn,useCallback:Qm,useContext:vn,useEffect:gd,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:$m,useMemo:Jm,useReducer:ql,useRef:Ym,useState:function(){return ql(hs)},useDebugValue:_d,useDeferredValue:function(t){var e=wn();return e0(e,gt.memoizedState,t)},useTransition:function(){var t=ql(hs)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Bm,useSyncExternalStore:Hm,useId:t0,unstable_isNewReconciler:!1},hv={readContext:vn,useCallback:Qm,useContext:vn,useEffect:gd,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:$m,useMemo:Jm,useReducer:$l,useRef:Ym,useState:function(){return $l(hs)},useDebugValue:_d,useDeferredValue:function(t){var e=wn();return gt===null?e.memoizedState=t:e0(e,gt.memoizedState,t)},useTransition:function(){var t=$l(hs)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Bm,useSyncExternalStore:Hm,useId:t0,unstable_isNewReconciler:!1};function En(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function du(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dl={isMounted:function(t){return(t=t._reactInternals)?wo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ht(),o=Lr(t),i=nr(r,o);i.payload=e,n!=null&&(i.callback=n),e=Pr(t,i,o),e!==null&&(Pn(e,t,o,r),wa(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ht(),o=Lr(t),i=nr(r,o);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Pr(t,i,o),e!==null&&(Pn(e,t,o,r),wa(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),r=Lr(t),o=nr(n,r);o.tag=2,e!=null&&(o.callback=e),e=Pr(t,o,r),e!==null&&(Pn(e,t,r,n),wa(e,t,r))}};function Uf(t,e,n,r,o,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,s):e.prototype&&e.prototype.isPureReactComponent?!ss(n,r)||!ss(o,i):!0}function i0(t,e,n){var r=!1,o=Fr,i=e.contextType;return typeof i=="object"&&i!==null?i=vn(i):(o=Kt(e)?fo:Ot.current,r=e.contextTypes,i=(r=r!=null)?li(t,o):Fr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=i),e}function Nf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dl.enqueueReplaceState(e,e.state,null)}function fu(t,e,n,r){var o=t.stateNode;o.props=n,o.state=t.memoizedState,o.refs={},cd(t);var i=e.contextType;typeof i=="object"&&i!==null?o.context=vn(i):(i=Kt(e)?fo:Ot.current,o.context=li(t,i)),o.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(du(t,e,i,n),o.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&dl.enqueueReplaceState(o,o.state,null),Va(t,n,o,r),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308)}function fi(t,e){try{var n="",r=e;do n+=Hg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:o,digest:null}}function Kl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pv=typeof WeakMap=="function"?WeakMap:Map;function s0(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ya||(Ya=!0,Mu=r),hu(t,e)},n}function a0(t,e,n){n=nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var o=e.value;n.payload=function(){return r(o)},n.callback=function(){hu(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){hu(t,e),typeof r!="function"&&(br===null?br=new Set([this]):br.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function If(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pv;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(n)||(o.add(n),t=Cv.bind(null,t,e,n),e.then(t,t))}function Ff(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Of(t,e,n,r,o){return t.mode&1?(t.flags|=65536,t.lanes=o,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var mv=lr.ReactCurrentOwner,qt=!1;function Bt(t,e,n,r){e.child=t===null?Fm(e,null,n,r):ui(e,t.child,n,r)}function kf(t,e,n,r,o){n=n.render;var i=e.ref;return ni(e,o),r=pd(t,e,n,r,i,o),n=md(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,sr(t,e,o)):(rt&&n&&nd(e),e.flags|=1,Bt(t,e,r,o),e.child)}function zf(t,e,n,r,o){if(t===null){var i=n.type;return typeof i=="function"&&!Td(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,l0(t,e,i,r,o)):(t=Ta(n.type,null,r,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:ss,n(s,r)&&t.ref===e.ref)return sr(t,e,o)}return e.flags|=1,t=Dr(i,r),t.ref=e.ref,t.return=e,e.child=t}function l0(t,e,n,r,o){if(t!==null){var i=t.memoizedProps;if(ss(i,r)&&t.ref===e.ref)if(qt=!1,e.pendingProps=r=i,(t.lanes&o)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,sr(t,e,o)}return pu(t,e,n,r,o)}function c0(t,e,n){var r=e.pendingProps,o=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Ko,nn),nn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ke(Ko,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ke(Ko,nn),nn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ke(Ko,nn),nn|=r;return Bt(t,e,o,n),e.child}function u0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pu(t,e,n,r,o){var i=Kt(n)?fo:Ot.current;return i=li(e,i),ni(e,o),n=pd(t,e,n,r,i,o),r=md(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,sr(t,e,o)):(rt&&r&&nd(e),e.flags|=1,Bt(t,e,n,o),e.child)}function Bf(t,e,n,r,o){if(Kt(n)){var i=!0;Oa(e)}else i=!1;if(ni(e,o),e.stateNode===null)Sa(t,e),i0(e,n,r),fu(e,n,r,o),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=vn(c):(c=Kt(n)?fo:Ot.current,c=li(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Nf(e,s,r,c),vr=!1;var f=e.memoizedState;s.state=f,Va(e,r,s,o),l=e.memoizedState,a!==r||f!==l||$t.current||vr?(typeof d=="function"&&(du(e,n,d,r),l=e.memoizedState),(a=vr||Uf(e,n,a,r,f,l,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,km(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:En(e.type,a),s.props=c,h=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=vn(l):(l=Kt(n)?fo:Ot.current,l=li(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Nf(e,s,r,l),vr=!1,f=e.memoizedState,s.state=f,Va(e,r,s,o);var v=e.memoizedState;a!==h||f!==v||$t.current||vr?(typeof m=="function"&&(du(e,n,m,r),v=e.memoizedState),(c=vr||Uf(e,n,c,r,f,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return mu(t,e,n,r,i,o)}function mu(t,e,n,r,o,i){u0(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return o&&Tf(e,n,!1),sr(t,e,i);r=e.stateNode,mv.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=ui(e,t.child,null,i),e.child=ui(e,null,a,i)):Bt(t,e,a,i),e.memoizedState=r.state,o&&Tf(e,n,!0),e.child}function d0(t){var e=t.stateNode;e.pendingContext?Ef(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ef(t,e.context,!1),ud(t,e.containerInfo)}function Hf(t,e,n,r,o){return ci(),od(o),e.flags|=256,Bt(t,e,n,r),e.child}var gu={dehydrated:null,treeContext:null,retryLane:0};function _u(t){return{baseLanes:t,cachePool:null,transitions:null}}function f0(t,e,n){var r=e.pendingProps,o=ot.current,i=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(o&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(o|=1),Ke(ot,o&1),t===null)return cu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,i?(r=e.mode,i=e.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=pl(s,r,0,null),t=co(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=_u(n),e.memoizedState=gu,t):vd(e,s));if(o=t.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return gv(t,e,s,r,a,o,n);if(i){i=r.fallback,s=e.mode,o=t.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==o?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Dr(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Dr(a,i):(i=co(i,s,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,s=t.child.memoizedState,s=s===null?_u(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=t.childLanes&~n,e.memoizedState=gu,r}return i=t.child,t=i.sibling,r=Dr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vd(t,e){return e=pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hs(t,e,n,r){return r!==null&&od(r),ui(e,t.child,null,n),t=vd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gv(t,e,n,r,o,i,s){if(n)return e.flags&256?(e.flags&=-257,r=Kl(Error(Z(422))),Hs(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,o=e.mode,r=pl({mode:"visible",children:r.children},o,0,null),i=co(i,o,s,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ui(e,t.child,null,s),e.child.memoizedState=_u(s),e.memoizedState=gu,i);if(!(e.mode&1))return Hs(t,e,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(Z(419)),r=Kl(i,r,void 0),Hs(t,e,s,r)}if(a=(s&t.childLanes)!==0,qt||a){if(r=St,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ir(t,o),Pn(r,t,o,-1))}return Ed(),r=Kl(Error(Z(421))),Hs(t,e,s,r)}return o.data==="$?"?(e.flags|=128,e.child=t.child,e=Pv.bind(null,t),o._reactRetry=e,null):(t=i.treeContext,rn=Cr(o.nextSibling),on=e,rt=!0,An=null,t!==null&&(fn[hn++]=Jn,fn[hn++]=er,fn[hn++]=ho,Jn=t.id,er=t.overflow,ho=e),e=vd(e,r.children),e.flags|=4096,e)}function Vf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),uu(t.return,e,n)}function Zl(t,e,n,r,o){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function h0(t,e,n){var r=e.pendingProps,o=r.revealOrder,i=r.tail;if(Bt(t,e,r.children,n),r=ot.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vf(t,n,e);else if(t.tag===19)Vf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ke(ot,r),!(e.mode&1))e.memoizedState=null;else switch(o){case"forwards":for(n=e.child,o=null;n!==null;)t=n.alternate,t!==null&&Ga(t)===null&&(o=n),n=n.sibling;n=o,n===null?(o=e.child,e.child=null):(o=n.sibling,n.sibling=null),Zl(e,!1,o,n,i);break;case"backwards":for(n=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&Ga(t)===null){e.child=o;break}t=o.sibling,o.sibling=n,n=o,o=t}Zl(e,!0,n,null,i);break;case"together":Zl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _v(t,e,n){switch(e.tag){case 3:d0(e),ci();break;case 5:zm(e);break;case 1:Kt(e.type)&&Oa(e);break;case 4:ud(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,o=e.memoizedProps.value;Ke(Ba,r._currentValue),r._currentValue=o;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ke(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?f0(t,e,n):(Ke(ot,ot.current&1),t=sr(t,e,n),t!==null?t.sibling:null);Ke(ot,ot.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return h0(t,e,n);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ke(ot,ot.current),r)break;return null;case 22:case 23:return e.lanes=0,c0(t,e,n)}return sr(t,e,n)}var p0,vu,m0,g0;p0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vu=function(){};m0=function(t,e,n,r){var o=t.memoizedProps;if(o!==r){t=e.stateNode,io(Hn.current);var i=null;switch(n){case"input":o=Bc(t,o),r=Bc(t,r),i=[];break;case"select":o=st({},o,{value:void 0}),r=st({},r,{value:void 0}),i=[];break;case"textarea":o=Gc(t,o),r=Gc(t,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ia)}Xc(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ji.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ji.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Je("scroll",t),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};g0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Di(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vv(t,e,n){var r=e.pendingProps;switch(rd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Kt(e.type)&&Fa(),Ut(e),null;case 3:return r=e.stateNode,di(),tt($t),tt(Ot),fd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(zs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(Au(An),An=null))),vu(t,e),Ut(e),null;case 5:dd(e);var o=io(ds.current);if(n=e.type,t!==null&&e.stateNode!=null)m0(t,e,n,r,o),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(Z(166));return Ut(e),null}if(t=io(Hn.current),zs(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Fn]=e,r[cs]=i,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",r),Je("close",r);break;case"iframe":case"object":case"embed":Je("load",r);break;case"video":case"audio":for(o=0;o<Vi.length;o++)Je(Vi[o],r);break;case"source":Je("error",r);break;case"img":case"image":case"link":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"input":Kd(r,i),Je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Je("invalid",r);break;case"textarea":Qd(r,i),Je("invalid",r)}Xc(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ks(r.textContent,a,t),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ks(r.textContent,a,t),o=["children",""+a]):Ji.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Je("scroll",r)}switch(n){case"input":bs(r),Zd(r,i,!0);break;case"textarea":bs(r),Jd(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ia)}r=o,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Fn]=e,t[cs]=r,p0(t,e,!1,!1),e.stateNode=t;e:{switch(s=jc(n,r),n){case"dialog":Je("cancel",t),Je("close",t),o=r;break;case"iframe":case"object":case"embed":Je("load",t),o=r;break;case"video":case"audio":for(o=0;o<Vi.length;o++)Je(Vi[o],t);o=r;break;case"source":Je("error",t),o=r;break;case"img":case"image":case"link":Je("error",t),Je("load",t),o=r;break;case"details":Je("toggle",t),o=r;break;case"input":Kd(t,r),o=Bc(t,r),Je("invalid",t);break;case"option":o=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},o=st({},r,{value:void 0}),Je("invalid",t);break;case"textarea":Qd(t,r),o=Gc(t,r),Je("invalid",t);break;default:o=r}Xc(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Yp(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xp(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&es(t,l):typeof l=="number"&&es(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ji.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Je("scroll",t):l!=null&&Vu(t,i,l,s))}switch(n){case"input":bs(t),Zd(t,r,!1);break;case"textarea":bs(t),Jd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Qo(t,!!r.multiple,i,!1):r.defaultValue!=null&&Qo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(t.onclick=Ia)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)g0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(Z(166));if(n=io(ds.current),io(Hn.current),zs(e)){if(r=e.stateNode,n=e.memoizedProps,r[Fn]=e,(i=r.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:ks(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ks(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fn]=e,e.stateNode=r}return Ut(e),null;case 13:if(tt(ot),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&rn!==null&&e.mode&1&&!(e.flags&128))Nm(),ci(),e.flags|=98560,i=!1;else if(i=zs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(Z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Z(317));i[Fn]=e}else ci(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),i=!1}else An!==null&&(Au(An),An=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?_t===0&&(_t=3):Ed())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return di(),vu(t,e),t===null&&as(e.stateNode.containerInfo),Ut(e),null;case 10:return ad(e.type._context),Ut(e),null;case 17:return Kt(e.type)&&Fa(),Ut(e),null;case 19:if(tt(ot),i=e.memoizedState,i===null)return Ut(e),null;if(r=(e.flags&128)!==0,s=i.rendering,s===null)if(r)Di(i,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ga(t),s!==null){for(e.flags|=128,Di(i,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,t=s.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ke(ot,ot.current&1|2),e.child}t=t.sibling}i.tail!==null&&dt()>hi&&(e.flags|=128,r=!0,Di(i,!1),e.lanes=4194304)}else{if(!r)if(t=Ga(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Di(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!rt)return Ut(e),null}else 2*dt()-i.renderingStartTime>hi&&n!==1073741824&&(e.flags|=128,r=!0,Di(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(n=i.last,n!==null?n.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=dt(),e.sibling=null,n=ot.current,Ke(ot,r?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return Md(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nn&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function wv(t,e){switch(rd(e),e.tag){case 1:return Kt(e.type)&&Fa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return di(),tt($t),tt(Ot),fd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dd(e),null;case 13:if(tt(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));ci()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(ot),null;case 4:return di(),null;case 10:return ad(e.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var Vs=!1,Ft=!1,xv=typeof WeakSet=="function"?WeakSet:Set,fe=null;function $o(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ct(t,e,r)}else n.current=null}function wu(t,e,n){try{n()}catch(r){ct(t,e,r)}}var Gf=!1;function yv(t,e){if(nu=Da,t=ym(),td(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||o!==0&&h.nodeType!==3||(a=s+o),h!==i||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===o&&(a=s),f===i&&++d===r&&(l=s),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ru={focusedElem:t,selectionRange:n},Da=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,p=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?w:En(e.type,w),p);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(S){ct(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return v=Gf,Gf=!1,v}function Ki(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var i=o.destroy;o.destroy=void 0,i!==void 0&&wu(e,n,i)}o=o.next}while(o!==r)}}function fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _0(t){var e=t.alternate;e!==null&&(t.alternate=null,_0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Fn],delete e[cs],delete e[su],delete e[rv],delete e[ov])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function v0(t){return t.tag===5||t.tag===3||t.tag===4}function Wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||v0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ia));else if(r!==4&&(t=t.child,t!==null))for(yu(t,e,n),t=t.sibling;t!==null;)yu(t,e,n),t=t.sibling}function Su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Su(t,e,n),t=t.sibling;t!==null;)Su(t,e,n),t=t.sibling}var Mt=null,Tn=!1;function ur(t,e,n){for(n=n.child;n!==null;)w0(t,e,n),n=n.sibling}function w0(t,e,n){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Ft||$o(n,e);case 6:var r=Mt,o=Tn;Mt=null,ur(t,e,n),Mt=r,Tn=o,Mt!==null&&(Tn?(t=Mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Mt.removeChild(n.stateNode));break;case 18:Mt!==null&&(Tn?(t=Mt,n=n.stateNode,t.nodeType===8?Wl(t.parentNode,n):t.nodeType===1&&Wl(t,n),os(t)):Wl(Mt,n.stateNode));break;case 4:r=Mt,o=Tn,Mt=n.stateNode.containerInfo,Tn=!0,ur(t,e,n),Mt=r,Tn=o;break;case 0:case 11:case 14:case 15:if(!Ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&wu(n,e,s),o=o.next}while(o!==r)}ur(t,e,n);break;case 1:if(!Ft&&($o(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ct(n,e,a)}ur(t,e,n);break;case 21:ur(t,e,n);break;case 22:n.mode&1?(Ft=(r=Ft)||n.memoizedState!==null,ur(t,e,n),Ft=r):ur(t,e,n);break;default:ur(t,e,n)}}function Xf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xv),e.forEach(function(r){var o=bv.bind(null,t,r);n.has(r)||(n.add(r),r.then(o,o))})}}function xn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Mt=a.stateNode,Tn=!1;break e;case 3:Mt=a.stateNode.containerInfo,Tn=!0;break e;case 4:Mt=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(Mt===null)throw Error(Z(160));w0(i,s,o),Mt=null,Tn=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){ct(o,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x0(e,t),e=e.sibling}function x0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xn(e,t),Dn(t),r&4){try{Ki(3,t,t.return),fl(3,t)}catch(w){ct(t,t.return,w)}try{Ki(5,t,t.return)}catch(w){ct(t,t.return,w)}}break;case 1:xn(e,t),Dn(t),r&512&&n!==null&&$o(n,n.return);break;case 5:if(xn(e,t),Dn(t),r&512&&n!==null&&$o(n,n.return),t.flags&32){var o=t.stateNode;try{es(o,"")}catch(w){ct(t,t.return,w)}}if(r&4&&(o=t.stateNode,o!=null)){var i=t.memoizedProps,s=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Vp(o,i),jc(a,s);var c=jc(a,i);for(s=0;s<l.length;s+=2){var d=l[s],h=l[s+1];d==="style"?Yp(o,h):d==="dangerouslySetInnerHTML"?Xp(o,h):d==="children"?es(o,h):Vu(o,d,h,c)}switch(a){case"input":Hc(o,i);break;case"textarea":Gp(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Qo(o,!!i.multiple,m,!1):f!==!!i.multiple&&(i.defaultValue!=null?Qo(o,!!i.multiple,i.defaultValue,!0):Qo(o,!!i.multiple,i.multiple?[]:"",!1))}o[cs]=i}catch(w){ct(t,t.return,w)}}break;case 6:if(xn(e,t),Dn(t),r&4){if(t.stateNode===null)throw Error(Z(162));o=t.stateNode,i=t.memoizedProps;try{o.nodeValue=i}catch(w){ct(t,t.return,w)}}break;case 3:if(xn(e,t),Dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{os(e.containerInfo)}catch(w){ct(t,t.return,w)}break;case 4:xn(e,t),Dn(t);break;case 13:xn(e,t),Dn(t),o=t.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(yd=dt())),r&4&&Xf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(c=Ft)||d,xn(e,t),Ft=c):xn(e,t),Dn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(fe=t,d=t.child;d!==null;){for(h=fe=d;fe!==null;){switch(f=fe,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ki(4,f,f.return);break;case 1:$o(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){ct(r,n,w)}}break;case 5:$o(f,f.return);break;case 22:if(f.memoizedState!==null){Yf(h);continue}}m!==null?(m.return=f,fe=m):Yf(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jp("display",s))}catch(w){ct(t,t.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){ct(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:xn(e,t),Dn(t),r&4&&Xf(t);break;case 21:break;default:xn(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(v0(n)){var r=n;break e}n=n.return}throw Error(Z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(es(o,""),r.flags&=-33);var i=Wf(t);Su(t,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Wf(t);yu(t,a,s);break;default:throw Error(Z(161))}}catch(l){ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sv(t,e,n){fe=t,y0(t)}function y0(t,e,n){for(var r=(t.mode&1)!==0;fe!==null;){var o=fe,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Vs;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||Ft;a=Vs;var c=Ft;if(Vs=s,(Ft=l)&&!c)for(fe=o;fe!==null;)s=fe,l=s.child,s.tag===22&&s.memoizedState!==null?qf(o):l!==null?(l.return=s,fe=l):qf(o);for(;i!==null;)fe=i,y0(i),i=i.sibling;fe=o,Vs=a,Ft=c}jf(t)}else o.subtreeFlags&8772&&i!==null?(i.return=o,fe=i):jf(t)}}function jf(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||fl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ft)if(n===null)r.componentDidMount();else{var o=e.elementType===e.type?n.memoizedProps:En(e.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&bf(e,i,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bf(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&os(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Ft||e.flags&512&&xu(e)}catch(f){ct(e,e.return,f)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Yf(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function qf(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fl(4,e)}catch(l){ct(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var o=e.return;try{r.componentDidMount()}catch(l){ct(e,o,l)}}var i=e.return;try{xu(e)}catch(l){ct(e,i,l)}break;case 5:var s=e.return;try{xu(e)}catch(l){ct(e,s,l)}}}catch(l){ct(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var Mv=Math.ceil,ja=lr.ReactCurrentDispatcher,wd=lr.ReactCurrentOwner,_n=lr.ReactCurrentBatchConfig,Be=0,St=null,pt=null,Rt=0,nn=0,Ko=Hr(0),_t=0,ms=null,mo=0,hl=0,xd=0,Zi=null,jt=null,yd=0,hi=1/0,Kn=null,Ya=!1,Mu=null,br=null,Gs=!1,Mr=null,qa=0,Qi=0,Eu=null,Ma=-1,Ea=0;function Ht(){return Be&6?dt():Ma!==-1?Ma:Ma=dt()}function Lr(t){return t.mode&1?Be&2&&Rt!==0?Rt&-Rt:sv.transition!==null?(Ea===0&&(Ea=im()),Ea):(t=je,t!==0||(t=window.event,t=t===void 0?16:fm(t.type)),t):1}function Pn(t,e,n,r){if(50<Qi)throw Qi=0,Eu=null,Error(Z(185));vs(t,n,r),(!(Be&2)||t!==St)&&(t===St&&(!(Be&2)&&(hl|=n),_t===4&&xr(t,Rt)),Zt(t,r),n===1&&Be===0&&!(e.mode&1)&&(hi=dt()+500,cl&&Vr()))}function Zt(t,e){var n=t.callbackNode;s_(t,e);var r=La(t,t===St?Rt:0);if(r===0)n!==null&&nf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&nf(n),e===1)t.tag===0?iv($f.bind(null,t)):Lm($f.bind(null,t)),tv(function(){!(Be&6)&&Vr()}),n=null;else{switch(sm(r)){case 1:n=Yu;break;case 4:n=rm;break;case 16:n=ba;break;case 536870912:n=om;break;default:n=ba}n=P0(n,S0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S0(t,e){if(Ma=-1,Ea=0,Be&6)throw Error(Z(327));var n=t.callbackNode;if(ri()&&t.callbackNode!==n)return null;var r=La(t,t===St?Rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$a(t,r);else{e=r;var o=Be;Be|=2;var i=E0();(St!==t||Rt!==e)&&(Kn=null,hi=dt()+500,lo(t,e));do try{Av();break}catch(a){M0(t,a)}while(!0);sd(),ja.current=i,Be=o,pt!==null?e=0:(St=null,Rt=0,e=_t)}if(e!==0){if(e===2&&(o=Zc(t),o!==0&&(r=o,e=Tu(t,o))),e===1)throw n=ms,lo(t,0),xr(t,r),Zt(t,dt()),n;if(e===6)xr(t,r);else{if(o=t.current.alternate,!(r&30)&&!Ev(o)&&(e=$a(t,r),e===2&&(i=Zc(t),i!==0&&(r=i,e=Tu(t,i))),e===1))throw n=ms,lo(t,0),xr(t,r),Zt(t,dt()),n;switch(t.finishedWork=o,t.finishedLanes=r,e){case 0:case 1:throw Error(Z(345));case 2:Qr(t,jt,Kn);break;case 3:if(xr(t,r),(r&130023424)===r&&(e=yd+500-dt(),10<e)){if(La(t,0)!==0)break;if(o=t.suspendedLanes,(o&r)!==r){Ht(),t.pingedLanes|=t.suspendedLanes&o;break}t.timeoutHandle=iu(Qr.bind(null,t,jt,Kn),e);break}Qr(t,jt,Kn);break;case 4:if(xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,o=-1;0<r;){var s=31-Cn(r);i=1<<s,s=e[s],s>o&&(o=s),r&=~i}if(r=o,r=dt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mv(r/1960))-r,10<r){t.timeoutHandle=iu(Qr.bind(null,t,jt,Kn),r);break}Qr(t,jt,Kn);break;case 5:Qr(t,jt,Kn);break;default:throw Error(Z(329))}}}return Zt(t,dt()),t.callbackNode===n?S0.bind(null,t):null}function Tu(t,e){var n=Zi;return t.current.memoizedState.isDehydrated&&(lo(t,e).flags|=256),t=$a(t,e),t!==2&&(e=jt,jt=n,e!==null&&Au(e)),t}function Au(t){jt===null?jt=t:jt.push.apply(jt,t)}function Ev(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!bn(i(),o))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~xd,e&=~hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function $f(t){if(Be&6)throw Error(Z(327));ri();var e=La(t,0);if(!(e&1))return Zt(t,dt()),null;var n=$a(t,e);if(t.tag!==0&&n===2){var r=Zc(t);r!==0&&(e=r,n=Tu(t,r))}if(n===1)throw n=ms,lo(t,0),xr(t,e),Zt(t,dt()),n;if(n===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,jt,Kn),Zt(t,dt()),null}function Sd(t,e){var n=Be;Be|=1;try{return t(e)}finally{Be=n,Be===0&&(hi=dt()+500,cl&&Vr())}}function go(t){Mr!==null&&Mr.tag===0&&!(Be&6)&&ri();var e=Be;Be|=1;var n=_n.transition,r=je;try{if(_n.transition=null,je=1,t)return t()}finally{je=r,_n.transition=n,Be=e,!(Be&6)&&Vr()}}function Md(){nn=Ko.current,tt(Ko)}function lo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ev(n)),pt!==null)for(n=pt.return;n!==null;){var r=n;switch(rd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fa();break;case 3:di(),tt($t),tt(Ot),fd();break;case 5:dd(r);break;case 4:di();break;case 13:tt(ot);break;case 19:tt(ot);break;case 10:ad(r.type._context);break;case 22:case 23:Md()}n=n.return}if(St=t,pt=t=Dr(t.current,null),Rt=nn=e,_t=0,ms=null,xd=hl=mo=0,jt=Zi=null,oo!==null){for(e=0;e<oo.length;e++)if(n=oo[e],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}oo=null}return t}function M0(t,e){do{var n=pt;try{if(sd(),xa.current=Xa,Wa){for(var r=it.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Wa=!1}if(po=0,yt=gt=it=null,$i=!1,fs=0,wd.current=null,n===null||n.return===null){_t=1,ms=e,pt=null;break}e:{var i=t,s=n.return,a=n,l=e;if(e=Rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ff(s);if(m!==null){m.flags&=-257,Of(m,s,a,i,e),m.mode&1&&If(i,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){If(i,c,e),Ed();break e}l=Error(Z(426))}}else if(rt&&a.mode&1){var p=Ff(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Of(p,s,a,i,e),od(fi(l,a));break e}}i=l=fi(l,a),_t!==4&&(_t=2),Zi===null?Zi=[i]:Zi.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var u=s0(i,l,e);Pf(i,u);break e;case 1:a=l;var _=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(br===null||!br.has(g)))){i.flags|=65536,e&=-e,i.lanes|=e;var S=a0(i,a,e);Pf(i,S);break e}}i=i.return}while(i!==null)}A0(n)}catch(C){e=C,pt===n&&n!==null&&(pt=n=n.return);continue}break}while(!0)}function E0(){var t=ja.current;return ja.current=Xa,t===null?Xa:t}function Ed(){(_t===0||_t===3||_t===2)&&(_t=4),St===null||!(mo&268435455)&&!(hl&268435455)||xr(St,Rt)}function $a(t,e){var n=Be;Be|=2;var r=E0();(St!==t||Rt!==e)&&(Kn=null,lo(t,e));do try{Tv();break}catch(o){M0(t,o)}while(!0);if(sd(),Be=n,ja.current=r,pt!==null)throw Error(Z(261));return St=null,Rt=0,_t}function Tv(){for(;pt!==null;)T0(pt)}function Av(){for(;pt!==null&&!Zg();)T0(pt)}function T0(t){var e=C0(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?A0(t):pt=e,wd.current=null}function A0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wv(n,e),n!==null){n.flags&=32767,pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,pt=null;return}}else if(n=vv(n,e,nn),n!==null){pt=n;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);_t===0&&(_t=5)}function Qr(t,e,n){var r=je,o=_n.transition;try{_n.transition=null,je=1,Rv(t,e,n,r)}finally{_n.transition=o,je=r}return null}function Rv(t,e,n,r){do ri();while(Mr!==null);if(Be&6)throw Error(Z(327));n=t.finishedWork;var o=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(a_(t,i),t===St&&(pt=St=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gs||(Gs=!0,P0(ba,function(){return ri(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=_n.transition,_n.transition=null;var s=je;je=1;var a=Be;Be|=4,wd.current=null,yv(t,n),x0(n,t),Y_(ru),Da=!!nu,ru=nu=null,t.current=n,Sv(n),Qg(),Be=a,je=s,_n.transition=i}else t.current=n;if(Gs&&(Gs=!1,Mr=t,qa=o),i=t.pendingLanes,i===0&&(br=null),t_(n.stateNode),Zt(t,dt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)o=e[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ya)throw Ya=!1,t=Mu,Mu=null,t;return qa&1&&t.tag!==0&&ri(),i=t.pendingLanes,i&1?t===Eu?Qi++:(Qi=0,Eu=t):Qi=0,Vr(),null}function ri(){if(Mr!==null){var t=sm(qa),e=_n.transition,n=je;try{if(_n.transition=null,je=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,qa=0,Be&6)throw Error(Z(331));var o=Be;for(Be|=4,fe=t.current;fe!==null;){var i=fe,s=i.child;if(fe.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(fe=c;fe!==null;){var d=fe;switch(d.tag){case 0:case 11:case 15:Ki(8,d,i)}var h=d.child;if(h!==null)h.return=d,fe=h;else for(;fe!==null;){d=fe;var f=d.sibling,m=d.return;if(_0(d),d===c){fe=null;break}if(f!==null){f.return=m,fe=f;break}fe=m}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var p=w.sibling;w.sibling=null,w=p}while(w!==null)}}fe=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,fe=s;else e:for(;fe!==null;){if(i=fe,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ki(9,i,i.return)}var u=i.sibling;if(u!==null){u.return=i.return,fe=u;break e}fe=i.return}}var _=t.current;for(fe=_;fe!==null;){s=fe;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,fe=g;else e:for(s=_;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fl(9,a)}}catch(C){ct(a,a.return,C)}if(a===s){fe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,fe=S;break e}fe=a.return}}if(Be=o,Vr(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(ol,t)}catch{}r=!0}return r}finally{je=n,_n.transition=e}}return!1}function Kf(t,e,n){e=fi(n,e),e=s0(t,e,1),t=Pr(t,e,1),e=Ht(),t!==null&&(vs(t,1,e),Zt(t,e))}function ct(t,e,n){if(t.tag===3)Kf(t,t,n);else for(;e!==null;){if(e.tag===3){Kf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(br===null||!br.has(r))){t=fi(n,t),t=a0(e,t,1),e=Pr(e,t,1),t=Ht(),e!==null&&(vs(e,1,t),Zt(e,t));break}}e=e.return}}function Cv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,St===t&&(Rt&n)===n&&(_t===4||_t===3&&(Rt&130023424)===Rt&&500>dt()-yd?lo(t,0):xd|=n),Zt(t,e)}function R0(t,e){e===0&&(t.mode&1?(e=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):e=1);var n=Ht();t=ir(t,e),t!==null&&(vs(t,e,n),Zt(t,n))}function Pv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),R0(t,n)}function bv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,o=t.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(Z(314))}r!==null&&r.delete(e),R0(t,n)}var C0;C0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,_v(t,e,n);qt=!!(t.flags&131072)}else qt=!1,rt&&e.flags&1048576&&Dm(e,za,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Sa(t,e),t=e.pendingProps;var o=li(e,Ot.current);ni(e,n),o=pd(null,e,r,t,o,n);var i=md();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(i=!0,Oa(e)):i=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,cd(e),o.updater=dl,e.stateNode=o,o._reactInternals=e,fu(e,r,t,n),e=mu(null,e,r,!0,i,n)):(e.tag=0,rt&&i&&nd(e),Bt(null,e,o,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Sa(t,e),t=e.pendingProps,o=r._init,r=o(r._payload),e.type=r,o=e.tag=Dv(r),t=En(r,t),o){case 0:e=pu(null,e,r,t,n);break e;case 1:e=Bf(null,e,r,t,n);break e;case 11:e=kf(null,e,r,t,n);break e;case 14:e=zf(null,e,r,En(r.type,t),n);break e}throw Error(Z(306,r,""))}return e;case 0:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:En(r,o),pu(t,e,r,o,n);case 1:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:En(r,o),Bf(t,e,r,o,n);case 3:e:{if(d0(e),t===null)throw Error(Z(387));r=e.pendingProps,i=e.memoizedState,o=i.element,km(t,e),Va(e,r,null,n);var s=e.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){o=fi(Error(Z(423)),e),e=Hf(t,e,r,n,o);break e}else if(r!==o){o=fi(Error(Z(424)),e),e=Hf(t,e,r,n,o);break e}else for(rn=Cr(e.stateNode.containerInfo.firstChild),on=e,rt=!0,An=null,n=Fm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ci(),r===o){e=sr(t,e,n);break e}Bt(t,e,r,n)}e=e.child}return e;case 5:return zm(e),t===null&&cu(e),r=e.type,o=e.pendingProps,i=t!==null?t.memoizedProps:null,s=o.children,ou(r,o)?s=null:i!==null&&ou(r,i)&&(e.flags|=32),u0(t,e),Bt(t,e,s,n),e.child;case 6:return t===null&&cu(e),null;case 13:return f0(t,e,n);case 4:return ud(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ui(e,null,r,n):Bt(t,e,r,n),e.child;case 11:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:En(r,o),kf(t,e,r,o,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,o=e.pendingProps,i=e.memoizedProps,s=o.value,Ke(Ba,r._currentValue),r._currentValue=s,i!==null)if(bn(i.value,s)){if(i.children===o.children&&!$t.current){e=sr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=nr(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),uu(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===e.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(Z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),uu(s,n,e),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Bt(t,e,o.children,n),e=e.child}return e;case 9:return o=e.type,r=e.pendingProps.children,ni(e,n),o=vn(o),r=r(o),e.flags|=1,Bt(t,e,r,n),e.child;case 14:return r=e.type,o=En(r,e.pendingProps),o=En(r.type,o),zf(t,e,r,o,n);case 15:return l0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:En(r,o),Sa(t,e),e.tag=1,Kt(r)?(t=!0,Oa(e)):t=!1,ni(e,n),i0(e,r,o),fu(e,r,o,n),mu(null,e,r,!0,t,n);case 19:return h0(t,e,n);case 22:return c0(t,e,n)}throw Error(Z(156,e.tag))};function P0(t,e){return nm(t,e)}function Lv(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new Lv(t,e,n,r)}function Td(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dv(t){if(typeof t=="function")return Td(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wu)return 11;if(t===Xu)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ta(t,e,n,r,o,i){var s=2;if(r=t,typeof t=="function")Td(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Bo:return co(n.children,o,i,e);case Gu:s=8,o|=8;break;case Fc:return t=mn(12,n,e,o|2),t.elementType=Fc,t.lanes=i,t;case Oc:return t=mn(13,n,e,o),t.elementType=Oc,t.lanes=i,t;case kc:return t=mn(19,n,e,o),t.elementType=kc,t.lanes=i,t;case zp:return pl(n,o,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Op:s=10;break e;case kp:s=9;break e;case Wu:s=11;break e;case Xu:s=14;break e;case _r:s=16,r=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=mn(s,n,e,o),e.elementType=t,e.type=r,e.lanes=i,e}function co(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function pl(t,e,n,r){return t=mn(22,t,r,e),t.elementType=zp,t.lanes=n,t.stateNode={isHidden:!1},t}function Ql(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function Jl(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Uv(t,e,n,r,o){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ad(t,e,n,r,o,i,s,a,l){return t=new Uv(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=mn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cd(i),t}function Nv(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function b0(t){if(!t)return Fr;t=t._reactInternals;e:{if(wo(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var n=t.type;if(Kt(n))return bm(t,n,e)}return e}function L0(t,e,n,r,o,i,s,a,l){return t=Ad(n,r,!0,t,o,i,s,a,l),t.context=b0(null),n=t.current,r=Ht(),o=Lr(n),i=nr(r,o),i.callback=e??null,Pr(n,i,o),t.current.lanes=o,vs(t,o,r),Zt(t,r),t}function ml(t,e,n,r){var o=e.current,i=Ht(),s=Lr(o);return n=b0(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(i,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pr(o,e,s),t!==null&&(Pn(t,o,s,i),wa(t,o,s)),s}function Ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rd(t,e){Zf(t,e),(t=t.alternate)&&Zf(t,e)}function Iv(){return null}var D0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cd(t){this._internalRoot=t}gl.prototype.render=Cd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));ml(t,e,null,null)};gl.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;go(function(){ml(null,t,null,null)}),e[or]=null}};function gl(t){this._internalRoot=t}gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=cm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&dm(t)}};function Pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qf(){}function Fv(t,e,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ka(s);i.call(c)}}var s=L0(e,r,t,0,null,!1,!1,"",Qf);return t._reactRootContainer=s,t[or]=s.current,as(t.nodeType===8?t.parentNode:t),go(),s}for(;o=t.lastChild;)t.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Ka(l);a.call(c)}}var l=Ad(t,0,!1,null,null,!1,!1,"",Qf);return t._reactRootContainer=l,t[or]=l.current,as(t.nodeType===8?t.parentNode:t),go(function(){ml(e,l,n,r)}),l}function vl(t,e,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=Ka(s);a.call(l)}}ml(e,s,t,o)}else s=Fv(n,e,t,o,r);return Ka(s)}am=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Hi(e.pendingLanes);n!==0&&(qu(e,n|1),Zt(e,dt()),!(Be&6)&&(hi=dt()+500,Vr()))}break;case 13:go(function(){var r=ir(t,1);if(r!==null){var o=Ht();Pn(r,t,1,o)}}),Rd(t,1)}};$u=function(t){if(t.tag===13){var e=ir(t,134217728);if(e!==null){var n=Ht();Pn(e,t,134217728,n)}Rd(t,134217728)}};lm=function(t){if(t.tag===13){var e=Lr(t),n=ir(t,e);if(n!==null){var r=Ht();Pn(n,t,e,r)}Rd(t,e)}};cm=function(){return je};um=function(t,e){var n=je;try{return je=t,e()}finally{je=n}};qc=function(t,e,n){switch(e){case"input":if(Hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var o=ll(r);if(!o)throw Error(Z(90));Hp(r),Hc(r,o)}}}break;case"textarea":Gp(t,n);break;case"select":e=n.value,e!=null&&Qo(t,!!n.multiple,e,!1)}};Kp=Sd;Zp=go;var Ov={usingClientEntryPoint:!1,Events:[xs,Wo,ll,qp,$p,Sd]},Ui={findFiberByHostInstance:ro,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kv={bundleType:Ui.bundleType,version:Ui.version,rendererPackageName:Ui.rendererPackageName,rendererConfig:Ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=em(t),t===null?null:t.stateNode},findFiberByHostInstance:Ui.findFiberByHostInstance||Iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ws.isDisabled&&Ws.supportsFiber)try{ol=Ws.inject(kv),Bn=Ws}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ov;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pd(e))throw Error(Z(200));return Nv(t,e,null,n)};ln.createRoot=function(t,e){if(!Pd(t))throw Error(Z(299));var n=!1,r="",o=D0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=Ad(t,1,!1,null,null,n,!1,r,o),t[or]=e.current,as(t.nodeType===8?t.parentNode:t),new Cd(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=em(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return go(t)};ln.hydrate=function(t,e,n){if(!_l(e))throw Error(Z(200));return vl(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!Pd(t))throw Error(Z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=D0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=L0(e,null,t,1,n??null,o,!1,i,s),t[or]=e.current,as(t),r)for(t=0;t<r.length;t++)n=r[t],o=n._getVersion,o=o(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,o]:e.mutableSourceEagerHydrationData.push(n,o);return new gl(e)};ln.render=function(t,e,n){if(!_l(e))throw Error(Z(200));return vl(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!_l(t))throw Error(Z(40));return t._reactRootContainer?(go(function(){vl(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1};ln.unstable_batchedUpdates=Sd;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_l(n))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return vl(t,e,n,!1,r)};ln.version="18.3.1-next-f1338f8080-20240426";function U0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U0)}catch(t){console.error(t)}}U0(),Up.exports=ln;var zv=Up.exports,N0,Jf=zv;N0=Jf.createRoot,Jf.hydrateRoot;function Bv(t){const e=[];return t.forEach((n,r)=>{n.forEach(o=>{e.push(Tt.jsx("p",{className:"word-left color-"+r,children:o},"rm-p"+o+"-"+r))})}),e}function Hv(t){const e=[];return t.forEach(n=>{const r=[...n.word],o=[...n.colors],i=[];r.forEach((s,a)=>{i.push(Tt.jsx("span",{className:"color-"+o[a],children:s},"r-span-"+n+"-"+s+"-"+a))}),e.push(Tt.jsx("p",{className:"word-right",children:i},"rr-p-"+r.toString()))}),e}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bd="164",Vv=0,eh=1,Gv=2,I0=1,Wv=2,$n=3,Or=0,Qt=1,Qn=2,Ur=0,oi=1,th=2,nh=3,rh=4,Xv=5,to=100,jv=101,Yv=102,qv=103,$v=104,Kv=200,Zv=201,Qv=202,Jv=203,Ru=204,Cu=205,ew=206,tw=207,nw=208,rw=209,ow=210,iw=211,sw=212,aw=213,lw=214,cw=0,uw=1,dw=2,Za=3,fw=4,hw=5,pw=6,mw=7,F0=0,gw=1,_w=2,Nr=0,vw=1,ww=2,xw=3,yw=4,Sw=5,Mw=6,Ew=7,O0=300,pi=301,mi=302,Pu=303,bu=304,wl=306,Lu=1e3,so=1001,Du=1002,gn=1003,Tw=1004,Xs=1005,Rn=1006,ec=1007,ao=1008,kr=1009,Aw=1010,Rw=1011,k0=1012,z0=1013,gi=1014,Er=1015,xl=1016,B0=1017,H0=1018,Ss=1020,Cw=35902,Pw=1021,bw=1022,kn=1023,Lw=1024,Dw=1025,ii=1026,gs=1027,Uw=1028,V0=1029,Nw=1030,G0=1031,W0=1033,tc=33776,nc=33777,rc=33778,oc=33779,oh=35840,ih=35841,sh=35842,ah=35843,lh=36196,ch=37492,uh=37496,dh=37808,fh=37809,hh=37810,ph=37811,mh=37812,gh=37813,_h=37814,vh=37815,wh=37816,xh=37817,yh=37818,Sh=37819,Mh=37820,Eh=37821,ic=36492,Th=36494,Ah=36495,Iw=36283,Rh=36284,Ch=36285,Ph=36286,Fw=3200,Ow=3201,kw=0,zw=1,yr="",Nn="srgb",Gr="srgb-linear",Ld="display-p3",yl="display-p3-linear",Qa="linear",et="srgb",Ja="rec709",el="p3",So=7680,bh=519,Bw=512,Hw=513,Vw=514,X0=515,Gw=516,Ww=517,Xw=518,jw=519,Lh=35044,Dh="300 es",tr=2e3,tl=2001;class yi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let i=0,s=o.length;i<s;i++)o[i].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sc=Math.PI/180,Uu=180/Math.PI;function Ms(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function Yw(t,e){return(t%e+e)%e}function ac(t,e,n){return(1-n)*t+n*e}function Ni(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*o+e.x,this.y=i*o+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Re{constructor(e,n,r,o,i,s,a,l,c){Re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,i,s,a,l,c)}set(e,n,r,o,i,s,a,l,c){const d=this.elements;return d[0]=e,d[1]=o,d[2]=a,d[3]=n,d[4]=i,d[5]=l,d[6]=r,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,i=this.elements,s=r[0],a=r[3],l=r[6],c=r[1],d=r[4],h=r[7],f=r[2],m=r[5],v=r[8],w=o[0],p=o[3],u=o[6],_=o[1],g=o[4],S=o[7],C=o[2],A=o[5],T=o[8];return i[0]=s*w+a*_+l*C,i[3]=s*p+a*g+l*A,i[6]=s*u+a*S+l*T,i[1]=c*w+d*_+h*C,i[4]=c*p+d*g+h*A,i[7]=c*u+d*S+h*T,i[2]=f*w+m*_+v*C,i[5]=f*p+m*g+v*A,i[8]=f*u+m*S+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*a*c-r*i*d+r*a*l+o*i*c-o*s*l}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*s-a*c,f=a*l-d*i,m=c*i-s*l,v=n*h+r*f+o*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/v;return e[0]=h*w,e[1]=(o*c-d*r)*w,e[2]=(a*r-o*s)*w,e[3]=f*w,e[4]=(d*n-o*l)*w,e[5]=(o*i-a*n)*w,e[6]=m*w,e[7]=(r*l-c*n)*w,e[8]=(s*n-r*i)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,i,s,a){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*s+c*a)+s+e,-o*c,o*l,-o*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(lc.makeScale(e,n)),this}rotate(e){return this.premultiply(lc.makeRotation(-e)),this}translate(e,n){return this.premultiply(lc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lc=new Re;function j0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qw(){const t=nl("canvas");return t.style.display="block",t}const Uh={};function $w(t){t in Uh||(Uh[t]=!0,console.warn(t))}const Nh=new Re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ih=new Re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[Gr]:{transfer:Qa,primaries:Ja,toReference:t=>t,fromReference:t=>t},[Nn]:{transfer:et,primaries:Ja,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[yl]:{transfer:Qa,primaries:el,toReference:t=>t.applyMatrix3(Ih),fromReference:t=>t.applyMatrix3(Nh)},[Ld]:{transfer:et,primaries:el,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ih),fromReference:t=>t.applyMatrix3(Nh).convertLinearToSRGB()}},Kw=new Set([Gr,yl]),Ye={enabled:!0,_workingColorSpace:Gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Kw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=js[e].toReference,o=js[n].fromReference;return o(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return js[t].primaries},getTransfer:function(t){return t===yr?Qa:js[t].transfer}};function si(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Mo;class Zw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mo===void 0&&(Mo=nl("canvas")),Mo.width=e.width,Mo.height=e.height;const r=Mo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Mo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),i=o.data;for(let s=0;s<i.length;s++)i[s]=si(i[s]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(si(n[r]/255)*255):n[r]=si(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qw=0;class Y0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qw++}),this.uuid=Ms(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let i;if(Array.isArray(o)){i=[];for(let s=0,a=o.length;s<a;s++)o[s].isDataTexture?i.push(uc(o[s].image)):i.push(uc(o[s]))}else i=uc(o);r.url=i}return n||(e.images[this.uuid]=r),r}}function uc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Zw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jw=0;class Vt extends yi{constructor(e=Vt.DEFAULT_IMAGE,n=Vt.DEFAULT_MAPPING,r=so,o=so,i=Rn,s=ao,a=kn,l=kr,c=Vt.DEFAULT_ANISOTROPY,d=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jw++}),this.uuid=Ms(),this.name="",this.source=new Y0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lu:e.x=e.x-Math.floor(e.x);break;case so:e.x=e.x<0?0:1;break;case Du:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lu:e.y=e.y-Math.floor(e.y);break;case so:e.y=e.y<0?0:1;break;case Du:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=O0;Vt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,r=0,o=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,i=this.w,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*o+s[12]*i,this.y=s[1]*n+s[5]*r+s[9]*o+s[13]*i,this.z=s[2]*n+s[6]*r+s[10]*o+s[14]*i,this.w=s[3]*n+s[7]*r+s[11]*o+s[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,i;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],v=l[9],w=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-w)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+w)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(m+1)/2,C=(u+1)/2,A=(d+f)/4,T=(h+w)/4,b=(v+p)/4;return g>S&&g>C?g<.01?(r=0,o=.707106781,i=.707106781):(r=Math.sqrt(g),o=A/r,i=T/r):S>C?S<.01?(r=.707106781,o=0,i=.707106781):(o=Math.sqrt(S),r=A/o,i=b/o):C<.01?(r=.707106781,o=.707106781,i=0):(i=Math.sqrt(C),r=T/i,o=b/i),this.set(r,o,i,n),this}let _=Math.sqrt((p-v)*(p-v)+(h-w)*(h-w)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(h-w)/_,this.z=(f-d)/_,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e1 extends yi{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const i=new Vt(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let a=0;a<s;a++)this.textures[a]=i.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,i=this.textures.length;o<i;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Y0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _o extends e1{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class q0 extends Vt{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=so,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class t1 extends Vt{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=so,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Es{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,i,s,a){let l=r[o+0],c=r[o+1],d=r[o+2],h=r[o+3];const f=i[s+0],m=i[s+1],v=i[s+2],w=i[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=v,e[n+3]=w;return}if(h!==w||l!==f||c!==m||d!==v){let p=1-a;const u=l*f+c*m+d*v+h*w,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const C=Math.sqrt(g),A=Math.atan2(C,u*_);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const S=a*_;if(l=l*p+f*S,c=c*p+m*S,d=d*p+v*S,h=h*p+w*S,p===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,r,o,i,s){const a=r[o],l=r[o+1],c=r[o+2],d=r[o+3],h=i[s],f=i[s+1],m=i[s+2],v=i[s+3];return e[n]=a*v+d*h+l*m-c*f,e[n+1]=l*v+d*f+c*h-a*m,e[n+2]=c*v+d*m+a*f-l*h,e[n+3]=d*v-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,i=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(r/2),d=a(o/2),h=a(i/2),f=l(r/2),m=l(o/2),v=l(i/2);switch(s){case"XYZ":this._x=f*d*h+c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h-f*m*v;break;case"YXZ":this._x=f*d*h+c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h+f*m*v;break;case"ZXY":this._x=f*d*h-c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h-f*m*v;break;case"ZYX":this._x=f*d*h-c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h+f*m*v;break;case"YZX":this._x=f*d*h+c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h-f*m*v;break;case"XZY":this._x=f*d*h-c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],i=n[8],s=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=r+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(i-c)*m,this._z=(s-o)*m}else if(r>a&&r>h){const m=2*Math.sqrt(1+r-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(o+s)/m,this._z=(i+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-r-h);this._w=(i-c)/m,this._x=(o+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-r-a);this._w=(s-o)/m,this._x=(i+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,i=e._z,s=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=r*d+s*a+o*c-i*l,this._y=o*d+s*l+i*a-r*c,this._z=i*d+s*c+r*l-o*a,this._w=s*d-r*a-o*l-i*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,i=this._z,s=this._w;let a=s*e._w+r*e._x+o*e._y+i*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=o,this._z=i,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*r+n*this._x,this._y=m*o+n*this._y,this._z=m*i+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=s*h+this._w*f,this._x=r*h+this._x*f,this._y=o*h+this._y*f,this._z=i*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),i*Math.sin(n),i*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,r=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6]*o,this.y=i[1]*n+i[4]*r+i[7]*o,this.z=i[2]*n+i[5]*r+i[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,i=e.elements,s=1/(i[3]*n+i[7]*r+i[11]*o+i[15]);return this.x=(i[0]*n+i[4]*r+i[8]*o+i[12])*s,this.y=(i[1]*n+i[5]*r+i[9]*o+i[13])*s,this.z=(i[2]*n+i[6]*r+i[10]*o+i[14])*s,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,i=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*o-a*r),d=2*(a*n-i*o),h=2*(i*r-s*n);return this.x=n+l*c+s*h-a*d,this.y=r+l*d+a*c-i*h,this.z=o+l*h+i*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,i=e.elements;return this.x=i[0]*n+i[4]*r+i[8]*o,this.y=i[1]*n+i[5]*r+i[9]*o,this.z=i[2]*n+i[6]*r+i[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,i=e.z,s=n.x,a=n.y,l=n.z;return this.x=o*l-i*a,this.y=i*s-r*l,this.z=r*a-o*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dc=new k,Fh=new Es;class Ts{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(n===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=i.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,yn):yn.fromBufferAttribute(i,s),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ys.copy(r.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const o=e.children;for(let i=0,s=o.length;i<s;i++)this.expandByObject(o[i],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),qs.subVectors(this.max,Ii),Eo.subVectors(e.a,Ii),To.subVectors(e.b,Ii),Ao.subVectors(e.c,Ii),dr.subVectors(To,Eo),fr.subVectors(Ao,To),Xr.subVectors(Eo,Ao);let n=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-Xr.z,Xr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,Xr.z,0,-Xr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-Xr.y,Xr.x,0];return!fc(n,Eo,To,Ao,qs)||(n=[1,0,0,0,1,0,0,0,1],!fc(n,Eo,To,Ao,qs))?!1:($s.crossVectors(dr,fr),n=[$s.x,$s.y,$s.z],fc(n,Eo,To,Ao,qs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new k,new k,new k,new k,new k,new k,new k,new k],yn=new k,Ys=new Ts,Eo=new k,To=new k,Ao=new k,dr=new k,fr=new k,Xr=new k,Ii=new k,qs=new k,$s=new k,jr=new k;function fc(t,e,n,r,o){for(let i=0,s=t.length-3;i<=s;i+=3){jr.fromArray(t,i);const a=o.x*Math.abs(jr.x)+o.y*Math.abs(jr.y)+o.z*Math.abs(jr.z),l=e.dot(jr),c=n.dot(jr),d=r.dot(jr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const n1=new Ts,Fi=new k,hc=new k;class Dd{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):n1.setFromPoints(e).getCenter(r);let o=0;for(let i=0,s=e.length;i<s;i++)o=Math.max(o,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const n=Fi.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Fi,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(hc)),this.expandByPoint(Fi.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new k,pc=new k,Ks=new k,hr=new k,mc=new k,Zs=new k,gc=new k;class $0{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,n),Xn.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){pc.copy(e).add(n).multiplyScalar(.5),Ks.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(pc);const i=e.distanceTo(n)*.5,s=-this.direction.dot(Ks),a=hr.dot(this.direction),l=-hr.dot(Ks),c=hr.lengthSq(),d=Math.abs(1-s*s);let h,f,m,v;if(d>0)if(h=s*l-a,f=s*a-l,v=i*d,h>=0)if(f>=-v)if(f<=v){const w=1/d;h*=w,f*=w,m=h*(h+s*f+2*a)+f*(s*h+f+2*l)+c}else f=i,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*l)+c;else f=-i,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-s*i+a)),f=h>0?-i:Math.min(Math.max(-i,-l),i),m=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-i,-l),i),m=f*(f+2*l)+c):(h=Math.max(0,-(s*i+a)),f=h>0?i:Math.min(Math.max(-i,-l),i),m=-h*h+f*(f+2*l)+c);else f=s>0?-i:i,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,h),o&&o.copy(pc).addScaledVector(Ks,f),m}intersectSphere(e,n){Xn.subVectors(e.center,this.origin);const r=Xn.dot(this.direction),o=Xn.dot(Xn)-r*r,i=e.radius*e.radius;if(o>i)return null;const s=Math.sqrt(i-o),a=r-s,l=r+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,i,s,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,o=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,o=(e.min.x-f.x)*c),d>=0?(i=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(i=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),r>s||i>o||((i>r||isNaN(r))&&(r=i),(s<o||isNaN(o))&&(o=s),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),r>l||a>o)||((a>r||r!==r)&&(r=a),(l<o||o!==o)&&(o=l),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,n,r,o,i){mc.subVectors(n,e),Zs.subVectors(r,e),gc.crossVectors(mc,Zs);let s=this.direction.dot(gc),a;if(s>0){if(o)return null;a=1}else if(s<0)a=-1,s=-s;else return null;hr.subVectors(this.origin,e);const l=a*this.direction.dot(Zs.crossVectors(hr,Zs));if(l<0)return null;const c=a*this.direction.dot(mc.cross(hr));if(c<0||l+c>s)return null;const d=-a*hr.dot(gc);return d<0?null:this.at(d/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,r,o,i,s,a,l,c,d,h,f,m,v,w,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,i,s,a,l,c,d,h,f,m,v,w,p)}set(e,n,r,o,i,s,a,l,c,d,h,f,m,v,w,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=r,u[12]=o,u[1]=i,u[5]=s,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=v,u[11]=w,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Ro.setFromMatrixColumn(e,0).length(),i=1/Ro.setFromMatrixColumn(e,1).length(),s=1/Ro.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=0,n[8]=r[8]*s,n[9]=r[9]*s,n[10]=r[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,i=e.z,s=Math.cos(r),a=Math.sin(r),l=Math.cos(o),c=Math.sin(o),d=Math.cos(i),h=Math.sin(i);if(e.order==="XYZ"){const f=s*d,m=s*h,v=a*d,w=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+v*c,n[5]=f-w*c,n[9]=-a*l,n[2]=w-f*c,n[6]=v+m*c,n[10]=s*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,v=c*d,w=c*h;n[0]=f+w*a,n[4]=v*a-m,n[8]=s*c,n[1]=s*h,n[5]=s*d,n[9]=-a,n[2]=m*a-v,n[6]=w+f*a,n[10]=s*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,v=c*d,w=c*h;n[0]=f-w*a,n[4]=-s*h,n[8]=v+m*a,n[1]=m+v*a,n[5]=s*d,n[9]=w-f*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const f=s*d,m=s*h,v=a*d,w=a*h;n[0]=l*d,n[4]=v*c-m,n[8]=f*c+w,n[1]=l*h,n[5]=w*c+f,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=a*l,w=a*c;n[0]=l*d,n[4]=w-f*h,n[8]=v*h+m,n[1]=h,n[5]=s*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*h+v,n[10]=f-w*h}else if(e.order==="XZY"){const f=s*l,m=s*c,v=a*l,w=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+w,n[5]=s*d,n[9]=m*h-v,n[2]=v*h-m,n[6]=a*d,n[10]=w*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r1,e,o1)}lookAt(e,n,r){const o=this.elements;return en.subVectors(e,n),en.lengthSq()===0&&(en.z=1),en.normalize(),pr.crossVectors(r,en),pr.lengthSq()===0&&(Math.abs(r.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),pr.crossVectors(r,en)),pr.normalize(),Qs.crossVectors(en,pr),o[0]=pr.x,o[4]=Qs.x,o[8]=en.x,o[1]=pr.y,o[5]=Qs.y,o[9]=en.y,o[2]=pr.z,o[6]=Qs.z,o[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,i=this.elements,s=r[0],a=r[4],l=r[8],c=r[12],d=r[1],h=r[5],f=r[9],m=r[13],v=r[2],w=r[6],p=r[10],u=r[14],_=r[3],g=r[7],S=r[11],C=r[15],A=o[0],T=o[4],b=o[8],E=o[12],x=o[1],I=o[5],W=o[9],D=o[13],Y=o[2],j=o[6],ee=o[10],J=o[14],P=o[3],V=o[7],G=o[11],oe=o[15];return i[0]=s*A+a*x+l*Y+c*P,i[4]=s*T+a*I+l*j+c*V,i[8]=s*b+a*W+l*ee+c*G,i[12]=s*E+a*D+l*J+c*oe,i[1]=d*A+h*x+f*Y+m*P,i[5]=d*T+h*I+f*j+m*V,i[9]=d*b+h*W+f*ee+m*G,i[13]=d*E+h*D+f*J+m*oe,i[2]=v*A+w*x+p*Y+u*P,i[6]=v*T+w*I+p*j+u*V,i[10]=v*b+w*W+p*ee+u*G,i[14]=v*E+w*D+p*J+u*oe,i[3]=_*A+g*x+S*Y+C*P,i[7]=_*T+g*I+S*j+C*V,i[11]=_*b+g*W+S*ee+C*G,i[15]=_*E+g*D+S*J+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],i=e[12],s=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],v=e[3],w=e[7],p=e[11],u=e[15];return v*(+i*l*h-o*c*h-i*a*f+r*c*f+o*a*m-r*l*m)+w*(+n*l*m-n*c*f+i*s*f-o*s*m+o*c*d-i*l*d)+p*(+n*c*h-n*a*m-i*s*h+r*s*m+i*a*d-r*c*d)+u*(-o*a*d-n*l*h+n*a*f+o*s*h-r*s*f+r*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],v=e[12],w=e[13],p=e[14],u=e[15],_=h*p*c-w*f*c+w*l*m-a*p*m-h*l*u+a*f*u,g=v*f*c-d*p*c-v*l*m+s*p*m+d*l*u-s*f*u,S=d*w*c-v*h*c+v*a*m-s*w*m-d*a*u+s*h*u,C=v*h*l-d*w*l-v*a*f+s*w*f+d*a*p-s*h*p,A=n*_+r*g+o*S+i*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(w*f*i-h*p*i-w*o*m+r*p*m+h*o*u-r*f*u)*T,e[2]=(a*p*i-w*l*i+w*o*c-r*p*c-a*o*u+r*l*u)*T,e[3]=(h*l*i-a*f*i-h*o*c+r*f*c+a*o*m-r*l*m)*T,e[4]=g*T,e[5]=(d*p*i-v*f*i+v*o*m-n*p*m-d*o*u+n*f*u)*T,e[6]=(v*l*i-s*p*i-v*o*c+n*p*c+s*o*u-n*l*u)*T,e[7]=(s*f*i-d*l*i+d*o*c-n*f*c-s*o*m+n*l*m)*T,e[8]=S*T,e[9]=(v*h*i-d*w*i-v*r*m+n*w*m+d*r*u-n*h*u)*T,e[10]=(s*w*i-v*a*i+v*r*c-n*w*c-s*r*u+n*a*u)*T,e[11]=(d*a*i-s*h*i-d*r*c+n*h*c+s*r*m-n*a*m)*T,e[12]=C*T,e[13]=(d*w*o-v*h*o+v*r*f-n*w*f-d*r*p+n*h*p)*T,e[14]=(v*a*o-s*w*o-v*r*l+n*w*l+s*r*p-n*a*p)*T,e[15]=(s*h*o-d*a*o+d*r*l-n*h*l-s*r*f+n*a*f)*T,this}scale(e){const n=this.elements,r=e.x,o=e.y,i=e.z;return n[0]*=r,n[4]*=o,n[8]*=i,n[1]*=r,n[5]*=o,n[9]*=i,n[2]*=r,n[6]*=o,n[10]*=i,n[3]*=r,n[7]*=o,n[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),i=1-r,s=e.x,a=e.y,l=e.z,c=i*s,d=i*a;return this.set(c*s+r,c*a-o*l,c*l+o*a,0,c*a+o*l,d*a+r,d*l-o*s,0,c*l-o*a,d*l+o*s,i*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,i,s){return this.set(1,r,i,0,e,1,s,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,i=n._x,s=n._y,a=n._z,l=n._w,c=i+i,d=s+s,h=a+a,f=i*c,m=i*d,v=i*h,w=s*d,p=s*h,u=a*h,_=l*c,g=l*d,S=l*h,C=r.x,A=r.y,T=r.z;return o[0]=(1-(w+u))*C,o[1]=(m+S)*C,o[2]=(v-g)*C,o[3]=0,o[4]=(m-S)*A,o[5]=(1-(f+u))*A,o[6]=(p+_)*A,o[7]=0,o[8]=(v+g)*T,o[9]=(p-_)*T,o[10]=(1-(f+w))*T,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let i=Ro.set(o[0],o[1],o[2]).length();const s=Ro.set(o[4],o[5],o[6]).length(),a=Ro.set(o[8],o[9],o[10]).length();this.determinant()<0&&(i=-i),e.x=o[12],e.y=o[13],e.z=o[14],Sn.copy(this);const c=1/i,d=1/s,h=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=d,Sn.elements[5]*=d,Sn.elements[6]*=d,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,n.setFromRotationMatrix(Sn),r.x=i,r.y=s,r.z=a,this}makePerspective(e,n,r,o,i,s,a=tr){const l=this.elements,c=2*i/(n-e),d=2*i/(r-o),h=(n+e)/(n-e),f=(r+o)/(r-o);let m,v;if(a===tr)m=-(s+i)/(s-i),v=-2*s*i/(s-i);else if(a===tl)m=-s/(s-i),v=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,o,i,s,a=tr){const l=this.elements,c=1/(n-e),d=1/(r-o),h=1/(s-i),f=(n+e)*c,m=(r+o)*d;let v,w;if(a===tr)v=(s+i)*h,w=-2*h;else if(a===tl)v=i*h,w=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=w,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ro=new k,Sn=new mt,r1=new k(0,0,0),o1=new k(1,1,1),pr=new k,Qs=new k,en=new k,Oh=new mt,kh=new Es;class ar{constructor(e=0,n=0,r=0,o=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,i=o[0],s=o[4],a=o[8],l=o[1],c=o[5],d=o[9],h=o[2],f=o[6],m=o[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,i)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oh,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return kh.setFromEuler(this),this.setFromQuaternion(kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class Ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i1=0;const zh=new k,Co=new Es,jn=new mt,Js=new k,Oi=new k,s1=new k,a1=new Es,Bh=new k(1,0,0),Hh=new k(0,1,0),Vh=new k(0,0,1),Gh={type:"added"},l1={type:"removed"},Po={type:"childadded",child:null},_c={type:"childremoved",child:null};class sn extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new k,n=new ar,r=new Es,o=new k(1,1,1);function i(){r.setFromEuler(n,!1)}function s(){n.setFromQuaternion(r,void 0,!1)}n._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new mt},normalMatrix:{value:new Re}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Co.setFromAxisAngle(e,n),this.quaternion.multiply(Co),this}rotateOnWorldAxis(e,n){return Co.setFromAxisAngle(e,n),this.quaternion.premultiply(Co),this}rotateX(e){return this.rotateOnAxis(Bh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(Vh,e)}translateOnAxis(e,n){return zh.copy(e).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(Vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Js.copy(e):Js.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Oi,Js,this.up):jn.lookAt(Js,Oi,this.up),this.quaternion.setFromRotationMatrix(jn),o&&(jn.extractRotation(o.matrixWorld),Co.setFromRotationMatrix(jn),this.quaternion.premultiply(Co.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gh),Po.child=e,this.dispatchEvent(Po),Po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(l1),_c.child=e,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gh),Po.child=e,this.dispatchEvent(Po),Po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let i=0,s=o.length;i<s;i++)o[i].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,s1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,a1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++){const i=n[r];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let i=0,s=o.length;i<s;i++){const a=o[i];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function i(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=i(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];i(e.shapes,h)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(i(e.materials,this.material[l]));o.material=a}else o.material=i(e.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];o.animations.push(i(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),h=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),m.length>0&&(r.animations=m),v.length>0&&(r.nodes=v)}return r.object=o,r;function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}sn.DEFAULT_UP=new k(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new k,Yn=new k,vc=new k,qn=new k,bo=new k,Lo=new k,Wh=new k,wc=new k,xc=new k,yc=new k;class On{constructor(e=new k,n=new k,r=new k){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Mn.subVectors(e,n),o.cross(Mn);const i=o.lengthSq();return i>0?o.multiplyScalar(1/Math.sqrt(i)):o.set(0,0,0)}static getBarycoord(e,n,r,o,i){Mn.subVectors(o,n),Yn.subVectors(r,n),vc.subVectors(e,n);const s=Mn.dot(Mn),a=Mn.dot(Yn),l=Mn.dot(vc),c=Yn.dot(Yn),d=Yn.dot(vc),h=s*c-a*a;if(h===0)return i.set(0,0,0),null;const f=1/h,m=(c*l-a*d)*f,v=(s*d-a*l)*f;return i.set(1-m-v,v,m)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,n,r,o,i,s,a,l){return this.getBarycoord(e,n,r,o,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,qn.x),l.addScaledVector(s,qn.y),l.addScaledVector(a,qn.z),l)}static isFrontFacing(e,n,r,o){return Mn.subVectors(r,n),Yn.subVectors(e,n),Mn.cross(Yn).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Mn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,i){return On.getInterpolation(e,this.a,this.b,this.c,n,r,o,i)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,i=this.c;let s,a;bo.subVectors(o,r),Lo.subVectors(i,r),wc.subVectors(e,r);const l=bo.dot(wc),c=Lo.dot(wc);if(l<=0&&c<=0)return n.copy(r);xc.subVectors(e,o);const d=bo.dot(xc),h=Lo.dot(xc);if(d>=0&&h<=d)return n.copy(o);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(r).addScaledVector(bo,s);yc.subVectors(e,i);const m=bo.dot(yc),v=Lo.dot(yc);if(v>=0&&m<=v)return n.copy(i);const w=m*c-l*v;if(w<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(r).addScaledVector(Lo,a);const p=d*v-m*h;if(p<=0&&h-d>=0&&m-v>=0)return Wh.subVectors(i,o),a=(h-d)/(h-d+(m-v)),n.copy(o).addScaledVector(Wh,a);const u=1/(p+w+f);return s=w*u,a=f*u,n.copy(r).addScaledVector(bo,s).addScaledVector(Lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Sc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ye.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Ye.workingColorSpace){if(e=Yw(e,1),n=Yt(n,0,1),r=Yt(r,0,1),n===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+n):r+n-r*n,s=2*r-i;this.r=Sc(s,i,e+1/3),this.g=Sc(s,i,e),this.b=Sc(s,i,e-1/3)}return Ye.toWorkingColorSpace(this,o),this}setStyle(e,n=Nn){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=o[1],a=o[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,n);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,n);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=o[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(i,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const r=K0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=cc(e.r),this.g=cc(e.g),this.b=cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Ye.fromWorkingColorSpace(It.copy(this),e),Math.round(Yt(It.r*255,0,255))*65536+Math.round(Yt(It.g*255,0,255))*256+Math.round(Yt(It.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.fromWorkingColorSpace(It.copy(this),n);const r=It.r,o=It.g,i=It.b,s=Math.max(r,o,i),a=Math.min(r,o,i);let l,c;const d=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=d<=.5?h/(s+a):h/(2-s-a),s){case r:l=(o-i)/h+(o<i?6:0);break;case o:l=(i-r)/h+2;break;case i:l=(r-o)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(It.copy(this),n),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Nn){Ye.fromWorkingColorSpace(It.copy(this),e);const n=It.r,r=It.g,o=It.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(ea);const r=ac(mr.h,ea.h,n),o=ac(mr.s,ea.s,n),i=ac(mr.l,ea.l,n);return this.setHSL(r,o,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,i=e.elements;return this.r=i[0]*n+i[3]*r+i[6]*o,this.g=i[1]*n+i[4]*r+i[7]*o,this.b=i[2]*n+i[5]*r+i[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new qe;qe.NAMES=K0;let c1=0;class Sl extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=oi,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ru,this.blendDst=Cu,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(r.blending=this.blending),this.side!==Or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ru&&(r.blendSrc=this.blendSrc),this.blendDst!==Cu&&(r.blendDst=this.blendDst),this.blendEquation!==to&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Za&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==So&&(r.stencilFail=this.stencilFail),this.stencilZFail!==So&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==So&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(i){const s=[];for(const a in i){const l=i[a];delete l.metadata,s.push(l)}return s}if(n){const i=o(e.textures),s=o(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let i=0;i!==o;++i)r[i]=n[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nd extends Sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=F0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new k,ta=new He;class Vn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Lh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $w("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,i=this.itemSize;o<i;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ta.fromBufferAttribute(this,n),ta.applyMatrix3(e),this.setXY(n,ta.x,ta.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix3(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix4(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)ht.fromBufferAttribute(this,n),ht.applyNormalMatrix(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)ht.fromBufferAttribute(this,n),ht.transformDirection(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ni(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Xt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ni(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ni(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ni(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ni(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),r=Xt(r,this.array),o=Xt(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),r=Xt(r,this.array),o=Xt(o,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lh&&(e.usage=this.usage),e}}class Z0 extends Vn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Q0 extends Vn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class uo extends Vn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let u1=0;const dn=new mt,Mc=new sn,Do=new k,tn=new Ts,ki=new Ts,xt=new k;class xo extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j0(e)?Q0:Z0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new Re().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,n,r){return dn.makeTranslation(e,n,r),this.applyMatrix4(dn),this}scale(e,n,r){return dn.makeScale(e,n,r),this.applyMatrix4(dn),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(e){const n=[];for(let r=0,o=e.length;r<o;r++){const i=e[r];n.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new uo(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const i=n[r];tn.setFromBufferAttribute(i),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const r=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const a=n[i];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(tn.min,ki.min),tn.expandByPoint(xt),xt.addVectors(tn.max,ki.max),tn.expandByPoint(xt)):(tn.expandByPoint(ki.min),tn.expandByPoint(ki.max))}tn.getCenter(r);let o=0;for(let i=0,s=e.count;i<s;i++)xt.fromBufferAttribute(e,i),o=Math.max(o,r.distanceToSquared(xt));if(n)for(let i=0,s=n.length;i<s;i++){const a=n[i],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)xt.fromBufferAttribute(a,c),l&&(Do.fromBufferAttribute(e,c),xt.add(Do)),o=Math.max(o,r.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,i=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<r.count;b++)a[b]=new k,l[b]=new k;const c=new k,d=new k,h=new k,f=new He,m=new He,v=new He,w=new k,p=new k;function u(b,E,x){c.fromBufferAttribute(r,b),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,x),f.fromBufferAttribute(i,b),m.fromBufferAttribute(i,E),v.fromBufferAttribute(i,x),d.sub(c),h.sub(c),m.sub(f),v.sub(f);const I=1/(m.x*v.y-v.x*m.y);isFinite(I)&&(w.copy(d).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(I),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(I),a[b].add(w),a[E].add(w),a[x].add(w),l[b].add(p),l[E].add(p),l[x].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,E=_.length;b<E;++b){const x=_[b],I=x.start,W=x.count;for(let D=I,Y=I+W;D<Y;D+=3)u(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const g=new k,S=new k,C=new k,A=new k;function T(b){C.fromBufferAttribute(o,b),A.copy(C);const E=a[b];g.copy(E),g.sub(C.multiplyScalar(C.dot(E))).normalize(),S.crossVectors(A,E);const I=S.dot(l[b])<0?-1:1;s.setXYZW(b,g.x,g.y,g.z,I)}for(let b=0,E=_.length;b<E;++b){const x=_[b],I=x.start,W=x.count;for(let D=I,Y=I+W;D<Y;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let f=0,m=r.count;f<m;f++)r.setXYZ(f,0,0,0);const o=new k,i=new k,s=new k,a=new k,l=new k,c=new k,d=new k,h=new k;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),w=e.getX(f+1),p=e.getX(f+2);o.fromBufferAttribute(n,v),i.fromBufferAttribute(n,w),s.fromBufferAttribute(n,p),d.subVectors(s,i),h.subVectors(o,i),d.cross(h),a.fromBufferAttribute(r,v),l.fromBufferAttribute(r,w),c.fromBufferAttribute(r,p),a.add(d),l.add(d),c.add(d),r.setXYZ(v,a.x,a.y,a.z),r.setXYZ(w,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)o.fromBufferAttribute(n,f+0),i.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),d.subVectors(s,i),h.subVectors(o,i),d.cross(h),r.setXYZ(f+0,d.x,d.y,d.z),r.setXYZ(f+1,d.x,d.y,d.z),r.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)xt.fromBufferAttribute(e,n),xt.normalize(),e.setXYZ(n,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let m=0,v=0;for(let w=0,p=l.length;w<p;w++){a.isInterleavedBufferAttribute?m=l[w]*a.data.stride+a.offset:m=l[w]*d;for(let u=0;u<d;u++)f[v++]=c[m++]}return new Vn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xo,r=this.index.array,o=this.attributes;for(const a in o){const l=o[a],c=e(l,r);n.setAttribute(a,c)}const i=this.morphAttributes;for(const a in i){const l=[],c=i[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,r);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const o={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(o[l]=d,i=!0)}i&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const c in o){const d=o[c];this.setAttribute(c,d.clone(n))}const i=e.morphAttributes;for(const c in i){const d=[],h=i[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xh=new mt,Yr=new $0,na=new Dd,jh=new k,Uo=new k,No=new k,Io=new k,Ec=new k,ra=new k,oa=new He,ia=new He,sa=new He,Yh=new k,qh=new k,$h=new k,aa=new k,la=new k;class zn extends sn{constructor(e=new xo,n=new Nd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=o.length;i<s;i++){const a=o[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const a=this.morphTargetInfluences;if(i&&a){ra.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const d=a[l],h=i[l];d!==0&&(Ec.fromBufferAttribute(h,e),s?ra.addScaledVector(Ec,d):ra.addScaledVector(Ec.sub(n),d))}n.add(ra)}return n}raycast(e,n){const r=this.geometry,o=this.material,i=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),na.copy(r.boundingSphere),na.applyMatrix4(i),Yr.copy(e.ray).recast(e.near),!(na.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(na,jh)===null||Yr.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(Xh.copy(i).invert(),Yr.copy(e.ray).applyMatrix4(Xh),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,r){let o;const i=this.geometry,s=this.material,a=i.index,l=i.attributes.position,c=i.attributes.uv,d=i.attributes.uv1,h=i.attributes.normal,f=i.groups,m=i.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,w=f.length;v<w;v++){const p=f[v],u=s[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,C=g;S<C;S+=3){const A=a.getX(S),T=a.getX(S+1),b=a.getX(S+2);o=ca(this,u,e,r,c,d,h,A,T,b),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=p.materialIndex,n.push(o))}}else{const v=Math.max(0,m.start),w=Math.min(a.count,m.start+m.count);for(let p=v,u=w;p<u;p+=3){const _=a.getX(p),g=a.getX(p+1),S=a.getX(p+2);o=ca(this,s,e,r,c,d,h,_,g,S),o&&(o.faceIndex=Math.floor(p/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,w=f.length;v<w;v++){const p=f[v],u=s[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,C=g;S<C;S+=3){const A=S,T=S+1,b=S+2;o=ca(this,u,e,r,c,d,h,A,T,b),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=p.materialIndex,n.push(o))}}else{const v=Math.max(0,m.start),w=Math.min(l.count,m.start+m.count);for(let p=v,u=w;p<u;p+=3){const _=p,g=p+1,S=p+2;o=ca(this,s,e,r,c,d,h,_,g,S),o&&(o.faceIndex=Math.floor(p/3),n.push(o))}}}}function d1(t,e,n,r,o,i,s,a){let l;if(e.side===Qt?l=r.intersectTriangle(s,i,o,!0,a):l=r.intersectTriangle(o,i,s,e.side===Or,a),l===null)return null;la.copy(a),la.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(la);return c<n.near||c>n.far?null:{distance:c,point:la.clone(),object:t}}function ca(t,e,n,r,o,i,s,a,l,c){t.getVertexPosition(a,Uo),t.getVertexPosition(l,No),t.getVertexPosition(c,Io);const d=d1(t,e,n,r,Uo,No,Io,aa);if(d){o&&(oa.fromBufferAttribute(o,a),ia.fromBufferAttribute(o,l),sa.fromBufferAttribute(o,c),d.uv=On.getInterpolation(aa,Uo,No,Io,oa,ia,sa,new He)),i&&(oa.fromBufferAttribute(i,a),ia.fromBufferAttribute(i,l),sa.fromBufferAttribute(i,c),d.uv1=On.getInterpolation(aa,Uo,No,Io,oa,ia,sa,new He)),s&&(Yh.fromBufferAttribute(s,a),qh.fromBufferAttribute(s,l),$h.fromBufferAttribute(s,c),d.normal=On.getInterpolation(aa,Uo,No,Io,Yh,qh,$h,new k),d.normal.dot(r.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};On.getNormal(Uo,No,Io,h.normal),d.face=h}return d}class Si extends xo{constructor(e=1,n=1,r=1,o=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:i,depthSegments:s};const a=this;o=Math.floor(o),i=Math.floor(i),s=Math.floor(s);const l=[],c=[],d=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,r,n,e,s,i,0),v("z","y","x",1,-1,r,n,-e,s,i,1),v("x","z","y",1,1,e,r,n,o,s,2),v("x","z","y",1,-1,e,r,-n,o,s,3),v("x","y","z",1,-1,e,n,r,o,i,4),v("x","y","z",-1,-1,e,n,-r,o,i,5),this.setIndex(l),this.setAttribute("position",new uo(c,3)),this.setAttribute("normal",new uo(d,3)),this.setAttribute("uv",new uo(h,2));function v(w,p,u,_,g,S,C,A,T,b,E){const x=S/T,I=C/b,W=S/2,D=C/2,Y=A/2,j=T+1,ee=b+1;let J=0,P=0;const V=new k;for(let G=0;G<ee;G++){const oe=G*I-D;for(let ge=0;ge<j;ge++){const Ge=ge*x-W;V[w]=Ge*_,V[p]=oe*g,V[u]=Y,c.push(V.x,V.y,V.z),V[w]=0,V[p]=0,V[u]=A>0?1:-1,d.push(V.x,V.y,V.z),h.push(ge/T),h.push(1-G/b),J+=1}}for(let G=0;G<b;G++)for(let oe=0;oe<T;oe++){const ge=f+oe+j*G,Ge=f+oe+j*(G+1),H=f+(oe+1)+j*(G+1),te=f+(oe+1)+j*G;l.push(ge,Ge,te),l.push(Ge,H,te),P+=6}a.addGroup(m,P,E),m+=P,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const o=t[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const r=_i(t[n]);for(const o in r)e[o]=r[o]}return e}function f1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function J0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const h1={clone:_i,merge:zt};var p1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends Sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p1,this.fragmentShader=m1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=f1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const s=this.uniforms[o].value;s&&s.isTexture?n.uniforms[o]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[o]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[o]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[o]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[o]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[o]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[o]={type:"m4",value:s.toArray()}:n.uniforms[o]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class eg extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=tr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new k,Kh=new He,Zh=new He;class pn extends eg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Uu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uu*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,Kh,Zh),n.subVectors(Zh,Kh)}setViewOffset(e,n,r,o,i,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sc*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,i=-.5*o;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;i+=s.offsetX*o/l,n-=s.offsetY*r/c,o*=s.width/l,r*=s.height/c}const a=this.filmOffset;a!==0&&(i+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fo=-90,Oo=1;class g1 extends sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new pn(Fo,Oo,e,n);o.layers=this.layers,this.add(o);const i=new pn(Fo,Oo,e,n);i.layers=this.layers,this.add(i);const s=new pn(Fo,Oo,e,n);s.layers=this.layers,this.add(s);const a=new pn(Fo,Oo,e,n);a.layers=this.layers,this.add(a);const l=new pn(Fo,Oo,e,n);l.layers=this.layers,this.add(l);const c=new pn(Fo,Oo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,i,s,a,l]=n;for(const c of n)this.remove(c);if(e===tr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,i),e.setRenderTarget(r,1,o),e.render(n,s),e.setRenderTarget(r,2,o),e.render(n,a),e.setRenderTarget(r,3,o),e.render(n,l),e.setRenderTarget(r,4,o),e.render(n,c),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=v,r.texture.needsPMREMUpdate=!0}}class tg extends Vt{constructor(e,n,r,o,i,s,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:pi,super(e,n,r,o,i,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _1 extends _o{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new tg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Si(5,5,5),i=new zr({name:"CubemapFromEquirect",uniforms:_i(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qt,blending:Ur});i.uniforms.tEquirect.value=n;const s=new zn(o,i),a=n.minFilter;return n.minFilter===ao&&(n.minFilter=Rn),new g1(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,r,o){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,r,o);e.setRenderTarget(i)}}const Tc=new k,v1=new k,w1=new Re;class Jr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Tc.subVectors(r,n).cross(v1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Tc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/o;return i<0||i>1?null:n.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||w1.getNormalMatrix(e),o=this.coplanarPoint(Tc).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Dd,ua=new k;class ng{constructor(e=new Jr,n=new Jr,r=new Jr,o=new Jr,i=new Jr,s=new Jr){this.planes=[e,n,r,o,i,s]}set(e,n,r,o,i,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(r),a[3].copy(o),a[4].copy(i),a[5].copy(s),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=tr){const r=this.planes,o=e.elements,i=o[0],s=o[1],a=o[2],l=o[3],c=o[4],d=o[5],h=o[6],f=o[7],m=o[8],v=o[9],w=o[10],p=o[11],u=o[12],_=o[13],g=o[14],S=o[15];if(r[0].setComponents(l-i,f-c,p-m,S-u).normalize(),r[1].setComponents(l+i,f+c,p+m,S+u).normalize(),r[2].setComponents(l+s,f+d,p+v,S+_).normalize(),r[3].setComponents(l-s,f-d,p-v,S-_).normalize(),r[4].setComponents(l-a,f-h,p-w,S-g).normalize(),n===tr)r[5].setComponents(l+a,f+h,p+w,S+g).normalize();else if(n===tl)r[5].setComponents(a,h,w,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let i=0;i<6;i++)if(n[i].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(ua.x=o.normal.x>0?e.max.x:e.min.x,ua.y=o.normal.y>0?e.max.y:e.min.y,ua.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rg(){let t=null,e=!1,n=null,r=null;function o(i,s){n(i,s),r=t.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(o),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){n=i},setContext:function(i){t=i}}}function x1(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function r(a,l,c){const d=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&f.length===0&&t.bufferSubData(c,0,d),f.length!==0){for(let m=0,v=f.length;m<v;m++){const w=f[m];t.bufferSubData(c,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function i(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:o,remove:i,update:s}}class Ml extends xo{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const i=e/2,s=n/2,a=Math.floor(r),l=Math.floor(o),c=a+1,d=l+1,h=e/a,f=n/l,m=[],v=[],w=[],p=[];for(let u=0;u<d;u++){const _=u*f-s;for(let g=0;g<c;g++){const S=g*h-i;v.push(S,-_,0),w.push(0,0,1),p.push(g/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const g=_+c*u,S=_+c*(u+1),C=_+1+c*(u+1),A=_+1+c*u;m.push(g,S,A),m.push(S,C,A)}this.setIndex(m),this.setAttribute("position",new uo(v,3)),this.setAttribute("normal",new uo(w,3)),this.setAttribute("uv",new uo(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.width,e.height,e.widthSegments,e.heightSegments)}}var y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S1=`#ifdef USE_ALPHAHASH
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
#endif`,M1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R1=`#ifdef USE_AOMAP
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
#endif`,C1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,b1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,L1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N1=`#ifdef USE_IRIDESCENCE
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
#endif`,I1=`#ifdef USE_BUMPMAP
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
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,W1=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,X1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j1=`vec3 transformedNormal = objectNormal;
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
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,J1=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
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
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fx=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vx=`PhysicalMaterial material;
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
#endif`,wx=`struct PhysicalMaterial {
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
}`,xx=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bx=`#if defined( USE_POINTS_UV )
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
#endif`,Lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gx=`#ifdef USE_NORMALMAP
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
#endif`,Wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$x=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ay=`#ifdef USE_SKINNING
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
#endif`,ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hy=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,py=`#ifdef USE_TRANSMISSION
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
#endif`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yy=`uniform sampler2D t2D;
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`#include <common>
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
}`,Ry=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cy=`#define DISTANCE
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
}`,Py=`#define DISTANCE
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`uniform float scale;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Fy=`#define LAMBERT
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
}`,Oy=`#define LAMBERT
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
}`,ky=`#define MATCAP
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
}`,zy=`#define MATCAP
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
}`,By=`#define NORMAL
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
}`,Hy=`#define NORMAL
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
}`,Vy=`#define PHONG
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
}`,Gy=`#define PHONG
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
}`,Wy=`#define STANDARD
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
}`,Xy=`#define STANDARD
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
}`,jy=`#define TOON
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
}`,Yy=`#define TOON
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
}`,qy=`uniform float size;
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
}`,$y=`uniform vec3 diffuse;
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
}`,Ky=`#include <common>
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
}`,Zy=`uniform vec3 color;
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
}`,Qy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Jy=`uniform vec3 diffuse;
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
}`,Ae={alphahash_fragment:y1,alphahash_pars_fragment:S1,alphamap_fragment:M1,alphamap_pars_fragment:E1,alphatest_fragment:T1,alphatest_pars_fragment:A1,aomap_fragment:R1,aomap_pars_fragment:C1,batching_pars_vertex:P1,batching_vertex:b1,begin_vertex:L1,beginnormal_vertex:D1,bsdfs:U1,iridescence_fragment:N1,bumpmap_pars_fragment:I1,clipping_planes_fragment:F1,clipping_planes_pars_fragment:O1,clipping_planes_pars_vertex:k1,clipping_planes_vertex:z1,color_fragment:B1,color_pars_fragment:H1,color_pars_vertex:V1,color_vertex:G1,common:W1,cube_uv_reflection_fragment:X1,defaultnormal_vertex:j1,displacementmap_pars_vertex:Y1,displacementmap_vertex:q1,emissivemap_fragment:$1,emissivemap_pars_fragment:K1,colorspace_fragment:Z1,colorspace_pars_fragment:Q1,envmap_fragment:J1,envmap_common_pars_fragment:ex,envmap_pars_fragment:tx,envmap_pars_vertex:nx,envmap_physical_pars_fragment:hx,envmap_vertex:rx,fog_vertex:ox,fog_pars_vertex:ix,fog_fragment:sx,fog_pars_fragment:ax,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:dx,lights_pars_begin:fx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:_x,lights_physical_fragment:vx,lights_physical_pars_fragment:wx,lights_fragment_begin:xx,lights_fragment_maps:yx,lights_fragment_end:Sx,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:Ax,map_fragment:Rx,map_pars_fragment:Cx,map_particle_fragment:Px,map_particle_pars_fragment:bx,metalnessmap_fragment:Lx,metalnessmap_pars_fragment:Dx,morphinstance_vertex:Ux,morphcolor_vertex:Nx,morphnormal_vertex:Ix,morphtarget_pars_vertex:Fx,morphtarget_vertex:Ox,normal_fragment_begin:kx,normal_fragment_maps:zx,normal_pars_fragment:Bx,normal_pars_vertex:Hx,normal_vertex:Vx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:Wx,clearcoat_normal_fragment_maps:Xx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:Yx,opaque_fragment:qx,packing:$x,premultiplied_alpha_fragment:Kx,project_vertex:Zx,dithering_fragment:Qx,dithering_pars_fragment:Jx,roughnessmap_fragment:ey,roughnessmap_pars_fragment:ty,shadowmap_pars_fragment:ny,shadowmap_pars_vertex:ry,shadowmap_vertex:oy,shadowmask_pars_fragment:iy,skinbase_vertex:sy,skinning_pars_vertex:ay,skinning_vertex:ly,skinnormal_vertex:cy,specularmap_fragment:uy,specularmap_pars_fragment:dy,tonemapping_fragment:fy,tonemapping_pars_fragment:hy,transmission_fragment:py,transmission_pars_fragment:my,uv_pars_fragment:gy,uv_pars_vertex:_y,uv_vertex:vy,worldpos_vertex:wy,background_vert:xy,background_frag:yy,backgroundCube_vert:Sy,backgroundCube_frag:My,cube_vert:Ey,cube_frag:Ty,depth_vert:Ay,depth_frag:Ry,distanceRGBA_vert:Cy,distanceRGBA_frag:Py,equirect_vert:by,equirect_frag:Ly,linedashed_vert:Dy,linedashed_frag:Uy,meshbasic_vert:Ny,meshbasic_frag:Iy,meshlambert_vert:Fy,meshlambert_frag:Oy,meshmatcap_vert:ky,meshmatcap_frag:zy,meshnormal_vert:By,meshnormal_frag:Hy,meshphong_vert:Vy,meshphong_frag:Gy,meshphysical_vert:Wy,meshphysical_frag:Xy,meshtoon_vert:jy,meshtoon_frag:Yy,points_vert:qy,points_frag:$y,shadow_vert:Ky,shadow_frag:Zy,sprite_vert:Qy,sprite_frag:Jy},ie={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},In={basic:{uniforms:zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:zt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:zt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:zt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:zt([ie.points,ie.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:zt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:zt([ie.common,ie.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:zt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:zt([ie.sprite,ie.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:zt([ie.common,ie.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:zt([ie.lights,ie.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};In.physical={uniforms:zt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const da={r:0,b:0,g:0},$r=new ar,eS=new mt;function tS(t,e,n,r,o,i,s){const a=new qe(0);let l=i===!0?0:1,c,d,h=null,f=0,m=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function w(_){let g=!1;const S=v(_);S===null?u(a,l):S&&S.isColor&&(u(S,1),g=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?r.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function p(_,g){const S=v(g);S&&(S.isCubeTexture||S.mapping===wl)?(d===void 0&&(d=new zn(new Si(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:_i(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(d)),$r.copy(g.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(eS.makeRotationFromEuler($r)),d.material.toneMapped=Ye.getTransfer(S.colorSpace)!==et,(h!==S||f!==S.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=S,f=S.version,m=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new zn(new Ml(2,2),new zr({name:"BackgroundMaterial",uniforms:_i(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==et,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,g){_.getRGB(da,J0(t)),r.buffers.color.setClear(da.r,da.g,da.b,g,s)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:w,addToRenderList:p}}function nS(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},o=f(null);let i=o,s=!1;function a(x,I,W,D,Y){let j=!1;const ee=h(D,W,I);i!==ee&&(i=ee,c(i.object)),j=m(x,D,W,Y),j&&v(x,D,W,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,S(x,I,W,D),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function d(x){return t.deleteVertexArray(x)}function h(x,I,W){const D=W.wireframe===!0;let Y=r[x.id];Y===void 0&&(Y={},r[x.id]=Y);let j=Y[I.id];j===void 0&&(j={},Y[I.id]=j);let ee=j[D];return ee===void 0&&(ee=f(l()),j[D]=ee),ee}function f(x){const I=[],W=[],D=[];for(let Y=0;Y<n;Y++)I[Y]=0,W[Y]=0,D[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:D,object:x,attributes:{},index:null}}function m(x,I,W,D){const Y=i.attributes,j=I.attributes;let ee=0;const J=W.getAttributes();for(const P in J)if(J[P].location>=0){const G=Y[P];let oe=j[P];if(oe===void 0&&(P==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),P==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),G===void 0||G.attribute!==oe||oe&&G.data!==oe.data)return!0;ee++}return i.attributesNum!==ee||i.index!==D}function v(x,I,W,D){const Y={},j=I.attributes;let ee=0;const J=W.getAttributes();for(const P in J)if(J[P].location>=0){let G=j[P];G===void 0&&(P==="instanceMatrix"&&x.instanceMatrix&&(G=x.instanceMatrix),P==="instanceColor"&&x.instanceColor&&(G=x.instanceColor));const oe={};oe.attribute=G,G&&G.data&&(oe.data=G.data),Y[P]=oe,ee++}i.attributes=Y,i.attributesNum=ee,i.index=D}function w(){const x=i.newAttributes;for(let I=0,W=x.length;I<W;I++)x[I]=0}function p(x){u(x,0)}function u(x,I){const W=i.newAttributes,D=i.enabledAttributes,Y=i.attributeDivisors;W[x]=1,D[x]===0&&(t.enableVertexAttribArray(x),D[x]=1),Y[x]!==I&&(t.vertexAttribDivisor(x,I),Y[x]=I)}function _(){const x=i.newAttributes,I=i.enabledAttributes;for(let W=0,D=I.length;W<D;W++)I[W]!==x[W]&&(t.disableVertexAttribArray(W),I[W]=0)}function g(x,I,W,D,Y,j,ee){ee===!0?t.vertexAttribIPointer(x,I,W,Y,j):t.vertexAttribPointer(x,I,W,D,Y,j)}function S(x,I,W,D){w();const Y=D.attributes,j=W.getAttributes(),ee=I.defaultAttributeValues;for(const J in j){const P=j[J];if(P.location>=0){let V=Y[J];if(V===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(V=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(V=x.instanceColor)),V!==void 0){const G=V.normalized,oe=V.itemSize,ge=e.get(V);if(ge===void 0)continue;const Ge=ge.buffer,H=ge.type,te=ge.bytesPerElement,ue=H===t.INT||H===t.UNSIGNED_INT||V.gpuType===z0;if(V.isInterleavedBufferAttribute){const ne=V.data,Ne=ne.stride,Ie=V.offset;if(ne.isInstancedInterleavedBuffer){for(let N=0;N<P.locationSize;N++)u(P.location+N,ne.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let N=0;N<P.locationSize;N++)p(P.location+N);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let N=0;N<P.locationSize;N++)g(P.location+N,oe/P.locationSize,H,G,Ne*te,(Ie+oe/P.locationSize*N)*te,ue)}else{if(V.isInstancedBufferAttribute){for(let ne=0;ne<P.locationSize;ne++)u(P.location+ne,V.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ne=0;ne<P.locationSize;ne++)p(P.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let ne=0;ne<P.locationSize;ne++)g(P.location+ne,oe/P.locationSize,H,G,oe*te,oe/P.locationSize*ne*te,ue)}}else if(ee!==void 0){const G=ee[J];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(P.location,G);break;case 3:t.vertexAttrib3fv(P.location,G);break;case 4:t.vertexAttrib4fv(P.location,G);break;default:t.vertexAttrib1fv(P.location,G)}}}}_()}function C(){b();for(const x in r){const I=r[x];for(const W in I){const D=I[W];for(const Y in D)d(D[Y].object),delete D[Y];delete I[W]}delete r[x]}}function A(x){if(r[x.id]===void 0)return;const I=r[x.id];for(const W in I){const D=I[W];for(const Y in D)d(D[Y].object),delete D[Y];delete I[W]}delete r[x.id]}function T(x){for(const I in r){const W=r[I];if(W[x.id]===void 0)continue;const D=W[x.id];for(const Y in D)d(D[Y].object),delete D[Y];delete W[x.id]}}function b(){E(),s=!0,i!==o&&(i=o,c(i.object))}function E(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:w,enableAttribute:p,disableUnusedAttributes:_}}function rS(t,e,n){let r;function o(c){r=c}function i(c,d){t.drawArrays(r,c,d),n.update(d,r,1)}function s(c,d,h){h!==0&&(t.drawArraysInstanced(r,c,d,h),n.update(d,r,h))}function a(c,d,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h;m++)this.render(c[m],d[m]);else{f.multiDrawArraysWEBGL(r,c,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=d[v];n.update(m,r,1)}}function l(c,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],d[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(r,c,0,d,0,f,0,h);let v=0;for(let w=0;w<h;w++)v+=d[w];for(let w=0;w<f.length;w++)n.update(v,r,f[w])}}this.setMode=o,this.render=i,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oS(t,e,n,r){let o;function i(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");o=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function s(A){return!(A!==kn&&r.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===xl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==kr&&r.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Er&&!T)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),w=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:w,maxAttributes:p,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:S,maxSamples:C}}function iS(t){const e=this;let n=null,r=0,o=!1,i=!1;const s=new Jr,a=new Re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||r!==0||o;return o=f,r=h.length,m},this.beginShadows=function(){i=!0,d(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,w=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!o||v===null||v.length===0||i&&!p)i?d(null):c();else{const _=i?0:r,g=_*4;let S=u.clippingState||null;l.value=S,S=d(v,f,g,m);for(let C=0;C!==g;++C)S[C]=n[C];u.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function d(h,f,m,v){const w=h!==null?h.length:0;let p=null;if(w!==0){if(p=l.value,v!==!0||p===null){const u=m+w*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,S=m;g!==w;++g,S+=4)s.copy(h[g]).applyMatrix4(_,a),s.normal.toArray(p,S),p[S+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,p}}function sS(t){let e=new WeakMap;function n(s,a){return a===Pu?s.mapping=pi:a===bu&&(s.mapping=mi),s}function r(s){if(s&&s.isTexture){const a=s.mapping;if(a===Pu||a===bu)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new _1(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",o),n(c.texture,s.mapping)}else return null}}return s}function o(s){const a=s.target;a.removeEventListener("dispose",o);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class aS extends eg{constructor(e=-1,n=1,r=1,o=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let i=r-e,s=r+e,a=o+n,l=o-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(i,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zo=4,Qh=[.125,.215,.35,.446,.526,.582],no=20,Ac=new aS,Jh=new qe;let Rc=null,Cc=0,Pc=0,bc=!1;const eo=(1+Math.sqrt(5))/2,ko=1/eo,ep=[new k(-eo,ko,0),new k(eo,ko,0),new k(-ko,0,eo),new k(ko,0,eo),new k(0,eo,-ko),new k(0,eo,ko),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class tp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,o,i),n>0&&this._blur(i,0,0,n),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rc,Cc,Pc),this._renderer.xr.enabled=bc,e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:xl,format:kn,colorSpace:Gr,depthBuffer:!1},o=np(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,n,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lS(i)),this._blurMaterial=cS(i,e,n)}return o}_compileMaterial(e){const n=new zn(this._lodPlanes[0],e);this._renderer.compile(n,Ac)}_sceneToCubeUV(e,n,r,o){const a=new pn(90,1,n,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Jh),d.toneMapping=Nr,d.autoClear=!1;const m=new Nd({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new zn(new Si,m);let w=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,w=!0):(m.color.copy(Jh),w=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;fa(o,_*g,u>2?g:0,g,g),d.setRenderTarget(o),w&&d.render(v,a),d.render(e,a)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===pi||e.mapping===mi;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rp());const i=o?this._cubemapMaterial:this._equirectMaterial,s=new zn(this._lodPlanes[0],i),a=i.uniforms;a.envMap.value=e;const l=this._cubeSize;fa(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(s,Ac)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let i=1;i<o;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ep[(o-i-1)%ep.length];this._blur(e,i-1,i,s,a)}n.autoClear=r}_blur(e,n,r,o,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,r,o,"latitudinal",i),this._halfBlur(s,e,r,r,o,"longitudinal",i)}_halfBlur(e,n,r,o,i,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new zn(this._lodPlanes[o],c),f=c.uniforms,m=this._sizeLods[r]-1,v=isFinite(i)?Math.PI/(2*m):2*Math.PI/(2*no-1),w=i/v,p=isFinite(i)?1+Math.floor(d*w):no;p>no&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${no}`);const u=[];let _=0;for(let T=0;T<no;++T){const b=T/w,E=Math.exp(-b*b/2);u.push(E),T===0?_+=E:T<p&&(_+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-r;const S=this._sizeLods[o],C=3*S*(o>g-Zo?o-g+Zo:0),A=4*(this._cubeSize-S);fa(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(h,Ac)}}function lS(t){const e=[],n=[],r=[];let o=t;const i=t-Zo+1+Qh.length;for(let s=0;s<i;s++){const a=Math.pow(2,o);n.push(a);let l=1/a;s>t-Zo?l=Qh[s-t+Zo-1]:s===0&&(l=0),r.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,v=6,w=3,p=2,u=1,_=new Float32Array(w*v*m),g=new Float32Array(p*v*m),S=new Float32Array(u*v*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,b=A>2?0:-1,E=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];_.set(E,w*v*A),g.set(f,p*v*A);const x=[A,A,A,A,A,A];S.set(x,u*v*A)}const C=new xo;C.setAttribute("position",new Vn(_,w)),C.setAttribute("uv",new Vn(g,p)),C.setAttribute("faceIndex",new Vn(S,u)),e.push(C),o>Zo&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function np(t,e,n){const r=new _o(t,e,n);return r.texture.mapping=wl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fa(t,e,n,r,o){t.viewport.set(e,n,r,o),t.scissor.set(e,n,r,o)}function cS(t,e,n){const r=new Float32Array(no),o=new k(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:no,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Id(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function rp(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function op(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Id(){return`

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
	`}function uS(t){let e=new WeakMap,n=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pu||l===bu,d=l===pi||l===mi;if(c||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new tp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&o(m)?(n===null&&(n=new tp(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",i),h.texture):null}}}return a}function o(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function i(a){const l=a.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:s}}function dS(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=t.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function fS(t,e,n,r){const o={},i=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const w=f.morphAttributes[v];for(let p=0,u=w.length;p<u;p++)e.remove(w[p])}f.removeEventListener("dispose",s),delete o[f.id];const m=i.get(f);m&&(e.remove(m),i.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return o[f.id]===!0||(f.addEventListener("dispose",s),o[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const w=m[v];for(let p=0,u=w.length;p<u;p++)e.update(w[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,v=h.attributes.position;let w=0;if(m!==null){const _=m.array;w=m.version;for(let g=0,S=_.length;g<S;g+=3){const C=_[g+0],A=_[g+1],T=_[g+2];f.push(C,A,A,T,T,C)}}else if(v!==void 0){const _=v.array;w=v.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const C=g+0,A=g+1,T=g+2;f.push(C,A,A,T,T,C)}}else return;const p=new(j0(f)?Q0:Z0)(f,1);p.version=w;const u=i.get(h);u&&e.remove(u),i.set(h,p)}function d(h){const f=i.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return i.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function hS(t,e,n){let r;function o(f){r=f}let i,s;function a(f){i=f.type,s=f.bytesPerElement}function l(f,m){t.drawElements(r,m,i,f*s),n.update(m,r,1)}function c(f,m,v){v!==0&&(t.drawElementsInstanced(r,m,i,f*s,v),n.update(m,r,v))}function d(f,m,v){if(v===0)return;const w=e.get("WEBGL_multi_draw");if(w===null)for(let p=0;p<v;p++)this.render(f[p]/s,m[p]);else{w.multiDrawElementsWEBGL(r,m,0,i,f,0,v);let p=0;for(let u=0;u<v;u++)p+=m[u];n.update(p,r,1)}}function h(f,m,v,w){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/s,m[u],w[u]);else{p.multiDrawElementsInstancedWEBGL(r,m,0,i,f,0,w,0,v);let u=0;for(let _=0;_<v;_++)u+=m[_];for(let _=0;_<w.length;_++)n.update(u,r,w[_])}}this.setMode=o,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function pS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(i/3);break;case t.LINES:n.lines+=a*(i/2);break;case t.LINE_STRIP:n.lines+=a*(i-1);break;case t.LINE_LOOP:n.lines+=a*i;break;case t.POINTS:n.points+=a*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function mS(t,e,n){const r=new WeakMap,o=new At;function i(s,a,l){const c=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=r.get(a);if(f===void 0||f.count!==h){let x=function(){b.dispose(),r.delete(a),a.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),w===!0&&(S=2),p===!0&&(S=3);let C=a.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*h),b=new q0(T,C,A,h);b.type=Er,b.needsUpdate=!0;const E=S*4;for(let I=0;I<h;I++){const W=u[I],D=_[I],Y=g[I],j=C*A*4*I;for(let ee=0;ee<W.count;ee++){const J=ee*E;v===!0&&(o.fromBufferAttribute(W,ee),T[j+J+0]=o.x,T[j+J+1]=o.y,T[j+J+2]=o.z,T[j+J+3]=0),w===!0&&(o.fromBufferAttribute(D,ee),T[j+J+4]=o.x,T[j+J+5]=o.y,T[j+J+6]=o.z,T[j+J+7]=0),p===!0&&(o.fromBufferAttribute(Y,ee),T[j+J+8]=o.x,T[j+J+9]=o.y,T[j+J+10]=o.z,T[j+J+11]=Y.itemSize===4?o.w:1)}}f={count:h,texture:b,size:new He(C,A)},r.set(a,f),a.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const w=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",w),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:i}}function gS(t,e,n,r){let o=new WeakMap;function i(l){const c=r.render.frame,d=l.geometry,h=e.get(l,d);if(o.get(h)!==c&&(e.update(h),o.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),o.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),o.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;o.get(f)!==c&&(f.update(),o.set(f,c))}return h}function s(){o=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:i,dispose:s}}class og extends Vt{constructor(e,n,r,o,i,s,a,l,c,d){if(d=d!==void 0?d:ii,d!==ii&&d!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&d===ii&&(r=gi),r===void 0&&d===gs&&(r=Ss),super(null,o,i,s,a,l,d,r,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ig=new Vt,sg=new og(1,1);sg.compareFunction=X0;const ag=new q0,lg=new t1,cg=new tg,ip=[],sp=[],ap=new Float32Array(16),lp=new Float32Array(9),cp=new Float32Array(4);function Mi(t,e,n){const r=t[0];if(r<=0||r>0)return t;const o=e*n;let i=ip[o];if(i===void 0&&(i=new Float32Array(o),ip[o]=i),e!==0){r.toArray(i,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(i,a)}return i}function vt(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function El(t,e){let n=sp[e];n===void 0&&(n=new Int32Array(e),sp[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function _S(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function wS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vt(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function xS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function yS(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(vt(n,r))return;cp.set(r),t.uniformMatrix2fv(this.addr,!1,cp),wt(n,r)}}function SS(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(vt(n,r))return;lp.set(r),t.uniformMatrix3fv(this.addr,!1,lp),wt(n,r)}}function MS(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(vt(n,r))return;ap.set(r),t.uniformMatrix4fv(this.addr,!1,ap),wt(n,r)}}function ES(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function AS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function RS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function CS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function PS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function bS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function LS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function DS(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o);const i=this.type===t.SAMPLER_2D_SHADOW?sg:ig;n.setTexture2D(e||i,o)}function US(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||lg,o)}function NS(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||cg,o)}function IS(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||ag,o)}function FS(t){switch(t){case 5126:return _S;case 35664:return vS;case 35665:return wS;case 35666:return xS;case 35674:return yS;case 35675:return SS;case 35676:return MS;case 5124:case 35670:return ES;case 35667:case 35671:return TS;case 35668:case 35672:return AS;case 35669:case 35673:return RS;case 5125:return CS;case 36294:return PS;case 36295:return bS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return IS}}function OS(t,e){t.uniform1fv(this.addr,e)}function kS(t,e){const n=Mi(e,this.size,2);t.uniform2fv(this.addr,n)}function zS(t,e){const n=Mi(e,this.size,3);t.uniform3fv(this.addr,n)}function BS(t,e){const n=Mi(e,this.size,4);t.uniform4fv(this.addr,n)}function HS(t,e){const n=Mi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function VS(t,e){const n=Mi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GS(t,e){const n=Mi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function WS(t,e){t.uniform1iv(this.addr,e)}function XS(t,e){t.uniform2iv(this.addr,e)}function jS(t,e){t.uniform3iv(this.addr,e)}function YS(t,e){t.uniform4iv(this.addr,e)}function qS(t,e){t.uniform1uiv(this.addr,e)}function $S(t,e){t.uniform2uiv(this.addr,e)}function KS(t,e){t.uniform3uiv(this.addr,e)}function ZS(t,e){t.uniform4uiv(this.addr,e)}function QS(t,e,n){const r=this.cache,o=e.length,i=El(n,o);vt(r,i)||(t.uniform1iv(this.addr,i),wt(r,i));for(let s=0;s!==o;++s)n.setTexture2D(e[s]||ig,i[s])}function JS(t,e,n){const r=this.cache,o=e.length,i=El(n,o);vt(r,i)||(t.uniform1iv(this.addr,i),wt(r,i));for(let s=0;s!==o;++s)n.setTexture3D(e[s]||lg,i[s])}function eM(t,e,n){const r=this.cache,o=e.length,i=El(n,o);vt(r,i)||(t.uniform1iv(this.addr,i),wt(r,i));for(let s=0;s!==o;++s)n.setTextureCube(e[s]||cg,i[s])}function tM(t,e,n){const r=this.cache,o=e.length,i=El(n,o);vt(r,i)||(t.uniform1iv(this.addr,i),wt(r,i));for(let s=0;s!==o;++s)n.setTexture2DArray(e[s]||ag,i[s])}function nM(t){switch(t){case 5126:return OS;case 35664:return kS;case 35665:return zS;case 35666:return BS;case 35674:return HS;case 35675:return VS;case 35676:return GS;case 5124:case 35670:return WS;case 35667:case 35671:return XS;case 35668:case 35672:return jS;case 35669:case 35673:return YS;case 5125:return qS;case 36294:return $S;case 36295:return KS;case 36296:return ZS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return JS;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return tM}}class rM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=FS(n.type)}}class oM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nM(n.type)}}class iM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let i=0,s=o.length;i!==s;++i){const a=o[i];a.setValue(e,n[a.id],r)}}}const Lc=/(\w+)(\])?(\[|\.)?/g;function up(t,e){t.seq.push(e),t.map[e.id]=e}function sM(t,e,n){const r=t.name,o=r.length;for(Lc.lastIndex=0;;){const i=Lc.exec(r),s=Lc.lastIndex;let a=i[1];const l=i[2]==="]",c=i[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===o){up(n,c===void 0?new rM(a,t,e):new oM(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new iM(a),up(n,h)),n=h}}}class Aa{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const i=e.getActiveUniform(n,o),s=e.getUniformLocation(n,i.name);sM(i,s,this)}}setValue(e,n,r,o){const i=this.map[n];i!==void 0&&i.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let i=0,s=n.length;i!==s;++i){const a=n[i],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,i=e.length;o!==i;++o){const s=e[o];s.id in n&&r.push(s)}return r}}function dp(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const aM=37297;let lM=0;function cM(t,e){const n=t.split(`
`),r=[],o=Math.max(e-6,0),i=Math.min(e+6,n.length);for(let s=o;s<i;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return r.join(`
`)}function uM(t){const e=Ye.getPrimaries(Ye.workingColorSpace),n=Ye.getPrimaries(t);let r;switch(e===n?r="":e===el&&n===Ja?r="LinearDisplayP3ToLinearSRGB":e===Ja&&n===el&&(r="LinearSRGBToLinearDisplayP3"),t){case Gr:case yl:return[r,"LinearTransferOETF"];case Nn:case Ld:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[r,"LinearTransferOETF"]}}function fp(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),o=t.getShaderInfoLog(e).trim();if(r&&o==="")return"";const i=/ERROR: 0:(\d+)/.exec(o);if(i){const s=parseInt(i[1]);return n.toUpperCase()+`

`+o+`

`+cM(t.getShaderSource(e),s)}else return o}function dM(t,e){const n=uM(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function fM(t,e){let n;switch(e){case vw:n="Linear";break;case ww:n="Reinhard";break;case xw:n="OptimizedCineon";break;case yw:n="ACESFilmic";break;case Mw:n="AgX";break;case Ew:n="Neutral";break;case Sw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function hM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function pM(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function mM(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const i=t.getActiveAttrib(e,o),s=i.name;let a=1;i.type===t.FLOAT_MAT2&&(a=2),i.type===t.FLOAT_MAT3&&(a=3),i.type===t.FLOAT_MAT4&&(a=4),n[s]={type:i.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Gi(t){return t!==""}function hp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(t){return t.replace(gM,vM)}const _M=new Map;function vM(t,e){let n=Ae[e];if(n===void 0){const r=_M.get(e);if(r!==void 0)n=Ae[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Nu(n)}const wM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mp(t){return t.replace(wM,xM)}function xM(t,e,n,r){let o="";for(let i=parseInt(e);i<parseInt(n);i++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return o}function gp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Wv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function SM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function EM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case F0:e="ENVMAP_BLENDING_MULTIPLY";break;case gw:e="ENVMAP_BLENDING_MIX";break;case _w:e="ENVMAP_BLENDING_ADD";break}return e}function TM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function AM(t,e,n,r){const o=t.getContext(),i=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=yM(n),c=SM(n),d=MM(n),h=EM(n),f=TM(n),m=hM(n),v=pM(i),w=o.createProgram();let p,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Gi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Gi).join(`
`),u.length>0&&(u+=`
`)):(p=[gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),u=[gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Nr?"#define TONE_MAPPING":"",n.toneMapping!==Nr?Ae.tonemapping_pars_fragment:"",n.toneMapping!==Nr?fM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,dM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Gi).join(`
`)),s=Nu(s),s=hp(s,n),s=pp(s,n),a=Nu(a),a=hp(a,n),a=pp(a,n),s=mp(s),a=mp(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=_+p+s,S=_+u+a,C=dp(o,o.VERTEX_SHADER,g),A=dp(o,o.FRAGMENT_SHADER,S);o.attachShader(w,C),o.attachShader(w,A),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function T(I){if(t.debug.checkShaderErrors){const W=o.getProgramInfoLog(w).trim(),D=o.getShaderInfoLog(C).trim(),Y=o.getShaderInfoLog(A).trim();let j=!0,ee=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(o,w,C,A);else{const J=fp(o,C,"vertex"),P=fp(o,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+J+`
`+P)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(D===""||Y==="")&&(ee=!1);ee&&(I.diagnostics={runnable:j,programLog:W,vertexShader:{log:D,prefix:p},fragmentShader:{log:Y,prefix:u}})}o.deleteShader(C),o.deleteShader(A),b=new Aa(o,w),E=mM(o,w)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=o.getProgramParameter(w,aM)),x},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=C,this.fragmentShader=A,this}let RM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),i=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(o)===!1&&(s.add(o),o.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new PM(e),n.set(e,r)),r}}class PM{constructor(e){this.id=RM++,this.code=e,this.usedTimes=0}}function bM(t,e,n,r,o,i,s){const a=new Ud,l=new CM,c=new Set,d=[],h=o.logarithmicDepthBuffer,f=o.vertexTextures;let m=o.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,x,I,W,D){const Y=W.fog,j=D.geometry,ee=E.isMeshStandardMaterial?W.environment:null,J=(E.isMeshStandardMaterial?n:e).get(E.envMap||ee),P=J&&J.mapping===wl?J.image.height:null,V=v[E.type];E.precision!==null&&(m=o.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const G=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,oe=G!==void 0?G.length:0;let ge=0;j.morphAttributes.position!==void 0&&(ge=1),j.morphAttributes.normal!==void 0&&(ge=2),j.morphAttributes.color!==void 0&&(ge=3);let Ge,H,te,ue;if(V){const Xe=In[V];Ge=Xe.vertexShader,H=Xe.fragmentShader}else Ge=E.vertexShader,H=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),ue=l.getFragmentShaderID(E);const ne=t.getRenderTarget(),Ne=D.isInstancedMesh===!0,Ie=D.isBatchedMesh===!0,N=!!E.map,Ze=!!E.matcap,we=!!J,$e=!!E.aoMap,Se=!!E.lightMap,Oe=!!E.bumpMap,Le=!!E.normalMap,ke=!!E.displacementMap,at=!!E.emissiveMap,R=!!E.metalnessMap,y=!!E.roughnessMap,B=E.anisotropy>0,q=E.clearcoat>0,K=E.dispersion>0,Q=E.iridescence>0,ve=E.sheen>0,ce=E.transmission>0,le=B&&!!E.anisotropyMap,Ce=q&&!!E.clearcoatMap,re=q&&!!E.clearcoatNormalMap,_e=q&&!!E.clearcoatRoughnessMap,ze=Q&&!!E.iridescenceMap,xe=Q&&!!E.iridescenceThicknessMap,he=ve&&!!E.sheenColorMap,Pe=ve&&!!E.sheenRoughnessMap,Fe=!!E.specularMap,ut=!!E.specularColorMap,be=!!E.specularIntensityMap,L=ce&&!!E.transmissionMap,$=ce&&!!E.thicknessMap,X=!!E.gradientMap,se=!!E.alphaMap,de=E.alphaTest>0,Ve=!!E.alphaHash,Qe=!!E.extensions;let lt=Nr;E.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(lt=t.toneMapping);const Pt={shaderID:V,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:H,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ie,instancing:Ne,instancingColor:Ne&&D.instanceColor!==null,instancingMorph:Ne&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Gr,alphaToCoverage:!!E.alphaToCoverage,map:N,matcap:Ze,envMap:we,envMapMode:we&&J.mapping,envMapCubeUVHeight:P,aoMap:$e,lightMap:Se,bumpMap:Oe,normalMap:Le,displacementMap:f&&ke,emissiveMap:at,normalMapObjectSpace:Le&&E.normalMapType===zw,normalMapTangentSpace:Le&&E.normalMapType===kw,metalnessMap:R,roughnessMap:y,anisotropy:B,anisotropyMap:le,clearcoat:q,clearcoatMap:Ce,clearcoatNormalMap:re,clearcoatRoughnessMap:_e,dispersion:K,iridescence:Q,iridescenceMap:ze,iridescenceThicknessMap:xe,sheen:ve,sheenColorMap:he,sheenRoughnessMap:Pe,specularMap:Fe,specularColorMap:ut,specularIntensityMap:be,transmission:ce,transmissionMap:L,thicknessMap:$,gradientMap:X,opaque:E.transparent===!1&&E.blending===oi&&E.alphaToCoverage===!1,alphaMap:se,alphaTest:de,alphaHash:Ve,combine:E.combine,mapUv:N&&w(E.map.channel),aoMapUv:$e&&w(E.aoMap.channel),lightMapUv:Se&&w(E.lightMap.channel),bumpMapUv:Oe&&w(E.bumpMap.channel),normalMapUv:Le&&w(E.normalMap.channel),displacementMapUv:ke&&w(E.displacementMap.channel),emissiveMapUv:at&&w(E.emissiveMap.channel),metalnessMapUv:R&&w(E.metalnessMap.channel),roughnessMapUv:y&&w(E.roughnessMap.channel),anisotropyMapUv:le&&w(E.anisotropyMap.channel),clearcoatMapUv:Ce&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:re&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:he&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&w(E.sheenRoughnessMap.channel),specularMapUv:Fe&&w(E.specularMap.channel),specularColorMapUv:ut&&w(E.specularColorMap.channel),specularIntensityMapUv:be&&w(E.specularIntensityMap.channel),transmissionMapUv:L&&w(E.transmissionMap.channel),thicknessMapUv:$&&w(E.thicknessMap.channel),alphaMapUv:se&&w(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Le||B),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!j.attributes.uv&&(N||se),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ge,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:lt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:N&&E.map.isVideoTexture===!0&&Ye.getTransfer(E.map.colorSpace)===et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qn,flipSided:E.side===Qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Qe&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qe&&E.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function u(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)x.push(I),x.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(_(x,E),g(x,E),x.push(t.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function _(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function g(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),E.push(a.mask)}function S(E){const x=v[E.type];let I;if(x){const W=In[x];I=h1.clone(W.uniforms)}else I=E.uniforms;return I}function C(E,x){let I;for(let W=0,D=d.length;W<D;W++){const Y=d[W];if(Y.cacheKey===x){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new AM(t,x,E,i),d.push(I)),I}function A(E){if(--E.usedTimes===0){const x=d.indexOf(E);d[x]=d[d.length-1],d.pop(),E.destroy()}}function T(E){l.remove(E)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:d,dispose:b}}function LM(){let t=new WeakMap;function e(i){let s=t.get(i);return s===void 0&&(s={},t.set(i,s)),s}function n(i){t.delete(i)}function r(i,s,a){t.get(i)[s]=a}function o(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:o}}function DM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function _p(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vp(){const t=[];let e=0;const n=[],r=[],o=[];function i(){e=0,n.length=0,r.length=0,o.length=0}function s(h,f,m,v,w,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:w,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=w,u.group=p),e++,u}function a(h,f,m,v,w,p){const u=s(h,f,m,v,w,p);m.transmission>0?r.push(u):m.transparent===!0?o.push(u):n.push(u)}function l(h,f,m,v,w,p){const u=s(h,f,m,v,w,p);m.transmission>0?r.unshift(u):m.transparent===!0?o.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||DM),r.length>1&&r.sort(f||_p),o.length>1&&o.sort(f||_p)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:r,transparent:o,init:i,push:a,unshift:l,finish:d,sort:c}}function UM(){let t=new WeakMap;function e(r,o){const i=t.get(r);let s;return i===void 0?(s=new vp,t.set(r,[s])):o>=i.length?(s=new vp,i.push(s)):s=i[o],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function NM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new qe};break;case"SpotLight":n={position:new k,direction:new k,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function IM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let FM=0;function OM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kM(t){const e=new NM,n=IM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new k);const o=new k,i=new mt,s=new mt;function a(c,d){let h=0,f=0,m=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let v=0,w=0,p=0,u=0,_=0,g=0,S=0,C=0,A=0,T=0,b=0;c.sort(OM);const E=d===!0?Math.PI:1;for(let I=0,W=c.length;I<W;I++){const D=c[I],Y=D.color,j=D.intensity,ee=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=Y.r*j*E,f+=Y.g*j*E,m+=Y.b*j*E;else if(D.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(D.sh.coefficients[P],j);b++}else if(D.isDirectionalLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const V=D.shadow,G=n.get(D);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,r.directionalShadow[v]=G,r.directionalShadowMap[v]=J,r.directionalShadowMatrix[v]=D.shadow.matrix,g++}r.directional[v]=P,v++}else if(D.isSpotLight){const P=e.get(D);P.position.setFromMatrixPosition(D.matrixWorld),P.color.copy(Y).multiplyScalar(j*E),P.distance=ee,P.coneCos=Math.cos(D.angle),P.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),P.decay=D.decay,r.spot[p]=P;const V=D.shadow;if(D.map&&(r.spotLightMap[A]=D.map,A++,V.updateMatrices(D),D.castShadow&&T++),r.spotLightMatrix[p]=V.matrix,D.castShadow){const G=n.get(D);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,r.spotShadow[p]=G,r.spotShadowMap[p]=J,C++}p++}else if(D.isRectAreaLight){const P=e.get(D);P.color.copy(Y).multiplyScalar(j),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),r.rectArea[u]=P,u++}else if(D.isPointLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity*E),P.distance=D.distance,P.decay=D.decay,D.castShadow){const V=D.shadow,G=n.get(D);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,r.pointShadow[w]=G,r.pointShadowMap[w]=J,r.pointShadowMatrix[w]=D.shadow.matrix,S++}r.point[w]=P,w++}else if(D.isHemisphereLight){const P=e.get(D);P.skyColor.copy(D.color).multiplyScalar(j*E),P.groundColor.copy(D.groundColor).multiplyScalar(j*E),r.hemi[_]=P,_++}}u>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=m;const x=r.hash;(x.directionalLength!==v||x.pointLength!==w||x.spotLength!==p||x.rectAreaLength!==u||x.hemiLength!==_||x.numDirectionalShadows!==g||x.numPointShadows!==S||x.numSpotShadows!==C||x.numSpotMaps!==A||x.numLightProbes!==b)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=u,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=g,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=C+A-T,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=b,x.directionalLength=v,x.pointLength=w,x.spotLength=p,x.rectAreaLength=u,x.hemiLength=_,x.numDirectionalShadows=g,x.numPointShadows=S,x.numSpotShadows=C,x.numSpotMaps=A,x.numLightProbes=b,r.version=FM++)}function l(c,d){let h=0,f=0,m=0,v=0,w=0;const p=d.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const g=c[u];if(g.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(g.matrixWorld),o.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(p),h++}else if(g.isSpotLight){const S=r.spot[m];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(g.matrixWorld),o.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const S=r.rectArea[v];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(p),s.identity(),i.copy(g.matrixWorld),i.premultiply(p),s.extractRotation(i),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),v++}else if(g.isPointLight){const S=r.point[f];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(p),f++}else if(g.isHemisphereLight){const S=r.hemi[w];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(p),w++}}}return{setup:a,setupView:l,state:r}}function wp(t){const e=new kM(t),n=[],r=[];function o(d){c.camera=d,n.length=0,r.length=0}function i(d){n.push(d)}function s(d){r.push(d)}function a(d){e.setup(n,d)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:c,setupLights:a,setupLightsView:l,pushLight:i,pushShadow:s}}function zM(t){let e=new WeakMap;function n(o,i=0){const s=e.get(o);let a;return s===void 0?(a=new wp(t),e.set(o,[a])):i>=s.length?(a=new wp(t),s.push(a)):a=s[i],a}function r(){e=new WeakMap}return{get:n,dispose:r}}class BM extends Sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HM extends Sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GM=`uniform sampler2D shadow_pass;
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
}`;function WM(t,e,n){let r=new ng;const o=new He,i=new He,s=new At,a=new BM({depthPacking:Ow}),l=new HM,c={},d=n.maxTextureSize,h={[Or]:Qt,[Qt]:Or,[Qn]:Qn},f=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:VM,fragmentShader:GM}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new xo;v.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new zn(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I0;let u=this.type;this.render=function(A,T,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),x=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Ur),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const D=u!==$n&&this.type===$n,Y=u===$n&&this.type!==$n;for(let j=0,ee=A.length;j<ee;j++){const J=A[j],P=J.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;o.copy(P.mapSize);const V=P.getFrameExtents();if(o.multiply(V),i.copy(P.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(i.x=Math.floor(d/V.x),o.x=i.x*V.x,P.mapSize.x=i.x),o.y>d&&(i.y=Math.floor(d/V.y),o.y=i.y*V.y,P.mapSize.y=i.y)),P.map===null||D===!0||Y===!0){const oe=this.type!==$n?{minFilter:gn,magFilter:gn}:{};P.map!==null&&P.map.dispose(),P.map=new _o(o.x,o.y,oe),P.map.texture.name=J.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const G=P.getViewportCount();for(let oe=0;oe<G;oe++){const ge=P.getViewport(oe);s.set(i.x*ge.x,i.y*ge.y,i.x*ge.z,i.y*ge.w),W.viewport(s),P.updateMatrices(J,oe),r=P.getFrustum(),S(T,b,P.camera,J,this.type)}P.isPointLightShadow!==!0&&this.type===$n&&_(P,b),P.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(E,x,I)};function _(A,T){const b=e.update(w);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _o(o.x,o.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,b,f,w,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,b,m,w,null)}function g(A,T,b,E){let x=null;const I=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)x=I;else if(x=b.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=x.uuid,D=T.uuid;let Y=c[W];Y===void 0&&(Y={},c[W]=Y);let j=Y[D];j===void 0&&(j=x.clone(),Y[D]=j,T.addEventListener("dispose",C)),x=j}if(x.visible=T.visible,x.wireframe=T.wireframe,E===$n?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,b.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=t.properties.get(x);W.light=b}return x}function S(A,T,b,E,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===$n)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const D=e.update(A),Y=A.material;if(Array.isArray(Y)){const j=D.groups;for(let ee=0,J=j.length;ee<J;ee++){const P=j[ee],V=Y[P.materialIndex];if(V&&V.visible){const G=g(A,V,E,x);A.onBeforeShadow(t,A,T,b,D,G,P),t.renderBufferDirect(b,null,D,G,A,P),A.onAfterShadow(t,A,T,b,D,G,P)}}}else if(Y.visible){const j=g(A,Y,E,x);A.onBeforeShadow(t,A,T,b,D,j,null),t.renderBufferDirect(b,null,D,j,A,null),A.onAfterShadow(t,A,T,b,D,j,null)}}const W=A.children;for(let D=0,Y=W.length;D<Y;D++)S(W[D],T,b,E,x)}function C(A){A.target.removeEventListener("dispose",C);for(const b in c){const E=c[b],x=A.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function XM(t){function e(){let L=!1;const $=new At;let X=null;const se=new At(0,0,0,0);return{setMask:function(de){X!==de&&!L&&(t.colorMask(de,de,de,de),X=de)},setLocked:function(de){L=de},setClear:function(de,Ve,Qe,lt,Pt){Pt===!0&&(de*=lt,Ve*=lt,Qe*=lt),$.set(de,Ve,Qe,lt),se.equals($)===!1&&(t.clearColor(de,Ve,Qe,lt),se.copy($))},reset:function(){L=!1,X=null,se.set(-1,0,0,0)}}}function n(){let L=!1,$=null,X=null,se=null;return{setTest:function(de){de?ue(t.DEPTH_TEST):ne(t.DEPTH_TEST)},setMask:function(de){$!==de&&!L&&(t.depthMask(de),$=de)},setFunc:function(de){if(X!==de){switch(de){case cw:t.depthFunc(t.NEVER);break;case uw:t.depthFunc(t.ALWAYS);break;case dw:t.depthFunc(t.LESS);break;case Za:t.depthFunc(t.LEQUAL);break;case fw:t.depthFunc(t.EQUAL);break;case hw:t.depthFunc(t.GEQUAL);break;case pw:t.depthFunc(t.GREATER);break;case mw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=de}},setLocked:function(de){L=de},setClear:function(de){se!==de&&(t.clearDepth(de),se=de)},reset:function(){L=!1,$=null,X=null,se=null}}}function r(){let L=!1,$=null,X=null,se=null,de=null,Ve=null,Qe=null,lt=null,Pt=null;return{setTest:function(Xe){L||(Xe?ue(t.STENCIL_TEST):ne(t.STENCIL_TEST))},setMask:function(Xe){$!==Xe&&!L&&(t.stencilMask(Xe),$=Xe)},setFunc:function(Xe,Ln,kt){(X!==Xe||se!==Ln||de!==kt)&&(t.stencilFunc(Xe,Ln,kt),X=Xe,se=Ln,de=kt)},setOp:function(Xe,Ln,kt){(Ve!==Xe||Qe!==Ln||lt!==kt)&&(t.stencilOp(Xe,Ln,kt),Ve=Xe,Qe=Ln,lt=kt)},setLocked:function(Xe){L=Xe},setClear:function(Xe){Pt!==Xe&&(t.clearStencil(Xe),Pt=Xe)},reset:function(){L=!1,$=null,X=null,se=null,de=null,Ve=null,Qe=null,lt=null,Pt=null}}}const o=new e,i=new n,s=new r,a=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],m=null,v=!1,w=null,p=null,u=null,_=null,g=null,S=null,C=null,A=new qe(0,0,0),T=0,b=!1,E=null,x=null,I=null,W=null,D=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ee=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=ee>=1):J.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=ee>=2);let P=null,V={};const G=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),ge=new At().fromArray(G),Ge=new At().fromArray(oe);function H(L,$,X,se){const de=new Uint8Array(4),Ve=t.createTexture();t.bindTexture(L,Ve),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<X;Qe++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D($,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D($+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return Ve}const te={};te[t.TEXTURE_2D]=H(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=H(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=H(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=H(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),i.setClear(1),s.setClear(0),ue(t.DEPTH_TEST),i.setFunc(Za),Oe(!1),Le(eh),ue(t.CULL_FACE),$e(Ur);function ue(L){c[L]!==!0&&(t.enable(L),c[L]=!0)}function ne(L){c[L]!==!1&&(t.disable(L),c[L]=!1)}function Ne(L,$){return d[L]!==$?(t.bindFramebuffer(L,$),d[L]=$,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=$),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=$),!0):!1}function Ie(L,$){let X=f,se=!1;if(L){X=h.get($),X===void 0&&(X=[],h.set($,X));const de=L.textures;if(X.length!==de.length||X[0]!==t.COLOR_ATTACHMENT0){for(let Ve=0,Qe=de.length;Ve<Qe;Ve++)X[Ve]=t.COLOR_ATTACHMENT0+Ve;X.length=de.length,se=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,se=!0);se&&t.drawBuffers(X)}function N(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const Ze={[to]:t.FUNC_ADD,[jv]:t.FUNC_SUBTRACT,[Yv]:t.FUNC_REVERSE_SUBTRACT};Ze[qv]=t.MIN,Ze[$v]=t.MAX;const we={[Kv]:t.ZERO,[Zv]:t.ONE,[Qv]:t.SRC_COLOR,[Ru]:t.SRC_ALPHA,[ow]:t.SRC_ALPHA_SATURATE,[nw]:t.DST_COLOR,[ew]:t.DST_ALPHA,[Jv]:t.ONE_MINUS_SRC_COLOR,[Cu]:t.ONE_MINUS_SRC_ALPHA,[rw]:t.ONE_MINUS_DST_COLOR,[tw]:t.ONE_MINUS_DST_ALPHA,[iw]:t.CONSTANT_COLOR,[sw]:t.ONE_MINUS_CONSTANT_COLOR,[aw]:t.CONSTANT_ALPHA,[lw]:t.ONE_MINUS_CONSTANT_ALPHA};function $e(L,$,X,se,de,Ve,Qe,lt,Pt,Xe){if(L===Ur){v===!0&&(ne(t.BLEND),v=!1);return}if(v===!1&&(ue(t.BLEND),v=!0),L!==Xv){if(L!==w||Xe!==b){if((p!==to||g!==to)&&(t.blendEquation(t.FUNC_ADD),p=to,g=to),Xe)switch(L){case oi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFunc(t.ONE,t.ONE);break;case nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case oi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}u=null,_=null,S=null,C=null,A.set(0,0,0),T=0,w=L,b=Xe}return}de=de||$,Ve=Ve||X,Qe=Qe||se,($!==p||de!==g)&&(t.blendEquationSeparate(Ze[$],Ze[de]),p=$,g=de),(X!==u||se!==_||Ve!==S||Qe!==C)&&(t.blendFuncSeparate(we[X],we[se],we[Ve],we[Qe]),u=X,_=se,S=Ve,C=Qe),(lt.equals(A)===!1||Pt!==T)&&(t.blendColor(lt.r,lt.g,lt.b,Pt),A.copy(lt),T=Pt),w=L,b=!1}function Se(L,$){L.side===Qn?ne(t.CULL_FACE):ue(t.CULL_FACE);let X=L.side===Qt;$&&(X=!X),Oe(X),L.blending===oi&&L.transparent===!1?$e(Ur):$e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),i.setFunc(L.depthFunc),i.setTest(L.depthTest),i.setMask(L.depthWrite),o.setMask(L.colorWrite);const se=L.stencilWrite;s.setTest(se),se&&(s.setMask(L.stencilWriteMask),s.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),s.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),at(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){E!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),E=L)}function Le(L){L!==Vv?(ue(t.CULL_FACE),L!==x&&(L===eh?t.cullFace(t.BACK):L===Gv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ne(t.CULL_FACE),x=L}function ke(L){L!==I&&(j&&t.lineWidth(L),I=L)}function at(L,$,X){L?(ue(t.POLYGON_OFFSET_FILL),(W!==$||D!==X)&&(t.polygonOffset($,X),W=$,D=X)):ne(t.POLYGON_OFFSET_FILL)}function R(L){L?ue(t.SCISSOR_TEST):ne(t.SCISSOR_TEST)}function y(L){L===void 0&&(L=t.TEXTURE0+Y-1),P!==L&&(t.activeTexture(L),P=L)}function B(L,$,X){X===void 0&&(P===null?X=t.TEXTURE0+Y-1:X=P);let se=V[X];se===void 0&&(se={type:void 0,texture:void 0},V[X]=se),(se.type!==L||se.texture!==$)&&(P!==X&&(t.activeTexture(X),P=X),t.bindTexture(L,$||te[L]),se.type=L,se.texture=$)}function q(){const L=V[P];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(L){ge.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ge.copy(L))}function Pe(L){Ge.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ge.copy(L))}function Fe(L,$){let X=l.get($);X===void 0&&(X=new WeakMap,l.set($,X));let se=X.get(L);se===void 0&&(se=t.getUniformBlockIndex($,L.name),X.set(L,se))}function ut(L,$){const se=l.get($).get(L);a.get($)!==se&&(t.uniformBlockBinding($,se,L.__bindingPointIndex),a.set($,se))}function be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},P=null,V={},d={},h=new WeakMap,f=[],m=null,v=!1,w=null,p=null,u=null,_=null,g=null,S=null,C=null,A=new qe(0,0,0),T=0,b=!1,E=null,x=null,I=null,W=null,D=null,ge.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),o.reset(),i.reset(),s.reset()}return{buffers:{color:o,depth:i,stencil:s},enable:ue,disable:ne,bindFramebuffer:Ne,drawBuffers:Ie,useProgram:N,setBlending:$e,setMaterial:Se,setFlipSided:Oe,setCullFace:Le,setLineWidth:ke,setPolygonOffset:at,setScissorTest:R,activeTexture:y,bindTexture:B,unbindTexture:q,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:ze,texImage3D:xe,updateUBOMapping:Fe,uniformBlockBinding:ut,texStorage2D:re,texStorage3D:_e,texSubImage2D:ve,texSubImage3D:ce,compressedTexSubImage2D:le,compressedTexSubImage3D:Ce,scissor:he,viewport:Pe,reset:be}}function jM(t,e,n,r,o,i,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return m?new OffscreenCanvas(R,y):nl("canvas")}function w(R,y,B){let q=1;const K=at(R);if((K.width>B||K.height>B)&&(q=B/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(q*K.width),ve=Math.floor(q*K.height);h===void 0&&(h=v(Q,ve));const ce=y?v(Q,ve):h;return ce.width=Q,ce.height=ve,ce.getContext("2d").drawImage(R,0,0,Q,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Q+"x"+ve+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==gn&&R.minFilter!==Rn}function u(R){t.generateMipmap(R)}function _(R,y,B,q,K=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=y;if(y===t.RED&&(B===t.FLOAT&&(Q=t.R32F),B===t.HALF_FLOAT&&(Q=t.R16F),B===t.UNSIGNED_BYTE&&(Q=t.R8)),y===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.R8UI),B===t.UNSIGNED_SHORT&&(Q=t.R16UI),B===t.UNSIGNED_INT&&(Q=t.R32UI),B===t.BYTE&&(Q=t.R8I),B===t.SHORT&&(Q=t.R16I),B===t.INT&&(Q=t.R32I)),y===t.RG&&(B===t.FLOAT&&(Q=t.RG32F),B===t.HALF_FLOAT&&(Q=t.RG16F),B===t.UNSIGNED_BYTE&&(Q=t.RG8)),y===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RG8UI),B===t.UNSIGNED_SHORT&&(Q=t.RG16UI),B===t.UNSIGNED_INT&&(Q=t.RG32UI),B===t.BYTE&&(Q=t.RG8I),B===t.SHORT&&(Q=t.RG16I),B===t.INT&&(Q=t.RG32I)),y===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),y===t.RGBA){const ve=K?Qa:Ye.getTransfer(q);B===t.FLOAT&&(Q=t.RGBA32F),B===t.HALF_FLOAT&&(Q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Q=ve===et?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(R,y){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function S(R){const y=R.target;y.removeEventListener("dispose",S),A(y),y.isVideoTexture&&d.delete(y)}function C(R){const y=R.target;y.removeEventListener("dispose",C),b(y)}function A(R){const y=r.get(R);if(y.__webglInit===void 0)return;const B=R.source,q=f.get(B);if(q){const K=q[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(R),Object.keys(q).length===0&&f.delete(B)}r.remove(R)}function T(R){const y=r.get(R);t.deleteTexture(y.__webglTexture);const B=R.source,q=f.get(B);delete q[y.__cacheKey],s.memory.textures--}function b(R){const y=r.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let K=0;K<y.__webglFramebuffer[q].length;K++)t.deleteFramebuffer(y.__webglFramebuffer[q][K]);else t.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)t.deleteFramebuffer(y.__webglFramebuffer[q]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=R.textures;for(let q=0,K=B.length;q<K;q++){const Q=r.get(B[q]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),s.memory.textures--),r.remove(B[q])}r.remove(R)}let E=0;function x(){E=0}function I(){const R=E;return R>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),E+=1,R}function W(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function D(R,y){const B=r.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(B,R,y);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+y)}function Y(R,y){const B=r.get(R);if(R.version>0&&B.__version!==R.version){ge(B,R,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+y)}function j(R,y){const B=r.get(R);if(R.version>0&&B.__version!==R.version){ge(B,R,y);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+y)}function ee(R,y){const B=r.get(R);if(R.version>0&&B.__version!==R.version){Ge(B,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+y)}const J={[Lu]:t.REPEAT,[so]:t.CLAMP_TO_EDGE,[Du]:t.MIRRORED_REPEAT},P={[gn]:t.NEAREST,[Tw]:t.NEAREST_MIPMAP_NEAREST,[Xs]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[ec]:t.LINEAR_MIPMAP_NEAREST,[ao]:t.LINEAR_MIPMAP_LINEAR},V={[Bw]:t.NEVER,[jw]:t.ALWAYS,[Hw]:t.LESS,[X0]:t.LEQUAL,[Vw]:t.EQUAL,[Xw]:t.GEQUAL,[Gw]:t.GREATER,[Ww]:t.NOTEQUAL};function G(R,y){if(y.type===Er&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===ec||y.magFilter===Xs||y.magFilter===ao||y.minFilter===Rn||y.minFilter===ec||y.minFilter===Xs||y.minFilter===ao)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,J[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,J[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,J[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,P[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,P[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,V[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===gn||y.minFilter!==Xs&&y.minFilter!==ao||y.type===Er&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function oe(R,y){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",S));const q=y.source;let K=f.get(q);K===void 0&&(K={},f.set(q,K));const Q=W(y);if(Q!==R.__cacheKey){K[Q]===void 0&&(K[Q]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,B=!0),K[Q].usedTimes++;const ve=K[R.__cacheKey];ve!==void 0&&(K[R.__cacheKey].usedTimes--,ve.usedTimes===0&&T(y)),R.__cacheKey=Q,R.__webglTexture=K[Q].texture}return B}function ge(R,y,B){let q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=t.TEXTURE_3D);const K=oe(R,y),Q=y.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+B);const ve=r.get(Q);if(Q.version!==ve.__version||K===!0){n.activeTexture(t.TEXTURE0+B);const ce=Ye.getPrimaries(Ye.workingColorSpace),le=y.colorSpace===yr?null:Ye.getPrimaries(y.colorSpace),Ce=y.colorSpace===yr||ce===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let re=w(y.image,!1,o.maxTextureSize);re=ke(y,re);const _e=i.convert(y.format,y.colorSpace),ze=i.convert(y.type);let xe=_(y.internalFormat,_e,ze,y.colorSpace,y.isVideoTexture);G(q,y);let he;const Pe=y.mipmaps,Fe=y.isVideoTexture!==!0,ut=ve.__version===void 0||K===!0,be=Q.dataReady,L=g(y,re);if(y.isDepthTexture)xe=t.DEPTH_COMPONENT16,y.type===Er?xe=t.DEPTH_COMPONENT32F:y.type===gi?xe=t.DEPTH_COMPONENT24:y.type===Ss&&(xe=t.DEPTH24_STENCIL8),ut&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,xe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,xe,re.width,re.height,0,_e,ze,null));else if(y.isDataTexture)if(Pe.length>0){Fe&&ut&&n.texStorage2D(t.TEXTURE_2D,L,xe,Pe[0].width,Pe[0].height);for(let $=0,X=Pe.length;$<X;$++)he=Pe[$],Fe?be&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,he.width,he.height,_e,ze,he.data):n.texImage2D(t.TEXTURE_2D,$,xe,he.width,he.height,0,_e,ze,he.data);y.generateMipmaps=!1}else Fe?(ut&&n.texStorage2D(t.TEXTURE_2D,L,xe,re.width,re.height),be&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,_e,ze,re.data)):n.texImage2D(t.TEXTURE_2D,0,xe,re.width,re.height,0,_e,ze,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Fe&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,L,xe,Pe[0].width,Pe[0].height,re.depth);for(let $=0,X=Pe.length;$<X;$++)he=Pe[$],y.format!==kn?_e!==null?Fe?be&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,re.depth,_e,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,xe,he.width,he.height,re.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?be&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,re.depth,_e,ze,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,xe,he.width,he.height,re.depth,0,_e,ze,he.data)}else{Fe&&ut&&n.texStorage2D(t.TEXTURE_2D,L,xe,Pe[0].width,Pe[0].height);for(let $=0,X=Pe.length;$<X;$++)he=Pe[$],y.format!==kn?_e!==null?Fe?be&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,he.width,he.height,_e,he.data):n.compressedTexImage2D(t.TEXTURE_2D,$,xe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?be&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,he.width,he.height,_e,ze,he.data):n.texImage2D(t.TEXTURE_2D,$,xe,he.width,he.height,0,_e,ze,he.data)}else if(y.isDataArrayTexture)Fe?(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,L,xe,re.width,re.height,re.depth),be&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,ze,re.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,re.width,re.height,re.depth,0,_e,ze,re.data);else if(y.isData3DTexture)Fe?(ut&&n.texStorage3D(t.TEXTURE_3D,L,xe,re.width,re.height,re.depth),be&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,ze,re.data)):n.texImage3D(t.TEXTURE_3D,0,xe,re.width,re.height,re.depth,0,_e,ze,re.data);else if(y.isFramebufferTexture){if(ut)if(Fe)n.texStorage2D(t.TEXTURE_2D,L,xe,re.width,re.height);else{let $=re.width,X=re.height;for(let se=0;se<L;se++)n.texImage2D(t.TEXTURE_2D,se,xe,$,X,0,_e,ze,null),$>>=1,X>>=1}}else if(Pe.length>0){if(Fe&&ut){const $=at(Pe[0]);n.texStorage2D(t.TEXTURE_2D,L,xe,$.width,$.height)}for(let $=0,X=Pe.length;$<X;$++)he=Pe[$],Fe?be&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e,ze,he):n.texImage2D(t.TEXTURE_2D,$,xe,_e,ze,he);y.generateMipmaps=!1}else if(Fe){if(ut){const $=at(re);n.texStorage2D(t.TEXTURE_2D,L,xe,$.width,$.height)}be&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,ze,re)}else n.texImage2D(t.TEXTURE_2D,0,xe,_e,ze,re);p(y)&&u(q),ve.__version=Q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ge(R,y,B){if(y.image.length!==6)return;const q=oe(R,y),K=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const Q=r.get(K);if(K.version!==Q.__version||q===!0){n.activeTexture(t.TEXTURE0+B);const ve=Ye.getPrimaries(Ye.workingColorSpace),ce=y.colorSpace===yr?null:Ye.getPrimaries(y.colorSpace),le=y.colorSpace===yr||ve===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,_e=[];for(let X=0;X<6;X++)!Ce&&!re?_e[X]=w(y.image[X],!0,o.maxCubemapSize):_e[X]=re?y.image[X].image:y.image[X],_e[X]=ke(y,_e[X]);const ze=_e[0],xe=i.convert(y.format,y.colorSpace),he=i.convert(y.type),Pe=_(y.internalFormat,xe,he,y.colorSpace),Fe=y.isVideoTexture!==!0,ut=Q.__version===void 0||q===!0,be=K.dataReady;let L=g(y,ze);G(t.TEXTURE_CUBE_MAP,y);let $;if(Ce){Fe&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,Pe,ze.width,ze.height);for(let X=0;X<6;X++){$=_e[X].mipmaps;for(let se=0;se<$.length;se++){const de=$[se];y.format!==kn?xe!==null?Fe?be&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,0,0,de.width,de.height,xe,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,Pe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,0,0,de.width,de.height,xe,he,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,Pe,de.width,de.height,0,xe,he,de.data)}}}else{if($=y.mipmaps,Fe&&ut){$.length>0&&L++;const X=at(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,L,Pe,X.width,X.height)}for(let X=0;X<6;X++)if(re){Fe?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,_e[X].width,_e[X].height,xe,he,_e[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Pe,_e[X].width,_e[X].height,0,xe,he,_e[X].data);for(let se=0;se<$.length;se++){const Ve=$[se].image[X].image;Fe?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,0,0,Ve.width,Ve.height,xe,he,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,Pe,Ve.width,Ve.height,0,xe,he,Ve.data)}}else{Fe?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,xe,he,_e[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Pe,xe,he,_e[X]);for(let se=0;se<$.length;se++){const de=$[se];Fe?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,0,0,xe,he,de.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,Pe,xe,he,de.image[X])}}}p(y)&&u(t.TEXTURE_CUBE_MAP),Q.__version=K.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function H(R,y,B,q,K,Q){const ve=i.convert(B.format,B.colorSpace),ce=i.convert(B.type),le=_(B.internalFormat,ve,ce,B.colorSpace);if(!r.get(y).__hasExternalTextures){const re=Math.max(1,y.width>>Q),_e=Math.max(1,y.height>>Q);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,Q,le,re,_e,y.depth,0,ve,ce,null):n.texImage2D(K,Q,le,re,_e,0,ve,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Oe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,K,r.get(B).__webglTexture,0,Se(y)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,K,r.get(B).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(R,y,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer&&!y.stencilBuffer){let q=t.DEPTH_COMPONENT24;if(B||Oe(y)){const K=y.depthTexture;K&&K.isDepthTexture&&(K.type===Er?q=t.DEPTH_COMPONENT32F:K.type===gi&&(q=t.DEPTH_COMPONENT24));const Q=Se(y);Oe(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,q,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,q,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(y.depthBuffer&&y.stencilBuffer){const q=Se(y);B&&Oe(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,y.width,y.height):Oe(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const q=y.textures;for(let K=0;K<q.length;K++){const Q=q[K],ve=i.convert(Q.format,Q.colorSpace),ce=i.convert(Q.type),le=_(Q.internalFormat,ve,ce,Q.colorSpace),Ce=Se(y);B&&Oe(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,le,y.width,y.height):Oe(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,le,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,le,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),D(y.depthTexture,0);const q=r.get(y.depthTexture).__webglTexture,K=Se(y);if(y.depthTexture.format===ii)Oe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(y.depthTexture.format===gs)Oe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function ne(R){const y=r.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ue(y.__webglFramebuffer,R)}else if(B){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]=t.createRenderbuffer(),te(y.__webglDepthbuffer[q],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),te(y.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(R,y,B){const q=r.get(R);y!==void 0&&H(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&ne(R)}function Ie(R){const y=R.texture,B=r.get(R),q=r.get(y);R.addEventListener("dispose",C);const K=R.textures,Q=R.isWebGLCubeRenderTarget===!0,ve=K.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=y.version,s.memory.textures++),Q){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let le=0;le<y.mipmaps.length;le++)B.__webglFramebuffer[ce][le]=t.createFramebuffer()}else B.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)B.__webglFramebuffer[ce]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ve)for(let ce=0,le=K.length;ce<le;ce++){const Ce=r.get(K[ce]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&Oe(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<K.length;ce++){const le=K[ce];B.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Ce=i.convert(le.format,le.colorSpace),re=i.convert(le.type),_e=_(le.internalFormat,Ce,re,le.colorSpace,R.isXRRenderTarget===!0),ze=Se(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),te(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),G(t.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)H(B.__webglFramebuffer[ce][le],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,le);else H(B.__webglFramebuffer[ce],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(y)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let ce=0,le=K.length;ce<le;ce++){const Ce=K[ce],re=r.get(Ce);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),G(t.TEXTURE_2D,Ce),H(B.__webglFramebuffer,R,Ce,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),p(Ce)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,q.__webglTexture),G(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)H(B.__webglFramebuffer[le],R,y,t.COLOR_ATTACHMENT0,ce,le);else H(B.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,ce,0);p(y)&&u(ce),n.unbindTexture()}R.depthBuffer&&ne(R)}function N(R){const y=R.textures;for(let B=0,q=y.length;B<q;B++){const K=y[B];if(p(K)){const Q=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ve=r.get(K).__webglTexture;n.bindTexture(Q,ve),u(Q),n.unbindTexture()}}}const Ze=[],we=[];function $e(R){if(R.samples>0){if(Oe(R)===!1){const y=R.textures,B=R.width,q=R.height;let K=t.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=r.get(R),ce=y.length>1;if(ce)for(let le=0;le<y.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let le=0;le<y.length;le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[le]);const Ce=r.get(y[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ce,0)}t.blitFramebuffer(0,0,B,q,0,0,B,q,K,t.NEAREST),l===!0&&(Ze.length=0,we.length=0,Ze.push(t.COLOR_ATTACHMENT0+le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ze.push(Q),we.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,we)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ze))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let le=0;le<y.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,ve.__webglColorRenderbuffer[le]);const Ce=r.get(y[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Se(R){return Math.min(o.maxSamples,R.samples)}function Oe(R){const y=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Le(R){const y=s.render.frame;d.get(R)!==y&&(d.set(R,y),R.update())}function ke(R,y){const B=R.colorSpace,q=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Gr&&B!==yr&&(Ye.getTransfer(B)===et?(q!==kn||K!==kr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=x,this.setTexture2D=D,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=ee,this.rebindTextures=Ne,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Oe}function YM(t,e){function n(r,o=yr){let i;const s=Ye.getTransfer(o);if(r===kr)return t.UNSIGNED_BYTE;if(r===B0)return t.UNSIGNED_SHORT_4_4_4_4;if(r===H0)return t.UNSIGNED_SHORT_5_5_5_1;if(r===Cw)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===Aw)return t.BYTE;if(r===Rw)return t.SHORT;if(r===k0)return t.UNSIGNED_SHORT;if(r===z0)return t.INT;if(r===gi)return t.UNSIGNED_INT;if(r===Er)return t.FLOAT;if(r===xl)return t.HALF_FLOAT;if(r===Pw)return t.ALPHA;if(r===bw)return t.RGB;if(r===kn)return t.RGBA;if(r===Lw)return t.LUMINANCE;if(r===Dw)return t.LUMINANCE_ALPHA;if(r===ii)return t.DEPTH_COMPONENT;if(r===gs)return t.DEPTH_STENCIL;if(r===Uw)return t.RED;if(r===V0)return t.RED_INTEGER;if(r===Nw)return t.RG;if(r===G0)return t.RG_INTEGER;if(r===W0)return t.RGBA_INTEGER;if(r===tc||r===nc||r===rc||r===oc)if(s===et)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===tc)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nc)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rc)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oc)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===tc)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nc)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rc)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oc)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oh||r===ih||r===sh||r===ah)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===oh)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ih)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sh)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ah)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lh||r===ch||r===uh)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===lh||r===ch)return s===et?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===uh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dh||r===fh||r===hh||r===ph||r===mh||r===gh||r===_h||r===vh||r===wh||r===xh||r===yh||r===Sh||r===Mh||r===Eh)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===dh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ph)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_h)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Eh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ic||r===Th||r===Ah)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===ic)return s===et?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Th)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ah)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Iw||r===Rh||r===Ch||r===Ph)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===ic)return i.COMPRESSED_RED_RGTC1_EXT;if(r===Rh)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ch)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ph)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ss?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}class qM extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ha extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $M={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,i=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const w of e.hand.values()){const p=n.getJointPose(w,r),u=this._getHandJoint(c,w);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=n.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&i!==null&&(o=i),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($M)))}return a!==null&&(a.visible=o!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ha;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const KM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZM=`
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

}`;class QM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Vt,i=e.properties.get(o);i.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}render(e,n){if(this.texture!==null){if(this.mesh===null){const r=n.cameras[0].viewport,o=new zr({vertexShader:KM,fragmentShader:ZM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new zn(new Ml(20,20),o)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class JM extends yi{constructor(e,n){super();const r=this;let o=null,i=1,s=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,v=null;const w=new QM,p=n.getContextAttributes();let u=null,_=null;const g=[],S=[],C=new He;let A=null;const T=new pn;T.layers.enable(1),T.viewport=new At;const b=new pn;b.layers.enable(2),b.viewport=new At;const E=[T,b],x=new qM;x.layers.enable(1),x.layers.enable(2);let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let te=g[H];return te===void 0&&(te=new Dc,g[H]=te),te.getTargetRaySpace()},this.getControllerGrip=function(H){let te=g[H];return te===void 0&&(te=new Dc,g[H]=te),te.getGripSpace()},this.getHand=function(H){let te=g[H];return te===void 0&&(te=new Dc,g[H]=te),te.getHandSpace()};function D(H){const te=S.indexOf(H.inputSource);if(te===-1)return;const ue=g[te];ue!==void 0&&(ue.update(H.inputSource,H.frame,c||s),ue.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){o.removeEventListener("select",D),o.removeEventListener("selectstart",D),o.removeEventListener("selectend",D),o.removeEventListener("squeeze",D),o.removeEventListener("squeezestart",D),o.removeEventListener("squeezeend",D),o.removeEventListener("end",Y),o.removeEventListener("inputsourceschange",j);for(let H=0;H<g.length;H++){const te=S[H];te!==null&&(S[H]=null,g[H].disconnect(te))}I=null,W=null,w.reset(),e.setRenderTarget(u),m=null,f=null,h=null,o=null,_=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){i=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return o},this.setSession=async function(H){if(o=H,o!==null){if(u=e.getRenderTarget(),o.addEventListener("select",D),o.addEventListener("selectstart",D),o.addEventListener("selectend",D),o.addEventListener("squeeze",D),o.addEventListener("squeezestart",D),o.addEventListener("squeezeend",D),o.addEventListener("end",Y),o.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),o.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(o,n,te),o.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new _o(m.framebufferWidth,m.framebufferHeight,{format:kn,type:kr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ue=null,ne=null;p.depth&&(ne=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=p.stencil?gs:ii,ue=p.stencil?Ss:gi);const Ne={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:i};h=new XRWebGLBinding(o,n),f=h.createProjectionLayer(Ne),o.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new _o(f.textureWidth,f.textureHeight,{format:kn,type:kr,depthTexture:new og(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await o.requestReferenceSpace(a),Ge.setContext(o),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function j(H){for(let te=0;te<H.removed.length;te++){const ue=H.removed[te],ne=S.indexOf(ue);ne>=0&&(S[ne]=null,g[ne].disconnect(ue))}for(let te=0;te<H.added.length;te++){const ue=H.added[te];let ne=S.indexOf(ue);if(ne===-1){for(let Ie=0;Ie<g.length;Ie++)if(Ie>=S.length){S.push(ue),ne=Ie;break}else if(S[Ie]===null){S[Ie]=ue,ne=Ie;break}if(ne===-1)break}const Ne=g[ne];Ne&&Ne.connect(ue)}}const ee=new k,J=new k;function P(H,te,ue){ee.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(ue.matrixWorld);const ne=ee.distanceTo(J),Ne=te.projectionMatrix.elements,Ie=ue.projectionMatrix.elements,N=Ne[14]/(Ne[10]-1),Ze=Ne[14]/(Ne[10]+1),we=(Ne[9]+1)/Ne[5],$e=(Ne[9]-1)/Ne[5],Se=(Ne[8]-1)/Ne[0],Oe=(Ie[8]+1)/Ie[0],Le=N*Se,ke=N*Oe,at=ne/(-Se+Oe),R=at*-Se;te.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(R),H.translateZ(at),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const y=N+at,B=Ze+at,q=Le-R,K=ke+(ne-R),Q=we*Ze/B*y,ve=$e*Ze/B*y;H.projectionMatrix.makePerspective(q,K,Q,ve,y,B),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function V(H,te){te===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(te.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(o===null)return;w.texture!==null&&(H.near=w.depthNear,H.far=w.depthFar),x.near=b.near=T.near=H.near,x.far=b.far=T.far=H.far,(I!==x.near||W!==x.far)&&(o.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,W=x.far,T.near=I,T.far=W,b.near=I,b.far=W,T.updateProjectionMatrix(),b.updateProjectionMatrix(),H.updateProjectionMatrix());const te=H.parent,ue=x.cameras;V(x,te);for(let ne=0;ne<ue.length;ne++)V(ue[ne],te);ue.length===2?P(x,T,b):x.projectionMatrix.copy(T.projectionMatrix),G(H,x,te)};function G(H,te,ue){ue===null?H.matrix.copy(te.matrixWorld):(H.matrix.copy(ue.matrixWorld),H.matrix.invert(),H.matrix.multiply(te.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(te.projectionMatrix),H.projectionMatrixInverse.copy(te.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Uu*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return w.texture!==null};let oe=null;function ge(H,te){if(d=te.getViewerPose(c||s),v=te,d!==null){const ue=d.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let ne=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,ne=!0);for(let Ie=0;Ie<ue.length;Ie++){const N=ue[Ie];let Ze=null;if(m!==null)Ze=m.getViewport(N);else{const $e=h.getViewSubImage(f,N);Ze=$e.viewport,Ie===0&&(e.setRenderTargetTextures(_,$e.colorTexture,f.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(_))}let we=E[Ie];we===void 0&&(we=new pn,we.layers.enable(Ie),we.viewport=new At,E[Ie]=we),we.matrix.fromArray(N.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(N.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ie===0&&(x.matrix.copy(we.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ne===!0&&x.cameras.push(we)}const Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Ie=h.getDepthInformation(ue[0]);Ie&&Ie.isValid&&Ie.texture&&w.init(e,Ie,o.renderState)}}for(let ue=0;ue<g.length;ue++){const ne=S[ue],Ne=g[ue];ne!==null&&Ne!==void 0&&Ne.update(ne,te,c||s)}w.render(e,x),oe&&oe(H,te),te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:te}),v=null}const Ge=new rg;Ge.setAnimationLoop(ge),this.setAnimationLoop=function(H){oe=H},this.dispose=function(){}}}const Kr=new ar,eE=new mt;function tE(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function r(p,u){u.color.getRGB(p.fogColor.value,J0(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function o(p,u,_,g,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?i(p,u):u.isMeshToonMaterial?(i(p,u),h(p,u)):u.isMeshPhongMaterial?(i(p,u),d(p,u)):u.isMeshStandardMaterial?(i(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(i(p,u),v(p,u)):u.isMeshDepthMaterial?i(p,u):u.isMeshDistanceMaterial?(i(p,u),w(p,u)):u.isMeshNormalMaterial?i(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,_,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function i(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Qt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Qt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u),g=_.envMap,S=_.envMapRotation;if(g&&(p.envMap.value=g,Kr.copy(S),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),p.envMapRotation.value.setFromMatrix4(eE.makeRotationFromEuler(Kr)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*C,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,_,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Qt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function w(p,u){const _=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function nE(t,e,n,r){let o={},i={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const S=g.program;r.uniformBlockBinding(_,S)}function c(_,g){let S=o[_.id];S===void 0&&(v(_),S=d(_),o[_.id]=S,_.addEventListener("dispose",p));const C=g.program;r.updateUBOMapping(_,C);const A=e.render.frame;i[_.id]!==A&&(f(_),i[_.id]=A)}function d(_){const g=h();_.__bindingPointIndex=g;const S=t.createBuffer(),C=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function h(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=o[_.id],S=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,T=S.length;A<T;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,x=b.length;E<x;E++){const I=b[E];if(m(I,A,E,C)===!0){const W=I.__offset,D=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let j=0;j<D.length;j++){const ee=D[j],J=w(ee);typeof ee=="number"||typeof ee=="boolean"?(I.__data[0]=ee,t.bufferSubData(t.UNIFORM_BUFFER,W+Y,I.__data)):ee.isMatrix3?(I.__data[0]=ee.elements[0],I.__data[1]=ee.elements[1],I.__data[2]=ee.elements[2],I.__data[3]=0,I.__data[4]=ee.elements[3],I.__data[5]=ee.elements[4],I.__data[6]=ee.elements[5],I.__data[7]=0,I.__data[8]=ee.elements[6],I.__data[9]=ee.elements[7],I.__data[10]=ee.elements[8],I.__data[11]=0):(ee.toArray(I.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,S,C){const A=_.value,T=g+"_"+S;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const b=C[T];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return C[T]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function v(_){const g=_.uniforms;let S=0;const C=16;for(let T=0,b=g.length;T<b;T++){const E=Array.isArray(g[T])?g[T]:[g[T]];for(let x=0,I=E.length;x<I;x++){const W=E[x],D=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,j=D.length;Y<j;Y++){const ee=D[Y],J=w(ee),P=S%C;P!==0&&C-P<J.boundary&&(S+=C-P),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=J.storage}}}const A=S%C;return A>0&&(S+=C-A),_.__size=S,_.__cache={},this}function w(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const S=s.indexOf(g.__bindingPointIndex);s.splice(S,1),t.deleteBuffer(o[g.id]),delete o[g.id],delete i[g.id]}function u(){for(const _ in o)t.deleteBuffer(o[_]);s=[],o={},i={}}return{bind:l,update:c,dispose:u}}class rE{constructor(e={}){const{canvas:n=qw(),context:r=null,depth:o=!0,stencil:i=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=r.getContextAttributes().alpha}else f=s;const m=new Uint32Array(4),v=new Int32Array(4);let w=null,p=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this._useLegacyLights=!1,this.toneMapping=Nr,this.toneMappingExposure=1;const g=this;let S=!1,C=0,A=0,T=null,b=-1,E=null;const x=new At,I=new At;let W=null;const D=new qe(0);let Y=0,j=n.width,ee=n.height,J=1,P=null,V=null;const G=new At(0,0,j,ee),oe=new At(0,0,j,ee);let ge=!1;const Ge=new ng;let H=!1,te=!1;const ue=new mt,ne=new k,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return T===null?J:1}let N=r;function Ze(M,U){return n.getContext(M,U)}try{const M={alpha:!0,depth:o,stencil:i,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bd}`),n.addEventListener("webglcontextlost",L,!1),n.addEventListener("webglcontextrestored",$,!1),n.addEventListener("webglcontextcreationerror",X,!1),N===null){const U="webgl2";if(N=Ze(U,M),N===null)throw Ze(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let we,$e,Se,Oe,Le,ke,at,R,y,B,q,K,Q,ve,ce,le,Ce,re,_e,ze,xe,he,Pe,Fe;function ut(){we=new dS(N),we.init(),he=new YM(N,we),$e=new oS(N,we,e,he),Se=new XM(N),Oe=new pS(N),Le=new LM,ke=new jM(N,we,Se,Le,$e,he,Oe),at=new sS(g),R=new uS(g),y=new x1(N),Pe=new nS(N,y),B=new fS(N,y,Oe,Pe),q=new gS(N,B,y,Oe),_e=new mS(N,$e,ke),le=new iS(Le),K=new bM(g,at,R,we,$e,Pe,le),Q=new tE(g,Le),ve=new UM,ce=new zM(we),re=new tS(g,at,R,Se,q,f,l),Ce=new WM(g,q,$e),Fe=new nE(N,Oe,$e,Se),ze=new rS(N,we,Oe),xe=new hS(N,we,Oe),Oe.programs=K.programs,g.capabilities=$e,g.extensions=we,g.properties=Le,g.renderLists=ve,g.shadowMap=Ce,g.state=Se,g.info=Oe}ut();const be=new JM(g,N);this.xr=be,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=we.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=we.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(j,ee,!1))},this.getSize=function(M){return M.set(j,ee)},this.setSize=function(M,U,z=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,ee=U,n.width=Math.floor(M*J),n.height=Math.floor(U*J),z===!0&&(n.style.width=M+"px",n.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(j*J,ee*J).floor()},this.setDrawingBufferSize=function(M,U,z){j=M,ee=U,J=z,n.width=Math.floor(M*z),n.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(G)},this.setViewport=function(M,U,z,F){M.isVector4?G.set(M.x,M.y,M.z,M.w):G.set(M,U,z,F),Se.viewport(x.copy(G).multiplyScalar(J).round())},this.getScissor=function(M){return M.copy(oe)},this.setScissor=function(M,U,z,F){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,U,z,F),Se.scissor(I.copy(oe).multiplyScalar(J).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(M){Se.setScissorTest(ge=M)},this.setOpaqueSort=function(M){P=M},this.setTransparentSort=function(M){V=M},this.getClearColor=function(M){return M.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(M=!0,U=!0,z=!0){let F=0;if(M){let O=!1;if(T!==null){const ae=T.texture.format;O=ae===W0||ae===G0||ae===V0}if(O){const ae=T.texture.type,pe=ae===kr||ae===gi||ae===k0||ae===Ss||ae===B0||ae===H0,me=re.getClearColor(),ye=re.getClearAlpha(),Me=me.r,Te=me.g,De=me.b;pe?(m[0]=Me,m[1]=Te,m[2]=De,m[3]=ye,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=Me,v[1]=Te,v[2]=De,v[3]=ye,N.clearBufferiv(N.COLOR,0,v))}else F|=N.COLOR_BUFFER_BIT}U&&(F|=N.DEPTH_BUFFER_BIT),z&&(F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",L,!1),n.removeEventListener("webglcontextrestored",$,!1),n.removeEventListener("webglcontextcreationerror",X,!1),ve.dispose(),ce.dispose(),Le.dispose(),at.dispose(),R.dispose(),q.dispose(),Pe.dispose(),Fe.dispose(),K.dispose(),be.dispose(),be.removeEventListener("sessionstart",Xe),be.removeEventListener("sessionend",Ln),kt.stop()};function L(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=Oe.autoReset,U=Ce.enabled,z=Ce.autoUpdate,F=Ce.needsUpdate,O=Ce.type;ut(),Oe.autoReset=M,Ce.enabled=U,Ce.autoUpdate=z,Ce.needsUpdate=F,Ce.type=O}function X(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function se(M){const U=M.target;U.removeEventListener("dispose",se),de(U)}function de(M){Ve(M),Le.remove(M)}function Ve(M){const U=Le.get(M).programs;U!==void 0&&(U.forEach(function(z){K.releaseProgram(z)}),M.isShaderMaterial&&K.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,F,O,ae){U===null&&(U=Ne);const pe=O.isMesh&&O.matrixWorld.determinant()<0,me=ug(M,U,z,F,O);Se.setMaterial(F,pe);let ye=z.index,Me=1;if(F.wireframe===!0){if(ye=B.getWireframeAttribute(z),ye===void 0)return;Me=2}const Te=z.drawRange,De=z.attributes.position;let ft=Te.start*Me,bt=(Te.start+Te.count)*Me;ae!==null&&(ft=Math.max(ft,ae.start*Me),bt=Math.min(bt,(ae.start+ae.count)*Me)),ye!==null?(ft=Math.max(ft,0),bt=Math.min(bt,ye.count)):De!=null&&(ft=Math.max(ft,0),bt=Math.min(bt,De.count));const Jt=bt-ft;if(Jt<0||Jt===1/0)return;Pe.setup(O,F,me,z,ye);let Gn,We=ze;if(ye!==null&&(Gn=y.get(ye),We=xe,We.setIndex(Gn)),O.isMesh)F.wireframe===!0?(Se.setLineWidth(F.wireframeLinewidth*Ie()),We.setMode(N.LINES)):We.setMode(N.TRIANGLES);else if(O.isLine){let Ee=F.linewidth;Ee===void 0&&(Ee=1),Se.setLineWidth(Ee*Ie()),O.isLineSegments?We.setMode(N.LINES):O.isLineLoop?We.setMode(N.LINE_LOOP):We.setMode(N.LINE_STRIP)}else O.isPoints?We.setMode(N.POINTS):O.isSprite&&We.setMode(N.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?We.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):We.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)We.renderInstances(ft,Jt,O.count);else if(z.isInstancedBufferGeometry){const Ee=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ei=Math.min(z.instanceCount,Ee);We.renderInstances(ft,Jt,Ei)}else We.render(ft,Jt)};function Qe(M,U,z){M.transparent===!0&&M.side===Qn&&M.forceSinglePass===!1?(M.side=Qt,M.needsUpdate=!0,Rs(M,U,z),M.side=Or,M.needsUpdate=!0,Rs(M,U,z),M.side=Qn):Rs(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),p=ce.get(z),p.init(U),_.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==z&&M.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(g._useLegacyLights);const F=new Set;return M.traverse(function(O){const ae=O.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const me=ae[pe];Qe(me,z,O),F.add(me)}else Qe(ae,z,O),F.add(ae)}),_.pop(),p=null,F},this.compileAsync=function(M,U,z=null){const F=this.compile(M,U,z);return new Promise(O=>{function ae(){if(F.forEach(function(pe){Le.get(pe).currentProgram.isReady()&&F.delete(pe)}),F.size===0){O(M);return}setTimeout(ae,10)}we.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let lt=null;function Pt(M){lt&&lt(M)}function Xe(){kt.stop()}function Ln(){kt.start()}const kt=new rg;kt.setAnimationLoop(Pt),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(M){lt=M,be.setAnimationLoop(M),M===null?kt.stop():kt.start()},be.addEventListener("sessionstart",Xe),be.addEventListener("sessionend",Ln),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(U),U=be.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,U,T),p=ce.get(M,_.length),p.init(U),_.push(p),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ge.setFromProjectionMatrix(ue),te=this.localClippingEnabled,H=le.init(this.clippingPlanes,te),w=ve.get(M,u.length),w.init(),u.push(w),Fd(M,U,0,g.sortObjects),w.finish(),g.sortObjects===!0&&w.sort(P,V);const z=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1;z&&re.addToRenderList(w,M),this.info.render.frame++,H===!0&&le.beginShadows();const F=p.state.shadowsArray;Ce.render(F,M,U),H===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=w.opaque,ae=w.transmissive;if(p.setupLights(g._useLegacyLights),U.isArrayCamera){const pe=U.cameras;if(ae.length>0)for(let me=0,ye=pe.length;me<ye;me++){const Me=pe[me];kd(O,ae,M,Me)}z&&re.render(M);for(let me=0,ye=pe.length;me<ye;me++){const Me=pe[me];Od(w,M,Me,Me.viewport)}}else ae.length>0&&kd(O,ae,M,U),z&&re.render(M),Od(w,M,U);T!==null&&(ke.updateMultisampleRenderTarget(T),ke.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(g,M,U),Pe.resetDefaultState(),b=-1,E=null,_.pop(),_.length>0?(p=_[_.length-1],H===!0&&le.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?w=u[u.length-1]:w=null};function Fd(M,U,z,F){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ge.intersectsSprite(M)){F&&ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ue);const pe=q.update(M),me=M.material;me.visible&&w.push(M,pe,me,z,ne.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ge.intersectsObject(M))){const pe=q.update(M),me=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ne.copy(M.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ne.copy(pe.boundingSphere.center)),ne.applyMatrix4(M.matrixWorld).applyMatrix4(ue)),Array.isArray(me)){const ye=pe.groups;for(let Me=0,Te=ye.length;Me<Te;Me++){const De=ye[Me],ft=me[De.materialIndex];ft&&ft.visible&&w.push(M,pe,ft,z,ne.z,De)}}else me.visible&&w.push(M,pe,me,z,ne.z,null)}}const ae=M.children;for(let pe=0,me=ae.length;pe<me;pe++)Fd(ae[pe],U,z,F)}function Od(M,U,z,F){const O=M.opaque,ae=M.transmissive,pe=M.transparent;p.setupLightsView(z),H===!0&&le.setGlobalState(g.clippingPlanes,z),F&&Se.viewport(x.copy(F)),O.length>0&&As(O,U,z),ae.length>0&&As(ae,U,z),pe.length>0&&As(pe,U,z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function kd(M,U,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new _o(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?xl:kr,minFilter:ao,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ae=p.state.transmissionRenderTarget[F.id],pe=F.viewport||x;ae.setSize(pe.z,pe.w);const me=g.getRenderTarget();g.setRenderTarget(ae),g.getClearColor(D),Y=g.getClearAlpha(),Y<1&&g.setClearColor(16777215,.5),g.clear();const ye=g.toneMapping;g.toneMapping=Nr;const Me=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),H===!0&&le.setGlobalState(g.clippingPlanes,F),As(M,z,F),ke.updateMultisampleRenderTarget(ae),ke.updateRenderTargetMipmap(ae),we.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let De=0,ft=U.length;De<ft;De++){const bt=U[De],Jt=bt.object,Gn=bt.geometry,We=bt.material,Ee=bt.group;if(We.side===Qn&&Jt.layers.test(F.layers)){const Ei=We.side;We.side=Qt,We.needsUpdate=!0,zd(Jt,z,F,Gn,We,Ee),We.side=Ei,We.needsUpdate=!0,Te=!0}}Te===!0&&(ke.updateMultisampleRenderTarget(ae),ke.updateRenderTargetMipmap(ae))}g.setRenderTarget(me),g.setClearColor(D,Y),Me!==void 0&&(F.viewport=Me),g.toneMapping=ye}function As(M,U,z){const F=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ae=M.length;O<ae;O++){const pe=M[O],me=pe.object,ye=pe.geometry,Me=F===null?pe.material:F,Te=pe.group;me.layers.test(z.layers)&&zd(me,U,z,ye,Me,Te)}}function zd(M,U,z,F,O,ae){M.onBeforeRender(g,U,z,F,O,ae),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(g,U,z,F,M,ae),O.transparent===!0&&O.side===Qn&&O.forceSinglePass===!1?(O.side=Qt,O.needsUpdate=!0,g.renderBufferDirect(z,U,F,O,M,ae),O.side=Or,O.needsUpdate=!0,g.renderBufferDirect(z,U,F,O,M,ae),O.side=Qn):g.renderBufferDirect(z,U,F,O,M,ae),M.onAfterRender(g,U,z,F,O,ae)}function Rs(M,U,z){U.isScene!==!0&&(U=Ne);const F=Le.get(M),O=p.state.lights,ae=p.state.shadowsArray,pe=O.state.version,me=K.getParameters(M,O.state,ae,U,z),ye=K.getProgramCacheKey(me);let Me=F.programs;F.environment=M.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(M.isMeshStandardMaterial?R:at).get(M.envMap||F.environment),F.envMapRotation=F.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Me===void 0&&(M.addEventListener("dispose",se),Me=new Map,F.programs=Me);let Te=Me.get(ye);if(Te!==void 0){if(F.currentProgram===Te&&F.lightsStateVersion===pe)return Hd(M,me),Te}else me.uniforms=K.getUniforms(M),M.onBuild(z,me,g),M.onBeforeCompile(me,g),Te=K.acquireProgram(me,ye),Me.set(ye,Te),F.uniforms=me.uniforms;const De=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=le.uniform),Hd(M,me),F.needsLights=fg(M),F.lightsStateVersion=pe,F.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),F.currentProgram=Te,F.uniformsList=null,Te}function Bd(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Aa.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Hd(M,U){const z=Le.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function ug(M,U,z,F,O){U.isScene!==!0&&(U=Ne),ke.resetTextureUnits();const ae=U.fog,pe=F.isMeshStandardMaterial?U.environment:null,me=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Gr,ye=(F.isMeshStandardMaterial?R:at).get(F.envMap||pe),Me=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Te=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),De=!!z.morphAttributes.position,ft=!!z.morphAttributes.normal,bt=!!z.morphAttributes.color;let Jt=Nr;F.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Jt=g.toneMapping);const Gn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,We=Gn!==void 0?Gn.length:0,Ee=Le.get(F),Ei=p.state.lights;if(H===!0&&(te===!0||M!==E)){const un=M===E&&F.id===b;le.setState(F,M,un)}let nt=!1;F.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ei.state.version||Ee.outputColorSpace!==me||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==ye||F.fog===!0&&Ee.fog!==ae||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==le.numPlanes||Ee.numIntersection!==le.numIntersection)||Ee.vertexAlphas!==Me||Ee.vertexTangents!==Te||Ee.morphTargets!==De||Ee.morphNormals!==ft||Ee.morphColors!==bt||Ee.toneMapping!==Jt||Ee.morphTargetsCount!==We)&&(nt=!0):(nt=!0,Ee.__version=F.version);let Wr=Ee.currentProgram;nt===!0&&(Wr=Rs(F,U,O));let Vd=!1,Ti=!1,Tl=!1;const Lt=Wr.getUniforms(),cr=Ee.uniforms;if(Se.useProgram(Wr.program)&&(Vd=!0,Ti=!0,Tl=!0),F.id!==b&&(b=F.id,Ti=!0),Vd||E!==M){Lt.setValue(N,"projectionMatrix",M.projectionMatrix),Lt.setValue(N,"viewMatrix",M.matrixWorldInverse);const un=Lt.map.cameraPosition;un!==void 0&&un.setValue(N,ne.setFromMatrixPosition(M.matrixWorld)),$e.logarithmicDepthBuffer&&Lt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Lt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Ti=!0,Tl=!0)}if(O.isSkinnedMesh){Lt.setOptional(N,O,"bindMatrix"),Lt.setOptional(N,O,"bindMatrixInverse");const un=O.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Lt.setValue(N,"boneTexture",un.boneTexture,ke))}O.isBatchedMesh&&(Lt.setOptional(N,O,"batchingTexture"),Lt.setValue(N,"batchingTexture",O._matricesTexture,ke));const Al=z.morphAttributes;if((Al.position!==void 0||Al.normal!==void 0||Al.color!==void 0)&&_e.update(O,z,Wr),(Ti||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,Lt.setValue(N,"receiveShadow",O.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(cr.envMap.value=ye,cr.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&U.environment!==null&&(cr.envMapIntensity.value=U.environmentIntensity),Ti&&(Lt.setValue(N,"toneMappingExposure",g.toneMappingExposure),Ee.needsLights&&dg(cr,Tl),ae&&F.fog===!0&&Q.refreshFogUniforms(cr,ae),Q.refreshMaterialUniforms(cr,F,J,ee,p.state.transmissionRenderTarget[M.id]),Aa.upload(N,Bd(Ee),cr,ke)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Aa.upload(N,Bd(Ee),cr,ke),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Lt.setValue(N,"center",O.center),Lt.setValue(N,"modelViewMatrix",O.modelViewMatrix),Lt.setValue(N,"normalMatrix",O.normalMatrix),Lt.setValue(N,"modelMatrix",O.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const un=F.uniformsGroups;for(let Rl=0,hg=un.length;Rl<hg;Rl++){const Gd=un[Rl];Fe.update(Gd,Wr),Fe.bind(Gd,Wr)}}return Wr}function dg(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function fg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,U,z){Le.get(M.texture).__webglTexture=U,Le.get(M.depthTexture).__webglTexture=z;const F=Le.get(M);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=z===void 0,F.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const z=Le.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,z=0){T=M,C=U,A=z;let F=!0,O=null,ae=!1,pe=!1;if(M){const ye=Le.get(M);ye.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(N.FRAMEBUFFER,null),F=!1):ye.__webglFramebuffer===void 0?ke.setupRenderTarget(M):ye.__hasExternalTextures&&ke.rebindTextures(M,Le.get(M.texture).__webglTexture,Le.get(M.depthTexture).__webglTexture);const Me=M.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const Te=Le.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?O=Te[U][z]:O=Te[U],ae=!0):M.samples>0&&ke.useMultisampledRTT(M)===!1?O=Le.get(M).__webglMultisampledFramebuffer:Array.isArray(Te)?O=Te[z]:O=Te,x.copy(M.viewport),I.copy(M.scissor),W=M.scissorTest}else x.copy(G).multiplyScalar(J).floor(),I.copy(oe).multiplyScalar(J).floor(),W=ge;if(Se.bindFramebuffer(N.FRAMEBUFFER,O)&&F&&Se.drawBuffers(M,O),Se.viewport(x),Se.scissor(I),Se.setScissorTest(W),ae){const ye=Le.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,z)}else if(pe){const ye=Le.get(M.texture),Me=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.__webglTexture,z||0,Me)}b=-1},this.readRenderTargetPixels=function(M,U,z,F,O,ae,pe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(me=me[pe]),me){Se.bindFramebuffer(N.FRAMEBUFFER,me);try{const ye=M.texture,Me=ye.format,Te=ye.type;if(!$e.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-F&&z>=0&&z<=M.height-O&&N.readPixels(U,z,F,O,he.convert(Me),he.convert(Te),ae)}finally{const ye=T!==null?Le.get(T).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(M,U,z=0){const F=Math.pow(2,-z),O=Math.floor(U.image.width*F),ae=Math.floor(U.image.height*F);ke.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,M.x,M.y,O,ae),Se.unbindTexture()},this.copyTextureToTexture=function(M,U,z,F=0){const O=U.image.width,ae=U.image.height,pe=he.convert(z.format),me=he.convert(z.type);ke.setTexture2D(z,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,M.x,M.y,O,ae,pe,me,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,pe,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,F,M.x,M.y,pe,me,U.image),F===0&&z.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(M,U,z,F,O=0){const ae=M.max.x-M.min.x,pe=M.max.y-M.min.y,me=M.max.z-M.min.z,ye=he.convert(F.format),Me=he.convert(F.type);let Te;if(F.isData3DTexture)ke.setTexture3D(F,0),Te=N.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)ke.setTexture2DArray(F,0),Te=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const De=N.getParameter(N.UNPACK_ROW_LENGTH),ft=N.getParameter(N.UNPACK_IMAGE_HEIGHT),bt=N.getParameter(N.UNPACK_SKIP_PIXELS),Jt=N.getParameter(N.UNPACK_SKIP_ROWS),Gn=N.getParameter(N.UNPACK_SKIP_IMAGES),We=z.isCompressedTexture?z.mipmaps[O]:z.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,We.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,We.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),z.isDataTexture||z.isData3DTexture?N.texSubImage3D(Te,O,U.x,U.y,U.z,ae,pe,me,ye,Me,We.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,O,U.x,U.y,U.z,ae,pe,me,ye,We.data):N.texSubImage3D(Te,O,U.x,U.y,U.z,ae,pe,me,ye,Me,We),N.pixelStorei(N.UNPACK_ROW_LENGTH,De),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft),N.pixelStorei(N.UNPACK_SKIP_PIXELS,bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Jt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Gn),O===0&&F.generateMipmaps&&N.generateMipmap(Te),Se.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?ke.setTextureCube(M,0):M.isData3DTexture?ke.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ke.setTexture2DArray(M,0):ke.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Se.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ld?"display-p3":"srgb",n.unpackColorSpace=Ye.workingColorSpace===yl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class oE extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xp=new mt;class iE{constructor(e,n,r=0,o=1/0){this.ray=new $0(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new Ud,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return xp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xp),this}intersectObject(e,n=!0,r=[]){return Iu(e,this,r,n),r.sort(yp),r}intersectObjects(e,n=!0,r=[]){for(let o=0,i=e.length;o<i;o++)Iu(e[o],this,r,n);return r.sort(yp),r}}function yp(t,e){return t.distance-e.distance}function Iu(t,e,n,r){if(t.layers.test(e.layers)&&t.raycast(e,n),r===!0){const o=t.children;for(let i=0,s=o.length;i<s;i++)Iu(o[i],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);function sE(t,e){const n=document.createElement("canvas"),r=n.getContext("2d");n.width=300,n.height=300,r.fillStyle=t,r.fillRect(0,0,n.width,n.height),r.font="bold 200px verdana",r.fillStyle="white",r.strokeStyle="#0000009f",r.lineWidth=8,r.textAlign="center",r.textBaseline="middle",r.fillText(e,n.width/2,n.height/2),r.strokeText(e,n.width/2,n.height/2);const o=new Vt(n);return o.needsUpdate=!0,new Nd({map:o})}const Uc=1,aE=["#4169E1","#2ECC71","#DC3545","#FBA020","#8E44AD","#FFFF00"];function lE(t,e,n,r){const o=new Si(Uc,Uc,Uc),i=[];for(let a=0;a<6;a++)i.push(sE(aE[a],r[a]));const s=new zn(o,i);return s.position.set(t,e,n),s}const cE=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],Nc=[[-2,1,2],[0,1,2],[2,1,2],[-2,-1,2],[0,-1,2],[2,-1,2]],uE=t=>{const e=t.indices,n=Et.useRef(null),r=Et.useRef(null),o=Et.useRef(null),i=Et.useRef(null),s=Et.useRef(null),a=Et.useRef(new He),[l,c]=Et.useState(!1),d=Et.useRef(null),[h,f]=Et.useState(!1);return Et.useEffect(()=>{const m=[];console.log("again");for(let C=0;C<6;C++){const A=[],T=C*6;for(let E=0;E<6;E++){const x=cE[e[T+E]];A.push(x)}const b=lE(Nc[C][0],Nc[C][1],Nc[C][2],A);b.name="cube-"+C,m.push(b)}const w=n.current.clientWidth,p=n.current.clientHeight;r.current=new oE,o.current=new pn(75,w/p,.1,1e3),o.current.position.z=8,i.current=new rE({canvas:n.current}),i.current.setSize(w,p),s.current=new iE,m.forEach(C=>r.current.add(C));const u=C=>{const A=C.clientX/window.innerWidth*2-1,T=-(C.clientY/window.innerHeight*2)+1;s.current.setFromCamera(new He(A,T),o.current);const b=s.current.intersectObjects(m);b.length>0&&(d.current=b[0].object),a.current.x=C.clientX,a.current.y=C.clientY},_=()=>{d.current=null,f(!1)},g=C=>{const A=C.clientX/window.innerWidth*2-1,T=-(C.clientY/window.innerHeight*2)+1;if(s.current.setFromCamera(new He(A,T),o.current),s.current.intersectObjects(m).length>0?c(!0):c(!1),!d.current)return;f(!0);const E=C.clientX-a.current.x,x=C.clientY-a.current.y;d.current.rotation.x+=x*.03,d.current.rotation.y+=E*.03,a.current.x=C.clientX,a.current.y=C.clientY};n.current.addEventListener("mousedown",u),n.current.addEventListener("mousemove",g),n.current.addEventListener("mouseup",_);const S=()=>{requestAnimationFrame(S),i.current.render(r.current,o.current)};return S(),()=>{n.current.removeEventListener("mousedown",u),n.current.removeEventListener("mouseup",_),n.current.removeEventListener("mousemove",g)}},[]),Tt.jsx("canvas",{className:(h?"grabbing":"")+" "+(l?"grab":""),id:"scene",ref:n})};function dE(t){const e=t.data,n=e.rainbow,r=e.mono,[o,i]=Et.useState(!1),[s,a]=Et.useState(!1),[l,c]=Et.useState(Hv(n.words)),[d,h]=Et.useState(Bv(r.words)),f=()=>{i(!o)},m=()=>{a(!s)};return Tt.jsxs("div",{className:"big-container",children:[Tt.jsx(uE,{indices:e.indices}),Tt.jsxs("div",{className:"side-panel left-panel",children:[Tt.jsx("button",{id:"mono-btn",className:"panel-btn "+(o?"btn-toggled":"btn-untoggled"),onClick:()=>f(),children:"Mono"}),Tt.jsx("div",{id:"mono-words",className:o?"word-container":"hidden",children:d})]}),Tt.jsx("span",{id:"left-extra",children:r.total}),Tt.jsxs("div",{className:"side-panel right-panel",children:[Tt.jsx("button",{id:"rainbow-btn",className:"panel-btn "+(s?"btn-toggled":"btn-untoggled"),onClick:()=>m(),children:"Rainbow"}),Tt.jsx("div",{id:"rainbow-words",className:s?"word-container":"hidden",children:l})]}),Tt.jsx("span",{id:"right-extra",children:n.total})]})}const fE=[20,8,0,14,14,8,22,19,13,17,25,11,2,13,21,6,19,12,4,7,18,11,3,17,23,1,5,4,15,18,0,4,16,24,10,9],hE={total:91,words:[["ace","aw","awe","ax","axe","caw","cue","eau","ex","wax","we"],["be","bent","bet","bin","bit","bite","en","he","hen","hi","hie","hint","hit","in","it","neb","net","nib","nit","nth","the","then","thin","thine","ti","tie","tin","tine"],["an","as","fa","fan","van","vas"],["ego","el","erg","ergo","glory","go","gore","gory","grey","gyro","leg","log","loge","logy","lore","lory","lye","lyre","ogle","ogre","ole","or","ore","orgy","re","rely","roe","role","rye","ye","yore"],["do","dot","opt","pod","pot","to","top"],["is","ism","mi","mil","rim","si","sir","slim"]]},pE={total:1986,words:[{word:"ab",colors:"01"},{word:"abert",colors:"21034"},{word:"abet",colors:"2104"},{word:"able",colors:"2150"},{word:"ably",colors:"2153"},{word:"abort",colors:"01354"},{word:"ace",colors:"201"},{word:"ach",colors:"201"},{word:"ache",colors:"2013"},{word:"achy",colors:"2013"},{word:"acre",colors:"2031"},{word:"act",colors:"201"},{word:"acted",colors:"20134"},{word:"ad",colors:"04"},{word:"ade",colors:"043"},{word:"adit",colors:"0451"},{word:"ado",colors:"043"},{word:"aeon",colors:"0341"},{word:"aft",colors:"021"},{word:"agar",colors:"0325"},{word:"age",colors:"230"},{word:"aged",colors:"2314"},{word:"ages",colors:"2305"},{word:"ago",colors:"034"},{word:"ah",colors:"01"},{word:"aha",colors:"012"},{word:"ahem",colors:"0135"},{word:"ai",colors:"01"},{word:"aid",colors:"014"},{word:"aide",colors:"0143"},{word:"ail",colors:"013"},{word:"aim",colors:"015"},{word:"air",colors:"013"},{word:"aisle",colors:"01253"},{word:"ait",colors:"014"},{word:"alas",colors:"0325"},{word:"alate",colors:"05243"},{word:"alb",colors:"031"},{word:"ale",colors:"250"},{word:"alee",colors:"2501"},{word:"alga",colors:"0532"},{word:"alive",colors:"05123"},{word:"all",colors:"035"},{word:"aloes",colors:"05432"},{word:"aloft",colors:"03421"},{word:"alone",colors:"05413"},{word:"alp",colors:"034"},{word:"alpha",colors:"05412"},{word:"also",colors:"0523"},{word:"althea",colors:"054132"},{word:"altho",colors:"05413"},{word:"alto",colors:"0314"},{word:"am",colors:"05"},{word:"amah",colors:"0521"},{word:"amaze",colors:"05243"},{word:"amber",colors:"25103"},{word:"ameer",colors:"25013"},{word:"amen",colors:"0532"},{word:"amend",colors:"05324"},{word:"amid",colors:"0514"},{word:"amide",colors:"05143"},{word:"amir",colors:"0513"},{word:"amp",colors:"054"},{word:"ampere",colors:"254031"},{word:"ample",colors:"25431"},{word:"an",colors:"01"},{word:"anal",colors:"0123"},{word:"and",colors:"014"},{word:"anew",colors:"2130"},{word:"anise",colors:"01523"},{word:"ankle",colors:"21450"},{word:"anon",colors:"0132"},{word:"ant",colors:"024"},{word:"ante",colors:"0243"},{word:"anti",colors:"0241"},{word:"any",colors:"213"},{word:"apart",colors:"04251"},{word:"ape",colors:"240"},{word:"aping",colors:"04123"},{word:"apron",colors:"04531"},{word:"apt",colors:"041"},{word:"arbor",colors:"03145"},{word:"arc",colors:"230"},{word:"arch",colors:"2301"},{word:"are",colors:"230"},{word:"area",colors:"0532"},{word:"arena",colors:"05312"},{word:"arete",colors:"23041"},{word:"argon",colors:"05342"},{word:"argot",colors:"05341"},{word:"arid",colors:"0314"},{word:"ark",colors:"234"},{word:"arm",colors:"035"},{word:"arms",colors:"0352"},{word:"arson",colors:"03241"},{word:"art",colors:"051"},{word:"arty",colors:"2513"},{word:"as",colors:"02"},{word:"ash",colors:"051"},{word:"ashy",colors:"2513"},{word:"ask",colors:"254"},{word:"asp",colors:"024"},{word:"ass",colors:"025"},{word:"aster",colors:"25403"},{word:"astir",colors:"02413"},{word:"at",colors:"01"},{word:"ate",colors:"210"},{word:"atilt",colors:"01534"},{word:"atlas",colors:"01325"},{word:"atom",colors:"0135"},{word:"atop",colors:"0134"},{word:"attar",colors:"01425"},{word:"aver",colors:"0235"},{word:"avert",colors:"02351"},{word:"avid",colors:"0214"},{word:"aw",colors:"20"},{word:"awe",colors:"201"},{word:"awl",colors:"203"},{word:"awry",colors:"2053"},{word:"ax",colors:"20"},{word:"axe",colors:"201"},{word:"axle",colors:"2031"},{word:"aye",colors:"230"},{word:"ayes",colors:"2305"},{word:"baa",colors:"102"},{word:"back",colors:"1204"},{word:"bad",colors:"104"},{word:"badly",colors:"12453"},{word:"bag",colors:"103"},{word:"bagel",colors:"12305"},{word:"bail",colors:"1053"},{word:"bait",colors:"1054"},{word:"bake",colors:"1240"},{word:"baker",colors:"12403"},{word:"bald",colors:"1054"},{word:"bale",colors:"1250"},{word:"balk",colors:"1234"},{word:"ball",colors:"1035"},{word:"balm",colors:"1035"},{word:"ban",colors:"102"},{word:"band",colors:"1024"},{word:"bang",colors:"1023"},{word:"bar",colors:"103"},{word:"bard",colors:"1034"},{word:"bare",colors:"1230"},{word:"bark",colors:"1234"},{word:"barn",colors:"1052"},{word:"baron",colors:"10532"},{word:"bas",colors:"102"},{word:"bast",colors:"1024"},{word:"bat",colors:"104"},{word:"bate",colors:"1240"},{word:"baton",colors:"10432"},{word:"bats",colors:"1042"},{word:"bawdy",colors:"12043"},{word:"bawl",colors:"1203"},{word:"bay",colors:"123"},{word:"be",colors:"10"},{word:"beak",colors:"1024"},{word:"beam",colors:"1025"},{word:"bear",colors:"1023"},{word:"beat",colors:"1024"},{word:"beg",colors:"103"},{word:"begin",colors:"10352"},{word:"being",colors:"10523"},{word:"belay",colors:"10523"},{word:"belt",colors:"1054"},{word:"bent",colors:"1024"},{word:"berm",colors:"1035"},{word:"bet",colors:"104"},{word:"beta",colors:"1042"},{word:"bevy",colors:"1023"},{word:"bey",colors:"103"},{word:"bias",colors:"1502"},{word:"bid",colors:"154"},{word:"bier",colors:"1503"},{word:"big",colors:"153"},{word:"bike",colors:"1540"},{word:"bilk",colors:"1534"},{word:"bin",colors:"152"},{word:"bind",colors:"1524"},{word:"binge",colors:"15230"},{word:"bird",colors:"1534"},{word:"bis",colors:"152"},{word:"bit",colors:"154"},{word:"bite",colors:"1540"},{word:"biz",colors:"154"},{word:"black",colors:"13204"},{word:"blast",colors:"15024"},{word:"blat",colors:"1304"},{word:"bleak",colors:"15024"},{word:"bleat",colors:"15024"},{word:"blink",colors:"13524"},{word:"bloat",colors:"15304"},{word:"bloc",colors:"1530"},{word:"block",colors:"15304"},{word:"bloke",colors:"15340"},{word:"blot",colors:"1534"},{word:"blow",colors:"1340"},{word:"blunt",colors:"13024"},{word:"boa",colors:"130"},{word:"boar",colors:"1305"},{word:"boast",colors:"13024"},{word:"boat",colors:"1304"},{word:"bock",colors:"1304"},{word:"bog",colors:"143"},{word:"bola",colors:"1350"},{word:"bold",colors:"1354"},{word:"bole",colors:"1350"},{word:"bolt",colors:"1354"},{word:"bolts",colors:"13542"},{word:"bon",colors:"132"},{word:"bond",colors:"1324"},{word:"bone",colors:"1320"},{word:"bong",colors:"1423"},{word:"bony",colors:"1423"},{word:"bore",colors:"1430"},{word:"born",colors:"1352"},{word:"bow",colors:"130"},{word:"bowl",colors:"1403"},{word:"boy",colors:"143"},{word:"bra",colors:"130"},{word:"brad",colors:"1304"},{word:"brae",colors:"1320"},{word:"brag",colors:"1503"},{word:"braid",colors:"13054"},{word:"brake",colors:"13240"},{word:"bran",colors:"1502"},{word:"brant",colors:"15024"},{word:"brat",colors:"1304"},{word:"bravo",colors:"15023"},{word:"bray",colors:"1523"},{word:"break",colors:"13024"},{word:"bream",colors:"13025"},{word:"brick",colors:"13504"},{word:"brisk",colors:"13524"},{word:"brogan",colors:"154302"},{word:"bronc",colors:"15320"},{word:"brow",colors:"1530"},{word:"brunt",colors:"15024"},{word:"bud",colors:"104"},{word:"bug",colors:"103"},{word:"bugs",colors:"1032"},{word:"bulk",colors:"1034"},{word:"bull",colors:"1035"},{word:"bum",colors:"105"},{word:"bun",colors:"102"},{word:"bung",colors:"1023"},{word:"bunk",colors:"1024"},{word:"bunt",colors:"1024"},{word:"bur",colors:"103"},{word:"burg",colors:"1053"},{word:"burn",colors:"1052"},{word:"burnt",colors:"10524"},{word:"burr",colors:"1035"},{word:"burst",colors:"10324"},{word:"bury",colors:"1053"},{word:"bus",colors:"102"},{word:"bust",colors:"1024"},{word:"busy",colors:"1023"},{word:"but",colors:"104"},{word:"buy",colors:"103"},{word:"by",colors:"13"},{word:"bye",colors:"130"},{word:"cab",colors:"021"},{word:"cad",colors:"024"},{word:"cadet",colors:"02431"},{word:"cadre",colors:"02431"},{word:"cake",colors:"0243"},{word:"calk",colors:"0234"},{word:"call",colors:"0235"},{word:"cap",colors:"024"},{word:"cape",colors:"0241"},{word:"caper",colors:"02413"},{word:"car",colors:"023"},{word:"card",colors:"0234"},{word:"cards",colors:"02345"},{word:"care",colors:"0231"},{word:"caret",colors:"02531"},{word:"carp",colors:"0234"},{word:"cart",colors:"0251"},{word:"case",colors:"0251"},{word:"cash",colors:"0251"},{word:"cask",colors:"0254"},{word:"cast",colors:"0251"},{word:"cat",colors:"021"},{word:"cater",colors:"02135"},{word:"cedar",colors:"01423"},{word:"cede",colors:"0143"},{word:"cell",colors:"0135"},{word:"cello",colors:"01354"},{word:"chalk",colors:"01254"},{word:"chap",colors:"0124"},{word:"char",colors:"0123"},{word:"chez",colors:"0134"},{word:"chi",colors:"015"},{word:"chien",colors:"01532"},{word:"chin",colors:"0152"},{word:"chink",colors:"01524"},{word:"chip",colors:"0154"},{word:"chirk",colors:"01534"},{word:"chirp",colors:"01534"},{word:"chop",colors:"0134"},{word:"cider",colors:"05413"},{word:"cite",colors:"0513"},{word:"city",colors:"0513"},{word:"clad",colors:"0524"},{word:"clap",colors:"0324"},{word:"clay",colors:"0523"},{word:"clef",colors:"0312"},{word:"clink",colors:"03124"},{word:"clip",colors:"0314"},{word:"clips",colors:"05142"},{word:"clod",colors:"0534"},{word:"clone",colors:"03421"},{word:"close",colors:"05321"},{word:"clot",colors:"0341"},{word:"cloy",colors:"0543"},{word:"cob",colors:"031"},{word:"cod",colors:"034"},{word:"code",colors:"0341"},{word:"coed",colors:"0314"},{word:"cold",colors:"0354"},{word:"cole",colors:"0351"},{word:"colt",colors:"0431"},{word:"con",colors:"032"},{word:"cone",colors:"0321"},{word:"conk",colors:"0324"},{word:"cop",colors:"034"},{word:"cope",colors:"0341"},{word:"copse",colors:"03421"},{word:"core",colors:"0351"},{word:"cork",colors:"0354"},{word:"corn",colors:"0352"},{word:"corny",colors:"04523"},{word:"cost",colors:"0321"},{word:"costs",colors:"03215"},{word:"cosy",colors:"0423"},{word:"cot",colors:"031"},{word:"cote",colors:"0413"},{word:"coy",colors:"043"},{word:"crab",colors:"0321"},{word:"crape",colors:"03241"},{word:"crash",colors:"03251"},{word:"crate",colors:"05213"},{word:"craze",colors:"05241"},{word:"crazy",colors:"05243"},{word:"creak",colors:"05324"},{word:"crib",colors:"0351"},{word:"cried",colors:"03514"},{word:"cries",colors:"03512"},{word:"crisp",colors:"03124"},{word:"croft",colors:"05321"},{word:"crone",colors:"05321"},{word:"crony",colors:"05423"},{word:"crop",colors:"0534"},{word:"cross",colors:"03425"},{word:"cry",colors:"053"},{word:"crypt",colors:"05341"},{word:"cyst",colors:"0321"},{word:"czar",colors:"0425"},{word:"da",colors:"40"},{word:"dab",colors:"401"},{word:"daft",colors:"4021"},{word:"dais",colors:"4015"},{word:"dale",colors:"4053"},{word:"dam",colors:"405"},{word:"dame",colors:"4053"},{word:"damn",colors:"4052"},{word:"dang",colors:"4023"},{word:"darb",colors:"4031"},{word:"dare",colors:"4231"},{word:"darn",colors:"4031"},{word:"data",colors:"4012"},{word:"date",colors:"4013"},{word:"dative",colors:"401523"},{word:"davit",colors:"40251"},{word:"dawn",colors:"4201"},{word:"day",colors:"423"},{word:"deal",colors:"4305"},{word:"dean",colors:"4301"},{word:"dear",colors:"4123"},{word:"decal",colors:"41025"},{word:"deci",colors:"4301"},{word:"deem",colors:"4135"},{word:"deice",colors:"41503"},{word:"deign",colors:"41532"},{word:"dele",colors:"4153"},{word:"delve",colors:"41523"},{word:"demon",colors:"41532"},{word:"demur",colors:"41503"},{word:"den",colors:"431"},{word:"denim",colors:"43215"},{word:"devil",colors:"43215"},{word:"dew",colors:"410"},{word:"dial",colors:"4105"},{word:"dice",colors:"4103"},{word:"die",colors:"413"},{word:"diet",colors:"4531"},{word:"dig",colors:"413"},{word:"digs",colors:"4135"},{word:"dim",colors:"415"},{word:"dime",colors:"4153"},{word:"din",colors:"412"},{word:"dine",colors:"4123"},{word:"ding",colors:"4123"},{word:"dire",colors:"4531"},{word:"disc",colors:"4150"},{word:"diva",colors:"4120"},{word:"dive",colors:"4123"},{word:"diver",colors:"45213"},{word:"do",colors:"43"},{word:"doe",colors:"431"},{word:"does",colors:"4315"},{word:"dolce",colors:"43501"},{word:"dole",colors:"4351"},{word:"dome",colors:"4351"},{word:"don",colors:"431"},{word:"done",colors:"4321"},{word:"donna",colors:"43120"},{word:"dose",colors:"4351"},{word:"dost",colors:"4351"},{word:"dot",colors:"431"},{word:"dove",colors:"4321"},{word:"down",colors:"4301"},{word:"downs",colors:"43015"},{word:"drab",colors:"4301"},{word:"draf",colors:"4302"},{word:"drain",colors:"43051"},{word:"dram",colors:"4305"},{word:"drama",colors:"43052"},{word:"dream",colors:"43125"},{word:"drive",colors:"43521"},{word:"drub",colors:"4301"},{word:"drum",colors:"4305"},{word:"du",colors:"40"},{word:"dub",colors:"401"},{word:"due",colors:"401"},{word:"duel",colors:"4015"},{word:"dues",colors:"4015"},{word:"duet",colors:"4031"},{word:"dug",colors:"403"},{word:"duly",colors:"4053"},{word:"dumb",colors:"4051"},{word:"dun",colors:"401"},{word:"dune",colors:"4013"},{word:"dung",colors:"4023"},{word:"dust",colors:"4051"},{word:"dusty",colors:"40513"},{word:"duty",colors:"4013"},{word:"each",colors:"3201"},{word:"eagle",colors:"02351"},{word:"ear",colors:"023"},{word:"earn",colors:"0231"},{word:"ease",colors:"0251"},{word:"east",colors:"0251"},{word:"easy",colors:"0253"},{word:"eat",colors:"021"},{word:"eats",colors:"0215"},{word:"ebony",colors:"01423"},{word:"echo",colors:"3014"},{word:"edema",colors:"14352"},{word:"edict",colors:"34501"},{word:"edit",colors:"3451"},{word:"eek",colors:"034"},{word:"eel",colors:"015"},{word:"eft",colors:"021"},{word:"egad",colors:"1324"},{word:"ego",colors:"034"},{word:"el",colors:"05"},{word:"elan",colors:"0521"},{word:"eland",colors:"35014"},{word:"eleve",colors:"05123"},{word:"elf",colors:"052"},{word:"elite",colors:"05143"},{word:"elk",colors:"054"},{word:"ell",colors:"135"},{word:"elm",colors:"135"},{word:"elope",colors:"05341"},{word:"else",colors:"1523"},{word:"elude",colors:"15043"},{word:"em",colors:"05"},{word:"embark",colors:"051234"},{word:"emir",colors:"0513"},{word:"emote",colors:"05413"},{word:"empty",colors:"05413"},{word:"emu",colors:"150"},{word:"en",colors:"01"},{word:"encore",colors:"120453"},{word:"end",colors:"314"},{word:"ends",colors:"1245"},{word:"endue",colors:"12403"},{word:"enow",colors:"3140"},{word:"enter",colors:"12435"},{word:"entre",colors:"12453"},{word:"eon",colors:"031"},{word:"epic",colors:"1450"},{word:"epos",colors:"1432"},{word:"era",colors:"032"},{word:"erase",colors:"03251"},{word:"ere",colors:"031"},{word:"erg",colors:"153"},{word:"ergo",colors:"1534"},{word:"erk",colors:"034"},{word:"err",colors:"135"},{word:"ester",colors:"05413"},{word:"eta",colors:"012"},{word:"etat",colors:"0124"},{word:"eve",colors:"021"},{word:"ever",colors:"0213"},{word:"evil",colors:"0215"},{word:"ewe",colors:"103"},{word:"ewer",colors:"1035"},{word:"ex",colors:"10"},{word:"exalt",colors:"10234"},{word:"exam",colors:"1025"},{word:"exist",colors:"10524"},{word:"exit",colors:"1054"},{word:"extol",colors:"10435"},{word:"extra",colors:"10432"},{word:"fa",colors:"20"},{word:"fad",colors:"204"},{word:"fag",colors:"203"},{word:"fagot",colors:"20341"},{word:"fail",colors:"2013"},{word:"fain",colors:"2051"},{word:"fair",colors:"2013"},{word:"faith",colors:"20541"},{word:"fall",colors:"2035"},{word:"fan",colors:"201"},{word:"far",colors:"203"},{word:"farm",colors:"2035"},{word:"faro",colors:"2053"},{word:"fat",colors:"201"},{word:"fed",colors:"214"},{word:"fee",colors:"201"},{word:"feel",colors:"2015"},{word:"feet",colors:"2014"},{word:"fell",colors:"2135"},{word:"felon",colors:"20531"},{word:"felony",colors:"205413"},{word:"felt",colors:"2054"},{word:"femur",colors:"21503"},{word:"fen",colors:"201"},{word:"fern",colors:"2031"},{word:"fete",colors:"2041"},{word:"feud",colors:"2104"},{word:"few",colors:"210"},{word:"fey",colors:"203"},{word:"fez",colors:"204"},{word:"fiat",colors:"2104"},{word:"fie",colors:"210"},{word:"fig",colors:"213"},{word:"file",colors:"2150"},{word:"filet",colors:"21504"},{word:"fill",colors:"2135"},{word:"film",colors:"2135"},{word:"fin",colors:"251"},{word:"final",colors:"25103"},{word:"find",colors:"2514"},{word:"fine",colors:"2510"},{word:"fink",colors:"2514"},{word:"fir",colors:"213"},{word:"fire",colors:"2130"},{word:"firm",colors:"2135"},{word:"firth",colors:"25341"},{word:"fit",colors:"214"},{word:"fitly",colors:"21453"},{word:"flag",colors:"2503"},{word:"flail",colors:"23015"},{word:"flat",colors:"2301"},{word:"fled",colors:"2514"},{word:"flee",colors:"2501"},{word:"fleet",colors:"25014"},{word:"flew",colors:"2310"},{word:"flick",colors:"23104"},{word:"flit",colors:"2314"},{word:"float",colors:"23401"},{word:"flock",colors:"25304"},{word:"floe",colors:"2530"},{word:"flog",colors:"2543"},{word:"flow",colors:"2340"},{word:"flown",colors:"23401"},{word:"flu",colors:"230"},{word:"flue",colors:"2301"},{word:"flume",colors:"23051"},{word:"flunk",colors:"23014"},{word:"flute",colors:"23041"},{word:"fly",colors:"253"},{word:"foal",colors:"2305"},{word:"foam",colors:"2305"},{word:"foe",colors:"230"},{word:"fog",colors:"243"},{word:"fold",colors:"2354"},{word:"folk",colors:"2354"},{word:"fond",colors:"2314"},{word:"for",colors:"235"},{word:"force",colors:"23501"},{word:"fore",colors:"2430"},{word:"forge",colors:"24531"},{word:"fork",colors:"2354"},{word:"form",colors:"2435"},{word:"fort",colors:"2351"},{word:"forte",colors:"23541"},{word:"forty",colors:"24513"},{word:"fowl",colors:"2403"},{word:"frat",colors:"2501"},{word:"free",colors:"2301"},{word:"fret",colors:"2304"},{word:"friar",colors:"23105"},{word:"fried",colors:"23514"},{word:"friz",colors:"2514"},{word:"fro",colors:"253"},{word:"frock",colors:"25304"},{word:"frog",colors:"2543"},{word:"from",colors:"2345"},{word:"frown",colors:"25301"},{word:"froze",colors:"25341"},{word:"frug",colors:"2503"},{word:"fry",colors:"253"},{word:"fudge",colors:"20431"},{word:"fuel",colors:"2013"},{word:"full",colors:"2035"},{word:"fume",colors:"2051"},{word:"fun",colors:"201"},{word:"fund",colors:"2014"},{word:"funk",colors:"2014"},{word:"fur",colors:"203"},{word:"fury",colors:"2053"},{word:"furze",colors:"20541"},{word:"fuze",colors:"2041"},{word:"gab",colors:"301"},{word:"gable",colors:"32150"},{word:"gad",colors:"304"},{word:"gain",colors:"3012"},{word:"gait",colors:"3051"},{word:"gal",colors:"305"},{word:"gala",colors:"3052"},{word:"gale",colors:"3250"},{word:"gaol",colors:"3045"},{word:"gap",colors:"304"},{word:"gape",colors:"3240"},{word:"gar",colors:"305"},{word:"garb",colors:"3051"},{word:"garni",colors:"30521"},{word:"gas",colors:"302"},{word:"gash",colors:"3051"},{word:"gasket",colors:"325401"},{word:"gasp",colors:"3024"},{word:"gat",colors:"301"},{word:"gate",colors:"3210"},{word:"gator",colors:"30145"},{word:"gawk",colors:"3204"},{word:"gaze",colors:"3240"},{word:"gear",colors:"3125"},{word:"gee",colors:"301"},{word:"gene",colors:"3021"},{word:"genie",colors:"30251"},{word:"genus",colors:"31205"},{word:"get",colors:"301"},{word:"geta",colors:"3012"},{word:"gibe",colors:"3510"},{word:"gift",colors:"3521"},{word:"gild",colors:"3154"},{word:"gin",colors:"312"},{word:"gink",colors:"3124"},{word:"gist",colors:"3521"},{word:"git",colors:"351"},{word:"glad",colors:"3504"},{word:"glade",colors:"35241"},{word:"glee",colors:"3501"},{word:"glob",colors:"3541"},{word:"globe",colors:"35410"},{word:"glub",colors:"3501"},{word:"glue",colors:"3501"},{word:"gnash",colors:"32051"},{word:"gnu",colors:"320"},{word:"go",colors:"34"},{word:"goal",colors:"3405"},{word:"goat",colors:"3401"},{word:"gob",colors:"341"},{word:"golf",colors:"3452"},{word:"gone",colors:"3420"},{word:"goner",colors:"34215"},{word:"gore",colors:"3451"},{word:"gosh",colors:"3451"},{word:"got",colors:"341"},{word:"gox",colors:"340"},{word:"grab",colors:"3501"},{word:"graft",colors:"35021"},{word:"grain",colors:"35012"},{word:"grape",colors:"35241"},{word:"graze",colors:"35241"},{word:"grin",colors:"3512"},{word:"grip",colors:"3514"},{word:"groan",colors:"35402"},{word:"groat",colors:"35401"},{word:"grow",colors:"3540"},{word:"grub",colors:"3501"},{word:"guess",colors:"30125"},{word:"gulf",colors:"3052"},{word:"gulp",colors:"3054"},{word:"gun",colors:"302"},{word:"gunk",colors:"3024"},{word:"gush",colors:"3051"},{word:"gust",colors:"3021"},{word:"gut",colors:"301"},{word:"guts",colors:"3012"},{word:"hack",colors:"1204"},{word:"hackle",colors:"120453"},{word:"haft",colors:"1024"},{word:"hag",colors:"103"},{word:"hair",colors:"1053"},{word:"hake",colors:"1243"},{word:"hale",colors:"1053"},{word:"half",colors:"1052"},{word:"halo",colors:"1053"},{word:"halt",colors:"1054"},{word:"halve",colors:"10523"},{word:"ham",colors:"105"},{word:"hame",colors:"1053"},{word:"hang",colors:"1023"},{word:"hangs",colors:"10235"},{word:"haply",colors:"12453"},{word:"hark",colors:"1234"},{word:"harm",colors:"1035"},{word:"harp",colors:"1034"},{word:"hart",colors:"1034"},{word:"has",colors:"105"},{word:"hast",colors:"1054"},{word:"hasty",colors:"12543"},{word:"hat",colors:"104"},{word:"hate",colors:"1043"},{word:"have",colors:"1023"},{word:"haw",colors:"120"},{word:"hawk",colors:"1204"},{word:"hay",colors:"123"},{word:"haze",colors:"1043"},{word:"hazy",colors:"1243"},{word:"he",colors:"13"},{word:"heal",colors:"1305"},{word:"heat",colors:"1304"},{word:"heck",colors:"1304"},{word:"hem",colors:"135"},{word:"hen",colors:"132"},{word:"hew",colors:"130"},{word:"hi",colors:"15"},{word:"hick",colors:"1504"},{word:"hie",colors:"153"},{word:"hike",colors:"1543"},{word:"hint",colors:"1524"},{word:"hip",colors:"154"},{word:"hit",colors:"154"},{word:"hive",colors:"1523"},{word:"ho",colors:"13"},{word:"hoar",colors:"1403"},{word:"hock",colors:"1304"},{word:"hoe",colors:"143"},{word:"hog",colors:"143"},{word:"hole",colors:"1453"},{word:"holy",colors:"1453"},{word:"home",colors:"1453"},{word:"hone",colors:"1423"},{word:"honk",colors:"1324"},{word:"hop",colors:"134"},{word:"host",colors:"1354"},{word:"hot",colors:"134"},{word:"hove",colors:"1423"},{word:"hovel",colors:"14235"},{word:"how",colors:"130"},{word:"hue",colors:"103"},{word:"hug",colors:"103"},{word:"hulk",colors:"1054"},{word:"hum",colors:"105"},{word:"hump",colors:"1054"},{word:"hung",colors:"1023"},{word:"hunk",colors:"1024"},{word:"hunt",colors:"1024"},{word:"hurt",colors:"1034"},{word:"husk",colors:"1054"},{word:"hut",colors:"104"},{word:"hymn",colors:"1352"},{word:"ibs",colors:"512"},{word:"ice",colors:"103"},{word:"iced",colors:"1034"},{word:"icy",colors:"103"},{word:"id",colors:"14"},{word:"idea",colors:"1430"},{word:"ideal",colors:"14305"},{word:"idem",colors:"1435"},{word:"idle",colors:"1453"},{word:"idly",colors:"1453"},{word:"if",colors:"12"},{word:"ilex",colors:"5310"},{word:"ilk",colors:"134"},{word:"ill",colors:"135"},{word:"imp",colors:"154"},{word:"in",colors:"12"},{word:"inane",colors:"51023"},{word:"inch",colors:"5201"},{word:"index",colors:"52410"},{word:"inert",colors:"12354"},{word:"infer",colors:"51203"},{word:"infra",colors:"51230"},{word:"ink",colors:"124"},{word:"inle",colors:"5231"},{word:"inlet",colors:"52314"},{word:"inn",colors:"512"},{word:"inset",colors:"12504"},{word:"inter",colors:"12435"},{word:"ipse",colors:"5421"},{word:"irate",colors:"15043"},{word:"ire",colors:"130"},{word:"irk",colors:"134"},{word:"is",colors:"12"},{word:"isle",colors:"1253"},{word:"islet",colors:"12534"},{word:"ism",colors:"125"},{word:"it",colors:"14"},{word:"its",colors:"142"},{word:"ivy",colors:"123"},{word:"jab",colors:"521"},{word:"jade",colors:"5243"},{word:"jag",colors:"523"},{word:"jane",colors:"5210"},{word:"jape",colors:"5240"},{word:"jar",colors:"523"},{word:"jaw",colors:"520"},{word:"jean",colors:"5021"},{word:"jest",colors:"5321"},{word:"jet",colors:"501"},{word:"jeu",colors:"530"},{word:"jig",colors:"513"},{word:"jilt",colors:"5134"},{word:"jinx",colors:"5120"},{word:"jive",colors:"5120"},{word:"job",colors:"531"},{word:"jog",colors:"543"},{word:"jolt",colors:"5431"},{word:"jot",colors:"531"},{word:"jowl",colors:"5403"},{word:"jug",colors:"503"},{word:"just",colors:"5021"},{word:"jut",colors:"501"},{word:"jute",colors:"5013"},{word:"kale",colors:"4250"},{word:"keel",colors:"4035"},{word:"keen",colors:"4031"},{word:"kef",colors:"402"},{word:"keg",colors:"403"},{word:"ken",colors:"401"},{word:"keno",colors:"4013"},{word:"kerf",colors:"4032"},{word:"kill",colors:"4135"},{word:"kiln",colors:"4132"},{word:"kilt",colors:"4531"},{word:"kin",colors:"412"},{word:"kine",colors:"4120"},{word:"king",colors:"4123"},{word:"kiss",colors:"4125"},{word:"kit",colors:"451"},{word:"kite",colors:"4510"},{word:"knee",colors:"4103"},{word:"kneel",colors:"41035"},{word:"knew",colors:"4130"},{word:"knife",colors:"41520"},{word:"knob",colors:"4231"},{word:"know",colors:"4130"},{word:"la",colors:"30"},{word:"lab",colors:"301"},{word:"lace",colors:"3201"},{word:"lack",colors:"3204"},{word:"lacy",colors:"5203"},{word:"lad",colors:"504"},{word:"laden",colors:"50431"},{word:"lady",colors:"5243"},{word:"lag",colors:"503"},{word:"laid",colors:"5014"},{word:"lain",colors:"3012"},{word:"lake",colors:"5240"},{word:"lam",colors:"305"},{word:"lama",colors:"3052"},{word:"lamb",colors:"3051"},{word:"lame",colors:"3251"},{word:"lamp",colors:"3054"},{word:"land",colors:"5014"},{word:"lane",colors:"5210"},{word:"lank",colors:"3214"},{word:"lap",colors:"304"},{word:"lapel",colors:"32415"},{word:"lapin",colors:"30412"},{word:"last",colors:"3051"},{word:"late",colors:"5240"},{word:"latex",colors:"32410"},{word:"lath",colors:"5041"},{word:"lathe",colors:"50413"},{word:"lave",colors:"5023"},{word:"law",colors:"320"},{word:"lawn",colors:"3201"},{word:"lax",colors:"320"},{word:"lay",colors:"523"},{word:"laze",colors:"3241"},{word:"lea",colors:"502"},{word:"leach",colors:"53201"},{word:"lead",colors:"5304"},{word:"leak",colors:"5024"},{word:"leal",colors:"3125"},{word:"lean",colors:"5021"},{word:"leap",colors:"5024"},{word:"least",colors:"53024"},{word:"led",colors:"514"},{word:"lee",colors:"501"},{word:"leek",colors:"5034"},{word:"lees",colors:"5132"},{word:"left",colors:"5024"},{word:"leg",colors:"503"},{word:"legs",colors:"5132"},{word:"lei",colors:"501"},{word:"lemon",colors:"31542"},{word:"lend",colors:"5314"},{word:"lens",colors:"5312"},{word:"lent",colors:"3124"},{word:"lest",colors:"5124"},{word:"let",colors:"504"},{word:"levee",colors:"50213"},{word:"levy",colors:"5023"},{word:"lex",colors:"310"},{word:"lice",colors:"5103"},{word:"lick",colors:"3104"},{word:"lid",colors:"514"},{word:"lie",colors:"510"},{word:"lief",colors:"5102"},{word:"lien",colors:"3512"},{word:"lies",colors:"5132"},{word:"life",colors:"5120"},{word:"lift",colors:"3124"},{word:"like",colors:"5140"},{word:"lilt",colors:"3154"},{word:"lima",colors:"3150"},{word:"limn",colors:"3152"},{word:"limp",colors:"3154"},{word:"line",colors:"3521"},{word:"link",colors:"3124"},{word:"links",colors:"31245"},{word:"lint",colors:"3124"},{word:"lip",colors:"314"},{word:"lips",colors:"5142"},{word:"lisp",colors:"5124"},{word:"list",colors:"5124"},{word:"lit",colors:"314"},{word:"live",colors:"5120"},{word:"load",colors:"5304"},{word:"loaf",colors:"5302"},{word:"loam",colors:"3405"},{word:"loan",colors:"5301"},{word:"loath",colors:"53041"},{word:"lob",colors:"531"},{word:"lobe",colors:"5310"},{word:"loch",colors:"5301"},{word:"lock",colors:"5304"},{word:"lode",colors:"5341"},{word:"loft",colors:"3421"},{word:"log",colors:"543"},{word:"loge",colors:"5430"},{word:"lone",colors:"5310"},{word:"lop",colors:"534"},{word:"lope",colors:"5340"},{word:"lose",colors:"5321"},{word:"lost",colors:"3451"},{word:"lot",colors:"341"},{word:"love",colors:"5320"},{word:"loves",colors:"34215"},{word:"low",colors:"340"},{word:"lox",colors:"530"},{word:"lug",colors:"503"},{word:"lump",colors:"3054"},{word:"lunk",colors:"3014"},{word:"lust",colors:"3051"},{word:"lusty",colors:"50243"},{word:"lute",colors:"3041"},{word:"lye",colors:"530"},{word:"lynx",colors:"5310"},{word:"ma",colors:"50"},{word:"mad",colors:"504"},{word:"made",colors:"5043"},{word:"madre",colors:"52431"},{word:"maid",colors:"5014"},{word:"maiden",colors:"501432"},{word:"mail",colors:"5013"},{word:"main",colors:"5012"},{word:"maize",colors:"50143"},{word:"make",colors:"5240"},{word:"maker",colors:"52403"},{word:"mal",colors:"503"},{word:"male",colors:"5231"},{word:"malt",colors:"5031"},{word:"man",colors:"502"},{word:"mane",colors:"5023"},{word:"map",colors:"504"},{word:"maple",colors:"52431"},{word:"mar",colors:"503"},{word:"mare",colors:"5230"},{word:"mark",colors:"5234"},{word:"mast",colors:"5021"},{word:"mat",colors:"501"},{word:"mate",colors:"5210"},{word:"mats",colors:"5012"},{word:"maw",colors:"520"},{word:"may",colors:"523"},{word:"maybe",colors:"52310"},{word:"maze",colors:"5240"},{word:"me",colors:"50"},{word:"mead",colors:"5304"},{word:"meal",colors:"5123"},{word:"mean",colors:"5302"},{word:"meat",colors:"5021"},{word:"meaty",colors:"50213"},{word:"media",colors:"53410"},{word:"median",colors:"534102"},{word:"meed",colors:"5134"},{word:"meek",colors:"5034"},{word:"meet",colors:"5031"},{word:"melon",colors:"51342"},{word:"men",colors:"502"},{word:"mend",colors:"5124"},{word:"meno",colors:"5023"},{word:"menu",colors:"5120"},{word:"meow",colors:"5130"},{word:"mere",colors:"5031"},{word:"mesa",colors:"5320"},{word:"met",colors:"501"},{word:"mete",colors:"5013"},{word:"mew",colors:"510"},{word:"mi",colors:"51"},{word:"mid",colors:"514"},{word:"mien",colors:"5102"},{word:"mike",colors:"5140"},{word:"mil",colors:"513"},{word:"milk",colors:"5134"},{word:"mind",colors:"5124"},{word:"mine",colors:"5120"},{word:"mink",colors:"5124"},{word:"minx",colors:"5120"},{word:"mire",colors:"5130"},{word:"mix",colors:"510"},{word:"moan",colors:"5302"},{word:"moat",colors:"5301"},{word:"mob",colors:"531"},{word:"mod",colors:"534"},{word:"mode",colors:"5341"},{word:"mole",colors:"5431"},{word:"molt",colors:"5431"},{word:"monad",colors:"53204"},{word:"monde",colors:"53241"},{word:"money",colors:"54203"},{word:"monk",colors:"5324"},{word:"mop",colors:"534"},{word:"mope",colors:"5340"},{word:"more",colors:"5430"},{word:"mores",colors:"54312"},{word:"most",colors:"5321"},{word:"mot",colors:"531"},{word:"mote",colors:"5310"},{word:"mow",colors:"530"},{word:"mu",colors:"50"},{word:"mud",colors:"504"},{word:"mule",colors:"5031"},{word:"murk",colors:"5034"},{word:"muse",colors:"5021"},{word:"musk",colors:"5024"},{word:"musket",colors:"502431"},{word:"must",colors:"5021"},{word:"musty",colors:"50213"},{word:"mute",colors:"5013"},{word:"muy",colors:"503"},{word:"my",colors:"53"},{word:"nab",colors:"201"},{word:"nadir",colors:"10453"},{word:"nag",colors:"203"},{word:"naif",colors:"1052"},{word:"nail",colors:"2013"},{word:"nails",colors:"20135"},{word:"name",colors:"2053"},{word:"nap",colors:"104"},{word:"nape",colors:"1240"},{word:"nary",colors:"1253"},{word:"nasal",colors:"10523"},{word:"nay",colors:"123"},{word:"neap",colors:"1024"},{word:"near",colors:"1023"},{word:"neat",colors:"2304"},{word:"neath",colors:"23041"},{word:"neb",colors:"201"},{word:"neck",colors:"2304"},{word:"nee",colors:"103"},{word:"need",colors:"2134"},{word:"nein",colors:"1052"},{word:"nemo",colors:"2053"},{word:"nesia",colors:"13250"},{word:"nest",colors:"2054"},{word:"net",colors:"204"},{word:"neuter",colors:"210435"},{word:"new",colors:"130"},{word:"news",colors:"1302"},{word:"next",colors:"2104"},{word:"nib",colors:"251"},{word:"nice",colors:"2103"},{word:"niche",colors:"25013"},{word:"nick",colors:"2104"},{word:"niece",colors:"25103"},{word:"nigh",colors:"2531"},{word:"nil",colors:"213"},{word:"nine",colors:"1520"},{word:"nip",colors:"214"},{word:"nit",colors:"214"},{word:"niter",colors:"21435"},{word:"nix",colors:"210"},{word:"no",colors:"13"},{word:"nob",colors:"231"},{word:"nod",colors:"134"},{word:"node",colors:"2341"},{word:"noel",colors:"1305"},{word:"noes",colors:"1305"},{word:"nog",colors:"243"},{word:"nom",colors:"235"},{word:"nomad",colors:"23504"},{word:"non",colors:"132"},{word:"none",colors:"1320"},{word:"nope",colors:"1340"},{word:"nor",colors:"135"},{word:"nose",colors:"1350"},{word:"nosy",colors:"1423"},{word:"not",colors:"234"},{word:"note",colors:"2340"},{word:"now",colors:"130"},{word:"nth",colors:"241"},{word:"nu",colors:"10"},{word:"nude",colors:"1043"},{word:"nudge",colors:"20431"},{word:"numb",colors:"2051"},{word:"nun",colors:"102"},{word:"nut",colors:"204"},{word:"nuts",colors:"2045"},{word:"nyet",colors:"2304"},{word:"nymph",colors:"23541"},{word:"oaf",colors:"302"},{word:"oar",colors:"305"},{word:"oater",colors:"40135"},{word:"oath",colors:"3041"},{word:"oats",colors:"3012"},{word:"obey",colors:"4103"},{word:"ode",colors:"341"},{word:"of",colors:"32"},{word:"oft",colors:"321"},{word:"ogle",colors:"4350"},{word:"ogre",colors:"4351"},{word:"ohm",colors:"315"},{word:"old",colors:"354"},{word:"ole",colors:"350"},{word:"omen",colors:"3502"},{word:"on",colors:"31"},{word:"once",colors:"3201"},{word:"one",colors:"310"},{word:"ones",colors:"3105"},{word:"only",colors:"4153"},{word:"onset",colors:"32504"},{word:"onyx",colors:"4130"},{word:"opal",colors:"3405"},{word:"ope",colors:"340"},{word:"open",colors:"3401"},{word:"opt",colors:"341"},{word:"or",colors:"35"},{word:"orb",colors:"351"},{word:"ore",colors:"430"},{word:"organ",colors:"45302"},{word:"oryx",colors:"4530"},{word:"os",colors:"32"},{word:"ova",colors:"320"},{word:"oval",colors:"3205"},{word:"ovate",colors:"42013"},{word:"over",colors:"4203"},{word:"overt",colors:"42351"},{word:"owe",colors:"301"},{word:"owl",colors:"403"},{word:"own",colors:"301"},{word:"owner",colors:"40135"},{word:"ox",colors:"30"},{word:"oxen",colors:"3012"},{word:"pace",colors:"4201"},{word:"pacer",colors:"42013"},{word:"pact",colors:"4201"},{word:"page",colors:"4230"},{word:"pail",colors:"4013"},{word:"pain",colors:"4012"},{word:"pair",colors:"4013"},{word:"pal",colors:"403"},{word:"pale",colors:"4250"},{word:"pall",colors:"4035"},{word:"palm",colors:"4035"},{word:"pan",colors:"401"},{word:"pane",colors:"4210"},{word:"panel",colors:"42105"},{word:"pang",colors:"4023"},{word:"par",colors:"403"},{word:"parch",colors:"42301"},{word:"pare",colors:"4230"},{word:"paring",colors:"405123"},{word:"part",colors:"4051"},{word:"party",colors:"42513"},{word:"past",colors:"4021"},{word:"pat",colors:"401"},{word:"pate",colors:"4210"},{word:"paw",colors:"420"},{word:"pawl",colors:"4203"},{word:"pawn",colors:"4201"},{word:"pay",colors:"423"},{word:"pea",colors:"402"},{word:"peal",colors:"4025"},{word:"pear",colors:"4023"},{word:"peat",colors:"4021"},{word:"peel",colors:"4015"},{word:"peer",colors:"4013"},{word:"peg",colors:"403"},{word:"pen",colors:"401"},{word:"penal",colors:"40125"},{word:"pencil",colors:"412053"},{word:"penny",colors:"40123"},{word:"peon",colors:"4031"},{word:"per",colors:"403"},{word:"pere",colors:"4031"},{word:"peso",colors:"4123"},{word:"pet",colors:"401"},{word:"pew",colors:"410"},{word:"phi",colors:"415"},{word:"pi",colors:"41"},{word:"pie",colors:"410"},{word:"pier",colors:"4103"},{word:"piety",colors:"45013"},{word:"pig",colors:"413"},{word:"pile",colors:"4150"},{word:"pill",colors:"4135"},{word:"pin",colors:"412"},{word:"pinch",colors:"45201"},{word:"pine",colors:"4120"},{word:"ping",colors:"4123"},{word:"pinna",colors:"45120"},{word:"pit",colors:"451"},{word:"pity",colors:"4513"},{word:"place",colors:"43201"},{word:"plain",colors:"43012"},{word:"plait",colors:"43051"},{word:"plan",colors:"4301"},{word:"plane",colors:"45210"},{word:"plans",colors:"45012"},{word:"plat",colors:"4301"},{word:"play",colors:"4523"},{word:"plea",colors:"4502"},{word:"plenum",colors:"431205"},{word:"plug",colors:"4503"},{word:"plum",colors:"4305"},{word:"plume",colors:"43051"},{word:"plus",colors:"4502"},{word:"ply",colors:"453"},{word:"poem",colors:"4305"},{word:"poet",colors:"4301"},{word:"pole",colors:"4350"},{word:"poles",colors:"43512"},{word:"pols",colors:"4352"},{word:"pome",colors:"4350"},{word:"pone",colors:"4310"},{word:"pore",colors:"4351"},{word:"port",colors:"4351"},{word:"pose",colors:"4321"},{word:"post",colors:"4321"},{word:"pot",colors:"431"},{word:"power",colors:"43015"},{word:"pram",colors:"4305"},{word:"prawn",colors:"45201"},{word:"pray",colors:"4523"},{word:"precis",colors:"431052"},{word:"price",colors:"43501"},{word:"prig",colors:"4513"},{word:"prim",colors:"4315"},{word:"prime",colors:"43150"},{word:"prism",colors:"43125"},{word:"privy",colors:"45123"},{word:"pro",colors:"453"},{word:"prone",colors:"45321"},{word:"prove",colors:"45321"},{word:"prow",colors:"4530"},{word:"prune",colors:"45021"},{word:"pry",colors:"453"},{word:"psi",colors:"421"},{word:"pug",colors:"403"},{word:"pull",colors:"4035"},{word:"pulse",colors:"40521"},{word:"pun",colors:"401"},{word:"puny",colors:"4013"},{word:"pure",colors:"4031"},{word:"purge",colors:"40531"},{word:"purr",colors:"4035"},{word:"purse",colors:"40321"},{word:"pus",colors:"402"},{word:"put",colors:"401"},{word:"rabid",colors:"30154"},{word:"race",colors:"3201"},{word:"racer",colors:"32015"},{word:"rack",colors:"3204"},{word:"racket",colors:"520431"},{word:"racy",colors:"5203"},{word:"raft",colors:"5021"},{word:"rag",colors:"503"},{word:"rage",colors:"5231"},{word:"raid",colors:"3014"},{word:"rain",colors:"5012"},{word:"rake",colors:"3240"},{word:"ram",colors:"305"},{word:"ramp",colors:"3054"},{word:"ran",colors:"301"},{word:"rang",colors:"5023"},{word:"rank",colors:"3214"},{word:"ranks",colors:"32145"},{word:"rant",colors:"5024"},{word:"rap",colors:"304"},{word:"rape",colors:"3240"},{word:"rapt",colors:"5041"},{word:"rare",colors:"3251"},{word:"rash",colors:"3051"},{word:"rasp",colors:"3024"},{word:"rat",colors:"501"},{word:"rate",colors:"3240"},{word:"ratty",colors:"52143"},{word:"rave",colors:"5023"},{word:"raw",colors:"520"},{word:"ray",colors:"523"},{word:"raze",colors:"5043"},{word:"re",colors:"30"},{word:"react",colors:"53201"},{word:"read",colors:"3124"},{word:"ream",colors:"3025"},{word:"reap",colors:"3024"},{word:"rear",colors:"3125"},{word:"recap",colors:"31024"},{word:"red",colors:"314"},{word:"reef",colors:"3012"},{word:"refit",colors:"30214"},{word:"reft",colors:"3024"},{word:"rein",colors:"3051"},{word:"rent",colors:"5124"},{word:"reset",colors:"30514"},{word:"rest",colors:"3054"},{word:"ret",colors:"304"},{word:"retain",colors:"534012"},{word:"retina",colors:"534120"},{word:"revue",colors:"51203"},{word:"rex",colors:"310"},{word:"rho",colors:"314"},{word:"rib",colors:"351"},{word:"rice",colors:"5103"},{word:"rich",colors:"3501"},{word:"rick",colors:"3104"},{word:"rid",colors:"314"},{word:"ride",colors:"3541"},{word:"rife",colors:"3120"},{word:"rift",colors:"3124"},{word:"rig",colors:"513"},{word:"rim",colors:"315"},{word:"rime",colors:"3150"},{word:"rind",colors:"3514"},{word:"ring",colors:"5123"},{word:"rink",colors:"5124"},{word:"rip",colors:"314"},{word:"ripe",colors:"3140"},{word:"ripen",colors:"35401"},{word:"rise",colors:"3150"},{word:"risk",colors:"3124"},{word:"rite",colors:"3140"},{word:"rive",colors:"3120"},{word:"roam",colors:"3405"},{word:"roan",colors:"5301"},{word:"roar",colors:"3405"},{word:"rob",colors:"531"},{word:"robe",colors:"3410"},{word:"rock",colors:"5304"},{word:"roe",colors:"340"},{word:"rope",colors:"5341"},{word:"rose",colors:"3450"},{word:"rot",colors:"531"},{word:"rote",colors:"5413"},{word:"rove",colors:"3420"},{word:"rover",colors:"34215"},{word:"row",colors:"530"},{word:"rub",colors:"301"},{word:"ruby",colors:"5013"},{word:"rude",colors:"3041"},{word:"rue",colors:"301"},{word:"rug",colors:"503"},{word:"rum",colors:"305"},{word:"rump",colors:"3054"},{word:"run",colors:"301"},{word:"rune",colors:"5013"},{word:"rung",colors:"5023"},{word:"runs",colors:"3012"},{word:"runt",colors:"5024"},{word:"ruse",colors:"3021"},{word:"rush",colors:"3051"},{word:"rusk",colors:"3024"},{word:"russet",colors:"302514"},{word:"rust",colors:"3024"},{word:"rut",colors:"501"},{word:"sabot",colors:"20134"},{word:"sac",colors:"520"},{word:"sack",colors:"5204"},{word:"sacred",colors:"520314"},{word:"sad",colors:"504"},{word:"sag",colors:"203"},{word:"saga",colors:"5032"},{word:"sage",colors:"5230"},{word:"sago",colors:"2034"},{word:"said",colors:"5014"},{word:"sail",colors:"2015"},{word:"saint",colors:"50124"},{word:"sake",colors:"5240"},{word:"sale",colors:"2053"},{word:"salon",colors:"20531"},{word:"salt",colors:"5031"},{word:"salvo",colors:"50324"},{word:"same",colors:"2053"},{word:"sand",colors:"5014"},{word:"sandy",colors:"52143"},{word:"sane",colors:"5210"},{word:"sang",colors:"5023"},{word:"sank",colors:"5214"},{word:"sans",colors:"2015"},{word:"sap",colors:"204"},{word:"saran",colors:"50321"},{word:"sard",colors:"5034"},{word:"sari",colors:"2031"},{word:"sat",colors:"201"},{word:"sate",colors:"5210"},{word:"satin",colors:"50412"},{word:"savor",colors:"50243"},{word:"saw",colors:"520"},{word:"sawn",colors:"5201"},{word:"say",colors:"523"},{word:"scale",colors:"50231"},{word:"scar",colors:"5023"},{word:"scare",colors:"50231"},{word:"scared",colors:"502314"},{word:"scat",colors:"5021"},{word:"scone",colors:"50321"},{word:"scope",colors:"20341"},{word:"score",colors:"20431"},{word:"scores",colors:"204315"},{word:"scot",colors:"2031"},{word:"scrip",colors:"20314"},{word:"sea",colors:"502"},{word:"seal",colors:"2305"},{word:"seam",colors:"2305"},{word:"sear",colors:"5023"},{word:"seat",colors:"5021"},{word:"second",colors:"510324"},{word:"sect",colors:"2301"},{word:"see",colors:"501"},{word:"seen",colors:"5012"},{word:"seer",colors:"5013"},{word:"seize",colors:"21543"},{word:"semi",colors:"2351"},{word:"sen",colors:"501"},{word:"send",colors:"5124"},{word:"senor",colors:"50143"},{word:"sent",colors:"5024"},{word:"sere",colors:"5031"},{word:"serum",colors:"21305"},{word:"serve",colors:"50321"},{word:"set",colors:"501"},{word:"sets",colors:"2145"},{word:"sever",colors:"50213"},{word:"sewn",colors:"2301"},{word:"sex",colors:"210"},{word:"shack",colors:"51204"},{word:"shag",colors:"5103"},{word:"shark",colors:"51234"},{word:"shay",colors:"5123"},{word:"shoat",colors:"51304"},{word:"shock",colors:"51304"},{word:"shot",colors:"5134"},{word:"show",colors:"5130"},{word:"showy",colors:"51403"},{word:"shun",colors:"5102"},{word:"shunt",colors:"51024"},{word:"shut",colors:"5104"},{word:"shy",colors:"513"},{word:"si",colors:"21"},{word:"sic",colors:"210"},{word:"sick",colors:"2104"},{word:"sickle",colors:"210453"},{word:"sign",colors:"5132"},{word:"silk",colors:"2154"},{word:"silt",colors:"2154"},{word:"simp",colors:"2154"},{word:"sin",colors:"512"},{word:"sine",colors:"5120"},{word:"sinew",colors:"25130"},{word:"sing",colors:"5123"},{word:"singe",colors:"51230"},{word:"sink",colors:"5124"},{word:"sip",colors:"214"},{word:"sir",colors:"213"},{word:"sire",colors:"5130"},{word:"sis",colors:"215"},{word:"sit",colors:"214"},{word:"site",colors:"5140"},{word:"six",colors:"210"},{word:"sixty",colors:"21043"},{word:"size",colors:"5140"},{word:"skate",colors:"54210"},{word:"skein",colors:"54012"},{word:"ski",colors:"241"},{word:"skim",colors:"2415"},{word:"skin",colors:"5412"},{word:"skis",colors:"2415"},{word:"skit",colors:"2451"},{word:"slab",colors:"2501"},{word:"slack",colors:"53204"},{word:"slag",colors:"2503"},{word:"slain",colors:"53012"},{word:"slant",colors:"53024"},{word:"slap",colors:"2504"},{word:"slat",colors:"5301"},{word:"slate",colors:"25043"},{word:"slaw",colors:"5320"},{word:"sleet",colors:"25134"},{word:"slew",colors:"5310"},{word:"slice",colors:"25103"},{word:"slick",colors:"25104"},{word:"slink",colors:"53124"},{word:"slip",colors:"2514"},{word:"slit",colors:"2514"},{word:"slob",colors:"2531"},{word:"sloe",colors:"2531"},{word:"slog",colors:"2543"},{word:"slop",colors:"2534"},{word:"slope",colors:"25341"},{word:"slot",colors:"5341"},{word:"slow",colors:"5340"},{word:"slug",colors:"2503"},{word:"slunk",colors:"25014"},{word:"slut",colors:"5301"},{word:"sly",colors:"253"},{word:"smirk",colors:"25134"},{word:"smote",colors:"25413"},{word:"smut",colors:"2501"},{word:"snag",colors:"5203"},{word:"snail",colors:"52013"},{word:"snake",colors:"51240"},{word:"snap",colors:"2104"},{word:"snare",colors:"51230"},{word:"snath",colors:"52041"},{word:"sneak",colors:"51024"},{word:"snip",colors:"2154"},{word:"snore",colors:"51430"},{word:"snot",colors:"5234"},{word:"snow",colors:"2130"},{word:"snowy",colors:"21403"},{word:"snug",colors:"5203"},{word:"so",colors:"23"},{word:"soap",colors:"2304"},{word:"soar",colors:"2403"},{word:"sob",colors:"231"},{word:"sock",colors:"2304"},{word:"sod",colors:"534"},{word:"soda",colors:"5340"},{word:"sol",colors:"235"},{word:"sole",colors:"2351"},{word:"solve",colors:"54321"},{word:"soma",colors:"2350"},{word:"some",colors:"2351"},{word:"son",colors:"231"},{word:"sonar",colors:"24103"},{word:"song",colors:"5423"},{word:"sonny",colors:"54123"},{word:"sons",colors:"2315"},{word:"sop",colors:"234"},{word:"sore",colors:"5430"},{word:"sot",colors:"231"},{word:"sow",colors:"230"},{word:"sown",colors:"2301"},{word:"sox",colors:"230"},{word:"soy",colors:"243"},{word:"spa",colors:"240"},{word:"span",colors:"2401"},{word:"spar",colors:"2403"},{word:"spat",colors:"2401"},{word:"sperm",colors:"24135"},{word:"spew",colors:"2410"},{word:"spice",colors:"24501"},{word:"spicy",colors:"24103"},{word:"spin",colors:"2451"},{word:"spiny",colors:"24513"},{word:"spire",colors:"24531"},{word:"spit",colors:"2451"},{word:"spot",colors:"2431"},{word:"sprain",colors:"243051"},{word:"spume",colors:"24051"},{word:"spun",colors:"2401"},{word:"spur",colors:"2403"},{word:"spurn",colors:"24031"},{word:"spy",colors:"243"},{word:"stab",colors:"2401"},{word:"stack",colors:"51204"},{word:"stag",colors:"2103"},{word:"stage",colors:"51230"},{word:"stain",colors:"54012"},{word:"stair",colors:"24013"},{word:"stairs",colors:"240135"},{word:"stake",colors:"51240"},{word:"stale",colors:"24053"},{word:"stalk",colors:"51234"},{word:"stamp",colors:"21054"},{word:"star",colors:"2403"},{word:"stare",colors:"54230"},{word:"state",colors:"51240"},{word:"stay",colors:"5123"},{word:"steak",colors:"51024"},{word:"steal",colors:"24305"},{word:"steam",colors:"21305"},{word:"steel",colors:"24135"},{word:"steer",colors:"54013"},{word:"stein",colors:"54012"},{word:"stem",colors:"2135"},{word:"steno",colors:"54023"},{word:"stere",colors:"54031"},{word:"stet",colors:"5104"},{word:"stew",colors:"2410"},{word:"stick",colors:"21504"},{word:"stile",colors:"24153"},{word:"stir",colors:"2413"},{word:"stoa",colors:"2130"},{word:"stoat",colors:"21304"},{word:"stock",colors:"21304"},{word:"stocks",colors:"213045"},{word:"stoke",colors:"51340"},{word:"stole",colors:"24351"},{word:"stoma",colors:"21350"},{word:"stomp",colors:"21354"},{word:"stone",colors:"54320"},{word:"stop",colors:"2134"},{word:"stove",colors:"51320"},{word:"stow",colors:"2430"},{word:"stria",colors:"24310"},{word:"stub",colors:"2401"},{word:"stud",colors:"5104"},{word:"study",colors:"51043"},{word:"stump",colors:"21054"},{word:"stumpy",colors:"210543"},{word:"stun",colors:"5402"},{word:"sty",colors:"213"},{word:"sub",colors:"201"},{word:"sue",colors:"201"},{word:"suet",colors:"2031"},{word:"sulk",colors:"2054"},{word:"sum",colors:"205"},{word:"sump",colors:"2054"},{word:"sun",colors:"201"},{word:"sung",colors:"5023"},{word:"sunk",colors:"2014"},{word:"sunny",colors:"50123"},{word:"sup",colors:"204"},{word:"super",colors:"20413"},{word:"surd",colors:"5034"},{word:"sure",colors:"2031"},{word:"swag",colors:"5023"},{word:"swale",colors:"50231"},{word:"swan",colors:"5021"},{word:"swank",colors:"50214"},{word:"swat",colors:"5024"},{word:"swath",colors:"50241"},{word:"sway",colors:"5023"},{word:"sweat",colors:"50124"},{word:"sweet",colors:"20134"},{word:"swig",colors:"2013"},{word:"swim",colors:"2015"},{word:"swine",colors:"20513"},{word:"swipe",colors:"20541"},{word:"swob",colors:"2031"},{word:"syndic",colors:"532410"},{word:"syne",colors:"5310"},{word:"tab",colors:"401"},{word:"table",colors:"42150"},{word:"tabor",colors:"40135"},{word:"tack",colors:"1204"},{word:"tad",colors:"104"},{word:"tag",colors:"103"},{word:"tail",colors:"4013"},{word:"tails",colors:"40152"},{word:"take",colors:"1240"},{word:"taker",colors:"12435"},{word:"takes",colors:"12405"},{word:"talc",colors:"1230"},{word:"tale",colors:"4250"},{word:"talk",colors:"1234"},{word:"tall",colors:"4035"},{word:"tam",colors:"105"},{word:"tame",colors:"1250"},{word:"tamp",colors:"1054"},{word:"tan",colors:"402"},{word:"tap",colors:"104"},{word:"tape",colors:"1240"},{word:"taps",colors:"1042"},{word:"tar",colors:"105"},{word:"tare",colors:"4230"},{word:"tares",colors:"42305"},{word:"tarn",colors:"4052"},{word:"taro",colors:"1053"},{word:"tarot",colors:"10534"},{word:"tarp",colors:"1054"},{word:"tart",colors:"1054"},{word:"task",colors:"1254"},{word:"taste",colors:"12540"},{word:"tasty",colors:"12543"},{word:"tat",colors:"104"},{word:"taw",colors:"420"},{word:"tax",colors:"120"},{word:"tea",colors:"102"},{word:"teak",colors:"1024"},{word:"teal",colors:"4025"},{word:"team",colors:"1025"},{word:"tear",colors:"4023"},{word:"tease",colors:"40251"},{word:"teat",colors:"1024"},{word:"tee",colors:"103"},{word:"teem",colors:"1035"},{word:"teens",colors:"40125"},{word:"tell",colors:"4135"},{word:"tempo",colors:"10543"},{word:"tenor",colors:"41235"},{word:"tens",colors:"4025"},{word:"tense",colors:"40251"},{word:"tenure",colors:"412053"},{word:"terra",colors:"41352"},{word:"terse",colors:"40351"},{word:"test",colors:"1054"},{word:"testa",colors:"10542"},{word:"testy",colors:"10543"},{word:"than",colors:"4102"},{word:"thane",colors:"41023"},{word:"thaw",colors:"4120"},{word:"the",colors:"413"},{word:"then",colors:"4132"},{word:"thin",colors:"4152"},{word:"thine",colors:"41523"},{word:"tho",colors:"413"},{word:"thru",colors:"4130"},{word:"thus",colors:"4105"},{word:"thy",colors:"413"},{word:"ti",colors:"41"},{word:"tic",colors:"150"},{word:"tick",colors:"1504"},{word:"tide",colors:"1543"},{word:"tidy",colors:"1543"},{word:"tie",colors:"410"},{word:"tier",colors:"4103"},{word:"ties",colors:"4105"},{word:"tike",colors:"1540"},{word:"tile",colors:"4150"},{word:"till",colors:"4135"},{word:"tilt",colors:"1534"},{word:"tin",colors:"412"},{word:"tine",colors:"4120"},{word:"tiny",colors:"4123"},{word:"tip",colors:"154"},{word:"tipsy",colors:"15423"},{word:"tire",colors:"4130"},{word:"tires",colors:"41305"},{word:"tis",colors:"412"},{word:"tit",colors:"154"},{word:"to",colors:"13"},{word:"toad",colors:"1304"},{word:"toast",colors:"13024"},{word:"toe",colors:"130"},{word:"toga",colors:"1430"},{word:"togs",colors:"1432"},{word:"tome",colors:"1350"},{word:"ton",colors:"432"},{word:"tone",colors:"4320"},{word:"top",colors:"134"},{word:"tops",colors:"1342"},{word:"tore",colors:"1453"},{word:"torn",colors:"4352"},{word:"tort",colors:"1354"},{word:"toss",colors:"1325"},{word:"tot",colors:"134"},{word:"tote",colors:"1340"},{word:"tow",colors:"430"},{word:"tower",colors:"43015"},{word:"toy",colors:"143"},{word:"trace",colors:"15203"},{word:"track",colors:"15204"},{word:"train",colors:"45012"},{word:"trap",colors:"1504"},{word:"trash",colors:"43051"},{word:"tray",colors:"1523"},{word:"treat",colors:"15304"},{word:"tree",colors:"4301"},{word:"trees",colors:"43015"},{word:"trek",colors:"1534"},{word:"tress",colors:"43125"},{word:"tribe",colors:"43510"},{word:"trot",colors:"1534"},{word:"trow",colors:"4530"},{word:"troy",colors:"1543"},{word:"truss",colors:"43025"},{word:"try",colors:"153"},{word:"tsar",colors:"4203"},{word:"tub",colors:"401"},{word:"tuft",colors:"1024"},{word:"tug",colors:"103"},{word:"tulle",colors:"40351"},{word:"tun",colors:"402"},{word:"tune",colors:"4021"},{word:"tureen",colors:"405132"},{word:"turf",colors:"1052"},{word:"turn",colors:"4052"},{word:"tusk",colors:"1024"},{word:"twas",colors:"4025"},{word:"twere",colors:"40153"},{word:"two",colors:"403"},{word:"type",colors:"1340"},{word:"tyro",colors:"1354"},{word:"up",colors:"04"},{word:"urge",colors:"0531"},{word:"urn",colors:"031"},{word:"us",colors:"02"},{word:"use",colors:"021"},{word:"used",colors:"0514"},{word:"user",colors:"0213"},{word:"utter",colors:"01435"},{word:"vale",colors:"2053"},{word:"valid",colors:"20514"},{word:"vapor",colors:"20435"},{word:"vas",colors:"205"},{word:"vast",colors:"2051"},{word:"vat",colors:"201"},{word:"veal",colors:"2305"},{word:"veer",colors:"2013"},{word:"veil",colors:"2015"},{word:"veld",colors:"2154"},{word:"verb",colors:"2031"},{word:"verse",colors:"20351"},{word:"verso",colors:"20354"},{word:"vest",colors:"2051"},{word:"vet",colors:"201"},{word:"veto",colors:"2013"},{word:"vex",colors:"210"},{word:"via",colors:"210"},{word:"vial",colors:"2103"},{word:"vide",colors:"2143"},{word:"vie",colors:"210"},{word:"view",colors:"2130"},{word:"vile",colors:"2150"},{word:"villa",colors:"21350"},{word:"viper",colors:"21403"},{word:"visa",colors:"2150"},{word:"vise",colors:"2150"},{word:"vital",colors:"25103"},{word:"viz",colors:"214"},{word:"vole",colors:"2350"},{word:"volt",colors:"2431"},{word:"vote",colors:"2310"},{word:"voter",colors:"24135"},{word:"vow",colors:"230"},{word:"vowel",colors:"24013"},{word:"wad",colors:"024"},{word:"wade",colors:"0241"},{word:"wag",colors:"023"},{word:"wage",colors:"0231"},{word:"wager",colors:"02315"},{word:"wages",colors:"02315"},{word:"wake",colors:"0243"},{word:"waken",colors:"02431"},{word:"walk",colors:"0234"},{word:"wan",colors:"021"},{word:"wand",colors:"0214"},{word:"wane",colors:"0213"},{word:"war",colors:"025"},{word:"ware",colors:"0251"},{word:"warn",colors:"0251"},{word:"warp",colors:"0254"},{word:"wart",colors:"0254"},{word:"wary",colors:"0253"},{word:"was",colors:"025"},{word:"wash",colors:"0251"},{word:"waste",colors:"02541"},{word:"water",colors:"02415"},{word:"way",colors:"023"},{word:"we",colors:"01"},{word:"weak",colors:"0324"},{word:"weal",colors:"0123"},{word:"wean",colors:"0321"},{word:"wear",colors:"0125"},{word:"wed",colors:"014"},{word:"wee",colors:"013"},{word:"weed",colors:"0134"},{word:"weft",colors:"0124"},{word:"weir",colors:"0315"},{word:"welt",colors:"0134"},{word:"wen",colors:"031"},{word:"wend",colors:"0314"},{word:"were",colors:"0153"},{word:"west",colors:"0124"},{word:"wet",colors:"014"},{word:"what",colors:"0124"},{word:"wheat",colors:"01324"},{word:"whet",colors:"0134"},{word:"whip",colors:"0154"},{word:"whit",colors:"0154"},{word:"white",colors:"01543"},{word:"who",colors:"013"},{word:"whom",colors:"0135"},{word:"whomp",colors:"01354"},{word:"whop",colors:"0134"},{word:"why",colors:"013"},{word:"wide",colors:"0143"},{word:"widen",colors:"05431"},{word:"wife",colors:"0521"},{word:"wig",colors:"013"},{word:"wile",colors:"0531"},{word:"wilt",colors:"0134"},{word:"win",colors:"051"},{word:"wind",colors:"0514"},{word:"windy",colors:"05143"},{word:"wine",colors:"0513"},{word:"wink",colors:"0514"},{word:"winy",colors:"0513"},{word:"wipe",colors:"0541"},{word:"wire",colors:"0153"},{word:"wiry",colors:"0153"},{word:"wise",colors:"0123"},{word:"wisp",colors:"0124"},{word:"wispy",colors:"01243"},{word:"wist",colors:"0124"},{word:"wit",colors:"014"},{word:"with",colors:"0541"},{word:"withe",colors:"05413"},{word:"wits",colors:"0142"},{word:"woe",colors:"031"},{word:"wolf",colors:"0432"},{word:"wolves",colors:"043215"},{word:"womb",colors:"0351"},{word:"won",colors:"031"},{word:"wore",colors:"0351"},{word:"work",colors:"0354"},{word:"worn",colors:"0351"},{word:"wort",colors:"0354"},{word:"wot",colors:"034"},{word:"wove",colors:"0321"},{word:"wrap",colors:"0524"},{word:"wreak",colors:"05324"},{word:"wren",colors:"0531"},{word:"writ",colors:"0514"},{word:"write",colors:"05143"},{word:"wrote",colors:"05341"},{word:"wry",colors:"053"},{word:"yah",colors:"321"},{word:"yam",colors:"325"},{word:"yap",colors:"324"},{word:"yarn",colors:"3251"},{word:"yaw",colors:"320"},{word:"yawn",colors:"3201"},{word:"yawp",colors:"3204"},{word:"yaws",colors:"3205"},{word:"ye",colors:"30"},{word:"yea",colors:"302"},{word:"yeast",colors:"30251"},{word:"yelp",colors:"3054"},{word:"yen",colors:"301"},{word:"yep",colors:"304"},{word:"yes",colors:"305"},{word:"yet",colors:"301"},{word:"yin",colors:"312"},{word:"yipe",colors:"3140"},{word:"zany",colors:"4213"},{word:"zeal",colors:"4123"},{word:"zero",colors:"4153"},{word:"zone",colors:"4310"}]},mE={indices:fE,mono:hE,rainbow:pE};function gE(){return Tt.jsx(dE,{data:mE})}N0(document.getElementById("root")).render(Tt.jsx(Et.StrictMode,{children:Tt.jsx(gE,{})}));
