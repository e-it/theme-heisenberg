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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(9)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/widget-theme.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(10)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./widget-theme.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 9:
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    section: {
	        label: 'Theme',
	        priority: 90
	    },

	    props: ['widget', 'config']

	};

	window.Widgets.components['theme'] = module.exports;

/***/ },

/***/ 10:
/***/ function(module, exports) {

	module.exports = "\n\n    <div class=\"uk-form-horizontal\">\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-theme-panel\" class=\"uk-form-label\">{{ 'Panel Style' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <select id=\"form-theme-panel\" class=\"uk-form-width-large\" v-model=\"widget.theme.panel\">\n                    <option value=\"\">{{ 'None' | trans }}</option>\n                    <option value=\"uk-panel-box\">{{ 'Box' | trans }}</option>\n                    <option value=\"uk-panel-box uk-panel-box-primary\">{{ 'Box Primary' | trans }}</option>\n                    <option value=\"uk-panel-box uk-panel-box-secondary\">{{ 'Box Secondary' | trans }}</option>\n                    <option value=\"uk-panel-header\">{{ 'Header' | trans }}</option>\n                </select>\n            </div>\n        </div>\n\n    </div>\n    \n<hr />\n\t\n\t<div class=\"uk-form-horizontal\">\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-widget-headline-hide\" class=\"uk-form-label\">{{ 'Headline' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"checkbox\" class=\"uk-form-width-large\" v-model=\"widget.theme.hide_headline\"> {{'Hide Headline'|trans}}</label>\n            </div>\n        </div>\n\n    </div>\n    \n<hr />\n\t\n\t<div class=\"uk-form-horizontal\">\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-widget-mobile-hide\" class=\"uk-form-label\">{{ 'Mobile' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"checkbox\" class=\"uk-form-width-large\" v-model=\"widget.theme.hide_mobile\"> {{'Hide Widget on Mobile'|trans}}</label>\n            </div>\n        </div>\n\n    </div>\n    \n<hr />\n\t\n\t<div class=\"uk-form-horizontal\">\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-widget-color-invert\" class=\"uk-form-label\">{{ 'Color' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"checkbox\" class=\"uk-form-width-large\" v-model=\"widget.theme.color_invert\"> {{'Invert Text Color'|trans}}</label>\n            </div>\n        </div>\n\n    </div>\n<hr />\n    <div class=\"uk-form-horizontal\">\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-widget-size\" class=\"uk-form-label\">{{ 'Widget Size' | trans }} <a class=\"\" data-uk-toggle=\"{target:'#widget-size'}\"><i class=\"uk-icon-info-circle\"></i></a></label>\n            <div class=\"uk-form-controls\">\n\t\t\t\t<label><input type=\"text\" v-model=\"widget.theme.widget_size\"></label>\n            </div>\n        </div>\n        <div id=\"widget-size\" class=\"uk-form-row uk-hidden\">\n\t\t\t<div class=\"uk-alert uk-alert-warning\">\n\t        \t<p>{{'Note: This only works if \"Widget Auto Size\" is disabled in the theme settings!'|trans}}</p>\n\t\t\t</div>\n\t        <div class=\"uk-alert\">\n\t        \t<p>{{'The grid supports 1, 2, 3, 4, 5, 6 and 10 unit divisions. This table gives you an overview of the classes that can be applied to units.'|trans}}</p>\n\t\t\t\t<div class=\"uk-overflow-container\">\n\t\t\t\t<table class=\"uk-table uk-text-nowrap\">\n\t\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t<th>Class</th>\n\t\t\t\t<th>Description</th>\n\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-1</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Fills 100% of the available width.</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-2</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Divides the grid into halves.</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-3</code>\n\t\t\t\tto\n\t\t\t\t<code>2-3</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Divides the grid into thirds.</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-4</code>\n\t\t\t\tto\n\t\t\t\t<code>3-4</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Divides the grid into fourths.</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-5</code>\n\t\t\t\tto\n\t\t\t\t<code>4-5</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Divides the grid into fifths.</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-6</code>\n\t\t\t\tto\n\t\t\t\t<code>5-6</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Divides the grid into sixths.</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-10</code>\n\t\t\t\tto\n\t\t\t\t<code>9-10</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Divides the grid into tenths.</td>\n\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t</div>\n\t        </div>\n\t    </div>\n    </div>\n    \n    <div class=\"uk-form-horizontal\">\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-widget-push-left\" class=\"uk-form-label\">{{ 'Widget Push Left' | trans }} <a class=\"\" data-uk-toggle=\"{target:'#widget-push-left'}\"><i class=\"uk-icon-info-circle\"></i></a></label>\n            <div class=\"uk-form-controls\">\n\t\t\t\t<label><input type=\"text\" v-model=\"widget.theme.widget_push\"></label>\n            </div>\n        </div>\n        <div id=\"widget-push-left\" class=\"uk-form-row uk-hidden\">\n\t\t\t<div class=\"uk-alert uk-alert-warning\">\n\t        \t<p>{{'Note: This only works if \"Widget Auto Size\" is disabled in the theme settings!'|trans}}</p>\n\t\t\t</div>\n\t        <div class=\"uk-alert\">\n\t        \t<p>{{‘The grid supports 1, 2, 3, 4, 5, 6 and 10 unit divisions. This table gives you an overview of the classes that can be applied to units.'|trans}}</p>\n\t\t\t\t<div class=\"uk-overflow-container\">\n\t\t\t\t<table class=\"uk-table uk-text-nowrap\">\n\t\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t<th>Class</th>\n\t\t\t\t<th>Description</th>\n\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-1</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Fills 100% of the available width.</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-2</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Divides the grid into halves.</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-3</code>\n\t\t\t\tto\n\t\t\t\t<code>2-3</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Divides the grid into thirds.</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-4</code>\n\t\t\t\tto\n\t\t\t\t<code>3-4</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Divides the grid into fourths.</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-5</code>\n\t\t\t\tto\n\t\t\t\t<code>4-5</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Divides the grid into fifths.</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-6</code>\n\t\t\t\tto\n\t\t\t\t<code>5-6</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Divides the grid into sixths.</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t<code>1-10</code>\n\t\t\t\tto\n\t\t\t\t<code>9-10</code>\n\t\t\t\t</td>\n\t\t\t\t<td>Divides the grid into tenths.</td>\n\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t</div>\n\t        </div>\n\t    </div>\n    \n    </div>\n\n";

/***/ }

/******/ });