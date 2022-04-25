/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/time */ "./src/js/modules/time.js");

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_time__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const scroll = calcScroll();

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflow = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  ;

  function setCurrentState() {
    var now = new Date();
    alert(now);
  }

  ; // =================================================================
  // Submenu
  // =================================================================

  const menu = () => {
    const menuUL = document.getElementById('menu-ul');
    const menuFL = document.getElementById('menu-fl');
    const subMenuUL = document.getElementById('submenu-ul');
    const subMenuFL = document.getElementById('submenu-fl');
    const subMenuUlItems = document.querySelectorAll('.submenu-ul-items');
    const subMenuFlItems = document.querySelectorAll('.submenu-fl-items');
    const subMenuNoItems = document.querySelectorAll('.submenu-no-items');
    const menuWrapper = document.getElementById('menu-wrapper');

    function toggleUL() {
      if (subMenuUL.style.display == 'grid') {
        subMenuUL.style.display = 'none';
        menuWrapper.style.display = 'none';
      } else {
        subMenuUL.style.display = 'grid';
        menuWrapper.style.display = 'block';
      }

      ;
    }

    ;

    function toggleFL() {
      if (subMenuFL.style.display == 'grid') {
        subMenuFL.style.display = 'none';
        menuWrapper.style.display = 'none';
      } else {
        subMenuFL.style.display = 'grid';
        menuWrapper.style.display = 'block';
      }

      ;
    }

    ;
    menuUL.addEventListener('mouseenter', function () {
      toggleUL();
    });
    menuUL.addEventListener('mouseleave', function () {
      toggleUL();
    });
    menuFL.addEventListener('mouseenter', function () {
      toggleFL();
    });
    menuFL.addEventListener('mouseleave', function () {
      toggleFL();
    });
    menuUL.addEventListener('mouseenter', function () {
      subMenuUlItems.forEach(function (item) {
        item.style.display = 'block';
      });
      subMenuFlItems.forEach(function (item) {
        item.style.display = 'none';
      });
    });
    menuFL.addEventListener('mouseenter', function () {
      subMenuUlItems.forEach(function (item) {
        item.style.display = 'none';
      });
      subMenuFlItems.forEach(function (item) {
        item.style.display = 'block';
      });
    });
    subMenuNoItems.forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        subMenuUL.style.display = 'none';
        menuWrapper.style.display = 'none';
      });
    });
  };

  menu();
});

/***/ }),

/***/ "./src/js/modules/time.js":
/*!********************************!*\
  !*** ./src/js/modules/time.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const time = () => {
  console.log('Hi!');
};

/* harmony default export */ __webpack_exports__["default"] = (time);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map