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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ContactInfo = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openedPhone = ref[0], setOpenPhone = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openedEmail = ref1[0], setOpenEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openedTwitter = ref2[0], setOpenTwitter = ref2[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"contactButtons\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"phone\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    className: 'btn btnPhone',\n                    onClick: function() {\n                        return setOpenPhone(function(o) {\n                            return !o;\n                        });\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"tel:3162262223\",\n                        className: \"phoneNumber\",\n                        children: \"(316)-226-2223\"\n                    }, void 0, false, {\n                        fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"email\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    className: 'btn btnEmail',\n                    onClick: function() {\n                        return setOpenEmail(function(o) {\n                            return !o;\n                        });\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"mailto:ballos.michael@gmail.com\",\n                        className: \"gmail\",\n                        children: \"ballos.michael@gmail.com\"\n                    }, void 0, false, {\n                        fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"twitter\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    className: 'btn btnTwitter',\n                    onClick: function() {\n                        return setOpenTwitter(function(o) {\n                            return !o;\n                        });\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"twitterHandle\",\n                        children: \"@michael_ballos\"\n                    }, void 0, false, {\n                        fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this));\n};\n_s(ContactInfo, \"Hd39V5mRTV10Yf9Fyau5nmnY3YE=\");\n_c = ContactInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactInfo);\nvar _c;\n$RefreshReg$(_c, \"ContactInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RJbmZvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBQ1M7OztBQUVoRCxHQUFLLENBQUNHLFdBQVcsR0FBYSxRQUM5QixHQURvQyxDQUFDOztJQUNuQyxHQUFLLENBQStCRixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUEzQ0csV0FBVyxHQUFrQkgsR0FBZSxLQUEvQkksWUFBWSxHQUFJSixHQUFlO0lBQ25ELEdBQUssQ0FBK0JBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQTNDSyxXQUFXLEdBQWtCTCxJQUFlLEtBQS9CTSxZQUFZLEdBQUlOLElBQWU7SUFDbkQsR0FBSyxDQUFtQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBL0NPLGFBQWEsR0FBb0JQLElBQWUsS0FBakNRLGNBQWMsR0FBSVIsSUFBZTtJQUV2RCxNQUFNLDZFQUNIUyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFnQjs7d0ZBQzVCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTztzR0FDbkJULGlEQUFNO29CQUFDUyxTQUFTLEVBQUUsQ0FBYztvQkFBRUMsT0FBTyxFQUFFLFFBQVE7d0JBQUZQLE1BQU0sQ0FBTkEsWUFBWSxDQUFDLFFBQVFRLENBQVBBLENBQUM7NEJBQUssTUFDOUUsRUFEK0VBLENBQUM7OzswR0FDckVDLENBQUM7d0JBQUNDLElBQUksRUFBQyxDQUFnQjt3QkFBQ0osU0FBUyxFQUFDLENBQWE7a0NBQUMsQ0FFakQ7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR0hELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFPO3NHQUNuQlQsaURBQU07b0JBQUNTLFNBQVMsRUFBRSxDQUFjO29CQUFFQyxPQUFPLEVBQUUsUUFBUTt3QkFBRkwsTUFBTSxDQUFOQSxZQUFZLENBQUMsUUFBUU0sQ0FBUEEsQ0FBQzs0QkFBSyxNQUM5RSxFQUQrRUEsQ0FBQzs7OzBHQUNyRUMsQ0FBQzt3QkFBQ0MsSUFBSSxFQUFDLENBQWlDO3dCQUFDSixTQUFTLEVBQUMsQ0FBTztrQ0FBQyxDQUU1RDs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFHSEQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVM7c0dBQ3JCVCxpREFBTTtvQkFBQ1MsU0FBUyxFQUFFLENBQWdCO29CQUFFQyxPQUFPLEVBQUUsUUFBUTt3QkFBRkgsTUFBTSxDQUFOQSxjQUFjLENBQUMsUUFBUUksQ0FBUEEsQ0FBQzs0QkFBSyxNQUNsRixFQURtRkEsQ0FBQzs7OzBHQUN6RUMsQ0FBQzt3QkFBQ0gsU0FBUyxFQUFDLENBQWU7a0NBQUMsQ0FFN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVixDQUFDO0dBL0JLUixXQUFXO0tBQVhBLFdBQVc7QUFpQ2pCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGFjdEluZm8udHN4P2I4MGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIENvbGxhcHNlIH0gZnJvbSAnQG1hbnRpbmUvY29yZSdcblxuY29uc3QgQ29udGFjdEluZm86IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbb3BlbmVkUGhvbmUsIHNldE9wZW5QaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW29wZW5lZEVtYWlsLCBzZXRPcGVuRW1haWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtvcGVuZWRUd2l0dGVyLCBzZXRPcGVuVHdpdHRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWN0QnV0dG9ucyc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGhvbmUnPlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17J2J0biBidG5QaG9uZSd9IG9uQ2xpY2s9eygpID0+IHNldE9wZW5QaG9uZSgobykgPT4gIW8pfT5cbiAgICAgICAgICA8YSBocmVmPSd0ZWw6MzE2MjI2MjIyMycgY2xhc3NOYW1lPSdwaG9uZU51bWJlcic+XG4gICAgICAgICAgICAoMzE2KS0yMjYtMjIyM1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWFpbCc+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXsnYnRuIGJ0bkVtYWlsJ30gb25DbGljaz17KCkgPT4gc2V0T3BlbkVtYWlsKChvKSA9PiAhbyl9PlxuICAgICAgICAgIDxhIGhyZWY9J21haWx0bzpiYWxsb3MubWljaGFlbEBnbWFpbC5jb20nIGNsYXNzTmFtZT0nZ21haWwnPlxuICAgICAgICAgICAgYmFsbG9zLm1pY2hhZWxAZ21haWwuY29tXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3R3aXR0ZXInPlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17J2J0biBidG5Ud2l0dGVyJ30gb25DbGljaz17KCkgPT4gc2V0T3BlblR3aXR0ZXIoKG8pID0+ICFvKX0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSd0d2l0dGVySGFuZGxlJz5cbiAgICAgICAgICAgIEBtaWNoYWVsX2JhbGxvc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RJbmZvXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNvbnRhY3RJbmZvIiwib3BlbmVkUGhvbmUiLCJzZXRPcGVuUGhvbmUiLCJvcGVuZWRFbWFpbCIsInNldE9wZW5FbWFpbCIsIm9wZW5lZFR3aXR0ZXIiLCJzZXRPcGVuVHdpdHRlciIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJvIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContactInfo.tsx\n");

/***/ })

});