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

/***/ "./components/submitButton.js":
/*!************************************!*\
  !*** ./components/submitButton.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubmitButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction SubmitButton(param) {\n    var handleChange = param.handleChange, currentAttempt = param.currentAttempt, resetAttempt = param.resetAttempt;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function() {\n                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n                try {\n                    for(var _iterator = currentAttempt[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                        var letter = _step.value;\n                        if (!letter) {\n                            return;\n                        }\n                    }\n                } catch (err) {\n                    _didIteratorError = true;\n                    _iteratorError = err;\n                } finally{\n                    try {\n                        if (!_iteratorNormalCompletion && _iterator.return != null) {\n                            _iterator.return();\n                        }\n                    } finally{\n                        if (_didIteratorError) {\n                            throw _iteratorError;\n                        }\n                    }\n                }\n                handleChange(currentAttempt);\n                resetAttempt();\n            },\n            children: \"Submit\"\n        }, void 0, false, {\n            fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/submitButton.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jamesalexander/Documents/repo/wordGameChallenge/components/submitButton.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = SubmitButton;\nvar _c;\n$RefreshReg$(_c, \"SubmitButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1Ym1pdEJ1dHRvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWlDO0FBRWxCLFNBQVNDLFlBQVksQ0FBQyxLQUlwQyxFQUFFO1FBSERDLFlBQVksR0FEdUIsS0FJcEMsQ0FIQ0EsWUFBWSxFQUNaQyxjQUFjLEdBRnFCLEtBSXBDLENBRkNBLGNBQWMsRUFDZEMsWUFBWSxHQUh1QixLQUlwQyxDQURDQSxZQUFZO0lBRVoscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNDLFFBQU07WUFDTEMsT0FBTyxFQUFFLFdBQU07b0JBQ1IseUJBQVUsU0FBVixpQkFBVSxVQUFWLGNBQVU7O29CQUFmLFFBQUssU0FBVSxHQUFJSixjQUFjLHFCQUE1QixLQUFVLElBQVYseUJBQVUsSUFBVixLQUFVLEdBQVYsU0FBVSxnQkFBVix5QkFBVSxRQUFvQjt3QkFBOUIsSUFBSUssTUFBTSxHQUFWLEtBQVU7d0JBQ2IsSUFBSSxDQUFDQSxNQUFNLEVBQUU7NEJBQ1gsT0FBTzt3QkFDVCxDQUFDO29CQUNILENBQUM7O29CQUpJLGlCQUFVO29CQUFWLGNBQVU7Ozs2QkFBVix5QkFBVSxJQUFWLFNBQVU7NEJBQVYsU0FBVTs7OzRCQUFWLGlCQUFVO2tDQUFWLGNBQVU7Ozs7Z0JBS2ZOLFlBQVksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7Z0JBQzdCQyxZQUFZLEVBQUUsQ0FBQztZQUNqQixDQUFDO3NCQUNGLFFBRUQ7Ozs7O2dCQUFTOzs7OztZQUNMLENBQ047QUFDSixDQUFDO0FBdEJ1QkgsS0FBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3N1Ym1pdEJ1dHRvbi5qcz83NDRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Ym1pdEJ1dHRvbih7XG4gIGhhbmRsZUNoYW5nZSxcbiAgY3VycmVudEF0dGVtcHQsXG4gIHJlc2V0QXR0ZW1wdCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgbGV0dGVyIG9mIGN1cnJlbnRBdHRlbXB0KSB7XG4gICAgICAgICAgICBpZiAoIWxldHRlcikge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGhhbmRsZUNoYW5nZShjdXJyZW50QXR0ZW1wdCk7XG4gICAgICAgICAgcmVzZXRBdHRlbXB0KCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTdWJtaXRCdXR0b24iLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50QXR0ZW1wdCIsInJlc2V0QXR0ZW1wdCIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsZXR0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/submitButton.js\n"));

/***/ })

});