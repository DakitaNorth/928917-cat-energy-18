!function(e){var t,n,s,r=navigator.userAgent;function i(e){var t,s,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=n.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,s=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=s}))}function c(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)i(t[e])}function a(){clearTimeout(t),t=setTimeout(c,99)}function u(){a(),s&&s.addListener&&s.addListener(a)}e.HTMLPictureElement&&/ecko/.test(r)&&r.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(n=document.createElement("source"),s=e.matchMedia&&matchMedia("(orientation: landscape)"),n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?u():document.addEventListener("DOMContentLoaded",u),a))}(window),function(e,i,o){"use strict";var n,l,u;i.createElement("picture");function t(){}function s(e,t,s,r){e.addEventListener?e.addEventListener(t,s,r||!1):e.attachEvent&&e.attachEvent("on"+t,s)}function r(t){var s={};return function(e){return e in s||(s[e]=t(e)),s[e]}}var E={},c=!1,a=i.createElement("img"),f=a.getAttribute,d=a.setAttribute,p=a.removeAttribute,A=i.documentElement,m={},z={algorithm:""},h="data-pfsrc",g=h+"set",v=navigator.userAgent,b=/rident/.test(v)||/ecko/.test(v)&&v.match(/rv\:(\d+)/)&&35<RegExp.$1,T="currentSrc",w=/\s+\+?\d+(e\d+)?w/,S=/(\([^)]+\))?\s*(.+)/,x=e.picturefillCFG,y="font-size:100%!important;",C=!0,R={},L={},M=e.devicePixelRatio,P={px:1,in:96},D=i.createElement("a"),B=!1,I=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,$=/^[^ \t\n\r\u000c]+/,k=/[,]+$/,W=/^\d+$/,Q=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;function G(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function H(e,t){return e.w?(e.cWidth=E.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e}var F,N,O,q,j,V,_,K,J,X,Y,Z,ee,te,se,re,ne,ie,ce=(F=/^([\d\.]+)(em|vw|px)$/,N=r(function(e){return"return "+function(){for(var e=arguments,t=0,s=e[0];++t in e;)s=s.replace(e[t],e[++t]);return s}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var s;if(!(e in R))if(R[e]=!1,t&&(s=e.match(F)))R[e]=s[1]*P[s[2]];else try{R[e]=new Function("e",N(e))(P)}catch(e){}return R[e]}),ae=function(e){if(c){var t,s,r,n=e||{};if(n.elements&&1===n.elements.nodeType&&("IMG"===n.elements.nodeName.toUpperCase()?n.elements=[n.elements]:(n.context=n.elements,n.elements=null)),r=(t=n.elements||E.qsa(n.context||i,n.reevaluate||n.reselect?E.sel:E.selShort)).length){for(E.setupRun(n),B=!0,s=0;s<r;s++)E.fillImg(t[s],n);E.teardownRun(n)}}};function ue(e,t){return e.res-t.res}function oe(e,t){var s,r,n;if(e&&t)for(n=E.parseSet(t),e=E.makeUrl(e),s=0;s<n.length;s++)if(e===E.makeUrl(n[s].url)){r=n[s];break}return r}function le(e){var t,s,r,n,i,c,a,u=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,o=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(s=function(e){var t,s="",r=[],n=[],i=0,c=0,a=!1;function u(){s&&(r.push(s),s="")}function o(){r[0]&&(n.push(r),r=[])}for(;;){if(""===(t=e.charAt(c)))return u(),o(),n;if(a){if("*"===t&&"/"===e[c+1]){a=!1,c+=2,u();continue}c+=1}else{if(G(t)){if(e.charAt(c-1)&&G(e.charAt(c-1))||!s){c+=1;continue}if(0===i){u(),c+=1;continue}t=" "}else if("("===t)i+=1;else if(")"===t)--i;else{if(","===t){u(),o(),c+=1;continue}if("/"===t&&"*"===e.charAt(c+1)){a=!0,c+=2;continue}}s+=t,c+=1}}}(e)).length,t=0;t<r;t++)if(i=(n=s[t])[n.length-1],a=i,u.test(a)&&0<=parseFloat(a)||o.test(a)||"0"===a||"-0"===a||"+0"===a){if(c=i,n.pop(),0===n.length)return c;if(n=n.join(" "),E.matchesMedia(n))return c}return"100vw"}function fe(){2===j.width&&(E.supSizes=!0),l=E.supSrcset&&!E.supSizes,c=!0,setTimeout(ae)}e.console&&console.warn,T in a||(T="src"),m["image/jpeg"]=!0,m["image/gif"]=!0,m["image/png"]=!0,m["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),E.ns=("pf"+(new Date).getTime()).substr(0,9),E.supSrcset="srcset"in a,E.supSizes="sizes"in a,E.supPicture=!!e.HTMLPictureElement,E.supSrcset&&E.supPicture&&!E.supSizes&&(O=i.createElement("img"),a.srcset="data:,a",O.src="data:,a",E.supSrcset=a.complete===O.complete,E.supPicture=E.supSrcset&&E.supPicture),E.supSrcset&&!E.supSizes?(q="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",(j=i.createElement("img")).onload=fe,j.onerror=fe,j.setAttribute("sizes","9px"),j.srcset=q+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",j.src=q):c=!0,E.selShort="picture>img,img[srcset]",E.sel=E.selShort,E.cfg=z,E.DPR=M||1,E.u=P,E.types=m,E.setSize=t,E.makeUrl=r(function(e){return D.href=e,D.href}),E.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},E.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?E.matchesMedia=function(e){return!e||matchMedia(e).matches}:E.matchesMedia=E.mMQ,E.matchesMedia.apply(this,arguments)},E.mMQ=function(e){return!e||ce(e)},E.calcLength=function(e){var t=ce(e,!0)||!1;return t<0&&(t=!1),t},E.supportsType=function(e){return!e||m[e]},E.parseSize=r(function(e){var t=(e||"").match(S);return{media:t&&t[1],length:t&&t[2]}}),E.parseSet=function(e){return e.cands||(e.cands=function(r,f){function e(e){var t,s=e.exec(r.substring(c));if(s)return t=s[0],c+=t.length,t}var d,p,t,s,n,i=r.length,c=0,A=[];function a(){var e,t,s,r,n,i,c,a,u,o=!1,l={};for(r=0;r<p.length;r++)i=(n=p[r])[n.length-1],c=n.substring(0,n.length-1),a=parseInt(c,10),u=parseFloat(c),W.test(c)&&"w"===i?((e||t)&&(o=!0),0===a?o=!0:e=a):Q.test(c)&&"x"===i?((e||t||s)&&(o=!0),u<0?o=!0:t=u):W.test(c)&&"h"===i?((s||t)&&(o=!0),0===a?o=!0:s=a):o=!0;o||(l.url=d,e&&(l.w=e),t&&(l.d=t),s&&(l.h=s),s||t||e||(l.d=1),1===l.d&&(f.has1x=!0),l.set=f,A.push(l))}function u(){for(e(I),t="",s="in descriptor";;){if(n=r.charAt(c),"in descriptor"===s)if(G(n))t&&(p.push(t),t="",s="after descriptor");else{if(","===n)return c+=1,t&&p.push(t),void a();if("("===n)t+=n,s="in parens";else{if(""===n)return t&&p.push(t),void a();t+=n}}else if("in parens"===s)if(")"===n)t+=n,s="in descriptor";else{if(""===n)return p.push(t),void a();t+=n}else if("after descriptor"===s&&!G(n)){if(""===n)return void a();s="in descriptor",--c}c+=1}}for(;;){if(e(U),i<=c)return A;d=e($),p=[],","===d.slice(-1)?(d=d.replace(k,""),a()):u()}}(e.srcset,e)),e.cands},E.getEmValue=function(){var e;if(!n&&(e=i.body)){var t=i.createElement("div"),s=A.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",A.style.cssText=y,e.style.cssText=y,e.appendChild(t),n=t.offsetWidth,e.removeChild(t),n=parseFloat(n,10),A.style.cssText=s,e.style.cssText=r}return n||16},E.calcListLength=function(e){if(!(e in L)||z.uT){var t=E.calcLength(le(e));L[e]=t||P.width}return L[e]},E.setRes=function(e){var t;if(e)for(var s=0,r=(t=E.parseSet(e)).length;s<r;s++)H(t[s],e.sizes);return t},E.setRes.res=H,E.applySetCandidate=function(e,t){if(e.length){var s,r,n,i,c,a,u,o,l,f,d,p,A,m,h,g,v,w,S,x=t[E.ns],y=E.DPR;if(a=x.curSrc||t[T],(u=x.curCan||(f=t,d=a,!(p=e[0].set)&&d&&(p=(p=f[E.ns].sets)&&p[p.length-1]),(A=oe(d,p))&&(d=E.makeUrl(d),f[E.ns].curSrc=d,(f[E.ns].curCan=A).res||H(A,A.set.sizes)),A))&&u.set===e[0].set&&((l=b&&!t.complete&&u.res-.1>y)||(u.cached=!0,u.res>=y&&(c=u))),!c)for(e.sort(ue),c=e[(i=e.length)-1],r=0;r<i;r++)if((s=e[r]).res>=y){c=e[n=r-1]&&(l||a!==E.makeUrl(s.url))&&(m=e[n].res,h=s.res,g=y,v=e[n].cached,S=w=void 0,g<("saveData"===z.algorithm?2.7<m?g+1:(S=(h-g)*(w=Math.pow(m-.6,1.5)),v&&(S+=.1*w),m+S):1<g?Math.sqrt(m*h):m))?e[n]:s;break}c&&(o=E.makeUrl(c.url),x.curSrc=o,x.curCan=c,o!==a&&E.setSrc(t,c),E.setSize(t))}},E.setSrc=function(e,t){var s;e.src=t.url,"image/svg+xml"===t.set.type&&(s=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=s))},E.getSet=function(e){var t,s,r,n=!1,i=e[E.ns].sets;for(t=0;t<i.length&&!n;t++)if((s=i[t]).srcset&&E.matchesMedia(s.media)&&(r=E.supportsType(s.type))){"pending"===r&&(s=r),n=s;break}return n},E.parseSets=function(e,t,s){var r,n,i,c,a=t&&"PICTURE"===t.nodeName.toUpperCase(),u=e[E.ns];u.src!==o&&!s.src||(u.src=f.call(e,"src"),u.src?d.call(e,h,u.src):p.call(e,h)),u.srcset!==o&&!s.srcset&&E.supSrcset&&!e.srcset||(r=f.call(e,"srcset"),u.srcset=r,c=!0),u.sets=[],a&&(u.pic=!0,function(e,t){var s,r,n,i,c=e.getElementsByTagName("source");for(s=0,r=c.length;s<r;s++)(n=c[s])[E.ns]=!0,(i=n.getAttribute("srcset"))&&t.push({srcset:i,media:n.getAttribute("media"),type:n.getAttribute("type"),sizes:n.getAttribute("sizes")})}(t,u.sets)),u.srcset?(n={srcset:u.srcset,sizes:f.call(e,"sizes")},u.sets.push(n),(i=(l||u.src)&&w.test(u.srcset||""))||!u.src||oe(u.src,n)||n.has1x||(n.srcset+=", "+u.src,n.cands.push({url:u.src,d:1,set:n}))):u.src&&u.sets.push({srcset:u.src,sizes:null}),u.curCan=null,u.curSrc=o,u.supported=!(a||n&&!E.supSrcset||i&&!E.supSizes),c&&E.supSrcset&&!u.supported&&(r?(d.call(e,g,r),e.srcset=""):p.call(e,g)),u.supported&&!u.srcset&&(!u.src&&e.src||e.src!==E.makeUrl(u.src))&&(null===u.src?e.removeAttribute("src"):e.src=u.src),u.parsed=!0},E.fillImg=function(e,t){var s,r,n,i,c,a=t.reselect||t.reevaluate;e[E.ns]||(e[E.ns]={}),s=e[E.ns],!a&&s.evaled===u||(s.parsed&&!t.reevaluate||E.parseSets(e,e.parentNode,t),s.supported?s.evaled=u:(r=e,i=E.getSet(r),c=!1,"pending"!==i&&(c=u,i&&(n=E.setRes(i),E.applySetCandidate(n,r))),r[E.ns].evaled=c))},E.setupRun=function(){B&&!C&&M===e.devicePixelRatio||(C=!1,M=e.devicePixelRatio,R={},L={},E.DPR=M||1,P.width=Math.max(e.innerWidth||0,A.clientWidth),P.height=Math.max(e.innerHeight||0,A.clientHeight),P.vw=P.width/100,P.vh=P.height/100,u=[P.height,P.width,M].join("-"),P.em=E.getEmValue(),P.rem=P.em)},E.supPicture?(ae=t,E.fillImg=t):(Z=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=i.readyState||"";te=setTimeout(ee,"loading"===e?200:999),i.body&&(E.fillImgs(),(V=V||Z.test(e))&&clearTimeout(te))},te=setTimeout(ee,i.body?9:99),se=A.clientHeight,s(e,"resize",(_=function(){C=Math.max(e.innerWidth||0,A.clientWidth)!==P.width||A.clientHeight!==se,se=A.clientHeight,C&&E.fillImgs()},K=99,Y=function(){var e=new Date-X;e<K?J=setTimeout(Y,K-e):(J=null,_())},function(){X=new Date,J=J||setTimeout(Y,K)})),s(i,"readystatechange",ee)),E.picturefill=ae,E.fillImgs=ae,E.teardownRun=t,ae._=E,e.picturefillCFG={pf:E,push:function(e){var t=e.shift();"function"==typeof E[t]?E[t].apply(E,e):(z[t]=e[0],B&&E.fillImgs({reselect:!0}))}};for(;x&&x.length;)e.picturefillCFG.push(x.shift());e.picturefill=ae,"object"==typeof module&&"object"==typeof module.exports?module.exports=ae:"function"==typeof define&&define.amd&&define("picturefill",function(){return ae}),E.supPicture||(m["image/webp"]=(re="image/webp",ne="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(ie=new e.Image).onerror=function(){m[re]=!1,ae()},ie.onload=function(){m[re]=1===ie.width,ae()},ie.src=ne,"pending"))}(window,document);
