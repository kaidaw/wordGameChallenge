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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AlphabetComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction AlphabetComponent(param) {\n    var alphabet = param.alphabet;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexWrap: \"wrap\",\n            flexDirection: \" row\",\n            alignItems: \"center\",\n            margin: \"10px\",\n            width: \"50%\",\n            justifyContent: \"center\"\n        },\n        children: Object.keys(alphabet).map(function(item, index) {\n            if (alphabet[item]) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        justifyContent: \"center\",\n                        display: \"flex\",\n                        width: \"60px\",\n                        height: \"30px\",\n                        backgroundColor: \"grey\",\n                        alignItems: \"center\",\n                        border: \"1px solid cyan\"\n                    },\n                    children: item\n                }, void 0, false, {\n                    fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/alphabetComponent.js\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, _this);\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    justifyContent: \"center\",\n                    display: \"flex\",\n                    width: \"60px\",\n                    height: \"30px\",\n                    backgroundColor: \"green\",\n                    alignItems: \"center\",\n                    border: \"1px solid cyan\"\n                },\n                children: item\n            }, void 0, false, {\n                fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/alphabetComponent.js\",\n                lineNumber: 35,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/alphabetComponent.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = AlphabetComponent;\nvar _c;\n$RefreshReg$(_c, \"AlphabetComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FscGhhYmV0Q29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFFbEIsU0FBU0MsaUJBQWlCLENBQUMsS0FBWSxFQUFFO1FBQWQsUUFBVSxHQUFWLEtBQVksQ0FBVkMsUUFBUTs7SUFDbEQscUJBQ0UsOERBQUNDLEtBQUc7UUFDRkMsS0FBSyxFQUFFO1lBQ0xDLE9BQU8sRUFBRSxNQUFNO1lBQ2ZDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCQyxhQUFhLEVBQUUsTUFBTTtZQUNyQkMsVUFBVSxFQUFFLFFBQVE7WUFDcEJDLE1BQU0sRUFBRSxNQUFNO1lBQ2RDLEtBQUssRUFBRSxLQUFLO1lBQ1pDLGNBQWMsRUFBRSxRQUFRO1NBQ3pCO2tCQUVBQyxNQUFNLENBQUNDLElBQUksQ0FBQ1gsUUFBUSxDQUFDLENBQUNZLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBSztZQUMxQyxJQUFJZCxRQUFRLENBQUNhLElBQUksQ0FBQyxFQUFFO2dCQUNsQixxQkFDRSw4REFBQ1osS0FBRztvQkFDRkMsS0FBSyxFQUFFO3dCQUNMTyxjQUFjLEVBQUUsUUFBUTt3QkFDeEJOLE9BQU8sRUFBRSxNQUFNO3dCQUNmSyxLQUFLLEVBQUUsTUFBTTt3QkFDYk8sTUFBTSxFQUFFLE1BQU07d0JBQ2RDLGVBQWUsRUFBRSxNQUFNO3dCQUN2QlYsVUFBVSxFQUFFLFFBQVE7d0JBQ3BCVyxNQUFNLEVBQUUsZ0JBQWdCO3FCQUN6Qjs4QkFFQUosSUFBSTs7Ozs7eUJBQ0QsQ0FDTjtZQUNKLENBQUM7WUFDRCxxQkFDRSw4REFBQ1osS0FBRztnQkFDRkMsS0FBSyxFQUFFO29CQUNMTyxjQUFjLEVBQUUsUUFBUTtvQkFDeEJOLE9BQU8sRUFBRSxNQUFNO29CQUNmSyxLQUFLLEVBQUUsTUFBTTtvQkFDYk8sTUFBTSxFQUFFLE1BQU07b0JBQ2RDLGVBQWUsRUFBRSxPQUFPO29CQUN4QlYsVUFBVSxFQUFFLFFBQVE7b0JBQ3BCVyxNQUFNLEVBQUUsZ0JBQWdCO2lCQUN6QjswQkFFQUosSUFBSTs7Ozs7cUJBQ0QsQ0FDTjtRQUNKLENBQUMsQ0FBQzs7Ozs7WUFDRSxDQUNOO0FBQ0osQ0FBQztBQWpEdUJkLEtBQUFBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FscGhhYmV0Q29tcG9uZW50LmpzPzM2OWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxwaGFiZXRDb21wb25lbnQoeyBhbHBoYWJldCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCIgcm93XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAge09iamVjdC5rZXlzKGFscGhhYmV0KS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChhbHBoYWJldFtpdGVtXSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNjBweFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMHB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgY3lhblwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjYwcHhcIixcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgY3lhblwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQWxwaGFiZXRDb21wb25lbnQiLCJhbHBoYWJldCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/alphabetComponent.js\n"));

/***/ })

});