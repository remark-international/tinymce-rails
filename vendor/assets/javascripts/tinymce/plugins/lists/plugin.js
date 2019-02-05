/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.0-1 (2019-02-04)
 */
!function(){"use strict";var e,n,t,r,o,i,u,s,a=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),f=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),d=tinymce.util.Tools.resolve("tinymce.util.VK"),p=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),v=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),m=function(e){return e&&"BR"===e.nodeName},g=function(e){return e&&3===e.nodeType},h=function(e){return e&&/^(OL|UL|DL)$/.test(e.nodeName)},y=function(e){return e&&/^(OL|UL)$/.test(e.nodeName)},N=function(e){return e&&/^(DT|DD)$/.test(e.nodeName)},S=function(e){return e&&/^(LI|DT|DD)$/.test(e.nodeName)},O=function(e){return e&&/^(TH|TD)$/.test(e.nodeName)},C=m,b=function(e,n){return n&&!!e.schema.getTextBlockElements()[n.nodeName]},T=function(e,n){return e&&e.nodeName in n},L=function(e,n){return!!m(n)&&!(!e.isBlock(n.nextSibling)||m(n.previousSibling))},D=function(e,n,t){var r=e.isEmpty(n);return!(t&&0<e.select("span[data-mce-type=bookmark]",n).length)&&r},E=function(e,n){return e.isChildOf(n,e.getRoot())},w=function(e,n){if(g(e))return{container:e,offset:n};var t=c.getNode(e,n);return g(t)?{container:t,offset:n>=e.childNodes.length?t.data.length:0}:t.previousSibling&&g(t.previousSibling)?{container:t.previousSibling,offset:t.previousSibling.data.length}:t.nextSibling&&g(t.nextSibling)?{container:t.nextSibling,offset:0}:{container:e,offset:n}},k=function(e){var n=e.cloneRange(),t=w(e.startContainer,e.startOffset);n.setStart(t.container,t.offset);var r=w(e.endContainer,e.endOffset);return n.setEnd(r.container,r.offset),n},A=l.DOM,x=function(o){var i={},e=function(e){var n,t,r;t=o[e?"startContainer":"endContainer"],r=o[e?"startOffset":"endOffset"],1===t.nodeType&&(n=A.create("span",{"data-mce-type":"bookmark"}),t.hasChildNodes()?(r=Math.min(r,t.childNodes.length-1),e?t.insertBefore(n,t.childNodes[r]):A.insertAfter(n,t.childNodes[r])):t.appendChild(n),t=n,r=0),i[e?"startContainer":"endContainer"]=t,i[e?"startOffset":"endOffset"]=r};return e(!0),o.collapsed||e(),i},R=function(o){function e(e){var n,t,r;n=r=o[e?"startContainer":"endContainer"],t=o[e?"startOffset":"endOffset"],n&&(1===n.nodeType&&(t=function(e){for(var n=e.parentNode.firstChild,t=0;n;){if(n===e)return t;1===n.nodeType&&"bookmark"===n.getAttribute("data-mce-type")||t++,n=n.nextSibling}return-1}(n),n=n.parentNode,A.remove(r),!n.hasChildNodes()&&A.isBlock(n)&&n.appendChild(A.create("br"))),o[e?"startContainer":"endContainer"]=n,o[e?"startOffset":"endOffset"]=t)}e(!0),e();var n=A.createRng();return n.setStart(o.startContainer,o.startOffset),o.endContainer&&n.setEnd(o.endContainer,o.endOffset),k(n)},I=function(e){return function(){return e}},_=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return!t.apply(null,e)}},B=I(!1),P=I(!0),M=B,U=P,F=function(){return j},j=(r={fold:function(e,n){return e()},is:M,isSome:M,isNone:U,getOr:t=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:t,orThunk:n,map:F,ap:F,each:function(){},bind:F,flatten:F,exists:M,forall:U,filter:F,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:I("none()")},Object.freeze&&Object.freeze(r),r),H=function(t){var e=function(){return t},n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:U,isNone:M,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return H(e(t))},ap:function(e){return e.fold(F,function(e){return H(e(t))})},each:function(e){e(t)},bind:r,flatten:e,exists:r,forall:r,filter:function(e){return e(t)?o:j},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(M,function(e){return n(t,e)})},toArray:function(){return[t]},toString:function(){return"some("+t+")"}};return o},$={some:H,none:F,from:function(e){return null===e||e===undefined?j:H(e)}},q=function(n){return function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"===n&&Array.prototype.isPrototypeOf(e)?"array":"object"===n&&String.prototype.isPrototypeOf(e)?"string":n}(e)===n}},W=q("string"),z=q("boolean"),K=q("function"),V=q("number"),X=function(e,n){for(var t=e.length,r=new Array(t),o=0;o<t;o++){var i=e[o];r[o]=n(i,o,e)}return r},Q=function(e,n){for(var t=0,r=e.length;t<r;t++)n(e[t],t,e)},Y=function(e,n){for(var t=[],r=0,o=e.length;r<o;r++){var i=e[r];n(i,r,e)&&t.push(i)}return t},G=function(e,n,t){return Q(e,function(e){t=n(t,e)}),t},J=function(e,n){for(var t=0,r=e.length;t<r;t++){var o=e[t];if(n(o,t,e))return $.some(o)}return $.none()},Z=Array.prototype.push,ee=function(e,n){return function(e){for(var n=[],t=0,r=e.length;t<r;++t){if(!Array.prototype.isPrototypeOf(e[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+e);Z.apply(n,e[t])}return n}(X(e,n))},ne=Array.prototype.slice,te=function(e){return 0===e.length?$.none():$.some(e[0])},re=function(e){return 0===e.length?$.none():$.some(e[e.length-1])},oe=(K(Array.from)&&Array.from,"undefined"!=typeof window?window:Function("return this;")()),ie=function(e,n){return function(e,n){for(var t=n!==undefined&&null!==n?n:oe,r=0;r<e.length&&t!==undefined&&null!==t;++r)t=t[e[r]];return t}(e.split("."),n)},ue=function(e,n){var t=ie(e,n);if(t===undefined||null===t)throw e+" not available on this browser";return t},se=function(e){var n,t=ie("ownerDocument.defaultView",e);return(n=t,ue("HTMLElement",n)).prototype.isPrototypeOf(e)},ae=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),ce=function(e){var n=e.selection.getStart(!0);return e.dom.getParent(n,"OL,UL,DL",de(e,n))},fe=function(e){var t,n,r,o=e.selection.getSelectedBlocks();return v.grep((t=e,n=o,r=v.map(n,function(e){var n=t.dom.getParent(e,"li,dd,dt",de(t,e));return n||e}),ae.unique(r)),function(e){return S(e)})},de=function(e,n){var t=e.dom.getParents(n,"TD,TH");return 0<t.length?t[0]:e.getBody()},le=function(e,n){var t=e.dom.getParents(n,"ol,ul",de(e,n));return re(t)},me=function(n,e){var t=X(e,function(e){return le(n,e).getOr(e)});return ae.unique(t)},ge={isList:function(e){var n=ce(e);return se(n)},getParentList:ce,getSelectedSubLists:function(e){var n,t,r,o=ce(e),i=e.selection.getSelectedBlocks();return r=i,(t=o)&&1===r.length&&r[0]===t?(n=o,v.grep(n.querySelectorAll("ol,ul,dl"),function(e){return h(e)})):v.grep(i,function(e){return h(e)&&o!==e})},getSelectedListItems:fe,getClosestListRootElm:de,getSelectedDlItems:function(e){return Y(fe(e),N)},getSelectedListRoots:function(e){var n,t,r,o=(t=le(n=e,n.selection.getStart()),r=Y(n.selection.getSelectedBlocks(),y),t.toArray().concat(r));return me(e,o)}},pe=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:I(e)}},ve={fromHtml:function(e,n){var t=(n||document).createElement("div");if(t.innerHTML=e,!t.hasChildNodes()||1<t.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return pe(t.childNodes[0])},fromTag:function(e,n){var t=(n||document).createElement(e);return pe(t)},fromText:function(e,n){var t=(n||document).createTextNode(e);return pe(t)},fromDom:pe,fromPoint:function(e,n,t){var r=e.dom();return $.from(r.elementFromPoint(n,t)).map(pe)}},he=function(e,n){for(var t=[],r=0;r<e.length;r++){var o=e[r];if(!o.isSome())return $.none();t.push(o.getOrDie())}return $.some(n.apply(null,t))},ye=Object.keys,Ne=function(){return ue("Node")},Se=function(e,n,t){return 0!=(e.compareDocumentPosition(n)&t)},Oe=function(e,n){return Se(e,n,Ne().DOCUMENT_POSITION_CONTAINED_BY)},Ce=function(e,n){var t=function(e,n){for(var t=0;t<e.length;t++){var r=e[t];if(r.test(n))return r}return undefined}(e,n);if(!t)return{major:0,minor:0};var r=function(e){return Number(n.replace(t,"$"+e))};return Te(r(1),r(2))},be=function(){return Te(0,0)},Te=function(e,n){return{major:e,minor:n}},Le={nu:Te,detect:function(e,n){var t=String(n).toLowerCase();return 0===e.length?be():Ce(e,t)},unknown:be},De="Firefox",Ee=function(e,n){return function(){return n===e}},we=function(e){var n=e.current;return{current:n,version:e.version,isEdge:Ee("Edge",n),isChrome:Ee("Chrome",n),isIE:Ee("IE",n),isOpera:Ee("Opera",n),isFirefox:Ee(De,n),isSafari:Ee("Safari",n)}},ke={unknown:function(){return we({current:undefined,version:Le.unknown()})},nu:we,edge:I("Edge"),chrome:I("Chrome"),ie:I("IE"),opera:I("Opera"),firefox:I(De),safari:I("Safari")},Ae="Windows",xe="Android",Re="Solaris",Ie="FreeBSD",_e=function(e,n){return function(){return n===e}},Be=function(e){var n=e.current;return{current:n,version:e.version,isWindows:_e(Ae,n),isiOS:_e("iOS",n),isAndroid:_e(xe,n),isOSX:_e("OSX",n),isLinux:_e("Linux",n),isSolaris:_e(Re,n),isFreeBSD:_e(Ie,n)}},Pe={unknown:function(){return Be({current:undefined,version:Le.unknown()})},nu:Be,windows:I(Ae),ios:I("iOS"),android:I(xe),linux:I("Linux"),osx:I("OSX"),solaris:I(Re),freebsd:I(Ie)},Me=function(e,n){var t=String(n).toLowerCase();return J(e,function(e){return e.search(t)})},Ue=function(e,t){return Me(e,t).map(function(e){var n=Le.detect(e.versionRegexes,t);return{current:e.name,version:n}})},Fe=function(e,t){return Me(e,t).map(function(e){var n=Le.detect(e.versionRegexes,t);return{current:e.name,version:n}})},je=function(e,n){return-1!==e.indexOf(n)},He=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,$e=function(n){return function(e){return je(e,n)}},qe=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return je(e,"edge/")&&je(e,"chrome")&&je(e,"safari")&&je(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,He],search:function(e){return je(e,"chrome")&&!je(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return je(e,"msie")||je(e,"trident")}},{name:"Opera",versionRegexes:[He,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:$e("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:$e("firefox")},{name:"Safari",versionRegexes:[He,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(je(e,"safari")||je(e,"mobile/"))&&je(e,"applewebkit")}}],We=[{name:"Windows",search:$e("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return je(e,"iphone")||je(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:$e("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:$e("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:$e("linux"),versionRegexes:[]},{name:"Solaris",search:$e("sunos"),versionRegexes:[]},{name:"FreeBSD",search:$e("freebsd"),versionRegexes:[]}],ze={browsers:I(qe),oses:I(We)},Ke=function(e){var n,t,r,o,i,u,s,a,c,f,d,l=ze.browsers(),m=ze.oses(),g=Ue(l,e).fold(ke.unknown,ke.nu),p=Fe(m,e).fold(Pe.unknown,Pe.nu);return{browser:g,os:p,deviceType:(t=g,r=e,o=(n=p).isiOS()&&!0===/ipad/i.test(r),i=n.isiOS()&&!o,u=n.isAndroid()&&3===n.version.major,s=n.isAndroid()&&4===n.version.major,a=o||u||s&&!0===/mobile/i.test(r),c=n.isiOS()||n.isAndroid(),f=c&&!a,d=t.isSafari()&&n.isiOS()&&!1===/safari/i.test(r),{isiPad:I(o),isiPhone:I(i),isTablet:I(a),isPhone:I(f),isTouch:I(c),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:I(d)})}},Ve={detect:(o=function(){var e=navigator.userAgent;return Ke(e)},u=!1,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return u||(u=!0,i=o.apply(null,e)),i})},Xe=(Node.ATTRIBUTE_NODE,Node.CDATA_SECTION_NODE,Node.COMMENT_NODE,Node.DOCUMENT_NODE,Node.DOCUMENT_TYPE_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE),Qe=(Node.TEXT_NODE,Node.PROCESSING_INSTRUCTION_NODE,Node.ENTITY_REFERENCE_NODE,Node.ENTITY_NODE,Node.NOTATION_NODE,Xe),Ye=function(e,n){return e.dom()===n.dom()},Ge=Ve.detect().browser.isIE()?function(e,n){return Oe(e.dom(),n.dom())}:function(e,n){var t=e.dom(),r=n.dom();return t!==r&&t.contains(r)},Je=function(e,n){var t=e.dom();if(t.nodeType!==Qe)return!1;if(t.matches!==undefined)return t.matches(n);if(t.msMatchesSelector!==undefined)return t.msMatchesSelector(n);if(t.webkitMatchesSelector!==undefined)return t.webkitMatchesSelector(n);if(t.mozMatchesSelector!==undefined)return t.mozMatchesSelector(n);throw new Error("Browser lacks native selectors")},Ze=function(e){var n=e.dom();return $.from(n.parentNode).map(ve.fromDom)},en=function(e){var n=e.dom();return X(n.childNodes,ve.fromDom)},nn=function(e,n){var t=e.dom().childNodes;return $.from(t[n]).map(ve.fromDom)},tn=function(e){return nn(e,0)},rn=function(e){return nn(e,e.dom().childNodes.length-1)},on=(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]}("element","offset"),function(n,t){Ze(n).each(function(e){e.dom().insertBefore(t.dom(),n.dom())})}),un=function(e,n){e.dom().appendChild(n.dom())},sn=function(n,e){Q(e,function(e){un(n,e)})},an=function(e){var n=e.dom();null!==n.parentNode&&n.parentNode.removeChild(n)},cn=function(e){return e.dom().nodeName.toLowerCase()},fn=function(e,n){var t=e.dom();!function(e,n){for(var t=ye(e),r=0,o=t.length;r<o;r++){var i=t[r];n(e[i],i,e)}}(n,function(e,n){!function(e,n,t){if(!(W(t)||z(t)||V(t)))throw console.error("Invalid call to Attr.set. Key ",n,":: Value ",t,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(n,t+"")}(t,n,e)})},dn=function(e){return G(e.dom().attributes,function(e,n){return e[n.name]=n.value,e},{})},ln=function(e,n,t){if(!W(t))throw console.error("Invalid call to CSS.set. Property ",n,":: Value ",t,":: Element ",e),new Error("CSS value must be a string: "+t);e.style!==undefined&&e.style.setProperty(n,t)},mn=function(e){return n=e,t=!0,ve.fromDom(n.dom().cloneNode(t));var n,t},gn=function(e,n){var t,r,o,i,u=(t=e,r=n,o=ve.fromTag(r),i=dn(t),fn(o,i),o);on(e,u);var s=en(e);return sn(u,s),an(e),u},pn=function(e,n){un(e.item,n.list)},vn=function(f,e,d){var n=e.slice(0,d.depth);return re(n).each(function(e){var n,t,r,o,i,u,s,a,c=(n=f,t=d.itemAttributes,r=d.content,o=ve.fromTag("li",n),fn(o,t),sn(o,r),o);u=c,un((i=e).list,u),i.item=u,a=d,cn((s=e).list)!==a.listType&&(s.list=gn(s.list,a.listType)),fn(s.list,a.listAttributes)}),n},hn=function(e,n,t){var r,o=function(e,n,t){for(var r,o,i,u=[],s=0;s<t;s++)u.push((r=e,o=n.listType,i={list:ve.fromTag(o,r),item:ve.fromTag("li",r)},un(i.list,i.item),i));return u}(e,t,t.depth-n.length);return function(e){for(var n=1;n<e.length;n++)pn(e[n-1],e[n])}(o),function(e,n){for(var t=0;t<e.length-1;t++)r=e[t].item,o="list-style-type",i="none",u=r.dom(),ln(u,o,i);var r,o,i,u;re(e).each(function(e){fn(e.list,n.listAttributes),fn(e.item,n.itemAttributes),sn(e.item,n.content)})}(o,t),r=o,he([re(n),te(r)],pn),n.concat(o)},yn=function(e){return Je(e,"OL,UL")},Nn=function(e){return tn(e).map(yn).getOr(!1)},Sn=function(e){return 0<e.depth},On=function(e){return e.isSelected},Cn=function(e){var n=en(e),t=rn(e).map(yn).getOr(!1)?n.slice(0,-1):n;return X(t,mn)},bn=Object.prototype.hasOwnProperty,Tn=(s=function(e,n){return n},function(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];if(0===e.length)throw new Error("Can't merge zero objects");for(var t={},r=0;r<e.length;r++){var o=e[r];for(var i in o)bn.call(o,i)&&(t[i]=s(t[i],o[i]))}return t}),Ln=function(n){Q(n,function(r,e){(function(e,n){for(var t=e[n].depth,r=n-1;0<=r;r--){if(e[r].depth===t)return $.some(e[r]);if(e[r].depth<t)break}return $.none()})(n,e).each(function(e){var n,t;t=e,(n=r).listType=t.listType,n.listAttributes=Tn({},t.listAttributes)})})},Dn=function(e){var n=e,t=function(){return n};return{get:t,set:function(e){n=e},clone:function(){return Dn(t())}}},En=function(i,u,s,a){return tn(a).filter(yn).fold(function(){u.each(function(e){Ye(e.start,a)&&s.set(!0)});var n,t,r,e=(n=a,t=i,r=s.get(),Ze(n).map(function(e){return{depth:t,isSelected:r,content:Cn(n),itemAttributes:dn(n),listAttributes:dn(e),listType:cn(e)}}));u.each(function(e){Ye(e.end,a)&&s.set(!1)});var o=rn(a).filter(yn).map(function(e){return wn(i,u,s,e)}).getOr([]);return e.toArray().concat(o)},function(e){return wn(i,u,s,e)})},wn=function(n,t,r,e){return ee(en(e),function(e){return(yn(e)?wn:En)(n+1,t,r,e)})},kn=tinymce.util.Tools.resolve("tinymce.Env"),An=function(e,n){var t,r,o,i,u=e.dom,s=e.schema.getBlockElements(),a=u.createFragment();if(e.settings.forced_root_block&&(o=e.settings.forced_root_block),o&&((r=u.create(o)).tagName===e.settings.forced_root_block&&u.setAttribs(r,e.settings.forced_root_block_attrs),T(n.firstChild,s)||a.appendChild(r)),n)for(;t=n.firstChild;){var c=t.nodeName;i||"SPAN"===c&&"bookmark"===t.getAttribute("data-mce-type")||(i=!0),T(t,s)?(a.appendChild(t),r=null):o?(r||(r=u.create(o),a.appendChild(r)),r.appendChild(t)):a.appendChild(t)}return e.settings.forced_root_block?i||kn.ie&&!(10<kn.ie)||r.appendChild(u.create("br",{"data-mce-bogus":"1"})):a.appendChild(u.create("br")),a},xn=function(e,n,t){return e.fire("ListMutation",{action:n,element:t})},Rn=function(i,e){return X(e,function(e){var n,t,r,o=(n=e.content,r=(t||document).createDocumentFragment(),Q(n,function(e){r.appendChild(e.dom())}),ve.fromDom(r));return ve.fromDom(An(i,o.dom()))})},In=function(e,n){return Ln(n),(t=e.contentDocument,r=n,o=G(r,function(e,n){return n.depth>e.length?hn(t,e,n):vn(t,e,n)},[]),te(o).map(function(e){return e.list})).toArray();var t,r,o},_n=function(e){var n,t,r=X(ge.getSelectedListItems(e),ve.fromDom);return he([J(r,_(Nn)),J((n=r,t=ne.call(n,0),t.reverse(),t),_(Nn))],function(e,n){return{start:e,end:n}})},Bn=function(s,e,a){var n,t,r,o=(n=e,t=_n(s),r=Dn(!1),X(n,function(e){return{sourceList:e,entries:wn(0,t,r,e)}}));Q(o,function(e){var n,t;n=e.entries,t=a,Q(Y(n,On),function(e){return function(e,n){switch(e){case"Indent":n.depth++;break;case"Outdent":n.depth--;break;case"Flatten":n.depth=0}}(t,e)});var r,o,i,u=(r=s,o=e.entries,ee(function(e,n){if(0===e.length)return[];for(var t=n(e[0]),r=[],o=[],i=0,u=e.length;i<u;i++){var s=e[i],a=n(s);a!==t&&(r.push(o),o=[]),t=a,o.push(s)}return 0!==o.length&&r.push(o),r}(o,Sn),function(e){return te(e).map(Sn).getOr(!1)?In(r,e):Rn(r,e)}));Q(u,function(e){xn(s,"Indent"===a?"IndentList":"OutdentList",e.dom())}),i=e.sourceList,Q(u,function(e){on(i,e)}),an(e.sourceList)})},Pn=l.DOM,Mn=function(e,n,t){var r,o,i,u,s,a;for(i=Pn.select('span[data-mce-type="bookmark"]',n),s=An(e,t),(r=Pn.createRng()).setStartAfter(t),r.setEndAfter(n),u=(o=r.extractContents()).firstChild;u;u=u.firstChild)if("LI"===u.nodeName&&e.dom.isEmpty(u)){Pn.remove(u);break}e.dom.isEmpty(o)||Pn.insertAfter(o,n),Pn.insertAfter(s,n),D(e.dom,t.parentNode)&&(a=t.parentNode,v.each(i,function(e){a.parentNode.insertBefore(e,t.parentNode)}),Pn.remove(a)),Pn.remove(t),D(e.dom,n)&&Pn.remove(n)},Un=function(e){Je(e,"DT")&&gn(e,"DD")},Fn=function(r,e,n){Q(n,"Indent"===e?Un:function(e){return n=r,void(Je(t=e,"DD")?gn(t,"DT"):Je(t,"DT")&&Ze(t).each(function(e){return Mn(n,e.dom(),t.dom())}));var n,t})},jn=function(e,n){var t=X(ge.getSelectedListRoots(e),ve.fromDom),r=X(ge.getSelectedDlItems(e),ve.fromDom),o=!1;if(t.length||r.length){var i=e.selection.getBookmark();Bn(e,t,n),Fn(e,n,r),e.selection.moveToBookmark(i),e.selection.setRng(k(e.selection.getRng())),e.nodeChanged(),o=!0}return o},Hn=function(e){return jn(e,"Indent")},$n=function(e){return jn(e,"Outdent")},qn=function(e){return jn(e,"Flatten")},Wn=function(e){return/\btox\-/.test(e.className)},zn=function(e){switch(e){case"UL":return"ToggleUlList";case"OL":return"ToggleOlList";case"DL":return"ToggleDLList"}},Kn=function(t,e){v.each(e,function(e,n){t.setAttribute(n,e)})},Vn=function(e,n,t){var r,o,i,u,s,a,c;r=e,o=n,u=(i=t)["list-style-type"]?i["list-style-type"]:null,r.setStyle(o,"list-style-type",u),s=e,Kn(a=n,(c=t)["list-attributes"]),v.each(s.select("li",a),function(e){Kn(e,c["list-item-attributes"])})},Xn=function(e,n,t,r){var o,i;for(o=n[t?"startContainer":"endContainer"],i=n[t?"startOffset":"endOffset"],1===o.nodeType&&(o=o.childNodes[Math.min(i,o.childNodes.length-1)]||o),!t&&C(o.nextSibling)&&(o=o.nextSibling);o.parentNode!==r;){if(b(e,o))return o;if(/^(TD|TH)$/.test(o.parentNode.nodeName))return o;o=o.parentNode}return o},Qn=function(f,d,l){void 0===l&&(l={});var e,n=f.selection.getRng(!0),m="LI",t=ge.getClosestListRootElm(f,f.selection.getStart(!0)),g=f.dom;"false"!==g.getContentEditable(f.selection.getNode())&&("DL"===(d=d.toUpperCase())&&(m="DT"),e=x(n),v.each(function(t,e,r){for(var o,i=[],u=t.dom,n=Xn(t,e,!0,r),s=Xn(t,e,!1,r),a=[],c=n;c&&(a.push(c),c!==s);c=c.nextSibling);return v.each(a,function(e){if(b(t,e))return i.push(e),void(o=null);if(u.isBlock(e)||C(e))return C(e)&&u.remove(e),void(o=null);var n=e.nextSibling;p.isBookmarkNode(e)&&(b(t,n)||!n&&e.parentNode===r)?o=null:(o||(o=u.create("p"),e.parentNode.insertBefore(o,e),i.push(o)),o.appendChild(e))}),i}(f,n,t),function(e){var n,t,r,o,i,u,s,a,c;(t=e.previousSibling)&&h(t)&&t.nodeName===d&&(r=t,o=l,i=g.getStyle(r,"list-style-type"),u=o?o["list-style-type"]:"",i===(u=null===u?"":u))?(n=t,e=g.rename(e,m),t.appendChild(e)):(n=g.create(d),e.parentNode.insertBefore(n,e),n.appendChild(e),e=g.rename(e,m)),s=g,a=e,c=["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"],v.each(c,function(e){var n;return s.setStyle(a,((n={})[e]="",n))}),Vn(g,n,l),Gn(f.dom,n)}),f.selection.setRng(R(e)))},Yn=function(e,n,t){return a=t,(s=n)&&a&&h(s)&&s.nodeName===a.nodeName&&(i=n,u=t,(o=e).getStyle(i,"list-style-type",!0)===o.getStyle(u,"list-style-type",!0))&&(r=t,n.className===r.className);var r,o,i,u,s,a},Gn=function(e,n){var t,r;if(t=n.nextSibling,Yn(e,n,t)){for(;r=t.firstChild;)n.appendChild(r);e.remove(t)}if(t=n.previousSibling,Yn(e,n,t)){for(;r=t.lastChild;)n.insertBefore(r,n.firstChild);e.remove(t)}},Jn=function(n,e,t,r,o){if(e.nodeName!==r||Zn(o)){var i=x(n.selection.getRng(!0));v.each([e].concat(t),function(e){!function(e,n,t,r){if(n.nodeName!==t){var o=e.dom.rename(n,t);Vn(e.dom,o,r),xn(e,zn(t),o)}else Vn(e.dom,n,r),xn(e,zn(t),n)}(n,e,r,o)}),n.selection.setRng(R(i))}else qn(n)},Zn=function(e){return"list-style-type"in e},et={toggleList:function(e,n,t){var r=ge.getParentList(e),o=ge.getSelectedSubLists(e);t=t||{},r&&0<o.length?Jn(e,r,o,n,t):function(e,n,t,r){if(n!==e.getBody())if(n)if(n.nodeName!==t||Zn(r)||Wn(n)){var o=x(e.selection.getRng(!0));Vn(e.dom,n,r);var i=e.dom.rename(n,t);Gn(e.dom,i),e.selection.setRng(R(o)),xn(e,zn(t),i)}else qn(e);else Qn(e,t,r),xn(e,zn(t),n)}(e,r,n,t)},mergeWithAdjacentLists:Gn},nt=l.DOM,tt=function(e,n){var t,r=n.parentNode;"LI"===r.nodeName&&r.firstChild===n&&((t=r.previousSibling)&&"LI"===t.nodeName?(t.appendChild(n),D(e,r)&&nt.remove(r)):nt.setStyle(r,"listStyleType","none")),h(r)&&(t=r.previousSibling)&&"LI"===t.nodeName&&t.appendChild(n)},rt=function(n,e){v.each(v.grep(n.select("ol,ul",e)),function(e){tt(n,e)})},ot=function(e,n,t,r){var o,i,u=n.startContainer,s=n.startOffset;if(3===u.nodeType&&(t?s<u.data.length:0<s))return u;for(o=e.schema.getNonEmptyElements(),1===u.nodeType&&(u=c.getNode(u,s)),i=new f(u,r),t&&L(e.dom,u)&&i.next();u=i[t?"next":"prev2"]();){if("LI"===u.nodeName&&!u.hasChildNodes())return u;if(o[u.nodeName])return u;if(3===u.nodeType&&0<u.data.length)return u}},it=function(e,n){var t=n.childNodes;return 1===t.length&&!h(t[0])&&e.isBlock(t[0])},ut=function(e,n,t){var r,o,i,u;if(o=it(e,t)?t.firstChild:t,it(i=e,u=n)&&i.remove(u.firstChild,!0),!D(e,n,!0))for(;r=n.firstChild;)o.appendChild(r)},st=function(n,e,t){var r,o,i=e.parentNode;if(E(n,e)&&E(n,t)){h(t.lastChild)&&(o=t.lastChild),i===t.lastChild&&C(i.previousSibling)&&n.remove(i.previousSibling),(r=t.lastChild)&&C(r)&&e.hasChildNodes()&&n.remove(r),D(n,t,!0)&&n.$(t).empty(),ut(n,e,t),o&&t.appendChild(o);var u=Ge(ve.fromDom(t),ve.fromDom(e))?n.getParents(e,h,t):[];n.remove(e),Q(u,function(e){D(n,e)&&e!==n.getRoot()&&n.remove(e)})}},at=function(e,n,t,r){var o,i,u,s=e.dom;if(s.isEmpty(r))i=t,u=r,(o=e).dom.$(u).empty(),st(o.dom,i,u),o.selection.setCursorLocation(u);else{var a=x(n);st(s,t,r),e.selection.setRng(R(a))}},ct=function(e,n){var t,r,o,i=e.dom,u=e.selection,s=u.getStart(),a=ge.getClosestListRootElm(e,s),c=i.getParent(u.getStart(),"LI",a);if(c){if((t=c.parentNode)===e.getBody()&&D(i,t))return!0;if(r=k(u.getRng(!0)),(o=i.getParent(ot(e,r,n,a),"LI",a))&&o!==c)return n?at(e,r,o,c):function(e,n,t,r){var o=x(n);st(e.dom,t,r);var i=R(o);e.selection.setRng(i)}(e,r,c,o),!0;if(!o&&!n)return qn(e),!0}return!1},ft=function(e,n){return ct(e,n)||function(o,i){var u=o.dom,e=o.selection.getStart(),s=ge.getClosestListRootElm(o,e),a=u.getParent(e,u.isBlock,s);if(a&&u.isEmpty(a)){var n=k(o.selection.getRng(!0)),c=u.getParent(ot(o,n,i,s),"LI",s);if(c)return o.undoManager.transact(function(){var e,n,t,r;n=a,t=s,r=(e=u).getParent(n.parentNode,e.isBlock,t),e.remove(n),r&&e.isEmpty(r)&&e.remove(r),et.mergeWithAdjacentLists(u,c.parentNode),o.selection.select(c,!0),o.selection.collapse(i)}),!0}return!1}(e,n)},dt=function(e,n){return e.selection.isCollapsed()?ft(e,n):(r=(t=e).selection.getStart(),o=ge.getClosestListRootElm(t,r),!!(t.dom.getParent(r,"LI,DT,DD",o)||0<ge.getSelectedListItems(t).length)&&(t.undoManager.transact(function(){t.execCommand("Delete"),rt(t.dom,t.getBody())}),!0));var t,r,o},lt=function(n){n.on("keydown",function(e){e.keyCode===d.BACKSPACE?dt(n,!1)&&e.preventDefault():e.keyCode===d.DELETE&&dt(n,!0)&&e.preventDefault()})},mt=dt,gt=function(n){return{backspaceDelete:function(e){mt(n,e)}}},pt=function(n,t){return function(){var e=n.dom.getParent(n.selection.getStart(),"UL,OL,DL");return e&&e.nodeName===t}},vt=function(t){t.on("BeforeExecCommand",function(e){var n=e.command.toLowerCase();"indent"===n?Hn(t):"outdent"===n&&$n(t)}),t.addCommand("InsertUnorderedList",function(e,n){et.toggleList(t,"UL",n)}),t.addCommand("InsertOrderedList",function(e,n){et.toggleList(t,"OL",n)}),t.addCommand("InsertDefinitionList",function(e,n){et.toggleList(t,"DL",n)}),t.addCommand("RemoveList",function(){qn(t)}),t.addQueryStateHandler("InsertUnorderedList",pt(t,"UL")),t.addQueryStateHandler("InsertOrderedList",pt(t,"OL")),t.addQueryStateHandler("InsertDefinitionList",pt(t,"DL"))},ht=function(e){return e.getParam("lists_indent_on_tab",!0)},yt=function(e){var n;ht(e)&&(n=e).on("keydown",function(e){e.keyCode!==d.TAB||d.metaKeyPressed(e)||n.undoManager.transact(function(){(e.shiftKey?$n(n):Hn(n))&&e.preventDefault()})}),lt(e)},Nt=function(n,i){return function(o){var e=function(e){var n=function(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t;return-1}(e.parents,O),t=-1!==n?e.parents.slice(0,n):e.parents,r=v.grep(t,h);o.setActive(0<r.length&&r[0].nodeName===i&&!Wn(r[0]))};return n.on("NodeChange",e),function(){return n.off("NodeChange",e)}}},St=function(n){var e,t,r,o=function(e){return function(){return n.execCommand(e)}};t="advlist",r=(e=n).settings.plugins?e.settings.plugins:"",-1===v.inArray(r.split(/[ ,]/),t)&&(n.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:o("InsertOrderedList"),onSetup:Nt(n,"OL")}),n.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:o("InsertUnorderedList"),onSetup:Nt(n,"UL")}))};a.add("lists",function(e){return yt(e),St(e),vt(e),gt(e)}),function Ot(){}}();