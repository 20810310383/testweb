(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3052],{30166:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var o=n(55775),r=n.n(o)},55775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let o=n(47043);n(57437),n(2265);let r=o._(n(15602));function l(e,t){var n;let o={loading:e=>{let{error:t,isLoading:n,pastDelay:o}=e;return null}};"function"==typeof e&&(o.loader=e);let l={...o,...t};return(0,r.default)({...l,modules:null==(n=l.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},81523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let o=n(18993);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new o.BailoutToCSRError(t);return n}},15602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let o=n(57437),r=n(2265),l=n(81523),i=n(70049);function c(e){return{default:e&&"default"in e?e.default:e}}let s={loader:()=>Promise.resolve(c(()=>null)),loading:null,ssr:!0},a=function(e){let t={...s,...e},n=(0,r.lazy)(()=>t.loader().then(c)),a=t.loading;function u(e){let c=a?(0,o.jsx)(a,{isLoading:!0,pastDelay:!0,error:null}):null,s=t.ssr?(0,o.jsxs)(o.Fragment,{children:["undefined"==typeof window?(0,o.jsx)(i.PreloadCss,{moduleIds:t.modules}):null,(0,o.jsx)(n,{...e})]}):(0,o.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,o.jsx)(n,{...e})});return(0,o.jsx)(r.Suspense,{fallback:c,children:s})}return u.displayName="LoadableComponent",u}},70049:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return l}});let o=n(57437),r=n(20544);function l(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),l=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));l.push(...t)}}return 0===l.length?null:(0,o.jsx)(o.Fragment,{children:l.map(e=>(0,o.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},77948:function(){},35217:function(){},7354:function(){},36760:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=l(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)o.call(e,n)&&e[n]&&(t=l(t,n));return t}(n)))}return e}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0!==(n=(function(){return r}).apply(t,[]))&&(e.exports=n)}()},65095:function(e,t,n){"use strict";n.d(t,{_:function(){return l}});var o=n(44439);let r=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function l(e,t,n,l){if(e===t&&n===l)return o.Z;let i=t=>(function(e,t,n,o,l){let i,c;let s=0;do(i=r(c=t+(n-t)/2,o,l)-e)>0?n=c:t=c;while(Math.abs(i)>1e-7&&++s<12);return c})(t,0,1,e,n);return e=>0===e||1===e?e:r(i(e),t,l)}},50314:function(e,t,n){"use strict";n.d(t,{Vv:function(){return l},YQ:function(){return r},mZ:function(){return i}});var o=n(65095);let r=(0,o._)(.42,0,1,1),l=(0,o._)(0,0,.58,1),i=(0,o._)(.42,0,.58,1)},44439:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});let o=e=>e},88254:function(e,t,n){"use strict";n.d(t,{u:function(){return ek}});var o=n(2265);let r=Math.min,l=Math.max,i=Math.round,c=Math.floor,s=e=>({x:e,y:e}),a={left:"right",right:"left",bottom:"top",top:"bottom"},u={start:"end",end:"start"};function d(e,t){return"function"==typeof e?e(t):e}function f(e){return e.split("-")[0]}function p(e){return e.split("-")[1]}function m(e){return"x"===e?"y":"x"}function v(e){return"y"===e?"height":"width"}function y(e){return["top","bottom"].includes(f(e))?"y":"x"}function h(e){return e.replace(/start|end/g,e=>u[e])}function w(e){return e.replace(/left|right|bottom|top/g,e=>a[e])}function g(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function b(e){let{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function _(e,t,n){let o,{reference:r,floating:l}=e,i=y(t),c=m(y(t)),s=v(c),a=f(t),u="y"===i,d=r.x+r.width/2-l.width/2,h=r.y+r.height/2-l.height/2,w=r[s]/2-l[s]/2;switch(a){case"top":o={x:d,y:r.y-l.height};break;case"bottom":o={x:d,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:h};break;case"left":o={x:r.x-l.width,y:h};break;default:o={x:r.x,y:r.y}}switch(p(t)){case"start":o[c]-=w*(n&&u?-1:1);break;case"end":o[c]+=w*(n&&u?-1:1)}return o}let x=async(e,t,n)=>{let{placement:o="bottom",strategy:r="absolute",middleware:l=[],platform:i}=n,c=l.filter(Boolean),s=await (null==i.isRTL?void 0:i.isRTL(t)),a=await i.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=_(a,o,s),f=o,p={},m=0;for(let n=0;n<c.length;n++){let{name:l,fn:v}=c[n],{x:y,y:h,data:w,reset:g}=await v({x:u,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:p,rects:a,platform:i,elements:{reference:e,floating:t}});u=null!=y?y:u,d=null!=h?h:d,p={...p,[l]:{...p[l],...w}},g&&m<=50&&(m++,"object"==typeof g&&(g.placement&&(f=g.placement),g.rects&&(a=!0===g.rects?await i.getElementRects({reference:e,floating:t,strategy:r}):g.rects),{x:u,y:d}=_(a,f,s)),n=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:p}};async function E(e,t){var n;void 0===t&&(t={});let{x:o,y:r,platform:l,rects:i,elements:c,strategy:s}=e,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:p=!1,padding:m=0}=d(t,e),v=g(m),y=c[p?"floating"===f?"reference":"floating":f],h=b(await l.getClippingRect({element:null==(n=await (null==l.isElement?void 0:l.isElement(y)))||n?y:y.contextElement||await (null==l.getDocumentElement?void 0:l.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:s})),w="floating"===f?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,_=await (null==l.getOffsetParent?void 0:l.getOffsetParent(c.floating)),x=await (null==l.isElement?void 0:l.isElement(_))&&await (null==l.getScale?void 0:l.getScale(_))||{x:1,y:1},E=b(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:_,strategy:s}):w);return{top:(h.top-E.top+v.top)/x.y,bottom:(E.bottom-h.bottom+v.bottom)/x.y,left:(h.left-E.left+v.left)/x.x,right:(E.right-h.right+v.right)/x.x}}async function S(e,t){let{placement:n,platform:o,elements:r}=e,l=await (null==o.isRTL?void 0:o.isRTL(r.floating)),i=f(n),c=p(n),s="y"===y(n),a=["left","top"].includes(i)?-1:1,u=l&&s?-1:1,m=d(t,e),{mainAxis:v,crossAxis:h,alignmentAxis:w}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return c&&"number"==typeof w&&(h="end"===c?-1*w:w),s?{x:h*u,y:v*a}:{x:v*a,y:h*u}}function A(){return"undefined"!=typeof window}function R(e){return k(e)?(e.nodeName||"").toLowerCase():"#document"}function O(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function T(e){var t;return null==(t=(k(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function k(e){return!!A()&&(e instanceof Node||e instanceof O(e).Node)}function L(e){return!!A()&&(e instanceof Element||e instanceof O(e).Element)}function C(e){return!!A()&&(e instanceof HTMLElement||e instanceof O(e).HTMLElement)}function j(e){return!!A()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof O(e).ShadowRoot)}function N(e){let{overflow:t,overflowX:n,overflowY:o,display:r}=$(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function P(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function D(e){let t=M(),n=L(e)?$(e):e;return["transform","translate","scale","rotate","perspective"].some(e=>!!n[e]&&"none"!==n[e])||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","translate","scale","rotate","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function M(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function I(e){return["html","body","#document"].includes(R(e))}function $(e){return O(e).getComputedStyle(e)}function B(e){return L(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function H(e){if("html"===R(e))return e;let t=e.assignedSlot||e.parentNode||j(e)&&e.host||T(e);return j(t)?t.host:t}function W(e,t,n){var o;void 0===t&&(t=[]),void 0===n&&(n=!0);let r=function e(t){let n=H(t);return I(n)?t.ownerDocument?t.ownerDocument.body:t.body:C(n)&&N(n)?n:e(n)}(e),l=r===(null==(o=e.ownerDocument)?void 0:o.body),i=O(r);if(l){let e=F(i);return t.concat(i,i.visualViewport||[],N(r)?r:[],e&&n?W(e):[])}return t.concat(r,W(r,[],n))}function F(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function z(e){let t=$(e),n=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=C(e),l=r?e.offsetWidth:n,c=r?e.offsetHeight:o,s=i(n)!==l||i(o)!==c;return s&&(n=l,o=c),{width:n,height:o,$:s}}function V(e){return L(e)?e:e.contextElement}function q(e){let t=V(e);if(!C(t))return s(1);let n=t.getBoundingClientRect(),{width:o,height:r,$:l}=z(t),c=(l?i(n.width):n.width)/o,a=(l?i(n.height):n.height)/r;return c&&Number.isFinite(c)||(c=1),a&&Number.isFinite(a)||(a=1),{x:c,y:a}}let K=s(0);function Z(e){let t=O(e);return M()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:K}function X(e,t,n,o){var r;void 0===t&&(t=!1),void 0===n&&(n=!1);let l=e.getBoundingClientRect(),i=V(e),c=s(1);t&&(o?L(o)&&(c=q(o)):c=q(e));let a=(void 0===(r=n)&&(r=!1),o&&(!r||o===O(i))&&r)?Z(i):s(0),u=(l.left+a.x)/c.x,d=(l.top+a.y)/c.y,f=l.width/c.x,p=l.height/c.y;if(i){let e=O(i),t=o&&L(o)?O(o):o,n=e,r=F(n);for(;r&&o&&t!==n;){let e=q(r),t=r.getBoundingClientRect(),o=$(r),l=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,i=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;u*=e.x,d*=e.y,f*=e.x,p*=e.y,u+=l,d+=i,r=F(n=O(r))}}return b({width:f,height:p,x:u,y:d})}function Y(e,t){let n=B(e).scrollLeft;return t?t.left+n:X(T(e)).left+n}function G(e,t,n){void 0===n&&(n=!1);let o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-(n?0:Y(e,o)),y:o.top+t.scrollTop}}function U(e,t,n){let o;if("viewport"===t)o=function(e,t){let n=O(e),o=T(e),r=n.visualViewport,l=o.clientWidth,i=o.clientHeight,c=0,s=0;if(r){l=r.width,i=r.height;let e=M();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,s=r.offsetTop)}return{width:l,height:i,x:c,y:s}}(e,n);else if("document"===t)o=function(e){let t=T(e),n=B(e),o=e.ownerDocument.body,r=l(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=l(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),c=-n.scrollLeft+Y(e),s=-n.scrollTop;return"rtl"===$(o).direction&&(c+=l(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:c,y:s}}(T(e));else if(L(t))o=function(e,t){let n=X(e,!0,"fixed"===t),o=n.top+e.clientTop,r=n.left+e.clientLeft,l=C(e)?q(e):s(1),i=e.clientWidth*l.x;return{width:i,height:e.clientHeight*l.y,x:r*l.x,y:o*l.y}}(t,n);else{let n=Z(e);o={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return b(o)}function Q(e){return"static"===$(e).position}function J(e,t){if(!C(e)||"fixed"===$(e).position)return null;if(t)return t(e);let n=e.offsetParent;return T(e)===n&&(n=n.ownerDocument.body),n}function ee(e,t){let n=O(e);if(P(e))return n;if(!C(e)){let t=H(e);for(;t&&!I(t);){if(L(t)&&!Q(t))return t;t=H(t)}return n}let o=J(e,t);for(;o&&["table","td","th"].includes(R(o))&&Q(o);)o=J(o,t);return o&&I(o)&&Q(o)&&!D(o)?n:o||function(e){let t=H(e);for(;C(t)&&!I(t);){if(D(t))return t;if(P(t))break;t=H(t)}return null}(e)||n}let et=async function(e){let t=this.getOffsetParent||ee,n=this.getDimensions,o=await n(e.floating);return{reference:function(e,t,n){let o=C(t),r=T(t),l="fixed"===n,i=X(e,!0,l,t),c={scrollLeft:0,scrollTop:0},a=s(0);if(o||!o&&!l){if(("body"!==R(t)||N(r))&&(c=B(t)),o){let e=X(t,!0,l,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else r&&(a.x=Y(r))}let u=!r||o||l?s(0):G(r,c);return{x:i.left+c.scrollLeft-a.x-u.x,y:i.top+c.scrollTop-a.y-u.y,width:i.width,height:i.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},en={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e,l="fixed"===r,i=T(o),c=!!t&&P(t.floating);if(o===i||c&&l)return n;let a={scrollLeft:0,scrollTop:0},u=s(1),d=s(0),f=C(o);if((f||!f&&!l)&&(("body"!==R(o)||N(i))&&(a=B(o)),C(o))){let e=X(o);u=q(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}let p=!i||f||l?s(0):G(i,a,!0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-a.scrollLeft*u.x+d.x+p.x,y:n.y*u.y-a.scrollTop*u.y+d.y+p.y}},getDocumentElement:T,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:i}=e,c=[..."clippingAncestors"===n?P(t)?[]:function(e,t){let n=t.get(e);if(n)return n;let o=W(e,[],!1).filter(e=>L(e)&&"body"!==R(e)),r=null,l="fixed"===$(e).position,i=l?H(e):e;for(;L(i)&&!I(i);){let t=$(i),n=D(i);n||"fixed"!==t.position||(r=null),(l?!n&&!r:!n&&"static"===t.position&&!!r&&["absolute","fixed"].includes(r.position)||N(i)&&!n&&function e(t,n){let o=H(t);return!(o===n||!L(o)||I(o))&&("fixed"===$(o).position||e(o,n))}(e,i))?o=o.filter(e=>e!==i):r=t,i=H(i)}return t.set(e,o),o}(t,this._c):[].concat(n),o],s=c[0],a=c.reduce((e,n)=>{let o=U(t,n,i);return e.top=l(o.top,e.top),e.right=r(o.right,e.right),e.bottom=r(o.bottom,e.bottom),e.left=l(o.left,e.left),e},U(t,s,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:ee,getElementRects:et,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=z(e);return{width:t,height:n}},getScale:q,isElement:L,isRTL:function(e){return"rtl"===$(e).direction}};function eo(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let er=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,o;let{x:r,y:l,placement:i,middlewareData:c}=t,s=await S(t,e);return i===(null==(n=c.offset)?void 0:n.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:r+s.x,y:l+s.y,data:{...s,placement:i}}}}},el=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:o,placement:i}=t,{mainAxis:c=!0,crossAxis:s=!1,limiter:a={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...u}=d(e,t),p={x:n,y:o},v=await E(t,u),h=y(f(i)),w=m(h),g=p[w],b=p[h];if(c){let e="y"===w?"top":"left",t="y"===w?"bottom":"right",n=g+v[e],o=g-v[t];g=l(n,r(g,o))}if(s){let e="y"===h?"top":"left",t="y"===h?"bottom":"right",n=b+v[e],o=b-v[t];b=l(n,r(b,o))}let _=a.fn({...t,[w]:g,[h]:b});return{..._,data:{x:_.x-n,y:_.y-o,enabled:{[w]:c,[h]:s}}}}}},ei=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,o,r,l,i;let{placement:c,middlewareData:s,rects:a,initialPlacement:u,platform:g,elements:b}=t,{mainAxis:_=!0,crossAxis:x=!0,fallbackPlacements:S,fallbackStrategy:A="bestFit",fallbackAxisSideDirection:R="none",flipAlignment:O=!0,...T}=d(e,t);if(null!=(n=s.arrow)&&n.alignmentOffset)return{};let k=f(c),L=y(u),C=f(u)===u,j=await (null==g.isRTL?void 0:g.isRTL(b.floating)),N=S||(C||!O?[w(u)]:function(e){let t=w(e);return[h(e),t,h(t)]}(u)),P="none"!==R;!S&&P&&N.push(...function(e,t,n,o){let r=p(e),l=function(e,t,n){let o=["left","right"],r=["right","left"];switch(e){case"top":case"bottom":if(n)return t?r:o;return t?o:r;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(f(e),"start"===n,o);return r&&(l=l.map(e=>e+"-"+r),t&&(l=l.concat(l.map(h)))),l}(u,O,R,j));let D=[u,...N],M=await E(t,T),I=[],$=(null==(o=s.flip)?void 0:o.overflows)||[];if(_&&I.push(M[k]),x){let e=function(e,t,n){void 0===n&&(n=!1);let o=p(e),r=m(y(e)),l=v(r),i="x"===r?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[l]>t.floating[l]&&(i=w(i)),[i,w(i)]}(c,a,j);I.push(M[e[0]],M[e[1]])}if($=[...$,{placement:c,overflows:I}],!I.every(e=>e<=0)){let e=((null==(r=s.flip)?void 0:r.index)||0)+1,t=D[e];if(t)return{data:{index:e,overflows:$},reset:{placement:t}};let n=null==(l=$.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:l.placement;if(!n)switch(A){case"bestFit":{let e=null==(i=$.filter(e=>{if(P){let t=y(e.placement);return t===L||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:i[0];e&&(n=e);break}case"initialPlacement":n=u}if(c!==n)return{reset:{placement:n}}}return{}}}},ec=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:o,placement:i,rects:c,platform:s,elements:a,middlewareData:u}=t,{element:f,padding:h=0}=d(e,t)||{};if(null==f)return{};let w=g(h),b={x:n,y:o},_=m(y(i)),x=v(_),E=await s.getDimensions(f),S="y"===_,A=S?"clientHeight":"clientWidth",R=c.reference[x]+c.reference[_]-b[_]-c.floating[x],O=b[_]-c.reference[_],T=await (null==s.getOffsetParent?void 0:s.getOffsetParent(f)),k=T?T[A]:0;k&&await (null==s.isElement?void 0:s.isElement(T))||(k=a.floating[A]||c.floating[x]);let L=k/2-E[x]/2-1,C=r(w[S?"top":"left"],L),j=r(w[S?"bottom":"right"],L),N=k-E[x]-j,P=k/2-E[x]/2+(R/2-O/2),D=l(C,r(P,N)),M=!u.arrow&&null!=p(i)&&P!==D&&c.reference[x]/2-(P<C?C:j)-E[x]/2<0,I=M?P<C?P-C:P-N:0;return{[_]:b[_]+I,data:{[_]:D,centerOffset:P-D-I,...M&&{alignmentOffset:I}},reset:M}}}),es=(e,t,n)=>{let o=new Map,r={platform:en,...n},l={...r.platform,_c:o};return x(e,t,{...r,platform:l})};var ea=n(36760),eu=n(40257);let ed={core:!1,base:!1};function ef({css:e,id:t="react-tooltip-base-styles",type:n="base",ref:o}){var r,l;if(!e||"undefined"==typeof document||ed[n]||"core"===n&&void 0!==eu&&(null===(r=null==eu?void 0:eu.env)||void 0===r?void 0:r.REACT_TOOLTIP_DISABLE_CORE_STYLES)||"base"!==n&&void 0!==eu&&(null===(l=null==eu?void 0:eu.env)||void 0===l?void 0:l.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===n&&(t="react-tooltip-core-styles"),o||(o={});let{insertAt:i}=o;if(document.getElementById(t))return;let c=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.id=t,s.type="text/css","top"===i&&c.firstChild?c.insertBefore(s,c.firstChild):c.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),ed[n]=!0}let ep=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:n=null,place:o="top",offset:r=10,strategy:l="absolute",middlewares:i=[er(Number(r)),ei({fallbackAxisSideDirection:"start"}),el({padding:5})],border:c})=>e&&null!==t?n?(i.push(ec({element:n,padding:5})),es(e,t,{placement:o,strategy:l,middleware:i}).then(({x:e,y:t,placement:n,middlewareData:o})=>{var r,l;let i={left:`${e}px`,top:`${t}px`,border:c},{x:s,y:a}=null!==(r=o.arrow)&&void 0!==r?r:{x:0,y:0},u=null!==(l=({top:"bottom",right:"left",bottom:"top",left:"right"})[n.split("-")[0]])&&void 0!==l?l:"bottom",d=0;if(c){let e=`${c}`.match(/(\d+)px/);d=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:i,tooltipArrowStyles:{left:null!=s?`${s}px`:"",top:null!=a?`${a}px`:"",right:"",bottom:"",...c&&{borderBottom:c,borderRight:c},[u]:`-${4+d}px`},place:n}})):es(e,t,{placement:"bottom",strategy:l,middleware:i}).then(({x:e,y:t,placement:n})=>({tooltipStyles:{left:`${e}px`,top:`${t}px`},tooltipArrowStyles:{},place:n})):{tooltipStyles:{},tooltipArrowStyles:{},place:o},em=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),ev=(e,t,n)=>{let o=null,r=function(...r){let l=()=>{o=null,n||e.apply(this,r)};n&&!o&&(e.apply(this,r),o=setTimeout(l,t)),n||(o&&clearTimeout(o),o=setTimeout(l,t))};return r.cancel=()=>{o&&(clearTimeout(o),o=null)},r},ey=e=>null!==e&&!Array.isArray(e)&&"object"==typeof e,eh=(e,t)=>{if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((e,n)=>eh(e,t[n]));if(Array.isArray(e)!==Array.isArray(t))return!1;if(!ey(e)||!ey(t))return e===t;let n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&n.every(n=>eh(e[n],t[n]))},ew=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;let t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some(e=>{let n=t.getPropertyValue(e);return"auto"===n||"scroll"===n})},eg=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(ew(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},eb="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,e_=e=>{e.current&&(clearTimeout(e.current),e.current=null)},ex={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},eE=(0,o.createContext)({getTooltipData:()=>ex});function eS(e="DEFAULT_TOOLTIP_ID"){return(0,o.useContext)(eE).getTooltipData(e)}var eA={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},eR={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};let eO=({forwardRef:e,id:t,className:n,classNameArrow:i,variant:s="dark",anchorId:a,anchorSelect:u,place:d="top",offset:f=10,events:p=["hover"],openOnClick:m=!1,positionStrategy:v="absolute",middlewares:y,wrapper:h,delayShow:w=0,delayHide:g=0,float:b=!1,hidden:_=!1,noArrow:x=!1,clickable:E=!1,closeOnEsc:S=!1,closeOnScroll:A=!1,closeOnResize:R=!1,openEvents:O,closeEvents:k,globalCloseEvents:L,imperativeModeOnly:C,style:j,position:N,afterShow:P,afterHide:D,disableTooltip:M,content:I,contentWrapperRef:$,isOpen:B,defaultIsOpen:H=!1,setIsOpen:F,activeAnchor:z,setActiveAnchor:q,border:K,opacity:Z,arrowColor:Y,role:G="tooltip"})=>{var U;let Q=(0,o.useRef)(null),J=(0,o.useRef)(null),ee=(0,o.useRef)(null),et=(0,o.useRef)(null),en=(0,o.useRef)(null),[er,el]=(0,o.useState)({tooltipStyles:{},tooltipArrowStyles:{},place:d}),[ei,ec]=(0,o.useState)(!1),[es,eu]=(0,o.useState)(!1),[ed,ef]=(0,o.useState)(null),em=(0,o.useRef)(!1),ey=(0,o.useRef)(null),{anchorRefs:ew,setActiveAnchor:ex}=eS(t),eE=(0,o.useRef)(!1),[eO,eT]=(0,o.useState)([]),ek=(0,o.useRef)(!1),eL=m||p.includes("click"),eC=eL||(null==O?void 0:O.click)||(null==O?void 0:O.dblclick)||(null==O?void 0:O.mousedown),ej=O?{...O}:{mouseover:!0,focus:!0,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1};!O&&eL&&Object.assign(ej,{mouseenter:!1,focus:!1,mouseover:!1,click:!0});let eN=k?{...k}:{mouseout:!0,blur:!0,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1};!k&&eL&&Object.assign(eN,{mouseleave:!1,blur:!1,mouseout:!1});let eP=L?{...L}:{escape:S||!1,scroll:A||!1,resize:R||!1,clickOutsideAnchor:eC||!1};C&&(Object.assign(ej,{mouseenter:!1,focus:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(eN,{mouseleave:!1,blur:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(eP,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),eb(()=>(ek.current=!0,()=>{ek.current=!1}),[]);let eD=e=>{ek.current&&(e&&eu(!0),setTimeout(()=>{ek.current&&(null==F||F(e),void 0===B&&ec(e))},10))};(0,o.useEffect)(()=>{if(void 0===B)return()=>null;B&&eu(!0);let e=setTimeout(()=>{ec(B)},10);return()=>{clearTimeout(e)}},[B]),(0,o.useEffect)(()=>{if(ei!==em.current){if(e_(en),em.current=ei,ei)null==P||P();else{let e=(e=>{let t=e.match(/^([\d.]+)(ms|s)$/);if(!t)return 0;let[,n,o]=t;return Number(n)*("ms"===o?1:1e3)})(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));en.current=setTimeout(()=>{eu(!1),ef(null),null==D||D()},e+25)}}},[ei]);let eM=e=>{el(t=>eh(t,e)?t:e)},eI=(e=w)=>{e_(ee),es?eD(!0):ee.current=setTimeout(()=>{eD(!0)},e)},e$=(e=g)=>{e_(et),et.current=setTimeout(()=>{eE.current||eD(!1)},e)},eB=e=>{var t;if(!e)return;let n=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==n?void 0:n.isConnected))return q(null),void ex({current:null});w?eI():eD(!0),q(n),ex({current:n}),e_(et)},eH=()=>{E?e$(g||100):g?e$():eD(!1),e_(ee)},eW=({x:e,y:t})=>{var n;ep({place:null!==(n=null==ed?void 0:ed.place)&&void 0!==n?n:d,offset:f,elementReference:{getBoundingClientRect:()=>({x:e,y:t,width:0,height:0,top:t,left:e,right:e,bottom:t})},tooltipReference:Q.current,tooltipArrowReference:J.current,strategy:v,middlewares:y,border:K}).then(e=>{eM(e)})},eF=e=>{if(!e)return;let t={x:e.clientX,y:e.clientY};eW(t),ey.current=t},ez=e=>{var t;if(!ei)return;let n=e.target;n.isConnected&&(null===(t=Q.current)||void 0===t||!t.contains(n))&&([document.querySelector(`[id='${a}']`),...eO].some(e=>null==e?void 0:e.contains(n))||(eD(!1),e_(ee)))},eV=ev(eB,50,!0),eq=ev(eH,50,!0),eK=e=>{eq.cancel(),eV(e)},eZ=()=>{eV.cancel(),eq()},eX=(0,o.useCallback)(()=>{var e,t;let n=null!==(e=null==ed?void 0:ed.position)&&void 0!==e?e:N;n?eW(n):b?ey.current&&eW(ey.current):(null==z?void 0:z.isConnected)&&ep({place:null!==(t=null==ed?void 0:ed.place)&&void 0!==t?t:d,offset:f,elementReference:z,tooltipReference:Q.current,tooltipArrowReference:J.current,strategy:v,middlewares:y,border:K}).then(e=>{ek.current&&eM(e)})},[ei,z,I,j,d,null==ed?void 0:ed.place,f,v,N,null==ed?void 0:ed.position,b]);(0,o.useEffect)(()=>{var e,t;let n=new Set(ew);eO.forEach(e=>{(null==M?void 0:M(e))||n.add({current:e})});let o=document.querySelector(`[id='${a}']`);!o||(null==M?void 0:M(o))||n.add({current:o});let i=()=>{eD(!1)},s=eg(z),u=eg(Q.current);eP.scroll&&(window.addEventListener("scroll",i),null==s||s.addEventListener("scroll",i),null==u||u.addEventListener("scroll",i));let d=null;eP.resize?window.addEventListener("resize",i):z&&Q.current&&(d=function(e,t,n,o){let i;void 0===o&&(o={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:u="function"==typeof ResizeObserver,layoutShift:d="function"==typeof IntersectionObserver,animationFrame:f=!1}=o,p=V(e),m=s||a?[...p?W(p):[],...W(t)]:[];m.forEach(e=>{s&&e.addEventListener("scroll",n,{passive:!0}),a&&e.addEventListener("resize",n)});let v=p&&d?function(e,t){let n,o=null,i=T(e);function s(){var e;clearTimeout(n),null==(e=o)||e.disconnect(),o=null}return function a(u,d){void 0===u&&(u=!1),void 0===d&&(d=1),s();let f=e.getBoundingClientRect(),{left:p,top:m,width:v,height:y}=f;if(u||t(),!v||!y)return;let h=c(m),w=c(i.clientWidth-(p+v)),g={rootMargin:-h+"px "+-w+"px "+-c(i.clientHeight-(m+y))+"px "+-c(p)+"px",threshold:l(0,r(1,d))||1},b=!0;function _(t){let o=t[0].intersectionRatio;if(o!==d){if(!b)return a();o?a(!1,o):n=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==o||eo(f,e.getBoundingClientRect())||a(),b=!1}try{o=new IntersectionObserver(_,{...g,root:i.ownerDocument})}catch(e){o=new IntersectionObserver(_,g)}o.observe(e)}(!0),s}(p,n):null,y=-1,h=null;u&&(h=new ResizeObserver(e=>{let[o]=e;o&&o.target===p&&h&&(h.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var e;null==(e=h)||e.observe(t)})),n()}),p&&!f&&h.observe(p),h.observe(t));let w=f?X(e):null;return f&&function t(){let o=X(e);w&&!eo(w,o)&&n(),w=o,i=requestAnimationFrame(t)}(),n(),()=>{var e;m.forEach(e=>{s&&e.removeEventListener("scroll",n),a&&e.removeEventListener("resize",n)}),null==v||v(),null==(e=h)||e.disconnect(),h=null,f&&cancelAnimationFrame(i)}}(z,Q.current,eX,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));let f=e=>{"Escape"===e.key&&eD(!1)};eP.escape&&window.addEventListener("keydown",f),eP.clickOutsideAnchor&&window.addEventListener("click",ez);let p=[],m=e=>{ei&&(null==e?void 0:e.target)===z||eB(e)},v=e=>{ei&&(null==e?void 0:e.target)===z&&eH()},y=["mouseover","mouseout","mouseenter","mouseleave","focus","blur"],h=["click","dblclick","mousedown","mouseup"];Object.entries(ej).forEach(([e,t])=>{t&&(y.includes(e)?p.push({event:e,listener:eK}):h.includes(e)&&p.push({event:e,listener:m}))}),Object.entries(eN).forEach(([e,t])=>{t&&(y.includes(e)?p.push({event:e,listener:eZ}):h.includes(e)&&p.push({event:e,listener:v}))}),b&&p.push({event:"pointermove",listener:eF});let w=()=>{eE.current=!0},g=()=>{eE.current=!1,eH()};return E&&!eC&&(null===(e=Q.current)||void 0===e||e.addEventListener("mouseenter",w),null===(t=Q.current)||void 0===t||t.addEventListener("mouseleave",g)),p.forEach(({event:e,listener:t})=>{n.forEach(n=>{var o;null===(o=n.current)||void 0===o||o.addEventListener(e,t)})}),()=>{var e,t;eP.scroll&&(window.removeEventListener("scroll",i),null==s||s.removeEventListener("scroll",i),null==u||u.removeEventListener("scroll",i)),eP.resize?window.removeEventListener("resize",i):null==d||d(),eP.clickOutsideAnchor&&window.removeEventListener("click",ez),eP.escape&&window.removeEventListener("keydown",f),E&&!eC&&(null===(e=Q.current)||void 0===e||e.removeEventListener("mouseenter",w),null===(t=Q.current)||void 0===t||t.removeEventListener("mouseleave",g)),p.forEach(({event:e,listener:t})=>{n.forEach(n=>{var o;null===(o=n.current)||void 0===o||o.removeEventListener(e,t)})})}},[z,eX,es,ew,eO,O,k,L,eL,w,g]),(0,o.useEffect)(()=>{var e,n;let o=null!==(n=null!==(e=null==ed?void 0:ed.anchorSelect)&&void 0!==e?e:u)&&void 0!==n?n:"";!o&&t&&(o=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`);let r=new MutationObserver(e=>{let n=[],r=[];e.forEach(e=>{if("attributes"===e.type&&"data-tooltip-id"===e.attributeName&&(e.target.getAttribute("data-tooltip-id")===t?n.push(e.target):e.oldValue===t&&r.push(e.target)),"childList"===e.type){if(z){let t=[...e.removedNodes].filter(e=>1===e.nodeType);if(o)try{r.push(...t.filter(e=>e.matches(o))),r.push(...t.flatMap(e=>[...e.querySelectorAll(o)]))}catch(e){}t.some(e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,z))&&(eu(!1),eD(!1),q(null),e_(ee),e_(et),!0)})}if(o)try{let t=[...e.addedNodes].filter(e=>1===e.nodeType);n.push(...t.filter(e=>e.matches(o))),n.push(...t.flatMap(e=>[...e.querySelectorAll(o)]))}catch(e){}}}),(n.length||r.length)&&eT(e=>[...e.filter(e=>!r.includes(e)),...n])});return r.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{r.disconnect()}},[t,u,null==ed?void 0:ed.anchorSelect,z]),(0,o.useEffect)(()=>{eX()},[eX]),(0,o.useEffect)(()=>{if(!(null==$?void 0:$.current))return()=>null;let e=new ResizeObserver(()=>{setTimeout(()=>eX())});return e.observe($.current),()=>{e.disconnect()}},[I,null==$?void 0:$.current]),(0,o.useEffect)(()=>{var e;let t=document.querySelector(`[id='${a}']`),n=[...eO,t];z&&n.includes(z)||q(null!==(e=eO[0])&&void 0!==e?e:t)},[a,eO,z]),(0,o.useEffect)(()=>(H&&eD(!0),()=>{e_(ee),e_(et)}),[]),(0,o.useEffect)(()=>{var e;let n=null!==(e=null==ed?void 0:ed.anchorSelect)&&void 0!==e?e:u;if(!n&&t&&(n=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`),n)try{let e=Array.from(document.querySelectorAll(n));eT(e)}catch(e){eT([])}},[t,u,null==ed?void 0:ed.anchorSelect]),(0,o.useEffect)(()=>{ee.current&&(e_(ee),eI(w))},[w]);let eY=null!==(U=null==ed?void 0:ed.content)&&void 0!==U?U:I,eG=ei&&Object.keys(er.tooltipStyles).length>0;return(0,o.useImperativeHandle)(e,()=>({open:e=>{if(null==e?void 0:e.anchorSelect)try{document.querySelector(e.anchorSelect)}catch(t){return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)}ef(null!=e?e:null),(null==e?void 0:e.delay)?eI(e.delay):eD(!0)},close:e=>{(null==e?void 0:e.delay)?e$(e.delay):eD(!1)},activeAnchor:z,place:er.place,isOpen:!!(es&&!_&&eY&&eG)})),es&&!_&&eY?o.createElement(h,{id:t,role:G,className:ea("react-tooltip",eA.tooltip,eR.tooltip,eR[s],n,`react-tooltip__place-${er.place}`,eA[eG?"show":"closing"],eG?"react-tooltip__show":"react-tooltip__closing","fixed"===v&&eA.fixed,E&&eA.clickable),onTransitionEnd:e=>{e_(en),ei||"opacity"!==e.propertyName||(eu(!1),ef(null),null==D||D())},style:{...j,...er.tooltipStyles,opacity:void 0!==Z&&eG?Z:void 0},ref:Q},eY,o.createElement(h,{className:ea("react-tooltip-arrow",eA.arrow,eR.arrow,i,x&&eA.noArrow),style:{...er.tooltipArrowStyles,background:Y?`linear-gradient(to right bottom, transparent 50%, ${Y} 50%)`:void 0},ref:J})):null},eT=({content:e})=>o.createElement("span",{dangerouslySetInnerHTML:{__html:e}}),ek=o.forwardRef(({id:e,anchorId:t,anchorSelect:n,content:r,html:l,render:i,className:c,classNameArrow:s,variant:a="dark",place:u="top",offset:d=10,wrapper:f="div",children:p=null,events:m=["hover"],openOnClick:v=!1,positionStrategy:y="absolute",middlewares:h,delayShow:w=0,delayHide:g=0,float:b=!1,hidden:_=!1,noArrow:x=!1,clickable:E=!1,closeOnEsc:S=!1,closeOnScroll:A=!1,closeOnResize:R=!1,openEvents:O,closeEvents:T,globalCloseEvents:k,imperativeModeOnly:L=!1,style:C,position:j,isOpen:N,defaultIsOpen:P=!1,disableStyleInjection:D=!1,border:M,opacity:I,arrowColor:$,setIsOpen:B,afterShow:H,afterHide:W,disableTooltip:F,role:z="tooltip"},V)=>{let[q,K]=(0,o.useState)(r),[Z,X]=(0,o.useState)(l),[Y,G]=(0,o.useState)(u),[U,Q]=(0,o.useState)(a),[J,ee]=(0,o.useState)(d),[et,en]=(0,o.useState)(w),[eo,er]=(0,o.useState)(g),[el,ei]=(0,o.useState)(b),[ec,es]=(0,o.useState)(_),[eu,ed]=(0,o.useState)(f),[ef,ep]=(0,o.useState)(m),[ev,ey]=(0,o.useState)(y),[eh,ew]=(0,o.useState)(null),[eg,eb]=(0,o.useState)(null),e_=(0,o.useRef)(D),{anchorRefs:ex,activeAnchor:eE}=eS(e),eA=e=>null==e?void 0:e.getAttributeNames().reduce((t,n)=>{var o;return n.startsWith("data-tooltip-")&&(t[n.replace(/^data-tooltip-/,"")]=null!==(o=null==e?void 0:e.getAttribute(n))&&void 0!==o?o:null),t},{}),eR=e=>{let t={place:e=>{G(null!=e?e:u)},content:e=>{K(null!=e?e:r)},html:e=>{X(null!=e?e:l)},variant:e=>{Q(null!=e?e:a)},offset:e=>{ee(null===e?d:Number(e))},wrapper:e=>{ed(null!=e?e:f)},events:e=>{let t=null==e?void 0:e.split(" ");ep(null!=t?t:m)},"position-strategy":e=>{ey(null!=e?e:y)},"delay-show":e=>{en(null===e?w:Number(e))},"delay-hide":e=>{er(null===e?g:Number(e))},float:e=>{ei(null===e?b:"true"===e)},hidden:e=>{es(null===e?_:"true"===e)},"class-name":e=>{ew(e)}};Object.values(t).forEach(e=>e(null)),Object.entries(e).forEach(([e,n])=>{var o;null===(o=t[e])||void 0===o||o.call(t,n)})};(0,o.useEffect)(()=>{K(r)},[r]),(0,o.useEffect)(()=>{X(l)},[l]),(0,o.useEffect)(()=>{G(u)},[u]),(0,o.useEffect)(()=>{Q(a)},[a]),(0,o.useEffect)(()=>{ee(d)},[d]),(0,o.useEffect)(()=>{en(w)},[w]),(0,o.useEffect)(()=>{er(g)},[g]),(0,o.useEffect)(()=>{ei(b)},[b]),(0,o.useEffect)(()=>{es(_)},[_]),(0,o.useEffect)(()=>{ey(y)},[y]),(0,o.useEffect)(()=>{e_.current!==D&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")},[D]),(0,o.useEffect)(()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===D,disableBase:D}}))},[]),(0,o.useEffect)(()=>{var o;let r=new Set(ex),l=n;if(!l&&e&&(l=`[data-tooltip-id='${e.replace(/'/g,"\\'")}']`),l)try{document.querySelectorAll(l).forEach(e=>{r.add({current:e})})}catch(e){console.warn(`[react-tooltip] "${l}" is not a valid CSS selector`)}let i=document.querySelector(`[id='${t}']`);if(i&&r.add({current:i}),!r.size)return()=>null;let c=null!==(o=null!=eg?eg:i)&&void 0!==o?o:eE.current,s=new MutationObserver(e=>{e.forEach(e=>{var t;c&&"attributes"===e.type&&(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-"))&&eR(eA(c))})});return c&&(eR(eA(c)),s.observe(c,{attributes:!0,childList:!1,subtree:!1})),()=>{s.disconnect()}},[ex,eE,eg,t,n]),(0,o.useEffect)(()=>{(null==C?void 0:C.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),M&&!em("border",`${M}`)&&console.warn(`[react-tooltip] "${M}" is not a valid \`border\`.`),(null==C?void 0:C.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),I&&!em("opacity",`${I}`)&&console.warn(`[react-tooltip] "${I}" is not a valid \`opacity\`.`)},[]);let ek=p,eL=(0,o.useRef)(null);if(i){let e=i({content:(null==eg?void 0:eg.getAttribute("data-tooltip-content"))||q||null,activeAnchor:eg});ek=e?o.createElement("div",{ref:eL,className:"react-tooltip-content-wrapper"},e):null}else q&&(ek=q);Z&&(ek=o.createElement(eT,{content:Z}));let eC={forwardRef:V,id:e,anchorId:t,anchorSelect:n,className:ea(c,eh),classNameArrow:s,content:ek,contentWrapperRef:eL,place:Y,variant:U,offset:J,wrapper:eu,events:ef,openOnClick:v,positionStrategy:ev,middlewares:h,delayShow:et,delayHide:eo,float:el,hidden:ec,noArrow:x,clickable:E,closeOnEsc:S,closeOnScroll:A,closeOnResize:R,openEvents:O,closeEvents:T,globalCloseEvents:k,imperativeModeOnly:L,style:C,position:j,isOpen:N,defaultIsOpen:P,border:M,opacity:I,arrowColor:$,setIsOpen:B,afterShow:H,afterHide:W,disableTooltip:F,activeAnchor:eg,setActiveAnchor:e=>eb(e),role:z};return o.createElement(eO,{...eC})});"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",e=>{e.detail.disableCore||ef({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),e.detail.disableBase||ef({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"})})},83003:function(e,t,n){"use strict";n.d(t,{Z:function(){return o.S}});var o=n(64897)}}]);