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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ContactInfo = ()=>{\n    const { 0: openedPhone , 1: setOpenPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: openedEmail , 1: setOpenEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: openedTwitter , 1: setOpenTwitter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                className: 'btn btnPhone',\n                onClick: ()=>setOpenPhone((o)=>!o\n                    )\n                ,\n                children: \"Phone\"\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                in: openedPhone,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"phoneNumber\",\n                    children: \"(316)-226-2223\"\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                className: 'btn btnEmail',\n                onClick: ()=>setOpenEmail((o)=>!o\n                    )\n                ,\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                in: openedEmail,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"btn btnEmail\",\n                    children: \"ballos.michael@gmail.com\"\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                className: 'btn btnTwitter',\n                onClick: ()=>setOpenTwitter((o)=>!o\n                    )\n                ,\n                children: \"Twitter\"\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                in: openedTwitter,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"btn btnTwitter\",\n                    children: \"@michael_ballos\"\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactInfo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RJbmZvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUNnQjtBQUVoRCxLQUFLLENBQUNHLFdBQVcsT0FBUyxDQUFDO0lBQ3pCLEtBQUssTUFBRUMsV0FBVyxNQUFFQyxZQUFZLE1BQUlMLCtDQUFRLENBQUMsS0FBSztJQUNsRCxLQUFLLE1BQUVNLFdBQVcsTUFBRUMsWUFBWSxNQUFJUCwrQ0FBUSxDQUFDLEtBQUs7SUFDbEQsS0FBSyxNQUFFUSxhQUFhLE1BQUVDLGNBQWMsTUFBSVQsK0NBQVEsQ0FBQyxLQUFLO0lBRXRELE1BQU07O3dGQUVEQyxpREFBTTtnQkFBQ1MsU0FBUyxFQUFFLENBQWM7Z0JBQUVDLE9BQU8sTUFBUU4sWUFBWSxFQUFFTyxDQUFDLElBQU1BLENBQUM7OzswQkFBRyxDQUUzRTs7Ozs7O3dGQUNDVixtREFBUTtnQkFBQ1csRUFBRSxFQUFFVCxXQUFXO3NHQUN0QlUsQ0FBQztvQkFBQ0osU0FBUyxFQUFDLENBQWE7OEJBQUMsQ0FFM0I7Ozs7Ozs7Ozs7O3dGQUdEVCxpREFBTTtnQkFBQ1MsU0FBUyxFQUFFLENBQWM7Z0JBQUVDLE9BQU8sTUFBUUosWUFBWSxFQUFFSyxDQUFDLElBQU1BLENBQUM7OzswQkFBRyxDQUUzRTs7Ozs7O3dGQUNDVixtREFBUTtnQkFBQ1csRUFBRSxFQUFFUCxXQUFXO3NHQUN0QlEsQ0FBQztvQkFBQ0osU0FBUyxFQUFDLENBQWM7OEJBQUMsQ0FFNUI7Ozs7Ozs7Ozs7O3dGQUdEVCxpREFBTTtnQkFBQ1MsU0FBUyxFQUFFLENBQWdCO2dCQUFFQyxPQUFPLE1BQVFGLGNBQWMsRUFBRUcsQ0FBQyxJQUFNQSxDQUFDOzs7MEJBQUcsQ0FFL0U7Ozs7Ozt3RkFDQ1YsbURBQVE7Z0JBQUNXLEVBQUUsRUFBRUwsYUFBYTtzR0FDeEJNLENBQUM7b0JBQUNKLFNBQVMsRUFBQyxDQUFnQjs4QkFBQyxDQUU5Qjs7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7QUFFRCxpRUFBZVAsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFudGluZS1uZXh0LXRlbXBsYXRlLy4vY29tcG9uZW50cy9Db250YWN0SW5mby50c3g/YjgwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgQ29sbGFwc2UgfSBmcm9tICdAbWFudGluZS9jb3JlJztcblxuY29uc3QgQ29udGFjdEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuZWRQaG9uZSwgc2V0T3BlblBob25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW29wZW5lZEVtYWlsLCBzZXRPcGVuRW1haWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BlbmVkVHdpdHRlciwgc2V0T3BlblR3aXR0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXsnYnRuIGJ0blBob25lJ30gb25DbGljaz17KCkgPT4gc2V0T3BlblBob25lKChvKSA9PiAhbyl9PlxuICAgICAgICBQaG9uZSBcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPENvbGxhcHNlIGluPXtvcGVuZWRQaG9uZX0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncGhvbmVOdW1iZXInPlxuICAgICAgICAgICgzMTYpLTIyNi0yMjIzXG4gICAgICAgIDwvYT4gXG4gICAgICA8L0NvbGxhcHNlPlxuXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17J2J0biBidG5FbWFpbCd9IG9uQ2xpY2s9eygpID0+IHNldE9wZW5FbWFpbCgobykgPT4gIW8pfT5cbiAgICAgICAgRW1haWwgXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxDb2xsYXBzZSBpbj17b3BlbmVkRW1haWx9PlxuICAgICAgICA8YSBjbGFzc05hbWU9J2J0biBidG5FbWFpbCc+XG4gICAgICAgICAgYmFsbG9zLm1pY2hhZWxAZ21haWwuY29tXG4gICAgICAgIDwvYT4gXG4gICAgICA8L0NvbGxhcHNlPlxuXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17J2J0biBidG5Ud2l0dGVyJ30gb25DbGljaz17KCkgPT4gc2V0T3BlblR3aXR0ZXIoKG8pID0+ICFvKX0+XG4gICAgICAgIFR3aXR0ZXIgXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxDb2xsYXBzZSBpbj17b3BlbmVkVHdpdHRlcn0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0nYnRuIGJ0blR3aXR0ZXInPlxuICAgICAgICAgIEBtaWNoYWVsX2JhbGxvc1xuICAgICAgICA8L2E+IFxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEluZm87Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiQ29sbGFwc2UiLCJDb250YWN0SW5mbyIsIm9wZW5lZFBob25lIiwic2V0T3BlblBob25lIiwib3BlbmVkRW1haWwiLCJzZXRPcGVuRW1haWwiLCJvcGVuZWRUd2l0dGVyIiwic2V0T3BlblR3aXR0ZXIiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibyIsImluIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContactInfo.tsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/notifications */ \"@mantine/notifications\");\n/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_notifications__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/index */ \"./pages/index.tsx\");\n/* harmony import */ var _css_parallax_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../css/parallax.css */ \"./css/parallax.css\");\n/* harmony import */ var _css_parallax_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_parallax_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_info_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../css/info.css */ \"./css/info.css\");\n/* harmony import */ var _css_info_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_info_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_pageborder_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../css/pageborder.css */ \"./css/pageborder.css\");\n/* harmony import */ var _css_pageborder_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_pageborder_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_ICanWrite_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../css/ICanWrite.css */ \"./css/ICanWrite.css\");\n/* harmony import */ var _css_ICanWrite_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_ICanWrite_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction App(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Michael Ballos\"\n                    }, void 0, false, {\n                        fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Karla:ital,wght@1,200&family=Orbitron&family=Teko:wght@500&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_notifications__WEBPACK_IMPORTED_MODULE_1__.NotificationsProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/pages/_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM4RDtBQUNsQztBQUNTO0FBQ1A7QUFDSjtBQUNNO0FBQ0Q7QUFHaEIsUUFBUSxDQUFDRyxHQUFHLENBQUNDLEtBQThDLEVBQUUsQ0FBQztJQUUzRSxNQUFNOzt3RkFFREgsa0RBQUk7O2dHQUNGSSxDQUFLO2tDQUFDLENBRVA7Ozs7OztnR0FDQ0MsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQVk7d0JBQUNDLElBQUksRUFBQyxDQUE4Qjs7Ozs7O2dHQUN6REYsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQVk7d0JBQUNDLElBQUksRUFBQyxDQUEyQjt3QkFBQ0MsV0FBVzs7Ozs7O2dHQUNsRUgsQ0FBSTt3QkFBQ0UsSUFBSSxFQUFDLENBQWtIO3dCQUFDRCxHQUFHLEVBQUMsQ0FBWTs7Ozs7Ozs7Ozs7O3dGQUUzSVAseUVBQXFCO3NHQUNuQkUsb0RBQVE7Ozs7Ozs7Ozs7OztBQUlyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFudGluZS1uZXh0LXRlbXBsYXRlLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNQcm92aWRlciB9IGZyb20gJ0BtYW50aW5lL25vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuLi9wYWdlcy9pbmRleCc7XG5pbXBvcnQgJy4vLi4vY3NzL3BhcmFsbGF4LmNzcyc7XG5pbXBvcnQgJy4vLi4vY3NzL2luZm8uY3NzJztcbmltcG9ydCAnLi8uLi9jc3MvcGFnZWJvcmRlci5jc3MnO1xuaW1wb3J0ICcuLy4uL2Nzcy9JQ2FuV3JpdGUuY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAocHJvcHM6IEFwcFByb3BzICYgeyBjb2xvclNjaGVtZTogQ29sb3JTY2hlbWUgfSkge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgTWljaGFlbCBCYWxsb3NcbiAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4gLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FybGE6aXRhbCx3Z2h0QDEsMjAwJmZhbWlseT1PcmJpdHJvbiZmYW1pbHk9VGVrbzp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8Tm90aWZpY2F0aW9uc1Byb3ZpZGVyPlxuICAgICAgICAgICAgPEhvbWVQYWdlIC8+XG4gICAgICAgICAgPC9Ob3RpZmljYXRpb25zUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTm90aWZpY2F0aW9uc1Byb3ZpZGVyIiwiSGVhZCIsIkhvbWVQYWdlIiwiQXBwIiwicHJvcHMiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiY3Jvc3NvcmlnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ParallaxPlain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ParallaxPlain */ \"./components/ParallaxPlain.tsx\");\n/* harmony import */ var _components_FirstName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FirstName */ \"./components/FirstName.tsx\");\n/* harmony import */ var _components_ParallaxTechVaporwave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ParallaxTechVaporwave */ \"./components/ParallaxTechVaporwave.tsx\");\n/* harmony import */ var _components_ContactInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ContactInfo */ \"./components/ContactInfo.tsx\");\n\n\n\n\n\nconst HomePage = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: 'container',\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ParallaxPlain__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: 'info',\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FirstName__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: 'contactInfo',\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContactInfo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ParallaxPlain__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ParallaxTechVaporwave__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/michael/Documents/michaelballos.github.io/pages/index.tsx\",\n            lineNumber: 11,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUQ7QUFFUjtBQUN3QjtBQUVwQjtBQUVuRCxLQUFLLENBQUNJLFFBQVEsT0FBUyxDQUFDO0lBQ3RCLE1BQU07OEZBRUhDLENBQUc7WUFBQ0MsU0FBUyxFQUFFLENBQVc7OzRGQUN4Qk4saUVBQWE7Ozs7OzRGQUNiSyxDQUFHO29CQUFDQyxTQUFTLEVBQUUsQ0FBTTswR0FDbkJMLDZEQUFTOzs7Ozs7Ozs7OzRGQUVYSSxDQUFHO29CQUFDQyxTQUFTLEVBQUUsQ0FBYTswR0FDMUJILCtEQUFXOzs7Ozs7Ozs7OzRGQUViSCxpRUFBYTs7Ozs7NEZBQ2JFLHlFQUFxQjs7Ozs7Ozs7Ozs7O0FBSTVCLENBQUM7QUFHRCxpRUFBZUUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFudGluZS1uZXh0LXRlbXBsYXRlLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcmFsbGF4UGxhaW4gZnJvbSAnLi4vY29tcG9uZW50cy9QYXJhbGxheFBsYWluJztcbmltcG9ydCBMYXN0TmFtZSBmcm9tICcuLi9jb21wb25lbnRzL0xhc3ROYW1lJztcbmltcG9ydCBGaXJzdE5hbWUgZnJvbSAnLi4vY29tcG9uZW50cy9GaXJzdE5hbWUnO1xuaW1wb3J0IFBhcmFsbGF4VGVjaFZhcG9yd2F2ZSBmcm9tICcuLi9jb21wb25lbnRzL1BhcmFsbGF4VGVjaFZhcG9yd2F2ZSc7XG5pbXBvcnQgSUNhbldyaXRlIGZyb20gJy4uL2NvbXBvbmVudHMvSUNhbldyaXRlJztcbmltcG9ydCBDb250YWN0SW5mbyBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3RJbmZvJztcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbnRhaW5lcid9PlxuICAgICAgPFBhcmFsbGF4UGxhaW4gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaW5mbyd9PlxuICAgICAgICA8Rmlyc3ROYW1lIC8+ICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eydjb250YWN0SW5mbyd9PlxuICAgICAgICA8Q29udGFjdEluZm8gLz4gXG4gICAgICA8L2Rpdj5cbiAgICAgIDxQYXJhbGxheFBsYWluICAvPlxuICAgICAgPFBhcmFsbGF4VGVjaFZhcG9yd2F2ZSAvPlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJuYW1lcyI6WyJQYXJhbGxheFBsYWluIiwiRmlyc3ROYW1lIiwiUGFyYWxsYXhUZWNoVmFwb3J3YXZlIiwiQ29udGFjdEluZm8iLCJIb21lUGFnZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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