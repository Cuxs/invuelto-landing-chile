webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Area3Component.js":
/*!**************************************!*\
  !*** ./components/Area3Component.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlogPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogPreview */ "./components/BlogPreview.js");
var _this = undefined,
    _jsxFileName = "/Users/mariano/Trabajo/Invuelto/invuelto-landing-chile/components/Area3Component.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var showImages = _ref.showImages;
  return __jsx("div", {
    className: "area3__container container",
    id: "academia-del-ahorro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 4
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, "Conoc\xE9 nuestra academia del ahorro")), __jsx("h3", {
    className: "mt-5 text-primary d-none d-sm-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, "Te ense\xF1amos c\xF3mo sacarle el"), __jsx("h3", {
    className: "text-primary mb-5 d-none d-sm-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, "m\xE1ximo provecho a tu plata."), __jsx("div", {
    className: "d-block d-md-flex justify-content-around mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "microlink__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_BlogPreview__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "https://blog.invuelto.cl/post/Cambiamos-tus-billetes-de-5-pesos-y-los-duplicamos",
    showImages: showImages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  })), __jsx("div", {
    className: "microlink__container d-none d-sm-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_BlogPreview__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "https://blog.invuelto.cl/post/3-lecciones-para-manejar-mi-dinero-que-aprendi-tarde",
    showImages: showImages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "microlink__container d-none d-sm-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_BlogPreview__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "https://blog.invuelto.cl/post/Cuanto-tengo-que-ahorrar-por-mes",
    showImages: showImages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }))));
});

/***/ }),

/***/ "./modules/constants.js":
/*!******************************!*\
  !*** ./modules/constants.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  API_URL: 'https://api-test.invuelto.cl'
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-waypoint */ "./node_modules/react-waypoint/es/index.js");
/* harmony import */ var react_easy_swipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js");
/* harmony import */ var react_easy_swipe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_easy_swipe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hotjar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hotjar */ "./node_modules/react-hotjar/index.js");
/* harmony import */ var react_hotjar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hotjar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Jumbotron__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Jumbotron */ "./components/Jumbotron.js");
/* harmony import */ var _components_IntroComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/IntroComponent */ "./components/IntroComponent.js");
/* harmony import */ var _components_HowToComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/HowToComponent */ "./components/HowToComponent.js");
/* harmony import */ var _components_Area1Component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Area1Component */ "./components/Area1Component.js");
/* harmony import */ var _components_Area2Component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Area2Component */ "./components/Area2Component.js");
/* harmony import */ var _components_Area3Component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Area3Component */ "./components/Area3Component.js");
/* harmony import */ var _components_SecurityComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SecurityComponent */ "./components/SecurityComponent.js");
/* harmony import */ var _components_PricingComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/PricingComponent */ "./components/PricingComponent.js");
/* harmony import */ var _components_FooterComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/FooterComponent */ "./components/FooterComponent.js");
var _this = undefined,
    _jsxFileName = "/Users/mariano/Trabajo/Invuelto/invuelto-landing-chile/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      group1 = _useState[0],
      toggleVisibilityGroup1 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      group2 = _useState2[0],
      toggleVisibilityGroup2 = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      group3 = _useState3[0],
      toggleVisibilityGroup3 = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      group4 = _useState4[0],
      toggleVisibilityGroup4 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      sideDrawerOpen = _useState5[0],
      toggleSideDrawer = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    react_hotjar__WEBPACK_IMPORTED_MODULE_3__["hotjar"].initialize(1063100, 6);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(react_easy_swipe__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onSwipeLeft: function onSwipeLeft() {
      return toggleSideDrawer(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Invuelto, tu alcanc\xEDa virtual",
    description: "Desarrollamos una herramienta con la que ahora s\xED vas a poder ahorrar, cuidamos tu plata de la inflaci\xF3n ya que tus ahorros generan intereses a tu favor. Vos eleg\xEDs el monto y la forma de ingresar dinero.",
    url: "www.invuelto.cl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: sideDrawerOpen,
    toggle: toggleSideDrawer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx(_components_Jumbotron__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }), __jsx(_components_IntroComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), __jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_1__["Waypoint"], {
    fireOnRapidScroll: false,
    onEnter: function onEnter() {
      return toggleVisibilityGroup2(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx(_components_Area1Component__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_1__["Waypoint"], {
    fireOnRapidScroll: false,
    onEnter: function onEnter() {
      return toggleVisibilityGroup2(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx("img", {
    className: "area2__spots",
    alt: "decoracion",
    src: "../static/images/multiple-spots.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_1__["Waypoint"], {
    fireOnRapidScroll: false,
    onEnter: function onEnter() {
      toggleVisibilityGroup2(true);
      toggleVisibilityGroup3(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx(_components_Area2Component__WEBPACK_IMPORTED_MODULE_11__["default"], {
    showImages: group2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx(_components_HowToComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    showImages: group2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_1__["Waypoint"], {
    fireOnRapidScroll: false,
    onEnter: function onEnter() {
      toggleVisibilityGroup2(true);
      toggleVisibilityGroup3(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_1__["Waypoint"], {
    fireOnRapidScroll: false,
    onEnter: function onEnter() {
      toggleVisibilityGroup2(true);
      toggleVisibilityGroup3(true);
      toggleVisibilityGroup4(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), __jsx(_components_Area3Component__WEBPACK_IMPORTED_MODULE_12__["default"], {
    showImages: group3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx(_components_SecurityComponent__WEBPACK_IMPORTED_MODULE_13__["default"], {
    showImages: group3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_1__["Waypoint"], {
    fireOnRapidScroll: false,
    onEnter: function onEnter() {
      toggleVisibilityGroup2(true);
      toggleVisibilityGroup3(true);
      toggleVisibilityGroup4(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }), __jsx(_components_PricingComponent__WEBPACK_IMPORTED_MODULE_14__["default"], {
    showImages: group4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }), __jsx(_components_FooterComponent__WEBPACK_IMPORTED_MODULE_15__["default"], {
    showImages: group4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0fb02b901e189a611075.hot-update.js.map