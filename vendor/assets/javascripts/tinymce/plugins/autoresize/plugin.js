/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.0-1 (2019-02-04)
 */
!function(){"use strict";var i=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return i(n())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),m=tinymce.util.Tools.resolve("tinymce.Env"),r=tinymce.util.Tools.resolve("tinymce.util.Delay"),d=function(e){return e.getParam("min_height",e.getElement().offsetHeight,"number")},h=function(e){return e.getParam("max_height",0,"number")},o=function(e){return e.getParam("autoresize_overflow_padding",1,"number")},u=function(e){return e.getParam("autoresize_bottom_margin",50,"number")},a=function(e){return e.getParam("autoresize_on_init",!0,"boolean")},s=function(e,t,n,i,o){r.setEditorTimeout(e,function(){p(e,t),n--?s(e,t,n,i,o):o&&o()},i)},v=function(e,t){var n=e.getBody();n&&(n.style.overflowY=t?"":"hidden",t||(n.scrollTop=0))},y=function(e,t,n,i){var o=parseInt(e.getStyle(t,n,i),10);return isNaN(o)?0:o},p=function(e,t){var n,i,o,r=e.dom,u=e.getDoc();if(u)if((a=e).plugins.fullscreen&&a.plugins.fullscreen.isFullscreen())v(e,!0);else{var a,s=u.body;i=d(e);var c=y(r,s,"margin-top",!0),f=y(r,s,"margin-bottom",!0);(o=s.offsetHeight+c+f)<0&&(o=0);var g=e.getContainer().offsetHeight-e.getContentAreaContainer().offsetHeight;o+g>d(e)&&(i=o+g);var l=h(e);l&&l<i?(i=l,v(e,!0)):v(e,!1),i!==t.get()&&(n=i-t.get(),r.setStyle(e.getContainer(),"height",i+"px"),t.set(i),m.webkit&&n<0&&p(e,t))}},n={setup:function(n,t){n.on("init",function(){var e=o(n),t=u(n);n.dom.setStyles(n.getBody(),{paddingLeft:e,paddingRight:e,paddingBottom:t,"min-height":0})}),n.on("nodechange setcontent keyup FullscreenStateChanged",function(e){p(n,t)}),a(n)&&n.on("init",function(){s(n,t,20,100,function(){s(n,t,5,1e3)})})},resize:p},c=function(e,t){e.addCommand("mceAutoResize",function(){n.resize(e,t)})};e.add("autoresize",function(e){if(e.settings.hasOwnProperty("resize")||(e.settings.resize=!1),!e.inline){var t=i(0);c(e,t),n.setup(e,t)}}),function t(){}}();