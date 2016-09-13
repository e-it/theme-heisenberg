/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1)
	__vue_script__ = __webpack_require__(5)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/node-theme.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./node-theme.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./node-theme.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./node-theme.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nh3 {\n\tfont-weight: bold;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    section: {
	        label: 'Theme',
	        priority: 90
	    },

	    props: ['node']

	};

	window.Site.components['node-theme'] = module.exports;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"uk-form-horizontal\">\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-pos-title-hide\" class=\"uk-form-label\">{{ 'Headline' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-width-large uk-form-controls-text\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.title_hide\"> {{'Hide headline'|trans}}</label>\n            </div>\n        </div>\n        \n        <div class=\"uk-form-row\">\n            <label for=\"form-pos-title-transform\" class=\"uk-form-label\"></label>\n            <div class=\"uk-form-controls uk-form-width-large uk-form-controls-text\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.title_transform\"> {{'Transform headline to h3 style'|trans}}</label>\n            </div>\n        </div>\n\n<hr />\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-alignment\" class=\"uk-form-label\">{{ 'Inhalt' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-width-large uk-form-controls-text\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.alignment\"> {{ 'Centered content' | trans}}</label>\n            </div>\n        </div>\n\n<hr />\n\t\t\n\t    <div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin>\n\t        <div data-uk-margin>\n\t            <h3 class=\"uk-margin-remove\">{{ 'Top Widgets' | trans }}</h3>\n\t        </div>\n\t    </div>\n<hr />\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-pos-top-bg-overrite\" class=\"uk-form-label\">{{ 'Background Image' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-width-small\">\n\t\t\t\t<label><input-image :source.sync=\"node.theme.pos_top_bg_overrite\"></input-image></label>\n            </div>\n        </div>\n\n<hr />\n\t\t\n\t    <div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin>\n\t        <div data-uk-margin>\n\t            <h3 class=\"uk-margin-remove\">{{ 'Bottom Widgets' | trans }}</h3>\n\t        </div>\n\t    </div>\n<hr />\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-pos-btm-bg-overrite\" class=\"uk-form-label\">{{ 'Background Image' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-width-small\">\n\t\t\t\t<label><input-image :source.sync=\"node.theme.pos_btm_bg_overrite\"></input-image></label>\n            </div>\n        </div>\n\n<hr />\n\t\t\n\t    <div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin>\n\t        <div data-uk-margin>\n\t            <h3 class=\"uk-margin-remove\">{{ 'Header Options' | trans }}</h3>\n\t        </div>\n\t    </div>\n\n<hr />\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-header-area\" class=\"uk-form-label\"></label>\n            <div class=\"uk-form-controls\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.header_area\"> {{ 'Activate Header Area' | trans}}</label>\n            </div>\n        </div>\n\n<hr />\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-header-img\" class=\"uk-form-label\">{{ 'Background Image' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-width-small\">\n\t\t\t\t<label><input-image :source.sync=\"node.theme.header_img\"></input-image></label>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-header-parallex\" class=\"uk-form-label\"></label>\n            <div class=\"uk-form-controls\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.header_parallex\"> {{ 'Parallex effect' | trans}}</label>\n            </div>\n        </div>\n\n<hr />\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-clr-overlay\" class=\"uk-form-label\">{{ 'Color Overlay' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <label><input type=\"color\" v-model=\"node.theme.header_clr_overlay\"> {{ 'Choose your color' | trans}}</label>\n            </div>\n        </div>\n\t\n        <div class=\"uk-form-row\">\n            <label for=\"form-theme-clr-overlay-trans\" class=\"uk-form-label\"></label>\n            <div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t<label>\n\t\t\t\t\t<select id=\"form-theme-clr-overlay-trans\" v-model=\"node.theme.header_clr_overlay_trans\">\n\t\t\t\t\t\t<option value=\"1\">{{ '1' }}</option>\n\t\t\t\t\t\t<option value=\"0.9\">{{ '0.9' }}</option>\n\t\t\t\t\t\t<option value=\"0.8\">{{ '0.8' }}</option>\n\t\t\t\t\t\t<option value=\"0.7\">{{ '0.7' }}</option>\n\t\t\t\t\t\t<option value=\"0.6\">{{ '0.6' }}</option>\n\t\t\t\t\t\t<option value=\"0.5\">{{ '0.5' }}</option>\n\t\t\t\t\t\t<option value=\"0.4\">{{ '0.4' }}</option>\n\t\t\t\t\t\t<option value=\"0.3\">{{ '0.3' }}</option>\n\t\t\t\t\t\t<option value=\"0.2\">{{ '0.2' }}</option>\n\t\t\t\t\t\t<option value=\"0.1\">{{ '0.1' }}</option>\n\t\t\t\t\t\t<option value=\"0\">{{ '0' }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t{{ 'Transparency' | trans }}\n\t\t\t\t</label>\n            </div>\n        </div>\n\n<hr />\n        \n        <div class=\"uk-form-row\">\n            <label for=\"form-header-full-height\" class=\"uk-form-label\">{{'Header Height'|trans}}</label>\n            <div class=\"uk-form-controls uk-form-width-large uk-form-controls-text\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.header_full_height\"> {{'Full Height'|trans}}</label>\n            </div>\n        </div>\n        \n        <div class=\"uk-form-row\">\n            <label for=\"form-header-height\" class=\"uk-form-label\"></label>\n            <div class=\"uk-form-controls uk-form-width-large uk-form-controls-text\">\n                <label><input type=\"text\" v-model=\"node.theme.header_height\"> {{ 'Header height (px)' | trans}}</label>\n            </div>\n        </div>\n\n<hr />\n        \n        <div class=\"uk-form-row\">\n            <label for=\"form-header-headline-1\" class=\"uk-form-label\">{{'Headline'|trans}}</label>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"text\" class=\"uk-form-width-large\" v-model=\"node.theme.header_headline_1\"> {{'Headline 1'|trans}}</label>\n            </div>\n        </div>\n        \n        <div class=\"uk-form-row\">\n            <label for=\"form-header-headline-2\" class=\"uk-form-label\"></label>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"text\" class=\"uk-form-width-large\" v-model=\"node.theme.header_headline_2\"> {{ 'Headline 2' | trans}}</label>\n            </div>\n        </div>\n\t\n        <div class=\"uk-form-row\">\n            <label for=\"form-theme-header-align\" class=\"uk-form-label\"></label>\n            <div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t<label>\n\t\t\t\t\t<select id=\"form-theme-header-align\" v-model=\"node.theme.header_headline_align\">\n\t\t\t\t\t\t<option value=\"center\">{{ 'Center' | trans }}</option>\n\t\t\t\t\t\t<option value=\"left\">{{ 'Left' | trans }}</option>\n\t\t\t\t\t\t<option value=\"right\">{{ 'Right' | trans }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t{{ 'Ausrichtung' | trans }}\n\t\t\t\t</label>\n            </div>\n        </div>\n        \n<hr />\n\n</div>\n";

/***/ }
/******/ ]);