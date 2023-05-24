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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_inputComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/inputComponent */ \"./components/inputComponent.js\");\n/* harmony import */ var _components_submitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/submitButton */ \"./components/submitButton.js\");\n/* harmony import */ var _components_previousAttempt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/previousAttempt */ \"./components/previousAttempt.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Game() {\n    var _this = this;\n    _s();\n    //words array\n    var words = [\n        \"hello\",\n        \"world\",\n        \"close\",\n        \"codes\",\n        \"clear\",\n        \"house\",\n        \"mouse\",\n        \"learn\",\n        \"error\",\n        \"basic\",\n        \"exist\",\n        \"exits\", \n    ];\n    //functions\n    var resetAttempt = function() {\n        setCurrentAttempt({\n            1: null,\n            2: null,\n            3: null,\n            4: null,\n            5: null\n        });\n    };\n    var checkWord = function(word) {\n        var wordIsFinished = true;\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = Object.values(word)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var letter1 = _step.value;\n                if (!letter1) {\n                    wordIsFinished = false;\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        if (wordIsFinished) {\n            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n            try {\n                for(var _iterator1 = Object.values(word)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){\n                    var letter2 = _step1.value;\n                    console.log(\"letter\", letter2);\n                    updateAlphabet(letter2);\n                }\n            } catch (err) {\n                _didIteratorError1 = true;\n                _iteratorError1 = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                        _iterator1.return();\n                    }\n                } finally{\n                    if (_didIteratorError1) {\n                        throw _iteratorError1;\n                    }\n                }\n            }\n            setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(attempts).concat([\n                Object.values(word)\n            ]));\n            resetAttempt();\n        }\n    };\n    var pickRandomWord = function(array) {\n        return array[Math.floor(Math.random() * array.length)];\n    };\n    var resetGame = function() {\n        resetAttempt();\n        setSelectedWord(pickRandomWord(words));\n        setAttempts([]);\n        setPlayerHasWon(false);\n        setAlphabet({\n            a: false,\n            b: false,\n            c: false,\n            d: false,\n            e: false,\n            f: false,\n            g: false,\n            h: false,\n            i: false,\n            j: false,\n            k: false,\n            l: false,\n            m: false,\n            n: false,\n            o: false,\n            p: false,\n            q: false,\n            r: false,\n            s: false,\n            t: false,\n            u: false,\n            v: false,\n            w: false,\n            x: false,\n            y: false,\n            z: false\n        });\n    };\n    var updateAlphabet = function(letters) {\n        var _obj;\n        setAlphabet((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, alphabet), (_obj = {}, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, letter[0], true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, letter[0], true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, letter[0], true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, letter[0], true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, letter[0], true), _obj)));\n    };\n    //state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        1: null,\n        2: null,\n        3: null,\n        4: null,\n        5: null\n    }), currentAttempt = ref[0], setCurrentAttempt = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), attempts = ref1[0], setAttempts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pickRandomWord(words)), selectedWord = ref2[0], setSelectedWord = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), playerHasWon = ref3[0], setPlayerHasWon = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), playerHasLost = ref4[0], setPlayerHasLost = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), limitedToTen = ref5[0], setLimitedToTen = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        a: false,\n        b: false,\n        c: false,\n        d: false,\n        e: false,\n        f: false,\n        g: false,\n        h: false,\n        i: false,\n        j: false,\n        k: false,\n        l: false,\n        m: false,\n        n: false,\n        o: false,\n        p: false,\n        q: false,\n        r: false,\n        s: false,\n        t: false,\n        u: false,\n        v: false,\n        w: false,\n        x: false,\n        y: false,\n        z: false\n    }), alphabet = ref6[0], setAlphabet = ref6[1];\n    //side effects\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!limitedToTen) {\n            return;\n        }\n        if (attempts.length > 9) {\n            setPlayerHasLost(true);\n        }\n    }, [\n        attempts\n    ]);\n    console.log(\"alpha\", alphabet);\n    //render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Word Game Challenge\"\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                class: \"switch\",\n                children: [\n                    \"Limit to ten\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        value: limitedToTen,\n                        onChange: function() {\n                            setLimitedToTen(!limitedToTen);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 164,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        class: \"slider round\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 171,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 162,\n                columnNumber: 7\n            }, this),\n            limitedToTen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"You have \",\n                    10 - attempts.length,\n                    \" moves remaining.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 174,\n                columnNumber: 9\n            }, this),\n            attempts.length ? attempts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_previousAttempt__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    playerHasWon: playerHasWon,\n                    setPlayerHasWon: setPlayerHasWon,\n                    attempt: item,\n                    word: {\n                        1: selectedWord[0],\n                        2: selectedWord[1],\n                        3: selectedWord[2],\n                        4: selectedWord[3],\n                        5: selectedWord[4]\n                    }\n                }, index, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                    lineNumber: 179,\n                    columnNumber: 13\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            !playerHasWon && !playerHasLost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_inputComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        word: currentAttempt,\n                        setWord: setCurrentAttempt,\n                        checkWord: checkWord,\n                        currentAttempt: currentAttempt\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 200,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_submitButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        handleClick: function() {\n                            checkWord(currentAttempt);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 206,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            playerHasWon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \" row\",\n                    alignItems: \"center\",\n                    margin: \"10px\"\n                },\n                children: [\n                    \"You won in \",\n                    attempts.length,\n                    \" moves!\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        onClick: function() {\n                            resetGame();\n                        },\n                        children: \"Restart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 224,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 215,\n                columnNumber: 9\n            }, this),\n            playerHasLost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \" row\",\n                    alignItems: \"center\",\n                    margin: \"10px\"\n                },\n                children: [\n                    \"Sorry, you ran out of tries!\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        onClick: function() {\n                            resetGame();\n                        },\n                        children: \"Restart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                        lineNumber: 244,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 235,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n        lineNumber: 151,\n        columnNumber: 5\n    }, this);\n}\n_s(Game, \"PrdBUKI4bc9pPc8E6EOzTpn1tT4=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDTDs7Ozs7O1lBRUosQ0FDTjtBQUNKLENBQUM7R0ExUHVCckIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2lucHV0Q29tcG9uZW50XCI7XG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3N1Ym1pdEJ1dHRvblwiO1xuaW1wb3J0IFByZXZpb3VzQXR0ZW1wdCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmV2aW91c0F0dGVtcHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgLy93b3JkcyBhcnJheVxuICBjb25zdCB3b3JkcyA9IFtcbiAgICBcImhlbGxvXCIsXG4gICAgXCJ3b3JsZFwiLFxuICAgIFwiY2xvc2VcIixcbiAgICBcImNvZGVzXCIsXG4gICAgXCJjbGVhclwiLFxuICAgIFwiaG91c2VcIixcbiAgICBcIm1vdXNlXCIsXG4gICAgXCJsZWFyblwiLFxuICAgIFwiZXJyb3JcIixcbiAgICBcImJhc2ljXCIsXG4gICAgXCJleGlzdFwiLFxuICAgIFwiZXhpdHNcIixcbiAgXTtcblxuICAvL2Z1bmN0aW9uc1xuICBjb25zdCByZXNldEF0dGVtcHQgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEF0dGVtcHQoe1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGNoZWNrV29yZCA9ICh3b3JkKSA9PiB7XG4gICAgbGV0IHdvcmRJc0ZpbmlzaGVkID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBsZXR0ZXIgb2YgT2JqZWN0LnZhbHVlcyh3b3JkKSkge1xuICAgICAgaWYgKCFsZXR0ZXIpIHtcbiAgICAgICAgd29yZElzRmluaXNoZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdvcmRJc0ZpbmlzaGVkKSB7XG4gICAgICBmb3IgKGxldCBsZXR0ZXIgb2YgT2JqZWN0LnZhbHVlcyh3b3JkKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxldHRlclwiLCBsZXR0ZXIpO1xuICAgICAgICB1cGRhdGVBbHBoYWJldChsZXR0ZXIpO1xuICAgICAgfVxuICAgICAgc2V0QXR0ZW1wdHMoWy4uLmF0dGVtcHRzLCBPYmplY3QudmFsdWVzKHdvcmQpXSk7XG4gICAgICByZXNldEF0dGVtcHQoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBpY2tSYW5kb21Xb3JkID0gKGFycmF5KSA9PiB7XG4gICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldO1xuICB9O1xuICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG4gICAgcmVzZXRBdHRlbXB0KCk7XG4gICAgc2V0U2VsZWN0ZWRXb3JkKHBpY2tSYW5kb21Xb3JkKHdvcmRzKSk7XG4gICAgc2V0QXR0ZW1wdHMoW10pO1xuICAgIHNldFBsYXllckhhc1dvbihmYWxzZSk7XG4gICAgc2V0QWxwaGFiZXQoe1xuICAgICAgYTogZmFsc2UsXG4gICAgICBiOiBmYWxzZSxcbiAgICAgIGM6IGZhbHNlLFxuICAgICAgZDogZmFsc2UsXG4gICAgICBlOiBmYWxzZSxcbiAgICAgIGY6IGZhbHNlLFxuICAgICAgZzogZmFsc2UsXG4gICAgICBoOiBmYWxzZSxcbiAgICAgIGk6IGZhbHNlLFxuICAgICAgajogZmFsc2UsXG4gICAgICBrOiBmYWxzZSxcbiAgICAgIGw6IGZhbHNlLFxuICAgICAgbTogZmFsc2UsXG4gICAgICBuOiBmYWxzZSxcbiAgICAgIG86IGZhbHNlLFxuICAgICAgcDogZmFsc2UsXG4gICAgICBxOiBmYWxzZSxcbiAgICAgIHI6IGZhbHNlLFxuICAgICAgczogZmFsc2UsXG4gICAgICB0OiBmYWxzZSxcbiAgICAgIHU6IGZhbHNlLFxuICAgICAgdjogZmFsc2UsXG4gICAgICB3OiBmYWxzZSxcbiAgICAgIHg6IGZhbHNlLFxuICAgICAgeTogZmFsc2UsXG4gICAgICB6OiBmYWxzZSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlQWxwaGFiZXQgPSAobGV0dGVycykgPT4ge1xuICAgIHNldEFscGhhYmV0KHtcbiAgICAgIC4uLmFscGhhYmV0LFxuICAgICAgW2xldHRlclswXV06IHRydWUsXG4gICAgICBbbGV0dGVyWzBdXTogdHJ1ZSxcbiAgICAgIFtsZXR0ZXJbMF1dOiB0cnVlLFxuICAgICAgW2xldHRlclswXV06IHRydWUsXG4gICAgICBbbGV0dGVyWzBdXTogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcblxuICAvL3N0YXRlXG4gIGNvbnN0IFtjdXJyZW50QXR0ZW1wdCwgc2V0Q3VycmVudEF0dGVtcHRdID0gdXNlU3RhdGUoe1xuICAgIDE6IG51bGwsXG4gICAgMjogbnVsbCxcbiAgICAzOiBudWxsLFxuICAgIDQ6IG51bGwsXG4gICAgNTogbnVsbCxcbiAgfSk7XG4gIGNvbnN0IFthdHRlbXB0cywgc2V0QXR0ZW1wdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRXb3JkLCBzZXRTZWxlY3RlZFdvcmRdID0gdXNlU3RhdGUocGlja1JhbmRvbVdvcmQod29yZHMpKTtcbiAgY29uc3QgW3BsYXllckhhc1dvbiwgc2V0UGxheWVySGFzV29uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BsYXllckhhc0xvc3QsIHNldFBsYXllckhhc0xvc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbGltaXRlZFRvVGVuLCBzZXRMaW1pdGVkVG9UZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWxwaGFiZXQsIHNldEFscGhhYmV0XSA9IHVzZVN0YXRlKHtcbiAgICBhOiBmYWxzZSxcbiAgICBiOiBmYWxzZSxcbiAgICBjOiBmYWxzZSxcbiAgICBkOiBmYWxzZSxcbiAgICBlOiBmYWxzZSxcbiAgICBmOiBmYWxzZSxcbiAgICBnOiBmYWxzZSxcbiAgICBoOiBmYWxzZSxcbiAgICBpOiBmYWxzZSxcbiAgICBqOiBmYWxzZSxcbiAgICBrOiBmYWxzZSxcbiAgICBsOiBmYWxzZSxcbiAgICBtOiBmYWxzZSxcbiAgICBuOiBmYWxzZSxcbiAgICBvOiBmYWxzZSxcbiAgICBwOiBmYWxzZSxcbiAgICBxOiBmYWxzZSxcbiAgICByOiBmYWxzZSxcbiAgICBzOiBmYWxzZSxcbiAgICB0OiBmYWxzZSxcbiAgICB1OiBmYWxzZSxcbiAgICB2OiBmYWxzZSxcbiAgICB3OiBmYWxzZSxcbiAgICB4OiBmYWxzZSxcbiAgICB5OiBmYWxzZSxcbiAgICB6OiBmYWxzZSxcbiAgfSk7XG5cbiAgLy9zaWRlIGVmZmVjdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxpbWl0ZWRUb1Rlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYXR0ZW1wdHMubGVuZ3RoID4gOSkge1xuICAgICAgc2V0UGxheWVySGFzTG9zdCh0cnVlKTtcbiAgICB9XG4gIH0sIFthdHRlbXB0c10pO1xuICBjb25zb2xlLmxvZyhcImFscGhhXCIsIGFscGhhYmV0KTtcbiAgLy9yZW5kZXJcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGgyPldvcmQgR2FtZSBDaGFsbGVuZ2U8L2gyPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic3dpdGNoXCI+XG4gICAgICAgIExpbWl0IHRvIHRlblxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIHZhbHVlPXtsaW1pdGVkVG9UZW59XG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgIHNldExpbWl0ZWRUb1RlbighbGltaXRlZFRvVGVuKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgICB7bGltaXRlZFRvVGVuICYmIChcbiAgICAgICAgPGgzPllvdSBoYXZlIHsxMCAtIGF0dGVtcHRzLmxlbmd0aH0gbW92ZXMgcmVtYWluaW5nLjwvaDM+XG4gICAgICApfVxuICAgICAge2F0dGVtcHRzLmxlbmd0aCA/IChcbiAgICAgICAgYXR0ZW1wdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJldmlvdXNBdHRlbXB0XG4gICAgICAgICAgICAgIHBsYXllckhhc1dvbj17cGxheWVySGFzV29ufVxuICAgICAgICAgICAgICBzZXRQbGF5ZXJIYXNXb249e3NldFBsYXllckhhc1dvbn1cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgYXR0ZW1wdD17aXRlbX1cbiAgICAgICAgICAgICAgd29yZD17e1xuICAgICAgICAgICAgICAgIDE6IHNlbGVjdGVkV29yZFswXSxcbiAgICAgICAgICAgICAgICAyOiBzZWxlY3RlZFdvcmRbMV0sXG4gICAgICAgICAgICAgICAgMzogc2VsZWN0ZWRXb3JkWzJdLFxuICAgICAgICAgICAgICAgIDQ6IHNlbGVjdGVkV29yZFszXSxcbiAgICAgICAgICAgICAgICA1OiBzZWxlY3RlZFdvcmRbNF0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9QcmV2aW91c0F0dGVtcHQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgICAgeyFwbGF5ZXJIYXNXb24gJiYgIXBsYXllckhhc0xvc3QgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICA8SW5wdXRDb21wb25lbnRcbiAgICAgICAgICAgIHdvcmQ9e2N1cnJlbnRBdHRlbXB0fVxuICAgICAgICAgICAgc2V0V29yZD17c2V0Q3VycmVudEF0dGVtcHR9XG4gICAgICAgICAgICBjaGVja1dvcmQ9e2NoZWNrV29yZH1cbiAgICAgICAgICAgIGN1cnJlbnRBdHRlbXB0PXtjdXJyZW50QXR0ZW1wdH1cbiAgICAgICAgICA+PC9JbnB1dENvbXBvbmVudD5cbiAgICAgICAgICA8U3VibWl0QnV0dG9uXG4gICAgICAgICAgICBoYW5kbGVDbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjaGVja1dvcmQoY3VycmVudEF0dGVtcHQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+PC9TdWJtaXRCdXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAge3BsYXllckhhc1dvbiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcIiByb3dcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBZb3Ugd29uIGluIHthdHRlbXB0cy5sZW5ndGh9IG1vdmVzIXtcIiBcIn1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICByZXNldEdhbWUoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVzdGFydFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7cGxheWVySGFzTG9zdCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcIiByb3dcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTb3JyeSwgeW91IHJhbiBvdXQgb2YgdHJpZXMhXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlc3RhcnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXRDb21wb25lbnQiLCJTdWJtaXRCdXR0b24iLCJQcmV2aW91c0F0dGVtcHQiLCJHYW1lIiwid29yZHMiLCJyZXNldEF0dGVtcHQiLCJzZXRDdXJyZW50QXR0ZW1wdCIsImNoZWNrV29yZCIsIndvcmQiLCJ3b3JkSXNGaW5pc2hlZCIsIk9iamVjdCIsInZhbHVlcyIsImxldHRlciIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVBbHBoYWJldCIsInNldEF0dGVtcHRzIiwiYXR0ZW1wdHMiLCJwaWNrUmFuZG9tV29yZCIsImFycmF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicmVzZXRHYW1lIiwic2V0U2VsZWN0ZWRXb3JkIiwic2V0UGxheWVySGFzV29uIiwic2V0QWxwaGFiZXQiLCJhIiwiYiIsImMiLCJkIiwiZSIsImYiLCJnIiwiaCIsImkiLCJqIiwiayIsImwiLCJtIiwibiIsIm8iLCJwIiwicSIsInIiLCJzIiwidCIsInUiLCJ2IiwidyIsIngiLCJ5IiwieiIsImxldHRlcnMiLCJhbHBoYWJldCIsImN1cnJlbnRBdHRlbXB0Iiwic2VsZWN0ZWRXb3JkIiwicGxheWVySGFzV29uIiwicGxheWVySGFzTG9zdCIsInNldFBsYXllckhhc0xvc3QiLCJsaW1pdGVkVG9UZW4iLCJzZXRMaW1pdGVkVG9UZW4iLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoMiIsImxhYmVsIiwiY2xhc3MiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwic3BhbiIsImgzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYXR0ZW1wdCIsInNldFdvcmQiLCJoYW5kbGVDbGljayIsIm1hcmdpbiIsImJ1dHRvbiIsIm1hcmdpbkxlZnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});