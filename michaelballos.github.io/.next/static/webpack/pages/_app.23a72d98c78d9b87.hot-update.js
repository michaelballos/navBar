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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ContactInfo = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openedPhone = ref[0], setOpenPhone = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openedEmail = ref1[0], setOpenEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openedTwitter = ref2[0], setOpenTwitter = ref2[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                className: 'btn btnPhone',\n                onClick: function() {\n                    return setOpenPhone(function(o) {\n                        return !o;\n                    });\n                },\n                children: \"Phone\"\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                in: openedPhone,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"phoneNumber\",\n                    children: \"(316)-226-2223\"\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                className: 'btn btnEmail',\n                onClick: function() {\n                    return setOpenEmail(function(o) {\n                        return !o;\n                    });\n                },\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                in: openedEmail,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"btn btnEmail\",\n                    children: \"ballos.michael@gmail.com\"\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                className: 'phoneBtn',\n                onClick: function() {\n                    return setOpenPhone(function(o) {\n                        return !o;\n                    });\n                },\n                children: \"Phone\"\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                in: openedPhone,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"phoneNumber\",\n                    children: \"(316)-226-2223\"\n                }, void 0, false, {\n                    fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/michael/Documents/michaelballos.github.io/components/ContactInfo.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(ContactInfo, \"Hd39V5mRTV10Yf9Fyau5nmnY3YE=\");\n_c = ContactInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactInfo);\nvar _c;\n$RefreshReg$(_c, \"ContactInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RJbmZvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ2dCOzs7QUFFaEQsR0FBSyxDQUFDRyxXQUFXLEdBQUcsUUFDcEIsR0FEMEIsQ0FBQzs7SUFDekIsR0FBSyxDQUErQkgsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0NJLFdBQVcsR0FBa0JKLEdBQWUsS0FBL0JLLFlBQVksR0FBSUwsR0FBZTtJQUNuRCxHQUFLLENBQStCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUEzQ00sV0FBVyxHQUFrQk4sSUFBZSxLQUEvQk8sWUFBWSxHQUFJUCxJQUFlO0lBQ25ELEdBQUssQ0FBbUNBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQS9DUSxhQUFhLEdBQW9CUixJQUFlLEtBQWpDUyxjQUFjLEdBQUlULElBQWU7SUFFdkQsTUFBTTs7d0ZBRURDLGlEQUFNO2dCQUFDUyxTQUFTLEVBQUUsQ0FBYztnQkFBRUMsT0FBTyxFQUFFLFFBQVE7b0JBQUZOLE1BQU0sQ0FBTkEsWUFBWSxDQUFDLFFBQVFPLENBQVBBLENBQUM7d0JBQUssTUFDNUUsRUFENkVBLENBQUM7OzswQkFBRyxDQUUzRTs7Ozs7O3dGQUNDVixtREFBUTtnQkFBQ1csRUFBRSxFQUFFVCxXQUFXO3NHQUN0QlUsQ0FBQztvQkFBQ0osU0FBUyxFQUFDLENBQWE7OEJBQUMsQ0FFM0I7Ozs7Ozs7Ozs7O3dGQUdEVCxpREFBTTtnQkFBQ1MsU0FBUyxFQUFFLENBQWM7Z0JBQUVDLE9BQU8sRUFBRSxRQUFRO29CQUFGSixNQUFNLENBQU5BLFlBQVksQ0FBQyxRQUFRSyxDQUFQQSxDQUFDO3dCQUFLLE1BQzVFLEVBRDZFQSxDQUFDOzs7MEJBQUcsQ0FFM0U7Ozs7Ozt3RkFDQ1YsbURBQVE7Z0JBQUNXLEVBQUUsRUFBRVAsV0FBVztzR0FDdEJRLENBQUM7b0JBQUNKLFNBQVMsRUFBQyxDQUFjOzhCQUFDLENBRTVCOzs7Ozs7Ozs7Ozt3RkFHRFQsaURBQU07Z0JBQUNTLFNBQVMsRUFBRSxDQUFVO2dCQUFFQyxPQUFPLEVBQUUsUUFBUTtvQkFBRk4sTUFBTSxDQUFOQSxZQUFZLENBQUMsUUFBUU8sQ0FBUEEsQ0FBQzt3QkFBSyxNQUN4RSxFQUR5RUEsQ0FBQzs7OzBCQUFHLENBRXZFOzs7Ozs7d0ZBQ0NWLG1EQUFRO2dCQUFDVyxFQUFFLEVBQUVULFdBQVc7c0dBQ3RCVSxDQUFDO29CQUFDSixTQUFTLEVBQUMsQ0FBYTs4QkFBQyxDQUUzQjs7Ozs7Ozs7Ozs7OztBQUtSLENBQUM7R0FwQ0tQLFdBQVc7S0FBWEEsV0FBVztBQXNDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRhY3RJbmZvLnRzeD9iODBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBDb2xsYXBzZSB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuXG5jb25zdCBDb250YWN0SW5mbyA9ICgpID0+IHtcbiAgY29uc3QgW29wZW5lZFBob25lLCBzZXRPcGVuUGhvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BlbmVkRW1haWwsIHNldE9wZW5FbWFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuZWRUd2l0dGVyLCBzZXRPcGVuVHdpdHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9eydidG4gYnRuUGhvbmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuUGhvbmUoKG8pID0+ICFvKX0+XG4gICAgICAgIFBob25lIFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8Q29sbGFwc2UgaW49e29wZW5lZFBob25lfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdwaG9uZU51bWJlcic+XG4gICAgICAgICAgKDMxNiktMjI2LTIyMjNcbiAgICAgICAgPC9hPiBcbiAgICAgIDwvQ29sbGFwc2U+XG5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXsnYnRuIGJ0bkVtYWlsJ30gb25DbGljaz17KCkgPT4gc2V0T3BlbkVtYWlsKChvKSA9PiAhbyl9PlxuICAgICAgICBFbWFpbCBcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPENvbGxhcHNlIGluPXtvcGVuZWRFbWFpbH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0nYnRuIGJ0bkVtYWlsJz5cbiAgICAgICAgICBiYWxsb3MubWljaGFlbEBnbWFpbC5jb21cbiAgICAgICAgPC9hPiBcbiAgICAgIDwvQ29sbGFwc2U+XG5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXsncGhvbmVCdG4nfSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuUGhvbmUoKG8pID0+ICFvKX0+XG4gICAgICAgIFBob25lIFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8Q29sbGFwc2UgaW49e29wZW5lZFBob25lfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdwaG9uZU51bWJlcic+XG4gICAgICAgICAgKDMxNiktMjI2LTIyMjNcbiAgICAgICAgPC9hPiBcbiAgICAgIDwvQ29sbGFwc2U+XG5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEluZm87Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiQ29sbGFwc2UiLCJDb250YWN0SW5mbyIsIm9wZW5lZFBob25lIiwic2V0T3BlblBob25lIiwib3BlbmVkRW1haWwiLCJzZXRPcGVuRW1haWwiLCJvcGVuZWRUd2l0dGVyIiwic2V0T3BlblR3aXR0ZXIiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibyIsImluIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContactInfo.tsx\n");

/***/ })

});