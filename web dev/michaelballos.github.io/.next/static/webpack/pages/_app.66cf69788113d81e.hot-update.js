"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/ContactInfo.tsx":
/*!************************************!*\
  !*** ./components/ContactInfo.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Demo() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openedPhone = ref[0], setOpenPhone = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openedEmail = ref1[0], setOpenEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openedTwitter = ref2[0], setOpenTwitter = ref2[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                className: 'phone',\n                onClick: function() {\n                    return setOpenPhone(function(o) {\n                        return !o;\n                    });\n                },\n                children: \"Phone\"\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                in: openedPhone,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"(316)-226-2223\"\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(Demo, \"Hd39V5mRTV10Yf9Fyau5nmnY3YE=\");\n_c = Demo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactInfo);\nvar _c;\n$RefreshReg$(_c, \"Demo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RJbmZvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ2dCOztTQUV2Q0csSUFBSSxHQUFHLENBQUM7O0lBQ2YsR0FBSyxDQUErQkgsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0NJLFdBQVcsR0FBa0JKLEdBQWUsS0FBL0JLLFlBQVksR0FBSUwsR0FBZTtJQUNuRCxHQUFLLENBQStCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUEzQ00sV0FBVyxHQUFrQk4sSUFBZSxLQUEvQk8sWUFBWSxHQUFJUCxJQUFlO0lBQ25ELEdBQUssQ0FBbUNBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQS9DUSxhQUFhLEdBQW9CUixJQUFlLEtBQWpDUyxjQUFjLEdBQUlULElBQWU7SUFFdkQsTUFBTTs7d0ZBRURDLGlEQUFNO2dCQUFDUyxTQUFTLEVBQUUsQ0FBTztnQkFBRUMsT0FBTyxFQUFFLFFBQVE7b0JBQUZOLE1BQU0sQ0FBTkEsWUFBWSxDQUFDLFFBQVFPLENBQVBBLENBQUM7d0JBQUssTUFDckUsRUFEc0VBLENBQUM7OzswQkFBRyxDQUVwRTs7Ozs7O3dGQUNDVixtREFBUTtnQkFBQ1csRUFBRSxFQUFFVCxXQUFXO3NHQUN0QlUsQ0FBQzs4QkFBQyxDQUVIOzs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztHQWpCUVgsSUFBSTtLQUFKQSxJQUFJO0FBbUJiLCtEQUFlWSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0SW5mby50c3g/YjgwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgQ29sbGFwc2UgfSBmcm9tICdAbWFudGluZS9jb3JlJztcblxuZnVuY3Rpb24gRGVtbygpIHtcbiAgY29uc3QgW29wZW5lZFBob25lLCBzZXRPcGVuUGhvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BlbmVkRW1haWwsIHNldE9wZW5FbWFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuZWRUd2l0dGVyLCBzZXRPcGVuVHdpdHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9eydwaG9uZSd9IG9uQ2xpY2s9eygpID0+IHNldE9wZW5QaG9uZSgobykgPT4gIW8pfT5cbiAgICAgICAgUGhvbmUgXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxDb2xsYXBzZSBpbj17b3BlbmVkUGhvbmV9PlxuICAgICAgICA8YT5cbiAgICAgICAgICAoMzE2KS0yMjYtMjIyM1xuICAgICAgICA8L2E+IFxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEluZm87Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiQ29sbGFwc2UiLCJEZW1vIiwib3BlbmVkUGhvbmUiLCJzZXRPcGVuUGhvbmUiLCJvcGVuZWRFbWFpbCIsInNldE9wZW5FbWFpbCIsIm9wZW5lZFR3aXR0ZXIiLCJzZXRPcGVuVHdpdHRlciIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJvIiwiaW4iLCJhIiwiQ29udGFjdEluZm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContactInfo.tsx\n");

/***/ })

});