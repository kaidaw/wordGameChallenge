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

/***/ "./components/alphabetComponent.js":
/*!*****************************************!*\
  !*** ./components/alphabetComponent.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AlphabetComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction AlphabetComponent(param) {\n    var alphabet = param.alphabet;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexWrap: \"wrap\",\n            flexDirection: \" row\",\n            alignItems: \"center\",\n            margin: \"10px\",\n            width: \"50%\",\n            justifyContent: \"center\"\n        },\n        children: Object.keys(alphabet).map(function(item, index) {\n            if (alphabet[item]) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        justifyContent: \"center\",\n                        display: \"flex\",\n                        width: \"60px\",\n                        height: \"30px\",\n                        backgroundColor: \"grey\",\n                        alignItems: \"center\",\n                        border: \"1px solid cyan\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/alphabetComponent.js\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, _this);\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    justifyContent: \"center\",\n                    display: \"flex\",\n                    width: \"60px\",\n                    height: \"30px\",\n                    backgroundColor: \"green\",\n                    alignItems: \"center\",\n                    border: \"1px solid cyan\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/alphabetComponent.js\",\n                lineNumber: 33,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/alphabetComponent.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = AlphabetComponent;\nvar _c;\n$RefreshReg$(_c, \"AlphabetComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FscGhhYmV0Q29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFFbEIsU0FBU0MsaUJBQWlCLENBQUMsS0FBWSxFQUFFO1FBQWQsUUFBVSxHQUFWLEtBQVksQ0FBVkMsUUFBUTs7SUFDbEQscUJBQ0UsOERBQUNDLEtBQUc7UUFDRkMsS0FBSyxFQUFFO1lBQ0xDLE9BQU8sRUFBRSxNQUFNO1lBQ2ZDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCQyxhQUFhLEVBQUUsTUFBTTtZQUNyQkMsVUFBVSxFQUFFLFFBQVE7WUFDcEJDLE1BQU0sRUFBRSxNQUFNO1lBQ2RDLEtBQUssRUFBRSxLQUFLO1lBQ1pDLGNBQWMsRUFBRSxRQUFRO1NBQ3pCO2tCQUVBQyxNQUFNLENBQUNDLElBQUksQ0FBQ1gsUUFBUSxDQUFDLENBQUNZLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBSztZQUMxQyxJQUFJZCxRQUFRLENBQUNhLElBQUksQ0FBQyxFQUFFO2dCQUNsQixxQkFDRSw4REFBQ1osS0FBRztvQkFDRkMsS0FBSyxFQUFFO3dCQUNMTyxjQUFjLEVBQUUsUUFBUTt3QkFDeEJOLE9BQU8sRUFBRSxNQUFNO3dCQUNmSyxLQUFLLEVBQUUsTUFBTTt3QkFDYk8sTUFBTSxFQUFFLE1BQU07d0JBQ2RDLGVBQWUsRUFBRSxNQUFNO3dCQUN2QlYsVUFBVSxFQUFFLFFBQVE7d0JBQ3BCVyxNQUFNLEVBQUUsZ0JBQWdCO3FCQUN6Qjs7Ozs7eUJBQ0ksQ0FDUDtZQUNKLENBQUM7WUFDRCxxQkFDRSw4REFBQ2hCLEtBQUc7Z0JBQ0ZDLEtBQUssRUFBRTtvQkFDTE8sY0FBYyxFQUFFLFFBQVE7b0JBQ3hCTixPQUFPLEVBQUUsTUFBTTtvQkFDZkssS0FBSyxFQUFFLE1BQU07b0JBQ2JPLE1BQU0sRUFBRSxNQUFNO29CQUNkQyxlQUFlLEVBQUUsT0FBTztvQkFDeEJWLFVBQVUsRUFBRSxRQUFRO29CQUNwQlcsTUFBTSxFQUFFLGdCQUFnQjtpQkFDekI7Ozs7O3FCQUNJLENBQ1A7UUFDSixDQUFDLENBQUM7Ozs7O1lBQ0UsQ0FDTjtBQUNKLENBQUM7QUE3Q3VCbEIsS0FBQUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWxwaGFiZXRDb21wb25lbnQuanM/MzY5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbHBoYWJldENvbXBvbmVudCh7IGFscGhhYmV0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcIiByb3dcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgbWFyZ2luOiBcIjEwcHhcIixcbiAgICAgICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7T2JqZWN0LmtleXMoYWxwaGFiZXQpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGFscGhhYmV0W2l0ZW1dKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI2MHB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBjeWFuXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNjBweFwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBjeWFuXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQWxwaGFiZXRDb21wb25lbnQiLCJhbHBoYWJldCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/alphabetComponent.js\n"));

/***/ })

});