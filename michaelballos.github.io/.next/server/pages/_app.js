/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ContactInfo.tsx":
/*!************************************!*\
  !*** ./components/ContactInfo.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ContactInfo = ()=>{\n    const { 0: openedPhone , 1: setOpenPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: openedEmail , 1: setOpenEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: openedTwitter , 1: setOpenTwitter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: 'contactInfo',\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: 'buttons',\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: 'phone',\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                className: 'btn btnPhone',\n                                onClick: ()=>setOpenPhone((o)=>!o\n                                    )\n                                ,\n                                children: \"Phone\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                                in: openedPhone,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text\",\n                                    children: \"(316)-226-2223\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: 'email',\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                className: 'btn btnEmail',\n                                onClick: ()=>setOpenEmail((o)=>!o\n                                    )\n                                ,\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                                in: openedEmail,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text\",\n                                    children: \"ballos.michael@gmail.com\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: 'twitter',\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                className: 'btn btnTwitter',\n                                onClick: ()=>setOpenTwitter((o)=>!o\n                                    )\n                                ,\n                                children: \"Twitter\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                                in: openedTwitter,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text\",\n                                    children: \"@michael_ballos\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactInfo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RJbmZvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUNnQjtBQUVoRCxLQUFLLENBQUNHLFdBQVcsT0FBUyxDQUFDO0lBQ3pCLEtBQUssTUFBRUMsV0FBVyxNQUFFQyxZQUFZLE1BQUlMLCtDQUFRLENBQUMsS0FBSztJQUNsRCxLQUFLLE1BQUVNLFdBQVcsTUFBRUMsWUFBWSxNQUFJUCwrQ0FBUSxDQUFDLEtBQUs7SUFDbEQsS0FBSyxNQUFFUSxhQUFhLE1BQUVDLGNBQWMsTUFBSVQsK0NBQVEsQ0FBQyxLQUFLO0lBRXRELE1BQU07OEZBRURVLENBQUc7WUFBQ0MsU0FBUyxFQUFFLENBQWE7a0dBQzFCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUUsQ0FBUzs7Z0dBQzFCRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUUsQ0FBTzs7d0dBQ3RCVixpREFBTTtnQ0FBQ1UsU0FBUyxFQUFFLENBQWM7Z0NBQUVDLE9BQU8sTUFBUVAsWUFBWSxFQUFFUSxDQUFDLElBQU1BLENBQUM7OzswQ0FBRyxDQUUzRTs7Ozs7O3dHQUNDWCxtREFBUTtnQ0FBQ1ksRUFBRSxFQUFFVixXQUFXO3NIQUN0QlcsQ0FBQztvQ0FBQ0osU0FBUyxFQUFDLENBQU07OENBQUMsQ0FFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQUdERCxDQUFHO3dCQUFDQyxTQUFTLEVBQUUsQ0FBTzs7d0dBQ3RCVixpREFBTTtnQ0FBQ1UsU0FBUyxFQUFFLENBQWM7Z0NBQUVDLE9BQU8sTUFBUUwsWUFBWSxFQUFFTSxDQUFDLElBQU1BLENBQUM7OzswQ0FBRyxDQUUzRTs7Ozs7O3dHQUNDWCxtREFBUTtnQ0FBQ1ksRUFBRSxFQUFFUixXQUFXO3NIQUN0QlMsQ0FBQztvQ0FBQ0osU0FBUyxFQUFDLENBQU07OENBQUMsQ0FFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQUdERCxDQUFHO3dCQUFDQyxTQUFTLEVBQUUsQ0FBUzs7d0dBQ3hCVixpREFBTTtnQ0FBQ1UsU0FBUyxFQUFFLENBQWdCO2dDQUFFQyxPQUFPLE1BQVFILGNBQWMsRUFBRUksQ0FBQyxJQUFNQSxDQUFDOzs7MENBQUcsQ0FFL0U7Ozs7Ozt3R0FDQ1gsbURBQVE7Z0NBQUNZLEVBQUUsRUFBRU4sYUFBYTtzSEFDeEJPLENBQUM7b0NBQUNKLFNBQVMsRUFBQyxDQUFNOzhDQUFDLENBRXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9SLENBQUM7QUFFRCxpRUFBZVIsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFudGluZS1uZXh0LXRlbXBsYXRlLy4vY29tcG9uZW50cy9Db250YWN0SW5mby50c3g/YjgwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgQ29sbGFwc2UgfSBmcm9tICdAbWFudGluZS9jb3JlJztcblxuY29uc3QgQ29udGFjdEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuZWRQaG9uZSwgc2V0T3BlblBob25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW29wZW5lZEVtYWlsLCBzZXRPcGVuRW1haWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BlbmVkVHdpdHRlciwgc2V0T3BlblR3aXR0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29udGFjdEluZm8nfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydidXR0b25zJ30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bob25lJ30+IFxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9eydidG4gYnRuUGhvbmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuUGhvbmUoKG8pID0+ICFvKX0+XG4gICAgICAgIFBob25lIFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8Q29sbGFwc2UgaW49e29wZW5lZFBob25lfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0Jz5cbiAgICAgICAgICAoMzE2KS0yMjYtMjIyM1xuICAgICAgICA8L2E+IFxuICAgICAgPC9Db2xsYXBzZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eydlbWFpbCd9PlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9eydidG4gYnRuRW1haWwnfSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuRW1haWwoKG8pID0+ICFvKX0+XG4gICAgICAgIEVtYWlsIFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8Q29sbGFwc2UgaW49e29wZW5lZEVtYWlsfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0Jz5cbiAgICAgICAgICBiYWxsb3MubWljaGFlbEBnbWFpbC5jb21cbiAgICAgICAgPC9hPiBcbiAgICAgIDwvQ29sbGFwc2U+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsndHdpdHRlcid9PlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9eydidG4gYnRuVHdpdHRlcid9IG9uQ2xpY2s9eygpID0+IHNldE9wZW5Ud2l0dGVyKChvKSA9PiAhbyl9PlxuICAgICAgICBUd2l0dGVyIFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8Q29sbGFwc2UgaW49e29wZW5lZFR3aXR0ZXJ9PlxuICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQnPlxuICAgICAgICAgIEBtaWNoYWVsX2JhbGxvc1xuICAgICAgICA8L2E+IFxuICAgICAgPC9Db2xsYXBzZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEluZm87Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiQ29sbGFwc2UiLCJDb250YWN0SW5mbyIsIm9wZW5lZFBob25lIiwic2V0T3BlblBob25lIiwib3BlbmVkRW1haWwiLCJzZXRPcGVuRW1haWwiLCJvcGVuZWRUd2l0dGVyIiwic2V0T3BlblR3aXR0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibyIsImluIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContactInfo.tsx\n");

/***/ }),

/***/ "./components/FirstName.tsx":
/*!**********************************!*\
  !*** ./components/FirstName.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst FirstName = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: 'FirstName',\n        children: \"Michael Ballos\"\n    }, void 0, false, {\n        fileName: \"/home/michael/Documents/michaelballos.github.io/components/FirstName.tsx\",\n        lineNumber: 3,\n        columnNumber: 10\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FirstName);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcnN0TmFtZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEtBQUssQ0FBQ0EsU0FBUyxPQUFTLENBQUM7SUFFdkIsTUFBTSw2RUFBRUMsQ0FBRTtRQUFDQyxTQUFTLEVBQUUsQ0FBVztrQkFBRSxDQUFjOzs7Ozs7QUFDbkQsQ0FBQztBQUdELGlFQUFlRixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW50aW5lLW5leHQtdGVtcGxhdGUvLi9jb21wb25lbnRzL0ZpcnN0TmFtZS50c3g/ZTNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGaXJzdE5hbWUgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIDxoMSBjbGFzc05hbWU9eydGaXJzdE5hbWUnfT5NaWNoYWVsIEJhbGxvczwvaDE+XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRmlyc3ROYW1lOyJdLCJuYW1lcyI6WyJGaXJzdE5hbWUiLCJoMSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FirstName.tsx\n");

/***/ }),

/***/ "./components/ParallaxPlain.tsx":
/*!**************************************!*\
  !*** ./components/ParallaxPlain.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ParallaxPlain = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ParallaxPlain\"\n    }, void 0, false, {\n        fileName: \"/home/michael/Documents/michaelballos.github.io/components/ParallaxPlain.tsx\",\n        lineNumber: 3,\n        columnNumber: 10\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParallaxPlain);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhcmFsbGF4UGxhaW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxLQUFLLENBQUNBLGFBQWEsT0FBUyxDQUFDO0lBQzNCLE1BQU0sNkVBQUVDLENBQUc7UUFBQ0MsU0FBUyxFQUFFLENBQWU7Ozs7OztBQUN4QyxDQUFDO0FBR0QsaUVBQWVGLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hbnRpbmUtbmV4dC10ZW1wbGF0ZS8uL2NvbXBvbmVudHMvUGFyYWxsYXhQbGFpbi50c3g/MTNhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IFBhcmFsbGF4UGxhaW4gPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJQYXJhbGxheFBsYWluXCJ9IC8+XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGFyYWxsYXhQbGFpbjsiXSwibmFtZXMiOlsiUGFyYWxsYXhQbGFpbiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ParallaxPlain.tsx\n");

/***/ }),

/***/ "./components/ParallaxTechVaporwave.tsx":
/*!**********************************************!*\
  !*** ./components/ParallaxTechVaporwave.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ParallaxTechVaporwave = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ParallaxTechVaporwave\"\n    }, void 0, false, {\n        fileName: \"/home/michael/Documents/michaelballos.github.io/components/ParallaxTechVaporwave.tsx\",\n        lineNumber: 3,\n        columnNumber: 4\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParallaxTechVaporwave);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhcmFsbGF4VGVjaFZhcG9yd2F2ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEtBQUssQ0FBQ0EscUJBQXFCLE9BQVMsQ0FBQztJQUNuQyxNQUFNLDZFQUNKQyxDQUFHO1FBQUNDLFNBQVMsRUFBRSxDQUF1Qjs7Ozs7O0FBRTFDLENBQUM7QUFHRCxpRUFBZUYscUJBQXFCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW50aW5lLW5leHQtdGVtcGxhdGUvLi9jb21wb25lbnRzL1BhcmFsbGF4VGVjaFZhcG9yd2F2ZS50c3g/MGU1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQYXJhbGxheFRlY2hWYXBvcndhdmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICA8ZGl2IGNsYXNzTmFtZT17XCJQYXJhbGxheFRlY2hWYXBvcndhdmVcIn0gLz5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFsbGF4VGVjaFZhcG9yd2F2ZTsiXSwibmFtZXMiOlsiUGFyYWxsYXhUZWNoVmFwb3J3YXZlIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ParallaxTechVaporwave.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/notifications */ \"@mantine/notifications\");\n/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_notifications__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/index */ \"./pages/index.tsx\");\n/* harmony import */ var _css_parallax_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../css/parallax.css */ \"./css/parallax.css\");\n/* harmony import */ var _css_parallax_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_parallax_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_info_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../css/info.css */ \"./css/info.css\");\n/* harmony import */ var _css_info_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_info_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_pageborder_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../css/pageborder.css */ \"./css/pageborder.css\");\n/* harmony import */ var _css_pageborder_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_pageborder_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_ICanWrite_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../css/ICanWrite.css */ \"./css/ICanWrite.css\");\n/* harmony import */ var _css_ICanWrite_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_ICanWrite_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _css_ContactInfo_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../css/ContactInfo.css */ \"./css/ContactInfo.css\");\n/* harmony import */ var _css_ContactInfo_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_ContactInfo_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nfunction App(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Michael Ballos\"\n                    }, void 0, false, {\n                        fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Karla:ital,wght@1,200&family=Orbitron&family=Teko:wght@500&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_notifications__WEBPACK_IMPORTED_MODULE_1__.NotificationsProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzhEO0FBQ2xDO0FBQ1M7QUFDUDtBQUNKO0FBQ007QUFDRDtBQUNFO0FBR2xCLFFBQVEsQ0FBQ0csR0FBRyxDQUFDQyxLQUE4QyxFQUFFLENBQUM7SUFFM0UsTUFBTTs7d0ZBRURILGtEQUFJOztnR0FDRkksQ0FBSztrQ0FBQyxDQUVQOzs7Ozs7Z0dBQ0NDLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFZO3dCQUFDQyxJQUFJLEVBQUMsQ0FBOEI7Ozs7OztnR0FDekRGLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFZO3dCQUFDQyxJQUFJLEVBQUMsQ0FBMkI7d0JBQUNDLFdBQVc7Ozs7OztnR0FDbEVILENBQUk7d0JBQUNFLElBQUksRUFBQyxDQUFrSDt3QkFBQ0QsR0FBRyxFQUFDLENBQVk7Ozs7Ozs7Ozs7Ozt3RkFFM0lQLHlFQUFxQjtzR0FDbkJFLG9EQUFROzs7Ozs7Ozs7Ozs7QUFJckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hbnRpbmUtbmV4dC10ZW1wbGF0ZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zUHJvdmlkZXIgfSBmcm9tICdAbWFudGluZS9ub3RpZmljYXRpb25zJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi4vcGFnZXMvaW5kZXgnO1xuaW1wb3J0ICcuLy4uL2Nzcy9wYXJhbGxheC5jc3MnO1xuaW1wb3J0ICcuLy4uL2Nzcy9pbmZvLmNzcyc7XG5pbXBvcnQgJy4vLi4vY3NzL3BhZ2Vib3JkZXIuY3NzJztcbmltcG9ydCAnLi8uLi9jc3MvSUNhbldyaXRlLmNzcyc7XG5pbXBvcnQgJy4vLi4vY3NzL0NvbnRhY3RJbmZvLmNzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzOiBBcHBQcm9wcyAmIHsgY29sb3JTY2hlbWU6IENvbG9yU2NoZW1lIH0pIHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIE1pY2hhZWwgQmFsbG9zXG4gICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthcmxhOml0YWwsd2dodEAxLDIwMCZmYW1pbHk9T3JiaXRyb24mZmFtaWx5PVRla286d2dodEA1MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICAgICAgPE5vdGlmaWNhdGlvbnNQcm92aWRlcj5cbiAgICAgICAgICAgIDxIb21lUGFnZSAvPlxuICAgICAgICAgIDwvTm90aWZpY2F0aW9uc1Byb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbnNQcm92aWRlciIsIkhlYWQiLCJIb21lUGFnZSIsIkFwcCIsInByb3BzIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3Nzb3JpZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ParallaxPlain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ParallaxPlain */ \"./components/ParallaxPlain.tsx\");\n/* harmony import */ var _components_FirstName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FirstName */ \"./components/FirstName.tsx\");\n/* harmony import */ var _components_ParallaxTechVaporwave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ParallaxTechVaporwave */ \"./components/ParallaxTechVaporwave.tsx\");\n/* harmony import */ var _components_ContactInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ContactInfo */ \"./components/ContactInfo.tsx\");\n\n\n\n\n\nconst HomePage = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: 'container',\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ParallaxPlain__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: 'info',\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FirstName__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContactInfo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ParallaxPlain__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ParallaxTechVaporwave__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n            lineNumber: 11,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUQ7QUFFUjtBQUN3QjtBQUVwQjtBQUVuRCxLQUFLLENBQUNJLFFBQVEsT0FBUyxDQUFDO0lBQ3RCLE1BQU07OEZBRUhDLENBQUc7WUFBQ0MsU0FBUyxFQUFFLENBQVc7OzRGQUN4Qk4saUVBQWE7Ozs7OzRGQUNiSyxDQUFHO29CQUFDQyxTQUFTLEVBQUUsQ0FBTTs7b0dBQ25CTCw2REFBUzs7Ozs7b0dBQ1RFLCtEQUFXOzs7Ozs7Ozs7Ozs0RkFFYkgsaUVBQWE7Ozs7OzRGQUNiRSx5RUFBcUI7Ozs7Ozs7Ozs7OztBQUk1QixDQUFDO0FBR0QsaUVBQWVFLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hbnRpbmUtbmV4dC10ZW1wbGF0ZS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJhbGxheFBsYWluIGZyb20gJy4uL2NvbXBvbmVudHMvUGFyYWxsYXhQbGFpbic7XG5pbXBvcnQgTGFzdE5hbWUgZnJvbSAnLi4vY29tcG9uZW50cy9MYXN0TmFtZSc7XG5pbXBvcnQgRmlyc3ROYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvRmlyc3ROYW1lJztcbmltcG9ydCBQYXJhbGxheFRlY2hWYXBvcndhdmUgZnJvbSAnLi4vY29tcG9uZW50cy9QYXJhbGxheFRlY2hWYXBvcndhdmUnO1xuaW1wb3J0IElDYW5Xcml0ZSBmcm9tICcuLi9jb21wb25lbnRzL0lDYW5Xcml0ZSc7XG5pbXBvcnQgQ29udGFjdEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0SW5mbyc7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9eydjb250YWluZXInfT5cbiAgICAgIDxQYXJhbGxheFBsYWluIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2luZm8nfT5cbiAgICAgICAgPEZpcnN0TmFtZSAvPiAgXG4gICAgICAgIDxDb250YWN0SW5mbyAvPiBcbiAgICAgIDwvZGl2PlxuICAgICAgPFBhcmFsbGF4UGxhaW4gIC8+XG4gICAgICA8UGFyYWxsYXhUZWNoVmFwb3J3YXZlIC8+XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbIlBhcmFsbGF4UGxhaW4iLCJGaXJzdE5hbWUiLCJQYXJhbGxheFRlY2hWYXBvcndhdmUiLCJDb250YWN0SW5mbyIsIkhvbWVQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./css/ContactInfo.css":
/*!*****************************!*\
  !*** ./css/ContactInfo.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./css/ICanWrite.css":
/*!***************************!*\
  !*** ./css/ICanWrite.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./css/info.css":
/*!**********************!*\
  !*** ./css/info.css ***!
  \**********************/
/***/ (() => {



/***/ }),

/***/ "./css/pageborder.css":
/*!****************************!*\
  !*** ./css/pageborder.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./css/parallax.css":
/*!**************************!*\
  !*** ./css/parallax.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "@mantine/core":
/*!********************************!*\
  !*** external "@mantine/core" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/core");

/***/ }),

/***/ "@mantine/notifications":
/*!*****************************************!*\
  !*** external "@mantine/notifications" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/notifications");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();