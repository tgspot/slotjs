!function(Q){var U={};function F(B){if(U[B])return U[B].exports;var s=U[B]={i:B,l:!1,exports:{}};return Q[B].call(s.exports,s,s.exports,F),s.l=!0,s.exports}F.m=Q,F.c=U,F.d=function(Q,U,B){F.o(Q,U)||Object.defineProperty(Q,U,{enumerable:!0,get:B})},F.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},F.t=function(Q,U){if(1&U&&(Q=F(Q)),8&U)return Q;if(4&U&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var B=Object.create(null);if(F.r(B),Object.defineProperty(B,"default",{enumerable:!0,value:Q}),2&U&&"string"!=typeof Q)for(var s in Q)F.d(B,s,function(U){return Q[U]}.bind(null,s));return B},F.n=function(Q){var U=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return F.d(U,"a",U),U},F.o=function(Q,U){return Object.prototype.hasOwnProperty.call(Q,U)},F.p="/",F(F.s=0)}([function(Q,U,F){F(3),Q.exports=F(2)},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvc2xvdC1tYWNoaW5lL3Nsb3QtbWFjaGluZS5zdHlsZS5zY3NzP2Q0ODciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n")},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4uc2Nzcz85NDM1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/app/utils/dom.util.js\nfunction createElement() {\n  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var angle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  var element = document.createElement('DIV');\n  element.className = className;\n\n  if (typeof content === 'string') {\n    element.innerText = content;\n  } else {\n    element.appendChild(content);\n  }\n\n  if (angle !== null) {\n    element.style.transform = \"rotate(\".concat(angle, \"deg)\");\n  }\n\n  return element;\n}\n// CONCATENATED MODULE: ./src/app/utils/animation.util.js\nvar dynamicStyles = null;\nfunction addAnimation(name, body) {\n  if (!dynamicStyles) {\n    dynamicStyles = document.createElement('style');\n    dynamicStyles.type = 'text/css';\n    document.head.appendChild(dynamicStyles);\n  }\n\n  dynamicStyles.sheet.insertRule(\"@keyframes \".concat(name, \" {\\n        \").concat(body, \"\\n    }\"), dynamicStyles.length);\n}\nfunction resetAnimations() {\n  if (dynamicStyles) {\n    dynamicStyles.remove();\n    dynamicStyles = null;\n  }\n}\nfunction stopAt(name, start, end, alpha, speed) {\n  var angles = [start, end - alpha * 0.25, end + alpha * 0.125, end - alpha * 0.0625, end + alpha * 0.03125, end - alpha * 0.015625, end];\n  var previousAngle = start;\n  var total = 0;\n  var time = angles.map(function (angle) {\n    var delta = Math.max(Math.abs(angle - previousAngle) / Math.abs(speed), 10);\n    previousAngle = angle;\n    total += delta;\n    return delta;\n  });\n  var previousPercent = 0;\n  var percent = time.map(function (t) {\n    var p = previousPercent + 100 * (t / total);\n    previousPercent = p;\n    return p;\n  }); // TODO: Handle opacity here!\n\n  var animation = percent.map(function (p, i) {\n    return \"\".concat(Math.round(p), \"% { transform: rotate(\").concat(angles[i].toFixed(2), \"deg); }\");\n  }).join('\\n');\n  addAnimation(name, animation);\n  return total;\n}\n// CONCATENATED MODULE: ./src/app/utils/array.util.js\nfunction shuffle(a) {\n  for (var i = a.length - 1; i > 0; --i) {\n    var j = Math.floor(Math.random() * (i + 1)); // eslint-disable-next-line no-param-reassign\n\n    var _ref = [a[j], a[i]];\n    a[i] = _ref[0];\n    a[j] = _ref[1];\n  }\n\n  return a;\n}\n// CONCATENATED MODULE: ./src/app/constants/symbols.constants.js\nvar SYMBOLS_CLASSIC = ['💀', '🍋', '🍊', '🍉', '🍇', '🍓', '🍒', '🔔', '🍀', '💎'];\nvar SYMBOLS_CHRISTMAS = ['⛄', '🦌', '🎄', '🎀', '🎁', '🎆', '🍾', '🔔', '🎅', '🌟'];\nvar SYMBOLS_HALLOWEEN = ['🌚', '🐺', '🎃', '🧠', '👹', '👽', '👻', '🧟‍', '🧛‍', '💀'];\nvar SYMBOLS_ANIMALS = ['🐭', '🐱', '🦀', '🐞', '🐓', '🐍', '🐟', '🐸', '🦊‍', '🦁'];\nvar SYMBOLS_SPORTS = ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🥊‍', '🎯'];\nvar ALL_SYMBOLS = [SYMBOLS_CLASSIC, SYMBOLS_CHRISTMAS, SYMBOLS_HALLOWEEN, SYMBOLS_ANIMALS, SYMBOLS_SPORTS];\nvar SYMBOLS_RANDOM = ALL_SYMBOLS[Math.random() * ALL_SYMBOLS.length | 0];\n// CONCATENATED MODULE: ./src/app/constants/vibration.constants.js\nvar VIBRATION_STOP = [200, 50, 50, 50, 50, 25, 25, 25, 25, 25, 25, 25, 25];\nvar VIBRATION_START = [25, 25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 50, 50];\n// EXTERNAL MODULE: ./src/app/components/slot-machine/slot-machine.style.scss\nvar slot_machine_style = __webpack_require__(1);\n\n// CONCATENATED MODULE: ./src/app/components/slot-machine/slot-machine.component.js\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar slot_machine_component_SlotMachine =\n/*#__PURE__*/\nfunction () {\n  // Elements:\n  // Visual config:\n  // State:\n  function SlotMachine() {\n    _classCallCheck(this, SlotMachine);\n\n    this.root = document.querySelector(SlotMachine.SELECTOR_BASE);\n    this.display = document.querySelector(SlotMachine.SELECTOR_DISPLAY);\n    this.reels = [];\n    this.shadows = [4, 3, 3, 2, 1];\n    this.symbols = _toConsumableArray(SYMBOLS_RANDOM);\n    this.alpha = 360 / SYMBOLS_RANDOM.length;\n    this.currentReel = null;\n    this.speed = -0.75;\n    this.lastUpdate = 0;\n    this.init();\n    document.onclick = this.handleClick.bind(this);\n  }\n\n  _createClass(SlotMachine, [{\n    key: \"init\",\n    value: function init() {\n      var alpha = this.alpha,\n          shadows = this.shadows,\n          symbols = this.symbols;\n      this.reels = Array.from(document.querySelectorAll(SlotMachine.SELECTOR_REEL)).slice(0, -1).map(function (reel, ireel) {\n        shuffle(symbols);\n        symbols.forEach(function (symbol, isymbol) {\n          var slotText = createElement('sm__cellFigure', symbol);\n          var slot = createElement('sm__cell', slotText, isymbol * alpha);\n          reel.appendChild(slot);\n          var totalShadows = shadows[ireel];\n          var beta = 1 / (totalShadows + 1);\n\n          for (var ishadow = 1; ishadow <= totalShadows; ++ishadow) {\n            reel.appendChild(createElement(\"sm__cell sm__shadow sm__shadow-\".concat(ishadow), slotText.cloneNode(true), (isymbol + beta * ishadow) * alpha));\n          }\n        });\n        return {\n          element: reel,\n          style: reel.style,\n          angle: 0\n        };\n      });\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      var reels = this.reels,\n          root = this.root;\n      resetAnimations();\n      reels.map(function (reel) {\n        return reel.element.classList.remove('is-stop');\n      });\n      root.style = '';\n      this.currentReel = 0;\n      this.lastUpdate = performance.now();\n      window.navigator.vibrate(VIBRATION_START);\n      requestAnimationFrame(function () {\n        return _this.tick();\n      });\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.currentReel = null; // TODO: 32 is a css variable!\n\n      this.root.style.transform = \"scale(\".concat((window.innerWidth - 32) / this.display.offsetWidth, \")\"); // TODO: Check win\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      var _this2 = this;\n\n      var reels = this.reels,\n          speed = this.speed,\n          currentReel = this.currentReel,\n          lastUpdate = this.lastUpdate;\n      var now = performance.now();\n      var deltaTime = now - lastUpdate;\n      var deltaAlpha = deltaTime * speed;\n\n      if (currentReel === null) {\n        return;\n      }\n\n      this.lastUpdate = now;\n\n      for (var i = reels.length - 1; i >= currentReel; --i) {\n        var reel = reels[i];\n        var angle = reel.angle = (360 + (reel.angle + deltaAlpha)) % 360;\n        reel.style.transform = \"rotate(\".concat(angle, \"deg)\");\n      }\n\n      requestAnimationFrame(function () {\n        return _this2.tick();\n      });\n    }\n  }, {\n    key: \"stopReel\",\n    value: function stopReel(reelIndex) {\n      var alpha = this.alpha,\n          speed = this.speed;\n      var deltaAlpha = (performance.now() - this.lastUpdate) * speed;\n      var reel = this.reels[reelIndex];\n      var angle = (360 - reel.angle - deltaAlpha) % 360;\n      var index = Math.ceil(angle / alpha);\n      var stopAngle = index * alpha;\n      var animationName = \"stop-\".concat(reelIndex);\n      var animationDuration = stopAt(animationName, (360 - angle) % 360, (360 - stopAngle) % 360, alpha, speed) * 5;\n      window.navigator.vibrate(VIBRATION_STOP);\n      reel.style.animation = \"\".concat(animationName, \" \").concat(animationDuration, \"ms ease-out forwards\");\n      reel.element.classList.add('is-stop');\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick() {\n      var currentReel = this.currentReel;\n\n      if (currentReel === null) {\n        this.start();\n      } else {\n        ++this.currentReel;\n        this.stopReel(currentReel);\n\n        if (currentReel === this.reels.length - 1) {\n          this.stop();\n        }\n      }\n    }\n  }]);\n\n  return SlotMachine;\n}();\nslot_machine_component_SlotMachine.SELECTOR_BASE = '.sm__base';\nslot_machine_component_SlotMachine.SELECTOR_DISPLAY = '.sm__display';\nslot_machine_component_SlotMachine.SELECTOR_REEL = '.sm__reel';\n// CONCATENATED MODULE: ./src/app/main.js\n // eslint-disable-next-line no-new\n\nnew slot_machine_component_SlotMachine();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3V0aWxzL2RvbS51dGlsLmpzPzdlMjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC91dGlscy9hbmltYXRpb24udXRpbC5qcz8zYjUyIiwid2VicGFjazovLy8uL3NyYy9hcHAvdXRpbHMvYXJyYXkudXRpbC5qcz9hNGNkIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29uc3RhbnRzL3N5bWJvbHMuY29uc3RhbnRzLmpzPzY2ZjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb25zdGFudHMvdmlicmF0aW9uLmNvbnN0YW50cy5qcz9hMDE3Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9zbG90LW1hY2hpbmUvc2xvdC1tYWNoaW5lLmNvbXBvbmVudC5qcz80N2NkIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi5qcz8zNjM4Il0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb250ZW50IiwiYW5nbGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsInN0eWxlIiwidHJhbnNmb3JtIiwiZHluYW1pY1N0eWxlcyIsImFkZEFuaW1hdGlvbiIsIm5hbWUiLCJib2R5IiwidHlwZSIsImhlYWQiLCJzaGVldCIsImluc2VydFJ1bGUiLCJsZW5ndGgiLCJyZXNldEFuaW1hdGlvbnMiLCJyZW1vdmUiLCJzdG9wQXQiLCJzdGFydCIsImVuZCIsImFscGhhIiwic3BlZWQiLCJhbmdsZXMiLCJwcmV2aW91c0FuZ2xlIiwidG90YWwiLCJ0aW1lIiwibWFwIiwiZGVsdGEiLCJNYXRoIiwibWF4IiwiYWJzIiwicHJldmlvdXNQZXJjZW50IiwicGVyY2VudCIsInQiLCJwIiwiYW5pbWF0aW9uIiwiaSIsInJvdW5kIiwidG9GaXhlZCIsImpvaW4iLCJzaHVmZmxlIiwiYSIsImoiLCJmbG9vciIsInJhbmRvbSIsIlNZTUJPTFNfQ0xBU1NJQyIsIlNZTUJPTFNfQ0hSSVNUTUFTIiwiU1lNQk9MU19IQUxMT1dFRU4iLCJTWU1CT0xTX0FOSU1BTFMiLCJTWU1CT0xTX1NQT1JUUyIsIkFMTF9TWU1CT0xTIiwiU1lNQk9MU19SQU5ET00iLCJWSUJSQVRJT05fU1RPUCIsIlZJQlJBVElPTl9TVEFSVCIsIlNsb3RNYWNoaW5lIiwicm9vdCIsInF1ZXJ5U2VsZWN0b3IiLCJTRUxFQ1RPUl9CQVNFIiwiZGlzcGxheSIsIlNFTEVDVE9SX0RJU1BMQVkiLCJyZWVscyIsInNoYWRvd3MiLCJzeW1ib2xzIiwiY3VycmVudFJlZWwiLCJsYXN0VXBkYXRlIiwiaW5pdCIsIm9uY2xpY2siLCJoYW5kbGVDbGljayIsImJpbmQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiU0VMRUNUT1JfUkVFTCIsInNsaWNlIiwicmVlbCIsImlyZWVsIiwiZm9yRWFjaCIsInN5bWJvbCIsImlzeW1ib2wiLCJzbG90VGV4dCIsInNsb3QiLCJ0b3RhbFNoYWRvd3MiLCJiZXRhIiwiaXNoYWRvdyIsImNsb25lTm9kZSIsImNsYXNzTGlzdCIsInBlcmZvcm1hbmNlIiwibm93Iiwid2luZG93IiwibmF2aWdhdG9yIiwidmlicmF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpY2siLCJpbm5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJkZWx0YVRpbWUiLCJkZWx0YUFscGhhIiwicmVlbEluZGV4IiwiaW5kZXgiLCJjZWlsIiwic3RvcEFuZ2xlIiwiYW5pbWF0aW9uTmFtZSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYWRkIiwic3RvcFJlZWwiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7QUFBTyxTQUFTQSxhQUFULEdBQW1FO0FBQUEsTUFBNUNDLFNBQTRDLHVFQUFoQyxFQUFnQztBQUFBLE1BQTVCQyxPQUE0Qix1RUFBbEIsRUFBa0I7QUFBQSxNQUFkQyxLQUFjLHVFQUFOLElBQU07QUFDdEUsTUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNMLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFFQUks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QUNDLFNBQVAsQ0FBaUJDLE9BQWpCLENBQXlCdEMsY0FBekI7QUFFQXNCLFVBQUksQ0FBQ3RFLEtBQUwsQ0FBVytCLFNBQVgsYUFBMkJrRSxhQUEzQixjQUE4Q0MsaUJBQTlDO0FBQ0E1QixVQUFJLENBQUMxRSxPQUFMLENBQWFxRixTQUFiLENBQXVCa0IsR0FBdkIsQ0FBMkIsU0FBM0I7QUFDSDtBQTdITDtBQUFBO0FBQUEsa0NBK0hrQjtBQUFBLFVBQ0Z4QyxXQURFLEdBQ2MsSUFEZCxDQUNGQSxXQURFOztBQUdWLFVBQUlBLFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN0QixhQUFLN0MsS0FBTDtBQUNILE9BRkQsTUFFTztBQUNILFVBQUUsS0FBSzZDLFdBQVA7QUFFQSxhQUFLeUMsUUFBTCxDQUFjekMsV0FBZDs7QUFFQSxZQUFJQSxXQUFXLEtBQUssS0FBS0gsS0FBTCxDQUFXOUMsTUFBWCxHQUFvQixDQUF4QyxFQUEyQztBQUN2QyxlQUFLMkYsSUFBTDtBQUNIO0FBQ0o7QUFDSjtBQTdJTDs7QUFBQTtBQUFBO0FBQWFuRCxrQyxDQUVGRyxhLEdBQWdCLFc7QUFGZEgsa0MsQ0FHRkssZ0IsR0FBbUIsYztBQUhqQkwsa0MsQ0FJRmtCLGEsR0FBZ0IsVzs7Q0NWM0I7O0FBQ0EsSUFBSWxCLGtDQUFKIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjbGFzc05hbWUgPSAnJywgY29udGVudCA9ICcnLCBhbmdsZSA9IG51bGwpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSBjb250ZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhbmdsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgkeyBhbmdsZSB9ZGVnKWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIiwibGV0IGR5bmFtaWNTdHlsZXMgPSBudWxsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFuaW1hdGlvbihuYW1lLCBib2R5KSB7XHJcbiAgICBpZiAoIWR5bmFtaWNTdHlsZXMpIHtcclxuICAgICAgICBkeW5hbWljU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICBkeW5hbWljU3R5bGVzLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZHluYW1pY1N0eWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZHluYW1pY1N0eWxlcy5zaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7IG5hbWUgfSB7XHJcbiAgICAgICAgJHsgYm9keSB9XHJcbiAgICB9YCwgZHluYW1pY1N0eWxlcy5sZW5ndGgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRBbmltYXRpb25zKCkge1xyXG4gICAgaWYgKGR5bmFtaWNTdHlsZXMpIHtcclxuICAgICAgICBkeW5hbWljU3R5bGVzLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBkeW5hbWljU3R5bGVzID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BBdChuYW1lLCBzdGFydCwgZW5kLCBhbHBoYSwgc3BlZWQpIHtcclxuICAgIGNvbnN0IGFuZ2xlcyA9IFtcclxuICAgICAgICBzdGFydCxcclxuICAgICAgICBlbmQgLSBhbHBoYSAqIDAuMjUsXHJcbiAgICAgICAgZW5kICsgYWxwaGEgKiAwLjEyNSxcclxuICAgICAgICBlbmQgLSBhbHBoYSAqIDAuMDYyNSxcclxuICAgICAgICBlbmQgKyBhbHBoYSAqIDAuMDMxMjUsXHJcbiAgICAgICAgZW5kIC0gYWxwaGEgKiAwLjAxNTYyNSxcclxuICAgICAgICBlbmQsXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBwcmV2aW91c0FuZ2xlID0gc3RhcnQ7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG5cclxuICAgIGNvbnN0IHRpbWUgPSBhbmdsZXMubWFwKChhbmdsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlbHRhID0gTWF0aC5tYXgoTWF0aC5hYnMoYW5nbGUgLSBwcmV2aW91c0FuZ2xlKSAvIE1hdGguYWJzKHNwZWVkKSwgMTApO1xyXG5cclxuICAgICAgICBwcmV2aW91c0FuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgdG90YWwgKz0gZGVsdGE7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWx0YTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBwcmV2aW91c1BlcmNlbnQgPSAwO1xyXG5cclxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aW1lLm1hcCgodCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHAgPSBwcmV2aW91c1BlcmNlbnQgKyAxMDAgKiAodCAvIHRvdGFsKTtcclxuXHJcbiAgICAgICAgcHJldmlvdXNQZXJjZW50ID0gcDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUT0RPOiBIYW5kbGUgb3BhY2l0eSBoZXJlIVxyXG4gICAgY29uc3QgYW5pbWF0aW9uID0gcGVyY2VudC5tYXAoKHAsIGkpID0+IGAkeyBNYXRoLnJvdW5kKHApIH0lIHsgdHJhbnNmb3JtOiByb3RhdGUoJHsgYW5nbGVzW2ldLnRvRml4ZWQoMikgfWRlZyk7IH1gKS5qb2luKCdcXG4nKTtcclxuXHJcbiAgICBhZGRBbmltYXRpb24obmFtZSwgYW5pbWF0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gdG90YWw7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGUoYSkge1xyXG4gICAgZm9yIChsZXQgaSA9IGEubGVuZ3RoIC0gMTsgaSA+IDA7IC0taSkge1xyXG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgW2FbaV0sIGFbal1dID0gW2Fbal0sIGFbaV1dO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBTWU1CT0xTX0NMQVNTSUMgPSBbXHJcbiAgICAn8J+SgCcsICfwn42LJywgJ/CfjYonLCAn8J+NiScsICfwn42HJywgJ/CfjZMnLCAn8J+NkicsICfwn5SUJywgJ/CfjYAnLCAn8J+SjiddO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNZTUJPTFNfQ0hSSVNUTUFTID0gW1xyXG4gICAgJ+KbhCcsICfwn6aMJywgJ/CfjoQnLCAn8J+OgCcsICfwn46BJywgJ/CfjoYnLCAn8J+NvicsICfwn5SUJywgJ/CfjoUnLCAn8J+MnyddO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNZTUJPTFNfSEFMTE9XRUVOID0gW1xyXG4gICAgJ/CfjJonLCAn8J+QuicsICfwn46DJywgJ/Cfp6AnLCAn8J+RuScsICfwn5G9JywgJ/CfkbsnLCAn8J+nn+KAjScsICfwn6eb4oCNJywgJ/CfkoAnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTWU1CT0xTX0FOSU1BTFMgPSBbXHJcbiAgICAn8J+QrScsICfwn5CxJywgJ/CfpoAnLCAn8J+QnicsICfwn5CTJywgJ/CfkI0nLCAn8J+QnycsICfwn5C4JywgJ/CfporigI0nLCAn8J+mgSddO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNZTUJPTFNfU1BPUlRTID0gW1xyXG4gICAgJ+KavScsICfwn4+AJywgJ/Cfj4gnLCAn4pq+JywgJ/Cfjr4nLCAn8J+PkCcsICfwn4+JJywgJ/CfjrEnLCAn8J+liuKAjScsICfwn46vJ107XHJcblxyXG5leHBvcnQgY29uc3QgQUxMX1NZTUJPTFMgPSBbXHJcbiAgICBTWU1CT0xTX0NMQVNTSUMsXHJcbiAgICBTWU1CT0xTX0NIUklTVE1BUyxcclxuICAgIFNZTUJPTFNfSEFMTE9XRUVOLFxyXG4gICAgU1lNQk9MU19BTklNQUxTLFxyXG4gICAgU1lNQk9MU19TUE9SVFMsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgU1lNQk9MU19SQU5ET00gPSBBTExfU1lNQk9MU1tNYXRoLnJhbmRvbSgpICogQUxMX1NZTUJPTFMubGVuZ3RoIHwgMF07XHJcbiIsImV4cG9ydCBjb25zdCBWSUJSQVRJT05fU1RPUCA9IFsyMDAsIDUwLCA1MCwgNTAsIDUwLCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjVdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZJQlJBVElPTl9TVEFSVCA9IFsyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDUwLCA1MCwgNTAsIDUwLCA1MF07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9kb20udXRpbCc7XHJcbmltcG9ydCB7IHN0b3BBdCwgcmVzZXRBbmltYXRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYW5pbWF0aW9uLnV0aWwnO1xyXG5pbXBvcnQgeyBzaHVmZmxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXJyYXkudXRpbCc7XHJcbmltcG9ydCB7IFNZTUJPTFNfUkFORE9NIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3N5bWJvbHMuY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVklCUkFUSU9OX1NUQVJULCBWSUJSQVRJT05fU1RPUCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy92aWJyYXRpb24uY29uc3RhbnRzJztcclxuXHJcbmltcG9ydCAnLi9zbG90LW1hY2hpbmUuc3R5bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2xvdE1hY2hpbmUge1xyXG5cclxuICAgIHN0YXRpYyBTRUxFQ1RPUl9CQVNFID0gJy5zbV9fYmFzZSc7XHJcbiAgICBzdGF0aWMgU0VMRUNUT1JfRElTUExBWSA9ICcuc21fX2Rpc3BsYXknO1xyXG4gICAgc3RhdGljIFNFTEVDVE9SX1JFRUwgPSAnLnNtX19yZWVsJztcclxuXHJcbiAgICAvLyBFbGVtZW50czpcclxuICAgIHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNsb3RNYWNoaW5lLlNFTEVDVE9SX0JBU0UpO1xyXG4gICAgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU2xvdE1hY2hpbmUuU0VMRUNUT1JfRElTUExBWSk7XHJcbiAgICByZWVscyA9IFtdO1xyXG5cclxuICAgIC8vIFZpc3VhbCBjb25maWc6XHJcbiAgICBzaGFkb3dzID0gWzQsIDMsIDMsIDIsIDFdO1xyXG4gICAgc3ltYm9scyA9IFsuLi5TWU1CT0xTX1JBTkRPTV07XHJcbiAgICBhbHBoYSA9IDM2MCAvIFNZTUJPTFNfUkFORE9NLmxlbmd0aDtcclxuXHJcbiAgICAvLyBTdGF0ZTpcclxuICAgIGN1cnJlbnRSZWVsID0gbnVsbDtcclxuICAgIHNwZWVkID0gLTAuNzU7XHJcbiAgICBsYXN0VXBkYXRlID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQub25jbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGNvbnN0IHsgYWxwaGEsIHNoYWRvd3MsIHN5bWJvbHMgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMucmVlbHMgPSBBcnJheVxyXG4gICAgICAgICAgICAuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNsb3RNYWNoaW5lLlNFTEVDVE9SX1JFRUwpKVxyXG4gICAgICAgICAgICAuc2xpY2UoMCwgLTEpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlZWwsIGlyZWVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzaHVmZmxlKHN5bWJvbHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN5bWJvbHMuZm9yRWFjaCgoc3ltYm9sLCBpc3ltYm9sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xvdFRleHQgPSBjcmVhdGVFbGVtZW50KCdzbV9fY2VsbEZpZ3VyZScsIHN5bWJvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xvdCA9IGNyZWF0ZUVsZW1lbnQoJ3NtX19jZWxsJywgc2xvdFRleHQsIGlzeW1ib2wgKiBhbHBoYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlZWwuYXBwZW5kQ2hpbGQoc2xvdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsU2hhZG93cyA9IHNoYWRvd3NbaXJlZWxdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJldGEgPSAxIC8gKHRvdGFsU2hhZG93cyArIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpc2hhZG93ID0gMTsgaXNoYWRvdyA8PSB0b3RhbFNoYWRvd3M7ICsraXNoYWRvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWVsLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgc21fX2NlbGwgc21fX3NoYWRvdyBzbV9fc2hhZG93LSR7IGlzaGFkb3cgfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90VGV4dC5jbG9uZU5vZGUodHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXN5bWJvbCArIGJldGEgKiBpc2hhZG93KSAqIGFscGhhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBlbGVtZW50OiByZWVsLCBzdHlsZTogcmVlbC5zdHlsZSwgYW5nbGU6IDAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3QgeyByZWVscywgcm9vdCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmVzZXRBbmltYXRpb25zKCk7XHJcblxyXG4gICAgICAgIHJlZWxzLm1hcChyZWVsID0+IHJlZWwuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdG9wJykpO1xyXG4gICAgICAgIHJvb3Quc3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UmVlbCA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZShWSUJSQVRJT05fU1RBUlQpO1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UmVlbCA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IDMyIGlzIGEgY3NzIHZhcmlhYmxlIVxyXG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHsgKHdpbmRvdy5pbm5lcldpZHRoIC0gMzIpIC8gdGhpcy5kaXNwbGF5Lm9mZnNldFdpZHRoIH0pYDtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogQ2hlY2sgd2luXHJcbiAgICB9XHJcblxyXG4gICAgdGljaygpIHtcclxuICAgICAgICBjb25zdCB7IHJlZWxzLCBzcGVlZCwgY3VycmVudFJlZWwsIGxhc3RVcGRhdGUgfSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gbm93IC0gbGFzdFVwZGF0ZTtcclxuICAgICAgICBjb25zdCBkZWx0YUFscGhhID0gZGVsdGFUaW1lICogc3BlZWQ7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50UmVlbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhc3RVcGRhdGUgPSBub3c7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSByZWVscy5sZW5ndGggLSAxOyBpID49IGN1cnJlbnRSZWVsOyAtLWkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVlbCA9IHJlZWxzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IHJlZWwuYW5nbGUgPSAoMzYwICsgKHJlZWwuYW5nbGUgKyBkZWx0YUFscGhhKSkgJSAzNjA7XHJcblxyXG4gICAgICAgICAgICByZWVsLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHsgYW5nbGUgfWRlZylgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wUmVlbChyZWVsSW5kZXgpIHtcclxuICAgICAgICBjb25zdCB7IGFscGhhLCBzcGVlZCB9ID0gdGhpcztcclxuICAgICAgICBjb25zdCBkZWx0YUFscGhhID0gKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sYXN0VXBkYXRlKSAqIHNwZWVkO1xyXG4gICAgICAgIGNvbnN0IHJlZWwgPSB0aGlzLnJlZWxzW3JlZWxJbmRleF07XHJcbiAgICAgICAgY29uc3QgYW5nbGUgPSAoMzYwIC0gcmVlbC5hbmdsZSAtIGRlbHRhQWxwaGEpICUgMzYwO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5jZWlsKGFuZ2xlIC8gYWxwaGEpO1xyXG4gICAgICAgIGNvbnN0IHN0b3BBbmdsZSA9IGluZGV4ICogYWxwaGE7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTmFtZSA9IGBzdG9wLSR7IHJlZWxJbmRleCB9YDtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IHN0b3BBdChcclxuICAgICAgICAgICAgYW5pbWF0aW9uTmFtZSxcclxuICAgICAgICAgICAgKDM2MCAtIGFuZ2xlKSAlIDM2MCxcclxuICAgICAgICAgICAgKDM2MCAtIHN0b3BBbmdsZSkgJSAzNjAsXHJcbiAgICAgICAgICAgIGFscGhhLFxyXG4gICAgICAgICAgICBzcGVlZCxcclxuICAgICAgICApICogNTtcclxuXHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci52aWJyYXRlKFZJQlJBVElPTl9TVE9QKTtcclxuXHJcbiAgICAgICAgcmVlbC5zdHlsZS5hbmltYXRpb24gPSBgJHsgYW5pbWF0aW9uTmFtZSB9ICR7IGFuaW1hdGlvbkR1cmF0aW9uIH1tcyBlYXNlLW91dCBmb3J3YXJkc2A7XHJcbiAgICAgICAgcmVlbC5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLXN0b3AnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnRSZWVsIH0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFJlZWwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICsrdGhpcy5jdXJyZW50UmVlbDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcFJlZWwoY3VycmVudFJlZWwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWVsID09PSB0aGlzLnJlZWxzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTbG90TWFjaGluZSB9IGZyb20gJy4vY29tcG9uZW50cy9zbG90LW1hY2hpbmUvc2xvdC1tYWNoaW5lLmNvbXBvbmVudCc7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XHJcbm5ldyBTbG90TWFjaGluZSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n")}]);