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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ContactInfo = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), opened = ref[0], setOpen = ref[1];\n    var info = {\n        Email: 'ballos.michael@gmail.com',\n        Phone: '(316) 223-2223',\n        Twitter: '@michaelballos'\n    };\n    var btnInfo = Object.keys(info);\n    var contactButton = btnInfo.map(function(key) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    onClick: function() {\n                        return setOpen(function(o) {\n                            return !o;\n                        });\n                    },\n                    children: key\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                    in: opened,\n                    children: info[key]\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 16\n                }, _this1)\n            ]\n        }, void 0, true));\n    });\n    return contactButton;\n};\n_s(ContactInfo, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = ContactInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactInfo);\nvar _c;\n$RefreshReg$(_c, \"ContactInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RJbmZvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ2dCOzs7QUFFaEQsR0FBSyxDQUFDRyxXQUFXLEdBQUcsUUFDcEIsR0FEMEIsQ0FBQzs7O0lBQ3pCLEdBQUssQ0FBcUJILEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQWpDSSxNQUFNLEdBQWFKLEdBQWUsS0FBMUJLLE9BQU8sR0FBSUwsR0FBZTtJQUN6QyxHQUFLLENBQUNNLElBQUksR0FBRyxDQUFDO1FBQ1pDLEtBQUssRUFBRSxDQUEwQjtRQUNqQ0MsS0FBSyxFQUFFLENBQWdCO1FBQ3ZCQyxPQUFPLEVBQUUsQ0FBZ0I7SUFDM0IsQ0FBQztJQUVELEdBQUssQ0FBQ0MsT0FBTyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ04sSUFBSTtJQUNoQyxHQUFLLENBQUNPLGFBQWEsR0FBSUgsT0FBTyxDQUFDSSxHQUFHLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUssQ0FBQztRQUM3QyxNQUFNOzs0RkFFRGQsaURBQU07b0JBQUNlLE9BQU8sRUFBRSxRQUFRO3dCQUFGWCxNQUFNLENBQU5BLE9BQU8sQ0FBQyxRQUFRWSxDQUFQQSxDQUFDOzRCQUFLLE1BQzVDLEVBRDZDQSxDQUFDOzs7OEJBQ3JDRixHQUFHOzs7Ozs7NEZBQ0liLG1EQUFRO29CQUFDZ0IsRUFBRSxFQUFFZCxNQUFNOzhCQUMxQkUsSUFBSSxDQUFDUyxHQUFHOzs7Ozs7OztJQUdkLENBQUM7SUFFRixNQUFNLENBQUNGLGFBQWE7QUFDdEIsQ0FBQztHQXJCS1YsV0FBVztLQUFYQSxXQUFXO0FBd0JqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGFjdEluZm8udHN4P2I4MGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIENvbGxhcHNlIH0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XG5cbmNvbnN0IENvbnRhY3RJbmZvID0gKCkgPT4ge1xuICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaW5mbyA9IHtcbiAgICBFbWFpbDogJ2JhbGxvcy5taWNoYWVsQGdtYWlsLmNvbScsXG4gICAgUGhvbmU6ICcoMzE2KSAyMjMtMjIyMycsXG4gICAgVHdpdHRlcjogJ0BtaWNoYWVsYmFsbG9zJyxcbiAgfVxuXG4gIGNvbnN0IGJ0bkluZm8gPSBPYmplY3Qua2V5cyhpbmZvKTtcbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9ICBidG5JbmZvLm1hcCgoa2V5KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3BlbigobykgPT4gIW8pfT5cbiAgICAgICAge2tleX1cbiAgICAgIDwvQnV0dG9uPjxDb2xsYXBzZSBpbj17b3BlbmVkfT5cbiAgICAgICAge2luZm9ba2V5XX1cbiAgICAgIDwvQ29sbGFwc2U+XG4gICAgPC8+XG4gICl9KTtcbiBcbiAgcmV0dXJuIGNvbnRhY3RCdXR0b247IFxufVxuIFxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0SW5mbzsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJDb2xsYXBzZSIsIkNvbnRhY3RJbmZvIiwib3BlbmVkIiwic2V0T3BlbiIsImluZm8iLCJFbWFpbCIsIlBob25lIiwiVHdpdHRlciIsImJ0bkluZm8iLCJPYmplY3QiLCJrZXlzIiwiY29udGFjdEJ1dHRvbiIsIm1hcCIsImtleSIsIm9uQ2xpY2siLCJvIiwiaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContactInfo.tsx\n");

/***/ })

});