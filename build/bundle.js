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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_gallery_items_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/gallery-items.js */ \"./src/js/gallery-items.js\");\n\n\nvar galleryRef = document.querySelector(\".js-gallery\");\nvar lightboxRef = document.querySelector(\".js-lightbox\");\nvar lightboxOverlay = document.querySelector(\".lightbox__overlay\");\nvar lightboxImageRef = document.querySelector(\".lightbox__image\");\nvar lightBoxCloseBtn = document.querySelector('[data-action=\"close-lightbox\"]');\nvar galleryLits = createListItem(_js_gallery_items_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ngalleryRef.insertAdjacentHTML('beforeend', galleryLits);\ngalleryRef.addEventListener(\"click\", onModalOpen);\nlightboxOverlay.addEventListener(\"click\", onCloseLightboxByClick);\nlightBoxCloseBtn.addEventListener(\"click\", onCloseModal);\n\nfunction createListItem(galleryItems) {\n  return galleryItems.map(function (_ref) {\n    var preview = _ref.preview,\n        original = _ref.original,\n        description = _ref.description;\n    return \"\\n    <li class=\\\"gallery__item\\\">\\n      <a class=\\\"gallery__link\\\" href=\\\"\".concat(original, \"\\\">\\n        <img class=\\\"gallery__image\\\"\\n          src=\\\"\").concat(preview, \"\\\" \\n          data-source=\\\"\").concat(original, \"\\\" \\n          alt=\\\"\").concat(description, \"\\\"/>\\n      </a>\\n    </li >\\n    \");\n  }).join(\"\");\n}\n\n;\n\nfunction onImageClick(event) {\n  event.preventDefault();\n  return event.target.dataset.source;\n}\n\nfunction onModalOpen(event) {\n  event.preventDefault();\n  window.addEventListener(\"keydown\", onCloseModalByEsc);\n  window.addEventListener(\"keydown\", onShowNextImage);\n  window.addEventListener(\"keydown\", onShowPreviousImage);\n\n  if (event.target.nodeName !== \"IMG\") {\n    return;\n  }\n\n  var currentActiveImage = document.querySelector(\".is-open\");\n\n  if (currentActiveImage) {\n    lightboxRef.classList.remove(\"is-open\");\n  }\n\n  lightboxRef.classList.add(\"is-open\");\n  onChangeLightboxImageUrl(event);\n}\n\nfunction onChangeLightboxImageUrl(event) {\n  if (lightboxRef.classList.contains(\"is-open\")) {\n    lightboxImageRef.src = onImageClick(event);\n    lightboxImageRef.alt = event.target.alt;\n  }\n}\n\nfunction getIndex() {\n  return _js_gallery_items_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findIndex(function (elem) {\n    return lightboxImageRef.src === elem.original;\n  });\n}\n\nfunction setLightboxImageRefAttribute(index) {\n  var nextImageSrc = _js_gallery_items_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][index].original;\n  var nextImageAlt = _js_gallery_items_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][index].description;\n  lightboxImageRef.setAttribute(\"src\", nextImageSrc);\n  lightboxImageRef.setAttribute(\"alt\", nextImageAlt);\n}\n\nfunction onShowNextImage(event) {\n  if (!(event.code === \"ArrowRight\")) {\n    return;\n  }\n\n  var currentImageIndex = getIndex();\n  currentImageIndex += 1;\n\n  if (currentImageIndex > _js_gallery_items_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length - 1) {\n    currentImageIndex = 0;\n  }\n\n  setLightboxImageRefAttribute(currentImageIndex);\n}\n\nfunction onShowPreviousImage(event) {\n  if (!(event.code === \"ArrowLeft\")) {\n    return;\n  }\n\n  var currentImageIndex = getIndex();\n\n  if (currentImageIndex === 0) {\n    currentImageIndex = _js_gallery_items_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length;\n  }\n\n  currentImageIndex -= 1;\n  setLightboxImageRefAttribute(currentImageIndex);\n}\n\nfunction onCloseModal() {\n  window.removeEventListener(\"keydown\", onCloseModalByEsc);\n  lightboxRef.classList.remove(\"is-open\");\n  onClearlightboxImageRef();\n}\n\nfunction onCloseModalByEsc(event) {\n  if (event.code === \"Escape\") {\n    onCloseModal();\n  }\n}\n\nfunction onCloseLightboxByClick(event) {\n  if (event.currentTarget === event.target) {\n    onCloseModal();\n  }\n}\n\nfunction onClearlightboxImageRef() {\n  lightboxImageRef.removeAttribute(\"src\");\n  lightboxImageRef.removeAttribute(\"alt\");\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/gallery-items.js":
/*!*********************************!*\
  !*** ./src/js/gallery-items.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  preview: \"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg\",\n  description: \"Hokkaido Flower\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg\",\n  description: \"Container Haulage Freight\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg\",\n  description: \"Aerial Beach View\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg\",\n  description: \"Flower Blooms\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg\",\n  description: \"Alpine Mountains\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg\",\n  description: \"Mountain Lake Sailing\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg\",\n  description: \"Alpine Spring Meadows\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg\",\n  description: \"Nature Landscape\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg\",\n  description: \"Lighthouse Coast Sea\"\n}]);\n\n//# sourceURL=webpack:///./src/js/gallery-items.js?");

/***/ })

/******/ });