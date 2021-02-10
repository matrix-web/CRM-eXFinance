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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/select */ "./src/js/modules/select.js");
/* harmony import */ var _modules_swipeEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/swipeEvent */ "./src/js/modules/swipeEvent.js");
/* harmony import */ var _modules_uploadImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/uploadImg */ "./src/js/modules/uploadImg.js");
/* harmony import */ var _modules_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tooltip */ "./src/js/modules/tooltip.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var main = document.querySelector('main');
var body = document.body;
var sidebar = document.querySelector('.sidebar');
var sidebarClose = document.querySelector('.sidebar__close');
var mediaQuery = window.matchMedia('(min-width: 1100px)');
var buttonAdd = document.querySelector('.button-add');
var buttonRefresh = document.querySelector('[data-refresh]');
var buttonLogout = document.querySelector('[data-logout]');
_modules_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"].init(buttonAdd);
_modules_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"].init(buttonRefresh);
_modules_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"].init(buttonLogout);
body.classList.add('left', 'right');
var customUpload = new _modules_uploadImg__WEBPACK_IMPORTED_MODULE_2__["default"]('#file', {
  modeView: 'custom',
  buttonDownLoad: {
    selectorPos: '.card-profile',
    pos: 'beforeend'
  },
  previewPos: {
    selectorPos: '.card-profile',
    pos: 'beforeend'
  },
  accept: ['.png', '.jpg', '.jpeg', '.gif'],
  onUpload: function onUpload(files) {
    console.log(files);
  }
});
Object(_modules_swipeEvent__WEBPACK_IMPORTED_MODULE_1__["swipe"])(main, {
  maxTime: 1000,
  minTime: 100,
  maxDist: 150,
  minDist: 60
});
Object(_modules_swipeEvent__WEBPACK_IMPORTED_MODULE_1__["swipe"])(body, {
  maxTime: 1000,
  minTime: 100,
  maxDist: 150,
  minDist: 60
});

function openMobileSidebar(e) {
  if (e.detail.dir === 'right') {
    document.body.classList.add('overlay');
    setTimeout(function () {
      return document.body.classList.add('overlay-active');
    }, 200);
    sidebar.classList.add('sidebar--active');
  }
}

function closeMobileSidebar(e) {
  if (e.detail.dir === 'left') {
    sidebar.classList.remove('sidebar--active');
    setTimeout(function () {
      return document.body.classList.remove('overlay-active');
    }, 200);
    setTimeout(function () {
      return document.body.classList.remove('overlay');
    }, 400);
  }

  if (e.target.dataset.close) {
    sidebar.classList.remove('sidebar--active');
    setTimeout(function () {
      return document.body.classList.remove('overlay-active');
    }, 200);
    setTimeout(function () {
      return document.body.classList.remove('overlay');
    }, 400);
  }
}

main.addEventListener('swipe', openMobileSidebar);
body.addEventListener('swipe', closeMobileSidebar);
sidebarClose.addEventListener('click', closeMobileSidebar);

if (mediaQuery.matches) {
  console.log('Swipe event handler removed for desktop.');
  main.removeEventListener('swipe', openMobileSidebar);
  body.removeEventListener('swipe', closeMobileSidebar);
  sidebarClose.removeEventListener('swipe', closeMobileSidebar);
}

new _modules_select__WEBPACK_IMPORTED_MODULE_0__["Select"]('#select', {
  placeholder: 'Выбери технологию',
  data: [{
    id: '1',
    value: 'Категория 1'
  }, {
    id: '2',
    value: 'Категория 2'
  }, {
    id: '3',
    value: 'Категория 3'
  }, {
    id: '4',
    value: 'Категория 4'
  }, {
    id: '5',
    value: 'Категория 5'
  }, {
    id: '6',
    value: 'Категория 6'
  }],
  onSelect: function onSelect(item) {
    console.log('selected item', item);
  }
});
var selectLanguage = new _modules_select__WEBPACK_IMPORTED_MODULE_0__["Select"]('#language', {
  selectedId: '1',
  data: [{
    id: '1',
    value: 'Русский'
  }, {
    id: '2',
    value: 'Английский'
  }],
  itemClass: 'select__item--position',
  template: "<svg class=\"select__icon\"><use xlink:href=\"../../img/svg/sprite/sprite.svg#russia\"></use></svg>, <svg class=\"select__icon\"><use xlink:href=\"../../img/svg/sprite/sprite.svg#usa\"></use></svg>",
  onSelect: function onSelect(item) {
    console.log('selected item', item);
  }
});
selectLanguage.setClass('.navigation__select .select__input', 'navigation__select-input');
selectLanguage.setClass('.navigation__select .select__input span', 'navigation__select-text');
selectLanguage.setClass('.navigation__select .select__icon', 'navigation__select-icon');
selectLanguage.setClass('.navigation__select .select__dropdown', 'navigation__select-dropdown');
selectLanguage.setClass('.navigation__select .select__item', 'navigation__select-item'); // Переключение сайдбара

var sidebarToggle = document.querySelector('[data-sidebar-toggle]');
sidebarToggle.addEventListener('click', function (event) {
  var mainLayout = document.querySelector('.app-main-layout');
  var sidebar = document.querySelector('[data-sidebar]');
  var logo = document.querySelector('[data-logo]');
  var logoLink = document.querySelector('[data-logo-link]');
  var userEl = document.querySelector('[data-user]');
  var userImg = document.querySelector('[data-user-img]');
  var userInfo = document.querySelector('[data-user-info]');
  var sidebarTextEls = document.querySelectorAll('[data-nav-text]');
  var sidebarNav = document.querySelector('[data-sidebar-nav]');
  var sidebarIcons = document.querySelectorAll('[data-sidebar-icon]');
  var toggleText = sidebarToggle.querySelector('[data-toggle-text]');
  var toggleIcon = sidebarToggle.querySelector('[data-toggle-icon]');
  sidebar.classList.toggle('mini-sidebar');
  logo.classList.toggle('mini-sidebar__logo');
  logoLink.classList.toggle('mini-sidebar__logo-link');
  userEl.classList.toggle('mini-sidebar__user');
  userImg.classList.toggle('mini-sidebar__user-img');
  userInfo.classList.toggle('mini-sidebar__user-info');
  sidebarNav.classList.toggle('mini-sidebar__nav');
  toggleText.classList.toggle('mini-sidebar__toggle-button-text--hide');
  toggleIcon.classList.toggle('mini-sidebar__toggle-button--active');

  if (mediaQuery.matches) {
    mainLayout.classList.toggle('app-main-layout--sidebar-mini');
  }

  var _iterator = _createForOfIteratorHelper(sidebarTextEls),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var text = _step.value;
      text.classList.toggle('mini-sidebar__text');
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(sidebarIcons),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var icon = _step2.value;
      icon.classList.toggle('mini-sidebar__nav-link-icon');
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var sidebarLinks = document.querySelectorAll('.sidebar__nav-link');
  setTimeout(function () {
    return _modules_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"].init(sidebarLinks);
  }, 0);

  if (event.target.closest('.mini-sidebar') && sidebarLinks.length) {
    var names = ['Счет', 'История', 'Планирование', 'Новая запись', 'Категории'];
    sidebarLinks.forEach(function (link, idx) {
      link.setAttribute('data-position', 'top');
      link.setAttribute('data-tooltip', names[idx]);
    });
  }
});

/***/ }),

/***/ "./src/js/modules/select.js":
/*!**********************************!*\
  !*** ./src/js/modules/select.js ***!
  \**********************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var getTemplate = function getTemplate() {
  var _itemClass, _listClass, _template;

  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var placeholder = arguments.length > 1 ? arguments[1] : undefined;
  var selectedId = arguments.length > 2 ? arguments[2] : undefined;
  var itemClass = arguments.length > 3 ? arguments[3] : undefined;
  var listClass = arguments.length > 4 ? arguments[4] : undefined;
  var template = arguments.length > 5 ? arguments[5] : undefined;
  var text = placeholder !== null && placeholder !== void 0 ? placeholder : 'Выберите значение';
  itemClass = (_itemClass = itemClass) !== null && _itemClass !== void 0 ? _itemClass : '';
  listClass = (_listClass = listClass) !== null && _listClass !== void 0 ? _listClass : '';
  template = (_template = template) !== null && _template !== void 0 ? _template : '';
  var htmlTemplates = template.trim().split(',');
  var items = data.map(function (item, idx) {
    var cls = '';

    if (item.id === selectedId) {
      text = item.value;
      cls = 'selected';
    }

    if (htmlTemplates.length && template) {
      return "<li class=\"select__item ".concat(itemClass, " ").concat(cls, "\" aria-label=\"select-item\" data-type=\"item\" data-id=\"").concat(item.id, "\">\n        <span style=\"pointer-events: none;\">").concat(item.value, "</span>\n        ").concat(htmlTemplates[idx], "\n      </li>");
    } else {
      return "<li class=\"select__item ".concat(itemClass, " ").concat(cls, "\" aria-label=\"select-item\" data-type=\"item\" data-id=\"").concat(item.id, "\">").concat(item.value, "</li>");
    }
  });
  return "\n    <div class=\"select__backdrop\" data-type=\"backdrop\"></div>\n      <div class=\"select__input\" data-type=\"input\" aria-label=\"select-input\">\n        <span data-type=\"value\">".concat(text, "</span>\n        <svg class=\"select__icon\" data-type=\"arrow\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <use xlink:href=\"../../img/svg/sprite/sprite.svg#arrow-down\"></use>\n        </svg>\n      </div>\n      <div id=\"select\" class=\"select__dropdown\" aria-label=\"dropdown\">\n        <ul class=\"select__list ").concat(listClass, "\">\n          ").concat(items.join(''), "\n        </ul>\n      </div>\n  ");
};

var Select = /*#__PURE__*/function () {
  function Select(selector, options) {
    _classCallCheck(this, Select);

    this.$el = document.querySelector(selector);
    this.options = options || [];
    this.selectedId = options.selectedId;
    this.itemClass = options.itemClass;
    this.listClass = options.listClass;
    this.template = options.template;
    this.isSelect = document.querySelector(selector) ? true : false;
    this.render();
    this.setup();
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      if (this.isSelect) {
        var _this$options = this.options,
            placeholder = _this$options.placeholder,
            data = _this$options.data,
            selectedId = _this$options.selectedId,
            itemClass = _this$options.itemClass,
            listClass = _this$options.listClass,
            template = _this$options.template;
        this.$el.classList.add('select');
        this.$el.setAttribute('role', 'select');
        this.$el.insertAdjacentHTML('afterbegin', getTemplate(data, placeholder, selectedId, itemClass, listClass, template));
        this.$el.querySelector('[data-type="input"]').setAttribute('tabindex', '0');
      }
    }
  }, {
    key: "setup",
    value: function setup() {
      if (this.isSelect) {
        this.clickHandler = this.clickHandler.bind(this);
        this.$el.addEventListener('click', this.clickHandler);
        this.$arrow = this.$el.querySelector('[data-type="arrow"]');
        this.$value = this.$el.querySelector('[data-type="value"]');
      }
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(event) {
      var type = event.target.dataset.type;

      if (type === 'input') {
        this.toggle();
      } else if (type === 'item') {
        var id = event.target.dataset.id;
        this.select(id);
      } else if (type === 'backdrop') {
        this.close();
      }
    }
  }, {
    key: "setClass",
    value: function setClass(selector, className) {
      var elements = document.querySelectorAll(selector);

      if (elements.length >= 1) {
        elements.forEach(function (elem) {
          return elem.classList.add(className);
        });
      }
    }
  }, {
    key: "select",
    value: function select(id) {
      if (this.isSelect) {
        this.selectedId = id;
        this.$value.textContent = this.current.value;
        this.$el.querySelectorAll('[data-type="item"]').forEach(function (el) {
          return el.classList.remove('selected');
        });
        this.$el.querySelector("[data-id=\"".concat(id, "\"]")).classList.add('selected');
        this.options.onSelect ? this.options.onSelect(this.current) : null;
        this.close();
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.isOpen ? this.close() : this.open();
    }
  }, {
    key: "open",
    value: function open() {
      if (this.isSelect) {
        this.$el.classList.add('open');
        this.$arrow.style.transform = "rotate(180deg)";
      }
    }
  }, {
    key: "close",
    value: function close() {
      if (this.isSelect) {
        this.$el.classList.remove('open');
        this.$arrow.style.transform = "rotate(0deg)";
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.isSelect) {
        this.$el.removeEventListener('click', this.clickHandler);
        this.$el.remove();
      }
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this.$el.classList.contains('open');
    }
  }, {
    key: "current",
    get: function get() {
      var _this = this;

      return this.options.data.find(function (item) {
        return item.id === _this.selectedId;
      });
    }
  }]);

  return Select;
}();

/***/ }),

/***/ "./src/js/modules/swipeEvent.js":
/*!**************************************!*\
  !*** ./src/js/modules/swipeEvent.js ***!
  \**************************************/
/*! exports provided: swipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swipe", function() { return swipe; });
/**
 * Object.assign() polyfill
 */
Object.assign || Object.defineProperty(Object, "assign", {
  enumerable: !1,
  configurable: !0,
  writable: !0,
  value: function value(a, b) {
    "use strict";

    if (void 0 === a || null === a) error("Cannot convert first argument to object");

    for (var c = Object(a), d = 1; d < arguments.length; d++) {
      var e = arguments[d];
      if (void 0 !== e && null !== e) for (var f = Object.keys(Object(e)), g = 0, h = f.length; g < h; g++) {
        var i = f[g],
            j = Object.getOwnPropertyDescriptor(e, i);
        void 0 !== j && j.enumerable && (c[i] = e[i]);
      }
    }

    return c;
  }
});
/**
 * CustomEvent() polyfill
 */

!function () {
  if ("function" == typeof window.CustomEvent) return;

  function t(t, e) {
    e = e || {
      bubbles: !1,
      cancelable: !1,
      detail: void 0
    };
    var n = document.createEvent("CustomEvent");
    return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
  }

  t.prototype = window.Event.prototype, window.CustomEvent = t;
}();
/**  
    * Функция определения события swipe на элементе
    * @param {Object} el - элемент DOM
    * @param {Object} settings - объект с предварительными настройками
*/

var swipe = function swipe(el, settings) {
  var dir; // Направление свайпа (horizontal, vertical)

  var swipeType; // тип свайпа (up, down, left, right)

  var dist; // Дистанция, пройденная указателем

  var isMouse = false; // Поддержка мыши (не используется для touch событий)

  var isMouseDown = false; // Указание на активное нажатие мыши (не используется для touch событий)

  var startX = 0; // Начало координат по оси X (pageX)

  var distX = 0; // Дистанция, пройденная указателем по оси X

  var startY = 0; // Начало координат по оси Y (pageY)

  var distY = 0; // Дистанция, пройденная указателем по оси Y

  var startTime = 0; // Время начала касания

  var support = {
    // Поддерживаемые браузером типы событий
    pointer: !!('PointerEvent' in window || 'msPointerEnabled' in window.navigator),
    touch: !!(typeof window.screen.orientation !== 'undefined' || /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 'ontouchstart' in window || navigator.msMaxTouchPoints || 'maxTouchPoints' in window.navigator > 1 || 'msMaxTouchPoints' in window.navigator > 1)
  }; // Настройки по умолчанию

  var defaultSettings = Object.assign({}, {
    minDist: 60,
    // Минимальная дистанция, которую должен пройти указатель, чтобы жест считался как свайп (px)
    maxDist: 120,
    // Максимальная дистанция, которую должен пройти указатель, чтобы жест считался как свайп (px)
    maxTime: 700,
    // Максимальное время, за которое должен быть совершен свайп (ms)
    minTime: 50 // Минимальное время, за которое должен быть совершен свайп (ms),

  }, settings); // Коррекция времени при ошибочных значениях

  if (defaultSettings.maxTime < defaultSettings.minTime) {
    defaultSettings.maxTime = defaultSettings.minTime + 500;
  }

  if (defaultSettings.maxTime < 100 || defaultSettings.minTime < 50) {
    defaultSettings.maxTime = 700;
    defaultSettings.minTime = 50;
  }
  /** 
   * Определение доступных в браузере событий: pointer, touch и mouse
   * @returns {Object} - возвращает объект с достными событиями
  */


  var getSupportedEvents = function getSupportedEvents() {
    var events = {};

    if (support.pointer) {
      events = {
        type: "pointer",
        start: "PointerDown",
        move: "PointerMove",
        end: "PointerUp",
        cancel: "PointerCancel",
        leave: "PointerLeave"
      }; // добавление префиксов для IE10

      var ie10 = window.navigator.msPointerEnabled && Function('/*@cc_on return document.documentMode===10@*/')();

      for (var value in events) {
        if (value === "type") continue;
        events[value] = ie10 ? "MS" + events[value] : events[value].toLowerCase();
      }
    } else if (support.touch) {
      events = {
        type: 'touch',
        start: 'touchstart',
        move: 'touchmove',
        end: 'touchend',
        cancel: 'touchcancel'
      };
    } else {
      events = {
        type: 'mouse',
        start: 'mousedown',
        move: 'mousemove',
        end: 'mouseup',
        leave: 'mouseleave'
      };
    }

    return events;
  };
  /**
   * Объединение событий mouse/pointer и touch
   * @param e {Event} - принимает в качестве аргумента событие
   * @returns {TouchList|Event} - возвращает либо TouchList, либо оставляет событие без изменения
   */


  var eventsUnify = function eventsUnify(e) {
    return e.changedTouches ? e.changedTouches[0] : e;
  };
  /**
   * Обработчик начала касания указателем
   * @param e {Event} - получает событие
   */


  var checkStart = function checkStart(e) {
    var event = eventsUnify(e); // Игнорирование касания несколькими пальцами

    if (support.touch && typeof e.touches !== 'undefined' && e.touches.length !== 1) {
      return;
    }

    dir = 'none';
    swipeType = 'none';
    dist = 0;
    startX = event.pageX;
    startY = event.pageY;
    startTime = new Date().getTime();

    if (isMouse) {
      isMouseDown = true; // поддерка мыши
    }
  };
  /**
   * Обработчик движения указателя
   * @param e {Event} - получает событие
   */


  var checkMove = function checkMove(e) {
    // Выход из функции, если мышь перестала быть активна во время движения
    if (isMouse && !isMouseDown) {
      return;
    }

    var event = eventsUnify(e);
    distX = event.pageX - startX;
    distY = event.pageY - startY;

    if (Math.abs(distX) > Math.abs(distY)) {
      dir = distX < 0 ? 'left' : 'right';
    } else {
      dir = distY < 0 ? 'up' : 'down';
    }
  };
  /**
   * Обработчик окончания касания указателем
   * @param e {Event} - получает событие.
   */


  var checkEnd = function checkEnd(e) {
    // Выход из функции и сброс проверки нажатия мыши
    if (isMouse && !isMouseDown) {
      isMouseDown = false;
      return;
    }

    var endTime = new Date().getTime();
    var time = endTime - startTime; // Проверка времени жеста

    if (time >= defaultSettings.minTime && time <= defaultSettings.maxTime) {
      if (Math.abs(distX) >= defaultSettings.minDist && Math.abs(distY) <= defaultSettings.maxDist) {
        swipeType = dir; // определение типа свайпа как "left" или "right"
      } else if (Math.abs(distY) >= defaultSettings.minDist && Math.abs(distX) <= defaultSettings.maxDist) {
        swipeType = dir; // Определение типа свайпа как "top" или "down"
      }
    } // опредление пройденной указателем дистанции


    dist = dir === 'left' || dir === 'right' ? Math.abs(distX) : Math.abs(distY); // Генерация кастомного события swipe

    if (swipeType !== 'none' && dist >= defaultSettings.minDist) {
      var swipeEvent = new CustomEvent('swipe', {
        bubbles: true,
        cancelable: true,
        detail: {
          full: e,
          // Полное событие Event
          dir: swipeType,
          // Направление свайпа
          dist: dist,
          // Дистанция свайпа
          time: time // Время, потраченное на свайп

        }
      });
      el.dispatchEvent(swipeEvent);
    }
  }; // Добавление поддерживаемых событий


  var events = getSupportedEvents();

  if (support.pointer && !support.touch || events.type === 'mouse') {
    isMouse = true;
  } // Добавление обработчиков на элемент


  el.addEventListener(events.start, checkStart);
  el.addEventListener(events.move, checkMove);
  el.addEventListener(events.end, checkEnd);

  if (support.pointer && support.touch) {
    el.addEventListener('lostpointercapture', checkEnd);
  }
};

/***/ }),

/***/ "./src/js/modules/tooltip.js":
/*!***********************************!*\
  !*** ./src/js/modules/tooltip.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tooltip; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Component = /*#__PURE__*/function () {
  function Component(classDefinition, el, options) {
    _classCallCheck(this, Component);

    // Отображать ошибку, если el является валидным HTML элементом
    if (!(el instanceof Element)) {
      console.error(Error(el + ' is not an HTML Element'));
    } // Если существует, уничтожить и повторно инициализировать дочерний элемент


    var ins = classDefinition.getInstance(el);

    if (!!ins) {
      ins.destroy();
    }

    this.$el = el;
  }

  _createClass(Component, null, [{
    key: "init",
    value: function init(classDefinition, els, options) {
      var instances = null;

      if (els instanceof Element) {
        instances = new classDefinition(els, options);
      } else if (!!els && (els.jquery || els.cash || els instanceof NodeList)) {
        var instancesArr = [];

        for (var i = 0; i < els.length; i++) {
          instancesArr.push(new classDefinition(els[i], options));
        }

        instances = instancesArr;
      }

      return instances;
    }
  }]);

  return Component;
}();

var Tooltip = /*#__PURE__*/function (_Component) {
  _inherits(Tooltip, _Component);

  var _super = _createSuper(Tooltip);

  function Tooltip(el, options) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _super.call(this, Tooltip, el, options);
    _this.el = el;
    _this.tooltipEl = null;
    _this.isOpen = false;
    _this.isHovered = false;
    _this.isFocused = false;
    _this.options = Object.assign({
      margin: 5,
      transitionMove: 10,
      position: 'bottom',
      content: null,
      enterDelay: 200
    }, _this.getAttributeOption(), options);

    if (_this.options.content) {
      _this.createToolTip();

      _this.setupEventListener();
    }

    return _this;
  }

  _createClass(Tooltip, [{
    key: "createToolTip",
    value: function createToolTip() {
      var tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      this.tooltipEl = tooltip;
      var tooltipContent = document.createElement('div');
      tooltipContent.classList.add('tooltip__content');
      tooltipContent.innerHTML = this.options.content;
      tooltip.append(tooltipContent);
      document.body.append(tooltip);
    }
  }, {
    key: "getAttributeOption",
    value: function getAttributeOption() {
      var attributeOptions = {};
      var tooltipTextOption = this.el.getAttribute('data-tooltip');
      var positionOption = this.el.getAttribute('data-position');

      if (tooltipTextOption) {
        attributeOptions.content = tooltipTextOption;
      }

      if (positionOption) {
        attributeOptions.position = positionOption;
      }

      return attributeOptions;
    }
  }, {
    key: "updateTooltipContent",
    value: function updateTooltipContent() {
      this.tooltipEl.querySelector('.tooltip__content').innerHTML = this.options.content;
    }
  }, {
    key: "show",
    value: function show() {
      this.settingPosition();
      this.tooltipEl.style.visibility = 'visible';
      this.tooltipEl.style.transform = "translate(".concat(this.xMove, "px, ").concat(this.yMove, "px)");
      this.tooltipEl.style.opacity = 1;
      this.tooltipEl.style.transition = "opacity ".concat(this.options.enterDelay / 1000, "s ease-in, transform ").concat(this.options.enterDelay / 1000, "s ease-in");
    }
  }, {
    key: "hide",
    value: function hide() {
      this.tooltipEl.style.transform = 'translate(0px, 0px)';
      this.tooltipEl.style.opacity = 0;
      this.tooltipEl.style.transition = "opacity ".concat(this.options.enterDelay / 1000, "s ease-in, transform ").concat(this.options.enterDelay / 1000, "s ease-in");
    }
  }, {
    key: "setupEventListener",
    value: function setupEventListener() {
      this.handleMouseEnterBind = this.handleMouseenter.bind(this);
      this.handleMouseLeaveBind = this.handleMouseleave.bind(this);
      this.handleFocusBind = this.handleFocus.bind(this);
      this.handleBlurBind = this.handleBlur.bind(this);
      this.el.addEventListener('mouseenter', this.handleMouseEnterBind);
      this.el.addEventListener('mouseleave', this.handleMouseLeaveBind);
      this.el.addEventListener('focus', this.handleFocusBind);
      this.el.addEventListener('blur', this.handleBlurBind);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      this.el.removeEventListener('mouseenter', this.handleMouseEnterBind);
      this.el.removeEventListener('mouseleave', this.handleMouseLeaveBind);
      this.el.removeEventListener('focus', this.handleFocusBind);
      this.el.removeEventListener('blur', this.handleBlurBind);
    }
  }, {
    key: "handleMouseenter",
    value: function handleMouseenter() {
      this.isHovered = true;
      this.isOpen = true;
      this.open(false);
    }
  }, {
    key: "handleMouseleave",
    value: function handleMouseleave() {
      this.isHovered = false;
      this.isOpen = false;
      this.close();
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.isFocused = true;
      this.isOpen = true;
      this.open(false);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.isFocused = false;
      this.isOpen = false;
      this.close();
    }
  }, {
    key: "pageScrollTop",
    value: function pageScrollTop() {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
  }, {
    key: "pageScrollLeft",
    value: function pageScrollLeft() {
      return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    }
  }, {
    key: "settingPosition",
    value: function settingPosition() {
      var origin = this.el;
      var tooltip = this.tooltipEl;
      var originWidth = origin.offsetWidth;
      var originHeight = origin.offsetHeight;
      var tooltipWidth = tooltip.offsetWidth;
      var tooltipHeight = tooltip.offsetHeight;
      var margin = this.options.margin;
      var targetTop, targetLeft;
      var newCoords = null;
      this.xMove = 0, this.yMove = 0;
      targetTop = origin.getBoundingClientRect().top + this.pageScrollTop();
      targetLeft = origin.getBoundingClientRect().left + this.pageScrollLeft();

      if (this.options.position === 'top') {
        targetTop += -tooltipHeight - margin;
        targetLeft += originWidth / 2 - tooltipWidth / 2;
        this.yMove = -this.options.transitionMove;
      } else if (this.options.position === 'right') {
        targetTop += originHeight / 2 - tooltipHeight / 2;
        targetLeft += originWidth + margin;
        this.xMove = this.options.transitionMove;
      } else if (this.options.position === 'left') {
        targetTop += originHeight / 2 - tooltipHeight / 2;
        targetLeft += -tooltipWidth - margin;
        this.xMove = -this.options.transitionMove;
      } else {
        targetTop += originHeight + margin;
        targetLeft += originWidth / 2 - tooltipWidth / 2;
        this.yMove = this.options.transitionMove;
      }

      newCoords = this.repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
      tooltip.style.left = newCoords.x + 'px';
      tooltip.style.top = newCoords.y + 'px';
    }
  }, {
    key: "repositionWithinScreen",
    value: function repositionWithinScreen(x, y, width, height) {
      var scrollLeft = this.pageScrollLeft();
      var scrollTop = this.pageScrollTop();
      var newX = x - scrollLeft;
      var newY = y - scrollTop;
      var bound = {
        left: newX,
        top: newY,
        width: width,
        height: height
      };
      var offset = this.options.margin + this.options.transitionMove;
      var edges = this.checkWidthinContainer(document.body, bound, offset);

      if (edges.left) {
        newX = offset;
      } else if (edges.right) {
        newX -= newX + width - window.innerWidth;
      }

      if (edges.top) {
        newY = offset;
      } else if (edges.bottom) {
        newY -= newY + height - window.innerHeight;
      }

      return {
        x: newX + scrollLeft,
        y: newY + scrollTop
      };
    }
  }, {
    key: "checkWidthinContainer",
    value: function checkWidthinContainer(container, bounding, offset) {
      var edges = {
        top: false,
        right: false,
        bottom: false,
        left: false
      };
      var containerRect = container.getBoundingClientRect();
      var containerBottom = container === document.body ? Math.max(container.bottom, window.innerHeight) : containerRect.bottom;
      var scrollLeft = container.scrollLeft;
      var scrollTop = container.scrollTop;
      var scrolledX = bounding.left - scrollLeft;
      var scrolledY = bounding.top - scrollTop;

      if (scrolledX < containerRect.left + offset || scrolledX < offset) {
        edges.left = true;
      }

      if (scrolledX + bounding.width > containerRect.right - offset || scrolledX + bounding.width > window.innerWidth - offset) {
        edges.right = true;
      }

      if (scrolledY < containerRect.top + offset || scrolledY < offset) {
        edges.top = true;
      }

      if (scrolledY + bounding.height > containerBottom - offset || scrolledY + bounding.height > window.innerHeight - offset) {
        edges.bottom = true;
      }

      return edges;
    }
  }, {
    key: "open",
    value: function open(isManual) {
      isManual = isManual === undefined ? true : undefined;
      this.isOpen = true;
      this.position = this.options.position;
      this.updateTooltipContent();
      this.show();
    }
  }, {
    key: "close",
    value: function close() {
      this.isHovered = false;
      this.isFocused = false;
      this.isOpen = false;
      this.hide();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.tooltipEl) {
        this.tooltipEl.remove();
        this.removeEventListeners();
        this.el = undefined;
        console.log('el tooltip destoy');
      }
    }
  }], [{
    key: "init",
    value: function init(els, options) {
      return _get(_getPrototypeOf(Tooltip), "init", this).call(this, this, els, options);
    }
  }, {
    key: "getInstance",
    value: function getInstance(el) {
      var domElem = !!el.jquery ? el[0] : el;
      return domElem.My_Tooltip;
    }
  }]);

  return Tooltip;
}(Component);



/***/ }),

/***/ "./src/js/modules/uploadImg.js":
/*!*************************************!*\
  !*** ./src/js/modules/uploadImg.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Upload; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Upload = /*#__PURE__*/function () {
  function Upload(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Upload);

    this.input = this.setInputFile(selector);
    this.buttonOpen = null;
    this.buttonUpload = null;
    this.preview = null;
    this.files = [];
    this.default = {
      modeView: 'default',
      multi: false,
      accept: ['.png', '.jpg', '.jpeg', '.gif']
    };
    this.options = Object.assign(this.default, options);
    this.preview = this.createElement('div', ['preview']);

    if (this.input) {
      var _options$onUpload;

      if (this.options.modeView === 'default') {
        this.buttonOpen = this.createElement('button', ['button', 'button--primary'], 'Открыть');
        this.buttonUpload = this.createElement('button', ['button', 'button--upload'], 'Загрузить');
        this.buttonUpload.style.display = 'none';
        this.input.insertAdjacentElement('afterend', this.preview);
        this.input.insertAdjacentElement('afterend', this.buttonUpload);
        this.input.insertAdjacentElement('afterend', this.buttonOpen);
        this.buttonOpen.addEventListener('click', this.triggerInput.bind(this));
        this.buttonUpload.addEventListener('click', this.uploadHandler.bind(this));
      } else if (this.options.modeView === 'custom') {
        if (this.options.hasOwnProperty('previewPos') && this.options.previewPos.hasOwnProperty('selectorPos')) {
          this.positionElement(this.preview, this.options.previewPos.selectorPos, this.options.previewPos.pos);
        } else {
          this.input.insertAdjacentElement('afterend', this.preview);
        }

        if (this.options.hasOwnProperty('buttonOpen')) {
          if (this.options.buttonOpen.el instanceof HTMLElement) {
            this.buttonOpen = this.options.buttonOpen.el;
            this.buttonOpen.addEventListener('click', this.triggerInput.bind(this));
          }
        }

        if (this.options.hasOwnProperty('buttonDownLoad') && this.options.buttonDownLoad.hasOwnProperty('el')) {
          if (this.options.buttonDownLoad.el instanceof HTMLElement) {
            this.buttonUpload = this.options.buttonDownLoad.el;
            this.buttonUpload.style.display = 'none';
          }
        } else {
          this.buttonUpload = this.createElement('button', ['button', 'button--primary'], 'Загрузить');
          this.buttonUpload.style.display = 'none';
          var block = document.querySelector(this.options.buttonDownLoad.selectorPos);
          block && block.insertAdjacentElement(this.options.buttonDownLoad.pos, this.buttonUpload);
        }

        this.buttonUpload.addEventListener('click', this.uploadHandler.bind(this));
      }

      this.onUpload = (_options$onUpload = options.onUpload) !== null && _options$onUpload !== void 0 ? _options$onUpload : function () {};

      if (this.options.multi) {
        this.input.setAttribute('multiple', true);
      }

      if (this.options.accept && Array.isArray(this.options.accept)) {
        this.input.setAttribute('accept', this.options.accept.join(', '));
      }

      this.input.addEventListener('change', this.changeHandler.bind(this));
      this.preview.addEventListener('click', this.removePreview.bind(this));
    }
  }

  _createClass(Upload, [{
    key: "bytesToSize",
    value: function bytesToSize(bytes) {
      var k = 1024;
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      if (!bytes) {
        return '0 Byte';
      }

      var i = +Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round(bytes / Math.pow(k, i)) + ' ' + sizes[i];
    }
  }, {
    key: "positionElement",
    value: function positionElement(el, selectorPos, position) {
      var element = document.querySelector(selectorPos);

      if (element) {
        element.insertAdjacentElement(position, el);
      }
    }
  }, {
    key: "triggerInput",
    value: function triggerInput() {
      this.input.click();
    }
  }, {
    key: "changeHandler",
    value: function changeHandler(event) {
      if (!event.target.files.length) {
        return;
      }

      this.files = Array.from(event.target.files);
      this.preview.innerHTML = '';
      this.buttonUpload.style.display = 'inline-block';
      this.renderPreview(this.preview, this.files);
    }
  }, {
    key: "renderPreview",
    value: function renderPreview(preview, files) {
      var _this = this;

      files.forEach(function (file) {
        if (!file.type.match('image')) {
          return;
        }

        var reader = new FileReader();

        reader.onloadstart = function (event) {
          preview.insertAdjacentHTML('afterbegin', "\n          <div class=\"preview__image\">\n            <div class=\"preloader\">\n              <div class=\"preloader__inner preloader__inner--line-1\"></div>  \n              <div class=\"preloader__inner preloader__inner--line-2\"></div>  \n              <div class=\"preloader__inner preloader__inner--line-3\"></div> \n            </div>\n          </div>\n        ");
        };

        reader.onloadend = function (event) {
          var loader = document.querySelector('.preloader');
          var parent = loader.parentNode;
          loader.remove();
          parent.remove();
        };

        reader.onload = function (event) {
          var src = event.target.result;
          preview.insertAdjacentHTML('afterbegin', "\n          <div class=\"preview__image\">\n            <div class=\"preview__remove\" data-name=\"".concat(file.name, "\">&times;</div>\n            <img src=\"").concat(src, "\" alt=\"").concat(file.name, "\">\n            <div class=\"preview__info\">\n              <span>").concat(file.name, "</span>\n              <span>").concat(_this.bytesToSize(file.size), "</span>\n            </div>\n          </div>\n        "));
        };

        reader.readAsDataURL(file);
      });
    }
    /**
     * 
     * @param {Object} options
     * @argument options {
     *  bytesTranferred - количество переданных байтов
     *  totalBytes - общее количество переданных байтов
     * }
     */

  }, {
    key: "progressLoadToServer",
    value: function progressLoadToServer(options) {
      var percentage = (options.bytesTransferred / options.totalBytes * 100).toFixed(0) + '%';
      var previewInfo = this.preview.querySelectorAll('.preview__info');
      var fileIndex = options.index;
      var progressLine = previewInfo[fileIndex].querySelector('.preview__info-progress');
      progressLine.textContent = percentage;
      progressLine.style.width = percentage;
    }
  }, {
    key: "clearPreview",
    value: function clearPreview(el) {
      el.style.transform = 'translateY(0)';
      el.innerHTML = "<div class=\"preview__info-progress\"></div>";
    }
  }, {
    key: "uploadHandler",
    value: function uploadHandler() {
      this.preview.querySelectorAll('.preview__remove').forEach(function (e) {
        return e.remove();
      });
      var previewInfo = this.preview.querySelectorAll('.preview__info');
      previewInfo.forEach(this.clearPreview);
      this.onUpload(this.files);
    }
  }, {
    key: "removePreview",
    value: function removePreview(event) {
      if (!event.target.dataset.name) {
        return;
      }

      var name = event.target.dataset.name;
      this.files = this.files.filter(function (file) {
        return file.name !== name;
      });

      if (!this.files.length) {
        this.buttonUpload.style.display = 'none';
      }

      var block = this.preview.querySelector("[data-name=\"".concat(name, "\"]")).closest('.preview__image');
      block.classList.add('removing');
      setTimeout(function () {
        return block.remove();
      }, 300);
    }
  }, {
    key: "setInputFile",
    value: function setInputFile(selector) {
      return document.querySelector(selector);
    }
  }, {
    key: "createElement",
    value: function createElement(tag) {
      var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var content = arguments.length > 2 ? arguments[2] : undefined;
      var node = document.createElement(tag);

      if (classes.length) {
        var _node$classList;

        (_node$classList = node.classList).add.apply(_node$classList, _toConsumableArray(classes));
      }

      if (content) {
        node.textContent = content;
      }

      return node;
    }
  }]);

  return Upload;
}();



/***/ })

/******/ });
//# sourceMappingURL=index.js.map