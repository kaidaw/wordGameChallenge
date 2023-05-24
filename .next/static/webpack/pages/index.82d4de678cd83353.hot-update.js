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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@12.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_inputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/inputComponent */ \"./components/inputComponent.js\");\n/* harmony import */ var _components_submitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/submitButton */ \"./components/submitButton.js\");\n/* harmony import */ var _components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/previousAttempt */ \"./components/previousAttempt.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Game() {\n    var _this = this;\n    _s();\n    //words array\n    var words = [\n        \"hello\",\n        \"world\",\n        \"close\",\n        \"codes\",\n        \"clear\",\n        \"house\",\n        \"mouse\",\n        \"learn\",\n        \"error\",\n        \"basic\",\n        \"exist\",\n        \"exits\", \n    ];\n    //functions\n    var resetAttempt = function() {\n        setCurrentAttempt({\n            1: null,\n            2: null,\n            3: null,\n            4: null,\n            5: null\n        });\n    };\n    var checkWord = function(word) {\n        var wordIsFinished = true;\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = Object.values(word)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var letter = _step.value;\n                if (!letter) {\n                    wordIsFinished = false;\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        if (wordIsFinished) {\n            setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(attempts).concat([\n                Object.values(word)\n            ]));\n            resetAttempt();\n        }\n    };\n    var pickRandomWord = function(array) {\n        return array[Math.floor(Math.random() * array.length)];\n    };\n    //state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        1: null,\n        2: null,\n        3: null,\n        4: null,\n        5: null\n    }), currentAttempt = ref[0], setCurrentAttempt = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), attempts = ref1[0], setAttempts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pickRandomWord(words)), selectedWord = ref2[0], setSelectedWord = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), playerHasWon = ref3[0], setPlayerHasWon = ref3[1];\n    //side effects\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        document.addEventListener(\"keydown\", function(event) {\n            if (event.code !== \"Enter\") return;\n            checkWord(currentAttempt);\n        });\n    }, [\n        currentAttempt\n    ]);\n    //render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            attempts.length ? attempts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    playerHasWon: playerHasWon,\n                    setPlayerHasWon: setPlayerHasWon,\n                    attempt: item,\n                    word: {\n                        1: selectedWord[0],\n                        2: selectedWord[1],\n                        3: selectedWord[2],\n                        4: selectedWord[3],\n                        5: selectedWord[4]\n                    }\n                }, index, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                    lineNumber: 77,\n                    columnNumber: 13\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            !playerHasWon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_inputComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        word: currentAttempt,\n                        setWord: setCurrentAttempt\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_submitButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        handleClick: function() {\n                            checkWord(currentAttempt);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            playerHasWon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \" row\",\n                    alignItems: \"center\",\n                    margin: \"10px\"\n                },\n                children: \"You win.\"\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 111,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"18eh8+3C8b4uH/0WvE977uK3auw=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxFQUFFO29CQUNMQyxPQUFPLEVBQUUsTUFBTTtvQkFDZkMsYUFBYSxFQUFFLE1BQU07b0JBQ3JCQyxVQUFVLEVBQUUsUUFBUTtvQkFDcEJDLE1BQU0sRUFBRSxNQUFNO2lCQUNmOzBCQUNGLFVBRUQ7Ozs7O29CQUFNOztvQkFFUCxDQUNIO0FBQ0osQ0FBQztHQXBIdUJ0QyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnB1dENvbXBvbmVudFwiO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9zdWJtaXRCdXR0b25cIjtcbmltcG9ydCBQcmV2aW91c0F0dGVtcHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJldmlvdXNBdHRlbXB0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUoKSB7XG4gIC8vd29yZHMgYXJyYXlcbiAgY29uc3Qgd29yZHMgPSBbXG4gICAgXCJoZWxsb1wiLFxuICAgIFwid29ybGRcIixcbiAgICBcImNsb3NlXCIsXG4gICAgXCJjb2Rlc1wiLFxuICAgIFwiY2xlYXJcIixcbiAgICBcImhvdXNlXCIsXG4gICAgXCJtb3VzZVwiLFxuICAgIFwibGVhcm5cIixcbiAgICBcImVycm9yXCIsXG4gICAgXCJiYXNpY1wiLFxuICAgIFwiZXhpc3RcIixcbiAgICBcImV4aXRzXCIsXG4gIF07XG5cbiAgLy9mdW5jdGlvbnNcbiAgY29uc3QgcmVzZXRBdHRlbXB0ID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRBdHRlbXB0KHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgIH0pO1xuICB9O1xuICBjb25zdCBjaGVja1dvcmQgPSAod29yZCkgPT4ge1xuICAgIGxldCB3b3JkSXNGaW5pc2hlZCA9IHRydWU7XG4gICAgZm9yIChsZXQgbGV0dGVyIG9mIE9iamVjdC52YWx1ZXMod29yZCkpIHtcbiAgICAgIGlmICghbGV0dGVyKSB7XG4gICAgICAgIHdvcmRJc0ZpbmlzaGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3b3JkSXNGaW5pc2hlZCkge1xuICAgICAgc2V0QXR0ZW1wdHMoWy4uLmF0dGVtcHRzLCBPYmplY3QudmFsdWVzKHdvcmQpXSk7XG4gICAgICByZXNldEF0dGVtcHQoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBpY2tSYW5kb21Xb3JkID0gKGFycmF5KSA9PiB7XG4gICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldO1xuICB9O1xuXG4gIC8vc3RhdGVcbiAgY29uc3QgW2N1cnJlbnRBdHRlbXB0LCBzZXRDdXJyZW50QXR0ZW1wdF0gPSB1c2VTdGF0ZSh7XG4gICAgMTogbnVsbCxcbiAgICAyOiBudWxsLFxuICAgIDM6IG51bGwsXG4gICAgNDogbnVsbCxcbiAgICA1OiBudWxsLFxuICB9KTtcbiAgY29uc3QgW2F0dGVtcHRzLCBzZXRBdHRlbXB0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFdvcmQsIHNldFNlbGVjdGVkV29yZF0gPSB1c2VTdGF0ZShwaWNrUmFuZG9tV29yZCh3b3JkcykpO1xuICBjb25zdCBbcGxheWVySGFzV29uLCBzZXRQbGF5ZXJIYXNXb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vc2lkZSBlZmZlY3RzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY29kZSAhPT0gXCJFbnRlclwiKSByZXR1cm47XG4gICAgICBjaGVja1dvcmQoY3VycmVudEF0dGVtcHQpO1xuICAgIH0pO1xuICB9LCBbY3VycmVudEF0dGVtcHRdKTtcblxuICAvL3JlbmRlclxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7YXR0ZW1wdHMubGVuZ3RoID8gKFxuICAgICAgICBhdHRlbXB0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQcmV2aW91c0F0dGVtcHRcbiAgICAgICAgICAgICAgcGxheWVySGFzV29uPXtwbGF5ZXJIYXNXb259XG4gICAgICAgICAgICAgIHNldFBsYXllckhhc1dvbj17c2V0UGxheWVySGFzV29ufVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBhdHRlbXB0PXtpdGVtfVxuICAgICAgICAgICAgICB3b3JkPXt7XG4gICAgICAgICAgICAgICAgMTogc2VsZWN0ZWRXb3JkWzBdLFxuICAgICAgICAgICAgICAgIDI6IHNlbGVjdGVkV29yZFsxXSxcbiAgICAgICAgICAgICAgICAzOiBzZWxlY3RlZFdvcmRbMl0sXG4gICAgICAgICAgICAgICAgNDogc2VsZWN0ZWRXb3JkWzNdLFxuICAgICAgICAgICAgICAgIDU6IHNlbGVjdGVkV29yZFs0XSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L1ByZXZpb3VzQXR0ZW1wdD5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgICB7IXBsYXllckhhc1dvbiAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIDxJbnB1dENvbXBvbmVudFxuICAgICAgICAgICAgd29yZD17Y3VycmVudEF0dGVtcHR9XG4gICAgICAgICAgICBzZXRXb3JkPXtzZXRDdXJyZW50QXR0ZW1wdH1cbiAgICAgICAgICA+PC9JbnB1dENvbXBvbmVudD5cbiAgICAgICAgICA8U3VibWl0QnV0dG9uXG4gICAgICAgICAgICBoYW5kbGVDbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjaGVja1dvcmQoY3VycmVudEF0dGVtcHQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+PC9TdWJtaXRCdXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAge3BsYXllckhhc1dvbiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcIiByb3dcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBZb3Ugd2luLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbnB1dENvbXBvbmVudCIsIlN1Ym1pdEJ1dHRvbiIsIlByZXZpb3VzQXR0ZW1wdCIsIkdhbWUiLCJ3b3JkcyIsInJlc2V0QXR0ZW1wdCIsInNldEN1cnJlbnRBdHRlbXB0IiwiY2hlY2tXb3JkIiwid29yZCIsIndvcmRJc0ZpbmlzaGVkIiwiT2JqZWN0IiwidmFsdWVzIiwibGV0dGVyIiwic2V0QXR0ZW1wdHMiLCJhdHRlbXB0cyIsInBpY2tSYW5kb21Xb3JkIiwiYXJyYXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjdXJyZW50QXR0ZW1wdCIsInNlbGVjdGVkV29yZCIsInNldFNlbGVjdGVkV29yZCIsInBsYXllckhhc1dvbiIsInNldFBsYXllckhhc1dvbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29kZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImF0dGVtcHQiLCJzZXRXb3JkIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});