"use strict";
(() => {
var exports = {};
exports.id = 458;
exports.ids = [458];
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

/***/ 3932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PracticeArea),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/PracticeAreas.js




const PracticeAreas = ({
  selectedArea,
  allArea
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        children: allArea.map((singleArea, index) => {
          if (index < 10 || singleArea.acf.area === selectedArea) {
            return /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: singleArea.acf.area === selectedArea ? 'mb-1 last:mb-0 py-3 pr-4 relative side-nav__arrow text-primary border-b border-accents_6' : 'mb-1 last:mb-0 py-3 pr-4 relative side-nav__arrow hover:text-primary border-b border-accents_6',
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: `/practices/${singleArea.slug}`,
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: singleArea.acf.area
                })
              })
            });
          }
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-end mt-6 mb-2",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/practices",
        passHref: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "flex items-center justify-center pb-1 border-b border-primary nav-all-prc",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Access All Practices"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "ml-2 text-sm",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "flaticon-arrow-pointing-to-right"
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const components_PracticeAreas = (PracticeAreas);
// EXTERNAL MODULE: ./components/layout/Layout.js + 6 modules
var Layout = __webpack_require__(1324);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
;// CONCATENATED MODULE: ./pages/practices/[slug].js






function PracticeArea({
  practice,
  practices
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    title: `${practice.acf.area} | PraeLegal Afghanistan`,
    canonical: `https://praelegal.af/${practice.slug}`,
    descriptionContent: practice.acf.description.substring(0, 160),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "border-b border-secondary",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "container-fluid",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "row",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "col-lg-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "relative",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "relative w-full bg-h__practice",
                style: {
                  backgroundImage: `url(${practice.acf.image.url})`,
                  backgroundSize: 'cover',
                  backgroundBlendMode: 'normal',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center'
                }
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "absolute left-1 right-1 lg:left-10 bottom-12 lg:w-max bg-black-opacity-7",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "box-clip",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "pb-4 px-8",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "pl-8 border-l-4 border-primary",
                      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
                        className: "text-xl md:text-2xl lg:text-4xl text-accents_0",
                        children: practice.acf.area
                      })
                    })
                  })
                })
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row pb-12",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "border-b border-secondary mt-10 mb-6 lg:mb-8",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "flex flex-col lg:flex-row text-sm mb-2",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "bc__arrow pr-2.5 last:pr-0 uppercase last:text-primary",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/practices",
                    passHref: true,
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "practices"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "bc__arrow pr-2.5 last:pr-0 uppercase last:text-primary",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: practice.acf.area
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "whitespace-pre-wrap mb-8",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "dashed",
                dangerouslySetInnerHTML: {
                  __html: practice.acf.description
                }
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "pt-10",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "mt-2 pb-4 bg-accents_1",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "px-4",
                children: /*#__PURE__*/jsx_runtime_.jsx(components_PracticeAreas, {
                  selectedArea: practice.acf.area,
                  allArea: practices
                })
              })
            })
          })
        })]
      })
    })]
  });
}
async function getStaticPaths() {
  const practices = await (0,api/* getAllPracticesCustomFields */.u2)();
  const paths = practices.map(practice => ({
    params: {
      slug: practice.slug
    }
  }));
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const practices = await (0,api/* getAllPracticesCustomFields */.u2)();
  return {
    props: {
      practice: practices.find(practice => practice.slug === params.slug) || {},
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,210], () => (__webpack_exec__(3932)));
module.exports = __webpack_exports__;

})();