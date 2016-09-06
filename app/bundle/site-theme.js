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
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/site-theme.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./site-theme.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 7:
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    section: {
	        label: 'Theme',
	        icon: 'pk-icon-large-brush',
	        priority: 15
	    },

	    data: function data() {
	        return _.extend({ config: {} }, window.$theme);
	    },

	    events: {

	        save: function save() {

	            this.$http.post('admin/system/settings/config', { name: this.name, config: this.config }).catch(function (res) {
	                this.$notify(res.data, 'danger');
	            });
	        }

	    }

	};

	window.Site.components['site-theme'] = module.exports;

/***/ },

/***/ 8:
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"uk-form-horizontal\">\n\t\n\t    <div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin>\n\t        <div data-uk-margin>\n\t            <h2 class=\"uk-margin-remove\">{{ 'Theme' | trans }}</h2>\n\t        </div>\n\t        <div data-uk-margin>\n\t            <button class=\"uk-button uk-button-primary\" type=\"submit\">{{ 'Save' | trans }}</button>\n\t        </div>\n\t    </div>\n\t\n\t        <div class=\"uk-form-row\">\n\t            <label for=\"form-theme-color\" class=\"uk-form-label\">{{ 'Theme Color' | trans }}</label>\n\t            <div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<select id=\"form-theme-color\" class=\"uk-form-width-large\" v-model=\"config.theme_color\">\n\t\t\t\t\t\t\t<option value=\"yellow\">{{ 'Yellow' | trans }}</option>\n\t\t\t\t\t\t\t<option value=\"blue\">{{ 'Blue' | trans }}</option>\n\t\t\t\t\t\t\t<option value=\"green\">{{ 'Green' | trans }}</option>\n\t\t\t\t\t\t\t<option value=\"red\">{{ 'Red' | trans }}</option>\n\t\t\t\t\t\t\t<option value=\"pink\">{{ 'Pink' | trans }}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</label>\n\t            </div>\n\t        </div>\n\t\n<hr />\n\t\n\t        <div class=\"uk-form-row\">\n\t            <label for=\"form-google-font\" class=\"uk-form-label\">{{ 'Google Font and Weights' | trans }}</label>\n\t            <div class=\"uk-form-controls\">\n\t\t\t\t\t<label><input type=\"text\" v-model=\"config.google_font\"><input type=\"text\" v-model=\"config.google_font_weight\"></label>\n\t            </div>\n\t            <div class=\"uk-alert\">\n\t            \t<p>Example: Roboto and 300,400,700</p>\n\t            </div>\n\t        </div>\n\t        \n<hr />\n\t\n\t        <div class=\"uk-form-row\">\n\t            <label for=\"form-navbar-mode\" class=\"uk-form-label\">{{ 'Navbar Mode' | trans }}</label>\n\t            <div class=\"uk-form-controls uk-form-width-large uk-form-controls-text\">\n\t                <label><input type=\"checkbox\" v-model=\"config.navbar_sticky\"> {{ 'Sticky Navigation' | trans }}</label>\n\t            </div>\n\t        </div>\n\t\n<hr />\n\t\n\t        <div class=\"uk-form-row\">\n\t            <label for=\"form-widget-auto-size\" class=\"uk-form-label\">{{ 'Widget Auto Size' | trans }}</label>\n\t            <div class=\"uk-form-controls uk-form-controls-text\">\n\t                <label><input class=\"uk-form-width-large\" type=\"checkbox\" v-model=\"config.widget_auto_size\"> {{ 'Widget Auto Size' | trans }}</label>\n\t            </div>\n\t\t\t\t<div class=\"uk-alert uk-alert-warning\">\n\t\t\t\t\t<p>Note: If you unset this option you have to set the size of each widget manually in the widget options!</p>\n\t\t\t\t</div>\n\t        </div>\n<hr />\n\t\n\t        <div class=\"uk-form-row\">\n\t            <label for=\"form-widget-copyright\" class=\"uk-form-label\">{{ 'Copyright' | trans }}</label>\n\t            <div class=\"uk-form-controls uk-form-width-large uk-form-controls-text\">\n\t                <label><input type=\"text\" v-model=\"config.copyright\"></label>\n\t            </div>\n\t        </div>\n<hr />\n\t\t\n\t    <div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin>\n\t        <div data-uk-margin>\n\t            <h2 class=\"uk-margin-remove\">{{ 'Top Positions' | trans }}</h2>\n\t        </div>\n\t    </div>\n\t    \n<hr />\n\t\n\t        <div class=\"uk-form-row\">\n\t            <label for=\"form-pos-top-bg\" class=\"uk-form-label\">{{ 'Background Image' | trans }}</label>\n\t            <div class=\"uk-form-controls uk-form-width-small\">\n\t\t\t\t\t<label><input-image :source.sync=\"config.pos_top_bg\"></input-image></label>\n\t            </div>\n\t        </div>\n\t\t\n<hr />\n\t\t\n\t\t        <div class=\"uk-form-row\">\n\t\t            <label for=\"form-pos-top-bg-clr\" class=\"uk-form-label\">{{ 'Background Color' | trans }}</label>\n\t\t            <div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t\t\t<label><input type=\"color\" v-model=\"config.pos_top_bg_clr\"></input>{{Choose Your Color | trans}}</label>\n\t\t            </div>\n\t\t        </div>\n\t\t\t\n<hr />\n\t\t\n\t    <div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin>\n\t        <div data-uk-margin>\n\t            <h2 class=\"uk-margin-remove\">{{ 'Bottom Positions' | trans }}</h2>\n\t        </div>\n\t    </div>\n<hr />\n\t\n\t        <div class=\"uk-form-row\">\n\t            <label for=\"form-pos-btm-bg\" class=\"uk-form-label\">{{ 'Background Image' | trans }}</label>\n\t            <div class=\"uk-form-controls uk-form-width-small\">\n\t\t\t\t\t<label><input-image :source.sync=\"config.pos_btm_bg\"></input-image></label>\n\t            </div>\n\t        </div>\n\t\n\t\t<hr />\n\t\n\t        <div class=\"uk-form-row\">\n\t            <label for=\"form-pos-btm-bg-clr\" class=\"uk-form-label\">{{ 'Background Color' | trans }}</label>\n\t            <div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t\t<label><input type=\"color\" v-model=\"config.pos_btm_bg_clr\"></input>{{Choose Your Color | trans}}</label>\n\t            </div>\n\t        </div>\n\t\n\t</div>\n";

/***/ }

/******/ });