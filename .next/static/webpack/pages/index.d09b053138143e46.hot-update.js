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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@12.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_inputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/inputComponent */ \"./components/inputComponent.js\");\n/* harmony import */ var _components_submitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/submitButton */ \"./components/submitButton.js\");\n/* harmony import */ var _components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/previousAttempt */ \"./components/previousAttempt.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Game() {\n    var _this = this;\n    _s();\n    document.addEventListener(\"keydown\", function(event) {\n        if (event.code !== \"Enter\") return;\n        var wordIsFinished = true;\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = Object.values(currentAttempt)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var letter = _step.value;\n                console.log(\"letter\", letter);\n                if (!letter) {\n                    wordIsFinished = false;\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        wordIsFinished && setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(attempts).concat([\n            Object.values(currentAttempt)\n        ]));\n        wordIsFinished && resetAttempt();\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"hello\",\n        \"world\",\n        \"close\",\n        \"codes\",\n        \"clear\",\n        \"house\",\n        \"mouse\",\n        \"learn\",\n        \"error\",\n        \"basic\",\n        \"exist\",\n        \"exits\", \n    ]), fiveLetterWordsList = ref[0], setFiveLetterWordsList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        1: null,\n        2: null,\n        3: null,\n        4: null,\n        5: null\n    }), currentAttempt = ref1[0], setCurrentAttempt = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), attempts = ref2[0], setAttempts = ref2[1];\n    var resetAttempt = function() {\n        setCurrentAttempt({\n            1: null,\n            2: null,\n            3: null,\n            4: null,\n            5: null\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            attempts.length ? attempts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    attempt: item\n                }, index, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 18\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_inputComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleChange: function(word) {\n                    setCurrentAttempt(word);\n                },\n                word: currentAttempt,\n                setWord: setCurrentAttempt\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_submitButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                resetAttempt: resetAttempt,\n                handleChange: function(word) {\n                    setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(attempts).concat([\n                        word\n                    ]));\n                },\n                currentAttempt: Object.values(currentAttempt)\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"GVuNR+cq2KiLjgE1Rn9Y4S+zN1w=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNPLElBQUksQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUNEQSxJQUFJLEVBQUVoQixjQUFjO2dCQUNwQmlCLE9BQU8sRUFBRVIsaUJBQWlCOzs7OztvQkFDVjswQkFDbEIsOERBQUNuQixnRUFBWTtnQkFDWGdCLFlBQVksRUFBRUEsWUFBWTtnQkFDMUJTLFlBQVksRUFBRSxTQUFDQyxJQUFJLEVBQUs7b0JBQ3RCWixXQUFXLENBQUMscUZBQUlDLFFBQVEsQ0FBUkEsUUFBSjt3QkFBY1csSUFBSTtxQkFBQyxFQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0RoQixjQUFjLEVBQUVGLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxjQUFjLENBQUM7Ozs7O29CQUMvQjs7b0JBQ2YsQ0FDSDtBQUNKLENBQUM7R0F0RXVCUixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnRcIjtcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3VibWl0QnV0dG9uXCI7XG5pbXBvcnQgUHJldmlvdXNBdHRlbXB0IGZyb20gXCIuLi9jb21wb25lbnRzL3ByZXZpb3VzQXR0ZW1wdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuY29kZSAhPT0gXCJFbnRlclwiKSByZXR1cm47XG4gICAgbGV0IHdvcmRJc0ZpbmlzaGVkID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBsZXR0ZXIgb2YgT2JqZWN0LnZhbHVlcyhjdXJyZW50QXR0ZW1wdCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibGV0dGVyXCIsIGxldHRlcik7XG4gICAgICBpZiAoIWxldHRlcikge1xuICAgICAgICB3b3JkSXNGaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICB3b3JkSXNGaW5pc2hlZCAmJiBzZXRBdHRlbXB0cyhbLi4uYXR0ZW1wdHMsIE9iamVjdC52YWx1ZXMoY3VycmVudEF0dGVtcHQpXSk7XG4gICAgd29yZElzRmluaXNoZWQgJiYgcmVzZXRBdHRlbXB0KCk7XG4gIH0pO1xuICBjb25zdCBbZml2ZUxldHRlcldvcmRzTGlzdCwgc2V0Rml2ZUxldHRlcldvcmRzTGlzdF0gPSB1c2VTdGF0ZShbXG4gICAgXCJoZWxsb1wiLFxuICAgIFwid29ybGRcIixcbiAgICBcImNsb3NlXCIsXG4gICAgXCJjb2Rlc1wiLFxuICAgIFwiY2xlYXJcIixcbiAgICBcImhvdXNlXCIsXG4gICAgXCJtb3VzZVwiLFxuICAgIFwibGVhcm5cIixcbiAgICBcImVycm9yXCIsXG4gICAgXCJiYXNpY1wiLFxuICAgIFwiZXhpc3RcIixcbiAgICBcImV4aXRzXCIsXG4gIF0pO1xuICBjb25zdCBbY3VycmVudEF0dGVtcHQsIHNldEN1cnJlbnRBdHRlbXB0XSA9IHVzZVN0YXRlKHtcbiAgICAxOiBudWxsLFxuICAgIDI6IG51bGwsXG4gICAgMzogbnVsbCxcbiAgICA0OiBudWxsLFxuICAgIDU6IG51bGwsXG4gIH0pO1xuICBjb25zdCBbYXR0ZW1wdHMsIHNldEF0dGVtcHRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgcmVzZXRBdHRlbXB0ID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRBdHRlbXB0KHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHthdHRlbXB0cy5sZW5ndGggPyAoXG4gICAgICAgIGF0dGVtcHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFByZXZpb3VzQXR0ZW1wdCBrZXk9e2luZGV4fSBhdHRlbXB0PXtpdGVtfT48L1ByZXZpb3VzQXR0ZW1wdD47XG4gICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICAgKX1cbiAgICAgIDxJbnB1dENvbXBvbmVudFxuICAgICAgICBoYW5kbGVDaGFuZ2U9eyh3b3JkKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudEF0dGVtcHQod29yZCk7XG4gICAgICAgIH19XG4gICAgICAgIHdvcmQ9e2N1cnJlbnRBdHRlbXB0fVxuICAgICAgICBzZXRXb3JkPXtzZXRDdXJyZW50QXR0ZW1wdH1cbiAgICAgID48L0lucHV0Q29tcG9uZW50PlxuICAgICAgPFN1Ym1pdEJ1dHRvblxuICAgICAgICByZXNldEF0dGVtcHQ9e3Jlc2V0QXR0ZW1wdH1cbiAgICAgICAgaGFuZGxlQ2hhbmdlPXsod29yZCkgPT4ge1xuICAgICAgICAgIHNldEF0dGVtcHRzKFsuLi5hdHRlbXB0cywgd29yZF0pO1xuICAgICAgICB9fVxuICAgICAgICBjdXJyZW50QXR0ZW1wdD17T2JqZWN0LnZhbHVlcyhjdXJyZW50QXR0ZW1wdCl9XG4gICAgICA+PC9TdWJtaXRCdXR0b24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJJbnB1dENvbXBvbmVudCIsIlN1Ym1pdEJ1dHRvbiIsIlByZXZpb3VzQXR0ZW1wdCIsIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJ3b3JkSXNGaW5pc2hlZCIsIk9iamVjdCIsInZhbHVlcyIsImN1cnJlbnRBdHRlbXB0IiwibGV0dGVyIiwiY29uc29sZSIsImxvZyIsInNldEF0dGVtcHRzIiwiYXR0ZW1wdHMiLCJyZXNldEF0dGVtcHQiLCJmaXZlTGV0dGVyV29yZHNMaXN0Iiwic2V0Rml2ZUxldHRlcldvcmRzTGlzdCIsInNldEN1cnJlbnRBdHRlbXB0IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYXR0ZW1wdCIsImhhbmRsZUNoYW5nZSIsIndvcmQiLCJzZXRXb3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});