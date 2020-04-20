webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Toolbar/index.js":
/*!*************************************!*\
  !*** ./components/Toolbar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DrawerToggleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawerToggleButton */ "./components/Toolbar/DrawerToggleButton.js");
/* harmony import */ var _SecondaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SecondaryButton */ "./components/SecondaryButton.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SpecialButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SpecialButton */ "./components/SpecialButton.js");
var _this = undefined,
    _jsxFileName = "/Users/mariano/Trabajo/Invuelto/invuelto-landing-chile/components/Toolbar/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      color = _useState[0],
      setColor = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      logoColor = _useState2[0],
      setLogoColor = _useState2[1];

  var renderLogo = function renderLogo() {
    return logoColor ? __jsx("div", {
      className: "mt-3 toolbar__logo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "../static/images/logo-color.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    })) : __jsx("div", {
      className: "mt-3 toolbar__logo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "../static/images/logo-blanco.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener("scroll", function () {
      var isTop = window.scrollY < 100;

      if (isTop) {
        setColor('');
        setLogoColor(false);
      } else {
        setColor('white');
        setLogoColor(true);
      }
    });
    return function () {
      return document.removeEventListener("scroll", _this);
    };
  });
  return __jsx("header", {
    className: "toolbar ".concat(color),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "toolbar__toggle-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_DrawerToggleButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    click: props.drawerClickHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "toolbar__container-items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 14
    }
  }, renderLogo())), __jsx("div", {
    className: "spacer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "toolbar__items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, props.external ? __jsx("a", {
    href: "/index#tus-intereses-primero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "C\xF3mo funciona") : __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    activeClass: "side-drawer--active",
    to: "tus-intereses-primero",
    offset: -120,
    duration: 1000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "C\xF3mo funciona")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, props.external ? __jsx("a", {
    href: "/index#precios",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, "Precios") : __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    activeClass: "side-drawer--active",
    to: "precios",
    offset: -120,
    duration: 1000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Precios")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, props.external ? __jsx("a", {
    href: "/index#academia-del-ahorro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "Tips de ahorro") : __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    activeClass: "side-drawer--active",
    to: "academia-del-ahorro",
    offset: -120,
    duration: 1000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "Tips de ahorro"))), __jsx(_SpecialButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "toolbar__button-group1 ml-2",
    onClick: function onClick() {
      return window.location.assign('https://app.invuelto.com/login');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, "INGRESAR"), __jsx(_SecondaryButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "toolbar__button-group1 ml-2",
    onClick: function onClick() {
      return window.location.assign('https://app.invuelto.com/register');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, "Registrarme")), __jsx("div", {
    style: {
      marginRight: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_SpecialButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "toolbar__button-group2",
    onClick: function onClick() {
      return window.location.assign('https://app.invuelto.com/login');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 43
    }
  }, "Comenzar"))));
});

/***/ })

})
//# sourceMappingURL=index.js.de68e812a26a98f23f34.hot-update.js.map