!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=0)}([function(t,e,n){n(3),t.exports=n(2)},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=["💀","🍋","🍊","🍉","🍇","🍓","🍒","🔔","🍀","💎"],i=[o,["⛄","🦌","🎄","🎀","🎁","🎆","🍾","🔔","🎅","🌟"],["🌚","🐺","🎃","🧠","👹","👽","👻","🧟‍","🧛‍","💀"],["🐭","🐱","🦀","🐞","🐓","🐍","🐟","🐸","🦊‍","🦁"],["⚽","🏀","🏈","⚾","🎾","🏐","🏉","🎱","🥊‍","🎯"]],r=i[Math.random()*i.length|0],a=null;function s(t,e,n,o,i){var r=[e,n-.25*o,n+.125*o,n-.0625*o,n+.03125*o,n-.015625*o,n],s=e,l=0,u=r.map(function(t){var e=Math.max(Math.abs(t-s)/Math.abs(i),10);return s=t,l+=e,e}),c=0;return function(t,e){a||((a=document.createElement("style")).type="text/css",document.head.appendChild(a)),a.sheet.insertRule("@keyframes ".concat(t," {\n        ").concat(e,"\n    }"),a.length)}(t,u.map(function(t){var e=c+t/l*100;return c=e,e}).map(function(t,e){return"".concat(Math.round(t),"% { transform: rotate(").concat(r[e].toFixed(2),"deg); }")}).join("\n")),l}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var u=function(){function t(e){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sounds=[],this.nextSound=0,this.totalSounds=0;for(var i=this.sounds,r=0;r<o;++r)i.push(new Audio(e));i[0].oncanplay=function(){n.totalSounds=o}}var e,n,o;return e=t,(n=[{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.sounds,n=this.nextSound,o=this.totalSounds,i=e[n];o&&i.paused&&(i.volume=t<0?1+t:t,i.play(),this.nextSound=(n+1)%o)}}])&&l(e.prototype,n),o&&l(e,o),t}(),c=new u("./assets/blip.mp3",16),h=(new u("./assets/coin.mp3"),new u("./assets/stop.mp3")),f=new u("./assets/unlucky.mp3",4),d=(new u("./assets/win.mp3",4),function(){c.play.apply(c,arguments)}),p=function(){h.play.apply(h,arguments)},v=function(){f.play.apply(f,arguments)},m=window.navigator,y=m.vibrate?m.vibrate.bind(m):function(){},_=[200,50,50,50,50,25,25,25,25,25,25,25,25],S=[25,25,25,25,25,25,25,25,50,50,50,50,50],I=function(){y(S)},b=function(){y(_)};function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=document.createElement("DIV");return o.className=Array.isArray(t)?t.join(" "):t,"string"==typeof e?o.innerText=e:e&&o.appendChild(e),null!==n&&(o.style.transform="rotate(".concat(n,"deg)")),o}function O(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var A=function(){function t(e){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.shadows=[4,3,2,1,0],this.root=void 0,this.style=void 0,this.index=void 0,this.alpha=void 0,this.angle=0,this.stopAt=0,this.index=e,this.alpha=o;var r=t.C_REEL,a=t.C_CELL,s=t.C_CELL_SHADOW,l=t.C_FIGURE,u=t.C_IS_STOP,c=t.V_INDEX,h=this.root=g([r,u]);(this.style=h.style).setProperty(c,e),function(t){for(var e=t.length-1;e>0;--e){var n=Math.floor(Math.random()*(e+1)),o=[t[n],t[e]];t[e]=o[0],t[n]=o[1]}}(i),i.forEach(function(t,i){var r=g(l,t),u=g(a,r,i*o);h.appendChild(u);for(var c=n.shadows[e]+1,f=1/c,d=1;d<c;++d)h.appendChild(g([a,s,"".concat(s,"-").concat(d)],r.cloneNode(!0),o*(i+f*d)))})}var e,n,o;return e=t,(n=[{key:"reset",value:function(){var t=this.root,e=this.style,n=this.stopAt;t.classList.remove("is-stop"),e.transform="rotate(".concat(this.angle=(360-n)%360,"deg)"),e.animation="",this.stopAt=0}},{key:"stop",value:function(e,n){var o=this.alpha,i=(360-this.angle-n)%360,r=Math.ceil(i/o)*o,a="stop-".concat(this.index),l=s(a,(360-i)%360,(360-r)%360,o,e)*t.STOP_ANIMATION_DURATION_MULTIPLIER;this.style.animation="".concat(a," ").concat(l,"ms ease-out forwards"),this.root.classList.add(t.C_IS_STOP),this.stopAt=r}}])&&O(e.prototype,n),o&&O(e,o),t}();A.C_REEL="sm__reel",A.C_CELL="sm__cell",A.C_CELL_SHADOW="sm__cell--shadow",A.C_FIGURE="sm__figure",A.C_IS_STOP="is-stop",A.V_INDEX="--index",A.STOP_ANIMATION_DURATION_MULTIPLIER=5;n(1);function E(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var C=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=document.querySelector(t.S_BASE),this.reelsContainer=document.querySelector(t.S_REELS_CONTAINER),this.display=document.querySelector(t.S_DISPLAY),this.reels=[],this.blipFading=void 0,this.reelCount=void 0,this.symbols=void 0,this.alpha=void 0,this.speed=void 0,this.zoomTransitionTimeoutID=null,this.currentReel=null,this.blipCounter=0,this.lastUpdate=0,this.init(e,n,o),window.onresize=this.handleResize.bind(this),document.onclick=this.handleClick.bind(this)}var e,n,i;return e=t,(n=[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-.75,i=this.alpha=360/e.length,r=E(e);this.blipFading=-1/t,this.reelCount=t,this.symbols=e,this.speed=n,this.resize();for(var a=this.reelsContainer,s=this.reels,l=0;l<t;++l){var u=new A(l,i,r);a.appendChild(u.root),s.push(u)}a.appendChild(new A(t).root)}},{key:"start",value:function(){var t=this;this.currentReel=0,this.zoomOut(),this.reels.forEach(function(t){return t.reset()}),a&&(a.remove(),a=null),I(),this.lastUpdate=performance.now(),requestAnimationFrame(function(){return t.tick()})}},{key:"stop",value:function(){this.currentReel=null,this.zoomIn(),v()}},{key:"tick",value:function(){var e=this,n=this.reels,o=this.speed,i=this.currentReel,r=this.lastUpdate,a=performance.now(),s=(a-r)*o;if(null!==i){0===(this.blipCounter=(this.blipCounter+1)%t.BLIP_RATE)&&d(this.blipFading*i),this.lastUpdate=a;for(var l=n.length-1;l>=i;--l){var u=n[l],c=u.angle=(360+(u.angle+s))%360;u.style.transform="rotate(".concat(c,"deg)")}requestAnimationFrame(function(){return e.tick()})}}},{key:"zoomIn",value:function(){this.zoom()}},{key:"zoomOut",value:function(){this.zoom(!0)}},{key:"zoom",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];clearTimeout(this.zoomTransitionTimeoutID);var n=this.root;n.style.transition=t.ZOOM_TRANSITION,n.classList[e?"remove":"add"](t.C_HAS_ZOOM),this.zoomTransitionTimeoutID=setTimeout(function(){n.style.transition=""},t.ZOOM_TRANSITION_DURATION)}},{key:"resize",value:function(){var e=this.root,n=this.reelCount,o=this.display,i=e.style,r=window,a=r.innerWidth,s=r.innerHeight,l=Math.min(a,s)/(2*n+t.CENTER_N_MARGIN_UNITS)|0;i.setProperty(t.V_REEL_SIZE,"".concat(l,"px")),i.setProperty(t.V_DISPLAY_SIZE,"".concat(l*n,"px")),i.setProperty(t.V_DISPLAY_ZOOM,"".concat(e.offsetWidth/o.offsetWidth))}},{key:"stopReel",value:function(t){var e=this.speed,n=(performance.now()-this.lastUpdate)*e;this.reels[t].stop(e,n),p(),b()}},{key:"handleClick",value:function(){var t=this.currentReel;null===t?this.start():(++this.currentReel,this.stopReel(t),t===this.reels.length-1&&this.stop())}},{key:"handleResize",value:function(){var t=this;requestAnimationFrame(function(){return t.resize()})}}])&&T(e.prototype,n),i&&T(e,i),t}();C.C_HAS_ZOOM="has-zoom",C.S_BASE=".sm__base",C.S_REELS_CONTAINER=".sm__reelsContainer",C.S_DISPLAY=".sm__display",C.V_REEL_SIZE="--reelSize",C.V_DISPLAY_SIZE="--displaySize",C.V_DISPLAY_ZOOM="--displayZoom",C.CENTER_N_MARGIN_UNITS=4,C.ZOOM_TRANSITION="transform ease-in-out 500ms 250ms",C.ZOOM_TRANSITION_DURATION=1e3,C.BLIP_RATE=4,new C(5,r)}]);