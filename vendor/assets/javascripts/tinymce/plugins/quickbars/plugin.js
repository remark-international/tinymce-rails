/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.0-1 (2019-02-04)
 */
!function(){"use strict";var e,n,r,t,o=tinymce.util.Tools.resolve("tinymce.PluginManager"),s=0,i=function(e,n,r){var t,o,i;e.plugins.table?e.plugins.table.insertTable(n,r):(o=n,i=r,(t=e).undoManager.transact(function(){var e,n;t.insertContent(function(e,n){var r,t,o;for(o='<table data-mce-id="mce" style="width: 100%">',o+="<tbody>",t=0;t<n;t++){for(o+="<tr>",r=0;r<e;r++)o+="<td><br></td>";o+="</tr>"}return o+="</tbody>",o+="</table>"}(o,i)),(e=t.dom.select("*[data-mce-id]")[0]).removeAttribute("data-mce-id"),n=t.dom.select("td,th",e),t.selection.setCursorLocation(n[0],0)}))},u=function(e,n,r){var t,o,i,u;o=(t=e.editorUpload.blobCache).create((i="mceu",u=(new Date).getTime(),i+"_"+Math.floor(1e9*Math.random())+ ++s+String(u)),r,n),t.add(o),e.insertContent(e.dom.createHTML("img",{src:o.blobUri()}))},a="undefined"!=typeof window?window:Function("return this;")(),c=function(e,n){return function(e,n){for(var r=n!==undefined&&null!==n?n:a,t=0;t<e.length&&r!==undefined&&null!==r;++t)r=r[e[t]];return r}(e.split("."),n)},f=function(e,n){var r=c(e,n);if(r===undefined||null===r)throw e+" not available on this browser";return r},d=tinymce.util.Tools.resolve("tinymce.util.Promise"),l=function(t){return new d(function(e){var n=function r(){return new(f("FileReader"))}();n.onloadend=function(){e(n.result.split(",")[1])},n.readAsDataURL(t)})},m=function(){return new d(function(n){var e;(e=document.createElement("input")).type="file",e.style.position="fixed",e.style.left=0,e.style.top=0,e.style.opacity=.001,document.body.appendChild(e),e.onchange=function(e){n(Array.prototype.slice.call(e.target.files))},e.click(),e.parentNode.removeChild(e)})},v=function(r){r.ui.registry.addButton("quickimage",{icon:"image",tooltip:"Insert image",onAction:function(){m().then(function(e){var n=e[0];l(n).then(function(e){u(r,e,n)})})}}),r.ui.registry.addButton("quicktable",{icon:"table",tooltip:"Insert table",onAction:function(){i(r,2,2)}})},h=function(e){return function(){return e}},g=h(!1),p=h(!0),b=g,O=p,N=function(){return T},T=(t={fold:function(e,n){return e()},is:b,isSome:b,isNone:O,getOr:r=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:r,orThunk:n,map:N,ap:N,each:function(){},bind:N,flatten:N,exists:b,forall:O,filter:N,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:h("none()")},Object.freeze&&Object.freeze(t),t),w=function(r){var e=function(){return r},n=function(){return o},t=function(e){return e(r)},o={fold:function(e,n){return n(r)},is:function(e){return r===e},isSome:O,isNone:b,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return w(e(r))},ap:function(e){return e.fold(N,function(e){return w(e(r))})},each:function(e){e(r)},bind:t,flatten:e,exists:t,forall:t,filter:function(e){return e(r)?o:T},equals:function(e){return e.is(r)},equals_:function(e,n){return e.fold(b,function(e){return n(r,e)})},toArray:function(){return[r]},toString:function(){return"some("+r+")"}};return o},E={some:w,none:N,from:function(e){return null===e||e===undefined?T:w(e)}},y=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:h(e)}},S={fromHtml:function(e,n){var r=(n||document).createElement("div");if(r.innerHTML=e,!r.hasChildNodes()||1<r.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return y(r.childNodes[0])},fromTag:function(e,n){var r=(n||document).createElement(e);return y(r)},fromText:function(e,n){var r=(n||document).createTextNode(e);return y(r)},fromDom:y,fromPoint:function(e,n,r){var t=e.dom();return E.from(t.elementFromPoint(n,r)).map(y)}},x=(Node.ATTRIBUTE_NODE,Node.CDATA_SECTION_NODE,Node.COMMENT_NODE,Node.DOCUMENT_NODE,Node.DOCUMENT_TYPE_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE),k=(Node.TEXT_NODE,Node.PROCESSING_INSTRUCTION_NODE,Node.ENTITY_REFERENCE_NODE,Node.ENTITY_NODE,Node.NOTATION_NODE,function(n){return function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"===n&&Array.prototype.isPrototypeOf(e)?"array":"object"===n&&String.prototype.isPrototypeOf(e)?"string":n}(e)===n}}),C=k("string"),D=k("object"),_=k("array"),A=k("boolean"),R=k("undefined"),M=k("function");Array.prototype.slice;function I(e,n,r,t,o){return e(r,t)?E.some(r):M(o)&&o(r)?E.none():n(r,t,o)}M(Array.from)&&Array.from;var q,L,U,F,B=function(e,n){var r=function(e,n){for(var r=0;r<e.length;r++){var t=e[r];if(t.test(n))return t}return undefined}(e,n);if(!r)return{major:0,minor:0};var t=function(e){return Number(n.replace(r,"$"+e))};return j(t(1),t(2))},P=function(){return j(0,0)},j=function(e,n){return{major:e,minor:n}},H={nu:j,detect:function(e,n){var r=String(n).toLowerCase();return 0===e.length?P():B(e,r)},unknown:P},W="Firefox",X=function(e,n){return function(){return n===e}},z=function(e){var n=e.current;return{current:n,version:e.version,isEdge:X("Edge",n),isChrome:X("Chrome",n),isIE:X("IE",n),isOpera:X("Opera",n),isFirefox:X(W,n),isSafari:X("Safari",n)}},Y={unknown:function(){return z({current:undefined,version:H.unknown()})},nu:z,edge:h("Edge"),chrome:h("Chrome"),ie:h("IE"),opera:h("Opera"),firefox:h(W),safari:h("Safari")},G="Windows",$="Android",V="Solaris",J="FreeBSD",K=function(e,n){return function(){return n===e}},Q=function(e){var n=e.current;return{current:n,version:e.version,isWindows:K(G,n),isiOS:K("iOS",n),isAndroid:K($,n),isOSX:K("OSX",n),isLinux:K("Linux",n),isSolaris:K(V,n),isFreeBSD:K(J,n)}},Z={unknown:function(){return Q({current:undefined,version:H.unknown()})},nu:Q,windows:h(G),ios:h("iOS"),android:h($),linux:h("Linux"),osx:h("OSX"),solaris:h(V),freebsd:h(J)},ee=function(e,n){var r=String(n).toLowerCase();return function(e,n){for(var r=0,t=e.length;r<t;r++){var o=e[r];if(n(o,r,e))return E.some(o)}return E.none()}(e,function(e){return e.search(r)})},ne=function(e,r){return ee(e,r).map(function(e){var n=H.detect(e.versionRegexes,r);return{current:e.name,version:n}})},re=function(e,r){return ee(e,r).map(function(e){var n=H.detect(e.versionRegexes,r);return{current:e.name,version:n}})},te=function(e,n){return-1!==e.indexOf(n)},oe=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,ie=function(n){return function(e){return te(e,n)}},ue=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return te(e,"edge/")&&te(e,"chrome")&&te(e,"safari")&&te(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,oe],search:function(e){return te(e,"chrome")&&!te(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return te(e,"msie")||te(e,"trident")}},{name:"Opera",versionRegexes:[oe,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:ie("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:ie("firefox")},{name:"Safari",versionRegexes:[oe,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(te(e,"safari")||te(e,"mobile/"))&&te(e,"applewebkit")}}],se=[{name:"Windows",search:ie("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return te(e,"iphone")||te(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:ie("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:ie("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:ie("linux"),versionRegexes:[]},{name:"Solaris",search:ie("sunos"),versionRegexes:[]},{name:"FreeBSD",search:ie("freebsd"),versionRegexes:[]}],ae={browsers:h(ue),oses:h(se)},ce=function(e){var n,r,t,o,i,u,s,a,c,f,d,l=ae.browsers(),m=ae.oses(),v=ne(l,e).fold(Y.unknown,Y.nu),g=re(m,e).fold(Z.unknown,Z.nu);return{browser:v,os:g,deviceType:(r=v,t=e,o=(n=g).isiOS()&&!0===/ipad/i.test(t),i=n.isiOS()&&!o,u=n.isAndroid()&&3===n.version.major,s=n.isAndroid()&&4===n.version.major,a=o||u||s&&!0===/mobile/i.test(t),c=n.isiOS()||n.isAndroid(),f=c&&!a,d=r.isSafari()&&n.isiOS()&&!1===/safari/i.test(t),{isiPad:h(o),isiPhone:h(i),isTablet:h(a),isPhone:h(f),isTouch:h(c),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:h(d)})}},fe=(U=!(q=function(){var e=navigator.userAgent;return ce(e)}),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return U||(U=!0,L=q.apply(null,e)),L}),de=x,le=function(e,n){var r=e.dom();if(r.nodeType!==de)return!1;if(r.matches!==undefined)return r.matches(n);if(r.msMatchesSelector!==undefined)return r.msMatchesSelector(n);if(r.webkitMatchesSelector!==undefined)return r.webkitMatchesSelector(n);if(r.mozMatchesSelector!==undefined)return r.mozMatchesSelector(n);throw new Error("Browser lacks native selectors")},me=(fe().browser.isIE(),function(e,n,r){for(var t=e.dom(),o=M(r)?r:h(!1);t.parentNode;){t=t.parentNode;var i=S.fromDom(t);if(n(i))return E.some(i);if(o(i))break}return E.none()}),ve=function(e,n,r){return me(e,function(e){return le(e,n)},r)},ge={getToolbarItemsOr:(F=C,function(e,n,r){var t=n in e.settings?e.settings[n]:r;return function(e,n){if(!n(e))throw new Error("Default value doesn't match requested type.")}(r,F),function(e,n){if(_(e)||D(e))throw new Error("expected a string but found: "+e);return R(e)?n:A(e)?!1===e?"":n:e}(t,r)})},he=function(e){return ge.getToolbarItemsOr(e,"quickbars_selection_toolbar","bold italic | form:link-form h2 h3 blockquote")},pe=function(e){return ge.getToolbarItemsOr(e,"quickbars_insert_toolbar","quickimage quicktable")},be=function(s){s.ui.registry.addContextToolbar("quickblock",{predicate:function(e){var n,r,t,o=S.fromDom(e),i=s.schema.getTextBlockElements(),u=function(e){return e.dom()===s.getBody()};return(n=o,r="table",t=u,I(le,ve,n,r,t)).fold(function(){return(e=o,n=function(e){return e.dom().nodeName.toLowerCase()in i&&s.dom.isEmpty(e.dom())},r=u,I(function(e){return n(e)},me,e,n,r)).isSome();var e,n,r},function(){return!1})},items:pe(s),position:"line",scope:"editor"})},Oe=(tinymce.util.Tools.resolve("tinymce.util.Tools"),tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),function(e,n){e.execCommand("FormatBlock",!1,n)}),Ne=function(t){for(var e=function(e){var n,r="h"+e;t.ui.registry.addToggleButton(r,{text:r.toUpperCase(),tooltip:"Heading "+e,onSetup:function(e){return t.selection.selectorChangedWithUnbind(r,e.setActive).unbind},onAction:(n=r,function(){Oe(t,n)})})},n=1;n<6;n++)e(n)},Te=function(n){n.ui.registry.addContextToolbar("textselection",{predicate:function(e){return!n.selection.isCollapsed()},items:he(n),position:"selection"})};o.add("quickbars",function(e){v(e),be(e),Ne(e),Te(e)}),function we(){}}();