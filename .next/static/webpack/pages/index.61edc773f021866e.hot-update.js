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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@12.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_inputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/inputComponent */ \"./components/inputComponent.js\");\n/* harmony import */ var _components_submitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/submitButton */ \"./components/submitButton.js\");\n/* harmony import */ var _components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/previousAttempt */ \"./components/previousAttempt.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Game() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"hello\",\n        \"world\",\n        \"close\",\n        \"codes\",\n        \"clear\",\n        \"house\",\n        \"mouse\",\n        \"learn\",\n        \"error\",\n        \"basic\",\n        \"exist\",\n        \"exits\", \n    ]), fiveLetterWordsList = ref[0], setFiveLetterWordsList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), currentAttempt = ref1[0], setCurrentAttempt = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), attempts = ref2[0], setAttempts = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            attempts.length && attempts.map(function(item, index) {}),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_inputComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleChange: function(word) {\n                    setCurrentAttempt(word);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_submitButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                handleChange: function(word) {\n                    setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(attempts).concat([\n                        word\n                    ]));\n                },\n                currentAttempt: currentAttempt\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"RAFmfEc6fG/iLjuph7IO6OVz5XY=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBK0M7QUFDUDtBQUNQO0FBQ3lCO0FBQ0o7QUFDTTtBQUU3QyxTQUFTTSxJQUFJLEdBQUc7O0lBQzdCLElBQXNESixHQWFwRCxHQWJvREEsK0NBQVEsQ0FBQztRQUM3RCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87S0FDUixDQUFDLEVBYktLLG1CQUFtQixHQUE0QkwsR0FhcEQsR0Fid0IsRUFBRU0sc0JBQXNCLEdBQUlOLEdBYXBELEdBYmdEO0lBY2xELElBQTRDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQWpETyxjQUFjLEdBQXVCUCxJQUFZLEdBQW5DLEVBQUVRLGlCQUFpQixHQUFJUixJQUFZLEdBQWhCO0lBQ3hDLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDUyxRQUFRLEdBQWlCVCxJQUFZLEdBQTdCLEVBQUVVLFdBQVcsR0FBSVYsSUFBWSxHQUFoQjtJQUU1QixxQkFDRTs7WUFDR1MsUUFBUSxDQUFDRSxNQUFNLElBQUlGLFFBQVEsQ0FBQ0csR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLLENBQUMsQ0FBQyxDQUFDOzBCQUNyRCw4REFBQ2Isa0VBQWM7Z0JBQ2JjLFlBQVksRUFBRSxTQUFDQyxJQUFJLEVBQUs7b0JBQ3RCUixpQkFBaUIsQ0FBQ1EsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Ozs7O29CQUNlOzBCQUNsQiw4REFBQ2QsZ0VBQVk7Z0JBQ1hhLFlBQVksRUFBRSxTQUFDQyxJQUFJLEVBQUs7b0JBQ3RCTixXQUFXLENBQUMscUZBQUlELFFBQVEsQ0FBUkEsUUFBSjt3QkFBY08sSUFBSTtxQkFBQyxFQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0RULGNBQWMsRUFBRUEsY0FBYzs7Ozs7b0JBQ2hCOztvQkFDZixDQUNIO0FBQ0osQ0FBQztHQWxDdUJILElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnB1dENvbXBvbmVudFwiO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9zdWJtaXRCdXR0b25cIjtcbmltcG9ydCBQcmV2aW91c0F0dGVtcHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJldmlvdXNBdHRlbXB0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUoKSB7XG4gIGNvbnN0IFtmaXZlTGV0dGVyV29yZHNMaXN0LCBzZXRGaXZlTGV0dGVyV29yZHNMaXN0XSA9IHVzZVN0YXRlKFtcbiAgICBcImhlbGxvXCIsXG4gICAgXCJ3b3JsZFwiLFxuICAgIFwiY2xvc2VcIixcbiAgICBcImNvZGVzXCIsXG4gICAgXCJjbGVhclwiLFxuICAgIFwiaG91c2VcIixcbiAgICBcIm1vdXNlXCIsXG4gICAgXCJsZWFyblwiLFxuICAgIFwiZXJyb3JcIixcbiAgICBcImJhc2ljXCIsXG4gICAgXCJleGlzdFwiLFxuICAgIFwiZXhpdHNcIixcbiAgXSk7XG4gIGNvbnN0IFtjdXJyZW50QXR0ZW1wdCwgc2V0Q3VycmVudEF0dGVtcHRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYXR0ZW1wdHMsIHNldEF0dGVtcHRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7YXR0ZW1wdHMubGVuZ3RoICYmIGF0dGVtcHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHt9KX1cbiAgICAgIDxJbnB1dENvbXBvbmVudFxuICAgICAgICBoYW5kbGVDaGFuZ2U9eyh3b3JkKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudEF0dGVtcHQod29yZCk7XG4gICAgICAgIH19XG4gICAgICA+PC9JbnB1dENvbXBvbmVudD5cbiAgICAgIDxTdWJtaXRCdXR0b25cbiAgICAgICAgaGFuZGxlQ2hhbmdlPXsod29yZCkgPT4ge1xuICAgICAgICAgIHNldEF0dGVtcHRzKFsuLi5hdHRlbXB0cywgd29yZF0pO1xuICAgICAgICB9fVxuICAgICAgICBjdXJyZW50QXR0ZW1wdD17Y3VycmVudEF0dGVtcHR9XG4gICAgICA+PC9TdWJtaXRCdXR0b24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJJbnB1dENvbXBvbmVudCIsIlN1Ym1pdEJ1dHRvbiIsIlByZXZpb3VzQXR0ZW1wdCIsIkdhbWUiLCJmaXZlTGV0dGVyV29yZHNMaXN0Iiwic2V0Rml2ZUxldHRlcldvcmRzTGlzdCIsImN1cnJlbnRBdHRlbXB0Iiwic2V0Q3VycmVudEF0dGVtcHQiLCJhdHRlbXB0cyIsInNldEF0dGVtcHRzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaGFuZGxlQ2hhbmdlIiwid29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});