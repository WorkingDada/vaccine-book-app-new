"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/PromoteCard.tsx":
/*!****************************************!*\
  !*** ./src/components/PromoteCard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PromoteCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _VideoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPlayer */ \"(app-pages-browser)/./src/components/VideoPlayer.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useWindowListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useWindowListener */ \"(app-pages-browser)/./src/hooks/useWindowListener.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction PromoteCard() {\n    _s();\n    const [playing, setPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,_hooks_useWindowListener__WEBPACK_IMPORTED_MODULE_3__.useWindowListener)(\"contextmenu\", (e)=>e.preventDefault());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_VideoPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                vdoSrc: \"/video/getvaccine.mp4\",\n                isPlaying: playing\n            }, void 0, false, {\n                fileName: \"/Users/officeservice/Desktop/ReactWeb/SWDEV/vaccine-book-app/src/components/PromoteCard.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-5\",\n                children: [\n                    \"Get your vaccine today.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm\",\n                        onClick: ()=>{\n                            setPlaying(!playing);\n                        },\n                        children: playing ? \"Pause\" : \"Play\"\n                    }, void 0, false, {\n                        fileName: \"/Users/officeservice/Desktop/ReactWeb/SWDEV/vaccine-book-app/src/components/PromoteCard.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/officeservice/Desktop/ReactWeb/SWDEV/vaccine-book-app/src/components/PromoteCard.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/officeservice/Desktop/ReactWeb/SWDEV/vaccine-book-app/src/components/PromoteCard.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_s(PromoteCard, \"VofEyQJUZzo6uwGfE913fWpMLQA=\", false, function() {\n    return [\n        _hooks_useWindowListener__WEBPACK_IMPORTED_MODULE_3__.useWindowListener\n    ];\n});\n_c = PromoteCard;\nvar _c;\n$RefreshReg$(_c, \"PromoteCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb21vdGVDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN1QztBQUNQO0FBQzZCO0FBRTlDLFNBQVNHOztJQUNwQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFFdkNDLDJFQUFpQkEsQ0FBQyxlQUFlLENBQUNJLElBQUlBLEVBQUVDLGNBQWM7SUFFdEQscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDVCxvREFBV0E7Z0JBQUNVLFFBQU87Z0JBQXdCQyxXQUFXUDs7Ozs7OzBCQUN2RCw4REFBQ0k7Z0JBQUlDLFdBQVU7O29CQUFPO2tDQUN0Qiw4REFBQ0c7d0JBQU9ILFdBQVU7d0JBQ2xCSSxTQUFTOzRCQUFLUixXQUFXLENBQUNEO3dCQUFRO2tDQUM3QkEsVUFBUyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEM7R0FoQndCRDs7UUFHcEJELHVFQUFpQkE7OztLQUhHQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9tb3RlQ2FyZC50c3g/OTI5NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBWaWRlb1BsYXllciBmcm9tIFwiLi9WaWRlb1BsYXllclwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VXaW5kb3dMaXN0ZW5lciB9IGZyb20gXCJAL2hvb2tzL3VzZVdpbmRvd0xpc3RlbmVyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvbW90ZUNhcmQoKXtcbiAgICBjb25zdCBbcGxheWluZywgc2V0UGxheWluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gICAgdXNlV2luZG93TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSk9PmUucHJldmVudERlZmF1bHQoKSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bODAlXSBzaGFkb3ctbGcgbXgtWzEwJV0gbXktMTAgcC0yIHJvdW5kZWQtbGcgYmctZ3JheS0yMDAgZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgPFZpZGVvUGxheWVyIHZkb1NyYz1cIi92aWRlby9nZXR2YWNjaW5lLm1wNFwiIGlzUGxheWluZz17cGxheWluZ30+PC9WaWRlb1BsYXllcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNVwiPkdldCB5b3VyIHZhY2NpbmUgdG9kYXkuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJsb2NrIHJvdW5kZWQtbWQgYmctc2t5LTYwMCBob3ZlcjpiZy1pbmRpZ28tNjAwIHB4LTMgcHktMiB0ZXh0LXdoaXRlIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3NldFBsYXlpbmcoIXBsYXlpbmcpfX0+XG4gICAgICAgICAgICAgICAge3BsYXlpbmc/ICdQYXVzZScgOiAnUGxheSd9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlZpZGVvUGxheWVyIiwidXNlU3RhdGUiLCJ1c2VXaW5kb3dMaXN0ZW5lciIsIlByb21vdGVDYXJkIiwicGxheWluZyIsInNldFBsYXlpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJ2ZG9TcmMiLCJpc1BsYXlpbmciLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PromoteCard.tsx\n"));

/***/ })

});