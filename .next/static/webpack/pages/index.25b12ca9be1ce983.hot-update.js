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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_inputComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/inputComponent */ \"./components/inputComponent.js\");\n/* harmony import */ var _components_submitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/submitButton */ \"./components/submitButton.js\");\n/* harmony import */ var _components_previousAttempt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/previousAttempt */ \"./components/previousAttempt.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Game() {\n    var _this = this;\n    _s();\n    //words array\n    var words = [\n        \"hello\",\n        \"world\",\n        \"close\",\n        \"codes\",\n        \"clear\",\n        \"house\",\n        \"mouse\",\n        \"learn\",\n        \"error\",\n        \"basic\",\n        \"exist\",\n        \"exits\", \n    ];\n    //functions\n    var resetAttempt = function() {\n        setCurrentAttempt({\n            1: null,\n            2: null,\n            3: null,\n            4: null,\n            5: null\n        });\n    };\n    var checkWord = function(word) {\n        var wordIsFinished = true;\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = Object.values(word)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var letter = _step.value;\n                if (!letter) {\n                    wordIsFinished = false;\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        if (wordIsFinished) {\n            setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(attempts).concat([\n                Object.values(word)\n            ]));\n            resetAttempt();\n        }\n    };\n    var pickRandomWord = function(array) {\n        return array[Math.floor(Math.random() * array.length)];\n    };\n    var resetGame = function() {\n        resetAttempt();\n        setSelectedWord(pickRandomWord(words));\n        setAttempts([]);\n        setPlayerHasWon(false);\n    };\n    //state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        1: null,\n        2: null,\n        3: null,\n        4: null,\n        5: null\n    }), currentAttempt = ref[0], setCurrentAttempt = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), attempts = ref1[0], setAttempts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pickRandomWord(words)), selectedWord = ref2[0], setSelectedWord = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), playerHasWon = ref3[0], setPlayerHasWon = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), playerHasLost = ref4[0], setPlayerHasLost = ref4[1];\n    //side effects\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (attempts.length > 2) {\n            setPlayerHasLost(true);\n        }\n    }, [\n        attempts\n    ]);\n    //render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        onKeyDown: function(e) {\n            console.log(\"e\", e);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Word Game Challenge\"\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            attempts.length ? attempts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_previousAttempt__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    playerHasWon: playerHasWon,\n                    setPlayerHasWon: setPlayerHasWon,\n                    attempt: item,\n                    word: {\n                        1: selectedWord[0],\n                        2: selectedWord[1],\n                        3: selectedWord[2],\n                        4: selectedWord[3],\n                        5: selectedWord[4]\n                    }\n                }, index, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            !playerHasWon && !playerHasLost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_inputComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        word: currentAttempt,\n                        setWord: setCurrentAttempt,\n                        checkWord: checkWord,\n                        currentAttempt: currentAttempt\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_submitButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        handleClick: function() {\n                            checkWord(currentAttempt);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            playerHasWon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \" row\",\n                    alignItems: \"center\",\n                    margin: \"10px\"\n                },\n                children: [\n                    \"You won in \",\n                    attempts.length,\n                    \" moves!\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        onClick: function() {\n                            resetGame();\n                        },\n                        children: \"Restart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 139,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 130,\n                columnNumber: 9\n            }, this),\n            playerHasLost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \" row\",\n                    alignItems: \"center\",\n                    margin: \"10px\"\n                },\n                children: [\n                    \"Sorry, you ran out of tries!\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        onClick: function() {\n                            resetGame();\n                        },\n                        children: \"Restart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 159,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 150,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(Game, \"+DwFVgpiMp1QtUA+WJaaThEB94I=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtCQUNaLDhEQUFDRSxLQUFHO2dCQUNGQyxLQUFLLEVBQUU7b0JBQ0xHLE9BQU8sRUFBRSxNQUFNO29CQUNmQyxhQUFhLEVBQUUsTUFBTTtvQkFDckJFLFVBQVUsRUFBRSxRQUFRO29CQUNwQlksTUFBTSxFQUFFLE1BQU07aUJBQ2Y7O29CQUNGLDhCQUVDO2tDQUFBLDhEQUFDQyxRQUFNO3dCQUNMbkIsS0FBSyxFQUFFOzRCQUFFb0IsVUFBVSxFQUFFLE1BQU07eUJBQUU7d0JBQzdCQyxPQUFPLEVBQUUsV0FBTTs0QkFDYjlCLFNBQVMsRUFBRSxDQUFDO3dCQUNkLENBQUM7a0NBQ0YsU0FFRDs7Ozs7NEJBQVM7Ozs7OztvQkFDTDs7Ozs7O1lBRUosQ0FDTjtBQUNKLENBQUM7R0FyS3VCbEIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2lucHV0Q29tcG9uZW50XCI7XG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3N1Ym1pdEJ1dHRvblwiO1xuaW1wb3J0IFByZXZpb3VzQXR0ZW1wdCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmV2aW91c0F0dGVtcHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgLy93b3JkcyBhcnJheVxuICBjb25zdCB3b3JkcyA9IFtcbiAgICBcImhlbGxvXCIsXG4gICAgXCJ3b3JsZFwiLFxuICAgIFwiY2xvc2VcIixcbiAgICBcImNvZGVzXCIsXG4gICAgXCJjbGVhclwiLFxuICAgIFwiaG91c2VcIixcbiAgICBcIm1vdXNlXCIsXG4gICAgXCJsZWFyblwiLFxuICAgIFwiZXJyb3JcIixcbiAgICBcImJhc2ljXCIsXG4gICAgXCJleGlzdFwiLFxuICAgIFwiZXhpdHNcIixcbiAgXTtcblxuICAvL2Z1bmN0aW9uc1xuICBjb25zdCByZXNldEF0dGVtcHQgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEF0dGVtcHQoe1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGNoZWNrV29yZCA9ICh3b3JkKSA9PiB7XG4gICAgbGV0IHdvcmRJc0ZpbmlzaGVkID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBsZXR0ZXIgb2YgT2JqZWN0LnZhbHVlcyh3b3JkKSkge1xuICAgICAgaWYgKCFsZXR0ZXIpIHtcbiAgICAgICAgd29yZElzRmluaXNoZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdvcmRJc0ZpbmlzaGVkKSB7XG4gICAgICBzZXRBdHRlbXB0cyhbLi4uYXR0ZW1wdHMsIE9iamVjdC52YWx1ZXMod29yZCldKTtcbiAgICAgIHJlc2V0QXR0ZW1wdCgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcGlja1JhbmRvbVdvcmQgPSAoYXJyYXkpID0+IHtcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG4gIH07XG4gIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICByZXNldEF0dGVtcHQoKTtcbiAgICBzZXRTZWxlY3RlZFdvcmQocGlja1JhbmRvbVdvcmQod29yZHMpKTtcbiAgICBzZXRBdHRlbXB0cyhbXSk7XG4gICAgc2V0UGxheWVySGFzV29uKGZhbHNlKTtcbiAgfTtcblxuICAvL3N0YXRlXG4gIGNvbnN0IFtjdXJyZW50QXR0ZW1wdCwgc2V0Q3VycmVudEF0dGVtcHRdID0gdXNlU3RhdGUoe1xuICAgIDE6IG51bGwsXG4gICAgMjogbnVsbCxcbiAgICAzOiBudWxsLFxuICAgIDQ6IG51bGwsXG4gICAgNTogbnVsbCxcbiAgfSk7XG4gIGNvbnN0IFthdHRlbXB0cywgc2V0QXR0ZW1wdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRXb3JkLCBzZXRTZWxlY3RlZFdvcmRdID0gdXNlU3RhdGUocGlja1JhbmRvbVdvcmQod29yZHMpKTtcbiAgY29uc3QgW3BsYXllckhhc1dvbiwgc2V0UGxheWVySGFzV29uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BsYXllckhhc0xvc3QsIHNldFBsYXllckhhc0xvc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vc2lkZSBlZmZlY3RzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGF0dGVtcHRzLmxlbmd0aCA+IDIpIHtcbiAgICAgIHNldFBsYXllckhhc0xvc3QodHJ1ZSk7XG4gICAgfVxuICB9LCBbYXR0ZW1wdHNdKTtcblxuICAvL3JlbmRlclxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgfX1cbiAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlXCIsIGUpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8aDI+V29yZCBHYW1lIENoYWxsZW5nZTwvaDI+XG4gICAgICB7YXR0ZW1wdHMubGVuZ3RoID8gKFxuICAgICAgICBhdHRlbXB0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQcmV2aW91c0F0dGVtcHRcbiAgICAgICAgICAgICAgcGxheWVySGFzV29uPXtwbGF5ZXJIYXNXb259XG4gICAgICAgICAgICAgIHNldFBsYXllckhhc1dvbj17c2V0UGxheWVySGFzV29ufVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBhdHRlbXB0PXtpdGVtfVxuICAgICAgICAgICAgICB3b3JkPXt7XG4gICAgICAgICAgICAgICAgMTogc2VsZWN0ZWRXb3JkWzBdLFxuICAgICAgICAgICAgICAgIDI6IHNlbGVjdGVkV29yZFsxXSxcbiAgICAgICAgICAgICAgICAzOiBzZWxlY3RlZFdvcmRbMl0sXG4gICAgICAgICAgICAgICAgNDogc2VsZWN0ZWRXb3JkWzNdLFxuICAgICAgICAgICAgICAgIDU6IHNlbGVjdGVkV29yZFs0XSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L1ByZXZpb3VzQXR0ZW1wdD5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgICB7IXBsYXllckhhc1dvbiAmJiAhcGxheWVySGFzTG9zdCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIDxJbnB1dENvbXBvbmVudFxuICAgICAgICAgICAgd29yZD17Y3VycmVudEF0dGVtcHR9XG4gICAgICAgICAgICBzZXRXb3JkPXtzZXRDdXJyZW50QXR0ZW1wdH1cbiAgICAgICAgICAgIGNoZWNrV29yZD17Y2hlY2tXb3JkfVxuICAgICAgICAgICAgY3VycmVudEF0dGVtcHQ9e2N1cnJlbnRBdHRlbXB0fVxuICAgICAgICAgID48L0lucHV0Q29tcG9uZW50PlxuICAgICAgICAgIDxTdWJtaXRCdXR0b25cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNoZWNrV29yZChjdXJyZW50QXR0ZW1wdCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID48L1N1Ym1pdEJ1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICB7cGxheWVySGFzV29uICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiIHJvd1wiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFlvdSB3b24gaW4ge2F0dGVtcHRzLmxlbmd0aH0gbW92ZXMhe1wiIFwifVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZXN0YXJ0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtwbGF5ZXJIYXNMb3N0ICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiIHJvd1wiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNvcnJ5LCB5b3UgcmFuIG91dCBvZiB0cmllcyFcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICByZXNldEdhbWUoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVzdGFydFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbnB1dENvbXBvbmVudCIsIlN1Ym1pdEJ1dHRvbiIsIlByZXZpb3VzQXR0ZW1wdCIsIkdhbWUiLCJ3b3JkcyIsInJlc2V0QXR0ZW1wdCIsInNldEN1cnJlbnRBdHRlbXB0IiwiY2hlY2tXb3JkIiwid29yZCIsIndvcmRJc0ZpbmlzaGVkIiwiT2JqZWN0IiwidmFsdWVzIiwibGV0dGVyIiwic2V0QXR0ZW1wdHMiLCJhdHRlbXB0cyIsInBpY2tSYW5kb21Xb3JkIiwiYXJyYXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJyZXNldEdhbWUiLCJzZXRTZWxlY3RlZFdvcmQiLCJzZXRQbGF5ZXJIYXNXb24iLCJjdXJyZW50QXR0ZW1wdCIsInNlbGVjdGVkV29yZCIsInBsYXllckhhc1dvbiIsInBsYXllckhhc0xvc3QiLCJzZXRQbGF5ZXJIYXNMb3N0IiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwib25LZXlEb3duIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJoMiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImF0dGVtcHQiLCJzZXRXb3JkIiwiaGFuZGxlQ2xpY2siLCJtYXJnaW4iLCJidXR0b24iLCJtYXJnaW5MZWZ0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});