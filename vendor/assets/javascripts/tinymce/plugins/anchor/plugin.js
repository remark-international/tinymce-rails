/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.14 (2019-08-19)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=function(e){return/^[A-Za-z][A-Za-z0-9\-:._]*$/.test(e)},t=function(e){var t=e.selection.getNode();return"A"===t.tagName&&""===e.dom.getAttrib(t,"href")?t.getAttribute("id")||t.getAttribute("name"):""},r=function(e,t){var n=e.selection.getNode();"A"===n.tagName&&""===e.dom.getAttrib(n,"href")?(n.removeAttribute("name"),n.id=t,e.undoManager.add()):(e.focus(),e.selection.collapse(!0),e.execCommand("mceInsertContent",!1,e.dom.createHTML("a",{id:t})))},n=function(o){var e=t(o);o.windowManager.open({title:"Anchor",size:"normal",body:{type:"panel",items:[{name:"id",type:"input",label:"ID",placeholder:"example"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:{id:e},onSubmit:function(e){var t,n;t=o,n=e.getData().id,(a(n)?(r(t,n),0):(t.windowManager.alert("Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores."),1))||e.close()}})},o=function(e){e.addCommand("mceAnchor",function(){n(e)})},i=function(o){return function(e){for(var t=0;t<e.length;t++)(n=e[t]).attr("href")||!n.attr("id")&&!n.attr("name")||n.firstChild||e[t].attr("contenteditable",o);var n}},c=function(e){e.on("PreInit",function(){e.parser.addNodeFilter("a",i("false")),e.serializer.addNodeFilter("a",i(null))})},d=function(t){t.ui.registry.addToggleButton("anchor",{icon:"bookmark",tooltip:"Anchor",onAction:function(){return t.execCommand("mceAnchor")},onSetup:function(e){return t.selection.selectorChangedWithUnbind("a:not([href])",e.setActive).unbind}}),t.ui.registry.addMenuItem("anchor",{icon:"bookmark",text:"Anchor...",onAction:function(){return t.execCommand("mceAnchor")}})};!function u(){e.add("anchor",function(e){c(e),o(e),d(e)})}()}();