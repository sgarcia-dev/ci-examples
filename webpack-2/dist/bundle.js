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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5f4f38d90f4cf1c30a57fd669771e295.jpg";

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
	sum,
	multiply
});

function sum(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_big_jpg__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_big_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_big_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_small_jpg__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_small_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_small_jpg__);



const image = document.createElement('img');
image.src = __WEBPACK_IMPORTED_MODULE_1__assets_small_jpg___default.a;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = __WEBPACK_IMPORTED_MODULE_0__assets_big_jpg___default.a;

document.body.appendChild(bigImage);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_calc_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_images_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_big_jpg__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_big_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_big_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_small_jpg__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_small_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_small_jpg__);


// CSS

// IMAGES



/***/ })
/******/ ]);