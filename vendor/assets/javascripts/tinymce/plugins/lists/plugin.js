/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.14 (2019-08-19)
 */
!function(u){"use strict";var e,n,t,r,o,i,a,s,c,f=tinymce.util.Tools.resolve("tinymce.PluginManager"),v=function(e){return function(){return e}},d=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return!t.apply(null,e)}},l=v(!1),m=v(!0),g=l,p=m,h=function(){return y},y=(r={fold:function(e,n){return e()},is:g,isSome:g,isNone:p,getOr:t=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:t,orThunk:n,map:h,ap:h,each:function(){},bind:h,flatten:h,exists:g,forall:p,filter:h,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:v("none()")},Object.freeze&&Object.freeze(r),r),N=function(t){var e=function(){return t},n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:p,isNone:g,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return N(e(t))},ap:function(e){return e.fold(h,function(e){return N(e(t))})},each:function(e){e(t)},bind:r,flatten:e,exists:r,forall:r,filter:function(e){return e(t)?o:y},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(g,function(e){return n(t,e)})},toArray:function(){return[t]},toString:function(){return"some("+t+")"}};return o},S={some:N,none:h,from:function(e){return null===e||e===undefined?y:N(e)}},O=function(n){return function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"===n&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===n&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":n}(e)===n}},C=O("string"),b=O("array"),L=O("boolean"),T=O("function"),E=O("number"),D=Array.prototype.slice,w=function(e,n){for(var t=e.length,r=new Array(t),o=0;o<t;o++){var i=e[o];r[o]=n(i,o,e)}return r},k=function(e,n){for(var t=0,r=e.length;t<r;t++){n(e[t],t,e)}},A=function(e,n){for(var t=[],r=0,o=e.length;r<o;r++){var i=e[r];n(i,r,e)&&t.push(i)}return t},x=function(e,n,t){return k(e,function(e){t=n(t,e)}),t},R=function(e,n){for(var t=0,r=e.length;t<r;t++){var o=e[t];if(n(o,t,e))return S.some(o)}return S.none()},I=Array.prototype.push,_=function(e,n){return function(e){for(var n=[],t=0,r=e.length;t<r;++t){if(!b(e[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+e);I.apply(n,e[t])}return n}(w(e,n))},B=function(e){return 0===e.length?S.none():S.some(e[0])},P=function(e){return 0===e.length?S.none():S.some(e[e.length-1])},M=(T(Array.from)&&Array.from,function(e,n,t){return 0!=(e.compareDocumentPosition(n)&t)}),U=function(e,n){return M(e,n,u.Node.DOCUMENT_POSITION_CONTAINED_BY)},F=function(e,n){var t=function(e,n){for(var t=0;t<e.length;t++){var r=e[t];if(r.test(n))return r}return undefined}(e,n);if(!t)return{major:0,minor:0};var r=function(e){return Number(n.replace(t,"$"+e))};return H(r(1),r(2))},j=function(){return H(0,0)},H=function(e,n){return{major:e,minor:n}},$={nu:H,detect:function(e,n){var t=String(n).toLowerCase();return 0===e.length?j():F(e,t)},unknown:j},q="Edge",W="Chrome",V="Opera",z="Firefox",K="Safari",X=function(e,n){return function(){return n===e}},Q=function(e){var n=e.current;return{current:n,version:e.version,isEdge:X(q,n),isChrome:X(W,n),isIE:X("IE",n),isOpera:X(V,n),isFirefox:X(z,n),isSafari:X(K,n)}},Y={unknown:function(){return Q({current:undefined,version:$.unknown()})},nu:Q,edge:v(q),chrome:v(W),ie:v("IE"),opera:v(V),firefox:v(z),safari:v(K)},G="Windows",J="Android",Z="Solaris",ee="FreeBSD",ne=function(e,n){return function(){return n===e}},te=function(e){var n=e.current;return{current:n,version:e.version,isWindows:ne(G,n),isiOS:ne("iOS",n),isAndroid:ne(J,n),isOSX:ne("OSX",n),isLinux:ne("Linux",n),isSolaris:ne(Z,n),isFreeBSD:ne(ee,n)}},re={unknown:function(){return te({current:undefined,version:$.unknown()})},nu:te,windows:v(G),ios:v("iOS"),android:v(J),linux:v("Linux"),osx:v("OSX"),solaris:v(Z),freebsd:v(ee)},oe=function(e,n){var t=String(n).toLowerCase();return R(e,function(e){return e.search(t)})},ie=function(e,t){return oe(e,t).map(function(e){var n=$.detect(e.versionRegexes,t);return{current:e.name,version:n}})},ue=function(e,t){return oe(e,t).map(function(e){var n=$.detect(e.versionRegexes,t);return{current:e.name,version:n}})},ae=function(e,n){return-1!==e.indexOf(n)},se=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,ce=function(n){return function(e){return ae(e,n)}},fe=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return ae(e,"edge/")&&ae(e,"chrome")&&ae(e,"safari")&&ae(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,se],search:function(e){return ae(e,"chrome")&&!ae(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return ae(e,"msie")||ae(e,"trident")}},{name:"Opera",versionRegexes:[se,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:ce("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:ce("firefox")},{name:"Safari",versionRegexes:[se,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(ae(e,"safari")||ae(e,"mobile/"))&&ae(e,"applewebkit")}}],de=[{name:"Windows",search:ce("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return ae(e,"iphone")||ae(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:ce("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:ce("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:ce("linux"),versionRegexes:[]},{name:"Solaris",search:ce("sunos"),versionRegexes:[]},{name:"FreeBSD",search:ce("freebsd"),versionRegexes:[]}],le={browsers:v(fe),oses:v(de)},me=function(e){var n,t,r,o,i,u,a,s,c,f,d,l=le.browsers(),m=le.oses(),g=ie(l,e).fold(Y.unknown,Y.nu),p=ue(m,e).fold(re.unknown,re.nu);return{browser:g,os:p,deviceType:(t=g,r=e,o=(n=p).isiOS()&&!0===/ipad/i.test(r),i=n.isiOS()&&!o,u=n.isAndroid()&&3===n.version.major,a=n.isAndroid()&&4===n.version.major,s=o||u||a&&!0===/mobile/i.test(r),c=n.isiOS()||n.isAndroid(),f=c&&!s,d=t.isSafari()&&n.isiOS()&&!1===/safari/i.test(r),{isiPad:v(o),isiPhone:v(i),isTablet:v(s),isPhone:v(f),isTouch:v(c),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:v(d)})}},ge={detect:(a=!(o=function(){var e=u.navigator.userAgent;return me(e)}),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return a||(a=!0,i=o.apply(null,e)),i})},pe=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:v(e)}},ve={fromHtml:function(e,n){var t=(n||u.document).createElement("div");if(t.innerHTML=e,!t.hasChildNodes()||1<t.childNodes.length)throw u.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return pe(t.childNodes[0])},fromTag:function(e,n){var t=(n||u.document).createElement(e);return pe(t)},fromText:function(e,n){var t=(n||u.document).createTextNode(e);return pe(t)},fromDom:pe,fromPoint:function(e,n,t){var r=e.dom();return S.from(r.elementFromPoint(n,t)).map(pe)}},he=(u.Node.ATTRIBUTE_NODE,u.Node.CDATA_SECTION_NODE,u.Node.COMMENT_NODE,u.Node.DOCUMENT_NODE,u.Node.DOCUMENT_TYPE_NODE,u.Node.DOCUMENT_FRAGMENT_NODE,u.Node.ELEMENT_NODE),ye=(u.Node.TEXT_NODE,u.Node.PROCESSING_INSTRUCTION_NODE,u.Node.ENTITY_REFERENCE_NODE,u.Node.ENTITY_NODE,u.Node.NOTATION_NODE,he),Ne=function(e,n){return e.dom()===n.dom()},Se=ge.detect().browser.isIE()?function(e,n){return U(e.dom(),n.dom())}:function(e,n){var t=e.dom(),r=n.dom();return t!==r&&t.contains(r)},Oe=function(e,n){var t=e.dom();if(t.nodeType!==ye)return!1;var r=t;if(r.matches!==undefined)return r.matches(n);if(r.msMatchesSelector!==undefined)return r.msMatchesSelector(n);if(r.webkitMatchesSelector!==undefined)return r.webkitMatchesSelector(n);if(r.mozMatchesSelector!==undefined)return r.mozMatchesSelector(n);throw new Error("Browser lacks native selectors")},Ce=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),be=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),Le=tinymce.util.Tools.resolve("tinymce.util.VK"),Te=function(e,n){for(var t=[],r=0;r<e.length;r++){var o=e[r];if(!o.isSome())return S.none();t.push(o.getOrDie())}return S.some(n.apply(null,t))},Ee=Object.keys,De=function(e){return S.from(e.dom().parentNode).map(ve.fromDom)},we=function(e){return w(e.dom().childNodes,ve.fromDom)},ke=function(e,n){var t=e.dom().childNodes;return S.from(t[n]).map(ve.fromDom)},Ae=function(e){return ke(e,0)},xe=function(e){return ke(e,e.dom().childNodes.length-1)},Re=(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]}("element","offset"),function(n,t){De(n).each(function(e){e.dom().insertBefore(t.dom(),n.dom())})}),Ie=function(e,n){e.dom().appendChild(n.dom())},_e=function(n,e){k(e,function(e){Ie(n,e)})},Be=function(e){var n=e.dom();null!==n.parentNode&&n.parentNode.removeChild(n)},Pe=function(e,n,t){return e.fire("ListMutation",{action:n,element:t})},Me="undefined"!=typeof u.window?u.window:Function("return this;")(),Ue=function(e,n){return function(e,n){for(var t=n!==undefined&&null!==n?n:Me,r=0;r<e.length&&t!==undefined&&null!==t;++r)t=t[e[r]];return t}(e.split("."),n)},Fe=function(e,n){var t=Ue(e,n);if(t===undefined||null===t)throw new Error(e+" not available on this browser");return t},je=function(e){var n,t=Ue("ownerDocument.defaultView",e);return(n=t,Fe("HTMLElement",n)).prototype.isPrototypeOf(e)},He=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),$e=tinymce.util.Tools.resolve("tinymce.util.Tools"),qe=function(e){return e&&"BR"===e.nodeName},We=function(e){return e&&3===e.nodeType},Ve=function(e){return e&&/^(OL|UL|DL)$/.test(e.nodeName)},ze=function(e){return e&&/^(OL|UL)$/.test(e.nodeName)},Ke=function(e){return e&&/^(DT|DD)$/.test(e.nodeName)},Xe=function(e){return e&&/^(LI|DT|DD)$/.test(e.nodeName)},Qe=function(e){return e&&/^(TH|TD)$/.test(e.nodeName)},Ye=qe,Ge=function(e){return e.parentNode.firstChild===e},Je=function(e,n){return n&&!!e.schema.getTextBlockElements()[n.nodeName]},Ze=function(e,n){return e&&e.nodeName in n},en=function(e,n){return!!qe(n)&&!(!e.isBlock(n.nextSibling)||qe(n.previousSibling))},nn=function(e,n,t){var r=e.isEmpty(n);return!(t&&0<e.select("span[data-mce-type=bookmark]",n).length)&&r},tn=function(e,n){return e.isChildOf(n,e.getRoot())},rn=function(e){var n=e.selection.getStart(!0);return e.dom.getParent(n,"OL,UL,DL",un(e,n))},on=function(e){var t,n,r,o=e.selection.getSelectedBlocks();return $e.grep((t=e,n=o,r=$e.map(n,function(e){var n=t.dom.getParent(e,"li,dd,dt",un(t,e));return n||e}),He.unique(r)),function(e){return Xe(e)})},un=function(e,n){var t=e.dom.getParents(n,"TD,TH");return 0<t.length?t[0]:e.getBody()},an=function(e,n){var t=e.dom.getParents(n,"ol,ul",un(e,n));return P(t)},sn=function(n,e){var t=w(e,function(e){return an(n,e).getOr(e)});return He.unique(t)},cn={isList:function(e){var n=rn(e);return je(n)},getParentList:rn,getSelectedSubLists:function(e){var n,t,r,o=rn(e),i=e.selection.getSelectedBlocks();return r=i,(t=o)&&1===r.length&&r[0]===t?(n=o,$e.grep(n.querySelectorAll("ol,ul,dl"),function(e){return Ve(e)})):$e.grep(i,function(e){return Ve(e)&&o!==e})},getSelectedListItems:on,getClosestListRootElm:un,getSelectedDlItems:function(e){return A(on(e),Ke)},getSelectedListRoots:function(e){var n,t,r,o=(t=an(n=e,n.selection.getStart()),r=A(n.selection.getSelectedBlocks(),ze),t.toArray().concat(r));return sn(e,o)}},fn=tinymce.util.Tools.resolve("tinymce.Env"),dn=function(e,n){var t,r,o,i,u=e.dom,a=e.schema.getBlockElements(),s=u.createFragment();if(e.settings.forced_root_block&&(o=e.settings.forced_root_block),o&&((r=u.create(o)).tagName===e.settings.forced_root_block&&u.setAttribs(r,e.settings.forced_root_block_attrs),Ze(n.firstChild,a)||s.appendChild(r)),n)for(;t=n.firstChild;){var c=t.nodeName;i||"SPAN"===c&&"bookmark"===t.getAttribute("data-mce-type")||(i=!0),Ze(t,a)?(s.appendChild(t),r=null):o?(r||(r=u.create(o),s.appendChild(r)),r.appendChild(t)):s.appendChild(t)}return e.settings.forced_root_block?i||fn.ie&&!(10<fn.ie)||r.appendChild(u.create("br",{"data-mce-bogus":"1"})):s.appendChild(u.create("br")),s},ln=function(e){return e.dom().nodeName.toLowerCase()},mn=(s=he,function(e){return e.dom().nodeType===s}),gn=function(e,n){var t=e.dom();!function(e,n){for(var t=Ee(e),r=0,o=t.length;r<o;r++){var i=t[r];n(e[i],i,e)}}(n,function(e,n){!function(e,n,t){if(!(C(t)||L(t)||E(t)))throw u.console.error("Invalid call to Attr.set. Key ",n,":: Value ",t,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(n,t+"")}(t,n,e)})},pn=function(e){return x(e.dom().attributes,function(e,n){return e[n.name]=n.value,e},{})},vn=function(e,n,t){if(!C(t))throw u.console.error("Invalid call to CSS.set. Property ",n,":: Value ",t,":: Element ",e),new Error("CSS value must be a string: "+t);var r;(r=e).style!==undefined&&T(r.style.getPropertyValue)&&e.style.setProperty(n,t)},hn=function(e){return n=e,t=!0,ve.fromDom(n.dom().cloneNode(t));var n,t},yn=function(e,n){var t,r,o,i,u=(t=e,r=n,o=ve.fromTag(r),i=pn(t),gn(o,i),o);Re(e,u);var a=we(e);return _e(u,a),Be(e),u},Nn=function(e,n){Ie(e.item,n.list)},Sn=function(f,e,d){var n=e.slice(0,d.depth);return P(n).each(function(e){var n,t,r,o,i,u,a,s,c=(n=f,t=d.itemAttributes,r=d.content,o=ve.fromTag("li",n),gn(o,t),_e(o,r),o);u=c,Ie((i=e).list,u),i.item=u,s=d,ln((a=e).list)!==s.listType&&(a.list=yn(a.list,s.listType)),gn(a.list,s.listAttributes)}),n},On=function(e,n,t){var r,o=function(e,n,t){for(var r,o,i,u=[],a=0;a<t;a++)u.push((r=e,o=n.listType,i={list:ve.fromTag(o,r),item:ve.fromTag("li",r)},Ie(i.list,i.item),i));return u}(e,t,t.depth-n.length);return function(e){for(var n=1;n<e.length;n++)Nn(e[n-1],e[n])}(o),function(e,n){for(var t=0;t<e.length-1;t++)r=e[t].item,o="list-style-type",i="none",u=r.dom(),vn(u,o,i);var r,o,i,u;P(e).each(function(e){gn(e.list,n.listAttributes),gn(e.item,n.itemAttributes),_e(e.item,n.content)})}(o,t),r=o,Te([P(n),B(r)],Nn),n.concat(o)},Cn=function(e){return Oe(e,"OL,UL")},bn=function(e){return Ae(e).map(Cn).getOr(!1)},Ln=function(e){return 0<e.depth},Tn=function(e){return e.isSelected},En=function(e){var n=we(e),t=xe(e).map(Cn).getOr(!1)?n.slice(0,-1):n;return w(t,hn)},Dn=Object.prototype.hasOwnProperty,wn=(c=function(e,n){return n},function(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];if(0===e.length)throw new Error("Can't merge zero objects");for(var t={},r=0;r<e.length;r++){var o=e[r];for(var i in o)Dn.call(o,i)&&(t[i]=c(t[i],o[i]))}return t}),kn=function(n){k(n,function(r,e){(function(e,n){for(var t=e[n].depth,r=n-1;0<=r;r--){if(e[r].depth===t)return S.some(e[r]);if(e[r].depth<t)break}return S.none()})(n,e).each(function(e){var n,t;t=e,(n=r).listType=t.listType,n.listAttributes=wn({},t.listAttributes)})})},An=function(e){var n=e,t=function(){return n};return{get:t,set:function(e){n=e},clone:function(){return An(t())}}},xn=function(i,u,a,s){return Ae(s).filter(Cn).fold(function(){u.each(function(e){Ne(e.start,s)&&a.set(!0)});var n,t,r,e=(n=s,t=i,r=a.get(),De(n).filter(mn).map(function(e){return{depth:t,isSelected:r,content:En(n),itemAttributes:pn(n),listAttributes:pn(e),listType:ln(e)}}));u.each(function(e){Ne(e.end,s)&&a.set(!1)});var o=xe(s).filter(Cn).map(function(e){return Rn(i,u,a,e)}).getOr([]);return e.toArray().concat(o)},function(e){return Rn(i,u,a,e)})},Rn=function(n,t,r,e){return _(we(e),function(e){return(Cn(e)?Rn:xn)(n+1,t,r,e)})},In=function(i,e){return w(e,function(e){var n,t,r,o=(n=e.content,r=(t||u.document).createDocumentFragment(),k(n,function(e){r.appendChild(e.dom())}),ve.fromDom(r));return ve.fromDom(dn(i,o.dom()))})},_n=function(e,n){return kn(n),(t=e.contentDocument,r=n,o=x(r,function(e,n){return n.depth>e.length?On(t,e,n):Sn(t,e,n)},[]),B(o).map(function(e){return e.list})).toArray();var t,r,o},Bn=function(e){var n,t,r=w(cn.getSelectedListItems(e),ve.fromDom);return Te([R(r,d(bn)),R((n=r,t=D.call(n,0),t.reverse(),t),d(bn))],function(e,n){return{start:e,end:n}})},Pn=function(a,e,s){var n,t,r,o=(n=e,t=Bn(a),r=An(!1),w(n,function(e){return{sourceList:e,entries:Rn(0,t,r,e)}}));k(o,function(e){var n,t;n=e.entries,t=s,k(A(n,Tn),function(e){return function(e,n){switch(e){case"Indent":n.depth++;break;case"Outdent":n.depth--;break;case"Flatten":n.depth=0}}(t,e)});var r,o,i,u=(r=a,o=e.entries,_(function(e,n){if(0===e.length)return[];for(var t=n(e[0]),r=[],o=[],i=0,u=e.length;i<u;i++){var a=e[i],s=n(a);s!==t&&(r.push(o),o=[]),t=s,o.push(a)}return 0!==o.length&&r.push(o),r}(o,Ln),function(e){return B(e).map(Ln).getOr(!1)?_n(r,e):In(r,e)}));k(u,function(e){Pe(a,"Indent"===s?"IndentList":"OutdentList",e.dom())}),i=e.sourceList,k(u,function(e){Re(i,e)}),Be(e.sourceList)})},Mn=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),Un=Mn.DOM,Fn=function(e,n,t){var r,o,i,u,a,s;for(i=Un.select('span[data-mce-type="bookmark"]',n),a=dn(e,t),(r=Un.createRng()).setStartAfter(t),r.setEndAfter(n),u=(o=r.extractContents()).firstChild;u;u=u.firstChild)if("LI"===u.nodeName&&e.dom.isEmpty(u)){Un.remove(u);break}e.dom.isEmpty(o)||Un.insertAfter(o,n),Un.insertAfter(a,n),nn(e.dom,t.parentNode)&&(s=t.parentNode,$e.each(i,function(e){s.parentNode.insertBefore(e,t.parentNode)}),Un.remove(s)),Un.remove(t),nn(e.dom,n)&&Un.remove(n)},jn=function(e){Oe(e,"dt")&&yn(e,"dd")},Hn=function(r,e,n){k(n,"Indent"===e?jn:function(e){return n=r,void(Oe(t=e,"dd")?yn(t,"dt"):Oe(t,"dt")&&De(t).each(function(e){return Fn(n,e.dom(),t.dom())}));var n,t})},$n=function(e,n){if(We(e))return{container:e,offset:n};var t=Ce.getNode(e,n);return We(t)?{container:t,offset:n>=e.childNodes.length?t.data.length:0}:t.previousSibling&&We(t.previousSibling)?{container:t.previousSibling,offset:t.previousSibling.data.length}:t.nextSibling&&We(t.nextSibling)?{container:t.nextSibling,offset:0}:{container:e,offset:n}},qn=function(e){var n=e.cloneRange(),t=$n(e.startContainer,e.startOffset);n.setStart(t.container,t.offset);var r=$n(e.endContainer,e.endOffset);return n.setEnd(r.container,r.offset),n},Wn=function(e,n){var t=w(cn.getSelectedListRoots(e),ve.fromDom),r=w(cn.getSelectedDlItems(e),ve.fromDom),o=!1;if(t.length||r.length){var i=e.selection.getBookmark();Pn(e,t,n),Hn(e,n,r),e.selection.moveToBookmark(i),e.selection.setRng(qn(e.selection.getRng())),e.nodeChanged(),o=!0}return o},Vn=function(e){return Wn(e,"Indent")},zn=function(e){return Wn(e,"Outdent")},Kn=function(e){return Wn(e,"Flatten")},Xn=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),Qn=Mn.DOM,Yn=function(o){var i={},e=function(e){var n,t,r;t=o[e?"startContainer":"endContainer"],r=o[e?"startOffset":"endOffset"],1===t.nodeType&&(n=Qn.create("span",{"data-mce-type":"bookmark"}),t.hasChildNodes()?(r=Math.min(r,t.childNodes.length-1),e?t.insertBefore(n,t.childNodes[r]):Qn.insertAfter(n,t.childNodes[r])):t.appendChild(n),t=n,r=0),i[e?"startContainer":"endContainer"]=t,i[e?"startOffset":"endOffset"]=r};return e(!0),o.collapsed||e(),i},Gn=function(o){function e(e){var n,t,r;n=r=o[e?"startContainer":"endContainer"],t=o[e?"startOffset":"endOffset"],n&&(1===n.nodeType&&(t=function(e){for(var n=e.parentNode.firstChild,t=0;n;){if(n===e)return t;1===n.nodeType&&"bookmark"===n.getAttribute("data-mce-type")||t++,n=n.nextSibling}return-1}(n),n=n.parentNode,Qn.remove(r),!n.hasChildNodes()&&Qn.isBlock(n)&&n.appendChild(Qn.create("br"))),o[e?"startContainer":"endContainer"]=n,o[e?"startOffset":"endOffset"]=t)}e(!0),e();var n=Qn.createRng();return n.setStart(o.startContainer,o.startOffset),o.endContainer&&n.setEnd(o.endContainer,o.endOffset),qn(n)},Jn=function(e){return/\btox\-/.test(e.className)},Zn=function(e){switch(e){case"UL":return"ToggleUlList";case"OL":return"ToggleOlList";case"DL":return"ToggleDLList"}},et=function(t,e){$e.each(e,function(e,n){t.setAttribute(n,e)})},nt=function(e,n,t){var r,o,i,u,a,s,c;r=e,o=n,u=(i=t)["list-style-type"]?i["list-style-type"]:null,r.setStyle(o,"list-style-type",u),a=e,et(s=n,(c=t)["list-attributes"]),$e.each(a.select("li",s),function(e){et(e,c["list-item-attributes"])})},tt=function(e,n,t,r){var o,i;for(o=n[t?"startContainer":"endContainer"],i=n[t?"startOffset":"endOffset"],1===o.nodeType&&(o=o.childNodes[Math.min(i,o.childNodes.length-1)]||o),!t&&Ye(o.nextSibling)&&(o=o.nextSibling);o.parentNode!==r;){if(Je(e,o))return o;if(/^(TD|TH)$/.test(o.parentNode.nodeName))return o;o=o.parentNode}return o},rt=function(f,d,l){void 0===l&&(l={});var e,n=f.selection.getRng(!0),m="LI",t=cn.getClosestListRootElm(f,f.selection.getStart(!0)),g=f.dom;"false"!==g.getContentEditable(f.selection.getNode())&&("DL"===(d=d.toUpperCase())&&(m="DT"),e=Yn(n),$e.each(function(t,e,r){for(var o,i=[],u=t.dom,n=tt(t,e,!0,r),a=tt(t,e,!1,r),s=[],c=n;c&&(s.push(c),c!==a);c=c.nextSibling);return $e.each(s,function(e){if(Je(t,e))return i.push(e),void(o=null);if(u.isBlock(e)||Ye(e))return Ye(e)&&u.remove(e),void(o=null);var n=e.nextSibling;Xn.isBookmarkNode(e)&&(Je(t,n)||!n&&e.parentNode===r)?o=null:(o||(o=u.create("p"),e.parentNode.insertBefore(o,e),i.push(o)),o.appendChild(e))}),i}(f,n,t),function(e){var n,t,r,o,i,u,a,s,c;(t=e.previousSibling)&&Ve(t)&&t.nodeName===d&&(r=t,o=l,i=g.getStyle(r,"list-style-type"),u=o?o["list-style-type"]:"",i===(u=null===u?"":u))?(n=t,e=g.rename(e,m),t.appendChild(e)):(n=g.create(d),e.parentNode.insertBefore(n,e),n.appendChild(e),e=g.rename(e,m)),a=g,s=e,c=["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"],$e.each(c,function(e){var n;return a.setStyle(s,((n={})[e]="",n))}),nt(g,n,l),it(f.dom,n)}),f.selection.setRng(Gn(e)))},ot=function(e,n,t){return s=t,(a=n)&&s&&Ve(a)&&a.nodeName===s.nodeName&&(i=n,u=t,(o=e).getStyle(i,"list-style-type",!0)===o.getStyle(u,"list-style-type",!0))&&(r=t,n.className===r.className);var r,o,i,u,a,s},it=function(e,n){var t,r;if(t=n.nextSibling,ot(e,n,t)){for(;r=t.firstChild;)n.appendChild(r);e.remove(t)}if(t=n.previousSibling,ot(e,n,t)){for(;r=t.lastChild;)n.insertBefore(r,n.firstChild);e.remove(t)}},ut=function(n,e,t,r,o){if(e.nodeName!==r||at(o)){var i=Yn(n.selection.getRng(!0));$e.each([e].concat(t),function(e){!function(e,n,t,r){if(n.nodeName!==t){var o=e.dom.rename(n,t);nt(e.dom,o,r),Pe(e,Zn(t),o)}else nt(e.dom,n,r),Pe(e,Zn(t),n)}(n,e,r,o)}),n.selection.setRng(Gn(i))}else Kn(n)},at=function(e){return"list-style-type"in e},st={toggleList:function(e,n,t){var r=cn.getParentList(e),o=cn.getSelectedSubLists(e);t=t||{},r&&0<o.length?ut(e,r,o,n,t):function(e,n,t,r){if(n!==e.getBody())if(n)if(n.nodeName!==t||at(r)||Jn(n)){var o=Yn(e.selection.getRng(!0));nt(e.dom,n,r);var i=e.dom.rename(n,t);it(e.dom,i),e.selection.setRng(Gn(o)),Pe(e,Zn(t),i)}else Kn(e);else rt(e,t,r),Pe(e,Zn(t),n)}(e,r,n,t)},mergeWithAdjacentLists:it},ct=Mn.DOM,ft=function(e,n){var t,r=n.parentNode;"LI"===r.nodeName&&r.firstChild===n&&((t=r.previousSibling)&&"LI"===t.nodeName?(t.appendChild(n),nn(e,r)&&ct.remove(r)):ct.setStyle(r,"listStyleType","none")),Ve(r)&&(t=r.previousSibling)&&"LI"===t.nodeName&&t.appendChild(n)},dt=function(n,e){$e.each($e.grep(n.select("ol,ul",e)),function(e){ft(n,e)})},lt=function(e,n,t,r){var o=n.startContainer,i=n.startOffset;if(We(o)&&(t?i<o.data.length:0<i))return o;var u=e.schema.getNonEmptyElements();1===o.nodeType&&(o=Ce.getNode(o,i));var a=new be(o,r);for(t&&en(e.dom,o)&&a.next();o=a[t?"next":"prev2"]();){if("LI"===o.nodeName&&!o.hasChildNodes())return o;if(u[o.nodeName])return o;if(We(o)&&0<o.data.length)return o}},mt=function(e,n){var t=n.childNodes;return 1===t.length&&!Ve(t[0])&&e.isBlock(t[0])},gt=function(e,n,t){var r,o,i,u;if(o=mt(e,t)?t.firstChild:t,mt(i=e,u=n)&&i.remove(u.firstChild,!0),!nn(e,n,!0))for(;r=n.firstChild;)o.appendChild(r)},pt=function(n,e,t){var r,o,i=e.parentNode;if(tn(n,e)&&tn(n,t)){Ve(t.lastChild)&&(o=t.lastChild),i===t.lastChild&&Ye(i.previousSibling)&&n.remove(i.previousSibling),(r=t.lastChild)&&Ye(r)&&e.hasChildNodes()&&n.remove(r),nn(n,t,!0)&&n.$(t).empty(),gt(n,e,t),o&&t.appendChild(o);var u=Se(ve.fromDom(t),ve.fromDom(e))?n.getParents(e,Ve,t):[];n.remove(e),k(u,function(e){nn(n,e)&&e!==n.getRoot()&&n.remove(e)})}},vt=function(e,n,t,r){var o,i,u,a=e.dom;if(a.isEmpty(r))i=t,u=r,(o=e).dom.$(u).empty(),pt(o.dom,i,u),o.selection.setCursorLocation(u);else{var s=Yn(n);pt(a,t,r),e.selection.setRng(Gn(s))}},ht=function(e,n){var t=e.dom,r=e.selection,o=r.getStart(),i=cn.getClosestListRootElm(e,o),u=t.getParent(r.getStart(),"LI",i);if(u){var a=u.parentNode;if(a===e.getBody()&&nn(t,a))return!0;var s=qn(r.getRng()),c=t.getParent(lt(e,s,n,i),"LI",i);if(c&&c!==u)return e.undoManager.transact(function(){n?vt(e,s,c,u):Ge(u)?zn(e):function(e,n,t,r){var o=Yn(n);pt(e.dom,t,r);var i=Gn(o);e.selection.setRng(i)}(e,s,u,c)}),!0;if(!c&&!n&&0===s.startOffset&&0===s.endOffset)return e.undoManager.transact(function(){Kn(e)}),!0}return!1},yt=function(e,n){return ht(e,n)||function(o,i){var u=o.dom,e=o.selection.getStart(),a=cn.getClosestListRootElm(o,e),s=u.getParent(e,u.isBlock,a);if(s&&u.isEmpty(s)){var n=qn(o.selection.getRng()),c=u.getParent(lt(o,n,i,a),"LI",a);if(c)return o.undoManager.transact(function(){var e,n,t,r;n=s,t=a,r=(e=u).getParent(n.parentNode,e.isBlock,t),e.remove(n),r&&e.isEmpty(r)&&e.remove(r),st.mergeWithAdjacentLists(u,c.parentNode),o.selection.select(c,!0),o.selection.collapse(i)}),!0}return!1}(e,n)},Nt=function(e,n){return e.selection.isCollapsed()?yt(e,n):(r=(t=e).selection.getStart(),o=cn.getClosestListRootElm(t,r),!!(t.dom.getParent(r,"LI,DT,DD",o)||0<cn.getSelectedListItems(t).length)&&(t.undoManager.transact(function(){t.execCommand("Delete"),dt(t.dom,t.getBody())}),!0));var t,r,o},St=function(n){n.on("keydown",function(e){e.keyCode===Le.BACKSPACE?Nt(n,!1)&&e.preventDefault():e.keyCode===Le.DELETE&&Nt(n,!0)&&e.preventDefault()})},Ot=Nt,Ct=function(n){return{backspaceDelete:function(e){Ot(n,e)}}},bt=function(n,t){return function(){var e=n.dom.getParent(n.selection.getStart(),"UL,OL,DL");return e&&e.nodeName===t}},Lt=function(t){t.on("BeforeExecCommand",function(e){var n=e.command.toLowerCase();"indent"===n?Vn(t):"outdent"===n&&zn(t)}),t.addCommand("InsertUnorderedList",function(e,n){st.toggleList(t,"UL",n)}),t.addCommand("InsertOrderedList",function(e,n){st.toggleList(t,"OL",n)}),t.addCommand("InsertDefinitionList",function(e,n){st.toggleList(t,"DL",n)}),t.addCommand("RemoveList",function(){Kn(t)}),t.addQueryStateHandler("InsertUnorderedList",bt(t,"UL")),t.addQueryStateHandler("InsertOrderedList",bt(t,"OL")),t.addQueryStateHandler("InsertDefinitionList",bt(t,"DL"))},Tt=function(e){return e.getParam("lists_indent_on_tab",!0)},Et=function(e){var n;Tt(e)&&(n=e).on("keydown",function(e){e.keyCode!==Le.TAB||Le.metaKeyPressed(e)||n.undoManager.transact(function(){(e.shiftKey?zn(n):Vn(n))&&e.preventDefault()})}),St(e)},Dt=function(n,i){return function(o){var e=function(e){var n=function(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t;return-1}(e.parents,Qe),t=-1!==n?e.parents.slice(0,n):e.parents,r=$e.grep(t,Ve);o.setActive(0<r.length&&r[0].nodeName===i&&!Jn(r[0]))};return n.on("NodeChange",e),function(){return n.off("NodeChange",e)}}},wt=function(n){var e,t,r,o=function(e){return function(){return n.execCommand(e)}};t="advlist",r=(e=n).settings.plugins?e.settings.plugins:"",-1===$e.inArray(r.split(/[ ,]/),t)&&(n.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:o("InsertOrderedList"),onSetup:Dt(n,"OL")}),n.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:o("InsertUnorderedList"),onSetup:Dt(n,"UL")}))};!function kt(){f.add("lists",function(e){return Et(e),wt(e),Lt(e),Ct(e)})}()}(window);