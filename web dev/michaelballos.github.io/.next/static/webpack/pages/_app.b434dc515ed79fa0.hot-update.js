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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ContactInfo = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openedPhone = ref[0], setOpenPhone = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openedEmail = ref1[0], setOpenEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openedTwitter = ref2[0], setOpenTwitter = ref2[1];\n    var createButton = [\n        {\n            Twitter: '@michael_ballos',\n            Gmail: 'ballos.michael@gmail.com',\n            Phone: '+1 (316) 226-2223'\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: 'contactInfo',\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: 'buttons',\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: 'phone',\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                className: 'btn btnPhone',\n                                onClick: function() {\n                                    return setOpenPhone(function(o) {\n                                        return !o;\n                                    });\n                                },\n                                children: \"Phone\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                                in: openedPhone,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"phoneNumber\",\n                                    children: \"(316)-226-2223\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: 'email',\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                className: 'btn btnEmail',\n                                onClick: function() {\n                                    return setOpenEmail(function(o) {\n                                        return !o;\n                                    });\n                                },\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                                in: openedEmail,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"gmail\",\n                                    children: \"ballos.michael@gmail.com\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: 'twitter',\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                className: 'btn btnTwitter',\n                                onClick: function() {\n                                    return setOpenTwitter(function(o) {\n                                        return !o;\n                                    });\n                                },\n                                children: \"Twitter\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                                in: openedTwitter,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"twitterHandle\",\n                                    children: \"@michael_ballos\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/michael/Documents/web dev/michaelballos.github.io/components/ContactInfo.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(ContactInfo, \"Hd39V5mRTV10Yf9Fyau5nmnY3YE=\");\n_c = ContactInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactInfo);\nvar _c;\n$RefreshReg$(_c, \"ContactInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RJbmZvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ0s7OztBQUVoRCxHQUFLLENBQUNJLFdBQVcsR0FBTyxRQUN4QixHQUQ4QixDQUFDOztJQUM3QixHQUFLLENBQStCSCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUEzQ0ksV0FBVyxHQUFrQkosR0FBZSxLQUEvQkssWUFBWSxHQUFJTCxHQUFlO0lBQ25ELEdBQUssQ0FBK0JBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQTNDTSxXQUFXLEdBQWtCTixJQUFlLEtBQS9CTyxZQUFZLEdBQUlQLElBQWU7SUFDbkQsR0FBSyxDQUFtQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBL0NRLGFBQWEsR0FBb0JSLElBQWUsS0FBakNTLGNBQWMsR0FBSVQsSUFBZTtJQUV2RCxHQUFLLENBQUNVLFlBQVksR0FBRyxDQUFDO1FBQ3BCLENBQUM7WUFDQ0MsT0FBTyxFQUFFLENBQWlCO1lBQzFCQyxLQUFLLEVBQUUsQ0FBMEI7WUFDakNDLEtBQUssRUFBRSxDQUFtQjtRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU07OEZBRURDLENBQUc7WUFBQ0MsU0FBUyxFQUFFLENBQWE7a0dBQzFCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUUsQ0FBUzs7Z0dBQ3RCRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUUsQ0FBTzs7d0dBQ3BCZCxpREFBTTtnQ0FBQ2MsU0FBUyxFQUFFLENBQWM7Z0NBQUVDLE9BQU8sRUFBRSxRQUFRO29DQUFGWCxNQUFNLENBQU5BLFlBQVksQ0FBQyxRQUFRWSxDQUFQQSxDQUFDO3dDQUFLLE1BQ2xGLEVBRG1GQSxDQUFDOzs7MENBQUcsQ0FFM0U7Ozs7Ozt3R0FDQ2YsbURBQVE7Z0NBQUNnQixFQUFFLEVBQUVkLFdBQVc7c0hBQ3RCZSxDQUFDO29DQUFDSixTQUFTLEVBQUMsQ0FBYTs4Q0FBQyxDQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBR0hELENBQUc7d0JBQUNDLFNBQVMsRUFBRSxDQUFPOzt3R0FDcEJkLGlEQUFNO2dDQUFDYyxTQUFTLEVBQUUsQ0FBYztnQ0FBRUMsT0FBTyxFQUFFLFFBQVE7b0NBQUZULE1BQU0sQ0FBTkEsWUFBWSxDQUFDLFFBQVFVLENBQVBBLENBQUM7d0NBQUssTUFDbEYsRUFEbUZBLENBQUM7OzswQ0FBRyxDQUUzRTs7Ozs7O3dHQUNDZixtREFBUTtnQ0FBQ2dCLEVBQUUsRUFBRVosV0FBVztzSEFDdEJhLENBQUM7b0NBQUNKLFNBQVMsRUFBQyxDQUFPOzhDQUFDLENBRXJCOzs7Ozs7Ozs7Ozs7Ozs7OztnR0FHSEQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFLENBQVM7O3dHQUN0QmQsaURBQU07Z0NBQUNjLFNBQVMsRUFBRSxDQUFnQjtnQ0FBRUMsT0FBTyxFQUFFLFFBQVE7b0NBQUZQLE1BQU0sQ0FBTkEsY0FBYyxDQUFDLFFBQVFRLENBQVBBLENBQUM7d0NBQUssTUFDdEYsRUFEdUZBLENBQUM7OzswQ0FBRyxDQUUvRTs7Ozs7O3dHQUNDZixtREFBUTtnQ0FBQ2dCLEVBQUUsRUFBRVYsYUFBYTtzSEFDeEJXLENBQUM7b0NBQUNKLFNBQVMsRUFBQyxDQUFlOzhDQUFDLENBRTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9kLENBQUM7R0FsREtaLFdBQVc7S0FBWEEsV0FBVztBQW9EakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0SW5mby50c3g/YjgwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIENvbGxhcHNlIH0gZnJvbSAnQG1hbnRpbmUvY29yZSdcblxuY29uc3QgQ29udGFjdEluZm86IEZDID0gKCkgPT4ge1xuICBjb25zdCBbb3BlbmVkUGhvbmUsIHNldE9wZW5QaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW29wZW5lZEVtYWlsLCBzZXRPcGVuRW1haWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtvcGVuZWRUd2l0dGVyLCBzZXRPcGVuVHdpdHRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBjcmVhdGVCdXR0b24gPSBbXG4gICAge1xuICAgICAgVHdpdHRlcjogJ0BtaWNoYWVsX2JhbGxvcycsXG4gICAgICBHbWFpbDogJ2JhbGxvcy5taWNoYWVsQGdtYWlsLmNvbScsXG4gICAgICBQaG9uZTogJysxICgzMTYpIDIyNi0yMjIzJyxcbiAgICB9XG4gIF1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eydjb250YWN0SW5mbyd9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbnMnfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bob25lJ30+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17J2J0biBidG5QaG9uZSd9IG9uQ2xpY2s9eygpID0+IHNldE9wZW5QaG9uZSgobykgPT4gIW8pfT5cbiAgICAgICAgICAgICAgUGhvbmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuZWRQaG9uZX0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncGhvbmVOdW1iZXInPlxuICAgICAgICAgICAgICAgICgzMTYpLTIyNi0yMjIzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydlbWFpbCd9PlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9eydidG4gYnRuRW1haWwnfSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuRW1haWwoKG8pID0+ICFvKX0+XG4gICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3BlbmVkRW1haWx9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2dtYWlsJz5cbiAgICAgICAgICAgICAgICBiYWxsb3MubWljaGFlbEBnbWFpbC5jb21cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3R3aXR0ZXInfT5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXsnYnRuIGJ0blR3aXR0ZXInfSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuVHdpdHRlcigobykgPT4gIW8pfT5cbiAgICAgICAgICAgICAgVHdpdHRlclxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW5lZFR3aXR0ZXJ9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3R3aXR0ZXJIYW5kbGUnPlxuICAgICAgICAgICAgICAgIEBtaWNoYWVsX2JhbGxvc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RJbmZvXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNvbGxhcHNlIiwiQ29udGFjdEluZm8iLCJvcGVuZWRQaG9uZSIsInNldE9wZW5QaG9uZSIsIm9wZW5lZEVtYWlsIiwic2V0T3BlbkVtYWlsIiwib3BlbmVkVHdpdHRlciIsInNldE9wZW5Ud2l0dGVyIiwiY3JlYXRlQnV0dG9uIiwiVHdpdHRlciIsIkdtYWlsIiwiUGhvbmUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibyIsImluIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContactInfo.tsx\n");

/***/ })

});