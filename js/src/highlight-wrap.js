// build time:Mon Mar 02 2020 18:11:16 GMT+0800 (中国标准时间)
function macPanel(a){var t=$(".highlight").not(".gist .highlight");for(var i=0;i<t.length;i++){var e=$(t[i]);var n=e.attr("class");var r=/highlight(\s?)([a-zA-Z]*)/;r.test(n);var o=RegExp.$2||"plain";var c=$("<div>").attr("data-rel",o.toUpperCase()).addClass("highlight-wrap");e.wrap(c);e.before(a)}}function initClipboard(){var a='<button class="copy-btn" data-clipboard-snippet=""><i class="fa fa-clipboard"></i></button>';macPanel(a);var t=new ClipboardJS(".copy-btn",{target:function(a){return a.nextElementSibling}});t.on("success",function(a){var t=a.trigger;var i=t.querySelector("i");i.className="fa fa-check";t.onmouseleave=function(t){a.clearSelection();setTimeout(function(){i.className="fa fa-clipboard"},1e3)}})}$(document).ready(function(){initClipboard()});
//rebuild by neat 