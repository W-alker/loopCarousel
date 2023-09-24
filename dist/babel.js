"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoopCarousel=void 0,exports.loopCarousel=loopCarousel;var LoopCarousel=function(){function r(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:8,n=3<arguments.length&&void 0!==arguments[3]&&arguments[3],i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:"linear";_classCallCheck(this,r),t.dataset.loopCarousel="true",this.el=t,this.scrollWidth=t.scrollWidth,this.spaceBetween=e||0,this.duration=o||8,this.timingFn=i||"linear",n&&(this.useJs=!0,this.jsAni=null,this.runPx=0,this.jsAniIsStop=!1)}return _createClass(r,[{key:"appendNode",value:function(){for(var t=document.documentElement.clientWidth,e=Array.from(this.el.children).map(function(t){return t.clientWidth}),o=0;o<e.length&&(t-=e[o],this.el.append(this.el.children[o].cloneNode()),!(t<=0));o++);}},{key:"createJSAni",value:function(){var t=this,e=this.scrollWidth/this.duration/180;this.jsAni=function(){t.runPx>=t.scrollWidth?t.runPx=0:t.runPx+=e,t.el.style.transform="translateX(-".concat(t.runPx,"px)"),t.jsAniIsStop||window.requestAnimationFrame(t.jsAni)}}},{key:"createCSSAni",value:function(){var t=this.scrollWidth+this.spaceBetween/2,t="@keyframes loopCarousel_x_".concat(this.scrollWidth," { to { transform: translateX(").concat(-t,"px); } }"),e=document.querySelector("style")[0]||document.createElement("style");e.innerHTML+=t,document.querySelector("style")[0]||document.querySelector("head").appendChild(e)}},{key:"createAnimation",value:function(){this.useJs?this.createJSAni():this.createCSSAni()}},{key:"runAnimation",value:function(){if(this.useJs)return this.jsAniIsStop=!1,this.jsAni();var t="loopCarousel_x_".concat(this.scrollWidth," ").concat(this.duration,"s infinite ").concat(this.timingFn);this.el.style.animation=t}},{key:"stopAnimation",value:function(){this.useJs?this.jsAniIsStop=!0:this.el.style.animation=""}}]),r}();function loopCarousel(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:8,n=3<arguments.length&&void 0!==arguments[3]&&arguments[3],i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:"linear";if(!t.dataset.loopCarousel)return(t=new LoopCarousel(t,e,o,n,i)).appendNode(),t.createAnimation(),t.runAnimation(),t}exports.LoopCarousel=LoopCarousel;