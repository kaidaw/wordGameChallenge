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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@12.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_inputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/inputComponent */ \"./components/inputComponent.js\");\n/* harmony import */ var _components_submitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/submitButton */ \"./components/submitButton.js\");\n/* harmony import */ var _components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/previousAttempt */ \"./components/previousAttempt.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Game() {\n    var _this = this;\n    _s();\n    //words array\n    var words = [\n        \"hello\",\n        \"world\",\n        \"close\",\n        \"codes\",\n        \"clear\",\n        \"house\",\n        \"mouse\",\n        \"learn\",\n        \"error\",\n        \"basic\",\n        \"exist\",\n        \"exits\", \n    ];\n    //functions\n    var resetAttempt = function() {\n        setCurrentAttempt({\n            1: null,\n            2: null,\n            3: null,\n            4: null,\n            5: null\n        });\n    };\n    var checkWord = function(word) {\n        var wordIsFinished = true;\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = Object.values(word)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var letter = _step.value;\n                if (!letter) {\n                    wordIsFinished = false;\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        if (wordIsFinished) {\n            setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(attempts).concat([\n                Object.values(word)\n            ]));\n            resetAttempt();\n        }\n    };\n    var pickRandomWord = function(array) {\n        return array[Math.floor(Math.random() * array.length)];\n    };\n    var resetGame = function() {\n        resetAttempt();\n        setSelectedWord(pickRandomWord(words));\n        setAttempts([]);\n    };\n    //state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        1: null,\n        2: null,\n        3: null,\n        4: null,\n        5: null\n    }), currentAttempt = ref[0], setCurrentAttempt = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), attempts = ref1[0], setAttempts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pickRandomWord(words)), selectedWord = ref2[0], setSelectedWord = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), playerHasWon = ref3[0], setPlayerHasWon = ref3[1];\n    //side effects\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        document.addEventListener(\"keydown\", function(event) {\n            if (event.code !== \"Enter\") return;\n            checkWord(currentAttempt);\n        });\n    }, [\n        currentAttempt\n    ]);\n    //render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            attempts.length ? attempts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    playerHasWon: playerHasWon,\n                    setPlayerHasWon: setPlayerHasWon,\n                    attempt: item,\n                    word: {\n                        1: selectedWord[0],\n                        2: selectedWord[1],\n                        3: selectedWord[2],\n                        4: selectedWord[3],\n                        5: selectedWord[4]\n                    }\n                }, index, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                    lineNumber: 82,\n                    columnNumber: 13\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            !playerHasWon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_inputComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        word: currentAttempt,\n                        setWord: setCurrentAttempt\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_submitButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        handleClick: function() {\n                            checkWord(currentAttempt);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            playerHasWon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \" row\",\n                    alignItems: \"center\",\n                    margin: \"10px\"\n                },\n                children: [\n                    \"You won in \",\n                    attempts.length,\n                    \" moves!\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        onClick: function() {\n                            resetGame();\n                        },\n                        children: \"Restart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"18eh8+3C8b4uH/0WvE977uK3auw=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEIsOERBQUNMLGdFQUFZO3dCQUNYbUMsV0FBVyxFQUFFLFdBQU07NEJBQ2pCN0IsU0FBUyxDQUFDZ0IsY0FBYyxDQUFDLENBQUM7d0JBQzVCLENBQUM7Ozs7OzRCQUNhOzs0QkFDZjtZQUdKRSxZQUFZLGtCQUNYLDhEQUFDWSxLQUFHO2dCQUNGQyxLQUFLLEVBQUU7b0JBQ0xDLE9BQU8sRUFBRSxNQUFNO29CQUNmQyxhQUFhLEVBQUUsTUFBTTtvQkFDckJDLFVBQVUsRUFBRSxRQUFRO29CQUNwQkMsTUFBTSxFQUFFLE1BQU07aUJBQ2Y7O29CQUNGLGFBQ1k7b0JBQUM1QixRQUFRLENBQUNNLE1BQU07b0JBQUMsU0FBTztvQkFBQyxHQUFHO2tDQUN2Qyw4REFBQ3VCLFFBQU07d0JBQ0xMLEtBQUssRUFBRTs0QkFBRU0sVUFBVSxFQUFFLE1BQU07eUJBQUU7d0JBQzdCQyxPQUFPLEVBQUUsV0FBTTs0QkFDYnhCLFNBQVMsRUFBRSxDQUFDO3dCQUNkLENBQUM7a0NBQ0YsU0FFRDs7Ozs7NEJBQVM7Ozs7OztvQkFDTDs7b0JBRVAsQ0FDSDtBQUNKLENBQUM7R0FqSXVCbEIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnRcIjtcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3VibWl0QnV0dG9uXCI7XG5pbXBvcnQgUHJldmlvdXNBdHRlbXB0IGZyb20gXCIuLi9jb21wb25lbnRzL3ByZXZpb3VzQXR0ZW1wdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKCkge1xuICAvL3dvcmRzIGFycmF5XG4gIGNvbnN0IHdvcmRzID0gW1xuICAgIFwiaGVsbG9cIixcbiAgICBcIndvcmxkXCIsXG4gICAgXCJjbG9zZVwiLFxuICAgIFwiY29kZXNcIixcbiAgICBcImNsZWFyXCIsXG4gICAgXCJob3VzZVwiLFxuICAgIFwibW91c2VcIixcbiAgICBcImxlYXJuXCIsXG4gICAgXCJlcnJvclwiLFxuICAgIFwiYmFzaWNcIixcbiAgICBcImV4aXN0XCIsXG4gICAgXCJleGl0c1wiLFxuICBdO1xuXG4gIC8vZnVuY3Rpb25zXG4gIGNvbnN0IHJlc2V0QXR0ZW1wdCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50QXR0ZW1wdCh7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgY2hlY2tXb3JkID0gKHdvcmQpID0+IHtcbiAgICBsZXQgd29yZElzRmluaXNoZWQgPSB0cnVlO1xuICAgIGZvciAobGV0IGxldHRlciBvZiBPYmplY3QudmFsdWVzKHdvcmQpKSB7XG4gICAgICBpZiAoIWxldHRlcikge1xuICAgICAgICB3b3JkSXNGaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod29yZElzRmluaXNoZWQpIHtcbiAgICAgIHNldEF0dGVtcHRzKFsuLi5hdHRlbXB0cywgT2JqZWN0LnZhbHVlcyh3b3JkKV0pO1xuICAgICAgcmVzZXRBdHRlbXB0KCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBwaWNrUmFuZG9tV29yZCA9IChhcnJheSkgPT4ge1xuICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcbiAgfTtcbiAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIHJlc2V0QXR0ZW1wdCgpO1xuICAgIHNldFNlbGVjdGVkV29yZChwaWNrUmFuZG9tV29yZCh3b3JkcykpO1xuICAgIHNldEF0dGVtcHRzKFtdKTtcbiAgfTtcblxuICAvL3N0YXRlXG4gIGNvbnN0IFtjdXJyZW50QXR0ZW1wdCwgc2V0Q3VycmVudEF0dGVtcHRdID0gdXNlU3RhdGUoe1xuICAgIDE6IG51bGwsXG4gICAgMjogbnVsbCxcbiAgICAzOiBudWxsLFxuICAgIDQ6IG51bGwsXG4gICAgNTogbnVsbCxcbiAgfSk7XG4gIGNvbnN0IFthdHRlbXB0cywgc2V0QXR0ZW1wdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRXb3JkLCBzZXRTZWxlY3RlZFdvcmRdID0gdXNlU3RhdGUocGlja1JhbmRvbVdvcmQod29yZHMpKTtcbiAgY29uc3QgW3BsYXllckhhc1dvbiwgc2V0UGxheWVySGFzV29uXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvL3NpZGUgZWZmZWN0c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmNvZGUgIT09IFwiRW50ZXJcIikgcmV0dXJuO1xuICAgICAgY2hlY2tXb3JkKGN1cnJlbnRBdHRlbXB0KTtcbiAgICB9KTtcbiAgfSwgW2N1cnJlbnRBdHRlbXB0XSk7XG5cbiAgLy9yZW5kZXJcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2F0dGVtcHRzLmxlbmd0aCA/IChcbiAgICAgICAgYXR0ZW1wdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJldmlvdXNBdHRlbXB0XG4gICAgICAgICAgICAgIHBsYXllckhhc1dvbj17cGxheWVySGFzV29ufVxuICAgICAgICAgICAgICBzZXRQbGF5ZXJIYXNXb249e3NldFBsYXllckhhc1dvbn1cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgYXR0ZW1wdD17aXRlbX1cbiAgICAgICAgICAgICAgd29yZD17e1xuICAgICAgICAgICAgICAgIDE6IHNlbGVjdGVkV29yZFswXSxcbiAgICAgICAgICAgICAgICAyOiBzZWxlY3RlZFdvcmRbMV0sXG4gICAgICAgICAgICAgICAgMzogc2VsZWN0ZWRXb3JkWzJdLFxuICAgICAgICAgICAgICAgIDQ6IHNlbGVjdGVkV29yZFszXSxcbiAgICAgICAgICAgICAgICA1OiBzZWxlY3RlZFdvcmRbNF0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9QcmV2aW91c0F0dGVtcHQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgICAgeyFwbGF5ZXJIYXNXb24gJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICA8SW5wdXRDb21wb25lbnRcbiAgICAgICAgICAgIHdvcmQ9e2N1cnJlbnRBdHRlbXB0fVxuICAgICAgICAgICAgc2V0V29yZD17c2V0Q3VycmVudEF0dGVtcHR9XG4gICAgICAgICAgPjwvSW5wdXRDb21wb25lbnQ+XG4gICAgICAgICAgPFN1Ym1pdEJ1dHRvblxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY2hlY2tXb3JkKGN1cnJlbnRBdHRlbXB0KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPjwvU3VibWl0QnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIHtwbGF5ZXJIYXNXb24gJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCIgcm93XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgWW91IHdvbiBpbiB7YXR0ZW1wdHMubGVuZ3RofSBtb3ZlcyF7XCIgXCJ9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlc3RhcnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXRDb21wb25lbnQiLCJTdWJtaXRCdXR0b24iLCJQcmV2aW91c0F0dGVtcHQiLCJHYW1lIiwid29yZHMiLCJyZXNldEF0dGVtcHQiLCJzZXRDdXJyZW50QXR0ZW1wdCIsImNoZWNrV29yZCIsIndvcmQiLCJ3b3JkSXNGaW5pc2hlZCIsIk9iamVjdCIsInZhbHVlcyIsImxldHRlciIsInNldEF0dGVtcHRzIiwiYXR0ZW1wdHMiLCJwaWNrUmFuZG9tV29yZCIsImFycmF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicmVzZXRHYW1lIiwic2V0U2VsZWN0ZWRXb3JkIiwiY3VycmVudEF0dGVtcHQiLCJzZWxlY3RlZFdvcmQiLCJwbGF5ZXJIYXNXb24iLCJzZXRQbGF5ZXJIYXNXb24iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJhdHRlbXB0Iiwic2V0V29yZCIsImhhbmRsZUNsaWNrIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJidXR0b24iLCJtYXJnaW5MZWZ0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});