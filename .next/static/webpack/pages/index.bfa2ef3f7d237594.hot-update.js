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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PreviousAttempt; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction PreviousAttempt(param) {\n    var attempt = param.attempt, word = param.word, playerHasWon = param.playerHasWon, setPlayerHasWon = param.setPlayerHasWon;\n    var _this = this;\n    _s();\n    var checkLetter = function(givenLetter, correctLetter, word) {\n        if (givenLetter === correctLetter) {\n            return \"correct\";\n        }\n        if (Object.values(word).includes(givenLetter)) {\n            return \"close\";\n        } else {\n            return \"wrong\";\n        }\n    };\n    var verifyAttempt = function(currentWord) {\n        if (currentWord[1] !== \"correct\") {\n            return false;\n        }\n        if (currentWord[2] !== \"correct\") {\n            return false;\n        }\n        if (currentWord[3] !== \"correct\") {\n            return false;\n        }\n        if (currentWord[4] !== \"correct\") {\n            return false;\n        }\n        if (currentWord[5] !== \"correct\") {\n            return false;\n        }\n        return true;\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        1: checkLetter(attempt[0], word[1], word),\n        2: checkLetter(attempt[1], word[2], word),\n        3: checkLetter(attempt[2], word[3], word),\n        4: checkLetter(attempt[3], word[4], word),\n        5: checkLetter(attempt[4], word[5], word)\n    }), checkedWord = ref[0], setCheckedWord = ref[1];\n    console.log(\"word\", word);\n    setPlayerHasWon(verifyAttempt(checkedWord));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \" row\",\n            alignItems: \"center\",\n            margin: \"10px\"\n        },\n        children: [\n            attempt.length ? attempt.map(function(item, index) {\n                console.log(\"rightwrongornot\", checkedWord[index + 1]);\n                return checkedWord[index + 1] === \"correct\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        justifyContent: \"center\",\n                        display: \"flex\",\n                        width: \"60px\",\n                        height: \"30px\",\n                        backgroundColor: \"green\",\n                        alignItems: \"center\",\n                        border: \"1px solid cyan\"\n                    },\n                    children: item\n                }, void 0, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/previousAttempt.js\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, _this) : checkedWord[index + 1] === \"close\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        justifyContent: \"center\",\n                        display: \"flex\",\n                        width: \"60px\",\n                        height: \"30px\",\n                        backgroundColor: \"orange\",\n                        alignItems: \"center\",\n                        border: \"1px solid cyan\"\n                    },\n                    children: item\n                }, void 0, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/previousAttempt.js\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, _this) : checkedWord[index + 1] === \"wrong\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        justifyContent: \"center\",\n                        display: \"flex\",\n                        width: \"60px\",\n                        height: \"30px\",\n                        backgroundColor: \"grey\",\n                        alignItems: \"center\",\n                        border: \"1px solid cyan\"\n                    },\n                    children: item\n                }, void 0, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/previousAttempt.js\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            playerHasWon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"You win.\"\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/previousAttempt.js\",\n                lineNumber: 107,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/previousAttempt.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(PreviousAttempt, \"YfcVlL4O434Nrm5SBPtft2+OLng=\");\n_c = PreviousAttempt;\nvar _c;\n$RefreshReg$(_c, \"PreviousAttempt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVE7d0JBQ3BCVSxNQUFNLEVBQUUsZ0JBQWdCO3FCQUN6Qjs4QkFFQU4sSUFBSTs7Ozs7eUJBQ0QsaUJBRU4sNklBQUssQ0FDTDtZQUNKLENBQUMsQ0FBQyxpQkFFRiw2SUFBSztZQUVOdEIsWUFBWSxrQkFBSSw4REFBQ2MsS0FBRzswQkFBQyxVQUFROzs7OztvQkFBTTs7Ozs7O1lBQ2hDLENBQ047QUFDSixDQUFDO0dBM0d1QmpCLGVBQWU7QUFBZkEsS0FBQUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ByZXZpb3VzQXR0ZW1wdC5qcz9mNDZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZXZpb3VzQXR0ZW1wdCh7XG4gIGF0dGVtcHQsXG4gIHdvcmQsXG4gIHBsYXllckhhc1dvbixcbiAgc2V0UGxheWVySGFzV29uLFxufSkge1xuICBjb25zdCBjaGVja0xldHRlciA9IChnaXZlbkxldHRlciwgY29ycmVjdExldHRlciwgd29yZCkgPT4ge1xuICAgIGlmIChnaXZlbkxldHRlciA9PT0gY29ycmVjdExldHRlcikge1xuICAgICAgcmV0dXJuIFwiY29ycmVjdFwiO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LnZhbHVlcyh3b3JkKS5pbmNsdWRlcyhnaXZlbkxldHRlcikpIHtcbiAgICAgIHJldHVybiBcImNsb3NlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIndyb25nXCI7XG4gICAgfVxuICB9O1xuICBjb25zdCB2ZXJpZnlBdHRlbXB0ID0gKGN1cnJlbnRXb3JkKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRXb3JkWzFdICE9PSBcImNvcnJlY3RcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFdvcmRbMl0gIT09IFwiY29ycmVjdFwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChjdXJyZW50V29yZFszXSAhPT0gXCJjb3JyZWN0XCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRXb3JkWzRdICE9PSBcImNvcnJlY3RcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFdvcmRbNV0gIT09IFwiY29ycmVjdFwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBbY2hlY2tlZFdvcmQsIHNldENoZWNrZWRXb3JkXSA9IHVzZVN0YXRlKHtcbiAgICAxOiBjaGVja0xldHRlcihhdHRlbXB0WzBdLCB3b3JkWzFdLCB3b3JkKSxcbiAgICAyOiBjaGVja0xldHRlcihhdHRlbXB0WzFdLCB3b3JkWzJdLCB3b3JkKSxcbiAgICAzOiBjaGVja0xldHRlcihhdHRlbXB0WzJdLCB3b3JkWzNdLCB3b3JkKSxcbiAgICA0OiBjaGVja0xldHRlcihhdHRlbXB0WzNdLCB3b3JkWzRdLCB3b3JkKSxcbiAgICA1OiBjaGVja0xldHRlcihhdHRlbXB0WzRdLCB3b3JkWzVdLCB3b3JkKSxcbiAgfSk7XG4gIGNvbnNvbGUubG9nKFwid29yZFwiLCB3b3JkKTtcbiAgc2V0UGxheWVySGFzV29uKHZlcmlmeUF0dGVtcHQoY2hlY2tlZFdvcmQpKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCIgcm93XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHthdHRlbXB0Lmxlbmd0aCA/IChcbiAgICAgICAgYXR0ZW1wdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJyaWdodHdyb25nb3Jub3RcIiwgY2hlY2tlZFdvcmRbaW5kZXggKyAxXSk7XG4gICAgICAgICAgcmV0dXJuIGNoZWNrZWRXb3JkW2luZGV4ICsgMV0gPT09IFwiY29ycmVjdFwiID8gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjYwcHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBjeWFuXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IGNoZWNrZWRXb3JkW2luZGV4ICsgMV0gPT09IFwiY2xvc2VcIiA/IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI2MHB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGN5YW5cIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogY2hlY2tlZFdvcmRbaW5kZXggKyAxXSA9PT0gXCJ3cm9uZ1wiID8gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjYwcHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGN5YW5cIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgICB7cGxheWVySGFzV29uICYmIDxkaXY+WW91IHdpbi48L2Rpdj59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQcmV2aW91c0F0dGVtcHQiLCJhdHRlbXB0Iiwid29yZCIsInBsYXllckhhc1dvbiIsInNldFBsYXllckhhc1dvbiIsImNoZWNrTGV0dGVyIiwiZ2l2ZW5MZXR0ZXIiLCJjb3JyZWN0TGV0dGVyIiwiT2JqZWN0IiwidmFsdWVzIiwiaW5jbHVkZXMiLCJ2ZXJpZnlBdHRlbXB0IiwiY3VycmVudFdvcmQiLCJjaGVja2VkV29yZCIsInNldENoZWNrZWRXb3JkIiwiY29uc29sZSIsImxvZyIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/previousAttempt.js\n"));

/***/ })

});