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

/***/ "./components/previousAttempt.js":
/*!***************************************!*\
  !*** ./components/previousAttempt.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PreviousAttempt; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction PreviousAttempt(param) {\n    var attempt = param.attempt, word = param.word;\n    var _this = this;\n    _s();\n    console.log(\"attempt,\", attempt);\n    console.log(\"word\", word);\n    var checkLetter = function(givenLetter, correctLetter, word) {\n        console.log(\"passing\", givenLetter, correctLetter);\n        if (givenLetter === correctLetter) {\n            return \"correct\";\n        }\n        if (Object.values(word).includes(givenLetter)) {\n            return \"close\";\n        } else {\n            return \"wrong\";\n        }\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        1: checkLetter(attempt[0], word[1], word),\n        2: checkLetter(attempt[1], word[2], word),\n        3: checkLetter(attempt[2], word[3], word),\n        4: checkLetter(attempt[3], word[4], word),\n        5: checkLetter(attempt[4], word[5], word)\n    }), checkedWord = ref[0], setCheckedWord = ref[1];\n    console.log(\"checkedWord\", checkedWord);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: attempt.length ? attempt.map(function(item, index) {\n            console.log(\"rightwrongornot\", checkedWord[index + 1]);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: item\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/previousAttempt.js\",\n                lineNumber: 30,\n                columnNumber: 18\n            }, _this);\n        }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n    }, void 0, false, {\n        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/previousAttempt.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(PreviousAttempt, \"YfcVlL4O434Nrm5SBPtft2+OLng=\");\n_c = PreviousAttempt;\nvar _c;\n$RefreshReg$(_c, \"PreviousAttempt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ByZXZpb3VzQXR0ZW1wdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFpQztBQUVsQixTQUFTQyxlQUFlLENBQUMsS0FBaUIsRUFBRTtRQUFqQkMsT0FBTyxHQUFULEtBQWlCLENBQWZBLE9BQU8sRUFBRUMsSUFBSSxHQUFmLEtBQWlCLENBQU5BLElBQUk7OztJQUNyREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFSCxPQUFPLENBQUMsQ0FBQztJQUNqQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxFQUFFRixJQUFJLENBQUMsQ0FBQztJQUMxQixJQUFNRyxXQUFXLEdBQUcsU0FBQ0MsV0FBVyxFQUFFQyxhQUFhLEVBQUVMLElBQUksRUFBSztRQUN4REMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFRSxXQUFXLEVBQUVDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELElBQUlELFdBQVcsS0FBS0MsYUFBYSxFQUFFO1lBQ2pDLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFDRCxJQUFJQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ1AsSUFBSSxDQUFDLENBQUNRLFFBQVEsQ0FBQ0osV0FBVyxDQUFDLEVBQUU7WUFDN0MsT0FBTyxPQUFPLENBQUM7UUFDakIsT0FBTztZQUNMLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBc0NQLEdBTXBDLEdBTm9DQSwrQ0FBUSxDQUFDO0FBQzdDLFNBQUMsRUFBRU0sV0FBVyxDQUFDSixPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUVDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRUEsSUFBSSxDQUFDO0FBQ3pDLFNBQUMsRUFBRUcsV0FBVyxDQUFDSixPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUVDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRUEsSUFBSSxDQUFDO0FBQ3pDLFNBQUMsRUFBRUcsV0FBVyxDQUFDSixPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUVDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRUEsSUFBSSxDQUFDO0FBQ3pDLFNBQUMsRUFBRUcsV0FBVyxDQUFDSixPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUVDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRUEsSUFBSSxDQUFDO0FBQ3pDLFNBQUMsRUFBRUcsV0FBVyxDQUFDSixPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUVDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRUEsSUFBSSxDQUFDO0tBQzFDLENBQUMsRUFOS1MsV0FBVyxHQUFvQlosR0FNcEMsR0FOZ0IsRUFBRWEsY0FBYyxHQUFJYixHQU1wQyxHQU5nQztJQU9sQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxFQUFFTyxXQUFXLENBQUMsQ0FBQztJQUN4QyxxQkFDRSw4REFBQ0UsS0FBRztrQkFDRFosT0FBTyxDQUFDYSxNQUFNLEdBQ2JiLE9BQU8sQ0FBQ2MsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO1lBQzNCZCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRU8sV0FBVyxDQUFDTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxxQkFBTyw4REFBQ0MsTUFBSTswQkFBRUYsSUFBSTs7Ozs7cUJBQVEsQ0FBQztRQUM3QixDQUFDLENBQUMsaUJBRUYsNklBQUs7Ozs7O1lBRUgsQ0FDTjtBQUNKLENBQUM7R0FsQ3VCaEIsZUFBZTtBQUFmQSxLQUFBQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJldmlvdXNBdHRlbXB0LmpzP2Y0NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJldmlvdXNBdHRlbXB0KHsgYXR0ZW1wdCwgd29yZCB9KSB7XG4gIGNvbnNvbGUubG9nKFwiYXR0ZW1wdCxcIiwgYXR0ZW1wdCk7XG4gIGNvbnNvbGUubG9nKFwid29yZFwiLCB3b3JkKTtcbiAgY29uc3QgY2hlY2tMZXR0ZXIgPSAoZ2l2ZW5MZXR0ZXIsIGNvcnJlY3RMZXR0ZXIsIHdvcmQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInBhc3NpbmdcIiwgZ2l2ZW5MZXR0ZXIsIGNvcnJlY3RMZXR0ZXIpO1xuICAgIGlmIChnaXZlbkxldHRlciA9PT0gY29ycmVjdExldHRlcikge1xuICAgICAgcmV0dXJuIFwiY29ycmVjdFwiO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LnZhbHVlcyh3b3JkKS5pbmNsdWRlcyhnaXZlbkxldHRlcikpIHtcbiAgICAgIHJldHVybiBcImNsb3NlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIndyb25nXCI7XG4gICAgfVxuICB9O1xuICBjb25zdCBbY2hlY2tlZFdvcmQsIHNldENoZWNrZWRXb3JkXSA9IHVzZVN0YXRlKHtcbiAgICAxOiBjaGVja0xldHRlcihhdHRlbXB0WzBdLCB3b3JkWzFdLCB3b3JkKSxcbiAgICAyOiBjaGVja0xldHRlcihhdHRlbXB0WzFdLCB3b3JkWzJdLCB3b3JkKSxcbiAgICAzOiBjaGVja0xldHRlcihhdHRlbXB0WzJdLCB3b3JkWzNdLCB3b3JkKSxcbiAgICA0OiBjaGVja0xldHRlcihhdHRlbXB0WzNdLCB3b3JkWzRdLCB3b3JkKSxcbiAgICA1OiBjaGVja0xldHRlcihhdHRlbXB0WzRdLCB3b3JkWzVdLCB3b3JkKSxcbiAgfSk7XG4gIGNvbnNvbGUubG9nKFwiY2hlY2tlZFdvcmRcIiwgY2hlY2tlZFdvcmQpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7YXR0ZW1wdC5sZW5ndGggPyAoXG4gICAgICAgIGF0dGVtcHQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmlnaHR3cm9uZ29ybm90XCIsIGNoZWNrZWRXb3JkW2luZGV4ICsgMV0pO1xuICAgICAgICAgIHJldHVybiA8c3Bhbj57aXRlbX08L3NwYW4+O1xuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQcmV2aW91c0F0dGVtcHQiLCJhdHRlbXB0Iiwid29yZCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0xldHRlciIsImdpdmVuTGV0dGVyIiwiY29ycmVjdExldHRlciIsIk9iamVjdCIsInZhbHVlcyIsImluY2x1ZGVzIiwiY2hlY2tlZFdvcmQiLCJzZXRDaGVja2VkV29yZCIsImRpdiIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/previousAttempt.js\n"));

/***/ })

});