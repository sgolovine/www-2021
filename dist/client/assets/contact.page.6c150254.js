import{c as qe}from"./MobileMenuIcon.5ad7de12.js";import{a as c,j as N,r as ue,F as Me}from"./src/root/_default.page.client.tsx.e1721306.js";import{w as ke,H as He}from"./withLayout.ec7724de.js";import{C as Je}from"./ContentContainer.cb04fc53.js";const le=({title:r="Button Title!",onClick:e=()=>null,additionalClassNames:t=""})=>c("button",{type:"button",className:qe(["h-12","w-44","border-4","py-2","px-6","rounded","shadow","border-brand-yellow","text-brand-white","font-bold"],t),onClick:e,children:r}),fe=({value:r,onChange:e,label:t,placeholder:a})=>N("div",{className:"mb-4 flex flex-col",children:[t&&c("label",{className:"text-brand-yellow font-bold mb-0 pb-0 uppercase text-xs",children:t}),c("input",{className:"mt-0 border-4 border-brand-yellow shadow rounded-sm text-xl bg-gray-900 text-brand-white px-2 py-1",value:r,onChange:n=>e(n.target.value),placeholder:a})]}),We=({value:r,onChange:e,placeholder:t,label:a,maxLength:n})=>N("div",{className:"mb-4 flex flex-col",children:[a&&c("label",{className:"text-brand-yellow font-bold mb-0 pb-0 uppercase text-xs",children:a}),c("textarea",{rows:12,className:"mt-0 border-4 border-brand-yellow shadow rounded-sm text-xl bg-gray-900 text-brand-white px-2 py-1",value:r,onChange:s=>e(s.target.value),placeholder:t,maxLength:n})]}),Ve=({children:r})=>c("div",{className:"pb-6",children:r});var G={exports:{}},xe=function(e,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(t,n)}},ze=xe,Z=Object.prototype.toString,ee=function(r){return function(e){var t=Z.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function C(r){return r=r.toLowerCase(),function(t){return ee(t)===r}}function re(r){return Array.isArray(r)}function L(r){return typeof r=="undefined"}function Xe(r){return r!==null&&!L(r)&&r.constructor!==null&&!L(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var Oe=C("ArrayBuffer");function Ke(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Oe(r.buffer),e}function Qe(r){return typeof r=="string"}function Ye(r){return typeof r=="number"}function Ce(r){return r!==null&&typeof r=="object"}function B(r){if(ee(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var Ge=C("Date"),Ze=C("File"),er=C("Blob"),rr=C("FileList");function te(r){return Z.call(r)==="[object Function]"}function tr(r){return Ce(r)&&te(r.pipe)}function nr(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||Z.call(r)===e||te(r.toString)&&r.toString()===e)}var ar=C("URLSearchParams");function sr(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function ir(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function ne(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),re(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function Q(){var r={};function e(n,s){B(r[s])&&B(n)?r[s]=Q(r[s],n):B(n)?r[s]=Q({},n):re(n)?r[s]=n.slice():r[s]=n}for(var t=0,a=arguments.length;t<a;t++)ne(arguments[t],e);return r}function or(r,e,t){return ne(e,function(n,s){t&&typeof n=="function"?r[s]=ze(n,t):r[s]=n}),r}function ur(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function lr(r,e,t,a){r.prototype=Object.create(e.prototype,a),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function fr(r,e,t){var a,n,s,i={};e=e||{};do{for(a=Object.getOwnPropertyNames(r),n=a.length;n-- >0;)s=a[n],i[s]||(e[s]=r[s],i[s]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function cr(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var a=r.indexOf(e,t);return a!==-1&&a===t}function dr(r){if(!r)return null;var e=r.length;if(L(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var hr=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),p={isArray:re,isArrayBuffer:Oe,isBuffer:Xe,isFormData:nr,isArrayBufferView:Ke,isString:Qe,isNumber:Ye,isObject:Ce,isPlainObject:B,isUndefined:L,isDate:Ge,isFile:Ze,isBlob:er,isFunction:te,isStream:tr,isURLSearchParams:ar,isStandardBrowserEnv:ir,forEach:ne,merge:Q,extend:or,trim:sr,stripBOM:ur,inherits:lr,toFlatObject:fr,kindOf:ee,kindOfTest:C,endsWith:cr,toArray:dr,isTypedArray:hr,isFileList:rr},A=p;function ce(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Se=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(A.isURLSearchParams(t))n=t.toString();else{var s=[];A.forEach(t,function(l,h){l===null||typeof l=="undefined"||(A.isArray(l)?h=h+"[]":l=[l],A.forEach(l,function(f){A.isDate(f)?f=f.toISOString():A.isObject(f)&&(f=JSON.stringify(f)),s.push(ce(h)+"="+ce(f))}))}),n=s.join("&")}if(n){var i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},pr=p;function j(){this.handlers=[]}j.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};j.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};j.prototype.forEach=function(e){pr.forEach(this.handlers,function(a){a!==null&&e(a)})};var mr=j,vr=p,Er=function(e,t){vr.forEach(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})},Ae=p;function T(r,e,t,a,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),a&&(this.request=a),n&&(this.response=n)}Ae.inherits(T,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var ge=T.prototype,Ne={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){Ne[r]={value:r}});Object.defineProperties(T,Ne);Object.defineProperty(ge,"isAxiosError",{value:!0});T.from=function(r,e,t,a,n,s){var i=Object.create(ge);return Ae.toFlatObject(r,i,function(l){return l!==Error.prototype}),T.call(i,r.message,e,t,a,n),i.name=r.name,s&&Object.assign(i,s),i};var $=T,Te={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},w=p;function yr(r,e){e=e||new FormData;var t=[];function a(s){return s===null?"":w.isDate(s)?s.toISOString():w.isArrayBuffer(s)||w.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,i){if(w.isPlainObject(s)||w.isArray(s)){if(t.indexOf(s)!==-1)throw Error("Circular reference detected in "+i);t.push(s),w.forEach(s,function(l,h){if(!w.isUndefined(l)){var o=i?i+"."+h:h,f;if(l&&!i&&typeof l=="object"){if(w.endsWith(h,"{}"))l=JSON.stringify(l);else if(w.endsWith(h,"[]")&&(f=w.toArray(l))){f.forEach(function(E){!w.isUndefined(E)&&e.append(o,a(E))});return}}n(l,o)}}),t.pop()}else e.append(i,a(s))}return n(r),e}var Pe=yr,J=$,br=function(e,t,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):t(new J("Request failed with status code "+a.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))},U=p,wr=U.isStandardBrowserEnv()?function(){return{write:function(t,a,n,s,i,u){var l=[];l.push(t+"="+encodeURIComponent(a)),U.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),U.isString(s)&&l.push("path="+s),U.isString(i)&&l.push("domain="+i),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Rr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},xr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Or=Rr,Cr=xr,_e=function(e,t){return e&&!Or(t)?Cr(e,t):t},W=p,Sr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ar=function(e){var t={},a,n,s;return e&&W.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),a=W.trim(u.substr(0,s)).toLowerCase(),n=W.trim(u.substr(s+1)),a){if(t[a]&&Sr.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([n]):t[a]=t[a]?t[a]+", "+n:n}}),t},de=p,gr=de.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),a;function n(s){var i=s;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return a=n(window.location.href),function(i){var u=de.isString(i)?n(i):i;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}(),Y=$,Nr=p;function $e(r){Y.call(this,r==null?"canceled":r,Y.ERR_CANCELED),this.name="CanceledError"}Nr.inherits($e,Y,{__CANCEL__:!0});var I=$e,Tr=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},D=p,Pr=br,_r=wr,$r=Se,Dr=_e,Ur=Ar,Br=gr,Fr=Te,R=$,Lr=I,jr=Tr,he=function(e){return new Promise(function(a,n){var s=e.data,i=e.headers,u=e.responseType,l;function h(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}D.isFormData(s)&&D.isStandardBrowserEnv()&&delete i["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(f+":"+E)}var m=Dr(e.baseURL,e.url);o.open(e.method.toUpperCase(),$r(m,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function ie(){if(!!o){var b="getAllResponseHeaders"in o?Ur(o.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?o.responseText:o.response,O={data:S,status:o.status,statusText:o.statusText,headers:b,config:e,request:o};Pr(function(H){a(H),h()},function(H){n(H),h()},O),o=null}}if("onloadend"in o?o.onloadend=ie:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(ie)},o.onabort=function(){!o||(n(new R("Request aborted",R.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new R("Network Error",R.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",O=e.transitional||Fr;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(new R(S,O.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,e,o)),o=null},D.isStandardBrowserEnv()){var oe=(e.withCredentials||Br(m))&&e.xsrfCookieName?_r.read(e.xsrfCookieName):void 0;oe&&(i[e.xsrfHeaderName]=oe)}"setRequestHeader"in o&&D.forEach(i,function(S,O){typeof s=="undefined"&&O.toLowerCase()==="content-type"?delete i[O]:o.setRequestHeader(O,S)}),D.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(b){!o||(n(!b||b&&b.type?new Lr:b),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),s||(s=null);var k=jr(m);if(k&&["http","https","file"].indexOf(k)===-1){n(new R("Unsupported protocol "+k+":",R.ERR_BAD_REQUEST,e));return}o.send(s)})},Ir=null,d=p,pe=Er,me=$,qr=Te,Mr=Pe,kr={"Content-Type":"application/x-www-form-urlencoded"};function ve(r,e){!d.isUndefined(r)&&d.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Hr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=he),r}function Jr(r,e,t){if(d.isString(r))try{return(e||JSON.parse)(r),d.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var q={transitional:qr,adapter:Hr(),transformRequest:[function(e,t){if(pe(t,"Accept"),pe(t,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e))return e;if(d.isArrayBufferView(e))return e.buffer;if(d.isURLSearchParams(e))return ve(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var a=d.isObject(e),n=t&&t["Content-Type"],s;if((s=d.isFileList(e))||a&&n==="multipart/form-data"){var i=this.env&&this.env.FormData;return Mr(s?{"files[]":e}:e,i&&new i)}else if(a||n==="application/json")return ve(t,"application/json"),Jr(e);return e}],transformResponse:[function(e){var t=this.transitional||q.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!a&&this.responseType==="json";if(s||n&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(s)throw i.name==="SyntaxError"?me.from(i,me.ERR_BAD_RESPONSE,this,null,this.response):i}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ir},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};d.forEach(["delete","get","head"],function(e){q.headers[e]={}});d.forEach(["post","put","patch"],function(e){q.headers[e]=d.merge(kr)});var ae=q,Wr=p,Vr=ae,zr=function(e,t,a){var n=this||Vr;return Wr.forEach(a,function(i){e=i.call(n,e,t)}),e},De=function(e){return!!(e&&e.__CANCEL__)},Ee=p,V=zr,Xr=De,Kr=ae,Qr=I;function z(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Qr}var Yr=function(e){z(e),e.headers=e.headers||{},e.data=V.call(e,e.data,e.headers,e.transformRequest),e.headers=Ee.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ee.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Kr.adapter;return t(e).then(function(n){return z(e),n.data=V.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Xr(n)||(z(e),n&&n.response&&(n.response.data=V.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},y=p,Ue=function(e,t){t=t||{};var a={};function n(o,f){return y.isPlainObject(o)&&y.isPlainObject(f)?y.merge(o,f):y.isPlainObject(f)?y.merge({},f):y.isArray(f)?f.slice():f}function s(o){if(y.isUndefined(t[o])){if(!y.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function i(o){if(!y.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(y.isUndefined(t[o])){if(!y.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function l(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var h={url:i,method:i,data:i,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return y.forEach(Object.keys(e).concat(Object.keys(t)),function(f){var E=h[f]||s,m=E(f);y.isUndefined(m)&&E!==l||(a[f]=m)}),a},Be={version:"0.27.2"},Gr=Be.version,x=$,se={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){se[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var ye={};se.transitional=function(e,t,a){function n(s,i){return"[Axios v"+Gr+"] Transitional option '"+s+"'"+i+(a?". "+a:"")}return function(s,i,u){if(e===!1)throw new x(n(i," has been removed"+(t?" in "+t:"")),x.ERR_DEPRECATED);return t&&!ye[i]&&(ye[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,i,u):!0}};function Zr(r,e,t){if(typeof r!="object")throw new x("options must be an object",x.ERR_BAD_OPTION_VALUE);for(var a=Object.keys(r),n=a.length;n-- >0;){var s=a[n],i=e[s];if(i){var u=r[s],l=u===void 0||i(u,s,r);if(l!==!0)throw new x("option "+s+" must be "+l,x.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new x("Unknown option "+s,x.ERR_BAD_OPTION)}}var et={assertOptions:Zr,validators:se},Fe=p,rt=Se,be=mr,we=Yr,M=Ue,tt=_e,Le=et,g=Le.validators;function P(r){this.defaults=r,this.interceptors={request:new be,response:new be}}P.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=M(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&Le.assertOptions(a,{silentJSONParsing:g.transitional(g.boolean),forcedJSONParsing:g.transitional(g.boolean),clarifyTimeoutError:g.transitional(g.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(s=s&&m.synchronous,n.unshift(m.fulfilled,m.rejected))});var i=[];this.interceptors.response.forEach(function(m){i.push(m.fulfilled,m.rejected)});var u;if(!s){var l=[we,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(i),u=Promise.resolve(t);l.length;)u=u.then(l.shift(),l.shift());return u}for(var h=t;n.length;){var o=n.shift(),f=n.shift();try{h=o(h)}catch(E){f(E);break}}try{u=we(h)}catch(E){return Promise.reject(E)}for(;i.length;)u=u.then(i.shift(),i.shift());return u};P.prototype.getUri=function(e){e=M(this.defaults,e);var t=tt(e.baseURL,e.url);return rt(t,e.params,e.paramsSerializer)};Fe.forEach(["delete","get","head","options"],function(e){P.prototype[e]=function(t,a){return this.request(M(a||{},{method:e,url:t,data:(a||{}).data}))}});Fe.forEach(["post","put","patch"],function(e){function t(a){return function(s,i,u){return this.request(M(u||{},{method:e,headers:a?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}P.prototype[e]=t(),P.prototype[e+"Form"]=t(!0)});var nt=P,at=I;function _(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(a){if(!!t._listeners){var n,s=t._listeners.length;for(n=0;n<s;n++)t._listeners[n](a);t._listeners=null}}),this.promise.then=function(a){var n,s=new Promise(function(i){t.subscribe(i),n=i}).then(a);return s.cancel=function(){t.unsubscribe(n)},s},r(function(n){t.reason||(t.reason=new at(n),e(t.reason))})}_.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};_.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};_.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};_.source=function(){var e,t=new _(function(n){e=n});return{token:t,cancel:e}};var st=_,it=function(e){return function(a){return e.apply(null,a)}},ot=p,ut=function(e){return ot.isObject(e)&&e.isAxiosError===!0},Re=p,lt=xe,F=nt,ft=Ue,ct=ae;function je(r){var e=new F(r),t=lt(F.prototype.request,e);return Re.extend(t,F.prototype,e),Re.extend(t,e),t.create=function(n){return je(ft(r,n))},t}var v=je(ct);v.Axios=F;v.CanceledError=I;v.CancelToken=st;v.isCancel=De;v.VERSION=Be.version;v.toFormData=Pe;v.AxiosError=$;v.Cancel=v.CanceledError;v.all=function(e){return Promise.all(e)};v.spread=it;v.isAxiosError=ut;G.exports=v;G.exports.default=v;var dt=G.exports;const X={name:"",email:"",message:""},K={show:!1,type:null,message:null},ht=()=>{const[r,e]=ue.exports.useState(X),[t,a]=ue.exports.useState(K);return{form:r,messageState:t,handleSubmit:async()=>{if(!r.name){a({show:!0,type:"error",message:"Please enter a name"});return}if(!r.email){a({show:!0,type:"error",message:"Please enter an email"});return}if(!r.message){a({show:!0,type:"error",message:"Please enter a message"});return}(await dt({method:"POST",url:"/.netlify/functions/sendEmail",validateStatus:l=>l>=200&&l<401,data:{name:r.name,email:r.email,message:r.message}})).status===200?(a({show:!0,type:"success",message:"Message Sent Successfully!"}),e(X)):a({show:!0,type:"error",message:"Could not send message."})},handleClear:()=>{a(K),e(X)},setFormField:(u,l)=>{e({...r,[u]:l}),a(K)}}},pt=({children:r})=>c("div",{className:"my-2 p-4 border rounded bg-red-400 border-red-600",children:c("p",{className:"font-bold",children:r})}),mt=({children:r})=>c("div",{className:"my-2 p-4 border rounded bg-green-400 border-green-600",children:c("p",{className:"font-bold",children:r})}),vt=({messageState:r})=>{if(!r.show||r.type===null||r.message===null)return null;const e=r.type==="error"?pt:mt;return c(e,{children:r.message})},Et=()=>{const{form:r,messageState:e,handleSubmit:t,handleClear:a,setFormField:n}=ht();return N(Me,{children:[c(He,{title:"Contact",additionalText:"Enter your information below to send me a message. You can also email me directly at sunny@glvn.co"}),N(Je,{children:[c(vt,{messageState:e}),c(Ve,{children:N("div",{className:"flex flex-col w-full",children:[c(fe,{value:r.name,onChange:s=>n("name",s),label:"Name",placeholder:"John Doe"}),c(fe,{value:r.email,onChange:s=>n("email",s),label:"Email",placeholder:"john_doe@gmail.com"}),c(We,{value:r.message,onChange:s=>n("message",s),label:"Message",placeholder:"Hey Sunny ...."}),N("div",{children:[c(le,{additionalClassNames:"mr-2",title:"Send",onClick:t}),c(le,{title:"Clear",onClick:a})]})]})})]})]})};var xt=ke(Et);export{xt as default};
