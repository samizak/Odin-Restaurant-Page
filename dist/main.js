/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Niconne-Regular.ttf */ \"./src/assets/fonts/Niconne-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/background.avif */ \"./src/assets/images/background.avif\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n  font-family: Niconne;\r\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n:root {\r\n  --bg-cover-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center center fixed;\r\n  background-size: cover;\r\n\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 16px;\r\n  color: white;\r\n}\r\n\r\nheader {\r\n  min-height: 10vh;\r\n  padding: 0 5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: var(--bg-cover-color);\r\n}\r\n\r\n.logo {\r\n  font-family: Niconne, sans-serif;\r\n  font-size: 3rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.navbar {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\nmain {\r\n  min-height: 86vh;\r\n  padding: 2rem 10rem;\r\n  text-align: center;\r\n  display: grid;\r\n  place-content: center;\r\n  gap: 1rem;\r\n  background-color: var(--bg-cover-color);\r\n}\r\n\r\nmain p {\r\n  font-family: Niconne, sans-serif;\r\n  font-size: 2rem;\r\n}\r\n\r\nmain h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\nmain h3 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.home-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.home-btn button {\r\n  padding: 0.7rem 1.5rem;\r\n  font-size: 1rem;\r\n  width: 12rem;\r\n  font-weight: bold;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  outline: none;\r\n  background: transparent;\r\n  transition: 300ms;\r\n}\r\n\r\n.home-btn #menuBtn {\r\n  background-color: #ff9000;\r\n  border: 2px solid #ff9000;\r\n  color: white;\r\n}\r\n\r\n.home-btn #menuBtn:hover {\r\n  background-color: black;\r\n  color: #ff9000;\r\n}\r\n\r\n.home-btn #contactBtn {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  border: 2px solid white;\r\n  color: white;\r\n}\r\n\r\n.home-btn #contactBtn:hover {\r\n  background-color: black;\r\n}\r\n\r\n.navbar .header-menu-item {\r\n  font-weight: 500px;\r\n  letter-spacing: 0.15em;\r\n  margin: 0 15px;\r\n  position: relative;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  transition: 0.6s;\r\n  height: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.header-menu-item {\r\n  padding: 15px 20px;\r\n}\r\n\r\n.header-menu-item::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: block;\r\n  width: 100%;\r\n  height: 2px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #ff9000;\r\n  transform: scaleX(0);\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.header-menu-item:hover::before,\r\n.selected.header-menu-item:before {\r\n  transform: scaleX(1);\r\n}\r\n\r\n#contact-us {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#address {\r\n  grid-area: address;\r\n  padding: 2rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8rem;\r\n}\r\n#contactForm {\r\n  padding: 5rem 2rem;\r\n  grid-area: form;\r\n  display: grid;\r\n}\r\n\r\n#address,\r\n#contactForm {\r\n  background-color: var(--bg-cover-color);\r\n}\r\n\r\nlabel {\r\n  min-width: 4rem;\r\n  text-align: right;\r\n  grid-area: label;\r\n}\r\ninput {\r\n  height: 2rem;\r\n}\r\ninput,\r\ntextarea {\r\n  grid-area: field;\r\n  padding: 1rem 1rem;\r\n  outline: none;\r\n  border-radius: 3px;\r\n}\r\n\r\n.contact-us-title {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.form-field {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.form-field input,\r\ntextarea {\r\n  min-width: 300px;\r\n  max-width: 600px;\r\n}\r\n\r\n.form-submit-btn {\r\n  margin-top: 10px;\r\n}\r\n\r\n.form-submit-btn button {\r\n  width: 10rem;\r\n  padding: 8px 22px;\r\n  margin-left: 73px;\r\n  font-size: 1.6rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n\r\n  background-color: #ff9000;\r\n  border: 2px solid #ff9000;\r\n  color: white;\r\n}\r\n\r\n.form-submit-btn button:hover {\r\n  background-color: black;\r\n  color: #ff9000;\r\n}\r\n\r\n#contact-infos p {\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  background-color: var(--bg-cover-color);\r\n  font-size: 1.3rem;\r\n  padding: 15px;\r\n  position: static;\r\n  font-weight: bold;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\nsection {\r\n  min-height: 86vh;\r\n  padding: 2rem 10rem;\r\n  text-align: center;\r\n  display: grid;\r\n  place-content: center;\r\n  gap: 1rem;\r\n  background-color: var(--bg-cover-color);\r\n}\r\n\r\n.menu-title {\r\n  font-size: 4rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.menu-hr {\r\n  border: 1px solid #c59d5f;\r\n}\r\n\r\nhr {\r\n  width: 280px;\r\n  border: 2px solid #c59d5f;\r\n  margin: 24px auto;\r\n}\r\n\r\n.menu-item {\r\n  max-width: 600px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/css/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/createLogo.js":
/*!**************************************!*\
  !*** ./src/components/createLogo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createLogo)\n/* harmony export */ });\nfunction createLogo() {\r\n  const logo = document.createElement(\"h3\");\r\n  const logoFirstSpan = document.createElement(\"span\");\r\n  const logoSecondSpan = document.createElement(\"span\");\r\n\r\n  logoFirstSpan.textContent = \"Sami's \";\r\n  logoSecondSpan.textContent = \"Cooking\";\r\n\r\n  logo.setAttribute(\"class\", \"logo\");\r\n\r\n  logo.append(logoFirstSpan, logoSecondSpan);\r\n\r\n  return logo;\r\n}\r\n\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/components/createLogo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _section_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section/header */ \"./src/section/header.js\");\n/* harmony import */ var _section_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section/home */ \"./src/section/home.js\");\n/* harmony import */ var _section_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section/menu */ \"./src/section/menu.js\");\n/* harmony import */ var _section_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section/contact */ \"./src/section/contact.js\");\n/* harmony import */ var _section_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section/footer */ \"./src/section/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById(\"content\");\r\n\r\ncontent.append((0,_section_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_section_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), (0,_section_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\r\nconst menuItems = document.querySelectorAll(\".header-menu-item\");\r\n\r\nlet menuBtn = document.getElementById(\"menuBtn\");\r\nlet contactBtn = document.getElementById(\"contactBtn\");\r\n\r\nfunction setActiveMenu(newActive) {\r\n  const currentActive = document.getElementsByClassName(\"selected\");\r\n  if (newActive != currentActive) {\r\n    currentActive[0].classList.toggle(\"selected\");\r\n    newActive.classList.toggle(\"selected\");\r\n  }\r\n}\r\nmenuItems.forEach((menuItem) => {\r\n  menuItem.addEventListener(\"click\", (e) => {\r\n    setActiveMenu(e.target);\r\n\r\n    switch (e.target.textContent) {\r\n      case \"MENU\":\r\n        content.replaceChild((0,_section_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), content.childNodes[1]);\r\n        break;\r\n\r\n      case \"CONTACT\":\r\n        content.replaceChild((0,_section_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), content.childNodes[1]);\r\n        break;\r\n\r\n      default:\r\n        content.replaceChild((0,_section_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), content.childNodes[1]);\r\n    }\r\n  });\r\n});\r\n\r\nconsole.log(menuBtn);\r\n\r\nmenuBtn.addEventListener(\"click\", () => {\r\n  setActiveMenu(menuItems[1]);\r\n  content.replaceChild((0,_section_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), content.childNodes[1]);\r\n});\r\n\r\ncontactBtn.addEventListener(\"click\", () => {\r\n  setActiveMenu(menuItems[2]);\r\n  content.replaceChild((0,_section_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), content.childNodes[1]);\r\n});\r\n\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/index.js?");

/***/ }),

/***/ "./src/section/contact.js":
/*!********************************!*\
  !*** ./src/section/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContact)\n/* harmony export */ });\n/* harmony import */ var _components_createLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/createLogo */ \"./src/components/createLogo.js\");\n\r\n\r\nfunction createContact() {\r\n  const main = document.createElement(\"main\");\r\n  main.setAttribute(\"id\", \"contact-us\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.className = \"title\";\r\n  title.textContent = \"Get In Touch\";\r\n\r\n  const addressDiv = document.createElement(\"div\");\r\n  const form = document.createElement(\"form\");\r\n  form.setAttribute(\"method\", \"post\");\r\n\r\n  addressDiv.setAttribute(\"id\", \"address\");\r\n  form.setAttribute(\"id\", \"contactForm\");\r\n\r\n  const infos = document.createElement(\"div\");\r\n  infos.setAttribute(\"id\", \"contact-infos\");\r\n\r\n  const addressInfos = document.createElement(\"div\");\r\n  addressInfos.setAttribute(\"id\", \"address-infos\");\r\n  const addressLine1 = document.createElement(\"p\");\r\n  const addressLine2 = document.createElement(\"p\");\r\n  const addressLine3 = document.createElement(\"p\");\r\n  addressLine1.textContent = \"730 Manor Road\";\r\n  addressLine2.textContent = \"WC54 2VA\";\r\n  addressLine3.textContent = \"London\";\r\n  addressInfos.append(addressLine1, addressLine2, addressLine3);\r\n\r\n  const phoneInfos = document.createElement(\"div\");\r\n  phoneInfos.setAttribute(\"id\", \"phone-infos\");\r\n  const phoneLine1 = document.createElement(\"p\");\r\n  phoneLine1.textContent = \"+44 20 7946 0302\";\r\n  phoneInfos.append(phoneLine1);\r\n\r\n  infos.append(addressInfos, phoneInfos);\r\n\r\n  const contactUsTitle = document.createElement(\"h1\");\r\n  contactUsTitle.setAttribute(\"class\", \"contact-us-title\");\r\n  contactUsTitle.textContent = \"Contact us\";\r\n\r\n  const nameFormField = document.createElement(\"div\");\r\n  const emailFormField = document.createElement(\"div\");\r\n  const messageFormField = document.createElement(\"div\");\r\n  nameFormField.className = \"form-field\";\r\n  emailFormField.className = \"form-field\";\r\n  messageFormField.className = \"form-field\";\r\n\r\n  const submitBtnDiv = document.createElement(\"div\");\r\n  const submitBtn = document.createElement(\"button\");\r\n  submitBtn.setAttribute(\"type\", \"submit\");\r\n  submitBtn.textContent = \"Send\";\r\n\r\n  const nameLabel = document.createElement(\"label\");\r\n  const emailLabel = document.createElement(\"label\");\r\n  const messageLabel = document.createElement(\"label\");\r\n  nameLabel.setAttribute(\"for\", \"name\");\r\n  nameLabel.textContent = \"Name\";\r\n  emailLabel.setAttribute(\"for\", \"email\");\r\n  emailLabel.textContent = \"Email\";\r\n  messageLabel.setAttribute(\"for\", \"message\");\r\n  messageLabel.textContent = \"Message\";\r\n\r\n  const nameInput = document.createElement(\"input\");\r\n  nameInput.setAttribute(\"id\", \"name\");\r\n  nameInput.setAttribute(\"type\", \"text\");\r\n  nameInput.setAttribute(\"required\", \"required\");\r\n\r\n  const emailInput = document.createElement(\"input\");\r\n  emailInput.setAttribute(\"id\", \"email\");\r\n  emailInput.setAttribute(\"type\", \"email\");\r\n  emailInput.setAttribute(\"required\", \"required\");\r\n\r\n  const messageTextarea = document.createElement(\"textarea\");\r\n  messageTextarea.setAttribute(\"id\", \"message\");\r\n  messageTextarea.setAttribute(\"type\", \"textarea\");\r\n  messageTextarea.setAttribute(\"required\", \"required\");\r\n\r\n  nameFormField.append(nameLabel, nameInput);\r\n  emailFormField.append(emailLabel, emailInput);\r\n  messageFormField.append(messageLabel, messageTextarea);\r\n\r\n  submitBtnDiv.setAttribute(\"class\", \"form-submit-btn\");\r\n  submitBtnDiv.append(submitBtn);\r\n\r\n  form.append(contactUsTitle, nameFormField, emailFormField, messageFormField, submitBtnDiv);\r\n\r\n  addressDiv.append((0,_components_createLogo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), infos);\r\n  main.append(addressDiv, form);\r\n\r\n  return main;\r\n}\r\n\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/section/contact.js?");

/***/ }),

/***/ "./src/section/footer.js":
/*!*******************************!*\
  !*** ./src/section/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createFooter)\n/* harmony export */ });\nfunction createFooter() {\r\n  const footer = document.createElement(\"footer\");\r\n  const footerText = document.createElement(\"p\");\r\n\r\n  const curYear = new Date().getFullYear();\r\n  footerText.textContent = `Copyright © ${curYear} samizak`;\r\n\r\n  footer.append(footerText);\r\n\r\n  return footer;\r\n}\r\n\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/section/footer.js?");

/***/ }),

/***/ "./src/section/header.js":
/*!*******************************!*\
  !*** ./src/section/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _components_createLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/createLogo */ \"./src/components/createLogo.js\");\n\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement(\"header\");\r\n\r\n  const menu = document.createElement(\"ul\");\r\n\r\n  const menuHome_li = document.createElement(\"li\");\r\n  const menuOurMenu_li = document.createElement(\"li\");\r\n  const menuContact_li = document.createElement(\"li\");\r\n\r\n  const menuHome = document.createElement(\"a\");\r\n  const menuOurMenu = document.createElement(\"a\");\r\n  const menuContact = document.createElement(\"a\");\r\n\r\n  menuHome.textContent = \"HOME\";\r\n  menuOurMenu.textContent = \"MENU\";\r\n  menuContact.textContent = \"CONTACT\";\r\n\r\n  menu.setAttribute(\"class\", \"navbar\");\r\n  menuHome.classList.add(\"header-menu-item\");\r\n  menuHome.classList.add(\"selected\");\r\n  menuOurMenu.classList.add(\"header-menu-item\");\r\n  menuContact.classList.add(\"header-menu-item\");\r\n\r\n  menuHome_li.append(menuHome);\r\n  menuOurMenu_li.append(menuOurMenu);\r\n  menuContact_li.append(menuContact);\r\n\r\n  menu.append(menuHome_li, menuOurMenu_li, menuContact_li);\r\n  header.append((0,_components_createLogo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), menu);\r\n\r\n  return header;\r\n}\r\n\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/section/header.js?");

/***/ }),

/***/ "./src/section/home.js":
/*!*****************************!*\
  !*** ./src/section/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\r\n  const main = document.createElement(\"main\");\r\n  const pWelcome = document.createElement(\"p\");\r\n  const h1 = document.createElement(\"h1\");\r\n  const h3 = document.createElement(\"h3\");\r\n  const homeButtons = document.createElement(\"div\");\r\n  const btnOurMenu = document.createElement(\"button\");\r\n  const btnGetInTouch = document.createElement(\"button\");\r\n\r\n  pWelcome.textContent = \"Welcome to Sami's Restaurant\";\r\n  h1.textContent = \"Eat healthy and Natural Food\";\r\n  h3.innerHTML = `Sami's Cooking is a restaurant, bar and coffee roastery located on\r\n    Ivory Coast. <br />We have awesome recipes and the most talented chefs in town.`;\r\n\r\n  homeButtons.setAttribute(\"class\", \"home-btn\");\r\n  btnOurMenu.textContent = \"MENU\";\r\n  btnOurMenu.setAttribute(\"id\", \"menuBtn\");\r\n  btnGetInTouch.textContent = \"GET IN TOUCH\";\r\n  btnGetInTouch.setAttribute(\"id\", \"contactBtn\");\r\n  homeButtons.append(btnOurMenu, btnGetInTouch);\r\n\r\n  main.append(pWelcome, h1, h3, homeButtons);\r\n\r\n  return main;\r\n}\r\n\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/section/home.js?");

/***/ }),

/***/ "./src/section/menu.js":
/*!*****************************!*\
  !*** ./src/section/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\r\n  const menuSection = document.createElement(\"section\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.className = \"menu-title\";\r\n  title.textContent = \"Menu\";\r\n\r\n  const lineBreak1 = document.createElement(\"hr\");\r\n  const lineBreak2 = document.createElement(\"hr\");\r\n  const lineBreak3 = document.createElement(\"hr\");\r\n  const lineBreak4 = document.createElement(\"hr\");\r\n\r\n  lineBreak2.setAttribute(\"class\", \"menu-hr\");\r\n  lineBreak3.setAttribute(\"class\", \"menu-hr\");\r\n  lineBreak4.setAttribute(\"class\", \"menu-hr\");\r\n\r\n  const item1 = document.createElement(\"div\");\r\n  const item2 = document.createElement(\"div\");\r\n  const item3 = document.createElement(\"div\");\r\n\r\n  item1.setAttribute(\"class\", \"menu-item\");\r\n  item2.setAttribute(\"class\", \"menu-item\");\r\n  item3.setAttribute(\"class\", \"menu-item\");\r\n\r\n  const item1_title = document.createElement(\"h2\");\r\n  const item2_title = document.createElement(\"h2\");\r\n  const item3_title = document.createElement(\"h2\");\r\n\r\n  item1_title.textContent = \"Item 1\";\r\n  item2_title.textContent = \"Item 2\";\r\n  item3_title.textContent = \"Item 3\";\r\n\r\n  const item1_description = document.createElement(\"p\");\r\n  const item2_description = document.createElement(\"p\");\r\n  const item3_description = document.createElement(\"p\");\r\n\r\n  item1_description.textContent =\r\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet\";\r\n  item2_description.textContent =\r\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet\";\r\n  item3_description.textContent =\r\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet\";\r\n\r\n  item1.append(item1_title, item1_description);\r\n  item2.append(item2_title, item2_description);\r\n  item3.append(item3_title, item3_description);\r\n\r\n  menuSection.append(title, lineBreak1, item1, lineBreak2, item2, lineBreak3, item3, lineBreak4);\r\n\r\n  return menuSection;\r\n}\r\n\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/section/menu.js?");

/***/ }),

/***/ "./src/assets/fonts/Niconne-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Niconne-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"679eb669af97c36d86a6.ttf\";\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/assets/fonts/Niconne-Regular.ttf?");

/***/ }),

/***/ "./src/assets/images/background.avif":
/*!*******************************************!*\
  !*** ./src/assets/images/background.avif ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d434731b04aa2f9c0c3b.avif\";\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/assets/images/background.avif?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;