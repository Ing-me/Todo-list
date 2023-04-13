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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before{\\n    margin: 0;\\n    box-sizing: border-box;\\n}\\n:root{\\n    --bg-color: #000000;\\n    --bg-color-light: #303030;\\n    --color: #186802;\\n    --color1: #23B812;\\n    --color-light: #006534;\\n    --font-size: 16px;\\n    --width: 100vw;\\n    --height: 100vh;\\n}\\n\\n#content{\\n    background: var(--bg-color);\\n    width: var(--width);\\n    color: var(--color1);\\n}\\n.header{\\n    font-size: 2.5rem;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 20px;\\n    border-bottom: 1px solid #186802;\\n    box-shadow: 0px 5px 5px 0px rgba(255, 255, 255, .5);\\n}\\n.header > img{\\n    width: 7%;\\n}\\n.main{\\n    width: 100vw;\\n    height: 79.1vh;\\n    display: grid;\\n    grid-template-areas: \\\"sidebar contents\\\";\\n    grid-template-columns: 10rem 3fr;\\n}\\n.sidebar{\\n    grid-area: sidebar;\\n    width: 10rem;\\n    border-right: 1px solid #186802;\\n    box-shadow: 5px 0px 5px 0px rgba(255, 255, 255, .5);\\n    padding-top: 20px;\\n}\\n.sidebar > div{\\n    font-size: 1.2rem;\\n    font-weight: 400;\\n    padding: 10px;\\n    color: #fff;\\n    background-color: #23B812;\\n    margin-bottom: 5px;\\n    cursor: pointer;\\n    display: flex;\\n}\\n.sidebar > div > img{\\n    margin-right: 10px;\\n}\\n\\n.contents{\\n    grid-area: contents;\\n    padding: 2rem;\\n    background-color: #fff;\\n    margin: 20px;\\n    border-radius: 10px;\\n}\\n\\n\\n.footer{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    font-size: 1.2rem;\\n    border-top: 2px solid #186802;\\n    box-shadow: 0px -5px 5px 0px rgba(255, 255, 255, .3);\\n    padding: 10px 0px;\\n}\\n.footer > div{\\n    margin-bottom: 5px;\\n}\\n.footer > div:last-of-type{\\n    margin-bottom: 0;\\n}\\n\\n#form-container{\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    backdrop-filter: blur(7px);\\n    display: none;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n    color: #db2777;\\n    font-size: 5rem;\\n    z-index: 1;\\n}\\n.form-todo{\\n    width: 30vw;\\n    display: flex;\\n    flex-direction: column;\\n    padding: 30px;\\n    background-color: #000000;\\n    border-radius: 15px;\\n    border: 1px solid red;\\n    opacity: .75;\\n}\\n.form-todo > input, select{\\n    margin-bottom: 10px;\\n    font-size: 1.2rem;\\n    opacity: .4;\\n    border-radius: 15px;\\n    border: none;\\n    padding-left: 10px;\\n    padding-right: 10px;\\n    height: 30px;\\n}\\n.form-todo > button{\\n    margin-top: 10px;\\n    font-size: 1.2rem;\\n    border-radius: 15px;\\n    border: none;\\n    height: 30px;\\n    opacity: .4;\\n    cursor: pointer;\\n}\\n.form-todo > button:hover{\\n    background-color: #23B812;\\n}\\n\\n@media (max-width: 800px){\\n    .sidebar{\\n        width: 3.5rem;\\n    }\\n    .sidebar > div{\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n    }\\n    .side-item{\\n        display: none;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/createElement.js\");\n\n\nfunction createContents(){\n    const contents = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('dic',null, 'contents');\n    contents.textContent = \"Mw se contents\"\n    return contents\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContents);\n\n//# sourceURL=webpack://todo-list/./src/content.js?");

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createElement(el, content, className){\n    const element = document.createElement(el);\n    element.textContent = content;\n    element.classList.add(className);\n\n    return element;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n//# sourceURL=webpack://todo-list/./src/createElement.js?");

/***/ }),

/***/ "./src/createSingleElement.js":
/*!************************************!*\
  !*** ./src/createSingleElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction createSingleElement(el, content){\n    const element = document.createElement(el);\n    element.textContent = content;\n\n    return element;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSingleElement);\n\n//# sourceURL=webpack://todo-list/./src/createSingleElement.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/createElement.js\");\n\n\nfunction createFooter(){\n    const footer = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'footer');\n    const div1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, null);\n    div1.textContent = \"Powered by meme123\";\n    const div2 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, null);\n    div2.textContent = \"KwenTIC 2023\";\n\n    footer.appendChild(div1);\n    footer.appendChild(div2);\n\n    return footer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n//# sourceURL=webpack://todo-list/./src/footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_todo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/todo.png */ \"./src/assets/todo.png\");\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElement.js */ \"./src/createElement.js\");\n/* harmony import */ var _assets_inbox_full_outline_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/inbox-full-outline.png */ \"./src/assets/inbox-full-outline.png\");\n/* harmony import */ var _assets_calendar_blank_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/calendar-blank.png */ \"./src/assets/calendar-blank.png\");\n/* harmony import */ var _assets_calendar_week_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/calendar-week.png */ \"./src/assets/calendar-week.png\");\n/* harmony import */ var _assets_plus_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/plus(1).png */ \"./src/assets/plus(1).png\");\n/* harmony import */ var _createSingleElement_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createSingleElement.js */ \"./src/createSingleElement.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _sideBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sideBar */ \"./src/sideBar.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction component() {\n    const element = document.querySelector('#content');\n    element.appendChild(createHeader());\n    element.appendChild(createteMain());\n    element.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"])());\n    \n  \n    return element;\n  }\n  \n  document.body.appendChild(component());\n\nfunction createHeader(){\n    const header = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', null, 'header');\n    const title = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', null, null);\n    title.textContent = \"Todo List\";\n\n    const img = new Image();\n    img.src = _assets_todo_png__WEBPACK_IMPORTED_MODULE_1__;\n    header.appendChild(img);\n    header.appendChild(title)\n\n    return header\n}\n\nfunction createteMain(){\n    const main = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', null, 'main');  \n    main.appendChild((0,_sideBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"])());\n    //main.appendChild(createContents())\n\n    return main;\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/sideBar.js":
/*!************************!*\
  !*** ./src/sideBar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/createElement.js\");\n/* harmony import */ var _assets_inbox_full_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/inbox-full-outline.png */ \"./src/assets/inbox-full-outline.png\");\n/* harmony import */ var _assets_calendar_blank_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/calendar-blank.png */ \"./src/assets/calendar-blank.png\");\n/* harmony import */ var _assets_calendar_week_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/calendar-week.png */ \"./src/assets/calendar-week.png\");\n/* harmony import */ var _assets_plus_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/plus(1).png */ \"./src/assets/plus(1).png\");\n/* harmony import */ var _assets_goal1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/goal1.png */ \"./src/assets/goal1.png\");\n/* harmony import */ var _assets_todaycal_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/todaycal.png */ \"./src/assets/todaycal.png\");\n/* harmony import */ var _createSingleElement_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createSingleElement.js */ \"./src/createSingleElement.js\");\n\n\n\n\n\n\n\n\n\nfunction createSidebar(){\n    const sidebar = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'sidebar');\n    const inbox = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'sidebar-link');\n    const today = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'sidebar-link');\n    const week = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'sidebar-link');\n    const project = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'sidebar-link');\n\n    project.addEventListener('click', () => {\n        const form = document.querySelector('#form-container');\n        form.style.display = \"flex\";\n    });\n   \n    const inb = new Image();\n    inb.src = _assets_inbox_full_outline_png__WEBPACK_IMPORTED_MODULE_1__;   \n    inbox.appendChild(inb);    \n    inbox.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'Inbox', 'side-item'));\n\n    const tod = new Image();\n    tod.src = _assets_calendar_blank_png__WEBPACK_IMPORTED_MODULE_2__;\n    today.appendChild(tod);\n    today.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'Today', 'side-item'))\n\n    const we = new Image();\n    we.src = _assets_calendar_week_png__WEBPACK_IMPORTED_MODULE_3__;\n    week.appendChild(we)\n    week.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'Week', 'side-item'));\n\n    const proj = new Image();\n    proj.src = _assets_goal1_png__WEBPACK_IMPORTED_MODULE_5__;\n    project.appendChild(proj)\n    project.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'Projects','side-item'))\n\n\n\n    sidebar.appendChild(inbox);\n    sidebar.appendChild(today);\n    sidebar.appendChild(week);\n    sidebar.appendChild(project)\n    return sidebar;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSidebar);\n\n//# sourceURL=webpack://todo-list/./src/sideBar.js?");

/***/ }),

/***/ "./src/assets/calendar-blank.png":
/*!***************************************!*\
  !*** ./src/assets/calendar-blank.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"104d2eb5b921e7a1e55d.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/calendar-blank.png?");

/***/ }),

/***/ "./src/assets/calendar-week.png":
/*!**************************************!*\
  !*** ./src/assets/calendar-week.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d9f0b8db3eb82e946251.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/calendar-week.png?");

/***/ }),

/***/ "./src/assets/goal1.png":
/*!******************************!*\
  !*** ./src/assets/goal1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c478222dad3dbf6f2761.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/goal1.png?");

/***/ }),

/***/ "./src/assets/inbox-full-outline.png":
/*!*******************************************!*\
  !*** ./src/assets/inbox-full-outline.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3acc2d426439d53e3c5a.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/inbox-full-outline.png?");

/***/ }),

/***/ "./src/assets/plus(1).png":
/*!********************************!*\
  !*** ./src/assets/plus(1).png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"42b01021349886df17ba.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/plus(1).png?");

/***/ }),

/***/ "./src/assets/todaycal.png":
/*!*********************************!*\
  !*** ./src/assets/todaycal.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f064b667cdf376dbe22b.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/todaycal.png?");

/***/ }),

/***/ "./src/assets/todo.png":
/*!*****************************!*\
  !*** ./src/assets/todo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b92ee1d19cbc802be9ed.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/todo.png?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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