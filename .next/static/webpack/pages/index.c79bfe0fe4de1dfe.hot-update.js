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

/***/ "./components/inputComponent.js":
/*!**************************************!*\
  !*** ./components/inputComponent.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InputComponent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/.pnpm/@swc+helpers@0.4.11/node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction InputComponent(param) {\n    var handleChange = param.handleChange;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        1: null,\n        2: null,\n        3: null,\n        4: null,\n        5: null\n    }), word = ref[0], setWord = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = Object.keys(word)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var key = _step.value;\n                if (!word[key]) {\n                    return;\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        handleChange(Object.values(word));\n    }, [\n        word\n    ]);\n    console.log(\"world\", word);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: word[1] ? word[1] : \"\",\n                maxLength: 1,\n                onChange: function(e) {\n                    setWord((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, word), {\n                        1: e.target.value\n                    }));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/inputComponent.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: word[2] ? word[2] : \"\",\n                maxLength: 1,\n                onChange: function(e) {\n                    setWord((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, word), {\n                        2: e.target.value\n                    }));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/inputComponent.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: word[3] ? word[3] : \"\",\n                maxLength: 1,\n                onChange: function(e) {\n                    setWord((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, word), {\n                        3: e.target.value\n                    }));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/inputComponent.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: word[4] ? word[4] : \"\",\n                maxLength: 1,\n                onChange: function(e) {\n                    setWord((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, word), {\n                        4: e.target.value\n                    }));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/inputComponent.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: word[5] ? word[5] : \"\",\n                maxLength: 1,\n                onChange: function(e) {\n                    setWord((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, word), {\n                        5: e.target.value\n                    }));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/inputComponent.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/inputComponent.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(InputComponent, \"9jH1lJEse1OKcZQGnFccrozE04Q=\");\n_c = InputComponent;\nvar _c;\n$RefreshReg$(_c, \"InputComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxFQUFFLFNBQUNDLENBQUMsRUFBSztvQkFDZlosT0FBTyxDQUFDLHdLQUFLRCxJQUFJO0FBQUUseUJBQUMsRUFBRWEsQ0FBQyxDQUFDQyxNQUFNLENBQUNKLEtBQUs7c0JBQUUsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDOzs7OztvQkFDTTswQkFDVCw4REFBQ0QsT0FBSztnQkFDSkMsS0FBSyxFQUFFVixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO2dCQUM3QlcsU0FBUyxFQUFFLENBQUM7Z0JBQ1pDLFFBQVEsRUFBRSxTQUFDQyxDQUFDLEVBQUs7b0JBQ2ZaLE9BQU8sQ0FBQyx3S0FBS0QsSUFBSTtBQUFFLHlCQUFDLEVBQUVhLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSixLQUFLO3NCQUFFLENBQUMsQ0FBQztnQkFDMUMsQ0FBQzs7Ozs7b0JBQ007Ozs7OztZQUNMLENBQ047QUFDSixDQUFDO0dBeER1QlosY0FBYztBQUFkQSxLQUFBQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5wdXRDb21wb25lbnQuanM/MzRiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0Q29tcG9uZW50KHsgaGFuZGxlQ2hhbmdlIH0pIHtcbiAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoe1xuICAgIDE6IG51bGwsXG4gICAgMjogbnVsbCxcbiAgICAzOiBudWxsLFxuICAgIDQ6IG51bGwsXG4gICAgNTogbnVsbCxcbiAgfSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHdvcmQpKSB7XG4gICAgICBpZiAoIXdvcmRba2V5XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZShPYmplY3QudmFsdWVzKHdvcmQpKTtcbiAgfSwgW3dvcmRdKTtcbiAgY29uc29sZS5sb2coXCJ3b3JsZFwiLCB3b3JkKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgIHZhbHVlPXt3b3JkWzFdID8gd29yZFsxXSA6IFwiXCJ9XG4gICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgc2V0V29yZCh7IC4uLndvcmQsIDE6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICB9fVxuICAgICAgPjwvaW5wdXQ+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdmFsdWU9e3dvcmRbMl0gPyB3b3JkWzJdIDogXCJcIn1cbiAgICAgICAgbWF4TGVuZ3RoPXsxfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBzZXRXb3JkKHsgLi4ud29yZCwgMjogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgIH19XG4gICAgICA+PC9pbnB1dD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB2YWx1ZT17d29yZFszXSA/IHdvcmRbM10gOiBcIlwifVxuICAgICAgICBtYXhMZW5ndGg9ezF9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIHNldFdvcmQoeyAuLi53b3JkLCAzOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgfX1cbiAgICAgID48L2lucHV0PlxuICAgICAgPGlucHV0XG4gICAgICAgIHZhbHVlPXt3b3JkWzRdID8gd29yZFs0XSA6IFwiXCJ9XG4gICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgc2V0V29yZCh7IC4uLndvcmQsIDQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICB9fVxuICAgICAgPjwvaW5wdXQ+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdmFsdWU9e3dvcmRbNV0gPyB3b3JkWzVdIDogXCJcIn1cbiAgICAgICAgbWF4TGVuZ3RoPXsxfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBzZXRXb3JkKHsgLi4ud29yZCwgNTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgIH19XG4gICAgICA+PC9pbnB1dD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIklucHV0Q29tcG9uZW50IiwiaGFuZGxlQ2hhbmdlIiwid29yZCIsInNldFdvcmQiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlucHV0IiwidmFsdWUiLCJtYXhMZW5ndGgiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/inputComponent.js\n"));

/***/ })

});