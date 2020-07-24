!function(C,n,A,S){"use strict";n=void 0!==n&&n.Math==Math?n:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),C.fn.transition=function(){var u,r=C(this),p=r.selector||"",g=(new Date).getTime(),v=[],b=arguments,y=b[0],h=[].slice.call(arguments,1),w="string"==typeof y;n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||n.msRequestAnimationFrame;return r.each(function(t){var d,s,e,c,i,a,n,o,m,f=C(this),l=this;(m={initialize:function(){d=m.get.settings.apply(l,b),c=d.className,e=d.error,i=d.metadata,o="."+d.namespace,n="module-"+d.namespace,s=f.data(n)||m,a=m.get.animationEndEvent(),w&&(w=m.invoke(y)),!1===w&&(m.verbose("Converted arguments into settings object",d),d.interval?m.delay(d.animate):m.animate(),m.instantiate())},instantiate:function(){m.verbose("Storing instance of module",m),s=m,f.data(n,s)},destroy:function(){m.verbose("Destroying previous module for",l),f.removeData(n)},refresh:function(){m.verbose("Refreshing display type on next animation"),delete m.displayType},forceRepaint:function(){m.verbose("Forcing element repaint");var n=f.parent(),e=f.next();0===e.length?f.detach().appendTo(n):f.detach().insertBefore(e)},repaint:function(){m.verbose("Repainting element");l.offsetWidth},delay:function(n){var e,i=m.get.animationDirection();i||(i=m.can.transition()?m.get.direction():"static"),n=n!==S?n:d.interval,e="auto"==d.reverse&&i==c.outward||1==d.reverse?(r.length-t)*d.interval:t*d.interval,m.debug("Delaying animation by",e),setTimeout(m.animate,e)},animate:function(n){if(d=n||d,!m.is.supported())return m.error(e.support),!1;if(m.debug("Preparing animation",d.animation),m.is.animating()){if(d.queue)return!d.allowRepeats&&m.has.direction()&&m.is.occurring()&&!0!==m.queuing?m.debug("Animation is currently occurring, preventing queueing same animation",d.animation):m.queue(d.animation),!1;if(!d.allowRepeats&&m.is.occurring())return m.debug("Animation is already occurring, will not execute repeated animation",d.animation),!1;m.debug("New animation started, completing previous early",d.animation),s.complete()}m.can.animate()?m.set.animating(d.animation):m.error(e.noAnimation,d.animation,l)},reset:function(){m.debug("Resetting animation to beginning conditions"),m.remove.animationCallbacks(),m.restore.conditions(),m.remove.animating()},queue:function(n){m.debug("Queueing animation of",n),m.queuing=!0,f.one(a+".queue"+o,function(){m.queuing=!1,m.repaint(),m.animate.apply(this,d)})},complete:function(n){m.debug("Animation complete",d.animation),m.remove.completeCallback(),m.remove.failSafe(),m.is.looping()||(m.is.outward()?(m.verbose("Animation is outward, hiding element"),m.restore.conditions(),m.hide()):m.is.inward()?(m.verbose("Animation is outward, showing element"),m.restore.conditions(),m.show()):(m.verbose("Static animation completed"),m.restore.conditions(),d.onComplete.call(l)))},force:{visible:function(){var n=f.attr("style"),e=m.get.userStyle(),i=m.get.displayType(),t=e+"display: "+i+" !important;",a=f.css("display"),o=n===S||""===n;a!==i?(m.verbose("Overriding default display to show element",i),f.attr("style",t)):o&&f.removeAttr("style")},hidden:function(){var n=f.attr("style"),e=f.css("display"),i=n===S||""===n;"none"===e||m.is.hidden()?i&&f.removeAttr("style"):(m.verbose("Overriding default display to hide element"),f.css("display","none"))}},has:{direction:function(n){var i=!1;return"string"==typeof(n=n||d.animation)&&(n=n.split(" "),C.each(n,function(n,e){e!==c.inward&&e!==c.outward||(i=!0)})),i},inlineDisplay:function(){var n=f.attr("style")||"";return C.isArray(n.match(/display.*?;/,""))}},set:{animating:function(n){var e;m.remove.completeCallback(),n=n||d.animation,e=m.get.animationClass(n),m.save.animation(e),m.force.visible(),m.remove.hidden(),m.remove.direction(),m.start.animation(e)},duration:function(n,e){((e="number"==typeof(e=e||d.duration)?e+"ms":e)||0===e)&&(m.verbose("Setting animation duration",e),f.css({"animation-duration":e}))},direction:function(n){(n=n||m.get.direction())==c.inward?m.set.inward():m.set.outward()},looping:function(){m.debug("Transition set to loop"),f.addClass(c.looping)},hidden:function(){f.addClass(c.transition).addClass(c.hidden)},inward:function(){m.debug("Setting direction to inward"),f.removeClass(c.outward).addClass(c.inward)},outward:function(){m.debug("Setting direction to outward"),f.removeClass(c.inward).addClass(c.outward)},visible:function(){f.addClass(c.transition).addClass(c.visible)}},start:{animation:function(n){n=n||m.get.animationClass(),m.debug("Starting tween",n),f.addClass(n).one(a+".complete"+o,m.complete),d.useFailSafe&&m.add.failSafe(),m.set.duration(d.duration),d.onStart.call(l)}},save:{animation:function(n){m.cache||(m.cache={}),m.cache.animation=n},displayType:function(n){"none"!==n&&f.data(i.displayType,n)},transitionExists:function(n,e){C.fn.transition.exists[n]=e,m.verbose("Saving existence of transition",n,e)}},restore:{conditions:function(){var n=m.get.currentAnimation();n&&(f.removeClass(n),m.verbose("Removing animation class",m.cache)),m.remove.duration()}},add:{failSafe:function(){var n=m.get.duration();m.timer=setTimeout(function(){f.triggerHandler(a)},n+d.failSafeDelay),m.verbose("Adding fail safe timer",m.timer)}},remove:{animating:function(){f.removeClass(c.animating)},animationCallbacks:function(){m.remove.queueCallback(),m.remove.completeCallback()},queueCallback:function(){f.off(".queue"+o)},completeCallback:function(){f.off(".complete"+o)},display:function(){f.css("display","")},direction:function(){f.removeClass(c.inward).removeClass(c.outward)},duration:function(){f.css("animation-duration","")},failSafe:function(){m.verbose("Removing fail safe timer",m.timer),m.timer&&clearTimeout(m.timer)},hidden:function(){f.removeClass(c.hidden)},visible:function(){f.removeClass(c.visible)},looping:function(){m.debug("Transitions are no longer looping"),m.is.looping()&&(m.reset(),f.removeClass(c.looping))},transition:function(){f.removeClass(c.visible).removeClass(c.hidden)}},get:{settings:function(n,e,i){return"object"==typeof n?C.extend(!0,{},C.fn.transition.settings,n):"function"==typeof i?C.extend({},C.fn.transition.settings,{animation:n,onComplete:i,duration:e}):"string"==typeof e||"number"==typeof e?C.extend({},C.fn.transition.settings,{animation:n,duration:e}):"object"==typeof e?C.extend({},C.fn.transition.settings,e,{animation:n}):"function"==typeof e?C.extend({},C.fn.transition.settings,{animation:n,onComplete:e}):C.extend({},C.fn.transition.settings,{animation:n})},animationClass:function(n){var e=n||d.animation,i=m.can.transition()&&!m.has.direction()?m.get.direction()+" ":"";return c.animating+" "+c.transition+" "+i+e},currentAnimation:function(){return!(!m.cache||m.cache.animation===S)&&m.cache.animation},currentDirection:function(){return m.is.inward()?c.inward:c.outward},direction:function(){return m.is.hidden()||!m.is.visible()?c.inward:c.outward},animationDirection:function(n){var i;return"string"==typeof(n=n||d.animation)&&(n=n.split(" "),C.each(n,function(n,e){e===c.inward?i=c.inward:e===c.outward&&(i=c.outward)})),i||!1},duration:function(n){return!1===(n=n||d.duration)&&(n=f.css("animation-duration")||0),"string"==typeof n?-1<n.indexOf("ms")?parseFloat(n):1e3*parseFloat(n):n},displayType:function(n){return n=n===S||n,d.displayType?d.displayType:(n&&f.data(i.displayType)===S&&m.can.transition(!0),f.data(i.displayType))},userStyle:function(n){return(n=n||f.attr("style")||"").replace(/display.*?;/,"")},transitionExists:function(n){return C.fn.transition.exists[n]},animationStartEvent:function(){var n,e=A.createElement("div"),i={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(n in i)if(e.style[n]!==S)return i[n];return!1},animationEndEvent:function(){var n,e=A.createElement("div"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(n in i)if(e.style[n]!==S)return i[n];return!1}},can:{transition:function(n){var e,i,t,a,o,r,s=d.animation,l=m.get.transitionExists(s),u=m.get.displayType(!1);if(l===S||n){if(m.verbose("Determining whether animation exists"),e=f.attr("class"),i=f.prop("tagName"),a=(t=C("<"+i+" />").addClass(e).insertAfter(f)).addClass(s).removeClass(c.inward).removeClass(c.outward).addClass(c.animating).addClass(c.transition).css("animationName"),o=t.addClass(c.inward).css("animationName"),u||(u=t.attr("class",e).removeAttr("style").removeClass(c.hidden).removeClass(c.visible).show().css("display"),m.verbose("Determining final display state",u),m.save.displayType(u)),t.remove(),a!=o)m.debug("Direction exists for animation",s),r=!0;else{if("none"==a||!a)return void m.debug("No animation defined in css",s);m.debug("Static animation found",s,u),r=!1}m.save.transitionExists(s,r)}return l!==S?l:r},animate:function(){return m.can.transition()!==S}},is:{animating:function(){return f.hasClass(c.animating)},inward:function(){return f.hasClass(c.inward)},outward:function(){return f.hasClass(c.outward)},looping:function(){return f.hasClass(c.looping)},occurring:function(n){return n="."+(n=n||d.animation).replace(" ","."),0<f.filter(n).length},visible:function(){return f.is(":visible")},hidden:function(){return"hidden"===f.css("visibility")},supported:function(){return!1!==a}},hide:function(){m.verbose("Hiding element"),m.is.animating()&&m.reset(),l.blur(),m.remove.display(),m.remove.visible(),m.set.hidden(),m.force.hidden(),d.onHide.call(l),d.onComplete.call(l)},show:function(n){m.verbose("Showing element",n),m.remove.hidden(),m.set.visible(),m.force.visible(),d.onShow.call(l),d.onComplete.call(l)},toggle:function(){m.is.visible()?m.hide():m.show()},stop:function(){m.debug("Stopping current animation"),f.triggerHandler(a)},stopAll:function(){m.debug("Stopping all animation"),m.remove.queueCallback(),f.triggerHandler(a)},clear:{queue:function(){m.debug("Clearing animation queue"),m.remove.queueCallback()}},enable:function(){m.verbose("Starting animation"),f.removeClass(c.disabled)},disable:function(){m.debug("Stopping animation"),f.addClass(c.disabled)},setting:function(n,e){if(m.debug("Changing setting",n,e),C.isPlainObject(n))C.extend(!0,d,n);else{if(e===S)return d[n];C.isPlainObject(d[n])?C.extend(!0,d[n],e):d[n]=e}},internal:function(n,e){if(C.isPlainObject(n))C.extend(!0,m,n);else{if(e===S)return m[n];m[n]=e}},debug:function(){!d.silent&&d.debug&&(d.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,d.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),m.verbose.apply(console,arguments)))},error:function(){d.silent||(m.error=Function.prototype.bind.call(console.error,console,d.name+":"),m.error.apply(console,arguments))},performance:{log:function(n){var e,i;d.performance&&(i=(e=(new Date).getTime())-(g||e),g=e,v.push({Name:n[0],Arguments:[].slice.call(n,1)||"",Element:l,"Execution Time":i})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var n=d.name+":",i=0;g=!1,clearTimeout(m.performance.timer),C.each(v,function(n,e){i+=e["Execution Time"]}),n+=" "+i+"ms",p&&(n+=" '"+p+"'"),1<r.length&&(n+=" ("+r.length+")"),(console.group!==S||console.table!==S)&&0<v.length&&(console.groupCollapsed(n),console.table?console.table(v):C.each(v,function(n,e){console.log(e.Name+": "+e["Execution Time"]+"ms")}),console.groupEnd()),v=[]}},invoke:function(t,n,e){var a,o,i,r=s;return n=n||h,e=l||e,"string"==typeof t&&r!==S&&(t=t.split(/[\. ]/),a=t.length-1,C.each(t,function(n,e){var i=n!=a?e+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(C.isPlainObject(r[i])&&n!=a)r=r[i];else{if(r[i]!==S)return o=r[i],!1;if(!C.isPlainObject(r[e])||n==a)return r[e]!==S&&(o=r[e]),!1;r=r[e]}})),C.isFunction(o)?i=o.apply(e,n):o!==S&&(i=o),C.isArray(u)?u.push(i):u!==S?u=[u,i]:i!==S&&(u=i),o!==S&&o}}).initialize()}),u!==S?u:this},C.fn.transition.exists={},C.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document); !function(t,e,o,n){"use strict";e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),t.fn.popup=function(i){var r,a=t(this),s=t(o),p=t(e),l=t("body"),u=a.selector||"",c=(new Date).getTime(),d=[],f=arguments[0],g="string"==typeof f,h=[].slice.call(arguments,1);return a.each(function(){var a,m,v,b,w,y,P=t.isPlainObject(i)?t.extend(!0,{},t.fn.popup.settings,i):t.extend({},t.fn.popup.settings),C=P.selector,T=P.className,x=P.error,k=P.metadata,E=P.namespace,S="."+P.namespace,A="module-"+E,F=t(this),O=t(P.context),D=t(P.scrollContext),j=t(P.boundary),H=P.target?t(P.target):F,R=0,N=!1,V=!1,W=this,M=F.data(A);y={initialize:function(){y.debug("Initializing",F),y.createID(),y.bind.events(),!y.exists()&&P.preserve&&y.create(),P.observeChanges&&y.observeChanges(),y.instantiate()},instantiate:function(){y.verbose("Storing instance",y),M=y,F.data(A,M)},observeChanges:function(){"MutationObserver"in e&&((v=new MutationObserver(y.event.documentChanged)).observe(o,{childList:!0,subtree:!0}),y.debug("Setting up mutation observer",v))},refresh:function(){P.popup?a=t(P.popup).eq(0):P.inline&&(a=H.nextAll(C.popup).eq(0),P.popup=a),P.popup?(a.addClass(T.loading),m=y.get.offsetParent(),a.removeClass(T.loading),P.movePopup&&y.has.popup()&&y.get.offsetParent(a)[0]!==m[0]&&(y.debug("Moving popup to the same offset parent as target"),a.detach().appendTo(m))):m=P.inline?y.get.offsetParent(H):y.has.popup()?y.get.offsetParent(a):l,m.is("html")&&m[0]!==l[0]&&(y.debug("Setting page as offset parent"),m=l),y.get.variation()&&y.set.variation()},reposition:function(){y.refresh(),y.set.position()},destroy:function(){y.debug("Destroying previous module"),v&&v.disconnect(),a&&!P.preserve&&y.removePopup(),clearTimeout(y.hideTimer),clearTimeout(y.showTimer),y.unbind.close(),y.unbind.events(),F.removeData(A)},event:{start:function(e){var o=t.isPlainObject(P.delay)?P.delay.show:P.delay;clearTimeout(y.hideTimer),V||(y.showTimer=setTimeout(y.show,o))},end:function(){var e=t.isPlainObject(P.delay)?P.delay.hide:P.delay;clearTimeout(y.showTimer),y.hideTimer=setTimeout(y.hide,e)},touchstart:function(t){V=!0,y.show()},resize:function(){y.is.visible()&&y.set.position()},documentChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==W||t(e).find(W).length>0)&&(y.debug("Element removed from DOM, tearing down events"),y.destroy())})})},hideGracefully:function(e){var n=t(e.target),i=t.contains(o.documentElement,e.target),r=n.closest(C.popup).length>0;e&&!r&&i?(y.debug("Click occurred outside popup hiding popup"),y.hide()):y.debug("Click was inside popup, keeping popup open")}},create:function(){var e=y.get.html(),o=y.get.title(),n=y.get.content();e||n||o?(y.debug("Creating pop-up html"),e||(e=P.templates.popup({title:o,content:n})),a=t("<div/>").addClass(T.popup).data(k.activator,F).html(e),P.inline?(y.verbose("Inserting popup element inline",a),a.insertAfter(F)):(y.verbose("Appending popup element to body",a),a.appendTo(O)),y.refresh(),y.set.variation(),P.hoverable&&y.bind.popup(),P.onCreate.call(a,W)):0!==H.next(C.popup).length?(y.verbose("Pre-existing popup found"),P.inline=!0,P.popup=H.next(C.popup).data(k.activator,F),y.refresh(),P.hoverable&&y.bind.popup()):P.popup?(t(P.popup).data(k.activator,F),y.verbose("Used popup specified in settings"),y.refresh(),P.hoverable&&y.bind.popup()):y.debug("No content specified skipping display",W)},createID:function(){w=(Math.random().toString(16)+"000000000").substr(2,8),b="."+w,y.verbose("Creating unique id for element",w)},toggle:function(){y.debug("Toggling pop-up"),y.is.hidden()?(y.debug("Popup is hidden, showing pop-up"),y.unbind.close(),y.show()):(y.debug("Popup is visible, hiding pop-up"),y.hide())},show:function(t){if(t=t||function(){},y.debug("Showing pop-up",P.transition),y.is.hidden()&&(!y.is.active()||!y.is.dropdown())){if(y.exists()||y.create(),!1===P.onShow.call(a,W))return void y.debug("onShow callback returned false, cancelling popup animation");P.preserve||P.popup||y.refresh(),a&&y.set.position()&&(y.save.conditions(),P.exclusive&&y.hideAll(),y.animate.show(t))}},hide:function(t){if(t=t||function(){},y.is.visible()||y.is.animating()){if(!1===P.onHide.call(a,W))return void y.debug("onHide callback returned false, cancelling popup animation");y.remove.visible(),y.unbind.close(),y.restore.conditions(),y.animate.hide(t)}},hideAll:function(){t(C.popup).filter("."+T.popupVisible).each(function(){t(this).data(k.activator).popup("hide")})},exists:function(){return!!a&&(P.inline||P.popup?y.has.popup():a.closest(O).length>=1)},removePopup:function(){y.has.popup()&&!P.popup&&(y.debug("Removing popup",a),a.remove(),a=n,P.onRemove.call(a,W))},save:{conditions:function(){y.cache={title:F.attr("title")},y.cache.title&&F.removeAttr("title"),y.verbose("Saving original attributes",y.cache.title)}},restore:{conditions:function(){return y.cache&&y.cache.title&&(F.attr("title",y.cache.title),y.verbose("Restoring original attributes",y.cache.title)),!0}},supports:{svg:function(){return"undefined"==typeof SVGGraphicsElement}},animate:{show:function(e){e=t.isFunction(e)?e:function(){},P.transition&&t.fn.transition!==n&&F.transition("is supported")?(y.set.visible(),a.transition({animation:P.transition+" in",queue:!1,debug:P.debug,verbose:P.verbose,duration:P.duration,onComplete:function(){y.bind.close(),e.call(a,W),P.onVisible.call(a,W)}})):y.error(x.noTransition)},hide:function(e){e=t.isFunction(e)?e:function(){},y.debug("Hiding pop-up"),!1!==P.onHide.call(a,W)?P.transition&&t.fn.transition!==n&&F.transition("is supported")?a.transition({animation:P.transition+" out",queue:!1,duration:P.duration,debug:P.debug,verbose:P.verbose,onComplete:function(){y.reset(),e.call(a,W),P.onHidden.call(a,W)}}):y.error(x.noTransition):y.debug("onHide callback returned false, cancelling popup animation")}},change:{content:function(t){a.html(t)}},get:{html:function(){return F.removeData(k.html),F.data(k.html)||P.html},title:function(){return F.removeData(k.title),F.data(k.title)||P.title},content:function(){return F.removeData(k.content),F.data(k.content)||P.content||F.attr("title")},variation:function(){return F.removeData(k.variation),F.data(k.variation)||P.variation},popup:function(){return a},popupOffset:function(){return a.offset()},calculations:function(){var t,o=y.get.offsetParent(a),n=H[0],i=j[0]==e,r=P.inline||P.popup&&P.movePopup?H.position():H.offset(),s=i?{top:0,left:0}:j.offset(),l={},u=i?{top:p.scrollTop(),left:p.scrollLeft()}:{top:0,left:0};if(l={target:{element:H[0],width:H.outerWidth(),height:H.outerHeight(),top:r.top,left:r.left,margin:{}},popup:{width:a.outerWidth(),height:a.outerHeight()},parent:{width:m.outerWidth(),height:m.outerHeight()},screen:{top:s.top,left:s.left,scroll:{top:u.top,left:u.left},width:j.width(),height:j.height()}},o.get(0)!==m.get(0)){var c=o.offset();l.target.top-=c.top,l.target.left-=c.left,l.parent.width=o.outerWidth(),l.parent.height=o.outerHeight()}return P.setFluidWidth&&y.is.fluid()&&(l.container={width:a.parent().outerWidth()},l.popup.width=l.container.width),l.target.margin.top=P.inline?parseInt(e.getComputedStyle(n).getPropertyValue("margin-top"),10):0,l.target.margin.left=P.inline?y.is.rtl()?parseInt(e.getComputedStyle(n).getPropertyValue("margin-right"),10):parseInt(e.getComputedStyle(n).getPropertyValue("margin-left"),10):0,t=l.screen,l.boundary={top:t.top+t.scroll.top,bottom:t.top+t.scroll.top+t.height,left:t.left+t.scroll.left,right:t.left+t.scroll.left+t.width},l},id:function(){return w},startEvent:function(){return"hover"==P.on?"mouseenter":"focus"==P.on&&"focus"},scrollEvent:function(){return"scroll"},endEvent:function(){return"hover"==P.on?"mouseleave":"focus"==P.on&&"blur"},distanceFromBoundary:function(t,e){var o,n,i={};return o=(e=e||y.get.calculations()).popup,n=e.boundary,t&&(i={top:t.top-n.top,left:t.left-n.left,right:n.right-(t.left+o.width),bottom:n.bottom-(t.top+o.height)},y.verbose("Distance from boundaries determined",t,i)),i},offsetParent:function(e){var o=(e!==n?e[0]:H[0]).parentNode,i=t(o);if(o)for(var r="none"===i.css("transform"),a="static"===i.css("position"),s=i.is("body");o&&!s&&a&&r;)o=o.parentNode,r="none"===(i=t(o)).css("transform"),a="static"===i.css("position"),s=i.is("body");return i&&i.length>0?i:t()},positions:function(){return{"top left":!1,"top center":!1,"top right":!1,"bottom left":!1,"bottom center":!1,"bottom right":!1,"left center":!1,"right center":!1}},nextPosition:function(t){var e=t.split(" "),o=e[0],n=e[1],i="top"==o||"bottom"==o,r=!1,a=!1,s=!1;return N||(y.verbose("All available positions available"),N=y.get.positions()),y.debug("Recording last position tried",t),N[t]=!0,"opposite"===P.prefer&&(s=(s=[{top:"bottom",bottom:"top",left:"right",right:"left"}[o],n]).join(" "),r=!0===N[s],y.debug("Trying opposite strategy",s)),"adjacent"===P.prefer&&i&&(s=(s=[o,{left:"center",center:"right",right:"left"}[n]]).join(" "),a=!0===N[s],y.debug("Trying adjacent strategy",s)),(a||r)&&(y.debug("Using backup position",s),s={"top left":"top center","top center":"top right","top right":"right center","right center":"bottom right","bottom right":"bottom center","bottom center":"bottom left","bottom left":"left center","left center":"top left"}[t]),s}},set:{position:function(t,e){if(0!==H.length&&0!==a.length){var o,i,r,s,p,l,u,c;if(e=e||y.get.calculations(),t=t||F.data(k.position)||P.position,o=F.data(k.offset)||P.offset,i=P.distanceAway,r=e.target,s=e.popup,p=e.parent,y.should.centerArrow(e)&&(y.verbose("Adjusting offset to center arrow on small target element"),"top left"!=t&&"bottom left"!=t||(o+=r.width/2,o-=P.arrowPixelsFromEdge),"top right"!=t&&"bottom right"!=t||(o-=r.width/2,o+=P.arrowPixelsFromEdge)),0===r.width&&0===r.height&&!y.is.svg(r.element))return y.debug("Popup target is hidden, no action taken"),!1;switch(P.inline&&(y.debug("Adding margin to calculation",r.margin),"left center"==t||"right center"==t?(o+=r.margin.top,i+=-r.margin.left):"top left"==t||"top center"==t||"top right"==t?(o+=r.margin.left,i-=r.margin.top):(o+=r.margin.left,i+=r.margin.top)),y.debug("Determining popup position from calculations",t,e),y.is.rtl()&&(t=t.replace(/left|right/g,function(t){return"left"==t?"right":"left"}),y.debug("RTL: Popup position updated",t)),R==P.maxSearchDepth&&"string"==typeof P.lastResort&&(t=P.lastResort),t){case"top left":l={top:"auto",bottom:p.height-r.top+i,left:r.left+o,right:"auto"};break;case"top center":l={bottom:p.height-r.top+i,left:r.left+r.width/2-s.width/2+o,top:"auto",right:"auto"};break;case"top right":l={bottom:p.height-r.top+i,right:p.width-r.left-r.width-o,top:"auto",left:"auto"};break;case"left center":l={top:r.top+r.height/2-s.height/2+o,right:p.width-r.left+i,left:"auto",bottom:"auto"};break;case"right center":l={top:r.top+r.height/2-s.height/2+o,left:r.left+r.width+i,bottom:"auto",right:"auto"};break;case"bottom left":l={top:r.top+r.height+i,left:r.left+o,bottom:"auto",right:"auto"};break;case"bottom center":l={top:r.top+r.height+i,left:r.left+r.width/2-s.width/2+o,bottom:"auto",right:"auto"};break;case"bottom right":l={top:r.top+r.height+i,right:p.width-r.left-r.width-o,left:"auto",bottom:"auto"}}if(l===n&&y.error(x.invalidPosition,t),y.debug("Calculated popup positioning values",l),a.css(l).removeClass(T.position).addClass(t).addClass(T.loading),u=y.get.popupOffset(),c=y.get.distanceFromBoundary(u,e),y.is.offstage(c,t)){if(y.debug("Position is outside viewport",t),R<P.maxSearchDepth)return R++,t=y.get.nextPosition(t),y.debug("Trying new position",t),!!a&&y.set.position(t,e);if(!P.lastResort)return y.debug("Popup could not find a position to display",a),y.error(x.cannotPlace,W),y.remove.attempts(),y.remove.loading(),y.reset(),P.onUnplaceable.call(a,W),!1;y.debug("No position found, showing with last position")}return y.debug("Position is on stage",t),y.remove.attempts(),y.remove.loading(),P.setFluidWidth&&y.is.fluid()&&y.set.fluidWidth(e),!0}y.error(x.notFound)},fluidWidth:function(t){t=t||y.get.calculations(),y.debug("Automatically setting element width to parent width",t.parent.width),a.css("width",t.container.width)},variation:function(t){(t=t||y.get.variation())&&y.has.popup()&&(y.verbose("Adding variation to popup",t),a.addClass(t))},visible:function(){F.addClass(T.visible)}},remove:{loading:function(){a.removeClass(T.loading)},variation:function(t){(t=t||y.get.variation())&&(y.verbose("Removing variation",t),a.removeClass(t))},visible:function(){F.removeClass(T.visible)},attempts:function(){y.verbose("Resetting all searched positions"),R=0,N=!1}},bind:{events:function(){y.debug("Binding popup events to module"),"click"==P.on&&F.on("click"+S,y.toggle),"hover"==P.on&&F.on("touchstart"+S,y.event.touchstart),y.get.startEvent()&&F.on(y.get.startEvent()+S,y.event.start).on(y.get.endEvent()+S,y.event.end),P.target&&y.debug("Target set to element",H),p.on("resize"+b,y.event.resize)},popup:function(){y.verbose("Allowing hover events on popup to prevent closing"),a&&y.has.popup()&&a.on("mouseenter"+S,y.event.start).on("mouseleave"+S,y.event.end)},close:function(){(!0===P.hideOnScroll||"auto"==P.hideOnScroll&&"click"!=P.on)&&y.bind.closeOnScroll(),"hover"==P.on&&V&&y.bind.touchClose(),"click"==P.on&&P.closable&&y.bind.clickaway()},closeOnScroll:function(){y.verbose("Binding scroll close event to document"),D.one(y.get.scrollEvent()+b,y.event.hideGracefully)},touchClose:function(){y.verbose("Binding popup touchclose event to document"),s.on("touchstart"+b,function(t){y.verbose("Touched away from popup"),y.event.hideGracefully.call(W,t)})},clickaway:function(){y.verbose("Binding popup close event to document"),s.on("click"+b,function(t){y.verbose("Clicked away from popup"),y.event.hideGracefully.call(W,t)})}},unbind:{events:function(){p.off(b),F.off(S)},close:function(){s.off(b),D.off(b)}},has:{popup:function(){return a&&a.length>0}},should:{centerArrow:function(t){return!y.is.basic()&&t.target.width<=2*P.arrowPixelsFromEdge}},is:{offstage:function(e,o){var n=[];return t.each(e,function(t,e){e<-P.jitter&&(y.debug("Position exceeds allowable distance from edge",t,e,o),n.push(t))}),n.length>0},svg:function(t){return y.supports.svg()&&t instanceof SVGGraphicsElement},basic:function(){return F.hasClass(T.basic)},active:function(){return F.hasClass(T.active)},animating:function(){return a!==n&&a.hasClass(T.animating)},fluid:function(){return a!==n&&a.hasClass(T.fluid)},visible:function(){return a!==n&&a.hasClass(T.popupVisible)},dropdown:function(){return F.hasClass(T.dropdown)},hidden:function(){return!y.is.visible()},rtl:function(){return"rtl"==F.css("direction")}},reset:function(){y.remove.visible(),P.preserve?t.fn.transition!==n&&a.transition("remove transition"):y.removePopup()},setting:function(e,o){if(t.isPlainObject(e))t.extend(!0,P,e);else{if(o===n)return P[e];P[e]=o}},internal:function(e,o){if(t.isPlainObject(e))t.extend(!0,y,e);else{if(o===n)return y[e];y[e]=o}},debug:function(){!P.silent&&P.debug&&(P.performance?y.performance.log(arguments):(y.debug=Function.prototype.bind.call(console.info,console,P.name+":"),y.debug.apply(console,arguments)))},verbose:function(){!P.silent&&P.verbose&&P.debug&&(P.performance?y.performance.log(arguments):(y.verbose=Function.prototype.bind.call(console.info,console,P.name+":"),y.verbose.apply(console,arguments)))},error:function(){P.silent||(y.error=Function.prototype.bind.call(console.error,console,P.name+":"),y.error.apply(console,arguments))},performance:{log:function(t){var e,o;P.performance&&(o=(e=(new Date).getTime())-(c||e),c=e,d.push({Name:t[0],Arguments:[].slice.call(t,1)||"",Element:W,"Execution Time":o})),clearTimeout(y.performance.timer),y.performance.timer=setTimeout(y.performance.display,500)},display:function(){var e=P.name+":",o=0;c=!1,clearTimeout(y.performance.timer),t.each(d,function(t,e){o+=e["Execution Time"]}),e+=" "+o+"ms",u&&(e+=" '"+u+"'"),(console.group!==n||console.table!==n)&&d.length>0&&(console.groupCollapsed(e),console.table?console.table(d):t.each(d,function(t,e){console.log(e.Name+": "+e["Execution Time"]+"ms")}),console.groupEnd()),d=[]}},invoke:function(e,o,i){var a,s,p,l=M;return o=o||h,i=W||i,"string"==typeof e&&l!==n&&(e=e.split(/[\. ]/),a=e.length-1,t.each(e,function(o,i){var r=o!=a?i+e[o+1].charAt(0).toUpperCase()+e[o+1].slice(1):e;if(t.isPlainObject(l[r])&&o!=a)l=l[r];else{if(l[r]!==n)return s=l[r],!1;if(!t.isPlainObject(l[i])||o==a)return l[i]!==n&&(s=l[i],!1);l=l[i]}})),t.isFunction(s)?p=s.apply(i,o):s!==n&&(p=s),t.isArray(r)?r.push(p):r!==n?r=[r,p]:p!==n&&(r=p),s}},g?(M===n&&y.initialize(),y.invoke(f)):(M!==n&&M.invoke("destroy"),y.initialize())}),r!==n?r:this},t.fn.popup.settings={name:"Popup",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"popup",observeChanges:!0,onCreate:function(){},onRemove:function(){},onShow:function(){},onVisible:function(){},onHide:function(){},onUnplaceable:function(){},onHidden:function(){},on:"hover",boundary:e,addTouchEvents:!0,position:"top left",variation:"",movePopup:!0,target:!1,popup:!1,inline:!1,preserve:!1,hoverable:!1,content:!1,html:!1,title:!1,closable:!0,hideOnScroll:"auto",exclusive:!1,context:"body",scrollContext:e,prefer:"opposite",lastResort:!1,arrowPixelsFromEdge:20,delay:{show:50,hide:70},setFluidWidth:!0,duration:200,transition:"scale",distanceAway:0,jitter:2,offset:0,maxSearchDepth:15,error:{invalidPosition:"The position you specified is not a valid position",cannotPlace:"Popup does not fit within the boundaries of the viewport",method:"The method you called is not defined.",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",notFound:"The target or popup you specified does not exist on the page"},metadata:{activator:"activator",content:"content",html:"html",offset:"offset",position:"position",title:"title",variation:"variation"},className:{active:"active",basic:"basic",animating:"animating",dropdown:"dropdown",fluid:"fluid",loading:"loading",popup:"ui popup",position:"top left center bottom right",visible:"visible",popupVisible:"visible"},selector:{popup:".ui.popup"},templates:{escape:function(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(t)?t.replace(/[&<>"'`]/g,function(t){return e[t]}):t},popup:function(e){var o="",i=t.fn.popup.settings.templates.escape;return typeof e!==n&&(typeof e.title!==n&&e.title&&(e.title=i(e.title),o+='<div class="header">'+e.title+"</div>"),typeof e.content!==n&&e.content&&(e.content=i(e.content),o+='<div class="content">'+e.content+"</div>")),o}}}}(jQuery,window,document);