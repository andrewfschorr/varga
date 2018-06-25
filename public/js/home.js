/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"home": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./resources/client/home/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/client/components/header/index.js":
/*!*****************************************************!*\
  !*** ./resources/client/components/header/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            isOpen: false
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'toggle',
        value: function toggle() {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"],
                    { color: 'light', light: true, expand: 'md' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"],
                        { href: '/' },
                        'LocalOtter'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], { onClick: this.toggle }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"],
                        { isOpen: this.state.isOpen, navbar: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"],
                            { className: 'ml-auto', navbar: true },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledDropdown"],
                                { nav: true, inNavbar: true },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"],
                                    { nav: true, caret: true },
                                    DATA_BS.user.name
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"],
                                    { right: true },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
                                        {
                                            className: 'dropdown-item',
                                            activeClassName: 'active',
                                            to: '/home/account' },
                                        'Account Settings'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], { divider: true }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"],
                                        {
                                            tag: 'a',
                                            onClick: function onClick(e) {
                                                e.preventDefault();
                                                document.getElementById('logout-form').submit();
                                            } },
                                        'Logout'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        'form',
                                        {
                                            id: 'logout-form',
                                            action: '/logout',
                                            method: 'POST',
                                            style: { display: 'none' } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {
                                            type: 'hidden',
                                            name: '_token',
                                            value: DATA_BS.csrfToken
                                        })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./resources/client/home/account/index.js":
/*!************************************************!*\
  !*** ./resources/client/home/account/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Account = function (_Component) {
    _inherits(Account, _Component);

    function Account() {
        _classCallCheck(this, Account);

        return _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).apply(this, arguments));
    }

    _createClass(Account, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "col-sm-9" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-header" },
                        "Account Settings"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-body" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "form",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "form-group" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { htmlFor: "inputEmail" },
                                    "Email"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "email", className: "form-control", id: "email" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                { type: "submit", className: "btn btn-primary" },
                                "Change Email"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "form",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "form-group" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { htmlFor: "oldPassword" },
                                    "Old Password"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    type: "password",
                                    className: "form-control",
                                    id: "oldPassword",
                                    placeholder: "Old Password"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "form-group" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { htmlFor: "newPassword1" },
                                    "New Password"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    type: "password",
                                    className: "form-control",
                                    id: "newPassword1",
                                    placeholder: "New Password"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "form-group" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { htmlFor: "newPassword2" },
                                    "Confirm New Password"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    type: "password",
                                    className: "form-control",
                                    id: "newPassword2",
                                    placeholder: "Confirm New Password"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                { type: "submit", className: "btn btn-primary" },
                                "Change Password"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Account;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "./resources/client/home/add-review/index.js":
/*!***************************************************!*\
  !*** ./resources/client/home/add-review/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-stars'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.scss */ "./resources/client/home/add-review/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// https://github.com/n49/react-stars




var AddReview = function (_Component) {
    _inherits(AddReview, _Component);

    function AddReview() {
        _classCallCheck(this, AddReview);

        return _possibleConstructorReturn(this, (AddReview.__proto__ || Object.getPrototypeOf(AddReview)).apply(this, arguments));
    }

    _createClass(AddReview, [{
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'col-sm-9' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'card' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'card-header' },
                        'Add Review'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'card-body' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'form',
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'div',
                                { className: 'form-row' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'div',
                                    { className: 'form-group col-md-6' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        'label',
                                        { htmlFor: 'inputPlaceName' },
                                        'Place Name'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {
                                        type: 'text',
                                        className: 'form-control',
                                        id: 'inputPlaceName',
                                        placeholder: 'Palace of Versailles'
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'div',
                                    { className: 'form-group col-md-6' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        'label',
                                        { htmlFor: 'inputCity' },
                                        'City'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        'select',
                                        { id: 'inputCity', className: 'form-control' },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            'option',
                                            { defaultValue: true },
                                            'Choose...'
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            'option',
                                            null,
                                            'New York'
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            'option',
                                            null,
                                            'Barcelona'
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            'option',
                                            null,
                                            'Paris'
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            'option',
                                            null,
                                            'Seoul'
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'div',
                                { className: 'form-group' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'label',
                                    { htmlFor: 'aboutTextArea' },
                                    'Your review'
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('textarea', { className: 'form-control', id: 'aboutTextArea', rows: '3' }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'small',
                                    { id: 'aboutHelpBlock', className: 'form-text text-muted' },
                                    'What did you think? Why should travellers check this place out?'
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'div',
                                { className: 'form-group' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'p',
                                    null,
                                    'Rating'
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-stars'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                    count: 5,
                                    onChange: function onChange(a, b, c) {
                                        console.log(a, b, c);
                                    },
                                    size: 56,
                                    color2: '#ffd700'
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'button',
                                { type: 'submit', className: 'btn btn-primary' },
                                'Add'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'button',
                                { type: 'submit', className: 'btn btn-danger ml-2' },
                                'Cancel'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddReview;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddReview);

/***/ }),

/***/ "./resources/client/home/add-review/styles/index.scss":
/*!************************************************************!*\
  !*** ./resources/client/home/add-review/styles/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/client/home/index.js":
/*!****************************************!*\
  !*** ./resources/client/home/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/header */ "./resources/client/components/header/index.js");
/* harmony import */ var _side_nav_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-nav-bar */ "./resources/client/home/side-nav-bar/index.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile */ "./resources/client/home/profile/index.js");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account */ "./resources/client/home/account/index.js");
/* harmony import */ var _add_review__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-review */ "./resources/client/home/add-review/index.js");
/* harmony import */ var _no_match__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./no-match */ "./resources/client/home/no-match/index.js");











if (false) {}
var App = function App() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"],
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_header__WEBPACK_IMPORTED_MODULE_3__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'container pt-5 pb-5' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'row' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_side_nav_bar__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"],
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: '/home/profile', component: _profile__WEBPACK_IMPORTED_MODULE_5__["default"] }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: '/home/account', component: _account__WEBPACK_IMPORTED_MODULE_6__["default"] }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: '/home/add-review', component: _add_review__WEBPACK_IMPORTED_MODULE_7__["default"] }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { component: _no_match__WEBPACK_IMPORTED_MODULE_8__["default"] })
                    )
                )
            )
        )
    );
};

var Name = function Name(_ref) {
    var match = _ref.match;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'col-sm-9' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'p',
            null,
            match.params.page
        )
    );
};

// App.propTypes = {};
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./resources/client/home/no-match/index.js":
/*!*************************************************!*\
  !*** ./resources/client/home/no-match/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var NoMatch = function NoMatch() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'p',
            null,
            'ruh ruh...'
        )
    );
};

/* harmony default export */ __webpack_exports__["default"] = (NoMatch);

/***/ }),

/***/ "./resources/client/home/profile/index.js":
/*!************************************************!*\
  !*** ./resources/client/home/profile/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Profile = function (_Component) {
    _inherits(Profile, _Component);

    function Profile() {
        _classCallCheck(this, Profile);

        return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
    }

    _createClass(Profile, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "col-sm-9" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-header" },
                        "Profile"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-body" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "form",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "form-group" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { htmlFor: "profilePhotoUpload" },
                                    "ProfilePhoto"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "input-group mb-3" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "input-group-prepend" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            { className: "input-group-text" },
                                            "Upload"
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "custom-file" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                            type: "file",
                                            className: "custom-file-input",
                                            id: "profilePhotoUpload"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "label",
                                            {
                                                className: "custom-file-label",
                                                htmlFor: "profilePhotoUpload" },
                                            "Choose file"
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "form-group" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { htmlFor: "inputName" },
                                    "Username"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "text", className: "form-control", id: "name" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "small",
                                    { id: "nameHelpBlock", className: "form-text text-muted" },
                                    "This is the name that will be displayed on your reviews."
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "form-group" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { htmlFor: "aboutTextArea" },
                                    "About me"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", { className: "form-control", id: "aboutTextArea", rows: "3" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "small",
                                    { id: "aboutHelpBlock", className: "form-text text-muted" },
                                    "Don't be shy, 3-5 sentences about you. Your interests and expertise."
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                { type: "submit", className: "btn btn-primary" },
                                "Save"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Profile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./resources/client/home/side-nav-bar/index.js":
/*!*****************************************************!*\
  !*** ./resources/client/home/side-nav-bar/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var client_utils_svg_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/utils/svg-injector */ "./resources/client/utils/svg-injector.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/index.scss */ "./resources/client/home/side-nav-bar/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SideNavBar = function (_Component) {
    _inherits(SideNavBar, _Component);

    function SideNavBar() {
        _classCallCheck(this, SideNavBar);

        return _possibleConstructorReturn(this, (SideNavBar.__proto__ || Object.getPrototypeOf(SideNavBar)).apply(this, arguments));
    }

    _createClass(SideNavBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            Object(client_utils_svg_injector__WEBPACK_IMPORTED_MODULE_2__["default"])('.iconic-sprite');
        }
    }, {
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'col-sm-3' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    {
                        className: 'nav flex-column nav-pills',
                        id: 'v-pills-tab',
                        role: 'tablist',
                        'aria-orientation': 'vertical' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
                        { className: 'nav-link', activeClassName: 'active', to: '/home/profile' },
                        'Profile'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: 'dropdown-divider' }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'resources-client-home-side-nav-bar-styles-___index__reviews___hzqs2' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'h5',
                            { className: 'pt-3 pb-1' },
                            'Your Reviews'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'p',
                            null,
                            'No reviews yet, add your first one.'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                            { to: '/home/add-review', href: '/home/add-review' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'button',
                                { type: 'button', className: 'btn btn-info' },
                                'Add a review',
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', {
                                    src: '/icons/sprite.svg',
                                    className: 'iconic-sprite',
                                    style: { display: 'none' }
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'svg',
                                    { viewBox: '0 0 8 8', className: 'icon resources-client-home-side-nav-bar-styles-___index__icon___tPFmC' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { xlinkHref: '#plus' })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SideNavBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

SideNavBar.propTypes = {};

/* harmony default export */ __webpack_exports__["default"] = (SideNavBar);

/***/ }),

/***/ "./resources/client/home/side-nav-bar/styles/index.scss":
/*!**************************************************************!*\
  !*** ./resources/client/home/side-nav-bar/styles/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"reviews":"resources-client-home-side-nav-bar-styles-___index__reviews___hzqs2","icon":"resources-client-home-side-nav-bar-styles-___index__icon___tPFmC"};

/***/ }),

/***/ "./resources/client/utils/svg-injector.js":
/*!************************************************!*\
  !*** ./resources/client/utils/svg-injector.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return svgInjector; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'svg-injector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function svgInjector(iconClassName) {
    var mySVGsToInject = document.querySelectorAll(iconClassName);
    !(function webpackMissingModule() { var e = new Error("Cannot find module 'svg-injector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(mySVGsToInject);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaG9tZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvY2xpZW50L2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9jbGllbnQvaG9tZS9hY2NvdW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9jbGllbnQvaG9tZS9hZGQtcmV2aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9jbGllbnQvaG9tZS9hZGQtcmV2aWV3L3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9jbGllbnQvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvY2xpZW50L2hvbWUvbm8tbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2NsaWVudC9ob21lL3Byb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2NsaWVudC9ob21lL3NpZGUtbmF2LWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvY2xpZW50L2hvbWUvc2lkZS1uYXYtYmFyL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9jbGllbnQvdXRpbHMvc3ZnLWluamVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiaG9tZVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3Jlc291cmNlcy9jbGllbnQvaG9tZS9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2TGluayBhcyBSb3V0ZXJOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBDb2xsYXBzZSwgTmF2YmFyLCBOYXZiYXJUb2dnbGVyLCBOYXZiYXJCcmFuZCwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rLCBVbmNvbnRyb2xsZWREcm9wZG93biwgRHJvcGRvd25Ub2dnbGUsIERyb3Bkb3duTWVudSwgRHJvcGRvd25JdGVtIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbnZhciBIZWFkZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhIZWFkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZWFkZXIpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChIZWFkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihIZWFkZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhIZWFkZXIsIFt7XG4gICAgICAgIGtleTogJ3RvZ2dsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIE5hdmJhcixcbiAgICAgICAgICAgICAgICAgICAgeyBjb2xvcjogJ2xpZ2h0JywgbGlnaHQ6IHRydWUsIGV4cGFuZDogJ21kJyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgTmF2YmFyQnJhbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGhyZWY6ICcvJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0xvY2FsT3R0ZXInXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2YmFyVG9nZ2xlciwgeyBvbkNsaWNrOiB0aGlzLnRvZ2dsZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbGxhcHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBpc09wZW46IHRoaXMuc3RhdGUuaXNPcGVuLCBuYXZiYXI6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmF2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbWwtYXV0bycsIG5hdmJhcjogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuY29udHJvbGxlZERyb3Bkb3duLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hdjogdHJ1ZSwgaW5OYXZiYXI6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duVG9nZ2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYXY6IHRydWUsIGNhcmV0OiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEQVRBX0JTLnVzZXIubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25NZW51LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByaWdodDogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXJOYXZMaW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZHJvcGRvd24taXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZTogJ2FjdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAnL2hvbWUvYWNjb3VudCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjb3VudCBTZXR0aW5ncydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bkb3duSXRlbSwgeyBkaXZpZGVyOiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93bkl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb3V0LWZvcm0nKS5zdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMb2dvdXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2xvZ291dC1mb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnL2xvZ291dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ190b2tlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBEQVRBX0JTLmNzcmZUb2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEhlYWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxudmFyIEFjY291bnQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhBY2NvdW50LCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEFjY291bnQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY2NvdW50KTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFjY291bnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBY2NvdW50KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEFjY291bnQsIFt7XG4gICAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwiY29sLXNtLTlcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBcImNhcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBcImNhcmQtaGVhZGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQWNjb3VudCBTZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwiY2FyZC1ib2R5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaHRtbEZvcjogXCJpbnB1dEVtYWlsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImVtYWlsXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgaWQ6IFwiZW1haWxcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDaGFuZ2UgRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHJcIiwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGh0bWxGb3I6IFwib2xkUGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPbGQgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwib2xkUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk9sZCBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaHRtbEZvcjogXCJuZXdQYXNzd29yZDFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOZXcgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibmV3UGFzc3dvcmQxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJOZXcgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGh0bWxGb3I6IFwibmV3UGFzc3dvcmQyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29uZmlybSBOZXcgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibmV3UGFzc3dvcmQyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDb25maXJtIE5ldyBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4gYnRuLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNoYW5nZSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBBY2NvdW50O1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50OyIsInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uNDkvcmVhY3Qtc3RhcnNcbmltcG9ydCBSZWFjdFN0YXJzIGZyb20gJ3JlYWN0LXN0YXJzJztcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxudmFyIEFkZFJldmlldyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEFkZFJldmlldywgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBBZGRSZXZpZXcoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBZGRSZXZpZXcpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQWRkUmV2aWV3Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQWRkUmV2aWV3KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEFkZFJldmlldywgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLXNtLTknIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY2FyZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjYXJkLWhlYWRlcicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdBZGQgUmV2aWV3J1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NhcmQtYm9keScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Zvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZm9ybS1yb3cnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZm9ybS1ncm91cCBjb2wtbWQtNicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGh0bWxGb3I6ICdpbnB1dFBsYWNlTmFtZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUGxhY2UgTmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZm9ybS1jb250cm9sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2lucHV0UGxhY2VOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BhbGFjZSBvZiBWZXJzYWlsbGVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdmb3JtLWdyb3VwIGNvbC1tZC02JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaHRtbEZvcjogJ2lucHV0Q2l0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2l0eSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQ6ICdpbnB1dENpdHknLCBjbGFzc05hbWU6ICdmb3JtLWNvbnRyb2wnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGVmYXVsdFZhbHVlOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDaG9vc2UuLi4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05ldyBZb3JrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdCYXJjZWxvbmEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1BhcmlzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTZW91bCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2Zvcm0tZ3JvdXAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBodG1sRm9yOiAnYWJvdXRUZXh0QXJlYScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdZb3VyIHJldmlldydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCB7IGNsYXNzTmFtZTogJ2Zvcm0tY29udHJvbCcsIGlkOiAnYWJvdXRUZXh0QXJlYScsIHJvd3M6ICczJyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzbWFsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiAnYWJvdXRIZWxwQmxvY2snLCBjbGFzc05hbWU6ICdmb3JtLXRleHQgdGV4dC1tdXRlZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdXaGF0IGRpZCB5b3UgdGhpbms/IFdoeSBzaG91bGQgdHJhdmVsbGVycyBjaGVjayB0aGlzIHBsYWNlIG91dD8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2Zvcm0tZ3JvdXAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1JhdGluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdFN0YXJzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShhLCBiLCBjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYSwgYiwgYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogNTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjI6ICcjZmZkNzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdHlwZTogJ3N1Ym1pdCcsIGNsYXNzTmFtZTogJ2J0biBidG4tcHJpbWFyeScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FkZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHR5cGU6ICdzdWJtaXQnLCBjbGFzc05hbWU6ICdidG4gYnRuLWRhbmdlciBtbC0yJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2FuY2VsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQWRkUmV2aWV3O1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBBZGRSZXZpZXc7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFJlZGlyZWN0LCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgU2lkZU5hdkJhciBmcm9tICcuL3NpZGUtbmF2LWJhcic7XG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL3Byb2ZpbGUnO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9hY2NvdW50JztcbmltcG9ydCBBZGRSZXZpZXcgZnJvbSAnLi9hZGQtcmV2aWV3JztcbmltcG9ydCBOb01hdGNoIGZyb20gJy4vbm8tbWF0Y2gnO1xuXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG52YXIgQXBwID0gZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBSb3V0ZXIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29udGFpbmVyIHB0LTUgcGItNScgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdyb3cnIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2lkZU5hdkJhciwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBTd2l0Y2gsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogJy9ob21lL3Byb2ZpbGUnLCBjb21wb25lbnQ6IFByb2ZpbGUgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiAnL2hvbWUvYWNjb3VudCcsIGNvbXBvbmVudDogQWNjb3VudCB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6ICcvaG9tZS9hZGQtcmV2aWV3JywgY29tcG9uZW50OiBBZGRSZXZpZXcgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGNvbXBvbmVudDogTm9NYXRjaCB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbnZhciBOYW1lID0gZnVuY3Rpb24gTmFtZShfcmVmKSB7XG4gICAgdmFyIG1hdGNoID0gX3JlZi5tYXRjaDtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLXNtLTknIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAncCcsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbWF0Y2gucGFyYW1zLnBhZ2VcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG4vLyBBcHAucHJvcFR5cGVzID0ge307XG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgTm9NYXRjaCA9IGZ1bmN0aW9uIE5vTWF0Y2goKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3AnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICdydWggcnVoLi4uJ1xuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vTWF0Y2g7IiwidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG52YXIgUHJvZmlsZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFByb2ZpbGUsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb2ZpbGUpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHJvZmlsZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFByb2ZpbGUpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUHJvZmlsZSwgW3tcbiAgICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJjb2wtc20tOVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwiY2FyZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwiY2FyZC1oZWFkZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQcm9maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJjYXJkLWJvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBodG1sRm9yOiBcInByb2ZpbGVQaG90b1VwbG9hZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlByb2ZpbGVQaG90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXAgbWItM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBcImlucHV0LWdyb3VwLXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVwbG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJjdXN0b20tZmlsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJjdXN0b20tZmlsZS1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJwcm9maWxlUGhvdG9VcGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImN1c3RvbS1maWxlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yOiBcInByb2ZpbGVQaG90b1VwbG9hZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2hvb3NlIGZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGh0bWxGb3I6IFwiaW5wdXROYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBpZDogXCJuYW1lXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiBcIm5hbWVIZWxwQmxvY2tcIiwgY2xhc3NOYW1lOiBcImZvcm0tdGV4dCB0ZXh0LW11dGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhpcyBpcyB0aGUgbmFtZSB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIG9uIHlvdXIgcmV2aWV3cy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaHRtbEZvcjogXCJhYm91dFRleHRBcmVhXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWJvdXQgbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIGlkOiBcImFib3V0VGV4dEFyZWFcIiwgcm93czogXCIzXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiBcImFib3V0SGVscEJsb2NrXCIsIGNsYXNzTmFtZTogXCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRvbid0IGJlIHNoeSwgMy01IHNlbnRlbmNlcyBhYm91dCB5b3UuIFlvdXIgaW50ZXJlc3RzIGFuZCBleHBlcnRpc2UuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ0biBidG4tcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQcm9maWxlO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyIsInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmssIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdmdJbmplY3RvciBmcm9tICdjbGllbnQvdXRpbHMvc3ZnLWluamVjdG9yJztcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxudmFyIFNpZGVOYXZCYXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhTaWRlTmF2QmFyLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFNpZGVOYXZCYXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTaWRlTmF2QmFyKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNpZGVOYXZCYXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTaWRlTmF2QmFyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFNpZGVOYXZCYXIsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgc3ZnSW5qZWN0b3IoJy5pY29uaWMtc3ByaXRlJyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC1zbS0zJyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICduYXYgZmxleC1jb2x1bW4gbmF2LXBpbGxzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAndi1waWxscy10YWInLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogJ3RhYmxpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtb3JpZW50YXRpb24nOiAndmVydGljYWwnIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBOYXZMaW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICduYXYtbGluaycsIGFjdGl2ZUNsYXNzTmFtZTogJ2FjdGl2ZScsIHRvOiAnL2hvbWUvcHJvZmlsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdQcm9maWxlJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ2Ryb3Bkb3duLWRpdmlkZXInIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3Jlc291cmNlcy1jbGllbnQtaG9tZS1zaWRlLW5hdi1iYXItc3R5bGVzLV9fX2luZGV4X19yZXZpZXdzX19faHpxczInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdoNScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdwdC0zIHBiLTEnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1lvdXIgUmV2aWV3cydcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdObyByZXZpZXdzIHlldCwgYWRkIHlvdXIgZmlyc3Qgb25lLidcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbmssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0bzogJy9ob21lL2FkZC1yZXZpZXcnLCBocmVmOiAnL2hvbWUvYWRkLXJldmlldycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiAnYnV0dG9uJywgY2xhc3NOYW1lOiAnYnRuIGJ0bi1pbmZvJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWRkIGEgcmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiAnL2ljb25zL3Nwcml0ZS5zdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnaWNvbmljLXNwcml0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2aWV3Qm94OiAnMCAwIDggOCcsIGNsYXNzTmFtZTogJ2ljb24gcmVzb3VyY2VzLWNsaWVudC1ob21lLXNpZGUtbmF2LWJhci1zdHlsZXMtX19faW5kZXhfX2ljb25fX190UEZtQycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VzZScsIHsgeGxpbmtIcmVmOiAnI3BsdXMnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNpZGVOYXZCYXI7XG59KENvbXBvbmVudCk7XG5cblNpZGVOYXZCYXIucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXZCYXI7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicmV2aWV3c1wiOlwicmVzb3VyY2VzLWNsaWVudC1ob21lLXNpZGUtbmF2LWJhci1zdHlsZXMtX19faW5kZXhfX3Jldmlld3NfX19oenFzMlwiLFwiaWNvblwiOlwicmVzb3VyY2VzLWNsaWVudC1ob21lLXNpZGUtbmF2LWJhci1zdHlsZXMtX19faW5kZXhfX2ljb25fX190UEZtQ1wifTsiLCJpbXBvcnQgU1ZHSW5qZWN0b3IgZnJvbSAnc3ZnLWluamVjdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ZnSW5qZWN0b3IoaWNvbkNsYXNzTmFtZSkge1xuICAgIHZhciBteVNWR3NUb0luamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaWNvbkNsYXNzTmFtZSk7XG4gICAgU1ZHSW5qZWN0b3IobXlTVkdzVG9JbmplY3QpO1xufSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDeEpBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxRkE7QUFDQTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=