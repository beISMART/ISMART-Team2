"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction LoginPage() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function handleUsernameChange(value) {\n        setUsername(value);\n    }\n    function handlePasswordChange(value) {\n        setPassword(value);\n    }\n    function handleSubmit() {\n        // Perform authentication with username and password\n        // ...\n        // Redirect to dashboard page on successful login\n        router.push(\"/dashboard\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"ISMART Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\ISMART_erp\\\\src\\\\pages\\\\login.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Username:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: username,\n                                onChange: (event)=>handleUsernameChange(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\ISMART_erp\\\\src\\\\pages\\\\login.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\ISMART_erp\\\\src\\\\pages\\\\login.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Password:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                value: password,\n                                onChange: (event)=>handlePasswordChange(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\ISMART_erp\\\\src\\\\pages\\\\login.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\ISMART_erp\\\\src\\\\pages\\\\login.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleSubmit,\n                        children: \"Log In\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\ISMART_erp\\\\src\\\\pages\\\\login.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\ISMART_erp\\\\src\\\\pages\\\\login.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\ISMART_erp\\\\src\\\\pages\\\\login.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"pm5FkKtzkYfadaIOGThHB2S1qn0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUNPO0FBRXhDLFNBQVNFLFlBQVk7O0lBQ25CLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTU8sU0FBU04sc0RBQVNBO0lBRXhCLFNBQVNPLHFCQUFxQkMsS0FBSyxFQUFFO1FBQ25DTCxZQUFZSztJQUNkO0lBRUEsU0FBU0MscUJBQXFCRCxLQUFLLEVBQUU7UUFDbkNILFlBQVlHO0lBQ2Q7SUFFQSxTQUFTRSxlQUFlO1FBQ3RCLG9EQUFvRDtRQUNwRCxNQUFNO1FBRU4saURBQWlEO1FBQ2pESixPQUFPSyxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztrQ0FDQyw4REFBQ0M7OzRCQUFNOzBDQUVMLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTFQsT0FBT047Z0NBQ1BnQixVQUFVLENBQUNDLFFBQVVaLHFCQUFxQlksTUFBTUMsTUFBTSxDQUFDWixLQUFLOzs7Ozs7Ozs7Ozs7a0NBR2hFLDhEQUFDTzs7NEJBQU07MENBRUwsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMVCxPQUFPSjtnQ0FDUGMsVUFBVSxDQUFDQyxRQUFVVixxQkFBcUJVLE1BQU1DLE1BQU0sQ0FBQ1osS0FBSzs7Ozs7Ozs7Ozs7O2tDQUdoRSw4REFBQ2E7d0JBQU9KLE1BQUs7d0JBQVNLLFNBQVNaO2tDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckQ7R0E3Q1NUOztRQUdRRCxrREFBU0E7OztLQUhqQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luLnRzeD8xMWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBMb2dpblBhZ2UoKSB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVVzZXJuYW1lQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICBzZXRVc2VybmFtZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVQYXNzd29yZENoYW5nZSh2YWx1ZSkge1xyXG4gICAgc2V0UGFzc3dvcmQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gICAgLy8gUGVyZm9ybSBhdXRoZW50aWNhdGlvbiB3aXRoIHVzZXJuYW1lIGFuZCBwYXNzd29yZFxyXG4gICAgLy8gLi4uXHJcbiAgICBcclxuICAgIC8vIFJlZGlyZWN0IHRvIGRhc2hib2FyZCBwYWdlIG9uIHN1Y2Nlc3NmdWwgbG9naW5cclxuICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPklTTUFSVCBMb2dpbjwvaDE+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIFVzZXJuYW1lOlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVVc2VybmFtZUNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIFBhc3N3b3JkOlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PkxvZyBJbjwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMb2dpblBhZ2UiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsImhhbmRsZVVzZXJuYW1lQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInB1c2giLCJkaXYiLCJoMSIsImZvcm0iLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n"));

/***/ })

});