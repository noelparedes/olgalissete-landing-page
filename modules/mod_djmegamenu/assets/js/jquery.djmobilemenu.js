/**
 * @version $Id$
 * @package DJ-MegaMenu
 * @copyright Copyright (C) 2017 DJ-Extensions.com, All rights reserved.
 * @license DJ-Extensions.com Proprietary Use License
 * @author url: http://dj-extensions.com
 * @author email contact@dj-extensions.com
 * @developer Szymon Woronowski - szymon.woronowski@design-joomla.eu
 */
!function(f){var e=function(n,e){var o=f('<select id="'+n.attr("id")+'select" class="inputbox dj-select" />').on("change",function(){f(this).val&&(window.location=f(this).val())}),a=n.find("li.dj-up");r(a,o,0),o.appendTo(e),e.find(".dj-mobile-open-btn").on("click",function(n){n.stopPropagation(),n.preventDefault();var e=o[0];if(document.createEvent){var a=document.createEvent("MouseEvents");a.initMouseEvent("mousedown",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}else e.fireEvent&&e.fireEvent("onmousedown")})},r=function(n,t,s){for(var c="",l=!1,e=0;e<s;e++)c+="- ";n.each(function(){var n=f(this),e=n.find("> a").first(),a=n.find("> .dj-subwrap > .dj-subwrap-in > .dj-subcol > .dj-submenu > li, > .dj-subtree > li");if(e.length){var o="",i=e.find("img").first();i.length?o=c+i.attr("alt"):(o=e.html().replace(/(<small[^<]+<\/small>)/gi,""),o=c+o.replace(/(<([^>]+)>)/gi,""));var d=f('<option value="'+e.prop("href")+'">'+o+"</option>").appendTo(t);e.prop("href")||d.prop("disabled",!0),n.hasClass("active")&&(t.val(d.val()),l=!0)}a&&r(a,t,s+1)}),s||l||(f('<option value="">- MENU -</option>').prependTo(t),t.val(""))},c=function(n){var o=null;n.find("ul.dj-mobile-nav > li, ul.dj-mobile-nav-child > li").each(function(){var e=f(this),a=e.find("> a").first();a.length&&(e.find("> ul.dj-mobile-nav-child > li:not(:empty)").length||(e.removeClass("parent"),e.find("ul.dj-mobile-nav-child").remove()),e.hasClass("parent")&&(e.hasClass("active")?a.attr("aria-expanded",!0):a.attr("aria-expanded",!1),a.append('<span class="toggler"></span>'),a.on("click",function(n){e.hasClass("active")?f(n.target).hasClass("toggler")&&(n.preventDefault(),n.stopPropagation(),clearTimeout(o),e.removeClass("active"),a.attr("aria-expanded",!1)):n.preventDefault()})),a.on("focus",function(){o=setTimeout(function(){e.click()},250)}));e.on("click",function(){e.siblings().removeClass("active"),e.siblings().find("> a").attr("aria-expanded",!1),e.addClass("active"),a.length&&a.attr("aria-expanded",!0)})})},t=[],n=null,a=function(){window.clearTimeout(n),n=window.setTimeout(function(){for(var n=0;n<t.length;n++)t[n].mobile&&(window.matchMedia("(max-width: "+t[n].trigger+"px)").matches?(f(document.body).addClass("dj-megamenu-mobile"),f(document.body).addClass(t[n].id+"-mobile"),f.contains(document,t[n].menu[0])&&(t[n].menu.after(t[n].menuHandler),t[n].menu.detach()),f.contains(document,t[n].mobileHandler[0])&&t[n].mobileHandler.replaceWith(t[n].mobile),f.contains(document,t[n].offcanvasHandler[0])&&t[n].offcanvasHandler.replaceWith(t[n].offcanvas)):(f(document.body).removeClass("dj-megamenu-mobile"),f(document.body).removeClass(t[n].id+"-mobile"),f.contains(document,t[n].mobile[0])&&(t[n].mobile.after(t[n].mobileHandler),t[n].mobile.detach()),t[n].offcanvas&&f.contains(document,t[n].offcanvas[0])&&(t[n].offcanvas.after(t[n].offcanvasHandler),t[n].offcanvas.detach()),f.contains(document,t[n].menuHandler[0])&&t[n].menuHandler.replaceWith(t[n].menu)))},100)};f(document).ready(function(){f(".dj-megamenu:not(.dj-megamenu-sticky)").each(function(){var n=f(this),e=f("#"+n.prop("id")+"mobile"),a=f("#"+n.prop("id")+"offcanvas"),o=t.length;t[o]={},t[o].id=n.prop("id"),t[o].trigger=n.data("trigger"),t[o].menu=n,t[o].menuHandler=f("<div />"),t[o].mobile=e.length?e:null,t[o].mobileHandler=f("<div />"),t[o].offcanvas=a.length?a:null,t[o].offcanvasHandler=f("<div />");var i,d=f("#"+n.prop("id")+"mobileWrap");if(d.length&&d.empty().append(t[o].mobile),t[o].mobile){if(t[o].mobile.find(".dj-hideitem").remove(),t[o].mobile.hasClass("dj-megamenu-offcanvas"))!!e.parents("[data-joomla4]").length?function(e){var a=e.find(".dj-offcanvas").first();f(document.body).addClass("dj-offcanvas-effect-1");var o=null;e.find(".dj-mobile-open-btn").on("click",function(n){n.stopPropagation(),n.preventDefault(),clearTimeout(o),a.data("scroll",f(window).scrollTop()),f(document.body).addClass("dj-offcanvas-anim"),setTimeout(function(){f(document.body).addClass("dj-offcanvas-open")},50),a.find(".dj-offcanvas-close-btn").focus()}),a.find(".dj-offcanvas-close-btn").on("click",function(n){n.stopPropagation(),n.preventDefault(),f(document.body).hasClass("dj-offcanvas-open")&&(f(document.body).removeClass("dj-offcanvas-open"),o=setTimeout(function(){f(document.body).removeClass("dj-offcanvas-anim"),e.find(".dj-mobile-open-btn").focus()},500))}),a.find(".dj-offcanvas-close-btn").on("keydown",function(n){9==n.which&&setTimeout(function(){a.find(":focus").length||a.find(".dj-offcanvas-close-btn").click()},50)}),a.find(".dj-offcanvas-end").on("focus",function(){a.find(".dj-offcanvas-close-btn").click()}),c(a)}(t[o].mobile):function(e){var n=null,a=jQuery(".dj-offcanvas-wrapper").first(),o=jQuery(".dj-offcanvas-pusher").first(),i=jQuery(".dj-offcanvas-pusher-in").first();a.length||(n=f(document.body).children(),a=f('<div class="dj-offcanvas-wrapper" />'),o=f('<div class="dj-offcanvas-pusher" />'),i=f('<div class="dj-offcanvas-pusher-in" />'));var d=e.find(".dj-offcanvas").first(),t=d.data("effect");f(document.body).addClass("dj-offcanvas-effect-"+t);var s=null;e.find(".dj-mobile-open-btn").on("click",function(n){n.stopPropagation(),n.preventDefault(),clearTimeout(s),d.data("scroll",f(window).scrollTop()),f(document.body).addClass("dj-offcanvas-anim"),setTimeout(function(){f(document.body).addClass("dj-offcanvas-open")},50),i.css("top",-d.data("scroll")),d.find(".dj-offcanvas-close-btn").focus()}),n&&f(document.body).prepend(a),3==t||6==t||7==t||8==t||14==t?o.append(d):a.append(d),n&&(a.append(o),o.append(i),i.append(n)),d.find(".dj-offcanvas-close-btn").on("click",function(n){n.stopPropagation(),n.preventDefault(),f(document.body).hasClass("dj-offcanvas-open")&&(f(document.body).removeClass("dj-offcanvas-open"),s=setTimeout(function(){i.css("top",0),f(document.body).removeClass("dj-offcanvas-anim"),f(window).scrollTop(f(window).scrollTop()+d.data("scroll")),e.find(".dj-mobile-open-btn").focus()},500))}),f(".dj-offcanvas-pusher").on("click",function(n){f(n.target).hasClass("dj-offcanvas-pusher")&&d.find(".dj-offcanvas-close-btn").click()}),d.find(".dj-offcanvas-close-btn").on("keydown",function(n){9==n.which&&setTimeout(function(){d.find(":focus").length||d.find(".dj-offcanvas-close-btn").click()},50)}),d.find(".dj-offcanvas-end").on("focus",function(){d.find(".dj-offcanvas-close-btn").click()}),c(d)}(t[o].mobile);else t[o].mobile.hasClass("dj-megamenu-accordion")&&((i=t[o].mobile).find(".dj-mobile-open-btn").on("click",function(n){n.stopPropagation(),n.preventDefault(),i.find(".dj-accordion-in").slideToggle("fast")}),f(document).on("click",function(n){f(n.target).closest(".dj-accordion-in").length||i.find(".dj-accordion-in").is(":visible")&&i.find(".dj-accordion-in").slideUp("fast")}),c(i));t[o].mobile.parents(".nav-collapse").addClass("collapse in").css("height","auto").prev(".navbar").remove(),t[o].mobile.parents(".navbar-collapse").addClass("show").prev(".navbar-toggler").remove()}}),f(window).resize(a),a()}),f(window).one("load",function(){for(var n=0;n<t.length;n++)t[n].mobile&&t[n].mobile.hasClass("dj-megamenu-select")&&e(t[n].menu,t[n].mobile);f(".dj-offcanvas-close-btn").click()})}(jQuery);