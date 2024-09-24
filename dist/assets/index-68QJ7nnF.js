(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Sp={exports:{}},rl={},Mp={exports:{}},Ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ws=Symbol.for("react.element"),pg=Symbol.for("react.portal"),mg=Symbol.for("react.fragment"),gg=Symbol.for("react.strict_mode"),wg=Symbol.for("react.profiler"),_g=Symbol.for("react.provider"),vg=Symbol.for("react.context"),xg=Symbol.for("react.forward_ref"),yg=Symbol.for("react.suspense"),Sg=Symbol.for("react.memo"),Mg=Symbol.for("react.lazy"),Wu=Symbol.iterator;function Eg(t){return t===null||typeof t!="object"?null:(t=Wu&&t[Wu]||t["@@iterator"],typeof t=="function"?t:null)}var Ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tp=Object.assign,Ap={};function _i(t,e,n){this.props=t,this.context=e,this.refs=Ap,this.updater=n||Ep}_i.prototype.isReactComponent={};_i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rp(){}Rp.prototype=_i.prototype;function Fd(t,e,n){this.props=t,this.context=e,this.refs=Ap,this.updater=n||Ep}var Od=Fd.prototype=new Rp;Od.constructor=Fd;Tp(Od,_i.prototype);Od.isPureReactComponent=!0;var Xu=Array.isArray,Cp=Object.prototype.hasOwnProperty,kd={current:null},bp={key:!0,ref:!0,__self:!0,__source:!0};function Pp(t,e,n){var r,o={},i=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(i=""+e.key),e)Cp.call(e,r)&&!bp.hasOwnProperty(r)&&(o[r]=e[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ws,type:t,key:i,ref:s,props:o,_owner:kd.current}}function Tg(t,e){return{$$typeof:ws,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ws}function Ag(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yu=/\/+/g;function Cl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ag(""+t.key):e.toString(36)}function pa(t,e,n,r,o){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ws:case pg:s=!0}}if(s)return s=t,o=o(s),t=r===""?"."+Cl(s,0):r,Xu(o)?(n="",t!=null&&(n=t.replace(Yu,"$&/")+"/"),pa(o,e,n,"",function(c){return c})):o!=null&&(zd(o)&&(o=Tg(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Yu,"$&/")+"/")+t)),e.push(o)),1;if(s=0,r=r===""?".":r+":",Xu(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+Cl(i,a);s+=pa(i,e,n,l,o)}else if(l=Eg(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+Cl(i,a++),s+=pa(i,e,n,l,o);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Cs(t,e,n){if(t==null)return t;var r=[],o=0;return pa(t,r,"","",function(i){return e.call(n,i,o++)}),r}function Rg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},ma={transition:null},Cg={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:ma,ReactCurrentOwner:kd};function Lp(){throw Error("act(...) is not supported in production builds of React.")}Ue.Children={map:Cs,forEach:function(t,e,n){Cs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cs(t,function(){e++}),e},toArray:function(t){return Cs(t,function(e){return e})||[]},only:function(t){if(!zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ue.Component=_i;Ue.Fragment=mg;Ue.Profiler=wg;Ue.PureComponent=Fd;Ue.StrictMode=gg;Ue.Suspense=yg;Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cg;Ue.act=Lp;Ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Tp({},t.props),o=t.key,i=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,s=kd.current),e.key!==void 0&&(o=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cp.call(e,l)&&!bp.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ws,type:t.type,key:o,ref:i,props:r,_owner:s}};Ue.createContext=function(t){return t={$$typeof:vg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_g,_context:t},t.Consumer=t};Ue.createElement=Pp;Ue.createFactory=function(t){var e=Pp.bind(null,t);return e.type=t,e};Ue.createRef=function(){return{current:null}};Ue.forwardRef=function(t){return{$$typeof:xg,render:t}};Ue.isValidElement=zd;Ue.lazy=function(t){return{$$typeof:Mg,_payload:{_status:-1,_result:t},_init:Rg}};Ue.memo=function(t,e){return{$$typeof:Sg,type:t,compare:e===void 0?null:e}};Ue.startTransition=function(t){var e=ma.transition;ma.transition={};try{t()}finally{ma.transition=e}};Ue.unstable_act=Lp;Ue.useCallback=function(t,e){return Gt.current.useCallback(t,e)};Ue.useContext=function(t){return Gt.current.useContext(t)};Ue.useDebugValue=function(){};Ue.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};Ue.useEffect=function(t,e){return Gt.current.useEffect(t,e)};Ue.useId=function(){return Gt.current.useId()};Ue.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};Ue.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};Ue.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};Ue.useMemo=function(t,e){return Gt.current.useMemo(t,e)};Ue.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};Ue.useRef=function(t){return Gt.current.useRef(t)};Ue.useState=function(t){return Gt.current.useState(t)};Ue.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};Ue.useTransition=function(){return Gt.current.useTransition()};Ue.version="18.3.1";Mp.exports=Ue;var Et=Mp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg=Et,Pg=Symbol.for("react.element"),Lg=Symbol.for("react.fragment"),Dg=Object.prototype.hasOwnProperty,Ug=bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ng={key:!0,ref:!0,__self:!0,__source:!0};function Dp(t,e,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Dg.call(e,r)&&!Ng.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:Pg,type:t,key:i,ref:s,props:o,_owner:Ug.current}}rl.Fragment=Lg;rl.jsx=Dp;rl.jsxs=Dp;Sp.exports=rl;var Tt=Sp.exports,Up={exports:{}},ln={},Np={exports:{}},Ip={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,V){var G=b.length;b.push(V);e:for(;0<G;){var oe=G-1>>>1,ge=b[oe];if(0<o(ge,V))b[oe]=V,b[G]=ge,G=oe;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var V=b[0],G=b.pop();if(G!==V){b[0]=G;e:for(var oe=0,ge=b.length,Ge=ge>>>1;oe<Ge;){var H=2*(oe+1)-1,te=b[H],de=H+1,ne=b[de];if(0>o(te,G))de<ge&&0>o(ne,te)?(b[oe]=ne,b[de]=G,oe=de):(b[oe]=te,b[H]=G,oe=H);else if(de<ge&&0>o(ne,G))b[oe]=ne,b[de]=G,oe=de;else break e}}return V}function o(b,V){var G=b.sortIndex-V.sortIndex;return G!==0?G:b.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,h=null,f=3,m=!1,_=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=b)r(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function S(b){if(v=!1,g(b),!_)if(n(l)!==null)_=!0,ee(C);else{var V=n(c);V!==null&&J(S,V.startTime-b)}}function C(b,V){_=!1,v&&(v=!1,d(P),P=-1),m=!0;var G=f;try{for(g(V),h=n(l);h!==null&&(!(h.expirationTime>V)||b&&!I());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var ge=oe(h.expirationTime<=V);V=t.unstable_now(),typeof ge=="function"?h.callback=ge:h===n(l)&&r(l),g(V)}else r(l);h=n(l)}if(h!==null)var Ge=!0;else{var H=n(c);H!==null&&J(S,H.startTime-V),Ge=!1}return Ge}finally{h=null,f=G,m=!1}}var A=!1,T=null,P=-1,E=5,x=-1;function I(){return!(t.unstable_now()-x<E)}function W(){if(T!==null){var b=t.unstable_now();x=b;var V=!0;try{V=T(!0,b)}finally{V?D():(A=!1,T=null)}}else A=!1}var D;if(typeof w=="function")D=function(){w(W)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Y=j.port2;j.port1.onmessage=W,D=function(){Y.postMessage(null)}}else D=function(){p(W,0)};function ee(b){T=b,A||(A=!0,D())}function J(b,V){P=p(function(){b(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,ee(C))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var G=f;f=V;try{return b()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,V){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var G=f;f=b;try{return V()}finally{f=G}},t.unstable_scheduleCallback=function(b,V,G){var oe=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?oe+G:oe):G=oe,b){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=G+ge,b={id:u++,callback:V,priorityLevel:b,startTime:G,expirationTime:ge,sortIndex:-1},G>oe?(b.sortIndex=G,e(c,b),n(l)===null&&b===n(c)&&(v?(d(P),P=-1):v=!0,J(S,G-oe))):(b.sortIndex=ge,e(l,b),_||m||(_=!0,ee(C))),b},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(b){var V=f;return function(){var G=f;f=V;try{return b.apply(this,arguments)}finally{f=G}}}})(Ip);Np.exports=Ip;var Ig=Np.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg=Et,an=Ig;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,Ji={};function _o(t,e){ai(t,e),ai(t+"Capture",e)}function ai(t,e){for(Ji[t]=e,t=0;t<e.length;t++)Fp.add(e[t])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=Object.prototype.hasOwnProperty,Og=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ju={},qu={};function kg(t){return Ic.call(qu,t)?!0:Ic.call(ju,t)?!1:Og.test(t)?qu[t]=!0:(ju[t]=!0,!1)}function zg(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bg(t,e,n,r){if(e===null||typeof e>"u"||zg(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,r,o,i,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=s}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ct[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ct[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ct[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bd=/[\-:]([a-z])/g;function Hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bd,Hd);Ct[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bd,Hd);Ct[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bd,Hd);Ct[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ct[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vd(t,e,n,r){var o=Ct.hasOwnProperty(e)?Ct[e]:null;(o!==null?o.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bg(e,n,o,r)&&(n=null),r||o===null?kg(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):o.mustUseProperty?t[o.propertyName]=n===null?o.type===3?!1:"":n:(e=o.attributeName,r=o.attributeNamespace,n===null?t.removeAttribute(e):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bs=Symbol.for("react.element"),zo=Symbol.for("react.portal"),Bo=Symbol.for("react.fragment"),Gd=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),Op=Symbol.for("react.provider"),kp=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),kc=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),zp=Symbol.for("react.offscreen"),$u=Symbol.iterator;function Ai(t){return t===null||typeof t!="object"?null:(t=$u&&t[$u]||t["@@iterator"],typeof t=="function"?t:null)}var st=Object.assign,bl;function zi(t){if(bl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bl=e&&e[1]||""}return`
`+bl+t}var Pl=!1;function Ll(t,e){if(!t||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zi(t):""}function Hg(t){switch(t.tag){case 5:return zi(t.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 2:case 15:return t=Ll(t.type,!1),t;case 11:return t=Ll(t.type.render,!1),t;case 1:return t=Ll(t.type,!0),t;default:return""}}function zc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bo:return"Fragment";case zo:return"Portal";case Fc:return"Profiler";case Gd:return"StrictMode";case Oc:return"Suspense";case kc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kp:return(t.displayName||"Context")+".Consumer";case Op:return(t._context.displayName||"Context")+".Provider";case Wd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xd:return e=t.displayName||null,e!==null?e:zc(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return zc(t(e))}catch{}}return null}function Vg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zc(e);case 8:return e===Gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gg(t){var e=Bp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ps(t){t._valueTracker||(t._valueTracker=Gg(t))}function Hp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ra(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bc(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ku(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vp(t,e){e=e.checked,e!=null&&Vd(t,"checked",e,!1)}function Hc(t,e){Vp(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vc(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zu(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vc(t,e,n){(e!=="number"||Ra(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bi=Array.isArray;function Qo(t,e,n,r){if(t=t.options,e){e={};for(var o=0;o<n.length;o++)e["$"+n[o]]=!0;for(n=0;n<t.length;n++)o=e.hasOwnProperty("$"+t[n].value),t[n].selected!==o&&(t[n].selected=o),o&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,o=0;o<t.length;o++){if(t[o].value===n){t[o].selected=!0,r&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function Gc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qu(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Z(92));if(Bi(n)){if(1<n.length)throw Error(Z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function Gp(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ju(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ls,Xp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,o){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,o)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ls=Ls||document.createElement("div"),Ls.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ls.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function es(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wg=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(t){Wg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wi[e]=Wi[t]})});function Yp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wi.hasOwnProperty(t)&&Wi[t]?(""+e).trim():e+"px"}function jp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Yp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,o):t[n]=o}}var Xg=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xc(t,e){if(e){if(Xg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function Yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jc=null;function Yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qc=null,Jo=null,ei=null;function ef(t){if(t=xs(t)){if(typeof qc!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=ll(e),qc(t.stateNode,t.type,e))}}function qp(t){Jo?ei?ei.push(t):ei=[t]:Jo=t}function $p(){if(Jo){var t=Jo,e=ei;if(ei=Jo=null,ef(t),e)for(t=0;t<e.length;t++)ef(e[t])}}function Kp(t,e){return t(e)}function Zp(){}var Dl=!1;function Qp(t,e,n){if(Dl)return t(e,n);Dl=!0;try{return Kp(t,e,n)}finally{Dl=!1,(Jo!==null||ei!==null)&&(Zp(),$p())}}function ts(t,e){var n=t.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var $c=!1;if(rr)try{var Ri={};Object.defineProperty(Ri,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Ri,Ri),window.removeEventListener("test",Ri,Ri)}catch{$c=!1}function Yg(t,e,n,r,o,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Xi=!1,Ca=null,ba=!1,Kc=null,jg={onError:function(t){Xi=!0,Ca=t}};function qg(t,e,n,r,o,i,s,a,l){Xi=!1,Ca=null,Yg.apply(jg,arguments)}function $g(t,e,n,r,o,i,s,a,l){if(qg.apply(this,arguments),Xi){if(Xi){var c=Ca;Xi=!1,Ca=null}else throw Error(Z(198));ba||(ba=!0,Kc=c)}}function vo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tf(t){if(vo(t)!==t)throw Error(Z(188))}function Kg(t){var e=t.alternate;if(!e){if(e=vo(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,r=e;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return tf(o),t;if(i===r)return tf(o),e;i=i.sibling}throw Error(Z(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(Z(189))}}if(n.alternate!==r)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function em(t){return t=Kg(t),t!==null?tm(t):null}function tm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tm(t);if(e!==null)return e;t=t.sibling}return null}var nm=an.unstable_scheduleCallback,nf=an.unstable_cancelCallback,Zg=an.unstable_shouldYield,Qg=an.unstable_requestPaint,ut=an.unstable_now,Jg=an.unstable_getCurrentPriorityLevel,jd=an.unstable_ImmediatePriority,rm=an.unstable_UserBlockingPriority,Pa=an.unstable_NormalPriority,ew=an.unstable_LowPriority,om=an.unstable_IdlePriority,ol=null,Bn=null;function tw(t){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:ow,nw=Math.log,rw=Math.LN2;function ow(t){return t>>>=0,t===0?32:31-(nw(t)/rw|0)|0}var Ds=64,Us=4194304;function Hi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function La(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,o=t.suspendedLanes,i=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Hi(a):(i&=s,i!==0&&(r=Hi(i)))}else s=n&~o,s!==0?r=Hi(s):i!==0&&(r=Hi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&o)&&(o=r&-r,i=e&-e,o>=i||o===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),o=1<<n,r|=t[n],e&=~o;return r}function iw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,o=t.expirationTimes,i=t.pendingLanes;0<i;){var s=31-Cn(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=iw(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Zc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function im(){var t=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),t}function Ul(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _s(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function aw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var o=31-Cn(n),i=1<<o;e[o]=0,r[o]=-1,t[o]=-1,n&=~i}}function qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),o=1<<r;o&e|t[r]&e&&(t[r]|=e),n&=~o}}var Ye=0;function sm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var am,$d,lm,cm,dm,Qc=!1,Ns=[],Tr=null,Ar=null,Rr=null,ns=new Map,rs=new Map,vr=[],lw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rf(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":ns.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":rs.delete(e.pointerId)}}function Ci(t,e,n,r,o,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},e!==null&&(e=xs(e),e!==null&&$d(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function cw(t,e,n,r,o){switch(e){case"focusin":return Tr=Ci(Tr,t,e,n,r,o),!0;case"dragenter":return Ar=Ci(Ar,t,e,n,r,o),!0;case"mouseover":return Rr=Ci(Rr,t,e,n,r,o),!0;case"pointerover":var i=o.pointerId;return ns.set(i,Ci(ns.get(i)||null,t,e,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,rs.set(i,Ci(rs.get(i)||null,t,e,n,r,o)),!0}return!1}function um(t){var e=ro(t.target);if(e!==null){var n=vo(e);if(n!==null){if(e=n.tag,e===13){if(e=Jp(n),e!==null){t.blockedOn=e,dm(t.priority,function(){lm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ga(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jc=r,n.target.dispatchEvent(r),jc=null}else return e=xs(n),e!==null&&$d(e),t.blockedOn=n,!1;e.shift()}return!0}function of(t,e,n){ga(t)&&n.delete(e)}function dw(){Qc=!1,Tr!==null&&ga(Tr)&&(Tr=null),Ar!==null&&ga(Ar)&&(Ar=null),Rr!==null&&ga(Rr)&&(Rr=null),ns.forEach(of),rs.forEach(of)}function bi(t,e){t.blockedOn===e&&(t.blockedOn=null,Qc||(Qc=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,dw)))}function os(t){function e(o){return bi(o,t)}if(0<Ns.length){bi(Ns[0],t);for(var n=1;n<Ns.length;n++){var r=Ns[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tr!==null&&bi(Tr,t),Ar!==null&&bi(Ar,t),Rr!==null&&bi(Rr,t),ns.forEach(e),rs.forEach(e),n=0;n<vr.length;n++)r=vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)um(n),n.blockedOn===null&&vr.shift()}var ti=lr.ReactCurrentBatchConfig,Da=!0;function uw(t,e,n,r){var o=Ye,i=ti.transition;ti.transition=null;try{Ye=1,Kd(t,e,n,r)}finally{Ye=o,ti.transition=i}}function fw(t,e,n,r){var o=Ye,i=ti.transition;ti.transition=null;try{Ye=4,Kd(t,e,n,r)}finally{Ye=o,ti.transition=i}}function Kd(t,e,n,r){if(Da){var o=Jc(t,e,n,r);if(o===null)Gl(t,e,r,Ua,n),rf(t,r);else if(cw(o,t,e,n,r))r.stopPropagation();else if(rf(t,r),e&4&&-1<lw.indexOf(t)){for(;o!==null;){var i=xs(o);if(i!==null&&am(i),i=Jc(t,e,n,r),i===null&&Gl(t,e,r,Ua,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Gl(t,e,r,null,n)}}var Ua=null;function Jc(t,e,n,r){if(Ua=null,t=Yd(r),t=ro(t),t!==null)if(e=vo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ua=t,null}function fm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jg()){case jd:return 1;case rm:return 4;case Pa:case ew:return 16;case om:return 536870912;default:return 16}default:return 16}}var Sr=null,Zd=null,wa=null;function hm(){if(wa)return wa;var t,e=Zd,n=e.length,r,o="value"in Sr?Sr.value:Sr.textContent,i=o.length;for(t=0;t<n&&e[t]===o[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===o[i-r];r++);return wa=o.slice(t,1<r?1-r:void 0)}function _a(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Is(){return!0}function sf(){return!1}function cn(t){function e(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Is:sf,this.isPropagationStopped=sf,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Is)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Is)},persist:function(){},isPersistent:Is}),e}var vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qd=cn(vi),vs=st({},vi,{view:0,detail:0}),hw=cn(vs),Nl,Il,Pi,il=st({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pi&&(Pi&&t.type==="mousemove"?(Nl=t.screenX-Pi.screenX,Il=t.screenY-Pi.screenY):Il=Nl=0,Pi=t),Nl)},movementY:function(t){return"movementY"in t?t.movementY:Il}}),af=cn(il),pw=st({},il,{dataTransfer:0}),mw=cn(pw),gw=st({},vs,{relatedTarget:0}),Fl=cn(gw),ww=st({},vi,{animationName:0,elapsedTime:0,pseudoElement:0}),_w=cn(ww),vw=st({},vi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xw=cn(vw),yw=st({},vi,{data:0}),lf=cn(yw),Sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ew={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ew[t])?!!e[t]:!1}function Jd(){return Tw}var Aw=st({},vs,{key:function(t){if(t.key){var e=Sw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_a(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jd,charCode:function(t){return t.type==="keypress"?_a(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_a(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rw=cn(Aw),Cw=st({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cf=cn(Cw),bw=st({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jd}),Pw=cn(bw),Lw=st({},vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dw=cn(Lw),Uw=st({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nw=cn(Uw),Iw=[9,13,27,32],eu=rr&&"CompositionEvent"in window,Yi=null;rr&&"documentMode"in document&&(Yi=document.documentMode);var Fw=rr&&"TextEvent"in window&&!Yi,pm=rr&&(!eu||Yi&&8<Yi&&11>=Yi),df=" ",uf=!1;function mm(t,e){switch(t){case"keyup":return Iw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ho=!1;function Ow(t,e){switch(t){case"compositionend":return gm(e);case"keypress":return e.which!==32?null:(uf=!0,df);case"textInput":return t=e.data,t===df&&uf?null:t;default:return null}}function kw(t,e){if(Ho)return t==="compositionend"||!eu&&mm(t,e)?(t=hm(),wa=Zd=Sr=null,Ho=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pm&&e.locale!=="ko"?null:e.data;default:return null}}var zw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zw[t.type]:e==="textarea"}function wm(t,e,n,r){qp(r),e=Na(e,"onChange"),0<e.length&&(n=new Qd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ji=null,is=null;function Bw(t){Cm(t,0)}function sl(t){var e=Wo(t);if(Hp(e))return t}function Hw(t,e){if(t==="change")return e}var _m=!1;if(rr){var Ol;if(rr){var kl="oninput"in document;if(!kl){var hf=document.createElement("div");hf.setAttribute("oninput","return;"),kl=typeof hf.oninput=="function"}Ol=kl}else Ol=!1;_m=Ol&&(!document.documentMode||9<document.documentMode)}function pf(){ji&&(ji.detachEvent("onpropertychange",vm),is=ji=null)}function vm(t){if(t.propertyName==="value"&&sl(is)){var e=[];wm(e,is,t,Yd(t)),Qp(Bw,e)}}function Vw(t,e,n){t==="focusin"?(pf(),ji=e,is=n,ji.attachEvent("onpropertychange",vm)):t==="focusout"&&pf()}function Gw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sl(is)}function Ww(t,e){if(t==="click")return sl(e)}function Xw(t,e){if(t==="input"||t==="change")return sl(e)}function Yw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:Yw;function ss(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ic.call(e,o)||!Pn(t[o],e[o]))return!1}return!0}function mf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gf(t,e){var n=mf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mf(n)}}function xm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ym(){for(var t=window,e=Ra();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ra(t.document)}return e}function tu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jw(t){var e=ym(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xm(n.ownerDocument.documentElement,n)){if(r!==null&&tu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!t.extend&&i>r&&(o=r,r=i,i=o),o=gf(n,i);var s=gf(n,r);o&&s&&(t.rangeCount!==1||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qw=rr&&"documentMode"in document&&11>=document.documentMode,Vo=null,ed=null,qi=null,td=!1;function wf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||Vo==null||Vo!==Ra(r)||(r=Vo,"selectionStart"in r&&tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qi&&ss(qi,r)||(qi=r,r=Na(ed,"onSelect"),0<r.length&&(e=new Qd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vo)))}function Fs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Go={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionend:Fs("Transition","TransitionEnd")},zl={},Sm={};rr&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete Go.animationend.animation,delete Go.animationiteration.animation,delete Go.animationstart.animation),"TransitionEvent"in window||delete Go.transitionend.transition);function al(t){if(zl[t])return zl[t];if(!Go[t])return t;var e=Go[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sm)return zl[t]=e[n];return t}var Mm=al("animationend"),Em=al("animationiteration"),Tm=al("animationstart"),Am=al("transitionend"),Rm=new Map,_f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(t,e){Rm.set(t,e),_o(e,[t])}for(var Bl=0;Bl<_f.length;Bl++){var Hl=_f[Bl],$w=Hl.toLowerCase(),Kw=Hl[0].toUpperCase()+Hl.slice(1);Br($w,"on"+Kw)}Br(Mm,"onAnimationEnd");Br(Em,"onAnimationIteration");Br(Tm,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(Am,"onTransitionEnd");ai("onMouseEnter",["mouseout","mouseover"]);ai("onMouseLeave",["mouseout","mouseover"]);ai("onPointerEnter",["pointerout","pointerover"]);ai("onPointerLeave",["pointerout","pointerover"]);_o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_o("onBeforeInput",["compositionend","keypress","textInput","paste"]);_o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));function vf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$g(r,e,void 0,t),t.currentTarget=null}function Cm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],o=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;vf(o,a,c),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;vf(o,a,c),i=l}}}if(ba)throw t=Kc,ba=!1,Kc=null,t}function Je(t,e){var n=e[sd];n===void 0&&(n=e[sd]=new Set);var r=t+"__bubble";n.has(r)||(bm(e,t,2,!1),n.add(r))}function Vl(t,e,n){var r=0;e&&(r|=4),bm(n,t,r,e)}var Os="_reactListening"+Math.random().toString(36).slice(2);function as(t){if(!t[Os]){t[Os]=!0,Fp.forEach(function(n){n!=="selectionchange"&&(Zw.has(n)||Vl(n,!1,t),Vl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Os]||(e[Os]=!0,Vl("selectionchange",!1,e))}}function bm(t,e,n,r){switch(fm(e)){case 1:var o=uw;break;case 4:o=fw;break;default:o=Kd}n=o.bind(null,e,n,t),o=void 0,!$c||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?t.addEventListener(e,n,{capture:!0,passive:o}):t.addEventListener(e,n,!0):o!==void 0?t.addEventListener(e,n,{passive:o}):t.addEventListener(e,n,!1)}function Gl(t,e,n,r,o){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=ro(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}Qp(function(){var c=i,u=Yd(n),h=[];e:{var f=Rm.get(t);if(f!==void 0){var m=Qd,_=t;switch(t){case"keypress":if(_a(n)===0)break e;case"keydown":case"keyup":m=Rw;break;case"focusin":_="focus",m=Fl;break;case"focusout":_="blur",m=Fl;break;case"beforeblur":case"afterblur":m=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=mw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Pw;break;case Mm:case Em:case Tm:m=_w;break;case Am:m=Dw;break;case"scroll":m=hw;break;case"wheel":m=Nw;break;case"copy":case"cut":case"paste":m=xw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=cf}var v=(e&4)!==0,p=!v&&t==="scroll",d=v?f!==null?f+"Capture":null:f;v=[];for(var w=c,g;w!==null;){g=w;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,d!==null&&(S=ts(w,d),S!=null&&v.push(ls(w,S,g)))),p)break;w=w.return}0<v.length&&(f=new m(f,_,null,n,u),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==jc&&(_=n.relatedTarget||n.fromElement)&&(ro(_)||_[or]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?ro(_):null,_!==null&&(p=vo(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(v=af,S="onMouseLeave",d="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(v=cf,S="onPointerLeave",d="onPointerEnter",w="pointer"),p=m==null?f:Wo(m),g=_==null?f:Wo(_),f=new v(S,w+"leave",m,n,u),f.target=p,f.relatedTarget=g,S=null,ro(u)===c&&(v=new v(d,w+"enter",_,n,u),v.target=g,v.relatedTarget=p,S=v),p=S,m&&_)t:{for(v=m,d=_,w=0,g=v;g;g=yo(g))w++;for(g=0,S=d;S;S=yo(S))g++;for(;0<w-g;)v=yo(v),w--;for(;0<g-w;)d=yo(d),g--;for(;w--;){if(v===d||d!==null&&v===d.alternate)break t;v=yo(v),d=yo(d)}v=null}else v=null;m!==null&&xf(h,f,m,v,!1),_!==null&&p!==null&&xf(h,p,_,v,!0)}}e:{if(f=c?Wo(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=Hw;else if(ff(f))if(_m)C=Xw;else{C=Gw;var A=Vw}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Ww);if(C&&(C=C(t,c))){wm(h,C,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Vc(f,"number",f.value)}switch(A=c?Wo(c):window,t){case"focusin":(ff(A)||A.contentEditable==="true")&&(Vo=A,ed=c,qi=null);break;case"focusout":qi=ed=Vo=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,wf(h,n,u);break;case"selectionchange":if(qw)break;case"keydown":case"keyup":wf(h,n,u)}var T;if(eu)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ho?mm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(pm&&n.locale!=="ko"&&(Ho||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ho&&(T=hm()):(Sr=u,Zd="value"in Sr?Sr.value:Sr.textContent,Ho=!0)),A=Na(c,P),0<A.length&&(P=new lf(P,t,null,n,u),h.push({event:P,listeners:A}),T?P.data=T:(T=gm(n),T!==null&&(P.data=T)))),(T=Fw?Ow(t,n):kw(t,n))&&(c=Na(c,"onBeforeInput"),0<c.length&&(u=new lf("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=T))}Cm(h,e)})}function ls(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Na(t,e){for(var n=e+"Capture",r=[];t!==null;){var o=t,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ts(t,n),i!=null&&r.unshift(ls(t,i,o)),i=ts(t,e),i!=null&&r.push(ls(t,i,o))),t=t.return}return r}function yo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xf(t,e,n,r,o){for(var i=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,o?(l=ts(n,i),l!=null&&s.unshift(ls(n,l,a))):o||(l=ts(n,i),l!=null&&s.push(ls(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Qw=/\r\n?/g,Jw=/\u0000|\uFFFD/g;function yf(t){return(typeof t=="string"?t:""+t).replace(Qw,`
`).replace(Jw,"")}function ks(t,e,n){if(e=yf(e),yf(t)!==e&&n)throw Error(Z(425))}function Ia(){}var nd=null,rd=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var id=typeof setTimeout=="function"?setTimeout:void 0,e_=typeof clearTimeout=="function"?clearTimeout:void 0,Sf=typeof Promise=="function"?Promise:void 0,t_=typeof queueMicrotask=="function"?queueMicrotask:typeof Sf<"u"?function(t){return Sf.resolve(null).then(t).catch(n_)}:id;function n_(t){setTimeout(function(){throw t})}function Wl(t,e){var n=e,r=0;do{var o=n.nextSibling;if(t.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){t.removeChild(o),os(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);os(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xi=Math.random().toString(36).slice(2),Fn="__reactFiber$"+xi,cs="__reactProps$"+xi,or="__reactContainer$"+xi,sd="__reactEvents$"+xi,r_="__reactListeners$"+xi,o_="__reactHandles$"+xi;function ro(t){var e=t[Fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[or]||n[Fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mf(t);t!==null;){if(n=t[Fn])return n;t=Mf(t)}return e}t=n,n=t.parentNode}return null}function xs(t){return t=t[Fn]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function ll(t){return t[cs]||null}var ad=[],Xo=-1;function Hr(t){return{current:t}}function tt(t){0>Xo||(t.current=ad[Xo],ad[Xo]=null,Xo--)}function Ke(t,e){Xo++,ad[Xo]=t.current,t.current=e}var Fr={},Ot=Hr(Fr),$t=Hr(!1),fo=Fr;function li(t,e){var n=t.type.contextTypes;if(!n)return Fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=o),o}function Kt(t){return t=t.childContextTypes,t!=null}function Fa(){tt($t),tt(Ot)}function Ef(t,e,n){if(Ot.current!==Fr)throw Error(Z(168));Ke(Ot,e),Ke($t,n)}function Pm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(Z(108,Vg(t)||"Unknown",o));return st({},n,r)}function Oa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fr,fo=Ot.current,Ke(Ot,t),Ke($t,$t.current),!0}function Tf(t,e,n){var r=t.stateNode;if(!r)throw Error(Z(169));n?(t=Pm(t,e,fo),r.__reactInternalMemoizedMergedChildContext=t,tt($t),tt(Ot),Ke(Ot,t)):tt($t),Ke($t,n)}var Zn=null,cl=!1,Xl=!1;function Lm(t){Zn===null?Zn=[t]:Zn.push(t)}function i_(t){cl=!0,Lm(t)}function Vr(){if(!Xl&&Zn!==null){Xl=!0;var t=0,e=Ye;try{var n=Zn;for(Ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Zn=null,cl=!1}catch(o){throw Zn!==null&&(Zn=Zn.slice(t+1)),nm(jd,Vr),o}finally{Ye=e,Xl=!1}}return null}var Yo=[],jo=0,ka=null,za=0,fn=[],hn=0,ho=null,Jn=1,er="";function Zr(t,e){Yo[jo++]=za,Yo[jo++]=ka,ka=t,za=e}function Dm(t,e,n){fn[hn++]=Jn,fn[hn++]=er,fn[hn++]=ho,ho=t;var r=Jn;t=er;var o=32-Cn(r)-1;r&=~(1<<o),n+=1;var i=32-Cn(e)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Jn=1<<32-Cn(e)+o|n<<o|r,er=i+t}else Jn=1<<i|n<<o|r,er=t}function nu(t){t.return!==null&&(Zr(t,1),Dm(t,1,0))}function ru(t){for(;t===ka;)ka=Yo[--jo],Yo[jo]=null,za=Yo[--jo],Yo[jo]=null;for(;t===ho;)ho=fn[--hn],fn[hn]=null,er=fn[--hn],fn[hn]=null,Jn=fn[--hn],fn[hn]=null}var on=null,rn=null,rt=!1,An=null;function Um(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Af(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,rn=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ho!==null?{id:Jn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,rn=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(rt){var e=rn;if(e){var n=e;if(!Af(t,e)){if(ld(t))throw Error(Z(418));e=Cr(n.nextSibling);var r=on;e&&Af(t,e)?Um(r,n):(t.flags=t.flags&-4097|2,rt=!1,on=t)}}else{if(ld(t))throw Error(Z(418));t.flags=t.flags&-4097|2,rt=!1,on=t}}}function Rf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function zs(t){if(t!==on)return!1;if(!rt)return Rf(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=rn)){if(ld(t))throw Nm(),Error(Z(418));for(;e;)Um(t,e),e=Cr(e.nextSibling)}if(Rf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rn=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rn=null}}else rn=on?Cr(t.stateNode.nextSibling):null;return!0}function Nm(){for(var t=rn;t;)t=Cr(t.nextSibling)}function ci(){rn=on=null,rt=!1}function ou(t){An===null?An=[t]:An.push(t)}var s_=lr.ReactCurrentBatchConfig;function Li(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var r=n.stateNode}if(!r)throw Error(Z(147,t));var o=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,t))}return t}function Bs(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cf(t){var e=t._init;return e(t._payload)}function Im(t){function e(d,w){if(t){var g=d.deletions;g===null?(d.deletions=[w],d.flags|=16):g.push(w)}}function n(d,w){if(!t)return null;for(;w!==null;)e(d,w),w=w.sibling;return null}function r(d,w){for(d=new Map;w!==null;)w.key!==null?d.set(w.key,w):d.set(w.index,w),w=w.sibling;return d}function o(d,w){return d=Dr(d,w),d.index=0,d.sibling=null,d}function i(d,w,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<w?(d.flags|=2,w):g):(d.flags|=2,w)):(d.flags|=1048576,w)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,w,g,S){return w===null||w.tag!==6?(w=Ql(g,d.mode,S),w.return=d,w):(w=o(w,g),w.return=d,w)}function l(d,w,g,S){var C=g.type;return C===Bo?u(d,w,g.props.children,S,g.key):w!==null&&(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wr&&Cf(C)===w.type)?(S=o(w,g.props),S.ref=Li(d,w,g),S.return=d,S):(S=Ta(g.type,g.key,g.props,null,d.mode,S),S.ref=Li(d,w,g),S.return=d,S)}function c(d,w,g,S){return w===null||w.tag!==4||w.stateNode.containerInfo!==g.containerInfo||w.stateNode.implementation!==g.implementation?(w=Jl(g,d.mode,S),w.return=d,w):(w=o(w,g.children||[]),w.return=d,w)}function u(d,w,g,S,C){return w===null||w.tag!==7?(w=co(g,d.mode,S,C),w.return=d,w):(w=o(w,g),w.return=d,w)}function h(d,w,g){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Ql(""+w,d.mode,g),w.return=d,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case bs:return g=Ta(w.type,w.key,w.props,null,d.mode,g),g.ref=Li(d,null,w),g.return=d,g;case zo:return w=Jl(w,d.mode,g),w.return=d,w;case wr:var S=w._init;return h(d,S(w._payload),g)}if(Bi(w)||Ai(w))return w=co(w,d.mode,g,null),w.return=d,w;Bs(d,w)}return null}function f(d,w,g,S){var C=w!==null?w.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(d,w,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bs:return g.key===C?l(d,w,g,S):null;case zo:return g.key===C?c(d,w,g,S):null;case wr:return C=g._init,f(d,w,C(g._payload),S)}if(Bi(g)||Ai(g))return C!==null?null:u(d,w,g,S,null);Bs(d,g)}return null}function m(d,w,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(g)||null,a(w,d,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case bs:return d=d.get(S.key===null?g:S.key)||null,l(w,d,S,C);case zo:return d=d.get(S.key===null?g:S.key)||null,c(w,d,S,C);case wr:var A=S._init;return m(d,w,g,A(S._payload),C)}if(Bi(S)||Ai(S))return d=d.get(g)||null,u(w,d,S,C,null);Bs(w,S)}return null}function _(d,w,g,S){for(var C=null,A=null,T=w,P=w=0,E=null;T!==null&&P<g.length;P++){T.index>P?(E=T,T=null):E=T.sibling;var x=f(d,T,g[P],S);if(x===null){T===null&&(T=E);break}t&&T&&x.alternate===null&&e(d,T),w=i(x,w,P),A===null?C=x:A.sibling=x,A=x,T=E}if(P===g.length)return n(d,T),rt&&Zr(d,P),C;if(T===null){for(;P<g.length;P++)T=h(d,g[P],S),T!==null&&(w=i(T,w,P),A===null?C=T:A.sibling=T,A=T);return rt&&Zr(d,P),C}for(T=r(d,T);P<g.length;P++)E=m(T,d,P,g[P],S),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?P:E.key),w=i(E,w,P),A===null?C=E:A.sibling=E,A=E);return t&&T.forEach(function(I){return e(d,I)}),rt&&Zr(d,P),C}function v(d,w,g,S){var C=Ai(g);if(typeof C!="function")throw Error(Z(150));if(g=C.call(g),g==null)throw Error(Z(151));for(var A=C=null,T=w,P=w=0,E=null,x=g.next();T!==null&&!x.done;P++,x=g.next()){T.index>P?(E=T,T=null):E=T.sibling;var I=f(d,T,x.value,S);if(I===null){T===null&&(T=E);break}t&&T&&I.alternate===null&&e(d,T),w=i(I,w,P),A===null?C=I:A.sibling=I,A=I,T=E}if(x.done)return n(d,T),rt&&Zr(d,P),C;if(T===null){for(;!x.done;P++,x=g.next())x=h(d,x.value,S),x!==null&&(w=i(x,w,P),A===null?C=x:A.sibling=x,A=x);return rt&&Zr(d,P),C}for(T=r(d,T);!x.done;P++,x=g.next())x=m(T,d,P,x.value,S),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?P:x.key),w=i(x,w,P),A===null?C=x:A.sibling=x,A=x);return t&&T.forEach(function(W){return e(d,W)}),rt&&Zr(d,P),C}function p(d,w,g,S){if(typeof g=="object"&&g!==null&&g.type===Bo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bs:e:{for(var C=g.key,A=w;A!==null;){if(A.key===C){if(C=g.type,C===Bo){if(A.tag===7){n(d,A.sibling),w=o(A,g.props.children),w.return=d,d=w;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wr&&Cf(C)===A.type){n(d,A.sibling),w=o(A,g.props),w.ref=Li(d,A,g),w.return=d,d=w;break e}n(d,A);break}else e(d,A);A=A.sibling}g.type===Bo?(w=co(g.props.children,d.mode,S,g.key),w.return=d,d=w):(S=Ta(g.type,g.key,g.props,null,d.mode,S),S.ref=Li(d,w,g),S.return=d,d=S)}return s(d);case zo:e:{for(A=g.key;w!==null;){if(w.key===A)if(w.tag===4&&w.stateNode.containerInfo===g.containerInfo&&w.stateNode.implementation===g.implementation){n(d,w.sibling),w=o(w,g.children||[]),w.return=d,d=w;break e}else{n(d,w);break}else e(d,w);w=w.sibling}w=Jl(g,d.mode,S),w.return=d,d=w}return s(d);case wr:return A=g._init,p(d,w,A(g._payload),S)}if(Bi(g))return _(d,w,g,S);if(Ai(g))return v(d,w,g,S);Bs(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,w!==null&&w.tag===6?(n(d,w.sibling),w=o(w,g),w.return=d,d=w):(n(d,w),w=Ql(g,d.mode,S),w.return=d,d=w),s(d)):n(d,w)}return p}var di=Im(!0),Fm=Im(!1),Ba=Hr(null),Ha=null,qo=null,iu=null;function su(){iu=qo=Ha=null}function au(t){var e=Ba.current;tt(Ba),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ni(t,e){Ha=t,iu=qo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function _n(t){var e=t._currentValue;if(iu!==t)if(t={context:t,memoizedValue:e,next:null},qo===null){if(Ha===null)throw Error(Z(308));qo=t,Ha.dependencies={lanes:0,firstContext:t}}else qo=qo.next=t;return e}var oo=null;function lu(t){oo===null?oo=[t]:oo.push(t)}function Om(t,e,n,r){var o=e.interleaved;return o===null?(n.next=n,lu(e)):(n.next=o.next,o.next=n),e.interleaved=n,ir(t,r)}function ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function km(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Be&2){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,ir(t,n)}return o=r.interleaved,o===null?(e.next=e,lu(r)):(e.next=o.next,o.next=e),r.interleaved=e,ir(t,n)}function va(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}function bf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=e:i=i.next=e}else o=i=e;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Va(t,e,n,r){var o=t.updateQueue;_r=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(i!==null){var h=o.baseState;s=0,u=c=l=null,a=i;do{var f=a.lane,m=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(f=e,m=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=st({},h,f);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=h):u=u.next=m,s|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(u===null&&(l=h),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,e=o.shared.interleaved,e!==null){o=e;do s|=o.lane,o=o.next;while(o!==e)}else i===null&&(o.shared.lanes=0);mo|=s,t.lanes=s,t.memoizedState=h}}function Pf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(Z(191,o));o.call(r)}}}var ys={},Hn=Hr(ys),ds=Hr(ys),us=Hr(ys);function io(t){if(t===ys)throw Error(Z(174));return t}function du(t,e){switch(Ke(us,e),Ke(ds,t),Ke(Hn,ys),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wc(e,t)}tt(Hn),Ke(Hn,e)}function ui(){tt(Hn),tt(ds),tt(us)}function zm(t){io(us.current);var e=io(Hn.current),n=Wc(e,t.type);e!==n&&(Ke(ds,t),Ke(Hn,n))}function uu(t){ds.current===t&&(tt(Hn),tt(ds))}var ot=Hr(0);function Ga(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yl=[];function fu(){for(var t=0;t<Yl.length;t++)Yl[t]._workInProgressVersionPrimary=null;Yl.length=0}var xa=lr.ReactCurrentDispatcher,jl=lr.ReactCurrentBatchConfig,po=0,it=null,gt=null,yt=null,Wa=!1,$i=!1,fs=0,a_=0;function Dt(){throw Error(Z(321))}function hu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function pu(t,e,n,r,o,i){if(po=i,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xa.current=t===null||t.memoizedState===null?u_:f_,t=n(r,o),$i){i=0;do{if($i=!1,fs=0,25<=i)throw Error(Z(301));i+=1,yt=gt=null,e.updateQueue=null,xa.current=h_,t=n(r,o)}while($i)}if(xa.current=Xa,e=gt!==null&&gt.next!==null,po=0,yt=gt=it=null,Wa=!1,e)throw Error(Z(300));return t}function mu(){var t=fs!==0;return fs=0,t}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?it.memoizedState=yt=t:yt=yt.next=t,yt}function vn(){if(gt===null){var t=it.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=yt===null?it.memoizedState:yt.next;if(e!==null)yt=e,gt=t;else{if(t===null)throw Error(Z(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},yt===null?it.memoizedState=yt=t:yt=yt.next=t}return yt}function hs(t,e){return typeof e=="function"?e(t):e}function ql(t){var e=vn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var r=gt,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,c=i;do{var u=c.lane;if((po&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,it.lanes|=u,mo|=u}c=c.next}while(c!==null&&c!==i);l===null?s=r:l.next=a,Pn(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){o=t;do i=o.lane,it.lanes|=i,mo|=i,o=o.next;while(o!==t)}else o===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $l(t){var e=vn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var r=n.dispatch,o=n.pending,i=e.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=t(i,s.action),s=s.next;while(s!==o);Pn(i,e.memoizedState)||(qt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Bm(){}function Hm(t,e){var n=it,r=vn(),o=e(),i=!Pn(r.memoizedState,o);if(i&&(r.memoizedState=o,qt=!0),r=r.queue,gu(Wm.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,ps(9,Gm.bind(null,n,r,o,e),void 0,null),St===null)throw Error(Z(349));po&30||Vm(n,e,o)}return o}function Vm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gm(t,e,n,r){e.value=n,e.getSnapshot=r,Xm(e)&&Ym(t)}function Wm(t,e,n){return n(function(){Xm(e)&&Ym(t)})}function Xm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function Ym(t){var e=ir(t,1);e!==null&&bn(e,t,1,-1)}function Lf(t){var e=Un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:t},e.queue=t,t=t.dispatch=d_.bind(null,it,t),[e.memoizedState,t]}function ps(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function jm(){return vn().memoizedState}function ya(t,e,n,r){var o=Un();it.flags|=t,o.memoizedState=ps(1|e,n,void 0,r===void 0?null:r)}function dl(t,e,n,r){var o=vn();r=r===void 0?null:r;var i=void 0;if(gt!==null){var s=gt.memoizedState;if(i=s.destroy,r!==null&&hu(r,s.deps)){o.memoizedState=ps(e,n,i,r);return}}it.flags|=t,o.memoizedState=ps(1|e,n,i,r)}function Df(t,e){return ya(8390656,8,t,e)}function gu(t,e){return dl(2048,8,t,e)}function qm(t,e){return dl(4,2,t,e)}function $m(t,e){return dl(4,4,t,e)}function Km(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zm(t,e,n){return n=n!=null?n.concat([t]):null,dl(4,4,Km.bind(null,e,t),n)}function wu(){}function Qm(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jm(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function e0(t,e,n){return po&21?(Pn(n,e)||(n=im(),it.lanes|=n,mo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function l_(t,e){var n=Ye;Ye=n!==0&&4>n?n:4,t(!0);var r=jl.transition;jl.transition={};try{t(!1),e()}finally{Ye=n,jl.transition=r}}function t0(){return vn().memoizedState}function c_(t,e,n){var r=Lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},n0(t))r0(e,n);else if(n=Om(t,e,n,r),n!==null){var o=Ht();bn(n,t,r,o),o0(n,e,r)}}function d_(t,e,n){var r=Lr(t),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(n0(t))r0(e,o);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,Pn(a,s)){var l=e.interleaved;l===null?(o.next=o,lu(e)):(o.next=l.next,l.next=o),e.interleaved=o;return}}catch{}finally{}n=Om(t,e,o,r),n!==null&&(o=Ht(),bn(n,t,r,o),o0(n,e,r))}}function n0(t){var e=t.alternate;return t===it||e!==null&&e===it}function r0(t,e){$i=Wa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}var Xa={readContext:_n,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},u_={readContext:_n,useCallback:function(t,e){return Un().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:Df,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ya(4194308,4,Km.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ya(4194308,4,t,e)},useInsertionEffect:function(t,e){return ya(4,2,t,e)},useMemo:function(t,e){var n=Un();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Un();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=c_.bind(null,it,t),[r.memoizedState,t]},useRef:function(t){var e=Un();return t={current:t},e.memoizedState=t},useState:Lf,useDebugValue:wu,useDeferredValue:function(t){return Un().memoizedState=t},useTransition:function(){var t=Lf(!1),e=t[0];return t=l_.bind(null,t[1]),Un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=it,o=Un();if(rt){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),St===null)throw Error(Z(349));po&30||Vm(r,e,n)}o.memoizedState=n;var i={value:n,getSnapshot:e};return o.queue=i,Df(Wm.bind(null,r,i,t),[t]),r.flags|=2048,ps(9,Gm.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Un(),e=St.identifierPrefix;if(rt){var n=er,r=Jn;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=a_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},f_={readContext:_n,useCallback:Qm,useContext:_n,useEffect:gu,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:$m,useMemo:Jm,useReducer:ql,useRef:jm,useState:function(){return ql(hs)},useDebugValue:wu,useDeferredValue:function(t){var e=vn();return e0(e,gt.memoizedState,t)},useTransition:function(){var t=ql(hs)[0],e=vn().memoizedState;return[t,e]},useMutableSource:Bm,useSyncExternalStore:Hm,useId:t0,unstable_isNewReconciler:!1},h_={readContext:_n,useCallback:Qm,useContext:_n,useEffect:gu,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:$m,useMemo:Jm,useReducer:$l,useRef:jm,useState:function(){return $l(hs)},useDebugValue:wu,useDeferredValue:function(t){var e=vn();return gt===null?e.memoizedState=t:e0(e,gt.memoizedState,t)},useTransition:function(){var t=$l(hs)[0],e=vn().memoizedState;return[t,e]},useMutableSource:Bm,useSyncExternalStore:Hm,useId:t0,unstable_isNewReconciler:!1};function En(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ud(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ul={isMounted:function(t){return(t=t._reactInternals)?vo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ht(),o=Lr(t),i=nr(r,o);i.payload=e,n!=null&&(i.callback=n),e=br(t,i,o),e!==null&&(bn(e,t,o,r),va(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ht(),o=Lr(t),i=nr(r,o);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=br(t,i,o),e!==null&&(bn(e,t,o,r),va(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),r=Lr(t),o=nr(n,r);o.tag=2,e!=null&&(o.callback=e),e=br(t,o,r),e!==null&&(bn(e,t,r,n),va(e,t,r))}};function Uf(t,e,n,r,o,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,s):e.prototype&&e.prototype.isPureReactComponent?!ss(n,r)||!ss(o,i):!0}function i0(t,e,n){var r=!1,o=Fr,i=e.contextType;return typeof i=="object"&&i!==null?i=_n(i):(o=Kt(e)?fo:Ot.current,r=e.contextTypes,i=(r=r!=null)?li(t,o):Fr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ul,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=i),e}function Nf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ul.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,r){var o=t.stateNode;o.props=n,o.state=t.memoizedState,o.refs={},cu(t);var i=e.contextType;typeof i=="object"&&i!==null?o.context=_n(i):(i=Kt(e)?fo:Ot.current,o.context=li(t,i)),o.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ud(t,e,i,n),o.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&ul.enqueueReplaceState(o,o.state,null),Va(t,n,o,r),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308)}function fi(t,e){try{var n="",r=e;do n+=Hg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:o,digest:null}}function Kl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var p_=typeof WeakMap=="function"?WeakMap:Map;function s0(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ja||(ja=!0,Md=r),hd(t,e)},n}function a0(t,e,n){n=nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var o=e.value;n.payload=function(){return r(o)},n.callback=function(){hd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){hd(t,e),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function If(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new p_;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(n)||(o.add(n),t=C_.bind(null,t,e,n),e.then(t,t))}function Ff(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Of(t,e,n,r,o){return t.mode&1?(t.flags|=65536,t.lanes=o,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var m_=lr.ReactCurrentOwner,qt=!1;function Bt(t,e,n,r){e.child=t===null?Fm(e,null,n,r):di(e,t.child,n,r)}function kf(t,e,n,r,o){n=n.render;var i=e.ref;return ni(e,o),r=pu(t,e,n,r,i,o),n=mu(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,sr(t,e,o)):(rt&&n&&nu(e),e.flags|=1,Bt(t,e,r,o),e.child)}function zf(t,e,n,r,o){if(t===null){var i=n.type;return typeof i=="function"&&!Tu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,l0(t,e,i,r,o)):(t=Ta(n.type,null,r,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:ss,n(s,r)&&t.ref===e.ref)return sr(t,e,o)}return e.flags|=1,t=Dr(i,r),t.ref=e.ref,t.return=e,e.child=t}function l0(t,e,n,r,o){if(t!==null){var i=t.memoizedProps;if(ss(i,r)&&t.ref===e.ref)if(qt=!1,e.pendingProps=r=i,(t.lanes&o)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,sr(t,e,o)}return pd(t,e,n,r,o)}function c0(t,e,n){var r=e.pendingProps,o=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Ko,nn),nn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ke(Ko,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ke(Ko,nn),nn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ke(Ko,nn),nn|=r;return Bt(t,e,o,n),e.child}function d0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,r,o){var i=Kt(n)?fo:Ot.current;return i=li(e,i),ni(e,o),n=pu(t,e,n,r,i,o),r=mu(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,sr(t,e,o)):(rt&&r&&nu(e),e.flags|=1,Bt(t,e,n,o),e.child)}function Bf(t,e,n,r,o){if(Kt(n)){var i=!0;Oa(e)}else i=!1;if(ni(e,o),e.stateNode===null)Sa(t,e),i0(e,n,r),fd(e,n,r,o),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=_n(c):(c=Kt(n)?fo:Ot.current,c=li(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Nf(e,s,r,c),_r=!1;var f=e.memoizedState;s.state=f,Va(e,r,s,o),l=e.memoizedState,a!==r||f!==l||$t.current||_r?(typeof u=="function"&&(ud(e,n,u,r),l=e.memoizedState),(a=_r||Uf(e,n,a,r,f,l,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,km(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:En(e.type,a),s.props=c,h=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=_n(l):(l=Kt(n)?fo:Ot.current,l=li(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Nf(e,s,r,l),_r=!1,f=e.memoizedState,s.state=f,Va(e,r,s,o);var _=e.memoizedState;a!==h||f!==_||$t.current||_r?(typeof m=="function"&&(ud(e,n,m,r),_=e.memoizedState),(c=_r||Uf(e,n,c,r,f,_,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),s.props=r,s.state=_,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return md(t,e,n,r,i,o)}function md(t,e,n,r,o,i){d0(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return o&&Tf(e,n,!1),sr(t,e,i);r=e.stateNode,m_.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=di(e,t.child,null,i),e.child=di(e,null,a,i)):Bt(t,e,a,i),e.memoizedState=r.state,o&&Tf(e,n,!0),e.child}function u0(t){var e=t.stateNode;e.pendingContext?Ef(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ef(t,e.context,!1),du(t,e.containerInfo)}function Hf(t,e,n,r,o){return ci(),ou(o),e.flags|=256,Bt(t,e,n,r),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function wd(t){return{baseLanes:t,cachePool:null,transitions:null}}function f0(t,e,n){var r=e.pendingProps,o=ot.current,i=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(o&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(o|=1),Ke(ot,o&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,i?(r=e.mode,i=e.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=pl(s,r,0,null),t=co(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=wd(n),e.memoizedState=gd,t):_u(e,s));if(o=t.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return g_(t,e,s,r,a,o,n);if(i){i=r.fallback,s=e.mode,o=t.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==o?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Dr(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Dr(a,i):(i=co(i,s,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,s=t.child.memoizedState,s=s===null?wd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=t.childLanes&~n,e.memoizedState=gd,r}return i=t.child,t=i.sibling,r=Dr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _u(t,e){return e=pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hs(t,e,n,r){return r!==null&&ou(r),di(e,t.child,null,n),t=_u(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function g_(t,e,n,r,o,i,s){if(n)return e.flags&256?(e.flags&=-257,r=Kl(Error(Z(422))),Hs(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,o=e.mode,r=pl({mode:"visible",children:r.children},o,0,null),i=co(i,o,s,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&di(e,t.child,null,s),e.child.memoizedState=wd(s),e.memoizedState=gd,i);if(!(e.mode&1))return Hs(t,e,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(Z(419)),r=Kl(i,r,void 0),Hs(t,e,s,r)}if(a=(s&t.childLanes)!==0,qt||a){if(r=St,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ir(t,o),bn(r,t,o,-1))}return Eu(),r=Kl(Error(Z(421))),Hs(t,e,s,r)}return o.data==="$?"?(e.flags|=128,e.child=t.child,e=b_.bind(null,t),o._reactRetry=e,null):(t=i.treeContext,rn=Cr(o.nextSibling),on=e,rt=!0,An=null,t!==null&&(fn[hn++]=Jn,fn[hn++]=er,fn[hn++]=ho,Jn=t.id,er=t.overflow,ho=e),e=_u(e,r.children),e.flags|=4096,e)}function Vf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dd(t.return,e,n)}function Zl(t,e,n,r,o){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function h0(t,e,n){var r=e.pendingProps,o=r.revealOrder,i=r.tail;if(Bt(t,e,r.children,n),r=ot.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vf(t,n,e);else if(t.tag===19)Vf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ke(ot,r),!(e.mode&1))e.memoizedState=null;else switch(o){case"forwards":for(n=e.child,o=null;n!==null;)t=n.alternate,t!==null&&Ga(t)===null&&(o=n),n=n.sibling;n=o,n===null?(o=e.child,e.child=null):(o=n.sibling,n.sibling=null),Zl(e,!1,o,n,i);break;case"backwards":for(n=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&Ga(t)===null){e.child=o;break}t=o.sibling,o.sibling=n,n=o,o=t}Zl(e,!0,n,null,i);break;case"together":Zl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function w_(t,e,n){switch(e.tag){case 3:u0(e),ci();break;case 5:zm(e);break;case 1:Kt(e.type)&&Oa(e);break;case 4:du(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,o=e.memoizedProps.value;Ke(Ba,r._currentValue),r._currentValue=o;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ke(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?f0(t,e,n):(Ke(ot,ot.current&1),t=sr(t,e,n),t!==null?t.sibling:null);Ke(ot,ot.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return h0(t,e,n);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ke(ot,ot.current),r)break;return null;case 22:case 23:return e.lanes=0,c0(t,e,n)}return sr(t,e,n)}var p0,_d,m0,g0;p0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};m0=function(t,e,n,r){var o=t.memoizedProps;if(o!==r){t=e.stateNode,io(Hn.current);var i=null;switch(n){case"input":o=Bc(t,o),r=Bc(t,r),i=[];break;case"select":o=st({},o,{value:void 0}),r=st({},r,{value:void 0}),i=[];break;case"textarea":o=Gc(t,o),r=Gc(t,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ia)}Xc(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ji.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ji.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Je("scroll",t),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};g0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Di(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function __(t,e,n){var r=e.pendingProps;switch(ru(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Kt(e.type)&&Fa(),Ut(e),null;case 3:return r=e.stateNode,ui(),tt($t),tt(Ot),fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(zs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(Ad(An),An=null))),_d(t,e),Ut(e),null;case 5:uu(e);var o=io(us.current);if(n=e.type,t!==null&&e.stateNode!=null)m0(t,e,n,r,o),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(Z(166));return Ut(e),null}if(t=io(Hn.current),zs(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Fn]=e,r[cs]=i,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",r),Je("close",r);break;case"iframe":case"object":case"embed":Je("load",r);break;case"video":case"audio":for(o=0;o<Vi.length;o++)Je(Vi[o],r);break;case"source":Je("error",r);break;case"img":case"image":case"link":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"input":Ku(r,i),Je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Je("invalid",r);break;case"textarea":Qu(r,i),Je("invalid",r)}Xc(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ks(r.textContent,a,t),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ks(r.textContent,a,t),o=["children",""+a]):Ji.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Je("scroll",r)}switch(n){case"input":Ps(r),Zu(r,i,!0);break;case"textarea":Ps(r),Ju(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ia)}r=o,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Fn]=e,t[cs]=r,p0(t,e,!1,!1),e.stateNode=t;e:{switch(s=Yc(n,r),n){case"dialog":Je("cancel",t),Je("close",t),o=r;break;case"iframe":case"object":case"embed":Je("load",t),o=r;break;case"video":case"audio":for(o=0;o<Vi.length;o++)Je(Vi[o],t);o=r;break;case"source":Je("error",t),o=r;break;case"img":case"image":case"link":Je("error",t),Je("load",t),o=r;break;case"details":Je("toggle",t),o=r;break;case"input":Ku(t,r),o=Bc(t,r),Je("invalid",t);break;case"option":o=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},o=st({},r,{value:void 0}),Je("invalid",t);break;case"textarea":Qu(t,r),o=Gc(t,r),Je("invalid",t);break;default:o=r}Xc(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?jp(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xp(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&es(t,l):typeof l=="number"&&es(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ji.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Je("scroll",t):l!=null&&Vd(t,i,l,s))}switch(n){case"input":Ps(t),Zu(t,r,!1);break;case"textarea":Ps(t),Ju(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Qo(t,!!r.multiple,i,!1):r.defaultValue!=null&&Qo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(t.onclick=Ia)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)g0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(Z(166));if(n=io(us.current),io(Hn.current),zs(e)){if(r=e.stateNode,n=e.memoizedProps,r[Fn]=e,(i=r.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:ks(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ks(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fn]=e,e.stateNode=r}return Ut(e),null;case 13:if(tt(ot),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&rn!==null&&e.mode&1&&!(e.flags&128))Nm(),ci(),e.flags|=98560,i=!1;else if(i=zs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(Z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Z(317));i[Fn]=e}else ci(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),i=!1}else An!==null&&(Ad(An),An=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?wt===0&&(wt=3):Eu())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return ui(),_d(t,e),t===null&&as(e.stateNode.containerInfo),Ut(e),null;case 10:return au(e.type._context),Ut(e),null;case 17:return Kt(e.type)&&Fa(),Ut(e),null;case 19:if(tt(ot),i=e.memoizedState,i===null)return Ut(e),null;if(r=(e.flags&128)!==0,s=i.rendering,s===null)if(r)Di(i,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ga(t),s!==null){for(e.flags|=128,Di(i,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,t=s.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ke(ot,ot.current&1|2),e.child}t=t.sibling}i.tail!==null&&ut()>hi&&(e.flags|=128,r=!0,Di(i,!1),e.lanes=4194304)}else{if(!r)if(t=Ga(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Di(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!rt)return Ut(e),null}else 2*ut()-i.renderingStartTime>hi&&n!==1073741824&&(e.flags|=128,r=!0,Di(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(n=i.last,n!==null?n.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ut(),e.sibling=null,n=ot.current,Ke(ot,r?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return Mu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nn&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function v_(t,e){switch(ru(e),e.tag){case 1:return Kt(e.type)&&Fa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ui(),tt($t),tt(Ot),fu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return uu(e),null;case 13:if(tt(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));ci()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(ot),null;case 4:return ui(),null;case 10:return au(e.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var Vs=!1,Ft=!1,x_=typeof WeakSet=="function"?WeakSet:Set,fe=null;function $o(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ct(t,e,r)}else n.current=null}function vd(t,e,n){try{n()}catch(r){ct(t,e,r)}}var Gf=!1;function y_(t,e){if(nd=Da,t=ym(),tu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var m;h!==n||o!==0&&h.nodeType!==3||(a=s+o),h!==i||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===o&&(a=s),f===i&&++u===r&&(l=s),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},Da=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,p=_.memoizedState,d=e.stateNode,w=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:En(e.type,v),p);d.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(S){ct(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return _=Gf,Gf=!1,_}function Ki(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var i=o.destroy;o.destroy=void 0,i!==void 0&&vd(e,n,i)}o=o.next}while(o!==r)}}function fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w0(t){var e=t.alternate;e!==null&&(t.alternate=null,w0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Fn],delete e[cs],delete e[sd],delete e[r_],delete e[o_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _0(t){return t.tag===5||t.tag===3||t.tag===4}function Wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ia));else if(r!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}function Sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}var Mt=null,Tn=!1;function dr(t,e,n){for(n=n.child;n!==null;)v0(t,e,n),n=n.sibling}function v0(t,e,n){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Ft||$o(n,e);case 6:var r=Mt,o=Tn;Mt=null,dr(t,e,n),Mt=r,Tn=o,Mt!==null&&(Tn?(t=Mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Mt.removeChild(n.stateNode));break;case 18:Mt!==null&&(Tn?(t=Mt,n=n.stateNode,t.nodeType===8?Wl(t.parentNode,n):t.nodeType===1&&Wl(t,n),os(t)):Wl(Mt,n.stateNode));break;case 4:r=Mt,o=Tn,Mt=n.stateNode.containerInfo,Tn=!0,dr(t,e,n),Mt=r,Tn=o;break;case 0:case 11:case 14:case 15:if(!Ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&vd(n,e,s),o=o.next}while(o!==r)}dr(t,e,n);break;case 1:if(!Ft&&($o(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ct(n,e,a)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(Ft=(r=Ft)||n.memoizedState!==null,dr(t,e,n),Ft=r):dr(t,e,n);break;default:dr(t,e,n)}}function Xf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new x_),e.forEach(function(r){var o=P_.bind(null,t,r);n.has(r)||(n.add(r),r.then(o,o))})}}function xn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Mt=a.stateNode,Tn=!1;break e;case 3:Mt=a.stateNode.containerInfo,Tn=!0;break e;case 4:Mt=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(Mt===null)throw Error(Z(160));v0(i,s,o),Mt=null,Tn=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){ct(o,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x0(e,t),e=e.sibling}function x0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xn(e,t),Dn(t),r&4){try{Ki(3,t,t.return),fl(3,t)}catch(v){ct(t,t.return,v)}try{Ki(5,t,t.return)}catch(v){ct(t,t.return,v)}}break;case 1:xn(e,t),Dn(t),r&512&&n!==null&&$o(n,n.return);break;case 5:if(xn(e,t),Dn(t),r&512&&n!==null&&$o(n,n.return),t.flags&32){var o=t.stateNode;try{es(o,"")}catch(v){ct(t,t.return,v)}}if(r&4&&(o=t.stateNode,o!=null)){var i=t.memoizedProps,s=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Vp(o,i),Yc(a,s);var c=Yc(a,i);for(s=0;s<l.length;s+=2){var u=l[s],h=l[s+1];u==="style"?jp(o,h):u==="dangerouslySetInnerHTML"?Xp(o,h):u==="children"?es(o,h):Vd(o,u,h,c)}switch(a){case"input":Hc(o,i);break;case"textarea":Gp(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Qo(o,!!i.multiple,m,!1):f!==!!i.multiple&&(i.defaultValue!=null?Qo(o,!!i.multiple,i.defaultValue,!0):Qo(o,!!i.multiple,i.multiple?[]:"",!1))}o[cs]=i}catch(v){ct(t,t.return,v)}}break;case 6:if(xn(e,t),Dn(t),r&4){if(t.stateNode===null)throw Error(Z(162));o=t.stateNode,i=t.memoizedProps;try{o.nodeValue=i}catch(v){ct(t,t.return,v)}}break;case 3:if(xn(e,t),Dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{os(e.containerInfo)}catch(v){ct(t,t.return,v)}break;case 4:xn(e,t),Dn(t);break;case 13:xn(e,t),Dn(t),o=t.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(yu=ut())),r&4&&Xf(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(c=Ft)||u,xn(e,t),Ft=c):xn(e,t),Dn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(fe=t,u=t.child;u!==null;){for(h=fe=u;fe!==null;){switch(f=fe,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ki(4,f,f.return);break;case 1:$o(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){ct(r,n,v)}}break;case 5:$o(f,f.return);break;case 22:if(f.memoizedState!==null){jf(h);continue}}m!==null?(m.return=f,fe=m):jf(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Yp("display",s))}catch(v){ct(t,t.return,v)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){ct(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:xn(e,t),Dn(t),r&4&&Xf(t);break;case 21:break;default:xn(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_0(n)){var r=n;break e}n=n.return}throw Error(Z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(es(o,""),r.flags&=-33);var i=Wf(t);Sd(t,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Wf(t);yd(t,a,s);break;default:throw Error(Z(161))}}catch(l){ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function S_(t,e,n){fe=t,y0(t)}function y0(t,e,n){for(var r=(t.mode&1)!==0;fe!==null;){var o=fe,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Vs;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||Ft;a=Vs;var c=Ft;if(Vs=s,(Ft=l)&&!c)for(fe=o;fe!==null;)s=fe,l=s.child,s.tag===22&&s.memoizedState!==null?qf(o):l!==null?(l.return=s,fe=l):qf(o);for(;i!==null;)fe=i,y0(i),i=i.sibling;fe=o,Vs=a,Ft=c}Yf(t)}else o.subtreeFlags&8772&&i!==null?(i.return=o,fe=i):Yf(t)}}function Yf(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||fl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ft)if(n===null)r.componentDidMount();else{var o=e.elementType===e.type?n.memoizedProps:En(e.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Pf(e,i,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pf(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&os(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Ft||e.flags&512&&xd(e)}catch(f){ct(e,e.return,f)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function jf(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function qf(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fl(4,e)}catch(l){ct(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var o=e.return;try{r.componentDidMount()}catch(l){ct(e,o,l)}}var i=e.return;try{xd(e)}catch(l){ct(e,i,l)}break;case 5:var s=e.return;try{xd(e)}catch(l){ct(e,s,l)}}}catch(l){ct(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var M_=Math.ceil,Ya=lr.ReactCurrentDispatcher,vu=lr.ReactCurrentOwner,wn=lr.ReactCurrentBatchConfig,Be=0,St=null,pt=null,Rt=0,nn=0,Ko=Hr(0),wt=0,ms=null,mo=0,hl=0,xu=0,Zi=null,Yt=null,yu=0,hi=1/0,Kn=null,ja=!1,Md=null,Pr=null,Gs=!1,Mr=null,qa=0,Qi=0,Ed=null,Ma=-1,Ea=0;function Ht(){return Be&6?ut():Ma!==-1?Ma:Ma=ut()}function Lr(t){return t.mode&1?Be&2&&Rt!==0?Rt&-Rt:s_.transition!==null?(Ea===0&&(Ea=im()),Ea):(t=Ye,t!==0||(t=window.event,t=t===void 0?16:fm(t.type)),t):1}function bn(t,e,n,r){if(50<Qi)throw Qi=0,Ed=null,Error(Z(185));_s(t,n,r),(!(Be&2)||t!==St)&&(t===St&&(!(Be&2)&&(hl|=n),wt===4&&xr(t,Rt)),Zt(t,r),n===1&&Be===0&&!(e.mode&1)&&(hi=ut()+500,cl&&Vr()))}function Zt(t,e){var n=t.callbackNode;sw(t,e);var r=La(t,t===St?Rt:0);if(r===0)n!==null&&nf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&nf(n),e===1)t.tag===0?i_($f.bind(null,t)):Lm($f.bind(null,t)),t_(function(){!(Be&6)&&Vr()}),n=null;else{switch(sm(r)){case 1:n=jd;break;case 4:n=rm;break;case 16:n=Pa;break;case 536870912:n=om;break;default:n=Pa}n=b0(n,S0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S0(t,e){if(Ma=-1,Ea=0,Be&6)throw Error(Z(327));var n=t.callbackNode;if(ri()&&t.callbackNode!==n)return null;var r=La(t,t===St?Rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$a(t,r);else{e=r;var o=Be;Be|=2;var i=E0();(St!==t||Rt!==e)&&(Kn=null,hi=ut()+500,lo(t,e));do try{A_();break}catch(a){M0(t,a)}while(!0);su(),Ya.current=i,Be=o,pt!==null?e=0:(St=null,Rt=0,e=wt)}if(e!==0){if(e===2&&(o=Zc(t),o!==0&&(r=o,e=Td(t,o))),e===1)throw n=ms,lo(t,0),xr(t,r),Zt(t,ut()),n;if(e===6)xr(t,r);else{if(o=t.current.alternate,!(r&30)&&!E_(o)&&(e=$a(t,r),e===2&&(i=Zc(t),i!==0&&(r=i,e=Td(t,i))),e===1))throw n=ms,lo(t,0),xr(t,r),Zt(t,ut()),n;switch(t.finishedWork=o,t.finishedLanes=r,e){case 0:case 1:throw Error(Z(345));case 2:Qr(t,Yt,Kn);break;case 3:if(xr(t,r),(r&130023424)===r&&(e=yu+500-ut(),10<e)){if(La(t,0)!==0)break;if(o=t.suspendedLanes,(o&r)!==r){Ht(),t.pingedLanes|=t.suspendedLanes&o;break}t.timeoutHandle=id(Qr.bind(null,t,Yt,Kn),e);break}Qr(t,Yt,Kn);break;case 4:if(xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,o=-1;0<r;){var s=31-Cn(r);i=1<<s,s=e[s],s>o&&(o=s),r&=~i}if(r=o,r=ut()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M_(r/1960))-r,10<r){t.timeoutHandle=id(Qr.bind(null,t,Yt,Kn),r);break}Qr(t,Yt,Kn);break;case 5:Qr(t,Yt,Kn);break;default:throw Error(Z(329))}}}return Zt(t,ut()),t.callbackNode===n?S0.bind(null,t):null}function Td(t,e){var n=Zi;return t.current.memoizedState.isDehydrated&&(lo(t,e).flags|=256),t=$a(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&Ad(e)),t}function Ad(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function E_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Pn(i(),o))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~xu,e&=~hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function $f(t){if(Be&6)throw Error(Z(327));ri();var e=La(t,0);if(!(e&1))return Zt(t,ut()),null;var n=$a(t,e);if(t.tag!==0&&n===2){var r=Zc(t);r!==0&&(e=r,n=Td(t,r))}if(n===1)throw n=ms,lo(t,0),xr(t,e),Zt(t,ut()),n;if(n===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,Yt,Kn),Zt(t,ut()),null}function Su(t,e){var n=Be;Be|=1;try{return t(e)}finally{Be=n,Be===0&&(hi=ut()+500,cl&&Vr())}}function go(t){Mr!==null&&Mr.tag===0&&!(Be&6)&&ri();var e=Be;Be|=1;var n=wn.transition,r=Ye;try{if(wn.transition=null,Ye=1,t)return t()}finally{Ye=r,wn.transition=n,Be=e,!(Be&6)&&Vr()}}function Mu(){nn=Ko.current,tt(Ko)}function lo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,e_(n)),pt!==null)for(n=pt.return;n!==null;){var r=n;switch(ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fa();break;case 3:ui(),tt($t),tt(Ot),fu();break;case 5:uu(r);break;case 4:ui();break;case 13:tt(ot);break;case 19:tt(ot);break;case 10:au(r.type._context);break;case 22:case 23:Mu()}n=n.return}if(St=t,pt=t=Dr(t.current,null),Rt=nn=e,wt=0,ms=null,xu=hl=mo=0,Yt=Zi=null,oo!==null){for(e=0;e<oo.length;e++)if(n=oo[e],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}oo=null}return t}function M0(t,e){do{var n=pt;try{if(su(),xa.current=Xa,Wa){for(var r=it.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Wa=!1}if(po=0,yt=gt=it=null,$i=!1,fs=0,vu.current=null,n===null||n.return===null){wt=1,ms=e,pt=null;break}e:{var i=t,s=n.return,a=n,l=e;if(e=Rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Ff(s);if(m!==null){m.flags&=-257,Of(m,s,a,i,e),m.mode&1&&If(i,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){If(i,c,e),Eu();break e}l=Error(Z(426))}}else if(rt&&a.mode&1){var p=Ff(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Of(p,s,a,i,e),ou(fi(l,a));break e}}i=l=fi(l,a),wt!==4&&(wt=2),Zi===null?Zi=[i]:Zi.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var d=s0(i,l,e);bf(i,d);break e;case 1:a=l;var w=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pr===null||!Pr.has(g)))){i.flags|=65536,e&=-e,i.lanes|=e;var S=a0(i,a,e);bf(i,S);break e}}i=i.return}while(i!==null)}A0(n)}catch(C){e=C,pt===n&&n!==null&&(pt=n=n.return);continue}break}while(!0)}function E0(){var t=Ya.current;return Ya.current=Xa,t===null?Xa:t}function Eu(){(wt===0||wt===3||wt===2)&&(wt=4),St===null||!(mo&268435455)&&!(hl&268435455)||xr(St,Rt)}function $a(t,e){var n=Be;Be|=2;var r=E0();(St!==t||Rt!==e)&&(Kn=null,lo(t,e));do try{T_();break}catch(o){M0(t,o)}while(!0);if(su(),Be=n,Ya.current=r,pt!==null)throw Error(Z(261));return St=null,Rt=0,wt}function T_(){for(;pt!==null;)T0(pt)}function A_(){for(;pt!==null&&!Zg();)T0(pt)}function T0(t){var e=C0(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?A0(t):pt=e,vu.current=null}function A0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=v_(n,e),n!==null){n.flags&=32767,pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,pt=null;return}}else if(n=__(n,e,nn),n!==null){pt=n;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);wt===0&&(wt=5)}function Qr(t,e,n){var r=Ye,o=wn.transition;try{wn.transition=null,Ye=1,R_(t,e,n,r)}finally{wn.transition=o,Ye=r}return null}function R_(t,e,n,r){do ri();while(Mr!==null);if(Be&6)throw Error(Z(327));n=t.finishedWork;var o=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(aw(t,i),t===St&&(pt=St=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gs||(Gs=!0,b0(Pa,function(){return ri(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=wn.transition,wn.transition=null;var s=Ye;Ye=1;var a=Be;Be|=4,vu.current=null,y_(t,n),x0(n,t),jw(rd),Da=!!nd,rd=nd=null,t.current=n,S_(n),Qg(),Be=a,Ye=s,wn.transition=i}else t.current=n;if(Gs&&(Gs=!1,Mr=t,qa=o),i=t.pendingLanes,i===0&&(Pr=null),tw(n.stateNode),Zt(t,ut()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)o=e[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ja)throw ja=!1,t=Md,Md=null,t;return qa&1&&t.tag!==0&&ri(),i=t.pendingLanes,i&1?t===Ed?Qi++:(Qi=0,Ed=t):Qi=0,Vr(),null}function ri(){if(Mr!==null){var t=sm(qa),e=wn.transition,n=Ye;try{if(wn.transition=null,Ye=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,qa=0,Be&6)throw Error(Z(331));var o=Be;for(Be|=4,fe=t.current;fe!==null;){var i=fe,s=i.child;if(fe.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(fe=c;fe!==null;){var u=fe;switch(u.tag){case 0:case 11:case 15:Ki(8,u,i)}var h=u.child;if(h!==null)h.return=u,fe=h;else for(;fe!==null;){u=fe;var f=u.sibling,m=u.return;if(w0(u),u===c){fe=null;break}if(f!==null){f.return=m,fe=f;break}fe=m}}}var _=i.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}fe=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,fe=s;else e:for(;fe!==null;){if(i=fe,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ki(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,fe=d;break e}fe=i.return}}var w=t.current;for(fe=w;fe!==null;){s=fe;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,fe=g;else e:for(s=w;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fl(9,a)}}catch(C){ct(a,a.return,C)}if(a===s){fe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,fe=S;break e}fe=a.return}}if(Be=o,Vr(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(ol,t)}catch{}r=!0}return r}finally{Ye=n,wn.transition=e}}return!1}function Kf(t,e,n){e=fi(n,e),e=s0(t,e,1),t=br(t,e,1),e=Ht(),t!==null&&(_s(t,1,e),Zt(t,e))}function ct(t,e,n){if(t.tag===3)Kf(t,t,n);else for(;e!==null;){if(e.tag===3){Kf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){t=fi(n,t),t=a0(e,t,1),e=br(e,t,1),t=Ht(),e!==null&&(_s(e,1,t),Zt(e,t));break}}e=e.return}}function C_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,St===t&&(Rt&n)===n&&(wt===4||wt===3&&(Rt&130023424)===Rt&&500>ut()-yu?lo(t,0):xu|=n),Zt(t,e)}function R0(t,e){e===0&&(t.mode&1?(e=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):e=1);var n=Ht();t=ir(t,e),t!==null&&(_s(t,e,n),Zt(t,n))}function b_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),R0(t,n)}function P_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,o=t.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(Z(314))}r!==null&&r.delete(e),R0(t,n)}var C0;C0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,w_(t,e,n);qt=!!(t.flags&131072)}else qt=!1,rt&&e.flags&1048576&&Dm(e,za,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Sa(t,e),t=e.pendingProps;var o=li(e,Ot.current);ni(e,n),o=pu(null,e,r,t,o,n);var i=mu();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(i=!0,Oa(e)):i=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,cu(e),o.updater=ul,e.stateNode=o,o._reactInternals=e,fd(e,r,t,n),e=md(null,e,r,!0,i,n)):(e.tag=0,rt&&i&&nu(e),Bt(null,e,o,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Sa(t,e),t=e.pendingProps,o=r._init,r=o(r._payload),e.type=r,o=e.tag=D_(r),t=En(r,t),o){case 0:e=pd(null,e,r,t,n);break e;case 1:e=Bf(null,e,r,t,n);break e;case 11:e=kf(null,e,r,t,n);break e;case 14:e=zf(null,e,r,En(r.type,t),n);break e}throw Error(Z(306,r,""))}return e;case 0:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:En(r,o),pd(t,e,r,o,n);case 1:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:En(r,o),Bf(t,e,r,o,n);case 3:e:{if(u0(e),t===null)throw Error(Z(387));r=e.pendingProps,i=e.memoizedState,o=i.element,km(t,e),Va(e,r,null,n);var s=e.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){o=fi(Error(Z(423)),e),e=Hf(t,e,r,n,o);break e}else if(r!==o){o=fi(Error(Z(424)),e),e=Hf(t,e,r,n,o);break e}else for(rn=Cr(e.stateNode.containerInfo.firstChild),on=e,rt=!0,An=null,n=Fm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ci(),r===o){e=sr(t,e,n);break e}Bt(t,e,r,n)}e=e.child}return e;case 5:return zm(e),t===null&&cd(e),r=e.type,o=e.pendingProps,i=t!==null?t.memoizedProps:null,s=o.children,od(r,o)?s=null:i!==null&&od(r,i)&&(e.flags|=32),d0(t,e),Bt(t,e,s,n),e.child;case 6:return t===null&&cd(e),null;case 13:return f0(t,e,n);case 4:return du(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=di(e,null,r,n):Bt(t,e,r,n),e.child;case 11:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:En(r,o),kf(t,e,r,o,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,o=e.pendingProps,i=e.memoizedProps,s=o.value,Ke(Ba,r._currentValue),r._currentValue=s,i!==null)if(Pn(i.value,s)){if(i.children===o.children&&!$t.current){e=sr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=nr(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),dd(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===e.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(Z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),dd(s,n,e),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Bt(t,e,o.children,n),e=e.child}return e;case 9:return o=e.type,r=e.pendingProps.children,ni(e,n),o=_n(o),r=r(o),e.flags|=1,Bt(t,e,r,n),e.child;case 14:return r=e.type,o=En(r,e.pendingProps),o=En(r.type,o),zf(t,e,r,o,n);case 15:return l0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:En(r,o),Sa(t,e),e.tag=1,Kt(r)?(t=!0,Oa(e)):t=!1,ni(e,n),i0(e,r,o),fd(e,r,o,n),md(null,e,r,!0,t,n);case 19:return h0(t,e,n);case 22:return c0(t,e,n)}throw Error(Z(156,e.tag))};function b0(t,e){return nm(t,e)}function L_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new L_(t,e,n,r)}function Tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function D_(t){if(typeof t=="function")return Tu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wd)return 11;if(t===Xd)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ta(t,e,n,r,o,i){var s=2;if(r=t,typeof t=="function")Tu(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Bo:return co(n.children,o,i,e);case Gd:s=8,o|=8;break;case Fc:return t=mn(12,n,e,o|2),t.elementType=Fc,t.lanes=i,t;case Oc:return t=mn(13,n,e,o),t.elementType=Oc,t.lanes=i,t;case kc:return t=mn(19,n,e,o),t.elementType=kc,t.lanes=i,t;case zp:return pl(n,o,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Op:s=10;break e;case kp:s=9;break e;case Wd:s=11;break e;case Xd:s=14;break e;case wr:s=16,r=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=mn(s,n,e,o),e.elementType=t,e.type=r,e.lanes=i,e}function co(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function pl(t,e,n,r){return t=mn(22,t,r,e),t.elementType=zp,t.lanes=n,t.stateNode={isHidden:!1},t}function Ql(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function Jl(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function U_(t,e,n,r,o){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Au(t,e,n,r,o,i,s,a,l){return t=new U_(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=mn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cu(i),t}function N_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function P0(t){if(!t)return Fr;t=t._reactInternals;e:{if(vo(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var n=t.type;if(Kt(n))return Pm(t,n,e)}return e}function L0(t,e,n,r,o,i,s,a,l){return t=Au(n,r,!0,t,o,i,s,a,l),t.context=P0(null),n=t.current,r=Ht(),o=Lr(n),i=nr(r,o),i.callback=e??null,br(n,i,o),t.current.lanes=o,_s(t,o,r),Zt(t,r),t}function ml(t,e,n,r){var o=e.current,i=Ht(),s=Lr(o);return n=P0(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(i,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=br(o,e,s),t!==null&&(bn(t,o,s,i),va(t,o,s)),s}function Ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ru(t,e){Zf(t,e),(t=t.alternate)&&Zf(t,e)}function I_(){return null}var D0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cu(t){this._internalRoot=t}gl.prototype.render=Cu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));ml(t,e,null,null)};gl.prototype.unmount=Cu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;go(function(){ml(null,t,null,null)}),e[or]=null}};function gl(t){this._internalRoot=t}gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=cm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&um(t)}};function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qf(){}function F_(t,e,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ka(s);i.call(c)}}var s=L0(e,r,t,0,null,!1,!1,"",Qf);return t._reactRootContainer=s,t[or]=s.current,as(t.nodeType===8?t.parentNode:t),go(),s}for(;o=t.lastChild;)t.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Ka(l);a.call(c)}}var l=Au(t,0,!1,null,null,!1,!1,"",Qf);return t._reactRootContainer=l,t[or]=l.current,as(t.nodeType===8?t.parentNode:t),go(function(){ml(e,l,n,r)}),l}function _l(t,e,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=Ka(s);a.call(l)}}ml(e,s,t,o)}else s=F_(n,e,t,o,r);return Ka(s)}am=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Hi(e.pendingLanes);n!==0&&(qd(e,n|1),Zt(e,ut()),!(Be&6)&&(hi=ut()+500,Vr()))}break;case 13:go(function(){var r=ir(t,1);if(r!==null){var o=Ht();bn(r,t,1,o)}}),Ru(t,1)}};$d=function(t){if(t.tag===13){var e=ir(t,134217728);if(e!==null){var n=Ht();bn(e,t,134217728,n)}Ru(t,134217728)}};lm=function(t){if(t.tag===13){var e=Lr(t),n=ir(t,e);if(n!==null){var r=Ht();bn(n,t,e,r)}Ru(t,e)}};cm=function(){return Ye};dm=function(t,e){var n=Ye;try{return Ye=t,e()}finally{Ye=n}};qc=function(t,e,n){switch(e){case"input":if(Hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var o=ll(r);if(!o)throw Error(Z(90));Hp(r),Hc(r,o)}}}break;case"textarea":Gp(t,n);break;case"select":e=n.value,e!=null&&Qo(t,!!n.multiple,e,!1)}};Kp=Su;Zp=go;var O_={usingClientEntryPoint:!1,Events:[xs,Wo,ll,qp,$p,Su]},Ui={findFiberByHostInstance:ro,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k_={bundleType:Ui.bundleType,version:Ui.version,rendererPackageName:Ui.rendererPackageName,rendererConfig:Ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=em(t),t===null?null:t.stateNode},findFiberByHostInstance:Ui.findFiberByHostInstance||I_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ws.isDisabled&&Ws.supportsFiber)try{ol=Ws.inject(k_),Bn=Ws}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bu(e))throw Error(Z(200));return N_(t,e,null,n)};ln.createRoot=function(t,e){if(!bu(t))throw Error(Z(299));var n=!1,r="",o=D0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=Au(t,1,!1,null,null,n,!1,r,o),t[or]=e.current,as(t.nodeType===8?t.parentNode:t),new Cu(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=em(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return go(t)};ln.hydrate=function(t,e,n){if(!wl(e))throw Error(Z(200));return _l(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!bu(t))throw Error(Z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=D0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=L0(e,null,t,1,n??null,o,!1,i,s),t[or]=e.current,as(t),r)for(t=0;t<r.length;t++)n=r[t],o=n._getVersion,o=o(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,o]:e.mutableSourceEagerHydrationData.push(n,o);return new gl(e)};ln.render=function(t,e,n){if(!wl(e))throw Error(Z(200));return _l(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!wl(t))throw Error(Z(40));return t._reactRootContainer?(go(function(){_l(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1};ln.unstable_batchedUpdates=Su;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wl(n))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return _l(t,e,n,!1,r)};ln.version="18.3.1-next-f1338f8080-20240426";function U0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U0)}catch(t){console.error(t)}}U0(),Up.exports=ln;var z_=Up.exports,N0,Jf=z_;N0=Jf.createRoot,Jf.hydrateRoot;function B_(t){const e=[];return t.forEach((n,r)=>{n.forEach(o=>{e.push(Tt.jsx("p",{className:"word-left color-"+r,children:o},"rm-p"+o+"-"+r))})}),e}function H_(t){const e=[];return t.forEach(n=>{const r=[...n.word],o=[...n.colors],i=[];r.forEach((s,a)=>{i.push(Tt.jsx("span",{className:"color-"+o[a],children:s},"r-span-"+n+"-"+s+"-"+a))}),e.push(Tt.jsx("p",{className:"word-right",children:i},"rr-p-"+r.toString()))}),e}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pu="164",V_=0,eh=1,G_=2,I0=1,W_=2,$n=3,Or=0,Qt=1,Qn=2,Ur=0,oi=1,th=2,nh=3,rh=4,X_=5,to=100,Y_=101,j_=102,q_=103,$_=104,K_=200,Z_=201,Q_=202,J_=203,Rd=204,Cd=205,ev=206,tv=207,nv=208,rv=209,ov=210,iv=211,sv=212,av=213,lv=214,cv=0,dv=1,uv=2,Za=3,fv=4,hv=5,pv=6,mv=7,F0=0,gv=1,wv=2,Nr=0,_v=1,vv=2,xv=3,yv=4,Sv=5,Mv=6,Ev=7,O0=300,pi=301,mi=302,bd=303,Pd=304,vl=306,Ld=1e3,so=1001,Dd=1002,gn=1003,Tv=1004,Xs=1005,Rn=1006,ec=1007,ao=1008,kr=1009,Av=1010,Rv=1011,k0=1012,z0=1013,gi=1014,Er=1015,xl=1016,B0=1017,H0=1018,Ss=1020,Cv=35902,bv=1021,Pv=1022,kn=1023,Lv=1024,Dv=1025,ii=1026,gs=1027,Uv=1028,V0=1029,Nv=1030,G0=1031,W0=1033,tc=33776,nc=33777,rc=33778,oc=33779,oh=35840,ih=35841,sh=35842,ah=35843,lh=36196,ch=37492,dh=37496,uh=37808,fh=37809,hh=37810,ph=37811,mh=37812,gh=37813,wh=37814,_h=37815,vh=37816,xh=37817,yh=37818,Sh=37819,Mh=37820,Eh=37821,ic=36492,Th=36494,Ah=36495,Iv=36283,Rh=36284,Ch=36285,bh=36286,Fv=3200,Ov=3201,kv=0,zv=1,yr="",Nn="srgb",Gr="srgb-linear",Lu="display-p3",yl="display-p3-linear",Qa="linear",et="srgb",Ja="rec709",el="p3",So=7680,Ph=519,Bv=512,Hv=513,Vv=514,X0=515,Gv=516,Wv=517,Xv=518,Yv=519,Lh=35044,Dh="300 es",tr=2e3,tl=2001;class yi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let i=0,s=o.length;i<s;i++)o[i].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sc=Math.PI/180,Ud=180/Math.PI;function Ms(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function jv(t,e){return(t%e+e)%e}function ac(t,e,n){return(1-n)*t+n*e}function Ni(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(jt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*o+e.x,this.y=i*o+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Re{constructor(e,n,r,o,i,s,a,l,c){Re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,i,s,a,l,c)}set(e,n,r,o,i,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=o,u[2]=a,u[3]=n,u[4]=i,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,i=this.elements,s=r[0],a=r[3],l=r[6],c=r[1],u=r[4],h=r[7],f=r[2],m=r[5],_=r[8],v=o[0],p=o[3],d=o[6],w=o[1],g=o[4],S=o[7],C=o[2],A=o[5],T=o[8];return i[0]=s*v+a*w+l*C,i[3]=s*p+a*g+l*A,i[6]=s*d+a*S+l*T,i[1]=c*v+u*w+h*C,i[4]=c*p+u*g+h*A,i[7]=c*d+u*S+h*T,i[2]=f*v+m*w+_*C,i[5]=f*p+m*g+_*A,i[8]=f*d+m*S+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-r*i*u+r*a*l+o*i*c-o*s*l}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*s-a*c,f=a*l-u*i,m=c*i-s*l,_=n*h+r*f+o*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(o*c-u*r)*v,e[2]=(a*r-o*s)*v,e[3]=f*v,e[4]=(u*n-o*l)*v,e[5]=(o*i-a*n)*v,e[6]=m*v,e[7]=(r*l-c*n)*v,e[8]=(s*n-r*i)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,i,s,a){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*s+c*a)+s+e,-o*c,o*l,-o*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(lc.makeScale(e,n)),this}rotate(e){return this.premultiply(lc.makeRotation(-e)),this}translate(e,n){return this.premultiply(lc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lc=new Re;function Y0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qv(){const t=nl("canvas");return t.style.display="block",t}const Uh={};function $v(t){t in Uh||(Uh[t]=!0,console.warn(t))}const Nh=new Re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ih=new Re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[Gr]:{transfer:Qa,primaries:Ja,toReference:t=>t,fromReference:t=>t},[Nn]:{transfer:et,primaries:Ja,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[yl]:{transfer:Qa,primaries:el,toReference:t=>t.applyMatrix3(Ih),fromReference:t=>t.applyMatrix3(Nh)},[Lu]:{transfer:et,primaries:el,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ih),fromReference:t=>t.applyMatrix3(Nh).convertLinearToSRGB()}},Kv=new Set([Gr,yl]),je={enabled:!0,_workingColorSpace:Gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Kv.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=Ys[e].toReference,o=Ys[n].fromReference;return o(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ys[t].primaries},getTransfer:function(t){return t===yr?Qa:Ys[t].transfer}};function si(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Mo;class Zv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mo===void 0&&(Mo=nl("canvas")),Mo.width=e.width,Mo.height=e.height;const r=Mo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Mo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),i=o.data;for(let s=0;s<i.length;s++)i[s]=si(i[s]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(si(n[r]/255)*255):n[r]=si(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qv=0;class j0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Ms(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let i;if(Array.isArray(o)){i=[];for(let s=0,a=o.length;s<a;s++)o[s].isDataTexture?i.push(dc(o[s].image)):i.push(dc(o[s]))}else i=dc(o);r.url=i}return n||(e.images[this.uuid]=r),r}}function dc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Zv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jv=0;class Vt extends yi{constructor(e=Vt.DEFAULT_IMAGE,n=Vt.DEFAULT_MAPPING,r=so,o=so,i=Rn,s=ao,a=kn,l=kr,c=Vt.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Ms(),this.name="",this.source=new j0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case so:e.x=e.x<0?0:1;break;case Dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case so:e.y=e.y<0?0:1;break;case Dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=O0;Vt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,r=0,o=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,i=this.w,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*o+s[12]*i,this.y=s[1]*n+s[5]*r+s[9]*o+s[13]*i,this.z=s[2]*n+s[6]*r+s[10]*o+s[14]*i,this.w=s[3]*n+s[7]*r+s[11]*o+s[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,i;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(m+1)/2,C=(d+1)/2,A=(u+f)/4,T=(h+v)/4,P=(_+p)/4;return g>S&&g>C?g<.01?(r=0,o=.707106781,i=.707106781):(r=Math.sqrt(g),o=A/r,i=T/r):S>C?S<.01?(r=.707106781,o=0,i=.707106781):(o=Math.sqrt(S),r=A/o,i=P/o):C<.01?(r=.707106781,o=.707106781,i=0):(i=Math.sqrt(C),r=T/i,o=P/i),this.set(r,o,i,n),this}let w=Math.sqrt((p-_)*(p-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-_)/w,this.y=(h-v)/w,this.z=(f-u)/w,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e1 extends yi{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const i=new Vt(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let a=0;a<s;a++)this.textures[a]=i.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,i=this.textures.length;o<i;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new j0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wo extends e1{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class q0 extends Vt{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=so,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class t1 extends Vt{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=so,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Es{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,i,s,a){let l=r[o+0],c=r[o+1],u=r[o+2],h=r[o+3];const f=i[s+0],m=i[s+1],_=i[s+2],v=i[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(h!==v||l!==f||c!==m||u!==_){let p=1-a;const d=l*f+c*m+u*_+h*v,w=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const C=Math.sqrt(g),A=Math.atan2(C,d*w);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const S=a*w;if(l=l*p+f*S,c=c*p+m*S,u=u*p+_*S,h=h*p+v*S,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,r,o,i,s){const a=r[o],l=r[o+1],c=r[o+2],u=r[o+3],h=i[s],f=i[s+1],m=i[s+2],_=i[s+3];return e[n]=a*_+u*h+l*m-c*f,e[n+1]=l*_+u*f+c*h-a*m,e[n+2]=c*_+u*m+a*f-l*h,e[n+3]=u*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,i=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(r/2),u=a(o/2),h=a(i/2),f=l(r/2),m=l(o/2),_=l(i/2);switch(s){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],i=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=r+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(i-c)*m,this._z=(s-o)*m}else if(r>a&&r>h){const m=2*Math.sqrt(1+r-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(o+s)/m,this._z=(i+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-r-h);this._w=(i-c)/m,this._x=(o+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-r-a);this._w=(s-o)/m,this._x=(i+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,i=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=r*u+s*a+o*c-i*l,this._y=o*u+s*l+i*a-r*c,this._z=i*u+s*c+r*l-o*a,this._w=s*u-r*a-o*l-i*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,i=this._z,s=this._w;let a=s*e._w+r*e._x+o*e._y+i*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=o,this._z=i,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*r+n*this._x,this._y=m*o+n*this._y,this._z=m*i+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=s*h+this._w*f,this._x=r*h+this._x*f,this._y=o*h+this._y*f,this._z=i*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),i*Math.sin(n),i*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,r=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6]*o,this.y=i[1]*n+i[4]*r+i[7]*o,this.z=i[2]*n+i[5]*r+i[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,i=e.elements,s=1/(i[3]*n+i[7]*r+i[11]*o+i[15]);return this.x=(i[0]*n+i[4]*r+i[8]*o+i[12])*s,this.y=(i[1]*n+i[5]*r+i[9]*o+i[13])*s,this.z=(i[2]*n+i[6]*r+i[10]*o+i[14])*s,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,i=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*o-a*r),u=2*(a*n-i*o),h=2*(i*r-s*n);return this.x=n+l*c+s*h-a*u,this.y=r+l*u+a*c-i*h,this.z=o+l*h+i*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,i=e.elements;return this.x=i[0]*n+i[4]*r+i[8]*o,this.y=i[1]*n+i[5]*r+i[9]*o,this.z=i[2]*n+i[6]*r+i[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,i=e.z,s=n.x,a=n.y,l=n.z;return this.x=o*l-i*a,this.y=i*s-r*l,this.z=r*a-o*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(jt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new k,Fh=new Es;class Ts{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(n===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=i.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,yn):yn.fromBufferAttribute(i,s),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),js.copy(r.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}const o=e.children;for(let i=0,s=o.length;i<s;i++)this.expandByObject(o[i],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),qs.subVectors(this.max,Ii),Eo.subVectors(e.a,Ii),To.subVectors(e.b,Ii),Ao.subVectors(e.c,Ii),ur.subVectors(To,Eo),fr.subVectors(Ao,To),Xr.subVectors(Eo,Ao);let n=[0,-ur.z,ur.y,0,-fr.z,fr.y,0,-Xr.z,Xr.y,ur.z,0,-ur.x,fr.z,0,-fr.x,Xr.z,0,-Xr.x,-ur.y,ur.x,0,-fr.y,fr.x,0,-Xr.y,Xr.x,0];return!fc(n,Eo,To,Ao,qs)||(n=[1,0,0,0,1,0,0,0,1],!fc(n,Eo,To,Ao,qs))?!1:($s.crossVectors(ur,fr),n=[$s.x,$s.y,$s.z],fc(n,Eo,To,Ao,qs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new k,new k,new k,new k,new k,new k,new k,new k],yn=new k,js=new Ts,Eo=new k,To=new k,Ao=new k,ur=new k,fr=new k,Xr=new k,Ii=new k,qs=new k,$s=new k,Yr=new k;function fc(t,e,n,r,o){for(let i=0,s=t.length-3;i<=s;i+=3){Yr.fromArray(t,i);const a=o.x*Math.abs(Yr.x)+o.y*Math.abs(Yr.y)+o.z*Math.abs(Yr.z),l=e.dot(Yr),c=n.dot(Yr),u=r.dot(Yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const n1=new Ts,Fi=new k,hc=new k;class Du{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):n1.setFromPoints(e).getCenter(r);let o=0;for(let i=0,s=e.length;i<s;i++)o=Math.max(o,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const n=Fi.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Fi,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(hc)),this.expandByPoint(Fi.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new k,pc=new k,Ks=new k,hr=new k,mc=new k,Zs=new k,gc=new k;class $0{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,n),Xn.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){pc.copy(e).add(n).multiplyScalar(.5),Ks.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(pc);const i=e.distanceTo(n)*.5,s=-this.direction.dot(Ks),a=hr.dot(this.direction),l=-hr.dot(Ks),c=hr.lengthSq(),u=Math.abs(1-s*s);let h,f,m,_;if(u>0)if(h=s*l-a,f=s*a-l,_=i*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,m=h*(h+s*f+2*a)+f*(s*h+f+2*l)+c}else f=i,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*l)+c;else f=-i,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-s*i+a)),f=h>0?-i:Math.min(Math.max(-i,-l),i),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-i,-l),i),m=f*(f+2*l)+c):(h=Math.max(0,-(s*i+a)),f=h>0?i:Math.min(Math.max(-i,-l),i),m=-h*h+f*(f+2*l)+c);else f=s>0?-i:i,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,h),o&&o.copy(pc).addScaledVector(Ks,f),m}intersectSphere(e,n){Xn.subVectors(e.center,this.origin);const r=Xn.dot(this.direction),o=Xn.dot(Xn)-r*r,i=e.radius*e.radius;if(o>i)return null;const s=Math.sqrt(i-o),a=r-s,l=r+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,i,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,o=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,o=(e.min.x-f.x)*c),u>=0?(i=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(i=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),r>s||i>o||((i>r||isNaN(r))&&(r=i),(s<o||isNaN(o))&&(o=s),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),r>l||a>o)||((a>r||r!==r)&&(r=a),(l<o||o!==o)&&(o=l),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,n,r,o,i){mc.subVectors(n,e),Zs.subVectors(r,e),gc.crossVectors(mc,Zs);let s=this.direction.dot(gc),a;if(s>0){if(o)return null;a=1}else if(s<0)a=-1,s=-s;else return null;hr.subVectors(this.origin,e);const l=a*this.direction.dot(Zs.crossVectors(hr,Zs));if(l<0)return null;const c=a*this.direction.dot(mc.cross(hr));if(c<0||l+c>s)return null;const u=-a*hr.dot(gc);return u<0?null:this.at(u/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,r,o,i,s,a,l,c,u,h,f,m,_,v,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,i,s,a,l,c,u,h,f,m,_,v,p)}set(e,n,r,o,i,s,a,l,c,u,h,f,m,_,v,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=r,d[12]=o,d[1]=i,d[5]=s,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Ro.setFromMatrixColumn(e,0).length(),i=1/Ro.setFromMatrixColumn(e,1).length(),s=1/Ro.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=0,n[8]=r[8]*s,n[9]=r[9]*s,n[10]=r[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,i=e.z,s=Math.cos(r),a=Math.sin(r),l=Math.cos(o),c=Math.sin(o),u=Math.cos(i),h=Math.sin(i);if(e.order==="XYZ"){const f=s*u,m=s*h,_=a*u,v=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=_+m*c,n[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,v=c*h;n[0]=f+v*a,n[4]=_*a-m,n[8]=s*c,n[1]=s*h,n[5]=s*u,n[9]=-a,n[2]=m*a-_,n[6]=v+f*a,n[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,v=c*h;n[0]=f-v*a,n[4]=-s*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=s*u,n[9]=v-f*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*h,_=a*u,v=a*h;n[0]=l*u,n[4]=_*c-m,n[8]=f*c+v,n[1]=l*h,n[5]=v*c+f,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,_=a*l,v=a*c;n[0]=l*u,n[4]=v-f*h,n[8]=_*h+m,n[1]=h,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*h+_,n[10]=f-v*h}else if(e.order==="XZY"){const f=s*l,m=s*c,_=a*l,v=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+v,n[5]=s*u,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*u,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r1,e,o1)}lookAt(e,n,r){const o=this.elements;return en.subVectors(e,n),en.lengthSq()===0&&(en.z=1),en.normalize(),pr.crossVectors(r,en),pr.lengthSq()===0&&(Math.abs(r.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),pr.crossVectors(r,en)),pr.normalize(),Qs.crossVectors(en,pr),o[0]=pr.x,o[4]=Qs.x,o[8]=en.x,o[1]=pr.y,o[5]=Qs.y,o[9]=en.y,o[2]=pr.z,o[6]=Qs.z,o[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,i=this.elements,s=r[0],a=r[4],l=r[8],c=r[12],u=r[1],h=r[5],f=r[9],m=r[13],_=r[2],v=r[6],p=r[10],d=r[14],w=r[3],g=r[7],S=r[11],C=r[15],A=o[0],T=o[4],P=o[8],E=o[12],x=o[1],I=o[5],W=o[9],D=o[13],j=o[2],Y=o[6],ee=o[10],J=o[14],b=o[3],V=o[7],G=o[11],oe=o[15];return i[0]=s*A+a*x+l*j+c*b,i[4]=s*T+a*I+l*Y+c*V,i[8]=s*P+a*W+l*ee+c*G,i[12]=s*E+a*D+l*J+c*oe,i[1]=u*A+h*x+f*j+m*b,i[5]=u*T+h*I+f*Y+m*V,i[9]=u*P+h*W+f*ee+m*G,i[13]=u*E+h*D+f*J+m*oe,i[2]=_*A+v*x+p*j+d*b,i[6]=_*T+v*I+p*Y+d*V,i[10]=_*P+v*W+p*ee+d*G,i[14]=_*E+v*D+p*J+d*oe,i[3]=w*A+g*x+S*j+C*b,i[7]=w*T+g*I+S*Y+C*V,i[11]=w*P+g*W+S*ee+C*G,i[15]=w*E+g*D+S*J+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],i=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],v=e[7],p=e[11],d=e[15];return _*(+i*l*h-o*c*h-i*a*f+r*c*f+o*a*m-r*l*m)+v*(+n*l*m-n*c*f+i*s*f-o*s*m+o*c*u-i*l*u)+p*(+n*c*h-n*a*m-i*s*h+r*s*m+i*a*u-r*c*u)+d*(-o*a*u-n*l*h+n*a*f+o*s*h-r*s*f+r*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],v=e[13],p=e[14],d=e[15],w=h*p*c-v*f*c+v*l*m-a*p*m-h*l*d+a*f*d,g=_*f*c-u*p*c-_*l*m+s*p*m+u*l*d-s*f*d,S=u*v*c-_*h*c+_*a*m-s*v*m-u*a*d+s*h*d,C=_*h*l-u*v*l-_*a*f+s*v*f+u*a*p-s*h*p,A=n*w+r*g+o*S+i*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=w*T,e[1]=(v*f*i-h*p*i-v*o*m+r*p*m+h*o*d-r*f*d)*T,e[2]=(a*p*i-v*l*i+v*o*c-r*p*c-a*o*d+r*l*d)*T,e[3]=(h*l*i-a*f*i-h*o*c+r*f*c+a*o*m-r*l*m)*T,e[4]=g*T,e[5]=(u*p*i-_*f*i+_*o*m-n*p*m-u*o*d+n*f*d)*T,e[6]=(_*l*i-s*p*i-_*o*c+n*p*c+s*o*d-n*l*d)*T,e[7]=(s*f*i-u*l*i+u*o*c-n*f*c-s*o*m+n*l*m)*T,e[8]=S*T,e[9]=(_*h*i-u*v*i-_*r*m+n*v*m+u*r*d-n*h*d)*T,e[10]=(s*v*i-_*a*i+_*r*c-n*v*c-s*r*d+n*a*d)*T,e[11]=(u*a*i-s*h*i-u*r*c+n*h*c+s*r*m-n*a*m)*T,e[12]=C*T,e[13]=(u*v*o-_*h*o+_*r*f-n*v*f-u*r*p+n*h*p)*T,e[14]=(_*a*o-s*v*o-_*r*l+n*v*l+s*r*p-n*a*p)*T,e[15]=(s*h*o-u*a*o+u*r*l-n*h*l-s*r*f+n*a*f)*T,this}scale(e){const n=this.elements,r=e.x,o=e.y,i=e.z;return n[0]*=r,n[4]*=o,n[8]*=i,n[1]*=r,n[5]*=o,n[9]*=i,n[2]*=r,n[6]*=o,n[10]*=i,n[3]*=r,n[7]*=o,n[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),i=1-r,s=e.x,a=e.y,l=e.z,c=i*s,u=i*a;return this.set(c*s+r,c*a-o*l,c*l+o*a,0,c*a+o*l,u*a+r,u*l-o*s,0,c*l-o*a,u*l+o*s,i*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,i,s){return this.set(1,r,i,0,e,1,s,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,i=n._x,s=n._y,a=n._z,l=n._w,c=i+i,u=s+s,h=a+a,f=i*c,m=i*u,_=i*h,v=s*u,p=s*h,d=a*h,w=l*c,g=l*u,S=l*h,C=r.x,A=r.y,T=r.z;return o[0]=(1-(v+d))*C,o[1]=(m+S)*C,o[2]=(_-g)*C,o[3]=0,o[4]=(m-S)*A,o[5]=(1-(f+d))*A,o[6]=(p+w)*A,o[7]=0,o[8]=(_+g)*T,o[9]=(p-w)*T,o[10]=(1-(f+v))*T,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let i=Ro.set(o[0],o[1],o[2]).length();const s=Ro.set(o[4],o[5],o[6]).length(),a=Ro.set(o[8],o[9],o[10]).length();this.determinant()<0&&(i=-i),e.x=o[12],e.y=o[13],e.z=o[14],Sn.copy(this);const c=1/i,u=1/s,h=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,n.setFromRotationMatrix(Sn),r.x=i,r.y=s,r.z=a,this}makePerspective(e,n,r,o,i,s,a=tr){const l=this.elements,c=2*i/(n-e),u=2*i/(r-o),h=(n+e)/(n-e),f=(r+o)/(r-o);let m,_;if(a===tr)m=-(s+i)/(s-i),_=-2*s*i/(s-i);else if(a===tl)m=-s/(s-i),_=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,o,i,s,a=tr){const l=this.elements,c=1/(n-e),u=1/(r-o),h=1/(s-i),f=(n+e)*c,m=(r+o)*u;let _,v;if(a===tr)_=(s+i)*h,v=-2*h;else if(a===tl)_=i*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ro=new k,Sn=new mt,r1=new k(0,0,0),o1=new k(1,1,1),pr=new k,Qs=new k,en=new k,Oh=new mt,kh=new Es;class ar{constructor(e=0,n=0,r=0,o=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,i=o[0],s=o[4],a=o[8],l=o[1],c=o[5],u=o[9],h=o[2],f=o[6],m=o[10];switch(n){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,i)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oh,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return kh.setFromEuler(this),this.setFromQuaternion(kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class Uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i1=0;const zh=new k,Co=new Es,Yn=new mt,Js=new k,Oi=new k,s1=new k,a1=new Es,Bh=new k(1,0,0),Hh=new k(0,1,0),Vh=new k(0,0,1),Gh={type:"added"},l1={type:"removed"},bo={type:"childadded",child:null},wc={type:"childremoved",child:null};class sn extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new k,n=new ar,r=new Es,o=new k(1,1,1);function i(){r.setFromEuler(n,!1)}function s(){n.setFromQuaternion(r,void 0,!1)}n._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new mt},normalMatrix:{value:new Re}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Co.setFromAxisAngle(e,n),this.quaternion.multiply(Co),this}rotateOnWorldAxis(e,n){return Co.setFromAxisAngle(e,n),this.quaternion.premultiply(Co),this}rotateX(e){return this.rotateOnAxis(Bh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(Vh,e)}translateOnAxis(e,n){return zh.copy(e).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(Vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Js.copy(e):Js.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Oi,Js,this.up):Yn.lookAt(Js,Oi,this.up),this.quaternion.setFromRotationMatrix(Yn),o&&(Yn.extractRotation(o.matrixWorld),Co.setFromRotationMatrix(Yn),this.quaternion.premultiply(Co.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gh),bo.child=e,this.dispatchEvent(bo),bo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(l1),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gh),bo.child=e,this.dispatchEvent(bo),bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let i=0,s=o.length;i<s;i++)o[i].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,s1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,a1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++){const i=n[r];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let i=0,s=o.length;i<s;i++){const a=o[i];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function i(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=i(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];i(e.shapes,h)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(i(e.materials,this.material[l]));o.material=a}else o.material=i(e.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];o.animations.push(i(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),m=s(e.animations),_=s(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),m.length>0&&(r.animations=m),_.length>0&&(r.nodes=_)}return r.object=o,r;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}sn.DEFAULT_UP=new k(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new k,jn=new k,_c=new k,qn=new k,Po=new k,Lo=new k,Wh=new k,vc=new k,xc=new k,yc=new k;class On{constructor(e=new k,n=new k,r=new k){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Mn.subVectors(e,n),o.cross(Mn);const i=o.lengthSq();return i>0?o.multiplyScalar(1/Math.sqrt(i)):o.set(0,0,0)}static getBarycoord(e,n,r,o,i){Mn.subVectors(o,n),jn.subVectors(r,n),_c.subVectors(e,n);const s=Mn.dot(Mn),a=Mn.dot(jn),l=Mn.dot(_c),c=jn.dot(jn),u=jn.dot(_c),h=s*c-a*a;if(h===0)return i.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,_=(s*u-a*l)*f;return i.set(1-m-_,_,m)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,n,r,o,i,s,a,l){return this.getBarycoord(e,n,r,o,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,qn.x),l.addScaledVector(s,qn.y),l.addScaledVector(a,qn.z),l)}static isFrontFacing(e,n,r,o){return Mn.subVectors(r,n),jn.subVectors(e,n),Mn.cross(jn).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Mn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,i){return On.getInterpolation(e,this.a,this.b,this.c,n,r,o,i)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,i=this.c;let s,a;Po.subVectors(o,r),Lo.subVectors(i,r),vc.subVectors(e,r);const l=Po.dot(vc),c=Lo.dot(vc);if(l<=0&&c<=0)return n.copy(r);xc.subVectors(e,o);const u=Po.dot(xc),h=Lo.dot(xc);if(u>=0&&h<=u)return n.copy(o);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(r).addScaledVector(Po,s);yc.subVectors(e,i);const m=Po.dot(yc),_=Lo.dot(yc);if(_>=0&&m<=_)return n.copy(i);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(r).addScaledVector(Lo,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return Wh.subVectors(i,o),a=(h-u)/(h-u+(m-_)),n.copy(o).addScaledVector(Wh,a);const d=1/(p+v+f);return s=v*d,a=f*d,n.copy(r).addScaledVector(Po,s).addScaledVector(Lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Sc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=je.workingColorSpace){return this.r=e,this.g=n,this.b=r,je.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=je.workingColorSpace){if(e=jv(e,1),n=jt(n,0,1),r=jt(r,0,1),n===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+n):r+n-r*n,s=2*r-i;this.r=Sc(s,i,e+1/3),this.g=Sc(s,i,e),this.b=Sc(s,i,e-1/3)}return je.toWorkingColorSpace(this,o),this}setStyle(e,n=Nn){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=o[1],a=o[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,n);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,n);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=o[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(i,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const r=K0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=cc(e.r),this.g=cc(e.g),this.b=cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return je.fromWorkingColorSpace(It.copy(this),e),Math.round(jt(It.r*255,0,255))*65536+Math.round(jt(It.g*255,0,255))*256+Math.round(jt(It.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.fromWorkingColorSpace(It.copy(this),n);const r=It.r,o=It.g,i=It.b,s=Math.max(r,o,i),a=Math.min(r,o,i);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case r:l=(o-i)/h+(o<i?6:0);break;case o:l=(i-r)/h+2;break;case i:l=(r-o)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=je.workingColorSpace){return je.fromWorkingColorSpace(It.copy(this),n),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Nn){je.fromWorkingColorSpace(It.copy(this),e);const n=It.r,r=It.g,o=It.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(ea);const r=ac(mr.h,ea.h,n),o=ac(mr.s,ea.s,n),i=ac(mr.l,ea.l,n);return this.setHSL(r,o,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,i=e.elements;return this.r=i[0]*n+i[3]*r+i[6]*o,this.g=i[1]*n+i[4]*r+i[7]*o,this.b=i[2]*n+i[5]*r+i[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new qe;qe.NAMES=K0;let c1=0;class Sl extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=oi,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Cd,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(r.blending=this.blending),this.side!==Or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rd&&(r.blendSrc=this.blendSrc),this.blendDst!==Cd&&(r.blendDst=this.blendDst),this.blendEquation!==to&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Za&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==So&&(r.stencilFail=this.stencilFail),this.stencilZFail!==So&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==So&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(i){const s=[];for(const a in i){const l=i[a];delete l.metadata,s.push(l)}return s}if(n){const i=o(e.textures),s=o(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let i=0;i!==o;++i)r[i]=n[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nu extends Sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=F0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new k,ta=new He;class Vn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Lh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $v("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,i=this.itemSize;o<i;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ta.fromBufferAttribute(this,n),ta.applyMatrix3(e),this.setXY(n,ta.x,ta.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix3(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix4(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)ht.fromBufferAttribute(this,n),ht.applyNormalMatrix(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)ht.fromBufferAttribute(this,n),ht.transformDirection(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ni(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Xt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ni(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ni(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ni(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ni(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),r=Xt(r,this.array),o=Xt(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),r=Xt(r,this.array),o=Xt(o,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lh&&(e.usage=this.usage),e}}class Z0 extends Vn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Q0 extends Vn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class uo extends Vn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let d1=0;const un=new mt,Mc=new sn,Do=new k,tn=new Ts,ki=new Ts,xt=new k;class xo extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y0(e)?Q0:Z0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new Re().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,n,r){return un.makeTranslation(e,n,r),this.applyMatrix4(un),this}scale(e,n,r){return un.makeScale(e,n,r),this.applyMatrix4(un),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(e){const n=[];for(let r=0,o=e.length;r<o;r++){const i=e[r];n.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new uo(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const i=n[r];tn.setFromBufferAttribute(i),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Du);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const r=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const a=n[i];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(tn.min,ki.min),tn.expandByPoint(xt),xt.addVectors(tn.max,ki.max),tn.expandByPoint(xt)):(tn.expandByPoint(ki.min),tn.expandByPoint(ki.max))}tn.getCenter(r);let o=0;for(let i=0,s=e.count;i<s;i++)xt.fromBufferAttribute(e,i),o=Math.max(o,r.distanceToSquared(xt));if(n)for(let i=0,s=n.length;i<s;i++){const a=n[i],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xt.fromBufferAttribute(a,c),l&&(Do.fromBufferAttribute(e,c),xt.add(Do)),o=Math.max(o,r.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,i=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<r.count;P++)a[P]=new k,l[P]=new k;const c=new k,u=new k,h=new k,f=new He,m=new He,_=new He,v=new k,p=new k;function d(P,E,x){c.fromBufferAttribute(r,P),u.fromBufferAttribute(r,E),h.fromBufferAttribute(r,x),f.fromBufferAttribute(i,P),m.fromBufferAttribute(i,E),_.fromBufferAttribute(i,x),u.sub(c),h.sub(c),m.sub(f),_.sub(f);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(I),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(I),a[P].add(v),a[E].add(v),a[x].add(v),l[P].add(p),l[E].add(p),l[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,E=w.length;P<E;++P){const x=w[P],I=x.start,W=x.count;for(let D=I,j=I+W;D<j;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const g=new k,S=new k,C=new k,A=new k;function T(P){C.fromBufferAttribute(o,P),A.copy(C);const E=a[P];g.copy(E),g.sub(C.multiplyScalar(C.dot(E))).normalize(),S.crossVectors(A,E);const I=S.dot(l[P])<0?-1:1;s.setXYZW(P,g.x,g.y,g.z,I)}for(let P=0,E=w.length;P<E;++P){const x=w[P],I=x.start,W=x.count;for(let D=I,j=I+W;D<j;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let f=0,m=r.count;f<m;f++)r.setXYZ(f,0,0,0);const o=new k,i=new k,s=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);o.fromBufferAttribute(n,_),i.fromBufferAttribute(n,v),s.fromBufferAttribute(n,p),u.subVectors(s,i),h.subVectors(o,i),u.cross(h),a.fromBufferAttribute(r,_),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,p),a.add(u),l.add(u),c.add(u),r.setXYZ(_,a.x,a.y,a.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)o.fromBufferAttribute(n,f+0),i.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),u.subVectors(s,i),h.subVectors(o,i),u.cross(h),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)xt.fromBufferAttribute(e,n),xt.normalize(),e.setXYZ(n,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new Vn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xo,r=this.index.array,o=this.attributes;for(const a in o){const l=o[a],c=e(l,r);n.setAttribute(a,c)}const i=this.morphAttributes;for(const a in i){const l=[],c=i[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,r);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const o={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(o[l]=u,i=!0)}i&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const c in o){const u=o[c];this.setAttribute(c,u.clone(n))}const i=e.morphAttributes;for(const c in i){const u=[],h=i[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xh=new mt,jr=new $0,na=new Du,Yh=new k,Uo=new k,No=new k,Io=new k,Ec=new k,ra=new k,oa=new He,ia=new He,sa=new He,jh=new k,qh=new k,$h=new k,aa=new k,la=new k;class zn extends sn{constructor(e=new xo,n=new Nu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=o.length;i<s;i++){const a=o[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const a=this.morphTargetInfluences;if(i&&a){ra.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=a[l],h=i[l];u!==0&&(Ec.fromBufferAttribute(h,e),s?ra.addScaledVector(Ec,u):ra.addScaledVector(Ec.sub(n),u))}n.add(ra)}return n}raycast(e,n){const r=this.geometry,o=this.material,i=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),na.copy(r.boundingSphere),na.applyMatrix4(i),jr.copy(e.ray).recast(e.near),!(na.containsPoint(jr.origin)===!1&&(jr.intersectSphere(na,Yh)===null||jr.origin.distanceToSquared(Yh)>(e.far-e.near)**2))&&(Xh.copy(i).invert(),jr.copy(e.ray).applyMatrix4(Xh),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,r){let o;const i=this.geometry,s=this.material,a=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,h=i.attributes.normal,f=i.groups,m=i.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=s[p.materialIndex],w=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=w,C=g;S<C;S+=3){const A=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);o=ca(this,d,e,r,c,u,h,A,T,P),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=p.materialIndex,n.push(o))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const w=a.getX(p),g=a.getX(p+1),S=a.getX(p+2);o=ca(this,s,e,r,c,u,h,w,g,S),o&&(o.faceIndex=Math.floor(p/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=s[p.materialIndex],w=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=w,C=g;S<C;S+=3){const A=S,T=S+1,P=S+2;o=ca(this,d,e,r,c,u,h,A,T,P),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=p.materialIndex,n.push(o))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const w=p,g=p+1,S=p+2;o=ca(this,s,e,r,c,u,h,w,g,S),o&&(o.faceIndex=Math.floor(p/3),n.push(o))}}}}function u1(t,e,n,r,o,i,s,a){let l;if(e.side===Qt?l=r.intersectTriangle(s,i,o,!0,a):l=r.intersectTriangle(o,i,s,e.side===Or,a),l===null)return null;la.copy(a),la.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(la);return c<n.near||c>n.far?null:{distance:c,point:la.clone(),object:t}}function ca(t,e,n,r,o,i,s,a,l,c){t.getVertexPosition(a,Uo),t.getVertexPosition(l,No),t.getVertexPosition(c,Io);const u=u1(t,e,n,r,Uo,No,Io,aa);if(u){o&&(oa.fromBufferAttribute(o,a),ia.fromBufferAttribute(o,l),sa.fromBufferAttribute(o,c),u.uv=On.getInterpolation(aa,Uo,No,Io,oa,ia,sa,new He)),i&&(oa.fromBufferAttribute(i,a),ia.fromBufferAttribute(i,l),sa.fromBufferAttribute(i,c),u.uv1=On.getInterpolation(aa,Uo,No,Io,oa,ia,sa,new He)),s&&(jh.fromBufferAttribute(s,a),qh.fromBufferAttribute(s,l),$h.fromBufferAttribute(s,c),u.normal=On.getInterpolation(aa,Uo,No,Io,jh,qh,$h,new k),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};On.getNormal(Uo,No,Io,h.normal),u.face=h}return u}class Si extends xo{constructor(e=1,n=1,r=1,o=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:i,depthSegments:s};const a=this;o=Math.floor(o),i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,r,n,e,s,i,0),_("z","y","x",1,-1,r,n,-e,s,i,1),_("x","z","y",1,1,e,r,n,o,s,2),_("x","z","y",1,-1,e,r,-n,o,s,3),_("x","y","z",1,-1,e,n,r,o,i,4),_("x","y","z",-1,-1,e,n,-r,o,i,5),this.setIndex(l),this.setAttribute("position",new uo(c,3)),this.setAttribute("normal",new uo(u,3)),this.setAttribute("uv",new uo(h,2));function _(v,p,d,w,g,S,C,A,T,P,E){const x=S/T,I=C/P,W=S/2,D=C/2,j=A/2,Y=T+1,ee=P+1;let J=0,b=0;const V=new k;for(let G=0;G<ee;G++){const oe=G*I-D;for(let ge=0;ge<Y;ge++){const Ge=ge*x-W;V[v]=Ge*w,V[p]=oe*g,V[d]=j,c.push(V.x,V.y,V.z),V[v]=0,V[p]=0,V[d]=A>0?1:-1,u.push(V.x,V.y,V.z),h.push(ge/T),h.push(1-G/P),J+=1}}for(let G=0;G<P;G++)for(let oe=0;oe<T;oe++){const ge=f+oe+Y*G,Ge=f+oe+Y*(G+1),H=f+(oe+1)+Y*(G+1),te=f+(oe+1)+Y*G;l.push(ge,Ge,te),l.push(Ge,H,te),b+=6}a.addGroup(m,b,E),m+=b,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const o=t[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const r=wi(t[n]);for(const o in r)e[o]=r[o]}return e}function f1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function J0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const h1={clone:wi,merge:zt};var p1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends Sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p1,this.fragmentShader=m1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=f1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const s=this.uniforms[o].value;s&&s.isTexture?n.uniforms[o]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[o]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[o]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[o]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[o]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[o]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[o]={type:"m4",value:s.toArray()}:n.uniforms[o]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class eg extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=tr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new k,Kh=new He,Zh=new He;class pn extends eg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,Kh,Zh),n.subVectors(Zh,Kh)}setViewOffset(e,n,r,o,i,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sc*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,i=-.5*o;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;i+=s.offsetX*o/l,n-=s.offsetY*r/c,o*=s.width/l,r*=s.height/c}const a=this.filmOffset;a!==0&&(i+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fo=-90,Oo=1;class g1 extends sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new pn(Fo,Oo,e,n);o.layers=this.layers,this.add(o);const i=new pn(Fo,Oo,e,n);i.layers=this.layers,this.add(i);const s=new pn(Fo,Oo,e,n);s.layers=this.layers,this.add(s);const a=new pn(Fo,Oo,e,n);a.layers=this.layers,this.add(a);const l=new pn(Fo,Oo,e,n);l.layers=this.layers,this.add(l);const c=new pn(Fo,Oo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,i,s,a,l]=n;for(const c of n)this.remove(c);if(e===tr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,i),e.setRenderTarget(r,1,o),e.render(n,s),e.setRenderTarget(r,2,o),e.render(n,a),e.setRenderTarget(r,3,o),e.render(n,l),e.setRenderTarget(r,4,o),e.render(n,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,o),e.render(n,u),e.setRenderTarget(h,f,m),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class tg extends Vt{constructor(e,n,r,o,i,s,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:pi,super(e,n,r,o,i,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class w1 extends wo{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new tg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Si(5,5,5),i=new zr({name:"CubemapFromEquirect",uniforms:wi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qt,blending:Ur});i.uniforms.tEquirect.value=n;const s=new zn(o,i),a=n.minFilter;return n.minFilter===ao&&(n.minFilter=Rn),new g1(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,r,o){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,r,o);e.setRenderTarget(i)}}const Tc=new k,_1=new k,v1=new Re;class Jr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Tc.subVectors(r,n).cross(_1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Tc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/o;return i<0||i>1?null:n.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||v1.getNormalMatrix(e),o=this.coplanarPoint(Tc).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Du,da=new k;class ng{constructor(e=new Jr,n=new Jr,r=new Jr,o=new Jr,i=new Jr,s=new Jr){this.planes=[e,n,r,o,i,s]}set(e,n,r,o,i,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(r),a[3].copy(o),a[4].copy(i),a[5].copy(s),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=tr){const r=this.planes,o=e.elements,i=o[0],s=o[1],a=o[2],l=o[3],c=o[4],u=o[5],h=o[6],f=o[7],m=o[8],_=o[9],v=o[10],p=o[11],d=o[12],w=o[13],g=o[14],S=o[15];if(r[0].setComponents(l-i,f-c,p-m,S-d).normalize(),r[1].setComponents(l+i,f+c,p+m,S+d).normalize(),r[2].setComponents(l+s,f+u,p+_,S+w).normalize(),r[3].setComponents(l-s,f-u,p-_,S-w).normalize(),r[4].setComponents(l-a,f-h,p-v,S-g).normalize(),n===tr)r[5].setComponents(l+a,f+h,p+v,S+g).normalize();else if(n===tl)r[5].setComponents(a,h,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let i=0;i<6;i++)if(n[i].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(da.x=o.normal.x>0?e.max.x:e.min.x,da.y=o.normal.y>0?e.max.y:e.min.y,da.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rg(){let t=null,e=!1,n=null,r=null;function o(i,s){n(i,s),r=t.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(o),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){n=i},setContext:function(i){t=i}}}function x1(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function r(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let m=0,_=f.length;m<_;m++){const v=f[m];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function i(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:o,remove:i,update:s}}class Ml extends xo{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const i=e/2,s=n/2,a=Math.floor(r),l=Math.floor(o),c=a+1,u=l+1,h=e/a,f=n/l,m=[],_=[],v=[],p=[];for(let d=0;d<u;d++){const w=d*f-s;for(let g=0;g<c;g++){const S=g*h-i;_.push(S,-w,0),v.push(0,0,1),p.push(g/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const g=w+c*d,S=w+c*(d+1),C=w+1+c*(d+1),A=w+1+c*d;m.push(g,S,A),m.push(S,C,A)}this.setIndex(m),this.setAttribute("position",new uo(_,3)),this.setAttribute("normal",new uo(v,3)),this.setAttribute("uv",new uo(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.width,e.height,e.widthSegments,e.heightSegments)}}var y1=`#ifdef USE_ALPHAHASH
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
#endif`,b1=`#ifdef USE_BATCHING
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
#endif`,P1=`#ifdef USE_BATCHING
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
#endif`,Y1=`vec3 transformedNormal = objectNormal;
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
#endif`,j1=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
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
#endif`,vx=`struct PhysicalMaterial {
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
#endif`,bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Px=`#if defined( USE_POINTS_UV )
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
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jx=`#ifdef USE_IRIDESCENCEMAP
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
#endif`,e2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i2=`float getShadowMask() {
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
}`,s2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a2=`#ifdef USE_SKINNING
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
#endif`,l2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c2=`#ifdef USE_SKINNING
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
#endif`,d2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p2=`#ifdef USE_TRANSMISSION
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
#endif`,m2=`#ifdef USE_TRANSMISSION
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
#endif`,g2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y2=`uniform sampler2D t2D;
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
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A2=`#include <common>
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
}`,R2=`#if DEPTH_PACKING == 3200
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
}`,C2=`#define DISTANCE
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
}`,b2=`#define DISTANCE
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
}`,P2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D2=`uniform float scale;
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
}`,U2=`uniform vec3 diffuse;
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
}`,N2=`#include <common>
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
}`,I2=`uniform vec3 diffuse;
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
}`,F2=`#define LAMBERT
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
}`,O2=`#define LAMBERT
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
}`,k2=`#define MATCAP
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
}`,z2=`#define MATCAP
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
}`,B2=`#define NORMAL
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
}`,H2=`#define NORMAL
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
}`,V2=`#define PHONG
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
}`,G2=`#define PHONG
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
}`,W2=`#define STANDARD
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
}`,X2=`#define STANDARD
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
}`,Y2=`#define TOON
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
}`,j2=`#define TOON
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
}`,q2=`uniform float size;
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
}`,$2=`uniform vec3 diffuse;
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
}`,K2=`#include <common>
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
}`,Z2=`uniform vec3 color;
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
}`,Q2=`uniform float rotation;
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
}`,J2=`uniform vec3 diffuse;
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
}`,Ae={alphahash_fragment:y1,alphahash_pars_fragment:S1,alphamap_fragment:M1,alphamap_pars_fragment:E1,alphatest_fragment:T1,alphatest_pars_fragment:A1,aomap_fragment:R1,aomap_pars_fragment:C1,batching_pars_vertex:b1,batching_vertex:P1,begin_vertex:L1,beginnormal_vertex:D1,bsdfs:U1,iridescence_fragment:N1,bumpmap_pars_fragment:I1,clipping_planes_fragment:F1,clipping_planes_pars_fragment:O1,clipping_planes_pars_vertex:k1,clipping_planes_vertex:z1,color_fragment:B1,color_pars_fragment:H1,color_pars_vertex:V1,color_vertex:G1,common:W1,cube_uv_reflection_fragment:X1,defaultnormal_vertex:Y1,displacementmap_pars_vertex:j1,displacementmap_vertex:q1,emissivemap_fragment:$1,emissivemap_pars_fragment:K1,colorspace_fragment:Z1,colorspace_pars_fragment:Q1,envmap_fragment:J1,envmap_common_pars_fragment:ex,envmap_pars_fragment:tx,envmap_pars_vertex:nx,envmap_physical_pars_fragment:hx,envmap_vertex:rx,fog_vertex:ox,fog_pars_vertex:ix,fog_fragment:sx,fog_pars_fragment:ax,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:dx,lights_lambert_pars_fragment:ux,lights_pars_begin:fx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:wx,lights_physical_fragment:_x,lights_physical_pars_fragment:vx,lights_fragment_begin:xx,lights_fragment_maps:yx,lights_fragment_end:Sx,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:Ax,map_fragment:Rx,map_pars_fragment:Cx,map_particle_fragment:bx,map_particle_pars_fragment:Px,metalnessmap_fragment:Lx,metalnessmap_pars_fragment:Dx,morphinstance_vertex:Ux,morphcolor_vertex:Nx,morphnormal_vertex:Ix,morphtarget_pars_vertex:Fx,morphtarget_vertex:Ox,normal_fragment_begin:kx,normal_fragment_maps:zx,normal_pars_fragment:Bx,normal_pars_vertex:Hx,normal_vertex:Vx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:Wx,clearcoat_normal_fragment_maps:Xx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:jx,opaque_fragment:qx,packing:$x,premultiplied_alpha_fragment:Kx,project_vertex:Zx,dithering_fragment:Qx,dithering_pars_fragment:Jx,roughnessmap_fragment:e2,roughnessmap_pars_fragment:t2,shadowmap_pars_fragment:n2,shadowmap_pars_vertex:r2,shadowmap_vertex:o2,shadowmask_pars_fragment:i2,skinbase_vertex:s2,skinning_pars_vertex:a2,skinning_vertex:l2,skinnormal_vertex:c2,specularmap_fragment:d2,specularmap_pars_fragment:u2,tonemapping_fragment:f2,tonemapping_pars_fragment:h2,transmission_fragment:p2,transmission_pars_fragment:m2,uv_pars_fragment:g2,uv_pars_vertex:w2,uv_vertex:_2,worldpos_vertex:v2,background_vert:x2,background_frag:y2,backgroundCube_vert:S2,backgroundCube_frag:M2,cube_vert:E2,cube_frag:T2,depth_vert:A2,depth_frag:R2,distanceRGBA_vert:C2,distanceRGBA_frag:b2,equirect_vert:P2,equirect_frag:L2,linedashed_vert:D2,linedashed_frag:U2,meshbasic_vert:N2,meshbasic_frag:I2,meshlambert_vert:F2,meshlambert_frag:O2,meshmatcap_vert:k2,meshmatcap_frag:z2,meshnormal_vert:B2,meshnormal_frag:H2,meshphong_vert:V2,meshphong_frag:G2,meshphysical_vert:W2,meshphysical_frag:X2,meshtoon_vert:Y2,meshtoon_frag:j2,points_vert:q2,points_frag:$2,shadow_vert:K2,shadow_frag:Z2,sprite_vert:Q2,sprite_frag:J2},ie={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},In={basic:{uniforms:zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:zt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:zt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:zt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:zt([ie.points,ie.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:zt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:zt([ie.common,ie.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:zt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:zt([ie.sprite,ie.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:zt([ie.common,ie.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:zt([ie.lights,ie.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};In.physical={uniforms:zt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const ua={r:0,b:0,g:0},$r=new ar,ey=new mt;function ty(t,e,n,r,o,i,s){const a=new qe(0);let l=i===!0?0:1,c,u,h=null,f=0,m=null;function _(w){let g=w.isScene===!0?w.background:null;return g&&g.isTexture&&(g=(w.backgroundBlurriness>0?n:e).get(g)),g}function v(w){let g=!1;const S=_(w);S===null?d(a,l):S&&S.isColor&&(d(S,1),g=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?r.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function p(w,g){const S=_(g);S&&(S.isCubeTexture||S.mapping===vl)?(u===void 0&&(u=new zn(new Si(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:wi(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(u)),$r.copy(g.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ey.makeRotationFromEuler($r)),u.material.toneMapped=je.getTransfer(S.colorSpace)!==et,(h!==S||f!==S.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,m=t.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new zn(new Ml(2,2),new zr({name:"BackgroundMaterial",uniforms:wi(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=je.getTransfer(S.colorSpace)!==et,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,m=t.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,g){w.getRGB(ua,J0(t)),r.buffers.color.setClear(ua.r,ua.g,ua.b,g,s)}return{getClearColor:function(){return a},setClearColor:function(w,g=1){a.set(w),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(a,l)},render:v,addToRenderList:p}}function ny(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},o=f(null);let i=o,s=!1;function a(x,I,W,D,j){let Y=!1;const ee=h(D,W,I);i!==ee&&(i=ee,c(i.object)),Y=m(x,D,W,j),Y&&_(x,D,W,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,S(x,I,W,D),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function h(x,I,W){const D=W.wireframe===!0;let j=r[x.id];j===void 0&&(j={},r[x.id]=j);let Y=j[I.id];Y===void 0&&(Y={},j[I.id]=Y);let ee=Y[D];return ee===void 0&&(ee=f(l()),Y[D]=ee),ee}function f(x){const I=[],W=[],D=[];for(let j=0;j<n;j++)I[j]=0,W[j]=0,D[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:D,object:x,attributes:{},index:null}}function m(x,I,W,D){const j=i.attributes,Y=I.attributes;let ee=0;const J=W.getAttributes();for(const b in J)if(J[b].location>=0){const G=j[b];let oe=Y[b];if(oe===void 0&&(b==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),b==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),G===void 0||G.attribute!==oe||oe&&G.data!==oe.data)return!0;ee++}return i.attributesNum!==ee||i.index!==D}function _(x,I,W,D){const j={},Y=I.attributes;let ee=0;const J=W.getAttributes();for(const b in J)if(J[b].location>=0){let G=Y[b];G===void 0&&(b==="instanceMatrix"&&x.instanceMatrix&&(G=x.instanceMatrix),b==="instanceColor"&&x.instanceColor&&(G=x.instanceColor));const oe={};oe.attribute=G,G&&G.data&&(oe.data=G.data),j[b]=oe,ee++}i.attributes=j,i.attributesNum=ee,i.index=D}function v(){const x=i.newAttributes;for(let I=0,W=x.length;I<W;I++)x[I]=0}function p(x){d(x,0)}function d(x,I){const W=i.newAttributes,D=i.enabledAttributes,j=i.attributeDivisors;W[x]=1,D[x]===0&&(t.enableVertexAttribArray(x),D[x]=1),j[x]!==I&&(t.vertexAttribDivisor(x,I),j[x]=I)}function w(){const x=i.newAttributes,I=i.enabledAttributes;for(let W=0,D=I.length;W<D;W++)I[W]!==x[W]&&(t.disableVertexAttribArray(W),I[W]=0)}function g(x,I,W,D,j,Y,ee){ee===!0?t.vertexAttribIPointer(x,I,W,j,Y):t.vertexAttribPointer(x,I,W,D,j,Y)}function S(x,I,W,D){v();const j=D.attributes,Y=W.getAttributes(),ee=I.defaultAttributeValues;for(const J in Y){const b=Y[J];if(b.location>=0){let V=j[J];if(V===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(V=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(V=x.instanceColor)),V!==void 0){const G=V.normalized,oe=V.itemSize,ge=e.get(V);if(ge===void 0)continue;const Ge=ge.buffer,H=ge.type,te=ge.bytesPerElement,de=H===t.INT||H===t.UNSIGNED_INT||V.gpuType===z0;if(V.isInterleavedBufferAttribute){const ne=V.data,Ne=ne.stride,Ie=V.offset;if(ne.isInstancedInterleavedBuffer){for(let N=0;N<b.locationSize;N++)d(b.location+N,ne.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let N=0;N<b.locationSize;N++)p(b.location+N);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let N=0;N<b.locationSize;N++)g(b.location+N,oe/b.locationSize,H,G,Ne*te,(Ie+oe/b.locationSize*N)*te,de)}else{if(V.isInstancedBufferAttribute){for(let ne=0;ne<b.locationSize;ne++)d(b.location+ne,V.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ne=0;ne<b.locationSize;ne++)p(b.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let ne=0;ne<b.locationSize;ne++)g(b.location+ne,oe/b.locationSize,H,G,oe*te,oe/b.locationSize*ne*te,de)}}else if(ee!==void 0){const G=ee[J];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(b.location,G);break;case 3:t.vertexAttrib3fv(b.location,G);break;case 4:t.vertexAttrib4fv(b.location,G);break;default:t.vertexAttrib1fv(b.location,G)}}}}w()}function C(){P();for(const x in r){const I=r[x];for(const W in I){const D=I[W];for(const j in D)u(D[j].object),delete D[j];delete I[W]}delete r[x]}}function A(x){if(r[x.id]===void 0)return;const I=r[x.id];for(const W in I){const D=I[W];for(const j in D)u(D[j].object),delete D[j];delete I[W]}delete r[x.id]}function T(x){for(const I in r){const W=r[I];if(W[x.id]===void 0)continue;const D=W[x.id];for(const j in D)u(D[j].object),delete D[j];delete W[x.id]}}function P(){E(),s=!0,i!==o&&(i=o,c(i.object))}function E(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function ry(t,e,n){let r;function o(c){r=c}function i(c,u){t.drawArrays(r,c,u),n.update(u,r,1)}function s(c,u,h){h!==0&&(t.drawArraysInstanced(r,c,u,h),n.update(u,r,h))}function a(c,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h;m++)this.render(c[m],u[m]);else{f.multiDrawArraysWEBGL(r,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];n.update(m,r,1)}}function l(c,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)s(c[_],u[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(r,c,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v];for(let v=0;v<f.length;v++)n.update(_,r,f[v])}}this.setMode=o,this.render=i,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oy(t,e,n,r){let o;function i(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");o=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function s(A){return!(A!==kn&&r.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===xl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==kr&&r.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Er&&!T)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:d,maxVaryings:w,maxFragmentUniforms:g,vertexTextures:S,maxSamples:C}}function iy(t){const e=this;let n=null,r=0,o=!1,i=!1;const s=new Jr,a=new Re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||r!==0||o;return o=f,r=h.length,m},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,d=t.get(h);if(!o||_===null||_.length===0||i&&!p)i?u(null):c();else{const w=i?0:r,g=w*4;let S=d.clippingState||null;l.value=S,S=u(_,f,g,m);for(let C=0;C!==g;++C)S[C]=n[C];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,f,m,_){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const d=m+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let g=0,S=m;g!==v;++g,S+=4)s.copy(h[g]).applyMatrix4(w,a),s.normal.toArray(p,S),p[S+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function sy(t){let e=new WeakMap;function n(s,a){return a===bd?s.mapping=pi:a===Pd&&(s.mapping=mi),s}function r(s){if(s&&s.isTexture){const a=s.mapping;if(a===bd||a===Pd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new w1(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",o),n(c.texture,s.mapping)}else return null}}return s}function o(s){const a=s.target;a.removeEventListener("dispose",o);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class ay extends eg{constructor(e=-1,n=1,r=1,o=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let i=r-e,s=r+e,a=o+n,l=o-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(i,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zo=4,Qh=[.125,.215,.35,.446,.526,.582],no=20,Ac=new ay,Jh=new qe;let Rc=null,Cc=0,bc=0,Pc=!1;const eo=(1+Math.sqrt(5))/2,ko=1/eo,ep=[new k(-eo,ko,0),new k(eo,ko,0),new k(-ko,0,eo),new k(ko,0,eo),new k(0,eo,-ko),new k(0,eo,ko),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class tp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,o,i),n>0&&this._blur(i,0,0,n),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rc,Cc,bc),this._renderer.xr.enabled=Pc,e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:xl,format:kn,colorSpace:Gr,depthBuffer:!1},o=np(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,n,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ly(i)),this._blurMaterial=cy(i,e,n)}return o}_compileMaterial(e){const n=new zn(this._lodPlanes[0],e);this._renderer.compile(n,Ac)}_sceneToCubeUV(e,n,r,o){const a=new pn(90,1,n,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Jh),u.toneMapping=Nr,u.autoClear=!1;const m=new Nu({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new zn(new Si,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Jh),v=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):w===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const g=this._cubeSize;fa(o,w*g,d>2?g:0,g,g),u.setRenderTarget(o),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===pi||e.mapping===mi;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rp());const i=o?this._cubemapMaterial:this._equirectMaterial,s=new zn(this._lodPlanes[0],i),a=i.uniforms;a.envMap.value=e;const l=this._cubeSize;fa(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(s,Ac)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let i=1;i<o;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ep[(o-i-1)%ep.length];this._blur(e,i-1,i,s,a)}n.autoClear=r}_blur(e,n,r,o,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,r,o,"latitudinal",i),this._halfBlur(s,e,r,r,o,"longitudinal",i)}_halfBlur(e,n,r,o,i,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new zn(this._lodPlanes[o],c),f=c.uniforms,m=this._sizeLods[r]-1,_=isFinite(i)?Math.PI/(2*m):2*Math.PI/(2*no-1),v=i/_,p=isFinite(i)?1+Math.floor(u*v):no;p>no&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${no}`);const d=[];let w=0;for(let T=0;T<no;++T){const P=T/v,E=Math.exp(-P*P/2);d.push(E),T===0?w+=E:T<p&&(w+=2*E)}for(let T=0;T<d.length;T++)d[T]=d[T]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-r;const S=this._sizeLods[o],C=3*S*(o>g-Zo?o-g+Zo:0),A=4*(this._cubeSize-S);fa(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(h,Ac)}}function ly(t){const e=[],n=[],r=[];let o=t;const i=t-Zo+1+Qh.length;for(let s=0;s<i;s++){const a=Math.pow(2,o);n.push(a);let l=1/a;s>t-Zo?l=Qh[s-t+Zo-1]:s===0&&(l=0),r.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,v=3,p=2,d=1,w=new Float32Array(v*_*m),g=new Float32Array(p*_*m),S=new Float32Array(d*_*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,P=A>2?0:-1,E=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];w.set(E,v*_*A),g.set(f,p*_*A);const x=[A,A,A,A,A,A];S.set(x,d*_*A)}const C=new xo;C.setAttribute("position",new Vn(w,v)),C.setAttribute("uv",new Vn(g,p)),C.setAttribute("faceIndex",new Vn(S,d)),e.push(C),o>Zo&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function np(t,e,n){const r=new wo(t,e,n);return r.texture.mapping=vl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fa(t,e,n,r,o){t.viewport.set(e,n,r,o),t.scissor.set(e,n,r,o)}function cy(t,e,n){const r=new Float32Array(no),o=new k(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:no,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function rp(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function op(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Iu(){return`

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
	`}function dy(t){let e=new WeakMap,n=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===bd||l===Pd,u=l===pi||l===mi;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new tp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&o(m)?(n===null&&(n=new tp(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",i),h.texture):null}}}return a}function o(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function i(a){const l=a.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:s}}function uy(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=t.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function fy(t,e,n,r){const o={},i=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}f.removeEventListener("dispose",s),delete o[f.id];const m=i.get(f);m&&(e.remove(m),i.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return o[f.id]===!0||(f.addEventListener("dispose",s),o[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,d=v.length;p<d;p++)e.update(v[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let g=0,S=w.length;g<S;g+=3){const C=w[g+0],A=w[g+1],T=w[g+2];f.push(C,A,A,T,T,C)}}else if(_!==void 0){const w=_.array;v=_.version;for(let g=0,S=w.length/3-1;g<S;g+=3){const C=g+0,A=g+1,T=g+2;f.push(C,A,A,T,T,C)}}else return;const p=new(Y0(f)?Q0:Z0)(f,1);p.version=v;const d=i.get(h);d&&e.remove(d),i.set(h,p)}function u(h){const f=i.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return i.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function hy(t,e,n){let r;function o(f){r=f}let i,s;function a(f){i=f.type,s=f.bytesPerElement}function l(f,m){t.drawElements(r,m,i,f*s),n.update(m,r,1)}function c(f,m,_){_!==0&&(t.drawElementsInstanced(r,m,i,f*s,_),n.update(m,r,_))}function u(f,m,_){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<_;p++)this.render(f[p]/s,m[p]);else{v.multiDrawElementsWEBGL(r,m,0,i,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];n.update(p,r,1)}}function h(f,m,_,v){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/s,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(r,m,0,i,f,0,v,0,_);let d=0;for(let w=0;w<_;w++)d+=m[w];for(let w=0;w<v.length;w++)n.update(d,r,v[w])}}this.setMode=o,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function py(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(i/3);break;case t.LINES:n.lines+=a*(i/2);break;case t.LINE_STRIP:n.lines+=a*(i-1);break;case t.LINE_LOOP:n.lines+=a*i;break;case t.POINTS:n.points+=a*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function my(t,e,n){const r=new WeakMap,o=new At;function i(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=r.get(a);if(f===void 0||f.count!==h){let x=function(){P.dispose(),r.delete(a),a.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),p===!0&&(S=3);let C=a.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*h),P=new q0(T,C,A,h);P.type=Er,P.needsUpdate=!0;const E=S*4;for(let I=0;I<h;I++){const W=d[I],D=w[I],j=g[I],Y=C*A*4*I;for(let ee=0;ee<W.count;ee++){const J=ee*E;_===!0&&(o.fromBufferAttribute(W,ee),T[Y+J+0]=o.x,T[Y+J+1]=o.y,T[Y+J+2]=o.z,T[Y+J+3]=0),v===!0&&(o.fromBufferAttribute(D,ee),T[Y+J+4]=o.x,T[Y+J+5]=o.y,T[Y+J+6]=o.z,T[Y+J+7]=0),p===!0&&(o.fromBufferAttribute(j,ee),T[Y+J+8]=o.x,T[Y+J+9]=o.y,T[Y+J+10]=o.z,T[Y+J+11]=j.itemSize===4?o.w:1)}}f={count:h,texture:P,size:new He(C,A)},r.set(a,f),a.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:i}}function gy(t,e,n,r){let o=new WeakMap;function i(l){const c=r.render.frame,u=l.geometry,h=e.get(l,u);if(o.get(h)!==c&&(e.update(h),o.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),o.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),o.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;o.get(f)!==c&&(f.update(),o.set(f,c))}return h}function s(){o=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:i,dispose:s}}class og extends Vt{constructor(e,n,r,o,i,s,a,l,c,u){if(u=u!==void 0?u:ii,u!==ii&&u!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===ii&&(r=gi),r===void 0&&u===gs&&(r=Ss),super(null,o,i,s,a,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ig=new Vt,sg=new og(1,1);sg.compareFunction=X0;const ag=new q0,lg=new t1,cg=new tg,ip=[],sp=[],ap=new Float32Array(16),lp=new Float32Array(9),cp=new Float32Array(4);function Mi(t,e,n){const r=t[0];if(r<=0||r>0)return t;const o=e*n;let i=ip[o];if(i===void 0&&(i=new Float32Array(o),ip[o]=i),e!==0){r.toArray(i,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(i,a)}return i}function _t(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function vt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function El(t,e){let n=sp[e];n===void 0&&(n=new Int32Array(e),sp[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function wy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _y(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2fv(this.addr,e),vt(n,e)}}function vy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_t(n,e))return;t.uniform3fv(this.addr,e),vt(n,e)}}function xy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4fv(this.addr,e),vt(n,e)}}function yy(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(_t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),vt(n,e)}else{if(_t(n,r))return;cp.set(r),t.uniformMatrix2fv(this.addr,!1,cp),vt(n,r)}}function Sy(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(_t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),vt(n,e)}else{if(_t(n,r))return;lp.set(r),t.uniformMatrix3fv(this.addr,!1,lp),vt(n,r)}}function My(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(_t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),vt(n,e)}else{if(_t(n,r))return;ap.set(r),t.uniformMatrix4fv(this.addr,!1,ap),vt(n,r)}}function Ey(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ty(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2iv(this.addr,e),vt(n,e)}}function Ay(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3iv(this.addr,e),vt(n,e)}}function Ry(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4iv(this.addr,e),vt(n,e)}}function Cy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function by(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2uiv(this.addr,e),vt(n,e)}}function Py(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3uiv(this.addr,e),vt(n,e)}}function Ly(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4uiv(this.addr,e),vt(n,e)}}function Dy(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o);const i=this.type===t.SAMPLER_2D_SHADOW?sg:ig;n.setTexture2D(e||i,o)}function Uy(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||lg,o)}function Ny(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||cg,o)}function Iy(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||ag,o)}function Fy(t){switch(t){case 5126:return wy;case 35664:return _y;case 35665:return vy;case 35666:return xy;case 35674:return yy;case 35675:return Sy;case 35676:return My;case 5124:case 35670:return Ey;case 35667:case 35671:return Ty;case 35668:case 35672:return Ay;case 35669:case 35673:return Ry;case 5125:return Cy;case 36294:return by;case 36295:return Py;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Dy;case 35679:case 36299:case 36307:return Uy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Iy}}function Oy(t,e){t.uniform1fv(this.addr,e)}function ky(t,e){const n=Mi(e,this.size,2);t.uniform2fv(this.addr,n)}function zy(t,e){const n=Mi(e,this.size,3);t.uniform3fv(this.addr,n)}function By(t,e){const n=Mi(e,this.size,4);t.uniform4fv(this.addr,n)}function Hy(t,e){const n=Mi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Vy(t,e){const n=Mi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Gy(t,e){const n=Mi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Wy(t,e){t.uniform1iv(this.addr,e)}function Xy(t,e){t.uniform2iv(this.addr,e)}function Yy(t,e){t.uniform3iv(this.addr,e)}function jy(t,e){t.uniform4iv(this.addr,e)}function qy(t,e){t.uniform1uiv(this.addr,e)}function $y(t,e){t.uniform2uiv(this.addr,e)}function Ky(t,e){t.uniform3uiv(this.addr,e)}function Zy(t,e){t.uniform4uiv(this.addr,e)}function Qy(t,e,n){const r=this.cache,o=e.length,i=El(n,o);_t(r,i)||(t.uniform1iv(this.addr,i),vt(r,i));for(let s=0;s!==o;++s)n.setTexture2D(e[s]||ig,i[s])}function Jy(t,e,n){const r=this.cache,o=e.length,i=El(n,o);_t(r,i)||(t.uniform1iv(this.addr,i),vt(r,i));for(let s=0;s!==o;++s)n.setTexture3D(e[s]||lg,i[s])}function e3(t,e,n){const r=this.cache,o=e.length,i=El(n,o);_t(r,i)||(t.uniform1iv(this.addr,i),vt(r,i));for(let s=0;s!==o;++s)n.setTextureCube(e[s]||cg,i[s])}function t3(t,e,n){const r=this.cache,o=e.length,i=El(n,o);_t(r,i)||(t.uniform1iv(this.addr,i),vt(r,i));for(let s=0;s!==o;++s)n.setTexture2DArray(e[s]||ag,i[s])}function n3(t){switch(t){case 5126:return Oy;case 35664:return ky;case 35665:return zy;case 35666:return By;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return Yy;case 35669:case 35673:return jy;case 5125:return qy;case 36294:return $y;case 36295:return Ky;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return e3;case 36289:case 36303:case 36311:case 36292:return t3}}class r3{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Fy(n.type)}}class o3{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=n3(n.type)}}class i3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let i=0,s=o.length;i!==s;++i){const a=o[i];a.setValue(e,n[a.id],r)}}}const Lc=/(\w+)(\])?(\[|\.)?/g;function dp(t,e){t.seq.push(e),t.map[e.id]=e}function s3(t,e,n){const r=t.name,o=r.length;for(Lc.lastIndex=0;;){const i=Lc.exec(r),s=Lc.lastIndex;let a=i[1];const l=i[2]==="]",c=i[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===o){dp(n,c===void 0?new r3(a,t,e):new o3(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new i3(a),dp(n,h)),n=h}}}class Aa{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const i=e.getActiveUniform(n,o),s=e.getUniformLocation(n,i.name);s3(i,s,this)}}setValue(e,n,r,o){const i=this.map[n];i!==void 0&&i.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let i=0,s=n.length;i!==s;++i){const a=n[i],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,i=e.length;o!==i;++o){const s=e[o];s.id in n&&r.push(s)}return r}}function up(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const a3=37297;let l3=0;function c3(t,e){const n=t.split(`
`),r=[],o=Math.max(e-6,0),i=Math.min(e+6,n.length);for(let s=o;s<i;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return r.join(`
`)}function d3(t){const e=je.getPrimaries(je.workingColorSpace),n=je.getPrimaries(t);let r;switch(e===n?r="":e===el&&n===Ja?r="LinearDisplayP3ToLinearSRGB":e===Ja&&n===el&&(r="LinearSRGBToLinearDisplayP3"),t){case Gr:case yl:return[r,"LinearTransferOETF"];case Nn:case Lu:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[r,"LinearTransferOETF"]}}function fp(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),o=t.getShaderInfoLog(e).trim();if(r&&o==="")return"";const i=/ERROR: 0:(\d+)/.exec(o);if(i){const s=parseInt(i[1]);return n.toUpperCase()+`

`+o+`

`+c3(t.getShaderSource(e),s)}else return o}function u3(t,e){const n=d3(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function f3(t,e){let n;switch(e){case _v:n="Linear";break;case vv:n="Reinhard";break;case xv:n="OptimizedCineon";break;case yv:n="ACESFilmic";break;case Mv:n="AgX";break;case Ev:n="Neutral";break;case Sv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function h3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function p3(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function m3(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const i=t.getActiveAttrib(e,o),s=i.name;let a=1;i.type===t.FLOAT_MAT2&&(a=2),i.type===t.FLOAT_MAT3&&(a=3),i.type===t.FLOAT_MAT4&&(a=4),n[s]={type:i.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Gi(t){return t!==""}function hp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(t){return t.replace(g3,_3)}const w3=new Map;function _3(t,e){let n=Ae[e];if(n===void 0){const r=w3.get(e);if(r!==void 0)n=Ae[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Nd(n)}const v3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mp(t){return t.replace(v3,x3)}function x3(t,e,n,r){let o="";for(let i=parseInt(e);i<parseInt(n);i++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return o}function gp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function y3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function S3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function E3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case F0:e="ENVMAP_BLENDING_MULTIPLY";break;case gv:e="ENVMAP_BLENDING_MIX";break;case wv:e="ENVMAP_BLENDING_ADD";break}return e}function T3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function A3(t,e,n,r){const o=t.getContext(),i=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=y3(n),c=S3(n),u=M3(n),h=E3(n),f=T3(n),m=h3(n),_=p3(i),v=o.createProgram();let p,d,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Gi).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Gi).join(`
`),d.length>0&&(d+=`
`)):(p=[gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),d=[gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Nr?"#define TONE_MAPPING":"",n.toneMapping!==Nr?Ae.tonemapping_pars_fragment:"",n.toneMapping!==Nr?f3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,u3("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Gi).join(`
`)),s=Nd(s),s=hp(s,n),s=pp(s,n),a=Nd(a),a=hp(a,n),a=pp(a,n),s=mp(s),a=mp(a),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",n.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=w+p+s,S=w+d+a,C=up(o,o.VERTEX_SHADER,g),A=up(o,o.FRAGMENT_SHADER,S);o.attachShader(v,C),o.attachShader(v,A),n.index0AttributeName!==void 0?o.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(v,0,"position"),o.linkProgram(v);function T(I){if(t.debug.checkShaderErrors){const W=o.getProgramInfoLog(v).trim(),D=o.getShaderInfoLog(C).trim(),j=o.getShaderInfoLog(A).trim();let Y=!0,ee=!0;if(o.getProgramParameter(v,o.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(o,v,C,A);else{const J=fp(o,C,"vertex"),b=fp(o,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(v,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+J+`
`+b)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(D===""||j==="")&&(ee=!1);ee&&(I.diagnostics={runnable:Y,programLog:W,vertexShader:{log:D,prefix:p},fragmentShader:{log:j,prefix:d}})}o.deleteShader(C),o.deleteShader(A),P=new Aa(o,v),E=m3(o,v)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=o.getProgramParameter(v,a3)),x},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=l3++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let R3=0;class C3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),i=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(o)===!1&&(s.add(o),o.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new b3(e),n.set(e,r)),r}}class b3{constructor(e){this.id=R3++,this.code=e,this.usedTimes=0}}function P3(t,e,n,r,o,i,s){const a=new Uu,l=new C3,c=new Set,u=[],h=o.logarithmicDepthBuffer,f=o.vertexTextures;let m=o.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,x,I,W,D){const j=W.fog,Y=D.geometry,ee=E.isMeshStandardMaterial?W.environment:null,J=(E.isMeshStandardMaterial?n:e).get(E.envMap||ee),b=J&&J.mapping===vl?J.image.height:null,V=_[E.type];E.precision!==null&&(m=o.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=G!==void 0?G.length:0;let ge=0;Y.morphAttributes.position!==void 0&&(ge=1),Y.morphAttributes.normal!==void 0&&(ge=2),Y.morphAttributes.color!==void 0&&(ge=3);let Ge,H,te,de;if(V){const Xe=In[V];Ge=Xe.vertexShader,H=Xe.fragmentShader}else Ge=E.vertexShader,H=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),de=l.getFragmentShaderID(E);const ne=t.getRenderTarget(),Ne=D.isInstancedMesh===!0,Ie=D.isBatchedMesh===!0,N=!!E.map,Ze=!!E.matcap,ve=!!J,$e=!!E.aoMap,Se=!!E.lightMap,Oe=!!E.bumpMap,Le=!!E.normalMap,ke=!!E.displacementMap,at=!!E.emissiveMap,R=!!E.metalnessMap,y=!!E.roughnessMap,B=E.anisotropy>0,q=E.clearcoat>0,K=E.dispersion>0,Q=E.iridescence>0,_e=E.sheen>0,ce=E.transmission>0,le=B&&!!E.anisotropyMap,Ce=q&&!!E.clearcoatMap,re=q&&!!E.clearcoatNormalMap,we=q&&!!E.clearcoatRoughnessMap,ze=Q&&!!E.iridescenceMap,xe=Q&&!!E.iridescenceThicknessMap,he=_e&&!!E.sheenColorMap,be=_e&&!!E.sheenRoughnessMap,Fe=!!E.specularMap,dt=!!E.specularColorMap,Pe=!!E.specularIntensityMap,L=ce&&!!E.transmissionMap,$=ce&&!!E.thicknessMap,X=!!E.gradientMap,se=!!E.alphaMap,ue=E.alphaTest>0,Ve=!!E.alphaHash,Qe=!!E.extensions;let lt=Nr;E.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(lt=t.toneMapping);const bt={shaderID:V,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:H,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ie,instancing:Ne,instancingColor:Ne&&D.instanceColor!==null,instancingMorph:Ne&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Gr,alphaToCoverage:!!E.alphaToCoverage,map:N,matcap:Ze,envMap:ve,envMapMode:ve&&J.mapping,envMapCubeUVHeight:b,aoMap:$e,lightMap:Se,bumpMap:Oe,normalMap:Le,displacementMap:f&&ke,emissiveMap:at,normalMapObjectSpace:Le&&E.normalMapType===zv,normalMapTangentSpace:Le&&E.normalMapType===kv,metalnessMap:R,roughnessMap:y,anisotropy:B,anisotropyMap:le,clearcoat:q,clearcoatMap:Ce,clearcoatNormalMap:re,clearcoatRoughnessMap:we,dispersion:K,iridescence:Q,iridescenceMap:ze,iridescenceThicknessMap:xe,sheen:_e,sheenColorMap:he,sheenRoughnessMap:be,specularMap:Fe,specularColorMap:dt,specularIntensityMap:Pe,transmission:ce,transmissionMap:L,thicknessMap:$,gradientMap:X,opaque:E.transparent===!1&&E.blending===oi&&E.alphaToCoverage===!1,alphaMap:se,alphaTest:ue,alphaHash:Ve,combine:E.combine,mapUv:N&&v(E.map.channel),aoMapUv:$e&&v(E.aoMap.channel),lightMapUv:Se&&v(E.lightMap.channel),bumpMapUv:Oe&&v(E.bumpMap.channel),normalMapUv:Le&&v(E.normalMap.channel),displacementMapUv:ke&&v(E.displacementMap.channel),emissiveMapUv:at&&v(E.emissiveMap.channel),metalnessMapUv:R&&v(E.metalnessMap.channel),roughnessMapUv:y&&v(E.roughnessMap.channel),anisotropyMapUv:le&&v(E.anisotropyMap.channel),clearcoatMapUv:Ce&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(E.sheenRoughnessMap.channel),specularMapUv:Fe&&v(E.specularMap.channel),specularColorMapUv:dt&&v(E.specularColorMap.channel),specularIntensityMapUv:Pe&&v(E.specularIntensityMap.channel),transmissionMapUv:L&&v(E.transmissionMap.channel),thicknessMapUv:$&&v(E.thicknessMap.channel),alphaMapUv:se&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Le||B),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!Y.attributes.uv&&(N||se),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ge,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:lt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:N&&E.map.isVideoTexture===!0&&je.getTransfer(E.map.colorSpace)===et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qn,flipSided:E.side===Qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Qe&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qe&&E.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function d(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)x.push(I),x.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(w(x,E),g(x,E),x.push(t.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function w(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function g(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),E.push(a.mask)}function S(E){const x=_[E.type];let I;if(x){const W=In[x];I=h1.clone(W.uniforms)}else I=E.uniforms;return I}function C(E,x){let I;for(let W=0,D=u.length;W<D;W++){const j=u[W];if(j.cacheKey===x){I=j,++I.usedTimes;break}}return I===void 0&&(I=new A3(t,x,E,i),u.push(I)),I}function A(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function T(E){l.remove(E)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:P}}function L3(){let t=new WeakMap;function e(i){let s=t.get(i);return s===void 0&&(s={},t.set(i,s)),s}function n(i){t.delete(i)}function r(i,s,a){t.get(i)[s]=a}function o(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:o}}function D3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function wp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _p(){const t=[];let e=0;const n=[],r=[],o=[];function i(){e=0,n.length=0,r.length=0,o.length=0}function s(h,f,m,_,v,p){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:v,group:p},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=v,d.group=p),e++,d}function a(h,f,m,_,v,p){const d=s(h,f,m,_,v,p);m.transmission>0?r.push(d):m.transparent===!0?o.push(d):n.push(d)}function l(h,f,m,_,v,p){const d=s(h,f,m,_,v,p);m.transmission>0?r.unshift(d):m.transparent===!0?o.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||D3),r.length>1&&r.sort(f||wp),o.length>1&&o.sort(f||wp)}function u(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:r,transparent:o,init:i,push:a,unshift:l,finish:u,sort:c}}function U3(){let t=new WeakMap;function e(r,o){const i=t.get(r);let s;return i===void 0?(s=new _p,t.set(r,[s])):o>=i.length?(s=new _p,i.push(s)):s=i[o],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function N3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new qe};break;case"SpotLight":n={position:new k,direction:new k,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function I3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let F3=0;function O3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function k3(t){const e=new N3,n=I3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new k);const o=new k,i=new mt,s=new mt;function a(c,u){let h=0,f=0,m=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let _=0,v=0,p=0,d=0,w=0,g=0,S=0,C=0,A=0,T=0,P=0;c.sort(O3);const E=u===!0?Math.PI:1;for(let I=0,W=c.length;I<W;I++){const D=c[I],j=D.color,Y=D.intensity,ee=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=j.r*Y*E,f+=j.g*Y*E,m+=j.b*Y*E;else if(D.isLightProbe){for(let b=0;b<9;b++)r.probe[b].addScaledVector(D.sh.coefficients[b],Y);P++}else if(D.isDirectionalLight){const b=e.get(D);if(b.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const V=D.shadow,G=n.get(D);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,r.directionalShadow[_]=G,r.directionalShadowMap[_]=J,r.directionalShadowMatrix[_]=D.shadow.matrix,g++}r.directional[_]=b,_++}else if(D.isSpotLight){const b=e.get(D);b.position.setFromMatrixPosition(D.matrixWorld),b.color.copy(j).multiplyScalar(Y*E),b.distance=ee,b.coneCos=Math.cos(D.angle),b.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),b.decay=D.decay,r.spot[p]=b;const V=D.shadow;if(D.map&&(r.spotLightMap[A]=D.map,A++,V.updateMatrices(D),D.castShadow&&T++),r.spotLightMatrix[p]=V.matrix,D.castShadow){const G=n.get(D);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,r.spotShadow[p]=G,r.spotShadowMap[p]=J,C++}p++}else if(D.isRectAreaLight){const b=e.get(D);b.color.copy(j).multiplyScalar(Y),b.halfWidth.set(D.width*.5,0,0),b.halfHeight.set(0,D.height*.5,0),r.rectArea[d]=b,d++}else if(D.isPointLight){const b=e.get(D);if(b.color.copy(D.color).multiplyScalar(D.intensity*E),b.distance=D.distance,b.decay=D.decay,D.castShadow){const V=D.shadow,G=n.get(D);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,r.pointShadow[v]=G,r.pointShadowMap[v]=J,r.pointShadowMatrix[v]=D.shadow.matrix,S++}r.point[v]=b,v++}else if(D.isHemisphereLight){const b=e.get(D);b.skyColor.copy(D.color).multiplyScalar(Y*E),b.groundColor.copy(D.groundColor).multiplyScalar(Y*E),r.hemi[w]=b,w++}}d>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=m;const x=r.hash;(x.directionalLength!==_||x.pointLength!==v||x.spotLength!==p||x.rectAreaLength!==d||x.hemiLength!==w||x.numDirectionalShadows!==g||x.numPointShadows!==S||x.numSpotShadows!==C||x.numSpotMaps!==A||x.numLightProbes!==P)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=d,r.point.length=v,r.hemi.length=w,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=g,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=C+A-T,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=P,x.directionalLength=_,x.pointLength=v,x.spotLength=p,x.rectAreaLength=d,x.hemiLength=w,x.numDirectionalShadows=g,x.numPointShadows=S,x.numSpotShadows=C,x.numSpotMaps=A,x.numLightProbes=P,r.version=F3++)}function l(c,u){let h=0,f=0,m=0,_=0,v=0;const p=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const g=c[d];if(g.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(g.matrixWorld),o.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(p),h++}else if(g.isSpotLight){const S=r.spot[m];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(g.matrixWorld),o.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const S=r.rectArea[_];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(p),s.identity(),i.copy(g.matrixWorld),i.premultiply(p),s.extractRotation(i),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),_++}else if(g.isPointLight){const S=r.point[f];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(p),f++}else if(g.isHemisphereLight){const S=r.hemi[v];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:r}}function vp(t){const e=new k3(t),n=[],r=[];function o(u){c.camera=u,n.length=0,r.length=0}function i(u){n.push(u)}function s(u){r.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:c,setupLights:a,setupLightsView:l,pushLight:i,pushShadow:s}}function z3(t){let e=new WeakMap;function n(o,i=0){const s=e.get(o);let a;return s===void 0?(a=new vp(t),e.set(o,[a])):i>=s.length?(a=new vp(t),s.push(a)):a=s[i],a}function r(){e=new WeakMap}return{get:n,dispose:r}}class B3 extends Sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H3 extends Sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const V3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G3=`uniform sampler2D shadow_pass;
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
}`;function W3(t,e,n){let r=new ng;const o=new He,i=new He,s=new At,a=new B3({depthPacking:Ov}),l=new H3,c={},u=n.maxTextureSize,h={[Or]:Qt,[Qt]:Or,[Qn]:Qn},f=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:V3,fragmentShader:G3}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new xo;_.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new zn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I0;let d=this.type;this.render=function(A,T,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),x=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Ur),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const D=d!==$n&&this.type===$n,j=d===$n&&this.type!==$n;for(let Y=0,ee=A.length;Y<ee;Y++){const J=A[Y],b=J.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;o.copy(b.mapSize);const V=b.getFrameExtents();if(o.multiply(V),i.copy(b.mapSize),(o.x>u||o.y>u)&&(o.x>u&&(i.x=Math.floor(u/V.x),o.x=i.x*V.x,b.mapSize.x=i.x),o.y>u&&(i.y=Math.floor(u/V.y),o.y=i.y*V.y,b.mapSize.y=i.y)),b.map===null||D===!0||j===!0){const oe=this.type!==$n?{minFilter:gn,magFilter:gn}:{};b.map!==null&&b.map.dispose(),b.map=new wo(o.x,o.y,oe),b.map.texture.name=J.name+".shadowMap",b.camera.updateProjectionMatrix()}t.setRenderTarget(b.map),t.clear();const G=b.getViewportCount();for(let oe=0;oe<G;oe++){const ge=b.getViewport(oe);s.set(i.x*ge.x,i.y*ge.y,i.x*ge.z,i.y*ge.w),W.viewport(s),b.updateMatrices(J,oe),r=b.getFrustum(),S(T,P,b.camera,J,this.type)}b.isPointLightShadow!==!0&&this.type===$n&&w(b,P),b.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(E,x,I)};function w(A,T){const P=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wo(o.x,o.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,P,f,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,P,m,v,null)}function g(A,T,P,E){let x=null;const I=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)x=I;else if(x=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=x.uuid,D=T.uuid;let j=c[W];j===void 0&&(j={},c[W]=j);let Y=j[D];Y===void 0&&(Y=x.clone(),j[D]=Y,T.addEventListener("dispose",C)),x=Y}if(x.visible=T.visible,x.wireframe=T.wireframe,E===$n?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=t.properties.get(x);W.light=P}return x}function S(A,T,P,E,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===$n)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const D=e.update(A),j=A.material;if(Array.isArray(j)){const Y=D.groups;for(let ee=0,J=Y.length;ee<J;ee++){const b=Y[ee],V=j[b.materialIndex];if(V&&V.visible){const G=g(A,V,E,x);A.onBeforeShadow(t,A,T,P,D,G,b),t.renderBufferDirect(P,null,D,G,A,b),A.onAfterShadow(t,A,T,P,D,G,b)}}}else if(j.visible){const Y=g(A,j,E,x);A.onBeforeShadow(t,A,T,P,D,Y,null),t.renderBufferDirect(P,null,D,Y,A,null),A.onAfterShadow(t,A,T,P,D,Y,null)}}const W=A.children;for(let D=0,j=W.length;D<j;D++)S(W[D],T,P,E,x)}function C(A){A.target.removeEventListener("dispose",C);for(const P in c){const E=c[P],x=A.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function X3(t){function e(){let L=!1;const $=new At;let X=null;const se=new At(0,0,0,0);return{setMask:function(ue){X!==ue&&!L&&(t.colorMask(ue,ue,ue,ue),X=ue)},setLocked:function(ue){L=ue},setClear:function(ue,Ve,Qe,lt,bt){bt===!0&&(ue*=lt,Ve*=lt,Qe*=lt),$.set(ue,Ve,Qe,lt),se.equals($)===!1&&(t.clearColor(ue,Ve,Qe,lt),se.copy($))},reset:function(){L=!1,X=null,se.set(-1,0,0,0)}}}function n(){let L=!1,$=null,X=null,se=null;return{setTest:function(ue){ue?de(t.DEPTH_TEST):ne(t.DEPTH_TEST)},setMask:function(ue){$!==ue&&!L&&(t.depthMask(ue),$=ue)},setFunc:function(ue){if(X!==ue){switch(ue){case cv:t.depthFunc(t.NEVER);break;case dv:t.depthFunc(t.ALWAYS);break;case uv:t.depthFunc(t.LESS);break;case Za:t.depthFunc(t.LEQUAL);break;case fv:t.depthFunc(t.EQUAL);break;case hv:t.depthFunc(t.GEQUAL);break;case pv:t.depthFunc(t.GREATER);break;case mv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=ue}},setLocked:function(ue){L=ue},setClear:function(ue){se!==ue&&(t.clearDepth(ue),se=ue)},reset:function(){L=!1,$=null,X=null,se=null}}}function r(){let L=!1,$=null,X=null,se=null,ue=null,Ve=null,Qe=null,lt=null,bt=null;return{setTest:function(Xe){L||(Xe?de(t.STENCIL_TEST):ne(t.STENCIL_TEST))},setMask:function(Xe){$!==Xe&&!L&&(t.stencilMask(Xe),$=Xe)},setFunc:function(Xe,Ln,kt){(X!==Xe||se!==Ln||ue!==kt)&&(t.stencilFunc(Xe,Ln,kt),X=Xe,se=Ln,ue=kt)},setOp:function(Xe,Ln,kt){(Ve!==Xe||Qe!==Ln||lt!==kt)&&(t.stencilOp(Xe,Ln,kt),Ve=Xe,Qe=Ln,lt=kt)},setLocked:function(Xe){L=Xe},setClear:function(Xe){bt!==Xe&&(t.clearStencil(Xe),bt=Xe)},reset:function(){L=!1,$=null,X=null,se=null,ue=null,Ve=null,Qe=null,lt=null,bt=null}}}const o=new e,i=new n,s=new r,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],m=null,_=!1,v=null,p=null,d=null,w=null,g=null,S=null,C=null,A=new qe(0,0,0),T=0,P=!1,E=null,x=null,I=null,W=null,D=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ee=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=ee>=1):J.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=ee>=2);let b=null,V={};const G=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),ge=new At().fromArray(G),Ge=new At().fromArray(oe);function H(L,$,X,se){const ue=new Uint8Array(4),Ve=t.createTexture();t.bindTexture(L,Ve),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<X;Qe++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D($,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D($+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return Ve}const te={};te[t.TEXTURE_2D]=H(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=H(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=H(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=H(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),i.setClear(1),s.setClear(0),de(t.DEPTH_TEST),i.setFunc(Za),Oe(!1),Le(eh),de(t.CULL_FACE),$e(Ur);function de(L){c[L]!==!0&&(t.enable(L),c[L]=!0)}function ne(L){c[L]!==!1&&(t.disable(L),c[L]=!1)}function Ne(L,$){return u[L]!==$?(t.bindFramebuffer(L,$),u[L]=$,L===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=$),L===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=$),!0):!1}function Ie(L,$){let X=f,se=!1;if(L){X=h.get($),X===void 0&&(X=[],h.set($,X));const ue=L.textures;if(X.length!==ue.length||X[0]!==t.COLOR_ATTACHMENT0){for(let Ve=0,Qe=ue.length;Ve<Qe;Ve++)X[Ve]=t.COLOR_ATTACHMENT0+Ve;X.length=ue.length,se=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,se=!0);se&&t.drawBuffers(X)}function N(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const Ze={[to]:t.FUNC_ADD,[Y_]:t.FUNC_SUBTRACT,[j_]:t.FUNC_REVERSE_SUBTRACT};Ze[q_]=t.MIN,Ze[$_]=t.MAX;const ve={[K_]:t.ZERO,[Z_]:t.ONE,[Q_]:t.SRC_COLOR,[Rd]:t.SRC_ALPHA,[ov]:t.SRC_ALPHA_SATURATE,[nv]:t.DST_COLOR,[ev]:t.DST_ALPHA,[J_]:t.ONE_MINUS_SRC_COLOR,[Cd]:t.ONE_MINUS_SRC_ALPHA,[rv]:t.ONE_MINUS_DST_COLOR,[tv]:t.ONE_MINUS_DST_ALPHA,[iv]:t.CONSTANT_COLOR,[sv]:t.ONE_MINUS_CONSTANT_COLOR,[av]:t.CONSTANT_ALPHA,[lv]:t.ONE_MINUS_CONSTANT_ALPHA};function $e(L,$,X,se,ue,Ve,Qe,lt,bt,Xe){if(L===Ur){_===!0&&(ne(t.BLEND),_=!1);return}if(_===!1&&(de(t.BLEND),_=!0),L!==X_){if(L!==v||Xe!==P){if((p!==to||g!==to)&&(t.blendEquation(t.FUNC_ADD),p=to,g=to),Xe)switch(L){case oi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFunc(t.ONE,t.ONE);break;case nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case oi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}d=null,w=null,S=null,C=null,A.set(0,0,0),T=0,v=L,P=Xe}return}ue=ue||$,Ve=Ve||X,Qe=Qe||se,($!==p||ue!==g)&&(t.blendEquationSeparate(Ze[$],Ze[ue]),p=$,g=ue),(X!==d||se!==w||Ve!==S||Qe!==C)&&(t.blendFuncSeparate(ve[X],ve[se],ve[Ve],ve[Qe]),d=X,w=se,S=Ve,C=Qe),(lt.equals(A)===!1||bt!==T)&&(t.blendColor(lt.r,lt.g,lt.b,bt),A.copy(lt),T=bt),v=L,P=!1}function Se(L,$){L.side===Qn?ne(t.CULL_FACE):de(t.CULL_FACE);let X=L.side===Qt;$&&(X=!X),Oe(X),L.blending===oi&&L.transparent===!1?$e(Ur):$e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),i.setFunc(L.depthFunc),i.setTest(L.depthTest),i.setMask(L.depthWrite),o.setMask(L.colorWrite);const se=L.stencilWrite;s.setTest(se),se&&(s.setMask(L.stencilWriteMask),s.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),s.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),at(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){E!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),E=L)}function Le(L){L!==V_?(de(t.CULL_FACE),L!==x&&(L===eh?t.cullFace(t.BACK):L===G_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ne(t.CULL_FACE),x=L}function ke(L){L!==I&&(Y&&t.lineWidth(L),I=L)}function at(L,$,X){L?(de(t.POLYGON_OFFSET_FILL),(W!==$||D!==X)&&(t.polygonOffset($,X),W=$,D=X)):ne(t.POLYGON_OFFSET_FILL)}function R(L){L?de(t.SCISSOR_TEST):ne(t.SCISSOR_TEST)}function y(L){L===void 0&&(L=t.TEXTURE0+j-1),b!==L&&(t.activeTexture(L),b=L)}function B(L,$,X){X===void 0&&(b===null?X=t.TEXTURE0+j-1:X=b);let se=V[X];se===void 0&&(se={type:void 0,texture:void 0},V[X]=se),(se.type!==L||se.texture!==$)&&(b!==X&&(t.activeTexture(X),b=X),t.bindTexture(L,$||te[L]),se.type=L,se.texture=$)}function q(){const L=V[b];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(L){ge.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ge.copy(L))}function be(L){Ge.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ge.copy(L))}function Fe(L,$){let X=l.get($);X===void 0&&(X=new WeakMap,l.set($,X));let se=X.get(L);se===void 0&&(se=t.getUniformBlockIndex($,L.name),X.set(L,se))}function dt(L,$){const se=l.get($).get(L);a.get($)!==se&&(t.uniformBlockBinding($,se,L.__bindingPointIndex),a.set($,se))}function Pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},b=null,V={},u={},h=new WeakMap,f=[],m=null,_=!1,v=null,p=null,d=null,w=null,g=null,S=null,C=null,A=new qe(0,0,0),T=0,P=!1,E=null,x=null,I=null,W=null,D=null,ge.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),o.reset(),i.reset(),s.reset()}return{buffers:{color:o,depth:i,stencil:s},enable:de,disable:ne,bindFramebuffer:Ne,drawBuffers:Ie,useProgram:N,setBlending:$e,setMaterial:Se,setFlipSided:Oe,setCullFace:Le,setLineWidth:ke,setPolygonOffset:at,setScissorTest:R,activeTexture:y,bindTexture:B,unbindTexture:q,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:ze,texImage3D:xe,updateUBOMapping:Fe,uniformBlockBinding:dt,texStorage2D:re,texStorage3D:we,texSubImage2D:_e,texSubImage3D:ce,compressedTexSubImage2D:le,compressedTexSubImage3D:Ce,scissor:he,viewport:be,reset:Pe}}function Y3(t,e,n,r,o,i,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return m?new OffscreenCanvas(R,y):nl("canvas")}function v(R,y,B){let q=1;const K=at(R);if((K.width>B||K.height>B)&&(q=B/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(q*K.width),_e=Math.floor(q*K.height);h===void 0&&(h=_(Q,_e));const ce=y?_(Q,_e):h;return ce.width=Q,ce.height=_e,ce.getContext("2d").drawImage(R,0,0,Q,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Q+"x"+_e+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==gn&&R.minFilter!==Rn}function d(R){t.generateMipmap(R)}function w(R,y,B,q,K=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=y;if(y===t.RED&&(B===t.FLOAT&&(Q=t.R32F),B===t.HALF_FLOAT&&(Q=t.R16F),B===t.UNSIGNED_BYTE&&(Q=t.R8)),y===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.R8UI),B===t.UNSIGNED_SHORT&&(Q=t.R16UI),B===t.UNSIGNED_INT&&(Q=t.R32UI),B===t.BYTE&&(Q=t.R8I),B===t.SHORT&&(Q=t.R16I),B===t.INT&&(Q=t.R32I)),y===t.RG&&(B===t.FLOAT&&(Q=t.RG32F),B===t.HALF_FLOAT&&(Q=t.RG16F),B===t.UNSIGNED_BYTE&&(Q=t.RG8)),y===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RG8UI),B===t.UNSIGNED_SHORT&&(Q=t.RG16UI),B===t.UNSIGNED_INT&&(Q=t.RG32UI),B===t.BYTE&&(Q=t.RG8I),B===t.SHORT&&(Q=t.RG16I),B===t.INT&&(Q=t.RG32I)),y===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),y===t.RGBA){const _e=K?Qa:je.getTransfer(q);B===t.FLOAT&&(Q=t.RGBA32F),B===t.HALF_FLOAT&&(Q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Q=_e===et?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(R,y){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function S(R){const y=R.target;y.removeEventListener("dispose",S),A(y),y.isVideoTexture&&u.delete(y)}function C(R){const y=R.target;y.removeEventListener("dispose",C),P(y)}function A(R){const y=r.get(R);if(y.__webglInit===void 0)return;const B=R.source,q=f.get(B);if(q){const K=q[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(R),Object.keys(q).length===0&&f.delete(B)}r.remove(R)}function T(R){const y=r.get(R);t.deleteTexture(y.__webglTexture);const B=R.source,q=f.get(B);delete q[y.__cacheKey],s.memory.textures--}function P(R){const y=r.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let K=0;K<y.__webglFramebuffer[q].length;K++)t.deleteFramebuffer(y.__webglFramebuffer[q][K]);else t.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)t.deleteFramebuffer(y.__webglFramebuffer[q]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=R.textures;for(let q=0,K=B.length;q<K;q++){const Q=r.get(B[q]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),s.memory.textures--),r.remove(B[q])}r.remove(R)}let E=0;function x(){E=0}function I(){const R=E;return R>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),E+=1,R}function W(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function D(R,y){const B=r.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(B,R,y);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+y)}function j(R,y){const B=r.get(R);if(R.version>0&&B.__version!==R.version){ge(B,R,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+y)}function Y(R,y){const B=r.get(R);if(R.version>0&&B.__version!==R.version){ge(B,R,y);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+y)}function ee(R,y){const B=r.get(R);if(R.version>0&&B.__version!==R.version){Ge(B,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+y)}const J={[Ld]:t.REPEAT,[so]:t.CLAMP_TO_EDGE,[Dd]:t.MIRRORED_REPEAT},b={[gn]:t.NEAREST,[Tv]:t.NEAREST_MIPMAP_NEAREST,[Xs]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[ec]:t.LINEAR_MIPMAP_NEAREST,[ao]:t.LINEAR_MIPMAP_LINEAR},V={[Bv]:t.NEVER,[Yv]:t.ALWAYS,[Hv]:t.LESS,[X0]:t.LEQUAL,[Vv]:t.EQUAL,[Xv]:t.GEQUAL,[Gv]:t.GREATER,[Wv]:t.NOTEQUAL};function G(R,y){if(y.type===Er&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===ec||y.magFilter===Xs||y.magFilter===ao||y.minFilter===Rn||y.minFilter===ec||y.minFilter===Xs||y.minFilter===ao)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,J[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,J[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,J[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,b[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,b[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,V[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===gn||y.minFilter!==Xs&&y.minFilter!==ao||y.type===Er&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function oe(R,y){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",S));const q=y.source;let K=f.get(q);K===void 0&&(K={},f.set(q,K));const Q=W(y);if(Q!==R.__cacheKey){K[Q]===void 0&&(K[Q]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,B=!0),K[Q].usedTimes++;const _e=K[R.__cacheKey];_e!==void 0&&(K[R.__cacheKey].usedTimes--,_e.usedTimes===0&&T(y)),R.__cacheKey=Q,R.__webglTexture=K[Q].texture}return B}function ge(R,y,B){let q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=t.TEXTURE_3D);const K=oe(R,y),Q=y.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+B);const _e=r.get(Q);if(Q.version!==_e.__version||K===!0){n.activeTexture(t.TEXTURE0+B);const ce=je.getPrimaries(je.workingColorSpace),le=y.colorSpace===yr?null:je.getPrimaries(y.colorSpace),Ce=y.colorSpace===yr||ce===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let re=v(y.image,!1,o.maxTextureSize);re=ke(y,re);const we=i.convert(y.format,y.colorSpace),ze=i.convert(y.type);let xe=w(y.internalFormat,we,ze,y.colorSpace,y.isVideoTexture);G(q,y);let he;const be=y.mipmaps,Fe=y.isVideoTexture!==!0,dt=_e.__version===void 0||K===!0,Pe=Q.dataReady,L=g(y,re);if(y.isDepthTexture)xe=t.DEPTH_COMPONENT16,y.type===Er?xe=t.DEPTH_COMPONENT32F:y.type===gi?xe=t.DEPTH_COMPONENT24:y.type===Ss&&(xe=t.DEPTH24_STENCIL8),dt&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,xe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,xe,re.width,re.height,0,we,ze,null));else if(y.isDataTexture)if(be.length>0){Fe&&dt&&n.texStorage2D(t.TEXTURE_2D,L,xe,be[0].width,be[0].height);for(let $=0,X=be.length;$<X;$++)he=be[$],Fe?Pe&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,he.width,he.height,we,ze,he.data):n.texImage2D(t.TEXTURE_2D,$,xe,he.width,he.height,0,we,ze,he.data);y.generateMipmaps=!1}else Fe?(dt&&n.texStorage2D(t.TEXTURE_2D,L,xe,re.width,re.height),Pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,we,ze,re.data)):n.texImage2D(t.TEXTURE_2D,0,xe,re.width,re.height,0,we,ze,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Fe&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,L,xe,be[0].width,be[0].height,re.depth);for(let $=0,X=be.length;$<X;$++)he=be[$],y.format!==kn?we!==null?Fe?Pe&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,re.depth,we,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,xe,he.width,he.height,re.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?Pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,re.depth,we,ze,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,xe,he.width,he.height,re.depth,0,we,ze,he.data)}else{Fe&&dt&&n.texStorage2D(t.TEXTURE_2D,L,xe,be[0].width,be[0].height);for(let $=0,X=be.length;$<X;$++)he=be[$],y.format!==kn?we!==null?Fe?Pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,he.width,he.height,we,he.data):n.compressedTexImage2D(t.TEXTURE_2D,$,xe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?Pe&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,he.width,he.height,we,ze,he.data):n.texImage2D(t.TEXTURE_2D,$,xe,he.width,he.height,0,we,ze,he.data)}else if(y.isDataArrayTexture)Fe?(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,L,xe,re.width,re.height,re.depth),Pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,we,ze,re.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,re.width,re.height,re.depth,0,we,ze,re.data);else if(y.isData3DTexture)Fe?(dt&&n.texStorage3D(t.TEXTURE_3D,L,xe,re.width,re.height,re.depth),Pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,we,ze,re.data)):n.texImage3D(t.TEXTURE_3D,0,xe,re.width,re.height,re.depth,0,we,ze,re.data);else if(y.isFramebufferTexture){if(dt)if(Fe)n.texStorage2D(t.TEXTURE_2D,L,xe,re.width,re.height);else{let $=re.width,X=re.height;for(let se=0;se<L;se++)n.texImage2D(t.TEXTURE_2D,se,xe,$,X,0,we,ze,null),$>>=1,X>>=1}}else if(be.length>0){if(Fe&&dt){const $=at(be[0]);n.texStorage2D(t.TEXTURE_2D,L,xe,$.width,$.height)}for(let $=0,X=be.length;$<X;$++)he=be[$],Fe?Pe&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,we,ze,he):n.texImage2D(t.TEXTURE_2D,$,xe,we,ze,he);y.generateMipmaps=!1}else if(Fe){if(dt){const $=at(re);n.texStorage2D(t.TEXTURE_2D,L,xe,$.width,$.height)}Pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,we,ze,re)}else n.texImage2D(t.TEXTURE_2D,0,xe,we,ze,re);p(y)&&d(q),_e.__version=Q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ge(R,y,B){if(y.image.length!==6)return;const q=oe(R,y),K=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const Q=r.get(K);if(K.version!==Q.__version||q===!0){n.activeTexture(t.TEXTURE0+B);const _e=je.getPrimaries(je.workingColorSpace),ce=y.colorSpace===yr?null:je.getPrimaries(y.colorSpace),le=y.colorSpace===yr||_e===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,we=[];for(let X=0;X<6;X++)!Ce&&!re?we[X]=v(y.image[X],!0,o.maxCubemapSize):we[X]=re?y.image[X].image:y.image[X],we[X]=ke(y,we[X]);const ze=we[0],xe=i.convert(y.format,y.colorSpace),he=i.convert(y.type),be=w(y.internalFormat,xe,he,y.colorSpace),Fe=y.isVideoTexture!==!0,dt=Q.__version===void 0||q===!0,Pe=K.dataReady;let L=g(y,ze);G(t.TEXTURE_CUBE_MAP,y);let $;if(Ce){Fe&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,be,ze.width,ze.height);for(let X=0;X<6;X++){$=we[X].mipmaps;for(let se=0;se<$.length;se++){const ue=$[se];y.format!==kn?xe!==null?Fe?Pe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,0,0,ue.width,ue.height,xe,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,be,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,0,0,ue.width,ue.height,xe,he,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,be,ue.width,ue.height,0,xe,he,ue.data)}}}else{if($=y.mipmaps,Fe&&dt){$.length>0&&L++;const X=at(we[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,L,be,X.width,X.height)}for(let X=0;X<6;X++)if(re){Fe?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,we[X].width,we[X].height,xe,he,we[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,be,we[X].width,we[X].height,0,xe,he,we[X].data);for(let se=0;se<$.length;se++){const Ve=$[se].image[X].image;Fe?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,0,0,Ve.width,Ve.height,xe,he,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,be,Ve.width,Ve.height,0,xe,he,Ve.data)}}else{Fe?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,xe,he,we[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,be,xe,he,we[X]);for(let se=0;se<$.length;se++){const ue=$[se];Fe?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,0,0,xe,he,ue.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,be,xe,he,ue.image[X])}}}p(y)&&d(t.TEXTURE_CUBE_MAP),Q.__version=K.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function H(R,y,B,q,K,Q){const _e=i.convert(B.format,B.colorSpace),ce=i.convert(B.type),le=w(B.internalFormat,_e,ce,B.colorSpace);if(!r.get(y).__hasExternalTextures){const re=Math.max(1,y.width>>Q),we=Math.max(1,y.height>>Q);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,Q,le,re,we,y.depth,0,_e,ce,null):n.texImage2D(K,Q,le,re,we,0,_e,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Oe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,K,r.get(B).__webglTexture,0,Se(y)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,K,r.get(B).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(R,y,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer&&!y.stencilBuffer){let q=t.DEPTH_COMPONENT24;if(B||Oe(y)){const K=y.depthTexture;K&&K.isDepthTexture&&(K.type===Er?q=t.DEPTH_COMPONENT32F:K.type===gi&&(q=t.DEPTH_COMPONENT24));const Q=Se(y);Oe(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,q,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,q,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(y.depthBuffer&&y.stencilBuffer){const q=Se(y);B&&Oe(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,y.width,y.height):Oe(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const q=y.textures;for(let K=0;K<q.length;K++){const Q=q[K],_e=i.convert(Q.format,Q.colorSpace),ce=i.convert(Q.type),le=w(Q.internalFormat,_e,ce,Q.colorSpace),Ce=Se(y);B&&Oe(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,le,y.width,y.height):Oe(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,le,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,le,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),D(y.depthTexture,0);const q=r.get(y.depthTexture).__webglTexture,K=Se(y);if(y.depthTexture.format===ii)Oe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(y.depthTexture.format===gs)Oe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function ne(R){const y=r.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");de(y.__webglFramebuffer,R)}else if(B){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]=t.createRenderbuffer(),te(y.__webglDepthbuffer[q],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),te(y.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(R,y,B){const q=r.get(R);y!==void 0&&H(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&ne(R)}function Ie(R){const y=R.texture,B=r.get(R),q=r.get(y);R.addEventListener("dispose",C);const K=R.textures,Q=R.isWebGLCubeRenderTarget===!0,_e=K.length>1;if(_e||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=y.version,s.memory.textures++),Q){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let le=0;le<y.mipmaps.length;le++)B.__webglFramebuffer[ce][le]=t.createFramebuffer()}else B.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)B.__webglFramebuffer[ce]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(_e)for(let ce=0,le=K.length;ce<le;ce++){const Ce=r.get(K[ce]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&Oe(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<K.length;ce++){const le=K[ce];B.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Ce=i.convert(le.format,le.colorSpace),re=i.convert(le.type),we=w(le.internalFormat,Ce,re,le.colorSpace,R.isXRRenderTarget===!0),ze=Se(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,we,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),te(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),G(t.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)H(B.__webglFramebuffer[ce][le],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,le);else H(B.__webglFramebuffer[ce],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(y)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let ce=0,le=K.length;ce<le;ce++){const Ce=K[ce],re=r.get(Ce);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),G(t.TEXTURE_2D,Ce),H(B.__webglFramebuffer,R,Ce,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),p(Ce)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,q.__webglTexture),G(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)H(B.__webglFramebuffer[le],R,y,t.COLOR_ATTACHMENT0,ce,le);else H(B.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,ce,0);p(y)&&d(ce),n.unbindTexture()}R.depthBuffer&&ne(R)}function N(R){const y=R.textures;for(let B=0,q=y.length;B<q;B++){const K=y[B];if(p(K)){const Q=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,_e=r.get(K).__webglTexture;n.bindTexture(Q,_e),d(Q),n.unbindTexture()}}}const Ze=[],ve=[];function $e(R){if(R.samples>0){if(Oe(R)===!1){const y=R.textures,B=R.width,q=R.height;let K=t.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=r.get(R),ce=y.length>1;if(ce)for(let le=0;le<y.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let le=0;le<y.length;le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[le]);const Ce=r.get(y[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ce,0)}t.blitFramebuffer(0,0,B,q,0,0,B,q,K,t.NEAREST),l===!0&&(Ze.length=0,ve.length=0,Ze.push(t.COLOR_ATTACHMENT0+le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ze.push(Q),ve.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ve)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ze))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let le=0;le<y.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,_e.__webglColorRenderbuffer[le]);const Ce=r.get(y[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Se(R){return Math.min(o.maxSamples,R.samples)}function Oe(R){const y=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Le(R){const y=s.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function ke(R,y){const B=R.colorSpace,q=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Gr&&B!==yr&&(je.getTransfer(B)===et?(q!==kn||K!==kr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=x,this.setTexture2D=D,this.setTexture2DArray=j,this.setTexture3D=Y,this.setTextureCube=ee,this.rebindTextures=Ne,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Oe}function j3(t,e){function n(r,o=yr){let i;const s=je.getTransfer(o);if(r===kr)return t.UNSIGNED_BYTE;if(r===B0)return t.UNSIGNED_SHORT_4_4_4_4;if(r===H0)return t.UNSIGNED_SHORT_5_5_5_1;if(r===Cv)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===Av)return t.BYTE;if(r===Rv)return t.SHORT;if(r===k0)return t.UNSIGNED_SHORT;if(r===z0)return t.INT;if(r===gi)return t.UNSIGNED_INT;if(r===Er)return t.FLOAT;if(r===xl)return t.HALF_FLOAT;if(r===bv)return t.ALPHA;if(r===Pv)return t.RGB;if(r===kn)return t.RGBA;if(r===Lv)return t.LUMINANCE;if(r===Dv)return t.LUMINANCE_ALPHA;if(r===ii)return t.DEPTH_COMPONENT;if(r===gs)return t.DEPTH_STENCIL;if(r===Uv)return t.RED;if(r===V0)return t.RED_INTEGER;if(r===Nv)return t.RG;if(r===G0)return t.RG_INTEGER;if(r===W0)return t.RGBA_INTEGER;if(r===tc||r===nc||r===rc||r===oc)if(s===et)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===tc)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nc)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rc)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oc)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===tc)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nc)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rc)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oc)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oh||r===ih||r===sh||r===ah)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===oh)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ih)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sh)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ah)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lh||r===ch||r===dh)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===lh||r===ch)return s===et?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===dh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uh||r===fh||r===hh||r===ph||r===mh||r===gh||r===wh||r===_h||r===vh||r===xh||r===yh||r===Sh||r===Mh||r===Eh)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===uh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ph)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_h)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Eh)return s===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ic||r===Th||r===Ah)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===ic)return s===et?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Th)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ah)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Iv||r===Rh||r===Ch||r===bh)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===ic)return i.COMPRESSED_RED_RGTC1_EXT;if(r===Rh)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ch)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bh)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ss?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}class q3 extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ha extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $3={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,i=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,r),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=n.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&i!==null&&(o=i),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($3)))}return a!==null&&(a.visible=o!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ha;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const K3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z3=`
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

}`;class Q3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Vt,i=e.properties.get(o);i.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}render(e,n){if(this.texture!==null){if(this.mesh===null){const r=n.cameras[0].viewport,o=new zr({vertexShader:K3,fragmentShader:Z3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new zn(new Ml(20,20),o)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class J3 extends yi{constructor(e,n){super();const r=this;let o=null,i=1,s=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const v=new Q3,p=n.getContextAttributes();let d=null,w=null;const g=[],S=[],C=new He;let A=null;const T=new pn;T.layers.enable(1),T.viewport=new At;const P=new pn;P.layers.enable(2),P.viewport=new At;const E=[T,P],x=new q3;x.layers.enable(1),x.layers.enable(2);let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let te=g[H];return te===void 0&&(te=new Dc,g[H]=te),te.getTargetRaySpace()},this.getControllerGrip=function(H){let te=g[H];return te===void 0&&(te=new Dc,g[H]=te),te.getGripSpace()},this.getHand=function(H){let te=g[H];return te===void 0&&(te=new Dc,g[H]=te),te.getHandSpace()};function D(H){const te=S.indexOf(H.inputSource);if(te===-1)return;const de=g[te];de!==void 0&&(de.update(H.inputSource,H.frame,c||s),de.dispatchEvent({type:H.type,data:H.inputSource}))}function j(){o.removeEventListener("select",D),o.removeEventListener("selectstart",D),o.removeEventListener("selectend",D),o.removeEventListener("squeeze",D),o.removeEventListener("squeezestart",D),o.removeEventListener("squeezeend",D),o.removeEventListener("end",j),o.removeEventListener("inputsourceschange",Y);for(let H=0;H<g.length;H++){const te=S[H];te!==null&&(S[H]=null,g[H].disconnect(te))}I=null,W=null,v.reset(),e.setRenderTarget(d),m=null,f=null,h=null,o=null,w=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){i=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return o},this.setSession=async function(H){if(o=H,o!==null){if(d=e.getRenderTarget(),o.addEventListener("select",D),o.addEventListener("selectstart",D),o.addEventListener("selectend",D),o.addEventListener("squeeze",D),o.addEventListener("squeezestart",D),o.addEventListener("squeezeend",D),o.addEventListener("end",j),o.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),o.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(o,n,te),o.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new wo(m.framebufferWidth,m.framebufferHeight,{format:kn,type:kr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,de=null,ne=null;p.depth&&(ne=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=p.stencil?gs:ii,de=p.stencil?Ss:gi);const Ne={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:i};h=new XRWebGLBinding(o,n),f=h.createProjectionLayer(Ne),o.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new wo(f.textureWidth,f.textureHeight,{format:kn,type:kr,depthTexture:new og(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await o.requestReferenceSpace(a),Ge.setContext(o),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function Y(H){for(let te=0;te<H.removed.length;te++){const de=H.removed[te],ne=S.indexOf(de);ne>=0&&(S[ne]=null,g[ne].disconnect(de))}for(let te=0;te<H.added.length;te++){const de=H.added[te];let ne=S.indexOf(de);if(ne===-1){for(let Ie=0;Ie<g.length;Ie++)if(Ie>=S.length){S.push(de),ne=Ie;break}else if(S[Ie]===null){S[Ie]=de,ne=Ie;break}if(ne===-1)break}const Ne=g[ne];Ne&&Ne.connect(de)}}const ee=new k,J=new k;function b(H,te,de){ee.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);const ne=ee.distanceTo(J),Ne=te.projectionMatrix.elements,Ie=de.projectionMatrix.elements,N=Ne[14]/(Ne[10]-1),Ze=Ne[14]/(Ne[10]+1),ve=(Ne[9]+1)/Ne[5],$e=(Ne[9]-1)/Ne[5],Se=(Ne[8]-1)/Ne[0],Oe=(Ie[8]+1)/Ie[0],Le=N*Se,ke=N*Oe,at=ne/(-Se+Oe),R=at*-Se;te.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(R),H.translateZ(at),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const y=N+at,B=Ze+at,q=Le-R,K=ke+(ne-R),Q=ve*Ze/B*y,_e=$e*Ze/B*y;H.projectionMatrix.makePerspective(q,K,Q,_e,y,B),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function V(H,te){te===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(te.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(o===null)return;v.texture!==null&&(H.near=v.depthNear,H.far=v.depthFar),x.near=P.near=T.near=H.near,x.far=P.far=T.far=H.far,(I!==x.near||W!==x.far)&&(o.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,W=x.far,T.near=I,T.far=W,P.near=I,P.far=W,T.updateProjectionMatrix(),P.updateProjectionMatrix(),H.updateProjectionMatrix());const te=H.parent,de=x.cameras;V(x,te);for(let ne=0;ne<de.length;ne++)V(de[ne],te);de.length===2?b(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),G(H,x,te)};function G(H,te,de){de===null?H.matrix.copy(te.matrixWorld):(H.matrix.copy(de.matrixWorld),H.matrix.invert(),H.matrix.multiply(te.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(te.projectionMatrix),H.projectionMatrixInverse.copy(te.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ud*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null};let oe=null;function ge(H,te){if(u=te.getViewerPose(c||s),_=te,u!==null){const de=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let ne=!1;de.length!==x.cameras.length&&(x.cameras.length=0,ne=!0);for(let Ie=0;Ie<de.length;Ie++){const N=de[Ie];let Ze=null;if(m!==null)Ze=m.getViewport(N);else{const $e=h.getViewSubImage(f,N);Ze=$e.viewport,Ie===0&&(e.setRenderTargetTextures(w,$e.colorTexture,f.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(w))}let ve=E[Ie];ve===void 0&&(ve=new pn,ve.layers.enable(Ie),ve.viewport=new At,E[Ie]=ve),ve.matrix.fromArray(N.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(N.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ie===0&&(x.matrix.copy(ve.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ne===!0&&x.cameras.push(ve)}const Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Ie=h.getDepthInformation(de[0]);Ie&&Ie.isValid&&Ie.texture&&v.init(e,Ie,o.renderState)}}for(let de=0;de<g.length;de++){const ne=S[de],Ne=g[de];ne!==null&&Ne!==void 0&&Ne.update(ne,te,c||s)}v.render(e,x),oe&&oe(H,te),te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ge=new rg;Ge.setAnimationLoop(ge),this.setAnimationLoop=function(H){oe=H},this.dispose=function(){}}}const Kr=new ar,eS=new mt;function tS(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function r(p,d){d.color.getRGB(p.fogColor.value,J0(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function o(p,d,w,g,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),h(p,d)):d.isMeshPhongMaterial?(i(p,d),u(p,d)):d.isMeshStandardMaterial?(i(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(i(p,d),_(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),v(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,w,g):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Qt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Qt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=e.get(d),g=w.envMap,S=w.envMapRotation;if(g&&(p.envMap.value=g,Kr.copy(S),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),p.envMapRotation.value.setFromMatrix4(eS.makeRotationFromEuler(Kr)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*C,n(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,w,g){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=g*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function nS(t,e,n,r){let o={},i={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,g){const S=g.program;r.uniformBlockBinding(w,S)}function c(w,g){let S=o[w.id];S===void 0&&(_(w),S=u(w),o[w.id]=S,w.addEventListener("dispose",p));const C=g.program;r.updateUBOMapping(w,C);const A=e.render.frame;i[w.id]!==A&&(f(w),i[w.id]=A)}function u(w){const g=h();w.__bindingPointIndex=g;const S=t.createBuffer(),C=w.__size,A=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function h(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const g=o[w.id],S=w.uniforms,C=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,T=S.length;A<T;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,x=P.length;E<x;E++){const I=P[E];if(m(I,A,E,C)===!0){const W=I.__offset,D=Array.isArray(I.value)?I.value:[I.value];let j=0;for(let Y=0;Y<D.length;Y++){const ee=D[Y],J=v(ee);typeof ee=="number"||typeof ee=="boolean"?(I.__data[0]=ee,t.bufferSubData(t.UNIFORM_BUFFER,W+j,I.__data)):ee.isMatrix3?(I.__data[0]=ee.elements[0],I.__data[1]=ee.elements[1],I.__data[2]=ee.elements[2],I.__data[3]=0,I.__data[4]=ee.elements[3],I.__data[5]=ee.elements[4],I.__data[6]=ee.elements[5],I.__data[7]=0,I.__data[8]=ee.elements[6],I.__data[9]=ee.elements[7],I.__data[10]=ee.elements[8],I.__data[11]=0):(ee.toArray(I.__data,j),j+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(w,g,S,C){const A=w.value,T=g+"_"+S;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const P=C[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(w){const g=w.uniforms;let S=0;const C=16;for(let T=0,P=g.length;T<P;T++){const E=Array.isArray(g[T])?g[T]:[g[T]];for(let x=0,I=E.length;x<I;x++){const W=E[x],D=Array.isArray(W.value)?W.value:[W.value];for(let j=0,Y=D.length;j<Y;j++){const ee=D[j],J=v(ee),b=S%C;b!==0&&C-b<J.boundary&&(S+=C-b),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=J.storage}}}const A=S%C;return A>0&&(S+=C-A),w.__size=S,w.__cache={},this}function v(w){const g={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(g.boundary=4,g.storage=4):w.isVector2?(g.boundary=8,g.storage=8):w.isVector3||w.isColor?(g.boundary=16,g.storage=12):w.isVector4?(g.boundary=16,g.storage=16):w.isMatrix3?(g.boundary=48,g.storage=48):w.isMatrix4?(g.boundary=64,g.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),g}function p(w){const g=w.target;g.removeEventListener("dispose",p);const S=s.indexOf(g.__bindingPointIndex);s.splice(S,1),t.deleteBuffer(o[g.id]),delete o[g.id],delete i[g.id]}function d(){for(const w in o)t.deleteBuffer(o[w]);s=[],o={},i={}}return{bind:l,update:c,dispose:d}}class rS{constructor(e={}){const{canvas:n=qv(),context:r=null,depth:o=!0,stencil:i=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=r.getContextAttributes().alpha}else f=s;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const d=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this._useLegacyLights=!1,this.toneMapping=Nr,this.toneMappingExposure=1;const g=this;let S=!1,C=0,A=0,T=null,P=-1,E=null;const x=new At,I=new At;let W=null;const D=new qe(0);let j=0,Y=n.width,ee=n.height,J=1,b=null,V=null;const G=new At(0,0,Y,ee),oe=new At(0,0,Y,ee);let ge=!1;const Ge=new ng;let H=!1,te=!1;const de=new mt,ne=new k,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return T===null?J:1}let N=r;function Ze(M,U){return n.getContext(M,U)}try{const M={alpha:!0,depth:o,stencil:i,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pu}`),n.addEventListener("webglcontextlost",L,!1),n.addEventListener("webglcontextrestored",$,!1),n.addEventListener("webglcontextcreationerror",X,!1),N===null){const U="webgl2";if(N=Ze(U,M),N===null)throw Ze(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ve,$e,Se,Oe,Le,ke,at,R,y,B,q,K,Q,_e,ce,le,Ce,re,we,ze,xe,he,be,Fe;function dt(){ve=new uy(N),ve.init(),he=new j3(N,ve),$e=new oy(N,ve,e,he),Se=new X3(N),Oe=new py(N),Le=new L3,ke=new Y3(N,ve,Se,Le,$e,he,Oe),at=new sy(g),R=new dy(g),y=new x1(N),be=new ny(N,y),B=new fy(N,y,Oe,be),q=new gy(N,B,y,Oe),we=new my(N,$e,ke),le=new iy(Le),K=new P3(g,at,R,ve,$e,be,le),Q=new tS(g,Le),_e=new U3,ce=new z3(ve),re=new ty(g,at,R,Se,q,f,l),Ce=new W3(g,q,$e),Fe=new nS(N,Oe,$e,Se),ze=new ry(N,ve,Oe),xe=new hy(N,ve,Oe),Oe.programs=K.programs,g.capabilities=$e,g.extensions=ve,g.properties=Le,g.renderLists=_e,g.shadowMap=Ce,g.state=Se,g.info=Oe}dt();const Pe=new J3(g,N);this.xr=Pe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(Y,ee,!1))},this.getSize=function(M){return M.set(Y,ee)},this.setSize=function(M,U,z=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,ee=U,n.width=Math.floor(M*J),n.height=Math.floor(U*J),z===!0&&(n.style.width=M+"px",n.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Y*J,ee*J).floor()},this.setDrawingBufferSize=function(M,U,z){Y=M,ee=U,J=z,n.width=Math.floor(M*z),n.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(G)},this.setViewport=function(M,U,z,F){M.isVector4?G.set(M.x,M.y,M.z,M.w):G.set(M,U,z,F),Se.viewport(x.copy(G).multiplyScalar(J).round())},this.getScissor=function(M){return M.copy(oe)},this.setScissor=function(M,U,z,F){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,U,z,F),Se.scissor(I.copy(oe).multiplyScalar(J).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(M){Se.setScissorTest(ge=M)},this.setOpaqueSort=function(M){b=M},this.setTransparentSort=function(M){V=M},this.getClearColor=function(M){return M.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(M=!0,U=!0,z=!0){let F=0;if(M){let O=!1;if(T!==null){const ae=T.texture.format;O=ae===W0||ae===G0||ae===V0}if(O){const ae=T.texture.type,pe=ae===kr||ae===gi||ae===k0||ae===Ss||ae===B0||ae===H0,me=re.getClearColor(),ye=re.getClearAlpha(),Me=me.r,Te=me.g,De=me.b;pe?(m[0]=Me,m[1]=Te,m[2]=De,m[3]=ye,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=Me,_[1]=Te,_[2]=De,_[3]=ye,N.clearBufferiv(N.COLOR,0,_))}else F|=N.COLOR_BUFFER_BIT}U&&(F|=N.DEPTH_BUFFER_BIT),z&&(F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",L,!1),n.removeEventListener("webglcontextrestored",$,!1),n.removeEventListener("webglcontextcreationerror",X,!1),_e.dispose(),ce.dispose(),Le.dispose(),at.dispose(),R.dispose(),q.dispose(),be.dispose(),Fe.dispose(),K.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Xe),Pe.removeEventListener("sessionend",Ln),kt.stop()};function L(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=Oe.autoReset,U=Ce.enabled,z=Ce.autoUpdate,F=Ce.needsUpdate,O=Ce.type;dt(),Oe.autoReset=M,Ce.enabled=U,Ce.autoUpdate=z,Ce.needsUpdate=F,Ce.type=O}function X(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function se(M){const U=M.target;U.removeEventListener("dispose",se),ue(U)}function ue(M){Ve(M),Le.remove(M)}function Ve(M){const U=Le.get(M).programs;U!==void 0&&(U.forEach(function(z){K.releaseProgram(z)}),M.isShaderMaterial&&K.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,F,O,ae){U===null&&(U=Ne);const pe=O.isMesh&&O.matrixWorld.determinant()<0,me=dg(M,U,z,F,O);Se.setMaterial(F,pe);let ye=z.index,Me=1;if(F.wireframe===!0){if(ye=B.getWireframeAttribute(z),ye===void 0)return;Me=2}const Te=z.drawRange,De=z.attributes.position;let ft=Te.start*Me,Pt=(Te.start+Te.count)*Me;ae!==null&&(ft=Math.max(ft,ae.start*Me),Pt=Math.min(Pt,(ae.start+ae.count)*Me)),ye!==null?(ft=Math.max(ft,0),Pt=Math.min(Pt,ye.count)):De!=null&&(ft=Math.max(ft,0),Pt=Math.min(Pt,De.count));const Jt=Pt-ft;if(Jt<0||Jt===1/0)return;be.setup(O,F,me,z,ye);let Gn,We=ze;if(ye!==null&&(Gn=y.get(ye),We=xe,We.setIndex(Gn)),O.isMesh)F.wireframe===!0?(Se.setLineWidth(F.wireframeLinewidth*Ie()),We.setMode(N.LINES)):We.setMode(N.TRIANGLES);else if(O.isLine){let Ee=F.linewidth;Ee===void 0&&(Ee=1),Se.setLineWidth(Ee*Ie()),O.isLineSegments?We.setMode(N.LINES):O.isLineLoop?We.setMode(N.LINE_LOOP):We.setMode(N.LINE_STRIP)}else O.isPoints?We.setMode(N.POINTS):O.isSprite&&We.setMode(N.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?We.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):We.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)We.renderInstances(ft,Jt,O.count);else if(z.isInstancedBufferGeometry){const Ee=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ei=Math.min(z.instanceCount,Ee);We.renderInstances(ft,Jt,Ei)}else We.render(ft,Jt)};function Qe(M,U,z){M.transparent===!0&&M.side===Qn&&M.forceSinglePass===!1?(M.side=Qt,M.needsUpdate=!0,Rs(M,U,z),M.side=Or,M.needsUpdate=!0,Rs(M,U,z),M.side=Qn):Rs(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),p=ce.get(z),p.init(U),w.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==z&&M.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(g._useLegacyLights);const F=new Set;return M.traverse(function(O){const ae=O.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const me=ae[pe];Qe(me,z,O),F.add(me)}else Qe(ae,z,O),F.add(ae)}),w.pop(),p=null,F},this.compileAsync=function(M,U,z=null){const F=this.compile(M,U,z);return new Promise(O=>{function ae(){if(F.forEach(function(pe){Le.get(pe).currentProgram.isReady()&&F.delete(pe)}),F.size===0){O(M);return}setTimeout(ae,10)}ve.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let lt=null;function bt(M){lt&&lt(M)}function Xe(){kt.stop()}function Ln(){kt.start()}const kt=new rg;kt.setAnimationLoop(bt),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(M){lt=M,Pe.setAnimationLoop(M),M===null?kt.stop():kt.start()},Pe.addEventListener("sessionstart",Xe),Pe.addEventListener("sessionend",Ln),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(U),U=Pe.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,U,T),p=ce.get(M,w.length),p.init(U),w.push(p),de.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ge.setFromProjectionMatrix(de),te=this.localClippingEnabled,H=le.init(this.clippingPlanes,te),v=_e.get(M,d.length),v.init(),d.push(v),Fu(M,U,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(b,V);const z=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1;z&&re.addToRenderList(v,M),this.info.render.frame++,H===!0&&le.beginShadows();const F=p.state.shadowsArray;Ce.render(F,M,U),H===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=v.opaque,ae=v.transmissive;if(p.setupLights(g._useLegacyLights),U.isArrayCamera){const pe=U.cameras;if(ae.length>0)for(let me=0,ye=pe.length;me<ye;me++){const Me=pe[me];ku(O,ae,M,Me)}z&&re.render(M);for(let me=0,ye=pe.length;me<ye;me++){const Me=pe[me];Ou(v,M,Me,Me.viewport)}}else ae.length>0&&ku(O,ae,M,U),z&&re.render(M),Ou(v,M,U);T!==null&&(ke.updateMultisampleRenderTarget(T),ke.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(g,M,U),be.resetDefaultState(),P=-1,E=null,w.pop(),w.length>0?(p=w[w.length-1],H===!0&&le.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Fu(M,U,z,F){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ge.intersectsSprite(M)){F&&ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(de);const pe=q.update(M),me=M.material;me.visible&&v.push(M,pe,me,z,ne.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ge.intersectsObject(M))){const pe=q.update(M),me=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ne.copy(M.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ne.copy(pe.boundingSphere.center)),ne.applyMatrix4(M.matrixWorld).applyMatrix4(de)),Array.isArray(me)){const ye=pe.groups;for(let Me=0,Te=ye.length;Me<Te;Me++){const De=ye[Me],ft=me[De.materialIndex];ft&&ft.visible&&v.push(M,pe,ft,z,ne.z,De)}}else me.visible&&v.push(M,pe,me,z,ne.z,null)}}const ae=M.children;for(let pe=0,me=ae.length;pe<me;pe++)Fu(ae[pe],U,z,F)}function Ou(M,U,z,F){const O=M.opaque,ae=M.transmissive,pe=M.transparent;p.setupLightsView(z),H===!0&&le.setGlobalState(g.clippingPlanes,z),F&&Se.viewport(x.copy(F)),O.length>0&&As(O,U,z),ae.length>0&&As(ae,U,z),pe.length>0&&As(pe,U,z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ku(M,U,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new wo(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?xl:kr,minFilter:ao,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ae=p.state.transmissionRenderTarget[F.id],pe=F.viewport||x;ae.setSize(pe.z,pe.w);const me=g.getRenderTarget();g.setRenderTarget(ae),g.getClearColor(D),j=g.getClearAlpha(),j<1&&g.setClearColor(16777215,.5),g.clear();const ye=g.toneMapping;g.toneMapping=Nr;const Me=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),H===!0&&le.setGlobalState(g.clippingPlanes,F),As(M,z,F),ke.updateMultisampleRenderTarget(ae),ke.updateRenderTargetMipmap(ae),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let De=0,ft=U.length;De<ft;De++){const Pt=U[De],Jt=Pt.object,Gn=Pt.geometry,We=Pt.material,Ee=Pt.group;if(We.side===Qn&&Jt.layers.test(F.layers)){const Ei=We.side;We.side=Qt,We.needsUpdate=!0,zu(Jt,z,F,Gn,We,Ee),We.side=Ei,We.needsUpdate=!0,Te=!0}}Te===!0&&(ke.updateMultisampleRenderTarget(ae),ke.updateRenderTargetMipmap(ae))}g.setRenderTarget(me),g.setClearColor(D,j),Me!==void 0&&(F.viewport=Me),g.toneMapping=ye}function As(M,U,z){const F=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ae=M.length;O<ae;O++){const pe=M[O],me=pe.object,ye=pe.geometry,Me=F===null?pe.material:F,Te=pe.group;me.layers.test(z.layers)&&zu(me,U,z,ye,Me,Te)}}function zu(M,U,z,F,O,ae){M.onBeforeRender(g,U,z,F,O,ae),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(g,U,z,F,M,ae),O.transparent===!0&&O.side===Qn&&O.forceSinglePass===!1?(O.side=Qt,O.needsUpdate=!0,g.renderBufferDirect(z,U,F,O,M,ae),O.side=Or,O.needsUpdate=!0,g.renderBufferDirect(z,U,F,O,M,ae),O.side=Qn):g.renderBufferDirect(z,U,F,O,M,ae),M.onAfterRender(g,U,z,F,O,ae)}function Rs(M,U,z){U.isScene!==!0&&(U=Ne);const F=Le.get(M),O=p.state.lights,ae=p.state.shadowsArray,pe=O.state.version,me=K.getParameters(M,O.state,ae,U,z),ye=K.getProgramCacheKey(me);let Me=F.programs;F.environment=M.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(M.isMeshStandardMaterial?R:at).get(M.envMap||F.environment),F.envMapRotation=F.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Me===void 0&&(M.addEventListener("dispose",se),Me=new Map,F.programs=Me);let Te=Me.get(ye);if(Te!==void 0){if(F.currentProgram===Te&&F.lightsStateVersion===pe)return Hu(M,me),Te}else me.uniforms=K.getUniforms(M),M.onBuild(z,me,g),M.onBeforeCompile(me,g),Te=K.acquireProgram(me,ye),Me.set(ye,Te),F.uniforms=me.uniforms;const De=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=le.uniform),Hu(M,me),F.needsLights=fg(M),F.lightsStateVersion=pe,F.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),F.currentProgram=Te,F.uniformsList=null,Te}function Bu(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Aa.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Hu(M,U){const z=Le.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function dg(M,U,z,F,O){U.isScene!==!0&&(U=Ne),ke.resetTextureUnits();const ae=U.fog,pe=F.isMeshStandardMaterial?U.environment:null,me=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Gr,ye=(F.isMeshStandardMaterial?R:at).get(F.envMap||pe),Me=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Te=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),De=!!z.morphAttributes.position,ft=!!z.morphAttributes.normal,Pt=!!z.morphAttributes.color;let Jt=Nr;F.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Jt=g.toneMapping);const Gn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,We=Gn!==void 0?Gn.length:0,Ee=Le.get(F),Ei=p.state.lights;if(H===!0&&(te===!0||M!==E)){const dn=M===E&&F.id===P;le.setState(F,M,dn)}let nt=!1;F.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ei.state.version||Ee.outputColorSpace!==me||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==ye||F.fog===!0&&Ee.fog!==ae||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==le.numPlanes||Ee.numIntersection!==le.numIntersection)||Ee.vertexAlphas!==Me||Ee.vertexTangents!==Te||Ee.morphTargets!==De||Ee.morphNormals!==ft||Ee.morphColors!==Pt||Ee.toneMapping!==Jt||Ee.morphTargetsCount!==We)&&(nt=!0):(nt=!0,Ee.__version=F.version);let Wr=Ee.currentProgram;nt===!0&&(Wr=Rs(F,U,O));let Vu=!1,Ti=!1,Tl=!1;const Lt=Wr.getUniforms(),cr=Ee.uniforms;if(Se.useProgram(Wr.program)&&(Vu=!0,Ti=!0,Tl=!0),F.id!==P&&(P=F.id,Ti=!0),Vu||E!==M){Lt.setValue(N,"projectionMatrix",M.projectionMatrix),Lt.setValue(N,"viewMatrix",M.matrixWorldInverse);const dn=Lt.map.cameraPosition;dn!==void 0&&dn.setValue(N,ne.setFromMatrixPosition(M.matrixWorld)),$e.logarithmicDepthBuffer&&Lt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Lt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Ti=!0,Tl=!0)}if(O.isSkinnedMesh){Lt.setOptional(N,O,"bindMatrix"),Lt.setOptional(N,O,"bindMatrixInverse");const dn=O.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Lt.setValue(N,"boneTexture",dn.boneTexture,ke))}O.isBatchedMesh&&(Lt.setOptional(N,O,"batchingTexture"),Lt.setValue(N,"batchingTexture",O._matricesTexture,ke));const Al=z.morphAttributes;if((Al.position!==void 0||Al.normal!==void 0||Al.color!==void 0)&&we.update(O,z,Wr),(Ti||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,Lt.setValue(N,"receiveShadow",O.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(cr.envMap.value=ye,cr.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&U.environment!==null&&(cr.envMapIntensity.value=U.environmentIntensity),Ti&&(Lt.setValue(N,"toneMappingExposure",g.toneMappingExposure),Ee.needsLights&&ug(cr,Tl),ae&&F.fog===!0&&Q.refreshFogUniforms(cr,ae),Q.refreshMaterialUniforms(cr,F,J,ee,p.state.transmissionRenderTarget[M.id]),Aa.upload(N,Bu(Ee),cr,ke)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Aa.upload(N,Bu(Ee),cr,ke),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Lt.setValue(N,"center",O.center),Lt.setValue(N,"modelViewMatrix",O.modelViewMatrix),Lt.setValue(N,"normalMatrix",O.normalMatrix),Lt.setValue(N,"modelMatrix",O.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const dn=F.uniformsGroups;for(let Rl=0,hg=dn.length;Rl<hg;Rl++){const Gu=dn[Rl];Fe.update(Gu,Wr),Fe.bind(Gu,Wr)}}return Wr}function ug(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function fg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,U,z){Le.get(M.texture).__webglTexture=U,Le.get(M.depthTexture).__webglTexture=z;const F=Le.get(M);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=z===void 0,F.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const z=Le.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,z=0){T=M,C=U,A=z;let F=!0,O=null,ae=!1,pe=!1;if(M){const ye=Le.get(M);ye.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(N.FRAMEBUFFER,null),F=!1):ye.__webglFramebuffer===void 0?ke.setupRenderTarget(M):ye.__hasExternalTextures&&ke.rebindTextures(M,Le.get(M.texture).__webglTexture,Le.get(M.depthTexture).__webglTexture);const Me=M.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const Te=Le.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?O=Te[U][z]:O=Te[U],ae=!0):M.samples>0&&ke.useMultisampledRTT(M)===!1?O=Le.get(M).__webglMultisampledFramebuffer:Array.isArray(Te)?O=Te[z]:O=Te,x.copy(M.viewport),I.copy(M.scissor),W=M.scissorTest}else x.copy(G).multiplyScalar(J).floor(),I.copy(oe).multiplyScalar(J).floor(),W=ge;if(Se.bindFramebuffer(N.FRAMEBUFFER,O)&&F&&Se.drawBuffers(M,O),Se.viewport(x),Se.scissor(I),Se.setScissorTest(W),ae){const ye=Le.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,z)}else if(pe){const ye=Le.get(M.texture),Me=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.__webglTexture,z||0,Me)}P=-1},this.readRenderTargetPixels=function(M,U,z,F,O,ae,pe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(me=me[pe]),me){Se.bindFramebuffer(N.FRAMEBUFFER,me);try{const ye=M.texture,Me=ye.format,Te=ye.type;if(!$e.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-F&&z>=0&&z<=M.height-O&&N.readPixels(U,z,F,O,he.convert(Me),he.convert(Te),ae)}finally{const ye=T!==null?Le.get(T).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(M,U,z=0){const F=Math.pow(2,-z),O=Math.floor(U.image.width*F),ae=Math.floor(U.image.height*F);ke.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,M.x,M.y,O,ae),Se.unbindTexture()},this.copyTextureToTexture=function(M,U,z,F=0){const O=U.image.width,ae=U.image.height,pe=he.convert(z.format),me=he.convert(z.type);ke.setTexture2D(z,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,M.x,M.y,O,ae,pe,me,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,pe,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,F,M.x,M.y,pe,me,U.image),F===0&&z.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(M,U,z,F,O=0){const ae=M.max.x-M.min.x,pe=M.max.y-M.min.y,me=M.max.z-M.min.z,ye=he.convert(F.format),Me=he.convert(F.type);let Te;if(F.isData3DTexture)ke.setTexture3D(F,0),Te=N.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)ke.setTexture2DArray(F,0),Te=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const De=N.getParameter(N.UNPACK_ROW_LENGTH),ft=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Pt=N.getParameter(N.UNPACK_SKIP_PIXELS),Jt=N.getParameter(N.UNPACK_SKIP_ROWS),Gn=N.getParameter(N.UNPACK_SKIP_IMAGES),We=z.isCompressedTexture?z.mipmaps[O]:z.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,We.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,We.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),z.isDataTexture||z.isData3DTexture?N.texSubImage3D(Te,O,U.x,U.y,U.z,ae,pe,me,ye,Me,We.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,O,U.x,U.y,U.z,ae,pe,me,ye,We.data):N.texSubImage3D(Te,O,U.x,U.y,U.z,ae,pe,me,ye,Me,We),N.pixelStorei(N.UNPACK_ROW_LENGTH,De),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Pt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Jt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Gn),O===0&&F.generateMipmaps&&N.generateMipmap(Te),Se.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?ke.setTextureCube(M,0):M.isData3DTexture?ke.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ke.setTexture2DArray(M,0):ke.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Se.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Lu?"display-p3":"srgb",n.unpackColorSpace=je.workingColorSpace===yl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class oS extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xp=new mt;class iS{constructor(e,n,r=0,o=1/0){this.ray=new $0(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new Uu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return xp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xp),this}intersectObject(e,n=!0,r=[]){return Id(e,this,r,n),r.sort(yp),r}intersectObjects(e,n=!0,r=[]){for(let o=0,i=e.length;o<i;o++)Id(e[o],this,r,n);return r.sort(yp),r}}function yp(t,e){return t.distance-e.distance}function Id(t,e,n,r){if(t.layers.test(e.layers)&&t.raycast(e,n),r===!0){const o=t.children;for(let i=0,s=o.length;i<s;i++)Id(o[i],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pu);function sS(t,e){const n=document.createElement("canvas"),r=n.getContext("2d");n.width=300,n.height=300,r.fillStyle=t,r.fillRect(0,0,n.width,n.height),r.font="bold 200px verdana",r.fillStyle="white",r.strokeStyle="#0000009f",r.lineWidth=8,r.textAlign="center",r.textBaseline="middle",r.fillText(e,n.width/2,n.height/2),r.strokeText(e,n.width/2,n.height/2);const o=new Vt(n);return o.needsUpdate=!0,new Nu({map:o})}const Uc=1,aS=["#4169E1","#2ECC71","#DC3545","#FBA020","#8E44AD","#FFFF00"];function lS(t,e,n,r){const o=new Si(Uc,Uc,Uc),i=[];for(let a=0;a<6;a++)i.push(sS(aS[a],r[a]));const s=new zn(o,i);return s.position.set(t,e,n),s}const cS=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],Nc=[[-2,1,2],[0,1,2],[2,1,2],[-2,-1,2],[0,-1,2],[2,-1,2]],dS=t=>{const e=t.indices,n=Et.useRef(null),r=Et.useRef(null),o=Et.useRef(null),i=Et.useRef(null),s=Et.useRef(null),a=Et.useRef(new He),[l,c]=Et.useState(!1),u=Et.useRef(null),[h,f]=Et.useState(!1);return Et.useEffect(()=>{const m=[];console.log("again");for(let C=0;C<6;C++){const A=[],T=C*6;for(let E=0;E<6;E++){const x=cS[e[T+E]];A.push(x)}const P=lS(Nc[C][0],Nc[C][1],Nc[C][2],A);P.name="cube-"+C,m.push(P)}const v=n.current.clientWidth,p=n.current.clientHeight;r.current=new oS,o.current=new pn(75,v/p,.1,1e3),o.current.position.z=8,i.current=new rS({canvas:n.current}),i.current.setSize(v,p),s.current=new iS,m.forEach(C=>r.current.add(C));const d=C=>{const A=C.clientX/window.innerWidth*2-1,T=-(C.clientY/window.innerHeight*2)+1;s.current.setFromCamera(new He(A,T),o.current);const P=s.current.intersectObjects(m);P.length>0&&(u.current=P[0].object),a.current.x=C.clientX,a.current.y=C.clientY},w=()=>{u.current=null,f(!1)},g=C=>{const A=C.clientX/window.innerWidth*2-1,T=-(C.clientY/window.innerHeight*2)+1;if(s.current.setFromCamera(new He(A,T),o.current),s.current.intersectObjects(m).length>0?c(!0):c(!1),!u.current)return;f(!0);const E=C.clientX-a.current.x,x=C.clientY-a.current.y;u.current.rotation.x+=x*.03,u.current.rotation.y+=E*.03,a.current.x=C.clientX,a.current.y=C.clientY};n.current.addEventListener("mousedown",d),n.current.addEventListener("mousemove",g),n.current.addEventListener("mouseup",w);const S=()=>{requestAnimationFrame(S),i.current.render(r.current,o.current)};return S(),()=>{n.current.removeEventListener("mousedown",d),n.current.removeEventListener("mouseup",w),n.current.removeEventListener("mousemove",g)}},[]),Tt.jsx("canvas",{className:(h?"grabbing":"")+" "+(l?"grab":""),id:"scene",ref:n})};function uS(t){const e=t.data,n=e.rainbow,r=e.mono,[o,i]=Et.useState(!1),[s,a]=Et.useState(!1),[l,c]=Et.useState(H_(n.words)),[u,h]=Et.useState(B_(r.words)),f=()=>{i(!o)},m=()=>{a(!s)};return Tt.jsxs("div",{className:"big-container",children:[Tt.jsx(dS,{indices:e.indices}),Tt.jsxs("div",{className:"side-panel left-panel",children:[Tt.jsx("button",{id:"mono-btn",className:"panel-btn "+(o?"btn-toggled":"btn-untoggled"),onClick:()=>f(),children:"Mono"}),Tt.jsx("div",{id:"mono-words",className:o?"word-container":"hidden",children:u})]}),Tt.jsx("span",{id:"left-extra",children:r.total}),Tt.jsxs("div",{className:"side-panel right-panel",children:[Tt.jsx("button",{id:"rainbow-btn",className:"panel-btn "+(s?"btn-toggled":"btn-untoggled"),onClick:()=>m(),children:"Rainbow"}),Tt.jsx("div",{id:"rainbow-words",className:s?"word-container":"hidden",children:l})]}),Tt.jsx("span",{id:"right-extra",children:n.total})]})}const fS=[22,19,4,12,2,6,11,17,19,13,3,18,4,8,0,4,24,14,17,18,7,11,13,10,18,11,1,15,19,3,20,14,8,0,4,0],hS={total:165,words:[["el","lure","re","rue","rule","ruse","slew","slur","sue","sure","us","use","user","we"],["io","is","it","its","list","lit","lost","lot","oil","or","os","rio","riot","rot","si","silo","silt","sir","sit","slit","slot","so","soil","soir","sol","sort","sot","stir","ti","tiro","tis","to","toil","toils","trio"],["ab","abet","ah","ai","ait","at","ate","bah","bait","bat","bate","bath","bathe","be","beat","bet","beta","bit","bite","eat","eta","habit","hat","hate","he","heat","hi","hie","hit","tab","tea","the","tie"],["ale","alp","am","amen","amp","ample","an","ape","elan","elm","em","en","la","lam","lame","lamp","lane","lap","lea","lean","leap","ma","mal","male","man","mane","map","maple","me","meal","mean","men","name","nap","nape","neap","pal","pale","palm","pan","pane","panel","pea","peal","pen","penal","plan","plane","plea"],["cent","cyte","den","dent","deny","dye","dyne","end","net","nyet","tend","ye","yen","yet"],["ad","ado","ago","as","ask","da","do","dog","gad","gas","go","goad","god","oak","sad","sag","sago","soak","sod","soda"]]},pS={total:2663,words:[{word:"ab",colors:"32"},{word:"abed",colors:"3204"},{word:"abert",colors:"52301"},{word:"abet",colors:"3201"},{word:"able",colors:"5203"},{word:"ably",colors:"3204"},{word:"abort",colors:"32501"},{word:"absent",colors:"325041"},{word:"abysm",colors:"52413"},{word:"abyss",colors:"32415"},{word:"ace",colors:"340"},{word:"acerb",colors:"34012"},{word:"ach",colors:"342"},{word:"ache",colors:"3420"},{word:"acid",colors:"3415"},{word:"acne",colors:"5430"},{word:"acorn",colors:"24103"},{word:"acre",colors:"3410"},{word:"acrid",colors:"34015"},{word:"act",colors:"342"},{word:"acted",colors:"34205"},{word:"actor",colors:"34250"},{word:"ad",colors:"24"},{word:"adapt",colors:"24531"},{word:"add",colors:"245"},{word:"adder",colors:"34520"},{word:"ade",colors:"340"},{word:"adept",colors:"54031"},{word:"adit",colors:"3512"},{word:"ado",colors:"241"},{word:"adore",colors:"34502"},{word:"adorn",colors:"25103"},{word:"adown",colors:"25103"},{word:"adsum",colors:"24103"},{word:"adult",colors:"24031"},{word:"aedes",colors:"30421"},{word:"aeon",colors:"3254"},{word:"agar",colors:"2530"},{word:"age",colors:"350"},{word:"aged",colors:"3504"},{word:"agent",colors:"35042"},{word:"ages",colors:"3501"},{word:"aglet",colors:"35102"},{word:"ago",colors:"251"},{word:"ah",colors:"32"},{word:"ahem",colors:"5203"},{word:"ai",colors:"31"},{word:"aid",colors:"314"},{word:"aide",colors:"3142"},{word:"ail",colors:"310"},{word:"aim",colors:"513"},{word:"air",colors:"310"},{word:"aisle",colors:"51032"},{word:"ait",colors:"312"},{word:"alack",colors:"20345"},{word:"alar",colors:"2130"},{word:"alarm",colors:"21503"},{word:"alas",colors:"2031"},{word:"alb",colors:"302"},{word:"alder",colors:"31420"},{word:"ale",colors:"302"},{word:"alee",colors:"5023"},{word:"alert",colors:"53014"},{word:"alga",colors:"2053"},{word:"alien",colors:"30124"},{word:"alight",colors:"301524"},{word:"align",colors:"30154"},{word:"alike",colors:"30152"},{word:"aline",colors:"30142"},{word:"all",colors:"201"},{word:"alley",colors:"30124"},{word:"allot",colors:"20314"},{word:"ally",colors:"3014"},{word:"almond",colors:"203145"},{word:"alms",colors:"2031"},{word:"aloes",colors:"30521"},{word:"alone",colors:"30542"},{word:"along",colors:"20145"},{word:"alp",colors:"203"},{word:"alpine",colors:"503142"},{word:"also",colors:"3015"},{word:"altar",colors:"23451"},{word:"alter",colors:"53401"},{word:"altho",colors:"30125"},{word:"alto",colors:"3015"},{word:"alum",colors:"2103"},{word:"am",colors:"23"},{word:"amass",colors:"23501"},{word:"amber",colors:"53201"},{word:"amen",colors:"5304"},{word:"amid",colors:"5314"},{word:"amir",colors:"5310"},{word:"an",colors:"23"},{word:"anal",colors:"2430"},{word:"and",colors:"235"},{word:"anent",colors:"53041"},{word:"anew",colors:"2340"},{word:"angel",colors:"34501"},{word:"anger",colors:"34501"},{word:"angle",colors:"34510"},{word:"angler",colors:"235140"},{word:"anile",colors:"34102"},{word:"anise",colors:"53102"},{word:"ankle",colors:"23514"},{word:"annul",colors:"23401"},{word:"anon",colors:"2314"},{word:"ant",colors:"231"},{word:"ante",colors:"5310"},{word:"anti",colors:"3421"},{word:"anus",colors:"2301"},{word:"any",colors:"534"},{word:"apart",colors:"23501"},{word:"ape",colors:"530"},{word:"aphid",colors:"53214"},{word:"apod",colors:"2314"},{word:"apse",colors:"5310"},{word:"apt",colors:"231"},{word:"aptly",colors:"53104"},{word:"arbor",colors:"30251"},{word:"arc",colors:"204"},{word:"arch",colors:"3142"},{word:"arched",colors:"314205"},{word:"ardent",colors:"205431"},{word:"are",colors:"310"},{word:"arete",colors:"31042"},{word:"argon",colors:"20513"},{word:"argot",colors:"20514"},{word:"arid",colors:"3014"},{word:"arise",colors:"30152"},{word:"ark",colors:"215"},{word:"arm",colors:"203"},{word:"arms",colors:"2035"},{word:"army",colors:"5034"},{word:"arose",colors:"31502"},{word:"arson",colors:"31054"},{word:"art",colors:"201"},{word:"arty",colors:"3014"},{word:"as",colors:"20"},{word:"ascot",colors:"30452"},{word:"ash",colors:"302"},{word:"ashy",colors:"3024"},{word:"aside",colors:"30142"},{word:"ask",colors:"205"},{word:"asp",colors:"213"},{word:"aspect",colors:"513042"},{word:"ass",colors:"201"},{word:"aster",colors:"25140"},{word:"astir",colors:"35410"},{word:"at",colors:"21"},{word:"ate",colors:"310"},{word:"atilt",colors:"52134"},{word:"atlas",colors:"24031"},{word:"atoll",colors:"24103"},{word:"atom",colors:"2413"},{word:"attar",colors:"21430"},{word:"attend",colors:"312045"},{word:"auk",colors:"205"},{word:"auld",colors:"2014"},{word:"aunt",colors:"2031"},{word:"aw",colors:"20"},{word:"award",colors:"20315"},{word:"awe",colors:"204"},{word:"awl",colors:"201"},{word:"awry",colors:"3014"},{word:"aye",colors:"342"},{word:"ayes",colors:"3420"},{word:"back",colors:"2345"},{word:"backer",colors:"234501"},{word:"bad",colors:"234"},{word:"bade",colors:"2340"},{word:"badge",colors:"23450"},{word:"bag",colors:"235"},{word:"bail",colors:"2310"},{word:"bairn",colors:"25103"},{word:"bake",colors:"2350"},{word:"baker",colors:"23501"},{word:"bald",colors:"2534"},{word:"bale",colors:"2503"},{word:"baler",colors:"25301"},{word:"balk",colors:"2305"},{word:"balky",colors:"23054"},{word:"ball",colors:"2503"},{word:"balm",colors:"2503"},{word:"balmy",colors:"25034"},{word:"ban",colors:"253"},{word:"bane",colors:"2530"},{word:"bang",colors:"2345"},{word:"banty",colors:"25314"},{word:"bar",colors:"230"},{word:"bard",colors:"2304"},{word:"bare",colors:"2310"},{word:"barge",colors:"23150"},{word:"bark",colors:"2315"},{word:"barmy",colors:"25034"},{word:"barn",colors:"2503"},{word:"baron",colors:"23154"},{word:"bas",colors:"231"},{word:"base",colors:"2310"},{word:"bases",colors:"23105"},{word:"basic",colors:"23514"},{word:"basin",colors:"23514"},{word:"bass",colors:"2315"},{word:"bast",colors:"2351"},{word:"baste",colors:"23510"},{word:"bat",colors:"231"},{word:"bate",colors:"2310"},{word:"baton",colors:"23154"},{word:"bats",colors:"2315"},{word:"bawl",colors:"2503"},{word:"bay",colors:"234"},{word:"be",colors:"20"},{word:"bead",colors:"2034"},{word:"beak",colors:"2035"},{word:"beam",colors:"2053"},{word:"bean",colors:"2053"},{word:"beans",colors:"20531"},{word:"bear",colors:"2031"},{word:"beard",colors:"23504"},{word:"beast",colors:"20351"},{word:"beat",colors:"2031"},{word:"beck",colors:"2045"},{word:"beckon",colors:"204513"},{word:"beco",colors:"2041"},{word:"bed",colors:"204"},{word:"bee",colors:"204"},{word:"been",colors:"2043"},{word:"beer",colors:"2041"},{word:"beet",colors:"2041"},{word:"beg",colors:"205"},{word:"began",colors:"20534"},{word:"begin",colors:"24513"},{word:"begun",colors:"23504"},{word:"being",colors:"24135"},{word:"bell",colors:"2403"},{word:"belong",colors:"230145"},{word:"below",colors:"24350"},{word:"belt",colors:"2301"},{word:"bene",colors:"2034"},{word:"bent",colors:"2031"},{word:"beret",colors:"23041"},{word:"berg",colors:"2015"},{word:"berm",colors:"2013"},{word:"beset",colors:"20541"},{word:"besom",colors:"20513"},{word:"best",colors:"2051"},{word:"bet",colors:"201"},{word:"beta",colors:"2013"},{word:"betel",colors:"23140"},{word:"bias",colors:"2135"},{word:"bid",colors:"214"},{word:"bier",colors:"2140"},{word:"big",colors:"215"},{word:"bike",colors:"2154"},{word:"bile",colors:"2104"},{word:"bilge",colors:"21054"},{word:"bilk",colors:"2105"},{word:"bill",colors:"2103"},{word:"bin",colors:"213"},{word:"binge",colors:"21354"},{word:"bird",colors:"2104"},{word:"bis",colors:"215"},{word:"black",colors:"20345"},{word:"blade",colors:"23540"},{word:"blare",colors:"23510"},{word:"blase",colors:"20513"},{word:"blat",colors:"2031"},{word:"blear",colors:"23051"},{word:"bleat",colors:"20351"},{word:"bled",colors:"2304"},{word:"blest",colors:"23051"},{word:"blew",colors:"2340"},{word:"bloat",colors:"20531"},{word:"bloc",colors:"2014"},{word:"block",colors:"20145"},{word:"bloke",colors:"20153"},{word:"blood",colors:"23154"},{word:"bloom",colors:"20153"},{word:"blot",colors:"2051"},{word:"blow",colors:"2310"},{word:"blower",colors:"235041"},{word:"blur",colors:"2301"},{word:"boa",colors:"253"},{word:"boar",colors:"2530"},{word:"board",colors:"25304"},{word:"boat",colors:"2531"},{word:"bock",colors:"2145"},{word:"bode",colors:"2140"},{word:"bog",colors:"215"},{word:"bola",colors:"2503"},{word:"bold",colors:"2134"},{word:"bole",colors:"2103"},{word:"bolo",colors:"2105"},{word:"bolt",colors:"2501"},{word:"bon",colors:"213"},{word:"bone",colors:"2130"},{word:"boner",colors:"25340"},{word:"bong",colors:"2135"},{word:"bonus",colors:"25301"},{word:"bony",colors:"2134"},{word:"boo",colors:"215"},{word:"boom",colors:"2153"},{word:"boon",colors:"2153"},{word:"boor",colors:"2150"},{word:"bore",colors:"2103"},{word:"borer",colors:"25041"},{word:"born",colors:"2103"},{word:"borne",colors:"25034"},{word:"boron",colors:"21053"},{word:"bosun",colors:"25103"},{word:"bourn",colors:"25014"},{word:"bout",colors:"2501"},{word:"bow",colors:"210"},{word:"bowed",colors:"21034"},{word:"bower",colors:"25041"},{word:"bowl",colors:"2103"},{word:"bowler",colors:"250341"},{word:"bowls",colors:"21035"},{word:"boy",colors:"214"},{word:"bra",colors:"203"},{word:"brace",colors:"21340"},{word:"bracer",colors:"205431"},{word:"brad",colors:"2034"},{word:"brae",colors:"2130"},{word:"brag",colors:"2035"},{word:"braid",colors:"20314"},{word:"brain",colors:"20513"},{word:"brake",colors:"21350"},{word:"bran",colors:"2053"},{word:"brant",colors:"20531"},{word:"brat",colors:"2031"},{word:"brawl",colors:"21503"},{word:"brawn",colors:"21304"},{word:"bray",colors:"2034"},{word:"bread",colors:"20354"},{word:"break",colors:"21035"},{word:"bream",colors:"21053"},{word:"bred",colors:"2034"},{word:"brew",colors:"2130"},{word:"brig",colors:"2015"},{word:"brim",colors:"2013"},{word:"brine",colors:"20134"},{word:"bring",colors:"20135"},{word:"broad",colors:"20534"},{word:"bronc",colors:"20134"},{word:"bronco",colors:"201345"},{word:"brood",colors:"20154"},{word:"broom",colors:"20153"},{word:"brow",colors:"2150"},{word:"brown",colors:"21504"},{word:"buck",colors:"2045"},{word:"bud",colors:"204"},{word:"budge",colors:"20453"},{word:"bug",colors:"205"},{word:"bugs",colors:"2051"},{word:"build",colors:"20134"},{word:"bum",colors:"203"},{word:"bun",colors:"203"},{word:"bunco",colors:"20345"},{word:"bung",colors:"2035"},{word:"bunk",colors:"2035"},{word:"bunt",colors:"2031"},{word:"bur",colors:"201"},{word:"burg",colors:"2015"},{word:"burl",colors:"2013"},{word:"burly",colors:"20134"},{word:"burn",colors:"2014"},{word:"bury",colors:"2014"},{word:"bus",colors:"201"},{word:"buses",colors:"20135"},{word:"buss",colors:"2015"},{word:"bust",colors:"2051"},{word:"busy",colors:"2014"},{word:"but",colors:"201"},{word:"buy",colors:"204"},{word:"by",colors:"24"},{word:"bylaw",colors:"24350"},{word:"cab",colors:"432"},{word:"cabin",colors:"45213"},{word:"cable",colors:"45203"},{word:"cad",colors:"425"},{word:"cadet",colors:"43502"},{word:"cadre",colors:"43510"},{word:"cairn",colors:"45103"},{word:"cake",colors:"4350"},{word:"caliph",colors:"450132"},{word:"calk",colors:"4205"},{word:"call",colors:"4201"},{word:"calla",colors:"42013"},{word:"callus",colors:"421305"},{word:"can",colors:"423"},{word:"cana",colors:"4235"},{word:"canal",colors:"42351"},{word:"candor",colors:"423510"},{word:"cane",colors:"4530"},{word:"cap",colors:"423"},{word:"cape",colors:"4530"},{word:"caper",colors:"45301"},{word:"car",colors:"420"},{word:"card",colors:"4205"},{word:"care",colors:"4310"},{word:"caret",colors:"45032"},{word:"carnal",colors:"420351"},{word:"carol",colors:"43051"},{word:"carp",colors:"4203"},{word:"cart",colors:"4302"},{word:"cartel",colors:"450231"},{word:"casa",colors:"4203"},{word:"case",colors:"4310"},{word:"cash",colors:"4302"},{word:"cask",colors:"4205"},{word:"cast",colors:"4302"},{word:"caste",colors:"43120"},{word:"cat",colors:"432"},{word:"cater",colors:"45230"},{word:"caul",colors:"4201"},{word:"caulk",colors:"42015"},{word:"cedar",colors:"40531"},{word:"cell",colors:"4301"},{word:"chain",colors:"42513"},{word:"chaos",colors:"42350"},{word:"chap",colors:"4253"},{word:"char",colors:"4231"},{word:"chard",colors:"42315"},{word:"chase",colors:"42350"},{word:"chaser",colors:"425031"},{word:"cheap",colors:"42053"},{word:"cher",colors:"4201"},{word:"chess",colors:"42305"},{word:"chi",colors:"421"},{word:"child",colors:"42105"},{word:"chin",colors:"4213"},{word:"china",colors:"42135"},{word:"chip",colors:"4213"},{word:"chop",colors:"4213"},{word:"chops",colors:"42135"},{word:"chose",colors:"42150"},{word:"cider",colors:"42501"},{word:"clad",colors:"4025"},{word:"clan",colors:"4123"},{word:"clank",colors:"41235"},{word:"clap",colors:"4023"},{word:"claret",colors:"415032"},{word:"clash",colors:"41352"},{word:"clasp",colors:"40213"},{word:"class",colors:"43205"},{word:"clean",colors:"41053"},{word:"clear",colors:"43051"},{word:"cleat",colors:"41032"},{word:"clink",colors:"41235"},{word:"clip",colors:"4013"},{word:"clips",colors:"40231"},{word:"cloak",colors:"40125"},{word:"clod",colors:"4015"},{word:"close",colors:"43150"},{word:"clot",colors:"4152"},{word:"clout",colors:"41502"},{word:"club",colors:"4302"},{word:"clue",colors:"4103"},{word:"clunk",colors:"41035"},{word:"coa",colors:"412"},{word:"coal",colors:"4120"},{word:"coast",colors:"45302"},{word:"coat",colors:"4532"},{word:"cob",colors:"412"},{word:"cobra",colors:"45203"},{word:"cod",colors:"415"},{word:"code",colors:"4150"},{word:"coed",colors:"4105"},{word:"coi",colors:"452"},{word:"coil",colors:"4520"},{word:"coin",colors:"4523"},{word:"coke",colors:"4150"},{word:"cola",colors:"4102"},{word:"cold",colors:"4105"},{word:"cole",colors:"4103"},{word:"colt",colors:"4512"},{word:"con",colors:"413"},{word:"cone",colors:"4130"},{word:"conk",colors:"4135"},{word:"coo",colors:"415"},{word:"cool",colors:"4150"},{word:"coon",colors:"4153"},{word:"coop",colors:"4153"},{word:"coot",colors:"4152"},{word:"cop",colors:"413"},{word:"copal",colors:"41320"},{word:"cope",colors:"4130"},{word:"copra",colors:"41302"},{word:"copse",colors:"41350"},{word:"coral",colors:"45031"},{word:"cord",colors:"4105"},{word:"core",colors:"4103"},{word:"corn",colors:"4103"},{word:"corps",colors:"41035"},{word:"cost",colors:"4102"},{word:"costs",colors:"45021"},{word:"cot",colors:"412"},{word:"cote",colors:"4120"},{word:"coup",colors:"4503"},{word:"crab",colors:"4032"},{word:"crape",colors:"41530"},{word:"craps",colors:"40235"},{word:"crash",colors:"41302"},{word:"crate",colors:"40523"},{word:"creak",colors:"41035"},{word:"crib",colors:"4012"},{word:"cried",colors:"41205"},{word:"crier",colors:"40231"},{word:"cries",colors:"40235"},{word:"crisp",colors:"40153"},{word:"croon",colors:"40153"},{word:"crop",colors:"4013"},{word:"croup",colors:"41503"},{word:"crude",colors:"41053"},{word:"cub",colors:"402"},{word:"cube",colors:"4023"},{word:"cud",colors:"405"},{word:"cue",colors:"403"},{word:"cuke",colors:"4053"},{word:"cull",colors:"4013"},{word:"cult",colors:"4012"},{word:"cup",colors:"403"},{word:"cur",colors:"401"},{word:"curb",colors:"4012"},{word:"curd",colors:"4015"},{word:"cure",colors:"4013"},{word:"curl",colors:"4013"},{word:"cusp",colors:"4013"},{word:"cuss",colors:"4015"},{word:"cut",colors:"402"},{word:"cute",colors:"4023"},{word:"da",colors:"42"},{word:"dab",colors:"432"},{word:"dad",colors:"425"},{word:"dado",colors:"4251"},{word:"dais",colors:"4310"},{word:"dale",colors:"5302"},{word:"dam",colors:"423"},{word:"dame",colors:"4530"},{word:"damn",colors:"5234"},{word:"damsel",colors:"523140"},{word:"darb",colors:"4302"},{word:"dare",colors:"5310"},{word:"darn",colors:"5203"},{word:"dart",colors:"4201"},{word:"dash",colors:"4302"},{word:"data",colors:"4213"},{word:"date",colors:"4310"},{word:"dated",colors:"43105"},{word:"daunt",colors:"52031"},{word:"dawn",colors:"5203"},{word:"day",colors:"534"},{word:"dead",colors:"4035"},{word:"deal",colors:"5230"},{word:"dealer",colors:"425130"},{word:"deals",colors:"52301"},{word:"dealt",colors:"54201"},{word:"dean",colors:"5034"},{word:"dear",colors:"5031"},{word:"death",colors:"40312"},{word:"deb",colors:"402"},{word:"debar",colors:"43250"},{word:"debt",colors:"4021"},{word:"debug",colors:"43205"},{word:"debut",colors:"43201"},{word:"deci",colors:"5042"},{word:"decor",colors:"53410"},{word:"deed",colors:"4025"},{word:"deem",colors:"5043"},{word:"deep",colors:"4023"},{word:"deer",colors:"5021"},{word:"deism",colors:"40213"},{word:"deist",colors:"43201"},{word:"deke",colors:"4052"},{word:"delay",colors:"52034"},{word:"dele",colors:"5203"},{word:"dell",colors:"5203"},{word:"delta",colors:"54012"},{word:"demon",colors:"50314"},{word:"den",colors:"503"},{word:"denial",colors:"524130"},{word:"denim",colors:"50423"},{word:"dense",colors:"50312"},{word:"dent",colors:"5031"},{word:"deny",colors:"5234"},{word:"depth",colors:"40312"},{word:"desk",colors:"4205"},{word:"deter",colors:"53140"},{word:"dew",colors:"430"},{word:"dial",colors:"5130"},{word:"diaper",colors:"415320"},{word:"dice",colors:"5240"},{word:"did",colors:"415"},{word:"die",colors:"420"},{word:"diet",colors:"4201"},{word:"dig",colors:"415"},{word:"digs",colors:"4150"},{word:"dike",colors:"4250"},{word:"dill",colors:"5103"},{word:"dilly",colors:"52034"},{word:"dim",colors:"413"},{word:"dime",colors:"4230"},{word:"dimly",colors:"52304"},{word:"din",colors:"513"},{word:"dine",colors:"5230"},{word:"diner",colors:"52401"},{word:"dint",colors:"5231"},{word:"dip",colors:"413"},{word:"dire",colors:"5210"},{word:"dirge",colors:"42053"},{word:"dirt",colors:"4201"},{word:"dirty",colors:"52014"},{word:"disc",colors:"5214"},{word:"dish",colors:"4102"},{word:"disk",colors:"4105"},{word:"do",colors:"41"},{word:"doe",colors:"410"},{word:"doer",colors:"4120"},{word:"does",colors:"4120"},{word:"dog",colors:"415"},{word:"doge",colors:"4150"},{word:"dolce",colors:"51043"},{word:"dole",colors:"5102"},{word:"doll",colors:"5103"},{word:"dolly",colors:"51034"},{word:"dolman",colors:"510324"},{word:"dolt",colors:"4531"},{word:"dome",colors:"4130"},{word:"don",colors:"513"},{word:"done",colors:"5130"},{word:"donna",colors:"51342"},{word:"doom",colors:"4153"},{word:"door",colors:"4150"},{word:"dope",colors:"4130"},{word:"dorm",colors:"4103"},{word:"dory",colors:"5104"},{word:"dose",colors:"4102"},{word:"dost",colors:"4501"},{word:"dot",colors:"451"},{word:"dote",colors:"5120"},{word:"doth",colors:"4512"},{word:"doubt",colors:"45021"},{word:"douse",colors:"45012"},{word:"down",colors:"5103"},{word:"downy",colors:"51034"},{word:"doyen",colors:"51423"},{word:"drab",colors:"4032"},{word:"drag",colors:"4025"},{word:"dram",colors:"4023"},{word:"drama",colors:"40235"},{word:"drape",colors:"40532"},{word:"draw",colors:"5120"},{word:"drawl",colors:"51203"},{word:"drawn",colors:"51204"},{word:"dray",colors:"5034"},{word:"dread",colors:"40235"},{word:"dream",colors:"50423"},{word:"drear",colors:"50231"},{word:"dreary",colors:"502314"},{word:"drew",colors:"5130"},{word:"dried",colors:"40125"},{word:"drier",colors:"50231"},{word:"drip",colors:"4013"},{word:"droit",colors:"40521"},{word:"drone",colors:"50132"},{word:"droop",colors:"40153"},{word:"drop",colors:"4013"},{word:"drum",colors:"5103"},{word:"dry",colors:"504"},{word:"dryer",colors:"50421"},{word:"du",colors:"40"},{word:"dual",colors:"4021"},{word:"dub",colors:"402"},{word:"duc",colors:"504"},{word:"ducal",colors:"50423"},{word:"duce",colors:"5043"},{word:"duct",colors:"5042"},{word:"dud",colors:"405"},{word:"dude",colors:"4052"},{word:"duds",colors:"4051"},{word:"due",colors:"402"},{word:"duel",colors:"4021"},{word:"dues",colors:"4021"},{word:"duet",colors:"4031"},{word:"dug",colors:"405"},{word:"duke",colors:"4052"},{word:"dull",colors:"4013"},{word:"duly",colors:"5034"},{word:"dumb",colors:"4032"},{word:"dun",colors:"503"},{word:"dune",colors:"5032"},{word:"duo",colors:"405"},{word:"dupe",colors:"4032"},{word:"dust",colors:"5012"},{word:"dusty",colors:"50124"},{word:"duty",colors:"5014"},{word:"dwelt",colors:"50432"},{word:"dye",colors:"542"},{word:"dyer",colors:"5420"},{word:"dyne",colors:"5432"},{word:"each",colors:"0342"},{word:"ear",colors:"031"},{word:"earl",colors:"0513"},{word:"early",colors:"23014"},{word:"earn",colors:"0314"},{word:"earth",colors:"03142"},{word:"ease",colors:"0312"},{word:"easel",colors:"25130"},{word:"east",colors:"0351"},{word:"easy",colors:"2304"},{word:"eat",colors:"031"},{word:"eaten",colors:"05423"},{word:"eats",colors:"0315"},{word:"echo",colors:"0421"},{word:"eclat",colors:"04132"},{word:"ecru",colors:"3410"},{word:"edit",colors:"0421"},{word:"eek",colors:"025"},{word:"eel",colors:"230"},{word:"egad",colors:"0534"},{word:"egest",colors:"05412"},{word:"ego",colors:"051"},{word:"egret",colors:"35042"},{word:"eider",colors:"21540"},{word:"el",colors:"20"},{word:"elan",colors:"2034"},{word:"eland",colors:"20345"},{word:"elbow",colors:"43250"},{word:"elder",colors:"03521"},{word:"elide",colors:"20154"},{word:"elk",colors:"205"},{word:"ell",colors:"201"},{word:"elm",colors:"403"},{word:"elope",colors:"20534"},{word:"else",colors:"2013"},{word:"elude",colors:"21043"},{word:"em",colors:"03"},{word:"ember",colors:"03241"},{word:"emir",colors:"0321"},{word:"emit",colors:"0324"},{word:"en",colors:"03"},{word:"end",colors:"035"},{word:"endear",colors:"045231"},{word:"endow",colors:"34510"},{word:"ends",colors:"0351"},{word:"endue",colors:"24503"},{word:"endure",colors:"245013"},{word:"ennui",colors:"23401"},{word:"enow",colors:"3410"},{word:"ensue",colors:"24503"},{word:"eon",colors:"013"},{word:"epee",colors:"0324"},{word:"epic",colors:"0324"},{word:"epoch",colors:"03142"},{word:"epos",colors:"0315"},{word:"era",colors:"013"},{word:"erase",colors:"21503"},{word:"ere",colors:"012"},{word:"erg",colors:"015"},{word:"ergo",colors:"3051"},{word:"ergot",colors:"30512"},{word:"erk",colors:"015"},{word:"erode",colors:"20143"},{word:"err",colors:"201"},{word:"espy",colors:"2134"},{word:"essay",colors:"20134"},{word:"ester",colors:"35140"},{word:"estop",colors:"41253"},{word:"eta",colors:"013"},{word:"etat",colors:"0132"},{word:"ewe",colors:"304"},{word:"ewer",colors:"3041"},{word:"gab",colors:"532"},{word:"gad",colors:"524"},{word:"gain",colors:"5314"},{word:"gainst",colors:"531402"},{word:"gait",colors:"5312"},{word:"gal",colors:"520"},{word:"gala",colors:"5203"},{word:"gale",colors:"5204"},{word:"gall",colors:"5201"},{word:"gaol",colors:"5210"},{word:"gap",colors:"523"},{word:"gape",colors:"5234"},{word:"gar",colors:"520"},{word:"garb",colors:"5302"},{word:"gas",colors:"520"},{word:"gash",colors:"5302"},{word:"gasp",colors:"5213"},{word:"gassy",colors:"53014"},{word:"gat",colors:"532"},{word:"gate",colors:"5320"},{word:"gather",colors:"534201"},{word:"gator",colors:"52410"},{word:"gaud",colors:"5204"},{word:"gaunt",colors:"52034"},{word:"gay",colors:"534"},{word:"gear",colors:"5031"},{word:"gee",colors:"504"},{word:"gelid",colors:"50124"},{word:"gene",colors:"5034"},{word:"gent",colors:"5042"},{word:"get",colors:"502"},{word:"geta",colors:"5023"},{word:"ghee",colors:"5204"},{word:"giant",colors:"51342"},{word:"gibe",colors:"5124"},{word:"gild",colors:"5134"},{word:"gill",colors:"5103"},{word:"gilt",colors:"5104"},{word:"gin",colors:"513"},{word:"gipsy",colors:"52314"},{word:"gird",colors:"5104"},{word:"girdle",colors:"520413"},{word:"girl",colors:"5201"},{word:"girt",colors:"5102"},{word:"gist",colors:"5102"},{word:"git",colors:"512"},{word:"glad",colors:"5124"},{word:"glade",colors:"51340"},{word:"glare",colors:"51204"},{word:"glean",colors:"51034"},{word:"glebe",colors:"50324"},{word:"glee",colors:"5034"},{word:"glen",colors:"5034"},{word:"glib",colors:"5012"},{word:"glide",colors:"51240"},{word:"glider",colors:"512430"},{word:"gloat",colors:"50124"},{word:"glob",colors:"5012"},{word:"globe",colors:"50123"},{word:"glub",colors:"5302"},{word:"glue",colors:"5103"},{word:"glut",colors:"5102"},{word:"gluten",colors:"510234"},{word:"gnarl",colors:"53201"},{word:"gnat",colors:"5432"},{word:"gnu",colors:"530"},{word:"go",colors:"51"},{word:"goad",colors:"5124"},{word:"goal",colors:"5120"},{word:"goat",colors:"5124"},{word:"gob",colors:"512"},{word:"god",colors:"514"},{word:"gold",colors:"5134"},{word:"golly",colors:"51034"},{word:"gone",colors:"5130"},{word:"gonna",colors:"51342"},{word:"gore",colors:"5103"},{word:"gory",colors:"5104"},{word:"gosh",colors:"5102"},{word:"got",colors:"512"},{word:"grab",colors:"5032"},{word:"grad",colors:"5024"},{word:"grant",colors:"50234"},{word:"grape",colors:"50234"},{word:"grate",colors:"51340"},{word:"gray",colors:"5034"},{word:"great",colors:"51034"},{word:"grebe",colors:"51024"},{word:"greet",colors:"50342"},{word:"grid",colors:"5014"},{word:"grin",colors:"5013"},{word:"grip",colors:"5013"},{word:"gripe",colors:"51230"},{word:"grisly",colors:"512034"},{word:"grit",colors:"5012"},{word:"groan",colors:"50123"},{word:"groat",colors:"50124"},{word:"grub",colors:"5102"},{word:"guest",colors:"50312"},{word:"guild",colors:"50134"},{word:"guilt",colors:"50132"},{word:"gull",colors:"5013"},{word:"gully",colors:"50134"},{word:"gun",colors:"503"},{word:"gust",colors:"5012"},{word:"gusty",colors:"50124"},{word:"gut",colors:"502"},{word:"guts",colors:"5021"},{word:"guy",colors:"504"},{word:"gyp",colors:"543"},{word:"gyro",colors:"5401"},{word:"had",colors:"234"},{word:"hadst",colors:"23401"},{word:"hag",colors:"235"},{word:"hail",colors:"2310"},{word:"hale",colors:"2503"},{word:"hall",colors:"2301"},{word:"halo",colors:"2305"},{word:"halt",colors:"2301"},{word:"ham",colors:"253"},{word:"hame",colors:"2530"},{word:"haply",colors:"25304"},{word:"hard",colors:"2315"},{word:"hardy",colors:"23154"},{word:"hare",colors:"2310"},{word:"harem",colors:"25103"},{word:"harm",colors:"2513"},{word:"harp",colors:"2513"},{word:"harpy",colors:"25134"},{word:"hart",colors:"2314"},{word:"has",colors:"230"},{word:"hast",colors:"2301"},{word:"haste",colors:"23510"},{word:"hasty",colors:"23014"},{word:"hat",colors:"231"},{word:"hate",colors:"2310"},{word:"hater",colors:"23401"},{word:"haw",colors:"230"},{word:"hay",colors:"234"},{word:"he",colors:"20"},{word:"head",colors:"2034"},{word:"heads",colors:"23540"},{word:"heal",colors:"2350"},{word:"heap",colors:"2053"},{word:"hear",colors:"2031"},{word:"heard",colors:"20315"},{word:"heart",colors:"20314"},{word:"heat",colors:"2031"},{word:"heel",colors:"2340"},{word:"held",colors:"2305"},{word:"hell",colors:"2301"},{word:"hello",colors:"24015"},{word:"helm",colors:"2403"},{word:"helot",colors:"24051"},{word:"help",colors:"2403"},{word:"hem",colors:"203"},{word:"hen",colors:"203"},{word:"hep",colors:"203"},{word:"her",colors:"201"},{word:"herd",colors:"2015"},{word:"here",colors:"2014"},{word:"hero",colors:"2415"},{word:"hers",colors:"2310"},{word:"hew",colors:"230"},{word:"hewn",colors:"2403"},{word:"hewto",colors:"23041"},{word:"hi",colors:"21"},{word:"hid",colors:"214"},{word:"hide",colors:"2154"},{word:"hie",colors:"214"},{word:"hilt",colors:"2104"},{word:"him",colors:"213"},{word:"hind",colors:"2135"},{word:"hinge",colors:"21354"},{word:"hint",colors:"2134"},{word:"hip",colors:"213"},{word:"his",colors:"210"},{word:"hiss",colors:"2105"},{word:"hist",colors:"2154"},{word:"hit",colors:"214"},{word:"ho",colors:"21"},{word:"hoar",colors:"2531"},{word:"hod",colors:"214"},{word:"hoe",colors:"210"},{word:"hog",colors:"215"},{word:"hold",colors:"2105"},{word:"hole",colors:"2103"},{word:"holla",colors:"25013"},{word:"holm",colors:"2103"},{word:"holy",colors:"2104"},{word:"home",colors:"2130"},{word:"homer",colors:"25341"},{word:"homo",colors:"2135"},{word:"hone",colors:"2130"},{word:"honest",colors:"253401"},{word:"hood",colors:"2154"},{word:"hoop",colors:"2153"},{word:"hoot",colors:"2154"},{word:"hop",colors:"213"},{word:"hope",colors:"2130"},{word:"hops",colors:"2135"},{word:"horse",colors:"25104"},{word:"hose",colors:"2150"},{word:"host",colors:"2501"},{word:"hot",colors:"251"},{word:"hotel",colors:"25140"},{word:"hour",colors:"2501"},{word:"how",colors:"210"},{word:"howdy",colors:"21054"},{word:"howl",colors:"2501"},{word:"hue",colors:"203"},{word:"hug",colors:"205"},{word:"huge",colors:"2053"},{word:"hum",colors:"203"},{word:"humid",colors:"20314"},{word:"humor",colors:"20351"},{word:"hung",colors:"2035"},{word:"hunt",colors:"2031"},{word:"hurt",colors:"2014"},{word:"hut",colors:"201"},{word:"hydra",colors:"24513"},{word:"hypo",colors:"2431"},{word:"ibs",colors:"125"},{word:"ice",colors:"240"},{word:"iced",colors:"2405"},{word:"icon",colors:"2453"},{word:"id",colors:"14"},{word:"idea",colors:"1423"},{word:"ideal",colors:"15230"},{word:"idem",colors:"2403"},{word:"ides",colors:"2401"},{word:"idle",colors:"1502"},{word:"idler",colors:"25301"},{word:"idly",colors:"2504"},{word:"idol",colors:"2451"},{word:"idyll",colors:"25403"},{word:"ignis",colors:"15320"},{word:"ilk",colors:"105"},{word:"ill",colors:"103"},{word:"in",colors:"13"},{word:"inane",colors:"13542"},{word:"inapt",colors:"14532"},{word:"inch",colors:"1342"},{word:"indent",colors:"235041"},{word:"inept",colors:"24031"},{word:"inert",colors:"13204"},{word:"ingest",colors:"235014"},{word:"ink",colors:"135"},{word:"inky",colors:"2354"},{word:"inle",colors:"1402"},{word:"inlet",colors:"24031"},{word:"inly",colors:"2314"},{word:"inn",colors:"134"},{word:"input",colors:"14302"},{word:"insane",colors:"130542"},{word:"inset",colors:"24501"},{word:"instep",colors:"245103"},{word:"intend",colors:"231045"},{word:"inter",colors:"13420"},{word:"into",colors:"2315"},{word:"io",colors:"25"},{word:"ion",colors:"253"},{word:"ipse",colors:"2310"},{word:"irate",colors:"10342"},{word:"ire",colors:"210"},{word:"iris",colors:"1025"},{word:"irk",colors:"215"},{word:"iron",colors:"2053"},{word:"irons",colors:"21540"},{word:"is",colors:"10"},{word:"isle",colors:"2103"},{word:"islet",colors:"21034"},{word:"ism",colors:"103"},{word:"it",colors:"21"},{word:"item",colors:"2403"},{word:"its",colors:"210"},{word:"kadi",colors:"5341"},{word:"kale",colors:"5302"},{word:"kaput",colors:"52301"},{word:"keel",colors:"5230"},{word:"keen",colors:"5023"},{word:"keep",colors:"5023"},{word:"keeper",colors:"502341"},{word:"kelp",colors:"5203"},{word:"ken",colors:"503"},{word:"keno",colors:"5031"},{word:"kepi",colors:"5032"},{word:"kept",colors:"5031"},{word:"key",colors:"524"},{word:"keys",colors:"5240"},{word:"kid",colors:"514"},{word:"kids",colors:"5140"},{word:"kill",colors:"5201"},{word:"kiln",colors:"5213"},{word:"kilt",colors:"5201"},{word:"kin",colors:"513"},{word:"kine",colors:"5230"},{word:"kismet",colors:"510342"},{word:"kit",colors:"521"},{word:"kite",colors:"5210"},{word:"kitten",colors:"521403"},{word:"kiwi",colors:"5102"},{word:"knee",colors:"5302"},{word:"kneel",colors:"53021"},{word:"knew",colors:"5340"},{word:"knit",colors:"5321"},{word:"knob",colors:"5312"},{word:"knot",colors:"5314"},{word:"know",colors:"5310"},{word:"kola",colors:"5102"},{word:"kraut",colors:"51204"},{word:"la",colors:"02"},{word:"lab",colors:"032"},{word:"lace",colors:"0543"},{word:"lack",colors:"0245"},{word:"lad",colors:"025"},{word:"laden",colors:"03524"},{word:"ladies",colors:"354120"},{word:"ladle",colors:"02534"},{word:"lady",colors:"0354"},{word:"lag",colors:"025"},{word:"lager",colors:"12540"},{word:"laid",colors:"0315"},{word:"lain",colors:"0314"},{word:"lake",colors:"0352"},{word:"lam",colors:"023"},{word:"lama",colors:"0235"},{word:"lamb",colors:"0532"},{word:"lame",colors:"0234"},{word:"lament",colors:"153042"},{word:"lance",colors:"15340"},{word:"land",colors:"0245"},{word:"lane",colors:"0342"},{word:"lank",colors:"1235"},{word:"lap",colors:"023"},{word:"lapin",colors:"05314"},{word:"lapse",colors:"05312"},{word:"lard",colors:"1204"},{word:"lares",colors:"13025"},{word:"large",colors:"12054"},{word:"laser",colors:"13520"},{word:"lash",colors:"1352"},{word:"lass",colors:"3205"},{word:"lasso",colors:"32051"},{word:"last",colors:"0214"},{word:"late",colors:"0214"},{word:"later",colors:"35401"},{word:"lath",colors:"0312"},{word:"lathe",colors:"05123"},{word:"laud",colors:"1204"},{word:"law",colors:"120"},{word:"lawn",colors:"1203"},{word:"lay",colors:"034"},{word:"layer",colors:"13420"},{word:"lea",colors:"023"},{word:"leach",colors:"03542"},{word:"lead",colors:"0235"},{word:"leader",colors:"125430"},{word:"leak",colors:"0235"},{word:"leaked",colors:"103524"},{word:"leaky",colors:"02354"},{word:"leal",colors:"0231"},{word:"lean",colors:"0234"},{word:"leap",colors:"0253"},{word:"leapt",colors:"04231"},{word:"learn",colors:"12503"},{word:"leash",colors:"10352"},{word:"least",colors:"02314"},{word:"led",colors:"025"},{word:"lee",colors:"023"},{word:"leek",colors:"0235"},{word:"leer",colors:"3021"},{word:"lees",colors:"0231"},{word:"leg",colors:"035"},{word:"legal",colors:"04521"},{word:"legs",colors:"0351"},{word:"lei",colors:"021"},{word:"lend",colors:"0245"},{word:"lens",colors:"1045"},{word:"lent",colors:"0341"},{word:"less",colors:"3205"},{word:"lest",colors:"0214"},{word:"let",colors:"031"},{word:"lewd",colors:"1304"},{word:"libel",colors:"01243"},{word:"lice",colors:"0243"},{word:"lick",colors:"0145"},{word:"lid",colors:"015"},{word:"lie",colors:"012"},{word:"lien",colors:"0124"},{word:"lies",colors:"0231"},{word:"lieu",colors:"3120"},{word:"light",colors:"01524"},{word:"like",colors:"0152"},{word:"liken",colors:"12503"},{word:"lilac",colors:"01354"},{word:"lilt",colors:"0231"},{word:"lily",colors:"0214"},{word:"lima",colors:"0135"},{word:"limb",colors:"0132"},{word:"lime",colors:"0134"},{word:"limit",colors:"01324"},{word:"limn",colors:"0134"},{word:"line",colors:"0142"},{word:"linen",colors:"12304"},{word:"lines",colors:"12405"},{word:"link",colors:"1235"},{word:"lint",colors:"0241"},{word:"lion",colors:"0254"},{word:"lip",colors:"013"},{word:"lips",colors:"0231"},{word:"lisle",colors:"12530"},{word:"lisp",colors:"0213"},{word:"list",colors:"0214"},{word:"lists",colors:"32015"},{word:"lit",colors:"021"},{word:"liter",colors:"32401"},{word:"llama",colors:"01235"},{word:"load",colors:"0125"},{word:"loam",colors:"0123"},{word:"loan",colors:"0124"},{word:"loath",colors:"05312"},{word:"lob",colors:"012"},{word:"lobe",colors:"0123"},{word:"local",colors:"05431"},{word:"loch",colors:"0142"},{word:"lock",colors:"0145"},{word:"loco",colors:"0145"},{word:"lode",colors:"0152"},{word:"lodge",colors:"31450"},{word:"loess",colors:"31205"},{word:"log",colors:"015"},{word:"loge",colors:"0153"},{word:"logy",colors:"0154"},{word:"loin",colors:"0524"},{word:"loll",colors:"0513"},{word:"lone",colors:"0142"},{word:"loner",colors:"15320"},{word:"long",colors:"0145"},{word:"loo",colors:"015"},{word:"loom",colors:"0153"},{word:"loon",colors:"0154"},{word:"loop",colors:"0153"},{word:"loose",colors:"31502"},{word:"loot",colors:"0154"},{word:"lop",colors:"013"},{word:"lope",colors:"0132"},{word:"lord",colors:"1504"},{word:"lore",colors:"1502"},{word:"lorn",colors:"1503"},{word:"lose",colors:"0512"},{word:"loser",colors:"35021"},{word:"loss",colors:"3105"},{word:"lost",colors:"0514"},{word:"lot",colors:"051"},{word:"lotto",colors:"31245"},{word:"loud",colors:"1504"},{word:"lout",colors:"3501"},{word:"low",colors:"150"},{word:"lower",colors:"35041"},{word:"lucid",colors:"30415"},{word:"luck",colors:"1045"},{word:"lug",colors:"105"},{word:"lunch",colors:"10342"},{word:"lung",colors:"1035"},{word:"lunge",colors:"10453"},{word:"lunk",colors:"1035"},{word:"lure",colors:"3012"},{word:"lush",colors:"1052"},{word:"lust",colors:"3051"},{word:"lusty",colors:"30514"},{word:"lute",colors:"1023"},{word:"lye",colors:"042"},{word:"lying",colors:"14235"},{word:"lyre",colors:"1402"},{word:"ma",colors:"32"},{word:"mad",colors:"324"},{word:"made",colors:"3540"},{word:"madre",colors:"32504"},{word:"maid",colors:"3514"},{word:"mail",colors:"3510"},{word:"main",colors:"3514"},{word:"make",colors:"3254"},{word:"maker",colors:"32541"},{word:"makes",colors:"32540"},{word:"mal",colors:"320"},{word:"male",colors:"3204"},{word:"malt",colors:"3204"},{word:"man",colors:"324"},{word:"mane",colors:"3540"},{word:"mantel",colors:"354201"},{word:"mantis",colors:"354210"},{word:"mantle",colors:"354210"},{word:"mar",colors:"320"},{word:"mare",colors:"3510"},{word:"mark",colors:"3215"},{word:"marl",colors:"3201"},{word:"marry",colors:"35014"},{word:"marsh",colors:"35102"},{word:"marshy",colors:"351024"},{word:"mart",colors:"3502"},{word:"maser",colors:"32540"},{word:"mash",colors:"3502"},{word:"mask",colors:"3205"},{word:"mason",colors:"32014"},{word:"mass",colors:"3201"},{word:"massy",colors:"35014"},{word:"mast",colors:"3502"},{word:"mat",colors:"352"},{word:"mate",colors:"3520"},{word:"mater",colors:"35401"},{word:"math",colors:"3542"},{word:"matin",colors:"35214"},{word:"matins",colors:"352140"},{word:"mats",colors:"3520"},{word:"matte",colors:"35240"},{word:"maul",colors:"3201"},{word:"may",colors:"354"},{word:"mayst",colors:"35402"},{word:"me",colors:"30"},{word:"mead",colors:"3054"},{word:"meal",colors:"3420"},{word:"mean",colors:"3054"},{word:"meant",colors:"30542"},{word:"meat",colors:"3052"},{word:"medal",colors:"34520"},{word:"meed",colors:"3045"},{word:"meek",colors:"3045"},{word:"meet",colors:"3042"},{word:"melt",colors:"3012"},{word:"men",colors:"304"},{word:"mend",colors:"3045"},{word:"meno",colors:"3041"},{word:"mental",colors:"304251"},{word:"mere",colors:"3014"},{word:"merit",colors:"30124"},{word:"mesa",colors:"3015"},{word:"mesh",colors:"3052"},{word:"meson",colors:"30514"},{word:"mess",colors:"3015"},{word:"met",colors:"302"},{word:"metal",colors:"30251"},{word:"mete",colors:"3024"},{word:"metro",colors:"34205"},{word:"mi",colors:"31"},{word:"mid",colors:"314"},{word:"midi",colors:"3142"},{word:"mien",colors:"3204"},{word:"mike",colors:"3250"},{word:"mil",colors:"310"},{word:"mild",colors:"3105"},{word:"mile",colors:"3104"},{word:"milk",colors:"3105"},{word:"milky",colors:"32054"},{word:"mill",colors:"3201"},{word:"milo",colors:"3205"},{word:"milord",colors:"321504"},{word:"mind",colors:"3145"},{word:"mine",colors:"3240"},{word:"miner",colors:"32401"},{word:"minor",colors:"32451"},{word:"mint",colors:"3142"},{word:"minus",colors:"31405"},{word:"mire",colors:"3210"},{word:"miser",colors:"31540"},{word:"miss",colors:"3105"},{word:"mist",colors:"3102"},{word:"mite",colors:"3240"},{word:"miter",colors:"32401"},{word:"mitre",colors:"32410"},{word:"mitt",colors:"3124"},{word:"moan",colors:"3124"},{word:"moat",colors:"3124"},{word:"mob",colors:"312"},{word:"mod",colors:"314"},{word:"modal",colors:"31520"},{word:"mode",colors:"3140"},{word:"modus",colors:"35401"},{word:"moil",colors:"3520"},{word:"moist",colors:"35214"},{word:"mold",colors:"3105"},{word:"moldy",colors:"31054"},{word:"mole",colors:"3504"},{word:"moll",colors:"3501"},{word:"molt",colors:"3104"},{word:"molto",colors:"31045"},{word:"monad",colors:"31425"},{word:"monde",colors:"31450"},{word:"moo",colors:"315"},{word:"mood",colors:"3154"},{word:"moon",colors:"3154"},{word:"moor",colors:"3150"},{word:"moot",colors:"3152"},{word:"more",colors:"3504"},{word:"morel",colors:"35041"},{word:"mores",colors:"35140"},{word:"morn",colors:"3514"},{word:"moss",colors:"3501"},{word:"mossy",colors:"31054"},{word:"most",colors:"3102"},{word:"mot",colors:"312"},{word:"mote",colors:"3120"},{word:"motel",colors:"35241"},{word:"motet",colors:"31204"},{word:"moth",colors:"3142"},{word:"motor",colors:"31250"},{word:"motto",colors:"31245"},{word:"mould",colors:"35014"},{word:"moult",colors:"35012"},{word:"mount",colors:"35042"},{word:"mourn",colors:"35014"},{word:"mouth",colors:"35042"},{word:"mu",colors:"30"},{word:"mud",colors:"304"},{word:"muon",colors:"3054"},{word:"murk",colors:"3015"},{word:"murky",colors:"30154"},{word:"mush",colors:"3052"},{word:"mushy",colors:"30524"},{word:"muss",colors:"3015"},{word:"must",colors:"3012"},{word:"musty",colors:"30124"},{word:"mutt",colors:"3024"},{word:"muy",colors:"304"},{word:"my",colors:"34"},{word:"nab",colors:"352"},{word:"nag",colors:"325"},{word:"nail",colors:"4310"},{word:"name",colors:"4530"},{word:"nap",colors:"423"},{word:"nape",colors:"4530"},{word:"nary",colors:"3504"},{word:"nasal",colors:"42531"},{word:"nasty",colors:"35014"},{word:"natal",colors:"42130"},{word:"nay",colors:"354"},{word:"neap",colors:"4053"},{word:"near",colors:"4031"},{word:"nearly",colors:"325014"},{word:"neat",colors:"3051"},{word:"neath",colors:"30512"},{word:"neb",colors:"302"},{word:"neck",colors:"3045"},{word:"nee",colors:"302"},{word:"need",colors:"3025"},{word:"needs",colors:"30251"},{word:"neigh",colors:"34152"},{word:"nein",colors:"3024"},{word:"nemo",colors:"4031"},{word:"nerd",colors:"4015"},{word:"nesia",colors:"32015"},{word:"nest",colors:"4051"},{word:"net",colors:"301"},{word:"new",colors:"340"},{word:"news",colors:"3401"},{word:"newt",colors:"4302"},{word:"nib",colors:"312"},{word:"nice",colors:"3240"},{word:"nick",colors:"3145"},{word:"nickel",colors:"324501"},{word:"nigh",colors:"3152"},{word:"night",colors:"31524"},{word:"nil",colors:"410"},{word:"nimbus",colors:"413205"},{word:"nine",colors:"3240"},{word:"nip",colors:"413"},{word:"nit",colors:"321"},{word:"niter",colors:"31420"},{word:"no",colors:"31"},{word:"nob",colors:"312"},{word:"noble",colors:"41203"},{word:"nod",colors:"315"},{word:"node",colors:"3150"},{word:"noel",colors:"4120"},{word:"noes",colors:"4105"},{word:"nog",colors:"315"},{word:"nohow",colors:"31250"},{word:"noir",colors:"3520"},{word:"nom",colors:"413"},{word:"nomad",colors:"41325"},{word:"non",colors:"314"},{word:"none",colors:"3140"},{word:"noon",colors:"3154"},{word:"noose",colors:"31502"},{word:"nope",colors:"4130"},{word:"nor",colors:"310"},{word:"norm",colors:"4513"},{word:"nose",colors:"4150"},{word:"nosy",colors:"3104"},{word:"not",colors:"351"},{word:"note",colors:"4120"},{word:"noted",colors:"41205"},{word:"noun",colors:"3504"},{word:"now",colors:"310"},{word:"nth",colors:"312"},{word:"nu",colors:"30"},{word:"nude",colors:"3052"},{word:"numb",colors:"4032"},{word:"nun",colors:"304"},{word:"nut",colors:"301"},{word:"nuts",colors:"4015"},{word:"oak",colors:"125"},{word:"oar",colors:"120"},{word:"oases",colors:"53021"},{word:"oater",colors:"53420"},{word:"oath",colors:"5312"},{word:"oats",colors:"5310"},{word:"odd",colors:"145"},{word:"ode",colors:"140"},{word:"odor",colors:"1450"},{word:"ogle",colors:"1503"},{word:"ogre",colors:"1503"},{word:"ohm",colors:"123"},{word:"oil",colors:"520"},{word:"old",colors:"105"},{word:"olden",colors:"10524"},{word:"ole",colors:"102"},{word:"oleo",colors:"1025"},{word:"omen",colors:"1304"},{word:"omit",colors:"5324"},{word:"omnis",colors:"53420"},{word:"on",colors:"13"},{word:"once",colors:"1340"},{word:"one",colors:"130"},{word:"ones",colors:"1405"},{word:"onset",colors:"53041"},{word:"onto",colors:"1425"},{word:"onus",colors:"5301"},{word:"oodles",colors:"154320"},{word:"opal",colors:"1320"},{word:"ope",colors:"130"},{word:"open",colors:"1304"},{word:"opt",colors:"531"},{word:"opus",colors:"5301"},{word:"or",colors:"10"},{word:"oral",colors:"5031"},{word:"orb",colors:"102"},{word:"ordeal",colors:"504231"},{word:"ore",colors:"102"},{word:"organ",colors:"10523"},{word:"orgy",colors:"1054"},{word:"os",colors:"10"},{word:"osprey",colors:"153024"},{word:"otter",colors:"51240"},{word:"ouch",colors:"5042"},{word:"our",colors:"501"},{word:"oust",colors:"5012"},{word:"out",colors:"501"},{word:"outer",colors:"50421"},{word:"outs",colors:"5021"},{word:"owe",colors:"103"},{word:"owl",colors:"501"},{word:"owlet",colors:"50142"},{word:"own",colors:"103"},{word:"pace",colors:"3540"},{word:"pacer",colors:"35401"},{word:"pack",colors:"3245"},{word:"pact",colors:"3542"},{word:"pad",colors:"324"},{word:"padre",colors:"35402"},{word:"page",colors:"3254"},{word:"paid",colors:"3514"},{word:"pail",colors:"3510"},{word:"pain",colors:"3514"},{word:"paint",colors:"35142"},{word:"pair",colors:"3510"},{word:"pal",colors:"320"},{word:"pale",colors:"3502"},{word:"palsy",colors:"35014"},{word:"pan",colors:"324"},{word:"pane",colors:"3540"},{word:"panel",colors:"35420"},{word:"pang",colors:"3245"},{word:"pant",colors:"3241"},{word:"pants",colors:"32415"},{word:"par",colors:"320"},{word:"parch",colors:"35142"},{word:"pard",colors:"3204"},{word:"pare",colors:"3510"},{word:"park",colors:"3215"},{word:"parry",colors:"35014"},{word:"parse",colors:"32054"},{word:"part",colors:"3201"},{word:"parts",colors:"32015"},{word:"party",colors:"35014"},{word:"pass",colors:"3215"},{word:"passe",colors:"32154"},{word:"past",colors:"3251"},{word:"paste",colors:"35120"},{word:"pasty",colors:"35124"},{word:"pat",colors:"321"},{word:"pate",colors:"3510"},{word:"paten",colors:"35104"},{word:"patent",colors:"351042"},{word:"pater",colors:"32140"},{word:"path",colors:"3512"},{word:"patsy",colors:"35214"},{word:"patten",colors:"351204"},{word:"patty",colors:"35124"},{word:"paw",colors:"320"},{word:"pawn",colors:"3204"},{word:"pay",colors:"354"},{word:"payer",colors:"35420"},{word:"pays",colors:"3541"},{word:"pea",colors:"305"},{word:"peach",colors:"30542"},{word:"peak",colors:"3425"},{word:"peal",colors:"3250"},{word:"pear",colors:"3051"},{word:"peas",colors:"3051"},{word:"pease",colors:"30512"},{word:"peat",colors:"3051"},{word:"peck",colors:"3045"},{word:"peek",colors:"3025"},{word:"peel",colors:"3240"},{word:"peer",colors:"3021"},{word:"peg",colors:"305"},{word:"pekoe",colors:"30512"},{word:"pelt",colors:"3401"},{word:"pen",colors:"304"},{word:"penal",colors:"32450"},{word:"penis",colors:"30425"},{word:"pent",colors:"3041"},{word:"peon",colors:"3014"},{word:"per",colors:"301"},{word:"perch",colors:"30142"},{word:"pere",colors:"3012"},{word:"perk",colors:"3015"},{word:"perky",colors:"32154"},{word:"pert",colors:"3401"},{word:"peso",colors:"3051"},{word:"pest",colors:"3051"},{word:"pet",colors:"301"},{word:"pew",colors:"340"},{word:"phi",colors:"321"},{word:"phial",colors:"32150"},{word:"pi",colors:"31"},{word:"pica",colors:"3145"},{word:"pick",colors:"3145"},{word:"picker",colors:"324501"},{word:"pico",colors:"3245"},{word:"pie",colors:"320"},{word:"pied",colors:"3204"},{word:"pier",colors:"3201"},{word:"pig",colors:"315"},{word:"pignut",colors:"315402"},{word:"pike",colors:"3250"},{word:"piker",colors:"32501"},{word:"pile",colors:"3102"},{word:"piling",colors:"310245"},{word:"pilot",colors:"32051"},{word:"pin",colors:"314"},{word:"pine",colors:"3240"},{word:"pineal",colors:"314250"},{word:"ping",colors:"3145"},{word:"pint",colors:"3241"},{word:"pinto",colors:"32415"},{word:"pion",colors:"3254"},{word:"pisces",colors:"321405"},{word:"pit",colors:"321"},{word:"pity",colors:"3214"},{word:"plain",colors:"30514"},{word:"plan",colors:"3024"},{word:"plane",colors:"30542"},{word:"plant",colors:"30241"},{word:"plat",colors:"3021"},{word:"plate",colors:"30214"},{word:"play",colors:"3054"},{word:"plea",colors:"3025"},{word:"pleat",colors:"30421"},{word:"plot",colors:"3051"},{word:"ploy",colors:"3014"},{word:"ply",colors:"304"},{word:"pock",colors:"3145"},{word:"pocket",colors:"314502"},{word:"poco",colors:"3145"},{word:"pod",colors:"314"},{word:"poesy",colors:"31254"},{word:"poet",colors:"3102"},{word:"poi",colors:"352"},{word:"point",colors:"35241"},{word:"poke",colors:"3150"},{word:"pokey",colors:"31524"},{word:"poky",colors:"3154"},{word:"pole",colors:"3102"},{word:"poles",colors:"35021"},{word:"polka",colors:"31052"},{word:"polo",colors:"3105"},{word:"pols",colors:"3501"},{word:"pone",colors:"3140"},{word:"ponte",colors:"31420"},{word:"pooch",colors:"31542"},{word:"pooh",colors:"3152"},{word:"pool",colors:"3150"},{word:"poor",colors:"3150"},{word:"porch",colors:"35142"},{word:"pore",colors:"3102"},{word:"porgy",colors:"31054"},{word:"port",colors:"3501"},{word:"pose",colors:"3150"},{word:"poser",colors:"31520"},{word:"posh",colors:"3152"},{word:"post",colors:"3512"},{word:"posy",colors:"3154"},{word:"pot",colors:"351"},{word:"potter",colors:"351240"},{word:"pouch",colors:"35042"},{word:"pour",colors:"3501"},{word:"pout",colors:"3501"},{word:"power",colors:"35041"},{word:"prate",colors:"30214"},{word:"prawn",colors:"31204"},{word:"pray",colors:"3054"},{word:"prayer",colors:"305421"},{word:"preach",colors:"310542"},{word:"preen",colors:"31024"},{word:"prey",colors:"3024"},{word:"price",colors:"31240"},{word:"prick",colors:"31245"},{word:"pride",colors:"30142"},{word:"prig",colors:"3015"},{word:"prior",colors:"30251"},{word:"pro",colors:"301"},{word:"prod",colors:"3014"},{word:"prone",colors:"31542"},{word:"prose",colors:"30152"},{word:"prosy",colors:"30154"},{word:"prow",colors:"3150"},{word:"prune",colors:"31042"},{word:"pry",colors:"304"},{word:"psi",colors:"351"},{word:"puck",colors:"3045"},{word:"pug",colors:"305"},{word:"puke",colors:"3052"},{word:"pun",colors:"304"},{word:"punt",colors:"3041"},{word:"pure",colors:"3012"},{word:"pus",colors:"301"},{word:"push",colors:"3052"},{word:"pushy",colors:"30524"},{word:"puss",colors:"3015"},{word:"pussy",colors:"30154"},{word:"put",colors:"301"},{word:"putt",colors:"3012"},{word:"putty",colors:"30124"},{word:"pyre",colors:"3402"},{word:"rabid",colors:"03214"},{word:"race",colors:"1340"},{word:"racer",colors:"05431"},{word:"rack",colors:"1245"},{word:"radar",colors:"02531"},{word:"rag",colors:"025"},{word:"rage",colors:"1350"},{word:"rags",colors:"1250"},{word:"raid",colors:"0314"},{word:"rain",colors:"0513"},{word:"raise",colors:"03152"},{word:"rake",colors:"1350"},{word:"rale",colors:"1530"},{word:"ram",colors:"023"},{word:"ran",colors:"023"},{word:"rang",colors:"0235"},{word:"range",colors:"13450"},{word:"rant",colors:"0231"},{word:"rap",colors:"023"},{word:"rape",colors:"1530"},{word:"rapid",colors:"05314"},{word:"rapt",colors:"0231"},{word:"rare",colors:"0312"},{word:"rascal",colors:"025431"},{word:"rash",colors:"1302"},{word:"rasp",colors:"0253"},{word:"rat",colors:"021"},{word:"rate",colors:"1340"},{word:"rattan",colors:"021453"},{word:"ratty",colors:"03124"},{word:"raw",colors:"120"},{word:"ray",colors:"034"},{word:"re",colors:"10"},{word:"reach",colors:"10342"},{word:"react",colors:"03542"},{word:"read",colors:"1035"},{word:"ready",colors:"02354"},{word:"real",colors:"1053"},{word:"realm",colors:"04213"},{word:"ream",colors:"1053"},{word:"reams",colors:"04235"},{word:"reap",colors:"1053"},{word:"rear",colors:"0231"},{word:"rearm",colors:"04213"},{word:"reason",colors:"123054"},{word:"rebel",colors:"10243"},{word:"recap",colors:"10453"},{word:"red",colors:"105"},{word:"reed",colors:"1025"},{word:"reek",colors:"1025"},{word:"reel",colors:"1023"},{word:"regal",colors:"04521"},{word:"reign",colors:"10254"},{word:"rein",colors:"1024"},{word:"relate",colors:"103542"},{word:"relay",colors:"02134"},{word:"relic",colors:"10324"},{word:"reload",colors:"021534"},{word:"rely",colors:"0214"},{word:"remind",colors:"103245"},{word:"remit",colors:"10324"},{word:"renal",colors:"02351"},{word:"rend",colors:"1045"},{word:"rent",colors:"0431"},{word:"repaid",colors:"023514"},{word:"repast",colors:"043251"},{word:"repay",colors:"02354"},{word:"reset",colors:"03541"},{word:"resign",colors:"130254"},{word:"resin",colors:"13024"},{word:"rest",colors:"0351"},{word:"ret",colors:"104"},{word:"retain",colors:"024513"},{word:"retake",colors:"104352"},{word:"retina",colors:"024135"},{word:"retro",colors:"02415"},{word:"rhea",colors:"1203"},{word:"rho",colors:"125"},{word:"rib",colors:"012"},{word:"rice",colors:"1240"},{word:"rick",colors:"1245"},{word:"rid",colors:"014"},{word:"ride",colors:"1250"},{word:"rider",colors:"02531"},{word:"ridge",colors:"02453"},{word:"rig",colors:"015"},{word:"rigid",colors:"01524"},{word:"rile",colors:"1230"},{word:"rim",colors:"013"},{word:"rime",colors:"1230"},{word:"rind",colors:"0135"},{word:"ring",colors:"0135"},{word:"rings",colors:"12450"},{word:"rinse",colors:"12403"},{word:"rio",colors:"025"},{word:"riot",colors:"0251"},{word:"rip",colors:"013"},{word:"ripe",colors:"1230"},{word:"ripen",colors:"12304"},{word:"rise",colors:"0152"},{word:"risen",colors:"12034"},{word:"risk",colors:"1205"},{word:"risky",colors:"12054"},{word:"rite",colors:"1240"},{word:"roach",colors:"15342"},{word:"road",colors:"0124"},{word:"roam",colors:"0123"},{word:"roan",colors:"0123"},{word:"roar",colors:"0531"},{word:"roast",colors:"01254"},{word:"rob",colors:"012"},{word:"robe",colors:"0123"},{word:"rod",colors:"014"},{word:"rode",colors:"0142"},{word:"rodeo",colors:"01425"},{word:"roe",colors:"012"},{word:"role",colors:"0512"},{word:"rood",colors:"0154"},{word:"room",colors:"0153"},{word:"root",colors:"0152"},{word:"rope",colors:"0132"},{word:"rose",colors:"0152"},{word:"rosin",colors:"15024"},{word:"rosy",colors:"0154"},{word:"rot",colors:"051"},{word:"rote",colors:"0514"},{word:"roue",colors:"1502"},{word:"rout",colors:"1504"},{word:"route",colors:"15042"},{word:"row",colors:"150"},{word:"rowel",colors:"15043"},{word:"rub",colors:"102"},{word:"rube",colors:"1023"},{word:"ruby",colors:"1024"},{word:"ruck",colors:"1045"},{word:"rude",colors:"1052"},{word:"rue",colors:"102"},{word:"rug",colors:"105"},{word:"rule",colors:"1032"},{word:"rum",colors:"103"},{word:"run",colors:"104"},{word:"rune",colors:"1042"},{word:"rung",colors:"1045"},{word:"rut",colors:"104"},{word:"rye",colors:"042"},{word:"sable",colors:"15203"},{word:"sac",colors:"024"},{word:"sack",colors:"0245"},{word:"sad",colors:"024"},{word:"sag",colors:"025"},{word:"saga",colors:"0253"},{word:"sage",colors:"1350"},{word:"sago",colors:"0251"},{word:"said",colors:"0314"},{word:"sail",colors:"0513"},{word:"saint",colors:"03142"},{word:"saith",colors:"53142"},{word:"sake",colors:"0352"},{word:"salad",colors:"12035"},{word:"sale",colors:"1302"},{word:"salt",colors:"1204"},{word:"salts",colors:"02315"},{word:"salty",colors:"05314"},{word:"same",colors:"1530"},{word:"sand",colors:"1235"},{word:"sane",colors:"1530"},{word:"sang",colors:"0235"},{word:"sank",colors:"0235"},{word:"sans",colors:"0231"},{word:"sap",colors:"123"},{word:"saran",colors:"02134"},{word:"sari",colors:"5301"},{word:"sash",colors:"0352"},{word:"sass",colors:"0215"},{word:"sassy",colors:"03154"},{word:"sat",colors:"021"},{word:"sate",colors:"5310"},{word:"sated",colors:"13205"},{word:"sateen",colors:"154023"},{word:"satin",colors:"03214"},{word:"satire",colors:"534102"},{word:"satyr",colors:"53140"},{word:"saw",colors:"120"},{word:"sawn",colors:"1203"},{word:"say",colors:"034"},{word:"scab",colors:"1432"},{word:"scald",colors:"14205"},{word:"scale",colors:"14503"},{word:"scalp",colors:"14203"},{word:"scan",colors:"0423"},{word:"scar",colors:"5420"},{word:"scare",colors:"04513"},{word:"scarp",colors:"54203"},{word:"scat",colors:"0432"},{word:"scion",colors:"04253"},{word:"scoot",colors:"04152"},{word:"scope",colors:"54130"},{word:"score",colors:"54103"},{word:"scot",colors:"0412"},{word:"scout",colors:"14502"},{word:"scrap",colors:"54023"},{word:"scrip",colors:"54013"},{word:"scud",colors:"1405"},{word:"scut",colors:"1402"},{word:"sea",colors:"103"},{word:"seal",colors:"1230"},{word:"seam",colors:"1053"},{word:"sear",colors:"5230"},{word:"search",colors:"035142"},{word:"seat",colors:"5031"},{word:"sect",colors:"1042"},{word:"sedan",colors:"14523"},{word:"see",colors:"102"},{word:"seed",colors:"1024"},{word:"seek",colors:"0235"},{word:"seeker",colors:"023541"},{word:"seems",colors:"10435"},{word:"seen",colors:"1023"},{word:"seep",colors:"1023"},{word:"seer",colors:"5230"},{word:"seine",colors:"02134"},{word:"sell",colors:"5013"},{word:"semi",colors:"1032"},{word:"sen",colors:"103"},{word:"senate",colors:"103542"},{word:"send",colors:"1035"},{word:"senna",colors:"02345"},{word:"senor",colors:"02451"},{word:"senora",colors:"024513"},{word:"sense",colors:"02314"},{word:"sent",colors:"5041"},{word:"sepal",colors:"12350"},{word:"sere",colors:"5203"},{word:"serge",colors:"03154"},{word:"set",colors:"501"},{word:"sets",colors:"1045"},{word:"sewn",colors:"1403"},{word:"shad",colors:"0234"},{word:"shade",colors:"02543"},{word:"shag",colors:"0235"},{word:"shale",colors:"52310"},{word:"sham",colors:"0253"},{word:"shanty",colors:"025314"},{word:"share",colors:"02513"},{word:"shawl",colors:"52301"},{word:"shay",colors:"0234"},{word:"she",colors:"520"},{word:"shear",colors:"02351"},{word:"shed",colors:"0234"},{word:"sheep",colors:"52043"},{word:"sheer",colors:"02341"},{word:"sheet",colors:"52041"},{word:"shew",colors:"5230"},{word:"shim",colors:"0213"},{word:"shin",colors:"0213"},{word:"shine",colors:"02134"},{word:"ship",colors:"5213"},{word:"shoat",colors:"02531"},{word:"shod",colors:"0214"},{word:"shoe",colors:"5210"},{word:"shone",colors:"02534"},{word:"shoo",colors:"0215"},{word:"shoon",colors:"02153"},{word:"shop",colors:"5213"},{word:"shore",colors:"02514"},{word:"shot",colors:"0251"},{word:"show",colors:"5210"},{word:"showy",colors:"52104"},{word:"shut",colors:"5201"},{word:"shy",colors:"024"},{word:"si",colors:"01"},{word:"sic",colors:"014"},{word:"sick",colors:"0145"},{word:"side",colors:"1240"},{word:"sides",colors:"02431"},{word:"sidle",colors:"12503"},{word:"sienna",colors:"012345"},{word:"sigh",colors:"0152"},{word:"sign",colors:"0153"},{word:"signer",colors:"025431"},{word:"signet",colors:"125304"},{word:"sill",colors:"5213"},{word:"silly",colors:"52134"},{word:"silo",colors:"1205"},{word:"silt",colors:"1204"},{word:"sin",colors:"013"},{word:"since",colors:"12340"},{word:"sine",colors:"1230"},{word:"sinew",colors:"52430"},{word:"sing",colors:"0135"},{word:"singe",colors:"12350"},{word:"singer",colors:"024531"},{word:"sink",colors:"0135"},{word:"sip",colors:"513"},{word:"sir",colors:"510"},{word:"sire",colors:"5102"},{word:"siren",colors:"02134"},{word:"sis",colors:"015"},{word:"sissy",colors:"02154"},{word:"sit",colors:"021"},{word:"site",colors:"5210"},{word:"sitter",colors:"521430"},{word:"skate",colors:"05214"},{word:"skeet",colors:"05341"},{word:"skein",colors:"05213"},{word:"ski",colors:"051"},{word:"skid",colors:"0514"},{word:"skim",colors:"0513"},{word:"skin",colors:"0513"},{word:"skit",colors:"0521"},{word:"sky",colors:"054"},{word:"slab",colors:"1032"},{word:"slag",colors:"1025"},{word:"slam",colors:"1023"},{word:"slap",colors:"1023"},{word:"slat",colors:"1024"},{word:"slate",colors:"10342"},{word:"slats",colors:"03215"},{word:"slaw",colors:"5120"},{word:"slay",colors:"1034"},{word:"slayer",colors:"513420"},{word:"sled",colors:"1025"},{word:"sleep",colors:"10243"},{word:"sleet",colors:"10234"},{word:"slew",colors:"5130"},{word:"slice",colors:"10243"},{word:"slid",colors:"1025"},{word:"slide",colors:"10253"},{word:"slily",colors:"51234"},{word:"slim",colors:"1023"},{word:"slime",colors:"51230"},{word:"slimy",colors:"10234"},{word:"slip",colors:"1023"},{word:"slit",colors:"1024"},{word:"slob",colors:"1052"},{word:"sloe",colors:"1052"},{word:"slog",colors:"0315"},{word:"slop",colors:"1053"},{word:"slope",colors:"10532"},{word:"slot",colors:"1054"},{word:"slow",colors:"5310"},{word:"slum",colors:"5103"},{word:"slut",colors:"5301"},{word:"sly",colors:"104"},{word:"smart",colors:"53204"},{word:"smear",colors:"53420"},{word:"smile",colors:"53210"},{word:"smirk",colors:"03215"},{word:"smite",colors:"13240"},{word:"smith",colors:"53142"},{word:"smoky",colors:"03154"},{word:"smote",colors:"53140"},{word:"smut",colors:"1302"},{word:"snack",colors:"03245"},{word:"snag",colors:"0325"},{word:"snake",colors:"03254"},{word:"snap",colors:"5423"},{word:"snare",colors:"04312"},{word:"snath",colors:"03512"},{word:"sneak",colors:"03425"},{word:"sneer",colors:"04231"},{word:"snide",colors:"13250"},{word:"snip",colors:"5413"},{word:"snipe",colors:"54230"},{word:"snob",colors:"1352"},{word:"snoot",colors:"04152"},{word:"snore",colors:"04512"},{word:"snot",colors:"0351"},{word:"snout",colors:"13504"},{word:"snow",colors:"1350"},{word:"snub",colors:"1302"},{word:"snug",colors:"1305"},{word:"so",colors:"01"},{word:"soak",colors:"0125"},{word:"soap",colors:"5123"},{word:"soar",colors:"5120"},{word:"sob",colors:"152"},{word:"sober",colors:"51230"},{word:"sock",colors:"0145"},{word:"socket",colors:"014532"},{word:"sod",colors:"014"},{word:"soda",colors:"0142"},{word:"soil",colors:"1520"},{word:"soir",colors:"0521"},{word:"sol",colors:"150"},{word:"sold",colors:"0134"},{word:"sole",colors:"1502"},{word:"solid",colors:"05324"},{word:"solo",colors:"0135"},{word:"soma",colors:"0132"},{word:"some",colors:"5130"},{word:"son",colors:"013"},{word:"sonar",colors:"05431"},{word:"song",colors:"0135"},{word:"sonic",colors:"05324"},{word:"sons",colors:"0531"},{word:"soon",colors:"0153"},{word:"soot",colors:"0152"},{word:"sop",colors:"153"},{word:"sore",colors:"5102"},{word:"sort",colors:"5104"},{word:"sot",colors:"051"},{word:"sou",colors:"150"},{word:"soup",colors:"1503"},{word:"sow",colors:"150"},{word:"sown",colors:"1503"},{word:"soy",colors:"014"},{word:"spa",colors:"132"},{word:"space",colors:"13540"},{word:"spade",colors:"13540"},{word:"span",colors:"5324"},{word:"spar",colors:"5320"},{word:"spare",colors:"53204"},{word:"spat",colors:"5321"},{word:"spate",colors:"13520"},{word:"spawn",colors:"53204"},{word:"spay",colors:"1354"},{word:"spear",colors:"53420"},{word:"specs",colors:"13045"},{word:"sped",colors:"1304"},{word:"speed",colors:"13024"},{word:"spent",colors:"53041"},{word:"spew",colors:"1340"},{word:"spice",colors:"13240"},{word:"spied",colors:"13204"},{word:"spin",colors:"5314"},{word:"spine",colors:"53240"},{word:"spinet",colors:"532401"},{word:"spire",colors:"53102"},{word:"spit",colors:"5321"},{word:"spite",colors:"53210"},{word:"splay",colors:"13054"},{word:"spoil",colors:"13520"},{word:"spore",colors:"53102"},{word:"spot",colors:"1352"},{word:"spout",colors:"13502"},{word:"sprat",colors:"53021"},{word:"spree",colors:"53024"},{word:"sprit",colors:"53021"},{word:"spry",colors:"5304"},{word:"spud",colors:"1304"},{word:"spun",colors:"5304"},{word:"spy",colors:"134"},{word:"stab",colors:"5132"},{word:"stack",colors:"02345"},{word:"stag",colors:"0235"},{word:"stage",colors:"12350"},{word:"stagy",colors:"02354"},{word:"stain",colors:"02314"},{word:"stair",colors:"54310"},{word:"stake",colors:"01254"},{word:"stale",colors:"14302"},{word:"stank",colors:"01235"},{word:"star",colors:"5120"},{word:"stare",colors:"51204"},{word:"start",colors:"51204"},{word:"stash",colors:"01352"},{word:"state",colors:"51340"},{word:"stay",colors:"0134"},{word:"steak",colors:"01425"},{word:"steal",colors:"14230"},{word:"steam",colors:"12053"},{word:"steed",colors:"12045"},{word:"steel",colors:"14230"},{word:"steep",colors:"51043"},{word:"steer",colors:"51340"},{word:"stein",colors:"51024"},{word:"stem",colors:"1203"},{word:"steno",colors:"01435"},{word:"step",colors:"5103"},{word:"stere",colors:"51304"},{word:"stereo",colors:"542031"},{word:"stet",colors:"5104"},{word:"stew",colors:"1230"},{word:"stewed",colors:"123045"},{word:"stick",colors:"02145"},{word:"stile",colors:"14203"},{word:"sting",colors:"02145"},{word:"stink",colors:"01235"},{word:"stir",colors:"5120"},{word:"stoa",colors:"0153"},{word:"stoat",colors:"01532"},{word:"stock",colors:"02145"},{word:"stoke",colors:"02153"},{word:"stole",colors:"14502"},{word:"stolid",colors:"015324"},{word:"stoma",colors:"54132"},{word:"stone",colors:"01534"},{word:"stool",colors:"02153"},{word:"stop",colors:"1253"},{word:"store",colors:"54102"},{word:"storm",colors:"54103"},{word:"stoup",colors:"12503"},{word:"stout",colors:"12504"},{word:"stow",colors:"1250"},{word:"strap",colors:"51023"},{word:"strata",colors:"510243"},{word:"stray",colors:"51034"},{word:"strep",colors:"51043"},{word:"stria",colors:"54013"},{word:"strip",colors:"51023"},{word:"stub",colors:"5102"},{word:"stud",colors:"1205"},{word:"study",colors:"12054"},{word:"stun",colors:"5104"},{word:"stung",colors:"14035"},{word:"sty",colors:"014"},{word:"sub",colors:"102"},{word:"such",colors:"5042"},{word:"sue",colors:"102"},{word:"suede",colors:"10243"},{word:"suet",colors:"5031"},{word:"suit",colors:"5014"},{word:"suite",colors:"50142"},{word:"sully",colors:"50134"},{word:"sum",colors:"103"},{word:"sumo",colors:"1035"},{word:"sums",colors:"1035"},{word:"sun",colors:"103"},{word:"sung",colors:"1035"},{word:"sup",colors:"103"},{word:"supine",colors:"503142"},{word:"swab",colors:"1032"},{word:"swain",colors:"50314"},{word:"swale",colors:"50214"},{word:"swan",colors:"1023"},{word:"swap",colors:"1023"},{word:"swat",colors:"1032"},{word:"swath",colors:"50342"},{word:"sway",colors:"1034"},{word:"sweat",colors:"10352"},{word:"sweet",colors:"10342"},{word:"swell",colors:"50413"},{word:"swept",colors:"10432"},{word:"swill",colors:"50213"},{word:"swine",colors:"50243"},{word:"swipe",colors:"50134"},{word:"swob",colors:"1052"},{word:"syne",colors:"0432"},{word:"tab",colors:"132"},{word:"table",colors:"15203"},{word:"tabor",colors:"13250"},{word:"tack",colors:"2345"},{word:"tackle",colors:"234510"},{word:"tad",colors:"124"},{word:"tag",colors:"235"},{word:"tail",colors:"4310"},{word:"tails",colors:"25130"},{word:"take",colors:"1350"},{word:"taken",colors:"12543"},{word:"taker",colors:"43501"},{word:"takes",colors:"12540"},{word:"talc",colors:"2314"},{word:"tale",colors:"1204"},{word:"talk",colors:"1205"},{word:"talkie",colors:"430512"},{word:"tall",colors:"1203"},{word:"tally",colors:"15034"},{word:"talon",colors:"13054"},{word:"talus",colors:"12305"},{word:"tam",colors:"253"},{word:"tame",colors:"2530"},{word:"tan",colors:"123"},{word:"tang",colors:"2345"},{word:"tangle",colors:"234510"},{word:"tango",colors:"42351"},{word:"tank",colors:"1235"},{word:"tansy",colors:"15304"},{word:"tante",colors:"13420"},{word:"tanto",colors:"13425"},{word:"tap",colors:"123"},{word:"tape",colors:"1530"},{word:"taper",colors:"12340"},{word:"tapir",colors:"25310"},{word:"taps",colors:"1235"},{word:"tar",colors:"120"},{word:"tardo",colors:"13045"},{word:"tardy",colors:"13054"},{word:"tare",colors:"4310"},{word:"tares",colors:"12045"},{word:"tarn",colors:"1203"},{word:"taro",colors:"1305"},{word:"tarot",colors:"13052"},{word:"tarp",colors:"1203"},{word:"tart",colors:"1302"},{word:"tartan",colors:"120453"},{word:"task",colors:"1205"},{word:"tassel",colors:"120543"},{word:"taste",colors:"13540"},{word:"tasty",colors:"13024"},{word:"tat",colors:"132"},{word:"tatter",colors:"152430"},{word:"tattle",colors:"152430"},{word:"taunt",colors:"12034"},{word:"taut",colors:"1204"},{word:"taw",colors:"230"},{word:"tea",colors:"103"},{word:"teak",colors:"1035"},{word:"teal",colors:"1420"},{word:"team",colors:"2053"},{word:"tear",colors:"4031"},{word:"tease",colors:"40312"},{word:"teasel",colors:"425130"},{word:"teat",colors:"1032"},{word:"tee",colors:"104"},{word:"teem",colors:"2043"},{word:"teens",colors:"40231"},{word:"tell",colors:"1403"},{word:"tend",colors:"1035"},{word:"tenor",colors:"14350"},{word:"tens",colors:"1045"},{word:"tense",colors:"40312"},{word:"tent",colors:"1042"},{word:"tenth",colors:"10342"},{word:"tepid",colors:"10324"},{word:"term",colors:"4013"},{word:"terra",colors:"42013"},{word:"terse",colors:"13054"},{word:"test",colors:"1054"},{word:"testa",colors:"10543"},{word:"than",colors:"1253"},{word:"thane",colors:"12530"},{word:"that",colors:"1234"},{word:"thaw",colors:"4230"},{word:"the",colors:"120"},{word:"thee",colors:"1204"},{word:"them",colors:"4203"},{word:"then",colors:"1203"},{word:"these",colors:"12054"},{word:"theta",colors:"12043"},{word:"thews",colors:"42305"},{word:"thin",colors:"4213"},{word:"thing",colors:"42135"},{word:"this",colors:"4215"},{word:"tho",colors:"125"},{word:"thong",colors:"42135"},{word:"those",colors:"42150"},{word:"thou",colors:"1250"},{word:"threw",colors:"42130"},{word:"throw",colors:"42150"},{word:"thru",colors:"4210"},{word:"thrum",colors:"42103"},{word:"thud",colors:"1204"},{word:"thug",colors:"4205"},{word:"thus",colors:"1205"},{word:"thy",colors:"124"},{word:"ti",colors:"12"},{word:"tic",colors:"214"},{word:"tick",colors:"2145"},{word:"tide",colors:"1240"},{word:"tidy",colors:"1254"},{word:"tie",colors:"120"},{word:"tier",colors:"4201"},{word:"ties",colors:"1205"},{word:"tiger",colors:"42501"},{word:"tike",colors:"1250"},{word:"tilde",colors:"12053"},{word:"tile",colors:"1203"},{word:"till",colors:"1203"},{word:"tilt",colors:"1204"},{word:"time",colors:"4230"},{word:"timer",colors:"42301"},{word:"times",colors:"42301"},{word:"tin",colors:"123"},{word:"tine",colors:"1230"},{word:"ting",colors:"2145"},{word:"tinge",colors:"42350"},{word:"tint",colors:"1234"},{word:"tiny",colors:"1234"},{word:"tip",colors:"123"},{word:"tipsy",colors:"12354"},{word:"tire",colors:"4210"},{word:"tired",colors:"12034"},{word:"tires",colors:"12035"},{word:"tiring",colors:"410235"},{word:"tiro",colors:"1205"},{word:"tis",colors:"120"},{word:"tit",colors:"124"},{word:"title",colors:"12403"},{word:"to",colors:"15"},{word:"toad",colors:"1534"},{word:"toast",colors:"15302"},{word:"toe",colors:"210"},{word:"toga",colors:"4152"},{word:"togs",colors:"2150"},{word:"toil",colors:"1520"},{word:"toils",colors:"45201"},{word:"token",colors:"41503"},{word:"told",colors:"1534"},{word:"tome",colors:"2130"},{word:"ton",colors:"153"},{word:"tonal",colors:"15430"},{word:"tone",colors:"2140"},{word:"tong",colors:"2145"},{word:"tongs",colors:"21450"},{word:"too",colors:"215"},{word:"tool",colors:"4150"},{word:"toot",colors:"2154"},{word:"top",colors:"153"},{word:"toper",colors:"15340"},{word:"tops",colors:"2531"},{word:"tore",colors:"1504"},{word:"torn",colors:"1503"},{word:"torpid",colors:"150324"},{word:"tort",colors:"1502"},{word:"toss",colors:"2501"},{word:"tot",colors:"152"},{word:"total",colors:"15430"},{word:"tote",colors:"2140"},{word:"totem",colors:"21403"},{word:"totum",colors:"25403"},{word:"tour",colors:"4501"},{word:"tout",colors:"1502"},{word:"tow",colors:"210"},{word:"towel",colors:"25041"},{word:"town",colors:"2104"},{word:"toy",colors:"214"},{word:"trace",colors:"20543"},{word:"trade",colors:"10254"},{word:"train",colors:"40513"},{word:"trait",colors:"20314"},{word:"tram",colors:"2053"},{word:"trap",colors:"1023"},{word:"traps",colors:"10235"},{word:"trawl",colors:"41203"},{word:"tray",colors:"1034"},{word:"tread",colors:"10425"},{word:"treat",colors:"10352"},{word:"tree",colors:"4102"},{word:"trees",colors:"10345"},{word:"trek",colors:"4105"},{word:"trend",colors:"10435"},{word:"triad",colors:"20135"},{word:"tried",colors:"10234"},{word:"trier",colors:"40231"},{word:"trig",colors:"2015"},{word:"trim",colors:"2013"},{word:"trio",colors:"1025"},{word:"trip",colors:"1023"},{word:"tripe",colors:"20134"},{word:"tripod",colors:"102354"},{word:"trite",colors:"10243"},{word:"trod",colors:"1054"},{word:"troop",colors:"20153"},{word:"trope",colors:"10534"},{word:"trot",colors:"1052"},{word:"trow",colors:"4150"},{word:"troy",colors:"2014"},{word:"try",colors:"104"},{word:"tsar",colors:"1520"},{word:"tub",colors:"102"},{word:"tube",colors:"1023"},{word:"tuck",colors:"2045"},{word:"tug",colors:"205"},{word:"tumid",colors:"20315"},{word:"tumor",colors:"40351"},{word:"tun",colors:"103"},{word:"tuna",colors:"1032"},{word:"tune",colors:"1043"},{word:"twain",colors:"20314"},{word:"twas",colors:"2031"},{word:"tweed",colors:"20345"},{word:"twin",colors:"2014"},{word:"twins",colors:"40231"},{word:"twirl",colors:"40213"},{word:"twit",colors:"2014"},{word:"two",colors:"201"},{word:"typal",colors:"14350"},{word:"typhus",colors:"143205"},{word:"tyro",colors:"2401"},{word:"ugly",colors:"0514"},{word:"ulna",colors:"0132"},{word:"ultra",colors:"03412"},{word:"unarm",colors:"04213"},{word:"under",colors:"04521"},{word:"undine",colors:"035142"},{word:"unit",colors:"0412"},{word:"unite",colors:"03142"},{word:"untie",colors:"03412"},{word:"unto",colors:"0315"},{word:"up",colors:"03"},{word:"upon",colors:"0354"},{word:"urge",colors:"0153"},{word:"urn",colors:"014"},{word:"us",colors:"01"},{word:"use",colors:"012"},{word:"used",colors:"0124"},{word:"usted",colors:"01235"},{word:"utmost",colors:"023514"},{word:"wad",colors:"024"},{word:"wade",colors:"0254"},{word:"wadi",colors:"0341"},{word:"wail",colors:"0513"},{word:"waist",colors:"03154"},{word:"wait",colors:"0312"},{word:"wake",colors:"0254"},{word:"waken",colors:"02543"},{word:"walk",colors:"0215"},{word:"wall",colors:"0213"},{word:"wan",colors:"023"},{word:"wand",colors:"0235"},{word:"wane",colors:"0234"},{word:"wankel",colors:"023541"},{word:"wanna",colors:"02345"},{word:"want",colors:"0342"},{word:"war",colors:"021"},{word:"ward",colors:"0215"},{word:"ware",colors:"0214"},{word:"warn",colors:"0214"},{word:"warp",colors:"0213"},{word:"wart",colors:"0214"},{word:"wary",colors:"0314"},{word:"was",colors:"021"},{word:"wash",colors:"0352"},{word:"wasp",colors:"0213"},{word:"waste",colors:"05123"},{word:"water",colors:"05431"},{word:"watt",colors:"0324"},{word:"way",colors:"034"},{word:"we",colors:"03"},{word:"weak",colors:"0425"},{word:"weal",colors:"0421"},{word:"wean",colors:"0423"},{word:"wear",colors:"0421"},{word:"web",colors:"032"},{word:"wed",colors:"034"},{word:"wee",colors:"034"},{word:"weed",colors:"0345"},{word:"weeds",colors:"03451"},{word:"week",colors:"0345"},{word:"weir",colors:"0321"},{word:"weird",colors:"03215"},{word:"weld",colors:"0314"},{word:"well",colors:"0413"},{word:"welsh",colors:"03152"},{word:"welt",colors:"0312"},{word:"wen",colors:"043"},{word:"wend",colors:"0435"},{word:"went",colors:"0342"},{word:"wept",colors:"0432"},{word:"were",colors:"0314"},{word:"west",colors:"0312"},{word:"wet",colors:"032"},{word:"whale",colors:"02513"},{word:"what",colors:"0234"},{word:"wheat",colors:"02354"},{word:"whee",colors:"0234"},{word:"wheel",colors:"02341"},{word:"when",colors:"0243"},{word:"where",colors:"02314"},{word:"whet",colors:"0234"},{word:"whine",colors:"02134"},{word:"whip",colors:"0213"},{word:"whist",colors:"02154"},{word:"whit",colors:"0214"},{word:"who",colors:"021"},{word:"whoa",colors:"0253"},{word:"whole",colors:"02514"},{word:"whoop",colors:"02153"},{word:"whop",colors:"0213"},{word:"whore",colors:"02514"},{word:"whose",colors:"02153"},{word:"why",colors:"024"},{word:"wide",colors:"0154"},{word:"widen",colors:"01543"},{word:"wield",colors:"01435"},{word:"wild",colors:"0134"},{word:"wile",colors:"0134"},{word:"wiles",colors:"01345"},{word:"will",colors:"0213"},{word:"wilt",colors:"0132"},{word:"wily",colors:"0214"},{word:"win",colors:"013"},{word:"wind",colors:"0135"},{word:"winds",colors:"02351"},{word:"windy",colors:"02354"},{word:"wine",colors:"0134"},{word:"wink",colors:"0135"},{word:"wino",colors:"0235"},{word:"winy",colors:"0234"},{word:"wipe",colors:"0134"},{word:"wire",colors:"0213"},{word:"wiry",colors:"0214"},{word:"wise",colors:"0154"},{word:"wish",colors:"0152"},{word:"wisp",colors:"0153"},{word:"wispy",colors:"02134"},{word:"wist",colors:"0154"},{word:"wit",colors:"012"},{word:"with",colors:"0142"},{word:"wits",colors:"0145"},{word:"woe",colors:"013"},{word:"woke",colors:"0153"},{word:"wold",colors:"0514"},{word:"won",colors:"013"},{word:"wont",colors:"0142"},{word:"wonted",colors:"014235"},{word:"woo",colors:"015"},{word:"wood",colors:"0154"},{word:"wool",colors:"0153"},{word:"wore",colors:"0514"},{word:"worn",colors:"0514"},{word:"wort",colors:"0514"},{word:"worth",colors:"05142"},{word:"wot",colors:"012"},{word:"wrap",colors:"0123"},{word:"wrath",colors:"01342"},{word:"wreak",colors:"01425"},{word:"wreath",colors:"013542"},{word:"wren",colors:"0134"},{word:"writ",colors:"0124"},{word:"write",colors:"01243"},{word:"wroth",colors:"01542"},{word:"wry",colors:"014"},{word:"yah",colors:"432"},{word:"yak",colors:"435"},{word:"yam",colors:"453"},{word:"yap",colors:"453"},{word:"yard",colors:"4305"},{word:"yarn",colors:"4503"},{word:"yaw",colors:"430"},{word:"yawl",colors:"4301"},{word:"yawn",colors:"4503"},{word:"yawp",colors:"4503"},{word:"yaws",colors:"4301"},{word:"ye",colors:"42"},{word:"yea",colors:"423"},{word:"year",colors:"4230"},{word:"yearn",colors:"42503"},{word:"years",colors:"42305"},{word:"yell",colors:"4201"},{word:"yelp",colors:"4203"},{word:"yen",colors:"423"},{word:"yep",colors:"423"},{word:"yes",colors:"420"},{word:"yin",colors:"423"},{word:"yodel",colors:"41520"},{word:"yoke",colors:"4152"},{word:"yokel",colors:"41520"},{word:"yolk",colors:"4105"},{word:"yonder",colors:"413520"},{word:"yore",colors:"4102"},{word:"yowl",colors:"4103"},{word:"yuk",colors:"405"},{word:"yule",colors:"4012"}]},mS={indices:fS,mono:hS,rainbow:pS};function gS(){return Tt.jsx(uS,{data:mS})}N0(document.getElementById("root")).render(Tt.jsx(Et.StrictMode,{children:Tt.jsx(gS,{})}));
