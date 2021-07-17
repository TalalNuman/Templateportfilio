/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ityped/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/ityped/src/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/**
 * @name setProps
 * @description Set the ityped properties configuration
 * @param {Object} config The configuration properties
 * @return {Promise}
 */
const setProps = ({
  strings = ['Put your strings here...', 'and Enjoy!'],
  typeSpeed = 100,
  backSpeed = 50,
  backDelay = 500,
  startDelay = 500,
  cursorChar = '|',
  placeholder = false,
  showCursor = true,
  disableBackTyping = false,
  onFinished = function () { },
  loop = true
}) => ({
  strings,
  typeSpeed,
  backSpeed,
  cursorChar,
  backDelay,
  placeholder,
  startDelay,
  showCursor,
  loop,
  disableBackTyping,
  onFinished
})

const init = (element, properties) => {
  let i = 0, l, STRINGS_TO_ITERATE;

  const typewrite = (strings, props) => {
    if (i === l)
      if (props.loop) i = 0;
    setTimeout(() => { typeString(strings[i], props); }, props.startDelay);
  }

  const typeString = (str, props) => {
    let index = 0,
      strLen = str.length;
    let intervalID = setInterval(() => {
      props.placeholder ? element.placeholder += str[index] : element.textContent += str[index];
      if (++index === strLen) return onStringTyped(intervalID, props);
    }, props.typeSpeed);
  }

  const onStringTyped = (id, props) => {
    clearInterval(id);
    if (props.disableBackTyping && i === l - 1) {
      return props.onFinished()
    }
    if (!props.loop && i === l - 1) {
      return props.onFinished();
    }
    setTimeout(() => eraseString(props), props.backDelay);
  }

  const eraseString = (props) => {
    let str = props.placeholder ? element.placeholder : element.textContent,
      strLen = str.length;
    let intervalID = setInterval(() => {
      props.placeholder
        ? element.placeholder = element.placeholder.substr(0, --strLen)
        : element.textContent = str.substr(0, --strLen);
      if (strLen === 0) return onStringErased(intervalID, props);
    }, props.backSpeed);
  }

  const onStringErased = (id, props) => {
    clearInterval(id);
    ++i;
    typewrite(STRINGS_TO_ITERATE, props);
  }

  const setCursor = (element, props) => {
    let cursorSpan = document.createElement('span');
    cursorSpan.classList.add('ityped-cursor');
    cursorSpan.textContent = '|';
    cursorSpan.textContent = props.cursorChar;
    element.insertAdjacentElement('afterend', cursorSpan);
  }


  const startTyping = (prop) => {
    let props = setProps(prop || {})
    let strings = props.strings
    STRINGS_TO_ITERATE = strings
    l = strings.length
    if (typeof element === "string") element = document.querySelector(element)
    if (props.showCursor) setCursor(element, props)
    typewrite(strings, props)
  }

  return startTyping(properties)
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************!*\
  !*** ./app.js ***!
  \****************/
var i = __webpack_require__(/*! ityped */ "./node_modules/ityped/src/index.js");

i.init(web, {
  showCursor: false,
  strings: [' Designer', ' Developer']
});
})();

/******/ })()
;