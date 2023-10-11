"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-simple-snackbar"
var external_react_simple_snackbar_ = __webpack_require__(2510);
var external_react_simple_snackbar_default = /*#__PURE__*/__webpack_require__.n(external_react_simple_snackbar_);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/ScrollToTop.js




const ScrollToTop = ({
  showBelow
}) => {
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  (0,external_react_.useEffect)(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({
      top: 0,
      behavior: `smooth`
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: show && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "z-50 fixed rounded-sm bottom-6 right-6 w-8 h-8 flex items-center justify-center cursor-pointer transition-all opacity-80 hover:opacity-100 bg-primary",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-3xl text-accents_9",
        onClick: handleClick,
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "flaticon-up-arrows"
        })
      })
    })
  });
};

/* harmony default export */ const components_ScrollToTop = (ScrollToTop);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'






router_default().events.on('routeChangeStart', url => {
  // console.log(`Loading: ${url}`)
  external_nprogress_default().start();
});
router_default().events.on('routeChangeComplete', () => external_nprogress_default().done());
router_default().events.on('routeChangeError', () => external_nprogress_default().done());

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "mobile-web-app-capable",
        content: "yes"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_simple_snackbar_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_ScrollToTop, {
        showBelow: 300
      }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2510:
/***/ ((module) => {

module.exports = require("react-simple-snackbar");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5223));
module.exports = __webpack_exports__;

})();