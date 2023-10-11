"use strict";
(() => {
var exports = {};
exports.id = 760;
exports.ids = [760];
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

/***/ 8661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Practices),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
// EXTERNAL MODULE: ./components/layout/Layout.js + 6 modules
var Layout = __webpack_require__(1324);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/SinglePractice.js




const Practice = ({
  area,
  slug,
  image,
  imageTitle
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "col-lg-3 col-md-6 mb-8",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "shadow-custom rounded-md",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/practices/${slug}`,
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
            className: "h-40 cursor-pointer",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "w-full h-full object-cover",
              src: image,
              alt: imageTitle,
              loading: "lazy"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-100 custom-transition bg-black-opacity-4"
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-3 py-4 text-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "text-base sm:text-lg lg:text-xl h-20",
          children: area
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mt-4",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/practices/${slug}`,
            passHref: true,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "flex items-center justify-center text-primary",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Read More"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "ml-2 text-sm",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "flaticon-arrow-pointing-to-right"
                })
              })]
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const SinglePractice = (Practice);
;// CONCATENATED MODULE: ./pages/practices/index.js





function Practices({
  practices
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    title: "Practice Areas - PraeLegal Afghanistan",
    canonical: "https://praelegal.af/practices",
    descriptionContent: "Praelegal Afghanistan practice many areas of law such as Corporate Law, Investment Law, Tax Law, Banking and Finance, Intellectual Property,Business Crimes and Compliance,... and more",
    activePage: "practices",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-7",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-center mt-8 md:mt-10 lg:mt-16",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              className: "text-xl sm:text-2xl lg:text-5xl",
              children: ["Our ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "text-primary",
                children: "Practices"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "relative l-separator__center"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-10",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-center mb-8 md:mb-10 lg:mb-16",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "PraeLegal Afghanistan law firm provides full-service to its Clients. The following highlights a general description of many of our practice areas, but there are many specialized and nuanced areas of law that we also practice."
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row mt-8 mb-16",
        children: practices.map(practice => /*#__PURE__*/jsx_runtime_.jsx(SinglePractice, {
          area: practice.acf.area,
          slug: practice.slug,
          image: practice.acf.image.url || '',
          imageTitle: practice.acf.area
        }))
      })]
    })
  });
}
async function getStaticProps({
  params
}) {
  const practices = await (0,api/* getAllPracticesCustomFields */.u2)();
  return {
    props: {
      practices
    } // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds

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
var __webpack_exports__ = __webpack_require__.X(0, [664,210], () => (__webpack_exec__(8661)));
module.exports = __webpack_exports__;

})();