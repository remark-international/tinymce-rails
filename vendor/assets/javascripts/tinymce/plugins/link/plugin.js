/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.0-1 (2019-02-04)
 */
!function(){"use strict";var n,t,e,r,o,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=tinymce.util.Tools.resolve("tinymce.util.VK"),a=function(n){return n.target_list},c=function(n){return n.rel_list},l=function(n){return n.link_class_list},h=function(n){return"boolean"==typeof n.link_assume_external_targets&&n.link_assume_external_targets},f=function(n){return"boolean"==typeof n.link_context_toolbar&&n.link_context_toolbar},s=function(n){return n.link_list},p=function(n){return"string"==typeof n.default_link_target},v=function(n){return n.default_link_target},g=a,d=function(n){return!1!==a(n)},m=c,y=function(n){return c(n)!==undefined},k=l,x=function(n){return l(n)!==undefined},b=function(n){return!1!==n.link_title},O=function(n){return"boolean"==typeof n.allow_unsafe_link_target&&n.allow_unsafe_link_target},w=function(n){return!0===n.link_quicklink},_=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),A=tinymce.util.Tools.resolve("tinymce.Env"),C=function(n){if(!A.ie||10<A.ie){var t=document.createElement("a");t.target="_blank",t.href=n,t.rel="noreferrer noopener";var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),i=t,u=e,document.body.appendChild(i),i.dispatchEvent(u),document.body.removeChild(i)}else{var r=window.open("","_blank");if(r){r.opener=null;var o=r.document;o.open(),o.write('<meta http-equiv="refresh" content="0; url='+_.DOM.encode(n)+'">'),o.close()}}var i,u},T=tinymce.util.Tools.resolve("tinymce.util.Tools"),N=function(n,t){var e,r,o=["noopener"],i=n?n.split(/\s+/):[],u=function(n){return n.filter(function(n){return-1===T.inArray(o,n)})};return(i=t?(e=u(e=i)).length?e.concat(o):o:u(i)).length?(r=i,T.trim(r.sort().join(" "))):""},S=function(n,t){return t=t||n.selection.getNode(),D(t)?n.dom.select("a[href]",t)[0]:n.dom.getParent(t,"a[href]")},M=function(n){return n&&"A"===n.nodeName&&n.href},D=function(n){return n&&"FIGURE"===n.nodeName&&/\bimage\b/i.test(n.className)},z=function(n,t){var e,r;(r=n.dom.select("img",t)[0])&&(e=n.dom.getParents(r,"a[href]",t)[0])&&(e.parentNode.insertBefore(r,e),n.dom.remove(e))},E=function(n,t,e){var r,o;(o=n.dom.select("img",t)[0])&&(r=n.dom.create("a",e),o.parentNode.insertBefore(r,o),r.appendChild(o))},L=function(i,u){return function(o){i.undoManager.transact(function(){var n=i.selection.getNode(),t=S(i,n),e={href:o.href,target:o.target?o.target:null,rel:o.rel?o.rel:null,"class":o["class"]?o["class"]:null,title:o.title?o.title:null};if(!y(i.settings)&&!1===O(i.settings)){var r=N(e.rel,"_blank"===e.target);e.rel=r||null}o.href===u.href&&(u.attach(),u={}),t?(i.focus(),o.hasOwnProperty("text")&&("innerText"in t?t.innerText=o.text:t.textContent=o.text),i.dom.setAttribs(t,e),i.selection.select(t),i.undoManager.add()):D(n)?E(i,n,e):o.hasOwnProperty("text")?i.insertContent(i.dom.createHTML("a",e,i.dom.encode(o.text))):i.execCommand("mceInsertLink",!1,e)})}},U=function(t){return function(){t.undoManager.transact(function(){var n=t.selection.getNode();D(n)?z(t,n):t.execCommand("unlink")})}},P=function(n){return 0<T.grep(n,M).length},R=function(n){var t=n.getAttribute("data-mce-href");return t||n.getAttribute("href")},K=function(n){return!(/</.test(n)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(n)||-1===n.indexOf("href=")))},q=S,I=function(n,t){var e=t?t.innerText||t.textContent:n.getContent({format:"text"});return e.replace(/\uFEFF/g,"")},j=N,V=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]},B=function(n){return function(){return n}},F=B(!1),W=B(!0),H=F,$=W,G=function(){return J},J=(r={fold:function(n,t){return n()},is:H,isSome:H,isNone:$,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:e,orThunk:t,map:G,ap:G,each:function(){},bind:G,flatten:G,exists:H,forall:$,filter:G,equals:n=function(n){return n.isNone()},equals_:n,toArray:function(){return[]},toString:B("none()")},Object.freeze&&Object.freeze(r),r),X=function(e){var n=function(){return e},t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:$,isNone:H,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return X(n(e))},ap:function(n){return n.fold(G,function(n){return X(n(e))})},each:function(n){n(e)},bind:r,flatten:n,exists:r,forall:r,filter:function(n){return n(e)?o:J},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(H,function(n){return t(e,n)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}};return o},Q={some:X,none:G,from:function(n){return null===n||n===undefined?J:X(n)}},Y=function(t){return function(n){return function(n){if(null===n)return"null";var t=typeof n;return"object"===t&&Array.prototype.isPrototypeOf(n)?"array":"object"===t&&String.prototype.isPrototypeOf(n)?"string":t}(n)===t}},Z=Y("string"),nn=Y("function"),tn=(o=Array.prototype.indexOf)===undefined?function(n,t){return en(n,t)}:function(n,t){return o.call(n,t)},en=function(n,t){for(var e=0,r=n.length;e<r;++e)if(n[e]===t)return e;return-1},rn=Array.prototype.push,on=function(n){for(var t=[],e=0,r=n.length;e<r;++e){if(!Array.prototype.isPrototypeOf(n[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+n);rn.apply(t,n[e])}return t},un=function(n,t){var e=function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var i=n[o];r[o]=t(i,o,n)}return r}(n,t);return on(e)},an=(Array.prototype.slice,nn(Array.from)&&Array.from,function(n,t){for(var e=0;e<n.length;e++){var r=t(n[e],e);if(r.isSome())return r}return Q.none()}),cn=function(n){return Z(n.value)?n.value:""},ln=function(e){return void 0===e&&(e=cn),function(n){return Q.from(n).map(function(n){return t=n,r=e,o=[],T.each(t,function(n){var t=Z(n.text)?n.text:Z(n.title)?n.title:"";if(n.menu!==undefined);else{var e=r(n);o.push({text:t,value:e})}}),o;var t,r,o})}},fn={sanitize:function(n){return ln(cn)(n)},sanitizeWith:ln,createUi:function(t,e){return function(n){return{name:t,type:"selectbox",label:e,items:n}}},getValue:cn},sn=function(n){var t=n,e=function(){return t};return{get:e,set:function(n){t=n},clone:function(){return sn(e())}}},gn=function(t,n,e,r){var o,i,u=r[n],a=0<t.length;return u!==undefined?(o=u,i=e,an(i,function(n){return Q.some(n).filter(function(n){return n.value===o})})).map(function(n){return{url:{value:n.value,meta:{text:a?t:n.text,attach:V}},text:a?t:n.text}}):Q.none()},dn=function(n,i){var u=sn(n.text),o=function(n,t){var e,r,o=(e=i,r=t.name,"link"===r?e.catalogs.link:"anchor"===r?e.catalogs.anchor:Q.none()).getOr([]);return gn(u.get(),t.name,o,n)};return{onChange:function(n,t){return"url"===t.name?function(n){if(u.get().length<=0){var t=n.url.meta.text!==undefined?n.url.meta.text:n.url.value;return Q.some({text:t})}return Q.none()}(n()):(e=["anchor","link"],r=t.name,-1<tn(e,r)?o(n(),t):("text"===t.name&&u.set(n().text),Q.none()));var e,r}}},mn=function(){return(mn=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},hn=function(n){var e=Q.none(),t=[],r=function(n){o()?u(n):t.push(n)},o=function(){return e.isSome()},i=function(n){!function(n,t){for(var e=0,r=n.length;e<r;e++)t(n[e],e,n)}(n,u)},u=function(t){e.each(function(n){setTimeout(function(){t(n)},0)})};return n(function(n){e=Q.some(n),i(t),t=[]}),{get:r,map:function(e){return hn(function(t){r(function(n){t(e(n))})})},isReady:o}},pn={nu:hn,pure:function(t){return hn(function(n){n(t)})}},vn=function(t){var n=function(n){var r;t((r=n,function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=this;setTimeout(function(){r.apply(e,n)},0)}))},e=function(){return pn.nu(n)};return{map:function(r){return vn(function(e){n(function(n){var t=r(n);e(t)})})},bind:function(e){return vn(function(t){n(function(n){e(n).get(t)})})},anonBind:function(e){return vn(function(t){n(function(n){e.get(t)})})},toLazy:e,toCached:function(){var t=null;return vn(function(n){null===t&&(t=e()),t.get(n)})},get:n}},yn={nu:vn,pure:function(t){return vn(function(n){n(t)})}},kn=tinymce.util.Tools.resolve("tinymce.util.Delay"),xn=function(n){var t=n.href;return 0<t.indexOf("@")&&-1===t.indexOf("//")&&-1===t.indexOf("mailto:")?Q.some({message:"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",preprocess:function(n){return mn({},n,{href:"mailto:"+t})}}):Q.none()},bn=function(u,n,a){return an([xn,(e=n,function(n){var t=n.href;return!0===e&&!/^\w+:/i.test(t)||!1===e&&/^\s*www[\.|\d\.]/i.test(t)?Q.some({message:"The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",preprocess:function(n){return mn({},n,{href:"http://"+t})}}):Q.none()})],function(n){return n(a)}).fold(function(){return yn.pure(a)},function(i){return yn.nu(function(t){var e,n,r,o;e=u,n=i.message,r=function(n){console.log("state",n),t(n?i.preprocess(a):a)},o=e.selection.getRng(),kn.setEditorTimeout(e,function(){e.windowManager.confirm(n,function(n){e.selection.setRng(o),r(n)})})})});var e},On=function(n){var t=n.dom.select("a:not([href])"),e=un(t,function(n){var t=n.name||n.id;return t?[{text:t,value:"#"+t}]:[]});return 0<e.length?Q.some([{text:"None",value:""}].concat(e)):Q.none()},wn=function(n){if(x(n.settings)){var t=k(n.settings);return fn.sanitize(t)}return Q.none()},_n=tinymce.util.Tools.resolve("tinymce.util.XHR"),An=function(t){var e=function(n){return t.convertURL(n.value||n.url,"href")},n=s(t.settings);return yn.nu(function(t){"string"==typeof n?_n.send({url:n,success:function(n){return t(function(n){try{return Q.some(JSON.parse(n))}catch(t){return Q.none()}}(n))},error:function(n){return t(Q.none())}}):"function"==typeof n?n(function(n){return t(Q.some(n))}):t(Q.from(n))}).map(function(n){return n.bind(fn.sanitizeWith(e))})},Cn=function(n,t){if(y(n.settings)){var e=m(n.settings),r=t.is("_blank");return(!1===O(n.settings)?fn.sanitizeWith(function(n){return j(fn.getValue(n),r)}):fn.sanitize)(e)}return Q.none()},Tn=[{text:"Current window",value:""},{text:"New window",value:"_blank"}],Nn=function(n){if(d(n.settings)){var t=g(n.settings);return fn.sanitize(t).orThunk(function(){return Q.some(Tn)})}return Q.none()},Sn=function(n,t,e){var r=n.getAttrib(t,e);return null!==r&&0<r.length?Q.some(r):Q.none()},Mn=function(d,m,h){return An(d).map(function(n){var t,e,r,o,i,u,a,c,l,f,s,g=(e=m,r=h,o=(t=d).selection,i=t.dom,u=K(o.getContent())?Q.some(I(o,r)):Q.none(),a=r?Q.some(i.getAttrib(r,"href")):Q.none(),c=p(e)?Q.some(v(e)):Q.none(),l=r?Q.from(i.getAttrib(r,"target")):c,f=Sn(i,r,"rel"),s=Sn(i,r,"class"),{url:a,text:u,title:Sn(i,r,"title"),target:l,rel:f,linkClass:s});return{anchor:g,catalogs:{targets:Nn(d),rels:Cn(d,g.target),classes:wn(d),anchor:On(d),link:n},optNode:Q.from(h),flags:{titleEnabled:b(m)}}})},Dn=function(m){var n,t,e;(t=(n=m).settings,e=q(n),Mn(n,t,e)).map(function(n){var u,a,c,l,t,e,r,o,i,f,s,g,d=(u=m,c=(a=n).anchor.text,l=h(m.settings),function(n){var t=n.getData(),e={href:t.url.value,text:Q.from(t.text).or(c).getOr(undefined),target:Q.from(t.target).or(a.anchor.target).getOr(undefined),rel:Q.from(t.rel).or(a.anchor.rel).getOr(undefined),"class":Q.from(t.classz).or(a.anchor.linkClass).getOr(undefined),title:Q.from(t.title).or(a.anchor.title).getOr(undefined)},r={href:t.url.value,attach:t.url.meta!==undefined&&t.url.meta.attach?t.url.meta.attach:function(){}},o=L(u,r),i=U(u);if(!t.url.value)return i(),void n.close();(c.is(t.text)||a.optNode.isNone()&&!t.text)&&delete e.text,bn(u,l,e).get(function(n){o(n)}),n.close()});return e=d,o=(t=n).anchor.text.map(function(){return{name:"text",type:"input",label:"Text to display"}}).toArray(),i=t.flags.titleEnabled?[{name:"title",type:"input",label:"Title"}]:[],f={url:{value:(r=t).anchor.url.getOr(""),meta:{attach:function(){},text:r.anchor.url.fold(function(){return""},function(){return r.anchor.text.getOr("")}),original:{value:r.anchor.url.getOr("")}}},text:r.anchor.text.getOr(""),title:r.anchor.title.getOr(""),anchor:r.anchor.url.getOr(""),link:r.anchor.url.getOr(""),rel:r.anchor.rel.getOr(""),target:r.anchor.target.getOr(""),classz:r.anchor.linkClass.getOr("")},s=dn(f,t),g=t.catalogs,{title:"Insert/Edit Link",size:"normal",body:{type:"panel",items:on([[{name:"url",type:"urlinput",filetype:"file",label:"URL"}],o,i,function(n){for(var t=[],e=function(n){t.push(n)},r=0;r<n.length;r++)n[r].each(e);return t}([g.anchor.map(fn.createUi("anchor","Anchors")),g.rels.map(fn.createUi("rel","Rel")),g.targets.map(fn.createUi("target","Open link in...")),g.link.map(fn.createUi("link","Link list")),g.classes.map(fn.createUi("classz","Class"))])])},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:f,onChange:function(t,n){var e=n.name;s.onChange(t.getData,{name:e}).each(function(n){t.setData(n)})},onSubmit:e}}).get(function(n){m.windowManager.open(n)})},zn=function(n,t){return n.dom.getParent(t,"a[href]")},En=function(n){return zn(n,n.selection.getStart())},Ln=function(n,t){if(t){var e=R(t);if(/^#/.test(e)){var r=n.$(e);r.length&&n.selection.scrollIntoView(r[0],!0)}else C(t.href)}},Un=function(n){return function(){Dn(n)}},Pn=function(n){return function(){Ln(n,En(n))}},Rn=function(r){r.on("click",function(n){var t=zn(r,n.target);t&&u.metaKeyPressed(n)&&(n.preventDefault(),Ln(r,t))}),r.on("keydown",function(n){var t,e=En(r);e&&13===n.keyCode&&!0===(t=n).altKey&&!1===t.shiftKey&&!1===t.ctrlKey&&!1===t.metaKey&&(n.preventDefault(),Ln(r,e))})},Kn=function(e){return function(t){var n=function(n){return t.setActive(!e.readonly&&!!q(e,n.element))};return e.on("nodechange",n),function(){return e.off("nodechange",n)}}},qn=function(e){return function(t){t.setDisabled(!P(e.dom.getParents(e.selection.getStart())));var n=function(n){return t.setDisabled(!P(n.parents))};return e.on("nodechange",n),function(){return e.off("nodechange",n)}}},In=function(n){n.addCommand("mceLink",function(){w(n.settings)?n.fire("contexttoolbar-show",{toolbarKey:"link-form"}):Un(n)()})},jn=function(n){n.addShortcut("Meta+K","",function(){n.execCommand("mceLink")})},Vn=function(n){n.ui.registry.addToggleButton("link",{icon:"link",tooltip:"Insert/edit link",onAction:Un(n),onSetup:Kn(n)}),n.ui.registry.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onAction:U(n),onSetup:qn(n)})},Bn=function(n){n.ui.registry.addMenuItem("openlink",{text:"Open link",icon:"new-tab",onAction:Pn(n),onSetup:qn(n)}),n.ui.registry.addMenuItem("link",{icon:"link",text:"Link...",shortcut:"Meta+K",onAction:Un(n)}),n.ui.registry.addMenuItem("unlink",{icon:"unlink",text:"Remove link",onAction:U(n),onSetup:qn(n)})},Fn=function(t){t.ui.registry.addContextMenu("link",{update:function(n){return P(t.dom.getParents(n,"a"))?"link unlink openlink":"link"}})},Wn=function(i){i.ui.registry.addContextForm("link-form",{launch:{type:"contextformtogglebutton",icon:"link",onSetup:Kn(i)},label:"Link",predicate:function(n){return!!q(i,n)&&f(i.settings)},initValue:function(){var n=q(i);return n?R(n):""},commands:[{type:"contextformtogglebutton",icon:"link",tooltip:"Link",primary:!0,onSetup:function(n){var t=i.selection.getNode();return n.setActive(!!q(i,t)),Kn(i)(n)},onAction:function(n){var t=q(i),e=n.getValue();if(t)i.dom.setAttrib(t,"href",e),i.selection.collapse(!1),n.hide();else{var r={href:e,attach:function(){}},o=K(i.selection.getContent())?Q.some(I(i.selection,t)).filter(function(n){return 0<n.length}):Q.none();L(i,r)({href:e,text:o.getOr(e)}),n.hide()}}},{type:"contextformtogglebutton",icon:"unlink",tooltip:"Remove link",active:!1,onSetup:function(){return function(){}},onAction:function(n){U(i)(),n.hide()}}]})};i.add("link",function(n){Vn(n),Bn(n),Fn(n),Wn(n),Rn(n),In(n),jn(n)}),function Hn(){}}();