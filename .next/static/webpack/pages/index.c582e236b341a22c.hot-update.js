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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_inputComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/inputComponent */ \"./components/inputComponent.js\");\n/* harmony import */ var _components_submitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/submitButton */ \"./components/submitButton.js\");\n/* harmony import */ var _components_previousAttempt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/previousAttempt */ \"./components/previousAttempt.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Game() {\n    var _this = this;\n    _s();\n    //words array\n    var words = [\n        \"hello\",\n        \"world\",\n        \"close\",\n        \"codes\",\n        \"clear\",\n        \"house\",\n        \"mouse\",\n        \"learn\",\n        \"error\",\n        \"basic\",\n        \"exist\",\n        \"exits\", \n    ];\n    //functions\n    var resetAttempt = function() {\n        setCurrentAttempt({\n            1: null,\n            2: null,\n            3: null,\n            4: null,\n            5: null\n        });\n    };\n    var checkWord = function(word) {\n        var wordIsFinished = true;\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = Object.values(word)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var letter = _step.value;\n                if (!letter) {\n                    wordIsFinished = false;\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        if (wordIsFinished) {\n            setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(attempts).concat([\n                Object.values(word)\n            ]));\n            resetAttempt();\n        }\n    };\n    var pickRandomWord = function(array) {\n        return array[Math.floor(Math.random() * array.length)];\n    };\n    var resetGame = function() {\n        resetAttempt();\n        setSelectedWord(pickRandomWord(words));\n        setAttempts([]);\n        setPlayerHasWon(false);\n    };\n    //state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        1: null,\n        2: null,\n        3: null,\n        4: null,\n        5: null\n    }), currentAttempt = ref[0], setCurrentAttempt = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), attempts = ref1[0], setAttempts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pickRandomWord(words)), selectedWord = ref2[0], setSelectedWord = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), playerHasWon = ref3[0], setPlayerHasWon = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), playerHasLost = ref4[0], setPlayerHasLost = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), limitedToTen = ref5[0], setLimitedToTen = ref5[1];\n    //side effects\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!limitedToTen) {\n            return;\n        }\n        if (attempts.length > 9) {\n            setPlayerHasLost(true);\n        }\n    }, [\n        attempts\n    ]);\n    //render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        onKeyDown: function(e) {\n            console.log(\"e\", e);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Word Game Challenge\"\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                class: \"switch\",\n                children: [\n                    \"Limit to ten\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        value: limitedToTen,\n                        onChange: function() {\n                            setLimitedToTen(!limitedToTen);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        class: \"slider round\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            limitedToTen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"You have \",\n                    10 - attempts.length,\n                    \" moves remaining.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this),\n            attempts.length ? attempts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_previousAttempt__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    playerHasWon: playerHasWon,\n                    setPlayerHasWon: setPlayerHasWon,\n                    attempt: item,\n                    word: {\n                        1: selectedWord[0],\n                        2: selectedWord[1],\n                        3: selectedWord[2],\n                        4: selectedWord[3],\n                        5: selectedWord[4]\n                    }\n                }, index, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                    lineNumber: 112,\n                    columnNumber: 13\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            !playerHasWon && !playerHasLost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_inputComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        word: currentAttempt,\n                        setWord: setCurrentAttempt,\n                        checkWord: checkWord,\n                        currentAttempt: currentAttempt\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_submitButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        handleClick: function() {\n                            checkWord(currentAttempt);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 139,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            playerHasWon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \" row\",\n                    alignItems: \"center\",\n                    margin: \"10px\"\n                },\n                children: [\n                    \"You won in \",\n                    attempts.length,\n                    \" moves!\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        onClick: function() {\n                            resetGame();\n                        },\n                        children: \"Restart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 157,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 148,\n                columnNumber: 9\n            }, this),\n            playerHasLost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \" row\",\n                    alignItems: \"center\",\n                    margin: \"10px\"\n                },\n                children: [\n                    \"Sorry, you ran out of tries!\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        onClick: function() {\n                            resetGame();\n                        },\n                        children: \"Restart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 177,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 168,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(Game, \"DIGbLZReU29GLIVgERc2cbvjoNg=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnRcIjtcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3VibWl0QnV0dG9uXCI7XG5pbXBvcnQgUHJldmlvdXNBdHRlbXB0IGZyb20gXCIuLi9jb21wb25lbnRzL3ByZXZpb3VzQXR0ZW1wdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKCkge1xuICAvL3dvcmRzIGFycmF5XG4gIGNvbnN0IHdvcmRzID0gW1xuICAgIFwiaGVsbG9cIixcbiAgICBcIndvcmxkXCIsXG4gICAgXCJjbG9zZVwiLFxuICAgIFwiY29kZXNcIixcbiAgICBcImNsZWFyXCIsXG4gICAgXCJob3VzZVwiLFxuICAgIFwibW91c2VcIixcbiAgICBcImxlYXJuXCIsXG4gICAgXCJlcnJvclwiLFxuICAgIFwiYmFzaWNcIixcbiAgICBcImV4aXN0XCIsXG4gICAgXCJleGl0c1wiLFxuICBdO1xuXG4gIC8vZnVuY3Rpb25zXG4gIGNvbnN0IHJlc2V0QXR0ZW1wdCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50QXR0ZW1wdCh7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgY2hlY2tXb3JkID0gKHdvcmQpID0+IHtcbiAgICBsZXQgd29yZElzRmluaXNoZWQgPSB0cnVlO1xuICAgIGZvciAobGV0IGxldHRlciBvZiBPYmplY3QudmFsdWVzKHdvcmQpKSB7XG4gICAgICBpZiAoIWxldHRlcikge1xuICAgICAgICB3b3JkSXNGaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod29yZElzRmluaXNoZWQpIHtcbiAgICAgIHNldEF0dGVtcHRzKFsuLi5hdHRlbXB0cywgT2JqZWN0LnZhbHVlcyh3b3JkKV0pO1xuICAgICAgcmVzZXRBdHRlbXB0KCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBwaWNrUmFuZG9tV29yZCA9IChhcnJheSkgPT4ge1xuICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcbiAgfTtcbiAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIHJlc2V0QXR0ZW1wdCgpO1xuICAgIHNldFNlbGVjdGVkV29yZChwaWNrUmFuZG9tV29yZCh3b3JkcykpO1xuICAgIHNldEF0dGVtcHRzKFtdKTtcbiAgICBzZXRQbGF5ZXJIYXNXb24oZmFsc2UpO1xuICB9O1xuXG4gIC8vc3RhdGVcbiAgY29uc3QgW2N1cnJlbnRBdHRlbXB0LCBzZXRDdXJyZW50QXR0ZW1wdF0gPSB1c2VTdGF0ZSh7XG4gICAgMTogbnVsbCxcbiAgICAyOiBudWxsLFxuICAgIDM6IG51bGwsXG4gICAgNDogbnVsbCxcbiAgICA1OiBudWxsLFxuICB9KTtcbiAgY29uc3QgW2F0dGVtcHRzLCBzZXRBdHRlbXB0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFdvcmQsIHNldFNlbGVjdGVkV29yZF0gPSB1c2VTdGF0ZShwaWNrUmFuZG9tV29yZCh3b3JkcykpO1xuICBjb25zdCBbcGxheWVySGFzV29uLCBzZXRQbGF5ZXJIYXNXb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGxheWVySGFzTG9zdCwgc2V0UGxheWVySGFzTG9zdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsaW1pdGVkVG9UZW4sIHNldExpbWl0ZWRUb1Rlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy9zaWRlIGVmZmVjdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxpbWl0ZWRUb1Rlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYXR0ZW1wdHMubGVuZ3RoID4gOSkge1xuICAgICAgc2V0UGxheWVySGFzTG9zdCh0cnVlKTtcbiAgICB9XG4gIH0sIFthdHRlbXB0c10pO1xuXG4gIC8vcmVuZGVyXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICB9fVxuICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVcIiwgZSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxoMj5Xb3JkIEdhbWUgQ2hhbGxlbmdlPC9oMj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInN3aXRjaFwiPlxuICAgICAgICBMaW1pdCB0byB0ZW5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICB2YWx1ZT17bGltaXRlZFRvVGVufVxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRMaW1pdGVkVG9UZW4oIWxpbWl0ZWRUb1Rlbik7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgICAge2xpbWl0ZWRUb1RlbiAmJiAoXG4gICAgICAgIDxoMz5Zb3UgaGF2ZSB7MTAgLSBhdHRlbXB0cy5sZW5ndGh9IG1vdmVzIHJlbWFpbmluZy48L2gzPlxuICAgICAgKX1cbiAgICAgIHthdHRlbXB0cy5sZW5ndGggPyAoXG4gICAgICAgIGF0dGVtcHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByZXZpb3VzQXR0ZW1wdFxuICAgICAgICAgICAgICBwbGF5ZXJIYXNXb249e3BsYXllckhhc1dvbn1cbiAgICAgICAgICAgICAgc2V0UGxheWVySGFzV29uPXtzZXRQbGF5ZXJIYXNXb259XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGF0dGVtcHQ9e2l0ZW19XG4gICAgICAgICAgICAgIHdvcmQ9e3tcbiAgICAgICAgICAgICAgICAxOiBzZWxlY3RlZFdvcmRbMF0sXG4gICAgICAgICAgICAgICAgMjogc2VsZWN0ZWRXb3JkWzFdLFxuICAgICAgICAgICAgICAgIDM6IHNlbGVjdGVkV29yZFsyXSxcbiAgICAgICAgICAgICAgICA0OiBzZWxlY3RlZFdvcmRbM10sXG4gICAgICAgICAgICAgICAgNTogc2VsZWN0ZWRXb3JkWzRdLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvUHJldmlvdXNBdHRlbXB0PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICAgKX1cbiAgICAgIHshcGxheWVySGFzV29uICYmICFwbGF5ZXJIYXNMb3N0ICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPElucHV0Q29tcG9uZW50XG4gICAgICAgICAgICB3b3JkPXtjdXJyZW50QXR0ZW1wdH1cbiAgICAgICAgICAgIHNldFdvcmQ9e3NldEN1cnJlbnRBdHRlbXB0fVxuICAgICAgICAgICAgY2hlY2tXb3JkPXtjaGVja1dvcmR9XG4gICAgICAgICAgICBjdXJyZW50QXR0ZW1wdD17Y3VycmVudEF0dGVtcHR9XG4gICAgICAgICAgPjwvSW5wdXRDb21wb25lbnQ+XG4gICAgICAgICAgPFN1Ym1pdEJ1dHRvblxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY2hlY2tXb3JkKGN1cnJlbnRBdHRlbXB0KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPjwvU3VibWl0QnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIHtwbGF5ZXJIYXNXb24gJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCIgcm93XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgWW91IHdvbiBpbiB7YXR0ZW1wdHMubGVuZ3RofSBtb3ZlcyF7XCIgXCJ9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlc3RhcnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge3BsYXllckhhc0xvc3QgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCIgcm93XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU29ycnksIHlvdSByYW4gb3V0IG9mIHRyaWVzIVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZXN0YXJ0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIklucHV0Q29tcG9uZW50IiwiU3VibWl0QnV0dG9uIiwiUHJldmlvdXNBdHRlbXB0IiwiR2FtZSIsIndvcmRzIiwicmVzZXRBdHRlbXB0Iiwic2V0Q3VycmVudEF0dGVtcHQiLCJjaGVja1dvcmQiLCJ3b3JkIiwid29yZElzRmluaXNoZWQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZXR0ZXIiLCJzZXRBdHRlbXB0cyIsImF0dGVtcHRzIiwicGlja1JhbmRvbVdvcmQiLCJhcnJheSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInJlc2V0R2FtZSIsInNldFNlbGVjdGVkV29yZCIsInNldFBsYXllckhhc1dvbiIsImN1cnJlbnRBdHRlbXB0Iiwic2VsZWN0ZWRXb3JkIiwicGxheWVySGFzV29uIiwicGxheWVySGFzTG9zdCIsInNldFBsYXllckhhc0xvc3QiLCJsaW1pdGVkVG9UZW4iLCJzZXRMaW1pdGVkVG9UZW4iLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJvbktleURvd24iLCJlIiwiY29uc29sZSIsImxvZyIsImgyIiwibGFiZWwiLCJjbGFzcyIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJzcGFuIiwiaDMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJhdHRlbXB0Iiwic2V0V29yZCIsImhhbmRsZUNsaWNrIiwibWFyZ2luIiwiYnV0dG9uIiwibWFyZ2luTGVmdCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});