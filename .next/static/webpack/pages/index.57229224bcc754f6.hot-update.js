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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_inputComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/inputComponent */ \"./components/inputComponent.js\");\n/* harmony import */ var _components_submitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/submitButton */ \"./components/submitButton.js\");\n/* harmony import */ var _components_previousAttempt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/previousAttempt */ \"./components/previousAttempt.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Game() {\n    var _this = this;\n    _s();\n    //words array\n    var words = [\n        \"hello\",\n        \"world\",\n        \"close\",\n        \"codes\",\n        \"clear\",\n        \"house\",\n        \"mouse\",\n        \"learn\",\n        \"error\",\n        \"basic\",\n        \"exist\",\n        \"exits\", \n    ];\n    //functions\n    var resetAttempt = function() {\n        setCurrentAttempt({\n            1: null,\n            2: null,\n            3: null,\n            4: null,\n            5: null\n        });\n    };\n    var checkWord = function(word) {\n        var wordIsFinished = true;\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = Object.values(word)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var letter = _step.value;\n                if (!letter) {\n                    wordIsFinished = false;\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        if (wordIsFinished) {\n            setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(attempts).concat([\n                Object.values(word)\n            ]));\n            resetAttempt();\n        }\n    };\n    var pickRandomWord = function(array) {\n        return array[Math.floor(Math.random() * array.length)];\n    };\n    var resetGame = function() {\n        resetAttempt();\n        setSelectedWord(pickRandomWord(words));\n        setAttempts([]);\n        setPlayerHasWon(false);\n    };\n    //side effects\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (attempts.length > 10) {\n            setPlayerHasLost(true);\n        }\n    }, [\n        attempts\n    ]);\n    //state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        1: null,\n        2: null,\n        3: null,\n        4: null,\n        5: null\n    }), currentAttempt = ref[0], setCurrentAttempt = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), attempts = ref1[0], setAttempts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pickRandomWord(words)), selectedWord = ref2[0], setSelectedWord = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), playerHasWon = ref3[0], setPlayerHasWon = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), playerHasLost = ref4[0], setPlayerHasLost = ref4[1];\n    //render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        onKeyDown: function(e) {\n            console.log(\"e\", e);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Word Game Challenge\"\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            attempts.length ? attempts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_previousAttempt__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    playerHasWon: playerHasWon,\n                    setPlayerHasWon: setPlayerHasWon,\n                    attempt: item,\n                    word: {\n                        1: selectedWord[0],\n                        2: selectedWord[1],\n                        3: selectedWord[2],\n                        4: selectedWord[3],\n                        5: selectedWord[4]\n                    }\n                }, index, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                    lineNumber: 93,\n                    columnNumber: 13\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            !playerHasWon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_inputComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        word: currentAttempt,\n                        setWord: setCurrentAttempt,\n                        checkWord: checkWord,\n                        currentAttempt: currentAttempt\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_submitButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        handleClick: function() {\n                            checkWord(currentAttempt);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            playerHasWon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \" row\",\n                    alignItems: \"center\",\n                    margin: \"10px\"\n                },\n                children: [\n                    \"You won in \",\n                    attempts.length,\n                    \" moves!\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        onClick: function() {\n                            resetGame();\n                        },\n                        children: \"Restart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 138,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 129,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_s(Game, \"eOXmf+tT4aEZtB7khcd20XIIxm4=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FoSnVCbEIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2lucHV0Q29tcG9uZW50XCI7XG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3N1Ym1pdEJ1dHRvblwiO1xuaW1wb3J0IFByZXZpb3VzQXR0ZW1wdCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmV2aW91c0F0dGVtcHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgLy93b3JkcyBhcnJheVxuICBjb25zdCB3b3JkcyA9IFtcbiAgICBcImhlbGxvXCIsXG4gICAgXCJ3b3JsZFwiLFxuICAgIFwiY2xvc2VcIixcbiAgICBcImNvZGVzXCIsXG4gICAgXCJjbGVhclwiLFxuICAgIFwiaG91c2VcIixcbiAgICBcIm1vdXNlXCIsXG4gICAgXCJsZWFyblwiLFxuICAgIFwiZXJyb3JcIixcbiAgICBcImJhc2ljXCIsXG4gICAgXCJleGlzdFwiLFxuICAgIFwiZXhpdHNcIixcbiAgXTtcblxuICAvL2Z1bmN0aW9uc1xuICBjb25zdCByZXNldEF0dGVtcHQgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEF0dGVtcHQoe1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGNoZWNrV29yZCA9ICh3b3JkKSA9PiB7XG4gICAgbGV0IHdvcmRJc0ZpbmlzaGVkID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBsZXR0ZXIgb2YgT2JqZWN0LnZhbHVlcyh3b3JkKSkge1xuICAgICAgaWYgKCFsZXR0ZXIpIHtcbiAgICAgICAgd29yZElzRmluaXNoZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdvcmRJc0ZpbmlzaGVkKSB7XG4gICAgICBzZXRBdHRlbXB0cyhbLi4uYXR0ZW1wdHMsIE9iamVjdC52YWx1ZXMod29yZCldKTtcbiAgICAgIHJlc2V0QXR0ZW1wdCgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcGlja1JhbmRvbVdvcmQgPSAoYXJyYXkpID0+IHtcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG4gIH07XG4gIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICByZXNldEF0dGVtcHQoKTtcbiAgICBzZXRTZWxlY3RlZFdvcmQocGlja1JhbmRvbVdvcmQod29yZHMpKTtcbiAgICBzZXRBdHRlbXB0cyhbXSk7XG4gICAgc2V0UGxheWVySGFzV29uKGZhbHNlKTtcbiAgfTtcbiAgLy9zaWRlIGVmZmVjdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXR0ZW1wdHMubGVuZ3RoID4gMTApIHtcbiAgICAgIHNldFBsYXllckhhc0xvc3QodHJ1ZSk7XG4gICAgfVxuICB9LCBbYXR0ZW1wdHNdKTtcblxuICAvL3N0YXRlXG4gIGNvbnN0IFtjdXJyZW50QXR0ZW1wdCwgc2V0Q3VycmVudEF0dGVtcHRdID0gdXNlU3RhdGUoe1xuICAgIDE6IG51bGwsXG4gICAgMjogbnVsbCxcbiAgICAzOiBudWxsLFxuICAgIDQ6IG51bGwsXG4gICAgNTogbnVsbCxcbiAgfSk7XG4gIGNvbnN0IFthdHRlbXB0cywgc2V0QXR0ZW1wdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRXb3JkLCBzZXRTZWxlY3RlZFdvcmRdID0gdXNlU3RhdGUocGlja1JhbmRvbVdvcmQod29yZHMpKTtcbiAgY29uc3QgW3BsYXllckhhc1dvbiwgc2V0UGxheWVySGFzV29uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BsYXllckhhc0xvc3QsIHNldFBsYXllckhhc0xvc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vcmVuZGVyXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICB9fVxuICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVcIiwgZSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxoMj5Xb3JkIEdhbWUgQ2hhbGxlbmdlPC9oMj5cbiAgICAgIHthdHRlbXB0cy5sZW5ndGggPyAoXG4gICAgICAgIGF0dGVtcHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByZXZpb3VzQXR0ZW1wdFxuICAgICAgICAgICAgICBwbGF5ZXJIYXNXb249e3BsYXllckhhc1dvbn1cbiAgICAgICAgICAgICAgc2V0UGxheWVySGFzV29uPXtzZXRQbGF5ZXJIYXNXb259XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGF0dGVtcHQ9e2l0ZW19XG4gICAgICAgICAgICAgIHdvcmQ9e3tcbiAgICAgICAgICAgICAgICAxOiBzZWxlY3RlZFdvcmRbMF0sXG4gICAgICAgICAgICAgICAgMjogc2VsZWN0ZWRXb3JkWzFdLFxuICAgICAgICAgICAgICAgIDM6IHNlbGVjdGVkV29yZFsyXSxcbiAgICAgICAgICAgICAgICA0OiBzZWxlY3RlZFdvcmRbM10sXG4gICAgICAgICAgICAgICAgNTogc2VsZWN0ZWRXb3JkWzRdLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvUHJldmlvdXNBdHRlbXB0PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICAgKX1cbiAgICAgIHshcGxheWVySGFzV29uICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPElucHV0Q29tcG9uZW50XG4gICAgICAgICAgICB3b3JkPXtjdXJyZW50QXR0ZW1wdH1cbiAgICAgICAgICAgIHNldFdvcmQ9e3NldEN1cnJlbnRBdHRlbXB0fVxuICAgICAgICAgICAgY2hlY2tXb3JkPXtjaGVja1dvcmR9XG4gICAgICAgICAgICBjdXJyZW50QXR0ZW1wdD17Y3VycmVudEF0dGVtcHR9XG4gICAgICAgICAgPjwvSW5wdXRDb21wb25lbnQ+XG4gICAgICAgICAgPFN1Ym1pdEJ1dHRvblxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY2hlY2tXb3JkKGN1cnJlbnRBdHRlbXB0KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPjwvU3VibWl0QnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIHtwbGF5ZXJIYXNXb24gJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCIgcm93XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgWW91IHdvbiBpbiB7YXR0ZW1wdHMubGVuZ3RofSBtb3ZlcyF7XCIgXCJ9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlc3RhcnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXRDb21wb25lbnQiLCJTdWJtaXRCdXR0b24iLCJQcmV2aW91c0F0dGVtcHQiLCJHYW1lIiwid29yZHMiLCJyZXNldEF0dGVtcHQiLCJzZXRDdXJyZW50QXR0ZW1wdCIsImNoZWNrV29yZCIsIndvcmQiLCJ3b3JkSXNGaW5pc2hlZCIsIk9iamVjdCIsInZhbHVlcyIsImxldHRlciIsInNldEF0dGVtcHRzIiwiYXR0ZW1wdHMiLCJwaWNrUmFuZG9tV29yZCIsImFycmF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicmVzZXRHYW1lIiwic2V0U2VsZWN0ZWRXb3JkIiwic2V0UGxheWVySGFzV29uIiwic2V0UGxheWVySGFzTG9zdCIsImN1cnJlbnRBdHRlbXB0Iiwic2VsZWN0ZWRXb3JkIiwicGxheWVySGFzV29uIiwicGxheWVySGFzTG9zdCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm9uS2V5RG93biIsImUiLCJjb25zb2xlIiwibG9nIiwiaDIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJhdHRlbXB0Iiwic2V0V29yZCIsImhhbmRsZUNsaWNrIiwibWFyZ2luIiwiYnV0dG9uIiwibWFyZ2luTGVmdCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});