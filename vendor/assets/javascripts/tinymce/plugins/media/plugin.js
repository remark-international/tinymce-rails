/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.14 (2019-08-19)
 */
!function(){"use strict";var e,t,r,n,a,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=function(e){return function(){return e}},u=o(!1),s=o(!0),l=u,m=s,d=function(){return f},f=(n={fold:function(e,t){return e()},is:l,isSome:l,isNone:m,getOr:r=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:r,orThunk:t,map:d,ap:d,each:function(){},bind:d,flatten:d,exists:l,forall:m,filter:d,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:o("none()")},Object.freeze&&Object.freeze(n),n),h=function(r){var e=function(){return r},t=function(){return i},n=function(e){return e(r)},i={fold:function(e,t){return t(r)},is:function(e){return r===e},isSome:m,isNone:l,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return h(e(r))},ap:function(e){return e.fold(d,function(e){return h(e(r))})},each:function(e){e(r)},bind:n,flatten:e,exists:n,forall:n,filter:function(e){return e(r)?i:f},equals:function(e){return e.is(r)},equals_:function(e,t){return e.fold(l,function(e){return t(r,e)})},toArray:function(){return[r]},toString:function(){return"some("+r+")"}};return i},p=d,g=function(e){return null===e||e===undefined?f:h(e)},v=function(t){return function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"===t&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":t}(e)===t}},w=v("string"),b=v("array"),y=v("function"),x=Array.prototype.slice,j=function(e,t){for(var r=0,n=e.length;r<n;r++){t(e[r],r,e)}},O=Array.prototype.push,A=(y(Array.from)&&Array.from,function(e){var t=e,r=function(){return t};return{get:r,set:function(e){t=e},clone:function(){return A(r())}}}),S=Object.prototype.hasOwnProperty,_=(a=function(e,t){return t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var r={},n=0;n<e.length;n++){var i=e[n];for(var o in i)S.call(i,o)&&(r[o]=a(r[o],i[o]))}return r}),C=Object.hasOwnProperty,M=function(e,t){return F(e,t)?g(e[t]):p()},F=function(e,t){return C.call(e,t)},P=function(e){return e.getParam("media_scripts")},k=function(e){return e.getParam("audio_template_callback")},T=function(e){return e.getParam("video_template_callback")},$=function(e){return e.getParam("media_live_embeds",!0)},z=function(e){return e.getParam("media_filter_html",!0)},D=function(e){return e.getParam("media_url_resolver")},E=function(e){return e.getParam("media_alt_source",!0)},N=function(e){return e.getParam("media_poster",!0)},U=function(e){return e.getParam("media_dimensions",!0)},R=tinymce.util.Tools.resolve("tinymce.util.Tools"),L=tinymce.util.Tools.resolve("tinymce.html.SaxParser"),W=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),H=function(t){return function(e){return e?e.style[t].replace(/px$/,""):""}},I=function(n){return function(e,t){var r;e&&(e.style[n]=/^[0-9.]+$/.test(r=t)?r+"px":r)}},q={getMaxWidth:H("maxWidth"),getMaxHeight:H("maxHeight"),setMaxWidth:I("maxWidth"),setMaxHeight:I("maxHeight")},B=function(e,t){if(e)for(var r=0;r<e.length;r++)if(-1!==t.indexOf(e[r].filter))return e[r]},G=W.DOM,J=function(e){return G.getAttrib(e,"data-ephox-embed-iri")},K=function(e,t){return c=t,u=G.createFragment(c),""!==J(u.firstChild)?(o=t,a=G.createFragment(o).firstChild,{type:"ephox-embed-iri",source1:J(a),source2:"",poster:"",width:q.getMaxWidth(a),height:q.getMaxHeight(a)}):(n=e,r=t,L({validate:!(i={}),allow_conditional_comments:!0,start:function(e,t){if(i.source1||"param"!==e||(i.source1=t.map.movie),"iframe"!==e&&"object"!==e&&"embed"!==e&&"video"!==e&&"audio"!==e||(i.type||(i.type=e),i=R.extend(t.map,i)),"script"===e){var r=B(n,t.map.src);if(!r)return;i={type:"script",source1:t.map.src,width:String(r.width),height:String(r.height)}}"source"===e&&(i.source1?i.source2||(i.source2=t.map.src):i.source1=t.map.src),"img"!==e||i.poster||(i.poster=t.map.src)}}).parse(r),i.source1=i.source1||i.src||i.data,i.source2=i.source2||"",i.poster=i.poster||"",i);var n,r,i,o,a,c,u},Q=tinymce.util.Tools.resolve("tinymce.util.Promise"),V=function(e){var t={mp3:"audio/mpeg",m4a:"audio/x-m4a",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"}[e.toLowerCase().split(".").pop()];return t||""},X=tinymce.util.Tools.resolve("tinymce.html.Writer"),Y=tinymce.util.Tools.resolve("tinymce.html.Schema"),Z=W.DOM,ee=function(e,t){var r,n,i,o;for(r in t)if(i=""+t[r],e.map[r])for(n=e.length;n--;)(o=e[n]).name===r&&(i?(e.map[r]=i,o.value=i):(delete e.map[r],e.splice(n,1)));else i&&(e.push({name:r,value:i}),e.map[r]=i)},te=function(e,t){var r,n,i=Z.createFragment(e).firstChild;return q.setMaxWidth(i,t.width),q.setMaxHeight(i,t.height),r=i.outerHTML,n=X(),L(n).parse(r),n.getContent()},re=function(e,t,r){return s=e,l=Z.createFragment(s),""!==Z.getAttrib(l.firstChild,"data-ephox-embed-iri")?te(e,t):(n=e,i=t,o=r,c=X(),L({validate:!1,allow_conditional_comments:!(u=0),comment:function(e){c.comment(e)},cdata:function(e){c.cdata(e)},text:function(e,t){c.text(e,t)},start:function(e,t,r){switch(e){case"video":case"object":case"embed":case"img":case"iframe":i.height!==undefined&&i.width!==undefined&&ee(t,{width:i.width,height:i.height})}if(o)switch(e){case"video":ee(t,{poster:i.poster,src:""}),i.source2&&ee(t,{src:""});break;case"iframe":ee(t,{src:i.source1});break;case"source":if(++u<=2&&(ee(t,{src:i["source"+u],type:i["source"+u+"mime"]}),!i["source"+u]))return;break;case"img":if(!i.poster)return;a=!0}c.start(e,t,r)},end:function(e){if("video"===e&&o)for(var t=1;t<=2;t++)if(i["source"+t]){var r=[];r.map={},u<t&&(ee(r,{src:i["source"+t],type:i["source"+t+"mime"]}),c.start("source",r,!0))}if(i.poster&&"object"===e&&o&&!a){var n=[];n.map={},ee(n,{src:i.poster,width:i.width,height:i.height}),c.start("img",n,!0)}c.end(e)}},Y({})).parse(n),c.getContent());var n,i,o,a,c,u,s,l},ne=[{regex:/youtu\.be\/([\w\-_\?&=.]+)/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$2?$4",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowFullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$2?title=0&amp;byline=0",allowFullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'//maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"//www.dailymotion.com/embed/video/$1",allowFullscreen:!0},{regex:/dai\.ly\/([^_]+)/,type:"iframe",w:480,h:270,url:"//www.dailymotion.com/embed/video/$1",allowFullscreen:!0}],ie=function(r,e){var n=R.extend({},e);if(!n.source1&&(R.extend(n,K(P(r),n.embed)),!n.source1))return"";n.source2||(n.source2=""),n.poster||(n.poster=""),n.source1=r.convertURL(n.source1,"source"),n.source2=r.convertURL(n.source2,"source"),n.source1mime=V(n.source1),n.source2mime=V(n.source2),n.poster=r.convertURL(n.poster,"poster");var t,i,o=(t=n.source1,0<(i=ne.filter(function(e){return e.regex.test(t)})).length?R.extend({},i[0],{url:function(e,t){for(var r=e.regex.exec(t),n=e.url,i=function(e){n=n.replace("$"+e,function(){return r[e]?r[e]:""})},o=0;o<r.length;o++)i(o);return n.replace(/\?$/,"")}(i[0],t)}):null);if(o&&(n.source1=o.url,n.type=o.type,n.allowFullscreen=o.allowFullscreen,n.width=n.width||String(o.w),n.height=n.height||String(o.h)),n.embed)return re(n.embed,n,!0);var a=B(P(r),n.source1);a&&(n.type="script",n.width=String(a.width),n.height=String(a.height));var c,u,s,l,m,d,f,h,p=k(r),g=T(r);return n.width=n.width||"300",n.height=n.height||"150",R.each(n,function(e,t){n[t]=r.dom.encode(""+e)}),"iframe"===n.type?(h=(f=n).allowFullscreen?' allowFullscreen="1"':"",'<iframe src="'+f.source1+'" width="'+f.width+'" height="'+f.height+'"'+h+"></iframe>"):"application/x-shockwave-flash"===n.source1mime?(d='<object data="'+(m=n).source1+'" width="'+m.width+'" height="'+m.height+'" type="application/x-shockwave-flash">',m.poster&&(d+='<img src="'+m.poster+'" width="'+m.width+'" height="'+m.height+'" />'),d+="</object>"):-1!==n.source1mime.indexOf("audio")?(s=n,(l=p)?l(s):'<audio controls="controls" src="'+s.source1+'">'+(s.source2?'\n<source src="'+s.source2+'"'+(s.source2mime?' type="'+s.source2mime+'"':"")+" />\n":"")+"</audio>"):"script"===n.type?'<script src="'+n.source1+'"><\/script>':(c=n,(u=g)?u(c):'<video width="'+c.width+'" height="'+c.height+'"'+(c.poster?' poster="'+c.poster+'"':"")+' controls="controls">\n<source src="'+c.source1+'"'+(c.source1mime?' type="'+c.source1mime+'"':"")+" />\n"+(c.source2?'<source src="'+c.source2+'"'+(c.source2mime?' type="'+c.source2mime+'"':"")+" />\n":"")+"</video>")},oe={},ae=function(t){return function(e){return ie(t,e)}},ce=function(e,t){var r,n,i,o,a,c=D(e);return c?(i=t,o=ae(e),a=c,new Q(function(t,e){var r=function(e){return e.html&&(oe[i.source1]=e),t({url:i.source1,html:e.html?e.html:o(i)})};oe[i.source1]?r(oe[i.source1]):a({url:i.source1},r,e)})):(r=t,n=ae(e),new Q(function(e){e({html:n(r),url:r.source1})}))},ue=function(e){return oe.hasOwnProperty(e)},se=function(e){var r=_(e,{source1:e.source1.value,source2:M(e,"source2").bind(function(e){return M(e,"value")}).getOr(""),poster:M(e,"poster").bind(function(e){return M(e,"value")}).getOr("")});return M(e,"dimensions").each(function(e){j(["width","height"],function(t){M(e,t).each(function(e){return r[t]=e})})}),r},le=function(e){var n=_(e,{source1:{value:M(e,"source1").getOr("")},source2:{value:M(e,"source2").getOr("")},poster:{value:M(e,"poster").getOr("")}});return j(["width","height"],function(r){M(e,r).each(function(e){var t=n.dimensions||{};t[r]=e,n.dimensions=t})}),n},me=function(r){return function(e){var t=e&&e.msg?"Media embed handler error: "+e.msg:"Media embed handler threw unknown error.";r.notificationManager.open({type:"error",text:t})}},de=function(e,t){return K(P(e),t)},fe=function(i,o){return function(e){if(w(e.url)&&0<e.url.trim().length){var t=e.html,r=de(o,t),n=c({},r,{source1:e.url,embed:t});i.setData(le(n))}}},he=function(e,t){var r=e.dom.select("img[data-mce-object]");e.insertContent(t),function(e,t){for(var r=e.dom.select("img[data-mce-object]"),n=0;n<t.length;n++)for(var i=r.length-1;0<=i;i--)t[n]===r[i]&&r.splice(i,1);e.selection.select(r[0])}(e,r),e.nodeChanged()},pe=function(c){var e,t,r,n,i=(r=(e=c).selection.getNode(),n=(t=r).getAttribute("data-mce-object")||t.getAttribute("data-ephox-embed-iri")?e.serializer.serialize(r,{selection:!0}):"",_({embed:n},K(P(e),n))),u=A(i),o=le(i),s=function(e){return se(e.getData())},a={title:"General",name:"general",items:function(e){for(var t=[],r=0,n=e.length;r<n;++r){if(!b(e[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+e);O.apply(t,e[r])}return t}([[{name:"source1",type:"urlinput",filetype:"media",label:"Source"}],U(c)?[{type:"sizeinput",name:"dimensions",label:"Constrain proportions",constrain:!0}]:[]])},l={title:"Embed",items:[{type:"textarea",name:"embed",label:"Paste your embed code below:"}]},m=[];E(c)&&m.push({name:"source2",type:"urlinput",filetype:"media",label:"Alternative source URL"}),N(c)&&m.push({name:"poster",type:"urlinput",filetype:"image",label:"Media poster (Image URL)"});var d={title:"Advanced",name:"advanced",items:m},f=[a,l];0<m.length&&f.push(d);var h={type:"tabpanel",tabs:f},p=c.windowManager.open({title:"Insert/Edit Media",size:"normal",body:h,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(e){var t,r,n,i=s(e);t=u.get(),n=c,(r=i).embed=re(r.embed,r),r.embed&&(t.source1===r.source1||ue(r.source1))?he(n,r.embed):ce(n,r).then(function(e){he(n,e.html)})["catch"](me(n)),e.close()},onChange:function(e,t){switch(t.name){case"source1":o=u.get(),a=s(e),o.source1!==a.source1&&(fe(p,c)({url:a.source1,html:""}),ce(c,a).then(fe(p,c))["catch"](me(c)));break;case"embed":n=se((r=e).getData()),i=de(c,n.embed),r.setData(le(i))}var r,n,i,o,a;u.set(s(e))},initialData:o})},ge=function(e){return{showDialog:function(){pe(e)}}},ve=function(e){e.addCommand("mceMedia",function(){pe(e)})},we=tinymce.util.Tools.resolve("tinymce.html.Node"),be=tinymce.util.Tools.resolve("tinymce.Env"),ye=function(i,e){if(!1===z(i))return e;var o,a=X();return L({validate:!1,allow_conditional_comments:!1,comment:function(e){a.comment(e)},cdata:function(e){a.cdata(e)},text:function(e,t){a.text(e,t)},start:function(e,t,r){if(o=!0,"script"!==e&&"noscript"!==e){for(var n=0;n<t.length;n++){if(0===t[n].name.indexOf("on"))return;"style"===t[n].name&&(t[n].value=i.dom.serializeStyle(i.dom.parseStyle(t[n].value),e))}a.start(e,t,r),o=!1}},end:function(e){o||a.end(e)}},Y({})).parse(e),a.getContent()},xe=function(e,t){var r,n=t.name;return(r=new we("img",1)).shortEnded=!0,Oe(e,t,r),r.attr({width:t.attr("width")||"300",height:t.attr("height")||("audio"===n?"30":"150"),style:t.attr("style"),src:be.transparentSrc,"data-mce-object":n,"class":"mce-object mce-object-"+n}),r},je=function(e,t){var r,n,i,o=t.name;return(r=new we("span",1)).attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":o,"class":"mce-preview-object mce-object-"+o}),Oe(e,t,r),(n=new we(o,1)).attr({src:t.attr("src"),allowfullscreen:t.attr("allowfullscreen"),style:t.attr("style"),"class":t.attr("class"),width:t.attr("width"),height:t.attr("height"),frameborder:"0"}),(i=new we("span",1)).attr("class","mce-shim"),r.append(n),r.append(i),r},Oe=function(e,t,r){var n,i,o,a,c;for(a=(o=t.attributes).length;a--;)n=o[a].name,i=o[a].value,"width"!==n&&"height"!==n&&"style"!==n&&("data"!==n&&"src"!==n||(i=e.convertURL(i,n)),r.attr("data-mce-p-"+n,i));(c=t.firstChild&&t.firstChild.value)&&(r.attr("data-mce-html",escape(ye(e,c))),r.firstChild=null)},Ae=function(e){for(;e=e.parent;)if(e.attr("data-ephox-embed-iri")||(void 0,(t=e.attr("class"))&&/\btiny-pageembed\b/.test(t)))return!0;var t;return!1},Se=function(i){return function(e){for(var t,r,n=e.length;n--;)(t=e[n]).parent&&(t.parent.attr("data-mce-object")||("script"!==t.name||(r=B(P(i),t.attr("src"))))&&(r&&(r.width&&t.attr("width",r.width.toString()),r.height&&t.attr("height",r.height.toString())),"iframe"===t.name&&$(i)&&be.ceFalse?Ae(t)||t.replace(je(i,t)):Ae(t)||t.replace(xe(i,t))))}},_e=function(d){d.on("preInit",function(){var t=d.schema.getSpecialElements();R.each("video audio iframe object".split(" "),function(e){t[e]=new RegExp("</"+e+"[^>]*>","gi")});var r=d.schema.getBoolAttrs();R.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(e){r[e]={}}),d.parser.addNodeFilter("iframe,video,audio,object,embed,script",Se(d)),d.serializer.addAttributeFilter("data-mce-object",function(e,t){for(var r,n,i,o,a,c,u,s,l=e.length;l--;)if((r=e[l]).parent){for(u=r.attr(t),n=new we(u,1),"audio"!==u&&"script"!==u&&((s=r.attr("class"))&&-1!==s.indexOf("mce-preview-object")?n.attr({width:r.firstChild.attr("width"),height:r.firstChild.attr("height")}):n.attr({width:r.attr("width"),height:r.attr("height")})),n.attr({style:r.attr("style")}),i=(o=r.attributes).length;i--;){var m=o[i].name;0===m.indexOf("data-mce-p-")&&n.attr(m.substr(11),o[i].value)}"script"===u&&n.attr("type","text/javascript"),(a=r.attr("data-mce-html"))&&((c=new we("#text",3)).raw=!0,c.value=ye(d,unescape(a)),n.append(c)),r.replace(n)}})}),d.on("SetContent",function(){d.$("span.mce-preview-object").each(function(e,t){var r=d.$(t);0===r.find("span.mce-shim").length&&r.append('<span class="mce-shim"></span>')})})},Ce=function(e){e.on("ResolveName",function(e){var t;1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)})},Me=function(t){t.on("click keyup",function(){var e=t.selection.getNode();e&&t.dom.hasClass(e,"mce-preview-object")&&t.dom.getAttrib(e,"data-mce-selected")&&e.setAttribute("data-mce-selected","2")}),t.on("ObjectSelected",function(e){var t=e.target.getAttribute("data-mce-object");"audio"!==t&&"script"!==t||e.preventDefault()}),t.on("ObjectResized",function(e){var t,r=e.target;r.getAttribute("data-mce-object")&&(t=r.getAttribute("data-mce-html"))&&(t=unescape(t),r.setAttribute("data-mce-html",escape(re(t,{width:String(e.width),height:String(e.height)}))))})},Fe=function(e){var t,r;e.ui.registry.addToggleButton("media",{tooltip:"Insert/edit media",icon:"embed",onAction:function(){e.execCommand("mceMedia")},onSetup:(t=e,r=["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"],function(e){return t.selection.selectorChangedWithUnbind(r.join(","),e.setActive).unbind})}),e.ui.registry.addMenuItem("media",{icon:"embed",text:"Media...",onAction:function(){e.execCommand("mceMedia")}})};!function Pe(){i.add("media",function(e){return ve(e),Fe(e),Ce(e),_e(e),Me(e),ge(e)})}()}();