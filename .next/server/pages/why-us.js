"use strict";
(() => {
var exports = {};
exports.id = 908;
exports.ids = [908];
exports.modules = {

/***/ 883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u2": () => (/* binding */ getAllPracticesCustomFields),
/* harmony export */   "up": () => (/* binding */ getAllSuperioritiesCustomFields)
/* harmony export */ });
/* unused harmony export getAllPractices */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function getAllPractices() {
  const practices = await axios.get('http://wpbackend.navisa.af/wp-json/wp/v2/praelegal-practices/?per_page=100').then(res => res.data).catch(err => {
    console.log(err);
  });
  return practices;
}
async function getAllPracticesCustomFields() {
  const practices = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://wpbackend.navisa.af/wp-json/wp/v2/praelegal-practices/?per_page=100&_fields[]=slug&_fields[]=acf').then(res => res.data).catch(err => {
    console.log(err);
  });
  return practices;
}
async function getAllSuperioritiesCustomFields() {
  const superiorities = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://wpbackend.navisa.af/wp-json/wp/v2/praelegal-why-us/?per_page=100&_fields[]=title&_fields[]=acf').then(res => res.data).catch(err => {
    console.log(err);
  });
  return superiorities;
}

/***/ }),

/***/ 8629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WhyUS),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(883);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1324);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function WhyUS({
  superiorities
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    title: "Why Us - PraeLegal Afghanistan",
    canonical: "https://praelegal.af/why-us",
    descriptionContent: "PraeLegal Afghanistan is an entry point for you to be experienced locally and globally by knowledgeable business lawyers who can make you succeed",
    activePage: "why-us",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "col-12",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "my-8 md:my-12 lg:my-16",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h1", {
              className: "text-xl md:text-2xl lg:text-3xl tracking-wide",
              children: ["What Makes Our ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "text-primary",
                children: "Network Different?"
              })]
            })
          })
        })
      })
    }), superiorities.map(superiority => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      id: superiority.id,
      className: "even:bg-article_bg_banner odd:bg-white py-12",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "row",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-lg-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "whitespace-pre-wrap",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                className: "text-tertiary mb-4",
                children: superiority.title.rendered
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "dashed",
                dangerouslySetInnerHTML: {
                  __html: superiority.acf.description
                }
              })]
            })
          })
        })
      })
    }))]
  });
}
async function getStaticProps() {
  const superiorities = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getAllSuperioritiesCustomFields */ .up)();
  return {
    props: {
      superiorities
    }
  };
}

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 3173:
/***/ ((module) => {

module.exports = require("pure-react-carousel");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,210], () => (__webpack_exec__(8629)));
module.exports = __webpack_exports__;

})();