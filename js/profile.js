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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/clock.js":
/*!*********************************!*\
  !*** ./src/js/modules/clock.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var cardClockDate = document.querySelector('.card-clock__date');

function displayClock() {
  var canvas = document.querySelector('#canvas');
  var ctx = canvas.getContext('2d');
  ctx.canvas.width = 250;
  ctx.canvas.height = 280;
  ctx.strokeRect(0, 0, canvas.width, canvas.height); // Расчет координат центра и радиуса часов

  var radiusClock = canvas.width / 2 - 10;
  var xCenterClock = canvas.width / 2;
  var yCenterClock = canvas.height / 2; // Очистка canvas

  ctx.fillStyle = '#fff';
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Отрисовка контура часов

  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(xCenterClock, yCenterClock, radiusClock, 0, 2 * Math.PI, true);
  ctx.moveTo(xCenterClock, yCenterClock);
  ctx.stroke();
  ctx.closePath(); // Отрисовка рисок часов

  var radiusNum = radiusClock - 10;
  var radiusPoint = null;

  for (var tm = 0; tm < 60; tm++) {
    ctx.beginPath();

    if (tm % 5 == 0) {
      radiusPoint = 5;
    } else {
      radiusPoint = 2;
    }

    var xPointM = xCenterClock + radiusNum * Math.cos(-6 * tm * (Math.PI / 180) + Math.PI / 2);
    var yPointM = yCenterClock + radiusNum * Math.sin(-6 * tm * (Math.PI / 180) + Math.PI / 2);
    ctx.arc(xPointM, yPointM, radiusPoint, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.closePath();
  } // Отрисовка циферблата


  for (var th = 1; th <= 12; th++) {
    ctx.beginPath();
    ctx.font = 'bold 25px sans-serif';
    var xText = xCenterClock + (radiusNum - 30) * Math.cos(-30 * th * (Math.PI / 180) + Math.PI / 2);
    var yText = yCenterClock - (radiusNum - 30) * Math.sin(-30 * th * (Math.PI / 180) + Math.PI / 2);

    if (th <= 9) {
      ctx.strokeText(th, xText - 5, yText + 10);
    } else {
      ctx.strokeText(th, xText - 15, yText + 10);
    }

    ctx.stroke();
    ctx.closePath();
  } // Отрисовка стрелок часов


  var lengthSecond = radiusNum - 10;
  var lengthMinutes = radiusNum - 15;
  var lengthHours = lengthMinutes / 1.5;
  var clock = new Date();
  var tSec = 6 * clock.getSeconds();
  var tMin = 6 * (clock.getMinutes() + 1 / 60 * clock.getSeconds());
  var tHour = 30 * (clock.getHours() + 1 / 60 * clock.getMinutes());
  var daysWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  var dateString = "".concat(daysWeek[clock.getDay()], " ").concat(clock.toLocaleString());
  cardClockDate.textContent = dateString; // Рисуем секундную стрелку

  ctx.beginPath();
  ctx.strokeStyle = '#ff0000';
  ctx.moveTo(xCenterClock, yCenterClock);
  ctx.lineTo(xCenterClock + lengthSecond * Math.cos(Math.PI / 2 - tSec * (Math.PI / 180)), yCenterClock - lengthSecond * Math.sin(Math.PI / 2 - tSec * (Math.PI / 180)));
  ctx.stroke();
  ctx.closePath(); // Рисуем минутную стрелку

  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 3;
  ctx.moveTo(xCenterClock, yCenterClock);
  ctx.lineTo(xCenterClock + lengthMinutes * Math.cos(Math.PI / 2 - tMin * (Math.PI / 180)), yCenterClock - lengthMinutes * Math.sin(Math.PI / 2 - tMin * (Math.PI / 180)));
  ctx.stroke();
  ctx.closePath(); // Рисуем часовую стрелку

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.moveTo(xCenterClock, yCenterClock);
  ctx.lineTo(xCenterClock + lengthHours * Math.cos(Math.PI / 2 - tHour * (Math.PI / 180)), yCenterClock - lengthHours * Math.sin(Math.PI / 2 - tHour * (Math.PI / 180)));
  ctx.stroke();
  ctx.closePath(); // Рисуем центр часов

  ctx.beginPath();
  ctx.strokeStyle = '#000';
  ctx.fillStyle = '#fff';
  ctx.lineWidth = 3;
  ctx.arc(xCenterClock, yCenterClock, 5, 0, 2 * Math.PI, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  return;
}

window.setInterval(displayClock, 1000);

/***/ }),

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/clock */ "./src/js/modules/clock.js");
/* harmony import */ var _modules_clock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_clock__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=profile.js.map