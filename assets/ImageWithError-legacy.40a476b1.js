!function(){function r(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,u,o=[],a=!0,i=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(o.push(e.value),!t||o.length!==t);a=!0);}catch(l){i=!0,u=l}finally{try{a||null==n.return||n.return()}finally{if(i)throw u}}return o}(r,n)||function(r,n){if(!r)return;if("string"==typeof r)return t(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}System.register(["./index-legacy.17196644.js"],(function(t){"use strict";var n,e,u,o,a;return{setters:[function(r){n=r.c,e=r.e,u=r.aa,o=r.al,a=r.S}],execute:function(){t("I",(function(t){var i=r(n(!1),2),l=i[0],c=i[1];return e(a,{get when(){return!l()},get fallback(){return t.fallbackErr},get children(){return e(u,o(t,{onError:function(){c(!0)}}))}})}))}}}))}();
