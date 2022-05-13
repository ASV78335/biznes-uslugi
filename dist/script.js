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
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/time */ "./src/js/modules/time.js");
/* harmony import */ var _utils_calcScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/calcScroll */ "./src/js/utils/calcScroll.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/feedback */ "./src/js/modules/feedback.js");
/* harmony import */ var _modules_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/buttons */ "./src/js/modules/buttons.js");







window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_time__WEBPACK_IMPORTED_MODULE_1__["default"])('.top__current-state', '.top__current-text');
  Object(_modules_time__WEBPACK_IMPORTED_MODULE_1__["default"])('.contacts__current-state', '.contacts__current-text');
  Object(_utils_calcScroll__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_3__["default"])('.accordion__header');
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])('.slider__item', '.arrow_left', '.arrow_right');
  Object(_modules_feedback__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_buttons__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accordion = block => {
  const headers = document.querySelectorAll(block);
  headers.forEach(item => {
    item.addEventListener('click', function () {
      item.nextElementSibling.classList.toggle('accordion__block_visible');
      item.querySelector('.triangle').classList.toggle('triangle_down');
      item.classList.toggle('accordion__header_dots');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (accordion); // const accordion = (triggersSelector) => {
//     const btns = document.querySelectorAll(triggersSelector);
//     btns.forEach(btn => {
//         btn.addEventListener('click', function() {
//             this.classList.toggle('active-style');
//             this.nextElementSibling.classList.toggle('active-content');
//             if (this.classList.contains('active-style')) {
//                 this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
//             } else {
//                 this.nextElementSibling.style.maxHeight = '0px';
//             }
//         });
//     });
//   blocks = document.querySelectorAll(itemsSelector);
// blocks.forEach(block => {
//     block.classList.add('animated', 'fadeInDown');
// });
// btns.forEach(btn => {
//     btn.addEventListener('click', function() {
//         if (!this.classList.contains('active')) {
//             btns.forEach(btn => {
//                 btn.classList.remove('active', 'active-style');
//             });
//             this.classList.add('active', 'active-style');
//         }
//     });
// });
// };
// export default accordion;

/***/ }),

/***/ "./src/js/modules/buttons.js":
/*!***********************************!*\
  !*** ./src/js/modules/buttons.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const buttons = () => {
  const btnPopup = document.querySelectorAll('.btn_popup'),
        wrapper = document.querySelector('.feedback-wrapper'),
        popup = document.querySelector('.feedback_popup');
  btnPopup.forEach(item => {
    item.addEventListener('click', () => {
      wrapper.style.display = 'block';
      popup.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (buttons);

/***/ }),

/***/ "./src/js/modules/feedback.js":
/*!************************************!*\
  !*** ./src/js/modules/feedback.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const feedback = () => {
  const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        close = document.querySelectorAll('.popup_close'),
        wrapper = document.querySelector('.feedback-wrapper');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...' // spinner: 'assets/img/spinner.gif',
    // ok: 'assets/img/ok.png',
    // fail: 'assets/img/fail.png'

  };
  const path = 'assets/server.php';

  const postData = async (url, data) => {
    console.log(url);
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = "Файл не выбран";
    });
  };

  close.forEach(item => {
    item.addEventListener('click', () => {
      item.parentNode.style.display = 'none';
      wrapper.style.display = 'none';
      document.body.style.overflow = '';
    });
  });
  wrapper.addEventListener('click', e => {
    if (e.target.classList.contains('feedback-wrapper')) {
      wrapper.style.display = 'none';
      wrapper.children[0].style.display = 'none';
      document.body.style.overflow = '';
    }
  });
  forms.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item);
      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
      console.log(api);
      postData(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (feedback);

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menu = () => {
  const menuUL = document.getElementById('menu-ul');
  const menuFL = document.getElementById('menu-fl');
  const subMenuUL = document.getElementById('submenu-ul');
  const subMenuFL = document.getElementById('submenu-fl');
  const subMenuUlItems = document.querySelectorAll('.submenu-ul__items');
  const subMenuFlItems = document.querySelectorAll('.submenu-fl__items');
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
    subMenuFlItems.forEach(function (item) {
      item.style.display = 'block';
    });
    subMenuUlItems.forEach(function (item) {
      item.style.display = 'none';
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = (selector, prev, next) => {
  const slides = document.querySelectorAll(selector),
        leftArrow = document.querySelector(prev),
        rightArrow = document.querySelector(next);
  let slideIndex = 0;

  function showSlides(n) {
    if (n > slides.length - 1) {
      slideIndex = 0;
    }

    if (n < 0) {
      slideIndex = slides.length - 1;
    }

    slides.forEach(item => {
      item.style.display = "none";
    });
    slides[slideIndex].style.display = 'block';
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  leftArrow.addEventListener('click', () => {
    plusSlides(-1);
  });
  rightArrow.addEventListener('click', () => {
    plusSlides(1);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/time.js":
/*!********************************!*\
  !*** ./src/js/modules/time.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const time = (timeIndicator, timeInfo) => {
  const indicator = document.querySelectorAll(timeIndicator),
        info = document.querySelectorAll(timeInfo);
  const ourZone = -8,
        workStart = 9,
        workEnd = 18; // Узнать текущее время и часовой пояс посетителя

  let curTime = new Date(),
      hours = curTime.getHours(),
      zone = curTime.getTimezoneOffset(),
      dif = zone / 60 - ourZone; // Текущий день недели

  let dayWeek = [7, 1, 2, 3, 4, 5, 6][curTime.getDay()]; // Перевести часы работы в часовой пояс посетителя

  hours = hours + dif; // Сравнить с режимом работы

  if (hours > workStart && hours < workEnd) {
    indicator.forEach(item => {
      item.style.backgroundColor = 'lime';
    });
    info.forEach(item => {
      item.innerHTML = 'Работаем';
    });
  } else {
    indicator.forEach(item => {
      item.style.backgroundColor = 'red';
    });
    info.forEach(item => {
      item.innerHTML = 'Закрыто';
    });
  }

  ; // Если суббота/воскресенье

  if (dayWeek === 6 || dayWeek === 7) {
    indicator.forEach(item => {
      item.style.backgroundColor = 'red';
    });
    info.forEach(item => {
      item.innerHTML = 'Закрыто';
    });
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (time);

/***/ }),

/***/ "./src/js/utils/calcScroll.js":
/*!************************************!*\
  !*** ./src/js/utils/calcScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calcScroll = () => {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflow = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

/* harmony default export */ __webpack_exports__["default"] = (calcScroll);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map