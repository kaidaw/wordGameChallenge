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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@12.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_inputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/inputComponent */ \"./components/inputComponent.js\");\n/* harmony import */ var _components_submitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/submitButton */ \"./components/submitButton.js\");\n/* harmony import */ var _components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/previousAttempt */ \"./components/previousAttempt.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Game() {\n    var _this = this;\n    _s();\n    var words = [\n        \"hello\",\n        \"world\",\n        \"close\",\n        \"codes\",\n        \"clear\",\n        \"house\",\n        \"mouse\",\n        \"learn\",\n        \"error\",\n        \"basic\",\n        \"exist\",\n        \"exits\", \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        1: null,\n        2: null,\n        3: null,\n        4: null,\n        5: null\n    }), currentAttempt = ref[0], setCurrentAttempt = ref[1];\n    var checkWord = function(word) {\n        var wordIsFinished = true;\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = Object.values(word)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var letter = _step.value;\n                if (!letter) {\n                    wordIsFinished = false;\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        console.log(\"wordisfinished\", wordIsFinished);\n        if (wordIsFinished) {\n            setAttempts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(attempts).concat([\n                Object.values(word)\n            ]));\n            resetAttempt();\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        document.addEventListener(\"keydown\", function(event) {\n            if (event.code !== \"Enter\") return;\n            checkWord(currentAttempt);\n        });\n    }, [\n        currentAttempt\n    ]);\n    var pickRandomWord = function(array) {\n        array[Math.floor(Math.random() * array.length)];\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pickRandomWord(words)), selectedWord = ref1[0], setSelectedWord = ref1[1];\n    console.log(\"selectedWord\", selectedWord);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), attempts = ref2[0], setAttempts = ref2[1];\n    var resetAttempt = function() {\n        setCurrentAttempt({\n            1: null,\n            2: null,\n            3: null,\n            4: null,\n            5: null\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            attempts.length ? attempts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_previousAttempt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    attempt: item\n                }, index, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                    lineNumber: 69,\n                    columnNumber: 18\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_inputComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                word: currentAttempt,\n                setWord: setCurrentAttempt\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_submitButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                handleClick: function() {\n                    checkWord(currentAttempt);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {},\n                children: \"Pick new word\"\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/pages/index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"k63KCqPjY5vFHuUFpxAh7WpPD9Q=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQixDQUFDO0FBQ2hCLGFBQUMsRUFBRSxJQUFJO0FBQ1AsYUFBQyxFQUFFLElBQUk7QUFDUCxhQUFDLEVBQUUsSUFBSTtBQUNQLGFBQUMsRUFBRSxJQUFJO0FBQ1AsYUFBQyxFQUFFLElBQUk7U0FDUixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QscUJBQ0U7O1lBQ0dVLFFBQVEsQ0FBQ1csTUFBTSxHQUNkWCxRQUFRLENBQUNjLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBSztnQkFDNUIscUJBQU8sOERBQUM5QixtRUFBZTtvQkFBYStCLE9BQU8sRUFBRUYsSUFBSTttQkFBcEJDLEtBQUs7Ozs7eUJBQW1DLENBQUM7WUFDeEUsQ0FBQyxDQUFDLGlCQUVGLDZJQUFLOzBCQUVQLDhEQUFDaEMsa0VBQWM7Z0JBQ2JRLElBQUksRUFBRUgsY0FBYztnQkFDcEI2QixPQUFPLEVBQUU1QixpQkFBaUI7Ozs7O29CQUNWOzBCQUNsQiw4REFBQ0wsZ0VBQVk7Z0JBQ1hrQyxXQUFXLEVBQUUsV0FBTTtvQkFDakI1QixTQUFTLENBQUNGLGNBQWMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDOzs7OztvQkFDYTswQkFDaEIsOERBQUMrQixRQUFNO2dCQUFDQyxPQUFPLEVBQUUsV0FBTSxDQUFDLENBQUM7MEJBQUUsZUFBYTs7Ozs7b0JBQVM7O29CQUNoRCxDQUNIO0FBQ0osQ0FBQztHQTlFdUJsQyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnB1dENvbXBvbmVudFwiO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9zdWJtaXRCdXR0b25cIjtcbmltcG9ydCBQcmV2aW91c0F0dGVtcHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJldmlvdXNBdHRlbXB0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUoKSB7XG4gIGNvbnN0IHdvcmRzID0gW1xuICAgIFwiaGVsbG9cIixcbiAgICBcIndvcmxkXCIsXG4gICAgXCJjbG9zZVwiLFxuICAgIFwiY29kZXNcIixcbiAgICBcImNsZWFyXCIsXG4gICAgXCJob3VzZVwiLFxuICAgIFwibW91c2VcIixcbiAgICBcImxlYXJuXCIsXG4gICAgXCJlcnJvclwiLFxuICAgIFwiYmFzaWNcIixcbiAgICBcImV4aXN0XCIsXG4gICAgXCJleGl0c1wiLFxuICBdO1xuICBjb25zdCBbY3VycmVudEF0dGVtcHQsIHNldEN1cnJlbnRBdHRlbXB0XSA9IHVzZVN0YXRlKHtcbiAgICAxOiBudWxsLFxuICAgIDI6IG51bGwsXG4gICAgMzogbnVsbCxcbiAgICA0OiBudWxsLFxuICAgIDU6IG51bGwsXG4gIH0pO1xuICBjb25zdCBjaGVja1dvcmQgPSAod29yZCkgPT4ge1xuICAgIGxldCB3b3JkSXNGaW5pc2hlZCA9IHRydWU7XG4gICAgZm9yIChsZXQgbGV0dGVyIG9mIE9iamVjdC52YWx1ZXMod29yZCkpIHtcbiAgICAgIGlmICghbGV0dGVyKSB7XG4gICAgICAgIHdvcmRJc0ZpbmlzaGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwid29yZGlzZmluaXNoZWRcIiwgd29yZElzRmluaXNoZWQpO1xuICAgIGlmICh3b3JkSXNGaW5pc2hlZCkge1xuICAgICAgc2V0QXR0ZW1wdHMoWy4uLmF0dGVtcHRzLCBPYmplY3QudmFsdWVzKHdvcmQpXSk7XG4gICAgICByZXNldEF0dGVtcHQoKTtcbiAgICB9XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY29kZSAhPT0gXCJFbnRlclwiKSByZXR1cm47XG4gICAgICBjaGVja1dvcmQoY3VycmVudEF0dGVtcHQpO1xuICAgIH0pO1xuICB9LCBbY3VycmVudEF0dGVtcHRdKTtcbiAgY29uc3QgcGlja1JhbmRvbVdvcmQgPSAoYXJyYXkpID0+IHtcbiAgICBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcbiAgfTtcbiAgY29uc3QgW3NlbGVjdGVkV29yZCwgc2V0U2VsZWN0ZWRXb3JkXSA9IHVzZVN0YXRlKHBpY2tSYW5kb21Xb3JkKHdvcmRzKSk7XG5cbiAgY29uc29sZS5sb2coXCJzZWxlY3RlZFdvcmRcIiwgc2VsZWN0ZWRXb3JkKTtcbiAgY29uc3QgW2F0dGVtcHRzLCBzZXRBdHRlbXB0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHJlc2V0QXR0ZW1wdCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50QXR0ZW1wdCh7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2F0dGVtcHRzLmxlbmd0aCA/IChcbiAgICAgICAgYXR0ZW1wdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8UHJldmlvdXNBdHRlbXB0IGtleT17aW5kZXh9IGF0dGVtcHQ9e2l0ZW19PjwvUHJldmlvdXNBdHRlbXB0PjtcbiAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgICAgPElucHV0Q29tcG9uZW50XG4gICAgICAgIHdvcmQ9e2N1cnJlbnRBdHRlbXB0fVxuICAgICAgICBzZXRXb3JkPXtzZXRDdXJyZW50QXR0ZW1wdH1cbiAgICAgID48L0lucHV0Q29tcG9uZW50PlxuICAgICAgPFN1Ym1pdEJ1dHRvblxuICAgICAgICBoYW5kbGVDbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNoZWNrV29yZChjdXJyZW50QXR0ZW1wdCk7XG4gICAgICAgIH19XG4gICAgICA+PC9TdWJtaXRCdXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHt9fT5QaWNrIG5ldyB3b3JkPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbnB1dENvbXBvbmVudCIsIlN1Ym1pdEJ1dHRvbiIsIlByZXZpb3VzQXR0ZW1wdCIsIkdhbWUiLCJ3b3JkcyIsImN1cnJlbnRBdHRlbXB0Iiwic2V0Q3VycmVudEF0dGVtcHQiLCJjaGVja1dvcmQiLCJ3b3JkIiwid29yZElzRmluaXNoZWQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZXR0ZXIiLCJjb25zb2xlIiwibG9nIiwic2V0QXR0ZW1wdHMiLCJhdHRlbXB0cyIsInJlc2V0QXR0ZW1wdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29kZSIsInBpY2tSYW5kb21Xb3JkIiwiYXJyYXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzZWxlY3RlZFdvcmQiLCJzZXRTZWxlY3RlZFdvcmQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJhdHRlbXB0Iiwic2V0V29yZCIsImhhbmRsZUNsaWNrIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});