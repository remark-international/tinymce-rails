/**
 * TinyMCE version 6.6.0 (2023-07-12)
 */
!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager");const e=t=>e=>(t=>{const e=typeof t;return null===t?"null":"object"===e&&Array.isArray(t)?"array":"object"===e&&(n=o=t,(r=String).prototype.isPrototypeOf(n)||(null===(s=o.constructor)||void 0===s?void 0:s.name)===r.name)?"string":e;var n,o,r,s})(e)===t,n=t=>e=>typeof e===t,o=e("string"),r=e("object"),s=(null,t=>null===t);const a=n("boolean"),l=n("number");class i{constructor(t,e){this.tag=t,this.value=e}static some(t){return new i(!0,t)}static none(){return i.singletonNone}fold(t,e){return this.tag?e(this.value):t()}isSome(){return this.tag}isNone(){return!this.tag}map(t){return this.tag?i.some(t(this.value)):i.none()}bind(t){return this.tag?t(this.value):i.none()}exists(t){return this.tag&&t(this.value)}forall(t){return!this.tag||t(this.value)}filter(t){return!this.tag||t(this.value)?this:i.none()}getOr(t){return this.tag?this.value:t}or(t){return this.tag?this:t}getOrThunk(t){return this.tag?this.value:t()}orThunk(t){return this.tag?this:t()}getOrDie(t){if(this.tag)return this.value;throw new Error(null!=t?t:"Called getOrDie on None")}static from(t){return null==t?i.none():i.some(t)}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(t){this.tag&&t(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}i.singletonNone=new i(!1);const u=(t,e)=>{for(let n=0,o=t.length;n<o;n++)e(t[n],n)},c=Object.keys,d=(t,e)=>{const n=c(t);for(let o=0,r=n.length;o<r;o++){const r=n[o];e(t[r],r)}},h="undefined"!=typeof window?window:Function("return this;")(),m=(t,e)=>((t,e)=>{let n=null!=e?e:h;for(let e=0;e<t.length&&null!=n;++e)n=n[t[e]];return n})(t.split("."),e),g=Object.getPrototypeOf,v=t=>{const e=m("ownerDocument.defaultView",t);return r(t)&&((t=>((t,e)=>{const n=((t,e)=>m(t,e))(t,e);if(null==n)throw new Error(t+" not available on this browser");return n})("HTMLElement",t))(e).prototype.isPrototypeOf(t)||/^HTML\w*Element$/.test(g(t).constructor.name))},f=t=>t.dom.nodeValue,p=t=>e=>(t=>t.dom.nodeType)(e)===t,b=t=>w(t)&&v(t.dom),w=p(1),y=p(3),A=(t,e,n)=>{((t,e,n)=>{if(!(o(n)||a(n)||l(n)))throw console.error("Invalid call to Attribute.set. Key ",e,":: Value ",n,":: Element ",t),new Error("Attribute value was not simple");t.setAttribute(e,n+"")})(t.dom,e,n)},k=(t,e)=>{t.dom.removeAttribute(e)},N=(t,e)=>{const n=((t,e)=>{const n=t.dom.getAttribute(e);return null===n?void 0:n})(t,e);return void 0===n||""===n?[]:n.split(" ")},T=t=>void 0!==t.dom.classList,C=t=>{if(null==t)throw new Error("Node cannot be null or undefined");return{dom:t}},E=C,O={"\xa0":"nbsp","\xad":"shy"},L=(t,e)=>{let n="";return d(t,((t,e)=>{n+=e})),new RegExp("["+n+"]",e?"g":"")},V=L(O),j=L(O,!0),B=(t=>{let e="";return d(t,(t=>{e&&(e+=","),e+="span.mce-"+t})),e})(O),S="mce-nbsp",_=t=>t.dom.contentEditable,x=t=>'<span data-mce-bogus="1" class="mce-'+O[t]+'">'+t+"</span>",M=t=>"span"===t.nodeName.toLowerCase()&&t.classList.contains("mce-nbsp-wrap"),P=t=>{const e=f(t);return y(t)&&o(e)&&V.test(e)},D=(t,e,n)=>{let o=[];const r=((t,e)=>{const n=t.length,o=new Array(n);for(let r=0;r<n;r++){const n=t[r];o[r]=e(n,r)}return o})(t.dom.childNodes,E);return u(r,(t=>{var r;n&&(M((r=t).dom)||!(t=>b(t)&&"false"===_(t))(r))&&e(t)&&(o=o.concat([t])),o=o.concat(D(t,e,((t,e)=>{if(b(t)&&!M(t.dom)){const e=_(t);if("true"===e)return!0;if("false"===e)return!1}return e})(t,n)))})),o},H=(t,e)=>{const n=t.dom,o=D(E(e),P,t.dom.isEditable(e));u(o,(e=>{var o;const r=e.dom.parentNode;if(M(r))s=E(r),a=S,T(s)?s.dom.classList.add(a):((t,e)=>{((t,e,n)=>{const o=N(t,e).concat([n]);A(t,e,o.join(" "))})(t,"class",e)})(s,a);else{const r=n.encode(null!==(o=f(e))&&void 0!==o?o:"").replace(j,x),s=n.create("div",{},r);let a;for(;a=s.lastChild;)n.insertAfter(a,e.dom);t.dom.remove(e.dom)}var s,a}))},I=(t,e)=>{const n=t.dom.select(B,e);u(n,(e=>{var n,o;M(e)?(n=E(e),o=S,T(n)?n.dom.classList.remove(o):((t,e)=>{((t,e,n)=>{const o=((t,e)=>{const o=[];for(let e=0,r=t.length;e<r;e++){const r=t[e];r!==n&&o.push(r)}return o})(N(t,e));o.length>0?A(t,e,o.join(" ")):k(t,e)})(t,"class",e)})(n,o),(t=>{const e=T(t)?t.dom.classList:(t=>N(t,"class"))(t);0===e.length&&k(t,"class")})(n)):t.dom.remove(e,!0)}))},$=t=>{const e=t.getBody(),n=t.selection.getBookmark();let o=((t,e)=>{for(;t.parentNode;){if(t.parentNode===e)return e;t=t.parentNode}})(t.selection.getNode(),e);o=void 0!==o?o:e,I(t,o),H(t,o),t.selection.moveToBookmark(n)},F=(t,e)=>{((t,e)=>{t.dispatch("VisualChars",{state:e})})(t,e.get());const n=t.getBody();!0===e.get()?H(t,n):I(t,n)},K=("visualchars_default_state",t=>t.options.get("visualchars_default_state"));const R=(t,e)=>{const n=((t,e)=>{let n=null;return{cancel:()=>{s(n)||(clearTimeout(n),n=null)},throttle:(...e)=>{s(n)&&(n=setTimeout((()=>{n=null,t.apply(null,e)}),300))}}})((()=>{$(t)}));t.on("keydown",(o=>{!0===e.get()&&(13===o.keyCode?$(t):n.throttle())})),t.on("remove",n.cancel)},U=(t,e)=>n=>{n.setActive(e.get());const o=t=>n.setActive(t.state);return t.on("VisualChars",o),()=>t.off("VisualChars",o)};t.add("visualchars",(t=>{(t=>{(0,t.options.register)("visualchars_default_state",{processor:"boolean",default:!1})})(t);const e=(t=>{let e=t;return{get:()=>e,set:t=>{e=t}}})(K(t));return((t,e)=>{t.addCommand("mceVisualChars",(()=>{((t,e)=>{e.set(!e.get());const n=t.selection.getBookmark();F(t,e),t.selection.moveToBookmark(n)})(t,e)}))})(t,e),((t,e)=>{const n=()=>t.execCommand("mceVisualChars");t.ui.registry.addToggleButton("visualchars",{tooltip:"Show invisible characters",icon:"visualchars",onAction:n,onSetup:U(t,e)}),t.ui.registry.addToggleMenuItem("visualchars",{text:"Show invisible characters",icon:"visualchars",onAction:n,onSetup:U(t,e)})})(t,e),R(t,e),((t,e)=>{t.on("init",(()=>{F(t,e)}))})(t,e),(t=>({isEnabled:()=>t.get()}))(e)}))}();