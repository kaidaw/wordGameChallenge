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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_type_of_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_type_of.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_type_of.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@12.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_inputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/inputComponent */ \"./components/inputComponent.js\");\n/* harmony import */ var _components_submitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/submitButton */ \"./components/submitButton.js\");\n/* harmony import */ var _components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/previousAttempt */ \"./components/previousAttempt.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Game() {\n    var _this = this;\n    _s();\n    document.addEventListener(\"keydown\", function(event) {\n        if (event.code !== \"Enter\") return;\n        var wordIsFinished = true;\n        var letterArray = [];\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = Object.keys(currentAttempt)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var key = _step.value;\n                if (currentAttempt[key]) {\n                    letterArray.push(currentAttempt[key]);\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        console.log(typeof letterArray === \"undefined\" ? \"undefined\" : (0,_swc_helpers_src_type_of_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(letterArray));\n        if (!letterArray[0] || !letterArray[1] || !letterArray[2] || !letterArray[3] || !letterArray[4]) {\n        //wordIsFinished = false;\n        }\n        wordIsFinished && setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(attempts).concat([\n            letterArray\n        ]));\n        wordIsFinished && resetAttempt();\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"hello\",\n        \"world\",\n        \"close\",\n        \"codes\",\n        \"clear\",\n        \"house\",\n        \"mouse\",\n        \"learn\",\n        \"error\",\n        \"basic\",\n        \"exist\",\n        \"exits\", \n    ]), fiveLetterWordsList = ref[0], setFiveLetterWordsList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        1: null,\n        2: null,\n        3: null,\n        4: null,\n        5: null\n    }), currentAttempt = ref1[0], setCurrentAttempt = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), attempts = ref2[0], setAttempts = ref2[1];\n    var resetAttempt = function() {\n        setCurrentAttempt({\n            1: null,\n            2: null,\n            3: null,\n            4: null,\n            5: null\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            attempts.length ? attempts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    attempt: item\n                }, index, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                    lineNumber: 67,\n                    columnNumber: 18\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_inputComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleChange: function(word) {\n                    setCurrentAttempt(word);\n                },\n                word: currentAttempt,\n                setWord: setCurrentAttempt\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_submitButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                resetAttempt: resetAttempt,\n                handleChange: function(word) {\n                    setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(attempts).concat([\n                        word\n                    ]));\n                },\n                currentAttempt: Object.values(currentAttempt)\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"GVuNR+cq2KiLjgE1Rn9Y4S+zN1w=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztZQUNHSixRQUFRLENBQUNLLE1BQU0sR0FDZEwsUUFBUSxDQUFDTSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUs7Z0JBQzVCLHFCQUFPLDhEQUFDeEIsbUVBQWU7b0JBQWF5QixPQUFPLEVBQUVGLElBQUk7bUJBQXBCQyxLQUFLOzs7O3lCQUFtQyxDQUFDO1lBQ3hFLENBQUMsQ0FBQyxpQkFFRiw2SUFBSzswQkFFUCw4REFBQzFCLGtFQUFjO2dCQUNiNEIsWUFBWSxFQUFFLFNBQUNDLElBQUksRUFBSztvQkFDdEJQLGlCQUFpQixDQUFDTyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDREEsSUFBSSxFQUFFakIsY0FBYztnQkFDcEJrQixPQUFPLEVBQUVSLGlCQUFpQjs7Ozs7b0JBQ1Y7MEJBQ2xCLDhEQUFDckIsZ0VBQVk7Z0JBQ1hrQixZQUFZLEVBQUVBLFlBQVk7Z0JBQzFCUyxZQUFZLEVBQUUsU0FBQ0MsSUFBSSxFQUFLO29CQUN0QlosV0FBVyxDQUFDLHFGQUFJQyxRQUFRLENBQVJBLFFBQUo7d0JBQWNXLElBQUk7cUJBQUMsRUFBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUNEakIsY0FBYyxFQUFFRixNQUFNLENBQUNxQixNQUFNLENBQUNuQixjQUFjLENBQUM7Ozs7O29CQUMvQjs7b0JBQ2YsQ0FDSDtBQUNKLENBQUM7R0FoRnVCVCxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnRcIjtcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3VibWl0QnV0dG9uXCI7XG5pbXBvcnQgUHJldmlvdXNBdHRlbXB0IGZyb20gXCIuLi9jb21wb25lbnRzL3ByZXZpb3VzQXR0ZW1wdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuY29kZSAhPT0gXCJFbnRlclwiKSByZXR1cm47XG4gICAgbGV0IHdvcmRJc0ZpbmlzaGVkID0gdHJ1ZTtcbiAgICBsZXQgbGV0dGVyQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoY3VycmVudEF0dGVtcHQpKSB7XG4gICAgICBpZiAoY3VycmVudEF0dGVtcHRba2V5XSkge1xuICAgICAgICBsZXR0ZXJBcnJheS5wdXNoKGN1cnJlbnRBdHRlbXB0W2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgbGV0dGVyQXJyYXkpO1xuICAgIGlmIChcbiAgICAgICFsZXR0ZXJBcnJheVswXSB8fFxuICAgICAgIWxldHRlckFycmF5WzFdIHx8XG4gICAgICAhbGV0dGVyQXJyYXlbMl0gfHxcbiAgICAgICFsZXR0ZXJBcnJheVszXSB8fFxuICAgICAgIWxldHRlckFycmF5WzRdXG4gICAgKSB7XG4gICAgICAvL3dvcmRJc0ZpbmlzaGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHdvcmRJc0ZpbmlzaGVkICYmIHNldEF0dGVtcHRzKFsuLi5hdHRlbXB0cywgbGV0dGVyQXJyYXldKTtcbiAgICB3b3JkSXNGaW5pc2hlZCAmJiByZXNldEF0dGVtcHQoKTtcbiAgfSk7XG4gIGNvbnN0IFtmaXZlTGV0dGVyV29yZHNMaXN0LCBzZXRGaXZlTGV0dGVyV29yZHNMaXN0XSA9IHVzZVN0YXRlKFtcbiAgICBcImhlbGxvXCIsXG4gICAgXCJ3b3JsZFwiLFxuICAgIFwiY2xvc2VcIixcbiAgICBcImNvZGVzXCIsXG4gICAgXCJjbGVhclwiLFxuICAgIFwiaG91c2VcIixcbiAgICBcIm1vdXNlXCIsXG4gICAgXCJsZWFyblwiLFxuICAgIFwiZXJyb3JcIixcbiAgICBcImJhc2ljXCIsXG4gICAgXCJleGlzdFwiLFxuICAgIFwiZXhpdHNcIixcbiAgXSk7XG4gIGNvbnN0IFtjdXJyZW50QXR0ZW1wdCwgc2V0Q3VycmVudEF0dGVtcHRdID0gdXNlU3RhdGUoe1xuICAgIDE6IG51bGwsXG4gICAgMjogbnVsbCxcbiAgICAzOiBudWxsLFxuICAgIDQ6IG51bGwsXG4gICAgNTogbnVsbCxcbiAgfSk7XG4gIGNvbnN0IFthdHRlbXB0cywgc2V0QXR0ZW1wdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByZXNldEF0dGVtcHQgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEF0dGVtcHQoe1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2F0dGVtcHRzLmxlbmd0aCA/IChcbiAgICAgICAgYXR0ZW1wdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8UHJldmlvdXNBdHRlbXB0IGtleT17aW5kZXh9IGF0dGVtcHQ9e2l0ZW19PjwvUHJldmlvdXNBdHRlbXB0PjtcbiAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgICAgPElucHV0Q29tcG9uZW50XG4gICAgICAgIGhhbmRsZUNoYW5nZT17KHdvcmQpID0+IHtcbiAgICAgICAgICBzZXRDdXJyZW50QXR0ZW1wdCh3b3JkKTtcbiAgICAgICAgfX1cbiAgICAgICAgd29yZD17Y3VycmVudEF0dGVtcHR9XG4gICAgICAgIHNldFdvcmQ9e3NldEN1cnJlbnRBdHRlbXB0fVxuICAgICAgPjwvSW5wdXRDb21wb25lbnQ+XG4gICAgICA8U3VibWl0QnV0dG9uXG4gICAgICAgIHJlc2V0QXR0ZW1wdD17cmVzZXRBdHRlbXB0fVxuICAgICAgICBoYW5kbGVDaGFuZ2U9eyh3b3JkKSA9PiB7XG4gICAgICAgICAgc2V0QXR0ZW1wdHMoWy4uLmF0dGVtcHRzLCB3b3JkXSk7XG4gICAgICAgIH19XG4gICAgICAgIGN1cnJlbnRBdHRlbXB0PXtPYmplY3QudmFsdWVzKGN1cnJlbnRBdHRlbXB0KX1cbiAgICAgID48L1N1Ym1pdEJ1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIklucHV0Q29tcG9uZW50IiwiU3VibWl0QnV0dG9uIiwiUHJldmlvdXNBdHRlbXB0IiwiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29kZSIsIndvcmRJc0ZpbmlzaGVkIiwibGV0dGVyQXJyYXkiLCJPYmplY3QiLCJrZXlzIiwiY3VycmVudEF0dGVtcHQiLCJrZXkiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInNldEF0dGVtcHRzIiwiYXR0ZW1wdHMiLCJyZXNldEF0dGVtcHQiLCJmaXZlTGV0dGVyV29yZHNMaXN0Iiwic2V0Rml2ZUxldHRlcldvcmRzTGlzdCIsInNldEN1cnJlbnRBdHRlbXB0IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYXR0ZW1wdCIsImhhbmRsZUNoYW5nZSIsIndvcmQiLCJzZXRXb3JkIiwidmFsdWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});