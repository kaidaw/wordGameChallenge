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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@12.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_inputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/inputComponent */ \"./components/inputComponent.js\");\n/* harmony import */ var _components_submitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/submitButton */ \"./components/submitButton.js\");\n/* harmony import */ var _components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/previousAttempt */ \"./components/previousAttempt.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Game() {\n    var _this = this;\n    _s();\n    var checkWord = function(word) {\n        console.log(\"word\", word);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        document.addEventListener(\"keydown\", function(event) {\n            if (event.code !== \"Enter\") return;\n            checkWord(Object.values(currentAttempt));\n        });\n    }, []);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"hello\",\n        \"world\",\n        \"close\",\n        \"codes\",\n        \"clear\",\n        \"house\",\n        \"mouse\",\n        \"learn\",\n        \"error\",\n        \"basic\",\n        \"exist\",\n        \"exits\", \n    ]), fiveLetterWordsList = ref[0], setFiveLetterWordsList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        1: null,\n        2: null,\n        3: null,\n        4: null,\n        5: null\n    }), currentAttempt = ref1[0], setCurrentAttempt = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), attempts = ref2[0], setAttempts = ref2[1];\n    var resetAttempt = function() {\n        setCurrentAttempt({\n            1: null,\n            2: null,\n            3: null,\n            4: null,\n            5: null\n        });\n    };\n    console.log(\"current\", currentAttempt);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            attempts.length ? attempts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    attempt: item\n                }, index, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 18\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_inputComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                word: currentAttempt,\n                setWord: setCurrentAttempt\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_submitButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                resetAttempt: resetAttempt,\n                handleChange: function(word) {\n                    setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(attempts).concat([\n                        word\n                    ]));\n                },\n                currentAttempt: Object.values(currentAttempt)\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"ztO9Sh/TuqM/Xs3Z8aYjPOBOtYw=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2lucHV0Q29tcG9uZW50XCI7XG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3N1Ym1pdEJ1dHRvblwiO1xuaW1wb3J0IFByZXZpb3VzQXR0ZW1wdCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmV2aW91c0F0dGVtcHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgY29uc3QgY2hlY2tXb3JkID0gKHdvcmQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIndvcmRcIiwgd29yZCk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY29kZSAhPT0gXCJFbnRlclwiKSByZXR1cm47XG4gICAgICBjaGVja1dvcmQoT2JqZWN0LnZhbHVlcyhjdXJyZW50QXR0ZW1wdCkpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIGNvbnN0IFtmaXZlTGV0dGVyV29yZHNMaXN0LCBzZXRGaXZlTGV0dGVyV29yZHNMaXN0XSA9IHVzZVN0YXRlKFtcbiAgICBcImhlbGxvXCIsXG4gICAgXCJ3b3JsZFwiLFxuICAgIFwiY2xvc2VcIixcbiAgICBcImNvZGVzXCIsXG4gICAgXCJjbGVhclwiLFxuICAgIFwiaG91c2VcIixcbiAgICBcIm1vdXNlXCIsXG4gICAgXCJsZWFyblwiLFxuICAgIFwiZXJyb3JcIixcbiAgICBcImJhc2ljXCIsXG4gICAgXCJleGlzdFwiLFxuICAgIFwiZXhpdHNcIixcbiAgXSk7XG4gIGNvbnN0IFtjdXJyZW50QXR0ZW1wdCwgc2V0Q3VycmVudEF0dGVtcHRdID0gdXNlU3RhdGUoe1xuICAgIDE6IG51bGwsXG4gICAgMjogbnVsbCxcbiAgICAzOiBudWxsLFxuICAgIDQ6IG51bGwsXG4gICAgNTogbnVsbCxcbiAgfSk7XG4gIGNvbnN0IFthdHRlbXB0cywgc2V0QXR0ZW1wdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByZXNldEF0dGVtcHQgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEF0dGVtcHQoe1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgfSk7XG4gIH07XG4gIGNvbnNvbGUubG9nKFwiY3VycmVudFwiLCBjdXJyZW50QXR0ZW1wdCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHthdHRlbXB0cy5sZW5ndGggPyAoXG4gICAgICAgIGF0dGVtcHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFByZXZpb3VzQXR0ZW1wdCBrZXk9e2luZGV4fSBhdHRlbXB0PXtpdGVtfT48L1ByZXZpb3VzQXR0ZW1wdD47XG4gICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICAgKX1cbiAgICAgIDxJbnB1dENvbXBvbmVudFxuICAgICAgICB3b3JkPXtjdXJyZW50QXR0ZW1wdH1cbiAgICAgICAgc2V0V29yZD17c2V0Q3VycmVudEF0dGVtcHR9XG4gICAgICA+PC9JbnB1dENvbXBvbmVudD5cbiAgICAgIDxTdWJtaXRCdXR0b25cbiAgICAgICAgcmVzZXRBdHRlbXB0PXtyZXNldEF0dGVtcHR9XG4gICAgICAgIGhhbmRsZUNoYW5nZT17KHdvcmQpID0+IHtcbiAgICAgICAgICBzZXRBdHRlbXB0cyhbLi4uYXR0ZW1wdHMsIHdvcmRdKTtcbiAgICAgICAgfX1cbiAgICAgICAgY3VycmVudEF0dGVtcHQ9e09iamVjdC52YWx1ZXMoY3VycmVudEF0dGVtcHQpfVxuICAgICAgPjwvU3VibWl0QnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXRDb21wb25lbnQiLCJTdWJtaXRCdXR0b24iLCJQcmV2aW91c0F0dGVtcHQiLCJHYW1lIiwiY2hlY2tXb3JkIiwid29yZCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50QXR0ZW1wdCIsImZpdmVMZXR0ZXJXb3Jkc0xpc3QiLCJzZXRGaXZlTGV0dGVyV29yZHNMaXN0Iiwic2V0Q3VycmVudEF0dGVtcHQiLCJhdHRlbXB0cyIsInNldEF0dGVtcHRzIiwicmVzZXRBdHRlbXB0IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYXR0ZW1wdCIsInNldFdvcmQiLCJoYW5kbGVDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});