"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@12.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_inputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/inputComponent */ \"./components/inputComponent.js\");\n/* harmony import */ var _components_submitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/submitButton */ \"./components/submitButton.js\");\n/* harmony import */ var _components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/previousAttempt */ \"./components/previousAttempt.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Game() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"hello\",\n        \"world\",\n        \"close\",\n        \"codes\",\n        \"clear\",\n        \"house\",\n        \"mouse\",\n        \"learn\",\n        \"error\",\n        \"basic\",\n        \"exist\",\n        \"exits\", \n    ]), fiveLetterWordsList = ref[0], setFiveLetterWordsList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        1: null,\n        2: null,\n        3: null,\n        4: null,\n        5: null\n    }), currentAttempt = ref1[0], setCurrentAttempt = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), attempts = ref2[0], setAttempts = ref2[1];\n    var resetAttempt = function() {\n        setCurrentAttempt({\n            1: null,\n            2: null,\n            3: null,\n            4: null,\n            5: null\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            attempts.length ? attempts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    attempt: item\n                }, index, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                    lineNumber: 45,\n                    columnNumber: 18\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_inputComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleChange: function(word) {\n                    setCurrentAttempt(word);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_submitButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                resetAttempt: resetAttempt,\n                handleChange: function(word) {\n                    setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(attempts).concat([\n                        word\n                    ]));\n                },\n                currentAttempt: Object.values(currentAttempt)\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"GVuNR+cq2KiLjgE1Rn9Y4S+zN1w=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBK0M7QUFDUDtBQUNQO0FBQ3lCO0FBQ0o7QUFDTTtBQUU3QyxTQUFTTSxJQUFJLEdBQUc7OztJQUM3QixJQUFzREosR0FhcEQsR0Fib0RBLCtDQUFRLENBQUM7UUFDN0QsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO0tBQ1IsQ0FBQyxFQWJLSyxtQkFBbUIsR0FBNEJMLEdBYXBELEdBYndCLEVBQUVNLHNCQUFzQixHQUFJTixHQWFwRCxHQWJnRDtJQWNsRCxJQUE0Q0EsSUFNMUMsR0FOMENBLCtDQUFRLENBQUM7QUFDbkQsU0FBQyxFQUFFLElBQUk7QUFDUCxTQUFDLEVBQUUsSUFBSTtBQUNQLFNBQUMsRUFBRSxJQUFJO0FBQ1AsU0FBQyxFQUFFLElBQUk7QUFDUCxTQUFDLEVBQUUsSUFBSTtLQUNSLENBQUMsRUFOS08sY0FBYyxHQUF1QlAsSUFNMUMsR0FObUIsRUFBRVEsaUJBQWlCLEdBQUlSLElBTTFDLEdBTnNDO0lBT3hDLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDUyxRQUFRLEdBQWlCVCxJQUFZLEdBQTdCLEVBQUVVLFdBQVcsR0FBSVYsSUFBWSxHQUFoQjtJQUM1QixJQUFNVyxZQUFZLEdBQUcsV0FBTTtRQUN6QkgsaUJBQWlCLENBQUM7QUFDaEIsYUFBQyxFQUFFLElBQUk7QUFDUCxhQUFDLEVBQUUsSUFBSTtBQUNQLGFBQUMsRUFBRSxJQUFJO0FBQ1AsYUFBQyxFQUFFLElBQUk7QUFDUCxhQUFDLEVBQUUsSUFBSTtTQUNSLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFDRTs7WUFDR0MsUUFBUSxDQUFDRyxNQUFNLEdBQ2RILFFBQVEsQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO2dCQUM1QixxQkFBTyw4REFBQ1osbUVBQWU7b0JBQWFhLE9BQU8sRUFBRUYsSUFBSTttQkFBcEJDLEtBQUs7Ozs7eUJBQW1DLENBQUM7WUFDeEUsQ0FBQyxDQUFDLGlCQUVGLDZJQUFLOzBCQUVQLDhEQUFDZCxrRUFBYztnQkFDYmdCLFlBQVksRUFBRSxTQUFDQyxJQUFJLEVBQUs7b0JBQ3RCVixpQkFBaUIsQ0FBQ1UsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Ozs7O29CQUNlOzBCQUNsQiw4REFBQ2hCLGdFQUFZO2dCQUNYUyxZQUFZLEVBQUVBLFlBQVk7Z0JBQzFCTSxZQUFZLEVBQUUsU0FBQ0MsSUFBSSxFQUFLO29CQUN0QlIsV0FBVyxDQUFDLHFGQUFJRCxRQUFRLENBQVJBLFFBQUo7d0JBQWNTLElBQUk7cUJBQUMsRUFBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUNEWCxjQUFjLEVBQUVZLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDYixjQUFjLENBQUM7Ozs7O29CQUMvQjs7b0JBQ2YsQ0FDSDtBQUNKLENBQUM7R0F4RHVCSCxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnRcIjtcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3VibWl0QnV0dG9uXCI7XG5pbXBvcnQgUHJldmlvdXNBdHRlbXB0IGZyb20gXCIuLi9jb21wb25lbnRzL3ByZXZpb3VzQXR0ZW1wdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKCkge1xuICBjb25zdCBbZml2ZUxldHRlcldvcmRzTGlzdCwgc2V0Rml2ZUxldHRlcldvcmRzTGlzdF0gPSB1c2VTdGF0ZShbXG4gICAgXCJoZWxsb1wiLFxuICAgIFwid29ybGRcIixcbiAgICBcImNsb3NlXCIsXG4gICAgXCJjb2Rlc1wiLFxuICAgIFwiY2xlYXJcIixcbiAgICBcImhvdXNlXCIsXG4gICAgXCJtb3VzZVwiLFxuICAgIFwibGVhcm5cIixcbiAgICBcImVycm9yXCIsXG4gICAgXCJiYXNpY1wiLFxuICAgIFwiZXhpc3RcIixcbiAgICBcImV4aXRzXCIsXG4gIF0pO1xuICBjb25zdCBbY3VycmVudEF0dGVtcHQsIHNldEN1cnJlbnRBdHRlbXB0XSA9IHVzZVN0YXRlKHtcbiAgICAxOiBudWxsLFxuICAgIDI6IG51bGwsXG4gICAgMzogbnVsbCxcbiAgICA0OiBudWxsLFxuICAgIDU6IG51bGwsXG4gIH0pO1xuICBjb25zdCBbYXR0ZW1wdHMsIHNldEF0dGVtcHRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgcmVzZXRBdHRlbXB0ID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRBdHRlbXB0KHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHthdHRlbXB0cy5sZW5ndGggPyAoXG4gICAgICAgIGF0dGVtcHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFByZXZpb3VzQXR0ZW1wdCBrZXk9e2luZGV4fSBhdHRlbXB0PXtpdGVtfT48L1ByZXZpb3VzQXR0ZW1wdD47XG4gICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICAgKX1cbiAgICAgIDxJbnB1dENvbXBvbmVudFxuICAgICAgICBoYW5kbGVDaGFuZ2U9eyh3b3JkKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudEF0dGVtcHQod29yZCk7XG4gICAgICAgIH19XG4gICAgICA+PC9JbnB1dENvbXBvbmVudD5cbiAgICAgIDxTdWJtaXRCdXR0b25cbiAgICAgICAgcmVzZXRBdHRlbXB0PXtyZXNldEF0dGVtcHR9XG4gICAgICAgIGhhbmRsZUNoYW5nZT17KHdvcmQpID0+IHtcbiAgICAgICAgICBzZXRBdHRlbXB0cyhbLi4uYXR0ZW1wdHMsIHdvcmRdKTtcbiAgICAgICAgfX1cbiAgICAgICAgY3VycmVudEF0dGVtcHQ9e09iamVjdC52YWx1ZXMoY3VycmVudEF0dGVtcHQpfVxuICAgICAgPjwvU3VibWl0QnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiSW5wdXRDb21wb25lbnQiLCJTdWJtaXRCdXR0b24iLCJQcmV2aW91c0F0dGVtcHQiLCJHYW1lIiwiZml2ZUxldHRlcldvcmRzTGlzdCIsInNldEZpdmVMZXR0ZXJXb3Jkc0xpc3QiLCJjdXJyZW50QXR0ZW1wdCIsInNldEN1cnJlbnRBdHRlbXB0IiwiYXR0ZW1wdHMiLCJzZXRBdHRlbXB0cyIsInJlc2V0QXR0ZW1wdCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImF0dGVtcHQiLCJoYW5kbGVDaGFuZ2UiLCJ3b3JkIiwiT2JqZWN0IiwidmFsdWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});